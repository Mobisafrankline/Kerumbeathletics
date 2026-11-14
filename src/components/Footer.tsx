import Image from "next/image";
import { NAV_LINKS } from "@/data/siteData";

const PROGRAM_LINKS = [
  "Training & Coaching",
  "Equipment & Gear",
  "Academic Support",
  "Mentorship",
  "Welfare & Nutrition",
  "Competition Access",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] pt-16">
      <div className="max-w-6xl mx-auto px-6 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-sm flex-shrink-0 bg-white">
              <Image
                src="/images/logo.png"
                alt="Kerumbe Athletics Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="block font-[var(--font-montserrat)] font-black text-[1rem] text-white tracking-wide">KERUMBE</span>
              <span className="block font-[var(--font-montserrat)] font-semibold text-[0.6rem] text-[#E8001C] tracking-[2px] uppercase">Athletics Sports Club</span>
            </div>
          </div>
          <p className="text-[#AAAAAA] text-sm leading-relaxed mb-5">
            Nurturing Kenya&apos;s rural running talent — one stride at a time.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://kerumbeathletics.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/8 text-[#AAAAAA] px-3 py-1.5 rounded text-xs font-[var(--font-montserrat)] font-semibold hover:bg-[#E8001C] hover:text-white transition-all"
            >
              🌐 Website
            </a>
            <a
              href="mailto:stevegekara04@gmail.com"
              className="bg-white/8 text-[#AAAAAA] px-3 py-1.5 rounded text-xs font-[var(--font-montserrat)] font-semibold hover:bg-[#E8001C] hover:text-white transition-all"
            >
              ✉ Email
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#AAAAAA] text-sm hover:text-[#E8001C] hover:pl-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5">Programs</h4>
          <ul className="space-y-2.5">
            {PROGRAM_LINKS.map((p) => (
              <li key={p}>
                <a href="#programs" className="text-[#AAAAAA] text-sm hover:text-[#E8001C] hover:pl-1 transition-all duration-200">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Donate */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5">Support a Runner</h4>
          <p className="text-[#AAAAAA] text-sm mb-1">
            M-Pesa: <strong className="text-[#E8001C]">0790 700228</strong>
          </p>
          <p className="text-[#AAAAAA] text-sm mb-5">
            PayPal: <strong className="text-white">stevegekara04@gmail.com</strong>
          </p>
          <a
            href="#donate"
            className="inline-block bg-[#E8001C] text-white font-[var(--font-montserrat)] font-bold px-5 py-2.5 rounded text-sm hover:bg-[#B30016] transition-colors"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#555]">
        <p>© 2025 Kerumbe Athletics Sports Club. All rights reserved.</p>
        <p>
          Kericho County, Kenya &nbsp;|&nbsp;{" "}
          <a href="https://kerumbeathletics.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-[#E8001C]">
            kerumbeathletics.co.ke
          </a>
        </p>
      </div>
    </footer>
  );
}

