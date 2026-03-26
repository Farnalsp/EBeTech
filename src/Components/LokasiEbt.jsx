import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, Sun, Moon, Globe } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Footer from './Footer';
import '../styles/LokasiEbt.css';
import { pltDetailsData } from '../data/pltDetailsData';
import { useLanguage } from '../context/LanguageContext';

const FlagID = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.1)' }}>
    <rect width="60" height="20" fill="#ce1126"/>
    <rect y="20" width="60" height="20" fill="#ffffff"/>
  </svg>
);

const locTexts = {
  id: {
    back: "Kembali",
    badge: "Lokasi EBT",
    titleStart: "Peta Persebaran ",
    titleHighlight: "Pembangkit Listrik",
    desc: "Sebaran lokasi pembangkit listrik utama beserta titik-titik koordinatnya.",
    prov: "Provinsi:",
    cap: "Kapasitas:",
    history: "Sejarah",
    all: "Semua"
  },
  en: {
    back: "Back",
    badge: "Renewable Locations",
    titleStart: "Distribution Map of ",
    titleHighlight: "Power Plants",
    desc: "The distribution of major power plant locations, complete with their coordinate points.",
    prov: "Province:",
    cap: "Capacity:",
    history: "History of",
    all: "All"
  }
};
const PLT_COLORS = {
  PLTA:  '#0ea5e9',
  PLTS:  '#f59e0b',
  PLTB:  '#76A557',
  PLTP:  '#ef4444',
  PLTBM: '#84cc16',
  PLTBG: '#22c55e',
  PLTSA: '#f97316',
  PLTAL: '#0ea5e9',
  "PLT Pasang Surut": '#06b6d4',
  "PLT CSP": '#f59e0b',
  "PLT Osmosis": '#3b82f6',
  "PLT EGS": '#ef4444',
  default: '#64748b',
};

const makePinIcon = (color) => new L.DivIcon({
  html: `
    <div class="custom-pin-wrap">
      <div class="pin-pulse" style="background: ${color};"></div>
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
        stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
        style="fill: ${color}33; filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    </div>`,
  className: 'custom-leaflet-icon',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -30],
});


function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 1.5 });
  }, [center, zoom, map]);
  return null;
}

