import Link from "next/link";
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
        "group inline-flex items-baseline gap-[0.15em] font-display text-2xl leading-none tracking-tight transition-opacity hover:opacity-80",
        className,
      )}
    >
      <span className="italic">Yukom</span>
      <span
        aria-hidden
        className="size-[0.22em] translate-y-[-0.05em] rounded-full bg-sunset transition-transform group-hover:scale-150"
      />
    </Link>
  );
}
