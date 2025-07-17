"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import LogoBMKG from "@/../public/logo-bmkg.svg"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const components: { title: string; subMenu: { title: string; href: string; description: string }[] }[] = [
  {
    title: "Iklim Terkini",
    subMenu: [
      {
        title: "Hari Tanpa Hujan",
        href: "/hari-tanpa-hujan/detail",
        description: "Informasi tentang hari tanpa hujan."
      },
      {
        title: "Perkembangan Musim",
        href: "/perkembangan-musim/detail",
        description: "Informasi tentang perkembangan musim."
      },
      {
        title: "Anomali Suhu Udara",
        href: "/anomali-suhu-udara",
        description: "Informasi tentang anomali suhu udara."
      },
      {
        title: "Indeks Iklim Global",
        href: "/indeks-iklim-global",
        description: "Informasi tentang indeks iklim global."
      },
      {
        title: "Catatan Iklim Ekstrem",
        href: "/catatan-iklim-ekstrem",
        description: "Informasi tentang catatan iklim ekstrem."
      },
      {
        title: "Indeks Ultraviolet",
        href: "/indeks-ultraviolet",
        description: "Informasi tentang indeks ultraviolet."
      }
    ]
  },
  {
    title: "Analisis Iklim",
    subMenu: [
      {
        title: "Dinamika Atmosfer dan Laut",
        href: "/dinamika-atmosfer-dan-laut",
        description: "Informasi tentang dinamika atmosfer dan laut."
      },
      {
        title: "Analisis Hujan Dasarian",
        href: "/analisis-hujan-dasarian",
        description: "Informasi tentang analisis hujan dasarian."
      },
      {
        title: "Analisis Hujan Bulanan",
        href: "/analisis-hujan-bulanan",
        description: "Informasi tentang analisis hujan bulanan."
      },
      {
        title: "Indeks Presipitasi Terstandarisasi",
        href: "/indeks-presipitasi-terstandarisasi",
        description: "Informasi tentang indeks presipitasi terstandarisasi."
      },
      {
        title: "Ketersediaan Air bagi Tanaman",
        href: "/ketersediaan-air-bagi-tanaman",
        description: "Informasi tentang ketersediaan air bagi tanaman."
      },
      {
        title: "Buletin",
        href: "/buletin",
        description: "Informasi tentang buletin"
      }
    ]
  },
  {
    title: "Peringatan Dini Iklim",
    subMenu: [
      {
        title: "Peringatan Dini Kekeringan Meteorologis",
        href: "/peringatan-dini-kekeringan-meteorologis",
        description: "Informasi tentang peringatan dini kekeringan meteorologi."
      },
      {
        title: "Peringatan Dini Curah Hujan Tinggi",
        href: "/peringatan-dini-curah-hujan-tinggi",
        description: "Informasi tentang peringatan dini curah hujan tinggi."
      },
      {
        title: "Kondisi ENSO (EL Nino dan La Nina)",
        href: "/kondisi-enso-el-nino-dan-la-nina",
        description: "Informasi tentang kondisi ENSO (EL Nino dan La Nina)."
      }
    ]
  },
  {
    title: "Prediksi Iklim",
    subMenu: [
      {
        title: "Prediksi Musim",
        href: "/prediksi-musim",
        description: "Informasi tentang prediksi musim."
      },
      {
        title: "Prediksi Indeks Presipitasi Terstandarisasi",
        href: "/prediksi-indeks-presipitasi-terstandarisasi",
        description: "Informasi tentang prediksi indeks presipitasi terstandarisasi."
      },
      {
        title: "Prediksi Hujan Bulanan",
        href: "/prediksi-hujan-bulanan",
        description: "Informasi tentang prediksi hujan bulanan."
      },
      {
        title: "Prediksi Hujan Dasarian",
        href: "/prediksi-hujan-dasarian",
        description: "Informasi tentang prediksi hujan dasarian."
      },
      {
        title: "Prediksi daerah Potensi Banjir",
        href: "/prediksi-daerah-potensi-banjir",
        description: "Informasi tentang prediksi daerah potensi banjir."
      }
    ]
  },
  {
    title: "Perubahan Iklim",
    subMenu: [
      {
        title: "Fakta Perubahan Iklim",
        href: "/data-iklim-harian",
        description: "Informasi tentang data iklim harian."
      },
      {
        title: "Analisis Laju Perubahan Suhu Udara",
        href: "/analisis-laju-perubahan-suhu-udara",
        description: "Informasi tentang analisis laju perubahan suhu udara."
      },
      {
        title: "Analisis Laju Perubahan Curah Hujan",
        href: "/data-iklim-tahunan",
        description: "Informasi tentang data iklim tahunan."
      },
      {
        title: "Proyeksi Perubahan Suhu Udara",
        href: "/proyeksi-perubahan-suhu-udara",
        description: "Informasi tentang proyeksi perubahan suhu udara."
      },
      {
        title: "Proyeksi Perubahan Curah Hujan",
        href: "/proyeksi-perubahan-curah-hujan",
        description: "Informasi tentang Proyeksi Perubahan Curah Hujan."
      }
    ]
  }
]

export function Navbar() {
  return (
    <nav className="bg-background border-b-2 sticky top-0 z-10">
      <div className="container mx-auto py-4 flex flex-row justify-between">
        <Link href={"/"}>
          <div className="flex flex-row">
            <Image src={LogoBMKG} alt="Logo BMKG" height={48} />
            <div className="flex flex-col ml-2 justify-center">
              <span className="text-sm font-bold">Badan Meteorologi, Klimatologi, dan Geofisika</span>
              <span className="text-xs text-muted-foreground">Deputi Klimatologi</span>
            </div>
          </div>
        </Link>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="border">
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
      
        <Button className="my-auto" variant="outline">Contact Center 196</Button>
      </div>
    </nav>
  )
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
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default Navbar;