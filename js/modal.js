'use strict';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalBackdrop: document.querySelector('[data-modal-backdrop]'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modalBackdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyDown);
  refs.modalBackdrop.classList.remove('is-hidden');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyDown);
  refs.modalBackdrop.classList.add('is-hidden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    refs.modalBackdrop.classList.add('is-hidden');
  }
}

const onEscKeyDown = event => {
  const ESC_KEY_CODE = 'Escape';

  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
};
