import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/ThemeTransition.css";

const EbtThemeAnim = ({ isLight }) => {
  return (
    <div className="ebt-theme-scene">
      {isLight ? (
        <div className="solar-scene">
          <motion.div className="ebt-sun" initial={{ y: 100, opacity: 0, scale: 0.5 }} animate={{ y: -60, opacity: 1, scale: [1, 1.2, 1] }} transition={{ duration: 1.5, ease: "easeOut" }} />
          <motion.div className="ebt-solar-farm" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 1, type: "spring" }}>
            <div className="solar-farm-container">
              <div className="solar-row row-1" />
              <div className="solar-row row-2" />
              <div className="solar-row row-3" />
              <div className="solar-row row-4" />
              <div className="solar-row row-5" />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="wind-scene">
          <motion.div className="ebt-moon" initial={{ y: 100, opacity: 0 }} animate={{ y: -60, opacity: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} />
          <motion.div className="ebt-turbine" initial={{ y: 100, opacity: 0 }} animate={{ y: 20, opacity: 1 }} transition={{ delay: 0.1, duration: 1, type: "spring" }}>
            <div className="ebt-t-tower" />
            <motion.div className="ebt-t-rotor" animate={{ rotate: 360 }} transition={{ ease: "linear", repeat: Infinity, duration: 4 }}>
              <div className="ebt-t-blade blade1" />
              <div className="ebt-t-blade blade2" />
              <div className="ebt-t-blade blade3" />
              <div className="ebt-t-center" />
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const ThemeTransitionOverlay = ({ nextTheme }) => {
  return (
    <AnimatePresence>
      {nextTheme && (
        <motion.div
          key="theme-overlay"
          className={`theme-transition-overlay ${nextTheme === "dark" ? "overlay-dark" : "overlay-light"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="theme-lamp-container">
            <EbtThemeAnim isLight={nextTheme === "light"} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransitionOverlay;
