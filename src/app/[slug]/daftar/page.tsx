import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const data: {
  slug: string;
  title: string;
  data: {
    title: string;
    href: string;
    imageUrl: string;
    descriptionUrl: string;
    description: string;
  }[];
}[] = [
    {
      slug: "pertanian",
      title: "Informasi Iklim untuk Sektor Pertanian dan Kehutanan",
      data: [
        {
          title: "Prediksi Curah Hujan",
          href: "prediksi-curah-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Hari Tanpa Hujan",
          href: "hari-tanpa-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Perkembangan ENSO dan IOD",
          href: "perkembangan-enso-dan-iod/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Ketersediaan Air bagi Tanaman",
          href: "ketersediaan-air-bagi-tanaman/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // {
        //   title: "Prediksi Indeks Potensi Karhutla",
        //   href: "prediksi-indeks-potensi-karhutla/detail",
        //   imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        //   descriptionUrl: "",
        //   description: ""
        // },
        {
          title: "Prediksi Musim Hujan",
          href: "prediksi-musim-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Prediksi Musim Kemarau",
          href: "prediksi-musim-kemarau/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Peringatan Dini Iklim Ekstrem",
          href: "peringatan-dini-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        {
          title: "Indeks Persipitasi Terstandarisasi",
          href: "indeks-presipitasi-terstandarisasi/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        }
      ]
    },
    {
      slug: "air-bencana",
      title: "Informasi Iklim untuk Sektor Sumber Daya Air dan Bencana",
      data: [
        // Prediksi Daerah Potensi Banjir
        {
          title: "Prediksi Daerah Potensi Banjir",
          href: "prediksi-daerah-potensi-banjir/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Monitoring Hari Tanpa Hujan
        {
          title: "Monitoring Hari Tanpa Hujan",
          href: "hari-tanpa-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Prediksi Curah Hujan
        {
          title: "Prediksi Curah Hujan",
          href: "prediksi-curah-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Prediksi Musim Hujan
        {
          title: "Prediksi Musim Hujan",
          href: "prediksi-musim-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Prediksi Musim Kemarau
        {
          title: "Prediksi Musim Kemarau",
          href: "prediksi-musim-kemarau/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Peringatan Dini Iklim Ekstrem
        {
          title: "Peringatan Dini Iklim Ekstrem",
          href: "peringatan-dini-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Perkembangan ENSO dan IOD
        {
          title: "Perkembangan ENSO dan IOD",
          href: "perkembangan-enso-dan-iod/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Indeks Presipitasi Terstandarisasi
        {
          title: "Indeks Presipitasi Terstandarisasi",
          href: "indeks-presipitasi-terstandarisasi/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        }
      ]
    },
    {
      slug: "kesehatan",
      title: "Informasi Iklim untuk Sektor Kesehatan",
      data: [
        // Peringatan Dini Demam Berdarah
        {
          title: "Peringatan Dini Demam Berdarah",
          href: "peringatan-dini-demam-berdarah/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Monitoring Partikulat PM2.5 Realtime
        {
          title: "Monitoring Partikulat PM2.5 Realtime",
          href: "monitoring-partikulat-pm25-realtime/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Informasi Partikulat SPM
        {
          title: "Informasi Partikulat SPM",
          href: "informasi-partikulat-spm/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Informasi pH Air Hujan
        {
          title: "Informasi pH Air Hujan",
          href: "informasi-ph-air-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        }
      ]
    },
    {
      slug: "energi",
      title: "Informasi Iklim untuk Sektor Energi",
      data: [
        // Potensi Energi Surya Stasiun
        {
          title: "Potensi Energi Surya Stasiun",
          href: "potensi-energi-surya-stasiun/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Potensi Energi Surya Spasial
        {
          title: "Potensi Energi Surya Spasial",
          href: "potensi-energi-surya-spasial/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Prediksi Potensi Energi Surya
        {
          title: "Prediksi Potensi Energi Surya",
          href: "prediksi-potensi-energi-surya/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Potensi Energi Angin Stasiun
        {
          title: "Potensi Energi Angin Stasiun",
          href: "potensi-energi-angin-stasiun/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        }
      ]
    },
    {
      slug: "pembangunan",
      title: "Informasi Iklim untuk Sektor Pembangunan",
      data: [
        // Proyeksi Perubahan Curah Hujan
        {
          title: "Proyeksi Perubahan Curah Hujan",
          href: "proyeksi-perubahan-curah-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Proyeksi Perubahan Suhu
        {
          title: "Proyeksi Perubahan Suhu",
          href: "proyeksi-perubahan-suhu-udara/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Anomali Suhu
        {
          title: "Anomali Suhu",
          href: "anomali-suhu-udara/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        },
        // Ekstrem Perubahan Iklim
        {
          title: "Ekstrem Perubahan Iklim",
          href: "catatan-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: ""
        }
      ]
    }
  ]

export async function generateStaticParams() {
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Daftar({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = data.find((item) => item.slug === slug)
  if (!item) {
    return (
      <>
        Data Not Found
      </>
    )
  }

  return (
    <>
      {/* Card with image, some description, and button "Baca Selengkapnya" */}
      <main className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Daftar {item.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Filter data based on slug (category) */}
          {/* For now, let's just display all items from the 'data' array for demonstration */}
          {/* In a real application, you would filter 'data' based on 'slug' */}
          {item.data.map((item, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="p-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={1536}
                  height={800}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/${item.href}`}>
                  <Button className="w-full">Baca Selengkapnya</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}