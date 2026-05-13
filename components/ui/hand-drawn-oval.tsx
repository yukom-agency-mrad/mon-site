"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HandDrawnOvalProps = {
  children: React.ReactNode;
  delay?: number;
  variant?: number;
  className?: string;
};

// Four hand-drawn oval variations, each with its own quirks (start point,
// overshoot, curvature). All designed in a 200×60 viewBox stretched
// non-uniformly via preserveAspectRatio="none" to wrap any word width.
const OVAL_PATHS = [
  // Variant 0 — Standard with a slight gap at the start/end
  "M 192 18 C 204 38, 184 56, 100 55 C 16 55, -2 38, 6 22 C 14 6, 56 2, 110 4 C 164 6, 192 10, 192 16",
  // Variant 1 — Squashed wider, overshoot at the bottom
  "M 198 22 C 204 44, 180 58, 100 57 C 18 56, -4 40, 4 24 C 10 8, 60 1, 112 3 C 162 5, 196 9, 200 20",
  // Variant 2 — Slight upward tilt + sharper top curve
  "M 188 12 C 208 30, 196 58, 100 54 C 10 56, -2 38, 8 20 C 18 6, 52 2, 110 4 C 168 6, 198 14, 194 26",
  // Variant 3 — Rounder, more circular, smaller overshoot
  "M 190 16 C 200 34, 188 54, 98 53 C 14 54, 0 34, 6 18 C 14 4, 54 2, 106 3 C 158 4, 192 10, 190 20",
];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
      },
      opacity: { duration: 0.2 },
    },
  },
};

export function HandDrawnOval({
  children,
  delay = 0,
  variant = 0,
  className,
}: HandDrawnOvalProps) {
  const path = OVAL_PATHS[variant % OVAL_PATHS.length];
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
          d={path}
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
