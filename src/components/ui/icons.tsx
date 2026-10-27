import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10.1 10.1 0 0 0 4.64 1.12h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.67-1.4 1.28-1.94 1.36-.5.08-1.13.11-1.82-.11-.42-.14-.96-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.4-.14-.2-1.18-1.56-1.18-2.98 0-1.41.74-2.11 1-2.4.24-.28.64-.41.86-.41h.62c.2 0 .47-.08.73.55.27.67.91 2.3.99 2.47.08.17.14.37.03.6-.11.22-.17.36-.34.55-.17.2-.35.44-.5.59-.17.17-.34.35-.15.68.2.34.88 1.45 1.9 2.35 1.3 1.15 2.4 1.51 2.74 1.68.34.17.54.14.74-.08.2-.22.84-.98 1.07-1.32.22-.34.45-.28.76-.17.31.11 1.96.92 2.3 1.09.34.17.56.25.64.39.08.14.08.8-.16 1.47Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 3.8h2.2l1.1 2.8-1.4 1.1a12.5 12.5 0 0 0 6.9 6.9l1.1-1.4 2.8 1.1v2.2c0 .9-.7 1.7-1.6 1.8C10.4 19.8 4.2 13.6 3.7 5.4c0-.9.8-1.6 1.8-1.6Z" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Icon>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
    </Icon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 5 6v6c0 4.2 2.8 7.2 7 8.5 4.2-1.3 7-4.3 7-8.5V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Icon>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" />
    </Icon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m12 3 9 5-9 5L3 8l9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </Icon>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m8 13 3-3 3 2 5-6" />
    </Icon>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.4 11.2a1.6 1.6 0 0 0 1.6 1.3h9.3a1.6 1.6 0 0 0 1.6-1.3L22 8H7" />
    </Icon>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10h16v10H4V10Z" />
      <path d="M4 10 6.5 4h11L20 10" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  );
}

export function CareIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 7a3.5 3.5 0 1 1 3 3L10 17l-3-3 7-7" />
      <path d="m8 15-3.5 3.5" />
    </Icon>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </Icon>
  );
}

export function PenIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 20h4L20 8l-4-4L4 16v4Z" />
      <path d="m13.5 6.5 4 4" />
    </Icon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </Icon>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2.5 12S6.2 6.5 12 6.5 21.5 12 21.5 12 17.8 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </Icon>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 15c-3 0-5 2.2-5 5 1.4-.2 2.7-.9 3.6-2L12 15Z" />
      <path d="M12 15c3 0 5 2.2 5 5-1.4-.2-2.7-.9-3.6-2L12 15Z" />
      <path d="M14.5 9.5 12 15l-2.5-5.5C11 5 16.5 3 21 3c0 4.5-2 10-6.5 11.5Z" />
      <circle cx="16.2" cy="7.8" r="1" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Icon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="10" width="4" height="11" />
      <circle cx="5" cy="6" r="2" />
      <path d="M10 21V10h4v1.6c.8-1.2 2.1-1.9 3.6-1.9 2.6 0 4.4 1.8 4.4 5.1V21h-4v-5.5c0-1.5-.8-2.3-2-2.3s-2.1.9-2.1 2.4V21h-3.9Z" />
    </Icon>
  );
}

export const trustIcons = {
  bolt: BoltIcon,
  shield: ShieldIcon,
  user: UserIcon,
};

export const serviceIcons = {
  layers: LayersIcon,
  growth: GrowthIcon,
  cart: CartIcon,
  store: StoreIcon,
  care: CareIcon,
};

export const processIcons = {
  search: SearchIcon,
  pen: PenIcon,
  code: CodeIcon,
  eye: EyeIcon,
  rocket: RocketIcon,
};
