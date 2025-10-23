"use client";

import { Suspense } from "react";
import SearchPageContent from "./SearchPageContent";

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <p className="text-center text-gray-500 mt-6">
          Memuat halaman pencarian...
        </p>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
