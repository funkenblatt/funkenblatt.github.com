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
function u(a) {
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
  return new v(null, 5, [ua, !0, wa, !0, xa, !1, ya, !1, za, null], null);
}
function x(a) {
  return null != a && !1 !== a;
}
function Ba(a) {
  return a instanceof Array;
}
function Ca(a) {
  return x(a) ? !1 : !0;
}
function B(a, b) {
  return a[u(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function C(a, b) {
  var c = null == b ? null : b.constructor, c = x(x(c) ? c.Jb : c) ? c.Ib : u(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Ib;
  return x(b) ? b : "" + D(a);
}
var Fa = "undefined" !== typeof Symbol && "function" === u(Symbol) ? Symbol.iterator : "@@iterator";
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
  c = Ka[u(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw C("ICounted.-count", b);
  }
  return c.call(null, b);
}, La = function La(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = La[u(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw C("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.I : b) {
    return b.I(b, c);
  }
  var d;
  d = Ma[u(null == b ? null : b)];
  if (!d && (d = Ma._, !d)) {
    throw C("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, E = function E() {
  switch(arguments.length) {
    case 2:
      return E.c(arguments[0], arguments[1]);
    case 3:
      return E.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
E.c = function(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = E[u(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw C("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
E.g = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = E[u(null == a ? null : a)];
  if (!d && (d = E._, !d)) {
    throw C("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
E.u = 3;
var Pa = {}, Qa = function Qa(b) {
  if (b ? b.fa : b) {
    return b.fa(b);
  }
  var c;
  c = Qa[u(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw C("ISeq.-first", b);
  }
  return c.call(null, b);
}, Ra = function Ra(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = Ra[u(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw C("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Sa = {}, Ta = {}, Ua = function Ua() {
  switch(arguments.length) {
    case 2:
      return Ua.c(arguments[0], arguments[1]);
    case 3:
      return Ua.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Ua.c = function(a, b) {
  if (a ? a.da : a) {
    return a.da(a, b);
  }
  var c;
  c = Ua[u(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw C("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ua.g = function(a, b, c) {
  if (a ? a.G : a) {
    return a.G(a, b, c);
  }
  var d;
  d = Ua[u(null == a ? null : a)];
  if (!d && (d = Ua._, !d)) {
    throw C("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ua.u = 3;
var Va = function Va(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = Va[u(null == b ? null : b)];
  if (!e && (e = Va._, !e)) {
    throw C("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Wa = {}, Xa = function Xa(b, c) {
  if (b ? b.mb : b) {
    return b.mb(b, c);
  }
  var d;
  d = Xa[u(null == b ? null : b)];
  if (!d && (d = Xa._, !d)) {
    throw C("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Ya = {}, Za = function Za(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = Za[u(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw C("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ab = function ab(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = ab[u(null == b ? null : b)];
  if (!c && (c = ab._, !c)) {
    throw C("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, bb = function bb(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = bb[u(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw C("IStack.-pop", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = db[u(null == b ? null : b)];
  if (!e && (e = db._, !e)) {
    throw C("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, eb = function eb(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = eb[u(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw C("IDeref.-deref", b);
  }
  return c.call(null, b);
}, fb = {}, gb = function gb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = gb[u(null == b ? null : b)];
  if (!c && (c = gb._, !c)) {
    throw C("IMeta.-meta", b);
  }
  return c.call(null, b);
}, hb = {}, jb = function jb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = jb[u(null == b ? null : b)];
  if (!d && (d = jb._, !d)) {
    throw C("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, kb = {}, lb = function lb() {
  switch(arguments.length) {
    case 2:
      return lb.c(arguments[0], arguments[1]);
    case 3:
      return lb.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
lb.c = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = lb[u(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw C("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
lb.g = function(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = lb[u(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw C("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
lb.u = 3;
var mb = function mb(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = mb[u(null == b ? null : b)];
  if (!d && (d = mb._, !d)) {
    throw C("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, nb = function nb(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = nb[u(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw C("IHash.-hash", b);
  }
  return c.call(null, b);
}, ob = {}, pb = function pb(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = pb[u(null == b ? null : b)];
  if (!c && (c = pb._, !c)) {
    throw C("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, qb = {}, rb = function rb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = rb[u(null == b ? null : b)];
  if (!d && (d = rb._, !d)) {
    throw C("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, sb = {}, tb = function tb(b, c, d) {
  if (b ? b.C : b) {
    return b.C(b, c, d);
  }
  var e;
  e = tb[u(null == b ? null : b)];
  if (!e && (e = tb._, !e)) {
    throw C("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, ub = function ub(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = ub[u(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw C("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, wb = function wb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = wb[u(null == b ? null : b)];
  if (!c && (c = wb._, !c)) {
    throw C("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, xb = function xb(b, c) {
  if (b ? b.Qa : b) {
    return b.Qa(b, c);
  }
  var d;
  d = xb[u(null == b ? null : b)];
  if (!d && (d = xb._, !d)) {
    throw C("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, yb = function yb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = yb[u(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw C("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, zb = function zb(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = zb[u(null == b ? null : b)];
  if (!e && (e = zb._, !e)) {
    throw C("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Ab = function Ab(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = Ab[u(null == b ? null : b)];
  if (!e && (e = Ab._, !e)) {
    throw C("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Bb = function Bb(b) {
  if (b ? b.ob : b) {
    return b.ob();
  }
  var c;
  c = Bb[u(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw C("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Cb[u(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw C("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = Db[u(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw C("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = Eb[u(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw C("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = Fb[u(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw C("INamed.-name", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.Pa : b) {
    return b.Pa(b);
  }
  var c;
  c = Gb[u(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw C("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b, c) {
  if (b ? b.Db : b) {
    return b.Db(b, c);
  }
  var d;
  d = Hb[u(null == b ? null : b)];
  if (!d && (d = Hb._, !d)) {
    throw C("IReset.-reset!", b);
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
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Ib.c = function(a, b) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b);
  }
  var c;
  c = Ib[u(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw C("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Ib.g = function(a, b, c) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c);
  }
  var d;
  d = Ib[u(null == a ? null : a)];
  if (!d && (d = Ib._, !d)) {
    throw C("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Ib.o = function(a, b, c, d) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c, d);
  }
  var e;
  e = Ib[u(null == a ? null : a)];
  if (!e && (e = Ib._, !e)) {
    throw C("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Ib.t = function(a, b, c, d, e) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c, d, e);
  }
  var f;
  f = Ib[u(null == a ? null : a)];
  if (!f && (f = Ib._, !f)) {
    throw C("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Ib.u = 5;
var Jb = function Jb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Jb[u(null == b ? null : b)];
  if (!c && (c = Jb._, !c)) {
    throw C("IIterable.-iterator", b);
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
  return "" + D(b);
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
  var b = [D("figwheel-test.snake"), D("/"), D(a)].join("");
  return new Xb("figwheel-test.snake", a, b, null, null);
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Qb)) {
    return a.K(null);
  }
  if (Ba(a) || "string" === typeof a) {
    return 0 === a.length ? null : new Zb(a, 0);
  }
  if (B(ob, a)) {
    return pb(a);
  }
  throw Error([D(a), D(" is not ISeqable")].join(""));
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.bb)) {
    return a.fa(null);
  }
  a = G(a);
  return null == a ? null : Qa(a);
}
function ac(a) {
  return null != a ? a && (a.i & 64 || a.bb) ? a.la(null) : (a = G(a)) ? Ra(a) : bc : bc;
}
function I(a) {
  return null == a ? null : a && (a.i & 128 || a.ab) ? a.ia(null) : G(ac(a));
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
      if (I(c)) {
        a = b, b = H(c), c = I(c);
      } else {
        return cc.c(b, H(c));
      }
    } else {
      return!1;
    }
  }
};
cc.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
  return cc.k(b, a, c);
};
cc.u = 2;
function dc(a) {
  this.v = a;
}
dc.prototype.next = function() {
  if (null != this.v) {
    var a = H(this.v);
    this.v = I(this.v);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function ec(a) {
  return new dc(G(a));
}
function fc(a, b) {
  var c = Nb(a), c = Pb(0, c);
  return Qb(c, b);
}
function gc(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Mb(31, c) + Vb(H(a)) | 0, a = I(a);
    } else {
      return fc(c, b);
    }
  }
}
var hc = fc(1, 0);
function ic(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + Vb(H(a)) | 0, a = I(a);
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
function J(a) {
  return eb(a);
}
function lc(a, b) {
  var c = Ka(a);
  if (0 === c) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = E.c(a, 0), e = 1;;) {
    if (e < c) {
      var f = E.c(a, e), d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function mc(a, b, c) {
  var d = Ka(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = E.c(a, c), e = b.c ? b.c(e, f) : b.call(null, e, f);
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
  return a ? a.i & 2 || a.tb ? !0 : a.i ? !1 : B(Ja, a) : B(Ja, a);
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
function wc() {
  switch(arguments.length) {
    case 1:
      return uc(arguments[0], 0);
    case 2:
      return uc(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function xc(a) {
  for (;;) {
    var b = I(a);
    if (null != b) {
      a = b;
    } else {
      return H(a);
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
    if (x(c)) {
      a = yc.c(a, b), b = H(c), c = I(c);
    } else {
      return yc.c(a, b);
    }
  }
};
yc.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
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
          if (B(Ja, a)) {
            a = Ka(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (qc(a)) {
                  a = b + Ka(a);
                  break a;
                }
                a = I(a);
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
      return G(a) ? H(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.wb || (d.i ? 0 : B(Na, d)) : B(Na, d)) {
      return E.g(a, b, c);
    }
    if (G(a)) {
      var d = I(a), e = b - 1;
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
  if (B(Na, a)) {
    return E.c(a, b);
  }
  if (a ? a.i & 64 || a.bb || (a.i ? 0 : B(Pa, a)) : B(Pa, a)) {
    return Bc(a, b);
  }
  throw Error([D("nth not supported on this type "), D(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.i & 256 || a.xb) ? a.da(null, b) : Ba(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : B(Ta, a) ? Ua.c(a, b) : null;
}
function Cc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.xb) ? a.G(null, b, c) : Ba(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : B(Ta, a) ? Ua.g(a, b, c) : c : c;
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
    if (a = Dc.g(a, b, c), x(d)) {
      b = H(d), c = H(I(d)), d = I(I(d));
    } else {
      return a;
    }
  }
};
Dc.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  var d = I(c), c = H(d), d = I(d);
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
    if (x(c)) {
      b = H(c), c = I(c);
    } else {
      return a;
    }
  }
};
Fc.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
  return Fc.k(b, a, c);
};
Fc.u = 2;
function Gc(a) {
  var b = "function" == u(a);
  return x(b) ? b : a ? x(x(null) ? null : a.sb) ? !0 : a.Vb ? !1 : B(Ha, a) : B(Ha, a);
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
  function a(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y) {
    a = this.e;
    return Ic.Ma ? Ic.Ma(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y) : Ic.call(null, a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y);
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w);
  }
  function k(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t) {
    a = this;
    return a.e.U ? a.e.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, n, m, p, q, r) {
    a = this;
    return a.e.T ? a.e.T(b, c, d, e, f, g, k, l, n, m, p, q, r) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, n, m, p, q) {
    a = this;
    return a.e.S ? a.e.S(b, c, d, e, f, g, k, l, n, m, p, q) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, n, m, p) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, g, k, l, n, m, p) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p);
  }
  function p(a, b, c, d, e, f, g, k, l, n, m) {
    a = this;
    return a.e.Q ? a.e.Q(b, c, d, e, f, g, k, l, n, m) : a.e.call(null, b, c, d, e, f, g, k, l, n, m);
  }
  function q(a, b, c, d, e, f, g, k, l, n) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, g, k, l, n) : a.e.call(null, b, c, d, e, f, g, k, l, n);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k);
  }
  function w(a, b, c, d, e, f, g) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function z(a, b, c, d, e, f) {
    a = this;
    return a.e.t ? a.e.t(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function A(a, b, c, d, e) {
    a = this;
    return a.e.o ? a.e.o(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function F(a, b, c, d) {
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
  var y = null, y = function(Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb, Ob, vc, wd, Se) {
    switch(arguments.length) {
      case 1:
        return na.call(this, Ea);
      case 2:
        return Y.call(this, Ea, X);
      case 3:
        return N.call(this, Ea, X, aa);
      case 4:
        return F.call(this, Ea, X, aa, ba);
      case 5:
        return A.call(this, Ea, X, aa, ba, da);
      case 6:
        return z.call(this, Ea, X, aa, ba, da, ga);
      case 7:
        return w.call(this, Ea, X, aa, ba, da, ga, ja);
      case 8:
        return t.call(this, Ea, X, aa, ba, da, ga, ja, la);
      case 9:
        return r.call(this, Ea, X, aa, ba, da, ga, ja, la, pa);
      case 10:
        return q.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa);
      case 11:
        return p.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va);
      case 12:
        return n.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa);
      case 13:
        return m.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia);
      case 14:
        return l.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa);
      case 15:
        return k.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y);
      case 16:
        return g.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a);
      case 17:
        return f.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib);
      case 18:
        return e.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb);
      case 19:
        return d.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb, Ob);
      case 20:
        return c.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb, Ob, vc);
      case 21:
        return b.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb, Ob, vc, wd);
      case 22:
        return a.call(this, Ea, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, y, $a, ib, vb, Ob, vc, wd, Se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.a = na;
  y.c = Y;
  y.g = N;
  y.o = F;
  y.t = A;
  y.J = z;
  y.aa = w;
  y.ba = t;
  y.ca = r;
  y.Q = q;
  y.R = p;
  y.S = n;
  y.T = m;
  y.U = l;
  y.V = k;
  y.W = g;
  y.X = f;
  y.Y = e;
  y.Z = d;
  y.$ = c;
  y.lb = b;
  y.Ma = a;
  return y;
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
h.Q = function(a, b, c, d, e, f, g, k, l, m) {
  return this.e.Q ? this.e.Q(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.e.R ? this.e.R(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.S = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.e.S ? this.e.S(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.T = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.e.T ? this.e.T(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.U = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  return this.e.U ? this.e.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.V = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  return this.e.V ? this.e.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F);
};
h.$ = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y) {
  var na = this.e;
  return Ic.Ma ? Ic.Ma(na, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y) : Ic.call(null, na, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y);
};
function Jc(a, b) {
  return Gc(a) && !(a ? a.i & 262144 || a.Tb || (a.i ? 0 : B(hb, a)) : B(hb, a)) ? new Hc(a, b) : null == a ? null : jb(a, b);
}
function Kc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Ab || (a.i ? 0 : B(fb, a)) : B(fb, a) : b) ? gb(a) : null;
}
function Lc(a) {
  return null == a || Ca(G(a));
}
function Mc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.yb ? !0 : a.i ? !1 : B(Wa, a) : B(Wa, a);
}
function Nc(a) {
  return a ? a.i & 16384 || a.Sb ? !0 : a.i ? !1 : B(cb, a) : B(cb, a);
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
  return null == a ? !1 : a ? a.i & 64 || a.bb ? !0 : a.i ? !1 : B(Pa, a) : B(Pa, a);
}
function Tc(a) {
  return x(a) ? !0 : !1;
}
function Uc(a, b) {
  return Cc(a, b, Rc) === Rc ? !1 : !0;
}
function Vc(a, b) {
  var c = G(b);
  if (c) {
    var d = H(c), c = I(c);
    return Wc ? Wc(a, d, c) : Xc.call(null, a, d, c);
  }
  return a.p ? a.p() : a.call(null);
}
function Yc(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = H(c);
      b = a.c ? a.c(b, d) : a.call(null, b, d);
      c = I(c);
    } else {
      return b;
    }
  }
}
function Xc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.i & 524288 || b.Cb) ? b.N(null, a) : Ba(b) ? nc(b, a) : "string" === typeof b ? nc(b, a) : B(kb, b) ? lb.c(b, a) : Vc(a, b);
    case 3:
      return Wc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Wc(a, b, c) {
  return c && (c.i & 524288 || c.Cb) ? c.O(null, a, b) : Ba(c) ? oc(c, a, b) : "string" === typeof c ? oc(c, a, b) : B(kb, c) ? lb.g(c, a, b) : Yc(a, b, c);
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
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
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
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
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
var D = function D() {
  switch(arguments.length) {
    case 0:
      return D.p();
    case 1:
      return D.a(arguments[0]);
    default:
      return D.k(arguments[0], new Zb(Array.prototype.slice.call(arguments, 1), 0));
  }
};
D.p = function() {
  return "";
};
D.a = function(a) {
  return null == a ? "" : ia(a);
};
D.k = function(a, b) {
  for (var c = new ma("" + D(a)), d = b;;) {
    if (x(d)) {
      c = c.append("" + D(H(d))), d = I(d);
    } else {
      return c.toString();
    }
  }
};
D.r = function(a) {
  var b = H(a);
  a = I(a);
  return D.k(b, a);
};
D.u = 1;
function sc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Rb || (b.i ? 0 : B(qb, b)) : B(qb, b)) {
    if (qc(a) && qc(b) && Ac(a) !== Ac(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && cc.c(H(c), H(d))) {
            c = I(c), d = I(d);
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
  if (G(a)) {
    var b = Vb(H(a));
    for (a = I(a);;) {
      if (null == a) {
        return b;
      }
      b = Wb(b, Vb(H(a)));
      a = I(a);
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
  return id.k(G(a));
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
  return null == this.wa ? null : G(this.wa);
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
  return(c ? c : b && (b.i & 64 || b.bb)) ? new jd(null, a, b, null) : new jd(null, a, G(b), null);
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
  return[D(":"), D(this.va)].join("");
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
  return rb(b, [D(":"), D(this.va)].join(""));
};
var kd = function kd() {
  switch(arguments.length) {
    case 1:
      return kd.a(arguments[0]);
    case 2:
      return kd.c(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
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
      throw Error([D("Doesn't support namespace: "), D(a)].join(""));
    }
    return new M(b, ld.a ? ld.a(a) : ld.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new M(b[0], b[1], a, null) : new M(null, b[0], a, null)) : null;
};
kd.c = function(a, b) {
  return new M(a, b, [D(x(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null);
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
  return null == this.v ? null : I(this.v);
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
  return null == this.v ? null : H(this.v);
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
      return this.v = a, G(this.v);
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
  return E.c(this.oa, 0);
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
    if (G(a)) {
      b.push(H(a)), a = I(a);
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
    if (0 < d && G(c)) {
      c = I(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var vd = function vd(b) {
  return null == b ? null : null == I(b) ? G(H(b)) : tc(H(b), vd(I(b)));
}, xd = function xd() {
  switch(arguments.length) {
    case 0:
      return xd.p();
    case 1:
      return xd.a(arguments[0]);
    case 2:
      return xd.c(arguments[0], arguments[1]);
    default:
      return xd.k(arguments[0], arguments[1], new Zb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
xd.p = function() {
  return new md(null, function() {
    return null;
  }, null, null);
};
xd.a = function(a) {
  return new md(null, function() {
    return a;
  }, null, null);
};
xd.c = function(a, b) {
  return new md(null, function() {
    var c = G(a);
    return c ? Oc(c) ? rd(Cb(c), xd.c(Db(c), b)) : tc(H(c), xd.c(ac(c), b)) : b;
  }, null, null);
};
xd.k = function(a, b, c) {
  return function e(a, b) {
    return new md(null, function() {
      var c = G(a);
      return c ? Oc(c) ? rd(Cb(c), e(Db(c), b)) : tc(H(c), e(ac(c), b)) : x(b) ? e(H(b), I(b)) : null;
    }, null, null);
  }(xd.c(a, b), c);
};
xd.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
  return xd.k(b, a, c);
};
xd.u = 2;
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
    if (a = xb(a, b), x(c)) {
      b = H(c), c = I(c);
    } else {
      return a;
    }
  }
};
yd.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  c = I(c);
  return yd.k(b, a, c);
};
yd.u = 2;
function zd(a, b, c) {
  var d = G(c);
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
  var k = Qa(l), m = Ra(l);
  if (6 === b) {
    return a.J ? a.J(c, d, e, f, g, k) : a.J ? a.J(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Qa(m), n = Ra(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Qa(n), p = Ra(n);
  if (8 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Qa(p), q = Ra(p);
  if (9 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Qa(q), r = Ra(q);
  if (10 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p) : a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = Qa(r), t = Ra(r);
  if (11 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q) : a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = Qa(t), w = Ra(t);
  if (12 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r) : a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = Qa(w), z = Ra(w);
  if (13 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var w = Qa(z), A = Ra(z);
  if (14 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
  }
  var z = Qa(A), F = Ra(A);
  if (15 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) : a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z);
  }
  var A = Qa(F), N = Ra(F);
  if (16 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) : a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A);
  }
  var F = Qa(N), Y = Ra(N);
  if (17 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) : a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F);
  }
  var N = Qa(Y), na = Ra(Y);
  if (18 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) : a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N);
  }
  Y = Qa(na);
  na = Ra(na);
  if (19 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y) : a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y);
  }
  var y = Qa(na);
  Ra(na);
  if (20 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y, y) : a.$ ? a.$(c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y, y);
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
  return G(a) ? a : null;
}
function Fd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    var c;
    c = H(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (x(c)) {
      c = a;
      var d = I(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Gd(a, b) {
  for (;;) {
    if (G(b)) {
      var c;
      c = H(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (x(c)) {
        return c;
      }
      c = a;
      var d = I(b);
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
        var b = H(a);
        a = I(a);
        var c = H(a);
        a = I(a);
        var e = H(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, p) {
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
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new Zb(r, 0);
          }
          return k.k(a, b, g, q);
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
        return Dd(a, b, c, e, f, wc([g], 0));
      }
      c.u = 3;
      c.r = function(a) {
        var b = H(a);
        a = I(a);
        var c = H(a);
        a = I(a);
        var e = H(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, p) {
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
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new Zb(r, 0);
          }
          return k.k(a, b, g, q);
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
      var g = G(f);
      if (g) {
        if (Oc(g)) {
          for (var k = Cb(g), l = Ac(k), m = new od(Array(l), 0), n = 0;;) {
            if (n < l) {
              sd(m, function() {
                var d = b + n, f = E.c(k, n);
                return a.c ? a.c(d, f) : a.call(null, d, f);
              }()), n += 1;
            } else {
              break;
            }
          }
          return rd(m.oa(), d(b + l, Db(g)));
        }
        return tc(function() {
          var d = H(g);
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
  for (var d = G(this.rb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var k = K(a, 0);
      a = K(a, 1);
      var l = b, m = c;
      a.o ? a.o(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = G(d)) {
        d = a, Oc(d) ? (e = Cb(d), d = Db(d), a = e, f = Ac(e), e = a) : (a = H(d), k = K(a, 0), a = K(a, 1), e = k, f = b, g = c, a.o ? a.o(e, this, f, g) : a.call(null, e, this, f, g), d = I(d), e = null, f = 0), g = 0;
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
    if (null != c && !x(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(function() {
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
  var b = H(a), c = I(a);
  a = H(c);
  var d = I(c), c = H(d), e = I(d), d = H(e), e = I(e);
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
          var b = H(a);
          a = I(a);
          var c = H(a);
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
            var n = null;
            if (2 < arguments.length) {
              for (var n = 0, p = Array(arguments.length - 2);n < p.length;) {
                p[n] = arguments[n + 2], ++n;
              }
              n = new Zb(p, 0);
            }
            return g.k(a, b, n);
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
    var c = G(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Cb(c), e = Ac(d), f = new od(Array(e), 0), g = 0;;) {
          if (g < e) {
            sd(f, function() {
              var b = E.c(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return rd(f.oa(), Rd.c(a, Db(c)));
      }
      return tc(function() {
        var b = H(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Rd.c(a, ac(c)));
    }
    return null;
  }, null, null);
};
Rd.g = function(a, b, c) {
  return new md(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = tc, g;
      g = H(d);
      var k = H(e);
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
    var e = G(b), f = G(c), g = G(d);
    if (e && f && g) {
      var k = tc, l;
      l = H(e);
      var m = H(f), n = H(g);
      l = a.g ? a.g(l, m, n) : a.call(null, l, m, n);
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
      var b = Rd.c(G, a);
      return Fd(Zc, b) ? tc(Rd.c(H, b), k(Rd.c(ac, b))) : null;
    }, null, null);
  };
  return Rd.c(function() {
    return function(b) {
      return Ad(a, b);
    };
  }(f), f(yc.k(e, d, wc([c, b], 0))));
};
Rd.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  var d = I(c), c = H(d), e = I(d), d = H(e), e = I(e);
  return Rd.k(b, a, c, d, e);
};
Rd.u = 4;
function Sd(a, b) {
  return Ad(xd, Bd(Rd, a, b));
}
function Td(a, b) {
  return new md(null, function() {
    var c = G(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Cb(c), e = Ac(d), f = new od(Array(e), 0), g = 0;;) {
          if (g < e) {
            var k;
            k = E.c(d, g);
            k = a.a ? a.a(k) : a.call(null, k);
            x(k) && (k = E.c(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return rd(f.oa(), Td(a, Db(c)));
      }
      d = H(c);
      c = ac(c);
      return x(a.a ? a.a(d) : a.call(null, d)) ? tc(d, Td(a, c)) : Td(a, c);
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
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
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
  return Dc.g(a, b, Dd(c, L(a, b), d, e, f, wc([g], 0)));
};
Vd.r = function(a) {
  var b = H(a), c = I(a);
  a = H(c);
  var d = I(c), c = H(d), e = I(d), d = H(e), f = I(e), e = H(f), g = I(f), f = H(g), g = I(g);
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
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
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
  return "number" === typeof b ? E.g(this, b, c) : c;
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
  throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.d), D("]")].join(""));
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
  return E.c(this, 0);
};
h.$a = function() {
  return E.c(this, 1);
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
        if (x(c.gb())) {
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
P.prototype[Fa] = function() {
  return ec(this);
};
function ne(a) {
  if (Ba(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new P(null, b, 5, Q, a, null);
      } else {
        for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Fa(null);;) {
          if (c < b) {
            var e = c + 1, d = yd.c(d, a[c]), c = e
          } else {
            a = yb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = yb(Wc(xb, wb(zc), a));
  }
  return a;
}
function oe(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.s = 1536;
}
h = oe.prototype;
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
  c = pe ? pe(c, d, e) : qe.call(null, c, d, e);
  return lc(c, b);
};
h.O = function(a, b, c) {
  a = this.D;
  var d = this.j + this.w, e = Ac(this.D);
  a = pe ? pe(a, d, e) : qe.call(null, a, d, e);
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
  return re ? re(c, d, e, f, b) : me.call(null, c, d, e, f, b);
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
oe.prototype[Fa] = function() {
  return ec(this);
};
function me() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new oe(a, ee(a, b), b, c, null, null);
    case 4:
      return le(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return re(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function le(a, b, c, d) {
  return new oe(a, b, c, d, null, null);
}
function re(a, b, c, d, e) {
  return new oe(a, b, c, d, e, null);
}
function se(a, b, c, d, e) {
  this.h = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.s = 8192;
}
h = se.prototype;
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
  return "number" === typeof b ? E.g(this, b, c) : c;
};
h.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ce(b, this.end - this.start) : E.c(this.ra, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : E.g(this.ra, this.start + b, c);
};
h.cb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Dc.g(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return te.t ? te.t(a, c, b, d, null) : te.call(null, a, c, b, d, null);
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
  return te.t ? te.t(a, b, c, d, null) : te.call(null, a, b, c, d, null);
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
      return e === a.end ? null : tc(E.c(a.ra, e), new md(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.m;
  return te.t ? te.t(b, c, d, e, f) : te.call(null, b, c, d, e, f);
};
h.I = function(a, b) {
  var c = this.h, d = db(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return te.t ? te.t(c, d, e, f, null) : te.call(null, c, d, e, f, null);
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
se.prototype[Fa] = function() {
  return ec(this);
};
function te(a, b, c, d, e) {
  for (;;) {
    if (b instanceof se) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = Ac(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new se(a, b, c, d, e);
    }
  }
}
function qe() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return pe(a, arguments[1], Ac(a));
    case 3:
      return pe(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function pe(a, b, c) {
  return te(null, a, b, c, null);
}
function ue(a, b) {
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
var ve = function ve(b, c, d, e) {
  d = ue(b.root.l, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.b[f];
    b = null != g ? ve(b, c - 5, g, e) : ae(b.root.l, c - 5, e);
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
        this.root = ve(this, this.shift, this.root, c);
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
          var l = ue(d.root.l, k);
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.b[m]);
            l.b[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.d) {
      return xb(this, c);
    }
    throw Error([D("Index "), D(b), D(" out of bounds for TransientVector of length"), D(d.d)].join(""));
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
  return 0 <= b && b < this.d ? E.c(this, b) : c;
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? E.g(this, b, c) : c;
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
function we() {
  this.i = 2097152;
  this.s = 0;
}
we.prototype.equiv = function(a) {
  return this.q(null, a);
};
we.prototype.q = function() {
  return!1;
};
var xe = new we;
function ye(a, b) {
  return Tc(Mc(b) ? Ac(a) === Ac(b) ? Fd(Zc, Rd.c(function(a) {
    return cc.c(Cc(b, H(a), xe), H(I(a)));
  }, a)) : null : null);
}
function ze(a) {
  this.v = a;
}
ze.prototype.next = function() {
  if (null != this.v) {
    var a = H(this.v), b = K(a, 0), a = K(a, 1);
    this.v = I(this.v);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Ae(a) {
  return new ze(G(a));
}
function Be(a, b) {
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
    if (c = "string" == typeof b, x(x(c) ? c : "number" === typeof b)) {
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
function Ce(a, b, c) {
  this.b = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.s = 0;
}
h = Ce.prototype;
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
  return this.j < this.b.length - 2 ? new Ce(this.b, this.j + 2, this.ka) : null;
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
  return this.j < this.b.length - 2 ? new Ce(this.b, this.j + 2, this.ka) : bc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Ce(this.b, this.j, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
Ce.prototype[Fa] = function() {
  return ec(this);
};
function De(a, b, c) {
  this.b = a;
  this.j = b;
  this.d = c;
}
De.prototype.gb = function() {
  return this.j < this.d;
};
De.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.b[this.j], this.b[this.j + 1]], null);
  this.j += 2;
  return a;
};
function v(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.b = c;
  this.m = d;
  this.i = 16647951;
  this.s = 8196;
}
h = v.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return ec(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.entries = function() {
  return Ae(G(this));
};
h.values = function() {
  return ec(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Oc(b) ? (c = Cb(b), b = Db(b), g = c, d = Ac(c), c = g) : (c = H(b), g = K(c, 0), c = f = K(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = I(b), c = null, d = 0), e = 0;
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
  a = Be(this.b, b);
  return-1 === a ? c : this.b[a + 1];
};
h.Na = function() {
  return new De(this.b, 0, 2 * this.d);
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
    return ye(this, b);
  }
};
h.Fa = function() {
  return new Ge({}, this.b.length, Ga(this.b));
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
  if (0 <= Be(this.b, b)) {
    var c = this.b.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new v(this.h, this.d - 1, d, null);
      }
      cc.c(b, this.b[e]) || (d[f] = this.b[e], d[f + 1] = this.b[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ea = function(a, b, c) {
  a = Be(this.b, b);
  if (-1 === a) {
    if (this.d < He) {
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
      return new v(this.h, this.d + 1, e, null);
    }
    return jb(Va(Ud.c(Ie, this), b, c), this.h);
  }
  if (c === this.b[a + 1]) {
    return this;
  }
  b = Ga(this.b);
  b[a + 1] = c;
  return new v(this.h, this.d, b, null);
};
h.K = function() {
  var a = this.b;
  return 0 <= a.length - 2 ? new Ce(a, 0, null) : null;
};
h.L = function(a, b) {
  return new v(b, this.d, this.b, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Va(this, E.c(b, 0), E.c(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Nc(e)) {
      c = Va(c, E.c(e, 0), E.c(e, 1)), d = I(d);
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
var R = new v(null, 0, [], jc), He = 8;
v.prototype[Fa] = function() {
  return ec(this);
};
function Ge(a, b, c) {
  this.Ia = a;
  this.Ka = b;
  this.b = c;
  this.i = 258;
  this.s = 56;
}
h = Ge.prototype;
h.P = function() {
  if (x(this.Ia)) {
    return dd(this.Ka, 2);
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return Ua.g(this, b, null);
};
h.G = function(a, b, c) {
  if (x(this.Ia)) {
    return a = Be(this.b, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Qa = function(a, b) {
  if (x(this.Ia)) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ya, b)) : B(Ya, b)) {
      return zb(this, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (x(e)) {
        var f = e, c = I(c), d = zb(d, function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
        }(), function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
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
  if (x(this.Ia)) {
    return this.Ia = !1, new v(null, dd(this.Ka, 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  if (x(this.Ia)) {
    a = Be(this.b, b);
    if (-1 === a) {
      if (this.Ka + 2 <= 2 * He) {
        return this.Ka += 2, this.b.push(b), this.b.push(c), this;
      }
      a = this.Ka;
      var d = this.b;
      a = Le.c ? Le.c(a, d) : Le.call(null, a, d);
      return zb(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Le(a, b) {
  for (var c = wb(Ie), d = 0;;) {
    if (d < a) {
      c = zb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Me() {
  this.ta = !1;
}
function Ne(a, b) {
  return a === b ? !0 : a === b || a instanceof M && b instanceof M && a.va === b.va ? !0 : cc.c(a, b);
}
function Oe(a, b, c) {
  a = Ga(a);
  a[b] = c;
  return a;
}
function Pe(a, b) {
  var c = Array(a.length - 2);
  Qc(a, 0, c, 0, 2 * b);
  Qc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Qe(a, b, c, d) {
  a = a.Ba(b);
  a.b[c] = d;
  return a;
}
function Re(a, b, c) {
  this.l = a;
  this.A = b;
  this.b = c;
}
h = Re.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = ed(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qc(this.b, 0, c, 0, 2 * b);
  return new Re(a, this.A, c);
};
h.Sa = function() {
  var a = this.b;
  return Te ? Te(a) : Ue.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = ed(this.A & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : Ne(c, e) ? f : d;
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
      k[c >>> b & 31] = Ve.qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.b[e] ? Ve.qa(a, b + 5, Vb(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new We(a, l + 1, k);
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
    return l = g.qa(a, b + 5, c, d, e, f), l === g ? this : Qe(this, a, 2 * k + 1, l);
  }
  if (Ne(d, l)) {
    return e === g ? this : Qe(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Xe ? Xe(a, f, l, g, c, d, e) : Ye.call(null, a, f, l, g, c, d, e);
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
      g[b >>> a & 31] = Ve.pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.b[d] ? Ve.pa(a + 5, Vb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new We(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Qc(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Qc(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new Re(null, this.A | f, a);
  }
  var l = this.b[2 * g], f = this.b[2 * g + 1];
  if (null == l) {
    return k = f.pa(a + 5, b, c, d, e), k === f ? this : new Re(null, this.A, Oe(this.b, 2 * g + 1, k));
  }
  if (Ne(c, l)) {
    return d === f ? this : new Re(null, this.A, Oe(this.b, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  k = this.b;
  a += 5;
  a = Ze ? Ze(a, l, f, b, c, d) : Ye.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Re(null, e, d);
};
h.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = ed(this.A & d - 1), f = this.b[2 * e], g = this.b[2 * e + 1];
  return null == f ? (a = g.Ta(a + 5, b, c), a === g ? this : null != a ? new Re(null, this.A, Oe(this.b, 2 * e + 1, a)) : this.A === d ? null : new Re(null, this.A ^ d, Pe(this.b, e))) : Ne(c, f) ? new Re(null, this.A ^ d, Pe(this.b, e)) : this;
};
var Ve = new Re(null, 0, []);
function We(a, b, c) {
  this.l = a;
  this.d = b;
  this.b = c;
}
h = We.prototype;
h.Ba = function(a) {
  return a === this.l ? this : new We(a, this.d, Ga(this.b));
};
h.Sa = function() {
  var a = this.b;
  return $e ? $e(a) : af.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
h.qa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if (null == k) {
    return a = Qe(this, a, g, Ve.qa(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.qa(a, b + 5, c, d, e, f);
  return b === k ? this : Qe(this, a, g, b);
};
h.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if (null == g) {
    return new We(null, this.d + 1, Oe(this.b, f, Ve.pa(a + 5, b, c, d, e)));
  }
  a = g.pa(a + 5, b, c, d, e);
  return a === g ? this : new We(null, this.d, Oe(this.b, f, a));
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
                d = new Re(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new We(null, this.d - 1, Oe(this.b, d, a));
        }
      } else {
        d = new We(null, this.d, Oe(this.b, d, a));
      }
    }
    return d;
  }
  return this;
};
function bf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Ne(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function cf(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.d = c;
  this.b = d;
}
h = cf.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Qc(this.b, 0, b, 0, 2 * this.d);
  return new cf(a, this.ua, this.d, b);
};
h.Sa = function() {
  var a = this.b;
  return Te ? Te(a) : Ue.call(null, a);
};
h.Ca = function(a, b, c, d) {
  a = bf(this.b, this.d, c);
  return 0 > a ? d : Ne(c, this.b[a]) ? this.b[a + 1] : d;
};
h.qa = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = bf(this.b, this.d, d);
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
      a === this.l ? (this.b = b, this.d = d, a = this) : a = new cf(this.l, this.ua, d, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Qe(this, a, b + 1, e);
  }
  return(new Re(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
h.pa = function(a, b, c, d, e) {
  return b === this.ua ? (a = bf(this.b, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Qc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new cf(null, this.ua, this.d + 1, b)) : cc.c(this.b[a], d) ? this : new cf(null, this.ua, this.d, Oe(this.b, a + 1, d))) : (new Re(null, 1 << (this.ua >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
h.Ta = function(a, b, c) {
  a = bf(this.b, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new cf(null, this.ua, this.d - 1, Pe(this.b, dd(a, 2)));
};
function Ye() {
  switch(arguments.length) {
    case 6:
      return Ze(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Xe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Ze(a, b, c, d, e, f) {
  var g = Vb(b);
  if (g === d) {
    return new cf(null, g, 2, [b, c, e, f]);
  }
  var k = new Me;
  return Ve.pa(a, g, b, c, k).pa(a, d, e, f, k);
}
function Xe(a, b, c, d, e, f, g) {
  var k = Vb(c);
  if (k === e) {
    return new cf(null, k, 2, [c, d, f, g]);
  }
  var l = new Me;
  return Ve.qa(a, b, k, c, d, l).qa(a, b, e, f, g, l);
}
function df(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = df.prototype;
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
  return null == this.v ? new P(null, 2, 5, Q, [this.xa[this.j], this.xa[this.j + 1]], null) : H(this.v);
};
h.la = function() {
  if (null == this.v) {
    var a = this.xa, b = this.j + 2;
    return ef ? ef(a, b, null) : Ue.call(null, a, b, null);
  }
  var a = this.xa, b = this.j, c = I(this.v);
  return ef ? ef(a, b, c) : Ue.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new df(b, this.xa, this.j, this.v, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
df.prototype[Fa] = function() {
  return ec(this);
};
function Ue() {
  switch(arguments.length) {
    case 1:
      return Te(arguments[0]);
    case 3:
      return ef(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Te(a) {
  return ef(a, 0, null);
}
function ef(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new df(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (x(d) && (d = d.Sa(), x(d))) {
          return new df(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new df(null, a, b, c, null);
  }
}
function ff(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = ff.prototype;
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
  return H(this.v);
};
h.la = function() {
  var a = this.xa, b = this.j, c = I(this.v);
  return gf ? gf(null, a, b, c) : af.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new ff(b, this.xa, this.j, this.v, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
ff.prototype[Fa] = function() {
  return ec(this);
};
function af() {
  switch(arguments.length) {
    case 1:
      return $e(arguments[0]);
    case 4:
      return gf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function $e(a) {
  return gf(null, a, 0, null);
}
function gf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (x(e) && (e = e.Sa(), x(e))) {
          return new ff(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new ff(a, b, c, d, null);
  }
}
function hf(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.m = f;
  this.i = 16123663;
  this.s = 8196;
}
h = hf.prototype;
h.toString = function() {
  return Lb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return ec(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.entries = function() {
  return Ae(G(this));
};
h.values = function() {
  return ec(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Oc(b) ? (c = Cb(b), b = Db(b), g = c, d = Ac(c), c = g) : (c = H(b), g = K(c, 0), c = f = K(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = I(b), c = null, d = 0), e = 0;
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
  return ye(this, b);
};
h.Fa = function() {
  return new jf({}, this.root, this.d, this.ma, this.na);
};
h.M = function() {
  return jb(Ie, this.h);
};
h.mb = function(a, b) {
  if (null == b) {
    return this.ma ? new hf(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ta(0, Vb(b), b);
  return c === this.root ? this : new hf(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new hf(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Me;
  b = (null == this.root ? Ve : this.root).pa(0, Vb(b), b, c, a);
  return b === this.root ? this : new hf(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.ma ? tc(new P(null, 2, 5, Q, [null, this.na], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new hf(b, this.d, this.root, this.ma, this.na, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Va(this, E.c(b, 0), E.c(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = H(d);
    if (Nc(e)) {
      c = Va(c, E.c(e, 0), E.c(e, 1)), d = I(d);
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
var Ie = new hf(null, 0, null, !1, null, jc);
function Ec(a, b) {
  for (var c = a.length, d = 0, e = wb(Ie);;) {
    if (d < c) {
      var f = d + 1, e = e.Ha(null, a[d], b[d]), d = f
    } else {
      return yb(e);
    }
  }
}
hf.prototype[Fa] = function() {
  return ec(this);
};
function jf(a, b, c, d, e) {
  this.l = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.s = 56;
}
function kf(a, b) {
  if (a.l) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ya, b)) : B(Ya, b)) {
      return lf(a, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = H(c);
      if (x(e)) {
        var f = e, c = I(c), d = lf(d, function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
        }(), function() {
          var a = f;
          return Ke.a ? Ke.a(a) : Ke.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function lf(a, b, c) {
  if (a.l) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Me;
      b = (null == a.root ? Ve : a.root).qa(a.l, 0, Vb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = jf.prototype;
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
  return kf(this, b);
};
h.Ra = function() {
  var a;
  if (this.l) {
    this.l = null, a = new hf(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ha = function(a, b, c) {
  return lf(this, b, c);
};
var Md = function Md() {
  return Md.k(0 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Md.k = function(a) {
  for (var b = G(a), c = wb(Ie);;) {
    if (b) {
      a = I(I(b));
      var d = H(b), b = H(I(b)), c = zb(c, d, b), b = a;
    } else {
      return yb(c);
    }
  }
};
Md.u = 0;
Md.r = function(a) {
  return Md.k(G(a));
};
function mf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = mf.prototype;
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Sa, a)) : B(Sa, a)) ? this.ja.ia(null) : I(this.ja);
  return null == a ? null : new mf(a, this.ka);
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Sa, a)) : B(Sa, a)) ? this.ja.ia(null) : I(this.ja);
  return null != a ? new mf(a, this.ka) : bc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new mf(this.ja, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
mf.prototype[Fa] = function() {
  return ec(this);
};
function Ee(a) {
  return(a = G(a)) ? new mf(a, null) : null;
}
function Je(a) {
  return Za(a);
}
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Sa, a)) : B(Sa, a)) ? this.ja.ia(null) : I(this.ja);
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
  return this.ja.fa(null).$a(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Sa, a)) : B(Sa, a)) ? this.ja.ia(null) : I(this.ja);
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
  return(a = G(a)) ? new nf(a, null) : null;
}
function Ke(a) {
  return ab(a);
}
function ld(a) {
  if (a && (a.s & 4096 || a.Bb)) {
    return a.Oa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function of(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
of.prototype.gb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
of.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function pf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.s = 8192;
}
h = pf.prototype;
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
  return new of(this.start, this.end, this.step);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new pf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new pf(this.h, this.start + this.step, this.end, this.step, null) : null;
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
  return null != pb(this) ? new pf(this.h, this.start + this.step, this.end, this.step, null) : bc;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new pf(b, this.start, this.end, this.step, this.m);
};
h.I = function(a, b) {
  return tc(b, this);
};
pf.prototype[Fa] = function() {
  return ec(this);
};
function qf() {
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
        var b = H(a);
        a = I(a);
        var c = H(a);
        a = I(a);
        var e = H(a);
        a = ac(a);
        return d(b, c, e, a);
      };
      c.k = d;
      return c;
    }(), g = function(a, b, g, p) {
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
          var q = null;
          if (3 < arguments.length) {
            for (var q = 0, r = Array(arguments.length - 3);q < r.length;) {
              r[q] = arguments[q + 3], ++q;
            }
            q = new Zb(r, 0);
          }
          return k.k(a, b, g, q);
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
function rf(a, b, c, d, e, f, g) {
  var k = qa;
  qa = null == qa ? null : qa - 1;
  try {
    if (null != qa && 0 > qa) {
      return rb(a, "#");
    }
    rb(a, c);
    if (0 === za.a(f)) {
      G(g) && rb(a, function() {
        var a = sf.a(f);
        return x(a) ? a : "...";
      }());
    } else {
      if (G(g)) {
        var l = H(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = I(g), n = za.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          G(m) && 0 === n && (rb(a, d), rb(a, function() {
            var a = sf.a(f);
            return x(a) ? a : "...";
          }()));
          break;
        } else {
          rb(a, d);
          var p = H(m);
          c = a;
          g = f;
          b.g ? b.g(p, c, g) : b.call(null, p, c, g);
          var q = I(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return rb(a, e);
  } finally {
    qa = k;
  }
}
function tf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f);
      rb(a, g);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, Oc(d) ? (c = Cb(d), e = Db(d), d = c, g = Ac(c), c = e, e = g) : (g = H(d), rb(a, g), c = I(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var uf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function vf(a) {
  return[D('"'), D(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return uf[a];
  })), D('"')].join("");
}
function wf(a, b, c) {
  if (null == a) {
    return rb(b, "nil");
  }
  if (void 0 === a) {
    return rb(b, "#\x3cundefined\x3e");
  }
  if (x(function() {
    var b = L(c, xa);
    return x(b) ? (b = a ? a.i & 131072 || a.Ab ? !0 : a.i ? !1 : B(fb, a) : B(fb, a)) ? Kc(a) : b : b;
  }())) {
    rb(b, "^");
    var d = Kc(a);
    xf.g ? xf.g(d, b, c) : xf.call(null, d, b, c);
    rb(b, " ");
  }
  return null == a ? rb(b, "nil") : a.Jb ? a.Ub(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.C(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? rb(b, "" + D(a)) : null != a && a.constructor === Object ? (rb(b, "#js "), d = Rd.c(function(b) {
    return new P(null, 2, 5, Q, [kd.a(b), a[b]], null);
  }, Pc(a)), yf.o ? yf.o(d, xf, b, c) : yf.call(null, d, xf, b, c)) : Ba(a) ? rf(b, xf, "#js [", " ", "]", c, a) : x("string" == typeof a) ? x(wa.a(c)) ? rb(b, vf(a)) : rb(b, a) : Gc(a) ? tf(b, wc(["#\x3c", "" + D(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + D(a);;) {
      if (Ac(c) < b) {
        c = [D("0"), D(c)].join("");
      } else {
        return c;
      }
    }
  }, tf(b, wc(['#inst "', "" + D(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : x(a instanceof RegExp) ? tf(b, wc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : B(sb, a)) : B(sb, a)) ? tb(a, b, c) : tf(b, wc(["#\x3c", "" + D(a), "\x3e"], 0));
}
function xf(a, b, c) {
  var d = zf.a(c);
  return x(d) ? (c = Dc.g(c, Af, wf), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : wf(a, b, c);
}
function Pd() {
  var a = 0 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 0), 0) : null, b = ta(), c;
  if (Lc(a)) {
    c = "";
  } else {
    c = D;
    var d = b, b = new ma;
    a: {
      var e = a, a = new Kb(b);
      xf(H(e), a, d);
      for (var e = G(I(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.F(null, k);
          rb(a, " ");
          xf(l, a, d);
          k += 1;
        } else {
          if (e = G(e)) {
            f = e, Oc(f) ? (e = Cb(f), g = Db(f), f = e, l = Ac(e), e = g, g = l) : (l = H(f), rb(a, " "), xf(l, a, d), e = I(f), f = null, g = 0), k = 0;
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
function yf(a, b, c, d) {
  return rf(c, function(a, c, d) {
    var k = Za(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    rb(c, " ");
    a = ab(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
Zb.prototype.ea = !0;
Zb.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
md.prototype.ea = !0;
md.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
df.prototype.ea = !0;
df.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Ce.prototype.ea = !0;
Ce.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
oe.prototype.ea = !0;
oe.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
jd.prototype.ea = !0;
jd.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
hf.prototype.ea = !0;
hf.prototype.C = function(a, b, c) {
  return yf(this, xf, b, c);
};
ff.prototype.ea = !0;
ff.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
se.prototype.ea = !0;
se.prototype.C = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
qd.prototype.ea = !0;
qd.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Kd.prototype.ea = !0;
Kd.prototype.C = function(a, b, c) {
  rb(b, "#\x3cAtom: ");
  xf(this.state, b, c);
  return rb(b, "\x3e");
};
nf.prototype.ea = !0;
nf.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
P.prototype.ea = !0;
P.prototype.C = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
hd.prototype.ea = !0;
hd.prototype.C = function(a, b) {
  return rb(b, "()");
};
v.prototype.ea = !0;
v.prototype.C = function(a, b, c) {
  return yf(this, xf, b, c);
};
pf.prototype.ea = !0;
pf.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
mf.prototype.ea = !0;
mf.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
gd.prototype.ea = !0;
gd.prototype.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
function Bf(a, b) {
  return Wc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Cf(a) {
  a *= Math.random.p ? Math.random.p() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Df = null;
function Ef() {
  if (null == Df) {
    var a = new v(null, 3, [Ff, R, Gf, R, Hf, R], null);
    Df = O ? O(a) : Ld.call(null, a);
  }
  return Df;
}
function If(a, b, c) {
  var d = cc.c(b, c);
  if (!d && !(d = Uc(Hf.a(a).call(null, b), c)) && (d = Nc(c)) && (d = Nc(b))) {
    if (d = Ac(c) === Ac(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Ac(c)) {
          e = If(a, function() {
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
function Jf(a) {
  var b;
  b = Ef();
  b = J.a ? J.a(b) : J.call(null, b);
  return Ed(L(Ff.a(b), a));
}
function Kf(a, b, c, d) {
  Qd.c(a, function() {
    return J.a ? J.a(b) : J.call(null, b);
  });
  Qd.c(c, function() {
    return J.a ? J.a(d) : J.call(null, d);
  });
}
var Lf = function Lf(b, c, d) {
  var e = (J.a ? J.a(d) : J.call(null, d)).call(null, b), e = x(x(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (x(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(c);;) {
      if (0 < Ac(e)) {
        Lf(b, H(e), d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  if (x(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(b);;) {
      if (0 < Ac(e)) {
        Lf(H(e), c, d), e = ac(e);
      } else {
        return null;
      }
    }
  }();
  return x(e) ? e : !1;
};
function Mf(a, b, c) {
  c = Lf(a, b, c);
  if (x(c)) {
    a = c;
  } else {
    c = If;
    var d;
    d = Ef();
    d = J.a ? J.a(d) : J.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Nf = function Nf(b, c, d, e, f, g, k) {
  var l = Wc(function(e, g) {
    var k = K(g, 0);
    K(g, 1);
    if (If(J.a ? J.a(d) : J.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Mf(k, H(e), f);
      l = x(l) ? g : e;
      if (!x(Mf(H(l), k, f))) {
        throw Error([D("Multiple methods in multimethod '"), D(b), D("' match dispatch value: "), D(c), D(" -\x3e "), D(k), D(" and "), D(H(l)), D(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, J.a ? J.a(e) : J.call(null, e));
  if (x(l)) {
    if (cc.c(J.a ? J.a(k) : J.call(null, k), J.a ? J.a(d) : J.call(null, d))) {
      return Qd.o(g, Dc, c, H(I(l))), H(I(l));
    }
    Kf(g, e, k, d);
    return Nf(b, c, d, e, f, g, k);
  }
  return null;
};
function U(a, b) {
  throw Error([D("No method in multimethod '"), D(a), D("' for dispatch value: "), D(b)].join(""));
}
function Of(a, b, c, d, e, f, g, k) {
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
h = Of.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y) {
    a = this;
    var na = Dd(a.f, b, c, d, e, wc([f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y], 0)), Eg = V(this, na);
    x(Eg) || U(a.name, na);
    return Dd(Eg, b, c, d, e, wc([f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N, Y], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N) {
    a = this;
    var Y = a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N), na = V(this, Y);
    x(na) || U(a.name, Y);
    return na.$ ? na.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N) : na.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F, N);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F) {
    a = this;
    var N = a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F), Y = V(this, N);
    x(Y) || U(a.name, N);
    return Y.Z ? Y.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F) : Y.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y, F);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y) {
    a = this;
    var F = a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y), N = V(this, F);
    x(N) || U(a.name, F);
    return N.Y ? N.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y) : N.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z, y);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z) {
    a = this;
    var y = a.f.X ? a.f.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z), F = V(this, y);
    x(F) || U(a.name, y);
    return F.X ? F.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z) : F.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A, z);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A) {
    a = this;
    var z = a.f.W ? a.f.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A), y = V(this, z);
    x(y) || U(a.name, z);
    return y.W ? y.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A) : y.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w, A);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w) {
    a = this;
    var A = a.f.V ? a.f.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w), z = V(this, A);
    x(z) || U(a.name, A);
    return z.V ? z.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, w) : z.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, w);
  }
  function k(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t) {
    a = this;
    var w = a.f.U ? a.f.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t), A = V(this, w);
    x(A) || U(a.name, w);
    return A.U ? A.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : A.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, n, m, p, q, r) {
    a = this;
    var t = a.f.T ? a.f.T(b, c, d, e, f, g, k, l, n, m, p, q, r) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r), w = V(this, t);
    x(w) || U(a.name, t);
    return w.T ? w.T(b, c, d, e, f, g, k, l, n, m, p, q, r) : w.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, n, m, p, q) {
    a = this;
    var r = a.f.S ? a.f.S(b, c, d, e, f, g, k, l, n, m, p, q) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q), t = V(this, r);
    x(t) || U(a.name, r);
    return t.S ? t.S(b, c, d, e, f, g, k, l, n, m, p, q) : t.call(null, b, c, d, e, f, g, k, l, n, m, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, n, m, p) {
    a = this;
    var q = a.f.R ? a.f.R(b, c, d, e, f, g, k, l, n, m, p) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p), r = V(this, q);
    x(r) || U(a.name, q);
    return r.R ? r.R(b, c, d, e, f, g, k, l, n, m, p) : r.call(null, b, c, d, e, f, g, k, l, n, m, p);
  }
  function p(a, b, c, d, e, f, g, k, l, n, m) {
    a = this;
    var p = a.f.Q ? a.f.Q(b, c, d, e, f, g, k, l, n, m) : a.f.call(null, b, c, d, e, f, g, k, l, n, m), q = V(this, p);
    x(q) || U(a.name, p);
    return q.Q ? q.Q(b, c, d, e, f, g, k, l, n, m) : q.call(null, b, c, d, e, f, g, k, l, n, m);
  }
  function q(a, b, c, d, e, f, g, k, l, n) {
    a = this;
    var m = a.f.ca ? a.f.ca(b, c, d, e, f, g, k, l, n) : a.f.call(null, b, c, d, e, f, g, k, l, n), p = V(this, m);
    x(p) || U(a.name, m);
    return p.ca ? p.ca(b, c, d, e, f, g, k, l, n) : p.call(null, b, c, d, e, f, g, k, l, n);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var n = a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l), m = V(this, n);
    x(m) || U(a.name, n);
    return m.ba ? m.ba(b, c, d, e, f, g, k, l) : m.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.f.aa ? a.f.aa(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k), n = V(this, l);
    x(n) || U(a.name, l);
    return n.aa ? n.aa(b, c, d, e, f, g, k) : n.call(null, b, c, d, e, f, g, k);
  }
  function w(a, b, c, d, e, f, g) {
    a = this;
    var k = a.f.J ? a.f.J(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g), l = V(this, k);
    x(l) || U(a.name, k);
    return l.J ? l.J(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function z(a, b, c, d, e, f) {
    a = this;
    var g = a.f.t ? a.f.t(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = V(this, g);
    x(k) || U(a.name, g);
    return k.t ? k.t(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function A(a, b, c, d, e) {
    a = this;
    var f = a.f.o ? a.f.o(b, c, d, e) : a.f.call(null, b, c, d, e), g = V(this, f);
    x(g) || U(a.name, f);
    return g.o ? g.o(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function F(a, b, c, d) {
    a = this;
    var e = a.f.g ? a.f.g(b, c, d) : a.f.call(null, b, c, d), f = V(this, e);
    x(f) || U(a.name, e);
    return f.g ? f.g(b, c, d) : f.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    var d = a.f.c ? a.f.c(b, c) : a.f.call(null, b, c), e = V(this, d);
    x(e) || U(a.name, d);
    return e.c ? e.c(b, c) : e.call(null, b, c);
  }
  function Y(a, b) {
    a = this;
    var c = a.f.a ? a.f.a(b) : a.f.call(null, b), d = V(this, c);
    x(d) || U(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function na(a) {
    a = this;
    var b = a.f.p ? a.f.p() : a.f.call(null), c = V(this, b);
    x(c) || U(a.name, b);
    return c.p ? c.p() : c.call(null);
  }
  var y = null, y = function(y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, vc, wd, Se) {
    switch(arguments.length) {
      case 1:
        return na.call(this, y);
      case 2:
        return Y.call(this, y, X);
      case 3:
        return N.call(this, y, X, aa);
      case 4:
        return F.call(this, y, X, aa, ba);
      case 5:
        return A.call(this, y, X, aa, ba, da);
      case 6:
        return z.call(this, y, X, aa, ba, da, ga);
      case 7:
        return w.call(this, y, X, aa, ba, da, ga, ja);
      case 8:
        return t.call(this, y, X, aa, ba, da, ga, ja, la);
      case 9:
        return r.call(this, y, X, aa, ba, da, ga, ja, la, pa);
      case 10:
        return q.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa);
      case 11:
        return p.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va);
      case 12:
        return n.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa);
      case 13:
        return m.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia);
      case 14:
        return l.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa);
      case 15:
        return k.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b);
      case 16:
        return g.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a);
      case 17:
        return f.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib);
      case 18:
        return e.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb);
      case 19:
        return d.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob);
      case 20:
        return c.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, vc);
      case 21:
        return b.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, vc, wd);
      case 22:
        return a.call(this, y, X, aa, ba, da, ga, ja, la, pa, sa, va, Aa, Ia, Oa, $b, $a, ib, vb, Ob, vc, wd, Se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  y.a = na;
  y.c = Y;
  y.g = N;
  y.o = F;
  y.t = A;
  y.J = z;
  y.aa = w;
  y.ba = t;
  y.ca = r;
  y.Q = q;
  y.R = p;
  y.S = n;
  y.T = m;
  y.U = l;
  y.V = k;
  y.W = g;
  y.X = f;
  y.Y = e;
  y.Z = d;
  y.$ = c;
  y.lb = b;
  y.Ma = a;
  return y;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.p = function() {
  var a = this.f.p ? this.f.p() : this.f.call(null), b = V(this, a);
  x(b) || U(this.name, a);
  return b.p ? b.p() : b.call(null);
};
h.a = function(a) {
  var b = this.f.a ? this.f.a(a) : this.f.call(null, a), c = V(this, b);
  x(c) || U(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.c = function(a, b) {
  var c = this.f.c ? this.f.c(a, b) : this.f.call(null, a, b), d = V(this, c);
  x(d) || U(this.name, c);
  return d.c ? d.c(a, b) : d.call(null, a, b);
};
h.g = function(a, b, c) {
  var d = this.f.g ? this.f.g(a, b, c) : this.f.call(null, a, b, c), e = V(this, d);
  x(e) || U(this.name, d);
  return e.g ? e.g(a, b, c) : e.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  var e = this.f.o ? this.f.o(a, b, c, d) : this.f.call(null, a, b, c, d), f = V(this, e);
  x(f) || U(this.name, e);
  return f.o ? f.o(a, b, c, d) : f.call(null, a, b, c, d);
};
h.t = function(a, b, c, d, e) {
  var f = this.f.t ? this.f.t(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), g = V(this, f);
  x(g) || U(this.name, f);
  return g.t ? g.t(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.J = function(a, b, c, d, e, f) {
  var g = this.f.J ? this.f.J(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = V(this, g);
  x(k) || U(this.name, g);
  return k.J ? k.J(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  var k = this.f.aa ? this.f.aa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g), l = V(this, k);
  x(l) || U(this.name, k);
  return l.aa ? l.aa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ba = function(a, b, c, d, e, f, g, k) {
  var l = this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k), m = V(this, l);
  x(m) || U(this.name, l);
  return m.ba ? m.ba(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.ca = function(a, b, c, d, e, f, g, k, l) {
  var m = this.f.ca ? this.f.ca(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l), n = V(this, m);
  x(n) || U(this.name, m);
  return n.ca ? n.ca(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.f.Q ? this.f.Q(a, b, c, d, e, f, g, k, l, m) : this.f.call(null, a, b, c, d, e, f, g, k, l, m), p = V(this, n);
  x(p) || U(this.name, n);
  return p.Q ? p.Q(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.f.R ? this.f.R(a, b, c, d, e, f, g, k, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n), q = V(this, p);
  x(q) || U(this.name, p);
  return q.R ? q.R(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.S = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.f.S ? this.f.S(a, b, c, d, e, f, g, k, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = V(this, q);
  x(r) || U(this.name, q);
  return r.S ? r.S(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.T = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.f.T ? this.f.T(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = V(this, r);
  x(t) || U(this.name, r);
  return t.T ? t.T(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.U = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.f.U ? this.f.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), w = V(this, t);
  x(w) || U(this.name, t);
  return w.U ? w.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : w.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.V = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var w = this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), z = V(this, w);
  x(z) || U(this.name, w);
  return z.V ? z.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : z.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) {
  var z = this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w), A = V(this, z);
  x(A) || U(this.name, z);
  return A.W ? A.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w) : A.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) {
  var A = this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z), F = V(this, A);
  x(F) || U(this.name, A);
  return F.X ? F.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z) : F.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) {
  var F = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A), N = V(this, F);
  x(N) || U(this.name, F);
  return N.Y ? N.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A) : N.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) {
  var N = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F), Y = V(this, N);
  x(Y) || U(this.name, N);
  return Y.Z ? Y.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F) : Y.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F);
};
h.$ = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) {
  var Y = this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N), na = V(this, Y);
  x(na) || U(this.name, Y);
  return na.$ ? na.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N) : na.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y) {
  var na = Dd(this.f, a, b, c, d, wc([e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y], 0)), y = V(this, na);
  x(y) || U(this.name, na);
  return Dd(y, a, b, c, d, wc([e, f, g, k, l, m, n, p, q, r, t, w, z, A, F, N, Y], 0));
};
function Pf(a, b, c) {
  Qd.o(a.Ua, Dc, b, c);
  Kf(a.ib, a.Ua, a.Va, a.hb);
}
function V(a, b) {
  cc.c(function() {
    var b = a.Va;
    return J.a ? J.a(b) : J.call(null, b);
  }(), function() {
    var b = a.hb;
    return J.a ? J.a(b) : J.call(null, b);
  }()) || Kf(a.ib, a.Ua, a.Va, a.hb);
  var c = function() {
    var b = a.ib;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, b);
  if (x(c)) {
    return c;
  }
  c = Nf(a.name, b, a.hb, a.Ua, a.Lb, a.ib, a.Va);
  return x(c) ? c : function() {
    var b = a.Ua;
    return J.a ? J.a(b) : J.call(null, b);
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
var Qf = new M(null, "bullets", "bullets", 1734809024), T = new M(null, "p2", "p2", 905500641), Rf = new M(null, "r", "r", -471384190), xa = new M(null, "meta", "meta", 1499536964), Sf = new M(null, "selected", "selected", 574897764), Tf = new M(null, "enemy-spawn", "enemy-spawn", 1471569540), ya = new M(null, "dup", "dup", 556298533), Uf = new M(null, "dir", "dir", 1734754661), Vf = new M(null, "ammo", "ammo", -1520726489), Nd = new M(null, "validator", "validator", -1966190681), Wf = new M(null, 
"default", "default", -1987822328), Xf = new M(null, "w", "w", 354169001), Yf = new M(null, "th", "th", -545608566), Zf = new M(null, "th1", "th1", 583362347), $f = new M(null, "pos", "pos", -864607220), W = new M(null, "type", "type", 1174270348), ag = new M(null, "th2", "th2", 1996173036), bg = new M(null, "cooldown", "cooldown", -1178127572), Af = new M(null, "fallback-impl", "fallback-impl", -1501286995), ua = new M(null, "flush-on-newline", "flush-on-newline", -151457939), cg = new M(null, "segments", 
"segments", 1937535949), S = new M(null, "p1", "p1", -936759954), dg = new M(null, "targets", "targets", 2014963406), eg = new M(null, "walls", "walls", -268788818), fg = new M(null, "chunks", "chunks", 83720431), Gf = new M(null, "descendants", "descendants", 1824886031), gg = new M(null, "k", "k", -2146297393), hg = new M("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Hf = new M(null, "ancestors", "ancestors", -776045424), ig = new M(null, "level", "level", 1290497552), 
jg = new M(null, "turn", "turn", 75759344), wa = new M(null, "readably", "readably", 1129599760), sf = new M(null, "more-marker", "more-marker", -14717935), kg = new M(null, "head", "head", -771383919), lg = new M(null, "c", "c", -1763192079), mg = new M(null, "stop", "stop", -2140911342), za = new M(null, "print-length", "print-length", 1931866356), ng = new M(null, "tail", "tail", -1146023564), og = new M(null, "id", "id", -1388402092), pg = new M(null, "score", "score", -1963588780), qg = new M(null, 
"terrain", "terrain", 704966005), Ff = new M(null, "parents", "parents", -2027538891), rg = new M(null, "length", "length", 588987862), sg = new M(null, "b", "b", 1482224470), tg = new M(null, "right", "right", -452581833), ug = new M(null, "health", "health", -295520649), vg = new M(null, "player", "player", -97687400), wg = new M(null, "target-length", "target-length", 208661657), xg = new M(null, "enemies", "enemies", 2114285722), yg = new M(null, "hierarchy", "hierarchy", -1053470341), zf = new M(null, 
"alt-impl", "alt-impl", 670969595), zg = new M(null, "barrel-change", "barrel-change", -347000069), Ag = new M(null, "temperature", "temperature", 899018429), Z = new M("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), Bg = new M(null, "left", "left", -399115937);
var Cg = function Cg(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = Cg[u(null == b ? null : b)];
  if (!e && (e = Cg._, !e)) {
    throw C("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function Dg(a) {
  return 33 !== a.b.length;
}
function Fg(a) {
  a = a.b[32];
  return a[a[32] - 1];
}
function Gg(a, b, c) {
  for (;;) {
    if (x(Dg(a))) {
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
;function Hg(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.b;
      }
      if (x(Dg(c))) {
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
function Ig(a, b, c, d) {
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
var Jg = function Jg(b, c, d, e, f) {
  if (x(Dg(e))) {
    for (var g = Ga(e.b), g = e = Xd(e.l, g);;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (x(l)) {
          l = Ga(l.b);
          l = Xd(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = Ig(f.b, d, b - 5, f);
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
      var l = g[k], m = 0 < k ? c[k] - c[k - 1] : c[0], l = m !== 1 << b ? Jg(b - 5, m + 1, d, l, f) : null
    }
    x(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = Ig(f.b, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, Kg = function Kg(b, c, d, e) {
  if (x(Dg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = Kg(b - 5, c, d, e.b[f]);
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
    b = Kg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    x(Dg(k)) ? (e = Ga(e.b), c[f] -= 32) : (g = Fg(k) - (x(b) ? Fg(b) : 0), e = Ga(e.b), c[f] -= g);
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
}, Lg = function Lg(b, c, d, e) {
  if (x(Dg(c))) {
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
  f[k] = Lg(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return Xd(c.l, f);
};
function Mg(a, b) {
  if (b.l === a) {
    return b;
  }
  var c = Ga(b.b);
  33 === c.length && (c[32] = Ga(c[32]));
  return new Wd(a, c);
}
var Ng = function Ng(b, c, d, e, f) {
  e = Mg(d, e);
  if (x(Dg(e))) {
    for (var g = e;;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = Ig(f.b, d, b - 5, f);
        } else {
          l = Mg(d, l);
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
      var l = Mg(d, c[k]), m = 0 < k ? g[k] - g[k - 1] : g[0], l = m !== 1 << b ? Ng(b - 5, m + 1, d, l, f) : null
    }
    x(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = Ig(f.b, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, Og = function Og(b, c, d, e, f) {
  d = Mg(c, d);
  if (x(Dg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.b[e & 31] = f;
        break;
      } else {
        var g = g.b, k = e >> b & 31, l = Mg(c, g[k]), g = g[k] = l;
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
    g[l] = Og(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var Pg = function Pg(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = Pg[u(null == b ? null : b)];
  if (!c && (c = Pg._, !c)) {
    throw C("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function Qg(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.s = 1536;
}
h = Qg.prototype;
h.toString = function() {
  return Lb(this);
};
h.C = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Rg ? Rg(a, b, c, d) : Sg.call(null, a, b, c, d);
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
  return lc(pe(this.D, this.j + this.w, Ac(this.D)), b);
};
h.O = function(a, b, c) {
  return mc(pe(this.D, this.j + this.w, Ac(this.D)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = Rg ? Rg(a, b, c, d) : Sg.call(null, a, b, c, d);
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
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Tg ? Tg(b, a, 0) : Sg.call(null, b, a, 0)) : b = null;
  return null == b ? bc : b;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return Ug ? Ug(c, d, e, f, b) : Sg.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return tc(b, this);
};
h.Wa = function() {
  var a = this.ga.length, b;
  this.j + a < Ka(this.D) ? (b = this.D, a = this.j + a, b = Tg ? Tg(b, a, 0) : Sg.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Sg() {
  switch(arguments.length) {
    case 3:
      return Tg(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Rg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ug(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Tg(a, b, c) {
  return new Qg(a, Hg(a.d, a.shift, a.root, a.n, b), b, c, null, null);
}
function Rg(a, b, c, d) {
  return new Qg(a, b, c, d, null, null);
}
function Ug(a, b, c, d, e) {
  return new Qg(a, b, c, d, e, null);
}
var Vg = function Vg(b, c, d) {
  if (0 === c) {
    var e = b.b;
    b = Array(d);
    Qc(e, 0, b, 0, d);
  } else {
    var f = Dg(b), g = Ca(f) ? b.b[32] : null, k = d - 1 >> c & 31, l = x(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), m = x(f) ? function() {
      var b = cd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.b, n = Vg(e[l], c - 5, m), p = 5 === c ? 32 === n.b.length : Dg(n);
    b = Array(x(x(f) ? p : f) ? 32 : 33);
    var q = x(p) ? function() {
      var b = cd(m, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? n.b.length : Fg(n);
    Qc(e, 0, b, 0, l);
    b[l] = n;
    if (Ca(x(f) ? p : f)) {
      e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      n = 1 << c;
      if (x(f)) {
        for (f = 0;;) {
          if (f < l) {
            e[f] = (f + 1) * n, f += 1;
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
      e[l] = (0 < l ? e[l - 1] : 0) + q;
      e[32] = l + 1;
      b[32] = e;
    }
  }
  return Xd(null, b);
}, Wg = function Wg(b, c, d, e) {
  if (0 === c) {
    var f = b.b, g = f.length - d, k = Array(g);
    Qc(f, d, k, 0, g);
    return Xd(null, k);
  }
  var l = Dg(b), f = b.b, m = Ca(l) ? b.b[32] : null, n = d >> c & 31, p = x(l) ? n : function() {
    for (var b = n;;) {
      if (d < m[b]) {
        return b;
      }
      b += 1;
    }
  }(), k = x(l) ? function() {
    for (var b = p;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : m[32], q = Wg(f[p], c - 5, 0 < p ? d - (x(l) ? p * (1 << c) : m[p - 1]) : d, function() {
    var b = 1 << c, d = 0 < p ? e - (x(l) ? p * (1 << c) : m[p - 1]) : e;
    return b < d ? b : d;
  }()), g = k - p, g = null == q ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (x(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 1 << c, w = 0, z = x(function() {
      var b = null == q;
      return b ? b : (b = 5 === c) ? b : Dg(q);
    }()) ? (1 << c) - (d >> c - 5 & 31) : Fg(q);;) {
      if (w < g) {
        r[w] = z, z += t, w += 1;
      } else {
        break;
      }
    }
    r[g - 1] = e - d;
  } else {
    for (k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 0, w = p;;) {
      if (t < g) {
        r[t] = m[w] - d, w += 1, t += 1;
      } else {
        break;
      }
    }
  }
  r[32] = g;
  Qc(f, null == q ? p + 1 : p, k, 0, g);
  null != q && (k[0] = q);
  k[32] = r;
  return Xd(b.l, k);
};
function Xg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.s = 2052;
}
h = Xg.prototype;
h.toString = function() {
  return Lb(this);
};
h.da = function(a, b) {
  return E.g(this, b, null);
};
h.G = function(a, b, c) {
  return E.g(this, b, c);
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
      if (x(Dg(d))) {
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
  return 0 <= b && b < this.d ? E.c(this, b) : c;
};
h.C = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.n.length;
    return b >= d ? (a = Array(this.n.length), b -= d, Qc(this.n, 0, a, 0, this.n.length), a[b] = c, new Xg(this.d, this.shift, this.root, a, this.h, null)) : new Xg(this.d, this.shift, Lg(this.shift, this.root, b, c), this.n, this.h, null);
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
  return E.c(this, 0);
};
h.$a = function() {
  return E.c(this, 1);
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
    return new Xg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = Hg(this.d, this.shift, this.root, this.n, this.d - 2), b = Kg(this.shift, this.d - this.n.length, this.root.l, this.root);
  return null == b ? new Xg(this.d - 1, this.shift, Q, a, this.h, null) : 5 < this.shift && null == b.b[1] ? new Xg(this.d - 1, this.shift - 5, b.b[0], a, this.h, null) : new Xg(this.d - 1, this.shift, b, a, this.h, null);
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
  return Yg.t ? Yg.t(a, b, c, e, d) : Yg.call(null, a, b, c, e, d);
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
    return c = Array(a), Qc(this.n, b - d, c, 0, a), new Xg(a, 5, Q, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : Vg(this.root, this.shift, c);
  b = 0 === b ? f : Wg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Qc(this.n, 0, d, 0, c), c = d) : c = Hg(a, this.shift, b, [], a - 1);
  e = e ? b : Kg(this.shift, a, b.l, b);
  if (null == e) {
    return new Xg(a, 5, Q, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.b[1]) {
      b -= 5, e = e.b[0];
    } else {
      return new Xg(a, b, e, c, this.h, null);
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
  return 0 === this.d ? null : 0 === this.d - this.n.length ? uc(this.n, 0) : Tg(this, 0, 0);
};
h.L = function(a, b) {
  return new Xg(this.d, this.shift, this.root, this.n, b, this.m);
};
h.I = function(a, b) {
  if (32 > this.n.length) {
    var c = this.n.length, d = Array(c + 1);
    Qc(this.n, 0, d, 0, c);
    d[c] = b;
    return new Xg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Xd(this.root.l, this.n);
  d = [null];
  d[0] = b;
  if (x(Gg(this.root, this.shift, this.d))) {
    if (x(Dg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, e), g = e;
      g[0] = this.root;
      g[1] = Ig(this.n, this.root.l, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, e), k = this.root.b[32][31];
      e[0] = this.root;
      e[1] = Ig(this.n, this.root.l, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new Xg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new Xg(this.d + 1, this.shift, Jg(this.shift, this.d, this.root.l, this.root, c), d, this.h, null);
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
  return new Xg(Ac(this), this.shift, this.root, this.n, Kc(this), null);
};
se.prototype.fb = function() {
  var a = this.start, b = this.end;
  return Cg(Pg(this.ra), a, b);
};
function Zg(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.za = e;
  this.s = 88;
  this.i = 2;
}
h = Zg.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.za) {
      this.n[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Xd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      this.za = 1;
      if (x(Gg(this.root, this.shift, this.d))) {
        if (x(Dg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = Ig(this.n, this.root.l, this.shift, c);
          this.root = Xd(this.root.l, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Xd(this.root.l, d), g = this.root.b[32][31];
          d[0] = this.root;
          d[1] = Ig(this.n, this.root.l, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = Ng(this.shift, this.d, this.root.l, this.root, c);
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
    return new Xg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  return Ab(this, b, c);
};
h.nb = function(a, b, c) {
  if (this.root.l) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.n[b - a] = c : this.root = Og(this.shift, this.root.l, this.root, b, c), this) : b === this.d ? xb(this, c) : ce(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function Yg(a, b, c, d, e) {
  return new Zg(a, b, c, d, e);
}
;P.prototype.eb = function(a, b, c) {
  return Cg(Pg(this), b, c);
};
se.prototype.eb = function(a, b, c) {
  return Cg(Pg(this), b, c);
};
function $g(a, b) {
  return Cg(a, b, Ac(a));
}
;function ah(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c - e, d - f];
}
function bh(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c + e, d + f];
}
function ch(a, b) {
  var c = K(b, 0), d = K(b, 1);
  return[a * c, a * d];
}
function dh(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return c * e + d * f;
}
function eh(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.atan2(a, b);
}
;var fh = function fh() {
  return fh.k(arguments[0], 1 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
fh.k = function(a, b) {
  var c = K(b, 0), d = K(c, 0), c = K(c, 1);
  a: {
    for (var e = 1, f = G(b);;) {
      if (f && 0 < e) {
        --e, f = I(f);
      } else {
        break a;
      }
    }
  }
  a.beginPath();
  a.moveTo(d, c);
  for (var d = G(b), e = null, g = f = 0;;) {
    if (g < f) {
      var k = e.F(null, g), c = K(k, 0), k = K(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = G(d)) {
        Oc(d) ? (e = Cb(d), d = Db(d), c = e, f = Ac(e), e = c) : (e = H(d), c = K(e, 0), k = K(e, 1), a.lineTo(c, k), d = I(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
fh.u = 1;
fh.r = function(a) {
  var b = H(a);
  a = I(a);
  return fh.k(b, a);
};
var gh = function gh() {
  return gh.k(arguments[0], 1 < arguments.length ? new Zb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
gh.k = function(a, b) {
  Bd(fh, a, b);
  return a.stroke();
};
gh.u = 1;
gh.r = function(a) {
  var b = H(a);
  a = I(a);
  return gh.k(b, a);
};
function hh(a, b, c, d, e) {
  var f = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function ih(a, b) {
  a.save();
  try {
    b.p ? b.p() : b.call(null);
  } finally {
    a.restore();
  }
}
;var jh = new P(null, 6, 5, Q, [new P(null, 4, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-415, 44], null), T, new P(null, 2, 5, Q, [-415, -313], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-415, -313], null), T, new P(null, 2, 5, Q, [-55, -313], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-51, 246], null), T, new P(null, 2, 5, Q, [377, 246], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [377, 246], null), T, new P(null, 2, 5, Q, [377, 
-200], null)], null)], null), new P(null, 8, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-344, 341], null), T, [-469, 341]], null), new v(null, 3, [W, Z, S, [-469, 341], T, [-469, -292]], null), new v(null, 3, [W, Z, S, [-469, -292], T, [-327, -292]], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-189, 340], null), T, [261, 340]], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-203, -294], null), T, [261, -294]], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [409, 
-293], null), T, [541, -293]], null), new v(null, 3, [W, Z, S, [541, -293], T, [541, 327]], null), new v(null, 3, [W, Z, S, [541, 327], T, [420, 327]], null)], null), new P(null, 10, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, 145], null), T, new P(null, 2, 5, Q, [-487, -206], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, -206], null), T, [-241, -452]], null), new v(null, 3, [W, Z, S, [-241, -452], T, new P(null, 2, 5, Q, [-5, -452], null)], null), new v(null, 
3, [W, Z, S, new P(null, 2, 5, Q, [-5, -452], null), T, new P(null, 2, 5, Q, [-5, -280], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-190, 399], null), T, new P(null, 2, 5, Q, [153, 399], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [153, 399], null), T, new P(null, 2, 5, Q, [461, 399], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [461, 399], null), T, new P(null, 2, 5, Q, [461, 120], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [461, 
120], null), T, new P(null, 2, 5, Q, [261, 120], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [318, -426], null), T, [530, -214]], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-508, 422], null), T, [-235, 149]], null)], null), new P(null, 10, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-363, 146], null), T, new P(null, 2, 5, Q, [-30, 147], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-30, 147], null), T, new P(null, 2, 5, Q, [88, 314], null)], null), 
new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [88, 314], null), T, new P(null, 2, 5, Q, [332, 315], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [332, 315], null), T, new P(null, 2, 5, Q, [527, 51], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [527, 51], null), T, new P(null, 2, 5, Q, [350, -268], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [350, -268], null), T, new P(null, 2, 5, Q, [93, -268], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 
5, Q, [93, -268], null), T, new P(null, 2, 5, Q, [-34, -110], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-34, -110], null), T, new P(null, 2, 5, Q, [-371, -108], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-460, 353], null), T, new P(null, 2, 5, Q, [-65, 353], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-487, -314], null), T, new P(null, 2, 5, Q, [-62, -313], null)], null)], null), new P(null, 10, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 
5, Q, [330, -239], null), T, new P(null, 2, 5, Q, [331, 233], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [331, 233], null), T, new P(null, 2, 5, Q, [-239, 233], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-239, 233], null), T, new P(null, 2, 5, Q, [-241, 353], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-241, 353], null), T, new P(null, 2, 5, Q, [496, 352], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [496, 352], null), T, new P(null, 
2, 5, Q, [493, -111], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [77, -126], null), T, new P(null, 2, 5, Q, [-368, -126], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-368, -126], null), T, new P(null, 2, 5, Q, [-368, 224], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-368, 224], null), T, new P(null, 2, 5, Q, [-500, 366], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-500, 366], null), T, new P(null, 2, 5, Q, [-502, -363], null)], 
null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-502, -363], null), T, new P(null, 2, 5, Q, [-74, -363], null)], null)], null), new P(null, 18, 5, Q, [new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [196, 141], null), T, new P(null, 2, 5, Q, [-295, 143], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-295, 143], null), T, new P(null, 2, 5, Q, [-420, -180], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-420, -180], null), T, new P(null, 2, 5, Q, [-262, -401], null)], 
null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-262, -401], null), T, new P(null, 2, 5, Q, [195, -403], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [190, -306], null), T, new P(null, 2, 5, Q, [-200, -303], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-200, -303], null), T, new P(null, 2, 5, Q, [-302, -171], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-302, -171], null), T, new P(null, 2, 5, Q, [-233, 22], null)], null), new v(null, 3, [W, 
Z, S, new P(null, 2, 5, Q, [-233, 22], null), T, new P(null, 2, 5, Q, [188, 21], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-48, -98], null), T, new P(null, 2, 5, Q, [361, -100], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [361, -100], null), T, new P(null, 2, 5, Q, [512, 102], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [512, 102], null), T, new P(null, 2, 5, Q, [365, 377], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [365, 377], 
null), T, new P(null, 2, 5, Q, [-163, 382], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [294, 70], null), T, new P(null, 2, 5, Q, [352, 135], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [352, 135], null), T, new P(null, 2, 5, Q, [262, 285], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [262, 285], null), T, new P(null, 2, 5, Q, [-67, 287], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [-300, 432], null), T, new P(null, 2, 5, Q, [-509, 
-74], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [363, -393], null), T, new P(null, 2, 5, Q, [518, -171], null)], null), new v(null, 3, [W, Z, S, new P(null, 2, 5, Q, [34, -203], null), T, new P(null, 2, 5, Q, [338, -205], null)], null)], null)], null);
var kh = 2 * Math.PI;
if ("undefined" === typeof lh) {
  var lh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, yg, Ef());
    return new Of(Yb("draw-segment"), function() {
      return function(a, b) {
        return W.a(b);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(lh, Z, function(a, b) {
  var c = Sc(b) ? Ad(Md, b) : b, d = L(c, S), c = L(c, T);
  return gh.k(a, wc([d, c], 0));
});
Pf(lh, hg, function(a, b) {
  var c = Sc(b) ? Ad(Md, b) : b, d = L(c, lg), e = L(c, Zf), f = L(c, ag), g = L(c, Uf), c = L(c, Rf);
  return 0 > g ? hh(a, d, c, f, e) : hh(a, d, c, e, f);
});
if ("undefined" === typeof mh) {
  var mh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, yg, Ef());
    return new Of(Yb("update-seg"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(mh, Z, function(a, b, c) {
  a = Sc(a) ? Ad(Md, a) : a;
  var d = L(a, Uf);
  b = ch(b, d);
  return Vd.o(a, cc.c(c, kg) ? T : S, bh, b);
});
Pf(mh, hg, function(a, b, c) {
  a = Sc(a) ? Ad(Md, a) : a;
  var d = L(a, Uf), e = L(a, Rf);
  b = b / e * d;
  return Vd.o(a, cc.c(c, kg) ? ag : Zf, ad, b);
});
function nh(a, b) {
  return Vd.o(mh.g ? mh.g(a, b, kg) : mh.call(null, a, b, kg), rg, ad, b);
}
function oh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a;
  L(c, W);
  return Vd.o(mh.g ? mh.g(c, b, ng) : mh.call(null, c, b, ng), rg, bd, b);
}
function ph(a, b) {
  for (var c = 0, d = b;;) {
    if (cc.c(c, Ac(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < rg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return $g(Vd.o(a, c, oh, d), c);
    }
    var e = c + 1, d = d - rg.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof qh) {
  var qh = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, yg, Ef());
    return new Of(Yb("seg-normal"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(qh, Z, function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, Uf), c = K(d, 0), d = K(d, 1);
  return cc.c(b, Bg) ? [-d, c] : [d, -c];
});
Pf(qh, hg, function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a;
  L(c, Zf);
  var d = L(c, ag), c = L(c, Uf) * (cc.c(b, Bg) ? -1 : 1);
  return ch(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof rh) {
  var rh, sh = O ? O(R) : Ld.call(null, R), th = O ? O(R) : Ld.call(null, R), uh = O ? O(R) : Ld.call(null, R), vh = O ? O(R) : Ld.call(null, R), wh = Cc(R, yg, Ef());
  rh = new Of(Yb("seg-endpoint"), W, Wf, wh, sh, th, uh, vh);
}
Pf(rh, Z, function(a) {
  return T.a(a);
});
Pf(rh, hg, function(a) {
  var b = Sc(a) ? Ad(Md, a) : a;
  L(b, Zf);
  a = L(b, ag);
  var c = L(b, lg), b = L(b, Rf);
  return bh(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function xh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, cg);
  return Dc.g(c, cg, cc.c(rg.a(xc(d)), 0) ? yc.c(null == d ? null : bb(d), b) : yc.c(d, b));
}
function yh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, jg), e = L(c, cg);
  return cc.c(d, b) ? c : xh(Dc.g(c, jg, b), function() {
    switch(b instanceof M ? b.va : null) {
      case "left":
        var a = xc(e), c = function() {
          var c = a;
          return qh.c ? qh.c(c, b) : qh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = bh(function() {
          var b = a;
          return rh.a ? rh.a(b) : rh.call(null, b);
        }(), ch(20, c)), m = Math.atan2(-l, -d), d = m, l = cc.c(b, Bg) ? 1 : -1;
        return new v(null, 7, [W, hg, lg, c, Zf, m, ag, d, rg, 0, Uf, l, Rf, 20], null);
      case "right":
        return a = xc(e), c = function() {
          var c = a;
          return qh.c ? qh.c(c, b) : qh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = bh(function() {
          var b = a;
          return rh.a ? rh.a(b) : rh.call(null, b);
        }(), ch(20, c)), d = m = Math.atan2(-l, -d), l = cc.c(b, Bg) ? 1 : -1, new v(null, 7, [W, hg, lg, c, Zf, m, ag, d, rg, 0, Uf, l, Rf, 20], null);
      default:
        return d = xc(e), a = l = Sc(d) ? Ad(Md, d) : d, d = L(l, ag), l = L(l, Uf), c = function() {
          var b = a;
          return rh.a ? rh.a(b) : rh.call(null, b);
        }(), new v(null, 5, [W, Z, S, c, T, c, rg, 0, Uf, ch(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function zh(a) {
  var b = J.a ? J.a(Ah) : J.call(null, Ah);
  ih(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280, f = a.canvas;
    a.clearRect(0, 0, f.width, f.height);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    return Bf(Id(lh, a), xd.k(eg.a(b), Rd.c(Ke, dg.a(b)), wc([cg.a(b)], 0)));
  });
}
function Bh(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, Zf), e = L(c, ag), c = L(c, Uf);
  if (c * (e - d) > kh) {
    return!0;
  }
  var f = cd(b, kh), d = cd(d, kh), e = cd(e, kh);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= kh : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= kh;
}
if ("undefined" === typeof Ch) {
  var Ch = function() {
    var a = O ? O(R) : Ld.call(null, R), b = O ? O(R) : Ld.call(null, R), c = O ? O(R) : Ld.call(null, R), d = O ? O(R) : Ld.call(null, R), e = Cc(R, yg, Ef());
    return new Of(Yb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [W.a(a), W.a(b)], null);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(Ch, new P(null, 2, 5, Q, [Z, Z], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [S.a(a), T.a(a)], null);
  c = new P(null, 2, 5, Q, [S.a(b), T.a(b)], null);
  var e = K(d, 0), d = K(d, 1), f = K(c, 0), g = K(c, 1), d = ah(d, e);
  c = K(d, 0);
  var d = K(d, 1), k = ah(g, f), g = K(k, 0), k = K(k, 1), f = ah(f, e), e = K(f, 0), f = K(f, 1), l = -1 * c * k - -1 * d * g;
  c = cc.c(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = K(c, 0);
  d = K(c, 1);
  return x(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Pf(Ch, new P(null, 2, 5, Q, [Z, hg], null), function(a, b) {
  var c = Sc(a) ? Ad(Md, a) : a, d = L(c, S), c = L(c, T), e = Sc(b) ? Ad(Md, b) : b, f = L(e, Rf);
  var g = L(e, lg), c = ah(c, d), e = dh(c, c), d = ah(d, g), g = dh(d, d), k = dh(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-dh(c, d) - g) / e, e = (-dh(c, d) + g) / e, g = eh(bh(ch(f, c), d)), c = eh(bh(ch(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = K(f, 0);
  e = K(f, 1);
  d = K(f, 2);
  c = K(f, 3);
  return x(f) ? (d = (f = 0 < g && 1 > g) ? Bh(b, d) : f, x(d) ? d : (e = 0 < e && 1 > e) ? Bh(b, c) : e) : f;
});
Pf(Ch, new P(null, 2, 5, Q, [hg, Z], null), function(a, b) {
  return Ch.c ? Ch.c(b, a) : Ch.call(null, b, a);
});
Pf(Ch, new P(null, 2, 5, Q, [hg, hg], null), function(a, b) {
  var c;
  var d = lg.a(a), e = Rf.a(a);
  c = lg.a(b);
  var f = Rf.a(b), g = ah(c, d), d = K(g, 0);
  c = K(g, 1);
  g = dh(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = K(c, 0);
  d = K(c, 1);
  f = K(c, 2);
  e = K(c, 3);
  return x(c) ? (c = Bh(a, g), d = x(c) ? c : Bh(a, d), x(d) ? (f = Bh(b, f), x(f) ? f : Bh(b, e)) : d) : c;
});
function Dh(a) {
  var b = Sc(a) ? Ad(Md, a) : a, c = L(b, eg), d = L(b, cg), e = xc(d), f = null == d ? null : bb(d);
  return Gd(function(a) {
    return function(b) {
      return Ch.c ? Ch.c(a, b) : Ch.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), xd.c(c, x(Ed(f)) ? null == f ? null : bb(f) : f));
}
function Eh(a) {
  var b = Sc(a) ? Ad(Md, a) : a, c = L(b, dg), d = L(b, cg), e = xc(d);
  return Wc(function() {
    return function(a, b) {
      var c = K(b, 0);
      K(b, 1);
      return Vd.o(Vd.o(a, wg, ad, 50), dg, Fc, c);
    };
  }(e, a, b, b, c, d), b, Td(Hd(Id(Ch, e), Ke), c));
}
var Fh = O ? O(null) : Ld.call(null, null);
function Gh(a, b) {
  for (var c = Sc(b) ? Ad(Md, b) : b, d = L(c, eg), e = a.canvas, f = e.width, g = e.height, k = Cf(f) - f / 2, l = Cf(g) - g / 2;;) {
    if (x(Gd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Rd.c(Hd(function(a, b) {
      return function(c) {
        var d = new P(null, 2, 5, Q, [a, b], null), e = K(c, 0);
        c = K(c, 1);
        c = ah(c, e);
        var f = dh(ah(e, d), c) / dh(c, c) * -1, f = 1 < f ? 1 : f, e = ah(bh(e, ch(0 > f ? 0 : f, c)), d), d = K(e, 0), e = K(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), qf()), d)))) {
      k = Cf(f) - f / 2, l = Cf(g) - g / 2;
    } else {
      return new P(null, 2, 5, Q, [k, l], null);
    }
  }
}
var Hh = new P(null, 1, 5, Q, [new v(null, 5, [rg, 100, W, Z, Uf, new P(null, 2, 5, Q, [1, 0], null), S, new P(null, 2, 5, Q, [0, 0], null), T, new P(null, 2, 5, Q, [100, 0], null)], null)], null);
function Ih() {
  var a = new P(null, 5, 5, Q, [new P(null, 2, 5, Q, [-642, 482], null), new P(null, 2, 5, Q, [642, 482], null), new P(null, 2, 5, Q, [642, -482], null), new P(null, 2, 5, Q, [-642, -482], null), new P(null, 2, 5, Q, [-642, 482], null)], null);
  return Rd.g(function(a, c) {
    return new v(null, 3, [W, Z, S, a, T, c], null);
  }, a, ac(a));
}
function Jh(a, b) {
  return Wc(function(a, d) {
    return Vd.t(a, dg, Dc, d, new v(null, 6, [W, hg, lg, Gh(b, a), Zf, 0, ag, kh, Uf, 1, Rf, 10], null));
  }, Dc.k(a, cg, Hh, wc([rg, 100, wg, 100, jg, null, dg, R, eg, xd.c(Ih(), function() {
    var b = cd(ig.a(a), Ac(jh));
    return jh.a ? jh.a(b) : jh.call(null, b);
  }()), mg, !1], 0)), new pf(null, 0, 10, 1, null));
}
var Ah, Kh = new v(null, 1, [ig, 0], null);
Ah = O ? O(Kh) : Ld.call(null, Kh);
var Lh = document.createElement("button");
Lh.textContent = "Pause";
var Mh, Nh, Oh = dd(3 * (window.innerWidth - 20), 4);
Nh = 1280 < Oh ? 1280 : Oh;
var Ph = dd(4 * (window.innerHeight - 10), 3);
Mh = Nh < Ph ? Nh : Ph;
var Qh = dd(3 * Mh, 4), Rh = document.createElement("canvas");
x(Mh) && Rh.setAttribute("width", Mh);
x(Qh) && Rh.setAttribute("height", Qh);
Rh.setAttribute("style", "border: 1px solid #000; display: block;");
var Sh = document.createElement("div"), Th = Rh.getContext("2d");
function Uh(a) {
  a: {
    var b = Rd.c(D, a);
    a = new ma;
    for (b = G(b);;) {
      if (b) {
        a.append("" + D(H(b))), b = I(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  Sh.textContent = a;
}
var Vh = function Vh(b) {
  Lh.textContent = "Pause";
  return Lh.onclick = function() {
    Qd.o(Ah, Dc, mg, !0);
    Lh.textContent = "Go";
    return Lh.onclick = function() {
      Qd.o(Ah, Dc, mg, !1);
      Wh.a ? Wh.a(b) : Wh.call(null, b);
      return Vh(b);
    };
  };
};
function Xh(a) {
  Lh.textContent = "Start";
  return Lh.onclick = function() {
    Uh(wc(["Press A and D to turn left and right."], 0));
    var b = {level:ig.a(J.a ? J.a(Ah) : J.call(null, Ah))};
    mixpanel.track("start level", b);
    Qd.g(Ah, Jh, a);
    Wh.a ? Wh.a(a) : Wh.call(null, a);
    return Vh(a);
  };
}
var Yh = new v(null, 4, [65, Bg, 37, Bg, 68, tg, 39, tg], null);
function Wh(a) {
  window.onkeydown = function(a) {
    a = a.which;
    a = Yh.a ? Yh.a(a) : Yh.call(null, a);
    return x(a) ? Qd.g(Ah, yh, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = Yh.a ? Yh.a(a) : Yh.call(null, a);
    return x(a) ? cc.c(a, jg.a(J.a ? J.a(Ah) : J.call(null, Ah))) ? Qd.g(Ah, yh, null) : null : null;
  };
  return function(b) {
    return function d() {
      if (Ca(mg.a(J.a ? J.a(Ah) : J.call(null, Ah)))) {
        var e = Qd.c(Ah, function() {
          return function(a) {
            var b;
            b = wg.a(a);
            a = Sc(a) ? Ad(Md, a) : a;
            var d = L(a, cg), e = L(a, rg), m = Ac(d) - 1, n = e + 3 - b, d = Vd.o(d, m, nh, 3);
            b = Dc.k(a, cg, 0 < n ? ph(d, n) : d, wc([rg, Math.min(e + 3, b)], 0));
            return Eh(b);
          };
        }(b));
        if (x(Dh(e))) {
          return Uh(wc(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0)), e = J.a ? J.a(Ah) : J.call(null, Ah), Od.c ? Od.c(Fh, e) : Od.call(null, Fh, e), Xh(a), b();
        }
        if (Lc(dg.a(e))) {
          return Uh(wc(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0)), Qd.o(Ah, Vd, ig, kc), Xh(a), b();
        }
        zh(a);
        return window.requestAnimationFrame(d);
      }
      return b();
    };
  }(function() {
    window.onkeydown = null;
    return window.onkeyup = null;
  }).call(null);
}
ea("figwheel_test.snake.init_everything", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(Lh);
    a.appendChild(Sh);
    return a;
  }());
  a.appendChild(Rh);
  Uh(wc(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return Xh(Th);
});
var Zh = document.createElement("canvas");
Zh.setAttribute("width", 1280);
Zh.setAttribute("height", 960);
Zh.setAttribute("style", "border: 1px solid #000");
Zh.getContext("2d");
var $h = new P(null, 2, 5, Q, [0, 0], null);
O || Ld.call(null, $h);
var ai = document.createElement("button");
ai.textContent = "Pause";
var bi, ci, di = dd(3 * (window.innerWidth - 20), 4);
ci = 1280 < di ? 1280 : di;
var ei = dd(4 * (window.innerHeight - 10), 3);
bi = ci < ei ? ci : ei;
var fi = dd(3 * bi, 4), gi = document.createElement("canvas");
x(bi) && gi.setAttribute("width", bi);
x(fi) && gi.setAttribute("height", fi);
gi.setAttribute("style", "border: 1px solid #000; display: block;");
var hi = document.createElement("div");
gi.getContext("2d");
ea("figwheel_test.common.init_elements", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(ai);
    a.appendChild(hi);
    return a;
  }());
  return a.appendChild(gi);
});
function ii() {
  for (var a = new P(null, 3, 5, Q, [Cf(500) - 250, -215, Cf(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = xd.c(Sd(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (1 * (Math.random.p ? Math.random.p() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), wc([a, ac(a)], 0)), new P(null, 1, 5, Q, [xc(a)], null)), b /= 2, --c;
    } else {
      return ne(a);
    }
  }
}
function ji(a) {
  var b = Ac(a) / 2;
  return Wc(function() {
    return function(a, b) {
      return Dc.g(a, b, -215);
    };
  }(b), a, new pf(null, b - 4, b + 4, 1, null));
}
O || Ld.call(null, 0);
O || Ld.call(null, !1);
var ki = new P(null, 2, 5, Q, [1, 0], null);
O || Ld.call(null, ki);
var li = new v(null, 7, [Qf, R, qg, function() {
  var a = ii(), b = Ac(a) - 1;
  return ne(Jd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), ji(a)));
}(), xg, R, fg, R, pg, 0, Tf, 60, vg, Ec([Vf, Xf, Yf, $f, bg, gg, sg, ug, zg, Ag], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || Ld.call(null, li);
O || Ld.call(null, !1);
O || Ld.call(null, 0);
var mi = new v(null, 3, [eg, R, Sf, null, og, 0], null);
O || Ld.call(null, mi);

})();
