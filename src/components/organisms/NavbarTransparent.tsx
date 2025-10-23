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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bmkgblue1)] text-white shadow-md"
          : "bg-[var(--bmkggrey2)] text-black"
      }`}
    >
      {/* 🔹 HEADER BAR */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={LogoBMKG} alt="Logo BMKG" height={48} />
          <div className="hidden sm:flex flex-col">
            <span
              className={`text-xs font-bold 2xl:text-sm ${
                scrolled ? "text-white" : "text-black"
              }`}
            >
              Badan Meteorologi, Klimatologi, dan Geofisika
            </span>
            <span
              className={`text-xs ${
                scrolled ? "text-gray-100" : "text-muted-foreground"
              }`}
            >
              Deputi Bidang Klimatologi
            </span>
          </div>
        </Link>

        {/* Menu Button (Mobile) */}
        <button
          className="xl:hidden transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu
            className={`w-6 h-6 transition-colors ${
              scrolled ? "text-white" : "text-[var(--bmkggreen1)]"
            }`}
          />
        </button>

        {/* 🔹 Desktop Menu */}
        <div className="hidden xl:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {datas.map((data) => (
                <NavigationMenuItem key={data.title}>
                  <NavigationMenuTrigger
                    className={`text-[12px] font-normal p-1 transition-all duration-200 
                    ${
                      scrolled
                        ? "text-white hover:text-[var(--bmkggreen3)] hover:font-bold active:text-[var(--bmkggreen3)] aria-expanded:text-[var(--bmkggreen3)]"
                        : "text-black hover:text-[var(--bmkggreen1)] hover:font-bold active:text-[var(--bmkggreen1)] aria-expanded:text-[var(--bmkggreen1)]"
                    }`}
                  >
                    {data.title}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="p-4 min-w-[700px] border shadow-lg rounded-md bg-white/95 text-gray-800 border-gray-200">
                    <ul className="grid gap-2 md:grid-cols-4">
                      {data.subMenu.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
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

      {/* 🔹 MOBILE DROPDOWN AREA */}
      {isOpen && (
        <div className="xl:hidden bg-white text-black px-4 pb-4 border-t shadow-sm">
          <Accordion type="multiple" className="w-full">
            {datas.map((data) => (
              <AccordionItem key={data.title} value={data.title}>
                <AccordionTrigger className="text-left text-[12px] font-semibold hover:text-[var(--bmkggreen1)] active:text-[var(--bmkggreen1)] aria-expanded:text-[var(--bmkggreen1)] transition-colors">
                  {data.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {data.subMenu.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 rounded-md text-gray-800 hover:bg-[var(--bmkggreen3)] active:bg-[var(--bmkggreen3)] aria-[current=page]:bg-[var(--bmkggreen3)] active:font-bold hover:font-bold transition"
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

function ListItem({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block px-3 py-2 rounded-md text-[10px] hover:bg-[var(--bmkggreen3)] active:bg-[var(--bmkggreen3)] hover:text-black active:text-black transition-all duration-200"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default NavbarTransparent;
