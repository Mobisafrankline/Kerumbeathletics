import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, PROGRAMS } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/10">
        {/* Brand Info */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-sm flex-shrink-0 bg-white">
              <Image
                src="/images/logo.png"
                alt="Kerumbe Athletics Sports Club Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="block font-[var(--font-montserrat)] font-black text-lg text-white tracking-tight leading-none group-hover:text-[#E8001C] transition-colors">
                KERUMBE
              </span>
              <span className="block font-[var(--font-montserrat)] font-semibold text-[0.62rem] text-[#E8001C] tracking-[2px] uppercase">
                Athletics Sports Club
              </span>
            </div>
          </Link>
          <p className="text-[#AAAAAA] text-sm leading-relaxed mb-6 max-w-sm">
            Kerumbe Athletics Sports Club was founded by Chairman Steve Makwae Gekara to discover, coach, equip, and sponsor talented young runners in Kenya&apos;s rural schools — ensuring every champion excels both on the track and in the classroom.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://kerumbeathletics.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/8 text-[#CCCCCC] px-3.5 py-1.5 rounded text-xs font-[var(--font-montserrat)] font-semibold hover:bg-[#E8001C] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>🌐</span>
              <span>kerumbeathletics.co.ke</span>
            </a>
            <a
              href="mailto:stevegekara04@gmail.com"
              className="bg-white/8 text-[#CCCCCC] px-3.5 py-1.5 rounded text-xs font-[var(--font-montserrat)] font-semibold hover:bg-[#E8001C] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>✉</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#E8001C]" />
            Organization
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#AAAAAA] text-sm hover:text-[#E8001C] hover:pl-1 transition-all duration-200 block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pillars / What We Do */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#E8001C]" />
            Our Pillars
          </h4>
          <ul className="space-y-2.5">
            {PROGRAMS.map((prog) => (
              <li key={prog.id}>
                <Link
                  href="/what-we-do"
                  className="text-[#AAAAAA] text-sm hover:text-[#E8001C] hover:pl-1 transition-all duration-200 block"
                >
                  {prog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Ways to Give */}
        <div>
          <h4 className="font-[var(--font-montserrat)] font-bold text-xs text-white uppercase tracking-widest mb-5 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#E8001C]" />
            Ways to Give
          </h4>
          <p className="text-[#AAAAAA] text-xs leading-relaxed mb-3">
            Directly sponsor shoes, meals, and race access for young runners:
          </p>
          <div className="bg-[#1A1A1A] p-3.5 rounded border border-white/5 mb-4">
            <p className="text-xs text-white/70 mb-1">
              📱 M-Pesa: <strong className="text-[#E8001C]">0790 700228</strong>
            </p>
            <p className="text-xs text-white/70">
              💳 PayPal: <span className="text-white font-medium">stevegekara04@gmail.com</span>
            </p>
          </div>
          <Link
            href="/donate"
            className="block text-center bg-[#E8001C] text-white font-[var(--font-montserrat)] font-bold px-4 py-2.5 rounded text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-md"
          >
            Sponsor an Athlete
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#777]">
        <p>© {new Date().getFullYear()} Kerumbe Athletics Sports Club. All rights reserved.</p>
        <p>
          Kericho County, Kenya &nbsp;|&nbsp;{" "}
          <Link href="/contact" className="hover:text-[#E8001C] underline">
            Get in touch
          </Link>
        </p>
      </div>
    </footer>
  );
}
