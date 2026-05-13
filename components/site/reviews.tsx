import { Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-places";
import { ReviewsCarousel } from "./reviews-carousel";
import { cn } from "@/lib/utils";

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label={`Note ${value} sur 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < Math.round(value)
              ? "fill-sunset text-sunset"
              : "text-foreground/20",
          )}
        />
      ))}
    </div>
  );
}

const MAX_REVIEWS = 8;

export async function Reviews() {
  const { reviews, rating, userRatingCount } = await getGoogleReviews();
  const curated = reviews.slice(0, MAX_REVIEWS);

  return (
    <section id="avis" className="bg-background py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
              <span className="text-sunset">★</span> Carnet de bord
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Ils ont <em className="italic">embarqué</em> avec nous.
            </h2>
          </div>

          {rating && userRatingCount ? (
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
              <div className="text-right">
                <p className="font-display text-3xl leading-none text-foreground">
                  {rating.toFixed(1)}
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  sur {userRatingCount} avis
                </p>
              </div>
              <Stars value={rating} />
            </div>
          ) : null}
        </div>

        <ReviewsCarousel reviews={curated} />

        <p className="mt-10 text-sm text-foreground/55">
          Avis publiés sur notre fiche d'établissement Google.
        </p>
      </div>
    </section>
  );
}
