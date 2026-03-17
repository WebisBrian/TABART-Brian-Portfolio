import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/theme-toggle";

const Navbar1 = () => {
  return (
    <nav className="py-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo/logo-whereisbrian.svg"
            width={32}
            height={32}
            className="dark:invert"
            alt="logo du portfolio de Brian Tabart"
          />
          <span className="hidden sm:inline text-lg font-semibold tracking-tighter">
            Brian Tabart - Développeur Java
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/WebisBrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/brian-tabart"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar1 };
