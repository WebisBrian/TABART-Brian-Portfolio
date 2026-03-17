export type Book = {
  id: string
  title: string
  author: string
  takeaway: string
  image: string
  category: "Qualité" | "Architecture" | "Java" | "Backend" | "Craft" | "Mindset"
  status: "Lu" | "En cours" | "À lire"
}

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
      "A changé ma façon de penser les frontières, les responsabilités et la maintenabilité à long terme d'une application.",
    image: "/images/books/clean-architecture.jpg",
    category: "Architecture",
    status: "Lu",
  },
  {
    id: "effective-java",
    title: "Effective Java",
    author: "Joshua Bloch",
    takeaway:
      "Une référence incontournable pour écrire du Java robuste et idiomatique. Chaque item enseigne un principe applicable immédiatement.",
    image: "/images/books/effective-java.jpg",
    category: "Java",
    status: "En cours",
  },
  {
    id: "spring-in-action",
    title: "Spring in Action",
    author: "Craig Walls",
    takeaway:
      "Une introduction complète à l'écosystème Spring : IoC, Spring MVC, Spring Boot et les bonnes pratiques du développement backend Java.",
    image: "/images/books/spring-in-action.jpg",
    category: "Backend",
    status: "À lire",
  },
  {
    id: "tdd-by-example",
    title: "TDD by Example",
    author: "Kent Beck",
    takeaway:
      "Démontre pas à pas comment le Test-Driven Development guide la conception et produit un code plus fiable et plus modulaire.",
    image: "/images/books/tdd-by-example.jpg",
    category: "Qualité",
    status: "À lire",
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
]
