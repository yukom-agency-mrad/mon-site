import Image from "next/image";
import { Award } from "lucide-react";
import { Signature } from "./signature";

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

          {/* Center — portrait + signature */}
          <div className="order-first md:order-none">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/maud-portrait.jpg"
                  alt="Maud Mrad, fondatrice de Yukom"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Signature décalée vers la gauche : seul le bout de "Mrad" dépasse sur la photo */}
              <Signature className="absolute bottom-6 -left-8 text-3xl font-light text-foreground sm:bottom-8 sm:-left-16 sm:text-4xl md:-left-24 md:text-5xl" />
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
              <li className="inline-flex items-center gap-1.5 rounded-full border border-sunset/40 bg-sunset/5 px-3 py-1 text-xs font-medium text-sunset">
                <Award className="size-3.5" />
                Google Coach Certifiée
              </li>
              <li className="inline-flex items-center rounded-full border border-sunset/40 bg-sunset/5 px-3 py-1 text-xs font-medium text-sunset">
                Basée à Metz et partout ailleurs
              </li>
              <li className="inline-flex items-center rounded-full border border-sunset/40 bg-sunset/5 px-3 py-1 text-xs font-medium text-sunset">
                Marketing &amp; communication digitale
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
