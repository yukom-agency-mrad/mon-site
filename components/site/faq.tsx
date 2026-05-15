import Image from "next/image";
import { Plus } from "lucide-react";

const ITEMS = [
  {
    question:
      "En quoi Yukom est différente des autres agences de communication à Metz ?",
    answer:
      "Yukom est une agence de communication à taille humaine, basée à Metz en Moselle. Ce qui nous différencie ? Une approche 360° portée par une seule experte, Maud Mrad, qui combine stratégie marketing, création graphique, gestion des réseaux sociaux et référencement naturel (SEO/GEO). Vous savez exactement avec qui vous travaillez à chaque étape de l'aventure.",
  },
  {
    question: "Quels services propose Yukom ?",
    answer:
      "Yukom vous accompagne sur quatre grands territoires : Stratégie marketing et communication, Création graphique (identité visuelle, supports print et digitaux), Réseaux sociaux (community management et création de contenu) et Sites web, SEO et GEO (création, refonte, référencement naturel et optimisation pour les intelligences artificielles génératives).",
  },
  {
    question: "Yukom accompagne-t-elle uniquement les entreprises de Metz ?",
    answer:
      "Yukom est basée à Metz mais accompagne aussi des entrepreneurs, associations et collectivités partout en France et en Europe, notamment au Luxembourg, en Suisse et en Belgique.",
  },
  {
    question: "Combien coûte une prestation chez Yukom ?",
    answer:
      "Le budget dépend de vos objectifs, de vos besoins et de l'envergure de l'expédition à mener. La première étape est toujours un rendez-vous découverte gratuit, pour faire le point ensemble afin de partir sur de bonnes bases.",
  },
  {
    question: "Comment faire appel à Yukom ?",
    answer:
      "Tout commence par une discussion. Vous pouvez nous contacter via le formulaire de notre site web ou au +33 7 83 87 02 95.",
  },
  {
    question:
      "Est-ce qu'une TPE ou une micro-entreprise peut faire appel à Yukom ?",
    answer:
      "Absolument. Yukom a été conçue pour et avec les entrepreneurs, les indépendants et les petites structures qui veulent une communication professionnelle sans se perdre dans des process complexes. Quelle que soit la taille de votre projet, il mérite d'être bien raconté.",
  },
  {
    question:
      "Combien de temps faut-il pour créer une identité visuelle ou un site web ?",
    answer:
      "Les délais varient selon la complexité du projet. En règle générale, comptez 2 à 4 semaines pour une identité visuelle, et 4 à 8 semaines pour un site web. Un calendrier précis est établi dès le démarrage du projet, pour que vous ne partiez jamais sans carte.",
  },
  {
    question:
      "Comment améliorer mon référencement naturel (SEO) et ma visibilité sur les IA (GEO) à Metz ?",
    answer:
      "Le SEO, c'est le balisage de votre territoire sur Google. Le GEO (Generative Engine Optimization) va plus loin : il s'agit d'optimiser vos contenus pour apparaître dans les réponses générées par les intelligences artificielles comme ChatGPT, Perplexity ou Google Gemini. Yukom travaille sur ces deux fronts pour que votre entreprise soit visible là où vos clients vous cherchent, aujourd'hui et demain.",
  },
  {
    question:
      "Puis-je confier uniquement la gestion de mes réseaux sociaux à Yukom ?",
    answer:
      "Oui, tout à fait. Vous pouvez faire appel à Yukom pour une prestation spécifique sans nécessairement engager un accompagnement global. On s'adapte à votre étape du voyage.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14 lg:gap-16">
          {/* Image — outdoor, gauche, sticky sur desktop */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/hero-ocean.jpg"
                  alt="Paysage outdoor — horizon océanique"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
                On éclaire votre route
              </p>
            </div>
          </div>

          {/* FAQ — droite */}
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-sunset">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Vos questions, <span className="text-sunset">balisées</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Tout ce qu'il faut savoir avant de prendre le départ avec Yukom.
            </p>

            <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
              {ITEMS.map((item, i) => (
                <li key={i}>
                  <details className="group/faq py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-medium text-foreground transition-colors hover:text-sunset sm:text-lg">
                      <span className="text-pretty">{item.question}</span>
                      <Plus
                        aria-hidden
                        className="mt-1 size-5 shrink-0 text-foreground/55 transition-transform duration-300 group-open/faq:rotate-45 group-open/faq:text-sunset"
                      />
                    </summary>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 text-pretty">
                      {item.answer}
                    </p>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
