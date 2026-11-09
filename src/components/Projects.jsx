import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, ExternalLink, Github, X } from 'lucide-react';
import { OPEN_SOURCE, PROJECTS, PROFILE } from '../constants/data';
import './Projects.css';

const pad = number => String(number).padStart(2, '0');

// Two rows at every width: four columns on desktop, two on tablet, a short list on phones.
function useRowLimit() {
  const get = () => (window.matchMedia('(max-width: 640px)').matches ? 5 : window.matchMedia('(max-width: 1150px)').matches ? 4 : 8);
  const [limit, setLimit] = useState(get);
  useEffect(() => {
    const update = () => setLimit(get());
    const queries = ['(max-width: 640px)', '(max-width: 1150px)'].map(query => window.matchMedia(query));
    queries.forEach(query => query.addEventListener('change', update));
    return () => queries.forEach(query => query.removeEventListener('change', update));
  }, []);
  return limit;
}

const KINDS = ['All', ...new Set(PROJECTS.flatMap(project => project.kinds))];

// Every project uses the same card: one number, one line, one way in.
function WorkCard({ project, index, onOpen }) {
  const Tag = project.caseStudy ? 'a' : 'button';
  const action = project.caseStudy ? { href: `#/work/${project.slug}` } : { type: 'button', onClick: onOpen };
  return (
    <li>
      <Tag className="work-card" {...action}>
        <span className="work-cover">
          <span className="work-cover-top"><span>{pad(index + 1)}</span><span>{project.kinds.join(' · ')}</span></span>
          <strong>{project.stat}</strong>
          <span className="work-stat-label">{project.statLabel}</span>
        </span>
        <span className="work-info">
          <span className="work-title">{project.title}<ArrowUpRight size={20} /></span>
          <span className="work-line">{project.oneLiner}</span>
          <span className="work-link">{project.caseStudy ? 'Case study' : 'Quick look'} <ArrowRight size={14} /></span>
        </span>
      </Tag>
    </li>
  );
}

// The published package gets its own block: what it fixes, what it does, and how far it travelled.
function OpenSource() {
  const [copied, setCopied] = useState(false);
  async function copyInstall() {
    try { await navigator.clipboard.writeText(OPEN_SOURCE.install); setCopied(true); }
    catch { setCopied(false); }
  }
  return (
    <div className="open-source" data-reveal>
      <div className="open-source-copy">
        <span className="eyebrow">Open source · npm package</span>
        <h3>{OPEN_SOURCE.name}</h3>
        <p>{OPEN_SOURCE.summary}</p>
        <p>{OPEN_SOURCE.adoption}</p>
        <div className="open-source-install">
          <code>{OPEN_SOURCE.install}</code>
          <button type="button" className="icon-button" onClick={copyInstall} aria-label="Copy install command">{copied ? <Check size={17} /> : <Copy size={17} />}</button>
        </div>
        <a href={OPEN_SOURCE.url} target="_blank" rel="noreferrer" className="text-button">Find it on npm <ArrowUpRight size={20} /></a>
      </div>
      <div className="open-source-facts">
        <dl className="open-source-stats">
          {OPEN_SOURCE.stats.map(stat => <div key={stat.label}><dd>{stat.value}</dd><dt>{stat.label}</dt></div>)}
        </dl>
        <p className="open-source-asof">npm registry figures, {OPEN_SOURCE.asOf}</p>
        <ul className="open-source-features">
          {OPEN_SOURCE.features.map(feature => <li key={feature.title}><strong>{feature.title}</strong><span>{feature.body}</span></li>)}
        </ul>
      </div>
    </div>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; dialog.close(); };
  }, []);

  function closeDialog() {
    dialogRef.current.close();
    onClose();
  }

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={event => { event.preventDefault(); closeDialog(); }} onClick={event => { if (event.target === event.currentTarget) closeDialog(); }}>
      <div className="dialog-content">
        <div className="dialog-top"><span className="eyebrow">Project notes</span><button className="icon-button" onClick={closeDialog} aria-label="Close project details"><X size={24} /></button></div>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className="dialog-tagline">{project.tagline}</p>
        <p>{project.detailedDescription}</p>
        <div className="project-impact">{project.impact}</div>
        <h3>The engineering</h3>
        <ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <div className="tags tags-pill">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="button-row">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="button button-primary"><Github size={17} /> View code <ArrowUpRight size={16} /></a>}
          {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="button button-outline">Live site <ExternalLink size={16} /></a>}
          {!project.github && !project.link && <a href={`mailto:${PROFILE.socials.email}?subject=${encodeURIComponent(`Tell me about ${project.title}`)}`} className="button button-primary">Ask me about this project <ArrowUpRight size={16} /></a>}
        </div>
      </div>
    </dialog>
  );
}

export function Projects() {
  const [kind, setKind] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const limit = useRowLimit();
  const matching = PROJECTS.filter(project => kind === 'All' || project.kinds.includes(kind));
  const visible = expanded ? matching : matching.slice(0, limit);

  return (
    <section id="projects" className="section work-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">02 / BUILT FROM THE GROUND UP</span><h2 id="projects-title">SELECTED WORK<span className="heading-count">({pad(PROJECTS.length)})</span></h2></div>
          <p>Full-stack products, AI systems,<br />{' '}and tools built to be used.</p>
        </div>
        <div className="chips" role="group" aria-label="Filter projects by type">
          {KINDS.map(name => <button type="button" key={name} aria-pressed={kind === name} onClick={() => { setKind(name); setExpanded(false); }}>{name}</button>)}
        </div>
        <ul className="work-grid" aria-live="polite">
          {visible.map(project => <WorkCard key={project.title} project={project} index={PROJECTS.indexOf(project)} onOpen={() => setSelectedProject(project)} />)}
        </ul>
        {matching.length > limit && (
          <button type="button" className="work-more" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show fewer' : `Show all ${matching.length} projects`} <ArrowDown size={15} />
          </button>
        )}
        <OpenSource />
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
