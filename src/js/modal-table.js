(() => {
  const refs = {
    openModalBtn: document.querySelector('[table-modal-open]'),
    closeModalBtn: document.querySelector('[table-modal-close]'),
    modal: document.querySelector('[table-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
