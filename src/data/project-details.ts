export type ProjectDetails = {
  slug: string
  overview: string
  problem: string
  architecture?: string
  features?: string[]
  challenges?: string[]
  roadmap?: string[]
}

export const projectDetails: ProjectDetails[] = [
  {
    slug: "guideo-saas",

    overview:
      "Un projet personnel à long terme explorant la conception d'un jeu de stratégie persistant en navigateur. L'objectif est de construire un monde vivant où les joueurs développent des villes, interagissent via la diplomatie et la guerre, et influencent une économie gérée par les joueurs.",

    problem:
      "La plupart des jeux en navigateur reposent sur des mécaniques pay-to-win et des boucles de gameplay éphémères. Ce projet vise à concevoir un système plus équilibré où les décisions stratégiques et la collaboration entre joueurs comptent davantage que la monétisation.",

    architecture:
      "Le backend est conçu selon une architecture en couches avec Spring Boot. La logique de jeu est isolée dans des services domaine tandis que l'API REST expose des endpoints contrôlés vers l'application frontend React. La persistance repose sur MySQL, avec Docker pour les environnements de développement local.",

    features: [
      "Système de progression basé sur les villes",
      "Batailles automatisées avec préparation stratégique",
      "Systèmes économiques gérés par les joueurs",
      "Boucle d'interaction quotidienne courte (10–15 minutes)",
      "Carte dynamique de villes réelles",
    ],

    challenges: [
      "Équilibrer les systèmes de gameplay à long terme",
      "Concevoir des mécaniques de jeu évolutives",
      "Maintenir une architecture backend maintenable",
    ],

    roadmap: [
      "Implémentation de la boucle de jeu principale",
      "Systèmes de villes et d'économie",
      "Moteur de simulation de batailles",
      "Premier serveur jouable",
    ],
  },

  {
    slug: "portfolio",

    overview:
      "Ce portfolio a été conçu comme un site web minimal et moderne pour présenter mes projets, ma stack technique et mon parcours. L'objectif était de créer une interface rapide et lisible, centrée sur la clarté du contenu.",

    problem:
      "Beaucoup de portfolios développeur deviennent trop complexes ou visuellement lourds. L'objectif ici était de construire un site propre et maintenable, centré sur le contenu et la clarté technique.",

    architecture:
      "Le site est construit avec Next.js en utilisant l'App Router. Le style est géré avec Tailwind CSS et les composants UI sont basés sur shadcn/ui. Le projet est déployé sur Vercel avec une priorité sur la performance et la simplicité.",

    features: [
      "Design one-page responsive",
      "Présentation de projets avec pages détaillées",
      "Timeline interactive",
      "Carrousel de stack technique",
      "Formulaire de contact avec envoi d'email",
    ],

    challenges: [
      "Concevoir une mise en page visuellement équilibrée",
      "Maintenir une base de code simple et maintenable",
    ],

    roadmap: [
      "Améliorer les études de cas des projets",
      "Ajouter des articles de blog sur l'architecture backend",
      "Enrichir les pages projets avec des diagrammes",
    ],
  },

  {
    slug: "paymybuddy",

    overview:
      "Un projet axé backend visant à pratiquer les principes d'architecture propre et à construire une API REST maintenable.",

    problem:
      "Beaucoup de projets backend débutants manquent de structure et de séparation des responsabilités. Ce projet se concentre sur l'implémentation d'une architecture en couches claire avec validation et des frontières de service appropriées.",

    architecture:
      "L'API est structurée avec des contrôleurs, services et repositories accompagnés de validation par DTO. MySQL est utilisé comme couche de persistance tandis que Spring Boot gère l'injection de dépendances et la configuration.",

    features: [
      "Endpoints RESTful",
      "Validation par DTO",
      "Architecture en couches",
      "Intégration base de données MySQL",
    ],

    challenges: [
      "Structurer correctement l'application",
      "Gérer la validation et la gestion des erreurs",
    ],

    roadmap: [
      "Ajouter l'authentification",
      "Améliorer la couverture de tests",
      "Introduire des tests d'intégration",
    ],
  },

  {
    slug: "safetynet-alerts",

    overview:
      "Une application de productivité conçue pour pratiquer le développement full-stack avec authentification et gestion de tâches.",

    problem:
      "Les applications de gestion de tâches sont simples mais efficaces pour apprendre les workflows utilisateurs, l'authentification et les opérations CRUD.",

    architecture:
      "L'application sera construite avec React et TypeScript côté frontend et Node.js côté backend. L'accent sera mis sur une conception d'API propre et des interactions UI simples mais efficaces.",

    features: [
      "Création et gestion de tâches",
      "Authentification utilisateur",
      "Interface de tableau de bord simple",
    ],

    challenges: [
      "Concevoir une UI simple mais utilisable",
      "Gérer l'authentification de manière sécurisée",
    ],

    roadmap: [
      "Système d'authentification",
      "Filtrage et étiquetage des tâches",
      "Déploiement",
    ],
  },
]
