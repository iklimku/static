"use client";

import Image from "next/image";
import LogoBMKG from "@/../public/logo-bmkg.svg";
import GooglePlay from "@/../public/google-play.png";
import AppStore from "@/../public/app-store.png";
import BerAkhlak from "@/../public/Logo_BerAKHLAK.png";
import BerAkhlak2 from "@/../public/Logo_EVP.png";
import Link from "next/link";
import MapEmbed from "@/components/organisms/MapEmbed";

export function Footer() {
  return (
    <footer className="w-full  text-white mt-4">
      <div className=" mx-auto py-8 px-8 grid grid-cols-1 md:grid-cols-4 gap-8 bg-[var(--bmkgblue1)]">
        {/* Kolom 1: Logo dan Kontak */}
        <div className="justify-items-center md:justify-items-start md:text-start">
          {/* <div className="flex flex-col items-center gap-4 lg:flex-row bg-white p-4 rounded-lg w-fit mx-auto md:mx-0">
            <Image src={LogoBMKG} alt="Logo BMKG" height={56} />
            <Image src={BerAkhlak} alt="Logo BerAKHLAK" height={50} />
            <Image src={BerAkhlak2} alt="Logo BerAKHLAK" height={46} />
          </div> */}

          <h5 className="font-bold text-[var(--bmkgblue5)]">KONTAK KAMI</h5>
          <p className="text-sm mt-2">
            Jl. Angkasa I No.2 Kemayoran, Jakarta Pusat 10610,
            <br className="sm:hidden" />
            PO Box 3540 Jkt.
            <br />
            Faks (021) 4246703
            <br />
            cc196[at]bmkg.go.id
          </p>

          <div className="map-bmkg mt-2">
            <MapEmbed />
          </div>
        </div>

        {/* Kolom 2: Dukungan */}
        <div className="justify-items-center text-start md:justify-items-start ">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">DUKUNGAN</h5>
          <ul className="space-y-1 text-sm list-disc pl-4">
            <li>
              <Link
                className="hover:font-bold"
                href="https://bmkg.go.id/"
                target="_blank"
              >
                Website utama BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://iklim.bmkg.go.id/"
                target="_blank"
              >
                Climate Early Warning System (CEWS)
              </Link>
            </li>

            <li>
              <Link
                className="hover:font-bold"
                href="https://sih3.bmkg.go.id/main/"
                target="_blank"
              >
                Sistem Informasi Hidrologi Hidrometeorologi Hidrogeologi (SIH3)
              </Link>
            </li>

            <li>
              <Link
                className="hover:font-bold"
                href="https://mhews.bmkg.go.id/"
                target="_blank"
              >
                Multi Hazard Early Warning System (MHEWS)
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://hidromet-sih3.bmkg.go.id/main/"
                target="_blank"
              >
                Hidrometeorologi BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://wmo.int/"
                target="_blank"
              >
                World Meteorological Organization (WMO)
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Tautan */}
        <div className="justify-items-center text-start md:justify-items-start ">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">TAUTAN</h5>
          <ul className="space-y-1 text-sm list-disc pl-4">
            <li>
              <Link
                className="hover:font-bold"
                href="https://dataonline.bmkg.go.id/dataonline-home"
                target="_blank"
              >
                Data Online BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://ppid.bmkg.go.id/"
                target="_blank"
              >
                Pejabat Pengelola Informasi dan Dokumentasi (PPID) BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://ptsp.bmkg.go.id/"
                target="_blank"
              >
                Pelayanan Terpadu Satu Pintu (PTSP) BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://jdih.bmkg.go.id/"
                target="_blank"
              >
                Jaringan Dokumentasi dan Informasi Hukum (JDIH) BMKG
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Call Center & Aplikasi */}
        <div className="justify-items-center text-center md:justify-items-start lg:text-start md:text-start">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">
            CALL CENTER
          </h5>
          <p className="text-sm mb-4"> Contact Center (021) 196</p>

          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">
            DOWNLOAD APLIKASI
          </h5>
          <div className="flex items-center gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.Info_BMKG">
              <Image src={GooglePlay} alt="Google Play" height={56} />
            </Link>
            <Link href="https://apps.apple.com/id/app/info-bmkg/id1114372539">
              <Image src={AppStore} alt="App Store" height={56} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 p-4 w-full mx-auto md:mx-0 bottom-footer bg-[var(--bmkggreen3)] justify-center">
        <Image src={LogoBMKG} alt="Logo BMKG" height={36} />
        <Image src={BerAkhlak} alt="Logo BerAKHLAK" height={36} />
        <Image src={BerAkhlak2} alt="Logo BerAKHLAK" height={32} />
      </div>
    </footer>
  );
}

export default Footer;
