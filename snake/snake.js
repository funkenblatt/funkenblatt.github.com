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
var h, ba = this;
function da(a, b) {
  var c = a.split("."), d = ba;
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
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ha(a) {
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
h.Ca = "";
h.set = function(a) {
  this.Ca = "" + a;
};
h.append = function(a, b, c) {
  this.Ca += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ca += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.Ca = "";
};
h.toString = function() {
  return this.Ca;
};
if ("undefined" === typeof ma) {
  var ma = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var pa = null;
if ("undefined" === typeof qa) {
  var qa = null
}
function sa() {
  return new n(null, 5, [ta, !0, va, !0, wa, !1, xa, !1, za, null], null);
}
function w(a) {
  return null != a && !1 !== a;
}
function Aa(a) {
  return a instanceof Array;
}
function Ba(a) {
  return w(a) ? !1 : !0;
}
function y(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function z(a, b) {
  var c = null == b ? null : b.constructor, c = w(w(c) ? c.Nb : c) ? c.Mb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Mb;
  return w(b) ? b : "" + A(a);
}
var Ea = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function Fa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ha = {}, Ia = {}, Ja = function Ja(b) {
  if (b ? b.M : b) {
    return b.M(b);
  }
  var c;
  c = Ja[m(null == b ? null : b)];
  if (!c && (c = Ja._, !c)) {
    throw z("ICounted.-count", b);
  }
  return c.call(null, b);
}, La = function La(b) {
  if (b ? b.N : b) {
    return b.N(b);
  }
  var c;
  c = La[m(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw z("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b, c) {
  if (b ? b.J : b) {
    return b.J(b, c);
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
B.v = 3;
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
      return Ua.b(arguments[0], arguments[1]);
    case 3:
      return Ua.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Ua.b = function(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw z("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ua.e = function(a, b, c) {
  if (a ? a.A : a) {
    return a.A(a, b, c);
  }
  var d;
  d = Ua[m(null == a ? null : a)];
  if (!d && (d = Ua._, !d)) {
    throw z("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ua.v = 3;
var Va = function Va(b, c) {
  if (b ? b.ob : b) {
    return b.ob(b, c);
  }
  var d;
  d = Va[m(null == b ? null : b)];
  if (!d && (d = Va._, !d)) {
    throw z("IAssociative.-contains-key?", b);
  }
  return d.call(null, b, c);
}, Wa = function Wa(b, c, d) {
  if (b ? b.Ga : b) {
    return b.Ga(b, c, d);
  }
  var e;
  e = Wa[m(null == b ? null : b)];
  if (!e && (e = Wa._, !e)) {
    throw z("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Xa = {}, Ya = function Ya(b, c) {
  if (b ? b.qb : b) {
    return b.qb(b, c);
  }
  var d;
  d = Ya[m(null == b ? null : b)];
  if (!d && (d = Ya._, !d)) {
    throw z("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Za = {}, $a = function $a(b) {
  if (b ? b.bb : b) {
    return b.bb(b);
  }
  var c;
  c = $a[m(null == b ? null : b)];
  if (!c && (c = $a._, !c)) {
    throw z("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, ab = function ab(b) {
  if (b ? b.cb : b) {
    return b.cb(b);
  }
  var c;
  c = ab[m(null == b ? null : b)];
  if (!c && (c = ab._, !c)) {
    throw z("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, bb = {}, db = function db(b) {
  if (b ? b.Ha : b) {
    return b.Ha(b);
  }
  var c;
  c = db[m(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw z("IStack.-peek", b);
  }
  return c.call(null, b);
}, eb = function eb(b) {
  if (b ? b.Ia : b) {
    return b.Ia(b);
  }
  var c;
  c = eb[m(null == b ? null : b)];
  if (!c && (c = eb._, !c)) {
    throw z("IStack.-pop", b);
  }
  return c.call(null, b);
}, fb = {}, gb = function gb(b, c, d) {
  if (b ? b.gb : b) {
    return b.gb(b, c, d);
  }
  var e;
  e = gb[m(null == b ? null : b)];
  if (!e && (e = gb._, !e)) {
    throw z("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, hb = function hb(b) {
  if (b ? b.yb : b) {
    return b.state;
  }
  var c;
  c = hb[m(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw z("IDeref.-deref", b);
  }
  return c.call(null, b);
}, ib = {}, kb = function kb(b) {
  if (b ? b.I : b) {
    return b.I(b);
  }
  var c;
  c = kb[m(null == b ? null : b)];
  if (!c && (c = kb._, !c)) {
    throw z("IMeta.-meta", b);
  }
  return c.call(null, b);
}, lb = {}, mb = function mb(b, c) {
  if (b ? b.L : b) {
    return b.L(b, c);
  }
  var d;
  d = mb[m(null == b ? null : b)];
  if (!d && (d = mb._, !d)) {
    throw z("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, nb = {}, ob = function ob() {
  switch(arguments.length) {
    case 2:
      return ob.b(arguments[0], arguments[1]);
    case 3:
      return ob.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
ob.b = function(a, b) {
  if (a ? a.Q : a) {
    return a.Q(a, b);
  }
  var c;
  c = ob[m(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw z("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ob.e = function(a, b, c) {
  if (a ? a.R : a) {
    return a.R(a, b, c);
  }
  var d;
  d = ob[m(null == a ? null : a)];
  if (!d && (d = ob._, !d)) {
    throw z("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ob.v = 3;
var pb = function pb(b, c) {
  if (b ? b.q : b) {
    return b.q(b, c);
  }
  var d;
  d = pb[m(null == b ? null : b)];
  if (!d && (d = pb._, !d)) {
    throw z("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, qb = function qb(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = qb[m(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw z("IHash.-hash", b);
  }
  return c.call(null, b);
}, rb = {}, sb = function sb(b) {
  if (b ? b.K : b) {
    return b.K(b);
  }
  var c;
  c = sb[m(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw z("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, tb = {}, ub = function ub(b, c) {
  if (b ? b.ub : b) {
    return b.ub(0, c);
  }
  var d;
  d = ub[m(null == b ? null : b)];
  if (!d && (d = ub._, !d)) {
    throw z("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, vb = {}, wb = function wb(b, c, d) {
  if (b ? b.D : b) {
    return b.D(b, c, d);
  }
  var e;
  e = wb[m(null == b ? null : b)];
  if (!e && (e = wb._, !e)) {
    throw z("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, xb = function xb(b, c, d) {
  if (b ? b.tb : b) {
    return b.tb(0, c, d);
  }
  var e;
  e = xb[m(null == b ? null : b)];
  if (!e && (e = xb._, !e)) {
    throw z("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, yb = function yb(b) {
  if (b ? b.Da : b) {
    return b.Da(b);
  }
  var c;
  c = yb[m(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw z("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b, c) {
  if (b ? b.Ka : b) {
    return b.Ka(b, c);
  }
  var d;
  d = Ab[m(null == b ? null : b)];
  if (!d && (d = Ab._, !d)) {
    throw z("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, Bb = function Bb(b) {
  if (b ? b.La : b) {
    return b.La(b);
  }
  var c;
  c = Bb[m(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw z("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b, c, d) {
  if (b ? b.Ja : b) {
    return b.Ja(b, c, d);
  }
  var e;
  e = Cb[m(null == b ? null : b)];
  if (!e && (e = Cb._, !e)) {
    throw z("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, Db = function Db(b, c, d) {
  if (b ? b.rb : b) {
    return b.rb(b, c, d);
  }
  var e;
  e = Db[m(null == b ? null : b)];
  if (!e && (e = Db._, !e)) {
    throw z("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, Eb = function Eb(b) {
  if (b ? b.sb : b) {
    return b.sb();
  }
  var c;
  c = Eb[m(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw z("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = Fb[m(null == b ? null : b)];
  if (!c && (c = Fb._, !c)) {
    throw z("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Gb = function Gb(b) {
  if (b ? b.ab : b) {
    return b.ab(b);
  }
  var c;
  c = Gb[m(null == b ? null : b)];
  if (!c && (c = Gb._, !c)) {
    throw z("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Hb = function Hb(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = Hb[m(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw z("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Ib = function Ib(b) {
  if (b ? b.Ta : b) {
    return b.Ta(b);
  }
  var c;
  c = Ib[m(null == b ? null : b)];
  if (!c && (c = Ib._, !c)) {
    throw z("INamed.-name", b);
  }
  return c.call(null, b);
}, Jb = function Jb(b) {
  if (b ? b.Ua : b) {
    return b.Ua(b);
  }
  var c;
  c = Jb[m(null == b ? null : b)];
  if (!c && (c = Jb._, !c)) {
    throw z("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Kb = function Kb(b, c) {
  if (b ? b.Hb : b) {
    return b.Hb(b, c);
  }
  var d;
  d = Kb[m(null == b ? null : b)];
  if (!d && (d = Kb._, !d)) {
    throw z("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Lb = function Lb() {
  switch(arguments.length) {
    case 2:
      return Lb.b(arguments[0], arguments[1]);
    case 3:
      return Lb.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Lb.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Lb.u(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Lb.b = function(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b);
  }
  var c;
  c = Lb[m(null == a ? null : a)];
  if (!c && (c = Lb._, !c)) {
    throw z("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Lb.e = function(a, b, c) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b, c);
  }
  var d;
  d = Lb[m(null == a ? null : a)];
  if (!d && (d = Lb._, !d)) {
    throw z("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Lb.p = function(a, b, c, d) {
  if (a ? a.Kb : a) {
    return a.Kb(a, b, c, d);
  }
  var e;
  e = Lb[m(null == a ? null : a)];
  if (!e && (e = Lb._, !e)) {
    throw z("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Lb.u = function(a, b, c, d, e) {
  if (a ? a.Lb : a) {
    return a.Lb(a, b, c, d, e);
  }
  var f;
  f = Lb[m(null == a ? null : a)];
  if (!f && (f = Lb._, !f)) {
    throw z("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Lb.v = 5;
var Mb = function Mb(b) {
  if (b ? b.Sa : b) {
    return b.Sa(b);
  }
  var c;
  c = Mb[m(null == b ? null : b)];
  if (!c && (c = Mb._, !c)) {
    throw z("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Nb(a) {
  this.Qb = a;
  this.i = 1073741824;
  this.r = 0;
}
Nb.prototype.ub = function(a, b) {
  return this.Qb.append(b);
};
function Ob(a) {
  var b = new la;
  a.D(null, new Nb(b), sa());
  return "" + A(b);
}
var Pb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.b ? Math.imul.b(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Qb(a) {
  a = Pb(a | 0, -862048943);
  return Pb(a << 15 | a >>> -15, 461845907);
}
function Rb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Pb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Sb(a, b) {
  var c = (a | 0) ^ b, c = Pb(c ^ c >>> 16, -2048144789), c = Pb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Ub(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Rb(c, Qb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Qb(a.charCodeAt(a.length - 1)) : b;
  return Sb(b, Pb(2, a.length));
}
var Vb = {}, Wb = 0;
function Xb(a) {
  255 < Wb && (Vb = {}, Wb = 0);
  var b = Vb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Pb(31, d) + a.charCodeAt(c), c = e
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
    Vb[a] = b;
    Wb += 1;
  }
  return a = b;
}
function Yb(a) {
  a && (a.i & 4194304 || a.Tb) ? a = a.C(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Xb(a), 0 !== a && (a = Qb(a), a = Rb(0, a), a = Sb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : qb(a);
  return a;
}
function Zb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function $b(a, b, c, d, e) {
  this.Qa = a;
  this.name = b;
  this.Aa = c;
  this.Fa = d;
  this.ka = e;
  this.i = 2154168321;
  this.r = 4096;
}
h = $b.prototype;
h.toString = function() {
  return this.Aa;
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return b instanceof $b ? this.Aa === b.Aa : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ua.e(c, this, null);
      case 3:
        return Ua.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return Ua.e(c, this, null);
  };
  a.e = function(a, c, d) {
    return Ua.e(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return Ua.e(a, this, null);
};
h.b = function(a, b) {
  return Ua.e(a, this, b);
};
h.I = function() {
  return this.ka;
};
h.L = function(a, b) {
  return new $b(this.Qa, this.name, this.Aa, this.Fa, b);
};
h.C = function() {
  var a = this.Fa;
  return null != a ? a : this.Fa = a = Zb(Ub(this.name), Xb(this.Qa));
};
h.Ta = function() {
  return this.name;
};
h.Ua = function() {
  return this.Qa;
};
h.D = function(a, b) {
  return ub(b, this.Aa);
};
function ac(a) {
  var b = [A("figwheel-test.snake"), A("/"), A(a)].join("");
  return new $b("figwheel-test.snake", a, b, null, null);
}
function C(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Ub)) {
    return a.K(null);
  }
  if (Aa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new bc(a, 0);
  }
  if (y(rb, a)) {
    return sb(a);
  }
  throw Error([A(a), A(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.fb)) {
    return a.fa(null);
  }
  a = C(a);
  return null == a ? null : Qa(a);
}
function dc(a) {
  return null != a ? a && (a.i & 64 || a.fb) ? a.la(null) : (a = C(a)) ? Ra(a) : ec : ec;
}
function H(a) {
  return null == a ? null : a && (a.i & 128 || a.eb) ? a.ia(null) : C(dc(a));
}
var fc = function fc() {
  switch(arguments.length) {
    case 1:
      return fc.a(arguments[0]);
    case 2:
      return fc.b(arguments[0], arguments[1]);
    default:
      return fc.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
fc.a = function() {
  return!0;
};
fc.b = function(a, b) {
  return null == a ? null == b : a === b || pb(a, b);
};
fc.k = function(a, b, c) {
  for (;;) {
    if (fc.b(a, b)) {
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return fc.b(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
fc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return fc.k(b, a, c);
};
fc.v = 2;
function gc(a) {
  this.s = a;
}
gc.prototype.next = function() {
  if (null != this.s) {
    var a = G(this.s);
    this.s = H(this.s);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function hc(a) {
  return new gc(C(a));
}
function ic(a, b) {
  var c = Qb(a), c = Rb(0, c);
  return Sb(c, b);
}
function jc(a) {
  var b = 0, c = 1;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = Pb(31, c) + Yb(G(a)) | 0, a = H(a);
    } else {
      return ic(c, b);
    }
  }
}
var kc = ic(1, 0);
function lc(a) {
  var b = 0, c = 0;
  for (a = C(a);;) {
    if (null != a) {
      b += 1, c = c + Yb(G(a)) | 0, a = H(a);
    } else {
      return ic(c, b);
    }
  }
}
var mc = ic(0, 0);
Ia["null"] = !0;
Ja["null"] = function() {
  return 0;
};
Date.prototype.q = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
pb.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
ib["function"] = !0;
kb["function"] = function() {
  return null;
};
qb._ = function(a) {
  return a[ea] || (a[ea] = ++fa);
};
function nc(a) {
  return a + 1;
}
function I(a) {
  return hb(a);
}
function oc(a, b) {
  var c = Ja(a);
  if (0 === c) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = B.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = B.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function pc(a, b, c) {
  var d = Ja(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = B.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function qc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.m ? b.m() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function rc(a, b, c) {
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
function sc(a, b, c, d) {
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
function tc(a) {
  return a ? a.i & 2 || a.xb ? !0 : a.i ? !1 : y(Ia, a) : y(Ia, a);
}
function uc(a, b) {
  this.c = a;
  this.j = b;
}
uc.prototype.jb = function() {
  return this.j < this.c.length;
};
uc.prototype.next = function() {
  var a = this.c[this.j];
  this.j += 1;
  return a;
};
function bc(a, b) {
  this.c = a;
  this.j = b;
  this.i = 166199550;
  this.r = 8192;
}
h = bc.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.G = function(a, b) {
  var c = b + this.j;
  return c < this.c.length ? this.c[c] : null;
};
h.ha = function(a, b, c) {
  a = b + this.j;
  return a < this.c.length ? this.c[a] : c;
};
h.Sa = function() {
  return new uc(this.c, this.j);
};
h.ia = function() {
  return this.j + 1 < this.c.length ? new bc(this.c, this.j + 1) : null;
};
h.M = function() {
  return this.c.length - this.j;
};
h.C = function() {
  return jc(this);
};
h.q = function(a, b) {
  return vc.b ? vc.b(this, b) : vc.call(null, this, b);
};
h.N = function() {
  return ec;
};
h.Q = function(a, b) {
  return sc(this.c, b, this.c[this.j], this.j + 1);
};
h.R = function(a, b, c) {
  return sc(this.c, b, c, this.j);
};
h.fa = function() {
  return this.c[this.j];
};
h.la = function() {
  return this.j + 1 < this.c.length ? new bc(this.c, this.j + 1) : ec;
};
h.K = function() {
  return this;
};
h.J = function(a, b) {
  return wc.b ? wc.b(b, this) : wc.call(null, b, this);
};
bc.prototype[Ea] = function() {
  return hc(this);
};
function xc(a, b) {
  return b < a.length ? new bc(a, b) : null;
}
function yc() {
  switch(arguments.length) {
    case 1:
      return xc(arguments[0], 0);
    case 2:
      return xc(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function zc(a) {
  for (;;) {
    var b = H(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
pb._ = function(a, b) {
  return a === b;
};
var Bc = function Bc() {
  switch(arguments.length) {
    case 0:
      return Bc.m();
    case 1:
      return Bc.a(arguments[0]);
    case 2:
      return Bc.b(arguments[0], arguments[1]);
    default:
      return Bc.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Bc.m = function() {
  return Cc;
};
Bc.a = function(a) {
  return a;
};
Bc.b = function(a, b) {
  return null != a ? Ma(a, b) : Ma(ec, b);
};
Bc.k = function(a, b, c) {
  for (;;) {
    if (w(c)) {
      a = Bc.b(a, b), b = G(c), c = H(c);
    } else {
      return Bc.b(a, b);
    }
  }
};
Bc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Bc.k(b, a, c);
};
Bc.v = 2;
function Dc(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.xb)) {
      a = a.M(null);
    } else {
      if (Aa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(Ia, a)) {
            a = Ja(a);
          } else {
            a: {
              a = C(a);
              for (var b = 0;;) {
                if (tc(a)) {
                  a = b + Ja(a);
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
function Ec(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return C(a) ? G(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.Ab || (d.i ? 0 : y(Na, d)) : y(Na, d)) {
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
function J(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.Ab)) {
    return a.ha(null, b, null);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (y(Na, a)) {
    return B.b(a, b);
  }
  if (a ? a.i & 64 || a.fb || (a.i ? 0 : y(Oa, a)) : y(Oa, a)) {
    return Ec(a, b);
  }
  throw Error([A("nth not supported on this type "), A(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.i & 256 || a.Bb) ? a.H(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Ta, a) ? Ua.b(a, b) : null;
}
function Fc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.Bb) ? a.A(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Ta, a) ? Ua.e(a, b, c) : c : c;
}
var Gc = function Gc() {
  switch(arguments.length) {
    case 3:
      return Gc.e(arguments[0], arguments[1], arguments[2]);
    default:
      return Gc.k(arguments[0], arguments[1], arguments[2], new bc(Array.prototype.slice.call(arguments, 3), 0));
  }
};
Gc.e = function(a, b, c) {
  return null != a ? Wa(a, b, c) : Hc([b], [c]);
};
Gc.k = function(a, b, c, d) {
  for (;;) {
    if (a = Gc.e(a, b, c), w(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
Gc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return Gc.k(b, a, c, d);
};
Gc.v = 3;
var Ic = function Ic() {
  switch(arguments.length) {
    case 1:
      return Ic.a(arguments[0]);
    case 2:
      return Ic.b(arguments[0], arguments[1]);
    default:
      return Ic.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ic.a = function(a) {
  return a;
};
Ic.b = function(a, b) {
  return null == a ? null : Ya(a, b);
};
Ic.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Ic.b(a, b);
    if (w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Ic.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Ic.k(b, a, c);
};
Ic.v = 2;
function Jc(a) {
  var b = "function" == m(a);
  return w(b) ? b : a ? w(w(null) ? null : a.wb) ? !0 : a.$b ? !1 : y(Ha, a) : y(Ha, a);
}
function Kc(a, b) {
  this.f = a;
  this.h = b;
  this.i = 393217;
  this.r = 0;
}
h = Kc.prototype;
h.I = function() {
  return this.h;
};
h.L = function(a, b) {
  return new Kc(this.f, b);
};
h.wb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) {
    a = this.f;
    return Lc.Ra ? Lc.Ra(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) : Lc.call(null, a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z);
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) {
    a = this;
    return a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) {
    a = this;
    return a.f.aa ? a.f.aa(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K);
  }
  function d(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) {
    a = this;
    return a.f.$ ? a.f.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D);
  }
  function e(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) {
    a = this;
    return a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E);
  }
  function f(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) {
    a = this;
    return a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F);
  }
  function g(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) {
    a = this;
    return a.f.X ? a.f.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v) {
    a = this;
    return a.f.W ? a.f.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, q, p, r, t, u) {
    a = this;
    return a.f.V ? a.f.V(b, c, d, e, f, g, k, l, q, p, r, t, u) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, q, p, r, t) {
    a = this;
    return a.f.U ? a.f.U(b, c, d, e, f, g, k, l, q, p, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, q, p, r) {
    a = this;
    return a.f.T ? a.f.T(b, c, d, e, f, g, k, l, q, p, r) : a.f.call(null, b, c, d, e, f, g, k, l, q, p, r);
  }
  function r(a, b, c, d, e, f, g, k, l, q, p) {
    a = this;
    return a.f.S ? a.f.S(b, c, d, e, f, g, k, l, q, p) : a.f.call(null, b, c, d, e, f, g, k, l, q, p);
  }
  function t(a, b, c, d, e, f, g, k, l, q) {
    a = this;
    return a.f.ea ? a.f.ea(b, c, d, e, f, g, k, l, q) : a.f.call(null, b, c, d, e, f, g, k, l, q);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.f.da ? a.f.da(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    return a.f.ca ? a.f.ca(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    return a.f.O ? a.f.O(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    return a.f.u ? a.f.u(b, c, d, e, f) : a.f.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    return a.f.p ? a.f.p(b, c, d, e) : a.f.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.f.e ? a.f.e(b, c, d) : a.f.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    return a.f.b ? a.f.b(b, c) : a.f.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    return a.f.a ? a.f.a(b) : a.f.call(null, b);
  }
  function oa(a) {
    a = this;
    return a.f.m ? a.f.m() : a.f.call(null);
  }
  var D = null, D = function(Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb, Tb, Ac, Bd, $e) {
    switch(arguments.length) {
      case 1:
        return oa.call(this, Ga);
      case 2:
        return Z.call(this, Ga, Y);
      case 3:
        return N.call(this, Ga, Y, aa);
      case 4:
        return K.call(this, Ga, Y, aa, ca);
      case 5:
        return F.call(this, Ga, Y, aa, ca, ga);
      case 6:
        return E.call(this, Ga, Y, aa, ca, ga, ia);
      case 7:
        return x.call(this, Ga, Y, aa, ca, ga, ia, ja);
      case 8:
        return v.call(this, Ga, Y, aa, ca, ga, ia, ja, na);
      case 9:
        return u.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra);
      case 10:
        return t.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua);
      case 11:
        return r.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya);
      case 12:
        return q.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca);
      case 13:
        return p.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka);
      case 14:
        return l.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa);
      case 15:
        return k.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D);
      case 16:
        return g.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb);
      case 17:
        return f.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb);
      case 18:
        return e.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb);
      case 19:
        return d.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb, Tb);
      case 20:
        return c.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb, Tb, Ac);
      case 21:
        return b.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb, Tb, Ac, Bd);
      case 22:
        return a.call(this, Ga, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, D, cb, jb, zb, Tb, Ac, Bd, $e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = oa;
  D.b = Z;
  D.e = N;
  D.p = K;
  D.u = F;
  D.O = E;
  D.ca = x;
  D.da = v;
  D.ea = u;
  D.S = t;
  D.T = r;
  D.U = q;
  D.V = p;
  D.W = l;
  D.X = k;
  D.Y = g;
  D.Z = f;
  D.$ = e;
  D.aa = d;
  D.ba = c;
  D.pb = b;
  D.Ra = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.m = function() {
  return this.f.m ? this.f.m() : this.f.call(null);
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
h.p = function(a, b, c, d) {
  return this.f.p ? this.f.p(a, b, c, d) : this.f.call(null, a, b, c, d);
};
h.u = function(a, b, c, d, e) {
  return this.f.u ? this.f.u(a, b, c, d, e) : this.f.call(null, a, b, c, d, e);
};
h.O = function(a, b, c, d, e, f) {
  return this.f.O ? this.f.O(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f);
};
h.ca = function(a, b, c, d, e, f, g) {
  return this.f.ca ? this.f.ca(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g);
};
h.da = function(a, b, c, d, e, f, g, k) {
  return this.f.da ? this.f.da(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k);
};
h.ea = function(a, b, c, d, e, f, g, k, l) {
  return this.f.ea ? this.f.ea(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l);
};
h.S = function(a, b, c, d, e, f, g, k, l, p) {
  return this.f.S ? this.f.S(a, b, c, d, e, f, g, k, l, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.T = function(a, b, c, d, e, f, g, k, l, p, q) {
  return this.f.T ? this.f.T(a, b, c, d, e, f, g, k, l, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.U = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  return this.f.U ? this.f.U(a, b, c, d, e, f, g, k, l, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.V = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  return this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  return this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  return this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  return this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  return this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) {
  return this.f.$ ? this.f.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
};
h.aa = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) {
  return this.f.aa ? this.f.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
};
h.ba = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) {
  return this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : this.f.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
};
h.pb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) {
  var oa = this.f;
  return Lc.Ra ? Lc.Ra(oa, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : Lc.call(null, oa, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z);
};
function Mc(a, b) {
  return Jc(a) && !(a ? a.i & 262144 || a.Yb || (a.i ? 0 : y(lb, a)) : y(lb, a)) ? new Kc(a, b) : null == a ? null : mb(a, b);
}
function Nc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Eb || (a.i ? 0 : y(ib, a)) : y(ib, a) : b) ? kb(a) : null;
}
function Oc(a) {
  return null == a || Ba(C(a));
}
function Pc(a) {
  return null == a ? !1 : a ? a.i & 4096 || a.Wb ? !0 : a.i ? !1 : y(bb, a) : y(bb, a);
}
function Qc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Cb ? !0 : a.i ? !1 : y(Xa, a) : y(Xa, a);
}
function Rc(a) {
  return a ? a.i & 16384 || a.Xb ? !0 : a.i ? !1 : y(fb, a) : y(fb, a);
}
function Sc(a) {
  return a ? a.r & 512 || a.Sb ? !0 : !1 : !1;
}
function Tc(a) {
  var b = [];
  ka(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Uc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Vc = {};
function Wc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.fb ? !0 : a.i ? !1 : y(Oa, a) : y(Oa, a);
}
function Xc(a) {
  return w(a) ? !0 : !1;
}
function Yc(a, b) {
  return Fc(a, b, Vc) === Vc ? !1 : !0;
}
function Zc(a, b) {
  var c = C(b);
  if (c) {
    var d = G(c), c = H(c);
    return $c ? $c(a, d, c) : ad.call(null, a, d, c);
  }
  return a.m ? a.m() : a.call(null);
}
function bd(a, b, c) {
  for (c = C(c);;) {
    if (c) {
      var d = G(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = H(c);
    } else {
      return b;
    }
  }
}
function ad() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.i & 524288 || b.Gb) ? b.Q(null, a) : Aa(b) ? qc(b, a) : "string" === typeof b ? qc(b, a) : y(nb, b) ? ob.b(b, a) : Zc(a, b);
    case 3:
      return $c(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function $c(a, b, c) {
  return c && (c.i & 524288 || c.Gb) ? c.R(null, a, b) : Aa(c) ? rc(c, a, b) : "string" === typeof c ? rc(c, a, b) : y(nb, c) ? ob.e(c, a, b) : bd(a, b, c);
}
function cd(a) {
  return a;
}
function dd(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = $c(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var ed = function ed() {
  switch(arguments.length) {
    case 0:
      return ed.m();
    case 1:
      return ed.a(arguments[0]);
    case 2:
      return ed.b(arguments[0], arguments[1]);
    default:
      return ed.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ed.m = function() {
  return 0;
};
ed.a = function(a) {
  return a;
};
ed.b = function(a, b) {
  return a + b;
};
ed.k = function(a, b, c) {
  return $c(ed, a + b, c);
};
ed.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ed.k(b, a, c);
};
ed.v = 2;
var fd = function fd() {
  switch(arguments.length) {
    case 1:
      return fd.a(arguments[0]);
    case 2:
      return fd.b(arguments[0], arguments[1]);
    default:
      return fd.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
fd.a = function(a) {
  return-a;
};
fd.b = function(a, b) {
  return a - b;
};
fd.k = function(a, b, c) {
  return $c(fd, a - b, c);
};
fd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return fd.k(b, a, c);
};
fd.v = 2;
function gd(a, b) {
  return(a % b + b) % b;
}
function hd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function id(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var A = function A() {
  switch(arguments.length) {
    case 0:
      return A.m();
    case 1:
      return A.a(arguments[0]);
    default:
      return A.k(arguments[0], new bc(Array.prototype.slice.call(arguments, 1), 0));
  }
};
A.m = function() {
  return "";
};
A.a = function(a) {
  return null == a ? "" : ha(a);
};
A.k = function(a, b) {
  for (var c = new la("" + A(a)), d = b;;) {
    if (w(d)) {
      c = c.append("" + A(G(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
A.t = function(a) {
  var b = G(a);
  a = H(a);
  return A.k(b, a);
};
A.v = 1;
function vc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Vb || (b.i ? 0 : y(tb, b)) : y(tb, b)) {
    if (tc(a) && tc(b) && Dc(a) !== Dc(b)) {
      c = !1;
    } else {
      a: {
        c = C(a);
        for (var d = C(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && fc.b(G(c), G(d))) {
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
  return Xc(c);
}
function jd(a) {
  if (C(a)) {
    var b = Yb(G(a));
    for (a = H(a);;) {
      if (null == a) {
        return b;
      }
      b = Zb(b, Yb(G(a)));
      a = H(a);
    }
  } else {
    return 0;
  }
}
function kd(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.l = e;
  this.i = 65937646;
  this.r = 8192;
}
h = kd.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  return 1 === this.count ? null : this.wa;
};
h.M = function() {
  return this.count;
};
h.Ha = function() {
  return this.first;
};
h.Ia = function() {
  return Ra(this);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return mb(ec, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return 1 === this.count ? ec : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new kd(b, this.first, this.wa, this.count, this.l);
};
h.J = function(a, b) {
  return new kd(this.h, b, this, this.count + 1, null);
};
kd.prototype[Ea] = function() {
  return hc(this);
};
function ld(a) {
  this.h = a;
  this.i = 65937614;
  this.r = 8192;
}
h = ld.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  return null;
};
h.M = function() {
  return 0;
};
h.Ha = function() {
  return null;
};
h.Ia = function() {
  throw Error("Can't pop empty list");
};
h.C = function() {
  return kc;
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return this;
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return null;
};
h.la = function() {
  return ec;
};
h.K = function() {
  return null;
};
h.L = function(a, b) {
  return new ld(b);
};
h.J = function(a, b) {
  return new kd(this.h, b, null, 1, null);
};
var ec = new ld(null);
ld.prototype[Ea] = function() {
  return hc(this);
};
var md = function md() {
  return md.k(0 < arguments.length ? new bc(Array.prototype.slice.call(arguments, 0), 0) : null);
};
md.k = function(a) {
  var b;
  if (a instanceof bc && 0 === a.j) {
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
  for (var c = ec;;) {
    if (0 < a) {
      var d = a - 1, c = c.J(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
md.v = 0;
md.t = function(a) {
  return md.k(C(a));
};
function nd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.l = d;
  this.i = 65929452;
  this.r = 8192;
}
h = nd.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  return null == this.wa ? null : C(this.wa);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return null == this.wa ? ec : this.wa;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new nd(b, this.first, this.wa, this.l);
};
h.J = function(a, b) {
  return new nd(null, b, this, this.l);
};
nd.prototype[Ea] = function() {
  return hc(this);
};
function wc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.fb)) ? new nd(null, a, b, null) : new nd(null, a, C(b), null);
}
function M(a, b, c, d) {
  this.Qa = a;
  this.name = b;
  this.va = c;
  this.Fa = d;
  this.i = 2153775105;
  this.r = 4096;
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
        return Fc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return L(c, this);
  };
  a.e = function(a, c, d) {
    return Fc(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return L(a, this);
};
h.b = function(a, b) {
  return Fc(a, this, b);
};
h.C = function() {
  var a = this.Fa;
  return null != a ? a : this.Fa = a = Zb(Ub(this.name), Xb(this.Qa)) + 2654435769 | 0;
};
h.Ta = function() {
  return this.name;
};
h.Ua = function() {
  return this.Qa;
};
h.D = function(a, b) {
  return ub(b, [A(":"), A(this.va)].join(""));
};
var od = function od() {
  switch(arguments.length) {
    case 1:
      return od.a(arguments[0]);
    case 2:
      return od.b(arguments[0], arguments[1]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
od.a = function(a) {
  if (a instanceof M) {
    return a;
  }
  if (a instanceof $b) {
    var b;
    if (a && (a.r & 4096 || a.Fb)) {
      b = a.Ua(null);
    } else {
      throw Error([A("Doesn't support namespace: "), A(a)].join(""));
    }
    return new M(b, pd.a ? pd.a(a) : pd.call(null, a), a.Aa, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new M(b[0], b[1], a, null) : new M(null, b[0], a, null)) : null;
};
od.b = function(a, b) {
  return new M(a, b, [A(w(a) ? [A(a), A("/")].join("") : null), A(b)].join(""), null);
};
od.v = 2;
function qd(a, b, c, d) {
  this.h = a;
  this.Na = b;
  this.s = c;
  this.l = d;
  this.i = 32374988;
  this.r = 0;
}
h = qd.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
function rd(a) {
  null != a.Na && (a.s = a.Na.m ? a.Na.m() : a.Na.call(null), a.Na = null);
  return a.s;
}
h.I = function() {
  return this.h;
};
h.ia = function() {
  sb(this);
  return null == this.s ? null : H(this.s);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  sb(this);
  return null == this.s ? null : G(this.s);
};
h.la = function() {
  sb(this);
  return null != this.s ? dc(this.s) : ec;
};
h.K = function() {
  rd(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof qd) {
      a = rd(a);
    } else {
      return this.s = a, C(this.s);
    }
  }
};
h.L = function(a, b) {
  return new qd(b, this.Na, this.s, this.l);
};
h.J = function(a, b) {
  return wc(b, this);
};
qd.prototype[Ea] = function() {
  return hc(this);
};
function sd(a, b) {
  this.nb = a;
  this.end = b;
  this.i = 2;
  this.r = 0;
}
sd.prototype.add = function(a) {
  this.nb[this.end] = a;
  return this.end += 1;
};
sd.prototype.pa = function() {
  var a = new td(this.nb, 0, this.end);
  this.nb = null;
  return a;
};
sd.prototype.M = function() {
  return this.end;
};
function td(a, b, c) {
  this.c = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.r = 0;
}
h = td.prototype;
h.M = function() {
  return this.end - this.w;
};
h.G = function(a, b) {
  return this.c[this.w + b];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.c[this.w + b] : c;
};
h.sb = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new td(this.c, this.w + 1, this.end);
};
h.Q = function(a, b) {
  return sc(this.c, b, this.c[this.w], this.w + 1);
};
h.R = function(a, b, c) {
  return sc(this.c, b, c, this.w);
};
function ud(a, b, c, d) {
  this.pa = a;
  this.sa = b;
  this.h = c;
  this.l = d;
  this.i = 31850732;
  this.r = 1536;
}
h = ud.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  if (1 < Ja(this.pa)) {
    return new ud(Eb(this.pa), this.sa, this.h, null);
  }
  var a = sb(this.sa);
  return null == a ? null : a;
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.fa = function() {
  return B.b(this.pa, 0);
};
h.la = function() {
  return 1 < Ja(this.pa) ? new ud(Eb(this.pa), this.sa, this.h, null) : null == this.sa ? ec : this.sa;
};
h.K = function() {
  return this;
};
h.$a = function() {
  return this.pa;
};
h.ab = function() {
  return null == this.sa ? ec : this.sa;
};
h.L = function(a, b) {
  return new ud(this.pa, this.sa, b, this.l);
};
h.J = function(a, b) {
  return wc(b, this);
};
h.Za = function() {
  return null == this.sa ? null : this.sa;
};
ud.prototype[Ea] = function() {
  return hc(this);
};
function vd(a, b) {
  return 0 === Ja(a) ? b : new ud(a, b, null, null);
}
function wd(a, b) {
  a.add(b);
}
function xd(a) {
  for (var b = [];;) {
    if (C(a)) {
      b.push(G(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function yd(a, b) {
  if (tc(a)) {
    return Dc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && C(c)) {
      c = H(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var zd = function zd(b) {
  return null == b ? null : null == H(b) ? C(G(b)) : wc(G(b), zd(H(b)));
}, Ad = function Ad() {
  switch(arguments.length) {
    case 0:
      return Ad.m();
    case 1:
      return Ad.a(arguments[0]);
    case 2:
      return Ad.b(arguments[0], arguments[1]);
    default:
      return Ad.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Ad.m = function() {
  return new qd(null, function() {
    return null;
  }, null, null);
};
Ad.a = function(a) {
  return new qd(null, function() {
    return a;
  }, null, null);
};
Ad.b = function(a, b) {
  return new qd(null, function() {
    var c = C(a);
    return c ? Sc(c) ? vd(Fb(c), Ad.b(Gb(c), b)) : wc(G(c), Ad.b(dc(c), b)) : b;
  }, null, null);
};
Ad.k = function(a, b, c) {
  return function e(a, b) {
    return new qd(null, function() {
      var c = C(a);
      return c ? Sc(c) ? vd(Fb(c), e(Gb(c), b)) : wc(G(c), e(dc(c), b)) : w(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(Ad.b(a, b), c);
};
Ad.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Ad.k(b, a, c);
};
Ad.v = 2;
var Cd = function Cd() {
  switch(arguments.length) {
    case 0:
      return Cd.m();
    case 1:
      return Cd.a(arguments[0]);
    case 2:
      return Cd.b(arguments[0], arguments[1]);
    default:
      return Cd.k(arguments[0], arguments[1], new bc(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Cd.m = function() {
  return yb(Cc);
};
Cd.a = function(a) {
  return a;
};
Cd.b = function(a, b) {
  return Ab(a, b);
};
Cd.k = function(a, b, c) {
  for (;;) {
    if (a = Ab(a, b), w(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Cd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Cd.k(b, a, c);
};
Cd.v = 2;
function Dd(a, b, c) {
  var d = C(c);
  if (0 === b) {
    return a.m ? a.m() : a.call(null);
  }
  c = Qa(d);
  var e = Ra(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Qa(e), f = Ra(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Qa(f), g = Ra(f);
  if (3 === b) {
    return a.e ? a.e(c, d, e) : a.e ? a.e(c, d, e) : a.call(null, c, d, e);
  }
  var f = Qa(g), k = Ra(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Qa(k), l = Ra(k);
  if (5 === b) {
    return a.u ? a.u(c, d, e, f, g) : a.u ? a.u(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Qa(l), p = Ra(l);
  if (6 === b) {
    return a.O ? a.O(c, d, e, f, g, k) : a.O ? a.O(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Qa(p), q = Ra(p);
  if (7 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l) : a.ca ? a.ca(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var p = Qa(q), r = Ra(q);
  if (8 === b) {
    return a.da ? a.da(c, d, e, f, g, k, l, p) : a.da ? a.da(c, d, e, f, g, k, l, p) : a.call(null, c, d, e, f, g, k, l, p);
  }
  var q = Qa(r), t = Ra(r);
  if (9 === b) {
    return a.ea ? a.ea(c, d, e, f, g, k, l, p, q) : a.ea ? a.ea(c, d, e, f, g, k, l, p, q) : a.call(null, c, d, e, f, g, k, l, p, q);
  }
  var r = Qa(t), u = Ra(t);
  if (10 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l, p, q, r) : a.S ? a.S(c, d, e, f, g, k, l, p, q, r) : a.call(null, c, d, e, f, g, k, l, p, q, r);
  }
  var t = Qa(u), v = Ra(u);
  if (11 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, p, q, r, t) : a.T ? a.T(c, d, e, f, g, k, l, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, p, q, r, t);
  }
  var u = Qa(v), x = Ra(v);
  if (12 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, p, q, r, t, u) : a.U ? a.U(c, d, e, f, g, k, l, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u);
  }
  var v = Qa(x), E = Ra(x);
  if (13 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.V ? a.V(c, d, e, f, g, k, l, p, q, r, t, u, v) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v);
  }
  var x = Qa(E), F = Ra(E);
  if (14 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.W ? a.W(c, d, e, f, g, k, l, p, q, r, t, u, v, x) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
  }
  var E = Qa(F), K = Ra(F);
  if (15 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.X ? a.X(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
  }
  var F = Qa(K), N = Ra(K);
  if (16 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.Y ? a.Y(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
  }
  var K = Qa(N), Z = Ra(N);
  if (17 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : a.Z ? a.Z(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
  }
  var N = Qa(Z), oa = Ra(Z);
  if (18 === b) {
    return a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : a.$ ? a.$(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
  }
  Z = Qa(oa);
  oa = Ra(oa);
  if (19 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : a.aa ? a.aa(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z);
  }
  var D = Qa(oa);
  Ra(oa);
  if (20 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D) : a.ba ? a.ba(c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D) : a.call(null, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Lc() {
  switch(arguments.length) {
    case 2:
      return Ed(arguments[0], arguments[1]);
    case 3:
      return Fd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = wc(arguments[1], wc(arguments[2], arguments[3])), c = a.v;
      if (a.t) {
        var d = yd(b, c + 1);
        a = d <= c ? Dd(a, d, b) : a.t(b);
      } else {
        a = a.apply(a, xd(b));
      }
      return a;
    case 5:
      return Gd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Hd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new bc(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Ed(a, b) {
  var c = a.v;
  if (a.t) {
    var d = yd(b, c + 1);
    return d <= c ? Dd(a, d, b) : a.t(b);
  }
  return a.apply(a, xd(b));
}
function Fd(a, b, c) {
  b = wc(b, c);
  c = a.v;
  if (a.t) {
    var d = yd(b, c + 1);
    return d <= c ? Dd(a, d, b) : a.t(b);
  }
  return a.apply(a, xd(b));
}
function Gd(a, b, c, d, e) {
  b = wc(b, wc(c, wc(d, e)));
  c = a.v;
  return a.t ? (d = yd(b, c + 1), d <= c ? Dd(a, d, b) : a.t(b)) : a.apply(a, xd(b));
}
function Hd(a, b, c, d, e, f) {
  b = wc(b, wc(c, wc(d, wc(e, zd(f)))));
  c = a.v;
  return a.t ? (d = yd(b, c + 1), d <= c ? Dd(a, d, b) : a.t(b)) : a.apply(a, xd(b));
}
function Id(a) {
  return C(a) ? a : null;
}
function Jd(a, b) {
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
function Kd(a, b) {
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
function Ld(a, b) {
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
      var c = b.m ? b.m() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new bc(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Gd(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.v = 3;
      c.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = dc(a);
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
            t = new bc(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.v = 3;
    g.t = k.t;
    g.m = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.k = k.k;
    return g;
  }();
}
function Md(a, b) {
  return function() {
    function c(c, d, e) {
      return a.p ? a.p(b, c, d, e) : a.call(null, b, c, d, e);
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
          g = new bc(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return Hd(a, b, c, e, f, yc([g], 0));
      }
      c.v = 3;
      c.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = dc(a);
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
            t = new bc(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.v = 3;
    g.t = k.t;
    g.m = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.k = k.k;
    return g;
  }();
}
function Nd(a, b) {
  return function d(b, f) {
    return new qd(null, function() {
      var g = C(f);
      if (g) {
        if (Sc(g)) {
          for (var k = Fb(g), l = Dc(k), p = new sd(Array(l), 0), q = 0;;) {
            if (q < l) {
              wd(p, function() {
                var d = b + q, f = B.b(k, q);
                return a.b ? a.b(d, f) : a.call(null, d, f);
              }()), q += 1;
            } else {
              break;
            }
          }
          return vd(p.pa(), d(b + l, Gb(g)));
        }
        return wc(function() {
          var d = G(g);
          return a.b ? a.b(b, d) : a.call(null, b, d);
        }(), d(b + 1, dc(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Od(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Rb = c;
  this.vb = d;
  this.r = 16386;
  this.i = 6455296;
}
h = Od.prototype;
h.equiv = function(a) {
  return this.q(null, a);
};
h.q = function(a, b) {
  return this === b;
};
h.yb = function() {
  return this.state;
};
h.I = function() {
  return this.h;
};
h.tb = function(a, b, c) {
  for (var d = C(this.vb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.G(null, g);
      var k = J(a, 0);
      a = J(a, 1);
      var l = b, p = c;
      a.p ? a.p(k, this, l, p) : a.call(null, k, this, l, p);
      g += 1;
    } else {
      if (a = C(d)) {
        d = a, Sc(d) ? (e = Fb(d), d = Gb(d), a = e, f = Dc(e), e = a) : (a = G(d), k = J(a, 0), a = J(a, 1), e = k, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.C = function() {
  return this[ea] || (this[ea] = ++fa);
};
function Pd() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new bc(Array.prototype.slice.call(arguments, 1), 0), c = Wc(b) ? Ed(Qd, b) : b, b = L(c, wa), c = L(c, Rd);
      return new Od(a, b, c, null);
  }
}
function O(a) {
  return new Od(a, null, null, null);
}
function Sd(a, b) {
  if (a instanceof Od) {
    var c = a.Rb;
    if (null != c && !w(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([A("Assert failed: "), A("Validator rejected reference state"), A("\n"), A(function() {
        var a = md(new $b(null, "validate", "validate", 1439230700, null), new $b(null, "new-value", "new-value", -1567397401, null));
        return Td.a ? Td.a(a) : Td.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.vb && xb(a, c, b);
    return b;
  }
  return Kb(a, b);
}
var Ud = function Ud() {
  switch(arguments.length) {
    case 2:
      return Ud.b(arguments[0], arguments[1]);
    case 3:
      return Ud.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ud.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Ud.k(arguments[0], arguments[1], arguments[2], arguments[3], new bc(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Ud.b = function(a, b) {
  var c;
  a instanceof Od ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Sd(a, c)) : c = Lb.b(a, b);
  return c;
};
Ud.e = function(a, b, c) {
  if (a instanceof Od) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = Sd(a, b);
  } else {
    a = Lb.e(a, b, c);
  }
  return a;
};
Ud.p = function(a, b, c, d) {
  if (a instanceof Od) {
    var e = a.state;
    b = b.e ? b.e(e, c, d) : b.call(null, e, c, d);
    a = Sd(a, b);
  } else {
    a = Lb.p(a, b, c, d);
  }
  return a;
};
Ud.k = function(a, b, c, d, e) {
  return a instanceof Od ? Sd(a, Gd(b, a.state, c, d, e)) : Lb.u(a, b, c, d, e);
};
Ud.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Ud.k(b, a, c, d, e);
};
Ud.v = 4;
var Vd = function Vd() {
  switch(arguments.length) {
    case 1:
      return Vd.a(arguments[0]);
    case 2:
      return Vd.b(arguments[0], arguments[1]);
    case 3:
      return Vd.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Vd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Vd.k(arguments[0], arguments[1], arguments[2], arguments[3], new bc(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Vd.a = function(a) {
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
        return b.m ? b.m() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new bc(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Fd(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.v = 2;
        c.t = function(a) {
          var b = G(a);
          a = H(a);
          var c = G(a);
          a = dc(a);
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
              q = new bc(r, 0);
            }
            return g.k(a, b, q);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.v = 2;
      f.t = g.t;
      f.m = e;
      f.a = d;
      f.b = c;
      f.k = g.k;
      return f;
    }();
  };
};
Vd.b = function(a, b) {
  return new qd(null, function() {
    var c = C(b);
    if (c) {
      if (Sc(c)) {
        for (var d = Fb(c), e = Dc(d), f = new sd(Array(e), 0), g = 0;;) {
          if (g < e) {
            wd(f, function() {
              var b = B.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return vd(f.pa(), Vd.b(a, Gb(c)));
      }
      return wc(function() {
        var b = G(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Vd.b(a, dc(c)));
    }
    return null;
  }, null, null);
};
Vd.e = function(a, b, c) {
  return new qd(null, function() {
    var d = C(b), e = C(c);
    if (d && e) {
      var f = wc, g;
      g = G(d);
      var k = G(e);
      g = a.b ? a.b(g, k) : a.call(null, g, k);
      d = f(g, Vd.e(a, dc(d), dc(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Vd.p = function(a, b, c, d) {
  return new qd(null, function() {
    var e = C(b), f = C(c), g = C(d);
    if (e && f && g) {
      var k = wc, l;
      l = G(e);
      var p = G(f), q = G(g);
      l = a.e ? a.e(l, p, q) : a.call(null, l, p, q);
      e = k(l, Vd.p(a, dc(e), dc(f), dc(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Vd.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new qd(null, function() {
      var b = Vd.b(C, a);
      return Jd(cd, b) ? wc(Vd.b(G, b), k(Vd.b(dc, b))) : null;
    }, null, null);
  };
  return Vd.b(function() {
    return function(b) {
      return Ed(a, b);
    };
  }(f), f(Bc.k(e, d, yc([c, b], 0))));
};
Vd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Vd.k(b, a, c, d, e);
};
Vd.v = 4;
function Wd(a, b) {
  return Ed(Ad, Fd(Vd, a, b));
}
function Xd(a, b) {
  return new qd(null, function() {
    var c = C(b);
    if (c) {
      if (Sc(c)) {
        for (var d = Fb(c), e = Dc(d), f = new sd(Array(e), 0), g = 0;;) {
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
        return vd(f.pa(), Xd(a, Gb(c)));
      }
      d = G(c);
      c = dc(c);
      return w(a.a ? a.a(d) : a.call(null, d)) ? wc(d, Xd(a, c)) : Xd(a, c);
    }
    return null;
  }, null, null);
}
var Yd = function Yd() {
  switch(arguments.length) {
    case 2:
      return Yd.b(arguments[0], arguments[1]);
    case 3:
      return Yd.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
Yd.b = function(a, b) {
  var c;
  null != a ? a && (a.r & 4 || a.zb) ? (c = $c(Ab, yb(a), b), c = Bb(c), c = Mc(c, Nc(a))) : c = $c(Ma, a, b) : c = $c(Bc, ec, b);
  return c;
};
Yd.e = function(a, b, c) {
  a && (a.r & 4 || a.zb) ? (b = dd(b, Cd, yb(a), c), b = Bb(b), a = Mc(b, Nc(a))) : a = dd(b, Bc, a, c);
  return a;
};
Yd.v = 3;
var Zd = function Zd() {
  switch(arguments.length) {
    case 3:
      return Zd.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Zd.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Zd.u(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Zd.O(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Zd.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new bc(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Zd.e = function(a, b, c) {
  return Gc.e(a, b, function() {
    var d = L(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
};
Zd.p = function(a, b, c, d) {
  return Gc.e(a, b, function() {
    var e = L(a, b);
    return c.b ? c.b(e, d) : c.call(null, e, d);
  }());
};
Zd.u = function(a, b, c, d, e) {
  return Gc.e(a, b, function() {
    var f = L(a, b);
    return c.e ? c.e(f, d, e) : c.call(null, f, d, e);
  }());
};
Zd.O = function(a, b, c, d, e, f) {
  return Gc.e(a, b, function() {
    var g = L(a, b);
    return c.p ? c.p(g, d, e, f) : c.call(null, g, d, e, f);
  }());
};
Zd.k = function(a, b, c, d, e, f, g) {
  return Gc.e(a, b, Hd(c, L(a, b), d, e, f, yc([g], 0)));
};
Zd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), g = H(f), f = G(g), g = H(g);
  return Zd.k(b, a, c, d, e, f, g);
};
Zd.v = 6;
function $d(a, b) {
  this.n = a;
  this.c = b;
}
function ae(a, b) {
  return new $d(a, b);
}
function be(a) {
  return new $d(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ce(a) {
  return new $d(a.n, Fa(a.c));
}
function de(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ee(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = be(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var fe = function fe(b, c, d, e) {
  var f = ce(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? fe(b, c - 5, d, e) : ee(null, c - 5, e), f.c[g] = b);
  return f;
};
function ge(a, b) {
  throw Error([A("No item "), A(a), A(" in vector of length "), A(b)].join(""));
}
function he(a, b) {
  if (b >= de(a)) {
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
function ie(a, b) {
  return 0 <= b && b < a.d ? he(a, b) : ge(b, a.d);
}
var je = function je(b, c, d, e, f) {
  var g = ce(d);
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = je(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
}, ke = function ke(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = ke(b, c - 5, d.c[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = ce(d);
    d.c[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = ce(d);
  d.c[e] = null;
  return d;
};
function le(a, b, c, d, e, f) {
  this.j = a;
  this.mb = b;
  this.c = c;
  this.oa = d;
  this.start = e;
  this.end = f;
}
le.prototype.jb = function() {
  return this.j < this.end;
};
le.prototype.next = function() {
  32 === this.j - this.mb && (this.c = he(this.oa, this.j), this.mb += 32);
  var a = this.c[this.j & 31];
  this.j += 1;
  return a;
};
function P(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.o = e;
  this.l = f;
  this.i = 167668511;
  this.r = 8196;
}
h = P.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.G = function(a, b) {
  return ie(this, b)[b & 31];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? he(this, b)[b & 31] : c;
};
h.gb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return de(this) <= b ? (a = Fa(this.o), a[b & 31] = c, new P(this.h, this.d, this.shift, this.root, a, null)) : new P(this.h, this.d, this.shift, je(this, this.shift, this.root, b, c), this.o, null);
  }
  if (b === this.d) {
    return Ma(this, c);
  }
  throw Error([A("Index "), A(b), A(" out of bounds  [0,"), A(this.d), A("]")].join(""));
};
h.Sa = function() {
  var a = this.d;
  return new le(0, 0, 0 < Dc(this) ? he(this, 0) : null, this, 0, a);
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return this.d;
};
h.bb = function() {
  return B.b(this, 0);
};
h.cb = function() {
  return B.b(this, 1);
};
h.Ha = function() {
  return 0 < this.d ? B.b(this, this.d - 1) : null;
};
h.Ia = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return mb(Cc, this.h);
  }
  if (1 < this.d - de(this)) {
    return new P(this.h, this.d - 1, this.shift, this.root, this.o.slice(0, -1), null);
  }
  var a = he(this, this.d - 2), b = ke(this, this.shift, this.root), b = null == b ? Q : b, c = this.d - 1;
  return 5 < this.shift && null == b.c[1] ? new P(this.h, c, this.shift - 5, b.c[0], a, null) : new P(this.h, c, this.shift, b, a, null);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  if (b instanceof P) {
    if (this.d === Dc(b)) {
      for (var c = Mb(this), d = Mb(b);;) {
        if (w(c.jb())) {
          var e = c.next(), f = d.next();
          if (!fc.b(e, f)) {
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
    return vc(this, b);
  }
};
h.Da = function() {
  var a = this;
  return new me(a.d, a.shift, function() {
    var b = a.root;
    return ne.a ? ne.a(b) : ne.call(null, b);
  }(), function() {
    var b = a.o;
    return oe.a ? oe.a(b) : oe.call(null, b);
  }());
};
h.N = function() {
  return Mc(Cc, this.h);
};
h.Q = function(a, b) {
  return oc(this, b);
};
h.R = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = he(this, a);
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
h.Ga = function(a, b, c) {
  if ("number" === typeof b) {
    return gb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.K = function() {
  if (0 === this.d) {
    return null;
  }
  if (32 >= this.d) {
    return new bc(this.o, 0);
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
  return pe ? pe(this, a, 0, 0) : qe.call(null, this, a, 0, 0);
};
h.L = function(a, b) {
  return new P(b, this.d, this.shift, this.root, this.o, this.l);
};
h.J = function(a, b) {
  if (32 > this.d - de(this)) {
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
  d ? (d = be(null), d.c[0] = this.root, e = ee(null, this.shift, new $d(null, this.o)), d.c[1] = e) : d = fe(this, this.shift, this.root, new $d(null, this.o));
  return new P(this.h, this.d + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.ha(null, a, b);
};
var Q = new $d(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Cc = new P(null, 0, 5, Q, [], kc);
function re(a) {
  var b = a.length;
  if (32 > b) {
    return new P(null, b, 5, Q, a, null);
  }
  for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Da(null);;) {
    if (c < b) {
      var e = c + 1, d = Cd.b(d, a[c]), c = e
    } else {
      return Bb(d);
    }
  }
}
P.prototype[Ea] = function() {
  return hc(this);
};
function se(a) {
  return Aa(a) ? re(a) : Bb($c(Ab, yb(Cc), a));
}
function te(a, b, c, d, e, f) {
  this.F = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.l = f;
  this.i = 32375020;
  this.r = 1536;
}
h = te.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = pe ? pe(a, b, c, d) : qe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Hb(this);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(Cc, this.h);
};
h.Q = function(a, b) {
  var c;
  c = this.F;
  var d = this.j + this.w, e = Dc(this.F);
  c = ue ? ue(c, d, e) : ve.call(null, c, d, e);
  return oc(c, b);
};
h.R = function(a, b, c) {
  a = this.F;
  var d = this.j + this.w, e = Dc(this.F);
  a = ue ? ue(a, d, e) : ve.call(null, a, d, e);
  return pc(a, b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = pe ? pe(a, b, c, d) : qe.call(null, a, b, c, d);
    return null == a ? ec : a;
  }
  return Gb(this);
};
h.K = function() {
  return this;
};
h.$a = function() {
  var a = this.ga;
  return new td(a, this.w, a.length);
};
h.ab = function() {
  var a = this.j + this.ga.length;
  if (a < Ja(this.F)) {
    var b = this.F, c = he(this.F, a);
    return pe ? pe(b, c, a, 0) : qe.call(null, b, c, a, 0);
  }
  return ec;
};
h.L = function(a, b) {
  var c = this.F, d = this.ga, e = this.j, f = this.w;
  return we ? we(c, d, e, f, b) : qe.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return wc(b, this);
};
h.Za = function() {
  var a = this.j + this.ga.length;
  if (a < Ja(this.F)) {
    var b = this.F, c = he(this.F, a);
    return pe ? pe(b, c, a, 0) : qe.call(null, b, c, a, 0);
  }
  return null;
};
te.prototype[Ea] = function() {
  return hc(this);
};
function qe() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new te(a, ie(a, b), b, c, null, null);
    case 4:
      return pe(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return we(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function pe(a, b, c, d) {
  return new te(a, b, c, d, null, null);
}
function we(a, b, c, d, e) {
  return new te(a, b, c, d, e, null);
}
function xe(a, b, c, d, e) {
  this.h = a;
  this.oa = b;
  this.start = c;
  this.end = d;
  this.l = e;
  this.i = 167666463;
  this.r = 8192;
}
h = xe.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.G = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ge(b, this.end - this.start) : B.b(this.oa, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : B.e(this.oa, this.start + b, c);
};
h.gb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = Gc.e(this.oa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ye.u ? ye.u(a, c, b, d, null) : ye.call(null, a, c, b, d, null);
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return this.end - this.start;
};
h.Ha = function() {
  return B.b(this.oa, this.end - 1);
};
h.Ia = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.oa, c = this.start, d = this.end - 1;
  return ye.u ? ye.u(a, b, c, d, null) : ye.call(null, a, b, c, d, null);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(Cc, this.h);
};
h.Q = function(a, b) {
  return oc(this, b);
};
h.R = function(a, b, c) {
  return pc(this, b, c);
};
h.Ga = function(a, b, c) {
  if ("number" === typeof b) {
    return gb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.K = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : wc(B.b(a.oa, e), new qd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.L = function(a, b) {
  var c = this.oa, d = this.start, e = this.end, f = this.l;
  return ye.u ? ye.u(b, c, d, e, f) : ye.call(null, b, c, d, e, f);
};
h.J = function(a, b) {
  var c = this.h, d = gb(this.oa, this.end, b), e = this.start, f = this.end + 1;
  return ye.u ? ye.u(c, d, e, f, null) : ye.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.ha(null, a, b);
};
xe.prototype[Ea] = function() {
  return hc(this);
};
function ye(a, b, c, d, e) {
  for (;;) {
    if (b instanceof xe) {
      c = b.start + c, d = b.start + d, b = b.oa;
    } else {
      var f = Dc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new xe(a, b, c, d, e);
    }
  }
}
function ve() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return ue(a, arguments[1], Dc(a));
    case 3:
      return ue(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function ue(a, b, c) {
  return ye(null, a, b, c, null);
}
function ze(a, b) {
  return a === b.n ? b : new $d(a, Fa(b.c));
}
function ne(a) {
  return new $d({}, Fa(a.c));
}
function oe(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Uc(a, 0, b, 0, a.length);
  return b;
}
var Ae = function Ae(b, c, d, e) {
  d = ze(b.root.n, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? Ae(b, c - 5, g, e) : ee(b.root.n, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function me(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.r = 88;
  this.i = 275;
}
h = me.prototype;
h.Ka = function(a, b) {
  if (this.root.n) {
    if (32 > this.d - de(this)) {
      this.o[this.d & 31] = b;
    } else {
      var c = new $d(this.root.n, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ee(this.root.n, this.shift, c);
        this.root = new $d(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Ae(this, this.shift, this.root, c);
      }
    }
    this.d += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.La = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.d - de(this), b = Array(a);
    Uc(this.o, 0, b, 0, a);
    return new P(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Ja = function(a, b, c) {
  if ("number" === typeof b) {
    return Db(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.rb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.d) {
      return de(this) <= b ? d.o[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ze(d.root.n, k);
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
      return Ab(this, c);
    }
    throw Error([A("Index "), A(b), A(" out of bounds for TransientVector of length"), A(d.d)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.M = function() {
  if (this.root.n) {
    return this.d;
  }
  throw Error("count after persistent!");
};
h.G = function(a, b) {
  if (this.root.n) {
    return ie(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? B.b(this, b) : c;
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return "number" === typeof b ? B.e(this, b, c) : c;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.H(null, a);
};
h.b = function(a, b) {
  return this.A(null, a, b);
};
function Be() {
  this.i = 2097152;
  this.r = 0;
}
Be.prototype.equiv = function(a) {
  return this.q(null, a);
};
Be.prototype.q = function() {
  return!1;
};
var Ce = new Be;
function De(a, b) {
  return Xc(Qc(b) ? Dc(a) === Dc(b) ? Jd(cd, Vd.b(function(a) {
    return fc.b(Fc(b, G(a), Ce), G(H(a)));
  }, a)) : null : null);
}
function Ee(a) {
  this.s = a;
}
Ee.prototype.next = function() {
  if (null != this.s) {
    var a = G(this.s), b = J(a, 0), a = J(a, 1);
    this.s = H(this.s);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Fe(a) {
  return new Ee(C(a));
}
function Ge(a) {
  this.s = a;
}
Ge.prototype.next = function() {
  if (null != this.s) {
    var a = G(this.s);
    this.s = H(this.s);
    return{value:[a, a], done:!1};
  }
  return{value:null, done:!0};
};
function He(a, b) {
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
      if (b instanceof $b) {
        a: {
          for (c = a.length, d = b.Aa, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof $b && d === f.Aa) {
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
              if (fc.b(b, a[d])) {
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
function Ie(a, b, c) {
  this.c = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.r = 0;
}
h = Ie.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.ka;
};
h.ia = function() {
  return this.j < this.c.length - 2 ? new Ie(this.c, this.j + 2, this.ka) : null;
};
h.M = function() {
  return(this.c.length - this.j) / 2;
};
h.C = function() {
  return jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.ka);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return new P(null, 2, 5, Q, [this.c[this.j], this.c[this.j + 1]], null);
};
h.la = function() {
  return this.j < this.c.length - 2 ? new Ie(this.c, this.j + 2, this.ka) : ec;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new Ie(this.c, this.j, b);
};
h.J = function(a, b) {
  return wc(b, this);
};
Ie.prototype[Ea] = function() {
  return hc(this);
};
function Je(a, b, c) {
  this.c = a;
  this.j = b;
  this.d = c;
}
Je.prototype.jb = function() {
  return this.j < this.d;
};
Je.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.c[this.j], this.c[this.j + 1]], null);
  this.j += 2;
  return a;
};
function n(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.c = c;
  this.l = d;
  this.i = 16647951;
  this.r = 8196;
}
h = n.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return hc(Ke.a ? Ke.a(this) : Ke.call(null, this));
};
h.entries = function() {
  return Fe(C(this));
};
h.values = function() {
  return hc(Le.a ? Le.a(this) : Le.call(null, this));
};
h.has = function(a) {
  return Yc(this, a);
};
h.get = function(a, b) {
  return this.A(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = J(f, 0), f = J(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Sc(b) ? (c = Fb(b), b = Gb(b), g = c, d = Dc(c), c = g) : (c = G(b), g = J(c, 0), c = f = J(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  a = He(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
h.Sa = function() {
  return new Je(this.c, 0, 2 * this.d);
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return this.d;
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = lc(this);
};
h.q = function(a, b) {
  if (b && (b.i & 1024 || b.Cb)) {
    var c = this.c.length;
    if (this.d === b.M(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.A(null, this.c[d], Vc);
          if (e !== Vc) {
            if (fc.b(this.c[d + 1], e)) {
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
    return De(this, b);
  }
};
h.Da = function() {
  return new Me({}, this.c.length, Fa(this.c));
};
h.N = function() {
  return mb(R, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.qb = function(a, b) {
  if (0 <= He(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return La(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.h, this.d - 1, d, null);
      }
      fc.b(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ga = function(a, b, c) {
  a = He(this.c, b);
  if (-1 === a) {
    if (this.d < Ne) {
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
    return mb(Wa(Yd.b(Oe, this), b, c), this.h);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Fa(this.c);
  b[a + 1] = c;
  return new n(this.h, this.d, b, null);
};
h.ob = function(a, b) {
  return-1 !== He(this.c, b);
};
h.K = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Ie(a, 0, null) : null;
};
h.L = function(a, b) {
  return new n(b, this.d, this.c, this.l);
};
h.J = function(a, b) {
  if (Rc(b)) {
    return Wa(this, B.b(b, 0), B.b(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Rc(e)) {
      c = Wa(c, B.b(e, 0), B.b(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.H(null, a);
};
h.b = function(a, b) {
  return this.A(null, a, b);
};
var R = new n(null, 0, [], mc), Ne = 8;
n.prototype[Ea] = function() {
  return hc(this);
};
function Me(a, b, c) {
  this.Ma = a;
  this.Pa = b;
  this.c = c;
  this.i = 258;
  this.r = 56;
}
h = Me.prototype;
h.M = function() {
  if (w(this.Ma)) {
    return hd(this.Pa, 2);
  }
  throw Error("count after persistent!");
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  if (w(this.Ma)) {
    return a = He(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Ka = function(a, b) {
  if (w(this.Ma)) {
    if (b ? b.i & 2048 || b.Db || (b.i ? 0 : y(Za, b)) : y(Za, b)) {
      return Cb(this, Pe.a ? Pe.a(b) : Pe.call(null, b), Qe.a ? Qe.a(b) : Qe.call(null, b));
    }
    for (var c = C(b), d = this;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = Cb(d, function() {
          var a = f;
          return Pe.a ? Pe.a(a) : Pe.call(null, a);
        }(), function() {
          var a = f;
          return Qe.a ? Qe.a(a) : Qe.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.La = function() {
  if (w(this.Ma)) {
    return this.Ma = !1, new n(null, hd(this.Pa, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.Ja = function(a, b, c) {
  if (w(this.Ma)) {
    a = He(this.c, b);
    if (-1 === a) {
      if (this.Pa + 2 <= 2 * Ne) {
        return this.Pa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Pa;
      var d = this.c;
      a = Re.b ? Re.b(a, d) : Re.call(null, a, d);
      return Cb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Re(a, b) {
  for (var c = yb(Oe), d = 0;;) {
    if (d < a) {
      c = Cb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Se() {
  this.ta = !1;
}
function Te(a, b) {
  return a === b ? !0 : a === b || a instanceof M && b instanceof M && a.va === b.va ? !0 : fc.b(a, b);
}
function Ue(a, b, c) {
  a = Fa(a);
  a[b] = c;
  return a;
}
function Ve(a, b) {
  var c = Array(a.length - 2);
  Uc(a, 0, c, 0, 2 * b);
  Uc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function We(a, b, c, d) {
  a = a.Ea(b);
  a.c[c] = d;
  return a;
}
function Xe(a, b, c) {
  this.n = a;
  this.B = b;
  this.c = c;
}
h = Xe.prototype;
h.Ea = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = id(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  Uc(this.c, 0, c, 0, 2 * b);
  return new Xe(a, this.B, c);
};
h.Va = function() {
  var a = this.c;
  return Ye ? Ye(a) : Ze.call(null, a);
};
h.ya = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.B & e)) {
    return d;
  }
  var f = id(this.B & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.ya(a + 5, b, c, d) : Te(c, e) ? f : d;
};
h.ra = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = id(this.B & g - 1);
  if (0 === (this.B & g)) {
    var l = id(this.B);
    if (2 * l < this.c.length) {
      a = this.Ea(a);
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
      a.B |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = af.ra(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.B >>> d & 1) && (k[d] = null != this.c[e] ? af.ra(a, b + 5, Yb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new bf(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Uc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Uc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ea(a);
    a.c = b;
    a.B |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.ra(a, b + 5, c, d, e, f), l === g ? this : We(this, a, 2 * k + 1, l);
  }
  if (Te(d, l)) {
    return e === g ? this : We(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = cf ? cf(a, f, l, g, c, d, e) : df.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ea(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.qa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = id(this.B & f - 1);
  if (0 === (this.B & f)) {
    var k = id(this.B);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = af.qa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.B >>> c & 1) && (g[c] = null != this.c[d] ? af.qa(a + 5, Yb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new bf(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Uc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Uc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new Xe(null, this.B | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.qa(a + 5, b, c, d, e), k === f ? this : new Xe(null, this.B, Ue(this.c, 2 * g + 1, k));
  }
  if (Te(c, l)) {
    return d === f ? this : new Xe(null, this.B, Ue(this.c, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.B;
  k = this.c;
  a += 5;
  a = ef ? ef(a, l, f, b, c, d) : df.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Fa(k);
  d[c] = null;
  d[g] = a;
  return new Xe(null, e, d);
};
h.Wa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.B & d)) {
    return this;
  }
  var e = id(this.B & d - 1), f = this.c[2 * e], g = this.c[2 * e + 1];
  return null == f ? (a = g.Wa(a + 5, b, c), a === g ? this : null != a ? new Xe(null, this.B, Ue(this.c, 2 * e + 1, a)) : this.B === d ? null : new Xe(null, this.B ^ d, Ve(this.c, e))) : Te(c, f) ? new Xe(null, this.B ^ d, Ve(this.c, e)) : this;
};
var af = new Xe(null, 0, []);
function bf(a, b, c) {
  this.n = a;
  this.d = b;
  this.c = c;
}
h = bf.prototype;
h.Ea = function(a) {
  return a === this.n ? this : new bf(a, this.d, Fa(this.c));
};
h.Va = function() {
  var a = this.c;
  return ff ? ff(a) : gf.call(null, a);
};
h.ya = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ya(a + 5, b, c, d) : d;
};
h.ra = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = We(this, a, g, af.ra(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.ra(a, b + 5, c, d, e, f);
  return b === k ? this : We(this, a, g, b);
};
h.qa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new bf(null, this.d + 1, Ue(this.c, f, af.qa(a + 5, b, c, d, e)));
  }
  a = g.qa(a + 5, b, c, d, e);
  return a === g ? this : new bf(null, this.d, Ue(this.c, f, a));
};
h.Wa = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.Wa(a + 5, b, c);
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
                d = new Xe(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new bf(null, this.d - 1, Ue(this.c, d, a));
        }
      } else {
        d = new bf(null, this.d, Ue(this.c, d, a));
      }
    }
    return d;
  }
  return this;
};
function hf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Te(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function jf(a, b, c, d) {
  this.n = a;
  this.ua = b;
  this.d = c;
  this.c = d;
}
h = jf.prototype;
h.Ea = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Uc(this.c, 0, b, 0, 2 * this.d);
  return new jf(a, this.ua, this.d, b);
};
h.Va = function() {
  var a = this.c;
  return Ye ? Ye(a) : Ze.call(null, a);
};
h.ya = function(a, b, c, d) {
  a = hf(this.c, this.d, c);
  return 0 > a ? d : Te(c, this.c[a]) ? this.c[a + 1] : d;
};
h.ra = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = hf(this.c, this.d, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ea(a), a.c[b] = d, a.c[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Uc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.n ? (this.c = b, this.d = d, a = this) : a = new jf(this.n, this.ua, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : We(this, a, b + 1, e);
  }
  return(new Xe(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).ra(a, b, c, d, e, f);
};
h.qa = function(a, b, c, d, e) {
  return b === this.ua ? (a = hf(this.c, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Uc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new jf(null, this.ua, this.d + 1, b)) : fc.b(this.c[a], d) ? this : new jf(null, this.ua, this.d, Ue(this.c, a + 1, d))) : (new Xe(null, 1 << (this.ua >>> a & 31), [null, this])).qa(a, b, c, d, e);
};
h.Wa = function(a, b, c) {
  a = hf(this.c, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new jf(null, this.ua, this.d - 1, Ve(this.c, hd(a, 2)));
};
function df() {
  switch(arguments.length) {
    case 6:
      return ef(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return cf(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function ef(a, b, c, d, e, f) {
  var g = Yb(b);
  if (g === d) {
    return new jf(null, g, 2, [b, c, e, f]);
  }
  var k = new Se;
  return af.qa(a, g, b, c, k).qa(a, d, e, f, k);
}
function cf(a, b, c, d, e, f, g) {
  var k = Yb(c);
  if (k === e) {
    return new jf(null, k, 2, [c, d, f, g]);
  }
  var l = new Se;
  return af.ra(a, b, k, c, d, l).ra(a, b, e, f, g, l);
}
function kf(a, b, c, d, e) {
  this.h = a;
  this.za = b;
  this.j = c;
  this.s = d;
  this.l = e;
  this.i = 32374860;
  this.r = 0;
}
h = kf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return null == this.s ? new P(null, 2, 5, Q, [this.za[this.j], this.za[this.j + 1]], null) : G(this.s);
};
h.la = function() {
  if (null == this.s) {
    var a = this.za, b = this.j + 2;
    return lf ? lf(a, b, null) : Ze.call(null, a, b, null);
  }
  var a = this.za, b = this.j, c = H(this.s);
  return lf ? lf(a, b, c) : Ze.call(null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new kf(b, this.za, this.j, this.s, this.l);
};
h.J = function(a, b) {
  return wc(b, this);
};
kf.prototype[Ea] = function() {
  return hc(this);
};
function Ze() {
  switch(arguments.length) {
    case 1:
      return Ye(arguments[0]);
    case 3:
      return lf(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function Ye(a) {
  return lf(a, 0, null);
}
function lf(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new kf(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (w(d) && (d = d.Va(), w(d))) {
          return new kf(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new kf(null, a, b, c, null);
  }
}
function mf(a, b, c, d, e) {
  this.h = a;
  this.za = b;
  this.j = c;
  this.s = d;
  this.l = e;
  this.i = 32374860;
  this.r = 0;
}
h = mf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.h;
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return G(this.s);
};
h.la = function() {
  var a = this.za, b = this.j, c = H(this.s);
  return nf ? nf(null, a, b, c) : gf.call(null, null, a, b, c);
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new mf(b, this.za, this.j, this.s, this.l);
};
h.J = function(a, b) {
  return wc(b, this);
};
mf.prototype[Ea] = function() {
  return hc(this);
};
function gf() {
  switch(arguments.length) {
    case 1:
      return ff(arguments[0]);
    case 4:
      return nf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function ff(a) {
  return nf(null, a, 0, null);
}
function nf(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (w(e) && (e = e.Va(), w(e))) {
          return new mf(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new mf(a, b, c, d, null);
  }
}
function of(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.l = f;
  this.i = 16123663;
  this.r = 8196;
}
h = of.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return hc(Ke.a ? Ke.a(this) : Ke.call(null, this));
};
h.entries = function() {
  return Fe(C(this));
};
h.values = function() {
  return hc(Le.a ? Le.a(this) : Le.call(null, this));
};
h.has = function(a) {
  return Yc(this, a);
};
h.get = function(a, b) {
  return this.A(null, a, b);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = J(f, 0), f = J(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Sc(b) ? (c = Fb(b), b = Gb(b), g = c, d = Dc(c), c = g) : (c = G(b), g = J(c, 0), c = f = J(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.ya(0, Yb(b), b, c);
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return this.d;
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = lc(this);
};
h.q = function(a, b) {
  return De(this, b);
};
h.Da = function() {
  return new pf({}, this.root, this.d, this.ma, this.na);
};
h.N = function() {
  return mb(Oe, this.h);
};
h.qb = function(a, b) {
  if (null == b) {
    return this.ma ? new of(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Wa(0, Yb(b), b);
  return c === this.root ? this : new of(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ga = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new of(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Se;
  b = (null == this.root ? af : this.root).qa(0, Yb(b), b, c, a);
  return b === this.root ? this : new of(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.ob = function(a, b) {
  return null == b ? this.ma : null == this.root ? !1 : this.root.ya(0, Yb(b), b, Vc) !== Vc;
};
h.K = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Va() : null;
    return this.ma ? wc(new P(null, 2, 5, Q, [null, this.na], null), a) : a;
  }
  return null;
};
h.L = function(a, b) {
  return new of(b, this.d, this.root, this.ma, this.na, this.l);
};
h.J = function(a, b) {
  if (Rc(b)) {
    return Wa(this, B.b(b, 0), B.b(b, 1));
  }
  for (var c = this, d = C(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Rc(e)) {
      c = Wa(c, B.b(e, 0), B.b(e, 1)), d = H(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.H(null, a);
};
h.b = function(a, b) {
  return this.A(null, a, b);
};
var Oe = new of(null, 0, null, !1, null, mc);
function Hc(a, b) {
  for (var c = a.length, d = 0, e = yb(Oe);;) {
    if (d < c) {
      var f = d + 1, e = e.Ja(null, a[d], b[d]), d = f
    } else {
      return Bb(e);
    }
  }
}
of.prototype[Ea] = function() {
  return hc(this);
};
function pf(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.r = 56;
}
function qf(a, b) {
  if (a.n) {
    if (b ? b.i & 2048 || b.Db || (b.i ? 0 : y(Za, b)) : y(Za, b)) {
      return rf(a, Pe.a ? Pe.a(b) : Pe.call(null, b), Qe.a ? Qe.a(b) : Qe.call(null, b));
    }
    for (var c = C(b), d = a;;) {
      var e = G(c);
      if (w(e)) {
        var f = e, c = H(c), d = rf(d, function() {
          var a = f;
          return Pe.a ? Pe.a(a) : Pe.call(null, a);
        }(), function() {
          var a = f;
          return Qe.a ? Qe.a(a) : Qe.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function rf(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Se;
      b = (null == a.root ? af : a.root).ra(a.n, 0, Yb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = pf.prototype;
h.M = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.H = function(a, b) {
  return null == b ? this.ma ? this.na : null : null == this.root ? null : this.root.ya(0, Yb(b), b);
};
h.A = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.ya(0, Yb(b), b, c);
};
h.Ka = function(a, b) {
  return qf(this, b);
};
h.La = function() {
  var a;
  if (this.n) {
    this.n = null, a = new of(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ja = function(a, b, c) {
  return rf(this, b, c);
};
var Qd = function Qd() {
  return Qd.k(0 < arguments.length ? new bc(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Qd.k = function(a) {
  for (var b = C(a), c = yb(Oe);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = Cb(c, d, b), b = a;
    } else {
      return Bb(c);
    }
  }
};
Qd.v = 0;
Qd.t = function(a) {
  return Qd.k(C(a));
};
function sf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.r = 0;
}
h = sf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.eb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new sf(a, this.ka);
};
h.C = function() {
  return jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.ka);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).bb(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.eb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new sf(a, this.ka) : ec;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new sf(this.ja, b);
};
h.J = function(a, b) {
  return wc(b, this);
};
sf.prototype[Ea] = function() {
  return hc(this);
};
function Ke(a) {
  return(a = C(a)) ? new sf(a, null) : null;
}
function Pe(a) {
  return $a(a);
}
function tf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.r = 0;
}
h = tf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.I = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.eb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null == a ? null : new tf(a, this.ka);
};
h.C = function() {
  return jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.ka);
};
h.Q = function(a, b) {
  return Zc(b, this);
};
h.R = function(a, b, c) {
  return bd(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).cb(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.eb || (a.i ? 0 : y(Sa, a)) : y(Sa, a)) ? this.ja.ia(null) : H(this.ja);
  return null != a ? new tf(a, this.ka) : ec;
};
h.K = function() {
  return this;
};
h.L = function(a, b) {
  return new tf(this.ja, b);
};
h.J = function(a, b) {
  return wc(b, this);
};
tf.prototype[Ea] = function() {
  return hc(this);
};
function Le(a) {
  return(a = C(a)) ? new tf(a, null) : null;
}
function Qe(a) {
  return ab(a);
}
function uf(a, b, c) {
  this.h = a;
  this.Oa = b;
  this.l = c;
  this.i = 15077647;
  this.r = 8196;
}
h = uf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.keys = function() {
  return hc(C(this));
};
h.entries = function() {
  var a = C(this);
  return new Ge(C(a));
};
h.values = function() {
  return hc(C(this));
};
h.has = function(a) {
  return Yc(this, a);
};
h.forEach = function(a) {
  for (var b = C(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.G(null, e), g = J(f, 0), f = J(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = C(b)) {
        Sc(b) ? (c = Fb(b), b = Gb(b), g = c, d = Dc(c), c = g) : (c = G(b), g = J(c, 0), c = f = J(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return Va(this.Oa, b) ? b : c;
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return Ja(this.Oa);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = lc(this);
};
h.q = function(a, b) {
  return Pc(b) && Dc(this) === Dc(b) && Jd(function(a) {
    return function(b) {
      return Yc(a, b);
    };
  }(this), b);
};
h.Da = function() {
  return new vf(yb(this.Oa));
};
h.N = function() {
  return Mc(wf, this.h);
};
h.K = function() {
  return Ke(this.Oa);
};
h.L = function(a, b) {
  return new uf(b, this.Oa, this.l);
};
h.J = function(a, b) {
  return new uf(this.h, Gc.e(this.Oa, b, null), null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.H(null, c);
      case 3:
        return this.A(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.H(null, c);
  };
  a.e = function(a, c, d) {
    return this.A(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.H(null, a);
};
h.b = function(a, b) {
  return this.A(null, a, b);
};
var wf = new uf(null, R, mc);
uf.prototype[Ea] = function() {
  return hc(this);
};
function vf(a) {
  this.xa = a;
  this.r = 136;
  this.i = 259;
}
h = vf.prototype;
h.Ka = function(a, b) {
  this.xa = Cb(this.xa, b, null);
  return this;
};
h.La = function() {
  return new uf(null, Bb(this.xa), null);
};
h.M = function() {
  return Dc(this.xa);
};
h.H = function(a, b) {
  return Ua.e(this, b, null);
};
h.A = function(a, b, c) {
  return Ua.e(this.xa, b, Vc) === Vc ? c : b;
};
h.call = function() {
  function a(a, b, c) {
    return Ua.e(this.xa, b, Vc) === Vc ? c : b;
  }
  function b(a, b) {
    return Ua.e(this.xa, b, Vc) === Vc ? null : b;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.e = a;
  return c;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return Ua.e(this.xa, a, Vc) === Vc ? null : a;
};
h.b = function(a, b) {
  return Ua.e(this.xa, a, Vc) === Vc ? b : a;
};
function pd(a) {
  if (a && (a.r & 4096 || a.Fb)) {
    return a.Ta(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([A("Doesn't support name: "), A(a)].join(""));
}
function xf(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
xf.prototype.jb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
xf.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function yf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = e;
  this.i = 32375006;
  this.r = 8192;
}
h = yf.prototype;
h.toString = function() {
  return Ob(this);
};
h.equiv = function(a) {
  return this.q(null, a);
};
h.G = function(a, b) {
  if (b < Ja(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ha = function(a, b, c) {
  return b < Ja(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Sa = function() {
  return new xf(this.start, this.end, this.step);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new yf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new yf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.M = function() {
  if (Ba(sb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jc(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return oc(this, b);
};
h.R = function(a, b, c) {
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
h.fa = function() {
  return null == sb(this) ? null : this.start;
};
h.la = function() {
  return null != sb(this) ? new yf(this.h, this.start + this.step, this.end, this.step, null) : ec;
};
h.K = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.L = function(a, b) {
  return new yf(b, this.start, this.end, this.step, this.l);
};
h.J = function(a, b) {
  return wc(b, this);
};
yf.prototype[Ea] = function() {
  return hc(this);
};
function zf() {
  var a = S, b = T;
  return function() {
    function c(c, d, e) {
      return new P(null, 2, 5, Q, [a.e ? a.e(c, d, e) : a.call(null, c, d, e), b.e ? b.e(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new P(null, 2, 5, Q, [a.b ? a.b(c, d) : a.call(null, c, d), b.b ? b.b(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new P(null, 2, 5, Q, [a.a ? a.a(c) : a.call(null, c), b.a ? b.a(c) : b.call(null, c)], null);
    }
    function f() {
      return new P(null, 2, 5, Q, [a.m ? a.m() : a.call(null), b.m ? b.m() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new bc(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new P(null, 2, 5, Q, [Gd(a, c, e, f, g), Gd(b, c, e, f, g)], null);
      }
      c.v = 3;
      c.t = function(a) {
        var b = G(a);
        a = H(a);
        var c = G(a);
        a = H(a);
        var e = G(a);
        a = dc(a);
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
            t = new bc(u, 0);
          }
          return k.k(a, b, g, t);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.v = 3;
    g.t = k.t;
    g.m = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.k = k.k;
    return g;
  }();
}
function Af(a, b, c, d, e, f, g) {
  var k = pa;
  pa = null == pa ? null : pa - 1;
  try {
    if (null != pa && 0 > pa) {
      return ub(a, "#");
    }
    ub(a, c);
    if (0 === za.a(f)) {
      C(g) && ub(a, function() {
        var a = Bf.a(f);
        return w(a) ? a : "...";
      }());
    } else {
      if (C(g)) {
        var l = G(g);
        b.e ? b.e(l, a, f) : b.call(null, l, a, f);
      }
      for (var p = H(g), q = za.a(f) - 1;;) {
        if (!p || null != q && 0 === q) {
          C(p) && 0 === q && (ub(a, d), ub(a, function() {
            var a = Bf.a(f);
            return w(a) ? a : "...";
          }()));
          break;
        } else {
          ub(a, d);
          var r = G(p);
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
    return ub(a, e);
  } finally {
    pa = k;
  }
}
function Cf(a, b) {
  for (var c = C(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.G(null, f);
      ub(a, g);
      f += 1;
    } else {
      if (c = C(c)) {
        d = c, Sc(d) ? (c = Fb(d), e = Gb(d), d = c, g = Dc(c), c = e, e = g) : (g = G(d), ub(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Df = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Ef(a) {
  return[A('"'), A(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Df[a];
  })), A('"')].join("");
}
function Ff(a, b, c) {
  if (null == a) {
    return ub(b, "nil");
  }
  if (void 0 === a) {
    return ub(b, "#\x3cundefined\x3e");
  }
  if (w(function() {
    var b = L(c, wa);
    return w(b) ? (b = a ? a.i & 131072 || a.Eb ? !0 : a.i ? !1 : y(ib, a) : y(ib, a)) ? Nc(a) : b : b;
  }())) {
    ub(b, "^");
    var d = Nc(a);
    Gf.e ? Gf.e(d, b, c) : Gf.call(null, d, b, c);
    ub(b, " ");
  }
  return null == a ? ub(b, "nil") : a.Nb ? a.Zb(a, b, c) : a && (a.i & 2147483648 || a.P) ? a.D(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? ub(b, "" + A(a)) : null != a && a.constructor === Object ? (ub(b, "#js "), d = Vd.b(function(b) {
    return new P(null, 2, 5, Q, [od.a(b), a[b]], null);
  }, Tc(a)), Hf.p ? Hf.p(d, Gf, b, c) : Hf.call(null, d, Gf, b, c)) : Aa(a) ? Af(b, Gf, "#js [", " ", "]", c, a) : w("string" == typeof a) ? w(va.a(c)) ? ub(b, Ef(a)) : ub(b, a) : Jc(a) ? Cf(b, yc(["#\x3c", "" + A(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + A(a);;) {
      if (Dc(c) < b) {
        c = [A("0"), A(c)].join("");
      } else {
        return c;
      }
    }
  }, Cf(b, yc(['#inst "', "" + A(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(a instanceof RegExp) ? Cf(b, yc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.P || (a.i ? 0 : y(vb, a)) : y(vb, a)) ? wb(a, b, c) : Cf(b, yc(["#\x3c", "" + A(a), "\x3e"], 0));
}
function Gf(a, b, c) {
  var d = If.a(c);
  return w(d) ? (c = Gc.e(c, Jf, Ff), d.e ? d.e(a, b, c) : d.call(null, a, b, c)) : Ff(a, b, c);
}
function Td() {
  var a = 0 < arguments.length ? new bc(Array.prototype.slice.call(arguments, 0), 0) : null, b = sa(), c;
  if (Oc(a)) {
    c = "";
  } else {
    c = A;
    var d = b, b = new la;
    a: {
      var e = a, a = new Nb(b);
      Gf(G(e), a, d);
      for (var e = C(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.G(null, k);
          ub(a, " ");
          Gf(l, a, d);
          k += 1;
        } else {
          if (e = C(e)) {
            f = e, Sc(f) ? (e = Fb(f), g = Gb(f), f = e, l = Dc(e), e = g, g = l) : (l = G(f), ub(a, " "), Gf(l, a, d), e = H(f), f = null, g = 0), k = 0;
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
function Hf(a, b, c, d) {
  return Af(c, function(a, c, d) {
    var k = $a(a);
    b.e ? b.e(k, c, d) : b.call(null, k, c, d);
    ub(c, " ");
    a = ab(a);
    return b.e ? b.e(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, C(a));
}
bc.prototype.P = !0;
bc.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
qd.prototype.P = !0;
qd.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
kf.prototype.P = !0;
kf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
Ie.prototype.P = !0;
Ie.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
te.prototype.P = !0;
te.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
nd.prototype.P = !0;
nd.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
of.prototype.P = !0;
of.prototype.D = function(a, b, c) {
  return Hf(this, Gf, b, c);
};
mf.prototype.P = !0;
mf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
xe.prototype.P = !0;
xe.prototype.D = function(a, b, c) {
  return Af(b, Gf, "[", " ", "]", c, this);
};
uf.prototype.P = !0;
uf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "#{", " ", "}", c, this);
};
ud.prototype.P = !0;
ud.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
Od.prototype.P = !0;
Od.prototype.D = function(a, b, c) {
  ub(b, "#\x3cAtom: ");
  Gf(this.state, b, c);
  return ub(b, "\x3e");
};
tf.prototype.P = !0;
tf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
P.prototype.P = !0;
P.prototype.D = function(a, b, c) {
  return Af(b, Gf, "[", " ", "]", c, this);
};
ld.prototype.P = !0;
ld.prototype.D = function(a, b) {
  return ub(b, "()");
};
n.prototype.P = !0;
n.prototype.D = function(a, b, c) {
  return Hf(this, Gf, b, c);
};
yf.prototype.P = !0;
yf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
sf.prototype.P = !0;
sf.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
kd.prototype.P = !0;
kd.prototype.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
function Kf(a, b) {
  return $c(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Lf(a) {
  a *= Math.random.m ? Math.random.m() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Mf = null;
function Nf() {
  if (null == Mf) {
    var a = new n(null, 3, [Of, R, Pf, R, Qf, R], null);
    Mf = O ? O(a) : Pd.call(null, a);
  }
  return Mf;
}
function Rf(a, b, c) {
  var d = fc.b(b, c);
  if (!d && !(d = Yc(Qf.a(a).call(null, b), c)) && (d = Rc(c)) && (d = Rc(b))) {
    if (d = Dc(c) === Dc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== Dc(c)) {
          e = Rf(a, function() {
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
function Sf(a) {
  var b;
  b = Nf();
  b = I.a ? I.a(b) : I.call(null, b);
  return Id(L(Of.a(b), a));
}
function Tf(a, b, c, d) {
  Ud.b(a, function() {
    return I.a ? I.a(b) : I.call(null, b);
  });
  Ud.b(c, function() {
    return I.a ? I.a(d) : I.call(null, d);
  });
}
var Uf = function Uf(b, c, d) {
  var e = (I.a ? I.a(d) : I.call(null, d)).call(null, b), e = w(w(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Sf(c);;) {
      if (0 < Dc(e)) {
        Uf(b, G(e), d), e = dc(e);
      } else {
        return null;
      }
    }
  }();
  if (w(e)) {
    return e;
  }
  e = function() {
    for (var e = Sf(b);;) {
      if (0 < Dc(e)) {
        Uf(G(e), c, d), e = dc(e);
      } else {
        return null;
      }
    }
  }();
  return w(e) ? e : !1;
};
function Vf(a, b, c) {
  c = Uf(a, b, c);
  if (w(c)) {
    a = c;
  } else {
    c = Rf;
    var d;
    d = Nf();
    d = I.a ? I.a(d) : I.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Wf = function Wf(b, c, d, e, f, g, k) {
  var l = $c(function(e, g) {
    var k = J(g, 0);
    J(g, 1);
    if (Rf(I.a ? I.a(d) : I.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Vf(k, G(e), f);
      l = w(l) ? g : e;
      if (!w(Vf(G(l), k, f))) {
        throw Error([A("Multiple methods in multimethod '"), A(b), A("' match dispatch value: "), A(c), A(" -\x3e "), A(k), A(" and "), A(G(l)), A(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, I.a ? I.a(e) : I.call(null, e));
  if (w(l)) {
    if (fc.b(I.a ? I.a(k) : I.call(null, k), I.a ? I.a(d) : I.call(null, d))) {
      return Ud.p(g, Gc, c, G(H(l))), G(H(l));
    }
    Tf(g, e, k, d);
    return Wf(b, c, d, e, f, g, k);
  }
  return null;
};
function U(a, b) {
  throw Error([A("No method in multimethod '"), A(a), A("' for dispatch value: "), A(b)].join(""));
}
function Xf(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.g = b;
  this.Ob = c;
  this.kb = d;
  this.Xa = e;
  this.Pb = f;
  this.lb = g;
  this.Ya = k;
  this.i = 4194305;
  this.r = 4352;
}
h = Xf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z) {
    a = this;
    var oa = Hd(a.g, b, c, d, e, yc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z], 0)), Qg = V(this, oa);
    w(Qg) || U(a.name, oa);
    return Hd(Qg, b, c, d, e, yc([f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N, Z], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) {
    a = this;
    var Z = a.g.ba ? a.g.ba(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N), oa = V(this, Z);
    w(oa) || U(a.name, Z);
    return oa.ba ? oa.ba(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N) : oa.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K, N);
  }
  function c(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) {
    a = this;
    var N = a.g.aa ? a.g.aa(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K), Z = V(this, N);
    w(Z) || U(a.name, N);
    return Z.aa ? Z.aa(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K) : Z.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D, K);
  }
  function d(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) {
    a = this;
    var K = a.g.$ ? a.g.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D), N = V(this, K);
    w(N) || U(a.name, K);
    return N.$ ? N.$(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D) : N.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E, D);
  }
  function e(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) {
    a = this;
    var D = a.g.Z ? a.g.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E), K = V(this, D);
    w(K) || U(a.name, D);
    return K.Z ? K.Z(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E) : K.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F, E);
  }
  function f(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) {
    a = this;
    var E = a.g.Y ? a.g.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F), D = V(this, E);
    w(D) || U(a.name, E);
    return D.Y ? D.Y(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F) : D.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x, F);
  }
  function g(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) {
    a = this;
    var F = a.g.X ? a.g.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x), E = V(this, F);
    w(E) || U(a.name, F);
    return E.X ? E.X(b, c, d, e, f, g, k, l, q, p, r, t, u, v, x) : E.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v, x);
  }
  function k(a, b, c, d, e, f, g, k, l, q, p, r, t, u, v) {
    a = this;
    var x = a.g.W ? a.g.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v), F = V(this, x);
    w(F) || U(a.name, x);
    return F.W ? F.W(b, c, d, e, f, g, k, l, q, p, r, t, u, v) : F.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u, v);
  }
  function l(a, b, c, d, e, f, g, k, l, q, p, r, t, u) {
    a = this;
    var v = a.g.V ? a.g.V(b, c, d, e, f, g, k, l, q, p, r, t, u) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u), x = V(this, v);
    w(x) || U(a.name, v);
    return x.V ? x.V(b, c, d, e, f, g, k, l, q, p, r, t, u) : x.call(null, b, c, d, e, f, g, k, l, q, p, r, t, u);
  }
  function p(a, b, c, d, e, f, g, k, l, q, p, r, t) {
    a = this;
    var u = a.g.U ? a.g.U(b, c, d, e, f, g, k, l, q, p, r, t) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r, t), v = V(this, u);
    w(v) || U(a.name, u);
    return v.U ? v.U(b, c, d, e, f, g, k, l, q, p, r, t) : v.call(null, b, c, d, e, f, g, k, l, q, p, r, t);
  }
  function q(a, b, c, d, e, f, g, k, l, q, p, r) {
    a = this;
    var t = a.g.T ? a.g.T(b, c, d, e, f, g, k, l, q, p, r) : a.g.call(null, b, c, d, e, f, g, k, l, q, p, r), u = V(this, t);
    w(u) || U(a.name, t);
    return u.T ? u.T(b, c, d, e, f, g, k, l, q, p, r) : u.call(null, b, c, d, e, f, g, k, l, q, p, r);
  }
  function r(a, b, c, d, e, f, g, k, l, q, p) {
    a = this;
    var r = a.g.S ? a.g.S(b, c, d, e, f, g, k, l, q, p) : a.g.call(null, b, c, d, e, f, g, k, l, q, p), t = V(this, r);
    w(t) || U(a.name, r);
    return t.S ? t.S(b, c, d, e, f, g, k, l, q, p) : t.call(null, b, c, d, e, f, g, k, l, q, p);
  }
  function t(a, b, c, d, e, f, g, k, l, q) {
    a = this;
    var p = a.g.ea ? a.g.ea(b, c, d, e, f, g, k, l, q) : a.g.call(null, b, c, d, e, f, g, k, l, q), r = V(this, p);
    w(r) || U(a.name, p);
    return r.ea ? r.ea(b, c, d, e, f, g, k, l, q) : r.call(null, b, c, d, e, f, g, k, l, q);
  }
  function u(a, b, c, d, e, f, g, k, l) {
    a = this;
    var q = a.g.da ? a.g.da(b, c, d, e, f, g, k, l) : a.g.call(null, b, c, d, e, f, g, k, l), p = V(this, q);
    w(p) || U(a.name, q);
    return p.da ? p.da(b, c, d, e, f, g, k, l) : p.call(null, b, c, d, e, f, g, k, l);
  }
  function v(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.g.ca ? a.g.ca(b, c, d, e, f, g, k) : a.g.call(null, b, c, d, e, f, g, k), q = V(this, l);
    w(q) || U(a.name, l);
    return q.ca ? q.ca(b, c, d, e, f, g, k) : q.call(null, b, c, d, e, f, g, k);
  }
  function x(a, b, c, d, e, f, g) {
    a = this;
    var k = a.g.O ? a.g.O(b, c, d, e, f, g) : a.g.call(null, b, c, d, e, f, g), l = V(this, k);
    w(l) || U(a.name, k);
    return l.O ? l.O(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function E(a, b, c, d, e, f) {
    a = this;
    var g = a.g.u ? a.g.u(b, c, d, e, f) : a.g.call(null, b, c, d, e, f), k = V(this, g);
    w(k) || U(a.name, g);
    return k.u ? k.u(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    var f = a.g.p ? a.g.p(b, c, d, e) : a.g.call(null, b, c, d, e), g = V(this, f);
    w(g) || U(a.name, f);
    return g.p ? g.p(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    var e = a.g.e ? a.g.e(b, c, d) : a.g.call(null, b, c, d), f = V(this, e);
    w(f) || U(a.name, e);
    return f.e ? f.e(b, c, d) : f.call(null, b, c, d);
  }
  function N(a, b, c) {
    a = this;
    var d = a.g.b ? a.g.b(b, c) : a.g.call(null, b, c), e = V(this, d);
    w(e) || U(a.name, d);
    return e.b ? e.b(b, c) : e.call(null, b, c);
  }
  function Z(a, b) {
    a = this;
    var c = a.g.a ? a.g.a(b) : a.g.call(null, b), d = V(this, c);
    w(d) || U(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function oa(a) {
    a = this;
    var b = a.g.m ? a.g.m() : a.g.call(null), c = V(this, b);
    w(c) || U(a.name, b);
    return c.m ? c.m() : c.call(null);
  }
  var D = null, D = function(D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb, Tb, Ac, Bd, $e) {
    switch(arguments.length) {
      case 1:
        return oa.call(this, D);
      case 2:
        return Z.call(this, D, Y);
      case 3:
        return N.call(this, D, Y, aa);
      case 4:
        return K.call(this, D, Y, aa, ca);
      case 5:
        return F.call(this, D, Y, aa, ca, ga);
      case 6:
        return E.call(this, D, Y, aa, ca, ga, ia);
      case 7:
        return x.call(this, D, Y, aa, ca, ga, ia, ja);
      case 8:
        return v.call(this, D, Y, aa, ca, ga, ia, ja, na);
      case 9:
        return u.call(this, D, Y, aa, ca, ga, ia, ja, na, ra);
      case 10:
        return t.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua);
      case 11:
        return r.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya);
      case 12:
        return q.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca);
      case 13:
        return p.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka);
      case 14:
        return l.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa);
      case 15:
        return k.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc);
      case 16:
        return g.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb);
      case 17:
        return f.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb);
      case 18:
        return e.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb);
      case 19:
        return d.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb, Tb);
      case 20:
        return c.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb, Tb, Ac);
      case 21:
        return b.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb, Tb, Ac, Bd);
      case 22:
        return a.call(this, D, Y, aa, ca, ga, ia, ja, na, ra, ua, ya, Ca, Ka, Pa, cc, cb, jb, zb, Tb, Ac, Bd, $e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = oa;
  D.b = Z;
  D.e = N;
  D.p = K;
  D.u = F;
  D.O = E;
  D.ca = x;
  D.da = v;
  D.ea = u;
  D.S = t;
  D.T = r;
  D.U = q;
  D.V = p;
  D.W = l;
  D.X = k;
  D.Y = g;
  D.Z = f;
  D.$ = e;
  D.aa = d;
  D.ba = c;
  D.pb = b;
  D.Ra = a;
  return D;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.m = function() {
  var a = this.g.m ? this.g.m() : this.g.call(null), b = V(this, a);
  w(b) || U(this.name, a);
  return b.m ? b.m() : b.call(null);
};
h.a = function(a) {
  var b = this.g.a ? this.g.a(a) : this.g.call(null, a), c = V(this, b);
  w(c) || U(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.b = function(a, b) {
  var c = this.g.b ? this.g.b(a, b) : this.g.call(null, a, b), d = V(this, c);
  w(d) || U(this.name, c);
  return d.b ? d.b(a, b) : d.call(null, a, b);
};
h.e = function(a, b, c) {
  var d = this.g.e ? this.g.e(a, b, c) : this.g.call(null, a, b, c), e = V(this, d);
  w(e) || U(this.name, d);
  return e.e ? e.e(a, b, c) : e.call(null, a, b, c);
};
h.p = function(a, b, c, d) {
  var e = this.g.p ? this.g.p(a, b, c, d) : this.g.call(null, a, b, c, d), f = V(this, e);
  w(f) || U(this.name, e);
  return f.p ? f.p(a, b, c, d) : f.call(null, a, b, c, d);
};
h.u = function(a, b, c, d, e) {
  var f = this.g.u ? this.g.u(a, b, c, d, e) : this.g.call(null, a, b, c, d, e), g = V(this, f);
  w(g) || U(this.name, f);
  return g.u ? g.u(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.O = function(a, b, c, d, e, f) {
  var g = this.g.O ? this.g.O(a, b, c, d, e, f) : this.g.call(null, a, b, c, d, e, f), k = V(this, g);
  w(k) || U(this.name, g);
  return k.O ? k.O(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.ca = function(a, b, c, d, e, f, g) {
  var k = this.g.ca ? this.g.ca(a, b, c, d, e, f, g) : this.g.call(null, a, b, c, d, e, f, g), l = V(this, k);
  w(l) || U(this.name, k);
  return l.ca ? l.ca(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.da = function(a, b, c, d, e, f, g, k) {
  var l = this.g.da ? this.g.da(a, b, c, d, e, f, g, k) : this.g.call(null, a, b, c, d, e, f, g, k), p = V(this, l);
  w(p) || U(this.name, l);
  return p.da ? p.da(a, b, c, d, e, f, g, k) : p.call(null, a, b, c, d, e, f, g, k);
};
h.ea = function(a, b, c, d, e, f, g, k, l) {
  var p = this.g.ea ? this.g.ea(a, b, c, d, e, f, g, k, l) : this.g.call(null, a, b, c, d, e, f, g, k, l), q = V(this, p);
  w(q) || U(this.name, p);
  return q.ea ? q.ea(a, b, c, d, e, f, g, k, l) : q.call(null, a, b, c, d, e, f, g, k, l);
};
h.S = function(a, b, c, d, e, f, g, k, l, p) {
  var q = this.g.S ? this.g.S(a, b, c, d, e, f, g, k, l, p) : this.g.call(null, a, b, c, d, e, f, g, k, l, p), r = V(this, q);
  w(r) || U(this.name, q);
  return r.S ? r.S(a, b, c, d, e, f, g, k, l, p) : r.call(null, a, b, c, d, e, f, g, k, l, p);
};
h.T = function(a, b, c, d, e, f, g, k, l, p, q) {
  var r = this.g.T ? this.g.T(a, b, c, d, e, f, g, k, l, p, q) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q), t = V(this, r);
  w(t) || U(this.name, r);
  return t.T ? t.T(a, b, c, d, e, f, g, k, l, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, p, q);
};
h.U = function(a, b, c, d, e, f, g, k, l, p, q, r) {
  var t = this.g.U ? this.g.U(a, b, c, d, e, f, g, k, l, p, q, r) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r), u = V(this, t);
  w(u) || U(this.name, t);
  return u.U ? u.U(a, b, c, d, e, f, g, k, l, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, p, q, r);
};
h.V = function(a, b, c, d, e, f, g, k, l, p, q, r, t) {
  var u = this.g.V ? this.g.V(a, b, c, d, e, f, g, k, l, p, q, r, t) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t), v = V(this, u);
  w(v) || U(this.name, u);
  return v.V ? v.V(a, b, c, d, e, f, g, k, l, p, q, r, t) : v.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t);
};
h.W = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u) {
  var v = this.g.W ? this.g.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u), x = V(this, v);
  w(x) || U(this.name, v);
  return x.W ? x.W(a, b, c, d, e, f, g, k, l, p, q, r, t, u) : x.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u);
};
h.X = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) {
  var x = this.g.X ? this.g.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v), E = V(this, x);
  w(E) || U(this.name, x);
  return E.X ? E.X(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v) : E.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v);
};
h.Y = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) {
  var E = this.g.Y ? this.g.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x), F = V(this, E);
  w(F) || U(this.name, E);
  return F.Y ? F.Y(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x) : F.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x);
};
h.Z = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) {
  var F = this.g.Z ? this.g.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E), K = V(this, F);
  w(K) || U(this.name, F);
  return K.Z ? K.Z(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E) : K.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E);
};
h.$ = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) {
  var K = this.g.$ ? this.g.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F), N = V(this, K);
  w(N) || U(this.name, K);
  return N.$ ? N.$(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F) : N.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F);
};
h.aa = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) {
  var N = this.g.aa ? this.g.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K), Z = V(this, N);
  w(Z) || U(this.name, N);
  return Z.aa ? Z.aa(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K) : Z.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K);
};
h.ba = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) {
  var Z = this.g.ba ? this.g.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : this.g.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N), oa = V(this, Z);
  w(oa) || U(this.name, Z);
  return oa.ba ? oa.ba(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N) : oa.call(null, a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N);
};
h.pb = function(a, b, c, d, e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z) {
  var oa = Hd(this.g, a, b, c, d, yc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z], 0)), D = V(this, oa);
  w(D) || U(this.name, oa);
  return Hd(D, a, b, c, d, yc([e, f, g, k, l, p, q, r, t, u, v, x, E, F, K, N, Z], 0));
};
function Yf(a, b, c) {
  Ud.p(a.Xa, Gc, b, c);
  Tf(a.lb, a.Xa, a.Ya, a.kb);
}
function V(a, b) {
  fc.b(function() {
    var b = a.Ya;
    return I.a ? I.a(b) : I.call(null, b);
  }(), function() {
    var b = a.kb;
    return I.a ? I.a(b) : I.call(null, b);
  }()) || Tf(a.lb, a.Xa, a.Ya, a.kb);
  var c = function() {
    var b = a.lb;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, b);
  if (w(c)) {
    return c;
  }
  c = Wf(a.name, b, a.kb, a.Xa, a.Pb, a.lb, a.Ya);
  return w(c) ? c : function() {
    var b = a.Xa;
    return I.a ? I.a(b) : I.call(null, b);
  }().call(null, a.Ob);
}
h.Ta = function() {
  return Ib(this.name);
};
h.Ua = function() {
  return Jb(this.name);
};
h.C = function() {
  return this[ea] || (this[ea] = ++fa);
};
var Zf = new M(null, "bullets", "bullets", 1734809024), T = new M(null, "p2", "p2", 905500641), $f = new M(null, "r", "r", -471384190), wa = new M(null, "meta", "meta", 1499536964), ag = new M(null, "selected", "selected", 574897764), bg = new M(null, "enemy-spawn", "enemy-spawn", 1471569540), xa = new M(null, "dup", "dup", 556298533), cg = new M(null, "dir", "dir", 1734754661), dg = new M(null, "ammo", "ammo", -1520726489), Rd = new M(null, "validator", "validator", -1966190681), eg = new M(null, 
"default", "default", -1987822328), fg = new M(null, "w", "w", 354169001), gg = new M(null, "th", "th", -545608566), hg = new M(null, "th1", "th1", 583362347), ig = new M(null, "pos", "pos", -864607220), W = new M(null, "type", "type", 1174270348), jg = new M(null, "th2", "th2", 1996173036), kg = new M(null, "cooldown", "cooldown", -1178127572), Jf = new M(null, "fallback-impl", "fallback-impl", -1501286995), ta = new M(null, "flush-on-newline", "flush-on-newline", -151457939), lg = new M(null, "segments", 
"segments", 1937535949), S = new M(null, "p1", "p1", -936759954), mg = new M(null, "targets", "targets", 2014963406), ng = new M(null, "walls", "walls", -268788818), og = new M(null, "chunks", "chunks", 83720431), Pf = new M(null, "descendants", "descendants", 1824886031), pg = new M(null, "k", "k", -2146297393), qg = new M("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Qf = new M(null, "ancestors", "ancestors", -776045424), rg = new M(null, "level", "level", 1290497552), 
sg = new M(null, "turn", "turn", 75759344), va = new M(null, "readably", "readably", 1129599760), Bf = new M(null, "more-marker", "more-marker", -14717935), tg = new M(null, "head", "head", -771383919), ug = new M(null, "c", "c", -1763192079), vg = new M(null, "stop", "stop", -2140911342), za = new M(null, "print-length", "print-length", 1931866356), wg = new M(null, "tail", "tail", -1146023564), xg = new M(null, "id", "id", -1388402092), yg = new M(null, "score", "score", -1963588780), zg = new M(null, 
"terrain", "terrain", 704966005), Of = new M(null, "parents", "parents", -2027538891), Ag = new M(null, "length", "length", 588987862), Bg = new M(null, "b", "b", 1482224470), Cg = new M(null, "right", "right", -452581833), Dg = new M(null, "health", "health", -295520649), Eg = new M(null, "player", "player", -97687400), Fg = new M(null, "target-length", "target-length", 208661657), Gg = new M(null, "enemies", "enemies", 2114285722), Hg = new M(null, "hierarchy", "hierarchy", -1053470341), If = new M(null, 
"alt-impl", "alt-impl", 670969595), Ig = new M(null, "barrel-change", "barrel-change", -347000069), Jg = new M(null, "temperature", "temperature", 899018429), X = new M("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), Kg = new M(null, "left", "left", -399115937);
var Lg = function Lg() {
  return Lg.k(arguments[0], 1 < arguments.length ? new bc(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Lg.k = function(a, b) {
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
      var k = e.G(null, g), c = J(k, 0), k = J(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = C(d)) {
        Sc(d) ? (e = Fb(d), d = Gb(d), c = e, f = Dc(e), e = c) : (e = G(d), c = J(e, 0), k = J(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
Lg.v = 1;
Lg.t = function(a) {
  var b = G(a);
  a = H(a);
  return Lg.k(b, a);
};
var Mg = function Mg() {
  return Mg.k(arguments[0], 1 < arguments.length ? new bc(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Mg.k = function(a, b) {
  Fd(Lg, a, b);
  return a.stroke();
};
Mg.v = 1;
Mg.t = function(a) {
  var b = G(a);
  a = H(a);
  return Mg.k(b, a);
};
function Ng(a, b, c, d, e) {
  var f = J(b, 0);
  b = J(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function Og(a) {
  var b = Pg;
  b.save();
  try {
    return a.m ? a.m() : a.call(null);
  } finally {
    b.restore();
  }
}
;function Rg(a) {
  a = fc.b("" + A("\n"), "/(?:)/") ? Bc.b(se(wc("", Vd.b(A, C(a)))), "") : se(("" + A(a)).split("\n"));
  if (fc.b(0, 0)) {
    a: {
      for (;;) {
        if (fc.b("", null == a ? null : db(a))) {
          a = null == a ? null : eb(a);
        } else {
          break a;
        }
      }
    }
  }
  return a;
}
function Sg(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
;var Tg = 2 * Math.PI, Ug, Vg, Wg = hd(3 * (window.innerWidth - 20), 4);
Vg = 1280 < Wg ? 1280 : Wg;
var Xg = hd(4 * (window.innerHeight - 10), 3);
Ug = Vg < Xg ? Vg : Xg;
var Yg = hd(3 * Ug, 4), Zg = document.createElement("canvas");
w(Ug) && Zg.setAttribute("width", Ug);
w(Yg) && Zg.setAttribute("height", Yg);
Zg.setAttribute("style", "border: 1px solid #000; display: block;");
var $g = document.createElement("div"), Pg = Zg.getContext("2d");
function ah() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild($g);
    return a;
  }());
  return a.appendChild(Zg);
}
da("figwheel_test.common.init_elements", ah);
function bh(a, b) {
  return Og(function() {
    if (w(b)) {
      var c = Pg.canvas;
      Pg.clearRect(0, 0, c.width, c.height);
    }
    c = Zg.width / 1280;
    Pg.scale(c, c);
    Pg.translate(640, 480);
    Pg.scale(1, -1);
    return a.m ? a.m() : a.call(null);
  });
}
function ch(a) {
  window.onkeypress = function(b) {
    return fc.b(b.which, 32) ? a.m ? a.m() : a.call(null) : null;
  };
  return Zg.ontouchstart = function() {
    return a.m ? a.m() : a.call(null);
  };
}
function dh(a) {
  return bh(function() {
    Pg.font = "20px sans";
    Pg.scale(1, -1);
    return Kf(function(a) {
      Pg.fillText(a, -(Pg.measureText(a).width / 2), 0);
      return Pg.translate(0, 20);
    }, Vd.b(Sg, Rg(a)));
  }, !1);
}
var eh = Yc(function(a) {
  var b = O ? O(wf) : Pd.call(null, wf);
  ka(a, function(a, b) {
    return function(a, c) {
      return Ud.e(b, Bc, c);
    };
  }(a, b));
  return I.a ? I.a(b) : I.call(null, b);
}(window), "ontouchstart");
var fh = function fh(b, c, d) {
  if (b ? b.hb : b) {
    return b.hb(b, c, d);
  }
  var e;
  e = fh[m(null == b ? null : b)];
  if (!e && (e = fh._, !e)) {
    throw z("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function gh(a) {
  return 33 !== a.c.length;
}
function hh(a) {
  a = a.c[32];
  return a[a[32] - 1];
}
function ih(a, b, c) {
  for (;;) {
    if (w(gh(a))) {
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
;function jh(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.c;
      }
      if (w(gh(c))) {
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
    return ge(e, a);
  }
}
function kh(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = ae(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = ae(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var lh = function lh(b, c, d, e, f) {
  if (w(gh(e))) {
    for (var g = Fa(e.c), g = e = ae(e.n, g);;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (w(l)) {
          l = Fa(l.c);
          l = ae(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = kh(f.c, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Fa(e.c);
    c = e.c[32];
    k = c[32] - 1;
    e = ae(e.n, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], p = 0 < k ? c[k] - c[k - 1] : c[0], l = p !== 1 << b ? lh(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = kh(f.c, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, mh = function mh(b, c, d, e) {
  if (w(gh(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = mh(b - 5, c, d, e.c[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Fa(e.c);
      e[f] = b;
      return ae(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Fa(e.c);
    e[f] = null;
    return ae(d, e);
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
  c = Fa(g);
  if (5 < b) {
    var k = e.c[f];
    b = mh(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    w(gh(k)) ? (e = Fa(e.c), c[f] -= 32) : (g = hh(k) - (w(b) ? hh(b) : 0), e = Fa(e.c), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return ae(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Fa(e.c);
  b = Fa(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return ae(d, e);
}, nh = function nh(b, c, d, e) {
  if (w(gh(c))) {
    for (var f = c = new $d(c.n, Fa(c.c));;) {
      if (0 === b) {
        f.c[d & 31] = e;
        break;
      } else {
        var f = f.c, g = d >> b & 31, k;
        k = f[g];
        k = new $d(k.n, Fa(k.c));
        f = f[g] = k;
        b -= 5;
      }
    }
    return c;
  }
  f = Fa(c.c);
  g = c.c[32];
  a: {
    for (k = d >> b & 31;;) {
      if (d < (g[k] | 0)) {
        break a;
      }
      k += 1;
    }
  }
  f[k] = nh(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return ae(c.n, f);
};
function oh(a, b) {
  if (b.n === a) {
    return b;
  }
  var c = Fa(b.c);
  33 === c.length && (c[32] = Fa(c[32]));
  return new $d(a, c);
}
var ph = function ph(b, c, d, e, f) {
  e = oh(d, e);
  if (w(gh(e))) {
    for (var g = e;;) {
      var g = g.c, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = kh(f.c, d, b - 5, f);
        } else {
          l = oh(d, l);
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
      var l = oh(d, c[k]), p = 0 < k ? g[k] - g[k - 1] : g[0], l = p !== 1 << b ? ph(b - 5, p + 1, d, l, f) : null
    }
    w(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = kh(f.c, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, qh = function qh(b, c, d, e, f) {
  d = oh(c, d);
  if (w(gh(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.c[e & 31] = f;
        break;
      } else {
        var g = g.c, k = e >> b & 31, l = oh(c, g[k]), g = g[k] = l;
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
    g[l] = qh(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var rh = function rh(b) {
  if (b ? b.ib : b) {
    return b.ib(b);
  }
  var c;
  c = rh[m(null == b ? null : b)];
  if (!c && (c = rh._, !c)) {
    throw z("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function sh(a, b, c, d, e, f) {
  this.F = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.l = f;
  this.i = 2179858668;
  this.r = 1536;
}
h = sh.prototype;
h.toString = function() {
  return Ob(this);
};
h.D = function(a, b, c) {
  return Af(b, Gf, "(", " ", ")", c, this);
};
h.I = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = th ? th(a, b, c, d) : uh.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Hb(this);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jd(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.N = function() {
  return Mc(ec, this.h);
};
h.Q = function(a, b) {
  return oc(ue(this.F, this.j + this.w, Dc(this.F)), b);
};
h.R = function(a, b, c) {
  return pc(ue(this.F, this.j + this.w, Dc(this.F)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = th ? th(a, b, c, d) : uh.call(null, a, b, c, d);
    return null == a ? ec : a;
  }
  return Gb(this);
};
h.K = function() {
  return this;
};
h.$a = function() {
  var a = this.ga;
  return new td(a, this.w, a.length);
};
h.ab = function() {
  var a = this.ga.length, b;
  this.j + a < Ja(this.F) ? (b = this.F, a = this.j + a, b = vh ? vh(b, a, 0) : uh.call(null, b, a, 0)) : b = null;
  return null == b ? ec : b;
};
h.L = function(a, b) {
  var c = this.F, d = this.ga, e = this.j, f = this.w;
  return wh ? wh(c, d, e, f, b) : uh.call(null, c, d, e, f, b);
};
h.J = function(a, b) {
  return wc(b, this);
};
h.Za = function() {
  var a = this.ga.length, b;
  this.j + a < Ja(this.F) ? (b = this.F, a = this.j + a, b = vh ? vh(b, a, 0) : uh.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function uh() {
  switch(arguments.length) {
    case 3:
      return vh(arguments[0], arguments[1], arguments[2]);
    case 4:
      return th(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return wh(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
}
function vh(a, b, c) {
  return new sh(a, jh(a.d, a.shift, a.root, a.o, b), b, c, null, null);
}
function th(a, b, c, d) {
  return new sh(a, b, c, d, null, null);
}
function wh(a, b, c, d, e) {
  return new sh(a, b, c, d, e, null);
}
var xh = function xh(b, c, d) {
  if (0 === c) {
    var e = b.c;
    b = Array(d);
    Uc(e, 0, b, 0, d);
  } else {
    var f = gh(b), g = Ba(f) ? b.c[32] : null, k = d - 1 >> c & 31, l = w(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), p = w(f) ? function() {
      var b = gd(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.c, q = xh(e[l], c - 5, p), r = 5 === c ? 32 === q.c.length : gh(q);
    b = Array(w(w(f) ? r : f) ? 32 : 33);
    var t = w(r) ? function() {
      var b = gd(p, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? q.c.length : hh(q);
    Uc(e, 0, b, 0, l);
    b[l] = q;
    if (Ba(w(f) ? r : f)) {
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
  return ae(null, b);
}, yh = function yh(b, c, d, e) {
  if (0 === c) {
    var f = b.c, g = f.length - d, k = Array(g);
    Uc(f, d, k, 0, g);
    return ae(null, k);
  }
  var l = gh(b), f = b.c, p = Ba(l) ? b.c[32] : null, q = d >> c & 31, r = w(l) ? q : function() {
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
  }() : p[32], t = yh(f[r], c - 5, 0 < r ? d - (w(l) ? r * (1 << c) : p[r - 1]) : d, function() {
    var b = 1 << c, d = 0 < r ? e - (w(l) ? r * (1 << c) : p[r - 1]) : e;
    return b < d ? b : d;
  }()), g = k - r, g = null == t ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (w(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], v = 1 << c, x = 0, E = w(function() {
      var b = null == t;
      return b ? b : (b = 5 === c) ? b : gh(t);
    }()) ? (1 << c) - (d >> c - 5 & 31) : hh(t);;) {
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
  Uc(f, null == t ? r + 1 : r, k, 0, g);
  null != t && (k[0] = t);
  k[32] = u;
  return ae(b.n, k);
};
function zh(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.h = e;
  this.l = f;
  this.i = 2315152159;
  this.r = 2052;
}
h = zh.prototype;
h.toString = function() {
  return Ob(this);
};
h.H = function(a, b) {
  return B.e(this, b, null);
};
h.A = function(a, b, c) {
  return B.e(this, b, c);
};
h.G = function(a, b) {
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
      if (w(gh(d))) {
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
    return ge(b, this.d);
  }
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? B.b(this, b) : c;
};
h.D = function(a, b, c) {
  return Af(b, Gf, "[", " ", "]", c, this);
};
h.gb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.o.length;
    return b >= d ? (a = Array(this.o.length), b -= d, Uc(this.o, 0, a, 0, this.o.length), a[b] = c, new zh(this.d, this.shift, this.root, a, this.h, null)) : new zh(this.d, this.shift, nh(this.shift, this.root, b, c), this.o, this.h, null);
  }
  return b === this.d ? Ma(this, c) : ge(b, this.d);
};
h.ib = function() {
  return this;
};
h.I = function() {
  return this.h;
};
h.M = function() {
  return this.d;
};
h.bb = function() {
  return B.b(this, 0);
};
h.cb = function() {
  return B.b(this, 1);
};
h.Ha = function() {
  return 0 < this.d ? B.b(this, this.d - 1) : null;
};
h.Ia = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return mb(Cc, this.h);
  }
  if (1 < this.o.length) {
    var a = Array(this.o.length - 1);
    Uc(this.o, 0, a, 0, a.length);
    return new zh(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = jh(this.d, this.shift, this.root, this.o, this.d - 2), b = mh(this.shift, this.d - this.o.length, this.root.n, this.root);
  return null == b ? new zh(this.d - 1, this.shift, Q, a, this.h, null) : 5 < this.shift && null == b.c[1] ? new zh(this.d - 1, this.shift - 5, b.c[0], a, this.h, null) : new zh(this.d - 1, this.shift, b, a, this.h, null);
};
h.C = function() {
  var a = this.l;
  return null != a ? a : this.l = a = jd(this);
};
h.q = function(a, b) {
  return vc(this, b);
};
h.Da = function() {
  var a = this.d, b = this.shift, c = new $d({}, Fa(this.root.c)), d = this.o, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Uc(d, 0, e, 0, d.length);
  d = this.o.length;
  return Ah.u ? Ah.u(a, b, c, e, d) : Ah.call(null, a, b, c, e, d);
};
h.N = function() {
  return Mc(Cc, this.h);
};
h.hb = function(a, b, c) {
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
    return c = Array(a), Uc(this.o, b - d, c, 0, a), new zh(a, 5, Q, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : xh(this.root, this.shift, c);
  b = 0 === b ? f : yh(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Uc(this.o, 0, d, 0, c), c = d) : c = jh(a, this.shift, b, [], a - 1);
  e = e ? b : mh(this.shift, a, b.n, b);
  if (null == e) {
    return new zh(a, 5, Q, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.c[1]) {
      b -= 5, e = e.c[0];
    } else {
      return new zh(a, b, e, c, this.h, null);
    }
  }
};
h.Q = function(a, b) {
  return oc(this, b);
};
h.R = function(a, b, c) {
  return pc(this, b, c);
};
h.Ga = function(a, b, c) {
  return gb(this, b, c);
};
h.K = function() {
  return 0 === this.d ? null : 0 === this.d - this.o.length ? xc(this.o, 0) : vh(this, 0, 0);
};
h.L = function(a, b) {
  return new zh(this.d, this.shift, this.root, this.o, b, this.l);
};
h.J = function(a, b) {
  if (32 > this.o.length) {
    var c = this.o.length, d = Array(c + 1);
    Uc(this.o, 0, d, 0, c);
    d[c] = b;
    return new zh(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = ae(this.root.n, this.o);
  d = [null];
  d[0] = b;
  if (w(ih(this.root, this.shift, this.d))) {
    if (w(gh(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = ae(this.root.n, e), g = e;
      g[0] = this.root;
      g[1] = kh(this.o, this.root.n, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = ae(this.root.n, e), k = this.root.c[32][31];
      e[0] = this.root;
      e[1] = kh(this.o, this.root.n, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new zh(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new zh(this.d + 1, this.shift, lh(this.shift, this.d, this.root.n, this.root, c), d, this.h, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.G(null, c);
  };
  a.e = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Fa(b)));
};
h.a = function(a) {
  return this.G(null, a);
};
h.b = function(a, b) {
  return this.ha(null, a, b);
};
P.prototype.ib = function() {
  return new zh(Dc(this), this.shift, this.root, this.o, Nc(this), null);
};
xe.prototype.ib = function() {
  var a = this.start, b = this.end;
  return fh(rh(this.oa), a, b);
};
function Bh(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.o = d;
  this.Ba = e;
  this.r = 88;
  this.i = 2;
}
h = Bh.prototype;
h.Ka = function(a, b) {
  if (this.root.n) {
    if (32 > this.Ba) {
      this.o[this.Ba] = b, this.d += 1, this.Ba += 1;
    } else {
      var c = ae(this.root.n, this.o), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.o = d;
      this.Ba = 1;
      if (w(ih(this.root, this.shift, this.d))) {
        if (w(gh(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = kh(this.o, this.root.n, this.shift, c);
          this.root = ae(this.root.n, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = ae(this.root.n, d), g = this.root.c[32][31];
          d[0] = this.root;
          d[1] = kh(this.o, this.root.n, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = ph(this.shift, this.d, this.root.n, this.root, c);
      }
      this.d += 1;
    }
    return this;
  }
  throw Error("conj! after persistent!");
};
h.La = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = Array(this.Ba);
    Uc(this.o, 0, a, 0, this.Ba);
    return new zh(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ja = function(a, b, c) {
  return Db(this, b, c);
};
h.rb = function(a, b, c) {
  if (this.root.n) {
    return 0 <= b && b < this.d ? (a = this.d - this.Ba, a <= b ? this.o[b - a] = c : this.root = qh(this.shift, this.root.n, this.root, b, c), this) : b === this.d ? Ab(this, c) : ge(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.M = function() {
  if (this.root.n) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function Ah(a, b, c, d, e) {
  return new Bh(a, b, c, d, e);
}
;P.prototype.hb = function(a, b, c) {
  return fh(rh(this), b, c);
};
xe.prototype.hb = function(a, b, c) {
  return fh(rh(this), b, c);
};
function Ch(a, b) {
  return fh(a, b, Dc(a));
}
;function Dh(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return[c - e, d - f];
}
function Eh(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return[c + e, d + f];
}
function Fh(a, b) {
  var c = J(b, 0), d = J(b, 1);
  return[a * c, a * d];
}
function Gh(a, b) {
  var c = J(a, 0), d = J(a, 1), e = J(b, 0), f = J(b, 1);
  return c * e + d * f;
}
function Hh(a) {
  var b = J(a, 0);
  a = J(a, 1);
  return Math.atan2(a, b);
}
;var Ih = new P(null, 8, 5, Q, [new P(null, 4, 5, Q, [new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, 44], null), T, new P(null, 2, 5, Q, [-415, -313], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-415, -313], null), T, new P(null, 2, 5, Q, [-55, -313], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-51, 246], null), T, new P(null, 2, 5, Q, [377, 246], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [377, 246], null), T, new P(null, 2, 5, Q, [377, 
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
-74], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [363, -393], null), T, new P(null, 2, 5, Q, [518, -171], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [34, -203], null), T, new P(null, 2, 5, Q, [338, -205], null)], null)], null), re([new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-110, 43], null), T, new P(null, 2, 5, Q, [-70, 111], null)], null), new n(null, 3, [W, X, S, new P(null, 2, 5, Q, [-70, 111], null), T, new P(null, 2, 5, Q, [26, 145], null)], null), new n(null, 
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
if ("undefined" === typeof Jh) {
  var Jh = function() {
    var a = O ? O(R) : Pd.call(null, R), b = O ? O(R) : Pd.call(null, R), c = O ? O(R) : Pd.call(null, R), d = O ? O(R) : Pd.call(null, R), e = Fc(R, Hg, Nf());
    return new Xf(ac("draw-segment"), function() {
      return function(a, b) {
        return W.a(b);
      };
    }(a, b, c, d, e), eg, e, a, b, c, d);
  }()
}
Yf(Jh, X, function(a, b) {
  var c = Wc(b) ? Ed(Qd, b) : b, d = L(c, S), c = L(c, T);
  return Mg.k(a, yc([d, c], 0));
});
Yf(Jh, qg, function(a, b) {
  var c = Wc(b) ? Ed(Qd, b) : b, d = L(c, ug), e = L(c, hg), f = L(c, jg), g = L(c, cg), c = L(c, $f);
  return 0 > g ? Ng(a, d, c, f, e) : Ng(a, d, c, e, f);
});
if ("undefined" === typeof Kh) {
  var Kh = function() {
    var a = O ? O(R) : Pd.call(null, R), b = O ? O(R) : Pd.call(null, R), c = O ? O(R) : Pd.call(null, R), d = O ? O(R) : Pd.call(null, R), e = Fc(R, Hg, Nf());
    return new Xf(ac("update-seg"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), eg, e, a, b, c, d);
  }()
}
Yf(Kh, X, function(a, b, c) {
  a = Wc(a) ? Ed(Qd, a) : a;
  var d = L(a, cg);
  b = Fh(b, d);
  return Zd.p(a, fc.b(c, tg) ? T : S, Eh, b);
});
Yf(Kh, qg, function(a, b, c) {
  a = Wc(a) ? Ed(Qd, a) : a;
  var d = L(a, cg), e = L(a, $f);
  b = b / e * d;
  return Zd.p(a, fc.b(c, tg) ? jg : hg, ed, b);
});
function Lh(a, b) {
  return Zd.p(Kh.e ? Kh.e(a, b, tg) : Kh.call(null, a, b, tg), Ag, ed, b);
}
function Mh(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a;
  L(c, W);
  return Zd.p(Kh.e ? Kh.e(c, b, wg) : Kh.call(null, c, b, wg), Ag, fd, b);
}
function Nh(a, b) {
  for (var c = 0, d = b;;) {
    if (fc.b(c, Dc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < Ag.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return Ch(Zd.p(a, c, Mh, d), c);
    }
    var e = c + 1, d = d - Ag.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof Oh) {
  var Oh = function() {
    var a = O ? O(R) : Pd.call(null, R), b = O ? O(R) : Pd.call(null, R), c = O ? O(R) : Pd.call(null, R), d = O ? O(R) : Pd.call(null, R), e = Fc(R, Hg, Nf());
    return new Xf(ac("seg-normal"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), eg, e, a, b, c, d);
  }()
}
Yf(Oh, X, function(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a, d = L(c, cg), c = J(d, 0), d = J(d, 1);
  return fc.b(b, Kg) ? [-d, c] : [d, -c];
});
Yf(Oh, qg, function(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a;
  L(c, hg);
  var d = L(c, jg), c = L(c, cg) * (fc.b(b, Kg) ? -1 : 1);
  return Fh(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Ph) {
  var Ph, Qh = O ? O(R) : Pd.call(null, R), Rh = O ? O(R) : Pd.call(null, R), Sh = O ? O(R) : Pd.call(null, R), Th = O ? O(R) : Pd.call(null, R), Uh = Fc(R, Hg, Nf());
  Ph = new Xf(ac("seg-endpoint"), W, eg, Uh, Qh, Rh, Sh, Th);
}
Yf(Ph, X, function(a) {
  return T.a(a);
});
Yf(Ph, qg, function(a) {
  var b = Wc(a) ? Ed(Qd, a) : a;
  L(b, hg);
  a = L(b, jg);
  var c = L(b, ug), b = L(b, $f);
  return Eh(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Vh(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a, d = L(c, lg);
  return Gc.e(c, lg, fc.b(Ag.a(zc(d)), 0) ? Bc.b(null == d ? null : eb(d), b) : Bc.b(d, b));
}
function Wh(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a, d = L(c, sg), e = L(c, lg);
  return fc.b(d, b) ? c : Vh(Gc.e(c, sg, b), function() {
    switch(b instanceof M ? b.va : null) {
      case "left":
        var a = zc(e), c = function() {
          var c = a;
          return Oh.b ? Oh.b(c, b) : Oh.call(null, c, b);
        }(), d = J(c, 0), l = J(c, 1), c = Eh(function() {
          var b = a;
          return Ph.a ? Ph.a(b) : Ph.call(null, b);
        }(), Fh(25, c)), p = Math.atan2(-l, -d), d = p, l = fc.b(b, Kg) ? 1 : -1;
        return new n(null, 7, [W, qg, ug, c, hg, p, jg, d, Ag, 0, cg, l, $f, 25], null);
      case "right":
        return a = zc(e), c = function() {
          var c = a;
          return Oh.b ? Oh.b(c, b) : Oh.call(null, c, b);
        }(), d = J(c, 0), l = J(c, 1), c = Eh(function() {
          var b = a;
          return Ph.a ? Ph.a(b) : Ph.call(null, b);
        }(), Fh(25, c)), d = p = Math.atan2(-l, -d), l = fc.b(b, Kg) ? 1 : -1, new n(null, 7, [W, qg, ug, c, hg, p, jg, d, Ag, 0, cg, l, $f, 25], null);
      default:
        return d = zc(e), a = l = Wc(d) ? Ed(Qd, d) : d, d = L(l, jg), l = L(l, cg), c = function() {
          var b = a;
          return Ph.a ? Ph.a(b) : Ph.call(null, b);
        }(), new n(null, 5, [W, X, S, c, T, c, Ag, 0, cg, Fh(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function Xh(a) {
  var b = I.a ? I.a(Yh) : I.call(null, Yh);
  bh(function() {
    return Kf(Md(Jh, a), Ad.k(ng.a(b), Vd.b(Qe, mg.a(b)), yc([lg.a(b)], 0)));
  }, !0);
}
function Zh(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a, d = L(c, hg), e = L(c, jg), c = L(c, cg);
  if (c * (e - d) > Tg) {
    return!0;
  }
  var f = gd(b, Tg), d = gd(d, Tg), e = gd(e, Tg);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Tg : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Tg;
}
if ("undefined" === typeof $h) {
  var $h = function() {
    var a = O ? O(R) : Pd.call(null, R), b = O ? O(R) : Pd.call(null, R), c = O ? O(R) : Pd.call(null, R), d = O ? O(R) : Pd.call(null, R), e = Fc(R, Hg, Nf());
    return new Xf(ac("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [W.a(a), W.a(b)], null);
      };
    }(a, b, c, d, e), eg, e, a, b, c, d);
  }()
}
Yf($h, new P(null, 2, 5, Q, [X, X], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [S.a(a), T.a(a)], null);
  c = new P(null, 2, 5, Q, [S.a(b), T.a(b)], null);
  var e = J(d, 0), d = J(d, 1), f = J(c, 0), g = J(c, 1), d = Dh(d, e);
  c = J(d, 0);
  var d = J(d, 1), k = Dh(g, f), g = J(k, 0), k = J(k, 1), f = Dh(f, e), e = J(f, 0), f = J(f, 1), l = -1 * c * k - -1 * d * g;
  c = fc.b(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = J(c, 0);
  d = J(c, 1);
  return w(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Yf($h, new P(null, 2, 5, Q, [X, qg], null), function(a, b) {
  var c = Wc(a) ? Ed(Qd, a) : a, d = L(c, S), c = L(c, T), e = Wc(b) ? Ed(Qd, b) : b, f = L(e, $f);
  var g = L(e, ug), c = Dh(c, d), e = Gh(c, c), d = Dh(d, g), g = Gh(d, d), k = Gh(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Gh(c, d) - g) / e, e = (-Gh(c, d) + g) / e, g = Hh(Eh(Fh(f, c), d)), c = Hh(Eh(Fh(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = J(f, 0);
  e = J(f, 1);
  d = J(f, 2);
  c = J(f, 3);
  return w(f) ? (d = (f = 0 < g && 1 > g) ? Zh(b, d) : f, w(d) ? d : (e = 0 < e && 1 > e) ? Zh(b, c) : e) : f;
});
Yf($h, new P(null, 2, 5, Q, [qg, X], null), function(a, b) {
  return $h.b ? $h.b(b, a) : $h.call(null, b, a);
});
Yf($h, new P(null, 2, 5, Q, [qg, qg], null), function(a, b) {
  var c;
  var d = ug.a(a), e = $f.a(a);
  c = ug.a(b);
  var f = $f.a(b), g = Dh(c, d), d = J(g, 0);
  c = J(g, 1);
  g = Gh(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = J(c, 0);
  d = J(c, 1);
  f = J(c, 2);
  e = J(c, 3);
  return w(c) ? (c = Zh(a, g), d = w(c) ? c : Zh(a, d), w(d) ? (f = Zh(b, f), w(f) ? f : Zh(b, e)) : d) : c;
});
function ai(a) {
  var b = Wc(a) ? Ed(Qd, a) : a, c = L(b, ng), d = L(b, lg), e = zc(d), f = null == d ? null : eb(d);
  return Kd(function(a) {
    return function(b) {
      return $h.b ? $h.b(a, b) : $h.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), Ad.b(c, w(Id(f)) ? null == f ? null : eb(f) : f));
}
function bi(a) {
  var b = Wc(a) ? Ed(Qd, a) : a, c = L(b, mg), d = L(b, lg), e = zc(d);
  return $c(function() {
    return function(a, b) {
      var c = J(b, 0);
      J(b, 1);
      return Zd.p(Zd.p(a, Fg, ed, 50), mg, Ic, c);
    };
  }(e, a, b, b, c, d), b, Xd(Ld(Md($h, e), Qe), c));
}
var ci = O ? O(null) : Pd.call(null, null);
function di(a, b) {
  for (var c = Wc(b) ? Ed(Qd, b) : b, d = L(c, ng), e = a.canvas, f = e.width, g = e.height, k = Lf(f) - f / 2, l = Lf(g) - g / 2;;) {
    if (w(Kd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Vd.b(Ld(function(a, b) {
      return function(c) {
        var d = new P(null, 2, 5, Q, [a, b], null), e = J(c, 0);
        c = J(c, 1);
        c = Dh(c, e);
        var f = Gh(Dh(e, d), c) / Gh(c, c) * -1, f = 1 < f ? 1 : f, e = Dh(Eh(e, Fh(0 > f ? 0 : f, c)), d), d = J(e, 0), e = J(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), zf()), d)))) {
      k = Lf(f) - f / 2, l = Lf(g) - g / 2;
    } else {
      return new P(null, 2, 5, Q, [k, l], null);
    }
  }
}
var ei = new P(null, 1, 5, Q, [new n(null, 5, [Ag, 100, W, X, cg, new P(null, 2, 5, Q, [1, 0], null), S, new P(null, 2, 5, Q, [0, 0], null), T, new P(null, 2, 5, Q, [100, 0], null)], null)], null);
function fi() {
  var a = new P(null, 5, 5, Q, [new P(null, 2, 5, Q, [-642, 482], null), new P(null, 2, 5, Q, [642, 482], null), new P(null, 2, 5, Q, [642, -482], null), new P(null, 2, 5, Q, [-642, -482], null), new P(null, 2, 5, Q, [-642, 482], null)], null);
  return Vd.e(function(a, c) {
    return new n(null, 3, [W, X, S, a, T, c], null);
  }, a, dc(a));
}
var gi = function gi() {
  switch(arguments.length) {
    case 2:
      return gi.b(arguments[0], arguments[1]);
    case 3:
      return gi.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([A("Invalid arity: "), A(arguments.length)].join(""));;
  }
};
gi.b = function(a, b) {
  return gi.e(a, b, function() {
    var b = gd(rg.a(a), Dc(Ih));
    return Ih.a ? Ih.a(b) : Ih.call(null, b);
  }());
};
gi.e = function(a, b, c) {
  return $c(function(a, c) {
    return Zd.u(a, mg, Gc, c, new n(null, 6, [W, qg, ug, di(b, a), hg, 0, jg, Tg, cg, 1, $f, 10], null));
  }, Gc.k(a, lg, ei, yc([Ag, 100, Fg, 100, sg, null, mg, R, ng, Ad.b(fi(), c), vg, !1], 0)), new yf(null, 0, 10, 1, null));
};
gi.v = 3;
var Yh, hi = new n(null, 1, [rg, 0], null);
Yh = O ? O(hi) : Pd.call(null, hi);
var ii = function ii(b, c, d) {
  return Ba(eh) ? ch(function() {
    Ud.p(Yh, Gc, vg, !0);
    window.requestAnimationFrame(function() {
      return dh("Paused");
    });
    return ch(function() {
      Ud.p(Yh, Gc, vg, !1);
      ji.e ? ji.e(b, c, d) : ji.call(null, b, c, d);
      return ii(b, c, d);
    });
  }) : null;
};
function ki() {
  window.onkeydown = null;
  return window.onkeyup = null;
}
var li = function li(b) {
  Ud.e(Yh, gi, b);
  Xh(b);
  return ch(function() {
    function c(b) {
      var c = I.a ? I.a(Yh) : I.call(null, Yh);
      Sd.b ? Sd.b(ci, c) : Sd.call(null, ci, c);
      ki();
      li(b);
      return dh("\n\n\nSnake?  Snake?! SNAAAAAAAAKE!!\n\n(Press Space to Continue)");
    }
    try {
      var d = {level:rg.a(I.a ? I.a(Yh) : I.call(null, Yh))};
      mixpanel.track("start level", d);
    } catch (e) {
      if (!(e instanceof Error)) {
        throw e;
      }
    }
    d = function() {
      return function(b) {
        Ud.p(Yh, Zd, rg, nc);
        ki();
        li(b);
        return dh("\n\n\nYou did it, Snake!  Unfortunately there's another facility\nwe need you to infiltrate.\n\n(Press Space to Continue)");
      };
    }(c);
    ji.e ? ji.e(b, c, d) : ji.call(null, b, c, d);
    return ii(b, c, d);
  });
}, mi = new n(null, 4, [65, Kg, 37, Kg, 68, Cg, 39, Cg], null);
function ji(a, b, c) {
  window.onkeydown = function(a) {
    a = a.which;
    a = mi.a ? mi.a(a) : mi.call(null, a);
    return w(a) ? Ud.e(Yh, Wh, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = mi.a ? mi.a(a) : mi.call(null, a);
    return w(a) ? fc.b(a, sg.a(I.a ? I.a(Yh) : I.call(null, Yh))) ? Ud.e(Yh, Wh, null) : null : null;
  };
  Zg.ontouchstart = function(b) {
    b.preventDefault();
    var c = zc(lg.a(I.a ? I.a(Yh) : I.call(null, Yh))), c = Wc(c) ? Ed(Qd, c) : c;
    L(c, cg);
    L(c, S);
    b = b.touches.item(0);
    var f;
    a: {
      var g = a.canvas;
      f = g;
      c = g.offsetLeft;
      for (g = g.offsetTop;;) {
        if (f = f.offsetParent, w(f)) {
          c += f.offsetLeft, g += f.offsetTop;
        } else {
          f = [c, g];
          break a;
        }
      }
    }
    c = J(f, 0);
    f = J(f, 1);
    c = [b.pageX - c, b.pageY - f];
    b = J(c, 0);
    c = J(c, 1);
    b = new P(null, 2, 5, Q, [b / (Zg.width / 1280) - 640, 480 + -(c / (Zg.width / 1280))], null);
    c = J(b, 0);
    J(b, 1);
    return Ud.e(Yh, Wh, -320 > c ? Kg : 320 < c ? Cg : null);
  };
  Zg.ontouchend = function(a) {
    a.preventDefault();
    return Ud.e(Yh, Wh, null);
  };
  return function e() {
    if (Ba(vg.a(I.a ? I.a(Yh) : I.call(null, Yh)))) {
      var f = Ud.b(Yh, function(a) {
        var b;
        b = Fg.a(a);
        a = Wc(a) ? Ed(Qd, a) : a;
        var c = L(a, lg), e = L(a, Ag), f = Dc(c) - 1, r = e + 3 - b, c = Zd.p(c, f, Lh, 3);
        b = Gc.k(a, lg, 0 < r ? Nh(c, r) : c, yc([Ag, Math.min(e + 3, b)], 0));
        return bi(b);
      });
      if (w(ai(f))) {
        return b.a ? b.a(a) : b.call(null, a);
      }
      if (Oc(mg.a(f))) {
        return c.a ? c.a(a) : c.call(null, a);
      }
      Xh(a);
      return window.requestAnimationFrame(e);
    }
    return ki();
  }.call(null);
}
da("figwheel_test.snake.init_everything", function() {
  ah();
  li(Pg);
  return dh("\n\n\n\nSnake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you.\n\nYou'll need to turn left and right using the A and D keys.");
});
var ni = document.createElement("canvas");
ni.setAttribute("width", 1280);
ni.setAttribute("height", 960);
ni.setAttribute("style", "border: 1px solid #000");
ni.getContext("2d");
var oi = new P(null, 2, 5, Q, [0, 0], null);
O || Pd.call(null, oi);
function pi() {
  for (var a = new P(null, 3, 5, Q, [Lf(500) - 250, -215, Lf(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = Ad.b(Wd(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (1 * (Math.random.m ? Math.random.m() : Math.random.call(null)) - .5) * b], null);
        };
      }(a, b, c), yc([a, dc(a)], 0)), new P(null, 1, 5, Q, [zc(a)], null)), b /= 2, --c;
    } else {
      return se(a);
    }
  }
}
function qi(a) {
  var b = Dc(a) / 2;
  return $c(function() {
    return function(a, b) {
      return Gc.e(a, b, -215);
    };
  }(b), a, new yf(null, b - 4, b + 4, 1, null));
}
O || Pd.call(null, 0);
O || Pd.call(null, !1);
var ri = new P(null, 2, 5, Q, [1, 0], null);
O || Pd.call(null, ri);
var si = new n(null, 7, [Zf, R, zg, function() {
  var a = pi(), b = Dc(a) - 1;
  return se(Nd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), qi(a)));
}(), Gg, R, og, R, yg, 0, bg, 60, Eg, Hc([dg, fg, gg, ig, kg, pg, Bg, Dg, Ig, Jg], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
O || Pd.call(null, si);
O || Pd.call(null, !1);
O || Pd.call(null, 0);
var ti = new n(null, 3, [ng, R, ag, null, xg, 0], null);
O || Pd.call(null, ti);

})();
