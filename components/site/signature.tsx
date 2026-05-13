"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SignatureProps = {
  className?: string;
};

const TEXT = "Maud Mrad";

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 10, rotate: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.35, ease: [0.2, 0.65, 0.3, 0.95] },
  },
};

export function Signature({ className }: SignatureProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className={cn(
        "inline-flex select-none whitespace-nowrap leading-none [font-family:var(--font-signature)]",
        className,
      )}
      aria-label={TEXT}
    >
      {TEXT.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letter}
          aria-hidden
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
