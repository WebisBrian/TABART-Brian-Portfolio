import { HeartPulse, Laptop, Sparkles, type LucideIcon } from "lucide-react"

export type JourneyStep = {
  id: "youth" | "nurse" | "developer"
  period: string
  dateRange: string
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
    dateRange: "1990 — 2010",
    title: "Construire ses fondations",
    icon: Sparkles,
    shortDescription:
      "Une période façonnée par la curiosité, la discipline et la construction personnelle. Elle a posé les bases des valeurs et de la résilience qui me guident encore aujourd'hui.",
    image: "/images/journey/youth.png",
    highlights: ["Curiosité", "Discipline", "Fondations"],
  },
  {
    id: "nurse",
    period: "Infirmier",
    dateRange: "2010 — 2024",
    title: "Soin, responsabilité et travail d'équipe",
    icon: HeartPulse,
    shortDescription:
      "Le métier d'infirmier m'a appris le calme sous pression, la responsabilité et l'importance d'être utile aux autres. Il a renforcé mon sens de la rigueur, du travail en équipe et du service.",
    image: "/images/journey/nurse.png",
    highlights: ["Responsabilité", "Sens humain", "Travail d'équipe"],
  },
  {
    id: "developer",
    period: "Développeur",
    dateRange: "Depuis 2024",
    title: "Du soin au code",
    icon: Laptop,
    shortDescription:
      "Le développement logiciel est devenu le prolongement naturel de mon besoin de construire des solutions utiles et durables. Je me concentre aujourd'hui sur le backend, l'architecture propre et la qualité du code.",
    image: "/images/journey/developer.png",
    highlights: ["Backend", "Architecture", "Qualité du code"],
  },
]
