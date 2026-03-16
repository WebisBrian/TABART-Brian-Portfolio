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
    slug: "strategy-browser-game",

    overview:
      "A long-term personal project exploring the design of a persistent browser strategy game. The goal is to build a living world where players develop cities, interact through diplomacy and war, and influence a player-driven economy.",

    problem:
      "Most browser games rely heavily on pay-to-win mechanics and short-lived gameplay loops. This project aims to design a more balanced system where strategic decisions and collaboration between players matter more than monetization.",

    architecture:
      "The backend is designed using a layered architecture with Spring Boot. Game logic is isolated in domain services while the REST API exposes controlled endpoints to the frontend React application. Data persistence relies on MySQL, with Docker used for local development environments.",

    features: [
      "City-based progression system",
      "Automated battles with strategic preparation",
      "Player-driven economic systems",
      "Short daily interaction loop (10–15 minutes)",
      "Dynamic map of real-world cities",
    ],

    challenges: [
      "Balancing long-term gameplay systems",
      "Designing scalable game mechanics",
      "Ensuring maintainable backend architecture",
    ],

    roadmap: [
      "Core game loop implementation",
      "City and economy systems",
      "Battle simulation engine",
      "First playable server",
    ],
  },

  {
    slug: "developer-portfolio",

    overview:
      "This portfolio was designed as a minimal, modern website to showcase projects, technical stack, and development journey. The goal was to create a fast and readable interface with a focus on simplicity.",

    problem:
      "Many developer portfolios become overly complex or visually heavy. The objective here was to build a clean and maintainable site that focuses on content and technical clarity.",

    architecture:
      "The website is built with Next.js using the App Router. Styling is handled with Tailwind CSS and UI components are based on shadcn/ui. The project is deployed on Vercel with a focus on performance and simplicity.",

    features: [
      "Responsive one-page design",
      "Project showcase with detailed pages",
      "Interactive timeline",
      "Technology stack carousel",
      "Contact form with email delivery",
    ],

    challenges: [
      "Designing a balanced visual layout",
      "Keeping the codebase simple and maintainable",
    ],

    roadmap: [
      "Improve project case studies",
      "Add blog articles on backend architecture",
      "Enhance project pages with diagrams",
    ],
  },

  {
    slug: "spring-boot-api",

    overview:
      "A backend-focused project aimed at practicing clean architecture principles and building a maintainable REST API.",

    problem:
      "Many beginner backend projects lack structure and separation of concerns. This project focuses on implementing a clear layered architecture with validation and proper service boundaries.",

    architecture:
      "The API is structured using controllers, services, and repositories with DTO validation. MySQL is used as the persistence layer while Spring Boot manages dependency injection and configuration.",

    features: [
      "RESTful endpoints",
      "DTO validation",
      "Layered architecture",
      "Database integration with MySQL",
    ],

    challenges: [
      "Structuring the application correctly",
      "Managing validation and error handling",
    ],

    roadmap: [
      "Add authentication",
      "Improve test coverage",
      "Introduce integration tests",
    ],
  },

  {
    slug: "task-manager-app",

    overview:
      "A productivity application designed to practice full-stack development with authentication and task management workflows.",

    problem:
      "Task management applications are simple but effective for learning user workflows, authentication, and CRUD operations.",

    architecture:
      "The application will be built with React and TypeScript on the frontend and Node.js on the backend. The focus will be on a clean API design and simple but efficient UI interactions.",

    features: [
      "Task creation and management",
      "User authentication",
      "Simple dashboard interface",
    ],

    challenges: [
      "Designing a simple but usable UI",
      "Handling authentication securely",
    ],

    roadmap: [
      "Authentication system",
      "Task filtering and tagging",
      "Deployment",
    ],
  },
]