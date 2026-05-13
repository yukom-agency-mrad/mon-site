import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-[#FCFAF5]">
      <div className="mx-auto w-full max-w-7xl px-6 py-28 sm:px-8 sm:py-36 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Et si on créait votre prochaine
            <em className="italic text-sunset"> aventure</em> ensemble&nbsp;?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            Donnons vie à quelque chose qui marque.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all hover:bg-foreground/90 hover:gap-4"
            >
              Démarrer la conversation
              <span
                aria-hidden
                className="inline-flex size-8 items-center justify-center rounded-full bg-sunset text-background transition-transform group-hover:rotate-45"
              >
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
