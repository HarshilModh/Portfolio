import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { BLUEPRINTS } from '../constants/blueprints';
import { ProjectMockup } from './ProjectMockup';
import { Blueprint } from './Blueprint';
import './CaseStudy.css';

const STUDIES = PROJECTS.filter(project => project.caseStudy);

export function CaseStudy({ slug }) {
  const index = STUDIES.findIndex(project => project.slug === slug);
  const project = STUDIES[index];
  const next = STUDIES[(index + 1) % STUDIES.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${project.title} — Case study · Harshil Modh`;
    return () => { document.title = 'Harshil Modh — Software Engineer · Full Stack & AI'; };
  }, [project.title]);

  const { caseStudy } = project;
  const blueprint = BLUEPRINTS[project.slug];
  return (
    <article className="case-study" aria-labelledby="case-title">
      <div className="container">
        <a className="case-back" href="#projects"><ArrowLeft size={16} /> All projects</a>
        <header className="case-header">
          <span className="eyebrow section-index">CASE STUDY / {String(index + 1).padStart(2, '0')}</span>
          <h1 id="case-title">{project.title}</h1>
          <p className="case-summary">{caseStudy.summary}</p>
          <p className="case-role eyebrow">{caseStudy.role}</p>
        </header>

        <section className="case-results" aria-label="Results">
          {caseStudy.results.map(result => (
            <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>
          ))}
        </section>

        <section className="case-block">
          <h2 className="eyebrow">The problem</h2>
          <p className="case-lead">{caseStudy.problem}</p>
        </section>

        {blueprint && (
          <section className="case-block case-block-wide">
            <h2 className="eyebrow">How it works</h2>
            <Blueprint blueprint={blueprint} />
          </section>
        )}

        <section className="case-block">
          <h2 className="eyebrow">Key decisions</h2>
          <ol className="case-decisions">
            {caseStudy.decisions.map((decision, i) => (
              <li key={decision.title}>
                <span className="case-step">{String(i + 1).padStart(2, '0')}</span>
                <div><h3>{decision.title}</h3><p>{decision.body}</p></div>
              </li>
            ))}
          </ol>
        </section>

        {!project.noMockup && (
          <section className="case-block">
            <h2 className="eyebrow">The interface</h2>
            <ProjectMockup slug={project.slug} />
          </section>
        )}

        <section className="case-block">
          <h2 className="eyebrow">Built with</h2>
          <div>
            {blueprint
              ? <dl className="case-stack">{blueprint.stack.map(group => (
                <div key={group.layer}><dt>{group.layer}</dt><dd className="tags tags-pill">{group.items.map(item => <span key={item}>{item}</span>)}</dd></div>
              ))}</dl>
              : <div className="tags tags-pill">{project.tech.map(tech => <span key={tech}>{tech}</span>)}</div>}
            <div className="button-row case-actions">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="button button-primary"><Github size={17} /> View code <ArrowUpRight size={16} /></a>}
              {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="button button-outline">Live site <ExternalLink size={16} /></a>}
            </div>
          </div>
        </section>

        <a className="case-next" href={`#/work/${next.slug}`}>
          <span className="eyebrow">Next case study</span>
          <span className="case-next-title">{next.title} <ArrowRight size={32} /></span>
        </a>
      </div>
    </article>
  );
}
