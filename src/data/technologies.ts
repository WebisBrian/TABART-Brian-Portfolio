export type Technology = {
  name: string
  category: string
  description: string
  icon: string
}

export const technologies: Technology[] = [
  {
    name: "Java",
    category: "Backend",
    description: "Robust object-oriented development",
    icon: "/images/tech/java.svg",
  },
  {
    name: "Spring Boot",
    category: "Framework",
    description: "REST APIs and scalable services",
    icon: "/images/tech/spring.svg",
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Structured relational data",
    icon: "/images/tech/mysql.svg",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Portable development environments",
    icon: "/images/tech/docker.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "React framework for modern apps",
    icon: "/images/tech/nextjs.svg",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Safer and clearer JavaScript",
    icon: "/images/tech/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first UI styling",
    icon: "/images/tech/tailwind.svg",
  },
  {
    name: "React",
    category: "Frontend",
    description: "Component-based interfaces",
    icon: "/images/tech/react.svg",
  },
  {
    name: "GitHub",
    category: "Versioning",
    description: "Source control and collaboration",
    icon: "/images/tech/github.svg",
  },
]