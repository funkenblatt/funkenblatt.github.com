function killSelf (node) {
return node.parentNode.removeChild(node);;
};

function prependNode (parent, node) {
return parent.insertBefore(node, parent.childNodes[0]);;
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
x.shift();
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

function fetchUrl (url, method, cb, data) {
var req = new XMLHttpRequest();
req.open(method, url, true);
req.onreadystatechange=function  (e) {
if (req.readyState===4) {
  return cb(req.responseText, req, e);
}

};
return req.send(data||null);;;
};

function juxt () {
var args = toArray(arguments);
return (function  (x) {
return args.map(function  (f) {
return f(x);;
});;
});;;
};

function minBy (keyFn, a) {
return a.reduce(function  (x, y) {
if (keyFn(x)<keyFn(y)) {
  return x;
}
else {
  return y;
}

});;
};

function map (fun) {
var arrays = toArray(arguments).slice(1);
var minArray = minBy(function  (G57096) {
return G57096.length;;
}, arrays);
return minArray.map(function  (x, ix) {
return fun.apply(this, arrays.map(function  (G57097) {
return G57097[ix];;
}));;
});;;
};

function toArray (arrayLike) {
var i = 0;
var out = [];
for (null; i<arrayLike.length; ++(i)) {
out.push(arrayLike[i]);
}
;
return out;;;
};

function reductions (f, a) {
return a.reduce(function  (accums, b) {
if (accums.length===0) {
  accums.push(b);
}
else {
  accums.push(f(accums[accums.length-1], b));
}
;
return accums;;
}, []);;
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
