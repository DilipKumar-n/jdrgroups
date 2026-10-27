"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/layout/brand-logo";
import { ButtonLink } from "@/components/ui/button";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/icons";
import { navigation } from "@/config/site";
import { defaultWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo inverted />
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/80 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink
            href={whatsappUrl(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </ButtonLink>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={whatsappUrl(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
