const fs = require('fs');
const content = fs.readFileSync('pltaData.js', 'utf8');
const locStart = content.indexOf('locations: [');
const locEnd = content.lastIndexOf(']');
const locationsString = content.substring(locStart + 11, locEnd + 1);

const idGlossaryStr = JSON.stringify([
    { term: 'Energi Kinetik', desc: 'Energi yang dimiliki oleh sebuah benda karena gerakannya, dalam hal ini aliran air.' },
    { term: 'Energi Potensial', desc: 'Energi yang tersimpan pada benda karena posisi atau kedudukannya, seperti air di waduk yang tinggi.' },
    { term: 'Penstock (Pipa Pesat)', desc: 'Pipa besar yang menahan tekanan tinggi untuk mengalirkan air dari waduk ke turbin.' },
    { term: 'Powerhouse', desc: 'Gedung sentral tempat turbin dan generator di instalasi.' },
    { term: 'Turbin Air', desc: 'Mesin berputar yang mengambil energi kinetik dari aliran air yang deras.' },
    { term: 'Baseload', desc: 'Beban dasar listrik konstan 24 jam sehari.' },
    { term: 'Reservoir', desc: 'Waduk atau danau buatan untuk menampung air dalam jumlah masif.' }
], null, 4);

const enGlossaryStr = JSON.stringify([
    { term: 'Kinetic Energy', desc: 'Energy possessed by an object due to its motion (water flow).' },
    { term: 'Potential Energy', desc: 'Energy stored in an object due to its position, such as high-elevation water.' },
    { term: 'Penstock', desc: 'A high-pressure pipe channeling water from the reservoir to the turbines.' },
    { term: 'Powerhouse', desc: 'The central building hosting the turbines and generators.' },
    { term: 'Water Turbine', desc: 'A rotary machine extracting kinetic energy from fast-flowing water.' },
    { term: 'Baseload', desc: 'The minimum level of steady electricity demand over 24 hours.' },
    { term: 'Reservoir', desc: 'An artificial lake for massive water storage.' }
], null, 4);

