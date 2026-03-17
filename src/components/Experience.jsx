import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, GraduationCap, MapPin, ChevronRight, X } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants/data';
import { TiltCard } from './ui/TiltCard';

export const Experience = ({ isDark, textMuted, cardClass, experienceRef }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const { scrollYProgress: expProgress } = useScroll({
    target: experienceRef,
    offset: ["start center", "end center"]
  });
  
  const featuredRoles = EXPERIENCE_DATA.filter(role => role.id === 1 || role.id === 3);
  const additionalRoles = EXPERIENCE_DATA.filter(role => role.id !== 1 && role.id !== 3);

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
            {/* Center Timeline Line - Constrained to just the featured roles container */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] transform md:-translate-x-1/2">
              <div className={`w-full h-full ${isDark ? 'bg-slate-800' : 'bg-gray-200'}`} />
              <motion.div
                style={{ height: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-light via-primary to-accent-pink shadow-[0_0_15px_rgba(126,91,240,0.5)]"
              />
            </div>

            <div className="space-y-20 pb-12">
              {featuredRoles.map((item, index) => (
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

          {additionalRoles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32 pt-16 border-t border-slate-200/50 dark:border-slate-800/50 relative z-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Previous Experience</h3>
                <p className={textMuted}>Additional roles shaping my professional journey.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalRoles.map((role, idx) => (
                  <motion.div 
                    key={role.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    onClick={() => setSelectedRole(role)}
                    className={`cursor-pointer p-6 rounded-2xl flex flex-col h-full group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 ${
                      isDark 
                        ? 'bg-slate-900/50 border border-slate-800 hover:bg-slate-900/80 hover:border-primary/40 shadow-lg hover:shadow-[0_15px_40px_rgba(126,91,240,0.15)]' 
                        : 'bg-white border border-slate-200 hover:border-primary/30 shadow-md hover:shadow-[0_15px_40px_rgba(126,91,240,0.08)]'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3 gap-4">
                         <h4 className={`text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-primary transition-colors`}>
                           {role.role}
                         </h4>
                         {role.period.includes('Present') && (
                           <span className="shrink-0 flex h-2.5 w-2.5 mt-1 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                           </span>
                         )}
                      </div>
                      <div className="flex flex-col gap-2 mb-5 text-sm font-medium">
                        <span className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          <Briefcase size={15} className={isDark ? "text-indigo-400" : "text-indigo-600"} /> {role.organization}
                        </span>
                        <span className={`flex items-center gap-2 ${textMuted} text-xs`}>
                           <Calendar size={14} className={isDark ? "text-indigo-400/70" : "text-indigo-600/70"} /> {role.period}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {role.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-200/60 dark:border-slate-800/80">
                      {role.tags.slice(0, 3).map(tag => (
                         <span key={tag} className={`text-xs px-3 py-1.5 rounded-full font-medium ${isDark ? 'bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-colors' : 'bg-primary/5 text-primary-dark border border-primary/20 hover:bg-primary/10 transition-colors'}`}>
                           {tag}
                         </span>
                      ))}
                      {role.tags.length > 3 && (
                         <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                           +{role.tags.length - 3}
                         </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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

      {/* MODAL OVERLAY */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl ${
                isDark 
                  ? 'bg-slate-900 border-slate-700/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' 
                  : 'bg-white border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)]'
              }`}
            >
              <div className="sticky top-0 right-0 flex justify-end p-4 pointer-events-none z-10">
                <button
                  onClick={() => setSelectedRole(null)}
                  className={`pointer-events-auto p-2 rounded-full transition-colors ${
                    isDark 
                      ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white backdrop-blur-md border border-slate-700' 
                      : 'bg-white/80 hover:bg-slate-100 text-slate-500 hover:text-slate-900 backdrop-blur-md border border-slate-200'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-8 pb-8 pt-2">
                 <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className={`text-2xl font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {selectedRole.role}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col gap-3 mb-8 text-base font-medium">
                    <span className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Briefcase size={18} className={isDark ? "text-indigo-400" : "text-indigo-600"} /> {selectedRole.organization}
                    </span>
                    <span className={`flex items-center gap-2 ${textMuted} text-sm`}>
                       <Calendar size={18} className={isDark ? "text-indigo-400/70" : "text-indigo-600/70"} /> {selectedRole.period}
                    </span>
                    {selectedRole.location && (
                      <span className={`flex items-center gap-2 ${textMuted} text-sm`}>
                         <MapPin size={18} className={isDark ? "text-indigo-400/70" : "text-indigo-600/70"} /> {selectedRole.location}
                      </span>
                    )}
                  </div>
                  
                  <div className={`prose prose-sm max-w-none mb-10 ${isDark ? 'text-slate-300 prose-invert' : 'text-slate-600'}`}>
                    <p className="leading-relaxed text-[15px] whitespace-pre-wrap">{selectedRole.description}</p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
                     <p className={`text-xs font-bold ${textMuted} uppercase tracking-wider mb-4`}>Skills & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedRole.tags.map(tag => (
                         <span key={tag} className={`text-sm px-4 py-2 rounded-full font-medium ${isDark ? 'bg-primary/10 text-primary-light border border-primary/20' : 'bg-primary/5 text-primary-dark border border-primary/20'}`}>
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
