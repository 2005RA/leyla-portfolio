// src/components/Hero.jsx
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center gap-12 px-8 pt-32 pb-16 relative overflow-hidden">
      
      {/* Left: Text Content */}
      <div className="z-10 animate-fade-in-up">
        <p className="text-lightgray text-sm tracking-[0.2em] uppercase mb-4">
          {t.hero.greeting}
        </p>
        <h1 className="font-sans text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-charcoal mb-6">
          {t.hero.title1} <br />
          <span className="font-serif italic font-normal text-clay">
            {t.hero.title2}
          </span>
        </h1>
        
        <p className="text-lg text-midgray max-w-lg mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white text-sm tracking-wider rounded-full hover:bg-clay hover:-translate-y-1 transition-all duration-300"
        >
          {t.hero.cta} <span>→</span>
        </a>
      </div>

      {/* Right: Portrait Photo */}
      <div className="relative h-[500px] md:h-[650px] w-full animate-fade-in-right">
        {/* Main Portrait Image */}
        <div className="relative w-full h-full rounded-[200px_200px_20px_20px] overflow-hidden shadow-2xl">
          <img 
            src="/leyla-portfolio/images/portrait.png" 
            alt="Leyla Agatalibova"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image doesn't exist yet
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-slate to-sage flex items-center justify-center">
                  <div class="text-center text-white">
                    <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <p class="text-sm tracking-widest uppercase">Portrait Photo</p>
                    <p class="text-xs mt-2 opacity-70">Add to /public/images/portrait.jpg</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-ochre rounded-full opacity-60 mix-blend-multiply blur-xl"></div>
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-clay rounded-full opacity-40 mix-blend-multiply blur-xl"></div>
        
        {/* Border Frame */}
        <div className="absolute inset-0 rounded-[200px_200px_20px_20px] border-2 border-charcoal/10 pointer-events-none"></div>
      </div>

    </section>
  );
};

export default Hero;