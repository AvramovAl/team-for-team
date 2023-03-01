const daysSelect = document.getElementById('price-number-nights');
const priceInput = document.getElementById('price-currency-nights');
const maxDays = 20;

for (let i = 1; i <= maxDays; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  daysSelect.appendChild(option);
}

 // Установка значения по умолчанию
  daysSelect.value = "1";
  priceInput.value = "1000";

daysSelect.addEventListener('change', function () {
  const days = parseInt(this.value); // получаем значение выбранной опции и преобразуем его в число
  const price = days * 1000; // вычисляем цену
  priceInput.value = price; // устанавливаем значение priceInput равным вычисленной цене
});
