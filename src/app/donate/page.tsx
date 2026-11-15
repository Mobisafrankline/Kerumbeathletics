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
  const [copiedPaypal, setCopiedPaypal] = useState(false);

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

  const copyPaypal = () => {
    navigator.clipboard.writeText("stevegekara04@gmail.com");
    setCopiedPaypal(true);
    setTimeout(() => setCopiedPaypal(false), 2000);
  };

  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Support Our Athletes"
        subtitle="Give any amount to fund running shoes, coaching, nutritious meals, and education for rural Kenyan runners."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ways to Give" }]}
        image="/images/belgut-finish-gantry.jpg"
      />

      {/* Interactive Custom Donation Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="section-label">Open-Ended Giving</p>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-3 sm:mb-4">
              Choose or Enter <span className="text-red">Any Amount</span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Whether you give KES 200 or KES 20,000, your contribution makes a direct difference.
              There are no minimums and no hidden fees.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="max-w-3xl mx-auto bg-offwhite border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-lg mb-12 sm:mb-16">

            {/* Currency Switcher */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-200">
              <div>
                <span className="font-heading font-bold text-sm text-charcoal-dark block">
                  Select Currency
                </span>
                <span className="text-xs text-muted">Kenyan Shillings (KES) or US Dollars (USD)</span>
              </div>
              <div className="inline-flex rounded-xl bg-white p-1 border border-gray-200 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("KES");
                    setCustomAmount(2000);
                  }}
                  className={`px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    currency === "KES" ? "bg-red text-white shadow-sm" : "text-charcoal hover:text-red"
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
                  className={`px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    currency === "USD" ? "bg-red text-white shadow-sm" : "text-charcoal hover:text-red"
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
                    className={`py-2.5 sm:py-3 px-2 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all border cursor-pointer ${
                      numeric === val
                        ? "bg-red text-white border-red shadow-md scale-102"
                        : "bg-white text-charcoal-dark border-gray-200 hover:border-red hover:text-red"
                    }`}
                  >
                    {currency === "KES" ? `${val.toLocaleString()}` : `$${val}`}
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
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-heading font-bold text-sm sm:text-base text-gray-500">
                  {currency === "KES" ? "KES" : "$"}
                </span>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter any amount you wish to donate..."
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full pl-16 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white font-heading font-bold text-lg sm:text-xl text-charcoal-dark focus:outline-none focus:ring-2 focus:ring-red focus:border-red"
                />
              </div>
            </div>

            {/* Impact feedback */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-red/25 mb-6 sm:mb-8 shadow-xs">
              <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-red mb-1">
                Your Donation Impact
              </div>
              <p className="text-charcoal-dark text-xs sm:text-sm font-medium leading-relaxed">
                {getImpactMessage()}
              </p>
            </div>

            {/* Payment Options Grid (M-Pesa & PayPal) */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">

              {/* Option 1: M-Pesa */}
              <div className="bg-charcoal-dark text-white rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                      Mobile Money
                    </span>
                    {/* M-Pesa Icon */}
                    <div className="flex items-center gap-1.5 bg-emerald-600 text-white font-black text-xs px-2.5 py-1 rounded">
                      <span>M-PESA</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl text-white mb-2 leading-tight">
                    Send via Safaricom M-Pesa
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    Direct local contribution to Chairman Steve Makwae Gekara for immediate athlete welfare.
                  </p>

                  <div className="bg-white/10 p-3.5 rounded-xl mb-4">
                    <span className="text-[10px] text-gray-400 block uppercase font-heading font-semibold">M-Pesa Number</span>
                    <span className="font-heading font-black text-2xl text-white tracking-wider">
                      0790 700228
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-300 mb-5">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400">Account Name:</span>
                      <span className="font-bold text-white">Steve Makwae Gekara</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Reference:</span>
                      <span className="font-bold text-white">Kerumbe Donation</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={copyNumber}
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow"
                  >
                    <span>{copied ? "Copied!" : "Copy Number"}</span>
                  </button>
                  <a
                    href="tel:+254790700228"
                    className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* Option 2: PayPal */}
              <div className="bg-charcoal-dark text-white rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#0079C1] bg-[#0079C1]/10 border border-[#0079C1]/20 px-2.5 py-1 rounded-full">
                      International Giving
                    </span>
                    {/* Official PayPal Badge & SVG */}
                    <div className="flex items-center gap-1 bg-[#003087] text-white px-2.5 py-1 rounded shadow-sm">
                      <svg className="w-4 h-4 fill-current text-[#0079C1]" viewBox="0 0 24 24">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.789.789 0 0 1 .778-.658h6.812c3.486 0 6.04 1.344 5.753 5.437-.306 4.364-2.88 6.438-6.19 6.438H8.814l-.995 5.67a.64.64 0 0 1-.743.73z" />
                        <path d="M9.814 14.937l1.042-5.937h2.898c2.977 0 4.885 1.157 4.545 4.793-.306 3.267-2.316 4.887-5.185 4.887h-2.557a.64.64 0 0 1-.743-.743v-3z" fill="#0079C1" />
                      </svg>
                      <span className="font-heading font-bold text-xs tracking-tight">PayPal</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-black text-xl text-white mb-2 leading-tight">
                    Send via PayPal
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">
                    Send donations securely from anywhere in the world using your PayPal balance or credit/debit card.
                  </p>

                  <div className="bg-white/10 p-3.5 rounded-xl mb-4">
                    <span className="text-[10px] text-gray-400 block uppercase font-heading font-semibold">PayPal Email</span>
                    <span className="font-heading font-bold text-base sm:text-lg text-white break-all tracking-wide">
                      stevegekara04@gmail.com
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-300 mb-5">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400">Recipient Name:</span>
                      <span className="font-bold text-white">Steve Makwae Gekara</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Supported:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9.5px] font-bold text-gray-200">Visa</span>
                        <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9.5px] font-bold text-gray-200">Mastercard</span>
                        <span className="px-1.5 py-0.5 bg-white/10 rounded text-[9.5px] font-bold text-gray-200">Amex</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={copyPaypal}
                    className="flex-1 py-3 px-4 bg-[#0079C1] hover:bg-[#005ea6] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5 shadow"
                  >
                    <span>{copiedPaypal ? "Email Copied!" : "Copy PayPal Email"}</span>
                  </button>
                  <a
                    href="mailto:stevegekara04@gmail.com?subject=PayPal Donation to Kerumbe Athletics"
                    className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
                  >
                    Email
                  </a>
                </div>
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

          {/* Option 3: Bank Transfers & Corporate CSR */}
          <div className="bg-offwhite rounded-3xl p-6 sm:p-10 border border-gray-200 max-w-3xl mx-auto shadow-sm">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-red mb-2">
              Payment Option 3: Direct Bank Wire &amp; Corporate Giving
            </div>
            <h3 className="font-heading font-black text-2xl text-charcoal-dark mb-3">
              Official Bank Wire &amp; CSR Sponsorships
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              For direct bank deposits, institutional wire transfers, or corporate CSR partnerships,
              please reach out to Chairman Steve Makwae Gekara for official bank account details and tax receipts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:stevegekara04@gmail.com?subject=Corporate or International Donation - Kerumbe Athletics"
                className="btn-red justify-center text-center"
              >
                Email For Bank Wire Details
              </a>
              <a
                href="tel:+254790700228"
                className="btn-outline justify-center text-center"
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
