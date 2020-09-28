$(function () {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчнию: «широта, долгота».
      center: [55.772168, 37.648456],
      // Уровень масштабирования. Допустимые значения:
      zoom: 12,
      // Элементы управления
      controls: [
        'zoomControl', // Ползунок масштаба
        'rulerControl', // Линейка
        'routeButtonControl', // Панель маршрутизации
        'trafficControl', // Пробки
        'typeSelector', // Переключатель слоев карты
        'fullscreenControl', // Полноэкранный режим
      ]
    });

    const myPlacemark = new ymaps.Placemark([55.772168, 37.648456], {
      // Хинт показывается при наведении мышкой на иконку метки.
      hintContent: 'Москва, ул. Маши Порываевой, 34, БЦ Домников, этаж 10',
    });

    // После того как метка была создана, добавляем её на карту.
    myMap.geoObjects.add(myPlacemark);

  }
})