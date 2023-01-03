(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenuEl = document.querySelector('[data-menu]');
  const html = document.querySelector('html');

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;

    html.classList.toggle('no-scroll');
    menuBtn.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', !expanded);

    mobileMenuEl.classList.toggle('is-open');
  });
})();
