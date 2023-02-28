// Получаем элементы кнопки открытия модального окна, самого модального окна и кнопки закрытия модального окна
var openModalBtns = document.querySelectorAll(".open-modal-price");
var modal = document.querySelector(".backdrop-price");
var closeModalBtn = document.querySelector(".close-modal-price");

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
