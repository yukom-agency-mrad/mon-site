import { Compass } from "lucide-react";

const TEXT = "Inventeurs d'aventures";
const REPEAT_PER_GROUP = 4;

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: REPEAT_PER_GROUP }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-10 sm:gap-14"
        >
          <span className="whitespace-nowrap font-display text-5xl font-medium italic tracking-[-0.03em] text-background sm:text-6xl md:text-7xl">
            {TEXT}
          </span>
          <Compass
            className="size-8 shrink-0 text-sunset sm:size-10"
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

export function MarqueeBanner() {
  return (
    <section
      aria-label="Inventeurs d'aventures"
      className="overflow-hidden bg-foreground py-10 sm:py-14"
    >
      <div className="flex w-max animate-marquee">
        <Group />
        <Group ariaHidden />
      </div>
    </section>
  );
}
