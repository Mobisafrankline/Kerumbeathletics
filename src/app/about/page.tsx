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
  { num: "02", title: "Excellence in Sport", desc: "We demand the best from our athletes through structured training, elite coaching, and competition exposure." },
  { num: "03", title: "Integrity & Fair Play", desc: "Clean sport. No performance-enhancing substances. We teach that true victory is earned honestly." },
  { num: "04", title: "Community & Family", desc: "We are more than a club. We are a family that cares for each other on and off the track." },
  { num: "05", title: "Equal Opportunity", desc: "Talent knows no gender. We actively support and empower female and male athletes equally." },
  { num: "06", title: "Holistic Development", desc: "Mental health, nutrition, and mentorship to develop the whole person, not just the runner." },
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
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-4 sm:mb-6">
                Born From a <span className="text-red">Simple Belief</span>
              </h2>
              <div className="space-y-3.5 sm:space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  Kerumbe Athletics Sports Club was founded in 2020 by{" "}
                  <strong className="text-charcoal-dark">Chairman Steve Makwae Gekara</strong>,
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
                  supports over 50 young athletes across Nyamira, Kisii, Kericho, and Bomet Counties.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative h-56 sm:h-64 col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/team-outdoor.jpg" alt="Kerumbe Athletics team meeting" fill className="object-cover" />
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/kericho-college.jpg" alt="Kericho education partnership" fill className="object-cover" />
              </div>
              <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/kids-meal.jpg" alt="Youth nutrition program" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 bg-offwhite">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <p className="section-label">Our Values</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-3 sm:mb-4">
              The Pillars of <span className="text-red">Everything We Do</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Core principles that guide our coaches, athletes, and volunteers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-5 sm:p-7 border border-gray-100">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-red/10 rounded-xl flex items-center justify-center font-heading font-black text-red text-xs sm:text-sm mb-4">
                  {v.num}
                </div>
                <h3 className="font-heading font-black text-base sm:text-lg text-charcoal-dark mb-2">{v.title}</h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section className="py-14 sm:py-20 bg-charcoal-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/team-outdoor.jpg" alt="Chairman Steve Makwae Gekara" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <div className="font-heading font-black text-xl sm:text-2xl text-white">Steve Makwae Gekara</div>
                  <div className="text-red font-heading font-bold text-xs sm:text-sm uppercase tracking-wider mt-1">Chairman &amp; Founder</div>
                </div>
              </div>
            </div>
            <div>
              <p className="section-label text-red mb-2 sm:mb-3">Leadership</p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4 sm:mb-6">
                Meet Our <span className="text-red">Chairman</span>
              </h2>
              <div className="space-y-3.5 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
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
                <p className="italic text-gray-200">
                  &ldquo;Every child who runs in our club runs toward a better future
                  for themselves, their families, and their communities.&rdquo;
                </p>
                <div className="pt-1 font-heading font-bold text-red text-sm">Steve Makwae Gekara, Chairman &amp; Founder</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                <a href="tel:+254790700228" className="btn-red justify-center text-center">
                  Call Chairman Steve
                </a>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal-dark justify-center text-center">
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
