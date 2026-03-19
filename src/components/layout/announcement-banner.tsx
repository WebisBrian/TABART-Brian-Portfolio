export function AnnouncementBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 text-center text-sm">
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-foreground/80">
          Disponible — Recherche une alternance développeur Java
        </span>
        <a
          href="#contact"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Me contacter
        </a>
      </span>
    </div>
  );
}
