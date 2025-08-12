import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";
// PERBAIKAN: Kita akan buat komponen khusus untuk Iframe agar lebih rapi
import DetailIframe from "@/components/organisms/DetailFrame";
import detailJson from "@/../public/data/detail.json";
import { Metadata } from "next";

// PERBAIKAN: Update interface untuk menyertakan iframeUrl dari pembahasan kita sebelumnya
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
  iframeUrl?: string | null; // <-- Punya iframeUrl atau engga
}

// --- FUNGSI UNTUK MENGAMBIL DATA ---
function getItemData(slug: string): Item | undefined {
  const data: Item[] = detailJson;
  return data.find((item) => item.slug === slug);
}

// --- FUNGSI UNTUK METADATA
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getItemData(params.slug);

  if (!item) {
    return {
      title: "Halaman Tidak Ditemukan",
      description: "Konten yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: item.title,
    description: item.description || `Informasi detail mengenai ${item.title}`,
  };
}

export async function generateStaticParams() {
  const data: Item[] = detailJson;
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// --- KOMPONEN UTAMA HALAMAN ---
export default function DetailPage({ params }: { params: { slug: string } }) {
  // PERBAIKAN: 'params' bukan promise di App Router, jadi tidak perlu 'await'
  const { slug } = params;
  const item = getItemData(slug);

  // Tampilkan jika item tidak ada, atau jika tidak ada konten sama sekali untuk ditampilkan
  if (
    !item ||
    (!item.tabs && !item.imageUrl && !item.description && !item.iframeUrl)
  ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-800">Mohon Bersabar</h1>
        <p className="text-gray-600">
          Kami sedang menyiapkan konten untuk halaman ini.
        </p>
      </div>
    );
  }

  // --- LOGIKA RENDER KONTEN ---
  if (item.iframeUrl) {
    return <DetailIframe {...item} />;
  } else if (item.tabs && item.tabs.length > 0) {
    return <DetailTabs {...item} />;
  } else {
    return <DetailWithoutTabs {...item} />;
  }
}
