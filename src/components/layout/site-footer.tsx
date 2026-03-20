"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { IconGithub, IconLinkedin } from "@/components/ui/icons";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";

export function SiteFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-card dark:bg-background">
      <Separator />

      <SiteContainer className="py-8">
        <motion.div
          ref={ref}
          className="flex flex-col items-center gap-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Copyright */}
          <p>© {year} Brian Tabart</p>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="mailto:brian.tabart.pro@outlook.fr"
              aria-label="Envoyer un email"
              className="p-3 transition-colors hover:text-foreground"
            >
              <Mail className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/WebisBrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 transition-colors hover:text-foreground"
            >
              <IconGithub className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" />
            </a>

            <a
              href="https://linkedin.com/in/brian-tabart"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 transition-colors hover:text-foreground"
            >
              <IconLinkedin className="h-7 w-7 shrink-0 sm:h-5 sm:w-5" />
            </a>
          </div>
        </motion.div>
      </SiteContainer>
    </footer>
  );
}
