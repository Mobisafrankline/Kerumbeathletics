import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Where We Operate",
  description:
    "Kerumbe Athletics operates primarily in Kericho County, Rift Valley Kenya, reaching athletes across rural primary and secondary schools.",
};

export default function WhereWeOperatePage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Where We Operate"
        subtitle="From the high-altitude hills of Kericho to neighboring Rift Valley counties, we bring athletics to Kenya's rural heartland."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Where We Operate" }]}
        image="/images/athletes-track.jpg"
      />

      {/* Map info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-label">Our Geographic Reach</p>
              <h2 className="section-title mb-6">
                High-Altitude <span className="text-red">Rift Valley</span> Athletics
              </h2>
              <p className="text-muted text-base leading-relaxed mb-8">
                Kenya&apos;s greatest runners have historically emerged from the high-altitude
                regions of the Rift Valley — and Kerumbe Athletics is rooted in this same
                legendary running country. We operate primarily in Kericho County, with
                outreach programs extending into neighboring counties.
              </p>

              <div className="space-y-5">
                {[
                  {
                    county: "Kericho County",
                    desc: "Our primary home base. We work with rural primary and secondary schools throughout Kericho, including direct partnerships with local headteachers and sports coordinators.",
                    primary: true,
                  },
                  {
                    county: "Bomet County",
                    desc: "Talent identification outreach programs reach schools in Bomet, bringing promising young runners into our training network.",
                    primary: false,
                  },
                  {
                    county: "Rift Valley Region (Broader)",
                    desc: "We actively scout talent from across the broader Rift Valley corridor, participating in inter-county athletics competitions.",
                    primary: false,
                  },
                ].map((area) => (
                  <div key={area.county} className={`p-6 rounded-xl border-l-4 ${area.primary ? "border-red bg-red/5" : "border-gray-200 bg-offwhite"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-red flex-shrink-0" />
                      <h3 className="font-heading font-black text-lg text-charcoal-dark">{area.county}</h3>
                      {area.primary && (
                        <span className="bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ml-auto">
                          Primary Base
                        </span>
                      )}
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/kericho-college.jpg" alt="Kericho Teachers Training College" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg">
                  Kericho Teachers Training College
                </div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/kericho-finish.jpg" alt="Kericho Cross Country" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg">
                  Kericho Cross Country Championships
                </div>
              </div>

              <div className="bg-charcoal-dark rounded-2xl p-6 text-white">
                <h3 className="font-heading font-black text-lg mb-4">Training Altitude Advantage</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Kericho sits at approximately 2,100m above sea level in the Rift Valley
                  Highlands — the same altitude that has produced generations of world-class
                  Kenyan distance runners. Our athletes train in this natural high-performance
                  environment every day.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-heading font-black text-2xl text-red">2,100m</div>
                    <div className="text-gray-400 text-xs mt-1">Training Altitude</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="font-heading font-black text-2xl text-red">3+</div>
                    <div className="text-gray-400 text-xs mt-1">Counties Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red text-white text-center">
        <div className="container-custom">
          <h2 className="font-heading font-black text-3xl mb-4">Help Us Expand Our Reach</h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            There are hundreds more talented young runners in rural Kenya waiting to be discovered.
            Your support helps us reach more schools, more counties, more champions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="bg-white text-red px-7 py-3 rounded font-heading font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Support Our Expansion
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3 rounded font-heading font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
