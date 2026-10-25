export interface Artwork {
  id: string;
  title: string;
  year: number;
  dimensions: string;
  medium: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const artworksData: Artwork[] = [
  {
    id: "ekspresi-awal-2007",
    title: "Eksplorasi Emosi & Semangat",
    year: 2007,
    dimensions: "Ukuran bervariasi",
    medium: "Mixed media on canvas",
    description:
      "Masih dalam emosi dan semangat yang tinggi, aku sangat menikmati berkarya seperti ini.",
    image: "/images/artworks/biografi-2007-1.jpg",
    featured: false,
  },
  {
    id: "idiom-lokal-2008",
    title: "Idiom Lokal dalam Minimalis",
    year: 2008,
    dimensions: "Ukuran bervariasi",
    medium: "Acrylic / Mixed media on canvas",
    description:
      "Akhir tahun 2008 idealisku mulai terkikis oleh bom minimalis, dan kumasukkanlah idiom lokal, jadilah karya seperti ini.",
    image: "/images/artworks/biografi-2008-2.jpg",
    featured: true,
  },
  {
    id: "edisi-minimalis-2009",
    title: "Seri Objek Minimalis",
    year: 2009,
    dimensions: "Ukuran bervariasi",
    medium: "Cat minyak / Akrilik di atas kanvas",
    description:
      "Edisi 2009-2013. Masa ini booming gaya minimalis, pengaruh itu sangat kuat mempengaruhiku.",
    image: "/images/artworks/edisi-2009-2013.jpg",
    featured: false,
  },
  {
    id: "sketsa-bermain-bola-2010",
    title: "Sketsa Bermain Bola",
    year: 2010,
    dimensions: "15 x 15 cm",
    medium: "Tinta di atas kertas HVS",
    description:
      "Masih dalam pengaruh bom minimalis, sketsa pun jadi begini. Sketsa ini kukerjakan setelah melihat siswa-siswaku bermain bola, kubuat di atas kertas HVS ukuran 15x15 cm (Periode 2009-2013).",
    image: "/images/artworks/sketsa-bola-2009.jpg",
    featured: false,
  },
  {
    id: "gresik-berhias-2015",
    title: "Gresik Berhias",
    year: 2015,
    dimensions: "Triptych (3 Panel)",
    medium: "Acrylic / Mixed media on canvas",
    description:
      "Karya tiga panel (triptych) yang merepresentasikan dinamika visual dan abstraksi ruang kota Gresik.",
    image: "/images/artworks/gresik-berhias-2015.jpg",
    featured: true,
  },
  {
    id: "budaya-identitas-bangsa-2015",
    title: "Budaya Identitas Bangsa",
    year: 2015,
    dimensions: "135 x 135 cm",
    medium: "Mixed media on canvas",
    description:
      "Eksplorasi tekstur, warna, dan figur-figur kultural Nusantara sebagai refleksi atas jati diri dan identitas bangsa.",
    image: "/images/artworks/budaya-identitas-2015.jpg",
    featured: true,
  },
];
