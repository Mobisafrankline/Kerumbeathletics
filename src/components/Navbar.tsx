"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/siteData";
import type { NavLink } from "@/types";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-2.5" : "shadow-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0 bg-white">
            <Image
              src="/images/logo.png"
              alt="Kerumbe Athletics Sports Club Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <span className="block font-[var(--font-montserrat)] font-black text-lg sm:text-xl text-[#0D0D0D] tracking-tight leading-none group-hover:text-[#E8001C] transition-colors">
              KERUMBE
            </span>
            <span className="block font-[var(--font-montserrat)] font-semibold text-[0.62rem] text-[#E8001C] tracking-[2px] uppercase">
              Athletics Sports Club
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link: NavLink) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative font-[var(--font-montserrat)] text-[0.8rem] font-bold uppercase tracking-wider py-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#E8001C] after:transition-all after:duration-200
                  ${
                    isActive
                      ? "text-[#E8001C] after:w-full"
                      : "text-[#1A1A1A] hover:text-[#E8001C] after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/donate"
            className="bg-[#E8001C] text-white px-5 py-2.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-all shadow-[0_4px_12px_rgba(232,0,28,0.25)] hover:shadow-none"
          >
            ❤ Donate
          </Link>
        </div>

        {/* Hamburger Toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-1 rounded hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map((link: NavLink) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-[var(--font-montserrat)] font-bold text-sm uppercase tracking-wider py-1 border-b border-gray-50 flex items-center justify-between ${
                  isActive ? "text-[#E8001C]" : "text-[#1A1A1A] hover:text-[#E8001C]"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="text-[#E8001C] text-xs">●</span>}
              </Link>
            );
          })}
          <Link
            href="/donate"
            className="w-full text-center mt-3 bg-[#E8001C] text-white py-3 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors"
          >
            ❤ Donate to Kerumbe
          </Link>
        </div>
      )}
    </header>
  );
}
