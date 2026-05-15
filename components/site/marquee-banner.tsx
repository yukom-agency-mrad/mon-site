import { Compass } from "lucide-react";

const TEXT = "Inventeurs d'aventures";
const REPEAT_PER_GROUP = 6;

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: REPEAT_PER_GROUP }).map((_, i) => (
        <div key={i} className="flex items-center gap-6">
          <span className="whitespace-nowrap text-[20px] font-medium italic tracking-[-0.01em] text-foreground">
            {TEXT}
          </span>
          <Compass
            className="size-4 shrink-0 text-sunset"
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
      className="bg-[#FCFAF5] py-6 sm:py-8"
    >
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
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
