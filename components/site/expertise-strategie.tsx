import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        <div className="grid gap-12 md:grid-cols-12 md:gap-16 md:items-center">
          {/* Image (left) */}
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
              <Image
                src="/expertise-strategie.png"
                alt="Boussole — Yukom Stratégie"
                fill
                sizes="(min-width: 768px) 40vw, 80vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Text (right) */}
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
              <span className="text-sunset">01</span> · Expertise
            </p>

            <h2 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl">
              Stratégie
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              Avant de tracer la route, il faut une carte. On commence par
              comprendre votre marque, vos publics, vos enjeux — puis on
              dessine le cap. Diagnostic, positionnement, plan de
              communication&nbsp;: une boussole claire pour que chaque
              action serve votre direction.
            </p>

            <ul className="mt-10 space-y-3 border-t border-border/60 pt-8">
              {SUB_CATEGORIES.map((label) => (
                <li
                  key={label}
                  className="flex items-baseline gap-3 text-lg font-medium text-sunset sm:text-xl"
                >
                  <span aria-hidden className="text-foreground/30">
                    —
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-sunset"
              >
                Démarrer une stratégie
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
