const fs = require('fs');
const content = fs.readFileSync('pltsData.js', 'utf8');
const locStart = content.indexOf('locations: [');
const locEnd = content.lastIndexOf(']');
const locationsString = content.substring(locStart + 11, locEnd + 1);

const idGlossaryStr = JSON.stringify([
    { term: 'Foton', desc: 'Partikel dasar pembawa radiasi elektromagnetik (cahaya) dari matahari.' },
    { term: 'Fotovoltaik (PV)', desc: 'Teknologi yang mengubah energi cahaya secara langsung menjadi listrik menggunakan efek fotolistrik.' },
    { term: 'Arus Searah (DC)', desc: 'Arus listrik yang mengalir konstan dalam satu arah, aliran mentah yang dihasilkan oleh panel surya.' },
    { term: 'Arus Bolak-balik (AC)', desc: 'Arus listrik yang arah alirannya berubah-ubah secara periodik, digunakan secara standar oleh rumah tangga dan PLN.' },
    { term: 'Inverter', desc: 'Perangkat teknologi yang vital untuk mengubah arus DC dari panel surya menjadi arus AC yang bisa dimanfaatkan.' },
    { term: 'Intermittent', desc: 'Sifat yang terputus-putus atau tidak stabil, merujuk pada energi surya yang hilang timbul karena cuaca atau malam hari.' },
    { term: 'MWp (Megawatt-peak)', desc: 'Ukuran kapasitas output daya listrik maksimum sebuah sistem surya pada kondisi pencahayaan dan suhu ideal lab.' },
    { term: 'Solar Floater', desc: 'Struktur rakit logam dan plastik pengapung yang memungkinkan panel surya mengapung aman di atas perairan terbuka.' }
], null, 4);

const enGlossaryStr = JSON.stringify([
    { term: 'Photon', desc: 'A fundamental particle carrying electromagnetic radiation (light) from the sun.' },
    { term: 'Photovoltaic (PV)', desc: 'Technology converting light energy directly into electricity via the photoelectric effect.' },
    { term: 'Direct Current (DC)', desc: 'Electricity flowing in a constant direction consistently, natively produced by solar panels.' },
    { term: 'Alternating Current (AC)', desc: 'Electricity whose flow changes direction periodically, standardly used by utilities and homes.' },
    { term: 'Inverter', desc: 'A crucial device transforming DC power from solar panels into usable AC power.' },
    { term: 'Intermittent', desc: 'Unstable or non-continuous behavior, typically describing solar power dropping at night or during cloudy days.' },
    { term: 'MWp (Megawatt-peak)', desc: 'The maximum potential output capacity of a solar system under ideal standard test conditions.' },
    { term: 'Solar Floater', desc: 'A framework of floats allowing solar panels to operate safely atop open water bodies.' }
], null, 4);

