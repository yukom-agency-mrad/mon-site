"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HandDrawnOval } from "@/components/ui/hand-drawn-oval";

const WORDS = ["créativité", "audace", "passion"] as const;
const INTERVAL_MS = 1000;

const EXPERTISES = [
  "Stratégie",
  "Studio Créatif",
  "Social Media",
  "Web",
] as const;

export function Pitch() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 sm:py-16 md:py-20">
        <p className="max-w-4xl text-[42px] font-medium leading-[1.1] tracking-[-0.035em] text-foreground text-balance">
          Votre entreprise a une histoire à raconter.
          <em className="mt-2 block italic text-foreground sm:mt-3">
            Nous mettons notre{" "}
            <motion.span
              layout
              aria-live="polite"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="inline-block align-baseline text-sunset"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={WORDS[index]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="inline-block whitespace-nowrap"
                >
                  {WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </motion.span>{" "}
            sur sa route.
          </em>
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-5 text-lg font-medium text-foreground sm:mt-16 sm:gap-x-10 sm:text-xl md:text-2xl">
          {EXPERTISES.map((label, i) => (
            <HandDrawnOval key={label} delay={0.2 + i * 0.25}>
              {label}
            </HandDrawnOval>
          ))}
        </div>
      </div>
    </section>
  );
}
