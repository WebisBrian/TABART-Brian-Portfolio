import { Github, Linkedin, Mail } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { SiteContainer } from "@/components/layout/site-container"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20">
      <Separator />

      <SiteContainer className="py-8">
        <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground">

          {/* Copyright */}
          <p>© {year} Brian Tabart</p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

        </div>
      </SiteContainer>
    </footer>
  )
}