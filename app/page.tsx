import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { About } from "@/components/site/about";
import { Reviews } from "@/components/site/reviews";
import { ContactCta } from "@/components/site/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Reviews />
      <ContactCta />
    </>
  );
}
