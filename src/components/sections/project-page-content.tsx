"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import type { ProjectDetails } from "@/data/project-details";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/animations";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SiteContainer } from "@/components/layout/site-container";

function StatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        status === "En cours" && "border-blue-500/40 bg-blue-500/10 text-blue-500",
        status === "Terminé" && "border-green-500/40 bg-green-500/10 text-green-500",
        status === "Prévu" && "border-muted-foreground/40 text-muted-foreground"
      )}
    >
      {status}
    </Badge>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoadmapTimeline({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <li key={step} className="relative flex gap-3 pb-5 last:pb-0">
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="absolute left-3 top-6 h-full w-px bg-border/40" />
          )}
          {/* Step number */}
          <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/50 bg-background text-xs font-medium text-muted-foreground">
            {index + 1}
          </div>
          <p className="pt-0.5 text-sm text-muted-foreground">{step}</p>
        </li>
      ))}
    </ol>
  );
}

type Props = {
  project: Project;
  details: ProjectDetails;
  relatedProjects: Project[];
};

export function ProjectPageContent({ project, details, relatedProjects }: Props) {
  return (
    <div className="relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-100"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-background mask-[radial-gradient(ellipse_at_center,transparent_40%,black)]"
        aria-hidden="true"
      />

      <SiteContainer className="relative z-10 py-16 sm:py-20">
        <motion.div
          key={project.slug}
          className="mx-auto max-w-5xl space-y-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Back button */}
          <motion.div variants={fadeUp}>
            <Button variant="ghost" asChild className="px-0 hover:bg-transparent">
              <Link href="/#projects">
                <ArrowLeft />
                Retour aux projets
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header variants={fadeUp} className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={project.status} />
              {project.featured && (
                <Badge variant="secondary">À la une</Badge>
              )}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                {project.description}
              </p>
            </div>
          </motion.header>

          {/* Hero image */}
          <motion.div variants={fadeUp}>
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Separator className="opacity-40" />
          </motion.div>

          {/* Two-column layout: main content + sticky sidebar */}
          <motion.div
            variants={fadeUp}
            className="grid gap-12 lg:grid-cols-[1fr_280px]"
          >
            {/* Left — main content */}
            <div className="space-y-10">
              {details.overview && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Vue d&apos;ensemble</h2>
                  <p className="text-base leading-8 text-muted-foreground">{details.overview}</p>
                </section>
              )}

              {details.problem && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Problématique</h2>
                  <p className="text-base leading-8 text-muted-foreground">{details.problem}</p>
                </section>
              )}

              {details.architecture && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Architecture</h2>
                  <p className="text-base leading-8 text-muted-foreground">{details.architecture}</p>
                </section>
              )}

              {details.features && details.features.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Fonctionnalités</h2>
                  <BulletList items={details.features} />
                </section>
              )}

              {details.challenges && details.challenges.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">Défis</h2>
                  <BulletList items={details.challenges} />
                </section>
              )}
            </div>

            {/* Right — sticky sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">

              {/* Stack */}
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Liens
                  </p>
                  <div className="flex flex-col gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="justify-start">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          <FaGithub aria-hidden="true" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild className="justify-start">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          <ExternalLink aria-hidden="true" />
                          Démo live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Roadmap timeline */}
              {details.roadmap && details.roadmap.length > 0 && (
                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Roadmap
                  </p>
                  <RoadmapTimeline steps={details.roadmap} />
                </div>
              )}
            </aside>
          </motion.div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <motion.div variants={fadeUp} className="space-y-6">
              <Separator className="opacity-40" />
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Voir aussi
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedProjects.map((p) => (
                  <Link key={p.id} href={`/projects/${p.slug}`} className="group block">
                    <Card className="overflow-hidden transition-colors duration-200 group-hover:bg-muted/50">
                      <div className="relative h-36 overflow-hidden bg-muted">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <CardHeader className="space-y-2">
                        <div className="flex items-center gap-2">
                          <StatusBadge status={p.status} />
                        </div>
                        <CardTitle className="flex items-center gap-1 text-base">
                          {p.title}
                          <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm">
                          {p.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeUp}>
            <Button variant="ghost" asChild className="px-0 hover:bg-transparent">
              <Link href="/#projects">
                <ArrowLeft />
                Retour aux projets
              </Link>
            </Button>
          </motion.div>

        </motion.div>
      </SiteContainer>
    </div>
  );
}
