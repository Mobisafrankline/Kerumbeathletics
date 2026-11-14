"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 bg-red">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-lg">
            <h2 className="font-heading font-black text-2xl md:text-3xl mb-2">
              Stay Connected with Kerumbe
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Get updates on our athletes&apos; achievements, upcoming races, donation
              campaigns, and community events directly to your inbox.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white/20 border border-white/30 rounded-xl px-8 py-5 text-white text-center">
              <div className="text-2xl mb-2">&#10003;</div>
              <div className="font-heading font-bold text-sm">Thank you for subscribing!</div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-lg font-body text-sm text-charcoal bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              />
              <button
                type="submit"
                className="bg-charcoal-dark text-white px-7 py-3.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors whitespace-nowrap shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
