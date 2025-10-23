import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/components/organisms/Loading";
import daftarJson from "@/../public/data/daftar.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Item {
  slug: string;
  title: string;
  data: {
    title: string;
    href: string;
    imageUrl: string;
    description: string;
  }[];
}

export async function generateStaticParams() {
  const data: Item[] = daftarJson;
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Daftar({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: Item[] = daftarJson;
  const item = data.find((item) => item.slug === slug);
  if (!item) {
    return (
      // Generate Comming Soon
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Mohon Bersabar</h1>
        <p className="text-gray-600">Kami sedang mencari dan mengisi konten</p>
      </div>
    );
  }

  return (
    <>
      {/* Card with image, some description, and button "Baca Selengkapnya" */}
      <main className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {item.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {item.data.map((item, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between flex-1 basis-[calc(25%-1.5rem)] max-w-[300px] min-w-[250px]"
            >
              <CardContent className="p-4">
                <Suspense fallback={<Loading />}>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={1536}
                    height={800}
                    className="w-full h-48 object-cover rounded-md mb-4 pointer-events-none"
                  />
                </Suspense>
                <CardTitle className="text-lg font-semibold mb-2">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/${item.href}`}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[var(--bmkggreen1)] hover:bg-[var(--bmkggreen1)] hover:text-white"
                  >
                    Baca Selengkapnya
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
