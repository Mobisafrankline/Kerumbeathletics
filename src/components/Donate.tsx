"use client";

import { useState } from "react";
import Link from "next/link";

const PRESETS_KES = [500, 1000, 2000, 5000, 10000];
const PRESETS_USD = [5, 10, 20, 50, 100];

export default function Donate() {
  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [amount, setAmount] = useState<number | string>(2000);
  const [copied, setCopied] = useState(false);

  const numericAmount = typeof amount === "string" ? parseFloat(amount) || 0 : amount;

  const getImpactMessage = () => {
    const valInKES = currency === "USD" ? numericAmount * 130 : numericAmount;
    if (valInKES <= 0) {
      return "Every contribution, of any amount, directly supports young rural runners.";
    }
    if (valInKES < 1000) {
      return `Your gift provides post-training hydration, electrolytes, and healthy fruit for an athlete.`;
    }
    if (valInKES < 2000) {
      return `Your gift funds wholesome post-training meals and protein nutrition for a student-athlete.`;
    }
    if (valInKES < 3500) {
      return `Your gift equips a young runner with a quality pair of training shoes for rural dirt roads.`;
    }
    if (valInKES < 5000) {
      return `Your gift provides official racing singlets, team tracksuit, and essential school supplies.`;
    }
    if (valInKES < 15000) {
      return `Your gift sponsors race championship entry fees, travel, meals, and safe lodging.`;
    }
    return `Your generous gift provides comprehensive monthly sponsorship covering gear, schooling, coaching, and nutrition.`;
  };

  const copyNumber = () => {
    navigator.clipboard.writeText("0790700228");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label">Support Our Athletes</p>
          <h2 className="section-title mb-4">
            Donate Any Amount to <span className="text-red">Empower a Champion</span>
          </h2>
          <p className="text-muted text-base leading-relaxed">
            There is no fixed requirement. Every single shilling goes directly toward running shoes,
            coaching, nutritious meals, and keeping student-athletes in school.
          </p>
        </div>

        {/* Custom Donation Calculator Card */}
        <div className="max-w-3xl mx-auto bg-offwhite border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg mb-12">

          {/* Currency Toggle */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div>
              <span className="font-heading font-bold text-sm text-charcoal-dark block">
                Choose Donation Currency
              </span>
              <span className="text-xs text-muted">Select Kenyan Shillings or US Dollars</span>
            </div>
            <div className="inline-flex rounded-lg bg-white p-1 border border-gray-200 shadow-xs">
              <button
                type="button"
                onClick={() => {
                  setCurrency("KES");
                  setAmount(2000);
                }}
                className={`px-4 py-1.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                  currency === "KES"
                    ? "bg-red text-white"
                    : "text-charcoal hover:text-red"
                }`}
              >
                KES (KSh)
              </button>
              <button
                type="button"
                onClick={() => {
                  setCurrency("USD");
                  setAmount(20);
                }}
                className={`px-4 py-1.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                  currency === "USD"
                    ? "bg-red text-white"
                    : "text-charcoal hover:text-red"
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="mb-6">
            <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-3">
              Quick Select Amount
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {(currency === "KES" ? PRESETS_KES : PRESETS_USD).map((preset) => {
                const isSelected = numericAmount === preset;
                return (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={`py-3 px-2 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all duration-150 border ${
                      isSelected
                        ? "bg-red text-white border-red shadow-md"
                        : "bg-white text-charcoal-dark border-gray-200 hover:border-red hover:text-red"
                    }`}
                  >
                    {currency === "KES" ? `KES ${preset.toLocaleString()}` : `$${preset}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Open-Ended Input */}
          <div className="mb-6">
            <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
              Or Enter Any Custom Amount ({currency})
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-heading font-bold text-sm text-gray-500">
                {currency === "KES" ? "KES" : "$"}
              </span>
              <input
                type="number"
                min="1"
                placeholder="Type any custom amount..."
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full pl-16 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white font-heading font-bold text-lg text-charcoal-dark focus:outline-none focus:ring-2 focus:ring-red focus:border-red transition-all"
              />
            </div>
          </div>

          {/* Dynamic Impact Feedback */}
          <div className="p-4 bg-white rounded-xl border border-red/20 mb-8">
            <div className="text-[10px] font-heading font-bold uppercase tracking-wider text-red mb-1">
              Direct Impact of Your Contribution
            </div>
            <p className="text-charcoal-dark text-sm font-medium leading-relaxed">
              {getImpactMessage()}
            </p>
          </div>

          {/* Payment Instructions */}
          <div className="bg-charcoal-dark text-white rounded-2xl p-6 sm:p-7">
            <div className="text-xs font-heading font-bold uppercase tracking-wider text-red mb-2">
              M-Pesa Donation Instructions
            </div>
            <h3 className="font-heading font-black text-xl mb-4">
              Send Directly via M-Pesa
            </h3>

            <div className="space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white/10 p-3.5 rounded-xl gap-2">
                <div>
                  <span className="text-xs text-gray-400 block">Phone / M-Pesa Number</span>
                  <span className="font-heading font-black text-xl text-white tracking-wide">
                    0790 700228
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyNumber}
                  className="self-start sm:self-auto px-4 py-1.5 bg-red hover:bg-red-dark text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  {copied ? "Copied" : "Copy Number"}
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gray-400 block mb-0.5">Account / Recipient Name</span>
                  <span className="font-heading font-bold text-white">Steve Makwae Gekara</span>
                  <span className="text-gray-400 block text-[11px]">(Chairman &amp; Founder)</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-gray-400 block mb-0.5">Payment Reference / Note</span>
                  <span className="font-heading font-bold text-white">Kerumbe Donation</span>
                  <span className="text-gray-400 block text-[11px]">Optional: Your Name</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+254790700228"
                className="btn-red text-xs py-3 px-6"
              >
                Call to Confirm Donation
              </a>
              <Link
                href="/donate"
                className="btn-outline border-white text-white hover:bg-white hover:text-charcoal-dark text-xs py-3 px-6"
              >
                All Donation Options
              </Link>
            </div>
          </div>
        </div>

        {/* Transparency Footnote */}
        <div className="text-center text-xs text-muted max-w-xl mx-auto">
          Kerumbe Athletics Sports Club operates with strict financial accountability.
          Every donation goes directly to athlete gear, transport, meals, and education fees.
        </div>
      </div>
    </section>
  );
}
