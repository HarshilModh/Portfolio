import { useEffect, useState } from 'react';

const SCENE_QUERY = '(min-width: 700px) and (min-height: 720px) and (prefers-reduced-motion: no-preference), (max-width: 699px) and (min-height: 780px) and (prefers-reduced-motion: no-preference)';

export function useScrollScene() {
  const [enabled, setEnabled] = useState(() => window.matchMedia(SCENE_QUERY).matches);
  useEffect(() => {
    const media = window.matchMedia(SCENE_QUERY);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return enabled;
}
