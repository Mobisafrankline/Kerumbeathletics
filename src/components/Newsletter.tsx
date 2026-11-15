"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-charcoal-dark border-t border-white/10 text-white relative overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Text block */}
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-red font-heading font-bold text-xs uppercase tracking-[2.5px] block mb-2">
              Stay in the Loop
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white mb-3">
              Stay Connected with <span className="text-red">Kerumbe</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Get direct updates on our athletes&apos; championship achievements, upcoming races,
              training camps, and community outreach straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="bg-red/15 border border-red/40 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-red text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  &#10003;
                </div>
                <div className="font-heading font-bold text-base text-white mb-1">
                  Thank You for Subscribing!
                </div>
                <p className="text-gray-300 text-xs">
                  You are now connected with Kerumbe Athletics Sports Club.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-5 py-3.5 rounded-xl font-body text-sm text-charcoal bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red shadow-md"
                />
                <button
                  type="submit"
                  className="bg-red hover:bg-red-dark text-white px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-gray-500 text-[11px] text-center lg:text-left mt-2.5">
              Zero spam. Unsubscribe anytime with one click.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
