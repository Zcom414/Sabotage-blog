import  { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from "../assets/logo.png"
const menuItems = [
  { title: "ACCUEIL", link: "/" },
  { title: "ARTICLES", link: "/articles" },
  { title: "AUTEURS", link: "/auteurs" },
  { title: "CONTACT", link: "/contact" },
];

const  MenuCustom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 border-b-2 border-[#E11D48]"> 
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex justify-center flex-1">
          <span className="text-xl font-bold md:flex-1"><img className="h-40 w-auto object-contain" src={Logo}/></span>
        </div>
        <div className="md:flex md:flex-1 lg:w-0 justify-center hidden">
          {menuItems.map((item) => (
            <a key={item.title} href={item.link} className="mx-2 hover:bg-[#E11D48] px-3 py-2 rounded transition duration-300 ease-in-out">
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center justify-end flex-1">
          <a href="#" className="hover:bg-[#E11D48] px-3 py-2 rounded transition duration-300 ease-in-out">
            Se connecter
          </a>
          <div className="md:hidden ml-3">
            <Button className="text-white bg-transparent hover:bg-[#E11D48] hover:bg-opacity-75 p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6 transition duration-300 ease-in-out transform rotate-180" /> : <Bars3Icon className="h-6 w-6 transition duration-300 ease-in-out" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 text-center">
          {menuItems.map((item) => (
            <a key={item.title} href={item.link} className="block hover:bg-[#E11D48] px-3 py-2 rounded transition duration-300 ease-in-out">
              {item.title}
            </a>
          ))}
          <a href="/login" className="block hover:bg-[#E11D48] px-3 py-2 rounded transition duration-300 ease-in-out">
            Se connecter
          </a>
        </div>
      )}
    </nav>
  );
}

export default MenuCustom