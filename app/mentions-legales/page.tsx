import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Yukom — éditeur, hébergeur, propriété intellectuelle, données personnelles.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-background pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
          <span className="text-sunset">★</span> Informations légales
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl">
          Mentions <em className="italic text-sunset">légales</em>.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-foreground/70">
          Conformément aux dispositions des articles 6-III et 19 de la loi
          n°&nbsp;2004-575 du 21 juin 2004 pour la Confiance dans l'économie
          numérique, voici les informations légales du site Yukom.
        </p>

        <div className="mt-16 space-y-12 text-base leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Éditeur du site
            </h2>
            <ul className="mt-4 space-y-1.5 text-foreground/80">
              <li>
                <strong className="font-medium text-foreground">Raison sociale&nbsp;:</strong>{" "}
                Yukom
              </li>
              <li>
                <strong className="font-medium text-foreground">Forme juridique&nbsp;:</strong>{" "}
                Entreprise individuelle
              </li>
              <li>
                <strong className="font-medium text-foreground">SIRET&nbsp;:</strong>{" "}
                977 918 390 000 13
              </li>
              <li>
                <strong className="font-medium text-foreground">Adresse&nbsp;:</strong>{" "}
                Metz, Moselle (57)
              </li>
              <li>
                <strong className="font-medium text-foreground">Email&nbsp;:</strong>{" "}
                <a
                  href="mailto:maud_mrad@hotmail.fr"
                  className="text-sunset hover:underline"
                >
                  maud_mrad@hotmail.fr
                </a>
              </li>
              <li>
                <strong className="font-medium text-foreground">Téléphone&nbsp;:</strong>{" "}
                <a
                  href="tel:+33783870295"
                  className="text-sunset hover:underline"
                >
                  07 83 87 02 95
                </a>
              </li>
              <li>
                <strong className="font-medium text-foreground">Directrice de publication&nbsp;:</strong>{" "}
                Maud Mrad
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Hébergement
            </h2>
            <p className="mt-4 text-foreground/80">
              Le site est hébergé par&nbsp;:
            </p>
            <ul className="mt-2 space-y-1.5 text-foreground/80">
              <li>
                <strong className="font-medium text-foreground">Vercel Inc.</strong>
              </li>
              <li>340 S Lemon Ave #4133 — Walnut, CA 91789, USA</li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sunset hover:underline"
                >
                  https://vercel.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Propriété intellectuelle
            </h2>
            <p className="mt-4 text-foreground/80">
              L'ensemble du contenu de ce site (textes, images, vidéos,
              graphismes, logo, icônes, ainsi que leur mise en forme) est la
              propriété exclusive de Yukom, à l'exception des marques, logos
              ou contenus appartenant à d'autres sociétés partenaires ou
              clientes mentionnées.
            </p>
            <p className="mt-3 text-foreground/80">
              Toute reproduction, distribution, modification, adaptation,
              retransmission ou publication, même partielle, de ces différents
              éléments est strictement interdite sans accord express écrit de
              Yukom.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Données personnelles
            </h2>
            <p className="mt-4 text-foreground/80">
              Les informations collectées via le formulaire de contact (nom,
              email, téléphone, message) sont destinées uniquement à Yukom
              pour répondre à votre demande. Elles ne sont en aucun cas
              transmises à des tiers à des fins commerciales.
            </p>
            <p className="mt-3 text-foreground/80">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et à la loi « Informatique et Libertés », vous disposez
              d'un droit d'accès, de rectification, de suppression et
              d'opposition aux données vous concernant. Pour exercer ce
              droit, contactez-nous à{" "}
              <a
                href="mailto:maud_mrad@hotmail.fr"
                className="text-sunset hover:underline"
              >
                maud_mrad@hotmail.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Cookies
            </h2>
            <p className="mt-4 text-foreground/80">
              Ce site ne dépose aucun cookie de suivi publicitaire. Seuls les
              cookies techniques strictement nécessaires au bon fonctionnement
              du site peuvent être utilisés.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl">
              Crédits
            </h2>
            <p className="mt-4 text-foreground/80">
              Conception, design et développement&nbsp;: Yukom.
              <br />
              Photographies&nbsp;: contenus sous licence ou créés par Yukom.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
