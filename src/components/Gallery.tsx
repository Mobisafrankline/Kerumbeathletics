"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES } from "@/data/siteData";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-offwhite">
      <div className="container-custom">

        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="section-label">Photo Gallery</p>
          <h2 className="section-title mb-4">
            Moments That <span className="text-red">Define Us</span>
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            From pre-dawn training sessions to championship finish lines —
            glimpses of the Kerumbe journey.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {preview.map((img, i) => (
            <div
              key={img.src}
              className={`gallery-item relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${
                i === 0 ? "col-span-2 h-72" : "h-48"
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
                <span className="text-white font-heading font-bold text-xs uppercase tracking-wider">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn-red mx-auto">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] rounded-xl overflow-hidden">
            <Image
              src={lightbox}
              alt="Gallery photo"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center text-xl transition-colors"
            aria-label="Close lightbox"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}
