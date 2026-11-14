import type { Metadata } from "next";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { DONATION_TIERS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Ways to Give | Donate to Kerumbe Athletics",
  description:
    "Support gifted young runners in rural Kenya. Donate via M-Pesa (0790 700228) or PayPal (stevegekara04@gmail.com) to provide running shoes, nutrition, coaching, and school fees.",
  alternates: {
    canonical: "https://kerumbeathletics.co.ke/donate",
  },
};

export default function DonatePage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Invest in Potential"
        title="Your Support Transforms a Young"
        highlightedWord="Runner's Future"
        subtitle="100% of your contributions directly fund running shoes, healthy post-run meals, school uniforms, and championship travel for rural student-athletes."
        bgImage="/images/athletes-back.jpg"
        breadcrumbs={[{ label: "Ways to Give" }]}
      />

      {/* Main Payment Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#E8001C]" />
              Direct Giving Channels
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
              How to Send Your <span className="text-[#E8001C]">Contribution</span>
            </h2>
            <p className="text-sm text-[#555] mt-3">
              We accept both local mobile money via M-Pesa and global transfers via PayPal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* M-Pesa Card */}
            <div className="bg-[#0D0D0D] text-white p-8 sm:p-10 rounded-2xl border-t-8 border-[#00B04F] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📱</span>
                    <div>
                      <h3 className="font-[var(--font-montserrat)] font-black text-2xl text-white">
                        M-Pesa (Kenya)
                      </h3>
                      <span className="text-xs text-[#00B04F] font-bold uppercase tracking-wider">
                        Direct Mobile Money
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#00B04F]/20 text-[#00B04F] border border-[#00B04F]/40 text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Instant
                  </span>
                </div>

                <p className="text-xs text-white/75 leading-relaxed mb-6">
                  Use your Safaricom M-Pesa menu to send your gift directly to the club&apos;s registered management line:
                </p>

                <div className="bg-[#1A1A1A] p-5 rounded-xl border border-white/10 space-y-3 mb-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-white/60">Phone / Send Money:</span>
                    <strong className="text-xl font-[var(--font-montserrat)] font-black text-[#00B04F]">
                      0790 700228
                    </strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-white/60">Recipient Name:</span>
                    <strong className="text-white">Steve Makwae Gekara</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">Reference:</span>
                    <strong className="text-white">Kerumbe Athletics</strong>
                  </div>
                </div>
              </div>

              <a
                href="tel:+254790700228"
                className="block text-center bg-[#00B04F] text-white py-3 rounded-lg font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#009241] transition-colors"
              >
                Send via M-Pesa (+254 790 700228)
              </a>
            </div>

            {/* PayPal Card */}
            <div className="bg-[#0D0D0D] text-white p-8 sm:p-10 rounded-2xl border-t-8 border-[#0079C1] shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💳</span>
                    <div>
                      <h3 className="font-[var(--font-montserrat)] font-black text-2xl text-white">
                        PayPal (Global)
                      </h3>
                      <span className="text-xs text-[#0079C1] font-bold uppercase tracking-wider">
                        International & Cards
                      </span>
                    </div>
                  </div>
                  <span className="bg-[#0079C1]/20 text-[#0079C1] border border-[#0079C1]/40 text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Worldwide
                  </span>
                </div>

                <p className="text-xs text-white/75 leading-relaxed mb-6">
                  For supporters in North America, Europe, and globally wishing to send gifts securely via PayPal or Credit Card:
                </p>

                <div className="bg-[#1A1A1A] p-5 rounded-xl border border-white/10 space-y-3 mb-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-white/60">PayPal Address:</span>
                    <strong className="text-sm font-[var(--font-montserrat)] text-[#0079C1] break-all">
                      stevegekara04@gmail.com
                    </strong>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-white/60">Account Holder:</span>
                    <strong className="text-white">Steve Makwae Gekara</strong>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60">Note:</span>
                    <strong className="text-white">Kerumbe Athlete Support</strong>
                  </div>
                </div>
              </div>

              <a
                href="mailto:stevegekara04@gmail.com?subject=Kerumbe Athletics PayPal Donation"
                className="block text-center bg-[#0079C1] text-white py-3 rounded-lg font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#005e94] transition-colors"
              >
                Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Breakdown / Sponsorship Tiers */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
              <span className="w-4 h-0.5 bg-[#E8001C]" />
              Transparency in Giving
            </span>
            <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D]">
              What Your Gift <span className="text-[#E8001C]">Accomplishes</span>
            </h2>
            <p className="text-sm text-[#555] mt-3">
              Every shilling or dollar provides concrete items for student-athletes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {DONATION_TIERS.map((tier) => (
              <div
                key={tier.amountKES}
                className={`bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 flex flex-col justify-between ${
                  tier.popular
                    ? "border-2 border-[#E8001C] ring-4 ring-[#E8001C]/10"
                    : "border-gray-200"
                }`}
              >
                <div>
                  {tier.popular && (
                    <span className="bg-[#E8001C] text-white text-[0.62rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block mb-3">
                      Most Needed
                    </span>
                  )}
                  <div className="text-3xl mb-3">{tier.icon}</div>
                  <span className="block font-[var(--font-montserrat)] font-black text-2xl text-[#0D0D0D]">
                    {tier.amountKES}
                  </span>
                  <span className="block text-xs font-bold text-[#E8001C] mb-3">
                    approx. {tier.amountUSD} USD
                  </span>
                  <h4 className="font-[var(--font-montserrat)] font-bold text-sm text-[#0D0D0D] mb-2">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-[#666] leading-relaxed mb-4">
                    {tier.description}
                  </p>
                </div>

                <a
                  href="tel:+254790700228"
                  className="block text-center text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-[#E8001C] hover:text-[#B30016] pt-3 border-t border-gray-100"
                >
                  Give This Tier →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Kind Donations */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D0D0D] text-white rounded-2xl p-8 sm:p-12 border-l-8 border-[#E8001C]">
            <span className="text-xs font-[var(--font-montserrat)] font-bold uppercase tracking-widest text-[#FF1A35] block mb-2">
              Gear & Equipment Partnership
            </span>
            <h3 className="font-[var(--font-montserrat)] font-black text-2xl sm:text-3xl text-white mb-4">
              Accepting In-Kind Athletic Gear & School Books
            </h3>
            <p className="text-sm text-white/75 leading-relaxed mb-6 font-[var(--font-open-sans)]">
              Are you an athletic club, sports retailer, school, or NGO with running shoes, racing vests, stopwatches, training cones, or educational books? We gratefully accept physical donations and distribute them directly to rural runners in Kericho.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#E8001C] text-white px-6 py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors"
              >
                Arrange In-Kind Shipment
              </Link>
              <a
                href="mailto:stevegekara04@gmail.com?subject=In-Kind Equipment Donation"
                className="text-xs font-[var(--font-montserrat)] font-bold text-white/80 hover:text-white uppercase tracking-wider underline underline-offset-4"
              >
                Email Details to Chairman
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
