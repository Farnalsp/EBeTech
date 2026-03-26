import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import "../styles/Splash.css";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div className="splash-screen" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
      <div className="splash-content">
        <div className="splash-visual">
          <motion.div className="splash-sun" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
            <Sun size={48} color="#f59e0b" strokeWidth={1.5} />
          </motion.div>

          <motion.div className="splash-panel-wrap" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} style={{ display: "flex", flexDirection: "column" }}>
            {[1, 2].map((panel, idx) => (
              <motion.div key={panel} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }} style={{ marginTop: idx > 0 ? "-20px" : "0" }}>
                <svg width="200" height="85" viewBox="0 0 60 25" fill="none" stroke="#76A557" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="30" y1="21.5" x2="30" y2="24" strokeWidth="1.5" stroke="#475569" />
                  <polygon points="2 21.5 58 21.5 50 5 10 5" fill="rgba(16,185,129,0.15)" strokeWidth="1.5" />
                  <line x1="6" y1="13.25" x2="54" y2="13.25" />
                  <line x1="16" y1="21.5" x2="20" y2="5" />
                  <line x1="30" y1="21.5" x2="30" y2="5" />
                  <line x1="44" y1="21.5" x2="40" y2="5" />
                </svg>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="splash-battery-section notranslate">
          <div className="splash-battery-body">
            <div className="splash-battery-cap" />

            <motion.div className="splash-battery-fill" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} transition={{ type: "spring", bounce: 0, duration: 0.3 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="splash-charging-icon">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#fff" />
              </svg>
            </motion.div>
          </div>

          <div className="splash-progress-text">
            <span>{progress}%</span>
          </div>

          <div className="splash-label">Memuat Energi EBeTech...</div>
        </div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
