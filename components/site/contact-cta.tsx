import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground p-10 text-background sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-24 -z-10 size-[28rem] rounded-full bg-sunset/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-24 -z-10 size-[28rem] rounded-full bg-sunset/15 blur-3xl"
          />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-background/60">
            <span className="text-sunset">★</span> Prêt·e à embarquer ?
          </p>

          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight text-background sm:text-5xl md:text-6xl">
            On prend la <em className="italic text-sunset">carte</em>, vous
            choisissez l'horizon.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/75 sm:text-lg">
            Un projet à lancer, une marque à repositionner, un site à refaire&nbsp;?
            Racontez-nous votre aventure&nbsp;: on revient vers vous sous 48&nbsp;h.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-sunset px-6 text-base text-background hover:bg-sunset/90"
            >
              <Link href="/contact">
                Démarrer la conversation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-background/75">
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
