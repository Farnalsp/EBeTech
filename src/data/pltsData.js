export const pltsData = {
  id: {
    title: "PLTS (Pembangkit Listrik Tenaga Surya / Solar PV)",
    heroTitle: "Menambang Cahaya, Mengaliri Masa Depan",
    heroDesc: "Mengubah setiap partikel cahaya matahari menjadi energi murni yang tak terbatas untuk kemandirian energi yang lebih hijau.",
    definition:
      "PLTS adalah sistem pembangkit listrik yang mengandalkan radiasi sinar matahari sebagai sumber energi utama. Dengan teknologi fotovoltaik, energi foton dari matahari langsung dikonversi menjadi listrik arus searah (DC) tanpa melalui proses mekanis yang rumit.",
    caraKerja: {
      text: "Proses ini memanfaatkan efek fotovoltaik pada material semikonduktor untuk melepaskan elektron dan menciptakan arus listrik saat terpapar cahaya matahari.",
      extended: [
        "1. Penyerapan Cahaya (Foton): Sel surya yang terbuat dari material semikonduktor (silikon) menyerap partikel cahaya atau foton dari matahari.",
        "2. Pelepasan Elektron: Energi dari foton memicu pelepasan elektron pada lapisan semikonduktor, menciptakan ketidakseimbangan muatan yang menghasilkan arus listrik searah (DC).",
        "3. Pengumpulan Arus: Elektron yang bergerak bebas dikumpulkan oleh kontak metal pada sel surya dan dialirkan melalui kabel menuju sistem kontrol.",
        "4. Konversi Inverter: Listrik DC dari panel surya dialirkan ke Inverter untuk diubah menjadi arus bolak-balik (AC) agar sesuai dengan standar peralatan elektronik dan jaringan PLN.",
        "5. Sinkronisasi & Distribusi: Listrik AC kemudian dialirkan ke panel distribusi rumah atau masuk ke jaringan Grid nasional (untuk sistem On-Grid).",
      ],
      img: "https://tenagamatahari.wordpress.com/wp-content/uploads/2011/12/gambar-system-kerja.png",
    },
    pros: ["Sumber energi melimpah di wilayah tropis", "Pemasangan relatif cepat dan modular", "Biaya pemeliharaan rendah karena tidak ada komponen bergerak", "Meningkatkan nilai properti dan kemandirian energi"],
    cons: [
      "Sifatnya intermittent (hanya menghasilkan listrik saat ada matahari)",
      "Membutuhkan sistem baterai yang mahal untuk penggunaan malam hari",
      "Efisiensi menurun saat cuaca mendung atau tertutup polusi",
      "Membutuhkan luas lahan yang besar untuk skala megawatt",
    ],
    benefits: [
      "Energi Terbarukan: Memanfaatkan sumber daya yang tidak akan habis selama matahari bersinar.",
      "Reduksi Emisi: Mengurangi jejak karbon secara signifikan dibandingkan energi fosil.",
      "Efisiensi Biaya: Meminimalkan biaya pemeliharaan karena tidak memiliki komponen mekanis yang bergerak.",
    ],
    impacts: ["Penggunaan Lahan: Pembangunan skala besar memerlukan lahan luas yang dapat merusak habitat alami.", "Limbah Panel: Tantangan daur ulang panel surya yang sudah mencapai akhir masa pakai agar tidak menjadi sampah lingkungan."],
    history:
      "Sejarah PLTS di Indonesia bermula pada masa pemerintahan Presiden Soeharto sekitar tahun 1980-an, yang kala itu masih berupa proyek percontohan skala kecil seperti Solar Home System (SHS) untuk melistriki desa terpencil. Memasuki era Presiden Joko Widodo, pengembangan surya melompat ke skala industri besar dengan anggaran yang fantastis. Sebagai contoh, PLTS Oelpuah di NTT (2015) dibangun dengan investasi sekitar Rp160 miliar, sementara proyek raksasa PLTS Terapung Cirata di Jawa Barat (2023) menelan anggaran mencapai Rp2,2 triliun. Transformasi ini menunjukkan pergeseran dari sekadar bantuan sosial di pelosok menjadi investasi infrastruktur energi nasional yang bernilai triliunan rupiah.",
    locations: [
      { name: "PLTS Terapung Cirata", prov: "Purwakarta, Jawa Barat", cap: "192 MWp", lat: -6.688495, lng: 107.331618 },
      { name: "PLTS Ibu Kota Nusantara (IKN)", prov: "Penajam Paser Utara, Kaltim", cap: "50 MW", lat: -0.990865, lng: 116.636615 },
      { name: "PLTS Likupang", prov: "Minahasa Utara, Sulawesi Utara", cap: "21 MWp", lat: 1.659347, lng: 125.09651 },
      { name: "PLTS Oelpuah", prov: "Kupang, Nusa Tenggara Timur", cap: "5 MWp", lat: -10.148317, lng: 123.748456 },
      { name: "PLTS Sengkol", prov: "Lombok Tengah, NTB", cap: "5 MWp", lat: -8.794565, lng: 116.295987 },
      { name: "PLTS Pringgabaya", prov: "Lombok Timur, NTB", cap: "5 MWp", lat: -8.515771, lng: 116.636315 },
      { name: "PLTS Selong", prov: "Lombok Timur, NTB", cap: "5 MWp", lat: -8.656877, lng: 116.575171 },
      { name: "PLTS Gorontalo (Isimu)", prov: "Gorontalo, Provinsi Gorontalo", cap: "2 MWp", lat: 0.621351, lng: 122.843308 },
      { name: "PLTS Gili Trawangan", prov: "Lombok Utara, NTB", cap: "600 kWp", lat: -8.353596, lng: 116.038162 },
      { name: "PLTS Gili Air", prov: "Lombok Utara, NTB", cap: "160 kWp", lat: -8.357031, lng: 116.079919 },
    ],
    glossary: [
      {
        term: "Sel Fotovoltaik",
        desc: "Komponen utama panel surya yang berfungsi menyerap foton dan mengubahnya langsung menjadi arus listrik searah (DC).",
      },
      {
        term: "Inverter",
        desc: "Alat pengubah arus DC (searah) hasil panel surya menjadi arus AC (bolak-balik) agar dapat digunakan oleh perangkat elektronik rumah tangga atau masuk ke jaringan PLN.",
      },
      {
        term: "PLTS Off-Grid",
        desc: "Sistem yang berdiri sendiri dan tidak terhubung ke jaringan PLN, biasanya digunakan di daerah terpencil dengan bantuan baterai sebagai penyimpan energi.",
      },
      {
        term: "PLTS On-Grid",
        desc: "Sistem yang terhubung langsung dengan jaringan listrik utama (PLN), memungkinkan pengguna mengirim kelebihan daya kembali ke jaringan nasional.",
      },
      {
        term: "PLTS Hybrid",
        desc: "Sistem yang mengombinasikan tenaga surya dengan sumber energi lain (seperti generator diesel atau angin) untuk menjamin stabilitas pasokan listrik.",
      },
      {
        term: "Solar Floater",
        desc: "Pembangkit listrik tenaga surya terapung yang ditempatkan di atas permukaan air seperti waduk atau danau untuk menghemat penggunaan lahan di darat.",
      },
      {
        term: "Intermittent",
        desc: "Karakteristik energi surya yang suplainya tidak tersedia terus-menerus karena sangat bergantung pada keberadaan sinar matahari dan kondisi cuaca.",
      },
    ],
  },
  en: {
    title: "PLTS (Solar Photovoltaic Power Plant)",
    heroTitle: "Harvesting Light, Powering Tomorrow",
    heroDesc: "Converting every photon of sunlight into pure, limitless energy for a greener and independent future.",
    definition:
      "A Solar Power Plant (PLTS) is a power generation system that relies on solar radiation as its primary energy source. Using photovoltaic technology, photon energy from the sun is directly converted into direct current (DC) electricity without complex mechanical processes.",
    caraKerja: {
      text: "This process utilizes the photovoltaic effect in semiconductor materials to release electrons and create an electric current when exposed to sunlight.",
      extended: [
        "1. Light Absorption (Photons): Solar cells made of semiconductor materials (silicon) absorb light particles or photons from the sun.",
        "2. Electron Release: Energy from photons triggers the release of electrons in the semiconductor layers, creating a charge imbalance that generates direct current (DC).",
        "3. Current Collection: Free-moving electrons are collected by metal contacts on the solar cells and channeled through cables to the control system.",
        "4. Inverter Conversion: DC electricity from the solar panels is fed into an Inverter to be converted into alternating current (AC) to match electronics and grid standards.",
        "5. Synchronization & Distribution: The AC electricity is then directed to the building's distribution panel or fed into the national grid (for On-Grid systems).",
      ],
      img: "https://tenagamatahari.wordpress.com/wp-content/uploads/2011/12/gambar-system-kerja.png",
    },
    pros: ["Abundant energy source in tropical regions", "Relatively fast and modular installation", "Low maintenance costs due to lack of moving parts", "Increases property value and energy independence"],
    cons: [
      "Intermittent nature (only generates electricity during daylight)",
      "Requires expensive battery systems for nighttime use",
      "Efficiency drops during cloudy weather or high pollution",
      "Requires large land areas for megawatt-scale projects",
    ],
    benefits: [
      "Renewable Energy: Harnesses a resource that will never run out as long as the sun shines.",
      "Emission Reduction: Significantly reduces carbon footprint compared to fossil fuels.",
      "Cost Efficiency: Minimizes maintenance costs as there are no moving mechanical parts.",
    ],
    impacts: ["Land Use: Large-scale construction requires vast areas that can disturb natural habitats.", "Solar Waste: The challenge of recycling solar panels at the end of their life cycle to prevent environmental waste."],
    history:
      "The history of solar power (PLTS) in Indonesia dates back to President Soeharto's era in the 1980s, primarily taking shape as pilot-scale Solar Home Systems (SHS) for electrifying remote offline villages. During President Joko Widodo's era, solar development skyrocketed into utility-scale industrial proportions backed by tremendous spending. For instance, the 2015 PLTS Oelpuah in NTT was established with an investment of Rp160 billion, whilst the colossal PLTS Terapung Cirata (Floating Solar) in West Java (2023) consumed a staggering Rp2.2 trillion. This transformation marks a monumental pivot from mere rural social assistance into multi-trillion rupiah backbone energy framework investments.",
    locations: [
      { name: "PLTS Terapung Cirata", prov: "West Java", cap: "192 MWp", lat: -6.688495, lng: 107.331618 },
      { name: "PLTS Ibu Kota Nusantara (IKN)", prov: "East Kalimantan", cap: "50 MW", lat: -0.990865, lng: 116.636615 },
      { name: "PLTS Likupang", prov: "North Sulawesi", cap: "21 MWp", lat: 1.659347, lng: 125.09651 },
      { name: "PLTS Oelpuah", prov: "East Nusa Tenggara", cap: "5 MWp", lat: -10.148317, lng: 123.748456 },
      { name: "PLTS Sengkol", prov: "Central Lombok, NTB", cap: "5 MWp", lat: -8.794565, lng: 116.295987 },
      { name: "PLTS Pringgabaya", prov: "East Lombok, NTB", cap: "5 MWp", lat: -8.515771, lng: 116.636315 },
      { name: "PLTS Selong", prov: "East Lombok, NTB", cap: "5 MWp", lat: -8.656877, lng: 116.575171 },
      { name: "PLTS Gorontalo (Isimu)", prov: "Gorontalo Province", cap: "2 MWp", lat: 0.621351, lng: 122.843308 },
      { name: "PLTS Gili Trawangan", prov: "North Lombok, NTB", cap: "600 kWp", lat: -8.353596, lng: 116.038162 },
      { name: "PLTS Gili Air", prov: "North Lombok, NTB", cap: "160 kWp", lat: -8.357031, lng: 116.079919 },
    ],
    glossary: [
      {
        term: "Photovoltaic Cell",
        desc: "The core component of a solar panel that absorbs photons and converts them directly into direct current (DC) electricity.",
      },
      {
        term: "Inverter",
        desc: "An electronic device that converts DC current from solar panels into AC current (alternating current) for household use or grid injection.",
      },
      {
        term: "Off-Grid PLTS",
        desc: "A standalone system not connected to the main grid, typically used in remote areas with battery storage.",
      },
      {
        term: "On-Grid PLTS",
        desc: "A system connected to the utility grid, allowing users to feed excess power back to the national network.",
      },
      {
        term: "Hybrid PLTS",
        desc: "A system combining solar energy with other power sources (like diesel generators or wind) to ensure a stable electricity supply.",
      },
      {
        term: "Solar Floater",
        desc: "Floating solar power plants installed on water surfaces like reservoirs or lakes to optimize land use.",
      },
      {
        term: "Intermittent",
        desc: "The characteristic of solar energy where the supply is not continuous as it depends on sunlight availability and weather conditions.",
      },
    ],
  },
};
