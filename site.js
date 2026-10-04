(() => {
  'use strict';
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...document.querySelectorAll('[role="tabpanel"]')];
  function selectTab(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
      if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectTab(tabs[next], true); }
    });
  });
  const compact = window.matchMedia('(max-width: 720px)');
  function updateOrientation() {
    document.querySelector('[role="tablist"]').setAttribute('aria-orientation', compact.matches ? 'horizontal' : 'vertical');
  }
  updateOrientation();
  compact.addEventListener('change', updateOrientation);
  document.querySelector('.scenario-explorer').hidden = false;
  document.querySelector('.fallback-figure').hidden = true;
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle.hidden = false;
  function closeMenu() { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
  });
  document.documentElement.classList.add('js');
  if ('IntersectionObserver' in window) {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) links.forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
