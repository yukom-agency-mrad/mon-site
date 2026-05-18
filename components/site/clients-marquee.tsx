import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
  /** Optional per-logo max-height override (Tailwind classes). */
  maxH?: string;
  /** Optional per-logo CSS filter override. */
  filter?: string;
};

const DEFAULT_MAX_H = "max-h-7 sm:max-h-8";
const BIG_H = "max-h-12 sm:max-h-14";
const XL_H = "max-h-20 sm:max-h-24";

// Ordre manuel : alterne petit / gros, et évite Solenso/Sorec et Google/Humacure adjacents.
const LOGOS: Logo[] = [
  {
    name: "Google",
    src: "/clients/google.webp",
    maxH: "max-h-5 sm:max-h-6",
  },
  { name: "Aimiya", src: "/clients/aimiya.png" },
  {
    name: "Solenso",
    src: "/clients/solenso.png",
    maxH: "max-h-4 sm:max-h-5",
  },
  { name: "Brasserie Le 11", src: "/clients/brasserie-le-11.png", maxH: BIG_H },
  {
    name: "Kenko",
    src: "/clients/kenko.png",
    maxH: "max-h-5 sm:max-h-6",
  },
  { name: "Claraplast", src: "/clients/claraplast.png", maxH: XL_H },
  { name: "Sudexpe", src: "/clients/sudexpe.png", maxH: BIG_H },
  {
    name: "IFA Business School",
    src: "/clients/ifa.png",
    maxH: "max-h-8 sm:max-h-10",
    filter: "invert(1) grayscale(1) brightness(1.15) opacity(0.9)",
  },
  { name: "Second Life", src: "/clients/second-life.png" },
  { name: "Ultrace", src: "/clients/ultrace.png", maxH: XL_H },
  { name: "Humacure", src: "/clients/humacure.png" },
  { name: "Kameleon Lab", src: "/clients/kameleon-lab.png", maxH: BIG_H },
  { name: "Sorec Immobilier", src: "/clients/sorec.png" },
  {
    name: "Les Maisons Cocoon",
    src: "/clients/maisons-cocoon.png",
    maxH: BIG_H,
  },
  { name: "Kinepolis", src: "/clients/kinepolis.png" },
  {
    name: "Université de Lorraine",
    src: "/clients/universite-lorraine.png",
    maxH: BIG_H,
    filter: "invert(1) grayscale(1) opacity(0.85)",
  },
];

const LOGO_FILTER = "brightness(0) invert(1) opacity(0.75)";

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
          className="flex h-20 w-32 shrink-0 items-center justify-center px-3 sm:h-24 sm:w-40 sm:px-4"
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
      className="bg-[#080909] pb-5 pt-3 sm:pb-7 sm:pt-4"
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
          <div className="hidden shrink-0 sm:block">
            <div className="flex items-center justify-end gap-2">
              <Image
                src="/google-logo.webp"
                alt="Google"
                width={20}
                height={20}
                className="size-5"
              />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className="size-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p className="mt-1.5 text-right text-xs font-medium uppercase tracking-[0.18em] text-background/70">
              60+ entreprises
              <br />
              nous font confiance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
