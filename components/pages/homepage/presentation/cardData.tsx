import {
  Construction,
  GraduationCap,
  HelpingHand,
  Rocket,
  Target,
} from "lucide-react";

interface cardDataProps {}

export const cardData = [
  {
    title: "Développement Web",
    content:
      "Réalisations de sites vitrines, blogs, e-commerce, ... sur mesure qui répondent à vos besoins",
    icon: <Rocket className="w-10 h-10" />,
    modalContent: {
      title: "Développement Web",
      picture: "image-developpement-web.png",
      content: [
        {
          title: "Conception Personnalisée",
          text: "Chaque site que je crée est conçu sur mesure pour répondre à vos besoins spécifiques, reflétant ainsi l'identité et les valeurs de votre entreprise.",
        },
        {
          title: "Expérience Utilisateur",
          text: "Je m'assure que la navigation sur votre site soit intuitive et agréable pour vos visiteurs, favorisant ainsi un engagement accru et une exploration plus profonde.",
        },
        {
          title: "Optimisation SEO",
          text: "Votre site sera conçu en suivant les meilleures pratiques SEO, garantissant une visibilité optimale sur les moteurs de recherche et attirant un trafic qualifié.",
        },
        {
          title: "Compatibilité",
          text: "Votre site sera entièrement responsive, s'adaptant parfaitement à tous les types d'appareils, des ordinateurs de bureau aux smartphones.",
        },
        {
          title: "Sécurité Renforcée",
          text: "Je mets en place des mesures de sécurité avancées pour protéger votre site contre les menaces potentielles et assurer la confidentialité des données de vos utilisateurs.",
        },
      ],
    },
  },
  {
    title: "Accompagnement",
    content:
      "Du cahier des charges à la mise en ligne, je vous accompagne dans votre projet pour qu'il soit le plus proche de vos attentes",
    icon: <HelpingHand className="w-10 h-10" />,
    modalContent: {
      title: "Accompagnement",
      picture: "image-accompagnement.png",
      content: [
        {
          title: "Écoute Active",
          text: "Je m'engage à comprendre vos objectifs, vos valeurs et votre vision afin de créer un site qui soit une extension fidèle de votre entreprise.",
        },
        {
          title: "Transparence & Communication",
          text: "Tout au long du processus, je vous tiendrai informé des progrès réalisés et des décisions prises, en veillant à ce que vous soyez impliqué et informé à chaque étape.",
        },
        {
          title: "Adaptabilité",
          text: "Vos retours sont essentiels. Je suis prêt à ajuster le développement en fonction de vos commentaires et besoins changeants pour m'assurer que le résultat final vous satisfait pleinement.",
        },
        {
          title: "Respect des Délais",
          text: "Je m'engage à respecter les délais convenus, car je comprends l'importance d'une mise en ligne rapide pour votre entreprise.",
        },
        {
          title: "Expertise Conseil",
          text: "Je vous guiderai dans les choix cruciaux liés au design, à la technologie et aux fonctionnalités pour garantir le succès de votre site.",
        },
      ],
    },
  },
  {
    title: "Maintenance",
    content:
      "Une fois votre site en ligne, je reste à votre disposition pour toute modification ou ajout de fonctionnalité",
    icon: <Construction className="w-10 h-10" />,
    modalContent: {
      title: "Maintenance",
      picture: "image-maintenance.png",
      content: [
        {
          title: "Réactivité",
          text: "En cas de problème, de mise à jour ou de demande d'ajout de fonctionnalité, je serai rapide à répondre et à agir pour minimiser les perturbations.",
        },
        {
          title: "Suivi Régulier",
          text: "Je surveille continuellement la performance de votre site et j'effectue des mises à jour techniques pour garantir qu'il reste à la pointe de la technologie.",
        },
        {
          title: "Sauvegardes Régulières",
          text: "Des sauvegardes régulières sont effectuées pour prévenir toute perte de données et pour assurer la restauration en cas de besoin.",
        },
        {
          title: "Évolutivité Prévue",
          text: "Je construis votre site avec une architecture évolutive, ce qui signifie que de nouvelles fonctionnalités peuvent être ajoutées en toute simplicité à mesure que votre entreprise se développe.",
        },
      ],
    },
  },

  {
    title: "Référencement",
    content:
      "Je vous aide à améliorer votre référencement naturel pour que votre site soit le plus visible possible",
    icon: <Target className="w-10 h-10" />,
    modalContent: {
      title: "Référencement",
      picture: "image-referencement.png",
      content: [
        {
          title: "Analyse de Mots-Clés",
          text: "Je mène une recherche approfondie pour identifier les mots-clés pertinents pour votre industrie et votre public cible.",
        },
        {
          title: "Optimisation On-Page",
          text: "Chaque page de votre site sera optimisée pour les mots-clés cibles, avec des titres, des méta-descriptions et un contenu de qualité.",
        },
        {
          title: "Contenu Engageant",
          text: "Je peux vous aider à développer du contenu pertinent et engageant qui attire les visiteurs et répond à leurs besoins.",
        },
        {
          title: "Liens de Qualité",
          text: "Je travaillerai sur la création de liens de qualité provenant de sources pertinentes pour renforcer l'autorité de votre site.",
        },
        {
          title: "Surveillance et Rapports",
          text: "Je suivrai les performances de votre site à l'aide d'outils d'analyse et je vous fournirai des rapports réguliers sur l'évolution de votre classement et de votre trafic.",
        },
      ],
    },
  },

  {
    title: "Formation",
    content:
      "Je vous forme à l'utilisation de votre site pour que vous puissiez le gérer en toute autonomie",
    icon: <GraduationCap className="w-10 h-10" />,
    modalContent: {
      title: "Formation",
      picture: "image-formation.png",
      content: [
        {
          title: "Formation Personnalisée",
          text: "La formation sera adaptée à vos besoins spécifiques et vous guidera à travers toutes les fonctionnalités et les aspects de gestion de votre site.",
        },
        {
          title: "Gestion de Contenu",
          text: "Vous apprendrez à ajouter, modifier et gérer le contenu de votre site de manière autonome, sans nécessiter de connaissances techniques approfondies.",
        },
        {
          title: "Maintenance Basique",
          text: "Je vous montrerai comment effectuer des mises à jour mineures, gérer les commentaires et maintenir la sécurité de base.",
        },
        {
          title: "Support Continu",
          text: "Même après la formation initiale, je reste disponible pour répondre à vos questions et vous aider en cas de besoin.",
        },
      ],
    },
  },

  {
    title: "Optimisation",
    content:
      "A l'aide des dernières technologies, je m'assure que votre site soit le plus rapide possible",
    icon: <Rocket className="w-10 h-10" />,
    modalContent: {
      title: "Optimisation",
      picture: "image-optimisation.png",
      content: [
        {
          title: "Performance",
          text: "J'utilise des techniques avancées de compression d'images, de mise en cache et d'optimisation du code pour garantir des temps de chargement rapides.",
        },
        {
          title: "Expérience Utilisateur",
          text: "Un site rapide améliore l'expérience utilisateur, réduisant le taux de rebond et incitant les visiteurs à explorer davantage.",
        },
        {
          title: "Conformité aux Standards",
          text: "Je m'assure que votre site respecte les normes de l'industrie, ce qui améliore sa compatibilité avec différents navigateurs et dispositifs.",
        },
      ],
    },
  },
];
