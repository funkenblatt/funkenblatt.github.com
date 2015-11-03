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
var h, aa = this;
function da(a, b) {
  var c = a.split("."), d = aa;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for (var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
  }
}
function v(a) {
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
function ia(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function la(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = la.prototype;
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
if ("undefined" === typeof na) {
  var na = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var pa = null;
if ("undefined" === typeof ra) {
  var ra = null
}
function sa() {
  return new w(null, 5, [ua, !0, va, !0, xa, !1, ya, !1, za, null], null);
}
function z(a) {
  return null != a && !1 !== a;
}
function Aa(a) {
  return a instanceof Array;
}
function Ca(a) {
  return z(a) ? !1 : !0;
}
function B(a, b) {
  return a[v(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function C(a, b) {
  var c = null == b ? null : b.constructor, c = z(z(c) ? c.Jb : c) ? c.Ib : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Ib;
  return z(b) ? b : "" + D(a);
}
var Ea = "undefined" !== typeof Symbol && "function" === v(Symbol) ? Symbol.iterator : "@@iterator";
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
  c = Ka[v(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw C("ICounted.-count", b);
  }
  return c.call(null, b);
}, La = function La(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = La[v(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw C("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.I : b) {
    return b.I(b, c);
  }
  var d;
  d = Ma[v(null == b ? null : b)];
  if (!d && (d = Ma._, !d)) {
    throw C("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, Pa = function Pa() {
  switch(arguments.length) {
    case 2:
      return Pa.a(arguments[0], arguments[1]);
    case 3:
      return Pa.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Pa.a = function(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = Pa[v(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw C("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
Pa.g = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = Pa[v(null == a ? null : a)];
  if (!d && (d = Pa._, !d)) {
    throw C("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
Pa.u = 3;
var Qa = {}, Ra = function Ra(b) {
  if (b ? b.fa : b) {
    return b.fa(b);
  }
  var c;
  c = Ra[v(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw C("ISeq.-first", b);
  }
  return c.call(null, b);
}, Sa = function Sa(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = Sa[v(null == b ? null : b)];
  if (!c && (c = Sa._, !c)) {
    throw C("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ta = {}, Ua = {}, Va = function Va() {
  switch(arguments.length) {
    case 2:
      return Va.a(arguments[0], arguments[1]);
    case 3:
      return Va.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Va.a = function(a, b) {
  if (a ? a.da : a) {
    return a.da(a, b);
  }
  var c;
  c = Va[v(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw C("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Va.g = function(a, b, c) {
  if (a ? a.G : a) {
    return a.G(a, b, c);
  }
  var d;
  d = Va[v(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw C("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Va.u = 3;
var Wa = function Wa(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = Wa[v(null == b ? null : b)];
  if (!e && (e = Wa._, !e)) {
    throw C("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Xa = {}, Ya = function Ya(b, c) {
  if (b ? b.mb : b) {
    return b.mb(b, c);
  }
  var d;
  d = Ya[v(null == b ? null : b)];
  if (!d && (d = Ya._, !d)) {
    throw C("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Za = {}, ab = function ab(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = ab[v(null == b ? null : b)];
  if (!c && (c = ab._, !c)) {
    throw C("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, bb = function bb(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = bb[v(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw C("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, cb = function cb(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = cb[v(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw C("IStack.-pop", b);
  }
  return c.call(null, b);
}, db = {}, eb = function eb(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = eb[v(null == b ? null : b)];
  if (!e && (e = eb._, !e)) {
    throw C("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, fb = function fb(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = fb[v(null == b ? null : b)];
  if (!c && (c = fb._, !c)) {
    throw C("IDeref.-deref", b);
  }
  return c.call(null, b);
}, gb = {}, hb = function hb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = hb[v(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw C("IMeta.-meta", b);
  }
  return c.call(null, b);
}, jb = {}, kb = function kb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = kb[v(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw C("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, lb = {}, mb = function mb() {
  switch(arguments.length) {
    case 2:
      return mb.a(arguments[0], arguments[1]);
    case 3:
      return mb.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
mb.a = function(a, b) {
  if (a ? a.N : a) {
    return a.N(a, b);
  }
  var c;
  c = mb[v(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw C("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
mb.g = function(a, b, c) {
  if (a ? a.O : a) {
    return a.O(a, b, c);
  }
  var d;
  d = mb[v(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw C("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
mb.u = 3;
var nb = function nb(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = nb[v(null == b ? null : b)];
  if (!d && (d = nb._, !d)) {
    throw C("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, ob = function ob(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = ob[v(null == b ? null : b)];
  if (!c && (c = ob._, !c)) {
    throw C("IHash.-hash", b);
  }
  return c.call(null, b);
}, pb = {}, qb = function qb(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = qb[v(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw C("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, rb = {}, sb = function sb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = sb[v(null == b ? null : b)];
  if (!d && (d = sb._, !d)) {
    throw C("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, tb = {}, ub = function ub(b, c, d) {
  if (b ? b.C : b) {
    return b.C(b, c, d);
  }
  var e;
  e = ub[v(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw C("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, wb = function wb(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = wb[v(null == b ? null : b)];
  if (!e && (e = wb._, !e)) {
    throw C("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, xb = function xb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = xb[v(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw C("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, yb = function yb(b, c) {
  if (b ? b.Qa : b) {
    return b.Qa(b, c);
  }
  var d;
  d = yb[v(null == b ? null : b)];
  if (!d && (d = yb._, !d)) {
    throw C("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, zb = function zb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = zb[v(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw C("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = Ab[v(null == b ? null : b)];
  if (!e && (e = Ab._, !e)) {
    throw C("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Bb = function Bb(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = Bb[v(null == b ? null : b)];
  if (!e && (e = Bb._, !e)) {
    throw C("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Cb = function Cb(b) {
  if (b ? b.ob : b) {
    return b.ob();
  }
  var c;
  c = Cb[v(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw C("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Db[v(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw C("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = Eb[v(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw C("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = Fb[v(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw C("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = Gb[v(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw C("INamed.-name", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b) {
  if (b ? b.Pa : b) {
    return b.Pa(b);
  }
  var c;
  c = Hb[v(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw C("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Ib = function Ib(b, c) {
  if (b ? b.Db : b) {
    return b.Db(b, c);
  }
  var d;
  d = Ib[v(null == b ? null : b)];
  if (!d && (d = Ib._, !d)) {
    throw C("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Jb = function Jb() {
  switch(arguments.length) {
    case 2:
      return Jb.a(arguments[0], arguments[1]);
    case 3:
      return Jb.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Jb.n(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Jb.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Jb.a = function(a, b) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b);
  }
  var c;
  c = Jb[v(null == a ? null : a)];
  if (!c && (c = Jb._, !c)) {
    throw C("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Jb.g = function(a, b, c) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c);
  }
  var d;
  d = Jb[v(null == a ? null : a)];
  if (!d && (d = Jb._, !d)) {
    throw C("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Jb.n = function(a, b, c, d) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c, d);
  }
  var e;
  e = Jb[v(null == a ? null : a)];
  if (!e && (e = Jb._, !e)) {
    throw C("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Jb.r = function(a, b, c, d, e) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c, d, e);
  }
  var f;
  f = Jb[v(null == a ? null : a)];
  if (!f && (f = Jb._, !f)) {
    throw C("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Jb.u = 5;
var Kb = function Kb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Kb[v(null == b ? null : b)];
  if (!c && (c = Kb._, !c)) {
    throw C("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Lb(a) {
  this.Mb = a;
  this.i = 1073741824;
  this.t = 0;
}
Lb.prototype.qb = function(a, b) {
  return this.Mb.append(b);
};
function Mb(a) {
  var b = new la;
  a.C(null, new Lb(b), sa());
  return "" + D(b);
}
var Nb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.a ? Math.imul.a(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Pb(a) {
  a = Nb(a | 0, -862048943);
  return Nb(a << 15 | a >>> -15, 461845907);
}
function Qb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Nb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Rb(a, b) {
  var c = (a | 0) ^ b, c = Nb(c ^ c >>> 16, -2048144789), c = Nb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Sb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Qb(c, Pb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Pb(a.charCodeAt(a.length - 1)) : b;
  return Rb(b, Nb(2, a.length));
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
  a && (a.i & 4194304 || a.Pb) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Vb(a), 0 !== a && (a = Pb(a), a = Qb(0, a), a = Rb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : ob(a);
  return a;
}
function Xb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Yb(a, b, c, d, e) {
  this.La = a;
  this.name = b;
  this.ya = c;
  this.Da = d;
  this.ka = e;
  this.i = 2154168321;
  this.t = 4096;
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
        return Va.g(c, this, null);
      case 3:
        return Va.g(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return Va.g(c, this, null);
  };
  a.g = function(a, c, d) {
    return Va.g(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.b = function(a) {
  return Va.g(a, this, null);
};
h.a = function(a, b) {
  return Va.g(a, this, b);
};
h.H = function() {
  return this.ka;
};
h.L = function(a, b) {
  return new Yb(this.La, this.name, this.ya, this.Da, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Xb(Sb(this.name), Vb(this.La));
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.La;
};
h.C = function(a, b) {
  return sb(b, this.ya);
};
function Zb(a) {
  var b = [D("figwheel-test.snake"), D("/"), D(a)].join("");
  return new Yb("figwheel-test.snake", a, b, null, null);
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Qb)) {
    return a.K(null);
  }
  if (Aa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new ac(a, 0);
  }
  if (B(pb, a)) {
    return qb(a);
  }
  throw Error([D(a), D(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.bb)) {
    return a.fa(null);
  }
  a = F(a);
  return null == a ? null : Ra(a);
}
function bc(a) {
  return null != a ? a && (a.i & 64 || a.bb) ? a.la(null) : (a = F(a)) ? Sa(a) : cc : cc;
}
function H(a) {
  return null == a ? null : a && (a.i & 128 || a.ab) ? a.ia(null) : F(bc(a));
}
var dc = function dc() {
  switch(arguments.length) {
    case 1:
      return dc.b(arguments[0]);
    case 2:
      return dc.a(arguments[0], arguments[1]);
    default:
      return dc.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
dc.b = function() {
  return!0;
};
dc.a = function(a, b) {
  return null == a ? null == b : a === b || nb(a, b);
};
dc.j = function(a, b, c) {
  for (;;) {
    if (dc.a(a, b)) {
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return dc.a(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
dc.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return dc.j(b, a, c);
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
  return new ec(F(a));
}
function gc(a, b) {
  var c = Pb(a), c = Qb(0, c);
  return Rb(c, b);
}
function hc(a) {
  var b = 0, c = 1;
  for (a = F(a);;) {
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
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = c + Wb(G(a)) | 0, a = H(a);
    } else {
      return gc(c, b);
    }
  }
}
var kc = gc(0, 0);
Ja["null"] = !0;
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
    return b.p ? b.p() : b.call(null);
  }
  for (var d = Pa.a(a, 0), e = 1;;) {
    if (e < c) {
      var f = Pa.a(a, e), d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function nc(a, b, c) {
  var d = Ka(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = Pa.a(a, c), e = b.a ? b.a(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function oc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.p ? b.p() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.a ? b.a(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function pc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.a ? b.a(e, f) : b.call(null, e, f);
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
      c = b.a ? b.a(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function rc(a) {
  return a ? a.i & 2 || a.tb ? !0 : a.i ? !1 : B(Ja, a) : B(Ja, a);
}
function sc(a, b) {
  this.c = a;
  this.k = b;
}
sc.prototype.gb = function() {
  return this.k < this.c.length;
};
sc.prototype.next = function() {
  var a = this.c[this.k];
  this.k += 1;
  return a;
};
function ac(a, b) {
  this.c = a;
  this.k = b;
  this.i = 166199550;
  this.t = 8192;
}
h = ac.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.F = function(a, b) {
  var c = b + this.k;
  return c < this.c.length ? this.c[c] : null;
};
h.ha = function(a, b, c) {
  a = b + this.k;
  return a < this.c.length ? this.c[a] : c;
};
h.Na = function() {
  return new sc(this.c, this.k);
};
h.ia = function() {
  return this.k + 1 < this.c.length ? new ac(this.c, this.k + 1) : null;
};
h.P = function() {
  return this.c.length - this.k;
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc.a ? tc.a(this, b) : tc.call(null, this, b);
};
h.M = function() {
  return cc;
};
h.N = function(a, b) {
  return qc(this.c, b, this.c[this.k], this.k + 1);
};
h.O = function(a, b, c) {
  return qc(this.c, b, c, this.k);
};
h.fa = function() {
  return this.c[this.k];
};
h.la = function() {
  return this.k + 1 < this.c.length ? new ac(this.c, this.k + 1) : cc;
};
h.K = function() {
  return this;
};
h.I = function(a, b) {
  return uc.a ? uc.a(b, this) : uc.call(null, b, this);
};
ac.prototype[Ea] = function() {
  return fc(this);
};
function wc(a, b) {
  return b < a.length ? new ac(a, b) : null;
}
function xc() {
  switch(arguments.length) {
    case 1:
      return wc(arguments[0], 0);
    case 2:
      return wc(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function yc(a) {
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
      return zc.p();
    case 1:
      return zc.b(arguments[0]);
    case 2:
      return zc.a(arguments[0], arguments[1]);
    default:
      return zc.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
zc.p = function() {
  return Ac;
};
zc.b = function(a) {
  return a;
};
zc.a = function(a, b) {
  return null != a ? Ma(a, b) : Ma(cc, b);
};
zc.j = function(a, b, c) {
  for (;;) {
    if (z(c)) {
      a = zc.a(a, b), b = G(c), c = H(c);
    } else {
      return zc.a(a, b);
    }
  }
};
zc.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return zc.j(b, a, c);
};
zc.u = 2;
function Bc(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.tb)) {
      a = a.P(null);
    } else {
      if (Aa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (B(Ja, a)) {
            a = Ka(a);
          } else {
            a: {
              a = F(a);
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
      return F(a) ? G(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.wb || (d.i ? 0 : B(Na, d)) : B(Na, d)) {
      return Pa.g(a, b, c);
    }
    if (F(a)) {
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
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (B(Na, a)) {
    return Pa.a(a, b);
  }
  if (a ? a.i & 64 || a.bb || (a.i ? 0 : B(Qa, a)) : B(Qa, a)) {
    return Cc(a, b);
  }
  throw Error([D("nth not supported on this type "), D(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.i & 256 || a.xb) ? a.da(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : B(Ua, a) ? Va.a(a, b) : null;
}
function Dc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.xb) ? a.G(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : B(Ua, a) ? Va.g(a, b, c) : c : c;
}
var Ec = function Ec() {
  switch(arguments.length) {
    case 3:
      return Ec.g(arguments[0], arguments[1], arguments[2]);
    default:
      return Ec.j(arguments[0], arguments[1], arguments[2], new ac(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Ec.g = function(a, b, c) {
  return null != a ? Wa(a, b, c) : Fc([b], [c]);
};
Ec.j = function(a, b, c, d) {
  for (;;) {
    if (a = Ec.g(a, b, c), z(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
Ec.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return Ec.j(b, a, c, d);
};
Ec.u = 3;
var Gc = function Gc() {
  switch(arguments.length) {
    case 1:
      return Gc.b(arguments[0]);
    case 2:
      return Gc.a(arguments[0], arguments[1]);
    default:
      return Gc.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Gc.b = function(a) {
  return a;
};
Gc.a = function(a, b) {
  return null == a ? null : Ya(a, b);
};
Gc.j = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Gc.a(a, b);
    if (z(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Gc.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Gc.j(b, a, c);
};
Gc.u = 2;
function Hc(a) {
  var b = "function" == v(a);
  return z(b) ? b : a ? z(z(null) ? null : a.sb) ? !0 : a.Vb ? !1 : B(Ha, a) : B(Ha, a);
}
function Ic(a, b) {
  this.e = a;
  this.h = b;
  this.i = 393217;
  this.t = 0;
}
h = Ic.prototype;
h.H = function() {
  return this.h;
};
h.L = function(a, b) {
  return new Ic(this.e, b);
};
h.sb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z) {
    a = this.e;
    return M.Ma ? M.Ma(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z) : M.call(null, a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z);
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J) {
    a = this;
    return a.e.$ ? a.e.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u);
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
  function u(a, b, c, d, e, f, g) {
    a = this;
    return a.e.J ? a.e.J(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function y(a, b, c, d, e, f) {
    a = this;
    return a.e.r ? a.e.r(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function A(a, b, c, d, e) {
    a = this;
    return a.e.n ? a.e.n(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function E(a, b, c, d) {
    a = this;
    return a.e.g ? a.e.g(b, c, d) : a.e.call(null, b, c, d);
  }
  function J(a, b, c) {
    a = this;
    return a.e.a ? a.e.a(b, c) : a.e.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function oa(a) {
    a = this;
    return a.e.p ? a.e.p() : a.e.call(null);
  }
  var x = null, x = function(Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb, Ob, vc, ud, Oe) {
    switch(arguments.length) {
      case 1:
        return oa.call(this, Fa);
      case 2:
        return Z.call(this, Fa, Y);
      case 3:
        return J.call(this, Fa, Y, ba);
      case 4:
        return E.call(this, Fa, Y, ba, ca);
      case 5:
        return A.call(this, Fa, Y, ba, ca, ea);
      case 6:
        return y.call(this, Fa, Y, ba, ca, ea, ha);
      case 7:
        return u.call(this, Fa, Y, ba, ca, ea, ha, ka);
      case 8:
        return t.call(this, Fa, Y, ba, ca, ea, ha, ka, ma);
      case 9:
        return r.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa);
      case 10:
        return q.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta);
      case 11:
        return p.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa);
      case 12:
        return n.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba);
      case 13:
        return m.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia);
      case 14:
        return l.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa);
      case 15:
        return k.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x);
      case 16:
        return g.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a);
      case 17:
        return f.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib);
      case 18:
        return e.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb);
      case 19:
        return d.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb, Ob);
      case 20:
        return c.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb, Ob, vc);
      case 21:
        return b.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb, Ob, vc, ud);
      case 22:
        return a.call(this, Fa, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, x, $a, ib, vb, Ob, vc, ud, Oe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.b = oa;
  x.a = Z;
  x.g = J;
  x.n = E;
  x.r = A;
  x.J = y;
  x.aa = u;
  x.ba = t;
  x.ca = r;
  x.Q = q;
  x.R = p;
  x.S = n;
  x.T = m;
  x.U = l;
  x.V = k;
  x.W = g;
  x.X = f;
  x.Y = e;
  x.Z = d;
  x.$ = c;
  x.lb = b;
  x.Ma = a;
  return x;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.p = function() {
  return this.e.p ? this.e.p() : this.e.call(null);
};
h.b = function(a) {
  return this.e.b ? this.e.b(a) : this.e.call(null, a);
};
h.a = function(a, b) {
  return this.e.a ? this.e.a(a, b) : this.e.call(null, a, b);
};
h.g = function(a, b, c) {
  return this.e.g ? this.e.g(a, b, c) : this.e.call(null, a, b, c);
};
h.n = function(a, b, c, d) {
  return this.e.n ? this.e.n(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  return this.e.r ? this.e.r(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
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
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E);
};
h.$ = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z) {
  var oa = this.e;
  return M.Ma ? M.Ma(oa, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z) : M.call(null, oa, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z);
};
function Jc(a, b) {
  return Hc(a) && !(a ? a.i & 262144 || a.Tb || (a.i ? 0 : B(jb, a)) : B(jb, a)) ? new Ic(a, b) : null == a ? null : kb(a, b);
}
function Kc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Ab || (a.i ? 0 : B(gb, a)) : B(gb, a) : b) ? hb(a) : null;
}
function Lc(a) {
  return null == a || Ca(F(a));
}
function Mc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.yb ? !0 : a.i ? !1 : B(Xa, a) : B(Xa, a);
}
function Nc(a) {
  return a ? a.i & 16384 || a.Sb ? !0 : a.i ? !1 : B(db, a) : B(db, a);
}
function Oc(a) {
  return a ? a.t & 512 || a.Ob ? !0 : !1 : !1;
}
function Pc(a) {
  var b = [];
  ja(a, function(a, b) {
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
  return null == a ? !1 : a ? a.i & 64 || a.bb ? !0 : a.i ? !1 : B(Qa, a) : B(Qa, a);
}
function Tc(a) {
  return z(a) ? !0 : !1;
}
function Uc(a, b) {
  return Dc(a, b, Rc) === Rc ? !1 : !0;
}
function Vc(a, b) {
  var c = F(b);
  if (c) {
    var d = G(c), c = H(c);
    return Wc ? Wc(a, d, c) : Xc.call(null, a, d, c);
  }
  return a.p ? a.p() : a.call(null);
}
function Yc(a, b, c) {
  for (c = F(c);;) {
    if (c) {
      var d = G(c);
      b = a.a ? a.a(b, d) : a.call(null, b, d);
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
      return b && (b.i & 524288 || b.Cb) ? b.N(null, a) : Aa(b) ? oc(b, a) : "string" === typeof b ? oc(b, a) : B(lb, b) ? mb.a(b, a) : Vc(a, b);
    case 3:
      return Wc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Wc(a, b, c) {
  return c && (c.i & 524288 || c.Cb) ? c.O(null, a, b) : Aa(c) ? pc(c, a, b) : "string" === typeof c ? pc(c, a, b) : B(lb, c) ? mb.g(c, a, b) : Yc(a, b, c);
}
function Zc(a) {
  return a;
}
function $c(a, b, c, d) {
  a = a.b ? a.b(b) : a.call(null, b);
  c = Wc(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
var ad = function ad() {
  switch(arguments.length) {
    case 0:
      return ad.p();
    case 1:
      return ad.b(arguments[0]);
    case 2:
      return ad.a(arguments[0], arguments[1]);
    default:
      return ad.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ad.p = function() {
  return 0;
};
ad.b = function(a) {
  return a;
};
ad.a = function(a, b) {
  return a + b;
};
ad.j = function(a, b, c) {
  return Wc(ad, a + b, c);
};
ad.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ad.j(b, a, c);
};
ad.u = 2;
var bd = function bd() {
  switch(arguments.length) {
    case 1:
      return bd.b(arguments[0]);
    case 2:
      return bd.a(arguments[0], arguments[1]);
    default:
      return bd.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
bd.b = function(a) {
  return-a;
};
bd.a = function(a, b) {
  return a - b;
};
bd.j = function(a, b, c) {
  return Wc(bd, a - b, c);
};
bd.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return bd.j(b, a, c);
};
bd.u = 2;
function cd(a, b) {
  return(a % b + b) % b;
}
function dd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.b ? Math.floor.b(c) : Math.floor.call(null, c) : Math.ceil.b ? Math.ceil.b(c) : Math.ceil.call(null, c);
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
      return D.b(arguments[0]);
    default:
      return D.j(arguments[0], new ac(Array.prototype.slice.call(arguments, 1), 0));
  }
};
D.p = function() {
  return "";
};
D.b = function(a) {
  return null == a ? "" : ia(a);
};
D.j = function(a, b) {
  for (var c = new la("" + D(a)), d = b;;) {
    if (z(d)) {
      c = c.append("" + D(G(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
D.s = function(a) {
  var b = G(a);
  a = H(a);
  return D.j(b, a);
};
D.u = 1;
function tc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Rb || (b.i ? 0 : B(rb, b)) : B(rb, b)) {
    if (rc(a) && rc(b) && Bc(a) !== Bc(b)) {
      c = !1;
    } else {
      a: {
        c = F(a);
        for (var d = F(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && dc.a(G(c), G(d))) {
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
  if (F(a)) {
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
function gd(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.m = e;
  this.i = 65937646;
  this.t = 8192;
}
h = gd.prototype;
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
  return Sa(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return kb(cc, this.h);
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
  return 1 === this.count ? cc : this.wa;
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
gd.prototype[Ea] = function() {
  return fc(this);
};
function hd(a) {
  this.h = a;
  this.i = 65937614;
  this.t = 8192;
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
  return null;
};
h.P = function() {
  return 0;
};
h.Ga = function() {
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
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
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
  return new hd(b);
};
h.I = function(a, b) {
  return new gd(this.h, b, null, 1, null);
};
var cc = new hd(null);
hd.prototype[Ea] = function() {
  return fc(this);
};
var id = function id() {
  return id.j(0 < arguments.length ? new ac(Array.prototype.slice.call(arguments, 0), 0) : null);
};
id.j = function(a) {
  var b;
  if (a instanceof ac && 0 === a.k) {
    b = a.c;
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
id.u = 0;
id.s = function(a) {
  return id.j(F(a));
};
function jd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.m = d;
  this.i = 65929452;
  this.t = 8192;
}
h = jd.prototype;
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
  return null == this.wa ? null : F(this.wa);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
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
  return null == this.wa ? cc : this.wa;
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
jd.prototype[Ea] = function() {
  return fc(this);
};
function uc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.bb)) ? new jd(null, a, b, null) : new jd(null, a, F(b), null);
}
function N(a, b, c, d) {
  this.La = a;
  this.name = b;
  this.va = c;
  this.Da = d;
  this.i = 2153775105;
  this.t = 4096;
}
h = N.prototype;
h.toString = function() {
  return[D(":"), D(this.va)].join("");
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return b instanceof N ? this.va === b.va : !1;
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return L(a, this);
};
h.a = function(a, b) {
  return Dc(a, this, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Xb(Sb(this.name), Vb(this.La)) + 2654435769 | 0;
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.La;
};
h.C = function(a, b) {
  return sb(b, [D(":"), D(this.va)].join(""));
};
var kd = function kd() {
  switch(arguments.length) {
    case 1:
      return kd.b(arguments[0]);
    case 2:
      return kd.a(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
kd.b = function(a) {
  if (a instanceof N) {
    return a;
  }
  if (a instanceof Yb) {
    var b;
    if (a && (a.t & 4096 || a.Bb)) {
      b = a.Pa(null);
    } else {
      throw Error([D("Doesn't support namespace: "), D(a)].join(""));
    }
    return new N(b, ld.b ? ld.b(a) : ld.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new N(b[0], b[1], a, null) : new N(null, b[0], a, null)) : null;
};
kd.a = function(a, b) {
  return new N(a, b, [D(z(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null);
};
kd.u = 2;
function md(a, b, c, d) {
  this.h = a;
  this.Ja = b;
  this.v = c;
  this.m = d;
  this.i = 32374988;
  this.t = 0;
}
h = md.prototype;
h.toString = function() {
  return Mb(this);
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
  qb(this);
  return null == this.v ? null : H(this.v);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  qb(this);
  return null == this.v ? null : G(this.v);
};
h.la = function() {
  qb(this);
  return null != this.v ? bc(this.v) : cc;
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
      return this.v = a, F(this.v);
    }
  }
};
h.L = function(a, b) {
  return new md(b, this.Ja, this.v, this.m);
};
h.I = function(a, b) {
  return uc(b, this);
};
md.prototype[Ea] = function() {
  return fc(this);
};
function od(a, b) {
  this.kb = a;
  this.end = b;
  this.i = 2;
  this.t = 0;
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
  this.c = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.t = 0;
}
h = pd.prototype;
h.P = function() {
  return this.end - this.w;
};
h.F = function(a, b) {
  return this.c[this.w + b];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.c[this.w + b] : c;
};
h.ob = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new pd(this.c, this.w + 1, this.end);
};
h.N = function(a, b) {
  return qc(this.c, b, this.c[this.w], this.w + 1);
};
h.O = function(a, b, c) {
  return qc(this.c, b, c, this.w);
};
function qd(a, b, c, d) {
  this.oa = a;
  this.sa = b;
  this.h = c;
  this.m = d;
  this.i = 31850732;
  this.t = 1536;
}
h = qd.prototype;
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
  if (1 < Ka(this.oa)) {
    return new qd(Cb(this.oa), this.sa, this.h, null);
  }
  var a = qb(this.sa);
  return null == a ? null : a;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
};
h.fa = function() {
  return Pa.a(this.oa, 0);
};
h.la = function() {
  return 1 < Ka(this.oa) ? new qd(Cb(this.oa), this.sa, this.h, null) : null == this.sa ? cc : this.sa;
};
h.K = function() {
  return this;
};
h.Xa = function() {
  return this.oa;
};
h.Ya = function() {
  return null == this.sa ? cc : this.sa;
};
h.L = function(a, b) {
  return new qd(this.oa, this.sa, b, this.m);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Wa = function() {
  return null == this.sa ? null : this.sa;
};
qd.prototype[Ea] = function() {
  return fc(this);
};
function rd(a, b) {
  return 0 === Ka(a) ? b : new qd(a, b, null, null);
}
function sd(a, b) {
  a.add(b);
}
function td(a) {
  for (var b = [];;) {
    if (F(a)) {
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
    if (0 < d && F(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var wd = function wd(b) {
  return null == b ? null : null == H(b) ? F(G(b)) : uc(G(b), wd(H(b)));
}, xd = function xd() {
  switch(arguments.length) {
    case 0:
      return xd.p();
    case 1:
      return xd.b(arguments[0]);
    case 2:
      return xd.a(arguments[0], arguments[1]);
    default:
      return xd.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
xd.p = function() {
  return new md(null, function() {
    return null;
  }, null, null);
};
xd.b = function(a) {
  return new md(null, function() {
    return a;
  }, null, null);
};
xd.a = function(a, b) {
  return new md(null, function() {
    var c = F(a);
    return c ? Oc(c) ? rd(Db(c), xd.a(Eb(c), b)) : uc(G(c), xd.a(bc(c), b)) : b;
  }, null, null);
};
xd.j = function(a, b, c) {
  return function e(a, b) {
    return new md(null, function() {
      var c = F(a);
      return c ? Oc(c) ? rd(Db(c), e(Eb(c), b)) : uc(G(c), e(bc(c), b)) : z(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(xd.a(a, b), c);
};
xd.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return xd.j(b, a, c);
};
xd.u = 2;
var yd = function yd() {
  switch(arguments.length) {
    case 0:
      return yd.p();
    case 1:
      return yd.b(arguments[0]);
    case 2:
      return yd.a(arguments[0], arguments[1]);
    default:
      return yd.j(arguments[0], arguments[1], new ac(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.p = function() {
  return xb(Ac);
};
yd.b = function(a) {
  return a;
};
yd.a = function(a, b) {
  return yb(a, b);
};
yd.j = function(a, b, c) {
  for (;;) {
    if (a = yb(a, b), z(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
yd.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yd.j(b, a, c);
};
yd.u = 2;
function zd(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = Ra(d);
  var e = Sa(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Ra(e), f = Sa(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Ra(f), g = Sa(f);
  if (3 === b) {
    return a.g ? a.g(c, d, e) : a.g ? a.g(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ra(g), k = Sa(g);
  if (4 === b) {
    return a.n ? a.n(c, d, e, f) : a.n ? a.n(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ra(k), l = Sa(k);
  if (5 === b) {
    return a.r ? a.r(c, d, e, f, g) : a.r ? a.r(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Ra(l), m = Sa(l);
  if (6 === b) {
    return a.J ? a.J(c, d, e, f, g, k) : a.J ? a.J(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Ra(m), n = Sa(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Ra(n), p = Sa(n);
  if (8 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Ra(p), q = Sa(p);
  if (9 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Ra(q), r = Sa(q);
  if (10 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p) : a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = Ra(r), t = Sa(r);
  if (11 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q) : a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = Ra(t), u = Sa(t);
  if (12 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r) : a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = Ra(u), y = Sa(u);
  if (13 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var u = Ra(y), A = Sa(y);
  if (14 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  var y = Ra(A), E = Sa(A);
  if (15 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) : a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y);
  }
  var A = Ra(E), J = Sa(E);
  if (16 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) : a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A);
  }
  var E = Ra(J), Z = Sa(J);
  if (17 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) : a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E);
  }
  var J = Ra(Z), oa = Sa(Z);
  if (18 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) : a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J);
  }
  Z = Ra(oa);
  oa = Sa(oa);
  if (19 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z) : a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z);
  }
  var x = Ra(oa);
  Sa(oa);
  if (20 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z, x) : a.$ ? a.$(c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z, x);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var M = function M() {
  switch(arguments.length) {
    case 2:
      return M.a(arguments[0], arguments[1]);
    case 3:
      return M.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return M.n(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return M.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return M.j(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new ac(Array.prototype.slice.call(arguments, 5), 0));
  }
};
M.a = function(a, b) {
  var c = a.u;
  if (a.s) {
    var d = vd(b, c + 1);
    return d <= c ? zd(a, d, b) : a.s(b);
  }
  return a.apply(a, td(b));
};
M.g = function(a, b, c) {
  b = uc(b, c);
  c = a.u;
  if (a.s) {
    var d = vd(b, c + 1);
    return d <= c ? zd(a, d, b) : a.s(b);
  }
  return a.apply(a, td(b));
};
M.n = function(a, b, c, d) {
  b = uc(b, uc(c, d));
  c = a.u;
  return a.s ? (d = vd(b, c + 1), d <= c ? zd(a, d, b) : a.s(b)) : a.apply(a, td(b));
};
M.r = function(a, b, c, d, e) {
  b = uc(b, uc(c, uc(d, e)));
  c = a.u;
  return a.s ? (d = vd(b, c + 1), d <= c ? zd(a, d, b) : a.s(b)) : a.apply(a, td(b));
};
M.j = function(a, b, c, d, e, f) {
  b = uc(b, uc(c, uc(d, uc(e, wd(f)))));
  c = a.u;
  return a.s ? (d = vd(b, c + 1), d <= c ? zd(a, d, b) : a.s(b)) : a.apply(a, td(b));
};
M.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), f = H(f);
  return M.j(b, a, c, d, e, f);
};
M.u = 5;
function Ad(a) {
  return F(a) ? a : null;
}
function Bd(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.b ? a.b(c) : a.call(null, c);
    if (z(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Cd(a, b) {
  for (;;) {
    if (F(b)) {
      var c;
      c = G(b);
      c = a.b ? a.b(c) : a.call(null, c);
      if (z(c)) {
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
function Dd(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.g ? b.g(c, d, e) : b.call(null, c, d, e);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.a ? b.a(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.p ? b.p() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new ac(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = M.r(b, c, e, f, g);
        return a.b ? a.b(c) : a.call(null, c);
      }
      c.u = 3;
      c.s = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = bc(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            q = new ac(r, 0);
          }
          return k.j(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.s = k.s;
    g.p = f;
    g.b = e;
    g.a = d;
    g.g = c;
    g.j = k.j;
    return g;
  }();
}
function Ed(a, b) {
  return function() {
    function c(c, d, e) {
      return a.n ? a.n(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.g ? a.g(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.a ? a.a(b, c) : a.call(null, b, c);
    }
    function f() {
      return a.b ? a.b(b) : a.call(null, b);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new ac(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return M.j(a, b, c, e, f, xc([g], 0));
      }
      c.u = 3;
      c.s = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = bc(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            q = new ac(r, 0);
          }
          return k.j(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.s = k.s;
    g.p = f;
    g.b = e;
    g.a = d;
    g.g = c;
    g.j = k.j;
    return g;
  }();
}
function Fd(a, b) {
  return function d(b, f) {
    return new md(null, function() {
      var g = F(f);
      if (g) {
        if (Oc(g)) {
          for (var k = Db(g), l = Bc(k), m = new od(Array(l), 0), n = 0;;) {
            if (n < l) {
              sd(m, function() {
                var d = b + n, f = Pa.a(k, n);
                return a.a ? a.a(d, f) : a.call(null, d, f);
              }()), n += 1;
            } else {
              break;
            }
          }
          return rd(m.oa(), d(b + l, Eb(g)));
        }
        return uc(function() {
          var d = G(g);
          return a.a ? a.a(b, d) : a.call(null, b, d);
        }(), d(b + 1, bc(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Gd(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Nb = c;
  this.rb = d;
  this.t = 16386;
  this.i = 6455296;
}
h = Gd.prototype;
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
  for (var d = F(this.rb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.F(null, g);
      var k = K(a, 0);
      a = K(a, 1);
      var l = b, m = c;
      a.n ? a.n(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = F(d)) {
        d = a, Oc(d) ? (e = Db(d), d = Eb(d), a = e, f = Bc(e), e = a) : (a = G(d), k = K(a, 0), a = K(a, 1), e = k, f = b, g = c, a.n ? a.n(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
function Hd() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new ac(Array.prototype.slice.call(arguments, 1), 0), c = Sc(b) ? M.a(Id, b) : b, b = L(c, xa), c = L(c, Jd);
      return new Gd(a, b, c, null);
  }
}
function O(a) {
  return new Gd(a, null, null, null);
}
function Kd(a, b) {
  if (a instanceof Gd) {
    var c = a.Nb;
    if (null != c && !z(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(function() {
        var a = id(new Yb(null, "validate", "validate", 1439230700, null), new Yb(null, "new-value", "new-value", -1567397401, null));
        return Ld.b ? Ld.b(a) : Ld.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && wb(a, c, b);
    return b;
  }
  return Ib(a, b);
}
var Md = function Md() {
  switch(arguments.length) {
    case 2:
      return Md.a(arguments[0], arguments[1]);
    case 3:
      return Md.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Md.n(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Md.j(arguments[0], arguments[1], arguments[2], arguments[3], new ac(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Md.a = function(a, b) {
  var c;
  a instanceof Gd ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = Kd(a, c)) : c = Jb.a(a, b);
  return c;
};
Md.g = function(a, b, c) {
  if (a instanceof Gd) {
    var d = a.state;
    b = b.a ? b.a(d, c) : b.call(null, d, c);
    a = Kd(a, b);
  } else {
    a = Jb.g(a, b, c);
  }
  return a;
};
Md.n = function(a, b, c, d) {
  if (a instanceof Gd) {
    var e = a.state;
    b = b.g ? b.g(e, c, d) : b.call(null, e, c, d);
    a = Kd(a, b);
  } else {
    a = Jb.n(a, b, c, d);
  }
  return a;
};
Md.j = function(a, b, c, d, e) {
  return a instanceof Gd ? Kd(a, M.r(b, a.state, c, d, e)) : Jb.r(a, b, c, d, e);
};
Md.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Md.j(b, a, c, d, e);
};
Md.u = 4;
var Nd = function Nd() {
  switch(arguments.length) {
    case 1:
      return Nd.b(arguments[0]);
    case 2:
      return Nd.a(arguments[0], arguments[1]);
    case 3:
      return Nd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Nd.n(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Nd.j(arguments[0], arguments[1], arguments[2], arguments[3], new ac(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Nd.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.a ? b.a(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
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
            f = new ac(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = M.g(a, e, f);
          return b.a ? b.a(c, e) : b.call(null, c, e);
        }
        c.u = 2;
        c.s = function(a) {
          var b = G(a);
          a = H(a);
          var c = G(a);
          a = bc(a);
          return d(b, c, a);
        };
        c.j = d;
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
              n = new ac(p, 0);
            }
            return g.j(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.u = 2;
      f.s = g.s;
      f.p = e;
      f.b = d;
      f.a = c;
      f.j = g.j;
      return f;
    }();
  };
};
Nd.a = function(a, b) {
  return new md(null, function() {
    var c = F(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Db(c), e = Bc(d), f = new od(Array(e), 0), g = 0;;) {
          if (g < e) {
            sd(f, function() {
              var b = Pa.a(d, g);
              return a.b ? a.b(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return rd(f.oa(), Nd.a(a, Eb(c)));
      }
      return uc(function() {
        var b = G(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), Nd.a(a, bc(c)));
    }
    return null;
  }, null, null);
};
Nd.g = function(a, b, c) {
  return new md(null, function() {
    var d = F(b), e = F(c);
    if (d && e) {
      var f = uc, g;
      g = G(d);
      var k = G(e);
      g = a.a ? a.a(g, k) : a.call(null, g, k);
      d = f(g, Nd.g(a, bc(d), bc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Nd.n = function(a, b, c, d) {
  return new md(null, function() {
    var e = F(b), f = F(c), g = F(d);
    if (e && f && g) {
      var k = uc, l;
      l = G(e);
      var m = G(f), n = G(g);
      l = a.g ? a.g(l, m, n) : a.call(null, l, m, n);
      e = k(l, Nd.n(a, bc(e), bc(f), bc(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Nd.j = function(a, b, c, d, e) {
  var f = function k(a) {
    return new md(null, function() {
      var b = Nd.a(F, a);
      return Bd(Zc, b) ? uc(Nd.a(G, b), k(Nd.a(bc, b))) : null;
    }, null, null);
  };
  return Nd.a(function() {
    return function(b) {
      return M.a(a, b);
    };
  }(f), f(zc.j(e, d, xc([c, b], 0))));
};
Nd.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Nd.j(b, a, c, d, e);
};
Nd.u = 4;
function Od(a, b) {
  return M.a(xd, M.g(Nd, a, b));
}
function Pd(a, b) {
  return new md(null, function() {
    var c = F(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Db(c), e = Bc(d), f = new od(Array(e), 0), g = 0;;) {
          if (g < e) {
            var k;
            k = Pa.a(d, g);
            k = a.b ? a.b(k) : a.call(null, k);
            z(k) && (k = Pa.a(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return rd(f.oa(), Pd(a, Eb(c)));
      }
      d = G(c);
      c = bc(c);
      return z(a.b ? a.b(d) : a.call(null, d)) ? uc(d, Pd(a, c)) : Pd(a, c);
    }
    return null;
  }, null, null);
}
var Qd = function Qd() {
  switch(arguments.length) {
    case 2:
      return Qd.a(arguments[0], arguments[1]);
    case 3:
      return Qd.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Qd.a = function(a, b) {
  var c;
  null != a ? a && (a.t & 4 || a.vb) ? (c = Wc(yb, xb(a), b), c = zb(c), c = Jc(c, Kc(a))) : c = Wc(Ma, a, b) : c = Wc(zc, cc, b);
  return c;
};
Qd.g = function(a, b, c) {
  a && (a.t & 4 || a.vb) ? (b = $c(b, yd, xb(a), c), b = zb(b), a = Jc(b, Kc(a))) : a = $c(b, zc, a, c);
  return a;
};
Qd.u = 3;
var Rd = function Rd() {
  switch(arguments.length) {
    case 3:
      return Rd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Rd.n(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Rd.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Rd.J(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Rd.j(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new ac(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Rd.g = function(a, b, c) {
  return Ec.g(a, b, function() {
    var d = L(a, b);
    return c.b ? c.b(d) : c.call(null, d);
  }());
};
Rd.n = function(a, b, c, d) {
  return Ec.g(a, b, function() {
    var e = L(a, b);
    return c.a ? c.a(e, d) : c.call(null, e, d);
  }());
};
Rd.r = function(a, b, c, d, e) {
  return Ec.g(a, b, function() {
    var f = L(a, b);
    return c.g ? c.g(f, d, e) : c.call(null, f, d, e);
  }());
};
Rd.J = function(a, b, c, d, e, f) {
  return Ec.g(a, b, function() {
    var g = L(a, b);
    return c.n ? c.n(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
Rd.j = function(a, b, c, d, e, f, g) {
  return Ec.g(a, b, M.j(c, L(a, b), d, e, f, xc([g], 0)));
};
Rd.s = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), g = H(f), f = G(g), g = H(g);
  return Rd.j(b, a, c, d, e, f, g);
};
Rd.u = 6;
function Sd(a, b) {
  this.l = a;
  this.c = b;
}
function Td(a, b) {
  return new Sd(a, b);
}
function Ud(a) {
  return new Sd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Vd(a) {
  return new Sd(a.l, Ga(a.c));
}
function Wd(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Xd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Ud(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Yd = function Yd(b, c, d, e) {
  var f = Vd(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? Yd(b, c - 5, d, e) : Xd(null, c - 5, e), f.c[g] = b);
  return f;
};
function Zd(a, b) {
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
}
function $d(a, b) {
  if (b >= Wd(a)) {
    return a.o;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function ae(a, b) {
  return 0 <= b && b < a.d ? $d(a, b) : Zd(b, a.d);
}
var be = function be(b, c, d, e, f) {
  var g = Vd(d);
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = be(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
}, ce = function ce(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = ce(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Vd(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Vd(d);
  d.c[e] = null;
  return d;
};
function de(a, b, c, d, e, f) {
  this.k = a;
  this.jb = b;
  this.c = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
de.prototype.gb = function() {
  return this.k < this.end;
};
de.prototype.next = function() {
  32 === this.k - this.jb && (this.c = $d(this.ra, this.k), this.jb += 32);
  var a = this.c[this.k & 31];
  this.k += 1;
  return a;
};
function P(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.o = e;
  this.m = f;
  this.i = 167668511;
  this.t = 8196;
}
h = P.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.da = function(a, b) {
  return Va.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? Pa.g(this, b, c) : c;
};
h.F = function(a, b) {
  return ae(this, b)[b & 31];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? $d(this, b)[b & 31] : c;
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return Wd(this) <= b ? (a = Ga(this.o), a[b & 31] = c, new P(this.h, this.d, this.shift, this.root, a, null)) : new P(this.h, this.d, this.shift, be(this, this.shift, this.root, b, c), this.o, null);
  }
  if (b === this.d) {
    return Ma(this, c);
  }
  throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.d), D("]")].join(""));
};
h.Na = function() {
  var a = this.d;
  return new de(0, 0, 0 < Bc(this) ? $d(this, 0) : null, this, 0, a);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.Za = function() {
  return Pa.a(this, 0);
};
h.$a = function() {
  return Pa.a(this, 1);
};
h.Ga = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return kb(Ac, this.h);
  }
  if (1 < this.d - Wd(this)) {
    return new P(this.h, this.d - 1, this.shift, this.root, this.o.slice(0, -1), null);
  }
  var a = $d(this, this.d - 2), b = ce(this, this.shift, this.root), b = null == b ? Q : b, c = this.d - 1;
  return 5 < this.shift && null == b.c[1] ? new P(this.h, c, this.shift - 5, b.c[0], a, null) : new P(this.h, c, this.shift, b, a, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  if (b instanceof P) {
    if (this.d === Bc(b)) {
      for (var c = Kb(this), d = Kb(b);;) {
        if (z(c.gb())) {
          var e = c.next(), f = d.next();
          if (!dc.a(e, f)) {
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
  return new ee(a.d, a.shift, function() {
    var b = a.root;
    return fe.b ? fe.b(b) : fe.call(null, b);
  }(), function() {
    var b = a.o;
    return ge.b ? ge.b(b) : ge.call(null, b);
  }());
};
h.M = function() {
  return Jc(Ac, this.h);
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = $d(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.a ? b.a(d, g) : b.call(null, d, g), f = f + 1
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
    return new ac(this.o, 0);
  }
  var a;
  a: {
    a = this.root;
    for (var b = this.shift;;) {
      if (0 < b) {
        b -= 5, a = a.c[0];
      } else {
        a = a.c;
        break a;
      }
    }
  }
  return he ? he(this, a, 0, 0) : ie.call(null, this, a, 0, 0);
};
h.L = function(a, b) {
  return new P(b, this.d, this.shift, this.root, this.o, this.m);
};
h.I = function(a, b) {
  if (32 > this.d - Wd(this)) {
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
  d ? (d = Ud(null), d.c[0] = this.root, e = Xd(null, this.shift, new Sd(null, this.o)), d.c[1] = e) : d = Yd(this, this.shift, this.root, new Sd(null, this.o));
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.F(null, a);
};
h.a = function(a, b) {
  return this.ha(null, a, b);
};
var Q = new Sd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ac = new P(null, 0, 5, Q, [], ic);
P.prototype[Ea] = function() {
  return fc(this);
};
function je(a) {
  if (Aa(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new P(null, b, 5, Q, a, null);
      } else {
        for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Fa(null);;) {
          if (c < b) {
            var e = c + 1, d = yd.a(d, a[c]), c = e
          } else {
            a = zb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = zb(Wc(yb, xb(Ac), a));
  }
  return a;
}
function ke(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.k = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.t = 1536;
}
h = ke.prototype;
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
    var b = this.ga, c = this.k, d = this.w + 1;
    a = he ? he(a, b, c, d) : ie.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Fb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(Ac, this.h);
};
h.N = function(a, b) {
  var c;
  c = this.D;
  var d = this.k + this.w, e = Bc(this.D);
  c = le ? le(c, d, e) : me.call(null, c, d, e);
  return mc(c, b);
};
h.O = function(a, b, c) {
  a = this.D;
  var d = this.k + this.w, e = Bc(this.D);
  a = le ? le(a, d, e) : me.call(null, a, d, e);
  return nc(a, b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.k, d = this.w + 1;
    a = he ? he(a, b, c, d) : ie.call(null, a, b, c, d);
    return null == a ? cc : a;
  }
  return Eb(this);
};
h.K = function() {
  return this;
};
h.Xa = function() {
  var a = this.ga;
  return new pd(a, this.w, a.length);
};
h.Ya = function() {
  var a = this.k + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = $d(this.D, a);
    return he ? he(b, c, a, 0) : ie.call(null, b, c, a, 0);
  }
  return cc;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.k, f = this.w;
  return ne ? ne(c, d, e, f, b) : ie.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Wa = function() {
  var a = this.k + this.ga.length;
  if (a < Ka(this.D)) {
    var b = this.D, c = $d(this.D, a);
    return he ? he(b, c, a, 0) : ie.call(null, b, c, a, 0);
  }
  return null;
};
ke.prototype[Ea] = function() {
  return fc(this);
};
function ie() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new ke(a, ae(a, b), b, c, null, null);
    case 4:
      return he(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ne(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function he(a, b, c, d) {
  return new ke(a, b, c, d, null, null);
}
function ne(a, b, c, d, e) {
  return new ke(a, b, c, d, e, null);
}
function oe(a, b, c, d, e) {
  this.h = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.t = 8192;
}
h = oe.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.da = function(a, b) {
  return Va.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? Pa.g(this, b, c) : c;
};
h.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Zd(b, this.end - this.start) : Pa.a(this.ra, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : Pa.g(this.ra, this.start + b, c);
};
h.cb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Ec.g(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return pe.r ? pe.r(a, c, b, d, null) : pe.call(null, a, c, b, d, null);
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
  return pe.r ? pe.r(a, b, c, d, null) : pe.call(null, a, b, c, d, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(Ac, this.h);
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
      return e === a.end ? null : uc(Pa.a(a.ra, e), new md(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.m;
  return pe.r ? pe.r(b, c, d, e, f) : pe.call(null, b, c, d, e, f);
};
h.I = function(a, b) {
  var c = this.h, d = eb(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return pe.r ? pe.r(c, d, e, f, null) : pe.call(null, c, d, e, f, null);
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.F(null, a);
};
h.a = function(a, b) {
  return this.ha(null, a, b);
};
oe.prototype[Ea] = function() {
  return fc(this);
};
function pe(a, b, c, d, e) {
  for (;;) {
    if (b instanceof oe) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = Bc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new oe(a, b, c, d, e);
    }
  }
}
function me() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return le(a, arguments[1], Bc(a));
    case 3:
      return le(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function le(a, b, c) {
  return pe(null, a, b, c, null);
}
function qe(a, b) {
  return a === b.l ? b : new Sd(a, Ga(b.c));
}
function fe(a) {
  return new Sd({}, Ga(a.c));
}
function ge(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qc(a, 0, b, 0, a.length);
  return b;
}
var re = function re(b, c, d, e) {
  d = qe(b.root.l, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? re(b, c - 5, g, e) : Xd(b.root.l, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function ee(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.t = 88;
  this.i = 275;
}
h = ee.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.d - Wd(this)) {
      this.o[this.d & 31] = b;
    } else {
      var c = new Sd(this.root.l, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Xd(this.root.l, this.shift, c);
        this.root = new Sd(this.root.l, d);
        this.shift = e;
      } else {
        this.root = re(this, this.shift, this.root, c);
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
    var a = this.d - Wd(this), b = Array(a);
    Qc(this.o, 0, b, 0, a);
    return new P(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.nb = function(a, b, c) {
  var d = this;
  if (d.root.l) {
    if (0 <= b && b < d.d) {
      return Wd(this) <= b ? d.o[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = qe(d.root.l, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.c[m]);
            l.c[m] = n;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.d) {
      return yb(this, c);
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
    return ae(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? Pa.a(this, b) : c;
};
h.da = function(a, b) {
  return Va.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? Pa.g(this, b, c) : c;
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.da(null, a);
};
h.a = function(a, b) {
  return this.G(null, a, b);
};
function se() {
  this.i = 2097152;
  this.t = 0;
}
se.prototype.equiv = function(a) {
  return this.q(null, a);
};
se.prototype.q = function() {
  return!1;
};
var te = new se;
function ue(a, b) {
  return Tc(Mc(b) ? Bc(a) === Bc(b) ? Bd(Zc, Nd.a(function(a) {
    return dc.a(Dc(b, G(a), te), G(H(a)));
  }, a)) : null : null);
}
function ve(a) {
  this.v = a;
}
ve.prototype.next = function() {
  if (null != this.v) {
    var a = G(this.v), b = K(a, 0), a = K(a, 1);
    this.v = H(this.v);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function we(a) {
  return new ve(F(a));
}
function xe(a, b) {
  var c;
  if (b instanceof N) {
    a: {
      c = a.length;
      for (var d = b.va, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof N && d === f.va) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, z(z(c) ? c : "number" === typeof b)) {
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
              if (dc.a(b, a[d])) {
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
function ye(a, b, c) {
  this.c = a;
  this.k = b;
  this.ka = c;
  this.i = 32374990;
  this.t = 0;
}
h = ye.prototype;
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
  return this.k < this.c.length - 2 ? new ye(this.c, this.k + 2, this.ka) : null;
};
h.P = function() {
  return(this.c.length - this.k) / 2;
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.ka);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return new P(null, 2, 5, Q, [this.c[this.k], this.c[this.k + 1]], null);
};
h.la = function() {
  return this.k < this.c.length - 2 ? new ye(this.c, this.k + 2, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new ye(this.c, this.k, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
ye.prototype[Ea] = function() {
  return fc(this);
};
function ze(a, b, c) {
  this.c = a;
  this.k = b;
  this.d = c;
}
ze.prototype.gb = function() {
  return this.k < this.d;
};
ze.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.c[this.k], this.c[this.k + 1]], null);
  this.k += 2;
  return a;
};
function w(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.c = c;
  this.m = d;
  this.i = 16647951;
  this.t = 8196;
}
h = w.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return fc(Ae.b ? Ae.b(this) : Ae.call(null, this));
};
h.entries = function() {
  return we(F(this));
};
h.values = function() {
  return fc(Be.b ? Be.b(this) : Be.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Oc(b) ? (c = Db(b), b = Eb(b), g = c, d = Bc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Va.g(this, b, null);
};
h.G = function(a, b, c) {
  a = xe(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
h.Na = function() {
  return new ze(this.c, 0, 2 * this.d);
};
h.H = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = jc(this);
};
h.q = function(a, b) {
  if (b && (b.i & 1024 || b.yb)) {
    var c = this.c.length;
    if (this.d === b.P(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.c[d], Rc);
          if (e !== Rc) {
            if (dc.a(this.c[d + 1], e)) {
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
    return ue(this, b);
  }
};
h.Fa = function() {
  return new Ce({}, this.c.length, Ga(this.c));
};
h.M = function() {
  return kb(R, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.mb = function(a, b) {
  if (0 <= xe(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new w(this.h, this.d - 1, d, null);
      }
      dc.a(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ea = function(a, b, c) {
  a = xe(this.c, b);
  if (-1 === a) {
    if (this.d < De) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new w(this.h, this.d + 1, e, null);
    }
    return kb(Wa(Qd.a(Ee, this), b, c), this.h);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ga(this.c);
  b[a + 1] = c;
  return new w(this.h, this.d, b, null);
};
h.K = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new ye(a, 0, null) : null;
};
h.L = function(a, b) {
  return new w(b, this.d, this.c, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Wa(this, Pa.a(b, 0), Pa.a(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
      c = Wa(c, Pa.a(e, 0), Pa.a(e, 1)), d = H(d);
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.da(null, a);
};
h.a = function(a, b) {
  return this.G(null, a, b);
};
var R = new w(null, 0, [], kc), De = 8;
w.prototype[Ea] = function() {
  return fc(this);
};
function Ce(a, b, c) {
  this.Ia = a;
  this.Ka = b;
  this.c = c;
  this.i = 258;
  this.t = 56;
}
h = Ce.prototype;
h.P = function() {
  if (z(this.Ia)) {
    return dd(this.Ka, 2);
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return Va.g(this, b, null);
};
h.G = function(a, b, c) {
  if (z(this.Ia)) {
    return a = xe(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Qa = function(a, b) {
  if (z(this.Ia)) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Za, b)) : B(Za, b)) {
      return Ab(this, Fe.b ? Fe.b(b) : Fe.call(null, b), Ge.b ? Ge.b(b) : Ge.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (z(e)) {
        var f = e, c = H(c), d = Ab(d, function() {
          var a = f;
          return Fe.b ? Fe.b(a) : Fe.call(null, a);
        }(), function() {
          var a = f;
          return Ge.b ? Ge.b(a) : Ge.call(null, a);
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
  if (z(this.Ia)) {
    return this.Ia = !1, new w(null, dd(this.Ka, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  if (z(this.Ia)) {
    a = xe(this.c, b);
    if (-1 === a) {
      if (this.Ka + 2 <= 2 * De) {
        return this.Ka += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Ka;
      var d = this.c;
      a = He.a ? He.a(a, d) : He.call(null, a, d);
      return Ab(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function He(a, b) {
  for (var c = xb(Ee), d = 0;;) {
    if (d < a) {
      c = Ab(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ie() {
  this.ta = !1;
}
function Je(a, b) {
  return a === b ? !0 : a === b || a instanceof N && b instanceof N && a.va === b.va ? !0 : dc.a(a, b);
}
function Ke(a, b, c) {
  a = Ga(a);
  a[b] = c;
  return a;
}
function Le(a, b) {
  var c = Array(a.length - 2);
  Qc(a, 0, c, 0, 2 * b);
  Qc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Me(a, b, c, d) {
  a = a.Ba(b);
  a.c[c] = d;
  return a;
}
function Ne(a, b, c) {
  this.l = a;
  this.A = b;
  this.c = c;
}
h = Ne.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = ed(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qc(this.c, 0, c, 0, 2 * b);
  return new Ne(a, this.A, c);
};
h.Sa = function() {
  var a = this.c;
  return Pe ? Pe(a) : Qe.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = ed(this.A & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : Je(c, e) ? f : d;
};
h.qa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = ed(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = ed(this.A);
    if (2 * l < this.c.length) {
      a = this.Ba(a);
      b = a.c;
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
      k[c >>> b & 31] = Re.qa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.c[e] ? Re.qa(a, b + 5, Wb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Se(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Qc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Qc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ba(a);
    a.c = b;
    a.A |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.qa(a, b + 5, c, d, e, f), l === g ? this : Me(this, a, 2 * k + 1, l);
  }
  if (Je(d, l)) {
    return e === g ? this : Me(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Te ? Te(a, f, l, g, c, d, e) : Ue.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ba(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.pa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = ed(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = ed(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Re.pa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.c[d] ? Re.pa(a + 5, Wb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Se(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Qc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Qc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new Ne(null, this.A | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.pa(a + 5, b, c, d, e), k === f ? this : new Ne(null, this.A, Ke(this.c, 2 * g + 1, k));
  }
  if (Je(c, l)) {
    return d === f ? this : new Ne(null, this.A, Ke(this.c, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  k = this.c;
  a += 5;
  a = Ve ? Ve(a, l, f, b, c, d) : Ue.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Ne(null, e, d);
};
h.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = ed(this.A & d - 1), f = this.c[2 * e], g = this.c[2 * e + 1];
  return null == f ? (a = g.Ta(a + 5, b, c), a === g ? this : null != a ? new Ne(null, this.A, Ke(this.c, 2 * e + 1, a)) : this.A === d ? null : new Ne(null, this.A ^ d, Le(this.c, e))) : Je(c, f) ? new Ne(null, this.A ^ d, Le(this.c, e)) : this;
};
var Re = new Ne(null, 0, []);
function Se(a, b, c) {
  this.l = a;
  this.d = b;
  this.c = c;
}
h = Se.prototype;
h.Ba = function(a) {
  return a === this.l ? this : new Se(a, this.d, Ga(this.c));
};
h.Sa = function() {
  var a = this.c;
  return We ? We(a) : Xe.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
h.qa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = Me(this, a, g, Re.qa(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.qa(a, b + 5, c, d, e, f);
  return b === k ? this : Me(this, a, g, b);
};
h.pa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Se(null, this.d + 1, Ke(this.c, f, Re.pa(a + 5, b, c, d, e)));
  }
  a = g.pa(a + 5, b, c, d, e);
  return a === g ? this : new Se(null, this.d, Ke(this.c, f, a));
};
h.Ta = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.Ta(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.d) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.d - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Ne(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Se(null, this.d - 1, Ke(this.c, d, a));
        }
      } else {
        d = new Se(null, this.d, Ke(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function Ye(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Je(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ze(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.d = c;
  this.c = d;
}
h = Ze.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Qc(this.c, 0, b, 0, 2 * this.d);
  return new Ze(a, this.ua, this.d, b);
};
h.Sa = function() {
  var a = this.c;
  return Pe ? Pe(a) : Qe.call(null, a);
};
h.Ca = function(a, b, c, d) {
  a = Ye(this.c, this.d, c);
  return 0 > a ? d : Je(c, this.c[a]) ? this.c[a + 1] : d;
};
h.qa = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = Ye(this.c, this.d, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ba(a), a.c[b] = d, a.c[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Qc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.l ? (this.c = b, this.d = d, a = this) : a = new Ze(this.l, this.ua, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Me(this, a, b + 1, e);
  }
  return(new Ne(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).qa(a, b, c, d, e, f);
};
h.pa = function(a, b, c, d, e) {
  return b === this.ua ? (a = Ye(this.c, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Qc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new Ze(null, this.ua, this.d + 1, b)) : dc.a(this.c[a], d) ? this : new Ze(null, this.ua, this.d, Ke(this.c, a + 1, d))) : (new Ne(null, 1 << (this.ua >>> a & 31), [null, this])).pa(a, b, c, d, e);
};
h.Ta = function(a, b, c) {
  a = Ye(this.c, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new Ze(null, this.ua, this.d - 1, Le(this.c, dd(a, 2)));
};
function Ue() {
  switch(arguments.length) {
    case 6:
      return Ve(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Te(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Ve(a, b, c, d, e, f) {
  var g = Wb(b);
  if (g === d) {
    return new Ze(null, g, 2, [b, c, e, f]);
  }
  var k = new Ie;
  return Re.pa(a, g, b, c, k).pa(a, d, e, f, k);
}
function Te(a, b, c, d, e, f, g) {
  var k = Wb(c);
  if (k === e) {
    return new Ze(null, k, 2, [c, d, f, g]);
  }
  var l = new Ie;
  return Re.qa(a, b, k, c, d, l).qa(a, b, e, f, g, l);
}
function $e(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.k = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.t = 0;
}
h = $e.prototype;
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
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
};
h.N = function(a, b) {
  return Vc(b, this);
};
h.O = function(a, b, c) {
  return Yc(b, c, this);
};
h.fa = function() {
  return null == this.v ? new P(null, 2, 5, Q, [this.xa[this.k], this.xa[this.k + 1]], null) : G(this.v);
};
h.la = function() {
  if (null == this.v) {
    var a = this.xa, b = this.k + 2;
    return af ? af(a, b, null) : Qe.call(null, a, b, null);
  }
  var a = this.xa, b = this.k, c = H(this.v);
  return af ? af(a, b, c) : Qe.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new $e(b, this.xa, this.k, this.v, this.m);
};
h.I = function(a, b) {
  return uc(b, this);
};
$e.prototype[Ea] = function() {
  return fc(this);
};
function Qe() {
  switch(arguments.length) {
    case 1:
      return Pe(arguments[0]);
    case 3:
      return af(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Pe(a) {
  return af(a, 0, null);
}
function af(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new $e(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (z(d) && (d = d.Sa(), z(d))) {
          return new $e(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new $e(null, a, b, c, null);
  }
}
function bf(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.k = c;
  this.v = d;
  this.m = e;
  this.i = 32374860;
  this.t = 0;
}
h = bf.prototype;
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
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
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
  var a = this.xa, b = this.k, c = H(this.v);
  return cf ? cf(null, a, b, c) : Xe.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new bf(b, this.xa, this.k, this.v, this.m);
};
h.I = function(a, b) {
  return uc(b, this);
};
bf.prototype[Ea] = function() {
  return fc(this);
};
function Xe() {
  switch(arguments.length) {
    case 1:
      return We(arguments[0]);
    case 4:
      return cf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function We(a) {
  return cf(null, a, 0, null);
}
function cf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (z(e) && (e = e.Sa(), z(e))) {
          return new bf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new bf(a, b, c, d, null);
  }
}
function df(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.m = f;
  this.i = 16123663;
  this.t = 8196;
}
h = df.prototype;
h.toString = function() {
  return Mb(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return fc(Ae.b ? Ae.b(this) : Ae.call(null, this));
};
h.entries = function() {
  return we(F(this));
};
h.values = function() {
  return fc(Be.b ? Be.b(this) : Be.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = K(f, 0), f = K(f, 1);
      a.a ? a.a(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Oc(b) ? (c = Db(b), b = Eb(b), g = c, d = Bc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.a ? a.a(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Va.g(this, b, null);
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
  var a = this.m;
  return null != a ? a : this.m = a = jc(this);
};
h.q = function(a, b) {
  return ue(this, b);
};
h.Fa = function() {
  return new ef({}, this.root, this.d, this.ma, this.na);
};
h.M = function() {
  return kb(Ee, this.h);
};
h.mb = function(a, b) {
  if (null == b) {
    return this.ma ? new df(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ta(0, Wb(b), b);
  return c === this.root ? this : new df(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new df(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Ie;
  b = (null == this.root ? Re : this.root).pa(0, Wb(b), b, c, a);
  return b === this.root ? this : new df(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.ma ? uc(new P(null, 2, 5, Q, [null, this.na], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new df(b, this.d, this.root, this.ma, this.na, this.m);
};
h.I = function(a, b) {
  if (Nc(b)) {
    return Wa(this, Pa.a(b, 0), Pa.a(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
      c = Wa(c, Pa.a(e, 0), Pa.a(e, 1)), d = H(d);
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.da(null, a);
};
h.a = function(a, b) {
  return this.G(null, a, b);
};
var Ee = new df(null, 0, null, !1, null, kc);
function Fc(a, b) {
  for (var c = a.length, d = 0, e = xb(Ee);;) {
    if (d < c) {
      var f = d + 1, e = e.Ha(null, a[d], b[d]), d = f
    } else {
      return zb(e);
    }
  }
}
df.prototype[Ea] = function() {
  return fc(this);
};
function ef(a, b, c, d, e) {
  this.l = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.t = 56;
}
function ff(a, b) {
  if (a.l) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Za, b)) : B(Za, b)) {
      return gf(a, Fe.b ? Fe.b(b) : Fe.call(null, b), Ge.b ? Ge.b(b) : Ge.call(null, b));
    }
    for (var c = F(b), d = a;;) {
      var e = G(c);
      if (z(e)) {
        var f = e, c = H(c), d = gf(d, function() {
          var a = f;
          return Fe.b ? Fe.b(a) : Fe.call(null, a);
        }(), function() {
          var a = f;
          return Ge.b ? Ge.b(a) : Ge.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function gf(a, b, c) {
  if (a.l) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Ie;
      b = (null == a.root ? Re : a.root).qa(a.l, 0, Wb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = ef.prototype;
h.P = function() {
  if (this.l) {
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
h.Qa = function(a, b) {
  return ff(this, b);
};
h.Ra = function() {
  var a;
  if (this.l) {
    this.l = null, a = new df(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ha = function(a, b, c) {
  return gf(this, b, c);
};
var Id = function Id() {
  return Id.j(0 < arguments.length ? new ac(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Id.j = function(a) {
  for (var b = F(a), c = xb(Ee);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = Ab(c, d, b), b = a;
    } else {
      return zb(c);
    }
  }
};
Id.u = 0;
Id.s = function(a) {
  return Id.j(F(a));
};
function hf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.t = 0;
}
h = hf.prototype;
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ta, a)) : B(Ta, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new hf(a, this.ka);
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.ka);
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ta, a)) : B(Ta, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new hf(a, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new hf(this.ja, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
hf.prototype[Ea] = function() {
  return fc(this);
};
function Ae(a) {
  return(a = F(a)) ? new hf(a, null) : null;
}
function Fe(a) {
  return ab(a);
}
function jf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.t = 0;
}
h = jf.prototype;
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ta, a)) : B(Ta, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new jf(a, this.ka);
};
h.B = function() {
  return hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.ka);
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
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ta, a)) : B(Ta, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new jf(a, this.ka) : cc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new jf(this.ja, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
jf.prototype[Ea] = function() {
  return fc(this);
};
function Be(a) {
  return(a = F(a)) ? new jf(a, null) : null;
}
function Ge(a) {
  return bb(a);
}
function ld(a) {
  if (a && (a.t & 4096 || a.Bb)) {
    return a.Oa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function kf(a, b, c) {
  this.k = a;
  this.end = b;
  this.step = c;
}
kf.prototype.gb = function() {
  return 0 < this.step ? this.k < this.end : this.k > this.end;
};
kf.prototype.next = function() {
  var a = this.k;
  this.k += this.step;
  return a;
};
function lf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.t = 8192;
}
h = lf.prototype;
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
h.Na = function() {
  return new kf(this.start, this.end, this.step);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new lf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new lf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.P = function() {
  if (Ca(qb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = hc(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
};
h.N = function(a, b) {
  return mc(this, b);
};
h.O = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.a ? b.a(c, d) : b.call(null, c, d);
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
  return null != qb(this) ? new lf(this.h, this.start + this.step, this.end, this.step, null) : cc;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new lf(b, this.start, this.end, this.step, this.m);
};
h.I = function(a, b) {
  return uc(b, this);
};
lf.prototype[Ea] = function() {
  return fc(this);
};
function mf() {
  var a = S, b = T;
  return function() {
    function c(c, d, e) {
      return new P(null, 2, 5, Q, [a.g ? a.g(c, d, e) : a.call(null, c, d, e), b.g ? b.g(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new P(null, 2, 5, Q, [a.a ? a.a(c, d) : a.call(null, c, d), b.a ? b.a(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new P(null, 2, 5, Q, [a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], null);
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
          g = new ac(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new P(null, 2, 5, Q, [M.r(a, c, e, f, g), M.r(b, c, e, f, g)], null);
      }
      c.u = 3;
      c.s = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = bc(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            q = new ac(r, 0);
          }
          return k.j(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.u = 3;
    g.s = k.s;
    g.p = f;
    g.b = e;
    g.a = d;
    g.g = c;
    g.j = k.j;
    return g;
  }();
}
function nf(a, b, c, d, e, f, g) {
  var k = pa;
  pa = null == pa ? null : pa - 1;
  try {
    if (null != pa && 0 > pa) {
      return sb(a, "#");
    }
    sb(a, c);
    if (0 === za.b(f)) {
      F(g) && sb(a, function() {
        var a = of.b(f);
        return z(a) ? a : "...";
      }());
    } else {
      if (F(g)) {
        var l = G(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(g), n = za.b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          F(m) && 0 === n && (sb(a, d), sb(a, function() {
            var a = of.b(f);
            return z(a) ? a : "...";
          }()));
          break;
        } else {
          sb(a, d);
          var p = G(m);
          c = a;
          g = f;
          b.g ? b.g(p, c, g) : b.call(null, p, c, g);
          var q = H(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return sb(a, e);
  } finally {
    pa = k;
  }
}
function pf(a, b) {
  for (var c = F(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f);
      sb(a, g);
      f += 1;
    } else {
      if (c = F(c)) {
        d = c, Oc(d) ? (c = Db(d), e = Eb(d), d = c, g = Bc(c), c = e, e = g) : (g = G(d), sb(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var qf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function rf(a) {
  return[D('"'), D(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return qf[a];
  })), D('"')].join("");
}
function sf(a, b, c) {
  if (null == a) {
    return sb(b, "nil");
  }
  if (void 0 === a) {
    return sb(b, "#\x3cundefined\x3e");
  }
  if (z(function() {
    var b = L(c, xa);
    return z(b) ? (b = a ? a.i & 131072 || a.Ab ? !0 : a.i ? !1 : B(gb, a) : B(gb, a)) ? Kc(a) : b : b;
  }())) {
    sb(b, "^");
    var d = Kc(a);
    tf.g ? tf.g(d, b, c) : tf.call(null, d, b, c);
    sb(b, " ");
  }
  return null == a ? sb(b, "nil") : a.Jb ? a.Ub(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.C(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? sb(b, "" + D(a)) : null != a && a.constructor === Object ? (sb(b, "#js "), d = Nd.a(function(b) {
    return new P(null, 2, 5, Q, [kd.b(b), a[b]], null);
  }, Pc(a)), uf.n ? uf.n(d, tf, b, c) : uf.call(null, d, tf, b, c)) : Aa(a) ? nf(b, tf, "#js [", " ", "]", c, a) : z("string" == typeof a) ? z(va.b(c)) ? sb(b, rf(a)) : sb(b, a) : Hc(a) ? pf(b, xc(["#\x3c", "" + D(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + D(a);;) {
      if (Bc(c) < b) {
        c = [D("0"), D(c)].join("");
      } else {
        return c;
      }
    }
  }, pf(b, xc(['#inst "', "" + D(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : z(a instanceof RegExp) ? pf(b, xc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : B(tb, a)) : B(tb, a)) ? ub(a, b, c) : pf(b, xc(["#\x3c", "" + D(a), "\x3e"], 0));
}
function tf(a, b, c) {
  var d = vf.b(c);
  return z(d) ? (c = Ec.g(c, wf, sf), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : sf(a, b, c);
}
function Ld() {
  var a = 0 < arguments.length ? new ac(Array.prototype.slice.call(arguments, 0), 0) : null, b = sa(), c;
  if (Lc(a)) {
    c = "";
  } else {
    c = D;
    var d = b, b = new la;
    a: {
      var e = a, a = new Lb(b);
      tf(G(e), a, d);
      for (var e = F(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.F(null, k);
          sb(a, " ");
          tf(l, a, d);
          k += 1;
        } else {
          if (e = F(e)) {
            f = e, Oc(f) ? (e = Db(f), g = Eb(f), f = e, l = Bc(e), e = g, g = l) : (l = G(f), sb(a, " "), tf(l, a, d), e = H(f), f = null, g = 0), k = 0;
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
function uf(a, b, c, d) {
  return nf(c, function(a, c, d) {
    var k = ab(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    sb(c, " ");
    a = bb(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, F(a));
}
ac.prototype.ea = !0;
ac.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
md.prototype.ea = !0;
md.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
$e.prototype.ea = !0;
$e.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
ye.prototype.ea = !0;
ye.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
ke.prototype.ea = !0;
ke.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
jd.prototype.ea = !0;
jd.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
df.prototype.ea = !0;
df.prototype.C = function(a, b, c) {
  return uf(this, tf, b, c);
};
bf.prototype.ea = !0;
bf.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
oe.prototype.ea = !0;
oe.prototype.C = function(a, b, c) {
  return nf(b, tf, "[", " ", "]", c, this);
};
qd.prototype.ea = !0;
qd.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
Gd.prototype.ea = !0;
Gd.prototype.C = function(a, b, c) {
  sb(b, "#\x3cAtom: ");
  tf(this.state, b, c);
  return sb(b, "\x3e");
};
jf.prototype.ea = !0;
jf.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
P.prototype.ea = !0;
P.prototype.C = function(a, b, c) {
  return nf(b, tf, "[", " ", "]", c, this);
};
hd.prototype.ea = !0;
hd.prototype.C = function(a, b) {
  return sb(b, "()");
};
w.prototype.ea = !0;
w.prototype.C = function(a, b, c) {
  return uf(this, tf, b, c);
};
lf.prototype.ea = !0;
lf.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
hf.prototype.ea = !0;
hf.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
gd.prototype.ea = !0;
gd.prototype.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
function xf(a, b) {
  return Wc(function(b, d) {
    return a.b ? a.b(d) : a.call(null, d);
  }, null, b);
}
function yf(a) {
  a *= Math.random.p ? Math.random.p() : Math.random.call(null);
  return Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a);
}
var zf = null;
function Af() {
  if (null == zf) {
    var a = new w(null, 3, [Bf, R, Cf, R, Df, R], null);
    zf = O ? O(a) : Hd.call(null, a);
  }
  return zf;
}
function Ef(a, b, c) {
  var d = dc.a(b, c);
  if (!d && !(d = Uc(Df.b(a).call(null, b), c)) && (d = Nc(c)) && (d = Nc(b))) {
    if (d = Bc(c) === Bc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Bc(c)) {
          e = Ef(a, function() {
            var a = f;
            return b.b ? b.b(a) : b.call(null, a);
          }(), function() {
            var a = f;
            return c.b ? c.b(a) : c.call(null, a);
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
function Ff(a) {
  var b;
  b = Af();
  b = I.b ? I.b(b) : I.call(null, b);
  return Ad(L(Bf.b(b), a));
}
function Gf(a, b, c, d) {
  Md.a(a, function() {
    return I.b ? I.b(b) : I.call(null, b);
  });
  Md.a(c, function() {
    return I.b ? I.b(d) : I.call(null, d);
  });
}
var Hf = function Hf(b, c, d) {
  var e = (I.b ? I.b(d) : I.call(null, d)).call(null, b), e = z(z(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (z(e)) {
    return e;
  }
  e = function() {
    for (var e = Ff(c);;) {
      if (0 < Bc(e)) {
        Hf(b, G(e), d), e = bc(e);
      } else {
        return null;
      }
    }
  }();
  if (z(e)) {
    return e;
  }
  e = function() {
    for (var e = Ff(b);;) {
      if (0 < Bc(e)) {
        Hf(G(e), c, d), e = bc(e);
      } else {
        return null;
      }
    }
  }();
  return z(e) ? e : !1;
};
function If(a, b, c) {
  c = Hf(a, b, c);
  if (z(c)) {
    a = c;
  } else {
    c = Ef;
    var d;
    d = Af();
    d = I.b ? I.b(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Jf = function Jf(b, c, d, e, f, g, k) {
  var l = Wc(function(e, g) {
    var k = K(g, 0);
    K(g, 1);
    if (Ef(I.b ? I.b(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : If(k, G(e), f);
      l = z(l) ? g : e;
      if (!z(If(G(l), k, f))) {
        throw Error([D("Multiple methods in multimethod '"), D(b), D("' match dispatch value: "), D(c), D(" -\x3e "), D(k), D(" and "), D(G(l)), D(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.b ? I.b(e) : I.call(null, e));
  if (z(l)) {
    if (dc.a(I.b ? I.b(k) : I.call(null, k), I.b ? I.b(d) : I.call(null, d))) {
      return Md.n(g, Ec, c, G(H(l))), G(H(l));
    }
    Gf(g, e, k, d);
    return Jf(b, c, d, e, f, g, k);
  }
  return null;
};
function U(a, b) {
  throw Error([D("No method in multimethod '"), D(a), D("' for dispatch value: "), D(b)].join(""));
}
function Kf(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.f = b;
  this.Kb = c;
  this.hb = d;
  this.Ua = e;
  this.Lb = f;
  this.ib = g;
  this.Va = k;
  this.i = 4194305;
  this.t = 4352;
}
h = Kf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z) {
    a = this;
    var oa = M.j(a.f, b, c, d, e, xc([f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z], 0)), Ag = V(this, oa);
    z(Ag) || U(a.name, oa);
    return M.j(Ag, b, c, d, e, xc([f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J, Z], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J) {
    a = this;
    var Z = a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J), oa = V(this, Z);
    z(oa) || U(a.name, Z);
    return oa.$ ? oa.$(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J) : oa.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E, J);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E) {
    a = this;
    var J = a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E), Z = V(this, J);
    z(Z) || U(a.name, J);
    return Z.Z ? Z.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E) : Z.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x, E);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x) {
    a = this;
    var E = a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x), J = V(this, E);
    z(J) || U(a.name, E);
    return J.Y ? J.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x) : J.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y, x);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y) {
    a = this;
    var x = a.f.X ? a.f.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y), E = V(this, x);
    z(E) || U(a.name, x);
    return E.X ? E.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y) : E.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A, y);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A) {
    a = this;
    var y = a.f.W ? a.f.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A), x = V(this, y);
    z(x) || U(a.name, y);
    return x.W ? x.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A) : x.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, A);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) {
    a = this;
    var A = a.f.V ? a.f.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u), y = V(this, A);
    z(y) || U(a.name, A);
    return y.V ? y.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) : y.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t) {
    a = this;
    var u = a.f.U ? a.f.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t), A = V(this, u);
    z(A) || U(a.name, u);
    return A.U ? A.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : A.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, n, m, p, q, r) {
    a = this;
    var t = a.f.T ? a.f.T(b, c, d, e, f, g, k, l, n, m, p, q, r) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r), u = V(this, t);
    z(u) || U(a.name, t);
    return u.T ? u.T(b, c, d, e, f, g, k, l, n, m, p, q, r) : u.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, n, m, p, q) {
    a = this;
    var r = a.f.S ? a.f.S(b, c, d, e, f, g, k, l, n, m, p, q) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q), t = V(this, r);
    z(t) || U(a.name, r);
    return t.S ? t.S(b, c, d, e, f, g, k, l, n, m, p, q) : t.call(null, b, c, d, e, f, g, k, l, n, m, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, n, m, p) {
    a = this;
    var q = a.f.R ? a.f.R(b, c, d, e, f, g, k, l, n, m, p) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p), r = V(this, q);
    z(r) || U(a.name, q);
    return r.R ? r.R(b, c, d, e, f, g, k, l, n, m, p) : r.call(null, b, c, d, e, f, g, k, l, n, m, p);
  }
  function p(a, b, c, d, e, f, g, k, l, n, m) {
    a = this;
    var p = a.f.Q ? a.f.Q(b, c, d, e, f, g, k, l, n, m) : a.f.call(null, b, c, d, e, f, g, k, l, n, m), q = V(this, p);
    z(q) || U(a.name, p);
    return q.Q ? q.Q(b, c, d, e, f, g, k, l, n, m) : q.call(null, b, c, d, e, f, g, k, l, n, m);
  }
  function q(a, b, c, d, e, f, g, k, l, n) {
    a = this;
    var m = a.f.ca ? a.f.ca(b, c, d, e, f, g, k, l, n) : a.f.call(null, b, c, d, e, f, g, k, l, n), p = V(this, m);
    z(p) || U(a.name, m);
    return p.ca ? p.ca(b, c, d, e, f, g, k, l, n) : p.call(null, b, c, d, e, f, g, k, l, n);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var n = a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l), m = V(this, n);
    z(m) || U(a.name, n);
    return m.ba ? m.ba(b, c, d, e, f, g, k, l) : m.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.f.aa ? a.f.aa(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k), n = V(this, l);
    z(n) || U(a.name, l);
    return n.aa ? n.aa(b, c, d, e, f, g, k) : n.call(null, b, c, d, e, f, g, k);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var k = a.f.J ? a.f.J(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g), l = V(this, k);
    z(l) || U(a.name, k);
    return l.J ? l.J(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function y(a, b, c, d, e, f) {
    a = this;
    var g = a.f.r ? a.f.r(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = V(this, g);
    z(k) || U(a.name, g);
    return k.r ? k.r(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function A(a, b, c, d, e) {
    a = this;
    var f = a.f.n ? a.f.n(b, c, d, e) : a.f.call(null, b, c, d, e), g = V(this, f);
    z(g) || U(a.name, f);
    return g.n ? g.n(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function E(a, b, c, d) {
    a = this;
    var e = a.f.g ? a.f.g(b, c, d) : a.f.call(null, b, c, d), f = V(this, e);
    z(f) || U(a.name, e);
    return f.g ? f.g(b, c, d) : f.call(null, b, c, d);
  }
  function J(a, b, c) {
    a = this;
    var d = a.f.a ? a.f.a(b, c) : a.f.call(null, b, c), e = V(this, d);
    z(e) || U(a.name, d);
    return e.a ? e.a(b, c) : e.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    var c = a.f.b ? a.f.b(b) : a.f.call(null, b), d = V(this, c);
    z(d) || U(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function oa(a) {
    a = this;
    var b = a.f.p ? a.f.p() : a.f.call(null), c = V(this, b);
    z(c) || U(a.name, b);
    return c.p ? c.p() : c.call(null);
  }
  var x = null, x = function(x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb, Ob, vc, ud, Oe) {
    switch(arguments.length) {
      case 1:
        return oa.call(this, x);
      case 2:
        return Z.call(this, x, Y);
      case 3:
        return J.call(this, x, Y, ba);
      case 4:
        return E.call(this, x, Y, ba, ca);
      case 5:
        return A.call(this, x, Y, ba, ca, ea);
      case 6:
        return y.call(this, x, Y, ba, ca, ea, ha);
      case 7:
        return u.call(this, x, Y, ba, ca, ea, ha, ka);
      case 8:
        return t.call(this, x, Y, ba, ca, ea, ha, ka, ma);
      case 9:
        return r.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa);
      case 10:
        return q.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta);
      case 11:
        return p.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa);
      case 12:
        return n.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba);
      case 13:
        return m.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia);
      case 14:
        return l.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa);
      case 15:
        return k.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b);
      case 16:
        return g.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a);
      case 17:
        return f.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib);
      case 18:
        return e.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb);
      case 19:
        return d.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb, Ob);
      case 20:
        return c.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb, Ob, vc);
      case 21:
        return b.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb, Ob, vc, ud);
      case 22:
        return a.call(this, x, Y, ba, ca, ea, ha, ka, ma, qa, ta, wa, Ba, Ia, Oa, $b, $a, ib, vb, Ob, vc, ud, Oe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.b = oa;
  x.a = Z;
  x.g = J;
  x.n = E;
  x.r = A;
  x.J = y;
  x.aa = u;
  x.ba = t;
  x.ca = r;
  x.Q = q;
  x.R = p;
  x.S = n;
  x.T = m;
  x.U = l;
  x.V = k;
  x.W = g;
  x.X = f;
  x.Y = e;
  x.Z = d;
  x.$ = c;
  x.lb = b;
  x.Ma = a;
  return x;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.p = function() {
  var a = this.f.p ? this.f.p() : this.f.call(null), b = V(this, a);
  z(b) || U(this.name, a);
  return b.p ? b.p() : b.call(null);
};
h.b = function(a) {
  var b = this.f.b ? this.f.b(a) : this.f.call(null, a), c = V(this, b);
  z(c) || U(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
h.a = function(a, b) {
  var c = this.f.a ? this.f.a(a, b) : this.f.call(null, a, b), d = V(this, c);
  z(d) || U(this.name, c);
  return d.a ? d.a(a, b) : d.call(null, a, b);
};
h.g = function(a, b, c) {
  var d = this.f.g ? this.f.g(a, b, c) : this.f.call(null, a, b, c), e = V(this, d);
  z(e) || U(this.name, d);
  return e.g ? e.g(a, b, c) : e.call(null, a, b, c);
};
h.n = function(a, b, c, d) {
  var e = this.f.n ? this.f.n(a, b, c, d) : this.f.call(null, a, b, c, d), f = V(this, e);
  z(f) || U(this.name, e);
  return f.n ? f.n(a, b, c, d) : f.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  var f = this.f.r ? this.f.r(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), g = V(this, f);
  z(g) || U(this.name, f);
  return g.r ? g.r(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.J = function(a, b, c, d, e, f) {
  var g = this.f.J ? this.f.J(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = V(this, g);
  z(k) || U(this.name, g);
  return k.J ? k.J(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  var k = this.f.aa ? this.f.aa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g), l = V(this, k);
  z(l) || U(this.name, k);
  return l.aa ? l.aa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ba = function(a, b, c, d, e, f, g, k) {
  var l = this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k), m = V(this, l);
  z(m) || U(this.name, l);
  return m.ba ? m.ba(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.ca = function(a, b, c, d, e, f, g, k, l) {
  var m = this.f.ca ? this.f.ca(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l), n = V(this, m);
  z(n) || U(this.name, m);
  return n.ca ? n.ca(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.f.Q ? this.f.Q(a, b, c, d, e, f, g, k, l, m) : this.f.call(null, a, b, c, d, e, f, g, k, l, m), p = V(this, n);
  z(p) || U(this.name, n);
  return p.Q ? p.Q(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.f.R ? this.f.R(a, b, c, d, e, f, g, k, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n), q = V(this, p);
  z(q) || U(this.name, p);
  return q.R ? q.R(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.S = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.f.S ? this.f.S(a, b, c, d, e, f, g, k, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = V(this, q);
  z(r) || U(this.name, q);
  return r.S ? r.S(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.T = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.f.T ? this.f.T(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = V(this, r);
  z(t) || U(this.name, r);
  return t.T ? t.T(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.U = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.f.U ? this.f.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), u = V(this, t);
  z(u) || U(this.name, t);
  return u.U ? u.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.V = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var u = this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), y = V(this, u);
  z(y) || U(this.name, u);
  return y.V ? y.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : y.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  var y = this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), A = V(this, y);
  z(A) || U(this.name, y);
  return A.W ? A.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : A.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) {
  var A = this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y), E = V(this, A);
  z(E) || U(this.name, A);
  return E.X ? E.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y) : E.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) {
  var E = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A), J = V(this, E);
  z(J) || U(this.name, E);
  return J.Y ? J.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A) : J.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) {
  var J = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E), Z = V(this, J);
  z(Z) || U(this.name, J);
  return Z.Z ? Z.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E) : Z.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E);
};
h.$ = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) {
  var Z = this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J), oa = V(this, Z);
  z(oa) || U(this.name, Z);
  return oa.$ ? oa.$(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J) : oa.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z) {
  var oa = M.j(this.f, a, b, c, d, xc([e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z], 0)), x = V(this, oa);
  z(x) || U(this.name, oa);
  return M.j(x, a, b, c, d, xc([e, f, g, k, l, m, n, p, q, r, t, u, y, A, E, J, Z], 0));
};
function Lf(a, b, c) {
  Md.n(a.Ua, Ec, b, c);
  Gf(a.ib, a.Ua, a.Va, a.hb);
}
function V(a, b) {
  dc.a(function() {
    var b = a.Va;
    return I.b ? I.b(b) : I.call(null, b);
  }(), function() {
    var b = a.hb;
    return I.b ? I.b(b) : I.call(null, b);
  }()) || Gf(a.ib, a.Ua, a.Va, a.hb);
  var c = function() {
    var b = a.ib;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, b);
  if (z(c)) {
    return c;
  }
  c = Jf(a.name, b, a.hb, a.Ua, a.Lb, a.ib, a.Va);
  return z(c) ? c : function() {
    var b = a.Ua;
    return I.b ? I.b(b) : I.call(null, b);
  }().call(null, a.Kb);
}
h.Oa = function() {
  return Gb(this.name);
};
h.Pa = function() {
  return Hb(this.name);
};
h.B = function() {
  return this[fa] || (this[fa] = ++ga);
};
var Mf = new N(null, "bullets", "bullets", 1734809024), T = new N(null, "p2", "p2", 905500641), Nf = new N(null, "r", "r", -471384190), xa = new N(null, "meta", "meta", 1499536964), Of = new N(null, "enemy-spawn", "enemy-spawn", 1471569540), ya = new N(null, "dup", "dup", 556298533), Pf = new N(null, "dir", "dir", 1734754661), Qf = new N(null, "ammo", "ammo", -1520726489), Jd = new N(null, "validator", "validator", -1966190681), Rf = new N(null, "default", "default", -1987822328), Sf = new N(null, 
"w", "w", 354169001), Tf = new N(null, "th", "th", -545608566), Uf = new N(null, "th1", "th1", 583362347), Vf = new N(null, "pos", "pos", -864607220), W = new N(null, "type", "type", 1174270348), Wf = new N(null, "th2", "th2", 1996173036), Xf = new N(null, "cooldown", "cooldown", -1178127572), wf = new N(null, "fallback-impl", "fallback-impl", -1501286995), ua = new N(null, "flush-on-newline", "flush-on-newline", -151457939), Yf = new N(null, "segments", "segments", 1937535949), S = new N(null, "p1", 
"p1", -936759954), Zf = new N(null, "targets", "targets", 2014963406), $f = new N(null, "walls", "walls", -268788818), ag = new N(null, "chunks", "chunks", 83720431), Cf = new N(null, "descendants", "descendants", 1824886031), bg = new N(null, "k", "k", -2146297393), cg = new N("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Df = new N(null, "ancestors", "ancestors", -776045424), dg = new N(null, "level", "level", 1290497552), eg = new N(null, "turn", "turn", 75759344), va = 
new N(null, "readably", "readably", 1129599760), of = new N(null, "more-marker", "more-marker", -14717935), fg = new N(null, "head", "head", -771383919), gg = new N(null, "c", "c", -1763192079), hg = new N(null, "stop", "stop", -2140911342), za = new N(null, "print-length", "print-length", 1931866356), ig = new N(null, "tail", "tail", -1146023564), jg = new N(null, "score", "score", -1963588780), kg = new N(null, "terrain", "terrain", 704966005), Bf = new N(null, "parents", "parents", -2027538891), 
lg = new N(null, "length", "length", 588987862), mg = new N(null, "b", "b", 1482224470), ng = new N(null, "right", "right", -452581833), og = new N(null, "health", "health", -295520649), pg = new N(null, "player", "player", -97687400), qg = new N(null, "target-length", "target-length", 208661657), rg = new N(null, "enemies", "enemies", 2114285722), sg = new N(null, "hierarchy", "hierarchy", -1053470341), vf = new N(null, "alt-impl", "alt-impl", 670969595), tg = new N(null, "barrel-change", "barrel-change", 
-347000069), ug = new N(null, "temperature", "temperature", 899018429), X = new N("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), vg = new N(null, "left", "left", -399115937);
var wg = function wg(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = wg[v(null == b ? null : b)];
  if (!e && (e = wg._, !e)) {
    throw C("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function xg(a) {
  return 33 !== a.c.length;
}
function yg(a) {
  a = a.c[32];
  return a[a[32] - 1];
}
function zg(a, b, c) {
  for (;;) {
    if (z(xg(a))) {
      return c >> 5 > 1 << b;
    }
    var d = a.c[32];
    c = d[32];
    var e = 32 === c;
    if (e) {
      if (e = 5 === b) {
        return e;
      }
      b -= 5;
      d = d[31] - d[30] + 32;
      a = a.c[c - 1];
      c = d;
    } else {
      return e;
    }
  }
}
;function Bg(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.c;
      }
      if (z(xg(c))) {
        for (c = c.c[a >> b & 31], b -= 5;;) {
          if (0 === b) {
            return c.c;
          }
          d = b - 5;
          c = c.c[a >> b & 31];
          b = d;
        }
      } else {
        d = c.c[32];
        a: {
          for (e = a >> b & 31;;) {
            if (a < d[e]) {
              break a;
            }
            e += 1;
          }
        }
        c = c.c[e];
        b -= 5;
        a = 0 < e ? a - d[e - 1] : a;
      }
    }
  } else {
    return Zd(e, a);
  }
}
function Cg(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Td(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Td(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var Dg = function Dg(b, c, d, e, f) {
  if (z(xg(e))) {
    for (var g = Ga(e.c), g = e = Td(e.l, g);;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (z(l)) {
          l = Ga(l.c);
          l = Td(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = Cg(f.c, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Ga(e.c);
    c = e.c[32];
    k = c[32] - 1;
    e = Td(e.l, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], m = 0 < k ? c[k] - c[k - 1] : c[0], l = m !== 1 << b ? Dg(b - 5, m + 1, d, l, f) : null
    }
    z(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = Cg(f.c, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, Eg = function Eg(b, c, d, e) {
  if (z(xg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = Eg(b - 5, c, d, e.c[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Ga(e.c);
      e[f] = b;
      return Td(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Ga(e.c);
    e[f] = null;
    return Td(d, e);
  }
  var g = e.c[32];
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
    var k = e.c[f];
    b = Eg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    z(xg(k)) ? (e = Ga(e.c), c[f] -= 32) : (g = yg(k) - (z(b) ? yg(b) : 0), e = Ga(e.c), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return Td(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Ga(e.c);
  b = Ga(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return Td(d, e);
}, Fg = function Fg(b, c, d, e) {
  if (z(xg(c))) {
    for (var f = c = new Sd(c.l, Ga(c.c));;) {
      if (0 === b) {
        f.c[d & 31] = e;
        break;
      } else {
        var f = f.c, g = d >> b & 31, k;
        k = f[g];
        k = new Sd(k.l, Ga(k.c));
        f = f[g] = k;
        b -= 5;
      }
    }
    return c;
  }
  f = Ga(c.c);
  g = c.c[32];
  a: {
    for (k = d >> b & 31;;) {
      if (d < (g[k] | 0)) {
        break a;
      }
      k += 1;
    }
  }
  f[k] = Fg(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return Td(c.l, f);
};
function Gg(a, b) {
  if (b.l === a) {
    return b;
  }
  var c = Ga(b.c);
  33 === c.length && (c[32] = Ga(c[32]));
  return new Sd(a, c);
}
var Hg = function Hg(b, c, d, e, f) {
  e = Gg(d, e);
  if (z(xg(e))) {
    for (var g = e;;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = Cg(f.c, d, b - 5, f);
        } else {
          l = Gg(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        }
      }
      break;
    }
  } else {
    c = e.c;
    g = e.c[32];
    k = g[32] - 1;
    if (5 === b) {
      l = null;
    } else {
      var l = Gg(d, c[k]), m = 0 < k ? g[k] - g[k - 1] : g[0], l = m !== 1 << b ? Hg(b - 5, m + 1, d, l, f) : null
    }
    z(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = Cg(f.c, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, Ig = function Ig(b, c, d, e, f) {
  d = Gg(c, d);
  if (z(xg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.c[e & 31] = f;
        break;
      } else {
        var g = g.c, k = e >> b & 31, l = Gg(c, g[k]), g = g[k] = l;
        b -= 5;
      }
    }
  } else {
    g = d.c;
    k = d.c[32];
    a: {
      for (l = e >> b & 31;;) {
        if (e < (k[l] | 0)) {
          break a;
        }
        l += 1;
      }
    }
    g[l] = Ig(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var Jg = function Jg(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = Jg[v(null == b ? null : b)];
  if (!c && (c = Jg._, !c)) {
    throw C("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function Kg(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.k = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.t = 1536;
}
h = Kg.prototype;
h.toString = function() {
  return Mb(this);
};
h.C = function(a, b, c) {
  return nf(b, tf, "(", " ", ")", c, this);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.k, d = this.w + 1;
    a = Lg ? Lg(a, b, c, d) : Mg.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Fb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fd(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.M = function() {
  return Jc(cc, this.h);
};
h.N = function(a, b) {
  return mc(le(this.D, this.k + this.w, Bc(this.D)), b);
};
h.O = function(a, b, c) {
  return nc(le(this.D, this.k + this.w, Bc(this.D)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.k, d = this.w + 1;
    a = Lg ? Lg(a, b, c, d) : Mg.call(null, a, b, c, d);
    return null == a ? cc : a;
  }
  return Eb(this);
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
  this.k + a < Ka(this.D) ? (b = this.D, a = this.k + a, b = Ng ? Ng(b, a, 0) : Mg.call(null, b, a, 0)) : b = null;
  return null == b ? cc : b;
};
h.L = function(a, b) {
  var c = this.D, d = this.ga, e = this.k, f = this.w;
  return Og ? Og(c, d, e, f, b) : Mg.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return uc(b, this);
};
h.Wa = function() {
  var a = this.ga.length, b;
  this.k + a < Ka(this.D) ? (b = this.D, a = this.k + a, b = Ng ? Ng(b, a, 0) : Mg.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Mg() {
  switch(arguments.length) {
    case 3:
      return Ng(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Lg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Og(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Ng(a, b, c) {
  return new Kg(a, Bg(a.d, a.shift, a.root, a.o, b), b, c, null, null);
}
function Lg(a, b, c, d) {
  return new Kg(a, b, c, d, null, null);
}
function Og(a, b, c, d, e) {
  return new Kg(a, b, c, d, e, null);
}
var Pg = function Pg(b, c, d) {
  if (0 === c) {
    var e = b.c;
    b = Array(d);
    Qc(e, 0, b, 0, d);
  } else {
    var f = xg(b), g = Ca(f) ? b.c[32] : null, k = d - 1 >> c & 31, l = z(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), m = z(f) ? function() {
      var b = cd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.c, n = Pg(e[l], c - 5, m), p = 5 === c ? 32 === n.c.length : xg(n);
    b = Array(z(z(f) ? p : f) ? 32 : 33);
    var q = z(p) ? function() {
      var b = cd(m, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? n.c.length : yg(n);
    Qc(e, 0, b, 0, l);
    b[l] = n;
    if (Ca(z(f) ? p : f)) {
      e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      n = 1 << c;
      if (z(f)) {
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
  return Td(null, b);
}, Qg = function Qg(b, c, d, e) {
  if (0 === c) {
    var f = b.c, g = f.length - d, k = Array(g);
    Qc(f, d, k, 0, g);
    return Td(null, k);
  }
  var l = xg(b), f = b.c, m = Ca(l) ? b.c[32] : null, n = d >> c & 31, p = z(l) ? n : function() {
    for (var b = n;;) {
      if (d < m[b]) {
        return b;
      }
      b += 1;
    }
  }(), k = z(l) ? function() {
    for (var b = p;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : m[32], q = Qg(f[p], c - 5, 0 < p ? d - (z(l) ? p * (1 << c) : m[p - 1]) : d, function() {
    var b = 1 << c, d = 0 < p ? e - (z(l) ? p * (1 << c) : m[p - 1]) : e;
    return b < d ? b : d;
  }()), g = k - p, g = null == q ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (z(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 1 << c, u = 0, y = z(function() {
      var b = null == q;
      return b ? b : (b = 5 === c) ? b : xg(q);
    }()) ? (1 << c) - (d >> c - 5 & 31) : yg(q);;) {
      if (u < g) {
        r[u] = y, y += t, u += 1;
      } else {
        break;
      }
    }
    r[g - 1] = e - d;
  } else {
    for (k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 0, u = p;;) {
      if (t < g) {
        r[t] = m[u] - d, u += 1, t += 1;
      } else {
        break;
      }
    }
  }
  r[32] = g;
  Qc(f, null == q ? p + 1 : p, k, 0, g);
  null != q && (k[0] = q);
  k[32] = r;
  return Td(b.l, k);
};
function Rg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.t = 2052;
}
h = Rg.prototype;
h.toString = function() {
  return Mb(this);
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  return Pa.g(this, b, c);
};
h.F = function(a, b) {
  if (0 <= b && b < this.d) {
    var c = this.d - this.o.length;
    if (c <= b) {
      return this.o[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.c;
        return f[c >> e & 31];
      }
      if (z(xg(d))) {
        for (f = d.c, d = c >> e & 31, f = f[d], e -= 5;;) {
          f = f.c;
          d = c >> e & 31;
          if (0 === e) {
            return f[d];
          }
          e -= 5;
          f = f[d];
        }
      } else {
        var f = d.c, g = d.c[32];
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
    return Zd(b, this.d);
  }
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? Pa.a(this, b) : c;
};
h.C = function(a, b, c) {
  return nf(b, tf, "[", " ", "]", c, this);
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.o.length;
    return b >= d ? (a = Array(this.o.length), b -= d, Qc(this.o, 0, a, 0, this.o.length), a[b] = c, new Rg(this.d, this.shift, this.root, a, this.h, null)) : new Rg(this.d, this.shift, Fg(this.shift, this.root, b, c), this.o, this.h, null);
  }
  return b === this.d ? Ma(this, c) : Zd(b, this.d);
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
  return Pa.a(this, 0);
};
h.$a = function() {
  return Pa.a(this, 1);
};
h.Ga = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return kb(Ac, this.h);
  }
  if (1 < this.o.length) {
    var a = Array(this.o.length - 1);
    Qc(this.o, 0, a, 0, a.length);
    return new Rg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = Bg(this.d, this.shift, this.root, this.o, this.d - 2), b = Eg(this.shift, this.d - this.o.length, this.root.l, this.root);
  return null == b ? new Rg(this.d - 1, this.shift, Q, a, this.h, null) : 5 < this.shift && null == b.c[1] ? new Rg(this.d - 1, this.shift - 5, b.c[0], a, this.h, null) : new Rg(this.d - 1, this.shift, b, a, this.h, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fd(this);
};
h.q = function(a, b) {
  return tc(this, b);
};
h.Fa = function() {
  var a = this.d, b = this.shift, c = new Sd({}, Ga(this.root.c)), d = this.o, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qc(d, 0, e, 0, d.length);
  d = this.o.length;
  return Sg.r ? Sg.r(a, b, c, e, d) : Sg.call(null, a, b, c, e, d);
};
h.M = function() {
  return Jc(Ac, this.h);
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
  var d = this.d - this.o.length;
  if (b >= d) {
    return c = Array(a), Qc(this.o, b - d, c, 0, a), new Rg(a, 5, Q, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : Pg(this.root, this.shift, c);
  b = 0 === b ? f : Qg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Qc(this.o, 0, d, 0, c), c = d) : c = Bg(a, this.shift, b, [], a - 1);
  e = e ? b : Eg(this.shift, a, b.l, b);
  if (null == e) {
    return new Rg(a, 5, Q, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.c[1]) {
      b -= 5, e = e.c[0];
    } else {
      return new Rg(a, b, e, c, this.h, null);
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
  return 0 === this.d ? null : 0 === this.d - this.o.length ? wc(this.o, 0) : Ng(this, 0, 0);
};
h.L = function(a, b) {
  return new Rg(this.d, this.shift, this.root, this.o, b, this.m);
};
h.I = function(a, b) {
  if (32 > this.o.length) {
    var c = this.o.length, d = Array(c + 1);
    Qc(this.o, 0, d, 0, c);
    d[c] = b;
    return new Rg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Td(this.root.l, this.o);
  d = [null];
  d[0] = b;
  if (z(zg(this.root, this.shift, this.d))) {
    if (z(xg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Td(this.root.l, e), g = e;
      g[0] = this.root;
      g[1] = Cg(this.o, this.root.l, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Td(this.root.l, e), k = this.root.c[32][31];
      e[0] = this.root;
      e[1] = Cg(this.o, this.root.l, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new Rg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new Rg(this.d + 1, this.shift, Dg(this.shift, this.d, this.root.l, this.root, c), d, this.h, null);
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
  a.a = function(a, c) {
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
h.b = function(a) {
  return this.F(null, a);
};
h.a = function(a, b) {
  return this.ha(null, a, b);
};
P.prototype.fb = function() {
  return new Rg(Bc(this), this.shift, this.root, this.o, Kc(this), null);
};
oe.prototype.fb = function() {
  var a = this.start, b = this.end;
  return wg(Jg(this.ra), a, b);
};
function Tg(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.za = e;
  this.t = 88;
  this.i = 2;
}
h = Tg.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.za) {
      this.o[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Td(this.root.l, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      this.za = 1;
      if (z(zg(this.root, this.shift, this.d))) {
        if (z(xg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = Cg(this.o, this.root.l, this.shift, c);
          this.root = Td(this.root.l, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Td(this.root.l, d), g = this.root.c[32][31];
          d[0] = this.root;
          d[1] = Cg(this.o, this.root.l, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = Hg(this.shift, this.d, this.root.l, this.root, c);
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
    Qc(this.o, 0, a, 0, this.za);
    return new Rg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ha = function(a, b, c) {
  return Bb(this, b, c);
};
h.nb = function(a, b, c) {
  if (this.root.l) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.o[b - a] = c : this.root = Ig(this.shift, this.root.l, this.root, b, c), this) : b === this.d ? yb(this, c) : Zd(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function Sg(a, b, c, d, e) {
  return new Tg(a, b, c, d, e);
}
;P.prototype.eb = function(a, b, c) {
  return wg(Jg(this), b, c);
};
oe.prototype.eb = function(a, b, c) {
  return wg(Jg(this), b, c);
};
function Ug(a, b) {
  return wg(a, b, Bc(a));
}
;function Vg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c - e, d - f];
}
function Wg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c + e, d + f];
}
function Xg(a, b) {
  var c = K(b, 0), d = K(b, 1);
  return[a * c, a * d];
}
function Yg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return c * e + d * f;
}
function Zg(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.atan2(a, b);
}
;var $g = function $g() {
  return $g.j(arguments[0], 1 < arguments.length ? new ac(Array.prototype.slice.call(arguments, 1), 0) : null);
};
$g.j = function(a, b) {
  var c = K(b, 0), d = K(c, 0), c = K(c, 1);
  a: {
    for (var e = 1, f = F(b);;) {
      if (f && 0 < e) {
        --e, f = H(f);
      } else {
        break a;
      }
    }
  }
  a.beginPath();
  a.moveTo(d, c);
  for (var d = F(b), e = null, g = f = 0;;) {
    if (g < f) {
      var k = e.F(null, g), c = K(k, 0), k = K(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = F(d)) {
        Oc(d) ? (e = Db(d), d = Eb(d), c = e, f = Bc(e), e = c) : (e = G(d), c = K(e, 0), k = K(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
$g.u = 1;
$g.s = function(a) {
  var b = G(a);
  a = H(a);
  return $g.j(b, a);
};
var ah = function ah() {
  return ah.j(arguments[0], 1 < arguments.length ? new ac(Array.prototype.slice.call(arguments, 1), 0) : null);
};
ah.j = function(a, b) {
  M.g($g, a, b);
  return a.stroke();
};
ah.u = 1;
ah.s = function(a) {
  var b = G(a);
  a = H(a);
  return ah.j(b, a);
};
function bh(a, b, c, d, e) {
  var f = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function ch(a, b) {
  a.save();
  try {
    b.p ? b.p() : b.call(null);
  } finally {
    a.restore();
  }
}
;var dh = new P(null, 5, 5, Q, [new P(null, 4, 5, Q, [new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, 44], null), T, new P(null, 2, 5, Q, [-415, -313], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, -313], null), T, new P(null, 2, 5, Q, [-55, -313], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-51, 246], null), T, new P(null, 2, 5, Q, [377, 246], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [377, 246], null), T, new P(null, 2, 5, Q, [377, 
-200], null)], null)], null), new P(null, 8, 5, Q, [new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-344, 341], null), T, [-469, 341]], null), new w(null, 3, [W, X, S, [-469, 341], T, [-469, -292]], null), new w(null, 3, [W, X, S, [-469, -292], T, [-327, -292]], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-189, 340], null), T, [261, 340]], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-203, -294], null), T, [261, -294]], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [409, 
-293], null), T, [541, -293]], null), new w(null, 3, [W, X, S, [541, -293], T, [541, 327]], null), new w(null, 3, [W, X, S, [541, 327], T, [420, 327]], null)], null), new P(null, 10, 5, Q, [new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, 145], null), T, new P(null, 2, 5, Q, [-487, -206], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, -206], null), T, [-241, -452]], null), new w(null, 3, [W, X, S, [-241, -452], T, new P(null, 2, 5, Q, [-5, -452], null)], null), new w(null, 
3, [W, X, S, new P(null, 2, 5, Q, [-5, -452], null), T, new P(null, 2, 5, Q, [-5, -280], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-190, 399], null), T, new P(null, 2, 5, Q, [153, 399], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [153, 399], null), T, new P(null, 2, 5, Q, [461, 399], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [461, 399], null), T, new P(null, 2, 5, Q, [461, 120], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [461, 
120], null), T, new P(null, 2, 5, Q, [261, 120], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [318, -426], null), T, [530, -214]], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-508, 422], null), T, [-235, 149]], null)], null), new P(null, 10, 5, Q, [new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-363, 146], null), T, new P(null, 2, 5, Q, [-30, 147], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-30, 147], null), T, new P(null, 2, 5, Q, [88, 314], null)], null), 
new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [88, 314], null), T, new P(null, 2, 5, Q, [332, 315], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [332, 315], null), T, new P(null, 2, 5, Q, [527, 51], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [527, 51], null), T, new P(null, 2, 5, Q, [350, -268], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [350, -268], null), T, new P(null, 2, 5, Q, [93, -268], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 
5, Q, [93, -268], null), T, new P(null, 2, 5, Q, [-34, -110], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-34, -110], null), T, new P(null, 2, 5, Q, [-371, -108], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-460, 353], null), T, new P(null, 2, 5, Q, [-65, 353], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-487, -314], null), T, new P(null, 2, 5, Q, [-62, -313], null)], null)], null), new P(null, 10, 5, Q, [new w(null, 3, [W, X, S, new P(null, 2, 
5, Q, [330, -239], null), T, new P(null, 2, 5, Q, [331, 233], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [331, 233], null), T, new P(null, 2, 5, Q, [-239, 233], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-239, 233], null), T, new P(null, 2, 5, Q, [-241, 353], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-241, 353], null), T, new P(null, 2, 5, Q, [496, 352], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [496, 352], null), T, new P(null, 
2, 5, Q, [493, -111], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [77, -126], null), T, new P(null, 2, 5, Q, [-368, -126], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-368, -126], null), T, new P(null, 2, 5, Q, [-368, 224], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-368, 224], null), T, new P(null, 2, 5, Q, [-500, 366], null)], null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-500, 366], null), T, new P(null, 2, 5, Q, [-502, -363], null)], 
null), new w(null, 3, [W, X, S, new P(null, 2, 5, Q, [-502, -363], null), T, new P(null, 2, 5, Q, [-74, -363], null)], null)], null)], null);
var eh = 2 * Math.PI;
if ("undefined" === typeof fh) {
  var fh = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Dc(R, sg, Af());
    return new Kf(Zb("draw-segment"), function() {
      return function(a, b) {
        return W.b(b);
      };
    }(a, b, c, d, e), Rf, e, a, b, c, d);
  }()
}
Lf(fh, X, function(a, b) {
  var c = Sc(b) ? M.a(Id, b) : b, d = L(c, S), c = L(c, T);
  return ah.j(a, xc([d, c], 0));
});
Lf(fh, cg, function(a, b) {
  var c = Sc(b) ? M.a(Id, b) : b, d = L(c, gg), e = L(c, Uf), f = L(c, Wf), g = L(c, Pf), c = L(c, Nf);
  return 0 > g ? bh(a, d, c, f, e) : bh(a, d, c, e, f);
});
if ("undefined" === typeof gh) {
  var gh = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Dc(R, sg, Af());
    return new Kf(Zb("update-seg"), function() {
      return function(a) {
        return W.b(a);
      };
    }(a, b, c, d, e), Rf, e, a, b, c, d);
  }()
}
Lf(gh, X, function(a, b, c) {
  a = Sc(a) ? M.a(Id, a) : a;
  var d = L(a, Pf);
  b = Xg(b, d);
  return Rd.n(a, dc.a(c, fg) ? T : S, Wg, b);
});
Lf(gh, cg, function(a, b, c) {
  a = Sc(a) ? M.a(Id, a) : a;
  var d = L(a, Pf), e = L(a, Nf);
  b = b / e * d;
  return Rd.n(a, dc.a(c, fg) ? Wf : Uf, ad, b);
});
function hh(a, b) {
  return Rd.n(gh.g ? gh.g(a, b, fg) : gh.call(null, a, b, fg), lg, ad, b);
}
function ih(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a;
  L(c, W);
  return Rd.n(gh.g ? gh.g(c, b, ig) : gh.call(null, c, b, ig), lg, bd, b);
}
function jh(a, b) {
  for (var c = 0, d = b;;) {
    if (dc.a(c, Bc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < lg.b(function() {
      var b = c;
      return a.b ? a.b(b) : a.call(null, b);
    }())) {
      return Ug(Rd.n(a, c, ih, d), c);
    }
    var e = c + 1, d = d - lg.b(function() {
      var b = c;
      return a.b ? a.b(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof kh) {
  var kh = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Dc(R, sg, Af());
    return new Kf(Zb("seg-normal"), function() {
      return function(a) {
        return W.b(a);
      };
    }(a, b, c, d, e), Rf, e, a, b, c, d);
  }()
}
Lf(kh, X, function(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a, d = L(c, Pf), c = K(d, 0), d = K(d, 1);
  return dc.a(b, vg) ? [-d, c] : [d, -c];
});
Lf(kh, cg, function(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a;
  L(c, Uf);
  var d = L(c, Wf), c = L(c, Pf) * (dc.a(b, vg) ? -1 : 1);
  return Xg(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof lh) {
  var lh, mh = O ? O(R) : Hd.call(null, R), nh = O ? O(R) : Hd.call(null, R), oh = O ? O(R) : Hd.call(null, R), ph = O ? O(R) : Hd.call(null, R), qh = Dc(R, sg, Af());
  lh = new Kf(Zb("seg-endpoint"), W, Rf, qh, mh, nh, oh, ph);
}
Lf(lh, X, function(a) {
  return T.b(a);
});
Lf(lh, cg, function(a) {
  var b = Sc(a) ? M.a(Id, a) : a;
  L(b, Uf);
  a = L(b, Wf);
  var c = L(b, gg), b = L(b, Nf);
  return Wg(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function rh(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a, d = L(c, Yf);
  return Ec.g(c, Yf, dc.a(lg.b(yc(d)), 0) ? zc.a(null == d ? null : cb(d), b) : zc.a(d, b));
}
function sh(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a, d = L(c, eg), e = L(c, Yf);
  return dc.a(d, b) ? c : rh(Ec.g(c, eg, b), function() {
    switch(b instanceof N ? b.va : null) {
      case "left":
        var a = yc(e), c = function() {
          var c = a;
          return kh.a ? kh.a(c, b) : kh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = Wg(function() {
          var b = a;
          return lh.b ? lh.b(b) : lh.call(null, b);
        }(), Xg(20, c)), m = Math.atan2(-l, -d), d = m, l = dc.a(b, vg) ? 1 : -1;
        return new w(null, 7, [W, cg, gg, c, Uf, m, Wf, d, lg, 0, Pf, l, Nf, 20], null);
      case "right":
        return a = yc(e), c = function() {
          var c = a;
          return kh.a ? kh.a(c, b) : kh.call(null, c, b);
        }(), d = K(c, 0), l = K(c, 1), c = Wg(function() {
          var b = a;
          return lh.b ? lh.b(b) : lh.call(null, b);
        }(), Xg(20, c)), d = m = Math.atan2(-l, -d), l = dc.a(b, vg) ? 1 : -1, new w(null, 7, [W, cg, gg, c, Uf, m, Wf, d, lg, 0, Pf, l, Nf, 20], null);
      default:
        return d = yc(e), a = l = Sc(d) ? M.a(Id, d) : d, d = L(l, Wf), l = L(l, Pf), c = function() {
          var b = a;
          return lh.b ? lh.b(b) : lh.call(null, b);
        }(), new w(null, 5, [W, X, S, c, T, c, lg, 0, Pf, Xg(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function th(a) {
  var b = I.b ? I.b(uh) : I.call(null, uh);
  ch(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280, f = a.canvas;
    a.clearRect(0, 0, f.width, f.height);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    return xf(Ed(fh, a), xd.j($f.b(b), Nd.a(Ge, Zf.b(b)), xc([Yf.b(b)], 0)));
  });
}
function vh(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a, d = L(c, Uf), e = L(c, Wf), c = L(c, Pf);
  if (c * (e - d) > eh) {
    return!0;
  }
  var f = cd(b, eh), d = cd(d, eh), e = cd(e, eh);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= eh : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= eh;
}
if ("undefined" === typeof wh) {
  var wh = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Dc(R, sg, Af());
    return new Kf(Zb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [W.b(a), W.b(b)], null);
      };
    }(a, b, c, d, e), Rf, e, a, b, c, d);
  }()
}
Lf(wh, new P(null, 2, 5, Q, [X, X], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [S.b(a), T.b(a)], null);
  c = new P(null, 2, 5, Q, [S.b(b), T.b(b)], null);
  var e = K(d, 0), d = K(d, 1), f = K(c, 0), g = K(c, 1), d = Vg(d, e);
  c = K(d, 0);
  var d = K(d, 1), k = Vg(g, f), g = K(k, 0), k = K(k, 1), f = Vg(f, e), e = K(f, 0), f = K(f, 1), l = -1 * c * k - -1 * d * g;
  c = dc.a(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = K(c, 0);
  d = K(c, 1);
  return z(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Lf(wh, new P(null, 2, 5, Q, [X, cg], null), function(a, b) {
  var c = Sc(a) ? M.a(Id, a) : a, d = L(c, S), c = L(c, T), e = Sc(b) ? M.a(Id, b) : b, f = L(e, Nf);
  var g = L(e, gg), c = Vg(c, d), e = Yg(c, c), d = Vg(d, g), g = Yg(d, d), k = Yg(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Yg(c, d) - g) / e, e = (-Yg(c, d) + g) / e, g = Zg(Wg(Xg(f, c), d)), c = Zg(Wg(Xg(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = K(f, 0);
  e = K(f, 1);
  d = K(f, 2);
  c = K(f, 3);
  return z(f) ? (d = (f = 0 < g && 1 > g) ? vh(b, d) : f, z(d) ? d : (e = 0 < e && 1 > e) ? vh(b, c) : e) : f;
});
Lf(wh, new P(null, 2, 5, Q, [cg, X], null), function(a, b) {
  return wh.a ? wh.a(b, a) : wh.call(null, b, a);
});
Lf(wh, new P(null, 2, 5, Q, [cg, cg], null), function(a, b) {
  var c;
  var d = gg.b(a), e = Nf.b(a);
  c = gg.b(b);
  var f = Nf.b(b), g = Vg(c, d), d = K(g, 0);
  c = K(g, 1);
  g = Yg(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = K(c, 0);
  d = K(c, 1);
  f = K(c, 2);
  e = K(c, 3);
  return z(c) ? (c = vh(a, g), d = z(c) ? c : vh(a, d), z(d) ? (f = vh(b, f), z(f) ? f : vh(b, e)) : d) : c;
});
function xh(a) {
  var b = Sc(a) ? M.a(Id, a) : a, c = L(b, $f), d = L(b, Yf), e = yc(d), f = null == d ? null : cb(d);
  return Cd(function(a) {
    return function(b) {
      return wh.a ? wh.a(a, b) : wh.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), xd.a(c, z(Ad(f)) ? null == f ? null : cb(f) : f));
}
function yh(a) {
  var b = Sc(a) ? M.a(Id, a) : a, c = L(b, Zf), d = L(b, Yf), e = yc(d);
  return Wc(function() {
    return function(a, b) {
      var c = K(b, 0);
      K(b, 1);
      return Rd.n(Rd.n(a, qg, ad, 50), Zf, Gc, c);
    };
  }(e, a, b, b, c, d), b, Pd(Dd(Ed(wh, e), Ge), c));
}
var zh = O ? O(null) : Hd.call(null, null);
function Ah(a, b) {
  for (var c = Sc(b) ? M.a(Id, b) : b, d = L(c, $f), e = a.canvas, f = e.width, g = e.height, k = yf(f) - f / 2, l = yf(g) - g / 2;;) {
    if (z(Cd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Nd.a(Dd(function(a, b) {
      return function(c) {
        var d = new P(null, 2, 5, Q, [a, b], null), e = K(c, 0);
        c = K(c, 1);
        c = Vg(c, e);
        var f = Yg(Vg(e, d), c) / Yg(c, c) * -1, f = 1 < f ? 1 : f, e = Vg(Wg(e, Xg(0 > f ? 0 : f, c)), d), d = K(e, 0), e = K(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), mf()), d)))) {
      k = yf(f) - f / 2, l = yf(g) - g / 2;
    } else {
      return new P(null, 2, 5, Q, [k, l], null);
    }
  }
}
var Bh = new P(null, 1, 5, Q, [new w(null, 5, [lg, 100, W, X, Pf, new P(null, 2, 5, Q, [1, 0], null), S, new P(null, 2, 5, Q, [0, 0], null), T, new P(null, 2, 5, Q, [100, 0], null)], null)], null);
function Ch() {
  var a = new P(null, 5, 5, Q, [new P(null, 2, 5, Q, [-642, 482], null), new P(null, 2, 5, Q, [642, 482], null), new P(null, 2, 5, Q, [642, -482], null), new P(null, 2, 5, Q, [-642, -482], null), new P(null, 2, 5, Q, [-642, 482], null)], null);
  return Nd.g(function(a, c) {
    return new w(null, 3, [W, X, S, a, T, c], null);
  }, a, bc(a));
}
function Dh(a, b) {
  return Wc(function(a, d) {
    return Rd.r(a, Zf, Ec, d, new w(null, 6, [W, cg, gg, Ah(b, a), Uf, 0, Wf, eh, Pf, 1, Nf, 10], null));
  }, Ec.j(a, Yf, Bh, xc([lg, 100, qg, 100, eg, null, Zf, R, $f, xd.a(Ch(), function() {
    var b = cd(dg.b(a), Bc(dh));
    return dh.b ? dh.b(b) : dh.call(null, b);
  }()), hg, !1], 0)), new lf(null, 0, 10, 1, null));
}
var uh, Eh = new w(null, 1, [dg, 0], null);
uh = O ? O(Eh) : Hd.call(null, Eh);
var Fh = document.createElement("button");
Fh.textContent = "Pause";
var Gh, Hh, Ih = dd(3 * (window.innerWidth - 20), 4);
Hh = 1280 < Ih ? 1280 : Ih;
var Jh = dd(4 * (window.innerHeight - 10), 3);
Gh = Hh < Jh ? Hh : Jh;
var Kh = dd(3 * Gh, 4), Lh = document.createElement("canvas");
z(Gh) && Lh.setAttribute("width", Gh);
z(Kh) && Lh.setAttribute("height", Kh);
Lh.setAttribute("style", "border: 1px solid #000; display: block;");
var Mh = document.createElement("div"), Nh = Lh.getContext("2d");
function Oh(a) {
  a: {
    var b = Nd.a(D, a);
    a = new la;
    for (b = F(b);;) {
      if (b) {
        a.append("" + D(G(b))), b = H(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  Mh.textContent = a;
}
var Ph = function Ph(b) {
  Fh.textContent = "Pause";
  return Fh.onclick = function() {
    Md.n(uh, Ec, hg, !0);
    Fh.textContent = "Go";
    return Fh.onclick = function() {
      Md.n(uh, Ec, hg, !1);
      Qh.b ? Qh.b(b) : Qh.call(null, b);
      return Ph(b);
    };
  };
};
function Rh(a) {
  Fh.textContent = "Start";
  return Fh.onclick = function() {
    Oh(xc(["Press A and D to turn left and right."], 0));
    var b = {level:dg.b(I.b ? I.b(uh) : I.call(null, uh))};
    mixpanel.track("start level", b);
    Md.g(uh, Dh, a);
    Qh.b ? Qh.b(a) : Qh.call(null, a);
    return Ph(a);
  };
}
var Sh = new w(null, 4, [65, vg, 37, vg, 68, ng, 39, ng], null);
function Qh(a) {
  window.onkeydown = function(a) {
    a = a.which;
    a = Sh.b ? Sh.b(a) : Sh.call(null, a);
    return z(a) ? Md.g(uh, sh, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = Sh.b ? Sh.b(a) : Sh.call(null, a);
    return z(a) ? dc.a(a, eg.b(I.b ? I.b(uh) : I.call(null, uh))) ? Md.g(uh, sh, null) : null : null;
  };
  return function(b) {
    return function d() {
      if (Ca(hg.b(I.b ? I.b(uh) : I.call(null, uh)))) {
        var e = Md.a(uh, function() {
          return function(a) {
            var b;
            b = qg.b(a);
            a = Sc(a) ? M.a(Id, a) : a;
            var d = L(a, Yf), e = L(a, lg), m = Bc(d) - 1, n = e + 3 - b, d = Rd.n(d, m, hh, 3);
            b = Ec.j(a, Yf, 0 < n ? jh(d, n) : d, xc([lg, Math.min(e + 3, b)], 0));
            return yh(b);
          };
        }(b));
        if (z(xh(e))) {
          return Oh(xc(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0)), e = I.b ? I.b(uh) : I.call(null, uh), Kd.a ? Kd.a(zh, e) : Kd.call(null, zh, e), Rh(a), b();
        }
        if (Lc(Zf.b(e))) {
          return Oh(xc(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0)), Md.n(uh, Rd, dg, lc), Rh(a), b();
        }
        th(a);
        return window.requestAnimationFrame(d);
      }
      return b();
    };
  }(function() {
    window.onkeydown = null;
    return window.onkeyup = null;
  }).call(null);
}
da("figwheel_test.snake.init_everything", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(Fh);
    a.appendChild(Mh);
    return a;
  }());
  a.appendChild(Lh);
  Oh(xc(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return Rh(Nh);
});
var Th = document.createElement("canvas");
Th.setAttribute("width", 1280);
Th.setAttribute("height", 960);
Th.setAttribute("style", "border: 1px solid #000");
Th.getContext("2d");
var Uh = new P(null, 2, 5, Q, [0, 0], null);
O || Hd.call(null, Uh);
var Vh = document.createElement("button");
Vh.textContent = "Pause";
var Wh, Xh, Yh = dd(3 * (window.innerWidth - 20), 4);
Xh = 1280 < Yh ? 1280 : Yh;
var Zh = dd(4 * (window.innerHeight - 10), 3);
Wh = Xh < Zh ? Xh : Zh;
var $h = dd(3 * Wh, 4), ai = document.createElement("canvas");
z(Wh) && ai.setAttribute("width", Wh);
z($h) && ai.setAttribute("height", $h);
ai.setAttribute("style", "border: 1px solid #000; display: block;");
var bi = document.createElement("div");
ai.getContext("2d");
da("figwheel_test.common.init_elements", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(Vh);
    a.appendChild(bi);
    return a;
  }());
  return a.appendChild(ai);
});
function ci() {
  for (var a = new P(null, 3, 5, Q, [yf(500) - 250, -215, yf(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = xd.a(Od(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (1 * (Math.random.p ? Math.random.p() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), xc([a, bc(a)], 0)), new P(null, 1, 5, Q, [yc(a)], null)), b /= 2, --c;
    } else {
      return je(a);
    }
  }
}
function di(a) {
  var b = Bc(a) / 2;
  return Wc(function() {
    return function(a, b) {
      return Ec.g(a, b, -215);
    };
  }(b), a, new lf(null, b - 4, b + 4, 1, null));
}
O || Hd.call(null, 0);
O || Hd.call(null, !1);
var ei = new P(null, 2, 5, Q, [1, 0], null);
O || Hd.call(null, ei);
var fi = new w(null, 7, [Mf, R, kg, function() {
  var a = ci(), b = Bc(a) - 1;
  return je(Fd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), di(a)));
}(), rg, R, ag, R, jg, 0, Of, 60, pg, Fc([Qf, Sf, Tf, Vf, Xf, bg, mg, og, tg, ug], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || Hd.call(null, fi);
O || Hd.call(null, !1);
O || Hd.call(null, 0);
O || Hd.call(null, Ac);

})();
