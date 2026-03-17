import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "@/data/projects";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteContainer } from "@/components/layout/site-container";

const featuredProject = projects.find((project) => project.featured);
const secondaryProjects = projects.filter((project) => !project.featured);

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SiteContainer>
        <SectionHeading
          eyebrow="Projets"
          title="Ce que je construis"
          description="Une sélection de projets qui reflètent mes intérêts techniques, mon parcours d'apprentissage et mon approche orientée backend."
        />

        <div className="mt-10 space-y-8">
          {featuredProject && (
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-65 bg-muted lg:min-h-full">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">À la une</Badge>
                      <Badge variant="outline">{featuredProject.status}</Badge>
                    </div>

                    <CardTitle className="text-2xl sm:text-3xl">
                      {featuredProject.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {featuredProject.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    {featuredProject.longDescription && (
                      <p className="line-clamp-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {featuredProject.longDescription}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {featuredProject.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-3">
                    <Button variant="secondary" asChild>
                      <Link href={`/projects/${featuredProject.slug}`}>
                        <ArrowUpRight />
                        Détails
                      </Link>
                    </Button>

                    {featuredProject.githubUrl && (
                      <Button variant="outline" asChild>
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                          GitHub
                        </a>
                      </Button>
                    )}

                    {featuredProject.liveUrl && (
                      <Button asChild>
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink />
                          Démo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </div>
              </div>
            </Card>
          )}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project) => (
              <Card
                key={project.id}
                className="flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48 bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline">{project.status}</Badge>
                  </div>

                  <CardTitle className="text-xl">{project.title}</CardTitle>

                  <CardDescription className="line-clamp-3 min-h-18 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      <ArrowUpRight />
                      Détails
                    </Link>
                  </Button>

                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink />
                        Démo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </SiteContainer>
    </Section>
  );
}
