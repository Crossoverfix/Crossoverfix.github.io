var map = new YMaps.Map(document.getElementById("map")); 
	map.setCenter(new YMaps.GeoPoint(37.57331250,55.70303278), 10); 
	

	map.addControl(new YMaps.Zoom(), 
		new YMaps.ControlPosition(
			YMaps.ControlPosition.TOP_LEFT,
			new YMaps.Size (5, 5) 
		)
	);
	
	map.addControl(new YMaps.TypeControl());
	map.setType(YMaps.MapType.MAP);

        var styleExample = new YMaps.Style();
        styleExample.iconStyle = new YMaps.IconStyle();
        styleExample.iconStyle.href = "img/baloon.png";
        styleExample.iconStyle.size = new YMaps.Point(20, 31);
        styleExample.iconStyle.offset = new YMaps.Point(-10, -15);
 
	
var cityhair = new YMaps.Geocoder("Россия, Москва, Ленинский проспект, 45"); 
YMaps.Events.observe(cityhair, cityhair.Events.Load, function (cityhair) {
	var geoCoords = cityhair.get(0).getGeoPoint(),
		geoPlacemark = new YMaps.Placemark(geoCoords, {style : styleExample});
		geoPlacemark.name = "Интернет-магазин «Татуировка.рф»";
		geoPlacemark.description = "<div class='1'>Россия, Москва, Ленинский проспект, 45 \n\
            <a href=''>123</a></div";
		map.addOverlay(geoPlacemark); 
});
