"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  {
    image:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
    title: "Pertanian dan Kehutanan",
    description: "Informasi iklim untuk sektor pertanian dan kehutanan.",
    href: "/sektor/pertanian",
  },
  {
    image:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.png",
    title: "Sumber Daya Air & Bencana",
    description: "Informasi iklim untuk sektor sumber daya air dan bencana.",
    href: "/sektor/air-bencana",
  },
  {
    image:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
    title: "Kesehatan",
    description: "Informasi iklim untuk sektor kesehatan.",
    href: "/sektor/kesehatan",
  },
  {
    image:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
    title: "Energi",
    description: "Informasi iklim untuk sektor energi.",
    href: "/sektor/energi",
  },
  {
    image:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi6.png",
    title: "Perencanaan & Pembangunan",
    description: "Informasi iklim untuk sektor pembangunan dan tata ruang.",
    href: "/sektor/pembangunan",
  },
];

export function MainTabs() {
  return (
    <Tabs defaultValue="tab0" className="w-full max-w-screen-xl mx-auto mt-6">
      {/* Tab Triggers */}
      <div className="flex justify-center">
        <TabsList className="flex flex-wrap justify-center bg-white shadow-md rounded-lg p-1 gap-2 max-w-full overflow-x-auto">
          {tabsData.map((tab, i) => (
            // <TabsTrigger
            //   key={tab.href}
            //   value={`tab${i}`}
            //   className="text-sm md:text-base whitespace-nowrap"
            // >
            //   {tab.title}
            // </TabsTrigger>
            <TabsTrigger
              key={tab.href}
              value={`tab${i}`}
              className="text-sm md:text-base whitespace-nowrap px-4 py-2 rounded-md transition-colors
             data-[state=active]:bg-cyan-600 data-[state=active]:text-white
             hover:bg-cyan-100"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Tab Contents */}
      {tabsData.map((tab, i) => (
        <TabsContent
          key={tab.href}
          value={`tab${i}`}
          className="p-4 mt-4 bg-white rounded-lg shadow-md flex flex-col gap-4"
        >
          {/* Gambar */}
          <img
            src={tab.image}
            alt={tab.title}
            className="w-full rounded-lg object-cover"
          />

          {/* Teks & Link */}
          <div>
            <h3 className="text-xl font-semibold mb-2">{tab.title}</h3>
            <p className="text-gray-600 mb-4">{tab.description}</p>
            <Link
              href={tab.href}
              className="inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
            >
              Selengkapnya →
            </Link>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
