import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="bg-background pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] p-10 text-background sm:p-16">
          {/* Photo de fond — mêmes Alpes que le hero */}
          <Image
            src="/hero-mountain.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="-z-30 object-cover"
            aria-hidden
          />

          {/* Overlay sombre pour la lisibilité — dégradé pour préserver
              un peu de la photo en haut à droite */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 bg-black/65"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-black/55 via-black/30 to-transparent"
          />

          {/* Halo turquoise subtil pour la touche brand */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-[28rem] rounded-full bg-sunset/15 blur-3xl"
          />

          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-background/75 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
            <Compass className="size-4 text-sunset" />
            <span>Prêt·e pour l'aventure</span>
          </div>

          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-background sm:text-5xl md:text-6xl [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
            Curieux·se de voir{" "}
            <em className="italic text-sunset">où l'aventure</em>{" "}
            peut nous mener&nbsp;?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            Donnons vie à quelque chose d'extraordinaire.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-sunset px-6 text-base text-background transition-colors hover:bg-background hover:text-foreground [a]:hover:bg-background [a]:hover:text-foreground"
            >
              <Link href="/contact">
                Démarrer la conversation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-background/85 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
              <a
                href="tel:+33783870295"
                className="inline-flex items-center gap-2 hover:text-sunset"
              >
                <Phone className="size-4" />
                07 83 87 02 95
              </a>
              <a
                href="mailto:maud_mrad@hotmail.fr"
                className="inline-flex items-center gap-2 hover:text-sunset"
              >
                <Mail className="size-4" />
                maud_mrad@hotmail.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
