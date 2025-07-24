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
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
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
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.png",
        descriptionUrl:
          "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.txt",
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
      "https://placehold.co/1200x700/f5e9e8/333?text=Peringatan+Dini+Kekeringan+Meteorologis.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "peringatan-dini-curah-hujan-tinggi",
    title: "Peringatan Dini Curah Hujan Tinggi",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Peringatan+Dini+Curah+Hujan+Tinggi.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "kondisi-enso-el-nino-dan-la-nina",
    title: "Kondisi ENSO (EL Nino dan La Nina)",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Kondisi+ENSO+(EL+Nino+dan+La+Nina).png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  // Prediksi Iklim
  {
    slug: "prediksi-musim",
    title: "Prediksi Musim",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Musim.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "prediksi-indeks-presipitasi-terstandarisasi",
    title: "Prediksi Indeks Presipitasi Terstandarisasi",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Indeks+Presipitasi+Terstandarisasi.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
  {
    slug: "prediksi-hujan-bulanan",
    title: "Prediksi Hujan Bulanan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Hujan+Bulanan.png",
    descriptionUrl: "",
    description: "",
    tabs: null,
  },
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
