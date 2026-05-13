"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SignatureProps = {
  className?: string;
};

export function Signature({ className }: SignatureProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 -10% 0 0)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 2, ease: [0.45, 0, 0.1, 1] }}
      className={cn(
        "select-none leading-none [font-family:var(--font-caveat)]",
        className,
      )}
      aria-label="Maud Mrad"
    >
      Maud Mrad
    </motion.div>
  );
}
