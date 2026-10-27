import { CtaBanner } from "@/components/home/cta-banner";
import { DemosSection } from "@/components/home/demos-section";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background pb-16">
        <ServicesSection />
        <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <ProcessSection />
          <DemosSection />
        </Container>
        <Container className="mt-6 grid items-start gap-6 lg:grid-cols-[1.15fr_0.9fr_0.95fr]">
          <CtaBanner />
          <TestimonialsSection />
          <FaqSection />
        </Container>
      </div>
    </>
  );
}
