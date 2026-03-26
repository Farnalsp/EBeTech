import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "../styles/Sections.css";
import "../styles/Contact.css";

import { useLanguage } from "../context/LanguageContext";

const contactContent = {
  id: {
    badge: "Hubungi Kami",
    title: "Layanan Perhubungan ",
    desc: "Punya pertanyaan, proyek, atau keluhan? Tim kami siap merespons kebutuhan Anda secepat mungkin.",
    contacts: [
      { name: "Farhan Alam Saputra", role: "Pengembangan & Masalah Website", email: "farhan2331183@itpln.ac.id", wa: "+62 812-8484-7485", waLink: "https://wa.me/6281284847485" },
      { name: "Rizal Wira Pambudi", role: "Kemitraan & Kolaborasi", email: "rizal2331175@itpln.ac.id", wa: "+62 821-7578-8221", waLink: "https://wa.me/6282175788221" },
      { name: "Ahmad Izzulkamal", role: "Saran & Keluhan", email: "ahmad2331217@itpln.ac.id", wa: "+62 859-6426-1231", waLink: "https://wa.me/6285964261231" },
    ],
  },
  en: {
    badge: "Contact Us",
    title: "Communication Services ",
    desc: "Have any questions, projects, or complaints? Our team is ready to respond to your needs as quickly as possible.",
    contacts: [
      { name: "Farhan Alam Saputra", role: "Development & Website Issues", email: "farhan2331183@itpln.ac.id", wa: "+62 812-8484-7485", waLink: "https://wa.me/6281284847485" },
      { name: "Rizal Wira Pambudi", role: "Partnership & Collaboration", email: "rizal2331175@itpln.ac.id", wa: "+62 821-7578-8221", waLink: "https://wa.me/6282175788221" },
      { name: "Ahmad Izzulkamal", role: "Suggestions & Complaints", email: "ahmad2331217@itpln.ac.id", wa: "+62 859-6426-1231", waLink: "https://wa.me/6285964261231" },
    ],
  },
};

const Contact = ({ theme }) => {
  const { language } = useLanguage();

  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.15 });

  const isDark = theme === "dark";

  const cData = contactContent[language];

  return (
    <section id="contact" className={`section contact-section ${isDark ? "section--dark" : ""}`} ref={sectionRef}>
      {/* ── Main Contact Split Layout ── */}
      <div className="section-inner contact-split-inner">
        <div className={`contact-split-left scroll-animate scroll-fade-up ${sectionVisible ? "is-visible" : ""}`}>
          <div className="contact-split-text">
            <div className="section-badge">{cData.badge}</div>
            <h2 className="section-title">
              {cData.title}
              <span className="text-accent">EBe</span>
              <span style={{ color: "#277398" }}>Tech</span>
            </h2>
            <p className="section-desc">{cData.desc}</p>
          </div>
        </div>
        <div className="contact-split-right">
          {cData.contacts.map((contact, i) => {
            const delayClass = `delay-${(i + 1) * 100}`;
            return (
              <motion.div key={contact.name} className={`personnel-card scroll-animate scroll-fade-left ${delayClass} ${sectionVisible ? "is-visible" : ""}`} whileHover={{ x: -5 }}>
                <div className="personnel-avatar">
                  <User size={20} />
                </div>
                <div className="personnel-info">
                  <h3 className="personnel-name">{contact.name}</h3>
                  <span className="personnel-role">{contact.role}</span>
                </div>
                <div className="personnel-links">
                  <a href={`mailto:${contact.email}`} aria-label="Email" className="personnel-link">
                    <Mail size={18} />
                  </a>
                  <a href={contact.waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="personnel-link text-accent">
                    <WhatsAppIcon size={18} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
