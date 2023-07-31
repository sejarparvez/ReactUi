import ApplicationUi from "@/components/Component/ApplicationUi";
import Ecommerce from "@/components/Component/Ecommerce";
import Faq from "@/components/Component/Faq/Faq";
import Hero from "@/components/Component/Hero";
import HeroNav from "@/components/Component/HeroNav";
import Marketing from "@/components/Component/Marketing";
import Pricing from "@/components/Component/Pricing";
import SecondHero from "@/components/Component/SecondHero";
import Testimonials from "@/components/Component/Testimonial";

export default function page() {
  return (
    <div>
      <Hero />
      <SecondHero />
      <HeroNav />
      <Marketing />
      <ApplicationUi />
      <Ecommerce />
      <Pricing />
      <Testimonials />
      <Faq />
    </div>
  );
}
