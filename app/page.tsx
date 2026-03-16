import { HeroSection } from "@/components/sections/hero-section";

import { SiteHeader } from "@/components/layout/site-header";
import { JourneySection } from "@/components/sections/journey-section";
import { Separator } from "@/components/ui/separator";
import { StackSection } from "@/components/sections/stack-section";

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
      </main>
    </>
  );
}
