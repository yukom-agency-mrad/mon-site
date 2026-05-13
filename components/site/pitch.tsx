"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["panache", "audace", "passion"] as const;
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
        <p className="max-w-4xl text-[40px] font-medium leading-[1.1] tracking-[-0.035em] text-foreground text-balance sm:text-[48px] md:text-[56px] lg:text-[64px]">
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
      </div>
    </section>
  );
}
