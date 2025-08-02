import DetailTabs from "@/components/organisms/DetailTabs";
import DetailWithoutTabs from "@/components/organisms/DetailWithoutTabs";
import detailJson from "@/../public/data/detail.json";

interface Tab {
  title: string;
  imageUrl: string;
  descriptionUrl: string;
  description: string;
}

interface Item {
  slug: string;
  title: string;
  imageUrl: string;
  descriptionUrl: string;
  description: string;
  tabs: Tab[] | null;
}

// const data: Item[] = [
//   // Iklim Terkini
//   {
//     slug: "hari-tanpa-hujan",
//     title: "Hari Tanpa Hujan",
//     imageUrl: "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/HTH/hth.png",
//     descriptionUrl: "",
//     description: "Informasi Hari Tanpa Hujan",
//     tabs: null,
//   },
//   {
//     slug: "perkembangan-musim",
//     title: "Perkembangan Musim",
//     imageUrl:
//       "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
//     descriptionUrl:
//       "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_narasi.txt",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "anomali-suhu-udara",
//     title: "Anomali Suhu Udara",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "indeks-iklim-global",
//     title: "Indeks Iklim Global",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "AUSMI",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/ausmi_index.png",
//         descriptionUrl: "",
//         description: "Informasi terkait Australian Monsoon Index (ausmi)",
//       },
//       {
//         title: "CENS",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/cens_index.png",
//         descriptionUrl: "",
//         description: "Informasi terkait Cross Equatorial Northly Surges (CENS)",
//       },
//       {
//         title: "SCSCEF",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/scscef_index.png",
//         descriptionUrl: "",
//         description:
//           "Informasi terkait South China Sea Cross Equatorial Flow (SCSCEF)",
//       },
//       {
//         title: "WNPMI",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/INDEX/wnpmi_index.png",
//         descriptionUrl: "",
//         description:
//           "Informasi terkait Western North Pacific Monsoon Index (WNPMI)",
//       },
//     ],
//   },
//   {
//     slug: "catatan-iklim-ekstrem",
//     title: "Catatan Iklim Ekstrem",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "indeks-ultraviolet",
//     title: "Indeks Ultraviolet",
//     imageUrl:
//       "https://cews.bmkg.go.id/UVI-Indonesia/png/0-update-terbaru-berjalan/uv-compile-20250727.gif",
//     descriptionUrl: "",
//     description:
//       "Secara umum pita gelombang cahaya matahari dibagi menjadi tiga bagian utama yaitu sinar ultraviolet (UV) dengan panjang gelombang 100 - 400 nm. Berikutnya cahaya tampak atau cahaya yang bisa terlihat oleh mata manusia pada 400 - 700 nm. Kemudian bagian ketiga adalah sinar inframerah (IR) dengan panjang gelombang 700 nm - 1 mm. Sinar inframerah seperti juga sinar ultraviolet tidak bisa ditangkap oleh mata. Untuk diketahui 1 nm = 1 nanometer = 10-9 meter.\nSinar ultraviolet merupakan bagian gelombang elektromagnetik dari energi radiasi matahari pada pita 100-400 nm. Radiasi matahari yang menjangkau permukaan bumi sendiri berada pada sekitar panjang gelombang 100 nm sampai dengan 1 mm.\nBadan Meteorologi Dunia (World Meteorological Organisation/WMO) menuliskan bahwa sinar matahari yang kurang akan memengaruhi mood kita dan juga meningkatkan ancaman kekurangan vitamin D. Namun jika menerima paparan sinar matahari yang berlebihan akan menimbulkan bahaya bagi kesehatan.",
//     tabs: null,
//   },
//   // Analisis Iklim
//   {
//     slug: "dinamika-atmosfer-dan-laut",
//     title: "Dinamika Atmosfer dan Laut",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "analisis-hujan-dasarian",
//     title: "Analisis Hujan Dasarian",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Analisis Curah Hujan Dasarian",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.txt",
//         description: "",
//       },
//       {
//         title: "Analisis Sifat Hujan Dasarian",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ash_das.txt",
//         description: "",
//       },
//     ],
//   },
//   {
//     slug: "analisis-hujan-bulanan",
//     title: "Analisis Hujan Bulanan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Analisis Curah Hujan Bulanan",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ach_bln.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_DAS/ach_das.txt",
//         description: "",
//       },
//       {
//         title: "Analisis Sifat Hujan Bulanan",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ACH_BLN/ash_bln.txt",
//         description: "",
//       },
//     ],
//   },
//   {
//     slug: "indeks-presipitasi-terstandarisasi",
//     title: "Indeks Presipitasi Terstandarisasi",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "SPI-1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi1.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/SPI1_analisis_latest.txt",
//         description: "Informasi mengenai indeks presipitasi terstandarisasi 1",
//       },
//       {
//         title: "SPI-3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/SPI3_analisis_latest.txt",
//         description: "Informasi mengenai indeks presipitasi terstandarisasi 3",
//       },
//       {
//         title: "SPI-6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/ANSPI/anspi6.png",
//         descriptionUrl: "",
//         description: "Informasi mengenai indeks presipitasi terstandarisasi 6",
//       },
//     ],
//   },
//   {
//     slug: "ketersediaan-air-bagi-tanaman",
//     title: "Ketersediaan Air bagi Tanaman",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "buletin",
//     title: "Buletin",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   // Peringatan Dini Iklim
//   {
//     slug: "peringatan-dini-kekeringan-meteorologis",
//     title: "Peringatan Dini Kekeringan Meteorologis",
//     imageUrl:
//       "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.jpg",
//     descriptionUrl:
//       "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDKM_latest.txt",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "peringatan-dini-curah-hujan-tinggi",
//     title: "Peringatan Dini Curah Hujan Tinggi",
//     imageUrl:
//       "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDCHT_latest.jpg",
//     descriptionUrl:
//       "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/PDCHT_latest.txt",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "kondisi-enso-el-nino-dan-la-nina",
//     title: "Kondisi ENSO (EL Nino dan La Nina)",
//     imageUrl:
//       "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/Global_SSTA_latest.gif",
//     descriptionUrl: "",
//     description: "Informasi kondisi ENSO (EL Nino dan La Nina).",
//     tabs: null,
//   },
//   // Prakiraan Kualitas Udara
//   {
//     title: "Konsentrasi Partikulat (PM2,5)",
//     slug: "konsentrasi-partikulat",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "Informasi konsentrasi partikulat (PM2,5).",
//     tabs: null,
//   },
//   {
//     title: "Karbon Dioksida (CO2)",
//     slug: "karbon-dioksida",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "Informasi karbon dioksida (CO2).",
//     tabs: null,
//   },
//   {
//     title: "Karbon Monoksida (CO)",
//     slug: "karbon-monoksida",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "Informasi karbon monoksida (CO).",
//     tabs: null,
//   },
//   {
//     title: "Sulfur Dioksida (SO2)",
//     slug: "sulfur-dioksida",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "Informasi sulfur dioksida (SO2).",
//     tabs: null,
//   },
//   {
//     title: "Ozon Permukaan (O3)",
//     slug: "ozon-permukaan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "Informasi ozon permukaan (O3).",
//     tabs: null,
//   },
//   // Prediksi Iklim
//   {
//     slug: "prediksi-musim",
//     title: "Prediksi Musim",
//     imageUrl:
//       "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_poster.png",
//     descriptionUrl:
//       "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/MUSIM/permus_narasi.txt",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "prediksi-indeks-presipitasi-terstandarisasi",
//     title: "Prediksi Indeks Presipitasi Terstandarisasi",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Prakiraan SPI-1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi1.png",
//         descriptionUrl: "",
//         description: "Prakiraan SPI-1",
//       },
//       {
//         title: "Prakiraan SPI-3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/operational-early-warning-pdi/0_Latest/SPI3_prediksi_latest.txt",
//         description: "Prakiraan SPI-3",
//       },
//       {
//         title: "Prakiraan SPI-6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PRAKSPI/prakspi6.png",
//         descriptionUrl: "",
//         description: "Prakiraan SPI-6",
//       },
//     ],
//   },
//   // PREDIKSI CURAH HUJAN BULANAN DETERMINISTIK
//   {
//     slug: "prediksi-curah-hujan-bulanan",
//     title: "Prediksi Curah Hujan Bulanan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "PCH Bulanan Deterministik Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step1.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step1.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step2.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step2.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step3.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step4.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step4.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step5.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step5.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step6.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step6.txt",
//         description: "",
//       },
//       {
//         title: "PCH Bulanan Deterministik Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_det_step7.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_narasi_step7.txt",
//         description: "",
//       },
//     ],
//   },
//   // PREDIKSI SIFAT HUJAN BULANAN DETERMINISTIK
//   {
//     slug: "prediksi-sifat-hujan-bulanan",
//     title: "Prediksi Sifat Hujan Bulanan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "PSH Bulanan Deterministik Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step1.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step1.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step2.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step2.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step3.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step4.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step4.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step5.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step5.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step6.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step6.txt",
//         description: "",
//       },
//       {
//         title: "PSH Bulanan Deterministik Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_det_step7.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/psh_bln_narasi_step7.txt",
//         description: "",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN ATAS 500
//   {
//     slug: "peluang-curah-hujan-bulanan-di-atas-500",
//     title: "Peluang Curah Hujan Bulanan di Atas 500",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 6)",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a500_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 500 (Step 7)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN ATAS 300
//   {
//     slug: "peluang-curah-hujan-bulanan-di-atas-300",
//     title: "Peluang Curah Hujan Bulanan di Atas 300",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 6)",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a300_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 300 (Step 7)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN ATAS 150
//   {
//     slug: "peluang-curah-hujan-bulanan-di-atas-150",
//     title: "Peluang Curah Hujan Bulanan di Atas 150",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step )",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a150_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 150 (Step 7)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN BAWAH 150
//   {
//     slug: "peluang-curah-hujan-bulanan-di-bawah-150",
//     title: "Peluang Curah Hujan Bulanan di Bawah 150",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step )",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b150_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 150 (Step 7)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN ATAS 100
//   {
//     slug: "peluang-curah-hujan-bulanan-di-atas-100",
//     title: "Peluang Curah Hujan Bulanan di Atas 100",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step )",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_a100_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Atas 100 (Step 7)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN BULANAN BAWAH 100
//   {
//     slug: "peluang-curah-hujan-bulanan-di-bawah-100",
//     title: "Peluang Curah Hujan Bulanan di Bawah 100",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 3)",
//       },
//       {
//         title: "Step 4",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step4.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 4)",
//       },
//       {
//         title: "Step 5",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step5.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 5)",
//       },
//       {
//         title: "Step 6",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step6.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step )",
//       },
//       {
//         title: "Step 7",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_BLN/pch_bln_prob_b100_step7.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Bulanan di Bawah 100 (Step 7)",
//       },
//     ],
//   },
//   // PREDIKSI CURAH HUJAN DASARIAN DETERMINISTIK
//   {
//     slug: "prediksi-curah-hujan-dasarian",
//     title: "Prediksi Curah Hujan Dasarian",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_det_step1.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_narasi_step1.txt",
//         description: "",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_det_step2.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_narasi_step2.txt",
//         description: "",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_det_step3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_narasi_step3.txt",
//         description: "",
//       },
//     ],
//   },
//   // PREDIKSI SIFAT HUJAN DASARIAN DETERMINISTIK
//   {
//     slug: "prediksi-sifat-hujan-dasarian",
//     title: "Prediksi Sifat Hujan Dasarian",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_det_step1.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_narasi_step1.txt",
//         description: "",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_det_step2.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_narasi_step2.txt",
//         description: "",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_det_step3.png",
//         descriptionUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/psh_das_narasi_step3.txt",
//         description: "",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN ATAS 300
//   {
//     slug: "peluang-curah-hujan-dasarian-di-atas-300",
//     title: "Peluang Curah Hujan Dasarian di Atas 300",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a300_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 300 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a300_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 300 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a300_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 300 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN ATAS 150
//   {
//     slug: "peluang-curah-hujan-dasarian-di-atas-150",
//     title: "Peluang Curah Hujan Dasarian di Atas 150",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a150_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 150 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a150_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 150 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a150_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 150 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN BAWAH 150
//   {
//     slug: "peluang-curah-hujan-dasarian-di-bawah-150",
//     title: "Peluang Curah Hujan Dasarian di Bawah 150",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b150_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 150 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b150_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 150 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b150_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 150 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN ATAS 100
//   {
//     slug: "peluang-curah-hujan-dasarian-di-atas-100",
//     title: "Peluang Curah Hujan Dasarian di Atas 100",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a100_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 100 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a100_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 100 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a100_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 100 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN BAWAH 100
//   {
//     slug: "peluang-curah-hujan-dasarian-di-bawah-100",
//     title: "Peluang Curah Hujan Dasarian di Bawah 100",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b100_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 100 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b100_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 100 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b100_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 100 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN ATAS 50
//   {
//     slug: "peluang-curah-hujan-dasarian-di-atas-50",
//     title: "Peluang Curah Hujan Dasarian di Atas 50",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a50_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 50 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a50_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 50 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a50_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 50 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN BAWAH 50
//   {
//     slug: "peluang-curah-hujan-dasarian-di-bawah-50",
//     title: "Peluang Curah Hujan Dasarian di Bawah 50",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b50_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 50 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b50_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 50 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b50_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 50 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN ATAS 20
//   {
//     slug: "peluang-curah-hujan-dasarian-di-atas-20",
//     title: "Peluang Curah Hujan Dasarian di Atas 20",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a20_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 20 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a20_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 20 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_a20_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Atas 20 (Step 3)",
//       },
//     ],
//   },
//   // PELUANG CURAH HUJAN DASARIAN BAWAH 20
//   {
//     slug: "peluang-curah-hujan-dasarian-di-bawah-20",
//     title: "Peluang Curah Hujan Dasarian di Bawah 20",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: [
//       {
//         title: "Step 1",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b20_step1.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 20 (Step 1)",
//       },
//       {
//         title: "Step 2",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b20_step2.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 20 (Step 2)",
//       },
//       {
//         title: "Step 3",
//         imageUrl:
//           "https://cews.bmkg.go.id/robiganstatic/PRODUK_UPDATE/PCH_DAS/pch_das_prob_b20_step3.png",
//         descriptionUrl: "",
//         description: "Informasi PCH Dasarian di Bawah 20 (Step 3)",
//       },
//     ],
//   },
//   /////////////////////////////////////////////////////////////////////// sampe sini dulu, 24 Jul 2025
//   {
//     slug: "prediksi-daerah-potensi-banjir",
//     title: "Prediksi daerah Potensi Banjir",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   // Perubahan Iklim
//   {
//     slug: "data-iklim-harian",
//     title: "Fakta Perubahan Iklim",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "analisis-laju-perubahan-suhu-udara",
//     title: "Analisis Laju Perubahan Suhu Udara",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "data-iklim-tahunan",
//     title: "Analisis Laju Perubahan Curah Hujan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "proyeksi-perubahan-suhu-udara",
//     title: "Proyeksi Perubahan Suhu Udara",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   {
//     slug: "proyeksi-perubahan-curah-hujan",
//     title: "Proyeksi Perubahan Curah Hujan",
//     imageUrl: "",
//     descriptionUrl: "",
//     description: "",
//     tabs: null,
//   },
//   // Lainnya
// ];

export async function generateStaticParams() {
  const data: Item[] = detailJson
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: Item[] = detailJson

  // get title, imageUrl, and descriptionUrl from data by slug
  const item = data.find((item) => item.slug === slug);

  // Show "Mohon Bersabar" if item not found, or if it's a simple page without an image.
  if (!item || (!item.tabs && item.imageUrl === "")) {
    return (
      // Generate Comming Soon
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Mohon Bersabar</h1>
        <p className="text-gray-600">Kami sedang mencari dan mengisi konten</p>
      </div>
    );
  }

  if (item.tabs) {
    // if item has tabs, return DetailTabs component
    return <DetailTabs {...item} />;
  }
  return <DetailWithoutTabs {...item} />;
}
