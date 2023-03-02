(() => {
  const modals = [
    {
      openModalBtns: document.querySelectorAll('[data-price-open]'),
      closeModalBtns: document.querySelectorAll('[data-price-close]'),
      modal: document.querySelector('[data-price]'),
    },
    {
      openModalBtns: document.querySelectorAll('[data-room-open]'),
      closeModalBtns: document.querySelectorAll('[data-room-close]'),
      modal: document.querySelector('[data-room]'),
    },
    {
      openModalBtns: document.querySelectorAll('[data-table-open]'),
      closeModalBtns: document.querySelectorAll('[data-table-close]'),
      modal: document.querySelector('[data-table]'),
    },
  ];

  function initModal(modal) {
    if (
      !modal.openModalBtns.length ||
      !modal.closeModalBtns.length ||
      !modal.modal
    ) {
      // Если селекторы не найдены, выходим из функции
      return;
    }

    modal.openModalBtns.forEach(btn => {
      btn.addEventListener('click', toggleModal.bind(null, modal));
    });

    modal.closeModalBtns.forEach(btn => {
      btn.addEventListener('click', toggleModal.bind(null, modal));
    });

    const submitBtn = modal.modal.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', toggleModal.bind(null, modal));
    }
  }

  function toggleModal(modal) {
    modal.modal.classList.toggle('is-hidden');
  }

  modals.forEach(modal => {
    initModal(modal);
  });
})();
