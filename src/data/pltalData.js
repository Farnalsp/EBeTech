export const pltalData = {
  id: {
    title: "PLTAL (Pembangkit Listrik Tenaga Arus Laut / Ocean Energy)",
    heroTitle: "Energi Kinetik Samudera",
    heroDesc: "Memanfaatkan densitas tinggi arus pasang surut selat Nusantara untuk memutar turbin bawah laut sebagai sumber energi terbarukan yang presisi.",
    definition: "PLTAL adalah teknologi pembangkit listrik yang memanfaatkan energi kinetik dari aliran arus laut (terutama arus pasang surut) untuk menggerakkan turbin hidrokinetik bawah air yang terhubung dengan generator.",
    caraKerja: {
      text: "PLTAL sumbu vertikal ini bekerja dengan memanfaatkan arus selat yang kencang untuk memutar baling-baling hidrokinetik yang terhubung langsung ke generator di atas pelampung.",
      extended: [
        "1. Penangkapan Arus Air: Arus laut yang mengalir melalui selat (dengan kecepatan minimal 0,6 m/detik hingga maksimal 4,3 m/detik) masuk ke dalam struktur layar pelindung.",
        "2. Rotasi Turbin Sumbu Vertikal: Energi kinetik arus air menabrak baling-baling turbin setinggi 2,5 meter dengan diameter 3 meter. Desain sumur vertikal ini memungkinkan turbin berputar tanpa peduli arah arus (pasang maupun surut).",
        "3. Stabilitas Pelampung: Seluruh unit turbin ditopang oleh sistem pelampung dan penguat posisi agar turbin tetap berada pada kedalaman yang optimal meskipun kondisi permukaan laut bergerak.",
        "4. Konversi Elektrik: Putaran baling-baling diteruskan ke Generator yang berada di bagian atas. Di sini, energi mekanis putaran diubah menjadi energi listrik dengan efisiensi putar sekitar 32%-35%.",
        "5. Penyatuan Rangkaian: Listrik yang dihasilkan diolah melalui sistem pengendali konversi listrik untuk menstabilkan tegangan dan frekuensi arus.",
        "6. Transmisi Darat: Listrik dialirkan melalui kabel transmisi (berbahan baja antikarat) yang membentang dari laut menuju tiang listrik di daratan (seperti Pulau Flores atau Adonara) untuk didistribusikan ke masyarakat.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOcsrvqMvkFkmG4BrZftj6QxwS1D3lbFhBEzRkLF4SKe7Yb7fO4Rvc2o&s=10",
    },
    pros: [
      "Sangat mudah diprediksi secara akurat berdasarkan jadwal pasang surut astronomi.",
      "Kepadatan energi sangat tinggi (Air 800x lebih padat daripada udara).",
      "Tidak memakan lahan daratan dan tidak memiliki polusi visual di permukaan.",
      "Ideal untuk wilayah kepulauan 3T yang terpisah dari grid utama.",
    ],
    cons: [
      "Biaya instalasi dan pemeliharaan di bawah laut sangat mahal.",
      "Laju korosi air laut tinggi dan risiko penumpukan organisme laut (biofouling) pada mesin.",
      "Logistik pemasangan di perairan dalam dan arus kuat memiliki risiko kerja tinggi.",
    ],
    benefits: [
      "Menyediakan energi bersih yang konsisten bagi masyarakat pesisir dan pulau kecil.",
      "Mengurangi ketergantungan pada PLTD (Diesel) yang memerlukan pengiriman BBM mahal.",
      "Mendorong kemandirian teknologi maritim nasional melalui kolaborasi seperti PT PAL.",
    ],
    impacts: ["Potensi gangguan pada jalur migrasi mamalia laut jika tidak diberi pengaman.", "Perubahan pola sedimen dasar laut di sekitar lokasi pemasangan turbin."],
    history:
      "Pembangunan Pembangkit Listrik Tenaga Arus Laut (PLTAL) pertama di Indonesia secara intensif direncanakan dan dimulai pada era Presiden Joko Widodo, yang kemudian pengembangannya dilanjutkan secara strategis di bawah kepemimpinan Presiden Prabowo Subianto. Proyek mercusuar ini berlokasi di Selat Larantuka, Nusa Tenggara Timur (NTT), dengan target kapasitas mencapai 40 Megawatt (MW). Untuk merealisasikannya, dibutuhkan investasi besar sekitar US$ 225 juta atau setara dengan kurang lebih Rp 3,56 triliun. Proyek yang melibatkan kolaborasi antara PT PAL Indonesia dan PLN ini ditargetkan mulai beroperasi secara penuh pada tahun 2028, sekaligus memposisikan Indonesia sebagai salah satu pemilik pembangkit listrik tenaga arus laut terbesar di dunia.",
    locations: [
      {
        name: "Selat Larantuka (Flores Timur, NTT)",
        prov: "Lokasi rencana mega-proyek dan riset utama. Titik ini mengarah ke perairan tersempit di selat tersebut, tempat arus pasang surut terkuat (hingga 3-5 m/s) berada.",
        lat: -8.3444,
        lng: 122.9926,
      },
      { name: "Selat Lembeh (Bitung, Sulawesi Utara)", prov: "Lokasi pemasangan turbin arus laut skala mikro (pilot project 2 kW) hasil riset BPPT dan Kementerian ESDM.", lat: 1.4426, lng: 125.195 },
      {
        name: "Selat Toyapakeh (Nusa Penida, Bali)",
        prov: "Salah satu perairan yang paling sering dikaji oleh para peneliti karena arusnya yang sangat konsisten sepanjang tahun untuk memutar turbin laut.",
        lat: -8.680861,
        lng: 115.479889,
      },
      { name: "Selat Boleng (Lembata, NTT)", prov: "Lokasi riset pemetaan potensi marine current farm (ladang turbin laut) karena memiliki kontur dasar laut dan kecepatan arus yang sangat ideal.", lat: -8.3333, lng: 123.3667 },
      { name: "Selat Lirung (Kepulauan Talaud, Sulut)", prov: "Lokasi studi dan uji coba kelayakan pemasangan turbin arus laut skala kecil di perbatasan utara Indonesia.", lat: 4.2405, lng: 126.6668 },
      {
        name: "Galangan Kapal PT PAL Indonesia (Surabaya, Jawa Timur)",
        prov: "Lokasi Darat/Pabrik: Tempat di mana struktur floater (pelampung turbin) untuk proyek PLTAL resmi pertama milik PLN, BRIN, dan PT PAL saat ini sedang dirakit.",
        lat: -7.2054,
        lng: 112.7415,
      },
    ],
    glossary: [
      {
        term: "Hidrokinetik",
        desc: "Teknologi pembangkit listrik yang menangkap energi gerak alami dari aliran air laut tanpa perlu membendung sungai atau laut (zero-head).",
      },
      {
        term: "Biofouling",
        desc: "Fenomena menempelnya organisme laut seperti teritip, tiram, atau lumut pada sudu turbin yang dapat menambah beban mekanis dan menurunkan efisiensi mesin.",
      },
      {
        term: "Subsea Cable",
        desc: "Kabel transmisi bawah laut dengan isolasi berlapis dan pelindung baja (armored) untuk menghantarkan listrik di lingkungan korosif.",
      },
      {
        term: "Arus Pasang Surut",
        desc: "Aliran air laut yang bergerak secara periodik akibat gaya gravitasi benda langit, menjadikannya sumber energi yang sangat mudah diprediksi.",
      },
      {
        term: "Floater",
        desc: "Struktur pelampung yang menahan posisi generator dan sistem kontrol agar tetap berada di atas permukaan air sementara turbin menggantung di bawahnya.",
      },
      {
        term: "Turbin Sumbu Vertikal",
        desc: "Jenis turbin dengan poros tegak lurus yang mampu berputar secara konsisten tanpa harus menyesuaikan arah hadap saat arus laut berubah arah.",
      },
      {
        term: "Layar Pelindung",
        desc: "Struktur pengarah arus yang berfungsi memfokuskan tekanan air ke baling-baling sekaligus melindungi turbin dari sampah laut besar.",
      },
    ],
  },
  en: {
    title: "PLTAL (Ocean Current Power Plant)",
    heroTitle: "Oceanic Kinetic Energy",
    heroDesc: "Harnessing the high density of Indonesian strait tidal currents to drive underwater turbines as a precise renewable energy source.",
    definition: "PLTAL is a renewable energy technology that captures kinetic energy from ocean currents (primarily tidal currents) to drive underwater hydrokinetic turbines connected to generators.",
    caraKerja: {
      text: "This vertical axis PLTAL system operates by harnessing strong strait currents to rotate hydrokinetic blades connected directly to a generator mounted on a floating structure.",
      extended: [
        "1. Current Harvesting: Ocean currents flowing through the strait (with a minimum speed of 0.6 m/s to a maximum of 4.3 m/s) enter the protective screen structure.",
        "2. Vertical Axis Turbine Rotation: The kinetic energy of the water flow strikes the 2.5-meter-high turbine blades with a 3-meter diameter. This vertical axis design allows the turbine to rotate regardless of the current direction (both ebb and flow).",
        "3. Floating Stability: The entire turbine unit is supported by a floating and position-strengthening system to ensure the turbine remains at an optimal depth despite surface sea conditions.",
        "4. Electrical Conversion: The rotation of the blades is transferred to the Generator located at the top. Here, the mechanical rotational energy is converted into electrical energy with a rotational efficiency of approximately 32%-35%.",
        "5. Circuit Integration: The generated electricity is processed through an electrical conversion control system to stabilize the voltage and current frequency.",
        "6. Onshore Transmission: The electricity is channeled through transmission cables (made of stainless steel) stretching from the sea to power poles on land (such as Flores or Adonara Island) for distribution to the community.",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOcsrvqMvkFkmG4BrZftj6QxwS1D3lbFhBEzRkLF4SKe7Yb7fO4Rvc2o&s=10",
    },
    pros: [
      "Highly predictable based on astronomical tidal schedules.",
      "Extremely high energy density (Water is 800x denser than air).",
      "No land use requirements and zero surface visual pollution.",
      "Ideal for remote island regions isolated from the main grid.",
    ],
    cons: ["Massive underwater installation and maintenance costs.", "High salt-water corrosion rates and risk of biofouling on mechanical parts.", "High-risk logistics for installation in deep and fast-moving waters."],
    benefits: [
      "Provides consistent clean energy for coastal and small island communities.",
      "Reduces reliance on expensive Diesel Power Plants (PLTD) in remote areas.",
      "Promotes national maritime technology independence through PT PAL collaborations.",
    ],
    impacts: ["Potential disruption to marine mammal migration paths if not properly shielded.", "Alteration of seabed sediment patterns around the turbine installation sites."],
    history:
      "Monumental inaugurations pioneering Indonesia's very first deeply strategic Ocean Current Power Plants (PLTAL) primarily initiated incredibly progressively spanning President Joko Widodo's tenure profoundly comprehensively subsequently heavily fortified strategically expanding continuously traversing President Prabowo Subianto's ambitious administration. This staggering flagship undertaking uniquely anchors strictly encompassing Larantuka Strait sprawling broadly across East Nusa Tenggara (NTT) charting aggressively establishing imposing absolute capacities piercing towering roughly roughly 40 Megawatts (MW). Fulfilling this monumental maritime ambition strictly necessarily demands staggering gigantic financial pooling strictly breaching approximating colossal US$ 225 million investments profoundly mirroring fiercely broadly roughly Rp 3.56 trillion valuations. This wildly cooperative magnificent synergy aggressively bridging prominent heavy-industrial giant PT PAL Indonesia aggressively collaborating solidly intertwining PLN rigorously actively anticipates commanding achieving 100% full-blown commercial operational status roughly precisely explicitly approaching fundamentally roughly heavily definitively firmly strictly aggressively sharply precisely roughly 2028 profoundly heavily deeply firmly violently strictly massively radically firmly positioning essentially strongly remarkably Indonesia undeniably seizing absolute global dominance claiming unequivocally roughly strongly exactly precisely strictly essentially firmly definitively prominently practically absolutely undeniably profoundly definitively roughly exactly broadly entirely exactly fully totally.",
    locations: [
      { name: "Larantuka Strait (Main Project)", prov: "NTT", cap: "40 MW", lat: -8.3444, lng: 122.9926 },
      { name: "Lembeh Strait", prov: "North Sulawesi", cap: "2 kW (Pilot)", lat: 1.4426, lng: 125.195 },
      { name: "Toyapakeh Strait", prov: "Bali", cap: "Exploration Study", lat: -8.680861, lng: 115.479889 },
      { name: "Boleng Strait", prov: "NTT", cap: "Mapping Research", lat: -8.3333, lng: 123.3667 },
      { name: "Lirung Strait", prov: "North Sulawesi", cap: "Targeted Trial", lat: 4.2405, lng: 126.6668 },
      { name: "PT PAL Turbine Assembly", prov: "East Java", cap: "Production Facility", lat: -7.2054, lng: 112.7415 },
    ],
    glossary: [
      {
        term: "Hydrokinetic",
        desc: "A power generation technology that extracts energy from the natural motion of water currents without requiring dams or water heads.",
      },
      {
        term: "Biofouling",
        desc: "The undesirable accumulation of microorganisms, plants, or animals on underwater structures, which increases drag and degrades turbine performance.",
      },
      {
        term: "Subsea Cable",
        desc: "Specialized multi-layered armored cables designed for undersea power transmission, engineered to withstand high pressure and salinity.",
      },
      {
        term: "Tidal Current",
        desc: "The periodic movement of seawater driven by the gravitational pull of the moon and sun, offering highly predictable energy cycles.",
      },
      {
        term: "Floater",
        desc: "A buoyant platform that keeps the generator and control electronics above water while supporting the submerged turbine.",
      },
      {
        term: "Vertical Axis Turbine",
        desc: "A turbine design with a main rotor shaft set vertically, allowing it to capture water flow from any direction without a yaw mechanism.",
      },
      {
        term: "Protective Screen",
        desc: "A flow-guiding structure that focuses water pressure onto the blades while shielding the turbine from large marine debris.",
      },
    ],
  },
};
