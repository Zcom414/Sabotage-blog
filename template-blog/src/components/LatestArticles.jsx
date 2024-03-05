
// Il faut passer une props ici qui va prendure le tableau des articles
const LatestArticles = () => {
    return (
            <>
            {/* Il faut mapper le tableau pour afficher la card des articles */}
            {/* Début de la card */}
            <div key={0} className="transition duration-500 ease-in-out transform hover:scale-105 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full hover:shadow-2xl">
              <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <span className="absolute top-0 right-0 bg-[#E11D48] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              {"BOSS"}
            </span>
                {/* Ici on va mettre l'image de l'article qui vient du tableau du coup */}
                <img
                  src={`https://via.placeholder.com/150`} 
                  alt="Article"
                  className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {"Pourquoi Mohamed est l'enfant prodige?"}{/*  On va afficher le titre de l'article ici  */}
                </h5>
                <p className="block text-base font-light leading-relaxed text-inherit">
                   {"Grâce à sa persévrance accrue...."} {/*On va afficher le summary de chaque article */}
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  ⏳ Temps de lecture: 2 mins {/* Vous affichez le vrai temps de lecture en bonus */}
                </p>
              </div>
              <div className="flex justify-between items-center p-6 pt-0">
                <div className="flex items-center">
                  {/* Vous affichez l'image de l'auteur et le nom en alt */}
                  <img src={`https://via.placeholder.com/50`} alt={"Bocar Bocs"} className="w-10 h-10 rounded-full mr-2" />
                  <span className="text-sm font-semibold text-gray-900">{"Bocar Bocs"}</span>
                </div>
                {/* Vous affichez la date de l'article  au bon format */}
                <span className="text-sm text-gray-600">{2024-11-10}</span>  
              </div>
              <div className="p-6 pt-0">
                {/* Vous redirigez l'utilisateur vers la page dynamique !  */}
                <a
                  href={`#`}
                  className="inline-block py-3 px-6 rounded-lg bg-[#E11D48] text-white font-bold text-xs uppercase transition-all hover:shadow-lg active:opacity-[0.85]}"
                  >
                  Lire Plus
                </a>
              </div>
            </div>
        {/* Fin de la card */}
          </>
      );
};

export default LatestArticles;