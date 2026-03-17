import { SiteContainer } from "./site-container";
import { Navbar1 } from "./navbar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <SiteContainer>
        <Navbar1 />
      </SiteContainer>
    </header>
  );
}
