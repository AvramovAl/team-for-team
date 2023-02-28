(() => {

  const room = {
    openModalBtn: document.querySelector('[data-room-open]'),
    closeModalBtn: document.querySelector('[data-room-close]'),
    modal: document.querySelector('[data-room]'),
  };

  room.openModalBtn.addEventListener('click', toggleModal.bind(null, room));
  room.closeModalBtn.addEventListener('click', toggleModal.bind(null, room));

  const table = {
    openModalBtns: document.querySelectorAll('[data-table-open]'),
    closeModalBtn: document.querySelector('[data-table-close]'),
    modal: document.querySelector('[data-table]'),
  };
  
  const openModalBtn2 = document.querySelector('[data-table-open2]');
  openModalBtn2.addEventListener('click', toggleModal.bind(null, table));

  table.openModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal.bind(null, table));
  });
  table.closeModalBtn.addEventListener('click', toggleModal.bind(null, table));

  function toggleModal(modal) {
    modal.modal.classList.toggle('is-hidden');
  }
})();
