import { artistData } from "@/data/artist";

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 bg-neutral-50 p-3">
          <img
            src={artistData.profileImage}
            alt={artistData.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="md:col-span-7 space-y-6">
          <div>
            <h1 className="text-2xl font-light tracking-[0.2em] uppercase">
              {artistData.name}
            </h1>
            <p className="text-xs text-neutral-400 tracking-widest uppercase mt-1">
              Perupa — {artistData.birth}
            </p>
          </div>

          <p className="text-sm text-neutral-700 font-light leading-relaxed">
            {artistData.shortBio}
          </p>

          <div className="space-y-4 pt-4 border-t border-neutral-100">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400">
              Catatan Perjalanan Karya
            </h2>
            {artistData.periodNotes.map((item, idx) => (
              <div key={idx} className="text-sm font-light space-y-1">
                <p className="font-medium text-neutral-800">{item.period}</p>
                <p className="text-neutral-600 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-neutral-100">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Pendidikan Seni Rupa
          </h2>
          <ul className="space-y-3 text-sm font-light">
            {artistData.education.map((edu, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-neutral-400 w-12 shrink-0">{edu.year}</span>
                <span className="text-neutral-800">{edu.institution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
            Penghargaan
          </h2>
          <ul className="space-y-3 text-sm font-light">
            {artistData.awards.map((award, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="text-neutral-400 w-12 shrink-0">{award.year}</span>
                <span className="text-neutral-800">{award.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-neutral-100">
        <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-6">
          Pengalaman Pameran (1989 — 2016)
        </h2>
        <ul className="space-y-3 text-sm font-light">
          {artistData.exhibitions.map((ex, idx) => (
            <li key={idx} className="flex gap-4 py-1 border-b border-neutral-50">
              <span className="text-neutral-400 w-12 shrink-0">{ex.year}</span>
              <span className="text-neutral-800">{ex.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
