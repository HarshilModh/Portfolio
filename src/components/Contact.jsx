import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants/data';

export function Contact() {
  const [formStatus,setFormStatus]=useState('');
  const [copyStatus,setCopyStatus]=useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=`Portfolio inquiry from ${data.get('name')}`;
    const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href=`mailto:${PROFILE.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Your email app has been requested. Send the draft there to finish, or email me directly using the address above.');
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(PROFILE.socials.email); setCopyStatus('Email copied.'); }
    catch { setCopyStatus(`Copy this address: ${PROFILE.socials.email}`); }
  }
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="container contact-grid">
    <div className="contact-copy" data-reveal><span className="eyebrow section-index">05 / NEXT CONVERSATION</span><h2 id="contact-title">LET’S<br />{' '}TALK.</h2><p>A role, a collaboration, or a good idea.<br />{' '}My inbox is open.</p>
      <div className="email-row"><a href={`mailto:${PROFILE.socials.email}`}>{PROFILE.socials.email}<ArrowUpRight size={23} /></a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copyStatus==='Email copied.'?<Check size={19} />:<Copy size={19} />}</button></div><span className="copy-status" role="status">{copyStatus}</span>
      <div className="contact-socials"><a href={PROFILE.socials.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub<ArrowUpRight size={14} /></a><a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn<ArrowUpRight size={14} /></a></div>
    </div>
    <form className="contact-form" data-reveal onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={200} /></label></div><label>What’s on your mind?<textarea name="message" placeholder="A little about what you’re working on…" rows={4} required maxLength={3000} /></label><div className="form-bottom"><span>Opens a draft in your email app.</span><button className="button button-primary" type="submit">Let’s connect <Mail size={17} /></button></div><p className="form-status" role="status">{formStatus}</p></form>
  </div></section>;
}
