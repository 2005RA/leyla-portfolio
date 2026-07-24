// src/components/Contact.jsx
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const { t } = useLanguage();

  return (
<section id="contact" className="py-24 px-8 bg-slate text-white scroll-mt-24">      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="block text-ochre text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {t.contact.label}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              {t.contact.title}
            </h2>
            
            <a 
              href={`mailto:${t.contact.email}`} 
              className="block text-3xl md:text-4xl font-serif text-white hover:text-ochre transition-colors duration-300 mb-8 break-words"
            >
              {t.contact.email}
            </a>

            <div className="space-y-2 text-white/80">
              <p>{t.contact.location}</p>
              <p>{t.contact.phone}</p>
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <div className="space-y-2">
              {t.contact.socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-b border-white/20 hover:border-ochre transition-colors duration-300"
                >
                  <span className="text-2xl font-serif group-hover:text-ochre group-hover:translate-x-2 transition-all duration-300">
                    {social.name}
                  </span>
                  <span className="text-2xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-ochre">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;