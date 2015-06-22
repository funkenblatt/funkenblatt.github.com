myMap=null;

pathStuff=[];

highlighted=-1;

function infoContent (lat, lng, elevation, marker) {
var button = node(["a", "Add to path"]);
var killButton = node(["a", "Kill Me!!"]);
button.onclick=function  () {
pathStuff.push([lat, lng, elevation]);
return showPath();;
};
killButton.onclick=function  () {
return marker.setMap(null);;
};
return node(["div", button, " ", killButton, ["br"], "Latitude: ", lat, ["br"], "Longitude: ", lng, ["br"], "Elevation: ", elevation, ["br"]]);;;
};

function addCoordMarker (evt) {
return fetchUrl("http://nationalmap.gov/epqs/pqs.php?"+urlencodeObj({y:evt.latLng.lat(),x:evt.latLng.lng(),units:"Meters",output:"json"}), "GET", function  (d) {
var elevation = JSON.parse(d)["USGS_Elevation_Point_Query_Service"]["Elevation_Query"]["Elevation"];
var mark = new google.maps.Marker({map:myMap,title:"foo",position:evt.latLng});
var ix = pathStuff.length;
google.maps.event.addListener(mark, "click", function  (evt) {
highlighted=ix;
return showPath();;
});
pathStuff.push([evt.latLng.lat(), evt.latLng.lng(), elevation, mark, function  (newIx) {
ix=newIx;;
}]);
return showPath();;;
});;
};

function clearPath () {
pathStuff.forEach(function  (G24200) {
var lat = G24200[0];
var lng = G24200[1];
var elevation = G24200[2];
var mark = G24200[3];
return mark.setMap(null);;
});
pathStuff=[];
highlighted=-1;
return showPath();;
};

function roundTo (n, decimals) {
return Math.round(n*Math.pow(10, decimals))/Math.pow(10, decimals);;
};

function cumulativeP () {
return document.getElementById("cumulative").checked;;
};

function showPath () {
var el = document.querySelector("#path-stuff tbody");
var vdeltas = (function  () {
var _ = pathStuff.map(function  (G24201) {
return G24201[2];;
});
var _ = map(function  (a, b) {
return b-a;;
}, _, _.slice(1));
return _;;;
})();
var hdeltas = map(function  (G24202, G24203) {
var lat1 = G24202[0];
var lng1 = G24202[1];
var e1 = G24202[2];
var lat2 = G24203[0];
var lng2 = G24203[1];
var e2 = G24203[2];
return earthDistance(lat1, lng1, lat2, lng2);;
}, pathStuff, pathStuff.slice(1));
var cums = reductions(function  (a, b) {
return a+b;;
}, hdeltas);
el.innerHTML="";
return pathStuff.forEach(function  (G24204, ix) {
var lat = G24204[0];
var lng = G24204[1];
var elevation = G24204[2];
var mark = G24204[3];
var setIx = G24204[4];
var n = node(["tr", ["td", ["button", "X"]], ["td", roundTo(elevation, 3)], ["td", roundTo(((cumulativeP() ? cums : hdeltas))[ix], 3)], ["td", roundTo(vdeltas[ix]/hdeltas[ix], 3)]]);
var deleteButton = n.querySelector("button");
setIx(ix);
deleteButton.onclick=function  () {
pathStuff[ix][3].setMap(null);
pathStuff.splice(ix, 1);
return showPath();;
};
if (ix===highlighted) {
  n.setAttribute("class", "highlighted");
}
;
return el.appendChild(n);;;
});;;
};

function initialize () {
var opts = {center:new google.maps.LatLng(37.85852364995698, -122.26693153381348),zoom:15,mapTypeId:google.maps.MapTypeId.ROADMAP};
myMap=new google.maps.Map(document.querySelector("#map_canvas"), opts);
return google.maps.event.addListener(myMap, "click", function  (evt) {
return addCoordMarker(evt);;
});;;
};

function sin2 (x) {
var _ = Math.sin(x);
var _ = _*_;
return _;;;
};

function toRadians (deg) {
return deg*Math.PI/180;;
};

function greatCircleDist (lat1, lng1, lat2, lng2) {
var G24205 = [lat1, lng1, lat2, lng2].map(toRadians);
var lat1 = G24205[0];
var lng1 = G24205[1];
var lat2 = G24205[2];
var lng2 = G24205[3];
return Math.asin(Math.sqrt(sin2((lng2-lng1)/2)*Math.cos(lat1)*Math.cos(lat2)+sin2((lat2-lat1)/2)))*2;;;
};

function earthDistance (lat1, lng1, lat2, lng2) {
return greatCircleDist(lat1, lng1, lat2, lng2)*6335.439*1000;;
};
