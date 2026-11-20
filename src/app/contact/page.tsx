import type { Metadata } from "next";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { CONTACT_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us & Donations Inquiries | Chairman Steve Makwae",
  description:
    "Get in touch with Kerumbe Athletics Sports Club (Kierumba Athletic). Direct phone, WhatsApp, and M-Pesa line: +254 790 700228 (Chairman Steve Makwae Gekara). PayPal: stevegekara04@gmail.com. Based in Nyamira County, Kenya.",
  keywords: [
    "contact kierumba athletic",
    "contact kerumbe athletics",
    "steve makwae gekara phone",
    "0790700228",
    "stevegekara04@gmail.com",
    "sponsor kerumbe athletics",
  ],
  alternates: { canonical: "https://www.kerumbeathletic.com/contact" },
};

const WAYS_TO_HELP = [
  "Sponsor an athlete on a monthly basis",
  "Donate running gear, track shoes, or uniforms",
  "Fund post-run recovery nutrition & team meals",
  "Provide volunteer coaching or youth mentorship",
  "Corporate partnership & CSR community sponsorship",
];

export default function ContactPage() {
  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Contact Us"
        subtitle="Whether you want to sponsor, volunteer, partner, or simply learn more, our door is always open."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/team-outdoor.jpg"
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Info Panel */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-charcoal-dark leading-tight mb-4 sm:mb-6">
                Let&apos;s <span className="text-red">Talk</span>
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Whether you are an individual, company, or organisation wanting to get
                involved with Kerumbe Athletics, we would love to hear from you.
                Every conversation can change a young runner&apos;s life.
              </p>

              <div className="space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="bg-offwhite rounded-xl p-4 sm:p-5 border border-gray-100">
                    <div className="font-heading font-bold text-[10.5px] sm:text-xs text-red uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="font-body font-semibold text-charcoal-dark hover:text-red transition-colors text-sm sm:text-base break-words">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body font-semibold text-charcoal-dark text-sm sm:text-base">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* How to Help */}
              <div className="mt-8 bg-charcoal-dark rounded-2xl p-5 sm:p-7 text-white">
                <h3 className="font-heading font-black text-lg sm:text-xl mb-3.5">Ways to Help</h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {WAYS_TO_HELP.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-offwhite rounded-2xl p-5 sm:p-8 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal-dark mb-5 sm:mb-7">Send a Message</h3>
              <form className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block font-heading font-bold text-[11px] text-muted uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-[11px] text-muted uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-bold text-[11px] text-muted uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 ..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-heading font-bold text-[11px] text-muted uppercase tracking-wider mb-1.5">
                    How can we help? *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors">
                    <option value="">Select a topic</option>
                    <option>Athlete Sponsorship</option>
                    <option>Equipment Donation</option>
                    <option>Corporate Partnership</option>
                    <option>Volunteer / Coaching</option>
                    <option>Media / Press Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block font-heading font-bold text-[11px] text-muted uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how you would like to get involved..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-red w-full justify-center py-3.5 text-xs sm:text-sm shadow-md">
                  Send Message &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
