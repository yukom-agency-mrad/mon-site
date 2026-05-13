import Image from "next/image";

const SUB_CATEGORIES = [
  "Stratégie de communication",
  "Branding",
  "Formations marketing digital",
  "Storytelling",
  "Plateforme de marque",
];

export function ExpertiseStrategie() {
  return (
    <section id="strategie" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          {/* Image — mountain photo, left column */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/hero-mountain.jpg"
                alt="Sommets alpins au coucher du soleil"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Content — right column, right-aligned */}
          <div className="md:col-span-7 md:text-right">
            <div className="flex md:justify-end">
              <div
                aria-hidden
                className="h-16 w-16 bg-sunset sm:h-20 sm:w-20"
                style={{
                  maskImage: "url(/expertise-strategie.png)",
                  WebkitMaskImage: "url(/expertise-strategie.png)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>

            <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl">
              Stratégie
            </h2>

            <ul className="mt-8 flex flex-wrap gap-2.5 md:justify-end sm:gap-3">
              {SUB_CATEGORIES.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center rounded-full border border-sunset/40 bg-sunset/5 px-4 py-2 text-sm font-medium text-sunset sm:text-base"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/75 md:ml-auto sm:text-lg">
              Avant de tracer la route, il faut une carte. On commence par
              comprendre votre marque, vos publics, vos enjeux&nbsp;: puis
              on dessine le cap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
