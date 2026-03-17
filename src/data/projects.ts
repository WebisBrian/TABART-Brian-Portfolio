export type Project = {
  id: string
  slug: string
  title: string
  description: string
  longDescription?: string
  stack: string[]
  status: "En cours" | "Terminé" | "Prévu"
  githubUrl?: string
  liveUrl?: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "strategy-game",
    slug: "strategy-browser-game",
    title: "Strategy Browser Game",
    description:
      "Un jeu de stratégie et RPG médiéval en navigateur axé sur les villes, la progression et une économie gérée par les joueurs.",
    longDescription:
      "Ce projet personnel explore une architecture orientée backend avec des systèmes de jeu à long terme, une progression en temps réel et une vision produit solide. Il est conçu pour la maintenabilité et l'évolution des fonctionnalités.",
    stack: ["Spring Boot", "React", "MySQL", "Docker"],
    status: "En cours",
    githubUrl: "https://github.com/WebisBrian/strategy-browser-game",
    image: "/images/projects/strategy-game.png",
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
]
