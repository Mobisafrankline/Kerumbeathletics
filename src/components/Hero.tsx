"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_SLIDES, HERO_STATS } from "@/data/siteData";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    setLoaded(true);
    const id = setInterval(nextSlide, 5500);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[100svh] lg:h-[calc(100vh-4rem)] lg:min-h-[660px] lg:max-h-[900px] flex flex-col justify-between overflow-hidden bg-black">
      {/* Background Slides with Next.js Image component */}
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <Image
            src={src}
            alt="Kerumbe Athletics runners in action"
            fill
            priority={i === 0}
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Dynamic Gradients for cinematic readability while letting the photos shine */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 z-[1] pointer-events-none" />

      {/* Red accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red z-20 pointer-events-none" />

      {/* Main Hero Content */}
      <div
        className={`relative z-10 container-custom flex-1 flex flex-col justify-center pt-20 pb-6 sm:pt-28 sm:pb-10 lg:py-16 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-3xl">
          {/* Status Badge with Live Pulsing Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white px-3.5 py-1.5 rounded-full mb-4 sm:mb-6 transition-colors shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[1.5px] sm:tracking-[2px]">
              Grassroots Athletics Club &bull; Nyamira County, Kenya
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight mb-4 sm:mb-5 text-shadow">
            Turning Rural{" "}
            <span className="text-red drop-shadow-md">Running Talent</span>{" "}
            Into Champions
          </h1>

          {/* Subheading (No dashes) */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Kerumbe Athletics Sports Club discovers, trains, and equips gifted
            young runners from Kenya&apos;s rural schools, providing them with gear,
            nutrition, coaching, and a bright academic future.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <Link
              href="/donate"
              className="bg-red hover:bg-red-dark text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 rounded-lg transition-all duration-200 shadow-xl text-center flex items-center justify-center gap-2 group"
            >
              <span>Support Our Athletes</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white hover:text-charcoal-dark border border-white/30 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 px-7 rounded-lg transition-all duration-200 backdrop-blur-sm text-center shadow-lg"
            >
              Discover Our Story
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-gray-300 font-heading font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red" />
              100% Student Education Centered
            </span>
            <span className="hidden sm:inline text-white/30">&bull;</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red" />
              Active in Nyamira, Kisii, Kericho &amp; Bomet
            </span>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Controls */}
      <div className="hidden sm:flex items-center justify-between absolute left-4 right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 hover:bg-red text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-200 cursor-pointer text-lg hover:scale-105"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="pointer-events-auto w-10 h-10 rounded-full bg-black/40 hover:bg-red text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all duration-200 cursor-pointer text-lg hover:scale-105"
        >
          &#8250;
        </button>
      </div>

      {/* Slide Index & Dots Indicator */}
      <div className="absolute right-4 sm:right-8 bottom-28 sm:bottom-28 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
        <span className="text-[10px] font-heading font-bold text-gray-300 tracking-wider">
          0{current + 1} / 0{HERO_SLIDES.length}
        </span>
        <div className="flex items-center gap-1.5 pl-1.5 border-l border-white/20">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? "w-5 bg-red" : "w-1.5 bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Stats Dock */}
      <div className="relative z-20 w-full bg-black/90 backdrop-blur-xl border-t border-white/15">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="py-3 px-2 sm:py-4 sm:px-4 md:py-5 md:px-6 text-center group hover:bg-white/5 transition-colors">
                <div className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-red leading-none mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider mb-0.5">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-[9.5px] sm:text-[10.5px] hidden sm:block">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
