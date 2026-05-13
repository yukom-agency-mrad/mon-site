import Image from "next/image";

export function About() {
  return (
    <section id="a-propos" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Left — accroche, alignée en haut */}
          <p className="text-xl font-medium leading-[1.2] tracking-[-0.02em] text-foreground text-balance sm:text-2xl md:order-first md:mt-5 md:self-start md:text-[1.65rem]">
            Je collabore avec les entreprises et les organisations qui aiment
            sortir des sentiers battus.
          </p>

          {/* Center — portrait */}
          <div className="order-first md:order-none">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl">
              <Image
                src="/maud-portrait.jpg"
                alt="Maud Mrad, fondatrice de Yukom"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — bio + tags, alignée en bas */}
          <div className="md:self-end">
            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
              Derrière Yukom, se cache une passion pour l'aventure et le
              design. Experte en marketing digital et certifiée coach Google
              Ateliers Numériques, je construis avec vous une marque qui a
              du caractère et un cap clair.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <li className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/75">
                Google Coach Certifiée
              </li>
              <li className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/75">
                Basée à Metz et partout ailleurs
              </li>
              <li className="inline-flex items-center rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/75">
                Marketing &amp; communication digitale
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
