import { site } from "@/config/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hi JDR Groups, I'd like to talk about a website for my business in Bengaluru.";
