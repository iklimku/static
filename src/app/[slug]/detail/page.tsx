import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";

interface Tab {
  title: string;
  imageUrl: string;
  descriptionUrl: string;
  description: string;
}

interface Item {
  slug: string;
  title: string;
  imageUrl: string;
  descriptionUrl: string;
  description: string;
  tabs: Tab[] | null;
}

const data: Item[] = [
  // Iklim Terkini
  {
    slug: "hari-tanpa-hujan",
    title: "Hari Tanpa Hujan",
    imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
    descriptionUrl: "",
    description: "Informasi Hari Tanpa Hujan",
    tabs: null,
  },
  {
    slug: "perkembangan-musim",
    title: "Perkembangan Musim",
    imageUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
    descriptionUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_narasi.txt",
    description: "",
    tabs: null,
  },
  {
    slug: "anomali-suhu-udara",
    title: "Anomali Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Anomali+Suhu+Udara.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "indeks-iklim-global",
    title: "Indeks Iklim Global",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Indeks+Iklim+Global.png",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "AUSMI",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/ausmi_index.png",
        descriptionUrl: "",
        description: "Informasi terkait Australian Monsoon Index (ausmi)",
      },
      {
        title: "CENS",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/cens_index.png",
        descriptionUrl: "",
        description: "Informasi terkait Cross Equatorial Northly Surges (CENS)",
      },
      {
        title: "SCSCEF",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/scscef_index.png",
        descriptionUrl: "",
        description:
          "Informasi terkait South China Sea Cross Equatorial Flow (SCSCEF)",
      },
      {
        title: "WNPMI",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/wnpmi_index.png",
        descriptionUrl: "",
        description:
          "Informasi terkait Western North Pacific Monsoon Index (WNPMI)",
      },
    ],
  },
  {
    slug: "catatan-iklim-ekstrem",
    title: "Catatan Iklim Ekstrem",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Catatan+Iklim+Ekstrem.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "indeks-ultraviolet",
    title: "Indeks Ultraviolet",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Indeks+Ultraviolet.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  // Analisis Iklim
  {
    slug: "dinamika-atmosfer-dan-laut",
    title: "Dinamika Atmosfer dan Laut",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Dinamika+Atmosfer+dan+Laut.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "analisis-hujan-dasarian",
    title: "Analisis Hujan Dasarian",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "Analisis Curah Hujan Dasarian",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.txt",
        description: "",
      },
      {
        title: "Analisis Sifat Hujan Dasarian",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.txt",
        description: "",
      },
    ],
  },
  {
    slug: "analisis-hujan-bulanan",
    title: "Analisis Hujan Bulanan",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "Analisis Curah Hujan Bulanan",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.txt",
        description: "",
      },
      {
        title: "Analisis Sifat Hujan Bulanan",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.txt",
        description: "",
      },
    ],
  },
  {
    slug: "indeks-presipitasi-terstandarisasi",
    title: "Indeks Presipitasi Terstandarisasi",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "SPI-1",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
        descriptionUrl: "",
        description: "Informasi mengenai indeks presipitasi terstandarisasi 1",
      },
      {
        title: "SPI-3",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
        descriptionUrl: "",
        description: "Informasi mengenai indeks presipitasi terstandarisasi 3",
      },
      {
        title: "SPI-6",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
        descriptionUrl: "",
        description: "Informasi mengenai indeks presipitasi terstandarisasi 6",
      },
    ],
  },
  {
    slug: "ketersediaan-air-bagi-tanaman",
    title: "Ketersediaan Air bagi Tanaman",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Ketersediaan+Air+bagi+Tanaman.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "buletin",
    title: "Buletin",
    imageUrl: "https://placehold.co/1200x700/f5e9e8/333?text=Buletin.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  // Peringatan Dini Iklim
  {
    slug: "peringatan-dini-kekeringan-meteorologis",
    title: "Peringatan Dini Kekeringan Meteorologis",
    imageUrl:
      "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.jpg",
    descriptionUrl:
      "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.txt",
    description: "",
    tabs: null,
  },
  {
    slug: "peringatan-dini-curah-hujan-tinggi",
    title: "Peringatan Dini Curah Hujan Tinggi",
    imageUrl:
      "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDCHT_latest.jpg",
    descriptionUrl:
      "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDCHT_latest.txt",
    description: "",
    tabs: null,
  },
  {
    slug: "kondisi-enso-el-nino-dan-la-nina",
    title: "Kondisi ENSO (EL Nino dan La Nina)",
    imageUrl:
      "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/Global_SSTA_latest.gif",
    descriptionUrl: "",
    description: "Informasi kondisi ENSO (EL Nino dan La Nina).",
    tabs: null,
  },
  // Prediksi Iklim
  {
    slug: "prediksi-musim",
    title: "Prediksi Musim",
    imageUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
    descriptionUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_narasi.txt",
    description: "",
    tabs: null,
  },
  {
    slug: "prediksi-indeks-presipitasi-terstandarisasi",
    title: "Prediksi Indeks Presipitasi Terstandarisasi",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "Prakiraan SPI-1",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi1.png",
        descriptionUrl: "",
        description: "Prakiraan SPI-1",
      },
      {
        title: "Prakiraan SPI-3",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi3.png",
        descriptionUrl: "",
        description: "Prakiraan SPI-3",
      },
      {
        title: "Prakiraan SPI-6",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi6.png",
        descriptionUrl: "",
        description: "Prakiraan SPI-6",
      },
    ],
  },
  // {
  //   slug: "prediksi-hujan-bulanan",
  //   title: "Prediksi Hujan Bulanan",
  //   imageUrl:
  //     "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Hujan+Bulanan.png",
  //   descriptionUrl: "",
  //   description: "",
  //   tabs: null,
  // },
  {
    slug: "prediksi-curah-hujan-bulanan",
    title: "Prediksi Curah Hujan Bulanan",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "PCH Bulanan Deterministik Step 1",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step1.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step1.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 2",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step2.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step2.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 3",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step3.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step3.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 4",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step4.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step4.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 5",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step5.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step5.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 6",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step6.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step6.txt",
        description: "",
      },
      {
        title: "PCH Bulanan Deterministik Step 7",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step7.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step7.txt",
        description: "",
      },
    ],
  },
  // PREDIKSI SIFAT HUJAN BULANAN
  {
    slug: "prediksi-sifat-hujan-bulanan",
    title: "Prediksi Sifat Hujan Bulanan",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "PSH Bulanan Deterministik Step 1",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step1.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step1.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 2",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step2.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step2.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 3",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step3.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step3.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 4",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step4.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step4.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 5",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step5.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step5.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 6",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step6.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step6.txt",
        description: "",
      },
      {
        title: "PSH Bulanan Deterministik Step 7",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step7.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step7.txt",
        description: "",
      },
    ],
  },
  // PELUANG CURAH HUJAN ATAS 500
  {
    slug: "peluang-curah-hujan-bulanan-di-atas-500",
    title: "Peluang Curah Hujan Bulanan di Atas 500",
    imageUrl: "",
    descriptionUrl: "",
    description: "",
    tabs: [
      {
        title: "PCH Bulanan di Atas 500 (Step 1)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step1.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 1)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 2)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step2.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 2)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 3)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step3.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 3)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 4)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step4.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 4)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 5)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step5.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 5)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 6)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step6.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 6)",
      },
      {
        title: "PCH Bulanan di Atas 500 (Step 7)",
        imageUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step7.png",
        descriptionUrl: "",
        description: "Informasi PCH Bulanan di Atas 500 (Step 7)",
      },
    ],
  },
  // PREDIKSI CURAH HUJAN DASARIAN
  {
    slug: "prediksi-hujan-dasarian",
    title: "Prediksi Hujan Dasarian",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Hujan+Dasarian.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "prediksi-daerah-potensi-banjir",
    title: "Prediksi daerah Potensi Banjir",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+daerah+Potensi+Banjir.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  // Perubahan Iklim
  {
    slug: "data-iklim-harian",
    title: "Fakta Perubahan Iklim",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Fakta+Perubahan+Iklim.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "analisis-laju-perubahan-suhu-udara",
    title: "Analisis Laju Perubahan Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Laju+Perubahan+Suhu+Udara.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "data-iklim-tahunan",
    title: "Analisis Laju Perubahan Curah Hujan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Laju+Perubahan+Curah+Hujan.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "proyeksi-perubahan-suhu-udara",
    title: "Proyeksi Perubahan Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Proyeksi+Perubahan+Suhu+Udara.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "proyeksi-perubahan-curah-hujan",
    title: "Proyeksi Perubahan Curah Hujan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Proyeksi+Perubahan+Curah+Hujan.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
];

export async function generateStaticParams() {
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // get title, imageUrl, and descriptionUrl from data by slug
  const item = data.find((item) => item.slug === slug);

  if (!item) {
    return <>Data Not Found</>;
  } else if (item.tabs) {
    // if item has tabs, return DetailTabs component
    return <DetailTabs {...item} />;
  }
  return <DetailWithoutTabs {...item} />;
}
