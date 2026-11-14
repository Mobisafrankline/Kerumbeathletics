"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/data/siteData";
import type { NavLink } from "@/types";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        if (window.scrollY >= (sec as HTMLElement).offsetTop - 120) {
          current = sec.id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0 bg-white">
            <Image
              src="/images/logo.png"
              alt="Kerumbe Athletics Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <span className="block font-[var(--font-montserrat)] font-black text-[1.1rem] text-[#0D0D0D] tracking-wide leading-none group-hover:text-[#E8001C] transition-colors">
              KERUMBE
            </span>
            <span className="block font-[var(--font-montserrat)] font-semibold text-[0.6rem] text-[#E8001C] tracking-[2px] uppercase">
              Athletics Sports Club
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link: NavLink) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative font-[var(--font-montserrat)] text-[0.78rem] font-semibold uppercase tracking-wide pb-1 transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#E8001C] after:transition-all after:duration-200
                  ${isActive
                    ? "text-[#E8001C] after:w-full"
                    : "text-[#1A1A1A] hover:text-[#E8001C] after:w-0 hover:after:w-full"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] rounded transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-[var(--font-montserrat)] font-semibold text-sm uppercase tracking-wide text-[#1A1A1A] hover:text-[#E8001C] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

