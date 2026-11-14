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
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center container-custom py-16 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red/90 text-white px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-heading font-bold uppercase tracking-[2px]">
              Kenya&#39;s Grassroots Athletics Club
            </span>
          </div>

          <h1 className="section-title-white mb-5 text-shadow">
            Turning Rural{" "}
            <span className="text-red">Running Talent</span>{" "}
            Into Champions
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            Kerumbe Athletics Sports Club discovers, trains, and equips gifted
            young runners from Kenya&apos;s rural schools — giving them gear,
            nutrition, coaching, and a future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="btn-red">
              Discover Our Story
            </Link>
            <Link href="/donate" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal-dark">
              Support Our Athletes
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-white/10">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="px-6 py-5 text-center">
                  <div className="font-heading font-black text-2xl md:text-3xl text-red leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white font-heading font-bold text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-red scale-125" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
