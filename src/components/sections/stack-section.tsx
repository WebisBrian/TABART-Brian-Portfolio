import Image from "next/image"

import { technologies } from "@/data/technologies"
import { Marquee } from "@/components/ui/marquee"

import { Separator } from "@/components/ui/separator"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { SiteContainer } from "@/components/layout/site-container"

const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2))
const secondRow = technologies.slice(Math.ceil(technologies.length / 2))

type TechCardProps = {
  name: string
  icon: string
}

function TechCard({ name, icon }: TechCardProps) {
  return (
    <figure className="flex w-28 shrink-0 cursor-pointer flex-col items-center justify-center gap-3 px-4 py-4 text-center transition-transform duration-200 hover:scale-105 sm:w-32 md:w-36">
      <Image
        src={icon}
        alt={`${name} logo`}
        width={64}
        height={64}
        className="h-14 w-14 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24 "
      />

      <figcaption className="text-sm font-medium text-foreground/90 sm:text-base">
        {name}
      </figcaption>
    </figure>
  )
}

export function StackSection() {
  return (
    <>
      <Separator />

      <Section id="stack" className="py-20">
        <SiteContainer>
          <SectionHeading
            eyebrow="Stack"
            title="Technologies I use"
            description="A selection of tools and technologies I use regularly in my projects."
          />

          <div className="relative mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:28s]">
              {firstRow.map((tech) => (
                <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="mt-6 [--duration:32s]">
              {secondRow.map((tech) => (
                <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background sm:w-28 md:w-36" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background sm:w-28 md:w-36" />
          </div>
        </SiteContainer>
      </Section>
    </>
  )
}