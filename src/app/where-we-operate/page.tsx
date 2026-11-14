import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Where We Operate | Grassroots Footprint | Kerumbe Athletics",
  description:
    "Discover the geographical footprint of Kerumbe Athletics across Kericho County, Belgut Sub-county, Kabianga, and rural primary and secondary schools in Kenya's high-altitude Great Rift Valley.",
  alternates: {
    canonical: "https://kerumbeathletics.co.ke/where-we-operate",
  },
};

export default function WhereWeOperatePage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Geographic Reach"
        title="Rooted in Kenya's"
        highlightedWord="High-Altitude Highlands"
        subtitle="Our operational footprint centers in Kericho County and the Rift Valley highlands — the renowned cradle of global distance running."
        bgImage="/images/community-group.png"
        breadcrumbs={[{ label: "Where We Operate" }]}
      />

      {/* Overview Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Grassroots Foothold
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] leading-tight mb-6">
                From Rural Ridges to{" "}
                <span className="text-[#E8001C]">Championship Podiums</span>
              </h2>
              <p className="text-[#555] leading-relaxed text-base mb-4 font-[var(--font-open-sans)]">
                Kerumbe Athletics Sports Club is headquartered in <strong>Kericho County</strong>, in the South Rift region of Kenya. Sitting at an altitude of over 2,000 meters (6,600 feet) above sea level, Kericho offers an optimal natural aerobic training climate characterized by clean mountain air, rolling green hills, and red-clay running paths.
              </p>
              <p className="text-[#555] leading-relaxed text-base mb-6 font-[var(--font-open-sans)]">
                Our outreach extends directly into the heart of rural communities — into schools located in <strong>Belgut Sub-county</strong>, <strong>Kabianga</strong>, and neighboring rural hamlets. Here, children routinely run five to ten kilometers daily over hilly terrain simply to attend classes. We partner with these communities to channel this organic stamina into structured, educated sporting excellence.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#F5F5F5] p-4 rounded text-center border-b-2 border-[#E8001C]">
                  <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#0D0D0D] block">
                    2,100m+
                  </span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#777] block mt-1">
                    Altitude Training
                  </span>
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded text-center border-b-2 border-[#E8001C]">
                  <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#0D0D0D] block">
                    12+
                  </span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#777] block mt-1">
                    Partner Schools
                  </span>
                </div>
                <div className="bg-[#F5F5F5] p-4 rounded text-center border-b-2 border-[#E8001C] col-span-2 sm:col-span-1">
                  <span className="font-[var(--font-montserrat)] font-black text-2xl text-[#0D0D0D] block">
                    Kericho
                  </span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#777] block mt-1">
                    Main Base
                  </span>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/community-group.png"
                  alt="Kerumbe community outreach in rural Kenya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0D0D0D] text-white p-5 rounded-lg border-l-4 border-[#E8001C] shadow-2xl max-w-xs">
                <strong className="block font-[var(--font-montserrat)] text-xs uppercase tracking-wider text-[#E8001C] mb-1">
                  Community-First Model
                </strong>
                <p className="text-xs text-white/80 leading-relaxed m-0">
                  We work closely with parents, elders, and school boards to maintain trust and protect the child&apos;s welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Operational Hubs */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#E8001C]" />
              Regional Focus
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
              Our Primary Operational <span className="text-[#E8001C]">Zones</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Zone 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#E8001C] flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">🏞️</span>
                <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-2">
                  Belgut & Kabianga Region
                </h3>
                <p className="text-xs font-bold text-[#E8001C] uppercase tracking-wider mb-4">
                  Competition & Long Runs
                </p>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Home of the prestigious Belgut Marathon, this region serves as our primary endurance proving ground. Here our runners train on elevation gradients that build unmatched cardiovascular capacity.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#777]">
                Key focus: Long distance (10km - Half Marathon), hill repeats.
              </div>
            </div>

            {/* Zone 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#0D0D0D] flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">🏫</span>
                <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-2">
                  Rural Primary & Secondary Schools
                </h3>
                <p className="text-xs font-bold text-[#E8001C] uppercase tracking-wider mb-4">
                  Talent Discovery & Education
                </p>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Our talent scouting and welfare teams regularly visit rural schools to provide school-shoe checks, identify potential runners, and supply running uniforms and books to student-athletes.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#777]">
                Key focus: Youth intake (Ages 10–18), academic monitoring.
              </div>
            </div>

            {/* Zone 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#E8001C] flex flex-col justify-between">
              <div>
                <span className="text-3xl mb-4 block">🏟️</span>
                <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-2">
                  Kericho Municipal Track & Circuit
                </h3>
                <p className="text-xs font-bold text-[#E8001C] uppercase tracking-wider mb-4">
                  Speed Work & Official Time Trials
                </p>
                <p className="text-sm text-[#555] leading-relaxed mb-4">
                  Utilized for interval training, sprint mechanics, and Athletics Kenya cross-country trials. Our athletes test their progress against standard race distances before traveling to national championships.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 text-xs text-[#777]">
                Key focus: Pacing cadence, 800m - 5,000m speed refinement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Visuals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/kericho-college.jpg"
                alt="Kerumbe at Kericho Teachers College"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-wider">
                  Kericho Teachers College Partnership
                </span>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/kids-meal.jpg"
                alt="Nutrition and youth care in rural school"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-wider">
                  Community Nutrition & Welfare Sessions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D0D0D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-white mb-4">
            Expand Our Reach to More Rural Schools
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Hundreds of gifted children are still waiting for their first pair of running shoes and a chance to compete. Your support helps us expand to new schools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
            >
              Support an Outreach School
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/60 text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Partner as a School
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
