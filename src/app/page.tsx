import { HeroSection } from "@/components/sections/hero-section";

import { SiteHeader } from "@/components/layout/site-header";
import { JourneySection } from "@/components/sections/journey-section";
import { Separator } from "@/components/ui/separator";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectsSection } from "@/components/sections/projects-session";
import { ReadingSection } from "@/components/sections/reading-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <Separator />
        <JourneySection />
        <Separator />
        <StackSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <ReadingSection />
        <Separator />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
