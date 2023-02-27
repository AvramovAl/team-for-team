// Получаем элементы кнопки открытия модального окна, самого модального окна и кнопки закрытия модального окна
var openModalBtns = document.querySelectorAll(".open-modal-room");
var modal = document.querySelector(".backdrop-room");
var closeModalBtn = document.querySelector(".close-modal-room");

// Обработчик события для кнопки открытия модального окна
openModalBtns.forEach(function(openModalBtn) {
  openModalBtn.addEventListener("click", function() {
    modal.classList.remove("is-hidden");
  });
});

// При клике на кнопку закрытия модального окна, скрываем модальное окно
closeModalBtn.addEventListener("click", function() {
  modal.classList.add("is-hidden");
});
