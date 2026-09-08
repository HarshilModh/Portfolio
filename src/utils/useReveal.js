import { useEffect } from 'react';

// Elements marked [data-reveal] fade up once, the first time they enter the viewport.
// Pass a `key` that changes whenever new reveal targets are mounted.
export function useReveal(key) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]:not(.is-revealed)');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(element => element.classList.add('is-revealed'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -11% 0px' });
    targets.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);
}
