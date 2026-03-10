import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main>
        <h1>Brian TABART</h1>
        <p>Développeur backend</p>
        <ModeToggle />
      </main>
    </div>
  );
}
