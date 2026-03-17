import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECHNICAL_ARSENAL, SKILL_CATEGORIES } from '../constants/data';
import { TiltCard } from './ui/TiltCard';
import { SkillIcon } from '../utils/SkillIcon';

export const Skills = ({ isDark, textMuted, cardClass }) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All"
    ? TECHNICAL_ARSENAL.filter(skill => skill.featured)
    : TECHNICAL_ARSENAL.filter(skill => skill.category.includes(activeTab));

  return (
    <section id="skills" className={`py-24 relative overflow-hidden ${isDark ? 'bg-background-dark/50' : 'bg-slate-50/80'}`}>
      {/* Ambient background glows */}
      <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-primary/[0.04]' : 'bg-primary/[0.03]'}`} />
      <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-accent-cyan/[0.03]' : 'bg-accent-cyan/[0.03]'}`} />
      
      {/* Subtle dot pattern */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${isDark ? 'opacity-5' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: isDark 
            ? 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          {activeTab === "All" && (
            <p className={`mt-4 text-sm ${textMuted}`}>Displaying core technologies. Filter for complete list.</p>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : `${isDark ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-white text-slate-600 hover:text-primary border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md'}`
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={skill.name}
              >
                <TiltCard className={`p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 group cursor-default h-full transition-all duration-300
                  ${isDark 
                    ? 'bg-background-card border-slate-800 hover:border-primary/50 shadow-xl shadow-black/20' 
                    : 'bg-white border-slate-200/80 hover:border-primary/40 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(126,91,240,0.12)] hover:-translate-y-1'
                  }`}
                >
                  <div className={`w-10 h-10 ${skill.color} transition-transform duration-300 group-hover:scale-110 drop-shadow-sm`}>
                    <SkillIcon icon={skill.icon} category={skill.category} className="w-full h-full" />
                  </div>
                  <div className="text-center">
                    <h3 className={`font-bold text-sm md:text-base ${isDark ? 'text-white' : 'text-slate-800'} group-hover:text-primary transition-colors`}>{skill.name}</h3>
                    <p className={`text-[10px] uppercase tracking-wider ${textMuted}`}>{skill.category}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
