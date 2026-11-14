"use client";

import { useState } from "react";
import Image from "next/image";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { GALLERY_IMAGES } from "@/data/siteData";

const CATEGORIES = ["all", "competition", "training", "community"];

export default function GalleryPage() {
  const [cat, setCat] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    cat === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === cat);

  return (
    <main>
      <UtilityBar />
      <Navbar />
      <PageHero
        title="Photo Gallery"
        subtitle="Every image tells the story of a young Kenyan runner chasing their dream."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        image="/images/athletes-back.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container-custom">

          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                  cat === c
                    ? "bg-red text-white shadow-lg"
                    : "bg-offwhite text-charcoal hover:bg-red hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className={`gallery-item relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  i === 0 ? "col-span-2 h-80" : "h-56"
                }`}
                onClick={() => setLightbox(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="gallery-overlay">
                  <div>
                    <span className="text-white text-xs font-heading font-bold uppercase tracking-wider">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Gallery" width={1400} height={900} className="object-contain w-full max-h-[85vh]" />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-11 h-11 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center text-2xl transition-colors"
          >
            &times;
          </button>
        </div>
      )}

      <Footer />
      <BackToTop />
    </main>
  );
}
