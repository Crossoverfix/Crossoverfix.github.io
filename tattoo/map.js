ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map-tattoo", {
        center: [55.647071, 37.745591],
        zoom: 14
    });
    var myPlacemark = new ymaps.Placemark([55.647071, 37.745591], {
        // Хинт показывается при наведении мышкой на иконку метки.
        hintContent: 'Дом тату эскизов',
        // Балун откроется при клике по метке.
        balloonContent: 'Дом тату эскизов г.Москва ул.Любинская, д.171, корп.1А  Телефон:+7(919)999-0-222'
    });
    myMap.geoObjects.add(myPlacemark);
}