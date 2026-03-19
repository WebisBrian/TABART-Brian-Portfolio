"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/layout/site-container";

export function SiteFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20">
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
          <div className="flex items-center gap-4">
            <a
              href="mailto:brian.tabart.pro@outlook.fr"
              aria-label="Envoyer un email"
              className="transition-colors hover:text-foreground"
            >
              <FaEnvelope className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/WebisBrian"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/brian-tabart"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </SiteContainer>
    </footer>
  );
}
