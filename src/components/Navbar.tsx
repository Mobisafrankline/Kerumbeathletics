"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
          scrolled ? "shadow-md py-2" : "shadow-sm py-2.5 md:py-3"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Kerumbe Athletics Sports Club"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="leading-tight flex-shrink-0">
              <span className="block font-heading font-black text-base sm:text-lg text-charcoal-dark tracking-tight group-hover:text-red transition-colors duration-200">
                KERUMBE
              </span>
              <span className="block font-heading font-bold text-[9px] text-red tracking-[1.8px] uppercase">
                Athletics Sports Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Clean, Single-line, No Wrapping, No Dash */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-2 flex-shrink min-w-0">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 font-heading font-bold text-[10.5px] xl:text-[11px] 2xl:text-[11.5px] uppercase tracking-wide whitespace-nowrap rounded-md transition-all duration-150 ${
                    isActive
                      ? "text-red bg-red/5"
                      : "text-charcoal-dark hover:text-red hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/donate"
              className="bg-red hover:bg-red-dark text-white px-4 py-2 rounded font-heading font-bold text-[11px] xl:text-xs uppercase tracking-wider transition-colors duration-150 shadow-sm whitespace-nowrap"
            >
              Donate
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block w-5 h-0.5 bg-charcoal-dark transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-charcoal-dark transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-charcoal-dark transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/images/logo.png"
                alt="Kerumbe Athletics"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <span className="block font-heading font-black text-sm text-charcoal-dark">KERUMBE</span>
              <span className="block font-heading font-bold text-[8.5px] text-red tracking-[1.5px] uppercase">Athletics Sports Club</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-charcoal text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-3">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 mx-2 font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-red bg-red/10"
                    : "text-charcoal-dark hover:text-red hover:bg-gray-50"
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-red" />}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-2.5">
          <Link
            href="/donate"
            className="block w-full text-center bg-red hover:bg-red-dark text-white py-3 rounded font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Donate to Kerumbe
          </Link>
          <div className="text-center">
            <a
              href="tel:+254790700228"
              className="text-muted hover:text-charcoal-dark font-body text-xs font-semibold"
            >
              Tel: +254 790 700228
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`${scrolled ? "h-14" : "h-16"} transition-all duration-200`} />
    </>
  );
}
