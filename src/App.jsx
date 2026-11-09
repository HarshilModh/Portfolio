import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_LINKS, PROFILE, PROJECTS } from './constants/data';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Architecture } from './components/Architecture';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CaseStudy } from './components/CaseStudy';
import { useReveal } from './utils/useReveal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme-v3') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.25 });
  const [hash, setHash] = useState(() => window.location.hash);
  const requested = hash.startsWith('#/work/') ? hash.slice(7) : null;
  const slug = PROJECTS.some(project => project.caseStudy && project.slug === requested) ? requested : null;
  useReveal(slug ?? 'home');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Returning from a case study remounts the home sections, so jump to the requested anchor.
  useEffect(() => {
    if (slug || hash.length < 2 || hash.startsWith('#/')) return;
    const frame = requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    return () => cancelAnimationFrame(frame);
  }, [slug, hash]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme-v3', theme); } catch { /* Theme still works when storage is unavailable. */ }
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection('home');
      setScrolled(window.scrollY > 14);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Harshil Modh, home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">HM<span>↗</span></span><span className="brand-name">Harshil Modh<br />{' '}<span>Software engineer</span></span>
          </a>
          <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation" onKeyDown={e => { if (e.key === 'Escape') { setMenuOpen(false); document.getElementById('menu-toggle').focus(); } }}>
            {NAV_LINKS.map(link => <a key={link.href} href={link.href} className={activeSection === link.href.slice(1) ? 'active' : ''} aria-current={activeSection === link.href.slice(1) ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{link.name}</a>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button theme-toggle" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a className="header-contact" href={`mailto:${PROFILE.socials.email}`}>Get in touch <ArrowUpRight size={16} /></a>
            <button id="menu-toggle" className="icon-button menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        <motion.span className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>
      <main id="main">
        {slug ? <CaseStudy key={slug} slug={slug} /> : (
          <>
            <Hero />
            <About />
            <Projects />
            <Architecture />
            <Experience />
            <Skills />
            <Contact />
          </>
        )}
      </main>
      <footer className="container footer">
        <a className="brand-mark" href="#home" aria-label="Back to top">HM<span>↗</span></a>
        <span>© {new Date().getFullYear()} Harshil Modh</span>
        <a href="#home">Back to top <ArrowUpRight size={16} /></a>
      </footer>
    </>
  );
}
