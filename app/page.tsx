import { Hero } from "@/components/site/hero";
import { Pitch } from "@/components/site/pitch";
import { ExpertiseStrategie } from "@/components/site/expertise-strategie";
import { ExpertiseStudioCreatif } from "@/components/site/expertise-studio-creatif";
import { ExpertiseSocialMedia } from "@/components/site/expertise-social-media";
import { ExpertiseWeb } from "@/components/site/expertise-web";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Reviews } from "@/components/site/reviews";
import { ContactCta } from "@/components/site/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pitch />
      <div className="relative">
        <ExpertiseStrategie />
        <ExpertiseStudioCreatif />
        <ExpertiseSocialMedia />
        <ExpertiseWeb />
      </div>
      <Services />
      <About />
      <Reviews />
      <ContactCta />
    </>
  );
}
