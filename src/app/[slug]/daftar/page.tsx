import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const data:
{
  slug: string;
  title: string;
  data: {
    title: string;
    href: string;
    imageUrl: string;
    descriptionUrl: string;
    description: string;
  }[];
}[] = [
  {
    slug: "pertanian",
    title: "Pertanian dan Kehutanan",
    data: [
      {
        title: "Prediksi Curah Hujan",
        href: "prediksi-curah-hujan",
        imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        descriptionUrl: "",
        description: ""
      },
      {
        title: "Hari Tanpa Hujan",
        href: "/hari-tanpa-hujan/detail",
        imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        descriptionUrl: "",
        description: ""
      },
      {
        title: "Perkembangan ENSO dan IOD",
        href: "/perkembangan-enso-dan-iod",
        imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        descriptionUrl: "",
        description: ""
      },
      {
        title: "Ketersediaan Air bagi Tanaman",
        href: "/ketersediaan-air-bagi-tanaman",
        imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
        descriptionUrl: "",
        description: ""
      }
    ]
  }
]

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
      <>
        Data Not Found
      </>
    )
  }

  return (
    <>
      {/* Card with image, some description, and button "Baca Selengkapnya" */}
      <main className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Daftar {item.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Filter data based on slug (category) */}
          {/* For now, let's just display all items from the 'data' array for demonstration */}
          {/* In a real application, you would filter 'data' based on 'slug' */}
          {item.data.map((item, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardContent className="p-4">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={1536}
                  height={800}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardTitle className="text-lg font-semibold mb-2">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  { item.description }
                </CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/${item.href}/detail`} passHref>
                  <Button className="w-full">Baca Selengkapnya</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}