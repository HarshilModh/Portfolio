import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
  Moon, Sun, Github, Linkedin, Mail, ExternalLink,
  Code, Globe, GraduationCap, Briefcase, MapPin, Calendar, 
  Send, User, MessageSquare, X, Image as ImageIcon,
  Lock, Check, Brain, Mic, Activity
} from 'lucide-react';

// Data
import { 
  PROFILE, NAV_LINKS, TECHNICAL_ARSENAL, EXPERIENCE_DATA, 
  EDUCATION_DATA, PROJECTS, SKILL_CATEGORIES 
} from './constants/data';

// Components
import { SkillIcon } from './utils/SkillIcon';
import { TiltCard } from './components/ui/TiltCard';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

/**
 * MAIN APP COMPONENT
 */


/**
 * MAIN APP COMPONENT
 */
export default function App() {
  const [isDark, setIsDark] = useState(false); // Default to light mode
  const [activeTab, setActiveTab] = useState("All");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const experienceRef = useRef(null);

  const toggleTheme = () => setIsDark(!isDark);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    setTimeout(() => {
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${PROFILE.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1000);
  };

  const bgClass = isDark ? "bg-background-dark text-white" : "bg-white text-slate-900";
  const navClass = isDark ? "border-white/5 bg-background-dark/80" : "border-slate-100 bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-xl";
  const cardClass = isDark 
    ? "bg-background-card border-slate-800 shadow-xl shadow-black/20" 
    : "bg-white border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]";
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const headingGradient = isDark 
    ? "gradient-text-animated animate-text-gradient bg-gradient-to-r from-accent-cyan via-primary to-accent-pink"
    : "gradient-text-animated animate-text-gradient bg-gradient-to-r from-primary via-[#b95ce4] to-accent-pink";
  const inputClass = isDark 
    ? "bg-slate-800/50 border-slate-700 text-white focus:border-primary" 
    : "bg-slate-50 border-slate-200 text-slate-900 focus:border-primary focus:bg-white shadow-sm";

  // Add dark mode class to html element for tailwind
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div ref={scrollRef} className={`min-h-screen transition-colors duration-500 ${bgClass} overflow-x-hidden selection:bg-primary selection:text-white font-sans ${isDark ? 'dark' : ''}`}>
      {/* Global Noise Overlay for tactile feel */}
      <div className="noise-bg" />

      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" />

      {/* Nav */}
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-500 ${navClass}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">HM.</span>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-primary transition-colors ${textMuted}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a href={`https://${PROFILE.socials.github}`} target="_blank" rel="noopener noreferrer" className={`${textMuted} hover:text-primary transition`}><Github size={20} /></a>
              <a href={`https://${PROFILE.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className={`${textMuted} hover:text-primary transition`}><Linkedin size={20} /></a>
            </div>
            <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <Hero isDark={isDark} textMuted={textMuted} headingGradient={headingGradient} />

      {/* SKILLS SECTION */}
      <Skills isDark={isDark} textMuted={textMuted} cardClass={cardClass} />


      <Experience 
        isDark={isDark} 
        textMuted={textMuted} 
        cardClass={cardClass} 
        experienceRef={experienceRef} 
      />


      {/* PROJECTS SECTION */}
      <Projects isDark={isDark} textMuted={textMuted} />


      {/* CONTACT SECTION */}
      <Contact 
        isDark={isDark} 
        textMuted={textMuted} 
        cardClass={cardClass} 
        inputClass={inputClass} 
        formData={formData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit} 
        formStatus={formStatus} 
      />

      {/* GLOBAL MODAL IS NOW INSIDE PROJECTS COMPONENT */}


    </div>
  );
}
