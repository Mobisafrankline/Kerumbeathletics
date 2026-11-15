// ============================================================
// Kerumbe Athletics — Site Data & Content Hub
// ============================================================

import type {
  NavLink,
  Stat,
  Program,
  Milestone,
  Story,
  GalleryImage,
  DonationTier,
  ContactInfo,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Where We Operate", href: "/where-we-operate" },
  { label: "Stories & Impact", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Ways to Give", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const HERO_SLIDES: string[] = [
  "/images/belgut-finish-gantry.jpg",
  "/images/belgut-kemboi-2026.jpg",
  "/images/kericho-finish.jpg",
  "/images/athletes-track.jpg",
  "/images/belgut-crowd-2026.jpg",
];

export const HERO_STATS: Stat[] = [
  {
    value: "50+",
    label: "Athletes Supported",
    description: "Young runners receiving direct training, gear, and meal support.",
  },
  {
    value: "100%",
    label: "Education Centered",
    description: "Every athlete remains enrolled in primary or secondary school.",
  },
  {
    value: "4",
    label: "Counties Reached",
    description: "Nyamira, Kisii, Kericho, and Bomet Counties in high-altitude Kenya.",
  },
  {
    value: "2020",
    label: "Founded",
    description: "Established by Chairman Steve Makwae Gekara.",
  },
];

export const TRUST_ITEMS: string[] = [
  "Belgut Marathon - 2026 Finishers",
  "Kericho Marathon - 2026 Competitors",
  "Primary Base: Nyamira County",
  "Active in Nyamira, Kisii, Kericho & Bomet Counties",
  "Rift Valley & Highland Athletics Pipeline",
  "Academic Education & Sports Mentorship",
];

export const PROGRAMS: Program[] = [
  {
    id: "gear",
    icon: "01",
    title: "Equipment & Running Gear",
    summary:
      "Supplying professional running shoes, track spikes, club tracksuits, and racing vests.",
    description:
      "Most gifted runners in rural primary and secondary schools run barefoot or in worn-out school shoes on rough dirt tracks. We equip our young runners with proper running shoes, racing vests, tracksuits, socks, and training spikes so they can practice safely, prevent injuries, and step onto competition tracks with pride and dignity.",
    highlights: [
      "Quality road & cross-country running shoes",
      "Official Kerumbe team racing uniforms",
      "Injury prevention & orthopedic footwear support",
      "Training bags, socks, and weather protection wear",
    ],
  },
  {
    id: "coaching",
    icon: "02",
    title: "Structured Training & Elite Coaching",
    summary:
      "Scientifically structured training schedules tailored for middle-distance and cross-country disciplines.",
    description:
      "Talent without coaching leads to burnout. Our coaches establish age-appropriate training programs focusing on aerobic endurance, pacing strategies, running mechanics, and mental fortitude. We hold weekly structured sessions that accommodate school timetables so athletics never interferes with classes.",
    highlights: [
      "High-altitude conditioning across Nyamira, Kisii, Kericho & Bomet",
      "Technique, cadence, and running posture coaching",
      "Specialized middle-distance (800m - 10,000m) programs",
      "Recovery sessions, stretching, and injury management",
    ],
    featured: true,
  },
  {
    id: "academic",
    icon: "03",
    title: "Academic Sponsorship & Education",
    summary:
      "Guaranteeing that every runner stays in school with books, fees, and academic guidance.",
    description:
      "Our founding principle is that education is non-negotiable. Athletics careers are unpredictable, but education lasts a lifetime. Kerumbe works hand-in-hand with rural headteachers and families to ensure student-athletes attend school regularly, complete homework, and excel in their national examinations.",
    highlights: [
      "School uniform & textbook provisions",
      "Tuition assistance for disadvantaged student-athletes",
      "Teacher-coach coordination for academic tracking",
      "Pathways to higher education & sports scholarship opportunities",
    ],
  },
  {
    id: "mentorship",
    icon: "04",
    title: "Youth Mentorship & Character Building",
    summary:
      "Instilling discipline, anti-doping awareness, self-worth, and positive life values.",
    description:
      "A champion is built from within. We hold regular mentorship workshops where seasoned athletes, community leaders, and mentors talk to the youth about integrity, resisting peer pressure, financial discipline, gender equality, and clean, ethical sportsmanship free of performance-enhancing substances.",
    highlights: [
      "Anti-doping awareness & ethical sportsmanship education",
      "Leadership, teamwork, and personal confidence building",
      "Life skills coaching & career guidance seminars",
      "One-on-one counselor support for vulnerable children",
    ],
  },
  {
    id: "welfare",
    icon: "05",
    title: "Welfare, Nutrition & Health Care",
    summary:
      "Providing post-run recovery meals, clean drinking water, and professional medical checkups.",
    description:
      "Young growing runners require high caloric intake, protein, and micro-nutrients to support rigorous training. In many impoverished rural homes, balanced food is scarce. Kerumbe provides wholesome nutrition, hydration, supplements, physiotherapy massage, and emergency medical treatment.",
    highlights: [
      "High-protein post-training recovery meals and fruit",
      "Safe clean drinking water and electrolyte hydration",
      "Physical therapy, sports massage, and muscle recovery",
      "First aid supplies and medical clinic treatment cover",
    ],
  },
  {
    id: "competition",
    icon: "06",
    title: "Competition Access & Race Sponsorship",
    summary:
      "Covering entry fees, transport, and lodging for local, county, and national athletic championships.",
    description:
      "Rural athletes often miss life-changing championships simply because they cannot afford the entry fee or the bus fare to the host stadium. Kerumbe pays for race registration, team transport, lodging, and meals during competitive meets such as the Belgut Marathon - 2026 and Kericho Marathon - 2026.",
    highlights: [
      "Official race registration & Athletics Kenya bib numbers",
      "Chartered team travel to county and national circuits",
      "Safe accommodation and meal allowances during away meets",
      "Direct exposure to national team scouts and international managers",
    ],
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: "2020",
    title: "The Vision Takes Root",
    subtitle: "Club Founding in Nyamira County",
    description:
      "Chairman Steve Makwae Gekara recognized the immense untapped athletic potential in rural primary and secondary schools. Kerumbe Athletics Sports Club was officially founded in Nyamira County to give village runners a fighting chance.",
  },
  {
    year: "2023",
    title: "First Cohort & Community Partnerships",
    subtitle: "Reaching Schools Across Nyamira, Kisii & Rift Valley",
    description:
      "Kerumbe partnered with rural schools across Nyamira, Kisii, Kericho, and Bomet Counties to scout student-athletes with natural endurance, establishing training routines and school-shoe support programs.",
  },
  {
    year: "2025",
    title: "Regional Cross Country Success",
    subtitle: "Podium Strides & Team Growth",
    description:
      "Kerumbe fielded athletes at competitive regional championships, crossing finish lines with distinction and demonstrating that structured grassroots investment produces remarkable results.",
  },
  {
    year: "2026",
    title: "Belgut Marathon - 2026 & Kericho Marathon - 2026",
    subtitle: "Sharing the Stage with Olympic Icons",
    description:
      "Kerumbe athletes made a landmark impression at the Belgut Marathon - 2026 and Kericho Marathon - 2026 in high-altitude Rift Valley. Competing alongside Olympic champion Ezekiel Kemboi and national legends, our young runners finished strongly with medals and official honors.",
  },
  {
    year: "Future",
    title: "National & Global Arenas",
    subtitle: "Targeting World Athletics Championships",
    description:
      "Our roadmap includes sending Kerumbe athletes to the Athletics Kenya National Trials, the World U20 Championships, and collegiate sports scholarship pipelines across the globe.",
  },
];

export const STORIES: Story[] = [
  {
    id: "belgut-marathon-2026",
    title: "Belgut Marathon - 2026: From Village Dirt Roads to Championship Medals",
    category: "Competition Milestone",
    date: "2026",
    image: "/images/belgut-finish-gantry.jpg",
    summary:
      "How Kerumbe's runners competed shoulder-to-shoulder with Olympic champions at the Belgut Marathon - 2026.",
    content: [
      "The Belgut Marathon - 2026 in Kabianga stands as a defining chapter in the history of Kerumbe Athletics Sports Club. Running through high-altitude Rift Valley courses before massive enthusiastic crowds, our young student-athletes from Nyamira, Kisii, Kericho, and Bomet Counties stepped onto the starting line alongside Olympic icons, including steeplechase legend Ezekiel Kemboi.",
      "Chairman Steve Makwae Gekara personally coordinated race registration, transport, nutrition, and official team kits. When the starting gun fired, our runners proved that dedication, high-altitude training, and disciplined mentorship yield championship results, crossing the finish gantry with official medals and widespread acclaim.",
      "This triumph confirmed to every young boy and girl across rural Kenya that with proper shoes, coaching, and education, their running dreams can conquer any stage.",
    ],
  },
  {
    id: "kericho-marathon-2026",
    title: "Kericho Marathon - 2026 & Cross Country Excellence",
    category: "Championship Success",
    date: "2026",
    image: "/images/kericho-finish.jpg",
    summary:
      "Tackling grueling Rift Valley elevation and muddy terrain to establish Kerumbe as a premier grassroots sports club.",
    content: [
      "High-altitude cross-country and marathon racing is the true proving ground of Kenyan distance legends. At the Kericho Marathon - 2026 and regional championships, Kerumbe fielded junior and senior competitors.",
      "Equipped with proper track footwear and uniforms, our runners tackled the grueling terrain with unwavering grit. Crossing that finish line was not just an athletic milestone, it was living proof that grassroots investment from Nyamira County into our regional athletes creates national-calibre competitors.",
    ],
  },
  {
    id: "education-at-the-heart",
    title: "Running for Grades: Why School Comes First at Kerumbe",
    category: "Education Pillar",
    date: "Continuous",
    image: "/images/kericho-college.jpg",
    summary:
      "How our student-athletes balance dawn workouts with classroom excellence in rural schools.",
    content: [
      "At Kerumbe Athletics, training starts early at dawn, but 8:00 AM finds every athlete at their desk in class. We believe that an athlete equipped with knowledge is unstoppable.",
      "By coordinating directly with local teachers and headteachers across Nyamira, Kisii, Kericho, and Bomet Counties, we monitor grades and school attendance. Athletes who show academic dedication receive priority equipment sponsorships and race travel opportunities.",
    ],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/belgut-finish-gantry.jpg",
    alt: "Kerumbe athlete under the Belgut Marathon 2026 Finish arch",
    caption: "Belgut Marathon - 2026 Finish Line",
    category: "competition",
    large: true,
  },
  {
    src: "/images/belgut-kemboi-2026.jpg",
    alt: "Kerumbe athlete with Olympic champion Ezekiel Kemboi at Belgut Marathon 2026",
    caption: "With Olympic Champion Ezekiel Kemboi (Belgut 2026)",
    category: "competition",
  },
  {
    src: "/images/belgut-runner-medal.jpg",
    alt: "Runner with medal and bib 5540 at Belgut Marathon 2026",
    caption: "Proud Belgut Marathon 2026 Medalist",
    category: "competition",
  },
  {
    src: "/images/belgut-crowd-2026.jpg",
    alt: "Massive spectator crowds gathered at Belgut Marathon 2026 in Kabianga",
    caption: "Belgut Marathon - 2026 Championship Crowds",
    category: "competition",
  },
  {
    src: "/images/kericho-finish.jpg",
    alt: "Kerumbe athletes at the competition finish line",
    caption: "Kericho Marathon & Cross Country Finish",
    category: "competition",
  },
  {
    src: "/images/athletes-track.jpg",
    alt: "Young runners standing on the competition grass field",
    caption: "Ready for the Starting Gun",
    category: "competition",
  },
  {
    src: "/images/athletes-back.jpg",
    alt: "Athletes wearing official Kerumbe Athletics Club uniforms",
    caption: "Proud in Team Uniforms",
    category: "training",
  },
  {
    src: "/images/team-outdoor.jpg",
    alt: "Team outdoor meeting under a tent with Chairman Steve Makwae",
    caption: "Team Strategy & Debrief Session",
    category: "training",
  },
  {
    src: "/images/team-meal.jpg",
    alt: "Athletes and coaches sharing a nutritious lunch together",
    caption: "Nutrition & Post-Run Recovery Meals",
    category: "community",
  },
  {
    src: "/images/kids-meal.jpg",
    alt: "Young student runners eating a wholesome meal",
    caption: "Youth Welfare & Balanced Meals",
    category: "community",
  },
  {
    src: "/images/kericho-college.jpg",
    alt: "Chairman and young athletes outside Kericho Teachers College",
    caption: "Education First: School & College Linkages",
    category: "training",
  },
  {
    src: "/images/community-group.png",
    alt: "Community gathering and school outreach in rural village",
    caption: "Grassroots Village Community Outreach",
    category: "community",
  },
  {
    src: "/images/coaches-street.jpg",
    alt: "Coaches and leadership team planning upcoming tournaments",
    caption: "Club Leadership & Coaching Coordination",
    category: "training",
  },
];

export const DONATION_TIERS: DonationTier[] = [
  {
    amountKES: "KES 1,000",
    amountUSD: "$10",
    title: "Weekly Athlete Nutrition",
    description:
      "Supplies wholesome post-run protein meals, fruit, and clean drinking water for one student-athlete for a week.",
    icon: "Nutrition",
  },
  {
    amountKES: "KES 2,000",
    amountUSD: "$20",
    title: "A Pair of Running Shoes",
    description:
      "Replaces worn-out footwear with quality, injury-preventing running shoes for training on rugged rural terrain.",
    icon: "Footwear",
    popular: true,
  },
  {
    amountKES: "KES 3,500",
    amountUSD: "$35",
    title: "Official Team Kit & Tracksuit",
    description:
      "Provides full competition gear, racing singlet, shorts, and club tracksuit so an athlete competes with dignity.",
    icon: "Team Kit",
  },
  {
    amountKES: "KES 5,000",
    amountUSD: "$50",
    title: "Championship Race Entry & Travel",
    description:
      "Covers regional competition entry fees, transport to the stadium, and safe lodging during away meets.",
    icon: "Competition",
  },
  {
    amountKES: "KES 15,000",
    amountUSD: "$150",
    title: "Full Monthly Sponsorship",
    description:
      "Comprehensive monthly support for one athlete: school supplies, running shoes, coaching, nutrition, and race transport.",
    icon: "Full Sponsor",
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "Location",
    label: "Primary Base & Headquarters",
    value: "Nyamira County, Kenya (Reaching Kisii, Kericho & Bomet Counties)",
  },
  {
    icon: "Phone",
    label: "Phone / M-Pesa",
    value: "+254 790 700228",
    href: "tel:+254790700228",
  },
  {
    icon: "Email",
    label: "Email Inquiries",
    value: "stevegekara04@gmail.com",
    href: "mailto:stevegekara04@gmail.com",
  },
  {
    icon: "Web",
    label: "Official Website",
    value: "kerumbeathletics.co.ke",
    href: "https://kerumbeathletics.co.ke",
  },
];
