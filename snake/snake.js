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
function ea(a, b) {
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
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a) {
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
var qa = null;
if ("undefined" === typeof ra) {
  var ra = null
}
function ta() {
  return new n(null, 5, [ua, !0, wa, !0, xa, !1, ya, !1, za, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function Ba(a) {
  return a instanceof Array;
}
function Ca(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function z(a, b) {
  var c = null == b ? null : b.constructor, c = w(w(c) ? c.Jb : c) ? c.Ib : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Ib;
  return w(b) ? b : "" + A(a);
}
var Fa = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
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
var Ha = {}, Ja = {}, Ka = function Ka(b) {
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
var Pa = {}, Qa = function Qa(b) {
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
  if (b ? b.mb : b) {
    return b.mb(b, c);
  }
  var d;
  d = Xa[m(null == b ? null : b)];
  if (!d && (d = Xa._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Ya = {}, Za = function Za(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = Za[m(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ab = function ab(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
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
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = db[m(null == b ? null : b)];
  if (!e && (e = db._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, eb = function eb(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = eb[m(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, fb = {}, gb = function gb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = gb[m(null == b ? null : b)];
  if (!c && (c = gb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, hb = {}, jb = function jb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = jb[m(null == b ? null : b)];
  if (!d && (d = jb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, kb = {}, lb = function lb() {
  switch(arguments.length) {
    case 2:
      return lb.c(arguments[0], arguments[1]);
    case 3:
      return lb.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
lb.c = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = lb[m(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
lb.g = function(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = lb[m(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
lb.u = 3;
var mb = function mb(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = mb[m(null == b ? null : b)];
  if (!d && (d = mb._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, nb = function nb(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = nb[m(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, ob = {}, pb = function pb(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = pb[m(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, qb = {}, rb = function rb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = rb[m(null == b ? null : b)];
  if (!d && (d = rb._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, sb = {}, tb = function tb(b, c, d) {
  if (b ? b.C : b) {
    return b.C(b, c, d);
  }
  var e;
  e = tb[m(null == b ? null : b)];
  if (!e && (e = tb._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, ub = function ub(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = ub[m(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, wb = function wb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = wb[m(null == b ? null : b)];
  if (!c && (c = wb._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, xb = function xb(b, c) {
  if (b ? b.Qa : b) {
    return b.Qa(b, c);
  }
  var d;
  d = xb[m(null == b ? null : b)];
  if (!d && (d = xb._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, yb = function yb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = yb[m(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, zb = function zb(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = zb[m(null == b ? null : b)];
  if (!e && (e = zb._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Ab = function Ab(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = Ab[m(null == b ? null : b)];
  if (!e && (e = Ab._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Bb = function Bb(b) {
  if (b ? b.ob : b) {
    return b.ob();
  }
  var c;
  c = Bb[m(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Cb[m(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = Db[m(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = Eb[m(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = Fb[m(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.Pa : b) {
    return b.Pa(b);
  }
  var c;
  c = Gb[m(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b, c) {
  if (b ? b.Db : b) {
    return b.Db(b, c);
  }
  var d;
  d = Hb[m(null == b ? null : b)];
  if (!d && (d = Hb._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Ib = function Ib() {
  switch(arguments.length) {
    case 2:
      return Ib.c(arguments[0], arguments[1]);
    case 3:
      return Ib.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ib.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ib.t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Ib.c = function(a, b) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b);
  }
  var c;
  c = Ib[m(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Ib.g = function(a, b, c) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c);
  }
  var d;
  d = Ib[m(null == a ? null : a)];
  if (!d && (d = Ib._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Ib.o = function(a, b, c, d) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c, d);
  }
  var e;
  e = Ib[m(null == a ? null : a)];
  if (!e && (e = Ib._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Ib.t = function(a, b, c, d, e) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c, d, e);
  }
  var f;
  f = Ib[m(null == a ? null : a)];
  if (!f && (f = Ib._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Ib.u = 5;
var Jb = function Jb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Jb[m(null == b ? null : b)];
  if (!c && (c = Jb._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Kb(a) {
  this.Mb = a;
  this.i = 1073741824;
  this.s = 0;
}
Kb.prototype.qb = function(a, b) {
  return this.Mb.append(b);
};
function Lb(a) {
  var b = new ma;
  a.C(null, new Kb(b), ta());
  return "" + A(b);
}
var Mb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.c ? Math.imul.c(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.c ? Math.imul.c(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Nb(a) {
  a = Mb(a | 0, -862048943);
  return Mb(a << 15 | a >>> -15, 461845907);
}
function Pb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Mb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Qb(a, b) {
  var c = (a | 0) ^ b, c = Mb(c ^ c >>> 16, -2048144789), c = Mb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Rb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Pb(c, Nb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Nb(a.charCodeAt(a.length - 1)) : b;
  return Qb(b, Mb(2, a.length));
}
var Sb = {}, Tb = 0;
function Ub(a) {
  255 < Tb && (Sb = {}, Tb = 0);
  var b = Sb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Mb(31, d) + a.charCodeAt(c), c = e
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
    Sb[a] = b;
    Tb += 1;
  }
  return a = b;
}
function Vb(a) {
  a && (a.i & 4194304 || a.Pb) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Ub(a), 0 !== a && (a = Nb(a), a = Pb(0, a), a = Qb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : nb(a);
  return a;
}
function Wb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Xb(a, b, c, d, e) {
  this.La = a;
  this.name = b;
  this.ya = c;
  this.Da = d;
  this.ka = e;
  this.i = 2154168321;
  this.s = 4096;
}
h = Xb.prototype;
h.toString = function() {
  return this.ya;
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return b instanceof Xb ? this.ya === b.ya : !1;
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
  return new Xb(this.La, this.name, this.ya, this.Da, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Wb(Rb(this.name), Ub(this.La));
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.La;
};
h.C = function(a, b) {
  return rb(b, this.ya);
};
function Yb(a) {
  var b = [A("figwheel-test.snake"), A("/"), A(a)].join("");
  return new Xb("figwheel-test.snake", a, b, null, null);
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Qb)) {
    return a.K(null);
  }
  if (Ba(a) || "string" === typeof a) {
    return 0 === a.length ? null : new Zb(a, 0);
  }
  if (y(ob, a)) {
    return pb(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.bb)) {
    return a.fa(null);
  }
  a = C(a);
  return null == a ? null : Qa(a);
}
function ac(a) {
  return null != a ? a && (a.i & 64 || a.bb) ? a.la(null) : (a = C(a)) ? Ra(a) : bc : bc;
}
function H(a) {
  return null == a ? null : a && (a.i & 128 || a.ab) ? a.ia(null) : C(ac(a));
}
var cc = function cc() {
  switch(arguments.length) {
    case 1:
      return cc.a(arguments[0]);
    case 2:
      return cc.c(arguments[0], arguments[1]);
    default:
      return cc.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
cc.a = function() {
  return!0;
};
cc.c = function(a, b) {
  return null == a ? null == b : a === b || mb(a, b);
};
cc.k = function(a, b, c) {
  for (;;) {
    if (cc.c(a, b)) {
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return cc.c(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
cc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return cc.k(b, a, c);
};
cc.u = 2;
function dc(a) {
  this.v = a;
}
dc.prototype.next = function() {
  if (null != this.v) {
    var a = G(this.v);
    this.v = H(this.v);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function ec(a) {
  return new dc(C(a));
}
function fc(a, b) {
  var c = Nb(a), c = Pb(0, c);
  return Qb(c, b);
}
function gc(a) {
  var b = 0, c = 1;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = Mb(31, c) + Vb(G(a)) | 0, a = H(a);
    } else {
      return fc(c, b);
    }
  }
}
var hc = fc(1, 0);
function ic(a) {
  var b = 0, c = 0;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = c + Vb(G(a)) | 0, a = H(a);
    } else {
      return fc(c, b);
    }
  }
}
var jc = fc(0, 0);
Ja["null"] = !0;
Ka["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
mb.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
fb["function"] = !0;
gb["function"] = function() {
  return null;
};
nb._ = function(a) {
  return a[fa] || (a[fa] = ++ha);
};
function kc(a) {
  return a + 1;
}
function I(a) {
  return eb(a);
}
function lc(a, b) {
  var c = Ka(a);
  if (0 === c) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = B.c(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.c(a, e), d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function mc(a, b, c) {
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
function nc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function oc(a, b, c) {
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
function pc(a, b, c, d) {
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
function qc(a) {
  return a ? a.i & 2 || a.tb ? !0 : a.i ? !1 : y(Ja, a) : y(Ja, a);
}
function rc(a, b) {
  this.b = a;
  this.j = b;
}
rc.prototype.gb = function() {
  return this.j < this.b.length;
};
rc.prototype.next = function() {
  var a = this.b[this.j];
  this.j += 1;
  return a;
};
function Zb(a, b) {
  this.b = a;
  this.j = b;
  this.i = 166199550;
  this.s = 8192;
}
h = Zb.prototype;
h.toString = function() {
  return Lb(this);
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
h.Na = function() {
  return new rc(this.b, this.j);
};
h.ia = function() {
  return this.j + 1 < this.b.length ? new Zb(this.b, this.j + 1) : null;
};
h.P = function() {
  return this.b.length - this.j;
};
h.B = function() {
  return gc(this);
};
h.q = function(a, b) {
  return sc.c ? sc.c(this, b) : sc.call(null, this, b);
};
h.M = function() {
  return bc;
};
h.N = function(a, b) {
  return pc(this.b, b, this.b[this.j], this.j + 1);
};
h.O = function(a, b, c) {
  return pc(this.b, b, c, this.j);
};
h.fa = function() {
  return this.b[this.j];
};
h.la = function() {
  return this.j + 1 < this.b.length ? new Zb(this.b, this.j + 1) : bc;
};
h.K = function() {
  return this;
};
h.I = function(a, b) {
  return tc.c ? tc.c(b, this) : tc.call(null, b, this);
};
Zb.prototype[Fa] = function() {
  return ec(this);
};
function uc(a, b) {
  return b < a.length ? new Zb(a, b) : null;
}
function vc() {
  switch(arguments.length) {
    case 1:
      return uc(arguments[0], 0);
    case 2:
      return uc(arguments[0], arguments[1]);
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
mb._ = function(a, b) {
  return a === b;
};
var yc = function yc() {
  switch(arguments.length) {
    case 0:
      return yc.p();
    case 1:
      return yc.a(arguments[0]);
    case 2:
      return yc.c(arguments[0], arguments[1]);
    default:
      return yc.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yc.p = function() {
  return zc;
};
yc.a = function(a) {
  return a;
};
yc.c = function(a, b) {
  return null != a ? Ma(a, b) : Ma(bc, b);
};
yc.k = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = yc.c(a, b), b = G(c), c = H(c);
    } else {
      return yc.c(a, b);
    }
  }
};
yc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yc.k(b, a, c);
};
yc.u = 2;
function Ac(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.tb)) {
      a = a.P(null);
    } else {
      if (Ba(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(Ja, a)) {
            a = Ka(a);
          } else {
            a: {
              a = C(a);
              for (var b = 0;;) {
                if (qc(a)) {
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
function Bc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return C(a) ? G(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.wb || (d.i ? 0 : y(Na, d)) : y(Na, d)) {
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
function K(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.wb)) {
    return a.ha(null, b, null);
  }
  if (Ba(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Na, a)) {
    return B.c(a, b);
  }
  if (a ? a.i & 64 || a.bb || (a.i ? 0 : y(Pa, a)) : y(Pa, a)) {
    return Bc(a, b);
  }
  throw Error([A("nth not supported on this type "), A(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.i & 256 || a.xb) ? a.da(null, b) : Ba(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Ta, a) ? Ua.c(a, b) : null;
}
function Cc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.xb) ? a.G(null, b, c) : Ba(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Ta, a) ? Ua.g(a, b, c) : c : c;
}
var Dc = function Dc() {
  switch(arguments.length) {
    case 3:
      return Dc.g(arguments[0], arguments[1], arguments[2]);
    default:
      return Dc.k(arguments[0], arguments[1], arguments[2], new Zb(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Dc.g = function(a, b, c) {
  return null != a ? Va(a, b, c) : Ec([b], [c]);
};
Dc.k = function(a, b, c, d) {
  for (;;) {
    if (a = Dc.g(a, b, c), w(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
Dc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return Dc.k(b, a, c, d);
};
Dc.u = 3;
var Fc = function Fc() {
  switch(arguments.length) {
    case 1:
      return Fc.a(arguments[0]);
    case 2:
      return Fc.c(arguments[0], arguments[1]);
    default:
      return Fc.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Fc.a = function(a) {
  return a;
};
Fc.c = function(a, b) {
  return null == a ? null : Xa(a, b);
};
Fc.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Fc.c(a, b);
    if (w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Fc.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Fc.k(b, a, c);
};
Fc.u = 2;
function Gc(a) {
  var b = "function" == m(a);
  return w(b) ? b : a ? w(w(null) ? null : a.sb) ? !0 : a.Vb ? !1 : y(Ha, a) : y(Ha, a);
}
function Hc(a, b) {
  this.e = a;
  this.h = b;
  this.i = 393217;
  this.s = 0;
}
h = Hc.prototype;
h.H = function() {
  return this.h;
};
h.L = function(a, b) {
  return new Hc(this.e, b);
};
h.sb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y) {
    a = this.e;
    return Ic.Ma ? Ic.Ma(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y) : Ic.call(null, a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y);
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J) : a.e.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J);
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
    return a.e.o ? a.e.o(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function J(a, b, c, d) {
    a = this;
    return a.e.g ? a.e.g(b, c, d) : a.e.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    return a.e.c ? a.e.c(b, c) : a.e.call(null, b, c);
  }
  function Y(a, b) {
    a = this;
    return a.e.a ? a.e.a(b) : a.e.call(null, b);
  }
  function na(a) {
    a = this;
    return a.e.p ? a.e.p() : a.e.call(null);
  }
  var D = null, D = function(Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb, Ob, wc, xd, Ue) {
    switch(arguments.length) {
      case 1:
        return na.call(this, Ea);
      case 2:
        return Y.call(this, Ea, X);
      case 3:
        return N.call(this, Ea, X, aa);
      case 4:
        return J.call(this, Ea, X, aa, ba);
      case 5:
        return F.call(this, Ea, X, aa, ba, da);
      case 6:
        return E.call(this, Ea, X, aa, ba, da, ga);
      case 7:
        return x.call(this, Ea, X, aa, ba, da, ga, ja);
      case 8:
        return v.call(this, Ea, X, aa, ba, da, ga, ja, la);
      case 9:
        return u.call(this, Ea, X, aa, ba, da, ga, ja, la, pa);
      case 10:
        return t.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa);
      case 11:
        return r.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va);
      case 12:
        return q.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa);
      case 13:
        return p.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia);
      case 14:
        return l.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa);
      case 15:
        return k.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D);
      case 16:
        return g.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a);
      case 17:
        return f.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib);
      case 18:
        return e.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb);
      case 19:
        return d.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb, Ob);
      case 20:
        return c.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb, Ob, wc);
      case 21:
        return b.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb, Ob, wc, xd);
      case 22:
        return a.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, D, $a, ib, vb, Ob, wc, xd, Ue);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = na;
  D.c = Y;
  D.g = N;
  D.o = J;
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
  D.lb = b;
  D.Ma = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.p = function() {
  return this.e.p ? this.e.p() : this.e.call(null);
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
h.o = function(a, b, c, d) {
  return this.e.o ? this.e.o(a, b, c, d) : this.e.call(null, a, b, c, d);
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
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) : this.e.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N);
};
h.lb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y) {
  var na = this.e;
  return Ic.Ma ? Ic.Ma(na, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y) : Ic.call(null, na, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y);
};
function Jc(a, b) {
  return Gc(a) && !(a ? a.i & 262144 || a.Tb || (a.i ? 0 : y(hb, a)) : y(hb, a)) ? new Hc(a, b) : null == a ? null : jb(a, b);
}
function Kc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Ab || (a.i ? 0 : y(fb, a)) : y(fb, a) : b) ? gb(a) : null;
}
function Lc(a) {
  return null == a || Ca(C(a));
}
function Mc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.yb ? !0 : a.i ? !1 : y(Wa, a) : y(Wa, a);
}
function Nc(a) {
  return a ? a.i & 16384 || a.Sb ? !0 : a.i ? !1 : y(cb, a) : y(cb, a);
}
function Oc(a) {
  return a ? a.s & 512 || a.Ob ? !0 : !1 : !1;
}
function Pc(a) {
  var b = [];
  ka(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Qc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Rc = {};
function Sc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.bb ? !0 : a.i ? !1 : y(Pa, a) : y(Pa, a);
}
function Tc(a) {
  return w(a) ? !0 : !1;
}
function Uc(a, b) {
  return Cc(a, b, Rc) === Rc ? !1 : !0;
}
function Vc(a, b) {
  var c = C(b);
  if (c) {
    var d = G(c), c = H(c);
    return Wc ? Wc(a, d, c) : Xc.call(null, a, d, c);
  }
  return a.p ? a.p() : a.call(null);
}
function Yc(a, b, c) {
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
function Xc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.i & 524288 || b.Cb) ? b.N(null, a) : Ba(b) ? nc(b, a) : "string" === typeof b ? nc(b, a) : y(kb, b) ? lb.c(b, a) : Vc(a, b);
    case 3:
      return Wc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Wc(a, b, c) {
  return c && (c.i & 524288 || c.Cb) ? c.O(null, a, b) : Ba(c) ? oc(c, a, b) : "string" === typeof c ? oc(c, a, b) : y(kb, c) ? lb.g(c, a, b) : Yc(a, b, c);
}
function Zc(a) {
  return a;
}
function $c(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = Wc(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var ad = function ad() {
  switch(arguments.length) {
    case 0:
      return ad.p();
    case 1:
      return ad.a(arguments[0]);
    case 2:
      return ad.c(arguments[0], arguments[1]);
    default:
      return ad.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ad.p = function() {
  return 0;
};
ad.a = function(a) {
  return a;
};
ad.c = function(a, b) {
  return a + b;
};
ad.k = function(a, b, c) {
  return Wc(ad, a + b, c);
};
ad.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ad.k(b, a, c);
};
ad.u = 2;
var bd = function bd() {
  switch(arguments.length) {
    case 1:
      return bd.a(arguments[0]);
    case 2:
      return bd.c(arguments[0], arguments[1]);
    default:
      return bd.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
bd.a = function(a) {
  return-a;
};
bd.c = function(a, b) {
  return a - b;
};
bd.k = function(a, b, c) {
  return Wc(bd, a - b, c);
};
bd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return bd.k(b, a, c);
};
bd.u = 2;
function cd(a, b) {
  return(a % b + b) % b;
}
function dd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function ed(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.p();
    case 1:
      return A.a(arguments[0]);
    default:
      return A.k(arguments[0], new Zb(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.p = function() {
  return "";
};
A.a = function(a) {
  return null == a ? "" : ia(a);
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
function sc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Rb || (b.i ? 0 : y(qb, b)) : y(qb, b)) {
    if (qc(a) && qc(b) && Ac(a) !== Ac(b)) {
      c = !1;
    } else {
      a: {
        c = C(a);
        for (var d = C(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && cc.c(G(c), G(d))) {
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
  return Tc(c);
}
function fd(a) {
  if (C(a)) {
    var b = Vb(G(a));
    for (a = H(a);;) {
      if (null == a) {
        return b;
      }
      b = Wb(b, Vb(G(a)));
      a = H(a);
    }
  } else {
    return 0;
  }
}
function gd(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.m = e;
  this.i = 65937646;
  this.s = 8192;
}
h = gd.prototype;
h.toString = function() {
  return Lb(this);
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
  return Ra(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return jb(bc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return 1 === this.count ? bc : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new gd(b, this.first, this.wa, this.count, this.m);
};
h.I = function(a, b) {
  return new gd(this.h, b, this, this.count + 1, null);
};
gd.prototype[Fa] = function() {
  return ec(this);
};
function hd(a) {
  this.h = a;
  this.i = 65937614;
  this.s = 8192;
}
h = hd.prototype;
h.toString = function() {
  return Lb(this);
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
  throw Error("Can't pop empty list");
};
h.B = function() {
  return hc;
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return this;
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return null;
};
h.la = function() {
  return bc;
};
h.K = function() {
  return null;
};
h.L = function(a, b) {
  return new hd(b);
};
h.I = function(a, b) {
  return new gd(this.h, b, null, 1, null);
};
var bc = new hd(null);
hd.prototype[Fa] = function() {
  return ec(this);
};
var id = function id() {
  return id.k(0 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
id.k = function(a) {
  var b;
  if (a instanceof Zb && 0 === a.j) {
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
  for (var c = bc;;) {
    if (0 < a) {
      var d = a - 1, c = c.I(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
id.u = 0;
id.r = function(a) {
  return id.k(C(a));
};
function jd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.m = d;
  this.i = 65929452;
  this.s = 8192;
}
h = jd.prototype;
h.toString = function() {
  return Lb(this);
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
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return null == this.wa ? bc : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new jd(b, this.first, this.wa, this.m);
};
h.I = function(a, b) {
  return new jd(null, b, this, this.m);
};
jd.prototype[Fa] = function() {
  return ec(this);
};
function tc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.bb)) ? new jd(null, a, b, null) : new jd(null, a, C(b), null);
}
function M(a, b, c, d) {
  this.La = a;
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
        return Cc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return L(c, this);
  };
  a.g = function(a, c, d) {
    return Cc(c, this, d);
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
  return Cc(a, this, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Wb(Rb(this.name), Ub(this.La)) + 2654435769 | 0;
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.La;
};
h.C = function(a, b) {
  return rb(b, [A(":"), A(this.va)].join(""));
};
var kd = function kd() {
  switch(arguments.length) {
    case 1:
      return kd.a(arguments[0]);
    case 2:
      return kd.c(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
kd.a = function(a) {
  if (a instanceof M) {
    return a;
  }
  if (a instanceof Xb) {
    var b;
    if (a && (a.s & 4096 || a.Bb)) {
      b = a.Pa(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new M(b, ld.a ? ld.a(a) : ld.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new M(b[0], b[1], a, null) : new M(null, b[0], a, null)) : null;
};
kd.c = function(a, b) {
  return new M(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
kd.u = 2;
function md(a, b, c, d) {
  this.h = a;
  this.Ja = b;
  this.v = c;
  this.m = d;
  this.i = 32374988;
  this.s = 0;
}
h = md.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
function nd(a) {
  null != a.Ja && (a.v = a.Ja.p ? a.Ja.p() : a.Ja.call(null), a.Ja = null);
  return a.v;
}
h.H = function() {
  return this.h;
};
h.ia = function() {
  pb(this);
  return null == this.v ? null : H(this.v);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  pb(this);
  return null == this.v ? null : G(this.v);
};
h.la = function() {
  pb(this);
  return null != this.v ? ac(this.v) : bc;
};
h.K = function() {
  nd(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof md) {
      a = nd(a);
    } else {
      return this.v = a, C(this.v);
    }
  }
};
h.L = function(a, b) {
  return new md(b, this.Ja, this.v, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
md.prototype[Fa] = function() {
  return ec(this);
};
function od(a, b) {
  this.kb = a;
  this.end = b;
  this.i = 2;
  this.s = 0;
}
od.prototype.add = function(a) {
  this.kb[this.end] = a;
  return this.end += 1;
};
od.prototype.oa = function() {
  var a = new pd(this.kb, 0, this.end);
  this.kb = null;
  return a;
};
od.prototype.P = function() {
  return this.end;
};
function pd(a, b, c) {
  this.b = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.s = 0;
}
h = pd.prototype;
h.P = function() {
  return this.end - this.w;
};
h.F = function(a, b) {
  return this.b[this.w + b];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.b[this.w + b] : c;
};
h.ob = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new pd(this.b, this.w + 1, this.end);
};
h.N = function(a, b) {
  return pc(this.b, b, this.b[this.w], this.w + 1);
};
h.O = function(a, b, c) {
  return pc(this.b, b, c, this.w);
};
function qd(a, b, c, d) {
  this.oa = a;
  this.sa = b;
  this.h = c;
  this.m = d;
  this.i = 31850732;
  this.s = 1536;
}
h = qd.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (1 < Ka(this.oa)) {
    return new qd(Bb(this.oa), this.sa, this.h, null);
  }
  var a = pb(this.sa);
  return null == a ? null : a;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.fa = function() {
  return B.c(this.oa, 0);
};
h.la = function() {
  return 1 < Ka(this.oa) ? new qd(Bb(this.oa), this.sa, this.h, null) : null == this.sa ? bc : this.sa;
};
h.K = function() {
  return this;
};
h.Xa = function() {
  return this.oa;
};
h.Ya = function() {
  return null == this.sa ? bc : this.sa;
};
h.L = function(a, b) {
  return new qd(this.oa, this.sa, b, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
h.Wa = function() {
  return null == this.sa ? null : this.sa;
};
qd.prototype[Fa] = function() {
  return ec(this);
};
function rd(a, b) {
  return 0 === Ka(a) ? b : new qd(a, b, null, null);
}
function sd(a, b) {
  a.add(b);
}
function td(a) {
  for (var b = [];;) {
    if (C(a)) {
      b.push(G(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function ud(a, b) {
  if (qc(a)) {
    return Ac(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && C(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var vd = function vd(b) {
  return null == b ? null : null == H(b) ? C(G(b)) : tc(G(b), vd(H(b)));
}, wd = function wd() {
  switch(arguments.length) {
    case 0:
      return wd.p();
    case 1:
      return wd.a(arguments[0]);
    case 2:
      return wd.c(arguments[0], arguments[1]);
    default:
      return wd.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
wd.p = function() {
  return new md(null, function() {
    return null;
  }, null, null);
};
wd.a = function(a) {
  return new md(null, function() {
    return a;
  }, null, null);
};
wd.c = function(a, b) {
  return new md(null, function() {
    var c = C(a);
    return c ? Oc(c) ? rd(Cb(c), wd.c(Db(c), b)) : tc(G(c), wd.c(ac(c), b)) : b;
  }, null, null);
};
wd.k = function(a, b, c) {
  return function e(a, b) {
    return new md(null, function() {
      var c = C(a);
      return c ? Oc(c) ? rd(Cb(c), e(Db(c), b)) : tc(G(c), e(ac(c), b)) : w(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(wd.c(a, b), c);
};
wd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return wd.k(b, a, c);
};
wd.u = 2;
var yd = function yd() {
  switch(arguments.length) {
    case 0:
      return yd.p();
    case 1:
      return yd.a(arguments[0]);
    case 2:
      return yd.c(arguments[0], arguments[1]);
    default:
      return yd.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.p = function() {
  return wb(zc);
};
yd.a = function(a) {
  return a;
};
yd.c = function(a, b) {
  return xb(a, b);
};
yd.k = function(a, b, c) {
  for (;;) {
    if (a = xb(a, b), w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
yd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yd.k(b, a, c);
};
yd.u = 2;
function zd(a, b, c) {
  var d = C(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
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
    return a.o ? a.o(c, d, e, f) : a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
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
  var E = Qa(F), J = Ra(F);
  if (15 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
  }
  var F = Qa(J), N = Ra(J);
  if (16 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
  }
  var J = Qa(N), Y = Ra(N);
  if (17 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) : a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J);
  }
  var N = Qa(Y), na = Ra(Y);
  if (18 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) : a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N);
  }
  Y = Qa(na);
  na = Ra(na);
  if (19 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y) : a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y);
  }
  var D = Qa(na);
  Ra(na);
  if (20 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y, D) : a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y, D) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Ic() {
  switch(arguments.length) {
    case 2:
      return Ad(arguments[0], arguments[1]);
    case 3:
      return Bd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = tc(arguments[1], tc(arguments[2], arguments[3])), c = a.u;
      if (a.r) {
        var d = ud(b, c + 1);
        a = d <= c ? zd(a, d, b) : a.r(b);
      } else {
        a = a.apply(a, td(b));
      }
      return a;
    case 5:
      return Cd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Dd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new Zb(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Ad(a, b) {
  var c = a.u;
  if (a.r) {
    var d = ud(b, c + 1);
    return d <= c ? zd(a, d, b) : a.r(b);
  }
  return a.apply(a, td(b));
}
function Bd(a, b, c) {
  b = tc(b, c);
  c = a.u;
  if (a.r) {
    var d = ud(b, c + 1);
    return d <= c ? zd(a, d, b) : a.r(b);
  }
  return a.apply(a, td(b));
}
function Cd(a, b, c, d, e) {
  b = tc(b, tc(c, tc(d, e)));
  c = a.u;
  return a.r ? (d = ud(b, c + 1), d <= c ? zd(a, d, b) : a.r(b)) : a.apply(a, td(b));
}
function Dd(a, b, c, d, e, f) {
  b = tc(b, tc(c, tc(d, tc(e, vd(f)))));
  c = a.u;
  return a.r ? (d = ud(b, c + 1), d <= c ? zd(a, d, b) : a.r(b)) : a.apply(a, td(b));
}
function Ed(a) {
  return C(a) ? a : null;
}
function Fd(a, b) {
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
function Gd(a, b) {
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
function Hd(a, b) {
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
      var c = b.p ? b.p() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new Zb(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Cd(b, c, e, f, g);
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
            t = new Zb(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.p = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Id(a, b) {
  return function() {
    function c(c, d, e) {
      return a.o ? a.o(b, c, d, e) : a.call(null, b, c, d, e);
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
          g = new Zb(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return Dd(a, b, c, e, f, vc([g], 0));
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
            t = new Zb(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.p = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Jd(a, b) {
  return function d(b, f) {
    return new md(null, function() {
      var g = C(f);
      if (g) {
        if (Oc(g)) {
          for (var k = Cb(g), l = Ac(k), p = new od(Array(l), 0), q = 0;;) {
            if (q < l) {
              sd(p, function() {
                var d = b + q, f = B.c(k, q);
                return a.c ? a.c(d, f) : a.call(null, d, f);
              }()), q += 1;
            } else {
              break;
            }
          }
          return rd(p.oa(), d(b + l, Db(g)));
        }
        return tc(function() {
          var d = G(g);
          return a.c ? a.c(b, d) : a.call(null, b, d);
        }(), d(b + 1, ac(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Kd(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Nb = c;
  this.rb = d;
  this.s = 16386;
  this.i = 6455296;
}
h = Kd.prototype;
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return this === b;
};
h.ub = function() {
  return this.state;
};
h.H = function() {
  return this.h;
};
h.pb = function(a, b, c) {
  for (var d = C(this.rb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var k = K(a, 0);
      a = K(a, 1);
      var l = b, p = c;
      a.o ? a.o(k, this, l, p) : a.call(null, k, this, l, p);
      g += 1;
    } else {
      if (a = C(d)) {
        d = a, Oc(d) ? (e = Cb(d), d = Db(d), a = e, f = Ac(e), e = a) : (a = G(d), k = K(a, 0), a = K(a, 1), e = k, f = b, g = c, a.o ? a.o(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function() {
  return this[fa] || (this[fa] = ++ha);
};
function Ld() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new Zb(Array.prototype.slice.call(arguments, 1), 0), c = Sc(b) ? Ad(Md, b) : b, b = L(c, xa), c = L(c, Nd);
      return new Kd(a, b, c, null);
  }
}
function O(a) {
  return new Kd(a, null, null, null);
}
function Od(a, b) {
  if (a instanceof Kd) {
    var c = a.Nb;
    if (null != c && !w(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = id(new Xb(null, "validate", "validate", 1439230700, null), new Xb(null, "new-value", "new-value", -1567397401, null));
        return Pd.a ? Pd.a(a) : Pd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && ub(a, c, b);
    return b;
  }
  return Hb(a, b);
}
var Qd = function Qd() {
  switch(arguments.length) {
    case 2:
      return Qd.c(arguments[0], arguments[1]);
    case 3:
      return Qd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Qd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Qd.k(arguments[0], arguments[1], arguments[2], arguments[3], new Zb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Qd.c = function(a, b) {
  var c;
  a instanceof Kd ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Od(a, c)) : c = Ib.c(a, b);
  return c;
};
Qd.g = function(a, b, c) {
  if (a instanceof Kd) {
    var d = a.state;
    b = b.c ? b.c(d, c) : b.call(null, d, c);
    a = Od(a, b);
  } else {
    a = Ib.g(a, b, c);
  }
  return a;
};
Qd.o = function(a, b, c, d) {
  if (a instanceof Kd) {
    var e = a.state;
    b = b.g ? b.g(e, c, d) : b.call(null, e, c, d);
    a = Od(a, b);
  } else {
    a = Ib.o(a, b, c, d);
  }
  return a;
};
Qd.k = function(a, b, c, d, e) {
  return a instanceof Kd ? Od(a, Cd(b, a.state, c, d, e)) : Ib.t(a, b, c, d, e);
};
Qd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Qd.k(b, a, c, d, e);
};
Qd.u = 4;
var Rd = function Rd() {
  switch(arguments.length) {
    case 1:
      return Rd.a(arguments[0]);
    case 2:
      return Rd.c(arguments[0], arguments[1]);
    case 3:
      return Rd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Rd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Rd.k(arguments[0], arguments[1], arguments[2], arguments[3], new Zb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Rd.a = function(a) {
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
        return b.p ? b.p() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new Zb(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Bd(a, e, f);
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
              q = new Zb(r, 0);
            }
            return g.k(a, b, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.u = 2;
      f.r = g.r;
      f.p = e;
      f.a = d;
      f.c = c;
      f.k = g.k;
      return f;
    }();
  };
};
Rd.c = function(a, b) {
  return new md(null, function() {
    var c = C(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Cb(c), e = Ac(d), f = new od(Array(e), 0), g = 0;;) {
          if (g < e) {
            sd(f, function() {
              var b = B.c(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return rd(f.oa(), Rd.c(a, Db(c)));
      }
      return tc(function() {
        var b = G(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Rd.c(a, ac(c)));
    }
    return null;
  }, null, null);
};
Rd.g = function(a, b, c) {
  return new md(null, function() {
    var d = C(b), e = C(c);
    if (d && e) {
      var f = tc, g;
      g = G(d);
      var k = G(e);
      g = a.c ? a.c(g, k) : a.call(null, g, k);
      d = f(g, Rd.g(a, ac(d), ac(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Rd.o = function(a, b, c, d) {
  return new md(null, function() {
    var e = C(b), f = C(c), g = C(d);
    if (e && f && g) {
      var k = tc, l;
      l = G(e);
      var p = G(f), q = G(g);
      l = a.g ? a.g(l, p, q) : a.call(null, l, p, q);
      e = k(l, Rd.o(a, ac(e), ac(f), ac(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Rd.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new md(null, function() {
      var b = Rd.c(C, a);
      return Fd(Zc, b) ? tc(Rd.c(G, b), k(Rd.c(ac, b))) : null;
    }, null, null);
  };
  return Rd.c(function() {
    return function(b) {
      return Ad(a, b);
    };
  }(f), f(yc.k(e, d, vc([c, b], 0))));
};
Rd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Rd.k(b, a, c, d, e);
};
Rd.u = 4;
function Sd(a, b) {
  return Ad(wd, Bd(Rd, a, b));
}
function Td(a, b) {
  return new md(null, function() {
    var c = C(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Cb(c), e = Ac(d), f = new od(Array(e), 0), g = 0;;) {
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
        return rd(f.oa(), Td(a, Db(c)));
      }
      d = G(c);
      c = ac(c);
      return w(a.a ? a.a(d) : a.call(null, d)) ? tc(d, Td(a, c)) : Td(a, c);
    }
    return null;
  }, null, null);
}
var Ud = function Ud() {
  switch(arguments.length) {
    case 2:
      return Ud.c(arguments[0], arguments[1]);
    case 3:
      return Ud.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Ud.c = function(a, b) {
  var c;
  null != a ? a && (a.s & 4 || a.vb) ? (c = Wc(xb, wb(a), b), c = yb(c), c = Jc(c, Kc(a))) : c = Wc(Ma, a, b) : c = Wc(yc, bc, b);
  return c;
};
Ud.g = function(a, b, c) {
  a && (a.s & 4 || a.vb) ? (b = $c(b, yd, wb(a), c), b = yb(b), a = Jc(b, Kc(a))) : a = $c(b, yc, a, c);
  return a;
};
Ud.u = 3;
var Vd = function Vd() {
  switch(arguments.length) {
    case 3:
      return Vd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Vd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Vd.t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Vd.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Vd.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new Zb(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Vd.g = function(a, b, c) {
  return Dc.g(a, b, function() {
    var d = L(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
};
Vd.o = function(a, b, c, d) {
  return Dc.g(a, b, function() {
    var e = L(a, b);
    return c.c ? c.c(e, d) : c.call(null, e, d);
  }());
};
Vd.t = function(a, b, c, d, e) {
  return Dc.g(a, b, function() {
    var f = L(a, b);
    return c.g ? c.g(f, d, e) : c.call(null, f, d, e);
  }());
};
Vd.J = function(a, b, c, d, e, f) {
  return Dc.g(a, b, function() {
    var g = L(a, b);
    return c.o ? c.o(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
Vd.k = function(a, b, c, d, e, f, g) {
  return Dc.g(a, b, Dd(c, L(a, b), d, e, f, vc([g], 0)));
};
Vd.r = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), g = H(f), f = G(g), g = H(g);
  return Vd.k(b, a, c, d, e, f, g);
};
Vd.u = 6;
function Wd(a, b) {
  this.l = a;
  this.b = b;
}
function Xd(a, b) {
  return new Wd(a, b);
}
function Yd(a) {
  return new Wd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Zd(a) {
  return new Wd(a.l, Ga(a.b));
}
function $d(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ae(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Yd(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var be = function be(b, c, d, e) {
  var f = Zd(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.b[g] = e : (d = d.b[g], b = null != d ? be(b, c - 5, d, e) : ae(null, c - 5, e), f.b[g] = b);
  return f;
};
function ce(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function de(a, b) {
  if (b >= $d(a)) {
    return a.n;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function ee(a, b) {
  return 0 <= b && b < a.d ? de(a, b) : ce(b, a.d);
}
var fe = function fe(b, c, d, e, f) {
  var g = Zd(d);
  if (0 === c) {
    g.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = fe(b, c - 5, d.b[k], e, f);
    g.b[k] = b;
  }
  return g;
}, ge = function ge(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = ge(b, c - 5, d.b[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Zd(d);
    d.b[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Zd(d);
  d.b[e] = null;
  return d;
};
function he(a, b, c, d, e, f) {
  this.j = a;
  this.jb = b;
  this.b = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
he.prototype.gb = function() {
  return this.j < this.end;
};
he.prototype.next = function() {
  32 === this.j - this.jb && (this.b = de(this.ra, this.j), this.jb += 32);
  var a = this.b[this.j & 31];
  this.j += 1;
  return a;
};
function P(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.n = e;
  this.m = f;
  this.i = 167668511;
  this.s = 8196;
}
h = P.prototype;
h.toString = function() {
  return Lb(this);
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
  return ee(this, b)[b & 31];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? de(this, b)[b & 31] : c;
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return $d(this) <= b ? (a = Ga(this.n), a[b & 31] = c, new P(this.h, this.d, this.shift, this.root, a, null)) : new P(this.h, this.d, this.shift, fe(this, this.shift, this.root, b, c), this.n, null);
  }
  if (b === this.d) {
    return Ma(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.d), A("]")].join(""));
};
h.Na = function() {
  var a = this.d;
  return new he(0, 0, 0 < Ac(this) ? de(this, 0) : null, this, 0, a);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.Za = function() {
  return B.c(this, 0);
};
h.$a = function() {
  return B.c(this, 1);
};
h.Ga = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return jb(zc, this.h);
  }
  if (1 < this.d - $d(this)) {
    return new P(this.h, this.d - 1, this.shift, this.root, this.n.slice(0, -1), null);
  }
  var a = de(this, this.d - 2), b = ge(this, this.shift, this.root), b = null == b ? Q : b, c = this.d - 1;
  return 5 < this.shift && null == b.b[1] ? new P(this.h, c, this.shift - 5, b.b[0], a, null) : new P(this.h, c, this.shift, b, a, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  if (b instanceof P) {
    if (this.d === Ac(b)) {
      for (var c = Jb(this), d = Jb(b);;) {
        if (w(c.gb())) {
          var e = c.next(), f = d.next();
          if (!cc.c(e, f)) {
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
    return sc(this, b);
  }
};
h.Fa = function() {
  var a = this;
  return new ie(a.d, a.shift, function() {
    var b = a.root;
    return je.a ? je.a(b) : je.call(null, b);
  }(), function() {
    var b = a.n;
    return ke.a ? ke.a(b) : ke.call(null, b);
  }());
};
h.M = function() {
  return Jc(zc, this.h);
};
h.N = function(a, b) {
  return lc(this, b);
};
h.O = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = de(this, a);
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
    return db(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.K = function() {
  if (0 === this.d) {
    return null;
  }
  if (32 >= this.d) {
    return new Zb(this.n, 0);
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
  return le ? le(this, a, 0, 0) : me.call(null, this, a, 0, 0);
};
h.L = function(a, b) {
  return new P(b, this.d, this.shift, this.root, this.n, this.m);
};
h.I = function(a, b) {
  if (32 > this.d - $d(this)) {
    for (var c = this.n.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.n[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new P(this.h, this.d + 1, this.shift, this.root, d, null);
  }
  c = (d = this.d >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Yd(null), d.b[0] = this.root, e = ae(null, this.shift, new Wd(null, this.n)), d.b[1] = e) : d = be(this, this.shift, this.root, new Wd(null, this.n));
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
var Q = new Wd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), zc = new P(null, 0, 5, Q, [], hc);
function ne(a) {
  var b = a.length;
  if (32 > b) {
    return new P(null, b, 5, Q, a, null);
  }
  for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Fa(null);;) {
    if (c < b) {
      var e = c + 1, d = yd.c(d, a[c]), c = e
    } else {
      return yb(d);
    }
  }
}
P.prototype[Fa] = function() {
  return ec(this);
};
function oe(a) {
  return Ba(a) ? ne(a) : yb(Wc(xb, wb(zc), a));
}
function pe(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.s = 1536;
}
h = pe.prototype;
h.toString = function() {
  return Lb(this);
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
    a = le ? le(a, b, c, d) : me.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Eb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(zc, this.h);
};
h.N = function(a, b) {
  var c;
  c = this.D;
  var d = this.j + this.w, e = Ac(this.D);
  c = qe ? qe(c, d, e) : re.call(null, c, d, e);
  return lc(c, b);
};
h.O = function(a, b, c) {
  a = this.D;
  var d = this.j + this.w, e = Ac(this.D);
  a = qe ? qe(a, d, e) : re.call(null, a, d, e);
  return mc(a, b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = le ? le(a, b, c, d) : me.call(null, a, b, c, d);
    return null == a ? bc : a;
  }
  return Db(this);
};
h.K = function() {
  return this;
};
h.Xa = function() {
  var a = this.ga;
  return new pd(a, this.w, a.length);
};
h.Ya = function() {
  var a = this.j + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = de(this.D, a);
    return le ? le(b, c, a, 0) : me.call(null, b, c, a, 0);
  }
  return bc;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return se ? se(c, d, e, f, b) : me.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
h.Wa = function() {
  var a = this.j + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = de(this.D, a);
    return le ? le(b, c, a, 0) : me.call(null, b, c, a, 0);
  }
  return null;
};
pe.prototype[Fa] = function() {
  return ec(this);
};
function me() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new pe(a, ee(a, b), b, c, null, null);
    case 4:
      return le(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return se(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function le(a, b, c, d) {
  return new pe(a, b, c, d, null, null);
}
function se(a, b, c, d, e) {
  return new pe(a, b, c, d, e, null);
}
function te(a, b, c, d, e) {
  this.h = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.s = 8192;
}
h = te.prototype;
h.toString = function() {
  return Lb(this);
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
  return 0 > b || this.end <= this.start + b ? ce(b, this.end - this.start) : B.c(this.ra, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.g(this.ra, this.start + b, c);
};
h.cb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Dc.g(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ue.t ? ue.t(a, c, b, d, null) : ue.call(null, a, c, b, d, null);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.end - this.start;
};
h.Ga = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.ra, c = this.start, d = this.end - 1;
  return ue.t ? ue.t(a, b, c, d, null) : ue.call(null, a, b, c, d, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(zc, this.h);
};
h.N = function(a, b) {
  return lc(this, b);
};
h.O = function(a, b, c) {
  return mc(this, b, c);
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return db(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.K = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : tc(B.c(a.ra, e), new md(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.m;
  return ue.t ? ue.t(b, c, d, e, f) : ue.call(null, b, c, d, e, f);
};
h.I = function(a, b) {
  var c = this.h, d = db(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return ue.t ? ue.t(c, d, e, f, null) : ue.call(null, c, d, e, f, null);
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
te.prototype[Fa] = function() {
  return ec(this);
};
function ue(a, b, c, d, e) {
  for (;;) {
    if (b instanceof te) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = Ac(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new te(a, b, c, d, e);
    }
  }
}
function re() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return qe(a, arguments[1], Ac(a));
    case 3:
      return qe(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function qe(a, b, c) {
  return ue(null, a, b, c, null);
}
function ve(a, b) {
  return a === b.l ? b : new Wd(a, Ga(b.b));
}
function je(a) {
  return new Wd({}, Ga(a.b));
}
function ke(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qc(a, 0, b, 0, a.length);
  return b;
}
var we = function we(b, c, d, e) {
  d = ve(b.root.l, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.b[f];
    b = null != g ? we(b, c - 5, g, e) : ae(b.root.l, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function ie(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.s = 88;
  this.i = 275;
}
h = ie.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.d - $d(this)) {
      this.n[this.d & 31] = b;
    } else {
      var c = new Wd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ae(this.root.l, this.shift, c);
        this.root = new Wd(this.root.l, d);
        this.shift = e;
      } else {
        this.root = we(this, this.shift, this.root, c);
      }
    }
    this.d += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ra = function() {
  if (this.root.l) {
    this.root.l = null;
    var a = this.d - $d(this), b = Array(a);
    Qc(this.n, 0, b, 0, a);
    return new P(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return Ab(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.nb = function(a, b, c) {
  var d = this;
  if (d.root.l) {
    if (0 <= b && b < d.d) {
      return $d(this) <= b ? d.n[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ve(d.root.l, k);
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
      return xb(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.d)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
h.F = function(a, b) {
  if (this.root.l) {
    return ee(this, b)[b & 31];
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
function xe() {
  this.i = 2097152;
  this.s = 0;
}
xe.prototype.equiv = function(a) {
  return this.q(null, a);
};
xe.prototype.q = function() {
  return!1;
};
var ye = new xe;
function ze(a, b) {
  return Tc(Mc(b) ? Ac(a) === Ac(b) ? Fd(Zc, Rd.c(function(a) {
    return cc.c(Cc(b, G(a), ye), G(H(a)));
  }, a)) : null : null);
}
function Ae(a) {
  this.v = a;
}
Ae.prototype.next = function() {
  if (null != this.v) {
    var a = G(this.v), b = K(a, 0), a = K(a, 1);
    this.v = H(this.v);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Be(a) {
  return new Ae(C(a));
}
function Ce(a, b) {
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
      if (b instanceof Xb) {
        a: {
          for (c = a.length, d = b.ya, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Xb && d === f.ya) {
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
              if (cc.c(b, a[d])) {
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
function De(a, b, c) {
  this.b = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.s = 0;
}
h = De.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  return this.j < this.b.length - 2 ? new De(this.b, this.j + 2, this.ka) : null;
};
h.P = function() {
  return(this.b.length - this.j) / 2;
};
h.B = function() {
  return gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.ka);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return new P(null, 2, 5, Q, [this.b[this.j], this.b[this.j + 1]], null);
};
h.la = function() {
  return this.j < this.b.length - 2 ? new De(this.b, this.j + 2, this.ka) : bc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new De(this.b, this.j, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
De.prototype[Fa] = function() {
  return ec(this);
};
function Ee(a, b, c) {
  this.b = a;
  this.j = b;
  this.d = c;
}
Ee.prototype.gb = function() {
  return this.j < this.d;
};
Ee.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.b[this.j], this.b[this.j + 1]], null);
  this.j += 2;
  return a;
};
function n(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.b = c;
  this.m = d;
  this.i = 16647951;
  this.s = 8196;
}
h = n.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return ec(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.entries = function() {
  return Be(C(this));
};
h.values = function() {
  return ec(Ge.a ? Ge.a(this) : Ge.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Oc(b) ? (c = Cb(b), b = Db(b), g = c, d = Ac(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
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
  a = Ce(this.b, b);
  return-1 === a ? c : this.b[a + 1];
};
h.Na = function() {
  return new Ee(this.b, 0, 2 * this.d);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
h.q = function(a, b) {
  if (b && (b.i & 1024 || b.yb)) {
    var c = this.b.length;
    if (this.d === b.P(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.b[d], Rc);
          if (e !== Rc) {
            if (cc.c(this.b[d + 1], e)) {
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
    return ze(this, b);
  }
};
h.Fa = function() {
  return new He({}, this.b.length, Ga(this.b));
};
h.M = function() {
  return jb(R, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.mb = function(a, b) {
  if (0 <= Ce(this.b, b)) {
    var c = this.b.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.h, this.d - 1, d, null);
      }
      cc.c(b, this.b[e]) || (d[f] = this.b[e], d[f + 1] = this.b[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ea = function(a, b, c) {
  a = Ce(this.b, b);
  if (-1 === a) {
    if (this.d < Ie) {
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
    return jb(Va(Ud.c(Je, this), b, c), this.h);
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
  return 0 <= a.length - 2 ? new De(a, 0, null) : null;
};
h.L = function(a, b) {
  return new n(b, this.d, this.b, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Va(this, B.c(b, 0), B.c(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
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
var R = new n(null, 0, [], jc), Ie = 8;
n.prototype[Fa] = function() {
  return ec(this);
};
function He(a, b, c) {
  this.Ia = a;
  this.Ka = b;
  this.b = c;
  this.i = 258;
  this.s = 56;
}
h = He.prototype;
h.P = function() {
  if (w(this.Ia)) {
    return dd(this.Ka, 2);
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  if (w(this.Ia)) {
    return a = Ce(this.b, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Qa = function(a, b) {
  if (w(this.Ia)) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : y(Ya, b)) : y(Ya, b)) {
      return zb(this, Ke.a ? Ke.a(b) : Ke.call(null, b), Le.a ? Le.a(b) : Le.call(null, b));
    }
    for (var c = C(b), d = this;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = zb(d, function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
        }(), function() {
          var a = f;
          return Le.a ? Le.a(a) : Le.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ra = function() {
  if (w(this.Ia)) {
    return this.Ia = !1, new n(null, dd(this.Ka, 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  if (w(this.Ia)) {
    a = Ce(this.b, b);
    if (-1 === a) {
      if (this.Ka + 2 <= 2 * Ie) {
        return this.Ka += 2, this.b.push(b), this.b.push(c), this;
      }
      a = this.Ka;
      var d = this.b;
      a = Me.c ? Me.c(a, d) : Me.call(null, a, d);
      return zb(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Me(a, b) {
  for (var c = wb(Je), d = 0;;) {
    if (d < a) {
      c = zb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ne() {
  this.ta = !1;
}
function Oe(a, b) {
  return a === b ? !0 : a === b || a instanceof M && b instanceof M && a.va === b.va ? !0 : cc.c(a, b);
}
function Pe(a, b, c) {
  a = Ga(a);
  a[b] = c;
  return a;
}
function Qe(a, b) {
  var c = Array(a.length - 2);
  Qc(a, 0, c, 0, 2 * b);
  Qc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Re(a, b, c, d) {
  a = a.Ba(b);
  a.b[c] = d;
  return a;
}
function Se(a, b, c) {
  this.l = a;
  this.A = b;
  this.b = c;
}
h = Se.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = ed(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qc(this.b, 0, c, 0, 2 * b);
  return new Se(a, this.A, c);
};
h.Sa = function() {
  var a = this.b;
  return Te ? Te(a) : Ve.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = ed(this.A & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : Oe(c, e) ? f : d;
};
h.qa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = ed(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = ed(this.A);
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
      k[c >>> b & 31] = We.qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.b[e] ? We.qa(a, b + 5, Vb(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Xe(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Qc(this.b, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Qc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ba(a);
    a.b = b;
    a.A |= g;
    return a;
  }
  l = this.b[2 * k];
  g = this.b[2 * k + 1];
  if (null == l) {
    return l = g.qa(a, b + 5, c, d, e, f), l === g ? this : Re(this, a, 2 * k + 1, l);
  }
  if (Oe(d, l)) {
    return e === g ? this : Re(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Ye ? Ye(a, f, l, g, c, d, e) : Ze.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ba(a);
  a.b[e] = null;
  a.b[k] = d;
  return a;
};
h.pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = ed(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = ed(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = We.pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.b[d] ? We.pa(a + 5, Vb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Xe(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Qc(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Qc(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new Se(null, this.A | f, a);
  }
  var l = this.b[2 * g], f = this.b[2 * g + 1];
  if (null == l) {
    return k = f.pa(a + 5, b, c, d, e), k === f ? this : new Se(null, this.A, Pe(this.b, 2 * g + 1, k));
  }
  if (Oe(c, l)) {
    return d === f ? this : new Se(null, this.A, Pe(this.b, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  k = this.b;
  a += 5;
  a = $e ? $e(a, l, f, b, c, d) : Ze.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Se(null, e, d);
};
h.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = ed(this.A & d - 1), f = this.b[2 * e], g = this.b[2 * e + 1];
  return null == f ? (a = g.Ta(a + 5, b, c), a === g ? this : null != a ? new Se(null, this.A, Pe(this.b, 2 * e + 1, a)) : this.A === d ? null : new Se(null, this.A ^ d, Qe(this.b, e))) : Oe(c, f) ? new Se(null, this.A ^ d, Qe(this.b, e)) : this;
};
var We = new Se(null, 0, []);
function Xe(a, b, c) {
  this.l = a;
  this.d = b;
  this.b = c;
}
h = Xe.prototype;
h.Ba = function(a) {
  return a === this.l ? this : new Xe(a, this.d, Ga(this.b));
};
h.Sa = function() {
  var a = this.b;
  return af ? af(a) : bf.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
h.qa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if (null == k) {
    return a = Re(this, a, g, We.qa(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.qa(a, b + 5, c, d, e, f);
  return b === k ? this : Re(this, a, g, b);
};
h.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if (null == g) {
    return new Xe(null, this.d + 1, Pe(this.b, f, We.pa(a + 5, b, c, d, e)));
  }
  a = g.pa(a + 5, b, c, d, e);
  return a === g ? this : new Xe(null, this.d, Pe(this.b, f, a));
};
h.Ta = function(a, b, c) {
  var d = b >>> a & 31, e = this.b[d];
  if (null != e) {
    a = e.Ta(a + 5, b, c);
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
                d = new Se(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Xe(null, this.d - 1, Pe(this.b, d, a));
        }
      } else {
        d = new Xe(null, this.d, Pe(this.b, d, a));
      }
    }
    return d;
  }
  return this;
};
function cf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Oe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function df(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.d = c;
  this.b = d;
}
h = df.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Qc(this.b, 0, b, 0, 2 * this.d);
  return new df(a, this.ua, this.d, b);
};
h.Sa = function() {
  var a = this.b;
  return Te ? Te(a) : Ve.call(null, a);
};
h.Ca = function(a, b, c, d) {
  a = cf(this.b, this.d, c);
  return 0 > a ? d : Oe(c, this.b[a]) ? this.b[a + 1] : d;
};
h.qa = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = cf(this.b, this.d, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ba(a), a.b[b] = d, a.b[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      Qc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.l ? (this.b = b, this.d = d, a = this) : a = new df(this.l, this.ua, d, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Re(this, a, b + 1, e);
  }
  return(new Se(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
h.pa = function(a, b, c, d, e) {
  return b === this.ua ? (a = cf(this.b, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Qc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new df(null, this.ua, this.d + 1, b)) : cc.c(this.b[a], d) ? this : new df(null, this.ua, this.d, Pe(this.b, a + 1, d))) : (new Se(null, 1 << (this.ua >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
h.Ta = function(a, b, c) {
  a = cf(this.b, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new df(null, this.ua, this.d - 1, Qe(this.b, dd(a, 2)));
};
function Ze() {
  switch(arguments.length) {
    case 6:
      return $e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ye(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function $e(a, b, c, d, e, f) {
  var g = Vb(b);
  if (g === d) {
    return new df(null, g, 2, [b, c, e, f]);
  }
  var k = new Ne;
  return We.pa(a, g, b, c, k).pa(a, d, e, f, k);
}
function Ye(a, b, c, d, e, f, g) {
  var k = Vb(c);
  if (k === e) {
    return new df(null, k, 2, [c, d, f, g]);
  }
  var l = new Ne;
  return We.qa(a, b, k, c, d, l).qa(a, b, e, f, g, l);
}
function ef(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = ef.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return null == this.v ? new P(null, 2, 5, Q, [this.xa[this.j], this.xa[this.j + 1]], null) : G(this.v);
};
h.la = function() {
  if (null == this.v) {
    var a = this.xa, b = this.j + 2;
    return ff ? ff(a, b, null) : Ve.call(null, a, b, null);
  }
  var a = this.xa, b = this.j, c = H(this.v);
  return ff ? ff(a, b, c) : Ve.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new ef(b, this.xa, this.j, this.v, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
ef.prototype[Fa] = function() {
  return ec(this);
};
function Ve() {
  switch(arguments.length) {
    case 1:
      return Te(arguments[0]);
    case 3:
      return ff(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Te(a) {
  return ff(a, 0, null);
}
function ff(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new ef(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (w(d) && (d = d.Sa(), w(d))) {
          return new ef(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new ef(null, a, b, c, null);
  }
}
function gf(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = gf.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return G(this.v);
};
h.la = function() {
  var a = this.xa, b = this.j, c = H(this.v);
  return hf ? hf(null, a, b, c) : bf.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new gf(b, this.xa, this.j, this.v, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
gf.prototype[Fa] = function() {
  return ec(this);
};
function bf() {
  switch(arguments.length) {
    case 1:
      return af(arguments[0]);
    case 4:
      return hf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function af(a) {
  return hf(null, a, 0, null);
}
function hf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (w(e) && (e = e.Sa(), w(e))) {
          return new gf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new gf(a, b, c, d, null);
  }
}
function jf(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.m = f;
  this.i = 16123663;
  this.s = 8196;
}
h = jf.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return ec(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.entries = function() {
  return Be(C(this));
};
h.values = function() {
  return ec(Ge.a ? Ge.a(this) : Ge.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Oc(b) ? (c = Cb(b), b = Db(b), g = c, d = Ac(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
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
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Vb(b), b, c);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ic(this);
};
h.q = function(a, b) {
  return ze(this, b);
};
h.Fa = function() {
  return new kf({}, this.root, this.d, this.ma, this.na);
};
h.M = function() {
  return jb(Je, this.h);
};
h.mb = function(a, b) {
  if (null == b) {
    return this.ma ? new jf(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ta(0, Vb(b), b);
  return c === this.root ? this : new jf(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new jf(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Ne;
  b = (null == this.root ? We : this.root).pa(0, Vb(b), b, c, a);
  return b === this.root ? this : new jf(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.ma ? tc(new P(null, 2, 5, Q, [null, this.na], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new jf(b, this.d, this.root, this.ma, this.na, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Va(this, B.c(b, 0), B.c(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
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
var Je = new jf(null, 0, null, !1, null, jc);
function Ec(a, b) {
  for (var c = a.length, d = 0, e = wb(Je);;) {
    if (d < c) {
      var f = d + 1, e = e.Ha(null, a[d], b[d]), d = f
    } else {
      return yb(e);
    }
  }
}
jf.prototype[Fa] = function() {
  return ec(this);
};
function kf(a, b, c, d, e) {
  this.l = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.s = 56;
}
function lf(a, b) {
  if (a.l) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : y(Ya, b)) : y(Ya, b)) {
      return mf(a, Ke.a ? Ke.a(b) : Ke.call(null, b), Le.a ? Le.a(b) : Le.call(null, b));
    }
    for (var c = C(b), d = a;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = mf(d, function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
        }(), function() {
          var a = f;
          return Le.a ? Le.a(a) : Le.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function mf(a, b, c) {
  if (a.l) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Ne;
      b = (null == a.root ? We : a.root).qa(a.l, 0, Vb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = kf.prototype;
h.P = function() {
  if (this.l) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return null == b ? this.ma ? this.na : null : null == this.root ? null : this.root.Ca(0, Vb(b), b);
};
h.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Vb(b), b, c);
};
h.Qa = function(a, b) {
  return lf(this, b);
};
h.Ra = function() {
  var a;
  if (this.l) {
    this.l = null, a = new jf(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ha = function(a, b, c) {
  return mf(this, b, c);
};
var Md = function Md() {
  return Md.k(0 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Md.k = function(a) {
  for (var b = C(a), c = wb(Je);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = zb(c, d, b), b = a;
    } else {
      return yb(c);
    }
  }
};
Md.u = 0;
Md.r = function(a) {
  return Md.k(C(a));
};
function nf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = nf.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new nf(a, this.ka);
};
h.B = function() {
  return gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.ka);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).Za(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new nf(a, this.ka) : bc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new nf(this.ja, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
nf.prototype[Fa] = function() {
  return ec(this);
};
function Fe(a) {
  return(a = C(a)) ? new nf(a, null) : null;
}
function Ke(a) {
  return Za(a);
}
function of(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = of.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new of(a, this.ka);
};
h.B = function() {
  return gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.ka);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).$a(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new of(a, this.ka) : bc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new of(this.ja, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
of.prototype[Fa] = function() {
  return ec(this);
};
function Ge(a) {
  return(a = C(a)) ? new of(a, null) : null;
}
function Le(a) {
  return ab(a);
}
function ld(a) {
  if (a && (a.s & 4096 || a.Bb)) {
    return a.Oa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function pf(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
pf.prototype.gb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
pf.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function qf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.s = 8192;
}
h = qf.prototype;
h.toString = function() {
  return Lb(this);
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
h.Na = function() {
  return new pf(this.start, this.end, this.step);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new qf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new qf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.P = function() {
  if (Ca(pb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = gc(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return lc(this, b);
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
  return null == pb(this) ? null : this.start;
};
h.la = function() {
  return null != pb(this) ? new qf(this.h, this.start + this.step, this.end, this.step, null) : bc;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new qf(b, this.start, this.end, this.step, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
qf.prototype[Fa] = function() {
  return ec(this);
};
function rf() {
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
      return new P(null, 2, 5, Q, [a.p ? a.p() : a.call(null), b.p ? b.p() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new Zb(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new P(null, 2, 5, Q, [Cd(a, c, e, f, g), Cd(b, c, e, f, g)], null);
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
            t = new Zb(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.r = k.r;
    g.p = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function sf(a, b, c, d, e, f, g) {
  var k = qa;
  qa = null == qa ? null : qa - 1;
  try {
    if (null != qa && 0 > qa) {
      return rb(a, "#");
    }
    rb(a, c);
    if (0 === za.a(f)) {
      C(g) && rb(a, function() {
        var a = tf.a(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (C(g)) {
        var l = G(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var p = H(g), q = za.a(f) - 1;;) {
        if (!p || null != q && 0 === q) {
          C(p) && 0 === q && (rb(a, d), rb(a, function() {
            var a = tf.a(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          rb(a, d);
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
    return rb(a, e);
  } finally {
    qa = k;
  }
}
function uf(a, b) {
  for (var c = C(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f);
      rb(a, g);
      f += 1;
    } else {
      if (c = C(c)) {
        d = c, Oc(d) ? (c = Cb(d), e = Db(d), d = c, g = Ac(c), c = e, e = g) : (g = G(d), rb(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var vf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function wf(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return vf[a];
  })), A('"')].join("");
}
function xf(a, b, c) {
  if (null == a) {
    return rb(b, "nil");
  }
  if (void 0 === a) {
    return rb(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = L(c, xa);
    return w(b) ? (b = a ? a.i & 131072 || a.Ab ? !0 : a.i ? !1 : y(fb, a) : y(fb, a)) ? Kc(a) : b : b;
  }())) {
    rb(b, "^");
    var d = Kc(a);
    yf.g ? yf.g(d, b, c) : yf.call(null, d, b, c);
    rb(b, " ");
  }
  return null == a ? rb(b, "nil") : a.Jb ? a.Ub(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.C(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? rb(b, "" + A(a)) : null != a && a.constructor === Object ? (rb(b, "#js "), d = Rd.c(function(b) {
    return new P(null, 2, 5, Q, [kd.a(b), a[b]], null);
  }, Pc(a)), zf.o ? zf.o(d, yf, b, c) : zf.call(null, d, yf, b, c)) : Ba(a) ? sf(b, yf, "#js [", " ", "]", c, a) : w("string" == typeof a) ? w(wa.a(c)) ? rb(b, wf(a)) : rb(b, a) : Gc(a) ? uf(b, vc(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (Ac(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, uf(b, vc(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? uf(b, vc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : y(sb, a)) : y(sb, a)) ? tb(a, b, c) : uf(b, vc(["#\x3c", "" + A(a), "\x3e"], 0));
}
function yf(a, b, c) {
  var d = Af.a(c);
  return w(d) ? (c = Dc.g(c, Bf, xf), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : xf(a, b, c);
}
function Pd() {
  var a = 0 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 0), 0) : null, b = ta(), c;
  if (Lc(a)) {
    c = "";
  } else {
    c = A;
    var d = b, b = new ma;
    a: {
      var e = a, a = new Kb(b);
      yf(G(e), a, d);
      for (var e = C(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.F(null, k);
          rb(a, " ");
          yf(l, a, d);
          k += 1;
        } else {
          if (e = C(e)) {
            f = e, Oc(f) ? (e = Cb(f), g = Db(f), f = e, l = Ac(e), e = g, g = l) : (l = G(f), rb(a, " "), yf(l, a, d), e = H(f), f = null, g = 0), k = 0;
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
function zf(a, b, c, d) {
  return sf(c, function(a, c, d) {
    var k = Za(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    rb(c, " ");
    a = ab(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, C(a));
}
Zb.prototype.ea = !0;
Zb.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
md.prototype.ea = !0;
md.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
ef.prototype.ea = !0;
ef.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
De.prototype.ea = !0;
De.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
pe.prototype.ea = !0;
pe.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
jd.prototype.ea = !0;
jd.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
jf.prototype.ea = !0;
jf.prototype.C = function(a, b, c) {
  return zf(this, yf, b, c);
};
gf.prototype.ea = !0;
gf.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
te.prototype.ea = !0;
te.prototype.C = function(a, b, c) {
  return sf(b, yf, "[", " ", "]", c, this);
};
qd.prototype.ea = !0;
qd.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
Kd.prototype.ea = !0;
Kd.prototype.C = function(a, b, c) {
  rb(b, "#\x3cAtom: ");
  yf(this.state, b, c);
  return rb(b, "\x3e");
};
of.prototype.ea = !0;
of.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
P.prototype.ea = !0;
P.prototype.C = function(a, b, c) {
  return sf(b, yf, "[", " ", "]", c, this);
};
hd.prototype.ea = !0;
hd.prototype.C = function(a, b) {
  return rb(b, "()");
};
n.prototype.ea = !0;
n.prototype.C = function(a, b, c) {
  return zf(this, yf, b, c);
};
qf.prototype.ea = !0;
qf.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
nf.prototype.ea = !0;
nf.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
gd.prototype.ea = !0;
gd.prototype.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
function Cf(a, b) {
  return Wc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Df(a) {
  a *= Math.random.p ? Math.random.p() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Ef = null;
function Ff() {
  if (null == Ef) {
    var a = new n(null, 3, [Gf, R, Hf, R, If, R], null);
    Ef = O ? O(a) : Ld.call(null, a);
  }
  return Ef;
}
function Jf(a, b, c) {
  var d = cc.c(b, c);
  if (!d && !(d = Uc(If.a(a).call(null, b), c)) && (d = Nc(c)) && (d = Nc(b))) {
    if (d = Ac(c) === Ac(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Ac(c)) {
          e = Jf(a, function() {
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
function Kf(a) {
  var b;
  b = Ff();
  b = I.a ? I.a(b) : I.call(null, b);
  return Ed(L(Gf.a(b), a));
}
function Lf(a, b, c, d) {
  Qd.c(a, function() {
    return I.a ? I.a(b) : I.call(null, b);
  });
  Qd.c(c, function() {
    return I.a ? I.a(d) : I.call(null, d);
  });
}
var Mf = function Mf(b, c, d) {
  var e = (I.a ? I.a(d) : I.call(null, d)).call(null, b), e = w(w(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf(c);;) {
      if (0 < Ac(e)) {
        Mf(b, G(e), d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf(b);;) {
      if (0 < Ac(e)) {
        Mf(G(e), c, d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function Nf(a, b, c) {
  c = Mf(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = Jf;
    var d;
    d = Ff();
    d = I.a ? I.a(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Of = function Of(b, c, d, e, f, g, k) {
  var l = Wc(function(e, g) {
    var k = K(g, 0);
    K(g, 1);
    if (Jf(I.a ? I.a(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Nf(k, G(e), f);
      l = w(l) ? g : e;
      if (!w(Nf(G(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(G(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.a ? I.a(e) : I.call(null, e));
  if (w(l)) {
    if (cc.c(I.a ? I.a(k) : I.call(null, k), I.a ? I.a(d) : I.call(null, d))) {
      return Qd.o(g, Dc, c, G(H(l))), G(H(l));
    }
    Lf(g, e, k, d);
    return Of(b, c, d, e, f, g, k);
  }
  return null;
};
function U(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function Pf(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.f = b;
  this.Kb = c;
  this.hb = d;
  this.Ua = e;
  this.Lb = f;
  this.ib = g;
  this.Va = k;
  this.i = 4194305;
  this.s = 4352;
}
h = Pf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y) {
    a = this;
    var na = Dd(a.f, b, c, d, e, vc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y], 0)), Hg = V(this, na);
    w(Hg) || U(a.name, na);
    return Dd(Hg, b, c, d, e, vc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N, Y], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N) {
    a = this;
    var Y = a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N), na = V(this, Y);
    w(na) || U(a.name, Y);
    return na.$ ? na.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N) : na.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J) {
    a = this;
    var N = a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J), Y = V(this, N);
    w(Y) || U(a.name, N);
    return Y.Z ? Y.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J) : Y.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, J);
  }
  function d(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) {
    a = this;
    var J = a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D), N = V(this, J);
    w(N) || U(a.name, J);
    return N.Y ? N.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : N.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D);
  }
  function e(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) {
    a = this;
    var D = a.f.X ? a.f.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E), J = V(this, D);
    w(J) || U(a.name, D);
    return J.X ? J.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : J.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E);
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
    var f = a.f.o ? a.f.o(b, c, d, e) : a.f.call(null, b, c, d, e), g = V(this, f);
    w(g) || U(a.name, f);
    return g.o ? g.o(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function J(a, b, c, d) {
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
  function Y(a, b) {
    a = this;
    var c = a.f.a ? a.f.a(b) : a.f.call(null, b), d = V(this, c);
    w(d) || U(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function na(a) {
    a = this;
    var b = a.f.p ? a.f.p() : a.f.call(null), c = V(this, b);
    w(c) || U(a.name, b);
    return c.p ? c.p() : c.call(null);
  }
  var D = null, D = function(D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, wc, xd, Ue) {
    switch(arguments.length) {
      case 1:
        return na.call(this, D);
      case 2:
        return Y.call(this, D, X);
      case 3:
        return N.call(this, D, X, aa);
      case 4:
        return J.call(this, D, X, aa, ba);
      case 5:
        return F.call(this, D, X, aa, ba, da);
      case 6:
        return E.call(this, D, X, aa, ba, da, ga);
      case 7:
        return x.call(this, D, X, aa, ba, da, ga, ja);
      case 8:
        return v.call(this, D, X, aa, ba, da, ga, ja, la);
      case 9:
        return u.call(this, D, X, aa, ba, da, ga, ja, la, pa);
      case 10:
        return t.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa);
      case 11:
        return r.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va);
      case 12:
        return q.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa);
      case 13:
        return p.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia);
      case 14:
        return l.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa);
      case 15:
        return k.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b);
      case 16:
        return g.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a);
      case 17:
        return f.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib);
      case 18:
        return e.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb);
      case 19:
        return d.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob);
      case 20:
        return c.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, wc);
      case 21:
        return b.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, wc, xd);
      case 22:
        return a.call(this, D, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, wc, xd, Ue);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = na;
  D.c = Y;
  D.g = N;
  D.o = J;
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
  D.lb = b;
  D.Ma = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.p = function() {
  var a = this.f.p ? this.f.p() : this.f.call(null), b = V(this, a);
  w(b) || U(this.name, a);
  return b.p ? b.p() : b.call(null);
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
h.o = function(a, b, c, d) {
  var e = this.f.o ? this.f.o(a, b, c, d) : this.f.call(null, a, b, c, d), f = V(this, e);
  w(f) || U(this.name, e);
  return f.o ? f.o(a, b, c, d) : f.call(null, a, b, c, d);
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
  var F = this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E), J = V(this, F);
  w(J) || U(this.name, F);
  return J.X ? J.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : J.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) {
  var J = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F), N = V(this, J);
  w(N) || U(this.name, J);
  return N.Y ? N.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : N.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) {
  var N = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J), Y = V(this, N);
  w(Y) || U(this.name, N);
  return Y.Z ? Y.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J) : Y.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) {
  var Y = this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N), na = V(this, Y);
  w(na) || U(this.name, Y);
  return na.$ ? na.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N) : na.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N);
};
h.lb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y) {
  var na = Dd(this.f, a, b, c, d, vc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y], 0)), D = V(this, na);
  w(D) || U(this.name, na);
  return Dd(D, a, b, c, d, vc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, J, N, Y], 0));
};
function Qf(a, b, c) {
  Qd.o(a.Ua, Dc, b, c);
  Lf(a.ib, a.Ua, a.Va, a.hb);
}
function V(a, b) {
  cc.c(function() {
    var b = a.Va;
    return I.a ? I.a(b) : I.call(null, b);
  }(), function() {
    var b = a.hb;
    return I.a ? I.a(b) : I.call(null, b);
  }()) || Lf(a.ib, a.Ua, a.Va, a.hb);
  var c = function() {
    var b = a.ib;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = Of(a.name, b, a.hb, a.Ua, a.Lb, a.ib, a.Va);
  return w(c) ? c : function() {
    var b = a.Ua;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, a.Kb);
}
h.Oa = function() {
  return Fb(this.name);
};
h.Pa = function() {
  return Gb(this.name);
};
h.B = function() {
  return this[fa] || (this[fa] = ++ha);
};
var Rf = new M(null, "bullets", "bullets", 1734809024), T = new M(null, "p2", "p2", 905500641), Sf = new M(null, "r", "r", -471384190), xa = new M(null, "meta", "meta", 1499536964), Tf = new M(null, "selected", "selected", 574897764), Uf = new M(null, "enemy-spawn", "enemy-spawn", 1471569540), ya = new M(null, "dup", "dup", 556298533), Vf = new M(null, "dir", "dir", 1734754661), Wf = new M(null, "ammo", "ammo", -1520726489), Nd = new M(null, "validator", "validator", -1966190681), Xf = new M(null, 
"default", "default", -1987822328), Yf = new M(null, "w", "w", 354169001), Zf = new M(null, "th", "th", -545608566), $f = new M(null, "th1", "th1", 583362347), ag = new M(null, "pos", "pos", -864607220), W = new M(null, "type", "type", 1174270348), bg = new M(null, "th2", "th2", 1996173036), cg = new M(null, "cooldown", "cooldown", -1178127572), Bf = new M(null, "fallback-impl", "fallback-impl", -1501286995), ua = new M(null, "flush-on-newline", "flush-on-newline", -151457939), dg = new M(null, "segments", 
"segments", 1937535949), S = new M(null, "p1", "p1", -936759954), eg = new M(null, "targets", "targets", 2014963406), fg = new M(null, "walls", "walls", -268788818), gg = new M(null, "chunks", "chunks", 83720431), Hf = new M(null, "descendants", "descendants", 1824886031), hg = new M(null, "k", "k", -2146297393), ig = new M("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), If = new M(null, "ancestors", "ancestors", -776045424), jg = new M(null, "level", "level", 1290497552), 
kg = new M(null, "turn", "turn", 75759344), wa = new M(null, "readably", "readably", 1129599760), tf = new M(null, "more-marker", "more-marker", -14717935), lg = new M(null, "head", "head", -771383919), mg = new M(null, "c", "c", -1763192079), ng = new M(null, "stop", "stop", -2140911342), za = new M(null, "print-length", "print-length", 1931866356), og = new M(null, "tail", "tail", -1146023564), pg = new M(null, "id", "id", -1388402092), qg = new M(null, "score", "score", -1963588780), rg = new M(null, 
"terrain", "terrain", 704966005), Gf = new M(null, "parents", "parents", -2027538891), sg = new M(null, "length", "length", 588987862), tg = new M(null, "b", "b", 1482224470), ug = new M(null, "right", "right", -452581833), vg = new M(null, "health", "health", -295520649), wg = new M(null, "player", "player", -97687400), xg = new M(null, "target-length", "target-length", 208661657), yg = new M(null, "enemies", "enemies", 2114285722), zg = new M(null, "hierarchy", "hierarchy", -1053470341), Af = new M(null, 
"alt-impl", "alt-impl", 670969595), Ag = new M(null, "barrel-change", "barrel-change", -347000069), Bg = new M(null, "temperature", "temperature", 899018429), Z = new M("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), Cg = new M(null, "left", "left", -399115937);
var Dg = function Dg(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = Dg[m(null == b ? null : b)];
  if (!e && (e = Dg._, !e)) {
    throw z("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function Eg(a) {
  return 33 !== a.b.length;
}
function Fg(a) {
  a = a.b[32];
  return a[a[32] - 1];
}
function Gg(a, b, c) {
  for (;;) {
    if (w(Eg(a))) {
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
;function Ig(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.b;
      }
      if (w(Eg(c))) {
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
    return ce(e, a);
  }
}
function Jg(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Xd(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Xd(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var Kg = function Kg(b, c, d, e, f) {
  if (w(Eg(e))) {
    for (var g = Ga(e.b), g = e = Xd(e.l, g);;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (w(l)) {
          l = Ga(l.b);
          l = Xd(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = Jg(f.b, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Ga(e.b);
    c = e.b[32];
    k = c[32] - 1;
    e = Xd(e.l, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], p = 0 < k ? c[k] - c[k - 1] : c[0], l = p !== 1 << b ? Kg(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = Jg(f.b, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, Lg = function Lg(b, c, d, e) {
  if (w(Eg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = Lg(b - 5, c, d, e.b[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Ga(e.b);
      e[f] = b;
      return Xd(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Ga(e.b);
    e[f] = null;
    return Xd(d, e);
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
    b = Lg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    w(Eg(k)) ? (e = Ga(e.b), c[f] -= 32) : (g = Fg(k) - (w(b) ? Fg(b) : 0), e = Ga(e.b), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return Xd(d, e);
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
  return Xd(d, e);
}, Mg = function Mg(b, c, d, e) {
  if (w(Eg(c))) {
    for (var f = c = new Wd(c.l, Ga(c.b));;) {
      if (0 === b) {
        f.b[d & 31] = e;
        break;
      } else {
        var f = f.b, g = d >> b & 31, k;
        k = f[g];
        k = new Wd(k.l, Ga(k.b));
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
  f[k] = Mg(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return Xd(c.l, f);
};
function Ng(a, b) {
  if (b.l === a) {
    return b;
  }
  var c = Ga(b.b);
  33 === c.length && (c[32] = Ga(c[32]));
  return new Wd(a, c);
}
var Og = function Og(b, c, d, e, f) {
  e = Ng(d, e);
  if (w(Eg(e))) {
    for (var g = e;;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = Jg(f.b, d, b - 5, f);
        } else {
          l = Ng(d, l);
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
      var l = Ng(d, c[k]), p = 0 < k ? g[k] - g[k - 1] : g[0], l = p !== 1 << b ? Og(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = Jg(f.b, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, Pg = function Pg(b, c, d, e, f) {
  d = Ng(c, d);
  if (w(Eg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.b[e & 31] = f;
        break;
      } else {
        var g = g.b, k = e >> b & 31, l = Ng(c, g[k]), g = g[k] = l;
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
    g[l] = Pg(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var Qg = function Qg(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = Qg[m(null == b ? null : b)];
  if (!c && (c = Qg._, !c)) {
    throw z("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function Rg(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.s = 1536;
}
h = Rg.prototype;
h.toString = function() {
  return Lb(this);
};
h.C = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Sg ? Sg(a, b, c, d) : Tg.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Eb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fd(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.M = function() {
  return Jc(bc, this.h);
};
h.N = function(a, b) {
  return lc(qe(this.D, this.j + this.w, Ac(this.D)), b);
};
h.O = function(a, b, c) {
  return mc(qe(this.D, this.j + this.w, Ac(this.D)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Sg ? Sg(a, b, c, d) : Tg.call(null, a, b, c, d);
    return null == a ? bc : a;
  }
  return Db(this);
};
h.K = function() {
  return this;
};
h.Xa = function() {
  var a = this.ga;
  return new pd(a, this.w, a.length);
};
h.Ya = function() {
  var a = this.ga.length, b;
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Ug ? Ug(b, a, 0) : Tg.call(null, b, a, 0)) : b = null;
  return null == b ? bc : b;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return Vg ? Vg(c, d, e, f, b) : Tg.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
h.Wa = function() {
  var a = this.ga.length, b;
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Ug ? Ug(b, a, 0) : Tg.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Tg() {
  switch(arguments.length) {
    case 3:
      return Ug(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Sg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Vg(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ug(a, b, c) {
  return new Rg(a, Ig(a.d, a.shift, a.root, a.n, b), b, c, null, null);
}
function Sg(a, b, c, d) {
  return new Rg(a, b, c, d, null, null);
}
function Vg(a, b, c, d, e) {
  return new Rg(a, b, c, d, e, null);
}
var Wg = function Wg(b, c, d) {
  if (0 === c) {
    var e = b.b;
    b = Array(d);
    Qc(e, 0, b, 0, d);
  } else {
    var f = Eg(b), g = Ca(f) ? b.b[32] : null, k = d - 1 >> c & 31, l = w(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), p = w(f) ? function() {
      var b = cd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.b, q = Wg(e[l], c - 5, p), r = 5 === c ? 32 === q.b.length : Eg(q);
    b = Array(w(w(f) ? r : f) ? 32 : 33);
    var t = w(r) ? function() {
      var b = cd(p, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? q.b.length : Fg(q);
    Qc(e, 0, b, 0, l);
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
  return Xd(null, b);
}, Xg = function Xg(b, c, d, e) {
  if (0 === c) {
    var f = b.b, g = f.length - d, k = Array(g);
    Qc(f, d, k, 0, g);
    return Xd(null, k);
  }
  var l = Eg(b), f = b.b, p = Ca(l) ? b.b[32] : null, q = d >> c & 31, r = w(l) ? q : function() {
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
  }() : p[32], t = Xg(f[r], c - 5, 0 < r ? d - (w(l) ? r * (1 << c) : p[r - 1]) : d, function() {
    var b = 1 << c, d = 0 < r ? e - (w(l) ? r * (1 << c) : p[r - 1]) : e;
    return b < d ? b : d;
  }()), g = k - r, g = null == t ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (w(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], v = 1 << c, x = 0, E = w(function() {
      var b = null == t;
      return b ? b : (b = 5 === c) ? b : Eg(t);
    }()) ? (1 << c) - (d >> c - 5 & 31) : Fg(t);;) {
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
  Qc(f, null == t ? r + 1 : r, k, 0, g);
  null != t && (k[0] = t);
  k[32] = u;
  return Xd(b.l, k);
};
function Yg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.s = 2052;
}
h = Yg.prototype;
h.toString = function() {
  return Lb(this);
};
h.da = function(a, b) {
  return B.g(this, b, null);
};
h.G = function(a, b, c) {
  return B.g(this, b, c);
};
h.F = function(a, b) {
  if (0 <= b && b < this.d) {
    var c = this.d - this.n.length;
    if (c <= b) {
      return this.n[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.b;
        return f[c >> e & 31];
      }
      if (w(Eg(d))) {
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
    return ce(b, this.d);
  }
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? B.c(this, b) : c;
};
h.C = function(a, b, c) {
  return sf(b, yf, "[", " ", "]", c, this);
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.n.length;
    return b >= d ? (a = Array(this.n.length), b -= d, Qc(this.n, 0, a, 0, this.n.length), a[b] = c, new Yg(this.d, this.shift, this.root, a, this.h, null)) : new Yg(this.d, this.shift, Mg(this.shift, this.root, b, c), this.n, this.h, null);
  }
  return b === this.d ? Ma(this, c) : ce(b, this.d);
};
h.fb = function() {
  return this;
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.Za = function() {
  return B.c(this, 0);
};
h.$a = function() {
  return B.c(this, 1);
};
h.Ga = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return jb(zc, this.h);
  }
  if (1 < this.n.length) {
    var a = Array(this.n.length - 1);
    Qc(this.n, 0, a, 0, a.length);
    return new Yg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = Ig(this.d, this.shift, this.root, this.n, this.d - 2), b = Lg(this.shift, this.d - this.n.length, this.root.l, this.root);
  return null == b ? new Yg(this.d - 1, this.shift, Q, a, this.h, null) : 5 < this.shift && null == b.b[1] ? new Yg(this.d - 1, this.shift - 5, b.b[0], a, this.h, null) : new Yg(this.d - 1, this.shift, b, a, this.h, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fd(this);
};
h.q = function(a, b) {
  return sc(this, b);
};
h.Fa = function() {
  var a = this.d, b = this.shift, c = new Wd({}, Ga(this.root.b)), d = this.n, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qc(d, 0, e, 0, d.length);
  d = this.n.length;
  return Zg.t ? Zg.t(a, b, c, e, d) : Zg.call(null, a, b, c, e, d);
};
h.M = function() {
  return Jc(zc, this.h);
};
h.eb = function(a, b, c) {
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
  var d = this.d - this.n.length;
  if (b >= d) {
    return c = Array(a), Qc(this.n, b - d, c, 0, a), new Yg(a, 5, Q, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : Wg(this.root, this.shift, c);
  b = 0 === b ? f : Xg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Qc(this.n, 0, d, 0, c), c = d) : c = Ig(a, this.shift, b, [], a - 1);
  e = e ? b : Lg(this.shift, a, b.l, b);
  if (null == e) {
    return new Yg(a, 5, Q, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.b[1]) {
      b -= 5, e = e.b[0];
    } else {
      return new Yg(a, b, e, c, this.h, null);
    }
  }
};
h.N = function(a, b) {
  return lc(this, b);
};
h.O = function(a, b, c) {
  return mc(this, b, c);
};
h.Ea = function(a, b, c) {
  return db(this, b, c);
};
h.K = function() {
  return 0 === this.d ? null : 0 === this.d - this.n.length ? uc(this.n, 0) : Ug(this, 0, 0);
};
h.L = function(a, b) {
  return new Yg(this.d, this.shift, this.root, this.n, b, this.m);
};
h.I = function(a, b) {
  if (32 > this.n.length) {
    var c = this.n.length, d = Array(c + 1);
    Qc(this.n, 0, d, 0, c);
    d[c] = b;
    return new Yg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Xd(this.root.l, this.n);
  d = [null];
  d[0] = b;
  if (w(Gg(this.root, this.shift, this.d))) {
    if (w(Eg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, e), g = e;
      g[0] = this.root;
      g[1] = Jg(this.n, this.root.l, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, e), k = this.root.b[32][31];
      e[0] = this.root;
      e[1] = Jg(this.n, this.root.l, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new Yg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new Yg(this.d + 1, this.shift, Kg(this.shift, this.d, this.root.l, this.root, c), d, this.h, null);
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
P.prototype.fb = function() {
  return new Yg(Ac(this), this.shift, this.root, this.n, Kc(this), null);
};
te.prototype.fb = function() {
  var a = this.start, b = this.end;
  return Dg(Qg(this.ra), a, b);
};
function $g(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.za = e;
  this.s = 88;
  this.i = 2;
}
h = $g.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.za) {
      this.n[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Xd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      this.za = 1;
      if (w(Gg(this.root, this.shift, this.d))) {
        if (w(Eg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = Jg(this.n, this.root.l, this.shift, c);
          this.root = Xd(this.root.l, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, d), g = this.root.b[32][31];
          d[0] = this.root;
          d[1] = Jg(this.n, this.root.l, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = Og(this.shift, this.d, this.root.l, this.root, c);
      }
      this.d += 1;
    }
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ra = function() {
  if (this.root.l) {
    this.root.l = null;
    var a = Array(this.za);
    Qc(this.n, 0, a, 0, this.za);
    return new Yg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  return Ab(this, b, c);
};
h.nb = function(a, b, c) {
  if (this.root.l) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.n[b - a] = c : this.root = Pg(this.shift, this.root.l, this.root, b, c), this) : b === this.d ? xb(this, c) : ce(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function Zg(a, b, c, d, e) {
  return new $g(a, b, c, d, e);
}
;P.prototype.eb = function(a, b, c) {
  return Dg(Qg(this), b, c);
};
te.prototype.eb = function(a, b, c) {
  return Dg(Qg(this), b, c);
};
function ah(a, b) {
  return Dg(a, b, Ac(a));
}
;function bh(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c - e, d - f];
}
function ch(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c + e, d + f];
}
function dh(a, b) {
  var c = K(b, 0), d = K(b, 1);
  return[a * c, a * d];
}
function eh(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return c * e + d * f;
}
function fh(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.atan2(a, b);
}
;var gh = function gh() {
  return gh.k(arguments[0], 1 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
gh.k = function(a, b) {
  var c = K(b, 0), d = K(c, 0), c = K(c, 1);
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
      var k = e.F(null, g), c = K(k, 0), k = K(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = C(d)) {
        Oc(d) ? (e = Cb(d), d = Db(d), c = e, f = Ac(e), e = c) : (e = G(d), c = K(e, 0), k = K(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
gh.u = 1;
gh.r = function(a) {
  var b = G(a);
  a = H(a);
  return gh.k(b, a);
};
var hh = function hh() {
  return hh.k(arguments[0], 1 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
hh.k = function(a, b) {
  Bd(gh, a, b);
  return a.stroke();
};
hh.u = 1;
hh.r = function(a) {
  var b = G(a);
  a = H(a);
  return hh.k(b, a);
};
function ih(a, b, c, d, e) {
  var f = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function jh(a, b) {
  a.save();
  try {
    b.p ? b.p() : b.call(null);
  } finally {
    a.restore();
  }
}
;var kh = new P(null, 8, 5, Q, [new P(null, 4, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-415, 44], null), T, new P(null, 2, 5, Q, [-415, -313], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-415, -313], null), T, new P(null, 2, 5, Q, [-55, -313], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-51, 246], null), T, new P(null, 2, 5, Q, [377, 246], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [377, 246], null), T, new P(null, 2, 5, Q, [377, 
-200], null)], null)], null), new P(null, 8, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-344, 341], null), T, [-469, 341]], null), new n(null, 3, [W, Z, S, [-469, 341], T, [-469, -292]], null), new n(null, 3, [W, Z, S, [-469, -292], T, [-327, -292]], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-189, 340], null), T, [261, 340]], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-203, -294], null), T, [261, -294]], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [409, 
-293], null), T, [541, -293]], null), new n(null, 3, [W, Z, S, [541, -293], T, [541, 327]], null), new n(null, 3, [W, Z, S, [541, 327], T, [420, 327]], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, 145], null), T, new P(null, 2, 5, Q, [-487, -206], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, -206], null), T, [-241, -452]], null), new n(null, 3, [W, Z, S, [-241, -452], T, new P(null, 2, 5, Q, [-5, -452], null)], null), new n(null, 
3, [W, Z, S, new P(null, 2, 5, Q, [-5, -452], null), T, new P(null, 2, 5, Q, [-5, -280], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-190, 399], null), T, new P(null, 2, 5, Q, [153, 399], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [153, 399], null), T, new P(null, 2, 5, Q, [461, 399], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [461, 399], null), T, new P(null, 2, 5, Q, [461, 120], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [461, 
120], null), T, new P(null, 2, 5, Q, [261, 120], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [318, -426], null), T, [530, -214]], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-508, 422], null), T, [-235, 149]], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-363, 146], null), T, new P(null, 2, 5, Q, [-30, 147], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-30, 147], null), T, new P(null, 2, 5, Q, [88, 314], null)], null), 
new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [88, 314], null), T, new P(null, 2, 5, Q, [332, 315], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [332, 315], null), T, new P(null, 2, 5, Q, [527, 51], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [527, 51], null), T, new P(null, 2, 5, Q, [350, -268], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [350, -268], null), T, new P(null, 2, 5, Q, [93, -268], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 
5, Q, [93, -268], null), T, new P(null, 2, 5, Q, [-34, -110], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-34, -110], null), T, new P(null, 2, 5, Q, [-371, -108], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-460, 353], null), T, new P(null, 2, 5, Q, [-65, 353], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, -314], null), T, new P(null, 2, 5, Q, [-62, -313], null)], null)], null), new P(null, 10, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 
5, Q, [330, -239], null), T, new P(null, 2, 5, Q, [331, 233], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [331, 233], null), T, new P(null, 2, 5, Q, [-239, 233], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-239, 233], null), T, new P(null, 2, 5, Q, [-241, 353], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-241, 353], null), T, new P(null, 2, 5, Q, [496, 352], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [496, 352], null), T, new P(null, 
2, 5, Q, [493, -111], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [77, -126], null), T, new P(null, 2, 5, Q, [-368, -126], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-368, -126], null), T, new P(null, 2, 5, Q, [-368, 224], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-368, 224], null), T, new P(null, 2, 5, Q, [-500, 366], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-500, 366], null), T, new P(null, 2, 5, Q, [-502, -363], null)], 
null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-502, -363], null), T, new P(null, 2, 5, Q, [-74, -363], null)], null)], null), new P(null, 18, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [196, 141], null), T, new P(null, 2, 5, Q, [-295, 143], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-295, 143], null), T, new P(null, 2, 5, Q, [-420, -180], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-420, -180], null), T, new P(null, 2, 5, Q, [-262, -401], null)], 
null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-262, -401], null), T, new P(null, 2, 5, Q, [195, -403], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [190, -306], null), T, new P(null, 2, 5, Q, [-200, -303], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-200, -303], null), T, new P(null, 2, 5, Q, [-302, -171], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-302, -171], null), T, new P(null, 2, 5, Q, [-233, 22], null)], null), new n(null, 3, [W, 
Z, S, new P(null, 2, 5, Q, [-233, 22], null), T, new P(null, 2, 5, Q, [188, 21], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-48, -98], null), T, new P(null, 2, 5, Q, [361, -100], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [361, -100], null), T, new P(null, 2, 5, Q, [512, 102], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [512, 102], null), T, new P(null, 2, 5, Q, [365, 377], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [365, 377], 
null), T, new P(null, 2, 5, Q, [-163, 382], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [294, 70], null), T, new P(null, 2, 5, Q, [352, 135], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [352, 135], null), T, new P(null, 2, 5, Q, [262, 285], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [262, 285], null), T, new P(null, 2, 5, Q, [-67, 287], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-300, 432], null), T, new P(null, 2, 5, Q, [-509, 
-74], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [363, -393], null), T, new P(null, 2, 5, Q, [518, -171], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [34, -203], null), T, new P(null, 2, 5, Q, [338, -205], null)], null)], null), ne([new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-110, 43], null), T, new P(null, 2, 5, Q, [-70, 111], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-70, 111], null), T, new P(null, 2, 5, Q, [26, 145], null)], null), new n(null, 
3, [W, Z, S, new P(null, 2, 5, Q, [26, 145], null), T, new P(null, 2, 5, Q, [171, 135], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [171, 135], null), T, new P(null, 2, 5, Q, [234, 81], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [234, 81], null), T, new P(null, 2, 5, Q, [381, 46], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [381, 46], null), T, new P(null, 2, 5, Q, [422, 65], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [422, 65], 
null), T, new P(null, 2, 5, Q, [451, 138], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [451, 138], null), T, new P(null, 2, 5, Q, [378, 276], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [378, 276], null), T, new P(null, 2, 5, Q, [197, 282], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [197, 282], null), T, new P(null, 2, 5, Q, [24, 261], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [24, 261], null), T, new P(null, 2, 5, Q, [-160, 205], 
null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-160, 205], null), T, new P(null, 2, 5, Q, [-230, 72], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-230, 72], null), T, new P(null, 2, 5, Q, [-265, -79], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-265, -79], null), T, new P(null, 2, 5, Q, [-151, -185], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-151, -185], null), T, new P(null, 2, 5, Q, [4, -215], null)], null), new n(null, 3, [W, 
Z, S, new P(null, 2, 5, Q, [4, -215], null), T, new P(null, 2, 5, Q, [136, -205], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [136, -205], null), T, new P(null, 2, 5, Q, [206, -170], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [206, -170], null), T, new P(null, 2, 5, Q, [307, -193], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [307, -193], null), T, new P(null, 2, 5, Q, [375, -266], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-1, 
-109], null), T, new P(null, 2, 5, Q, [98, -100], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [98, -100], null), T, new P(null, 2, 5, Q, [146, -90], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [146, -90], null), T, new P(null, 2, 5, Q, [212, -17], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [212, -17], null), T, new P(null, 2, 5, Q, [260, -4], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [260, -4], null), T, new P(null, 2, 5, Q, [369, 
-37], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [369, -37], null), T, new P(null, 2, 5, Q, [466, -28], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [466, -28], null), T, new P(null, 2, 5, Q, [535, 57], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [535, 57], null), T, new P(null, 2, 5, Q, [561, 187], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [561, 187], null), T, new P(null, 2, 5, Q, [483, 313], null)], null), new n(null, 3, [W, 
Z, S, new P(null, 2, 5, Q, [483, 313], null), T, new P(null, 2, 5, Q, [375, 368], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [308, -115], null), T, new P(null, 2, 5, Q, [428, -153], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [428, -153], null), T, new P(null, 2, 5, Q, [487, -223], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [487, -223], null), T, new P(null, 2, 5, Q, [509, -340], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [509, 
-340], null), T, new P(null, 2, 5, Q, [479, -395], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [479, -395], null), T, new P(null, 2, 5, Q, [288, -425], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [288, -425], null), T, new P(null, 2, 5, Q, [253, -311], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [253, -311], null), T, new P(null, 2, 5, Q, [138, -280], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [138, -280], null), T, new P(null, 
2, 5, Q, [8, -290], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [8, -290], null), T, new P(null, 2, 5, Q, [-142, -300], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-142, -300], null), T, new P(null, 2, 5, Q, [-265, -270], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-265, -270], null), T, new P(null, 2, 5, Q, [-360, -197], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-364, -16], null), T, new P(null, 2, 5, Q, [-319, 171], null)], 
null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-319, 171], null), T, new P(null, 2, 5, Q, [-247, 288], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-247, 288], null), T, new P(null, 2, 5, Q, [-94, 369], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-94, 369], null), T, new P(null, 2, 5, Q, [102, 364], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [102, 364], null), T, new P(null, 2, 5, Q, [158, 383], null)], null), new n(null, 3, [W, Z, S, new P(null, 
2, 5, Q, [-289, -161], null), T, new P(null, 2, 5, Q, [-378, -95], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-378, -95], null), T, new P(null, 2, 5, Q, [-477, -44], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-477, -44], null), T, new P(null, 2, 5, Q, [-476, 119], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-476, 119], null), T, new P(null, 2, 5, Q, [-418, 263], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-563, 25], null), 
T, new P(null, 2, 5, Q, [-551, -175], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-551, -175], null), T, new P(null, 2, 5, Q, [-394, -271], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-394, -271], null), T, new P(null, 2, 5, Q, [-335, -369], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-335, -369], null), T, new P(null, 2, 5, Q, [-222, -409], null)], null)]), new P(null, 23, 5, Q, [new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-60, -36], null), 
T, new P(null, 2, 5, Q, [157, -37], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-70, 50], null), T, new P(null, 2, 5, Q, [137, 50], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [261, -112], null), T, new P(null, 2, 5, Q, [261, 104], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [41, 188], null), T, new P(null, 2, 5, Q, [352, 186], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [376, -190], null), T, new P(null, 2, 5, Q, [375, 81], null)], 
null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-130, -176], null), T, new P(null, 2, 5, Q, [209, -176], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-183, -95], null), T, new P(null, 2, 5, Q, [-180, 145], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-224, -177], null), T, new P(null, 2, 5, Q, [-466, -356], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-242, -47], null), T, new P(null, 2, 5, Q, [-493, -47], null)], null), new n(null, 3, [W, 
Z, S, new P(null, 2, 5, Q, [-241, 49], null), T, new P(null, 2, 5, Q, [-558, 49], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-486, 102], null), T, new P(null, 2, 5, Q, [-485, 379], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-401, 107], null), T, new P(null, 2, 5, Q, [-401, 366], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-347, 248], null), T, new P(null, 2, 5, Q, [-49, 250], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-49, 
250], null), T, new P(null, 2, 5, Q, [-49, 159], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [141, 240], null), T, new P(null, 2, 5, Q, [141, 413], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [252, 240], null), T, new P(null, 2, 5, Q, [252, 413], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [405, 143], null), T, new P(null, 2, 5, Q, [607, 345], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [382, 265], null), T, new P(null, 2, 5, Q, 
[555, 426], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [179, -272], null), T, new P(null, 2, 5, Q, [393, -422], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [334, -249], null), T, new P(null, 2, 5, Q, [545, -383], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-95, -239], null), T, new P(null, 2, 5, Q, [-96, -407], null)], null), new n(null, 3, [W, Z, S, new P(null, 2, 5, Q, [34, -241], null), T, new P(null, 2, 5, Q, [33, -404], null)], null), new n(null, 
3, [W, Z, S, new P(null, 2, 5, Q, [-397, -99], null), T, new P(null, 2, 5, Q, [-397, -218], null)], null)], null)], null);
var lh = 2 * Math.PI;
if ("undefined" === typeof mh) {
  var mh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, zg, Ff());
    return new Pf(Yb("draw-segment"), function() {
      return function(a, b) {
        return W.a(b);
      };
    }(a, b, c, d, e), Xf, e, a, b, c, d);
  }()
}
Qf(mh, Z, function(a, b) {
  var c = Sc(b) ? Ad(Md, b) : b, d = L(c, S), c = L(c, T);
  return hh.k(a, vc([d, c], 0));
});
Qf(mh, ig, function(a, b) {
  var c = Sc(b) ? Ad(Md, b) : b, d = L(c, mg), e = L(c, $f), f = L(c, bg), g = L(c, Vf), c = L(c, Sf);
  return 0 > g ? ih(a, d, c, f, e) : ih(a, d, c, e, f);
});
if ("undefined" === typeof nh) {
  var nh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, zg, Ff());
    return new Pf(Yb("update-seg"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Xf, e, a, b, c, d);
  }()
}
Qf(nh, Z, function(a, b, c) {
  a = Sc(a) ? Ad(Md, a) : a;
  var d = L(a, Vf);
  b = dh(b, d);
  return Vd.o(a, cc.c(c, lg) ? T : S, ch, b);
});
Qf(nh, ig, function(a, b, c) {
  a = Sc(a) ? Ad(Md, a) : a;
  var d = L(a, Vf), e = L(a, Sf);
  b = b / e * d;
  return Vd.o(a, cc.c(c, lg) ? bg : $f, ad, b);
});
function oh(a, b) {
  return Vd.o(nh.g ? nh.g(a, b, lg) : nh.call(null, a, b, lg), sg, ad, b);
}
function ph(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a;
  L(c, W);
  return Vd.o(nh.g ? nh.g(c, b, og) : nh.call(null, c, b, og), sg, bd, b);
}
function qh(a, b) {
  for (var c = 0, d = b;;) {
    if (cc.c(c, Ac(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < sg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return ah(Vd.o(a, c, ph, d), c);
    }
    var e = c + 1, d = d - sg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof rh) {
  var rh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, zg, Ff());
    return new Pf(Yb("seg-normal"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Xf, e, a, b, c, d);
  }()
}
Qf(rh, Z, function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, Vf), c = K(d, 0), d = K(d, 1);
  return cc.c(b, Cg) ? [-d, c] : [d, -c];
});
Qf(rh, ig, function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a;
  L(c, $f);
  var d = L(c, bg), c = L(c, Vf) * (cc.c(b, Cg) ? -1 : 1);
  return dh(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof sh) {
  var sh, th = O ? O(R) : Ld.call(null, R), uh = O ? O(R) : Ld.call(null, R), vh = O ? O(R) : Ld.call(null, R), wh = O ? O(R) : Ld.call(null, R), xh = Cc(R, zg, Ff());
  sh = new Pf(Yb("seg-endpoint"), W, Xf, xh, th, uh, vh, wh);
}
Qf(sh, Z, function(a) {
  return T.a(a);
});
Qf(sh, ig, function(a) {
  var b = Sc(a) ? Ad(Md, a) : a;
  L(b, $f);
  a = L(b, bg);
  var c = L(b, mg), b = L(b, Sf);
  return ch(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function yh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, dg);
  return Dc.g(c, dg, cc.c(sg.a(xc(d)), 0) ? yc.c(null == d ? null : bb(d), b) : yc.c(d, b));
}
function zh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, kg), e = L(c, dg);
  return cc.c(d, b) ? c : yh(Dc.g(c, kg, b), function() {
    switch(b instanceof M ? b.va : null) {
      case "left":
        var a = xc(e), c = function() {
          var c = a;
          return rh.c ? rh.c(c, b) : rh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = ch(function() {
          var b = a;
          return sh.a ? sh.a(b) : sh.call(null, b);
        }(), dh(25, c)), p = Math.atan2(-l, -d), d = p, l = cc.c(b, Cg) ? 1 : -1;
        return new n(null, 7, [W, ig, mg, c, $f, p, bg, d, sg, 0, Vf, l, Sf, 25], null);
      case "right":
        return a = xc(e), c = function() {
          var c = a;
          return rh.c ? rh.c(c, b) : rh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = ch(function() {
          var b = a;
          return sh.a ? sh.a(b) : sh.call(null, b);
        }(), dh(25, c)), d = p = Math.atan2(-l, -d), l = cc.c(b, Cg) ? 1 : -1, new n(null, 7, [W, ig, mg, c, $f, p, bg, d, sg, 0, Vf, l, Sf, 25], null);
      default:
        return d = xc(e), a = l = Sc(d) ? Ad(Md, d) : d, d = L(l, bg), l = L(l, Vf), c = function() {
          var b = a;
          return sh.a ? sh.a(b) : sh.call(null, b);
        }(), new n(null, 5, [W, Z, S, c, T, c, sg, 0, Vf, dh(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function Ah(a) {
  var b = I.a ? I.a(Bh) : I.call(null, Bh);
  jh(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280, f = a.canvas;
    a.clearRect(0, 0, f.width, f.height);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    return Cf(Id(mh, a), wd.k(fg.a(b), Rd.c(Le, eg.a(b)), vc([dg.a(b)], 0)));
  });
}
function Ch(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, $f), e = L(c, bg), c = L(c, Vf);
  if (c * (e - d) > lh) {
    return!0;
  }
  var f = cd(b, lh), d = cd(d, lh), e = cd(e, lh);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= lh : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= lh;
}
if ("undefined" === typeof Dh) {
  var Dh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, zg, Ff());
    return new Pf(Yb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [W.a(a), W.a(b)], null);
      };
    }(a, b, c, d, e), Xf, e, a, b, c, d);
  }()
}
Qf(Dh, new P(null, 2, 5, Q, [Z, Z], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [S.a(a), T.a(a)], null);
  c = new P(null, 2, 5, Q, [S.a(b), T.a(b)], null);
  var e = K(d, 0), d = K(d, 1), f = K(c, 0), g = K(c, 1), d = bh(d, e);
  c = K(d, 0);
  var d = K(d, 1), k = bh(g, f), g = K(k, 0), k = K(k, 1), f = bh(f, e), e = K(f, 0), f = K(f, 1), l = -1 * c * k - -1 * d * g;
  c = cc.c(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = K(c, 0);
  d = K(c, 1);
  return w(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Qf(Dh, new P(null, 2, 5, Q, [Z, ig], null), function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, S), c = L(c, T), e = Sc(b) ? Ad(Md, b) : b, f = L(e, Sf);
  var g = L(e, mg), c = bh(c, d), e = eh(c, c), d = bh(d, g), g = eh(d, d), k = eh(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-eh(c, d) - g) / e, e = (-eh(c, d) + g) / e, g = fh(ch(dh(f, c), d)), c = fh(ch(dh(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = K(f, 0);
  e = K(f, 1);
  d = K(f, 2);
  c = K(f, 3);
  return w(f) ? (d = (f = 0 < g && 1 > g) ? Ch(b, d) : f, w(d) ? d : (e = 0 < e && 1 > e) ? Ch(b, c) : e) : f;
});
Qf(Dh, new P(null, 2, 5, Q, [ig, Z], null), function(a, b) {
  return Dh.c ? Dh.c(b, a) : Dh.call(null, b, a);
});
Qf(Dh, new P(null, 2, 5, Q, [ig, ig], null), function(a, b) {
  var c;
  var d = mg.a(a), e = Sf.a(a);
  c = mg.a(b);
  var f = Sf.a(b), g = bh(c, d), d = K(g, 0);
  c = K(g, 1);
  g = eh(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = K(c, 0);
  d = K(c, 1);
  f = K(c, 2);
  e = K(c, 3);
  return w(c) ? (c = Ch(a, g), d = w(c) ? c : Ch(a, d), w(d) ? (f = Ch(b, f), w(f) ? f : Ch(b, e)) : d) : c;
});
function Eh(a) {
  var b = Sc(a) ? Ad(Md, a) : a, c = L(b, fg), d = L(b, dg), e = xc(d), f = null == d ? null : bb(d);
  return Gd(function(a) {
    return function(b) {
      return Dh.c ? Dh.c(a, b) : Dh.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), wd.c(c, w(Ed(f)) ? null == f ? null : bb(f) : f));
}
function Fh(a) {
  var b = Sc(a) ? Ad(Md, a) : a, c = L(b, eg), d = L(b, dg), e = xc(d);
  return Wc(function() {
    return function(a, b) {
      var c = K(b, 0);
      K(b, 1);
      return Vd.o(Vd.o(a, xg, ad, 50), eg, Fc, c);
    };
  }(e, a, b, b, c, d), b, Td(Hd(Id(Dh, e), Le), c));
}
var Gh = O ? O(null) : Ld.call(null, null);
function Hh(a, b) {
  for (var c = Sc(b) ? Ad(Md, b) : b, d = L(c, fg), e = a.canvas, f = e.width, g = e.height, k = Df(f) - f / 2, l = Df(g) - g / 2;;) {
    if (w(Gd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Rd.c(Hd(function(a, b) {
      return function(c) {
        var d = new P(null, 2, 5, Q, [a, b], null), e = K(c, 0);
        c = K(c, 1);
        c = bh(c, e);
        var f = eh(bh(e, d), c) / eh(c, c) * -1, f = 1 < f ? 1 : f, e = bh(ch(e, dh(0 > f ? 0 : f, c)), d), d = K(e, 0), e = K(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), rf()), d)))) {
      k = Df(f) - f / 2, l = Df(g) - g / 2;
    } else {
      return new P(null, 2, 5, Q, [k, l], null);
    }
  }
}
var Ih = new P(null, 1, 5, Q, [new n(null, 5, [sg, 100, W, Z, Vf, new P(null, 2, 5, Q, [1, 0], null), S, new P(null, 2, 5, Q, [0, 0], null), T, new P(null, 2, 5, Q, [100, 0], null)], null)], null);
function Jh() {
  var a = new P(null, 5, 5, Q, [new P(null, 2, 5, Q, [-642, 482], null), new P(null, 2, 5, Q, [642, 482], null), new P(null, 2, 5, Q, [642, -482], null), new P(null, 2, 5, Q, [-642, -482], null), new P(null, 2, 5, Q, [-642, 482], null)], null);
  return Rd.g(function(a, c) {
    return new n(null, 3, [W, Z, S, a, T, c], null);
  }, a, ac(a));
}
var Kh = function Kh() {
  switch(arguments.length) {
    case 2:
      return Kh.c(arguments[0], arguments[1]);
    case 3:
      return Kh.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Kh.c = function(a, b) {
  return Kh.g(a, b, function() {
    var b = cd(jg.a(a), Ac(kh));
    return kh.a ? kh.a(b) : kh.call(null, b);
  }());
};
Kh.g = function(a, b, c) {
  return Wc(function(a, c) {
    return Vd.t(a, eg, Dc, c, new n(null, 6, [W, ig, mg, Hh(b, a), $f, 0, bg, lh, Vf, 1, Sf, 10], null));
  }, Dc.k(a, dg, Ih, vc([sg, 100, xg, 100, kg, null, eg, R, fg, wd.c(Jh(), c), ng, !1], 0)), new qf(null, 0, 10, 1, null));
};
Kh.u = 3;
var Bh, Lh = new n(null, 1, [jg, 0], null);
Bh = O ? O(Lh) : Ld.call(null, Lh);
var Mh = document.createElement("button");
Mh.textContent = "Pause";
var Nh, Oh, Ph = dd(3 * (window.innerWidth - 20), 4);
Oh = 1280 < Ph ? 1280 : Ph;
var Qh = dd(4 * (window.innerHeight - 10), 3);
Nh = Oh < Qh ? Oh : Qh;
var Rh = dd(3 * Nh, 4), Sh = document.createElement("canvas");
w(Nh) && Sh.setAttribute("width", Nh);
w(Rh) && Sh.setAttribute("height", Rh);
Sh.setAttribute("style", "border: 1px solid #000; display: block;");
var Th = document.createElement("div"), Uh = Sh.getContext("2d");
function Vh(a) {
  a: {
    var b = Rd.c(A, a);
    a = new ma;
    for (b = C(b);;) {
      if (b) {
        a.append("" + A(G(b))), b = H(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  Th.textContent = a;
}
var Wh = function Wh(b, c, d) {
  Mh.textContent = "Pause";
  return Mh.onclick = function() {
    Qd.o(Bh, Dc, ng, !0);
    Mh.textContent = "Go";
    return Mh.onclick = function() {
      Qd.o(Bh, Dc, ng, !1);
      Xh.g ? Xh.g(b, c, d) : Xh.call(null, b, c, d);
      return Wh(b);
    };
  };
};
function Yh() {
  window.onkeydown = null;
  return window.onkeyup = null;
}
var Zh = function Zh(b) {
  Mh.textContent = "Start";
  return Mh.onclick = function() {
    function c(b) {
      Vh(vc(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0));
      var c = I.a ? I.a(Bh) : I.call(null, Bh);
      Od.c ? Od.c(Gh, c) : Od.call(null, Gh, c);
      Zh(b);
      return Yh();
    }
    Vh(vc(["Press A and D to turn left and right."], 0));
    var d = {level:jg.a(I.a ? I.a(Bh) : I.call(null, Bh))};
    mixpanel.track("start level", d);
    Qd.g(Bh, Kh, b);
    d = function() {
      return function(b) {
        Vh(vc(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0));
        Qd.o(Bh, Vd, jg, kc);
        Zh(b);
        return Yh();
      };
    }(c);
    Xh.g ? Xh.g(b, c, d) : Xh.call(null, b, c, d);
    return Wh(b, c, d);
  };
}, $h = new n(null, 4, [65, Cg, 37, Cg, 68, ug, 39, ug], null);
function Xh(a, b, c) {
  window.onkeydown = function(a) {
    a = a.which;
    a = $h.a ? $h.a(a) : $h.call(null, a);
    return w(a) ? Qd.g(Bh, zh, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = $h.a ? $h.a(a) : $h.call(null, a);
    return w(a) ? cc.c(a, kg.a(I.a ? I.a(Bh) : I.call(null, Bh))) ? Qd.g(Bh, zh, null) : null : null;
  };
  return function e() {
    if (Ca(ng.a(I.a ? I.a(Bh) : I.call(null, Bh)))) {
      var f = Qd.c(Bh, function(a) {
        var b;
        b = xg.a(a);
        a = Sc(a) ? Ad(Md, a) : a;
        var c = L(a, dg), e = L(a, sg), f = Ac(c) - 1, r = e + 3 - b, c = Vd.o(c, f, oh, 3);
        b = Dc.k(a, dg, 0 < r ? qh(c, r) : c, vc([sg, Math.min(e + 3, b)], 0));
        return Fh(b);
      });
      if (w(Eh(f))) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      if (Lc(eg.a(f))) {
        return c.a ? c.a(a) : c.call(null, a);
      }
      Ah(a);
      return window.requestAnimationFrame(e);
    }
    return Yh();
  }.call(null);
}
ea("figwheel_test.snake.init_everything", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(Mh);
    a.appendChild(Th);
    return a;
  }());
  a.appendChild(Sh);
  Vh(vc(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return Zh(Uh);
});
var ai = document.createElement("canvas");
ai.setAttribute("width", 1280);
ai.setAttribute("height", 960);
ai.setAttribute("style", "border: 1px solid #000");
ai.getContext("2d");
var bi = new P(null, 2, 5, Q, [0, 0], null);
O || Ld.call(null, bi);
var ci = document.createElement("button");
ci.textContent = "Pause";
var di, ei, fi = dd(3 * (window.innerWidth - 20), 4);
ei = 1280 < fi ? 1280 : fi;
var gi = dd(4 * (window.innerHeight - 10), 3);
di = ei < gi ? ei : gi;
var hi = dd(3 * di, 4), ii = document.createElement("canvas");
w(di) && ii.setAttribute("width", di);
w(hi) && ii.setAttribute("height", hi);
ii.setAttribute("style", "border: 1px solid #000; display: block;");
var ji = document.createElement("div");
ii.getContext("2d");
ea("figwheel_test.common.init_elements", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(ci);
    a.appendChild(ji);
    return a;
  }());
  return a.appendChild(ii);
});
function ki() {
  for (var a = new P(null, 3, 5, Q, [Df(500) - 250, -215, Df(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = wd.c(Sd(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (1 * (Math.random.p ? Math.random.p() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), vc([a, ac(a)], 0)), new P(null, 1, 5, Q, [xc(a)], null)), b /= 2, --c;
    } else {
      return oe(a);
    }
  }
}
function li(a) {
  var b = Ac(a) / 2;
  return Wc(function() {
    return function(a, b) {
      return Dc.g(a, b, -215);
    };
  }(b), a, new qf(null, b - 4, b + 4, 1, null));
}
O || Ld.call(null, 0);
O || Ld.call(null, !1);
var mi = new P(null, 2, 5, Q, [1, 0], null);
O || Ld.call(null, mi);
var ni = new n(null, 7, [Rf, R, rg, function() {
  var a = ki(), b = Ac(a) - 1;
  return oe(Jd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), li(a)));
}(), yg, R, gg, R, qg, 0, Uf, 60, wg, Ec([Wf, Yf, Zf, ag, cg, hg, tg, vg, Ag, Bg], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || Ld.call(null, ni);
O || Ld.call(null, !1);
O || Ld.call(null, 0);
var oi = new n(null, 3, [fg, R, Tf, null, pg, 0], null);
O || Ld.call(null, oi);

})();
