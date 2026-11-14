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
  { label: "Home",             href: "/" },
  { label: "About Us",         href: "/about" },
  { label: "What We Do",       href: "/what-we-do" },
  { label: "Where We Operate", href: "/where-we-operate" },
  { label: "Stories & Impact", href: "/stories" },
  { label: "Gallery",          href: "/gallery" },
  { label: "Ways to Give",     href: "/donate" },
  { label: "Contact",          href: "/contact" },
];

export const HERO_SLIDES: string[] = [
  "/images/kericho-finish.jpg",
  "/images/athletes-track.jpg",
  "/images/athletes-back.jpg",
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
    value: "3+",
    label: "Counties Reached",
    description: "Bridging countryside talent from Kericho and neighboring counties.",
  },
  {
    value: "2020",
    label: "Founded",
    description: "Established by Chairman Steve Makwae Gekara.",
  },
];

export const TRUST_ITEMS: string[] = [
  "🏅 Belgut Marathon Finishers",
  "🏃 Kericho Cross Country Competitors",
  "🌍 Rural-to-National Athletics Pipeline",
  "📚 Academic Education + Sports Mentorship",
];

export const PROGRAMS: Program[] = [
  {
    id: "gear",
    icon: "👟",
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
    icon: "🏋️",
    title: "Structured Training & Elite Coaching",
    summary:
      "Scientifically structured training schedules tailored for middle-distance and cross-country disciplines.",
    description:
      "Talent without coaching leads to burnout. Our coaches establish age-appropriate training programs focusing on aerobic endurance, pacing, pacing strategies, running mechanics, and mental fortitude. We hold weekly structured sessions that accommodate school timetables so athletics never interferes with classes.",
    highlights: [
      "High-altitude endurance conditioning in Rift Valley hills",
      "Technique, cadence, and running posture coaching",
      "Specialized middle-distance (800m - 10,000m) programs",
      "Recovery sessions, stretching, and injury management",
    ],
    featured: true,
  },
  {
    id: "academic",
    icon: "📚",
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
    icon: "🧠",
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
    icon: "🍽️",
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
    icon: "🚌",
    title: "Competition Access & Race Sponsorship",
    summary:
      "Covering entry fees, transport, and lodging for local, county, and national athletic championships.",
    description:
      "Rural athletes often miss life-changing championships simply because they cannot afford the KES 500 entry fee or the matatu bus fare to the host stadium. Kerumbe pays for race registration, team transport, lodging, and meals during competitive meets across the Rift Valley and national circuits.",
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
    subtitle: "Club Founding in Kericho",
    description:
      "Chairman Steve Makwae Gekara recognized the immense untapped potential in rural primary and secondary schools. Kerumbe Athletics Sports Club was officially founded to give village runners a fighting chance.",
  },
  {
    year: "2023",
    title: "First Cohort & Community Partnership",
    subtitle: "Establishing Rural School Linkages",
    description:
      "Kerumbe partnered with rural primary schools across Kericho to scout children with natural endurance talent, establishing training routines and school-shoe support programs.",
  },
  {
    year: "2024",
    title: "Belgut Marathon Breakthrough",
    subtitle: "Sharing the Stage with Olympic Icons",
    description:
      "Kerumbe athletes competed in the prestigious Belgut Marathon in Kabianga, sharing the course with global icons Ferdinand Omanyala, Eliud Kipchoge, and Ezekiel Kemboi. The performance placed Kerumbe on the regional athletic map.",
  },
  {
    year: "2025",
    title: "Kericho Cross Country Triumphs",
    subtitle: "Podium Strides & Team Growth",
    description:
      "Kerumbe fielded athletes at the Kericho Cross Country championships, crossing the finish line with distinction and demonstrating that structured grassroots investment produces remarkable results.",
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
    id: "belgut-marathon-2024",
    title: "From Dirt Paths to the Belgut Marathon Course",
    category: "Competition Milestone",
    date: "2024",
    image: "/images/kericho-finish.jpg",
    summary:
      "How Kerumbe's rural runners ran shoulder-to-shoulder with Olympic champions in Kabianga.",
    content: [
      "The 2024 Belgut Marathon at Kabianga will forever be etched in the memory of Kerumbe Athletics Sports Club. For our young student-athletes who had only ever run on red-dirt school tracks, stepping onto the starting line alongside international athletic icons like Eliud Kipchoge, Ferdinand Omanyala, and Ezekiel Kemboi was nothing short of historic.",
      "Chairman Steve Makwae Gekara personally organized travel, team kits, and race bibs. When the starting gun fired, our runners proved that courage and natural talent know no socioeconomic boundaries. They finished strongly, earning praise from county officials and national coaches alike.",
      "This landmark event proved to every young girl and boy in our rural community that their running dreams are valid and achievable.",
    ],
  },
  {
    id: "kericho-cross-country-2025",
    title: "Crossing the Finish Line at Kericho Cross Country",
    category: "Championship Success",
    date: "2025",
    image: "/images/athletes-track.jpg",
    summary:
      "Braving muddy hills and fierce competition to establish Kerumbe as a rising force.",
    content: [
      "Cross-country running is the undisputed proving ground of Kenyan distance runners. At the Kericho Cross Country Championships, Kerumbe fielded athletes across junior categories.",
      "Equipped with proper track footwear and uniforms, our runners tackled the grueling terrain with unwavering grit. Crossing that finish line was not just an athletic milestone — it was proof that when rural athletes receive shoes, nutrition, and mentorship, they can match the best in Kenya.",
    ],
  },
  {
    id: "education-at-the-heart",
    title: "Running for Grades: Why School Comes First at Kerumbe",
    category: "Education Pillar",
    date: "Continuous",
    image: "/images/kericho-college.jpg",
    summary:
      "How our student-athletes balance rigorous 5:30 AM workouts with classroom excellence.",
    content: [
      "At Kerumbe Athletics, training starts early at dawn, but 8:00 AM finds every athlete at their desk in class. We believe that an athlete equipped with knowledge is unstoppable.",
      "By coordinating directly with local teachers and headteachers, we monitor grades and attendance. Athletes who show academic dedication receive priority equipment sponsorships and race travel opportunities.",
    ],
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/kericho-finish.jpg",
    alt: "Kerumbe athletes at the finish line",
    caption: "Kericho Cross Country Finish Line",
    category: "competition",
    large: true,
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
    caption: "Education First — Kericho Teachers College",
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
      "Supplies wholesome post-run protein meals, fruit, and clean electrolyte water for one student-athlete for a whole week.",
    icon: "🍽️",
  },
  {
    amountKES: "KES 2,000",
    amountUSD: "$20",
    title: "A Pair of Running Shoes",
    description:
      "Replaces worn-out footwear with quality, injury-preventing running shoes for training on rugged rural terrain.",
    icon: "👟",
    popular: true,
  },
  {
    amountKES: "KES 3,500",
    amountUSD: "$35",
    title: "Official Team Kit & Tracksuit",
    description:
      "Provides full competition gear, racing singlet, shorts, and club tracksuit so an athlete competes with dignity.",
    icon: "🎽",
  },
  {
    amountKES: "KES 5,000",
    amountUSD: "$50",
    title: "Championship Race Entry & Travel",
    description:
      "Covers regional competition entry fees, transport to the stadium, and safe lodging during away meets.",
    icon: "🚌",
  },
  {
    amountKES: "KES 15,000",
    amountUSD: "$150",
    title: "Full Monthly Sponsorship",
    description:
      "Comprehensive monthly support for one athlete: school supplies, running shoes, coaching, nutrition, and race transport.",
    icon: "⭐",
  },
];

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "📍",
    label: "Headquarters & Operations",
    value: "Kericho County, Rift Valley, Kenya",
  },
  {
    icon: "📞",
    label: "Phone / M-Pesa",
    value: "+254 790 700228",
    href: "tel:+254790700228",
  },
  {
    icon: "✉",
    label: "Email Inquiries",
    value: "stevegekara04@gmail.com",
    href: "mailto:stevegekara04@gmail.com",
  },
  {
    icon: "🌐",
    label: "Official Website",
    value: "kerumbeathletics.co.ke",
    href: "https://kerumbeathletics.co.ke",
  },
];
