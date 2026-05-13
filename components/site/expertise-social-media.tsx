import Image from "next/image";

const SUB_CATEGORIES = [
  "Stratégie éditoriale",
  "Social Media Management",
  "E-réputation",
];

export function ExpertiseSocialMedia() {
  return (
    <section
      id="social-media"
      className="sticky top-0 bg-[#FCFAF5]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 pt-0 pb-16 sm:px-8 sm:pb-24 md:pb-28">
        <div className="rounded-2xl border border-sunset bg-[#FCFAF5] p-6 sm:p-10 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14 md:items-stretch">
            {/* Image — left column */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:aspect-auto md:h-full">
                <Image
                  src="/expertise-social-media-bg.jpg"
                  alt="Vallée de montagne au crépuscule"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content — right column */}
            <div className="md:col-span-7">
              <div
                aria-hidden
                className="h-16 w-16 bg-sunset sm:h-20 sm:w-20"
                style={{
                  maskImage: "url(/expertise-social-media.png)",
                  WebkitMaskImage: "url(/expertise-social-media.png)",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />

              <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl">
                Social Media
              </h2>

              <ul className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                {SUB_CATEGORIES.map((label) => (
                  <li
                    key={label}
                    className="inline-flex items-center rounded-full border border-sunset/40 bg-sunset/5 px-4 py-2 text-sm font-medium text-sunset sm:text-base"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
                Ouvrez votre sac à dos pour faire découvrir votre univers
                sur les différentes plateformes. Stratégie éditoriale,
                animation des comptes, gestion de votre réputation&nbsp;:
                on raconte votre marque là où votre public vous attend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
