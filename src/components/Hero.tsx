"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HERO_SLIDES, HERO_STATS } from "@/data/siteData";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] lg:h-[calc(100vh-4rem)] lg:min-h-[640px] lg:max-h-[880px] flex flex-col justify-between overflow-hidden">
      {/* Background Slides */}
      {HERO_SLIDES.map((src, i) => (
        <div
          key={src}
          className="hero-slide"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Gradient Overlays for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Red accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red z-20 pointer-events-none" />

      {/* Main Content Area */}
      <div
        className={`relative z-10 container-custom flex-1 flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-12 lg:py-16 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5 shadow-md">
            <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-[1.5px] sm:tracking-[2px]">
              Kenya&apos;s Grassroots Athletics Club
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.12] tracking-tight mb-4 sm:mb-5 text-shadow">
            Turning Rural{" "}
            <span className="text-red">Running Talent</span>{" "}
            Into Champions
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Kerumbe Athletics Sports Club discovers, trains, and equips gifted
            young runners from Kenya&apos;s rural schools — giving them gear,
            nutrition, coaching, and a future.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="/about"
              className="btn-red justify-center text-center text-xs sm:text-sm py-3 sm:py-3.5 px-6 shadow-xl"
            >
              Discover Our Story
            </Link>
            <Link
              href="/donate"
              className="btn-outline justify-center text-center text-xs sm:text-sm py-3 sm:py-3.5 px-6 border-white text-white hover:bg-white hover:text-charcoal-dark shadow-xl"
            >
              Support Our Athletes
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots (Hidden on small mobile to keep screen clean) */}
      <div className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 flex-col gap-2.5 bg-black/30 backdrop-blur-xs p-2 rounded-full">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-red scale-125" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Bottom Stats Bar - In-flow at bottom of flex container so it NEVER covers buttons */}
      <div className="relative z-20 w-full bg-black/85 backdrop-blur-md border-t border-white/15">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="py-3 px-2 sm:py-4 sm:px-4 md:py-5 md:px-6 text-center">
                <div className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-red leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-white font-heading font-bold text-[10px] sm:text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
