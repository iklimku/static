"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Menu } from "lucide-react";
import LogoBMKG from "@/../public/logo-bmkg.svg";

const components: {
  title: string;
  subMenu: { title: string; href: string; description: string }[];
}[] = [
  {
    title: "Perkembangan Terkini",
    subMenu: [
      {
        title: "Hari Tanpa Hujan",
        href: "/hari-tanpa-hujan/detail",
        description: "Informasi  hari tanpa hujan.",
      },
      {
        title: "Perkembangan Musim",
        href: "/perkembangan-musim/detail",
        description: "Informasi  perkembangan musim.",
      },
      {
        title: "Anomali Suhu Udara",
        href: "/anomali-suhu-udara",
        description: "Informasi  anomali suhu udara.",
      },
      {
        title: "Indeks Iklim Global",
        href: "/indeks-iklim-global/detail",
        description: "Informasi  indeks iklim global.",
      },
      {
        title: "Catatan Iklim Ekstrem",
        href: "/catatan-iklim-ekstrem",
        description: "Informasi  catatan iklim ekstrem.",
      },
      {
        title: "Indeks Ultraviolet",
        href: "/indeks-ultraviolet",
        description: "Informasi  indeks ultraviolet.",
      },
    ],
  },
  {
    title: "Analisis",
    subMenu: [
      {
        title: "Dinamika Atmosfer dan Laut",
        href: "/dinamika-atmosfer-dan-laut",
        description: "Informasi  dinamika atmosfer dan laut.",
      },
      {
        title: "Analisis Hujan Dasarian",
        href: "/analisis-hujan-dasarian",
        description: "Informasi  analisis hujan dasarian.",
      },
      {
        title: "Analisis Hujan Bulanan",
        href: "/analisis-hujan-bulanan",
        description: "Informasi  analisis hujan bulanan.",
      },
      {
        title: "Indeks Presipitasi Terstandarisasi",
        href: "/indeks-presipitasi-terstandarisasi/detail",
        description: "Informasi  indeks presipitasi terstandarisasi.",
      },
      {
        title: "Ketersediaan Air bagi Tanaman",
        href: "/ketersediaan-air-bagi-tanaman",
        description: "Informasi  ketersediaan air bagi tanaman.",
      },
      {
        title: "Buletin",
        href: "/buletin",
        description: "Informasi  buletin",
      },
    ],
  },
  {
    title: "Peringatan Dini",
    subMenu: [
      {
        title: "Peringatan Dini Kekeringan Meteorologis",
        href: "/peringatan-dini-kekeringan-meteorologis",
        description: "Informasi  peringatan dini kekeringan meteorologi.",
      },
      {
        title: "Peringatan Dini Curah Hujan Tinggi",
        href: "/peringatan-dini-curah-hujan-tinggi",
        description: "Informasi  peringatan dini curah hujan tinggi.",
      },
      {
        title: "Kondisi ENSO (EL Nino dan La Nina)",
        href: "/kondisi-enso-el-nino-dan-la-nina",
        description: "Informasi  kondisi ENSO (EL Nino dan La Nina).",
      },
    ],
  },
  {
    title: "Prakiraan Kualitas Udara",
    subMenu: [
      {
        title: "",
        href: "",
        description: "",
      },
    ],
  },
  {
    title: "Prediksi Iklim",
    subMenu: [
      {
        title: "Prediksi Musim",
        href: "/prediksi-musim",
        description: "Informasi  prediksi musim.",
      },
      {
        title: "Prediksi Indeks Presipitasi Terstandarisasi",
        href: "/prediksi-indeks-presipitasi-terstandarisasi",
        description: "Informasi  prediksi indeks presipitasi terstandarisasi.",
      },
      {
        title: "Prediksi Hujan Bulanan",
        href: "/prediksi-hujan-bulanan",
        description: "Informasi  prediksi hujan bulanan.",
      },
      {
        title: "Prediksi Hujan Dasarian",
        href: "/prediksi-hujan-dasarian",
        description: "Informasi  prediksi hujan dasarian.",
      },
      {
        title: "Prediksi daerah Potensi Banjir",
        href: "/prediksi-daerah-potensi-banjir",
        description: "Informasi  prediksi daerah potensi banjir.",
      },
    ],
  },
  {
    title: "Perubahan Iklim",
    subMenu: [
      {
        title: "Fakta Perubahan Iklim",
        href: "/data-iklim-harian",
        description: "Informasi  data iklim harian.",
      },
      {
        title: "Analisis Laju Perubahan Suhu Udara",
        href: "/analisis-laju-perubahan-suhu-udara",
        description: "Informasi  analisis laju perubahan suhu udara.",
      },
      {
        title: "Analisis Laju Perubahan Curah Hujan",
        href: "/data-iklim-tahunan",
        description: "Informasi  data iklim tahunan.",
      },
      {
        title: "Proyeksi Perubahan Suhu Udara",
        href: "/proyeksi-perubahan-suhu-udara",
        description: "Informasi  proyeksi perubahan suhu udara.",
      },
      {
        title: "Proyeksi Perubahan Curah Hujan",
        href: "/proyeksi-perubahan-curah-hujan",
        description: "Informasi  Proyeksi Perubahan Curah Hujan.",
      },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-100 shadow-lg sticky top-0 z-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={LogoBMKG} alt="Logo BMKG" height={48} />
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold 2xl:text-sm">
              Badan Meteorologi, Klimatologi, dan Geofisika
            </span>
            <span className="text-xs text-muted-foreground">
              Deputi Klimatologi
            </span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-muted-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 sticky top-0 z-100" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((component) => (
                <NavigationMenuItem key={component.title}>
                  <NavigationMenuTrigger className="font-normal hover:font-semibold">
                    {component.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 min-w-[400px] md:min-w-[500px] lg:min-w-[700px] border shadow-lg bg-white rounded-md z-50">
                    <ul className="grid gap-4 md:grid-cols-2 ">
                      {component.subMenu.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* <Button className="bg-white">Contact Center 196</Button> */}
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="xl:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <Accordion type="multiple" className="w-full">
            {components.map((component) => (
              <AccordionItem key={component.title} value={component.title}>
                <AccordionTrigger className="text-left text-cyan-700 font-semibold">
                  {component.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {component.subMenu.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-cyan-100 rounded-md transition"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-sm font-semibold">
                            {item.title}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button variant="outline" className="w-full mt-4">
            Contact Center 196
          </Button>
        </div>
      )}
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block px-3 py-2 hover:bg-cyan-50 rounded-md transition"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-xs text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default Navbar;
