import { artistData } from "@/data/artist";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-center space-y-10">
      <div className="space-y-2">
        <h1 className="text-xl font-light tracking-[0.25em] uppercase">
          Contact
        </h1>
        <p className="text-xs text-neutral-400 tracking-widest uppercase">
          Informasi Studio & Korespondensi Karya
        </p>
      </div>

      <div className="space-y-6 text-sm font-light text-neutral-700 py-8 border-y border-neutral-100">
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
            Alamat Studio
          </p>
          <p>{artistData.address}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
            Telepon / WhatsApp
          </p>
          <p>{artistData.phone}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
            Email
          </p>
          <p>
            <a
              href={`mailto:${artistData.email}`}
              className="underline hover:text-black"
            >
              {artistData.email}
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-4 text-xs uppercase tracking-widest">
        <a
          href={`https://wa.me/${artistData.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-neutral-900 px-6 py-3 hover:bg-neutral-900 hover:text-white transition"
        >
          Hubungi via WhatsApp
        </a>
        <a
          href={`mailto:${artistData.email}`}
          className="border border-neutral-200 px-6 py-3 text-neutral-600 hover:border-neutral-900 hover:text-black transition"
        >
          Kirim Email
        </a>
      </div>
    </div>
  );
}
