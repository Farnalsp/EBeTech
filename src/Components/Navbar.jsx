import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import "../styles/Navbar.css";
import LogoImage from "../assets/EBeTech Logo Lengkap.png";
import { useLanguage } from "../context/LanguageContext";

const navTranslations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    timeline: "Linimasa",
    edu: "Edukasi",
    contact: "Kontak",
    loc: "LOKASI EBT",
    dark: "Mode Gelap",
    light: "Mode Terang"
  },
  en: {
    home: "Home",
    about: "About",
    timeline: "Timeline",
    edu: "Education",
    contact: "Contact",
    loc: "RENEWABLE MAP",
    dark: "Dark Mode",
    light: "Light Mode"
  }
};

const navItems = [
  { id: "home" },
  { id: "about" },
  { id: "timeline" },
  { id: "edu" },
  { id: "contact" },
];

const FlagID = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.1)' }}>
    <rect width="60" height="20" fill="#ce1126"/>
    <rect y="20" width="60" height="20" fill="#ffffff"/>
  </svg>
);

const FlagUK = () => (
  <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.1)' }}>
    <clipPath id="uk-clip"><rect width="60" height="40"/></clipPath>
    <g clipPath="url(#uk-clip)">
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#ffffff" strokeWidth="6"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#ffffff" strokeWidth="10"/>
      <path d="M30,0 L30,40 M0,20 L60,20" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);
const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 20, delay: 0.1 } },
};

const mobileMenuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};
const AnimatedMenuIcon = ({ isOpen }) => {
  return (
    <div style={{ width: 26, height: 20, position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <motion.span
        style={{ position: "absolute", left: 0, top: 0, width: "100%", height: 3, backgroundColor: "currentColor", borderRadius: 4 }}
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8.5 : 0, backgroundColor: isOpen ? "#34d399" : "currentColor" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        style={{ position: "absolute", left: 0, top: "50%", marginTop: -1.5, width: "80%", height: 3, backgroundColor: "currentColor", borderRadius: 4 }}
        animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? -10 : 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.span
        style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 3, backgroundColor: "currentColor", borderRadius: 4 }}
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8.5 : 0, backgroundColor: isOpen ? "#34d399" : "currentColor" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

const Navbar = ({ theme, toggleTheme, onOpenMap }) => {
  const { language, toggleLanguage } = useLanguage();
  const [activeId, setActiveId] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    const observerOptions = { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setActiveId(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${isDark ? "navbar--dark" : ""}`} variants={navbarVariants} initial="hidden" animate="visible">
        <div className="nav-container">
          <motion.button className="logo logo--btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => handleNavClick("home")} aria-label="EBeTech Home">
            <img src={LogoImage} alt="EBeTech Logo" className="logo__img" />
          </motion.button>
          <nav className="nav-pill-wrapper desktop-only">
            <div className="nav-pill-track">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <motion.button key={item.id} className={`nav-link ${isActive ? "nav-link--active" : ""}`} onClick={() => handleNavClick(item.id)}>
                    {isActive && <motion.span layoutId="active-pill" className="active-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
                    <span className="nav-link__text">{navTranslations[language][item.id]}</span>
                  </motion.button>
                );
              })}
            </div>
          </nav>
          <div className="nav-actions">
            <motion.button className="cta-btn desktop-only" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onOpenMap}>
              {navTranslations[language].loc}
            </motion.button>
            <motion.button className="theme-btn desktop-only" onClick={toggleLanguage} whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.06 }} title={language === 'id' ? "Switch to English" : "Ganti ke Indonesia"} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', overflow: 'hidden', paddingBottom: '2px' }}>
              <span style={{ zIndex: 1, display: 'flex', alignItems: 'center' }}>{language === 'id' ? <FlagID /> : <FlagUK />}</span>
            </motion.button>
            <motion.button className="theme-btn desktop-only" onClick={toggleTheme} whileTap={{ scale: 0.88 }} whileHover={{ scale: 1.06 }} title="Toggle theme">
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.22 }}
                  style={{ display: "flex" }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
            <motion.button className="hamburger mobile-only" onClick={() => setMobileOpen((v) => !v)} whileTap={{ scale: 0.9 }} aria-label="Toggle menu">
              <AnimatedMenuIcon isOpen={mobileOpen} />
            </motion.button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="mobile-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.nav className={`mobile-drawer ${isDark ? "mobile-drawer--dark" : ""}`} variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit">
              <ul className="mobile-links">
                {navItems.map((item, i) => (
                  <motion.li key={item.id} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                    <button className={`mobile-link-btn ${activeId === item.id ? "mobile-link-btn--active" : ""}`} onClick={() => handleNavClick(item.id)}>
                      {navTranslations[language][item.id]}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mobile-bottom">
                <div style={{ display: "flex", gap: "1rem", width: "100%", justifyContent: "center", marginBottom: "1rem" }}>
                  <motion.button className="theme-toggle--mobile" style={{ flex: 1, padding: "0.8rem 0" }} onClick={toggleTheme} whileTap={{ scale: 0.92 }}>
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    <span style={{ fontSize: "0.9rem" }}>{isDark ? navTranslations[language].light : navTranslations[language].dark}</span>
                  </motion.button>
                  <motion.button className="theme-toggle--mobile" style={{ flex: 1, padding: "0.8rem 0" }} onClick={toggleLanguage} whileTap={{ scale: 0.92 }}>
                    <span style={{ marginRight: "8px", display: "flex", alignItems: "center" }}>{language === 'id' ? <FlagID /> : <FlagUK />}</span>
                    <span style={{ fontSize: "0.9rem" }}>{language === 'id' ? 'Indonesia' : 'English'}</span>
                  </motion.button>
                </div>
                <motion.button
                  className="cta-btn cta-btn--mobile"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenMap();
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: "100%" }}
                >
                  {navTranslations[language].loc}
                </motion.button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
