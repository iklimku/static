import Image from "next/image";
import LogoBMKG from "@/../public/logo-bmkg.svg";
import GooglePlay from "@/../public/google-play.png";
import AppStore from "@/../public/app-store.png";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-cyan-100 mt-4">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Logo dan Kontak */}
        <div>
          <Image src={LogoBMKG} alt="Logo BMKG" width={56} />
          <h5 className="font-bold mt-4">Kontak Kami</h5>
          <p className="text-sm mt-2">
            Jl. Angkasa I No.2 Kemayoran, Jakarta Pusat 10610, PO Box 3540 Jkt.
            <br />
            Contact Center (021) 196
            <br />
            Faks (021) 4246703
            <br />
            cc196[at]bmkg.go.id
          </p>
        </div>

        {/* Kolom 2: Tautan */}
        <div>
          <h5 className="font-bold mb-2">Tautan</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:font-bold" href="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/iklim-terkini">
                Iklim Terkini
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/analisis-iklim">
                Analisis Iklim
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/peringatan-dini-iklim">
                Peringatan Dini Iklim
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/prediksi-iklim">
                Prediksi Iklim
              </Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/perubahan-iklim">
                Perubahan Iklim
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Call Center & Aplikasi */}
        <div>
          <h5 className="font-bold mb-2">Call Center</h5>
          <p className="text-sm mb-4">196</p>

          <h5 className="font-bold mb-2">Download Aplikasi</h5>
          <div className="flex items-center gap-4">
            <Link href="https://play.google.com/store/apps/details?id=com.Info_BMKG">
              <Image src={GooglePlay} alt="Google Play" height={56} />
            </Link>
            <Link href="https://apps.apple.com/id/app/info-bmkg/id1114372539">
              <Image src={AppStore} alt="App Store" height={38} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
