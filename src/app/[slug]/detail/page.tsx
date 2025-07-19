import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const data: {
  slug: string;
  title: string;
  imageUrl: string;
  descriptionUrl: string | null;
}[] = [
  // Iklim Terkini
  {
    slug: "hari-tanpa-hujan",
    title: "Hari Tanpa Hujan",
    imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
    descriptionUrl: "",
  },
  {
    slug: "perkembangan-musim",
    title: "Perkembangan Musim",
    imageUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
    descriptionUrl:
      "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_narasi.txt",
  },
  {
    slug: "anomali-suhu-udara",
    title: "Anomali Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Anomali+Suhu+Udara.png",
    descriptionUrl: "",
  },
  {
    slug: "indeks-iklim-global",
    title: "Indeks Iklim Global",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Indeks+Iklim+Global.png",
    descriptionUrl: "",
  },
  {
    slug: "catatan-iklim-ekstrem",
    title: "Catatan Iklim Ekstrem",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Catatan+Iklim+Ekstrem.png",
    descriptionUrl: "",
  },
  {
    slug: "indeks-ultraviolet",
    title: "Indeks Ultraviolet",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Indeks+Ultraviolet.png",
    descriptionUrl: "",
  },
  // Analisis Iklim
  {
    slug: "dinamika-atmosfer-dan-laut",
    title: "Dinamika Atmosfer dan Laut",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Dinamika+Atmosfer+dan+Laut.png",
    descriptionUrl: "",
  },
  {
    slug: "analisis-hujan-dasarian",
    title: "Analisis Hujan Dasarian",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Hujan+Dasarian.png",
    descriptionUrl: "",
  },
  {
    slug: "analisis-hujan-bulanan",
    title: "Analisis Hujan Bulanan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Hujan+Bulanan.png",
    descriptionUrl: "",
  },
  {
    slug: "indeks-presipitasi-terstandarisasi",
    title: "Indeks Presipitasi Terstandarisasi",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Indeks+Presipitasi+Terstandarisasi.png",
    descriptionUrl: "",
  },
  {
    slug: "ketersediaan-air-bagi-tanaman",
    title: "Ketersediaan Air bagi Tanaman",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Ketersediaan+Air+bagi+Tanaman.png",
    descriptionUrl: "",
  },
  {
    slug: "buletin",
    title: "Buletin",
    imageUrl: "https://placehold.co/1200x700/f5e9e8/333?text=Buletin.png",
    descriptionUrl: "",
  },
  // Peringatan Dini Iklim
  {
    slug: "peringatan-dini-kekeringan-meteorologis",
    title: "Peringatan Dini Kekeringan Meteorologis",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Peringatan+Dini+Kekeringan+Meteorologis.png",
    descriptionUrl: "",
  },
  {
    slug: "peringatan-dini-curah-hujan-tinggi",
    title: "Peringatan Dini Curah Hujan Tinggi",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Peringatan+Dini+Curah+Hujan+Tinggi.png",
    descriptionUrl: "",
  },
  {
    slug: "kondisi-enso-el-nino-dan-la-nina",
    title: "Kondisi ENSO (EL Nino dan La Nina)",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Kondisi+ENSO+(EL+Nino+dan+La+Nina).png",
    descriptionUrl: "",
  },
  // Prediksi Iklim
  {
    slug: "prediksi-musim",
    title: "Prediksi Musim",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Musim.png",
    descriptionUrl: "",
  },
  {
    slug: "prediksi-indeks-presipitasi-terstandarisasi",
    title: "Prediksi Indeks Presipitasi Terstandarisasi",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Indeks+Presipitasi+Terstandarisasi.png",
    descriptionUrl: "",
  },
  {
    slug: "prediksi-hujan-bulanan",
    title: "Prediksi Hujan Bulanan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Hujan+Bulanan.png",
    descriptionUrl: "",
  },
  {
    slug: "prediksi-hujan-dasarian",
    title: "Prediksi Hujan Dasarian",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+Hujan+Dasarian.png",
    descriptionUrl: "",
  },
  {
    slug: "prediksi-daerah-potensi-banjir",
    title: "Prediksi daerah Potensi Banjir",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Prediksi+daerah+Potensi+Banjir.png",
    descriptionUrl: "",
  },
  // Perubahan Iklim
  {
    slug: "data-iklim-harian",
    title: "Fakta Perubahan Iklim",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Fakta+Perubahan+Iklim.png",
    descriptionUrl: "",
  },
  {
    slug: "analisis-laju-perubahan-suhu-udara",
    title: "Analisis Laju Perubahan Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Laju+Perubahan+Suhu+Udara.png",
    descriptionUrl: "",
  },
  {
    slug: "data-iklim-tahunan",
    title: "Analisis Laju Perubahan Curah Hujan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Analisis+Laju+Perubahan+Curah+Hujan.png",
    descriptionUrl: "",
  },
  {
    slug: "proyeksi-perubahan-suhu-udara",
    title: "Proyeksi Perubahan Suhu Udara",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Proyeksi+Perubahan+Suhu+Udara.png",
    descriptionUrl: "",
  },
  {
    slug: "proyeksi-perubahan-curah-hujan",
    title: "Proyeksi Perubahan Curah Hujan",
    imageUrl:
      "https://placehold.co/1200x700/f5e9e8/333?text=Proyeksi+Perubahan+Curah+Hujan.png",
    descriptionUrl: "",
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

  // get descripsi from descripsiUlr (.txt) convert to string
  let description = null;
  if (item?.descriptionUrl) {
    const res = await fetch(item.descriptionUrl);
    description = await res.text();
  }

  if (!item) {
    return <>Data Not Found</>;
  }

  return (
    <>
      <main className="container mx-auto max-w-screen-lg mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {item.title}
        </h2>
        <p className="text-center text-gray-500  mb-8">Update: 15 Juli 2025</p>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={400}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-10 text-center bg-cyan-500 text-white hover:bg-indigo-600 mt-8 mb-8">
                  Deskripsi dan Analisis
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-justify text-gray-700">
                  <p>{description}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </>
  );
}
