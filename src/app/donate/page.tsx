"use client";

import { useState } from "react";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { DONATION_TIERS } from "@/data/siteData";

const PRESETS_KES = [500, 1000, 2000, 3500, 5000, 15000];
const PRESETS_USD = [5, 10, 20, 35, 50, 150];

export default function DonatePage() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [customAmount, setCustomAmount] = useState<number | string>(2000);
  const [copied, setCopied] = useState(false);

  const numeric = typeof customAmount === "string" ? parseFloat(customAmount) || 0 : customAmount;

  const getImpactMessage = () => {
    const val = currency === "USD" ? numeric * 130 : numeric;
    if (val <= 0) return "Every shilling contributed directly supports a young runner in need.";
    if (val < 1000) return "Provides nutritious high-protein snacks, hydration, and electrolytes during training.";
    if (val < 2000) return "Covers a full week of wholesome recovery meals and fresh fruit for an athlete.";
    if (val < 3500) return "Funds a durable pair of running shoes for training safely on rugged dirt roads.";
    if (val < 5000) return "Provides full competition racing gear, club tracksuit, and academic textbooks.";
    if (val < 15000) return "Covers regional championship registration, safe travel, meals, and lodging.";
    return "Provides full monthly sponsorship: gear, coaching, school fees, meals, and competition travel.";
  };

  const copyNumber = () => {
    navigator.clipboard.writeText("0790700228");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Support Our Athletes"
        subtitle="Give any amount to fund running shoes, coaching, nutritious meals, and education for rural Kenyan runners."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ways to Give" }]}
        image="/images/kericho-finish.jpg"
      />

      {/* Interactive Custom Donation Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-label">Open-Ended Giving</p>
            <h2 className="section-title mb-4">
              Choose or Enter <span className="text-red">Any Amount</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Whether you give KES 200 or KES 20,000, your contribution makes a direct difference.
              There are no minimums and no hidden fees.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-offwhite border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg mb-16">

            {/* Currency Switcher */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div>
                <span className="font-heading font-bold text-sm text-charcoal-dark block">
                  Select Currency
                </span>
                <span className="text-xs text-muted">Kenyan Shillings (KES) or US Dollars (USD)</span>
              </div>
              <div className="inline-flex rounded-lg bg-white p-1 border border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("KES");
                    setCustomAmount(2000);
                  }}
                  className={`px-4 py-1.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                    currency === "KES" ? "bg-red text-white" : "text-charcoal hover:text-red"
                  }`}
                >
                  KES (KSh)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("USD");
                    setCustomAmount(20);
                  }}
                  className={`px-4 py-1.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                    currency === "USD" ? "bg-red text-white" : "text-charcoal hover:text-red"
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mb-6">
              <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-3">
                Quick Select Suggested Amount
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {(currency === "KES" ? PRESETS_KES : PRESETS_USD).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setCustomAmount(val)}
                    className={`py-3 px-2 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all border ${
                      numeric === val
                        ? "bg-red text-white border-red shadow-md"
                        : "bg-white text-charcoal-dark border-gray-200 hover:border-red hover:text-red"
                    }`}
                  >
                    {currency === "KES" ? `KES ${val.toLocaleString()}` : `$${val}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount Field */}
            <div className="mb-6">
              <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                Or Enter Your Own Custom Amount ({currency})
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-heading font-bold text-base text-gray-500">
                  {currency === "KES" ? "KES" : "$"}
                </span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter any amount you wish to donate..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-16 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white font-heading font-bold text-xl text-charcoal-dark focus:outline-none focus:ring-2 focus:ring-red focus:border-red"
                />
              </div>
            </div>

            {/* Impact feedback */}
            <div className="p-4 bg-white rounded-xl border border-red/20 mb-8">
              <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-red mb-1">
                Your Donation Impact
              </div>
              <p className="text-charcoal-dark text-sm font-medium leading-relaxed">
                {getImpactMessage()}
              </p>
            </div>

            {/* Direct M-Pesa Instruction */}
            <div className="bg-charcoal-dark text-white rounded-2xl p-6 sm:p-8">
              <div className="text-xs font-heading font-bold uppercase tracking-wider text-red mb-2">
                Payment Option 1: Mobile Money
              </div>
              <h3 className="font-heading font-black text-2xl mb-4">
                Send via M-Pesa to Chairman Steve Makwae
              </h3>

              <div className="bg-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5">
                <div>
                  <span className="text-xs text-gray-400 block">M-Pesa Number</span>
                  <span className="font-heading font-black text-2xl text-white tracking-wide">
                    0790 700228
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyNumber}
                  className="px-4 py-2 bg-red hover:bg-red-dark text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  {copied ? "Copied" : "Copy Number"}
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs mb-6">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="text-gray-400 block">Name on Account</span>
                  <span className="font-heading font-bold text-white text-sm">Steve Makwae Gekara</span>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <span className="text-gray-400 block">Reference / Account</span>
                  <span className="font-heading font-bold text-white text-sm">Kerumbe Donation</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+254790700228" className="btn-red text-xs py-3 px-6">
                  Call Chairman Steve
                </a>
              </div>
            </div>

          </div>

          {/* Suggested Sponsorship Programs */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <p className="section-label">Suggested Programs</p>
            <h3 className="font-heading font-black text-2xl text-charcoal-dark">
              Specific Giving Programs
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {DONATION_TIERS.map((tier) => (
              <div
                key={tier.title}
                className={`card border p-8 flex flex-col ${
                  tier.popular ? "border-red ring-2 ring-red relative" : "border-gray-100"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red text-white text-[10px] font-heading font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="font-heading font-black text-2xl text-red mb-1">{tier.amountKES}</div>
                <div className="text-muted text-xs mb-4">{tier.amountUSD}</div>
                <h4 className="font-heading font-bold text-base text-charcoal-dark mb-2">{tier.title}</h4>
                <p className="text-muted text-xs leading-relaxed flex-1 mb-6">{tier.description}</p>
                <button
                  type="button"
                  onClick={() => {
                    const clean = parseInt(tier.amountKES.replace(/\D/g, "")) || 2000;
                    setCustomAmount(clean);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className={`w-full py-2.5 rounded font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                    tier.popular
                      ? "bg-red text-white hover:bg-red-dark"
                      : "border-2 border-red text-red hover:bg-red hover:text-white"
                  }`}
                >
                  Select This Program
                </button>
              </div>
            ))}
          </div>

          {/* International & Bank Transfers */}
          <div className="bg-offwhite rounded-3xl p-8 sm:p-10 border border-gray-200 max-w-3xl mx-auto">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-red mb-2">
              Payment Option 2: Bank &amp; International
            </div>
            <h3 className="font-heading font-black text-2xl text-charcoal-dark mb-3">
              Bank Wire, PayPal &amp; Corporate CSR
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              For direct bank transfers, international wire transfers, or corporate sponsorships,
              please reach out to us and we will provide our bank account details and official receipt.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:stevegekara04@gmail.com?subject=Corporate or International Donation - Kerumbe Athletics"
                className="btn-red"
              >
                Email For Bank Details
              </a>
              <a
                href="tel:+254790700228"
                className="btn-outline"
              >
                Call +254 790 700228
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
