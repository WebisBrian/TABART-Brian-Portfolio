  import { cn } from "@/lib/utils";

  type SectionHeadingProps = {
    eyebrow?: string;
    title: React.ReactNode;
    description?: string;
    as?: "h1" | "h2" | "h3";
    className?: string;
    titleClassName?: string;
  };

  export function SectionHeading({
    eyebrow,
    title,
    description,
    as: Tag = "h2",
    className,
    titleClassName,
  }: SectionHeadingProps) {
    return (
      <div className={cn("space-y-3", className)}>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <Tag className={cn("text-3xl font-bold tracking-tight sm:text-4xl", titleClassName)}>{title}</Tag>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
    );
  }