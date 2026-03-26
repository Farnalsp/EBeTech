import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/Footer.css";
import { useLanguage } from "../context/LanguageContext";

const footerContent = {
  id: {
    slogan: "Kepanjangan dari ",
    sloganStrong: "Edukasi Bersama Energi Terbarukan Technology",
    sloganEnd: ". Wadah sentral inovasi ramah lingkungan masa depan.",
    addressTitle: "Alamat Kami",
    addressLines: [
      "Menara PLN, Jl. Outer Ring Road Lantai 2, RT.1/RW.1",
      "Duri Kosambi, Kec. Cengkareng, Kota Jakarta Barat",
      "DKI Jakarta 11750"
    ]
  },
  en: {
    slogan: "Stands for ",
    sloganStrong: "Edukasi Bersama Energi Terbarukan Technology",
    sloganEnd: ". The central hub for future eco-friendly innovations.",
    addressTitle: "Our Address",
    addressLines: [
      "Menara PLN, Jl. Outer Ring Road Lantai 2, RT.1/RW.1",
      "Duri Kosambi, Kec. Cengkareng, Kota Jakarta Barat",
      "DKI Jakarta 11750"
    ]
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const cData = footerContent[language];

  return (
    <footer className="footer-fullwidth">
      <div className="footer-fw-top">
        <motion.div 
          className="footer-fw-brand"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h3 className="footer-fw-logo">
            <span className="text-accent">EBe</span>
            <span style={{ color: "#277398" }}>Tech</span>
          </h3>
          <p className="footer-fw-slogan">
            {cData.slogan}<strong>{cData.sloganStrong}</strong>{cData.sloganEnd}
          </p>
          <div className="footer-fw-socials">
            <a href="https://www.instagram.com/farnalsp_01/" target="_blank" rel="noopener noreferrer" className="fw-social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/adaroenergy/" target="_blank" rel="noopener noreferrer" className="fw-social-icon">
              <Linkedin size={18} />
            </a>
            <a href="https://www.tiktok.com/@garudaaemas?lang=en-GB" target="_blank" rel="noopener noreferrer" className="fw-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3" />
              </svg>
            </a>
          </div>
        </motion.div>

        <div className="footer-fw-right-side">
          <motion.div 
            className="footer-fw-address"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h4>{cData.addressTitle}</h4>
            <p>
              {cData.addressLines[0]}
              <br />
              {cData.addressLines[1]}
              <br />
              {cData.addressLines[2]}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="footer-fw-bottom"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <p>© 2026 EBeTech · Indonesia</p>
        <p>Created by EBeTech Team</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
