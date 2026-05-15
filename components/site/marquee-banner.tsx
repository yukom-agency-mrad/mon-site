import { Compass } from "lucide-react";

const TEXT = "Inventeurs d'aventures";
const REPEAT_PER_GROUP = 6;

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: REPEAT_PER_GROUP }).map((_, i) => (
        <div key={i} className="flex items-center gap-8">
          <span className="whitespace-nowrap text-[30px] font-medium italic tracking-[-0.02em] text-foreground">
            {TEXT}
          </span>
          <Compass
            className="size-5 shrink-0 text-sunset"
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
      className="bg-[#FCFAF5] py-8 sm:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee">
            <Group />
            <Group ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
