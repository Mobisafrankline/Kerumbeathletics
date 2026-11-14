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
  description?: string;
}

export interface Program {
  id: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: "all" | "competition" | "training" | "community";
  large?: boolean;
}

export interface DonationTier {
  amountKES: string;
  amountUSD: string;
  title: string;
  description: string;
  icon: string;
  popular?: boolean;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
