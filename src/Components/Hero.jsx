import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import "../styles/Hero.css";
import { useLanguage } from "../context/LanguageContext";

import solarImg from "../assets/edu_solar.png";
import windImg from "../assets/edu_wind.png";
import hydroImg from "../assets/edu_hydro.png";
import bioImg from "../assets/edu_biomass.png";
import geoImg from "../assets/edu_geothermal.png";
import wasteImg from "../assets/edu_waste.png";
gsap.registerPlugin(Draggable);

const TITLES = [
  { id: "Pembangkit Listrik", en: "Power Plants" },
  { id: "Energi Surya", en: "Solar Energy" },
  { id: "Energi Angin", en: "Wind Energy" },
  { id: "Energi Air", en: "Hydro Energy" },
  { id: "Energi Biomassa", en: "Biomass Energy" }
];

const heroTexts = {
  id: {
    introLine1: "Edukasi Pengenalan",
    introLine2: "Energi Baru Terbarukan",
    slogan: "Level Up Your Energy Insights With Technology",
    startBtn: "Mulai Belajar"
  },
  en: {
    introLine1: "Introductory Education on",
    introLine2: "New Renewable Energy",
    slogan: "Level Up Your Energy Insights With Technology",
    startBtn: "Start Learning"
  }
};

const Hero = ({ theme }) => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const titleAccentRef = useRef(null);
  const sloganRef = useRef(null);
  const cardsRef = useRef([]);
  const parallaxRef = useRef([]);
  const innersRef = useRef([]);

  const isDark = theme === "dark";
  const cData = heroTexts[language];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-title-base", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(titleAccentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(sloganRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".btn-premium", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.6")
      .from(cardsRef.current, { 
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)"
      }, "-=0.8");
      let currentIndex = 0;
      const rotateText = () => {
        const nextIndex = (currentIndex + 1) % TITLES.length;
        
        gsap.to(titleAccentRef.current, {
          y: -15,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            titleAccentRef.current.innerText = TITLES[nextIndex][language];
            gsap.fromTo(titleAccentRef.current, 
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
            );
            currentIndex = nextIndex;
          }
        });
      };
      
      const textInterval = setInterval(rotateText, 3500);
      Draggable.create(cardsRef.current, {
        type: "x,y",
        bounds: containerRef.current,
        onDragStart: function() {
          gsap.to(this.target, { scale: 1.05, duration: 0.2, zIndex: 100 });
        },
        onDragEnd: function() {
          gsap.to(this.target, { scale: 1, duration: 0.2, zIndex: 10 });
        }
      });
      innersRef.current.forEach((inner, i) => {
        gsap.to(inner, {
          y: 12,
          rotation: i % 2 === 0 ? 2 : -2,
          duration: 2 + (i * 0.2),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
      const xTo = parallaxRef.current.map(c => gsap.quickTo(c, "x", { duration: 0.8, ease: "power3" }));
      const yTo = parallaxRef.current.map(c => gsap.quickTo(c, "y", { duration: 0.8, ease: "power3" }));

      const onMouseMove = (e) => {
        if (window.innerWidth < 900) return; 
        
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (clientX - centerX) / centerX; 
        const deltaY = (clientY - centerY) / centerY;
        const multipliers = [15, 25, -15, -25, 20, -20];
        
        parallaxRef.current.forEach((_, i) => {
          xTo[i](deltaX * multipliers[i]);
          yTo[i](deltaY * multipliers[i]);
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        clearInterval(textInterval);
        window.removeEventListener("mousemove", onMouseMove);
      };
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const scrollToEdu = () => {
    document.getElementById('edu')?.scrollIntoView({ behavior: 'smooth' });
  };
  const cardData = [
    { name: "Solar", img: solarImg, bg: "card-solar" },
    { name: "Wind", img: windImg, bg: "card-wind" },
    { name: "Hydro", img: hydroImg, bg: "card-hydro" },
    { name: "Biomass", img: bioImg, bg: "card-bio" },
    { name: "Panas Bumi", img: geoImg, bg: "card-geo" },
    { name: "Sampah", img: wasteImg, bg: "card-waste" }
  ];

  return (
    <section 
      ref={containerRef} 
      className={`hero-gsap ${isDark ? "hero-gsap--dark" : ""}`}
      id="home"
    >
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      <div className="hero-gsap-inner">
        <div className="hero-gsap-content">
          <h1 className="hero-title-base">
            {cData.introLine1} <br className="desktop-break" />
            <span className="hero-title-accent-wrapper">
              <span ref={titleAccentRef} className="hero-title-accent">
                {TITLES[0][language]}
              </span>
            </span>
            <br className="desktop-break" /> {cData.introLine2}
          </h1>

          <div ref={sloganRef} className="hero-slogan-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '550px' }}>
            <div style={{ 
              height: '3px', 
              width: '100%', 
              background: 'linear-gradient(90deg, #76a557 0%, rgba(118,165,87,0.5) 50%, rgba(118,165,87,0) 100%)', 
              borderRadius: '3px' 
            }} />
            <p className="hero-slogan" style={{ maxWidth: '100%', margin: 0 }}>
              {cData.slogan}
            </p>
          </div>
          
          <div className="hero-cta-group">
            <button className="btn-premium" onClick={scrollToEdu}>{cData.startBtn}</button>
          </div>
        </div>
        <div className="hero-gsap-visuals-grid">
          {cardData.map((cd, index) => (
            
            <div 
              key={index}
              className={`energy-card ${cd.bg}`} 
              ref={el => cardsRef.current[index] = el}
            >
              <div className="energy-card-parallax" ref={el => parallaxRef.current[index] = el}>
                <div className="energy-card-inner" ref={el => innersRef.current[index] = el}>
                  <div className="card-glow"></div>
                  <img src={cd.img} alt={cd.name} />
                  <span className="card-badge">{cd.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
