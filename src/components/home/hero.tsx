import { DeviceShowcase } from "@/components/home/device-showcase";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, WhatsAppIcon, trustIcons } from "@/components/ui/icons";
import { site } from "@/config/site";
import { trustPoints } from "@/content/home";
import { defaultWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_#163a86,_#071b4a_46%,_#051433)] text-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle,_rgba(34,197,94,0.18),_transparent_60%)]" />
      <Container className="grid items-center gap-12 py-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-20 lg:pb-24">
        <div>
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
            Websites that help local businesses get{" "}
            <span className="text-brand">more enquiries and sell online.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/75">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={whatsappUrl(defaultWhatsappMessage)} target="_blank" rel="noreferrer" size="lg">
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </ButtonLink>
            <ButtonLink href="/#portfolio" variant="outline" size="lg">
              View Our Work
              <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = trustIcons[item.icon];
              return (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.title}</span>
                    <span className="text-xs text-white/65">{item.description}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <DeviceShowcase />
      </Container>
    </section>
  );
}
