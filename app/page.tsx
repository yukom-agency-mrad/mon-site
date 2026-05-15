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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pitch />
      <ClientsMarquee />
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
