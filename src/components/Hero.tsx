"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { HERO_SLIDES, HERO_STATS } from "@/data/siteData";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Slideshow */}
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url('${src}')` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,10,10,0.84) 0%, rgba(30,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 pt-20 pb-28 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[rgba(232,0,28,0.2)] border border-[rgba(232,0,28,0.5)] text-white font-[var(--font-montserrat)] text-[0.72rem] font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-6">
            🏆 Kenya&apos;s Grassroots Athletics
          </div>

          <h1 className="font-[var(--font-montserrat)] font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight mb-6">
            Turning Rural{" "}
            <span className="text-[#E8001C]">Talent</span>
            <br />
            Into{" "}
            <span className="text-[#E8001C]">Champions</span>
          </h1>

          <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl">
            Kerumbe Athletics Sports Club nurtures gifted young athletes from Kenya&apos;s
            rural schools — giving them training, education, and a pathway to greatness.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/what-we-do"
              className="bg-[#E8001C] text-white font-[var(--font-montserrat)] font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-[#B30016] transition-colors shadow-lg"
            >
              Our Programs & Pillars →
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/70 text-white font-[var(--font-montserrat)] font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-white/15 hover:border-white transition-colors"
            >
              Ways to Give
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6">
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div className="text-center">
                  <span className="block font-[var(--font-montserrat)] font-black text-3xl text-white">
                    {stat.value}
                  </span>
                  <span className="block text-[0.7rem] font-semibold text-white/60 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                </div>
                {i < HERO_STATS.length - 1 && (
                  <div className="w-px h-12 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#E8001C] w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint absolute bottom-6 right-8 z-20 flex flex-col items-center gap-1 text-white/50 text-[0.65rem] font-[var(--font-montserrat)] tracking-[2px] uppercase">
        <span>Scroll</span>
        <div className="w-4 h-4 border-r-2 border-b-2 border-white/40 rotate-45 mt-1" />
      </div>
    </section>
  );
}

