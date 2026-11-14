"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { GALLERY_IMAGES } from "@/data/siteData";
import type { GalleryImage } from "@/types";

const CATEGORIES = [
  { label: "All Photos", value: "all" },
  { label: "Competitions & Races", value: "competition" },
  { label: "Training & School", value: "training" },
  { label: "Welfare & Community", value: "community" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <main>
      <UtilityBar />
      <Navbar />

      <PageHero
        badge="Visual Archives"
        title="Moments That Define"
        highlightedWord="Our Journey"
        subtitle="Explore authentic snapshots of our student-athletes: from rugged training paths and classroom visits to national finish lines."
        bgImage="/images/athletes-back.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* Filter Tabs */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full font-[var(--font-montserrat)] text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-[#E8001C] text-white shadow-md shadow-[#E8001C]/25"
                    : "bg-[#F5F5F5] text-[#555] hover:bg-[#E8001C]/10 hover:text-[#E8001C]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightbox(img)}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in"
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[0.65rem] font-[var(--font-montserrat)] font-bold text-[#FF1A35] uppercase tracking-widest mb-1">
                      Click to Enlarge
                    </span>
                    <h3 className="text-white font-[var(--font-montserrat)] font-bold text-sm">
                      {img.caption}
                    </h3>
                  </div>
                </div>

                <div className="p-4 border-t border-gray-100 bg-white">
                  <p className="text-xs font-[var(--font-montserrat)] font-semibold text-[#0D0D0D]">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-6 right-6 text-white text-3xl font-light hover:text-[#E8001C] transition-colors cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white/10"
            aria-label="Close photo preview"
          >
            ✕
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={activeLightbox.src}
                alt={activeLightbox.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-white text-sm font-[var(--font-montserrat)] font-semibold mt-4 text-center">
              {activeLightbox.caption}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[var(--font-montserrat)] font-black text-3xl text-[#0D0D0D] mb-4">
            Help Us Capture More Historic Moments
          </h2>
          <p className="text-[#555] text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Your donations directly equip these young runners with the uniforms and shoes you see in these photos.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-[#E8001C] text-white px-8 py-3.5 rounded font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-wider hover:bg-[#B30016] transition-colors shadow-lg"
          >
            Donate to Support Our Athletes
          </Link>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
