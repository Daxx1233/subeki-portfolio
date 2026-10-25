"use client";

import { useState } from "react";
import Link from "next/link";
import { artworksData, Artwork } from "@/data/artworks";
import { artistData } from "@/data/artist";
import ArtworkModal from "@/components/ArtworkModal";

export default function HomePage() {
  const featuredArtworks = artworksData.filter((art) => art.featured);
  const slides = featuredArtworks.length > 0 ? featuredArtworks : artworksData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentArt = slides[currentIndex];

  return (
    <div>
      <section className="relative max-w-6xl mx-auto px-6 py-12 md:py-20">
        {currentArt && (
          <div className="relative flex flex-col items-center">
            <div className="w-full flex items-center justify-between gap-4">
              <button
                onClick={prevSlide}
                className="p-3 text-neutral-400 hover:text-black transition text-2xl font-thin select-none"
                aria-label="Previous Artwork"
              >
                &#10094;
              </button>

              <div
                onClick={() => setSelectedArtwork(currentArt)}
                className="cursor-pointer group flex-1 flex justify-center items-center h-[50vh] md:h-[65vh]"
              >
                <img
                  src={currentArt.image}
                  alt={currentArt.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              <button
                onClick={nextSlide}
                className="p-3 text-neutral-400 hover:text-black transition text-2xl font-thin select-none"
                aria-label="Next Artwork"
              >
                &#10095;
              </button>
            </div>

            <div className="w-full max-w-4xl mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex space-x-2 order-2 md:order-1">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-neutral-800 scale-110" : "bg-neutral-300"
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div
                onClick={() => setSelectedArtwork(currentArt)}
                className="text-center md:text-left order-1 md:order-2 cursor-pointer"
              >
                <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-900">
                  {currentArt.title}
                </h2>
                <p className="text-xs text-neutral-600 mt-0.5">{currentArt.year}</p>
                <p className="text-xs text-neutral-500 font-light">{currentArt.medium}</p>
                <p className="text-xs text-neutral-400 font-light">{currentArt.dimensions}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-neutral-100 text-center space-y-6">
        <h1 className="text-xs uppercase tracking-[0.3em] text-neutral-400">
          Identitas Seniman
        </h1>
        <p className="text-base md:text-lg font-light leading-relaxed text-neutral-700">
          {artistData.shortBio}
        </p>
        <div className="pt-4 flex justify-center space-x-6 text-xs uppercase tracking-widest">
          <Link
            href="/gallery"
            className="border border-neutral-900 px-6 py-3 hover:bg-neutral-900 hover:text-white transition"
          >
            Lihat Seluruh Galeri
          </Link>
          <Link
            href="/profile"
            className="border border-neutral-200 px-6 py-3 text-neutral-600 hover:border-neutral-900 hover:text-black transition"
          >
            Biografi Lengkap
          </Link>
        </div>
      </section>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}
