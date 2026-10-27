import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.name}`,
};

export default function PrivacyPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-extrabold text-navy">Privacy Policy</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
        {site.name} collects only the details you submit through our consultation form — your name,
        business name, requested service and WhatsApp number — so we can respond with a quote. We do
        not sell this information. Enquiries are used to contact you about the requested work and to
        improve our services.
      </p>
    </Container>
  );
}
