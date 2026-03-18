import { notFound } from "next/navigation"

import { projects } from "@/data/projects"
import { projectDetails } from "@/data/project-details"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ProjectPageContent } from "@/components/sections/project-page-content"

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

  const relatedProjects = projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2)

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <ProjectPageContent project={project} details={details} relatedProjects={relatedProjects} />
      </main>
      <SiteFooter />
    </>
  )
}
