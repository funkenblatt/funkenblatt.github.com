function e(a) {
  throw a;
}
var g = void 0, j = !0, k = null, l = !1;
function aa() {
  return function(a) {
    return a
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var r;
function s(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function t(a) {
  return a !== g
}
function ba(a) {
  return"string" == typeof a
}
var ca = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), da = 0;
function fa(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ga(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, p, q, v, w, G) {
    if("%" == v) {
      return"%"
    }
    var J = c.shift();
    "undefined" == typeof J && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = J;
    return ga.la[v].apply(k, arguments)
  })
}
ga.la = {};
ga.la.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ga.la.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
ga.la.d = function(a, b, c, d, f, h, i, p) {
  return ga.la.f(parseInt(a, 10), b, c, d, 0, h, i, p)
};
ga.la.i = ga.la.d;
ga.la.u = ga.la.d;
function ha(a, b) {
  a != k && this.append.apply(this, arguments)
}
ha.prototype.Ja = "";
ha.prototype.append = function(a, b, c) {
  this.Ja += a;
  if(b != k) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ja += arguments[d]
    }
  }
  return this
};
ha.prototype.toString = m("Ja");
var u;
function x(a) {
  return a != k && a !== l
}
function ia(a) {
  return x(a) ? l : j
}
function y(a, b) {
  return a[s(b == k ? k : b)] ? j : a._ ? j : l
}
function z(a, b) {
  return Error(["No protocol method ", a, " defined for type ", s(b), ": ", b].join(""))
}
function ja(a) {
  return Array.prototype.slice.call(arguments)
}
var ka, la = k, la = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Array(a);
    case 2:
      return la.b(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
la.b = function(a) {
  return Array(a)
};
la.a = function(a, b) {
  return la.b(b)
};
ka = la;
var ma = g, na = g, pa, qa = k;
function ra(a) {
  return qa.a(k, a)
}
function sa(a, b) {
  return na.c ? na.c(function(a, b) {
    a.push(b);
    return a
  }, [], b) : na.call(k, function(a, b) {
    a.push(b);
    return a
  }, [], b)
}
qa = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ra.call(this, a);
    case 2:
      return sa.call(this, 0, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qa.b = ra;
qa.a = sa;
pa = qa;
var ta = {}, ua = {};
function va(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  var c = va[s(a == k ? k : a)];
  c ? b = c : (c = va._) ? b = c : e(z("ICounted.-count", a));
  return b.call(k, a)
}
function wa(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  var c = wa[s(a == k ? k : a)];
  c ? b = c : (c = wa._) ? b = c : e(z("IEmptyableCollection.-empty", a));
  return b.call(k, a)
}
var xa = {};
function za(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = za[s(a == k ? k : a)];
  d ? c = d : (d = za._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(k, a, b)
}
var Aa = {}, A, Ba = k;
function Ca(a, b) {
  if(a ? a.W : a) {
    return a.W(a, b)
  }
  var c;
  var d = A[s(a == k ? k : a)];
  d ? c = d : (d = A._) ? c = d : e(z("IIndexed.-nth", a));
  return c.call(k, a, b)
}
function Da(a, b, c) {
  if(a ? a.R : a) {
    return a.R(a, b, c)
  }
  var d;
  var f = A[s(a == k ? k : a)];
  f ? d = f : (f = A._) ? d = f : e(z("IIndexed.-nth", a));
  return d.call(k, a, b, c)
}
Ba = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ca.call(this, a, b);
    case 3:
      return Da.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ba.a = Ca;
Ba.c = Da;
A = Ba;
var Ea = {}, Fa = {};
function B(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  var c = B[s(a == k ? k : a)];
  c ? b = c : (c = B._) ? b = c : e(z("ISeq.-first", a));
  return b.call(k, a)
}
function C(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  var c = C[s(a == k ? k : a)];
  c ? b = c : (c = C._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(k, a)
}
var Ga = {};
function Ha(a) {
  if(a ? a.ta : a) {
    return a.ta(a)
  }
  var b;
  var c = Ha[s(a == k ? k : a)];
  c ? b = c : (c = Ha._) ? b = c : e(z("INext.-next", a));
  return b.call(k, a)
}
var D, Ja = k;
function Ka(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = D[s(a == k ? k : a)];
  d ? c = d : (d = D._) ? c = d : e(z("ILookup.-lookup", a));
  return c.call(k, a, b)
}
function La(a, b, c) {
  if(a ? a.v : a) {
    return a.v(a, b, c)
  }
  var d;
  var f = D[s(a == k ? k : a)];
  f ? d = f : (f = D._) ? d = f : e(z("ILookup.-lookup", a));
  return d.call(k, a, b, c)
}
Ja = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.call(this, a, b);
    case 3:
      return La.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ja.a = Ka;
Ja.c = La;
D = Ja;
function Ma(a, b) {
  if(a ? a.Ka : a) {
    return a.Ka(a, b)
  }
  var c;
  var d = Ma[s(a == k ? k : a)];
  d ? c = d : (d = Ma._) ? c = d : e(z("IAssociative.-contains-key?", a));
  return c.call(k, a, b)
}
function Na(a, b, c) {
  if(a ? a.V : a) {
    return a.V(a, b, c)
  }
  var d;
  var f = Na[s(a == k ? k : a)];
  f ? d = f : (f = Na._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(k, a, b, c)
}
var Oa = {};
function Pa(a, b) {
  if(a ? a.La : a) {
    return a.La(a, b)
  }
  var c;
  var d = Pa[s(a == k ? k : a)];
  d ? c = d : (d = Pa._) ? c = d : e(z("IMap.-dissoc", a));
  return c.call(k, a, b)
}
var Qa = {};
function Ra(a) {
  if(a ? a.Ta : a) {
    return a.Ta(a)
  }
  var b;
  var c = Ra[s(a == k ? k : a)];
  c ? b = c : (c = Ra._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(k, a)
}
function Sa(a) {
  if(a ? a.Ua : a) {
    return a.Ua(a)
  }
  var b;
  var c = Sa[s(a == k ? k : a)];
  c ? b = c : (c = Sa._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(k, a)
}
var Ta = {};
function Ua(a, b) {
  if(a ? a.Cb : a) {
    return a.Cb(a, b)
  }
  var c;
  var d = Ua[s(a == k ? k : a)];
  d ? c = d : (d = Ua._) ? c = d : e(z("ISet.-disjoin", a));
  return c.call(k, a, b)
}
function Va(a) {
  if(a ? a.Ba : a) {
    return a.Ba(a)
  }
  var b;
  var c = Va[s(a == k ? k : a)];
  c ? b = c : (c = Va._) ? b = c : e(z("IStack.-peek", a));
  return b.call(k, a)
}
var Wa = {};
function Xa(a) {
  if(a ? a.Za : a) {
    return a.Za(a)
  }
  var b;
  var c = Xa[s(a == k ? k : a)];
  c ? b = c : (c = Xa._) ? b = c : e(z("IDeref.-deref", a));
  return b.call(k, a)
}
var Ya = {};
function Za(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  var c = Za[s(a == k ? k : a)];
  c ? b = c : (c = Za._) ? b = c : e(z("IMeta.-meta", a));
  return b.call(k, a)
}
function $a(a, b) {
  if(a ? a.L : a) {
    return a.L(a, b)
  }
  var c;
  var d = $a[s(a == k ? k : a)];
  d ? c = d : (d = $a._) ? c = d : e(z("IWithMeta.-with-meta", a));
  return c.call(k, a, b)
}
var ab = {}, bb, cb = k;
function db(a, b) {
  if(a ? a.za : a) {
    return a.za(a, b)
  }
  var c;
  var d = bb[s(a == k ? k : a)];
  d ? c = d : (d = bb._) ? c = d : e(z("IReduce.-reduce", a));
  return c.call(k, a, b)
}
function eb(a, b, c) {
  if(a ? a.Aa : a) {
    return a.Aa(a, b, c)
  }
  var d;
  var f = bb[s(a == k ? k : a)];
  f ? d = f : (f = bb._) ? d = f : e(z("IReduce.-reduce", a));
  return d.call(k, a, b, c)
}
cb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return db.call(this, a, b);
    case 3:
      return eb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cb.a = db;
cb.c = eb;
bb = cb;
function fb(a, b) {
  if(a ? a.z : a) {
    return a.z(a, b)
  }
  var c;
  var d = fb[s(a == k ? k : a)];
  d ? c = d : (d = fb._) ? c = d : e(z("IEquiv.-equiv", a));
  return c.call(k, a, b)
}
function gb(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = gb[s(a == k ? k : a)];
  c ? b = c : (c = gb._) ? b = c : e(z("IHash.-hash", a));
  return b.call(k, a)
}
function hb(a) {
  if(a ? a.N : a) {
    return a.N(a)
  }
  var b;
  var c = hb[s(a == k ? k : a)];
  c ? b = c : (c = hb._) ? b = c : e(z("ISeqable.-seq", a));
  return b.call(k, a)
}
var ib = {}, jb = {};
function kb(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  var c = kb[s(a == k ? k : a)];
  c ? b = c : (c = kb._) ? b = c : e(z("IReversible.-rseq", a));
  return b.call(k, a)
}
var lb = {};
function nb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = nb[s(a == k ? k : a)];
  d ? c = d : (d = nb._) ? c = d : e(z("IPrintable.-pr-seq", a));
  return c.call(k, a, b)
}
function E(a, b) {
  if(a ? a.Eb : a) {
    return a.Eb(0, b)
  }
  var c;
  var d = E[s(a == k ? k : a)];
  d ? c = d : (d = E._) ? c = d : e(z("IWriter.-write", a));
  return c.call(k, a, b)
}
function ob(a) {
  if(a ? a.Ib : a) {
    return k
  }
  var b;
  var c = ob[s(a == k ? k : a)];
  c ? b = c : (c = ob._) ? b = c : e(z("IWriter.-flush", a));
  return b.call(k, a)
}
var pb = {};
function qb(a, b, c) {
  if(a ? a.C : a) {
    return a.C(a, b, c)
  }
  var d;
  var f = qb[s(a == k ? k : a)];
  f ? d = f : (f = qb._) ? d = f : e(z("IPrintWithWriter.-pr-writer", a));
  return d.call(k, a, b, c)
}
function rb(a, b, c) {
  if(a ? a.Db : a) {
    return a.Db(a, b, c)
  }
  var d;
  var f = rb[s(a == k ? k : a)];
  f ? d = f : (f = rb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(k, a, b, c)
}
var sb = {};
function tb(a) {
  if(a ? a.ya : a) {
    return a.ya(a)
  }
  var b;
  var c = tb[s(a == k ? k : a)];
  c ? b = c : (c = tb._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(k, a)
}
function ub(a, b) {
  if(a ? a.Da : a) {
    return a.Da(a, b)
  }
  var c;
  var d = ub[s(a == k ? k : a)];
  d ? c = d : (d = ub._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(k, a, b)
}
function vb(a) {
  if(a ? a.Ma : a) {
    return a.Ma(a)
  }
  var b;
  var c = vb[s(a == k ? k : a)];
  c ? b = c : (c = vb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(k, a)
}
function wb(a, b, c) {
  if(a ? a.Ca : a) {
    return a.Ca(a, b, c)
  }
  var d;
  var f = wb[s(a == k ? k : a)];
  f ? d = f : (f = wb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(k, a, b, c)
}
var xb = {};
function yb(a, b) {
  if(a ? a.zb : a) {
    return a.zb(a, b)
  }
  var c;
  var d = yb[s(a == k ? k : a)];
  d ? c = d : (d = yb._) ? c = d : e(z("IComparable.-compare", a));
  return c.call(k, a, b)
}
function zb(a) {
  if(a ? a.xb : a) {
    return a.xb()
  }
  var b;
  var c = zb[s(a == k ? k : a)];
  c ? b = c : (c = zb._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(k, a)
}
var Ab = {};
function Bb(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = Bb[s(a == k ? k : a)];
  c ? b = c : (c = Bb._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(k, a)
}
function Cb(a) {
  if(a ? a.Sa : a) {
    return a.Sa(a)
  }
  var b;
  var c = Cb[s(a == k ? k : a)];
  c ? b = c : (c = Cb._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(k, a)
}
function F(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 32, b = x(b ? b : a.Mb) ? j : a.j ? l : y(Ea, a)) : b = y(Ea, a);
    a = x(b) ? a : hb(a)
  }
  return a
}
function H(a) {
  if(a == k) {
    return k
  }
  var b;
  a ? (b = a.j & 64, b = x(b ? b : a.$a) ? j : a.j ? l : y(Fa, a)) : b = y(Fa, a);
  if(x(b)) {
    return B(a)
  }
  a = F(a);
  return a == k ? k : B(a)
}
function I(a) {
  if(a != k) {
    var b;
    a ? (b = a.j & 64, b = x(b ? b : a.$a) ? j : a.j ? l : y(Fa, a)) : b = y(Fa, a);
    if(x(b)) {
      return C(a)
    }
    a = F(a);
    return a != k ? C(a) : K
  }
  return K
}
function L(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 128, b = x(b ? b : a.Rb) ? j : a.j ? l : y(Ga, a)) : b = y(Ga, a);
    a = x(b) ? Ha(a) : F(I(a))
  }
  return a
}
var Db, Eb = k;
function Fb(a, b) {
  var c = a === b;
  return c ? c : fb(a, b)
}
function Gb(a, b, c) {
  for(;;) {
    if(x(Eb.a(a, b))) {
      if(L(c)) {
        a = b, b = H(c), c = L(c)
      }else {
        return Eb.a(b, H(c))
      }
    }else {
      return l
    }
  }
}
function Hb(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Gb.call(this, a, b, d)
}
Hb.o = 2;
Hb.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return Gb(b, c, a)
};
Hb.g = Gb;
Eb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return j;
    case 2:
      return Fb.call(this, a, b);
    default:
      return Hb.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eb.o = 2;
Eb.m = Hb.m;
Eb.b = n(j);
Eb.a = Fb;
Eb.g = Hb.g;
Db = Eb;
function N(a, b) {
  return b instanceof a
}
var Ib = g, O = g, Jb = g;
gb["null"] = n(0);
var Kb = k, Kb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
D["null"] = Kb;
Na["null"] = function(a, b, c) {
  return Ib.a ? Ib.a(b, c) : Ib.call(k, b, c)
};
Ga["null"] = j;
Ha["null"] = n(k);
pb["null"] = j;
qb["null"] = function(a, b) {
  return E(b, "nil")
};
xa["null"] = j;
za["null"] = function(a, b) {
  return O.b ? O.b(b) : O.call(k, b)
};
ab["null"] = j;
var Lb = k, Lb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b.A ? b.A() : b.call(k);
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb["null"] = Lb;
lb["null"] = j;
nb["null"] = function() {
  return O.b ? O.b("nil") : O.call(k, "nil")
};
Ta["null"] = j;
Ua["null"] = n(k);
ua["null"] = j;
va["null"] = n(0);
Va["null"] = n(k);
Fa["null"] = j;
B["null"] = n(k);
C["null"] = function() {
  return O.A ? O.A() : O.call(k)
};
fb["null"] = function(a, b) {
  return b == k
};
$a["null"] = n(k);
Ya["null"] = j;
Za["null"] = n(k);
Aa["null"] = j;
var Mb = k, Mb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return k;
    case 3:
      return c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A["null"] = Mb;
wa["null"] = n(k);
Oa["null"] = j;
Pa["null"] = n(k);
Date.prototype.z = function(a, b) {
  var c = N(Date, b);
  return c ? a.toString() === b.toString() : c
};
gb.number = function(a) {
  return Math.floor(a) % 2147483647
};
fb.number = function(a, b) {
  return a === b
};
gb["boolean"] = function(a) {
  return a === j ? 1 : 0
};
var P = g;
$a["function"] = function(a, b) {
  return P.a ? P.a(function() {
    if(g === u) {
      u = {};
      u = function(a, b, c) {
        this.l = a;
        this.va = b;
        this.qb = c;
        this.r = 0;
        this.j = 393217
      };
      u.Z = j;
      u.ba = function() {
        return O.b ? O.b("cljs.core/t3686") : O.call(k, "cljs.core/t3686")
      };
      u.ca = function(a, b) {
        return E(b, "cljs.core/t3686")
      };
      var c = function(a, b) {
        return ma.a ? ma.a(a.va, b) : ma.call(k, a.va, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = M(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.m = function(a) {
        var b = H(a), a = I(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.wb = j;
      u.prototype.J = m("qb");
      u.prototype.L = function(a, b) {
        return new u(this.l, this.va, b)
      }
    }
    return new u(b, a, k)
  }(), b) : P.call(k, function() {
    if(g === u) {
      u = function(a, b, c) {
        this.l = a;
        this.va = b;
        this.qb = c;
        this.r = 0;
        this.j = 393217
      };
      u.Z = j;
      u.ba = function() {
        return O.b ? O.b("cljs.core/t3686") : O.call(k, "cljs.core/t3686")
      };
      u.ca = function(a, b) {
        return E(b, "cljs.core/t3686")
      };
      var c = function(a, b) {
        return ma.a ? ma.a(a.va, b) : ma.call(k, a.va, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = M(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.m = function(a) {
        var b = H(a), a = I(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.wb = j;
      u.prototype.J = m("qb");
      u.prototype.L = function(a, b) {
        return new u(this.l, this.va, b)
      }
    }
    return new u(b, a, k)
  }(), b)
};
Ya["function"] = j;
Za["function"] = n(k);
ta["function"] = j;
gb._ = function(a) {
  return a[ca] || (a[ca] = ++da)
};
var R = g;
function Nb(a) {
  this.k = a;
  this.r = 0;
  this.j = 32768
}
Nb.prototype.Za = m("k");
var Ob, Pb = k;
function Qb(a, b) {
  var c = va(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(k)
  }
  for(var d = A.a(a, 0), f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, A.a(a, f)) : b.call(k, d, A.a(a, f));
      if(N(Nb, d)) {
        return R.b ? R.b(d) : R.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Rb(a, b, c) {
  for(var d = va(a), f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, A.a(a, f)) : b.call(k, c, A.a(a, f));
      if(N(Nb, c)) {
        return R.b ? R.b(c) : R.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Sb(a, b, c, d) {
  for(var f = va(a);;) {
    if(d < f) {
      c = b.a ? b.a(c, A.a(a, d)) : b.call(k, c, A.a(a, d));
      if(N(Nb, c)) {
        return R.b ? R.b(c) : R.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Pb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Qb.call(this, a, b);
    case 3:
      return Rb.call(this, a, b, c);
    case 4:
      return Sb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pb.a = Qb;
Pb.c = Rb;
Pb.q = Sb;
Ob = Pb;
var Tb, Ub = k;
function Vb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.A ? b.A() : b.call(k)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.a ? b.a(d, a[f]) : b.call(k, d, a[f]);
      if(N(Nb, d)) {
        return R.b ? R.b(d) : R.call(k, d)
      }
      f += 1
    }else {
      return d
    }
  }
}
function Wb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.a ? b.a(c, a[f]) : b.call(k, c, a[f]);
      if(N(Nb, c)) {
        return R.b ? R.b(c) : R.call(k, c)
      }
      f += 1
    }else {
      return c
    }
  }
}
function Xb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.a ? b.a(c, a[d]) : b.call(k, c, a[d]);
      if(N(Nb, c)) {
        return R.b ? R.b(c) : R.call(k, c)
      }
      d += 1
    }else {
      return c
    }
  }
}
Ub = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Vb.call(this, a, b);
    case 3:
      return Wb.call(this, a, b, c);
    case 4:
      return Xb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ub.a = Vb;
Ub.c = Wb;
Ub.q = Xb;
Tb = Ub;
var Yb = g, S = g, T = g, Zb = g;
function $b(a) {
  if(a) {
    var b = a.j & 2, a = x(b ? b : a.Ob) ? j : a.j ? l : y(ua, a)
  }else {
    a = y(ua, a)
  }
  return a
}
function ac(a) {
  if(a) {
    var b = a.j & 16, a = x(b ? b : a.Ab) ? j : a.j ? l : y(Aa, a)
  }else {
    a = y(Aa, a)
  }
  return a
}
function bc(a, b) {
  this.P = a;
  this.p = b;
  this.r = 0;
  this.j = 166199550
}
r = bc.prototype;
r.I = function(a) {
  return Yb.b ? Yb.b(a) : Yb.call(k, a)
};
r.ta = function() {
  return this.p + 1 < this.P.length ? new bc(this.P, this.p + 1) : k
};
r.F = function(a, b) {
  return S.a ? S.a(b, a) : S.call(k, b, a)
};
r.Va = function(a) {
  var b = a.G(a);
  return 0 < b ? new Zb(a, b - 1, k) : K
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.za = function(a, b) {
  return $b(this.P) ? Ob.q(this.P, b, this.P[this.p], this.p + 1) : Ob.q(a, b, this.P[this.p], 0)
};
r.Aa = function(a, b, c) {
  return $b(this.P) ? Ob.q(this.P, b, c, this.p) : Ob.q(a, b, c, 0)
};
r.N = aa();
r.G = function() {
  return this.P.length - this.p
};
r.X = function() {
  return this.P[this.p]
};
r.T = function() {
  return this.p + 1 < this.P.length ? new bc(this.P, this.p + 1) : O.A ? O.A() : O.call(k)
};
r.z = function(a, b) {
  return Jb.a ? Jb.a(a, b) : Jb.call(k, a, b)
};
r.W = function(a, b) {
  var c = b + this.p;
  return c < this.P.length ? this.P[c] : k
};
r.R = function(a, b, c) {
  a = b + this.p;
  return a < this.P.length ? this.P[a] : c
};
r.H = function() {
  return K
};
var cc, dc = k;
function ec(a) {
  return dc.a(a, 0)
}
function fc(a, b) {
  return b < a.length ? new bc(a, b) : k
}
dc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ec.call(this, a);
    case 2:
      return fc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dc.b = ec;
dc.a = fc;
cc = dc;
var M, gc = k;
function hc(a) {
  return cc.a(a, 0)
}
function ic(a, b) {
  return cc.a(a, b)
}
gc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return hc.call(this, a);
    case 2:
      return ic.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gc.b = hc;
gc.a = ic;
M = gc;
ab.array = j;
var jc = k, jc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.a(a, b);
    case 3:
      return Ob.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb.array = jc;
var kc = k, kc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return A.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.array = kc;
Aa.array = j;
var lc = k, lc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < a.length ? a[b] : k;
    case 3:
      return b < a.length ? a[b] : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A.array = lc;
ua.array = j;
va.array = function(a) {
  return a.length
};
hb.array = function(a) {
  return M.a(a, 0)
};
P = g;
Zb = function(a, b, c) {
  this.Xa = a;
  this.p = b;
  this.l = c;
  this.r = 0;
  this.j = 31850574
};
Zb.Z = j;
Zb.ba = function() {
  return O.b ? O.b("cljs.core/RSeq") : O.call(k, "cljs.core/RSeq")
};
Zb.ca = function(a, b) {
  return E(b, "cljs.core/RSeq")
};
r = Zb.prototype;
r.I = function(a) {
  return Yb.b ? Yb.b(a) : Yb.call(k, a)
};
r.F = function(a, b) {
  return S.a ? S.a(b, a) : S.call(k, b, a)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.G = function() {
  return this.p + 1
};
r.X = function() {
  return A.a(this.Xa, this.p)
};
r.T = function() {
  return 0 < this.p ? new Zb(this.Xa, this.p - 1, k) : K
};
r.z = function(a, b) {
  return Jb.a ? Jb.a(a, b) : Jb.call(k, a, b)
};
r.L = function(a, b) {
  return new Zb(this.Xa, this.p, b)
};
r.J = m("l");
r.H = function() {
  return P.a ? P.a(K, this.l) : P.call(k, K, this.l)
};
fb._ = function(a, b) {
  return a === b
};
var mc, nc = k;
function oc(a, b, c) {
  for(;;) {
    if(x(c)) {
      a = nc.a(a, b), b = H(c), c = L(c)
    }else {
      return nc.a(a, b)
    }
  }
}
function pc(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return oc.call(this, a, b, d)
}
pc.o = 2;
pc.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return oc(b, c, a)
};
pc.g = oc;
nc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return za(a, b);
    default:
      return pc.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
nc.o = 2;
nc.m = pc.m;
nc.a = function(a, b) {
  return za(a, b)
};
nc.g = pc.g;
mc = nc;
function qc(a) {
  if($b(a)) {
    a = va(a)
  }else {
    a: {
      for(var a = F(a), b = 0;;) {
        if($b(a)) {
          a = b + va(a);
          break a
        }
        a = L(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var rc, sc = k;
function tc(a, b) {
  for(;;) {
    a == k && e(Error("Index out of bounds"));
    if(0 === b) {
      if(F(a)) {
        return H(a)
      }
      e(Error("Index out of bounds"))
    }
    if(ac(a)) {
      return A.a(a, b)
    }
    if(F(a)) {
      var c = L(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function uc(a, b, c) {
  for(;;) {
    if(a == k) {
      return c
    }
    if(0 === b) {
      return F(a) ? H(a) : c
    }
    if(ac(a)) {
      return A.c(a, b, c)
    }
    if(F(a)) {
      a = L(a), b -= 1
    }else {
      return c
    }
  }
}
sc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return tc.call(this, a, b);
    case 3:
      return uc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
sc.a = tc;
sc.c = uc;
rc = sc;
var U, vc = k;
function wc(a, b) {
  var c;
  a == k ? c = k : (a ? (c = a.j & 16, c = x(c ? c : a.Ab) ? j : a.j ? l : y(Aa, a)) : c = y(Aa, a), c = x(c) ? A.a(a, Math.floor(b)) : rc.a(a, Math.floor(b)));
  return c
}
function xc(a, b, c) {
  if(a != k) {
    var d;
    a ? (d = a.j & 16, d = x(d ? d : a.Ab) ? j : a.j ? l : y(Aa, a)) : d = y(Aa, a);
    a = x(d) ? A.c(a, Math.floor(b), c) : rc.c(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
vc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wc.call(this, a, b);
    case 3:
      return xc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vc.a = wc;
vc.c = xc;
U = vc;
var yc, zc = k;
function Ac(a, b, c, d) {
  for(;;) {
    if(a = zc.c(a, b, c), x(d)) {
      b = H(d), c = H(L(d)), d = L(L(d))
    }else {
      return a
    }
  }
}
function Bc(a, b, c, d) {
  var f = k;
  t(d) && (f = M(Array.prototype.slice.call(arguments, 3), 0));
  return Ac.call(this, a, b, c, f)
}
Bc.o = 3;
Bc.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), a = I(L(L(a)));
  return Ac(b, c, d, a)
};
Bc.g = Ac;
zc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Na(a, b, c);
    default:
      return Bc.g(a, b, c, M(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zc.o = 3;
zc.m = Bc.m;
zc.c = function(a, b, c) {
  return Na(a, b, c)
};
zc.g = Bc.g;
yc = zc;
var Cc, Dc = k;
function Ec(a, b, c) {
  for(;;) {
    if(a = Dc.a(a, b), x(c)) {
      b = H(c), c = L(c)
    }else {
      return a
    }
  }
}
function Fc(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Ec.call(this, a, b, d)
}
Fc.o = 2;
Fc.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return Ec(b, c, a)
};
Fc.g = Ec;
Dc = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Pa(a, b);
    default:
      return Fc.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dc.o = 2;
Dc.m = Fc.m;
Dc.b = aa();
Dc.a = function(a, b) {
  return Pa(a, b)
};
Dc.g = Fc.g;
Cc = Dc;
P = function(a, b) {
  return $a(a, b)
};
function Gc(a) {
  var b;
  a ? (b = a.j & 131072, b = x(b ? b : a.Bb) ? j : a.j ? l : y(Ya, a)) : b = y(Ya, a);
  return x(b) ? Za(a) : k
}
var Hc, Ic = k;
function Jc(a, b, c) {
  for(;;) {
    if(a = Ic.a(a, b), x(c)) {
      b = H(c), c = L(c)
    }else {
      return a
    }
  }
}
function Kc(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Jc.call(this, a, b, d)
}
Kc.o = 2;
Kc.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return Jc(b, c, a)
};
Kc.g = Jc;
Ic = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return a;
    case 2:
      return Ua(a, b);
    default:
      return Kc.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ic.o = 2;
Ic.m = Kc.m;
Ic.b = aa();
Ic.a = function(a, b) {
  return Ua(a, b)
};
Ic.g = Kc.g;
Hc = Ic;
var Lc = {}, Mc = 0, Nc, Oc = k;
function Pc(a) {
  return Oc.a(a, j)
}
function Qc(a, b) {
  var c;
  c = ba(a);
  x(c ? b : c) ? (255 < Mc && (Lc = {}, Mc = 0), c = Lc[a], c == k && (c = fa(a), Lc[a] = c, Mc += 1)) : c = gb(a);
  return c
}
Oc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Pc.call(this, a);
    case 2:
      return Qc.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oc.b = Pc;
Oc.a = Qc;
Nc = Oc;
function Rc(a) {
  var b = a == k;
  return b ? b : ia(F(a))
}
function Sc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 4096, a = x(b ? b : a.Ub) ? j : a.j ? l : y(Ta, a)
    }else {
      a = y(Ta, a)
    }
  }
  return a
}
function Tc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 1024, a = x(b ? b : a.Qb) ? j : a.j ? l : y(Oa, a)
    }else {
      a = y(Oa, a)
    }
  }
  return a
}
function Uc(a) {
  if(a) {
    var b = a.j & 16384, a = x(b ? b : a.Vb) ? j : a.j ? l : y(Wa, a)
  }else {
    a = y(Wa, a)
  }
  return a
}
function Vc(a) {
  if(a) {
    var b = a.r & 512, a = x(b ? b : a.Nb) ? j : a.r ? l : y(Ab, a)
  }else {
    a = y(Ab, a)
  }
  return a
}
function Wc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var Xc = {};
function Yc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 64, a = x(b ? b : a.$a) ? j : a.j ? l : y(Fa, a)
    }else {
      a = y(Fa, a)
    }
  }
  return a
}
function Zc(a) {
  var b = ba(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function $c(a) {
  var b = ba(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function ad(a, b) {
  if(a === b) {
    return 0
  }
  if(a == k) {
    return-1
  }
  if(b == k) {
    return 1
  }
  if((a == k ? k : a.constructor) === (b == k ? k : b.constructor)) {
    var c;
    a ? (c = a.r & 2048, c = x(c ? c : a.Fb) ? j : a.r ? l : y(xb, a)) : c = y(xb, a);
    return x(c) ? yb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var bd, cd = k;
function dd(a, b) {
  var c = qc(a), d = qc(b);
  return c < d ? -1 : c > d ? 1 : cd.q(a, b, c, 0)
}
function fd(a, b, c, d) {
  for(;;) {
    var f = ad(U.a(a, d), U.a(b, d)), h = 0 === f;
    if(x(h ? d + 1 < c : h)) {
      d += 1
    }else {
      return f
    }
  }
}
cd = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return dd.call(this, a, b);
    case 4:
      return fd.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cd.a = dd;
cd.q = fd;
bd = cd;
var gd = g, hd, id = k;
function jd(a, b) {
  var c = F(b);
  return c ? na.c ? na.c(a, H(c), L(c)) : na.call(k, a, H(c), L(c)) : a.A ? a.A() : a.call(k)
}
function kd(a, b, c) {
  for(c = F(c);;) {
    if(c) {
      b = a.a ? a.a(b, H(c)) : a.call(k, b, H(c));
      if(N(Nb, b)) {
        return R.b ? R.b(b) : R.call(k, b)
      }
      c = L(c)
    }else {
      return b
    }
  }
}
id = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return jd.call(this, a, b);
    case 3:
      return kd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
id.a = jd;
id.c = kd;
hd = id;
var ld = g, md = k;
function nd(a, b) {
  var c;
  b ? (c = b.j & 524288, c = x(c ? c : b.Hb) ? j : b.j ? l : y(ab, b)) : c = y(ab, b);
  return x(c) ? bb.a(b, a) : hd.a(a, b)
}
function od(a, b, c) {
  var d;
  c ? (d = c.j & 524288, d = x(d ? d : c.Hb) ? j : c.j ? l : y(ab, c)) : d = y(ab, c);
  return x(d) ? bb.c(c, a, b) : hd.c(a, b, c)
}
md = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return nd.call(this, a, b);
    case 3:
      return od.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
md.a = nd;
md.c = od;
na = md;
function pd(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(k, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(k, a)
}
function qd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function rd(a, b) {
  for(var c = b, d = F(a);;) {
    var f = d;
    if(x(f ? 0 < c : f)) {
      c -= 1, d = L(d)
    }else {
      return d
    }
  }
}
var sd, td = k;
function ud(a) {
  return a == k ? "" : a.toString()
}
function vd(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(td.b(H(b))), h = L(b), a = f, b = h
      }else {
        return td.b(a)
      }
    }
  }.call(k, new ha(td.b(a)), b)
}
function wd(a, b) {
  var c = k;
  t(b) && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return vd.call(this, a, c)
}
wd.o = 1;
wd.m = function(a) {
  var b = H(a), a = I(a);
  return vd(b, a)
};
wd.g = vd;
td = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return ud.call(this, a);
    default:
      return wd.g(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.o = 1;
td.m = wd.m;
td.A = n("");
td.b = ud;
td.g = wd.g;
sd = td;
var V, xd = k;
function yd(a) {
  return $c(a) ? a.substring(2, a.length) : Zc(a) ? sd.g(":", M([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
}
function zd(a, b) {
  return function(a, b) {
    for(;;) {
      if(x(b)) {
        var f = a.append(xd.b(H(b))), h = L(b), a = f, b = h
      }else {
        return sd.b(a)
      }
    }
  }.call(k, new ha(xd.b(a)), b)
}
function Ad(a, b) {
  var c = k;
  t(b) && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return zd.call(this, a, c)
}
Ad.o = 1;
Ad.m = function(a) {
  var b = H(a), a = I(a);
  return zd(b, a)
};
Ad.g = zd;
xd = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return yd.call(this, a);
    default:
      return Ad.g(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
xd.o = 1;
xd.m = Ad.m;
xd.A = n("");
xd.b = yd;
xd.g = Ad.g;
V = xd;
var Bd, Cd = k, Cd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Cd.a = function(a, b) {
  return a.substring(b)
};
Cd.c = function(a, b, c) {
  return a.substring(b, c)
};
Bd = Cd;
var Dd = g, Jb = function(a, b) {
  var c;
  b ? (c = b.j & 16777216, c = x(c ? c : b.Tb) || (b.j ? 0 : y(ib, b))) : c = y(ib, b);
  if(c) {
    a: {
      c = F(a);
      for(var d = F(b);;) {
        if(c == k) {
          c = d == k;
          break a
        }
        if(d != k && Db.a(H(c), H(d))) {
          c = L(c), d = L(d)
        }else {
          c = l;
          break a
        }
      }
      c = g
    }
  }else {
    c = k
  }
  return x(c) ? j : l
}, Yb = function(a) {
  return na.c(function(a, c) {
    var d = Nc.a(c, l);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Nc.a(H(a), l), L(a))
}, Ed = g, Fd = g;
function Gd(a) {
  for(var b = 0, a = F(a);;) {
    if(a) {
      var c = H(a), b = (b + (Nc.b(Ed.b ? Ed.b(c) : Ed.call(k, c)) ^ Nc.b(Fd.b ? Fd.b(c) : Fd.call(k, c)))) % 4503599627370496, a = L(a)
    }else {
      return b
    }
  }
}
function Hd(a) {
  for(var b = 0, a = F(a);;) {
    if(a) {
      var c = H(a), b = (b + Nc.b(c)) % 4503599627370496, a = L(a)
    }else {
      return b
    }
  }
}
var Id = g;
function Jd(a, b, c, d, f) {
  this.l = a;
  this.Ha = b;
  this.na = c;
  this.count = d;
  this.n = f;
  this.r = 0;
  this.j = 65413358
}
r = Jd.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.ta = function() {
  return 1 === this.count ? k : this.na
};
r.F = function(a, b) {
  return new Jd(this.l, b, a, this.count + 1, k)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.G = m("count");
r.Ba = m("Ha");
r.X = m("Ha");
r.T = function() {
  return 1 === this.count ? K : this.na
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Jd(b, this.Ha, this.na, this.count, this.n)
};
r.J = m("l");
r.H = function() {
  return K
};
function Kd(a) {
  this.l = a;
  this.r = 0;
  this.j = 65413326
}
r = Kd.prototype;
r.I = n(0);
r.ta = n(k);
r.F = function(a, b) {
  return new Jd(this.l, b, k, 1, k)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = n(k);
r.G = n(0);
r.Ba = n(k);
r.X = n(k);
r.T = function() {
  return K
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Kd(b)
};
r.J = m("l");
r.H = aa();
var K = new Kd(k);
function Ld(a) {
  var b;
  a ? (b = a.j & 134217728, b = x(b ? b : a.Sb) || (a.j ? 0 : y(jb, a))) : b = y(jb, a);
  return b ? kb(a) : na.c(mc, K, a)
}
var Md = k;
function Nd(a) {
  return mc.a(K, a)
}
function Od(a, b) {
  return mc.a(Md.b(b), a)
}
function Pd(a, b, c) {
  return mc.a(Md.a(b, c), a)
}
function Qd(a, b, c, d) {
  return mc.a(mc.a(mc.a(na.c(mc, K, Ld(d)), c), b), a)
}
function Rd(a, b, c, d) {
  var f = k;
  t(d) && (f = M(Array.prototype.slice.call(arguments, 3), 0));
  return Qd.call(this, a, b, c, f)
}
Rd.o = 3;
Rd.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), a = I(L(L(a)));
  return Qd(b, c, d, a)
};
Rd.g = Qd;
Md = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return K;
    case 1:
      return Nd.call(this, a);
    case 2:
      return Od.call(this, a, b);
    case 3:
      return Pd.call(this, a, b, c);
    default:
      return Rd.g(a, b, c, M(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Md.o = 3;
Md.m = Rd.m;
Md.A = function() {
  return K
};
Md.b = Nd;
Md.a = Od;
Md.c = Pd;
Md.g = Rd.g;
O = Md;
function Sd(a, b, c, d) {
  this.l = a;
  this.Ha = b;
  this.na = c;
  this.n = d;
  this.r = 0;
  this.j = 65405164
}
r = Sd.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.ta = function() {
  return this.na == k ? k : hb(this.na)
};
r.F = function(a, b) {
  return new Sd(k, b, a, this.n)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.X = m("Ha");
r.T = function() {
  return this.na == k ? K : this.na
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Sd(b, this.Ha, this.na, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
S = function(a, b) {
  var c = b == k;
  c || (b ? (c = b.j & 64, c = x(c ? c : b.$a) ? j : b.j ? l : y(Fa, b)) : c = y(Fa, b));
  return x(c) ? new Sd(k, a, b, k) : new Sd(k, a, F(b), k)
};
ab.string = j;
var Td = k, Td = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.a(a, b);
    case 3:
      return Ob.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb.string = Td;
var Ud = k, Ud = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return A.a(a, b);
    case 3:
      return A.c(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.string = Ud;
Aa.string = j;
var Vd = k, Vd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return b < va(a) ? a.charAt(b) : k;
    case 3:
      return b < va(a) ? a.charAt(b) : c
  }
  e(Error("Invalid arity: " + arguments.length))
};
A.string = Vd;
ua.string = j;
va.string = function(a) {
  return a.length
};
hb.string = function(a) {
  return cc.a(a, 0)
};
gb.string = function(a) {
  return fa(a)
};
function Wd(a) {
  this.pb = a;
  this.r = 0;
  this.j = 1
}
var Xd = k, Xd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == k) {
        d = k
      }else {
        var f = b.ra;
        d = f == k ? D.c(b, d.pb, k) : f[d.pb]
      }
      return d;
    case 3:
      return b == k ? c : D.c(b, this.pb, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wd.prototype.call = Xd;
Wd.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Yd = k, Yd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.c(b, this.toString(), k);
    case 3:
      return D.c(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Yd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > qc(b) ? D.c(b[0], a, k) : D.c(b[0], a, b[1])
};
function Zd(a) {
  var b = a.x;
  if(a.rb) {
    return b
  }
  a.x = b.A ? b.A() : b.call(k);
  a.rb = j;
  return a.x
}
function W(a, b, c, d) {
  this.l = a;
  this.rb = b;
  this.x = c;
  this.n = d;
  this.r = 0;
  this.j = 31850700
}
r = W.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.ta = function(a) {
  return hb(a.T(a))
};
r.F = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = function(a) {
  return F(Zd(a))
};
r.X = function(a) {
  return H(Zd(a))
};
r.T = function(a) {
  return I(Zd(a))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new W(b, this.rb, this.x, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
var $d = g;
function ae(a, b) {
  this.Wa = a;
  this.end = b;
  this.r = 0;
  this.j = 2
}
ae.prototype.G = m("end");
ae.prototype.add = function(a) {
  this.Wa[this.end] = a;
  return this.end += 1
};
ae.prototype.sa = function() {
  var a = new $d(this.Wa, 0, this.end);
  this.Wa = k;
  return a
};
$d = function(a, b, c) {
  this.e = a;
  this.O = b;
  this.end = c;
  this.r = 0;
  this.j = 524306
};
$d.Z = j;
$d.ba = function() {
  return O.b("cljs.core/ArrayChunk")
};
$d.ca = function(a, b) {
  return E(b, "cljs.core/ArrayChunk")
};
r = $d.prototype;
r.za = function(a, b) {
  return Tb.q(this.e, b, this.e[this.O], this.O + 1)
};
r.Aa = function(a, b, c) {
  return Tb.q(this.e, b, c, this.O)
};
r.xb = function() {
  this.O === this.end && e(Error("-drop-first of empty chunk"));
  return new $d(this.e, this.O + 1, this.end)
};
r.W = function(a, b) {
  return this.e[this.O + b]
};
r.R = function(a, b, c) {
  a = 0 <= b;
  return x(a ? b < this.end - this.O : a) ? this.e[this.O + b] : c
};
r.G = function() {
  return this.end - this.O
};
var be, ce = k;
function de(a) {
  return ce.c(a, 0, a.length)
}
function ee(a, b) {
  return ce.c(a, b, a.length)
}
function fe(a, b, c) {
  return new $d(a, b, c)
}
ce = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return de.call(this, a);
    case 2:
      return ee.call(this, a, b);
    case 3:
      return fe.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ce.b = de;
ce.a = ee;
ce.c = fe;
be = ce;
function ge(a, b, c, d) {
  this.sa = a;
  this.qa = b;
  this.l = c;
  this.n = d;
  this.j = 31850604;
  this.r = 1536
}
r = ge.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.N = aa();
r.X = function() {
  return A.a(this.sa, 0)
};
r.T = function() {
  return 1 < va(this.sa) ? new ge(zb(this.sa), this.qa, this.l, k) : this.qa == k ? K : this.qa
};
r.yb = function() {
  return this.qa == k ? k : this.qa
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new ge(this.sa, this.qa, b, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
r.Ya = m("sa");
r.Sa = function() {
  return this.qa == k ? K : this.qa
};
function he(a, b) {
  return 0 === va(a) ? b : new ge(a, b, k, k)
}
gd = function(a) {
  for(var b = [];;) {
    if(F(a)) {
      b.push(H(a)), a = L(a)
    }else {
      return b
    }
  }
};
function ie(a, b) {
  if($b(a)) {
    return qc(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? F(c) : h;
    if(x(h)) {
      c = L(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var ke = function je(b) {
  return b == k ? k : L(b) == k ? F(H(b)) : S(H(b), je(L(b)))
}, le, me = k;
function ne() {
  return new W(k, l, n(k), k)
}
function oe(a) {
  return new W(k, l, function() {
    return a
  }, k)
}
function pe(a, b) {
  return new W(k, l, function() {
    var c = F(a);
    return c ? Vc(c) ? he(Bb(c), me.a(Cb(c), b)) : S(H(c), me.a(I(c), b)) : b
  }, k)
}
function qe(a, b, c) {
  return function f(a, b) {
    return new W(k, l, function() {
      var c = F(a);
      return c ? Vc(c) ? he(Bb(c), f(Cb(c), b)) : S(H(c), f(I(c), b)) : x(b) ? f(H(b), L(b)) : k
    }, k)
  }(me.a(a, b), c)
}
function re(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return qe.call(this, a, b, d)
}
re.o = 2;
re.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return qe(b, c, a)
};
re.g = qe;
me = function(a, b, c) {
  switch(arguments.length) {
    case 0:
      return ne.call(this);
    case 1:
      return oe.call(this, a);
    case 2:
      return pe.call(this, a, b);
    default:
      return re.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
me.o = 2;
me.m = re.m;
me.A = ne;
me.b = oe;
me.a = pe;
me.g = re.g;
le = me;
var se, te = k;
function ue(a, b, c) {
  return S(a, S(b, c))
}
function ve(a, b, c, d) {
  return S(a, S(b, S(c, d)))
}
function we(a, b, c, d, f) {
  return S(a, S(b, S(c, S(d, ke(f)))))
}
function xe(a, b, c, d, f) {
  var h = k;
  t(f) && (h = M(Array.prototype.slice.call(arguments, 4), 0));
  return we.call(this, a, b, c, d, h)
}
xe.o = 4;
xe.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), f = H(L(L(L(a)))), a = I(L(L(L(a))));
  return we(b, c, d, f, a)
};
xe.g = we;
te = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return F(a);
    case 2:
      return S(a, b);
    case 3:
      return ue.call(this, a, b, c);
    case 4:
      return ve.call(this, a, b, c, d);
    default:
      return xe.g(a, b, c, d, M(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
te.o = 4;
te.m = xe.m;
te.b = function(a) {
  return F(a)
};
te.a = function(a, b) {
  return S(a, b)
};
te.c = ue;
te.q = ve;
te.g = xe.g;
se = te;
function ye(a, b, c) {
  var d = F(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(k)
  }
  var c = B(d), f = C(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(k, c)
  }
  var d = B(f), h = C(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(k, c, d)
  }
  var f = B(h), i = C(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(k, c, d, f)
  }
  var h = B(i), p = C(i);
  if(4 === b) {
    return a.q ? a.q(c, d, f, h) : a.q ? a.q(c, d, f, h) : a.call(k, c, d, f, h)
  }
  i = B(p);
  p = C(p);
  if(5 === b) {
    return a.Y ? a.Y(c, d, f, h, i) : a.Y ? a.Y(c, d, f, h, i) : a.call(k, c, d, f, h, i)
  }
  var a = B(p), q = C(p);
  if(6 === b) {
    return a.ja ? a.ja(c, d, f, h, i, a) : a.ja ? a.ja(c, d, f, h, i, a) : a.call(k, c, d, f, h, i, a)
  }
  var p = B(q), v = C(q);
  if(7 === b) {
    return a.Ea ? a.Ea(c, d, f, h, i, a, p) : a.Ea ? a.Ea(c, d, f, h, i, a, p) : a.call(k, c, d, f, h, i, a, p)
  }
  var q = B(v), w = C(v);
  if(8 === b) {
    return a.mb ? a.mb(c, d, f, h, i, a, p, q) : a.mb ? a.mb(c, d, f, h, i, a, p, q) : a.call(k, c, d, f, h, i, a, p, q)
  }
  var v = B(w), G = C(w);
  if(9 === b) {
    return a.nb ? a.nb(c, d, f, h, i, a, p, q, v) : a.nb ? a.nb(c, d, f, h, i, a, p, q, v) : a.call(k, c, d, f, h, i, a, p, q, v)
  }
  var w = B(G), J = C(G);
  if(10 === b) {
    return a.ab ? a.ab(c, d, f, h, i, a, p, q, v, w) : a.ab ? a.ab(c, d, f, h, i, a, p, q, v, w) : a.call(k, c, d, f, h, i, a, p, q, v, w)
  }
  var G = B(J), Q = C(J);
  if(11 === b) {
    return a.bb ? a.bb(c, d, f, h, i, a, p, q, v, w, G) : a.bb ? a.bb(c, d, f, h, i, a, p, q, v, w, G) : a.call(k, c, d, f, h, i, a, p, q, v, w, G)
  }
  var J = B(Q), $ = C(Q);
  if(12 === b) {
    return a.cb ? a.cb(c, d, f, h, i, a, p, q, v, w, G, J) : a.cb ? a.cb(c, d, f, h, i, a, p, q, v, w, G, J) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J)
  }
  var Q = B($), ea = C($);
  if(13 === b) {
    return a.eb ? a.eb(c, d, f, h, i, a, p, q, v, w, G, J, Q) : a.eb ? a.eb(c, d, f, h, i, a, p, q, v, w, G, J, Q) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q)
  }
  var $ = B(ea), oa = C(ea);
  if(14 === b) {
    return a.fb ? a.fb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $) : a.fb ? a.fb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $)
  }
  var ea = B(oa), ya = C(oa);
  if(15 === b) {
    return a.gb ? a.gb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea) : a.gb ? a.gb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea)
  }
  var oa = B(ya), Ia = C(ya);
  if(16 === b) {
    return a.hb ? a.hb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa) : a.hb ? a.hb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa)
  }
  var ya = B(Ia), mb = C(Ia);
  if(17 === b) {
    return a.ib ? a.ib(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya) : a.ib ? a.ib(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya)
  }
  var Ia = B(mb), ed = C(mb);
  if(18 === b) {
    return a.jb ? a.jb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia) : a.jb ? a.jb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia)
  }
  mb = B(ed);
  ed = C(ed);
  if(19 === b) {
    return a.kb ? a.kb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb) : a.kb ? a.kb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb)
  }
  var Qe = B(ed);
  C(ed);
  if(20 === b) {
    return a.lb ? a.lb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb, Qe) : a.lb ? a.lb(c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb, Qe) : a.call(k, c, d, f, h, i, a, p, q, v, w, G, J, Q, $, ea, oa, ya, Ia, mb, Qe)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var ze = k;
function Ae(a, b) {
  var c = a.o;
  if(a.m) {
    var d = ie(b, c + 1);
    return d <= c ? ye(a, d, b) : a.m(b)
  }
  return a.apply(a, gd(b))
}
function Be(a, b, c) {
  b = se.a(b, c);
  c = a.o;
  if(a.m) {
    var d = ie(b, c + 1);
    return d <= c ? ye(a, d, b) : a.m(b)
  }
  return a.apply(a, gd(b))
}
function Ce(a, b, c, d) {
  b = se.c(b, c, d);
  c = a.o;
  return a.m ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.m(b)) : a.apply(a, gd(b))
}
function De(a, b, c, d, f) {
  b = se.q(b, c, d, f);
  c = a.o;
  return a.m ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.m(b)) : a.apply(a, gd(b))
}
function Ee(a, b, c, d, f, h) {
  b = S(b, S(c, S(d, S(f, ke(h)))));
  c = a.o;
  return a.m ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.m(b)) : a.apply(a, gd(b))
}
function Fe(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = M(Array.prototype.slice.call(arguments, 5), 0));
  return Ee.call(this, a, b, c, d, f, i)
}
Fe.o = 5;
Fe.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), f = H(L(L(L(a)))), h = H(L(L(L(L(a))))), a = I(L(L(L(L(a)))));
  return Ee(b, c, d, f, h, a)
};
Fe.g = Ee;
ze = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return Ae.call(this, a, b);
    case 3:
      return Be.call(this, a, b, c);
    case 4:
      return Ce.call(this, a, b, c, d);
    case 5:
      return De.call(this, a, b, c, d, f);
    default:
      return Fe.g(a, b, c, d, f, M(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.o = 5;
ze.m = Fe.m;
ze.a = Ae;
ze.c = Be;
ze.q = Ce;
ze.Y = De;
ze.g = Fe.g;
var ma = ze, Ge, He = k;
function Ie(a, b) {
  return!Db.a(a, b)
}
function Je(a, b, c) {
  return ia(ma.q(Db, a, b, c))
}
function Ke(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Je.call(this, a, b, d)
}
Ke.o = 2;
Ke.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return Je(b, c, a)
};
Ke.g = Je;
He = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return l;
    case 2:
      return Ie.call(this, a, b);
    default:
      return Ke.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
He.o = 2;
He.m = Ke.m;
He.b = n(l);
He.a = Ie;
He.g = Ke.g;
Ge = He;
function Le(a, b) {
  for(;;) {
    if(F(b) == k) {
      return j
    }
    if(x(a.b ? a.b(H(b)) : a.call(k, H(b)))) {
      var c = a, d = L(b), a = c, b = d
    }else {
      return l
    }
  }
}
function Me(a) {
  var b;
  if(b = "number" == typeof a) {
    if(b = !isNaN(a)) {
      b = (b = Infinity !== a) ? parseFloat(a) === parseInt(a, 10) : b
    }
  }
  if(b) {
    return 0 === (a & 1)
  }
  e(Error([V("Argument must be an integer: "), V(a)].join("")))
}
function Ne(a) {
  return a
}
var Oe = k;
function Pe(a, b) {
  return new W(k, l, function() {
    var c = F(b);
    if(c) {
      if(Vc(c)) {
        for(var d = Bb(c), f = qc(d), h = new ae(ka.b(f), 0), i = 0;;) {
          if(i < f) {
            var p = a.b ? a.b(A.a(d, i)) : a.call(k, A.a(d, i));
            h.add(p);
            i += 1
          }else {
            break
          }
        }
        return he(h.sa(), Oe.a(a, Cb(c)))
      }
      return S(a.b ? a.b(H(c)) : a.call(k, H(c)), Oe.a(a, I(c)))
    }
    return k
  }, k)
}
function Re(a, b, c) {
  return new W(k, l, function() {
    var d = F(b), f = F(c);
    return x(d ? f : d) ? S(a.a ? a.a(H(d), H(f)) : a.call(k, H(d), H(f)), Oe.c(a, I(d), I(f))) : k
  }, k)
}
function Se(a, b, c, d) {
  return new W(k, l, function() {
    var f = F(b), h = F(c), i = F(d);
    return x(f ? h ? i : h : f) ? S(a.c ? a.c(H(f), H(h), H(i)) : a.call(k, H(f), H(h), H(i)), Oe.q(a, I(f), I(h), I(i))) : k
  }, k)
}
function Te(a, b, c, d, f) {
  return Oe.a(function(b) {
    return ma.a(a, b)
  }, function i(a) {
    return new W(k, l, function() {
      var b = Oe.a(F, a);
      return Le(Ne, b) ? S(Oe.a(H, b), i(Oe.a(I, b))) : k
    }, k)
  }(mc.g(f, d, M([c, b], 0))))
}
function Ue(a, b, c, d, f) {
  var h = k;
  t(f) && (h = M(Array.prototype.slice.call(arguments, 4), 0));
  return Te.call(this, a, b, c, d, h)
}
Ue.o = 4;
Ue.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), f = H(L(L(L(a)))), a = I(L(L(L(a))));
  return Te(b, c, d, f, a)
};
Ue.g = Te;
Oe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Pe.call(this, a, b);
    case 3:
      return Re.call(this, a, b, c);
    case 4:
      return Se.call(this, a, b, c, d);
    default:
      return Ue.g(a, b, c, d, M(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oe.o = 4;
Oe.m = Ue.m;
Oe.a = Pe;
Oe.c = Re;
Oe.q = Se;
Oe.g = Ue.g;
var Dd = Oe, We = function Ve(b, c) {
  return new W(k, l, function() {
    if(0 < b) {
      var d = F(c);
      return d ? S(H(d), Ve(b - 1, I(d))) : k
    }
    return k
  }, k)
};
function Xe(a, b) {
  return new W(k, l, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = F(d), f = 0 < c;
        if(x(f ? d : f)) {
          c -= 1, d = I(d)
        }else {
          c = d;
          break a
        }
      }
      c = g
    }
    return c
  }, k)
}
var Ye, Ze = k;
function $e(a) {
  return new W(k, l, function() {
    return S(a, Ze.b(a))
  }, k)
}
function af(a, b) {
  return We(a, Ze.b(b))
}
Ze = function(a, b) {
  switch(arguments.length) {
    case 1:
      return $e.call(this, a);
    case 2:
      return af.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ze.b = $e;
Ze.a = af;
Ye = Ze;
var bf, cf = k;
function df(a, b) {
  return new W(k, l, function() {
    var c = F(a), d = F(b);
    return x(c ? d : c) ? S(H(c), S(H(d), cf.a(I(c), I(d)))) : k
  }, k)
}
function ef(a, b, c) {
  return new W(k, l, function() {
    var d = Dd.a(F, mc.g(c, b, M([a], 0)));
    return Le(Ne, d) ? le.a(Dd.a(H, d), ma.a(cf, Dd.a(I, d))) : k
  }, k)
}
function ff(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return ef.call(this, a, b, d)
}
ff.o = 2;
ff.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return ef(b, c, a)
};
ff.g = ef;
cf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return df.call(this, a, b);
    default:
      return ff.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
cf.o = 2;
cf.m = ff.m;
cf.a = df;
cf.g = ff.g;
bf = cf;
function gf(a, b) {
  return Xe(1, bf.a(Ye.b(a), b))
}
function hf(a) {
  return function c(a, f) {
    return new W(k, l, function() {
      var h = F(a);
      return h ? S(H(h), c(I(h), f)) : F(f) ? c(H(f), I(f)) : k
    }, k)
  }(k, a)
}
var jf, kf = k;
function lf(a, b) {
  return hf(Dd.a(a, b))
}
function mf(a, b, c) {
  return hf(ma.q(Dd, a, b, c))
}
function nf(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return mf.call(this, a, b, d)
}
nf.o = 2;
nf.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return mf(b, c, a)
};
nf.g = mf;
kf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return lf.call(this, a, b);
    default:
      return nf.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kf.o = 2;
kf.m = nf.m;
kf.a = lf;
kf.g = nf.g;
jf = kf;
function of(a, b) {
  var c;
  a ? (c = a.r & 4, c = x(c ? c : a.Pb) ? j : a.r ? l : y(sb, a)) : c = y(sb, a);
  x(c) ? (c = na.c(ub, tb(a), b), c = vb(c)) : c = na.c(za, a, b);
  return c
}
var pf, qf = k;
function rf(a, b) {
  return qf.c(a, a, b)
}
function sf(a, b, c) {
  return new W(k, l, function() {
    var d = F(c);
    if(d) {
      var f = We(a, d);
      return a === qc(f) ? S(f, qf.c(a, b, Xe(b, d))) : k
    }
    return k
  }, k)
}
function tf(a, b, c, d) {
  return new W(k, l, function() {
    var f = F(d);
    if(f) {
      var h = We(a, f);
      return a === qc(h) ? S(h, qf.q(a, b, c, Xe(b, f))) : O.b(We(a, le.a(h, c)))
    }
    return k
  }, k)
}
qf = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return rf.call(this, a, b);
    case 3:
      return sf.call(this, a, b, c);
    case 4:
      return tf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qf.a = rf;
qf.c = sf;
qf.q = tf;
pf = qf;
function uf(a, b) {
  this.t = a;
  this.e = b
}
function vf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function wf(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new uf(a, ka.b(32));
    d.e[0] = c;
    c = d;
    b -= 5
  }
}
var yf = function xf(b, c, d, f) {
  var h = new uf(d.t, d.e.slice()), i = b.h - 1 >>> c & 31;
  5 === c ? h.e[i] = f : (d = d.e[i], b = d != k ? xf(b, c - 5, d, f) : wf(k, c - 5, f), h.e[i] = b);
  return h
};
function zf(a, b) {
  var c = 0 <= b;
  if(x(c ? b < a.h : c)) {
    if(b >= vf(a)) {
      return a.S
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.e[b >>> d & 31], d = f
      }else {
        return c.e
      }
    }
  }else {
    e(Error([V("No item "), V(b), V(" in vector of length "), V(a.h)].join("")))
  }
}
var Bf = function Af(b, c, d, f, h) {
  var i = new uf(d.t, d.e.slice());
  if(0 === c) {
    i.e[f & 31] = h
  }else {
    var p = f >>> c & 31, b = Af(b, c - 5, d.e[p], f, h);
    i.e[p] = b
  }
  return i
}, Cf = g, Df = g, Ef = g, Ff = R = g, Gf = g, Hf = g, If = g;
function Jf(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.S = f;
  this.n = h;
  this.r = 4;
  this.j = 167668511
}
r = Jf.prototype;
r.ya = function() {
  return new Ef(this.h, this.shift, Cf.b ? Cf.b(this.root) : Cf.call(k, this.root), Df.b ? Df.b(this.S) : Df.call(k, this.S))
};
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.B = function(a, b) {
  return a.R(a, b, k)
};
r.v = function(a, b, c) {
  return a.R(a, b, c)
};
r.V = function(a, b, c) {
  var d = 0 <= b;
  if(x(d ? b < this.h : d)) {
    return vf(a) <= b ? (a = this.S.slice(), a[b & 31] = c, new Jf(this.l, this.h, this.shift, this.root, a, k)) : new Jf(this.l, this.h, this.shift, Bf(a, this.shift, this.root, b, c), this.S, k)
  }
  if(b === this.h) {
    return a.F(a, c)
  }
  e(Error([V("Index "), V(b), V(" out of bounds  [0,"), V(this.h), V("]")].join("")))
};
var Kf = k, Kf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Jf.prototype;
r.call = Kf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  if(32 > this.h - vf(a)) {
    var c = this.S.slice();
    c.push(b);
    return new Jf(this.l, this.h + 1, this.shift, this.root, c, k)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new uf(k, ka.b(32));
    d.e[0] = this.root;
    var f = wf(k, this.shift, new uf(k, this.S));
    d.e[1] = f
  }else {
    d = yf(a, this.shift, this.root, new uf(k, this.S))
  }
  return new Jf(this.l, this.h + 1, c, d, [b], k)
};
r.Va = function(a) {
  return 0 < this.h ? new Zb(a, this.h - 1, k) : K
};
r.Ta = function(a) {
  return a.W(a, 0)
};
r.Ua = function(a) {
  return a.W(a, 1)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.za = function(a, b) {
  return Ob.a(a, b)
};
r.Aa = function(a, b, c) {
  return Ob.c(a, b, c)
};
r.N = function(a) {
  return 0 === this.h ? k : If.c ? If.c(a, 0, 0) : If.call(k, a, 0, 0)
};
r.G = m("h");
r.Ba = function(a) {
  return 0 < this.h ? a.W(a, this.h - 1) : k
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Jf(b, this.h, this.shift, this.root, this.S, this.n)
};
r.J = m("l");
r.W = function(a, b) {
  return zf(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return x(d ? b < this.h : d) ? a.W(a, b) : c
};
r.H = function() {
  return P(Lf, this.l)
};
var Mf = new uf(k, ka.b(32)), Lf = new Jf(k, 0, 5, Mf, [], 0);
function X(a) {
  var b = a.length;
  if(32 > b) {
    return new Jf(k, b, 5, Mf, a, k)
  }
  for(var c = a.slice(0, 32), d = 32, f = tb(new Jf(k, 32, 5, Mf, c, k));;) {
    if(d < b) {
      c = d + 1, f = ub(f, a[d]), d = c
    }else {
      return vb(f)
    }
  }
}
ld = function(a) {
  return vb(na.c(ub, tb(Lf), a))
};
function Nf(a) {
  var b = k;
  t(a) && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return ld(b)
}
Nf.o = 0;
Nf.m = function(a) {
  a = F(a);
  return ld(a)
};
Nf.g = function(a) {
  return ld(a)
};
function Of(a, b, c, d, f, h) {
  this.aa = a;
  this.$ = b;
  this.p = c;
  this.O = d;
  this.l = f;
  this.n = h;
  this.j = 31719660;
  this.r = 1536
}
r = Of.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.ta = function(a) {
  return this.O + 1 < this.$.length ? (a = If.q ? If.q(this.aa, this.$, this.p, this.O + 1) : If.call(k, this.aa, this.$, this.p, this.O + 1), a == k ? k : a) : a.yb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.N = aa();
r.X = function() {
  return this.$[this.O]
};
r.T = function(a) {
  return this.O + 1 < this.$.length ? (a = If.q ? If.q(this.aa, this.$, this.p, this.O + 1) : If.call(k, this.aa, this.$, this.p, this.O + 1), a == k ? K : a) : a.Sa(a)
};
r.yb = function() {
  var a = this.$.length, a = this.p + a < va(this.aa) ? If.c ? If.c(this.aa, this.p + a, 0) : If.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? k : a
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return If.Y ? If.Y(this.aa, this.$, this.p, this.O, b) : If.call(k, this.aa, this.$, this.p, this.O, b)
};
r.H = function() {
  return P(Lf, this.l)
};
r.Ya = function() {
  return be.a(this.$, this.O)
};
r.Sa = function() {
  var a = this.$.length, a = this.p + a < va(this.aa) ? If.c ? If.c(this.aa, this.p + a, 0) : If.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? K : a
};
var Pf = k;
function Qf(a, b, c) {
  return Pf.Y(a, zf(a, b), b, c, k)
}
function Rf(a, b, c, d) {
  return Pf.Y(a, b, c, d, k)
}
function Sf(a, b, c, d, f) {
  return new Of(a, b, c, d, f, k)
}
Pf = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Qf.call(this, a, b, c);
    case 4:
      return Rf.call(this, a, b, c, d);
    case 5:
      return Sf.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Pf.c = Qf;
Pf.q = Rf;
Pf.Y = Sf;
var If = Pf, Cf = function(a) {
  return new uf({}, a.e.slice())
}, Df = function(a) {
  var b = ka.b(32);
  Wc(a, 0, b, 0, a.length);
  return b
}, Uf = function Tf(b, c, d, f) {
  var d = b.root.t === d.t ? d : new uf(b.root.t, d.e.slice()), h = b.h - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.e[h], b = i != k ? Tf(b, c - 5, i, f) : wf(b.root.t, c - 5, f)
  }
  d.e[h] = b;
  return d
}, Ef = function(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.j = 275;
  this.r = 88
};
Ef.Z = j;
Ef.ba = function() {
  return O.b("cljs.core/TransientVector")
};
Ef.ca = function(a, b) {
  return E(b, "cljs.core/TransientVector")
};
var Vf = k, Vf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Ef.prototype;
r.call = Vf;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.B = function(a, b) {
  return a.R(a, b, k)
};
r.v = function(a, b, c) {
  return a.R(a, b, c)
};
r.W = function(a, b) {
  if(this.root.t) {
    return zf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return x(d ? b < this.h : d) ? a.W(a, b) : c
};
r.G = function() {
  if(this.root.t) {
    return this.h
  }
  e(Error("count after persistent!"))
};
r.Ca = function(a, b, c) {
  var d;
  a: {
    if(a.root.t) {
      var f = 0 <= b;
      if(x(f ? b < a.h : f)) {
        vf(a) <= b ? a.S[b & 31] = c : (d = function i(d, f) {
          var v = a.root.t === f.t ? f : new uf(a.root.t, f.e.slice());
          if(0 === d) {
            v.e[b & 31] = c
          }else {
            var w = b >>> d & 31, G = i(d - 5, v.e[w]);
            v.e[w] = G
          }
          return v
        }.call(k, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.Da(a, c);
        break a
      }
      e(Error([V("Index "), V(b), V(" out of bounds for TransientVector of length"), V(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.Da = function(a, b) {
  if(this.root.t) {
    if(32 > this.h - vf(a)) {
      this.S[this.h & 31] = b
    }else {
      var c = new uf(this.root.t, this.S), d = ka.b(32);
      d[0] = b;
      this.S = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = ka.b(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = wf(this.root.t, this.shift, c);
        this.root = new uf(this.root.t, d);
        this.shift = f
      }else {
        this.root = Uf(a, this.shift, this.root, c)
      }
    }
    this.h += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
r.Ma = function(a) {
  if(this.root.t) {
    this.root.t = k;
    var a = this.h - vf(a), b = ka.b(a);
    Wc(this.S, 0, b, 0, a);
    return new Jf(k, this.h, this.shift, this.root, b, k)
  }
  e(Error("persistent! called twice"))
};
function Wf() {
  this.r = 0;
  this.j = 2097152
}
Wf.prototype.z = n(l);
var Xf = new Wf;
function Yf(a, b) {
  var c = Tc(b) ? qc(a) === qc(b) ? Le(Ne, Dd.a(function(a) {
    return Db.a(D.c(b, H(a), Xf), H(L(a)))
  }, a)) : k : k;
  return x(c) ? j : l
}
function Zf(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return k
    }
  }
}
function $f(a, b) {
  var c = Nc.b(a), d = Nc.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function ag(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ra, a = Gc(a), i = 0, p = tb(bg);;) {
    if(i < f) {
      var q = d[i], i = i + 1, p = wb(p, q, h[q])
    }else {
      return d = P, b = wb(p, b, c), b = vb(b), d(b, a)
    }
  }
}
function cg(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function dg(a, b, c, d, f) {
  this.l = a;
  this.keys = b;
  this.ra = c;
  this.Qa = d;
  this.n = f;
  this.r = 4;
  this.j = 16123663
}
r = dg.prototype;
r.ya = function(a) {
  a = of(Ib.A ? Ib.A() : Ib.call(k), a);
  return tb(a)
};
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Gd(a)
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  a = ba(b);
  return x(a ? Zf(b, this.keys) != k : a) ? this.ra[b] : c
};
r.V = function(a, b, c) {
  if(ba(b)) {
    var d = this.Qa > eg;
    if(x(d ? d : this.keys.length >= eg)) {
      return ag(a, b, c)
    }
    if(Zf(b, this.keys) != k) {
      return a = cg(this.ra, this.keys), a[b] = c, new dg(this.l, this.keys, a, this.Qa + 1, k)
    }
    a = cg(this.ra, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new dg(this.l, d, a, this.Qa + 1, k)
  }
  return ag(a, b, c)
};
r.Ka = function(a, b) {
  var c = ba(b);
  return x(c ? Zf(b, this.keys) != k : c) ? j : l
};
var fg = k, fg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = dg.prototype;
r.call = fg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Uc(b) ? a.V(a, A.a(b, 0), A.a(b, 1)) : na.c(za, a, b)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = function() {
  var a = this;
  return 0 < a.keys.length ? Dd.a(function(b) {
    return Nf.g(M([b, a.ra[b]], 0))
  }, a.keys.sort($f)) : k
};
r.G = function() {
  return this.keys.length
};
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new dg(b, this.keys, this.ra, this.Qa, this.n)
};
r.J = m("l");
r.H = function() {
  return P(gg, this.l)
};
r.La = function(a, b) {
  var c = ba(b);
  if(x(c ? Zf(b, this.keys) != k : c)) {
    var c = this.keys.slice(), d = cg(this.ra, this.keys);
    c.splice(Zf(b, c), 1);
    delete d[b];
    return new dg(this.l, c, d, this.Qa + 1, k)
  }
  return a
};
var gg = new dg(k, [], {}, 0, 0), eg = 32;
function hg(a, b) {
  return new dg(k, a, b, 0, k)
}
function ig(a, b) {
  for(var c = a.e, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(Db.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
var jg = g;
function kg(a, b, c, d) {
  this.l = a;
  this.h = b;
  this.e = c;
  this.n = d;
  this.r = 4;
  this.j = 16123663
}
r = kg.prototype;
r.ya = function() {
  return new jg({}, this.e.length, this.e.slice())
};
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Gd(a)
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  a = ig(a, b);
  return-1 === a ? c : this.e[a + 1]
};
r.V = function(a, b, c) {
  var d = ig(a, b);
  if(-1 === d) {
    if(this.h < lg) {
      var d = this.l, a = this.h + 1, f = this.e.slice();
      f.push(b);
      f.push(c);
      c = new kg(d, a, f, k)
    }else {
      c = P(yc.c(of(bg, a), b, c), this.l)
    }
  }else {
    c === this.e[d + 1] ? c = a : (b = this.l, a = this.h, f = this.e.slice(), f[d + 1] = c, c = new kg(b, a, f, k))
  }
  return c
};
r.Ka = function(a, b) {
  return-1 !== ig(a, b)
};
var mg = k, mg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = kg.prototype;
r.call = mg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Uc(b) ? a.V(a, A.a(b, 0), A.a(b, 1)) : na.c(za, a, b)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.e.length;
    b = function f(b) {
      return new W(k, l, function() {
        return b < c ? S(X([a.e[b], a.e[b + 1]]), f(b + 2)) : k
      }, k)
    }(0)
  }else {
    b = k
  }
  return b
};
r.G = m("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new kg(b, this.h, this.e, this.n)
};
r.J = m("l");
r.H = function() {
  return $a(ng, this.l)
};
r.La = function(a, b) {
  if(0 <= ig(a, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return a.H(a)
    }
    for(var d = ka.b(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new kg(this.l, this.h - 1, d, k)
      }
      Db.a(b, this.e[f]) || (d[h] = this.e[f], d[h + 1] = this.e[f + 1], h += 2);
      f += 2
    }
  }else {
    return a
  }
};
var ng = new kg(k, 0, [], k), lg = 16;
function og(a, b) {
  for(var c = qc(a), d = 0, f = tb(ng);;) {
    if(d < c) {
      var h = d + 1, f = wb(f, a[d], b[d]), d = h
    }else {
      return vb(f)
    }
  }
}
var pg = g, jg = function(a, b, c) {
  this.Fa = a;
  this.ma = b;
  this.e = c;
  this.r = 56;
  this.j = 258
};
jg.Z = j;
jg.ba = function() {
  return O.b("cljs.core/TransientArrayMap")
};
jg.ca = function(a, b) {
  return E(b, "cljs.core/TransientArrayMap")
};
r = jg.prototype;
r.Ca = function(a, b, c) {
  if(x(this.Fa)) {
    var d = ig(a, b);
    if(-1 === d) {
      if(this.ma + 2 <= 2 * lg) {
        return this.ma += 2, this.e.push(b), this.e.push(c), a
      }
      a = pg.a ? pg.a(this.ma, this.e) : pg.call(k, this.ma, this.e);
      return wb(a, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.Da = function(a, b) {
  if(x(this.Fa)) {
    var c;
    b ? (c = b.j & 2048, c = x(c ? c : b.Gb) ? j : b.j ? l : y(Qa, b)) : c = y(Qa, b);
    if(x(c)) {
      return a.Ca(a, Ed.b ? Ed.b(b) : Ed.call(k, b), Fd.b ? Fd.b(b) : Fd.call(k, b))
    }
    c = F(b);
    for(var d = a;;) {
      var f = H(c);
      if(x(f)) {
        c = L(c), d = d.Ca(d, Ed.b ? Ed.b(f) : Ed.call(k, f), Fd.b ? Fd.b(f) : Fd.call(k, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Ma = function() {
  if(x(this.Fa)) {
    return this.Fa = l, new kg(k, pd((this.ma - this.ma % 2) / 2), this.e, k)
  }
  e(Error("persistent! called twice"))
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  if(x(this.Fa)) {
    return a = ig(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.G = function() {
  if(x(this.Fa)) {
    return pd((this.ma - this.ma % 2) / 2)
  }
  e(Error("count after persistent!"))
};
var qg = g, pg = function(a, b) {
  for(var c = tb(gg), d = 0;;) {
    if(d < a) {
      c = wb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
};
function rg() {
  this.k = l
}
var sg = g, tg = g, ug = g, vg = g, wg = g, R = g;
function xg(a, b) {
  return ba(a) ? a === b : Db.a(a, b)
}
var yg, zg = k;
function Ag(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Bg(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
zg = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Ag.call(this, a, b, c);
    case 5:
      return Bg.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zg.c = Ag;
zg.Y = Bg;
yg = zg;
function Cg(a, b) {
  var c = ka.b(a.length - 2);
  Wc(a, 0, c, 0, 2 * b);
  Wc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Dg, Eg = k;
function Fg(a, b, c, d) {
  a = a.Ga(b);
  a.e[c] = d;
  return a
}
function Gg(a, b, c, d, f, h) {
  a = a.Ga(b);
  a.e[c] = d;
  a.e[f] = h;
  return a
}
Eg = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return Fg.call(this, a, b, c, d);
    case 6:
      return Gg.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eg.q = Fg;
Eg.ja = Gg;
Dg = Eg;
var Hg = g;
function Ig(a, b, c) {
  this.t = a;
  this.w = b;
  this.e = c
}
r = Ig.prototype;
r.fa = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), p = qd(this.w & i - 1);
  if(0 === (this.w & i)) {
    var q = qd(this.w);
    if(2 * q < this.e.length) {
      a = this.Ga(a);
      b = a.e;
      h.k = j;
      a: {
        c = 2 * (q - p);
        h = 2 * p + (c - 1);
        for(q = 2 * (p + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[q] = b[h];
          q -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * p] = d;
      b[2 * p + 1] = f;
      a.w |= i;
      return a
    }
    if(16 <= q) {
      p = ka.b(32);
      p[c >>> b & 31] = Jg.fa(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.w >>> d & 1) && (p[d] = this.e[f] != k ? Jg.fa(a, b + 5, Nc.b(this.e[f]), this.e[f], this.e[f + 1], h) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Hg(a, q + 1, p)
    }
    b = ka.b(2 * (q + 4));
    Wc(this.e, 0, b, 0, 2 * p);
    b[2 * p] = d;
    b[2 * p + 1] = f;
    Wc(this.e, 2 * p, b, 2 * (p + 1), 2 * (q - p));
    h.k = j;
    a = this.Ga(a);
    a.e = b;
    a.w |= i;
    return a
  }
  q = this.e[2 * p];
  i = this.e[2 * p + 1];
  if(q == k) {
    return q = i.fa(a, b + 5, c, d, f, h), q === i ? this : Dg.q(this, a, 2 * p + 1, q)
  }
  if(xg(d, q)) {
    return f === i ? this : Dg.q(this, a, 2 * p + 1, f)
  }
  h.k = j;
  return Dg.ja(this, a, 2 * p, k, 2 * p + 1, vg.Ea ? vg.Ea(a, b + 5, q, i, c, d, f) : vg.call(k, a, b + 5, q, i, c, d, f))
};
r.Na = function() {
  return sg.b ? sg.b(this.e) : sg.call(k, this.e)
};
r.Ga = function(a) {
  if(a === this.t) {
    return this
  }
  var b = qd(this.w), c = ka.b(0 > b ? 4 : 2 * (b + 1));
  Wc(this.e, 0, c, 0, 2 * b);
  return new Ig(a, this.w, c)
};
r.Oa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.w & d)) {
    return this
  }
  var f = qd(this.w & d - 1), h = this.e[2 * f], i = this.e[2 * f + 1];
  return h == k ? (a = i.Oa(a + 5, b, c), a === i ? this : a != k ? new Ig(k, this.w, yg.c(this.e, 2 * f + 1, a)) : this.w === d ? k : new Ig(k, this.w ^ d, Cg(this.e, f))) : xg(c, h) ? new Ig(k, this.w ^ d, Cg(this.e, f)) : this
};
r.ea = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = qd(this.w & h - 1);
  if(0 === (this.w & h)) {
    var p = qd(this.w);
    if(16 <= p) {
      i = ka.b(32);
      i[b >>> a & 31] = Jg.ea(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.w >>> c & 1) && (i[c] = this.e[d] != k ? Jg.ea(a + 5, Nc.b(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Hg(k, p + 1, i)
    }
    a = ka.b(2 * (p + 1));
    Wc(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Wc(this.e, 2 * i, a, 2 * (i + 1), 2 * (p - i));
    f.k = j;
    return new Ig(k, this.w | h, a)
  }
  p = this.e[2 * i];
  h = this.e[2 * i + 1];
  if(p == k) {
    return p = h.ea(a + 5, b, c, d, f), p === h ? this : new Ig(k, this.w, yg.c(this.e, 2 * i + 1, p))
  }
  if(xg(c, p)) {
    return d === h ? this : new Ig(k, this.w, yg.c(this.e, 2 * i + 1, d))
  }
  f.k = j;
  return new Ig(k, this.w, yg.Y(this.e, 2 * i, k, 2 * i + 1, vg.ja ? vg.ja(a + 5, p, h, b, c, d) : vg.call(k, a + 5, p, h, b, c, d)))
};
r.pa = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.w & f)) {
    return d
  }
  var h = qd(this.w & f - 1), f = this.e[2 * h], h = this.e[2 * h + 1];
  return f == k ? h.pa(a + 5, b, c, d) : xg(c, f) ? h : d
};
var Jg = new Ig(k, 0, ka.b(0)), Hg = function(a, b, c) {
  this.t = a;
  this.h = b;
  this.e = c
};
Hg.Z = j;
Hg.ba = function() {
  return O.b("cljs.core/ArrayNode")
};
Hg.ca = function(a, b) {
  return E(b, "cljs.core/ArrayNode")
};
r = Hg.prototype;
r.fa = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, p = this.e[i];
  if(p == k) {
    return a = Dg.q(this, a, i, Jg.fa(a, b + 5, c, d, f, h)), a.h += 1, a
  }
  b = p.fa(a, b + 5, c, d, f, h);
  return b === p ? this : Dg.q(this, a, i, b)
};
r.Na = function() {
  return tg.b ? tg.b(this.e) : tg.call(k, this.e)
};
r.Ga = function(a) {
  return a === this.t ? this : new Hg(a, this.h, this.e.slice())
};
r.Oa = function(a, b, c) {
  var d = b >>> a & 31, f = this.e[d];
  if(f != k) {
    a = f.Oa(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == k) {
        if(8 >= this.h) {
          a: {
            for(var f = this.e, a = 2 * (this.h - 1), b = ka.b(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var p = c !== d;
                if(x(p ? f[c] != k : p)) {
                  b[h] = f[c], h += 2, i |= 1 << c
                }
                c += 1
              }else {
                d = new Ig(k, i, b);
                break a
              }
            }
            d = g
          }
        }else {
          d = new Hg(k, this.h - 1, yg.c(this.e, d, a))
        }
      }else {
        d = new Hg(k, this.h, yg.c(this.e, d, a))
      }
    }
    return d
  }
  return this
};
r.ea = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.e[h];
  if(i == k) {
    return new Hg(k, this.h + 1, yg.c(this.e, h, Jg.ea(a + 5, b, c, d, f)))
  }
  a = i.ea(a + 5, b, c, d, f);
  return a === i ? this : new Hg(k, this.h, yg.c(this.e, h, a))
};
r.pa = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != k ? f.pa(a + 5, b, c, d) : d
};
function Kg(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(xg(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Lg(a, b, c, d) {
  this.t = a;
  this.ka = b;
  this.h = c;
  this.e = d
}
r = Lg.prototype;
r.fa = function(a, b, c, d, f, h) {
  if(c === this.ka) {
    b = Kg(this.e, this.h, d);
    if(-1 === b) {
      if(this.e.length > 2 * this.h) {
        return a = Dg.ja(this, a, 2 * this.h, d, 2 * this.h + 1, f), h.k = j, a.h += 1, a
      }
      c = this.e.length;
      b = ka.b(c + 2);
      Wc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.k = j;
      h = this.h + 1;
      a === this.t ? (this.e = b, this.h = h, a = this) : a = new Lg(this.t, this.ka, h, b);
      return a
    }
    return this.e[b + 1] === f ? this : Dg.q(this, a, b + 1, f)
  }
  return(new Ig(a, 1 << (this.ka >>> b & 31), [k, this, k, k])).fa(a, b, c, d, f, h)
};
r.Na = function() {
  return sg.b ? sg.b(this.e) : sg.call(k, this.e)
};
r.Ga = function(a) {
  if(a === this.t) {
    return this
  }
  var b = ka.b(2 * (this.h + 1));
  Wc(this.e, 0, b, 0, 2 * this.h);
  return new Lg(a, this.ka, this.h, b)
};
r.Oa = function(a, b, c) {
  a = Kg(this.e, this.h, c);
  return-1 === a ? this : 1 === this.h ? k : new Lg(k, this.ka, this.h - 1, Cg(this.e, pd((a - a % 2) / 2)))
};
r.ea = function(a, b, c, d, f) {
  return b === this.ka ? (a = Kg(this.e, this.h, c), -1 === a ? (a = this.e.length, b = ka.b(a + 2), Wc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.k = j, new Lg(k, this.ka, this.h + 1, b)) : Db.a(this.e[a], d) ? this : new Lg(k, this.ka, this.h, yg.c(this.e, a + 1, d))) : (new Ig(k, 1 << (this.ka >>> a & 31), [k, this])).ea(a, b, c, d, f)
};
r.pa = function(a, b, c, d) {
  a = Kg(this.e, this.h, c);
  return 0 > a ? d : xg(c, this.e[a]) ? this.e[a + 1] : d
};
var Mg = k;
function Ng(a, b, c, d, f, h) {
  var i = Nc.b(b);
  if(i === d) {
    return new Lg(k, i, 2, [b, c, f, h])
  }
  var p = new rg;
  return Jg.ea(a, i, b, c, p).ea(a, d, f, h, p)
}
function Og(a, b, c, d, f, h, i) {
  var p = Nc.b(c);
  if(p === f) {
    return new Lg(k, p, 2, [c, d, h, i])
  }
  var q = new rg;
  return Jg.fa(a, b, p, c, d, q).fa(a, b, f, h, i, q)
}
Mg = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Ng.call(this, a, b, c, d, f, h);
    case 7:
      return Og.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mg.ja = Ng;
Mg.Ea = Og;
vg = Mg;
function Pg(a, b, c, d, f) {
  this.l = a;
  this.ga = b;
  this.p = c;
  this.ha = d;
  this.n = f;
  this.r = 0;
  this.j = 31850572
}
r = Pg.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.X = function() {
  return this.ha == k ? X([this.ga[this.p], this.ga[this.p + 1]]) : H(this.ha)
};
r.T = function() {
  return this.ha == k ? sg.c ? sg.c(this.ga, this.p + 2, k) : sg.call(k, this.ga, this.p + 2, k) : sg.c ? sg.c(this.ga, this.p, L(this.ha)) : sg.call(k, this.ga, this.p, L(this.ha))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Pg(b, this.ga, this.p, this.ha, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
var Qg = k;
function Rg(a) {
  return Qg.c(a, 0, k)
}
function Sg(a, b, c) {
  if(c == k) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != k) {
          return new Pg(k, a, b, k, k)
        }
        var d = a[b + 1];
        if(x(d) && (d = d.Na(), x(d))) {
          return new Pg(k, a, b + 2, d, k)
        }
        b += 2
      }else {
        return k
      }
    }
  }else {
    return new Pg(k, a, b, c, k)
  }
}
Qg = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return Rg.call(this, a);
    case 3:
      return Sg.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Qg.b = Rg;
Qg.c = Sg;
sg = Qg;
function Tg(a, b, c, d, f) {
  this.l = a;
  this.ga = b;
  this.p = c;
  this.ha = d;
  this.n = f;
  this.r = 0;
  this.j = 31850572
}
r = Tg.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.X = function() {
  return H(this.ha)
};
r.T = function() {
  return tg.q ? tg.q(k, this.ga, this.p, L(this.ha)) : tg.call(k, k, this.ga, this.p, L(this.ha))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Tg(b, this.ga, this.p, this.ha, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
var Ug = k;
function Vg(a) {
  return Ug.q(k, a, 0, k)
}
function Wg(a, b, c, d) {
  if(d == k) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(x(f) && (f = f.Na(), x(f))) {
          return new Tg(a, b, c + 1, f, k)
        }
        c += 1
      }else {
        return k
      }
    }
  }else {
    return new Tg(a, b, c, d, k)
  }
}
Ug = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return Vg.call(this, a);
    case 4:
      return Wg.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ug.b = Vg;
Ug.q = Wg;
tg = Ug;
qg = g;
function Xg(a, b, c, d, f, h) {
  this.l = a;
  this.h = b;
  this.root = c;
  this.Q = d;
  this.U = f;
  this.n = h;
  this.r = 4;
  this.j = 16123663
}
r = Xg.prototype;
r.ya = function() {
  return new qg({}, this.root, this.h, this.Q, this.U)
};
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Gd(a)
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  return b == k ? this.Q ? this.U : c : this.root == k ? c : this.root.pa(0, Nc.b(b), b, c)
};
r.V = function(a, b, c) {
  if(b == k) {
    var d = this.Q;
    return x(d ? c === this.U : d) ? a : new Xg(this.l, this.Q ? this.h : this.h + 1, this.root, j, c, k)
  }
  d = new rg;
  c = (this.root == k ? Jg : this.root).ea(0, Nc.b(b), b, c, d);
  return c === this.root ? a : new Xg(this.l, d.k ? this.h + 1 : this.h, c, this.Q, this.U, k)
};
r.Ka = function(a, b) {
  return b == k ? this.Q : this.root == k ? l : this.root.pa(0, Nc.b(b), b, Xc) !== Xc
};
var Yg = k, Yg = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Xg.prototype;
r.call = Yg;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Uc(b) ? a.V(a, A.a(b, 0), A.a(b, 1)) : na.c(za, a, b)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = function() {
  if(0 < this.h) {
    var a = this.root != k ? this.root.Na() : k;
    return this.Q ? S(X([k, this.U]), a) : a
  }
  return k
};
r.G = m("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new Xg(b, this.h, this.root, this.Q, this.U, this.n)
};
r.J = m("l");
r.H = function() {
  return $a(bg, this.l)
};
r.La = function(a, b) {
  if(b == k) {
    return this.Q ? new Xg(this.l, this.h - 1, this.root, l, k, k) : a
  }
  if(this.root == k) {
    return a
  }
  var c = this.root.Oa(0, Nc.b(b), b);
  return c === this.root ? a : new Xg(this.l, this.h - 1, c, this.Q, this.U, k)
};
var bg = new Xg(k, 0, k, l, k, 0), qg = function(a, b, c, d, f) {
  this.t = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.U = f;
  this.r = 56;
  this.j = 258
};
qg.Z = j;
qg.ba = function() {
  return O.b("cljs.core/TransientHashMap")
};
qg.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashMap")
};
r = qg.prototype;
r.Ca = function(a, b, c) {
  return Zg(a, b, c)
};
r.Da = function(a, b) {
  var c;
  a: {
    if(a.t) {
      b ? (c = b.j & 2048, c = x(c ? c : b.Gb) ? j : b.j ? l : y(Qa, b)) : c = y(Qa, b);
      if(x(c)) {
        c = Zg(a, Ed.b ? Ed.b(b) : Ed.call(k, b), Fd.b ? Fd.b(b) : Fd.call(k, b));
        break a
      }
      c = F(b);
      for(var d = a;;) {
        var f = H(c);
        if(x(f)) {
          c = L(c), d = Zg(d, Ed.b ? Ed.b(f) : Ed.call(k, f), Fd.b ? Fd.b(f) : Fd.call(k, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = g
  }
  return c
};
r.Ma = function(a) {
  var b;
  a.t ? (a.t = k, b = new Xg(k, a.count, a.root, a.Q, a.U, k)) : e(Error("persistent! called twice"));
  return b
};
r.B = function(a, b) {
  return b == k ? this.Q ? this.U : k : this.root == k ? k : this.root.pa(0, Nc.b(b), b)
};
r.v = function(a, b, c) {
  return b == k ? this.Q ? this.U : c : this.root == k ? c : this.root.pa(0, Nc.b(b), b, c)
};
r.G = function() {
  if(this.t) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function Zg(a, b, c) {
  if(a.t) {
    if(b == k) {
      a.U !== c && (a.U = c), a.Q || (a.count += 1, a.Q = j)
    }else {
      var d = new rg, b = (a.root == k ? Jg : a.root).fa(a.t, 0, Nc.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.k && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
function $g(a, b, c) {
  for(var d = b;;) {
    if(a != k) {
      b = c ? a.left : a.right, d = mc.a(d, a), a = b
    }else {
      return d
    }
  }
}
function ah(a, b, c, d, f) {
  this.l = a;
  this.stack = b;
  this.Ra = c;
  this.h = d;
  this.n = f;
  this.r = 0;
  this.j = 31850574
}
r = ah.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = aa();
r.G = function(a) {
  return 0 > this.h ? qc(L(a)) + 1 : this.h
};
r.X = function() {
  return Va(this.stack)
};
r.T = function() {
  var a = H(this.stack), a = $g(this.Ra ? a.right : a.left, L(this.stack), this.Ra);
  return a != k ? new ah(k, a, this.Ra, this.h - 1, k) : K
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new ah(b, this.stack, this.Ra, this.h, this.n)
};
r.J = m("l");
r.H = function() {
  return P(K, this.l)
};
var Y = g, Z = g;
function bh(a, b, c, d) {
  return N(Y, c) ? N(Y, c.left) ? new Y(c.key, c.k, c.left.ia(), new Z(a, b, c.right, d, k), k) : N(Y, c.right) ? new Y(c.right.key, c.right.k, new Z(c.key, c.k, c.left, c.right.left, k), new Z(a, b, c.right.right, d, k), k) : new Z(a, b, c, d, k) : new Z(a, b, c, d, k)
}
function ch(a, b, c, d) {
  return N(Y, d) ? N(Y, d.right) ? new Y(d.key, d.k, new Z(a, b, c, d.left, k), d.right.ia(), k) : N(Y, d.left) ? new Y(d.left.key, d.left.k, new Z(a, b, c, d.left.left, k), new Z(d.key, d.k, d.left.right, d.right, k), k) : new Z(a, b, c, d, k) : new Z(a, b, c, d, k)
}
function dh(a, b, c, d) {
  if(N(Y, c)) {
    return new Y(a, b, c.ia(), d, k)
  }
  if(N(Z, d)) {
    return ch(a, b, c, d.Pa())
  }
  var f = N(Y, d);
  if(x(f ? N(Z, d.left) : f)) {
    return new Y(d.left.key, d.left.k, new Z(a, b, c, d.left.left, k), ch(d.key, d.k, d.left.right, d.right.Pa()), k)
  }
  e(Error("red-black tree invariant violation"))
}
Z = function(a, b, c, d, f) {
  this.key = a;
  this.k = b;
  this.left = c;
  this.right = d;
  this.n = f;
  this.r = 0;
  this.j = 32402207
};
Z.Z = j;
Z.ba = function() {
  return O.b("cljs.core/BlackNode")
};
Z.ca = function(a, b) {
  return E(b, "cljs.core/BlackNode")
};
Z.prototype.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
Z.prototype.B = function(a, b) {
  return a.R(a, b, k)
};
Z.prototype.v = function(a, b, c) {
  return a.R(a, b, c)
};
Z.prototype.V = function(a, b, c) {
  return yc.c(X([this.key, this.k]), b, c)
};
var eh = k, eh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.call = eh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return X([this.key, this.k, b])
};
r.Ta = m("key");
r.Ua = m("k");
r.tb = function(a) {
  return a.vb(this)
};
r.Pa = function() {
  return new Y(this.key, this.k, this.left, this.right, k)
};
r.replace = function(a, b, c, d) {
  return new Z(a, b, c, d, k)
};
r.sb = function(a) {
  return a.ub(this)
};
r.ub = function(a) {
  return new Z(a.key, a.k, this, a.right, k)
};
var fh = k, fh = function() {
  switch(arguments.length) {
    case 0:
      return T.b ? T.b(this) : T.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = fh;
r.vb = function(a) {
  return new Z(a.key, a.k, a.left, this, k)
};
r.ia = function() {
  return this
};
r.za = function(a, b) {
  return Ob.a(a, b)
};
r.Aa = function(a, b, c) {
  return Ob.c(a, b, c)
};
r.N = function() {
  return O.a(this.key, this.k)
};
r.G = n(2);
r.Ba = m("k");
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return P(X([this.key, this.k]), b)
};
r.J = n(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.k : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.k : c
};
r.H = function() {
  return Lf
};
Y = function(a, b, c, d, f) {
  this.key = a;
  this.k = b;
  this.left = c;
  this.right = d;
  this.n = f;
  this.r = 0;
  this.j = 32402207
};
Y.Z = j;
Y.ba = function() {
  return O.b("cljs.core/RedNode")
};
Y.ca = function(a, b) {
  return E(b, "cljs.core/RedNode")
};
Y.prototype.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
Y.prototype.B = function(a, b) {
  return a.R(a, b, k)
};
Y.prototype.v = function(a, b, c) {
  return a.R(a, b, c)
};
Y.prototype.V = function(a, b, c) {
  return yc.c(X([this.key, this.k]), b, c)
};
var gh = k, gh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Y.prototype;
r.call = gh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return X([this.key, this.k, b])
};
r.Ta = m("key");
r.Ua = m("k");
r.tb = function(a) {
  return new Y(this.key, this.k, this.left, a, k)
};
r.Pa = function() {
  e(Error("red-black tree invariant violation"))
};
r.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, k)
};
r.sb = function(a) {
  return new Y(this.key, this.k, a, this.right, k)
};
r.ub = function(a) {
  return N(Y, this.left) ? new Y(this.key, this.k, this.left.ia(), new Z(a.key, a.k, this.right, a.right, k), k) : N(Y, this.right) ? new Y(this.right.key, this.right.k, new Z(this.key, this.k, this.left, this.right.left, k), new Z(a.key, a.k, this.right.right, a.right, k), k) : new Z(a.key, a.k, this, a.right, k)
};
var hh = k, hh = function() {
  switch(arguments.length) {
    case 0:
      return T.b ? T.b(this) : T.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Y.prototype;
r.toString = hh;
r.vb = function(a) {
  return N(Y, this.right) ? new Y(this.key, this.k, new Z(a.key, a.k, a.left, this.left, k), this.right.ia(), k) : N(Y, this.left) ? new Y(this.left.key, this.left.k, new Z(a.key, a.k, a.left, this.left.left, k), new Z(this.key, this.k, this.left.right, this.right, k), k) : new Z(a.key, a.k, a.left, this, k)
};
r.ia = function() {
  return new Z(this.key, this.k, this.left, this.right, k)
};
r.za = function(a, b) {
  return Ob.a(a, b)
};
r.Aa = function(a, b, c) {
  return Ob.c(a, b, c)
};
r.N = function() {
  return O.a(this.key, this.k)
};
r.G = n(2);
r.Ba = m("k");
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return P(X([this.key, this.k]), b)
};
r.J = n(k);
r.W = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.k : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.k : c
};
r.H = function() {
  return Lf
};
var jh = function ih(b, c, d, f, h) {
  if(c == k) {
    return new Y(d, f, k, k, k)
  }
  var i = b.a ? b.a(d, c.key) : b.call(k, d, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = ih(b, c.left, d, f, h), b != k ? c.sb(b) : k
  }
  b = ih(b, c.right, d, f, h);
  return b != k ? c.tb(b) : k
}, lh = function kh(b, c) {
  if(b == k) {
    return c
  }
  if(c == k) {
    return b
  }
  if(N(Y, b)) {
    if(N(Y, c)) {
      var d = kh(b.right, c.left);
      return N(Y, d) ? new Y(d.key, d.k, new Y(b.key, b.k, b.left, d.left, k), new Y(c.key, c.k, d.right, c.right, k), k) : new Y(b.key, b.k, b.left, new Y(c.key, c.k, d, c.right, k), k)
    }
    return new Y(b.key, b.k, b.left, kh(b.right, c), k)
  }
  if(N(Y, c)) {
    return new Y(c.key, c.k, kh(b, c.left), c.right, k)
  }
  d = kh(b.right, c.left);
  return N(Y, d) ? new Y(d.key, d.k, new Z(b.key, b.k, b.left, d.left, k), new Z(c.key, c.k, d.right, c.right, k), k) : dh(b.key, b.k, b.left, new Z(c.key, c.k, d, c.right, k))
}, nh = function mh(b, c, d, f) {
  if(c != k) {
    var h = b.a ? b.a(d, c.key) : b.call(k, d, c.key);
    if(0 === h) {
      return f[0] = c, lh(c.left, c.right)
    }
    if(0 > h) {
      var b = mh(b, c.left, d, f), i = b != k;
      return x(i ? i : f[0] != k) ? N(Z, c.left) ? dh(c.key, c.k, b, c.right) : new Y(c.key, c.k, b, c.right, k) : k
    }
    b = mh(b, c.right, d, f);
    d = b != k;
    x(d ? d : f[0] != k) ? N(Z, c.right) ? (f = c.key, d = c.k, c = c.left, N(Y, b) ? i = new Y(f, d, c, b.ia(), k) : N(Z, c) ? i = bh(f, d, c.Pa(), b) : (h = N(Y, c), x(h ? N(Z, c.right) : h) ? i = new Y(c.right.key, c.right.k, bh(c.key, c.k, c.left.Pa(), c.right.left), new Z(f, d, c.right.right, b, k), k) : e(Error("red-black tree invariant violation")))) : i = new Y(c.key, c.k, c.left, b, k) : i = k;
    return i
  }
  return k
}, ph = function oh(b, c, d, f) {
  var h = c.key, i = b.a ? b.a(d, h) : b.call(k, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.k, oh(b, c.left, d, f), c.right) : c.replace(h, c.k, c.left, oh(b, c.right, d, f))
}, Ed = g;
function qh(a, b, c, d, f) {
  this.da = a;
  this.xa = b;
  this.h = c;
  this.l = d;
  this.n = f;
  this.r = 0;
  this.j = 418776847
}
r = qh.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Gd(a)
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  a = rh(a, b);
  return a != k ? a.k : c
};
r.V = function(a, b, c) {
  var d = [k], f = jh(this.da, this.xa, b, c, d);
  return f == k ? (d = U.a(d, 0), Db.a(c, d.k) ? a : new qh(this.da, ph(this.da, this.xa, b, c), this.h, this.l, k)) : new qh(this.da, f.ia(), this.h + 1, this.l, k)
};
r.Ka = function(a, b) {
  return rh(a, b) != k
};
var sh = k, sh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = qh.prototype;
r.call = sh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Uc(b) ? a.V(a, A.a(b, 0), A.a(b, 1)) : na.c(za, a, b)
};
r.Va = function() {
  return 0 < this.h ? new ah(k, $g(this.xa, k, l), l, this.h, k) : k
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
function rh(a, b) {
  for(var c = a.xa;;) {
    if(c != k) {
      var d = a.da.a ? a.da.a(b, c.key) : a.da.call(k, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return k
    }
  }
}
r.N = function() {
  return 0 < this.h ? new ah(k, $g(this.xa, k, j), j, this.h, k) : k
};
r.G = m("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new qh(this.da, this.xa, this.h, b, this.n)
};
r.J = m("l");
r.H = function() {
  return P(th, this.l)
};
r.La = function(a, b) {
  var c = [k], d = nh(this.da, this.xa, b, c);
  return d == k ? U.a(c, 0) == k ? a : new qh(this.da, k, 0, this.l, k) : new qh(this.da, d.ia(), this.h - 1, this.l, k)
};
var th = new qh(ad, k, 0, k, 0);
function uh(a) {
  for(var b = F(a), c = tb(bg);;) {
    if(b) {
      var a = L(L(b)), d = H(b), b = H(L(b)), c = wb(c, d, b), b = a
    }else {
      return vb(c)
    }
  }
}
function vh(a) {
  var b = k;
  t(a) && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return uh.call(this, b)
}
vh.o = 0;
vh.m = function(a) {
  a = F(a);
  return uh(a)
};
vh.g = uh;
Ib = vh;
function wh(a) {
  for(var a = F(a), b = th;;) {
    if(a) {
      var c = L(L(a)), b = yc.c(b, H(a), H(L(a))), a = c
    }else {
      return b
    }
  }
}
function xh(a) {
  var b = k;
  t(a) && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return wh.call(this, b)
}
xh.o = 0;
xh.m = function(a) {
  a = F(a);
  return wh(a)
};
xh.g = wh;
var Ed = function(a) {
  return Ra(a)
}, Fd = function(a) {
  return Sa(a)
}, yh = g;
function zh(a, b, c) {
  this.l = a;
  this.Ia = b;
  this.n = c;
  this.r = 4;
  this.j = 15077647
}
zh.prototype.ya = function() {
  return new yh(tb(this.Ia))
};
zh.prototype.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Hd(a)
};
zh.prototype.B = function(a, b) {
  return a.v(a, b, k)
};
zh.prototype.v = function(a, b, c) {
  return x(Ma(this.Ia, b)) ? b : c
};
var Ah = k, Ah = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.B(this, b);
    case 3:
      return this.v(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = zh.prototype;
r.call = Ah;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return new zh(this.l, yc.c(this.Ia, b, k), k)
};
r.toString = function() {
  return T.b ? T.b(this) : T.call(k, this)
};
r.N = function() {
  return F(Dd.a(H, this.Ia))
};
r.Cb = function(a, b) {
  return new zh(this.l, Cc.a(this.Ia, b), k)
};
r.G = function(a) {
  return qc(F(a))
};
r.z = function(a, b) {
  var c = Sc(b);
  return c ? (c = qc(a) === qc(b)) ? Le(function(b) {
    return D.c(a, b, Xc) === Xc ? l : j
  }, b) : c : c
};
r.L = function(a, b) {
  return new zh(b, this.Ia, this.n)
};
r.J = m("l");
r.H = function() {
  return P(Bh, this.l)
};
var Bh = new zh(k, Ib(), 0), yh = function(a) {
  this.wa = a;
  this.j = 259;
  this.r = 136
};
yh.Z = j;
yh.ba = function() {
  return O.b("cljs.core/TransientHashSet")
};
yh.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashSet")
};
var Ch = k, Ch = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.c(this.wa, b, Xc) === Xc ? k : b;
    case 3:
      return D.c(this.wa, b, Xc) === Xc ? c : b
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = yh.prototype;
r.call = Ch;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  return D.c(this.wa, b, Xc) === Xc ? c : b
};
r.G = function() {
  return qc(this.wa)
};
r.Da = function(a, b) {
  this.wa = wb(this.wa, b, k);
  return a
};
r.Ma = function() {
  return new zh(k, vb(this.wa), k)
};
xh();
Id = function(a) {
  var b = ba(a);
  b && (b = "\ufdd0" === a.charAt(0), b = ia(b ? b : "\ufdd1" === a.charAt(0)));
  if(b) {
    return a
  }
  b = Zc(a);
  if(x(b ? b : $c(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? Bd.a(a, 2) : Bd.a(a, b + 1)
  }
  e(Error([V("Doesn't support name: "), V(a)].join("")))
};
function Dh(a) {
  var b = Zc(a);
  if(x(b ? b : $c(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? Bd.c(a, 2, b) : k
  }
  e(Error([V("Doesn't support namespace: "), V(a)].join("")))
}
var Fh = function Eh(b, c) {
  return new W(k, l, function() {
    var d = F(c);
    return d ? x(b.b ? b.b(H(d)) : b.call(k, H(d))) ? S(H(d), Eh(b, I(d))) : k : k
  }, k)
}, Gh, Hh = k;
function Ih(a, b) {
  return new W(k, l, function() {
    var c = F(b);
    return c ? Hh.c(a, H(c), I(c)) : O.b(a.A ? a.A() : a.call(k))
  }, k)
}
function Jh(a, b, c) {
  return S(b, new W(k, l, function() {
    var d = F(c);
    return d ? Hh.c(a, a.a ? a.a(b, H(d)) : a.call(k, b, H(d)), I(d)) : k
  }, k))
}
Hh = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ih.call(this, a, b);
    case 3:
      return Jh.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Hh.a = Ih;
Hh.c = Jh;
Gh = Hh;
var Kh, Lh = k;
function Mh(a) {
  for(;;) {
    if(F(a)) {
      a = L(a)
    }else {
      return k
    }
  }
}
function Nh(a, b) {
  for(;;) {
    var c = F(b);
    if(x(c ? 0 < a : c)) {
      var c = a - 1, d = L(b), a = c, b = d
    }else {
      return k
    }
  }
}
Lh = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Mh.call(this, a);
    case 2:
      return Nh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Lh.b = Mh;
Lh.a = Nh;
Kh = Lh;
var Oh, Ph = k;
function Qh(a) {
  Kh.b(a);
  return a
}
function Rh(a, b) {
  Kh.a(a, b);
  return b
}
Ph = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Qh.call(this, a);
    case 2:
      return Rh.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ph.b = Qh;
Ph.a = Rh;
Oh = Ph;
Ff = function(a, b, c, d, f, h) {
  return le.g(X([b]), hf(gf(X([c]), Dd.a(function(b) {
    return a.a ? a.a(b, f) : a.call(k, b, f)
  }, h))), M([X([d])], 0))
};
Gf = function(a, b, c, d, f, h, i) {
  E(a, c);
  F(i) && (b.c ? b.c(H(i), a, h) : b.call(k, H(i), a, h));
  for(c = F(L(i));;) {
    if(c) {
      i = H(c), E(a, d), b.c ? b.c(i, a, h) : b.call(k, i, a, h), c = L(c)
    }else {
      break
    }
  }
  return E(a, f)
};
function Sh(a, b) {
  for(var c = F(b);;) {
    if(c) {
      var d = H(c);
      E(a, d);
      c = L(c)
    }else {
      return k
    }
  }
}
function Th(a, b) {
  var c = k;
  t(b) && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return Sh.call(this, a, c)
}
Th.o = 1;
Th.m = function(a) {
  var b = H(a), a = I(a);
  return Sh(b, a)
};
Th.g = Sh;
function Uh(a) {
  this.Jb = a;
  this.r = 0;
  this.j = 1073741824
}
Uh.prototype.Eb = function(a, b) {
  return this.Jb.append(b)
};
Uh.prototype.Ib = n(k);
var Wh = function Vh(b, c) {
  return b == k ? O.b("nil") : g === b ? O.b("#<undefined>") : le.a(x(function() {
    var d = D.c(c, "\ufdd0:meta", k);
    return x(d) ? (b ? (d = b.j & 131072, d = x(d ? d : b.Bb) ? j : b.j ? l : y(Ya, b)) : d = y(Ya, b), x(d) ? Gc(b) : d) : d
  }()) ? le.g(X(["^"]), Vh(Gc(b), c), M([X([" "])], 0)) : k, x(function() {
    var c = b != k;
    return c ? b.Z : c
  }()) ? b.ba(b) : x(b ? x(function() {
    var c = b.j & 536870912;
    return c ? c : b.K
  }()) ? j : b.j ? l : y(lb, b) : y(lb, b)) ? nb(b, c) : x(b instanceof RegExp) ? O.c('#"', b.source, '"') : O.c("#<", "" + V(b), ">"))
}, Hf = function Xh(b, c, d) {
  if(b == k) {
    return E(c, "nil")
  }
  if(g === b) {
    return E(c, "#<undefined>")
  }
  var f;
  f = D.c(d, "\ufdd0:meta", k);
  x(f) && (b ? (f = b.j & 131072, f = x(f ? f : b.Bb) ? j : b.j ? l : y(Ya, b)) : f = y(Ya, b), f = x(f) ? Gc(b) : f);
  x(f) && (E(c, "^"), Xh(Gc(b), c, d), E(c, " "));
  f = b != k;
  x(f ? b.Z : f) ? b = b.ca(b, c, d) : (b ? (f = b.j & 2147483648, f = x(f ? f : b.M) ? j : b.j ? l : y(pb, b)) : f = y(pb, b), x(f) ? b = qb(b, c, d) : (b ? (f = b.j & 536870912, f = x(f ? f : b.K) ? j : b.j ? l : y(lb, b)) : f = y(lb, b), b = x(f) ? ma.c(Th, c, nb(b, d)) : x(b instanceof RegExp) ? Th.g(c, M(['#"', b.source, '"'], 0)) : Th.g(c, M(["#<", "" + V(b), ">"], 0))));
  return b
};
function Yh(a) {
  var b = hg(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":l, "\ufdd0:dup":l});
  if(Rc(a)) {
    b = ""
  }else {
    var c = new ha, d = new Uh(c);
    a: {
      Hf(H(a), d, b);
      for(a = F(L(a));;) {
        if(a) {
          var f = H(a);
          E(d, " ");
          Hf(f, d, b);
          a = L(a)
        }else {
          break a
        }
      }
    }
    ob(d);
    b = "" + V(c)
  }
  return b
}
function Zh(a) {
  var b = k;
  t(a) && (b = M(Array.prototype.slice.call(arguments, 0), 0));
  return Yh(b)
}
Zh.o = 0;
Zh.m = function(a) {
  a = F(a);
  return Yh(a)
};
Zh.g = function(a) {
  return Yh(a)
};
var T = Zh, $h = hg('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function ai(a) {
  return[V('"'), V(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return D.c($h, a, k)
  })), V('"')].join("")
}
lb.number = j;
nb.number = function(a) {
  return O.b("" + V(a))
};
bc.prototype.K = j;
bc.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
ge.prototype.K = j;
ge.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
qh.prototype.K = j;
qh.prototype.D = function(a, b) {
  return Ff(function(a) {
    return Ff(Wh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
kg.prototype.K = j;
kg.prototype.D = function(a, b) {
  return Ff(function(a) {
    return Ff(Wh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
W.prototype.K = j;
W.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Zb.prototype.K = j;
Zb.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
lb["boolean"] = j;
nb["boolean"] = function(a) {
  return O.b("" + V(a))
};
lb.string = j;
nb.string = function(a, b) {
  return Zc(a) ? O.b([V(":"), V(function() {
    var b = Dh(a);
    return x(b) ? [V(b), V("/")].join("") : k
  }()), V(Id(a))].join("")) : $c(a) ? O.b([V(function() {
    var b = Dh(a);
    return x(b) ? [V(b), V("/")].join("") : k
  }()), V(Id(a))].join("")) : O.b(x((new Wd("\ufdd0:readably")).call(k, b)) ? ai(a) : a)
};
Pg.prototype.K = j;
Pg.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Y.prototype.K = j;
Y.prototype.D = function(a, b) {
  return Ff(Wh, "[", " ", "]", b, a)
};
Of.prototype.K = j;
Of.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Xg.prototype.K = j;
Xg.prototype.D = function(a, b) {
  return Ff(function(a) {
    return Ff(Wh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
zh.prototype.K = j;
zh.prototype.D = function(a, b) {
  return Ff(Wh, "#{", " ", "}", b, a)
};
Jf.prototype.K = j;
Jf.prototype.D = function(a, b) {
  return Ff(Wh, "[", " ", "]", b, a)
};
Jd.prototype.K = j;
Jd.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
lb.array = j;
nb.array = function(a, b) {
  return Ff(Wh, "#<Array [", ", ", "]>", b, a)
};
lb["function"] = j;
nb["function"] = function(a) {
  return O.c("#<", "" + V(a), ">")
};
Kd.prototype.K = j;
Kd.prototype.D = function() {
  return O.b("()")
};
Z.prototype.K = j;
Z.prototype.D = function(a, b) {
  return Ff(Wh, "[", " ", "]", b, a)
};
Date.prototype.K = j;
Date.prototype.D = function(a) {
  function b(a, b) {
    for(var f = "" + V(a);;) {
      if(qc(f) < b) {
        f = [V("0"), V(f)].join("")
      }else {
        return f
      }
    }
  }
  return O.b([V('#inst "'), V(a.getUTCFullYear()), V("-"), V(b(a.getUTCMonth() + 1, 2)), V("-"), V(b(a.getUTCDate(), 2)), V("T"), V(b(a.getUTCHours(), 2)), V(":"), V(b(a.getUTCMinutes(), 2)), V(":"), V(b(a.getUTCSeconds(), 2)), V("."), V(b(a.getUTCMilliseconds(), 3)), V("-"), V('00:00"')].join(""))
};
Sd.prototype.K = j;
Sd.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Tg.prototype.K = j;
Tg.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
dg.prototype.K = j;
dg.prototype.D = function(a, b) {
  return Ff(function(a) {
    return Ff(Wh, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ah.prototype.K = j;
ah.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
pb.number = j;
qb.number = function(a, b) {
  1 / 0;
  return E(b, "" + V(a))
};
bc.prototype.M = j;
bc.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
ge.prototype.M = j;
ge.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
qh.prototype.M = j;
qh.prototype.C = function(a, b, c) {
  return Gf(b, function(a) {
    return Gf(b, Hf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
kg.prototype.M = j;
kg.prototype.C = function(a, b, c) {
  return Gf(b, function(a) {
    return Gf(b, Hf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
W.prototype.M = j;
W.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Zb.prototype.M = j;
Zb.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
pb["boolean"] = j;
qb["boolean"] = function(a, b) {
  return E(b, "" + V(a))
};
pb.string = j;
qb.string = function(a, b, c) {
  return Zc(a) ? (E(b, ":"), c = Dh(a), x(c) && Th.g(b, M(["" + V(c), "/"], 0)), E(b, Id(a))) : $c(a) ? (c = Dh(a), x(c) && Th.g(b, M(["" + V(c), "/"], 0)), E(b, Id(a))) : x((new Wd("\ufdd0:readably")).call(k, c)) ? E(b, ai(a)) : E(b, a)
};
Pg.prototype.M = j;
Pg.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Y.prototype.M = j;
Y.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "[", " ", "]", c, a)
};
Of.prototype.M = j;
Of.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Xg.prototype.M = j;
Xg.prototype.C = function(a, b, c) {
  return Gf(b, function(a) {
    return Gf(b, Hf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
zh.prototype.M = j;
zh.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "#{", " ", "}", c, a)
};
Jf.prototype.M = j;
Jf.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "[", " ", "]", c, a)
};
Jd.prototype.M = j;
Jd.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
pb.array = j;
qb.array = function(a, b, c) {
  return Gf(b, Hf, "#<Array [", ", ", "]>", c, a)
};
pb["function"] = j;
qb["function"] = function(a, b) {
  return Th.g(b, M(["#<", "" + V(a), ">"], 0))
};
Kd.prototype.M = j;
Kd.prototype.C = function(a, b) {
  return E(b, "()")
};
Z.prototype.M = j;
Z.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "[", " ", "]", c, a)
};
Date.prototype.M = j;
Date.prototype.C = function(a, b) {
  function c(a, b) {
    for(var c = "" + V(a);;) {
      if(qc(c) < b) {
        c = [V("0"), V(c)].join("")
      }else {
        return c
      }
    }
  }
  return Th.g(b, M(['#inst "', "" + V(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
};
Sd.prototype.M = j;
Sd.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Tg.prototype.M = j;
Tg.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
dg.prototype.M = j;
dg.prototype.C = function(a, b, c) {
  return Gf(b, function(a) {
    return Gf(b, Hf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
ah.prototype.M = j;
ah.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Jf.prototype.Fb = j;
Jf.prototype.zb = function(a, b) {
  return bd.a(a, b)
};
function bi(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.Kb = c;
  this.Lb = d;
  this.j = 2690809856;
  this.r = 2
}
r = bi.prototype;
r.I = function(a) {
  return a[ca] || (a[ca] = ++da)
};
r.Db = function(a, b, c) {
  for(var d = F(this.Lb);;) {
    if(d) {
      var f = H(d), h = U.c(f, 0, k), f = U.c(f, 1, k);
      f.q ? f.q(h, a, b, c) : f.call(k, h, a, b, c);
      d = L(d)
    }else {
      return k
    }
  }
};
r.C = function(a, b, c) {
  E(b, "#<Atom: ");
  qb(this.state, b, c);
  return E(b, ">")
};
r.D = function(a, b) {
  return le.g(X(["#<Atom: "]), nb(this.state, b), M([">"], 0))
};
r.J = m("l");
r.Za = m("state");
r.z = function(a, b) {
  return a === b
};
var ci = k;
function di(a) {
  return new bi(a, k, k, k)
}
function ei(a, b) {
  var c = Yc(b) ? ma.a(Ib, b) : b, d = D.c(c, "\ufdd0:validator", k), c = D.c(c, "\ufdd0:meta", k);
  return new bi(a, c, d, k)
}
function fi(a, b) {
  var c = k;
  t(b) && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return ei.call(this, a, c)
}
fi.o = 1;
fi.m = function(a) {
  var b = H(a), a = I(a);
  return ei(b, a)
};
fi.g = ei;
ci = function(a, b) {
  switch(arguments.length) {
    case 1:
      return di.call(this, a);
    default:
      return fi.g(a, M(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ci.o = 1;
ci.m = fi.m;
ci.b = di;
ci.g = fi.g;
var wg = ci, ug = function(a, b) {
  var c = a.Kb;
  x(c) && !x(c.b ? c.b(b) : c.call(k, b)) && e(Error([V("Assert failed: "), V("Validator rejected reference state"), V("\n"), V(T.g(M([P(O("\ufdd1'validate", "\ufdd1'new-value"), Ib("\ufdd0:line", 6752, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  rb(a, c, b);
  return b
}, gi, hi = k;
function ii(a, b) {
  return ug(a, b.b ? b.b(a.state) : b.call(k, a.state))
}
function ji(a, b, c) {
  return ug(a, b.a ? b.a(a.state, c) : b.call(k, a.state, c))
}
function ki(a, b, c, d) {
  return ug(a, b.c ? b.c(a.state, c, d) : b.call(k, a.state, c, d))
}
function li(a, b, c, d, f) {
  return ug(a, b.q ? b.q(a.state, c, d, f) : b.call(k, a.state, c, d, f))
}
function mi(a, b, c, d, f, h) {
  return ug(a, ma.g(b, a.state, c, d, f, M([h], 0)))
}
function ni(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = M(Array.prototype.slice.call(arguments, 5), 0));
  return mi.call(this, a, b, c, d, f, i)
}
ni.o = 5;
ni.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), f = H(L(L(L(a)))), h = H(L(L(L(L(a))))), a = I(L(L(L(L(a)))));
  return mi(b, c, d, f, h, a)
};
ni.g = mi;
hi = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return ii.call(this, a, b);
    case 3:
      return ji.call(this, a, b, c);
    case 4:
      return ki.call(this, a, b, c, d);
    case 5:
      return li.call(this, a, b, c, d, f);
    default:
      return ni.g(a, b, c, d, f, M(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
hi.o = 5;
hi.m = ni.m;
hi.a = ii;
hi.c = ji;
hi.q = ki;
hi.Y = li;
hi.g = ni.g;
gi = hi;
R = function(a) {
  return Xa(a)
};
wg.b(hg(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":gg, "\ufdd0:descendants":gg, "\ufdd0:ancestors":gg}));
function oi(a, b) {
  var c = U.c(a, 0, k), d = U.c(a, 1, k), f = U.c(b, 0, k), h = U.c(b, 1, k);
  return[c - f, d - h]
}
function pi(a, b) {
  var c = U.c(a, 0, k), d = U.c(a, 1, k), f = U.c(b, 0, k), h = U.c(b, 1, k);
  return[c + f, d + h]
}
function qi(a, b) {
  var c = U.c(b, 0, k), d = U.c(b, 1, k);
  return[a * c, a * d]
}
;var ri = Math.floor;
function si(a) {
  return ri.b ? ri.b(a / 100) : ri.call(k, a / 100)
}
;wg.b(gg);
function ti(a) {
  return Dd.c(ja, a, I(a))
}
function ui(a, b) {
  return function d(a) {
    return new W(k, l, function() {
      for(;;) {
        var h = F(a);
        if(h) {
          var i = H(h), h = U.c(i, 0, k), p = U.c(i, 1, k), i = S, q = oi(p, h), v = U.c(q, 0, k), q = U.c(q, 1, k), v = X([-q, v]), q = b, w = v, G = U.c(w, 0, k), w = U.c(w, 1, k), v = qi(q / Math.sqrt(G * G + w * w), v), h = X([pi(h, v), pi(p, v)]);
          return i(h, d(I(a)))
        }
        return k
      }
    }, k)
  }(ti(a))
}
function vi(a) {
  a = le.a(a, X([H(a)]));
  a = function c(a) {
    return new W(k, l, function() {
      for(;;) {
        var f = F(a);
        if(f) {
          var f = H(f), h = U.c(f, 0, k), i = U.c(f, 1, k), f = U.c(i, 0, k), p = U.c(i, 1, k), i = S, q = X([f, p]), v = U.c(q, 0, k), q = U.c(q, 1, k), w = U.c(h, 0, k), G = U.c(h, 1, k), q = oi(q, v), h = U.c(q, 0, k), q = U.c(q, 1, k), J = oi(G, w), G = U.c(J, 0, k), J = U.c(J, 1, k), w = oi(w, v), v = U.c(w, 0, k), w = U.c(w, 1, k), Q = -1 * h * J - -1 * q * G, h = X([(-1 * J * v + G * w) / Q, (-1 * q * v + h * w) / Q]), h = H(h), p = oi(p, f), f = pi(f, qi(h, p));
          return i(f, c(I(a)))
        }
        return k
      }
    }, k)
  }(Dd.c(ja, a, I(a)));
  return le.a(a, X([H(a)]))
}
;var wi, xi = k;
function yi(a) {
  return ma.a(V, a)
}
function zi(a, b) {
  return ma.a(V, gf(a, b))
}
xi = function(a, b) {
  switch(arguments.length) {
    case 1:
      return yi.call(this, a);
    case 2:
      return zi.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
xi.b = yi;
xi.a = zi;
wi = xi;
var Ai, Bi = k;
function Ci(a, b) {
  var c = Di(a), d;
  d = Id(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  if(F(d)) {
    var f = c.classList;
    if(x(f)) {
      for(d = F(d.split(/\s+/));;) {
        if(d) {
          var h = H(d);
          f.add(h);
          d = L(d)
        }else {
          break
        }
      }
    }else {
      f = c.className;
      for(d = F(d.split(/\s+/));;) {
        if(d) {
          var h = H(d), i;
          a: {
            for(i = 0;;) {
              if(i = f.indexOf(h, i), 0 <= i) {
                var p;
                p = g;
                p = (p = 0 === i) ? p : " " === f.charAt(i - 1);
                if(x(p)) {
                  var q = f.length;
                  p = i + h.length;
                  p = p <= q ? (q = p === q) ? q : " " === f.charAt(p) : k
                }
                if(p) {
                  break a
                }
                i += h.length
              }else {
                i = k;
                break a
              }
            }
            i = g
          }
          x(i) || (c.className = "" === f ? h : [V(f), V(" "), V(h)].join(""));
          d = L(d)
        }else {
          break
        }
      }
    }
  }
  return c
}
function Ei(a, b, c) {
  a = Di(a);
  for(b = F(mc.a(c, b));;) {
    if(b) {
      c = H(b), Bi.a(a, c), b = L(b)
    }else {
      break
    }
  }
  return a
}
function Fi(a, b, c) {
  var d = k;
  t(c) && (d = M(Array.prototype.slice.call(arguments, 2), 0));
  return Ei.call(this, a, b, d)
}
Fi.o = 2;
Fi.m = function(a) {
  var b = H(a), c = H(L(a)), a = I(L(a));
  return Ei(b, c, a)
};
Fi.g = Ei;
Bi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ci.call(this, a, b);
    default:
      return Fi.g(a, b, M(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bi.o = 2;
Bi.m = Fi.m;
Bi.a = Ci;
Bi.g = Fi.g;
Ai = Bi;
function Gi(a, b) {
  Me(qc(b)) || e(Error([V("Assert failed: "), V(T.g(M([P(O("\ufdd1'even?", P(O("\ufdd1'count", "\ufdd1'kvs"), Ib("\ufdd0:line", 118, "\ufdd0:column", 18))), Ib("\ufdd0:line", 118, "\ufdd0:column", 11))], 0)))].join("")));
  for(var c = Di(a), d = c.style, f = F(pf.a(2, b));;) {
    if(f) {
      var h = H(f), i = U.c(h, 0, k), h = U.c(h, 1, k);
      d[Id(i)] = h;
      f = L(f)
    }else {
      break
    }
  }
  return c
}
function Hi(a, b) {
  var c = k;
  t(b) && (c = M(Array.prototype.slice.call(arguments, 1), 0));
  return Gi.call(this, a, c)
}
Hi.o = 1;
Hi.m = function(a) {
  var b = H(a), a = I(a);
  return Gi(b, a)
};
Hi.g = Gi;
var Ii, Ji = k;
function Ki(a, b) {
  return Ji.c(Di(a), b, "true")
}
function Li(a, b, c) {
  if(x(c)) {
    var d = "function" == s(c);
    if(d ? d : c ? x(x(k) ? k : c.wb) || (c.ob ? 0 : y(ta, c)) : y(ta, c)) {
      return a = Di(a), a[Id(b)] = c, a
    }
    a = Di(a);
    a.setAttribute(Id(b), "\ufdd0:style" === b ? wi.a(" ", Dd.a(function(a) {
      var b = U.c(a, 0, k), a = U.c(a, 1, k);
      return[V(Id(b)), V(":"), V(Id(a)), V(";")].join("")
    }, c)) : c);
    return a
  }
  return k
}
function Mi(a, b, c, d) {
  Me(qc(d)) || e(Error([V("Assert failed: "), V(T.g(M([P(O("\ufdd1'even?", P(O("\ufdd1'count", "\ufdd1'kvs"), Ib("\ufdd0:line", 164, "\ufdd0:column", 19))), Ib("\ufdd0:line", 164, "\ufdd0:column", 12))], 0)))].join("")));
  a = Di(a);
  for(b = F(S(X([b, c]), pf.a(2, d)));;) {
    if(b) {
      d = H(b), c = U.c(d, 0, k), d = U.c(d, 1, k), Ji.c(a, c, d), b = L(b)
    }else {
      break
    }
  }
  return a
}
function Ni(a, b, c, d) {
  var f = k;
  t(d) && (f = M(Array.prototype.slice.call(arguments, 3), 0));
  return Mi.call(this, a, b, c, f)
}
Ni.o = 3;
Ni.m = function(a) {
  var b = H(a), c = H(L(a)), d = H(L(L(a))), a = I(L(L(a)));
  return Mi(b, c, d, a)
};
Ni.g = Mi;
Ji = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Ki.call(this, a, b);
    case 3:
      return Li.call(this, a, b, c);
    default:
      return Ni.g(a, b, c, M(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ji.o = 3;
Ji.m = Ni.m;
Ji.a = Ki;
Ji.c = Li;
Ji.g = Ni.g;
Ii = Ji;
var Pi = function Oi(b, c, d) {
  var f = U.c(b, 0, k), h = rd(b, 1), i = U.c(c, 0, k), p = rd(c, 1);
  return Rc(b) ? c : Rc(c) ? b : x(d.a ? d.a(f, i) : d.call(k, f, i)) ? S(f, Oi(h, c, d)) : S(i, Oi(b, p, d))
};
function Qi(a, b) {
  var c = U.c(a, 0, k), d = U.c(a, 1, k), f = U.c(b, 0, k), h = U.c(b, 1, k);
  return 0 < c * h - d * f
}
function Ri(a) {
  function b(a) {
    return Ge.a(a, d)
  }
  var c;
  a: {
    for(c = Lf;;) {
      if(L(a)) {
        c = mc.a(c, H(a)), a = L(a)
      }else {
        c = F(c);
        break a
      }
    }
    c = g
  }
  var d = na.a(function(a, b) {
    var c = U.c(a, 0, k), d = U.c(a, 1, k), f = U.c(b, 0, k), w = U.c(b, 1, k);
    return Db.a(d, w) ? c < f ? a : b : d < w ? a : b
  }, c), f = c;
  c = le.a(new W(k, l, function() {
    var a;
    a: {
      a = b;
      for(var c = f;;) {
        var c = F(c), d;
        d = (d = c) ? a.b ? a.b(H(c)) : a.call(k, H(c)) : d;
        if(x(d)) {
          c = I(c)
        }else {
          a = c;
          break a
        }
      }
      a = g
    }
    return a
  }, k), Fh(function(a) {
    return Ge.a(a, d)
  }, c));
  return le.a(c, X([H(c)]))
}
;function Si() {
  var a = Ti, b = Ui, c = U.c(b, 0, k);
  a: {
    for(var d = function(c) {
      var d = U.c(c, 0, k), c = U.c(c, 1, k), f = a[d];
      x(f) ? (d = f[c], x(d) ? d.push(b) : f[c] = [b]) : (f = {}, f[c] = [b], a[d] = f);
      return a
    }, f = U.c(b, 1, k), h = U.c(c, 0, k), i = U.c(c, 1, k), p = U.c(f, 0, k), q = U.c(f, 1, k), c = oi(f, c), f = [si(h), si(i)], p = [si(p), si(q)], q = f, f = 0, h = [(h % 100 + 100) % 100, (i % 100 + 100) % 100];;) {
      d.a ? d.a(q, h) : d.call(k, q);
      var v = q, w = p, i = U.c(v, 0, k), v = U.c(v, 1, k), G = U.c(w, 0, k), w = U.c(w, 1, k), i = (i = Db.a(i, G)) ? Db.a(v, w) : i;
      if(x(x(i) ? i : 10 < f)) {
        break a
      }
      i = h;
      w = c;
      h = U.c(i, 0, k);
      i = U.c(i, 1, k);
      v = U.c(w, 0, k);
      w = U.c(w, 1, k);
      if(Db.a(v, 0)) {
        h = [[0, 0 > w ? -1 : 1], [h, 0 > w ? 100 : 0]]
      }else {
        if(Db.a(w, 0)) {
          h = [[0 > v ? -1 : 1, 0], [0 > v ? 100 : 0, i]]
        }else {
          var G = (0 > v ? -h : 100 - h) / v, J = (0 > w ? -i : 100 - i) / w, h = Db.a(G, J) ? [[0 > v ? -1 : 1, 0 > w ? -1 : 1], [0 > v ? 100 : 0, 0 > w ? 100 : 0]] : G < J ? [[0 > v ? -1 : 1, 0], [0 > v ? 100 : 0, i + G * w]] : [[0, 0 > w ? -1 : 1], [h + J * v, 0 > w ? 100 : 0]]
        }
      }
      i = U.c(h, 0, k);
      h = U.c(h, 1, k);
      q = pi(i, q);
      f += 1
    }
  }
}
;var Vi = X([X([-434, -24]), X([22, -22]), X([24, -232]), X([-196, -402]), X([-195, -719]), X([547, -715]), X([545, -536]), X([406, -453]), X([-16, -455]), X([234, -272]), X([229, -20]), X([633, -20])]), Wi = pa.b(ti(Vi)), Xi = X([X([-50, 0]), X([-40, -10]), X([40, -10]), X([50, 0]), X([35, 30]), X([-35, 30]), X([-50, 0])]);
X([Xi, vi(ui(Xi, 6))]);
X([X([X([-32, 2]), 3]), X([X([32, 2]), 3]), X([X([-26, 17]), 3]), X([X([26, 17]), 3])]);
var Yi, Zi = X([X([12, -10]), X([-18, -10]), X([-18, 10]), X([12, 10]), X([12, -10])]);
Yi = vi(ui(Zi, -3));
var $i = [X([12, -10]), X([-18, -10]), X([-18, 10]), X([12, 10]), X([24, 4]), X([24, -4]), X([12, -10])];
X([Yi]);
X([$i]);
for(var Ti = {}, aj = Ri(Dd.a(function(a) {
  return qi(-1, a)
}, Xi)), cj = function bj(b) {
  return new W(k, l, function() {
    for(;;) {
      var c = F(b);
      if(c) {
        var c = H(c), d = U.c(c, 0, k), f = U.c(c, 1, k), c = S, h = Ri(X([d, f, d])), f = aj, d = pi(H(h), H(f)), h = Dd.c(oi, I(h), h), f = Dd.c(oi, I(f), f), f = Pi(h, f, Qi), d = Gh.c(pi, d, f);
        return c(d, bj(I(b)))
      }
      return k
    }
  }, k)
}(Wi), dj = jf.a(ti, cj), ej = F(dj);;) {
  if(ej) {
    var Ui = H(ej);
    Si();
    ej = L(ej)
  }else {
    break
  }
}
;var fj = {};
function gj(a) {
  if(a ? a.ua : a) {
    return a.ua(a)
  }
  var b;
  var c = gj[s(a == k ? k : a)];
  c ? b = c : (c = gj._) ? b = c : e(z("PElement.-elem", a));
  return b.call(k, a)
}
function hj(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), f = Math.min(c, d);
  return 0 > f ? Math.max(c, d) : f
}
function ij(a) {
  var b = Id(a), c = hj(b, 0), a = document.createElement(0 < c ? b.substring(0, c) : 0 === c ? "div" : b);
  if(0 <= c) {
    for(b = b.substring(c);;) {
      var c = hj(b, 1), d = 0 <= c ? b.substring(0, c) : b, f = d.charAt(0);
      Db.a("#", f) ? a.setAttribute("id", d.substring(1)) : Db.a(".", f) ? Ai.a(a, d.substring(1)) : e(Error([V("No matching clause: "), V(d.charAt(0))].join("")));
      if(0 <= c) {
        b = b.substring(c)
      }else {
        break
      }
    }
  }
  return a
}
var jj, kj = k;
function lj(a) {
  return kj.a(document.createDocumentFragment(), a)
}
function mj(a, b) {
  if(x(b ? x(x(k) ? k : b.oa) ? j : b.ob ? l : y(fj, b) : y(fj, b))) {
    return a.appendChild(gj(b)), a
  }
  if(Yc(b)) {
    for(var c = F(b);;) {
      if(c) {
        var d = H(c);
        kj.a(a, d);
        c = L(c)
      }else {
        break
      }
    }
    return a
  }
  b != k && e([V("Don't know how to make node from: "), V(T.g(M([b], 0)))].join(""));
  return a
}
kj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return lj.call(this, a);
    case 2:
      return mj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
kj.b = lj;
kj.a = mj;
jj = kj;
function Di(a) {
  return x(a ? x(x(k) ? k : a.oa) ? j : a.ob ? l : y(fj, a) : y(fj, a)) ? gj(a) : jj.b(a)
}
fj.string = j;
gj.string = function(a) {
  return Zc(a) ? ij(a) : document.createTextNode("" + V(a))
};
fj.number = j;
gj.number = function(a) {
  return document.createTextNode("" + V(a))
};
Jf.prototype.oa = j;
Jf.prototype.ua = function(a) {
  var b = U.c(a, 0, k), c = U.c(a, 1, k), a = rd(a, 2), b = ij(b), d;
  d = (d = Tc(c)) ? ia(c ? x(x(k) ? k : c.oa) ? j : c.ob ? l : y(fj, c) : y(fj, c)) : d;
  d = x(d) ? c : k;
  c = x(d) ? a : S(c, a);
  for(a = F(d);;) {
    if(a) {
      var f = H(a);
      d = U.c(f, 0, k);
      var f = U.c(f, 1, k), h = d;
      if(Db.a("\ufdd0:classes", h)) {
        for(d = F(f);;) {
          if(d) {
            f = H(d), Ai.a(b, f), d = L(d)
          }else {
            break
          }
        }
      }else {
        Db.a("\ufdd0:class", h) ? Ai.a(b, f) : Ii.c(b, d, f)
      }
      a = L(a)
    }else {
      break
    }
  }
  b.appendChild(Di(c));
  return b
};
Document.prototype.oa = j;
Document.prototype.ua = aa();
Text.prototype.oa = j;
Text.prototype.ua = aa();
DocumentFragment.prototype.oa = j;
DocumentFragment.prototype.ua = aa();
HTMLElement.prototype.oa = j;
HTMLElement.prototype.ua = aa();
try {
  Window.prototype.oa = j, Window.prototype.ua = aa()
}catch(nj) {
  N(ReferenceError, nj) ? console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)") : e(nj)
}
;var oj = Hi, oj = Hi;
function pj(a, b) {
  var c = Di(a);
  c.appendChild(Di(b));
  return c
}
of(gg, Dd.a(function(a) {
  var b = U.c(a, 0, k), a = U.c(a, 1, k);
  return X([b, og([a], [function(a) {
    return function(b) {
      var f = b.relatedTarget, h;
      h = b.Yb;
      h = x(h) ? h : b.currentTarget;
      x(f) && (f = Di(f), h = Di(h), f = x(h.contains) ? h.contains(f) : x(h.compareDocumentPosition) ? 0 != (h.compareDocumentPosition(f) & 16) : k);
      return x(f) ? k : a.b ? a.b(b) : a.call(k, b)
    }
  }])])
}, hg(["\ufdd0:mouseenter", "\ufdd0:mouseleave"], {"\ufdd0:mouseenter":"\ufdd0:mouseover", "\ufdd0:mouseleave":"\ufdd0:mouseout"})));
var qj = document.createElement("canvas");
qj.setAttribute("width", 640);
qj.setAttribute("height", 480);
qj.getContext("2d");
var rj = k;
og([87, 83, 65, 68], [0.5, -0.5, -0.25, 0.25]);
var sj = new function(a, b, c, d, f, h, i, p, q) {
  this.Zb = a;
  this.$b = b;
  this.target = c;
  this.x = d;
  this.y = f;
  this.ac = h;
  this.bc = i;
  this.Wb = p;
  this.Xb = q
}(0, 0, [1, 0], 0, 0, 0, 0, Ti, 100), tj = wg.b(Bh);
function uj() {
  return document.getElementById("status").value = T.g(M([R(tj)], 0))
}
window.onkeydown = function(a) {
  gi.c(tj, mc, a.which);
  return uj()
};
window.onkeyup = function(a) {
  gi.c(tj, Hc, a.which);
  return uj()
};
window.onload = function() {
  oj.c ? oj.c(qj, "\ufdd0:border", "1px solid #000") : oj.call(k, qj, "\ufdd0:border", "1px solid #000");
  var a = pj(document.body, qj), b = document.createElement("div");
  b.appendChild(function() {
    var a = document.createElement("input");
    a.setAttribute("id", "status");
    return a
  }());
  b.appendChild(function() {
    var a = document.createElement("input");
    a.setAttribute("id", "random");
    return a
  }());
  pj(a, b);
  a: {
    for(var c = qj, a = qj.offsetLeft, b = qj.offsetTop;;) {
      if(c = c.offsetParent, x(c)) {
        a += c.offsetLeft, b += c.offsetTop
      }else {
        a = [a, b];
        break a
      }
    }
    a = g
  }
  var d = U.c(a, 0, k), f = U.c(a, 1, k);
  return rj = function(a) {
    return sj.target = [a.pageX - d - qj.width / 2, -10 - (a.pageY - f - qj.height / 2)]
  }
};
qj.onmouseover = function() {
  return window.onmousemove = rj
};
qj.onmouseout = function() {
  return window.onmousemove = k
};
