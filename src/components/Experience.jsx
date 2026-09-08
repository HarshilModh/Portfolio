import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { ADDITIONAL_EXPERIENCE, EXPERIENCE_DATA } from '../constants/data';
import { useCountUp } from '../utils/useCountUp';
import { useScrollScene } from '../utils/useScrollScene';
import { ScrollChapters } from './ScrollChapters';

// Metrics read like "71K+" or "80%": count the leading number, keep the unit.
function Metric({ metric }) {
  const [, number, unit] = /^([\d.]*)(.*)$/.exec(metric);
  const decimals = number.includes('.') ? 1 : 0;
  const [ref, display] = useCountUp(Number(number) || 0, decimals);
  if (!number) return <strong>{metric}</strong>;
  return <strong ref={ref}>{display}<span>{unit}</span></strong>;
}

export function Experience() {
  const sceneEnabled = useScrollScene();
  const railRef = useRef(null);
  const reducedMotion = useReducedMotion();
  // The rail fills in step with the reader, so the timeline reads as progress rather than decoration.
  const { scrollYProgress } = useScroll({ target: railRef, offset: ['start 72%', 'end 62%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 85, damping: 24, mass: 0.35 });

  return (
    <section id="experience" className="section container" aria-labelledby="experience-title">
      <div className="section-heading" data-reveal>
        <div><span className="eyebrow section-index">02 / THE EXPERIENCE SO FAR</span><h2 id="experience-title">WORK &<br />{' '}EXPERIENCE.</h2></div>
        <p>Teams I’ve worked with.<br />{' '}Problems I’ve helped solve.</p>
      </div>

      <div ref={railRef}>
      {sceneEnabled ? <ScrollChapters className="experience-story" label="Experience chapters" chapters={EXPERIENCE_DATA.map((role, index) => ({
        label: ['GenAI', 'Stevens', 'Grownited'][index],
        content: <>
          <div className="chapter-visual"><span className="eyebrow">IMPACT / 0{index + 1}</span><p className="chapter-display"><span className="sr-only">{role.metric}</span><span className="chapter-outline" aria-hidden="true">{role.metric}<span>{role.metric}</span></span></p><p className="chapter-caption">{role.metricLabel}</p></div>
          <div className="experience-item">
            <div className="experience-labels"><span className="pill">{role.period}</span>{role.period.includes('Present') && <span className="pill pill-live"><span className="status-dot" /> Current role</span>}</div>
            <h3>{role.role}</h3><p className="experience-org"><strong>{role.organization}</strong><span className="dot-divider" aria-hidden="true" /><span className="muted"><MapPin size={13} /> {role.location}</span></p>
            <p className="experience-summary">{role.description}</p><ul className="experience-bullets">{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul><div className="tags tags-pill">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
        </>
      }))} /> : <div className="experience-rail">
        <span className="rail" aria-hidden="true"><motion.span className="rail-fill" style={reducedMotion ? undefined : { scaleY }} /></span>
        {EXPERIENCE_DATA.map((role, index) => (
          <article className="experience-item" key={role.id} data-reveal style={{ '--reveal-delay': `${index * 60}ms` }}>
            <span className="rail-node" aria-hidden="true" />
            <div className="experience-top">
              <div className="experience-identity">
                <div className="experience-labels">
                  <span className="pill">{role.period}</span>
                  {role.period.includes('Present') && <span className="pill pill-live"><span className="status-dot" /> Current role</span>}
                </div>
                <h3>{role.role}</h3>
                <p className="experience-org"><strong>{role.organization}</strong><span className="dot-divider" aria-hidden="true" /><span className="muted"><MapPin size={13} /> {role.location}</span></p>
              </div>
              <div className="experience-metric">
                <ArrowUpRight size={18} aria-hidden="true" />
                <Metric metric={role.metric} />
                <span>{role.metricLabel}</span>
              </div>
            </div>
            <p className="experience-summary">{role.description}</p>
            <ul className="experience-bullets">{role.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            <div className="tags tags-pill">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>}
      </div>

      <details className="earlier-experience" data-reveal>
        <summary><span>EARLIER EXPERIENCE & COMMUNITY</span><ArrowDown size={18} /></summary>
        <div>{ADDITIONAL_EXPERIENCE.map(role => <article key={role.id}><div><h3>{role.role}</h3><span>{role.organization} · {role.period}</span></div><p>{role.description}</p></article>)}</div>
      </details>
    </section>

  );
}
