import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
  "aria-label"?: string
}

export function Section({ id, children, className, "aria-label": ariaLabel }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("py-20 sm:py-30 scroll-mt-20", className)}>
      {children}
    </section>
  )
}