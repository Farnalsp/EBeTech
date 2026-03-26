import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, User } from "lucide-react";
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
      { name: "Farhan Alam Saputra", role: "Features, Functions & Website Issues", email: "farhan2331183@itpln.ac.id", wa: "+62 812-8484-7485", waLink: "https://wa.me/6281284847485" },
      { name: "Rizal Wira Pambudi", role: "Partnership & Collaboration", email: "rizal2331175@itpln.ac.id", wa: "+62 821-7578-8221", waLink: "https://wa.me/6282175788221" },
      { name: "Ahmad Izzulkamal", role: "Development Suggestions & Complaints", email: "ahmad2331217@itpln.ac.id", wa: "+62 859-6426-1231", waLink: "https://wa.me/6285964261231" },
    ],
  },
  en: {
    badge: "Contact Us",
    title: "Communication Services ",
    desc: "Have any questions, projects, or complaints? Our team is ready to respond to your needs as quickly as possible.",
    contacts: [
      { name: "Farhan Alam Saputra", role: "Features, Functions & Website Issues", email: "farhan2331183@itpln.ac.id", wa: "+62 812-8484-7485", waLink: "https://wa.me/6281284847485" },
      { name: "Rizal Wira Pambudi", role: "Partnership & Collaboration", email: "rizal2331175@itpln.ac.id", wa: "+62 821-7578-8221", waLink: "https://wa.me/6282175788221" },
      { name: "Ahmad Izzulkamal", role: "Development Suggestions & Complaints", email: "ahmad2331217@itpln.ac.id", wa: "+62 859-6426-1231", waLink: "https://wa.me/6285964261231" },
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
                    <MessageCircle size={18} />
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
