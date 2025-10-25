"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

interface SearchBarProps {
  placeholder?: string;
  variant?: "default" | "landing" | "page";
  className?: string;
  enablePreview?: boolean;
}

export default function SearchBar({
  placeholder = "Cari di seluruh data...",
  variant = "default",
  className = "",
  enablePreview = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  const baseClass =
    "relative flex flex-col items-center w-full transition-all duration-300 px-3";

  const variantClass =
    variant === "landing"
      ? "max-w-2xl mx-auto p-3 sm:p-4 backdrop-blur-md rounded-xl shadow-md"
      : variant === "page"
      ? "max-w-lg mx-auto px-3 sm:px-4"
      : "max-w-md mx-auto px-3 sm:px-4";

  return (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center gap-2 flex-wrap sm:flex-nowrap"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full sm:flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--bmkggreen1)]"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-[var(--bmkggreen1)] text-white font-medium rounded-lg hover:bg-[var(--bmkggreen2)] transition"
        >
          Cari
        </button>
      </form>
    </div>
  );
}
