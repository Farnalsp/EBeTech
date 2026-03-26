import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Sections.css";
import "../styles/Timeline.css";
import { useLanguage } from "../context/LanguageContext";

const historyData = {
  id: [
    {
      id: 1,
      year: "Era Kolonial – 1960",
      title: "Fondasi Hidroelektrik Pertama",
      event: "Pembangunan PLTA Skala Kecil.",
      detail: "Jauh sebelum isu perubahan iklim muncul, Indonesia sebenarnya sudah menggunakan energi air. Pemerintah kolonial Belanda membangun banyak bendungan kecil di Jawa dan Sumatera untuk menggerakkan mesin-mesin di perkebunan teh dan kina, serta untuk operasional tambang. Ini adalah bukti bahwa topografi Indonesia sangat mendukung energi hidro sejak dulu."
    },
    {
      id: 2,
      year: "Tahun 1970 – 1982",
      title: "Kelahiran Panas Bumi (Geothermal)",
      event: "Peresmian PLTP Kamojang (1982).",
      detail: "Setelah krisis minyak dunia, Indonesia mulai serius melirik \"harta karun\" di bawah gunung berapi. Setelah eksplorasi panjang sejak tahun 70-an, PLTP Kamojang Unit 1 di Jawa Barat akhirnya beroperasi. Ini menandai Indonesia sebagai salah satu pemain utama panas bumi dunia karena kita memiliki 40% cadangan geothermal global."
    },
    {
      id: 3,
      year: "Tahun 1990 – 2004",
      title: "Era Mikrohidro & Bioenergi Pedesaan",
      event: "Ekspansi Energi untuk Pelosok.",
      detail: "Fokus bergeser ke pemerataan listrik. Pemerintah mulai mengembangkan Pembangkit Listrik Tenaga Mikrohidro (PLTMH) dan biogas untuk desa-desa terpencil. Pada fase ini, EBT bukan sekadar gaya hidup, tapi solusi utama agar masyarakat di pelosok yang tidak terjangkau kabel PLN tetap bisa menikmati lampu di malam hari."
    },
    {
      id: 4,
      year: "Tahun 2014",
      title: "Kebijakan Energi Nasional (KEN)",
      event: "Target Ambisius 23% EBT.",
      detail: "Ini adalah titik balik regulasi paling krusial. Melalui Peraturan Pemerintah No. 79, Indonesia secara resmi berkomitmen untuk mengubah struktur energinya. Targetnya jelas: pada tahun 2025, minimal 23% energi Indonesia harus berasal dari sumber terbarukan. Ini membuat investor luar negeri mulai berani menanamkan modal di sektor hijau kita."
    },
    {
      id: 5,
      year: "Tahun 2018",
      title: "Kebangkitan Tenaga Angin",
      event: "Peresmian PLTB Sidrap (75 MW).",
      detail: "Indonesia membuktikan bahwa angin di khatulistiwa bisa dipanen. PLTB Sidrap di Sulawesi Selatan menjadi kebun angin skala besar pertama dengan puluhan turbin raksasa. Hal ini memicu proyek serupa di Jeneponto dan wilayah pesisir lainnya, membuktikan bahwa teknologi kincir angin sangat layak di tanah air."
    },
    {
      id: 6,
      year: "Tahun 2020 – 2023",
      title: "Inovasi Solar Terapung & Digitalisasi",
      event: "PLTS Terapung Cirata (2023).",
      detail: "Karena keterbatasan lahan di darat, Indonesia memanfaatkan permukaan waduk. PLTS Terapung Cirata menjadi salah satu yang terbesar di dunia. Di fase ini, teknologi digital mulai masuk untuk mengatur distribusi listrik agar lebih efisien, serta dimulainya pembangunan pabrik baterai untuk mendukung tren kendaraan listrik (EV)."
    },
    {
      id: 7,
      year: "Tahun 2024 – 2060",
      title: "Menuju Net Zero Emission (NZE)",
      event: "Akselerasi Transisi Energi Berkelanjutan.",
      detail: "Sekarang, Indonesia sedang berada dalam jalur \"pensiun dini\" bagi PLTU Batubara secara bertahap. Fokusnya adalah menciptakan ekosistem hijau yang lengkap, mulai dari transportasi listrik hingga industri rendah karbon, demi mencapai target nol emisi karbon pada tahun 2060 atau lebih cepat."
    }
  ],
  en: [
    {
      id: 1,
      year: "Colonial Era – 1960",
      title: "First Hydroelectric Foundation",
      event: "Small-Scale Hydropower Construction.",
      detail: "Long before climate change became a global issue, Indonesia had actually been harnessing hydro energy. The Dutch colonial government built many small dams in Java and Sumatra to power machinery in tea and quinine plantations, as well as for mining operations. This proves that Indonesia's topography has long supported hydro energy."
    },
    {
      id: 2,
      year: "Year 1970 – 1982",
      title: "Birth of Geothermal",
      event: "Inauguration of Kamojang Geothermal Plant (1982).",
      detail: "Following the global oil crisis, Indonesia began to seriously eye the \"treasure\" beneath its volcanoes. After extensive exploration since the 70s, Kamojang Unit 1 in West Java finally commenced operations. This marked Indonesia as a major global geothermal player, holding 40% of the world's geothermal reserves."
    },
    {
      id: 3,
      year: "Year 1990 – 2004",
      title: "Microhydro & Rural Bioenergy Era",
      event: "Energy Expansion for Remote Areas.",
      detail: "The focus shifted to energy equity. The government began developing Microhydro Power Plants (PLTMH) and biogas for remote villages. During this phase, renewable energy wasn't just a lifestyle choice, but a primary solution to ensure off-grid communities could still enjoy lighting at night."
    },
    {
      id: 4,
      year: "Year 2014",
      title: "National Energy Policy (KEN)",
      event: "Ambitious 23% Renewable Target.",
      detail: "This was the most crucial regulatory turning point. Through Government Regulation No. 79, Indonesia officially committed to restructuring its energy mix. The target was clear: by 2025, at least 23% of Indonesia's energy must come from renewable sources. This encouraged foreign investors to boldly fund our green sector."
    },
    {
      id: 5,
      year: "Year 2018",
      title: "Rise of Wind Power",
      event: "Inauguration of Sidrap Wind Farm (75 MW).",
      detail: "Indonesia proved that equatorial winds could be harvested. The Sidrap Wind Farm in South Sulawesi became the first large-scale wind farm featuring dozens of giant turbines. This sparked similar mega-projects in Jeneponto and other coastal areas, demonstrating the viability of wind technology nationwide."
    },
    {
      id: 6,
      year: "Year 2020 – 2023",
      title: "Floating Solar & Digital Innovation",
      event: "Cirata Floating Solar Plant (2023).",
      detail: "Due to limited land space, Indonesia utilized reservoir surfaces. The Cirata Floating Solar Plant became one of the largest in the world. In this phase, digital technology was introduced to regulate electricity distribution efficiently, alongside the construction of battery factories to support the electric vehicle (EV) trend."
    },
    {
      id: 7,
      year: "Year 2024 – 2060",
      title: "Towards Net Zero Emission (NZE)",
      event: "Accelerating Sustainable Energy Transition.",
      detail: "Currently, Indonesia is on a gradual \"early retirement\" path for coal power plants. The focus is on creating a complete green ecosystem, from electric transportation to low-carbon industries, aiming to achieve the net zero carbon emission target by 2060 or sooner."
    }
  ]
};

