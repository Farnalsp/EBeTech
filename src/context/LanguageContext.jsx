import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('ebetech-lang');
    return saved || 'id';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('ebetech-lang', newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
