import { Suspense } from 'react';
import { MainCarousel } from "@/components/organisms/MainCarousel";
import { HighlightsCarousel } from "@/components/organisms/HighlightsCarousel"; // ✅ perbaiki nama impor
import { Sectorals } from "@/components/organisms/Sectorals";
import Loading from '@/components/organisms/Loading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import Link from "next/link";

const HERO_BACKGROUND_IMAGE = 'url(https://images.unsplash.com/photo-1630260667842-830a17d12ec9?...etc)';

export default function Home() {
  const highlightCards = [
    { title: "Peringatan Dini", icon: "⚠️", slug: "peringatan", description: "Akses cepat informasi cuaca ekstrem dan potensi bencana." },
    { title: "Buletin Iklim", icon: "📄", slug: "buletin", description: "Unduh buletin dan dokumen resmi BMKG terbaru." },
    { title: "Glosarium", icon: "📖", slug: "glosarium", description: "Pencarian definisi dan istilah meteorologi, klimatologi, dan geofisika." },
    { title: "FAQ", icon: "❓", slug: "faq/detail", description: "Frequently Asked Questions." },
    { title: "Home", icon: "❓", slug: "landingpage", description: "Ini mengarah ke home." },
  ];

  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center text-white  bg-center bg-cover bg-fixed"
        style={{ backgroundImage: HERO_BACKGROUND_IMAGE }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 ">
            Sistem Informasi Iklim dan Kualitas Udara
          </h1>
          <p className="text-xl mb-8">
            Pusat informasi terpadu BMKG - tagline di sini -
          </p>

          <div className="max-w-2xl mx-auto flex space-x-2">
            <Input
              type="text"
              placeholder="Cari data, buletin, atau istilah glosarium..."
              className="flex-grow p-6 text-lg text-gray-800 rounded-lg bg-white shadow-lg"
            />
            <Button size="lg" className="bg-[var(--bmkggreen1)] hover:bg-[var(--bmkggreen2)]">
              <Search className="w-5 h-5 mr-2" /> Cari
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CAROUSEL HIGHLIGHT */}
      <section id="highlight-carousel" className="w-full bg-white py-12">
        <Suspense fallback={<Loading />}>
          <HighlightsCarousel highlightCards={highlightCards} /> {/* ✅ kirim props */}
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
    </main>
  );
}
