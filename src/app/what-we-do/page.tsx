import type { Metadata } from "next";
import Image from "next/image";
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

const PILLAR_IMAGES = [
  { src: "/images/belgut-runner-medal.jpg", caption: "Gear & Equipment Support" },
  { src: "/images/athletes-track.jpg", caption: "Structured Daily Training" },
  { src: "/images/kericho-college.jpg", caption: "Academic Mentorship" },
  { src: "/images/belgut-kemboi-2026.jpg", caption: "Mentorship with Olympic Champion Ezekiel Kemboi" },
  { src: "/images/team-meal.jpg", caption: "Athlete Recovery Nutrition" },
  { src: "/images/belgut-finish-gantry.jpg", caption: "Championship Competition Access" },
];

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
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom space-y-14 sm:space-y-20">
          {PROGRAMS.map((program, i) => {
            const photo = PILLAR_IMAGES[i] || PILLAR_IMAGES[0];
            return (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  i % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center font-heading font-black text-red text-sm mb-4">
                    {program.icon}
                  </div>
                  <p className="section-label">Pillar {i + 1} of {PROGRAMS.length}</p>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-4">
                    <span className="text-red">{program.title}</span>
                  </h2>
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">{program.description}</p>
                  {program.highlights && (
                    <ul className="space-y-2.5 mb-6">
                      {program.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-red flex-shrink-0" />
                          <span className="text-charcoal text-xs sm:text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="pt-2">
                    <Link href="/donate" className="btn-red w-full sm:w-auto text-xs justify-center text-center">
                      Support This Pillar
                    </Link>
                  </div>
                </div>

                <div className={`relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide bg-black/60 backdrop-blur-xs px-3 py-1 rounded-lg">
                      {photo.caption}
                    </span>
                    {program.featured && (
                      <span className="bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                        Core Program
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
