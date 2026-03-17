import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectsSection } from "@/components/sections/projects-session";
import { ReadingSection } from "@/components/sections/reading-section";
import { ContactSection } from "@/components/sections/contact-section";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageTransition } from "@/components/providers/page-transition";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="min-h-screen">
        <PageTransition>
          <HeroSection />
          <JourneySection />
          <StackSection />
          <ProjectsSection />
          <ReadingSection />
          <ContactSection />
        </PageTransition>
      </main>

      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
