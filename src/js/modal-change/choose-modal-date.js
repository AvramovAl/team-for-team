function setDefaultDate(elementId, daysToAdd) {
  var today = new Date();
  today.setDate(today.getDate() + daysToAdd);

  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  var todayString = dd + '.' + mm + '.' + yyyy;

  document.getElementById(elementId).value=todayString;
}

// Установка значения по умолчанию для элемента "user-choose-date-in"
setDefaultDate('user-choose-date-in', 0); // 0 для сегодняшней даты, 1 для завтрашней даты и т.д.

// Установка значения по умолчанию для элемента "user-choose-date-out"
setDefaultDate('user-choose-date-out', 1); // 0 для завтрашней даты, 1 для послезавтра и т.д.

// Установка значения по умолчанию для элемента "user-choose-date-in2"
setDefaultDate('table-user-date', 0); // 0 для сегодняшней даты, 1 для завтрашней даты и т.д.

