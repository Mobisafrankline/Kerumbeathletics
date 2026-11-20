import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.kerumbeathletic.com";

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
    "Kerumbe Athletics Sports Club is a grassroots Kenyan athletics movement and sports initiative founded by Chairman Steve Makwae Gekara in Nyamira County, Kenya. We discover, train, mentor, and sponsor gifted young runners from rural primary and secondary schools across Nyamira, Kisii, Kericho, and Bomet Counties. We need urgent financial assistance, donations, and sponsorships to provide our student-athletes with running shoes, official kits, balanced nutrition, school fees, and competition travel. Support us today via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com).",
  applicationName: "Kerumbe Athletics",
  authors: [{ name: "Steve Makwae Gekara", url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  keywords: [
    "kierumba athletic",
    "kierumba athletics",
    "kerumba athletic",
    "kerumba athletics",
    "kirumba athletic",
    "kirumba athletics",
    "Kerumbe Athletics",
    "Kerumbe Athletics Sports Club",
    "Kerumbe Athletic",
    "Steve Makwae Gekara",
    "Kenya athletics",
    "Kenyan runners",
    "rural athletics Kenya",
    "Nyamira athletics",
    "Nyamira County runners",
    "Koradrops Academy",
    "Hon Mrs Hellen Chepkwony",
    "Belgut Marathon",
    "Kericho Cross Country",
    "grassroots sports Kenya",
    "youth athletics sponsorship",
    "financial assistance Kenyan athletes",
    "donate to Kenyan runners",
    "M-Pesa 0790700228",
    "PayPal stevegekara04@gmail.com",
    "athletics donations Kenya",
    "running shoes donation Kenya",
  ],
  creator: "Kerumbe Athletics Sports Club",
  publisher: "Kerumbe Athletics Sports Club",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya",
    description:
      "Kerumbe Athletics Sports Club (also known as Kierumba Athletic) discovers, trains, and sponsors gifted young runners from rural schools in Nyamira County, Kenya while keeping education first. We urgently need financial assistance and donations to provide running gear, nutrition, school fees, and competition travel. Support our athletes via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com).",
    url: siteUrl,
    siteName: "Kerumbe Athletics Sports Club",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-share.jpg`,
        width: 1200,
        height: 630,
        alt: "Kerumbe Athletics Sports Club (Kierumba Athletic) - Official Team & Chairman Steve Makwae",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/images/koradrops-team-coach.jpg`,
        width: 1200,
        height: 800,
        alt: "Young runners and Coach Steve Makwae at Koradrops Academy",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/images/club-uniforms-kit.jpg`,
        width: 1200,
        height: 630,
        alt: "Official Kerumbe Athletics Sports Club team uniforms and kit collection",
        type: "image/jpeg",
      },
      {
        url: `${siteUrl}/images/logo.png`,
        width: 512,
        height: 512,
        alt: "Kerumbe Athletics Sports Club Official Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerumbe Athletics Sports Club | Financial Assistance & Donations Appeal",
    description:
      "Empowering rural Kenyan student-athletes from Nyamira County. We urgently need financial assistance and donations for running shoes, nutrition, and school fees via M-Pesa 0790 700228 or PayPal stevegekara04@gmail.com.",
    images: [`${siteUrl}/images/og-share.jpg`],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsOrganization", "NonprofitOrganization", "NGO"],
      "@id": `${siteUrl}/#organization`,
      name: "Kerumbe Athletics Sports Club",
      alternateName: [
        "Kierumba Athletic",
        "Kierumba Athletics",
        "Kerumba Athletic",
        "Kerumba Athletics",
        "Kirumba Athletic",
        "Kirumba Athletics",
        "Kerumbe Athletics",
        "Kerumbe Athletic Sports Club",
        "Kerumbe Sports Club",
      ],
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      image: [
        `${siteUrl}/images/og-share.jpg`,
        `${siteUrl}/images/koradrops-team-coach.jpg`,
        `${siteUrl}/images/club-uniforms-kit.jpg`,
        `${siteUrl}/images/belgut-finish-gantry.jpg`,
        `${siteUrl}/images/logo.png`,
      ],
      description:
        "Kerumbe Athletics Sports Club is a grassroots Kenyan athletics movement and sports organization founded in 2020 by Chairman Steve Makwae Gekara, headquartered in Nyamira County, Kenya. The club discovers, coaches, and sponsors underprivileged student-athletes across Nyamira, Kisii, Kericho, and Bomet Counties, ensuring 100% school retention alongside elite middle-distance and marathon training. Kerumbe Athletics urgently seeks financial assistance, sponsorships, and charitable donations to provide running shoes, official kits, nutritious recovery meals, academic textbooks, and competition travel for talented rural youth. Donations are received directly via M-Pesa (0790 700228) and PayPal (stevegekara04@gmail.com).",
      slogan: "Turning Rural Running Talent Into Champions",
      founder: {
        "@type": "Person",
        name: "Steve Makwae Gekara",
        jobTitle: "Chairman & Founder",
        telephone: "+254790700228",
        email: "stevegekara04@gmail.com",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nyamira",
        addressRegion: "Nyamira County",
        addressCountry: "KE",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Nyamira County" },
        { "@type": "AdministrativeArea", name: "Kisii County" },
        { "@type": "AdministrativeArea", name: "Kericho County" },
        { "@type": "AdministrativeArea", name: "Bomet County" },
        { "@type": "Country", name: "Kenya" },
      ],
      knowsAbout: [
        "Track & Field Athletics",
        "Marathon Training",
        "Cross Country",
        "Youth Sports Mentorship",
        "Rural Education Sponsorship",
        "Belgut Marathon - 2026",
        "Kericho Marathon - 2026",
      ],
      seeks:
        "Financial assistance, individual donations, corporate CSR sponsorships, running shoes, track kits, nutrition funding, and academic school fees to support over 50 gifted rural student-athletes in Kenya.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+254790700228",
          contactType: "Donations & Chairman",
          email: "stevegekara04@gmail.com",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Swahili"],
        },
      ],
      potentialAction: {
        "@type": "DonateAction",
        target: `${siteUrl}/donate`,
        description:
          "Provide urgent financial assistance and donations to support young rural Kenyan runners with running shoes, nutrition, education, and competition travel via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com).",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kerumbe Athletics Sports Club",
      alternateName: "Kierumba Athletic",
      description:
        "Official website of Kerumbe Athletics Sports Club (Kierumba Athletic). Discover our mission, student-athletes, and support our work through financial assistance and donations.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-KE",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#navigation`,
      name: "Site Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Home",
          description: "Kerumbe Athletics Sports Club homepage, mission, and live news.",
          url: `${siteUrl}/`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "About Us",
          description: "Our founding story, Chairman Steve Makwae Gekara, and education-first philosophy.",
          url: `${siteUrl}/about`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "What We Do",
          description: "Youth athletics programs: gear, high-altitude coaching, school sponsorship, and welfare.",
          url: `${siteUrl}/what-we-do`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Where We Operate",
          description: "Active training bases across Nyamira, Kisii, Kericho, and Bomet Counties.",
          url: `${siteUrl}/where-we-operate`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Stories & Impact",
          description: "Impact stories from Belgut Marathon 2026, Kericho races, and Koradrops Academy training.",
          url: `${siteUrl}/stories`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Photo Gallery",
          description: "Official kits, race finishes, morning training at Koradrops Academy, and team meals.",
          url: `${siteUrl}/gallery`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Ways to Give & Donations",
          description: "Support rural athletes with running shoes, food, and school fees via M-Pesa 0790 700228 or PayPal stevegekara04@gmail.com.",
          url: `${siteUrl}/donate`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 8,
          name: "Contact Us",
          description: "Direct contact info for Chairman Steve Makwae Gekara and partnership inquiries.",
          url: `${siteUrl}/contact`,
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />
        {/* OpenGraph & Social Preview for WhatsApp, Facebook, Twitter */}
        <meta property="og:title" content="Kerumbe Athletics Sports Club | Empowering Rural Champions in Kenya" />
        <meta
          property="og:description"
          content="Kerumbe Athletics Sports Club (also known as Kierumba Athletic) discovers, trains, and sponsors gifted young runners from rural schools in Nyamira County, Kenya. Urgent financial assistance & donations needed via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com)."
        />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:site_name" content="Kerumbe Athletics Sports Club" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:image" content={`${siteUrl}/images/og-share.jpg`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/images/og-share.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Kerumbe Athletics Sports Club (Kierumba Athletic) - Official Kit & Team" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kerumbe Athletics Sports Club | Financial Assistance & Donations Appeal" />
        <meta
          name="twitter:description"
          content="Empowering rural Kenyan student-athletes from Nyamira County. Urgent financial assistance & donations needed for running shoes, nutrition, and school fees."
        />
        <meta name="twitter:image" content={`${siteUrl}/images/og-share.jpg`} />
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
