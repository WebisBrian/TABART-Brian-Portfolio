"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ui/theme-toggle";

const navLinks = [
  { id: "journey", label: "Parcours" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleNavClick(id: string) {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  }
  return (
    <motion.nav className="py-6">
      <div className="flex w-full items-center justify-between gap-6">

        {/* Logo + name */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
        >
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo/logo-whereisbrian.svg"
              width={40}
              height={40}
              className="dark:invert"
              alt="logo du portfolio de Brian Tabart"
              priority
            />
            <span className="hidden text-lg font-semibold tracking-tight sm:inline">
              Brian Tabart
            </span>
          </Link>
        </motion.div>

        {/* Center nav links */}
        <div className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map(({ id, label }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 + i * 0.07 }}
            >
              <Button
                type="button"
                variant="ghost"
                role="listitem"
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Right: social links + theme toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.36 }}
          >
            <a
              href="https://github.com/WebisBrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (nouvelle fenêtre)"
              className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <FaGithub className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.43 }}
          >
            <a
              href="https://linkedin.com/in/brian-tabart"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (nouvelle fenêtre)"
              className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <FaLinkedin className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.50 }}
          >
            <ModeToggle />
          </motion.div>
        </div>

      </div>
    </motion.nav>
  );
}
