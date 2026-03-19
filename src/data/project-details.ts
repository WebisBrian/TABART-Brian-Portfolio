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
      "Pay My Buddy est une application web de transfert d’argent entre utilisateurs, réalisée dans le cadre de ma formation Java. Ce projet m’a permis de concevoir une application complète, de la base de données à l’interface web, avec un focus sur la sécurité, la structuration du backend et la gestion des transactions.",

    problem:
      "Les solutions de transfert d’argent entre particuliers peuvent être complexes et peu intuitives. L’objectif était de concevoir une application simple et sécurisée permettant de gérer un réseau de contacts et d’effectuer des transactions financières. Le projet m’a également confronté à des choix structurants, notamment l’approche DB-first, où la base de données est définie comme source de vérité, imposant une stricte cohérence avec les entités applicatives.",

    architecture:
      "L’application repose sur une architecture en couches clairement définie. La couche Web (MVC) gère les contrôleurs et les vues Thymeleaf. La couche Application implémente les cas d’usage et la logique métier. La couche Domain contient les entités. Enfin, la couche Infrastructure s’appuie sur Spring Data JPA pour l’accès aux données et Spring Security pour la gestion de la sécurité. La base de données MySQL est conçue en approche DB-first, avec validation du schéma via Hibernate (ddl-auto=validate).",

    features: [
      "Gestion des utilisateurs et authentification sécurisée",
      "Gestion d’un réseau de contacts via email",
      "Réalisation de transactions financières entre utilisateurs",
      "Gestion centralisée des erreurs (Global Exception Handler)",
      "Interface web basée sur Thymeleaf",
      "Validation des données et gestion des règles métier",
      "Base de données MySQL conçue en DB-first avec scripts SQL",
      "Pipeline CI minimal (build + tests)",
    ],

    challenges: [
      "Adopter une approche DB-first avec cohérence stricte entre schéma SQL et entités JPA",
      "Structurer l’application selon une architecture en couches claire et maintenable",
      "Mettre en place la sécurité avec Spring Security",
      "Implémenter une gestion robuste des transactions financières",
    ],

    roadmap: [
      "Conception du modèle de données (MPD) et scripts SQL",
      "Mise en place de l’architecture en couches (MVC, services, repository)",
      "Développement des fonctionnalités principales (utilisateurs, contacts, transactions)",
      "Intégration de la sécurité avec Spring Security",
      "Développement de l’interface web avec Thymeleaf",
      "Validation du projet via soutenance et revue de code",
    ],
  },

  {
    slug: "safetynet-alerts",

    overview:
      "SafetyNet Alerts est une API REST développée en Java avec Spring Boot, visant à fournir des informations aux services de secours à partir de données locales (personnes, casernes, dossiers médicaux). Réalisé dans le cadre de ma formation, ce projet m’a permis de concevoir un backend structuré, avec un focus sur la maintenabilité, la qualité du code et les tests.",

    problem:
      "L’enjeu du projet était de concevoir une API capable de traiter et exposer des données critiques de manière fiable. Les données étant issues d’un fichier JSON, il a fallu mettre en place une persistance capable de supporter les opérations CRUD tout en conservant les modifications après redémarrage. Le projet imposait également le respect de contraintes strictes : architecture MVC, principes SOLID, logging structuré et couverture de tests.",

    architecture:
      "L’application repose sur une architecture MVC avec une séparation claire des responsabilités. Les contrôleurs exposent les endpoints REST et délèguent aux services, qui portent la logique métier. Les repositories gèrent l’accès et la persistance des données JSON. Les DTO permettent de contrôler les échanges et de ne pas exposer directement le modèle. La gestion des erreurs est centralisée via un GlobalExceptionHandler, et une stratégie de logs structurée est mise en place (INFO, DEBUG, ERROR).",

    features: [
      "API REST avec endpoints fonctionnels et CRUD",
      "Lecture et écriture des données depuis un fichier JSON persistant",
      "Gestion centralisée des erreurs (Global Exception Handler, ProblemDetail)",
      "Architecture MVC avec séparation des responsabilités",
      "DTO pour sécuriser les échanges et structurer les réponses",
      "Tests unitaires et Web MVC avec couverture mesurée (JaCoCo)",
      "Logging structuré (INFO, DEBUG, ERROR)",
    ],

    challenges: [
      "Mettre en place une persistance JSON fiable avec conservation des données après redémarrage",
      "Structurer l’application selon les principes MVC et SOLID",
      "Maintenir une bonne couverture de tests (unitaires et Web MVC)",
      "Gérer proprement les erreurs et les réponses HTTP",
    ],

    roadmap: [
      "Conception de l’architecture et des modèles de données",
      "Implémentation des endpoints fonctionnels et CRUD",
      "Mise en place de la persistance JSON",
      "Ajout des tests unitaires et Web MVC avec rapports JaCoCo",
      "Amélioration continue (refactoring, SOLID, évolutivité vers base de données)",
    ],
  },
];
