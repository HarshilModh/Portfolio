import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import './ScrollChapters.css';

function Chapter({ children, index, count, progress, active }) {
  const start = index / count;
  const end = (index + 1) / count;
  const blend = 0.1 / count;
  const range = index === 0 ? [0, end - blend, end + blend]
    : index === count - 1 ? [start - blend, start + blend, 1]
    : [start - blend, start + blend, end - blend, end + blend];
  const opacity = useTransform(progress, range, index === 0 ? [1, 1, 0] : index === count - 1 ? [0, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, range, index === 0 ? [0, 0, -65] : index === count - 1 ? [65, 0, 0] : [65, 0, 0, -65]);
  const scale = useTransform(progress, range, index === 0 ? [1, 1, 1.08] : index === count - 1 ? [0.94, 1, 1] : [0.94, 1, 1, 1.08]);
  const fill = useTransform(progress, [start, start + 0.65 / count], ['inset(100% 0 0 0)', 'inset(0% 0 0 0)']);
  return <motion.article className="scroll-chapter" style={{ opacity, y, scale, '--chapter-fill': fill }} aria-hidden={!active} inert={active ? undefined : ''}>{children}</motion.article>;
}

export function ScrollChapters({ chapters, className, label }) {
  const ref = useRef(null);
  const buttons = useRef([]);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', value => setActive(Math.min(chapters.length - 1, Math.floor(value * chapters.length))));

  useEffect(() => {
    const hidden = [...ref.current.querySelectorAll('.scroll-chapter[aria-hidden="true"]')];
    if (hidden.some(panel => panel.contains(document.activeElement))) buttons.current[active]?.focus({ preventScroll: true });
  }, [active]);

  function goTo(index) {
    const start = ref.current.getBoundingClientRect().top + window.scrollY;
    const travel = ref.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + travel * ((index + 0.45) / chapters.length), behavior: 'smooth' });
  }

  return (
    <div className={`scroll-chapters ${className}`} ref={ref} style={{ '--chapter-length': `${chapters.length * 105}svh` }}>
      <div className="scroll-chapters-pin">
        <div className="scroll-chapters-panels">{chapters.map((chapter, index) => <Chapter key={chapter.label} index={index} count={chapters.length} progress={scrollYProgress} active={active === index}>{chapter.content}</Chapter>)}</div>
        <div className="scroll-chapters-controls">
          <div className="scroll-chapters-buttons" aria-label={label}>{chapters.map((chapter, index) => <button key={chapter.label} ref={node => { buttons.current[index] = node; }} aria-pressed={index === active} onClick={() => goTo(index)}><span>0{index + 1}</span> {chapter.label}</button>)}</div>
          <span className="chapter-scroll-note">SCROLL TO EXPLORE ↓</span>
          <div className="chapter-track" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
        </div>
      </div>
    </div>
  );
}
