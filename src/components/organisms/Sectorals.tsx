"use client";

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {sectorals.map((sector, index) => (
        <Link
          key={index}
          href={sector.href}
          className="block rounded-xl bg-white p-6 shadow hover:shadow-lg hover:bg-gray-100 transition-all duration-300 text-center shadow-xl"
        >
          <sector.icon className="mx-auto mb-4 h-8 w-8 text-cyan-600" />
          <h3 className="font-semibold text-lg text-gray-800">
            {sector.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{sector.description}</p>
        </Link>
      ))}
    </div>
  );
}
