import { ArrowDown, Download } from 'lucide-react';
import { PROFILE } from '../constants/data';

// One screen: who, what, and the two things a visitor is most likely to want next.
export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <div className="hero-kicker">
          <span><span className="status-dot" /> Full-stack & AI engineer</span>
          <span>{PROFILE.socials.location}</span>
        </div>
        <h1 id="hero-title" className="hero-name" aria-label={PROFILE.name}>
          <span aria-hidden="true">HARSHIL</span>{' '}
          <span className="hero-surname" aria-hidden="true">MODH</span>
        </h1>
        <div className="hero-foot">
          <p className="hero-lead">I build full-stack products and AI systems, from the first interface to the infrastructure behind it.</p>
          <div className="button-row">
            <a className="button button-primary" href="#projects">View work <ArrowDown size={16} /></a>
            <a className="button button-outline" href={PROFILE.resume} download="Harshil-Modh-Resume.pdf"><Download size={16} /> Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
