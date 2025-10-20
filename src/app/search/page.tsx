"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Impor semua data statis yang ingin dicari
import glosariumData from "@/../public/data/glosarium.json";
import daftarData from "@/../public/data/daftar.json";

import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator'; // Komponen tidak terpakai, bisa dihapus

// Interface untuk hasil pencarian
interface SearchResult {
  title: string;
  description: string;
  link: string;
  source: string;
}

// Gabungkan dan normalisasi semua data yang dapat dicari
const searchableData: SearchResult[] = [
    // 1. DARI GLOSARIUM: Menggunakan 'term' dan 'definition'
    ...(glosariumData as any[]).map((item: any) => ({
        title: item.term, // Perbaikan: Gunakan 'term'
        description: item.definition, // Perbaikan: Gunakan 'definition'
        link: `/glosarium#${item.term.toLowerCase().replace(/\s/g, '-')}`,
        source: 'Glosarium',
    })),
    
    // 2. DARI DAFTAR KONTEN: Menggunakan flatMap untuk mengakses array 'data'
    // Ini memastikan kita mengiterasi konten, bukan sektor (yang tidak punya 'description')
    ...(daftarData as any[]).flatMap((sector: any) => 
        sector.data.map((contentItem: any) => ({
            title: contentItem.title,
            description: contentItem.description,
            // Membuat link: /<sector-slug>/<content-href>
            link: `/${sector.slug}/${contentItem.href}`, 
            source: `Buletin & Data (${sector.title})`,
        }))
    ),
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  // Pastikan query tidak null sebelum digunakan
  const query = searchParams.get('q') || ''; 
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Hanya proses jika ada query
    if (!query) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    // Filter data statis
    const filteredResults = searchableData.filter(item =>
      // Item.title dan item.description dijamin ada setelah normalisasi di atas
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(filteredResults);
  }, [query]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Hasil Pencarian untuk: "{query}"</h1>

      {results.length > 0 ? (
        <p className="text-lg text-gray-600 mb-8">Ditemukan {results.length} hasil.</p>
      ) : (
        <p className="text-lg text-gray-600 mb-8">Tidak ditemukan hasil untuk "{query}".</p>
      )}

      <div className="space-y-6">
        {results.map((item) => (
          <Link href={item.link} key={item.link + item.title}>
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer m-6 ">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-700">{item.title}</CardTitle>
                    <span className="text-sm font-medium text-gray-500 ml-4 border rounded-full px-3 py-1 bg-[var(--bmkggreen3)]">{item.source}</span>
                </div>
                <CardDescription className="mt-2 line-clamp-2">
                    {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}