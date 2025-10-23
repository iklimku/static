"use client";

import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";
import { MainCarousel } from "@/components/organisms/MainCarousel";
import { HighlightsCarousel } from "@/components/organisms/HighlightsCarousel";
import SearchBar from "@/components/organisms/SearchBar";
import { Sectorals } from "@/components/organisms/Sectorals";
import Loading from "@/components/organisms/Loading";

// URL gambar Jumbotron Anda
const HERO_BACKGROUND_IMAGE =
  "url(https://akcdn.detik.net.id/visual/2024/03/19/gedung-bmkg-1_169.jpeg?w=650&q=90)";

export default function Home() {
  <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center">
    <h1 className="text-3xl font-bold mb-6">
      Selamat Datang di Portal Iklim BMKG
    </h1>
    <p className="text-gray-600 mb-6 max-w-lg">
      Temukan informasi iklim, cuaca, dan lingkungan dari berbagai sumber BMKG.
    </p>
    <SearchBar
      variant="landing"
      placeholder="Cari prediksi, glosarium, FAQ..."
    />
  </section>;

  // HOOKS
  const router = useRouter();
  // const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan input user

  // FUNGSI PENCARIAN
  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault(); // Mencegah form melakukan reload halaman default

  //   // Periksa apakah input tidak kosong
  //   if (searchTerm.trim()) {
  //     // Arahkan ke halaman /search dengan query parameter 'q'
  //     router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
  //   }
  // };

  const highlightCards = [
    {
      title: "Peringatan Dini",
      icon: "⚠️",
      slug: "peringatan",
      description: "Akses cepat informasi cuaca ekstrem dan potensi bencana.",
    },
    {
      title: "Buletin Iklim",
      icon: "📄",
      slug: "buletin",
      description: "Unduh buletin dan dokumen resmi BMKG terbaru.",
    },
    {
      title: "Glosarium",
      icon: "📖",
      slug: "glosarium",
      description:
        "Pencarian definisi dan istilah meteorologi, klimatologi, dan geofisika.",
    },
    {
      title: "FAQ",
      icon: "❓",
      slug: "faq/detail",
      description: "Frequently Asked Questions.",
    },
    {
      title: "Home",
      icon: "🏠",
      slug: "landingpage",
      description: "Ini mengarah ke home.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden mx-auto">
      {/* 1. HERO JUMBOTRON DENGAN FIXED BACKGROUND & SEARCH BOX */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center text-white bg-center bg-cover bg-fixed"
        style={{ backgroundImage: HERO_BACKGROUND_IMAGE }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold mb-4 ">
            Sistem Informasi Iklim dan Kualitas Udara
          </h1>
          <p className="text-xl mb-8">
            Pusat informasi terpadu Klimatologi BMKG
          </p>
          <SearchBar
            variant="landing"
            enablePreview
            placeholder="Cari prediksi, glosarium, FAQ..."
          />
        </div>
      </section>

      {/* 2. CAROUSEL HIGHLIGHT */}
      <section id="highlight-carousel" className="w-full bg-white py-12 px-6">
        <Suspense fallback={<Loading />}>
          {/* Pastikan Anda sudah membuat komponen HighlightsCarousel di file terpisah */}
          <HighlightsCarousel highlightCards={highlightCards} />
        </Suspense>
      </section>

      {/* 3. SECTORALS */}
      <section id="sectoral-data" className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Pembaruan Berdasarkan Sektor
          </h2>
          <Suspense fallback={<Loading />}>
            <Sectorals />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Kabar Terkini
        </h2>
        <div className="w-full h-auto px-8">
          <MainCarousel />
        </div>
      </section>
    </main>
  );
}
