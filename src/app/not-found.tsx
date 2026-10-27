import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-extrabold text-navy">Page not found</h1>
      <p className="mt-2 text-sm text-muted">The page you’re looking for doesn’t exist.</p>
      <ButtonLink href="/" variant="navy" className="mt-6">
        Back to home
      </ButtonLink>
    </Container>
  );
}
