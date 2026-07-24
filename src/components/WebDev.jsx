// src/components/WebDev.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Make sure this is imported
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const WebDev = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Limit to first 3 projects on homepage
  const homepageProjects = t.webdev.items.slice(0, 3);

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Reset iframe loading state when modal opens/closes
  useEffect(() => {
    if (selectedProject) {
      setIframeLoaded(false);
    }
  }, [selectedProject]);

  return (
    <section id="webdev" className="py-24 px-8 bg-cream scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="block text-clay text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {t.webdev.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight mb-4">
            {t.webdev.title}
          </h2>
          <p className="text-midgray text-lg max-w-2xl">
            {t.webdev.subtitle}
          </p>
        </motion.div>

        {/* Web Dev Grid - Only showing first 3 projects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {homepageProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              onClick={() => {
                setSelectedProject(project);
                setIframeLoaded(false);
              }}
              className="group bg-white border border-border rounded-xl overflow-hidden hover:border-slate hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Code Editor Header */}
              <div className="bg-[#1E1E2E] px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              {/* Screenshot Area */}
              <div className="relative aspect-video bg-[#282A36] overflow-hidden">
                <img 
                  src={project.screenshot} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="absolute inset-0 flex flex-col items-center justify-center text-[#A6ACCD] font-mono text-xs p-4 text-left">
                        <span class="text-[#BD93F9]">const</span> <span class="text-[#8BE9FD]">App</span> = () => {'{'}
                        <span class="pl-4 text-[#50FA7B]">return</span> &lt;<span class="text-[#8BE9FD]">Demo</span> /&gt;
                        <span>{'}'}</span>
                      </div>
                    `;
                  }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm tracking-wider border border-white px-6 py-3 rounded-full">
                    View Live Preview →
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-cream text-slate rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-serif text-xl text-charcoal mb-2 group-hover:text-clay transition-colors">
                  {project.title}
                </h3>
                <p className="text-midgray text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* "See More" Button for WebDev */}
        <div className="text-center mt-16">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal text-charcoal text-sm tracking-wider rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            See More Projects →
          </Link>
        </div>

        {/* Live Preview Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedProject(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[92vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-cream/50">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <span className="text-sm font-medium text-midgray truncate max-w-[200px] md:max-w-md">
                      {selectedProject.title} — Live Preview
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-charcoal hover:bg-clay hover:text-white transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                {/* Live Iframe Area */}
                <div className="relative flex-1 bg-[#282A36] min-h-[400px]">
                  {/* Loading Spinner */}
                  {!iframeLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 z-10">
                      <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
                      <p className="text-sm tracking-wider">Loading live preview...</p>
                    </div>
                  )}

                  {/* The Live Website */}
                  <iframe
                    src={selectedProject.demoLink}
                    title={selectedProject.title}
                    onLoad={() => setIframeLoaded(true)}
                    className={`w-full h-full min-h-[500px] md:min-h-[600px] border-0 transition-opacity duration-500 ${
                      iframeLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />

                  {/* Fallback if iframe is blocked */}
                  {!iframeLoaded && (
                    <a 
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 px-5 py-2.5 bg-clay text-white rounded-full text-sm font-medium hover:bg-charcoal transition-colors shadow-lg"
                    >
                      Open in New Tab 
                    </a>
                  )}
                </div>

                {/* Modal Footer with Info */}
                <div className="px-6 py-5 border-t border-border bg-white flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-cream text-slate rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={selectedProject.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-midgray hover:text-charcoal transition-colors"
                  >
                    View on GitHub <span>↗</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WebDev;