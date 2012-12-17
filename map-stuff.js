var myMap;
var markers;
var points = [{lng: -122.169355,
               lat: 37.4288128,
               name: "Smegma University"},
              {lng: -122.2594521,
               lat: 37.8723502,
               name: "UC Berkeley"}];

function setupPoint(point) {
  var marker = new google.maps.Marker({map: myMap,
                                       position: new google.maps.LatLng(point.lat, point.lng),
                                       title: point.name});
  var info = new google.maps.InfoWindow({content: point.name});
  console.log("Doing point: ");
  console.log(point);
  google.maps.event.addListener(marker, 'click',
                                function () {
                                  info.open(myMap, marker);
                                });
  return marker;
}

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.7883044, -122.4098152),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  myMap = new google.maps.Map(document.getElementById("map_canvas"),
                              mapOptions);
  markers = points.map(setupPoint);
}
