(() => {
  const refs = {
    openModalBtn: document.querySelector('[room-modal-open]'),
    closeModalBtn: document.querySelector('[room-modal-close]'),
    modal: document.querySelector('[room-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
