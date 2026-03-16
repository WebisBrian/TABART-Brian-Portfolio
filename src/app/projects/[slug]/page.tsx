import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { projects } from "@/data/projects"
import { projectDetails } from "@/data/project-details"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SiteContainer } from "@/components/layout/site-container"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((item) => item.slug === slug)
  const details = projectDetails.find((item) => item.slug === slug)

  if (!project || !details) {
    notFound()
  }

  return (
    <SiteContainer className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div>
          <Button variant="ghost" asChild className="px-0 hover:bg-transparent">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
        </div>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="outline">{project.status}</Badge>

            {project.featured ? (
              <Badge variant="secondary">Featured</Badge>
            ) : null}
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
            {project.githubUrl ? (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            ) : null}

            {project.liveUrl ? (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live demo
                </a>
              </Button>
            ) : null}
          </div>
        </header>

        <section className="space-y-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
          <p className="max-w-4xl text-base leading-8 text-muted-foreground">
            {details.overview}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
          <p className="max-w-4xl text-base leading-8 text-muted-foreground">
            {details.problem}
          </p>
        </section>

        {details.architecture ? (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Architecture</h2>
            <p className="max-w-4xl text-base leading-8 text-muted-foreground">
              {details.architecture}
            </p>
          </section>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-3">
          {details.features && details.features.length > 0 ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Features</h2>
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {details.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.challenges && details.challenges.length > 0 ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Challenges</h2>
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {details.challenges.map((challenge) => (
                  <li key={challenge}>• {challenge}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.roadmap && details.roadmap.length > 0 ? (
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Roadmap</h2>
              <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                {details.roadmap.map((step) => (
                  <li key={step}>• {step}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </SiteContainer>
  )
}