const LokasiEbt = ({ onClose, theme, toggleTheme }) => {
  const { language } = useLanguage();
  const cData = locTexts[language];
  const isDark = theme === "dark";
  const [selectedCat, setSelectedCat] = useState("all");
  const [region, setRegion] = useState("id");

  useEffect(() => {
    setSelectedCat("all");
  }, [region]);

  const displayCategories = region === 'id' 
    ? ["all", "PLTA", "PLTS", "PLTB", "PLTP", "PLTBM", "PLTBG", "PLTSA", "PLTAL"]
    : ["all", "PLT EGS", "PLT Pasang Surut", "PLT CSP", "PLT Osmosis"];
  
  const mapPins = useMemo(() => {
    let pins = [];
    Object.entries(pltDetailsData).forEach(([key, pltData]) => {
      const dataRegion = pltData.region || 'id';
      if (dataRegion === region) {
        if (selectedCat === "all" || selectedCat === key) {
          const langData = pltData[language];
          if (langData && langData.locations) {
            const color = PLT_COLORS[key] || PLT_COLORS.default;
            pins = pins.concat(langData.locations.map(loc => ({ ...loc, pltKey: key, color })));
          }
        }
      }
    });
    return pins;
  }, [selectedCat, language, region]);

  const historyText = selectedCat !== "all" && pltDetailsData[selectedCat]?.[language]?.history 
                      ? pltDetailsData[selectedCat][language].history : null;

  const [geoData, setGeoData] = useState(null);
  const [showFab, setShowFab] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error("Could not fetch GeoJSON:", err));
  }, []);

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

  const geoJsonStyle = {
    fillColor: '#e2e8f0',
    weight: 1,
    opacity: 1,
    color: '#cbd5e1',
    fillOpacity: 0.6
  };

  const mapCenter = region === "id" ? [-2.5489, 118.0148] : [20, 0];
  const mapZoom = region === "id" ? 5 : 2;

  return (
    <motion.div 
      className={`lokasi-detail-overlay ${isDark ? "lokasi-detail-overlay--dark" : ""}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="lokasi-scroll-container" ref={scrollRef} onScroll={handleScroll}>
        <div className="lokasi-detail-nav">
          <button className="lokasi-btn-back" onClick={onClose}>
            <ArrowLeft size={20} />
            <span>{cData.back}</span>
          </button>
        </div>

        <div className="section-inner section-inner--col" style={{ paddingTop: '1rem', paddingBottom: '4rem', gap: '0.75rem' }}>
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 80, damping: 18 }}>
            <div className="section-badge">{cData.badge}</div>
            <h2 className="section-title section-title--center">
              {cData.titleStart}<span className="text-accent">{cData.titleHighlight}</span>
            </h2>
            <p className="section-desc section-desc--center">
              {cData.desc}
            </p>
          </motion.div>

          <div className="lokasi-region-toggle">
            <button 
              className={`region-btn ${region === 'id' ? 'active' : ''}`} 
              onClick={() => setRegion('id')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FlagID /> Indonesia
            </button>
            <button 
              className={`region-btn ${region === 'intl' ? 'active' : ''}`} 
              onClick={() => setRegion('intl')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Globe size={18} /> {language === 'id' ? 'Internasional' : 'International'}
            </button>
          </div>

          <motion.div 
            className="leaflet-map-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ marginTop: '2.5rem', marginBottom: '5rem' }}
          >
            <MapContainer 
              center={[-2.5489, 118.0148]} 
              zoom={5} 
              scrollWheelZoom={false}
              className={`leaflet-custom-map ${isDark ? 'leaflet-map-dark' : ''}`}
            >
              <ChangeView center={mapCenter} zoom={mapZoom} />
              
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {geoData && region === 'id' && (
                <GeoJSON data={geoData} style={geoJsonStyle} />
              )}

              {mapPins.filter(pin => pin.lat && pin.lng).map((pin, idx) => {
                const type = (pin.pltKey || '').toLowerCase();
                const isPltp = type === 'pltp';
                const isPltbm = type === 'pltbm';
                const isPltal = type === 'pltal';
                
                let capLabel = cData.cap;
                if (isPltp) capLabel = 'Pengelola Utama';
                if (isPltbm) capLabel = 'Bahan Bakar Utama';

                return (
                  <Marker 
                    key={`pin-${pin.name ? pin.name.replace(/[^a-zA-Z0-9]/g, '') : 'marker'}-${idx}`} 
                    position={[pin.lat, pin.lng]} 
                    icon={makePinIcon(pin.color || PLT_COLORS.default)}
                  >
                    <Popup className="custom-leaflet-popup">
                      <div className="popup-inner-content">
                        <h4 style={{ margin: '0 0 5px 0', color: pin.color || '#0ea5e9' }}>{pin.name}</h4>
                        {!isPltal && pin.prov && (
                          <p style={{ margin: 0, fontSize: '13px' }}><strong>{cData.prov}</strong> {pin.prov}</p>
                        )}
                        {!isPltal && pin.cap && (
                          <p style={{ margin: 0, fontSize: '13px' }}><strong>{capLabel} </strong> {pin.cap}</p>
                        )}
                        {isPltal && pin.prov && (
                          <p style={{ margin: 0, fontSize: '13px' }}><strong>Status: </strong> {pin.prov}</p>
                        )}
                        {isPltal && pin.cap && (
                          <p style={{ margin: 0, fontSize: '13px' }}><strong>Keterangan: </strong> {pin.cap}</p>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </motion.div>
          
          <div className="lokasi-cat-and-history" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '-2rem' }}>
            <div className="lokasi-cat-filter">
              {displayCategories.map(cat => (
                <button 
                  key={cat} 
                  className={`lokasi-tab-btn ${selectedCat === cat ? "active" : ""}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat === "all" ? cData.all : cat}
                </button>
              ))}
            </div>

            {historyText && (
              <motion.div 
                className="lokasi-history-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{ marginTop: 0 }}
              >
                <h3 className="lokasi-history-title">{cData.history} {selectedCat}</h3>
                <p className="lokasi-history-text">{historyText}</p>
              </motion.div>
            )}
          </div>
        </div>

        <div style={{ backgroundColor: '#0f172a', position: 'relative', zIndex: 5 }}>
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
    </motion.div>
  );
};

export default LokasiEbt;
