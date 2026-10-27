"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-3xl font-extrabold text-navy">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted">Please try again, or message us on WhatsApp if it continues.</p>
      <Button variant="navy" className="mt-6" onClick={reset}>
        Try again
      </Button>
    </Container>
  );
}
