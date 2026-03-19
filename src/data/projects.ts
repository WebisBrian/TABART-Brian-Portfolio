export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  status: "En cours" | "Terminé" | "Prévu";
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "guideo-saas",
    slug: "guideo-saas",
    title: "Guideo - SaaS de gestion pour cabinet d'avocats",
    description:
      "Projet soumis à une clause de confidentialité, réalisé lors d’un stage de plusieurs mois chez Guideo. Il s’agit d’une application SaaS conçue pour simplifier la gestion et le suivi de l’activité d’un cabinet d’avocats.",
    longDescription:
      "Le projet a débuté par la conception d’un site vitrine destiné à présenter le service, avec un soin particulier apporté à l’expérience utilisateur et à la clarté de l’information. Dans un second temps, une application SaaS a été développée afin de répondre aux besoins métier d’un cabinet d’avocats, en simplifiant la gestion et le suivi de son activité.",
    stack: ["Symfony", "React", "Tailwind", "PostgreSQL", "Docker", "VPS"],
    status: "Terminé",
    image: "/images/projects/guideo-saas.png",
    featured: true,
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfolio développeur",
    description:
      "Un portfolio moderne développé avec Next.js et Tailwind CSS, conçu pour présenter mes projets, mon parcours et ma stack technique. Ce projet m’a également permis d’utiliser shadcn/ui et de découvrir Claude Code CLI.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
    status: "En cours",
    githubUrl: "https://github.com/WebisBrian/TABART-Brian-Portfolio",
    // TODO : add real live URL when deployed
    liveUrl: "https://btabart.dev",
    image: "/images/projects/portfolio.png",
  },
  {
    id: "paymybuddy",
    slug: "paymybuddy",
    title: "PayMyBuddy - Transfert d'argent",
    description:
      "L'application repose sur une architecture en couches avec DB-first. L'objectif est de proposer une solution simple, fiable et accessible pour les échanges d'argent du quotidien.",
    stack: ["Spring Boot", "Spring Security", "Thymeleaf", "Tailwind", "MySQL"],
    status: "Terminé",
    githubUrl: "https://github.com/WebisBrian/TABART-Brian-payMyBuddy",
    image: "/images/projects/paymybuddy.png",
  },
  {
    id: "safetynet-alerts",
    slug: "safetynet-alerts",
    title: "SafetyNet Alerts - API REST",
    description:
      "SafetyNet Alerts est une API REST conçue pour centraliser et exposer des données utiles aux services de secours. Récupère et met à jour des informations liées aux personnes, afin d’améliorer la réactivité en situation d’urgence.",
    stack: ["Spring Boot", "Java"],
    status: "Terminé",
    githubUrl: "https://github.com/WebisBrian/TABART-Brian-safetyNetAlerts",
    image: "/images/projects/safetynet-alerts.png",
  },
];
