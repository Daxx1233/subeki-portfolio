import { artistData } from "@/data/artist";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2 text-xs md:text-sm text-neutral-300 font-light tracking-wide">
          <p>
            <a href={`mailto:${artistData.email}`} className="hover:text-white transition">
              {artistData.email}
            </a>
          </p>
          <p>{artistData.phone}</p>
          <p className="text-neutral-400">{artistData.address}</p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <span className="text-lg tracking-[0.25em] font-light uppercase">
            {artistData.name}
          </span>
          <div className="flex items-center space-x-5 text-xs tracking-widest text-neutral-400 uppercase">
            <a
              href={`mailto:${artistData.email}`}
              className="hover:text-white transition"
            >
              Email
            </a>
            <span>•</span>
            <a
              href={`https://wa.me/${artistData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
