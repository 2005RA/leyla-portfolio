// src/components/Projects.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const Projects = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const homepageProjects = t.projects.items.slice(0, 4);
  const totalItems = homepageProjects.length + 1; // +1 for the "View More" card

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedImageIndex(null), 300);
  };

  const navigateImage = (dir) => {
    if (dir === 'next') {
      setDirection(1);
      setSelectedImageIndex((prev) => (prev + 1) % totalItems);
    } else {
      setDirection(-1);
      setSelectedImageIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') navigateImage('next');
      else if (e.key === 'ArrowLeft') navigateImage('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 })
  };

  const isViewMoreCard = selectedImageIndex === homepageProjects.length;

  return (
    <section id="projects" className="py-24 px-8 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
          <span className="block text-clay text-xs font-semibold tracking-[0.2em] uppercase mb-4">{t.projects.label}</span>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4">{t.projects.title}</h2>
          <p className="text-midgray text-lg max-w-2xl">{t.projects.subtitle}</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homepageProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeInUp} onClick={() => openLightbox(index)} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-border rounded-lg overflow-hidden mb-5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#E5E5E5'; }} />
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider border border-white px-6 py-3 rounded-full">View Project →</span>
                </div>
              </div>
              <div className="px-1">
                <span className="block text-lightgray text-xs font-semibold tracking-[0.15em] uppercase mb-2">{project.category}</span>
                <h3 className="font-serif text-2xl text-charcoal group-hover:text-clay transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal text-charcoal text-sm tracking-wider rounded-full hover:bg-charcoal hover:text-white transition-all duration-300">
            See More Projects →
          </Link>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
              <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-50">×</button>
              <button onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} className="absolute left-4 md:left-8 text-white/60 hover:text-white text-5xl font-light z-50">‹</button>
              <button onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} className="absolute right-4 md:right-8 text-white/60 hover:text-white text-5xl font-light z-50">›</button>

              <div className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  {isViewMoreCard ? (
                    <motion.div key="view-more" variants={imageVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
                      className="flex flex-col items-center justify-center text-center p-12 bg-charcoal/50 rounded-2xl border border-white/10 max-w-lg" onClick={(e) => e.stopPropagation()}>
                      
                      {/* Now using translations instead of hardcoded English */}
                      <h3 className="text-white text-3xl font-serif mb-4">{t.projects.viewMoreTitle}</h3>
                      <p className="text-white/70 mb-8">{t.projects.viewMoreDesc}</p>
                      
                      <Link to="/projects" onClick={closeLightbox} className="px-8 py-3 bg-clay text-white rounded-full hover:bg-white hover:text-charcoal transition-colors">
                        {t.projects.viewMoreBtn} →
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.img key={selectedImageIndex} custom={direction} variants={imageVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                      src={homepageProjects[selectedImageIndex]?.image} alt={homepageProjects[selectedImageIndex]?.title} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                  )}
                </AnimatePresence>
              </div>

              {!isViewMoreCard && (
                <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                  <h3 className="text-white text-2xl font-serif mb-2">{homepageProjects[selectedImageIndex]?.title}</h3>
                  <p className="text-white/50 text-xs mt-2">{selectedImageIndex + 1} / {homepageProjects.length}</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;