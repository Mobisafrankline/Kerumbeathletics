import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Where We Operate | Nyamira, Kisii, Kericho & Bomet",
  description:
    "Kerumbe Athletics Sports Club (Kierumba Athletic) operates high-altitude running camps and school partnerships based in Nyamira County, actively scouting and developing student-athletes across Kisii, Kericho, and Bomet Counties in Kenya.",
  keywords: [
    "kierumba athletic where we operate",
    "kerumbe athletics locations",
    "nyamira athletics training",
    "kisii youth runners",
    "kericho athletics camp",
    "bomet high altitude running",
  ],
  alternates: { canonical: "https://www.kerumbeathletic.com/where-we-operate" },
};

export default function WhereWeOperatePage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Where We Operate"
        subtitle="From the high-altitude hills of Nyamira County to neighboring regions, we bring athletics to Kenya's rural heartland."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Where We Operate" }]}
        image="/images/athletes-track.jpg"
      />

      {/* Map info */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="section-label">Our Geographic Reach</p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-4 sm:mb-6">
                High-Altitude <span className="text-red">Nyamira Highland</span> Athletics
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Kenya&apos;s greatest endurance runners have historically emerged from the high-altitude
                regions of the Rift Valley and Kenyan Highlands, and Kerumbe Athletics is rooted in this same
                legendary running country. Our primary base and headquarters is in <strong>Nyamira County</strong>,
                with active operations and talent pipelines across <strong>Nyamira, Kisii, Kericho, and Bomet Counties</strong>.
              </p>

              <div className="space-y-4 sm:space-y-5">
                {[
                  {
                    county: "Nyamira County",
                    desc: "Primary Base & Headquarters. We work directly with rural primary and secondary schools across Nyamira, identifying gifted distance runners and providing running gear, nutrition, and academic support.",
                    primary: true,
                  },
                  {
                    county: "Kericho County",
                    desc: "Rift Valley High-Altitude Circuit. High-altitude conditioning and competition participation in major championships including the Belgut Marathon - 2026 and Kericho Marathon - 2026.",
                    primary: false,
                  },
                  {
                    county: "Kisii County",
                    desc: "Highland Endurance Pipeline. School outreach programs providing underprivileged student-athletes with footwear, uniforms, and mentorship.",
                    primary: false,
                  },
                  {
                    county: "Bomet County",
                    desc: "Rift Valley Talent Development. Scouting and supporting gifted young middle-distance and cross-country runners from rural communities.",
                    primary: false,
                  },
                ].map((area) => (
                  <div key={area.county} className={`p-5 sm:p-6 rounded-xl border-l-4 ${area.primary ? "border-red bg-red/5" : "border-gray-200 bg-offwhite"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-red flex-shrink-0" />
                      <h3 className="font-heading font-black text-base sm:text-lg text-charcoal-dark">{area.county}</h3>
                      {area.primary && (
                        <span className="bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ml-auto">
                          Primary Base
                        </span>
                      )}
                    </div>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/kericho-college.jpg" alt="Kericho Teachers Training College" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/75 backdrop-blur-xs text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg">
                  Kericho Teachers Training College
                </div>
              </div>
              <div className="relative h-52 sm:h-56 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/belgut-finish-gantry.jpg" alt="Belgut Marathon 2026 Finish" fill className="object-cover" />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-black/75 backdrop-blur-xs text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg">
                  Belgut Marathon - 2026 &amp; Kericho Marathon - 2026
                </div>
              </div>

              <div className="bg-charcoal-dark rounded-2xl p-6 sm:p-7 text-white">
                <h3 className="font-heading font-black text-lg mb-3">Highland Altitude Advantage</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Nyamira County sits at approximately 1,900m to 2,100m above sea level in the
                  Kenyan Highlands, offering ideal natural altitude that builds exceptional cardiovascular endurance
                  and red blood cell efficiency. Our athletes train in this natural high-performance
                  environment every day.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="font-heading font-black text-2xl sm:text-3xl text-red">2,100m</div>
                    <div className="text-gray-400 text-xs mt-1">Training Altitude</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 sm:p-4 text-center">
                    <div className="font-heading font-black text-2xl sm:text-3xl text-red">4</div>
                    <div className="text-gray-400 text-xs mt-1">Counties Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-red text-white text-center">
        <div className="container-custom">
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Help Us Expand Our Reach</h2>
          <p className="text-white/85 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            There are hundreds more talented young runners in rural Kenya waiting to be discovered.
            Your support helps us reach more schools, more counties, more champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/donate" className="bg-white text-red px-7 py-3.5 rounded font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-md">
              Support Our Expansion
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-7 py-3.5 rounded font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
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
