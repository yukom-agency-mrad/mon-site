import Image from "next/image";
import { Award } from "lucide-react";
import { LinkedinIcon } from "./icons";

export function About() {
  return (
    <section id="a-propos" className="bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Left — accroche, alignée en haut */}
          <p className="text-xl font-medium leading-[1.2] tracking-[-0.02em] text-foreground text-balance sm:text-2xl md:order-first md:mt-5 md:self-start md:text-[1.65rem]">
            Je collabore avec les entreprises et les organisations qui aiment
            sortir des sentiers battus.
          </p>

          {/* Center — portrait + label */}
          <div className="order-first md:order-none">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/maud-portrait.jpg"
                  alt="Maud Mrad, fondatrice de Yukom"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2.5 sm:mt-4">
                <a
                  href="https://www.linkedin.com/in/maud-mrad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Maud Mrad"
                  className="inline-flex size-7 items-center justify-center rounded-full bg-sunset text-background transition-colors hover:bg-foreground"
                >
                  <LinkedinIcon className="size-3.5" />
                </a>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/80 sm:text-xs">
                  Maud Mrad · Fondatrice Yukom
                </p>
              </div>
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
