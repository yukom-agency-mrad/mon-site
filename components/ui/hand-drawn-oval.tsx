"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HandDrawnOvalProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

// Slightly irregular oval that wraps a word — designed in a 200x60 viewBox
// stretched non-uniformly to fit any word width. The path overshoots
// slightly at the start/end to give a hand-drawn "sketch" feel.
const OVAL_PATH =
  "M 192 18 C 204 38, 184 56, 100 55 C 16 55, -2 38, 6 22 C 14 6, 56 2, 110 4 C 164 6, 192 10, 192 16";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.4,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
      opacity: { duration: 0.3 },
    },
  },
};

export function HandDrawnOval({
  children,
  delay = 0,
  className,
}: HandDrawnOvalProps) {
  return (
    <span className={cn("relative inline-block px-3 py-1", className)}>
      <span className="relative z-10">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 inset-y-0 h-full w-full text-sunset"
      >
        <motion.path
          d={OVAL_PATH}
          fill="none"
          strokeWidth="2.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={draw}
          transition={{ delay }}
        />
      </svg>
    </span>
  );
}
