// ============================================================
// Kerumbe Athletics — Site Data
// ============================================================

import type {
  NavLink, Stat, Program, Milestone, GalleryImage, DonationTier, ContactInfo,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Programs",   href: "#programs" },
  { label: "Impact",     href: "#impact" },
  { label: "Gallery",    href: "#gallery" },
  { label: "Support Us", href: "#donate" },
  { label: "Contact",    href: "#contact" },
];

export const HERO_SLIDES: string[] = [
  "/images/kericho-finish.jpg",
  "/images/athletes-track.jpg",
  "/images/athletes-back.jpg",
];

export const HERO_STATS: Stat[] = [
  { value: "50+",  label: "Athletes Supported" },
  { value: "3+",   label: "Counties Reached" },
  { value: "100%", label: "Education Focus" },
];

export const TRUST_ITEMS: string[] = [
  "🏅 Belgut Marathon Finishers",
  "🏃 Kericho Cross Country",
  "🌍 Rural-to-National Pipeline",
  "📚 Education + Athletics",
];

export const PROGRAMS: Program[] = [
  {
    icon: "👟",
    title: "Equipment & Gear",
    description:
      "We supply running shoes, uniforms, and essential training gear so athletes can compete with dignity and confidence.",
  },
  {
    icon: "🏋️",
    title: "Training & Coaching",
    description:
      "Structured training regimens and professional coaching tailored for young middle-distance and cross-country runners.",
    featured: true,
  },
  {
    icon: "📚",
    title: "Academic Support",
    description:
      "Education is never compromised. We ensure every athlete keeps up with schoolwork alongside their athletics journey.",
  },
  {
    icon: "🧠",
    title: "Mentorship",
    description:
      "Building character, discipline, and life skills through one-on-one mentorship from experienced coaches and community leaders.",
  },
  {
    icon: "🍽️",
    title: "Welfare & Nutrition",
    description:
      "Daily meals, clean drinking water, massage therapy, and medical care — because a healthy athlete is a great athlete.",
  },
  {
    icon: "🚌",
    title: "Competition Access",
    description:
      "Travel, accommodation, and event entry for local marathons, regional circuits, and national competitions to get athletes seen and scouted.",
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    title: "Club Founded",
    description:
      "Steve Makwae Gekara assembled the first cohort of rural student-athletes and began structured coaching and welfare support.",
  },
  {
    year: "2024",
    title: "Belgut Marathon, Kabianga",
    description:
      "A major milestone — Kerumbe athletes competed in the same field as Eliud Kipchoge, Ezekiel Kemboi, and Ferdinand Omanyala, gaining national exposure.",
  },
  {
    year: "2025",
    title: "Kericho Cross Country",
    description:
      "Multiple athletes from Kerumbe participated in the Kericho Cross Country, marking growth in competitive reach and team strength.",
  },
  {
    year: "Soon",
    title: "National & World Stage",
    description:
      "With your support, we aim to send Kerumbe athletes to national championships and eventually the World Athletics circuit.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/images/athletes-back.jpg",  alt: "Athletes at training ground",   caption: "On the Field",       large: true },
  { src: "/images/athletes-track.jpg", alt: "Athletes at cross country",     caption: "Ready to Compete" },
  { src: "/images/kericho-finish.jpg", alt: "Kericho Cross Country finish",  caption: "Kericho Finish Line" },
  { src: "/images/team-outdoor.jpg",   alt: "Team outdoor meeting",          caption: "Team Bonding" },
  { src: "/images/team-meal.jpg",      alt: "Team sharing a meal",           caption: "Fuelling Champions" },
  { src: "/images/kids-meal.jpg",      alt: "Young athletes at lunch",       caption: "Youth Welfare" },
  { src: "/images/kericho-college.jpg",alt: "At Kericho Teachers College",   caption: "Education First" },
  { src: "/images/community-group.png",alt: "Community group",               caption: "Community Roots" },
  { src: "/images/coaches-street.jpg", alt: "Coaches planning",              caption: "Leadership Team" },
];

export const DONATION_TIERS: DonationTier[] = [
  { amount: "KES 2,000", description: "A pair of running shoes" },
  { amount: "KES 1,000", description: "Meals for a week" },
  { amount: "KES 5,000", description: "Race entry & travel" },
  { amount: "KES 3,500", description: "Full kit & uniform" },
];

export const CONTACT_INFO: ContactInfo[] = [
  { icon: "📍", label: "Location",      value: "Kericho County, Kenya" },
  { icon: "📞", label: "Phone / M-Pesa", value: "+254 790 700228" },
  { icon: "✉",  label: "Email",         value: "stevegekara04@gmail.com", href: "mailto:stevegekara04@gmail.com" },
  { icon: "🌐", label: "Website",       value: "kerumbeathletics.co.ke",   href: "https://kerumbeathletics.co.ke" },
];

