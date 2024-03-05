


const articles = [
  {
    "id": 1,
    "title": "Les fondamentaux de React",
    "summary": "Découvrez les concepts clés de React, y compris les composants, les props, et l'état.",
    "date": "2024-02-20",
    "category": "React",
    "author": "Alex Durand",
    "authorImageUrl": "https://randomuser.me/api/portraits/men/39.jpg",
    "imageUrl": "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    "content": `React, introduit par Facebook, a révolutionné la création d'interfaces utilisateur par sa flexibilité et son efficacité. Ce framework permet de construire des applications web monopages réactives grâce à son système de composants réutilisables. En séparant la logique de l'interface utilisateur, React facilite grandement le développement et la maintenance des applications complexes. Dans cet article, nous explorerons les concepts de composants, props, et état (state) pour démystifier pourquoi React est devenu un outil incontournable pour les développeurs modernes.`

  },
  {
    "id": 2,
    "title": "Introduction à Tailwind CSS",
    "summary": "Apprenez comment accélérer le développement de vos interfaces utilisateur avec Tailwind CSS.",
    "date": "2024-02-18",
    "category": "CSS",
    "author": "Chris Martin",
    "authorImageUrl": "https://randomuser.me/api/portraits/men/16.jpg",
    "imageUrl": "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
    "content": `Tailwind CSS est un framework CSS qui permet aux développeurs de styliser rapidement leurs applications sans avoir à quitter le fichier HTML. Contrairement aux frameworks traditionnels, Tailwind utilise une approche utilitaire, offrant une flexibilité sans précédent pour personnaliser le design. Cet article vous guidera à travers les principes de base de Tailwind CSS, montrant comment il peut rendre le processus de design plus intuitif et accélérer le développement front-end. Nous couvrirons également comment configurer Tailwind dans votre projet pour exploiter pleinement son système de classes utilitaires.`

  },
  {
    "id": 3,
    "title": "Construire une API REST avec Node.js",
    "summary": "Guide étape par étape pour construire une API REST robuste en utilisant Node.js et Express.",
    "date": "2024-02-15",
    "category": "Backend",
    "author": "Samantha Paul",
    "authorImageUrl": "https://randomuser.me/api/portraits/women/60.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
    "content": `Node.js, couplé avec Express, fournit une plateforme solide pour construire des API RESTful flexibles et performantes. Cet article se concentre sur les étapes clés pour construire une API REST avec Node.js, de la configuration initiale à la structuration des routes et à la gestion des requêtes. Nous aborderons les meilleures pratiques pour l'authentification, la validation des données et le test, fournissant les bases nécessaires pour lancer votre propre API REST sécurisée et scalable avec Node.js.`

  },
  {
    "id": 4,
    "title": "Maîtriser les hooks de React",
    "summary": "Explorez en profondeur l'utilisation des hooks pour gérer l'état et le cycle de vie des composants.",
    "date": "2024-02-14",
    "category": "React",
    "author": "Jeanne Dupont",
    "authorImageUrl": "https://randomuser.me/api/portraits/women/27.jpg",
    "imageUrl": "https://developer.okta.com/assets-jekyll/blog/react-hooks/react-hooks-39a66d469d6a86f01f15beea07590a656901be4efd586fead91a92104ec4cd91.png",
    "content": `Les Hooks React ont introduit une nouvelle façon de penser et de gérer l'état et le cycle de vie des composants dans les applications React. Cet article plonge dans les Hooks les plus utilisés tels que useState, useEffect, et custom Hooks, fournissant des exemples concrets d'utilisation. Nous discuterons comment les Hooks peuvent simplifier votre code, rendre vos composants plus lisibles, et vous permettre de réutiliser la logique d'état à travers votre application sans recourir à des classes.`

  },
  {
    "id": 5,
    "title": "Créer des animations fluides en CSS",
    "summary": "Apprenez à utiliser CSS pour ajouter des animations fluides et attrayantes à votre site web.",
    "date": "2024-02-13",
    "category": "CSS",
    "author": "Lucas Bonnet",
    "authorImageUrl": "https://randomuser.me/api/portraits/men/23.jpg",
    "imageUrl": "https://blog.alakmalak.com/wp-content/uploads/2015/04/animation.png",
    "content": `Les animations CSS peuvent transformer une interface utilisateur statique en une expérience dynamique et engageante. Cet article explore comment créer des animations fluides en CSS, en se concentrant sur les keyframes, les transitions, et les animations basées sur les interactions utilisateur. Nous partagerons des astuces et techniques pour optimiser les performances de vos animations, garantissant qu'elles restent fluides même sur les appareils à faible puissance.`

  },
  {
    "id": 6,
    "title": "Gestion de l'état global avec Redux",
    "summary": "Un guide pour comprendre et implémenter Redux dans la gestion de l'état d'applications React.",
    "date": "2024-02-12",
    "category": "React",
    "author": "Sarah Lavoine",
    "authorImageUrl": "https://randomuser.me/api/portraits/women/39.jpg",
    "imageUrl": "https://static.wixstatic.com/media/1e24fd_6c5f5b65b3604efdb15c4bdf1031233a~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/1e24fd_6c5f5b65b3604efdb15c4bdf1031233a~mv2.jpg",
    "content": `Redux est une bibliothèque populaire pour gérer l'état global dans les applications JavaScript, en particulier celles construites avec React. Cet article décompose les concepts fondamentaux de Redux - le store, les actions, et les reducers - et montre comment ils s'articulent pour créer un système de gestion d'état robuste et prévisible. Nous explorerons également des scénarios d'utilisation avancés de Redux avec des middlewares tels que redux-thunk et redux-saga pour gérer les effets secondaires.`

  },
  {
    "id": 7,
    "title": "Optimisation des performances avec Webpack",
    "summary": "Découvrez comment utiliser Webpack pour améliorer la vitesse et la performance de votre site web.",
    "date": "2024-02-11",
    "category": "Outils",
    "author": "Maxime Girard",
    "authorImageUrl": "https://randomuser.me/api/portraits/men/34.jpg",
    "imageUrl": "https://media.trytn.dev/library/sites/2/2020/06/webpack.jpg",
    "content": `Webpack est un module bundler puissant qui aide à optimiser les performances de vos applications web en minimisant et en regroupant les fichiers. Cet article vous guidera à travers la configuration de base de Webpack, la gestion des dépendances, et l'utilisation des loaders et des plugins pour améliorer la vitesse de chargement de votre site. Nous discuterons également des stratégies avancées de splitting de code pour charger votre application encore plus rapidement.`

  },
  {
    "id": 8,
    "title": "Développement mobile avec React Native",
    "summary": "Apprenez à créer des applications mobiles natives performantes avec React Native.",
    "date": "2024-02-10",
    "category": "Mobile",
    "author": "Emilie Renaud",
    "authorImageUrl": "https://randomuser.me/api/portraits/women/69.jpg",
    "imageUrl": "https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",
    "content": `React Native permet de créer des applications mobiles natives en utilisant le même paradigme de développement que React pour le web. Cet article explore comment React Native rend le développement multiplateforme accessible, en partageant la logique métier tout en permettant une expérience utilisateur native. Nous examinerons les composants de base, la navigation, l'utilisation des hooks et la communication avec les API natives pour construire des applications mobiles performantes avec React Native.`

  },
  {
    "id": 9,
    "title": "Introduction à Docker pour les développeurs",
    "summary": "Maîtrisez les bases de Docker et apprenez à conteneuriser vos applications efficacement.",
    "date": "2024-02-09",
    "category": "DevOps",
    "author": "Thomas Lefebvre",
    "authorImageUrl": "https://randomuser.me/api/portraits/men/7.jpg",
    "imageUrl": "https://www.1min30.com/wp-content/uploads/2018/04/Embl%C3%A8me-Docker.jpg",
    "content": `Docker est devenu un outil essentiel pour les développeurs, facilitant la création, le déploiement et l'exécution d'applications dans des conteneurs. Cet article fournit une introduction à Docker, expliquant comment il peut simplifier la configuration des environnements de développement et assurer la cohérence entre les machines. Nous couvrirons les concepts de base des images Docker, des conteneurs, des Dockerfiles, et des commandes Docker essentielles pour gérer le cycle de vie de vos applications conteneurisées.`

  },
  {
    "id": 10,
    "title": "Les meilleures pratiques de sécurité pour Node.js",
    "summary": "Protégez vos applications Node.js contre les vulnérabilités et les attaques les plus courantes.",
    "date": "2024-02-08",
    "category": "Sécurité",
    "author": "Amandine Bernard",
    "authorImageUrl": "https://randomuser.me/api/portraits/women/9.jpg",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*8KnGUEx-K60yXua6UjWczA.jpeg",
    "content": `La sécurité est primordiale dans le développement d'applications web, et Node.js ne fait pas exception. Cet article couvre les meilleures pratiques de sécurité à adopter lors du développement d'applications Node.js. De la gestion des dépendances à la protection contre les injections SQL et XSS, en passant par l'authentification et l'autorisation sécurisées, nous vous fournirons les outils et techniques nécessaires pour sécuriser vos applications Node.js contre les menaces courantes.`

  },
]
const ArticlePage = () => {


  return (
    <>
    { article && (
      
      <div className="min-h-screen bg-[#0E1217] text-white py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#E11D48] text-center mb-5">{article.title}</h1>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src={article.imageUrl} alt="Article" className="rounded-lg shadow-lg max-w-full h-auto md:w-1/2"/>
            <div>
              <h2 className="text-2xl text-[#E11D48] mb-2">Résumé</h2>
              <p className="mb-4">{article.summary}</p>
              <div className="flex items-center gap-4 mb-2">
                <img src={article.authorImageUrl} alt={article.author} className="w-10 h-10 rounded-full shadow-lg"/>
                <span>{article.author}</span>
              </div>
              <div className="text-gray-400 mb-2">📅 {article.date}</div>
              <div className="text-gray-400">⏳ Temps de lecture 2 mins</div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl text-[#E11D48] mb-2">Contenu</h2>
            <p>{article.content}</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default ArticlePage;
