import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Sections.css";
import "../styles/Education.css";
import PltDetail from "./PltDetail";
import { pltDetailsData } from "../data/pltDetailsData";
import LokasiEbt from "./LokasiEbt";
import { useLanguage } from "../context/LanguageContext";

const eduTexts = {
  id: {
    badge: "Edukasi Energi",
    title: "Kenali ",
    titleHighlight: "Energi & Pembangkit",
    titleEnd: " Terbarukan",
    desc: "Dari konsep dasar EBT, jenis pembangkit di Indonesia, hingga teknologi masa depan yang belum hadir di sini.",
    tabs: [
      { id: "intro", label: "Dasar EBT" },
      { id: "indonesia", label: "PLT Indonesia" },
      { id: "abroad", label: "PLT Luar Negeri" },
    ],
    learnMore: "Yuk pelajari ini →",
    abroadSub1: "Teknologi berikut beroperasi di luar negeri, namun",
    abroadSub2: " belum ada di Indonesia",
    abroadSub3: ".",
    clickTip: "Klik untuk lihat jawaban",
    flipFrontTip: "KLIK AGAR TEKS TERLIHAT",
    flipBackTip: "Klik untuk menutup",
    concepts: [
      { id: "A", accent: "#76A557", question: "Apa itu Energi Baru Terbarukan (EBT)?", answer: "Energi Baru Terbarukan (EBT) adalah sumber energi alternatif yang dapat dengan cepat dipulihkan kembali secara alami dan prosesnya berkelanjutan. Konsep ini menggabungkan Energi Terbarukan yang berasal dari alam seperti matahari, air, dan angin, dengan Energi Baru yang memanfaatkan inovasi teknologi mutakhir seperti nuklir atau tenaga laut. Keduanya disatukan dalam satu misi untuk menggantikan bahan bakar fosil demi menciptakan sumber listrik yang lebih bersih, melimpah, dan ramah lingkungan bagi masa depan." },
      { id: "B", accent: "#76A557", question: "Mengapa EBT?", answer: "Energi listrik merupakan jenis energi yang paling banyak dibutuhkan dimana kebutuhan listrik di Indonesia mencapai 1.173 kWh/kapita pada tahun 2022. Sumber daya energi yang sifatnya terbatas seperti batu bara tidak bisa memenuhi kebutuhan listrik masyakarat Indonesia yang terus meningkat sehingga dibutuhkan sumber daya energi baru terbarukan yang persediaanya lebih banyak di alam. Pemerintah menargetkan penggunaan energi baru terbarukan ini melalui Perpres No.5 Tahun 2006 tentang Kebijakan Energi Nasional tahun 2006-2025 yang menjelaskan bahwa dalam pasokan energi harus dipenuhi 17% energi terbarukan." },
      { id: "C", accent: "#76A557", question: "Apa itu PLT?", answer: "Pembangkit Listrik Terbarukan (PLT) adalah Jenis Pembangkit Listrik yang menghasilkan energi listrik dari energi terbarukan. Ia menggunakan sumber-sumber dari alam yang bisa diperbaharui secara natural sehingga suplainya tidak akan habis. PLT memiliki banyak jenis dan mekanisme yang berbeda, tergantung pada asal energi terbarukan yang diambil. Perbedaan antara Pembangkit Listrik Terbarukan dan Pembangkit Listrik Konvensional ada pada jenis energi asalnya, yang dimana PLT mengambil energi dari sumber yang terbarukan sedangkan Pembangkit Konvensional mengambil energi dari sumber yang terbatas." },
      { id: "D", accent: "#76A557", question: "Persamaan PLT dengan EBT?", answer: "PLT dan EBT sama sama berada dalam bidang energi terbarukan, dimana PLT menjadi produsen dalam ekosistem Energi Baru Terbarukan. Energi terbarukan adalah energi yang bersumber dari alam dan secara berkesinambungan dapat terus diproduksi tanpa harus menunggu waktu jutaan tahun layaknya energi berbasis fosil. Pembangkit Listrik memanfaatkan sumber alami, yang menjadi suplai untuk menghasilkan energi terbarukan, memproduksi listrik dengan energi yang tidak terbatas dan bisa habis." },
      { id: "E", accent: "#76A557", question: "Perbedaan EBT dengan Energi Terbarukan?", answer: "Energi Terbarukan merujuk murni pada energi yang dihasilkan dari sumber alam yang dapat terus pulih seperti angin, surya, dan air. Sementara EBT (Energi Baru Terbarukan) adalah istilah resmi yang digunakan di Indonesia, di mana komponen 'Energi Baru' turut ditambahkan. 'Energi Baru' mencakup bentuk energi dari teknologi mutakhir yang belum dikomersialkan secara luas, seperti nuklir atau panas bumi ultra-dalam." },
      { id: "F", accent: "#76A557", question: "Apa Tantangan EBT di Indonesia?", answer: "Tantangan utamanya meliputi biaya investasi awal yang cukup tinggi, kesiapan infrastruktur dan jaringan transmisi antarpulau, serta sifat alami beberapa sumber EBT yang fluktuatif (seperti surya yang bergantung pada cuaca). Namun, dengan komitmen dan investasi strategis, kendala ini secara bertahap mulai teratasi." }
    ]
  },
  en: {
    badge: "Energy Education",
    title: "Understanding ",
    titleHighlight: "Renewable Energy & Plants",
    titleEnd: "",
    desc: "From basic renewable energy concepts and various power plants in Indonesia, to future technologies not yet available here.",
    tabs: [
      { id: "intro", label: "RE Basics" },
      { id: "indonesia", label: "Indonesian Plants" },
      { id: "abroad", label: "Global Plants" },
    ],
    learnMore: "Learn More →",
    abroadSub1: "The following technologies operate worldwide, but are",
    abroadSub2: " not yet available in Indonesia",
    abroadSub3: ".",
    clickTip: "Click for answer",
    flipFrontTip: "CLICK TO REVEAL TEXT",
    flipBackTip: "Click to close",
    concepts: [
      { id: "A", accent: "#76A557", question: "What is Renewable Energy (RE)?", answer: "Renewable Energy is an alternative energy source that can be quickly restored naturally and is sustainable. This concept combines Renewable Energy derived from nature such as the sun, water, and wind, with New Energy that utilizes cutting-edge technological innovations like nuclear or marine power. Both are united in a single mission to replace fossil fuels and create a cleaner, more abundant, and environmentally friendly source of electricity for the future." },
      { id: "B", accent: "#76A557", question: "Why Renewable Energy?", answer: "Electrical energy is the most needed type of energy, where electricity demand in Indonesia reached 1,173 kWh/capita in 2022. Limited energy resources such as coal cannot meet the ever-increasing electricity needs of the Indonesian society, thus requiring new and renewable energy resources that are more abundant in nature. The government targets the use of this renewable energy through Presidential Regulation No.5 of 2006 concerning the 2006-2025 National Energy Policy, which states that 17% of the energy supply must be met by renewable energy." },
      { id: "C", accent: "#76A557", question: "What is a Power Plant (PLT)?", answer: "A Renewable Power Plant (PLT) is a type of power plant that generates electricity from renewable energy. It uses natural resources that can be replenished naturally so the supply will never run out. PLT has many different types and mechanisms, depending on the renewable energy source utilized. The main difference between a Renewable Power Plant and a Conventional Power Plant lies in the energy source, where a PLT harvests endless renewable sources while conventional plants consume finite resources." },
      { id: "D", accent: "#76A557", question: "How do PLT and RE connect?", answer: "PLT and RE both operate within the renewable energy sector, where PLT serves as the producer in the Renewable Energy ecosystem. Renewable energy is sourced from nature and can be continuously produced without waiting millions of years like fossil-based energy. Power Plants utilize natural sources as a supply to generate renewable energy, producing electricity with limitless energy that will never run out." },
      { id: "E", accent: "#76A557", question: "Difference between RE and New Energy?", answer: "Renewable Energy refers purely to resources that naturally replenish over time like wind, solar, and hydro. However, the Indonesian term 'EBT' (New and Renewable Energy) specifically includes 'New Energy'. New Energy encompasses energy generated from cutting-edge advanced technologies that haven't been widely commercialized yet, such as nuclear power or ultra-deep geothermal." },
      { id: "F", accent: "#76A557", question: "What are the Challenges in Indonesia?", answer: "The main challenges include relatively high initial investment costs, the readiness of inter-island transmission networks and infrastructure, and the naturally fluctuating characteristics of certain RE sources (like weather-dependent solar). However, with strong commitment and strategic investments, these hurdles are gradually being overcome to achieve absolute national energy security." }
    ]
  }
};
const PltHoverCard = ({ plt, index, onClickDetail, lang, textObj }) => (
  <motion.div
    className="plt-hc"
    style={{ "--hc-accent": plt.accent }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, type: "spring", stiffness: 90 }}
  >
    <span className="plt-hc-num">#{plt.no}</span>
    <div className="plt-hc-default">
      <span className="plt-hc-code">{plt.code}</span>
      <h4 className="plt-hc-name">{lang === "en" && plt.eng ? plt.eng : plt.name}</h4>
    </div>
    <div className="plt-hc-img-wrap">
      <img src={plt.img} alt={plt.name} className="plt-hc-img" loading="lazy" />
      <div className="plt-hc-overlay" style={{ background: `linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, transparent 100%)` }} />
    </div>
    <div className="plt-hc-hover-body">
      <span className="plt-hc-hover-code">{plt.code}</span>
      <h4 className="plt-hc-hover-name">{lang === "en" && plt.eng ? plt.eng : plt.name}</h4>
      <p className="plt-hc-hover-eng">{lang === "en" ? plt.name : (plt.eng || plt.name)}</p>
      {pltDetailsData[plt.code] ? (
        <button
          className="plt-hc-link"
          style={{ background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", display: "inline-block" }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClickDetail(plt.code); }}
        >
          {textObj.learnMore}
        </button>
      ) : (
        <a
          href="https://id.wikipedia.org/wiki/Energi_terbarukan"
          target="_blank"
          rel="noopener noreferrer"
          className="plt-hc-link"
          onClick={e => e.stopPropagation()}
        >
          {textObj.learnMore}
        </a>
      )}
    </div>
  </motion.div>
);
const pltIndonesia = [
  { no: 1, code: "PLTA", name: "Pembangkit Listrik Tenaga Air", eng: "Hydropower", img: "https://www.anakteknik.co.id/property/8584/articles/2418/plta.jpg", accent: "#0ea5e9" },
  { no: 2, code: "PLTS", name: "Pembangkit Listrik Tenaga Surya", eng: "Solar Power", img: "https://infobanknews.com/wp-content/uploads/2025/10/PLTS.jpg", accent: "#f59e0b" },
  { no: 3, code: "PLTB", name: "Pembangkit Listrik Tenaga Bayu", eng: "Wind Power", img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hrc46pvb6n2kvdcb7bvw0g6b.jpg", accent: "#76A557" },
  { no: 4, code: "PLTP", name: "Pembangkit Listrik Tenaga Panas Bumi", eng: "Geothermal Power", img: "https://zonaebt.com/wp-content/uploads/PLTP.jpeg", accent: "#ef4444" },
  { no: 5, code: "PLTBM", name: "Pembangkit Listrik Tenaga Biomasa", eng: "Biomass Power", img: "https://awsimages.detik.net.id/community/media/visual/2023/11/23/potret-pembangunan-pltbm-di-bangka-belitung_169.jpeg?w=700&q=90", accent: "#84cc16" },
  { no: 6, code: "PLTBG", name: "Pembangkit Listrik Tenaga Biogas", eng: "Biogas Power", img: "https://cdn1-production-images-kly.akamaized.net/Gn_dad9qlmCOOltMQtdWdC2D3u8=/1x86:1000x649/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3342150/original/002326700_1609945483-shutterstock_666196489.jpg", accent: "#22c55e" },
  { no: 7, code: "PLTSA", name: "Pembangkit Listrik Tenaga Sampah", eng: "Waste-to-Energy", img: "https://asset.kompas.com/crops/3UEy5Jb1_CWfIiuBhNouzLvkPZg=/292x22:1025x511/1200x800/data/photo/2022/06/28/62bad82ea2a25.jpg", accent: "#f97316" },
  { no: 8, code: "PLTAL", name: "Pembangkit Listrik Tenaga Arus Laut", eng: "Ocean Current Energy", img: "https://tse2.mm.bing.net/th/id/OIP.ciqwhdtcdQaSy9FznNKzBQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", accent: "#0ea5e9" },
];

const pltLuarNegeri = [
  { no: 1, code: "PLT Pasang Surut", name: "Tidal Lagoon / Barrage", eng: "Tidal Energy", img: "https://assets.newatlas.com/dims4/default/72db56e/2147483647/strip/true/crop/1458x820+0+0/resize/1920x1080!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F99%2F99%2Feb6c40064bfb88e8112d0c864599%2Fmersey-tidal-barrage-image-1.png", accent: "#06b6d4", alasan: "Topografi laut Indonesia tidak mendukung" },
  { no: 2, code: "PLT CSP", name: "Concentrated Solar Power", eng: "Solar Thermal", img: "https://www.brunel.net/_next/image?url=https:%2F%2Fedge.sitecorecloud.io%2Fbrunelinterddf0-bruneldigit4055-production-3558%2Fmedia%2FBrunel-img%2FGlobal%2FBlogs%2Fcsp-header.jpg%3Fh%3D540%26iar%3D0%26w%3D900&w=3840&q=75", accent: "#f59e0b", alasan: "Butuh iklim gurun—Indonesia terlalu lembap" },
  { no: 3, code: "PLT Osmosis", name: "Blue Energy / Osmotic Power", eng: "Osmotic Energy", img: "https://eepower.com/uploads/articles/The_Statkraft_blue_energy_plant_in_Norway.jpg", accent: "#3b82f6", alasan: "Teknologi masih tahap R&D global" },
  { no: 4, code: "PLT EGS", name: "Enhanced Geothermal System", eng: "EGS Power", img: "https://www.edengeothermal.com/wp-content/uploads/2019/09/eden-1746784-Penstones.jpg", accent: "#ef4444", alasan: "Teknologi rekayasa hidrolik ultra-dalam belum siap" },
];
const EbtStaticCard = ({ concept, isDark }) => {
  return (
    <motion.div 
      className={`ebt-static-card ${isDark ? "ebt-static-card--dark" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4 }}
      style={{ borderTop: `4px solid ${concept.accent}` }}
    >
      <h3 className="ebt-static-q">{concept.question}</h3>
      <p className="ebt-static-a">{concept.answer}</p>
    </motion.div>
  );
};
const EbtAccordionCard = ({ concept, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`edu-concept-card ${isOpen ? "edu-concept-card--open" : ""} ${isDark ? "ebt-flip--dark" : ""}`}
      style={{ "--c-accent": concept.accent }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="edu-concept-header">
        <h3 className="edu-concept-question">{concept.question}</h3>
        <span className="edu-concept-chevron">{isOpen ? "▲" : "▼"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="edu-concept-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{concept.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};



const Education = ({ theme, toggleTheme, showMap, setShowMap, requestOpenMap, selectedPlt, setSelectedPlt }) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("intro");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [tabsRef, tabsVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const isDark = theme === "dark";

  const cData = eduTexts[language];
  const tabs = cData.tabs;

  return (
    <section id="edu" className={`section edu-section ${isDark ? "section--dark" : ""}`}>
      <div className="section-inner section-inner--col">
        <div ref={headerRef} className={`section-header scroll-animate scroll-fade-up ${headerVisible ? "is-visible" : ""}`}>
          <div className="section-badge">{cData.badge}</div>
          <h2 className="section-title section-title--center">
            {cData.title}<span className="text-accent">{cData.titleHighlight}</span>{cData.titleEnd}
          </h2>
          <p className="section-desc section-desc--center">
            {cData.desc}
          </p>
        </div>
        <div ref={tabsRef} className={`edu-tabs-container scroll-animate scroll-fade-up delay-200 ${tabsVisible ? "is-visible" : ""}`}>
          <div className="edu-tabs desktop-only">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`edu-tab-btn ${activeTab === tab.id ? "edu-tab-btn--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="edu-mobile-dropdown mobile-only">
            <button className="edu-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              {tabs.find(t => t.id === activeTab)?.label}
              <span className="edu-dropdown-icon">{dropdownOpen ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul 
                  className={`edu-dropdown-menu ${isDark ? "edu-dropdown-menu--dark" : ""}`}
                  initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                  transition={{ duration: 0.2 }}
                  style={{ transformOrigin: "top" }}
                >
                  {tabs.map(tab => (
                    <li 
                      key={tab.id} 
                      className={`edu-dropdown-item ${activeTab === tab.id ? "active" : ""}`}
                      onClick={() => { setActiveTab(tab.id); setDropdownOpen(false); }}
                    >
                      {tab.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── TAB: Dasar EBT — Flip Cards & Accordion ── */}
        {activeTab === "intro" && (
          <motion.div key="intro" className="ebt-intro-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80 }}>
            <div className="ebt-flip-grid desktop-only">
              {cData.concepts.map(c => (
                <EbtStaticCard key={c.id} concept={c} isDark={isDark} />
              ))}
            </div>
            <div className="edu-concepts mobile-only">
              {cData.concepts.map(c => (
                <EbtAccordionCard key={c.id} concept={c} isDark={isDark} />
              ))}
            </div>
          </motion.div>
        )}

        {/* ── TAB: PLT Indonesia ── */}
        {activeTab === "indonesia" && (
          <motion.div key="indonesia" className="edu-plt-hc-grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80 }}>
            {pltIndonesia.map((plt, i) => <PltHoverCard key={plt.no} plt={plt} index={i} onClickDetail={setSelectedPlt} lang={language} textObj={cData} />)}
          </motion.div>
        )}

        {/* ── TAB: PLT Luar Negeri ── */}
        {activeTab === "abroad" && (
          <motion.div key="abroad" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80 }}>
            <p className="edu-abroad-subtitle">
              {cData.abroadSub1} <strong>{cData.abroadSub2}</strong>{cData.abroadSub3}
            </p>
            <div className="edu-plt-hc-grid edu-plt-hc-grid--abroad">
              {pltLuarNegeri.map((plt, i) => <PltHoverCard key={plt.no} plt={plt} index={i} onClickDetail={setSelectedPlt} lang={language} textObj={cData} />)}
            </div>
          </motion.div>
        )}

        {/* ── PLT Detail Overlay ── */}
        <AnimatePresence>
          {selectedPlt && pltDetailsData[selectedPlt] && (
            <PltDetail
              pltType={selectedPlt}
              isDark={isDark} 
              onClose={() => setSelectedPlt(null)} 
              onOpenMap={requestOpenMap}
              toggleTheme={toggleTheme}
            />
          )}
        </AnimatePresence>

        {/* ── Lokasi EBT Overlay ── */}
        <AnimatePresence>
          {showMap && (
            <LokasiEbt 
              theme={theme}
              onClose={() => setShowMap(false)} 
              toggleTheme={toggleTheme}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Education;
