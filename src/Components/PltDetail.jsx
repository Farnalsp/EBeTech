import React, { useRef, useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, ArrowUp, Search, BookOpen, X, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";
import LocationMapModal from "./LocationMapModal";
import "../styles/PltDetail.css";
import { pltDetailsData } from "../data/pltDetailsData";
import { useLanguage } from "../context/LanguageContext";

const HERO_IMAGES = {
  PLTA: "https://www.anakteknik.co.id/property/8584/articles/2418/plta.jpg",
  PLTS: "https://infobanknews.com/wp-content/uploads/2025/10/PLTS.jpg",
  PLTB: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hrc46pvb6n2kvdcb7bvw0g6b.jpg",
  PLTP: "https://zonaebt.com/wp-content/uploads/PLTP.jpeg",
  PLTBM: "https://awsimages.detik.net.id/community/media/visual/2023/11/23/potret-pembangunan-pltbm-di-bangka-belitung_169.jpeg?w=700&q=90",
  PLTBG: "https://cdn1-production-images-kly.akamaized.net/Gn_dad9qlmCOOltMQtdWdC2D3u8=/1x86:1000x649/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3342150/original/002326700_1609945483-shutterstock_666196489.jpg",
  PLTSA: "https://asset.kompas.com/crops/3UEy5Jb1_CWfIiuBhNouzLvkPZg=/292x22:1025x511/1200x800/data/photo/2022/06/28/62bad82ea2a25.jpg",
  PLTAL: "https://tse2.mm.bing.net/th/id/OIP.ciqwhdtcdQaSy9FznNKzBQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  "PLT Pasang Surut": "https://assets.newatlas.com/dims4/default/72db56e/2147483647/strip/true/crop/1458x820+0+0/resize/1920x1080!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F99%2F99%2Feb6c40064bfb88e8112d0c864599%2Fmersey-tidal-barrage-image-1.png",
  "PLT CSP": "https://www.brunel.net/_next/image?url=https:%2F%2Fedge.sitecorecloud.io%2Fbrunelinterddf0-bruneldigit4055-production-3558%2Fmedia%2FBrunel-img%2FGlobal%2FBlogs%2Fcsp-header.jpg%3Fh%3D540%26iar%3D0%26w%3D900&w=3840&q=75",
  "PLT Osmosis": "https://eepower.com/uploads/articles/The_Statkraft_blue_energy_plant_in_Norway.jpg",
  "PLT EGS": "https://www.edengeothermal.com/wp-content/uploads/2019/09/eden-1746784-Penstones.jpg"
};

const PltDetail = ({ pltType, onClose, onOpenMap, isDark, toggleTheme }) => {
  const { language } = useLanguage();
  const scrollRef = useRef(null);
  const [showFab, setShowFab] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showKamus, setShowKamus] = useState(false);
  const [selectedMapLoc, setSelectedMapLoc] = useState(null);
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const tableRef = useRef(null);

  const rawData = pltDetailsData[pltType];
  const data = rawData ? rawData[language] : null;

  if (!data) return null;

  const getThemeColor = () => {
    switch ((pltType || '').toLowerCase()) {
      case 'plta': return { p: '#0ea5e9', s: '#3b82f6', hex: '#0ea5e9' };
      case 'plts': return { p: '#f59e0b', s: '#d97706', hex: '#f59e0b' };
      case 'pltb': return { p: '#76A557', s: '#5f8c44', hex: '#76A557' };
      case 'pltp': return { p: '#ef4444', s: '#dc2626', hex: '#ef4444' };
      case 'pltbm': return { p: '#84cc16', s: '#65a30d', hex: '#84cc16' };
      case 'pltbg': return { p: '#22c55e', s: '#16a34a', hex: '#22c55e' };
      case 'pltsa': return { p: '#f97316', s: '#ea580c', hex: '#f97316' };
      case 'pltal': return { p: '#0ea5e9', s: '#3b82f6', hex: '#0ea5e9' };
      case 'plt pasang surut': return { p: '#06b6d4', s: '#0891b2', hex: '#06b6d4' };
      case 'plt csp': return { p: '#f59e0b', s: '#d97706', hex: '#f59e0b' };
      case 'plt osmosis': return { p: '#3b82f6', s: '#2563eb', hex: '#3b82f6' };
      case 'plt egs': return { p: '#ef4444', s: '#dc2626', hex: '#ef4444' };
      default: return { p: '#0ea5e9', s: '#3b82f6', hex: '#0ea5e9' };
    }
  };
  const themeColors = getThemeColor();
  const isEgs = (pltType || '').toLowerCase() === 'plt egs';
  const imgArray = Array.isArray(data.caraKerja?.img) && isEgs ? data.caraKerja.img : [];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (imgArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % imgArray.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [imgArray.length]);

  const nextImg = () => setCurrentImageIdx((prev) => (prev + 1) % imgArray.length);
  const prevImg = () => setCurrentImageIdx((prev) => (prev - 1 + imgArray.length) % imgArray.length);

  const filteredLocs = useMemo(() => {
    if (!data.locations) return [];
    if (!searchQuery) return data.locations;
    const lowerQ = searchQuery.toLowerCase();
    return data.locations.filter(l => {
      const name = (l.name || '').toLowerCase();
      const prov = (l.prov || '').toLowerCase();
      const kapas = (String(l.kapasitas) || '').toLowerCase();
      const status = (l.status || '').toLowerCase();
      return name.includes(lowerQ) || prov.includes(lowerQ) || kapas.includes(lowerQ) || status.includes(lowerQ);
    });
  }, [data.locations, searchQuery]);

  const handleScrollToLokasi = (loc) => {
    if (window.innerWidth <= 768) {
      setShowMobileWarning(true);
      return;
    }
    if (loc && loc.lat && loc.lng) {
      setSelectedMapLoc(loc);
    } else if (onOpenMap) {
      setTimeout(() => { onOpenMap(); }, 50);
    }
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop > 400) {
      setShowFab(true);
    } else {
      setShowFab(false);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className={`plt-detail-overlay ${isDark ? "plt-detail-overlay--dark" : ""}`}
      style={{
        '--theme-p': themeColors.p,
        '--theme-s': themeColors.s,
        '--theme-hex': themeColors.hex
      }}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="plt-global-bg" />
      <div className="plt-global-overlay" />

      <div className="plt-scroll-container" ref={scrollRef} onScroll={handleScroll}>

        <div className="plt-detail-nav">
          <button className="plt-btn-back" onClick={onClose}>
            <ArrowLeft size={20} />
            <span>{language === 'id' ? 'Kembali' : 'Back'}</span>
          </button>

          <div className="plt-nav-actions">
            <div className="plt-search-box">
              <div className="plt-search-input-wrapper">
                <Search size={16} className="search-icon" style={{ color: "var(--theme-hex)" }} />
                <input
                  type="text"
                  className="plt-search-input"
                  style={{ borderColor: searchQuery ? "var(--theme-hex)" : undefined }}
                  placeholder={language === 'id' ? 'Cari nama, kapasitas, status...' : 'Search name, capacity, status...'}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                />
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      className="plt-search-clear"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => {
                        setSearchQuery('');
                        setIsDropdownOpen(false);
                      }}
                    >
                      <X size={13} strokeWidth={3} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {searchQuery && isDropdownOpen && (
                  <motion.div
                    className="plt-search-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {filteredLocs.length > 0 ? (
                      filteredLocs.slice(0, 5).map((loc, idx) => (
                        <div
                          key={idx}
                          className="plt-search-item"
                          onClick={() => {
                            setSearchQuery(loc.name);
                            setIsDropdownOpen(false);
                            tableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                        >
                          <div className="plt-search-item-title">{loc.name}</div>
                          <div className="plt-search-item-sub">
                            {loc.prov} • {loc.kapasitas} • {(loc.status || '').replace('Beroperasi Aktif', 'Aktif')}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="plt-search-item-empty">
                        {language === 'id' ? 'Pembangkit tidak ditemukan' : 'No power plants found'}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="plt-btn-kamus"
              onClick={() => setShowKamus(true)}
              style={{ background: `linear-gradient(135deg, ${themeColors.p} 0%, ${themeColors.s} 100%)`, zIndex: 10 }}
            >
              <BookOpen size={16} />
              <span>{language === 'id' ? 'Kamus' : 'Glossary'}</span>
            </button>
          </div>
        </div>

        <section className="plt-hero">
          <div className="plt-hero-bg" style={{ backgroundImage: `url(${HERO_IMAGES[pltType] || data.caraKerja.img})` }} />
          <div className="plt-hero-overlay" />
          <div className="plt-hero-content">
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: "var(--theme-p, #0ea5e9)" }}>
              {data.heroTitle}
            </motion.h1>
            <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              {data.heroDesc}
            </motion.p>
          </div>
        </section>

        <main className="plt-content-wrapper section-inner">
          <div className="plt-text-block highlight-block">
            <h3>{language === 'id' ? 'Definisi' : 'Definition of'} {data.title}</h3>
            <p className="lead-text">{data.definition}</p>
          </div>

          {isEgs && Array.isArray(data.caraKerja.img) && data.caraKerja.img.length === 4 ? (
            <div className="plt-egs-full-width">
              <div className="plt-text-block" style={{ marginBottom: '3rem' }}>
                <h3>{language === 'id' ? 'Cara Kerjanya' : 'How it Works'}</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>{data.caraKerja.text}</p>
              </div>

              <div className="plt-egs-interleaved" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>{data.caraKerja.extended[0]}</p>
                  <img src={data.caraKerja.img[0]} alt="Skema Kedalaman EGS" loading="lazy" className="no-dark-filter" style={{ borderRadius: '12px', width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                </div>
                <div>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>{data.caraKerja.extended[1]}</p>
                  <img src={data.caraKerja.img[1]} alt="Anatomi Geotermal" loading="lazy" className="no-dark-filter" style={{ borderRadius: '12px', width: '100%', maxWidth: '600px', display: 'block', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                </div>
                <div style={{ backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))', padding: '2rem', borderRadius: '16px' }}>
                  <div style={{ borderLeft: '4px solid #ef4444', paddingLeft: '1.2rem', marginBottom: '2rem' }}>
                    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>{data.caraKerja.extended[2]}</p>
                    <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.7' }}>{data.caraKerja.extended[3]}</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '1.5rem' }}>
                    <img src={data.caraKerja.img[2]} alt="EGS Fracturing" loading="lazy" className="no-dark-filter" style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                    <img src={data.caraKerja.img[3]} alt="Closed-Loop Geothermal" loading="lazy" className="no-dark-filter" style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="plt-two-col">
              <div className="plt-text-block">
                <h3>{language === 'id' ? 'Cara Kerjanya' : 'How it Works'}</h3>
                <p>{data.caraKerja.text}</p>
                <ul className="plt-detailed-list no-bullets">
                  {(data.caraKerja.extended || data.caraKerja.steps || []).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="plt-image-block">
                {Array.isArray(data.caraKerja.img) ? (
                  <div className="plt-multi-img-grid">
                    {data.caraKerja.img.map((url, i) => (
                      <img key={i} src={url} alt={`Cara Kerja ${data.title} ${i + 1}`} loading="lazy" className="no-dark-filter" style={{ borderRadius: '12px', width: '100%', display: 'block', marginBottom: '1rem' }} />
                    ))}
                  </div>
                ) : (
                  <img src={data.caraKerja.img} alt={`Cara Kerja ${data.title}`} loading="lazy" style={{ borderRadius: '12px', width: '100%', display: 'block' }} />
                )}
                <span className="image-caption">{language === 'id' ? 'Ilustrasi Skema' : 'Scheme Illustration of'} {data.title}</span>
              </div>
            </div>
          )}

          {data.windTurbine && (
            <div className="plt-wind-turbine-block" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#0ea5e9', marginBottom: '1.5rem', textAlign: 'center' }}>
                {language === 'id' ? 'Anatomi Detail Wind Turbine' : 'Wind Turbine Anatomy Details'}
              </h3>
              <div style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'minmax(0, 1fr)' }}>
                <img src={data.windTurbine.img} alt="Wind Turbine Diagram" loading="lazy" style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'block' }} />
                <div className="wind-turbine-sections" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {data.windTurbine.sections.map((sec, i) => (
                    <div key={i} className="wind-section highlight-block" style={{ padding: '2rem' }}>
                      <h4 style={{ fontSize: '1.3rem', color: 'var(--theme-p, #0ea5e9)', marginBottom: '1rem' }}>{sec.title}</h4>
                      <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', margin: 0, color: 'inherit', fontSize: '1.05rem' }}>{sec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="plt-grid-2">
            {data.pros && data.pros.length > 0 && (
              <div className="plt-card card-pros">
                <h3>{language === 'id' ? 'Kelebihan' : 'Advantages'}</h3>
                <ul>{data.pros.map((pro, i) => <li key={i}>{pro}</li>)}</ul>
              </div>
            )}
            {data.cons && data.cons.length > 0 && (
              <div className="plt-card card-cons">
                <h3>{language === 'id' ? 'Kekurangan' : 'Disadvantages'}</h3>
                <ul>{data.cons.map((con, i) => <li key={i}>{con}</li>)}</ul>
              </div>
            )}
          </div>

          <div className="plt-grid-2">
            {data.benefits && data.benefits.length > 0 && (
              <div className="plt-card card-benefits">
                <h3>{language === 'id' ? 'Manfaat' : 'Benefits'}</h3>
                <ul>{data.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
              </div>
            )}
            {data.impacts && data.impacts.length > 0 && (
              <div className="plt-card card-impacts">
                <h3>{language === 'id' ? 'Dampaknya' : 'Impacts'}</h3>
                <ul>{data.impacts.map((imp, i) => <li key={i}>{imp}</li>)}</ul>
              </div>
            )}
          </div>

          {data.locations && data.locations.length > 0 && (
            <div className="plt-locations-wrap" ref={tableRef} style={{ scrollMarginTop: '80px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                <h3 style={{ margin: 0 }}>{language === 'id' ? 'Daftar Lokasi' : 'Location List'}</h3>
              </div>
              <div className="plt-table-container">
                <table className="plt-table">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>{language === 'id' ? (data.title.startsWith('PLTAL') ? 'Lokasi Proyek' : 'Nama') : (data.title.startsWith('PLTAL') ? 'Project Location' : 'Name')}</th>
                      {(data.title.startsWith('PLTP') || data.title.startsWith('PLTBm')) ? (
                        <>
                          <th>{language === 'id' ? (data.title.startsWith('PLTBm') ? 'Bahan Bakar Utama' : 'Pengelola Utama') : (data.title.startsWith('PLTBm') ? 'Main Fuel' : 'Main Operator')}</th>
                          <th>Status</th>
                          <th>{language === 'id' ? 'Lokasi' : 'Location'}</th>
                        </>
                      ) : data.title.startsWith('PLTAL') ? (
                        <th>{language === 'id' ? 'Status & Keterangan' : 'Status & Notes'}</th>
                      ) : (
                        <>
                          <th>{language === 'id' ? 'Lokasi' : 'Location'}</th>
                          <th>{language === 'id' ? 'Kapasitas' : 'Capacity'}</th>
                          <th>Status</th>
                        </>
                      )}
                      <th>{language === 'id' ? 'Koordinat' : 'Coordinates'}</th>
                      {!data.title.startsWith('PLTAL') && <th>{language === 'id' ? 'Aksi' : 'Action'}</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLocs.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-200)' }}>
                          {language === 'id' ? 'Data tidak ditemukan.' : 'No data found.'}
                        </td>
                      </tr>
                    ) : filteredLocs.map((loc, idx) => {
                      let status = loc.status;
                      if (!status) {
                        const combined = (loc.name + loc.cap + loc.prov).toLowerCase();
                        if (combined.includes('konstruksi') || combined.includes('pengembangan') || combined.includes('rencana') || combined.includes('tahap ekspansi')) {
                          status = 'Tahap Pembangunan';
                        } else if (combined.includes('eksplorasi') || combined.includes('riset') || combined.includes('studi') || combined.includes('pilot')) {
                          status = 'Riset / Pilot';
                        } else if (combined.includes('evaluasi') || combined.includes('rencana ulang') || combined.includes('belum tersedia')) {
                          status = 'Belum Tersedia / Evaluasi';
                        } else {
                          status = 'Beroperasi Aktif';
                        }
                      }

                      let statusClass = "status-aktif";
                      if (status.includes("Pembangunan") || status === "Tahap Ekspansi") statusClass = "status-pembangunan";
                      if (status.includes("Riset") || status.includes("Pilot")) statusClass = "status-riset";
                      if (status.includes("Evaluasi") || status.includes("Belum")) statusClass = "status-evaluasi";

                      let displayStatus = (status || '').replace('Beroperasi Aktif', 'Aktif');
                      if (language === 'en') {
                        if (status === 'Tahap Pembangunan') displayStatus = 'Under Construction';
                        else if (status === 'Riset / Pilot') displayStatus = 'Research / Pilot';
                        else if (status === 'Belum Tersedia / Evaluasi') displayStatus = 'Unavailable / Evaluation';
                        else if (status === 'Beroperasi Aktif' || status === 'Aktif') displayStatus = 'Active';
                      }

                      return (
                        <tr key={idx}>
                          <td data-label="No"><span className="td-val">{idx + 1}</span></td>
                          <td data-label={language === 'id' ? (data.title.startsWith('PLTAL') ? 'Lokasi Proyek' : 'Nama') : (data.title.startsWith('PLTAL') ? 'Project Location' : 'Name')} style={{ fontWeight: 600 }}><span className="td-val">{loc.name}</span></td>
                          {(data.title.startsWith('PLTP') || data.title.startsWith('PLTBm')) ? (
                            <>
                              <td data-label={language === 'id' ? (data.title.startsWith('PLTBm') ? 'Bahan Bakar Utama' : 'Pengelola Utama') : (data.title.startsWith('PLTBm') ? 'Main Fuel' : 'Main Operator')}><span className="td-val">{loc.cap}</span></td>
                              <td data-label="Status"><span className="td-val">{displayStatus}</span></td>
                              <td data-label={language === 'id' ? 'Lokasi' : 'Location'}><span className="td-val">{loc.prov}</span></td>
                            </>
                          ) : data.title.startsWith('PLTAL') ? (
                            <td data-label={language === 'id' ? 'Status & Keterangan' : 'Status & Notes'}><span className="td-val">{loc.prov}</span></td>
                          ) : (
                            <>
                              <td data-label={language === 'id' ? 'Lokasi' : 'Location'}><span className="td-val">{loc.prov}</span></td>
                              <td data-label={language === 'id' ? 'Kapasitas' : 'Capacity'}><span className="td-val">{loc.cap}</span></td>
                              <td data-label="Status"><span className="td-val">{displayStatus}</span></td>
                            </>
                          )}
                          <td data-label="Koordinat" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                            <span className="td-val">{loc.lat && loc.lng ? `${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}` : '-'}</span>
                          </td>
                          {!data.title.startsWith('PLTAL') && (
                            <td data-label={language === 'id' ? 'Aksi' : 'Action'}>
                              {loc.lat && loc.lng ? (
                                <button className="plt-lokasi-btn" onClick={() => handleScrollToLokasi(loc)}>
                                  <MapPin size={16} /> <span>{language === 'id' ? 'Lihat Peta' : 'View Map'}</span>
                                </button>
                              ) : (
                                <span className="no-coord-text">-</span>
                              )}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>

        <div className="plt-footer-wrap">
          <Footer />
        </div>

      </div>

      <AnimatePresence>
        {showFab && (
          <motion.button
            className="plt-fab-up"
            initial={{ opacity: 0, scale: 0, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 50 }}
            onClick={scrollToTop}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Kamus Modal / Glossary Overlay ── */}
      <AnimatePresence>
        {showKamus && data.glossary && (
          <motion.div
            className="tl-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowKamus(false)}
            style={{ zIndex: 99999 }}
          >
            <motion.div
              className={`tl-modal-content ${isDark ? 'dark' : ''}`}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: '80vh', overflowY: 'auto', background: isDark ? '#0f172a' : '#ffffff', border: `1px solid ${themeColors.p}` }}
            >
              <button className="tl-modal-close" onClick={() => setShowKamus(false)} style={{ color: isDark ? '#e2e8f0' : '#475569' }}>
                <X size={24} />
              </button>

              <div className="tl-modal-header" style={{ marginBottom: '1.5rem', borderBottom: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`, paddingBottom: '1rem' }}>
                <div className="tl-modal-badge" style={{ display: 'inline-block', background: `linear-gradient(135deg, ${themeColors.p} 0%, ${themeColors.s} 100%)`, color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {language === 'id' ? 'Kamus Khusus' : 'Specific Glossary'}
                </div>
                <h3 className="tl-modal-title" style={{ fontSize: '1.5rem', color: isDark ? '#f8fafc' : '#0f172a' }}>
                  {language === 'id' ? `Istilah ${data.title}` : `${data.title} Terms`}
                </h3>
              </div>

              <div className="tl-modal-body" style={{ color: isDark ? '#cbd5e1' : '#475569', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.glossary.map((gloss, idx) => (
                  <div key={idx} style={{ background: isDark ? '#1e293b' : '#f8fafc', padding: '1rem', borderRadius: '8px', borderLeft: `4px solid ${themeColors.hex}` }}>
                    <h4 style={{ margin: '0 0 0.25rem 0', color: isDark ? '#f8fafc' : '#0f172a', fontSize: '1.1rem' }}>{gloss.term}</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>{gloss.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Warning Modal ── */}
      <AnimatePresence>
        {showMobileWarning && (
          <motion.div 
            className="mobile-alert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 999999 }}
          >
            <motion.div 
              className={`mobile-alert-box ${isDark ? 'dark' : ''}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="alert-icon">⚠️</div>
              <h3>Pemberitahuan</h3>
              <p>Fitur ini akan membuka lokasi dimana anda harus mengaktifkan tampilan dekstop atau disarankan menggunakan dekstop langsung</p>
              <button className="alert-btn" onClick={() => setShowMobileWarning(false)}>Oke, Mengerti</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {selectedMapLoc && (
        <LocationMapModal
          location={selectedMapLoc}
          onClose={() => setSelectedMapLoc(null)}
          isDark={isDark}
          themeColor={themeColors.p}
          pltType={pltType}
        />
      )}

      {/* ── Zoomed Image Modal ── */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className="mobile-alert-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 9999999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.85)', padding: '2rem' }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: 'relative', width: 'auto', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <button 
                onClick={() => setZoomedImage(null)} 
                style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: 40, height: 40, zIndex: 10 }}
              >
                <X size={20} />
              </button>
              <img 
                src={zoomedImage} 
                alt="Zoomed" 
                style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', background: '#fff' }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default PltDetail;
