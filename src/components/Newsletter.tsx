"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#F0F0F0] py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0D0D0D]">
            Stay in the <span className="text-[#E8001C]">Loop</span>
          </h2>
          <p className="text-[#555] text-sm mt-1 max-w-sm">
            Get updates on our athletes&apos; performances, upcoming events, and how your support is making a difference.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex gap-3 flex-1 max-w-md min-w-[280px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 border-2 border-transparent bg-white rounded focus:border-[#E8001C] outline-none text-sm font-[var(--font-open-sans)] transition-colors"
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded font-[var(--font-montserrat)] font-bold text-sm text-white transition-all duration-300 whitespace-nowrap
              ${submitted ? "bg-green-600" : "bg-[#E8001C] hover:bg-[#B30016]"}`}
          >
            {submitted ? "✓ Subscribed!" : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}

