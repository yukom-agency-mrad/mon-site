import { Award } from "lucide-react";

export function About() {
  return (
    <section
      id="a-propos"
      className="relative bg-foreground text-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-background/55">
              <span className="text-sunset">★</span> À propos
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              La mission <em className="italic text-sunset">Yukom</em>
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="font-display text-2xl leading-snug text-background sm:text-3xl">
              Insuffler un vent d'authenticité et de créativité dans vos
              projets d'entreprise.
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-background/80">
              <p>
                Yukom accompagne les entrepreneurs, les collectivités et les
                associations à Metz et en Moselle qui veulent une identité qui
                leur ressemble vraiment — pas une de plus, pas une de moins.
              </p>
              <p>
                Derrière l'agence, Maud Mrad — stratège en marketing et
                communication digitale, certifiée Google Coach. Inspirée par
                les montagnes et les océans, elle construit avec vous des
                marques qui ont du caractère et un cap clair.
              </p>
              <p>
                Entreprendre est une aventure audacieuse&nbsp;: elle mérite
                d'être mise en lumière comme telle.
              </p>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              <li className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-xs text-background/85">
                <Award className="size-3.5 text-sunset" />
                Google Coach certifiée
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-xs text-background/85">
                Basée à Metz · Moselle
              </li>
              <li className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-xs text-background/85">
                Marketing &amp; communication digitale
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
