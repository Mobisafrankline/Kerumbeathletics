import type { Metadata } from "next";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PROGRAMS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "What We Do | Comprehensive Athlete Pillars | Kerumbe Athletics",
  description:
    "Explore the 6 core development pillars of Kerumbe Athletics: Equipment & Gear, Elite Coaching, Academic Sponsorship, Mentorship, Nutrition & Welfare, and Race Competition Access.",
  alternates: {
    canonical: "https://kerumbeathletics.co.ke/what-we-do",
  },
};

export default function WhatWeDoPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Our Core Pillars"
        title="Comprehensive Support For"
        highlightedWord="Every Dimension of Life"
        subtitle="We don't simply train runners — we build educated, healthy, and resilient young leaders through six holistic support programs."
        bgImage="/images/athletes-track.jpg"
        breadcrumbs={[{ label: "What We Do" }]}
      />

      {/* Intro overview banner */}
      <section className="py-14 bg-[#F5F5F5] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0D0D0D] mb-3">
            A 360-Degree Athlete Development Model
          </h2>
          <p className="text-sm text-[#555] leading-relaxed">
            Running in Kenya is competitive and demanding. When a young runner lacks shoes, proper food, or emotional support, their potential is cut short. Our holistic model intervenes at every stage so that talent meets opportunity with full dignity.
          </p>
        </div>
      </section>

      {/* In-depth 6 Pillars */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PROGRAMS.map((program, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={program.id}
                id={program.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual / Highlight Card */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-2xl relative overflow-hidden shadow-xl border border-white/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8001C]/10 rounded-bl-full pointer-events-none" />
                    <div className="text-5xl mb-6">{program.icon}</div>
                    <span className="text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-[2px] text-[#FF1A35] block mb-2">
                      Pillar #{idx + 1}
                    </span>
                    <h3 className="font-[var(--font-montserrat)] font-black text-2xl text-white mb-4">
                      {program.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-6">
                      {program.summary}
                    </p>
                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      {program.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs text-white/85"
                        >
                          <span className="text-[#E8001C] font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-2">
                    <span className="w-4 h-0.5 bg-[#E8001C]" />
                    How This Transforms Lives
                  </span>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-2xl sm:text-3xl text-[#0D0D0D] mb-5 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-base text-[#555] leading-relaxed mb-6 font-[var(--font-open-sans)]">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/donate"
                      className="bg-[#E8001C] text-white px-6 py-2.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-md"
                    >
                      Sponsor This Pillar →
                    </Link>
                    <Link
                      href="/stories"
                      className="text-xs font-[var(--font-montserrat)] font-bold text-[#0D0D0D] hover:text-[#E8001C] transition-colors uppercase tracking-wider underline underline-offset-4 decoration-[#E8001C]"
                    >
                      Read Related Stories
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Athlete Journey Pathway */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#FF1A35] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#FF1A35]" />
              The Pipeline
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-white">
              From Rural School to <span className="text-[#E8001C]">National Podium</span>
            </h2>
            <p className="text-white/60 text-sm mt-3">
              How a young runner progresses through the Kerumbe Athletics ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-xl border-t-4 border-[#E8001C]">
              <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#E8001C] block mb-2">01</span>
              <h4 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">Scouting & Intake</h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Visiting rural primary schools across Kericho to identify natural running form and stamina during inter-school sports days.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border-t-4 border-[#E8001C]">
              <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#E8001C] block mb-2">02</span>
              <h4 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">Gear & Health Baseline</h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Equipping with proper running footwear, club kits, medical clearance, and scheduling meal plans to support physical growth.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border-t-4 border-[#E8001C]">
              <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#E8001C] block mb-2">03</span>
              <h4 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">Structured Coaching & School</h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Weekly altitude conditioning, pacing science, and coordination with teachers to ensure strict academic attendance.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-xl border-t-4 border-[#E8001C]">
              <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#E8001C] block mb-2">04</span>
              <h4 className="font-[var(--font-montserrat)] font-bold text-base text-white mb-2">Championship Exposure</h4>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Full sponsorship for travel, registration, and lodging at prestigious meets like Belgut Marathon and Athletics Kenya cross-countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-black text-3xl text-[#0D0D0D] mb-4">
            Help Us Equip the Next Generation
          </h2>
          <p className="text-[#555] text-base leading-relaxed mb-8 max-w-xl mx-auto">
            A pair of running shoes costs just KES 2,000 ($20), yet it protects a child from injuries and gives them confidence to chase greatness.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
          >
            Sponsor a Young Runner Today
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
