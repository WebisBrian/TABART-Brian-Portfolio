import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

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
import { Separator } from "../ui/separator";

const featuredProject = projects.find((project) => project.featured);
const secondaryProjects = projects.filter((project) => !project.featured);

export function ProjectsSection() {
  return (
    <>
      <Separator />

      <Section id="projects" className="py-20">
        <SiteContainer>
          <SectionHeading
            eyebrow="Projects"
            title="Things I build"
            description="A selection of projects that reflect my technical interests, my learning path, and my backend-oriented approach."
          />

          <div className="mt-10 space-y-8">
            {featuredProject ? (
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative min-h-[260px] bg-muted lg:min-h-full">
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
                        <Badge variant="secondary">Featured</Badge>
                        <Badge variant="outline">
                          {featuredProject.status}
                        </Badge>
                      </div>

                      <CardTitle className="text-2xl sm:text-3xl">
                        {featuredProject.title}
                      </CardTitle>

                      <CardDescription className="line-clamp-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {featuredProject.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      {featuredProject.longDescription ? (
                        <p className="line-clamp-4 text-sm leading-7 text-muted-foreground sm:text-base">
                          {featuredProject.longDescription}
                        </p>
                      ) : null}

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
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          Details
                        </Link>
                      </Button>

                      {featuredProject.githubUrl ? (
                        <Button variant="outline" asChild>
                          <Link
                            href={featuredProject.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      ) : null}

                      {featuredProject.liveUrl ? (
                        <Button asChild>
                          <Link
                            href={featuredProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live demo
                          </Link>
                        </Button>
                      ) : null}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ) : null}

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

                    <CardDescription className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
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
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        Details
                      </Link>
                    </Button>

                    {project.githubUrl ? (
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    ) : null}

                    {project.liveUrl ? (
                      <Button size="sm" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    ) : null}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </SiteContainer>
      </Section>
    </>
  );
}
