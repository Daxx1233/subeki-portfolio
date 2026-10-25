"use client";

import { useState, useMemo } from "react";
import { artworksData, Artwork } from "@/data/artworks";
import ArtworkModal from "@/components/ArtworkModal";

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<number | "ALL">("ALL");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const sortedArtworks = useMemo(() => {
    return [...artworksData].sort((a, b) => a.year - b.year);
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(sortedArtworks.map((a) => a.year)));
    return uniqueYears.sort((a, b) => a - b);
  }, [sortedArtworks]);

  const filteredArtworks = useMemo(() => {
    if (selectedYear === "ALL") return sortedArtworks;
    return sortedArtworks.filter((art) => art.year === selectedYear);
  }, [selectedYear, sortedArtworks]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-neutral-100">
        <h1 className="text-lg font-light tracking-[0.2em] uppercase">
          Artwork Gallery
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest uppercase">
          <button
            onClick={() => setSelectedYear("ALL")}
            className={`pb-1 transition ${
              selectedYear === "ALL"
                ? "text-black border-b border-black font-medium"
                : "text-neutral-400 hover:text-black"
            }`}
          >
            Semua Tahun
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`pb-1 transition ${
                selectedYear === year
                  ? "text-black border-b border-black font-medium"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {filteredArtworks.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArtwork(art)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="bg-neutral-50 aspect-square w-full flex items-center justify-center p-6 overflow-hidden">
              <img
                src={art.image}
                alt={art.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h2 className="text-sm font-normal uppercase tracking-wider text-neutral-900">
                {art.title}
              </h2>
              <p className="text-xs text-neutral-500">{art.year}</p>
              <p className="text-xs text-neutral-400 font-light">
                {art.medium} — {art.dimensions}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </div>
  );
}
