"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const onLightPage = pathname !== "/";

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50",
        onLightPage && "bg-foreground",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-8">
        <Logo />

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-background px-5 text-foreground transition-colors hover:bg-sunset hover:text-background [a]:hover:bg-sunset [a]:hover:text-background"
          >
            <Link href="/contact">Démarrer votre aventure</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-background md:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-sunset"
            >
              Démarrer votre aventure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
