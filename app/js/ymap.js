$(function () {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			controls: [],
			center: [51.756824, 36.102871],
			zoom: 12.4,
			autoFitToViewport: 'always'
		}, {
			searchControlProvider: 'yandex#search'
		}),
			myPlacemark = new ymaps.Placemark([51.757653, 36.185658], {
				hintContent: 'Белый лев',
				balloonContent: 'Курск, ул. Ломакина, д.17. 4 этаж'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'http://whitelion.plastilin-art.ru/dist/img/icons/geo_map.svg',
				iconImageSize: [112, 146],
				iconImageOffset: [-61, -146]
			});

		myMap.geoObjects.add(myPlacemark)
	});

});

