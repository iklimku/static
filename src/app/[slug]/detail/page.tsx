import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";
import DetailIframe from "@/components/organisms/DetailFrame";
import detailJson from "@/../public/data/detail.json";
import { Metadata } from "next";

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

type Props = {
  params: Promise<{ slug: string }>;
};

function getItemData(slug: string): Item | undefined {
  const data: Item[] = detailJson;
  return data.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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

export async function generateStaticParams() {
  const data: Item[] = detailJson;
  return data.map((item) => ({
    slug: item.slug,
  }));
}

// --- KOMPONEN UTAMA HALAMAN
export default async function DetailPage({ params }: Props) {
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

  // Fetch main description if URL is provided
  if (item.descriptionUrl) {
    try {
      const res = await fetch(item.descriptionUrl, {
        next: { revalidate: 3600 }, // Cache for 1 hour
      });
      if (res.ok) {
        const text = await res.text();
        item.description = text.replace(/;/g, ".<br/>").replace(/\n/g, "<br/>");
      }
    } catch (error) {
      console.error("Error fetching description:", error);
    }
  }

  // Fetch descriptions for tabs if needed
  if (item.tabs && item.tabs.length > 0) {
    const resolvedTabs = await Promise.all(
      item.tabs.map(async (tab) => {
        if (!tab.descriptionUrl) {
          return tab;
        }
        try {
          const res = await fetch(tab.descriptionUrl, {
            next: { revalidate: 3600 }, // Cache for 1 hour
          });
          if (!res.ok) throw new Error("Failed to fetch");
          let description = await res.text();
          description = description
            .replace(/;/g, ".<br/>")
            .replace(/\n/g, "<br/>");
          return { ...tab, description };
        } catch (error) {
          console.error(`Error fetching description for ${tab.title}:`, error);
          return {
            ...tab,
            description: tab.description || "Deskripsi tidak tersedia.",
          };
        }
      })
    );
    item.tabs = resolvedTabs;
  }

  // --- LOGIKA RENDER KONTEN ---
  if (item.iframeUrl) {
    return <DetailIframe {...item} />;
  } else if (item.tabs && item.tabs.length > 0) {
    return <DetailTabs title={item.title} tabs={item.tabs} />;
  } else {
    return <DetailWithoutTabs {...item} />;
  }
}
