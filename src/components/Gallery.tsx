"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/siteData";
import type { GalleryImage } from "@/types";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const openLightbox = useCallback((img: GalleryImage) => setLightbox(img), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className="py-24 bg-[#F0F0F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-[var(--font-montserrat)] font-bold text-3xl lg:text-4xl text-[#0D0D0D] leading-tight">
            Moments That Define <span className="text-[#E8001C]">Us</span>
          </h2>
          <p className="text-[#555] max-w-lg mx-auto mt-3 text-sm">
            From the track to the dining table — every moment is part of our athletes&apos; journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[220px] gap-3">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              onClick={() => openLightbox(img)}
              className={`gallery-item relative overflow-hidden rounded cursor-zoom-in group ${
                img.large ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="gallery-overlay">
                <span className="text-white font-[var(--font-montserrat)] font-bold text-xs uppercase tracking-widest">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/92 z-[9999] flex items-center justify-center cursor-zoom-out"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-6 text-white/80 hover:text-white text-4xl bg-none border-none cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="relative w-[90vw] h-[85vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain rounded"
              sizes="90vw"
            />
            <p className="absolute -bottom-8 left-0 right-0 text-center text-white/60 text-sm font-[var(--font-montserrat)]">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-[var(--font-montserrat)] font-bold text-[0.72rem] tracking-[3px] uppercase text-[#E8001C] mb-3">
      <span className="w-5 h-0.5 bg-[#E8001C] inline-block flex-shrink-0" />
      {children}
    </span>
  );
}

