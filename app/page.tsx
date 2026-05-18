import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { Pitch } from "@/components/site/pitch";
import { ExpertiseStrategie } from "@/components/site/expertise-strategie";
import { ExpertiseStudioCreatif } from "@/components/site/expertise-studio-creatif";
import { ExpertiseSocialMedia } from "@/components/site/expertise-social-media";
import { ExpertiseWeb } from "@/components/site/expertise-web";
import { About } from "@/components/site/about";
import { MarqueeBanner } from "@/components/site/marquee-banner";
import { ClientsMarquee } from "@/components/site/clients-marquee";
import { Reviews } from "@/components/site/reviews";
import { ContactCta } from "@/components/site/contact-cta";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  title:
    "Yukom — Agence de marketing et communication à Metz, Moselle",
  description:
    "Agence de marketing et communication à Metz (Moselle). Stratégie de marque, graphisme, réseaux sociaux, sites web — Yukom accompagne entrepreneurs, collectivités et associations partout en France.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Yukom — Agence de marketing et communication à Metz, Moselle",
    description:
      "Stratégie, branding, réseaux sociaux et sites web. L'agence de com' pour les aventures de votre entreprise.",
    url: "https://www.yukom.agency",
    locale: "fr_FR",
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yukom",
  alternateName: "Agence Yukom",
  description:
    "Agence de marketing et communication à Metz, Moselle. Stratégie de marque, graphisme, réseaux sociaux et sites web.",
  url: "https://www.yukom.agency",
  logo: "https://www.yukom.agency/yukom-logo-color.png",
  image: "https://www.yukom.agency/yukom-logo-color.png",
  telephone: "+33783870295",
  email: "maud_mrad@hotmail.fr",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Metz",
    addressRegion: "Moselle",
    postalCode: "57000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.1193,
    longitude: 6.1757,
  },
  areaServed: [
    { "@type": "City", name: "Metz" },
    { "@type": "AdministrativeArea", name: "Moselle" },
    { "@type": "AdministrativeArea", name: "Grand Est" },
    { "@type": "Country", name: "France" },
  ],
  founder: {
    "@type": "Person",
    name: "Maud Mrad",
    jobTitle: "Fondatrice",
    sameAs: "https://www.linkedin.com/in/maud-mrad/",
  },
  knowsAbout: [
    "Stratégie de communication",
    "Branding",
    "Identité visuelle",
    "Réseaux sociaux",
    "Marketing digital",
    "Sites web",
    "SEO",
    "Storytelling",
  ],
  sameAs: [
    "https://www.instagram.com/yukom.agency/",
    "https://www.linkedin.com/in/maud-mrad/",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Hero />
      <ClientsMarquee />
      <Pitch />
      <div className="relative">
        <ExpertiseStrategie />
        <ExpertiseStudioCreatif />
        <ExpertiseSocialMedia />
        <ExpertiseWeb />
      </div>
      <MarqueeBanner />
      <About />
      <Reviews />
      <ContactCta />
      <Faq />
    </>
  );
}
