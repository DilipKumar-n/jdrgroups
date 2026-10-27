import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${site.name}`,
};

export default function TermsPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-extrabold text-navy">Terms & Conditions</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
        Package prices on this website are starting estimates for typical Bengaluru small-business
        projects. Final quotes depend on scope, content readiness and third-party costs such as
        domain, hosting and payment gateways. Work begins after written confirmation of the quote
        and any agreed deposit.
      </p>
    </Container>
  );
}
