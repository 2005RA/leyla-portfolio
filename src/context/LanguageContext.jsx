// src/context/LanguageContext.jsx
import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'az' : 'en'));
  };

  // 't' stands for translations. We pass the whole object for the current language.
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to easily use the language context in any component
export const useLanguage = () => useContext(LanguageContext);