const out = `export const pltsData = {
  id: {
    title: "PLTS (Pembangkit Listrik Tenaga Surya)",
    heroTitle: "Energi Cahaya Matahari",
    heroDesc: "PLTS menggunakan teknologi fotovoltaik untuk menyerap foton dari sinar matahari dan mengubahnya langsung menjadi arus listrik searah (DC).",
    definition: "PLTS adalah pembangkit listrik yang menggunakan sinar matahari sebagai sumber energi yang kemudian dikonversikan menjadi energi listrik dengan bantuan panel surya.",
    caraKerja: {
      text: "Sinar matahari menabrak material semikonduktor (biasanya silikon) pada sel surya, melepaskan elektron yang mengalir membentuk arus listrik DC. Arus ini kemudian diubah menjadi arus bolak-balik (AC) oleh inverter agar bisa masuk ke jaringan listrik PLN.",
      extended: [
        "1. PLTS Off-Grid: Jenis PLTS tidak terhubung ke jaringan listrik utama. Umumnya digunakan di daerah terpencil.",
        "2. PLTS Hybrid: Mengombinasikan PLTS dengan sumber energi lain, seperti generator diesel atau baterai canggih.",
        "3. PLTS On-Grid: Sistemnya secara paralel terhubung ke jaringan listrik utama PLN.",
        "4. Solar Floater: Pembangkit terapung yang dipasang menutupi permukaan air bendungan atau danau."
      ],
      img: "https://tenagamatahari.wordpress.com/wp-content/uploads/2011/12/gambar-system-kerja.png"
    },
    pros: [
      "Sumber energi melimpah secara mutlak di wilayah geografis ekuator tropis.",
      "Waktu pembangunan dan pemasangan infrastruktur sangat cepat.",
      "Minim biaya pemeliharaan harian karena tidak adanya komponen roda gigi mekanis yang aus."
    ],
    cons: [
      "Bersifat intermittent (hanya menghasilkan listrik optimal saat ada radiasi matahari langsung).",
      "Efisiensi panel menurun drastis saat cuaca mendung atau curah hujan lebat.",
      "Membutuhkan baterai raksasa yang masih sangat mahal untuk penyediaan cadangan arus saat malam hari."
    ],
    benefits: [
      "Energi matahari merupakan sumber energi terbarukan yang tak terbatas dan digratiskan alam.",
      "Mengurangi Emisi Gas Rumah Kaca secara drastis (nol pembakaran).",
      "Meningkatkan Nilai Properti dan menghadirkan listrik seketika tanpa perlu suplai BBM fosil."
    ],
    impacts: [
      "Penggunaan Lahan: Pembangunan PLTS skala besar sering memerlukan pembabatan lahan luas yang dapat merusak ekosistem lokal.",
      "Limbah Panel Surya: Panel fotovoltaik yang usang mengandung limbah logam berat berbahaya (B3) jika tidak direcycle secara benar."
    ],
    history: "Sejarah PLTS di Indonesia bermula pada masa pemerintahan Presiden Soeharto sekitar tahun 1980-an, yang kala itu masih berupa proyek percontohan skala kecil seperti Solar Home System (SHS) untuk melistriki desa terpencil. Memasuki era Presiden Joko Widodo, pengembangan surya melompat ke skala industri besar dengan anggaran yang fantastis. Sebagai contoh, PLTS Oelpuah di NTT (2015) dibangun dengan investasi sekitar Rp160 miliar, sementara proyek raksasa PLTS Terapung Cirata di Jawa Barat (2023) menelan anggaran mencapai Rp2,2 triliun. Transformasi ini menunjukkan pergeseran dari sekadar bantuan sosial di pelosok menjadi investasi infrastruktur energi nasional yang bernilai triliunan rupiah.",
    locations: \${locationsString},
    glossary: \${idGlossaryStr}
  },
  en: {
    title: "PLTS (Solar Power Plant)",
    heroTitle: "Solar Light Energy",
    heroDesc: "PLTS utilizes photovoltaic technology to absorb photons from sunlight, converting them directly into direct current (DC) electricity.",
    definition: "PLTS is a power generation plant utilizing sunlight as its energy source, converting it into electrical energy via solar panels.",
    caraKerja: {
      text: "Sunlight hits semiconductor materials (usually silicon) within solar cells, knocking electrons loose to form a DC electric current. This current is then inverted into alternating current (AC) to sync with the national utility grid.",
      extended: [
        "1. Off-Grid Solar: Not connected to the main utility grid, commonly used in completely remote offline villages.",
        "2. Hybrid Solar: Combines solar with another energy source (like diesel generators) or massive battery banks.",
        "3. On-Grid Solar: The system is hooked in parallel to the main grid network.",
        "4. Solar Floater: Floating installations covering the water surfaces of dams or lakes."
      ],
      img: "https://tenagamatahari.wordpress.com/wp-content/uploads/2011/12/gambar-system-kerja.png"
    },
    pros: [
      "Absolutely abundant energy source within the tropical equator.",
      "Rapidly swift infrastructure assembly and deployment time.",
      "Minimal daily maintenance costs owing to zero moving mechanical gear parts."
    ],
    cons: [
      "Intermittent nature (only produces optimal electricity under active direct solar radiation).",
      "Panel efficiency plunges dramatically during cloudy or heavy rainfall seasons.",
      "Demands colossal and expensive battery systems for nighttime power retention."
    ],
    benefits: [
      "Solar energy is an infinite, eternally free renewable natural resource.",
      "Drastically suppresses greenhouse gas emissions (zero combustion process).",
      "Increases property value and provides instant electricity without relying on fossil fuels."
    ],
    impacts: [
      "Land Consumption: Large-scale solar farms often mandate extensive land clearing, destroying localized habitats.",
      "Solar Panel Waste: Obsolete photovoltaic cells contain toxic heavy metals requiring highly specialized recycling procedures."
    ],
    history: "The history of solar power (PLTS) in Indonesia dates back to President Soeharto's era in the 1980s, primarily taking shape as pilot-scale Solar Home Systems (SHS) for electrifying remote offline villages. During President Joko Widodo's era, solar development skyrocketed into utility-scale industrial proportions backed by tremendous spending. For instance, the 2015 PLTS Oelpuah in NTT was established with an investment of Rp160 billion, whilst the colossal PLTS Terapung Cirata (Floating Solar) in West Java (2023) consumed a staggering Rp2.2 trillion. This transformation marks a monumental pivot from mere rural social assistance into multi-trillion rupiah backbone energy framework investments.",
    locations: \${locationsString},
    glossary: \${enGlossaryStr}
  }
};
`;

fs.writeFileSync('pltsData.js', out);
console.log('pltsData Done!');
