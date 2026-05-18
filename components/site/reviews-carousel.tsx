"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";
import type { GoogleReview } from "@/lib/google-places";
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

function Card({ review }: { review: GoogleReview }) {
  return (
    <li className="group relative flex w-[300px] shrink-0 flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-sunset/40 sm:w-[340px]">
      <Quote className="size-6 text-sunset/70" />
      <p className="text-base leading-relaxed text-foreground/85 text-pretty">
        {review.text.length > 320
          ? `${review.text.slice(0, 317).trimEnd()}…`
          : review.text}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-5">
        <div>
          <p className="text-sm font-medium text-foreground">
            {review.authorName}
          </p>
          {review.relativeTime ? (
            <p className="mt-0.5 text-xs text-foreground/55">
              {review.relativeTime}
            </p>
          ) : null}
        </div>
        <Stars value={review.rating} />
      </div>
    </li>
  );
}

const FADE_MASK =
  "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)";

export function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const [paused, setPaused] = useState(false);

  if (reviews.length === 0) return null;

  return (
    <div
      className="mt-12 sm:mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="overflow-hidden"
        style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
      >
        <ul
          className="flex w-max gap-6 animate-reviews-marquee"
          style={paused ? { animationPlayState: "paused" } : undefined}
          aria-label="Avis Google clients"
        >
          {reviews.map((review, i) => (
            <Card key={`a-${i}`} review={review} />
          ))}
          {reviews.map((review, i) => (
            <Card key={`b-${i}`} review={review} />
          ))}
        </ul>
      </div>
    </div>
  );
}
