import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Sections.css";
import "../styles/About.css";

import logoLengkap from "../assets/EBeTech Logo Lengkap.png";
import logoTeks from "../assets/EBeTech Logo Teks.png";
import { useLanguage } from "../context/LanguageContext";

const aboutContent = {
  id: {
    badge: "Tentang Kami",
    titleStart: "Mengenal Lebih Dekat ",
    p1: ["Hadir sebagai pelopor transisi energi di Indonesia, kami berdedikasi penuh untuk memperkenalkan serta memasyarakatkan penggunaan pembangkit listrik energi terbarukan kepada seluruh lapisan masyarakat di nusantara."],
    p2: [{ type: "strong", text: "EBeTech" }, " sendiri merupakan kepanjangan dari ", { type: "em", text: "Edukasi Bersama Energi Terbarukan Technology." }, " Nama ini mencerminkan komitmen kuat kami sebagai wadah sentral untuk mengedukasi, berbagi wawasan, dan mengembangkan inovasi teknologi ramah lingkungan demi masa depan yang lebih hijau, cerdas, dan berkelanjutan."]
  },
  en: {
    badge: "About Us",
    titleStart: "Getting to Know ",
    p1: ["Standing as a pioneer of the energy transition in Indonesia, we are fully dedicated to introducing and popularizing the use of renewable energy power plants to all levels of society across the archipelago."],
    p2: [{ type: "strong", text: "EBeTech" }, " itself stands for ", { type: "em", text: "Edukasi Bersama Energi Terbarukan Technology." }, " This name reflects our strong commitment as a central platform to educate, share insights, and develop eco-friendly technological innovations for a greener, smarter, and more sustainable future."]
  }
};

const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (i = 0) => ({
    y: 0, opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.12 },
  }),
};

const WordChunk = ({ item, start, end, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const InnerTag = item.type;
  return (
    <motion.span style={{ opacity, display: "inline" }}>
      {item.class ? <InnerTag className={item.class}>{item.word}</InnerTag> : <InnerTag>{item.word}</InnerTag>}
    </motion.span>
  );
};

/* ── Scroll Reveal Component ── */
const ScrollRevealChunks = ({ chunks, className, as: Component = "p", offset = ["start 90%", "start 45%"] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const words = [];
  chunks.forEach((chunk) => {
    if (typeof chunk === "string") {
      chunk.split(" ").filter((w) => w).forEach((w) => words.push({ type: "span", word: w, class: null }));
    } else {
      chunk.text.split(" ").filter((w) => w).forEach((w) => words.push({ type: chunk.type || "span", word: w, class: chunk.className }));
    }
  });

  return (
    <Component className={className} ref={ref}>
      {words.map((item, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <React.Fragment key={i}>
            <WordChunk item={item} start={start} end={end} scrollYProgress={scrollYProgress} />
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </Component>
  );
};

const About = ({ theme }) => {
  const { language } = useLanguage();
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [visualRef, visualVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const isDark = theme === "dark";

  const [lightboxImg, setLightboxImg] = useState(null);

  const currentData = aboutContent[language];

  return (
    <section id="about" className={`section about-section ${isDark ? "section--dark" : ""}`} ref={sectionRef}>
      <div className="section-inner">
        {/* ── LEFT: Visual Grid ── */}
        <div 
          ref={visualRef}
          className={`about-visual scroll-animate scroll-fade-right ${visualVisible ? "is-visible" : ""}`}
        >
          <div className="about-grid-visual">
            <motion.div className="about-logo-card delay-100" onClick={() => setLightboxImg(logoLengkap)} whileHover={{ scale: 1.03 }}>
              <img src={logoLengkap} alt="EBeTech Logo Lengkap" className="about-card-img" />
            </motion.div>
            <motion.div className="about-logo-card delay-200" onClick={() => setLightboxImg(logoTeks)} whileHover={{ scale: 1.03 }}>
              <img src={logoTeks} alt="EBeTech Logo Teks" className="about-card-img" />
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="about-content">
          <div className={`section-badge scroll-animate scroll-fade-up delay-200 ${sectionVisible ? "is-visible" : ""}`}>
            {currentData.badge}
          </div>

          <h2 className={`section-title scroll-animate scroll-fade-up delay-300 ${sectionVisible ? "is-visible" : ""}`}>
            {currentData.titleStart}<span className="text-accent">EBe</span><span style={{ color: "#277398" }}>Tech</span>
          </h2>
          <ScrollRevealChunks as="p" className="section-desc" chunks={currentData.p1} offset={["start 90%", "start 40%"]} />
          <ScrollRevealChunks as="p" className="section-desc" chunks={currentData.p2} offset={["start 85%", "start 30%"]} />
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="lightbox-overlay"
            onClick={() => setLightboxImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="lightbox-close" onClick={() => setLightboxImg(null)}>
                &times;
              </button>
              <img src={lightboxImg} alt="Diperbesar" className="lightbox-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
