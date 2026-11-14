import type { Metadata } from "next";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { CONTACT_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kerumbe Athletics Sports Club. Reach Chairman Steve Makwae Gekara by phone, email, or through our contact form for sponsorships, partnerships, and inquiries.",
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
        subtitle="Whether you want to sponsor, volunteer, partner, or simply learn more — our door is always open."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image="/images/team-outdoor.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Info Panel */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title mb-6">
                Let&apos;s <span className="text-red">Talk</span>
              </h2>
              <p className="text-muted text-base leading-relaxed mb-10">
                Whether you are an individual, company, or organisation wanting to get
                involved with Kerumbe Athletics, we would love to hear from you.
                Every conversation can change a young runner&apos;s life.
              </p>

              <div className="space-y-4 mb-8">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="bg-offwhite rounded-xl p-5 border border-gray-100">
                    <div className="font-heading font-bold text-xs text-red uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="font-body font-semibold text-charcoal-dark hover:text-red transition-colors text-base">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body font-semibold text-charcoal-dark text-base">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* How to Help */}
              <div className="mt-10 bg-charcoal-dark rounded-2xl p-7 text-white">
                <h3 className="font-heading font-black text-xl mb-4">Ways to Help</h3>
                <ul className="space-y-3">
                  {WAYS_TO_HELP.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-offwhite rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-charcoal-dark mb-7">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+254 ..."
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                    How can we help? *
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors">
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
                  <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us how you would like to get involved..."
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 bg-white font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-red w-full justify-center py-4 text-sm">
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
