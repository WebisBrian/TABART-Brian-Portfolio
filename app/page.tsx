import { HeroSection } from "@/components/layout/hero-section";

import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
      </main>
    </>
  );
}
