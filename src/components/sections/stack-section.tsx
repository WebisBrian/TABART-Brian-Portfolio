"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { technologies } from "@/data/technologies";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
const secondRow = technologies.slice(Math.ceil(technologies.length / 2));

type TechCardProps = {
  name: string;
  icon: string;
  darkInvert?: boolean;
};

function TechCard({ name, icon, darkInvert }: TechCardProps) {
  return (
    <figure className="flex w-28 shrink-0 flex-col items-center justify-center gap-3 px-4 py-4 text-center transition-transform duration-200 hover:scale-105 sm:w-32 md:w-36">
      <Image
        src={icon}
        alt={`${name} logo`}
        width={64}
        height={64}
        className={cn(
          "h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24",
          darkInvert && "dark:invert",
        )}
      />

      <figcaption className="text-sm font-medium text-foreground/90 sm:text-base">
        {name}
      </figcaption>
    </figure>
  );
}

export function StackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="stack" aria-label="Stack technique">
      <SiteContainer>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Stack"
              title="Technologies utilisées"
              description="Une sélection d'outils et technologies que j'utilise régulièrement dans mes projets."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden"
          >
            <Marquee pauseOnHover className="[--duration:28s]">
              {firstRow.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  darkInvert={tech.darkInvert}
                />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="mt-6 [--duration:32s]">
              {secondRow.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  darkInvert={tech.darkInvert}
                />
              ))}
            </Marquee>

            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background sm:w-28 md:w-36"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background sm:w-28 md:w-36"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}
