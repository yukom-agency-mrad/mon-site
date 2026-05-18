"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    let frame = 0;
    let nextX = 50;
    let nextY = 50;

    const apply = () => {
      el.style.setProperty("--spot-x", `${nextX}%`);
      el.style.setProperty("--spot-y", `${nextY}%`);
      frame = 0;
    };

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      nextX = ((e.clientX - rect.left) / rect.width) * 100;
      nextY = ((e.clientY - rect.top) / rect.height) * 100;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      nextX = 50;
      nextY = 50;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ "--spot-x": "50%", "--spot-y": "50%" } as CSSProperties}
      className="group/hero relative isolate overflow-hidden min-h-[100svh] flex items-end pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <Image
        src="/hero-mountain.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden
      />

      <Image
        src="/yukom-logo-white.png"
        alt=""
        width={1759}
        height={483}
        priority
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[34%] w-[54%] max-w-xl -translate-x-1/2 opacity-65 mix-blend-overlay sm:top-[30%] sm:w-[44%] md:top-[26%] md:max-w-2xl"
        style={{
          zIndex: -15,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 22%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 22%, black 70%, transparent 100%)",
        }}
      />

      {/* Vertical split overlay: light top, dark bottom.
          Spotlight cuts a transparent hole at the cursor position. */}
      {/* Base overlay : light top, dark bottom. Carved by the spotlight mask. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(250,250,247,0.55) 0%, rgba(250,250,247,0.25) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
          maskImage:
            "radial-gradient(circle 180px at var(--spot-x) var(--spot-y), transparent 0%, transparent 35%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(circle 180px at var(--spot-x) var(--spot-y), transparent 0%, transparent 35%, black 75%)",
        }}
      />

      {/* Subtle warm highlight ring at the spotlight edge for a "torch" feel. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle 180px at var(--spot-x) var(--spot-y), rgba(255,225,180,0.18) 0%, rgba(255,225,180,0.10) 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-background/75 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]"
        >
          <Compass className="size-4 text-sunset" aria-hidden />
          <span>Agence de marketing et communication · Metz · Moselle</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-background px-6 text-base text-foreground transition-colors hover:bg-sunset hover:text-background [a]:hover:bg-sunset [a]:hover:text-background"
          >
            <Link href="/contact">
              Démarrer votre aventure
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="link"
            size="lg"
            className="h-12 px-2 text-base text-background underline-offset-4 hover:text-sunset"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("strategie")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Découvrir les services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
