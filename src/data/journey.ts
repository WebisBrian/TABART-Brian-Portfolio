import { HeartPulse, Laptop, Sparkles, type LucideIcon } from "lucide-react";

export type JourneyStep = {
  id: "youth" | "nurse" | "developer";
  period: string;
  dateRange: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  image: string;
  highlights: string[];
};

export const journeySteps: JourneyStep[] = [
  {
    id: "youth",
    period: "Jeunesse",
    dateRange: "1990 — 2010",
    title: "Apprendre et explorer",
    icon: Sparkles,
    shortDescription:
      "Une période marquée par la curiosité, l’apprentissage et les jeux vidéo, accompagnée d’un certain brin d’insouciance. C'est là que s'est construit le goût de comprendre, d'apprendre et d'essayer.",
    image: "/images/journey/youth.webp",
    highlights: ["Curiosité", "Compréhension", "Expérimentation"],
  },
  {
    id: "nurse",
    period: "Infirmier",
    dateRange: "2010 — 2024",
    title: "S'engager et prendre soin",
    icon: HeartPulse,
    shortDescription:
      "Infirmier pendant onze ans au CHU de Rouen, j’y ai appris à garder mon calme sous pression, à assumer des responsabilités et à m’appuyer sur le collectif. Cette expérience m’a surtout appris à faire face à l’inconnu, à m’adapter à des situations complexes et à trouver des solutions, sans jamais oublier l’essentiel : l’humain, au cœur de ma pratique.",
    image: "/images/journey/nurse.webp",
    highlights: ["Empathie", "Responsabilité", "Esprit d'équipe"],
  },
  {
    id: "developer",
    period: "Développeur",
    dateRange: "Depuis 2024",
    title: "Construire et structurer",
    icon: Laptop,
    shortDescription:
      "Le développement logiciel est devenu une continuité naturelle de mon parcours. Continuer à être utile, autrement. Je me concentre aujourd’hui sur le backend, avec une attention forte portée à la qualité du code et aux architectures durables.",
    image: "/images/journey/developer.webp",
    highlights: ["Backend", "Architecture", "Maintenabilité"],
  },
];
