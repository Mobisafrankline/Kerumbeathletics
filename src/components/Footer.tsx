import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white">

      {/* CTA Strip */}
      <div className="bg-red py-8 sm:py-10">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white mb-1.5">
              Ready to Empower a Champion?
            </h3>
            <p className="text-white/85 text-xs sm:text-sm max-w-xl">
              Your support gives a young Kenyan runner proper running shoes, meals, and education.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
            <Link
              href="/donate"
              className="bg-white text-red px-6 sm:px-7 py-3 rounded font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors text-center shadow-md"
            >
              Donate Now
            </Link>
            <a
              href="tel:+254790700228"
              className="border-2 border-white text-white px-6 sm:px-7 py-3 rounded font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/15 transition-colors text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-14 border-b border-white/10">
        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-white/20 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Kerumbe Athletics Sports Club"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block font-heading font-black text-xl text-white tracking-tight">
                  KERUMBE
                </span>
                <span className="block font-heading font-semibold text-[10px] text-red tracking-[2px] uppercase">
                  Athletics Sports Club
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering gifted young runners from rural Kenya with coaching,
              gear, nutrition, education, and opportunity since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-[2px] text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red text-sm font-body transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-[2px] text-white mb-5">
              Our Programs
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Equipment & Running Gear",
                "Structured Training",
                "Academic Support",
                "Youth Mentorship",
                "Nutrition & Welfare",
                "Competition Access",
              ].map((p) => (
                <li key={p}>
                  <Link href="/what-we-do" className="hover:text-red transition-colors duration-200 hover:pl-1 inline-block">
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-[2px] text-white mb-5">
              Contact &amp; Giving
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-400 block text-xs">Primary Base</span>
                <span className="text-gray-200">Nyamira County, Kenya (Active in Kisii, Kericho &amp; Bomet)</span>
              </li>
              <li>
                <span className="text-gray-400 block text-xs">Phone</span>
                <a href="tel:+254790700228" className="text-gray-200 hover:text-red transition-colors">
                  +254 790 700228
                </a>
              </li>
              <li>
                <span className="text-gray-400 block text-xs">Email</span>
                <a href="mailto:stevegekara04@gmail.com" className="text-gray-200 hover:text-red transition-colors">
                  stevegekara04@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-2.5">
              {/* M-Pesa Card */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-bold text-[10px] text-emerald-400 uppercase tracking-wider">
                    M-Pesa (Kenya)
                  </span>
                  <span className="bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded">
                    M-PESA
                  </span>
                </div>
                <div className="font-heading font-black text-lg text-white">0790 700228</div>
                <div className="text-gray-400 text-[10.5px]">Steve Makwae Gekara</div>
              </div>

              {/* PayPal Card */}
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading font-bold text-[10px] text-[#0079C1] uppercase tracking-wider">
                    PayPal (Global)
                  </span>
                  <div className="flex items-center gap-1 bg-[#003087] text-white px-1.5 py-0.5 rounded">
                    <svg className="w-3 h-3 fill-current text-[#0079C1]" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.789.789 0 0 1 .778-.658h6.812c3.486 0 6.04 1.344 5.753 5.437-.306 4.364-2.88 6.438-6.19 6.438H8.814l-.995 5.67a.64.64 0 0 1-.743.73z" />
                    </svg>
                    <span className="font-heading font-bold text-[9px]">PayPal</span>
                  </div>
                </div>
                <div className="font-heading font-bold text-xs text-white break-all">stevegekara04@gmail.com</div>
                <div className="text-gray-400 text-[10.5px]">Global Card &amp; Balance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {year} Kerumbe Athletics Sports Club. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Nyamira County, Kenya &bull;{" "}
            <a href="mailto:stevegekara04@gmail.com" className="hover:text-red transition-colors">
              stevegekara04@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
