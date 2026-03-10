import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div >
      <main className="min-h-screen bg-background text-foreground">
        <Section>
          <SiteContainer>
            <SectionHeading
              eyebrow="Portfolio"
              title="Brian Tabart"
              description="Bienvenue sur mon portfolio ! Je suis développeur backend Java / Spring Boot et j'ai conçu ce site avec Next.js, Tailwind CSS et shadcn/ui."
              />
          </SiteContainer>          
        </Section>
        <ModeToggle />
      </main>
    </div>
  );
}
