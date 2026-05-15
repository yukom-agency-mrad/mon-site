import Image from "next/image";

const LOGOS = [
  { name: "Aimiya", src: "/clients/aimiya.png" },
  { name: "Aniodys", src: "/clients/aniodys.png" },
  { name: "Brasserie Le 11", src: "/clients/brasserie-le-11.png" },
  { name: "Centre du Pâtis", src: "/clients/centre-du-patis.png" },
  { name: "Claraplast", src: "/clients/claraplast.png" },
  { name: "Cyclomen", src: "/clients/cyclomen.png" },
  { name: "Egrego", src: "/clients/egrego.png" },
  { name: "Humacure", src: "/clients/humacure.png" },
  { name: "Kameleon Lab", src: "/clients/kameleon-lab.png" },
  { name: "Kenko", src: "/clients/kenko.png" },
  { name: "Kinepolis", src: "/clients/kinepolis.png" },
  { name: "Les Maisons Cocoon", src: "/clients/maisons-cocoon.png" },
  { name: "Love Room", src: "/clients/love-room.png" },
  { name: "Second Life", src: "/clients/second-life.png" },
  { name: "Solenso", src: "/clients/solenso.png" },
  { name: "Sudexpe", src: "/clients/sudexpe.png" },
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
          className="flex h-16 w-40 shrink-0 items-center justify-center px-6 sm:h-20 sm:w-48 sm:px-8"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={192}
            height={80}
            className="max-h-12 w-auto object-contain sm:max-h-14"
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
