// src/components/About.jsx
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-8 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="block text-clay text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            {t.about.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-charcoal tracking-tight">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Concise Summary */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <p className="font-serif text-2xl md:text-3xl leading-snug text-charcoal mb-6 font-medium">
              {t.about.lead}
            </p>
            
            <div className="h-1 w-20 bg-clay mb-8"></div>
            
            {/* Key Strengths as Bullet Points */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-clay"></div>
                <p className="text-midgray leading-relaxed">
                  {t.about.keyPoints[0]}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-clay"></div>
                <p className="text-midgray leading-relaxed">
                  {t.about.keyPoints[1]}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-clay"></div>
                <p className="text-midgray leading-relaxed">
                  {t.about.keyPoints[2]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Visual */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            {t.about.skills.map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2 text-sm font-medium text-charcoal">
                  <span>{skill.name}</span>
                  <span className="text-clay">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;