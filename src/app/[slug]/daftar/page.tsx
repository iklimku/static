import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/organisms/Loading";
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
          description: "Informasi mengenai prediksi curah hujan yang akan terjadi di Indonesia"
        },
        {
          title: "Hari Tanpa Hujan",
          href: "hari-tanpa-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai hari tanpa hujan yang akan terjadi di Indonesia"
        },
        {
          title: "Perkembangan ENSO dan IOD",
          href: "perkembangan-enso-dan-iod/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai perkembangan ENSO dan IOD"
        },
        {
          title: "Ketersediaan Air bagi Tanaman",
          href: "ketersediaan-air-bagi-tanaman/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai ketersediaan air bagi tanaman"
        },
        // {
        //   title: "Prediksi Indeks Potensi Karhutla",
        //   href: "prediksi-indeks-potensi-karhutla/detail",
        //   imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        //   descriptionUrl: "",
        //   description: 
        // },
        {
          title: "Prediksi Musim Hujan",
          href: "prediksi-musim-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi musim hujan yang akan terjadi di Indonesia"
        },
        {
          title: "Prediksi Musim Kemarau",
          href: "prediksi-musim-kemarau/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi musim kemarau yang akan terjadi di Indonesia"
        },
        {
          title: "Peringatan Dini Iklim Ekstrem",
          href: "peringatan-dini-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai peringatan dini iklim ekstrem yang akan terjadi di Indonesia"
        },
        {
          title: "Indeks Persipitasi Terstandarisasi",
          href: "indeks-presipitasi-terstandarisasi/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai indeks presipitasi terstandarisasi yang akan terjadi di Indonesia"
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
          description: "Informasi mengenai prediksi daerah potensi banjir yang akan terjadi di Indonesia"
        },
        // Monitoring Hari Tanpa Hujan
        {
          title: "Monitoring Hari Tanpa Hujan",
          href: "hari-tanpa-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai monitoring hari tanpa hujan yang akan terjadi di Indonesia"
        },
        // Prediksi Curah Hujan
        {
          title: "Prediksi Curah Hujan",
          href: "prediksi-curah-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi curah hujan yang akan terjadi di Indonesia"
        },
        // Prediksi Musim Hujan
        {
          title: "Prediksi Musim Hujan",
          href: "prediksi-musim-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi musim hujan yang akan terjadi di Indonesia"
        },
        // Prediksi Musim Kemarau
        {
          title: "Prediksi Musim Kemarau",
          href: "prediksi-musim-kemarau/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi musim kemarau yang akan terjadi di Indonesia"
        },
        // Peringatan Dini Iklim Ekstrem
        {
          title: "Peringatan Dini Iklim Ekstrem",
          href: "peringatan-dini-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai peringatan dini iklim ekstrem yang akan terjadi di Indonesia"
        },
        // Perkembangan ENSO dan IOD
        {
          title: "Perkembangan ENSO dan IOD",
          href: "perkembangan-enso-dan-iod/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai perkembangan ENSO dan IOD"
        },
        // Indeks Presipitasi Terstandarisasi
        {
          title: "Indeks Presipitasi Terstandarisasi",
          href: "indeks-presipitasi-terstandarisasi/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai indeks presipitasi terstandarisasi yang akan terjadi di Indonesia"
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
          description: "Informasi mengenai peringatan dini demam berdarah yang akan terjadi di Indonesia"
        },
        // Monitoring Partikulat PM2.5 Realtime
        {
          title: "Monitoring Partikulat PM2.5 Realtime",
          href: "monitoring-partikulat-pm25-realtime/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai monitoring partikulat PM2.5 realtime yang akan terjadi di Indonesia"
        },
        // Informasi Partikulat SPM
        {
          title: "Informasi Partikulat SPM",
          href: "informasi-partikulat-spm/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai partikulat SPM yang akan terjadi di Indonesia"
        },
        // Informasi pH Air Hujan
        {
          title: "Informasi pH Air Hujan",
          href: "informasi-ph-air-hujan/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai pH air hujan yang akan terjadi di Indonesia"
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
          description: "Informasi mengenai potensi energi surya stasiun yang akan terjadi di Indonesia"
        },
        // Potensi Energi Surya Spasial
        {
          title: "Potensi Energi Surya Spasial",
          href: "potensi-energi-surya-spasial/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai potensi energi surya spasial yang akan terjadi di Indonesia"
        },
        // Prediksi Potensi Energi Surya
        {
          title: "Prediksi Potensi Energi Surya",
          href: "prediksi-potensi-energi-surya/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai prediksi potensi energi surya yang akan terjadi di Indonesia"
        },
        // Potensi Energi Angin Stasiun
        {
          title: "Potensi Energi Angin Stasiun",
          href: "potensi-energi-angin-stasiun/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai potensi energi angin stasiun yang akan terjadi di Indonesia"
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
          description: "Informasi mengenai proyeksi perubahan curah hujan yang akan terjadi di Indonesia"
        },
        // Proyeksi Perubahan Suhu
        {
          title: "Proyeksi Perubahan Suhu",
          href: "proyeksi-perubahan-suhu-udara/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai proyeksi perubahan suhu yang akan terjadi di Indonesia"
        },
        // Anomali Suhu
        {
          title: "Anomali Suhu",
          href: "anomali-suhu-udara/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai anomali suhu yang akan terjadi di Indonesia"

        },
        // Ekstrem Perubahan Iklim
        {
          title: "Ekstrem Perubahan Iklim",
          href: "catatan-iklim-ekstrem/detail",
          imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
          descriptionUrl: "",
          description: "Informasi mengenai ekstrem perubahan iklim yang akan terjadi di Indonesia"
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
                <Suspense fallback={<Loading />}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={1536}
                    height={800}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                </Suspense>
                <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/${item.href}`}>
                  <Button variant={"outline"} className="w-full border-2 border-cyan-100 hover:bg-cyan-100">Baca Selengkapnya</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}