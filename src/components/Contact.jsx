import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants/data';

export function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try { await navigator.clipboard.writeText(PROFILE.socials.email); setCopyStatus('Email copied.'); }
    catch { setCopyStatus(`Copy this address: ${PROFILE.socials.email}`); }
  }
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-inner" data-reveal>
        <div className="contact-copy">
          <span className="eyebrow section-index">06 / NEXT CONVERSATION</span>
          <h2 id="contact-title">LET’S BUILD<br />{' '}SOMETHING.</h2>
          <p className="contact-status"><span className="status-dot" /> Open to software engineering roles</p>
        </div>
        <div className="contact-reach">
          <p>A role, a collaboration, or a good idea. My inbox is open.</p>
          <div className="email-row">
            <a href={`mailto:${PROFILE.socials.email}`}>{PROFILE.socials.email}<ArrowUpRight size={23} /></a>
            <button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied.' ? <Check size={19} /> : <Copy size={19} />}</button>
          </div>
          <span className="copy-status" role="status">{copyStatus}</span>
          <div className="contact-socials">
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub<ArrowUpRight size={14} /></a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={14} /></a>
            <a href={PROFILE.resume} download="Harshil-Modh-Resume.pdf"><Download size={18} />Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}
