// src/components/Experience.jsx
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-8 bg-cream">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="block text-clay text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {t.experience.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight">
            {t.experience.title}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-12">
            {t.experience.items.map((job, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 pl-0 md:pl-0"
              >
                {/* Date Column */}
                <div className="md:pt-1">
                  {job.isCurrent ? (
                    <span className="inline-block bg-clay text-white text-xs font-semibold tracking-wider px-3 py-1.5 rounded-sm">
                      {job.date}
                    </span>
                  ) : (
                    <span className="text-lightgray text-sm tracking-wider uppercase">
                      {job.date}
                    </span>
                  )}
                </div>

                {/* Content Column */}
                <div className="relative pb-8 border-b border-border last:border-0 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] md:-left-[37px] top-2 w-2.5 h-2.5 rounded-full bg-charcoal border-2 border-cream"></div>
                  
                  <h3 className="text-xl font-medium text-charcoal mb-1">{job.role}</h3>
                  <p className="text-slate font-medium mb-4">{job.company}</p>
                  
                  <ul className="space-y-2">
                    {job.details.map((detail, i) => (
                      <li key={i} className="relative pl-5 text-midgray leading-relaxed text-[15px]">
                        <span className="absolute left-0 top-1.5 text-ochre">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;