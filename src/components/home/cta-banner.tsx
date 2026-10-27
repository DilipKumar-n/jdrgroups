import { ButtonLink } from "@/components/ui/button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/config/site";
import { defaultWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(90deg,_#071b4a,_#12357a_55%,_#071b4a)] px-6 py-8 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 160%22%3E%3Cg fill=%22none%22 stroke=%22%23ffffff%22 stroke-opacity=%220.12%22 stroke-width=%221%22%3E%3Cpath d=%22M40 140c20-40 40-70 70-90 30-20 60-20 90 0 30 20 50 50 80 70%22/%3E%3Cpath d=%22M120 140c15-30 40-55 70-65 35-12 70 0 100 25%22/%3E%3C/g%3E%3C/svg%3E')] bg-right bg-no-repeat opacity-80" />
      <div className="relative">
        <h2 className="text-2xl font-extrabold">Ready to take your business online?</h2>
        <p className="mt-2 text-sm text-white/75">
          Get a professional website or e-commerce store with {site.name}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={whatsappUrl(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </ButtonLink>
          <ButtonLink href={`tel:${site.phoneE164}`} variant="outline">
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
