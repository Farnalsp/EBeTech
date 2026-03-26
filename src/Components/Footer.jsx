import React, { useRef, useEffect } from "react";
import { Instagram, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.matchMedia();

    ctx.add("(min-width: 768px)", () => {
      const q = gsap.utils.selector(footerRef);
      const scroller = footerRef.current.closest('.plt-scroll-container') || window;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          scroller: scroller,
          start: "top 95%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(
        q(".footer-fw-brand"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        q(".footer-fw-address"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        q(".footer-fw-bottom"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-fullwidth">
      <div className="footer-fw-top">
        <div className="footer-fw-brand">
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
        </div>

        <div className="footer-fw-right-side">
          <div className="footer-fw-address">
            <h4>{cData.addressTitle}</h4>
            <p>
              {cData.addressLines[0]}
              <br />
              {cData.addressLines[1]}
              <br />
              {cData.addressLines[2]}
            </p>
          </div>
        </div>
      </div>

      <div className="footer-fw-bottom">
        <p>© 2026 EBeTech · Indonesia</p>
        <p>Created by EBeTech Team</p>
      </div>
    </footer>
  );
};

export default Footer;
