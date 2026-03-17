"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";
import type { ProjectDetails } from "@/data/project-details";
import { cn } from "@/lib/utils";
import { fadeUp, stagger } from "@/lib/animations";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

type Props = {
  project: Project;
  details: ProjectDetails;
};

export function ProjectPageContent({ project, details }: Props) {
  return (
    <SiteContainer className="py-16 sm:py-20">
      <motion.div
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

          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink aria-hidden="true" />
                  Démo live
                </a>
              </Button>
            )}
          </div>
        </motion.header>

        {/* Hero image */}
        <motion.div variants={fadeUp}>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </motion.div>

        {/* Stack */}
        <motion.section variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.section>

        <motion.div variants={fadeUp}>
          <Separator className="opacity-40" />
        </motion.div>

        {/* Overview */}
        <motion.section variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Vue d&apos;ensemble</h2>
          <p className="max-w-4xl text-base leading-8 text-muted-foreground">
            {details.overview}
          </p>
        </motion.section>

        {/* Problem */}
        <motion.section variants={fadeUp} className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Problématique</h2>
          <p className="max-w-4xl text-base leading-8 text-muted-foreground">
            {details.problem}
          </p>
        </motion.section>

        {/* Architecture */}
        {details.architecture && (
          <motion.section variants={fadeUp} className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Architecture</h2>
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              {details.architecture}
            </p>
          </motion.section>
        )}

        {/* Features / Challenges / Roadmap */}
        {(details.features?.length || details.challenges?.length || details.roadmap?.length) && (
          <motion.div variants={fadeUp} className="grid gap-8 lg:grid-cols-3">
            {details.features && details.features.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Fonctionnalités</h2>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  {details.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {details.challenges && details.challenges.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Défis</h2>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  {details.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {details.roadmap && details.roadmap.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">Roadmap</h2>
                <ul className="space-y-2 text-sm leading-7 text-muted-foreground">
                  {details.roadmap.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {step}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </motion.div>
        )}
      </motion.div>
    </SiteContainer>
  );
}
