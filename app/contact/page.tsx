import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Racontez-nous votre histoire. Quelques lignes suffisent, on vous recontacte dans la foulée.",
};

export default function ContactPage() {
  return (
    <section className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
            <span className="text-sunset">★</span> Démarrer une aventure
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl">
            Racontez-nous votre <em className="italic text-sunset">histoire</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75">
            Quelques lignes suffisent. On vous recontacte dans la foulée pour
            en discuter autour d'un café.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <aside className="md:col-span-5">
            <div className="space-y-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                  Contact direct
                </p>
                <ul className="mt-5 space-y-4 text-base">
                  <li>
                    <a
                      href="mailto:maud_mrad@hotmail.fr"
                      className="group inline-flex items-center gap-3 text-foreground hover:text-sunset"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-muted text-foreground/70 transition-colors group-hover:bg-sunset/10 group-hover:text-sunset">
                        <Mail className="size-4" />
                      </span>
                      maud_mrad@hotmail.fr
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+33783870295"
                      className="group inline-flex items-center gap-3 text-foreground hover:text-sunset"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-full bg-muted text-foreground/70 transition-colors group-hover:bg-sunset/10 group-hover:text-sunset">
                        <Phone className="size-4" />
                      </span>
                      07 83 87 02 95
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                  Coordonnées
                </p>
                <ul className="mt-5 space-y-4 text-sm text-foreground/75">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sunset" />
                    <span>Basée à Metz et partout ailleurs</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
