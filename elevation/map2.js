function fetchUrl (url, method, cb, data) {
var req = new XMLHttpRequest();
req.open(method, url, true);
req.onreadystatechange=function  (e) {
if (req.readyState===4) {
  return cb(req.responseText, req, e);
}

};
return req.send((data||null));;;
};
function urlencodeObj (o) {
var out = "";
for (var i in o) {
if (out!="") {
  out+="&";
}
;
out+=encodeURIComponent(i)+"="+encodeURIComponent(o[i]);
};
return out;;;
};
function isAttributes (x) {
return typeof(x)==="object"&&(!((x instanceof Array)));;
};
function node (x, parent) {
if (typeof(x)==="string") {
  return document.createTextNode(x);
}
else {
  if (typeof(x)==="number") {
  return document.createTextNode(JSON.stringify(x));
}
else {
  if (typeof(x)==="undefined") {
  return document.createTextNode("");
}
else {
  if ((x instanceof Array)) {
  if (typeof(x[0])==="string") {
  var el = document.createElement(x[0]);
var attrs = (isAttributes(x[1]) ? x[1] : null);
x.shift();
if (attrs) {
  x.shift();
for (var i in attrs) {
el.setAttribute(i, attrs[i]);
}
}
;
x.forEach(function  (x) {
var _ = node(x, el);
var _ = (_ ? el.appendChild(_) : null);
return _;;;
});
return el;;
}
else {
  if (parent) {
  return x.forEach(function  (x) {
return parent.appendChild(node(x, parent));;
});
}

}

}
else {
  if (true) {
  return x;
}

}

}

}

}

};
var viewbag=new ol.View({center:ol.proj.fromLonLat([-122.25611484378452, 37.884265463358915]),zoom:18});
var vecsource=new ol.source.Vector();
var veclayer=new ol.layer.Vector({source:vecsource});
var map=new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM()}), veclayer],target:"map",view:viewbag});
var pointNum=1;
function textStyle (label) {
return new ol.style.Text({text:label,textBaseline:"top",fill:new ol.style.Fill({color:"#0000ff"})});;
};
map.on("singleclick", function  (evt) {
var g675 = ol.proj.toLonLat(evt.coordinate);
var long = g675[0];
var lat = g675[1];
return fetchUrl("https://epqs.nationalmap.gov/v1/json?"+urlencodeObj({x:long,y:lat,units:"Meters"}), "GET", function  (d) {
var f = new ol.Feature({geometry:new ol.geom.Point(evt.coordinate),name:"Point "+pointNum.toString()});
f.setStyle(new ol.style.Style({image:new ol.style.Circle({radius:3,fill:new ol.style.Fill({color:"#0000ff"})}),text:textStyle("Point "+pointNum.toString())}));
vecsource.addFeature(f);
document.querySelector("#point-info").appendChild(node(["tr", {class:"point"}, ["td", pointNum.toString()], ["td", long], ["td", lat], ["td", parseFloat(JSON.parse(d).value)]]));
++(pointNum);;;
});;;
});
function toArray (arrayLike) {
var i = 0;
var out = [];
for (null; i<arrayLike.length; ++(i)) {
out.push(arrayLike[i]);
}
;
return out;;;
};
document.querySelector("#clear").onclick=function  () {
pointNum=1;
vecsource.clear();
return toArray(document.querySelectorAll(".point")).forEach(function  (x) {
return x.parentNode.removeChild(x);;
});;
}
