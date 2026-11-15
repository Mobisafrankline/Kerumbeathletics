import Link from "next/link";
import { CONTACT_INFO } from "@/data/siteData";

export default function Contact() {
  return (
    <section className="py-20 bg-offwhite">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Info */}
          <div>
            <p className="section-label">Contact Us</p>
            <h2 className="section-title mb-5">
              Get in <span className="text-red">Touch</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              Whether you want to sponsor an athlete, volunteer your time,
              or simply learn more about our work, we would love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-xs border border-gray-100">
                  <div className="font-heading font-bold text-xs text-red uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="font-body text-charcoal-dark font-semibold hover:text-red transition-colors text-base">
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-charcoal-dark font-semibold text-base">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-red">
              Send Us a Message
            </Link>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
            <h3 className="font-heading font-bold text-xl text-charcoal-dark mb-6">
              Quick Message
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red"
                  />
                </div>
                <div>
                  <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red"
                  />
                </div>
              </div>
              <div>
                <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red"
                />
              </div>
              <div>
                <label className="block font-heading font-bold text-xs text-muted uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red resize-none"
                />
              </div>
              <button type="submit" className="btn-red w-full justify-center">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
