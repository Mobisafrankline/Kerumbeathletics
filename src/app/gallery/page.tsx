"use client";

import { useState } from "react";
import Image from "next/image";
import UtilityBar from "@/components/UtilityBar";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { GALLERY_IMAGES } from "@/data/siteData";

const CATEGORIES = [
  { id: "all", label: "All Photos" },
  { id: "competition", label: "Competitions" },
  { id: "training", label: "Training" },
  { id: "community", label: "Community & Education" },
];

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
        image="/images/belgut-finish-gantry.jpg"
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-custom">

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10 sm:mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  cat === c.id
                    ? "bg-red text-white shadow-md scale-105"
                    : "bg-offwhite text-charcoal border border-gray-200 hover:border-red hover:text-red"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid - responsive 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className={`gallery-item relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 h-64 sm:h-80 lg:h-72" : "h-60 sm:h-64 lg:h-72"
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
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox} alt="Gallery" width={1400} height={900} className="object-contain w-full max-h-[85vh]" />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center text-2xl transition-colors cursor-pointer"
            aria-label="Close lightbox"
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
