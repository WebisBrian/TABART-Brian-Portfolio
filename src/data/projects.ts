export type Project = {
  id: string
  title: string
  description: string
  longDescription?: string
  stack: string[]
  status: "In progress" | "Completed" | "Planned"
  githubUrl?: string
  liveUrl?: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "strategy-game",
    title: "Strategy Browser Game",
    description:
      "A medieval strategy and RPG browser game focused on cities, progression, and a player-driven economy.",
    longDescription:
      "This personal project explores a backend-oriented architecture with long-term game systems, real-time progression, and a strong product vision. It is designed with maintainability and feature evolution in mind.",
    stack: ["Spring Boot", "React", "MySQL", "Docker"],
    status: "In progress",
    githubUrl: "https://github.com/your-username/strategy-browser-game",
    image: "/images/projects/strategy-game.jpg",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description:
      "A modern portfolio built with Next.js and Tailwind CSS to showcase projects, journey, and technical stack.",
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    status: "In progress",
    githubUrl: "https://github.com/your-username/portfolio",
    liveUrl: "https://your-portfolio-url.vercel.app",
    image: "/images/projects/portfolio.jpg",
  },
  {
    id: "spring-api",
    title: "Spring Boot API",
    description:
      "A REST API project focused on validation, layered architecture, and clean backend practices.",
    stack: ["Java", "Spring Boot", "MySQL"],
    status: "Completed",
    githubUrl: "https://github.com/your-username/spring-api",
    image: "/images/projects/spring-api.jpg",
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A productivity-oriented application designed to practice CRUD workflows, authentication, and UI integration.",
    stack: ["React", "TypeScript", "Node.js"],
    status: "Planned",
    githubUrl: "https://github.com/your-username/task-manager",
    image: "/images/projects/task-manager.jpg",
  },
]