if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}


;(function(){
var h, ca = this;
function da(a, b) {
  var c = a.split("."), d = ca;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ka(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ma(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ma.prototype;
h.Aa = "";
h.set = function(a) {
  this.Aa = "" + a;
};
h.append = function(a, b, c) {
  this.Aa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Aa += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.Aa = "";
};
h.toString = function() {
  return this.Aa;
};
if ("undefined" === typeof oa) {
  var oa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var pa = null;
if ("undefined" === typeof ra) {
  var ra = null
}
function ta() {
  return new n(null, 5, [ua, !0, va, !0, xa, !1, ya, !1, za, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function Aa(a) {
  return a instanceof Array;
}
function Ca(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function z(a, b) {
  var c = null == b ? null : b.constructor, c = w(w(c) ? c.Kb : c) ? c.Jb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Jb;
  return w(b) ? b : "" + A(a);
}
var Ea = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function Ga(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ha = {}, Ia = {}, Ka = function Ka(b) {
  if (b ? b.P : b) {
    return b.P(b);
  }
  var c;
  c = Ka[m(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, La = function La(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = La[m(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.I : b) {
    return b.I(b, c);
  }
  var d;
  d = Ma[m(null == b ? null : b)];
  if (!d && (d = Ma._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, B = function B() {
  switch(arguments.length) {
    case 2:
      return B.c(arguments[0], arguments[1]);
    case 3:
      return B.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
B.c = function(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = B[m(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw z("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
B.g = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = B[m(null == a ? null : a)];
  if (!d && (d = B._, !d)) {
    throw z("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
B.u = 3;
var Oa = {}, Qa = function Qa(b) {
  if (b ? b.fa : b) {
    return b.fa(b);
  }
  var c;
  c = Qa[m(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, Ra = function Ra(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = Ra[m(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Sa = {}, Ta = {}, Ua = function Ua() {
  switch(arguments.length) {
    case 2:
      return Ua.c(arguments[0], arguments[1]);
    case 3:
      return Ua.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Ua.c = function(a, b) {
  if (a ? a.da : a) {
    return a.da(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ua.g = function(a, b, c) {
  if (a ? a.G : a) {
    return a.G(a, b, c);
  }
  var d;
  d = Ua[m(null == a ? null : a)];
  if (!d && (d = Ua._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ua.u = 3;
var Va = function Va(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = Va[m(null == b ? null : b)];
  if (!e && (e = Va._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Wa = {}, Xa = function Xa(b, c) {
  if (b ? b.nb : b) {
    return b.nb(b, c);
  }
  var d;
  d = Xa[m(null == b ? null : b)];
  if (!d && (d = Xa._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Ya = {}, Za = function Za(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = Za[m(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ab = function ab(b) {
  if (b ? b.ab : b) {
    return b.ab(b);
  }
  var c;
  c = ab[m(null == b ? null : b)];
  if (!c && (c = ab._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, bb = function bb(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = bb[m(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, cb = function cb(b) {
  if (b ? b.Ha : b) {
    return b.Ha(b);
  }
  var c;
  c = cb[m(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, db = {}, eb = function eb(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = eb[m(null == b ? null : b)];
  if (!e && (e = eb._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, fb = function fb(b) {
  if (b ? b.vb : b) {
    return b.state;
  }
  var c;
  c = fb[m(null == b ? null : b)];
  if (!c && (c = fb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, gb = {}, hb = function hb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = hb[m(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, jb = {}, kb = function kb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = kb[m(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, lb = {}, mb = function mb() {
  switch(arguments.length) {
    case 2:
      return mb.c(arguments[0], arguments[1]);
    case 3:
      return mb.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
mb.c = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
mb.g = function(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = mb[m(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
mb.u = 3;
var nb = function nb(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = nb[m(null == b ? null : b)];
  if (!d && (d = nb._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, ob = function ob(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = ob[m(null == b ? null : b)];
  if (!c && (c = ob._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, pb = {}, qb = function qb(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = qb[m(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, rb = {}, sb = function sb(b, c) {
  if (b ? b.rb : b) {
    return b.rb(0, c);
  }
  var d;
  d = sb[m(null == b ? null : b)];
  if (!d && (d = sb._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, tb = {}, ub = function ub(b, c, d) {
  if (b ? b.C : b) {
    return b.C(b, c, d);
  }
  var e;
  e = ub[m(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, vb = function vb(b, c, d) {
  if (b ? b.qb : b) {
    return b.qb(0, c, d);
  }
  var e;
  e = vb[m(null == b ? null : b)];
  if (!e && (e = vb._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, xb = function xb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = xb[m(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, yb = function yb(b, c) {
  if (b ? b.Ra : b) {
    return b.Ra(b, c);
  }
  var d;
  d = yb[m(null == b ? null : b)];
  if (!d && (d = yb._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, zb = function zb(b) {
  if (b ? b.Sa : b) {
    return b.Sa(b);
  }
  var c;
  c = zb[m(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b, c, d) {
  if (b ? b.Ia : b) {
    return b.Ia(b, c, d);
  }
  var e;
  e = Ab[m(null == b ? null : b)];
  if (!e && (e = Ab._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Bb = function Bb(b, c, d) {
  if (b ? b.ob : b) {
    return b.ob(b, c, d);
  }
  var e;
  e = Bb[m(null == b ? null : b)];
  if (!e && (e = Bb._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Cb = function Cb(b) {
  if (b ? b.pb : b) {
    return b.pb();
  }
  var c;
  c = Cb[m(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = Db[m(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = Eb[m(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Fb[m(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.Pa : b) {
    return b.Pa(b);
  }
  var c;
  c = Gb[m(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b) {
  if (b ? b.Qa : b) {
    return b.Qa(b);
  }
  var c;
  c = Hb[m(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Ib = function Ib(b, c) {
  if (b ? b.Eb : b) {
    return b.Eb(b, c);
  }
  var d;
  d = Ib[m(null == b ? null : b)];
  if (!d && (d = Ib._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Jb = function Jb() {
  switch(arguments.length) {
    case 2:
      return Jb.c(arguments[0], arguments[1]);
    case 3:
      return Jb.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Jb.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Jb.t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Jb.c = function(a, b) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b);
  }
  var c;
  c = Jb[m(null == a ? null : a)];
  if (!c && (c = Jb._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Jb.g = function(a, b, c) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c);
  }
  var d;
  d = Jb[m(null == a ? null : a)];
  if (!d && (d = Jb._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Jb.p = function(a, b, c, d) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c, d);
  }
  var e;
  e = Jb[m(null == a ? null : a)];
  if (!e && (e = Jb._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Jb.t = function(a, b, c, d, e) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b, c, d, e);
  }
  var f;
  f = Jb[m(null == a ? null : a)];
  if (!f && (f = Jb._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Jb.u = 5;
var Kb = function Kb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = Kb[m(null == b ? null : b)];
  if (!c && (c = Kb._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Lb(a) {
  this.Nb = a;
  this.i = 1073741824;
  this.s = 0;
}
Lb.prototype.rb = function(a, b) {
  return this.Nb.append(b);
};
function Mb(a) {
  var b = new ma;
  a.C(null, new Lb(b), ta());
  return "" + A(b);
}
var Nb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.c ? Math.imul.c(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.c ? Math.imul.c(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ob(a) {
  a = Nb(a | 0, -862048943);
  return Nb(a << 15 | a >>> -15, 461845907);
}
function Pb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Nb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Qb(a, b) {
  var c = (a | 0) ^ b, c = Nb(c ^ c >>> 16, -2048144789), c = Nb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Sb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Pb(c, Ob(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Ob(a.charCodeAt(a.length - 1)) : b;
  return Qb(b, Nb(2, a.length));
}
var Tb = {}, Ub = 0;
function Vb(a) {
  255 < Ub && (Tb = {}, Ub = 0);
  var b = Tb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Nb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Tb[a] = b;
    Ub += 1;
  }
  return a = b;
}
function Wb(a) {
  a && (a.i & 4194304 || a.Qb) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Vb(a), 0 !== a && (a = Ob(a), a = Pb(0, a), a = Qb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : ob(a);
  return a;
}
function Xb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Yb(a, b, c, d, e) {
  this.Ma = a;
  this.name = b;
  this.ya = c;
  this.Da = d;
  this.ka = e;
  this.i = 2154168321;
  this.s = 4096;
}
h = Yb.prototype;
h.toString = function() {
  return this.ya;
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return b instanceof Yb ? this.ya === b.ya : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ua.g(c, this, null);
      case 3:
        return Ua.g(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return Ua.g(c, this, null);
  };
  a.g = function(a, c, d) {
    return Ua.g(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return Ua.g(a, this, null);
};
h.c = function(a, b) {
  return Ua.g(a, this, b);
};
h.H = function() {
  return this.ka;
};
h.L = function(a, b) {
  return new Yb(this.Ma, this.name, this.ya, this.Da, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Xb(Sb(this.name), Vb(this.Ma));
};
h.Pa = function() {
  return this.name;
};
h.Qa = function() {
  return this.Ma;
};
h.C = function(a, b) {
  return sb(b, this.ya);
};
function Zb(a) {
  var b = [A("figwheel-test.snake"), A("/"), A(a)].join("");
  return new Yb("figwheel-test.snake", a, b, null, null);
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Rb)) {
    return a.K(null);
  }
  if (Aa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new $b(a, 0);
  }
  if (y(pb, a)) {
    return qb(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.cb)) {
    return a.fa(null);
  }
  a = C(a);
  return null == a ? null : Qa(a);
}
function ac(a) {
  return null != a ? a && (a.i & 64 || a.cb) ? a.la(null) : (a = C(a)) ? Ra(a) : cc : cc;
}
function H(a) {
  return null == a ? null : a && (a.i & 128 || a.bb) ? a.ia(null) : C(ac(a));
}
var dc = function dc() {
  switch(arguments.length) {
    case 1:
      return dc.a(arguments[0]);
    case 2:
      return dc.c(arguments[0], arguments[1]);
    default:
      return dc.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
dc.a = function() {
  return!0;
};
dc.c = function(a, b) {
  return null == a ? null == b : a === b || nb(a, b);
};
dc.k = function(a, b, c) {
  for (;;) {
    if (dc.c(a, b)) {
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return dc.c(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
dc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return dc.k(b, a, c);
};
dc.u = 2;
function ec(a) {
  this.v = a;
}
ec.prototype.next = function() {
  if (null != this.v) {
    var a = G(this.v);
    this.v = H(this.v);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function fc(a) {
  return new ec(C(a));
}
function gc(a, b) {
  var c = Ob(a), c = Pb(0, c);
  return Qb(c, b);
}
function hc(a) {
  var b = 0, c = 1;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = Nb(31, c) + Wb(G(a)) | 0, a = H(a);
    } else {
      return gc(c, b);
    }
  }
}
var ic = gc(1, 0);
function jc(a) {
  var b = 0, c = 0;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = c + Wb(G(a)) | 0, a = H(a);
    } else {
      return gc(c, b);
    }
  }
}
var kc = gc(0, 0);
Ia["null"] = !0;
Ka["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
nb.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
gb["function"] = !0;
hb["function"] = function() {
  return null;
};
ob._ = function(a) {
  return a[fa] || (a[fa] = ++ga);
};
function lc(a) {
  return a + 1;
}
function I(a) {
  return fb(a);
}
function mc(a, b) {
  var c = Ka(a);
  if (0 === c) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = B.c(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.c(a, e), d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function nc(a, b, c) {
  var d = Ka(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.c(a, c), e = b.c ? b.c(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function oc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function pc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.c ? b.c(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function qc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.c ? b.c(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function rc(a) {
  return a ? a.i & 2 || a.ub ? !0 : a.i ? !1 : y(Ia, a) : y(Ia, a);
}
function sc(a, b) {
  this.b = a;
  this.j = b;
}
sc.prototype.hb = function() {
  return this.j < this.b.length;
};
sc.prototype.next = function() {
  var a = this.b[this.j];
  this.j += 1;
  return a;
};
function $b(a, b) {
  this.b = a;
  this.j = b;
  this.i = 166199550;
  this.s = 8192;
}
h = $b.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.F = function(a, b) {
  var c = b + this.j;
  return c < this.b.length ? this.b[c] : null;
};
h.ha = function(a, b, c) {
  a = b + this.j;
  return a < this.b.length ? this.b[a] : c;
};
h.Oa = function() {
  return new sc(this.b, this.j);
};
h.ia = function() {
  return this.j + 1 < this.b.length ? new $b(this.b, this.j + 1) : null;
};
h.P = function() {
  return this.b.length - this.j;
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc.c ? tc.c(this, b) : tc.call(null, this, b);
};
h.M = function() {
  return cc;
};
h.N = function(a, b) {
  return qc(this.b, b, this.b[this.j], this.j + 1);
};
h.O = function(a, b, c) {
  return qc(this.b, b, c, this.j);
};
h.fa = function() {
  return this.b[this.j];
};
h.la = function() {
  return this.j + 1 < this.b.length ? new $b(this.b, this.j + 1) : cc;
};
h.K = function() {
  return this;
};
h.I = function(a, b) {
  return uc.c ? uc.c(b, this) : uc.call(null, b, this);
};
$b.prototype[Ea] = function() {
  return fc(this);
};
function vc(a, b) {
  return b < a.length ? new $b(a, b) : null;
}
function wc() {
  switch(arguments.length) {
    case 1:
      return vc(arguments[0], 0);
    case 2:
      return vc(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function xc(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
nb._ = function(a, b) {
  return a === b;
};
var zc = function zc() {
  switch(arguments.length) {
    case 0:
      return zc.l();
    case 1:
      return zc.a(arguments[0]);
    case 2:
      return zc.c(arguments[0], arguments[1]);
    default:
      return zc.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
zc.l = function() {
  return Ac;
};
zc.a = function(a) {
  return a;
};
zc.c = function(a, b) {
  return null != a ? Ma(a, b) : Ma(cc, b);
};
zc.k = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = zc.c(a, b), b = G(c), c = H(c);
    } else {
      return zc.c(a, b);
    }
  }
};
zc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return zc.k(b, a, c);
};
zc.u = 2;
function Bc(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.ub)) {
      a = a.P(null);
    } else {
      if (Aa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(Ia, a)) {
            a = Ka(a);
          } else {
            a: {
              a = C(a);
              for (var b = 0;;) {
                if (rc(a)) {
                  a = b + Ka(a);
                  break a;
                }
                a = H(a);
                b += 1;
              }
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
function Cc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return C(a) ? G(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.xb || (d.i ? 0 : y(Na, d)) : y(Na, d)) {
      return B.g(a, b, c);
    }
    if (C(a)) {
      var d = H(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function J(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.xb)) {
    return a.ha(null, b, null);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Na, a)) {
    return B.c(a, b);
  }
  if (a ? a.i & 64 || a.cb || (a.i ? 0 : y(Oa, a)) : y(Oa, a)) {
    return Cc(a, b);
  }
  throw Error([A("nth not supported on this type "), A(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.i & 256 || a.yb) ? a.da(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Ta, a) ? Ua.c(a, b) : null;
}
function Dc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.yb) ? a.G(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Ta, a) ? Ua.g(a, b, c) : c : c;
}
var Ec = function Ec() {
  switch(arguments.length) {
    case 3:
      return Ec.g(arguments[0], arguments[1], arguments[2]);
    default:
      return Ec.k(arguments[0], arguments[1], arguments[2], new $b(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Ec.g = function(a, b, c) {
  return null != a ? Va(a, b, c) : Fc([b], [c]);
};
Ec.k = function(a, b, c, d) {
  for (;;) {
    if (a = Ec.g(a, b, c), w(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
Ec.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return Ec.k(b, a, c, d);
};
Ec.u = 3;
var Gc = function Gc() {
  switch(arguments.length) {
    case 1:
      return Gc.a(arguments[0]);
    case 2:
      return Gc.c(arguments[0], arguments[1]);
    default:
      return Gc.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Gc.a = function(a) {
  return a;
};
Gc.c = function(a, b) {
  return null == a ? null : Xa(a, b);
};
Gc.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Gc.c(a, b);
    if (w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Gc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Gc.k(b, a, c);
};
Gc.u = 2;
function Hc(a) {
  var b = "function" == m(a);
  return w(b) ? b : a ? w(w(null) ? null : a.tb) ? !0 : a.Wb ? !1 : y(Ha, a) : y(Ha, a);
}
function Ic(a, b) {
  this.e = a;
  this.h = b;
  this.i = 393217;
  this.s = 0;
}
h = Ic.prototype;
h.H = function() {
  return this.h;
};
h.L = function(a, b) {
  return new Ic(this.e, b);
};
h.tb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) {
    a = this.e;
    return Jc.Na ? Jc.Na(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) : Jc.call(null, a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z);
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K);
  }
  function d(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D);
  }
  function e(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E);
  }
  function f(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F);
  }
  function g(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v) {
    a = this;
    return a.e.U ? a.e.U(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, q, p, r, t, u) {
    a = this;
    return a.e.T ? a.e.T(b, c, d, e, f, g, k, l, q, p, r, t, u) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, q, p, r, t) {
    a = this;
    return a.e.S ? a.e.S(b, c, d, e, f, g, k, l, q, p, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, q, p, r) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, g, k, l, q, p, r) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r);
  }
  function r(a, b, c, d, e, f, g, k, l, q, p) {
    a = this;
    return a.e.Q ? a.e.Q(b, c, d, e, f, g, k, l, q, p) : a.e.call(null, b, c, d, e, f, g, k, l, q, p);
  }
  function t(a, b, c, d, e, f, g, k, l, q) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, g, k, l, q) : a.e.call(null, b, c, d, e, f, g, k, l, q);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.e.t ? a.e.t(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    return a.e.p ? a.e.p(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.e.g ? a.e.g(b, c, d) : a.e.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    return a.e.c ? a.e.c(b, c) : a.e.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    return a.e.a ? a.e.a(b) : a.e.call(null, b);
  }
  function na(a) {
    a = this;
    return a.e.l ? a.e.l() : a.e.call(null);
  }
  var D = null, D = function(Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb, Rb, yc, xd, Ve) {
    switch(arguments.length) {
      case 1:
        return na.call(this, Fa);
      case 2:
        return Z.call(this, Fa, Y);
      case 3:
        return N.call(this, Fa, Y, aa);
      case 4:
        return K.call(this, Fa, Y, aa, ba);
      case 5:
        return F.call(this, Fa, Y, aa, ba, ea);
      case 6:
        return E.call(this, Fa, Y, aa, ba, ea, ia);
      case 7:
        return x.call(this, Fa, Y, aa, ba, ea, ia, ja);
      case 8:
        return v.call(this, Fa, Y, aa, ba, ea, ia, ja, la);
      case 9:
        return u.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa);
      case 10:
        return t.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa);
      case 11:
        return r.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa);
      case 12:
        return q.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba);
      case 13:
        return p.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja);
      case 14:
        return l.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa);
      case 15:
        return k.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D);
      case 16:
        return g.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a);
      case 17:
        return f.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib);
      case 18:
        return e.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb);
      case 19:
        return d.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb, Rb);
      case 20:
        return c.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb, Rb, yc);
      case 21:
        return b.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb, Rb, yc, xd);
      case 22:
        return a.call(this, Fa, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, D, $a, ib, wb, Rb, yc, xd, Ve);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = na;
  D.c = Z;
  D.g = N;
  D.p = K;
  D.t = F;
  D.J = E;
  D.aa = x;
  D.ba = v;
  D.ca = u;
  D.Q = t;
  D.R = r;
  D.S = q;
  D.T = p;
  D.U = l;
  D.V = k;
  D.W = g;
  D.X = f;
  D.Y = e;
  D.Z = d;
  D.$ = c;
  D.mb = b;
  D.Na = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.l = function() {
  return this.e.l ? this.e.l() : this.e.call(null);
};
h.a = function(a) {
  return this.e.a ? this.e.a(a) : this.e.call(null, a);
};
h.c = function(a, b) {
  return this.e.c ? this.e.c(a, b) : this.e.call(null, a, b);
};
h.g = function(a, b, c) {
  return this.e.g ? this.e.g(a, b, c) : this.e.call(null, a, b, c);
};
h.p = function(a, b, c, d) {
  return this.e.p ? this.e.p(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.t = function(a, b, c, d, e) {
  return this.e.t ? this.e.t(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
h.J = function(a, b, c, d, e, f) {
  return this.e.J ? this.e.J(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
h.ba = function(a, b, c, d, e, f, g, k) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k);
};
h.ca = function(a, b, c, d, e, f, g, k, l) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l);
};
h.Q = function(a, b, c, d, e, f, g, k, l, p) {
  return this.e.Q ? this.e.Q(a, b, c, d, e, f, g, k, l, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.R = function(a, b, c, d, e, f, g, k, l, p, q) {
  return this.e.R ? this.e.R(a, b, c, d, e, f, g, k, l, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.S = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  return this.e.S ? this.e.S(a, b, c, d, e, f, g, k, l, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.T = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  return this.e.T ? this.e.T(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.U = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  return this.e.U ? this.e.U(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.V = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  return this.e.V ? this.e.V(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
};
h.mb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) {
  var na = this.e;
  return Jc.Na ? Jc.Na(na, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : Jc.call(null, na, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z);
};
function Kc(a, b) {
  return Hc(a) && !(a ? a.i & 262144 || a.Ub || (a.i ? 0 : y(jb, a)) : y(jb, a)) ? new Ic(a, b) : null == a ? null : kb(a, b);
}
function Lc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Bb || (a.i ? 0 : y(gb, a)) : y(gb, a) : b) ? hb(a) : null;
}
function Mc(a) {
  return null == a || Ca(C(a));
}
function Nc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.zb ? !0 : a.i ? !1 : y(Wa, a) : y(Wa, a);
}
function Oc(a) {
  return a ? a.i & 16384 || a.Tb ? !0 : a.i ? !1 : y(db, a) : y(db, a);
}
function Pc(a) {
  return a ? a.s & 512 || a.Pb ? !0 : !1 : !1;
}
function Qc(a) {
  var b = [];
  ka(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Rc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Sc = {};
function Tc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.cb ? !0 : a.i ? !1 : y(Oa, a) : y(Oa, a);
}
function Uc(a) {
  return w(a) ? !0 : !1;
}
function Vc(a, b) {
  return Dc(a, b, Sc) === Sc ? !1 : !0;
}
function Wc(a, b) {
  var c = C(b);
  if (c) {
    var d = G(c), c = H(c);
    return Xc ? Xc(a, d, c) : Yc.call(null, a, d, c);
  }
  return a.l ? a.l() : a.call(null);
}
function Zc(a, b, c) {
  for (c = C(c);;) {
    if (c) {
      var d = G(c);
      b = a.c ? a.c(b, d) : a.call(null, b, d);
      c = H(c);
    } else {
      return b;
    }
  }
}
function Yc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.i & 524288 || b.Db) ? b.N(null, a) : Aa(b) ? oc(b, a) : "string" === typeof b ? oc(b, a) : y(lb, b) ? mb.c(b, a) : Wc(a, b);
    case 3:
      return Xc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Xc(a, b, c) {
  return c && (c.i & 524288 || c.Db) ? c.O(null, a, b) : Aa(c) ? pc(c, a, b) : "string" === typeof c ? pc(c, a, b) : y(lb, c) ? mb.g(c, a, b) : Zc(a, b, c);
}
function $c(a) {
  return a;
}
function ad(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = Xc(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var bd = function bd() {
  switch(arguments.length) {
    case 0:
      return bd.l();
    case 1:
      return bd.a(arguments[0]);
    case 2:
      return bd.c(arguments[0], arguments[1]);
    default:
      return bd.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
bd.l = function() {
  return 0;
};
bd.a = function(a) {
  return a;
};
bd.c = function(a, b) {
  return a + b;
};
bd.k = function(a, b, c) {
  return Xc(bd, a + b, c);
};
bd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return bd.k(b, a, c);
};
bd.u = 2;
var cd = function cd() {
  switch(arguments.length) {
    case 1:
      return cd.a(arguments[0]);
    case 2:
      return cd.c(arguments[0], arguments[1]);
    default:
      return cd.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
cd.a = function(a) {
  return-a;
};
cd.c = function(a, b) {
  return a - b;
};
cd.k = function(a, b, c) {
  return Xc(cd, a - b, c);
};
cd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return cd.k(b, a, c);
};
cd.u = 2;
function dd(a, b) {
  return(a % b + b) % b;
}
function ed(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function fd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.l();
    case 1:
      return A.a(arguments[0]);
    default:
      return A.k(arguments[0], new $b(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.l = function() {
  return "";
};
A.a = function(a) {
  return null == a ? "" : ha(a);
};
A.k = function(a, b) {
  for (var c = new ma("" + A(a)), d = b;;) {
    if (w(d)) {
      c = c.append("" + A(G(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
A.r = function(a) {
  var b = G(a);
  a = H(a);
  return A.k(b, a);
};
A.u = 1;
function tc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Sb || (b.i ? 0 : y(rb, b)) : y(rb, b)) {
    if (rc(a) && rc(b) && Bc(a) !== Bc(b)) {
      c = !1;
    } else {
      a: {
        c = C(a);
        for (var d = C(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && dc.c(G(c), G(d))) {
            c = H(c), d = H(d);
          } else {
            c = !1;
            break a;
          }
        }
      }
    }
  } else {
    c = null;
  }
  return Uc(c);
}
function gd(a) {
  if (C(a)) {
    var b = Wb(G(a));
    for (a = H(a);;) {
      if (null == a) {
        return b;
      }
      b = Xb(b, Wb(G(a)));
      a = H(a);
    }
  } else {
    return 0;
  }
}
function hd(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.n = e;
  this.i = 65937646;
  this.s = 8192;
}
h = hd.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 1 === this.count ? null : this.wa;
};
h.P = function() {
  return this.count;
};
h.Ga = function() {
  return this.first;
};
h.Ha = function() {
  return Ra(this);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return kb(cc, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return 1 === this.count ? cc : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new hd(b, this.first, this.wa, this.count, this.n);
};
h.I = function(a, b) {
  return new hd(this.h, b, this, this.count + 1, null);
};
hd.prototype[Ea] = function() {
  return fc(this);
};
function id(a) {
  this.h = a;
  this.i = 65937614;
  this.s = 8192;
}
h = id.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return null;
};
h.P = function() {
  return 0;
};
h.Ga = function() {
  return null;
};
h.Ha = function() {
  throw Error("Can't pop empty list");
};
h.B = function() {
  return ic;
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return this;
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return null;
};
h.la = function() {
  return cc;
};
h.K = function() {
  return null;
};
h.L = function(a, b) {
  return new id(b);
};
h.I = function(a, b) {
  return new hd(this.h, b, null, 1, null);
};
var cc = new id(null);
id.prototype[Ea] = function() {
  return fc(this);
};
var jd = function jd() {
  return jd.k(0 < arguments.length ? new $b(Array.prototype.slice.call(arguments, 0), 0) : null);
};
jd.k = function(a) {
  var b;
  if (a instanceof $b && 0 === a.j) {
    b = a.b;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.fa(null)), a = a.ia(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = cc;;) {
    if (0 < a) {
      var d = a - 1, c = c.I(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
jd.u = 0;
jd.r = function(a) {
  return jd.k(C(a));
};
function kd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.n = d;
  this.i = 65929452;
  this.s = 8192;
}
h = kd.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return null == this.wa ? null : C(this.wa);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return null == this.wa ? cc : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new kd(b, this.first, this.wa, this.n);
};
h.I = function(a, b) {
  return new kd(null, b, this, this.n);
};
kd.prototype[Ea] = function() {
  return fc(this);
};
function uc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.cb)) ? new kd(null, a, b, null) : new kd(null, a, C(b), null);
}
function M(a, b, c, d) {
  this.Ma = a;
  this.name = b;
  this.va = c;
  this.Da = d;
  this.i = 2153775105;
  this.s = 4096;
}
h = M.prototype;
h.toString = function() {
  return[A(":"), A(this.va)].join("");
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return b instanceof M ? this.va === b.va : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return L(c, this);
      case 3:
        return Dc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return L(c, this);
  };
  a.g = function(a, c, d) {
    return Dc(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return L(a, this);
};
h.c = function(a, b) {
  return Dc(a, this, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Xb(Sb(this.name), Vb(this.Ma)) + 2654435769 | 0;
};
h.Pa = function() {
  return this.name;
};
h.Qa = function() {
  return this.Ma;
};
h.C = function(a, b) {
  return sb(b, [A(":"), A(this.va)].join(""));
};
var ld = function ld() {
  switch(arguments.length) {
    case 1:
      return ld.a(arguments[0]);
    case 2:
      return ld.c(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
ld.a = function(a) {
  if (a instanceof M) {
    return a;
  }
  if (a instanceof Yb) {
    var b;
    if (a && (a.s & 4096 || a.Cb)) {
      b = a.Qa(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new M(b, md.a ? md.a(a) : md.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new M(b[0], b[1], a, null) : new M(null, b[0], a, null)) : null;
};
ld.c = function(a, b) {
  return new M(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
ld.u = 2;
function nd(a, b, c, d) {
  this.h = a;
  this.Ka = b;
  this.v = c;
  this.n = d;
  this.i = 32374988;
  this.s = 0;
}
h = nd.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
function od(a) {
  null != a.Ka && (a.v = a.Ka.l ? a.Ka.l() : a.Ka.call(null), a.Ka = null);
  return a.v;
}
h.H = function() {
  return this.h;
};
h.ia = function() {
  qb(this);
  return null == this.v ? null : H(this.v);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  qb(this);
  return null == this.v ? null : G(this.v);
};
h.la = function() {
  qb(this);
  return null != this.v ? ac(this.v) : cc;
};
h.K = function() {
  od(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof nd) {
      a = od(a);
    } else {
      return this.v = a, C(this.v);
    }
  }
};
h.L = function(a, b) {
  return new nd(b, this.Ka, this.v, this.n);
};
h.I = function(a, b) {
  return uc(b, this);
};
nd.prototype[Ea] = function() {
  return fc(this);
};
function pd(a, b) {
  this.lb = a;
  this.end = b;
  this.i = 2;
  this.s = 0;
}
pd.prototype.add = function(a) {
  this.lb[this.end] = a;
  return this.end += 1;
};
pd.prototype.pa = function() {
  var a = new qd(this.lb, 0, this.end);
  this.lb = null;
  return a;
};
pd.prototype.P = function() {
  return this.end;
};
function qd(a, b, c) {
  this.b = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.s = 0;
}
h = qd.prototype;
h.P = function() {
  return this.end - this.w;
};
h.F = function(a, b) {
  return this.b[this.w + b];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.b[this.w + b] : c;
};
h.pb = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new qd(this.b, this.w + 1, this.end);
};
h.N = function(a, b) {
  return qc(this.b, b, this.b[this.w], this.w + 1);
};
h.O = function(a, b, c) {
  return qc(this.b, b, c, this.w);
};
function rd(a, b, c, d) {
  this.pa = a;
  this.sa = b;
  this.h = c;
  this.n = d;
  this.i = 31850732;
  this.s = 1536;
}
h = rd.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (1 < Ka(this.pa)) {
    return new rd(Cb(this.pa), this.sa, this.h, null);
  }
  var a = qb(this.sa);
  return null == a ? null : a;
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.fa = function() {
  return B.c(this.pa, 0);
};
h.la = function() {
  return 1 < Ka(this.pa) ? new rd(Cb(this.pa), this.sa, this.h, null) : null == this.sa ? cc : this.sa;
};
h.K = function() {
  return this;
};
h.Ya = function() {
  return this.pa;
};
h.Za = function() {
  return null == this.sa ? cc : this.sa;
};
h.L = function(a, b) {
  return new rd(this.pa, this.sa, b, this.n);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Xa = function() {
  return null == this.sa ? null : this.sa;
};
rd.prototype[Ea] = function() {
  return fc(this);
};
function sd(a, b) {
  return 0 === Ka(a) ? b : new rd(a, b, null, null);
}
function td(a, b) {
  a.add(b);
}
function ud(a) {
  for (var b = [];;) {
    if (C(a)) {
      b.push(G(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function vd(a, b) {
  if (rc(a)) {
    return Bc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && C(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var wd = function wd(b) {
  return null == b ? null : null == H(b) ? C(G(b)) : uc(G(b), wd(H(b)));
}, yd = function yd() {
  switch(arguments.length) {
    case 0:
      return yd.l();
    case 1:
      return yd.a(arguments[0]);
    case 2:
      return yd.c(arguments[0], arguments[1]);
    default:
      return yd.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.l = function() {
  return new nd(null, function() {
    return null;
  }, null, null);
};
yd.a = function(a) {
  return new nd(null, function() {
    return a;
  }, null, null);
};
yd.c = function(a, b) {
  return new nd(null, function() {
    var c = C(a);
    return c ? Pc(c) ? sd(Db(c), yd.c(Eb(c), b)) : uc(G(c), yd.c(ac(c), b)) : b;
  }, null, null);
};
yd.k = function(a, b, c) {
  return function e(a, b) {
    return new nd(null, function() {
      var c = C(a);
      return c ? Pc(c) ? sd(Db(c), e(Eb(c), b)) : uc(G(c), e(ac(c), b)) : w(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(yd.c(a, b), c);
};
yd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yd.k(b, a, c);
};
yd.u = 2;
var zd = function zd() {
  switch(arguments.length) {
    case 0:
      return zd.l();
    case 1:
      return zd.a(arguments[0]);
    case 2:
      return zd.c(arguments[0], arguments[1]);
    default:
      return zd.k(arguments[0], arguments[1], new $b(Array.prototype.slice.call(arguments, 2), 0));
  }
};
zd.l = function() {
  return xb(Ac);
};
zd.a = function(a) {
  return a;
};
zd.c = function(a, b) {
  return yb(a, b);
};
zd.k = function(a, b, c) {
  for (;;) {
    if (a = yb(a, b), w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
zd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return zd.k(b, a, c);
};
zd.u = 2;
function Ad(a, b, c) {
  var d = C(c);
  if (0 === b) {
    return a.l ? a.l() : a.call(null);
  }
  c = Qa(d);
  var e = Ra(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Qa(e), f = Ra(e);
  if (2 === b) {
    return a.c ? a.c(c, d) : a.c ? a.c(c, d) : a.call(null, c, d);
  }
  var e = Qa(f), g = Ra(f);
  if (3 === b) {
    return a.g ? a.g(c, d, e) : a.g ? a.g(c, d, e) : a.call(null, c, d, e);
  }
  var f = Qa(g), k = Ra(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Qa(k), l = Ra(k);
  if (5 === b) {
    return a.t ? a.t(c, d, e, f, g) : a.t ? a.t(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Qa(l), p = Ra(l);
  if (6 === b) {
    return a.J ? a.J(c, d, e, f, g, k) : a.J ? a.J(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Qa(p), q = Ra(p);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var p = Qa(q), r = Ra(q);
  if (8 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, p) : a.ba ? a.ba(c, d, e, f, g, k, l, p) : a.call(null, c, d, e, f, g, k, l, p);
  }
  var q = Qa(r), t = Ra(r);
  if (9 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, p, q) : a.ca ? a.ca(c, d, e, f, g, k, l, p, q) : a.call(null, c, d, e, f, g, k, l, p, q);
  }
  var r = Qa(t), u = Ra(t);
  if (10 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, p, q, r) : a.Q ? a.Q(c, d, e, f, g, k, l, p, q, r) : a.call(null, c, d, e, f, g, k, l, p, q, r);
  }
  var t = Qa(u), v = Ra(u);
  if (11 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, p, q, r, t) : a.R ? a.R(c, d, e, f, g, k, l, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, p, q, r, t);
  }
  var u = Qa(v), x = Ra(v);
  if (12 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l, p, q, r, t, u) : a.S ? a.S(c, d, e, f, g, k, l, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u);
  }
  var v = Qa(x), E = Ra(x);
  if (13 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.T ? a.T(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v);
  }
  var x = Qa(E), F = Ra(E);
  if (14 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.U ? a.U(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
  }
  var E = Qa(F), K = Ra(F);
  if (15 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
  }
  var F = Qa(K), N = Ra(K);
  if (16 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
  }
  var K = Qa(N), Z = Ra(N);
  if (17 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
  }
  var N = Qa(Z), na = Ra(Z);
  if (18 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
  }
  Z = Qa(na);
  na = Ra(na);
  if (19 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z);
  }
  var D = Qa(na);
  Ra(na);
  if (20 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D) : a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Jc() {
  switch(arguments.length) {
    case 2:
      return Bd(arguments[0], arguments[1]);
    case 3:
      return Cd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = uc(arguments[1], uc(arguments[2], arguments[3])), c = a.u;
      if (a.r) {
        var d = vd(b, c + 1);
        a = d <= c ? Ad(a, d, b) : a.r(b);
      } else {
        a = a.apply(a, ud(b));
      }
      return a;
    case 5:
      return Dd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Ed(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new $b(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Bd(a, b) {
  var c = a.u;
  if (a.r) {
    var d = vd(b, c + 1);
    return d <= c ? Ad(a, d, b) : a.r(b);
  }
  return a.apply(a, ud(b));
}
function Cd(a, b, c) {
  b = uc(b, c);
  c = a.u;
  if (a.r) {
    var d = vd(b, c + 1);
    return d <= c ? Ad(a, d, b) : a.r(b);
  }
  return a.apply(a, ud(b));
}
function Dd(a, b, c, d, e) {
  b = uc(b, uc(c, uc(d, e)));
  c = a.u;
  return a.r ? (d = vd(b, c + 1), d <= c ? Ad(a, d, b) : a.r(b)) : a.apply(a, ud(b));
}
function Ed(a, b, c, d, e, f) {
  b = uc(b, uc(c, uc(d, uc(e, wd(f)))));
  c = a.u;
  return a.r ? (d = vd(b, c + 1), d <= c ? Ad(a, d, b) : a.r(b)) : a.apply(a, ud(b));
}
function Fd(a) {
  return C(a) ? a : null;
}
function Gd(a, b) {
  for (;;) {
    if (null == C(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (w(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Hd(a, b) {
  for (;;) {
    if (C(b)) {
      var c;
      c = G(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (w(c)) {
        return c;
      }
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Id(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.g ? b.g(c, d, e) : b.call(null, c, d, e);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.c ? b.c(c, d) : b.call(null, c, d);
      return a.a ? a.a(e) : a.call(null, e);
    }
    function e(c) {
      c = b.a ? b.a(c) : b.call(null, c);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function f() {
      var c = b.l ? b.l() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new $b(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Dd(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.u = 3;
      c.r = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, u = Array(arguments.length - 3);t < u.length;) {
              u[t] = arguments[t + 3], ++t;
            }
            t = new $b(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.l = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Jd(a, b) {
  return function() {
    function c(c, d, e) {
      return a.p ? a.p(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.g ? a.g(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.c ? a.c(b, c) : a.call(null, b, c);
    }
    function f() {
      return a.a ? a.a(b) : a.call(null, b);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new $b(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return Ed(a, b, c, e, f, wc([g], 0));
      }
      c.u = 3;
      c.r = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, u = Array(arguments.length - 3);t < u.length;) {
              u[t] = arguments[t + 3], ++t;
            }
            t = new $b(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.l = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Kd(a, b) {
  return function d(b, f) {
    return new nd(null, function() {
      var g = C(f);
      if (g) {
        if (Pc(g)) {
          for (var k = Db(g), l = Bc(k), p = new pd(Array(l), 0), q = 0;;) {
            if (q < l) {
              td(p, function() {
                var d = b + q, f = B.c(k, q);
                return a.c ? a.c(d, f) : a.call(null, d, f);
              }()), q += 1;
            } else {
              break;
            }
          }
          return sd(p.pa(), d(b + l, Eb(g)));
        }
        return uc(function() {
          var d = G(g);
          return a.c ? a.c(b, d) : a.call(null, b, d);
        }(), d(b + 1, ac(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Ld(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Ob = c;
  this.sb = d;
  this.s = 16386;
  this.i = 6455296;
}
h = Ld.prototype;
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return this === b;
};
h.vb = function() {
  return this.state;
};
h.H = function() {
  return this.h;
};
h.qb = function(a, b, c) {
  for (var d = C(this.sb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var k = J(a, 0);
      a = J(a, 1);
      var l = b, p = c;
      a.p ? a.p(k, this, l, p) : a.call(null, k, this, l, p);
      g += 1;
    } else {
      if (a = C(d)) {
        d = a, Pc(d) ? (e = Db(d), d = Eb(d), a = e, f = Bc(e), e = a) : (a = G(d), k = J(a, 0), a = J(a, 1), e = k, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
function Md() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new $b(Array.prototype.slice.call(arguments, 1), 0), c = Tc(b) ? Bd(Nd, b) : b, b = L(c, xa), c = L(c, Od);
      return new Ld(a, b, c, null);
  }
}
function O(a) {
  return new Ld(a, null, null, null);
}
function Pd(a, b) {
  if (a instanceof Ld) {
    var c = a.Ob;
    if (null != c && !w(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = jd(new Yb(null, "validate", "validate", 1439230700, null), new Yb(null, "new-value", "new-value", -1567397401, null));
        return Qd.a ? Qd.a(a) : Qd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.sb && vb(a, c, b);
    return b;
  }
  return Ib(a, b);
}
var Rd = function Rd() {
  switch(arguments.length) {
    case 2:
      return Rd.c(arguments[0], arguments[1]);
    case 3:
      return Rd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Rd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Rd.k(arguments[0], arguments[1], arguments[2], arguments[3], new $b(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Rd.c = function(a, b) {
  var c;
  a instanceof Ld ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Pd(a, c)) : c = Jb.c(a, b);
  return c;
};
Rd.g = function(a, b, c) {
  if (a instanceof Ld) {
    var d = a.state;
    b = b.c ? b.c(d, c) : b.call(null, d, c);
    a = Pd(a, b);
  } else {
    a = Jb.g(a, b, c);
  }
  return a;
};
Rd.p = function(a, b, c, d) {
  if (a instanceof Ld) {
    var e = a.state;
    b = b.g ? b.g(e, c, d) : b.call(null, e, c, d);
    a = Pd(a, b);
  } else {
    a = Jb.p(a, b, c, d);
  }
  return a;
};
Rd.k = function(a, b, c, d, e) {
  return a instanceof Ld ? Pd(a, Dd(b, a.state, c, d, e)) : Jb.t(a, b, c, d, e);
};
Rd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Rd.k(b, a, c, d, e);
};
Rd.u = 4;
var Sd = function Sd() {
  switch(arguments.length) {
    case 1:
      return Sd.a(arguments[0]);
    case 2:
      return Sd.c(arguments[0], arguments[1]);
    case 3:
      return Sd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Sd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Sd.k(arguments[0], arguments[1], arguments[2], arguments[3], new $b(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Sd.a = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.a ? a.a(d) : a.call(null, d);
        return b.c ? b.c(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      function e() {
        return b.l ? b.l() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new $b(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Cd(a, e, f);
          return b.c ? b.c(c, e) : b.call(null, c, e);
        }
        c.u = 2;
        c.r = function(a) {
          var b = G(a);
          a = H(a);
          var c = G(a);
          a = ac(a);
          return d(b, c, a);
        };
        c.k = d;
        return c;
      }(), f = function(a, b, f) {
        switch(arguments.length) {
          case 0:
            return e.call(this);
          case 1:
            return d.call(this, a);
          case 2:
            return c.call(this, a, b);
          default:
            var q = null;
            if (2 < arguments.length) {
              for (var q = 0, r = Array(arguments.length - 2);q < r.length;) {
                r[q] = arguments[q + 2], ++q;
              }
              q = new $b(r, 0);
            }
            return g.k(a, b, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.u = 2;
      f.r = g.r;
      f.l = e;
      f.a = d;
      f.c = c;
      f.k = g.k;
      return f;
    }();
  };
};
Sd.c = function(a, b) {
  return new nd(null, function() {
    var c = C(b);
    if (c) {
      if (Pc(c)) {
        for (var d = Db(c), e = Bc(d), f = new pd(Array(e), 0), g = 0;;) {
          if (g < e) {
            td(f, function() {
              var b = B.c(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return sd(f.pa(), Sd.c(a, Eb(c)));
      }
      return uc(function() {
        var b = G(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Sd.c(a, ac(c)));
    }
    return null;
  }, null, null);
};
Sd.g = function(a, b, c) {
  return new nd(null, function() {
    var d = C(b), e = C(c);
    if (d && e) {
      var f = uc, g;
      g = G(d);
      var k = G(e);
      g = a.c ? a.c(g, k) : a.call(null, g, k);
      d = f(g, Sd.g(a, ac(d), ac(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Sd.p = function(a, b, c, d) {
  return new nd(null, function() {
    var e = C(b), f = C(c), g = C(d);
    if (e && f && g) {
      var k = uc, l;
      l = G(e);
      var p = G(f), q = G(g);
      l = a.g ? a.g(l, p, q) : a.call(null, l, p, q);
      e = k(l, Sd.p(a, ac(e), ac(f), ac(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Sd.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new nd(null, function() {
      var b = Sd.c(C, a);
      return Gd($c, b) ? uc(Sd.c(G, b), k(Sd.c(ac, b))) : null;
    }, null, null);
  };
  return Sd.c(function() {
    return function(b) {
      return Bd(a, b);
    };
  }(f), f(zc.k(e, d, wc([c, b], 0))));
};
Sd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Sd.k(b, a, c, d, e);
};
Sd.u = 4;
function Td(a, b) {
  return Bd(yd, Cd(Sd, a, b));
}
function Ud(a, b) {
  return new nd(null, function() {
    var c = C(b);
    if (c) {
      if (Pc(c)) {
        for (var d = Db(c), e = Bc(d), f = new pd(Array(e), 0), g = 0;;) {
          if (g < e) {
            var k;
            k = B.c(d, g);
            k = a.a ? a.a(k) : a.call(null, k);
            w(k) && (k = B.c(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return sd(f.pa(), Ud(a, Eb(c)));
      }
      d = G(c);
      c = ac(c);
      return w(a.a ? a.a(d) : a.call(null, d)) ? uc(d, Ud(a, c)) : Ud(a, c);
    }
    return null;
  }, null, null);
}
var Vd = function Vd() {
  switch(arguments.length) {
    case 2:
      return Vd.c(arguments[0], arguments[1]);
    case 3:
      return Vd.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Vd.c = function(a, b) {
  var c;
  null != a ? a && (a.s & 4 || a.wb) ? (c = Xc(yb, xb(a), b), c = zb(c), c = Kc(c, Lc(a))) : c = Xc(Ma, a, b) : c = Xc(zc, cc, b);
  return c;
};
Vd.g = function(a, b, c) {
  a && (a.s & 4 || a.wb) ? (b = ad(b, zd, xb(a), c), b = zb(b), a = Kc(b, Lc(a))) : a = ad(b, zc, a, c);
  return a;
};
Vd.u = 3;
var Wd = function Wd() {
  switch(arguments.length) {
    case 3:
      return Wd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Wd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Wd.t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Wd.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Wd.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new $b(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Wd.g = function(a, b, c) {
  return Ec.g(a, b, function() {
    var d = L(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
};
Wd.p = function(a, b, c, d) {
  return Ec.g(a, b, function() {
    var e = L(a, b);
    return c.c ? c.c(e, d) : c.call(null, e, d);
  }());
};
Wd.t = function(a, b, c, d, e) {
  return Ec.g(a, b, function() {
    var f = L(a, b);
    return c.g ? c.g(f, d, e) : c.call(null, f, d, e);
  }());
};
Wd.J = function(a, b, c, d, e, f) {
  return Ec.g(a, b, function() {
    var g = L(a, b);
    return c.p ? c.p(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
Wd.k = function(a, b, c, d, e, f, g) {
  return Ec.g(a, b, Ed(c, L(a, b), d, e, f, wc([g], 0)));
};
Wd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), g = H(f), f = G(g), g = H(g);
  return Wd.k(b, a, c, d, e, f, g);
};
Wd.u = 6;
function Xd(a, b) {
  this.m = a;
  this.b = b;
}
function Yd(a, b) {
  return new Xd(a, b);
}
function Zd(a) {
  return new Xd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function $d(a) {
  return new Xd(a.m, Ga(a.b));
}
function ae(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function be(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Zd(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var ce = function ce(b, c, d, e) {
  var f = $d(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.b[g] = e : (d = d.b[g], b = null != d ? ce(b, c - 5, d, e) : be(null, c - 5, e), f.b[g] = b);
  return f;
};
function de(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function ee(a, b) {
  if (b >= ae(a)) {
    return a.o;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function fe(a, b) {
  return 0 <= b && b < a.d ? ee(a, b) : de(b, a.d);
}
var ge = function ge(b, c, d, e, f) {
  var g = $d(d);
  if (0 === c) {
    g.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = ge(b, c - 5, d.b[k], e, f);
    g.b[k] = b;
  }
  return g;
}, he = function he(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = he(b, c - 5, d.b[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = $d(d);
    d.b[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = $d(d);
  d.b[e] = null;
  return d;
};
function ie(a, b, c, d, e, f) {
  this.j = a;
  this.kb = b;
  this.b = c;
  this.oa = d;
  this.start = e;
  this.end = f;
}
ie.prototype.hb = function() {
  return this.j < this.end;
};
ie.prototype.next = function() {
  32 === this.j - this.kb && (this.b = ee(this.oa, this.j), this.kb += 32);
  var a = this.b[this.j & 31];
  this.j += 1;
  return a;
};
function P(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.o = e;
  this.n = f;
  this.i = 167668511;
  this.s = 8196;
}
h = P.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? B.g(this, b, c) : c;
};
h.F = function(a, b) {
  return fe(this, b)[b & 31];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? ee(this, b)[b & 31] : c;
};
h.eb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return ae(this) <= b ? (a = Ga(this.o), a[b & 31] = c, new P(this.h, this.d, this.shift, this.root, a, null)) : new P(this.h, this.d, this.shift, ge(this, this.shift, this.root, b, c), this.o, null);
  }
  if (b === this.d) {
    return Ma(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.d), A("]")].join(""));
};
h.Oa = function() {
  var a = this.d;
  return new ie(0, 0, 0 < Bc(this) ? ee(this, 0) : null, this, 0, a);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.$a = function() {
  return B.c(this, 0);
};
h.ab = function() {
  return B.c(this, 1);
};
h.Ga = function() {
  return 0 < this.d ? B.c(this, this.d - 1) : null;
};
h.Ha = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return kb(Ac, this.h);
  }
  if (1 < this.d - ae(this)) {
    return new P(this.h, this.d - 1, this.shift, this.root, this.o.slice(0, -1), null);
  }
  var a = ee(this, this.d - 2), b = he(this, this.shift, this.root), b = null == b ? Q : b, c = this.d - 1;
  return 5 < this.shift && null == b.b[1] ? new P(this.h, c, this.shift - 5, b.b[0], a, null) : new P(this.h, c, this.shift, b, a, null);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  if (b instanceof P) {
    if (this.d === Bc(b)) {
      for (var c = Kb(this), d = Kb(b);;) {
        if (w(c.hb())) {
          var e = c.next(), f = d.next();
          if (!dc.c(e, f)) {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return tc(this, b);
  }
};
h.Fa = function() {
  var a = this;
  return new je(a.d, a.shift, function() {
    var b = a.root;
    return ke.a ? ke.a(b) : ke.call(null, b);
  }(), function() {
    var b = a.o;
    return le.a ? le.a(b) : le.call(null, b);
  }());
};
h.M = function() {
  return Kc(Ac, this.h);
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = ee(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.c ? b.c(d, g) : b.call(null, d, g), f = f + 1
          } else {
            e = d;
            break a;
          }
        }
      }
      a += c;
      d = e;
    } else {
      return d;
    }
  }
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.K = function() {
  if (0 === this.d) {
    return null;
  }
  if (32 >= this.d) {
    return new $b(this.o, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.b[0];
      } else {
        a = a.b;
        break a;
      }
    }
  }
  return me ? me(this, a, 0, 0) : ne.call(null, this, a, 0, 0);
};
h.L = function(a, b) {
  return new P(b, this.d, this.shift, this.root, this.o, this.n);
};
h.I = function(a, b) {
  if (32 > this.d - ae(this)) {
    for (var c = this.o.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.o[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new P(this.h, this.d + 1, this.shift, this.root, d, null);
  }
  c = (d = this.d >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Zd(null), d.b[0] = this.root, e = be(null, this.shift, new Xd(null, this.o)), d.b[1] = e) : d = ce(this, this.shift, this.root, new Xd(null, this.o));
  return new P(this.h, this.d + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.F(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
var Q = new Xd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ac = new P(null, 0, 5, Q, [], ic);
function oe(a) {
  var b = a.length;
  if (32 > b) {
    return new P(null, b, 5, Q, a, null);
  }
  for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Fa(null);;) {
    if (c < b) {
      var e = c + 1, d = zd.c(d, a[c]), c = e
    } else {
      return zb(d);
    }
  }
}
P.prototype[Ea] = function() {
  return fc(this);
};
function pe(a) {
  return Aa(a) ? oe(a) : zb(Xc(yb, xb(Ac), a));
}
function qe(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.n = f;
  this.i = 32375020;
  this.s = 1536;
}
h = qe.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = me ? me(a, b, c, d) : ne.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Fb(this);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(Ac, this.h);
};
h.N = function(a, b) {
  var c;
  c = this.D;
  var d = this.j + this.w, e = Bc(this.D);
  c = re ? re(c, d, e) : se.call(null, c, d, e);
  return mc(c, b);
};
h.O = function(a, b, c) {
  a = this.D;
  var d = this.j + this.w, e = Bc(this.D);
  a = re ? re(a, d, e) : se.call(null, a, d, e);
  return nc(a, b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = me ? me(a, b, c, d) : ne.call(null, a, b, c, d);
    return null == a ? cc : a;
  }
  return Eb(this);
};
h.K = function() {
  return this;
};
h.Ya = function() {
  var a = this.ga;
  return new qd(a, this.w, a.length);
};
h.Za = function() {
  var a = this.j + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = ee(this.D, a);
    return me ? me(b, c, a, 0) : ne.call(null, b, c, a, 0);
  }
  return cc;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return te ? te(c, d, e, f, b) : ne.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Xa = function() {
  var a = this.j + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = ee(this.D, a);
    return me ? me(b, c, a, 0) : ne.call(null, b, c, a, 0);
  }
  return null;
};
qe.prototype[Ea] = function() {
  return fc(this);
};
function ne() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new qe(a, fe(a, b), b, c, null, null);
    case 4:
      return me(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return te(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function me(a, b, c, d) {
  return new qe(a, b, c, d, null, null);
}
function te(a, b, c, d, e) {
  return new qe(a, b, c, d, e, null);
}
function ue(a, b, c, d, e) {
  this.h = a;
  this.oa = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.i = 167666463;
  this.s = 8192;
}
h = ue.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? B.g(this, b, c) : c;
};
h.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? de(b, this.end - this.start) : B.c(this.oa, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.g(this.oa, this.start + b, c);
};
h.eb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Ec.g(this.oa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ve.t ? ve.t(a, c, b, d, null) : ve.call(null, a, c, b, d, null);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.end - this.start;
};
h.Ga = function() {
  return B.c(this.oa, this.end - 1);
};
h.Ha = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.oa, c = this.start, d = this.end - 1;
  return ve.t ? ve.t(a, b, c, d, null) : ve.call(null, a, b, c, d, null);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(Ac, this.h);
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  return nc(this, b, c);
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return eb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.K = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : uc(B.c(a.oa, e), new nd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.oa, d = this.start, e = this.end, f = this.n;
  return ve.t ? ve.t(b, c, d, e, f) : ve.call(null, b, c, d, e, f);
};
h.I = function(a, b) {
  var c = this.h, d = eb(this.oa, this.end, b), e = this.start, f = this.end + 1;
  return ve.t ? ve.t(c, d, e, f, null) : ve.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.F(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
ue.prototype[Ea] = function() {
  return fc(this);
};
function ve(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ue) {
      c = b.start + c, d = b.start + d, b = b.oa;
    } else {
      var f = Bc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ue(a, b, c, d, e);
    }
  }
}
function se() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return re(a, arguments[1], Bc(a));
    case 3:
      return re(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function re(a, b, c) {
  return ve(null, a, b, c, null);
}
function we(a, b) {
  return a === b.m ? b : new Xd(a, Ga(b.b));
}
function ke(a) {
  return new Xd({}, Ga(a.b));
}
function le(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Rc(a, 0, b, 0, a.length);
  return b;
}
var xe = function xe(b, c, d, e) {
  d = we(b.root.m, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.b[f];
    b = null != g ? xe(b, c - 5, g, e) : be(b.root.m, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function je(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.s = 88;
  this.i = 275;
}
h = je.prototype;
h.Ra = function(a, b) {
  if (this.root.m) {
    if (32 > this.d - ae(this)) {
      this.o[this.d & 31] = b;
    } else {
      var c = new Xd(this.root.m, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = be(this.root.m, this.shift, c);
        this.root = new Xd(this.root.m, d);
        this.shift = e;
      } else {
        this.root = xe(this, this.shift, this.root, c);
      }
    }
    this.d += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Sa = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = this.d - ae(this), b = Array(a);
    Rc(this.o, 0, b, 0, a);
    return new P(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Ia = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.ob = function(a, b, c) {
  var d = this;
  if (d.root.m) {
    if (0 <= b && b < d.d) {
      return ae(this) <= b ? d.o[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = we(d.root.m, k);
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var p = b >>> a & 31, q = f(a - 5, l.b[p]);
            l.b[p] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.d) {
      return yb(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.d)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.m) {
    return this.d;
  }
  throw Error("count after persistent!");
};
h.F = function(a, b) {
  if (this.root.m) {
    return fe(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? B.c(this, b) : c;
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? B.g(this, b, c) : c;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.da(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.da(null, c);
  };
  a.g = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
function ye() {
  this.i = 2097152;
  this.s = 0;
}
ye.prototype.equiv = function(a) {
  return this.q(null, a);
};
ye.prototype.q = function() {
  return!1;
};
var ze = new ye;
function Ae(a, b) {
  return Uc(Nc(b) ? Bc(a) === Bc(b) ? Gd($c, Sd.c(function(a) {
    return dc.c(Dc(b, G(a), ze), G(H(a)));
  }, a)) : null : null);
}
function Be(a) {
  this.v = a;
}
Be.prototype.next = function() {
  if (null != this.v) {
    var a = G(this.v), b = J(a, 0), a = J(a, 1);
    this.v = H(this.v);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Ce(a) {
  return new Be(C(a));
}
function De(a, b) {
  var c;
  if (b instanceof M) {
    a: {
      c = a.length;
      for (var d = b.va, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof M && d === f.va) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, w(w(c) ? c : "number" === typeof b)) {
      a: {
        for (c = a.length, d = 0;;) {
          if (c <= d) {
            c = -1;
            break a;
          }
          if (b === a[d]) {
            c = d;
            break a;
          }
          d += 2;
        }
      }
    } else {
      if (b instanceof Yb) {
        a: {
          for (c = a.length, d = b.ya, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Yb && d === f.ya) {
              c = e;
              break a;
            }
            e += 2;
          }
        }
      } else {
        if (null == b) {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (null == a[d]) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        } else {
          a: {
            for (c = a.length, d = 0;;) {
              if (c <= d) {
                c = -1;
                break a;
              }
              if (dc.c(b, a[d])) {
                c = d;
                break a;
              }
              d += 2;
            }
          }
        }
      }
    }
  }
  return c;
}
function Ee(a, b, c) {
  this.b = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.s = 0;
}
h = Ee.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  return this.j < this.b.length - 2 ? new Ee(this.b, this.j + 2, this.ka) : null;
};
h.P = function() {
  return(this.b.length - this.j) / 2;
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.ka);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return new P(null, 2, 5, Q, [this.b[this.j], this.b[this.j + 1]], null);
};
h.la = function() {
  return this.j < this.b.length - 2 ? new Ee(this.b, this.j + 2, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Ee(this.b, this.j, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
Ee.prototype[Ea] = function() {
  return fc(this);
};
function Fe(a, b, c) {
  this.b = a;
  this.j = b;
  this.d = c;
}
Fe.prototype.hb = function() {
  return this.j < this.d;
};
Fe.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.b[this.j], this.b[this.j + 1]], null);
  this.j += 2;
  return a;
};
function n(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.b = c;
  this.n = d;
  this.i = 16647951;
  this.s = 8196;
}
h = n.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return fc(Ge.a ? Ge.a(this) : Ge.call(null, this));
};
h.entries = function() {
  return Ce(C(this));
};
h.values = function() {
  return fc(He.a ? He.a(this) : He.call(null, this));
};
h.has = function(a) {
  return Vc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = J(f, 0), f = J(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Pc(b) ? (c = Db(b), b = Eb(b), g = c, d = Bc(c), c = g) : (c = G(b), g = J(c, 0), c = f = J(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  a = De(this.b, b);
  return-1 === a ? c : this.b[a + 1];
};
h.Oa = function() {
  return new Fe(this.b, 0, 2 * this.d);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = jc(this);
};
h.q = function(a, b) {
  if (b && (b.i & 1024 || b.zb)) {
    var c = this.b.length;
    if (this.d === b.P(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.b[d], Sc);
          if (e !== Sc) {
            if (dc.c(this.b[d + 1], e)) {
              d += 2;
            } else {
              return!1;
            }
          } else {
            return!1;
          }
        } else {
          return!0;
        }
      }
    } else {
      return!1;
    }
  } else {
    return Ae(this, b);
  }
};
h.Fa = function() {
  return new Ie({}, this.b.length, Ga(this.b));
};
h.M = function() {
  return kb(R, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.nb = function(a, b) {
  if (0 <= De(this.b, b)) {
    var c = this.b.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.h, this.d - 1, d, null);
      }
      dc.c(b, this.b[e]) || (d[f] = this.b[e], d[f + 1] = this.b[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ea = function(a, b, c) {
  a = De(this.b, b);
  if (-1 === a) {
    if (this.d < Je) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.h, this.d + 1, e, null);
    }
    return kb(Va(Vd.c(Ke, this), b, c), this.h);
  }
  if (c === this.b[a + 1]) {
    return this;
  }
  b = Ga(this.b);
  b[a + 1] = c;
  return new n(this.h, this.d, b, null);
};
h.K = function() {
  var a = this.b;
  return 0 <= a.length - 2 ? new Ee(a, 0, null) : null;
};
h.L = function(a, b) {
  return new n(b, this.d, this.b, this.n);
};
h.I = function(a, b) {
  if (Oc(b)) {
    return Va(this, B.c(b, 0), B.c(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Oc(e)) {
      c = Va(c, B.c(e, 0), B.c(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.da(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.da(null, c);
  };
  a.g = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
var R = new n(null, 0, [], kc), Je = 8;
n.prototype[Ea] = function() {
  return fc(this);
};
function Ie(a, b, c) {
  this.Ja = a;
  this.La = b;
  this.b = c;
  this.i = 258;
  this.s = 56;
}
h = Ie.prototype;
h.P = function() {
  if (w(this.Ja)) {
    return ed(this.La, 2);
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  if (w(this.Ja)) {
    return a = De(this.b, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Ra = function(a, b) {
  if (w(this.Ja)) {
    if (b ? b.i & 2048 || b.Ab || (b.i ? 0 : y(Ya, b)) : y(Ya, b)) {
      return Ab(this, Le.a ? Le.a(b) : Le.call(null, b), Me.a ? Me.a(b) : Me.call(null, b));
    }
    for (var c = C(b), d = this;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = Ab(d, function() {
          var a = f;
          return Le.a ? Le.a(a) : Le.call(null, a);
        }(), function() {
          var a = f;
          return Me.a ? Me.a(a) : Me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Sa = function() {
  if (w(this.Ja)) {
    return this.Ja = !1, new n(null, ed(this.La, 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
h.Ia = function(a, b, c) {
  if (w(this.Ja)) {
    a = De(this.b, b);
    if (-1 === a) {
      if (this.La + 2 <= 2 * Je) {
        return this.La += 2, this.b.push(b), this.b.push(c), this;
      }
      a = this.La;
      var d = this.b;
      a = Ne.c ? Ne.c(a, d) : Ne.call(null, a, d);
      return Ab(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ne(a, b) {
  for (var c = xb(Ke), d = 0;;) {
    if (d < a) {
      c = Ab(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Oe() {
  this.ta = !1;
}
function Pe(a, b) {
  return a === b ? !0 : a === b || a instanceof M && b instanceof M && a.va === b.va ? !0 : dc.c(a, b);
}
function Qe(a, b, c) {
  a = Ga(a);
  a[b] = c;
  return a;
}
function Re(a, b) {
  var c = Array(a.length - 2);
  Rc(a, 0, c, 0, 2 * b);
  Rc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Se(a, b, c, d) {
  a = a.Ba(b);
  a.b[c] = d;
  return a;
}
function Te(a, b, c) {
  this.m = a;
  this.A = b;
  this.b = c;
}
h = Te.prototype;
h.Ba = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = fd(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Rc(this.b, 0, c, 0, 2 * b);
  return new Te(a, this.A, c);
};
h.Ta = function() {
  var a = this.b;
  return Ue ? Ue(a) : We.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = fd(this.A & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : Pe(c, e) ? f : d;
};
h.ra = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = fd(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = fd(this.A);
    if (2 * l < this.b.length) {
      a = this.Ba(a);
      b = a.b;
      f.ta = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.A |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Xe.ra(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.b[e] ? Xe.ra(a, b + 5, Wb(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Ye(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Rc(this.b, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Rc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ba(a);
    a.b = b;
    a.A |= g;
    return a;
  }
  l = this.b[2 * k];
  g = this.b[2 * k + 1];
  if (null == l) {
    return l = g.ra(a, b + 5, c, d, e, f), l === g ? this : Se(this, a, 2 * k + 1, l);
  }
  if (Pe(d, l)) {
    return e === g ? this : Se(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Ze ? Ze(a, f, l, g, c, d, e) : $e.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ba(a);
  a.b[e] = null;
  a.b[k] = d;
  return a;
};
h.qa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = fd(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = fd(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Xe.qa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.b[d] ? Xe.qa(a + 5, Wb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Ye(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Rc(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Rc(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new Te(null, this.A | f, a);
  }
  var l = this.b[2 * g], f = this.b[2 * g + 1];
  if (null == l) {
    return k = f.qa(a + 5, b, c, d, e), k === f ? this : new Te(null, this.A, Qe(this.b, 2 * g + 1, k));
  }
  if (Pe(c, l)) {
    return d === f ? this : new Te(null, this.A, Qe(this.b, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  k = this.b;
  a += 5;
  a = af ? af(a, l, f, b, c, d) : $e.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Te(null, e, d);
};
h.Ua = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = fd(this.A & d - 1), f = this.b[2 * e], g = this.b[2 * e + 1];
  return null == f ? (a = g.Ua(a + 5, b, c), a === g ? this : null != a ? new Te(null, this.A, Qe(this.b, 2 * e + 1, a)) : this.A === d ? null : new Te(null, this.A ^ d, Re(this.b, e))) : Pe(c, f) ? new Te(null, this.A ^ d, Re(this.b, e)) : this;
};
var Xe = new Te(null, 0, []);
function Ye(a, b, c) {
  this.m = a;
  this.d = b;
  this.b = c;
}
h = Ye.prototype;
h.Ba = function(a) {
  return a === this.m ? this : new Ye(a, this.d, Ga(this.b));
};
h.Ta = function() {
  var a = this.b;
  return bf ? bf(a) : cf.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
h.ra = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if (null == k) {
    return a = Se(this, a, g, Xe.ra(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.ra(a, b + 5, c, d, e, f);
  return b === k ? this : Se(this, a, g, b);
};
h.qa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if (null == g) {
    return new Ye(null, this.d + 1, Qe(this.b, f, Xe.qa(a + 5, b, c, d, e)));
  }
  a = g.qa(a + 5, b, c, d, e);
  return a === g ? this : new Ye(null, this.d, Qe(this.b, f, a));
};
h.Ua = function(a, b, c) {
  var d = b >>> a & 31, e = this.b[d];
  if (null != e) {
    a = e.Ua(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.d) {
          a: {
            e = this.b;
            a = e.length;
            b = Array(2 * (this.d - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Te(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Ye(null, this.d - 1, Qe(this.b, d, a));
        }
      } else {
        d = new Ye(null, this.d, Qe(this.b, d, a));
      }
    }
    return d;
  }
  return this;
};
function df(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Pe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ef(a, b, c, d) {
  this.m = a;
  this.ua = b;
  this.d = c;
  this.b = d;
}
h = ef.prototype;
h.Ba = function(a) {
  if (a === this.m) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Rc(this.b, 0, b, 0, 2 * this.d);
  return new ef(a, this.ua, this.d, b);
};
h.Ta = function() {
  var a = this.b;
  return Ue ? Ue(a) : We.call(null, a);
};
h.Ca = function(a, b, c, d) {
  a = df(this.b, this.d, c);
  return 0 > a ? d : Pe(c, this.b[a]) ? this.b[a + 1] : d;
};
h.ra = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = df(this.b, this.d, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ba(a), a.b[b] = d, a.b[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      Rc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.m ? (this.b = b, this.d = d, a = this) : a = new ef(this.m, this.ua, d, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Se(this, a, b + 1, e);
  }
  return(new Te(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).ra(a, b, c, d, e, f);
};
h.qa = function(a, b, c, d, e) {
  return b === this.ua ? (a = df(this.b, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Rc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new ef(null, this.ua, this.d + 1, b)) : dc.c(this.b[a], d) ? this : new ef(null, this.ua, this.d, Qe(this.b, a + 1, d))) : (new Te(null, 1 << (this.ua >>> a & 31), [null, this])).qa(a, b, c, d, e);
};
h.Ua = function(a, b, c) {
  a = df(this.b, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new ef(null, this.ua, this.d - 1, Re(this.b, ed(a, 2)));
};
function $e() {
  switch(arguments.length) {
    case 6:
      return af(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ze(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function af(a, b, c, d, e, f) {
  var g = Wb(b);
  if (g === d) {
    return new ef(null, g, 2, [b, c, e, f]);
  }
  var k = new Oe;
  return Xe.qa(a, g, b, c, k).qa(a, d, e, f, k);
}
function Ze(a, b, c, d, e, f, g) {
  var k = Wb(c);
  if (k === e) {
    return new ef(null, k, 2, [c, d, f, g]);
  }
  var l = new Oe;
  return Xe.ra(a, b, k, c, d, l).ra(a, b, e, f, g, l);
}
function ff(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.n = e;
  this.i = 32374860;
  this.s = 0;
}
h = ff.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return null == this.v ? new P(null, 2, 5, Q, [this.xa[this.j], this.xa[this.j + 1]], null) : G(this.v);
};
h.la = function() {
  if (null == this.v) {
    var a = this.xa, b = this.j + 2;
    return gf ? gf(a, b, null) : We.call(null, a, b, null);
  }
  var a = this.xa, b = this.j, c = H(this.v);
  return gf ? gf(a, b, c) : We.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new ff(b, this.xa, this.j, this.v, this.n);
};
h.I = function(a, b) {
  return uc(b, this);
};
ff.prototype[Ea] = function() {
  return fc(this);
};
function We() {
  switch(arguments.length) {
    case 1:
      return Ue(arguments[0]);
    case 3:
      return gf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ue(a) {
  return gf(a, 0, null);
}
function gf(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new ff(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (w(d) && (d = d.Ta(), w(d))) {
          return new ff(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new ff(null, a, b, c, null);
  }
}
function hf(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.n = e;
  this.i = 32374860;
  this.s = 0;
}
h = hf.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return G(this.v);
};
h.la = function() {
  var a = this.xa, b = this.j, c = H(this.v);
  return jf ? jf(null, a, b, c) : cf.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new hf(b, this.xa, this.j, this.v, this.n);
};
h.I = function(a, b) {
  return uc(b, this);
};
hf.prototype[Ea] = function() {
  return fc(this);
};
function cf() {
  switch(arguments.length) {
    case 1:
      return bf(arguments[0]);
    case 4:
      return jf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function bf(a) {
  return jf(null, a, 0, null);
}
function jf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (w(e) && (e = e.Ta(), w(e))) {
          return new hf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new hf(a, b, c, d, null);
  }
}
function kf(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.n = f;
  this.i = 16123663;
  this.s = 8196;
}
h = kf.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return fc(Ge.a ? Ge.a(this) : Ge.call(null, this));
};
h.entries = function() {
  return Ce(C(this));
};
h.values = function() {
  return fc(He.a ? He.a(this) : He.call(null, this));
};
h.has = function(a) {
  return Vc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = J(f, 0), f = J(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Pc(b) ? (c = Db(b), b = Eb(b), g = c, d = Bc(c), c = g) : (c = G(b), g = J(c, 0), c = f = J(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Wb(b), b, c);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = jc(this);
};
h.q = function(a, b) {
  return Ae(this, b);
};
h.Fa = function() {
  return new lf({}, this.root, this.d, this.ma, this.na);
};
h.M = function() {
  return kb(Ke, this.h);
};
h.nb = function(a, b) {
  if (null == b) {
    return this.ma ? new kf(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ua(0, Wb(b), b);
  return c === this.root ? this : new kf(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new kf(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Oe;
  b = (null == this.root ? Xe : this.root).qa(0, Wb(b), b, c, a);
  return b === this.root ? this : new kf(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Ta() : null;
    return this.ma ? uc(new P(null, 2, 5, Q, [null, this.na], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new kf(b, this.d, this.root, this.ma, this.na, this.n);
};
h.I = function(a, b) {
  if (Oc(b)) {
    return Va(this, B.c(b, 0), B.c(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Oc(e)) {
      c = Va(c, B.c(e, 0), B.c(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.da(null, c);
      case 3:
        return this.G(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.da(null, c);
  };
  a.g = function(a, c, d) {
    return this.G(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
var Ke = new kf(null, 0, null, !1, null, kc);
function Fc(a, b) {
  for (var c = a.length, d = 0, e = xb(Ke);;) {
    if (d < c) {
      var f = d + 1, e = e.Ia(null, a[d], b[d]), d = f
    } else {
      return zb(e);
    }
  }
}
kf.prototype[Ea] = function() {
  return fc(this);
};
function lf(a, b, c, d, e) {
  this.m = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.s = 56;
}
function mf(a, b) {
  if (a.m) {
    if (b ? b.i & 2048 || b.Ab || (b.i ? 0 : y(Ya, b)) : y(Ya, b)) {
      return nf(a, Le.a ? Le.a(b) : Le.call(null, b), Me.a ? Me.a(b) : Me.call(null, b));
    }
    for (var c = C(b), d = a;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = nf(d, function() {
          var a = f;
          return Le.a ? Le.a(a) : Le.call(null, a);
        }(), function() {
          var a = f;
          return Me.a ? Me.a(a) : Me.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function nf(a, b, c) {
  if (a.m) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Oe;
      b = (null == a.root ? Xe : a.root).ra(a.m, 0, Wb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = lf.prototype;
h.P = function() {
  if (this.m) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return null == b ? this.ma ? this.na : null : null == this.root ? null : this.root.Ca(0, Wb(b), b);
};
h.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Wb(b), b, c);
};
h.Ra = function(a, b) {
  return mf(this, b);
};
h.Sa = function() {
  var a;
  if (this.m) {
    this.m = null, a = new kf(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ia = function(a, b, c) {
  return nf(this, b, c);
};
var Nd = function Nd() {
  return Nd.k(0 < arguments.length ? new $b(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Nd.k = function(a) {
  for (var b = C(a), c = xb(Ke);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = Ab(c, d, b), b = a;
    } else {
      return zb(c);
    }
  }
};
Nd.u = 0;
Nd.r = function(a) {
  return Nd.k(C(a));
};
function of(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = of.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new of(a, this.ka);
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.ka);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).$a(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new of(a, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new of(this.ja, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
of.prototype[Ea] = function() {
  return fc(this);
};
function Ge(a) {
  return(a = C(a)) ? new of(a, null) : null;
}
function Le(a) {
  return Za(a);
}
function pf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = pf.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new pf(a, this.ka);
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.ka);
};
h.N = function(a, b) {
  return Wc(b, this);
};
h.O = function(a, b, c) {
  return Zc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).ab(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.bb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new pf(a, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new pf(this.ja, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
pf.prototype[Ea] = function() {
  return fc(this);
};
function He(a) {
  return(a = C(a)) ? new pf(a, null) : null;
}
function Me(a) {
  return ab(a);
}
function md(a) {
  if (a && (a.s & 4096 || a.Cb)) {
    return a.Pa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function qf(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
qf.prototype.hb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
qf.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function rf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.n = e;
  this.i = 32375006;
  this.s = 8192;
}
h = rf.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.F = function(a, b) {
  if (b < Ka(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ha = function(a, b, c) {
  return b < Ka(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Oa = function() {
  return new qf(this.start, this.end, this.step);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new rf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new rf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.P = function() {
  if (Ca(qb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.c ? b.c(c, d) : b.call(null, c, d);
      a += this.step;
    } else {
      return c;
    }
  }
};
h.fa = function() {
  return null == qb(this) ? null : this.start;
};
h.la = function() {
  return null != qb(this) ? new rf(this.h, this.start + this.step, this.end, this.step, null) : cc;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new rf(b, this.start, this.end, this.step, this.n);
};
h.I = function(a, b) {
  return uc(b, this);
};
rf.prototype[Ea] = function() {
  return fc(this);
};
function sf() {
  var a = S, b = T;
  return function() {
    function c(c, d, e) {
      return new P(null, 2, 5, Q, [a.g ? a.g(c, d, e) : a.call(null, c, d, e), b.g ? b.g(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new P(null, 2, 5, Q, [a.c ? a.c(c, d) : a.call(null, c, d), b.c ? b.c(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new P(null, 2, 5, Q, [a.a ? a.a(c) : a.call(null, c), b.a ? b.a(c) : b.call(null, c)], null);
    }
    function f() {
      return new P(null, 2, 5, Q, [a.l ? a.l() : a.call(null), b.l ? b.l() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new $b(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new P(null, 2, 5, Q, [Dd(a, c, e, f, g), Dd(b, c, e, f, g)], null);
      }
      c.u = 3;
      c.r = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, r) {
      switch(arguments.length) {
        case 0:
          return f.call(this);
        case 1:
          return e.call(this, a);
        case 2:
          return d.call(this, a, b);
        case 3:
          return c.call(this, a, b, g);
        default:
          var t = null;
          if (3 < arguments.length) {
            for (var t = 0, u = Array(arguments.length - 3);t < u.length;) {
              u[t] = arguments[t + 3], ++t;
            }
            t = new $b(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.l = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function tf(a, b, c, d, e, f, g) {
  var k = pa;
  pa = null == pa ? null : pa - 1;
  try {
    if (null != pa && 0 > pa) {
      return sb(a, "#");
    }
    sb(a, c);
    if (0 === za.a(f)) {
      C(g) && sb(a, function() {
        var a = uf.a(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (C(g)) {
        var l = G(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var p = H(g), q = za.a(f) - 1;;) {
        if (!p || null != q && 0 === q) {
          C(p) && 0 === q && (sb(a, d), sb(a, function() {
            var a = uf.a(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          sb(a, d);
          var r = G(p);
          c = a;
          g = f;
          b.g ? b.g(r, c, g) : b.call(null, r, c, g);
          var t = H(p);
          c = q - 1;
          p = t;
          q = c;
        }
      }
    }
    return sb(a, e);
  } finally {
    pa = k;
  }
}
function vf(a, b) {
  for (var c = C(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f);
      sb(a, g);
      f += 1;
    } else {
      if (c = C(c)) {
        d = c, Pc(d) ? (c = Db(d), e = Eb(d), d = c, g = Bc(c), c = e, e = g) : (g = G(d), sb(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var wf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function xf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return wf[a];
  })), A('"')].join("");
}
function yf(a, b, c) {
  if (null == a) {
    return sb(b, "nil");
  }
  if (void 0 === a) {
    return sb(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = L(c, xa);
    return w(b) ? (b = a ? a.i & 131072 || a.Bb ? !0 : a.i ? !1 : y(gb, a) : y(gb, a)) ? Lc(a) : b : b;
  }())) {
    sb(b, "^");
    var d = Lc(a);
    zf.g ? zf.g(d, b, c) : zf.call(null, d, b, c);
    sb(b, " ");
  }
  return null == a ? sb(b, "nil") : a.Kb ? a.Vb(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.C(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? sb(b, "" + A(a)) : null != a && a.constructor === Object ? (sb(b, "#js "), d = Sd.c(function(b) {
    return new P(null, 2, 5, Q, [ld.a(b), a[b]], null);
  }, Qc(a)), Af.p ? Af.p(d, zf, b, c) : Af.call(null, d, zf, b, c)) : Aa(a) ? tf(b, zf, "#js [", " ", "]", c, a) : w("string" == typeof a) ? w(va.a(c)) ? sb(b, xf(a)) : sb(b, a) : Hc(a) ? vf(b, wc(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (Bc(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, vf(b, wc(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? vf(b, wc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : y(tb, a)) : y(tb, a)) ? ub(a, b, c) : vf(b, wc(["#\x3c", "" + A(a), "\x3e"], 0));
}
function zf(a, b, c) {
  var d = Bf.a(c);
  return w(d) ? (c = Ec.g(c, Cf, yf), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : yf(a, b, c);
}
function Qd() {
  var a = 0 < arguments.length ? new $b(Array.prototype.slice.call(arguments, 0), 0) : null, b = ta(), c;
  if (Mc(a)) {
    c = "";
  } else {
    c = A;
    var d = b, b = new ma;
    a: {
      var e = a, a = new Lb(b);
      zf(G(e), a, d);
      for (var e = C(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.F(null, k);
          sb(a, " ");
          zf(l, a, d);
          k += 1;
        } else {
          if (e = C(e)) {
            f = e, Pc(f) ? (e = Db(f), g = Eb(f), f = e, l = Bc(e), e = g, g = l) : (l = G(f), sb(a, " "), zf(l, a, d), e = H(f), f = null, g = 0), k = 0;
          } else {
            break a;
          }
        }
      }
    }
    c = "" + c(b);
  }
  return c;
}
function Af(a, b, c, d) {
  return tf(c, function(a, c, d) {
    var k = Za(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    sb(c, " ");
    a = ab(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, C(a));
}
$b.prototype.ea = !0;
$b.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
nd.prototype.ea = !0;
nd.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
ff.prototype.ea = !0;
ff.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
Ee.prototype.ea = !0;
Ee.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
qe.prototype.ea = !0;
qe.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
kd.prototype.ea = !0;
kd.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
kf.prototype.ea = !0;
kf.prototype.C = function(a, b, c) {
  return Af(this, zf, b, c);
};
hf.prototype.ea = !0;
hf.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
ue.prototype.ea = !0;
ue.prototype.C = function(a, b, c) {
  return tf(b, zf, "[", " ", "]", c, this);
};
rd.prototype.ea = !0;
rd.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
Ld.prototype.ea = !0;
Ld.prototype.C = function(a, b, c) {
  sb(b, "#\x3cAtom: ");
  zf(this.state, b, c);
  return sb(b, "\x3e");
};
pf.prototype.ea = !0;
pf.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
P.prototype.ea = !0;
P.prototype.C = function(a, b, c) {
  return tf(b, zf, "[", " ", "]", c, this);
};
id.prototype.ea = !0;
id.prototype.C = function(a, b) {
  return sb(b, "()");
};
n.prototype.ea = !0;
n.prototype.C = function(a, b, c) {
  return Af(this, zf, b, c);
};
rf.prototype.ea = !0;
rf.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
of.prototype.ea = !0;
of.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
hd.prototype.ea = !0;
hd.prototype.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
function Df(a, b) {
  return Xc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Ef(a) {
  a *= Math.random.l ? Math.random.l() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Ff = null;
function Gf() {
  if (null == Ff) {
    var a = new n(null, 3, [Hf, R, If, R, Jf, R], null);
    Ff = O ? O(a) : Md.call(null, a);
  }
  return Ff;
}
function Kf(a, b, c) {
  var d = dc.c(b, c);
  if (!d && !(d = Vc(Jf.a(a).call(null, b), c)) && (d = Oc(c)) && (d = Oc(b))) {
    if (d = Bc(c) === Bc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Bc(c)) {
          e = Kf(a, function() {
            var a = f;
            return b.a ? b.a(a) : b.call(null, a);
          }(), function() {
            var a = f;
            return c.a ? c.a(a) : c.call(null, a);
          }()), f = d = f + 1;
        } else {
          return e;
        }
      }
    } else {
      return d;
    }
  } else {
    return d;
  }
}
function Lf(a) {
  var b;
  b = Gf();
  b = I.a ? I.a(b) : I.call(null, b);
  return Fd(L(Hf.a(b), a));
}
function Mf(a, b, c, d) {
  Rd.c(a, function() {
    return I.a ? I.a(b) : I.call(null, b);
  });
  Rd.c(c, function() {
    return I.a ? I.a(d) : I.call(null, d);
  });
}
var Nf = function Nf(b, c, d) {
  var e = (I.a ? I.a(d) : I.call(null, d)).call(null, b), e = w(w(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Lf(c);;) {
      if (0 < Bc(e)) {
        Nf(b, G(e), d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Lf(b);;) {
      if (0 < Bc(e)) {
        Nf(G(e), c, d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function Of(a, b, c) {
  c = Nf(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = Kf;
    var d;
    d = Gf();
    d = I.a ? I.a(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Pf = function Pf(b, c, d, e, f, g, k) {
  var l = Xc(function(e, g) {
    var k = J(g, 0);
    J(g, 1);
    if (Kf(I.a ? I.a(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Of(k, G(e), f);
      l = w(l) ? g : e;
      if (!w(Of(G(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(G(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.a ? I.a(e) : I.call(null, e));
  if (w(l)) {
    if (dc.c(I.a ? I.a(k) : I.call(null, k), I.a ? I.a(d) : I.call(null, d))) {
      return Rd.p(g, Ec, c, G(H(l))), G(H(l));
    }
    Mf(g, e, k, d);
    return Pf(b, c, d, e, f, g, k);
  }
  return null;
};
function U(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function Qf(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.f = b;
  this.Lb = c;
  this.ib = d;
  this.Va = e;
  this.Mb = f;
  this.jb = g;
  this.Wa = k;
  this.i = 4194305;
  this.s = 4352;
}
h = Qf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) {
    a = this;
    var na = Ed(a.f, b, c, d, e, wc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z], 0)), Ig = V(this, na);
    w(Ig) || U(a.name, na);
    return Ed(Ig, b, c, d, e, wc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) {
    a = this;
    var Z = a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N), na = V(this, Z);
    w(na) || U(a.name, Z);
    return na.$ ? na.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : na.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) {
    a = this;
    var N = a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K), Z = V(this, N);
    w(Z) || U(a.name, N);
    return Z.Z ? Z.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : Z.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K);
  }
  function d(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) {
    a = this;
    var K = a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D), N = V(this, K);
    w(N) || U(a.name, K);
    return N.Y ? N.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : N.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D);
  }
  function e(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) {
    a = this;
    var D = a.f.X ? a.f.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E), K = V(this, D);
    w(K) || U(a.name, D);
    return K.X ? K.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : K.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E);
  }
  function f(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) {
    a = this;
    var E = a.f.W ? a.f.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F), D = V(this, E);
    w(D) || U(a.name, E);
    return D.W ? D.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : D.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F);
  }
  function g(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) {
    a = this;
    var F = a.f.V ? a.f.V(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x), E = V(this, F);
    w(E) || U(a.name, F);
    return E.V ? E.V(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : E.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v) {
    a = this;
    var x = a.f.U ? a.f.U(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v), F = V(this, x);
    w(F) || U(a.name, x);
    return F.U ? F.U(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : F.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, q, p, r, t, u) {
    a = this;
    var v = a.f.T ? a.f.T(b, c, d, e, f, g, k, l, q, p, r, t, u) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u), x = V(this, v);
    w(x) || U(a.name, v);
    return x.T ? x.T(b, c, d, e, f, g, k, l, q, p, r, t, u) : x.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, q, p, r, t) {
    a = this;
    var u = a.f.S ? a.f.S(b, c, d, e, f, g, k, l, q, p, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t), v = V(this, u);
    w(v) || U(a.name, u);
    return v.S ? v.S(b, c, d, e, f, g, k, l, q, p, r, t) : v.call(null, b, c, d, e, f, g, k, l, q, p, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, q, p, r) {
    a = this;
    var t = a.f.R ? a.f.R(b, c, d, e, f, g, k, l, q, p, r) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r), u = V(this, t);
    w(u) || U(a.name, t);
    return u.R ? u.R(b, c, d, e, f, g, k, l, q, p, r) : u.call(null, b, c, d, e, f, g, k, l, q, p, r);
  }
  function r(a, b, c, d, e, f, g, k, l, q, p) {
    a = this;
    var r = a.f.Q ? a.f.Q(b, c, d, e, f, g, k, l, q, p) : a.f.call(null, b, c, d, e, f, g, k, l, q, p), t = V(this, r);
    w(t) || U(a.name, r);
    return t.Q ? t.Q(b, c, d, e, f, g, k, l, q, p) : t.call(null, b, c, d, e, f, g, k, l, q, p);
  }
  function t(a, b, c, d, e, f, g, k, l, q) {
    a = this;
    var p = a.f.ca ? a.f.ca(b, c, d, e, f, g, k, l, q) : a.f.call(null, b, c, d, e, f, g, k, l, q), r = V(this, p);
    w(r) || U(a.name, p);
    return r.ca ? r.ca(b, c, d, e, f, g, k, l, q) : r.call(null, b, c, d, e, f, g, k, l, q);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    var q = a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l), p = V(this, q);
    w(p) || U(a.name, q);
    return p.ba ? p.ba(b, c, d, e, f, g, k, l) : p.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.f.aa ? a.f.aa(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k), q = V(this, l);
    w(q) || U(a.name, l);
    return q.aa ? q.aa(b, c, d, e, f, g, k) : q.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    var k = a.f.J ? a.f.J(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g), l = V(this, k);
    w(l) || U(a.name, k);
    return l.J ? l.J(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    var g = a.f.t ? a.f.t(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = V(this, g);
    w(k) || U(a.name, g);
    return k.t ? k.t(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    var f = a.f.p ? a.f.p(b, c, d, e) : a.f.call(null, b, c, d, e), g = V(this, f);
    w(g) || U(a.name, f);
    return g.p ? g.p(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.f.g ? a.f.g(b, c, d) : a.f.call(null, b, c, d), f = V(this, e);
    w(f) || U(a.name, e);
    return f.g ? f.g(b, c, d) : f.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    var d = a.f.c ? a.f.c(b, c) : a.f.call(null, b, c), e = V(this, d);
    w(e) || U(a.name, d);
    return e.c ? e.c(b, c) : e.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    var c = a.f.a ? a.f.a(b) : a.f.call(null, b), d = V(this, c);
    w(d) || U(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function na(a) {
    a = this;
    var b = a.f.l ? a.f.l() : a.f.call(null), c = V(this, b);
    w(c) || U(a.name, b);
    return c.l ? c.l() : c.call(null);
  }
  var D = null, D = function(D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb, Rb, yc, xd, Ve) {
    switch(arguments.length) {
      case 1:
        return na.call(this, D);
      case 2:
        return Z.call(this, D, Y);
      case 3:
        return N.call(this, D, Y, aa);
      case 4:
        return K.call(this, D, Y, aa, ba);
      case 5:
        return F.call(this, D, Y, aa, ba, ea);
      case 6:
        return E.call(this, D, Y, aa, ba, ea, ia);
      case 7:
        return x.call(this, D, Y, aa, ba, ea, ia, ja);
      case 8:
        return v.call(this, D, Y, aa, ba, ea, ia, ja, la);
      case 9:
        return u.call(this, D, Y, aa, ba, ea, ia, ja, la, qa);
      case 10:
        return t.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa);
      case 11:
        return r.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa);
      case 12:
        return q.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba);
      case 13:
        return p.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja);
      case 14:
        return l.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa);
      case 15:
        return k.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc);
      case 16:
        return g.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a);
      case 17:
        return f.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib);
      case 18:
        return e.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb);
      case 19:
        return d.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb, Rb);
      case 20:
        return c.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb, Rb, yc);
      case 21:
        return b.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb, Rb, yc, xd);
      case 22:
        return a.call(this, D, Y, aa, ba, ea, ia, ja, la, qa, sa, wa, Ba, Ja, Pa, bc, $a, ib, wb, Rb, yc, xd, Ve);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = na;
  D.c = Z;
  D.g = N;
  D.p = K;
  D.t = F;
  D.J = E;
  D.aa = x;
  D.ba = v;
  D.ca = u;
  D.Q = t;
  D.R = r;
  D.S = q;
  D.T = p;
  D.U = l;
  D.V = k;
  D.W = g;
  D.X = f;
  D.Y = e;
  D.Z = d;
  D.$ = c;
  D.mb = b;
  D.Na = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.l = function() {
  var a = this.f.l ? this.f.l() : this.f.call(null), b = V(this, a);
  w(b) || U(this.name, a);
  return b.l ? b.l() : b.call(null);
};
h.a = function(a) {
  var b = this.f.a ? this.f.a(a) : this.f.call(null, a), c = V(this, b);
  w(c) || U(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.c = function(a, b) {
  var c = this.f.c ? this.f.c(a, b) : this.f.call(null, a, b), d = V(this, c);
  w(d) || U(this.name, c);
  return d.c ? d.c(a, b) : d.call(null, a, b);
};
h.g = function(a, b, c) {
  var d = this.f.g ? this.f.g(a, b, c) : this.f.call(null, a, b, c), e = V(this, d);
  w(e) || U(this.name, d);
  return e.g ? e.g(a, b, c) : e.call(null, a, b, c);
};
h.p = function(a, b, c, d) {
  var e = this.f.p ? this.f.p(a, b, c, d) : this.f.call(null, a, b, c, d), f = V(this, e);
  w(f) || U(this.name, e);
  return f.p ? f.p(a, b, c, d) : f.call(null, a, b, c, d);
};
h.t = function(a, b, c, d, e) {
  var f = this.f.t ? this.f.t(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), g = V(this, f);
  w(g) || U(this.name, f);
  return g.t ? g.t(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.J = function(a, b, c, d, e, f) {
  var g = this.f.J ? this.f.J(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = V(this, g);
  w(k) || U(this.name, g);
  return k.J ? k.J(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  var k = this.f.aa ? this.f.aa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g), l = V(this, k);
  w(l) || U(this.name, k);
  return l.aa ? l.aa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ba = function(a, b, c, d, e, f, g, k) {
  var l = this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k), p = V(this, l);
  w(p) || U(this.name, l);
  return p.ba ? p.ba(a, b, c, d, e, f, g, k) : p.call(null, a, b, c, d, e, f, g, k);
};
h.ca = function(a, b, c, d, e, f, g, k, l) {
  var p = this.f.ca ? this.f.ca(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l), q = V(this, p);
  w(q) || U(this.name, p);
  return q.ca ? q.ca(a, b, c, d, e, f, g, k, l) : q.call(null, a, b, c, d, e, f, g, k, l);
};
h.Q = function(a, b, c, d, e, f, g, k, l, p) {
  var q = this.f.Q ? this.f.Q(a, b, c, d, e, f, g, k, l, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, p), r = V(this, q);
  w(r) || U(this.name, q);
  return r.Q ? r.Q(a, b, c, d, e, f, g, k, l, p) : r.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.R = function(a, b, c, d, e, f, g, k, l, p, q) {
  var r = this.f.R ? this.f.R(a, b, c, d, e, f, g, k, l, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q), t = V(this, r);
  w(t) || U(this.name, r);
  return t.R ? t.R(a, b, c, d, e, f, g, k, l, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.S = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  var t = this.f.S ? this.f.S(a, b, c, d, e, f, g, k, l, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r), u = V(this, t);
  w(u) || U(this.name, t);
  return u.S ? u.S(a, b, c, d, e, f, g, k, l, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.T = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  var u = this.f.T ? this.f.T(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t), v = V(this, u);
  w(v) || U(this.name, u);
  return v.T ? v.T(a, b, c, d, e, f, g, k, l, p, q, r, t) : v.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.U = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  var v = this.f.U ? this.f.U(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u), x = V(this, v);
  w(x) || U(this.name, v);
  return x.U ? x.U(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : x.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.V = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  var x = this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v), E = V(this, x);
  w(E) || U(this.name, x);
  return E.V ? E.V(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : E.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  var E = this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x), F = V(this, E);
  w(F) || U(this.name, E);
  return F.W ? F.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : F.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  var F = this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E), K = V(this, F);
  w(K) || U(this.name, F);
  return K.X ? K.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : K.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) {
  var K = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F), N = V(this, K);
  w(N) || U(this.name, K);
  return N.Y ? N.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : N.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) {
  var N = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K), Z = V(this, N);
  w(Z) || U(this.name, N);
  return Z.Z ? Z.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : Z.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) {
  var Z = this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N), na = V(this, Z);
  w(na) || U(this.name, Z);
  return na.$ ? na.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : na.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
};
h.mb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) {
  var na = Ed(this.f, a, b, c, d, wc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z], 0)), D = V(this, na);
  w(D) || U(this.name, na);
  return Ed(D, a, b, c, d, wc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z], 0));
};
function Rf(a, b, c) {
  Rd.p(a.Va, Ec, b, c);
  Mf(a.jb, a.Va, a.Wa, a.ib);
}
function V(a, b) {
  dc.c(function() {
    var b = a.Wa;
    return I.a ? I.a(b) : I.call(null, b);
  }(), function() {
    var b = a.ib;
    return I.a ? I.a(b) : I.call(null, b);
  }()) || Mf(a.jb, a.Va, a.Wa, a.ib);
  var c = function() {
    var b = a.jb;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = Pf(a.name, b, a.ib, a.Va, a.Mb, a.jb, a.Wa);
  return w(c) ? c : function() {
    var b = a.Va;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, a.Lb);
}
h.Pa = function() {
  return Gb(this.name);
};
h.Qa = function() {
  return Hb(this.name);
};
h.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
var Sf = new M(null, "bullets", "bullets", 1734809024), T = new M(null, "p2", "p2", 905500641), Tf = new M(null, "r", "r", -471384190), xa = new M(null, "meta", "meta", 1499536964), Uf = new M(null, "selected", "selected", 574897764), Vf = new M(null, "enemy-spawn", "enemy-spawn", 1471569540), ya = new M(null, "dup", "dup", 556298533), Wf = new M(null, "dir", "dir", 1734754661), Xf = new M(null, "ammo", "ammo", -1520726489), Od = new M(null, "validator", "validator", -1966190681), Yf = new M(null, 
"default", "default", -1987822328), Zf = new M(null, "w", "w", 354169001), $f = new M(null, "th", "th", -545608566), ag = new M(null, "th1", "th1", 583362347), bg = new M(null, "pos", "pos", -864607220), W = new M(null, "type", "type", 1174270348), cg = new M(null, "th2", "th2", 1996173036), dg = new M(null, "cooldown", "cooldown", -1178127572), Cf = new M(null, "fallback-impl", "fallback-impl", -1501286995), ua = new M(null, "flush-on-newline", "flush-on-newline", -151457939), eg = new M(null, "segments", 
"segments", 1937535949), S = new M(null, "p1", "p1", -936759954), fg = new M(null, "targets", "targets", 2014963406), gg = new M(null, "walls", "walls", -268788818), hg = new M(null, "chunks", "chunks", 83720431), If = new M(null, "descendants", "descendants", 1824886031), ig = new M(null, "k", "k", -2146297393), jg = new M("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Jf = new M(null, "ancestors", "ancestors", -776045424), kg = new M(null, "level", "level", 1290497552), 
lg = new M(null, "turn", "turn", 75759344), va = new M(null, "readably", "readably", 1129599760), uf = new M(null, "more-marker", "more-marker", -14717935), mg = new M(null, "head", "head", -771383919), ng = new M(null, "c", "c", -1763192079), og = new M(null, "stop", "stop", -2140911342), za = new M(null, "print-length", "print-length", 1931866356), pg = new M(null, "tail", "tail", -1146023564), qg = new M(null, "id", "id", -1388402092), rg = new M(null, "score", "score", -1963588780), sg = new M(null, 
"terrain", "terrain", 704966005), Hf = new M(null, "parents", "parents", -2027538891), tg = new M(null, "length", "length", 588987862), ug = new M(null, "b", "b", 1482224470), vg = new M(null, "right", "right", -452581833), wg = new M(null, "health", "health", -295520649), xg = new M(null, "player", "player", -97687400), yg = new M(null, "target-length", "target-length", 208661657), zg = new M(null, "enemies", "enemies", 2114285722), Ag = new M(null, "hierarchy", "hierarchy", -1053470341), Bf = new M(null, 
"alt-impl", "alt-impl", 670969595), Bg = new M(null, "barrel-change", "barrel-change", -347000069), Cg = new M(null, "temperature", "temperature", 899018429), X = new M("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), Dg = new M(null, "left", "left", -399115937);
var Eg = function Eg(b, c, d) {
  if (b ? b.fb : b) {
    return b.fb(b, c, d);
  }
  var e;
  e = Eg[m(null == b ? null : b)];
  if (!e && (e = Eg._, !e)) {
    throw z("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function Fg(a) {
  return 33 !== a.b.length;
}
function Gg(a) {
  a = a.b[32];
  return a[a[32] - 1];
}
function Hg(a, b, c) {
  for (;;) {
    if (w(Fg(a))) {
      return c >> 5 > 1 << b;
    }
    var d = a.b[32];
    c = d[32];
    var e = 32 === c;
    if (e) {
      if (e = 5 === b) {
        return e;
      }
      b -= 5;
      d = d[31] - d[30] + 32;
      a = a.b[c - 1];
      c = d;
    } else {
      return e;
    }
  }
}
;function Jg(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.b;
      }
      if (w(Fg(c))) {
        for (c = c.b[a >> b & 31], b -= 5;;) {
          if (0 === b) {
            return c.b;
          }
          d = b - 5;
          c = c.b[a >> b & 31];
          b = d;
        }
      } else {
        d = c.b[32];
        a: {
          for (e = a >> b & 31;;) {
            if (a < d[e]) {
              break a;
            }
            e += 1;
          }
        }
        c = c.b[e];
        b -= 5;
        a = 0 < e ? a - d[e - 1] : a;
      }
    }
  } else {
    return de(e, a);
  }
}
function Kg(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Yd(b, f);
      f[0] = d;
      a = g;
      e += 5;
      d = a;
    }
  } else {
    for (e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Yd(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var Lg = function Lg(b, c, d, e, f) {
  if (w(Fg(e))) {
    for (var g = Ga(e.b), g = e = Yd(e.m, g);;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (w(l)) {
          l = Ga(l.b);
          l = Yd(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = Kg(f.b, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Ga(e.b);
    c = e.b[32];
    k = c[32] - 1;
    e = Yd(e.m, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], p = 0 < k ? c[k] - c[k - 1] : c[0], l = p !== 1 << b ? Lg(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = Kg(f.b, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, Mg = function Mg(b, c, d, e) {
  if (w(Fg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = Mg(b - 5, c, d, e.b[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Ga(e.b);
      e[f] = b;
      return Yd(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Ga(e.b);
    e[f] = null;
    return Yd(d, e);
  }
  var g = e.b[32];
  a: {
    for (f = c - 1 >> b & 31;;) {
      if (0 === (g[f + 1] | 0) || 31 === f) {
        break a;
      }
      f += 1;
    }
  }
  c = Ga(g);
  if (5 < b) {
    var k = e.b[f];
    b = Mg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    w(Fg(k)) ? (e = Ga(e.b), c[f] -= 32) : (g = Gg(k) - (w(b) ? Gg(b) : 0), e = Ga(e.b), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return Yd(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Ga(e.b);
  b = Ga(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return Yd(d, e);
}, Ng = function Ng(b, c, d, e) {
  if (w(Fg(c))) {
    for (var f = c = new Xd(c.m, Ga(c.b));;) {
      if (0 === b) {
        f.b[d & 31] = e;
        break;
      } else {
        var f = f.b, g = d >> b & 31, k;
        k = f[g];
        k = new Xd(k.m, Ga(k.b));
        f = f[g] = k;
        b -= 5;
      }
    }
    return c;
  }
  f = Ga(c.b);
  g = c.b[32];
  a: {
    for (k = d >> b & 31;;) {
      if (d < (g[k] | 0)) {
        break a;
      }
      k += 1;
    }
  }
  f[k] = Ng(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return Yd(c.m, f);
};
function Og(a, b) {
  if (b.m === a) {
    return b;
  }
  var c = Ga(b.b);
  33 === c.length && (c[32] = Ga(c[32]));
  return new Xd(a, c);
}
var Pg = function Pg(b, c, d, e, f) {
  e = Og(d, e);
  if (w(Fg(e))) {
    for (var g = e;;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = Kg(f.b, d, b - 5, f);
        } else {
          l = Og(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        }
      }
      break;
    }
  } else {
    c = e.b;
    g = e.b[32];
    k = g[32] - 1;
    if (5 === b) {
      l = null;
    } else {
      var l = Og(d, c[k]), p = 0 < k ? g[k] - g[k - 1] : g[0], l = p !== 1 << b ? Pg(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = Kg(f.b, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, Qg = function Qg(b, c, d, e, f) {
  d = Og(c, d);
  if (w(Fg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.b[e & 31] = f;
        break;
      } else {
        var g = g.b, k = e >> b & 31, l = Og(c, g[k]), g = g[k] = l;
        b -= 5;
      }
    }
  } else {
    g = d.b;
    k = d.b[32];
    a: {
      for (l = e >> b & 31;;) {
        if (e < (k[l] | 0)) {
          break a;
        }
        l += 1;
      }
    }
    g[l] = Qg(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var Rg = function Rg(b) {
  if (b ? b.gb : b) {
    return b.gb(b);
  }
  var c;
  c = Rg[m(null == b ? null : b)];
  if (!c && (c = Rg._, !c)) {
    throw z("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function Sg(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.n = f;
  this.i = 2179858668;
  this.s = 1536;
}
h = Sg.prototype;
h.toString = function() {
  return Mb(this);
};
h.C = function(a, b, c) {
  return tf(b, zf, "(", " ", ")", c, this);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Tg ? Tg(a, b, c, d) : Ug.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Fb(this);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = gd(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Kc(cc, this.h);
};
h.N = function(a, b) {
  return mc(re(this.D, this.j + this.w, Bc(this.D)), b);
};
h.O = function(a, b, c) {
  return nc(re(this.D, this.j + this.w, Bc(this.D)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Tg ? Tg(a, b, c, d) : Ug.call(null, a, b, c, d);
    return null == a ? cc : a;
  }
  return Eb(this);
};
h.K = function() {
  return this;
};
h.Ya = function() {
  var a = this.ga;
  return new qd(a, this.w, a.length);
};
h.Za = function() {
  var a = this.ga.length, b;
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Vg ? Vg(b, a, 0) : Ug.call(null, b, a, 0)) : b = null;
  return null == b ? cc : b;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return Wg ? Wg(c, d, e, f, b) : Ug.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Xa = function() {
  var a = this.ga.length, b;
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Vg ? Vg(b, a, 0) : Ug.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Ug() {
  switch(arguments.length) {
    case 3:
      return Vg(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Tg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Wg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Vg(a, b, c) {
  return new Sg(a, Jg(a.d, a.shift, a.root, a.o, b), b, c, null, null);
}
function Tg(a, b, c, d) {
  return new Sg(a, b, c, d, null, null);
}
function Wg(a, b, c, d, e) {
  return new Sg(a, b, c, d, e, null);
}
var Xg = function Xg(b, c, d) {
  if (0 === c) {
    var e = b.b;
    b = Array(d);
    Rc(e, 0, b, 0, d);
  } else {
    var f = Fg(b), g = Ca(f) ? b.b[32] : null, k = d - 1 >> c & 31, l = w(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), p = w(f) ? function() {
      var b = dd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.b, q = Xg(e[l], c - 5, p), r = 5 === c ? 32 === q.b.length : Fg(q);
    b = Array(w(w(f) ? r : f) ? 32 : 33);
    var t = w(r) ? function() {
      var b = dd(p, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? q.b.length : Gg(q);
    Rc(e, 0, b, 0, l);
    b[l] = q;
    if (Ca(w(f) ? r : f)) {
      e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      q = 1 << c;
      if (w(f)) {
        for (f = 0;;) {
          if (f < l) {
            e[f] = (f + 1) * q, f += 1;
          } else {
            break;
          }
        }
      } else {
        for (f = 0;;) {
          if (f < l) {
            e[f] = g[f], f += 1;
          } else {
            break;
          }
        }
      }
      e[l] = (0 < l ? e[l - 1] : 0) + t;
      e[32] = l + 1;
      b[32] = e;
    }
  }
  return Yd(null, b);
}, Yg = function Yg(b, c, d, e) {
  if (0 === c) {
    var f = b.b, g = f.length - d, k = Array(g);
    Rc(f, d, k, 0, g);
    return Yd(null, k);
  }
  var l = Fg(b), f = b.b, p = Ca(l) ? b.b[32] : null, q = d >> c & 31, r = w(l) ? q : function() {
    for (var b = q;;) {
      if (d < p[b]) {
        return b;
      }
      b += 1;
    }
  }(), k = w(l) ? function() {
    for (var b = r;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : p[32], t = Yg(f[r], c - 5, 0 < r ? d - (w(l) ? r * (1 << c) : p[r - 1]) : d, function() {
    var b = 1 << c, d = 0 < r ? e - (w(l) ? r * (1 << c) : p[r - 1]) : e;
    return b < d ? b : d;
  }()), g = k - r, g = null == t ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (w(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], v = 1 << c, x = 0, E = w(function() {
      var b = null == t;
      return b ? b : (b = 5 === c) ? b : Fg(t);
    }()) ? (1 << c) - (d >> c - 5 & 31) : Gg(t);;) {
      if (x < g) {
        u[x] = E, E += v, x += 1;
      } else {
        break;
      }
    }
    u[g - 1] = e - d;
  } else {
    for (k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], v = 0, x = r;;) {
      if (v < g) {
        u[v] = p[x] - d, x += 1, v += 1;
      } else {
        break;
      }
    }
  }
  u[32] = g;
  Rc(f, null == t ? r + 1 : r, k, 0, g);
  null != t && (k[0] = t);
  k[32] = u;
  return Yd(b.m, k);
};
function Zg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.h = e;
  this.n = f;
  this.i = 2315152159;
  this.s = 2052;
}
h = Zg.prototype;
h.toString = function() {
  return Mb(this);
};
h.da = function(a, b) {
  return B.g(this, b, null);
};
h.G = function(a, b, c) {
  return B.g(this, b, c);
};
h.F = function(a, b) {
  if (0 <= b && b < this.d) {
    var c = this.d - this.o.length;
    if (c <= b) {
      return this.o[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.b;
        return f[c >> e & 31];
      }
      if (w(Fg(d))) {
        for (f = d.b, d = c >> e & 31, f = f[d], e -= 5;;) {
          f = f.b;
          d = c >> e & 31;
          if (0 === e) {
            return f[d];
          }
          e -= 5;
          f = f[d];
        }
      } else {
        var f = d.b, g = d.b[32];
        a: {
          for (d = c >> e & 31;;) {
            if (c < g[d]) {
              break a;
            }
            d += 1;
          }
        }
        c = 0 === d ? c : c - g[d - 1];
        f = f[d];
        e -= 5;
        d = f;
      }
    }
  } else {
    return de(b, this.d);
  }
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? B.c(this, b) : c;
};
h.C = function(a, b, c) {
  return tf(b, zf, "[", " ", "]", c, this);
};
h.eb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.o.length;
    return b >= d ? (a = Array(this.o.length), b -= d, Rc(this.o, 0, a, 0, this.o.length), a[b] = c, new Zg(this.d, this.shift, this.root, a, this.h, null)) : new Zg(this.d, this.shift, Ng(this.shift, this.root, b, c), this.o, this.h, null);
  }
  return b === this.d ? Ma(this, c) : de(b, this.d);
};
h.gb = function() {
  return this;
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.$a = function() {
  return B.c(this, 0);
};
h.ab = function() {
  return B.c(this, 1);
};
h.Ga = function() {
  return 0 < this.d ? B.c(this, this.d - 1) : null;
};
h.Ha = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return kb(Ac, this.h);
  }
  if (1 < this.o.length) {
    var a = Array(this.o.length - 1);
    Rc(this.o, 0, a, 0, a.length);
    return new Zg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = Jg(this.d, this.shift, this.root, this.o, this.d - 2), b = Mg(this.shift, this.d - this.o.length, this.root.m, this.root);
  return null == b ? new Zg(this.d - 1, this.shift, Q, a, this.h, null) : 5 < this.shift && null == b.b[1] ? new Zg(this.d - 1, this.shift - 5, b.b[0], a, this.h, null) : new Zg(this.d - 1, this.shift, b, a, this.h, null);
};
h.B = function() {
  var a = this.n;
  return null != a ? a : this.n = a = gd(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.Fa = function() {
  var a = this.d, b = this.shift, c = new Xd({}, Ga(this.root.b)), d = this.o, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Rc(d, 0, e, 0, d.length);
  d = this.o.length;
  return $g.t ? $g.t(a, b, c, e, d) : $g.call(null, a, b, c, e, d);
};
h.M = function() {
  return Kc(Ac, this.h);
};
h.fb = function(a, b, c) {
  a = c - b;
  if (0 > b || c > this.d) {
    throw Error("vector index out of bounds");
  }
  if (b === c) {
    return null == this ? null : La(this);
  }
  if (b > c) {
    throw Error("start index greater than end index");
  }
  var d = this.d - this.o.length;
  if (b >= d) {
    return c = Array(a), Rc(this.o, b - d, c, 0, a), new Zg(a, 5, Q, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : Xg(this.root, this.shift, c);
  b = 0 === b ? f : Yg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Rc(this.o, 0, d, 0, c), c = d) : c = Jg(a, this.shift, b, [], a - 1);
  e = e ? b : Mg(this.shift, a, b.m, b);
  if (null == e) {
    return new Zg(a, 5, Q, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.b[1]) {
      b -= 5, e = e.b[0];
    } else {
      return new Zg(a, b, e, c, this.h, null);
    }
  }
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  return nc(this, b, c);
};
h.Ea = function(a, b, c) {
  return eb(this, b, c);
};
h.K = function() {
  return 0 === this.d ? null : 0 === this.d - this.o.length ? vc(this.o, 0) : Vg(this, 0, 0);
};
h.L = function(a, b) {
  return new Zg(this.d, this.shift, this.root, this.o, b, this.n);
};
h.I = function(a, b) {
  if (32 > this.o.length) {
    var c = this.o.length, d = Array(c + 1);
    Rc(this.o, 0, d, 0, c);
    d[c] = b;
    return new Zg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Yd(this.root.m, this.o);
  d = [null];
  d[0] = b;
  if (w(Hg(this.root, this.shift, this.d))) {
    if (w(Fg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Yd(this.root.m, e), g = e;
      g[0] = this.root;
      g[1] = Kg(this.o, this.root.m, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Yd(this.root.m, e), k = this.root.b[32][31];
      e[0] = this.root;
      e[1] = Kg(this.o, this.root.m, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new Zg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new Zg(this.d + 1, this.shift, Lg(this.shift, this.d, this.root.m, this.root, c), d, this.h, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.F(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.F(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
P.prototype.gb = function() {
  return new Zg(Bc(this), this.shift, this.root, this.o, Lc(this), null);
};
ue.prototype.gb = function() {
  var a = this.start, b = this.end;
  return Eg(Rg(this.oa), a, b);
};
function ah(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.za = e;
  this.s = 88;
  this.i = 2;
}
h = ah.prototype;
h.Ra = function(a, b) {
  if (this.root.m) {
    if (32 > this.za) {
      this.o[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Yd(this.root.m, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      this.za = 1;
      if (w(Hg(this.root, this.shift, this.d))) {
        if (w(Fg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = Kg(this.o, this.root.m, this.shift, c);
          this.root = Yd(this.root.m, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Yd(this.root.m, d), g = this.root.b[32][31];
          d[0] = this.root;
          d[1] = Kg(this.o, this.root.m, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = Pg(this.shift, this.d, this.root.m, this.root, c);
      }
      this.d += 1;
    }
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Sa = function() {
  if (this.root.m) {
    this.root.m = null;
    var a = Array(this.za);
    Rc(this.o, 0, a, 0, this.za);
    return new Zg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ia = function(a, b, c) {
  return Bb(this, b, c);
};
h.ob = function(a, b, c) {
  if (this.root.m) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.o[b - a] = c : this.root = Qg(this.shift, this.root.m, this.root, b, c), this) : b === this.d ? yb(this, c) : de(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.m) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function $g(a, b, c, d, e) {
  return new ah(a, b, c, d, e);
}
;P.prototype.fb = function(a, b, c) {
  return Eg(Rg(this), b, c);
};
ue.prototype.fb = function(a, b, c) {
  return Eg(Rg(this), b, c);
};
function bh(a, b) {
  return Eg(a, b, Bc(a));
}
;function ch(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return[c - e, d - f];
}
function dh(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return[c + e, d + f];
}
function eh(a, b) {
  var c = J(b, 0), d = J(b, 1);
  return[a * c, a * d];
}
function fh(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return c * e + d * f;
}
function gh(a) {
  var b = J(a, 0);
  a = J(a, 1);
  return Math.atan2(a, b);
}
;function hh(a) {
  a = dc.c("" + A("\n"), "/(?:)/") ? zc.c(pe(uc("", Sd.c(A, C(a)))), "") : pe(("" + A(a)).split("\n"));
  if (dc.c(0, 0)) {
    a: {
      for (;;) {
        if (dc.c("", null == a ? null : bb(a))) {
          a = null == a ? null : cb(a);
        } else {
          break a;
        }
      }
    }
  }
  return a;
}
function ih(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
;var jh = function jh() {
  return jh.k(arguments[0], 1 < arguments.length ? new $b(Array.prototype.slice.call(arguments, 1), 0) : null);
};
jh.k = function(a, b) {
  var c = J(b, 0), d = J(c, 0), c = J(c, 1);
  a: {
    for (var e = 1, f = C(b);;) {
      if (f && 0 < e) {
        --e, f = H(f);
      } else {
        break a;
      }
    }
  }
  a.beginPath();
  a.moveTo(d, c);
  for (var d = C(b), e = null, g = f = 0;;) {
    if (g < f) {
      var k = e.F(null, g), c = J(k, 0), k = J(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = C(d)) {
        Pc(d) ? (e = Db(d), d = Eb(d), c = e, f = Bc(e), e = c) : (e = G(d), c = J(e, 0), k = J(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
jh.u = 1;
jh.r = function(a) {
  var b = G(a);
  a = H(a);
  return jh.k(b, a);
};
var kh = function kh() {
  return kh.k(arguments[0], 1 < arguments.length ? new $b(Array.prototype.slice.call(arguments, 1), 0) : null);
};
kh.k = function(a, b) {
  Cd(jh, a, b);
  return a.stroke();
};
kh.u = 1;
kh.r = function(a) {
  var b = G(a);
  a = H(a);
  return kh.k(b, a);
};
function lh(a, b, c, d, e) {
  var f = J(b, 0);
  b = J(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function mh(a) {
  var b = nh;
  b.save();
  try {
    return a.l ? a.l() : a.call(null);
  } finally {
    b.restore();
  }
}
function oh(a, b) {
  var c;
  a: {
    var d = a.canvas;
    c = d;
    for (var e = d.offsetLeft, d = d.offsetTop;;) {
      if (c = c.offsetParent, w(c)) {
        e += c.offsetLeft, d += c.offsetTop;
      } else {
        c = [e, d];
        break a;
      }
    }
  }
  e = J(c, 0);
  c = J(c, 1);
  return[b.pageX - e, b.pageY - c];
}
;var ph = new P(null, 8, 5, Q, [new P(null, 4, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, 44], null), T, new P(null, 2, 5, Q, [-415, -313], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, -313], null), T, new P(null, 2, 5, Q, [-55, -313], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-51, 246], null), T, new P(null, 2, 5, Q, [377, 246], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [377, 246], null), T, new P(null, 2, 5, Q, [377, 
-200], null)], null)], null), new P(null, 8, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-344, 341], null), T, [-469, 341]], null), new n(null, 3, [W, X, S, [-469, 341], T, [-469, -292]], null), new n(null, 3, [W, X, S, [-469, -292], T, [-327, -292]], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-189, 340], null), T, [261, 340]], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-203, -294], null), T, [261, -294]], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [409, 
-293], null), T, [541, -293]], null), new n(null, 3, [W, X, S, [541, -293], T, [541, 327]], null), new n(null, 3, [W, X, S, [541, 327], T, [420, 327]], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, 145], null), T, new P(null, 2, 5, Q, [-487, -206], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, -206], null), T, [-241, -452]], null), new n(null, 3, [W, X, S, [-241, -452], T, new P(null, 2, 5, Q, [-5, -452], null)], null), new n(null, 
3, [W, X, S, new P(null, 2, 5, Q, [-5, -452], null), T, new P(null, 2, 5, Q, [-5, -280], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-190, 399], null), T, new P(null, 2, 5, Q, [153, 399], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [153, 399], null), T, new P(null, 2, 5, Q, [461, 399], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [461, 399], null), T, new P(null, 2, 5, Q, [461, 120], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [461, 
120], null), T, new P(null, 2, 5, Q, [261, 120], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [318, -426], null), T, [530, -214]], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-508, 422], null), T, [-235, 149]], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-363, 146], null), T, new P(null, 2, 5, Q, [-30, 147], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-30, 147], null), T, new P(null, 2, 5, Q, [88, 314], null)], null), 
new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [88, 314], null), T, new P(null, 2, 5, Q, [332, 315], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [332, 315], null), T, new P(null, 2, 5, Q, [527, 51], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [527, 51], null), T, new P(null, 2, 5, Q, [350, -268], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [350, -268], null), T, new P(null, 2, 5, Q, [93, -268], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 
5, Q, [93, -268], null), T, new P(null, 2, 5, Q, [-34, -110], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-34, -110], null), T, new P(null, 2, 5, Q, [-371, -108], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-460, 353], null), T, new P(null, 2, 5, Q, [-65, 353], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, -314], null), T, new P(null, 2, 5, Q, [-62, -313], null)], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 
5, Q, [330, -239], null), T, new P(null, 2, 5, Q, [331, 233], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [331, 233], null), T, new P(null, 2, 5, Q, [-239, 233], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-239, 233], null), T, new P(null, 2, 5, Q, [-241, 353], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-241, 353], null), T, new P(null, 2, 5, Q, [496, 352], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [496, 352], null), T, new P(null, 
2, 5, Q, [493, -111], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [77, -126], null), T, new P(null, 2, 5, Q, [-368, -126], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-368, -126], null), T, new P(null, 2, 5, Q, [-368, 224], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-368, 224], null), T, new P(null, 2, 5, Q, [-500, 366], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-500, 366], null), T, new P(null, 2, 5, Q, [-502, -363], null)], 
null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-502, -363], null), T, new P(null, 2, 5, Q, [-74, -363], null)], null)], null), new P(null, 18, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [196, 141], null), T, new P(null, 2, 5, Q, [-295, 143], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-295, 143], null), T, new P(null, 2, 5, Q, [-420, -180], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-420, -180], null), T, new P(null, 2, 5, Q, [-262, -401], null)], 
null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-262, -401], null), T, new P(null, 2, 5, Q, [195, -403], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [190, -306], null), T, new P(null, 2, 5, Q, [-200, -303], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-200, -303], null), T, new P(null, 2, 5, Q, [-302, -171], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-302, -171], null), T, new P(null, 2, 5, Q, [-233, 22], null)], null), new n(null, 3, [W, 
X, S, new P(null, 2, 5, Q, [-233, 22], null), T, new P(null, 2, 5, Q, [188, 21], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-48, -98], null), T, new P(null, 2, 5, Q, [361, -100], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [361, -100], null), T, new P(null, 2, 5, Q, [512, 102], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [512, 102], null), T, new P(null, 2, 5, Q, [365, 377], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [365, 377], 
null), T, new P(null, 2, 5, Q, [-163, 382], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [294, 70], null), T, new P(null, 2, 5, Q, [352, 135], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [352, 135], null), T, new P(null, 2, 5, Q, [262, 285], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [262, 285], null), T, new P(null, 2, 5, Q, [-67, 287], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-300, 432], null), T, new P(null, 2, 5, Q, [-509, 
-74], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [363, -393], null), T, new P(null, 2, 5, Q, [518, -171], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [34, -203], null), T, new P(null, 2, 5, Q, [338, -205], null)], null)], null), oe([new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-110, 43], null), T, new P(null, 2, 5, Q, [-70, 111], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-70, 111], null), T, new P(null, 2, 5, Q, [26, 145], null)], null), new n(null, 
3, [W, X, S, new P(null, 2, 5, Q, [26, 145], null), T, new P(null, 2, 5, Q, [171, 135], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [171, 135], null), T, new P(null, 2, 5, Q, [234, 81], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [234, 81], null), T, new P(null, 2, 5, Q, [381, 46], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [381, 46], null), T, new P(null, 2, 5, Q, [422, 65], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [422, 65], 
null), T, new P(null, 2, 5, Q, [451, 138], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [451, 138], null), T, new P(null, 2, 5, Q, [378, 276], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [378, 276], null), T, new P(null, 2, 5, Q, [197, 282], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [197, 282], null), T, new P(null, 2, 5, Q, [24, 261], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [24, 261], null), T, new P(null, 2, 5, Q, [-160, 205], 
null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-160, 205], null), T, new P(null, 2, 5, Q, [-230, 72], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-230, 72], null), T, new P(null, 2, 5, Q, [-265, -79], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-265, -79], null), T, new P(null, 2, 5, Q, [-151, -185], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-151, -185], null), T, new P(null, 2, 5, Q, [4, -215], null)], null), new n(null, 3, [W, 
X, S, new P(null, 2, 5, Q, [4, -215], null), T, new P(null, 2, 5, Q, [136, -205], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [136, -205], null), T, new P(null, 2, 5, Q, [206, -170], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [206, -170], null), T, new P(null, 2, 5, Q, [307, -193], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [307, -193], null), T, new P(null, 2, 5, Q, [375, -266], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-1, 
-109], null), T, new P(null, 2, 5, Q, [98, -100], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [98, -100], null), T, new P(null, 2, 5, Q, [146, -90], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [146, -90], null), T, new P(null, 2, 5, Q, [212, -17], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [212, -17], null), T, new P(null, 2, 5, Q, [260, -4], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [260, -4], null), T, new P(null, 2, 5, Q, [369, 
-37], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [369, -37], null), T, new P(null, 2, 5, Q, [466, -28], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [466, -28], null), T, new P(null, 2, 5, Q, [535, 57], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [535, 57], null), T, new P(null, 2, 5, Q, [561, 187], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [561, 187], null), T, new P(null, 2, 5, Q, [483, 313], null)], null), new n(null, 3, [W, 
X, S, new P(null, 2, 5, Q, [483, 313], null), T, new P(null, 2, 5, Q, [375, 368], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [308, -115], null), T, new P(null, 2, 5, Q, [428, -153], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [428, -153], null), T, new P(null, 2, 5, Q, [487, -223], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [487, -223], null), T, new P(null, 2, 5, Q, [509, -340], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [509, 
-340], null), T, new P(null, 2, 5, Q, [479, -395], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [479, -395], null), T, new P(null, 2, 5, Q, [288, -425], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [288, -425], null), T, new P(null, 2, 5, Q, [253, -311], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [253, -311], null), T, new P(null, 2, 5, Q, [138, -280], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [138, -280], null), T, new P(null, 
2, 5, Q, [8, -290], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [8, -290], null), T, new P(null, 2, 5, Q, [-142, -300], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-142, -300], null), T, new P(null, 2, 5, Q, [-265, -270], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-265, -270], null), T, new P(null, 2, 5, Q, [-360, -197], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-364, -16], null), T, new P(null, 2, 5, Q, [-319, 171], null)], 
null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-319, 171], null), T, new P(null, 2, 5, Q, [-247, 288], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-247, 288], null), T, new P(null, 2, 5, Q, [-94, 369], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-94, 369], null), T, new P(null, 2, 5, Q, [102, 364], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [102, 364], null), T, new P(null, 2, 5, Q, [158, 383], null)], null), new n(null, 3, [W, X, S, new P(null, 
2, 5, Q, [-289, -161], null), T, new P(null, 2, 5, Q, [-378, -95], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-378, -95], null), T, new P(null, 2, 5, Q, [-477, -44], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-477, -44], null), T, new P(null, 2, 5, Q, [-476, 119], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-476, 119], null), T, new P(null, 2, 5, Q, [-418, 263], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-563, 25], null), 
T, new P(null, 2, 5, Q, [-551, -175], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-551, -175], null), T, new P(null, 2, 5, Q, [-394, -271], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-394, -271], null), T, new P(null, 2, 5, Q, [-335, -369], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-335, -369], null), T, new P(null, 2, 5, Q, [-222, -409], null)], null)]), new P(null, 23, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-60, -36], null), 
T, new P(null, 2, 5, Q, [157, -37], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-70, 50], null), T, new P(null, 2, 5, Q, [137, 50], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [261, -112], null), T, new P(null, 2, 5, Q, [261, 104], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [41, 188], null), T, new P(null, 2, 5, Q, [352, 186], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [376, -190], null), T, new P(null, 2, 5, Q, [375, 81], null)], 
null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-130, -176], null), T, new P(null, 2, 5, Q, [209, -176], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-183, -95], null), T, new P(null, 2, 5, Q, [-180, 145], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-224, -177], null), T, new P(null, 2, 5, Q, [-466, -356], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-242, -47], null), T, new P(null, 2, 5, Q, [-493, -47], null)], null), new n(null, 3, [W, 
X, S, new P(null, 2, 5, Q, [-241, 49], null), T, new P(null, 2, 5, Q, [-558, 49], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-486, 102], null), T, new P(null, 2, 5, Q, [-485, 379], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-401, 107], null), T, new P(null, 2, 5, Q, [-401, 366], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-347, 248], null), T, new P(null, 2, 5, Q, [-49, 250], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-49, 
250], null), T, new P(null, 2, 5, Q, [-49, 159], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [141, 240], null), T, new P(null, 2, 5, Q, [141, 413], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [252, 240], null), T, new P(null, 2, 5, Q, [252, 413], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [405, 143], null), T, new P(null, 2, 5, Q, [607, 345], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [382, 265], null), T, new P(null, 2, 5, Q, 
[555, 426], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [179, -272], null), T, new P(null, 2, 5, Q, [393, -422], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [334, -249], null), T, new P(null, 2, 5, Q, [545, -383], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-95, -239], null), T, new P(null, 2, 5, Q, [-96, -407], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [34, -241], null), T, new P(null, 2, 5, Q, [33, -404], null)], null), new n(null, 
3, [W, X, S, new P(null, 2, 5, Q, [-397, -99], null), T, new P(null, 2, 5, Q, [-397, -218], null)], null)], null)], null);
var qh = 2 * Math.PI, rh, sh, th = ed(3 * (window.innerWidth - 20), 4);
sh = 1280 < th ? 1280 : th;
var uh = ed(4 * (window.innerHeight - 10), 3);
rh = sh < uh ? sh : uh;
var vh = ed(3 * rh, 4), wh = document.createElement("canvas");
w(rh) && wh.setAttribute("width", rh);
w(vh) && wh.setAttribute("height", vh);
wh.setAttribute("style", "border: 1px solid #000; display: block;");
var xh = document.createElement("div"), nh = wh.getContext("2d");
function yh() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(xh);
    return a;
  }());
  return a.appendChild(wh);
}
da("figwheel_test.common.init_elements", yh);
function zh(a, b) {
  return mh(function() {
    if (w(b)) {
      var c = nh.canvas;
      nh.clearRect(0, 0, c.width, c.height);
    }
    c = wh.width / 1280;
    nh.scale(c, c);
    nh.translate(640, 480);
    nh.scale(1, -1);
    return a.l ? a.l() : a.call(null);
  });
}
var Ah = !1;
function Bh(a) {
  var b = J(a, 0);
  a = J(a, 1);
  return new P(null, 2, 5, Q, [b / (wh.width / 1280) - 640, 480 + -(a / (wh.width / 1280))], null);
}
function Ch(a) {
  window.onkeypress = function(b) {
    return dc.c(b.which, 32) ? a.l ? a.l() : a.call(null) : null;
  };
  return wh.ontouchstart = function(b) {
    Ah = !0;
    b = G(Bh(oh(nh, b)));
    return 200 > Math.abs(b) ? a.l ? a.l() : a.call(null) : null;
  };
}
function Dh(a) {
  return zh(function() {
    nh.font = "20px sans";
    nh.scale(1, -1);
    return Df(function(a) {
      nh.fillText(a, -(nh.measureText(a).width / 2), 0);
      return nh.translate(0, 20);
    }, Sd.c(ih, hh(a)));
  }, !1);
}
;if ("undefined" === typeof Eh) {
  var Eh = function() {
    var a = O ? O(R) : Md.call(null, R), b = O ? O(R) : Md.call(null, R), c = O ? O(R) : Md.call(null, R), d = O ? O(R) : Md.call(null, R), e = Dc(R, Ag, Gf());
    return new Qf(Zb("draw-segment"), function() {
      return function(a, b) {
        return W.a(b);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Rf(Eh, X, function(a, b) {
  var c = Tc(b) ? Bd(Nd, b) : b, d = L(c, S), c = L(c, T);
  return kh.k(a, wc([d, c], 0));
});
Rf(Eh, jg, function(a, b) {
  var c = Tc(b) ? Bd(Nd, b) : b, d = L(c, ng), e = L(c, ag), f = L(c, cg), g = L(c, Wf), c = L(c, Tf);
  return 0 > g ? lh(a, d, c, f, e) : lh(a, d, c, e, f);
});
if ("undefined" === typeof Fh) {
  var Fh = function() {
    var a = O ? O(R) : Md.call(null, R), b = O ? O(R) : Md.call(null, R), c = O ? O(R) : Md.call(null, R), d = O ? O(R) : Md.call(null, R), e = Dc(R, Ag, Gf());
    return new Qf(Zb("update-seg"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Rf(Fh, X, function(a, b, c) {
  a = Tc(a) ? Bd(Nd, a) : a;
  var d = L(a, Wf);
  b = eh(b, d);
  return Wd.p(a, dc.c(c, mg) ? T : S, dh, b);
});
Rf(Fh, jg, function(a, b, c) {
  a = Tc(a) ? Bd(Nd, a) : a;
  var d = L(a, Wf), e = L(a, Tf);
  b = b / e * d;
  return Wd.p(a, dc.c(c, mg) ? cg : ag, bd, b);
});
function Gh(a, b) {
  return Wd.p(Fh.g ? Fh.g(a, b, mg) : Fh.call(null, a, b, mg), tg, bd, b);
}
function Hh(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a;
  L(c, W);
  return Wd.p(Fh.g ? Fh.g(c, b, pg) : Fh.call(null, c, b, pg), tg, cd, b);
}
function Ih(a, b) {
  for (var c = 0, d = b;;) {
    if (dc.c(c, Bc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < tg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return bh(Wd.p(a, c, Hh, d), c);
    }
    var e = c + 1, d = d - tg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof Jh) {
  var Jh = function() {
    var a = O ? O(R) : Md.call(null, R), b = O ? O(R) : Md.call(null, R), c = O ? O(R) : Md.call(null, R), d = O ? O(R) : Md.call(null, R), e = Dc(R, Ag, Gf());
    return new Qf(Zb("seg-normal"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Rf(Jh, X, function(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a, d = L(c, Wf), c = J(d, 0), d = J(d, 1);
  return dc.c(b, Dg) ? [-d, c] : [d, -c];
});
Rf(Jh, jg, function(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a;
  L(c, ag);
  var d = L(c, cg), c = L(c, Wf) * (dc.c(b, Dg) ? -1 : 1);
  return eh(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Kh) {
  var Kh, Lh = O ? O(R) : Md.call(null, R), Mh = O ? O(R) : Md.call(null, R), Nh = O ? O(R) : Md.call(null, R), Oh = O ? O(R) : Md.call(null, R), Ph = Dc(R, Ag, Gf());
  Kh = new Qf(Zb("seg-endpoint"), W, Yf, Ph, Lh, Mh, Nh, Oh);
}
Rf(Kh, X, function(a) {
  return T.a(a);
});
Rf(Kh, jg, function(a) {
  var b = Tc(a) ? Bd(Nd, a) : a;
  L(b, ag);
  a = L(b, cg);
  var c = L(b, ng), b = L(b, Tf);
  return dh(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Qh(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a, d = L(c, eg);
  return Ec.g(c, eg, dc.c(tg.a(xc(d)), 0) ? zc.c(null == d ? null : cb(d), b) : zc.c(d, b));
}
function Rh(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a, d = L(c, lg), e = L(c, eg);
  return dc.c(d, b) ? c : Qh(Ec.g(c, lg, b), function() {
    switch(b instanceof M ? b.va : null) {
      case "left":
        var a = xc(e), c = function() {
          var c = a;
          return Jh.c ? Jh.c(c, b) : Jh.call(null, c, b);
        }(), d = J(c, 0), l = J(c, 1), c = dh(function() {
          var b = a;
          return Kh.a ? Kh.a(b) : Kh.call(null, b);
        }(), eh(25, c)), p = Math.atan2(-l, -d), d = p, l = dc.c(b, Dg) ? 1 : -1;
        return new n(null, 7, [W, jg, ng, c, ag, p, cg, d, tg, 0, Wf, l, Tf, 25], null);
      case "right":
        return a = xc(e), c = function() {
          var c = a;
          return Jh.c ? Jh.c(c, b) : Jh.call(null, c, b);
        }(), d = J(c, 0), l = J(c, 1), c = dh(function() {
          var b = a;
          return Kh.a ? Kh.a(b) : Kh.call(null, b);
        }(), eh(25, c)), d = p = Math.atan2(-l, -d), l = dc.c(b, Dg) ? 1 : -1, new n(null, 7, [W, jg, ng, c, ag, p, cg, d, tg, 0, Wf, l, Tf, 25], null);
      default:
        return d = xc(e), a = l = Tc(d) ? Bd(Nd, d) : d, d = L(l, cg), l = L(l, Wf), c = function() {
          var b = a;
          return Kh.a ? Kh.a(b) : Kh.call(null, b);
        }(), new n(null, 5, [W, X, S, c, T, c, tg, 0, Wf, eh(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function Sh(a) {
  var b = I.a ? I.a(Th) : I.call(null, Th);
  zh(function() {
    return Df(Jd(Eh, a), yd.k(gg.a(b), Sd.c(Me, fg.a(b)), wc([eg.a(b)], 0)));
  }, !0);
}
function Uh(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a, d = L(c, ag), e = L(c, cg), c = L(c, Wf);
  if (c * (e - d) > qh) {
    return!0;
  }
  var f = dd(b, qh), d = dd(d, qh), e = dd(e, qh);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= qh : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= qh;
}
if ("undefined" === typeof Vh) {
  var Vh = function() {
    var a = O ? O(R) : Md.call(null, R), b = O ? O(R) : Md.call(null, R), c = O ? O(R) : Md.call(null, R), d = O ? O(R) : Md.call(null, R), e = Dc(R, Ag, Gf());
    return new Qf(Zb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [W.a(a), W.a(b)], null);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Rf(Vh, new P(null, 2, 5, Q, [X, X], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [S.a(a), T.a(a)], null);
  c = new P(null, 2, 5, Q, [S.a(b), T.a(b)], null);
  var e = J(d, 0), d = J(d, 1), f = J(c, 0), g = J(c, 1), d = ch(d, e);
  c = J(d, 0);
  var d = J(d, 1), k = ch(g, f), g = J(k, 0), k = J(k, 1), f = ch(f, e), e = J(f, 0), f = J(f, 1), l = -1 * c * k - -1 * d * g;
  c = dc.c(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = J(c, 0);
  d = J(c, 1);
  return w(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Rf(Vh, new P(null, 2, 5, Q, [X, jg], null), function(a, b) {
  var c = Tc(a) ? Bd(Nd, a) : a, d = L(c, S), c = L(c, T), e = Tc(b) ? Bd(Nd, b) : b, f = L(e, Tf);
  var g = L(e, ng), c = ch(c, d), e = fh(c, c), d = ch(d, g), g = fh(d, d), k = fh(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-fh(c, d) - g) / e, e = (-fh(c, d) + g) / e, g = gh(dh(eh(f, c), d)), c = gh(dh(eh(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = J(f, 0);
  e = J(f, 1);
  d = J(f, 2);
  c = J(f, 3);
  return w(f) ? (d = (f = 0 < g && 1 > g) ? Uh(b, d) : f, w(d) ? d : (e = 0 < e && 1 > e) ? Uh(b, c) : e) : f;
});
Rf(Vh, new P(null, 2, 5, Q, [jg, X], null), function(a, b) {
  return Vh.c ? Vh.c(b, a) : Vh.call(null, b, a);
});
Rf(Vh, new P(null, 2, 5, Q, [jg, jg], null), function(a, b) {
  var c;
  var d = ng.a(a), e = Tf.a(a);
  c = ng.a(b);
  var f = Tf.a(b), g = ch(c, d), d = J(g, 0);
  c = J(g, 1);
  g = fh(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = J(c, 0);
  d = J(c, 1);
  f = J(c, 2);
  e = J(c, 3);
  return w(c) ? (c = Uh(a, g), d = w(c) ? c : Uh(a, d), w(d) ? (f = Uh(b, f), w(f) ? f : Uh(b, e)) : d) : c;
});
function Wh(a) {
  var b = Tc(a) ? Bd(Nd, a) : a, c = L(b, gg), d = L(b, eg), e = xc(d), f = null == d ? null : cb(d);
  return Hd(function(a) {
    return function(b) {
      return Vh.c ? Vh.c(a, b) : Vh.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), yd.c(c, w(Fd(f)) ? null == f ? null : cb(f) : f));
}
function Xh(a) {
  var b = Tc(a) ? Bd(Nd, a) : a, c = L(b, fg), d = L(b, eg), e = xc(d);
  return Xc(function() {
    return function(a, b) {
      var c = J(b, 0);
      J(b, 1);
      return Wd.p(Wd.p(a, yg, bd, 50), fg, Gc, c);
    };
  }(e, a, b, b, c, d), b, Ud(Id(Jd(Vh, e), Me), c));
}
var Yh = O ? O(null) : Md.call(null, null);
function Zh(a, b) {
  for (var c = Tc(b) ? Bd(Nd, b) : b, d = L(c, gg), e = a.canvas, f = e.width, g = e.height, k = Ef(f) - f / 2, l = Ef(g) - g / 2;;) {
    if (w(Hd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Sd.c(Id(function(a, b) {
      return function(c) {
        var d = new P(null, 2, 5, Q, [a, b], null), e = J(c, 0);
        c = J(c, 1);
        c = ch(c, e);
        var f = fh(ch(e, d), c) / fh(c, c) * -1, f = 1 < f ? 1 : f, e = ch(dh(e, eh(0 > f ? 0 : f, c)), d), d = J(e, 0), e = J(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), sf()), d)))) {
      k = Ef(f) - f / 2, l = Ef(g) - g / 2;
    } else {
      return new P(null, 2, 5, Q, [k, l], null);
    }
  }
}
var $h = new P(null, 1, 5, Q, [new n(null, 5, [tg, 100, W, X, Wf, new P(null, 2, 5, Q, [1, 0], null), S, new P(null, 2, 5, Q, [0, 0], null), T, new P(null, 2, 5, Q, [100, 0], null)], null)], null);
function ai() {
  var a = new P(null, 5, 5, Q, [new P(null, 2, 5, Q, [-642, 482], null), new P(null, 2, 5, Q, [642, 482], null), new P(null, 2, 5, Q, [642, -482], null), new P(null, 2, 5, Q, [-642, -482], null), new P(null, 2, 5, Q, [-642, 482], null)], null);
  return Sd.g(function(a, c) {
    return new n(null, 3, [W, X, S, a, T, c], null);
  }, a, ac(a));
}
var bi = function bi() {
  switch(arguments.length) {
    case 2:
      return bi.c(arguments[0], arguments[1]);
    case 3:
      return bi.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
bi.c = function(a, b) {
  return bi.g(a, b, function() {
    var b = dd(kg.a(a), Bc(ph));
    return ph.a ? ph.a(b) : ph.call(null, b);
  }());
};
bi.g = function(a, b, c) {
  return Xc(function(a, c) {
    return Wd.t(a, fg, Ec, c, new n(null, 6, [W, jg, ng, Zh(b, a), ag, 0, cg, qh, Wf, 1, Tf, 10], null));
  }, Ec.k(a, eg, $h, wc([tg, 100, yg, 100, lg, null, fg, R, gg, yd.c(ai(), c), og, !1], 0)), new rf(null, 0, 10, 1, null));
};
bi.u = 3;
var Th, ci = new n(null, 1, [kg, 0], null);
Th = O ? O(ci) : Md.call(null, ci);
var di = function di(b, c, d) {
  return Ca(Ah) ? Ch(function() {
    Rd.p(Th, Ec, og, !0);
    window.requestAnimationFrame(function() {
      return Dh("Paused");
    });
    return Ch(function() {
      Rd.p(Th, Ec, og, !1);
      ei.g ? ei.g(b, c, d) : ei.call(null, b, c, d);
      return di(b, c, d);
    });
  }) : null;
};
function fi() {
  window.onkeydown = null;
  return window.onkeyup = null;
}
function gi(a) {
  return hi(a, "Press space or tap near the center when ready");
}
function hi(a, b) {
  Rd.g(Th, bi, a);
  Sh(a);
  Dh([A("\n\n"), A(b)].join(""));
  return Ch(function() {
    function b(a) {
      var c = I.a ? I.a(Th) : I.call(null, Th);
      Pd.c ? Pd.c(Yh, c) : Pd.call(null, Yh, c);
      fi();
      Dh("\n\n\nSnake?  Snake?! SNAAAAAAAAKE!!");
      return Ch(function() {
        return gi(a);
      });
    }
    try {
      var d = {level:kg.a(I.a ? I.a(Th) : I.call(null, Th))};
      mixpanel.track("start level", d);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
    }
    d = function(a) {
      return function(b) {
        Rd.p(Th, Wd, kg, lc);
        fi();
        Dh("\n\n\nYou did it, Snake!  Unfortunately there's another facility\nwe need you to infiltrate.");
        return Ch(function() {
          return function() {
            return gi(b);
          };
        }(a));
      };
    }(b);
    ei.g ? ei.g(a, b, d) : ei.call(null, a, b, d);
    return di(a, b, d);
  });
}
var ii = new n(null, 4, [65, Dg, 37, Dg, 68, vg, 39, vg], null);
function ei(a, b, c) {
  window.onkeydown = function(a) {
    a = a.which;
    a = ii.a ? ii.a(a) : ii.call(null, a);
    return w(a) ? Rd.g(Th, Rh, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = ii.a ? ii.a(a) : ii.call(null, a);
    return w(a) ? dc.c(a, lg.a(I.a ? I.a(Th) : I.call(null, Th))) ? Rd.g(Th, Rh, null) : null : null;
  };
  wh.ontouchstart = function(b) {
    b.preventDefault();
    var c = xc(eg.a(I.a ? I.a(Th) : I.call(null, Th))), c = Tc(c) ? Bd(Nd, c) : c;
    L(c, Wf);
    L(c, S);
    b = Bh(oh(a, b.touches.item(0)));
    c = J(b, 0);
    J(b, 1);
    return Rd.g(Th, Rh, -40 > c ? Dg : 40 < c ? vg : null);
  };
  wh.ontouchend = function(a) {
    a.preventDefault();
    return Rd.g(Th, Rh, null);
  };
  return function e() {
    if (Ca(og.a(I.a ? I.a(Th) : I.call(null, Th)))) {
      var f = Rd.c(Th, function(a) {
        var b;
        b = yg.a(a);
        a = Tc(a) ? Bd(Nd, a) : a;
        var c = L(a, eg), e = L(a, tg), f = Bc(c) - 1, r = e + 3 - b, c = Wd.p(c, f, Gh, 3);
        b = Ec.k(a, eg, 0 < r ? Ih(c, r) : c, wc([tg, Math.min(e + 3, b)], 0));
        return Xh(b);
      });
      if (w(Wh(f))) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      if (Mc(fg.a(f))) {
        return c.a ? c.a(a) : c.call(null, a);
      }
      Sh(a);
      return window.requestAnimationFrame(e);
    }
    return fi();
  }.call(null);
}
da("figwheel_test.snake.init_everything", function() {
  yh();
  return hi(nh, "\n\nSnake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you.\n\nYou'll need to turn left and right using the A and D keys.\n\nPress space or tap near the center of the screen to start");
});
var ji = document.createElement("canvas");
ji.setAttribute("width", 1280);
ji.setAttribute("height", 960);
ji.setAttribute("style", "border: 1px solid #000");
ji.getContext("2d");
var ki = new P(null, 2, 5, Q, [0, 0], null);
O || Md.call(null, ki);
function li() {
  for (var a = new P(null, 3, 5, Q, [Ef(500) - 250, -215, Ef(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = yd.c(Td(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (1 * (Math.random.l ? Math.random.l() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), wc([a, ac(a)], 0)), new P(null, 1, 5, Q, [xc(a)], null)), b /= 2, --c;
    } else {
      return pe(a);
    }
  }
}
function mi(a) {
  var b = Bc(a) / 2;
  return Xc(function() {
    return function(a, b) {
      return Ec.g(a, b, -215);
    };
  }(b), a, new rf(null, b - 4, b + 4, 1, null));
}
O || Md.call(null, 0);
O || Md.call(null, !1);
var ni = new P(null, 2, 5, Q, [1, 0], null);
O || Md.call(null, ni);
var oi = new n(null, 7, [Sf, R, sg, function() {
  var a = li(), b = Bc(a) - 1;
  return pe(Kd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), mi(a)));
}(), zg, R, hg, R, rg, 0, Vf, 60, xg, Fc([Xf, Zf, $f, bg, dg, ig, ug, wg, Bg, Cg], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || Md.call(null, oi);
O || Md.call(null, !1);
O || Md.call(null, 0);
var pi = new n(null, 3, [gg, R, Uf, null, qg, 0], null);
O || Md.call(null, pi);

})();
