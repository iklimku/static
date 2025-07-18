import { MainCarousel } from "@/components/organisms/MainCarousel";
import { Sectorals } from "@/components/organisms/Sectorals";
import { Main } from "next/document";
import { MainTabs } from "@/components/organisms/Tabs";

export default function Home() {
  return (
    <>
      <main className="container mx-auto max-w-screen-lg">
        {/* Carousel */}
        <div className="w-auto h-auto">
          <MainCarousel />
        </div>

        {/* Daftar Sectoral */}
        <div className="w-auto h-auto mt-9">
          <Sectorals />
        </div>
        <div className="w-auto h-auto mt-9">
          <MainTabs />
        </div>
      </main>
    </>
  );
}
