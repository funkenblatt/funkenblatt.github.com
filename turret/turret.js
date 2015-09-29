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
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
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
if ("undefined" === typeof la) {
  var la = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var oa = null;
if ("undefined" === typeof pa) {
  var pa = null
}
function qa() {
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
function z(a, b) {
  return a[v(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function A(a, b) {
  var c = null == b ? null : b.constructor, c = y(y(c) ? c.Hb : c) ? c.Gb : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Da(a) {
  var b = a.Gb;
  return y(b) ? b : "" + D(a);
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
var Ha = {}, Ia = {}, Ja = function Ja(b) {
  if (b ? b.da : b) {
    return b.da(b);
  }
  var c;
  c = Ja[v(null == b ? null : b)];
  if (!c && (c = Ja._, !c)) {
    throw A("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ka = function Ka(b) {
  if (b ? b.Z : b) {
    return b.Z(b);
  }
  var c;
  c = Ka[v(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw A("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, La = function La(b, c) {
  if (b ? b.G : b) {
    return b.G(b, c);
  }
  var d;
  d = La[v(null == b ? null : b)];
  if (!d && (d = La._, !d)) {
    throw A("ICollection.-conj", b);
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
    throw A("IIndexed.-nth", a);
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
    throw A("IIndexed.-nth", a);
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
    throw A("ISeq.-first", b);
  }
  return c.call(null, b);
}, Qa = function Qa(b) {
  if (b ? b.ja : b) {
    return b.ja(b);
  }
  var c;
  c = Qa[v(null == b ? null : b)];
  if (!c && (c = Qa._, !c)) {
    throw A("ISeq.-rest", b);
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
    throw A("ILookup.-lookup", a);
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
    throw A("ILookup.-lookup", a);
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
    throw A("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Va = {}, Wa = function Wa(b, c) {
  if (b ? b.hb : b) {
    return b.hb(b, c);
  }
  var d;
  d = Wa[v(null == b ? null : b)];
  if (!d && (d = Wa._, !d)) {
    throw A("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Xa = {}, Ya = function Ya(b) {
  if (b ? b.ib : b) {
    return b.ib();
  }
  var c;
  c = Ya[v(null == b ? null : b)];
  if (!c && (c = Ya._, !c)) {
    throw A("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Za = function Za(b) {
  if (b ? b.jb : b) {
    return b.jb();
  }
  var c;
  c = Za[v(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw A("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, $a = {}, ab = function ab(b, c, d) {
  if (b ? b.kb : b) {
    return b.kb(b, c, d);
  }
  var e;
  e = ab[v(null == b ? null : b)];
  if (!e && (e = ab._, !e)) {
    throw A("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, bb = function bb(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = bb[v(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw A("IDeref.-deref", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b) {
  if (b ? b.F : b) {
    return b.F(b);
  }
  var c;
  c = db[v(null == b ? null : b)];
  if (!c && (c = db._, !c)) {
    throw A("IMeta.-meta", b);
  }
  return c.call(null, b);
}, eb = {}, fb = function fb(b, c) {
  if (b ? b.X : b) {
    return b.X(b, c);
  }
  var d;
  d = fb[v(null == b ? null : b)];
  if (!d && (d = fb._, !d)) {
    throw A("IWithMeta.-with-meta", b);
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
    throw A("IReduce.-reduce", a);
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
    throw A("IReduce.-reduce", a);
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
    throw A("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, kb = function kb(b, c) {
  if (b ? b.n : b) {
    return b.n(b, c);
  }
  var d;
  d = kb[v(null == b ? null : b)];
  if (!d && (d = kb._, !d)) {
    throw A("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, lb = function lb(b) {
  if (b ? b.w : b) {
    return b.w(b);
  }
  var c;
  c = lb[v(null == b ? null : b)];
  if (!c && (c = lb._, !c)) {
    throw A("IHash.-hash", b);
  }
  return c.call(null, b);
}, mb = {}, nb = function nb(b) {
  if (b ? b.W : b) {
    return b.W(b);
  }
  var c;
  c = nb[v(null == b ? null : b)];
  if (!c && (c = nb._, !c)) {
    throw A("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, ob = {}, pb = function pb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = pb[v(null == b ? null : b)];
  if (!d && (d = pb._, !d)) {
    throw A("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, qb = {}, rb = function rb(b, c, d) {
  if (b ? b.A : b) {
    return b.A(b, c, d);
  }
  var e;
  e = rb[v(null == b ? null : b)];
  if (!e && (e = rb._, !e)) {
    throw A("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, sb = function sb(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = sb[v(null == b ? null : b)];
  if (!e && (e = sb._, !e)) {
    throw A("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, tb = function tb(b) {
  if (b ? b.Ia : b) {
    return b.Ia(b);
  }
  var c;
  c = tb[v(null == b ? null : b)];
  if (!c && (c = tb._, !c)) {
    throw A("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, ub = function ub(b, c) {
  if (b ? b.Wa : b) {
    return b.Wa(b, c);
  }
  var d;
  d = ub[v(null == b ? null : b)];
  if (!d && (d = ub._, !d)) {
    throw A("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, vb = function vb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = vb[v(null == b ? null : b)];
  if (!c && (c = vb._, !c)) {
    throw A("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, xb = function xb(b, c, d) {
  if (b ? b.Pa : b) {
    return b.Pa(b, c, d);
  }
  var e;
  e = xb[v(null == b ? null : b)];
  if (!e && (e = xb._, !e)) {
    throw A("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, yb = function yb(b, c, d) {
  if (b ? b.ob : b) {
    return b.ob(0, c, d);
  }
  var e;
  e = yb[v(null == b ? null : b)];
  if (!e && (e = yb._, !e)) {
    throw A("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, zb = function zb(b) {
  if (b ? b.lb : b) {
    return b.lb();
  }
  var c;
  c = zb[v(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw A("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b) {
  if (b ? b.eb : b) {
    return b.eb(b);
  }
  var c;
  c = Ab[v(null == b ? null : b)];
  if (!c && (c = Ab._, !c)) {
    throw A("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, Bb = function Bb(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = Bb[v(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw A("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b) {
  if (b ? b.cb : b) {
    return b.cb(b);
  }
  var c;
  c = Cb[v(null == b ? null : b)];
  if (!c && (c = Cb._, !c)) {
    throw A("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Db = function Db(b) {
  if (b ? b.Ma : b) {
    return b.Ma(b);
  }
  var c;
  c = Db[v(null == b ? null : b)];
  if (!c && (c = Db._, !c)) {
    throw A("INamed.-name", b);
  }
  return c.call(null, b);
}, Eb = function Eb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Eb[v(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw A("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Fb = function Fb(b, c) {
  if (b ? b.Bb : b) {
    return b.Bb(b, c);
  }
  var d;
  d = Fb[v(null == b ? null : b)];
  if (!d && (d = Fb._, !d)) {
    throw A("IReset.-reset!", b);
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
    throw A("ISwap.-swap!", a);
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
    throw A("ISwap.-swap!", a);
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
    throw A("ISwap.-swap!", a);
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
    throw A("ISwap.-swap!", a);
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
    throw A("IIterable.-iterator", b);
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
  a.A(null, new Ib(b), qa());
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
function Nb(a, b) {
  var c = (a | 0) ^ b, c = Kb(c ^ c >>> 16, -2048144789), c = Kb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Ob(a) {
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
  return Nb(b, Kb(2, a.length));
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
  a && (a.h & 4194304 || a.Nb) ? a = a.w(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Sb(a), 0 !== a && (a = Lb(a), a = Mb(0, a), a = Nb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : lb(a);
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
  return null != a ? a : this.Ca = a = Ub(Ob(this.name), Sb(this.Ga));
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
  if (z(mb, a)) {
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
function H(a) {
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
      if (H(c)) {
        a = b, b = G(c), c = H(c);
      } else {
        return $b.b(b, G(c));
      }
    } else {
      return!1;
    }
  }
};
$b.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return $b.k(b, a, c);
};
$b.u = 2;
function ac(a) {
  this.q = a;
}
ac.prototype.next = function() {
  if (null != this.q) {
    var a = G(this.q);
    this.q = H(this.q);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function bc(a) {
  return new ac(F(a));
}
function cc(a, b) {
  var c = Lb(a), c = Mb(0, c);
  return Nb(c, b);
}
function dc(a) {
  var b = 0, c = 1;
  for (a = F(a);;) {
    if (null != a) {
      b += 1, c = Kb(31, c) + Tb(G(a)) | 0, a = H(a);
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
      b += 1, c = c + Tb(G(a)) | 0, a = H(a);
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
  return a[ea] || (a[ea] = ++fa);
};
function hc(a) {
  return a + 1;
}
function J(a) {
  return bb(a);
}
function ic(a, b) {
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
function jc(a, b, c) {
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
function kc(a, b) {
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
function nc(a, b, c) {
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
function oc(a, b, c, d) {
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
function pc(a) {
  return a ? a.h & 2 || a.tb ? !0 : a.h ? !1 : z(Ia, a) : z(Ia, a);
}
function qc(a) {
  return a ? a.h & 16 || a.mb ? !0 : a.h ? !1 : z(Na, a) : z(Na, a);
}
function rc(a, b) {
  this.c = a;
  this.i = b;
}
rc.prototype.Ya = function() {
  return this.i < this.c.length;
};
rc.prototype.next = function() {
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
  return new rc(this.c, this.i);
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
  return sc.b ? sc.b(this, b) : sc.call(null, this, b);
};
h.Z = function() {
  return Zb;
};
h.aa = function(a, b) {
  return oc(this.c, b, this.c[this.i], this.i + 1);
};
h.ba = function(a, b, c) {
  return oc(this.c, b, c, this.i);
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
  return tc.b ? tc.b(b, this) : tc.call(null, b, this);
};
Xb.prototype[Ea] = function() {
  return bc(this);
};
function uc(a, b) {
  return b < a.length ? new Xb(a, b) : null;
}
function vc() {
  switch(arguments.length) {
    case 1:
      return uc(arguments[0], 0);
    case 2:
      return uc(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function wc(a) {
  for (;;) {
    var b = H(a);
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
var xc = function xc() {
  switch(arguments.length) {
    case 0:
      return xc.l();
    case 1:
      return xc.a(arguments[0]);
    case 2:
      return xc.b(arguments[0], arguments[1]);
    default:
      return xc.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
xc.l = function() {
  return yc;
};
xc.a = function(a) {
  return a;
};
xc.b = function(a, b) {
  return null != a ? La(a, b) : La(Zb, b);
};
xc.k = function(a, b, c) {
  for (;;) {
    if (y(c)) {
      a = xc.b(a, b), b = G(c), c = H(c);
    } else {
      return xc.b(a, b);
    }
  }
};
xc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return xc.k(b, a, c);
};
xc.u = 2;
function zc(a) {
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
          if (z(Ia, a)) {
            a = Ja(a);
          } else {
            a: {
              a = F(a);
              for (var b = 0;;) {
                if (pc(a)) {
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
function Ac(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return F(a) ? G(a) : c;
    }
    if (qc(a)) {
      return E.f(a, b, c);
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
function Bc() {
  var a = Cc, b = Dc(zc(Cc));
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
  if (z(Na, a)) {
    return E.b(a, b);
  }
  if (a ? a.h & 64 || a.Oa || (a.h ? 0 : z(Oa, a)) : z(Oa, a)) {
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
        if (qc(a)) {
          a = E.b(a, b);
          break a;
        }
        if (F(a)) {
          a = H(a), --b;
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
  if (z(Na, a)) {
    return E.b(a, b);
  }
  if (a ? a.h & 64 || a.Oa || (a.h ? 0 : z(Oa, a)) : z(Oa, a)) {
    return Ac(a, b);
  }
  throw Error([D("nth not supported on this type "), D(Da(null == a ? null : a.constructor))].join(""));
}
function L(a, b) {
  return null == a ? null : a && (a.h & 256 || a.nb) ? a.$(null, b) : Aa(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : z(Sa, a) ? Ta.b(a, b) : null;
}
function Ec(a, b, c) {
  return null != a ? a && (a.h & 256 || a.nb) ? a.C(null, b, c) : Aa(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : z(Sa, a) ? Ta.f(a, b, c) : c : c;
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
  return null != a ? Ua(a, b, c) : Fc([b], [c]);
};
M.k = function(a, b, c, d) {
  for (;;) {
    if (a = M.f(a, b, c), y(d)) {
      b = G(d), c = G(H(d)), d = H(H(d));
    } else {
      return a;
    }
  }
};
M.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), d = H(d);
  return M.k(b, a, c, d);
};
M.u = 3;
var Gc = function Gc() {
  switch(arguments.length) {
    case 1:
      return Gc.a(arguments[0]);
    case 2:
      return Gc.b(arguments[0], arguments[1]);
    default:
      return Gc.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Gc.a = function(a) {
  return a;
};
Gc.b = function(a, b) {
  return null == a ? null : Wa(a, b);
};
Gc.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = Gc.b(a, b);
    if (y(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
Gc.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return Gc.k(b, a, c);
};
Gc.u = 2;
function Hc(a) {
  var b = "function" == v(a);
  return y(b) ? b : a ? y(y(null) ? null : a.sb) ? !0 : a.Tb ? !1 : z(Ha, a) : z(Ha, a);
}
function Ic(a, b) {
  this.d = a;
  this.j = b;
  this.h = 393217;
  this.p = 0;
}
h = Ic.prototype;
h.F = function() {
  return this.j;
};
h.X = function(a, b) {
  return new Ic(this.d, b);
};
h.sb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I, U) {
    a = this.d;
    return Jc.Ja ? Jc.Ja(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I, U) : Jc.call(null, a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I, U);
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I) {
    a = this;
    return a.d.R ? a.d.R(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x, I);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x) {
    a = this;
    return a.d.Q ? a.d.Q(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B, x);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B) {
    a = this;
    return a.d.P ? a.d.P(b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B) : a.d.call(null, b, c, d, e, f, g, k, l, m, n, q, p, r, t, u, w, C, B);
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
  function B(a, b, c, d, e) {
    a = this;
    return a.d.o ? a.d.o(b, c, d, e) : a.d.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    return a.d.f ? a.d.f(b, c, d) : a.d.call(null, b, c, d);
  }
  function I(a, b, c) {
    a = this;
    return a.d.b ? a.d.b(b, c) : a.d.call(null, b, c);
  }
  function U(a, b) {
    a = this;
    return a.d.a ? a.d.a(b) : a.d.call(null, b);
  }
  function ha(a) {
    a = this;
    return a.d.l ? a.d.l() : a.d.call(null);
  }
  var x = null, x = function(ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb, Pb, mc, kd, Le) {
    switch(arguments.length) {
      case 1:
        return ha.call(this, ya);
      case 2:
        return U.call(this, ya, T);
      case 3:
        return I.call(this, ya, T, V);
      case 4:
        return C.call(this, ya, T, V, W);
      case 5:
        return B.call(this, ya, T, V, W, Z);
      case 6:
        return w.call(this, ya, T, V, W, Z, aa);
      case 7:
        return u.call(this, ya, T, V, W, Z, aa, ba);
      case 8:
        return t.call(this, ya, T, V, W, Z, aa, ba, ga);
      case 9:
        return r.call(this, ya, T, V, W, Z, aa, ba, ga, ma);
      case 10:
        return q.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na);
      case 11:
        return p.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra);
      case 12:
        return n.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa);
      case 13:
        return m.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca);
      case 14:
        return l.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa);
      case 15:
        return k.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma);
      case 16:
        return g.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x);
      case 17:
        return f.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb);
      case 18:
        return e.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb);
      case 19:
        return d.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb, Pb);
      case 20:
        return c.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb, Pb, mc);
      case 21:
        return b.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb, Pb, mc, kd);
      case 22:
        return a.call(this, ya, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, x, gb, wb, Pb, mc, kd, Le);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.a = ha;
  x.b = U;
  x.f = I;
  x.o = C;
  x.r = B;
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
h.P = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) {
  return this.d.P ? this.d.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) {
  return this.d.Q ? this.d.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) {
  return this.d.R ? this.d.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) : this.d.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I);
};
h.gb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U) {
  var ha = this.d;
  return Jc.Ja ? Jc.Ja(ha, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U) : Jc.call(null, ha, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U);
};
function Kc(a, b) {
  return Hc(a) && !(a ? a.h & 262144 || a.Rb || (a.h ? 0 : z(eb, a)) : z(eb, a)) ? new Ic(a, b) : null == a ? null : fb(a, b);
}
function Lc(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.yb || (a.h ? 0 : z(cb, a)) : z(cb, a) : b) ? db(a) : null;
}
function Mc(a) {
  return null == a ? !1 : a ? a.h & 1024 || a.wb ? !0 : a.h ? !1 : z(Va, a) : z(Va, a);
}
function Nc(a) {
  return a ? a.h & 16384 || a.Qb ? !0 : a.h ? !1 : z($a, a) : z($a, a);
}
function Oc(a) {
  return a ? a.p & 512 || a.Mb ? !0 : !1 : !1;
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
  return null == a ? !1 : a ? a.h & 64 || a.Oa ? !0 : a.h ? !1 : z(Oa, a) : z(Oa, a);
}
function Tc(a) {
  return y(a) ? !0 : !1;
}
function Uc(a, b) {
  return Ec(a, b, Rc) === Rc ? !1 : !0;
}
function Vc(a, b) {
  var c = F(b);
  if (c) {
    var d = G(c), c = H(c);
    return Wc ? Wc(a, d, c) : Xc.call(null, a, d, c);
  }
  return a.l ? a.l() : a.call(null);
}
function Yc(a, b, c) {
  for (c = F(c);;) {
    if (c) {
      var d = G(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
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
      return b && (b.h & 524288 || b.Ab) ? b.aa(null, a) : Aa(b) ? kc(b, a) : "string" === typeof b ? kc(b, a) : z(hb, b) ? ib.b(b, a) : Vc(a, b);
    case 3:
      return Wc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Wc(a, b, c) {
  return c && (c.h & 524288 || c.Ab) ? c.ba(null, a, b) : Aa(c) ? nc(c, a, b) : "string" === typeof c ? nc(c, a, b) : z(hb, c) ? ib.f(c, a, b) : Yc(a, b, c);
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
      return ad.l();
    case 1:
      return ad.a(arguments[0]);
    case 2:
      return ad.b(arguments[0], arguments[1]);
    default:
      return ad.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ad.l = function() {
  return 0;
};
ad.a = function(a) {
  return a;
};
ad.b = function(a, b) {
  return a + b;
};
ad.k = function(a, b, c) {
  return Wc(ad, a + b, c);
};
ad.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return ad.k(b, a, c);
};
ad.u = 2;
function bd(a) {
  return a - 1;
}
var cd = function cd() {
  switch(arguments.length) {
    case 1:
      return cd.a(arguments[0]);
    case 2:
      return cd.b(arguments[0], arguments[1]);
    default:
      return cd.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
cd.a = function(a) {
  return a;
};
cd.b = function(a, b) {
  return a > b ? a : b;
};
cd.k = function(a, b, c) {
  return Wc(cd, a > b ? a : b, c);
};
cd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return cd.k(b, a, c);
};
cd.u = 2;
function dd(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function ed(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function fd(a) {
  var b = 1;
  for (a = F(a);;) {
    if (a && 0 < b) {
      --b, a = H(a);
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
      c = c.append("" + D(G(d))), d = H(d);
    } else {
      return c.toString();
    }
  }
};
D.t = function(a) {
  var b = G(a);
  a = H(a);
  return D.k(b, a);
};
D.u = 1;
function sc(a, b) {
  var c;
  if (b ? b.h & 16777216 || b.Pb || (b.h ? 0 : z(ob, b)) : z(ob, b)) {
    if (pc(a) && pc(b) && zc(a) !== zc(b)) {
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
function gd(a, b, c, d, e) {
  this.j = a;
  this.first = b;
  this.va = c;
  this.count = d;
  this.m = e;
  this.h = 65937646;
  this.p = 8192;
}
h = gd.prototype;
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
  return sc(this, b);
};
h.Z = function() {
  return fb(Zb, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
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
  return new gd(b, this.first, this.va, this.count, this.m);
};
h.G = function(a, b) {
  return new gd(this.j, b, this, this.count + 1, null);
};
gd.prototype[Ea] = function() {
  return bc(this);
};
function hd(a) {
  this.j = a;
  this.h = 65937614;
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
  return null;
};
h.da = function() {
  return 0;
};
h.w = function() {
  return ec;
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return this;
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
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
  return new hd(b);
};
h.G = function(a, b) {
  return new gd(this.j, b, null, 1, null);
};
var Zb = new hd(null);
hd.prototype[Ea] = function() {
  return bc(this);
};
var id = function id() {
  return id.k(0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
id.k = function(a) {
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
id.u = 0;
id.t = function(a) {
  return id.k(F(a));
};
function jd(a, b, c, d) {
  this.j = a;
  this.first = b;
  this.va = c;
  this.m = d;
  this.h = 65929452;
  this.p = 8192;
}
h = jd.prototype;
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
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
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
  return new jd(b, this.first, this.va, this.m);
};
h.G = function(a, b) {
  return new jd(null, b, this, this.m);
};
jd.prototype[Ea] = function() {
  return bc(this);
};
function tc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.Oa)) ? new jd(null, a, b, null) : new jd(null, a, F(b), null);
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
        return Ec(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return L(c, this);
  };
  a.f = function(a, c, d) {
    return Ec(c, this, d);
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
  return Ec(a, this, b);
};
h.w = function() {
  var a = this.Ca;
  return null != a ? a : this.Ca = a = Ub(Ob(this.name), Sb(this.Ga)) + 2654435769 | 0;
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
var ld = function ld() {
  switch(arguments.length) {
    case 1:
      return ld.a(arguments[0]);
    case 2:
      return ld.b(arguments[0], arguments[1]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
ld.a = function(a) {
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
    return new N(b, md.a ? md.a(a) : md.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new N(b[0], b[1], a, null) : new N(null, b[0], a, null)) : null;
};
ld.b = function(a, b) {
  return new N(a, b, [D(y(a) ? [D(a), D("/")].join("") : null), D(b)].join(""), null);
};
ld.u = 2;
function nd(a, b, c, d) {
  this.j = a;
  this.Ea = b;
  this.q = c;
  this.m = d;
  this.h = 32374988;
  this.p = 0;
}
h = nd.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
function od(a) {
  null != a.Ea && (a.q = a.Ea.l ? a.Ea.l() : a.Ea.call(null), a.Ea = null);
  return a.q;
}
h.F = function() {
  return this.j;
};
h.ga = function() {
  nb(this);
  return null == this.q ? null : H(this.q);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
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
  od(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof nd) {
      a = od(a);
    } else {
      return this.q = a, F(this.q);
    }
  }
};
h.X = function(a, b) {
  return new nd(b, this.Ea, this.q, this.m);
};
h.G = function(a, b) {
  return tc(b, this);
};
nd.prototype[Ea] = function() {
  return bc(this);
};
function pd(a, b) {
  this.bb = a;
  this.end = b;
  this.h = 2;
  this.p = 0;
}
pd.prototype.add = function(a) {
  this.bb[this.end] = a;
  return this.end += 1;
};
pd.prototype.pa = function() {
  var a = new qd(this.bb, 0, this.end);
  this.bb = null;
  return a;
};
pd.prototype.da = function() {
  return this.end;
};
function qd(a, b, c) {
  this.c = a;
  this.Y = b;
  this.end = c;
  this.h = 524306;
  this.p = 0;
}
h = qd.prototype;
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
  return new qd(this.c, this.Y + 1, this.end);
};
h.aa = function(a, b) {
  return oc(this.c, b, this.c[this.Y], this.Y + 1);
};
h.ba = function(a, b, c) {
  return oc(this.c, b, c, this.Y);
};
function rd(a, b, c, d) {
  this.pa = a;
  this.qa = b;
  this.j = c;
  this.m = d;
  this.h = 31850732;
  this.p = 1536;
}
h = rd.prototype;
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
    return new rd(zb(this.pa), this.qa, this.j, null);
  }
  var a = nb(this.qa);
  return null == a ? null : a;
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.ca = function() {
  return E.b(this.pa, 0);
};
h.ja = function() {
  return 1 < Ja(this.pa) ? new rd(zb(this.pa), this.qa, this.j, null) : null == this.qa ? Zb : this.qa;
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
  return new rd(this.pa, this.qa, b, this.m);
};
h.G = function(a, b) {
  return tc(b, this);
};
h.cb = function() {
  return null == this.qa ? null : this.qa;
};
rd.prototype[Ea] = function() {
  return bc(this);
};
function sd(a, b) {
  return 0 === Ja(a) ? b : new rd(a, b, null, null);
}
function td(a, b) {
  a.add(b);
}
function ud(a) {
  for (var b = [];;) {
    if (F(a)) {
      b.push(G(a)), a = H(a);
    } else {
      return b;
    }
  }
}
function vd(a, b) {
  if (pc(a)) {
    return zc(a);
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
  return null == b ? null : null == H(b) ? F(G(b)) : tc(G(b), wd(H(b)));
}, xd = function xd() {
  switch(arguments.length) {
    case 0:
      return xd.l();
    case 1:
      return xd.a(arguments[0]);
    case 2:
      return xd.b(arguments[0], arguments[1]);
    default:
      return xd.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
xd.l = function() {
  return new nd(null, function() {
    return null;
  }, null, null);
};
xd.a = function(a) {
  return new nd(null, function() {
    return a;
  }, null, null);
};
xd.b = function(a, b) {
  return new nd(null, function() {
    var c = F(a);
    return c ? Oc(c) ? sd(Ab(c), xd.b(Bb(c), b)) : tc(G(c), xd.b(Yb(c), b)) : b;
  }, null, null);
};
xd.k = function(a, b, c) {
  return function e(a, b) {
    return new nd(null, function() {
      var c = F(a);
      return c ? Oc(c) ? sd(Ab(c), e(Bb(c), b)) : tc(G(c), e(Yb(c), b)) : y(b) ? e(G(b), H(b)) : null;
    }, null, null);
  }(xd.b(a, b), c);
};
xd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return xd.k(b, a, c);
};
xd.u = 2;
var yd = function yd() {
  switch(arguments.length) {
    case 0:
      return yd.l();
    case 1:
      return yd.a(arguments[0]);
    case 2:
      return yd.b(arguments[0], arguments[1]);
    default:
      return yd.k(arguments[0], arguments[1], new Xb(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yd.l = function() {
  return tb(yc);
};
yd.a = function(a) {
  return a;
};
yd.b = function(a, b) {
  return ub(a, b);
};
yd.k = function(a, b, c) {
  for (;;) {
    if (a = ub(a, b), y(c)) {
      b = G(c), c = H(c);
    } else {
      return a;
    }
  }
};
yd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  c = H(c);
  return yd.k(b, a, c);
};
yd.u = 2;
function zd(a, b, c) {
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
  var u = Pa(w), B = Qa(w);
  if (14 === b) {
    return a.L ? a.L(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.L ? a.L(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  var w = Pa(B), C = Qa(B);
  if (15 === b) {
    return a.M ? a.M(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.M ? a.M(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
  }
  var B = Pa(C), I = Qa(C);
  if (16 === b) {
    return a.N ? a.N(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) : a.N ? a.N(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B);
  }
  var C = Pa(I), U = Qa(I);
  if (17 === b) {
    return a.O ? a.O(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) : a.O ? a.O(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C);
  }
  var I = Pa(U), ha = Qa(U);
  if (18 === b) {
    return a.P ? a.P(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) : a.P ? a.P(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I);
  }
  U = Pa(ha);
  ha = Qa(ha);
  if (19 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U) : a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U);
  }
  var x = Pa(ha);
  Qa(ha);
  if (20 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U, x) : a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U, x);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Jc() {
  switch(arguments.length) {
    case 2:
      return Ad(arguments[0], arguments[1]);
    case 3:
      return Bd(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = tc(arguments[1], tc(arguments[2], arguments[3])), c = a.u;
      if (a.t) {
        var d = vd(b, c + 1);
        a = d <= c ? zd(a, d, b) : a.t(b);
      } else {
        a = a.apply(a, ud(b));
      }
      return a;
    case 5:
      return Cd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Dd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new Xb(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Ad(a, b) {
  var c = a.u;
  if (a.t) {
    var d = vd(b, c + 1);
    return d <= c ? zd(a, d, b) : a.t(b);
  }
  return a.apply(a, ud(b));
}
function Bd(a, b, c) {
  b = tc(b, c);
  c = a.u;
  if (a.t) {
    var d = vd(b, c + 1);
    return d <= c ? zd(a, d, b) : a.t(b);
  }
  return a.apply(a, ud(b));
}
function Cd(a, b, c, d, e) {
  b = tc(b, tc(c, tc(d, e)));
  c = a.u;
  return a.t ? (d = vd(b, c + 1), d <= c ? zd(a, d, b) : a.t(b)) : a.apply(a, ud(b));
}
function Dd(a, b, c, d, e, f) {
  b = tc(b, tc(c, tc(d, tc(e, wd(f)))));
  c = a.u;
  return a.t ? (d = vd(b, c + 1), d <= c ? zd(a, d, b) : a.t(b)) : a.apply(a, ud(b));
}
function Ed(a, b) {
  for (;;) {
    if (null == F(b)) {
      return!0;
    }
    var c;
    c = G(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (y(c)) {
      c = a;
      var d = H(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function Fd(a, b) {
  return function d(b, f) {
    return new nd(null, function() {
      var g = F(f);
      if (g) {
        if (Oc(g)) {
          for (var k = Ab(g), l = zc(k), m = new pd(Array(l), 0), n = 0;;) {
            if (n < l) {
              td(m, function() {
                var d = b + n, f = E.b(k, n);
                return a.b ? a.b(d, f) : a.call(null, d, f);
              }()), n += 1;
            } else {
              break;
            }
          }
          return sd(m.pa(), d(b + l, Bb(g)));
        }
        return tc(function() {
          var d = G(g);
          return a.b ? a.b(b, d) : a.call(null, b, d);
        }(), d(b + 1, Yb(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Gd(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.Lb = c;
  this.rb = d;
  this.p = 16386;
  this.h = 6455296;
}
h = Gd.prototype;
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
        d = a, Oc(d) ? (e = Ab(d), d = Bb(d), a = e, f = zc(e), e = a) : (a = G(d), k = K(a, 0), a = K(a, 1), e = k, f = b, g = c, a.o ? a.o(e, this, f, g) : a.call(null, e, this, f, g), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.w = function() {
  return this[ea] || (this[ea] = ++fa);
};
function Hd() {
  switch(arguments.length) {
    case 1:
      return O(arguments[0]);
    default:
      var a = arguments[0], b = new Xb(Array.prototype.slice.call(arguments, 1), 0), c = Sc(b) ? Ad(Id, b) : b, b = L(c, va), c = L(c, Jd);
      return new Gd(a, b, c, null);
  }
}
function O(a) {
  return new Gd(a, null, null, null);
}
function Kd(a, b) {
  if (a instanceof Gd) {
    var c = a.Lb;
    if (null != c && !y(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([D("Assert failed: "), D("Validator rejected reference state"), D("\n"), D(function() {
        var a = id(new Vb(null, "validate", "validate", 1439230700, null), new Vb(null, "new-value", "new-value", -1567397401, null));
        return Ld.a ? Ld.a(a) : Ld.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && sb(a, c, b);
    return b;
  }
  return Fb(a, b);
}
var Md = function Md() {
  switch(arguments.length) {
    case 2:
      return Md.b(arguments[0], arguments[1]);
    case 3:
      return Md.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Md.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Md.k(arguments[0], arguments[1], arguments[2], arguments[3], new Xb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Md.b = function(a, b) {
  var c;
  a instanceof Gd ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Kd(a, c)) : c = Gb.b(a, b);
  return c;
};
Md.f = function(a, b, c) {
  if (a instanceof Gd) {
    var d = a.state;
    b = b.b ? b.b(d, c) : b.call(null, d, c);
    a = Kd(a, b);
  } else {
    a = Gb.f(a, b, c);
  }
  return a;
};
Md.o = function(a, b, c, d) {
  if (a instanceof Gd) {
    var e = a.state;
    b = b.f ? b.f(e, c, d) : b.call(null, e, c, d);
    a = Kd(a, b);
  } else {
    a = Gb.o(a, b, c, d);
  }
  return a;
};
Md.k = function(a, b, c, d, e) {
  return a instanceof Gd ? Kd(a, Cd(b, a.state, c, d, e)) : Gb.r(a, b, c, d, e);
};
Md.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Md.k(b, a, c, d, e);
};
Md.u = 4;
var Nd = function Nd() {
  switch(arguments.length) {
    case 1:
      return Nd.a(arguments[0]);
    case 2:
      return Nd.b(arguments[0], arguments[1]);
    case 3:
      return Nd.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Nd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Nd.k(arguments[0], arguments[1], arguments[2], arguments[3], new Xb(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Nd.a = function(a) {
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
          e = Bd(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.u = 2;
        c.t = function(a) {
          var b = G(a);
          a = H(a);
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
Nd.b = function(a, b) {
  return new nd(null, function() {
    var c = F(b);
    if (c) {
      if (Oc(c)) {
        for (var d = Ab(c), e = zc(d), f = new pd(Array(e), 0), g = 0;;) {
          if (g < e) {
            td(f, function() {
              var b = E.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return sd(f.pa(), Nd.b(a, Bb(c)));
      }
      return tc(function() {
        var b = G(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Nd.b(a, Yb(c)));
    }
    return null;
  }, null, null);
};
Nd.f = function(a, b, c) {
  return new nd(null, function() {
    var d = F(b), e = F(c);
    if (d && e) {
      var f = tc, g;
      g = G(d);
      var k = G(e);
      g = a.b ? a.b(g, k) : a.call(null, g, k);
      d = f(g, Nd.f(a, Yb(d), Yb(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Nd.o = function(a, b, c, d) {
  return new nd(null, function() {
    var e = F(b), f = F(c), g = F(d);
    if (e && f && g) {
      var k = tc, l;
      l = G(e);
      var m = G(f), n = G(g);
      l = a.f ? a.f(l, m, n) : a.call(null, l, m, n);
      e = k(l, Nd.o(a, Yb(e), Yb(f), Yb(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Nd.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new nd(null, function() {
      var b = Nd.b(F, a);
      return Ed(Zc, b) ? tc(Nd.b(G, b), k(Nd.b(Yb, b))) : null;
    }, null, null);
  };
  return Nd.b(function() {
    return function(b) {
      return Ad(a, b);
    };
  }(f), f(xc.k(e, d, vc([c, b], 0))));
};
Nd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), e = H(e);
  return Nd.k(b, a, c, d, e);
};
Nd.u = 4;
function Od(a, b) {
  return Ad(xd, Bd(Nd, a, b));
}
var Pd = function Pd() {
  switch(arguments.length) {
    case 2:
      return Pd.b(arguments[0], arguments[1]);
    case 3:
      return Pd.f(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
};
Pd.b = function(a, b) {
  var c;
  null != a ? a && (a.p & 4 || a.vb) ? (c = Wc(ub, tb(a), b), c = vb(c), c = Kc(c, Lc(a))) : c = Wc(La, a, b) : c = Wc(xc, Zb, b);
  return c;
};
Pd.f = function(a, b, c) {
  a && (a.p & 4 || a.vb) ? (b = $c(b, yd, tb(a), c), b = vb(b), a = Kc(b, Lc(a))) : a = $c(b, xc, a, c);
  return a;
};
Pd.u = 3;
function Qd(a) {
  return Rd(a, new P(null, 2, 5, Q, [Sd, Td], null));
}
function Rd(a, b) {
  for (var c = Rc, d = a, e = F(b);;) {
    if (e) {
      var f = d;
      if (f ? f.h & 256 || f.nb || (f.h ? 0 : z(Sa, f)) : z(Sa, f)) {
        d = Ec(d, G(e), c);
        if (c === d) {
          return null;
        }
        e = H(e);
      } else {
        return null;
      }
    } else {
      return d;
    }
  }
}
var Ud = function Ud(b, c, d) {
  var e = K(c, 0);
  c = fd(c);
  return y(c) ? M.f(b, e, Ud(L(b, e), c, d)) : M.f(b, e, d);
}, Vd = function Vd() {
  switch(arguments.length) {
    case 3:
      return Vd.f(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Vd.o(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Vd.r(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return Vd.B(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return Vd.k(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new Xb(Array.prototype.slice.call(arguments, 6), 0));
  }
};
Vd.f = function(a, b, c) {
  var d = K(b, 0);
  b = fd(b);
  return y(b) ? M.f(a, d, Vd.f(L(a, d), b, c)) : M.f(a, d, function() {
    var b = L(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
Vd.o = function(a, b, c, d) {
  var e = K(b, 0);
  b = fd(b);
  return y(b) ? M.f(a, e, Vd.o(L(a, e), b, c, d)) : M.f(a, e, function() {
    var b = L(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
Vd.r = function(a, b, c, d, e) {
  var f = K(b, 0);
  b = fd(b);
  return y(b) ? M.f(a, f, Vd.r(L(a, f), b, c, d, e)) : M.f(a, f, function() {
    var b = L(a, f);
    return c.f ? c.f(b, d, e) : c.call(null, b, d, e);
  }());
};
Vd.B = function(a, b, c, d, e, f) {
  var g = K(b, 0);
  b = fd(b);
  return y(b) ? M.f(a, g, Vd.B(L(a, g), b, c, d, e, f)) : M.f(a, g, function() {
    var b = L(a, g);
    return c.o ? c.o(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
Vd.k = function(a, b, c, d, e, f, g) {
  var k = K(b, 0);
  b = fd(b);
  return y(b) ? M.f(a, k, Dd(Vd, L(a, k), b, c, d, vc([e, f, g], 0))) : M.f(a, k, Dd(c, L(a, k), d, e, f, vc([g], 0)));
};
Vd.t = function(a) {
  var b = G(a), c = H(a);
  a = G(c);
  var d = H(c), c = G(d), e = H(d), d = G(e), f = H(e), e = G(f), g = H(f), f = G(g), g = H(g);
  return Vd.k(b, a, c, d, e, f, g);
};
Vd.u = 6;
function Wd(a, b, c) {
  return M.f(a, b, function() {
    var d = L(a, b);
    return c.a ? c.a(d) : c.call(null, d);
  }());
}
function Xd(a, b, c, d) {
  return M.f(a, b, function() {
    var e = L(a, b);
    return c.b ? c.b(e, d) : c.call(null, e, d);
  }());
}
function Yd(a, b, c, d, e) {
  return M.f(a, b, function() {
    var f = L(a, b);
    return c.f ? c.f(f, d, e) : c.call(null, f, d, e);
  }());
}
function Zd(a, b) {
  this.s = a;
  this.c = b;
}
function $d(a) {
  return new Zd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function ae(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function be(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = $d(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var ce = function ce(b, c, d, e) {
  var f = new Zd(d.s, Ga(d.c)), g = b.g - 1 >>> c & 31;
  5 === c ? f.c[g] = e : (d = d.c[g], b = null != d ? ce(b, c - 5, d, e) : be(null, c - 5, e), f.c[g] = b);
  return f;
};
function de(a, b) {
  throw Error([D("No item "), D(a), D(" in vector of length "), D(b)].join(""));
}
function ee(a, b) {
  if (b >= ae(a)) {
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
function fe(a, b) {
  return 0 <= b && b < a.g ? ee(a, b) : de(b, a.g);
}
var ge = function ge(b, c, d, e, f) {
  var g = new Zd(d.s, Ga(d.c));
  if (0 === c) {
    g.c[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = ge(b, c - 5, d.c[k], e, f);
    g.c[k] = b;
  }
  return g;
};
function he(a, b, c, d, e, f) {
  this.i = a;
  this.ab = b;
  this.c = c;
  this.ra = d;
  this.start = e;
  this.end = f;
}
he.prototype.Ya = function() {
  return this.i < this.end;
};
he.prototype.next = function() {
  32 === this.i - this.ab && (this.c = ee(this.ra, this.i), this.ab += 32);
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
      var e = ee(this, a);
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
  return fe(this, b)[b & 31];
};
h.ka = function(a, b, c) {
  return 0 <= b && b < this.g ? ee(this, b)[b & 31] : c;
};
h.kb = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return ae(this) <= b ? (a = Ga(this.ia), a[b & 31] = c, new P(this.j, this.g, this.shift, this.root, a, null)) : new P(this.j, this.g, this.shift, ge(this, this.shift, this.root, b, c), this.ia, null);
  }
  if (b === this.g) {
    return La(this, c);
  }
  throw Error([D("Index "), D(b), D(" out of bounds  [0,"), D(this.g), D("]")].join(""));
};
h.Ka = function() {
  var a = this.g;
  return new he(0, 0, 0 < zc(this) ? ee(this, 0) : null, this, 0, a);
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
    if (this.g === zc(b)) {
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
    return sc(this, b);
  }
};
h.Ia = function() {
  var a = this;
  return new ie(a.g, a.shift, function() {
    var b = a.root;
    return je.a ? je.a(b) : je.call(null, b);
  }(), function() {
    var b = a.ia;
    return ke.a ? ke.a(b) : ke.call(null, b);
  }());
};
h.Z = function() {
  return Kc(yc, this.j);
};
h.aa = function(a, b) {
  return ic(this, b);
};
h.ba = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.g) {
      var e = ee(this, a);
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
  return le ? le(this, a, 0, 0) : me.call(null, this, a, 0, 0);
};
h.X = function(a, b) {
  return new P(b, this.g, this.shift, this.root, this.ia, this.m);
};
h.G = function(a, b) {
  if (32 > this.g - ae(this)) {
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
  d ? (d = $d(null), d.c[0] = this.root, e = be(null, this.shift, new Zd(null, this.ia)), d.c[1] = e) : d = ce(this, this.shift, this.root, new Zd(null, this.ia));
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
var Q = new Zd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), yc = new P(null, 0, 5, Q, [], ec);
P.prototype[Ea] = function() {
  return bc(this);
};
function ne(a) {
  if (Aa(a)) {
    a: {
      var b = a.length;
      if (32 > b) {
        a = new P(null, b, 5, Q, a, null);
      } else {
        for (var c = 32, d = (new P(null, 32, 5, Q, a.slice(0, 32), null)).Ia(null);;) {
          if (c < b) {
            var e = c + 1, d = yd.b(d, a[c]), c = e
          } else {
            a = vb(d);
            break a;
          }
        }
      }
    }
  } else {
    a = vb(Wc(ub, tb(yc), a));
  }
  return a;
}
function oe(a, b, c, d, e, f) {
  this.ma = a;
  this.ua = b;
  this.i = c;
  this.Y = d;
  this.j = e;
  this.m = f;
  this.h = 32375020;
  this.p = 1536;
}
h = oe.prototype;
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
    a = le ? le(a, b, c, d) : me.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return Cb(this);
};
h.w = function() {
  var a = this.m;
  return null != a ? a : this.m = a = dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(yc, this.j);
};
h.aa = function(a, b) {
  var c;
  c = this.ma;
  var d = this.i + this.Y, e = zc(this.ma);
  c = pe ? pe(c, d, e) : qe.call(null, c, d, e);
  return ic(c, b);
};
h.ba = function(a, b, c) {
  a = this.ma;
  var d = this.i + this.Y, e = zc(this.ma);
  a = pe ? pe(a, d, e) : qe.call(null, a, d, e);
  return jc(a, b, c);
};
h.ca = function() {
  return this.ua[this.Y];
};
h.ja = function() {
  if (this.Y + 1 < this.ua.length) {
    var a;
    a = this.ma;
    var b = this.ua, c = this.i, d = this.Y + 1;
    a = le ? le(a, b, c, d) : me.call(null, a, b, c, d);
    return null == a ? Zb : a;
  }
  return Bb(this);
};
h.W = function() {
  return this;
};
h.eb = function() {
  var a = this.ua;
  return new qd(a, this.Y, a.length);
};
h.fb = function() {
  var a = this.i + this.ua.length;
  if (a < Ja(this.ma)) {
    var b = this.ma, c = ee(this.ma, a);
    return le ? le(b, c, a, 0) : me.call(null, b, c, a, 0);
  }
  return Zb;
};
h.X = function(a, b) {
  var c = this.ma, d = this.ua, e = this.i, f = this.Y;
  return re ? re(c, d, e, f, b) : me.call(null, c, d, e, f, b);
};
h.G = function(a, b) {
  return tc(b, this);
};
h.cb = function() {
  var a = this.i + this.ua.length;
  if (a < Ja(this.ma)) {
    var b = this.ma, c = ee(this.ma, a);
    return le ? le(b, c, a, 0) : me.call(null, b, c, a, 0);
  }
  return null;
};
oe.prototype[Ea] = function() {
  return bc(this);
};
function me() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new oe(a, fe(a, b), b, c, null, null);
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
  this.j = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.h = 167666463;
  this.p = 8192;
}
h = se.prototype;
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
  return 0 > b || this.end <= this.start + b ? de(b, this.end - this.start) : E.b(this.ra, this.start + b);
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
  return te.r ? te.r(a, c, b, d, null) : te.call(null, a, c, b, d, null);
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
  return sc(this, b);
};
h.Z = function() {
  return Kc(yc, this.j);
};
h.aa = function(a, b) {
  return ic(this, b);
};
h.ba = function(a, b, c) {
  return jc(this, b, c);
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
      return e === a.end ? null : tc(E.b(a.ra, e), new nd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.X = function(a, b) {
  var c = this.ra, d = this.start, e = this.end, f = this.m;
  return te.r ? te.r(b, c, d, e, f) : te.call(null, b, c, d, e, f);
};
h.G = function(a, b) {
  var c = this.j, d = ab(this.ra, this.end, b), e = this.start, f = this.end + 1;
  return te.r ? te.r(c, d, e, f, null) : te.call(null, c, d, e, f, null);
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
se.prototype[Ea] = function() {
  return bc(this);
};
function te(a, b, c, d, e) {
  for (;;) {
    if (b instanceof se) {
      c = b.start + c, d = b.start + d, b = b.ra;
    } else {
      var f = zc(b);
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
      return pe(a, arguments[1], zc(a));
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
  return a === b.s ? b : new Zd(a, Ga(b.c));
}
function je(a) {
  return new Zd({}, Ga(a.c));
}
function ke(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qc(a, 0, b, 0, a.length);
  return b;
}
var ve = function ve(b, c, d, e) {
  d = ue(b.root.s, d);
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.c[f];
    b = null != g ? ve(b, c - 5, g, e) : be(b.root.s, c - 5, e);
  }
  d.c[f] = b;
  return d;
};
function ie(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.ia = d;
  this.p = 88;
  this.h = 275;
}
h = ie.prototype;
h.Wa = function(a, b) {
  if (this.root.s) {
    if (32 > this.g - ae(this)) {
      this.ia[this.g & 31] = b;
    } else {
      var c = new Zd(this.root.s, this.ia), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ia = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = be(this.root.s, this.shift, c);
        this.root = new Zd(this.root.s, d);
        this.shift = e;
      } else {
        this.root = ve(this, this.shift, this.root, c);
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
    var a = this.g - ae(this), b = Array(a);
    Qc(this.ia, 0, b, 0, a);
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
      return ae(this) <= b ? d.ia[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ue(d.root.s, k);
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
      return ub(this, c);
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
    return fe(this, b)[b & 31];
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
function we() {
  this.h = 2097152;
  this.p = 0;
}
we.prototype.equiv = function(a) {
  return this.n(null, a);
};
we.prototype.n = function() {
  return!1;
};
var xe = new we;
function ye(a, b) {
  return Tc(Mc(b) ? zc(a) === zc(b) ? Ed(Zc, Nd.b(function(a) {
    return $b.b(Ec(b, G(a), xe), G(H(a)));
  }, a)) : null : null);
}
function ze(a) {
  this.q = a;
}
ze.prototype.next = function() {
  if (null != this.q) {
    var a = G(this.q), b = K(a, 0), a = K(a, 1);
    this.q = H(this.q);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function Ae(a) {
  return new ze(F(a));
}
function Be(a, b) {
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
function Ce(a, b, c) {
  this.c = a;
  this.i = b;
  this.fa = c;
  this.h = 32374990;
  this.p = 0;
}
h = Ce.prototype;
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
  return this.i < this.c.length - 2 ? new Ce(this.c, this.i + 2, this.fa) : null;
};
h.da = function() {
  return(this.c.length - this.i) / 2;
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.ca = function() {
  return new P(null, 2, 5, Q, [this.c[this.i], this.c[this.i + 1]], null);
};
h.ja = function() {
  return this.i < this.c.length - 2 ? new Ce(this.c, this.i + 2, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new Ce(this.c, this.i, b);
};
h.G = function(a, b) {
  return tc(b, this);
};
Ce.prototype[Ea] = function() {
  return bc(this);
};
function De(a, b, c) {
  this.c = a;
  this.i = b;
  this.g = c;
}
De.prototype.Ya = function() {
  return this.i < this.g;
};
De.prototype.next = function() {
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
  return bc(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.entries = function() {
  return Ae(F(this));
};
h.values = function() {
  return bc(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
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
        Oc(b) ? (c = Ab(b), b = Bb(b), g = c, d = zc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
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
  a = Be(this.c, b);
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
  return new De(this.c, 0, 2 * this.g);
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
          var e = b.C(null, this.c[d], Rc);
          if (e !== Rc) {
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
    return ye(this, b);
  }
};
h.Ia = function() {
  return new Ge({}, this.c.length, Ga(this.c));
};
h.Z = function() {
  return fb(R, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.hb = function(a, b) {
  if (0 <= Be(this.c, b)) {
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
  a = Be(this.c, b);
  if (-1 === a) {
    if (this.g < He) {
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
    return fb(Ua(Pd.b(Ie, this), b, c), this.j);
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
  return 0 <= a.length - 2 ? new Ce(a, 0, null) : null;
};
h.X = function(a, b) {
  return new sa(b, this.g, this.c, this.m);
};
h.G = function(a, b) {
  if (Nc(b)) {
    return Ua(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
      c = Ua(c, E.b(e, 0), E.b(e, 1)), d = H(d);
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
var R = new sa(null, 0, [], gc), He = 8;
sa.prototype[Ea] = function() {
  return bc(this);
};
function Ge(a, b, c) {
  this.Da = a;
  this.Fa = b;
  this.c = c;
  this.h = 258;
  this.p = 56;
}
h = Ge.prototype;
h.da = function() {
  if (y(this.Da)) {
    return dd(this.Fa, 2);
  }
  throw Error("count after persistent!");
};
h.$ = function(a, b) {
  return Ta.f(this, b, null);
};
h.C = function(a, b, c) {
  if (y(this.Da)) {
    return a = Be(this.c, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Wa = function(a, b) {
  if (y(this.Da)) {
    if (b ? b.h & 2048 || b.xb || (b.h ? 0 : z(Xa, b)) : z(Xa, b)) {
      return xb(this, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = F(b), d = this;;) {
      var e = G(c);
      if (y(e)) {
        var f = e, c = H(c), d = xb(d, function() {
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
h.Xa = function() {
  if (y(this.Da)) {
    return this.Da = !1, new sa(null, dd(this.Fa, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
h.Pa = function(a, b, c) {
  if (y(this.Da)) {
    a = Be(this.c, b);
    if (-1 === a) {
      if (this.Fa + 2 <= 2 * He) {
        return this.Fa += 2, this.c.push(b), this.c.push(c), this;
      }
      a = this.Fa;
      var d = this.c;
      a = Me.b ? Me.b(a, d) : Me.call(null, a, d);
      return xb(a, b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Me(a, b) {
  for (var c = tb(Ie), d = 0;;) {
    if (d < a) {
      c = xb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ne() {
  this.sa = !1;
}
function Oe(a, b) {
  return a === b ? !0 : a === b || a instanceof N && b instanceof N && a.wa === b.wa ? !0 : $b.b(a, b);
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
  a = a.Aa(b);
  a.c[c] = d;
  return a;
}
function Se(a, b, c) {
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
function Te(a, b, c) {
  this.s = a;
  this.v = b;
  this.c = c;
}
h = Te.prototype;
h.Aa = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = ed(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qc(this.c, 0, c, 0, 2 * b);
  return new Te(a, this.v, c);
};
h.Qa = function() {
  var a = this.c;
  return Ue ? Ue(a) : Ve.call(null, a);
};
h.Sa = function(a, b) {
  return Se(this.c, a, b);
};
h.Ba = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.v & e)) {
    return d;
  }
  var f = ed(this.v & e - 1), e = this.c[2 * f], f = this.c[2 * f + 1];
  return null == e ? f.Ba(a + 5, b, c, d) : Oe(c, e) ? f : d;
};
h.oa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = ed(this.v & g - 1);
  if (0 === (this.v & g)) {
    var l = ed(this.v);
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
      k[c >>> b & 31] = We.oa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.v >>> d & 1) && (k[d] = null != this.c[e] ? We.oa(a, b + 5, Tb(this.c[e]), this.c[e], this.c[e + 1], f) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Xe(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Qc(this.c, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Qc(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.sa = !0;
    a = this.Aa(a);
    a.c = b;
    a.v |= g;
    return a;
  }
  l = this.c[2 * k];
  g = this.c[2 * k + 1];
  if (null == l) {
    return l = g.oa(a, b + 5, c, d, e, f), l === g ? this : Re(this, a, 2 * k + 1, l);
  }
  if (Oe(d, l)) {
    return e === g ? this : Re(this, a, 2 * k + 1, e);
  }
  f.sa = !0;
  f = b + 5;
  d = Ye ? Ye(a, f, l, g, c, d, e) : Ze.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Aa(a);
  a.c[e] = null;
  a.c[k] = d;
  return a;
};
h.na = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = ed(this.v & f - 1);
  if (0 === (this.v & f)) {
    var k = ed(this.v);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = We.na(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.v >>> c & 1) && (g[c] = null != this.c[d] ? We.na(a + 5, Tb(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Xe(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Qc(this.c, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Qc(this.c, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.sa = !0;
    return new Te(null, this.v | f, a);
  }
  var l = this.c[2 * g], f = this.c[2 * g + 1];
  if (null == l) {
    return k = f.na(a + 5, b, c, d, e), k === f ? this : new Te(null, this.v, Pe(this.c, 2 * g + 1, k));
  }
  if (Oe(c, l)) {
    return d === f ? this : new Te(null, this.v, Pe(this.c, 2 * g + 1, d));
  }
  e.sa = !0;
  e = this.v;
  k = this.c;
  a += 5;
  a = $e ? $e(a, l, f, b, c, d) : Ze.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Ga(k);
  d[c] = null;
  d[g] = a;
  return new Te(null, e, d);
};
h.Ra = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.v & d)) {
    return this;
  }
  var e = ed(this.v & d - 1), f = this.c[2 * e], g = this.c[2 * e + 1];
  return null == f ? (a = g.Ra(a + 5, b, c), a === g ? this : null != a ? new Te(null, this.v, Pe(this.c, 2 * e + 1, a)) : this.v === d ? null : new Te(null, this.v ^ d, Qe(this.c, e))) : Oe(c, f) ? new Te(null, this.v ^ d, Qe(this.c, e)) : this;
};
var We = new Te(null, 0, []);
function Xe(a, b, c) {
  this.s = a;
  this.g = b;
  this.c = c;
}
h = Xe.prototype;
h.Aa = function(a) {
  return a === this.s ? this : new Xe(a, this.g, Ga(this.c));
};
h.Qa = function() {
  var a = this.c;
  return af ? af(a) : bf.call(null, a);
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
    return a = Re(this, a, g, We.oa(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.oa(a, b + 5, c, d, e, f);
  return b === k ? this : Re(this, a, g, b);
};
h.na = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.c[f];
  if (null == g) {
    return new Xe(null, this.g + 1, Pe(this.c, f, We.na(a + 5, b, c, d, e)));
  }
  a = g.na(a + 5, b, c, d, e);
  return a === g ? this : new Xe(null, this.g, Pe(this.c, f, a));
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
                d = new Te(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Xe(null, this.g - 1, Pe(this.c, d, a));
        }
      } else {
        d = new Xe(null, this.g, Pe(this.c, d, a));
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
  this.s = a;
  this.ta = b;
  this.g = c;
  this.c = d;
}
h = df.prototype;
h.Aa = function(a) {
  if (a === this.s) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  Qc(this.c, 0, b, 0, 2 * this.g);
  return new df(a, this.ta, this.g, b);
};
h.Qa = function() {
  var a = this.c;
  return Ue ? Ue(a) : Ve.call(null, a);
};
h.Sa = function(a, b) {
  return Se(this.c, a, b);
};
h.Ba = function(a, b, c, d) {
  a = cf(this.c, this.g, c);
  return 0 > a ? d : Oe(c, this.c[a]) ? this.c[a + 1] : d;
};
h.oa = function(a, b, c, d, e, f) {
  if (c === this.ta) {
    b = cf(this.c, this.g, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.g) {
        return b = 2 * this.g, c = 2 * this.g + 1, a = this.Aa(a), a.c[b] = d, a.c[c] = e, f.sa = !0, a.g += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Qc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.sa = !0;
      d = this.g + 1;
      a === this.s ? (this.c = b, this.g = d, a = this) : a = new df(this.s, this.ta, d, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Re(this, a, b + 1, e);
  }
  return(new Te(a, 1 << (this.ta >>> b & 31), [null, this, null, null])).oa(a, b, c, d, e, f);
};
h.na = function(a, b, c, d, e) {
  return b === this.ta ? (a = cf(this.c, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), Qc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.sa = !0, new df(null, this.ta, this.g + 1, b)) : $b.b(this.c[a], d) ? this : new df(null, this.ta, this.g, Pe(this.c, a + 1, d))) : (new Te(null, 1 << (this.ta >>> a & 31), [null, this])).na(a, b, c, d, e);
};
h.Ra = function(a, b, c) {
  a = cf(this.c, this.g, c);
  return-1 === a ? this : 1 === this.g ? null : new df(null, this.ta, this.g - 1, Qe(this.c, dd(a, 2)));
};
function Ze() {
  switch(arguments.length) {
    case 6:
      return $e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ye(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function $e(a, b, c, d, e, f) {
  var g = Tb(b);
  if (g === d) {
    return new df(null, g, 2, [b, c, e, f]);
  }
  var k = new Ne;
  return We.na(a, g, b, c, k).na(a, d, e, f, k);
}
function Ye(a, b, c, d, e, f, g) {
  var k = Tb(c);
  if (k === e) {
    return new df(null, k, 2, [c, d, f, g]);
  }
  var l = new Ne;
  return We.oa(a, b, k, c, d, l).oa(a, b, e, f, g, l);
}
function ef(a, b, c, d, e) {
  this.j = a;
  this.xa = b;
  this.i = c;
  this.q = d;
  this.m = e;
  this.h = 32374860;
  this.p = 0;
}
h = ef.prototype;
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
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.ca = function() {
  return null == this.q ? new P(null, 2, 5, Q, [this.xa[this.i], this.xa[this.i + 1]], null) : G(this.q);
};
h.ja = function() {
  if (null == this.q) {
    var a = this.xa, b = this.i + 2;
    return ff ? ff(a, b, null) : Ve.call(null, a, b, null);
  }
  var a = this.xa, b = this.i, c = H(this.q);
  return ff ? ff(a, b, c) : Ve.call(null, a, b, c);
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new ef(b, this.xa, this.i, this.q, this.m);
};
h.G = function(a, b) {
  return tc(b, this);
};
ef.prototype[Ea] = function() {
  return bc(this);
};
function Ve() {
  switch(arguments.length) {
    case 1:
      return Ue(arguments[0]);
    case 3:
      return ff(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
  }
}
function Ue(a) {
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
        if (y(d) && (d = d.Qa(), y(d))) {
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
  this.j = a;
  this.xa = b;
  this.i = c;
  this.q = d;
  this.m = e;
  this.h = 32374860;
  this.p = 0;
}
h = gf.prototype;
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
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.ca = function() {
  return G(this.q);
};
h.ja = function() {
  var a = this.xa, b = this.i, c = H(this.q);
  return hf ? hf(null, a, b, c) : bf.call(null, null, a, b, c);
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new gf(b, this.xa, this.i, this.q, this.m);
};
h.G = function(a, b) {
  return tc(b, this);
};
gf.prototype[Ea] = function() {
  return bc(this);
};
function bf() {
  switch(arguments.length) {
    case 1:
      return af(arguments[0]);
    case 4:
      return hf(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([D("Invalid arity: "), D(arguments.length)].join(""));;
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
        if (y(e) && (e = e.Qa(), y(e))) {
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
  this.j = a;
  this.g = b;
  this.root = c;
  this.ha = d;
  this.la = e;
  this.m = f;
  this.h = 16123663;
  this.p = 8196;
}
h = jf.prototype;
h.toString = function() {
  return Jb(this);
};
h.equiv = function(a) {
  return this.n(null, a);
};
h.keys = function() {
  return bc(Ee.a ? Ee.a(this) : Ee.call(null, this));
};
h.entries = function() {
  return Ae(F(this));
};
h.values = function() {
  return bc(Fe.a ? Fe.a(this) : Fe.call(null, this));
};
h.has = function(a) {
  return Uc(this, a);
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
        Oc(b) ? (c = Ab(b), b = Bb(b), g = c, d = zc(c), c = g) : (c = G(b), g = K(c, 0), c = f = K(c, 1), a.b ? a.b(c, g) : a.call(null, c, g), b = H(b), c = null, d = 0), e = 0;
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
  return ye(this, b);
};
h.Ia = function() {
  return new kf({}, this.root, this.g, this.ha, this.la);
};
h.Z = function() {
  return fb(Ie, this.j);
};
h.hb = function(a, b) {
  if (null == b) {
    return this.ha ? new jf(this.j, this.g - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ra(0, Tb(b), b);
  return c === this.root ? this : new jf(this.j, this.g - 1, c, this.ha, this.la, null);
};
h.Ha = function(a, b, c) {
  if (null == b) {
    return this.ha && c === this.la ? this : new jf(this.j, this.ha ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new Ne;
  b = (null == this.root ? We : this.root).na(0, Tb(b), b, c, a);
  return b === this.root ? this : new jf(this.j, a.sa ? this.g + 1 : this.g, b, this.ha, this.la, null);
};
h.W = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.Qa() : null;
    return this.ha ? tc(new P(null, 2, 5, Q, [null, this.la], null), a) : a;
  }
  return null;
};
h.X = function(a, b) {
  return new jf(b, this.g, this.root, this.ha, this.la, this.m);
};
h.G = function(a, b) {
  if (Nc(b)) {
    return Ua(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = F(b);;) {
    if (null == d) {
      return c;
    }
    var e = G(d);
    if (Nc(e)) {
      c = Ua(c, E.b(e, 0), E.b(e, 1)), d = H(d);
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
var Ie = new jf(null, 0, null, !1, null, gc);
function Fc(a, b) {
  for (var c = a.length, d = 0, e = tb(Ie);;) {
    if (d < c) {
      var f = d + 1, e = e.Pa(null, a[d], b[d]), d = f
    } else {
      return vb(e);
    }
  }
}
jf.prototype[Ea] = function() {
  return bc(this);
};
function kf(a, b, c, d, e) {
  this.s = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.la = e;
  this.h = 258;
  this.p = 56;
}
function lf(a, b) {
  if (a.s) {
    if (b ? b.h & 2048 || b.xb || (b.h ? 0 : z(Xa, b)) : z(Xa, b)) {
      return mf(a, Je.a ? Je.a(b) : Je.call(null, b), Ke.a ? Ke.a(b) : Ke.call(null, b));
    }
    for (var c = F(b), d = a;;) {
      var e = G(c);
      if (y(e)) {
        var f = e, c = H(c), d = mf(d, function() {
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
function mf(a, b, c) {
  if (a.s) {
    if (null == b) {
      a.la !== c && (a.la = c), a.ha || (a.count += 1, a.ha = !0);
    } else {
      var d = new Ne;
      b = (null == a.root ? We : a.root).oa(a.s, 0, Tb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.sa && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = kf.prototype;
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
  return lf(this, b);
};
h.Xa = function() {
  var a;
  if (this.s) {
    this.s = null, a = new jf(null, this.count, this.root, this.ha, this.la, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Pa = function(a, b, c) {
  return mf(this, b, c);
};
var Id = function Id() {
  return Id.k(0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Id.k = function(a) {
  for (var b = F(a), c = tb(Ie);;) {
    if (b) {
      a = H(H(b));
      var d = G(b), b = G(H(b)), c = xb(c, d, b), b = a;
    } else {
      return vb(c);
    }
  }
};
Id.u = 0;
Id.t = function(a) {
  return Id.k(F(a));
};
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
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : z(Ra, a)) : z(Ra, a)) ? this.ea.ga(null) : H(this.ea);
  return null == a ? null : new nf(a, this.fa);
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.ca = function() {
  return this.ea.ca(null).ib();
};
h.ja = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : z(Ra, a)) : z(Ra, a)) ? this.ea.ga(null) : H(this.ea);
  return null != a ? new nf(a, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new nf(this.ea, b);
};
h.G = function(a, b) {
  return tc(b, this);
};
nf.prototype[Ea] = function() {
  return bc(this);
};
function Ee(a) {
  return(a = F(a)) ? new nf(a, null) : null;
}
function Je(a) {
  return Ya(a);
}
function of(a, b) {
  this.ea = a;
  this.fa = b;
  this.h = 32374988;
  this.p = 0;
}
h = of.prototype;
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
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : z(Ra, a)) : z(Ra, a)) ? this.ea.ga(null) : H(this.ea);
  return null == a ? null : new of(a, this.fa);
};
h.w = function() {
  return dc(this);
};
h.n = function(a, b) {
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.fa);
};
h.aa = function(a, b) {
  return Vc(b, this);
};
h.ba = function(a, b, c) {
  return Yc(b, c, this);
};
h.ca = function() {
  return this.ea.ca(null).jb();
};
h.ja = function() {
  var a = this.ea, a = (a ? a.h & 128 || a.Va || (a.h ? 0 : z(Ra, a)) : z(Ra, a)) ? this.ea.ga(null) : H(this.ea);
  return null != a ? new of(a, this.fa) : Zb;
};
h.W = function() {
  return this;
};
h.X = function(a, b) {
  return new of(this.ea, b);
};
h.G = function(a, b) {
  return tc(b, this);
};
of.prototype[Ea] = function() {
  return bc(this);
};
function Fe(a) {
  return(a = F(a)) ? new of(a, null) : null;
}
function Ke(a) {
  return Za(a);
}
function md(a) {
  if (a && (a.p & 4096 || a.zb)) {
    return a.Ma(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([D("Doesn't support name: "), D(a)].join(""));
}
function pf(a, b, c) {
  this.i = a;
  this.end = b;
  this.step = c;
}
pf.prototype.Ya = function() {
  return 0 < this.step ? this.i < this.end : this.i > this.end;
};
pf.prototype.next = function() {
  var a = this.i;
  this.i += this.step;
  return a;
};
function qf(a, b, c, d, e) {
  this.j = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.h = 32375006;
  this.p = 8192;
}
h = qf.prototype;
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
  return new pf(this.start, this.end, this.step);
};
h.F = function() {
  return this.j;
};
h.ga = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new qf(this.j, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new qf(this.j, this.start + this.step, this.end, this.step, null) : null;
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
  return sc(this, b);
};
h.Z = function() {
  return Kc(Zb, this.j);
};
h.aa = function(a, b) {
  return ic(this, b);
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
  return null != nb(this) ? new qf(this.j, this.start + this.step, this.end, this.step, null) : Zb;
};
h.W = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.X = function(a, b) {
  return new qf(b, this.start, this.end, this.step, this.m);
};
h.G = function(a, b) {
  return tc(b, this);
};
qf.prototype[Ea] = function() {
  return bc(this);
};
function rf(a, b) {
  return new qf(null, a, b, 1, null);
}
function sf(a, b, c, d, e, f, g) {
  var k = oa;
  oa = null == oa ? null : oa - 1;
  try {
    if (null != oa && 0 > oa) {
      return pb(a, "#");
    }
    pb(a, c);
    if (0 === za.a(f)) {
      F(g) && pb(a, function() {
        var a = tf.a(f);
        return y(a) ? a : "...";
      }());
    } else {
      if (F(g)) {
        var l = G(g);
        b.f ? b.f(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = H(g), n = za.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          F(m) && 0 === n && (pb(a, d), pb(a, function() {
            var a = tf.a(f);
            return y(a) ? a : "...";
          }()));
          break;
        } else {
          pb(a, d);
          var p = G(m);
          c = a;
          g = f;
          b.f ? b.f(p, c, g) : b.call(null, p, c, g);
          var q = H(m);
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
function uf(a, b) {
  for (var c = F(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.D(null, f);
      pb(a, g);
      f += 1;
    } else {
      if (c = F(c)) {
        d = c, Oc(d) ? (c = Ab(d), e = Bb(d), d = c, g = zc(c), c = e, e = g) : (g = G(d), pb(a, g), c = H(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var vf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function wf(a) {
  return[D('"'), D(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return vf[a];
  })), D('"')].join("");
}
function xf(a, b, c) {
  if (null == a) {
    return pb(b, "nil");
  }
  if (void 0 === a) {
    return pb(b, "#\x3cundefined\x3e");
  }
  if (y(function() {
    var b = L(c, va);
    return y(b) ? (b = a ? a.h & 131072 || a.yb ? !0 : a.h ? !1 : z(cb, a) : z(cb, a)) ? Lc(a) : b : b;
  }())) {
    pb(b, "^");
    var d = Lc(a);
    yf.f ? yf.f(d, b, c) : yf.call(null, d, b, c);
    pb(b, " ");
  }
  return null == a ? pb(b, "nil") : a.Hb ? a.Sb(a, b, c) : a && (a.h & 2147483648 || a.V) ? a.A(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? pb(b, "" + D(a)) : null != a && a.constructor === Object ? (pb(b, "#js "), d = Nd.b(function(b) {
    return new P(null, 2, 5, Q, [ld.a(b), a[b]], null);
  }, Pc(a)), zf.o ? zf.o(d, yf, b, c) : zf.call(null, d, yf, b, c)) : Aa(a) ? sf(b, yf, "#js [", " ", "]", c, a) : y("string" == typeof a) ? y(ua.a(c)) ? pb(b, wf(a)) : pb(b, a) : Hc(a) ? uf(b, vc(["#\x3c", "" + D(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + D(a);;) {
      if (zc(c) < b) {
        c = [D("0"), D(c)].join("");
      } else {
        return c;
      }
    }
  }, uf(b, vc(['#inst "', "" + D(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : y(a instanceof RegExp) ? uf(b, vc(['#"', a.source, '"'], 0)) : (a ? a.h & 2147483648 || a.V || (a.h ? 0 : z(qb, a)) : z(qb, a)) ? rb(a, b, c) : uf(b, vc(["#\x3c", "" + D(a), "\x3e"], 0));
}
function yf(a, b, c) {
  var d = Af.a(c);
  return y(d) ? (c = M.f(c, Bf, xf), d.f ? d.f(a, b, c) : d.call(null, a, b, c)) : xf(a, b, c);
}
function Ld() {
  var a = 0 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 0), 0) : null, b = qa(), c;
  if (null == a || Ba(F(a))) {
    c = "";
  } else {
    c = D;
    var d = b, b = new ka;
    a: {
      var e = a, a = new Ib(b);
      yf(G(e), a, d);
      for (var e = F(H(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.D(null, k);
          pb(a, " ");
          yf(l, a, d);
          k += 1;
        } else {
          if (e = F(e)) {
            f = e, Oc(f) ? (e = Ab(f), g = Bb(f), f = e, l = zc(e), e = g, g = l) : (l = G(f), pb(a, " "), yf(l, a, d), e = H(f), f = null, g = 0), k = 0;
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
    var k = Ya(a);
    b.f ? b.f(k, c, d) : b.call(null, k, c, d);
    pb(c, " ");
    a = Za(a);
    return b.f ? b.f(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, F(a));
}
Xb.prototype.V = !0;
Xb.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
nd.prototype.V = !0;
nd.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
ef.prototype.V = !0;
ef.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
Ce.prototype.V = !0;
Ce.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
oe.prototype.V = !0;
oe.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
jd.prototype.V = !0;
jd.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
jf.prototype.V = !0;
jf.prototype.A = function(a, b, c) {
  return zf(this, yf, b, c);
};
gf.prototype.V = !0;
gf.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
se.prototype.V = !0;
se.prototype.A = function(a, b, c) {
  return sf(b, yf, "[", " ", "]", c, this);
};
rd.prototype.V = !0;
rd.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
Gd.prototype.V = !0;
Gd.prototype.A = function(a, b, c) {
  pb(b, "#\x3cAtom: ");
  yf(this.state, b, c);
  return pb(b, "\x3e");
};
of.prototype.V = !0;
of.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
P.prototype.V = !0;
P.prototype.A = function(a, b, c) {
  return sf(b, yf, "[", " ", "]", c, this);
};
hd.prototype.V = !0;
hd.prototype.A = function(a, b) {
  return pb(b, "()");
};
sa.prototype.V = !0;
sa.prototype.A = function(a, b, c) {
  return zf(this, yf, b, c);
};
qf.prototype.V = !0;
qf.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
nf.prototype.V = !0;
nf.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
gd.prototype.V = !0;
gd.prototype.A = function(a, b, c) {
  return sf(b, yf, "(", " ", ")", c, this);
};
function Cf(a, b) {
  Wc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function Df() {
  return 1 * (Math.random.l ? Math.random.l() : Math.random.call(null));
}
function Dc(a) {
  a *= Math.random.l ? Math.random.l() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var Ef = null;
function Ff() {
  if (null == Ef) {
    var a = new sa(null, 3, [Gf, R, Hf, R, If, R], null);
    Ef = O ? O(a) : Hd.call(null, a);
  }
  return Ef;
}
function Jf(a, b, c) {
  var d = $b.b(b, c);
  if (!d && !(d = Uc(If.a(a).call(null, b), c)) && (d = Nc(c)) && (d = Nc(b))) {
    if (d = zc(c) === zc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== zc(c)) {
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
  b = J.a ? J.a(b) : J.call(null, b);
  a = L(Gf.a(b), a);
  return F(a) ? a : null;
}
function Lf(a, b, c, d) {
  Md.b(a, function() {
    return J.a ? J.a(b) : J.call(null, b);
  });
  Md.b(c, function() {
    return J.a ? J.a(d) : J.call(null, d);
  });
}
var Mf = function Mf(b, c, d) {
  var e = (J.a ? J.a(d) : J.call(null, d)).call(null, b), e = y(y(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (y(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf(c);;) {
      if (0 < zc(e)) {
        Mf(b, G(e), d), e = Yb(e);
      } else {
        return null;
      }
    }
  }();
  if (y(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf(b);;) {
      if (0 < zc(e)) {
        Mf(G(e), c, d), e = Yb(e);
      } else {
        return null;
      }
    }
  }();
  return y(e) ? e : !1;
};
function Nf(a, b, c) {
  c = Mf(a, b, c);
  if (y(c)) {
    a = c;
  } else {
    c = Jf;
    var d;
    d = Ff();
    d = J.a ? J.a(d) : J.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Of = function Of(b, c, d, e, f, g, k) {
  var l = Wc(function(e, g) {
    var k = K(g, 0);
    K(g, 1);
    if (Jf(J.a ? J.a(d) : J.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Nf(k, G(e), f);
      l = y(l) ? g : e;
      if (!y(Nf(G(l), k, f))) {
        throw Error([D("Multiple methods in multimethod '"), D(b), D("' match dispatch value: "), D(c), D(" -\x3e "), D(k), D(" and "), D(G(l)), D(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, J.a ? J.a(e) : J.call(null, e));
  if (y(l)) {
    if ($b.b(J.a ? J.a(k) : J.call(null, k), J.a ? J.a(d) : J.call(null, d))) {
      return Md.o(g, M, c, G(H(l))), G(H(l));
    }
    Lf(g, e, k, d);
    return Of(b, c, d, e, f, g, k);
  }
  return null;
};
function S(a, b) {
  throw Error([D("No method in multimethod '"), D(a), D("' for dispatch value: "), D(b)].join(""));
}
function Pf(a, b, c, d, e, f, g, k) {
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
h = Pf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I, U) {
    a = this;
    var ha = Dd(a.e, b, c, d, e, vc([f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I, U], 0)), Ag = X(this, ha);
    y(Ag) || S(a.name, ha);
    return Dd(Ag, b, c, d, e, vc([f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I, U], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I) {
    a = this;
    var U = a.e.R ? a.e.R(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I), ha = X(this, U);
    y(ha) || S(a.name, U);
    return ha.R ? ha.R(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I) : ha.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x, I);
  }
  function c(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x) {
    a = this;
    var I = a.e.Q ? a.e.Q(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x), U = X(this, I);
    y(U) || S(a.name, I);
    return U.Q ? U.Q(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x) : U.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B, x);
  }
  function d(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B) {
    a = this;
    var x = a.e.P ? a.e.P(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B), I = X(this, x);
    y(I) || S(a.name, x);
    return I.P ? I.P(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B) : I.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C, B);
  }
  function e(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) {
    a = this;
    var B = a.e.O ? a.e.O(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C), x = X(this, B);
    y(x) || S(a.name, B);
    return x.O ? x.O(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C) : x.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, C);
  }
  function f(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) {
    a = this;
    var C = a.e.N ? a.e.N(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w), B = X(this, C);
    y(B) || S(a.name, C);
    return B.N ? B.N(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : B.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
  }
  function g(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
    a = this;
    var w = a.e.M ? a.e.M(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), C = X(this, w);
    y(C) || S(a.name, w);
    return C.M ? C.M(b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : C.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
    a = this;
    var u = a.e.L ? a.e.L(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t), w = X(this, u);
    y(w) || S(a.name, u);
    return w.L ? w.L(b, c, d, e, f, g, k, l, m, n, p, q, r, t) : w.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
    a = this;
    var t = a.e.K ? a.e.K(b, c, d, e, f, g, k, l, m, n, p, q, r) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r), u = X(this, t);
    y(u) || S(a.name, t);
    return u.K ? u.K(b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, b, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, m, n, p, q) {
    a = this;
    var r = a.e.J ? a.e.J(b, c, d, e, f, g, k, l, m, n, p, q) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
    y(t) || S(a.name, r);
    return t.J ? t.J(b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, b, c, d, e, f, g, k, l, m, n, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, m, n, p) {
    a = this;
    var q = a.e.I ? a.e.I(b, c, d, e, f, g, k, l, m, n, p) : a.e.call(null, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
    y(r) || S(a.name, q);
    return r.I ? r.I(b, c, d, e, f, g, k, l, m, n, p) : r.call(null, b, c, d, e, f, g, k, l, m, n, p);
  }
  function p(a, b, c, d, e, f, g, k, l, m, n) {
    a = this;
    var p = a.e.H ? a.e.H(b, c, d, e, f, g, k, l, m, n) : a.e.call(null, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
    y(q) || S(a.name, p);
    return q.H ? q.H(b, c, d, e, f, g, k, l, m, n) : q.call(null, b, c, d, e, f, g, k, l, m, n);
  }
  function q(a, b, c, d, e, f, g, k, l, m) {
    a = this;
    var n = a.e.U ? a.e.U(b, c, d, e, f, g, k, l, m) : a.e.call(null, b, c, d, e, f, g, k, l, m), p = X(this, n);
    y(p) || S(a.name, n);
    return p.U ? p.U(b, c, d, e, f, g, k, l, m) : p.call(null, b, c, d, e, f, g, k, l, m);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var m = a.e.T ? a.e.T(b, c, d, e, f, g, k, l) : a.e.call(null, b, c, d, e, f, g, k, l), n = X(this, m);
    y(n) || S(a.name, m);
    return n.T ? n.T(b, c, d, e, f, g, k, l) : n.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.e.S ? a.e.S(b, c, d, e, f, g, k) : a.e.call(null, b, c, d, e, f, g, k), m = X(this, l);
    y(m) || S(a.name, l);
    return m.S ? m.S(b, c, d, e, f, g, k) : m.call(null, b, c, d, e, f, g, k);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var k = a.e.B ? a.e.B(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g), l = X(this, k);
    y(l) || S(a.name, k);
    return l.B ? l.B(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function w(a, b, c, d, e, f) {
    a = this;
    var g = a.e.r ? a.e.r(b, c, d, e, f) : a.e.call(null, b, c, d, e, f), k = X(this, g);
    y(k) || S(a.name, g);
    return k.r ? k.r(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function B(a, b, c, d, e) {
    a = this;
    var f = a.e.o ? a.e.o(b, c, d, e) : a.e.call(null, b, c, d, e), g = X(this, f);
    y(g) || S(a.name, f);
    return g.o ? g.o(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function C(a, b, c, d) {
    a = this;
    var e = a.e.f ? a.e.f(b, c, d) : a.e.call(null, b, c, d), f = X(this, e);
    y(f) || S(a.name, e);
    return f.f ? f.f(b, c, d) : f.call(null, b, c, d);
  }
  function I(a, b, c) {
    a = this;
    var d = a.e.b ? a.e.b(b, c) : a.e.call(null, b, c), e = X(this, d);
    y(e) || S(a.name, d);
    return e.b ? e.b(b, c) : e.call(null, b, c);
  }
  function U(a, b) {
    a = this;
    var c = a.e.a ? a.e.a(b) : a.e.call(null, b), d = X(this, c);
    y(d) || S(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function ha(a) {
    a = this;
    var b = a.e.l ? a.e.l() : a.e.call(null), c = X(this, b);
    y(c) || S(a.name, b);
    return c.l ? c.l() : c.call(null);
  }
  var x = null, x = function(x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb, Pb, mc, kd, Le) {
    switch(arguments.length) {
      case 1:
        return ha.call(this, x);
      case 2:
        return U.call(this, x, T);
      case 3:
        return I.call(this, x, T, V);
      case 4:
        return C.call(this, x, T, V, W);
      case 5:
        return B.call(this, x, T, V, W, Z);
      case 6:
        return w.call(this, x, T, V, W, Z, aa);
      case 7:
        return u.call(this, x, T, V, W, Z, aa, ba);
      case 8:
        return t.call(this, x, T, V, W, Z, aa, ba, ga);
      case 9:
        return r.call(this, x, T, V, W, Z, aa, ba, ga, ma);
      case 10:
        return q.call(this, x, T, V, W, Z, aa, ba, ga, ma, na);
      case 11:
        return p.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra);
      case 12:
        return n.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa);
      case 13:
        return m.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca);
      case 14:
        return l.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa);
      case 15:
        return k.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma);
      case 16:
        return g.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc);
      case 17:
        return f.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb);
      case 18:
        return e.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb);
      case 19:
        return d.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb, Pb);
      case 20:
        return c.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb, Pb, mc);
      case 21:
        return b.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb, Pb, mc, kd);
      case 22:
        return a.call(this, x, T, V, W, Z, aa, ba, ga, ma, na, ra, wa, Ca, Fa, Ma, lc, gb, wb, Pb, mc, kd, Le);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  x.a = ha;
  x.b = U;
  x.f = I;
  x.o = C;
  x.r = B;
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
  y(b) || S(this.name, a);
  return b.l ? b.l() : b.call(null);
};
h.a = function(a) {
  var b = this.e.a ? this.e.a(a) : this.e.call(null, a), c = X(this, b);
  y(c) || S(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.b = function(a, b) {
  var c = this.e.b ? this.e.b(a, b) : this.e.call(null, a, b), d = X(this, c);
  y(d) || S(this.name, c);
  return d.b ? d.b(a, b) : d.call(null, a, b);
};
h.f = function(a, b, c) {
  var d = this.e.f ? this.e.f(a, b, c) : this.e.call(null, a, b, c), e = X(this, d);
  y(e) || S(this.name, d);
  return e.f ? e.f(a, b, c) : e.call(null, a, b, c);
};
h.o = function(a, b, c, d) {
  var e = this.e.o ? this.e.o(a, b, c, d) : this.e.call(null, a, b, c, d), f = X(this, e);
  y(f) || S(this.name, e);
  return f.o ? f.o(a, b, c, d) : f.call(null, a, b, c, d);
};
h.r = function(a, b, c, d, e) {
  var f = this.e.r ? this.e.r(a, b, c, d, e) : this.e.call(null, a, b, c, d, e), g = X(this, f);
  y(g) || S(this.name, f);
  return g.r ? g.r(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.B = function(a, b, c, d, e, f) {
  var g = this.e.B ? this.e.B(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f), k = X(this, g);
  y(k) || S(this.name, g);
  return k.B ? k.B(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.S = function(a, b, c, d, e, f, g) {
  var k = this.e.S ? this.e.S(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g), l = X(this, k);
  y(l) || S(this.name, k);
  return l.S ? l.S(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.T = function(a, b, c, d, e, f, g, k) {
  var l = this.e.T ? this.e.T(a, b, c, d, e, f, g, k) : this.e.call(null, a, b, c, d, e, f, g, k), m = X(this, l);
  y(m) || S(this.name, l);
  return m.T ? m.T(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.U = function(a, b, c, d, e, f, g, k, l) {
  var m = this.e.U ? this.e.U(a, b, c, d, e, f, g, k, l) : this.e.call(null, a, b, c, d, e, f, g, k, l), n = X(this, m);
  y(n) || S(this.name, m);
  return n.U ? n.U(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.H = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.e.H ? this.e.H(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m), p = X(this, n);
  y(p) || S(this.name, n);
  return p.H ? p.H(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.I = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.e.I ? this.e.I(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n), q = X(this, p);
  y(q) || S(this.name, p);
  return q.I ? q.I(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.J = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.e.J ? this.e.J(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = X(this, q);
  y(r) || S(this.name, q);
  return r.J ? r.J(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.K = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.e.K ? this.e.K(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = X(this, r);
  y(t) || S(this.name, r);
  return t.K ? t.K(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.L = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.e.L ? this.e.L(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), u = X(this, t);
  y(u) || S(this.name, t);
  return u.L ? u.L(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.M = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var u = this.e.M ? this.e.M(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), w = X(this, u);
  y(w) || S(this.name, u);
  return w.M ? w.M(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : w.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.N = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  var w = this.e.N ? this.e.N(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), B = X(this, w);
  y(B) || S(this.name, w);
  return B.N ? B.N(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : B.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.O = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) {
  var B = this.e.O ? this.e.O(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w), C = X(this, B);
  y(C) || S(this.name, B);
  return C.O ? C.O(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w) : C.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w);
};
h.P = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) {
  var C = this.e.P ? this.e.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B), I = X(this, C);
  y(I) || S(this.name, C);
  return I.P ? I.P(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B) : I.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) {
  var I = this.e.Q ? this.e.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C), U = X(this, I);
  y(U) || S(this.name, I);
  return U.Q ? U.Q(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C) : U.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) {
  var U = this.e.R ? this.e.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I), ha = X(this, U);
  y(ha) || S(this.name, U);
  return ha.R ? ha.R(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I) : ha.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I);
};
h.gb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U) {
  var ha = Dd(this.e, a, b, c, d, vc([e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U], 0)), x = X(this, ha);
  y(x) || S(this.name, ha);
  return Dd(x, a, b, c, d, vc([e, f, g, k, l, m, n, p, q, r, t, u, w, B, C, I, U], 0));
};
function Qf(a, b, c) {
  Md.o(a.Ta, M, b, c);
  Lf(a.$a, a.Ta, a.Ua, a.Za);
}
function X(a, b) {
  $b.b(function() {
    var b = a.Ua;
    return J.a ? J.a(b) : J.call(null, b);
  }(), function() {
    var b = a.Za;
    return J.a ? J.a(b) : J.call(null, b);
  }()) || Lf(a.$a, a.Ta, a.Ua, a.Za);
  var c = function() {
    var b = a.$a;
    return J.a ? J.a(b) : J.call(null, b);
  }().call(null, b);
  if (y(c)) {
    return c;
  }
  c = Of(a.name, b, a.Za, a.Ta, a.Jb, a.$a, a.Ua);
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
  return this[ea] || (this[ea] = ++fa);
};
var Rf = new N(null, "bullets", "bullets", 1734809024), Sf = new N(null, "p2", "p2", 905500641), Tf = new N(null, "r", "r", -471384190), Uf = new N(null, "v", "v", 21465059), va = new N(null, "meta", "meta", 1499536964), Vf = new N(null, "enemy-spawn", "enemy-spawn", 1471569540), xa = new N(null, "dup", "dup", 556298533), Wf = new N(null, "dir", "dir", 1734754661), Xf = new N(null, "ammo", "ammo", -1520726489), Jd = new N(null, "validator", "validator", -1966190681), Yf = new N(null, "default", "default", 
-1987822328), Zf = new N(null, "w", "w", 354169001), $f = new N(null, "th", "th", -545608566), ag = new N(null, "th1", "th1", 583362347), Td = new N(null, "pos", "pos", -864607220), bg = new N(null, "type", "type", 1174270348), cg = new N(null, "th2", "th2", 1996173036), dg = new N(null, "cooldown", "cooldown", -1178127572), Bf = new N(null, "fallback-impl", "fallback-impl", -1501286995), ta = new N(null, "flush-on-newline", "flush-on-newline", -151457939), eg = new N(null, "p1", "p1", -936759954), 
fg = new N(null, "chunks", "chunks", 83720431), Hf = new N(null, "descendants", "descendants", 1824886031), gg = new N(null, "k", "k", -2146297393), hg = new N("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), If = new N(null, "ancestors", "ancestors", -776045424), ig = new N(null, "level", "level", 1290497552), ua = new N(null, "readably", "readably", 1129599760), tf = new N(null, "more-marker", "more-marker", -14717935), jg = new N(null, "head", "head", -771383919), kg = new N(null, 
"c", "c", -1763192079), za = new N(null, "print-length", "print-length", 1931866356), lg = new N(null, "score", "score", -1963588780), mg = new N(null, "terrain", "terrain", 704966005), Gf = new N(null, "parents", "parents", -2027538891), ng = new N(null, "b", "b", 1482224470), og = new N(null, "health", "health", -295520649), Sd = new N(null, "player", "player", -97687400), pg = new N(null, "x", "x", 2099068185), qg = new N(null, "enemies", "enemies", 2114285722), rg = new N(null, "draw", "draw", 
1358331674), sg = new N(null, "hierarchy", "hierarchy", -1053470341), Af = new N(null, "alt-impl", "alt-impl", 670969595), tg = new N(null, "barrel-change", "barrel-change", -347000069), ug = new N(null, "temperature", "temperature", 899018429), vg = new N("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), wg = new N(null, "left", "left", -399115937);
function xg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c - e, d - f];
}
function yg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return[c + e, d + f];
}
function zg(a, b) {
  var c = K(b, 0), d = K(b, 1);
  return[a * c, a * d];
}
function Bg(a, b) {
  var c = K(a, 0), d = K(a, 1), e = K(b, 0), f = K(b, 1);
  return c * e + d * f;
}
function Cg(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.sqrt(b * b + a * a);
}
function Dg(a) {
  return zg(1 / Cg(a), a);
}
function Eg(a) {
  var b = K(a, 0);
  a = K(a, 1);
  return Math.atan2(a, b);
}
;var Fg = function Fg() {
  return Fg.k(arguments[0], 1 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Fg.k = function(a, b) {
  var c = K(b, 0), d = K(c, 0), c = K(c, 1);
  fd(b);
  a.beginPath();
  a.moveTo(d, c);
  for (var d = F(b), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var k = e.D(null, g), c = K(k, 0), k = K(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = F(d)) {
        Oc(d) ? (e = Ab(d), d = Bb(d), c = e, f = zc(e), e = c) : (e = G(d), c = K(e, 0), k = K(e, 1), a.lineTo(c, k), d = H(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
Fg.u = 1;
Fg.t = function(a) {
  var b = G(a);
  a = H(a);
  return Fg.k(b, a);
};
var Gg = function Gg() {
  return Gg.k(arguments[0], 1 < arguments.length ? new Xb(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Gg.k = function(a, b) {
  Bd(Fg, a, b);
  return a.stroke();
};
Gg.u = 1;
Gg.t = function(a) {
  var b = G(a);
  a = H(a);
  return Gg.k(b, a);
};
function Hg(a, b, c) {
  var d = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(d, b, c, 0, 2 * Math.PI);
  return a.stroke();
}
function Ig(a, b, c, d, e) {
  var f = K(b, 0);
  b = K(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function Jg(a, b) {
  a.save();
  try {
    return b.l ? b.l() : b.call(null);
  } finally {
    a.restore();
  }
}
;var Kg = document.createElement("canvas");
Kg.setAttribute("width", 1280);
Kg.setAttribute("height", 960);
Kg.setAttribute("style", "border: 1px solid #000");
Kg.getContext("2d");
var Lg = new P(null, 2, 5, Q, [0, 0], null);
O || Hd.call(null, Lg);
var Mg = 2 * Math.PI;
if ("undefined" === typeof Ng) {
  var Ng = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Ec(R, sg, Ff());
    return new Pf(Wb("draw-segment"), function() {
      return function(a, b) {
        return bg.a(b);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Qf(Ng, vg, function(a, b) {
  var c = Sc(b) ? Ad(Id, b) : b, d = L(c, eg), c = L(c, Sf);
  return Gg.k(a, vc([d, c], 0));
});
Qf(Ng, hg, function(a, b) {
  var c = Sc(b) ? Ad(Id, b) : b, d = L(c, kg), e = L(c, ag), f = L(c, cg), g = L(c, Wf), c = L(c, Tf);
  return 0 > g ? Ig(a, d, c, f, e) : Ig(a, d, c, e, f);
});
if ("undefined" === typeof Og) {
  var Og = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Ec(R, sg, Ff());
    return new Pf(Wb("update-seg"), function() {
      return function(a) {
        return bg.a(a);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Qf(Og, vg, function(a, b, c) {
  a = Sc(a) ? Ad(Id, a) : a;
  var d = L(a, Wf);
  b = zg(b, d);
  return Xd(a, $b.b(c, jg) ? Sf : eg, yg, b);
});
Qf(Og, hg, function(a, b, c) {
  a = Sc(a) ? Ad(Id, a) : a;
  var d = L(a, Wf), e = L(a, Tf);
  b = b / e * d;
  return Xd(a, $b.b(c, jg) ? cg : ag, ad, b);
});
if ("undefined" === typeof Pg) {
  var Pg = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Ec(R, sg, Ff());
    return new Pf(Wb("seg-normal"), function() {
      return function(a) {
        return bg.a(a);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Qf(Pg, vg, function(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, Wf), c = K(d, 0), d = K(d, 1);
  return $b.b(b, wg) ? [-d, c] : [d, -c];
});
Qf(Pg, hg, function(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a;
  L(c, ag);
  var d = L(c, cg), c = L(c, Wf) * ($b.b(b, wg) ? -1 : 1);
  return zg(c, new P(null, 2, 5, Q, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Qg) {
  var Qg, Rg = O ? O(R) : Hd.call(null, R), Sg = O ? O(R) : Hd.call(null, R), Tg = O ? O(R) : Hd.call(null, R), Ug = O ? O(R) : Hd.call(null, R), Vg = Ec(R, sg, Ff());
  Qg = new Pf(Wb("seg-endpoint"), bg, Yf, Vg, Rg, Sg, Tg, Ug);
}
Qf(Qg, vg, function(a) {
  return Sf.a(a);
});
Qf(Qg, hg, function(a) {
  var b = Sc(a) ? Ad(Id, a) : a;
  L(b, ag);
  a = L(b, cg);
  var c = L(b, kg), b = L(b, Tf);
  return yg(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Wg(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, ag), e = L(c, cg), c = L(c, Wf);
  if (c * (e - d) > Mg) {
    return!0;
  }
  var f = (b % Mg + Mg) % Mg, d = (d % Mg + Mg) % Mg, e = (e % Mg + Mg) % Mg;
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Mg : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Mg;
}
if ("undefined" === typeof Xg) {
  var Xg = function() {
    var a = O ? O(R) : Hd.call(null, R), b = O ? O(R) : Hd.call(null, R), c = O ? O(R) : Hd.call(null, R), d = O ? O(R) : Hd.call(null, R), e = Ec(R, sg, Ff());
    return new Pf(Wb("check-intersection"), function() {
      return function(a, b) {
        return new P(null, 2, 5, Q, [bg.a(a), bg.a(b)], null);
      };
    }(a, b, c, d, e), Yf, e, a, b, c, d);
  }()
}
Qf(Xg, new P(null, 2, 5, Q, [vg, vg], null), function(a, b) {
  var c, d = new P(null, 2, 5, Q, [eg.a(a), Sf.a(a)], null);
  c = new P(null, 2, 5, Q, [eg.a(b), Sf.a(b)], null);
  var e = K(d, 0), d = K(d, 1), f = K(c, 0), g = K(c, 1), d = xg(d, e);
  c = K(d, 0);
  var d = K(d, 1), k = xg(g, f), g = K(k, 0), k = K(k, 1), f = xg(f, e), e = K(f, 0), f = K(f, 1), l = -1 * c * k - -1 * d * g;
  c = $b.b(l, 0) ? null : new P(null, 2, 5, Q, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = K(c, 0);
  d = K(c, 1);
  return y(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Qf(Xg, new P(null, 2, 5, Q, [vg, hg], null), function(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, eg), c = L(c, Sf), e = Sc(b) ? Ad(Id, b) : b, f = L(e, Tf);
  var g = L(e, kg), c = xg(c, d), e = Bg(c, c), d = xg(d, g), g = Bg(d, d), k = Bg(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Bg(c, d) - g) / e, e = (-Bg(c, d) + g) / e, g = Eg(yg(zg(f, c), d)), c = Eg(yg(zg(e, c), d)), f = new P(null, 4, 5, Q, [f, e, g, c], null)) : f = null;
  g = K(f, 0);
  e = K(f, 1);
  d = K(f, 2);
  c = K(f, 3);
  return y(f) ? (d = (f = 0 < g && 1 > g) ? Wg(b, d) : f, y(d) ? d : (e = 0 < e && 1 > e) ? Wg(b, c) : e) : f;
});
Qf(Xg, new P(null, 2, 5, Q, [hg, vg], null), function(a, b) {
  return Xg.b ? Xg.b(b, a) : Xg.call(null, b, a);
});
Qf(Xg, new P(null, 2, 5, Q, [hg, hg], null), function(a, b) {
  var c;
  var d = kg.a(a), e = Tf.a(a);
  c = kg.a(b);
  var f = Tf.a(b), g = xg(c, d), d = K(g, 0);
  c = K(g, 1);
  g = Bg(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new P(null, 4, 5, Q, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = K(c, 0);
  d = K(c, 1);
  f = K(c, 2);
  e = K(c, 3);
  return y(c) ? (c = Wg(a, g), d = y(c) ? c : Wg(a, d), y(d) ? (f = Wg(b, f), y(f) ? f : Wg(b, e)) : d) : c;
});
O || Hd.call(null, null);
var Yg = new sa(null, 1, [ig, 0], null);
O || Hd.call(null, Yg);
document.createElement("button").textContent = "Pause";
var Zg, $g, ah = dd(3 * (window.innerWidth - 20), 4);
$g = 1280 < ah ? 1280 : ah;
var bh = dd(4 * (window.innerHeight - 10), 3);
Zg = $g < bh ? $g : bh;
var ch = dd(3 * Zg, 4), dh = document.createElement("canvas");
y(Zg) && dh.setAttribute("width", Zg);
y(ch) && dh.setAttribute("height", ch);
dh.setAttribute("style", "border: 1px solid #000; display: block;");
dh.getContext("2d");
var eh = 2 * Math.PI, fh = document.createElement("button");
fh.textContent = "Pause";
var gh, hh, ih = dd(3 * (window.innerWidth - 20), 4);
hh = 1280 < ih ? 1280 : ih;
var jh = dd(4 * (window.innerHeight - 10), 3);
gh = hh < jh ? hh : jh;
var kh = dd(3 * gh, 4), lh = document.createElement("canvas");
y(gh) && lh.setAttribute("width", gh);
y(kh) && lh.setAttribute("height", kh);
lh.setAttribute("style", "border: 1px solid #000; display: block;");
var mh = document.createElement("div"), Y = lh.getContext("2d");
function nh() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(fh);
    a.appendChild(mh);
    return a;
  }());
  return a.appendChild(lh);
}
da("figwheel_test.common.init_elements", nh);
function oh(a) {
  Jg(Y, function() {
    if (y(!0)) {
      var b = Y.canvas;
      Y.clearRect(0, 0, b.width, b.height);
    }
    b = lh.width / 1280;
    Y.scale(b, b);
    Y.translate(640, 480);
    Y.scale(1, -1);
    return a.l ? a.l() : a.call(null);
  });
}
function ph() {
  for (var a = new P(null, 3, 5, Q, [Dc(500) - 250, -215, Dc(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = xd.b(Od(function(a, b) {
        return function(a, c) {
          return new P(null, 2, 5, Q, [a, (a + c) / 2 + (Df() - .5) * b], null);
        };
      }(a, b, c), vc([a, Yb(a)], 0)), new P(null, 1, 5, Q, [wc(a)], null)), b /= 2, --c;
    } else {
      return ne(a);
    }
  }
}
function qh(a) {
  var b = zc(a) / 2;
  return Wc(function() {
    return function(a, b) {
      return M.f(a, b, -215);
    };
  }(b), a, new qf(null, b - 4, b + 4, 1, null));
}
function rh() {
  var a = ph(), b = zc(a) - 1;
  return ne(Fd(function(a, b) {
    return function(a, c) {
      return new P(null, 2, 5, Q, [1280 * a / b - 640, c], null);
    };
  }(a, b), qh(a)));
}
function sh(a) {
  return 0 < og.a(Sd.a(a));
}
var th = function(a) {
  return function() {
    return Md.b(a, function() {
      return function(a) {
        return((a + 1) % 1E5 + 1E5) % 1E5;
      };
    }(a));
  };
}(O ? O(0) : Hd.call(null, 0));
function uh(a, b, c) {
  b = [Math.cos(b), Math.sin(b)];
  return Yd(a, Rf, M, th.l ? th.l() : th.call(null), new sa(null, 2, [pg, yg(c, zg(50, b)), Uf, zg(15, b)], null));
}
function vh(a) {
  var b = new P(null, 1, 5, Q, [Sd], null), c = J.a ? J.a(wh) : J.call(null, wh), d = J.a ? J.a(xh) : J.call(null, xh), e = Rd(a, b), e = Sc(e) ? Ad(Id, e) : e, f = L(e, tg), g = L(e, ug), k = L(e, Xf), l = L(e, Zf), m = L(e, $f), n = L(e, dg), p = L(e, Td), q = L(e, gg), r = L(e, ng), t = L(e, og), u = new P(null, 2, 5, Q, [Math.cos(m), Math.sin(m)], null), w = function() {
    var a;
    a = K(u, 0);
    var b = K(u, 1), d = K(c, 0), e = K(c, 1);
    a = a * e - d * b;
    b = Bg(u, c);
    return Math.atan2(a, b);
  }(), q = l + q * w + -1 * l * r, B = m + l, l = function() {
    var a = $b.b(n, 0);
    return a && (a = $b.b(f, 0)) ? (a = 0 < k) ? y(d) ? 0 < t : d : a : a;
  }(), g = y(l) ? g + 3 : .995 * g;
  return Ud(y(l) ? uh(a, m, p) : a, b, M.f(M.f(M.f(M.f(M.f(M.f(e, dg, y(l) ? 5 : function() {
    var a = n - 1;
    return 0 < a ? a : 0;
  }()), ug, g), tg, 100 < g ? 600 : function() {
    var a = f - 1;
    return 0 < a ? a : 0;
  }()), Xf, y(l) ? k - 1 : k), Zf, 0 > B || B > eh / 2 ? 0 : q), $f, function() {
    var a = 0 < B ? B : 0, b = eh / 2;
    return a < b ? a : b;
  }()));
}
function yh(a) {
  var b = Sc(a) ? Ad(Id, a) : a, c = L(b, $f), d = L(b, dg), e = L(b, Td), f = L(b, og);
  Jg(Y, function(a, b, c, d, e, f) {
    return function() {
      var q = K(e, 0), r = K(e, 1);
      Y.translate(q, r);
      return 0 < f ? (Jg(Y, function(a, b, c, d, e, f, g) {
        return function() {
          Y.rotate(f);
          Gg.k(Y, vc([new P(null, 2, 5, Q, [20, -3], null), new P(null, 2, 5, Q, [20, 3], null), new P(null, 2, 5, Q, [40, 3], null), new P(null, 2, 5, Q, [40, -3], null), new P(null, 2, 5, Q, [20, -3], null)], 0));
          return $b.b(g, 5) ? Hg(Y, new P(null, 2, 5, Q, [50, 0], null), 10) : null;
        };
      }(e, q, r, a, b, c, d, e, f)), Y.fillStyle = "#fff", Y.beginPath(), Y.arc(0, 0, 30, eh / -12, 7 * eh / 12), Y.lineTo(15 * Math.sqrt(3), -15), Y.fill(), Y.stroke()) : Gg.k(Y, vc([new P(null, 2, 5, Q, [-24, -15], null), new P(null, 2, 5, Q, [-28, -3], null), new P(null, 2, 5, Q, [-21, -4], null), new P(null, 2, 5, Q, [-14, 5], null), new P(null, 2, 5, Q, [4, -4], null), new P(null, 2, 5, Q, [11, 3], null), new P(null, 2, 5, Q, [25, 0], null), new P(null, 2, 5, Q, [30, 4], null), new P(null, 2, 
      5, Q, [28, -15], null), new P(null, 2, 5, Q, [-24, -15], null)], 0));
    };
  }(a, b, c, d, e, f));
}
function zh(a, b) {
  return Wc(function(b, d) {
    var e = K(d, 0), f = K(d, 1), g, k = pg.a(a);
    g = xg(Uf.a(a), Uf.a(f));
    f = pg.a(f);
    f = xg(k, f);
    k = Bg(g, g);
    g = 2 * Bg(f, g);
    f = Bg(f, f) - 100;
    f = g * g - 4 * k * f;
    g = 0 < f ? (-g - Math.sqrt(f)) / (2 * k) : null;
    return y(y(g) ? 0 < g && 1 > g : g) ? Ba(b) || g < G(H(b)) ? [e, g] : b : b;
  }, null, b);
}
function Ah(a, b, c, d) {
  d = Sc(d) ? Ad(Id, d) : d;
  var e = L(d, pg), f = L(d, Uf);
  var g = K(e, 0), k = K(e, 1);
  if (g = 640 < Math.abs(g)) {
    e = g;
  } else {
    if (k = 480 < Math.abs(k)) {
      e = k;
    } else {
      var k = yg(e, f), g = mg.a(a), e = K(k, 0), k = K(k, 1), l = 1280 / (zc(g) - 1), m = dd(640 + e, l);
      if (0 <= m && m < zc(g) - 1) {
        var l = g.a ? g.a(m) : g.call(null, m), m = m + 1, m = g.a ? g.a(m) : g.call(null, m), g = K(l, 0), l = K(l, 1), n = K(m, 0), m = K(m, 1), e = k < l + (e - g) * (m - l) / (n - g)
      } else {
        e = !1;
      }
    }
  }
  return y(e) ? Xd(a, b, Gc, c) : Ud(a, new P(null, 2, 5, Q, [b, c], null), Xd(Xd(d, Uf, yg, new P(null, 2, 5, Q, [0, -.1], null)), pg, yg, f));
}
function Bh(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, pg), c = L(c, Uf);
  return Gg.k(b, vc([d, xg(d, c)], 0));
}
var Cc = new P(null, 3, 5, Q, [function(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, pg);
  return Jg(b, function(a, c, d) {
    return function() {
      b.translate(G(d), G(H(d)));
      return b.fillRect(-2.5, -2.5, 5, 5);
    };
  }(a, c, d));
}, Bh, function(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, c = L(c, pg);
  return Hg(b, c, 2);
}], null);
function Ch(a, b, c, d, e) {
  return Wc(function(a) {
    var c = Df() * (e - d) + d, k = Df() * (2 * eh / 3) - eh / 12;
    return Xd(a, fg, xc, new P(null, 2, 5, Q, [th.l ? th.l() : th.call(null), new sa(null, 3, [pg, b, Uf, [c * Math.cos(k), c * Math.sin(k)], rg, Bc()], null)], null));
  }, a, new qf(null, 0, c, 1, null));
}
function Dh(a, b, c) {
  var d = Sc(c) ? Ad(Id, c) : c, e = L(d, pg), f = L(d, Uf), g = zh(d, qg.a(a));
  if (y(g)) {
    var k = K(g, 0), l = K(g, 1);
    return Ch(Wd(Xd(Vd.f(Vd.f(a, new P(null, 3, 5, Q, [qg, k, Uf], null), function(a, b, c, d, e, f, g, k, l) {
      return function(a) {
        return zg(.8, yg(a, zg(.25, l)));
      };
    }(g, k, l, g, c, d, d, e, f)), new P(null, 3, 5, Q, [qg, k, og], null), bd), Rf, Gc, b), lg, hc), e, 4, 4, 8);
  }
  return Ah(a, Rf, b, d);
}
function Eh(a, b, c) {
  return Ah(a, fg, b, c);
}
function Fh(a, b) {
  var c = Sc(a) ? Ad(Id, a) : a, d = L(c, pg), e = L(c, Uf), f = 1280 / (zc(b) - 1), g = K(d, 0), k = K(d, 1), l = G(e), m = dd(640 + g + (0 < l ? -10 : 10), f), n = dd(640 + g + G(e) + (0 < l ? 10 : -10), f), p = m < n ? m : n, q = m > n ? m : n, r = rf(0 < p ? p : 0, function() {
    var a = q + 1, c = zc(b) - 1;
    return a < c ? a : c;
  }());
  return Wc(function(a, c, d, e, f, g, k, l, m, n, p, q, r, Z, aa) {
    return function(a, c) {
      K(a, 0);
      var d = K(a, 1), e = b.a ? b.a(c) : b.call(null, c), g;
      g = c + 1;
      g = b.a ? b.a(g) : b.call(null, g);
      a: {
        for (var k = 0, l = f;;) {
          var m, n = l;
          m = aa;
          var p = e, q = xg(g, p), r = Bg(xg(p, n), q) / Bg(q, q) * -1, r = 1 < r ? 1 : r, p = yg(p, zg(0 > r ? 0 : r, q)), p = xg(p, n), q = Cg(p), n = q - 10;
          m = Bg(m, p) / q;
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
          l = yg(l, zg(m, aa));
        }
      }
      return y(y(e) ? null == a || e < d : e) ? new P(null, 2, 5, Q, [c, e], null) : a;
    };
  }(f, d, g, k, d, l, m, n, p, q, r, a, c, d, e), null, r);
}
function Gh(a, b, c) {
  c = Sc(c) ? Ad(Id, c) : c;
  c = L(c, pg);
  return Ch(Xd(Xd(a, qg, Gc, b), lg, ad, 5), c, 15, 6, 12);
}
function Hh(a, b, c) {
  c = Sc(c) ? Ad(Id, c) : c;
  var d = L(c, pg), e = L(c, Uf), f = L(c, Zf), g = L(c, og);
  if (function() {
    var a = K(d, 0), b = K(d, 1);
    return 640 < Math.abs(a) || 480 < Math.abs(b);
  }()) {
    return Xd(a, qg, Gc, b);
  }
  if (-3 > g) {
    return Gh(a, b, c);
  }
  if (y(function() {
    var b = sh(a);
    y(b) && (b = xg(d, Td.a(Sd.a(a))), b = 1600 > Bg(b, b));
    return b;
  }())) {
    return Vd.f(Gh(a, b, c), new P(null, 2, 5, Q, [Sd, og], null), bd);
  }
  var k = Fh(c, mg.a(a));
  if (y(k)) {
    var l = K(k, 0), f = K(k, 1), m = mg.a(a), n = xg(function() {
      var a = l + 1;
      return m.a ? m.a(a) : m.call(null, a);
    }(), m.a ? m.a(l) : m.call(null, l)), k = K(n, 0), n = K(n, 1), k = Dg(new P(null, 2, 5, Q, [-n, k], null)), p = Bg(k, e);
    return 0 >= g ? Gh(a, b, c) : Ud(a, new P(null, 2, 5, Q, [qg, b], null), Xd(Xd(c, pg, yg, yg(zg(f, e), zg(.1, k))), Uf, yg, zg(-p + function() {
      var a = -.5 * p, b = 2 + 3 * Df();
      return a > b ? a : b;
    }(), k)));
  }
  return Ud(a, new P(null, 2, 5, Q, [qg, b], null), Xd(Xd(Xd(c, $f, ad, f), Uf, yg, new P(null, 2, 5, Q, [0, -.1], null)), pg, yg, e));
}
function Ih(a) {
  var b = Sc(a) ? Ad(Id, a) : a, c = L(b, pg), d = L(b, $f);
  return Jg(Y, function(a, b, c, d) {
    return function() {
      Y.translate(G(c), G(H(c)));
      Y.rotate(d);
      Y.fillStyle = "#ffffff";
      Y.beginPath();
      Y.arc(0, 0, 10, 0, eh);
      Y.fill();
      Y.stroke();
      Hg(Y, [-3, 2], 2);
      Hg(Y, [3, 2], 2);
      Gg.k(Y, vc([[-3, -5], [3, -5]], 0));
      Gg.k(Y, vc([[0, 10], [0, 13]], 0));
      return Hg(Y, [0, 15], 2);
    };
  }(a, b, c, d));
}
function Jh() {
  return new sa(null, 7, [Rf, R, mg, rh(), qg, R, fg, R, lg, 0, Vf, 60, Sd, Fc([Xf, Zf, $f, Td, dg, gg, ng, og, tg, ug], [500, 0, 0, new P(null, 2, 5, Q, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
}
var Kh = O ? O(!1) : Hd.call(null, !1), wh, Lh = new P(null, 2, 5, Q, [1, 0], null);
wh = O ? O(Lh) : Hd.call(null, Lh);
var Mh, Nh = Jh();
Mh = O ? O(Nh) : Hd.call(null, Nh);
var xh = O ? O(!1) : Hd.call(null, !1), Oh = O ? O(0) : Hd.call(null, 0);
function Ph(a, b, c) {
  b = b.a ? b.a(a) : b.call(null, a);
  return null != b ? jb(b, c, a) : a;
}
function Qh(a) {
  var b;
  b = Ph(Ph(Ph(vh(a), Rf, Dh), qg, Hh), fg, Eh);
  b = Sc(b) ? Ad(Id, b) : b;
  var c = L(b, Vf);
  if (y(sh(b))) {
    if ($b.b(c, 0)) {
      var c = [640 * Df() - 320, 480], d = [(0 > G(c) ? 4 : -4) * Df(), -2 * Df()];
      b = M.f(b, Vf, Dc(300) + 60);
      b = Yd(b, qg, M, th.l ? th.l() : th.call(null), new sa(null, 5, [pg, c, Uf, d, Zf, 0, $f, 0, og, 3], null));
    } else {
      b = Wd(b, Vf, bd);
    }
  }
  a = (c = Ba(sh(b))) ? sh(a) : c;
  return y(a) ? (fh.textContent = "Restart", Ch(b, Qd(b), 20, 10, 20)) : b;
}
function Rh() {
  var a = J.a ? J.a(Mh) : J.call(null, Mh);
  oh(function() {
    yh(Sd.a(a));
    Cf(function(a) {
      K(a, 0);
      a = K(a, 1);
      return Bh(a, Y);
    }, Rf.a(a));
    Cf(function(a) {
      K(a, 0);
      a = K(a, 1);
      return Ih(a);
    }, qg.a(a));
    Cf(function(a) {
      K(a, 0);
      a = K(a, 1);
      a = Sc(a) ? Ad(Id, a) : a;
      var c = L(a, rg);
      return c.b ? c.b(a, Y) : c.call(null, a, Y);
    }, fg.a(a));
    Bd(Gg, Y, mg.a(a));
    Y.fillRect(-630, 370, 10, ug.a(Sd.a(a)));
    Y.strokeRect(-630, 370, 10, 100);
    Y.fillRect(-610, 370, 10, tg.a(Sd.a(a)) / 6);
    Y.font = [D(10 / (lh.width / 1280)), D("px serif")].join("");
    Y.translate(-630, 350);
    Y.scale(1, -1);
    Y.fillText([D("Ammo: "), D(Xf.a(Sd.a(a)))].join(""), 0, 0);
    Y.translate(0, 12 / (lh.width / 1280));
    return Y.fillText([D("Score: "), D(lg.a(a))].join(""), 0, 0);
  });
}
var Sh = function Sh() {
  Kd.b ? Kd.b(Kh, !1) : Kd.call(null, Kh, !1);
  fh.textContent = "Pause";
  window.onmousemove = function(b) {
    var c;
    a: {
      var d = lh;
      c = lh.offsetLeft;
      for (var e = lh.offsetTop;;) {
        if (d = d.offsetParent, y(d)) {
          c += d.offsetLeft, e += d.offsetTop;
        } else {
          c = [c, e];
          break a;
        }
      }
    }
    b = xg(new P(null, 2, 5, Q, [b.pageX, b.pageY], null), c);
    c = xg(zg(1 / (lh.width / 1280), b), new P(null, 2, 5, Q, [640, 480], null));
    b = K(c, 0);
    c = K(c, 1);
    b = xg(new P(null, 2, 5, Q, [b, -c], null), Qd(J.a ? J.a(Mh) : J.call(null, Mh)));
    return Kd.b ? Kd.b(wh, b) : Kd.call(null, wh, b);
  };
  fh.onclick = function() {
    if (y(sh(J.a ? J.a(Mh) : J.call(null, Mh)))) {
      return fh.textContent = "Resume", Kd.b ? Kd.b(Kh, !0) : Kd.call(null, Kh, !0), window.onmousemove = null, fh.onclick = Sh;
    }
    Md.f(Oh, cd, lg.a(J.a ? J.a(Mh) : J.call(null, Mh)));
    var b = vc(["High Score: ", J.a ? J.a(Oh) : J.call(null, Oh)], 0);
    a: {
      for (var c = Nd.b(D, b), b = new ka, c = F(c);;) {
        if (c) {
          b.append("" + D(G(c))), c = H(c), null != c && b.append("");
        } else {
          b = b.toString();
          break a;
        }
      }
    }
    mh.textContent = b;
    b = Jh();
    Kd.b ? Kd.b(Mh, b) : Kd.call(null, Mh, b);
    return fh.textContent = "Pause";
  };
  lh.onmousedown = function() {
    Kd.b ? Kd.b(xh, !0) : Kd.call(null, xh, !0);
    return!1;
  };
  window.onmouseup = function() {
    Kd.b ? Kd.b(xh, !1) : Kd.call(null, xh, !1);
    return!1;
  };
  return function c() {
    return Ba(J.a ? J.a(Kh) : J.call(null, Kh)) ? (Rh(), Md.b(Mh, Qh), window.requestAnimationFrame(c)) : null;
  }.call(null);
};
da("figwheel_test.turret.init_everything", function() {
  nh();
  fh.textContent = "Start";
  return fh.onclick = Sh;
});

})();
