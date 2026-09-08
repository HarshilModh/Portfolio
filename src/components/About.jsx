import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ABOUT } from '../constants/data';
import { useCountUp } from '../utils/useCountUp';

// Each word lifts out of the muted baseline as the sentence scrolls through the viewport.
function Word({ children, progress, range, reducedMotion }) {
  const opacity = useTransform(progress, range, [0.24, 1]);
  return <motion.span style={reducedMotion ? undefined : { opacity }}>{children}{' '}</motion.span>;
}

function ScrollStatement({ text }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'end 55%'] });
  const words = text.split(' ');
  return (
    <p className="about-statement" ref={ref}>
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} progress={scrollYProgress} reducedMotion={reducedMotion} range={[index / words.length, (index + 1) / words.length]}>{word}</Word>
      ))}
    </p>
  );
}

function Stat({ stat, index }) {
  const [ref, display] = useCountUp(stat.value, stat.decimals ?? 0);
  return (
    <div className="stat" data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
      <strong ref={ref}>{display}<span>{stat.suffix}</span></strong>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export function About() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  // The two columns drift at different speeds, which gives the block a little depth on the way past.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const leadY = useTransform(scrollYProgress, [0, 1], [34, -34]);
  const copyY = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-lead" data-reveal>
            <motion.div style={reducedMotion ? undefined : { y: leadY }}>
              <span className="eyebrow section-index">04 / A LITTLE ABOUT ME</span>
              <h2 id="about-title">WHAT I<br />{' '}ACTUALLY DO.</h2>
            </motion.div>
          </div>
          <div className="about-copy" data-reveal style={{ '--reveal-delay': '90ms' }}>
            <motion.div style={reducedMotion ? undefined : { y: copyY }}>
              <ScrollStatement text={ABOUT.statement} />
              {ABOUT.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              <dl className="about-facts">
                {ABOUT.facts.map(fact => (
                  <div key={fact.label}><dt className="eyebrow">{fact.label}</dt><dd>{fact.value}</dd></div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
        <div className="about-stats">
          {ABOUT.stats.map((stat, index) => <Stat key={stat.label} stat={stat} index={index} />)}
        </div>
      </div>
    </section>
  );
}
