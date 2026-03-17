"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/theme-toggle";

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  social?: {
    github: {
      title: string;
      url: string;
    };
    linkedin: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo/logo-whereisbrian.svg",
    alt: "logo du portfolio de Brian Tabart",
    title: "Brian Tabart - Développeur Java",
  },
  social = {
    github: {
      title: "GitHub",
      url: "https://github.com/WebisBrian",
    },
    linkedin: {
      title: "LinkedIn",
      url: "https://linkedin.com/in/brian-tabart",
    },
  },
  className,
}: Navbar1Props) => {
  return (
    <nav className={cn("py-4", className)}>
      <div className="flex w-full items-center justify-between">
        <Link href={logo.url} className="flex items-center gap-4">
          <Image
            src={logo.src}
            width={32}
            height={32}
            className="dark:invert"
            alt={logo.alt}
          />
          <span className="hidden sm:inline text-lg font-semibold tracking-tighter">
            {logo.title}
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href={social.github.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.github.title}
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link
              href={social.linkedin.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.linkedin.title}
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export { Navbar1 };
