import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { PROGRAMS, STORIES, GALLERY_IMAGES, HERO_STATS } from "@/data/siteData";

export default function Home() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <Hero />
      <TrustStrip />

      {/* 1. Who We Are / About Hub Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Stack */}
            <div className="relative">
              <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-outdoor.jpg"
                  alt="Kerumbe team outdoor debrief session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:right-6 w-3/5 h-52 rounded-xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block">
                <Image
                  src="/images/coaches-street.jpg"
                  alt="Coaches and leadership"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 bg-[#E8001C] text-white px-5 py-3 rounded-lg shadow-lg">
                <span className="block font-[var(--font-montserrat)] font-black text-2xl leading-none">
                  2020
                </span>
                <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/90 mt-0.5">
                  Year Founded
                </span>
              </div>
            </div>

            {/* Narrative */}
            <div>
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Who We Are
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] leading-tight mb-6">
                Bridging the Gap for Kenya&apos;s{" "}
                <span className="text-[#E8001C]">Rural Sports Talent</span>
              </h2>
              <p className="text-[#555] leading-relaxed text-base mb-4 font-[var(--font-open-sans)]">
                Founded by Chairman <strong>Steve Makwae Gekara</strong>, Kerumbe Athletics Sports Club was born from a simple conviction: that Kenya&apos;s most gifted distance runners are found not in elite city academies, but in countryside primary and secondary schools.
              </p>
              <p className="text-[#555] leading-relaxed text-base mb-8 font-[var(--font-open-sans)]">
                We provide complete grassroots support — running shoes, structured coaching, post-workout nutrition, race transport, and academic oversight — ensuring no child sacrifices their education to pursue athletic glory.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l-4 border-[#E8001C] pl-4 bg-[#F5F5F5] p-3 rounded-r">
                  <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
                    🎯 Holistic Support
                  </strong>
                  <p className="text-xs text-[#666] m-0">
                    From running shoes to school uniforms and meals.
                  </p>
                </div>
                <div className="border-l-4 border-[#0D0D0D] pl-4 bg-[#F5F5F5] p-3 rounded-r">
                  <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
                    📚 Education First
                  </strong>
                  <p className="text-xs text-[#666] m-0">
                    Mandatory school enrollment and grade tracking.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="bg-[#E8001C] text-white px-7 py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-md"
                >
                  Read Our Full Story →
                </Link>
                <Link
                  href="/where-we-operate"
                  className="text-xs font-[var(--font-montserrat)] font-bold text-[#0D0D0D] hover:text-[#E8001C] transition-colors uppercase tracking-wider underline underline-offset-4 decoration-[#E8001C]"
                >
                  Where We Operate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Do / Pillars Grid Preview */}
      <section className="py-20 lg:py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#FF1A35] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#FF1A35]" />
                What We Do
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-white">
                Comprehensive Support for <span className="text-[#E8001C]">Every Athlete</span>
              </h2>
              <p className="text-white/60 text-sm mt-2 max-w-xl">
                We address the physical, academic, and mental dimensions of young runners through our 6 core pillars.
              </p>
            </div>
            <Link
              href="/what-we-do"
              className="text-xs font-[var(--font-montserrat)] font-bold text-white hover:text-[#FF1A35] uppercase tracking-wider flex items-center gap-2"
            >
              <span>Explore All 6 Pillars</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => (
              <div
                key={program.id}
                className="bg-[#2B2B2B] p-7 rounded-xl border border-white/5 hover:border-[#E8001C] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-lg text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs text-[#AAAAAA] leading-relaxed mb-6">
                    {program.summary}
                  </p>
                </div>
                <Link
                  href={`/what-we-do#${program.id}`}
                  className="text-xs font-[var(--font-montserrat)] font-bold text-[#E8001C] hover:text-[#FF1A35] uppercase tracking-wider flex items-center gap-1.5 pt-4 border-t border-white/5"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Story & Milestone Highlight */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Major Milestone
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] leading-tight mb-4">
                The 2024 Belgut Marathon:{" "}
                <span className="text-[#E8001C]">Racing Alongside Legends</span>
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-6 font-[var(--font-open-sans)]">
                At the prestigious Belgut Marathon in Kabianga, Kerumbe&apos;s young runners lined up alongside global icons including <strong>Eliud Kipchoge</strong>, <strong>Ezekiel Kemboi</strong>, and <strong>Ferdinand Omanyala</strong>. Crossing the finish line proved that rural talent can match the highest national standards when given proper support.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/stories"
                  className="bg-[#E8001C] text-white px-7 py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-md"
                >
                  Read Athlete Stories →
                </Link>
                <Link
                  href="/gallery"
                  className="border border-gray-300 text-[#0D0D0D] px-6 py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors"
                >
                  View Photo Archives
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kericho-finish.jpg"
                  alt="Kerumbe athletes at the finish line"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-white text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-wider">
                    Belgut Marathon & Kericho Cross Country Finishers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery Preview */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Visual Chronicles
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
                Life on the <span className="text-[#E8001C]">Track & in the Field</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs font-[var(--font-montserrat)] font-bold text-[#E8001C] hover:text-[#B30016] uppercase tracking-wider flex items-center gap-2"
            >
              <span>View Full Gallery (9 Photos)</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.slice(0, 4).map((img, idx) => (
              <Link
                key={idx}
                href="/gallery"
                className="group relative h-64 rounded-xl overflow-hidden bg-gray-200 shadow-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <span className="text-white text-xs font-[var(--font-montserrat)] font-bold">
                    {img.caption}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Ways to Give CTA Card */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A1A1A] p-8 sm:p-14 rounded-3xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-widest text-[#FF1A35] block mb-2">
                Make a Direct Difference
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-white mb-4">
                Sponsor a Runner with Shoes, Meals, or Race Travel
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 font-[var(--font-open-sans)]">
                Just <strong>KES 2,000 ($20)</strong> buys a pair of proper running shoes that protects a child&apos;s feet from injuries during training. We accept M-Pesa locally and PayPal worldwide.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/donate"
                  className="bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
                >
                  Explore Ways to Give →
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 text-white px-6 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  Contact Chairman Steve
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0D0D0D] p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-white">
                    M-Pesa (Kenya)
                  </strong>
                  <span className="text-sm font-bold text-[#00B04F]">
                    0790 700228
                  </span>
                  <span className="block text-[0.7rem] text-white/50">
                    Steve Makwae Gekara / Kerumbe Athletics
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <span className="text-2xl">💳</span>
                <div>
                  <strong className="block text-xs uppercase tracking-wider text-white">
                    PayPal (Worldwide)
                  </strong>
                  <span className="text-sm font-bold text-[#0079C1] break-all">
                    stevegekara04@gmail.com
                  </span>
                  <span className="block text-[0.7rem] text-white/50">
                    International card donations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
      <BackToTop />
    </main>
  );
}
