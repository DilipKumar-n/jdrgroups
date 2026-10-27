import { formatInr } from "@/lib/money";

export type ServicePackage = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  ctaLabel: string;
  ctaKind: "start" | "learn";
  icon: "layers" | "growth" | "cart" | "store" | "care";
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "search" | "pen" | "code" | "eye" | "rocket";
};

export type DemoProject = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const trustPoints = [
  {
    id: "delivery",
    title: "Fast Delivery",
    description: "On-time, every time",
    icon: "bolt" as const,
  },
  {
    id: "security",
    title: "Secure & Reliable",
    description: "Your data is safe",
    icon: "shield" as const,
  },
  {
    id: "support",
    title: "Direct Support",
    description: "Talk to the founder",
    icon: "user" as const,
  },
];

export const services: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    description: "Up to 5 pages, mobile-friendly design, contact form & WhatsApp.",
    priceLabel: formatInr(9999),
    ctaLabel: "Get Started",
    ctaKind: "start",
    icon: "layers",
  },
  {
    id: "growth",
    name: "Business Growth Website",
    description: "Up to 8 pages, enquiry forms, SEO & analytics setup.",
    priceLabel: formatInr(19999),
    ctaLabel: "Get Started",
    ctaKind: "start",
    icon: "growth",
  },
  {
    id: "catalogue",
    name: "Product Catalogue",
    description: "Up to 30 products, categories, search & WhatsApp orders.",
    priceLabel: formatInr(24999),
    ctaLabel: "Get Started",
    ctaKind: "start",
    icon: "cart",
  },
  {
    id: "ecommerce",
    name: "E-commerce Launch",
    description: "Up to 50 products, cart, payment & shipping configuration.",
    priceLabel: `${formatInr(39999)}+`,
    ctaLabel: "Get Started",
    ctaKind: "start",
    icon: "store",
  },
  {
    id: "care",
    name: "Website Care Plan",
    description: "Updates, backups, security & small changes.",
    priceLabel: `${formatInr(1999)}/month`,
    ctaLabel: "Learn More",
    ctaKind: "learn",
    icon: "care",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "discover",
    step: 1,
    title: "Discover",
    description: "Understand your needs and goals.",
    icon: "search",
  },
  {
    id: "design",
    step: 2,
    title: "Design",
    description: "Create a design that fits your brand.",
    icon: "pen",
  },
  {
    id: "develop",
    step: 3,
    title: "Develop",
    description: "Build and test your website.",
    icon: "code",
  },
  {
    id: "review",
    step: 4,
    title: "Review",
    description: "Share, refine and get your approval.",
    icon: "eye",
  },
  {
    id: "launch",
    step: 5,
    title: "Launch",
    description: "Go live and start growing.",
    icon: "rocket",
  },
];

export const demos: DemoProject[] = [
  {
    id: "salon",
    title: "Salon / Clinic Demo",
    category: "Glow & Bloom",
    tags: ["Services", "Booking", "Contact"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Spa treatment room used as a salon website demo",
  },
  {
    id: "interior",
    title: "Interior Design Demo",
    category: "Homespace Interiors",
    tags: ["Portfolio", "Enquiry"],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bright living room used as an interior design website demo",
  },
  {
    id: "retail",
    title: "Retail Store Demo",
    category: "The Little Shop",
    tags: ["Catalogue", "Cart", "WhatsApp"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Retail clothing display used as a store website demo",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "priya",
    quote:
      "JDR Groups created our website exactly how we wanted. The team was responsive and delivered on time. We've already received more enquiries since the site went live.",
    name: "Priya Sharma",
    role: "Salon Owner, Indiranagar",
    initials: "PS",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "timeline",
    question: "How long does it take to build a website?",
    answer:
      "Most starter and growth websites go live in 7–14 days after we receive your content. Catalogue and e-commerce builds typically take 2–4 weeks depending on product count and payment setup.",
  },
  {
    id: "domain",
    question: "Do you handle domain and hosting?",
    answer:
      "Yes. We can register your domain, set up hosting, connect email, and keep SSL, backups and DNS in one place so you do not have to manage vendors yourself.",
  },
  {
    id: "updates",
    question: "Can I update the website myself?",
    answer:
      "Yes. You get a simple way to update pages, photos and contact details. If you prefer we handle changes, the Website Care Plan covers updates, backups and small edits each month.",
  },
  {
    id: "ecommerce",
    question: "What is included in the e-commerce package?",
    answer:
      "E-commerce Launch includes product pages, cart, checkout, payment gateway setup, shipping configuration, order notifications and a mobile-first storefront. Extra products, custom features or marketplaces are quoted separately.",
  },
  {
    id: "support",
    question: "Do you provide support after launch?",
    answer:
      "Launch includes a handover and a short warranty window for bugs. Ongoing updates, security patches and content changes are available through the monthly Website Care Plan, or as one-off requests.",
  },
];
