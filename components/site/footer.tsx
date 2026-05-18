import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div>
            <Logo className="text-3xl text-background" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              L'agence de com' pour les aventures de votre entreprise. Basée à Metz, Moselle.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-background/50">
              Boussole
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/#services" className="text-background/85 transition-colors hover:text-sunset">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#a-propos" className="text-background/85 transition-colors hover:text-sunset">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#avis" className="text-background/85 transition-colors hover:text-sunset">
                  Avis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/85 transition-colors hover:text-sunset">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-background/50">
              Parlons de votre projet
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:maud_mrad@hotmail.fr"
                  className="inline-flex items-center gap-2 text-background/85 transition-colors hover:text-sunset"
                >
                  <Mail className="size-4" />
                  maud_mrad@hotmail.fr
                </a>
              </li>
              <li>
                <a
                  href="tel:+33783870295"
                  className="inline-flex items-center gap-2 text-background/85 transition-colors hover:text-sunset"
                >
                  <Phone className="size-4" />
                  07 83 87 02 95
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-background/10 pt-8 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yukom — Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>SIRET 97791839000013 · Metz, Moselle</p>
            <Link
              href="/mentions-legales"
              className="text-background/70 transition-colors hover:text-sunset"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
