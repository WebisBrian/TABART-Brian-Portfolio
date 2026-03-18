import { SiteContainer } from "./site-container";
import { Navbar } from "./navbar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <SiteContainer>
        <Navbar />
      </SiteContainer>
    </header>
  );
}
