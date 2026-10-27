export const site = {
  name: "JDR Groups",
  tagline: "Websites • E-commerce • Digital Growth",
  headline: "Websites that help local businesses get more enquiries and sell online.",
  description:
    "Modern websites, e-commerce solutions and digital support for Bengaluru businesses. Simple. Transparent. Result-driven.",
  location: "Bengaluru, Karnataka",
  email: "hello@jdrgroups.in",
  phoneDisplay: "+91 93765 62310",
  phoneE164: "+919376562310",
  whatsappE164: "919376562310",
  year: new Date().getFullYear(),
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#process", label: "How It Works" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/#contact", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
] as const;
