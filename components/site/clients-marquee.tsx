import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
  /** Optional per-logo max-height override (Tailwind classes). */
  maxH?: string;
  /** Optional per-logo CSS filter override. */
  filter?: string;
};

const DEFAULT_MAX_H = "max-h-10 sm:max-h-12";

// Ordre manuel : on évite Solenso/Sorec adjacents et Google/Humacure adjacents.
const LOGOS: Logo[] = [
  { name: "Google", src: "/clients/google.webp" },
  { name: "Aimiya", src: "/clients/aimiya.png" },
  { name: "Sorec Immobilier", src: "/clients/sorec.png" },
  { name: "Humacure", src: "/clients/humacure.png" },
  {
    name: "Centre du Pâtis",
    src: "/clients/centre-du-patis.png",
    maxH: "max-h-32 sm:max-h-40",
  },
  { name: "Solenso", src: "/clients/solenso.png" },
  { name: "Brasserie Le 11", src: "/clients/brasserie-le-11.png" },
  {
    name: "Claraplast",
    src: "/clients/claraplast.png",
    maxH: "max-h-24 sm:max-h-32",
  },
  {
    name: "IFA Business School",
    src: "/clients/ifa.png",
    filter: "grayscale(1) opacity(0.7)",
  },
  { name: "Kameleon Lab", src: "/clients/kameleon-lab.png" },
  {
    name: "Kenko",
    src: "/clients/kenko.png",
    maxH: "max-h-6 sm:max-h-8",
  },
  { name: "Kinepolis", src: "/clients/kinepolis.png" },
  {
    name: "Les Maisons Cocoon",
    src: "/clients/maisons-cocoon.png",
    maxH: "max-h-12 sm:max-h-16",
  },
  { name: "Second Life", src: "/clients/second-life.png" },
  { name: "Sudexpe", src: "/clients/sudexpe.png" },
  {
    name: "Ultrace",
    src: "/clients/ultrace.png",
    maxH: "max-h-20 sm:max-h-24",
  },
  {
    name: "Université de Lorraine",
    src: "/clients/universite-lorraine.png",
    filter: "grayscale(1) opacity(0.7)",
  },
];

const LOGO_FILTER = "brightness(0) opacity(0.55)";

const FADE_MASK =
  "linear-gradient(to right, black 0%, black 88%, transparent 100%)";

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo) => (
        <div
          key={logo.name}
          className="flex h-32 w-32 shrink-0 items-center justify-center px-3 sm:h-40 sm:w-40 sm:px-4"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={160}
            height={160}
            className={cn("w-auto object-contain", logo.maxH ?? DEFAULT_MAX_H)}
            style={{ filter: logo.filter ?? LOGO_FILTER }}
          />
        </div>
      ))}
    </div>
  );
}

export function ClientsMarquee() {
  return (
    <section
      aria-label="Ils nous ont confié leur aventure"
      className="bg-[#FCFAF5] pb-8 pt-4 sm:pb-12 sm:pt-6"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex items-center gap-6">
          <div
            className="min-w-0 flex-1 overflow-hidden"
            style={{
              maskImage: FADE_MASK,
              WebkitMaskImage: FADE_MASK,
            }}
          >
            <div className="flex w-max animate-marquee">
              <Group />
              <Group ariaHidden />
            </div>
          </div>
          <p className="hidden shrink-0 text-right text-xs font-medium uppercase tracking-[0.18em] text-foreground/60 sm:block">
            60+ entreprises
            <br />
            nous font confiance
          </p>
        </div>
      </div>
    </section>
  );
}
