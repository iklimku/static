import Image from "next/image"
import LogoBMKG from "@/../public/logo-bmkg.svg"
import GooglePlay from "@/../public/google-play.png"
import AppStore from "@/../public/app-store.png"
import Link from "next/link"


export function Footer() {
  return (
    <footer className="w-full h-auto border-t-2 border-black flex mt-4">
      <div className="container mx-auto py-4 grid grid-cols-3">
        <div>
          <Image src={LogoBMKG} alt="Logo BMKG" width={56} />
          <h5 className="font-bold mt-2">Kontak Kami</h5>
          <p className="text-sm">Jl. Angkasa I No.2 Kemayoran, Jakarta Pusat 10610, PO Box 3540 Jkt.
            <br/>Contact Center (021) 196 | Faks (021) 4246703 | cc196[at]bmkg.go.id</p>
        </div>
        <div>
          <h5 className="font-bold">Tautan</h5>
          <ul>
            <li>
              <Link className="hover:font-bold" href="/">Beranda</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/iklim-terkini">Iklim Terkini</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/analisis-iklim">Analisis Iklim</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/peringatan-dini-iklim">Peringatan Dini Iklim</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/prediksi-iklim">Prediksi Iklim</Link>
            </li>
            <li>
              <Link className="hover:font-bold" href="/perubahan-iklim">Perubahan Iklim</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Call Centre</h5>
          <p>196</p>
          <h5 className="font-bold">Download Aplikasi</h5>
          <div className="flex flex-row items-center">
            <Link href="https://play.google.com/store/apps/details?id=com.Info_BMKG">
              <Image src={ GooglePlay } alt="Google Play" height={56}/>
            </Link>
            <Link href={"https://apps.apple.com/id/app/info-bmkg/id1114372539"}>
              <Image src={ AppStore } alt="App Store" height={38}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;