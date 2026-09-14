/* Progressive enhancement: all page links remain visible without JavaScript. */
(() => {
  const nav = document.querySelector('.academic-nav');
  const toggle = nav?.querySelector('.menu-toggle');
  const links = nav?.querySelector('.nav-list');
  if (!toggle || !links) return;
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = open ? 'Close menu <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">+</span>';
    links.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  links.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  toggle.hidden = false;
  nav.classList.add('menu-ready');
})();
