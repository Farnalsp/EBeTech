import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const LocationMapModal = ({ location, onClose, isDark, themeColor, pltType }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!location || !location.lat || !location.lng) return null;

  const position = [location.lat, location.lng];
  const type = (pltType || '').toLowerCase();
  const isPltp   = type === 'pltp';
  const isPltbm  = type === 'pltbm';
  const isPltal  = type === 'pltal';
  const capLabel = isPltp ? 'Pengelola Utama' : isPltbm ? 'Bahan Bakar Utama' : 'Kapasitas';
  const capIcon  = isPltp ? '🏢' : isPltbm ? '🌿' : '⚡';
  const customIcon = L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div class="custom-pin-wrap">
        <div class="pin-pulse" style="background: ${themeColor || '#0ea5e9'};"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
          stroke="${themeColor || '#0ea5e9'}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
          style="fill: ${themeColor || '#0ea5e9'}33; filter: drop-shadow(0px 3px 6px rgba(0,0,0,0.55));">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -36],
  });

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: 'min(90vw, 800px)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        background: isDark ? '#0f172a' : '#ffffff',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column',
      }}>

        <div style={{
          padding: '1rem 1.5rem',
          background: themeColor || '#0ea5e9',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: 'white',
        }}>
          <div>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85 }}>Lokasi Proyek</p>
            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>{location.name}</h3>

            {!isPltal && location.prov && <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>{location.prov}</p>}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.2)', border: 'none',
              color: 'white', width: 36, height: 36, borderRadius: '50%',
              fontSize: '1.2rem', cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          >✕</button>
        </div>

        <div style={{ height: '420px', width: '100%' }}>
          <MapContainer
            center={position}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                <strong>{location.name}</strong><br />
                {!isPltal && location.prov && <>{location.prov}<br /></>}
                {!isPltal && location.cap && <>{capLabel}: {location.cap}<br /></>}
                {isPltal && location.prov && <>Status: {location.prov}<br /></>}
                {isPltal && location.cap && <>Keterangan: {location.cap}<br /></>}
                <span style={{ fontSize: '0.8em', color: '#888' }}>
                  {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div style={{
          padding: '0.75rem 1.5rem',
          background: isDark ? '#1e293b' : '#f8fafc',
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b',
        }}>
          <span>📍 <b style={{ color: isDark ? '#e2e8f0' : '#334155' }}>Koordinat:</b> {location.lat.toFixed(6)}, {location.lng.toFixed(6)}</span>
          {!isPltal && location.cap && (
            <span>{capIcon} <b style={{ color: isDark ? '#e2e8f0' : '#334155' }}>{capLabel}:</b> {location.cap}</span>
          )}
          {isPltal && location.prov && (
            <span>🎯 <b style={{ color: isDark ? '#e2e8f0' : '#334155' }}>Status:</b> {location.prov}</span>
          )}
          {isPltal && location.cap && (
            <span>ℹ️ <b style={{ color: isDark ? '#e2e8f0' : '#334155' }}>Keterangan:</b> {location.cap}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationMapModal;
