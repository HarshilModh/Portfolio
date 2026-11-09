import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { BLUEPRINTS } from '../constants/blueprints';
import { Blueprint } from './Blueprint';

const SYSTEMS = PROJECTS.filter(project => BLUEPRINTS[project.slug]);

// One diagram at a time: pick a project, then follow a request through it.
export function Architecture() {
  const [slug, setSlug] = useState(SYSTEMS[0].slug);
  const project = SYSTEMS.find(item => item.slug === slug);

  return (
    <section id="architecture" className="section hood-section" aria-labelledby="architecture-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">03 / HOW THEY’RE BUILT</span><h2 id="architecture-title">UNDER THE HOOD.</h2></div>
          <p>Pick a project and follow one request<br />{' '}through the system.</p>
        </div>
        <div className="chips" role="group" aria-label="Choose a project" data-reveal>
          {SYSTEMS.map(item => <button type="button" key={item.slug} aria-pressed={item.slug === slug} onClick={() => setSlug(item.slug)}>{item.title}</button>)}
        </div>
        <div data-reveal style={{ '--reveal-delay': '120ms' }}><Blueprint key={slug} blueprint={BLUEPRINTS[slug]} /></div>
        <a className="text-button hood-more" href={`#/work/${slug}`}>Read the {project.title} case study <ArrowRight size={17} /></a>
      </div>
    </section>
  );
}
