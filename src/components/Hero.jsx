import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ArrowRight, BarChart, GraduationCap, ShieldCheck } from 'lucide-react';
import { TypewriterText } from './ui/TypewriterText';
import { TiltCard } from './ui/TiltCard';
import { CodeTerminal } from './ui/CodeTerminal';
import { PROFILE } from '../constants/data';

const HeroHUD = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    window.addEventListener('resize', resize);
    resize();

    let time = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const gridColor = isDark ? 'rgba(126, 91, 240, 0.15)' : 'rgba(126, 91, 240, 0.2)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
          const y = height - 50 - (i * 20) + Math.sin((x + time * 50) * 0.005) * 15;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.005);
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.3)' : 'rgba(126, 91, 240, 0.35)';
      ctx.setLineDash([20, 15]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 260, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-time * 0.008);
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.5)' : 'rgba(126, 91, 240, 0.55)';
      ctx.setLineDash([]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.stroke();

      for (let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 / 3) * i;
        const px = Math.cos(angle) * 220;
        const py = Math.sin(angle) * 220;
        ctx.fillStyle = '#7E5BF0';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.strokeStyle = isDark ? 'rgba(126, 91, 240, 0.8)' : 'rgba(126, 91, 240, 0.7)';
      ctx.arc(0, 0, 100, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return <canvas ref={canvasRef} className="w-full h-full absolute inset-0 pointer-events-none opacity-60" />;
};

export const Hero = ({ isDark, textMuted, headingGradient }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 mt-16 lg:mt-0 bg-transparent">
      {/* Dynamic Background Meshes for Hero */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow opacity-30 ${isDark ? 'bg-primary-dark/40' : 'bg-primary/20 mix-blend-multiply'}`} style={{ top: '-10%', left: '-10%' }}></div>
        <div className={`absolute w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] animate-float opacity-30 ${isDark ? 'bg-accent-pink/20' : 'bg-accent-pink/20 mix-blend-multiply'}`} style={{ top: '20%', right: '-15%' }}></div>
        <div className={`absolute w-80 h-80 rounded-full mix-blend-screen filter blur-[90px] animate-pulse-slow delay-1000 opacity-30 ${isDark ? 'bg-accent-cyan/20' : 'bg-primary-light/30 mix-blend-multiply'}`} style={{ bottom: '-10%', left: '20%' }}></div>
      </div>

      <HeroHUD isDark={isDark} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex flex-col justify-center"
        >
          {/* Tagline & Availability */}
          <div className="mb-4 inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
             <div className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 backdrop-blur-md flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Summer 2026 SDE Roles
             </div>
             <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
                MSCS @ Stevens Institute of Technology
             </span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight ${headingGradient}`}>
            Harshil
            <br />
            Modh
          </h1>
          
          <h2 className={`text-xl md:text-2xl font-medium mb-6 min-h-[2.5rem] tracking-wide ${textMuted}`}>
            I am a <TypewriterText texts={PROFILE.roles} />
          </h2>
          
          <p className={`text-lg md:text-xl leading-relaxed ${textMuted} mb-10 max-w-lg mx-auto lg:mx-0 font-light`}>
            Engineering autonomous AI agents and scalable cloud solutions. 
            Merging advanced backend architecture with immersive frontend experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14 mt-4">
            <a href="#projects" className="group relative px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(126,91,240,0.4)] hover:shadow-[0_0_30px_rgba(126,91,240,0.6)] flex items-center justify-center overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </a>
            <a href="https://drive.google.com/file/d/11q8XV8EC3hLhWIfLDSm_A3ppqWG3a6SI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`px-8 py-3.5 border font-semibold rounded-full transition-all flex items-center justify-center gap-2 ${isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'border-slate-200 bg-white/50 hover:bg-white hover:shadow-md text-slate-900'} backdrop-blur-xl`}>
               <Download size={18} />
               Download Resume
            </a>
          </div>

          {/* Proof Chips */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-lg mx-auto lg:mx-0">
            <div className={`glass-card p-5 flex flex-col items-center justify-center group ${isDark ? 'bg-white/[0.03] border-white/10' : ''}`}>
               <GraduationCap className="text-accent-cyan mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
               <span className="font-bold text-xl text-accent-cyan">3.86</span>
               <span className="text-xs text-center font-medium opacity-80 mt-1">MSCS GPA</span>
            </div>
            <div className={`glass-card p-5 flex flex-col items-center justify-center group col-span-2 md:col-span-1 ${isDark ? 'bg-white/[0.03] border-white/10' : ''}`}>
               <ShieldCheck className="text-accent-pink mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
               <span className="font-bold text-xl text-accent-pink">AI/Fullstack</span>
               <span className="text-xs text-center font-medium opacity-80 mt-1">Products Built</span>
            </div>
            <div className={`glass-card p-5 flex flex-col items-center justify-center group ${isDark ? 'bg-white/[0.03] border-white/10' : ''}`}>
              <BarChart className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-bold text-xl text-primary">100+</span>
              <span className="text-xs text-center font-medium opacity-80 mt-1">Students Mentored</span>
            </div>
          </div>
        </motion.div>

        {/* Right column - 3D Composition */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative perspective-1000"
        >
          {/* Glowing orb behind the setup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
          
          <TiltCard className="relative z-10 w-full animate-float rounded-2xl">
             <CodeTerminal isDark={isDark} />
          </TiltCard>

          {/* Floating dynamic badges to give 3D depth */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className={`absolute -bottom-8 left-10 p-3 rounded-xl shadow-xl border backdrop-blur-md ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white/80 border-gray-200'} z-20 flex gap-2 items-center`}
          >
            <div className="w-8 h-8 rounded bg-yellow-400/20 flex items-center justify-center">
              <span className="text-yellow-500 font-bold">JS</span>
            </div>
            <div className="flex flex-col">
               <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>JavaScript</span>
               <span className="text-[10px] text-gray-500">System Ready</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10], rotate: [2, -2, 2] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className={`absolute -top-4 -right-4 p-3 rounded-xl shadow-xl border backdrop-blur-md ${isDark ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white/80 border-gray-200'} z-20 flex gap-2 items-center`}
          >
            <div className="w-8 h-8 rounded bg-accent-cyan/20 flex items-center justify-center">
              <span className="text-accent-cyan font-bold">AWS</span>
            </div>
            <div className="flex flex-col">
               <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Cloud Architecture</span>
               <span className="text-[10px] text-gray-500">Deployed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down chevron */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className={textMuted} size={24} />
      </motion.div>
    </section>
  );
};
