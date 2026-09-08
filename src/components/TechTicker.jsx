import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { TechLogo } from '../utils/TechLogo';

// The label carries the short name; the key matches the brand mark in TechLogo.
const TICKER_ITEMS = [
  { key: 'React', label: 'React' },
  { key: 'TypeScript', label: 'TypeScript' },
  { key: 'Node.js', label: 'Node' },
  { key: 'Python', label: 'Python' },
  { key: 'FastAPI', label: 'FastAPI' },
  { key: 'PostgreSQL', label: 'Postgres' },
  { key: 'Redis', label: 'Redis' },
  { key: 'Claude', label: 'Claude' },
  { key: 'LangChain', label: 'LangChain' },
  { key: 'AWS EC2 / S3 / Bedrock', label: 'AWS' },
  { key: 'Docker', label: 'Docker' },
  { key: 'Next.js', label: 'Next.js' },
  { key: 'MongoDB', label: 'MongoDB' },
  { key: 'GitHub Actions', label: 'CI/CD' },
];

export function TechTicker() {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  // Scrolling the page drives the strip sideways, so the motion always tracks the reader.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);

  return (
    <div className="ticker" ref={ref} aria-hidden="true">
      <motion.div className="ticker-track" style={reducedMotion ? undefined : { x }}>
        {[0, 1, 2].map(copy => (
          <div className="ticker-row" key={copy}>
            {TICKER_ITEMS.map(item => (
              <span className="ticker-item" key={item.key}><TechLogo name={item.key} />{item.label}</span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
