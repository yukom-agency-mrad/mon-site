"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SignatureProps = {
  className?: string;
};

const TEXT = "Maud Mrad";

export function Signature({ className }: SignatureProps) {
  return (
    <motion.span
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 -2% 0 0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 2.2,
        ease: [0.4, 0.05, 0.2, 1],
        delay: 0.25,
      }}
      style={{ clipPath: "inset(0 100% 0 0)" }}
      className={cn(
        "inline-block select-none whitespace-nowrap leading-none [font-family:var(--font-signature)]",
        className,
      )}
      aria-label={TEXT}
    >
      {TEXT}
    </motion.span>
  );
}
