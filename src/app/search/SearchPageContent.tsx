"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/organisms/SearchBar";

// Import langsung semua data
import daftarData from "@/../public/data/daftar.json";
import detailData from "@/../public/data/detail.json";
import navbarData from "@/../public/data/navbar.json";
import glosariumData from "@/../public/data/glosarium.json";
import faqData from "@/../public/data/faq.json";

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [results, setResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (!query) return;

    const allResults: any[] = [];

    // --- daftar.json ---
    if (Array.isArray(daftarData)) {
      daftarData.forEach((category) => {
        category.data.forEach((item: any) => {
          if (
            item.title?.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query)
          ) {
            allResults.push({
              title: item.title,
              desc: item.description,
              href: `/${item.href}`,
              source: "daftar",
            });
          }
        });
      });
    }

    // --- detail.json ---
    if (Array.isArray(detailData)) {
      detailData.forEach((item) => {
        if (
          item.title?.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query)
        ) {
          allResults.push({
            title: item.title,
            desc: item.description || "",
            href: `/detail/${item.slug}`,
            source: "detail",
          });
        }
      });
    }

    // --- navbar.json ---
    if (Array.isArray(navbarData)) {
      navbarData.forEach((menu) => {
        menu.subMenu?.forEach((sub: any) => {
          if (sub.title?.toLowerCase().includes(query)) {
            allResults.push({
              title: sub.title,
              desc: `Dari menu ${menu.title}`,
              href: sub.href,
              source: "navbar",
            });
          }
        });
      });
    }

    // --- glosarium.json ---
    if (Array.isArray(glosariumData)) {
      glosariumData.forEach((item) => {
        if (
          item.term?.toLowerCase().includes(query) ||
          item.definition?.toLowerCase().includes(query)
        ) {
          allResults.push({
            title: item.term,
            desc: item.definition,
            href: "/glosarium",
            source: "glosarium",
          });
        }
      });
    }

    // --- faq.json (nested structure) ---
    if (Array.isArray(faqData)) {
      faqData.forEach((section) => {
        section.questions?.forEach((item: any) => {
          if (
            item.q?.toLowerCase().includes(query) ||
            item.a?.toLowerCase().includes(query)
          ) {
            allResults.push({
              title: item.q,
              desc: item.a,
              href: "/faq",
              source: `FAQ - ${section.category}`,
            });
          }
        });
      });
    }

    setResults(allResults);
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = results.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <SearchBar
        variant="page"
        placeholder="Cari lagi di seluruh data..."
        enablePreview
        className="mb-8"
      />

      <h1 className="text-xl font-semibold mb-4">
        Hasil pencarian untuk:{" "}
        <span className="text-blue-600 font-medium">{query}</span>
      </h1>

      {!query && (
        <p className="text-gray-400 text-center mt-6">
          Ketikkan kata kunci di atas untuk mulai mencari data 🌦️
        </p>
      )}

      {query && results.length === 0 && (
        <p className="text-gray-500">Tidak ada hasil ditemukan.</p>
      )}

      <ul className="space-y-4">
        {currentItems.map((item, i) => (
          <li
            key={i}
            className="border p-4 rounded-lg hover:bg-gray-50 transition"
          >
            <p className="text-xs text-gray-500 mb-1">Sumber: {item.source}</p>
            <Link
              href={item.href}
              className="text-blue-700 font-semibold hover:underline"
            >
              {item.title}
            </Link>
            <p className="text-sm text-gray-700 mt-1 line-clamp-2">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>

      {results.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded-md text-sm ${
              currentPage === 1
                ? "text-gray-400 border-gray-200"
                : "text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            ← Sebelumnya
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border rounded-md text-sm ${
                currentPage === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-300 hover:bg-blue-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded-md text-sm ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200"
                : "text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            Selanjutnya →
          </button>
        </div>
      )}
    </div>
  );
}
