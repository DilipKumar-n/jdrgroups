import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const variants = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-dark focus-visible:outline-brand",
  navy: "bg-navy text-white shadow-sm hover:bg-navy-mid focus-visible:outline-navy",
  outline:
    "border border-white/25 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white",
  ghost:
    "border border-navy/10 bg-white text-navy hover:bg-slate-50 focus-visible:outline-navy",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

function classNames(variant: Variant, size: Size, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button type={type} className={classNames(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  ...props
}: Common & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={classNames(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
