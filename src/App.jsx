import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "./Components/SplashScreen";
import ThemeTransitionOverlay from "./Components/ThemeTransitionOverlay";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Timeline from "./Components/Timeline";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Sections.css";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [showSplash, setShowSplash] = useState(true);
  const [themeOverlay, setThemeOverlay] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [showDesktopWarning, setShowDesktopWarning] = useState(false);
  const [selectedPlt, setSelectedPlt] = useState(null);

  const requestOpenMap = () => {
    if (window.innerWidth <= 768) {
      setShowDesktopWarning(true);
    } else {
      setShowMap(true);
    }
  };

  const toggleTheme = () => {
    if (themeOverlay) return;
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeOverlay(nextTheme);
    setTimeout(() => {
      setTheme(nextTheme);
    }, 600);
    setTimeout(() => {
      setThemeOverlay(null);
    }, 1500);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-body", theme === "dark");
  }, [theme]);
  useEffect(() => {
    if (showSplash || themeOverlay || showMap || selectedPlt || showDesktopWarning) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSplash, themeOverlay, showMap, selectedPlt, showDesktopWarning]);

  return (
    <LanguageProvider>
      <>
        <ThemeTransitionOverlay nextTheme={themeOverlay} />
        
        <AnimatePresence mode="wait">
          {showSplash && <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showDesktopWarning && (
            <motion.div 
              className="mobile-alert-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className={`mobile-alert-box ${theme === 'dark' ? 'dark' : ''}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="alert-icon">⚠️</div>
                <h3>Pemberitahuan</h3>
                <p>Fitur ini akan membukan maps dimana anda harus mengaktifkan tampilan dekstop atau disarankan menggunakan desktop langsung</p>
                <button className="alert-btn" onClick={() => setShowDesktopWarning(false)}>Oke, Mengerti</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!showSplash && (
          <motion.div 
            className={`App ${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar theme={theme} toggleTheme={toggleTheme} onOpenMap={requestOpenMap} />
            <Hero theme={theme} />
            <About theme={theme} />
            <Timeline theme={theme} />
            <Education theme={theme} toggleTheme={toggleTheme} showMap={showMap} setShowMap={setShowMap} requestOpenMap={requestOpenMap} selectedPlt={selectedPlt} setSelectedPlt={setSelectedPlt} />
            <Contact theme={theme} />
            <Footer />
          </motion.div>
        )}
      </>
    </LanguageProvider>
  );
}

export default App;
