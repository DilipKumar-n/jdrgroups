"use client";

import { useConsultation } from "@/components/consultation/consultation-provider";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, serviceIcons } from "@/components/ui/icons";
import type { ServicePackage } from "@/content/home";

export function ServiceCard({ service }: { service: ServicePackage }) {
  const { selectServiceAndScroll } = useConsultation();
  const Icon = serviceIcons[service.icon];

  return (
    <article className="flex h-full flex-col rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,40,90,0.05)]">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-base font-bold text-navy">{service.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-muted">{service.description}</p>
      <p className="mt-4 text-xl font-extrabold text-navy">{service.priceLabel}</p>
      <Button
        className="mt-5 w-full"
        variant="navy"
        size="sm"
        onClick={() => selectServiceAndScroll(service.id)}
      >
        {service.ctaLabel}
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </article>
  );
}
