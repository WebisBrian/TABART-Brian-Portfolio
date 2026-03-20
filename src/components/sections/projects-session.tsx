"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { IconGithub } from "@/components/ui/icons";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const featuredProject = projects.find((p) => p.featured);
const secondaryProjects = projects.filter((p) => !p.featured);

// Short French descriptions shown in badge hover cards
const techDescriptions: Record<string, string> = {
  "Java": "Langage orienté objet robuste",
  "Spring Boot": "Framework Java pour APIs REST",
  "Spring Security": "Authentification et sécurité pour applications Spring",
  "Symfony": "Framework PHP structuré et orienté bonnes pratiques",
  "Thymeleaf": "Moteur de templates Java côté serveur",
  "MySQL": "Base de données relationnelle",
  "PostgreSQL": "Base de données relationnelle",
  "MongoDB": "Base de données orientée documents",
  "Docker": "Conteneurisation et déploiement portable",
  "VPS": "Serveur privé virtuel pour un déploiement maîtrisé",
  "Next.js": "Framework React full-stack",
  "TypeScript": "JavaScript avec typage statique",
  "Tailwind": "Framework CSS utilitaire",
  "shadcn/ui": "Composants UI accessibles pour React",
  "React": "Bibliothèque UI basée sur les composants",
  "Node.js": "Runtime JavaScript côté serveur",
  "GitHub": "Contrôle de version et collaboration",
  "Vercel": "Plateforme de déploiement optimisée pour Next.js",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        status === "En cours" &&
          "border-blue-500/40 bg-blue-500/10 text-blue-500",
        status === "Terminé" &&
          "border-green-600/60 bg-green-500/20 text-green-700 dark:border-green-500/40 dark:bg-green-500/10 dark:text-green-500",
        status === "Prévu" &&
          "border-muted-foreground/40 text-muted-foreground",
      )}
    >
      {status}
    </Badge>
  );
}

function TechBadge({ tech }: { tech: string }) {
  const description = techDescriptions[tech];

  if (!description) {
    return <Badge variant="secondary">{tech}</Badge>;
  }

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Badge variant="secondary" className="cursor-default">
          {tech}
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto px-3 py-1.5 text-xs">
        {description}
      </HoverCardContent>
    </HoverCard>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section id="projects" aria-label="Projets" className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-size-[24px_24px]"
        aria-hidden="true"
      />
      {/* Radial fade to blend into background */}
      <div
        className="pointer-events-none absolute inset-0 bg-background mask-[radial-gradient(ellipse_at_center,transparent_40%,black)]"
        aria-hidden="true"
      />
      <SiteContainer className="relative z-10">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Projets"
              title="Sélection de projets"
              description="Voici un ensemble de projets qui reflètent mes intérêts techniques, mon parcours d'apprentissage et mon approche orientée backend."
            />
          </motion.div>

          <div className="mt-10 space-y-8">
            {/* Featured project */}
            {featuredProject && (
              <motion.div variants={fadeUp}>
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Image with zoom on hover */}
                    <div className="relative min-h-65 overflow-hidden bg-muted lg:min-h-full">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4, ease: "easeOut" as const }}
                      >
                        <Image
                          src={featuredProject.image}
                          alt={featuredProject.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-between">
                      {/* Large decorative number */}
                      <span className="pointer-events-none absolute right-6 top-4 select-none text-8xl font-bold leading-none text-muted-foreground/10" aria-hidden="true">
                        01
                      </span>

                      <CardHeader className="space-y-4 pt-8">
                        <div className="flex flex-wrap items-center gap-3">
                          <Badge variant="secondary">À la une</Badge>
                          <StatusBadge status={featuredProject.status} />
                        </div>

                        <CardTitle className="text-2xl sm:text-3xl">
                          {featuredProject.title}
                        </CardTitle>

                        <CardDescription className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {featuredProject.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-5 pb-4">
                        {featuredProject.longDescription && (
                          <p className="line-clamp-4 text-sm leading-7 text-muted-foreground sm:text-base">
                            {featuredProject.longDescription}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {featuredProject.stack.map((tech) => (
                            <TechBadge key={tech} tech={tech} />
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex flex-wrap gap-3">
                        <Button variant="secondary" size="lg" asChild>
                          <Link href={`/projects/${featuredProject.slug}`}>
                            <ArrowUpRight aria-hidden="true" />
                            Détails
                          </Link>
                        </Button>

                        {featuredProject.githubUrl && (
                          <Button variant="outline" size="lg" asChild>
                            <a
                              href={featuredProject.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IconGithub />
                              GitHub
                            </a>
                          </Button>
                        )}

                        {featuredProject.liveUrl && (
                          <Button size="lg" asChild>
                            <a
                              href={featuredProject.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ExternalLink aria-hidden="true" />
                              Démo
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Secondary projects — staggered + hover lift */}
            <motion.div variants={fadeUp}>
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Autres projets
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {secondaryProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" as const }}
                >
                  <Card className="relative flex h-full flex-col overflow-hidden">
                    {/* Decorative number */}
                    <span className="pointer-events-none absolute right-4 top-3 select-none text-7xl font-bold leading-none text-muted-foreground/10" aria-hidden="true">
                      {String(index + 2).padStart(2, "0")}
                    </span>

                    {/* Image with bottom gradient overlay */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-card to-transparent" aria-hidden="true" />
                    </div>

                    <CardHeader className="space-y-4 pt-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <StatusBadge status={project.status} />
                      </div>

                      <CardTitle className="text-xl">{project.title}</CardTitle>

                      <CardDescription className="line-clamp-3 min-h-18 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-3">
                      <Button variant="secondary" asChild>
                        <Link href={`/projects/${project.slug}`}>
                          <ArrowUpRight aria-hidden="true" />
                          Détails
                        </Link>
                      </Button>

                      {project.githubUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <IconGithub />
                            GitHub
                          </a>
                        </Button>
                      )}

                      {project.liveUrl && (
                        <Button asChild>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink aria-hidden="true" />
                            Démo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </SiteContainer>
    </Section>
  );
}
