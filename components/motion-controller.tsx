'use client';

import { useEffect } from 'react';

export function MotionController() {
  useEffect(() => {
    const scene = document.getElementById('launch-scene');
    if (!scene) return;

    const syncVisibility = () => {
      scene.classList.toggle('is-paused', document.hidden);
    };

    syncVisibility();
    document.addEventListener('visibilitychange', syncVisibility, { passive: true });

    let frame = 0;
    const supportsPointerMotion = window.matchMedia('(pointer: fine)').matches;
    const updatePointer = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        scene.style.setProperty('--pointer-x', `${event.clientX}px`);
        scene.style.setProperty('--pointer-y', `${event.clientY}px`);
        scene.style.setProperty('--tilt-x', `${(0.5 - y) * 8}deg`);
        scene.style.setProperty('--tilt-y', `${(x - 0.5) * 10}deg`);
      });
    };

    if (supportsPointerMotion) {
      window.addEventListener('pointermove', updatePointer, { passive: true });
    }

    return () => {
      document.removeEventListener('visibilitychange', syncVisibility);
      window.removeEventListener('pointermove', updatePointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
