"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navbarData from "@/../public/data/navbar.json";
import daftarData from "@/../public/data/daftar.json";
import detailData from "@/../public/data/detail.json";

interface BreadcrumbItem {
  title: string;
  href?: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // jangan tampilkan di beranda
  if (pathname === "/") return null;

  const pathParts = pathname.split("/").filter(Boolean);
  let breadcrumb: BreadcrumbItem[] = [];

  // Dari navbar.json
  for (const menu of navbarData) {
    for (const sub of menu.subMenu) {
      if (pathname.startsWith(sub.href)) {
        breadcrumb.push({ title: menu.title, href: "/" });
        breadcrumb.push({ title: sub.title, href: sub.href });
      }
    }
  }

  // Dari daftar.json
  if (pathParts.length >= 2) {
    const [slug, section] = pathParts;
    const daftarItem = daftarData.find((d) => d.slug === slug);
    if (daftarItem) {
      breadcrumb.push({ title: daftarItem.title, href: `/${slug}/daftar` });

      if (section === "detail") {
        const detailSlug = slug;
        const detailItem = detailData.find((d) => d.slug === detailSlug);
        if (detailItem) breadcrumb.push({ title: detailItem.title });
      }
    }
  }

  // Fallback /slug/detail tanpa daftar
  if (breadcrumb.length === 0 && pathParts.length === 2) {
    const slug = pathParts[0];
    const detailItem = detailData.find((d) => d.slug === slug);
    if (detailItem) {
      let parentCategory;
      navbarData.forEach((menu) => {
        menu.subMenu.forEach((sub) => {
          if (sub.href.includes(slug)) parentCategory = menu.title;
        });
      });
      if (parentCategory) breadcrumb.push({ title: parentCategory, href: "/" });
      breadcrumb.push({ title: detailItem.title, href: `/${slug}/detail` });
    }
  }

  // Tambahkan label terakhir (daftar/detail)
  if (pathname.endsWith("/daftar")) breadcrumb.push({ title: "Daftar" });
  if (pathname.endsWith("/detail")) breadcrumb.push({ title: "Detail" });

  if (breadcrumb.length === 0) return null; // fallback: gak render kalau kosong

  return (
    <nav className="text-sm my-4 flex justify-center text-[var(--bmkggreen1)]">
      <ol className="flex flex-wrap items-center space-x-2">
        {breadcrumb.map((item, idx) => (
          <li key={idx} className="flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            ) : (
              <span className="font-semibold text-gray-800">{item.title}</span>
            )}
            {idx < breadcrumb.length - 1 && (
              <span className="mx-2 text-gray-400">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
