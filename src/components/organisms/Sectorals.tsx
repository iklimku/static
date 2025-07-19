"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Leaf,
  Waves,
  HeartPulse,
  Sun,
  Building2,
  LucideIcon,
} from "lucide-react";

type Sectoral = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

const sectorals: Sectoral[] = [
  {
    title: "Pertanian dan Kehutanan",
    description: "Informasi iklim untuk sektor pertanian dan kehutanan.",
    icon: Leaf,
    href: "/sektor/pertanian",
  },
  {
    title: "Sumber Daya Air & Bencana",
    description: "Informasi iklim untuk sektor sumber daya air dan bencana.",
    icon: Waves,
    href: "/sektor/air-bencana",
  },
  {
    title: "Kesehatan",
    description: "Informasi iklim untuk sektor kesehatan.",
    icon: HeartPulse,
    href: "/sektor/kesehatan",
  },
  {
    title: "Energi",
    description: "Informasi iklim untuk sektor energi.",
    icon: Sun,
    href: "/sektor/energi",
  },
  {
    title: "Perencanaan & Pembangunan",
    description: "Informasi iklim untuk sektor pembangunan dan tata ruang.",
    icon: Building2,
    href: "/sektor/pembangunan",
  },
];

export function Sectorals() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // index card aktif

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {sectorals.map((sector, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer block rounded-xl p-6 text-center shadow-xl transition-all duration-300 ${
              isActive
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-800 hover:bg-cyan-100"
            }`}
          >
            <sector.icon
              className={`mx-auto mb-4 h-8 w-8 transition-colors ${
                isActive ? "text-white" : "text-cyan-600"
              }`}
            />
            <h3 className="font-semibold text-lg">{sector.title}</h3>
            <p
              className={`text-sm mt-1 ${
                isActive ? "text-white/90" : "text-gray-600"
              }`}
            >
              {sector.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
