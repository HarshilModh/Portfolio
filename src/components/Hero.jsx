import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { PROFILE } from '../constants/data';

// The name arrives one letter at a time; the shared offset keeps the stagger running across both words.
function Letters({ word, offset }) {
  return [...word].map((character, index) => (
    <span className="hero-letter" style={{ '--l': offset + index }} key={`${character}-${index}`}>{character}</span>
  ));
}

// One screen: who, what, and the two things a visitor is most likely to want next.
// Scrolling away fills the outlined surname and lets the name drift back, so leaving the hero feels deliberate.
export function Hero() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const surnameFill = useTransform(scrollYProgress, [0, 0.42], ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']);
  const footY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const footOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" ref={sectionRef}>
      <div className="container hero-inner">
        <div className="hero-kicker">
          <span><span className="status-dot" /> Full-stack & AI engineer</span>
          <span>{PROFILE.socials.location}</span>
        </div>
        <motion.div className="hero-name-motion" style={reducedMotion ? undefined : { scale: nameScale, y: nameY }}>
          <h1 id="hero-title" className="hero-name" aria-label={PROFILE.name}>
            <span className="hero-word" aria-hidden="true"><Letters word="HARSHIL" offset={0} /></span>{' '}
            <span className="hero-word hero-surname" aria-hidden="true">
              <Letters word="MODH" offset={7} />
              {!reducedMotion && <motion.span className="hero-surname-fill" style={{ clipPath: surnameFill }}><Letters word="MODH" offset={7} /></motion.span>}
            </span>
          </h1>
        </motion.div>
        <motion.div className="hero-foot-motion" style={reducedMotion ? undefined : { y: footY, opacity: footOpacity }}>
          <div className="hero-foot">
            <p className="hero-lead">I build full-stack products and AI systems, from the first interface to the infrastructure behind it.</p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">View work <ArrowDown size={16} /></a>
              <a className="button button-outline" href={PROFILE.resume} download="Harshil-Modh-Resume.pdf"><Download size={16} /> Resume</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
