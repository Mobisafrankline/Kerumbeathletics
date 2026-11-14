"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_INFO } from "@/data/siteData";
import type { ContactInfo } from "@/types";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Info */}
        <div>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-[#0D0D0D] mb-4">
            Contact <span className="text-[#E8001C]">Kerumbe</span>
          </h2>
          <p className="text-[#555] leading-relaxed mb-8">
            Whether you want to support us, partner with us, or learn more about our work
            — we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-5">
            {CONTACT_INFO.map((info: ContactInfo) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#E8001C] rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <strong className="block font-[var(--font-montserrat)] text-xs uppercase tracking-wide text-[#0D0D0D]">
                    {info.label}
                  </strong>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-[#555] hover:text-[#E8001C] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#555] m-0">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F5F5F5] rounded-xl p-8"
        >
          <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0D0D0D] mb-6">
            Send a Message
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="col-span-1 px-4 py-3 bg-white border-2 border-transparent rounded focus:border-[#E8001C] outline-none text-sm transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="col-span-1 px-4 py-3 bg-white border-2 border-transparent rounded focus:border-[#E8001C] outline-none text-sm transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 bg-white border-2 border-transparent rounded focus:border-[#E8001C] outline-none text-sm mb-4 block transition-colors"
          />
          <textarea
            placeholder="Your message..."
            rows={5}
            required
            className="w-full px-4 py-3 bg-white border-2 border-transparent rounded focus:border-[#E8001C] outline-none text-sm mb-5 resize-y block transition-colors"
          />
          <button
            type="submit"
            className={`w-full py-3 rounded font-[var(--font-montserrat)] font-bold text-sm text-white transition-all duration-300
              ${submitted ? "bg-green-600" : "bg-[#E8001C] hover:bg-[#B30016]"}`}
          >
            {submitted ? "✓ Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-[var(--font-montserrat)] font-bold text-[0.72rem] tracking-[3px] uppercase text-[#E8001C] mb-3">
      <span className="w-5 h-0.5 bg-[#E8001C] inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

