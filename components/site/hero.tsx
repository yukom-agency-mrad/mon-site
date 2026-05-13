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

    // Skip spotlight effect on coarse pointer devices (touch).
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
      className="group/hero relative isolate overflow-hidden min-h-[100svh] flex items-center pt-32 pb-24 sm:pt-40 sm:pb-32"
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
        className="pointer-events-none absolute left-1/2 top-[16%] w-[60%] max-w-md -translate-x-1/2 opacity-70 mix-blend-overlay sm:w-[44%] sm:max-w-xl md:top-[14%] md:max-w-2xl"
        style={{ zIndex: -15 }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(circle 230px at var(--spot-x) var(--spot-y), rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-background/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]"
        >
          <Compass className="size-4 text-sunset" />
          <span>Agence de communication · Metz · Moselle</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-background text-balance sm:text-6xl md:text-7xl [text-shadow:0_2px_24px_rgba(0,0,0,0.4)]"
        >
          Inventeurs <em className="italic text-sunset">d'aventures</em> pour
          les marques qui n'ont pas froid aux idées.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-background/90 sm:text-xl [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
        >
          Yukom est l'agence de communication qui transforme vos projets
          d'entreprise en récits qui marquent. Stratégie, identité visuelle,
          réseaux sociaux et sites web&nbsp;: on prépare le sac, on trace la
          route, vous racontez votre histoire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button
            asChild
            size="lg"
            className="group h-12 rounded-full bg-background px-6 text-base text-foreground hover:bg-background/90"
          >
            <Link href="/contact">
              Démarrer votre aventure
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="lg"
            className="h-12 px-2 text-base text-background underline-offset-4 hover:text-sunset"
          >
            <Link href="#services">Découvrir les services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
