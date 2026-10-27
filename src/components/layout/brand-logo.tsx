import Link from "next/link";
import { site } from "@/config/site";

export function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl text-sm font-extrabold tracking-tight ${
          inverted ? "bg-white text-navy" : "bg-navy text-white"
        }`}
      >
        JDR
      </span>
      <span className="leading-tight">
        <span className={`block text-[15px] font-extrabold ${inverted ? "text-white" : "text-navy"}`}>
          {site.name}
        </span>
        <span className={`block text-[11px] ${inverted ? "text-white/70" : "text-muted"}`}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
