import { Compass, Route, Backpack, Tent, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metaphor: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Stratégie",
    metaphor: "Trouver le nord avant de marcher.",
    description:
      "On ne se lance pas sans carte. Diagnostic, positionnement, plan de communication&nbsp;: on dessine le chemin pour que chaque action serve votre cap.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Graphisme",
    metaphor: "Une identité qui se reconnaît à des kilomètres.",
    description:
      "Logo, charte, supports print&nbsp;: on prend la route de la création pour donner à votre marque une image inspirante, distinctive et qui dure.",
    icon: Route,
  },
  {
    number: "03",
    title: "Réseaux sociaux",
    metaphor: "Ouvrez le sac, partagez l'expédition.",
    description:
      "Stratégie de contenu, ligne éditoriale, animation des comptes&nbsp;: on raconte votre univers sur les bonnes plateformes, pour les bonnes personnes.",
    icon: Backpack,
  },
  {
    number: "04",
    title: "Sites web",
    metaphor: "Sortez votre site du mode bivouac.",
    description:
      "Refonte, création, SEO&nbsp;: on construit un site qui héberge vraiment votre marque — rapide, lisible, et pensé pour vous amener des contacts.",
    icon: Tent,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-background py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
              <span className="text-sunset">★</span> Notre équipement
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Quatre services, <em className="italic">une seule boussole</em> —
              la vôtre.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-foreground/70">
            Selon où vous en êtes — première carte ou nouvelle expédition — on
            assemble le bon kit. Toujours conçu sur mesure, jamais générique.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <li
                key={service.number}
                className="group relative flex flex-col gap-6 bg-background p-8 transition-colors duration-300 hover:bg-muted sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl italic text-foreground/35">
                    {service.number}
                  </span>
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors group-hover:border-sunset group-hover:bg-sunset group-hover:text-background">
                    <Icon className="size-4" />
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base italic text-sunset/90">
                    {service.metaphor}
                  </p>
                </div>

                <p
                  className="text-base leading-relaxed text-foreground/75"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                <ArrowUpRight
                  aria-hidden
                  className="absolute right-8 bottom-8 size-5 text-foreground/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sunset"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
