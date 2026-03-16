export type Book = {
  id: string
  title: string
  author: string
  takeaway: string
  image: string
  category: "Code quality" | "Architecture" | "Craft" | "Backend"
}

export const books: Book[] = [
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    takeaway:
      "Helped me understand why readable code, meaningful naming, and small functions matter in real projects.",
    image: "/images/books/clean-code.jpg",
    category: "Code quality",
  },
  {
    id: "clean-architecture",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    takeaway:
      "Changed the way I think about boundaries, responsibilities, and long-term maintainability.",
    image: "/images/books/clean-architecture.jpg",
    category: "Architecture",
  },
  {
    id: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    takeaway:
      "Encouraged me to think like a software craftsman and to improve continuously through deliberate practice.",
    image: "/images/books/pragmatic-programmer.jpg",
    category: "Craft",
  },
  {
    id: "refactoring",
    title: "Refactoring",
    author: "Martin Fowler",
    takeaway:
      "Showed me that improving existing code is a core development skill, not just a cleanup task.",
    image: "/images/books/refactoring.jpg",
    category: "Code quality",
  },
  {
    id: "ddd",
    title: "Domain-Driven Design",
    author: "Eric Evans",
    takeaway:
      "Introduced me to modeling business complexity more carefully and designing software around domain understanding.",
    image: "/images/books/domain-driven-design.jpg",
    category: "Architecture",
  },
  {
    id: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    takeaway:
      "Gave me a broader view of data systems, scalability, consistency, and the trade-offs behind modern architectures.",
    image: "/images/books/designing-data-intensive-applications.jpg",
    category: "Backend",
  },
]