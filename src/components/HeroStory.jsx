import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { PROFILE } from '../constants/data';
import './HeroStory.css';

export function HeroStory() {
  const sectionRef = useRef(null);
  const chapterRefs = useRef([]);
  const [chapter, setChapter] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const nameScale = useTransform(scrollYProgress, [0, 0.24, 0.48], [1, 1.12, 1.3]);
  const nameY = useTransform(scrollYProgress, [0, 0.24, 0.48], [0, -12, -90]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.28, 0.46], [1, 1, 0]);
  const nameFill = useTransform(scrollYProgress, [0.04, 0.28], ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']);
  const aboutOpacity = useTransform(scrollYProgress, [0.41, 0.58, 1], [0, 1, 1]);
  const aboutY = useTransform(scrollYProgress, [0.41, 0.62], [80, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.41, 0.62], [0.94, 1]);
  const starRotate = useTransform(scrollYProgress, [0, 1], [-35, 100]);

  useMotionValueEvent(scrollYProgress, 'change', value => setChapter(value < 0.48 ? 0 : 1));

  useEffect(() => {
    const hiddenPanel = sectionRef.current.querySelector('.hero-scene-panel[aria-hidden="true"]');
    if (hiddenPanel?.contains(document.activeElement)) chapterRefs.current[chapter]?.focus({ preventScroll: true });
  }, [chapter]);

  function goToChapter(index) {
    const section = sectionRef.current;
    const start = section.getBoundingClientRect().top + window.scrollY;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + travel * (index === 0 ? 0 : 0.7), behavior: 'smooth' });
  }

  return (
    <section id="home" ref={sectionRef} className="hero hero-scene" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">Harshil Modh — Software Engineer in Jersey City, NJ</h1>
      <div className="hero-scene-pin">
        <div className="container hero-scene-stage">
          <div className="hero-scene-top eyebrow"><span><span className="status-dot" /> FULL-STACK & AI ENGINEER</span><span>{PROFILE.socials.location}</span></div>
          <div className="hero-scene-canvas">
            <motion.div className="hero-scene-panel hero-scene-opening" style={{ opacity: nameOpacity, scale: nameScale, y: nameY }} aria-hidden={chapter !== 0} inert={chapter !== 0 ? '' : undefined}>
              <p className="scene-name" aria-hidden="true"><span>HARSHIL</span><span className="scene-surname">MODH<motion.span style={{ clipPath: nameFill }}>MODH</motion.span></span></p>
              <div className="hero-scene-opening-bottom"><div className="hero-opening-intro"><p>Software engineer.<br /><span>Curious about the whole picture.</span></p><p className="hero-opening-bio">Full-stack apps and AI tools, from the interface to the infrastructure behind it.</p></div><div className="hero-opening-actions"><a className="hero-project-link" href="#projects">View selected work <ArrowDown size={17} /></a><button onClick={() => goToChapter(1)} className="scene-scroll-cue">MORE ABOUT ME <ArrowDown size={19} strokeWidth={1.5} /></button></div></div>
            </motion.div>
            <motion.div className="hero-scene-panel hero-scene-about" style={{ opacity: aboutOpacity, y: aboutY, scale: aboutScale }} aria-hidden={chapter !== 1} inert={chapter !== 1 ? '' : undefined}>
              <div className="scene-about-heading"><motion.span className="scene-star" aria-hidden="true" style={{ rotate: starRotate }}>✳</motion.span><span className="eyebrow">A LITTLE ABOUT ME</span><h2>I BUILD<br />{' '}THE WHOLE<br />{' '}<span>THING.</span></h2></div>
              <div className="scene-about-copy"><p className="scene-about-lead">From the first interface<br />to the systems behind it.</p><p>I’m Harshil, a software engineer based in Jersey City, NJ. I build full-stack applications and AI tools, connecting thoughtful interfaces with the APIs, data, and infrastructure behind them.</p><div className="hero-links"><a href={PROFILE.resume} download="Harshil-Modh-Resume.pdf"><Download size={16} /> Resume</a><a href={PROFILE.socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a><a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a></div><a className="scene-next-link" href="#skills">Explore the toolkit <ArrowDown size={17} /></a></div>
            </motion.div>
          </div>
          <div className="hero-scene-controls"><div className="scene-chapters">{['Introduction', 'About me'].map((label, index) => <button key={label} ref={node => { chapterRefs.current[index] = node; }} aria-pressed={chapter === index} onClick={() => goToChapter(index)}><span>0{index + 1}</span> {label}</button>)}</div><span className="scene-control-note">SCROLL TO DISCOVER <ArrowDown size={14} /></span><div className="hero-scene-track" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div></div>
        </div>
      </div>
    </section>
  );
}
