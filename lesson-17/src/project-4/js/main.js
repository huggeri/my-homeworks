/* Создание глобальных переменных */
var a, b;
/* Функция для проверки на числа */
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/* Функция для ввода диапазона */
function setVars() {
  do {
    a = prompt('Start','Введите начало диапазона');
  } 
  while(!isNumeric(a));

  do {
    b = prompt('End', 'Введите конец диапазона');
  } 
  while(!isNumeric(b));
}
/* Функция для поиска всех вхождений 1 */
function allOnes(str) {
  var count = 0, pos = -1;
  while((pos = str.indexOf('1', pos + 1)) != -1) {
    count++;
  }
  return count;
}
/* Функция для вывода количества чисел, в двоичной записи которых ровно 2 единцы*/
function getCountNumber(start, end) {
  var cnt = 0;
  // каждое число в диапазоне преобразуем в двоичную сс в виде строки и ищем все вхождения 1
  for(var i = +start; i <= +end; i++) {
    var varBin = i.toString(2);
    // если ровно 2 вхождения, увеличиваем счётчик на 1 - это подходящее число
    if(allOnes(varBin) == 2) {
      cnt++;
    }
  }
  return cnt || false;
}
/* Получаем диапазон */
setVars();
/* Получаем ответ */
var result = getCountNumber(a, b);
/* ПВывод результата */
alert("В диапазоне чисел от " + a + " до " + 
b + "\n в двоичной записи ровно 2 единцы в " + 
result + " из них.");