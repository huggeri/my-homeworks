// прячет весь текст с классом 'content__text'
function hideAll() {
  $('div.content__text').addClass('unvisible');
}

// очистить value у input
function resetValue() {
  $('#number').attr('value', '');
}

// показывает текст с классом 'content__elem-' + number, 
// где number - номер элемента
function showElem(number) {
  hideAll();
  if(isCorrectNumber(number)) {
    $('div.content__elem-' + number).removeClass('unvisible');
  }
  else if(number == 0) {
    $('div.content__elem-0').removeClass('unvisible');
  }
  else if(number == 311) {
    $('div.content__elem-311').removeClass('unvisible');
  }
  else if(number == 312) {
    $('div.content__elem-312').removeClass('unvisible');
  }
  else {
    $('div.content__elem-32').removeClass('unvisible');
  }
}

// записывает номер в инпут
function writeNumder() {
  var buttonVal = $(this).val();
  var oldVal = $('#number').val();
  $('#number').attr('value', oldVal + buttonVal);
};


// проверка на не подходящее значение
function isCorrectNumber(number) {
  return (number >= 1 && number <= 31) || false;
}

// запускаем функции только когда документ полностью загрузился
$(document).ready(function() {

// берёт информацию из инпута
// нажатие на ключ выводит информацию по номеру урока, 
// очищает инпут
  $('#key').click(function () {
    var lessonNumber = $('#number').val();
    showElem(lessonNumber);
    resetValue();
  });

// нажатие на кнопки от 1 до 0 записывает информацию в инпут
// закрепляем за каждой кнопкой такую функцию
  for(var i = 0; i <= 9; i++) {
    $('#b-' + i).bind('click', writeNumder);
  }

// нажатие на с позволяет вернуться к инструкции, очищает инпут
  $('#c').click(function () {
    showElem(0);
    resetValue();
  });

// обработчик нажатия на enter
  $('body').keypress(function(e) {
    if (e.which == 13) {
      var lessonNumber = $('#number').val();
      showElem(lessonNumber);
      resetValue();
      return false;
    }
  });
});