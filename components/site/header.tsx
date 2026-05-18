"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#avis", label: "Avis" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-background/85 transition-colors hover:text-background"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-background px-5 text-foreground transition-colors hover:bg-sunset hover:text-background [a]:hover:bg-sunset [a]:hover:text-background"
          >
            <Link href="/contact">Commencer l'aventure</Link>
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-sunset"
            >
              Commencer l'aventure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
