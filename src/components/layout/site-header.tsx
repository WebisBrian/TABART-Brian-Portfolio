import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { SiteContainer } from "@/components/layout/site-container"

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Readings", href: "#readings" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <SiteContainer className="flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          Brian Tabart
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/TON-GITHUB"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com/in/TON-LINKEDIN"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </SiteContainer>
    </header>
  )
}