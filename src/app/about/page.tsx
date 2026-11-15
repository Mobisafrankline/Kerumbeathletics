import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kerumbe Athletics Sports Club, founded in 2020 by Chairman Steve Makwae Gekara to empower rural Kenyan runners through coaching, gear, nutrition, and education.",
};

const VALUES = [
  { num: "01", title: "Education First", desc: "Every athlete remains enrolled in school. Athletics is the vehicle; education is the permanent foundation." },
  { num: "02", title: "Excellence in Sport", desc: "We demand the best from our athletes — structured training, elite coaching, and competition exposure." },
  { num: "03", title: "Integrity & Fair Play", desc: "Clean sport. No performance-enhancing substances. We teach that true victory is earned honestly." },
  { num: "04", title: "Community & Family", desc: "We are more than a club. We are a family that cares for each other on and off the track." },
  { num: "05", title: "Equal Opportunity", desc: "Talent knows no gender. We actively support and empower female and male athletes equally." },
  { num: "06", title: "Holistic Development", desc: "Mental health, nutrition, and mentorship — we develop the whole person, not just the runner." },
];

export default function AboutPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="About Kerumbe Athletics"
        subtitle="Discover the story, mission, and people behind Kenya's rising grassroots athletics movement."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        image="/images/athletes-back.jpg"
      />

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title mb-6">
                Born From a <span className="text-red">Simple Belief</span>
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  Kerumbe Athletics Sports Club was founded in 2020 by{" "}
                  <strong className="text-charcoal">Chairman Steve Makwae Gekara</strong>,
                  a passionate advocate for rural youth athletics in Kenya&apos;s Rift
                  Valley region.
                </p>
                <p>
                  Steve saw something that broke his heart and fired his spirit at the
                  same time: extraordinary running talent blooming in rural primary schools,
                  with no shoes on the athletes&apos; feet, no coaching structure, and no
                  pathway to competition.
                </p>
                <p>
                  He started with a handful of young runners from Nyamira County,
                  providing them with running shoes from his own pocket. What began as
                  a personal mission quickly grew into a structured sports club that now
                  supports over 50 young athletes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/team-outdoor.jpg" alt="Kerumbe Athletics team meeting" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/kericho-college.jpg" alt="Kericho education partnership" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/kids-meal.jpg" alt="Youth nutrition program" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="section-label">Our Values</p>
            <h2 className="section-title mb-4">
              The Pillars of <span className="text-red">Everything We Do</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-7 border border-gray-100">
                <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center font-heading font-black text-red text-sm mb-4">
                  {v.num}
                </div>
                <h3 className="font-heading font-black text-lg text-charcoal-dark mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section className="py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/team-outdoor.jpg" alt="Chairman Steve Makwae Gekara" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <div className="font-heading font-black text-2xl text-white">Steve Makwae Gekara</div>
                  <div className="text-red font-heading font-bold text-sm uppercase tracking-wider mt-1">Chairman &amp; Founder</div>
                </div>
              </div>
            </div>
            <div>
              <p className="section-label text-red mb-3">Leadership</p>
              <h2 className="section-title-white mb-6">
                Meet Our <span className="text-red">Chairman</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  Steve Makwae Gekara is the heart and engine of Kerumbe Athletics. A
                  lifelong advocate for rural youth development, Steve combines deep
                  passion for athletics with a firm belief in the power of education
                  to transform lives.
                </p>
                <p>
                  Under his leadership, Kerumbe has grown from a grassroots vision into a
                  structured sports club with coaches, mentors, and over 50 young
                  athletes competing at regional and national events.
                </p>
                <p>
                  &ldquo;Every child who runs in our club runs toward a better future —
                  for themselves, their families, and their communities.&rdquo;
                </p>
                <div className="pt-2 font-heading font-bold text-red">— Steve Makwae Gekara</div>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="tel:+254790700228" className="btn-red">
                  Call Chairman Steve
                </a>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal-dark">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
