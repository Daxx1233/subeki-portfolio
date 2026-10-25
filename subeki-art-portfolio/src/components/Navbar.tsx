"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { artistData } from "@/data/artist";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Biography", href: "/profile" },
    { label: "Artwork", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg md:text-xl font-light tracking-[0.25em] text-neutral-900 uppercase"
        >
          {artistData.name}
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider transition-colors pb-1 ${
                  isActive
                    ? "text-black border-b-2 border-black font-medium"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-800 focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-b border-neutral-100 px-6 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-wider ${
                pathname === item.href ? "text-black font-semibold" : "text-neutral-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
