"use client";

import Image from "next/image";
import LogoBMKG from "@/../public/logo-bmkg.svg";
import GooglePlay from "@/../public/google-play.png";
import AppStore from "@/../public/app-store.png";
import BerAkhlak from "@/../public/Logo_BerAKHLAK.png";
import BerAkhlak2 from "@/../public/Logo_EVP.png";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--bmkgblue1)] text-white mt-4">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1: Logo dan Kontak */}
        <div className="justify-items-center text-center md:justify-items-start md:text-start">
          <div className="flex flex-col items-center gap-4 lg:flex-row bg-white p-4 rounded-lg w-fit mx-auto md:mx-0">
            {/* <Image src={LogoBMKG} alt="Logo BMKG" height={56} /> */}
            <Image src={BerAkhlak} alt="Logo BerAKHLAK" height={50} />
            <Image src={BerAkhlak2} alt="Logo BerAKHLAK" height={46} />
          </div>
          <h5 className="font-bold mt-4 text-[var(--bmkgblue5)]">
            KONTAK KAMI
          </h5>
          <p className="text-sm mt-2">
            Jl. Angkasa I No.2 Kemayoran, Jakarta Pusat 10610,
            <br className="sm:hidden" />
            PO Box 3540 Jkt.
            <br />
            Contact Center (021) 196
            <br />
            Faks (021) 4246703
            <br />
            cc196[at]bmkg.go.id
          </p>
        </div>

        {/* Kolom 2: Dukungan */}
        <div className="justify-items-center text-center md:justify-items-start md:text-start">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">DUKUNGAN</h5>
          <ul className="space-y-1 text-sm">
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
                href="https://cews.bmkg.go.id/"
                target="_blank"
              >
                Climate Early Warning System (CEWS)
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://iklim.bmkg.go.id/"
                target="_blank"
              >
                Klimatologi BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://inatews.bmkg.go.id/"
                target="_blank"
              >
                InaTEWS
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
        <div className="justify-items-center text-center md:justify-items-start md:text-start">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">TAUTAN</h5>
          <ul className="space-y-1 text-sm">
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
                PPID BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://ptsp.bmkg.go.id/"
                target="_blank"
              >
                PTSP BMKG
              </Link>
            </li>
            <li>
              <Link
                className="hover:font-bold"
                href="https://jdih.bmkg.go.id/"
                target="_blank"
              >
                JDIH BMKG
              </Link>
            </li>
            <li></li>
              <Link
                className="hover:font-bold"
                href="https://portal.bmkg.go.id/"
                target="_blank"
              >
                SSO BMKG
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 4: Call Center & Aplikasi */}
        <div className="justify-items-center text-center md:justify-items-start md:text-start">
          <h5 className="font-bold mb-2 text-[var(--bmkgblue5)]">
            CALL CENTER
          </h5>
          <p className="text-sm mb-4">196</p>

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
    </footer>
  );
}

export default Footer;
