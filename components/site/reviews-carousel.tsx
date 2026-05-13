"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import type { GoogleReview } from "@/lib/google-places";
import { cn } from "@/lib/utils";

const PER_PAGE = 3;

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

export function ReviewsCarousel({ reviews }: { reviews: GoogleReview[] }) {
  const totalPages = Math.max(1, Math.ceil(reviews.length / PER_PAGE));
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const visible = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const go = (delta: 1 | -1) => {
    setDirection(delta);
    setPage((p) => (p + delta + totalPages) % totalPages);
  };

  return (
    <div className="mt-12 sm:mt-16">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.ul
            key={page}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-3"
          >
            {visible.map((review, i) => (
              <li
                key={`${review.authorName}-${page}-${i}`}
                className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 transition-colors duration-300 hover:border-sunset/40"
              >
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
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > page ? 1 : -1);
                  setPage(i);
                }}
                aria-label={`Aller à la page ${i + 1} sur ${totalPages}`}
                aria-current={i === page ? "true" : undefined}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === page
                    ? "w-8 bg-sunset"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Avis précédents"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-sunset hover:text-sunset"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Avis suivants"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-sunset hover:text-sunset"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
