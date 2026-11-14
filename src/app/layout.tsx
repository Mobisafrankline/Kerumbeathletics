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
    "Kerumbe Athletics Sports Club is a grassroots Kenyan sports initiative founded by Steve Makwae Gekara. We discover, train, and support gifted young runners from rural primary and secondary schools across Kenya — providing running gear, nutrition, academic mentorship, and marathon competition access while keeping education at the core.",
  applicationName: "Kerumbe Athletics",
  authors: [{ name: "Steve Makwae Gekara", url: siteUrl }],
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
    "donate to Kenyan runners",
  ],
  creator: "Kerumbe Athletics Sports Club",
  publisher: "Kerumbe Athletics Sports Club",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya",
    description:
      "Nurturing gifted young runners from Kenya's rural schools. Providing coaching, athletic gear, nutrition, academic support, and competition access.",
    url: siteUrl,
    siteName: "Kerumbe Athletics Sports Club",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/kericho-finish.jpg",
        width: 1200,
        height: 630,
        alt: "Kerumbe Athletics runners at the Kericho Cross Country finish line",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerumbe Athletics Sports Club",
    description: "Transforming rural Kenyan running talent into champions.",
    images: ["/images/kericho-finish.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      description:
        "Kerumbe Athletics Sports Club is a Kenyan sports initiative founded to uplift and empower gifted young runners from rural schools.",
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
        contactType: "Customer Support",
        email: "stevegekara04@gmail.com",
        areaServed: "KE",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kerumbe Athletics Sports Club",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-KE",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
