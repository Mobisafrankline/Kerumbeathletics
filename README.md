# Kerumbe Athletics Sports Club

Official web platform for **Kerumbe Athletics Sports Club** (Kenya), built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## About the Project

Kerumbe Athletics Sports Club, founded by Chairman **Steve Makwae Gekara**, discovers, mentors, and supports gifted young runners from rural primary and secondary schools across Kenya. The club provides running gear, nutrition, academic mentorship, and access to regional and national competitions (including the **Belgut Marathon - 2026** and **Kericho Marathon - 2026**), ensuring talent is nurtured without sacrificing academic education.

- **Website:** [kerumbeathletics.co.ke](https://kerumbeathletics.co.ke)
- **Primary Base & Headquarters:** Nyamira County, Kenya
- **Operational Reach:** Nyamira, Kisii, Kericho, and Bomet Counties (Kenyan Highlands & Rift Valley)
- **M-Pesa Support:** `0790 700228` (Steve Makwae Gekara)
- **Email Inquiries:** `stevegekara04@gmail.com`

---

## Design & Aesthetic

- **Color Palette:** Athletics Red (`#E8001C`, `#B30016`) & Monochrome (`#0D0D0D`, `#1A1A1A`, `#F5F5F5`, `#FFFFFF`)
- **Design Inspiration:** Modern non-profit & humanitarian impact frameworks ([cross-bordersoutreach.ngo](https://cross-bordersoutreach.ngo/), [thegabrielfoundation.ngo](https://www.thegabrielfoundation.ngo/))
- **Typography:** Montserrat (Headings, Buttons & Badges) + Open Sans (Body & Reading text)
- **Styling:** Tailwind CSS v3 with PostCSS and Autoprefixer

---

## Site Pages & Architecture

The website features an 8-page responsive structure:

1. **Home (`/`)**: Hero banner with race highlights, dynamic trust ticker, mission introduction, 6 core pillars, impact numbers, photo preview, custom donation calculator, newsletter subscription, and quick contact.
2. **About Us (`/about`)**: Founding story, history since 2020 in Nyamira County, core values, and Chairman Steve Makwae Gekara profile.
3. **What We Do (`/what-we-do`)**: Comprehensive breakdown of our 6 pillars: Running Gear, Coaching, Education, Mentorship, Nutrition & Welfare, and Competition Access.
4. **Where We Operate (`/where-we-operate`)**: Geographic focus on primary base in Nyamira County, with regional outreach across Kericho, Kisii, and Bomet Counties in high-altitude Rift Valley and Gusii highlands.
5. **Stories & Impact (`/stories`)**: Milestone timeline (2020 - 2026) and athlete impact stories from the Belgut Marathon - 2026 and Kericho Marathon - 2026.
6. **Gallery (`/gallery`)**: Photo gallery with category filters (All, Competition, Training, Community) and full-screen lightbox.
7. **Ways to Give (`/donate`)**: Interactive donation calculator supporting open-ended/custom amounts, currency toggle (KES/USD), dynamic impact explanation, direct M-Pesa instructions, and corporate/bank wire details.
8. **Contact (`/contact`)**: Direct contact details, inquiry form, and ways to partner or volunteer.

---

## Project Structure

```
Kerumbe_athletics/
├── public/
│   └── images/              # All club race, training & community photos + logo
├── src/
│   ├── app/
│   │   ├── about/page.tsx   # About Us page
│   │   ├── contact/page.tsx # Contact Us page
│   │   ├── donate/page.tsx  # Ways to Give page
│   │   ├── gallery/page.tsx # Gallery page with lightbox
│   │   ├── stories/page.tsx # Stories & Impact page
│   │   ├── what-we-do/      # What We Do (6 pillars) page
│   │   ├── where-we-operate/# Geographic presence page
│   │   ├── favicon.ico      # Site favicon
│   │   ├── globals.css      # Tailwind & custom CSS layers
│   │   ├── layout.tsx       # Root layout + SEO metadata & Schema.org JSON-LD
│   │   ├── manifest.ts      # Web App Manifest
│   │   ├── page.tsx         # Main landing page
│   │   ├── robots.ts        # Dynamic robots.txt for Googlebot & Bingbot
│   │   └── sitemap.ts       # Dynamic sitemap.xml for all routes
│   ├── components/          # Modular React components
│   │   ├── About.tsx        # Story & values component
│   │   ├── BackToTop.tsx    # Smooth scroll-to-top button
│   │   ├── Contact.tsx      # Contact details & form
│   │   ├── Donate.tsx       # Open-ended custom donation calculator
│   │   ├── Footer.tsx       # Clean institutional footer
│   │   ├── Gallery.tsx      # Photo grid preview
│   │   ├── Hero.tsx         # Slideshow hero with race photography
│   │   ├── Impact.tsx       # Stats & achievements
│   │   ├── Navbar.tsx       # Single-line desktop navbar + mobile drawer
│   │   ├── Newsletter.tsx   # Email subscription bar
│   │   ├── PageHero.tsx     # Inner page hero banner with breadcrumbs
│   │   ├── Programs.tsx     # 6 pillars grid
│   │   ├── TrustStrip.tsx   # Red highlights ticker
│   │   └── UtilityBar.tsx   # Top contact & location bar
│   ├── data/
│   │   └── siteData.ts      # Centralized content hub
│   └── types/
│       └── index.ts         # TypeScript definitions
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and build scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS v3 theme configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.mjs        # ESLint configuration
```

---

## Getting Started

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

## Search Engine Optimization (SEO)

- **Search Engine Indexing:** Dynamic `robots.txt` (`/robots.txt`) and `sitemap.xml` (`/sitemap.xml`) covering all 8 static pages.
- **Structured Data (JSON-LD):** Implements Schema.org `SportsOrganization` and `WebSite` graph.
- **OpenGraph & Twitter Cards:** Complete metadata tags with official photography previews for social sharing.
