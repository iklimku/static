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
        description: "Informasi hari tanpa hujan.",
      },
      {
        title: "Perkembangan Musim",
        href: "/perkembangan-musim/detail",
        description: "Informasi perkembangan musim.",
      },
      {
        title: "Anomali Suhu Udara",
        href: "/anomali-suhu-udara/detail",
        description: "Informasi anomali suhu udara.",
      },
      {
        title: "Indeks Iklim Global",
        href: "/indeks-iklim-global/detail",
        description: "Informasi indeks iklim global.",
      },
      {
        title: "Catatan Iklim Ekstrem",
        href: "/catatan-iklim-ekstrem/detail",
        description: "Informasi catatan iklim ekstrem.",
      },
      {
        title: "Indeks Ultraviolet",
        href: "/indeks-ultraviolet/detail",
        description: "Informasi indeks ultraviolet.",
      },
    ],
  },
  {
    title: "Analisis",
    subMenu: [
      {
        title: "Dinamika Atmosfer dan Laut",
        href: "/dinamika-atmosfer-dan-laut/detail",
        description: "Informasi dinamika atmosfer dan laut.",
      },
      {
        title: "Hujan Dasarian",
        href: "/analisis-hujan-dasarian/detail",
        description: "Informasi hujan dasarian.",
      },
      {
        title: "Hujan Bulanan",
        href: "/analisis-hujan-bulanan/detail",
        description: "Informasi hujan bulanan.",
      },
      {
        title: "Indeks Presipitasi Terstandarisasi",
        href: "/indeks-presipitasi-terstandarisasi/detail",
        description: "Informasi indeks presipitasi terstandarisasi.",
      },
      {
        title: "Ketersediaan Air bagi Tanaman",
        href: "/ketersediaan-air-bagi-tanaman/detail",
        description: "Informasi ketersediaan air bagi tanaman.",
      },
      {
        title: "Buletin",
        href: "/buletin/daftar",
        description: "Informasi buletin",
      },
    ],
  },
  {
    title: "Peringatan Dini",
    subMenu: [
      {
        title: "Peringatan Dini Kekeringan Meteorologis",
        href: "/peringatan-dini-kekeringan-meteorologis/detail",
        description: "Informasi peringatan dini kekeringan meteorologi.",
      },
      {
        title: "Peringatan Dini Curah Hujan Tinggi",
        href: "/peringatan-dini-curah-hujan-tinggi/detail",
        description: "Informasi peringatan dini curah hujan tinggi.",
      },
      {
        title: "Kondisi ENSO (EL Nino dan La Nina)",
        href: "/kondisi-enso-el-nino-dan-la-nina/detail",
        description: "Informasi kondisi ENSO (EL Nino dan La Nina).",
      },
      {
        title: "Peringatan Dini Konsentrasi Partikulat (PM2,5)",
        href: "/peringatan-dini-konsentrasi-particulat/detail",
        description: "Informasi peringatan dini konsentrasi particulat.",
      },
    ],
  },
  {
    title: "Prakiraan Kualitas Udara",
    subMenu: [
      {
        title: "Konsentrasi Partikulat (PM2,5)",
        href: "/konsentrasi-partikulat/detail",
        description: "Informasi konsentrasi partikulat (PM2,5).",
      },
      {
        title: "Karbon Dioksida (CO2)",
        href: "/karbon-dioksida/detail",
        description: "Informasi karbon dioksida (CO2).",
      },
      {
        title: "Karbon Monoksida (CO)",
        href: "/karbon-monoksida/detail",
        description: "Informasi karbon monoksida (CO).",
      },
      {
        title: "Sulfur Dioksida (SO2)",
        href: "/sulfur-dioksida/detail",
        description: "Informasi sulfur dioksida (SO2).",
      },
      {
        title: "Ozon Permukaan (O3)",
        href: "/ozon-permukaan/detail",
        description: "Informasi ozon permukaan (O3).",
      },
    ],
  },
  {
    title: "Prediksi Iklim",
    subMenu: [
      {
        title: "Prediksi Musim",
        href: "/prediksi-musim/detail",
        description: "Informasi prediksi musim.",
      },
      {
        title: "Prediksi Indeks Presipitasi Terstandarisasi",
        href: "/prediksi-indeks-presipitasi-terstandarisasi/detail",
        description: "Informasi prediksi indeks presipitasi terstandarisasi.",
      },
      {
        title: "Prediksi Hujan Bulanan",
        href: "/prediksi-hujan-bulanan/daftar",
        description: "Informasi prediksi hujan bulanan.",
      },
      {
        title: "Prediksi Hujan Dasarian",
        href: "/prediksi-hujan-dasarian/daftar",
        description: "Informasi prediksi hujan dasarian.",
      },
      {
        title: "Prediksi daerah Potensi Banjir",
        href: "/prediksi-daerah-potensi-banjir/detail",
        description: "Informasi prediksi daerah potensi banjir.",
      },
    ],
  },
  {
    title: "Perubahan Iklim",
    subMenu: [
      {
        title: "Fakta Perubahan Iklim",
        href: "/fakta-perubahan-iklim/detail",
        description: "Informasi fakta perubahan iklim.",
      },
      {
        title: "Analisis Laju Perubahan Suhu Udara",
        href: "/analisis-laju-perubahan-suhu-udara/detail",
        description: "Informasi analisis laju perubahan suhu udara.",
      },
      {
        title: "Analisis Laju Perubahan Curah Hujan",
        href: "/analisis-laju-perubahan-curah-hujan/detail",
        description: "Informasi analisis laju perubahan curah hujan.",
      },
      {
        title: "Proyeksi Perubahan Suhu Udara",
        href: "/proyeksi-perubahan-suhu-udara/detail",
        description: "Informasi proyeksi perubahan suhu udara.",
      },
      {
        title: "Proyeksi Perubahan Curah Hujan",
        href: "/proyeksi-perubahan-curah-hujan/detail",
        description: "Informasi proyeksi perubahan curah hujan.",
      },
      {
        title: "Warming Stripes",
        href: "/warming-stripes/detail",
        description: "Informasi warming stripes.",
      },
    ],
  },
  {
    title: "Lainnya",
    subMenu: [
      {
        title: "Glosarium",
        href: "/glossary",
        description: "Informasi glosarium tentang MKG.",
      },
      {
        title: "Frequently Asked Question",
        href: "/faq/detail",
        description: "Informasi pertanyaan yang sering diajukan.",
      },
      {
        title: "Buletin",
        href: "/buletin/daftar",
        description: "Informasi buletin",
      },
      {
        title: "Regulasi",
        href: "/regulasi/daftar",
        description: "Informasi regulasi.",
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
                  <NavigationMenuContent className="p-4 min-w-[400px] md:min-w-[500px] lg:min-w-[1000px] border shadow-lg bg-white rounded-md z-50 ">
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

          {/* <Button variant="outline" className="w-full mt-4">
            Contact Center 196
          </Button> */}
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
