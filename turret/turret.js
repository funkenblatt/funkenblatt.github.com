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
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ia(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ja(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ka.prototype;
h.za = "";
h.set = function(a) {
  this.za = "" + a;
};
h.append = function(a, b, c) {
  this.za += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.za += arguments[d];
    }
  }
  return this;
};
h.clear = function() {
  this.za = "";
};
h.toString = function() {
  return this.za;
};
if ("undefined" === typeof ma) {
  var ma = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var oa = null;
if ("undefined" === typeof pa) {
  var pa = null
}
function ra() {
  return new sa(null, 5, [ta, !0, ua, !0, va, !1, xa, !1, za, null], null);
}
function y(a) {
  return null != a && !1 !== a;
}
function Aa(a) {
  return a instanceof Array;
}
function Ba(a) {
  return y(a) ? !1 : !0;
}
function A(a, b) {
  return a[v(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function B(a, b) {
  var c = null == b ? null : b.constructor, c = y(y(c) ? c.Hb : c) ? c.Gb : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Gb;
  return y(b) ? b : "" + D(a);
}
var Fa = "undefined" !== typeof Symbol && "function" === v(Symbol) ? Symbol.iterator : "@@iterator";
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
var Ha = {}, Ia = {}, Ja = function Ja(b) {
  if (b ? b.da : b) {
    return b.da(b);
  }
  var c;
  c = Ja[v(null == b ? null : b)];
  if (!c && (c = Ja._, !c)) {
    throw B("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ka = function Ka(b) {
  if (b ? b.Z : b) {
    return b.Z(b);
  }
  var c;
  c = Ka[v(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw B("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, La = function La(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = La[v(null == b ? null : b)];
  if (!d && (d = La._, !d)) {
    throw B("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Na = {}, E = function E() {
  switch(arguments.length) {
    case 2:
      return E.b(arguments[0], arguments[1]);
    case 3:
      return E.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
E.b = function(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = E[v(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw B("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
E.f = function(a, b, c) {
  if (a ? a.ka : a) {
    return a.ka(a, b, c);
  }
  var d;
  d = E[v(null == a ? null : a)];
  if (!d && (d = E._, !d)) {
    throw B("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
E.u = 3;
var Oa = {}, Pa = function Pa(b) {
  if (b ? b.ca : b) {
    return b.ca(b);
  }
  var c;
  c = Pa[v(null == b ? null : b)];
  if (!c && (c = Pa._, !c)) {
    throw B("ISeq.-first", b);
  }
  return c.call(null, b);
}, Qa = function Qa(b) {
  if (b ? b.ja : b) {
    return b.ja(b);
  }
  var c;
  c = Qa[v(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw B("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ra = {}, Sa = {}, Ta = function Ta() {
  switch(arguments.length) {
    case 2:
      return Ta.b(arguments[0], arguments[1]);
    case 3:
      return Ta.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Ta.b = function(a, b) {
  if (a ? a.$ : a) {
    return a.$(a, b);
  }
  var c;
  c = Ta[v(null == a ? null : a)];
  if (!c && (c = Ta._, !c)) {
    throw B("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ta.f = function(a, b, c) {
  if (a ? a.C : a) {
    return a.C(a, b, c);
  }
  var d;
  d = Ta[v(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw B("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ta.u = 3;
var Ua = function Ua(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = Ua[v(null == b ? null : b)];
  if (!e && (e = Ua._, !e)) {
    throw B("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Va = {}, Wa = function Wa(b, c) {
  if (b ? b.hb : b) {
    return b.hb(b, c);
  }
  var d;
  d = Wa[v(null == b ? null : b)];
  if (!d && (d = Wa._, !d)) {
    throw B("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Xa = {}, Ya = function Ya(b) {
  if (b ? b.ib : b) {
    return b.ib();
  }
  var c;
  c = Ya[v(null == b ? null : b)];
  if (!c && (c = Ya._, !c)) {
    throw B("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Za = function Za(b) {
  if (b ? b.jb : b) {
    return b.jb();
  }
  var c;
  c = Za[v(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw B("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, $a = {}, ab = function ab(b, c, d) {
  if (b ? b.kb : b) {
    return b.kb(b, c, d);
  }
  var e;
  e = ab[v(null == b ? null : b)];
  if (!e && (e = ab._, !e)) {
    throw B("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, bb = function bb(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = bb[v(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw B("IDeref.-deref", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b) {
  if (b ? b.F : b) {
    return b.F(b);
  }
  var c;
  c = db[v(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw B("IMeta.-meta", b);
  }
  return c.call(null, b);
}, eb = {}, gb = function gb(b, c) {
  if (b ? b.X : b) {
    return b.X(b, c);
  }
  var d;
  d = gb[v(null == b ? null : b)];
  if (!d && (d = gb._, !d)) {
    throw B("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, hb = {}, ib = function ib() {
  switch(arguments.length) {
    case 2:
      return ib.b(arguments[0], arguments[1]);
    case 3:
      return ib.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
ib.b = function(a, b) {
  if (a ? a.aa : a) {
    return a.aa(a, b);
  }
  var c;
  c = ib[v(null == a ? null : a)];
  if (!c && (c = ib._, !c)) {
    throw B("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
ib.f = function(a, b, c) {
  if (a ? a.ba : a) {
    return a.ba(a, b, c);
  }
  var d;
  d = ib[v(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw B("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
ib.u = 3;
var jb = function jb(b, c, d) {
  if (b ? b.La : b) {
    return b.La(b, c, d);
  }
  var e;
  e = jb[v(null == b ? null : b)];
  if (!e && (e = jb._, !e)) {
    throw B("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, kb = function kb(b, c) {
  if (b ? b.n : b) {
    return b.n(b, c);
  }
  var d;
  d = kb[v(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw B("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, lb = function lb(b) {
  if (b ? b.w : b) {
    return b.w(b);
  }
  var c;
  c = lb[v(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw B("IHash.-hash", b);
  }
  return c.call(null, b);
}, mb = {}, nb = function nb(b) {
  if (b ? b.W : b) {
    return b.W(b);
  }
  var c;
  c = nb[v(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw B("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, ob = {}, pb = function pb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = pb[v(null == b ? null : b)];
  if (!d && (d = pb._, !d)) {
    throw B("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, qb = {}, rb = function rb(b, c, d) {
  if (b ? b.A : b) {
    return b.A(b, c, d);
  }
  var e;
  e = rb[v(null == b ? null : b)];
  if (!e && (e = rb._, !e)) {
    throw B("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, sb = function sb(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = sb[v(null == b ? null : b)];
  if (!e && (e = sb._, !e)) {
    throw B("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, ub = function ub(b) {
  if (b ? b.Ia : b) {
    return b.Ia(b);
  }
  var c;
  c = ub[v(null == b ? null : b)];
  if (!c && (c = ub._, !c)) {
    throw B("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, vb = function vb(b, c) {
  if (b ? b.Wa : b) {
    return b.Wa(b, c);
  }
  var d;
  d = vb[v(null == b ? null : b)];
  if (!d && (d = vb._, !d)) {
    throw B("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, wb = function wb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = wb[v(null == b ? null : b)];
  if (!c && (c = wb._, !c)) {
    throw B("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, xb = function xb(b, c, d) {
  if (b ? b.Pa : b) {
    return b.Pa(b, c, d);
  }
  var e;
  e = xb[v(null == b ? null : b)];
  if (!e && (e = xb._, !e)) {
    throw B("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, yb = function yb(b, c, d) {
  if (b ? b.ob : b) {
    return b.ob(0, c, d);
  }
  var e;
  e = yb[v(null == b ? null : b)];
  if (!e && (e = yb._, !e)) {
    throw B("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, zb = function zb(b) {
  if (b ? b.lb : b) {
    return b.lb();
  }
  var c;
  c = zb[v(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw B("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b) {
  if (b ? b.eb : b) {
    return b.eb(b);
  }
  var c;
  c = Ab[v(null == b ? null : b)];
  if (!c && (c = Ab._, !c)) {
    throw B("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Bb = function Bb(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = Bb[v(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw B("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b) {
  if (b ? b.cb : b) {
    return b.cb(b);
  }
  var c;
  c = Cb[v(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw B("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Ma : b) {
    return b.Ma(b);
  }
  var c;
  c = Db[v(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw B("INamed.-name", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Eb[v(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw B("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b, c) {
  if (b ? b.Bb : b) {
    return b.Bb(b, c);
  }
  var d;
  d = Fb[v(null == b ? null : b)];
  if (!d && (d = Fb._, !d)) {
    throw B("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Gb = function Gb() {
  switch(arguments.length) {
    case 2:
      return Gb.b(arguments[0], arguments[1]);
    case 3:
      return Gb.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Gb.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Gb.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Gb.b = function(a, b) {
  if (a ? a.Cb : a) {
    return a.Cb(a, b);
  }
  var c;
  c = Gb[v(null == a ? null : a)];
  if (!c && (c = Gb._, !c)) {
    throw B("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Gb.f = function(a, b, c) {
  if (a ? a.Db : a) {
    return a.Db(a, b, c);
  }
  var d;
  d = Gb[v(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw B("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Gb.o = function(a, b, c, d) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b, c, d);
  }
  var e;
  e = Gb[v(null == a ? null : a)];
  if (!e && (e = Gb._, !e)) {
    throw B("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Gb.r = function(a, b, c, d, e) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c, d, e);
  }
  var f;
  f = Gb[v(null == a ? null : a)];
  if (!f && (f = Gb._, !f)) {
    throw B("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Gb.u = 5;
var Hb = function Hb(b) {
  if (b ? b.Ka : b) {
    return b.Ka(b);
  }
  var c;
  c = Hb[v(null == b ? null : b)];
  if (!c && (c = Hb._, !c)) {
    throw B("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Ib(a) {
  this.Kb = a;
  this.h = 1073741824;
  this.p = 0;
}
Ib.prototype.qb = function(a, b) {
  return this.Kb.append(b);
};
function Jb(a) {
  var b = new ka;
  a.A(null, new Ib(b), ra());
  return "" + D(b);
}
var Kb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.b ? Math.imul.b(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Lb(a) {
  a = Kb(a | 0, -862048943);
  return Kb(a << 15 | a >>> -15, 461845907);
}
function Mb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Kb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Ob(a, b) {
  var c = (a | 0) ^ b, c = Kb(c ^ c >>> 16, -2048144789), c = Kb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Pb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Mb(c, Lb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Lb(a.charCodeAt(a.length - 1)) : b;
  return Ob(b, Kb(2, a.length));
}
var Qb = {}, Rb = 0;
function Sb(a) {
  255 < Rb && (Qb = {}, Rb = 0);
  var b = Qb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Kb(31, d) + a.charCodeAt(c), c = e
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
    Qb[a] = b;
    Rb += 1;
  }
  return a = b;
}
function Tb(a) {
  a && (a.h & 4194304 || a.Nb) ? a = a.w(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Sb(a), 0 !== a && (a = Lb(a), a = Mb(0, a), a = Ob(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : lb(a);
  return a;
}
function Ub(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Vb(a, b, c, d, e) {
  this.Ga = a;
  this.name = b;
  this.ya = c;
  this.Ca = d;
  this.fa = e;
  this.h = 2154168321;
  this.p = 4096;
}
h = Vb.prototype;
h.toString = function() {
  return this.ya;
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.n = function(a, b) {
  return b instanceof Vb ? this.ya === b.ya : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ta.f(c, this, null);
      case 3:
        return Ta.f(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return Ta.f(c, this, null);
  };
  a.f = function(a, c, d) {
    return Ta.f(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return Ta.f(a, this, null);
};
h.b = function(a, b) {
  return Ta.f(a, this, b);
};
h.F = function() {
  return this.fa;
};
h.X = function(a, b) {
  return new Vb(this.Ga, this.name, this.ya, this.Ca, b);
};
h.w = function() {
  var a = this.Ca;
  return null != a ? a : this.Ca = a = Ub(Pb(this.name), Sb(this.Ga));
};
h.Ma = function() {
  return this.name;
};
h.Na = function() {
  return this.Ga;
};
h.A = function(a, b) {
  return pb(b, this.ya);
};
function Wb(a) {
  var b = [D("figwheel-test.snake"), D("/"), D(a)].join("");
  return new Vb("figwheel-test.snake", a, b, null, null);
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Ob)) {
    return a.W(null);
  }
  if (Aa(a) || "string" === typeof a) {
    return 0 === a.length ? null : new Xb(a, 0);
  }
  if (A(mb, a)) {
    return nb(a);
  }
  throw Error([D(a), D(" is not ISeqable")].join(""));
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.Oa)) {
    return a.ca(null);
  }
  a = F(a);
  return null == a ? null : Pa(a);
}
function Yb(a) {
  return null != a ? a && (a.h & 64 || a.Oa) ? a.ja(null) : (a = F(a)) ? Qa(a) : Zb : Zb;
}
function I(a) {
  return null == a ? null : a && (a.h & 128 || a.Va) ? a.ga(null) : F(Yb(a));
}
var $b = function $b() {
  switch(arguments.length) {
    case 1:
      return $b.a(arguments[0]);
    case 2:
      return $b.b(arguments[0], arguments[1]);
    default:
      return $b.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$b.a = function() {
  return!0;
};
$b.b = function(a, b) {
  return null == a ? null == b : a === b || kb(a, b);
};
$b.k = function(a, b, c) {
  for (;;) {
    if ($b.b(a, b)) {
      if (I(c)) {
        a = b, b = G(c), c = I(c);
      } else {
        return $b.b(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
$b.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return $b.k(b, a, c);
};
$b.u = 2;
function ac(a) {
  this.q = a;
}
ac.prototype.next = function() {
  if (null != this.q) {
    var a = G(this.q);
    this.q = I(this.q);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function bc(a) {
  return new ac(F(a));
}
function cc(a, b) {
  var c = Lb(a), c = Mb(0, c);
  return Ob(c, b);
}
function dc(a) {
  var b = 0, c = 1;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = Kb(31, c) + Tb(G(a)) | 0, a = I(a);
    } else {
      return cc(c, b);
    }
  }
}
var ec = cc(1, 0);
function fc(a) {
  var b = 0, c = 0;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = c + Tb(G(a)) | 0, a = I(a);
    } else {
      return cc(c, b);
    }
  }
}
var gc = cc(0, 0);
Ia["null"] = !0;
Ja["null"] = function() {
  return 0;
};
Date.prototype.n = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
kb.number = function(a, b) {
  return a === b;
};
Ha["function"] = !0;
cb["function"] = !0;
db["function"] = function() {
  return null;
};
lb._ = function(a) {
  return a[ea] || (a[ea] = ++ga);
};
function J(a) {
  return bb(a);
}
function hc(a, b) {
  var c = Ja(a);
  if (0 === c) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = E.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = E.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function ic(a, b, c) {
  var d = Ja(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = E.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function jc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.l ? b.l() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function mc(a, b, c) {
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
function nc(a, b, c, d) {
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
function oc(a) {
  return a ? a.h & 2 || a.tb ? !0 : a.h ? !1 : A(Ia, a) : A(Ia, a);
}
function pc(a) {
  return a ? a.h & 16 || a.mb ? !0 : a.h ? !1 : A(Na, a) : A(Na, a);
}
function qc(a, b) {
  this.c = a;
  this.i = b;
}
qc.prototype.Ya = function() {
  return this.i < this.c.length;
};
qc.prototype.next = function() {
  var a = this.c[this.i];
  this.i += 1;
  return a;
};
function Xb(a, b) {
  this.c = a;
  this.i = b;
  this.h = 166199550;
  this.p = 8192;
}
h = Xb.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.D = function(a, b) {
  var c = b + this.i;
  return c < this.c.length ? this.c[c] : null;
};
h.ka = function(a, b, c) {
  a = b + this.i;
  return a < this.c.length ? this.c[a] : c;
};
h.Ka = function() {
  return new qc(this.c, this.i);
};
h.ga = function() {
  return this.i + 1 < this.c.length ? new Xb(this.c, this.i + 1) : null;
};
h.da = function() {
  return this.c.length - this.i;
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return rc.b ? rc.b(this, b) : rc.call(null, this, b);
};
h.Z = function() {
  return Zb;
};
h.aa = function(a, b) {
  return nc(this.c, b, this.c[this.i], this.i + 1);
};
h.ba = function(a, b, c) {
  return nc(this.c, b, c, this.i);
};
h.ca = function() {
  return this.c[this.i];
};
h.ja = function() {
  return this.i + 1 < this.c.length ? new Xb(this.c, this.i + 1) : Zb;
};
h.W = function() {
  return this;
};
h.G = function(a, b) {
  return sc.b ? sc.b(b, this) : sc.call(null, b, this);
};
Xb.prototype[Fa] = function() {
  return bc(this);
};
function tc(a, b) {
  return b < a.length ? new Xb(a, b) : null;
}
function uc() {
  switch(arguments.length) {
    case 1:
      return tc(arguments[0], 0);
    case 2:
      return tc(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function vc(a) {
  for (;;) {
    var b = I(a);
    if (null != b) {
      a = b;
    } else {
      return G(a);
    }
  }
}
kb._ = function(a, b) {
  return a === b;
};
var wc = function wc() {
  switch(arguments.length) {
    case 0:
      return wc.l();
    case 1:
      return wc.a(arguments[0]);
    case 2:
      return wc.b(arguments[0], arguments[1]);
    default:
      return wc.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
wc.l = function() {
  return xc;
};
wc.a = function(a) {
  return a;
};
wc.b = function(a, b) {
  return null != a ? La(a, b) : La(Zb, b);
};
wc.k = function(a, b, c) {
  for (;;) {
    if (y(c)) {
      a = wc.b(a, b), b = G(c), c = I(c);
    } else {
      return wc.b(a, b);
    }
  }
};
wc.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return wc.k(b, a, c);
};
wc.u = 2;
function yc(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.tb)) {
      a = a.da(null);
    } else {
      if (Aa(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (A(Ia, a)) {
            a = Ja(a);
          } else {
            a: {
              a = F(a);
              for (var b = 0;;) {
                if (oc(a)) {
                  a = b + Ja(a);
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
function zc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return F(a) ? G(a) : c;
    }
    if (pc(a)) {
      return E.f(a, b, c);
    }
    if (F(a)) {
      var d = I(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function Ac() {
  var a = Bc, b = Cc(yc(Bc));
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number");
  }
  if (null == a) {
    return a;
  }
  if (a && (a.h & 16 || a.mb)) {
    return a.D(null, b);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (A(Na, a)) {
    return E.b(a, b);
  }
  if (a ? a.h & 64 || a.Oa || (a.h ? 0 : A(Oa, a)) : A(Oa, a)) {
    a: {
      for (;;) {
        if (null == a) {
          throw Error("Index out of bounds");
        }
        if (0 === b) {
          if (F(a)) {
            a = G(a);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (pc(a)) {
          a = E.b(a, b);
          break a;
        }
        if (F(a)) {
          a = I(a), --b;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return a;
  }
  throw Error([D("nth not supported on this type "), D(Da(null == a ? null : a.constructor))].join(""));
}
function K(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.h & 16 || a.mb)) {
    return a.ka(null, b, null);
  }
  if (Aa(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (A(Na, a)) {
    return E.b(a, b);
  }
  if (a ? a.h & 64 || a.Oa || (a.h ? 0 : A(Oa, a)) : A(Oa, a)) {
    return zc(a, b);
  }
  throw Error([D("nth not supported on this type "), D(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.h & 256 || a.nb) ? a.$(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : A(Sa, a) ? Ta.b(a, b) : null;
}
function Dc(a, b, c) {
  return null != a ? a && (a.h & 256 || a.nb) ? a.C(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : A(Sa, a) ? Ta.f(a, b, c) : c : c;
}
var M = function M() {
  switch(arguments.length) {
    case 3:
      return M.f(arguments[0], arguments[1], arguments[2]);
    default:
      return M.k(arguments[0], arguments[1], arguments[2], new Xb(Array.prototype.slice.call(arguments, 3), 0));
  }
};
M.f = function(a, b, c) {
  return null != a ? Ua(a, b, c) : Ec([b], [c]);
};
M.k = function(a, b, c, d) {
  for (;;) {
    if (a = M.f(a, b, c), y(d)) {
      b = G(d), c = G(I(d)), d = I(I(d));
    } else {
      return a;
    }
  }
};
M.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  var d = I(c), c = G(d), d = I(d);
  return M.k(b, a, c, d);
};
M.u = 3;
var Fc = function Fc() {
  switch(arguments.length) {
    case 1:
      return Fc.a(arguments[0]);
    case 2:
      return Fc.b(arguments[0], arguments[1]);
    default:
      return Fc.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Fc.a = function(a) {
  return a;
};
Fc.b = function(a, b) {
  return null == a ? null : Wa(a, b);
};
Fc.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Fc.b(a, b);
    if (y(c)) {
      b = G(c), c = I(c);
    } else {
      return a;
    }
  }
};
Fc.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return Fc.k(b, a, c);
};
Fc.u = 2;
function Gc(a) {
  var b = "function" == v(a);
  return y(b) ? b : a ? y(y(null) ? null : a.sb) ? !0 : a.Tb ? !1 : A(Ha, a) : A(Ha, a);
}
function Hc(a, b) {
  this.d = a;
  this.j = b;
  this.h = 393217;
  this.p = 0;
}
h = Hc.prototype;
h.F = function() {
  return this.j;
};
h.X = function(a, b) {
  return new Hc(this.d, b);
};
h.sb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H, T) {
    a = this.d;
    return Ic.Ja ? Ic.Ja(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H, T) : Ic.call(null, a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H, T);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H) {
    a = this;
    return a.d.R ? a.d.R(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x, H);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x) {
    a = this;
    return a.d.Q ? a.d.Q(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z, x);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z) {
    a = this;
    return a.d.P ? a.d.P(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, z);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C) {
    a = this;
    return a.d.O ? a.d.O(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w) {
    a = this;
    return a.d.N ? a.d.N(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u) {
    a = this;
    return a.d.M ? a.d.M(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t) {
    a = this;
    return a.d.L ? a.d.L(b, c, d, e, f, g, k, l, m, n, q, p, r, t) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, q, p, r) {
    a = this;
    return a.d.K ? a.d.K(b, c, d, e, f, g, k, l, m, n, q, p, r) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, q, p) {
    a = this;
    return a.d.J ? a.d.J(b, c, d, e, f, g, k, l, m, n, q, p) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, q) {
    a = this;
    return a.d.I ? a.d.I(b, c, d, e, f, g, k, l, m, n, q) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    return a.d.H ? a.d.H(b, c, d, e, f, g, k, l, m, n) : a.d.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    return a.d.U ? a.d.U(b, c, d, e, f, g, k, l, m) : a.d.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    return a.d.T ? a.d.T(b, c, d, e, f, g, k, l) : a.d.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    return a.d.S ? a.d.S(b, c, d, e, f, g, k) : a.d.call(null, b, c, d, e, f, g, k);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    return a.d.B ? a.d.B(b, c, d, e, f, g) : a.d.call(null, b, c, d, e, f, g);
  }
  function w(a, b, c, d, e, f) {
    a = this;
    return a.d.r ? a.d.r(b, c, d, e, f) : a.d.call(null, b, c, d, e, f);
  }
  function z(a, b, c, d, e) {
    a = this;
    return a.d.o ? a.d.o(b, c, d, e) : a.d.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    return a.d.f ? a.d.f(b, c, d) : a.d.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    return a.d.b ? a.d.b(b, c) : a.d.call(null, b, c);
  }
  function T(a, b) {
    a = this;
    return a.d.a ? a.d.a(b) : a.d.call(null, b);
  }
  function ha(a) {
    a = this;
    return a.d.l ? a.d.l() : a.d.call(null);
  }
  var x = null, x = function(ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb, Nb, lc, id, Ke) {
    switch(arguments.length) {
      case 1:
        return ha.call(this, ya);
      case 2:
        return T.call(this, ya, S);
      case 3:
        return H.call(this, ya, S, V);
      case 4:
        return C.call(this, ya, S, V, W);
      case 5:
        return z.call(this, ya, S, V, W, Z);
      case 6:
        return w.call(this, ya, S, V, W, Z, aa);
      case 7:
        return u.call(this, ya, S, V, W, Z, aa, ba);
      case 8:
        return t.call(this, ya, S, V, W, Z, aa, ba, fa);
      case 9:
        return r.call(this, ya, S, V, W, Z, aa, ba, fa, la);
      case 10:
        return q.call(this, ya, S, V, W, Z, aa, ba, fa, la, na);
      case 11:
        return p.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa);
      case 12:
        return n.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa);
      case 13:
        return m.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca);
      case 14:
        return l.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea);
      case 15:
        return k.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma);
      case 16:
        return g.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x);
      case 17:
        return f.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb);
      case 18:
        return e.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb);
      case 19:
        return d.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb, Nb);
      case 20:
        return c.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb, Nb, lc);
      case 21:
        return b.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb, Nb, lc, id);
      case 22:
        return a.call(this, ya, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, x, fb, tb, Nb, lc, id, Ke);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.a = ha;
  x.b = T;
  x.f = H;
  x.o = C;
  x.r = z;
  x.B = w;
  x.S = u;
  x.T = t;
  x.U = r;
  x.H = q;
  x.I = p;
  x.J = n;
  x.K = m;
  x.L = l;
  x.M = k;
  x.N = g;
  x.O = f;
  x.P = e;
  x.Q = d;
  x.R = c;
  x.gb = b;
  x.Ja = a;
  return x;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.l = function() {
  return this.d.l ? this.d.l() : this.d.call(null);
};
h.a = function(a) {
  return this.d.a ? this.d.a(a) : this.d.call(null, a);
};
h.b = function(a, b) {
  return this.d.b ? this.d.b(a, b) : this.d.call(null, a, b);
};
h.f = function(a, b, c) {
  return this.d.f ? this.d.f(a, b, c) : this.d.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  return this.d.o ? this.d.o(a, b, c, d) : this.d.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  return this.d.r ? this.d.r(a, b, c, d, e) : this.d.call(null, a, b, c, d, e);
};
h.B = function(a, b, c, d, e, f) {
  return this.d.B ? this.d.B(a, b, c, d, e, f) : this.d.call(null, a, b, c, d, e, f);
};
h.S = function(a, b, c, d, e, f, g) {
  return this.d.S ? this.d.S(a, b, c, d, e, f, g) : this.d.call(null, a, b, c, d, e, f, g);
};
h.T = function(a, b, c, d, e, f, g, k) {
  return this.d.T ? this.d.T(a, b, c, d, e, f, g, k) : this.d.call(null, a, b, c, d, e, f, g, k);
};
h.U = function(a, b, c, d, e, f, g, k, l) {
  return this.d.U ? this.d.U(a, b, c, d, e, f, g, k, l) : this.d.call(null, a, b, c, d, e, f, g, k, l);
};
h.H = function(a, b, c, d, e, f, g, k, l, m) {
  return this.d.H ? this.d.H(a, b, c, d, e, f, g, k, l, m) : this.d.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.I = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.d.I ? this.d.I(a, b, c, d, e, f, g, k, l, m, n) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.J = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.d.J ? this.d.J(a, b, c, d, e, f, g, k, l, m, n, p) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.K = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.d.K ? this.d.K(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.L = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  return this.d.L ? this.d.L(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.M = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  return this.d.M ? this.d.M(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.N = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  return this.d.N ? this.d.N(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.O = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) {
  return this.d.O ? this.d.O(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
};
h.P = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) {
  return this.d.P ? this.d.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) {
  return this.d.Q ? this.d.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) {
  return this.d.R ? this.d.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H);
};
h.gb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T) {
  var ha = this.d;
  return Ic.Ja ? Ic.Ja(ha, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T) : Ic.call(null, ha, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T);
};
function Jc(a, b) {
  return Gc(a) && !(a ? a.h & 262144 || a.Rb || (a.h ? 0 : A(eb, a)) : A(eb, a)) ? new Hc(a, b) : null == a ? null : gb(a, b);
}
function Kc(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.yb || (a.h ? 0 : A(cb, a)) : A(cb, a) : b) ? db(a) : null;
}
function Lc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.wb ? !0 : a.h ? !1 : A(Va, a) : A(Va, a);
}
function Mc(a) {
  return a ? a.h & 16384 || a.Qb ? !0 : a.h ? !1 : A($a, a) : A($a, a);
}
function Nc(a) {
  return a ? a.p & 512 || a.Mb ? !0 : !1 : !1;
}
function Oc(a) {
  var b = [];
  ja(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Pc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Qc = {};
function Rc(a) {
  return null == a ? !1 : a ? a.h & 64 || a.Oa ? !0 : a.h ? !1 : A(Oa, a) : A(Oa, a);
}
function Sc(a) {
  return y(a) ? !0 : !1;
}
function Tc(a, b) {
  return Dc(a, b, Qc) === Qc ? !1 : !0;
}
function Uc(a, b) {
  var c = F(b);
  if (c) {
    var d = G(c), c = I(c);
    return Vc ? Vc(a, d, c) : Wc.call(null, a, d, c);
  }
  return a.l ? a.l() : a.call(null);
}
function Xc(a, b, c) {
  for (c = F(c);;) {
    if (c) {
      var d = G(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = I(c);
    } else {
      return b;
    }
  }
}
function Wc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.h & 524288 || b.Ab) ? b.aa(null, a) : Aa(b) ? jc(b, a) : "string" === typeof b ? jc(b, a) : A(hb, b) ? ib.b(b, a) : Uc(a, b);
    case 3:
      return Vc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Vc(a, b, c) {
  return c && (c.h & 524288 || c.Ab) ? c.ba(null, a, b) : Aa(c) ? mc(c, a, b) : "string" === typeof c ? mc(c, a, b) : A(hb, c) ? ib.f(c, a, b) : Xc(a, b, c);
}
function Yc(a) {
  return a;
}
function Zc(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = Vc(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var $c = function $c() {
  switch(arguments.length) {
    case 0:
      return $c.l();
    case 1:
      return $c.a(arguments[0]);
    case 2:
      return $c.b(arguments[0], arguments[1]);
    default:
      return $c.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
$c.l = function() {
  return 0;
};
$c.a = function(a) {
  return a;
};
$c.b = function(a, b) {
  return a + b;
};
$c.k = function(a, b, c) {
  return Vc($c, a + b, c);
};
$c.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return $c.k(b, a, c);
};
$c.u = 2;
function ad(a) {
  return a - 1;
}
function bd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function cd(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function dd(a) {
  var b = 1;
  for (a = F(a);;) {
    if (a && 0 < b) {
      --b, a = I(a);
    } else {
      return a;
    }
  }
}
var D = function D() {
  switch(arguments.length) {
    case 0:
      return D.l();
    case 1:
      return D.a(arguments[0]);
    default:
      return D.k(arguments[0], new Xb(Array.prototype.slice.call(arguments, 1), 0));
  }
};
D.l = function() {
  return "";
};
D.a = function(a) {
  return null == a ? "" : ia(a);
};
D.k = function(a, b) {
  for (var c = new ka("" + D(a)), d = b;;) {
    if (y(d)) {
      c = c.append("" + D(G(d))), d = I(d);
    } else {
      return c.toString();
    }
  }
};
D.t = function(a) {
  var b = G(a);
  a = I(a);
  return D.k(b, a);
};
D.u = 1;
function rc(a, b) {
  var c;
  if (b ? b.h & 16777216 || b.Pb || (b.h ? 0 : A(ob, b)) : A(ob, b)) {
    if (oc(a) && oc(b) && yc(a) !== yc(b)) {
      c = !1;
    } else {
      a: {
        c = F(a);
        for (var d = F(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && $b.b(G(c), G(d))) {
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
  return Sc(c);
}
function ed(a, b, c, d, e) {
  this.j = a;
  this.first = b;
  this.va = c;
  this.count = d;
  this.m = e;
  this.h = 65937646;
  this.p = 8192;
}
h = ed.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  return 1 === this.count ? null : this.va;
};
h.da = function() {
  return this.count;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return gb(Zb, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return this.first;
};
h.ja = function() {
  return 1 === this.count ? Zb : this.va;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new ed(b, this.first, this.va, this.count, this.m);
};
h.G = function(a, b) {
  return new ed(this.j, b, this, this.count + 1, null);
};
ed.prototype[Fa] = function() {
  return bc(this);
};
function fd(a) {
  this.j = a;
  this.h = 65937614;
  this.p = 8192;
}
h = fd.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  return null;
};
h.da = function() {
  return 0;
};
h.w = function() {
  return ec;
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return this;
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return null;
};
h.ja = function() {
  return Zb;
};
h.W = function() {
  return null;
};
h.X = function(a, b) {
  return new fd(b);
};
h.G = function(a, b) {
  return new ed(this.j, b, null, 1, null);
};
var Zb = new fd(null);
fd.prototype[Fa] = function() {
  return bc(this);
};
var gd = function gd() {
  return gd.k(0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
gd.k = function(a) {
  var b;
  if (a instanceof Xb && 0 === a.i) {
    b = a.c;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.ca(null)), a = a.ga(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = Zb;;) {
    if (0 < a) {
      var d = a - 1, c = c.G(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
gd.u = 0;
gd.t = function(a) {
  return gd.k(F(a));
};
function hd(a, b, c, d) {
  this.j = a;
  this.first = b;
  this.va = c;
  this.m = d;
  this.h = 65929452;
  this.p = 8192;
}
h = hd.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  return null == this.va ? null : F(this.va);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return this.first;
};
h.ja = function() {
  return null == this.va ? Zb : this.va;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new hd(b, this.first, this.va, this.m);
};
h.G = function(a, b) {
  return new hd(null, b, this, this.m);
};
hd.prototype[Fa] = function() {
  return bc(this);
};
function sc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.Oa)) ? new hd(null, a, b, null) : new hd(null, a, F(b), null);
}
function N(a, b, c, d) {
  this.Ga = a;
  this.name = b;
  this.wa = c;
  this.Ca = d;
  this.h = 2153775105;
  this.p = 4096;
}
h = N.prototype;
h.toString = function() {
  return[D(":"), D(this.wa)].join("");
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.n = function(a, b) {
  return b instanceof N ? this.wa === b.wa : !1;
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
  a.b = function(a, c) {
    return L(c, this);
  };
  a.f = function(a, c, d) {
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
h.b = function(a, b) {
  return Dc(a, this, b);
};
h.w = function() {
  var a = this.Ca;
  return null != a ? a : this.Ca = a = Ub(Pb(this.name), Sb(this.Ga)) + 2654435769 | 0;
};
h.Ma = function() {
  return this.name;
};
h.Na = function() {
  return this.Ga;
};
h.A = function(a, b) {
  return pb(b, [D(":"), D(this.wa)].join(""));
};
var jd = function jd() {
  switch(arguments.length) {
    case 1:
      return jd.a(arguments[0]);
    case 2:
      return jd.b(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
jd.a = function(a) {
  if (a instanceof N) {
    return a;
  }
  if (a instanceof Vb) {
    var b;
    if (a && (a.p & 4096 || a.zb)) {
      b = a.Na(null);
    } else {
      throw Error([D("Doesn't support namespace: "), D(a)].join(""));
    }
    return new N(b, kd.a ? kd.a(a) : kd.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new N(b[0], b[1], a, null) : new N(null, b[0], a, null)) : null;
};
jd.b = function(a, b) {
  return new N(a, b, [D(y(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null);
};
jd.u = 2;
function ld(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.q = c;
  this.m = d;
  this.h = 32374988;
  this.p = 0;
}
h = ld.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
function md(a) {
  null != a.Ea && (a.q = a.Ea.l ? a.Ea.l() : a.Ea.call(null), a.Ea = null);
  return a.q;
}
h.F = function() {
  return this.j;
};
h.ga = function() {
  nb(this);
  return null == this.q ? null : I(this.q);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  nb(this);
  return null == this.q ? null : G(this.q);
};
h.ja = function() {
  nb(this);
  return null != this.q ? Yb(this.q) : Zb;
};
h.W = function() {
  md(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof ld) {
      a = md(a);
    } else {
      return this.q = a, F(this.q);
    }
  }
};
h.X = function(a, b) {
  return new ld(b, this.Ea, this.q, this.m);
};
h.G = function(a, b) {
  return sc(b, this);
};
ld.prototype[Fa] = function() {
  return bc(this);
};
function nd(a, b) {
  this.bb = a;
  this.end = b;
  this.h = 2;
  this.p = 0;
}
nd.prototype.add = function(a) {
  this.bb[this.end] = a;
  return this.end += 1;
};
nd.prototype.pa = function() {
  var a = new od(this.bb, 0, this.end);
  this.bb = null;
  return a;
};
nd.prototype.da = function() {
  return this.end;
};
function od(a, b, c) {
  this.c = a;
  this.Y = b;
  this.end = c;
  this.h = 524306;
  this.p = 0;
}
h = od.prototype;
h.da = function() {
  return this.end - this.Y;
};
h.D = function(a, b) {
  return this.c[this.Y + b];
};
h.ka = function(a, b, c) {
  return 0 <= b && b < this.end - this.Y ? this.c[this.Y + b] : c;
};
h.lb = function() {
  if (this.Y === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new od(this.c, this.Y + 1, this.end);
};
h.aa = function(a, b) {
  return nc(this.c, b, this.c[this.Y], this.Y + 1);
};
h.ba = function(a, b, c) {
  return nc(this.c, b, c, this.Y);
};
function pd(a, b, c, d) {
  this.pa = a;
  this.qa = b;
  this.j = c;
  this.m = d;
  this.h = 31850732;
  this.p = 1536;
}
h = pd.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  if (1 < Ja(this.pa)) {
    return new pd(zb(this.pa), this.qa, this.j, null);
  }
  var a = nb(this.qa);
  return null == a ? null : a;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.ca = function() {
  return E.b(this.pa, 0);
};
h.ja = function() {
  return 1 < Ja(this.pa) ? new pd(zb(this.pa), this.qa, this.j, null) : null == this.qa ? Zb : this.qa;
};
h.W = function() {
  return this;
};
h.eb = function() {
  return this.pa;
};
h.fb = function() {
  return null == this.qa ? Zb : this.qa;
};
h.X = function(a, b) {
  return new pd(this.pa, this.qa, b, this.m);
};
h.G = function(a, b) {
  return sc(b, this);
};
h.cb = function() {
  return null == this.qa ? null : this.qa;
};
pd.prototype[Fa] = function() {
  return bc(this);
};
function qd(a, b) {
  return 0 === Ja(a) ? b : new pd(a, b, null, null);
}
function rd(a, b) {
  a.add(b);
}
function sd(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = I(a);
    } else {
      return b;
    }
  }
}
function td(a, b) {
  if (oc(a)) {
    return yc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F(c)) {
      c = I(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var ud = function ud(b) {
  return null == b ? null : null == I(b) ? F(G(b)) : sc(G(b), ud(I(b)));
}, vd = function vd() {
  switch(arguments.length) {
    case 0:
      return vd.l();
    case 1:
      return vd.a(arguments[0]);
    case 2:
      return vd.b(arguments[0], arguments[1]);
    default:
      return vd.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
vd.l = function() {
  return new ld(null, function() {
    return null;
  }, null, null);
};
vd.a = function(a) {
  return new ld(null, function() {
    return a;
  }, null, null);
};
vd.b = function(a, b) {
  return new ld(null, function() {
    var c = F(a);
    return c ? Nc(c) ? qd(Ab(c), vd.b(Bb(c), b)) : sc(G(c), vd.b(Yb(c), b)) : b;
  }, null, null);
};
vd.k = function(a, b, c) {
  return function e(a, b) {
    return new ld(null, function() {
      var c = F(a);
      return c ? Nc(c) ? qd(Ab(c), e(Bb(c), b)) : sc(G(c), e(Yb(c), b)) : y(b) ? e(G(b), I(b)) : null;
    }, null, null);
  }(vd.b(a, b), c);
};
vd.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return vd.k(b, a, c);
};
vd.u = 2;
var wd = function wd() {
  switch(arguments.length) {
    case 0:
      return wd.l();
    case 1:
      return wd.a(arguments[0]);
    case 2:
      return wd.b(arguments[0], arguments[1]);
    default:
      return wd.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
wd.l = function() {
  return ub(xc);
};
wd.a = function(a) {
  return a;
};
wd.b = function(a, b) {
  return vb(a, b);
};
wd.k = function(a, b, c) {
  for (;;) {
    if (a = vb(a, b), y(c)) {
      b = G(c), c = I(c);
    } else {
      return a;
    }
  }
};
wd.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  c = I(c);
  return wd.k(b, a, c);
};
wd.u = 2;
function xd(a, b, c) {
  var d = F(c);
  if (0 === b) {
    return a.l ? a.l() : a.call(null);
  }
  c = Pa(d);
  var e = Qa(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Pa(e), f = Qa(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Pa(f), g = Qa(f);
  if (3 === b) {
    return a.f ? a.f(c, d, e) : a.f ? a.f(c, d, e) : a.call(null, c, d, e);
  }
  var f = Pa(g), k = Qa(g);
  if (4 === b) {
    return a.o ? a.o(c, d, e, f) : a.o ? a.o(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Pa(k), l = Qa(k);
  if (5 === b) {
    return a.r ? a.r(c, d, e, f, g) : a.r ? a.r(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Pa(l), m = Qa(l);
  if (6 === b) {
    return a.B ? a.B(c, d, e, f, g, k) : a.B ? a.B(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Pa(m), n = Qa(m);
  if (7 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l) : a.S ? a.S(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Pa(n), p = Qa(n);
  if (8 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, m) : a.T ? a.T(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Pa(p), q = Qa(p);
  if (9 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, m, n) : a.U ? a.U(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Pa(q), r = Qa(q);
  if (10 === b) {
    return a.H ? a.H(c, d, e, f, g, k, l, m, n, p) : a.H ? a.H(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = Pa(r), t = Qa(r);
  if (11 === b) {
    return a.I ? a.I(c, d, e, f, g, k, l, m, n, p, q) : a.I ? a.I(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = Pa(t), u = Qa(t);
  if (12 === b) {
    return a.J ? a.J(c, d, e, f, g, k, l, m, n, p, q, r) : a.J ? a.J(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = Pa(u), w = Qa(u);
  if (13 === b) {
    return a.K ? a.K(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.K ? a.K(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var u = Pa(w), z = Qa(w);
  if (14 === b) {
    return a.L ? a.L(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.L ? a.L(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  var w = Pa(z), C = Qa(z);
  if (15 === b) {
    return a.M ? a.M(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.M ? a.M(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
  }
  var z = Pa(C), H = Qa(C);
  if (16 === b) {
    return a.N ? a.N(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) : a.N ? a.N(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z);
  }
  var C = Pa(H), T = Qa(H);
  if (17 === b) {
    return a.O ? a.O(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) : a.O ? a.O(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C);
  }
  var H = Pa(T), ha = Qa(T);
  if (18 === b) {
    return a.P ? a.P(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) : a.P ? a.P(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H);
  }
  T = Pa(ha);
  ha = Qa(ha);
  if (19 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T) : a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T);
  }
  var x = Pa(ha);
  Qa(ha);
  if (20 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T, x) : a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T, x);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Ic() {
  switch(arguments.length) {
    case 2:
      return yd(arguments[0], arguments[1]);
    case 3:
      return zd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = sc(arguments[1], sc(arguments[2], arguments[3])), c = a.u;
      if (a.t) {
        var d = td(b, c + 1);
        a = d <= c ? xd(a, d, b) : a.t(b);
      } else {
        a = a.apply(a, sd(b));
      }
      return a;
    case 5:
      return Ad(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Bd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new Xb(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function yd(a, b) {
  var c = a.u;
  if (a.t) {
    var d = td(b, c + 1);
    return d <= c ? xd(a, d, b) : a.t(b);
  }
  return a.apply(a, sd(b));
}
function zd(a, b, c) {
  b = sc(b, c);
  c = a.u;
  if (a.t) {
    var d = td(b, c + 1);
    return d <= c ? xd(a, d, b) : a.t(b);
  }
  return a.apply(a, sd(b));
}
function Ad(a, b, c, d, e) {
  b = sc(b, sc(c, sc(d, e)));
  c = a.u;
  return a.t ? (d = td(b, c + 1), d <= c ? xd(a, d, b) : a.t(b)) : a.apply(a, sd(b));
}
function Bd(a, b, c, d, e, f) {
  b = sc(b, sc(c, sc(d, sc(e, ud(f)))));
  c = a.u;
  return a.t ? (d = td(b, c + 1), d <= c ? xd(a, d, b) : a.t(b)) : a.apply(a, sd(b));
}
function Cd(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (y(c)) {
      c = a;
      var d = I(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Dd(a, b) {
  return function d(b, f) {
    return new ld(null, function() {
      var g = F(f);
      if (g) {
        if (Nc(g)) {
          for (var k = Ab(g), l = yc(k), m = new nd(Array(l), 0), n = 0;;) {
            if (n < l) {
              rd(m, function() {
                var d = b + n, f = E.b(k, n);
                return a.b ? a.b(d, f) : a.call(null, d, f);
              }()), n += 1;
            } else {
              break;
            }
          }
          return qd(m.pa(), d(b + l, Bb(g)));
        }
        return sc(function() {
          var d = G(g);
          return a.b ? a.b(b, d) : a.call(null, b, d);
        }(), d(b + 1, Yb(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Ed(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Lb = c;
  this.rb = d;
  this.p = 16386;
  this.h = 6455296;
}
h = Ed.prototype;
h.equiv = function(a) {
  return this.n(null, a);
};
h.n = function(a, b) {
  return this === b;
};
h.ub = function() {
  return this.state;
};
h.F = function() {
  return this.j;
};
h.pb = function(a, b, c) {
  for (var d = F(this.rb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.D(null, g);
      var k = K(a, 0);
      a = K(a, 1);
      var l = b, m = c;
      a.o ? a.o(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = F(d)) {
        d = a, Nc(d) ? (e = Ab(d), d = Bb(d), a = e, f = yc(e), e = a) : (a = G(d), k = K(a, 0), a = K(a, 1), e = k, f = b, g = c, a.o ? a.o(e, this, f, g) : a.call(null, e, this, f, g), d = I(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.w = function() {
  return this[ea] || (this[ea] = ++ga);
};
function Fd() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new Xb(Array.prototype.slice.call(arguments, 1), 0), c = Rc(b) ? yd(Gd, b) : b, b = L(c, va), c = L(c, Hd);
      return new Ed(a, b, c, null);
  }
}
function O(a) {
  return new Ed(a, null, null, null);
}
function Id(a, b) {
  if (a instanceof Ed) {
    var c = a.Lb;
    if (null != c && !y(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(function() {
        var a = gd(new Vb(null, "validate", "validate", 1439230700, null), new Vb(null, "new-value", "new-value", -1567397401, null));
        return Jd.a ? Jd.a(a) : Jd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && sb(a, c, b);
    return b;
  }
  return Fb(a, b);
}
var Kd = function Kd() {
  switch(arguments.length) {
    case 2:
      return Kd.b(arguments[0], arguments[1]);
    case 3:
      return Kd.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Kd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Kd.k(arguments[0], arguments[1], arguments[2], arguments[3], new Xb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Kd.b = function(a, b) {
  var c;
  a instanceof Ed ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Id(a, c)) : c = Gb.b(a, b);
  return c;
};
Kd.f = function(a, b, c) {
  if (a instanceof Ed) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = Id(a, b);
  } else {
    a = Gb.f(a, b, c);
  }
  return a;
};
Kd.o = function(a, b, c, d) {
  if (a instanceof Ed) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = Id(a, b);
  } else {
    a = Gb.o(a, b, c, d);
  }
  return a;
};
Kd.k = function(a, b, c, d, e) {
  return a instanceof Ed ? Id(a, Ad(b, a.state, c, d, e)) : Gb.r(a, b, c, d, e);
};
Kd.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  var d = I(c), c = G(d), e = I(d), d = G(e), e = I(e);
  return Kd.k(b, a, c, d, e);
};
Kd.u = 4;
var Ld = function Ld() {
  switch(arguments.length) {
    case 1:
      return Ld.a(arguments[0]);
    case 2:
      return Ld.b(arguments[0], arguments[1]);
    case 3:
      return Ld.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Ld.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Ld.k(arguments[0], arguments[1], arguments[2], arguments[3], new Xb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Ld.a = function(a) {
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
        return b.l ? b.l() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new Xb(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = zd(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.u = 2;
        c.t = function(a) {
          var b = G(a);
          a = I(a);
          var c = G(a);
          a = Yb(a);
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
              n = new Xb(p, 0);
            }
            return g.k(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.u = 2;
      f.t = g.t;
      f.l = e;
      f.a = d;
      f.b = c;
      f.k = g.k;
      return f;
    }();
  };
};
Ld.b = function(a, b) {
  return new ld(null, function() {
    var c = F(b);
    if (c) {
      if (Nc(c)) {
        for (var d = Ab(c), e = yc(d), f = new nd(Array(e), 0), g = 0;;) {
          if (g < e) {
            rd(f, function() {
              var b = E.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return qd(f.pa(), Ld.b(a, Bb(c)));
      }
      return sc(function() {
        var b = G(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Ld.b(a, Yb(c)));
    }
    return null;
  }, null, null);
};
Ld.f = function(a, b, c) {
  return new ld(null, function() {
    var d = F(b), e = F(c);
    if (d && e) {
      var f = sc, g;
      g = G(d);
      var k = G(e);
      g = a.b ? a.b(g, k) : a.call(null, g, k);
      d = f(g, Ld.f(a, Yb(d), Yb(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Ld.o = function(a, b, c, d) {
  return new ld(null, function() {
    var e = F(b), f = F(c), g = F(d);
    if (e && f && g) {
      var k = sc, l;
      l = G(e);
      var m = G(f), n = G(g);
      l = a.f ? a.f(l, m, n) : a.call(null, l, m, n);
      e = k(l, Ld.o(a, Yb(e), Yb(f), Yb(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Ld.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new ld(null, function() {
      var b = Ld.b(F, a);
      return Cd(Yc, b) ? sc(Ld.b(G, b), k(Ld.b(Yb, b))) : null;
    }, null, null);
  };
  return Ld.b(function() {
    return function(b) {
      return yd(a, b);
    };
  }(f), f(wc.k(e, d, uc([c, b], 0))));
};
Ld.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  var d = I(c), c = G(d), e = I(d), d = G(e), e = I(e);
  return Ld.k(b, a, c, d, e);
};
Ld.u = 4;
function Md(a, b) {
  return yd(vd, zd(Ld, a, b));
}
var Nd = function Nd() {
  switch(arguments.length) {
    case 2:
      return Nd.b(arguments[0], arguments[1]);
    case 3:
      return Nd.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Nd.b = function(a, b) {
  var c;
  null != a ? a && (a.p & 4 || a.vb) ? (c = Vc(vb, ub(a), b), c = wb(c), c = Jc(c, Kc(a))) : c = Vc(La, a, b) : c = Vc(wc, Zb, b);
  return c;
};
Nd.f = function(a, b, c) {
  a && (a.p & 4 || a.vb) ? (b = Zc(b, wd, ub(a), c), b = wb(b), a = Jc(b, Kc(a))) : a = Zc(b, wc, a, c);
  return a;
};
Nd.u = 3;
function Od(a) {
  return Pd(a, new P(null, 2, 5, Q, [Qd, Rd], null));
}
function Pd(a, b) {
  for (var c = Qc, d = a, e = F(b);;) {
    if (e) {
      var f = d;
      if (f ? f.h & 256 || f.nb || (f.h ? 0 : A(Sa, f)) : A(Sa, f)) {
        d = Dc(d, G(e), c);
        if (c === d) {
          return null;
        }
        e = I(e);
      } else {
        return null;
      }
    } else {
      return d;
    }
  }
}
var Sd = function Sd(b, c, d) {
  var e = K(c, 0);
  c = dd(c);
  return y(c) ? M.f(b, e, Sd(L(b, e), c, d)) : M.f(b, e, d);
}, Td = function Td() {
  switch(arguments.length) {
    case 3:
      return Td.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Td.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Td.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Td.B(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Td.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new Xb(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Td.f = function(a, b, c) {
  var d = K(b, 0);
  b = dd(b);
  return y(b) ? M.f(a, d, Td.f(L(a, d), b, c)) : M.f(a, d, function() {
    var b = L(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
Td.o = function(a, b, c, d) {
  var e = K(b, 0);
  b = dd(b);
  return y(b) ? M.f(a, e, Td.o(L(a, e), b, c, d)) : M.f(a, e, function() {
    var b = L(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
Td.r = function(a, b, c, d, e) {
  var f = K(b, 0);
  b = dd(b);
  return y(b) ? M.f(a, f, Td.r(L(a, f), b, c, d, e)) : M.f(a, f, function() {
    var b = L(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
Td.B = function(a, b, c, d, e, f) {
  var g = K(b, 0);
  b = dd(b);
  return y(b) ? M.f(a, g, Td.B(L(a, g), b, c, d, e, f)) : M.f(a, g, function() {
    var b = L(a, g);
    return c.o ? c.o(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Td.k = function(a, b, c, d, e, f, g) {
  var k = K(b, 0);
  b = dd(b);
  return y(b) ? M.f(a, k, Bd(Td, L(a, k), b, c, d, uc([e, f, g], 0))) : M.f(a, k, Bd(c, L(a, k), d, e, f, uc([g], 0)));
};
Td.t = function(a) {
  var b = G(a), c = I(a);
  a = G(c);
  var d = I(c), c = G(d), e = I(d), d = G(e), f = I(e), e = G(f), g = I(f), f = G(g), g = I(g);
  return Td.k(b, a, c, d, e, f, g);
};
Td.u = 6;
function Ud(a) {
  var b = Vd;
  return M.f(a, b, function() {
    var c = L(a, b);
    return ad.a ? ad.a(c) : ad.call(null, c);
  }());
}
function Wd(a, b, c, d) {
  return M.f(a, b, function() {
    var e = L(a, b);
    return c.b ? c.b(e, d) : c.call(null, e, d);
  }());
}
function Xd(a, b, c, d, e) {
  return M.f(a, b, function() {
    var f = L(a, b);
    return c.f ? c.f(f, d, e) : c.call(null, f, d, e);
  }());
}
function Yd(a, b) {
  this.s = a;
  this.c = b;
}
function Zd(a) {
  return new Yd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function $d(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ae(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Zd(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var be = function be(b, c, d, e) {
  var f = new Yd(d.s, Ga(d.c)), g = b.g - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? be(b, c - 5, d, e) : ae(null, c - 5, e), f.c[g] = b);
  return f;
};
function ce(a, b) {
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
}
function de(a, b) {
  if (b >= $d(a)) {
    return a.ia;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function ee(a, b) {
  return 0 <= b && b < a.g ? de(a, b) : ce(b, a.g);
}
var fe = function fe(b, c, d, e, f) {
  var g = new Yd(d.s, Ga(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = fe(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
};
function ge(a, b, c, d, e, f) {
  this.i = a;
  this.ab = b;
  this.c = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
ge.prototype.Ya = function() {
  return this.i < this.end;
};
ge.prototype.next = function() {
  32 === this.i - this.ab && (this.c = de(this.ra, this.i), this.ab += 32);
  var a = this.c[this.i & 31];
  this.i += 1;
  return a;
};
function P(a, b, c, d, e, f) {
  this.j = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.ia = e;
  this.m = f;
  this.h = 167668511;
  this.p = 8196;
}
h = P.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? E.f(this, b, c) : c;
};
h.La = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.g) {
      var e = de(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, k = e[f], d = b.f ? b.f(d, g, k) : b.call(null, d, g, k), f = f + 1
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
h.D = function(a, b) {
  return ee(this, b)[b & 31];
};
h.ka = function(a, b, c) {
  return 0 <= b && b < this.g ? de(this, b)[b & 31] : c;
};
h.kb = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return $d(this) <= b ? (a = Ga(this.ia), a[b & 31] = c, new P(this.j, this.g, this.shift, this.root, a, null)) : new P(this.j, this.g, this.shift, fe(this, this.shift, this.root, b, c), this.ia, null);
  }
  if (b === this.g) {
    return La(this, c);
  }
  throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.g), D("]")].join(""));
};
h.Ka = function() {
  var a = this.g;
  return new ge(0, 0, 0 < yc(this) ? de(this, 0) : null, this, 0, a);
};
h.F = function() {
  return this.j;
};
h.da = function() {
  return this.g;
};
h.ib = function() {
  return E.b(this, 0);
};
h.jb = function() {
  return E.b(this, 1);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  if (b instanceof P) {
    if (this.g === yc(b)) {
      for (var c = Hb(this), d = Hb(b);;) {
        if (y(c.Ya())) {
          var e = c.next(), f = d.next();
          if (!$b.b(e, f)) {
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
    return rc(this, b);
  }
};
h.Ia = function() {
  var a = this;
  return new he(a.g, a.shift, function() {
    var b = a.root;
    return ie.a ? ie.a(b) : ie.call(null, b);
  }(), function() {
    var b = a.ia;
    return je.a ? je.a(b) : je.call(null, b);
  }());
};
h.Z = function() {
  return Jc(xc, this.j);
};
h.aa = function(a, b) {
  return hc(this, b);
};
h.ba = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.g) {
      var e = de(this, a);
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
h.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return ab(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.W = function() {
  if (0 === this.g) {
    return null;
  }
  if (32 >= this.g) {
    return new Xb(this.ia, 0);
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
  return ke ? ke(this, a, 0, 0) : le.call(null, this, a, 0, 0);
};
h.X = function(a, b) {
  return new P(b, this.g, this.shift, this.root, this.ia, this.m);
};
h.G = function(a, b) {
  if (32 > this.g - $d(this)) {
    for (var c = this.ia.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ia[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new P(this.j, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Zd(null), d.c[0] = this.root, e = ae(null, this.shift, new Yd(null, this.ia)), d.c[1] = e) : d = be(this, this.shift, this.root, new Yd(null, this.ia));
  return new P(this.j, this.g + 1, c, d, [b], null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.D(null, c);
  };
  a.f = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.D(null, a);
};
h.b = function(a, b) {
  return this.ka(null, a, b);
};
var Q = new Yd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), xc = new P(null, 0, 5, Q, [], ec);
P.prototype[Fa] = function() {
  return bc(this);
};
function me(a) {
  if (Aa(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new P(null, b, 5, Q, a, null);
      } else {
        for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Ia(null);;) {
          if (c < b) {
            var e = c + 1, d = wd.b(d, a[c]), c = e
          } else {
            a = wb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = wb(Vc(vb, ub(xc), a));
  }
  return a;
}
function ne(a, b, c, d, e, f) {
  this.ma = a;
  this.ua = b;
  this.i = c;
  this.Y = d;
  this.j = e;
  this.m = f;
  this.h = 32375020;
  this.p = 1536;
}
h = ne.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  if (this.Y + 1 < this.ua.length) {
    var a;
    a = this.ma;
    var b = this.ua, c = this.i, d = this.Y + 1;
    a = ke ? ke(a, b, c, d) : le.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Cb(this);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(xc, this.j);
};
h.aa = function(a, b) {
  var c;
  c = this.ma;
  var d = this.i + this.Y, e = yc(this.ma);
  c = oe ? oe(c, d, e) : pe.call(null, c, d, e);
  return hc(c, b);
};
h.ba = function(a, b, c) {
  a = this.ma;
  var d = this.i + this.Y, e = yc(this.ma);
  a = oe ? oe(a, d, e) : pe.call(null, a, d, e);
  return ic(a, b, c);
};
h.ca = function() {
  return this.ua[this.Y];
};
h.ja = function() {
  if (this.Y + 1 < this.ua.length) {
    var a;
    a = this.ma;
    var b = this.ua, c = this.i, d = this.Y + 1;
    a = ke ? ke(a, b, c, d) : le.call(null, a, b, c, d);
    return null == a ? Zb : a;
  }
  return Bb(this);
};
h.W = function() {
  return this;
};
h.eb = function() {
  var a = this.ua;
  return new od(a, this.Y, a.length);
};
h.fb = function() {
  var a = this.i + this.ua.length;
  if (a < Ja(this.ma)) {
    var b = this.ma, c = de(this.ma, a);
    return ke ? ke(b, c, a, 0) : le.call(null, b, c, a, 0);
  }
  return Zb;
};
h.X = function(a, b) {
  var c = this.ma, d = this.ua, e = this.i, f = this.Y;
  return qe ? qe(c, d, e, f, b) : le.call(null, c, d, e, f, b);
};
h.G = function(a, b) {
  return sc(b, this);
};
h.cb = function() {
  var a = this.i + this.ua.length;
  if (a < Ja(this.ma)) {
    var b = this.ma, c = de(this.ma, a);
    return ke ? ke(b, c, a, 0) : le.call(null, b, c, a, 0);
  }
  return null;
};
ne.prototype[Fa] = function() {
  return bc(this);
};
function le() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new ne(a, ee(a, b), b, c, null, null);
    case 4:
      return ke(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return qe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function ke(a, b, c, d) {
  return new ne(a, b, c, d, null, null);
}
function qe(a, b, c, d, e) {
  return new ne(a, b, c, d, e, null);
}
function re(a, b, c, d, e) {
  this.j = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.h = 167666463;
  this.p = 8192;
}
h = re.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? E.f(this, b, c) : c;
};
h.La = function(a, b, c) {
  a = this.start;
  for (var d = 0;;) {
    if (a < this.end) {
      var e = d, f = E.b(this.ra, a);
      c = b.f ? b.f(c, e, f) : b.call(null, c, e, f);
      d += 1;
      a += 1;
    } else {
      return c;
    }
  }
};
h.D = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ce(b, this.end - this.start) : E.b(this.ra, this.start + b);
};
h.ka = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : E.f(this.ra, this.start + b, c);
};
h.kb = function(a, b, c) {
  var d = this.start + b;
  a = this.j;
  c = M.f(this.ra, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return se.r ? se.r(a, c, b, d, null) : se.call(null, a, c, b, d, null);
};
h.F = function() {
  return this.j;
};
h.da = function() {
  return this.end - this.start;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(xc, this.j);
};
h.aa = function(a, b) {
  return hc(this, b);
};
h.ba = function(a, b, c) {
  return ic(this, b, c);
};
h.Ha = function(a, b, c) {
  if ("number" === typeof b) {
    return ab(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.W = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : sc(E.b(a.ra, e), new ld(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.X = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.m;
  return se.r ? se.r(b, c, d, e, f) : se.call(null, b, c, d, e, f);
};
h.G = function(a, b) {
  var c = this.j, d = ab(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return se.r ? se.r(c, d, e, f, null) : se.call(null, c, d, e, f, null);
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.D(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.D(null, c);
  };
  a.f = function(a, c, d) {
    return this.ka(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.D(null, a);
};
h.b = function(a, b) {
  return this.ka(null, a, b);
};
re.prototype[Fa] = function() {
  return bc(this);
};
function se(a, b, c, d, e) {
  for (;;) {
    if (b instanceof re) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = yc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new re(a, b, c, d, e);
    }
  }
}
function pe() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return oe(a, arguments[1], yc(a));
    case 3:
      return oe(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function oe(a, b, c) {
  return se(null, a, b, c, null);
}
function te(a, b) {
  return a === b.s ? b : new Yd(a, Ga(b.c));
}
function ie(a) {
  return new Yd({}, Ga(a.c));
}
function je(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Pc(a, 0, b, 0, a.length);
  return b;
}
var ue = function ue(b, c, d, e) {
  d = te(b.root.s, d);
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? ue(b, c - 5, g, e) : ae(b.root.s, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function he(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.ia = d;
  this.p = 88;
  this.h = 275;
}
h = he.prototype;
h.Wa = function(a, b) {
  if (this.root.s) {
    if (32 > this.g - $d(this)) {
      this.ia[this.g & 31] = b;
    } else {
      var c = new Yd(this.root.s, this.ia), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ia = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = ae(this.root.s, this.shift, c);
        this.root = new Yd(this.root.s, d);
        this.shift = e;
      } else {
        this.root = ue(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Xa = function() {
  if (this.root.s) {
    this.root.s = null;
    var a = this.g - $d(this), b = Array(a);
    Pc(this.ia, 0, b, 0, a);
    return new P(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  if ("number" === typeof b) {
    return yb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.ob = function(a, b, c) {
  var d = this;
  if (d.root.s) {
    if (0 <= b && b < d.g) {
      return $d(this) <= b ? d.ia[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = te(d.root.s, k);
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
    if (b === d.g) {
      return vb(this, c);
    }
    throw Error([D("Index "), D(b), D(" out of bounds for TransientVector of length"), D(d.g)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.da = function() {
  if (this.root.s) {
    return this.g;
  }
  throw Error("count after persistent!");
};
h.D = function(a, b) {
  if (this.root.s) {
    return ee(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ka = function(a, b, c) {
  return 0 <= b && b < this.g ? E.b(this, b) : c;
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  return "number" === typeof b ? E.f(this, b, c) : c;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.$(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.$(null, c);
  };
  a.f = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.$(null, a);
};
h.b = function(a, b) {
  return this.C(null, a, b);
};
function ve() {
  this.h = 2097152;
  this.p = 0;
}
ve.prototype.equiv = function(a) {
  return this.n(null, a);
};
ve.prototype.n = function() {
  return!1;
};
var we = new ve;
function xe(a, b) {
  return Sc(Lc(b) ? yc(a) === yc(b) ? Cd(Yc, Ld.b(function(a) {
    return $b.b(Dc(b, G(a), we), G(I(a)));
  }, a)) : null : null);
}
function ye(a) {
  this.q = a;
}
ye.prototype.next = function() {
  if (null != this.q) {
    var a = G(this.q), b = K(a, 0), a = K(a, 1);
    this.q = I(this.q);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function ze(a) {
  return new ye(F(a));
}
function Ae(a, b) {
  var c;
  if (b instanceof N) {
    a: {
      c = a.length;
      for (var d = b.wa, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof N && d === f.wa) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, y(y(c) ? c : "number" === typeof b)) {
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
      if (b instanceof Vb) {
        a: {
          for (c = a.length, d = b.ya, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Vb && d === f.ya) {
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
              if ($b.b(b, a[d])) {
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
function Be(a, b, c) {
  this.c = a;
  this.i = b;
  this.fa = c;
  this.h = 32374990;
  this.p = 0;
}
h = Be.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.fa;
};
h.ga = function() {
  return this.i < this.c.length - 2 ? new Be(this.c, this.i + 2, this.fa) : null;
};
h.da = function() {
  return(this.c.length - this.i) / 2;
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return new P(null, 2, 5, Q, [this.c[this.i], this.c[this.i + 1]], null);
};
h.ja = function() {
  return this.i < this.c.length - 2 ? new Be(this.c, this.i + 2, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new Be(this.c, this.i, b);
};
h.G = function(a, b) {
  return sc(b, this);
};
Be.prototype[Fa] = function() {
  return bc(this);
};
function Ce(a, b, c) {
  this.c = a;
  this.i = b;
  this.g = c;
}
Ce.prototype.Ya = function() {
  return this.i < this.g;
};
Ce.prototype.next = function() {
  var a = new P(null, 2, 5, Q, [this.c[this.i], this.c[this.i + 1]], null);
  this.i += 2;
  return a;
};
function sa(a, b, c, d) {
  this.j = a;
  this.g = b;
  this.c = c;
  this.m = d;
  this.h = 16647951;
  this.p = 8196;
}
h = sa.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.keys = function() {
  return bc(De.a ? De.a(this) : De.call(null, this));
};
h.entries = function() {
  return ze(F(this));
};
h.values = function() {
  return bc(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.has = function(a) {
  return Tc(this, a);
};
h.get = function(a, b) {
  return this.C(null, a, b);
};
h.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = K(f, 0), f = K(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Nc(b) ? (c = Ab(b), b = Bb(b), g = c, d = yc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = I(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  a = Ae(this.c, b);
  return-1 === a ? c : this.c[a + 1];
};
h.La = function(a, b, c) {
  a = this.c.length;
  for (var d = 0;;) {
    if (d < a) {
      var e = this.c[d], f = this.c[d + 1];
      c = b.f ? b.f(c, e, f) : b.call(null, c, e, f);
      d += 2;
    } else {
      return c;
    }
  }
};
h.Ka = function() {
  return new Ce(this.c, 0, 2 * this.g);
};
h.F = function() {
  return this.j;
};
h.da = function() {
  return this.g;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fc(this);
};
h.n = function(a, b) {
  if (b && (b.h & 1024 || b.wb)) {
    var c = this.c.length;
    if (this.g === b.da(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.C(null, this.c[d], Qc);
          if (e !== Qc) {
            if ($b.b(this.c[d + 1], e)) {
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
    return xe(this, b);
  }
};
h.Ia = function() {
  return new Fe({}, this.c.length, Ga(this.c));
};
h.Z = function() {
  return gb(R, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.hb = function(a, b) {
  if (0 <= Ae(this.c, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return Ka(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new sa(this.j, this.g - 1, d, null);
      }
      $b.b(b, this.c[e]) || (d[f] = this.c[e], d[f + 1] = this.c[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ha = function(a, b, c) {
  a = Ae(this.c, b);
  if (-1 === a) {
    if (this.g < Ge) {
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
      return new sa(this.j, this.g + 1, e, null);
    }
    return gb(Ua(Nd.b(He, this), b, c), this.j);
  }
  if (c === this.c[a + 1]) {
    return this;
  }
  b = Ga(this.c);
  b[a + 1] = c;
  return new sa(this.j, this.g, b, null);
};
h.W = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Be(a, 0, null) : null;
};
h.X = function(a, b) {
  return new sa(b, this.g, this.c, this.m);
};
h.G = function(a, b) {
  if (Mc(b)) {
    return Ua(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Mc(e)) {
      c = Ua(c, E.b(e, 0), E.b(e, 1)), d = I(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.$(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.$(null, c);
  };
  a.f = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.$(null, a);
};
h.b = function(a, b) {
  return this.C(null, a, b);
};
var R = new sa(null, 0, [], gc), Ge = 8;
sa.prototype[Fa] = function() {
  return bc(this);
};
function Fe(a, b, c) {
  this.Da = a;
  this.Fa = b;
  this.c = c;
  this.h = 258;
  this.p = 56;
}
h = Fe.prototype;
h.da = function() {
  if (y(this.Da)) {
    return bd(this.Fa, 2);
  }
  throw Error("count after persistent!");
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  if (y(this.Da)) {
    return a = Ae(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Wa = function(a, b) {
  if (y(this.Da)) {
    if (b ? b.h & 2048 || b.xb || (b.h ? 0 : A(Xa, b)) : A(Xa, b)) {
      return xb(this, Ie.a ? Ie.a(b) : Ie.call(null, b), Je.a ? Je.a(b) : Je.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (y(e)) {
        var f = e, c = I(c), d = xb(d, function() {
          var a = f;
          return Ie.a ? Ie.a(a) : Ie.call(null, a);
        }(), function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Xa = function() {
  if (y(this.Da)) {
    return this.Da = !1, new sa(null, bd(this.Fa, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  if (y(this.Da)) {
    a = Ae(this.c, b);
    if (-1 === a) {
      if (this.Fa + 2 <= 2 * Ge) {
        return this.Fa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Fa;
      var d = this.c;
      a = Le.b ? Le.b(a, d) : Le.call(null, a, d);
      return xb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Le(a, b) {
  for (var c = ub(He), d = 0;;) {
    if (d < a) {
      c = xb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Me() {
  this.sa = !1;
}
function Ne(a, b) {
  return a === b ? !0 : a === b || a instanceof N && b instanceof N && a.wa === b.wa ? !0 : $b.b(a, b);
}
function Oe(a, b, c) {
  a = Ga(a);
  a[b] = c;
  return a;
}
function Pe(a, b) {
  var c = Array(a.length - 2);
  Pc(a, 0, c, 0, 2 * b);
  Pc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Qe(a, b, c, d) {
  a = a.Aa(b);
  a.c[c] = d;
  return a;
}
function Re(a, b, c) {
  for (var d = a.length, e = 0, f = c;;) {
    if (e < d) {
      c = a[e];
      if (null != c) {
        var g = a[e + 1];
        c = b.f ? b.f(f, c, g) : b.call(null, f, c, g);
      } else {
        c = a[e + 1], c = null != c ? c.Sa(b, f) : f;
      }
      e += 2;
      f = c;
    } else {
      return f;
    }
  }
}
function Se(a, b, c) {
  this.s = a;
  this.v = b;
  this.c = c;
}
h = Se.prototype;
h.Aa = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = cd(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  Pc(this.c, 0, c, 0, 2 * b);
  return new Se(a, this.v, c);
};
h.Qa = function() {
  var a = this.c;
  return Te ? Te(a) : Ue.call(null, a);
};
h.Sa = function(a, b) {
  return Re(this.c, a, b);
};
h.Ba = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.v & e)) {
    return d;
  }
  var f = cd(this.v & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ba(a + 5, b, c, d) : Ne(c, e) ? f : d;
};
h.oa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = cd(this.v & g - 1);
  if (0 === (this.v & g)) {
    var l = cd(this.v);
    if (2 * l < this.c.length) {
      a = this.Aa(a);
      b = a.c;
      f.sa = !0;
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
      a.v |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Ve.oa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.v >>> d & 1) && (k[d] = null != this.c[e] ? Ve.oa(a, b + 5, Tb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new We(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Pc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Pc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.sa = !0;
    a = this.Aa(a);
    a.c = b;
    a.v |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.oa(a, b + 5, c, d, e, f), l === g ? this : Qe(this, a, 2 * k + 1, l);
  }
  if (Ne(d, l)) {
    return e === g ? this : Qe(this, a, 2 * k + 1, e);
  }
  f.sa = !0;
  f = b + 5;
  d = Xe ? Xe(a, f, l, g, c, d, e) : Ye.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Aa(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.na = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = cd(this.v & f - 1);
  if (0 === (this.v & f)) {
    var k = cd(this.v);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ve.na(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.v >>> c & 1) && (g[c] = null != this.c[d] ? Ve.na(a + 5, Tb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new We(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Pc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Pc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.sa = !0;
    return new Se(null, this.v | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.na(a + 5, b, c, d, e), k === f ? this : new Se(null, this.v, Oe(this.c, 2 * g + 1, k));
  }
  if (Ne(c, l)) {
    return d === f ? this : new Se(null, this.v, Oe(this.c, 2 * g + 1, d));
  }
  e.sa = !0;
  e = this.v;
  k = this.c;
  a += 5;
  a = Ze ? Ze(a, l, f, b, c, d) : Ye.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Se(null, e, d);
};
h.Ra = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.v & d)) {
    return this;
  }
  var e = cd(this.v & d - 1), f = this.c[2 * e], g = this.c[2 * e + 1];
  return null == f ? (a = g.Ra(a + 5, b, c), a === g ? this : null != a ? new Se(null, this.v, Oe(this.c, 2 * e + 1, a)) : this.v === d ? null : new Se(null, this.v ^ d, Pe(this.c, e))) : Ne(c, f) ? new Se(null, this.v ^ d, Pe(this.c, e)) : this;
};
var Ve = new Se(null, 0, []);
function We(a, b, c) {
  this.s = a;
  this.g = b;
  this.c = c;
}
h = We.prototype;
h.Aa = function(a) {
  return a === this.s ? this : new We(a, this.g, Ga(this.c));
};
h.Qa = function() {
  var a = this.c;
  return $e ? $e(a) : af.call(null, a);
};
h.Sa = function(a, b) {
  for (var c = this.c.length, d = 0, e = b;;) {
    if (d < c) {
      var f = this.c[d];
      null != f && (e = f.Sa(a, e));
      d += 1;
    } else {
      return e;
    }
  }
};
h.Ba = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ba(a + 5, b, c, d) : d;
};
h.oa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.c[g];
  if (null == k) {
    return a = Qe(this, a, g, Ve.oa(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.oa(a, b + 5, c, d, e, f);
  return b === k ? this : Qe(this, a, g, b);
};
h.na = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new We(null, this.g + 1, Oe(this.c, f, Ve.na(a + 5, b, c, d, e)));
  }
  a = g.na(a + 5, b, c, d, e);
  return a === g ? this : new We(null, this.g, Oe(this.c, f, a));
};
h.Ra = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.Ra(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.g) {
          a: {
            e = this.c;
            a = e.length;
            b = Array(2 * (this.g - 1));
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
          d = new We(null, this.g - 1, Oe(this.c, d, a));
        }
      } else {
        d = new We(null, this.g, Oe(this.c, d, a));
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
  this.s = a;
  this.ta = b;
  this.g = c;
  this.c = d;
}
h = cf.prototype;
h.Aa = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  Pc(this.c, 0, b, 0, 2 * this.g);
  return new cf(a, this.ta, this.g, b);
};
h.Qa = function() {
  var a = this.c;
  return Te ? Te(a) : Ue.call(null, a);
};
h.Sa = function(a, b) {
  return Re(this.c, a, b);
};
h.Ba = function(a, b, c, d) {
  a = bf(this.c, this.g, c);
  return 0 > a ? d : Ne(c, this.c[a]) ? this.c[a + 1] : d;
};
h.oa = function(a, b, c, d, e, f) {
  if (c === this.ta) {
    b = bf(this.c, this.g, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.g) {
        return b = 2 * this.g, c = 2 * this.g + 1, a = this.Aa(a), a.c[b] = d, a.c[c] = e, f.sa = !0, a.g += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Pc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.sa = !0;
      d = this.g + 1;
      a === this.s ? (this.c = b, this.g = d, a = this) : a = new cf(this.s, this.ta, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Qe(this, a, b + 1, e);
  }
  return(new Se(a, 1 << (this.ta >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, f);
};
h.na = function(a, b, c, d, e) {
  return b === this.ta ? (a = bf(this.c, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), Pc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.sa = !0, new cf(null, this.ta, this.g + 1, b)) : $b.b(this.c[a], d) ? this : new cf(null, this.ta, this.g, Oe(this.c, a + 1, d))) : (new Se(null, 1 << (this.ta >>> a & 31), [null, this])).na(a, b, c, d, e);
};
h.Ra = function(a, b, c) {
  a = bf(this.c, this.g, c);
  return-1 === a ? this : 1 === this.g ? null : new cf(null, this.ta, this.g - 1, Pe(this.c, bd(a, 2)));
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
  var g = Tb(b);
  if (g === d) {
    return new cf(null, g, 2, [b, c, e, f]);
  }
  var k = new Me;
  return Ve.na(a, g, b, c, k).na(a, d, e, f, k);
}
function Xe(a, b, c, d, e, f, g) {
  var k = Tb(c);
  if (k === e) {
    return new cf(null, k, 2, [c, d, f, g]);
  }
  var l = new Me;
  return Ve.oa(a, b, k, c, d, l).oa(a, b, e, f, g, l);
}
function df(a, b, c, d, e) {
  this.j = a;
  this.xa = b;
  this.i = c;
  this.q = d;
  this.m = e;
  this.h = 32374860;
  this.p = 0;
}
h = df.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return null == this.q ? new P(null, 2, 5, Q, [this.xa[this.i], this.xa[this.i + 1]], null) : G(this.q);
};
h.ja = function() {
  if (null == this.q) {
    var a = this.xa, b = this.i + 2;
    return ef ? ef(a, b, null) : Ue.call(null, a, b, null);
  }
  var a = this.xa, b = this.i, c = I(this.q);
  return ef ? ef(a, b, c) : Ue.call(null, a, b, c);
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new df(b, this.xa, this.i, this.q, this.m);
};
h.G = function(a, b) {
  return sc(b, this);
};
df.prototype[Fa] = function() {
  return bc(this);
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
        if (y(d) && (d = d.Qa(), y(d))) {
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
  this.j = a;
  this.xa = b;
  this.i = c;
  this.q = d;
  this.m = e;
  this.h = 32374860;
  this.p = 0;
}
h = ff.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.j;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return G(this.q);
};
h.ja = function() {
  var a = this.xa, b = this.i, c = I(this.q);
  return gf ? gf(null, a, b, c) : af.call(null, null, a, b, c);
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new ff(b, this.xa, this.i, this.q, this.m);
};
h.G = function(a, b) {
  return sc(b, this);
};
ff.prototype[Fa] = function() {
  return bc(this);
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
        if (y(e) && (e = e.Qa(), y(e))) {
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
  this.j = a;
  this.g = b;
  this.root = c;
  this.ha = d;
  this.la = e;
  this.m = f;
  this.h = 16123663;
  this.p = 8196;
}
h = hf.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.keys = function() {
  return bc(De.a ? De.a(this) : De.call(null, this));
};
h.entries = function() {
  return ze(F(this));
};
h.values = function() {
  return bc(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.has = function(a) {
  return Tc(this, a);
};
h.get = function(a, b) {
  return this.C(null, a, b);
};
h.forEach = function(a) {
  for (var b = F(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.D(null, e), g = K(f, 0), f = K(f, 1);
      a.b ? a.b(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = F(b)) {
        Nc(b) ? (c = Ab(b), b = Bb(b), g = c, d = yc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = I(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  return null == b ? this.ha ? this.la : c : null == this.root ? c : this.root.Ba(0, Tb(b), b, c);
};
h.La = function(a, b, c) {
  this.ha && (a = this.la, c = b.f ? b.f(c, null, a) : b.call(null, c, null, a));
  return null != this.root ? this.root.Sa(b, c) : c;
};
h.F = function() {
  return this.j;
};
h.da = function() {
  return this.g;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = fc(this);
};
h.n = function(a, b) {
  return xe(this, b);
};
h.Ia = function() {
  return new jf({}, this.root, this.g, this.ha, this.la);
};
h.Z = function() {
  return gb(He, this.j);
};
h.hb = function(a, b) {
  if (null == b) {
    return this.ha ? new hf(this.j, this.g - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ra(0, Tb(b), b);
  return c === this.root ? this : new hf(this.j, this.g - 1, c, this.ha, this.la, null);
};
h.Ha = function(a, b, c) {
  if (null == b) {
    return this.ha && c === this.la ? this : new hf(this.j, this.ha ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new Me;
  b = (null == this.root ? Ve : this.root).na(0, Tb(b), b, c, a);
  return b === this.root ? this : new hf(this.j, a.sa ? this.g + 1 : this.g, b, this.ha, this.la, null);
};
h.W = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Qa() : null;
    return this.ha ? sc(new P(null, 2, 5, Q, [null, this.la], null), a) : a;
  }
  return null;
};
h.X = function(a, b) {
  return new hf(b, this.g, this.root, this.ha, this.la, this.m);
};
h.G = function(a, b) {
  if (Mc(b)) {
    return Ua(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Mc(e)) {
      c = Ua(c, E.b(e, 0), E.b(e, 1)), d = I(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.$(null, c);
      case 3:
        return this.C(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.$(null, c);
  };
  a.f = function(a, c, d) {
    return this.C(null, c, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.a = function(a) {
  return this.$(null, a);
};
h.b = function(a, b) {
  return this.C(null, a, b);
};
var He = new hf(null, 0, null, !1, null, gc);
function Ec(a, b) {
  for (var c = a.length, d = 0, e = ub(He);;) {
    if (d < c) {
      var f = d + 1, e = e.Pa(null, a[d], b[d]), d = f
    } else {
      return wb(e);
    }
  }
}
hf.prototype[Fa] = function() {
  return bc(this);
};
function jf(a, b, c, d, e) {
  this.s = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.la = e;
  this.h = 258;
  this.p = 56;
}
function kf(a, b) {
  if (a.s) {
    if (b ? b.h & 2048 || b.xb || (b.h ? 0 : A(Xa, b)) : A(Xa, b)) {
      return lf(a, Ie.a ? Ie.a(b) : Ie.call(null, b), Je.a ? Je.a(b) : Je.call(null, b));
    }
    for (var c = F(b), d = a;;) {
      var e = G(c);
      if (y(e)) {
        var f = e, c = I(c), d = lf(d, function() {
          var a = f;
          return Ie.a ? Ie.a(a) : Ie.call(null, a);
        }(), function() {
          var a = f;
          return Je.a ? Je.a(a) : Je.call(null, a);
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
  if (a.s) {
    if (null == b) {
      a.la !== c && (a.la = c), a.ha || (a.count += 1, a.ha = !0);
    } else {
      var d = new Me;
      b = (null == a.root ? Ve : a.root).oa(a.s, 0, Tb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.sa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = jf.prototype;
h.da = function() {
  if (this.s) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.$ = function(a, b) {
  return null == b ? this.ha ? this.la : null : null == this.root ? null : this.root.Ba(0, Tb(b), b);
};
h.C = function(a, b, c) {
  return null == b ? this.ha ? this.la : c : null == this.root ? c : this.root.Ba(0, Tb(b), b, c);
};
h.Wa = function(a, b) {
  return kf(this, b);
};
h.Xa = function() {
  var a;
  if (this.s) {
    this.s = null, a = new hf(null, this.count, this.root, this.ha, this.la, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Pa = function(a, b, c) {
  return lf(this, b, c);
};
var Gd = function Gd() {
  return Gd.k(0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Gd.k = function(a) {
  for (var b = F(a), c = ub(He);;) {
    if (b) {
      a = I(I(b));
      var d = G(b), b = G(I(b)), c = xb(c, d, b), b = a;
    } else {
      return wb(c);
    }
  }
};
Gd.u = 0;
Gd.t = function(a) {
  return Gd.k(F(a));
};
function mf(a, b) {
  this.ea = a;
  this.fa = b;
  this.h = 32374988;
  this.p = 0;
}
h = mf.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.fa;
};
h.ga = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : A(Ra, a)) : A(Ra, a)) ? this.ea.ga(null) : I(this.ea);
  return null == a ? null : new mf(a, this.fa);
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return this.ea.ca(null).ib();
};
h.ja = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : A(Ra, a)) : A(Ra, a)) ? this.ea.ga(null) : I(this.ea);
  return null != a ? new mf(a, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new mf(this.ea, b);
};
h.G = function(a, b) {
  return sc(b, this);
};
mf.prototype[Fa] = function() {
  return bc(this);
};
function De(a) {
  return(a = F(a)) ? new mf(a, null) : null;
}
function Ie(a) {
  return Ya(a);
}
function nf(a, b) {
  this.ea = a;
  this.fa = b;
  this.h = 32374988;
  this.p = 0;
}
h = nf.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.F = function() {
  return this.fa;
};
h.ga = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : A(Ra, a)) : A(Ra, a)) ? this.ea.ga(null) : I(this.ea);
  return null == a ? null : new nf(a, this.fa);
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Uc(b, this);
};
h.ba = function(a, b, c) {
  return Xc(b, c, this);
};
h.ca = function() {
  return this.ea.ca(null).jb();
};
h.ja = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : A(Ra, a)) : A(Ra, a)) ? this.ea.ga(null) : I(this.ea);
  return null != a ? new nf(a, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new nf(this.ea, b);
};
h.G = function(a, b) {
  return sc(b, this);
};
nf.prototype[Fa] = function() {
  return bc(this);
};
function Ee(a) {
  return(a = F(a)) ? new nf(a, null) : null;
}
function Je(a) {
  return Za(a);
}
function kd(a) {
  if (a && (a.p & 4096 || a.zb)) {
    return a.Ma(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function of(a, b, c) {
  this.i = a;
  this.end = b;
  this.step = c;
}
of.prototype.Ya = function() {
  return 0 < this.step ? this.i < this.end : this.i > this.end;
};
of.prototype.next = function() {
  var a = this.i;
  this.i += this.step;
  return a;
};
function pf(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.h = 32375006;
  this.p = 8192;
}
h = pf.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.D = function(a, b) {
  if (b < Ja(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ka = function(a, b, c) {
  return b < Ja(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Ka = function() {
  return new of(this.start, this.end, this.step);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new pf(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new pf(this.j, this.start + this.step, this.end, this.step, null) : null;
};
h.da = function() {
  if (Ba(nb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return rc(this, b);
};
h.Z = function() {
  return Jc(Zb, this.j);
};
h.aa = function(a, b) {
  return hc(this, b);
};
h.ba = function(a, b, c) {
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
h.ca = function() {
  return null == nb(this) ? null : this.start;
};
h.ja = function() {
  return null != nb(this) ? new pf(this.j, this.start + this.step, this.end, this.step, null) : Zb;
};
h.W = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.X = function(a, b) {
  return new pf(b, this.start, this.end, this.step, this.m);
};
h.G = function(a, b) {
  return sc(b, this);
};
pf.prototype[Fa] = function() {
  return bc(this);
};
function qf(a, b) {
  return new pf(null, a, b, 1, null);
}
function rf(a, b, c, d, e, f, g) {
  var k = oa;
  oa = null == oa ? null : oa - 1;
  try {
    if (null != oa && 0 > oa) {
      return pb(a, "#");
    }
    pb(a, c);
    if (0 === za.a(f)) {
      F(g) && pb(a, function() {
        var a = sf.a(f);
        return y(a) ? a : "...";
      }());
    } else {
      if (F(g)) {
        var l = G(g);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = I(g), n = za.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          F(m) && 0 === n && (pb(a, d), pb(a, function() {
            var a = sf.a(f);
            return y(a) ? a : "...";
          }()));
          break;
        } else {
          pb(a, d);
          var p = G(m);
          c = a;
          g = f;
          b.f ? b.f(p, c, g) : b.call(null, p, c, g);
          var q = I(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return pb(a, e);
  } finally {
    oa = k;
  }
}
function tf(a, b) {
  for (var c = F(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f);
      pb(a, g);
      f += 1;
    } else {
      if (c = F(c)) {
        d = c, Nc(d) ? (c = Ab(d), e = Bb(d), d = c, g = yc(c), c = e, e = g) : (g = G(d), pb(a, g), c = I(d), d = null, e = 0), f = 0;
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
    return pb(b, "nil");
  }
  if (void 0 === a) {
    return pb(b, "#\x3cundefined\x3e");
  }
  if (y(function() {
    var b = L(c, va);
    return y(b) ? (b = a ? a.h & 131072 || a.yb ? !0 : a.h ? !1 : A(cb, a) : A(cb, a)) ? Kc(a) : b : b;
  }())) {
    pb(b, "^");
    var d = Kc(a);
    xf.f ? xf.f(d, b, c) : xf.call(null, d, b, c);
    pb(b, " ");
  }
  return null == a ? pb(b, "nil") : a.Hb ? a.Sb(a, b, c) : a && (a.h & 2147483648 || a.V) ? a.A(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? pb(b, "" + D(a)) : null != a && a.constructor === Object ? (pb(b, "#js "), d = Ld.b(function(b) {
    return new P(null, 2, 5, Q, [jd.a(b), a[b]], null);
  }, Oc(a)), yf.o ? yf.o(d, xf, b, c) : yf.call(null, d, xf, b, c)) : Aa(a) ? rf(b, xf, "#js [", " ", "]", c, a) : y("string" == typeof a) ? y(ua.a(c)) ? pb(b, vf(a)) : pb(b, a) : Gc(a) ? tf(b, uc(["#\x3c", "" + D(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + D(a);;) {
      if (yc(c) < b) {
        c = [D("0"), D(c)].join("");
      } else {
        return c;
      }
    }
  }, tf(b, uc(['#inst "', "" + D(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : y(a instanceof RegExp) ? tf(b, uc(['#"', a.source, '"'], 0)) : (a ? a.h & 2147483648 || a.V || (a.h ? 0 : A(qb, a)) : A(qb, a)) ? rb(a, b, c) : tf(b, uc(["#\x3c", "" + D(a), "\x3e"], 0));
}
function xf(a, b, c) {
  var d = zf.a(c);
  return y(d) ? (c = M.f(c, Af, wf), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : wf(a, b, c);
}
function Jd() {
  var a = 0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null, b = ra(), c;
  if (null == a || Ba(F(a))) {
    c = "";
  } else {
    c = D;
    var d = b, b = new ka;
    a: {
      var e = a, a = new Ib(b);
      xf(G(e), a, d);
      for (var e = F(I(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.D(null, k);
          pb(a, " ");
          xf(l, a, d);
          k += 1;
        } else {
          if (e = F(e)) {
            f = e, Nc(f) ? (e = Ab(f), g = Bb(f), f = e, l = yc(e), e = g, g = l) : (l = G(f), pb(a, " "), xf(l, a, d), e = I(f), f = null, g = 0), k = 0;
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
    var k = Ya(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    pb(c, " ");
    a = Za(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, F(a));
}
Xb.prototype.V = !0;
Xb.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
ld.prototype.V = !0;
ld.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
df.prototype.V = !0;
df.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Be.prototype.V = !0;
Be.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
ne.prototype.V = !0;
ne.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
hd.prototype.V = !0;
hd.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
hf.prototype.V = !0;
hf.prototype.A = function(a, b, c) {
  return yf(this, xf, b, c);
};
ff.prototype.V = !0;
ff.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
re.prototype.V = !0;
re.prototype.A = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
pd.prototype.V = !0;
pd.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
Ed.prototype.V = !0;
Ed.prototype.A = function(a, b, c) {
  pb(b, "#\x3cAtom: ");
  xf(this.state, b, c);
  return pb(b, "\x3e");
};
nf.prototype.V = !0;
nf.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
P.prototype.V = !0;
P.prototype.A = function(a, b, c) {
  return rf(b, xf, "[", " ", "]", c, this);
};
fd.prototype.V = !0;
fd.prototype.A = function(a, b) {
  return pb(b, "()");
};
sa.prototype.V = !0;
sa.prototype.A = function(a, b, c) {
  return yf(this, xf, b, c);
};
pf.prototype.V = !0;
pf.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
mf.prototype.V = !0;
mf.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
ed.prototype.V = !0;
ed.prototype.A = function(a, b, c) {
  return rf(b, xf, "(", " ", ")", c, this);
};
function Bf(a, b) {
  Vc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Cf() {
  return 1 * (Math.random.l ? Math.random.l() : Math.random.call(null));
}
function Cc(a) {
  a *= Math.random.l ? Math.random.l() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Df = null;
function Ef() {
  if (null == Df) {
    var a = new sa(null, 3, [Ff, R, Gf, R, Hf, R], null);
    Df = O ? O(a) : Fd.call(null, a);
  }
  return Df;
}
function If(a, b, c) {
  var d = $b.b(b, c);
  if (!d && !(d = Tc(Hf.a(a).call(null, b), c)) && (d = Mc(c)) && (d = Mc(b))) {
    if (d = yc(c) === yc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== yc(c)) {
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
  a = L(Ff.a(b), a);
  return F(a) ? a : null;
}
function Kf(a, b, c, d) {
  Kd.b(a, function() {
    return J.a ? J.a(b) : J.call(null, b);
  });
  Kd.b(c, function() {
    return J.a ? J.a(d) : J.call(null, d);
  });
}
var Lf = function Lf(b, c, d) {
  var e = (J.a ? J.a(d) : J.call(null, d)).call(null, b), e = y(y(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (y(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(c);;) {
      if (0 < yc(e)) {
        Lf(b, G(e), d), e = Yb(e);
      } else {
        return null;
      }
    }
  }();
  if (y(e)) {
    return e;
  }
  e = function() {
    for (var e = Jf(b);;) {
      if (0 < yc(e)) {
        Lf(G(e), c, d), e = Yb(e);
      } else {
        return null;
      }
    }
  }();
  return y(e) ? e : !1;
};
function Mf(a, b, c) {
  c = Lf(a, b, c);
  if (y(c)) {
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
  var l = Vc(function(e, g) {
    var k = K(g, 0);
    K(g, 1);
    if (If(J.a ? J.a(d) : J.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Mf(k, G(e), f);
      l = y(l) ? g : e;
      if (!y(Mf(G(l), k, f))) {
        throw Error([D("Multiple methods in multimethod '"), D(b), D("' match dispatch value: "), D(c), D(" -\x3e "), D(k), D(" and "), D(G(l)), D(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, J.a ? J.a(e) : J.call(null, e));
  if (y(l)) {
    if ($b.b(J.a ? J.a(k) : J.call(null, k), J.a ? J.a(d) : J.call(null, d))) {
      return Kd.o(g, M, c, G(I(l))), G(I(l));
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
  this.e = b;
  this.Ib = c;
  this.Za = d;
  this.Ta = e;
  this.Jb = f;
  this.$a = g;
  this.Ua = k;
  this.h = 4194305;
  this.p = 4352;
}
h = Of.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H, T) {
    a = this;
    var ha = Bd(a.e, b, c, d, e, uc([f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H, T], 0)), wg = X(this, ha);
    y(wg) || U(a.name, ha);
    return Bd(wg, b, c, d, e, uc([f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H, T], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H) {
    a = this;
    var T = a.e.R ? a.e.R(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H), ha = X(this, T);
    y(ha) || U(a.name, T);
    return ha.R ? ha.R(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H) : ha.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x, H);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x) {
    a = this;
    var H = a.e.Q ? a.e.Q(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x), T = X(this, H);
    y(T) || U(a.name, H);
    return T.Q ? T.Q(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x) : T.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z, x);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z) {
    a = this;
    var x = a.e.P ? a.e.P(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z), H = X(this, x);
    y(H) || U(a.name, x);
    return H.P ? H.P(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z) : H.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, z);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) {
    a = this;
    var z = a.e.O ? a.e.O(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C), x = X(this, z);
    y(x) || U(a.name, z);
    return x.O ? x.O(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) : x.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) {
    a = this;
    var C = a.e.N ? a.e.N(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w), z = X(this, C);
    y(z) || U(a.name, C);
    return z.N ? z.N(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : z.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
    a = this;
    var w = a.e.M ? a.e.M(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), C = X(this, w);
    y(C) || U(a.name, w);
    return C.M ? C.M(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : C.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
    a = this;
    var u = a.e.L ? a.e.L(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t), w = X(this, u);
    y(w) || U(a.name, u);
    return w.L ? w.L(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : w.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
    a = this;
    var t = a.e.K ? a.e.K(b, c, d, e, f, g, k, l, m, n, p, q, r) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r), u = X(this, t);
    y(u) || U(a.name, t);
    return u.K ? u.K(b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    var r = a.e.J ? a.e.J(b, c, d, e, f, g, k, l, m, n, p, q) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
    y(t) || U(a.name, r);
    return t.J ? t.J(b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    var q = a.e.I ? a.e.I(b, c, d, e, f, g, k, l, m, n, p) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
    y(r) || U(a.name, q);
    return r.I ? r.I(b, c, d, e, f, g, k, l, m, n, p) : r.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    var p = a.e.H ? a.e.H(b, c, d, e, f, g, k, l, m, n) : a.e.call(null, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
    y(q) || U(a.name, p);
    return q.H ? q.H(b, c, d, e, f, g, k, l, m, n) : q.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    var n = a.e.U ? a.e.U(b, c, d, e, f, g, k, l, m) : a.e.call(null, b, c, d, e, f, g, k, l, m), p = X(this, n);
    y(p) || U(a.name, n);
    return p.U ? p.U(b, c, d, e, f, g, k, l, m) : p.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var m = a.e.T ? a.e.T(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l), n = X(this, m);
    y(n) || U(a.name, m);
    return n.T ? n.T(b, c, d, e, f, g, k, l) : n.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.e.S ? a.e.S(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k), m = X(this, l);
    y(m) || U(a.name, l);
    return m.S ? m.S(b, c, d, e, f, g, k) : m.call(null, b, c, d, e, f, g, k);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var k = a.e.B ? a.e.B(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g), l = X(this, k);
    y(l) || U(a.name, k);
    return l.B ? l.B(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function w(a, b, c, d, e, f) {
    a = this;
    var g = a.e.r ? a.e.r(b, c, d, e, f) : a.e.call(null, b, c, d, e, f), k = X(this, g);
    y(k) || U(a.name, g);
    return k.r ? k.r(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function z(a, b, c, d, e) {
    a = this;
    var f = a.e.o ? a.e.o(b, c, d, e) : a.e.call(null, b, c, d, e), g = X(this, f);
    y(g) || U(a.name, f);
    return g.o ? g.o(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    var e = a.e.f ? a.e.f(b, c, d) : a.e.call(null, b, c, d), f = X(this, e);
    y(f) || U(a.name, e);
    return f.f ? f.f(b, c, d) : f.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    var d = a.e.b ? a.e.b(b, c) : a.e.call(null, b, c), e = X(this, d);
    y(e) || U(a.name, d);
    return e.b ? e.b(b, c) : e.call(null, b, c);
  }
  function T(a, b) {
    a = this;
    var c = a.e.a ? a.e.a(b) : a.e.call(null, b), d = X(this, c);
    y(d) || U(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function ha(a) {
    a = this;
    var b = a.e.l ? a.e.l() : a.e.call(null), c = X(this, b);
    y(c) || U(a.name, b);
    return c.l ? c.l() : c.call(null);
  }
  var x = null, x = function(x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb, Nb, lc, id, Ke) {
    switch(arguments.length) {
      case 1:
        return ha.call(this, x);
      case 2:
        return T.call(this, x, S);
      case 3:
        return H.call(this, x, S, V);
      case 4:
        return C.call(this, x, S, V, W);
      case 5:
        return z.call(this, x, S, V, W, Z);
      case 6:
        return w.call(this, x, S, V, W, Z, aa);
      case 7:
        return u.call(this, x, S, V, W, Z, aa, ba);
      case 8:
        return t.call(this, x, S, V, W, Z, aa, ba, fa);
      case 9:
        return r.call(this, x, S, V, W, Z, aa, ba, fa, la);
      case 10:
        return q.call(this, x, S, V, W, Z, aa, ba, fa, la, na);
      case 11:
        return p.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa);
      case 12:
        return n.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa);
      case 13:
        return m.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca);
      case 14:
        return l.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea);
      case 15:
        return k.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma);
      case 16:
        return g.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc);
      case 17:
        return f.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb);
      case 18:
        return e.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb);
      case 19:
        return d.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb, Nb);
      case 20:
        return c.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb, Nb, lc);
      case 21:
        return b.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb, Nb, lc, id);
      case 22:
        return a.call(this, x, S, V, W, Z, aa, ba, fa, la, na, qa, wa, Ca, Ea, Ma, kc, fb, tb, Nb, lc, id, Ke);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.a = ha;
  x.b = T;
  x.f = H;
  x.o = C;
  x.r = z;
  x.B = w;
  x.S = u;
  x.T = t;
  x.U = r;
  x.H = q;
  x.I = p;
  x.J = n;
  x.K = m;
  x.L = l;
  x.M = k;
  x.N = g;
  x.O = f;
  x.P = e;
  x.Q = d;
  x.R = c;
  x.gb = b;
  x.Ja = a;
  return x;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Ga(b)));
};
h.l = function() {
  var a = this.e.l ? this.e.l() : this.e.call(null), b = X(this, a);
  y(b) || U(this.name, a);
  return b.l ? b.l() : b.call(null);
};
h.a = function(a) {
  var b = this.e.a ? this.e.a(a) : this.e.call(null, a), c = X(this, b);
  y(c) || U(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.b = function(a, b) {
  var c = this.e.b ? this.e.b(a, b) : this.e.call(null, a, b), d = X(this, c);
  y(d) || U(this.name, c);
  return d.b ? d.b(a, b) : d.call(null, a, b);
};
h.f = function(a, b, c) {
  var d = this.e.f ? this.e.f(a, b, c) : this.e.call(null, a, b, c), e = X(this, d);
  y(e) || U(this.name, d);
  return e.f ? e.f(a, b, c) : e.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  var e = this.e.o ? this.e.o(a, b, c, d) : this.e.call(null, a, b, c, d), f = X(this, e);
  y(f) || U(this.name, e);
  return f.o ? f.o(a, b, c, d) : f.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  var f = this.e.r ? this.e.r(a, b, c, d, e) : this.e.call(null, a, b, c, d, e), g = X(this, f);
  y(g) || U(this.name, f);
  return g.r ? g.r(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.B = function(a, b, c, d, e, f) {
  var g = this.e.B ? this.e.B(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f), k = X(this, g);
  y(k) || U(this.name, g);
  return k.B ? k.B(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.S = function(a, b, c, d, e, f, g) {
  var k = this.e.S ? this.e.S(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g), l = X(this, k);
  y(l) || U(this.name, k);
  return l.S ? l.S(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.T = function(a, b, c, d, e, f, g, k) {
  var l = this.e.T ? this.e.T(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k), m = X(this, l);
  y(m) || U(this.name, l);
  return m.T ? m.T(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.U = function(a, b, c, d, e, f, g, k, l) {
  var m = this.e.U ? this.e.U(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l), n = X(this, m);
  y(n) || U(this.name, m);
  return n.U ? n.U(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.H = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.e.H ? this.e.H(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m), p = X(this, n);
  y(p) || U(this.name, n);
  return p.H ? p.H(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.I = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.e.I ? this.e.I(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
  y(q) || U(this.name, p);
  return q.I ? q.I(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.J = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.e.J ? this.e.J(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
  y(r) || U(this.name, q);
  return r.J ? r.J(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.K = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.e.K ? this.e.K(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
  y(t) || U(this.name, r);
  return t.K ? t.K(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.L = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.e.L ? this.e.L(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), u = X(this, t);
  y(u) || U(this.name, t);
  return u.L ? u.L(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.M = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var u = this.e.M ? this.e.M(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), w = X(this, u);
  y(w) || U(this.name, u);
  return w.M ? w.M(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : w.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.N = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  var w = this.e.N ? this.e.N(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), z = X(this, w);
  y(z) || U(this.name, w);
  return z.N ? z.N(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : z.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.O = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) {
  var z = this.e.O ? this.e.O(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w), C = X(this, z);
  y(C) || U(this.name, z);
  return C.O ? C.O(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : C.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
};
h.P = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) {
  var C = this.e.P ? this.e.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z), H = X(this, C);
  y(H) || U(this.name, C);
  return H.P ? H.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z) : H.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) {
  var H = this.e.Q ? this.e.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C), T = X(this, H);
  y(T) || U(this.name, H);
  return T.Q ? T.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C) : T.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) {
  var T = this.e.R ? this.e.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H), ha = X(this, T);
  y(ha) || U(this.name, T);
  return ha.R ? ha.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H) : ha.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H);
};
h.gb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T) {
  var ha = Bd(this.e, a, b, c, d, uc([e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T], 0)), x = X(this, ha);
  y(x) || U(this.name, ha);
  return Bd(x, a, b, c, d, uc([e, f, g, k, l, m, n, p, q, r, t, u, w, z, C, H, T], 0));
};
function Pf(a, b, c) {
  Kd.o(a.Ta, M, b, c);
  Kf(a.$a, a.Ta, a.Ua, a.Za);
}
function X(a, b) {
  $b.b(function() {
    var b = a.Ua;
    return J.a ? J.a(b) : J.call(null, b);
  }(), function() {
    var b = a.Za;
    return J.a ? J.a(b) : J.call(null, b);
  }()) || Kf(a.$a, a.Ta, a.Ua, a.Za);
  var c = function() {
    var b = a.$a;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, b);
  if (y(c)) {
    return c;
  }
  c = Nf(a.name, b, a.Za, a.Ta, a.Jb, a.$a, a.Ua);
  return y(c) ? c : function() {
    var b = a.Ta;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, a.Ib);
}
h.Ma = function() {
  return Db(this.name);
};
h.Na = function() {
  return Eb(this.name);
};
h.w = function() {
  return this[ea] || (this[ea] = ++ga);
};
var Qf = new N(null, "bullets", "bullets", 1734809024), Rf = new N(null, "p2", "p2", 905500641), Sf = new N(null, "r", "r", -471384190), Tf = new N(null, "v", "v", 21465059), va = new N(null, "meta", "meta", 1499536964), Vd = new N(null, "enemy-spawn", "enemy-spawn", 1471569540), xa = new N(null, "dup", "dup", 556298533), Uf = new N(null, "dir", "dir", 1734754661), Vf = new N(null, "ammo", "ammo", -1520726489), Hd = new N(null, "validator", "validator", -1966190681), Wf = new N(null, "default", "default", 
-1987822328), Xf = new N(null, "w", "w", 354169001), Yf = new N(null, "th", "th", -545608566), Zf = new N(null, "th1", "th1", 583362347), Rd = new N(null, "pos", "pos", -864607220), $f = new N(null, "type", "type", 1174270348), ag = new N(null, "th2", "th2", 1996173036), bg = new N(null, "cooldown", "cooldown", -1178127572), Af = new N(null, "fallback-impl", "fallback-impl", -1501286995), ta = new N(null, "flush-on-newline", "flush-on-newline", -151457939), cg = new N(null, "p1", "p1", -936759954), 
dg = new N(null, "chunks", "chunks", 83720431), Gf = new N(null, "descendants", "descendants", 1824886031), eg = new N(null, "k", "k", -2146297393), fg = new N("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Hf = new N(null, "ancestors", "ancestors", -776045424), gg = new N(null, "level", "level", 1290497552), ua = new N(null, "readably", "readably", 1129599760), sf = new N(null, "more-marker", "more-marker", -14717935), hg = new N(null, "head", "head", -771383919), ig = new N(null, 
"c", "c", -1763192079), za = new N(null, "print-length", "print-length", 1931866356), jg = new N(null, "terrain", "terrain", 704966005), Ff = new N(null, "parents", "parents", -2027538891), kg = new N(null, "b", "b", 1482224470), lg = new N(null, "health", "health", -295520649), Qd = new N(null, "player", "player", -97687400), mg = new N(null, "x", "x", 2099068185), ng = new N(null, "enemies", "enemies", 2114285722), og = new N(null, "draw", "draw", 1358331674), pg = new N(null, "hierarchy", "hierarchy", 
-1053470341), zf = new N(null, "alt-impl", "alt-impl", 670969595), qg = new N(null, "barrel-change", "barrel-change", -347000069), rg = new N(null, "temperature", "temperature", 899018429), sg = new N("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), tg = new N(null, "left", "left", -399115937);
function ug(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c - e, d - f];
}
function vg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c + e, d + f];
}
function xg(a, b) {
  var c = K(b, 0), d = K(b, 1);
  return[a * c, a * d];
}
function yg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return c * e + d * f;
}
function zg(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.sqrt(b * b + a * a);
}
function Ag(a) {
  return xg(1 / zg(a), a);
}
function Bg(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.atan2(a, b);
}
;var Cg = function Cg() {
  return Cg.k(arguments[0], 1 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Cg.k = function(a, b) {
  var c = K(b, 0), d = K(c, 0), c = K(c, 1);
  dd(b);
  a.beginPath();
  a.moveTo(d, c);
  for (var d = F(b), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var k = e.D(null, g), c = K(k, 0), k = K(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = F(d)) {
        Nc(d) ? (e = Ab(d), d = Bb(d), c = e, f = yc(e), e = c) : (e = G(d), c = K(e, 0), k = K(e, 1), a.lineTo(c, k), d = I(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
Cg.u = 1;
Cg.t = function(a) {
  var b = G(a);
  a = I(a);
  return Cg.k(b, a);
};
var Dg = function Dg() {
  return Dg.k(arguments[0], 1 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Dg.k = function(a, b) {
  zd(Cg, a, b);
  return a.stroke();
};
Dg.u = 1;
Dg.t = function(a) {
  var b = G(a);
  a = I(a);
  return Dg.k(b, a);
};
function Eg(a, b, c) {
  var d = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(d, b, c, 0, 2 * Math.PI);
  return a.stroke();
}
function Fg(a, b, c, d, e) {
  var f = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function Gg(a, b) {
  a.save();
  try {
    return b.l ? b.l() : b.call(null);
  } finally {
    a.restore();
  }
}
;var Hg = 2 * Math.PI;
if ("undefined" === typeof Ig) {
  var Ig = function() {
    var a = O ? O(R) : Fd.call(null, R), b = O ? O(R) : Fd.call(null, R), c = O ? O(R) : Fd.call(null, R), d = O ? O(R) : Fd.call(null, R), e = Dc(R, pg, Ef());
    return new Of(Wb("draw-segment"), function() {
      return function(a, b) {
        return $f.a(b);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(Ig, sg, function(a, b) {
  var c = Rc(b) ? yd(Gd, b) : b, d = L(c, cg), c = L(c, Rf);
  return Dg.k(a, uc([d, c], 0));
});
Pf(Ig, fg, function(a, b) {
  var c = Rc(b) ? yd(Gd, b) : b, d = L(c, ig), e = L(c, Zf), f = L(c, ag), g = L(c, Uf), c = L(c, Sf);
  return 0 > g ? Fg(a, d, c, f, e) : Fg(a, d, c, e, f);
});
if ("undefined" === typeof Jg) {
  var Jg = function() {
    var a = O ? O(R) : Fd.call(null, R), b = O ? O(R) : Fd.call(null, R), c = O ? O(R) : Fd.call(null, R), d = O ? O(R) : Fd.call(null, R), e = Dc(R, pg, Ef());
    return new Of(Wb("update-seg"), function() {
      return function(a) {
        return $f.a(a);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(Jg, sg, function(a, b, c) {
  a = Rc(a) ? yd(Gd, a) : a;
  var d = L(a, Uf);
  b = xg(b, d);
  return Wd(a, $b.b(c, hg) ? Rf : cg, vg, b);
});
Pf(Jg, fg, function(a, b, c) {
  a = Rc(a) ? yd(Gd, a) : a;
  var d = L(a, Uf), e = L(a, Sf);
  b = b / e * d;
  return Wd(a, $b.b(c, hg) ? ag : Zf, $c, b);
});
if ("undefined" === typeof Kg) {
  var Kg = function() {
    var a = O ? O(R) : Fd.call(null, R), b = O ? O(R) : Fd.call(null, R), c = O ? O(R) : Fd.call(null, R), d = O ? O(R) : Fd.call(null, R), e = Dc(R, pg, Ef());
    return new Of(Wb("seg-normal"), function() {
      return function(a) {
        return $f.a(a);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(Kg, sg, function(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, Uf), c = K(d, 0), d = K(d, 1);
  return $b.b(b, tg) ? [-d, c] : [d, -c];
});
Pf(Kg, fg, function(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a;
  L(c, Zf);
  var d = L(c, ag), c = L(c, Uf) * ($b.b(b, tg) ? -1 : 1);
  return xg(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Lg) {
  var Lg, Mg = O ? O(R) : Fd.call(null, R), Ng = O ? O(R) : Fd.call(null, R), Og = O ? O(R) : Fd.call(null, R), Pg = O ? O(R) : Fd.call(null, R), Qg = Dc(R, pg, Ef());
  Lg = new Of(Wb("seg-endpoint"), $f, Wf, Qg, Mg, Ng, Og, Pg);
}
Pf(Lg, sg, function(a) {
  return Rf.a(a);
});
Pf(Lg, fg, function(a) {
  var b = Rc(a) ? yd(Gd, a) : a;
  L(b, Zf);
  a = L(b, ag);
  var c = L(b, ig), b = L(b, Sf);
  return vg(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Rg(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, Zf), e = L(c, ag), c = L(c, Uf);
  if (c * (e - d) > Hg) {
    return!0;
  }
  var f = (b % Hg + Hg) % Hg, d = (d % Hg + Hg) % Hg, e = (e % Hg + Hg) % Hg;
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Hg : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Hg;
}
if ("undefined" === typeof Sg) {
  var Sg = function() {
    var a = O ? O(R) : Fd.call(null, R), b = O ? O(R) : Fd.call(null, R), c = O ? O(R) : Fd.call(null, R), d = O ? O(R) : Fd.call(null, R), e = Dc(R, pg, Ef());
    return new Of(Wb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [$f.a(a), $f.a(b)], null);
      };
    }(a, b, c, d, e), Wf, e, a, b, c, d);
  }()
}
Pf(Sg, new P(null, 2, 5, Q, [sg, sg], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [cg.a(a), Rf.a(a)], null);
  c = new P(null, 2, 5, Q, [cg.a(b), Rf.a(b)], null);
  var e = K(d, 0), d = K(d, 1), f = K(c, 0), g = K(c, 1), d = ug(d, e);
  c = K(d, 0);
  var d = K(d, 1), k = ug(g, f), g = K(k, 0), k = K(k, 1), f = ug(f, e), e = K(f, 0), f = K(f, 1), l = -1 * c * k - -1 * d * g;
  c = $b.b(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = K(c, 0);
  d = K(c, 1);
  return y(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Pf(Sg, new P(null, 2, 5, Q, [sg, fg], null), function(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, cg), c = L(c, Rf), e = Rc(b) ? yd(Gd, b) : b, f = L(e, Sf);
  var g = L(e, ig), c = ug(c, d), e = yg(c, c), d = ug(d, g), g = yg(d, d), k = yg(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-yg(c, d) - g) / e, e = (-yg(c, d) + g) / e, g = Bg(vg(xg(f, c), d)), c = Bg(vg(xg(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = K(f, 0);
  e = K(f, 1);
  d = K(f, 2);
  c = K(f, 3);
  return y(f) ? (d = (f = 0 < g && 1 > g) ? Rg(b, d) : f, y(d) ? d : (e = 0 < e && 1 > e) ? Rg(b, c) : e) : f;
});
Pf(Sg, new P(null, 2, 5, Q, [fg, sg], null), function(a, b) {
  return Sg.b ? Sg.b(b, a) : Sg.call(null, b, a);
});
Pf(Sg, new P(null, 2, 5, Q, [fg, fg], null), function(a, b) {
  var c;
  var d = ig.a(a), e = Sf.a(a);
  c = ig.a(b);
  var f = Sf.a(b), g = ug(c, d), d = K(g, 0);
  c = K(g, 1);
  g = yg(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = K(c, 0);
  d = K(c, 1);
  f = K(c, 2);
  e = K(c, 3);
  return y(c) ? (c = Rg(a, g), d = y(c) ? c : Rg(a, d), y(d) ? (f = Rg(b, f), y(f) ? f : Rg(b, e)) : d) : c;
});
O || Fd.call(null, null);
var Tg = new sa(null, 1, [gg, 0], null);
O || Fd.call(null, Tg);
document.createElement("button").textContent = "Pause";
var Ug, Vg, Wg = bd(3 * (window.innerWidth - 20), 4);
Vg = 1280 < Wg ? 1280 : Wg;
var Xg = bd(4 * (window.innerHeight - 10), 3);
Ug = Vg < Xg ? Vg : Xg;
var Yg = bd(3 * Ug, 4), Zg = document.createElement("canvas");
y(Ug) && Zg.setAttribute("width", Ug);
y(Yg) && Zg.setAttribute("height", Yg);
Zg.setAttribute("style", "border: 1px solid #000; display: block;");
Zg.getContext("2d");
var $g = document.createElement("canvas");
$g.setAttribute("width", 1280);
$g.setAttribute("height", 960);
$g.setAttribute("style", "border: 1px solid #000");
$g.getContext("2d");
var ah = new P(null, 2, 5, Q, [0, 0], null);
O || Fd.call(null, ah);
var bh = 2 * Math.PI, ch = document.createElement("button");
ch.textContent = "Pause";
var dh, eh, fh = bd(3 * (window.innerWidth - 20), 4);
eh = 1280 < fh ? 1280 : fh;
var gh = bd(4 * (window.innerHeight - 10), 3);
dh = eh < gh ? eh : gh;
var hh = bd(3 * dh, 4), ih = document.createElement("canvas");
y(dh) && ih.setAttribute("width", dh);
y(hh) && ih.setAttribute("height", hh);
ih.setAttribute("style", "border: 1px solid #000; display: block;");
var jh = document.createElement("div"), Y = ih.getContext("2d");
function kh() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(ch);
    a.appendChild(jh);
    return a;
  }());
  return a.appendChild(ih);
}
da("figwheel_test.common.init_elements", kh);
function lh(a) {
  Gg(Y, function() {
    if (y(!0)) {
      var b = Y.canvas;
      Y.clearRect(0, 0, b.width, b.height);
    }
    Y.translate(640, 480);
    Y.scale(1, -1);
    return a.l ? a.l() : a.call(null);
  });
}
function mh() {
  for (var a = new P(null, 3, 5, Q, [Cc(500) - 250, -215, Cc(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = vd.b(Md(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (Cf() - .5) * b], null);
        };
      }(a, b, c), uc([a, Yb(a)], 0)), new P(null, 1, 5, Q, [vc(a)], null)), b /= 2, --c;
    } else {
      return me(a);
    }
  }
}
function nh(a) {
  var b = yc(a) / 2;
  return Vc(function() {
    return function(a, b) {
      return M.f(a, b, -215);
    };
  }(b), a, new pf(null, b - 4, b + 4, 1, null));
}
function oh() {
  var a = mh(), b = yc(a) - 1;
  return me(Dd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), nh(a)));
}
function ph(a) {
  return 0 < lg.a(Qd.a(a));
}
var qh = function(a) {
  return function() {
    return Kd.b(a, function() {
      return function(a) {
        return((a + 1) % 1E5 + 1E5) % 1E5;
      };
    }(a));
  };
}(O ? O(0) : Fd.call(null, 0));
function rh(a, b, c) {
  b = [Math.cos(b), Math.sin(b)];
  return Xd(a, Qf, M, qh.l ? qh.l() : qh.call(null), new sa(null, 2, [mg, vg(c, xg(50, b)), Tf, xg(15, b)], null));
}
function sh(a) {
  var b = new P(null, 1, 5, Q, [Qd], null), c = J.a ? J.a(th) : J.call(null, th), d = J.a ? J.a(uh) : J.call(null, uh), e = Pd(a, b), e = Rc(e) ? yd(Gd, e) : e, f = L(e, qg), g = L(e, rg), k = L(e, Vf), l = L(e, Xf), m = L(e, Yf), n = L(e, bg), p = L(e, Rd), q = L(e, eg), r = L(e, kg), t = L(e, lg), u = new P(null, 2, 5, Q, [Math.cos(m), Math.sin(m)], null), w = function() {
    var a;
    a = K(u, 0);
    var b = K(u, 1), d = K(c, 0), e = K(c, 1);
    a = a * e - d * b;
    b = yg(u, c);
    return Math.atan2(a, b);
  }(), q = l + q * w + -1 * l * r, z = m + l, l = function() {
    var a = $b.b(n, 0);
    return a && (a = $b.b(f, 0)) ? (a = 0 < k) ? y(d) ? 0 < t : d : a : a;
  }(), g = y(l) ? g + 3 : .995 * g;
  return Sd(y(l) ? rh(a, m, p) : a, b, M.f(M.f(M.f(M.f(M.f(M.f(e, bg, y(l) ? 5 : function() {
    var a = n - 1;
    return 0 < a ? a : 0;
  }()), rg, g), qg, 100 < g ? 600 : function() {
    var a = f - 1;
    return 0 < a ? a : 0;
  }()), Vf, y(l) ? k - 1 : k), Xf, 0 > z || z > bh / 2 ? 0 : q), Yf, function() {
    var a = 0 < z ? z : 0, b = bh / 2;
    return a < b ? a : b;
  }()));
}
function vh(a) {
  var b = Rc(a) ? yd(Gd, a) : a, c = L(b, Yf), d = L(b, bg), e = L(b, Rd), f = L(b, lg);
  Gg(Y, function(a, b, c, d, e, f) {
    return function() {
      var q = K(e, 0), r = K(e, 1);
      Y.translate(q, r);
      return 0 < f ? (Gg(Y, function(a, b, c, d, e, f, g) {
        return function() {
          Y.rotate(f);
          Dg.k(Y, uc([new P(null, 2, 5, Q, [20, -3], null), new P(null, 2, 5, Q, [20, 3], null), new P(null, 2, 5, Q, [40, 3], null), new P(null, 2, 5, Q, [40, -3], null), new P(null, 2, 5, Q, [20, -3], null)], 0));
          return $b.b(g, 5) ? Eg(Y, new P(null, 2, 5, Q, [50, 0], null), 10) : null;
        };
      }(e, q, r, a, b, c, d, e, f)), Y.fillStyle = "#fff", Y.beginPath(), Y.arc(0, 0, 30, bh / -12, 7 * bh / 12), Y.lineTo(15 * Math.sqrt(3), -15), Y.fill(), Y.stroke()) : Dg.k(Y, uc([new P(null, 2, 5, Q, [-24, -15], null), new P(null, 2, 5, Q, [-28, -3], null), new P(null, 2, 5, Q, [-21, -4], null), new P(null, 2, 5, Q, [-14, 5], null), new P(null, 2, 5, Q, [4, -4], null), new P(null, 2, 5, Q, [11, 3], null), new P(null, 2, 5, Q, [25, 0], null), new P(null, 2, 5, Q, [30, 4], null), new P(null, 2, 
      5, Q, [28, -15], null), new P(null, 2, 5, Q, [-24, -15], null)], 0));
    };
  }(a, b, c, d, e, f));
}
function wh(a, b) {
  return Vc(function(b, d) {
    var e = K(d, 0), f = K(d, 1), g, k = mg.a(a);
    g = ug(Tf.a(a), Tf.a(f));
    f = mg.a(f);
    f = ug(k, f);
    k = yg(g, g);
    g = 2 * yg(f, g);
    f = yg(f, f) - 100;
    f = g * g - 4 * k * f;
    g = 0 < f ? (-g - Math.sqrt(f)) / (2 * k) : null;
    return y(y(g) ? 0 < g && 1 > g : g) ? Ba(b) || g < G(I(b)) ? [e, g] : b : b;
  }, null, b);
}
function xh(a, b, c, d) {
  d = Rc(d) ? yd(Gd, d) : d;
  var e = L(d, mg), f = L(d, Tf);
  var g = K(e, 0), k = K(e, 1);
  if (g = 640 < Math.abs(g)) {
    e = g;
  } else {
    if (k = 480 < Math.abs(k)) {
      e = k;
    } else {
      var k = vg(e, f), g = jg.a(a), e = K(k, 0), k = K(k, 1), l = 1280 / (yc(g) - 1), m = bd(640 + e, l);
      if (0 <= m && m < yc(g) - 1) {
        var l = g.a ? g.a(m) : g.call(null, m), m = m + 1, m = g.a ? g.a(m) : g.call(null, m), g = K(l, 0), l = K(l, 1), n = K(m, 0), m = K(m, 1), e = k < l + (e - g) * (m - l) / (n - g)
      } else {
        e = !1;
      }
    }
  }
  return y(e) ? Wd(a, b, Fc, c) : Sd(a, new P(null, 2, 5, Q, [b, c], null), Wd(Wd(d, Tf, vg, new P(null, 2, 5, Q, [0, -.1], null)), mg, vg, f));
}
function yh(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, mg), c = L(c, Tf);
  return Dg.k(b, uc([d, ug(d, c)], 0));
}
var Bc = new P(null, 3, 5, Q, [function(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, mg);
  return Gg(b, function(a, c, d) {
    return function() {
      b.translate(G(d), G(I(d)));
      return b.fillRect(-2.5, -2.5, 5, 5);
    };
  }(a, c, d));
}, yh, function(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, c = L(c, mg);
  return Eg(b, c, 2);
}], null);
function zh(a, b, c, d, e) {
  return Vc(function(a) {
    var c = Cf() * (e - d) + d, k = Cf() * (2 * bh / 3) - bh / 12;
    return Wd(a, dg, wc, new P(null, 2, 5, Q, [qh.l ? qh.l() : qh.call(null), new sa(null, 3, [mg, b, Tf, [c * Math.cos(k), c * Math.sin(k)], og, Ac()], null)], null));
  }, a, new pf(null, 0, c, 1, null));
}
function Ah(a, b, c) {
  var d = Rc(c) ? yd(Gd, c) : c;
  c = L(d, mg);
  var e = L(d, Tf), f = wh(d, ng.a(a));
  return y(f) ? (d = K(f, 0), K(f, 1), zh(Wd(Td.f(Td.o(a, new P(null, 3, 5, Q, [ng, d, Tf], null), vg, xg(.25, e)), new P(null, 3, 5, Q, [ng, d, lg], null), ad), Qf, Fc, b), c, 4, 4, 8)) : xh(a, Qf, b, d);
}
function Bh(a, b, c) {
  return xh(a, dg, b, c);
}
function Ch(a, b) {
  var c = Rc(a) ? yd(Gd, a) : a, d = L(c, mg), e = L(c, Tf), f = 1280 / (yc(b) - 1), g = K(d, 0), k = K(d, 1), l = G(e), m = bd(640 + g + (0 < l ? -10 : 10), f), n = bd(640 + g + G(e) + (0 < l ? 10 : -10), f), p = m < n ? m : n, q = m > n ? m : n, r = qf(0 < p ? p : 0, function() {
    var a = q + 1, c = yc(b) - 1;
    return a < c ? a : c;
  }());
  return Vc(function(a, c, d, e, f, g, k, l, m, n, p, q, r, Z, aa) {
    return function(a, c) {
      K(a, 0);
      var d = K(a, 1), e = b.a ? b.a(c) : b.call(null, c), g;
      g = c + 1;
      g = b.a ? b.a(g) : b.call(null, g);
      a: {
        for (var k = 0, l = f;;) {
          var m, n = l;
          m = aa;
          var p = e, q = ug(g, p), r = yg(ug(p, n), q) / yg(q, q) * -1, r = 1 < r ? 1 : r, p = vg(p, xg(0 > r ? 0 : r, q)), p = ug(p, n), q = zg(p), n = q - 10;
          m = yg(m, p) / q;
          m = .001 > Math.abs(m) ? null : n / m;
          if (null == m) {
            e = null;
            break a;
          }
          if (.01 > Math.abs(m)) {
            e = k;
            break a;
          }
          if (0 > m || 1 < k + m) {
            e = null;
            break a;
          }
          k += m;
          l = vg(l, xg(m, aa));
        }
      }
      return y(y(e) ? null == a || e < d : e) ? new P(null, 2, 5, Q, [c, e], null) : a;
    };
  }(f, d, g, k, d, l, m, n, p, q, r, a, c, d, e), null, r);
}
function Dh(a, b, c) {
  c = Rc(c) ? yd(Gd, c) : c;
  c = L(c, mg);
  return zh(Wd(a, ng, Fc, b), c, 15, 6, 12);
}
function Eh(a, b, c) {
  c = Rc(c) ? yd(Gd, c) : c;
  var d = L(c, mg), e = L(c, Tf), f = L(c, Xf), g = L(c, lg);
  if (function() {
    var a = K(d, 0), b = K(d, 1);
    return 640 < Math.abs(a) || 480 < Math.abs(b);
  }()) {
    return Wd(a, ng, Fc, b);
  }
  if (-3 > g) {
    return Dh(a, b, c);
  }
  if (y(function() {
    var b = ph(a);
    y(b) && (b = ug(d, Rd.a(Qd.a(a))), b = 1600 > yg(b, b));
    return b;
  }())) {
    return Td.f(Dh(a, b, c), new P(null, 2, 5, Q, [Qd, lg], null), ad);
  }
  var k = Ch(c, jg.a(a));
  if (y(k)) {
    var l = K(k, 0), f = K(k, 1), m = jg.a(a), n = ug(function() {
      var a = l + 1;
      return m.a ? m.a(a) : m.call(null, a);
    }(), m.a ? m.a(l) : m.call(null, l)), k = K(n, 0), n = K(n, 1), k = Ag(new P(null, 2, 5, Q, [-n, k], null)), p = yg(k, e);
    return 0 >= g ? Dh(a, b, c) : Sd(a, new P(null, 2, 5, Q, [ng, b], null), Wd(Wd(c, mg, vg, vg(xg(f, e), xg(.1, k))), Tf, vg, xg(-p + function() {
      var a = -.5 * p, b = 2 + 3 * Cf();
      return a > b ? a : b;
    }(), k)));
  }
  return Sd(a, new P(null, 2, 5, Q, [ng, b], null), Wd(Wd(Wd(c, Yf, $c, f), Tf, vg, new P(null, 2, 5, Q, [0, -.1], null)), mg, vg, e));
}
function Fh(a) {
  var b = Rc(a) ? yd(Gd, a) : a, c = L(b, mg), d = L(b, Yf);
  return Gg(Y, function(a, b, c, d) {
    return function() {
      Y.translate(G(c), G(I(c)));
      Y.rotate(d);
      Y.fillStyle = "#ffffff";
      Y.beginPath();
      Y.arc(0, 0, 10, 0, bh);
      Y.fill();
      Y.stroke();
      Eg(Y, [-3, 2], 2);
      Eg(Y, [3, 2], 2);
      Dg.k(Y, uc([[-3, -5], [3, -5]], 0));
      Dg.k(Y, uc([[0, 10], [0, 13]], 0));
      return Eg(Y, [0, 15], 2);
    };
  }(a, b, c, d));
}
function Gh() {
  return new sa(null, 6, [Qf, R, jg, oh(), ng, R, dg, R, Vd, 60, Qd, Ec([Vf, Xf, Yf, Rd, bg, eg, kg, lg, qg, rg], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
}
var Hh = O ? O(!1) : Fd.call(null, !1), th, Ih = new P(null, 2, 5, Q, [1, 0], null);
th = O ? O(Ih) : Fd.call(null, Ih);
var Jh, Kh = Gh();
Jh = O ? O(Kh) : Fd.call(null, Kh);
var uh = O ? O(!1) : Fd.call(null, !1);
function Lh(a, b, c) {
  b = b.a ? b.a(a) : b.call(null, a);
  return null != b ? jb(b, c, a) : a;
}
function Mh(a) {
  var b;
  b = Lh(Lh(Lh(sh(a), Qf, Ah), ng, Eh), dg, Bh);
  b = Rc(b) ? yd(Gd, b) : b;
  var c = L(b, Vd);
  if (y(ph(b))) {
    if ($b.b(c, 0)) {
      var c = [640 * Cf() - 320, 480], d = [(0 > G(c) ? 4 : -4) * Cf(), -2 * Cf()];
      b = M.f(b, Vd, Cc(300) + 60);
      b = Xd(b, ng, M, qh.l ? qh.l() : qh.call(null), new sa(null, 5, [mg, c, Tf, d, Xf, 0, Yf, 0, lg, 3], null));
    } else {
      b = Ud(b);
    }
  }
  a = (c = Ba(ph(b))) ? ph(a) : c;
  return y(a) ? (ch.textContent = "Restart", zh(b, Od(b), 20, 10, 20)) : b;
}
function Nh() {
  var a = J.a ? J.a(Jh) : J.call(null, Jh);
  lh(function() {
    vh(Qd.a(a));
    Bf(function(a) {
      K(a, 0);
      a = K(a, 1);
      return yh(a, Y);
    }, Qf.a(a));
    Bf(function(a) {
      K(a, 0);
      a = K(a, 1);
      return Fh(a);
    }, ng.a(a));
    Bf(function(a) {
      K(a, 0);
      a = K(a, 1);
      a = Rc(a) ? yd(Gd, a) : a;
      var c = L(a, og);
      return c.b ? c.b(a, Y) : c.call(null, a, Y);
    }, dg.a(a));
    zd(Dg, Y, jg.a(a));
    Y.fillRect(-630, 370, 10, rg.a(Qd.a(a)));
    Y.strokeRect(-630, 370, 10, 100);
    Y.fillRect(-610, 370, 10, qg.a(Qd.a(a)) / 6);
    Y.font = "10px serif";
    Y.translate(-630, 350);
    Y.scale(1, -1);
    return Y.fillText([D("Ammo: "), D(Vf.a(Qd.a(a)))].join(""), 0, 0);
  });
}
var Oh = function Oh() {
  Id.b ? Id.b(Hh, !1) : Id.call(null, Hh, !1);
  ch.textContent = "Pause";
  window.onmousemove = function(b) {
    var c;
    a: {
      var d = ih;
      c = ih.offsetLeft;
      for (var e = ih.offsetTop;;) {
        if (d = d.offsetParent, y(d)) {
          c += d.offsetLeft, e += d.offsetTop;
        } else {
          c = [c, e];
          break a;
        }
      }
    }
    b = ug(new P(null, 2, 5, Q, [b.pageX, b.pageY], null), c);
    c = ug(b, new P(null, 2, 5, Q, [640, 480], null));
    b = K(c, 0);
    c = K(c, 1);
    b = ug(new P(null, 2, 5, Q, [b, -c], null), Od(J.a ? J.a(Jh) : J.call(null, Jh)));
    return Id.b ? Id.b(th, b) : Id.call(null, th, b);
  };
  ch.onclick = function() {
    if (y(ph(J.a ? J.a(Jh) : J.call(null, Jh)))) {
      return ch.textContent = "Resume", Id.b ? Id.b(Hh, !0) : Id.call(null, Hh, !0), window.onmousemove = null, ch.onclick = Oh;
    }
    var b = Gh();
    Id.b ? Id.b(Jh, b) : Id.call(null, Jh, b);
    return ch.textContent = "Pause";
  };
  ih.onmousedown = function() {
    Id.b ? Id.b(uh, !0) : Id.call(null, uh, !0);
    return!1;
  };
  window.onmouseup = function() {
    Id.b ? Id.b(uh, !1) : Id.call(null, uh, !1);
    return!1;
  };
  return function c() {
    return Ba(J.a ? J.a(Hh) : J.call(null, Hh)) ? (Nh(), Kd.b(Jh, Mh), window.requestAnimationFrame(c)) : null;
  }.call(null);
};
da("figwheel_test.turret.init_everything", function() {
  kh();
  ch.textContent = "Start";
  return ch.onclick = Oh;
});

})();
