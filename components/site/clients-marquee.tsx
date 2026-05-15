import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
  /** Optional per-logo max-height override (Tailwind classes). */
  maxH?: string;
};

const DEFAULT_MAX_H = "max-h-12 sm:max-h-14";

const LOGOS: Logo[] = [
  { name: "Aimiya", src: "/clients/aimiya.png" },
  { name: "Brasserie Le 11", src: "/clients/brasserie-le-11.png" },
  {
    name: "Centre du Pâtis",
    src: "/clients/centre-du-patis.png",
    maxH: "max-h-24 sm:max-h-28",
  },
  {
    name: "Claraplast",
    src: "/clients/claraplast.png",
    maxH: "max-h-16 sm:max-h-20",
  },
  { name: "Cyclomen", src: "/clients/cyclomen.png" },
  { name: "Google", src: "/clients/google.webp" },
  { name: "Humacure", src: "/clients/humacure.png" },
  { name: "IFA Business School", src: "/clients/ifa.png" },
  { name: "Kameleon Lab", src: "/clients/kameleon-lab.png" },
  {
    name: "Kenko",
    src: "/clients/kenko.png",
    maxH: "max-h-8 sm:max-h-10",
  },
  { name: "Kinepolis", src: "/clients/kinepolis.png" },
  {
    name: "Les Maisons Cocoon",
    src: "/clients/maisons-cocoon.png",
    maxH: "max-h-16 sm:max-h-20",
  },
  { name: "Second Life", src: "/clients/second-life.png" },
  { name: "Solenso", src: "/clients/solenso.png" },
  { name: "Sorec Immobilier", src: "/clients/sorec.png" },
  { name: "Sudexpe", src: "/clients/sudexpe.png" },
  { name: "Université de Lorraine", src: "/clients/universite-lorraine.png" },
];

const LOGO_FILTER = "brightness(0) opacity(0.55)";

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo) => (
        <div
          key={logo.name}
          className="flex h-24 w-40 shrink-0 items-center justify-center px-6 sm:h-28 sm:w-48 sm:px-8"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={192}
            height={96}
            className={cn("w-auto object-contain", logo.maxH ?? DEFAULT_MAX_H)}
            style={{ filter: LOGO_FILTER }}
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
      className="bg-[#FCFAF5] py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-foreground/55">
          Ils nous ont confié leur aventure
        </p>
        <div className="mt-10 overflow-hidden">
          <div className="flex w-max animate-marquee">
            <Group />
            <Group ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
