"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:40px_40px]"
        aria-hidden="true"
      />
      {/* Radial fade to blend grid into background */}
      <div
        className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"
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
                  <EncryptedText
                    text="Brian Tabart - Développeur Backend Java"
                    encryptedClassName="text-muted-foreground"
                    revealedClassName="text-foreground"
                    revealDelayMs={60}
                    flipDelayMs={40}
                  />
                }
                description="Développeur backend spécialisé en Java et Spring Boot. Je construis des applications robustes, maintenables et utiles."
                as="h1"
              />
            </motion.div>

            <motion.p
              className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
              variants={fadeUp}
            >
              En formation dans la conception d&apos;applications Java, je construis
              des projets avec un fort accent sur l&apos;architecture propre, la
              qualité du code et la maintenabilité à long terme.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <Button asChild>
                <Link href="#projects">Voir mes projets</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="#contact">Me contacter</Link>
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
            <div className="rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 p-[3px] shadow-2xl">
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
