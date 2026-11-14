// ============================================================
// Kerumbe Athletics — Shared Types
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Program {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  large?: boolean;
}

export interface DonationTier {
  amount: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

