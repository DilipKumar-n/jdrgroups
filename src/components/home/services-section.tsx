import { ConsultationForm } from "@/components/consultation/consultation-form";
import { ServiceCard } from "@/components/home/service-card";
import { Container } from "@/components/ui/container";
import { services } from "@/content/home";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Our Services & Packages</h2>
                <p className="mt-1 text-sm text-muted">
                  Choose the right solution for your business. Flexible packages. No hidden costs.
                </p>
              </div>
              <a href="#services" className="hidden text-sm font-semibold text-navy/70 hover:text-navy sm:inline">
                View All Services
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          <aside
            id="contact"
            className="scroll-mt-24 h-fit rounded-[28px] border border-emerald-100 bg-mint p-6 shadow-[0_10px_30px_rgba(16,185,129,0.08)]"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-navy">Get Your Free Consultation</h2>
                <p className="mt-1 text-sm text-muted">
                  Tell us about your business. We’ll suggest the best solution and share a custom quote.
                </p>
              </div>
              <span className="rotate-6 text-xs font-semibold italic text-brand-dark">Let’s grow together</span>
            </div>
            <ConsultationForm />
          </aside>
        </div>
      </Container>
    </section>
  );
}
