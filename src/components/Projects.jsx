import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import { PROJECTS, PROFILE } from '../constants/data';
import './ProjectGallery.css';

function ProjectVisual({ project }) {
  if (project.title === 'PromptStudio' || project.title === 'Vibe Code Editor') {
    const studio = project.title === 'PromptStudio';
    return <div className={`project-visual ${studio ? 'visual-studio' : 'visual-editor'}`} role="img" aria-label={`${project.title}: ${project.tagline}`}>
      <div className="poster-top"><span>{project.title.toUpperCase()}</span><span>{studio ? 'FROM PROMPT TO PRODUCT' : 'YOUR BROWSER. YOUR WORKSPACE.'}</span></div>
      <div className="new-project-poster"><span>{studio ? 'AN IDEA.' : 'OPEN.'}</span><span>{studio ? 'AN APP.' : 'BUILD.'}</span><span className="poster-italic">{studio ? 'Just like that.' : 'Run anywhere.'}</span></div>
      <div className="poster-bottom"><span>{studio ? 'Describe it. Generate it.' : 'A full development environment.'}<br />{studio ? 'Make it yours.' : 'One browser tab.'}</span><span>{studio ? 'GEMINI + INNGEST' : 'MONACO + WEBCONTAINERS'}</span></div>
    </div>;
  }

  if (project.title === 'CodePulse') {
    return (
      <div className="project-visual visual-pulse" role="img" aria-label="CodePulse analyzes five signals: complexity, security, dead code, coverage, and architectural drift, to produce one repository health score.">
        <div className="poster-top"><span>CODEPULSE</span><span>REPOSITORY INTELLIGENCE</span></div>
        <div className="pulse-poster-main"><span className="poster-number">05</span><span className="poster-equals">↗</span></div>
        <div className="poster-bottom"><span>Five signals.<br />{' '}The whole picture.</span><span>COMPLEXITY / SECURITY<br />{' '}DEAD CODE / COVERAGE<br />{' '}ARCHITECTURAL DRIFT</span></div>
      </div>
    );
  }
  if (project.title === 'CareConnect') {
    return (
      <div className="project-visual visual-care" role="img" aria-label="CareConnect brings family members, caregivers, and care recipients together around shared tasks, medications, and real-time communication.">
        <div className="poster-top"><span>CARECONNECT</span><span>CARE IS A TEAM EFFORT</span></div>
        <div className="care-poster-main"><span>CARE,</span><span>TOGETHER<span className="care-period">.</span></span></div>
        <div className="poster-bottom"><span>A shared space.<br />{' '}A stronger support system.</span><span>FAMILIES + CAREGIVERS<br />{' '}REAL-TIME COORDINATION</span></div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-ledger" role="img" aria-label="CoMP Ledger traces AI-generated claims back to original reporting. AWS Hackathon Winner.">
      <div className="poster-top"><span>CoMP LEDGER</span><span>CONTENT ATTRIBUTION</span></div>
      <div className="ledger-poster-main"><span>WHO SAID</span><span>IT <i>FIRST?</i></span></div>
      <div className="poster-bottom"><span>Give original reporting<br />{' '}its credit.</span><span className="winner-stamp">AWS HACKATHON<br />{' '}<strong>WINNER ↗</strong></span></div>
    </div>
  );
}

function ProjectBody({ project, index, onOpen }) {
  return (
              <div className="project-body">
                <div className="project-meta"><span className="project-number">{String(index + 1).padStart(2, '0')}</span><span className="pill">{project.category}</span></div>
                <h3><button onClick={onOpen}>{project.title}<ArrowUpRight size={28} /></button></h3>
                <p>{project.description}</p>
                {project.stat
                  ? <div className="project-stat"><strong>{project.stat}</strong><span>{project.statLabel}</span></div>
                  : <div className="project-outcome">{project.impact}</div>}
                <div className="tags tags-pill">{project.tech.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="project-actions">
                  <button className="text-button" onClick={onOpen}>Project details <ArrowRight size={17} /></button>
                  <div>
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-source-link" aria-label={`View ${project.title} on GitHub`}><Github size={16} /><span>Source</span></a>}
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="project-source-link" aria-label={`Open ${project.title} live site`}><span>Live app</span><ExternalLink size={15} /></a>}
                  </div>
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
  const [selectedProject, setSelectedProject] = useState(null);
  const featured = PROJECTS.filter(project => project.featured);
  const more = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">01 / BUILT FROM THE GROUND UP</span><h2 id="projects-title">SELECTED WORK<span className="heading-count">({String(featured.length).padStart(2, '0')})</span></h2></div>
          <p>Full-stack products, AI systems,<br />{' '}and tools built to be used.</p>
        </div>
        <nav className="project-index" aria-label="Jump to a featured project">{featured.map((project, index) => <a key={project.title} href={`#project-${index + 1}`}><span>0{index + 1}</span>{project.title}<ArrowRight size={13} /></a>)}</nav>
        <div className="project-gallery">
          {featured.map((project, index) => (
            <article className={`gallery-project ${index === 0 ? 'gallery-project-lead' : ''}`} id={`project-${index + 1}`} key={project.title}>
              <button className="project-cover" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.title}`}><ProjectVisual project={project} /><span className="cover-link"><ArrowUpRight size={24} /></span></button>
              <ProjectBody project={project} index={index} onOpen={() => setSelectedProject(project)} />
            </article>
          ))}
        </div>
        <div className="project-archive">
          <div className="project-archive-heading"><h3>MORE THINGS I’VE BUILT</h3><span className="eyebrow">{String(more.length).padStart(2, '0')} MORE PROJECTS</span></div>
          <div className="archive-grid">{more.map((project, index) => <button className="archive-project" key={project.title} onClick={() => setSelectedProject(project)}><span className="archive-number">{String(index + featured.length + 1).padStart(2, '0')}</span><span><strong>{project.title}</strong><span>{project.tagline}</span></span><ArrowUpRight size={25} /></button>)}</div>
        </div>
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
