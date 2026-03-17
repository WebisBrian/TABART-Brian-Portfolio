import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

export function HeroSection() {
  return (
    <Section className="py-20 sm:py-30">
      <SiteContainer>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <SectionHeading
              eyebrow="Portfolio"
              title="Brian Tabart"
              description="Backend developer focused on Java and Spring Boot. I build robust, maintainable, and useful applications."
              as="h1"
            />

            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              I am currently training in Java application design and I build
              projects with a strong focus on clean architecture, code quality,
              and long-term maintainability.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#projects">Voir mes projets</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="#contact">Me contacter</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-2 ring-border sm:h-80 sm:w-80">
              {" "}
              <Image
                src="/images/Profil_exterieur.png"
                alt="Portrait of Brian Tabart"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </SiteContainer>
    </Section>
  );
}
