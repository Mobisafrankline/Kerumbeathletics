import type { Metadata } from "next";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PROGRAMS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Discover the six pillars of Kerumbe Athletics: gear, coaching, academic support, mentorship, nutrition, and competition access for rural Kenyan runners.",
};

export default function WhatWeDoPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="What We Do"
        subtitle="Six pillars of support that transform rural talent into champions while keeping education at the centre."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
        image="/images/athletes-track.jpg"
      />

      {/* Programs Detail */}
      <section className="py-20 bg-white">
        <div className="container-custom space-y-20">
          {PROGRAMS.map((program, i) => (
            <div
              key={program.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center font-heading font-black text-red text-base mb-5">
                  {program.icon}
                </div>
                <p className="section-label">Pillar {i + 1} of {PROGRAMS.length}</p>
                <h2 className="section-title mb-5">
                  <span className="text-red">{program.title}</span>
                </h2>
                <p className="text-muted text-base leading-relaxed mb-6">{program.description}</p>
                {program.highlights && (
                  <ul className="space-y-3">
                    {program.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-red flex-shrink-0" />
                        <span className="text-charcoal text-sm leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-8">
                  <Link href="/donate" className="btn-red text-xs">
                    Support This Pillar
                  </Link>
                </div>
              </div>
              <div className={`bg-offwhite rounded-2xl p-10 flex items-center justify-center min-h-64 border border-gray-100 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="text-center max-w-sm">
                  <div className="font-heading font-black text-6xl text-red/20 mb-3">{program.icon}</div>
                  <div className="font-heading font-black text-2xl text-charcoal-dark mb-2">{program.title}</div>
                  <p className="text-muted text-xs leading-relaxed">{program.summary}</p>
                  {program.featured && (
                    <span className="mt-4 inline-block bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                      Core Program
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
