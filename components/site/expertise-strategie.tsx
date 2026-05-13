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
        {/* Compass — recoloured to brand turquoise via a CSS mask on the
            PNG's alpha channel. The image acts as the silhouette, the
            background-color fills it. */}
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
            maskPosition: "left center",
            WebkitMaskPosition: "left center",
          }}
        />

        <h2 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl">
          Stratégie
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
          Avant de tracer la route, il faut une carte. On commence par
          comprendre votre marque, vos publics, vos enjeux&nbsp;: puis on
          dessine le cap.
        </p>
      </div>
    </section>
  );
}
