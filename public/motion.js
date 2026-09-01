(() => {
  const scene = document.getElementById('launch-scene');
  if (!scene) return;

  const syncVisibility = () => scene.classList.toggle('is-paused', document.hidden);
  syncVisibility();
  document.addEventListener('visibilitychange', syncVisibility, { passive: true });

  if (!window.matchMedia('(pointer: fine)').matches) return;

  let frame = 0;
  window.addEventListener('pointermove', (event) => {
    window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      scene.style.setProperty('--pointer-x', `${event.clientX}px`);
      scene.style.setProperty('--pointer-y', `${event.clientY}px`);
      scene.style.setProperty('--tilt-x', `${(0.5 - y) * 8}deg`);
      scene.style.setProperty('--tilt-y', `${(x - 0.5) * 10}deg`);
    });
  }, { passive: true });
})();
