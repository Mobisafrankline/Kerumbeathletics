"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { CONTACT_INFO } from "@/data/siteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "sponsorship",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "sponsorship",
        message: "",
      });
    }, 4500);
  };

  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Connect With Us"
        title="We Would Love to"
        highlightedWord="Hear From You"
        subtitle="Have questions about our runners, wish to partner with our school outreach, or want to coordinate a donation? Reach out directly to our leadership."
        bgImage="/images/team-outdoor.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 font-[var(--font-montserrat)] font-bold text-xs tracking-[3px] text-[#E8001C] uppercase mb-3">
                <span className="w-4 h-0.5 bg-[#E8001C]" />
                Direct Channels
              </span>
              <h2 className="font-[var(--font-montserrat)] font-black text-3xl sm:text-4xl text-[#0D0D0D] leading-tight mb-6">
                Our Office & <span className="text-[#E8001C]">Field Base</span>
              </h2>
              <p className="text-[#555] leading-relaxed text-sm mb-8 font-[var(--font-open-sans)]">
                Kerumbe Athletics Sports Club operations are based in Kericho County, Kenya. Our coaches and administrators are active on the ground across schools and training courses throughout the week.
              </p>

              <div className="space-y-6">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8001C]/10 text-[#E8001C] flex items-center justify-center text-xl flex-shrink-0 border border-[#E8001C]/20">
                      {info.icon}
                    </div>
                    <div>
                      <strong className="block font-[var(--font-montserrat)] text-xs uppercase tracking-wider text-[#0D0D0D] mb-0.5">
                        {info.label}
                      </strong>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-semibold text-[#555] hover:text-[#E8001C] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#555] m-0">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder Direct Card */}
              <div className="mt-10 p-6 bg-[#F5F5F5] rounded-xl border-l-4 border-[#E8001C]">
                <strong className="block font-[var(--font-montserrat)] text-sm text-[#0D0D0D] mb-1">
                  Chairman & Founder
                </strong>
                <p className="text-xs text-[#555] leading-relaxed mb-2">
                  <strong>Steve Makwae Gekara</strong> directly oversees talent discovery, donor transparency, and school partnerships.
                </p>
                <a
                  href="mailto:stevegekara04@gmail.com"
                  className="text-xs font-bold text-[#E8001C] uppercase tracking-wider hover:underline"
                >
                  Email Steve Directly →
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0D0D0D] text-white p-8 sm:p-10 rounded-2xl shadow-xl border border-white/5">
                <h3 className="font-[var(--font-montserrat)] font-black text-2xl text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-white/60 mb-6 leading-relaxed">
                  Fill out the form below and our leadership team will respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.72rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Kipchumba"
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:border-[#E8001C] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.72rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:border-[#E8001C] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.72rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:border-[#E8001C] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.72rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-sm text-white focus:border-[#E8001C] outline-none transition-colors"
                      >
                        <option value="sponsorship">Athlete Sponsorship</option>
                        <option value="school">Rural School Partnership</option>
                        <option value="gear">In-Kind Running Gear Donation</option>
                        <option value="coaching">Volunteer Coaching / Mentorship</option>
                        <option value="media">Media & Press Inquiries</option>
                        <option value="other">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-[var(--font-montserrat)] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how you would like to connect or support..."
                      className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:border-[#E8001C] outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 rounded-lg font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
                      submitted
                        ? "bg-[#00B04F] text-white"
                        : "bg-[#E8001C] text-white hover:bg-[#B30016]"
                    }`}
                  >
                    {submitted
                      ? "✓ Message Received! We will be in touch."
                      : "Send Message to Kerumbe"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
