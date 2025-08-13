import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";
import DetailIframe from "@/components/organisms/DetailFrame"; // Pastikan path ini benar
import detailJson from "@/../public/data/detail.json";
import { Metadata } from "next";

// Interface untuk data
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
  iframeUrl?: string | null;
}

// Tipe untuk props halaman
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Tipe untuk props generateMetadata
type MetadataProps = {
  params: { slug: string };
};

// --- FUNGSI UNTUK MENGAMBIL DATA ---
function getItemData(slug: string): Item | undefined {
  const data: Item[] = detailJson;
  return data.find((item) => item.slug === slug);
}

// --- FUNGSI UNTUK METADATA (DENGAN PERBAIKAN) ---
export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  // PERBAIKAN: params perlu di-await di sini juga
  const { slug } = params;
  const item = getItemData(slug);

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

// --- FUNGSI UNTUK GENERATE STATIC PARAMS (Sudah Benar) ---
export async function generateStaticParams() {
  const data: Item[] = detailJson;
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// --- KOMPONEN UTAMA HALAMAN (Sudah Benar) ---
export default async function DetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getItemData(slug);

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
