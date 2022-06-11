var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(36.652882500000274, 127.48958009999944),
    level: 4
};

var map = new kakao.maps.Map(container, options);

var list_lat = document.getElementById("lat").innerText.split(',');
var list_lon = document.getElementById("lon").innerText.split(',');
var list_name = document.getElementById("name").innerText.split(',');

var restaurantCoordinates = new Array();

for (var idx = 0; idx < list_lat.length; idx++) {
    var latitude = list_lat[idx];
    var longitude = list_lon[idx];
    restaurantCoordinates.push(new kakao.maps.LatLng(latitude, longitude));
}

for (var idx = 0; idx < restaurantCoordinates.length; idx++) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: restaurantCoordinates[idx],
        title: list_name[idx]
    });
}

var markerPosition = new kakao.maps.LatLng(36.65182070000023, 127.48781989999938);

var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

var iwContent = '<div style="padding:5px;">삼미파전 닭갈비 <br><a href="https://map.kakao.com/link/map/삼미파전 닭갈비,36.65182070000023, 127.48781989999938" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/삼미파전 닭갈비,36.65182070000023, 127.48781989999938" style="color:blue" target="_blank">길찾기</a></div>',
    iwPosition = new kakao.maps.LatLng(36.65182070000023, 127.48781989999938);


var infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent
});


infowindow.open(map, marker);