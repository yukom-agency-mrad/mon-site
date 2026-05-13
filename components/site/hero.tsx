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
        className="pointer-events-none absolute left-1/2 top-[12%] w-[72%] max-w-2xl -translate-x-1/2 opacity-70 mix-blend-overlay sm:top-[10%] sm:w-[58%] md:max-w-3xl"
        style={{
          zIndex: -15,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 28%, black 60%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(circle 230px at var(--spot-x) var(--spot-y), rgba(255,255,255,0.08) 0%, rgba(250,250,247,0.39) 65%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/65"
        >
          <Compass className="size-4 text-sunset" />
          <span>Agence de communication · Metz · Moselle</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl [text-shadow:0_1px_2px_rgba(255,255,255,0.6)]"
        >
          Inventeurs <em className="italic text-sunset">d'aventures</em> pour
          les marques qui n'ont pas froid aux idées.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl"
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
            className="group h-12 rounded-full bg-foreground px-6 text-base text-background hover:bg-foreground/90"
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
            className="h-12 px-2 text-base text-foreground underline-offset-4 hover:text-sunset"
          >
            <Link href="#services">Découvrir les services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