const timelineText = {
  id: {
    badge: "Perjalanan EBT",
    title: "Timeline Perjalanan Energi Baru Terbarukan",
    desc: "Ikuti jejak transformasi energi Indonesia dari masa lampau hingga visi Net Zero Emission di masa depan.",
    modalBadge: "Peristiwa Momen"
  },
  en: {
    badge: "RE Journey",
    title: "Renewable Energy Journey Timeline",
    desc: "Follow the footsteps of Indonesia's energy transformation from the past to the vision of Net Zero Emission in the future.",
    modalBadge: "Moment Event"
  }
};
const desktopPoints = [
  { id: 1, cx: 50, cy: 280, labelPos: 'bottom' },
  { id: 2, cx: 200, cy: 150, labelPos: 'top' },
  { id: 3, cx: 350, cy: 280, labelPos: 'bottom' },
  { id: 4, cx: 500, cy: 150, labelPos: 'top' },
  { id: 5, cx: 650, cy: 280, labelPos: 'bottom' },
  { id: 6, cx: 800, cy: 150, labelPos: 'top' },
  { id: 7, cx: 950, cy: 280, labelPos: 'bottom' }
];

const Timeline = ({ theme }) => {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState(1);
  const [showModal, setShowModal] = useState(false);
  
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const isDark = theme === "dark";

  const history = historyData[language];
  const tText = timelineText[language];

  const activeItem = history.find((h) => h.id === activeId);
  const activePoint = desktopPoints.find(p => p.id === activeId);

  const handleNodeClick = (id) => {
    setActiveId(id);
    setShowModal(true);
  };

  return (
    <section id="timeline" className={`section timeline-section ${isDark ? "section--dark" : ""}`}>
      <div className="section-inner section-inner--col">
        <div ref={headerRef} className={`section-header scroll-animate scroll-fade-up ${headerVisible ? "is-visible" : ""}`}>
          <div className="section-badge">{tText.badge}</div>
          <h2 className="section-title section-title--center">
            {tText.title}
          </h2>
          <p className="section-desc section-desc--center">
            {tText.desc}
          </p>
        </div>
        <div className="tl-desktop-wrapper">
          <svg className="tl-svg-path" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <defs>
              <clipPath id="timeline-clip-desktop">
                <motion.rect
                  x="0" y="0" height="430"
                  initial={false}
                  animate={{ width: activePoint.cx }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              </clipPath>
            </defs>
            <path
              d="M 50 280 C 125 280 125 150 200 150 C 275 150 275 280 350 280 C 425 280 425 150 500 150 C 575 150 575 280 650 280 C 725 280 725 150 800 150 C 875 150 875 280 950 280"
              className="tl-path-line"
            />
            <path
              d="M 50 280 C 125 280 125 150 200 150 C 275 150 275 280 350 280 C 425 280 425 150 500 150 C 575 150 575 280 650 280 C 725 280 725 150 800 150 C 875 150 875 280 950 280"
              className="tl-path-line-active"
              clipPath="url(#timeline-clip-desktop)"
            />
          </svg>
          {desktopPoints.map((pt, i) => {
            const hist = history[i];
            const isCompletedOrActive = pt.id <= activeId;

            return (
              <div
                key={pt.id}
                className={`tl-node-wrapper ${isCompletedOrActive ? "tl-node-active" : ""}`}
                style={{ left: `${(pt.cx / 1000) * 100}%`, top: `${(pt.cy / 400) * 100}%` }}
              >
                <button
                  className="tl-node-circle"
                  onClick={() => handleNodeClick(pt.id)}
                  aria-label={`Lihat detail sejarah ${hist.year}`}
                >
                  {pt.id}
                </button>
                <div className={`tl-node-label tl-node-label-${pt.labelPos}`}>
                  <span className="tl-node-year">{hist.year}</span>
                  <span className="tl-node-title">{hist.title}</span>
                </div>
              </div>
            );
          })}
          <motion.div
            className="tl-car"
            initial={false}
            animate={{
              left: `${(activePoint.cx / 1000) * 100}%`,
              top: `${(activePoint.cy / 400) * 100}%`
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <div className="tl-car-icon">
              <Car size={24} />
            </div>
          </motion.div>
        </div>
        <div className="tl-mobile-wrapper">
          <div className="tl-mobile-nodes-container">
            <div className="tl-mobile-line-bg" />
            <motion.div
              className="tl-mobile-line-active"
              initial={false}
              animate={{ height: `${((activeId - 1) / 6) * 100}%` }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            />

            <motion.div
              className="tl-mobile-car"
              initial={false}
              animate={{ top: `${((activeId - 1) / 6) * 100}%` }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
            >
              <div className="tl-car-icon tl-car-icon-sm">
                <Car size={16} />
              </div>
            </motion.div>

            {history.map((hist, index) => {
              const isCompletedOrActive = hist.id <= activeId;
              return (
                <div key={hist.id} className="tl-mobile-node-row" style={{ top: `${(index / 6) * 100}%` }}>
                  <div className="tl-mobile-node-left">
                    <button
                      className={`tl-node-circle tl-mobile-circle ${isCompletedOrActive ? "tl-node-active-mobile" : ""}`}
                      onClick={() => handleNodeClick(hist.id)}
                    >
                      {hist.id}
                    </button>
                  </div>
                  <div className="tl-mobile-node-right" onClick={() => handleNodeClick(hist.id)}>
                    <div className="tl-node-year">{hist.year}</div>
                    <div className="tl-node-title">{hist.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="tl-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="tl-modal-content"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="tl-modal-close" onClick={() => setShowModal(false)}>
                <X size={24} />
              </button>

              <div className="tl-modal-header">
                <div className="tl-modal-badge">{tText.modalBadge} {activeItem.id}</div>
                <h3 className="tl-modal-title">{activeItem.title}</h3>
                <div className="tl-modal-subtitle">
                  <strong>{activeItem.year}</strong> — {activeItem.event}
                </div>
              </div>

              <div className="tl-modal-body">
                <p>{activeItem.detail}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;
