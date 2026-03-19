export type ProjectDetails = {
  slug: string;
  overview: string;
  problem: string;
  architecture?: string;
  features?: string[];
  challenges?: string[];
  roadmap?: string[];
};

export const projectDetails: ProjectDetails[] = [
  {
    slug: "guideo-saas",

    overview:
      "Guidéo est un projet de plusieurs mois que je considère comme ma première expérience professionnelle complète. J’ai mené ce projet en autonomie, de la conception au déploiement, en prenant en charge les choix de stack, d’architecture et de design. L’objectif était d’abord de concevoir un site vitrine, puis de développer une application SaaS de gestion pour cabinet d’avocats. Ce projet m’a permis de travailler la conception backend, la gestion de projet et le développement full-stack, avec une attention particulière portée à la maintenabilité et à l’évolutivité.",

    problem:
      "Face à un projet de cette envergure, l’un des principaux défis a été le manque initial de recul et d’expérience sur certains choix structurants. J’ai néanmoins su adopter une approche pragmatique en m’appuyant sur la documentation et des bonnes pratiques éprouvées. Pour le site vitrine, j’ai choisi Symfony et Twig afin de garantir de bonnes performances SEO. Pour l’application SaaS, j’ai opté pour une stack Symfony, React, Tailwind, PostgreSQL et Docker. Le choix d’un VPS m’a permis de garder un contrôle total sur l’environnement de production, tandis que l’utilisation de Docker a simplifié le déploiement et la gestion des services.",

    architecture:
      "Le site vitrine repose sur Symfony et Twig, assurant simplicité, performance et optimisation SEO. L’application SaaS suit une architecture en couches (type MVC), avec Symfony pour le backend et React associé à Tailwind pour le frontend. PostgreSQL est utilisé pour la gestion des données, pour sa robustesse et sa fiabilité. L’ensemble de l’application est containerisé avec Docker, permettant un déploiement maîtrisé sur un VPS et une meilleure reproductibilité des environnements.",

    features: [
      "Site vitrine avec présentation claire du service",
      "Formulaire de contact sécurisé avec protection contre le spam",
      "Authentification sécurisée via JWT (backend Symfony, frontend React/Vite)",
      "Gestion du profil utilisateur et des données personnelles",
      "Mise en place d’un module de blog (en cours) pour partager des contenus juridiques",
      "Déploiement sur VPS avec Docker pour une gestion simplifiée de l’infrastructure",
    ],

    challenges: [
      "Définir une stack technique cohérente et adaptée aux besoins du projet",
      "Mettre en place une architecture full-stack maintenable",
      "Configurer Docker pour orchestrer plusieurs services",
      "Concevoir une interface utilisateur en l’absence de designer dédié",
    ],

    roadmap: [
      "Conception du projet et choix de la stack technique",
      "Définition de la roadmap (Trello) et du design (Figma)",
      "Développement du site vitrine avec Symfony et Twig",
      "Déploiement du site vitrine sur VPS",
      "Développement de l’application SaaS (Symfony, React, Tailwind)",
      "Mise en place du déploiement avec Docker sur VPS",
      "Amélioration continue en fonction des retours utilisateurs et des besoins métier",
    ],
  },

  {
    slug: "portfolio",

    overview:
      "Ce portfolio est un projet personnel conçu pour présenter mon parcours atypique, mes projets techniques et ma stack de prédilection. Au-delà d'une simple vitrine, il reflète ma façon d'aborder le développement : attention portée à la qualité du code, aux bonnes pratiques et à la maintenabilité. Il a également été l'occasion de découvrir Next.js, l'écosystème frontend moderne et Claude Code CLI.",

    problem:
      "En tant que développeur en reconversion, il était important de disposer d'un espace qui ne se contente pas de lister des projets, mais qui témoigne d'une vraie démarche technique. L'enjeu était de concevoir un site lisible, accessible et performant, sans tomber dans la surcharge visuelle souvent présente dans les portfolios de développeurs.",

    architecture:
      "Le site repose sur Next.js 15 avec l'App Router et les React Server Components par défaut. Le style est entièrement géré via Tailwind CSS v4, dont la configuration se fait directement en CSS sans fichier de configuration dédié. Les composants UI s'appuient sur shadcn/ui. Les animations sont gérées par Framer Motion. Le formulaire de contact utilise Resend pour l'envoi d'emails, avec un rate limiting via Upstash Redis pour limiter les abus. Le projet est déployé sur Vercel.",

    features: [
      "Design one-page responsive, mobile-first",
      "Section parcours avec timeline interactive par onglets",
      "Pages projets dynamiques avec métadonnées SEO générées automatiquement",
      "Carrousel de stack technique animé (marquee)",
      "Formulaire de contact avec validation, protection honeypot et rate limiting",
      "Mode clair / sombre via next-themes",
      "Animations d'entrée avec Framer Motion et respect de prefers-reduced-motion",
    ],

    challenges: [
      "Appréhender Tailwind CSS v4 et sa configuration entièrement en CSS",
      "Maîtriser la frontière RSC / composants client pour minimiser le JavaScript envoyé au navigateur",
      "Mettre en place un formulaire de contact sécurisé avec rate limiting côté serveur",
      "Concevoir une interface accessible tout en intégrant des animations fluides",
    ],

    roadmap: [
      "Enrichir les pages projets avec des diagrammes d'architecture",
      "Ajouter une section blog pour partager des retours d'expérience backend",
      "Améliorer les études de cas avec des captures d'écran et des extraits de code",
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
];
