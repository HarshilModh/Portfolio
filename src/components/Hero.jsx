import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { PROFILE } from '../constants/data';
import { useScrollScene } from '../utils/useScrollScene';
import { HeroStory } from './HeroStory';

const BUILDS = ['full-stack products', 'AI systems', 'reliable backends', 'developer tools'];

// The name arrives one letter at a time; the shared offset keeps the stagger
// running across both words.
function NameLetters({ word, offset }) {
  return [...word].map((character, index) => (
    <span className="hero-letter" style={{ '--l': offset + index }} key={`${character}-${index}`}>{character}</span>
  ));
}

function StaticHero() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [buildIndex, setBuildIndex] = useState(0);

  // Only the name moves; personal copy stays readable while the page scrolls.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, 65]);
  const nameFill = useTransform(scrollYProgress, [0, 0.32], ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']);
  const asteriskRotate = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const discRotate = useTransform(scrollYProgress, [0, 1], [0, 26]);

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    if (!reducedMotion) setBuildIndex(Math.min(BUILDS.length - 1, Math.floor(progress * 7)));
  });

  return (
    <section className="hero" id="home" aria-labelledby="hero-title" ref={sectionRef}>
      <div className="container hero-inner">
        <div className="hero-kicker">
          <span><span className="status-dot" /> Full-stack & AI engineer</span>
          <span>Portfolio — {new Date().getFullYear()}</span>
        </div>
        <motion.div className="hero-name-motion" style={reducedMotion ? undefined : { scale, y }}>
        <h1 id="hero-title" className="hero-name" aria-label={PROFILE.name}>
          <span className="hero-word" aria-hidden="true"><NameLetters word="HARSHIL" offset={0} /></span>
          <span className="hero-space" aria-hidden="true"> </span>
          <span className="hero-word hero-word-outline" aria-hidden="true"><NameLetters word="MODH" offset={7} /><motion.span className="hero-word-fill" style={{ clipPath: reducedMotion ? 'inset(100% 0 0 0)' : nameFill }}><NameLetters word="MODH" offset={7} /></motion.span></span>
        </h1>
        </motion.div>
        <p className="hero-identity">
          <span className="identity-role">Software Engineer</span>
          <span className="identity-place">{PROFILE.socials.location}</span>
        </p>
        <div className="hero-bottom">
          <div className="hero-note"><motion.span className="asterisk" aria-hidden="true" style={reducedMotion ? undefined : { rotate: asteriskRotate }}>✳</motion.span><span><span className="hero-about-label">A LITTLE ABOUT ME</span>Curious by nature.<br />{' '}Engineer by practice.</span></div>
          <div className="hero-intro">
            <p className="hero-statement">
              <span className="sr-only">I build full-stack products, AI systems, reliable backends, and developer tools.</span>
              <span aria-hidden="true">I build
              <span className="rotator" aria-hidden="true">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={BUILDS[buildIndex]}
                    initial={reducedMotion ? false : { y: '0.75em', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reducedMotion ? undefined : { y: '-0.75em', opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  >{BUILDS[buildIndex]}</motion.span>
                </AnimatePresence>
              </span>
              </span>
            </p>
            <p className="hero-description">I’m Harshil, a software engineer based in Jersey City, NJ. I build full-stack applications and AI tools, connecting thoughtful interfaces with the APIs, data, and infrastructure behind them.</p>
            <p className="hero-description">I like understanding the whole system: how it feels to use, where it gets slow, and what makes it reliable. Along the way, I mentor developers and build open-source tools that make everyday work easier. <a href="#about">More about me <ArrowUpRight size={13} /></a></p>
            <div className="hero-links">
              <a href={PROFILE.resume} download="Harshil-Modh-Resume.pdf"><Download size={16} /> Resume</a>
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <motion.a className="work-disc" href="#projects" aria-label="Explore my work" style={reducedMotion ? undefined : { rotate: discRotate }}>
            <span>EXPLORE<br />{' '}THE WORK</span><ArrowDown size={34} strokeWidth={1.5} />
          </motion.a>
        </div>
        <motion.div className="hero-baseline" style={reducedMotion ? undefined : { opacity: cueOpacity }}>
          <span>Software. Systems. A little obsession.</span>
          <span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
        </motion.div>
      </div>
    </section>
  );
}

export function Hero() {
  const enabled = useScrollScene();
  return enabled ? <HeroStory /> : <StaticHero />;
}
