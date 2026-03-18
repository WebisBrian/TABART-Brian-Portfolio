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
    title: "Guideo - SaaS pour avocats",
    description:
      "Projet soumis à une clause de confidentialité. La première étape a consisté à concevoir de A à Z un site vitrine, avec une attention particulière portée à l’expérience utilisateur et à la clarté de l’information.",
    longDescription:
      "Dans un second temps, une application SaaS a été développée afin de simplifier la gestion et le suivi de l’activité d’un cabinet d’avocats.",
    stack: ["Symfony", "React", "Tailwind", "MySQL", "Docker", "VPS"],
    status: "Terminé",
    image: "/images/projects/guideo-saas.png",
    featured: true,
  },
  {
    id: "portfolio",
    slug: "developer-portfolio",
    title: "Portfolio développeur",
    description:
      "Un portfolio moderne construit avec Next.js et Tailwind CSS pour présenter mes projets, mon parcours et ma stack technique.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    status: "En cours",
    githubUrl: "https://github.com/WebisBrian/portfolio",
    liveUrl: "https://btabart.dev",
    image: "/images/projects/portfolio.png",
  },
  {
    id: "spring-api",
    slug: "spring-boot-api",
    title: "Spring Boot API",
    description:
      "Un projet d'API REST axé sur la validation, l'architecture en couches et les bonnes pratiques backend.",
    stack: ["Java", "Spring Boot", "MySQL"],
    status: "Terminé",
    githubUrl: "https://github.com/WebisBrian/spring-api",
    image: "/images/projects/spring-api.png",
  },
  {
    id: "task-manager",
    slug: "task-manager-app",
    title: "Task Manager App",
    description:
      "Une application orientée productivité pour pratiquer les workflows CRUD, l'authentification et l'intégration UI.",
    stack: ["React", "TypeScript", "Node.js"],
    status: "Prévu",
    githubUrl: "https://github.com/WebisBrian/task-manager",
    image: "/images/projects/task-manager.png",
  },
];
