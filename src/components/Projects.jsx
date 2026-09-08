import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import { PROJECTS, PROFILE } from '../constants/data';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useScrollScene } from '../utils/useScrollScene';
import './ProjectStory.css';

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
                <div className="project-outcome">{project.impact}</div>
                <div className="tags tags-pill">{project.tech.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div>
                <div className="project-actions">
                  <button className="text-button" onClick={onOpen}>Inside the project <ArrowRight size={17} /></button>
                  <div>
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="icon-button" aria-label={`View ${project.title} on GitHub`}><Github size={20} /></a>}
                    {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="icon-button" aria-label={`Open ${project.title} live site`}><ExternalLink size={19} /></a>}
                  </div>
                </div>
              </div>
  );
}

function ProjectPanel({ project, index, count, progress, active, onOpen }) {
  const start = index / count;
  const end = (index + 1) / count;
  const range = index === 0 ? [0, end - 0.045, end + 0.045]
    : index === count - 1 ? [start - 0.045, start + 0.045, 1]
    : [start - 0.045, start + 0.045, end - 0.045, end + 0.045];
  const opacity = useTransform(progress, range, index === 0 ? [1, 1, 0] : index === count - 1 ? [0, 1, 1] : [0, 1, 1, 0]);
  const y = useTransform(progress, range, index === 0 ? [0, 0, -80] : index === count - 1 ? [80, 0, 0] : [80, 0, 0, -80]);
  const scale = useTransform(progress, range, index === 0 ? [1, 1, 0.9] : index === count - 1 ? [0.94, 1, 1] : [0.94, 1, 1, 0.9]);
  const artScale = useTransform(progress, [Math.max(0, start), Math.min(1, end)], [1.04, 1]);

  return (
    <motion.article className="project-story-panel" style={{ opacity, y, scale }} aria-hidden={!active} inert={active ? undefined : ''}>
      <motion.div className="project-story-art" style={{ scale: artScale }}><button className="project-cover" onClick={() => onOpen(project)} aria-label={`Explore ${project.title}`}><ProjectVisual project={project} /><span className="cover-link"><ArrowUpRight size={26} /></span></button></motion.div>
      <ProjectBody project={project} index={index} onOpen={() => onOpen(project)} />
    </motion.article>
  );
}

function ProjectStory({ projects, onOpen }) {
  const storyRef = useRef(null);
  const chapterRefs = useRef([]);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', value => setActive(Math.min(projects.length - 1, Math.floor(value * projects.length))));

  useEffect(() => {
    const hiddenPanels = storyRef.current.querySelectorAll('[aria-hidden="true"]');
    if ([...hiddenPanels].some(panel => panel.contains(document.activeElement))) chapterRefs.current[active]?.focus({ preventScroll: true });
  }, [active]);

  function goToProject(index) {
    const story = storyRef.current;
    const start = story.getBoundingClientRect().top + window.scrollY;
    const travel = story.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + travel * ((index + 0.45) / projects.length), behavior: 'smooth' });
  }

  return (
    <div ref={storyRef} className="project-story" style={{ '--story-length': `${projects.length * 115}svh` }}>
      <div className="project-story-pin">
        <div className="project-story-panels">{projects.map((project, index) => <ProjectPanel key={project.title} project={project} index={index} count={projects.length} progress={scrollYProgress} active={active === index} onOpen={onOpen} />)}</div>
        <div className="project-story-controls"><div className="project-chapters" aria-label="Project chapters">{projects.map((project, index) => <button key={project.title} ref={node => { chapterRefs.current[index] = node; }} onClick={() => goToProject(index)} aria-pressed={active === index} aria-label={project.title}><span className="project-chapter-name">{project.title}</span><span className="project-chapter-number" aria-hidden="true">0{index + 1}</span></button>)}</div><span className="project-story-count">0{active + 1} <span>/ 0{projects.length}</span></span><div className="project-story-track" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div></div>
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
  const sceneEnabled = useScrollScene();
  const featured = PROJECTS.filter(project => project.featured);
  const more = PROJECTS.filter(project => !project.featured);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div><span className="eyebrow section-index">03 / A FEW RECENT PROJECTS</span><h2 id="projects-title">SELECTED WORK<span className="heading-count">({String(featured.length).padStart(2, '0')})</span></h2></div>
          <p>Built from the ground up.<br />{' '}Here’s what went into them.</p>
        </div>
        {sceneEnabled ? <ProjectStory projects={featured} onOpen={setSelectedProject} /> : <div className="project-stack project-static">
          {featured.map((project, index) => (
            <article className="project-card" key={project.title}>
              <button className="project-cover" onClick={() => setSelectedProject(project)} aria-label={`Explore ${project.title}`}><ProjectVisual project={project} /><span className="cover-link"><ArrowUpRight size={26} /></span></button>
              <ProjectBody project={project} index={index} onOpen={() => setSelectedProject(project)} />
            </article>
          ))}
        </div>}
        <details className="more-projects" data-reveal>
          <summary><span>THE REST OF THE COLLECTION <span className="count">{more.length}</span></span><ArrowDown size={22} /></summary>
          <div className="archive-grid">{more.map((project, index) => <button className="archive-project" key={project.title} onClick={() => setSelectedProject(project)}><span className="archive-number">{String(index + featured.length + 1).padStart(2, '0')}</span><span><strong>{project.title}</strong><span>{project.tagline}</span></span><ArrowUpRight size={25} /></button>)}</div>
        </details>
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
