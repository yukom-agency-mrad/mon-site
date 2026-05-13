"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HandDrawnOvalProps = {
  children: React.ReactNode;
  delay?: number;
  variant?: number;
  className?: string;
};

// Four clearly distinct hand-drawn loops. Each viewBox is 200×60, stretched
// non-uniformly via preserveAspectRatio="none". Stroke width is kept
// pixel-perfect via vector-effect="non-scaling-stroke".
const OVAL_PATHS = [
  // 0 — Standard smooth oval, gap top-right (the "loose end")
  "M 192 14 C 218 36, 188 60, 100 58 C 12 60, -8 36, 6 18 C 18 -2, 60 -2, 112 0 C 162 2, 196 6, 198 14",
  // 1 — Inverse start (top-left), tilted slightly downward
  "M 8 18 C -10 38, 14 60, 100 58 C 188 60, 212 38, 196 18 C 184 2, 140 -2, 100 0 C 60 2, 18 4, 6 22",
  // 2 — Rounded-rectangle vibe (sharper corners, flatter top/bottom)
  "M 188 8 C 208 12, 204 30, 200 42 C 196 54, 172 60, 100 60 C 28 60, 0 50, 0 30 C 0 12, 22 4, 100 2 C 178 0, 192 4, 190 14",
  // 3 — Wavy/irregular, bumpy edge for sketchier feel
  "M 190 16 C 210 22, 196 44, 188 50 C 174 60, 130 60, 100 58 C 60 56, 20 60, 6 44 C -6 30, 8 12, 30 6 C 70 -4, 130 -2, 170 4 C 188 8, 194 8, 192 14",
];

const STROKE_WIDTHS = ["1.4", "1.6", "1.2", "1.5"] as const;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 0.85,
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
  const v = variant % OVAL_PATHS.length;
  const path = OVAL_PATHS[v];
  const stroke = STROKE_WIDTHS[v];
  return (
    <span
      className={cn(
        "relative inline-block px-4 py-1.5 sm:px-5 sm:py-2",
        className,
      )}
    >
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
          strokeWidth={stroke}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
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
