"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

export function HeroSection() {
  return (
    <Section aria-label="Introduction" className="relative overflow-hidden pb-32 sm:pb-40">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[40px_40px]"
        aria-hidden="true"
      />
      {/* Radial fade to blend grid into background */}
      <div
        className="pointer-events-none absolute inset-0 bg-background mask-[radial-gradient(ellipse_at_center,transparent_30%,black)]"
        aria-hidden="true"
      />

      <SiteContainer className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text content — staggered fade + slide up */}
          <motion.div
            className="order-2 space-y-6 lg:order-1"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Portfolio"
                title={
                  <>
                    <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Brian Tabart
                    </span>
                    <span className="block">
                      <EncryptedText
                        text="Développeur Backend Java"
                        encryptedClassName="text-muted-foreground"
                        revealedClassName="text-foreground/80"
                        revealDelayMs={60}
                        flipDelayMs={40}
                      />
                    </span>
                  </>
                }
                description="De la santé au développement backend Java, je mets aujourd’hui mon énergie au service de la création de solutions logicielles robustes, évolutives et porteuses de sens."
                as="h1"
                titleClassName="text-4xl sm:text-5xl lg:text-6xl"
              />
            </motion.div>

            <motion.p
              className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
              variants={fadeUp}
            >
              Actuellement en formation en conception d’applications Java, je
              développe des projets avec une attention particulière portée à
              l’architecture, à la qualité du code et à leur maintenabilité dans
              le temps.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <Button
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Voir mes projets
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Me contacter
              </Button>

              <Button variant="ghost" asChild>
                <a
                  href="/files/CV_B.TABART_2026.pdf"
                  download="CV-Brian-Tabart.pdf"
                  aria-label="Télécharger mon CV (PDF)"
                >
                  <Download aria-hidden="true" />
                  Mon CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile image — fade in with subtle scale */}
          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* Gradient ring border */}
            <div className="rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-cyan-400 p-0.75 shadow-2xl">
              <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-80 sm:w-80">
                <Image
                  src="/images/profil.png"
                  alt="Portrait de Brian Tabart"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </SiteContainer>
    </Section>
  );
}
