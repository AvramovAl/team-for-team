(() => {
  const price = {
    openModalBtn: document.querySelector('[data-price-open]'),
    closeModalBtn: document.querySelector('[data-price-close]'),
    modal: document.querySelector('[data-price]'),
  };

  price.openModalBtn.addEventListener('click', toggleModal.bind(null, price));
  price.closeModalBtn.addEventListener('click', toggleModal.bind(null, price));

  function toggleModal(modal) {
    modal.modal.classList.toggle('is-hidden');
  }
})();
