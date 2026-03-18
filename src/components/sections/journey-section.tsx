"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { journeySteps } from "@/data/journey";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

export function JourneySection() {
  const [activeId, setActiveId] = useState<string>(journeySteps[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="journey" aria-label="Parcours">
      <SiteContainer>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Parcours"
              title="Étapes clés"
              description="Eh oui, mon parcours professionnel n'a pas toujours été axé sur le développement !
              Alors voici trois périodes déterminantes qui ont façonné ma manière de comprendre, de m’engager et de construire.
              "
              className="mb-6"
            />
          </motion.div>

          <Tabs value={activeId} onValueChange={setActiveId}>
            {/* Tab triggers */}
            <motion.div variants={fadeUp}>
              <TabsList
                aria-label="Étapes du parcours"
                className="mb-8 h-auto w-full gap-2 bg-transparent p-0 sm:w-auto sm:flex-wrap"
              >
                {journeySteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <TabsTrigger
                      key={step.id}
                      value={step.id}
                      aria-label={step.period}
                      className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground data-active:border-primary data-active:bg-primary data-active:text-primary-foreground data-active:shadow-none sm:flex-none"
                    >
                      <StepIcon className="h-4 w-4" aria-hidden="true" />
                      <span className="hidden sm:inline">{step.period}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </motion.div>

            {/* Tab panels */}
            {journeySteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <TabsContent key={step.id} value={step.id}>
                  <motion.div
                    initial={
                      prefersReducedMotion ? false : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" as const }}
                  >
                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      {/* Image */}
                      <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
                        <div className="relative mx-auto aspect-4/5 w-full max-w-md lg:mx-0 overflow-hidden rounded-3xl bg-muted">
                          <Image
                            src={step.image}
                            alt={`Illustration — ${step.period}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="order-1 mx-auto w-full max-w-md space-y-6 lg:order-2 lg:mx-0 lg:max-w-none">
                        {/* Date range */}
                        <p className="text-xs tabular-nums tracking-widest text-muted-foreground">
                          {step.dateRange}
                        </p>

                        {/* Icon + title */}
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <StepIcon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                              {step.period}
                            </p>
                            <h3 className="text-2xl font-bold tracking-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {step.shortDescription}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((highlight) => (
                            <Badge key={highlight} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}
