import { TechLogo } from '../utils/TechLogo';
import { SKILL_GROUPS } from '../constants/data';

export function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">05 / WHAT I WORK WITH</span><h2 id="skills-title">THE TOOLKIT.</h2></div>
          <p>The tools I reach for,<br />{' '}and can talk about in depth.</p>
        </div>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, index) => (
            <article className="skill-group" key={group.name} data-reveal style={{ '--reveal-delay': `${index * 55}ms` }}>
              <div className="skill-heading"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.name}</h3></div>
              <div className="skill-items">{group.items.map(item => <span className="tech-item" key={item}><TechLogo name={item} /><span>{item}</span></span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
