import Image from "next/image";
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

const MAX_REVIEWS = 9;

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
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-3">
              <Image
                src="/google-logo.webp"
                alt="Google"
                width={36}
                height={36}
                className="size-8 shrink-0 sm:size-9"
              />
              <div className="flex flex-col">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/55">
                  Avis Google
                </p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="text-xl font-semibold leading-none text-foreground">
                    {rating.toFixed(1)}
                  </span>
                  <Stars value={rating} />
                  <span className="text-xs text-foreground/60">
                    · {userRatingCount} avis
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <ReviewsCarousel reviews={curated} />

        <p className="mt-10 flex items-center gap-2 text-sm text-foreground/55">
          <Image
            src="/google-logo.webp"
            alt=""
            aria-hidden
            width={16}
            height={16}
            className="size-4"
          />
          Avis publiés sur notre fiche d'établissement Google.
        </p>
      </div>
    </section>
  );
}
