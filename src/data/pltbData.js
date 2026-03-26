import windImg from "../assets/wind.jpeg";

export const pltbData = {
  id: {
    title: "PLTB (Pembangkit Listrik Tenaga Bayu / Wind Power)",
    heroTitle: "Simfoni Angin, Energi Tanpa Batas",
    heroDesc: "Menangkap tarian angin untuk menggerakkan roda peradaban melalui harmoni mekanis kincir raksasa yang ramah lingkungan.",
    definition:
      "PLTB adalah sistem pembangkit energi terbarukan yang mengonversi energi kinetik dari hembusan angin menjadi energi listrik. Menggunakan turbin angin raksasa, energi kinetik diubah menjadi putaran mekanis yang kemudian dikonversi oleh generator menjadi daya listrik murni.",
    caraKerja: {
      text: "Proses ini dimulai dari tangkapan energi kinetik angin yang memutar bilah rotor, diteruskan ke sistem transmisi, hingga diubah menjadi energi listrik bertegangan tinggi.",
      extended: [
        "1. Penangkapan Momentum: Angin menabrak bilah (blade) aerodinamis yang dirancang khusus, menciptakan gaya angkat yang memutar hub rotor.",
        "2. Multiplikasi Putaran (Gearbox): Putaran lambat dari poros utama rotor masuk ke Gearbox untuk ditingkatkan kecepatannya (RPM) hingga ribuan kali lipat agar optimal bagi generator.",
        "3. Induksi Elektromagnetik: Poros berkecepatan tinggi memutar medan magnet di dalam Generator, menghasilkan arus listrik bolak-balik (AC).",
        "4. Eskalasi Tegangan (Step-Up): Listrik dikumpulkan di panel kontrol, lalu tegangannya dinaikkan secara drastis oleh transformator Step-Up untuk meminimalisir rugi-rugi daya selama transmisi jarak jauh.",
        "5. Stabilisasi Jaringan: Melalui gardu induk, listrik didistribusikan ke menara transmisi tegangan tinggi (SUTET) sebelum akhirnya diturunkan kembali tegangannya (Step-Down) untuk konsumsi masyarakat.",
      ],
      img: "https://haloedukasi.com/wp-content/uploads/2021/05/Untitled-28.jpg",
    },
    windTurbine: {
      img: windImg,
      sections: [
        {
          title: "1. Bagian Eksternal dan Koneksi Utama",
          desc: "Hub Rotor: Ini adalah titik pusat tempat bilah-bilah (baling-baling) turbin terpasang. Hub ini berfungsi untuk menangkap energi kinetik dari angin dan mengubahnya menjadi energi putar.\n\nMenara: Struktur vertikal tinggi yang menopang seluruh nacelle dan rotor. Ketinggian menara sangat penting untuk mencapai angin yang lebih kencang dan stabil di ketinggian yang lebih tinggi.",
        },
        {
          title: "2. Sistem Transmisi Tenaga (Drivetrain)",
          desc: "Ini adalah jantung dari turbin, yang bertugas mengubah putaran lambat dari bilah menjadi putaran cepat untuk generator.\n\nLow-Speed Shaft (Poros Berkecepatan Rendah): Poros ini terhubung langsung ke hub rotor. Karena bilah turbin berputar relatif lambat (sekitar 10-20 putaran per menit/RPM), poros ini membawa torsi yang sangat besar tetapi dengan kecepatan putaran yang rendah.\n\nGearbox (Kotak Roda Gigi): Komponen ini sangat krusial. Gearbox menghubungkan low-speed shaft dengan high-speed shaft. Di dalamnya terdapat serangkaian roda gigi (dalam diagram terlihat sistem roda gigi planet/epicyclic) yang berfungsi untuk meningkatkan kecepatan putaran (menaikkan RPM) hingga ratusan atau ribuan kali lipat, disesuaikan dengan kebutuhan generator.\n\nHigh-Speed Shaft (Poros Berkecepatan Tinggi): Poros ini keluar dari gearbox dan masuk ke generator. Poros ini berputar dengan kecepatan yang jauh lebih tinggi daripada low-speed shaft, yang memungkinkannya untuk menggerakkan generator secara efisien. Pada poros ini juga sering dipasangi rem cakram mekanis untuk pengereman darurat atau pemeliharaan.",
        },
        {
          title: "3. Konversi Energi dan Kontrol Daya",
          desc: "Penjana Listrik (Generator): Inilah tempat konversi energi yang sesungguhnya terjadi. Putaran dari high-speed shaft menggerakkan rotor di dalam generator, yang kemudian menghasilkan energi listrik (arus bolak-balik/AC) melalui induksi elektromagnetik. Dalam diagram terlihat kumparan tembaga yang merupakan bagian dari stator.\n\nKonverter Daya & Control Panels: Listrik yang dihasilkan oleh generator seringkali memiliki frekuensi dan tegangan yang tidak stabil (tergantung kecepatan angin). Konverter daya elektronik menstabilkan dan menyesuaikan listrik ini agar sesuai dengan standar jaringan listrik (grid). Panel kontrol berisi komputer yang memantau kondisi turbin, mengontrol mekanisme yaw, rem, dan berkomunikasi dengan operator pusat.",
        },
        {
          title: "4. Sistem Penunjang dan Keamanan",
          desc: "Sensor Angin (Anemometer) & Penunjuk Arah: Alat ini dipasang di bagian luar paling belakang nacelle. Anemometer mengukur kecepatan angin, sedangkan penunjuk arah mengukur dari mana angin bertiup. Data dari sensor ini dikirim ke sistem kontrol untuk mengoptimalkan kinerja turbin.\n\nSistem Yaw (Yaw Drive): Mekanisme ini terdiri dari motor listrik (dalam diagram terlihat dua motor di bagian bawah) dan roda gigi besar yang memungkinkan seluruh nacelle (bersama bilah) berputar secara horizontal di atas menara. Berdasarkan data dari sensor arah angin, sistem yaw memastikan turbin selalu menghadap tepat ke arah angin untuk menangkap energi maksimal.\n\nSistem Pendingin: Pengoperasian gearbox dan generator menghasilkan panas yang signifikan. Sistem pendingin, yang dapat berupa kipas (fan) dan penukar panas (heat exchanger), bekerja untuk mendinginkan minyak pelumas di gearbox dan mendinginkan gulungan generator agar tidak terjadi panas berlebih (overheating) yang dapat merusak komponen.",
        },
      ],
    },
    pros: [
      "Sumber energi terbarukan yang tidak akan pernah habis.",
      "Bebas emisi karbon, tidak mencemari udara maupun air.",
      "Efisiensi lahan tinggi; area di bawah turbin tetap bisa digunakan untuk pertanian atau peternakan.",
      "Biaya operasional bahan bakar nol rupiah.",
    ],
    cons: [
      "Intermitensi: Produksi listrik sangat bergantung pada cuaca dan kecepatan angin.",
      "Biaya pemeliharaan tinggi karena komponen bekerja di ketinggian ekstrem.",
      "Risiko bagi fauna udara (burung dan kelelawar) yang bermigrasi.",
      "Dampak estetika dan polusi suara (dengung mekanis).",
    ],
    benefits: ["Transformasi lahan pesisir atau perbukitan gersang menjadi ladang energi produktif.", "Meningkatkan kemandirian energi nasional melalui sumber daya lokal."],
    impacts: ["Polusi Suara: Suara gesekan bilah dan mekanik gearbox yang bisa terdengar hingga jarak tertentu.", "Polusi Visual: Perubahan lanskap alam akibat kehadiran deretan menara turbin raksasa."],
    history:
      "Sejarah PLTB skala besar di Indonesia dimulai pada era Presiden Joko Widodo sebagai bagian dari program percepatan infrastruktur kelistrikan nasional. Proyek perdananya, PLTB Sidrap di Sulawesi Selatan, diresmikan pada Juli 2018 dengan investasi sekitar Rp2,2 triliun (US$150 juta). Langkah ini kemudian diikuti oleh pembangunan PLTB Tolo di Jeneponto yang menelan biaya sekitar Rp2,3 triliun (US$160,7 juta). Secara keseluruhan, fase awal pengembangan energi angin komersial di Indonesia ini telah menyerap investasi lebih dari Rp4,5 triliun melalui skema kerja sama pengembang swasta (IPP).",
    locations: [
      { name: "PLTB Sidrap (Tahap I)", prov: "Sulawesi Selatan", cap: "75 MW", status: "Aktif", lat: -3.973068, lng: 119.710243 },
      { name: "PLTB Tolo (Jeneponto)", prov: "Sulawesi Selatan", cap: "72 MW", status: "Aktif", lat: -5.605274, lng: 119.761876 },
      { name: "PLTB TALA", prov: "Kalimantan Selatan", cap: "70 MW", status: "Pengembangan", lat: -3.841151, lng: 114.795868 },
      { name: "PLTB Sidrap (Tahap II)", prov: "Sulawesi Selatan", cap: "50 MW", status: "Tahap Ekspansi", lat: -3.973015, lng: 119.710175 },
      { name: "PLTB Sukabumi (Ciemas)", prov: "Jawa Barat", cap: "~50 MW", status: "Tahap Kelayakan", lat: null, lng: null },
      { name: "PLTB Oelbubuk", prov: "Nusa Tenggara Timur", cap: "Mikro", status: "Skala Desa", lat: null, lng: null },
      { name: "PLTB Nusa Penida", prov: "Bali", cap: "Hibrida", status: "Sistem Hibrida", lat: -8.731221, lng: 115.53636 },
    ],
    glossary: [
      { term: "Energi Kinetik", desc: "Energi yang dimiliki oleh massa udara (angin) yang bergerak, yang menjadi sumber utama tenaga turbin." },
      { term: "Nacelle", desc: "Rumah mesin di atas menara yang melindungi generator, gearbox, dan sistem kontrol dari cuaca." },
      { term: "Gearbox", desc: "Sistem transmisi yang berfungsi menaikkan rasio putaran dari poros lambat ke poros cepat untuk generator." },
      { term: "Yaw System", desc: "Mekanisme komputerisasi untuk memutar kepala turbin agar selalu tegak lurus menantang arah angin." },
      { term: "Transformator Step-Up", desc: "Alat untuk menaikkan tegangan listrik hasil generator agar efisien saat dikirim melalui kabel transmisi jarak jauh." },
      { term: "Anemometer", desc: "Sensor navigasi pada atap nacelle untuk memantau kecepatan angin secara presisi." },
      { term: "Induksi Elektromagnetik", desc: "Proses fisik di dalam generator di mana putaran magnet menghasilkan arus listrik pada kumparan tembaga." },
      {
        term: "Sistem Hibrida",
        desc: "Sistem pembangkit terintegrasi yang menggabungkan dua atau lebih sumber energi (seperti angin dan surya) dengan cadangan generator diesel untuk memastikan suplai listrik tetap stabil meski kondisi cuaca berubah.",
      },
    ],
  },
  en: {
    title: "PLTB (Wind Power Plant)",
    heroTitle: "Wind Symphony, Infinite Energy",
    heroDesc: "Capturing the dance of the wind to drive civilization through the mechanical harmony of giant, eco-friendly windmills.",
    definition:
      "A Wind Power Plant (PLTB) is a renewable energy system that converts the kinetic energy of wind into electricity. Using colossal turbines, kinetic energy is transformed into mechanical rotation, which is then converted by a generator into pure electrical power.",
    caraKerja: {
      text: "The process begins by capturing the wind's kinetic energy through rotor blades, passing it through a transmission system, and converting it into high-voltage electricity.",
      extended: [
        "1. Momentum Capture: Wind strikes aerodynamically designed blades, creating lift that spins the rotor hub.",
        "2. Rotational Multiplier (Gearbox): The slow rotation of the main shaft enters the Gearbox to be accelerated (RPM) thousands of times, optimizing it for the generator.",
        "3. Electromagnetic Induction: The high-speed shaft spins a magnetic field within the Generator, producing Alternating Current (AC) electricity.",
        "4. Voltage Escalation (Step-Up): Electricity is pooled and then its voltage is drastically increased by a Step-Up transformer to minimize power losses during long-distance transmission.",
        "5. Grid Distribution: Through substations, the power is distributed via high-voltage transmission lines (SUTET) before being stepped down for domestic consumption.",
      ],
      img: "https://haloedukasi.com/wp-content/uploads/2021/05/Untitled-28.jpg",
    },
    windTurbine: {
      img: windImg,
      sections: [
        {
          title: "1. External Parts and Main Connections",
          desc: "Rotor Hub: The central point where turbine blades are attached. It captures kinetic wind energy converting it to rotational power.\n\nTower: A tall vertical structure supporting the nacelle and rotor. Height is crucial to reaching stronger, stable winds at higher elevations.",
        },
        {
          title: "2. Drivetrain Transmission System",
          desc: "The heart of the turbine, tasked with transforming slow blade rotations into high speeds for the generator.\n\nLow-Speed Shaft: Connected directly to the hub. Carries massive torque but at low speeds (10-20 RPM).\n\nGearbox: Crucial component linking low to high-speed shafts. Epicyclic gears exponentially increase rotational speeds (RPM) hundreds of times matching generator needs.\n\nHigh-Speed Shaft: Exits the gearbox entering the generator at much higher velocities. Frequently equipped with mechanical disc brakes for emergencies.",
        },
        {
          title: "3. Energy Conversion and Power Control",
          desc: "Electric Generator: Where energy conversion actually happens. High-speed shaft rotation drives the internal rotor creating AC electricity via electromagnetic induction.\n\nPower Converter & Control Panels: Stabilizes intermittent output voltage and frequency matching external grid standards. Computers monitor conditions, yaw alignments, and brakes.",
        },
        {
          title: "4. Support and Safety Systems",
          desc: "Anemometer & Wind Vane: Mounted outside the rear nacelle to accurately measure wind velocity and direction, dispatching optimized tracking data to central controllers.\n\nYaw Drive System: Comprises electric motors and massive gears allowing horizontal continuous nacelle alignment atop the tower, ensuring blades perpetually confront optimal wind streams.\n\nCooling System: Heat exchangers rapidly cool the gearbox lubricating oils and generator superheated coils averting catastrophic component overheating contingencies.",
        },
      ],
    },
    pros: ["Limitless renewable energy source.", "Carbon-emission free; does not pollute air or water.", "High land efficiency; area beneath turbines remains viable for farming or livestock.", "Zero fuel operational costs."],
    cons: [
      "Intermittency: Electricity production is highly dependent on weather and wind speeds.",
      "High maintenance costs due to components operating at extreme heights.",
      "Risks to migrating avian fauna (birds and bats).",
      "Aesthetic impacts and noise pollution.",
    ],
    benefits: ["Transforms barren coastal or hilly areas into productive energy fields.", "Enhances national energy independence through local resources."],
    impacts: ["Noise Pollution: Constant aerodynamic hum from the blades and mechanical gearbox noise.", "Visual Pollution: Changes in the natural landscape due to the presence of giant turbine towers."],
    history:
      "The history of enormous-scale wind farms (PLTB) within Indonesia dawned profoundly throughout President Joko Widodo's tenure encapsulating a vital segment in expediting national electrical grid expansions. The premiere project, the Sidrap Wind Farm within South Sulawesi, was inaugurated in July 2018 absorbing approximated investments touching Rp2.2 trillion (US$150 million). Assuredly, this initial leap accelerated succeeding projects incorporating the Tolo Wind Farm stationed at Jeneponto, requiring a financial injection scaling around Rp2.3 trillion (US$160.7 million). Altogether, this early wind power commercialization phase within Indonesia successfully seized foreign/native investments exceeding Rp4.5 trillion fueled thoroughly by private developer collaborations (IPP mechanisms).",
    locations: [
      { name: "PLTB Sidrap (Phase I)", prov: "South Sulawesi", cap: "75 MW", status: "Active", lat: -3.973068, lng: 119.710243 },
      { name: "PLTB Tolo (Jeneponto)", prov: "South Sulawesi", cap: "72 MW", status: "Active", lat: -5.605274, lng: 119.761876 },
      { name: "PLTB TALA", prov: "South Kalimantan", cap: "70 MW", status: "Construction", lat: -3.841151, lng: 114.795868 },
      { name: "PLTB Sidrap (Phase II)", prov: "South Sulawesi", cap: "50 MW", status: "Expansion", lat: -3.973015, lng: 119.710175 },
      { name: "PLTB Sukabumi (Ciemas)", prov: "West Java", cap: "~50 MW", status: "Planning", lat: null, lng: null },
      { name: "PLTB Oelbubuk", prov: "East Nusa Tenggara", cap: "Micro", status: "Pilot Project", lat: null, lng: null },
      { name: "PLTB Nusa Penida", prov: "Bali", cap: "Hybrid", status: "Operating", lat: -8.731221, lng: 115.53636 },
    ],
    glossary: [
      { term: "Kinetic Energy", desc: "The energy held by moving air mass (wind), serving as the primary power source for the turbine." },
      { term: "Nacelle", desc: "The housing atop the tower protecting the generator, gearbox, and control systems from the weather." },
      { term: "Gearbox", desc: "A transmission system that increases the rotation ratio from the low-speed shaft to the high-speed shaft for the generator." },
      { term: "Yaw System", desc: "A computational mechanism to rotate the turbine head to perpetually face the wind." },
      { term: "Step-Up Transformer", desc: "A device to increase voltage from the generator to ensure efficiency during long-distance transmission." },
      { term: "Anemometer", desc: "A navigation sensor on the nacelle roof to monitor precise wind speeds." },
      { term: "Electromagnetic Induction", desc: "The physical process inside the generator where magnetic rotation produces electric current in copper coils." },
      { term: "Hybrid System", desc: "An integrated power system that combines two or more energy sources (such as wind and solar) with a diesel generator backup to ensure a stable electricity supply despite changing weather conditions." },
    ],
  },
};
