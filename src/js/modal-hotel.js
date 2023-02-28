(() => {
  const room = {
    openModalBtn: document.querySelector('[data-room-open]'),
    closeModalBtn: document.querySelector('[data-room-close]'),
    modal: document.querySelector('[data-room]'),
  };

  room.openModalBtn.addEventListener('click', toggleModal.bind(null, room));
  room.closeModalBtn.addEventListener('click', toggleModal.bind(null, room));

  const price = {
    openModalBtns: document.querySelectorAll('[data-price-open]'),
    closeModalBtn: document.querySelector('[data-price-close]'),
    modal: document.querySelector('[data-price]'),
  };

  const openModalBtn2 = document.querySelector('[data-price-open2]');
  openModalBtn2.addEventListener('click', toggleModal.bind(null, price));

  const openModalBtn3 = document.querySelector('[data-price-open3]');
  openModalBtn3.addEventListener('click', toggleModal.bind(null, price));

  const openModalBtn4 = document.querySelector('[data-price-open4]');
  openModalBtn4.addEventListener('click', toggleModal.bind(null, price));

  price.openModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal.bind(null, price));
  });
  price.closeModalBtn.addEventListener('click', toggleModal.bind(null, price));

  function toggleModal(modal) {
    modal.modal.classList.toggle('is-hidden');
  }
})();
