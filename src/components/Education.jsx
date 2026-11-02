import { GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../constants/data';

export function Education() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-title">
      <div className="container education-grid">
        <div data-reveal><span className="eyebrow section-index">THE EDUCATION</span><h2 id="education-title">THE<br />{' '}FOUNDATION.</h2><GraduationCap size={36} strokeWidth={1.2} /></div>
        {EDUCATION_DATA.map((education, index) => (
          <article key={education.id} data-reveal style={{ '--reveal-delay': `${(index + 1) * 70}ms` }}>
            <span className="eyebrow">{education.year}</span>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <span className="muted">{education.location}</span>
            {education.details && <span className="gpa">{education.details}</span>}
            {education.award && <span className="education-award">{education.award}</span>}
          </article>
        ))}
      </div>
    </section>
  );
}
