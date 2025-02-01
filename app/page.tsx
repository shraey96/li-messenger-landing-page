import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { Pricing } from "./sections/Pricing";
import { HowItWorks } from "./sections/HowItWorks";
import { FAQ } from "./sections/FAQ";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
