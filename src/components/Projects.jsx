import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, ShieldCheck, Code, Lock, Globe, Image as ImageIcon, Mic, Activity, Brain, X, Zap, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';

/* ─── Spotlight Card with 3D Tilt ─── */
const SpotlightCard = ({ children, className = '', tilt = false, onClick, isDark }) => {
  const cardRef = useRef(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    setSpotlightPos({ x: px, y: py });
    if (tilt) {
      x.set(px / rect.width - 0.5);
      y.set(py / rect.height - 0.5);
    }
  }, [tilt, x, y]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      className={`relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ${className}`}
    >
      {/* Spotlight radial glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(126,91,240,0.08), transparent 40%)`,
          }}
        />
      )}
      {/* Gradient border glow on hover */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
        style={{ background: isDark
          ? 'linear-gradient(135deg, rgba(126,91,240,0.3), rgba(244,114,182,0.2), rgba(34,211,238,0.2))'
          : 'linear-gradient(135deg, rgba(126,91,240,0.2), rgba(244,114,182,0.15), rgba(34,211,238,0.15))'
        }}
      />
      {/* Card inner bg */}
      <div className={`absolute inset-[1px] rounded-2xl z-0 ${isDark ? 'bg-[#0d1220]' : 'bg-white'}`} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

/* ─── Browser Preview ─── */
const BrowserPreview = ({ project }) => {
  const IconComponent = {
    code: Code, lock: Lock, globe: Globe, image: ImageIcon,
    mic: Mic, activity: Activity, brain: Brain,
  }[project.icon] || Code;

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br ${project.visual?.gradient || 'from-slate-800 to-slate-900'}`}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      {/* Large background icon */}
      <div className="absolute -right-8 -bottom-8 opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700">
        <IconComponent size={280} className="text-white" />
      </div>
      {/* Browser chrome */}
      <div className="absolute inset-4 md:inset-5 rounded-xl border border-white/[0.08] bg-black/30 backdrop-blur-sm shadow-2xl flex flex-col overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">
        <div className="h-9 bg-black/50 border-b border-white/[0.06] flex items-center px-4 gap-2 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="ml-3 flex-1 h-5 bg-white/[0.06] rounded-md flex items-center px-3">
            <span className="text-[10px] text-white/30 font-mono truncate">{project.github.split('/').pop()}</span>
          </div>
        </div>
        <div className="flex-1 p-5 font-mono text-xs text-white/50 relative overflow-hidden">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="text-purple-400/60">const</span>
              <span className="text-cyan-400/60">app</span>
              <span className="text-white/30">=</span>
              <span className="text-amber-400/50">{`{`}</span>
            </div>
            <div className="pl-4 flex items-center gap-2">
              <span className="text-white/30">name:</span>
              <span className="text-green-400/60">"{project.title}"</span>
            </div>
            <div className="pl-4 flex items-center gap-2">
              <span className="text-white/30">status:</span>
              <span className="text-green-400/60">"deployed"</span>
            </div>
            <div className="w-3/4 h-1.5 bg-white/[0.04] rounded mt-3 animate-pulse" />
            <div className="w-1/2 h-1.5 bg-white/[0.03] rounded" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

/* ─── Metric Chip ─── */
const MetricChip = ({ label, isDark }) => (
  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border
    ${isDark
      ? 'bg-primary/15 text-primary-light border-primary/20'
      : 'bg-primary/[0.08] text-primary-dark border-primary/20'
    }`}>
    <Zap size={10} className="opacity-70" />
    {label}
  </span>
);

/* ─── Featured Project Card ─── */
const FeaturedCard = ({ project, index, onSelect, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
  >
    <SpotlightCard
      tilt
      isDark={isDark}
      onClick={() => onSelect(project)}
      className={`border ${isDark ? 'border-white/[0.06] hover:border-primary/30' : 'border-slate-200/80 hover:border-primary/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)]'}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Visual */}
        <div className="h-64 lg:h-auto lg:min-h-[380px]">
          <BrowserPreview project={project} />
        </div>

        {/* Content */}
        <div className="p-7 md:p-8 flex flex-col">
          {/* Metrics row */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.metrics?.slice(0, 4).map(m => <MetricChip key={m} label={m} isDark={isDark} />)}
          </div>

          <h3 className={`text-2xl md:text-3xl font-bold mb-1 group-hover:text-primary transition-colors
            ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <p className={`text-sm font-medium mb-4 ${isDark ? 'text-primary-light/80' : 'text-primary'}`}>{project.tagline}</p>

          {/* Impact */}
          <p className={`text-sm leading-relaxed mb-5 border-l-2 border-primary/40 pl-4
            ${isDark ? 'text-slate-300/90' : 'text-slate-600'}`}>
            {project.impact}
          </p>

          {/* Key features */}
          <div className="space-y-2 mb-6 flex-grow">
            {project.features?.slice(0, 3).map((f, i) => (
              <div key={i} className={`flex items-start gap-2.5 text-[13px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <ShieldCheck size={14} className="text-primary/60 mt-0.5 shrink-0" />
                <span className="line-clamp-2">{f}</span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 5).map(t => (
              <span key={t} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border
                ${isDark
                  ? 'bg-white/[0.06] text-slate-400 border-white/[0.08]'
                  : 'bg-primary/[0.05] text-primary-dark border-primary/15'
                }`}>
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border
                ${isDark ? 'bg-white/[0.04] text-slate-500 border-white/[0.06]' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            <a href={project.github} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30">
              <Github size={16} /> Source Code
            </a>
            <a href={project.link} target="_blank" rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all
                ${isDark
                  ? 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 border-white/[0.08] hover:border-white/[0.15]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                }`}>
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

/* ─── Secondary Project Card ─── */
const SecondaryCard = ({ project, index, onSelect, isDark }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <SpotlightCard
      isDark={isDark}
      onClick={() => onSelect(project)}
      className={`border h-full ${isDark
        ? 'border-white/[0.06] hover:border-primary/25'
        : 'border-slate-200/80 hover:border-primary/30 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(126,91,240,0.12)]'
      }`}
    >
      {/* Browser preview */}
      <div className="h-44">
        <BrowserPreview project={project} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-11rem)]">
        {/* Metrics */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.metrics?.slice(0, 3).map(m => <MetricChip key={m} label={m} isDark={isDark} />)}
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-lg font-bold group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {project.title}
          </h3>
          <ArrowUpRight size={18} className={`${isDark ? 'text-slate-500' : 'text-slate-400'} group-hover:text-primary transition-colors shrink-0 mt-0.5`} />
        </div>
        <p className={`text-xs font-medium mb-3 ${isDark ? 'text-primary-light/70' : 'text-primary'}`}>{project.tagline}</p>
        <p className={`text-sm leading-relaxed mb-4 flex-grow line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map(t => (
            <span key={t} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border
              ${isDark
                ? 'bg-white/[0.06] text-slate-400 border-white/[0.08]'
                : 'bg-primary/[0.05] text-primary-dark border-primary/15'
              }`}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border
              ${isDark ? 'bg-white/[0.04] text-slate-500 border-white/[0.06]' : 'bg-slate-50 text-slate-400 border-slate-200'}`}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all
              ${isDark
                ? 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 border-white/[0.08]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
              }`}>
            <Github size={14} /> Code
          </a>
          <a href={project.link} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all
              ${isDark
                ? 'bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 border-white/[0.08]'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200'
              }`}>
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </SpotlightCard>
  </motion.div>
);

/* ─── Main Section ─── */
export const Projects = ({ isDark, textMuted }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const secondaryProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className={`relative py-28 overflow-hidden ${isDark ? 'bg-[#0B0F19]' : 'bg-slate-50/80'}`}>
      {/* Background ambient glows */}
      <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-primary/[0.04]' : 'bg-primary/[0.03]'}`} />
      <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-accent-pink/[0.03]' : 'bg-accent-pink/[0.02]'}`} />
      {/* Dot pattern overlay */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-[0.03]' : 'opacity-[0.03]'}`}
        style={{ backgroundImage: `radial-gradient(${isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.3)'} 1px, transparent 1px)`, backgroundSize: '28px 28px' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-6
              ${isDark
                ? 'bg-primary/10 border-primary/20 text-primary-light'
                : 'bg-primary/[0.08] border-primary/20 text-primary-dark'
              }`}
          >
            <Zap size={12} /> Product-Focused Builds
          </motion.div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured Projects
          </h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Selected builds showcasing full-stack engineering, AI systems, and cloud architecture.
          </p>
        </motion.div>

        {/* Featured Project Cards */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} onSelect={setSelectedProject} isDark={isDark} />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className={`h-px mb-16 ${isDark
            ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
            : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
          }`}
        />

        {/* Secondary Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>More Projects</h3>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Additional builds spanning cloud, AI, and web platforms.</p>
        </motion.div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {secondaryProjects.map((project, i) => (
            <SecondaryCard key={project.title} project={project} index={i} onSelect={setSelectedProject} isDark={isDark} />
          ))}
        </div>
      </div>

      {/* ─── Project Detail Modal ─── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-lg ${isDark ? 'bg-black/80' : 'bg-slate-900/60'}`}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border shadow-2xl
                ${isDark
                  ? 'border-white/[0.08] bg-[#0d1220]'
                  : 'border-slate-200 bg-white shadow-black/10'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`sticky top-0 z-20 flex items-center justify-between px-8 py-5 border-b backdrop-blur-xl
                ${isDark ? 'border-white/[0.06] bg-[#0d1220]/95' : 'border-slate-100 bg-white/95'}`}>
                <div>
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">{selectedProject.title}</h2>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{selectedProject.tagline}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className={`p-2 rounded-full transition-colors ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/[0.06]' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}>
                  <X size={22} />
                </button>
              </div>

              <div className="p-8 space-y-8">
                {/* Impact */}
                {selectedProject.impact && (
                  <div className={`p-5 rounded-xl border ${isDark ? 'bg-primary/[0.06] border-primary/15' : 'bg-primary/[0.04] border-primary/15'}`}>
                    <p className={`text-sm font-medium flex items-center gap-2 ${isDark ? 'text-primary-light' : 'text-primary-dark'}`}>
                      <Zap size={14} /> {selectedProject.impact}
                    </p>
                  </div>
                )}

                {/* Description */}
                <div className={`p-6 rounded-xl border ${isDark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-slate-50/80 border-slate-100'}`}>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Problem & Impact</h3>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{selectedProject.detailedDescription}</p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Architecture & Features</h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-start gap-3 p-4 rounded-xl border
                          ${isDark ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-white border-slate-100 shadow-sm'}`}>
                          <ShieldCheck size={16} className="text-primary/60 mt-0.5 shrink-0" />
                          <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border
                        ${isDark ? 'bg-primary/[0.08] text-primary-light border-primary/15' : 'bg-primary/[0.06] text-primary-dark border-primary/15'}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25">
                    <Github size={20} /> View Source Code
                  </a>
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl border font-bold transition-all
                    ${isDark
                      ? 'bg-white/[0.06] hover:bg-white/[0.1] text-white border-white/[0.08]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border-slate-200 shadow-sm'
                    }`}>
                    <ExternalLink size={20} /> Open Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
