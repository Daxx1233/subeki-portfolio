"use client";

import { Artwork } from "@/data/artworks";
import { useEffect } from "react";

interface Props {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function ArtworkModal({ artwork, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 overflow-y-auto"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 text-neutral-500 hover:text-black text-3xl font-light leading-none z-50"
        aria-label="Close detail"
      >
        &times;
      </button>

      <div
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lg:col-span-8 flex items-center justify-center bg-neutral-50 p-4">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        <div className="lg:col-span-4 space-y-5 text-left border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-8">
          <div>
            <h2 className="text-xl font-normal uppercase tracking-wider text-neutral-900">
              {artwork.title}
            </h2>
            <p className="text-sm text-neutral-500 mt-1">{artwork.year}</p>
          </div>

          <div className="space-y-1 text-xs text-neutral-600 uppercase tracking-wider">
            <p>
              <span className="text-neutral-400">Ukuran:</span> {artwork.dimensions}
            </p>
            <p>
              <span className="text-neutral-400">Media:</span> {artwork.medium}
            </p>
          </div>

          {artwork.description && (
            <p className="text-sm text-neutral-700 leading-relaxed font-light pt-2 border-t border-neutral-100">
              {artwork.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
