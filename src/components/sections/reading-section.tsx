"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { books } from "@/data/books";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

const lu = books.filter((b) => b.status === "Lu").length;
const enCours = books.filter((b) => b.status === "En cours").length;
const aLire = books.filter((b) => b.status === "À lire").length;

function StatusDot({ status, decorative = false }: { status: string; decorative?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block h-2 w-2 shrink-0 rounded-full",
        status === "Lu" && "bg-green-500",
        status === "En cours" && "bg-blue-500",
        status === "À lire" && "bg-muted-foreground/40",
      )}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : status}
      aria-hidden={decorative ? true : undefined}
    />
  );
}

export function ReadingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="reading" aria-label="Lectures">
      <SiteContainer>
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Lectures"
              title="Bibliothèque du développeur"
              description="Une sélection d'ouvrages qui influencent ma façon d'écrire du code, de structurer des applications et de penser la qualité logicielle."
            />
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="font-medium text-foreground">
              {books.length} livres
            </span>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot status="Lu" decorative />
              {lu} lu{lu > 1 ? "s" : ""}
            </span>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot status="En cours" decorative />
              {enCours} en cours
            </span>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot status="À lire" decorative />
              {aLire} à lire
            </span>
          </motion.div>

          {/* Book list */}
          <motion.div variants={fadeUp} className="mt-6">
            <Card className="overflow-hidden p-0">
              <ul className="divide-y divide-border/40">
              {books.map((book, index) => (
                <motion.li
                  key={book.id}
                  variants={fadeUp}
                  className="group flex gap-5 p-5 transition-colors duration-200 hover:bg-muted/50 sm:gap-6 sm:p-6"
                >
                  {/* Cover */}
                  <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-sm bg-muted sm:h-28 sm:w-20">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {book.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground/50" aria-hidden="true">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold leading-snug">
                          {book.title}
                        </p>
                        <StatusDot status={book.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {book.author}
                      </p>
                    </div>

                    <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {book.takeaway}
                    </p>
                  </div>
                </motion.li>
              ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}
