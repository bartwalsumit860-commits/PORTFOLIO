import { useState, useEffect } from 'react';

export const useScrollShrink = (threshold = 50) => {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handle = () => setShrunk(window.scrollY > threshold);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [threshold]);

  return shrunk;
};