const out = `export const pltaData = {
  id: {
    title: "PLTA (Pembangkit Listrik Tenaga Air / Hydro)",
    heroTitle: "Energi Potensial Air",
    heroDesc: "Pembangkit listrik yang menggunakan energi air sebagai sumber daya utamanya, mengubah energi potensial air menjadi energi kinetik.",
    definition: "PLTA Adalah pembangkit listrik yang menggunakan energi air sebagai sumber daya utamanya. PLTA mengubah energi potensial air menjadi energi kinetik yang kemudian digunakan untuk menggerakkan turbin dan menghasilkan listrik.",
    caraKerja: {
      text: "Air ditampung dalam bendungan/reservoir yang tinggi, lalu dialirkan melalui pipa pesat (penstock) untuk memutar turbin di powerhouse yang posisinya lebih rendah. Putaran turbin ini menggerakkan generator untuk menghasilkan listrik yang kemudian dialirkan melalui transmisi.",
      extended: [
        "1. Penampungan Air: Air ditampung dalam bendungan berskala besar.",
        "2. Penyaluran: Air dialirkan melalui pipa pesat (penstock) yang sangat deras.",
        "3. Ekstraksi Kinetik: Aliran air membentur bilah turbin dan memutar rotor turbin di powerhouse.",
        "4. Induksi Elektromagnetik: Rotor turbin yang terhubung langsung ke poros generator menghasilkan listrik.",
        "5. Transmisi: Listrik dialirkan ke gardu induk untuk dikalibrasi tegangannya sebelum masuk grid PLN."
      ],
      img: "https://www.indonesiare.co.id/uploads/2021/09/b28444f803fb89436b73ad3311313d1d_cdb59e2c8044fb87b4ed84618387ca55.png"
    },
    pros: [
      "Kapasitas sangat besar",
      "Biaya operasional dan bahan bakar sangat rendah",
      "Usia pakai panjang (50-100 tahun)",
      "Stabil memproduksi listrik dasar (baseload)"
    ],
    cons: [
      "Resiko kekeringan drastis dan perubahan iklim",
      "Sangat bergantung pada curah hujan tahunan",
      "Biaya awal pembangunan infrastruktur yang tinggi",
      "Keterbatasan geografis wilayah pegunungan yang tepat"
    ],
    benefits: [
      "Fungsi Multipurpose (Waduk): digunakan untuk irigasi pertanian, pengendalian banjir, pariwisata, dan rekreasi air.",
      "Ketahanan Energi Nasional: Mengurangi ketergantungan pada bahan bakar fosil, hemat biaya impor.",
      "Energi Bersih & Ramah Lingkungan: Tidak menghasilkan emisi gas rumah kaca atau polusi udara berbahaya."
    ],
    impacts: [
      "Kerusakan Ekosistem Air dan Sungai: Mengganggu siklus hidup ikan migran.",
      "Deforestasi dan Hilangnya Keanekaragaman Hayati akibat area genangan luas.",
      "Dampak Sosial dan Relokasi: Memaksa relokasi masyarakat adat / pedesaan setempat dari lahan warisan mereka."
    ],
    history: "Sejarah Pembangkit Listrik Tenaga Air (PLTA) di Indonesia sebenarnya telah dimulai sejak era kolonial Belanda dengan berdirinya pembangkit skala kecil seperti PLTA Bengkok di Bandung pada tahun 1923. Namun, tonggak kemandirian energi nasional skala masif baru benar-benar terwujud di era Presiden Soekarno. Pada tahun 1957, Bung Karno menginisiasi pembangunan PLTA Ir. H. Djuanda (Jatiluhur) di Jawa Barat yang menjadi proyek monumental pertama karya anak bangsa paska kemerdekaan. Proyek raksasa yang melibatkan kontraktor dan tenaga ahli asal Prancis ini menelan anggaran pinjaman sekitar US$ 230 juta. Karena skala proyek yang sangat besar dan kondisi politik yang dinamis, PLTA ini baru berhasil diselesaikan dan diresmikan pada tahun 1967, bertepatan dengan masa transisi pemerintahan.\\n\\nMemasuki era Orde Baru di bawah kepemimpinan Presiden Soeharto, Indonesia mengalami masa kejayaan pembangunan mega-proyek PLTA yang wujudnya menjadi tulang punggung kelistrikan Jawa dan Sumatera hingga hari ini. Dengan dukungan stabilitas ekonomi dan kucuran dana pinjaman luar negeri dari lembaga internasional seperti Bank Dunia dan pemerintah Jepang, dibangunlah PLTA Saguling yang diresmikan pada tahun 1985 dengan anggaran sekitar US$ 730 juta. Tidak berhenti di situ, pemerintah membangun PLTA Cirata yang hingga kini memegang rekor sebagai PLTA terbesar di Asia Tenggara (diresmikan 1988) dengan perkiraan biaya US$ 570 juta. Di luar Pulau Jawa, era ini juga melahirkan PLTA Sigura-gura di Sumatera Utara (1982) sebagai bagian dari mega-proyek peleburan aluminium (Inalum) dengan total investasi kelistrikan sekitar US$ 411 juta.\\n\\nPada masa transisi Reformasi yang dipimpin berturut-turut oleh Presiden B.J. Habibie, Abdurrahman Wahid (Gus Dur), dan Megawati Soekarnoputri (1998-2004), pembangunan PLTA raksasa baru nyaris terhenti. Hal ini merupakan dampak langsung dari Krisis Finansial Asia 1997/1998 yang memukul telak anggaran negara dan memicu restrukturisasi besar-besaran di tubuh PLN. Pemerintahan pada rentang masa ini lebih fokus pada pemulihan ekonomi nasional dan melanjutkan penyelesaian proyek-proyek PLTA warisan era sebelumnya yang sempat mangkrak atau terhambat pendanaannya, seperti PLTA Kotopanjang di Riau (selesai 1998) dan PLTA Musi di Bengkulu. Alokasi anggaran negara saat itu lebih banyak terserap untuk penyelamatan ekonomi makro daripada merancang investasi bendungan baru.\\n\\nKebangkitan pembangunan PLTA kembali terlihat di era Presiden Susilo Bambang Yudhoyono (SBY) melalui kebijakan Fast Track Program (FTP) Tahap II yang mulai menitikberatkan pada energi terbarukan. Menyadari APBN tidak akan cukup untuk membiayai infrastruktur raksasa secara sendirian, pemerintahan SBY secara agresif mendorong peran pihak swasta atau Independent Power Producer (IPP) untuk berinvestasi. Salah satu tonggak penting di era ini adalah beroperasinya PLTA Asahan 1 di Sumatera Utara (2010) dengan nilai investasi swasta dan pinjaman sindikasi dari Tiongkok sekitar US$ 330 juta. Era SBY juga menjadi awal dimulainya pembangunan PLTA Poso di Sulawesi Tengah secara bertahap oleh konsorsium swasta lokal (Kalla Group) tanpa membebani anggaran negara secara langsung.\\n\\nMemasuki era Presiden Joko Widodo, fokus infrastruktur PLTA diarahkan pada penyelesaian bendungan-bendungan yang lama tertunda, pemerataan listrik di luar Pulau Jawa, serta integrasi energi hijau untuk menyokong kawasan industri baru. Di era ini, fasilitas kelistrikan PLTA Jatigede di Jawa Barat akhirnya diselesaikan dengan porsi anggaran khusus pembangkitnya menelan biaya sekitar US$ 140 juta. Pemerintah juga meresmikan rampungnya keseluruhan unit PLTA Poso Energy (515 MW) pada tahun 2022 dengan total akumulasi investasi mencapai Rp 17 triliun. Lebih jauh, pemerintahan Jokowi meletakkan fondasi (groundbreaking) untuk mega-proyek yang didanai konsorsium asing, seperti PLTA Mentarang Induk di Kalimantan Utara senilai US$ 2,6 miliar (sekitar Rp 40 triliun) yang diproyeksikan akan menyuplai kawasan industri hijau di masa depan.",
    locations: ${locationsString},
    glossary: ${idGlossaryStr}
  },
  en: {
    title: "PLTA (Hydroelectric Power Plant)",
    heroTitle: "Potential Water Energy",
    heroDesc: "A power plant utilizing water energy to convert potential energy into kinetic power.",
    definition: "PLTA converts the potential energy of flowing or falling water into kinetic energy, spinning turbines to generate electricity.",
    caraKerja: {
      text: "Water from a high reservoir flows through a penstock to spin a turbine in a powerhouse. This rotation drives a generator, producing electricity for the grid.",
      extended: [
        "1. Water Storage: Collected in large dams.",
        "2. Channelling: Flows down steep penstocks.",
        "3. Kinetic Extraction: The water flow spins the turbine rotor.",
        "4. Electromagnetic Induction: Connects to the generator shaft to produce electricity.",
        "5. Transmission: Sent to substations before entering the grid."
      ],
      img: "https://www.indonesiare.co.id/uploads/2021/09/b28444f803fb89436b73ad3311313d1d_cdb59e2c8044fb87b4ed84618387ca55.png"
    },
    pros: [
      "Massive capacity",
      "Very low operational/fuel costs",
      "Long lifespan (50-100 years)",
      "Stable baseload production"
    ],
    cons: [
      "Drought and climate dependency",
      "High initial infrastructure costs",
      "Geographical limitations"
    ],
    benefits: [
      "Multipurpose: Irrigation, flood control, tourism.",
      "National Energy Security: Reduces fossil fuel reliance.",
      "Eco-Friendly: Zero direct greenhouse gas emissions."
    ],
    impacts: [
      "River ecosystem disruption for migratory fish.",
      "Deforestation and biodiversity loss from flooding.",
      "Social relocation of indigenous communities."
    ],
    history: "Hydropower in Indonesia originated during the Dutch colonial era (e.g., PLTA Bengkok in 1923). Massive national milestones began under President Soekarno with PLTA Ir. H. Djuanda (Jatiluhur) in 1957. The New Order era expanded this with PLTA Saguling (1985) and the mammoth PLTA Cirata (1988) in Java, and PLTA Sigura-gura in Sumatra (1982) for aluminum smelting. Post-1998 Asian Financial Crisis, mega-projects stalled, focusing only on economy recovery. Re-accelerated under SBY via Independent Power Producers (IPP), yielding PLTA Asahan 1 and Poso. President Jokowi finalized delayed dams (Jatigede) and pushed mega-projects like Mentarang Induk in Kalimantan for green industrial zones.",
    locations: ${locationsString},
    glossary: ${enGlossaryStr}
  }
};
`;

fs.writeFileSync('pltaData.js', out);
console.log('Done!');
