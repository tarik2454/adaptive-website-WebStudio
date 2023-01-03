(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenuEl: document.querySelector('[data-menu]'),
    html: document.querySelector('html'),
  };

  refs.menuBtn.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.html.classList.toggle('no-scroll');
    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenuEl.classList.toggle('is-open');
  });
})();
