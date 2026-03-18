export type Book = {
  id: string;
  title: string;
  author: string;
  takeaway: string;
  image: string;
  category:
    | "Qualité"
    | "Architecture"
    | "Java"
    | "Backend"
    | "Craft"
    | "Mindset";
  status: "Lu" | "En cours" | "À lire";
};

export const books: Book[] = [
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    takeaway:
      "M'a aidé à comprendre pourquoi la lisibilité du code, le nommage précis et les petites fonctions font une vraie différence en production.",
    image: "/images/books/clean-code.jpg",
    category: "Qualité",
    status: "Lu",
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    takeaway:
      "Ce livre a profondément changé ma manière de concevoir les frontières, les responsabilités et la maintenabilité d’une application. Il a pris encore plus de sens en parallèle des cours de José Paumard sur SOLID et l’architecture logicielle.",
    image: "/images/books/clean-architecture.jpg",
    category: "Architecture",
    status: "Lu",
  },
  {
    id: "the-one-thing",
    title: "The One Thing",
    author: "Gary Keller & Jay Papasan",
    takeaway:
      "M'a appris à concentrer mon énergie sur ce qui compte vraiment, en éliminant le bruit pour progresser là où ça a le plus d'impact.",
    image: "/images/books/the-one-thing.jpg",
    category: "Mindset",
    status: "Lu",
  },
  {
    id: "spring-in-action",
    title: "Spring in Action",
    author: "Craig Walls",
    takeaway:
      "Une introduction complète à l'écosystème Spring : IoC, Spring MVC, Spring Boot et les bonnes pratiques du développement backend Java.",
    image: "/images/books/spring-in-action.jpg",
    category: "Backend",
    status: "En cours",
  },
  {
    id: "tdd-by-example",
    title: "TDD by Example",
    author: "Kent Beck",
    takeaway:
      "J’attends de ce livre qu’il m’aide à affiner ma pratique du TDD, en renforçant ma capacité à concevoir des systèmes guidés par les tests.",
    image: "/images/books/tdd-by-example.jpg",
    category: "Qualité",
    status: "À lire",
  },
  {
    id: "effective-java",
    title: "Effective Java",
    author: "Joshua Bloch",
    takeaway:
      "J’attends de ce livre qu’il consolide ma maîtrise des bonnes pratiques Java, avec un focus sur la robustesse, la lisibilité et la maintenabilité du code.",
    image: "/images/books/effective-java.jpg",
    category: "Java",
    status: "À lire",
  },
];
