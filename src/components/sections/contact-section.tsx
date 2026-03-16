"use client"

import { Mail, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SiteContainer } from "@/components/layout/site-container"

export function ContactSection() {
  return (
    <>
      <Section id="contact" className="py-20">
        <SiteContainer>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left column: introduction */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s get in touch"
                description="If you would like to discuss a project, an opportunity, or simply exchange about development, feel free to send me a message."
              />

              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                I am particularly interested in backend development, software quality,
                architecture, and projects with useful real-world value.
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>your-email@example.com</span>
                </a>

                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right column: form */}
            <form className="space-y-6 rounded-2xl border bg-card p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about your message..."
                  className="min-h-[160px]"
                />
              </div>

              <Button type="submit" className="cursor-pointer">
                Send message
              </Button>
            </form>
          </div>
        </SiteContainer>
      </Section>
    </>
  )
}