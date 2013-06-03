function e(a) {
  throw a;
}
var g = void 0, j = !0, k = null, l = !1;
function aa() {
  return function(a) {
    return a
  }
}
function n(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
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
function ea(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function fa(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, m, q, w, y, F) {
    if("%" == w) {
      return"%"
    }
    var H = c.shift();
    "undefined" == typeof H && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = H;
    return fa.la[w].apply(k, arguments)
  })
}
fa.la = {};
fa.la.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
fa.la.f = function(a, b, c, d, f) {
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
fa.la.d = function(a, b, c, d, f, h, i, m) {
  return fa.la.f(parseInt(a, 10), b, c, d, 0, h, i, m)
};
fa.la.i = fa.la.d;
fa.la.u = fa.la.d;
function ga(a, b) {
  a != k && this.append.apply(this, arguments)
}
ga.prototype.Ma = "";
ga.prototype.append = function(a, b, c) {
  this.Ma += a;
  if(b != k) {
    for(var d = 1;d < arguments.length;d++) {
      this.Ma += arguments[d]
    }
  }
  return this
};
ga.prototype.toString = n("Ma");
var u;
function v(a) {
  return a != k && a !== l
}
function ia(a) {
  return v(a) ? l : j
}
function x(a, b) {
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
      return la.c(b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
la.c = function(a) {
  return Array(a)
};
la.b = function(a, b) {
  return la.c(b)
};
ka = la;
var ma = g, na = g, oa, pa = k;
function ra(a) {
  return pa.b(k, a)
}
function sa(a, b) {
  return na.a ? na.a(function(a, b) {
    a.push(b);
    return a
  }, [], b) : na.call(k, function(a, b) {
    a.push(b);
    return a
  }, [], b)
}
pa = function(a, b) {
  switch(arguments.length) {
    case 1:
      return ra.call(this, a);
    case 2:
      return sa.call(this, 0, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
pa.c = ra;
pa.b = sa;
oa = pa;
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
function ya(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = ya[s(a == k ? k : a)];
  d ? c = d : (d = ya._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(k, a, b)
}
var za = {}, A, Ba = k;
function Ca(a, b) {
  if(a ? a.X : a) {
    return a.X(a, b)
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
Ba.b = Ca;
Ba.a = Da;
A = Ba;
var Ea = {}, Fa = {};
function B(a) {
  if(a ? a.Y : a) {
    return a.Y(a)
  }
  var b;
  var c = B[s(a == k ? k : a)];
  c ? b = c : (c = B._) ? b = c : e(z("ISeq.-first", a));
  return b.call(k, a)
}
function C(a) {
  if(a ? a.U : a) {
    return a.U(a)
  }
  var b;
  var c = C[s(a == k ? k : a)];
  c ? b = c : (c = C._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(k, a)
}
var Ga = {};
function Ha(a) {
  if(a ? a.va : a) {
    return a.va(a)
  }
  var b;
  var c = Ha[s(a == k ? k : a)];
  c ? b = c : (c = Ha._) ? b = c : e(z("INext.-next", a));
  return b.call(k, a)
}
var D, Ia = k;
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
Ia = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ka.call(this, a, b);
    case 3:
      return La.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ia.b = Ka;
Ia.a = La;
D = Ia;
function Ma(a, b) {
  if(a ? a.Na : a) {
    return a.Na(a, b)
  }
  var c;
  var d = Ma[s(a == k ? k : a)];
  d ? c = d : (d = Ma._) ? c = d : e(z("IAssociative.-contains-key?", a));
  return c.call(k, a, b)
}
function Na(a, b, c) {
  if(a ? a.W : a) {
    return a.W(a, b, c)
  }
  var d;
  var f = Na[s(a == k ? k : a)];
  f ? d = f : (f = Na._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(k, a, b, c)
}
var Oa = {};
function Pa(a, b) {
  if(a ? a.Oa : a) {
    return a.Oa(a, b)
  }
  var c;
  var d = Pa[s(a == k ? k : a)];
  d ? c = d : (d = Pa._) ? c = d : e(z("IMap.-dissoc", a));
  return c.call(k, a, b)
}
var Qa = {};
function Ra(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var b;
  var c = Ra[s(a == k ? k : a)];
  c ? b = c : (c = Ra._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(k, a)
}
function Sa(a) {
  if(a ? a.Xa : a) {
    return a.Xa(a)
  }
  var b;
  var c = Sa[s(a == k ? k : a)];
  c ? b = c : (c = Sa._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(k, a)
}
var Ta = {};
function Ua(a, b) {
  if(a ? a.Gb : a) {
    return a.Gb(a, b)
  }
  var c;
  var d = Ua[s(a == k ? k : a)];
  d ? c = d : (d = Ua._) ? c = d : e(z("ISet.-disjoin", a));
  return c.call(k, a, b)
}
function Va(a) {
  if(a ? a.Da : a) {
    return a.Da(a)
  }
  var b;
  var c = Va[s(a == k ? k : a)];
  c ? b = c : (c = Va._) ? b = c : e(z("IStack.-peek", a));
  return b.call(k, a)
}
var Wa = {};
function Xa(a) {
  if(a ? a.cb : a) {
    return a.cb(a)
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
  if(a ? a.Ba : a) {
    return a.Ba(a, b)
  }
  var c;
  var d = bb[s(a == k ? k : a)];
  d ? c = d : (d = bb._) ? c = d : e(z("IReduce.-reduce", a));
  return c.call(k, a, b)
}
function eb(a, b, c) {
  if(a ? a.Ca : a) {
    return a.Ca(a, b, c)
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
cb.b = db;
cb.a = eb;
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
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = kb[s(a == k ? k : a)];
  c ? b = c : (c = kb._) ? b = c : e(z("IReversible.-rseq", a));
  return b.call(k, a)
}
var lb = {};
function mb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = mb[s(a == k ? k : a)];
  d ? c = d : (d = mb._) ? c = d : e(z("IPrintable.-pr-seq", a));
  return c.call(k, a, b)
}
function E(a, b) {
  if(a ? a.Ib : a) {
    return a.Ib(0, b)
  }
  var c;
  var d = E[s(a == k ? k : a)];
  d ? c = d : (d = E._) ? c = d : e(z("IWriter.-write", a));
  return c.call(k, a, b)
}
function nb(a) {
  if(a ? a.Qb : a) {
    return k
  }
  var b;
  var c = nb[s(a == k ? k : a)];
  c ? b = c : (c = nb._) ? b = c : e(z("IWriter.-flush", a));
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
  if(a ? a.Hb : a) {
    return a.Hb(a, b, c)
  }
  var d;
  var f = rb[s(a == k ? k : a)];
  f ? d = f : (f = rb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(k, a, b, c)
}
var sb = {};
function tb(a) {
  if(a ? a.Aa : a) {
    return a.Aa(a)
  }
  var b;
  var c = tb[s(a == k ? k : a)];
  c ? b = c : (c = tb._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(k, a)
}
function ub(a, b) {
  if(a ? a.Fa : a) {
    return a.Fa(a, b)
  }
  var c;
  var d = ub[s(a == k ? k : a)];
  d ? c = d : (d = ub._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(k, a, b)
}
function vb(a) {
  if(a ? a.Pa : a) {
    return a.Pa(a)
  }
  var b;
  var c = vb[s(a == k ? k : a)];
  c ? b = c : (c = vb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(k, a)
}
function wb(a, b, c) {
  if(a ? a.Ea : a) {
    return a.Ea(a, b, c)
  }
  var d;
  var f = wb[s(a == k ? k : a)];
  f ? d = f : (f = wb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(k, a, b, c)
}
var xb = {};
function yb(a, b) {
  if(a ? a.Db : a) {
    return a.Db(a, b)
  }
  var c;
  var d = yb[s(a == k ? k : a)];
  d ? c = d : (d = yb._) ? c = d : e(z("IComparable.-compare", a));
  return c.call(k, a, b)
}
function zb(a) {
  if(a ? a.Bb : a) {
    return a.Bb()
  }
  var b;
  var c = zb[s(a == k ? k : a)];
  c ? b = c : (c = zb._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(k, a)
}
var Ab = {};
function Bb(a) {
  if(a ? a.bb : a) {
    return a.bb(a)
  }
  var b;
  var c = Bb[s(a == k ? k : a)];
  c ? b = c : (c = Bb._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(k, a)
}
function Cb(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  var c = Cb[s(a == k ? k : a)];
  c ? b = c : (c = Cb._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(k, a)
}
function G(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 32, b = v(b ? b : a.Ub) ? j : a.j ? l : x(Ea, a)) : b = x(Ea, a);
    a = v(b) ? a : hb(a)
  }
  return a
}
function I(a) {
  if(a == k) {
    return k
  }
  var b;
  a ? (b = a.j & 64, b = v(b ? b : a.eb) ? j : a.j ? l : x(Fa, a)) : b = x(Fa, a);
  if(v(b)) {
    return B(a)
  }
  a = G(a);
  return a == k ? k : B(a)
}
function J(a) {
  if(a != k) {
    var b;
    a ? (b = a.j & 64, b = v(b ? b : a.eb) ? j : a.j ? l : x(Fa, a)) : b = x(Fa, a);
    if(v(b)) {
      return C(a)
    }
    a = G(a);
    return a != k ? C(a) : K
  }
  return K
}
function L(a) {
  if(a == k) {
    a = k
  }else {
    var b;
    a ? (b = a.j & 128, b = v(b ? b : a.Zb) ? j : a.j ? l : x(Ga, a)) : b = x(Ga, a);
    a = v(b) ? Ha(a) : G(J(a))
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
    if(v(Eb.b(a, b))) {
      if(L(c)) {
        a = b, b = I(c), c = L(c)
      }else {
        return Eb.b(b, I(c))
      }
    }else {
      return l
    }
  }
}
function Hb(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return Gb.call(this, a, b, d)
}
Hb.o = 2;
Hb.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
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
      return Hb.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Eb.o = 2;
Eb.l = Hb.l;
Eb.c = p(j);
Eb.b = Fb;
Eb.g = Hb.g;
Db = Eb;
function O(a, b) {
  return b instanceof a
}
var Ib = g, P = g, Jb = g;
gb["null"] = p(0);
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
  return Ib.b ? Ib.b(b, c) : Ib.call(k, b, c)
};
Ga["null"] = j;
Ha["null"] = p(k);
pb["null"] = j;
qb["null"] = function(a, b) {
  return E(b, "nil")
};
xa["null"] = j;
ya["null"] = function(a, b) {
  return P.c ? P.c(b) : P.call(k, b)
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
mb["null"] = function() {
  return P.c ? P.c("nil") : P.call(k, "nil")
};
Ta["null"] = j;
Ua["null"] = p(k);
ua["null"] = j;
va["null"] = p(0);
Va["null"] = p(k);
Fa["null"] = j;
B["null"] = p(k);
C["null"] = function() {
  return P.A ? P.A() : P.call(k)
};
fb["null"] = function(a, b) {
  return b == k
};
$a["null"] = p(k);
Ya["null"] = j;
Za["null"] = p(k);
za["null"] = j;
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
wa["null"] = p(k);
Oa["null"] = j;
Pa["null"] = p(k);
Date.prototype.z = function(a, b) {
  var c = O(Date, b);
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
var Q = g;
$a["function"] = function(a, b) {
  return Q.b ? Q.b(function() {
    if(g === u) {
      u = {};
      u = function(a, b, c) {
        this.m = a;
        this.xa = b;
        this.ub = c;
        this.r = 0;
        this.j = 393217
      };
      u.Z = j;
      u.ba = function() {
        return P.c ? P.c("cljs.core/t3686") : P.call(k, "cljs.core/t3686")
      };
      u.ca = function(a, b) {
        return E(b, "cljs.core/t3686")
      };
      var c = function(a, b) {
        return ma.b ? ma.b(a.xa, b) : ma.call(k, a.xa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.l = function(a) {
        var b = I(a), a = J(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.Ab = j;
      u.prototype.J = n("ub");
      u.prototype.L = function(a, b) {
        return new u(this.m, this.xa, b)
      }
    }
    return new u(b, a, k)
  }(), b) : Q.call(k, function() {
    if(g === u) {
      u = function(a, b, c) {
        this.m = a;
        this.xa = b;
        this.ub = c;
        this.r = 0;
        this.j = 393217
      };
      u.Z = j;
      u.ba = function() {
        return P.c ? P.c("cljs.core/t3686") : P.call(k, "cljs.core/t3686")
      };
      u.ca = function(a, b) {
        return E(b, "cljs.core/t3686")
      };
      var c = function(a, b) {
        return ma.b ? ma.b(a.xa, b) : ma.call(k, a.xa, b)
      }, d = function(a, b) {
        var a = this, d = k;
        t(b) && (d = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, a, d)
      };
      d.o = 1;
      d.l = function(a) {
        var b = I(a), a = J(a);
        return c(b, a)
      };
      d.g = c;
      u.prototype.call = d;
      u.prototype.apply = function(a, b) {
        a = this;
        return a.call.apply(a, [a].concat(b.slice()))
      };
      u.prototype.Ab = j;
      u.prototype.J = n("ub");
      u.prototype.L = function(a, b) {
        return new u(this.m, this.xa, b)
      }
    }
    return new u(b, a, k)
  }(), b)
};
Ya["function"] = j;
Za["function"] = p(k);
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
Nb.prototype.cb = n("k");
var Ob, Pb = k;
function Qb(a, b) {
  var c = va(a);
  if(0 === c) {
    return b.A ? b.A() : b.call(k)
  }
  for(var d = A.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, A.b(a, f)) : b.call(k, d, A.b(a, f));
      if(O(Nb, d)) {
        return R.c ? R.c(d) : R.call(k, d)
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
      c = b.b ? b.b(c, A.b(a, f)) : b.call(k, c, A.b(a, f));
      if(O(Nb, c)) {
        return R.c ? R.c(c) : R.call(k, c)
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
      c = b.b ? b.b(c, A.b(a, d)) : b.call(k, c, A.b(a, d));
      if(O(Nb, c)) {
        return R.c ? R.c(c) : R.call(k, c)
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
Pb.b = Qb;
Pb.a = Rb;
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
      d = b.b ? b.b(d, a[f]) : b.call(k, d, a[f]);
      if(O(Nb, d)) {
        return R.c ? R.c(d) : R.call(k, d)
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
      c = b.b ? b.b(c, a[f]) : b.call(k, c, a[f]);
      if(O(Nb, c)) {
        return R.c ? R.c(c) : R.call(k, c)
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
      c = b.b ? b.b(c, a[d]) : b.call(k, c, a[d]);
      if(O(Nb, c)) {
        return R.c ? R.c(c) : R.call(k, c)
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
Ub.b = Vb;
Ub.a = Wb;
Ub.q = Xb;
Tb = Ub;
var Yb = g, S = g, T = g, Zb = g;
function $b(a) {
  if(a) {
    var b = a.j & 2, a = v(b ? b : a.Wb) ? j : a.j ? l : x(ua, a)
  }else {
    a = x(ua, a)
  }
  return a
}
function ac(a) {
  if(a) {
    var b = a.j & 16, a = v(b ? b : a.Eb) ? j : a.j ? l : x(za, a)
  }else {
    a = x(za, a)
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
  return Yb.c ? Yb.c(a) : Yb.call(k, a)
};
r.va = function() {
  return this.p + 1 < this.P.length ? new bc(this.P, this.p + 1) : k
};
r.F = function(a, b) {
  return S.b ? S.b(b, a) : S.call(k, b, a)
};
r.Ya = function(a) {
  var b = a.G(a);
  return 0 < b ? new Zb(a, b - 1, k) : K
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.Ba = function(a, b) {
  return $b(this.P) ? Ob.q(this.P, b, this.P[this.p], this.p + 1) : Ob.q(a, b, this.P[this.p], 0)
};
r.Ca = function(a, b, c) {
  return $b(this.P) ? Ob.q(this.P, b, c, this.p) : Ob.q(a, b, c, 0)
};
r.N = aa();
r.G = function() {
  return this.P.length - this.p
};
r.Y = function() {
  return this.P[this.p]
};
r.U = function() {
  return this.p + 1 < this.P.length ? new bc(this.P, this.p + 1) : P.A ? P.A() : P.call(k)
};
r.z = function(a, b) {
  return Jb.b ? Jb.b(a, b) : Jb.call(k, a, b)
};
r.X = function(a, b) {
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
  return dc.b(a, 0)
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
dc.c = ec;
dc.b = fc;
cc = dc;
var N, gc = k;
function hc(a) {
  return cc.b(a, 0)
}
function ic(a, b) {
  return cc.b(a, b)
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
gc.c = hc;
gc.b = ic;
N = gc;
ab.array = j;
var jc = k, jc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.b(a, b);
    case 3:
      return Ob.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb.array = jc;
var kc = k, kc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a[b];
    case 3:
      return A.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.array = kc;
za.array = j;
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
  return N.b(a, 0)
};
Q = g;
Zb = function(a, b, c) {
  this.ab = a;
  this.p = b;
  this.m = c;
  this.r = 0;
  this.j = 31850574
};
Zb.Z = j;
Zb.ba = function() {
  return P.c ? P.c("cljs.core/RSeq") : P.call(k, "cljs.core/RSeq")
};
Zb.ca = function(a, b) {
  return E(b, "cljs.core/RSeq")
};
r = Zb.prototype;
r.I = function(a) {
  return Yb.c ? Yb.c(a) : Yb.call(k, a)
};
r.F = function(a, b) {
  return S.b ? S.b(b, a) : S.call(k, b, a)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.G = function() {
  return this.p + 1
};
r.Y = function() {
  return A.b(this.ab, this.p)
};
r.U = function() {
  return 0 < this.p ? new Zb(this.ab, this.p - 1, k) : K
};
r.z = function(a, b) {
  return Jb.b ? Jb.b(a, b) : Jb.call(k, a, b)
};
r.L = function(a, b) {
  return new Zb(this.ab, this.p, b)
};
r.J = n("m");
r.H = function() {
  return Q.b ? Q.b(K, this.m) : Q.call(k, K, this.m)
};
fb._ = function(a, b) {
  return a === b
};
var mc, nc = k;
function oc(a, b, c) {
  for(;;) {
    if(v(c)) {
      a = nc.b(a, b), b = I(c), c = L(c)
    }else {
      return nc.b(a, b)
    }
  }
}
function pc(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return oc.call(this, a, b, d)
}
pc.o = 2;
pc.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
  return oc(b, c, a)
};
pc.g = oc;
nc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ya(a, b);
    default:
      return pc.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
nc.o = 2;
nc.l = pc.l;
nc.b = function(a, b) {
  return ya(a, b)
};
nc.g = pc.g;
mc = nc;
function qc(a) {
  if($b(a)) {
    a = va(a)
  }else {
    a: {
      for(var a = G(a), b = 0;;) {
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
      if(G(a)) {
        return I(a)
      }
      e(Error("Index out of bounds"))
    }
    if(ac(a)) {
      return A.b(a, b)
    }
    if(G(a)) {
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
      return G(a) ? I(a) : c
    }
    if(ac(a)) {
      return A.a(a, b, c)
    }
    if(G(a)) {
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
sc.b = tc;
sc.a = uc;
rc = sc;
var U, vc = k;
function wc(a, b) {
  var c;
  a == k ? c = k : (a ? (c = a.j & 16, c = v(c ? c : a.Eb) ? j : a.j ? l : x(za, a)) : c = x(za, a), c = v(c) ? A.b(a, Math.floor(b)) : rc.b(a, Math.floor(b)));
  return c
}
function xc(a, b, c) {
  if(a != k) {
    var d;
    a ? (d = a.j & 16, d = v(d ? d : a.Eb) ? j : a.j ? l : x(za, a)) : d = x(za, a);
    a = v(d) ? A.a(a, Math.floor(b), c) : rc.a(a, Math.floor(b), c)
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
vc.b = wc;
vc.a = xc;
U = vc;
var yc, zc = k;
function Ac(a, b, c, d) {
  for(;;) {
    if(a = zc.a(a, b, c), v(d)) {
      b = I(d), c = I(L(d)), d = L(L(d))
    }else {
      return a
    }
  }
}
function Bc(a, b, c, d) {
  var f = k;
  t(d) && (f = N(Array.prototype.slice.call(arguments, 3), 0));
  return Ac.call(this, a, b, c, f)
}
Bc.o = 3;
Bc.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), a = J(L(L(a)));
  return Ac(b, c, d, a)
};
Bc.g = Ac;
zc = function(a, b, c, d) {
  switch(arguments.length) {
    case 3:
      return Na(a, b, c);
    default:
      return Bc.g(a, b, c, N(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
zc.o = 3;
zc.l = Bc.l;
zc.a = function(a, b, c) {
  return Na(a, b, c)
};
zc.g = Bc.g;
yc = zc;
var Cc, Dc = k;
function Ec(a, b, c) {
  for(;;) {
    if(a = Dc.b(a, b), v(c)) {
      b = I(c), c = L(c)
    }else {
      return a
    }
  }
}
function Fc(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return Ec.call(this, a, b, d)
}
Fc.o = 2;
Fc.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
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
      return Fc.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dc.o = 2;
Dc.l = Fc.l;
Dc.c = aa();
Dc.b = function(a, b) {
  return Pa(a, b)
};
Dc.g = Fc.g;
Cc = Dc;
Q = function(a, b) {
  return $a(a, b)
};
function Gc(a) {
  var b;
  a ? (b = a.j & 131072, b = v(b ? b : a.Fb) ? j : a.j ? l : x(Ya, a)) : b = x(Ya, a);
  return v(b) ? Za(a) : k
}
var Hc, Ic = k;
function Jc(a, b, c) {
  for(;;) {
    if(a = Ic.b(a, b), v(c)) {
      b = I(c), c = L(c)
    }else {
      return a
    }
  }
}
function Kc(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return Jc.call(this, a, b, d)
}
Kc.o = 2;
Kc.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
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
      return Kc.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ic.o = 2;
Ic.l = Kc.l;
Ic.c = aa();
Ic.b = function(a, b) {
  return Ua(a, b)
};
Ic.g = Kc.g;
Hc = Ic;
var Lc = {}, Mc = 0, Nc, Oc = k;
function Pc(a) {
  return Oc.b(a, j)
}
function Qc(a, b) {
  var c;
  c = ba(a);
  v(c ? b : c) ? (255 < Mc && (Lc = {}, Mc = 0), c = Lc[a], c == k && (c = ea(a), Lc[a] = c, Mc += 1)) : c = gb(a);
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
Oc.c = Pc;
Oc.b = Qc;
Nc = Oc;
function Rc(a) {
  var b = a == k;
  return b ? b : ia(G(a))
}
function Sc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 4096, a = v(b ? b : a.bc) ? j : a.j ? l : x(Ta, a)
    }else {
      a = x(Ta, a)
    }
  }
  return a
}
function Tc(a) {
  if(a == k) {
    a = l
  }else {
    if(a) {
      var b = a.j & 1024, a = v(b ? b : a.Yb) ? j : a.j ? l : x(Oa, a)
    }else {
      a = x(Oa, a)
    }
  }
  return a
}
function Uc(a) {
  if(a) {
    var b = a.j & 16384, a = v(b ? b : a.cc) ? j : a.j ? l : x(Wa, a)
  }else {
    a = x(Wa, a)
  }
  return a
}
function Vc(a) {
  if(a) {
    var b = a.r & 512, a = v(b ? b : a.Vb) ? j : a.r ? l : x(Ab, a)
  }else {
    a = x(Ab, a)
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
      var b = a.j & 64, a = v(b ? b : a.eb) ? j : a.j ? l : x(Fa, a)
    }else {
      a = x(Fa, a)
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
    a ? (c = a.r & 2048, c = v(c ? c : a.Nb) ? j : a.r ? l : x(xb, a)) : c = x(xb, a);
    return v(c) ? yb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var bd, cd = k;
function dd(a, b) {
  var c = qc(a), d = qc(b);
  return c < d ? -1 : c > d ? 1 : cd.q(a, b, c, 0)
}
function ed(a, b, c, d) {
  for(;;) {
    var f = ad(U.b(a, d), U.b(b, d)), h = 0 === f;
    if(v(h ? d + 1 < c : h)) {
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
      return ed.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
cd.b = dd;
cd.q = ed;
bd = cd;
var fd = g, gd, hd = k;
function id(a, b) {
  var c = G(b);
  return c ? na.a ? na.a(a, I(c), L(c)) : na.call(k, a, I(c), L(c)) : a.A ? a.A() : a.call(k)
}
function jd(a, b, c) {
  for(c = G(c);;) {
    if(c) {
      b = a.b ? a.b(b, I(c)) : a.call(k, b, I(c));
      if(O(Nb, b)) {
        return R.c ? R.c(b) : R.call(k, b)
      }
      c = L(c)
    }else {
      return b
    }
  }
}
hd = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return id.call(this, a, b);
    case 3:
      return jd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
hd.b = id;
hd.a = jd;
gd = hd;
var kd = g, ld = k;
function md(a, b) {
  var c;
  b ? (c = b.j & 524288, c = v(c ? c : b.Pb) ? j : b.j ? l : x(ab, b)) : c = x(ab, b);
  return v(c) ? bb.b(b, a) : gd.b(a, b)
}
function od(a, b, c) {
  var d;
  c ? (d = c.j & 524288, d = v(d ? d : c.Pb) ? j : c.j ? l : x(ab, c)) : d = x(ab, c);
  return v(d) ? bb.a(c, a, b) : gd.a(a, b, c)
}
ld = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return md.call(this, a, b);
    case 3:
      return od.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ld.b = md;
ld.a = od;
na = ld;
function pd(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(k, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(k, a)
}
function qd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function rd(a, b) {
  for(var c = b, d = G(a);;) {
    var f = d;
    if(v(f ? 0 < c : f)) {
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
      if(v(b)) {
        var f = a.append(td.c(I(b))), h = L(b), a = f, b = h
      }else {
        return td.c(a)
      }
    }
  }.call(k, new ga(td.c(a)), b)
}
function wd(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return vd.call(this, a, c)
}
wd.o = 1;
wd.l = function(a) {
  var b = I(a), a = J(a);
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
      return wd.g(a, N(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.o = 1;
td.l = wd.l;
td.A = p("");
td.c = ud;
td.g = wd.g;
sd = td;
var V, xd = k;
function yd(a) {
  return $c(a) ? a.substring(2, a.length) : Zc(a) ? sd.g(":", N([a.substring(2, a.length)], 0)) : a == k ? "" : a.toString()
}
function zd(a, b) {
  return function(a, b) {
    for(;;) {
      if(v(b)) {
        var f = a.append(xd.c(I(b))), h = L(b), a = f, b = h
      }else {
        return sd.c(a)
      }
    }
  }.call(k, new ga(xd.c(a)), b)
}
function Ad(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return zd.call(this, a, c)
}
Ad.o = 1;
Ad.l = function(a) {
  var b = I(a), a = J(a);
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
      return Ad.g(a, N(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
xd.o = 1;
xd.l = Ad.l;
xd.A = p("");
xd.c = yd;
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
Cd.b = function(a, b) {
  return a.substring(b)
};
Cd.a = function(a, b, c) {
  return a.substring(b, c)
};
Bd = Cd;
var Dd = g, Jb = function(a, b) {
  var c;
  b ? (c = b.j & 16777216, c = v(c ? c : b.ac) || (b.j ? 0 : x(ib, b))) : c = x(ib, b);
  if(c) {
    a: {
      c = G(a);
      for(var d = G(b);;) {
        if(c == k) {
          c = d == k;
          break a
        }
        if(d != k && Db.b(I(c), I(d))) {
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
  return v(c) ? j : l
}, Yb = function(a) {
  return na.a(function(a, c) {
    var d = Nc.b(c, l);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, Nc.b(I(a), l), L(a))
}, Ed = g, Fd = g;
function Gd(a) {
  for(var b = 0, a = G(a);;) {
    if(a) {
      var c = I(a), b = (b + (Nc.c(Ed.c ? Ed.c(c) : Ed.call(k, c)) ^ Nc.c(Fd.c ? Fd.c(c) : Fd.call(k, c)))) % 4503599627370496, a = L(a)
    }else {
      return b
    }
  }
}
function Hd(a) {
  for(var b = 0, a = G(a);;) {
    if(a) {
      var c = I(a), b = (b + Nc.c(c)) % 4503599627370496, a = L(a)
    }else {
      return b
    }
  }
}
var Id = g;
function Jd(a, b, c, d, f) {
  this.m = a;
  this.Ja = b;
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
r.va = function() {
  return 1 === this.count ? k : this.na
};
r.F = function(a, b) {
  return new Jd(this.m, b, a, this.count + 1, k)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.G = n("count");
r.Da = n("Ja");
r.Y = n("Ja");
r.U = function() {
  return 1 === this.count ? K : this.na
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Jd(b, this.Ja, this.na, this.count, this.n)
};
r.J = n("m");
r.H = function() {
  return K
};
function Kd(a) {
  this.m = a;
  this.r = 0;
  this.j = 65413326
}
r = Kd.prototype;
r.I = p(0);
r.va = p(k);
r.F = function(a, b) {
  return new Jd(this.m, b, k, 1, k)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = p(k);
r.G = p(0);
r.Da = p(k);
r.Y = p(k);
r.U = function() {
  return K
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Kd(b)
};
r.J = n("m");
r.H = aa();
var K = new Kd(k);
function Ld(a) {
  var b;
  a ? (b = a.j & 134217728, b = v(b ? b : a.$b) || (a.j ? 0 : x(jb, a))) : b = x(jb, a);
  return b ? kb(a) : na.a(mc, K, a)
}
var Md = k;
function Nd(a) {
  return mc.b(K, a)
}
function Od(a, b) {
  return mc.b(Md.c(b), a)
}
function Pd(a, b, c) {
  return mc.b(Md.b(b, c), a)
}
function Qd(a, b, c, d) {
  return mc.b(mc.b(mc.b(na.a(mc, K, Ld(d)), c), b), a)
}
function Rd(a, b, c, d) {
  var f = k;
  t(d) && (f = N(Array.prototype.slice.call(arguments, 3), 0));
  return Qd.call(this, a, b, c, f)
}
Rd.o = 3;
Rd.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), a = J(L(L(a)));
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
      return Rd.g(a, b, c, N(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Md.o = 3;
Md.l = Rd.l;
Md.A = function() {
  return K
};
Md.c = Nd;
Md.b = Od;
Md.a = Pd;
Md.g = Rd.g;
P = Md;
function Sd(a, b, c, d) {
  this.m = a;
  this.Ja = b;
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
r.va = function() {
  return this.na == k ? k : hb(this.na)
};
r.F = function(a, b) {
  return new Sd(k, b, a, this.n)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.Y = n("Ja");
r.U = function() {
  return this.na == k ? K : this.na
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Sd(b, this.Ja, this.na, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
};
S = function(a, b) {
  var c = b == k;
  c || (b ? (c = b.j & 64, c = v(c ? c : b.eb) ? j : b.j ? l : x(Fa, b)) : c = x(Fa, b));
  return v(c) ? new Sd(k, a, b, k) : new Sd(k, a, G(b), k)
};
ab.string = j;
var Td = k, Td = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ob.b(a, b);
    case 3:
      return Ob.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
bb.string = Td;
var Ud = k, Ud = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return A.b(a, b);
    case 3:
      return A.a(a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
D.string = Ud;
za.string = j;
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
  return cc.b(a, 0)
};
gb.string = function(a) {
  return ea(a)
};
function Wd(a) {
  this.tb = a;
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
        var f = b.ta;
        d = f == k ? D.a(b, d.tb, k) : f[d.tb]
      }
      return d;
    case 3:
      return b == k ? c : D.a(b, this.tb, c)
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
      return D.a(b, this.toString(), k);
    case 3:
      return D.a(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Yd;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > qc(b) ? D.a(b[0], a, k) : D.a(b[0], a, b[1])
};
function Zd(a) {
  var b = a.x;
  if(a.vb) {
    return b
  }
  a.x = b.A ? b.A() : b.call(k);
  a.vb = j;
  return a.x
}
function X(a, b, c, d) {
  this.m = a;
  this.vb = b;
  this.x = c;
  this.n = d;
  this.r = 0;
  this.j = 31850700
}
r = X.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.va = function(a) {
  return hb(a.U(a))
};
r.F = function(a, b) {
  return S(b, a)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = function(a) {
  return G(Zd(a))
};
r.Y = function(a) {
  return I(Zd(a))
};
r.U = function(a) {
  return J(Zd(a))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new X(b, this.vb, this.x, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
};
var $d = g;
function ae(a, b) {
  this.$a = a;
  this.end = b;
  this.r = 0;
  this.j = 2
}
ae.prototype.G = n("end");
ae.prototype.add = function(a) {
  this.$a[this.end] = a;
  return this.end += 1
};
ae.prototype.ua = function() {
  var a = new $d(this.$a, 0, this.end);
  this.$a = k;
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
  return P.c("cljs.core/ArrayChunk")
};
$d.ca = function(a, b) {
  return E(b, "cljs.core/ArrayChunk")
};
r = $d.prototype;
r.Ba = function(a, b) {
  return Tb.q(this.e, b, this.e[this.O], this.O + 1)
};
r.Ca = function(a, b, c) {
  return Tb.q(this.e, b, c, this.O)
};
r.Bb = function() {
  this.O === this.end && e(Error("-drop-first of empty chunk"));
  return new $d(this.e, this.O + 1, this.end)
};
r.X = function(a, b) {
  return this.e[this.O + b]
};
r.R = function(a, b, c) {
  a = 0 <= b;
  return v(a ? b < this.end - this.O : a) ? this.e[this.O + b] : c
};
r.G = function() {
  return this.end - this.O
};
var be, ce = k;
function de(a) {
  return ce.a(a, 0, a.length)
}
function ee(a, b) {
  return ce.a(a, b, a.length)
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
ce.c = de;
ce.b = ee;
ce.a = fe;
be = ce;
function ge(a, b, c, d) {
  this.ua = a;
  this.sa = b;
  this.m = c;
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
r.Y = function() {
  return A.b(this.ua, 0)
};
r.U = function() {
  return 1 < va(this.ua) ? new ge(zb(this.ua), this.sa, this.m, k) : this.sa == k ? K : this.sa
};
r.Cb = function() {
  return this.sa == k ? k : this.sa
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new ge(this.ua, this.sa, b, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
};
r.bb = n("ua");
r.Va = function() {
  return this.sa == k ? K : this.sa
};
function he(a, b) {
  return 0 === va(a) ? b : new ge(a, b, k, k)
}
fd = function(a) {
  for(var b = [];;) {
    if(G(a)) {
      b.push(I(a)), a = L(a)
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
    h = (h = 0 < d) ? G(c) : h;
    if(v(h)) {
      c = L(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var ke = function je(b) {
  return b == k ? k : L(b) == k ? G(I(b)) : S(I(b), je(L(b)))
}, le, me = k;
function ne() {
  return new X(k, l, p(k), k)
}
function oe(a) {
  return new X(k, l, function() {
    return a
  }, k)
}
function pe(a, b) {
  return new X(k, l, function() {
    var c = G(a);
    return c ? Vc(c) ? he(Bb(c), me.b(Cb(c), b)) : S(I(c), me.b(J(c), b)) : b
  }, k)
}
function qe(a, b, c) {
  return function f(a, b) {
    return new X(k, l, function() {
      var c = G(a);
      return c ? Vc(c) ? he(Bb(c), f(Cb(c), b)) : S(I(c), f(J(c), b)) : v(b) ? f(I(b), L(b)) : k
    }, k)
  }(me.b(a, b), c)
}
function re(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return qe.call(this, a, b, d)
}
re.o = 2;
re.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
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
      return re.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
me.o = 2;
me.l = re.l;
me.A = ne;
me.c = oe;
me.b = pe;
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
  t(f) && (h = N(Array.prototype.slice.call(arguments, 4), 0));
  return we.call(this, a, b, c, d, h)
}
xe.o = 4;
xe.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), f = I(L(L(L(a)))), a = J(L(L(L(a))));
  return we(b, c, d, f, a)
};
xe.g = we;
te = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return G(a);
    case 2:
      return S(a, b);
    case 3:
      return ue.call(this, a, b, c);
    case 4:
      return ve.call(this, a, b, c, d);
    default:
      return xe.g(a, b, c, d, N(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
te.o = 4;
te.l = xe.l;
te.c = function(a) {
  return G(a)
};
te.b = function(a, b) {
  return S(a, b)
};
te.a = ue;
te.q = ve;
te.g = xe.g;
se = te;
function ye(a, b, c) {
  var d = G(c);
  if(0 === b) {
    return a.A ? a.A() : a.call(k)
  }
  var c = B(d), f = C(d);
  if(1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(k, c)
  }
  var d = B(f), h = C(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(k, c, d)
  }
  var f = B(h), i = C(h);
  if(3 === b) {
    return a.a ? a.a(c, d, f) : a.a ? a.a(c, d, f) : a.call(k, c, d, f)
  }
  var h = B(i), m = C(i);
  if(4 === b) {
    return a.q ? a.q(c, d, f, h) : a.q ? a.q(c, d, f, h) : a.call(k, c, d, f, h)
  }
  i = B(m);
  m = C(m);
  if(5 === b) {
    return a.T ? a.T(c, d, f, h, i) : a.T ? a.T(c, d, f, h, i) : a.call(k, c, d, f, h, i)
  }
  var a = B(m), q = C(m);
  if(6 === b) {
    return a.ja ? a.ja(c, d, f, h, i, a) : a.ja ? a.ja(c, d, f, h, i, a) : a.call(k, c, d, f, h, i, a)
  }
  var m = B(q), w = C(q);
  if(7 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, m) : a.Ga ? a.Ga(c, d, f, h, i, a, m) : a.call(k, c, d, f, h, i, a, m)
  }
  var q = B(w), y = C(w);
  if(8 === b) {
    return a.qb ? a.qb(c, d, f, h, i, a, m, q) : a.qb ? a.qb(c, d, f, h, i, a, m, q) : a.call(k, c, d, f, h, i, a, m, q)
  }
  var w = B(y), F = C(y);
  if(9 === b) {
    return a.rb ? a.rb(c, d, f, h, i, a, m, q, w) : a.rb ? a.rb(c, d, f, h, i, a, m, q, w) : a.call(k, c, d, f, h, i, a, m, q, w)
  }
  var y = B(F), H = C(F);
  if(10 === b) {
    return a.fb ? a.fb(c, d, f, h, i, a, m, q, w, y) : a.fb ? a.fb(c, d, f, h, i, a, m, q, w, y) : a.call(k, c, d, f, h, i, a, m, q, w, y)
  }
  var F = B(H), M = C(H);
  if(11 === b) {
    return a.gb ? a.gb(c, d, f, h, i, a, m, q, w, y, F) : a.gb ? a.gb(c, d, f, h, i, a, m, q, w, y, F) : a.call(k, c, d, f, h, i, a, m, q, w, y, F)
  }
  var H = B(M), W = C(M);
  if(12 === b) {
    return a.hb ? a.hb(c, d, f, h, i, a, m, q, w, y, F, H) : a.hb ? a.hb(c, d, f, h, i, a, m, q, w, y, F, H) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H)
  }
  var M = B(W), ha = C(W);
  if(13 === b) {
    return a.ib ? a.ib(c, d, f, h, i, a, m, q, w, y, F, H, M) : a.ib ? a.ib(c, d, f, h, i, a, m, q, w, y, F, H, M) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M)
  }
  var W = B(ha), qa = C(ha);
  if(14 === b) {
    return a.jb ? a.jb(c, d, f, h, i, a, m, q, w, y, F, H, M, W) : a.jb ? a.jb(c, d, f, h, i, a, m, q, w, y, F, H, M, W) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W)
  }
  var ha = B(qa), Aa = C(qa);
  if(15 === b) {
    return a.kb ? a.kb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha) : a.kb ? a.kb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha)
  }
  var qa = B(Aa), Ja = C(Aa);
  if(16 === b) {
    return a.lb ? a.lb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa) : a.lb ? a.lb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa)
  }
  var Aa = B(Ja), ob = C(Ja);
  if(17 === b) {
    return a.mb ? a.mb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa) : a.mb ? a.mb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa)
  }
  var Ja = B(ob), nd = C(ob);
  if(18 === b) {
    return a.nb ? a.nb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja) : a.nb ? a.nb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja)
  }
  ob = B(nd);
  nd = C(nd);
  if(19 === b) {
    return a.ob ? a.ob(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob) : a.ob ? a.ob(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob)
  }
  var bf = B(nd);
  C(nd);
  if(20 === b) {
    return a.pb ? a.pb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob, bf) : a.pb ? a.pb(c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob, bf) : a.call(k, c, d, f, h, i, a, m, q, w, y, F, H, M, W, ha, qa, Aa, Ja, ob, bf)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var ze = k;
function Ae(a, b) {
  var c = a.o;
  if(a.l) {
    var d = ie(b, c + 1);
    return d <= c ? ye(a, d, b) : a.l(b)
  }
  return a.apply(a, fd(b))
}
function Be(a, b, c) {
  b = se.b(b, c);
  c = a.o;
  if(a.l) {
    var d = ie(b, c + 1);
    return d <= c ? ye(a, d, b) : a.l(b)
  }
  return a.apply(a, fd(b))
}
function Ce(a, b, c, d) {
  b = se.a(b, c, d);
  c = a.o;
  return a.l ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.l(b)) : a.apply(a, fd(b))
}
function De(a, b, c, d, f) {
  b = se.q(b, c, d, f);
  c = a.o;
  return a.l ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.l(b)) : a.apply(a, fd(b))
}
function Ee(a, b, c, d, f, h) {
  b = S(b, S(c, S(d, S(f, ke(h)))));
  c = a.o;
  return a.l ? (d = ie(b, c + 1), d <= c ? ye(a, d, b) : a.l(b)) : a.apply(a, fd(b))
}
function Fe(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = N(Array.prototype.slice.call(arguments, 5), 0));
  return Ee.call(this, a, b, c, d, f, i)
}
Fe.o = 5;
Fe.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), f = I(L(L(L(a)))), h = I(L(L(L(L(a))))), a = J(L(L(L(L(a)))));
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
      return Fe.g(a, b, c, d, f, N(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ze.o = 5;
ze.l = Fe.l;
ze.b = Ae;
ze.a = Be;
ze.q = Ce;
ze.T = De;
ze.g = Fe.g;
var ma = ze, Ge, He = k;
function Ie(a, b) {
  return!Db.b(a, b)
}
function Je(a, b, c) {
  return ia(ma.q(Db, a, b, c))
}
function Ke(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return Je.call(this, a, b, d)
}
Ke.o = 2;
Ke.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
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
      return Ke.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
He.o = 2;
He.l = Ke.l;
He.c = p(l);
He.b = Ie;
He.g = Ke.g;
Ge = He;
function Le(a, b) {
  for(;;) {
    if(G(b) == k) {
      return j
    }
    if(v(a.c ? a.c(I(b)) : a.call(k, I(b)))) {
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
  return new X(k, l, function() {
    var c = G(b);
    if(c) {
      if(Vc(c)) {
        for(var d = Bb(c), f = qc(d), h = new ae(ka.c(f), 0), i = 0;;) {
          if(i < f) {
            var m = a.c ? a.c(A.b(d, i)) : a.call(k, A.b(d, i));
            h.add(m);
            i += 1
          }else {
            break
          }
        }
        return he(h.ua(), Oe.b(a, Cb(c)))
      }
      return S(a.c ? a.c(I(c)) : a.call(k, I(c)), Oe.b(a, J(c)))
    }
    return k
  }, k)
}
function Qe(a, b, c) {
  return new X(k, l, function() {
    var d = G(b), f = G(c);
    return v(d ? f : d) ? S(a.b ? a.b(I(d), I(f)) : a.call(k, I(d), I(f)), Oe.a(a, J(d), J(f))) : k
  }, k)
}
function Re(a, b, c, d) {
  return new X(k, l, function() {
    var f = G(b), h = G(c), i = G(d);
    return v(f ? h ? i : h : f) ? S(a.a ? a.a(I(f), I(h), I(i)) : a.call(k, I(f), I(h), I(i)), Oe.q(a, J(f), J(h), J(i))) : k
  }, k)
}
function Se(a, b, c, d, f) {
  return Oe.b(function(b) {
    return ma.b(a, b)
  }, function i(a) {
    return new X(k, l, function() {
      var b = Oe.b(G, a);
      return Le(Ne, b) ? S(Oe.b(I, b), i(Oe.b(J, b))) : k
    }, k)
  }(mc.g(f, d, N([c, b], 0))))
}
function Te(a, b, c, d, f) {
  var h = k;
  t(f) && (h = N(Array.prototype.slice.call(arguments, 4), 0));
  return Se.call(this, a, b, c, d, h)
}
Te.o = 4;
Te.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), f = I(L(L(L(a)))), a = J(L(L(L(a))));
  return Se(b, c, d, f, a)
};
Te.g = Se;
Oe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Pe.call(this, a, b);
    case 3:
      return Qe.call(this, a, b, c);
    case 4:
      return Re.call(this, a, b, c, d);
    default:
      return Te.g(a, b, c, d, N(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oe.o = 4;
Oe.l = Te.l;
Oe.b = Pe;
Oe.a = Qe;
Oe.q = Re;
Oe.g = Te.g;
var Dd = Oe, Ve = function Ue(b, c) {
  return new X(k, l, function() {
    if(0 < b) {
      var d = G(c);
      return d ? S(I(d), Ue(b - 1, J(d))) : k
    }
    return k
  }, k)
};
function We(a, b) {
  return new X(k, l, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        var d = G(d), f = 0 < c;
        if(v(f ? d : f)) {
          c -= 1, d = J(d)
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
var Xe, Ye = k;
function Ze(a) {
  return new X(k, l, function() {
    return S(a, Ye.c(a))
  }, k)
}
function $e(a, b) {
  return Ve(a, Ye.c(b))
}
Ye = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ze.call(this, a);
    case 2:
      return $e.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ye.c = Ze;
Ye.b = $e;
Xe = Ye;
var af, cf = k;
function df(a, b) {
  return new X(k, l, function() {
    var c = G(a), d = G(b);
    return v(c ? d : c) ? S(I(c), S(I(d), cf.b(J(c), J(d)))) : k
  }, k)
}
function ef(a, b, c) {
  return new X(k, l, function() {
    var d = Dd.b(G, mc.g(c, b, N([a], 0)));
    return Le(Ne, d) ? le.b(Dd.b(I, d), ma.b(cf, Dd.b(J, d))) : k
  }, k)
}
function ff(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return ef.call(this, a, b, d)
}
ff.o = 2;
ff.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
  return ef(b, c, a)
};
ff.g = ef;
cf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return df.call(this, a, b);
    default:
      return ff.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
cf.o = 2;
cf.l = ff.l;
cf.b = df;
cf.g = ff.g;
af = cf;
function gf(a, b) {
  return We(1, af.b(Xe.c(a), b))
}
function hf(a) {
  return function c(a, f) {
    return new X(k, l, function() {
      var h = G(a);
      return h ? S(I(h), c(J(h), f)) : G(f) ? c(I(f), J(f)) : k
    }, k)
  }(k, a)
}
var jf, kf = k;
function lf(a, b) {
  return hf(Dd.b(a, b))
}
function mf(a, b, c) {
  return hf(ma.q(Dd, a, b, c))
}
function nf(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return mf.call(this, a, b, d)
}
nf.o = 2;
nf.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
  return mf(b, c, a)
};
nf.g = mf;
kf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return lf.call(this, a, b);
    default:
      return nf.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
kf.o = 2;
kf.l = nf.l;
kf.b = lf;
kf.g = nf.g;
jf = kf;
function of(a, b) {
  var c;
  a ? (c = a.r & 4, c = v(c ? c : a.Xb) ? j : a.r ? l : x(sb, a)) : c = x(sb, a);
  v(c) ? (c = na.a(ub, tb(a), b), c = vb(c)) : c = na.a(ya, a, b);
  return c
}
var pf, qf = k;
function rf(a, b) {
  return qf.a(a, a, b)
}
function sf(a, b, c) {
  return new X(k, l, function() {
    var d = G(c);
    if(d) {
      var f = Ve(a, d);
      return a === qc(f) ? S(f, qf.a(a, b, We(b, d))) : k
    }
    return k
  }, k)
}
function tf(a, b, c, d) {
  return new X(k, l, function() {
    var f = G(d);
    if(f) {
      var h = Ve(a, f);
      return a === qc(h) ? S(h, qf.q(a, b, c, We(b, f))) : P.c(Ve(a, le.b(h, c)))
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
qf.b = rf;
qf.a = sf;
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
    var d = new uf(a, ka.c(32));
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
  if(v(c ? b < a.h : c)) {
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
    var m = f >>> c & 31, b = Af(b, c - 5, d.e[m], f, h);
    i.e[m] = b
  }
  return i
}, Cf = g, Df = g, Ef = g, Ff = R = g, Gf = g, Hf = g, If = g;
function Jf(a, b, c, d, f, h) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.S = f;
  this.n = h;
  this.r = 4;
  this.j = 167668511
}
r = Jf.prototype;
r.Aa = function() {
  return new Ef(this.h, this.shift, Cf.c ? Cf.c(this.root) : Cf.call(k, this.root), Df.c ? Df.c(this.S) : Df.call(k, this.S))
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
r.W = function(a, b, c) {
  var d = 0 <= b;
  if(v(d ? b < this.h : d)) {
    return vf(a) <= b ? (a = this.S.slice(), a[b & 31] = c, new Jf(this.m, this.h, this.shift, this.root, a, k)) : new Jf(this.m, this.h, this.shift, Bf(a, this.shift, this.root, b, c), this.S, k)
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
    return new Jf(this.m, this.h + 1, this.shift, this.root, c, k)
  }
  var d = this.h >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new uf(k, ka.c(32));
    d.e[0] = this.root;
    var f = wf(k, this.shift, new uf(k, this.S));
    d.e[1] = f
  }else {
    d = yf(a, this.shift, this.root, new uf(k, this.S))
  }
  return new Jf(this.m, this.h + 1, c, d, [b], k)
};
r.Ya = function(a) {
  return 0 < this.h ? new Zb(a, this.h - 1, k) : K
};
r.Wa = function(a) {
  return a.X(a, 0)
};
r.Xa = function(a) {
  return a.X(a, 1)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.Ba = function(a, b) {
  return Ob.b(a, b)
};
r.Ca = function(a, b, c) {
  return Ob.a(a, b, c)
};
r.N = function(a) {
  return 0 === this.h ? k : If.a ? If.a(a, 0, 0) : If.call(k, a, 0, 0)
};
r.G = n("h");
r.Da = function(a) {
  return 0 < this.h ? a.X(a, this.h - 1) : k
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Jf(b, this.h, this.shift, this.root, this.S, this.n)
};
r.J = n("m");
r.X = function(a, b) {
  return zf(a, b)[b & 31]
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return v(d ? b < this.h : d) ? a.X(a, b) : c
};
r.H = function() {
  return Q(Lf, this.m)
};
var Mf = new uf(k, ka.c(32)), Lf = new Jf(k, 0, 5, Mf, [], 0);
function Y(a) {
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
kd = function(a) {
  return vb(na.a(ub, tb(Lf), a))
};
function Nf(a) {
  var b = k;
  t(a) && (b = N(Array.prototype.slice.call(arguments, 0), 0));
  return kd(b)
}
Nf.o = 0;
Nf.l = function(a) {
  a = G(a);
  return kd(a)
};
Nf.g = function(a) {
  return kd(a)
};
function Of(a, b, c, d, f, h) {
  this.aa = a;
  this.$ = b;
  this.p = c;
  this.O = d;
  this.m = f;
  this.n = h;
  this.j = 31719660;
  this.r = 1536
}
r = Of.prototype;
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
r.va = function(a) {
  return this.O + 1 < this.$.length ? (a = If.q ? If.q(this.aa, this.$, this.p, this.O + 1) : If.call(k, this.aa, this.$, this.p, this.O + 1), a == k ? k : a) : a.Cb(a)
};
r.F = function(a, b) {
  return S(b, a)
};
r.N = aa();
r.Y = function() {
  return this.$[this.O]
};
r.U = function(a) {
  return this.O + 1 < this.$.length ? (a = If.q ? If.q(this.aa, this.$, this.p, this.O + 1) : If.call(k, this.aa, this.$, this.p, this.O + 1), a == k ? K : a) : a.Va(a)
};
r.Cb = function() {
  var a = this.$.length, a = this.p + a < va(this.aa) ? If.a ? If.a(this.aa, this.p + a, 0) : If.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? k : a
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return If.T ? If.T(this.aa, this.$, this.p, this.O, b) : If.call(k, this.aa, this.$, this.p, this.O, b)
};
r.H = function() {
  return Q(Lf, this.m)
};
r.bb = function() {
  return be.b(this.$, this.O)
};
r.Va = function() {
  var a = this.$.length, a = this.p + a < va(this.aa) ? If.a ? If.a(this.aa, this.p + a, 0) : If.call(k, this.aa, this.p + a, 0) : k;
  return a == k ? K : a
};
var Pf = k;
function Qf(a, b, c) {
  return Pf.T(a, zf(a, b), b, c, k)
}
function Rf(a, b, c, d) {
  return Pf.T(a, b, c, d, k)
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
Pf.a = Qf;
Pf.q = Rf;
Pf.T = Sf;
var If = Pf, Cf = function(a) {
  return new uf({}, a.e.slice())
}, Df = function(a) {
  var b = ka.c(32);
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
  return P.c("cljs.core/TransientVector")
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
r.X = function(a, b) {
  if(this.root.t) {
    return zf(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
r.R = function(a, b, c) {
  var d = 0 <= b;
  return v(d ? b < this.h : d) ? a.X(a, b) : c
};
r.G = function() {
  if(this.root.t) {
    return this.h
  }
  e(Error("count after persistent!"))
};
r.Ea = function(a, b, c) {
  var d;
  a: {
    if(a.root.t) {
      var f = 0 <= b;
      if(v(f ? b < a.h : f)) {
        vf(a) <= b ? a.S[b & 31] = c : (d = function i(d, f) {
          var w = a.root.t === f.t ? f : new uf(a.root.t, f.e.slice());
          if(0 === d) {
            w.e[b & 31] = c
          }else {
            var y = b >>> d & 31, F = i(d - 5, w.e[y]);
            w.e[y] = F
          }
          return w
        }.call(k, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.h) {
        d = a.Fa(a, c);
        break a
      }
      e(Error([V("Index "), V(b), V(" out of bounds for TransientVector of length"), V(a.h)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
r.Fa = function(a, b) {
  if(this.root.t) {
    if(32 > this.h - vf(a)) {
      this.S[this.h & 31] = b
    }else {
      var c = new uf(this.root.t, this.S), d = ka.c(32);
      d[0] = b;
      this.S = d;
      if(this.h >>> 5 > 1 << this.shift) {
        var d = ka.c(32), f = this.shift + 5;
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
r.Pa = function(a) {
  if(this.root.t) {
    this.root.t = k;
    var a = this.h - vf(a), b = ka.c(a);
    Wc(this.S, 0, b, 0, a);
    return new Jf(k, this.h, this.shift, this.root, b, k)
  }
  e(Error("persistent! called twice"))
};
function Wf() {
  this.r = 0;
  this.j = 2097152
}
Wf.prototype.z = p(l);
var Xf = new Wf;
function Yf(a, b) {
  var c = Tc(b) ? qc(a) === qc(b) ? Le(Ne, Dd.b(function(a) {
    return Db.b(D.a(b, I(a), Xf), I(L(a)))
  }, a)) : k : k;
  return v(c) ? j : l
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
  var c = Nc.c(a), d = Nc.c(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function ag(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ta, a = Gc(a), i = 0, m = tb(bg);;) {
    if(i < f) {
      var q = d[i], i = i + 1, m = wb(m, q, h[q])
    }else {
      return d = Q, b = wb(m, b, c), b = vb(b), d(b, a)
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
  this.m = a;
  this.keys = b;
  this.ta = c;
  this.Ta = d;
  this.n = f;
  this.r = 4;
  this.j = 16123663
}
r = dg.prototype;
r.Aa = function(a) {
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
  return v(a ? Zf(b, this.keys) != k : a) ? this.ta[b] : c
};
r.W = function(a, b, c) {
  if(ba(b)) {
    var d = this.Ta > eg;
    if(v(d ? d : this.keys.length >= eg)) {
      return ag(a, b, c)
    }
    if(Zf(b, this.keys) != k) {
      return a = cg(this.ta, this.keys), a[b] = c, new dg(this.m, this.keys, a, this.Ta + 1, k)
    }
    a = cg(this.ta, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new dg(this.m, d, a, this.Ta + 1, k)
  }
  return ag(a, b, c)
};
r.Na = function(a, b) {
  var c = ba(b);
  return v(c ? Zf(b, this.keys) != k : c) ? j : l
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
  return Uc(b) ? a.W(a, A.b(b, 0), A.b(b, 1)) : na.a(ya, a, b)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = function() {
  var a = this;
  return 0 < a.keys.length ? Dd.b(function(b) {
    return Nf.g(N([b, a.ta[b]], 0))
  }, a.keys.sort($f)) : k
};
r.G = function() {
  return this.keys.length
};
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new dg(b, this.keys, this.ta, this.Ta, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(gg, this.m)
};
r.Oa = function(a, b) {
  var c = ba(b);
  if(v(c ? Zf(b, this.keys) != k : c)) {
    var c = this.keys.slice(), d = cg(this.ta, this.keys);
    c.splice(Zf(b, c), 1);
    delete d[b];
    return new dg(this.m, c, d, this.Ta + 1, k)
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
    if(Db.b(c[f], b)) {
      return f
    }
    f += 2
  }
}
var jg = g;
function kg(a, b, c, d) {
  this.m = a;
  this.h = b;
  this.e = c;
  this.n = d;
  this.r = 4;
  this.j = 16123663
}
r = kg.prototype;
r.Aa = function() {
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
r.W = function(a, b, c) {
  var d = ig(a, b);
  if(-1 === d) {
    if(this.h < lg) {
      var d = this.m, a = this.h + 1, f = this.e.slice();
      f.push(b);
      f.push(c);
      c = new kg(d, a, f, k)
    }else {
      c = Q(yc.a(of(bg, a), b, c), this.m)
    }
  }else {
    c === this.e[d + 1] ? c = a : (b = this.m, a = this.h, f = this.e.slice(), f[d + 1] = c, c = new kg(b, a, f, k))
  }
  return c
};
r.Na = function(a, b) {
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
  return Uc(b) ? a.W(a, A.b(b, 0), A.b(b, 1)) : na.a(ya, a, b)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = function() {
  var a = this, b;
  if(0 < a.h) {
    var c = a.e.length;
    b = function f(b) {
      return new X(k, l, function() {
        return b < c ? S(Y([a.e[b], a.e[b + 1]]), f(b + 2)) : k
      }, k)
    }(0)
  }else {
    b = k
  }
  return b
};
r.G = n("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new kg(b, this.h, this.e, this.n)
};
r.J = n("m");
r.H = function() {
  return $a(ng, this.m)
};
r.Oa = function(a, b) {
  if(0 <= ig(a, b)) {
    var c = this.e.length, d = c - 2;
    if(0 === d) {
      return a.H(a)
    }
    for(var d = ka.c(d), f = 0, h = 0;;) {
      if(f >= c) {
        return new kg(this.m, this.h - 1, d, k)
      }
      Db.b(b, this.e[f]) || (d[h] = this.e[f], d[h + 1] = this.e[f + 1], h += 2);
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
  this.Ha = a;
  this.ma = b;
  this.e = c;
  this.r = 56;
  this.j = 258
};
jg.Z = j;
jg.ba = function() {
  return P.c("cljs.core/TransientArrayMap")
};
jg.ca = function(a, b) {
  return E(b, "cljs.core/TransientArrayMap")
};
r = jg.prototype;
r.Ea = function(a, b, c) {
  if(v(this.Ha)) {
    var d = ig(a, b);
    if(-1 === d) {
      if(this.ma + 2 <= 2 * lg) {
        return this.ma += 2, this.e.push(b), this.e.push(c), a
      }
      a = pg.b ? pg.b(this.ma, this.e) : pg.call(k, this.ma, this.e);
      return wb(a, b, c)
    }
    c !== this.e[d + 1] && (this.e[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
r.Fa = function(a, b) {
  if(v(this.Ha)) {
    var c;
    b ? (c = b.j & 2048, c = v(c ? c : b.Ob) ? j : b.j ? l : x(Qa, b)) : c = x(Qa, b);
    if(v(c)) {
      return a.Ea(a, Ed.c ? Ed.c(b) : Ed.call(k, b), Fd.c ? Fd.c(b) : Fd.call(k, b))
    }
    c = G(b);
    for(var d = a;;) {
      var f = I(c);
      if(v(f)) {
        c = L(c), d = d.Ea(d, Ed.c ? Ed.c(f) : Ed.call(k, f), Fd.c ? Fd.c(f) : Fd.call(k, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
r.Pa = function() {
  if(v(this.Ha)) {
    return this.Ha = l, new kg(k, pd((this.ma - this.ma % 2) / 2), this.e, k)
  }
  e(Error("persistent! called twice"))
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  if(v(this.Ha)) {
    return a = ig(a, b), -1 === a ? c : this.e[a + 1]
  }
  e(Error("lookup after persistent!"))
};
r.G = function() {
  if(v(this.Ha)) {
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
  return ba(a) ? a === b : Db.b(a, b)
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
zg.a = Ag;
zg.T = Bg;
yg = zg;
function Cg(a, b) {
  var c = ka.c(a.length - 2);
  Wc(a, 0, c, 0, 2 * b);
  Wc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var Dg, Eg = k;
function Fg(a, b, c, d) {
  a = a.Ia(b);
  a.e[c] = d;
  return a
}
function Gg(a, b, c, d, f, h) {
  a = a.Ia(b);
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
  var i = 1 << (c >>> b & 31), m = qd(this.w & i - 1);
  if(0 === (this.w & i)) {
    var q = qd(this.w);
    if(2 * q < this.e.length) {
      a = this.Ia(a);
      b = a.e;
      h.k = j;
      a: {
        c = 2 * (q - m);
        h = 2 * m + (c - 1);
        for(q = 2 * (m + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[q] = b[h];
          q -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * m] = d;
      b[2 * m + 1] = f;
      a.w |= i;
      return a
    }
    if(16 <= q) {
      m = ka.c(32);
      m[c >>> b & 31] = Jg.fa(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.w >>> d & 1) && (m[d] = this.e[f] != k ? Jg.fa(a, b + 5, Nc.c(this.e[f]), this.e[f], this.e[f + 1], h) : this.e[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Hg(a, q + 1, m)
    }
    b = ka.c(2 * (q + 4));
    Wc(this.e, 0, b, 0, 2 * m);
    b[2 * m] = d;
    b[2 * m + 1] = f;
    Wc(this.e, 2 * m, b, 2 * (m + 1), 2 * (q - m));
    h.k = j;
    a = this.Ia(a);
    a.e = b;
    a.w |= i;
    return a
  }
  q = this.e[2 * m];
  i = this.e[2 * m + 1];
  if(q == k) {
    return q = i.fa(a, b + 5, c, d, f, h), q === i ? this : Dg.q(this, a, 2 * m + 1, q)
  }
  if(xg(d, q)) {
    return f === i ? this : Dg.q(this, a, 2 * m + 1, f)
  }
  h.k = j;
  return Dg.ja(this, a, 2 * m, k, 2 * m + 1, vg.Ga ? vg.Ga(a, b + 5, q, i, c, d, f) : vg.call(k, a, b + 5, q, i, c, d, f))
};
r.Qa = function() {
  return sg.c ? sg.c(this.e) : sg.call(k, this.e)
};
r.Ia = function(a) {
  if(a === this.t) {
    return this
  }
  var b = qd(this.w), c = ka.c(0 > b ? 4 : 2 * (b + 1));
  Wc(this.e, 0, c, 0, 2 * b);
  return new Ig(a, this.w, c)
};
r.Ra = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.w & d)) {
    return this
  }
  var f = qd(this.w & d - 1), h = this.e[2 * f], i = this.e[2 * f + 1];
  return h == k ? (a = i.Ra(a + 5, b, c), a === i ? this : a != k ? new Ig(k, this.w, yg.a(this.e, 2 * f + 1, a)) : this.w === d ? k : new Ig(k, this.w ^ d, Cg(this.e, f))) : xg(c, h) ? new Ig(k, this.w ^ d, Cg(this.e, f)) : this
};
r.ea = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = qd(this.w & h - 1);
  if(0 === (this.w & h)) {
    var m = qd(this.w);
    if(16 <= m) {
      i = ka.c(32);
      i[b >>> a & 31] = Jg.ea(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.w >>> c & 1) && (i[c] = this.e[d] != k ? Jg.ea(a + 5, Nc.c(this.e[d]), this.e[d], this.e[d + 1], f) : this.e[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Hg(k, m + 1, i)
    }
    a = ka.c(2 * (m + 1));
    Wc(this.e, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    Wc(this.e, 2 * i, a, 2 * (i + 1), 2 * (m - i));
    f.k = j;
    return new Ig(k, this.w | h, a)
  }
  m = this.e[2 * i];
  h = this.e[2 * i + 1];
  if(m == k) {
    return m = h.ea(a + 5, b, c, d, f), m === h ? this : new Ig(k, this.w, yg.a(this.e, 2 * i + 1, m))
  }
  if(xg(c, m)) {
    return d === h ? this : new Ig(k, this.w, yg.a(this.e, 2 * i + 1, d))
  }
  f.k = j;
  return new Ig(k, this.w, yg.T(this.e, 2 * i, k, 2 * i + 1, vg.ja ? vg.ja(a + 5, m, h, b, c, d) : vg.call(k, a + 5, m, h, b, c, d)))
};
r.ra = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.w & f)) {
    return d
  }
  var h = qd(this.w & f - 1), f = this.e[2 * h], h = this.e[2 * h + 1];
  return f == k ? h.ra(a + 5, b, c, d) : xg(c, f) ? h : d
};
var Jg = new Ig(k, 0, ka.c(0)), Hg = function(a, b, c) {
  this.t = a;
  this.h = b;
  this.e = c
};
Hg.Z = j;
Hg.ba = function() {
  return P.c("cljs.core/ArrayNode")
};
Hg.ca = function(a, b) {
  return E(b, "cljs.core/ArrayNode")
};
r = Hg.prototype;
r.fa = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, m = this.e[i];
  if(m == k) {
    return a = Dg.q(this, a, i, Jg.fa(a, b + 5, c, d, f, h)), a.h += 1, a
  }
  b = m.fa(a, b + 5, c, d, f, h);
  return b === m ? this : Dg.q(this, a, i, b)
};
r.Qa = function() {
  return tg.c ? tg.c(this.e) : tg.call(k, this.e)
};
r.Ia = function(a) {
  return a === this.t ? this : new Hg(a, this.h, this.e.slice())
};
r.Ra = function(a, b, c) {
  var d = b >>> a & 31, f = this.e[d];
  if(f != k) {
    a = f.Ra(a + 5, b, c);
    if(a === f) {
      d = this
    }else {
      if(a == k) {
        if(8 >= this.h) {
          a: {
            for(var f = this.e, a = 2 * (this.h - 1), b = ka.c(a), c = 0, h = 1, i = 0;;) {
              if(c < a) {
                var m = c !== d;
                if(v(m ? f[c] != k : m)) {
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
          d = new Hg(k, this.h - 1, yg.a(this.e, d, a))
        }
      }else {
        d = new Hg(k, this.h, yg.a(this.e, d, a))
      }
    }
    return d
  }
  return this
};
r.ea = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.e[h];
  if(i == k) {
    return new Hg(k, this.h + 1, yg.a(this.e, h, Jg.ea(a + 5, b, c, d, f)))
  }
  a = i.ea(a + 5, b, c, d, f);
  return a === i ? this : new Hg(k, this.h, yg.a(this.e, h, a))
};
r.ra = function(a, b, c, d) {
  var f = this.e[b >>> a & 31];
  return f != k ? f.ra(a + 5, b, c, d) : d
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
      b = ka.c(c + 2);
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
r.Qa = function() {
  return sg.c ? sg.c(this.e) : sg.call(k, this.e)
};
r.Ia = function(a) {
  if(a === this.t) {
    return this
  }
  var b = ka.c(2 * (this.h + 1));
  Wc(this.e, 0, b, 0, 2 * this.h);
  return new Lg(a, this.ka, this.h, b)
};
r.Ra = function(a, b, c) {
  a = Kg(this.e, this.h, c);
  return-1 === a ? this : 1 === this.h ? k : new Lg(k, this.ka, this.h - 1, Cg(this.e, pd((a - a % 2) / 2)))
};
r.ea = function(a, b, c, d, f) {
  return b === this.ka ? (a = Kg(this.e, this.h, c), -1 === a ? (a = this.e.length, b = ka.c(a + 2), Wc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.k = j, new Lg(k, this.ka, this.h + 1, b)) : Db.b(this.e[a], d) ? this : new Lg(k, this.ka, this.h, yg.a(this.e, a + 1, d))) : (new Ig(k, 1 << (this.ka >>> a & 31), [k, this])).ea(a, b, c, d, f)
};
r.ra = function(a, b, c, d) {
  a = Kg(this.e, this.h, c);
  return 0 > a ? d : xg(c, this.e[a]) ? this.e[a + 1] : d
};
var Mg = k;
function Ng(a, b, c, d, f, h) {
  var i = Nc.c(b);
  if(i === d) {
    return new Lg(k, i, 2, [b, c, f, h])
  }
  var m = new rg;
  return Jg.ea(a, i, b, c, m).ea(a, d, f, h, m)
}
function Og(a, b, c, d, f, h, i) {
  var m = Nc.c(c);
  if(m === f) {
    return new Lg(k, m, 2, [c, d, h, i])
  }
  var q = new rg;
  return Jg.fa(a, b, m, c, d, q).fa(a, b, f, h, i, q)
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
Mg.Ga = Og;
vg = Mg;
function Pg(a, b, c, d, f) {
  this.m = a;
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
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.Y = function() {
  return this.ha == k ? Y([this.ga[this.p], this.ga[this.p + 1]]) : I(this.ha)
};
r.U = function() {
  return this.ha == k ? sg.a ? sg.a(this.ga, this.p + 2, k) : sg.call(k, this.ga, this.p + 2, k) : sg.a ? sg.a(this.ga, this.p, L(this.ha)) : sg.call(k, this.ga, this.p, L(this.ha))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Pg(b, this.ga, this.p, this.ha, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
};
var Qg = k;
function Rg(a) {
  return Qg.a(a, 0, k)
}
function Sg(a, b, c) {
  if(c == k) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != k) {
          return new Pg(k, a, b, k, k)
        }
        var d = a[b + 1];
        if(v(d) && (d = d.Qa(), v(d))) {
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
Qg.c = Rg;
Qg.a = Sg;
sg = Qg;
function Tg(a, b, c, d, f) {
  this.m = a;
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
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.Y = function() {
  return I(this.ha)
};
r.U = function() {
  return tg.q ? tg.q(k, this.ga, this.p, L(this.ha)) : tg.call(k, k, this.ga, this.p, L(this.ha))
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new Tg(b, this.ga, this.p, this.ha, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
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
        if(v(f) && (f = f.Qa(), v(f))) {
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
Ug.c = Vg;
Ug.q = Wg;
tg = Ug;
qg = g;
function Xg(a, b, c, d, f, h) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.Q = d;
  this.V = f;
  this.n = h;
  this.r = 4;
  this.j = 16123663
}
r = Xg.prototype;
r.Aa = function() {
  return new qg({}, this.root, this.h, this.Q, this.V)
};
r.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Gd(a)
};
r.B = function(a, b) {
  return a.v(a, b, k)
};
r.v = function(a, b, c) {
  return b == k ? this.Q ? this.V : c : this.root == k ? c : this.root.ra(0, Nc.c(b), b, c)
};
r.W = function(a, b, c) {
  if(b == k) {
    var d = this.Q;
    return v(d ? c === this.V : d) ? a : new Xg(this.m, this.Q ? this.h : this.h + 1, this.root, j, c, k)
  }
  d = new rg;
  c = (this.root == k ? Jg : this.root).ea(0, Nc.c(b), b, c, d);
  return c === this.root ? a : new Xg(this.m, d.k ? this.h + 1 : this.h, c, this.Q, this.V, k)
};
r.Na = function(a, b) {
  return b == k ? this.Q : this.root == k ? l : this.root.ra(0, Nc.c(b), b, Xc) !== Xc
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
  return Uc(b) ? a.W(a, A.b(b, 0), A.b(b, 1)) : na.a(ya, a, b)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = function() {
  if(0 < this.h) {
    var a = this.root != k ? this.root.Qa() : k;
    return this.Q ? S(Y([k, this.V]), a) : a
  }
  return k
};
r.G = n("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new Xg(b, this.h, this.root, this.Q, this.V, this.n)
};
r.J = n("m");
r.H = function() {
  return $a(bg, this.m)
};
r.Oa = function(a, b) {
  if(b == k) {
    return this.Q ? new Xg(this.m, this.h - 1, this.root, l, k, k) : a
  }
  if(this.root == k) {
    return a
  }
  var c = this.root.Ra(0, Nc.c(b), b);
  return c === this.root ? a : new Xg(this.m, this.h - 1, c, this.Q, this.V, k)
};
var bg = new Xg(k, 0, k, l, k, 0), qg = function(a, b, c, d, f) {
  this.t = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.V = f;
  this.r = 56;
  this.j = 258
};
qg.Z = j;
qg.ba = function() {
  return P.c("cljs.core/TransientHashMap")
};
qg.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashMap")
};
r = qg.prototype;
r.Ea = function(a, b, c) {
  return Zg(a, b, c)
};
r.Fa = function(a, b) {
  var c;
  a: {
    if(a.t) {
      b ? (c = b.j & 2048, c = v(c ? c : b.Ob) ? j : b.j ? l : x(Qa, b)) : c = x(Qa, b);
      if(v(c)) {
        c = Zg(a, Ed.c ? Ed.c(b) : Ed.call(k, b), Fd.c ? Fd.c(b) : Fd.call(k, b));
        break a
      }
      c = G(b);
      for(var d = a;;) {
        var f = I(c);
        if(v(f)) {
          c = L(c), d = Zg(d, Ed.c ? Ed.c(f) : Ed.call(k, f), Fd.c ? Fd.c(f) : Fd.call(k, f))
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
r.Pa = function(a) {
  var b;
  a.t ? (a.t = k, b = new Xg(k, a.count, a.root, a.Q, a.V, k)) : e(Error("persistent! called twice"));
  return b
};
r.B = function(a, b) {
  return b == k ? this.Q ? this.V : k : this.root == k ? k : this.root.ra(0, Nc.c(b), b)
};
r.v = function(a, b, c) {
  return b == k ? this.Q ? this.V : c : this.root == k ? c : this.root.ra(0, Nc.c(b), b, c)
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
      a.V !== c && (a.V = c), a.Q || (a.count += 1, a.Q = j)
    }else {
      var d = new rg, b = (a.root == k ? Jg : a.root).fa(a.t, 0, Nc.c(b), b, c, d);
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
      b = c ? a.left : a.right, d = mc.b(d, a), a = b
    }else {
      return d
    }
  }
}
function ah(a, b, c, d, f) {
  this.m = a;
  this.stack = b;
  this.Ua = c;
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
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = aa();
r.G = function(a) {
  return 0 > this.h ? qc(L(a)) + 1 : this.h
};
r.Y = function() {
  return Va(this.stack)
};
r.U = function() {
  var a = I(this.stack), a = $g(this.Ua ? a.right : a.left, L(this.stack), this.Ua);
  return a != k ? new ah(k, a, this.Ua, this.h - 1, k) : K
};
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return new ah(b, this.stack, this.Ua, this.h, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(K, this.m)
};
var Z = g, $ = g;
function bh(a, b, c, d) {
  return O(Z, c) ? O(Z, c.left) ? new Z(c.key, c.k, c.left.ia(), new $(a, b, c.right, d, k), k) : O(Z, c.right) ? new Z(c.right.key, c.right.k, new $(c.key, c.k, c.left, c.right.left, k), new $(a, b, c.right.right, d, k), k) : new $(a, b, c, d, k) : new $(a, b, c, d, k)
}
function ch(a, b, c, d) {
  return O(Z, d) ? O(Z, d.right) ? new Z(d.key, d.k, new $(a, b, c, d.left, k), d.right.ia(), k) : O(Z, d.left) ? new Z(d.left.key, d.left.k, new $(a, b, c, d.left.left, k), new $(d.key, d.k, d.left.right, d.right, k), k) : new $(a, b, c, d, k) : new $(a, b, c, d, k)
}
function dh(a, b, c, d) {
  if(O(Z, c)) {
    return new Z(a, b, c.ia(), d, k)
  }
  if(O($, d)) {
    return ch(a, b, c, d.Sa())
  }
  var f = O(Z, d);
  if(v(f ? O($, d.left) : f)) {
    return new Z(d.left.key, d.left.k, new $(a, b, c, d.left.left, k), ch(d.key, d.k, d.left.right, d.right.Sa()), k)
  }
  e(Error("red-black tree invariant violation"))
}
$ = function(a, b, c, d, f) {
  this.key = a;
  this.k = b;
  this.left = c;
  this.right = d;
  this.n = f;
  this.r = 0;
  this.j = 32402207
};
$.Z = j;
$.ba = function() {
  return P.c("cljs.core/BlackNode")
};
$.ca = function(a, b) {
  return E(b, "cljs.core/BlackNode")
};
$.prototype.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Yb(a)
};
$.prototype.B = function(a, b) {
  return a.R(a, b, k)
};
$.prototype.v = function(a, b, c) {
  return a.R(a, b, c)
};
$.prototype.W = function(a, b, c) {
  return yc.a(Y([this.key, this.k]), b, c)
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
r = $.prototype;
r.call = eh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Y([this.key, this.k, b])
};
r.Wa = n("key");
r.Xa = n("k");
r.xb = function(a) {
  return a.zb(this)
};
r.Sa = function() {
  return new Z(this.key, this.k, this.left, this.right, k)
};
r.replace = function(a, b, c, d) {
  return new $(a, b, c, d, k)
};
r.wb = function(a) {
  return a.yb(this)
};
r.yb = function(a) {
  return new $(a.key, a.k, this, a.right, k)
};
var fh = k, fh = function() {
  switch(arguments.length) {
    case 0:
      return T.c ? T.c(this) : T.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = $.prototype;
r.toString = fh;
r.zb = function(a) {
  return new $(a.key, a.k, a.left, this, k)
};
r.ia = function() {
  return this
};
r.Ba = function(a, b) {
  return Ob.b(a, b)
};
r.Ca = function(a, b, c) {
  return Ob.a(a, b, c)
};
r.N = function() {
  return P.b(this.key, this.k)
};
r.G = p(2);
r.Da = n("k");
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return Q(Y([this.key, this.k]), b)
};
r.J = p(k);
r.X = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.k : k
};
r.R = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.k : c
};
r.H = function() {
  return Lf
};
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
  return P.c("cljs.core/RedNode")
};
Z.ca = function(a, b) {
  return E(b, "cljs.core/RedNode")
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
Z.prototype.W = function(a, b, c) {
  return yc.a(Y([this.key, this.k]), b, c)
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
r = Z.prototype;
r.call = gh;
r.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
r.F = function(a, b) {
  return Y([this.key, this.k, b])
};
r.Wa = n("key");
r.Xa = n("k");
r.xb = function(a) {
  return new Z(this.key, this.k, this.left, a, k)
};
r.Sa = function() {
  e(Error("red-black tree invariant violation"))
};
r.replace = function(a, b, c, d) {
  return new Z(a, b, c, d, k)
};
r.wb = function(a) {
  return new Z(this.key, this.k, a, this.right, k)
};
r.yb = function(a) {
  return O(Z, this.left) ? new Z(this.key, this.k, this.left.ia(), new $(a.key, a.k, this.right, a.right, k), k) : O(Z, this.right) ? new Z(this.right.key, this.right.k, new $(this.key, this.k, this.left, this.right.left, k), new $(a.key, a.k, this.right.right, a.right, k), k) : new $(a.key, a.k, this, a.right, k)
};
var hh = k, hh = function() {
  switch(arguments.length) {
    case 0:
      return T.c ? T.c(this) : T.call(k, this)
  }
  e(Error("Invalid arity: " + arguments.length))
};
r = Z.prototype;
r.toString = hh;
r.zb = function(a) {
  return O(Z, this.right) ? new Z(this.key, this.k, new $(a.key, a.k, a.left, this.left, k), this.right.ia(), k) : O(Z, this.left) ? new Z(this.left.key, this.left.k, new $(a.key, a.k, a.left, this.left.left, k), new $(this.key, this.k, this.left.right, this.right, k), k) : new $(a.key, a.k, a.left, this, k)
};
r.ia = function() {
  return new $(this.key, this.k, this.left, this.right, k)
};
r.Ba = function(a, b) {
  return Ob.b(a, b)
};
r.Ca = function(a, b, c) {
  return Ob.a(a, b, c)
};
r.N = function() {
  return P.b(this.key, this.k)
};
r.G = p(2);
r.Da = n("k");
r.z = function(a, b) {
  return Jb(a, b)
};
r.L = function(a, b) {
  return Q(Y([this.key, this.k]), b)
};
r.J = p(k);
r.X = function(a, b) {
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
    return new Z(d, f, k, k, k)
  }
  var i = b.b ? b.b(d, c.key) : b.call(k, d, c.key);
  if(0 === i) {
    return h[0] = c, k
  }
  if(0 > i) {
    return b = ih(b, c.left, d, f, h), b != k ? c.wb(b) : k
  }
  b = ih(b, c.right, d, f, h);
  return b != k ? c.xb(b) : k
}, lh = function kh(b, c) {
  if(b == k) {
    return c
  }
  if(c == k) {
    return b
  }
  if(O(Z, b)) {
    if(O(Z, c)) {
      var d = kh(b.right, c.left);
      return O(Z, d) ? new Z(d.key, d.k, new Z(b.key, b.k, b.left, d.left, k), new Z(c.key, c.k, d.right, c.right, k), k) : new Z(b.key, b.k, b.left, new Z(c.key, c.k, d, c.right, k), k)
    }
    return new Z(b.key, b.k, b.left, kh(b.right, c), k)
  }
  if(O(Z, c)) {
    return new Z(c.key, c.k, kh(b, c.left), c.right, k)
  }
  d = kh(b.right, c.left);
  return O(Z, d) ? new Z(d.key, d.k, new $(b.key, b.k, b.left, d.left, k), new $(c.key, c.k, d.right, c.right, k), k) : dh(b.key, b.k, b.left, new $(c.key, c.k, d, c.right, k))
}, nh = function mh(b, c, d, f) {
  if(c != k) {
    var h = b.b ? b.b(d, c.key) : b.call(k, d, c.key);
    if(0 === h) {
      return f[0] = c, lh(c.left, c.right)
    }
    if(0 > h) {
      var b = mh(b, c.left, d, f), i = b != k;
      return v(i ? i : f[0] != k) ? O($, c.left) ? dh(c.key, c.k, b, c.right) : new Z(c.key, c.k, b, c.right, k) : k
    }
    b = mh(b, c.right, d, f);
    d = b != k;
    v(d ? d : f[0] != k) ? O($, c.right) ? (f = c.key, d = c.k, c = c.left, O(Z, b) ? i = new Z(f, d, c, b.ia(), k) : O($, c) ? i = bh(f, d, c.Sa(), b) : (h = O(Z, c), v(h ? O($, c.right) : h) ? i = new Z(c.right.key, c.right.k, bh(c.key, c.k, c.left.Sa(), c.right.left), new $(f, d, c.right.right, b, k), k) : e(Error("red-black tree invariant violation")))) : i = new Z(c.key, c.k, c.left, b, k) : i = k;
    return i
  }
  return k
}, ph = function oh(b, c, d, f) {
  var h = c.key, i = b.b ? b.b(d, h) : b.call(k, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.k, oh(b, c.left, d, f), c.right) : c.replace(h, c.k, c.left, oh(b, c.right, d, f))
}, Ed = g;
function qh(a, b, c, d, f) {
  this.da = a;
  this.za = b;
  this.h = c;
  this.m = d;
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
r.W = function(a, b, c) {
  var d = [k], f = jh(this.da, this.za, b, c, d);
  return f == k ? (d = U.b(d, 0), Db.b(c, d.k) ? a : new qh(this.da, ph(this.da, this.za, b, c), this.h, this.m, k)) : new qh(this.da, f.ia(), this.h + 1, this.m, k)
};
r.Na = function(a, b) {
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
  return Uc(b) ? a.W(a, A.b(b, 0), A.b(b, 1)) : na.a(ya, a, b)
};
r.Ya = function() {
  return 0 < this.h ? new ah(k, $g(this.za, k, l), l, this.h, k) : k
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
function rh(a, b) {
  for(var c = a.za;;) {
    if(c != k) {
      var d = a.da.b ? a.da.b(b, c.key) : a.da.call(k, b, c.key);
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
  return 0 < this.h ? new ah(k, $g(this.za, k, j), j, this.h, k) : k
};
r.G = n("h");
r.z = function(a, b) {
  return Yf(a, b)
};
r.L = function(a, b) {
  return new qh(this.da, this.za, this.h, b, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(th, this.m)
};
r.Oa = function(a, b) {
  var c = [k], d = nh(this.da, this.za, b, c);
  return d == k ? U.b(c, 0) == k ? a : new qh(this.da, k, 0, this.m, k) : new qh(this.da, d.ia(), this.h - 1, this.m, k)
};
var th = new qh(ad, k, 0, k, 0);
function uh(a) {
  for(var b = G(a), c = tb(bg);;) {
    if(b) {
      var a = L(L(b)), d = I(b), b = I(L(b)), c = wb(c, d, b), b = a
    }else {
      return vb(c)
    }
  }
}
function vh(a) {
  var b = k;
  t(a) && (b = N(Array.prototype.slice.call(arguments, 0), 0));
  return uh.call(this, b)
}
vh.o = 0;
vh.l = function(a) {
  a = G(a);
  return uh(a)
};
vh.g = uh;
Ib = vh;
function wh(a) {
  for(var a = G(a), b = th;;) {
    if(a) {
      var c = L(L(a)), b = yc.a(b, I(a), I(L(a))), a = c
    }else {
      return b
    }
  }
}
function xh(a) {
  var b = k;
  t(a) && (b = N(Array.prototype.slice.call(arguments, 0), 0));
  return wh.call(this, b)
}
xh.o = 0;
xh.l = function(a) {
  a = G(a);
  return wh(a)
};
xh.g = wh;
var Ed = function(a) {
  return Ra(a)
}, Fd = function(a) {
  return Sa(a)
}, yh = g;
function zh(a, b, c) {
  this.m = a;
  this.Ka = b;
  this.n = c;
  this.r = 4;
  this.j = 15077647
}
zh.prototype.Aa = function() {
  return new yh(tb(this.Ka))
};
zh.prototype.I = function(a) {
  var b = this.n;
  return b != k ? b : this.n = a = Hd(a)
};
zh.prototype.B = function(a, b) {
  return a.v(a, b, k)
};
zh.prototype.v = function(a, b, c) {
  return v(Ma(this.Ka, b)) ? b : c
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
  return new zh(this.m, yc.a(this.Ka, b, k), k)
};
r.toString = function() {
  return T.c ? T.c(this) : T.call(k, this)
};
r.N = function() {
  return G(Dd.b(I, this.Ka))
};
r.Gb = function(a, b) {
  return new zh(this.m, Cc.b(this.Ka, b), k)
};
r.G = function(a) {
  return qc(G(a))
};
r.z = function(a, b) {
  var c = Sc(b);
  return c ? (c = qc(a) === qc(b)) ? Le(function(b) {
    return D.a(a, b, Xc) === Xc ? l : j
  }, b) : c : c
};
r.L = function(a, b) {
  return new zh(b, this.Ka, this.n)
};
r.J = n("m");
r.H = function() {
  return Q(Bh, this.m)
};
var Bh = new zh(k, Ib(), 0), yh = function(a) {
  this.ya = a;
  this.j = 259;
  this.r = 136
};
yh.Z = j;
yh.ba = function() {
  return P.c("cljs.core/TransientHashSet")
};
yh.ca = function(a, b) {
  return E(b, "cljs.core/TransientHashSet")
};
var Ch = k, Ch = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return D.a(this.ya, b, Xc) === Xc ? k : b;
    case 3:
      return D.a(this.ya, b, Xc) === Xc ? c : b
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
  return D.a(this.ya, b, Xc) === Xc ? c : b
};
r.G = function() {
  return qc(this.ya)
};
r.Fa = function(a, b) {
  this.ya = wb(this.ya, b, k);
  return a
};
r.Pa = function() {
  return new zh(k, vb(this.ya), k)
};
xh();
Id = function(a) {
  var b = ba(a);
  b && (b = "\ufdd0" === a.charAt(0), b = ia(b ? b : "\ufdd1" === a.charAt(0)));
  if(b) {
    return a
  }
  b = Zc(a);
  if(v(b ? b : $c(a))) {
    return b = a.lastIndexOf("/", a.length - 2), 0 > b ? Bd.b(a, 2) : Bd.b(a, b + 1)
  }
  e(Error([V("Doesn't support name: "), V(a)].join("")))
};
function Dh(a) {
  var b = Zc(a);
  if(v(b ? b : $c(a))) {
    return b = a.lastIndexOf("/", a.length - 2), -1 < b ? Bd.a(a, 2, b) : k
  }
  e(Error([V("Doesn't support namespace: "), V(a)].join("")))
}
var Fh = function Eh(b, c) {
  return new X(k, l, function() {
    var d = G(c);
    return d ? v(b.c ? b.c(I(d)) : b.call(k, I(d))) ? S(I(d), Eh(b, J(d))) : k : k
  }, k)
}, Gh, Hh = k;
function Ih(a, b) {
  return new X(k, l, function() {
    var c = G(b);
    return c ? Hh.a(a, I(c), J(c)) : P.c(a.A ? a.A() : a.call(k))
  }, k)
}
function Jh(a, b, c) {
  return S(b, new X(k, l, function() {
    var d = G(c);
    return d ? Hh.a(a, a.b ? a.b(b, I(d)) : a.call(k, b, I(d)), J(d)) : k
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
Hh.b = Ih;
Hh.a = Jh;
Gh = Hh;
var Kh, Lh = k;
function Mh(a) {
  for(;;) {
    if(G(a)) {
      a = L(a)
    }else {
      return k
    }
  }
}
function Nh(a, b) {
  for(;;) {
    var c = G(b);
    if(v(c ? 0 < a : c)) {
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
Lh.c = Mh;
Lh.b = Nh;
Kh = Lh;
var Oh, Ph = k;
function Qh(a) {
  Kh.c(a);
  return a
}
function Rh(a, b) {
  Kh.b(a, b);
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
Ph.c = Qh;
Ph.b = Rh;
Oh = Ph;
Ff = function(a, b, c, d, f, h) {
  return le.g(Y([b]), hf(gf(Y([c]), Dd.b(function(b) {
    return a.b ? a.b(b, f) : a.call(k, b, f)
  }, h))), N([Y([d])], 0))
};
Gf = function(a, b, c, d, f, h, i) {
  E(a, c);
  G(i) && (b.a ? b.a(I(i), a, h) : b.call(k, I(i), a, h));
  for(c = G(L(i));;) {
    if(c) {
      i = I(c), E(a, d), b.a ? b.a(i, a, h) : b.call(k, i, a, h), c = L(c)
    }else {
      break
    }
  }
  return E(a, f)
};
function Sh(a, b) {
  for(var c = G(b);;) {
    if(c) {
      var d = I(c);
      E(a, d);
      c = L(c)
    }else {
      return k
    }
  }
}
function Th(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return Sh.call(this, a, c)
}
Th.o = 1;
Th.l = function(a) {
  var b = I(a), a = J(a);
  return Sh(b, a)
};
Th.g = Sh;
function Uh(a) {
  this.Rb = a;
  this.r = 0;
  this.j = 1073741824
}
Uh.prototype.Ib = function(a, b) {
  return this.Rb.append(b)
};
Uh.prototype.Qb = p(k);
var Wh = function Vh(b, c) {
  return b == k ? P.c("nil") : g === b ? P.c("#<undefined>") : le.b(v(function() {
    var d = D.a(c, "\ufdd0:meta", k);
    return v(d) ? (b ? (d = b.j & 131072, d = v(d ? d : b.Fb) ? j : b.j ? l : x(Ya, b)) : d = x(Ya, b), v(d) ? Gc(b) : d) : d
  }()) ? le.g(Y(["^"]), Vh(Gc(b), c), N([Y([" "])], 0)) : k, v(function() {
    var c = b != k;
    return c ? b.Z : c
  }()) ? b.ba(b) : v(b ? v(function() {
    var c = b.j & 536870912;
    return c ? c : b.K
  }()) ? j : b.j ? l : x(lb, b) : x(lb, b)) ? mb(b, c) : v(b instanceof RegExp) ? P.a('#"', b.source, '"') : P.a("#<", "" + V(b), ">"))
}, Hf = function Xh(b, c, d) {
  if(b == k) {
    return E(c, "nil")
  }
  if(g === b) {
    return E(c, "#<undefined>")
  }
  var f;
  f = D.a(d, "\ufdd0:meta", k);
  v(f) && (b ? (f = b.j & 131072, f = v(f ? f : b.Fb) ? j : b.j ? l : x(Ya, b)) : f = x(Ya, b), f = v(f) ? Gc(b) : f);
  v(f) && (E(c, "^"), Xh(Gc(b), c, d), E(c, " "));
  f = b != k;
  v(f ? b.Z : f) ? b = b.ca(b, c, d) : (b ? (f = b.j & 2147483648, f = v(f ? f : b.M) ? j : b.j ? l : x(pb, b)) : f = x(pb, b), v(f) ? b = qb(b, c, d) : (b ? (f = b.j & 536870912, f = v(f ? f : b.K) ? j : b.j ? l : x(lb, b)) : f = x(lb, b), b = v(f) ? ma.a(Th, c, mb(b, d)) : v(b instanceof RegExp) ? Th.g(c, N(['#"', b.source, '"'], 0)) : Th.g(c, N(["#<", "" + V(b), ">"], 0))));
  return b
};
function Yh(a) {
  var b = hg(["\ufdd0:flush-on-newline", "\ufdd0:readably", "\ufdd0:meta", "\ufdd0:dup"], {"\ufdd0:flush-on-newline":j, "\ufdd0:readably":j, "\ufdd0:meta":l, "\ufdd0:dup":l});
  if(Rc(a)) {
    b = ""
  }else {
    var c = new ga, d = new Uh(c);
    a: {
      Hf(I(a), d, b);
      for(a = G(L(a));;) {
        if(a) {
          var f = I(a);
          E(d, " ");
          Hf(f, d, b);
          a = L(a)
        }else {
          break a
        }
      }
    }
    nb(d);
    b = "" + V(c)
  }
  return b
}
function Zh(a) {
  var b = k;
  t(a) && (b = N(Array.prototype.slice.call(arguments, 0), 0));
  return Yh(b)
}
Zh.o = 0;
Zh.l = function(a) {
  a = G(a);
  return Yh(a)
};
Zh.g = function(a) {
  return Yh(a)
};
var T = Zh, $h = hg('"\\\b\f\n\r\t'.split(""), {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"});
function ai(a) {
  return[V('"'), V(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return D.a($h, a, k)
  })), V('"')].join("")
}
lb.number = j;
mb.number = function(a) {
  return P.c("" + V(a))
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
X.prototype.K = j;
X.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Zb.prototype.K = j;
Zb.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
lb["boolean"] = j;
mb["boolean"] = function(a) {
  return P.c("" + V(a))
};
lb.string = j;
mb.string = function(a, b) {
  return Zc(a) ? P.c([V(":"), V(function() {
    var b = Dh(a);
    return v(b) ? [V(b), V("/")].join("") : k
  }()), V(Id(a))].join("")) : $c(a) ? P.c([V(function() {
    var b = Dh(a);
    return v(b) ? [V(b), V("/")].join("") : k
  }()), V(Id(a))].join("")) : P.c(v((new Wd("\ufdd0:readably")).call(k, b)) ? ai(a) : a)
};
Pg.prototype.K = j;
Pg.prototype.D = function(a, b) {
  return Ff(Wh, "(", " ", ")", b, a)
};
Z.prototype.K = j;
Z.prototype.D = function(a, b) {
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
mb.array = function(a, b) {
  return Ff(Wh, "#<Array [", ", ", "]>", b, a)
};
lb["function"] = j;
mb["function"] = function(a) {
  return P.a("#<", "" + V(a), ">")
};
Kd.prototype.K = j;
Kd.prototype.D = function() {
  return P.c("()")
};
$.prototype.K = j;
$.prototype.D = function(a, b) {
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
  return P.c([V('#inst "'), V(a.getUTCFullYear()), V("-"), V(b(a.getUTCMonth() + 1, 2)), V("-"), V(b(a.getUTCDate(), 2)), V("T"), V(b(a.getUTCHours(), 2)), V(":"), V(b(a.getUTCMinutes(), 2)), V(":"), V(b(a.getUTCSeconds(), 2)), V("."), V(b(a.getUTCMilliseconds(), 3)), V("-"), V('00:00"')].join(""))
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
X.prototype.M = j;
X.prototype.C = function(a, b, c) {
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
  return Zc(a) ? (E(b, ":"), c = Dh(a), v(c) && Th.g(b, N(["" + V(c), "/"], 0)), E(b, Id(a))) : $c(a) ? (c = Dh(a), v(c) && Th.g(b, N(["" + V(c), "/"], 0)), E(b, Id(a))) : v((new Wd("\ufdd0:readably")).call(k, c)) ? E(b, ai(a)) : E(b, a)
};
Pg.prototype.M = j;
Pg.prototype.C = function(a, b, c) {
  return Gf(b, Hf, "(", " ", ")", c, a)
};
Z.prototype.M = j;
Z.prototype.C = function(a, b, c) {
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
  return Th.g(b, N(["#<", "" + V(a), ">"], 0))
};
Kd.prototype.M = j;
Kd.prototype.C = function(a, b) {
  return E(b, "()")
};
$.prototype.M = j;
$.prototype.C = function(a, b, c) {
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
  return Th.g(b, N(['#inst "', "" + V(a.getUTCFullYear()), "-", c(a.getUTCMonth() + 1, 2), "-", c(a.getUTCDate(), 2), "T", c(a.getUTCHours(), 2), ":", c(a.getUTCMinutes(), 2), ":", c(a.getUTCSeconds(), 2), ".", c(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
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
Jf.prototype.Nb = j;
Jf.prototype.Db = function(a, b) {
  return bd.b(a, b)
};
function bi(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Sb = c;
  this.Tb = d;
  this.j = 2690809856;
  this.r = 2
}
r = bi.prototype;
r.I = function(a) {
  return a[ca] || (a[ca] = ++da)
};
r.Hb = function(a, b, c) {
  for(var d = G(this.Tb);;) {
    if(d) {
      var f = I(d), h = U.a(f, 0, k), f = U.a(f, 1, k);
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
  return le.g(Y(["#<Atom: "]), mb(this.state, b), N([">"], 0))
};
r.J = n("m");
r.cb = n("state");
r.z = function(a, b) {
  return a === b
};
var ci = k;
function di(a) {
  return new bi(a, k, k, k)
}
function ei(a, b) {
  var c = Yc(b) ? ma.b(Ib, b) : b, d = D.a(c, "\ufdd0:validator", k), c = D.a(c, "\ufdd0:meta", k);
  return new bi(a, c, d, k)
}
function fi(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return ei.call(this, a, c)
}
fi.o = 1;
fi.l = function(a) {
  var b = I(a), a = J(a);
  return ei(b, a)
};
fi.g = ei;
ci = function(a, b) {
  switch(arguments.length) {
    case 1:
      return di.call(this, a);
    default:
      return fi.g(a, N(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
ci.o = 1;
ci.l = fi.l;
ci.c = di;
ci.g = fi.g;
var wg = ci, ug = function(a, b) {
  var c = a.Sb;
  v(c) && !v(c.c ? c.c(b) : c.call(k, b)) && e(Error([V("Assert failed: "), V("Validator rejected reference state"), V("\n"), V(T.g(N([Q(P("\ufdd1'validate", "\ufdd1'new-value"), Ib("\ufdd0:line", 6752, "\ufdd0:column", 13))], 0)))].join("")));
  c = a.state;
  a.state = b;
  rb(a, c, b);
  return b
}, gi, hi = k;
function ii(a, b) {
  return ug(a, b.c ? b.c(a.state) : b.call(k, a.state))
}
function ji(a, b, c) {
  return ug(a, b.b ? b.b(a.state, c) : b.call(k, a.state, c))
}
function ki(a, b, c, d) {
  return ug(a, b.a ? b.a(a.state, c, d) : b.call(k, a.state, c, d))
}
function li(a, b, c, d, f) {
  return ug(a, b.q ? b.q(a.state, c, d, f) : b.call(k, a.state, c, d, f))
}
function mi(a, b, c, d, f, h) {
  return ug(a, ma.g(b, a.state, c, d, f, N([h], 0)))
}
function ni(a, b, c, d, f, h) {
  var i = k;
  t(h) && (i = N(Array.prototype.slice.call(arguments, 5), 0));
  return mi.call(this, a, b, c, d, f, i)
}
ni.o = 5;
ni.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), f = I(L(L(L(a)))), h = I(L(L(L(L(a))))), a = J(L(L(L(L(a)))));
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
      return ni.g(a, b, c, d, f, N(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
hi.o = 5;
hi.l = ni.l;
hi.b = ii;
hi.a = ji;
hi.q = ki;
hi.T = li;
hi.g = ni.g;
gi = hi;
R = function(a) {
  return Xa(a)
};
wg.c(hg(["\ufdd0:parents", "\ufdd0:descendants", "\ufdd0:ancestors"], {"\ufdd0:parents":gg, "\ufdd0:descendants":gg, "\ufdd0:ancestors":gg}));
function oi(a, b) {
  var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), h = U.a(b, 1, k);
  return[c - f, d - h]
}
function pi(a, b) {
  var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), h = U.a(b, 1, k);
  return[c + f, d + h]
}
function qi(a, b) {
  var c = U.a(b, 0, k), d = U.a(b, 1, k);
  return[a * c, a * d]
}
function ri(a, b) {
  var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), h = U.a(b, 1, k);
  return c * f + d * h
}
function si(a) {
  var b = U.a(a, 0, k), a = U.a(a, 1, k);
  return Math.sqrt(b * b + a * a)
}
function ti(a, b) {
  var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), h = U.a(b, 1, k);
  return(c = Db.b(c, f)) ? Db.b(d, h) : c
}
;var ui = Math.floor;
function vi(a, b) {
  return ui.c ? ui.c(a / b) : ui.call(k, a / b)
}
function wi(a, b, c) {
  for(var d = qc(c), f = 0, h = k, i = k;;) {
    if(f < d) {
      var m = c[f], q, w = a, y = b, F = m;
      q = U.a(y, 0, k);
      var y = U.a(y, 1, k), H = U.a(F, 0, k), F = U.a(F, 1, k), M = oi(F, H), F = U.a(M, 0, k), M = U.a(M, 1, k), H = oi(H, w), w = U.a(H, 0, k), H = U.a(H, 1, k), W = y * F - q * M, F = (F * H - M * w) / W;
      q = (q * H - y * w) / W;
      y = 0 <= q;
      q = v(y ? 1 >= q : y) ? F : -1;
      if(y = 0 <= q) {
        y = (y = ia(h)) ? y : q < h
      }
      v(y) && (h = q, i = m);
      f += 1
    }else {
      return a = h, v(a) && (a = h, d = i, c = U.a(d, 0, k), b = U.a(c, 0, k), c = U.a(c, 1, k), d = U.a(d, 1, k), f = U.a(d, 0, k), b = [U.a(d, 1, k) - c, b - f], a = [a, b]), a
    }
  }
}
;var xi = function() {
  var a = window.requestAnimationFrame;
  if(v(a)) {
    return a
  }
  a = window.mozRequestAnimationFrame;
  if(v(a)) {
    return a
  }
  a = window.webkitRequestAnimationFrame;
  if(v(a)) {
    return a
  }
  a = window.oRequestAnimationFrame;
  return v(a) ? a : window.msRequestAnimationFrame
}();
wg.c(gg);
function yi(a, b) {
  var c = U.a(b, 0, k), d = U.a(c, 0, k), c = U.a(c, 1, k);
  rd(b, 1);
  a.beginPath();
  a.moveTo(d, c);
  for(d = G(b);;) {
    if(d) {
      var f = I(d), c = U.a(f, 0, k), f = U.a(f, 1, k);
      a.lineTo(c, f);
      d = L(d)
    }else {
      return k
    }
  }
}
function zi(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return yi.call(this, a, c)
}
zi.o = 1;
zi.l = function(a) {
  var b = I(a), a = J(a);
  return yi(b, a)
};
zi.g = yi;
function Ai(a, b) {
  ma.a(zi, a, b);
  return a.stroke()
}
function Bi(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return Ai.call(this, a, c)
}
Bi.o = 1;
Bi.l = function(a) {
  var b = I(a), a = J(a);
  return Ai(b, a)
};
Bi.g = Ai;
function Ci(a, b, c) {
  var d = U.a(b, 0, k), b = U.a(b, 1, k);
  a.beginPath();
  a.arc(d, b, c, 0, 2 * Math.PI);
  return a.stroke()
}
function Di(a) {
  var b = a.canvas;
  return a.clearRect(0, 0, b.width, b.height)
}
function Ei(a) {
  return Dd.a(ja, a, J(a))
}
function Fi(a, b) {
  return function d(a) {
    return new X(k, l, function() {
      for(;;) {
        var h = G(a);
        if(h) {
          var i = I(h), h = U.a(i, 0, k), m = U.a(i, 1, k), i = S, q = oi(m, h), w = U.a(q, 0, k), q = U.a(q, 1, k), w = Y([-q, w]), w = qi(b / si(w), w), h = Y([pi(h, w), pi(m, w)]);
          return i(h, d(J(a)))
        }
        return k
      }
    }, k)
  }(Ei(a))
}
function Gi(a) {
  a = le.b(a, Y([I(a)]));
  a = function c(a) {
    return new X(k, l, function() {
      for(;;) {
        var f = G(a);
        if(f) {
          var f = I(f), h = U.a(f, 0, k), i = U.a(f, 1, k), f = U.a(i, 0, k), m = U.a(i, 1, k), i = S, q = Y([f, m]), w = U.a(q, 0, k), q = U.a(q, 1, k), y = U.a(h, 0, k), F = U.a(h, 1, k), q = oi(q, w), h = U.a(q, 0, k), q = U.a(q, 1, k), H = oi(F, y), F = U.a(H, 0, k), H = U.a(H, 1, k), y = oi(y, w), w = U.a(y, 0, k), y = U.a(y, 1, k), M = -1 * h * H - -1 * q * F, h = Y([(-1 * H * w + F * y) / M, (-1 * q * w + h * y) / M]), h = I(h), m = oi(m, f), f = pi(f, qi(h, m));
          return i(f, c(J(a)))
        }
        return k
      }
    }, k)
  }(Dd.a(ja, a, J(a)));
  return le.b(a, Y([I(a)]))
}
;var Hi, Ii = k;
function Ji(a) {
  return ma.b(V, a)
}
function Ki(a, b) {
  return ma.b(V, gf(a, b))
}
Ii = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Ji.call(this, a);
    case 2:
      return Ki.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ii.c = Ji;
Ii.b = Ki;
Hi = Ii;
var Li, Mi = k;
function Ni(a, b) {
  var c = Oi(a), d;
  d = Id(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  if(G(d)) {
    var f = c.classList;
    if(v(f)) {
      for(d = G(d.split(/\s+/));;) {
        if(d) {
          var h = I(d);
          f.add(h);
          d = L(d)
        }else {
          break
        }
      }
    }else {
      f = c.className;
      for(d = G(d.split(/\s+/));;) {
        if(d) {
          var h = I(d), i;
          a: {
            for(i = 0;;) {
              if(i = f.indexOf(h, i), 0 <= i) {
                var m;
                m = g;
                m = (m = 0 === i) ? m : " " === f.charAt(i - 1);
                if(v(m)) {
                  var q = f.length;
                  m = i + h.length;
                  m = m <= q ? (q = m === q) ? q : " " === f.charAt(m) : k
                }
                if(m) {
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
          v(i) || (c.className = "" === f ? h : [V(f), V(" "), V(h)].join(""));
          d = L(d)
        }else {
          break
        }
      }
    }
  }
  return c
}
function Pi(a, b, c) {
  a = Oi(a);
  for(b = G(mc.b(c, b));;) {
    if(b) {
      c = I(b), Mi.b(a, c), b = L(b)
    }else {
      break
    }
  }
  return a
}
function Qi(a, b, c) {
  var d = k;
  t(c) && (d = N(Array.prototype.slice.call(arguments, 2), 0));
  return Pi.call(this, a, b, d)
}
Qi.o = 2;
Qi.l = function(a) {
  var b = I(a), c = I(L(a)), a = J(L(a));
  return Pi(b, c, a)
};
Qi.g = Pi;
Mi = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ni.call(this, a, b);
    default:
      return Qi.g(a, b, N(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Mi.o = 2;
Mi.l = Qi.l;
Mi.b = Ni;
Mi.g = Qi.g;
Li = Mi;
function Ri(a, b) {
  Me(qc(b)) || e(Error([V("Assert failed: "), V(T.g(N([Q(P("\ufdd1'even?", Q(P("\ufdd1'count", "\ufdd1'kvs"), Ib("\ufdd0:line", 118, "\ufdd0:column", 18))), Ib("\ufdd0:line", 118, "\ufdd0:column", 11))], 0)))].join("")));
  for(var c = Oi(a), d = c.style, f = G(pf.b(2, b));;) {
    if(f) {
      var h = I(f), i = U.a(h, 0, k), h = U.a(h, 1, k);
      d[Id(i)] = h;
      f = L(f)
    }else {
      break
    }
  }
  return c
}
function Si(a, b) {
  var c = k;
  t(b) && (c = N(Array.prototype.slice.call(arguments, 1), 0));
  return Ri.call(this, a, c)
}
Si.o = 1;
Si.l = function(a) {
  var b = I(a), a = J(a);
  return Ri(b, a)
};
Si.g = Ri;
var Ti, Ui = k;
function Vi(a, b) {
  return Ui.a(Oi(a), b, "true")
}
function Wi(a, b, c) {
  if(v(c)) {
    var d = "function" == s(c);
    if(d ? d : c ? v(v(k) ? k : c.Ab) || (c.sb ? 0 : x(ta, c)) : x(ta, c)) {
      return a = Oi(a), a[Id(b)] = c, a
    }
    a = Oi(a);
    a.setAttribute(Id(b), "\ufdd0:style" === b ? Hi.b(" ", Dd.b(function(a) {
      var b = U.a(a, 0, k), a = U.a(a, 1, k);
      return[V(Id(b)), V(":"), V(Id(a)), V(";")].join("")
    }, c)) : c);
    return a
  }
  return k
}
function Xi(a, b, c, d) {
  Me(qc(d)) || e(Error([V("Assert failed: "), V(T.g(N([Q(P("\ufdd1'even?", Q(P("\ufdd1'count", "\ufdd1'kvs"), Ib("\ufdd0:line", 164, "\ufdd0:column", 19))), Ib("\ufdd0:line", 164, "\ufdd0:column", 12))], 0)))].join("")));
  a = Oi(a);
  for(b = G(S(Y([b, c]), pf.b(2, d)));;) {
    if(b) {
      d = I(b), c = U.a(d, 0, k), d = U.a(d, 1, k), Ui.a(a, c, d), b = L(b)
    }else {
      break
    }
  }
  return a
}
function Yi(a, b, c, d) {
  var f = k;
  t(d) && (f = N(Array.prototype.slice.call(arguments, 3), 0));
  return Xi.call(this, a, b, c, f)
}
Yi.o = 3;
Yi.l = function(a) {
  var b = I(a), c = I(L(a)), d = I(L(L(a))), a = J(L(L(a)));
  return Xi(b, c, d, a)
};
Yi.g = Xi;
Ui = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return Vi.call(this, a, b);
    case 3:
      return Wi.call(this, a, b, c);
    default:
      return Yi.g(a, b, c, N(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ui.o = 3;
Ui.l = Yi.l;
Ui.b = Vi;
Ui.a = Wi;
Ui.g = Yi.g;
Ti = Ui;
var $i = function Zi(b, c, d) {
  var f = U.a(b, 0, k), h = rd(b, 1), i = U.a(c, 0, k), m = rd(c, 1);
  return Rc(b) ? c : Rc(c) ? b : v(d.b ? d.b(f, i) : d.call(k, f, i)) ? S(f, Zi(h, c, d)) : S(i, Zi(b, m, d))
};
function aj(a, b) {
  var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), h = U.a(b, 1, k);
  return 0 < c * h - d * f
}
function bj(a) {
  function b(a) {
    return Ge.b(a, d)
  }
  var c;
  a: {
    for(c = Lf;;) {
      if(L(a)) {
        c = mc.b(c, I(a)), a = L(a)
      }else {
        c = G(c);
        break a
      }
    }
    c = g
  }
  var d = na.b(function(a, b) {
    var c = U.a(a, 0, k), d = U.a(a, 1, k), f = U.a(b, 0, k), y = U.a(b, 1, k);
    return Db.b(d, y) ? c < f ? a : b : d < y ? a : b
  }, c), f = c;
  c = le.b(new X(k, l, function() {
    var a;
    a: {
      a = b;
      for(var c = f;;) {
        var c = G(c), d;
        d = (d = c) ? a.c ? a.c(I(c)) : a.call(k, I(c)) : d;
        if(v(d)) {
          c = J(c)
        }else {
          a = c;
          break a
        }
      }
      a = g
    }
    return a
  }, k), Fh(function(a) {
    return Ge.b(a, d)
  }, c));
  return le.b(c, Y([I(c)]))
}
;function cj(a, b, c) {
  var d = U.a(a, 0, k), a = U.a(a, 1, k), f = U.a(b, 0, k), b = U.a(b, 1, k);
  if(Db.b(f, 0)) {
    return[[0, 0 > b ? -1 : 1], [d, 0 > b ? c : 0]]
  }
  if(Db.b(b, 0)) {
    return[[0 > f ? -1 : 1, 0], [0 > f ? c : 0, a]]
  }
  var h = (0 > f ? -d : c - d) / f, i = (0 > b ? -a : c - a) / b;
  return Db.b(h, i) ? [[0 > f ? -1 : 1, 0 > b ? -1 : 1], [0 > f ? c : 0, 0 > b ? c : 0]] : h < i ? [[0 > f ? -1 : 1, 0], [0 > f ? c : 0, a + h * b]] : [[0, 0 > b ? -1 : 1], [d + i * f, 0 > b ? c : 0]]
}
function dj() {
  var a = ej, b = fj, c = U.a(b, 0, k);
  a: {
    for(var d = function(c) {
      var d = U.a(c, 0, k), c = U.a(c, 1, k), f = a[d];
      v(f) ? (d = f[c], v(d) ? d.push(b) : f[c] = [b]) : (f = {}, f[c] = [b], a[d] = f);
      return a
    }, f = U.a(b, 1, k), h = U.a(c, 0, k), i = U.a(c, 1, k), m = U.a(f, 0, k), q = U.a(f, 1, k), c = oi(f, c), f = [vi(h, 100), vi(i, 100)], m = [vi(m, 100), vi(q, 100)], q = f, f = 0, h = [(h % 100 + 100) % 100, (i % 100 + 100) % 100];;) {
      d.b ? d.b(q, h) : d.call(k, q);
      i = ti(q, m);
      if(v(v(i) ? i : 10 < f)) {
        break a
      }
      h = cj(h, c, 100);
      i = U.a(h, 0, k);
      h = U.a(h, 1, k);
      q = pi(i, q);
      f += 1
    }
  }
}
function gj(a, b, c, d, f) {
  var h = U.a(b, 0, k), i = U.a(b, 1, k);
  U.a(c, 0, k);
  U.a(c, 1, k);
  for(var m = pi(b, qi(d, c)), d = U.a(m, 0, k), q = U.a(m, 1, k), m = [vi(h, f), vi(i, f)], d = [vi(d, f), vi(q, f)], i = [(h % f + f) % f, (i % f + f) % f], h = 0;;) {
    var q = a, w = m, y = U.a(w, 0, k), w = U.a(w, 1, k), q = q[y];
    v(q) ? (q = q[w], q = v(q) ? q : k) : q = k;
    q = v(q) ? wi(b, c, q) : q;
    if(v(q)) {
      return q
    }
    q = (q = Db.b(h, 20)) ? q : ti(m, d);
    if(v(q)) {
      return k
    }
    q = cj(i, c, f);
    i = U.a(q, 0, k);
    q = U.a(q, 1, k);
    m = pi(i, m);
    i = q;
    h += 1
  }
}
;function hj(a, b) {
  for(var c = Yc(b) ? ma.b(Ib, b) : b, d = D.a(c, "\ufdd0:polys", k), f = D.a(c, "\ufdd0:circles", k), c = D.a(c, "\ufdd0:filled", k), c = G(c);;) {
    if(c) {
      var h = I(c);
      ma.a(zi, a, h);
      a.fill();
      a.stroke();
      c = L(c)
    }else {
      break
    }
  }
  for(d = G(d);;) {
    if(d) {
      c = I(d), ma.a(Bi, a, c), d = L(d)
    }else {
      break
    }
  }
  for(f = G(f);;) {
    if(f) {
      d = I(f), ma.a(Ci, a, d), f = L(f)
    }else {
      return k
    }
  }
}
var ij = Y([Y([-434, -24]), Y([22, -22]), Y([24, -232]), Y([-196, -402]), Y([-195, -719]), Y([547, -715]), Y([545, -536]), Y([406, -453]), Y([-16, -455]), Y([234, -272]), Y([229, -20]), Y([633, -20])]), jj = oa.c(Ei(ij)), kj = Y([Y([-50, 0]), Y([-40, -10]), Y([40, -10]), Y([50, 0]), Y([35, 30]), Y([-35, 30]), Y([-50, 0])]), lj = hg(["\ufdd0:polys", "\ufdd0:circles"], {"\ufdd0:polys":Y([kj, Gi(Fi(kj, 6))]), "\ufdd0:circles":Y([Y([Y([-32, 2]), 3]), Y([Y([32, 2]), 3]), Y([Y([-26, 17]), 3]), Y([Y([26, 
17]), 3])])}), mj, nj = Y([Y([12, -10]), Y([-18, -10]), Y([-18, 10]), Y([12, 10]), Y([12, -10])]);
mj = Gi(Fi(nj, -3));
for(var oj = [Y([12, -10]), Y([-18, -10]), Y([-18, 10]), Y([12, 10]), Y([24, 4]), Y([24, -4]), Y([12, -10])], pj = hg(["\ufdd0:polys", "\ufdd0:filled"], {"\ufdd0:polys":Y([mj]), "\ufdd0:filled":Y([oj])}), ej = {}, qj = bj(Dd.b(function(a) {
  return qi(-1, a)
}, kj)), sj = function rj(b) {
  return new X(k, l, function() {
    for(;;) {
      var c = G(b);
      if(c) {
        var c = I(c), d = U.a(c, 0, k), f = U.a(c, 1, k), c = S, h = bj(Y([d, f, d])), f = qj, d = pi(I(h), I(f)), h = Dd.a(oi, J(h), h), f = Dd.a(oi, J(f), f), f = $i(h, f, aj), d = Gh.a(pi, d, f);
        return c(d, rj(J(b)))
      }
      return k
    }
  }, k)
}(jj), tj = jf.b(Ei, sj), uj = G(tj);;) {
  if(uj) {
    var fj = I(uj);
    dj();
    uj = L(uj)
  }else {
    break
  }
}
;var vj = {};
function wj(a) {
  if(a ? a.wa : a) {
    return a.wa(a)
  }
  var b;
  var c = wj[s(a == k ? k : a)];
  c ? b = c : (c = wj._) ? b = c : e(z("PElement.-elem", a));
  return b.call(k, a)
}
function xj(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), f = Math.min(c, d);
  return 0 > f ? Math.max(c, d) : f
}
function yj(a) {
  var b = Id(a), c = xj(b, 0), a = document.createElement(0 < c ? b.substring(0, c) : 0 === c ? "div" : b);
  if(0 <= c) {
    for(b = b.substring(c);;) {
      var c = xj(b, 1), d = 0 <= c ? b.substring(0, c) : b, f = d.charAt(0);
      Db.b("#", f) ? a.setAttribute("id", d.substring(1)) : Db.b(".", f) ? Li.b(a, d.substring(1)) : e(Error([V("No matching clause: "), V(d.charAt(0))].join("")));
      if(0 <= c) {
        b = b.substring(c)
      }else {
        break
      }
    }
  }
  return a
}
var zj, Aj = k;
function Bj(a) {
  return Aj.b(document.createDocumentFragment(), a)
}
function Cj(a, b) {
  if(v(b ? v(v(k) ? k : b.qa) ? j : b.sb ? l : x(vj, b) : x(vj, b))) {
    return a.appendChild(wj(b)), a
  }
  if(Yc(b)) {
    for(var c = G(b);;) {
      if(c) {
        var d = I(c);
        Aj.b(a, d);
        c = L(c)
      }else {
        break
      }
    }
    return a
  }
  b != k && e([V("Don't know how to make node from: "), V(T.g(N([b], 0)))].join(""));
  return a
}
Aj = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Bj.call(this, a);
    case 2:
      return Cj.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Aj.c = Bj;
Aj.b = Cj;
zj = Aj;
function Oi(a) {
  return v(a ? v(v(k) ? k : a.qa) ? j : a.sb ? l : x(vj, a) : x(vj, a)) ? wj(a) : zj.c(a)
}
vj.string = j;
wj.string = function(a) {
  return Zc(a) ? yj(a) : document.createTextNode("" + V(a))
};
vj.number = j;
wj.number = function(a) {
  return document.createTextNode("" + V(a))
};
Jf.prototype.qa = j;
Jf.prototype.wa = function(a) {
  var b = U.a(a, 0, k), c = U.a(a, 1, k), a = rd(a, 2), b = yj(b), d;
  d = (d = Tc(c)) ? ia(c ? v(v(k) ? k : c.qa) ? j : c.sb ? l : x(vj, c) : x(vj, c)) : d;
  d = v(d) ? c : k;
  c = v(d) ? a : S(c, a);
  for(a = G(d);;) {
    if(a) {
      var f = I(a);
      d = U.a(f, 0, k);
      var f = U.a(f, 1, k), h = d;
      if(Db.b("\ufdd0:classes", h)) {
        for(d = G(f);;) {
          if(d) {
            f = I(d), Li.b(b, f), d = L(d)
          }else {
            break
          }
        }
      }else {
        Db.b("\ufdd0:class", h) ? Li.b(b, f) : Ti.a(b, d, f)
      }
      a = L(a)
    }else {
      break
    }
  }
  b.appendChild(Oi(c));
  return b
};
Document.prototype.qa = j;
Document.prototype.wa = aa();
Text.prototype.qa = j;
Text.prototype.wa = aa();
DocumentFragment.prototype.qa = j;
DocumentFragment.prototype.wa = aa();
HTMLElement.prototype.qa = j;
HTMLElement.prototype.wa = aa();
try {
  Window.prototype.qa = j, Window.prototype.wa = aa()
}catch(Dj) {
  O(ReferenceError, Dj) ? console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)") : e(Dj)
}
;var Ej = Si, Ej = Si;
function Fj(a, b) {
  var c = Oi(a);
  c.appendChild(Oi(b));
  return c
}
of(gg, Dd.b(function(a) {
  var b = U.a(a, 0, k), a = U.a(a, 1, k);
  return Y([b, og([a], [function(a) {
    return function(b) {
      var f = b.relatedTarget, h;
      h = b.dc;
      h = v(h) ? h : b.currentTarget;
      v(f) && (f = Oi(f), h = Oi(h), f = v(h.contains) ? h.contains(f) : v(h.compareDocumentPosition) ? 0 != (h.compareDocumentPosition(f) & 16) : k);
      return v(f) ? k : a.c ? a.c(b) : a.call(k, b)
    }
  }])])
}, hg(["\ufdd0:mouseenter", "\ufdd0:mouseleave"], {"\ufdd0:mouseenter":"\ufdd0:mouseover", "\ufdd0:mouseleave":"\ufdd0:mouseout"})));
function Gj(a) {
  if(a ? a.Mb : a) {
    return a.Mb(a)
  }
  var b;
  var c = Gj[s(a == k ? k : a)];
  c ? b = c : (c = Gj._) ? b = c : e(z("DynamicSystem.update!", a));
  return b.call(k, a)
}
function Hj(a) {
  if(a ? a.Lb : a) {
    return a.Lb()
  }
  var b;
  var c = Hj[s(a == k ? k : a)];
  c ? b = c : (c = Hj._) ? b = c : e(z("Drawable.draw", a));
  return b.call(k, a)
}
var Ij = Math.sin, Jj = Math.cos, Kj = document.createElement("canvas");
Kj.setAttribute("width", 640);
Kj.setAttribute("height", 480);
var Lj = Kj.getContext("2d"), Mj = k, Nj = og([87, 83, 65, 68], [0.5, -0.5, -0.25, 0.25]);
function Oj(a) {
  return v(R(Pj).call(k, a)) ? Nj.c ? Nj.c(a) : Nj.call(k, a) : 0
}
function Qj(a, b, c, d, f, h, i, m, q) {
  this.La = a;
  this.Za = b;
  this.target = c;
  this.x = d;
  this.y = f;
  this.oa = h;
  this.pa = i;
  this.Jb = m;
  this.Kb = q
}
Qj.prototype.Lb = function() {
  return Rj.c ? Rj.c(this.La) : Rj.call(k, this.La)
};
Qj.prototype.Mb = function(a) {
  a.oa = this.oa + Oj(65) + Oj(68) + -0.02 * this.oa;
  a.pa = this.pa + Oj(87) + Oj(83) + -0.02 * this.pa + -0.25;
  for(var b = 1, c = 0;;) {
    var d = [this.oa, this.pa], f = gj.T ? gj.T(this.Jb, [this.x, this.y], d, b, this.Kb) : gj.call(k, this.Jb, [this.x, this.y], d, b, this.Kb), h;
    h = g;
    h = f;
    h = v(h) ? f[0] < b ? f[0] : b : h;
    h = v(h) ? h : b;
    var i = f;
    b = v(i) ? (b = f[0] < b) ? f[1] : b : i;
    f = g;
    f = b;
    f = v(f) ? 0.1 * si(b) / ri(d, b) : f;
    d = h + (v(f) ? f : 0);
    a.x = this.x + this.oa * d;
    a.y = this.y + this.pa * d;
    if(v(b) && (b = 0 > ri([this.oa, this.pa], b) ? qi(ri([this.oa, this.pa], b) / ri(b, b), b) : [0, 0], h = U.a(b, 0, k), b = U.a(b, 1, k), d = 1 - d, a.oa = this.oa - 1.01 * h, a.pa = this.pa - 1.01 * b, h = Db.b(c, 0), h || (h = (h = 2 > c) ? 1E-7 < d : h), v(h))) {
      c += 1;
      b = d;
      continue
    }
    break
  }
  d = this.target;
  c = U.a(d, 0, k);
  b = U.a(d, 1, k);
  d = this.La;
  f = c * (Jj.c ? Jj.c(d) : Jj.call(k, d)) + b * (Ij.c ? Ij.c(d) : Ij.call(k, d));
  h = b * (Jj.c ? Jj.c(d) : Jj.call(k, d)) - c * (Ij.c ? Ij.c(d) : Ij.call(k, d));
  c = f / Math.sqrt(c * c + b * b);
  a.Za = this.Za + 0.05 * (3 * (d + (0 > h ? -1 : 1) * Math.acos(1 > (-1 < c ? c : -1) ? -1 < c ? c : -1 : 1) - this.La) + -1.8 * this.Za);
  return a.La = this.La + 0.05 * this.Za
};
var Sj = new Qj(0, 0, [1, 0], 0, 0, 0, 0, ej, 100);
function Rj(a) {
  var b;
  b = I(wi([Sj.x, Sj.y + 10], [Jj.c ? Jj.c(a) : Jj.call(k, a), Ij.c ? Ij.c(a) : Ij.call(k, a)], jj));
  b = v(b) ? b : 500;
  Lj.save();
  try {
    Lj.lineWidth = 0.5;
    Lj.fillStyle = "rgb(255,255,255)";
    hj.b ? hj.b(Lj, lj) : hj.call(k, Lj, lj);
    Lj.save();
    try {
      return Lj.translate(0, 10), Lj.rotate(a), Bi.a ? Bi.a(Lj, Y([24, 0]), Y([b, 0])) : Bi.call(k, Lj, Y([24, 0]), Y([b, 0])), hj.b ? hj.b(Lj, pj) : hj.call(k, Lj, pj)
    }finally {
      Lj.restore()
    }
  }finally {
    Lj.restore()
  }
}
var Pj = wg.c(Bh);
function Tj() {
  return document.getElementById("status").value = T.g(N([R(Pj)], 0))
}
var Vj = function Uj() {
  if(ia(k)) {
    Gj(Sj);
    Di.c ? Di.c(Lj) : Di.call(k, Lj);
    Lj.save();
    try {
      Lj.translate(Kj.width / 2, Kj.height / 2);
      Lj.scale(1, -1);
      Lj.save();
      try {
        Lj.translate(-Sj.x, -Sj.y), ma.a(Bi, Lj, ij)
      }finally {
        Lj.restore()
      }
      Hj(Sj)
    }finally {
      Lj.restore()
    }
    return xi.c ? xi.c(Uj) : xi.call(k, Uj)
  }
  return k
};
window.onkeydown = function(a) {
  gi.a(Pj, mc, a.which);
  return Tj()
};
window.onkeyup = function(a) {
  gi.a(Pj, Hc, a.which);
  return Tj()
};
window.onload = function() {
  Ej.a ? Ej.a(Kj, "\ufdd0:border", "1px solid #000") : Ej.call(k, Kj, "\ufdd0:border", "1px solid #000");
  var a = Fj(document.body, Kj), b = document.createElement("div");
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
  Fj(a, b);
  a: {
    for(var c = Kj, a = Kj.offsetLeft, b = Kj.offsetTop;;) {
      if(c = c.offsetParent, v(c)) {
        a += c.offsetLeft, b += c.offsetTop
      }else {
        a = [a, b];
        break a
      }
    }
    a = g
  }
  var d = U.a(a, 0, k), f = U.a(a, 1, k);
  Mj = function(a) {
    return Sj.target = [a.pageX - d - Kj.width / 2, -10 - (a.pageY - f - Kj.height / 2)]
  };
  return Vj()
};
Kj.onmouseover = function() {
  return window.onmousemove = Mj
};
Kj.onmouseout = function() {
  return window.onmousemove = k
};
