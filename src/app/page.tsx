import { CaseStudiesSection } from '@/components/sections/case-studies-section';
import { CtaSection } from '@/components/sections/cta-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TeamSection } from '@/components/sections/team-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { TrustIndicatorsSection } from '@/components/sections/trust-indicators-section';
import { WhoWeAreSection } from '@/components/sections/who-we-are-section';
import { WhyChooseSection } from '@/components/sections/why-choose-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <WhyChooseSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <TrustIndicatorsSection />
      <CtaSection />
    </>
  );
}
