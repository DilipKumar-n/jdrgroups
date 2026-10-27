import Link from "next/link";
import { BrandLogo } from "@/components/layout/brand-logo";
import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { legalLinks, navigation, site } from "@/config/site";

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: InstagramIcon },
  { href: "https://facebook.com", label: "Facebook", icon: FacebookIcon },
  { href: "https://linkedin.com", label: "LinkedIn", icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_1fr_1.1fr] lg:px-8">
        <div>
          <BrandLogo inverted />
          <p className="mt-4 max-w-xs text-sm text-white/65">
            Websites and e-commerce for local businesses that want more enquiries and sales.
          </p>
        </div>
        <nav className="flex flex-wrap items-start gap-x-5 gap-y-2 text-sm text-white/75">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="space-y-2 text-sm text-white/75">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-white">
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <p className="flex items-center gap-2">
            <PinIcon className="h-4 w-4" />
            {site.location}
          </p>
          <div className="flex gap-2 pt-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {site.year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
