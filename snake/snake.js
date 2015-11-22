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
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ja(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ka(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function la(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = la.prototype;
h.Ha = "";
h.set = function(a) {
  this.Ha = "" + a;
};
h.append = function(a, b, c) {
  this.Ha += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ha += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.Ha = "";
};
h.toString = function() {
  return this.Ha;
};
function oa(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
;if ("undefined" === typeof pa) {
  var pa = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ra = null;
if ("undefined" === typeof ta) {
  var ta = null
}
function va() {
  return new n(null, 5, [wa, !0, xa, !0, za, !1, Aa, !1, Ba, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function Da(a) {
  return a instanceof Array;
}
function Ea(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function Fa(a) {
  return null == a ? null : a.constructor;
}
function z(a, b) {
  var c = Fa(b), c = w(w(c) ? c.Vb : c) ? c.Ub : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ga(a) {
  var b = a.Ub;
  return w(b) ? b : "" + A(a);
}
var Ha = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function Ja(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ka = {}, La = {}, Na = function Na(b) {
  if (b ? b.P : b) {
    return b.P(b);
  }
  var c;
  c = Na[m(null == b ? null : b)];
  if (!c && (c = Na._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, Oa = function Oa(b) {
  if (b ? b.N : b) {
    return b.N(b);
  }
  var c;
  c = Oa[m(null == b ? null : b)];
  if (!c && (c = Oa._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Pa = function Pa(b, c) {
  if (b ? b.J : b) {
    return b.J(b, c);
  }
  var d;
  d = Pa[m(null == b ? null : b)];
  if (!d && (d = Pa._, !d)) {
    throw z("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Qa = {}, B = function B() {
  switch(arguments.length) {
    case 2:
      return B.b(arguments[0], arguments[1]);
    case 3:
      return B.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
B.b = function(a, b) {
  if (a ? a.G : a) {
    return a.G(a, b);
  }
  var c;
  c = B[m(null == a ? null : a)];
  if (!c && (c = B._, !c)) {
    throw z("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
B.e = function(a, b, c) {
  if (a ? a.T : a) {
    return a.T(a, b, c);
  }
  var d;
  d = B[m(null == a ? null : a)];
  if (!d && (d = B._, !d)) {
    throw z("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
B.t = 3;
var Sa = {}, Ta = function Ta(b) {
  if (b ? b.U : b) {
    return b.U(b);
  }
  var c;
  c = Ta[m(null == b ? null : b)];
  if (!c && (c = Ta._, !c)) {
    throw z("ISeq.-first", b);
  }
  return c.call(null, b);
}, Ua = function Ua(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = Ua[m(null == b ? null : b)];
  if (!c && (c = Ua._, !c)) {
    throw z("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Va = {}, Xa = {}, Ya = function Ya() {
  switch(arguments.length) {
    case 2:
      return Ya.b(arguments[0], arguments[1]);
    case 3:
      return Ya.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Ya.b = function(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = Ya[m(null == a ? null : a)];
  if (!c && (c = Ya._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ya.e = function(a, b, c) {
  if (a ? a.w : a) {
    return a.w(a, b, c);
  }
  var d;
  d = Ya[m(null == a ? null : a)];
  if (!d && (d = Ya._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ya.t = 3;
var Za = function Za(b, c, d) {
  if (b ? b.za : b) {
    return b.za(b, c, d);
  }
  var e;
  e = Za[m(null == b ? null : b)];
  if (!e && (e = Za._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, $a = {}, ab = function ab(b, c) {
  if (b ? b.lb : b) {
    return b.lb(b, c);
  }
  var d;
  d = ab[m(null == b ? null : b)];
  if (!d && (d = ab._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, bb = {}, cb = function cb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = cb[m(null == b ? null : b)];
  if (!c && (c = cb._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, db = function db(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = db[m(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, eb = function eb(b) {
  if (b ? b.Ca : b) {
    return b.Ca(b);
  }
  var c;
  c = eb[m(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, fb = function fb(b) {
  if (b ? b.Da : b) {
    return b.Da(b);
  }
  var c;
  c = fb[m(null == b ? null : b)];
  if (!c && (c = fb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, gb = {}, hb = function hb(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = hb[m(null == b ? null : b)];
  if (!e && (e = hb._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, jb = function jb(b) {
  if (b ? b.Hb : b) {
    return b.state;
  }
  var c;
  c = jb[m(null == b ? null : b)];
  if (!c && (c = jb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, kb = {}, lb = function lb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = lb[m(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, mb = {}, nb = function nb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = nb[m(null == b ? null : b)];
  if (!d && (d = nb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, ob = {}, qb = function qb() {
  switch(arguments.length) {
    case 2:
      return qb.b(arguments[0], arguments[1]);
    case 3:
      return qb.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
qb.b = function(a, b) {
  if (a ? a.R : a) {
    return a.R(a, b);
  }
  var c;
  c = qb[m(null == a ? null : a)];
  if (!c && (c = qb._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
qb.e = function(a, b, c) {
  if (a ? a.S : a) {
    return a.S(a, b, c);
  }
  var d;
  d = qb[m(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
qb.t = 3;
var rb = function rb(b, c) {
  if (b ? b.r : b) {
    return b.r(b, c);
  }
  var d;
  d = rb[m(null == b ? null : b)];
  if (!d && (d = rb._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, sb = function sb(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = sb[m(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, tb = {}, ub = function ub(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = ub[m(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, vb = {}, wb = function wb(b, c) {
  if (b ? b.Db : b) {
    return b.Db(0, c);
  }
  var d;
  d = wb[m(null == b ? null : b)];
  if (!d && (d = wb._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, xb = {}, yb = function yb(b, c, d) {
  if (b ? b.D : b) {
    return b.D(b, c, d);
  }
  var e;
  e = yb[m(null == b ? null : b)];
  if (!e && (e = yb._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, zb = function zb(b, c, d) {
  if (b ? b.Cb : b) {
    return b.Cb(0, c, d);
  }
  var e;
  e = zb[m(null == b ? null : b)];
  if (!e && (e = zb._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, Ab = function Ab(b) {
  if (b ? b.Ma : b) {
    return b.Ma(b);
  }
  var c;
  c = Ab[m(null == b ? null : b)];
  if (!c && (c = Ab._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Bb = function Bb(b, c) {
  if (b ? b.$a : b) {
    return b.$a(b, c);
  }
  var d;
  d = Bb[m(null == b ? null : b)];
  if (!d && (d = Bb._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Cb = function Cb(b) {
  if (b ? b.ab : b) {
    return b.ab(b);
  }
  var c;
  c = Cb[m(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Db = function Db(b, c, d) {
  if (b ? b.Pa : b) {
    return b.Pa(b, c, d);
  }
  var e;
  e = Db[m(null == b ? null : b)];
  if (!e && (e = Db._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Eb = function Eb(b, c, d) {
  if (b ? b.vb : b) {
    return b.vb(b, c, d);
  }
  var e;
  e = Eb[m(null == b ? null : b)];
  if (!e && (e = Eb._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Fb = function Fb(b) {
  if (b ? b.Ab : b) {
    return b.Ab();
  }
  var c;
  c = Fb[m(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.jb : b) {
    return b.jb(b);
  }
  var c;
  c = Gb[m(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b) {
  if (b ? b.kb : b) {
    return b.kb(b);
  }
  var c;
  c = Hb[m(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Ib = function Ib(b) {
  if (b ? b.ib : b) {
    return b.ib(b);
  }
  var c;
  c = Ib[m(null == b ? null : b)];
  if (!c && (c = Ib._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Jb = function Jb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = Jb[m(null == b ? null : b)];
  if (!c && (c = Jb._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, Kb = function Kb(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = Kb[m(null == b ? null : b)];
  if (!c && (c = Kb._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Mb = function Mb(b, c) {
  if (b ? b.Pb : b) {
    return b.Pb(b, c);
  }
  var d;
  d = Mb[m(null == b ? null : b)];
  if (!d && (d = Mb._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Nb = function Nb() {
  switch(arguments.length) {
    case 2:
      return Nb.b(arguments[0], arguments[1]);
    case 3:
      return Nb.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Nb.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Nb.v(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Nb.b = function(a, b) {
  if (a ? a.Qb : a) {
    return a.Qb(a, b);
  }
  var c;
  c = Nb[m(null == a ? null : a)];
  if (!c && (c = Nb._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Nb.e = function(a, b, c) {
  if (a ? a.Rb : a) {
    return a.Rb(a, b, c);
  }
  var d;
  d = Nb[m(null == a ? null : a)];
  if (!d && (d = Nb._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Nb.o = function(a, b, c, d) {
  if (a ? a.Sb : a) {
    return a.Sb(a, b, c, d);
  }
  var e;
  e = Nb[m(null == a ? null : a)];
  if (!e && (e = Nb._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Nb.v = function(a, b, c, d, e) {
  if (a ? a.Tb : a) {
    return a.Tb(a, b, c, d, e);
  }
  var f;
  f = Nb[m(null == a ? null : a)];
  if (!f && (f = Nb._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Nb.t = 5;
var Ob = function Ob(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = Ob[m(null == b ? null : b)];
  if (!c && (c = Ob._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Pb(a) {
  this.Yb = a;
  this.i = 1073741824;
  this.u = 0;
}
Pb.prototype.Db = function(a, b) {
  return this.Yb.append(b);
};
function Qb(a) {
  var b = new la;
  a.D(null, new Pb(b), va());
  return "" + A(b);
}
var Rb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.b ? Math.imul.b(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Sb(a) {
  a = Rb(a | 0, -862048943);
  return Rb(a << 15 | a >>> -15, 461845907);
}
function Tb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Rb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Ub(a, b) {
  var c = (a | 0) ^ b, c = Rb(c ^ c >>> 16, -2048144789), c = Rb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Vb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Tb(c, Sb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Sb(a.charCodeAt(a.length - 1)) : b;
  return Ub(b, Rb(2, a.length));
}
var Wb = {}, Xb = 0;
function Yb(a) {
  255 < Xb && (Wb = {}, Xb = 0);
  var b = Wb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Rb(31, d) + a.charCodeAt(c), c = e
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
    Wb[a] = b;
    Xb += 1;
  }
  return a = b;
}
function Zb(a) {
  a && (a.i & 4194304 || a.ac) ? a = a.C(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Yb(a), 0 !== a && (a = Sb(a), a = Tb(0, a), a = Ub(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : sb(a);
  return a;
}
function $b(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function bc(a, b) {
  if (a.xa === b.xa) {
    return 0;
  }
  var c = Ea(a.ja);
  if (w(c ? b.ja : c)) {
    return-1;
  }
  if (w(a.ja)) {
    if (Ea(b.ja)) {
      return 1;
    }
    c = oa(a.ja, b.ja);
    return 0 === c ? oa(a.name, b.name) : c;
  }
  return oa(a.name, b.name);
}
function cc(a, b, c, d, e) {
  this.ja = a;
  this.name = b;
  this.xa = c;
  this.Ka = d;
  this.na = e;
  this.i = 2154168321;
  this.u = 4096;
}
h = cc.prototype;
h.toString = function() {
  return this.xa;
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.r = function(a, b) {
  return b instanceof cc ? this.xa === b.xa : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ya.e(c, this, null);
      case 3:
        return Ya.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return Ya.e(c, this, null);
  };
  a.e = function(a, c, d) {
    return Ya.e(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return Ya.e(a, this, null);
};
h.b = function(a, b) {
  return Ya.e(a, this, b);
};
h.I = function() {
  return this.na;
};
h.L = function(a, b) {
  return new cc(this.ja, this.name, this.xa, this.Ka, b);
};
h.C = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = $b(Vb(this.name), Yb(this.ja));
};
h.Xa = function() {
  return this.name;
};
h.Ya = function() {
  return this.ja;
};
h.D = function(a, b) {
  return wb(b, this.xa);
};
function dc(a) {
  var b = [A("figwheel-test.snake"), A("/"), A(a)].join("");
  return new cc("figwheel-test.snake", a, b, null, null);
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.bc)) {
    return a.K(null);
  }
  if (Da(a) || "string" === typeof a) {
    return 0 === a.length ? null : new D(a, 0);
  }
  if (y(tb, a)) {
    return ub(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Za)) {
    return a.U(null);
  }
  a = C(a);
  return null == a ? null : Ta(a);
}
function ec(a) {
  return null != a ? a && (a.i & 64 || a.Za) ? a.la(null) : (a = C(a)) ? Ua(a) : fc : fc;
}
function H(a) {
  return null == a ? null : a && (a.i & 128 || a.mb) ? a.ka(null) : C(ec(a));
}
var gc = function gc() {
  switch(arguments.length) {
    case 1:
      return gc.a(arguments[0]);
    case 2:
      return gc.b(arguments[0], arguments[1]);
    default:
      return gc.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
gc.a = function() {
  return!0;
};
gc.b = function(a, b) {
  return null == a ? null == b : a === b || rb(a, b);
};
gc.j = function(a, b, c) {
  for (;;) {
    if (gc.b(a, b)) {
      if (H(c)) {
        a = b, b = F(c), c = H(c);
      } else {
        return gc.b(b, F(c));
      }
    } else {
      return!1;
    }
  }
};
gc.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return gc.j(b, a, c);
};
gc.t = 2;
function hc(a) {
  this.A = a;
}
hc.prototype.next = function() {
  if (null != this.A) {
    var a = F(this.A);
    this.A = H(this.A);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function ic(a) {
  return new hc(C(a));
}
function jc(a, b) {
  var c = Sb(a), c = Tb(0, c);
  return Ub(c, b);
}
function kc(a) {
  var b = 0, c = 1;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = Rb(31, c) + Zb(F(a)) | 0, a = H(a);
    } else {
      return jc(c, b);
    }
  }
}
var lc = jc(1, 0);
function mc(a) {
  var b = 0, c = 0;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = c + Zb(F(a)) | 0, a = H(a);
    } else {
      return jc(c, b);
    }
  }
}
var nc = jc(0, 0);
La["null"] = !0;
Na["null"] = function() {
  return 0;
};
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Date.prototype.Ua = !0;
Date.prototype.La = function(a, b) {
  return oa(this.valueOf(), b.valueOf());
};
rb.number = function(a, b) {
  return a === b;
};
Ka["function"] = !0;
kb["function"] = !0;
lb["function"] = function() {
  return null;
};
sb._ = function(a) {
  return a[fa] || (a[fa] = ++ha);
};
function pc(a) {
  return a + 1;
}
function J(a) {
  return jb(a);
}
function qc(a, b) {
  var c = Na(a);
  if (0 === c) {
    return b.n ? b.n() : b.call(null);
  }
  for (var d = B.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function rc(a, b, c) {
  var d = Na(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function sc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.n ? b.n() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function tc(a, b, c) {
  var d = a.length, e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = a[c], e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function uc(a, b, c, d) {
  for (var e = a.length;;) {
    if (d < e) {
      var f = a[d];
      c = b.b ? b.b(c, f) : b.call(null, c, f);
      d += 1;
    } else {
      return c;
    }
  }
}
function vc(a) {
  return a ? a.i & 2 || a.Gb ? !0 : a.i ? !1 : y(La, a) : y(La, a);
}
function wc(a) {
  return a ? a.i & 16 || a.Bb ? !0 : a.i ? !1 : y(Qa, a) : y(Qa, a);
}
function xc(a, b) {
  this.c = a;
  this.l = b;
}
xc.prototype.pb = function() {
  return this.l < this.c.length;
};
xc.prototype.next = function() {
  var a = this.c[this.l];
  this.l += 1;
  return a;
};
function D(a, b) {
  this.c = a;
  this.l = b;
  this.i = 166199550;
  this.u = 8192;
}
h = D.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.G = function(a, b) {
  var c = b + this.l;
  return c < this.c.length ? this.c[c] : null;
};
h.T = function(a, b, c) {
  a = b + this.l;
  return a < this.c.length ? this.c[a] : c;
};
h.Wa = function() {
  return new xc(this.c, this.l);
};
h.ka = function() {
  return this.l + 1 < this.c.length ? new D(this.c, this.l + 1) : null;
};
h.P = function() {
  return this.c.length - this.l;
};
h.C = function() {
  return kc(this);
};
h.r = function(a, b) {
  return yc.b ? yc.b(this, b) : yc.call(null, this, b);
};
h.N = function() {
  return fc;
};
h.R = function(a, b) {
  return uc(this.c, b, this.c[this.l], this.l + 1);
};
h.S = function(a, b, c) {
  return uc(this.c, b, c, this.l);
};
h.U = function() {
  return this.c[this.l];
};
h.la = function() {
  return this.l + 1 < this.c.length ? new D(this.c, this.l + 1) : fc;
};
h.K = function() {
  return this;
};
h.J = function(a, b) {
  return zc.b ? zc.b(b, this) : zc.call(null, b, this);
};
D.prototype[Ha] = function() {
  return ic(this);
};
function Ac(a, b) {
  return b < a.length ? new D(a, b) : null;
}
function Bc() {
  switch(arguments.length) {
    case 1:
      return Ac(arguments[0], 0);
    case 2:
      return Ac(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Cc(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return F(a);
    }
  }
}
rb._ = function(a, b) {
  return a === b;
};
var Dc = function Dc() {
  switch(arguments.length) {
    case 0:
      return Dc.n();
    case 1:
      return Dc.a(arguments[0]);
    case 2:
      return Dc.b(arguments[0], arguments[1]);
    default:
      return Dc.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Dc.n = function() {
  return Ec;
};
Dc.a = function(a) {
  return a;
};
Dc.b = function(a, b) {
  return null != a ? Pa(a, b) : Pa(fc, b);
};
Dc.j = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = Dc.b(a, b), b = F(c), c = H(c);
    } else {
      return Dc.b(a, b);
    }
  }
};
Dc.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Dc.j(b, a, c);
};
Dc.t = 2;
function Fc(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.Gb)) {
      a = a.P(null);
    } else {
      if (Da(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(La, a)) {
            a = Na(a);
          } else {
            a: {
              a = C(a);
              for (var b = 0;;) {
                if (vc(a)) {
                  a = b + Na(a);
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
function Gc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return C(a) ? F(a) : c;
    }
    if (wc(a)) {
      return B.e(a, b, c);
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
function Hc(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.i & 16 || a.Bb)) {
    return a.G(null, b);
  }
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Qa, a)) {
    return B.b(a, b);
  }
  if (a ? a.i & 64 || a.Za || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (null == c) {
          throw Error("Index out of bounds");
        }
        if (0 === d) {
          if (C(c)) {
            c = F(c);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (wc(c)) {
          c = B.b(c, d);
          break a;
        }
        if (C(c)) {
          c = H(c), --d;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return c;
  }
  throw Error([A("nth not supported on this type "), A(Ga(Fa(a)))].join(""));
}
function L(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.Bb)) {
    return a.T(null, b, null);
  }
  if (Da(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Qa, a)) {
    return B.b(a, b);
  }
  if (a ? a.i & 64 || a.Za || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) {
    return Gc(a, b);
  }
  throw Error([A("nth not supported on this type "), A(Ga(Fa(a)))].join(""));
}
function M(a, b) {
  return null == a ? null : a && (a.i & 256 || a.Jb) ? a.B(null, b) : Da(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Xa, a) ? Ya.b(a, b) : null;
}
function Ic(a, b, c) {
  return null != a ? a && (a.i & 256 || a.Jb) ? a.w(null, b, c) : Da(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Xa, a) ? Ya.e(a, b, c) : c : c;
}
var Jc = function Jc() {
  switch(arguments.length) {
    case 3:
      return Jc.e(arguments[0], arguments[1], arguments[2]);
    default:
      return Jc.j(arguments[0], arguments[1], arguments[2], new D(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Jc.e = function(a, b, c) {
  return null != a ? Za(a, b, c) : Kc([b], [c]);
};
Jc.j = function(a, b, c, d) {
  for (;;) {
    if (a = Jc.e(a, b, c), w(d)) {
      b = F(d), c = F(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
Jc.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), d = H(d);
  return Jc.j(b, a, c, d);
};
Jc.t = 3;
var Mc = function Mc() {
  switch(arguments.length) {
    case 1:
      return Mc.a(arguments[0]);
    case 2:
      return Mc.b(arguments[0], arguments[1]);
    default:
      return Mc.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Mc.a = function(a) {
  return a;
};
Mc.b = function(a, b) {
  return null == a ? null : ab(a, b);
};
Mc.j = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Mc.b(a, b);
    if (w(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Mc.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Mc.j(b, a, c);
};
Mc.t = 2;
function Nc(a) {
  var b = "function" == m(a);
  return w(b) ? b : a ? w(w(null) ? null : a.Fb) ? !0 : a.gc ? !1 : y(Ka, a) : y(Ka, a);
}
function Oc(a, b) {
  this.f = a;
  this.h = b;
  this.i = 393217;
  this.u = 0;
}
h = Oc.prototype;
h.I = function() {
  return this.h;
};
h.L = function(a, b) {
  return new Oc(this.f, b);
};
h.Fb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P, ba) {
    a = this.f;
    return Pc.Va ? Pc.Va(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P, ba) : Pc.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P, ba);
  }
  function b(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P) {
    a = this;
    return a.f.ea ? a.f.ea(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G, P);
  }
  function c(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G) {
    a = this;
    return a.f.da ? a.f.da(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, G);
  }
  function d(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) {
    a = this;
    return a.f.ca ? a.f.ca(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K);
  }
  function e(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) {
    a = this;
    return a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I);
  }
  function f(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
    a = this;
    return a.f.aa ? a.f.aa(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
  }
  function g(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
    a = this;
    return a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
    a = this;
    return a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, p, q, r, t, u, v) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
    a = this;
    return a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, p, q, r, t, u) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, p, q, r, t) {
    a = this;
    return a.f.X ? a.f.X(b, c, d, e, f, g, k, l, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, p, q, r) {
    a = this;
    return a.f.W ? a.f.W(b, c, d, e, f, g, k, l, p, q, r) : a.f.call(null, b, c, d, e, f, g, k, l, p, q, r);
  }
  function r(a, b, c, d, e, f, g, k, l, p, q) {
    a = this;
    return a.f.V ? a.f.V(b, c, d, e, f, g, k, l, p, q) : a.f.call(null, b, c, d, e, f, g, k, l, p, q);
  }
  function t(a, b, c, d, e, f, g, k, l, p) {
    a = this;
    return a.f.ha ? a.f.ha(b, c, d, e, f, g, k, l, p) : a.f.call(null, b, c, d, e, f, g, k, l, p);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.f.ga ? a.f.ga(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    return a.f.fa ? a.f.fa(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    return a.f.O ? a.f.O(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.f.v ? a.f.v(b, c, d, e, f) : a.f.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    return a.f.o ? a.f.o(b, c, d, e) : a.f.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.f.e ? a.f.e(b, c, d) : a.f.call(null, b, c, d);
  }
  function P(a, b, c) {
    a = this;
    return a.f.b ? a.f.b(b, c) : a.f.call(null, b, c);
  }
  function ba(a, b) {
    a = this;
    return a.f.a ? a.f.a(b) : a.f.call(null, b);
  }
  function sa(a) {
    a = this;
    return a.f.n ? a.f.n() : a.f.call(null);
  }
  var G = null, G = function(Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb, ac, Lc, Od, qf) {
    switch(arguments.length) {
      case 1:
        return sa.call(this, Ma);
      case 2:
        return ba.call(this, Ma, aa);
      case 3:
        return P.call(this, Ma, aa, ea);
      case 4:
        return K.call(this, Ma, aa, ea, ga);
      case 5:
        return I.call(this, Ma, aa, ea, ga, ia);
      case 6:
        return E.call(this, Ma, aa, ea, ga, ia, ma);
      case 7:
        return x.call(this, Ma, aa, ea, ga, ia, ma, na);
      case 8:
        return v.call(this, Ma, aa, ea, ga, ia, ma, na, qa);
      case 9:
        return u.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua);
      case 10:
        return t.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya);
      case 11:
        return r.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca);
      case 12:
        return q.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia);
      case 13:
        return p.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra);
      case 14:
        return l.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa);
      case 15:
        return k.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G);
      case 16:
        return g.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib);
      case 17:
        return f.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb);
      case 18:
        return e.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb);
      case 19:
        return d.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb, ac);
      case 20:
        return c.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb, ac, Lc);
      case 21:
        return b.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb, ac, Lc, Od);
      case 22:
        return a.call(this, Ma, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, G, ib, pb, Lb, ac, Lc, Od, qf);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  G.a = sa;
  G.b = ba;
  G.e = P;
  G.o = K;
  G.v = I;
  G.O = E;
  G.fa = x;
  G.ga = v;
  G.ha = u;
  G.V = t;
  G.W = r;
  G.X = q;
  G.Y = p;
  G.Z = l;
  G.$ = k;
  G.aa = g;
  G.ba = f;
  G.ca = e;
  G.da = d;
  G.ea = c;
  G.ub = b;
  G.Va = a;
  return G;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.n = function() {
  return this.f.n ? this.f.n() : this.f.call(null);
};
h.a = function(a) {
  return this.f.a ? this.f.a(a) : this.f.call(null, a);
};
h.b = function(a, b) {
  return this.f.b ? this.f.b(a, b) : this.f.call(null, a, b);
};
h.e = function(a, b, c) {
  return this.f.e ? this.f.e(a, b, c) : this.f.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  return this.f.o ? this.f.o(a, b, c, d) : this.f.call(null, a, b, c, d);
};
h.v = function(a, b, c, d, e) {
  return this.f.v ? this.f.v(a, b, c, d, e) : this.f.call(null, a, b, c, d, e);
};
h.O = function(a, b, c, d, e, f) {
  return this.f.O ? this.f.O(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f);
};
h.fa = function(a, b, c, d, e, f, g) {
  return this.f.fa ? this.f.fa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g);
};
h.ga = function(a, b, c, d, e, f, g, k) {
  return this.f.ga ? this.f.ga(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k);
};
h.ha = function(a, b, c, d, e, f, g, k, l) {
  return this.f.ha ? this.f.ha(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l);
};
h.V = function(a, b, c, d, e, f, g, k, l, p) {
  return this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q) {
  return this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  return this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  return this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  return this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  return this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.aa = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  return this.f.aa ? this.f.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.ba = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  return this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.ca = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) {
  return this.f.ca ? this.f.ca(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I);
};
h.da = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) {
  return this.f.da ? this.f.da(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K);
};
h.ea = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) {
  return this.f.ea ? this.f.ea(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P);
};
h.ub = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba) {
  var sa = this.f;
  return Pc.Va ? Pc.Va(sa, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba) : Pc.call(null, sa, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba);
};
function Qc(a, b) {
  return Nc(a) && !(a ? a.i & 262144 || a.ec || (a.i ? 0 : y(mb, a)) : y(mb, a)) ? new Oc(a, b) : null == a ? null : nb(a, b);
}
function Rc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Mb || (a.i ? 0 : y(kb, a)) : y(kb, a) : b) ? lb(a) : null;
}
function Sc(a) {
  return null == a || Ea(C(a));
}
function Tc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Kb ? !0 : a.i ? !1 : y($a, a) : y($a, a);
}
function Uc(a) {
  return a ? a.i & 16384 || a.dc ? !0 : a.i ? !1 : y(gb, a) : y(gb, a);
}
function Vc(a) {
  return a ? a.u & 512 || a.$b ? !0 : !1 : !1;
}
function Wc(a) {
  var b = [];
  ka(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Xc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Yc = {};
function Zc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Za ? !0 : a.i ? !1 : y(Sa, a) : y(Sa, a);
}
function $c(a) {
  return w(a) ? !0 : !1;
}
function ad(a, b) {
  return Ic(a, b, Yc) === Yc ? !1 : !0;
}
function bd(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Fa(a) === Fa(b)) {
    return a && (a.u & 2048 || a.Ua) ? a.La(null, b) : oa(a, b);
  }
  throw Error("compare on non-nil objects of different types");
}
function cd(a, b) {
  var c = Fc(a), d = Fc(b);
  if (c < d) {
    c = -1;
  } else {
    if (c > d) {
      c = 1;
    } else {
      if (0 === c) {
        c = 0;
      } else {
        a: {
          for (d = 0;;) {
            var e = bd(Hc(a, d), Hc(b, d));
            if (0 === e && d + 1 < c) {
              d += 1;
            } else {
              c = e;
              break a;
            }
          }
        }
      }
    }
  }
  return c;
}
function dd(a, b) {
  var c = C(b);
  if (c) {
    var d = F(c), c = H(c);
    return ed ? ed(a, d, c) : fd.call(null, a, d, c);
  }
  return a.n ? a.n() : a.call(null);
}
function gd(a, b, c) {
  for (c = C(c);;) {
    if (c) {
      var d = F(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = H(c);
    } else {
      return b;
    }
  }
}
function fd() {
  switch(arguments.length) {
    case 2:
      return hd(arguments[0], arguments[1]);
    case 3:
      return ed(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function hd(a, b) {
  return b && (b.i & 524288 || b.Ob) ? b.R(null, a) : Da(b) ? sc(b, a) : "string" === typeof b ? sc(b, a) : y(ob, b) ? qb.b(b, a) : dd(a, b);
}
function ed(a, b, c) {
  return c && (c.i & 524288 || c.Ob) ? c.S(null, a, b) : Da(c) ? tc(c, a, b) : "string" === typeof c ? tc(c, a, b) : y(ob, c) ? qb.e(c, a, b) : gd(a, b, c);
}
function id(a) {
  return a;
}
function jd(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = ed(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var kd = function kd() {
  switch(arguments.length) {
    case 0:
      return kd.n();
    case 1:
      return kd.a(arguments[0]);
    case 2:
      return kd.b(arguments[0], arguments[1]);
    default:
      return kd.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
kd.n = function() {
  return 0;
};
kd.a = function(a) {
  return a;
};
kd.b = function(a, b) {
  return a + b;
};
kd.j = function(a, b, c) {
  return ed(kd, a + b, c);
};
kd.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return kd.j(b, a, c);
};
kd.t = 2;
var ld = function ld() {
  switch(arguments.length) {
    case 1:
      return ld.a(arguments[0]);
    case 2:
      return ld.b(arguments[0], arguments[1]);
    default:
      return ld.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ld.a = function(a) {
  return-a;
};
ld.b = function(a, b) {
  return a - b;
};
ld.j = function(a, b, c) {
  return ed(ld, a - b, c);
};
ld.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return ld.j(b, a, c);
};
ld.t = 2;
var md = function md() {
  switch(arguments.length) {
    case 1:
      return md.a(arguments[0]);
    case 2:
      return md.b(arguments[0], arguments[1]);
    default:
      return md.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
md.a = function(a) {
  return a;
};
md.b = function(a, b) {
  return a > b ? a : b;
};
md.j = function(a, b, c) {
  return ed(md, a > b ? a : b, c);
};
md.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return md.j(b, a, c);
};
md.t = 2;
function nd(a, b) {
  return(a % b + b) % b;
}
function od(a) {
  a = (a - a % 2) / 2;
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
}
function pd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function qd(a) {
  var b = 1;
  for (a = C(a);;) {
    if (a && 0 < b) {
      --b, a = H(a);
    } else {
      return a;
    }
  }
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.n();
    case 1:
      return A.a(arguments[0]);
    default:
      return A.j(arguments[0], new D(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.n = function() {
  return "";
};
A.a = function(a) {
  return null == a ? "" : ja(a);
};
A.j = function(a, b) {
  for (var c = new la("" + A(a)), d = b;;) {
    if (w(d)) {
      c = c.append("" + A(F(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
A.s = function(a) {
  var b = F(a);
  a = H(a);
  return A.j(b, a);
};
A.t = 1;
function yc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.cc || (b.i ? 0 : y(vb, b)) : y(vb, b)) {
    if (vc(a) && vc(b) && Fc(a) !== Fc(b)) {
      c = !1;
    } else {
      a: {
        c = C(a);
        for (var d = C(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && gc.b(F(c), F(d))) {
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
  return $c(c);
}
function rd(a) {
  if (C(a)) {
    var b = Zb(F(a));
    for (a = H(a);;) {
      if (null == a) {
        return b;
      }
      b = $b(b, Zb(F(a)));
      a = H(a);
    }
  } else {
    return 0;
  }
}
function sd(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.Ba = c;
  this.count = d;
  this.m = e;
  this.i = 65937646;
  this.u = 8192;
}
h = sd.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  return 1 === this.count ? null : this.Ba;
};
h.P = function() {
  return this.count;
};
h.Ca = function() {
  return this.first;
};
h.Da = function() {
  return Ua(this);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return nb(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return this.first;
};
h.la = function() {
  return 1 === this.count ? fc : this.Ba;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new sd(b, this.first, this.Ba, this.count, this.m);
};
h.J = function(a, b) {
  return new sd(this.h, b, this, this.count + 1, null);
};
sd.prototype[Ha] = function() {
  return ic(this);
};
function td(a) {
  this.h = a;
  this.i = 65937614;
  this.u = 8192;
}
h = td.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  return null;
};
h.P = function() {
  return 0;
};
h.Ca = function() {
  return null;
};
h.Da = function() {
  throw Error("Can't pop empty list");
};
h.C = function() {
  return lc;
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return this;
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return null;
};
h.la = function() {
  return fc;
};
h.K = function() {
  return null;
};
h.L = function(a, b) {
  return new td(b);
};
h.J = function(a, b) {
  return new sd(this.h, b, null, 1, null);
};
var fc = new td(null);
td.prototype[Ha] = function() {
  return ic(this);
};
var ud = function ud() {
  return ud.j(0 < arguments.length ? new D(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ud.j = function(a) {
  var b;
  if (a instanceof D && 0 === a.l) {
    b = a.c;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.U(null)), a = a.ka(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = fc;;) {
    if (0 < a) {
      var d = a - 1, c = c.J(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
ud.t = 0;
ud.s = function(a) {
  return ud.j(C(a));
};
function vd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.Ba = c;
  this.m = d;
  this.i = 65929452;
  this.u = 8192;
}
h = vd.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  return null == this.Ba ? null : C(this.Ba);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return this.first;
};
h.la = function() {
  return null == this.Ba ? fc : this.Ba;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new vd(b, this.first, this.Ba, this.m);
};
h.J = function(a, b) {
  return new vd(null, b, this, this.m);
};
vd.prototype[Ha] = function() {
  return ic(this);
};
function zc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.Za)) ? new vd(null, a, b, null) : new vd(null, a, C(b), null);
}
function wd(a, b) {
  if (a.ra === b.ra) {
    return 0;
  }
  var c = Ea(a.ja);
  if (w(c ? b.ja : c)) {
    return-1;
  }
  if (w(a.ja)) {
    if (Ea(b.ja)) {
      return 1;
    }
    c = oa(a.ja, b.ja);
    return 0 === c ? oa(a.name, b.name) : c;
  }
  return oa(a.name, b.name);
}
function N(a, b, c, d) {
  this.ja = a;
  this.name = b;
  this.ra = c;
  this.Ka = d;
  this.i = 2153775105;
  this.u = 4096;
}
h = N.prototype;
h.toString = function() {
  return[A(":"), A(this.ra)].join("");
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.r = function(a, b) {
  return b instanceof N ? this.ra === b.ra : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return M(c, this);
      case 3:
        return Ic(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return M(c, this);
  };
  a.e = function(a, c, d) {
    return Ic(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return M(a, this);
};
h.b = function(a, b) {
  return Ic(a, this, b);
};
h.C = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = $b(Vb(this.name), Yb(this.ja)) + 2654435769 | 0;
};
h.Xa = function() {
  return this.name;
};
h.Ya = function() {
  return this.ja;
};
h.D = function(a, b) {
  return wb(b, [A(":"), A(this.ra)].join(""));
};
var xd = function xd() {
  switch(arguments.length) {
    case 1:
      return xd.a(arguments[0]);
    case 2:
      return xd.b(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
xd.a = function(a) {
  if (a instanceof N) {
    return a;
  }
  if (a instanceof cc) {
    var b;
    if (a && (a.u & 4096 || a.Nb)) {
      b = a.Ya(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new N(b, yd.a ? yd.a(a) : yd.call(null, a), a.xa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new N(b[0], b[1], a, null) : new N(null, b[0], a, null)) : null;
};
xd.b = function(a, b) {
  return new N(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
xd.t = 2;
function zd(a, b, c, d) {
  this.h = a;
  this.Ra = b;
  this.A = c;
  this.m = d;
  this.i = 32374988;
  this.u = 0;
}
h = zd.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
function Ad(a) {
  null != a.Ra && (a.A = a.Ra.n ? a.Ra.n() : a.Ra.call(null), a.Ra = null);
  return a.A;
}
h.I = function() {
  return this.h;
};
h.ka = function() {
  ub(this);
  return null == this.A ? null : H(this.A);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  ub(this);
  return null == this.A ? null : F(this.A);
};
h.la = function() {
  ub(this);
  return null != this.A ? ec(this.A) : fc;
};
h.K = function() {
  Ad(this);
  if (null == this.A) {
    return null;
  }
  for (var a = this.A;;) {
    if (a instanceof zd) {
      a = Ad(a);
    } else {
      return this.A = a, C(this.A);
    }
  }
};
h.L = function(a, b) {
  return new zd(b, this.Ra, this.A, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
zd.prototype[Ha] = function() {
  return ic(this);
};
function Bd(a, b) {
  this.tb = a;
  this.end = b;
  this.i = 2;
  this.u = 0;
}
Bd.prototype.add = function(a) {
  this.tb[this.end] = a;
  return this.end += 1;
};
Bd.prototype.ta = function() {
  var a = new Cd(this.tb, 0, this.end);
  this.tb = null;
  return a;
};
Bd.prototype.P = function() {
  return this.end;
};
function Cd(a, b, c) {
  this.c = a;
  this.F = b;
  this.end = c;
  this.i = 524306;
  this.u = 0;
}
h = Cd.prototype;
h.P = function() {
  return this.end - this.F;
};
h.G = function(a, b) {
  return this.c[this.F + b];
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.end - this.F ? this.c[this.F + b] : c;
};
h.Ab = function() {
  if (this.F === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Cd(this.c, this.F + 1, this.end);
};
h.R = function(a, b) {
  return uc(this.c, b, this.c[this.F], this.F + 1);
};
h.S = function(a, b, c) {
  return uc(this.c, b, c, this.F);
};
function Dd(a, b, c, d) {
  this.ta = a;
  this.wa = b;
  this.h = c;
  this.m = d;
  this.i = 31850732;
  this.u = 1536;
}
h = Dd.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  if (1 < Na(this.ta)) {
    return new Dd(Fb(this.ta), this.wa, this.h, null);
  }
  var a = ub(this.wa);
  return null == a ? null : a;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.U = function() {
  return B.b(this.ta, 0);
};
h.la = function() {
  return 1 < Na(this.ta) ? new Dd(Fb(this.ta), this.wa, this.h, null) : null == this.wa ? fc : this.wa;
};
h.K = function() {
  return this;
};
h.jb = function() {
  return this.ta;
};
h.kb = function() {
  return null == this.wa ? fc : this.wa;
};
h.L = function(a, b) {
  return new Dd(this.ta, this.wa, b, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
h.ib = function() {
  return null == this.wa ? null : this.wa;
};
Dd.prototype[Ha] = function() {
  return ic(this);
};
function Ed(a, b) {
  return 0 === Na(a) ? b : new Dd(a, b, null, null);
}
function Fd(a, b) {
  a.add(b);
}
function Gd(a) {
  for (var b = [];;) {
    if (C(a)) {
      b.push(F(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function Hd(a, b) {
  if (vc(a)) {
    return Fc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && C(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Id = function Id(b) {
  return null == b ? null : null == H(b) ? C(F(b)) : zc(F(b), Id(H(b)));
}, Jd = function Jd() {
  switch(arguments.length) {
    case 0:
      return Jd.n();
    case 1:
      return Jd.a(arguments[0]);
    case 2:
      return Jd.b(arguments[0], arguments[1]);
    default:
      return Jd.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Jd.n = function() {
  return new zd(null, function() {
    return null;
  }, null, null);
};
Jd.a = function(a) {
  return new zd(null, function() {
    return a;
  }, null, null);
};
Jd.b = function(a, b) {
  return new zd(null, function() {
    var c = C(a);
    return c ? Vc(c) ? Ed(Gb(c), Jd.b(Hb(c), b)) : zc(F(c), Jd.b(ec(c), b)) : b;
  }, null, null);
};
Jd.j = function(a, b, c) {
  return function e(a, b) {
    return new zd(null, function() {
      var c = C(a);
      return c ? Vc(c) ? Ed(Gb(c), e(Hb(c), b)) : zc(F(c), e(ec(c), b)) : w(b) ? e(F(b), H(b)) : null;
    }, null, null);
  }(Jd.b(a, b), c);
};
Jd.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Jd.j(b, a, c);
};
Jd.t = 2;
var Kd = function Kd() {
  switch(arguments.length) {
    case 0:
      return Kd.n();
    case 1:
      return Kd.a(arguments[0]);
    case 2:
      return Kd.b(arguments[0], arguments[1]);
    default:
      return Kd.j(arguments[0], arguments[1], new D(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Kd.n = function() {
  return Ab(Ec);
};
Kd.a = function(a) {
  return a;
};
Kd.b = function(a, b) {
  return Bb(a, b);
};
Kd.j = function(a, b, c) {
  for (;;) {
    if (a = Bb(a, b), w(c)) {
      b = F(c), c = H(c);
    } else {
      return a;
    }
  }
};
Kd.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  c = H(c);
  return Kd.j(b, a, c);
};
Kd.t = 2;
function Ld(a, b, c) {
  var d = C(c);
  if (0 === b) {
    return a.n ? a.n() : a.call(null);
  }
  c = Ta(d);
  var e = Ua(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Ta(e), f = Ua(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Ta(f), g = Ua(f);
  if (3 === b) {
    return a.e ? a.e(c, d, e) : a.e ? a.e(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ta(g), k = Ua(g);
  if (4 === b) {
    return a.o ? a.o(c, d, e, f) : a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ta(k), l = Ua(k);
  if (5 === b) {
    return a.v ? a.v(c, d, e, f, g) : a.v ? a.v(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Ta(l), p = Ua(l);
  if (6 === b) {
    return a.O ? a.O(c, d, e, f, g, k) : a.O ? a.O(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Ta(p), q = Ua(p);
  if (7 === b) {
    return a.fa ? a.fa(c, d, e, f, g, k, l) : a.fa ? a.fa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var p = Ta(q), r = Ua(q);
  if (8 === b) {
    return a.ga ? a.ga(c, d, e, f, g, k, l, p) : a.ga ? a.ga(c, d, e, f, g, k, l, p) : a.call(null, c, d, e, f, g, k, l, p);
  }
  var q = Ta(r), t = Ua(r);
  if (9 === b) {
    return a.ha ? a.ha(c, d, e, f, g, k, l, p, q) : a.ha ? a.ha(c, d, e, f, g, k, l, p, q) : a.call(null, c, d, e, f, g, k, l, p, q);
  }
  var r = Ta(t), u = Ua(t);
  if (10 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, p, q, r) : a.V ? a.V(c, d, e, f, g, k, l, p, q, r) : a.call(null, c, d, e, f, g, k, l, p, q, r);
  }
  var t = Ta(u), v = Ua(u);
  if (11 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t) : a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, p, q, r, t);
  }
  var u = Ta(v), x = Ua(v);
  if (12 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u) : a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u);
  }
  var v = Ta(x), E = Ua(x);
  if (13 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v);
  }
  var x = Ta(E), I = Ua(E);
  if (14 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
  }
  var E = Ta(I), K = Ua(I);
  if (15 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
  }
  var I = Ta(K), P = Ua(K);
  if (16 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : a.aa ? a.aa(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I);
  }
  var K = Ta(P), ba = Ua(P);
  if (17 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : a.ba ? a.ba(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K);
  }
  var P = Ta(ba), sa = Ua(ba);
  if (18 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) : a.ca ? a.ca(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P);
  }
  ba = Ta(sa);
  sa = Ua(sa);
  if (19 === b) {
    return a.da ? a.da(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba) : a.da ? a.da(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba);
  }
  var G = Ta(sa);
  Ua(sa);
  if (20 === b) {
    return a.ea ? a.ea(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba, G) : a.ea ? a.ea(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba, G) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba, G);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Pc() {
  switch(arguments.length) {
    case 2:
      return Md(arguments[0], arguments[1]);
    case 3:
      return Nd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = zc(arguments[1], zc(arguments[2], arguments[3])), c = a.t;
      if (a.s) {
        var d = Hd(b, c + 1);
        a = d <= c ? Ld(a, d, b) : a.s(b);
      } else {
        a = a.apply(a, Gd(b));
      }
      return a;
    case 5:
      return Pd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Qd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new D(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Md(a, b) {
  var c = a.t;
  if (a.s) {
    var d = Hd(b, c + 1);
    return d <= c ? Ld(a, d, b) : a.s(b);
  }
  return a.apply(a, Gd(b));
}
function Nd(a, b, c) {
  b = zc(b, c);
  c = a.t;
  if (a.s) {
    var d = Hd(b, c + 1);
    return d <= c ? Ld(a, d, b) : a.s(b);
  }
  return a.apply(a, Gd(b));
}
function Pd(a, b, c, d, e) {
  b = zc(b, zc(c, zc(d, e)));
  c = a.t;
  return a.s ? (d = Hd(b, c + 1), d <= c ? Ld(a, d, b) : a.s(b)) : a.apply(a, Gd(b));
}
function Qd(a, b, c, d, e, f) {
  b = zc(b, zc(c, zc(d, zc(e, Id(f)))));
  c = a.t;
  return a.s ? (d = Hd(b, c + 1), d <= c ? Ld(a, d, b) : a.s(b)) : a.apply(a, Gd(b));
}
function Rd(a) {
  return C(a) ? a : null;
}
function Sd(a, b) {
  for (;;) {
    if (null == C(b)) {
      return!0;
    }
    var c;
    c = F(b);
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
function Td(a, b) {
  for (;;) {
    if (C(b)) {
      var c;
      c = F(b);
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
function Ud(a, b) {
  return function() {
    function c(c, d, e) {
      c = b.e ? b.e(c, d, e) : b.call(null, c, d, e);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.b ? b.b(c, d) : b.call(null, c, d);
      return a.a ? a.a(e) : a.call(null, e);
    }
    function e(c) {
      c = b.a ? b.a(c) : b.call(null, c);
      return a.a ? a.a(c) : a.call(null, c);
    }
    function f() {
      var c = b.n ? b.n() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new D(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Pd(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.t = 3;
      c.s = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = ec(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            t = new D(u, 0);
          }
          return k.j(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.s = k.s;
    g.n = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.j = k.j;
    return g;
  }();
}
function Vd() {
  var a = Wd(Xd, "16px serif"), b = Wd(A, "Level "), c = Yd;
  return function() {
    function d(d, e, f) {
      d = c.e ? c.e(d, e, f) : c.call(null, d, e, f);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function e(d, e) {
      var f;
      f = c.b ? c.b(d, e) : c.call(null, d, e);
      f = b.a ? b.a(f) : b.call(null, f);
      return a.a ? a.a(f) : a.call(null, f);
    }
    function f(d) {
      d = c.a ? c.a(d) : c.call(null, d);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    function g() {
      var d;
      d = c.n ? c.n() : c.call(null);
      d = b.a ? b.a(d) : b.call(null, d);
      return a.a ? a.a(d) : a.call(null, d);
    }
    var k = null, l = function() {
      function d(a, b, c, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new D(k, 0);
        }
        return e.call(this, a, b, c, g);
      }
      function e(d, f, g, k) {
        d = Pd(c, d, f, g, k);
        d = b.a ? b.a(d) : b.call(null, d);
        return a.a ? a.a(d) : a.call(null, d);
      }
      d.t = 3;
      d.s = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var d = F(a);
        a = ec(a);
        return e(b, c, d, a);
      };
      d.j = e;
      return d;
    }(), k = function(a, b, c, k) {
      switch(arguments.length) {
        case 0:
          return g.call(this);
        case 1:
          return f.call(this, a);
        case 2:
          return e.call(this, a, b);
        case 3:
          return d.call(this, a, b, c);
        default:
          var u = null;
          if (3 < arguments.length) {
            for (var u = 0, v = Array(arguments.length - 3);u < v.length;) {
              v[u] = arguments[u + 3], ++u;
            }
            u = new D(v, 0);
          }
          return l.j(a, b, c, u);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    k.t = 3;
    k.s = l.s;
    k.n = g;
    k.a = f;
    k.b = e;
    k.e = d;
    k.j = l.j;
    return k;
  }();
}
function Wd(a, b) {
  return function() {
    function c(c, d, e) {
      return a.o ? a.o(b, c, d, e) : a.call(null, b, c, d, e);
    }
    function d(c, d) {
      return a.e ? a.e(b, c, d) : a.call(null, b, c, d);
    }
    function e(c) {
      return a.b ? a.b(b, c) : a.call(null, b, c);
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
          g = new D(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return Qd(a, b, c, e, f, Bc([g], 0));
      }
      c.t = 3;
      c.s = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = ec(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            t = new D(u, 0);
          }
          return k.j(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.s = k.s;
    g.n = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.j = k.j;
    return g;
  }();
}
function Zd() {
  return function() {
    function a(a, b, c) {
      a = null == a ? 0 : a;
      return pc.e ? pc.e(a, b, c) : pc.call(null, a);
    }
    function b(a, b) {
      var c = null == a ? 0 : a;
      return pc.b ? pc.b(c, b) : pc.call(null, c);
    }
    function c(a) {
      a = null == a ? 0 : a;
      return pc.a ? pc.a(a) : pc.call(null, a);
    }
    var d = null, e = function() {
      function a(c, d, e, f) {
        var r = null;
        if (3 < arguments.length) {
          for (var r = 0, t = Array(arguments.length - 3);r < t.length;) {
            t[r] = arguments[r + 3], ++r;
          }
          r = new D(t, 0);
        }
        return b.call(this, c, d, e, r);
      }
      function b(a, c, d, e) {
        return Pd(pc, null == a ? 0 : a, c, d, e);
      }
      a.t = 3;
      a.s = function(a) {
        var c = F(a);
        a = H(a);
        var d = F(a);
        a = H(a);
        var e = F(a);
        a = ec(a);
        return b(c, d, e, a);
      };
      a.j = b;
      return a;
    }(), d = function(d, g, k, l) {
      switch(arguments.length) {
        case 1:
          return c.call(this, d);
        case 2:
          return b.call(this, d, g);
        case 3:
          return a.call(this, d, g, k);
        default:
          var p = null;
          if (3 < arguments.length) {
            for (var p = 0, q = Array(arguments.length - 3);p < q.length;) {
              q[p] = arguments[p + 3], ++p;
            }
            p = new D(q, 0);
          }
          return e.j(d, g, k, p);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    d.t = 3;
    d.s = e.s;
    d.a = c;
    d.b = b;
    d.e = a;
    d.j = e.j;
    return d;
  }();
}
function $d(a, b) {
  return function d(b, f) {
    return new zd(null, function() {
      var g = C(f);
      if (g) {
        if (Vc(g)) {
          for (var k = Gb(g), l = Fc(k), p = new Bd(Array(l), 0), q = 0;;) {
            if (q < l) {
              Fd(p, function() {
                var d = b + q, f = B.b(k, q);
                return a.b ? a.b(d, f) : a.call(null, d, f);
              }()), q += 1;
            } else {
              break;
            }
          }
          return Ed(p.ta(), d(b + l, Hb(g)));
        }
        return zc(function() {
          var d = F(g);
          return a.b ? a.b(b, d) : a.call(null, b, d);
        }(), d(b + 1, ec(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function ae(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Zb = c;
  this.Eb = d;
  this.u = 16386;
  this.i = 6455296;
}
h = ae.prototype;
h.equiv = function(a) {
  return this.r(null, a);
};
h.r = function(a, b) {
  return this === b;
};
h.Hb = function() {
  return this.state;
};
h.I = function() {
  return this.h;
};
h.Cb = function(a, b, c) {
  for (var d = C(this.Eb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.G(null, g);
      var k = L(a, 0);
      a = L(a, 1);
      var l = b, p = c;
      a.o ? a.o(k, this, l, p) : a.call(null, k, this, l, p);
      g += 1;
    } else {
      if (a = C(d)) {
        d = a, Vc(d) ? (e = Gb(d), d = Hb(d), a = e, f = Fc(e), e = a) : (a = F(d), k = L(a, 0), a = L(a, 1), e = k, f = b, g = c, a.o ? a.o(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.C = function() {
  return this[fa] || (this[fa] = ++ha);
};
function be() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new D(Array.prototype.slice.call(arguments, 1), 0), c = Zc(b) ? Md(ce, b) : b, b = M(c, za), c = M(c, de);
      return new ae(a, b, c, null);
  }
}
function O(a) {
  return new ae(a, null, null, null);
}
function ee(a, b) {
  if (a instanceof ae) {
    var c = a.Zb;
    if (null != c && !w(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = ud(new cc(null, "validate", "validate", 1439230700, null), new cc(null, "new-value", "new-value", -1567397401, null));
        return fe.a ? fe.a(a) : fe.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Eb && zb(a, c, b);
    return b;
  }
  return Mb(a, b);
}
var ge = function ge() {
  switch(arguments.length) {
    case 2:
      return ge.b(arguments[0], arguments[1]);
    case 3:
      return ge.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ge.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return ge.j(arguments[0], arguments[1], arguments[2], arguments[3], new D(Array.prototype.slice.call(arguments, 4), 0));
  }
};
ge.b = function(a, b) {
  var c;
  a instanceof ae ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = ee(a, c)) : c = Nb.b(a, b);
  return c;
};
ge.e = function(a, b, c) {
  if (a instanceof ae) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = ee(a, b);
  } else {
    a = Nb.e(a, b, c);
  }
  return a;
};
ge.o = function(a, b, c, d) {
  if (a instanceof ae) {
    var e = a.state;
    b = b.e ? b.e(e, c, d) : b.call(null, e, c, d);
    a = ee(a, b);
  } else {
    a = Nb.o(a, b, c, d);
  }
  return a;
};
ge.j = function(a, b, c, d, e) {
  return a instanceof ae ? ee(a, Pd(b, a.state, c, d, e)) : Nb.v(a, b, c, d, e);
};
ge.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return ge.j(b, a, c, d, e);
};
ge.t = 4;
var he = function he() {
  switch(arguments.length) {
    case 1:
      return he.a(arguments[0]);
    case 2:
      return he.b(arguments[0], arguments[1]);
    case 3:
      return he.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return he.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return he.j(arguments[0], arguments[1], arguments[2], arguments[3], new D(Array.prototype.slice.call(arguments, 4), 0));
  }
};
he.a = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.a ? a.a(d) : a.call(null, d);
        return b.b ? b.b(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      function e() {
        return b.n ? b.n() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new D(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Nd(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.t = 2;
        c.s = function(a) {
          var b = F(a);
          a = H(a);
          var c = F(a);
          a = ec(a);
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
            var q = null;
            if (2 < arguments.length) {
              for (var q = 0, r = Array(arguments.length - 2);q < r.length;) {
                r[q] = arguments[q + 2], ++q;
              }
              q = new D(r, 0);
            }
            return g.j(a, b, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.t = 2;
      f.s = g.s;
      f.n = e;
      f.a = d;
      f.b = c;
      f.j = g.j;
      return f;
    }();
  };
};
he.b = function(a, b) {
  return new zd(null, function() {
    var c = C(b);
    if (c) {
      if (Vc(c)) {
        for (var d = Gb(c), e = Fc(d), f = new Bd(Array(e), 0), g = 0;;) {
          if (g < e) {
            Fd(f, function() {
              var b = B.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return Ed(f.ta(), he.b(a, Hb(c)));
      }
      return zc(function() {
        var b = F(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), he.b(a, ec(c)));
    }
    return null;
  }, null, null);
};
he.e = function(a, b, c) {
  return new zd(null, function() {
    var d = C(b), e = C(c);
    if (d && e) {
      var f = zc, g;
      g = F(d);
      var k = F(e);
      g = a.b ? a.b(g, k) : a.call(null, g, k);
      d = f(g, he.e(a, ec(d), ec(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
he.o = function(a, b, c, d) {
  return new zd(null, function() {
    var e = C(b), f = C(c), g = C(d);
    if (e && f && g) {
      var k = zc, l;
      l = F(e);
      var p = F(f), q = F(g);
      l = a.e ? a.e(l, p, q) : a.call(null, l, p, q);
      e = k(l, he.o(a, ec(e), ec(f), ec(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
he.j = function(a, b, c, d, e) {
  var f = function k(a) {
    return new zd(null, function() {
      var b = he.b(C, a);
      return Sd(id, b) ? zc(he.b(F, b), k(he.b(ec, b))) : null;
    }, null, null);
  };
  return he.b(function() {
    return function(b) {
      return Md(a, b);
    };
  }(f), f(Dc.j(e, d, Bc([c, b], 0))));
};
he.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), e = H(e);
  return he.j(b, a, c, d, e);
};
he.t = 4;
function ie(a, b) {
  return Md(Jd, Nd(he, a, b));
}
function je(a, b) {
  return new zd(null, function() {
    var c = C(b);
    if (c) {
      if (Vc(c)) {
        for (var d = Gb(c), e = Fc(d), f = new Bd(Array(e), 0), g = 0;;) {
          if (g < e) {
            var k;
            k = B.b(d, g);
            k = a.a ? a.a(k) : a.call(null, k);
            w(k) && (k = B.b(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return Ed(f.ta(), je(a, Hb(c)));
      }
      d = F(c);
      c = ec(c);
      return w(a.a ? a.a(d) : a.call(null, d)) ? zc(d, je(a, c)) : je(a, c);
    }
    return null;
  }, null, null);
}
var ke = function ke() {
  switch(arguments.length) {
    case 2:
      return ke.b(arguments[0], arguments[1]);
    case 3:
      return ke.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
ke.b = function(a, b) {
  var c;
  null != a ? a && (a.u & 4 || a.Ib) ? (c = ed(Bb, Ab(a), b), c = Cb(c), c = Qc(c, Rc(a))) : c = ed(Pa, a, b) : c = ed(Dc, fc, b);
  return c;
};
ke.e = function(a, b, c) {
  a && (a.u & 4 || a.Ib) ? (b = jd(b, Kd, Ab(a), c), b = Cb(b), a = Qc(b, Rc(a))) : a = jd(b, Dc, a, c);
  return a;
};
ke.t = 3;
var le = function le() {
  switch(arguments.length) {
    case 3:
      return le.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return le.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return le.v(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return le.O(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return le.j(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new D(Array.prototype.slice.call(arguments, 6), 0));
  }
};
le.e = function(a, b, c) {
  var d = L(b, 0);
  b = qd(b);
  return w(b) ? Jc.e(a, d, le.e(M(a, d), b, c)) : Jc.e(a, d, function() {
    var b = M(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
le.o = function(a, b, c, d) {
  var e = L(b, 0);
  b = qd(b);
  return w(b) ? Jc.e(a, e, le.o(M(a, e), b, c, d)) : Jc.e(a, e, function() {
    var b = M(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
le.v = function(a, b, c, d, e) {
  var f = L(b, 0);
  b = qd(b);
  return w(b) ? Jc.e(a, f, le.v(M(a, f), b, c, d, e)) : Jc.e(a, f, function() {
    var b = M(a, f);
    return c.e ? c.e(b, d, e) : c.call(null, b, d, e);
  }());
};
le.O = function(a, b, c, d, e, f) {
  var g = L(b, 0);
  b = qd(b);
  return w(b) ? Jc.e(a, g, le.O(M(a, g), b, c, d, e, f)) : Jc.e(a, g, function() {
    var b = M(a, g);
    return c.o ? c.o(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
le.j = function(a, b, c, d, e, f, g) {
  var k = L(b, 0);
  b = qd(b);
  return w(b) ? Jc.e(a, k, Qd(le, M(a, k), b, c, d, Bc([e, f, g], 0))) : Jc.e(a, k, Qd(c, M(a, k), d, e, f, Bc([g], 0)));
};
le.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), f = H(e), e = F(f), g = H(f), f = F(g), g = H(g);
  return le.j(b, a, c, d, e, f, g);
};
le.t = 6;
var me = function me() {
  switch(arguments.length) {
    case 3:
      return me.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return me.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return me.v(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return me.O(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return me.j(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new D(Array.prototype.slice.call(arguments, 6), 0));
  }
};
me.e = function(a, b, c) {
  return Jc.e(a, b, function() {
    var d = M(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
};
me.o = function(a, b, c, d) {
  return Jc.e(a, b, function() {
    var e = M(a, b);
    return c.b ? c.b(e, d) : c.call(null, e, d);
  }());
};
me.v = function(a, b, c, d, e) {
  return Jc.e(a, b, function() {
    var f = M(a, b);
    return c.e ? c.e(f, d, e) : c.call(null, f, d, e);
  }());
};
me.O = function(a, b, c, d, e, f) {
  return Jc.e(a, b, function() {
    var g = M(a, b);
    return c.o ? c.o(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
me.j = function(a, b, c, d, e, f, g) {
  return Jc.e(a, b, Qd(c, M(a, b), d, e, f, Bc([g], 0)));
};
me.s = function(a) {
  var b = F(a), c = H(a);
  a = F(c);
  var d = H(c), c = F(d), e = H(d), d = F(e), f = H(e), e = F(f), g = H(f), f = F(g), g = H(g);
  return me.j(b, a, c, d, e, f, g);
};
me.t = 6;
function ne(a, b) {
  this.p = a;
  this.c = b;
}
function oe(a, b) {
  return new ne(a, b);
}
function pe(a) {
  return new ne(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function qe(a) {
  return new ne(a.p, Ja(a.c));
}
function re(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function se(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = pe(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var te = function te(b, c, d, e) {
  var f = qe(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? te(b, c - 5, d, e) : se(null, c - 5, e), f.c[g] = b);
  return f;
};
function ue(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function ve(a, b) {
  if (b >= re(a)) {
    return a.q;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function we(a, b) {
  return 0 <= b && b < a.d ? ve(a, b) : ue(b, a.d);
}
var xe = function xe(b, c, d, e, f) {
  var g = qe(d);
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = xe(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
}, ye = function ye(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = ye(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = qe(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = qe(d);
  d.c[e] = null;
  return d;
};
function ze(a, b, c, d, e, f) {
  this.l = a;
  this.sb = b;
  this.c = c;
  this.sa = d;
  this.start = e;
  this.end = f;
}
ze.prototype.pb = function() {
  return this.l < this.end;
};
ze.prototype.next = function() {
  32 === this.l - this.sb && (this.c = ve(this.sa, this.l), this.sb += 32);
  var a = this.c[this.l & 31];
  this.l += 1;
  return a;
};
function Q(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.q = e;
  this.m = f;
  this.i = 167668511;
  this.u = 8196;
}
h = Q.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.G = function(a, b) {
  return we(this, b)[b & 31];
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.d ? ve(this, b)[b & 31] : c;
};
h.Ea = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return re(this) <= b ? (a = Ja(this.q), a[b & 31] = c, new Q(this.h, this.d, this.shift, this.root, a, null)) : new Q(this.h, this.d, this.shift, xe(this, this.shift, this.root, b, c), this.q, null);
  }
  if (b === this.d) {
    return Pa(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.d), A("]")].join(""));
};
h.Wa = function() {
  var a = this.d;
  return new ze(0, 0, 0 < Fc(this) ? ve(this, 0) : null, this, 0, a);
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.Na = function() {
  return B.b(this, 0);
};
h.Oa = function() {
  return B.b(this, 1);
};
h.Ca = function() {
  return 0 < this.d ? B.b(this, this.d - 1) : null;
};
h.Da = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return nb(Ec, this.h);
  }
  if (1 < this.d - re(this)) {
    return new Q(this.h, this.d - 1, this.shift, this.root, this.q.slice(0, -1), null);
  }
  var a = ve(this, this.d - 2), b = ye(this, this.shift, this.root), b = null == b ? R : b, c = this.d - 1;
  return 5 < this.shift && null == b.c[1] ? new Q(this.h, c, this.shift - 5, b.c[0], a, null) : new Q(this.h, c, this.shift, b, a, null);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  if (b instanceof Q) {
    if (this.d === Fc(b)) {
      for (var c = Ob(this), d = Ob(b);;) {
        if (w(c.pb())) {
          var e = c.next(), f = d.next();
          if (!gc.b(e, f)) {
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
    return yc(this, b);
  }
};
h.Ma = function() {
  var a = this;
  return new Ae(a.d, a.shift, function() {
    var b = a.root;
    return Be.a ? Be.a(b) : Be.call(null, b);
  }(), function() {
    var b = a.q;
    return Ce.a ? Ce.a(b) : Ce.call(null, b);
  }());
};
h.N = function() {
  return Qc(Ec, this.h);
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = ve(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = e[f], d = b.b ? b.b(d, g) : b.call(null, d, g), f = f + 1
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
h.za = function(a, b, c) {
  if ("number" === typeof b) {
    return hb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.K = function() {
  if (0 === this.d) {
    return null;
  }
  if (32 >= this.d) {
    return new D(this.q, 0);
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
  return De ? De(this, a, 0, 0) : Ee.call(null, this, a, 0, 0);
};
h.L = function(a, b) {
  return new Q(b, this.d, this.shift, this.root, this.q, this.m);
};
h.J = function(a, b) {
  if (32 > this.d - re(this)) {
    for (var c = this.q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Q(this.h, this.d + 1, this.shift, this.root, d, null);
  }
  c = (d = this.d >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = pe(null), d.c[0] = this.root, e = se(null, this.shift, new ne(null, this.q)), d.c[1] = e) : d = te(this, this.shift, this.root, new ne(null, this.q));
  return new Q(this.h, this.d + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.T(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.T(null, a, b);
};
var R = new ne(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Ec = new Q(null, 0, 5, R, [], lc);
function Fe(a) {
  var b = a.length;
  if (32 > b) {
    return new Q(null, b, 5, R, a, null);
  }
  for (var c = 32, d = (new Q(null, 32, 5, R, a.slice(0, 32), null)).Ma(null);;) {
    if (c < b) {
      var e = c + 1, d = Kd.b(d, a[c]), c = e
    } else {
      return Cb(d);
    }
  }
}
Q.prototype[Ha] = function() {
  return ic(this);
};
function Ge(a) {
  return Da(a) ? Fe(a) : Cb(ed(Bb, Ab(Ec), a));
}
function He(a, b, c, d, e, f) {
  this.M = a;
  this.ia = b;
  this.l = c;
  this.F = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.u = 1536;
}
h = He.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  if (this.F + 1 < this.ia.length) {
    var a;
    a = this.M;
    var b = this.ia, c = this.l, d = this.F + 1;
    a = De ? De(a, b, c, d) : Ee.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Ib(this);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(Ec, this.h);
};
h.R = function(a, b) {
  var c;
  c = this.M;
  var d = this.l + this.F, e = Fc(this.M);
  c = Ie ? Ie(c, d, e) : Je.call(null, c, d, e);
  return qc(c, b);
};
h.S = function(a, b, c) {
  a = this.M;
  var d = this.l + this.F, e = Fc(this.M);
  a = Ie ? Ie(a, d, e) : Je.call(null, a, d, e);
  return rc(a, b, c);
};
h.U = function() {
  return this.ia[this.F];
};
h.la = function() {
  if (this.F + 1 < this.ia.length) {
    var a;
    a = this.M;
    var b = this.ia, c = this.l, d = this.F + 1;
    a = De ? De(a, b, c, d) : Ee.call(null, a, b, c, d);
    return null == a ? fc : a;
  }
  return Hb(this);
};
h.K = function() {
  return this;
};
h.jb = function() {
  var a = this.ia;
  return new Cd(a, this.F, a.length);
};
h.kb = function() {
  var a = this.l + this.ia.length;
  if (a < Na(this.M)) {
    var b = this.M, c = ve(this.M, a);
    return De ? De(b, c, a, 0) : Ee.call(null, b, c, a, 0);
  }
  return fc;
};
h.L = function(a, b) {
  var c = this.M, d = this.ia, e = this.l, f = this.F;
  return Ke ? Ke(c, d, e, f, b) : Ee.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return zc(b, this);
};
h.ib = function() {
  var a = this.l + this.ia.length;
  if (a < Na(this.M)) {
    var b = this.M, c = ve(this.M, a);
    return De ? De(b, c, a, 0) : Ee.call(null, b, c, a, 0);
  }
  return null;
};
He.prototype[Ha] = function() {
  return ic(this);
};
function Ee() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new He(a, we(a, b), b, c, null, null);
    case 4:
      return De(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ke(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function De(a, b, c, d) {
  return new He(a, b, c, d, null, null);
}
function Ke(a, b, c, d, e) {
  return new He(a, b, c, d, e, null);
}
function Le(a, b, c, d, e) {
  this.h = a;
  this.sa = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.u = 8192;
}
h = Le.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.G = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ue(b, this.end - this.start) : B.b(this.sa, this.start + b);
};
h.T = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.e(this.sa, this.start + b, c);
};
h.Ea = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Jc.e(this.sa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return Me.v ? Me.v(a, c, b, d, null) : Me.call(null, a, c, b, d, null);
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.end - this.start;
};
h.Ca = function() {
  return B.b(this.sa, this.end - 1);
};
h.Da = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.sa, c = this.start, d = this.end - 1;
  return Me.v ? Me.v(a, b, c, d, null) : Me.call(null, a, b, c, d, null);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(Ec, this.h);
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  return rc(this, b, c);
};
h.za = function(a, b, c) {
  if ("number" === typeof b) {
    return hb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.K = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : zc(B.b(a.sa, e), new zd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.sa, d = this.start, e = this.end, f = this.m;
  return Me.v ? Me.v(b, c, d, e, f) : Me.call(null, b, c, d, e, f);
};
h.J = function(a, b) {
  var c = this.h, d = hb(this.sa, this.end, b), e = this.start, f = this.end + 1;
  return Me.v ? Me.v(c, d, e, f, null) : Me.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.T(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.T(null, a, b);
};
Le.prototype[Ha] = function() {
  return ic(this);
};
function Me(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Le) {
      c = b.start + c, d = b.start + d, b = b.sa;
    } else {
      var f = Fc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Le(a, b, c, d, e);
    }
  }
}
function Je() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return Ie(a, arguments[1], Fc(a));
    case 3:
      return Ie(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ie(a, b, c) {
  return Me(null, a, b, c, null);
}
function Ne(a, b) {
  return a === b.p ? b : new ne(a, Ja(b.c));
}
function Be(a) {
  return new ne({}, Ja(a.c));
}
function Ce(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Xc(a, 0, b, 0, a.length);
  return b;
}
var Oe = function Oe(b, c, d, e) {
  d = Ne(b.root.p, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? Oe(b, c - 5, g, e) : se(b.root.p, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function Ae(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.u = 88;
  this.i = 275;
}
h = Ae.prototype;
h.$a = function(a, b) {
  if (this.root.p) {
    if (32 > this.d - re(this)) {
      this.q[this.d & 31] = b;
    } else {
      var c = new ne(this.root.p, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = se(this.root.p, this.shift, c);
        this.root = new ne(this.root.p, d);
        this.shift = e;
      } else {
        this.root = Oe(this, this.shift, this.root, c);
      }
    }
    this.d += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.ab = function() {
  if (this.root.p) {
    this.root.p = null;
    var a = this.d - re(this), b = Array(a);
    Xc(this.q, 0, b, 0, a);
    return new Q(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  if ("number" === typeof b) {
    return Eb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.vb = function(a, b, c) {
  var d = this;
  if (d.root.p) {
    if (0 <= b && b < d.d) {
      return re(this) <= b ? d.q[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = Ne(d.root.p, k);
          if (0 === a) {
            l.c[b & 31] = c;
          } else {
            var p = b >>> a & 31, q = f(a - 5, l.c[p]);
            l.c[p] = q;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.d) {
      return Bb(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.d)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.p) {
    return this.d;
  }
  throw Error("count after persistent!");
};
h.G = function(a, b) {
  if (this.root.p) {
    return we(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.d ? B.b(this, b) : c;
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
function Pe() {
  this.i = 2097152;
  this.u = 0;
}
Pe.prototype.equiv = function(a) {
  return this.r(null, a);
};
Pe.prototype.r = function() {
  return!1;
};
var Qe = new Pe;
function Re(a, b) {
  return $c(Tc(b) ? Fc(a) === Fc(b) ? Sd(id, he.b(function(a) {
    return gc.b(Ic(b, F(a), Qe), F(H(a)));
  }, a)) : null : null);
}
function Se(a) {
  this.A = a;
}
Se.prototype.next = function() {
  if (null != this.A) {
    var a = F(this.A), b = L(a, 0), a = L(a, 1);
    this.A = H(this.A);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Te(a) {
  return new Se(C(a));
}
function Ue(a, b) {
  var c;
  if (b instanceof N) {
    a: {
      c = a.length;
      for (var d = b.ra, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof N && d === f.ra) {
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
      if (b instanceof cc) {
        a: {
          for (c = a.length, d = b.xa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof cc && d === f.xa) {
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
              if (gc.b(b, a[d])) {
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
function Ve(a, b, c) {
  this.c = a;
  this.l = b;
  this.na = c;
  this.i = 32374990;
  this.u = 0;
}
h = Ve.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.na;
};
h.ka = function() {
  return this.l < this.c.length - 2 ? new Ve(this.c, this.l + 2, this.na) : null;
};
h.P = function() {
  return(this.c.length - this.l) / 2;
};
h.C = function() {
  return kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.na);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return new Q(null, 2, 5, R, [this.c[this.l], this.c[this.l + 1]], null);
};
h.la = function() {
  return this.l < this.c.length - 2 ? new Ve(this.c, this.l + 2, this.na) : fc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Ve(this.c, this.l, b);
};
h.J = function(a, b) {
  return zc(b, this);
};
Ve.prototype[Ha] = function() {
  return ic(this);
};
function We(a, b, c) {
  this.c = a;
  this.l = b;
  this.d = c;
}
We.prototype.pb = function() {
  return this.l < this.d;
};
We.prototype.next = function() {
  var a = new Q(null, 2, 5, R, [this.c[this.l], this.c[this.l + 1]], null);
  this.l += 2;
  return a;
};
function n(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.c = c;
  this.m = d;
  this.i = 16647951;
  this.u = 8196;
}
h = n.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.keys = function() {
  return ic(Xe.a ? Xe.a(this) : Xe.call(null, this));
};
h.entries = function() {
  return Te(C(this));
};
h.values = function() {
  return ic(Ye.a ? Ye.a(this) : Ye.call(null, this));
};
h.has = function(a) {
  return ad(this, a);
};
h.get = function(a, b) {
  return this.w(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = L(f, 0), f = L(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Vc(b) ? (c = Gb(b), b = Hb(b), g = c, d = Fc(c), c = g) : (c = F(b), g = L(c, 0), c = f = L(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  a = Ue(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
h.Wa = function() {
  return new We(this.c, 0, 2 * this.d);
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = mc(this);
};
h.r = function(a, b) {
  if (b && (b.i & 1024 || b.Kb)) {
    var c = this.c.length;
    if (this.d === b.P(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.w(null, this.c[d], Yc);
          if (e !== Yc) {
            if (gc.b(this.c[d + 1], e)) {
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
    return Re(this, b);
  }
};
h.Ma = function() {
  return new Ze({}, this.c.length, Ja(this.c));
};
h.N = function() {
  return nb(S, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.lb = function(a, b) {
  if (0 <= Ue(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Oa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.h, this.d - 1, d, null);
      }
      gc.b(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.za = function(a, b, c) {
  a = Ue(this.c, b);
  if (-1 === a) {
    if (this.d < $e) {
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
      return new n(this.h, this.d + 1, e, null);
    }
    return nb(Za(ke.b(af, this), b, c), this.h);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ja(this.c);
  b[a + 1] = c;
  return new n(this.h, this.d, b, null);
};
h.K = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ve(a, 0, null) : null;
};
h.L = function(a, b) {
  return new n(b, this.d, this.c, this.m);
};
h.J = function(a, b) {
  if (Uc(b)) {
    return Za(this, B.b(b, 0), B.b(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Uc(e)) {
      c = Za(c, B.b(e, 0), B.b(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
var S = new n(null, 0, [], nc), $e = 8;
n.prototype[Ha] = function() {
  return ic(this);
};
function Ze(a, b, c) {
  this.Qa = a;
  this.Sa = b;
  this.c = c;
  this.i = 258;
  this.u = 56;
}
h = Ze.prototype;
h.P = function() {
  if (w(this.Qa)) {
    return od(this.Sa);
  }
  throw Error("count after persistent!");
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  if (w(this.Qa)) {
    return a = Ue(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.$a = function(a, b) {
  if (w(this.Qa)) {
    if (b ? b.i & 2048 || b.Lb || (b.i ? 0 : y(bb, b)) : y(bb, b)) {
      return Db(this, bf.a ? bf.a(b) : bf.call(null, b), Yd.a ? Yd.a(b) : Yd.call(null, b));
    }
    for (var c = C(b), d = this;;) {
      var e = F(c);
      if (w(e)) {
        var f = e, c = H(c), d = Db(d, function() {
          var a = f;
          return bf.a ? bf.a(a) : bf.call(null, a);
        }(), function() {
          var a = f;
          return Yd.a ? Yd.a(a) : Yd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.ab = function() {
  if (w(this.Qa)) {
    return this.Qa = !1, new n(null, od(this.Sa), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  if (w(this.Qa)) {
    a = Ue(this.c, b);
    if (-1 === a) {
      if (this.Sa + 2 <= 2 * $e) {
        return this.Sa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Sa;
      var d = this.c;
      a = cf.b ? cf.b(a, d) : cf.call(null, a, d);
      return Db(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function cf(a, b) {
  for (var c = Ab(af), d = 0;;) {
    if (d < a) {
      c = Db(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function df() {
  this.k = !1;
}
function ef(a, b) {
  return a === b ? !0 : a === b || a instanceof N && b instanceof N && a.ra === b.ra ? !0 : gc.b(a, b);
}
function ff(a, b, c) {
  a = Ja(a);
  a[b] = c;
  return a;
}
function gf(a, b) {
  var c = Array(a.length - 2);
  Xc(a, 0, c, 0, 2 * b);
  Xc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function hf(a, b, c, d) {
  a = a.Ia(b);
  a.c[c] = d;
  return a;
}
function jf(a, b, c) {
  this.p = a;
  this.H = b;
  this.c = c;
}
h = jf.prototype;
h.Ia = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = pd(this.H), c = Array(0 > b ? 4 : 2 * (b + 1));
  Xc(this.c, 0, c, 0, 2 * b);
  return new jf(a, this.H, c);
};
h.bb = function() {
  var a = this.c;
  return kf ? kf(a) : lf.call(null, a);
};
h.Ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.H & e)) {
    return d;
  }
  var f = pd(this.H & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ja(a + 5, b, c, d) : ef(c, e) ? f : d;
};
h.va = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = pd(this.H & g - 1);
  if (0 === (this.H & g)) {
    var l = pd(this.H);
    if (2 * l < this.c.length) {
      a = this.Ia(a);
      b = a.c;
      f.k = !0;
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
      a.H |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = mf.va(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.H >>> d & 1) && (k[d] = null != this.c[e] ? mf.va(a, b + 5, Zb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new nf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Xc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Xc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.k = !0;
    a = this.Ia(a);
    a.c = b;
    a.H |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.va(a, b + 5, c, d, e, f), l === g ? this : hf(this, a, 2 * k + 1, l);
  }
  if (ef(d, l)) {
    return e === g ? this : hf(this, a, 2 * k + 1, e);
  }
  f.k = !0;
  f = b + 5;
  d = of ? of(a, f, l, g, c, d, e) : pf.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ia(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.ua = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = pd(this.H & f - 1);
  if (0 === (this.H & f)) {
    var k = pd(this.H);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = mf.ua(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.H >>> c & 1) && (g[c] = null != this.c[d] ? mf.ua(a + 5, Zb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new nf(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Xc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Xc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.k = !0;
    return new jf(null, this.H | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.ua(a + 5, b, c, d, e), k === f ? this : new jf(null, this.H, ff(this.c, 2 * g + 1, k));
  }
  if (ef(c, l)) {
    return d === f ? this : new jf(null, this.H, ff(this.c, 2 * g + 1, d));
  }
  e.k = !0;
  e = this.H;
  k = this.c;
  a += 5;
  a = rf ? rf(a, l, f, b, c, d) : pf.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ja(k);
  d[c] = null;
  d[g] = a;
  return new jf(null, e, d);
};
h.cb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.H & d)) {
    return this;
  }
  var e = pd(this.H & d - 1), f = this.c[2 * e], g = this.c[2 * e + 1];
  return null == f ? (a = g.cb(a + 5, b, c), a === g ? this : null != a ? new jf(null, this.H, ff(this.c, 2 * e + 1, a)) : this.H === d ? null : new jf(null, this.H ^ d, gf(this.c, e))) : ef(c, f) ? new jf(null, this.H ^ d, gf(this.c, e)) : this;
};
var mf = new jf(null, 0, []);
function nf(a, b, c) {
  this.p = a;
  this.d = b;
  this.c = c;
}
h = nf.prototype;
h.Ia = function(a) {
  return a === this.p ? this : new nf(a, this.d, Ja(this.c));
};
h.bb = function() {
  var a = this.c;
  return sf ? sf(a) : tf.call(null, a);
};
h.Ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ja(a + 5, b, c, d) : d;
};
h.va = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = hf(this, a, g, mf.va(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.va(a, b + 5, c, d, e, f);
  return b === k ? this : hf(this, a, g, b);
};
h.ua = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new nf(null, this.d + 1, ff(this.c, f, mf.ua(a + 5, b, c, d, e)));
  }
  a = g.ua(a + 5, b, c, d, e);
  return a === g ? this : new nf(null, this.d, ff(this.c, f, a));
};
h.cb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.cb(a + 5, b, c);
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
                d = new jf(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new nf(null, this.d - 1, ff(this.c, d, a));
        }
      } else {
        d = new nf(null, this.d, ff(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function uf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ef(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function vf(a, b, c, d) {
  this.p = a;
  this.Aa = b;
  this.d = c;
  this.c = d;
}
h = vf.prototype;
h.Ia = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Xc(this.c, 0, b, 0, 2 * this.d);
  return new vf(a, this.Aa, this.d, b);
};
h.bb = function() {
  var a = this.c;
  return kf ? kf(a) : lf.call(null, a);
};
h.Ja = function(a, b, c, d) {
  a = uf(this.c, this.d, c);
  return 0 > a ? d : ef(c, this.c[a]) ? this.c[a + 1] : d;
};
h.va = function(a, b, c, d, e, f) {
  if (c === this.Aa) {
    b = uf(this.c, this.d, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ia(a), a.c[b] = d, a.c[c] = e, f.k = !0, a.d += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Xc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.k = !0;
      d = this.d + 1;
      a === this.p ? (this.c = b, this.d = d, a = this) : a = new vf(this.p, this.Aa, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : hf(this, a, b + 1, e);
  }
  return(new jf(a, 1 << (this.Aa >>> b & 31), [null, this, null, null])).va(a, b, c, d, e, f);
};
h.ua = function(a, b, c, d, e) {
  return b === this.Aa ? (a = uf(this.c, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Xc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.k = !0, new vf(null, this.Aa, this.d + 1, b)) : gc.b(this.c[a], d) ? this : new vf(null, this.Aa, this.d, ff(this.c, a + 1, d))) : (new jf(null, 1 << (this.Aa >>> a & 31), [null, this])).ua(a, b, c, d, e);
};
h.cb = function(a, b, c) {
  a = uf(this.c, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new vf(null, this.Aa, this.d - 1, gf(this.c, od(a)));
};
function pf() {
  switch(arguments.length) {
    case 6:
      return rf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return of(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function rf(a, b, c, d, e, f) {
  var g = Zb(b);
  if (g === d) {
    return new vf(null, g, 2, [b, c, e, f]);
  }
  var k = new df;
  return mf.ua(a, g, b, c, k).ua(a, d, e, f, k);
}
function of(a, b, c, d, e, f, g) {
  var k = Zb(c);
  if (k === e) {
    return new vf(null, k, 2, [c, d, f, g]);
  }
  var l = new df;
  return mf.va(a, b, k, c, d, l).va(a, b, e, f, g, l);
}
function wf(a, b, c, d, e) {
  this.h = a;
  this.Fa = b;
  this.l = c;
  this.A = d;
  this.m = e;
  this.i = 32374860;
  this.u = 0;
}
h = wf.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return null == this.A ? new Q(null, 2, 5, R, [this.Fa[this.l], this.Fa[this.l + 1]], null) : F(this.A);
};
h.la = function() {
  if (null == this.A) {
    var a = this.Fa, b = this.l + 2;
    return xf ? xf(a, b, null) : lf.call(null, a, b, null);
  }
  var a = this.Fa, b = this.l, c = H(this.A);
  return xf ? xf(a, b, c) : lf.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new wf(b, this.Fa, this.l, this.A, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
wf.prototype[Ha] = function() {
  return ic(this);
};
function lf() {
  switch(arguments.length) {
    case 1:
      return kf(arguments[0]);
    case 3:
      return xf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function kf(a) {
  return xf(a, 0, null);
}
function xf(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new wf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (w(d) && (d = d.bb(), w(d))) {
          return new wf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new wf(null, a, b, c, null);
  }
}
function yf(a, b, c, d, e) {
  this.h = a;
  this.Fa = b;
  this.l = c;
  this.A = d;
  this.m = e;
  this.i = 32374860;
  this.u = 0;
}
h = yf.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return F(this.A);
};
h.la = function() {
  var a = this.Fa, b = this.l, c = H(this.A);
  return zf ? zf(null, a, b, c) : tf.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new yf(b, this.Fa, this.l, this.A, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
yf.prototype[Ha] = function() {
  return ic(this);
};
function tf() {
  switch(arguments.length) {
    case 1:
      return sf(arguments[0]);
    case 4:
      return zf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function sf(a) {
  return zf(null, a, 0, null);
}
function zf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (w(e) && (e = e.bb(), w(e))) {
          return new yf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new yf(a, b, c, d, null);
  }
}
function Af(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.oa = d;
  this.pa = e;
  this.m = f;
  this.i = 16123663;
  this.u = 8196;
}
h = Af.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.keys = function() {
  return ic(Xe.a ? Xe.a(this) : Xe.call(null, this));
};
h.entries = function() {
  return Te(C(this));
};
h.values = function() {
  return ic(Ye.a ? Ye.a(this) : Ye.call(null, this));
};
h.has = function(a) {
  return ad(this, a);
};
h.get = function(a, b) {
  return this.w(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = L(f, 0), f = L(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Vc(b) ? (c = Gb(b), b = Hb(b), g = c, d = Fc(c), c = g) : (c = F(b), g = L(c, 0), c = f = L(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  return null == b ? this.oa ? this.pa : c : null == this.root ? c : this.root.Ja(0, Zb(b), b, c);
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = mc(this);
};
h.r = function(a, b) {
  return Re(this, b);
};
h.Ma = function() {
  return new Bf({}, this.root, this.d, this.oa, this.pa);
};
h.N = function() {
  return nb(af, this.h);
};
h.lb = function(a, b) {
  if (null == b) {
    return this.oa ? new Af(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.cb(0, Zb(b), b);
  return c === this.root ? this : new Af(this.h, this.d - 1, c, this.oa, this.pa, null);
};
h.za = function(a, b, c) {
  if (null == b) {
    return this.oa && c === this.pa ? this : new Af(this.h, this.oa ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new df;
  b = (null == this.root ? mf : this.root).ua(0, Zb(b), b, c, a);
  return b === this.root ? this : new Af(this.h, a.k ? this.d + 1 : this.d, b, this.oa, this.pa, null);
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.bb() : null;
    return this.oa ? zc(new Q(null, 2, 5, R, [null, this.pa], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new Af(b, this.d, this.root, this.oa, this.pa, this.m);
};
h.J = function(a, b) {
  if (Uc(b)) {
    return Za(this, B.b(b, 0), B.b(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Uc(e)) {
      c = Za(c, B.b(e, 0), B.b(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
var af = new Af(null, 0, null, !1, null, nc);
function Kc(a, b) {
  for (var c = a.length, d = 0, e = Ab(af);;) {
    if (d < c) {
      var f = d + 1, e = e.Pa(null, a[d], b[d]), d = f
    } else {
      return Cb(e);
    }
  }
}
Af.prototype[Ha] = function() {
  return ic(this);
};
function Bf(a, b, c, d, e) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.oa = d;
  this.pa = e;
  this.i = 258;
  this.u = 56;
}
function Cf(a, b) {
  if (a.p) {
    if (b ? b.i & 2048 || b.Lb || (b.i ? 0 : y(bb, b)) : y(bb, b)) {
      return Df(a, bf.a ? bf.a(b) : bf.call(null, b), Yd.a ? Yd.a(b) : Yd.call(null, b));
    }
    for (var c = C(b), d = a;;) {
      var e = F(c);
      if (w(e)) {
        var f = e, c = H(c), d = Df(d, function() {
          var a = f;
          return bf.a ? bf.a(a) : bf.call(null, a);
        }(), function() {
          var a = f;
          return Yd.a ? Yd.a(a) : Yd.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function Df(a, b, c) {
  if (a.p) {
    if (null == b) {
      a.pa !== c && (a.pa = c), a.oa || (a.count += 1, a.oa = !0);
    } else {
      var d = new df;
      b = (null == a.root ? mf : a.root).va(a.p, 0, Zb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.k && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = Bf.prototype;
h.P = function() {
  if (this.p) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.B = function(a, b) {
  return null == b ? this.oa ? this.pa : null : null == this.root ? null : this.root.Ja(0, Zb(b), b);
};
h.w = function(a, b, c) {
  return null == b ? this.oa ? this.pa : c : null == this.root ? c : this.root.Ja(0, Zb(b), b, c);
};
h.$a = function(a, b) {
  return Cf(this, b);
};
h.ab = function() {
  var a;
  if (this.p) {
    this.p = null, a = new Af(null, this.count, this.root, this.oa, this.pa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Pa = function(a, b, c) {
  return Df(this, b, c);
};
function Ef(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Dc.b(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Ff(a, b, c, d, e) {
  this.h = a;
  this.stack = b;
  this.gb = c;
  this.d = d;
  this.m = e;
  this.i = 32374862;
  this.u = 0;
}
h = Ff.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return 0 > this.d ? Fc(H(this)) + 1 : this.d;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  var a = this.stack;
  return null == a ? null : eb(a);
};
h.la = function() {
  var a = F(this.stack), a = Ef(this.gb ? a.right : a.left, H(this.stack), this.gb);
  return null != a ? new Ff(null, a, this.gb, this.d - 1, null) : fc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Ff(b, this.stack, this.gb, this.d, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
Ff.prototype[Ha] = function() {
  return ic(this);
};
function Gf(a, b, c, d) {
  return c instanceof T ? c.left instanceof T ? new T(c.key, c.k, c.left.ya(), new Hf(a, b, c.right, d, null), null) : c.right instanceof T ? new T(c.right.key, c.right.k, new Hf(c.key, c.k, c.left, c.right.left, null), new Hf(a, b, c.right.right, d, null), null) : new Hf(a, b, c, d, null) : new Hf(a, b, c, d, null);
}
function If(a, b, c, d) {
  return d instanceof T ? d.right instanceof T ? new T(d.key, d.k, new Hf(a, b, c, d.left, null), d.right.ya(), null) : d.left instanceof T ? new T(d.left.key, d.left.k, new Hf(a, b, c, d.left.left, null), new Hf(d.key, d.k, d.left.right, d.right, null), null) : new Hf(a, b, c, d, null) : new Hf(a, b, c, d, null);
}
function Jf(a, b, c, d) {
  if (c instanceof T) {
    return new T(a, b, c.ya(), d, null);
  }
  if (d instanceof Hf) {
    return If(a, b, c, d.fb());
  }
  if (d instanceof T && d.left instanceof Hf) {
    return new T(d.left.key, d.left.k, new Hf(a, b, c, d.left.left, null), If(d.key, d.k, d.left.right, d.right.fb()), null);
  }
  throw Error("red-black tree invariant violation");
}
function Hf(a, b, c, d, e) {
  this.key = a;
  this.k = b;
  this.left = c;
  this.right = d;
  this.m = e;
  this.i = 32402207;
  this.u = 0;
}
h = Hf.prototype;
h.xb = function(a) {
  return a.zb(this);
};
h.fb = function() {
  return new T(this.key, this.k, this.left, this.right, null);
};
h.ya = function() {
  return this;
};
h.wb = function(a) {
  return a.yb(this);
};
h.replace = function(a, b, c, d) {
  return new Hf(a, b, c, d, null);
};
h.yb = function(a) {
  return new Hf(a.key, a.k, this, a.right, null);
};
h.zb = function(a) {
  return new Hf(a.key, a.k, a.left, this, null);
};
h.B = function(a, b) {
  return B.e(this, b, null);
};
h.w = function(a, b, c) {
  return B.e(this, b, c);
};
h.G = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.k : null;
};
h.T = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.k : c;
};
h.Ea = function(a, b, c) {
  return(new Q(null, 2, 5, R, [this.key, this.k], null)).Ea(null, b, c);
};
h.I = function() {
  return null;
};
h.P = function() {
  return 2;
};
h.Na = function() {
  return this.key;
};
h.Oa = function() {
  return this.k;
};
h.Ca = function() {
  return this.k;
};
h.Da = function() {
  return new Q(null, 1, 5, R, [this.key], null);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Ec;
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  return rc(this, b, c);
};
h.za = function(a, b, c) {
  return Jc.e(new Q(null, 2, 5, R, [this.key, this.k], null), b, c);
};
h.K = function() {
  return Pa(Pa(fc, this.k), this.key);
};
h.L = function(a, b) {
  return Qc(new Q(null, 2, 5, R, [this.key, this.k], null), b);
};
h.J = function(a, b) {
  return new Q(null, 3, 5, R, [this.key, this.k, b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
Hf.prototype[Ha] = function() {
  return ic(this);
};
function T(a, b, c, d, e) {
  this.key = a;
  this.k = b;
  this.left = c;
  this.right = d;
  this.m = e;
  this.i = 32402207;
  this.u = 0;
}
h = T.prototype;
h.xb = function(a) {
  return new T(this.key, this.k, this.left, a, null);
};
h.fb = function() {
  throw Error("red-black tree invariant violation");
};
h.ya = function() {
  return new Hf(this.key, this.k, this.left, this.right, null);
};
h.wb = function(a) {
  return new T(this.key, this.k, a, this.right, null);
};
h.replace = function(a, b, c, d) {
  return new T(a, b, c, d, null);
};
h.yb = function(a) {
  return this.left instanceof T ? new T(this.key, this.k, this.left.ya(), new Hf(a.key, a.k, this.right, a.right, null), null) : this.right instanceof T ? new T(this.right.key, this.right.k, new Hf(this.key, this.k, this.left, this.right.left, null), new Hf(a.key, a.k, this.right.right, a.right, null), null) : new Hf(a.key, a.k, this, a.right, null);
};
h.zb = function(a) {
  return this.right instanceof T ? new T(this.key, this.k, new Hf(a.key, a.k, a.left, this.left, null), this.right.ya(), null) : this.left instanceof T ? new T(this.left.key, this.left.k, new Hf(a.key, a.k, a.left, this.left.left, null), new Hf(this.key, this.k, this.left.right, this.right, null), null) : new Hf(a.key, a.k, a.left, this, null);
};
h.B = function(a, b) {
  return B.e(this, b, null);
};
h.w = function(a, b, c) {
  return B.e(this, b, c);
};
h.G = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.k : null;
};
h.T = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.k : c;
};
h.Ea = function(a, b, c) {
  return(new Q(null, 2, 5, R, [this.key, this.k], null)).Ea(null, b, c);
};
h.I = function() {
  return null;
};
h.P = function() {
  return 2;
};
h.Na = function() {
  return this.key;
};
h.Oa = function() {
  return this.k;
};
h.Ca = function() {
  return this.k;
};
h.Da = function() {
  return new Q(null, 1, 5, R, [this.key], null);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Ec;
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  return rc(this, b, c);
};
h.za = function(a, b, c) {
  return Jc.e(new Q(null, 2, 5, R, [this.key, this.k], null), b, c);
};
h.K = function() {
  return Pa(Pa(fc, this.k), this.key);
};
h.L = function(a, b) {
  return Qc(new Q(null, 2, 5, R, [this.key, this.k], null), b);
};
h.J = function(a, b) {
  return new Q(null, 3, 5, R, [this.key, this.k, b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
T.prototype[Ha] = function() {
  return ic(this);
};
var Kf = function Kf(b, c, d, e, f) {
  if (null == c) {
    return new T(d, e, null, null, null);
  }
  var g;
  g = c.key;
  g = b.b ? b.b(d, g) : b.call(null, d, g);
  if (0 === g) {
    return f[0] = c, null;
  }
  if (0 > g) {
    return b = Kf(b, c.left, d, e, f), null != b ? c.wb(b) : null;
  }
  b = Kf(b, c.right, d, e, f);
  return null != b ? c.xb(b) : null;
}, Lf = function Lf(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof T) {
    if (c instanceof T) {
      var d = Lf(b.right, c.left);
      return d instanceof T ? new T(d.key, d.k, new T(b.key, b.k, b.left, d.left, null), new T(c.key, c.k, d.right, c.right, null), null) : new T(b.key, b.k, b.left, new T(c.key, c.k, d, c.right, null), null);
    }
    return new T(b.key, b.k, b.left, Lf(b.right, c), null);
  }
  if (c instanceof T) {
    return new T(c.key, c.k, Lf(b, c.left), c.right, null);
  }
  d = Lf(b.right, c.left);
  return d instanceof T ? new T(d.key, d.k, new Hf(b.key, b.k, b.left, d.left, null), new Hf(c.key, c.k, d.right, c.right, null), null) : Jf(b.key, b.k, b.left, new Hf(c.key, c.k, d, c.right, null));
}, Mf = function Mf(b, c, d, e) {
  if (null != c) {
    var f;
    f = c.key;
    f = b.b ? b.b(d, f) : b.call(null, d, f);
    if (0 === f) {
      return e[0] = c, Lf(c.left, c.right);
    }
    if (0 > f) {
      return b = Mf(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Hf ? Jf(c.key, c.k, b, c.right) : new T(c.key, c.k, b, c.right, null) : null;
    }
    b = Mf(b, c.right, d, e);
    if (null != b || null != e[0]) {
      if (c.right instanceof Hf) {
        if (e = c.key, d = c.k, c = c.left, b instanceof T) {
          c = new T(e, d, c, b.ya(), null);
        } else {
          if (c instanceof Hf) {
            c = Gf(e, d, c.fb(), b);
          } else {
            if (c instanceof T && c.right instanceof Hf) {
              c = new T(c.right.key, c.right.k, Gf(c.key, c.k, c.left.fb(), c.right.left), new Hf(e, d, c.right.right, b, null), null);
            } else {
              throw Error("red-black tree invariant violation");
            }
          }
        }
      } else {
        c = new T(c.key, c.k, c.left, b, null);
      }
    } else {
      c = null;
    }
    return c;
  }
  return null;
}, Nf = function Nf(b, c, d, e) {
  var f = c.key, g = b.b ? b.b(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.k, Nf(b, c.left, d, e), c.right) : c.replace(f, c.k, c.left, Nf(b, c.right, d, e));
};
function Of(a, b, c, d, e) {
  this.qa = a;
  this.Ta = b;
  this.d = c;
  this.h = d;
  this.m = e;
  this.i = 418776847;
  this.u = 8192;
}
h = Of.prototype;
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = L(f, 0), f = L(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Vc(b) ? (c = Gb(b), b = Hb(b), g = c, d = Fc(c), c = g) : (c = F(b), g = L(c, 0), c = f = L(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.get = function(a, b) {
  return this.w(null, a, b);
};
h.entries = function() {
  return Te(C(this));
};
h.toString = function() {
  return Qb(this);
};
h.keys = function() {
  return ic(Xe.a ? Xe.a(this) : Xe.call(null, this));
};
h.values = function() {
  return ic(Ye.a ? Ye.a(this) : Ye.call(null, this));
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.has = function(a) {
  return ad(this, a);
};
h.B = function(a, b) {
  return Ya.e(this, b, null);
};
h.w = function(a, b, c) {
  a: {
    for (a = this.Ta;;) {
      if (null != a) {
        var d;
        d = a.key;
        d = this.qa.b ? this.qa.b(b, d) : this.qa.call(null, b, d);
        if (0 === d) {
          b = a;
          break a;
        }
        a = 0 > d ? a.left : a.right;
      } else {
        b = null;
        break a;
      }
    }
  }
  return null != b ? b.k : c;
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = mc(this);
};
h.r = function(a, b) {
  return Re(this, b);
};
h.N = function() {
  return new Of(this.qa, null, 0, this.h, 0);
};
h.lb = function(a, b) {
  var c = [null], d = Mf(this.qa, this.Ta, b, c);
  return null == d ? null == Hc(c, 0) ? this : new Of(this.qa, null, 0, this.h, null) : new Of(this.qa, d.ya(), this.d - 1, this.h, null);
};
h.za = function(a, b, c) {
  a = [null];
  var d = Kf(this.qa, this.Ta, b, c, a);
  return null == d ? (a = Hc(a, 0), gc.b(c, a.k) ? this : new Of(this.qa, Nf(this.qa, this.Ta, b, c), this.d, this.h, null)) : new Of(this.qa, d.ya(), this.d + 1, this.h, null);
};
h.K = function() {
  var a;
  0 < this.d ? (a = this.d, a = new Ff(null, Ef(this.Ta, null, !0), !0, a, null)) : a = null;
  return a;
};
h.L = function(a, b) {
  return new Of(this.qa, this.Ta, this.d, b, this.m);
};
h.J = function(a, b) {
  if (Uc(b)) {
    return Za(this, B.b(b, 0), B.b(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = F(d);
    if (Uc(e)) {
      c = Za(c, B.b(e, 0), B.b(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.w(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.B(null, c);
  };
  a.e = function(a, c, d) {
    return this.w(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.B(null, a);
};
h.b = function(a, b) {
  return this.w(null, a, b);
};
var Pf = new Of(bd, null, 0, null, nc);
Of.prototype[Ha] = function() {
  return ic(this);
};
var ce = function ce() {
  return ce.j(0 < arguments.length ? new D(Array.prototype.slice.call(arguments, 0), 0) : null);
};
ce.j = function(a) {
  for (var b = C(a), c = Ab(af);;) {
    if (b) {
      a = H(H(b));
      var d = F(b), b = F(H(b)), c = Db(c, d, b), b = a;
    } else {
      return Cb(c);
    }
  }
};
ce.t = 0;
ce.s = function(a) {
  return ce.j(C(a));
};
function Qf() {
  a: {
    for (var a = C(0 < arguments.length ? new D(Array.prototype.slice.call(arguments, 0), 0) : null), b = Pf;;) {
      if (a) {
        var c = H(H(a)), b = Jc.e(b, F(a), F(H(a))), a = c
      } else {
        break a;
      }
    }
  }
  return b;
}
function Rf(a, b) {
  this.ma = a;
  this.na = b;
  this.i = 32374988;
  this.u = 0;
}
h = Rf.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.na;
};
h.ka = function() {
  var a = this.ma, a = (a ? a.i & 128 || a.mb || (a.i ? 0 : y(Va, a)) : y(Va, a)) ? this.ma.ka(null) : H(this.ma);
  return null == a ? null : new Rf(a, this.na);
};
h.C = function() {
  return kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.na);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return this.ma.U(null).Na(null);
};
h.la = function() {
  var a = this.ma, a = (a ? a.i & 128 || a.mb || (a.i ? 0 : y(Va, a)) : y(Va, a)) ? this.ma.ka(null) : H(this.ma);
  return null != a ? new Rf(a, this.na) : fc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Rf(this.ma, b);
};
h.J = function(a, b) {
  return zc(b, this);
};
Rf.prototype[Ha] = function() {
  return ic(this);
};
function Xe(a) {
  return(a = C(a)) ? new Rf(a, null) : null;
}
function bf(a) {
  return cb(a);
}
function Sf(a, b) {
  this.ma = a;
  this.na = b;
  this.i = 32374988;
  this.u = 0;
}
h = Sf.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.I = function() {
  return this.na;
};
h.ka = function() {
  var a = this.ma, a = (a ? a.i & 128 || a.mb || (a.i ? 0 : y(Va, a)) : y(Va, a)) ? this.ma.ka(null) : H(this.ma);
  return null == a ? null : new Sf(a, this.na);
};
h.C = function() {
  return kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.na);
};
h.R = function(a, b) {
  return dd(b, this);
};
h.S = function(a, b, c) {
  return gd(b, c, this);
};
h.U = function() {
  return this.ma.U(null).Oa(null);
};
h.la = function() {
  var a = this.ma, a = (a ? a.i & 128 || a.mb || (a.i ? 0 : y(Va, a)) : y(Va, a)) ? this.ma.ka(null) : H(this.ma);
  return null != a ? new Sf(a, this.na) : fc;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Sf(this.ma, b);
};
h.J = function(a, b) {
  return zc(b, this);
};
Sf.prototype[Ha] = function() {
  return ic(this);
};
function Ye(a) {
  return(a = C(a)) ? new Sf(a, null) : null;
}
function Yd(a) {
  return db(a);
}
function yd(a) {
  if (a && (a.u & 4096 || a.Nb)) {
    return a.Xa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function Tf(a, b, c) {
  this.l = a;
  this.end = b;
  this.step = c;
}
Tf.prototype.pb = function() {
  return 0 < this.step ? this.l < this.end : this.l > this.end;
};
Tf.prototype.next = function() {
  var a = this.l;
  this.l += this.step;
  return a;
};
function Uf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.u = 8192;
}
h = Uf.prototype;
h.toString = function() {
  return Qb(this);
};
h.equiv = function(a) {
  return this.r(null, a);
};
h.G = function(a, b) {
  if (b < Na(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.T = function(a, b, c) {
  return b < Na(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Wa = function() {
  return new Tf(this.start, this.end, this.step);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Uf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Uf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.P = function() {
  if (Ea(ub(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = kc(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  for (a = this.start;;) {
    if (0 < this.step ? a < this.end : a > this.end) {
      var d = a;
      c = b.b ? b.b(c, d) : b.call(null, c, d);
      a += this.step;
    } else {
      return c;
    }
  }
};
h.U = function() {
  return null == ub(this) ? null : this.start;
};
h.la = function() {
  return null != ub(this) ? new Uf(this.h, this.start + this.step, this.end, this.step, null) : fc;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new Uf(b, this.start, this.end, this.step, this.m);
};
h.J = function(a, b) {
  return zc(b, this);
};
Uf.prototype[Ha] = function() {
  return ic(this);
};
function Vf() {
  var a = U, b = V;
  return function() {
    function c(c, d, e) {
      return new Q(null, 2, 5, R, [a.e ? a.e(c, d, e) : a.call(null, c, d, e), b.e ? b.e(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new Q(null, 2, 5, R, [a.b ? a.b(c, d) : a.call(null, c, d), b.b ? b.b(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new Q(null, 2, 5, R, [a.a ? a.a(c) : a.call(null, c), b.a ? b.a(c) : b.call(null, c)], null);
    }
    function f() {
      return new Q(null, 2, 5, R, [a.n ? a.n() : a.call(null), b.n ? b.n() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new D(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new Q(null, 2, 5, R, [Pd(a, c, e, f, g), Pd(b, c, e, f, g)], null);
      }
      c.t = 3;
      c.s = function(a) {
        var b = F(a);
        a = H(a);
        var c = F(a);
        a = H(a);
        var e = F(a);
        a = ec(a);
        return d(b, c, e, a);
      };
      c.j = d;
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
            t = new D(u, 0);
          }
          return k.j(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.s = k.s;
    g.n = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.j = k.j;
    return g;
  }();
}
function Wf(a, b, c, d, e, f, g) {
  var k = ra;
  ra = null == ra ? null : ra - 1;
  try {
    if (null != ra && 0 > ra) {
      return wb(a, "#");
    }
    wb(a, c);
    if (0 === Ba.a(f)) {
      C(g) && wb(a, function() {
        var a = Xf.a(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (C(g)) {
        var l = F(g);
        b.e ? b.e(l, a, f) : b.call(null, l, a, f);
      }
      for (var p = H(g), q = Ba.a(f) - 1;;) {
        if (!p || null != q && 0 === q) {
          C(p) && 0 === q && (wb(a, d), wb(a, function() {
            var a = Xf.a(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          wb(a, d);
          var r = F(p);
          c = a;
          g = f;
          b.e ? b.e(r, c, g) : b.call(null, r, c, g);
          var t = H(p);
          c = q - 1;
          p = t;
          q = c;
        }
      }
    }
    return wb(a, e);
  } finally {
    ra = k;
  }
}
function Yf(a, b) {
  for (var c = C(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.G(null, f);
      wb(a, g);
      f += 1;
    } else {
      if (c = C(c)) {
        d = c, Vc(d) ? (c = Gb(d), e = Hb(d), d = c, g = Fc(c), c = e, e = g) : (g = F(d), wb(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Zf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function $f(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Zf[a];
  })), A('"')].join("");
}
function ag(a, b, c) {
  if (null == a) {
    return wb(b, "nil");
  }
  if (void 0 === a) {
    return wb(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = M(c, za);
    return w(b) ? (b = a ? a.i & 131072 || a.Mb ? !0 : a.i ? !1 : y(kb, a) : y(kb, a)) ? Rc(a) : b : b;
  }())) {
    wb(b, "^");
    var d = Rc(a);
    bg.e ? bg.e(d, b, c) : bg.call(null, d, b, c);
    wb(b, " ");
  }
  return null == a ? wb(b, "nil") : a.Vb ? a.fc(a, b, c) : a && (a.i & 2147483648 || a.Q) ? a.D(null, b, c) : Fa(a) === Boolean || "number" === typeof a ? wb(b, "" + A(a)) : null != a && a.constructor === Object ? (wb(b, "#js "), d = he.b(function(b) {
    return new Q(null, 2, 5, R, [xd.a(b), a[b]], null);
  }, Wc(a)), cg.o ? cg.o(d, bg, b, c) : cg.call(null, d, bg, b, c)) : Da(a) ? Wf(b, bg, "#js [", " ", "]", c, a) : w("string" == typeof a) ? w(xa.a(c)) ? wb(b, $f(a)) : wb(b, a) : Nc(a) ? Yf(b, Bc(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (Fc(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, Yf(b, Bc(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? Yf(b, Bc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.Q || (a.i ? 0 : y(xb, a)) : y(xb, a)) ? yb(a, b, c) : Yf(b, Bc(["#\x3c", "" + A(a), "\x3e"], 0));
}
function bg(a, b, c) {
  var d = dg.a(c);
  return w(d) ? (c = Jc.e(c, eg, ag), d.e ? d.e(a, b, c) : d.call(null, a, b, c)) : ag(a, b, c);
}
function fe() {
  var a = 0 < arguments.length ? new D(Array.prototype.slice.call(arguments, 0), 0) : null, b = va(), c;
  if (Sc(a)) {
    c = "";
  } else {
    c = A;
    var d = b, b = new la;
    a: {
      var e = a, a = new Pb(b);
      bg(F(e), a, d);
      for (var e = C(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.G(null, k);
          wb(a, " ");
          bg(l, a, d);
          k += 1;
        } else {
          if (e = C(e)) {
            f = e, Vc(f) ? (e = Gb(f), g = Hb(f), f = e, l = Fc(e), e = g, g = l) : (l = F(f), wb(a, " "), bg(l, a, d), e = H(f), f = null, g = 0), k = 0;
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
function cg(a, b, c, d) {
  return Wf(c, function(a, c, d) {
    var k = cb(a);
    b.e ? b.e(k, c, d) : b.call(null, k, c, d);
    wb(c, " ");
    a = db(a);
    return b.e ? b.e(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, C(a));
}
D.prototype.Q = !0;
D.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
zd.prototype.Q = !0;
zd.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
Ff.prototype.Q = !0;
Ff.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
wf.prototype.Q = !0;
wf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
Hf.prototype.Q = !0;
Hf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "[", " ", "]", c, this);
};
Ve.prototype.Q = !0;
Ve.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
He.prototype.Q = !0;
He.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
vd.prototype.Q = !0;
vd.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
Af.prototype.Q = !0;
Af.prototype.D = function(a, b, c) {
  return cg(this, bg, b, c);
};
yf.prototype.Q = !0;
yf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
Le.prototype.Q = !0;
Le.prototype.D = function(a, b, c) {
  return Wf(b, bg, "[", " ", "]", c, this);
};
Of.prototype.Q = !0;
Of.prototype.D = function(a, b, c) {
  return cg(this, bg, b, c);
};
Dd.prototype.Q = !0;
Dd.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
ae.prototype.Q = !0;
ae.prototype.D = function(a, b, c) {
  wb(b, "#\x3cAtom: ");
  bg(this.state, b, c);
  return wb(b, "\x3e");
};
Sf.prototype.Q = !0;
Sf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
T.prototype.Q = !0;
T.prototype.D = function(a, b, c) {
  return Wf(b, bg, "[", " ", "]", c, this);
};
Q.prototype.Q = !0;
Q.prototype.D = function(a, b, c) {
  return Wf(b, bg, "[", " ", "]", c, this);
};
td.prototype.Q = !0;
td.prototype.D = function(a, b) {
  return wb(b, "()");
};
n.prototype.Q = !0;
n.prototype.D = function(a, b, c) {
  return cg(this, bg, b, c);
};
Uf.prototype.Q = !0;
Uf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
Rf.prototype.Q = !0;
Rf.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
sd.prototype.Q = !0;
sd.prototype.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
cc.prototype.Ua = !0;
cc.prototype.La = function(a, b) {
  return bc(this, b);
};
N.prototype.Ua = !0;
N.prototype.La = function(a, b) {
  return wd(this, b);
};
Le.prototype.Ua = !0;
Le.prototype.La = function(a, b) {
  return cd(this, b);
};
Q.prototype.Ua = !0;
Q.prototype.La = function(a, b) {
  return cd(this, b);
};
function fg(a, b) {
  return ed(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function gg(a) {
  a *= Math.random.n ? Math.random.n() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var hg = null;
function ig() {
  if (null == hg) {
    var a = new n(null, 3, [jg, S, kg, S, lg, S], null);
    hg = O ? O(a) : be.call(null, a);
  }
  return hg;
}
function mg(a, b, c) {
  var d = gc.b(b, c);
  if (!d && !(d = ad(lg.a(a).call(null, b), c)) && (d = Uc(c)) && (d = Uc(b))) {
    if (d = Fc(c) === Fc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Fc(c)) {
          e = mg(a, function() {
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
function ng(a) {
  var b;
  b = ig();
  b = J.a ? J.a(b) : J.call(null, b);
  return Rd(M(jg.a(b), a));
}
function og(a, b, c, d) {
  ge.b(a, function() {
    return J.a ? J.a(b) : J.call(null, b);
  });
  ge.b(c, function() {
    return J.a ? J.a(d) : J.call(null, d);
  });
}
var pg = function pg(b, c, d) {
  var e = (J.a ? J.a(d) : J.call(null, d)).call(null, b), e = w(w(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = ng(c);;) {
      if (0 < Fc(e)) {
        pg(b, F(e), d), e = ec(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = ng(b);;) {
      if (0 < Fc(e)) {
        pg(F(e), c, d), e = ec(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function qg(a, b, c) {
  c = pg(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = mg;
    var d;
    d = ig();
    d = J.a ? J.a(d) : J.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var rg = function rg(b, c, d, e, f, g, k) {
  var l = ed(function(e, g) {
    var k = L(g, 0);
    L(g, 1);
    if (mg(J.a ? J.a(d) : J.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : qg(k, F(e), f);
      l = w(l) ? g : e;
      if (!w(qg(F(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(F(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, J.a ? J.a(e) : J.call(null, e));
  if (w(l)) {
    if (gc.b(J.a ? J.a(k) : J.call(null, k), J.a ? J.a(d) : J.call(null, d))) {
      return ge.o(g, Jc, c, F(H(l))), F(H(l));
    }
    og(g, e, k, d);
    return rg(b, c, d, e, f, g, k);
  }
  return null;
};
function W(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function sg(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.g = b;
  this.Wb = c;
  this.qb = d;
  this.eb = e;
  this.Xb = f;
  this.rb = g;
  this.hb = k;
  this.i = 4194305;
  this.u = 4352;
}
h = sg.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P, ba) {
    a = this;
    var sa = Qd(a.g, b, c, d, e, Bc([f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P, ba], 0)), mh = X(this, sa);
    w(mh) || W(a.name, sa);
    return Qd(mh, b, c, d, e, Bc([f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P, ba], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P) {
    a = this;
    var ba = a.g.ea ? a.g.ea(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P), sa = X(this, ba);
    w(sa) || W(a.name, ba);
    return sa.ea ? sa.ea(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P) : sa.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K, P);
  }
  function c(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K) {
    a = this;
    var P = a.g.da ? a.g.da(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K), ba = X(this, P);
    w(ba) || W(a.name, P);
    return ba.da ? ba.da(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K) : ba.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G, K);
  }
  function d(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G) {
    a = this;
    var K = a.g.ca ? a.g.ca(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G), P = X(this, K);
    w(P) || W(a.name, K);
    return P.ca ? P.ca(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G) : P.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E, G);
  }
  function e(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E) {
    a = this;
    var G = a.g.ba ? a.g.ba(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E), K = X(this, G);
    w(K) || W(a.name, G);
    return K.ba ? K.ba(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E) : K.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I, E);
  }
  function f(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I) {
    a = this;
    var E = a.g.aa ? a.g.aa(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I), G = X(this, E);
    w(G) || W(a.name, E);
    return G.aa ? G.aa(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I) : G.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, I);
  }
  function g(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
    a = this;
    var I = a.g.$ ? a.g.$(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x), E = X(this, I);
    w(E) || W(a.name, I);
    return E.$ ? E.$(b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : E.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
    a = this;
    var x = a.g.Z ? a.g.Z(b, c, d, e, f, g, k, l, p, q, r, t, u, v) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v), I = X(this, x);
    w(I) || W(a.name, x);
    return I.Z ? I.Z(b, c, d, e, f, g, k, l, p, q, r, t, u, v) : I.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
    a = this;
    var v = a.g.Y ? a.g.Y(b, c, d, e, f, g, k, l, p, q, r, t, u) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u), x = X(this, v);
    w(x) || W(a.name, v);
    return x.Y ? x.Y(b, c, d, e, f, g, k, l, p, q, r, t, u) : x.call(null, b, c, d, e, f, g, k, l, p, q, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, p, q, r, t) {
    a = this;
    var u = a.g.X ? a.g.X(b, c, d, e, f, g, k, l, p, q, r, t) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r, t), v = X(this, u);
    w(v) || W(a.name, u);
    return v.X ? v.X(b, c, d, e, f, g, k, l, p, q, r, t) : v.call(null, b, c, d, e, f, g, k, l, p, q, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, p, q, r) {
    a = this;
    var t = a.g.W ? a.g.W(b, c, d, e, f, g, k, l, p, q, r) : a.g.call(null, b, c, d, e, f, g, k, l, p, q, r), u = X(this, t);
    w(u) || W(a.name, t);
    return u.W ? u.W(b, c, d, e, f, g, k, l, p, q, r) : u.call(null, b, c, d, e, f, g, k, l, p, q, r);
  }
  function r(a, b, c, d, e, f, g, k, l, p, q) {
    a = this;
    var r = a.g.V ? a.g.V(b, c, d, e, f, g, k, l, p, q) : a.g.call(null, b, c, d, e, f, g, k, l, p, q), t = X(this, r);
    w(t) || W(a.name, r);
    return t.V ? t.V(b, c, d, e, f, g, k, l, p, q) : t.call(null, b, c, d, e, f, g, k, l, p, q);
  }
  function t(a, b, c, d, e, f, g, k, l, p) {
    a = this;
    var q = a.g.ha ? a.g.ha(b, c, d, e, f, g, k, l, p) : a.g.call(null, b, c, d, e, f, g, k, l, p), r = X(this, q);
    w(r) || W(a.name, q);
    return r.ha ? r.ha(b, c, d, e, f, g, k, l, p) : r.call(null, b, c, d, e, f, g, k, l, p);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    var p = a.g.ga ? a.g.ga(b, c, d, e, f, g, k, l) : a.g.call(null, b, c, d, e, f, g, k, l), q = X(this, p);
    w(q) || W(a.name, p);
    return q.ga ? q.ga(b, c, d, e, f, g, k, l) : q.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.g.fa ? a.g.fa(b, c, d, e, f, g, k) : a.g.call(null, b, c, d, e, f, g, k), p = X(this, l);
    w(p) || W(a.name, l);
    return p.fa ? p.fa(b, c, d, e, f, g, k) : p.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    var k = a.g.O ? a.g.O(b, c, d, e, f, g) : a.g.call(null, b, c, d, e, f, g), l = X(this, k);
    w(l) || W(a.name, k);
    return l.O ? l.O(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    var g = a.g.v ? a.g.v(b, c, d, e, f) : a.g.call(null, b, c, d, e, f), k = X(this, g);
    w(k) || W(a.name, g);
    return k.v ? k.v(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function I(a, b, c, d, e) {
    a = this;
    var f = a.g.o ? a.g.o(b, c, d, e) : a.g.call(null, b, c, d, e), g = X(this, f);
    w(g) || W(a.name, f);
    return g.o ? g.o(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.g.e ? a.g.e(b, c, d) : a.g.call(null, b, c, d), f = X(this, e);
    w(f) || W(a.name, e);
    return f.e ? f.e(b, c, d) : f.call(null, b, c, d);
  }
  function P(a, b, c) {
    a = this;
    var d = a.g.b ? a.g.b(b, c) : a.g.call(null, b, c), e = X(this, d);
    w(e) || W(a.name, d);
    return e.b ? e.b(b, c) : e.call(null, b, c);
  }
  function ba(a, b) {
    a = this;
    var c = a.g.a ? a.g.a(b) : a.g.call(null, b), d = X(this, c);
    w(d) || W(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function sa(a) {
    a = this;
    var b = a.g.n ? a.g.n() : a.g.call(null), c = X(this, b);
    w(c) || W(a.name, b);
    return c.n ? c.n() : c.call(null);
  }
  var G = null, G = function(G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb, ac, Lc, Od, qf) {
    switch(arguments.length) {
      case 1:
        return sa.call(this, G);
      case 2:
        return ba.call(this, G, aa);
      case 3:
        return P.call(this, G, aa, ea);
      case 4:
        return K.call(this, G, aa, ea, ga);
      case 5:
        return I.call(this, G, aa, ea, ga, ia);
      case 6:
        return E.call(this, G, aa, ea, ga, ia, ma);
      case 7:
        return x.call(this, G, aa, ea, ga, ia, ma, na);
      case 8:
        return v.call(this, G, aa, ea, ga, ia, ma, na, qa);
      case 9:
        return u.call(this, G, aa, ea, ga, ia, ma, na, qa, ua);
      case 10:
        return t.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya);
      case 11:
        return r.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca);
      case 12:
        return q.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia);
      case 13:
        return p.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra);
      case 14:
        return l.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa);
      case 15:
        return k.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc);
      case 16:
        return g.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib);
      case 17:
        return f.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb);
      case 18:
        return e.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb);
      case 19:
        return d.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb, ac);
      case 20:
        return c.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb, ac, Lc);
      case 21:
        return b.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb, ac, Lc, Od);
      case 22:
        return a.call(this, G, aa, ea, ga, ia, ma, na, qa, ua, ya, Ca, Ia, Ra, Wa, oc, ib, pb, Lb, ac, Lc, Od, qf);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  G.a = sa;
  G.b = ba;
  G.e = P;
  G.o = K;
  G.v = I;
  G.O = E;
  G.fa = x;
  G.ga = v;
  G.ha = u;
  G.V = t;
  G.W = r;
  G.X = q;
  G.Y = p;
  G.Z = l;
  G.$ = k;
  G.aa = g;
  G.ba = f;
  G.ca = e;
  G.da = d;
  G.ea = c;
  G.ub = b;
  G.Va = a;
  return G;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.n = function() {
  var a = this.g.n ? this.g.n() : this.g.call(null), b = X(this, a);
  w(b) || W(this.name, a);
  return b.n ? b.n() : b.call(null);
};
h.a = function(a) {
  var b = this.g.a ? this.g.a(a) : this.g.call(null, a), c = X(this, b);
  w(c) || W(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.b = function(a, b) {
  var c = this.g.b ? this.g.b(a, b) : this.g.call(null, a, b), d = X(this, c);
  w(d) || W(this.name, c);
  return d.b ? d.b(a, b) : d.call(null, a, b);
};
h.e = function(a, b, c) {
  var d = this.g.e ? this.g.e(a, b, c) : this.g.call(null, a, b, c), e = X(this, d);
  w(e) || W(this.name, d);
  return e.e ? e.e(a, b, c) : e.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  var e = this.g.o ? this.g.o(a, b, c, d) : this.g.call(null, a, b, c, d), f = X(this, e);
  w(f) || W(this.name, e);
  return f.o ? f.o(a, b, c, d) : f.call(null, a, b, c, d);
};
h.v = function(a, b, c, d, e) {
  var f = this.g.v ? this.g.v(a, b, c, d, e) : this.g.call(null, a, b, c, d, e), g = X(this, f);
  w(g) || W(this.name, f);
  return g.v ? g.v(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.O = function(a, b, c, d, e, f) {
  var g = this.g.O ? this.g.O(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f), k = X(this, g);
  w(k) || W(this.name, g);
  return k.O ? k.O(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.fa = function(a, b, c, d, e, f, g) {
  var k = this.g.fa ? this.g.fa(a, b, c, d, e, f, g) : this.g.call(null, a, b, c, d, e, f, g), l = X(this, k);
  w(l) || W(this.name, k);
  return l.fa ? l.fa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ga = function(a, b, c, d, e, f, g, k) {
  var l = this.g.ga ? this.g.ga(a, b, c, d, e, f, g, k) : this.g.call(null, a, b, c, d, e, f, g, k), p = X(this, l);
  w(p) || W(this.name, l);
  return p.ga ? p.ga(a, b, c, d, e, f, g, k) : p.call(null, a, b, c, d, e, f, g, k);
};
h.ha = function(a, b, c, d, e, f, g, k, l) {
  var p = this.g.ha ? this.g.ha(a, b, c, d, e, f, g, k, l) : this.g.call(null, a, b, c, d, e, f, g, k, l), q = X(this, p);
  w(q) || W(this.name, p);
  return q.ha ? q.ha(a, b, c, d, e, f, g, k, l) : q.call(null, a, b, c, d, e, f, g, k, l);
};
h.V = function(a, b, c, d, e, f, g, k, l, p) {
  var q = this.g.V ? this.g.V(a, b, c, d, e, f, g, k, l, p) : this.g.call(null, a, b, c, d, e, f, g, k, l, p), r = X(this, q);
  w(r) || W(this.name, q);
  return r.V ? r.V(a, b, c, d, e, f, g, k, l, p) : r.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q) {
  var r = this.g.W ? this.g.W(a, b, c, d, e, f, g, k, l, p, q) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q), t = X(this, r);
  w(t) || W(this.name, r);
  return t.W ? t.W(a, b, c, d, e, f, g, k, l, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  var t = this.g.X ? this.g.X(a, b, c, d, e, f, g, k, l, p, q, r) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r), u = X(this, t);
  w(u) || W(this.name, t);
  return u.X ? u.X(a, b, c, d, e, f, g, k, l, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  var u = this.g.Y ? this.g.Y(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t), v = X(this, u);
  w(v) || W(this.name, u);
  return v.Y ? v.Y(a, b, c, d, e, f, g, k, l, p, q, r, t) : v.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  var v = this.g.Z ? this.g.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u), x = X(this, v);
  w(x) || W(this.name, v);
  return x.Z ? x.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : x.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  var x = this.g.$ ? this.g.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v), E = X(this, x);
  w(E) || W(this.name, x);
  return E.$ ? E.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : E.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.aa = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  var E = this.g.aa ? this.g.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x), I = X(this, E);
  w(I) || W(this.name, E);
  return I.aa ? I.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : I.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.ba = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  var I = this.g.ba ? this.g.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E), K = X(this, I);
  w(K) || W(this.name, I);
  return K.ba ? K.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : K.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.ca = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) {
  var K = this.g.ca ? this.g.ca(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I), P = X(this, K);
  w(P) || W(this.name, K);
  return P.ca ? P.ca(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I) : P.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I);
};
h.da = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) {
  var P = this.g.da ? this.g.da(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K), ba = X(this, P);
  w(ba) || W(this.name, P);
  return ba.da ? ba.da(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K) : ba.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K);
};
h.ea = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) {
  var ba = this.g.ea ? this.g.ea(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P), sa = X(this, ba);
  w(sa) || W(this.name, ba);
  return sa.ea ? sa.ea(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P) : sa.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P);
};
h.ub = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba) {
  var sa = Qd(this.g, a, b, c, d, Bc([e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba], 0)), G = X(this, sa);
  w(G) || W(this.name, sa);
  return Qd(G, a, b, c, d, Bc([e, f, g, k, l, p, q, r, t, u, v, x, E, I, K, P, ba], 0));
};
function tg(a, b, c) {
  ge.o(a.eb, Jc, b, c);
  og(a.rb, a.eb, a.hb, a.qb);
}
function X(a, b) {
  gc.b(function() {
    var b = a.hb;
    return J.a ? J.a(b) : J.call(null, b);
  }(), function() {
    var b = a.qb;
    return J.a ? J.a(b) : J.call(null, b);
  }()) || og(a.rb, a.eb, a.hb, a.qb);
  var c = function() {
    var b = a.rb;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = rg(a.name, b, a.qb, a.eb, a.Xb, a.rb, a.hb);
  return w(c) ? c : function() {
    var b = a.eb;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, a.Wb);
}
h.Xa = function() {
  return Jb(this.name);
};
h.Ya = function() {
  return Kb(this.name);
};
h.C = function() {
  return this[fa] || (this[fa] = ++ha);
};
var ug = new N(null, "bullets", "bullets", 1734809024), vg = new N(null, "line-height", "line-height", 1870784992), V = new N(null, "p2", "p2", 905500641), wg = new N(null, "align", "align", 1964212802), xg = new N(null, "r", "r", -471384190), za = new N(null, "meta", "meta", 1499536964), yg = new N(null, "selected", "selected", 574897764), zg = new N(null, "enemy-spawn", "enemy-spawn", 1471569540), Aa = new N(null, "dup", "dup", 556298533), Ag = new N(null, "dir", "dir", 1734754661), Bg = new N(null, 
"ammo", "ammo", -1520726489), de = new N(null, "validator", "validator", -1966190681), Cg = new N(null, "default", "default", -1987822328), Dg = new N(null, "w", "w", 354169001), Eg = new N(null, "th", "th", -545608566), Fg = new N(null, "th1", "th1", 583362347), Gg = new N(null, "pos", "pos", -864607220), Y = new N(null, "type", "type", 1174270348), Hg = new N(null, "th2", "th2", 1996173036), Ig = new N(null, "cooldown", "cooldown", -1178127572), eg = new N(null, "fallback-impl", "fallback-impl", 
-1501286995), wa = new N(null, "flush-on-newline", "flush-on-newline", -151457939), Jg = new N(null, "segments", "segments", 1937535949), U = new N(null, "p1", "p1", -936759954), Kg = new N(null, "targets", "targets", 2014963406), Lg = new N(null, "walls", "walls", -268788818), Mg = new N(null, "chunks", "chunks", 83720431), kg = new N(null, "descendants", "descendants", 1824886031), Ng = new N(null, "font", "font", -1506159249), Og = new N(null, "k", "k", -2146297393), Pg = new N("figwheel-test.snake", 
"arc", "figwheel-test.snake/arc", -1171661361), Qg = new N(null, "center", "center", -748944368), lg = new N(null, "ancestors", "ancestors", -776045424), Rg = new N(null, "level", "level", 1290497552), Sg = new N(null, "turn", "turn", 75759344), xa = new N(null, "readably", "readably", 1129599760), Xf = new N(null, "more-marker", "more-marker", -14717935), Tg = new N(null, "head", "head", -771383919), Ug = new N(null, "c", "c", -1763192079), Vg = new N(null, "stop", "stop", -2140911342), Ba = new N(null, 
"print-length", "print-length", 1931866356), Wg = new N(null, "tail", "tail", -1146023564), Xg = new N(null, "id", "id", -1388402092), Yg = new N(null, "score", "score", -1963588780), Zg = new N(null, "terrain", "terrain", 704966005), jg = new N(null, "parents", "parents", -2027538891), $g = new N(null, "length", "length", 588987862), ah = new N(null, "level-tries", "level-tries", -968429098), bh = new N(null, "b", "b", 1482224470), ch = new N(null, "right", "right", -452581833), dh = new N(null, 
"health", "health", -295520649), eh = new N(null, "player", "player", -97687400), fh = new N(null, "target-length", "target-length", 208661657), gh = new N(null, "enemies", "enemies", 2114285722), hh = new N(null, "hierarchy", "hierarchy", -1053470341), dg = new N(null, "alt-impl", "alt-impl", 670969595), ih = new N(null, "barrel-change", "barrel-change", -347000069), jh = new N(null, "temperature", "temperature", 899018429), Z = new N("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), 
kh = new N(null, "left", "left", -399115937);
function lh(a) {
  var b = new la;
  for (a = C(a);;) {
    if (a) {
      b.append("" + A(F(a))), a = H(a), null != a && b.append(",");
    } else {
      return b.toString();
    }
  }
}
function nh(a) {
  a = gc.b("" + A("\n"), "/(?:)/") ? Dc.b(Ge(zc("", he.b(A, C(a)))), "") : Ge(("" + A(a)).split("\n"));
  if (gc.b(0, 0)) {
    a: {
      for (;;) {
        if (gc.b("", null == a ? null : eb(a))) {
          a = null == a ? null : fb(a);
        } else {
          break a;
        }
      }
    }
  }
  return a;
}
function oh(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
;var ph = function ph() {
  return ph.j(arguments[0], 1 < arguments.length ? new D(Array.prototype.slice.call(arguments, 1), 0) : null);
};
ph.j = function(a, b) {
  var c = L(b, 0), d = L(c, 0), c = L(c, 1);
  qd(b);
  a.beginPath();
  a.moveTo(d, c);
  for (var d = C(b), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var k = e.G(null, g), c = L(k, 0), k = L(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = C(d)) {
        Vc(d) ? (e = Gb(d), d = Hb(d), c = e, f = Fc(e), e = c) : (e = F(d), c = L(e, 0), k = L(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
ph.t = 1;
ph.s = function(a) {
  var b = F(a);
  a = H(a);
  return ph.j(b, a);
};
var qh = function qh() {
  return qh.j(arguments[0], 1 < arguments.length ? new D(Array.prototype.slice.call(arguments, 1), 0) : null);
};
qh.j = function(a, b) {
  Nd(ph, a, b);
  return a.stroke();
};
qh.t = 1;
qh.s = function(a) {
  var b = F(a);
  a = H(a);
  return qh.j(b, a);
};
function rh(a, b, c, d, e) {
  var f = L(b, 0);
  b = L(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function sh(a, b) {
  a.save();
  try {
    return b.n ? b.n() : b.call(null);
  } finally {
    a.restore();
  }
}
function th(a, b) {
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
  e = L(c, 0);
  c = L(c, 1);
  return[b.pageX - e, b.pageY - c];
}
function uh(a) {
  var b = new Q(null, 3, 5, R, [255, 255, 255], null), c = vh, d = c.canvas;
  return function(d, f, g, k) {
    return function p(q) {
      return window.requestAnimationFrame(function(d, e, f, g) {
        return function() {
          sh(c, function(a, d, e, f) {
            return function() {
              var a;
              a = 0 < q ? Jd.b(b, new Q(null, 1, 5, R, [f], null)) : b;
              a = [A(gc.b(Fc(a), 4) ? "rgba" : "rgb"), A("("), A(lh(a)), A(")")].join("");
              c.fillStyle = a;
              return c.fillRect(0, 0, d, e);
            };
          }(d, e, f, g));
          return 0 < q ? p(q - 1) : a.n ? a.n() : a.call(null);
        };
      }(d, f, g, k));
    };
  }(d, d.width, d.height, 1 - Math.pow(.05, 1 / 30)).call(null, 30);
}
;var wh = function wh(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = wh[m(null == b ? null : b)];
  if (!e && (e = wh._, !e)) {
    throw z("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function xh(a) {
  return 33 !== a.c.length;
}
function yh(a) {
  a = a.c[32];
  return a[a[32] - 1];
}
function zh(a, b, c) {
  for (;;) {
    if (w(xh(a))) {
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
;function Ah(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.c;
      }
      if (w(xh(c))) {
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
    return ue(e, a);
  }
}
function Bh(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = oe(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = oe(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var Ch = function Ch(b, c, d, e, f) {
  if (w(xh(e))) {
    for (var g = Ja(e.c), g = e = oe(e.p, g);;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (w(l)) {
          l = Ja(l.c);
          l = oe(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = Bh(f.c, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Ja(e.c);
    c = e.c[32];
    k = c[32] - 1;
    e = oe(e.p, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], p = 0 < k ? c[k] - c[k - 1] : c[0], l = p !== 1 << b ? Ch(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = Bh(f.c, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, Dh = function Dh(b, c, d, e) {
  if (w(xh(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = Dh(b - 5, c, d, e.c[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Ja(e.c);
      e[f] = b;
      return oe(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Ja(e.c);
    e[f] = null;
    return oe(d, e);
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
  c = Ja(g);
  if (5 < b) {
    var k = e.c[f];
    b = Dh(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    w(xh(k)) ? (e = Ja(e.c), c[f] -= 32) : (g = yh(k) - (w(b) ? yh(b) : 0), e = Ja(e.c), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return oe(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Ja(e.c);
  b = Ja(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return oe(d, e);
}, Eh = function Eh(b, c, d, e) {
  if (w(xh(c))) {
    for (var f = c = new ne(c.p, Ja(c.c));;) {
      if (0 === b) {
        f.c[d & 31] = e;
        break;
      } else {
        var f = f.c, g = d >> b & 31, k;
        k = f[g];
        k = new ne(k.p, Ja(k.c));
        f = f[g] = k;
        b -= 5;
      }
    }
    return c;
  }
  f = Ja(c.c);
  g = c.c[32];
  a: {
    for (k = d >> b & 31;;) {
      if (d < (g[k] | 0)) {
        break a;
      }
      k += 1;
    }
  }
  f[k] = Eh(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return oe(c.p, f);
};
function Fh(a, b) {
  if (b.p === a) {
    return b;
  }
  var c = Ja(b.c);
  33 === c.length && (c[32] = Ja(c[32]));
  return new ne(a, c);
}
var Gh = function Gh(b, c, d, e, f) {
  e = Fh(d, e);
  if (w(xh(e))) {
    for (var g = e;;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = Bh(f.c, d, b - 5, f);
        } else {
          l = Fh(d, l);
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
      var l = Fh(d, c[k]), p = 0 < k ? g[k] - g[k - 1] : g[0], l = p !== 1 << b ? Gh(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = Bh(f.c, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, Hh = function Hh(b, c, d, e, f) {
  d = Fh(c, d);
  if (w(xh(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.c[e & 31] = f;
        break;
      } else {
        var g = g.c, k = e >> b & 31, l = Fh(c, g[k]), g = g[k] = l;
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
    g[l] = Hh(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var Ih = function Ih(b) {
  if (b ? b.ob : b) {
    return b.ob(b);
  }
  var c;
  c = Ih[m(null == b ? null : b)];
  if (!c && (c = Ih._, !c)) {
    throw z("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function Jh(a, b, c, d, e, f) {
  this.M = a;
  this.ia = b;
  this.l = c;
  this.F = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.u = 1536;
}
h = Jh.prototype;
h.toString = function() {
  return Qb(this);
};
h.D = function(a, b, c) {
  return Wf(b, bg, "(", " ", ")", c, this);
};
h.I = function() {
  return this.h;
};
h.ka = function() {
  if (this.F + 1 < this.ia.length) {
    var a;
    a = this.M;
    var b = this.ia, c = this.l, d = this.F + 1;
    a = Kh ? Kh(a, b, c, d) : Lh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Ib(this);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = rd(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.N = function() {
  return Qc(fc, this.h);
};
h.R = function(a, b) {
  return qc(Ie(this.M, this.l + this.F, Fc(this.M)), b);
};
h.S = function(a, b, c) {
  return rc(Ie(this.M, this.l + this.F, Fc(this.M)), b, c);
};
h.U = function() {
  return this.ia[this.F];
};
h.la = function() {
  if (this.F + 1 < this.ia.length) {
    var a;
    a = this.M;
    var b = this.ia, c = this.l, d = this.F + 1;
    a = Kh ? Kh(a, b, c, d) : Lh.call(null, a, b, c, d);
    return null == a ? fc : a;
  }
  return Hb(this);
};
h.K = function() {
  return this;
};
h.jb = function() {
  var a = this.ia;
  return new Cd(a, this.F, a.length);
};
h.kb = function() {
  var a = this.ia.length, b;
  this.l + a < Na(this.M) ? (b = this.M, a = this.l + a, b = Mh ? Mh(b, a, 0) : Lh.call(null, b, a, 0)) : b = null;
  return null == b ? fc : b;
};
h.L = function(a, b) {
  var c = this.M, d = this.ia, e = this.l, f = this.F;
  return Nh ? Nh(c, d, e, f, b) : Lh.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return zc(b, this);
};
h.ib = function() {
  var a = this.ia.length, b;
  this.l + a < Na(this.M) ? (b = this.M, a = this.l + a, b = Mh ? Mh(b, a, 0) : Lh.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Lh() {
  switch(arguments.length) {
    case 3:
      return Mh(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Kh(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Nh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Mh(a, b, c) {
  return new Jh(a, Ah(a.d, a.shift, a.root, a.q, b), b, c, null, null);
}
function Kh(a, b, c, d) {
  return new Jh(a, b, c, d, null, null);
}
function Nh(a, b, c, d, e) {
  return new Jh(a, b, c, d, e, null);
}
var Oh = function Oh(b, c, d) {
  if (0 === c) {
    var e = b.c;
    b = Array(d);
    Xc(e, 0, b, 0, d);
  } else {
    var f = xh(b), g = Ea(f) ? b.c[32] : null, k = d - 1 >> c & 31, l = w(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), p = w(f) ? function() {
      var b = nd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.c, q = Oh(e[l], c - 5, p), r = 5 === c ? 32 === q.c.length : xh(q);
    b = Array(w(w(f) ? r : f) ? 32 : 33);
    var t = w(r) ? function() {
      var b = nd(p, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? q.c.length : yh(q);
    Xc(e, 0, b, 0, l);
    b[l] = q;
    if (Ea(w(f) ? r : f)) {
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
  return oe(null, b);
}, Ph = function Ph(b, c, d, e) {
  if (0 === c) {
    var f = b.c, g = f.length - d, k = Array(g);
    Xc(f, d, k, 0, g);
    return oe(null, k);
  }
  var l = xh(b), f = b.c, p = Ea(l) ? b.c[32] : null, q = d >> c & 31, r = w(l) ? q : function() {
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
  }() : p[32], t = Ph(f[r], c - 5, 0 < r ? d - (w(l) ? r * (1 << c) : p[r - 1]) : d, function() {
    var b = 1 << c, d = 0 < r ? e - (w(l) ? r * (1 << c) : p[r - 1]) : e;
    return b < d ? b : d;
  }()), g = k - r, g = null == t ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (w(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], v = 1 << c, x = 0, E = w(function() {
      var b = null == t;
      return b ? b : (b = 5 === c) ? b : xh(t);
    }()) ? (1 << c) - (d >> c - 5 & 31) : yh(t);;) {
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
  Xc(f, null == t ? r + 1 : r, k, 0, g);
  null != t && (k[0] = t);
  k[32] = u;
  return oe(b.p, k);
};
function Qh(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.u = 2052;
}
h = Qh.prototype;
h.toString = function() {
  return Qb(this);
};
h.B = function(a, b) {
  return B.e(this, b, null);
};
h.w = function(a, b, c) {
  return B.e(this, b, c);
};
h.G = function(a, b) {
  if (0 <= b && b < this.d) {
    var c = this.d - this.q.length;
    if (c <= b) {
      return this.q[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.c;
        return f[c >> e & 31];
      }
      if (w(xh(d))) {
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
    return ue(b, this.d);
  }
};
h.T = function(a, b, c) {
  return 0 <= b && b < this.d ? B.b(this, b) : c;
};
h.D = function(a, b, c) {
  return Wf(b, bg, "[", " ", "]", c, this);
};
h.Ea = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.q.length;
    return b >= d ? (a = Array(this.q.length), b -= d, Xc(this.q, 0, a, 0, this.q.length), a[b] = c, new Qh(this.d, this.shift, this.root, a, this.h, null)) : new Qh(this.d, this.shift, Eh(this.shift, this.root, b, c), this.q, this.h, null);
  }
  return b === this.d ? Pa(this, c) : ue(b, this.d);
};
h.ob = function() {
  return this;
};
h.I = function() {
  return this.h;
};
h.P = function() {
  return this.d;
};
h.Na = function() {
  return B.b(this, 0);
};
h.Oa = function() {
  return B.b(this, 1);
};
h.Ca = function() {
  return 0 < this.d ? B.b(this, this.d - 1) : null;
};
h.Da = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return nb(Ec, this.h);
  }
  if (1 < this.q.length) {
    var a = Array(this.q.length - 1);
    Xc(this.q, 0, a, 0, a.length);
    return new Qh(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = Ah(this.d, this.shift, this.root, this.q, this.d - 2), b = Dh(this.shift, this.d - this.q.length, this.root.p, this.root);
  return null == b ? new Qh(this.d - 1, this.shift, R, a, this.h, null) : 5 < this.shift && null == b.c[1] ? new Qh(this.d - 1, this.shift - 5, b.c[0], a, this.h, null) : new Qh(this.d - 1, this.shift, b, a, this.h, null);
};
h.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = rd(this);
};
h.r = function(a, b) {
  return yc(this, b);
};
h.Ma = function() {
  var a = this.d, b = this.shift, c = new ne({}, Ja(this.root.c)), d = this.q, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Xc(d, 0, e, 0, d.length);
  d = this.q.length;
  return Rh.v ? Rh.v(a, b, c, e, d) : Rh.call(null, a, b, c, e, d);
};
h.N = function() {
  return Qc(Ec, this.h);
};
h.nb = function(a, b, c) {
  a = c - b;
  if (0 > b || c > this.d) {
    throw Error("vector index out of bounds");
  }
  if (b === c) {
    return null == this ? null : Oa(this);
  }
  if (b > c) {
    throw Error("start index greater than end index");
  }
  var d = this.d - this.q.length;
  if (b >= d) {
    return c = Array(a), Xc(this.q, b - d, c, 0, a), new Qh(a, 5, R, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : Oh(this.root, this.shift, c);
  b = 0 === b ? f : Ph(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Xc(this.q, 0, d, 0, c), c = d) : c = Ah(a, this.shift, b, [], a - 1);
  e = e ? b : Dh(this.shift, a, b.p, b);
  if (null == e) {
    return new Qh(a, 5, R, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.c[1]) {
      b -= 5, e = e.c[0];
    } else {
      return new Qh(a, b, e, c, this.h, null);
    }
  }
};
h.R = function(a, b) {
  return qc(this, b);
};
h.S = function(a, b, c) {
  return rc(this, b, c);
};
h.za = function(a, b, c) {
  return hb(this, b, c);
};
h.K = function() {
  return 0 === this.d ? null : 0 === this.d - this.q.length ? Ac(this.q, 0) : Mh(this, 0, 0);
};
h.L = function(a, b) {
  return new Qh(this.d, this.shift, this.root, this.q, b, this.m);
};
h.J = function(a, b) {
  if (32 > this.q.length) {
    var c = this.q.length, d = Array(c + 1);
    Xc(this.q, 0, d, 0, c);
    d[c] = b;
    return new Qh(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = oe(this.root.p, this.q);
  d = [null];
  d[0] = b;
  if (w(zh(this.root, this.shift, this.d))) {
    if (w(xh(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = oe(this.root.p, e), g = e;
      g[0] = this.root;
      g[1] = Bh(this.q, this.root.p, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = oe(this.root.p, e), k = this.root.c[32][31];
      e[0] = this.root;
      e[1] = Bh(this.q, this.root.p, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new Qh(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new Qh(this.d + 1, this.shift, Ch(this.shift, this.d, this.root.p, this.root, c), d, this.h, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.T(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.T(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ja(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.T(null, a, b);
};
h.La = function(a, b) {
  return cd(this, b);
};
Q.prototype.ob = function() {
  return new Qh(Fc(this), this.shift, this.root, this.q, Rc(this), null);
};
Le.prototype.ob = function() {
  var a = this.start, b = this.end;
  return wh(Ih(this.sa), a, b);
};
function Sh(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.Ga = e;
  this.u = 88;
  this.i = 2;
}
h = Sh.prototype;
h.$a = function(a, b) {
  if (this.root.p) {
    if (32 > this.Ga) {
      this.q[this.Ga] = b, this.d += 1, this.Ga += 1;
    } else {
      var c = oe(this.root.p, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      this.Ga = 1;
      if (w(zh(this.root, this.shift, this.d))) {
        if (w(xh(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = Bh(this.q, this.root.p, this.shift, c);
          this.root = oe(this.root.p, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = oe(this.root.p, d), g = this.root.c[32][31];
          d[0] = this.root;
          d[1] = Bh(this.q, this.root.p, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = Gh(this.shift, this.d, this.root.p, this.root, c);
      }
      this.d += 1;
    }
    return this;
  }
  throw Error("conj! after persistent!");
};
h.ab = function() {
  if (this.root.p) {
    this.root.p = null;
    var a = Array(this.Ga);
    Xc(this.q, 0, a, 0, this.Ga);
    return new Qh(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  return Eb(this, b, c);
};
h.vb = function(a, b, c) {
  if (this.root.p) {
    return 0 <= b && b < this.d ? (a = this.d - this.Ga, a <= b ? this.q[b - a] = c : this.root = Hh(this.shift, this.root.p, this.root, b, c), this) : b === this.d ? Bb(this, c) : ue(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.P = function() {
  if (this.root.p) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function Rh(a, b, c, d, e) {
  return new Sh(a, b, c, d, e);
}
;Q.prototype.nb = function(a, b, c) {
  return wh(Ih(this), b, c);
};
Le.prototype.nb = function(a, b, c) {
  return wh(Ih(this), b, c);
};
function Th(a, b) {
  return wh(a, b, Fc(a));
}
;function Uh(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return[c - e, d - f];
}
function Vh(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return[c + e, d + f];
}
function Wh(a, b) {
  var c = L(b, 0), d = L(b, 1);
  return[a * c, a * d];
}
function Xh(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return c * e + d * f;
}
function Yh(a) {
  var b = L(a, 0);
  a = L(a, 1);
  return Math.atan2(a, b);
}
;var Zh = new Q(null, 8, 5, R, [new Q(null, 4, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-415, 44], null), V, new Q(null, 2, 5, R, [-415, -313], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-415, -313], null), V, new Q(null, 2, 5, R, [-55, -313], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-51, 246], null), V, new Q(null, 2, 5, R, [377, 246], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [377, 246], null), V, new Q(null, 2, 5, R, [377, 
-200], null)], null)], null), new Q(null, 8, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-344, 341], null), V, [-469, 341]], null), new n(null, 3, [Y, Z, U, [-469, 341], V, [-469, -292]], null), new n(null, 3, [Y, Z, U, [-469, -292], V, [-327, -292]], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-189, 340], null), V, [261, 340]], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-203, -294], null), V, [261, -294]], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [409, 
-293], null), V, [541, -293]], null), new n(null, 3, [Y, Z, U, [541, -293], V, [541, 327]], null), new n(null, 3, [Y, Z, U, [541, 327], V, [420, 327]], null)], null), new Q(null, 10, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-487, 145], null), V, new Q(null, 2, 5, R, [-487, -206], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-487, -206], null), V, [-241, -452]], null), new n(null, 3, [Y, Z, U, [-241, -452], V, new Q(null, 2, 5, R, [-5, -452], null)], null), new n(null, 
3, [Y, Z, U, new Q(null, 2, 5, R, [-5, -452], null), V, new Q(null, 2, 5, R, [-5, -280], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-190, 399], null), V, new Q(null, 2, 5, R, [153, 399], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [153, 399], null), V, new Q(null, 2, 5, R, [461, 399], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [461, 399], null), V, new Q(null, 2, 5, R, [461, 120], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [461, 
120], null), V, new Q(null, 2, 5, R, [261, 120], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [318, -426], null), V, [530, -214]], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-508, 422], null), V, [-235, 149]], null)], null), new Q(null, 10, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-363, 146], null), V, new Q(null, 2, 5, R, [-30, 147], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-30, 147], null), V, new Q(null, 2, 5, R, [88, 314], null)], null), 
new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [88, 314], null), V, new Q(null, 2, 5, R, [332, 315], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [332, 315], null), V, new Q(null, 2, 5, R, [527, 51], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [527, 51], null), V, new Q(null, 2, 5, R, [350, -268], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [350, -268], null), V, new Q(null, 2, 5, R, [93, -268], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 
5, R, [93, -268], null), V, new Q(null, 2, 5, R, [-34, -110], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-34, -110], null), V, new Q(null, 2, 5, R, [-371, -108], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-460, 353], null), V, new Q(null, 2, 5, R, [-65, 353], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-487, -314], null), V, new Q(null, 2, 5, R, [-62, -313], null)], null)], null), new Q(null, 10, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 
5, R, [330, -239], null), V, new Q(null, 2, 5, R, [331, 233], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [331, 233], null), V, new Q(null, 2, 5, R, [-239, 233], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-239, 233], null), V, new Q(null, 2, 5, R, [-241, 353], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-241, 353], null), V, new Q(null, 2, 5, R, [496, 352], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [496, 352], null), V, new Q(null, 
2, 5, R, [493, -111], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [77, -126], null), V, new Q(null, 2, 5, R, [-368, -126], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-368, -126], null), V, new Q(null, 2, 5, R, [-368, 224], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-368, 224], null), V, new Q(null, 2, 5, R, [-500, 366], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-500, 366], null), V, new Q(null, 2, 5, R, [-502, -363], null)], 
null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-502, -363], null), V, new Q(null, 2, 5, R, [-74, -363], null)], null)], null), new Q(null, 18, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [196, 141], null), V, new Q(null, 2, 5, R, [-295, 143], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-295, 143], null), V, new Q(null, 2, 5, R, [-420, -180], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-420, -180], null), V, new Q(null, 2, 5, R, [-262, -401], null)], 
null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-262, -401], null), V, new Q(null, 2, 5, R, [195, -403], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [190, -306], null), V, new Q(null, 2, 5, R, [-200, -303], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-200, -303], null), V, new Q(null, 2, 5, R, [-302, -171], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-302, -171], null), V, new Q(null, 2, 5, R, [-233, 22], null)], null), new n(null, 3, [Y, 
Z, U, new Q(null, 2, 5, R, [-233, 22], null), V, new Q(null, 2, 5, R, [188, 21], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-48, -98], null), V, new Q(null, 2, 5, R, [361, -100], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [361, -100], null), V, new Q(null, 2, 5, R, [512, 102], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [512, 102], null), V, new Q(null, 2, 5, R, [365, 377], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [365, 377], 
null), V, new Q(null, 2, 5, R, [-163, 382], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [294, 70], null), V, new Q(null, 2, 5, R, [352, 135], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [352, 135], null), V, new Q(null, 2, 5, R, [262, 285], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [262, 285], null), V, new Q(null, 2, 5, R, [-67, 287], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-300, 432], null), V, new Q(null, 2, 5, R, [-509, 
-74], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [363, -393], null), V, new Q(null, 2, 5, R, [518, -171], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [34, -203], null), V, new Q(null, 2, 5, R, [338, -205], null)], null)], null), Fe([new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-110, 43], null), V, new Q(null, 2, 5, R, [-70, 111], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-70, 111], null), V, new Q(null, 2, 5, R, [26, 145], null)], null), new n(null, 
3, [Y, Z, U, new Q(null, 2, 5, R, [26, 145], null), V, new Q(null, 2, 5, R, [171, 135], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [171, 135], null), V, new Q(null, 2, 5, R, [234, 81], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [234, 81], null), V, new Q(null, 2, 5, R, [381, 46], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [381, 46], null), V, new Q(null, 2, 5, R, [422, 65], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [422, 65], 
null), V, new Q(null, 2, 5, R, [451, 138], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [451, 138], null), V, new Q(null, 2, 5, R, [378, 276], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [378, 276], null), V, new Q(null, 2, 5, R, [197, 282], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [197, 282], null), V, new Q(null, 2, 5, R, [24, 261], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [24, 261], null), V, new Q(null, 2, 5, R, [-160, 205], 
null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-160, 205], null), V, new Q(null, 2, 5, R, [-230, 72], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-230, 72], null), V, new Q(null, 2, 5, R, [-265, -79], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-265, -79], null), V, new Q(null, 2, 5, R, [-151, -185], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-151, -185], null), V, new Q(null, 2, 5, R, [4, -215], null)], null), new n(null, 3, [Y, 
Z, U, new Q(null, 2, 5, R, [4, -215], null), V, new Q(null, 2, 5, R, [136, -205], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [136, -205], null), V, new Q(null, 2, 5, R, [206, -170], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [206, -170], null), V, new Q(null, 2, 5, R, [307, -193], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [307, -193], null), V, new Q(null, 2, 5, R, [375, -266], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-1, 
-109], null), V, new Q(null, 2, 5, R, [98, -100], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [98, -100], null), V, new Q(null, 2, 5, R, [146, -90], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [146, -90], null), V, new Q(null, 2, 5, R, [212, -17], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [212, -17], null), V, new Q(null, 2, 5, R, [260, -4], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [260, -4], null), V, new Q(null, 2, 5, R, [369, 
-37], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [369, -37], null), V, new Q(null, 2, 5, R, [466, -28], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [466, -28], null), V, new Q(null, 2, 5, R, [535, 57], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [535, 57], null), V, new Q(null, 2, 5, R, [561, 187], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [561, 187], null), V, new Q(null, 2, 5, R, [483, 313], null)], null), new n(null, 3, [Y, 
Z, U, new Q(null, 2, 5, R, [483, 313], null), V, new Q(null, 2, 5, R, [375, 368], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [308, -115], null), V, new Q(null, 2, 5, R, [428, -153], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [428, -153], null), V, new Q(null, 2, 5, R, [487, -223], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [487, -223], null), V, new Q(null, 2, 5, R, [509, -340], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [509, 
-340], null), V, new Q(null, 2, 5, R, [479, -395], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [479, -395], null), V, new Q(null, 2, 5, R, [288, -425], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [288, -425], null), V, new Q(null, 2, 5, R, [253, -311], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [253, -311], null), V, new Q(null, 2, 5, R, [138, -280], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [138, -280], null), V, new Q(null, 
2, 5, R, [8, -290], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [8, -290], null), V, new Q(null, 2, 5, R, [-142, -300], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-142, -300], null), V, new Q(null, 2, 5, R, [-265, -270], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-265, -270], null), V, new Q(null, 2, 5, R, [-360, -197], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-364, -16], null), V, new Q(null, 2, 5, R, [-319, 171], null)], 
null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-319, 171], null), V, new Q(null, 2, 5, R, [-247, 288], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-247, 288], null), V, new Q(null, 2, 5, R, [-94, 369], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-94, 369], null), V, new Q(null, 2, 5, R, [102, 364], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [102, 364], null), V, new Q(null, 2, 5, R, [158, 383], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 
2, 5, R, [-289, -161], null), V, new Q(null, 2, 5, R, [-378, -95], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-378, -95], null), V, new Q(null, 2, 5, R, [-477, -44], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-477, -44], null), V, new Q(null, 2, 5, R, [-476, 119], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-476, 119], null), V, new Q(null, 2, 5, R, [-418, 263], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-563, 25], null), 
V, new Q(null, 2, 5, R, [-551, -175], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-551, -175], null), V, new Q(null, 2, 5, R, [-394, -271], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-394, -271], null), V, new Q(null, 2, 5, R, [-335, -369], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-335, -369], null), V, new Q(null, 2, 5, R, [-222, -409], null)], null)]), new Q(null, 23, 5, R, [new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-60, -36], null), 
V, new Q(null, 2, 5, R, [157, -37], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-70, 50], null), V, new Q(null, 2, 5, R, [137, 50], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [261, -112], null), V, new Q(null, 2, 5, R, [261, 104], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [41, 188], null), V, new Q(null, 2, 5, R, [352, 186], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [376, -190], null), V, new Q(null, 2, 5, R, [375, 81], null)], 
null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-130, -176], null), V, new Q(null, 2, 5, R, [209, -176], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-183, -95], null), V, new Q(null, 2, 5, R, [-180, 145], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-224, -177], null), V, new Q(null, 2, 5, R, [-466, -356], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-242, -47], null), V, new Q(null, 2, 5, R, [-493, -47], null)], null), new n(null, 3, [Y, 
Z, U, new Q(null, 2, 5, R, [-241, 49], null), V, new Q(null, 2, 5, R, [-558, 49], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-486, 102], null), V, new Q(null, 2, 5, R, [-485, 379], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-401, 107], null), V, new Q(null, 2, 5, R, [-401, 366], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-347, 248], null), V, new Q(null, 2, 5, R, [-49, 250], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-49, 
250], null), V, new Q(null, 2, 5, R, [-49, 159], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [141, 240], null), V, new Q(null, 2, 5, R, [141, 413], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [252, 240], null), V, new Q(null, 2, 5, R, [252, 413], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [405, 143], null), V, new Q(null, 2, 5, R, [607, 345], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [382, 265], null), V, new Q(null, 2, 5, R, 
[555, 426], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [179, -272], null), V, new Q(null, 2, 5, R, [393, -422], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [334, -249], null), V, new Q(null, 2, 5, R, [545, -383], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [-95, -239], null), V, new Q(null, 2, 5, R, [-96, -407], null)], null), new n(null, 3, [Y, Z, U, new Q(null, 2, 5, R, [34, -241], null), V, new Q(null, 2, 5, R, [33, -404], null)], null), new n(null, 
3, [Y, Z, U, new Q(null, 2, 5, R, [-397, -99], null), V, new Q(null, 2, 5, R, [-397, -218], null)], null)], null)], null);
var $h = 2 * Math.PI, ai = function() {
  var a = document.createElement("canvas"), b = function() {
    var a = window.innerWidth;
    return 1280 > a ? a : 1280;
  }();
  w(b) && a.setAttribute("width", b);
  b = function() {
    var a = window.innerHeight;
    return 960 > a ? a : 960;
  }();
  w(b) && a.setAttribute("height", b);
  a.setAttribute("style", "border: 1px solid #000; display: block;");
  return a;
}();
window.onresize = function() {
  ai.width = window.innerWidth;
  return ai.height = window.innerHeight;
};
var bi = document.createElement("div"), vh = ai.getContext("2d");
function ci() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(bi);
    return a;
  }());
  return a.appendChild(ai);
}
da("figwheel_test.common.init_elements", ci);
function di(a, b) {
  return sh(vh, function() {
    if (w(b)) {
      var c = vh.canvas;
      vh.clearRect(0, 0, c.width, c.height);
    }
    vh.setTransform(1, 0, 0, -1, ai.width / 2, ai.height / 2);
    return a.n ? a.n() : a.call(null);
  });
}
var ei = !1;
function fi(a) {
  var b = L(a, 0);
  a = L(a, 1);
  return new Q(null, 2, 5, R, [b - ai.width / 2, ai.height / 2 - a], null);
}
function gi(a) {
  window.onkeypress = function(b) {
    return gc.b(b.which, 32) ? a.n ? a.n() : a.call(null) : null;
  };
  return ai.ontouchstart = function(b) {
    ei = !0;
    b = F(fi(th(vh, b.touches.item(0))));
    return 200 > Math.abs(b) ? a.n ? a.n() : a.call(null) : null;
  };
}
function hi(a, b, c, d) {
  var e = Zc(d) ? Md(ce, d) : d, f = Ic(e, wg, kh), g = Ic(e, Ng, "20px sans");
  sh(vh, function(d, e, f, g) {
    return function() {
      vh.font = g;
      vh.fillStyle = "#000";
      var d = vh.measureText(c).width, e = function() {
        switch(f instanceof N ? f.ra : null) {
          case "left":
            return 0;
          case "center":
            return d / 2;
          case "right":
            return d;
          default:
            throw Error([A("No matching clause: "), A(f)].join(""));;
        }
      }();
      vh.translate(a - e, b);
      vh.scale(1, -1);
      return vh.fillText(c, 0, 0);
    };
  }(d, e, f, g));
}
function ii(a, b, c, d) {
  var e = Zc(d) ? Md(ce, d) : d, f = Ic(e, vg, 20);
  return di(function(d, e, f, p) {
    return function() {
      return ed(function(b, c, d, e) {
        return function(b, c) {
          hi(a, b, c, d);
          return b - e;
        };
      }(d, e, f, p), b, he.b(oh, nh(c)));
    };
  }(d, e, e, f), !1);
}
function Xd(a, b) {
  return sh(vh, function() {
    vh.font = a;
    return vh.measureText(b).width;
  });
}
function ji(a) {
  return ii(0, 0, a, Bc([wg, Qg], 0));
}
;if ("undefined" === typeof ki) {
  var ki = function() {
    var a = O ? O(S) : be.call(null, S), b = O ? O(S) : be.call(null, S), c = O ? O(S) : be.call(null, S), d = O ? O(S) : be.call(null, S), e = Ic(S, hh, ig());
    return new sg(dc("draw-segment"), function() {
      return function(a, b) {
        return Y.a(b);
      };
    }(a, b, c, d, e), Cg, e, a, b, c, d);
  }()
}
tg(ki, Z, function(a, b) {
  var c = Zc(b) ? Md(ce, b) : b, d = M(c, U), c = M(c, V);
  return qh.j(a, Bc([d, c], 0));
});
tg(ki, Pg, function(a, b) {
  var c = Zc(b) ? Md(ce, b) : b, d = M(c, Ug), e = M(c, Fg), f = M(c, Hg), g = M(c, Ag), c = M(c, xg);
  return 0 > g ? rh(a, d, c, f, e) : rh(a, d, c, e, f);
});
if ("undefined" === typeof li) {
  var li = function() {
    var a = O ? O(S) : be.call(null, S), b = O ? O(S) : be.call(null, S), c = O ? O(S) : be.call(null, S), d = O ? O(S) : be.call(null, S), e = Ic(S, hh, ig());
    return new sg(dc("update-seg"), function() {
      return function(a) {
        return Y.a(a);
      };
    }(a, b, c, d, e), Cg, e, a, b, c, d);
  }()
}
tg(li, Z, function(a, b, c) {
  a = Zc(a) ? Md(ce, a) : a;
  var d = M(a, Ag);
  b = Wh(b, d);
  return me.o(a, gc.b(c, Tg) ? V : U, Vh, b);
});
tg(li, Pg, function(a, b, c) {
  a = Zc(a) ? Md(ce, a) : a;
  var d = M(a, Ag), e = M(a, xg);
  b = b / e * d;
  return me.o(a, gc.b(c, Tg) ? Hg : Fg, kd, b);
});
function mi(a, b) {
  return me.o(li.e ? li.e(a, b, Tg) : li.call(null, a, b, Tg), $g, kd, b);
}
function ni(a, b) {
  var c = Zc(a) ? Md(ce, a) : a;
  M(c, Y);
  return me.o(li.e ? li.e(c, b, Wg) : li.call(null, c, b, Wg), $g, ld, b);
}
function oi(a, b) {
  for (var c = 0, d = b;;) {
    if (gc.b(c, Fc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < $g.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return Th(me.o(a, c, ni, d), c);
    }
    var e = c + 1, d = d - $g.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof pi) {
  var pi = function() {
    var a = O ? O(S) : be.call(null, S), b = O ? O(S) : be.call(null, S), c = O ? O(S) : be.call(null, S), d = O ? O(S) : be.call(null, S), e = Ic(S, hh, ig());
    return new sg(dc("seg-normal"), function() {
      return function(a) {
        return Y.a(a);
      };
    }(a, b, c, d, e), Cg, e, a, b, c, d);
  }()
}
tg(pi, Z, function(a, b) {
  var c = Zc(a) ? Md(ce, a) : a, d = M(c, Ag), c = L(d, 0), d = L(d, 1);
  return gc.b(b, kh) ? [-d, c] : [d, -c];
});
tg(pi, Pg, function(a, b) {
  var c = Zc(a) ? Md(ce, a) : a;
  M(c, Fg);
  var d = M(c, Hg), c = M(c, Ag) * (gc.b(b, kh) ? -1 : 1);
  return Wh(c, new Q(null, 2, 5, R, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof qi) {
  var qi, ri = O ? O(S) : be.call(null, S), si = O ? O(S) : be.call(null, S), ti = O ? O(S) : be.call(null, S), ui = O ? O(S) : be.call(null, S), vi = Ic(S, hh, ig());
  qi = new sg(dc("seg-endpoint"), Y, Cg, vi, ri, si, ti, ui);
}
tg(qi, Z, function(a) {
  return V.a(a);
});
tg(qi, Pg, function(a) {
  var b = Zc(a) ? Md(ce, a) : a;
  M(b, Fg);
  a = M(b, Hg);
  var c = M(b, Ug), b = M(b, xg);
  return Vh(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function wi(a, b) {
  var c = Zc(a) ? Md(ce, a) : a, d = M(c, Jg);
  return Jc.e(c, Jg, gc.b($g.a(Cc(d)), 0) ? Dc.b(null == d ? null : fb(d), b) : Dc.b(d, b));
}
function xi(a, b) {
  var c = Zc(a) ? Md(ce, a) : a, d = M(c, Sg), e = M(c, Jg);
  return gc.b(d, b) ? c : wi(Jc.e(c, Sg, b), function() {
    switch(b instanceof N ? b.ra : null) {
      case "left":
        var a = Cc(e), c = function() {
          var c = a;
          return pi.b ? pi.b(c, b) : pi.call(null, c, b);
        }(), d = L(c, 0), l = L(c, 1), c = Vh(function() {
          var b = a;
          return qi.a ? qi.a(b) : qi.call(null, b);
        }(), Wh(25, c)), p = Math.atan2(-l, -d), d = p, l = gc.b(b, kh) ? 1 : -1;
        return new n(null, 7, [Y, Pg, Ug, c, Fg, p, Hg, d, $g, 0, Ag, l, xg, 25], null);
      case "right":
        return a = Cc(e), c = function() {
          var c = a;
          return pi.b ? pi.b(c, b) : pi.call(null, c, b);
        }(), d = L(c, 0), l = L(c, 1), c = Vh(function() {
          var b = a;
          return qi.a ? qi.a(b) : qi.call(null, b);
        }(), Wh(25, c)), d = p = Math.atan2(-l, -d), l = gc.b(b, kh) ? 1 : -1, new n(null, 7, [Y, Pg, Ug, c, Fg, p, Hg, d, $g, 0, Ag, l, xg, 25], null);
      default:
        return d = Cc(e), a = l = Zc(d) ? Md(ce, d) : d, d = M(l, Hg), l = M(l, Ag), c = function() {
          var b = a;
          return qi.a ? qi.a(b) : qi.call(null, b);
        }(), new n(null, 5, [Y, Z, U, c, V, c, $g, 0, Ag, Wh(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function yi(a) {
  var b = J.a ? J.a(zi) : J.call(null, zi);
  di(function() {
    var c = function() {
      var a = Cc(Jg.a(b));
      return qi.a ? qi.a(a) : qi.call(null, a);
    }(), d = L(c, 0), e = L(c, 1);
    a.translate(-function() {
      var a;
      a = 640 - ai.width / 2;
      a = d < a ? d : a;
      var b = ai.width / 2 - 640;
      return a > b ? a : b;
    }(), -function() {
      var a;
      a = 480 - ai.height / 2;
      a = e < a ? e : a;
      var b = ai.height / 2 - 480;
      return a > b ? a : b;
    }());
    return fg(Wd(ki, a), Jd.j(Lg.a(b), he.b(Yd, Kg.a(b)), Bc([Jg.a(b)], 0)));
  }, !0);
}
function Ai(a, b) {
  var c = Zc(a) ? Md(ce, a) : a, d = M(c, Fg), e = M(c, Hg), c = M(c, Ag);
  if (c * (e - d) > $h) {
    return!0;
  }
  var f = nd(b, $h), d = nd(d, $h), e = nd(e, $h);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= $h : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= $h;
}
if ("undefined" === typeof Bi) {
  var Bi = function() {
    var a = O ? O(S) : be.call(null, S), b = O ? O(S) : be.call(null, S), c = O ? O(S) : be.call(null, S), d = O ? O(S) : be.call(null, S), e = Ic(S, hh, ig());
    return new sg(dc("check-intersection"), function() {
      return function(a, b) {
        return new Q(null, 2, 5, R, [Y.a(a), Y.a(b)], null);
      };
    }(a, b, c, d, e), Cg, e, a, b, c, d);
  }()
}
tg(Bi, new Q(null, 2, 5, R, [Z, Z], null), function(a, b) {
  var c, d = new Q(null, 2, 5, R, [U.a(a), V.a(a)], null);
  c = new Q(null, 2, 5, R, [U.a(b), V.a(b)], null);
  var e = L(d, 0), d = L(d, 1), f = L(c, 0), g = L(c, 1), d = Uh(d, e);
  c = L(d, 0);
  var d = L(d, 1), k = Uh(g, f), g = L(k, 0), k = L(k, 1), f = Uh(f, e), e = L(f, 0), f = L(f, 1), l = -1 * c * k - -1 * d * g;
  c = gc.b(l, 0) ? null : new Q(null, 2, 5, R, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = L(c, 0);
  d = L(c, 1);
  return w(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
tg(Bi, new Q(null, 2, 5, R, [Z, Pg], null), function(a, b) {
  var c = Zc(a) ? Md(ce, a) : a, d = M(c, U), c = M(c, V), e = Zc(b) ? Md(ce, b) : b, f = M(e, xg);
  var g = M(e, Ug), c = Uh(c, d), e = Xh(c, c), d = Uh(d, g), g = Xh(d, d), k = Xh(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Xh(c, d) - g) / e, e = (-Xh(c, d) + g) / e, g = Yh(Vh(Wh(f, c), d)), c = Yh(Vh(Wh(e, c), d)), f = new Q(null, 4, 5, R, [f, e, g, c], null)) : f = null;
  g = L(f, 0);
  e = L(f, 1);
  d = L(f, 2);
  c = L(f, 3);
  return w(f) ? (d = (f = 0 < g && 1 > g) ? Ai(b, d) : f, w(d) ? d : (e = 0 < e && 1 > e) ? Ai(b, c) : e) : f;
});
tg(Bi, new Q(null, 2, 5, R, [Pg, Z], null), function(a, b) {
  return Bi.b ? Bi.b(b, a) : Bi.call(null, b, a);
});
tg(Bi, new Q(null, 2, 5, R, [Pg, Pg], null), function(a, b) {
  var c;
  var d = Ug.a(a), e = xg.a(a);
  c = Ug.a(b);
  var f = xg.a(b), g = Uh(c, d), d = L(g, 0);
  c = L(g, 1);
  g = Xh(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new Q(null, 4, 5, R, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = L(c, 0);
  d = L(c, 1);
  f = L(c, 2);
  e = L(c, 3);
  return w(c) ? (c = Ai(a, g), d = w(c) ? c : Ai(a, d), w(d) ? (f = Ai(b, f), w(f) ? f : Ai(b, e)) : d) : c;
});
function Ci(a) {
  var b = Zc(a) ? Md(ce, a) : a, c = M(b, Lg), d = M(b, Jg), e = Cc(d), f = null == d ? null : fb(d);
  return Td(function(a) {
    return function(b) {
      return Bi.b ? Bi.b(a, b) : Bi.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), Jd.b(c, w(Rd(f)) ? null == f ? null : fb(f) : f));
}
function Di(a) {
  var b = Zc(a) ? Md(ce, a) : a, c = M(b, Kg), d = M(b, Jg), e = Cc(d);
  return ed(function() {
    return function(a, b) {
      var c = L(b, 0);
      L(b, 1);
      return me.o(me.o(a, fh, kd, 50), Kg, Mc, c);
    };
  }(e, a, b, b, c, d), b, je(Ud(Wd(Bi, e), Yd), c));
}
O || be.call(null, null);
function Ei(a, b) {
  for (var c = Zc(b) ? Md(ce, b) : b, d = M(c, Lg), e = a.canvas, f = e.width, g = e.height, k = gg(f) - f / 2, l = gg(g) - g / 2;;) {
    if (w(Td(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), he.b(Ud(function(a, b) {
      return function(c) {
        var d = new Q(null, 2, 5, R, [a, b], null), e = L(c, 0);
        c = L(c, 1);
        c = Uh(c, e);
        var f = Xh(Uh(e, d), c) / Xh(c, c) * -1, f = 1 < f ? 1 : f, e = Uh(Vh(e, Wh(0 > f ? 0 : f, c)), d), d = L(e, 0), e = L(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), Vf()), d)))) {
      k = gg(f) - f / 2, l = gg(g) - g / 2;
    } else {
      return new Q(null, 2, 5, R, [k, l], null);
    }
  }
}
var Fi = new Q(null, 1, 5, R, [new n(null, 5, [$g, 100, Y, Z, Ag, new Q(null, 2, 5, R, [1, 0], null), U, new Q(null, 2, 5, R, [0, 0], null), V, new Q(null, 2, 5, R, [100, 0], null)], null)], null);
function Gi() {
  var a = new Q(null, 5, 5, R, [new Q(null, 2, 5, R, [-642, 482], null), new Q(null, 2, 5, R, [642, 482], null), new Q(null, 2, 5, R, [642, -482], null), new Q(null, 2, 5, R, [-642, -482], null), new Q(null, 2, 5, R, [-642, 482], null)], null);
  return he.e(function(a, c) {
    return new n(null, 3, [Y, Z, U, a, V, c], null);
  }, a, ec(a));
}
var Hi = function Hi() {
  switch(arguments.length) {
    case 2:
      return Hi.b(arguments[0], arguments[1]);
    case 3:
      return Hi.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Hi.b = function(a, b) {
  return Hi.e(a, b, function() {
    var b = nd(Rg.a(a), Fc(Zh));
    return Zh.a ? Zh.a(b) : Zh.call(null, b);
  }());
};
Hi.e = function(a, b, c) {
  return ed(function(a, c) {
    return me.v(a, Kg, Jc, c, new n(null, 6, [Y, Pg, Ug, Ei(b, a), Fg, 0, Hg, $h, Ag, 1, xg, 10], null));
  }, Jc.j(a, Jg, Fi, Bc([$g, 100, fh, 100, Sg, null, Kg, S, Lg, Jd.b(Gi(), c), Vg, !1], 0)), new Uf(null, 0, 10, 1, null));
};
Hi.t = 3;
var zi, Ii = new n(null, 2, [Rg, 0, ah, Qf()], null);
zi = O ? O(Ii) : be.call(null, Ii);
var Ji = function Ji(b, c, d) {
  return Ea(ei) ? gi(function() {
    ge.o(zi, Jc, Vg, !0);
    window.requestAnimationFrame(function() {
      return ji("Paused");
    });
    return gi(function() {
      ge.o(zi, Jc, Vg, !1);
      Ki.e ? Ki.e(b, c, d) : Ki.call(null, b, c, d);
      return Ji(b, c, d);
    });
  }) : null;
};
function Li() {
  window.onkeydown = null;
  return window.onkeyup = null;
}
function Mi() {
  ge.o(zi, le, new Q(null, 2, 5, R, [ah, Rg.a(J.a ? J.a(zi) : J.call(null, zi))], null), Zd());
}
function Ni() {
  var a = vh, b = ah.a(J.a ? J.a(zi) : J.call(null, zi));
  di(function() {
    var c = hd(md, he.b(Yd, b)), d = hd(md, he.b(Vd(), b)), e = d + 10 + 220 + Xd("16px serif", "" + A(c));
    return ed(function(b, c, d, e, p) {
      return function(e, l) {
        var t = L(l, 0), u = L(l, 1);
        ii(p, e, [A("Level "), A(t)].join(""), Bc([Ng, c], 0));
        a.strokeRect(p + d + 10, e - 4, 200 * u / b, 17);
        ii(p + d + 220, e, "" + A(u), Bc([Ng, c], 0));
        return e - 25;
      };
    }(c, "16px serif", d, e, e / -2), 150, b);
  }, !1);
}
function Oi() {
  return uh(function() {
    Ni();
    ii(0, 180, "You did it, Snake!  Here's how many tries it took you to beat each level.", Bc([wg, Qg], 0));
    ge.j(zi, Jc, ah, Qf(), Bc([Rg, 0], 0));
    return gi(function() {
      return Pi ? Pi(vh, "Ready to try again?") : Qi.call(null, vh, "Ready to try again?");
    });
  });
}
function Qi() {
  switch(arguments.length) {
    case 1:
      return Ri(arguments[0]);
    case 2:
      return Pi(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ri(a) {
  return Pi(a, "Press space or tap near the center when ready");
}
function Pi(a, b) {
  ge.e(zi, Hi, a);
  yi(a);
  ji([A("\n\n"), A(b)].join(""));
  return gi(function() {
    function b(a) {
      Mi();
      Li();
      ji("\n\n\nSnake?  Snake?! SNAAAAAAAAKE!!");
      return gi(function() {
        return Ri(a);
      });
    }
    try {
      var d = {level:Rg.a(J.a ? J.a(zi) : J.call(null, zi))};
      mixpanel.track("start level", d);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
    }
    d = function(a) {
      return function(b) {
        Mi();
        ge.o(zi, me, Rg, pc);
        Li();
        if (gc.b(Rg.a(J.a ? J.a(zi) : J.call(null, zi)), Fc(Zh))) {
          return Oi();
        }
        ji("\n\n\nYou did it, Snake!  Unfortunately there's another facility\nwe need you to infiltrate.");
        return gi(function() {
          return function() {
            return Ri(b);
          };
        }(a));
      };
    }(b);
    Ki.e ? Ki.e(a, b, d) : Ki.call(null, a, b, d);
    return Ji(a, b, d);
  });
}
var Si = new n(null, 4, [65, kh, 37, kh, 68, ch, 39, ch], null);
function Ki(a, b, c) {
  window.onkeydown = function(a) {
    a = a.which;
    a = Si.a ? Si.a(a) : Si.call(null, a);
    return w(a) ? ge.e(zi, xi, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = Si.a ? Si.a(a) : Si.call(null, a);
    return w(a) ? gc.b(a, Sg.a(J.a ? J.a(zi) : J.call(null, zi))) ? ge.e(zi, xi, null) : null : null;
  };
  ai.ontouchstart = function(b) {
    b.preventDefault();
    var c = Cc(Jg.a(J.a ? J.a(zi) : J.call(null, zi))), c = Zc(c) ? Md(ce, c) : c;
    M(c, Ag);
    M(c, U);
    b = fi(th(a, b.touches.item(0)));
    c = L(b, 0);
    L(b, 1);
    return ge.e(zi, xi, -40 > c ? kh : 40 < c ? ch : null);
  };
  ai.ontouchend = function(a) {
    a.preventDefault();
    return ge.e(zi, xi, null);
  };
  return function e() {
    if (Ea(Vg.a(J.a ? J.a(zi) : J.call(null, zi)))) {
      var f = ge.b(zi, function(a) {
        var b;
        b = fh.a(a);
        a = Zc(a) ? Md(ce, a) : a;
        var c = M(a, Jg), e = M(a, $g), f = Fc(c) - 1, r = e + 3 - b, c = me.o(c, f, mi, 3);
        b = Jc.j(a, Jg, 0 < r ? oi(c, r) : c, Bc([$g, Math.min(e + 3, b)], 0));
        return Di(b);
      });
      if (w(Ci(f))) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      if (Sc(Kg.a(f))) {
        return c.a ? c.a(a) : c.call(null, a);
      }
      yi(a);
      return window.requestAnimationFrame(e);
    }
    return Li();
  }.call(null);
}
da("figwheel_test.snake.init_everything", function() {
  ci();
  return Pi(vh, "\n\nSnake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you.\n\nYou'll need to turn left and right using the A and D keys.\n\nPress space or tap near the center of the screen to start");
});
var Ti = document.createElement("canvas");
Ti.setAttribute("width", 1280);
Ti.setAttribute("height", 960);
Ti.setAttribute("style", "border: 1px solid #000");
Ti.getContext("2d");
var Ui = new Q(null, 2, 5, R, [0, 0], null);
O || be.call(null, Ui);
function Vi() {
  for (var a = new Q(null, 3, 5, R, [gg(500) - 250, -215, gg(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = Jd.b(ie(function(a, b) {
        return function(a, c) {
          return new Q(null, 2, 5, R, [a, (a + c) / 2 + (1 * (Math.random.n ? Math.random.n() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), Bc([a, ec(a)], 0)), new Q(null, 1, 5, R, [Cc(a)], null)), b /= 2, --c;
    } else {
      return Ge(a);
    }
  }
}
function Wi(a) {
  var b = Fc(a) / 2;
  return ed(function() {
    return function(a, b) {
      return Jc.e(a, b, -215);
    };
  }(b), a, new Uf(null, b - 4, b + 4, 1, null));
}
O || be.call(null, 0);
O || be.call(null, !1);
var Xi = new Q(null, 2, 5, R, [1, 0], null);
O || be.call(null, Xi);
var Yi = new n(null, 7, [ug, S, Zg, function() {
  var a = Vi(), b = Fc(a) - 1;
  return Ge($d(function(a, b) {
    return function(a, c) {
      return new Q(null, 2, 5, R, [1280 * a / b - 640, c], null);
    };
  }(a, b), Wi(a)));
}(), gh, S, Mg, S, Yg, 0, zg, 60, eh, Kc([Bg, Dg, Eg, Gg, Ig, Og, bh, dh, ih, jh], [500, 0, 0, new Q(null, 2, 5, R, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || be.call(null, Yi);
O || be.call(null, !1);
O || be.call(null, 0);
var Zi = new n(null, 3, [Lg, S, yg, null, Xg, 0], null);
O || be.call(null, Zi);

})();
