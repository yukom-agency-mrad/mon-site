"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["créativité", "audace", "passion"] as const;
const INTERVAL_MS = 1000;

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
        <p className="max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-foreground text-balance sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          Votre entreprise a une histoire à raconter.{" "}
          <em className="italic text-foreground/85">
            Nous mettons notre{" "}
            <span
              aria-live="polite"
              className="relative inline-block align-baseline"
            >
              {/* invisible placeholder reserves the width of the longest word
                  so the line doesn't reflow as we cycle */}
              <span aria-hidden className="invisible whitespace-nowrap">
                créativité
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={WORDS[index]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="absolute inset-0 whitespace-nowrap text-sunset"
                >
                  {WORDS[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            sur sa route.
          </em>
        </p>
      </div>
    </section>
  );
}
