import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { HERO_STATS, TRUST_ITEMS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | Kerumbe Athletics Sports Club",
  description:
    "Learn about Kerumbe Athletics Sports Club, founded by Chairman Steve Makwae Gekara to discover and nurture gifted young runners in rural primary and secondary schools in Kenya while safeguarding their education.",
  alternates: {
    canonical: "https://kerumbeathletics.co.ke/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Who We Are"
        title="Nurturing Untapped Potential in"
        highlightedWord="Grassroots Kenya"
        subtitle="We bridge the gap between rural classrooms and the world stage — ensuring gifted young athletes receive the gear, coaching, nutrition, and academic support they need."
        bgImage="/images/team-outdoor.jpg"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Trust Bar */}
      <div className="bg-[#E8001C] py-3 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-4 sm:gap-8 text-xs font-[var(--font-montserrat)] font-bold tracking-wider uppercase">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Founder Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visuals */}
            <div className="relative">
              <div className="relative h-[440px] sm:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/coaches-street.jpg"
                  alt="Chairman Steve Makwae Gekara and Kerumbe leadership team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Founder quote pill */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 right-4 sm:right-auto bg-[#0D0D0D] text-white p-5 rounded-lg border-l-4 border-[#E8001C] shadow-2xl max-w-sm">
                <p className="text-xs italic leading-relaxed text-white/80">
                  &ldquo;Kenya&apos;s greatest running champions don&apos;t start in multimillion-shilling stadiums; they run barefoot to school along rural ridges. Our job is to find them, equip them, and protect their schooling.&rdquo;
                </p>
                <span className="block font-[var(--font-montserrat)] font-bold text-xs text-[#E8001C] mt-2 uppercase tracking-wider">
                  — Steve Makwae Gekara, Chairman
                </span>
              </div>
            </div>

            {/* Story Text */}
            <div className="pt-6 lg:pt-0">
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Our Origin & Heart
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] leading-tight mb-6">
                Born From a Simple Truth: Talent is Universal,{" "}
                <span className="text-[#E8001C]">Opportunity is Not.</span>
              </h2>
              <p className="text-[#555] leading-relaxed text-base mb-4 font-[var(--font-open-sans)]">
                In Kenya&apos;s lush tea-growing highlands of Kericho and across the Rift Valley, children run miles each day to and from rural schools. Their natural cardiovascular stamina, biomechanics, and discipline are world-class. Yet thousands of these gifted boys and girls hang up their aspirations because of basic barriers: no running shoes, no balanced meals, and no bus fare to attend regional track meets.
              </p>
              <p className="text-[#555] leading-relaxed text-base mb-6 font-[var(--font-open-sans)]">
                Founded by Chairman <strong>Steve Makwae Gekara</strong> in 2020, <strong>Kerumbe Athletics Sports Club</strong> was established to level the playing field. We do not operate as an elite commercial talent farm; we operate as a community-rooted sports charity that places the child&apos;s well-being and education above everything else.
              </p>

              {/* Guiding Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#F5F5F5] p-4 rounded border-l-2 border-[#E8001C]">
                  <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
                    🎯 Our Mission
                  </strong>
                  <p className="text-xs text-[#666] leading-relaxed m-0">
                    To identify, mentor, and sponsor gifted young athletes in rural schools, providing training, gear, nutrition, and academic security.
                  </p>
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded border-l-2 border-[#E8001C]">
                  <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
                    👁 Our Vision
                  </strong>
                  <p className="text-xs text-[#666] leading-relaxed m-0">
                    A country where every talented rural athlete has access to proper coaching, gear, and education to reach national and international podiums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars of Our Philosophy */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#FF1A35] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#FF1A35]" />
              Core Philosophy
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-white">
              The Principles That Guide <span className="text-[#E8001C]">Every Decision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#2B2B2B] p-6 rounded-lg border border-white/5 hover:border-[#E8001C] transition-all">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">
                Education Always First
              </h3>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Athletic careers can be cut short by injury, but education guarantees a lifetime of self-reliance. Athletes must maintain good school attendance and academic effort.
              </p>
            </div>
            <div className="bg-[#2B2B2B] p-6 rounded-lg border border-white/5 hover:border-[#E8001C] transition-all">
              <div className="text-3xl mb-4">👟</div>
              <h3 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">
                Dignity in Sport
              </h3>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                No child should feel inferior on the track. We provide proper running shoes, racing vests, and tracksuits so our athletes compete proudly and injury-free.
              </p>
            </div>
            <div className="bg-[#2B2B2B] p-6 rounded-lg border border-white/5 hover:border-[#E8001C] transition-all">
              <div className="text-3xl mb-4">🥦</div>
              <h3 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">
                Welfare & Nutrition
              </h3>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                High-altitude distance training requires calories, protein, and clean hydration. We ensure post-training recovery meals and medical checkups for every child.
              </p>
            </div>
            <div className="bg-[#2B2B2B] p-6 rounded-lg border border-white/5 hover:border-[#E8001C] transition-all">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">
                Clean & Ethical Athletics
              </h3>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                We instill strict anti-doping education, sportsmanship, and life-skills mentorship from day one. Our runners learn that hard work and character define true success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm text-center border-t-4 border-[#E8001C]">
                <span className="block font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
                  {stat.value}
                </span>
                <span className="block font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider text-[#E8001C] mt-1">
                  {stat.label}
                </span>
                {stat.description && (
                  <p className="text-xs text-[#666] mt-2 leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] mb-4">
            Join Hands With <span className="text-[#E8001C]">Kerumbe</span>
          </h2>
          <p className="text-[#555] text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you want to sponsor running shoes, support an athlete&apos;s school fees, or partner on community nutrition — your contribution changes lives directly on the ground.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
            >
              Ways to Give →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#0D0D0D] text-[#0D0D0D] px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#0D0D0D] hover:text-white transition-colors"
            >
              Contact Our Leadership
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
