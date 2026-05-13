import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string;
};

export function Logo({ className, href = "/" }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Yukom — Accueil"
      className={cn(
        "inline-flex items-center transition-opacity hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/yukom-logo-white.png"
        alt="Yukom"
        width={1759}
        height={483}
        priority
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
