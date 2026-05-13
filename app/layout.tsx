import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yukom.agency"),
  title: {
    default: "Yukom — Inventeurs d'aventures",
    template: "%s · Yukom",
  },
  description:
    "Agence de marketing et communication à Metz. Stratégie, graphisme, réseaux sociaux et sites web pour les entrepreneurs, collectivités et associations qui veulent une identité authentique.",
  keywords: [
    "agence de marketing et communication Metz",
    "agence de marketing et communication Moselle",
    "stratégie marketing",
    "identité visuelle",
    "réseaux sociaux",
    "site web",
    "Yukom",
  ],
  authors: [{ name: "Maud Mrad" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.yukom.agency",
    siteName: "Yukom",
    title: "Yukom — Inventeurs d'aventures",
    description:
      "Agence de marketing et communication à Metz. L'agence de com' pour les aventures de votre entreprise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yukom — Inventeurs d'aventures",
    description:
      "Agence de marketing et communication à Metz. L'agence de com' pour les aventures de votre entreprise.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
