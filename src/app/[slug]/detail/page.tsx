import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";
import detailJson from "@/../public/data/detail.json";

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

export async function generateStaticParams() {
  const data: Item[] = detailJson
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
  const data: Item[] = detailJson

  // get title, imageUrl, and descriptionUrl from data by slug
  const item = data.find((item) => item.slug === slug);

  // Show "Mohon Bersabar" if item not found, or if it's a simple page without an image.
  if (!item || (!item.tabs && item.imageUrl === "")) {
    return (
      // Generate Comming Soon
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Mohon Bersabar</h1>
        <p className="text-gray-600">Kami sedang mencari dan mengisi konten</p>
      </div>
    );
  }

  if (item.tabs) {
    // if item has tabs, return DetailTabs component
    return <DetailTabs {...item} />;
  }
  return <DetailWithoutTabs {...item} />;
}
