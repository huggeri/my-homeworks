$(document).ready(function() {
  if($(window).width() > 567) {
    $('.map').attr('style', 'height: 640px');
  }
  else {
    $('.map').attr('style', 'height: 665px');
  }

  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.61140907, 37.20112250],
      zoom: 16
    });

      myPlacemark = new ymaps.Placemark([55.61140907, 37.20112250], {
        hintContent: 'Ремонт квартиир',
        balloonContent: 'Ленина, 10'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/lesson-22/src/project-2/img/footer/geo.png',
            // Размеры метки.
            iconImageSize: [25, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-11.5, -28],
        });

    myMap.geoObjects.add(myPlacemark);
  }

  ymaps.ready(init);
});