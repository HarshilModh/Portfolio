import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants/data';
import { TiltCard } from './ui/TiltCard';

export const Experience = ({ isDark, textMuted, cardClass, experienceRef }) => {
  const { scrollYProgress: expProgress } = useScroll({
    target: experienceRef,
    offset: ["start center", "end center"]
  });
  
  // Custom spring for smoother animation
  const pathLength = useSpring(expProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 relative overflow-hidden" ref={experienceRef}>
        {/* Ambient background glows */}
        <div className={`absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-accent-pink/[0.03]' : 'bg-accent-pink/[0.02]'}`} />
        <div className={`absolute bottom-20 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-primary/[0.03]' : 'bg-primary/[0.04]'}`} />

        {/* Decorative elements */}
        <div className={`absolute inset-0 z-0 pointer-events-none ${isDark ? 'opacity-5' : 'opacity-[0.03]'}`}
          style={{
            backgroundImage: isDark 
              ? 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)'
              : 'radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Odyssey</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            <p className={`mt-4 ${textMuted}`}>A journey of engineering, leadership, and impact.</p>
          </motion.div>

          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] transform md:-translate-x-1/2">
              <div className={`w-full h-full ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
              <motion.div
                style={{ height: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-light via-primary to-accent-pink shadow-[0_0_15px_rgba(126,91,240,0.5)]"
              />
            </div>

            <div className="space-y-20">
              {EXPERIENCE_DATA.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-10 items-center`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] border-primary ${isDark ? 'bg-slate-900 shadow-[0_0_10px_rgba(126,91,240,0.8)]' : 'bg-white shadow-[0_0_10px_rgba(126,91,240,0.5)]'} z-20`}>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  </div>

                  {/* Horizontal Connection Line */}
                  <div className={`hidden md:block absolute top-1/2 w-1/2 h-[2px] ${index % 2 === 0 ? 'left-1/2 origin-left' : 'right-1/2 origin-right'} bg-gradient-to-r ${index % 2 === 0 ? 'from-primary/50 to-transparent' : 'from-transparent to-primary/50'}`} />
                  
                  {/* Content Card */}
                  <div className="md:w-1/2 w-full pl-24 md:pl-0">
                    <TiltCard className={`p-8 rounded-2xl border relative group transition-all duration-300 backdrop-blur-xl ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-800 hover:border-primary/50 shadow-xl shadow-black/20' 
                        : 'bg-white/95 border-slate-200/80 hover:border-primary/40 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)] hover:-translate-y-1'
                    }`}>
                      <div className={`absolute ${index % 2 === 0 ? '-left-2' : '-right-2 md:left-auto md:-left-2'} top-1/2 w-2 h-8 bg-gradient-to-b from-primary to-accent-pink rounded-r-md transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      
                      <div className="flex flex-col gap-2 mb-4 relative z-10">
                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-primary transition-colors`}>{item.role}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium">
                          <span className={`flex items-center gap-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            <Briefcase size={14} /> {item.organization}
                          </span>
                          <span className={`flex items-center gap-1 ${textMuted}`}>
                            <Calendar size={14} /> {item.period}
                          </span>
                        </div>
                      </div>
                      
                      <p className={`text-sm leading-relaxed mb-6 relative z-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-xs px-3 py-1 rounded-full border font-mono ${isDark ? 'bg-primary/10 border-primary/20 text-primary-light shadow-inner shadow-primary/10' : 'bg-primary/5 border-primary/20 text-primary-dark'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Subtle hover glow effect */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none transition-opacity duration-500 blur-xl" />
                    </TiltCard>
                  </div>
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className={`py-24 relative overflow-hidden ${isDark ? 'bg-slate-950/50' : 'bg-slate-50/50'}`}>
         {/* Ambient background glows */}
         <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-accent-cyan/[0.02]' : 'bg-accent-cyan/[0.03]'}`} />
         
         <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Foundation</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className={`group relative h-full p-8 rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 backdrop-blur-xl ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800/70 hover:border-primary/40 shadow-xl shadow-black/20' 
                    : 'bg-white/95 border-slate-200/80 hover:border-primary/40 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)] hover:-translate-y-1'
                }`}>
                  
                  {/* Decorative background element */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent-pink/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out z-0 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${isDark ? 'bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 text-primary-light shadow-[inset_0_0_10px_rgba(126,91,240,0.2)]' : 'bg-primary/10 border border-primary/20 text-primary'}`}>
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-primary transition-colors`}>{edu.degree}</h3>
                        <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{edu.school}</p>
                      </div>
                    </div>
                    
                    <div className={`space-y-3 mb-6 p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-primary/[0.03] border-primary/10'}`}>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar size={16} className={isDark ? 'text-primary' : 'text-primary-dark'} />
                        <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-700 font-medium'}>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin size={16} className={isDark ? 'text-primary' : 'text-primary-dark'} />
                        <span className={isDark ? 'text-slate-300 font-medium' : 'text-slate-700 font-medium'}>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className={`text-sm font-medium px-4 py-2 rounded-lg inline-block mb-6 border ${isDark ? 'bg-slate-800 border-slate-700 text-primary-light' : 'bg-primary/[0.06] border-primary/15 text-primary-dark'}`}>
                       {edu.details}
                    </p>
                  </div>

                  <div className={`relative z-10 pt-6 border-t ${isDark ? 'border-slate-800/70' : 'border-slate-200/60'}`}>
                    <p className={`text-[11px] font-bold ${textMuted} uppercase tracking-wider mb-2`}>Core Disciplines</p>
                    <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{edu.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
