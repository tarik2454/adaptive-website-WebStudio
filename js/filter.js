'use strict';

const filterContainer = document.querySelector('.js-filter');
const category = document.querySelectorAll('[data-cat]');

filterContainer.addEventListener('click', onFilterClick);

function onFilterClick(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const btnValue = event.target.dataset.filter;

  category.forEach(item => {
    const categoryValue = item.dataset.cat;

    item.classList.remove('visually-hidden');

    if (btnValue === 'all') {
      item.classList.remove('visually-hidden');
    } else if (btnValue !== categoryValue) {
      item.classList.add('visually-hidden');
    }
  });
}
