var viewbag=new ol.View({center:ol.proj.fromLonLat([-122.25611484378452, 37.884265463358915]),zoom:18});

var vecsource=new ol.source.Vector();

var veclayer=new ol.layer.Vector({source:vecsource});

var map=new ol.Map({layers:[new ol.layer.Tile({source:new ol.source.OSM()}), veclayer],target:"map",view:viewbag});

var pointNum=1;

function textStyle (label) {
return new ol.style.Text({text:label,textBaseline:"top",fill:new ol.style.Fill({color:"#0000ff"})});;
};

function coordToV (lon, lat) {
var lon = Math.PI*lon/180;
var lat = Math.PI*lat/180;
return [Math.cos(lon)*Math.cos(lat), Math.sin(lon)*Math.cos(lat), Math.sin(lat)];;;
};

function vDistance (g224, g225) {
var ax = g224[0];
var ay = g224[1];
var az = g224[2];
var bx = g225[0];
var by = g225[1];
var bz = g225[2];
return 6371009*Math.acos(ax*bx+ay*by+az*bz);;
};

function actionQueue (action) {
var q = [];
var running = false;
function runq () {
if ((!(running))) {
  var g226 = q.shift();
var arg = g226[0];
var cont = g226[1];
running=true;
return action(arg, function  (result) {
try {
cont(result);
} catch (err) { console.log("Error: ", err); };
running=false;
if (q.length>0) {
  return runq();
}

});;
}

};
return (function  (arg, cont) {
q.push([arg, cont]);
return runq();;
});;;
};

var elevationQueue=actionQueue(function  (g227, cont) {
var long = g227[0];
var lat = g227[1];
console.log("Fetching ", [long, lat]);
return fetchUrl("https://epqs.nationalmap.gov/v1/json?"+urlencodeObj({x:long,y:lat,units:"Meters"}), "GET", cont);;
});

function totalDistance () {
return toArray(document.querySelectorAll(".point")).map(function  (x) {
var d = x.childNodes[x.childNodes.length-2].innerText;
if (d==="") {
  return 0;
}
else {
  return parseFloat(d);
}

}).reduce(function  (a, b) {
return a+b;;
});;
};

map.on("singleclick", function  (evt) {
var g228 = ol.proj.toLonLat(evt.coordinate);
var long = g228[0];
var lat = g228[1];
var myNum = pointNum;
++(pointNum);
return elevationQueue([long, lat], function  (d) {
var f = new ol.Feature({geometry:new ol.geom.Point(evt.coordinate),name:"Point "+myNum.toString()});
var height = (function  () {
try {
return parseFloat(JSON.parse(d).value).toString();
} catch (err) { return "Err"; };;
})();
var prevNodes = document.querySelectorAll(".point");
var prevNode = (prevNodes.length===0 ? null : prevNodes[prevNodes.length-1]);
var distance = (prevNode ? vDistance(JSON.parse(prevNode.getAttribute("datapt")), coordToV(long, lat)).toString() : "");
var slope = (prevNode ? (height-JSON.parse(prevNode.getAttribute("dataheight")))/distance : "");
f.setStyle(new ol.style.Style({image:new ol.style.Circle({radius:3,fill:new ol.style.Fill({color:"#0000ff"})}),text:textStyle("Point "+myNum.toString()+"\n("+height+"m)")}));
vecsource.addFeature(f);
document.querySelector("#point-info").appendChild(node(["tr", {class:"point",datapt:JSON.stringify(coordToV(long, lat)),dataheight:JSON.stringify(height)}, ["td", myNum.toString()], ["td", long], ["td", lat], ["td", height], ["td", distance], ["td", slope]]));
document.querySelector("#total-dist").innerText=totalDistance().toString();;;
});;;
});

document.querySelector("#clear").onclick=function  () {
pointNum=1;
vecsource.clear();
return toArray(document.querySelectorAll(".point")).forEach(function  (x) {
return x.parentNode.removeChild(x);;
});;
};

function setHeight () {
document.querySelector("#map").style.height=(innerHeight-150).toString()+"px";;
};

setHeight();

window.onresize=setHeight;
