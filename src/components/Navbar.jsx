// src/components/Navbar.jsx
import { Link } from 'react-router-dom'; // Import Link
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, lang, toggleLang } = useLanguage();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-cream/90 backdrop-blur-md border-b border-black/5">
      {/* Logo - Now uses Link for smooth routing */}
      <Link to="/" className="font-serif text-2xl font-medium text-charcoal tracking-tight hover:opacity-80 transition-opacity">
        Leyla <span className="text-clay italic">A.</span>
      </Link>

      <ul className="hidden md:flex list-none gap-8">
        <li>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-midgray text-sm uppercase tracking-wider hover:text-charcoal transition-colors relative group cursor-pointer">
            {t.nav.about}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-clay transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-midgray text-sm uppercase tracking-wider hover:text-charcoal transition-colors relative group cursor-pointer">
            {t.nav.design}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-clay transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#webdev" onClick={(e) => scrollToSection(e, 'webdev')} className="text-midgray text-sm uppercase tracking-wider hover:text-charcoal transition-colors relative group cursor-pointer">
            {t.nav.webdev}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-clay transition-all group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-midgray text-sm uppercase tracking-wider hover:text-charcoal transition-colors relative group cursor-pointer">
            {t.nav.contact}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-clay transition-all group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <button 
        onClick={toggleLang}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-clay hover:text-clay transition-all text-sm font-medium text-midgray"
      >
        <span className={lang === 'en' ? 'text-charcoal font-bold' : ''}>EN</span>
        <span className="text-lightgray">|</span>
        <span className={lang === 'az' ? 'text-charcoal font-bold' : ''}>AZ</span>
      </button>
    </nav>
  );
};

export default Navbar;