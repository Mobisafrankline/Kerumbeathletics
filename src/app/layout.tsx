import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://kerumbeathletics.co.ke";

export const viewport: Viewport = {
  themeColor: "#E8001C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya",
    template: "%s | Kerumbe Athletics Sports Club",
  },
  description:
    "Kerumbe Athletics Sports Club is a grassroots Kenyan sports initiative founded by Steve Makwae Gekara. We discover, train, and support gifted young runners from rural primary and secondary schools across Kenya, providing running gear, nutrition, academic mentorship, and marathon competition access while keeping education at the core.",
  applicationName: "Kerumbe Athletics",
  authors: [
    { name: "Steve Makwae Gekara", url: siteUrl },
    { name: "Kerumbe Athletics Sports Club", url: siteUrl },
  ],
  generator: "Next.js",
  keywords: [
    "Kerumbe Athletics",
    "Kerumbe Athletics Sports Club",
    "Steve Makwae Gekara",
    "Kenya athletics",
    "Kenyan runners",
    "rural athletics Kenya",
    "Kericho athletics",
    "Belgut Marathon",
    "Kericho Cross Country",
    "grassroots sports Kenya",
    "youth athletics sponsorship",
    "rural talent nurturing",
    "education and athletics Kenya",
    "donate to Kenyan runners",
    "Kenyan track and field",
    "athletics sports club Kenya",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Kerumbe Athletics Sports Club",
  publisher: "Kerumbe Athletics Sports Club",
  category: "Sports & Non-Profit",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya",
    description:
      "Nurturing gifted young runners from Kenya's rural primary and secondary schools. Providing coaching, athletic gear, nutrition, academic support, and competition access to help talent reach national and global arenas.",
    url: siteUrl,
    siteName: "Kerumbe Athletics Sports Club",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/kericho-finish.jpg",
        width: 1200,
        height: 630,
        alt: "Kerumbe Athletics runners crossing the finish line at Kericho Cross Country",
      },
      {
        url: "/images/athletes-track.jpg",
        width: 1200,
        height: 630,
        alt: "Kerumbe Athletics athletes on the track",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya",
    description:
      "Transforming rural Kenyan running talent into champions while keeping education at the center. Support our grassroots athletes today.",
    images: ["/images/kericho-finish.jpg"],
    creator: "@KerumbeClub",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsOrganization", "NGO"],
      "@id": `${siteUrl}/#organization`,
      name: "Kerumbe Athletics Sports Club",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      image: `${siteUrl}/images/logo.png`,
      description:
        "Kerumbe Athletics Sports Club is a Kenyan sports initiative founded to uplift and empower gifted young runners from rural schools through training, education, running gear, nutrition, and competition access.",
      founder: {
        "@type": "Person",
        name: "Steve Makwae Gekara",
        jobTitle: "Chairman & Founder",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kericho",
        addressRegion: "Kericho County",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254790700228",
        contactType: "Customer Support and Sponsorships",
        email: "stevegekara04@gmail.com",
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
      sameAs: [
        siteUrl,
        "https://www.facebook.com",
        "https://twitter.com",
        "https://www.instagram.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kerumbe Athletics Sports Club",
      description: "Official website for Kerumbe Athletics Sports Club Kenya",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-KE",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
