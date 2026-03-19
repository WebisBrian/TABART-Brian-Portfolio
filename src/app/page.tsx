import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { StackSection } from "@/components/sections/stack-section";
import { ProjectsSection } from "@/components/sections/projects-session";
import { ReadingSection } from "@/components/sections/reading-section";
import { ContactSection } from "@/components/sections/contact-section";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { AnnouncementBanner } from "@/components/layout/announcement-banner";

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <SiteHeader />

      <main className="min-h-screen">
        <HeroSection />
        <JourneySection />
        <StackSection />
        <ProjectsSection />
        <ReadingSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
