# Kerumbe Athletics Sports Club

Official web platform for **Kerumbe Athletics Sports Club** (Kenya), built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🏃 About the Project

Kerumbe Athletics Sports Club, founded by Chairman **Steve Makwae Gekara**, discovers, mentors, and supports gifted young runners from rural primary and secondary schools across Kenya. The club provides running gear, nutrition, academic mentorship, and access to national competitions (such as the Belgut Marathon and Kericho Cross Country), ensuring talent is nurtured without sacrificing academic education.

- **Website:** [kerumbeathletics.co.ke](https://kerumbeathletics.co.ke)
- **M-Pesa Support:** `0790 700228`
- **PayPal Support:** `stevegekara04@gmail.com`

---

## 🎨 Design & Aesthetic

- **Color Palette:** Athletics Red (`#E8001C`, `#B30016`) & Monochrome (`#0D0D0D`, `#1A1A1A`, `#F5F5F5`, `#FFFFFF`)
- **Design Inspiration:** Modern non-profit & humanitarian impact frameworks (`cross-bordersoutreach.ngo`, `thegabrielfoundation.ngo`)
- **Typography:** Montserrat (Headings & Badges) + Open Sans (Body)

---

## 📁 Standard Project Structure

```
Kerumbe_athletics/
├── public/
│   └── images/              # All club race & community photos
├── src/
│   ├── app/
│   │   ├── favicon.ico      # Site favicon
│   │   ├── globals.css      # Tailwind & custom animation styles
│   │   ├── layout.tsx       # Root layout + Google/Bing Bot SEO metadata & Schema.org JSON-LD
│   │   ├── manifest.ts      # Web App Manifest for mobile & PWA
│   │   ├── page.tsx         # Main landing page
│   │   ├── robots.ts        # Dynamic robots.txt for Googlebot & Bingbot
│   │   └── sitemap.ts       # Dynamic sitemap.xml for search indexing
│   ├── components/          # Modular React components
│   │   ├── About.tsx        # Story, Founder & Values
│   │   ├── BackToTop.tsx    # Smooth scroll to top button
│   │   ├── Contact.tsx      # Contact details & messaging form
│   │   ├── Donate.tsx       # Donation tiers & M-Pesa / PayPal details
│   │   ├── Footer.tsx       # 4-column footer
│   │   ├── Gallery.tsx      # Photo grid with interactive lightbox
│   │   ├── Hero.tsx         # Hero banner with auto-slideshow & stats
│   │   ├── Impact.tsx       # Race achievements & timeline
│   │   ├── Navbar.tsx       # Sticky responsive navbar with active link highlight
│   │   ├── Newsletter.tsx   # Subscription bar
│   │   ├── Programs.tsx     # 6 core pillars of support
│   │   ├── TrustStrip.tsx   # Highlights strip
│   │   └── UtilityBar.tsx   # Top contact & quick donate bar
│   ├── data/
│   │   └── siteData.ts      # Centralized content, stats, programs & milestones
│   ├── hooks/
│   │   └── useReveal.ts     # Viewport scroll-reveal animation hook
│   └── types/
│       └── index.ts         # TypeScript interfaces & types
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── pnpm-lock.yaml           # Pnpm lockfile
├── tsconfig.json            # TypeScript configuration
└── eslint.config.mjs        # ESLint configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
pnpm build
pnpm start
```

---

## 🔍 Search Engine Optimization (SEO)

- **Googlebot & Bingbot Optimization:** Built-in dynamic `robots.txt` (`/robots.txt`) and `sitemap.xml` (`/sitemap.xml`).
- **Structured Data (JSON-LD):** Implements Schema.org `SportsOrganization` and `WebSite` schema for rich search results.
- **OpenGraph & Twitter Cards:** Complete social preview tags with responsive imagery.
