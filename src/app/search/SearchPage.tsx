"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import glosariumData from "@/../public/data/glosarium.json";
import daftarData from "@/../public/data/daftar.json";

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
    title: item.term,
    description: item.definition,
    link: `/glosarium#${item.term.toLowerCase().replace(/\s/g, "-")}`,
    source: "Glosarium",
  })),

  // 2. DARI DAFTAR KONTEN: Menggunakan flatMap untuk mengakses array 'data'
  ...(daftarData as any[]).flatMap((sector: any) =>
    sector.data.map((contentItem: any) => ({
      title: contentItem.title,
      description: contentItem.description,
      link: `/${sector.slug}/${contentItem.href}`,
      source: `Buletin & Data (${sector.title})`,
    }))
  ),
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const filteredResults = searchableData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(filteredResults);
  }, [query]);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Hasil Pencarian untuk: "{query}"
      </h1>

      {results.length > 0 ? (
        <p className="text-lg text-gray-600 mb-8">
          Ditemukan {results.length} hasil.
        </p>
      ) : (
        <p className="text-lg text-gray-600 mb-8">
          Tidak ditemukan hasil untuk "{query}".
        </p>
      )}

      <div className="space-y-6">
        {results.map((item) => (
          <Link href={item.link} key={item.link + item.title}>
            <Card className="hover:bg-gray-50 transition-colors cursor-pointer m-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start flex-wrap">
                  <CardTitle className="text-xl text-blue-700">
                    {item.title}
                  </CardTitle>
                  <span className="text-sm font-medium text-gray-600 ml-2 border rounded-full px-3 py-1 bg-[var(--bmkggreen3)] whitespace-nowrap">
                    {item.source}
                  </span>
                </div>
                <CardDescription className="mt-2 line-clamp-2 text-gray-700">
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
