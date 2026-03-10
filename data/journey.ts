import { HeartPulse, Laptop, Sparkles, type LucideIcon } from "lucide-react"

export type JourneyStep = {
  id: "youth" | "nurse" | "developer"
  period: string
  title: string
  icon: LucideIcon
  shortDescription: string
  image: string
  highlights: string[]
}

export const journeySteps: JourneyStep[] = [
  {
    id: "youth",
    period: "Jeunesse",
    title: "Building foundations",
    icon: Sparkles,
    shortDescription:
      "A period shaped by curiosity, discipline, and personal construction. It laid the foundations of the values and resilience that still guide me today.",
    image: "/images/journey/youth.jpg",
    highlights: ["Curiosity", "Discipline", "Foundations"],
  },
  {
    id: "nurse",
    period: "Infirmier",
    title: "Care, responsibility, and teamwork",
    icon: HeartPulse,
    shortDescription:
      "Working as a nurse taught me calm under pressure, responsibility, and the importance of being useful to others. It strengthened my sense of rigor, teamwork, and service.",
    image: "/images/journey/nurse.jpg",
    highlights: ["Responsibility", "Human focus", "Teamwork"],
  },
  {
    id: "developer",
    period: "Développeur",
    title: "From care to code",
    icon: Laptop,
    shortDescription:
      "Software development became a natural continuation of my need to build useful and durable solutions. Today, I focus on backend engineering, clean architecture, and code quality.",
    image: "/images/journey/developer.jpg",
    highlights: ["Backend", "Architecture", "Code quality"],
  },
]