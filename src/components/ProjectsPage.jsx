// src/components/ProjectsPage.jsx
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('design');
  
  // Lightbox state for Design projects
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  // Modal state for WebDev projects
  const [selectedWebDev, setSelectedWebDev] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const designProjects = t.projects.items;
  const webDevProjects = t.webdev.items;

  // --- Lightbox Logic (Design) ---
  const openLightbox = (index) => { setLightboxIndex(index); setIsLightboxOpen(true); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setIsLightboxOpen(false); document.body.style.overflow = 'unset'; setTimeout(() => setLightboxIndex(null), 300); };
  
  const navigateImage = (dir) => {
    if (dir === 'next') { setDirection(1); setLightboxIndex((prev) => (prev + 1) % designProjects.length); } 
    else { setDirection(-1); setLightboxIndex((prev) => (prev - 1 + designProjects.length) % designProjects.length); }
  };

  // --- WebDev Modal Logic ---
  const openWebDevModal = (project) => { setSelectedWebDev(project); setIframeLoaded(false); document.body.style.overflow = 'hidden'; };
  const closeWebDevModal = () => { setSelectedWebDev(null); document.body.style.overflow = 'unset'; };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isLightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') navigateImage('next');
        else if (e.key === 'ArrowLeft') navigateImage('prev');
      } else if (selectedWebDev && e.key === 'Escape') {
        closeWebDevModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedWebDev, filter]);

  const currentProjects = filter === 'design' ? designProjects : webDevProjects;
  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 })
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-light text-charcoal mb-6">
            {filter === 'design' ? t.projects.title : t.webdev.title}
          </h1>
          <div className="inline-flex bg-white border border-border rounded-full p-1">
            <button onClick={() => setFilter('design')} className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'design' ? 'bg-clay text-white shadow-lg' : 'text-midgray hover:text-charcoal'}`}>
              {t.projects.label.split('—')[1]?.trim() || 'Design'}
            </button>
            <button onClick={() => setFilter('webdev')} className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'webdev' ? 'bg-slate text-white shadow-lg' : 'text-midgray hover:text-charcoal'}`}>
              {t.webdev.label.split('—')[1]?.trim() || 'Web Dev'}
            </button>
          </div>
        </motion.div>

        <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              
              {/* RENDER WEBDEV CARDS (Dark Code Editor Style) */}
              {filter === 'webdev' ? (
                <div onClick={() => openWebDevModal(project)} className="group bg-white border border-border rounded-xl overflow-hidden hover:border-slate hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="bg-[#1E1E2E] px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="relative aspect-video bg-[#282A36] overflow-hidden">
                    <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = `<div class="absolute inset-0 flex items-center justify-center text-[#A6ACCD] font-mono text-xs">Code Preview</div>`; }} />
                    <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm tracking-wider border border-white px-6 py-3 rounded-full">View Live Preview →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => <span key={i} className="text-xs font-medium px-2.5 py-1 bg-cream text-slate rounded-md">{tag}</span>)}
                    </div>
                    <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-clay transition-colors">{project.title}</h3>
                    <p className="text-midgray text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ) : (
                /* RENDER DESIGN CARDS (Standard Style) */
                <div onClick={() => openLightbox(index)} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] bg-border rounded-lg overflow-hidden mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.backgroundColor = '#E5E5E5'; e.target.parentElement.innerHTML += `<div class="absolute inset-0 flex items-center justify-center text-lightgray text-sm tracking-widest uppercase">Design Project</div>`; }} />
                    <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm tracking-wider">View Design</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-1">{project.title}</h3>
                  <p className="text-midgray text-sm">{project.category}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* --- DESIGN LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
              <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/80 hover:text-white text-4xl font-light z-50">×</button>
              <button onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} className="absolute left-4 md:left-8 text-white/60 hover:text-white text-5xl font-light z-50">‹</button>
              <button onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} className="absolute right-4 md:right-8 text-white/60 hover:text-white text-5xl font-light z-50">›</button>
              <div className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img key={lightboxIndex} custom={direction} variants={imageVariants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    src={designProjects[lightboxIndex]?.image} alt={designProjects[lightboxIndex]?.title} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
                </AnimatePresence>
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-white text-2xl font-serif mb-2">{designProjects[lightboxIndex]?.title}</h3>
                <p className="text-white/50 text-xs mt-2">{lightboxIndex + 1} / {designProjects.length}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- WEBDEV LIVE PREVIEW MODAL --- */}
        <AnimatePresence>
          {selectedWebDev && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" onClick={closeWebDevModal}>
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
              <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[92vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-cream/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F56]" /><div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><div className="w-3 h-3 rounded-full bg-[#27C93F]" /></div>
                    <span className="text-sm font-medium text-midgray truncate max-w-[200px] md:max-w-md">{selectedWebDev.title} — Live Preview</span>
                  </div>
                  <button onClick={closeWebDevModal} className="w-9 h-9 rounded-full flex items-center justify-center text-charcoal hover:bg-clay hover:text-white transition-all duration-300">×</button>
                </div>
                <div className="relative flex-1 bg-[#282A36] min-h-[400px]">
                  {!iframeLoaded && <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 z-10"><div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div><p className="text-sm tracking-wider">Loading live preview...</p></div>}
                  <iframe src={selectedWebDev.demoLink} title={selectedWebDev.title} onLoad={() => setIframeLoaded(true)} className={`w-full h-full min-h-[500px] md:min-h-[600px] border-0 transition-opacity duration-500 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
                  {!iframeLoaded && <a href={selectedWebDev.demoLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-5 py-2.5 bg-clay text-white rounded-full text-sm font-medium hover:bg-charcoal transition-colors shadow-lg">Open in New Tab</a>}
                </div>
                <div className="px-6 py-5 border-t border-border bg-white flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">{selectedWebDev.tags.map((tag, i) => <span key={i} className="text-xs font-medium px-2.5 py-1 bg-cream text-slate rounded-md">{tag}</span>)}</div>
                  <a href={selectedWebDev.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-midgray hover:text-charcoal transition-colors">View on GitHub <span>↗</span></a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default ProjectsPage;