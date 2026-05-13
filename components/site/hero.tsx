"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[100svh] flex items-center pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Image
        src="/hero-ocean.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        aria-hidden
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-foreground/85 via-foreground/65 to-foreground/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 size-[28rem] rounded-full bg-sunset/25 blur-3xl sm:size-[36rem]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-background/75"
        >
          <Compass className="size-4 text-sunset" />
          <span>Agence de communication · Metz · Moselle</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-background text-balance sm:text-6xl md:text-7xl"
        >
          Inventeurs <em className="italic text-sunset">d'aventures</em> pour
          les marques qui n'ont pas froid aux idées.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-background/85 sm:text-xl"
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

        <p className="absolute bottom-4 right-6 hidden text-[10px] uppercase tracking-widest text-background/40 sm:block">
          Photo&nbsp;: Ivan Bandura · Unsplash
        </p>
      </div>
    </section>
  );
}
