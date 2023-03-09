function validateForms() {
  // Получаем все формы на странице
  const forms = document.querySelectorAll('form');

  // Перебираем все формы на странице
  for (const form of forms) {
    // Получаем все обязательные поля формы
    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    // Проверяем каждое обязательное поле
    for (const input of requiredInputs) {
      if (!input.value.trim()) {
        // Если поле пустое, добавляем класс с ошибкой
        input.classList.add('error');
        isValid = false;
      } else {
        // Если поле заполнено, удаляем класс с ошибкой
        input.classList.remove('error');
      }
    }

    // Если есть ошибки, не отправляем форму
    if (!isValid) {
      alert('Будь ласка, заповніть всі поля форми.' + form.id);
      return false;
    }
  }

  // Если ошибок нет, отправляем формы
  return true;
}

