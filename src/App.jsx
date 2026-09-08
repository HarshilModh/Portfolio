import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from './constants/data';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { useReveal } from './utils/useReveal';
import { useScrollScene } from './utils/useScrollScene';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme-v3') === 'dark' ? 'dark' : 'light'; }
    catch { return 'light'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.25 });
  const sceneEnabled = useScrollScene();
  useReveal(sceneEnabled ? 'scene' : 'static');

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
  }, [sceneEnabled]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection('home');
      setScrolled(window.scrollY > 14);
      setPastHero(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="ambient" aria-hidden="true" />
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
      <nav className={`section-rail ${pastHero ? 'is-visible' : ''}`} aria-label="Section shortcuts" aria-hidden={!pastHero} inert={pastHero ? undefined : ''}>
        {NAV_LINKS.map(link => {
          const isActive = activeSection === link.href.slice(1);
          return (
            <a key={link.href} href={link.href} className={isActive ? 'active' : ''} aria-current={isActive ? 'location' : undefined}>
              <span className="rail-label">{link.name}</span><span className="rail-dot" />
            </a>
          );
        })}
      </nav>
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <TechTicker />
        <Skills />
        <About />
        <Education />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="brand-mark" href="#home" aria-label="Back to top">HM<span>↗</span></a>
        <span>© {new Date().getFullYear()} Harshil Modh</span>
        <a href="#home">Back to top <ArrowUpRight size={16} /></a>
      </footer>
    </>
  );
}
