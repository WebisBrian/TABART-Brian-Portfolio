"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/theme-toggle";

const navLinks = [
  { href: "/#journey", label: "Parcours" },
  { href: "/#projects", label: "Projets" },
  { href: "/#stack", label: "Stack" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      className="py-6"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="flex w-full items-center justify-between gap-6">

        {/* Logo + name */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo/logo-whereisbrian.svg"
            width={40}
            height={40}
            className="dark:invert"
            alt="logo du portfolio de Brian Tabart"
          />
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            Brian Tabart
          </span>
        </Link>

        {/* Center nav links */}
        <div className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map(({ href, label }) => (
            <Button key={href} variant="ghost" asChild>
              <Link href={href} role="listitem">
                {label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Right: social links + theme toggle */}
        <div className="flex shrink-0 items-center gap-1">
          <Button variant="ghost" asChild>
            <a
              href="https://github.com/WebisBrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (nouvelle fenêtre)"
            >
              <FaGithub className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>

          <Button variant="ghost" asChild>
            <a
              href="https://linkedin.com/in/brian-tabart"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (nouvelle fenêtre)"
            >
              <FaLinkedin className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>

          <ModeToggle />
        </div>

      </div>
    </motion.nav>
  );
}
