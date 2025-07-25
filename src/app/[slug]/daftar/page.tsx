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

interface Item{
  slug: string;
  title: string;
  data: {
    title: string;
    href: string;
    imageUrl: string;
    description: string;
  }[];
}

const data: Item[] = [
  // Pertanian dan Kehutanan
  {
    slug: "pertanian",
    title: "Informasi Iklim untuk Sektor Pertanian dan Kehutanan",
    data: [
      {
        title: "Prediksi Curah Hujan",
        href: "prediksi-curah-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step1.png",
        description:
          "Informasi mengenai prediksi curah hujan yang akan terjadi di Indonesia",
      },
      {
        title: "Hari Tanpa Hujan",
        href: "hari-tanpa-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai hari tanpa hujan yang akan terjadi di Indonesia",
      },
      {
        title: "Perkembangan ENSO dan IOD",
        href: "perkembangan-enso-dan-iod/detail",
        imageUrl:
          "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/Global_SSTA_latest.gif",
        description: "Informasi mengenai perkembangan ENSO dan IOD",
      },
      {
        title: "Ketersediaan Air bagi Tanaman",
        href: "ketersediaan-air-bagi-tanaman/detail",
        imageUrl:
          "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/0625_07Indonesia_ATi_web-2025.jpg",
        description: "Informasi mengenai ketersediaan air bagi tanaman",
      },
      {
        title: "Prediksi Indeks Potensi Karhutla",
        href: "prediksi-indeks-potensi-karhutla/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai prediksi indeks potensi Karhutla yang akan terjadi di Indonesia",
      },
      {
        title: "Prediksi Musim",
        href: "prediksi-musim/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
        description: "Informasi mengenai prediksi musim yang akan terjadi di Indonesia",
      },
      {
        title: "Prediksi Musim Hujan",
        href: "prediksi-musim-hujan/detail",
        imageUrl:
          "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/Pemutakhiran-PMH-2425.jpg",
        description:
          "Informasi mengenai prediksi musim hujan yang akan terjadi di Indonesia",
      },
      {
        title: "Prediksi Musim Kemarau",
        href: "prediksi-musim-kemarau/detail",
        imageUrl:
          "https://i0.wp.com/content.bmkg.go.id/wp-content/uploads/PMK-Pemutakhiran-Mei-2025.png",
        description:
          "Informasi mengenai prediksi musim kemarau yang akan terjadi di Indonesia",
      },
      {
        title: "Peringatan Dini Kekeringan Meteorologis",
        href: "/peringatan-dini-kekeringan-meteorologis/detail",
        imageUrl:
          "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.jpg",
        description: "Informasi mengenai peringatan dini kekeringan meteorologis yang akan terjadi di Indonesia",
      },
      {
        title: "Peringatan Dini Curah Hujan Tinggi",
        href: "/peringatan-dini-curah-hujan-tinggi/detail",
        imageUrl:
          "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDCHT_latest.jpg",
        description: "Informasi mengenai peringatan dini curah hujan tinggi yang akan terjadi di Indonesia",
      },
      {
        title: "Kondisi ENSO (EL Nino dan La Nina)",
        href: "/kondisi-enso-el-nino-dan-la-nina/detail",
        imageUrl:
          "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/Global_SSTA_latest.gif",
        description: "Informasi kondisi ENSO (EL Nino dan La Nina).",
      },
      {
        title: "Indeks Persipitasi Terstandarisasi",
        href: "indeks-presipitasi-terstandarisasi/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
        description:
          "Informasi mengenai indeks presipitasi terstandarisasi yang akan terjadi di Indonesia",
      },
    ],
  },
  // Sumber Daya Air dan Bencana
  {
    slug: "air-bencana",
    title: "Informasi Iklim untuk Sektor Sumber Daya Air dan Bencana",
    data: [
      // Prediksi Daerah Potensi Banjir
      {
        title: "Prediksi Daerah Potensi Banjir",
        href: "prediksi-daerah-potensi-banjir/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai prediksi daerah potensi banjir yang akan terjadi di Indonesia",
      },
      // Monitoring Hari Tanpa Hujan
      {
        title: "Monitoring Hari Tanpa Hujan",
        href: "hari-tanpa-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai monitoring hari tanpa hujan yang akan terjadi di Indonesia",
      },
      // Prediksi Curah Hujan
      {
        title: "Prediksi Hujan Bulanan",
        href: "/prediksi-hujan-bulanan/daftar",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step1.png",
        description:
          "Informasi mengenai prediksi curah hujan bulanan yang akan terjadi di Indonesia",
      },
      {
        title: "Prediksi Hujan Dasarian",
        href: "/prediksi-hujan-dasarian/daftar",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_det_step1.png",
        description:
          "Informasi mengenai prediksi curah hujan dasarian yang akan terjadi di Indonesia",
      },
      // Prediksi Musim Hujan
      {
        title: "Prediksi Musim Hujan",
        href: "prediksi-musim-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai prediksi musim hujan yang akan terjadi di Indonesia",
      },
      // Prediksi Musim Kemarau
      {
        title: "Prediksi Musim Kemarau",
        href: "prediksi-musim-kemarau/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai prediksi musim kemarau yang akan terjadi di Indonesia",
      },
      // Prediksi SPI
      {
        title: "Prediksi Indeks Presipitasi Terstandardisasi",
        href: "prediksi-indeks-presipitasi-terstandarisasi/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi1.png",
        description: "Prediksi SPI 1",
      },
      // Peringatan Dini Iklim Ekstrem
      {
        title: "Peringatan Dini Iklim Ekstrem",
        href: "peringatan-dini-iklim-ekstrem/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai peringatan dini iklim ekstrem yang akan terjadi di Indonesia",
      },
      // Perkembangan ENSO dan IOD
      {
        title: "Perkembangan ENSO dan IOD",
        href: "perkembangan-enso-dan-iod/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description: "Informasi mengenai perkembangan ENSO dan IOD",
      },
      // Indeks Presipitasi Terstandarisasi
      {
        title: "Indeks Presipitasi Terstandarisasi",
        href: "indeks-presipitasi-terstandarisasi/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
        description:
          "Informasi mengenai indeks presipitasi terstandarisasi yang akan terjadi di Indonesia",
      },
    ],
  },
  // Kesehatan
  {
    slug: "kesehatan",
    title: "Informasi Iklim untuk Sektor Kesehatan",
    data: [
      // Peringatan Dini Demam Berdarah
      {
        title: "Peringatan Dini Demam Berdarah",
        href: "peringatan-dini-demam-berdarah/detail",
        imageUrl:
          "https://cews.bmkg.go.id/tempatikl/reports/rawdbd/AI_bul1.PNG",
        description:
          "Informasi mengenai peringatan dini demam berdarah yang akan terjadi di Indonesia",
      },
      // Monitoring Partikulat PM2.5 Realtime
      {
        title: "Monitoring Partikulat PM2.5 Realtime",
        href: "monitoring-partikulat-pm25-realtime/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai monitoring partikulat PM2.5 realtime yang akan terjadi di Indonesia",
      },
      // Informasi Partikulat SPM
      {
        title: "Informasi Partikulat SPM",
        href: "informasi-partikulat-spm/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai partikulat SPM yang akan terjadi di Indonesia",
      },
      // Informasi pH Air Hujan
      {
        title: "Informasi pH Air Hujan",
        href: "informasi-ph-air-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai pH air hujan yang akan terjadi di Indonesia",
      },
    ],
  },
  // Energi
  {
    slug: "energi",
    title: "Informasi Iklim untuk Sektor Energi",
    data: [
      // Potensi Energi Surya Stasiun
      {
        title: "Potensi Energi Surya Stasiun",
        href: "potensi-energi-surya-stasiun/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai potensi energi surya stasiun yang akan terjadi di Indonesia",
      },
      // Potensi Energi Surya Spasial
      {
        title: "Potensi Energi Surya Spasial",
        href: "potensi-energi-surya-spasial/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai potensi energi surya spasial yang akan terjadi di Indonesia",
      },
      // Prediksi Potensi Energi Surya
      {
        title: "Prediksi Potensi Energi Surya",
        href: "prediksi-potensi-energi-surya/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai prediksi potensi energi surya yang akan terjadi di Indonesia",
      },
      // Potensi Energi Angin Stasiun
      {
        title: "Potensi Energi Angin Stasiun",
        href: "potensi-energi-angin-stasiun/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai potensi energi angin stasiun yang akan terjadi di Indonesia",
      },
    ],
  },
  // Pembangunan
  {
    slug: "pembangunan",
    title: "Informasi Iklim untuk Sektor Pembangunan",
    data: [
      // Proyeksi Perubahan Curah Hujan
      {
        title: "Proyeksi Perubahan Curah Hujan",
        href: "proyeksi-perubahan-curah-hujan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai proyeksi perubahan curah hujan yang akan terjadi di Indonesia",
      },
      // Proyeksi Perubahan Suhu
      {
        title: "Proyeksi Perubahan Suhu",
        href: "proyeksi-perubahan-suhu-udara/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai proyeksi perubahan suhu yang akan terjadi di Indonesia",
      },
      // Anomali Suhu
      {
        title: "Anomali Suhu",
        href: "anomali-suhu-udara/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai anomali suhu yang akan terjadi di Indonesia",
      },
      // Ekstrem Perubahan Iklim
      {
        title: "Ekstrem Perubahan Iklim",
        href: "catatan-iklim-ekstrem/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        description:
          "Informasi mengenai ekstrem perubahan iklim yang akan terjadi di Indonesia",
      },
    ],
  },
  // Prediksi Hujan Bulanan
  {
    slug: "prediksi-hujan-bulanan",
    title: "Prediksi Curah Hujan Bulanan",
    data: [
      // Curah Hujan
      {
        title: "Curah Hujan",
        // href: "prediksi-hujan-bulanan/curah-hujan/detail",
        href: "prediksi-curah-hujan-bulanan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step1.png",
        description: "Informasi mengenai curah hujan bulanan",
      },
      // Sifat Hujan
      {
        title: "Sifat Hujan",
        // href: "prediksi-hujan-bulanan/sifat-hujan/detail",
        href: "prediksi-sifat-hujan-bulanan/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step1.png",
        description: "Informasi mengenai sifat hujan bulanan",
      },
      // Peluang Curah Hujan di atas 500
      {
        title: "Peluang Curah Hujan di atas 500",
        href: "peluang-curah-hujan-bulanan-di-atas-500/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di atas 500",
      },
      // Peluang Curah Hujan di atas 300
      {
        title: "Peluang Curah Hujan di atas 300",
        href: "peluang-curah-hujan-bulanan-di-atas-300/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di atas 300",
      },
      // Peluang Curah Hujan di atas 150
      {
        title: "Peluang Curah Hujan di atas 150",
        href: "peluang-curah-hujan-bulanan-di-atas-150/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di atas 150",
      },
      // Peluang Curah Hujan di bawah 150
      {
        title: "Peluang Curah Hujan di bawah 150",
        href: "peluang-curah-hujan-bulanan-di-bawah-150/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di bawah 150",
      },
      // Peluang Curah Hujan di atas 100
      {
        title: "Peluang Curah Hujan di Atas 100",
        href: "peluang-curah-hujan-bulanan-di-atas-100/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di atas 100",
      },
      // Peluang Curah Hujan di bawah 100
      {
        title: "Peluang Curah Hujan di Bawah 100",
        href: "peluang-curah-hujan-bulanan-di-bawah-100/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step1.png",
        description:
          "Informasi mengenai peluang curah hujan bulanan di bawah 100",
      },
    ],
  },
  // Prediksi Hujan Dasarian
  {
    slug: "prediksi-hujan-dasarian",
    title: "Prediksi Hujan Dasarian",
    data: [
      // Curah Hujan
      {
        title: "Curah Hujan",
        href: "prediksi-curah-hujan-dasarian/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_det_step1.png",
        description: "Informasi mengenai curah hujan dasarian",
      },
      // Sifat Hujan
      {
        title: "Sifat Hujan",
        href: "prediksi-sifat-hujan-dasarian/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_det_step1.png",
        description: "Informasi mengenai sifat hujan dasarian",
      },
      // Peluang Curah Hujan di atas 300
      {
        title: "Peluang Curah Hujan di Atas 300",
        href: "peluang-curah-hujan-dasarian-di-atas-300/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a300_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di atas 300",
      },
      // Peluang Curah Hujan di atas 150
      {
        title: "Peluang Curah Hujan di Atas 150",
        href: "peluang-curah-hujan-dasarian-di-atas-150/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a150_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di atas 150",
      },
      // Peluang Curah Hujan di bawah 150
      {
        title: "Peluang Curah Hujan di Bawah 150",
        href: "peluang-curah-hujan-dasarian-di-bawah-150/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b150_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di bawah 150",
      },
      // Peluang Curah Hujan di atas 100
      {
        title: "Peluang Curah Hujan di Atas 100",
        href: "peluang-curah-hujan-dasarian-di-atas-100/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a100_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di atas 100",
      },
      // Peluang Curah Hujan di bawah 100
      {
        title: "Peluang Curah Hujan di Bawah 100",
        href: "peluang-curah-hujan-dasarian-di-bawah-100/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b100_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di bawah 100",
      },
      // Peluang Curah Hujan di atas 50
      {
        title: "Peluang Curah Hujan di Atas 50",
        href: "peluang-curah-hujan-dasarian-di-atas-50/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a50_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di atas 50",
      },
      // Peluang Curah Hujan di bawah 50
      {
        title: "Peluang Curah Hujan di Bawah 50",
        href: "peluang-curah-hujan-dasarian-di-bawah-50/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b50_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di bawah 50",
      },
      // Peluang Curah Hujan di atas 20
      {
        title: "Peluang Curah Hujan di Atas 20",
        href: "peluang-curah-hujan-dasarian-di-atas-20/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a20_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di atas 20",
      },
      // Peluang Curah Hujan di bawah 20
      {
        title: "Peluang Curah Hujan di Bawah 20",
        href: "peluang-curah-hujan-dasarian-di-bawah-20/detail",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b20_step1.png",
        description:
          "Informasi mengenai peluang curah hujan dasarian di bawah 20",
      },
      /////////////////////////////////////////////////////////////////////// sampe sini dulu, 24 Jul 2025
    ],
  },
  // Lainnya
];

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
      // Generate Comming Soon
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Mohon Bersabar</h1>
        <p className="text-gray-600">
          Kami sedang mencari dan mengisi konten
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Card with image, some description, and button "Baca Selengkapnya" */}
      <main className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{item.title}</h2>
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