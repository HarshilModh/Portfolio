import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechLogo } from '../utils/TechLogo';
import { SKILL_GROUPS } from '../constants/data';
import { useReveal } from '../utils/useReveal';

export function Skills() {
  const [active, setActive] = useState('All');
  useReveal(active);
  const visible = SKILL_GROUPS.map((group, index) => ({ ...group, index })).filter(group => active === 'All' || active === group.name);

  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">03 / WHAT I WORK WITH</span><h2 id="skills-title">THE TOOLKIT.</h2></div>
          <p>Comfortable across the stack.<br />{' '}Always room to learn something new.</p>
        </div>
        <div className="skill-filters" aria-label="Filter skills by category" data-reveal>
          {['All', ...SKILL_GROUPS.map(group => group.name)].map(name => <button key={name} aria-pressed={active === name} onClick={() => setActive(name)}>{name}</button>)}
        </div>
        <div className="skills-grid" aria-live="polite">
          {visible.map((group, position) => (
            <article className="skill-group" key={group.name} data-reveal style={{ '--reveal-delay': `${position * 55}ms` }}>
              <div className="skill-heading"><span>{String(group.index + 1).padStart(2, '0')}</span><h3>{group.name}</h3></div>
              <div className="skill-items">{group.items.map(item => <span className="tech-item" key={item}><TechLogo name={item} /><span>{item}</span></span>)}</div>
            </article>
          ))}
        </div>
        <div className="open-source-note" data-reveal>
          <div>
            <span className="eyebrow">SIDE PROJECT → EVERYDAY TOOL</span>
            <h3>It started with grading homework.</h3>
            <p>I wrote <strong>canvas-grade-manager</strong> to automate the repetitive parts of being a TA. It now gets 1,300+ weekly downloads, and six other teaching assistants picked it up.</p>
          </div>
          <a href="https://www.npmjs.com/package/canvas-grade-manager" target="_blank" rel="noreferrer" className="text-button">Find it on npm <ArrowUpRight size={21} /></a>
        </div>
      </div>
    </section>
  );
}
