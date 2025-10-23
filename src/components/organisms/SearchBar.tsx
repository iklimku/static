"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

interface SearchBarProps {
  placeholder?: string;
  variant?: "default" | "landing" | "page";
  className?: string;
  enablePreview?: boolean; // ✅ aktifkan preview
}

export default function SearchBar({
  placeholder = "Cari di seluruh data...",
  variant = "default",
  className = "",
  enablePreview = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // handle submit → pindah ke /search
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  // styling varian
  const baseClass =
    "relative flex flex-col items-center w-full transition-all duration-300";
  const variantClass =
    variant === "landing"
      ? "max-w-2xl mx-auto p-2 backdrop-blur-md rounded-xl shadow-md"
      : variant === "page"
      ? "max-w-lg mx-auto"
      : "max-w-md mx-auto";

  return (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[var(--bmkggreen1)] text-white font-medium rounded-lg hover:bg-[var(--bmkggreen2)]transition"
        >
          Cari
        </button>
      </form>
    </div>
  );
}
