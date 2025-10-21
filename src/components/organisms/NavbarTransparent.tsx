"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import LogoBMKG from "@/../public/logo-bmkg.svg";
import navbarJson from "@/../public/data/navbar.json";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Data {
  title: string;
  subMenu: { title: string; href: string }[];
}

export function NavbarTransparent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const datas: Data[] = navbarJson;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-[var(--bmkgblue1)] text-white shadow-md"
          : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between transition-all duration-300">
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={LogoBMKG} alt="Logo BMKG" height={48} />
          <div className="hidden sm:flex flex-col">
            <span
              className={`text-xs font-bold 2xl:text-sm transition-colors duration-300 ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              Badan Meteorologi, Klimatologi, dan Geofisika
            </span>
            <span
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-gray-100" : "text-muted-foreground"
              }`}
            >
              Deputi Klimatologi
            </span>
          </div>
        </Link>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="xl:hidden transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu
            className={`w-6 h-6 transition-colors duration-300 ${
              scrolled ? "text-white" : "text-[var(--bmkggreen1)]"
            }`}
          />
        </button>

        {/* 🔹 Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {datas.map((data) => (
                <NavigationMenuItem key={data.title}>
                  <NavigationMenuTrigger
                    className={`text-[12px] font-normal p-1 transition-colors duration-300 ${
                      scrolled
                        ? "text-white hover:text-[var(--bmkggreen3)]"
                        : "text-black hover:text-[var(--bmkggreen1)]"
                    }`}
                  >
                    {data.title}
                  </NavigationMenuTrigger>

                  {/* 🔸 Perbaikan di sini: submenu ikut menyesuaikan warna background */}
                  {/* <NavigationMenuContent
                    className={`p-4 min-w-[400px] md:min-w-[500px] lg:min-w-[800px] border shadow-lg rounded-md z-50 backdrop-blur-md transition-all duration-300 ${
                      scrolled
                        ? "bg-[var(--bmkgblue1)] text-white border-blue-200"
                        : "bg-white/95 text-gray-800 border-gray-200"
                    }`}
                  > */}

                  <NavigationMenuContent
                    className={`p-4 min-w-[400px] md:min-w-[500px] lg:min-w-[800px] border shadow-lg rounded-md z-50 backdrop-blur-md transition-all duration-300 ${
                      scrolled
                        ? "bg-white/95 text-gray-800 border-gray-200"
                        : "bg-white/95 text-gray-800 border-gray-200"
                    }`}
                  >
                    <ul className="grid gap-2 md:grid-cols-4">
                      {data.subMenu.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                          scrolled={scrolled}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Navigation */}
      {isOpen && (
        <div
          className={`xl:hidden px-4 pb-4 space-y-4 border-t transition-all duration-300 backdrop-blur-md ${
            scrolled
              ? "bg-[var(--bmkgblue1)] text-white"
              : "bg-white/90 text-black"
          }`}
        >
          <Accordion type="multiple" className="w-full">
            {datas.map((data) => (
              <AccordionItem key={data.title} value={data.title}>
                <AccordionTrigger className="text-left text-[12px] font-semibold">
                  {data.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {data.subMenu.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className={`block px-4 py-2 rounded-md transition ${
                            scrolled
                              ? "hover:bg-blue-700/60"
                              : "hover:bg-[var(--bmkggreen3)] text-gray-800"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="text-[10px] font-semibold">
                            {item.title}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </nav>
  );
}

/* 🔹 Ubah ListItem agar bisa menerima prop scrolled */
function ListItem({
  title,
  href,
  scrolled,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  scrolled?: boolean;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
            scrolled
              ? "hover:bg-[var(--bmkggreen3)] hover:text-black"
              : "hover:bg-[var(--bmkggreen3)] hover:text-black"
          }`}
        >
          <div className="text-[10px]">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default NavbarTransparent;
