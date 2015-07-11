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
var h;
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
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ga(a, b) {
  null != a && this.append.apply(this, arguments);
}
h = ga.prototype;
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
if ("undefined" === typeof ha) {
  var ha = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
var ia = null;
if ("undefined" === typeof ja) {
  var ja = null
}
function la() {
  return new z(null, 5, [na, !0, pa, !0, qa, !1, sa, !1, ua, null], null);
}
function A(a) {
  return null != a && !1 !== a;
}
function va(a) {
  return a instanceof Array;
}
function wa(a) {
  return A(a) ? !1 : !0;
}
function B(a, b) {
  return a[v(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function C(a, b) {
  var c = null == b ? null : b.constructor, c = A(A(c) ? c.Jb : c) ? c.Ib : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function xa(a) {
  var b = a.Ib;
  return A(b) ? b : "" + E(a);
}
var ya = "undefined" !== typeof Symbol && "function" === v(Symbol) ? Symbol.iterator : "@@iterator";
function Aa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Ba = {}, Ca = {}, Ea = function Ea(b) {
  if (b ? b.O : b) {
    return b.O(b);
  }
  var c;
  c = Ea[v(null == b ? null : b)];
  if (!c && (c = Ea._, !c)) {
    throw C("ICounted.-count", b);
  }
  return c.call(null, b);
}, Ga = function Ga(b) {
  if (b ? b.L : b) {
    return b.L(b);
  }
  var c;
  c = Ga[v(null == b ? null : b)];
  if (!c && (c = Ga._, !c)) {
    throw C("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, Ha = function Ha(b, c) {
  if (b ? b.I : b) {
    return b.I(b, c);
  }
  var d;
  d = Ha[v(null == b ? null : b)];
  if (!d && (d = Ha._, !d)) {
    throw C("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, Ia = {}, F = function F() {
  switch(arguments.length) {
    case 2:
      return F.c(arguments[0], arguments[1]);
    case 3:
      return F.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
F.c = function(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = F[v(null == a ? null : a)];
  if (!c && (c = F._, !c)) {
    throw C("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
F.g = function(a, b, c) {
  if (a ? a.ha : a) {
    return a.ha(a, b, c);
  }
  var d;
  d = F[v(null == a ? null : a)];
  if (!d && (d = F._, !d)) {
    throw C("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
F.t = 3;
var Ja = {}, Ka = function Ka(b) {
  if (b ? b.fa : b) {
    return b.fa(b);
  }
  var c;
  c = Ka[v(null == b ? null : b)];
  if (!c && (c = Ka._, !c)) {
    throw C("ISeq.-first", b);
  }
  return c.call(null, b);
}, Ma = function Ma(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = Ma[v(null == b ? null : b)];
  if (!c && (c = Ma._, !c)) {
    throw C("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Na = {}, Oa = {}, Pa = function Pa() {
  switch(arguments.length) {
    case 2:
      return Pa.c(arguments[0], arguments[1]);
    case 3:
      return Pa.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
Pa.c = function(a, b) {
  if (a ? a.da : a) {
    return a.da(a, b);
  }
  var c;
  c = Pa[v(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw C("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Pa.g = function(a, b, c) {
  if (a ? a.G : a) {
    return a.G(a, b, c);
  }
  var d;
  d = Pa[v(null == a ? null : a)];
  if (!d && (d = Pa._, !d)) {
    throw C("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Pa.t = 3;
var Qa = function Qa(b, c, d) {
  if (b ? b.Ea : b) {
    return b.Ea(b, c, d);
  }
  var e;
  e = Qa[v(null == b ? null : b)];
  if (!e && (e = Qa._, !e)) {
    throw C("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Ra = {}, Sa = function Sa(b, c) {
  if (b ? b.mb : b) {
    return b.mb(b, c);
  }
  var d;
  d = Sa[v(null == b ? null : b)];
  if (!d && (d = Sa._, !d)) {
    throw C("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, Ta = {}, Ua = function Ua(b) {
  if (b ? b.Za : b) {
    return b.Za(b);
  }
  var c;
  c = Ua[v(null == b ? null : b)];
  if (!c && (c = Ua._, !c)) {
    throw C("IMapEntry.-key", b);
  }
  return c.call(null, b);
}, Va = function Va(b) {
  if (b ? b.$a : b) {
    return b.$a(b);
  }
  var c;
  c = Va[v(null == b ? null : b)];
  if (!c && (c = Va._, !c)) {
    throw C("IMapEntry.-val", b);
  }
  return c.call(null, b);
}, Wa = function Wa(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = Wa[v(null == b ? null : b)];
  if (!c && (c = Wa._, !c)) {
    throw C("IStack.-pop", b);
  }
  return c.call(null, b);
}, Xa = {}, Ya = function Ya(b, c, d) {
  if (b ? b.cb : b) {
    return b.cb(b, c, d);
  }
  var e;
  e = Ya[v(null == b ? null : b)];
  if (!e && (e = Ya._, !e)) {
    throw C("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, $a = function $a(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = $a[v(null == b ? null : b)];
  if (!c && (c = $a._, !c)) {
    throw C("IDeref.-deref", b);
  }
  return c.call(null, b);
}, ab = {}, bb = function bb(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = bb[v(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw C("IMeta.-meta", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b, c) {
  if (b ? b.K : b) {
    return b.K(b, c);
  }
  var d;
  d = db[v(null == b ? null : b)];
  if (!d && (d = db._, !d)) {
    throw C("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, eb = {}, gb = function gb() {
  switch(arguments.length) {
    case 2:
      return gb.c(arguments[0], arguments[1]);
    case 3:
      return gb.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
gb.c = function(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = gb[v(null == a ? null : a)];
  if (!c && (c = gb._, !c)) {
    throw C("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
gb.g = function(a, b, c) {
  if (a ? a.N : a) {
    return a.N(a, b, c);
  }
  var d;
  d = gb[v(null == a ? null : a)];
  if (!d && (d = gb._, !d)) {
    throw C("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
gb.t = 3;
var hb = function hb(b, c) {
  if (b ? b.p : b) {
    return b.p(b, c);
  }
  var d;
  d = hb[v(null == b ? null : b)];
  if (!d && (d = hb._, !d)) {
    throw C("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, ib = function ib(b) {
  if (b ? b.B : b) {
    return b.B(b);
  }
  var c;
  c = ib[v(null == b ? null : b)];
  if (!c && (c = ib._, !c)) {
    throw C("IHash.-hash", b);
  }
  return c.call(null, b);
}, jb = {}, kb = function kb(b) {
  if (b ? b.J : b) {
    return b.J(b);
  }
  var c;
  c = kb[v(null == b ? null : b)];
  if (!c && (c = kb._, !c)) {
    throw C("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, lb = {}, mb = function mb(b, c) {
  if (b ? b.qb : b) {
    return b.qb(0, c);
  }
  var d;
  d = mb[v(null == b ? null : b)];
  if (!d && (d = mb._, !d)) {
    throw C("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, nb = {}, ob = function ob(b, c, d) {
  if (b ? b.C : b) {
    return b.C(b, c, d);
  }
  var e;
  e = ob[v(null == b ? null : b)];
  if (!e && (e = ob._, !e)) {
    throw C("IPrintWithWriter.-pr-writer", b);
  }
  return e.call(null, b, c, d);
}, pb = function pb(b, c, d) {
  if (b ? b.pb : b) {
    return b.pb(0, c, d);
  }
  var e;
  e = pb[v(null == b ? null : b)];
  if (!e && (e = pb._, !e)) {
    throw C("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, qb = function qb(b) {
  if (b ? b.La : b) {
    return b.La(b);
  }
  var c;
  c = qb[v(null == b ? null : b)];
  if (!c && (c = qb._, !c)) {
    throw C("IEditableCollection.-as-transient", b);
  }
  return c.call(null, b);
}, rb = function rb(b, c) {
  if (b ? b.Qa : b) {
    return b.Qa(b, c);
  }
  var d;
  d = rb[v(null == b ? null : b)];
  if (!d && (d = rb._, !d)) {
    throw C("ITransientCollection.-conj!", b);
  }
  return d.call(null, b, c);
}, sb = function sb(b) {
  if (b ? b.Ra : b) {
    return b.Ra(b);
  }
  var c;
  c = sb[v(null == b ? null : b)];
  if (!c && (c = sb._, !c)) {
    throw C("ITransientCollection.-persistent!", b);
  }
  return c.call(null, b);
}, tb = function tb(b, c, d) {
  if (b ? b.Ga : b) {
    return b.Ga(b, c, d);
  }
  var e;
  e = tb[v(null == b ? null : b)];
  if (!e && (e = tb._, !e)) {
    throw C("ITransientAssociative.-assoc!", b);
  }
  return e.call(null, b, c, d);
}, vb = function vb(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = vb[v(null == b ? null : b)];
  if (!e && (e = vb._, !e)) {
    throw C("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, wb = function wb(b) {
  if (b ? b.ob : b) {
    return b.ob();
  }
  var c;
  c = wb[v(null == b ? null : b)];
  if (!c && (c = wb._, !c)) {
    throw C("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, xb = function xb(b) {
  if (b ? b.Xa : b) {
    return b.Xa(b);
  }
  var c;
  c = xb[v(null == b ? null : b)];
  if (!c && (c = xb._, !c)) {
    throw C("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, yb = function yb(b) {
  if (b ? b.Ya : b) {
    return b.Ya(b);
  }
  var c;
  c = yb[v(null == b ? null : b)];
  if (!c && (c = yb._, !c)) {
    throw C("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, zb = function zb(b) {
  if (b ? b.Wa : b) {
    return b.Wa(b);
  }
  var c;
  c = zb[v(null == b ? null : b)];
  if (!c && (c = zb._, !c)) {
    throw C("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, Ab = function Ab(b) {
  if (b ? b.Oa : b) {
    return b.Oa(b);
  }
  var c;
  c = Ab[v(null == b ? null : b)];
  if (!c && (c = Ab._, !c)) {
    throw C("INamed.-name", b);
  }
  return c.call(null, b);
}, Bb = function Bb(b) {
  if (b ? b.Pa : b) {
    return b.Pa(b);
  }
  var c;
  c = Bb[v(null == b ? null : b)];
  if (!c && (c = Bb._, !c)) {
    throw C("INamed.-namespace", b);
  }
  return c.call(null, b);
}, Cb = function Cb(b, c) {
  if (b ? b.Db : b) {
    return b.Db(b, c);
  }
  var d;
  d = Cb[v(null == b ? null : b)];
  if (!d && (d = Cb._, !d)) {
    throw C("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, Db = function Db() {
  switch(arguments.length) {
    case 2:
      return Db.c(arguments[0], arguments[1]);
    case 3:
      return Db.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Db.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Db.v(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
Db.c = function(a, b) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b);
  }
  var c;
  c = Db[v(null == a ? null : a)];
  if (!c && (c = Db._, !c)) {
    throw C("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
Db.g = function(a, b, c) {
  if (a ? a.Fb : a) {
    return a.Fb(a, b, c);
  }
  var d;
  d = Db[v(null == a ? null : a)];
  if (!d && (d = Db._, !d)) {
    throw C("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
Db.q = function(a, b, c, d) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c, d);
  }
  var e;
  e = Db[v(null == a ? null : a)];
  if (!e && (e = Db._, !e)) {
    throw C("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
Db.v = function(a, b, c, d, e) {
  if (a ? a.Hb : a) {
    return a.Hb(a, b, c, d, e);
  }
  var f;
  f = Db[v(null == a ? null : a)];
  if (!f && (f = Db._, !f)) {
    throw C("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
Db.t = 5;
var Eb = function Eb(b) {
  if (b ? b.Na : b) {
    return b.Na(b);
  }
  var c;
  c = Eb[v(null == b ? null : b)];
  if (!c && (c = Eb._, !c)) {
    throw C("IIterable.-iterator", b);
  }
  return c.call(null, b);
};
function Fb(a) {
  this.Mb = a;
  this.i = 1073741824;
  this.s = 0;
}
Fb.prototype.qb = function(a, b) {
  return this.Mb.append(b);
};
function Gb(a) {
  var b = new ga;
  a.C(null, new Fb(b), la());
  return "" + E(b);
}
var Hb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.c ? Math.imul.c(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.c ? Math.imul.c(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Jb(a) {
  a = Hb(a | 0, -862048943);
  return Hb(a << 15 | a >>> -15, 461845907);
}
function Kb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return Hb(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function Lb(a, b) {
  var c = (a | 0) ^ b, c = Hb(c ^ c >>> 16, -2048144789), c = Hb(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function Mb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Kb(c, Jb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Jb(a.charCodeAt(a.length - 1)) : b;
  return Lb(b, Hb(2, a.length));
}
var Nb = {}, Ob = 0;
function Pb(a) {
  255 < Ob && (Nb = {}, Ob = 0);
  var b = Nb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Hb(31, d) + a.charCodeAt(c), c = e
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
    Nb[a] = b;
    Ob += 1;
  }
  return a = b;
}
function Qb(a) {
  a && (a.i & 4194304 || a.Pb) ? a = a.B(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Pb(a), 0 !== a && (a = Jb(a), a = Kb(0, a), a = Lb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : ib(a);
  return a;
}
function Rb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Sb(a, b, c, d, e) {
  this.Ka = a;
  this.name = b;
  this.ya = c;
  this.Da = d;
  this.ka = e;
  this.i = 2154168321;
  this.s = 4096;
}
h = Sb.prototype;
h.toString = function() {
  return this.ya;
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.p = function(a, b) {
  return b instanceof Sb ? this.ya === b.ya : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Pa.g(c, this, null);
      case 3:
        return Pa.g(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return Pa.g(c, this, null);
  };
  a.g = function(a, c, d) {
    return Pa.g(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return Pa.g(a, this, null);
};
h.c = function(a, b) {
  return Pa.g(a, this, b);
};
h.H = function() {
  return this.ka;
};
h.K = function(a, b) {
  return new Sb(this.Ka, this.name, this.ya, this.Da, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Rb(Mb(this.name), Pb(this.Ka));
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.Ka;
};
h.C = function(a, b) {
  return mb(b, this.ya);
};
function Tb(a) {
  var b = [E("figwheel-test.snake"), E("/"), E(a)].join("");
  return new Sb("figwheel-test.snake", a, b, null, null);
}
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Qb)) {
    return a.J(null);
  }
  if (va(a) || "string" === typeof a) {
    return 0 === a.length ? null : new I(a, 0);
  }
  if (B(jb, a)) {
    return kb(a);
  }
  throw Error([E(a), E(" is not ISeqable")].join(""));
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.bb)) {
    return a.fa(null);
  }
  a = G(a);
  return null == a ? null : Ka(a);
}
function Ub(a) {
  return null != a ? a && (a.i & 64 || a.bb) ? a.la(null) : (a = G(a)) ? Ma(a) : Vb : Vb;
}
function K(a) {
  return null == a ? null : a && (a.i & 128 || a.ab) ? a.ia(null) : G(Ub(a));
}
var Wb = function Wb() {
  switch(arguments.length) {
    case 1:
      return Wb.a(arguments[0]);
    case 2:
      return Wb.c(arguments[0], arguments[1]);
    default:
      return Wb.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Wb.a = function() {
  return!0;
};
Wb.c = function(a, b) {
  return null == a ? null == b : a === b || hb(a, b);
};
Wb.k = function(a, b, c) {
  for (;;) {
    if (Wb.c(a, b)) {
      if (K(c)) {
        a = b, b = J(c), c = K(c);
      } else {
        return Wb.c(b, J(c));
      }
    } else {
      return!1;
    }
  }
};
Wb.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Wb.k(b, a, c);
};
Wb.t = 2;
function Yb(a) {
  this.u = a;
}
Yb.prototype.next = function() {
  if (null != this.u) {
    var a = J(this.u);
    this.u = K(this.u);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function Zb(a) {
  return new Yb(G(a));
}
function $b(a, b) {
  var c = Jb(a), c = Kb(0, c);
  return Lb(c, b);
}
function ac(a) {
  var b = 0, c = 1;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = Hb(31, c) + Qb(J(a)) | 0, a = K(a);
    } else {
      return $b(c, b);
    }
  }
}
var bc = $b(1, 0);
function cc(a) {
  var b = 0, c = 0;
  for (a = G(a);;) {
    if (null != a) {
      b += 1, c = c + Qb(J(a)) | 0, a = K(a);
    } else {
      return $b(c, b);
    }
  }
}
var dc = $b(0, 0);
Ca["null"] = !0;
Ea["null"] = function() {
  return 0;
};
Date.prototype.p = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
hb.number = function(a, b) {
  return a === b;
};
Ba["function"] = !0;
ab["function"] = !0;
bb["function"] = function() {
  return null;
};
ib._ = function(a) {
  return a[aa] || (a[aa] = ++ca);
};
function L(a) {
  return $a(a);
}
function ec(a, b) {
  var c = Ea(a);
  if (0 === c) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = F.c(a, 0), e = 1;;) {
    if (e < c) {
      var f = F.c(a, e), d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function fc(a, b, c) {
  var d = Ea(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = F.c(a, c), e = b.c ? b.c(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function gc(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.o ? b.o() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.c ? b.c(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function hc(a, b, c) {
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
function ic(a, b, c, d) {
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
function jc(a) {
  return a ? a.i & 2 || a.tb ? !0 : a.i ? !1 : B(Ca, a) : B(Ca, a);
}
function kc(a, b) {
  this.b = a;
  this.j = b;
}
kc.prototype.gb = function() {
  return this.j < this.b.length;
};
kc.prototype.next = function() {
  var a = this.b[this.j];
  this.j += 1;
  return a;
};
function I(a, b) {
  this.b = a;
  this.j = b;
  this.i = 166199550;
  this.s = 8192;
}
h = I.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
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
  return new kc(this.b, this.j);
};
h.ia = function() {
  return this.j + 1 < this.b.length ? new I(this.b, this.j + 1) : null;
};
h.O = function() {
  return this.b.length - this.j;
};
h.B = function() {
  return ac(this);
};
h.p = function(a, b) {
  return lc.c ? lc.c(this, b) : lc.call(null, this, b);
};
h.L = function() {
  return Vb;
};
h.M = function(a, b) {
  return ic(this.b, b, this.b[this.j], this.j + 1);
};
h.N = function(a, b, c) {
  return ic(this.b, b, c, this.j);
};
h.fa = function() {
  return this.b[this.j];
};
h.la = function() {
  return this.j + 1 < this.b.length ? new I(this.b, this.j + 1) : Vb;
};
h.J = function() {
  return this;
};
h.I = function(a, b) {
  return mc.c ? mc.c(b, this) : mc.call(null, b, this);
};
I.prototype[ya] = function() {
  return Zb(this);
};
function nc(a, b) {
  return b < a.length ? new I(a, b) : null;
}
function oc() {
  switch(arguments.length) {
    case 1:
      return nc(arguments[0], 0);
    case 2:
      return nc(arguments[0], arguments[1]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function pc(a) {
  for (;;) {
    var b = K(a);
    if (null != b) {
      a = b;
    } else {
      return J(a);
    }
  }
}
hb._ = function(a, b) {
  return a === b;
};
var qc = function qc() {
  switch(arguments.length) {
    case 0:
      return qc.o();
    case 1:
      return qc.a(arguments[0]);
    case 2:
      return qc.c(arguments[0], arguments[1]);
    default:
      return qc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
qc.o = function() {
  return rc;
};
qc.a = function(a) {
  return a;
};
qc.c = function(a, b) {
  return null != a ? Ha(a, b) : Ha(Vb, b);
};
qc.k = function(a, b, c) {
  for (;;) {
    if (A(c)) {
      a = qc.c(a, b), b = J(c), c = K(c);
    } else {
      return qc.c(a, b);
    }
  }
};
qc.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return qc.k(b, a, c);
};
qc.t = 2;
function sc(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.tb)) {
      a = a.O(null);
    } else {
      if (va(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (B(Ca, a)) {
            a = Ea(a);
          } else {
            a: {
              a = G(a);
              for (var b = 0;;) {
                if (jc(a)) {
                  a = b + Ea(a);
                  break a;
                }
                a = K(a);
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
function tc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return G(a) ? J(a) : c;
    }
    var d = a;
    if (d ? d.i & 16 || d.wb || (d.i ? 0 : B(Ia, d)) : B(Ia, d)) {
      return F.g(a, b, c);
    }
    if (G(a)) {
      var d = K(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function M(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.i & 16 || a.wb)) {
    return a.ha(null, b, null);
  }
  if (va(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (B(Ia, a)) {
    return F.c(a, b);
  }
  if (a ? a.i & 64 || a.bb || (a.i ? 0 : B(Ja, a)) : B(Ja, a)) {
    return tc(a, b);
  }
  throw Error([E("nth not supported on this type "), E(xa(null == a ? null : a.constructor))].join(""));
}
function N(a, b) {
  return null == a ? null : a && (a.i & 256 || a.xb) ? a.da(null, b) : va(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : B(Oa, a) ? Pa.c(a, b) : null;
}
function vc(a, b, c) {
  return null != a ? a && (a.i & 256 || a.xb) ? a.G(null, b, c) : va(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : B(Oa, a) ? Pa.g(a, b, c) : c : c;
}
var wc = function wc() {
  switch(arguments.length) {
    case 3:
      return wc.g(arguments[0], arguments[1], arguments[2]);
    default:
      return wc.k(arguments[0], arguments[1], arguments[2], new I(Array.prototype.slice.call(arguments, 3), 0));
  }
};
wc.g = function(a, b, c) {
  if (null != a) {
    a = Qa(a, b, c);
  } else {
    a: {
      a = [b];
      c = [c];
      b = a.length;
      var d = 0, e;
      for (e = qb(xc);;) {
        if (d < b) {
          var f = d + 1;
          e = e.Ga(null, a[d], c[d]);
          d = f;
        } else {
          a = sb(e);
          break a;
        }
      }
    }
  }
  return a;
};
wc.k = function(a, b, c, d) {
  for (;;) {
    if (a = wc.g(a, b, c), A(d)) {
      b = J(d), c = J(K(d)), d = K(K(d));
    } else {
      return a;
    }
  }
};
wc.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), d = K(d);
  return wc.k(b, a, c, d);
};
wc.t = 3;
var yc = function yc() {
  switch(arguments.length) {
    case 1:
      return yc.a(arguments[0]);
    case 2:
      return yc.c(arguments[0], arguments[1]);
    default:
      return yc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yc.a = function(a) {
  return a;
};
yc.c = function(a, b) {
  return null == a ? null : Sa(a, b);
};
yc.k = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = yc.c(a, b);
    if (A(c)) {
      b = J(c), c = K(c);
    } else {
      return a;
    }
  }
};
yc.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return yc.k(b, a, c);
};
yc.t = 2;
function zc(a) {
  var b = "function" == v(a);
  return A(b) ? b : a ? A(A(null) ? null : a.sb) ? !0 : a.Vb ? !1 : B(Ba, a) : B(Ba, a);
}
function Ac(a, b) {
  this.e = a;
  this.h = b;
  this.i = 393217;
  this.s = 0;
}
h = Ac.prototype;
h.H = function() {
  return this.h;
};
h.K = function(a, b) {
  return new Ac(this.e, b);
};
h.sb = !0;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H, T) {
    a = this.e;
    return Bc.Ma ? Bc.Ma(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H, T) : Bc.call(null, a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H, T);
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D, H);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w, D);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x, w);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y, x);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u, y);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u) {
    a = this;
    return a.e.U ? a.e.U(b, c, d, e, f, g, k, l, n, m, q, p, r, t, u) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, n, m, q, p, r, t) {
    a = this;
    return a.e.T ? a.e.T(b, c, d, e, f, g, k, l, n, m, q, p, r, t) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, n, m, q, p, r) {
    a = this;
    return a.e.S ? a.e.S(b, c, d, e, f, g, k, l, n, m, q, p, r) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p, r);
  }
  function m(a, b, c, d, e, f, g, k, l, n, m, q, p) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, g, k, l, n, m, q, p) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q, p);
  }
  function n(a, b, c, d, e, f, g, k, l, n, m, q) {
    a = this;
    return a.e.Q ? a.e.Q(b, c, d, e, f, g, k, l, n, m, q) : a.e.call(null, b, c, d, e, f, g, k, l, n, m, q);
  }
  function p(a, b, c, d, e, f, g, k, l, n, m) {
    a = this;
    return a.e.P ? a.e.P(b, c, d, e, f, g, k, l, n, m) : a.e.call(null, b, c, d, e, f, g, k, l, n, m);
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
    return a.e.$ ? a.e.$(b, c, d, e, f, g) : a.e.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    return a.e.v ? a.e.v(b, c, d, e, f) : a.e.call(null, b, c, d, e, f);
  }
  function y(a, b, c, d, e) {
    a = this;
    return a.e.q ? a.e.q(b, c, d, e) : a.e.call(null, b, c, d, e);
  }
  function D(a, b, c, d) {
    a = this;
    return a.e.g ? a.e.g(b, c, d) : a.e.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    return a.e.c ? a.e.c(b, c) : a.e.call(null, b, c);
  }
  function T(a, b) {
    a = this;
    return a.e.a ? a.e.a(b) : a.e.call(null, b);
  }
  function ma(a) {
    a = this;
    return a.e.o ? a.e.o() : a.e.call(null);
  }
  var w = null, w = function(Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub, Ib, uc, wd, Se) {
    switch(arguments.length) {
      case 1:
        return ma.call(this, Da);
      case 2:
        return T.call(this, Da, S);
      case 3:
        return H.call(this, Da, S, W);
      case 4:
        return D.call(this, Da, S, W, X);
      case 5:
        return y.call(this, Da, S, W, X, Y);
      case 6:
        return x.call(this, Da, S, W, X, Y, ba);
      case 7:
        return u.call(this, Da, S, W, X, Y, ba, fa);
      case 8:
        return t.call(this, Da, S, W, X, Y, ba, fa, ka);
      case 9:
        return r.call(this, Da, S, W, X, Y, ba, fa, ka, oa);
      case 10:
        return q.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra);
      case 11:
        return p.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta);
      case 12:
        return n.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za);
      case 13:
        return m.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa);
      case 14:
        return l.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La);
      case 15:
        return k.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w);
      case 16:
        return g.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za);
      case 17:
        return f.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb);
      case 18:
        return e.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub);
      case 19:
        return d.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub, Ib);
      case 20:
        return c.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub, Ib, uc);
      case 21:
        return b.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub, Ib, uc, wd);
      case 22:
        return a.call(this, Da, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, w, Za, fb, ub, Ib, uc, wd, Se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  w.a = ma;
  w.c = T;
  w.g = H;
  w.q = D;
  w.v = y;
  w.$ = x;
  w.aa = u;
  w.ba = t;
  w.ca = r;
  w.P = q;
  w.Q = p;
  w.R = n;
  w.S = m;
  w.T = l;
  w.U = k;
  w.V = g;
  w.W = f;
  w.X = e;
  w.Y = d;
  w.Z = c;
  w.lb = b;
  w.Ma = a;
  return w;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.o = function() {
  return this.e.o ? this.e.o() : this.e.call(null);
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
h.q = function(a, b, c, d) {
  return this.e.q ? this.e.q(a, b, c, d) : this.e.call(null, a, b, c, d);
};
h.v = function(a, b, c, d, e) {
  return this.e.v ? this.e.v(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
h.$ = function(a, b, c, d, e, f) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
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
h.P = function(a, b, c, d, e, f, g, k, l, m) {
  return this.e.P ? this.e.P(a, b, c, d, e, f, g, k, l, m) : this.e.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n) {
  return this.e.Q ? this.e.Q(a, b, c, d, e, f, g, k, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  return this.e.R ? this.e.R(a, b, c, d, e, f, g, k, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.S = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  return this.e.S ? this.e.S(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.T = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  return this.e.T ? this.e.T(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.U = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  return this.e.U ? this.e.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.V = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  return this.e.V ? this.e.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) : this.e.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T) {
  var ma = this.e;
  return Bc.Ma ? Bc.Ma(ma, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T) : Bc.call(null, ma, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T);
};
function Cc(a, b) {
  return zc(a) && !(a ? a.i & 262144 || a.Tb || (a.i ? 0 : B(cb, a)) : B(cb, a)) ? new Ac(a, b) : null == a ? null : db(a, b);
}
function Dc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Ab || (a.i ? 0 : B(ab, a)) : B(ab, a) : b) ? bb(a) : null;
}
function Ec(a) {
  return null == a || wa(G(a));
}
function Fc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.yb ? !0 : a.i ? !1 : B(Ra, a) : B(Ra, a);
}
function Gc(a) {
  return a ? a.i & 16384 || a.Sb ? !0 : a.i ? !1 : B(Xa, a) : B(Xa, a);
}
function Hc(a) {
  return a ? a.s & 512 || a.Ob ? !0 : !1 : !1;
}
function Ic(a) {
  var b = [];
  ea(a, function(a, b) {
    return function(a, c) {
      return b.push(c);
    };
  }(a, b));
  return b;
}
function Jc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, --e, b += 1;
  }
}
var Kc = {};
function Lc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.bb ? !0 : a.i ? !1 : B(Ja, a) : B(Ja, a);
}
function Mc(a) {
  return A(a) ? !0 : !1;
}
function Nc(a, b) {
  return vc(a, b, Kc) === Kc ? !1 : !0;
}
function Oc(a, b) {
  var c = G(b);
  if (c) {
    var d = J(c), c = K(c);
    return Pc ? Pc(a, d, c) : Qc.call(null, a, d, c);
  }
  return a.o ? a.o() : a.call(null);
}
function Rc(a, b, c) {
  for (c = G(c);;) {
    if (c) {
      var d = J(c);
      b = a.c ? a.c(b, d) : a.call(null, b, d);
      c = K(c);
    } else {
      return b;
    }
  }
}
function Qc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.i & 524288 || b.Cb) ? b.M(null, a) : va(b) ? gc(b, a) : "string" === typeof b ? gc(b, a) : B(eb, b) ? gb.c(b, a) : Oc(a, b);
    case 3:
      return Pc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Pc(a, b, c) {
  return c && (c.i & 524288 || c.Cb) ? c.N(null, a, b) : va(c) ? hc(c, a, b) : "string" === typeof c ? hc(c, a, b) : B(eb, c) ? gb.g(c, a, b) : Rc(a, b, c);
}
function Sc(a) {
  return a;
}
function Tc(a, b, c, d) {
  a = a.a ? a.a(b) : a.call(null, b);
  c = Pc(a, c, d);
  return a.a ? a.a(c) : a.call(null, c);
}
var Uc = function Uc() {
  switch(arguments.length) {
    case 0:
      return Uc.o();
    case 1:
      return Uc.a(arguments[0]);
    case 2:
      return Uc.c(arguments[0], arguments[1]);
    default:
      return Uc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Uc.o = function() {
  return 0;
};
Uc.a = function(a) {
  return a;
};
Uc.c = function(a, b) {
  return a + b;
};
Uc.k = function(a, b, c) {
  return Pc(Uc, a + b, c);
};
Uc.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Uc.k(b, a, c);
};
Uc.t = 2;
var Vc = function Vc() {
  switch(arguments.length) {
    case 1:
      return Vc.a(arguments[0]);
    case 2:
      return Vc.c(arguments[0], arguments[1]);
    default:
      return Vc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Vc.a = function(a) {
  return-a;
};
Vc.c = function(a, b) {
  return a - b;
};
Vc.k = function(a, b, c) {
  return Pc(Vc, a - b, c);
};
Vc.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return Vc.k(b, a, c);
};
Vc.t = 2;
function Wc(a, b) {
  return(a % b + b) % b;
}
function Xc(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function Yc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var E = function E() {
  switch(arguments.length) {
    case 0:
      return E.o();
    case 1:
      return E.a(arguments[0]);
    default:
      return E.k(arguments[0], new I(Array.prototype.slice.call(arguments, 1), 0));
  }
};
E.o = function() {
  return "";
};
E.a = function(a) {
  return null == a ? "" : da(a);
};
E.k = function(a, b) {
  for (var c = new ga("" + E(a)), d = b;;) {
    if (A(d)) {
      c = c.append("" + E(J(d))), d = K(d);
    } else {
      return c.toString();
    }
  }
};
E.r = function(a) {
  var b = J(a);
  a = K(a);
  return E.k(b, a);
};
E.t = 1;
function lc(a, b) {
  var c;
  if (b ? b.i & 16777216 || b.Rb || (b.i ? 0 : B(lb, b)) : B(lb, b)) {
    if (jc(a) && jc(b) && sc(a) !== sc(b)) {
      c = !1;
    } else {
      a: {
        c = G(a);
        for (var d = G(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && Wb.c(J(c), J(d))) {
            c = K(c), d = K(d);
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
  return Mc(c);
}
function Zc(a) {
  if (G(a)) {
    var b = Qb(J(a));
    for (a = K(a);;) {
      if (null == a) {
        return b;
      }
      b = Rb(b, Qb(J(a)));
      a = K(a);
    }
  } else {
    return 0;
  }
}
function $c(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.count = d;
  this.m = e;
  this.i = 65937646;
  this.s = 8192;
}
h = $c.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 1 === this.count ? null : this.wa;
};
h.O = function() {
  return this.count;
};
h.Fa = function() {
  return Ma(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return db(Vb, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return 1 === this.count ? Vb : this.wa;
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new $c(b, this.first, this.wa, this.count, this.m);
};
h.I = function(a, b) {
  return new $c(this.h, b, this, this.count + 1, null);
};
$c.prototype[ya] = function() {
  return Zb(this);
};
function ad(a) {
  this.h = a;
  this.i = 65937614;
  this.s = 8192;
}
h = ad.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return null;
};
h.O = function() {
  return 0;
};
h.Fa = function() {
  throw Error("Can't pop empty list");
};
h.B = function() {
  return bc;
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return this;
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return null;
};
h.la = function() {
  return Vb;
};
h.J = function() {
  return null;
};
h.K = function(a, b) {
  return new ad(b);
};
h.I = function(a, b) {
  return new $c(this.h, b, null, 1, null);
};
var Vb = new ad(null);
ad.prototype[ya] = function() {
  return Zb(this);
};
var bd = function bd() {
  return bd.k(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
bd.k = function(a) {
  var b;
  if (a instanceof I && 0 === a.j) {
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
  for (var c = Vb;;) {
    if (0 < a) {
      var d = a - 1, c = c.I(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
bd.t = 0;
bd.r = function(a) {
  return bd.k(G(a));
};
function cd(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.wa = c;
  this.m = d;
  this.i = 65929452;
  this.s = 8192;
}
h = cd.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return null == this.wa ? null : G(this.wa);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return this.first;
};
h.la = function() {
  return null == this.wa ? Vb : this.wa;
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new cd(b, this.first, this.wa, this.m);
};
h.I = function(a, b) {
  return new cd(null, b, this, this.m);
};
cd.prototype[ya] = function() {
  return Zb(this);
};
function mc(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.bb)) ? new cd(null, a, b, null) : new cd(null, a, G(b), null);
}
function O(a, b, c, d) {
  this.Ka = a;
  this.name = b;
  this.va = c;
  this.Da = d;
  this.i = 2153775105;
  this.s = 4096;
}
h = O.prototype;
h.toString = function() {
  return[E(":"), E(this.va)].join("");
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.p = function(a, b) {
  return b instanceof O ? this.va === b.va : !1;
};
h.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return N(c, this);
      case 3:
        return vc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return N(c, this);
  };
  a.g = function(a, c, d) {
    return vc(c, this, d);
  };
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return N(a, this);
};
h.c = function(a, b) {
  return vc(a, this, b);
};
h.B = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Rb(Mb(this.name), Pb(this.Ka)) + 2654435769 | 0;
};
h.Oa = function() {
  return this.name;
};
h.Pa = function() {
  return this.Ka;
};
h.C = function(a, b) {
  return mb(b, [E(":"), E(this.va)].join(""));
};
var dd = function dd() {
  switch(arguments.length) {
    case 1:
      return dd.a(arguments[0]);
    case 2:
      return dd.c(arguments[0], arguments[1]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
dd.a = function(a) {
  if (a instanceof O) {
    return a;
  }
  if (a instanceof Sb) {
    var b;
    if (a && (a.s & 4096 || a.Bb)) {
      b = a.Pa(null);
    } else {
      throw Error([E("Doesn't support namespace: "), E(a)].join(""));
    }
    return new O(b, ed.a ? ed.a(a) : ed.call(null, a), a.ya, null);
  }
  return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new O(b[0], b[1], a, null) : new O(null, b[0], a, null)) : null;
};
dd.c = function(a, b) {
  return new O(a, b, [E(A(a) ? [E(a), E("/")].join("") : null), E(b)].join(""), null);
};
dd.t = 2;
function fd(a, b, c, d) {
  this.h = a;
  this.Ia = b;
  this.u = c;
  this.m = d;
  this.i = 32374988;
  this.s = 0;
}
h = fd.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
function gd(a) {
  null != a.Ia && (a.u = a.Ia.o ? a.Ia.o() : a.Ia.call(null), a.Ia = null);
  return a.u;
}
h.H = function() {
  return this.h;
};
h.ia = function() {
  kb(this);
  return null == this.u ? null : K(this.u);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  kb(this);
  return null == this.u ? null : J(this.u);
};
h.la = function() {
  kb(this);
  return null != this.u ? Ub(this.u) : Vb;
};
h.J = function() {
  gd(this);
  if (null == this.u) {
    return null;
  }
  for (var a = this.u;;) {
    if (a instanceof fd) {
      a = gd(a);
    } else {
      return this.u = a, G(this.u);
    }
  }
};
h.K = function(a, b) {
  return new fd(b, this.Ia, this.u, this.m);
};
h.I = function(a, b) {
  return mc(b, this);
};
fd.prototype[ya] = function() {
  return Zb(this);
};
function hd(a, b) {
  this.kb = a;
  this.end = b;
  this.i = 2;
  this.s = 0;
}
hd.prototype.add = function(a) {
  this.kb[this.end] = a;
  return this.end += 1;
};
hd.prototype.ra = function() {
  var a = new id(this.kb, 0, this.end);
  this.kb = null;
  return a;
};
hd.prototype.O = function() {
  return this.end;
};
function id(a, b, c) {
  this.b = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.s = 0;
}
h = id.prototype;
h.O = function() {
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
  return new id(this.b, this.w + 1, this.end);
};
h.M = function(a, b) {
  return ic(this.b, b, this.b[this.w], this.w + 1);
};
h.N = function(a, b, c) {
  return ic(this.b, b, c, this.w);
};
function jd(a, b, c, d) {
  this.ra = a;
  this.sa = b;
  this.h = c;
  this.m = d;
  this.i = 31850732;
  this.s = 1536;
}
h = jd.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (1 < Ea(this.ra)) {
    return new jd(wb(this.ra), this.sa, this.h, null);
  }
  var a = kb(this.sa);
  return null == a ? null : a;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.fa = function() {
  return F.c(this.ra, 0);
};
h.la = function() {
  return 1 < Ea(this.ra) ? new jd(wb(this.ra), this.sa, this.h, null) : null == this.sa ? Vb : this.sa;
};
h.J = function() {
  return this;
};
h.Xa = function() {
  return this.ra;
};
h.Ya = function() {
  return null == this.sa ? Vb : this.sa;
};
h.K = function(a, b) {
  return new jd(this.ra, this.sa, b, this.m);
};
h.I = function(a, b) {
  return mc(b, this);
};
h.Wa = function() {
  return null == this.sa ? null : this.sa;
};
jd.prototype[ya] = function() {
  return Zb(this);
};
function kd(a, b) {
  return 0 === Ea(a) ? b : new jd(a, b, null, null);
}
function ld(a, b) {
  a.add(b);
}
function md(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function nd(a, b) {
  if (jc(a)) {
    return sc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var od = function od(b) {
  return null == b ? null : null == K(b) ? G(J(b)) : mc(J(b), od(K(b)));
}, pd = function pd() {
  switch(arguments.length) {
    case 0:
      return pd.o();
    case 1:
      return pd.a(arguments[0]);
    case 2:
      return pd.c(arguments[0], arguments[1]);
    default:
      return pd.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
pd.o = function() {
  return new fd(null, function() {
    return null;
  }, null, null);
};
pd.a = function(a) {
  return new fd(null, function() {
    return a;
  }, null, null);
};
pd.c = function(a, b) {
  return new fd(null, function() {
    var c = G(a);
    return c ? Hc(c) ? kd(xb(c), pd.c(yb(c), b)) : mc(J(c), pd.c(Ub(c), b)) : b;
  }, null, null);
};
pd.k = function(a, b, c) {
  return function e(a, b) {
    return new fd(null, function() {
      var c = G(a);
      return c ? Hc(c) ? kd(xb(c), e(yb(c), b)) : mc(J(c), e(Ub(c), b)) : A(b) ? e(J(b), K(b)) : null;
    }, null, null);
  }(pd.c(a, b), c);
};
pd.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return pd.k(b, a, c);
};
pd.t = 2;
var qd = function qd() {
  switch(arguments.length) {
    case 0:
      return qd.o();
    case 1:
      return qd.a(arguments[0]);
    case 2:
      return qd.c(arguments[0], arguments[1]);
    default:
      return qd.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
qd.o = function() {
  return qb(rc);
};
qd.a = function(a) {
  return a;
};
qd.c = function(a, b) {
  return rb(a, b);
};
qd.k = function(a, b, c) {
  for (;;) {
    if (a = rb(a, b), A(c)) {
      b = J(c), c = K(c);
    } else {
      return a;
    }
  }
};
qd.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  c = K(c);
  return qd.k(b, a, c);
};
qd.t = 2;
function rd(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.o ? a.o() : a.call(null);
  }
  c = Ka(d);
  var e = Ma(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Ka(e), f = Ma(e);
  if (2 === b) {
    return a.c ? a.c(c, d) : a.c ? a.c(c, d) : a.call(null, c, d);
  }
  var e = Ka(f), g = Ma(f);
  if (3 === b) {
    return a.g ? a.g(c, d, e) : a.g ? a.g(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ka(g), k = Ma(g);
  if (4 === b) {
    return a.q ? a.q(c, d, e, f) : a.q ? a.q(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ka(k), l = Ma(k);
  if (5 === b) {
    return a.v ? a.v(c, d, e, f, g) : a.v ? a.v(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var k = Ka(l), m = Ma(l);
  if (6 === b) {
    return a.$ ? a.$(c, d, e, f, g, k) : a.$ ? a.$(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
  }
  var l = Ka(m), n = Ma(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, k, l) : a.aa ? a.aa(c, d, e, f, g, k, l) : a.call(null, c, d, e, f, g, k, l);
  }
  var m = Ka(n), p = Ma(n);
  if (8 === b) {
    return a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.ba ? a.ba(c, d, e, f, g, k, l, m) : a.call(null, c, d, e, f, g, k, l, m);
  }
  var n = Ka(p), q = Ma(p);
  if (9 === b) {
    return a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.ca ? a.ca(c, d, e, f, g, k, l, m, n) : a.call(null, c, d, e, f, g, k, l, m, n);
  }
  var p = Ka(q), r = Ma(q);
  if (10 === b) {
    return a.P ? a.P(c, d, e, f, g, k, l, m, n, p) : a.P ? a.P(c, d, e, f, g, k, l, m, n, p) : a.call(null, c, d, e, f, g, k, l, m, n, p);
  }
  var q = Ka(r), t = Ma(r);
  if (11 === b) {
    return a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q) : a.Q ? a.Q(c, d, e, f, g, k, l, m, n, p, q) : a.call(null, c, d, e, f, g, k, l, m, n, p, q);
  }
  var r = Ka(t), u = Ma(t);
  if (12 === b) {
    return a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r) : a.R ? a.R(c, d, e, f, g, k, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r);
  }
  var t = Ka(u), x = Ma(u);
  if (13 === b) {
    return a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.S ? a.S(c, d, e, f, g, k, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t);
  }
  var u = Ka(x), y = Ma(x);
  if (14 === b) {
    return a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.T ? a.T(c, d, e, f, g, k, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
  }
  var x = Ka(y), D = Ma(y);
  if (15 === b) {
    return a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) : a.U ? a.U(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x);
  }
  var y = Ka(D), H = Ma(D);
  if (16 === b) {
    return a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) : a.V ? a.V(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y);
  }
  var D = Ka(H), T = Ma(H);
  if (17 === b) {
    return a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) : a.W ? a.W(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D);
  }
  var H = Ka(T), ma = Ma(T);
  if (18 === b) {
    return a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) : a.X ? a.X(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H);
  }
  T = Ka(ma);
  ma = Ma(ma);
  if (19 === b) {
    return a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T) : a.Y ? a.Y(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T);
  }
  var w = Ka(ma);
  Ma(ma);
  if (20 === b) {
    return a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T, w) : a.Z ? a.Z(c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T, w) : a.call(null, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T, w);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function Bc() {
  switch(arguments.length) {
    case 2:
      return sd(arguments[0], arguments[1]);
    case 3:
      return td(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = mc(arguments[1], mc(arguments[2], arguments[3])), c = a.t;
      if (a.r) {
        var d = nd(b, c + 1);
        a = d <= c ? rd(a, d, b) : a.r(b);
      } else {
        a = a.apply(a, md(b));
      }
      return a;
    case 5:
      return ud(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return vd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function sd(a, b) {
  var c = a.t;
  if (a.r) {
    var d = nd(b, c + 1);
    return d <= c ? rd(a, d, b) : a.r(b);
  }
  return a.apply(a, md(b));
}
function td(a, b, c) {
  b = mc(b, c);
  c = a.t;
  if (a.r) {
    var d = nd(b, c + 1);
    return d <= c ? rd(a, d, b) : a.r(b);
  }
  return a.apply(a, md(b));
}
function ud(a, b, c, d, e) {
  b = mc(b, mc(c, mc(d, e)));
  c = a.t;
  return a.r ? (d = nd(b, c + 1), d <= c ? rd(a, d, b) : a.r(b)) : a.apply(a, md(b));
}
function vd(a, b, c, d, e, f) {
  b = mc(b, mc(c, mc(d, mc(e, od(f)))));
  c = a.t;
  return a.r ? (d = nd(b, c + 1), d <= c ? rd(a, d, b) : a.r(b)) : a.apply(a, md(b));
}
function xd(a) {
  return G(a) ? a : null;
}
function yd(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    var c;
    c = J(b);
    c = a.a ? a.a(c) : a.call(null, c);
    if (A(c)) {
      c = a;
      var d = K(b);
      a = c;
      b = d;
    } else {
      return!1;
    }
  }
}
function zd(a, b) {
  for (;;) {
    if (G(b)) {
      var c;
      c = J(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (A(c)) {
        return c;
      }
      c = a;
      var d = K(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Ad(a, b) {
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
      var c = b.o ? b.o() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new I(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = ud(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.t = 3;
      c.r = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var e = J(a);
        a = Ub(a);
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
            q = new I(r, 0);
          }
          return k.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = k.r;
    g.o = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Bd(a, b) {
  return function() {
    function c(c, d, e) {
      return a.q ? a.q(b, c, d, e) : a.call(null, b, c, d, e);
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
          g = new I(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return vd(a, b, c, e, f, oc([g], 0));
      }
      c.t = 3;
      c.r = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var e = J(a);
        a = Ub(a);
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
            q = new I(r, 0);
          }
          return k.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = k.r;
    g.o = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function Cd(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Nb = c;
  this.rb = d;
  this.s = 16386;
  this.i = 6455296;
}
h = Cd.prototype;
h.equiv = function(a) {
  return this.p(null, a);
};
h.p = function(a, b) {
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
      var k = M(a, 0);
      a = M(a, 1);
      var l = b, m = c;
      a.q ? a.q(k, this, l, m) : a.call(null, k, this, l, m);
      g += 1;
    } else {
      if (a = G(d)) {
        d = a, Hc(d) ? (e = xb(d), d = yb(d), a = e, f = sc(e), e = a) : (a = J(d), k = M(a, 0), a = M(a, 1), e = k, f = b, g = c, a.q ? a.q(e, this, f, g) : a.call(null, e, this, f, g), d = K(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
h.B = function() {
  return this[aa] || (this[aa] = ++ca);
};
function Dd() {
  switch(arguments.length) {
    case 1:
      return P(arguments[0]);
    default:
      var a = arguments[0], b = new I(Array.prototype.slice.call(arguments, 1), 0), c = Lc(b) ? sd(Ed, b) : b, b = N(c, qa), c = N(c, Fd);
      return new Cd(a, b, c, null);
  }
}
function P(a) {
  return new Cd(a, null, null, null);
}
function Gd(a, b) {
  if (a instanceof Cd) {
    var c = a.Nb;
    if (null != c && !A(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([E("Assert failed: "), E("Validator rejected reference state"), E("\n"), E(function() {
        var a = bd(new Sb(null, "validate", "validate", 1439230700, null), new Sb(null, "new-value", "new-value", -1567397401, null));
        return Hd.a ? Hd.a(a) : Hd.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && pb(a, c, b);
    return b;
  }
  return Cb(a, b);
}
var Id = function Id() {
  switch(arguments.length) {
    case 2:
      return Id.c(arguments[0], arguments[1]);
    case 3:
      return Id.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Id.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Id.k(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Id.c = function(a, b) {
  var c;
  a instanceof Cd ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Gd(a, c)) : c = Db.c(a, b);
  return c;
};
Id.g = function(a, b, c) {
  if (a instanceof Cd) {
    var d = a.state;
    b = b.c ? b.c(d, c) : b.call(null, d, c);
    a = Gd(a, b);
  } else {
    a = Db.g(a, b, c);
  }
  return a;
};
Id.q = function(a, b, c, d) {
  if (a instanceof Cd) {
    var e = a.state;
    b = b.g ? b.g(e, c, d) : b.call(null, e, c, d);
    a = Gd(a, b);
  } else {
    a = Db.q(a, b, c, d);
  }
  return a;
};
Id.k = function(a, b, c, d, e) {
  return a instanceof Cd ? Gd(a, ud(b, a.state, c, d, e)) : Db.v(a, b, c, d, e);
};
Id.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return Id.k(b, a, c, d, e);
};
Id.t = 4;
var Jd = function Jd() {
  switch(arguments.length) {
    case 1:
      return Jd.a(arguments[0]);
    case 2:
      return Jd.c(arguments[0], arguments[1]);
    case 3:
      return Jd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Jd.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Jd.k(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Jd.a = function(a) {
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
        return b.o ? b.o() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new I(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = td(a, e, f);
          return b.c ? b.c(c, e) : b.call(null, c, e);
        }
        c.t = 2;
        c.r = function(a) {
          var b = J(a);
          a = K(a);
          var c = J(a);
          a = Ub(a);
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
              n = new I(p, 0);
            }
            return g.k(a, b, n);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.t = 2;
      f.r = g.r;
      f.o = e;
      f.a = d;
      f.c = c;
      f.k = g.k;
      return f;
    }();
  };
};
Jd.c = function(a, b) {
  return new fd(null, function() {
    var c = G(b);
    if (c) {
      if (Hc(c)) {
        for (var d = xb(c), e = sc(d), f = new hd(Array(e), 0), g = 0;;) {
          if (g < e) {
            ld(f, function() {
              var b = F.c(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return kd(f.ra(), Jd.c(a, yb(c)));
      }
      return mc(function() {
        var b = J(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), Jd.c(a, Ub(c)));
    }
    return null;
  }, null, null);
};
Jd.g = function(a, b, c) {
  return new fd(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = mc, g;
      g = J(d);
      var k = J(e);
      g = a.c ? a.c(g, k) : a.call(null, g, k);
      d = f(g, Jd.g(a, Ub(d), Ub(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Jd.q = function(a, b, c, d) {
  return new fd(null, function() {
    var e = G(b), f = G(c), g = G(d);
    if (e && f && g) {
      var k = mc, l;
      l = J(e);
      var m = J(f), n = J(g);
      l = a.g ? a.g(l, m, n) : a.call(null, l, m, n);
      e = k(l, Jd.q(a, Ub(e), Ub(f), Ub(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Jd.k = function(a, b, c, d, e) {
  var f = function k(a) {
    return new fd(null, function() {
      var b = Jd.c(G, a);
      return yd(Sc, b) ? mc(Jd.c(J, b), k(Jd.c(Ub, b))) : null;
    }, null, null);
  };
  return Jd.c(function() {
    return function(b) {
      return sd(a, b);
    };
  }(f), f(qc.k(e, d, oc([c, b], 0))));
};
Jd.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return Jd.k(b, a, c, d, e);
};
Jd.t = 4;
function Kd(a, b) {
  return new fd(null, function() {
    var c = G(b);
    if (c) {
      if (Hc(c)) {
        for (var d = xb(c), e = sc(d), f = new hd(Array(e), 0), g = 0;;) {
          if (g < e) {
            var k;
            k = F.c(d, g);
            k = a.a ? a.a(k) : a.call(null, k);
            A(k) && (k = F.c(d, g), f.add(k));
            g += 1;
          } else {
            break;
          }
        }
        return kd(f.ra(), Kd(a, yb(c)));
      }
      d = J(c);
      c = Ub(c);
      return A(a.a ? a.a(d) : a.call(null, d)) ? mc(d, Kd(a, c)) : Kd(a, c);
    }
    return null;
  }, null, null);
}
var Ld = function Ld() {
  switch(arguments.length) {
    case 2:
      return Ld.c(arguments[0], arguments[1]);
    case 3:
      return Ld.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
Ld.c = function(a, b) {
  var c;
  null != a ? a && (a.s & 4 || a.vb) ? (c = Pc(rb, qb(a), b), c = sb(c), c = Cc(c, Dc(a))) : c = Pc(Ha, a, b) : c = Pc(qc, Vb, b);
  return c;
};
Ld.g = function(a, b, c) {
  a && (a.s & 4 || a.vb) ? (b = Tc(b, qd, qb(a), c), b = sb(b), a = Cc(b, Dc(a))) : a = Tc(b, qc, a, c);
  return a;
};
Ld.t = 3;
function Md(a, b, c, d) {
  return wc.g(a, b, function() {
    var e = N(a, b);
    return c.c ? c.c(e, d) : c.call(null, e, d);
  }());
}
function Nd(a, b, c, d, e) {
  return wc.g(a, b, function() {
    var f = N(a, b);
    return c.g ? c.g(f, d, e) : c.call(null, f, d, e);
  }());
}
function Od(a, b) {
  this.l = a;
  this.b = b;
}
function Pd(a, b) {
  return new Od(a, b);
}
function Qd(a) {
  return new Od(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Rd(a) {
  return new Od(a.l, Aa(a.b));
}
function Sd(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Td(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Qd(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var Ud = function Ud(b, c, d, e) {
  var f = Rd(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.b[g] = e : (d = d.b[g], b = null != d ? Ud(b, c - 5, d, e) : Td(null, c - 5, e), f.b[g] = b);
  return f;
};
function Vd(a, b) {
  throw Error([E("No item "), E(a), E(" in vector of length "), E(b)].join(""));
}
function Wd(a, b) {
  if (b >= Sd(a)) {
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
function Xd(a, b) {
  return 0 <= b && b < a.d ? Wd(a, b) : Vd(b, a.d);
}
var Yd = function Yd(b, c, d, e, f) {
  var g = Rd(d);
  if (0 === c) {
    g.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Yd(b, c - 5, d.b[k], e, f);
    g.b[k] = b;
  }
  return g;
}, Zd = function Zd(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = Zd(b, c - 5, d.b[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Rd(d);
    d.b[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Rd(d);
  d.b[e] = null;
  return d;
};
function $d(a, b, c, d, e, f) {
  this.j = a;
  this.jb = b;
  this.b = c;
  this.qa = d;
  this.start = e;
  this.end = f;
}
$d.prototype.gb = function() {
  return this.j < this.end;
};
$d.prototype.next = function() {
  32 === this.j - this.jb && (this.b = Wd(this.qa, this.j), this.jb += 32);
  var a = this.b[this.j & 31];
  this.j += 1;
  return a;
};
function Q(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.shift = c;
  this.root = d;
  this.n = e;
  this.m = f;
  this.i = 167668511;
  this.s = 8196;
}
h = Q.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
};
h.F = function(a, b) {
  return Xd(this, b)[b & 31];
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? Wd(this, b)[b & 31] : c;
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return Sd(this) <= b ? (a = Aa(this.n), a[b & 31] = c, new Q(this.h, this.d, this.shift, this.root, a, null)) : new Q(this.h, this.d, this.shift, Yd(this, this.shift, this.root, b, c), this.n, null);
  }
  if (b === this.d) {
    return Ha(this, c);
  }
  throw Error([E("Index "), E(b), E(" out of bounds  [0,"), E(this.d), E("]")].join(""));
};
h.Na = function() {
  var a = this.d;
  return new $d(0, 0, 0 < sc(this) ? Wd(this, 0) : null, this, 0, a);
};
h.H = function() {
  return this.h;
};
h.O = function() {
  return this.d;
};
h.Za = function() {
  return F.c(this, 0);
};
h.$a = function() {
  return F.c(this, 1);
};
h.Fa = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return db(rc, this.h);
  }
  if (1 < this.d - Sd(this)) {
    return new Q(this.h, this.d - 1, this.shift, this.root, this.n.slice(0, -1), null);
  }
  var a = Wd(this, this.d - 2), b = Zd(this, this.shift, this.root), b = null == b ? R : b, c = this.d - 1;
  return 5 < this.shift && null == b.b[1] ? new Q(this.h, c, this.shift - 5, b.b[0], a, null) : new Q(this.h, c, this.shift, b, a, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  if (b instanceof Q) {
    if (this.d === sc(b)) {
      for (var c = Eb(this), d = Eb(b);;) {
        if (A(c.gb())) {
          var e = c.next(), f = d.next();
          if (!Wb.c(e, f)) {
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
    return lc(this, b);
  }
};
h.La = function() {
  var a = this;
  return new ae(a.d, a.shift, function() {
    var b = a.root;
    return be.a ? be.a(b) : be.call(null, b);
  }(), function() {
    var b = a.n;
    return ce.a ? ce.a(b) : ce.call(null, b);
  }());
};
h.L = function() {
  return Cc(rc, this.h);
};
h.M = function(a, b) {
  return ec(this, b);
};
h.N = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = Wd(this, a);
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
    return Ya(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
h.J = function() {
  if (0 === this.d) {
    return null;
  }
  if (32 >= this.d) {
    return new I(this.n, 0);
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
  return de ? de(this, a, 0, 0) : ee.call(null, this, a, 0, 0);
};
h.K = function(a, b) {
  return new Q(b, this.d, this.shift, this.root, this.n, this.m);
};
h.I = function(a, b) {
  if (32 > this.d - Sd(this)) {
    for (var c = this.n.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.n[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Q(this.h, this.d + 1, this.shift, this.root, d, null);
  }
  c = (d = this.d >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Qd(null), d.b[0] = this.root, e = Td(null, this.shift, new Od(null, this.n)), d.b[1] = e) : d = Ud(this, this.shift, this.root, new Od(null, this.n));
  return new Q(this.h, this.d + 1, c, d, [b], null);
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
var R = new Od(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), rc = new Q(null, 0, 5, R, [], bc);
Q.prototype[ya] = function() {
  return Zb(this);
};
function fe(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.s = 1536;
}
h = fe.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = de ? de(a, b, c, d) : ee.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return zb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(rc, this.h);
};
h.M = function(a, b) {
  var c;
  c = this.D;
  var d = this.j + this.w, e = sc(this.D);
  c = ge ? ge(c, d, e) : he.call(null, c, d, e);
  return ec(c, b);
};
h.N = function(a, b, c) {
  a = this.D;
  var d = this.j + this.w, e = sc(this.D);
  a = ge ? ge(a, d, e) : he.call(null, a, d, e);
  return fc(a, b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = de ? de(a, b, c, d) : ee.call(null, a, b, c, d);
    return null == a ? Vb : a;
  }
  return yb(this);
};
h.J = function() {
  return this;
};
h.Xa = function() {
  var a = this.ga;
  return new id(a, this.w, a.length);
};
h.Ya = function() {
  var a = this.j + this.ga.length;
  if (a < Ea(this.D)) {
    var b = this.D, c = Wd(this.D, a);
    return de ? de(b, c, a, 0) : ee.call(null, b, c, a, 0);
  }
  return Vb;
};
h.K = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return ie ? ie(c, d, e, f, b) : ee.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return mc(b, this);
};
h.Wa = function() {
  var a = this.j + this.ga.length;
  if (a < Ea(this.D)) {
    var b = this.D, c = Wd(this.D, a);
    return de ? de(b, c, a, 0) : ee.call(null, b, c, a, 0);
  }
  return null;
};
fe.prototype[ya] = function() {
  return Zb(this);
};
function ee() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new fe(a, Xd(a, b), b, c, null, null);
    case 4:
      return de(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ie(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function de(a, b, c, d) {
  return new fe(a, b, c, d, null, null);
}
function ie(a, b, c, d, e) {
  return new fe(a, b, c, d, e, null);
}
function je(a, b, c, d, e) {
  this.h = a;
  this.qa = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.s = 8192;
}
h = je.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
};
h.F = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Vd(b, this.end - this.start) : F.c(this.qa, this.start + b);
};
h.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : F.g(this.qa, this.start + b, c);
};
h.cb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = wc.g(this.qa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return ke.v ? ke.v(a, c, b, d, null) : ke.call(null, a, c, b, d, null);
};
h.H = function() {
  return this.h;
};
h.O = function() {
  return this.end - this.start;
};
h.Fa = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.qa, c = this.start, d = this.end - 1;
  return ke.v ? ke.v(a, b, c, d, null) : ke.call(null, a, b, c, d, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(rc, this.h);
};
h.M = function(a, b) {
  return ec(this, b);
};
h.N = function(a, b, c) {
  return fc(this, b, c);
};
h.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return Ya(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
h.J = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : mc(F.c(a.qa, e), new fd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
h.K = function(a, b) {
  var c = this.qa, d = this.start, e = this.end, f = this.m;
  return ke.v ? ke.v(b, c, d, e, f) : ke.call(null, b, c, d, e, f);
};
h.I = function(a, b) {
  var c = this.h, d = Ya(this.qa, this.end, b), e = this.start, f = this.end + 1;
  return ke.v ? ke.v(c, d, e, f, null) : ke.call(null, c, d, e, f, null);
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
je.prototype[ya] = function() {
  return Zb(this);
};
function ke(a, b, c, d, e) {
  for (;;) {
    if (b instanceof je) {
      c = b.start + c, d = b.start + d, b = b.qa;
    } else {
      var f = sc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new je(a, b, c, d, e);
    }
  }
}
function he() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return ge(a, arguments[1], sc(a));
    case 3:
      return ge(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function ge(a, b, c) {
  return ke(null, a, b, c, null);
}
function le(a, b) {
  return a === b.l ? b : new Od(a, Aa(b.b));
}
function be(a) {
  return new Od({}, Aa(a.b));
}
function ce(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Jc(a, 0, b, 0, a.length);
  return b;
}
var me = function me(b, c, d, e) {
  d = le(b.root.l, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.b[f];
    b = null != g ? me(b, c - 5, g, e) : Td(b.root.l, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function ae(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.s = 88;
  this.i = 275;
}
h = ae.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.d - Sd(this)) {
      this.n[this.d & 31] = b;
    } else {
      var c = new Od(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Td(this.root.l, this.shift, c);
        this.root = new Od(this.root.l, d);
        this.shift = e;
      } else {
        this.root = me(this, this.shift, this.root, c);
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
    var a = this.d - Sd(this), b = Array(a);
    Jc(this.n, 0, b, 0, a);
    return new Q(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
h.Ga = function(a, b, c) {
  if ("number" === typeof b) {
    return vb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
h.nb = function(a, b, c) {
  var d = this;
  if (d.root.l) {
    if (0 <= b && b < d.d) {
      return Sd(this) <= b ? d.n[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = le(d.root.l, k);
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
      return rb(this, c);
    }
    throw Error([E("Index "), E(b), E(" out of bounds for TransientVector of length"), E(d.d)].join(""));
  }
  throw Error("assoc! after persistent!");
};
h.O = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
h.F = function(a, b) {
  if (this.root.l) {
    return Xd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? F.c(this, b) : c;
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
function ne() {
  this.i = 2097152;
  this.s = 0;
}
ne.prototype.equiv = function(a) {
  return this.p(null, a);
};
ne.prototype.p = function() {
  return!1;
};
var oe = new ne;
function pe(a, b) {
  return Mc(Fc(b) ? sc(a) === sc(b) ? yd(Sc, Jd.c(function(a) {
    return Wb.c(vc(b, J(a), oe), J(K(a)));
  }, a)) : null : null);
}
function qe(a) {
  this.u = a;
}
qe.prototype.next = function() {
  if (null != this.u) {
    var a = J(this.u), b = M(a, 0), a = M(a, 1);
    this.u = K(this.u);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function re(a) {
  return new qe(G(a));
}
function se(a, b) {
  var c;
  if (b instanceof O) {
    a: {
      c = a.length;
      for (var d = b.va, e = 0;;) {
        if (c <= e) {
          c = -1;
          break a;
        }
        var f = a[e];
        if (f instanceof O && d === f.va) {
          c = e;
          break a;
        }
        e += 2;
      }
    }
  } else {
    if (c = "string" == typeof b, A(A(c) ? c : "number" === typeof b)) {
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
      if (b instanceof Sb) {
        a: {
          for (c = a.length, d = b.ya, e = 0;;) {
            if (c <= e) {
              c = -1;
              break a;
            }
            f = a[e];
            if (f instanceof Sb && d === f.ya) {
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
              if (Wb.c(b, a[d])) {
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
function te(a, b, c) {
  this.b = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.s = 0;
}
h = te.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  return this.j < this.b.length - 2 ? new te(this.b, this.j + 2, this.ka) : null;
};
h.O = function() {
  return(this.b.length - this.j) / 2;
};
h.B = function() {
  return ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.ka);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return new Q(null, 2, 5, R, [this.b[this.j], this.b[this.j + 1]], null);
};
h.la = function() {
  return this.j < this.b.length - 2 ? new te(this.b, this.j + 2, this.ka) : Vb;
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new te(this.b, this.j, b);
};
h.I = function(a, b) {
  return mc(b, this);
};
te.prototype[ya] = function() {
  return Zb(this);
};
function ue(a, b, c) {
  this.b = a;
  this.j = b;
  this.d = c;
}
ue.prototype.gb = function() {
  return this.j < this.d;
};
ue.prototype.next = function() {
  var a = new Q(null, 2, 5, R, [this.b[this.j], this.b[this.j + 1]], null);
  this.j += 2;
  return a;
};
function z(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.b = c;
  this.m = d;
  this.i = 16647951;
  this.s = 8196;
}
h = z.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.keys = function() {
  return Zb(ve.a ? ve.a(this) : ve.call(null, this));
};
h.entries = function() {
  return re(G(this));
};
h.values = function() {
  return Zb(we.a ? we.a(this) : we.call(null, this));
};
h.has = function(a) {
  return Nc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = M(f, 0), f = M(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Hc(b) ? (c = xb(b), b = yb(b), g = c, d = sc(c), c = g) : (c = J(b), g = M(c, 0), c = f = M(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  a = se(this.b, b);
  return-1 === a ? c : this.b[a + 1];
};
h.Na = function() {
  return new ue(this.b, 0, 2 * this.d);
};
h.H = function() {
  return this.h;
};
h.O = function() {
  return this.d;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = cc(this);
};
h.p = function(a, b) {
  if (b && (b.i & 1024 || b.yb)) {
    var c = this.b.length;
    if (this.d === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.b[d], Kc);
          if (e !== Kc) {
            if (Wb.c(this.b[d + 1], e)) {
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
    return pe(this, b);
  }
};
h.La = function() {
  return new xe({}, this.b.length, Aa(this.b));
};
h.L = function() {
  return db(U, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.mb = function(a, b) {
  if (0 <= se(this.b, b)) {
    var c = this.b.length, d = c - 2;
    if (0 === d) {
      return Ga(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new z(this.h, this.d - 1, d, null);
      }
      Wb.c(b, this.b[e]) || (d[f] = this.b[e], d[f + 1] = this.b[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
h.Ea = function(a, b, c) {
  a = se(this.b, b);
  if (-1 === a) {
    if (this.d < ye) {
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
      return new z(this.h, this.d + 1, e, null);
    }
    return db(Qa(Ld.c(xc, this), b, c), this.h);
  }
  if (c === this.b[a + 1]) {
    return this;
  }
  b = Aa(this.b);
  b[a + 1] = c;
  return new z(this.h, this.d, b, null);
};
h.J = function() {
  var a = this.b;
  return 0 <= a.length - 2 ? new te(a, 0, null) : null;
};
h.K = function(a, b) {
  return new z(b, this.d, this.b, this.m);
};
h.I = function(a, b) {
  if (Gc(b)) {
    return Qa(this, F.c(b, 0), F.c(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (Gc(e)) {
      c = Qa(c, F.c(e, 0), F.c(e, 1)), d = K(d);
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
var U = new z(null, 0, [], dc), ye = 8;
z.prototype[ya] = function() {
  return Zb(this);
};
function xe(a, b, c) {
  this.Ha = a;
  this.Ja = b;
  this.b = c;
  this.i = 258;
  this.s = 56;
}
h = xe.prototype;
h.O = function() {
  if (A(this.Ha)) {
    return Xc(this.Ja, 2);
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  if (A(this.Ha)) {
    return a = se(this.b, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.Qa = function(a, b) {
  if (A(this.Ha)) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ta, b)) : B(Ta, b)) {
      return tb(this, ze.a ? ze.a(b) : ze.call(null, b), Ae.a ? Ae.a(b) : Ae.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (A(e)) {
        var f = e, c = K(c), d = tb(d, function() {
          var a = f;
          return ze.a ? ze.a(a) : ze.call(null, a);
        }(), function() {
          var a = f;
          return Ae.a ? Ae.a(a) : Ae.call(null, a);
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
  if (A(this.Ha)) {
    return this.Ha = !1, new z(null, Xc(this.Ja, 2), this.b, null);
  }
  throw Error("persistent! called twice");
};
h.Ga = function(a, b, c) {
  if (A(this.Ha)) {
    a = se(this.b, b);
    if (-1 === a) {
      if (this.Ja + 2 <= 2 * ye) {
        return this.Ja += 2, this.b.push(b), this.b.push(c), this;
      }
      a = this.Ja;
      var d = this.b;
      a = Be.c ? Be.c(a, d) : Be.call(null, a, d);
      return tb(a, b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Be(a, b) {
  for (var c = qb(xc), d = 0;;) {
    if (d < a) {
      c = tb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Ce() {
  this.ta = !1;
}
function De(a, b) {
  return a === b ? !0 : a === b || a instanceof O && b instanceof O && a.va === b.va ? !0 : Wb.c(a, b);
}
function Ee(a, b, c) {
  a = Aa(a);
  a[b] = c;
  return a;
}
function Fe(a, b) {
  var c = Array(a.length - 2);
  Jc(a, 0, c, 0, 2 * b);
  Jc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function Ge(a, b, c, d) {
  a = a.Ba(b);
  a.b[c] = d;
  return a;
}
function He(a, b, c) {
  this.l = a;
  this.A = b;
  this.b = c;
}
h = He.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Yc(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Jc(this.b, 0, c, 0, 2 * b);
  return new He(a, this.A, c);
};
h.Sa = function() {
  var a = this.b;
  return Ie ? Ie(a) : Je.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = Yc(this.A & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : De(c, e) ? f : d;
};
h.pa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Yc(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = Yc(this.A);
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
      k[c >>> b & 31] = Ke.pa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.b[e] ? Ke.pa(a, b + 5, Qb(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Le(a, l + 1, k);
    }
    b = Array(2 * (l + 4));
    Jc(this.b, 0, b, 0, 2 * k);
    b[2 * k] = d;
    b[2 * k + 1] = e;
    Jc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k));
    f.ta = !0;
    a = this.Ba(a);
    a.b = b;
    a.A |= g;
    return a;
  }
  l = this.b[2 * k];
  g = this.b[2 * k + 1];
  if (null == l) {
    return l = g.pa(a, b + 5, c, d, e, f), l === g ? this : Ge(this, a, 2 * k + 1, l);
  }
  if (De(d, l)) {
    return e === g ? this : Ge(this, a, 2 * k + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Me ? Me(a, f, l, g, c, d, e) : Ne.call(null, a, f, l, g, c, d, e);
  e = 2 * k;
  k = 2 * k + 1;
  a = this.Ba(a);
  a.b[e] = null;
  a.b[k] = d;
  return a;
};
h.oa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Yc(this.A & f - 1);
  if (0 === (this.A & f)) {
    var k = Yc(this.A);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ke.oa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.b[d] ? Ke.oa(a + 5, Qb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Le(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    Jc(this.b, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Jc(this.b, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.ta = !0;
    return new He(null, this.A | f, a);
  }
  var l = this.b[2 * g], f = this.b[2 * g + 1];
  if (null == l) {
    return k = f.oa(a + 5, b, c, d, e), k === f ? this : new He(null, this.A, Ee(this.b, 2 * g + 1, k));
  }
  if (De(c, l)) {
    return d === f ? this : new He(null, this.A, Ee(this.b, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  k = this.b;
  a += 5;
  a = Oe ? Oe(a, l, f, b, c, d) : Ne.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Aa(k);
  d[c] = null;
  d[g] = a;
  return new He(null, e, d);
};
h.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = Yc(this.A & d - 1), f = this.b[2 * e], g = this.b[2 * e + 1];
  return null == f ? (a = g.Ta(a + 5, b, c), a === g ? this : null != a ? new He(null, this.A, Ee(this.b, 2 * e + 1, a)) : this.A === d ? null : new He(null, this.A ^ d, Fe(this.b, e))) : De(c, f) ? new He(null, this.A ^ d, Fe(this.b, e)) : this;
};
var Ke = new He(null, 0, []);
function Le(a, b, c) {
  this.l = a;
  this.d = b;
  this.b = c;
}
h = Le.prototype;
h.Ba = function(a) {
  return a === this.l ? this : new Le(a, this.d, Aa(this.b));
};
h.Sa = function() {
  var a = this.b;
  return Pe ? Pe(a) : Qe.call(null, a);
};
h.Ca = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
h.pa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.b[g];
  if (null == k) {
    return a = Ge(this, a, g, Ke.pa(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = k.pa(a, b + 5, c, d, e, f);
  return b === k ? this : Ge(this, a, g, b);
};
h.oa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.b[f];
  if (null == g) {
    return new Le(null, this.d + 1, Ee(this.b, f, Ke.oa(a + 5, b, c, d, e)));
  }
  a = g.oa(a + 5, b, c, d, e);
  return a === g ? this : new Le(null, this.d, Ee(this.b, f, a));
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
                d = new He(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Le(null, this.d - 1, Ee(this.b, d, a));
        }
      } else {
        d = new Le(null, this.d, Ee(this.b, d, a));
      }
    }
    return d;
  }
  return this;
};
function Re(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (De(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Te(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.d = c;
  this.b = d;
}
h = Te.prototype;
h.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Jc(this.b, 0, b, 0, 2 * this.d);
  return new Te(a, this.ua, this.d, b);
};
h.Sa = function() {
  var a = this.b;
  return Ie ? Ie(a) : Je.call(null, a);
};
h.Ca = function(a, b, c, d) {
  a = Re(this.b, this.d, c);
  return 0 > a ? d : De(c, this.b[a]) ? this.b[a + 1] : d;
};
h.pa = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = Re(this.b, this.d, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ba(a), a.b[b] = d, a.b[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      Jc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.l ? (this.b = b, this.d = d, a = this) : a = new Te(this.l, this.ua, d, b);
      return a;
    }
    return this.b[b + 1] === e ? this : Ge(this, a, b + 1, e);
  }
  return(new He(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).pa(a, b, c, d, e, f);
};
h.oa = function(a, b, c, d, e) {
  return b === this.ua ? (a = Re(this.b, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Jc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new Te(null, this.ua, this.d + 1, b)) : Wb.c(this.b[a], d) ? this : new Te(null, this.ua, this.d, Ee(this.b, a + 1, d))) : (new He(null, 1 << (this.ua >>> a & 31), [null, this])).oa(a, b, c, d, e);
};
h.Ta = function(a, b, c) {
  a = Re(this.b, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new Te(null, this.ua, this.d - 1, Fe(this.b, Xc(a, 2)));
};
function Ne() {
  switch(arguments.length) {
    case 6:
      return Oe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Me(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Oe(a, b, c, d, e, f) {
  var g = Qb(b);
  if (g === d) {
    return new Te(null, g, 2, [b, c, e, f]);
  }
  var k = new Ce;
  return Ke.oa(a, g, b, c, k).oa(a, d, e, f, k);
}
function Me(a, b, c, d, e, f, g) {
  var k = Qb(c);
  if (k === e) {
    return new Te(null, k, 2, [c, d, f, g]);
  }
  var l = new Ce;
  return Ke.pa(a, b, k, c, d, l).pa(a, b, e, f, g, l);
}
function Ue(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.u = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = Ue.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return null == this.u ? new Q(null, 2, 5, R, [this.xa[this.j], this.xa[this.j + 1]], null) : J(this.u);
};
h.la = function() {
  if (null == this.u) {
    var a = this.xa, b = this.j + 2;
    return Ve ? Ve(a, b, null) : Je.call(null, a, b, null);
  }
  var a = this.xa, b = this.j, c = K(this.u);
  return Ve ? Ve(a, b, c) : Je.call(null, a, b, c);
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new Ue(b, this.xa, this.j, this.u, this.m);
};
h.I = function(a, b) {
  return mc(b, this);
};
Ue.prototype[ya] = function() {
  return Zb(this);
};
function Je() {
  switch(arguments.length) {
    case 1:
      return Ie(arguments[0]);
    case 3:
      return Ve(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Ie(a) {
  return Ve(a, 0, null);
}
function Ve(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Ue(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (A(d) && (d = d.Sa(), A(d))) {
          return new Ue(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Ue(null, a, b, c, null);
  }
}
function We(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.u = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
h = We.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.h;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return J(this.u);
};
h.la = function() {
  var a = this.xa, b = this.j, c = K(this.u);
  return Xe ? Xe(null, a, b, c) : Qe.call(null, null, a, b, c);
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new We(b, this.xa, this.j, this.u, this.m);
};
h.I = function(a, b) {
  return mc(b, this);
};
We.prototype[ya] = function() {
  return Zb(this);
};
function Qe() {
  switch(arguments.length) {
    case 1:
      return Pe(arguments[0]);
    case 4:
      return Xe(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Pe(a) {
  return Xe(null, a, 0, null);
}
function Xe(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (A(e) && (e = e.Sa(), A(e))) {
          return new We(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new We(a, b, c, d, null);
  }
}
function Ye(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.m = f;
  this.i = 16123663;
  this.s = 8196;
}
h = Ye.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.keys = function() {
  return Zb(ve.a ? ve.a(this) : ve.call(null, this));
};
h.entries = function() {
  return re(G(this));
};
h.values = function() {
  return Zb(we.a ? we.a(this) : we.call(null, this));
};
h.has = function(a) {
  return Nc(this, a);
};
h.get = function(a, b) {
  return this.G(null, a, b);
};
h.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.F(null, e), g = M(f, 0), f = M(f, 1);
      a.c ? a.c(f, g) : a.call(null, f, g);
      e += 1;
    } else {
      if (b = G(b)) {
        Hc(b) ? (c = xb(b), b = yb(b), g = c, d = sc(c), c = g) : (c = J(b), g = M(c, 0), c = f = M(c, 1), a.c ? a.c(c, g) : a.call(null, c, g), b = K(b), c = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
};
h.da = function(a, b) {
  return Pa.g(this, b, null);
};
h.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Qb(b), b, c);
};
h.H = function() {
  return this.h;
};
h.O = function() {
  return this.d;
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = cc(this);
};
h.p = function(a, b) {
  return pe(this, b);
};
h.La = function() {
  return new Ze({}, this.root, this.d, this.ma, this.na);
};
h.L = function() {
  return db(xc, this.h);
};
h.mb = function(a, b) {
  if (null == b) {
    return this.ma ? new Ye(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ta(0, Qb(b), b);
  return c === this.root ? this : new Ye(this.h, this.d - 1, c, this.ma, this.na, null);
};
h.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new Ye(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new Ce;
  b = (null == this.root ? Ke : this.root).oa(0, Qb(b), b, c, a);
  return b === this.root ? this : new Ye(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
h.J = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.ma ? mc(new Q(null, 2, 5, R, [null, this.na], null), a) : a;
  }
  return null;
};
h.K = function(a, b) {
  return new Ye(b, this.d, this.root, this.ma, this.na, this.m);
};
h.I = function(a, b) {
  if (Gc(b)) {
    return Qa(this, F.c(b, 0), F.c(b, 1));
  }
  for (var c = this, d = G(b);;) {
    if (null == d) {
      return c;
    }
    var e = J(d);
    if (Gc(e)) {
      c = Qa(c, F.c(e, 0), F.c(e, 1)), d = K(d);
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.da(null, a);
};
h.c = function(a, b) {
  return this.G(null, a, b);
};
var xc = new Ye(null, 0, null, !1, null, dc);
Ye.prototype[ya] = function() {
  return Zb(this);
};
function Ze(a, b, c, d, e) {
  this.l = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.s = 56;
}
function $e(a, b) {
  if (a.l) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ta, b)) : B(Ta, b)) {
      return af(a, ze.a ? ze.a(b) : ze.call(null, b), Ae.a ? Ae.a(b) : Ae.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = J(c);
      if (A(e)) {
        var f = e, c = K(c), d = af(d, function() {
          var a = f;
          return ze.a ? ze.a(a) : ze.call(null, a);
        }(), function() {
          var a = f;
          return Ae.a ? Ae.a(a) : Ae.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function af(a, b, c) {
  if (a.l) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new Ce;
      b = (null == a.root ? Ke : a.root).pa(a.l, 0, Qb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
h = Ze.prototype;
h.O = function() {
  if (this.l) {
    return this.count;
  }
  throw Error("count after persistent!");
};
h.da = function(a, b) {
  return null == b ? this.ma ? this.na : null : null == this.root ? null : this.root.Ca(0, Qb(b), b);
};
h.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Qb(b), b, c);
};
h.Qa = function(a, b) {
  return $e(this, b);
};
h.Ra = function() {
  var a;
  if (this.l) {
    this.l = null, a = new Ye(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.Ga = function(a, b, c) {
  return af(this, b, c);
};
var Ed = function Ed() {
  return Ed.k(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Ed.k = function(a) {
  for (var b = G(a), c = qb(xc);;) {
    if (b) {
      a = K(K(b));
      var d = J(b), b = J(K(b)), c = tb(c, d, b), b = a;
    } else {
      return sb(c);
    }
  }
};
Ed.t = 0;
Ed.r = function(a) {
  return Ed.k(G(a));
};
function bf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = bf.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Na, a)) : B(Na, a)) ? this.ja.ia(null) : K(this.ja);
  return null == a ? null : new bf(a, this.ka);
};
h.B = function() {
  return ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.ka);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).Za(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Na, a)) : B(Na, a)) ? this.ja.ia(null) : K(this.ja);
  return null != a ? new bf(a, this.ka) : Vb;
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new bf(this.ja, b);
};
h.I = function(a, b) {
  return mc(b, this);
};
bf.prototype[ya] = function() {
  return Zb(this);
};
function ve(a) {
  return(a = G(a)) ? new bf(a, null) : null;
}
function ze(a) {
  return Ua(a);
}
function cf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
h = cf.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.H = function() {
  return this.ka;
};
h.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Na, a)) : B(Na, a)) ? this.ja.ia(null) : K(this.ja);
  return null == a ? null : new cf(a, this.ka);
};
h.B = function() {
  return ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.ka);
};
h.M = function(a, b) {
  return Oc(b, this);
};
h.N = function(a, b, c) {
  return Rc(b, c, this);
};
h.fa = function() {
  return this.ja.fa(null).$a(null);
};
h.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Na, a)) : B(Na, a)) ? this.ja.ia(null) : K(this.ja);
  return null != a ? new cf(a, this.ka) : Vb;
};
h.J = function() {
  return this;
};
h.K = function(a, b) {
  return new cf(this.ja, b);
};
h.I = function(a, b) {
  return mc(b, this);
};
cf.prototype[ya] = function() {
  return Zb(this);
};
function we(a) {
  return(a = G(a)) ? new cf(a, null) : null;
}
function Ae(a) {
  return Va(a);
}
function ed(a) {
  if (a && (a.s & 4096 || a.Bb)) {
    return a.Oa(null);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([E("Doesn't support name: "), E(a)].join(""));
}
function df(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
df.prototype.gb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
df.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function ef(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.s = 8192;
}
h = ef.prototype;
h.toString = function() {
  return Gb(this);
};
h.equiv = function(a) {
  return this.p(null, a);
};
h.F = function(a, b) {
  if (b < Ea(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.ha = function(a, b, c) {
  return b < Ea(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.Na = function() {
  return new df(this.start, this.end, this.step);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ef(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ef(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.O = function() {
  if (wa(kb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(null, a);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return ec(this, b);
};
h.N = function(a, b, c) {
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
  return null == kb(this) ? null : this.start;
};
h.la = function() {
  return null != kb(this) ? new ef(this.h, this.start + this.step, this.end, this.step, null) : Vb;
};
h.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.K = function(a, b) {
  return new ef(b, this.start, this.end, this.step, this.m);
};
h.I = function(a, b) {
  return mc(b, this);
};
ef.prototype[ya] = function() {
  return Zb(this);
};
function ff() {
  var a = gf, b = hf;
  return function() {
    function c(c, d, e) {
      return new Q(null, 2, 5, R, [a.g ? a.g(c, d, e) : a.call(null, c, d, e), b.g ? b.g(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new Q(null, 2, 5, R, [a.c ? a.c(c, d) : a.call(null, c, d), b.c ? b.c(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new Q(null, 2, 5, R, [a.a ? a.a(c) : a.call(null, c), b.a ? b.a(c) : b.call(null, c)], null);
    }
    function f() {
      return new Q(null, 2, 5, R, [a.o ? a.o() : a.call(null), b.o ? b.o() : b.call(null)], null);
    }
    var g = null, k = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, k = Array(arguments.length - 3);g < k.length;) {
            k[g] = arguments[g + 3], ++g;
          }
          g = new I(k, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return new Q(null, 2, 5, R, [ud(a, c, e, f, g), ud(b, c, e, f, g)], null);
      }
      c.t = 3;
      c.r = function(a) {
        var b = J(a);
        a = K(a);
        var c = J(a);
        a = K(a);
        var e = J(a);
        a = Ub(a);
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
            q = new I(r, 0);
          }
          return k.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = k.r;
    g.o = f;
    g.a = e;
    g.c = d;
    g.g = c;
    g.k = k.k;
    return g;
  }();
}
function jf(a, b, c, d, e, f, g) {
  var k = ia;
  ia = null == ia ? null : ia - 1;
  try {
    if (null != ia && 0 > ia) {
      return mb(a, "#");
    }
    mb(a, c);
    if (0 === ua.a(f)) {
      G(g) && mb(a, function() {
        var a = kf.a(f);
        return A(a) ? a : "...";
      }());
    } else {
      if (G(g)) {
        var l = J(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = K(g), n = ua.a(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          G(m) && 0 === n && (mb(a, d), mb(a, function() {
            var a = kf.a(f);
            return A(a) ? a : "...";
          }()));
          break;
        } else {
          mb(a, d);
          var p = J(m);
          c = a;
          g = f;
          b.g ? b.g(p, c, g) : b.call(null, p, c, g);
          var q = K(m);
          c = n - 1;
          m = q;
          n = c;
        }
      }
    }
    return mb(a, e);
  } finally {
    ia = k;
  }
}
function lf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.F(null, f);
      mb(a, g);
      f += 1;
    } else {
      if (c = G(c)) {
        d = c, Hc(d) ? (c = xb(d), e = yb(d), d = c, g = sc(c), c = e, e = g) : (g = J(d), mb(a, g), c = K(d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var mf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function nf(a) {
  return[E('"'), E(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return mf[a];
  })), E('"')].join("");
}
function of(a, b, c) {
  if (null == a) {
    return mb(b, "nil");
  }
  if (void 0 === a) {
    return mb(b, "#\x3cundefined\x3e");
  }
  if (A(function() {
    var b = N(c, qa);
    return A(b) ? (b = a ? a.i & 131072 || a.Ab ? !0 : a.i ? !1 : B(ab, a) : B(ab, a)) ? Dc(a) : b : b;
  }())) {
    mb(b, "^");
    var d = Dc(a);
    pf.g ? pf.g(d, b, c) : pf.call(null, d, b, c);
    mb(b, " ");
  }
  return null == a ? mb(b, "nil") : a.Jb ? a.Ub(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.C(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? mb(b, "" + E(a)) : null != a && a.constructor === Object ? (mb(b, "#js "), d = Jd.c(function(b) {
    return new Q(null, 2, 5, R, [dd.a(b), a[b]], null);
  }, Ic(a)), qf.q ? qf.q(d, pf, b, c) : qf.call(null, d, pf, b, c)) : va(a) ? jf(b, pf, "#js [", " ", "]", c, a) : A("string" == typeof a) ? A(pa.a(c)) ? mb(b, nf(a)) : mb(b, a) : zc(a) ? lf(b, oc(["#\x3c", "" + E(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + E(a);;) {
      if (sc(c) < b) {
        c = [E("0"), E(c)].join("");
      } else {
        return c;
      }
    }
  }, lf(b, oc(['#inst "', "" + E(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : A(a instanceof RegExp) ? lf(b, oc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : B(nb, a)) : B(nb, a)) ? ob(a, b, c) : lf(b, oc(["#\x3c", "" + E(a), "\x3e"], 0));
}
function pf(a, b, c) {
  var d = rf.a(c);
  return A(d) ? (c = wc.g(c, sf, of), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : of(a, b, c);
}
function Hd() {
  var a = 0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null, b = la(), c;
  if (Ec(a)) {
    c = "";
  } else {
    c = E;
    var d = b, b = new ga;
    a: {
      var e = a, a = new Fb(b);
      pf(J(e), a, d);
      for (var e = G(K(e)), f = null, g = 0, k = 0;;) {
        if (k < g) {
          var l = f.F(null, k);
          mb(a, " ");
          pf(l, a, d);
          k += 1;
        } else {
          if (e = G(e)) {
            f = e, Hc(f) ? (e = xb(f), g = yb(f), f = e, l = sc(e), e = g, g = l) : (l = J(f), mb(a, " "), pf(l, a, d), e = K(f), f = null, g = 0), k = 0;
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
function qf(a, b, c, d) {
  return jf(c, function(a, c, d) {
    var k = Ua(a);
    b.g ? b.g(k, c, d) : b.call(null, k, c, d);
    mb(c, " ");
    a = Va(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.ea = !0;
I.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
fd.prototype.ea = !0;
fd.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
Ue.prototype.ea = !0;
Ue.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
te.prototype.ea = !0;
te.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
fe.prototype.ea = !0;
fe.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
cd.prototype.ea = !0;
cd.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
Ye.prototype.ea = !0;
Ye.prototype.C = function(a, b, c) {
  return qf(this, pf, b, c);
};
We.prototype.ea = !0;
We.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
je.prototype.ea = !0;
je.prototype.C = function(a, b, c) {
  return jf(b, pf, "[", " ", "]", c, this);
};
jd.prototype.ea = !0;
jd.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
Cd.prototype.ea = !0;
Cd.prototype.C = function(a, b, c) {
  mb(b, "#\x3cAtom: ");
  pf(this.state, b, c);
  return mb(b, "\x3e");
};
cf.prototype.ea = !0;
cf.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
Q.prototype.ea = !0;
Q.prototype.C = function(a, b, c) {
  return jf(b, pf, "[", " ", "]", c, this);
};
ad.prototype.ea = !0;
ad.prototype.C = function(a, b) {
  return mb(b, "()");
};
z.prototype.ea = !0;
z.prototype.C = function(a, b, c) {
  return qf(this, pf, b, c);
};
ef.prototype.ea = !0;
ef.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
bf.prototype.ea = !0;
bf.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
$c.prototype.ea = !0;
$c.prototype.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
function tf(a, b) {
  return Pc(function(b, d) {
    return a.a ? a.a(d) : a.call(null, d);
  }, null, b);
}
function uf(a) {
  a *= Math.random.o ? Math.random.o() : Math.random.call(null);
  return Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a);
}
var vf = null;
function wf() {
  if (null == vf) {
    var a = new z(null, 3, [xf, U, yf, U, zf, U], null);
    vf = P ? P(a) : Dd.call(null, a);
  }
  return vf;
}
function Af(a, b, c) {
  var d = Wb.c(b, c);
  if (!d && !(d = Nc(zf.a(a).call(null, b), c)) && (d = Gc(c)) && (d = Gc(b))) {
    if (d = sc(c) === sc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== sc(c)) {
          e = Af(a, function() {
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
function Bf(a) {
  var b;
  b = wf();
  b = L.a ? L.a(b) : L.call(null, b);
  return xd(N(xf.a(b), a));
}
function Cf(a, b, c, d) {
  Id.c(a, function() {
    return L.a ? L.a(b) : L.call(null, b);
  });
  Id.c(c, function() {
    return L.a ? L.a(d) : L.call(null, d);
  });
}
var Df = function Df(b, c, d) {
  var e = (L.a ? L.a(d) : L.call(null, d)).call(null, b), e = A(A(e) ? e.a ? e.a(c) : e.call(null, c) : e) ? !0 : null;
  if (A(e)) {
    return e;
  }
  e = function() {
    for (var e = Bf(c);;) {
      if (0 < sc(e)) {
        Df(b, J(e), d), e = Ub(e);
      } else {
        return null;
      }
    }
  }();
  if (A(e)) {
    return e;
  }
  e = function() {
    for (var e = Bf(b);;) {
      if (0 < sc(e)) {
        Df(J(e), c, d), e = Ub(e);
      } else {
        return null;
      }
    }
  }();
  return A(e) ? e : !1;
};
function Ef(a, b, c) {
  c = Df(a, b, c);
  if (A(c)) {
    a = c;
  } else {
    c = Af;
    var d;
    d = wf();
    d = L.a ? L.a(d) : L.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Ff = function Ff(b, c, d, e, f, g, k) {
  var l = Pc(function(e, g) {
    var k = M(g, 0);
    M(g, 1);
    if (Af(L.a ? L.a(d) : L.call(null, d), c, k)) {
      var l;
      l = (l = null == e) ? l : Ef(k, J(e), f);
      l = A(l) ? g : e;
      if (!A(Ef(J(l), k, f))) {
        throw Error([E("Multiple methods in multimethod '"), E(b), E("' match dispatch value: "), E(c), E(" -\x3e "), E(k), E(" and "), E(J(l)), E(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, L.a ? L.a(e) : L.call(null, e));
  if (A(l)) {
    if (Wb.c(L.a ? L.a(k) : L.call(null, k), L.a ? L.a(d) : L.call(null, d))) {
      return Id.q(g, wc, c, J(K(l))), J(K(l));
    }
    Cf(g, e, k, d);
    return Ff(b, c, d, e, f, g, k);
  }
  return null;
};
function V(a, b) {
  throw Error([E("No method in multimethod '"), E(a), E("' for dispatch value: "), E(b)].join(""));
}
function Gf(a, b, c, d, e, f, g, k) {
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
h = Gf.prototype;
h.call = function() {
  function a(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H, T) {
    a = this;
    var ma = vd(a.f, b, c, d, e, oc([f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H, T], 0)), Bg = Z(this, ma);
    A(Bg) || V(a.name, ma);
    return vd(Bg, b, c, d, e, oc([f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H, T], 0));
  }
  function b(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H) {
    a = this;
    var T = a.f.Z ? a.f.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H), ma = Z(this, T);
    A(ma) || V(a.name, T);
    return ma.Z ? ma.Z(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H) : ma.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D, H);
  }
  function c(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D) {
    a = this;
    var H = a.f.Y ? a.f.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D), T = Z(this, H);
    A(T) || V(a.name, H);
    return T.Y ? T.Y(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D) : T.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w, D);
  }
  function d(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w) {
    a = this;
    var D = a.f.X ? a.f.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w), H = Z(this, D);
    A(H) || V(a.name, D);
    return H.X ? H.X(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w) : H.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x, w);
  }
  function e(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x) {
    a = this;
    var w = a.f.W ? a.f.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x), D = Z(this, w);
    A(D) || V(a.name, w);
    return D.W ? D.W(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x) : D.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y, x);
  }
  function f(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y) {
    a = this;
    var x = a.f.V ? a.f.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y), w = Z(this, x);
    A(w) || V(a.name, x);
    return w.V ? w.V(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y) : w.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u, y);
  }
  function g(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) {
    a = this;
    var y = a.f.U ? a.f.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u), x = Z(this, y);
    A(x) || V(a.name, y);
    return x.U ? x.U(b, c, d, e, f, g, k, l, n, m, p, q, r, t, u) : x.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t, u);
  }
  function k(a, b, c, d, e, f, g, k, l, n, m, p, q, r, t) {
    a = this;
    var u = a.f.T ? a.f.T(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t), y = Z(this, u);
    A(y) || V(a.name, u);
    return y.T ? y.T(b, c, d, e, f, g, k, l, n, m, p, q, r, t) : y.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, k, l, n, m, p, q, r) {
    a = this;
    var t = a.f.S ? a.f.S(b, c, d, e, f, g, k, l, n, m, p, q, r) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r), u = Z(this, t);
    A(u) || V(a.name, t);
    return u.S ? u.S(b, c, d, e, f, g, k, l, n, m, p, q, r) : u.call(null, b, c, d, e, f, g, k, l, n, m, p, q, r);
  }
  function m(a, b, c, d, e, f, g, k, l, n, m, p, q) {
    a = this;
    var r = a.f.R ? a.f.R(b, c, d, e, f, g, k, l, n, m, p, q) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p, q), t = Z(this, r);
    A(t) || V(a.name, r);
    return t.R ? t.R(b, c, d, e, f, g, k, l, n, m, p, q) : t.call(null, b, c, d, e, f, g, k, l, n, m, p, q);
  }
  function n(a, b, c, d, e, f, g, k, l, n, m, p) {
    a = this;
    var q = a.f.Q ? a.f.Q(b, c, d, e, f, g, k, l, n, m, p) : a.f.call(null, b, c, d, e, f, g, k, l, n, m, p), r = Z(this, q);
    A(r) || V(a.name, q);
    return r.Q ? r.Q(b, c, d, e, f, g, k, l, n, m, p) : r.call(null, b, c, d, e, f, g, k, l, n, m, p);
  }
  function p(a, b, c, d, e, f, g, k, l, n, m) {
    a = this;
    var p = a.f.P ? a.f.P(b, c, d, e, f, g, k, l, n, m) : a.f.call(null, b, c, d, e, f, g, k, l, n, m), q = Z(this, p);
    A(q) || V(a.name, p);
    return q.P ? q.P(b, c, d, e, f, g, k, l, n, m) : q.call(null, b, c, d, e, f, g, k, l, n, m);
  }
  function q(a, b, c, d, e, f, g, k, l, n) {
    a = this;
    var m = a.f.ca ? a.f.ca(b, c, d, e, f, g, k, l, n) : a.f.call(null, b, c, d, e, f, g, k, l, n), p = Z(this, m);
    A(p) || V(a.name, m);
    return p.ca ? p.ca(b, c, d, e, f, g, k, l, n) : p.call(null, b, c, d, e, f, g, k, l, n);
  }
  function r(a, b, c, d, e, f, g, k, l) {
    a = this;
    var n = a.f.ba ? a.f.ba(b, c, d, e, f, g, k, l) : a.f.call(null, b, c, d, e, f, g, k, l), m = Z(this, n);
    A(m) || V(a.name, n);
    return m.ba ? m.ba(b, c, d, e, f, g, k, l) : m.call(null, b, c, d, e, f, g, k, l);
  }
  function t(a, b, c, d, e, f, g, k) {
    a = this;
    var l = a.f.aa ? a.f.aa(b, c, d, e, f, g, k) : a.f.call(null, b, c, d, e, f, g, k), n = Z(this, l);
    A(n) || V(a.name, l);
    return n.aa ? n.aa(b, c, d, e, f, g, k) : n.call(null, b, c, d, e, f, g, k);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var k = a.f.$ ? a.f.$(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g), l = Z(this, k);
    A(l) || V(a.name, k);
    return l.$ ? l.$(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    var g = a.f.v ? a.f.v(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), k = Z(this, g);
    A(k) || V(a.name, g);
    return k.v ? k.v(b, c, d, e, f) : k.call(null, b, c, d, e, f);
  }
  function y(a, b, c, d, e) {
    a = this;
    var f = a.f.q ? a.f.q(b, c, d, e) : a.f.call(null, b, c, d, e), g = Z(this, f);
    A(g) || V(a.name, f);
    return g.q ? g.q(b, c, d, e) : g.call(null, b, c, d, e);
  }
  function D(a, b, c, d) {
    a = this;
    var e = a.f.g ? a.f.g(b, c, d) : a.f.call(null, b, c, d), f = Z(this, e);
    A(f) || V(a.name, e);
    return f.g ? f.g(b, c, d) : f.call(null, b, c, d);
  }
  function H(a, b, c) {
    a = this;
    var d = a.f.c ? a.f.c(b, c) : a.f.call(null, b, c), e = Z(this, d);
    A(e) || V(a.name, d);
    return e.c ? e.c(b, c) : e.call(null, b, c);
  }
  function T(a, b) {
    a = this;
    var c = a.f.a ? a.f.a(b) : a.f.call(null, b), d = Z(this, c);
    A(d) || V(a.name, c);
    return d.a ? d.a(b) : d.call(null, b);
  }
  function ma(a) {
    a = this;
    var b = a.f.o ? a.f.o() : a.f.call(null), c = Z(this, b);
    A(c) || V(a.name, b);
    return c.o ? c.o() : c.call(null);
  }
  var w = null, w = function(w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub, Ib, uc, wd, Se) {
    switch(arguments.length) {
      case 1:
        return ma.call(this, w);
      case 2:
        return T.call(this, w, S);
      case 3:
        return H.call(this, w, S, W);
      case 4:
        return D.call(this, w, S, W, X);
      case 5:
        return y.call(this, w, S, W, X, Y);
      case 6:
        return x.call(this, w, S, W, X, Y, ba);
      case 7:
        return u.call(this, w, S, W, X, Y, ba, fa);
      case 8:
        return t.call(this, w, S, W, X, Y, ba, fa, ka);
      case 9:
        return r.call(this, w, S, W, X, Y, ba, fa, ka, oa);
      case 10:
        return q.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra);
      case 11:
        return p.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta);
      case 12:
        return n.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za);
      case 13:
        return m.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa);
      case 14:
        return l.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La);
      case 15:
        return k.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb);
      case 16:
        return g.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za);
      case 17:
        return f.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb);
      case 18:
        return e.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub);
      case 19:
        return d.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub, Ib);
      case 20:
        return c.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub, Ib, uc);
      case 21:
        return b.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub, Ib, uc, wd);
      case 22:
        return a.call(this, w, S, W, X, Y, ba, fa, ka, oa, ra, ta, za, Fa, La, Xb, Za, fb, ub, Ib, uc, wd, Se);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  w.a = ma;
  w.c = T;
  w.g = H;
  w.q = D;
  w.v = y;
  w.$ = x;
  w.aa = u;
  w.ba = t;
  w.ca = r;
  w.P = q;
  w.Q = p;
  w.R = n;
  w.S = m;
  w.T = l;
  w.U = k;
  w.V = g;
  w.W = f;
  w.X = e;
  w.Y = d;
  w.Z = c;
  w.lb = b;
  w.Ma = a;
  return w;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.o = function() {
  var a = this.f.o ? this.f.o() : this.f.call(null), b = Z(this, a);
  A(b) || V(this.name, a);
  return b.o ? b.o() : b.call(null);
};
h.a = function(a) {
  var b = this.f.a ? this.f.a(a) : this.f.call(null, a), c = Z(this, b);
  A(c) || V(this.name, b);
  return c.a ? c.a(a) : c.call(null, a);
};
h.c = function(a, b) {
  var c = this.f.c ? this.f.c(a, b) : this.f.call(null, a, b), d = Z(this, c);
  A(d) || V(this.name, c);
  return d.c ? d.c(a, b) : d.call(null, a, b);
};
h.g = function(a, b, c) {
  var d = this.f.g ? this.f.g(a, b, c) : this.f.call(null, a, b, c), e = Z(this, d);
  A(e) || V(this.name, d);
  return e.g ? e.g(a, b, c) : e.call(null, a, b, c);
};
h.q = function(a, b, c, d) {
  var e = this.f.q ? this.f.q(a, b, c, d) : this.f.call(null, a, b, c, d), f = Z(this, e);
  A(f) || V(this.name, e);
  return f.q ? f.q(a, b, c, d) : f.call(null, a, b, c, d);
};
h.v = function(a, b, c, d, e) {
  var f = this.f.v ? this.f.v(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), g = Z(this, f);
  A(g) || V(this.name, f);
  return g.v ? g.v(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
h.$ = function(a, b, c, d, e, f) {
  var g = this.f.$ ? this.f.$(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), k = Z(this, g);
  A(k) || V(this.name, g);
  return k.$ ? k.$(a, b, c, d, e, f) : k.call(null, a, b, c, d, e, f);
};
h.aa = function(a, b, c, d, e, f, g) {
  var k = this.f.aa ? this.f.aa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g), l = Z(this, k);
  A(l) || V(this.name, k);
  return l.aa ? l.aa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
h.ba = function(a, b, c, d, e, f, g, k) {
  var l = this.f.ba ? this.f.ba(a, b, c, d, e, f, g, k) : this.f.call(null, a, b, c, d, e, f, g, k), m = Z(this, l);
  A(m) || V(this.name, l);
  return m.ba ? m.ba(a, b, c, d, e, f, g, k) : m.call(null, a, b, c, d, e, f, g, k);
};
h.ca = function(a, b, c, d, e, f, g, k, l) {
  var m = this.f.ca ? this.f.ca(a, b, c, d, e, f, g, k, l) : this.f.call(null, a, b, c, d, e, f, g, k, l), n = Z(this, m);
  A(n) || V(this.name, m);
  return n.ca ? n.ca(a, b, c, d, e, f, g, k, l) : n.call(null, a, b, c, d, e, f, g, k, l);
};
h.P = function(a, b, c, d, e, f, g, k, l, m) {
  var n = this.f.P ? this.f.P(a, b, c, d, e, f, g, k, l, m) : this.f.call(null, a, b, c, d, e, f, g, k, l, m), p = Z(this, n);
  A(p) || V(this.name, n);
  return p.P ? p.P(a, b, c, d, e, f, g, k, l, m) : p.call(null, a, b, c, d, e, f, g, k, l, m);
};
h.Q = function(a, b, c, d, e, f, g, k, l, m, n) {
  var p = this.f.Q ? this.f.Q(a, b, c, d, e, f, g, k, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n), q = Z(this, p);
  A(q) || V(this.name, p);
  return q.Q ? q.Q(a, b, c, d, e, f, g, k, l, m, n) : q.call(null, a, b, c, d, e, f, g, k, l, m, n);
};
h.R = function(a, b, c, d, e, f, g, k, l, m, n, p) {
  var q = this.f.R ? this.f.R(a, b, c, d, e, f, g, k, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p), r = Z(this, q);
  A(r) || V(this.name, q);
  return r.R ? r.R(a, b, c, d, e, f, g, k, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, k, l, m, n, p);
};
h.S = function(a, b, c, d, e, f, g, k, l, m, n, p, q) {
  var r = this.f.S ? this.f.S(a, b, c, d, e, f, g, k, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q), t = Z(this, r);
  A(t) || V(this.name, r);
  return t.S ? t.S(a, b, c, d, e, f, g, k, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q);
};
h.T = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r) {
  var t = this.f.T ? this.f.T(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r), u = Z(this, t);
  A(u) || V(this.name, t);
  return u.T ? u.T(a, b, c, d, e, f, g, k, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r);
};
h.U = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) {
  var u = this.f.U ? this.f.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t), x = Z(this, u);
  A(x) || V(this.name, u);
  return x.U ? x.U(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t) : x.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t);
};
h.V = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) {
  var x = this.f.V ? this.f.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u), y = Z(this, x);
  A(y) || V(this.name, x);
  return y.V ? y.V(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u) : y.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u);
};
h.W = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) {
  var y = this.f.W ? this.f.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x), D = Z(this, y);
  A(D) || V(this.name, y);
  return D.W ? D.W(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x) : D.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x);
};
h.X = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) {
  var D = this.f.X ? this.f.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y), H = Z(this, D);
  A(H) || V(this.name, D);
  return H.X ? H.X(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y) : H.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y);
};
h.Y = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) {
  var H = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D), T = Z(this, H);
  A(T) || V(this.name, H);
  return T.Y ? T.Y(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D) : T.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D);
};
h.Z = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) {
  var T = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) : this.f.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H), ma = Z(this, T);
  A(ma) || V(this.name, T);
  return ma.Z ? ma.Z(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H) : ma.call(null, a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H);
};
h.lb = function(a, b, c, d, e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T) {
  var ma = vd(this.f, a, b, c, d, oc([e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T], 0)), w = Z(this, ma);
  A(w) || V(this.name, ma);
  return vd(w, a, b, c, d, oc([e, f, g, k, l, m, n, p, q, r, t, u, x, y, D, H, T], 0));
};
function Hf(a, b, c) {
  Id.q(a.Ua, wc, b, c);
  Cf(a.ib, a.Ua, a.Va, a.hb);
}
function Z(a, b) {
  Wb.c(function() {
    var b = a.Va;
    return L.a ? L.a(b) : L.call(null, b);
  }(), function() {
    var b = a.hb;
    return L.a ? L.a(b) : L.call(null, b);
  }()) || Cf(a.ib, a.Ua, a.Va, a.hb);
  var c = function() {
    var b = a.ib;
    return L.a ? L.a(b) : L.call(null, b);
  }().call(null, b);
  if (A(c)) {
    return c;
  }
  c = Ff(a.name, b, a.hb, a.Ua, a.Lb, a.ib, a.Va);
  return A(c) ? c : function() {
    var b = a.Ua;
    return L.a ? L.a(b) : L.call(null, b);
  }().call(null, a.Kb);
}
h.Oa = function() {
  return Ab(this.name);
};
h.Pa = function() {
  return Bb(this.name);
};
h.B = function() {
  return this[aa] || (this[aa] = ++ca);
};
var hf = new O(null, "p2", "p2", 905500641), If = new O(null, "r", "r", -471384190), qa = new O(null, "meta", "meta", 1499536964), sa = new O(null, "dup", "dup", 556298533), Jf = new O(null, "dir", "dir", 1734754661), Fd = new O(null, "validator", "validator", -1966190681), Kf = new O(null, "default", "default", -1987822328), Lf = new O(null, "th1", "th1", 583362347), Mf = new O(null, "type", "type", 1174270348), Nf = new O(null, "th2", "th2", 1996173036), sf = new O(null, "fallback-impl", "fallback-impl", 
-1501286995), na = new O(null, "flush-on-newline", "flush-on-newline", -151457939), Of = new O(null, "segments", "segments", 1937535949), gf = new O(null, "p1", "p1", -936759954), Pf = new O(null, "targets", "targets", 2014963406), Qf = new O(null, "walls", "walls", -268788818), yf = new O(null, "descendants", "descendants", 1824886031), Rf = new O("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), zf = new O(null, "ancestors", "ancestors", -776045424), Sf = new O(null, "level", 
"level", 1290497552), Tf = new O(null, "turn", "turn", 75759344), pa = new O(null, "readably", "readably", 1129599760), kf = new O(null, "more-marker", "more-marker", -14717935), Uf = new O(null, "head", "head", -771383919), Vf = new O(null, "c", "c", -1763192079), Wf = new O(null, "stop", "stop", -2140911342), ua = new O(null, "print-length", "print-length", 1931866356), Xf = new O(null, "tail", "tail", -1146023564), xf = new O(null, "parents", "parents", -2027538891), Yf = new O(null, "length", 
"length", 588987862), Zf = new O(null, "right", "right", -452581833), $f = new O(null, "target-length", "target-length", 208661657), ag = new O(null, "hierarchy", "hierarchy", -1053470341), rf = new O(null, "alt-impl", "alt-impl", 670969595), bg = new O("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), cg = new O(null, "left", "left", -399115937);
var dg = function dg(b, c, d) {
  if (b ? b.eb : b) {
    return b.eb(b, c, d);
  }
  var e;
  e = dg[v(null == b ? null : b)];
  if (!e && (e = dg._, !e)) {
    throw C("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
function eg(a) {
  return 33 !== a.b.length;
}
function fg(a) {
  a = a.b[32];
  return a[a[32] - 1];
}
function gg(a, b, c) {
  for (;;) {
    if (A(eg(a))) {
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
;function hg(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.b;
      }
      if (A(eg(c))) {
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
    return Vd(e, a);
  }
}
function ig(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Pd(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Pd(b, f);
      f[0] = d;
      f[32] = k;
      k[32] = 1;
      k[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var jg = function jg(b, c, d, e, f) {
  if (A(eg(e))) {
    for (var g = Aa(e.b), g = e = Pd(e.l, g);;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (A(l)) {
          l = Aa(l.b);
          l = Pd(d, l);
          g[k] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[k] = ig(f.b, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Aa(e.b);
    c = e.b[32];
    k = c[32] - 1;
    e = Pd(e.l, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[k], m = 0 < k ? c[k] - c[k - 1] : c[0], l = m !== 1 << b ? jg(b - 5, m + 1, d, l, f) : null
    }
    A(l) ? (g[k] = l, c[k] += 32) : (g[k + 1] = ig(f.b, d, b - 5, f), c[k + 1] = c[k] + 32, c[32] += 1);
  }
  return e;
}, kg = function kg(b, c, d, e) {
  if (A(eg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = kg(b - 5, c, d, e.b[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Aa(e.b);
      e[f] = b;
      return Pd(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Aa(e.b);
    e[f] = null;
    return Pd(d, e);
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
  c = Aa(g);
  if (5 < b) {
    var k = e.b[f];
    b = kg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, k);
    if (null == b && 0 === f) {
      return null;
    }
    A(eg(k)) ? (e = Aa(e.b), c[f] -= 32) : (g = fg(k) - (A(b) ? fg(b) : 0), e = Aa(e.b), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return Pd(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Aa(e.b);
  b = Aa(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return Pd(d, e);
}, lg = function lg(b, c, d, e) {
  if (A(eg(c))) {
    for (var f = c = new Od(c.l, Aa(c.b));;) {
      if (0 === b) {
        f.b[d & 31] = e;
        break;
      } else {
        var f = f.b, g = d >> b & 31, k;
        k = f[g];
        k = new Od(k.l, Aa(k.b));
        f = f[g] = k;
        b -= 5;
      }
    }
    return c;
  }
  f = Aa(c.b);
  g = c.b[32];
  a: {
    for (k = d >> b & 31;;) {
      if (d < (g[k] | 0)) {
        break a;
      }
      k += 1;
    }
  }
  f[k] = lg(b - 5, f[k], 0 === k ? d : d - g[k - 1], e);
  return Pd(c.l, f);
};
function mg(a, b) {
  if (b.l === a) {
    return b;
  }
  var c = Aa(b.b);
  33 === c.length && (c[32] = Aa(c[32]));
  return new Od(a, c);
}
var ng = function ng(b, c, d, e, f) {
  e = mg(d, e);
  if (A(eg(e))) {
    for (var g = e;;) {
      var g = g.b, k = c - 1 >> b & 31;
      if (5 === b) {
        g[k] = f;
      } else {
        var l = g[k];
        if (null == l) {
          g[k] = ig(f.b, d, b - 5, f);
        } else {
          l = mg(d, l);
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
      var l = mg(d, c[k]), m = 0 < k ? g[k] - g[k - 1] : g[0], l = m !== 1 << b ? ng(b - 5, m + 1, d, l, f) : null
    }
    A(l) ? (c[k] = l, g[k] += 32) : (c[k + 1] = ig(f.b, d, b - 5, f), g[k + 1] = g[k] + 32, g[32] += 1);
  }
  return e;
}, og = function og(b, c, d, e, f) {
  d = mg(c, d);
  if (A(eg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.b[e & 31] = f;
        break;
      } else {
        var g = g.b, k = e >> b & 31, l = mg(c, g[k]), g = g[k] = l;
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
    g[l] = og(b - 5, c, g[l], 0 === l ? e : e - k[l - 1], f);
  }
  return d;
};
var pg = function pg(b) {
  if (b ? b.fb : b) {
    return b.fb(b);
  }
  var c;
  c = pg[v(null == b ? null : b)];
  if (!c && (c = pg._, !c)) {
    throw C("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function qg(a, b, c, d, e, f) {
  this.D = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.s = 1536;
}
h = qg.prototype;
h.toString = function() {
  return Gb(this);
};
h.C = function(a, b, c) {
  return jf(b, pf, "(", " ", ")", c, this);
};
h.H = function() {
  return this.h;
};
h.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = rg ? rg(a, b, c, d) : sg.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return zb(this);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zc(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.L = function() {
  return Cc(Vb, this.h);
};
h.M = function(a, b) {
  return ec(ge(this.D, this.j + this.w, sc(this.D)), b);
};
h.N = function(a, b, c) {
  return fc(ge(this.D, this.j + this.w, sc(this.D)), b, c);
};
h.fa = function() {
  return this.ga[this.w];
};
h.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.D;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = rg ? rg(a, b, c, d) : sg.call(null, a, b, c, d);
    return null == a ? Vb : a;
  }
  return yb(this);
};
h.J = function() {
  return this;
};
h.Xa = function() {
  var a = this.ga;
  return new id(a, this.w, a.length);
};
h.Ya = function() {
  var a = this.ga.length, b;
  this.j + a < Ea(this.D) ? (b = this.D, a = this.j + a, b = tg ? tg(b, a, 0) : sg.call(null, b, a, 0)) : b = null;
  return null == b ? Vb : b;
};
h.K = function(a, b) {
  var c = this.D, d = this.ga, e = this.j, f = this.w;
  return ug ? ug(c, d, e, f, b) : sg.call(null, c, d, e, f, b);
};
h.I = function(a, b) {
  return mc(b, this);
};
h.Wa = function() {
  var a = this.ga.length, b;
  this.j + a < Ea(this.D) ? (b = this.D, a = this.j + a, b = tg ? tg(b, a, 0) : sg.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function sg() {
  switch(arguments.length) {
    case 3:
      return tg(arguments[0], arguments[1], arguments[2]);
    case 4:
      return rg(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return ug(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function tg(a, b, c) {
  return new qg(a, hg(a.d, a.shift, a.root, a.n, b), b, c, null, null);
}
function rg(a, b, c, d) {
  return new qg(a, b, c, d, null, null);
}
function ug(a, b, c, d, e) {
  return new qg(a, b, c, d, e, null);
}
var vg = function vg(b, c, d) {
  if (0 === c) {
    var e = b.b;
    b = Array(d);
    Jc(e, 0, b, 0, d);
  } else {
    var f = eg(b), g = wa(f) ? b.b[32] : null, k = d - 1 >> c & 31, l = A(f) ? k : function() {
      for (var b = k;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), m = A(f) ? function() {
      var b = Wc(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.b, n = vg(e[l], c - 5, m), p = 5 === c ? 32 === n.b.length : eg(n);
    b = Array(A(A(f) ? p : f) ? 32 : 33);
    var q = A(p) ? function() {
      var b = Wc(m, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? n.b.length : fg(n);
    Jc(e, 0, b, 0, l);
    b[l] = n;
    if (wa(A(f) ? p : f)) {
      e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      n = 1 << c;
      if (A(f)) {
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
  return Pd(null, b);
}, wg = function wg(b, c, d, e) {
  if (0 === c) {
    var f = b.b, g = f.length - d, k = Array(g);
    Jc(f, d, k, 0, g);
    return Pd(null, k);
  }
  var l = eg(b), f = b.b, m = wa(l) ? b.b[32] : null, n = d >> c & 31, p = A(l) ? n : function() {
    for (var b = n;;) {
      if (d < m[b]) {
        return b;
      }
      b += 1;
    }
  }(), k = A(l) ? function() {
    for (var b = p;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : m[32], q = wg(f[p], c - 5, 0 < p ? d - (A(l) ? p * (1 << c) : m[p - 1]) : d, function() {
    var b = 1 << c, d = 0 < p ? e - (A(l) ? p * (1 << c) : m[p - 1]) : e;
    return b < d ? b : d;
  }()), g = k - p, g = null == q ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (A(l)) {
    for (var k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 1 << c, u = 0, x = A(function() {
      var b = null == q;
      return b ? b : (b = 5 === c) ? b : eg(q);
    }()) ? (1 << c) - (d >> c - 5 & 31) : fg(q);;) {
      if (u < g) {
        r[u] = x, x += t, u += 1;
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
  Jc(f, null == q ? p + 1 : p, k, 0, g);
  null != q && (k[0] = q);
  k[32] = r;
  return Pd(b.l, k);
};
function xg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.s = 2052;
}
h = xg.prototype;
h.toString = function() {
  return Gb(this);
};
h.da = function(a, b) {
  return F.g(this, b, null);
};
h.G = function(a, b, c) {
  return F.g(this, b, c);
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
      if (A(eg(d))) {
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
    return Vd(b, this.d);
  }
};
h.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? F.c(this, b) : c;
};
h.C = function(a, b, c) {
  return jf(b, pf, "[", " ", "]", c, this);
};
h.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.n.length;
    return b >= d ? (a = Array(this.n.length), b -= d, Jc(this.n, 0, a, 0, this.n.length), a[b] = c, new xg(this.d, this.shift, this.root, a, this.h, null)) : new xg(this.d, this.shift, lg(this.shift, this.root, b, c), this.n, this.h, null);
  }
  return b === this.d ? Ha(this, c) : Vd(b, this.d);
};
h.fb = function() {
  return this;
};
h.H = function() {
  return this.h;
};
h.O = function() {
  return this.d;
};
h.Za = function() {
  return F.c(this, 0);
};
h.$a = function() {
  return F.c(this, 1);
};
h.Fa = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return db(rc, this.h);
  }
  if (1 < this.n.length) {
    var a = Array(this.n.length - 1);
    Jc(this.n, 0, a, 0, a.length);
    return new xg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = hg(this.d, this.shift, this.root, this.n, this.d - 2), b = kg(this.shift, this.d - this.n.length, this.root.l, this.root);
  return null == b ? new xg(this.d - 1, this.shift, R, a, this.h, null) : 5 < this.shift && null == b.b[1] ? new xg(this.d - 1, this.shift - 5, b.b[0], a, this.h, null) : new xg(this.d - 1, this.shift, b, a, this.h, null);
};
h.B = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zc(this);
};
h.p = function(a, b) {
  return lc(this, b);
};
h.La = function() {
  var a = this.d, b = this.shift, c = new Od({}, Aa(this.root.b)), d = this.n, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Jc(d, 0, e, 0, d.length);
  d = this.n.length;
  return yg.v ? yg.v(a, b, c, e, d) : yg.call(null, a, b, c, e, d);
};
h.L = function() {
  return Cc(rc, this.h);
};
h.eb = function(a, b, c) {
  a = c - b;
  if (0 > b || c > this.d) {
    throw Error("vector index out of bounds");
  }
  if (b === c) {
    return null == this ? null : Ga(this);
  }
  if (b > c) {
    throw Error("start index greater than end index");
  }
  var d = this.d - this.n.length;
  if (b >= d) {
    return c = Array(a), Jc(this.n, b - d, c, 0, a), new xg(a, 5, R, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : vg(this.root, this.shift, c);
  b = 0 === b ? f : wg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Jc(this.n, 0, d, 0, c), c = d) : c = hg(a, this.shift, b, [], a - 1);
  e = e ? b : kg(this.shift, a, b.l, b);
  if (null == e) {
    return new xg(a, 5, R, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.b[1]) {
      b -= 5, e = e.b[0];
    } else {
      return new xg(a, b, e, c, this.h, null);
    }
  }
};
h.M = function(a, b) {
  return ec(this, b);
};
h.N = function(a, b, c) {
  return fc(this, b, c);
};
h.Ea = function(a, b, c) {
  return Ya(this, b, c);
};
h.J = function() {
  return 0 === this.d ? null : 0 === this.d - this.n.length ? nc(this.n, 0) : tg(this, 0, 0);
};
h.K = function(a, b) {
  return new xg(this.d, this.shift, this.root, this.n, b, this.m);
};
h.I = function(a, b) {
  if (32 > this.n.length) {
    var c = this.n.length, d = Array(c + 1);
    Jc(this.n, 0, d, 0, c);
    d[c] = b;
    return new xg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Pd(this.root.l, this.n);
  d = [null];
  d[0] = b;
  if (A(gg(this.root, this.shift, this.d))) {
    if (A(eg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Pd(this.root.l, e), g = e;
      g[0] = this.root;
      g[1] = ig(this.n, this.root.l, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Pd(this.root.l, e), k = this.root.b[32][31];
      e[0] = this.root;
      e[1] = ig(this.n, this.root.l, this.shift, c);
      e[32] = g;
      g[0] = k;
      g[1] = k + 32;
      g[32] = 2;
    }
    return new xg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new xg(this.d + 1, this.shift, jg(this.shift, this.d, this.root.l, this.root, c), d, this.h, null);
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
  return this.call.apply(this, [this].concat(Aa(b)));
};
h.a = function(a) {
  return this.F(null, a);
};
h.c = function(a, b) {
  return this.ha(null, a, b);
};
Q.prototype.fb = function() {
  return new xg(sc(this), this.shift, this.root, this.n, Dc(this), null);
};
je.prototype.fb = function() {
  var a = this.start, b = this.end;
  return dg(pg(this.qa), a, b);
};
function zg(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.za = e;
  this.s = 88;
  this.i = 2;
}
h = zg.prototype;
h.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.za) {
      this.n[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Pd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      this.za = 1;
      if (A(gg(this.root, this.shift, this.d))) {
        if (A(eg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = ig(this.n, this.root.l, this.shift, c);
          this.root = Pd(this.root.l, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Pd(this.root.l, d), g = this.root.b[32][31];
          d[0] = this.root;
          d[1] = ig(this.n, this.root.l, this.shift, c);
          d[32] = e;
          e[0] = g;
          e[1] = g + 32;
          e[32] = 2;
          this.root = f;
        }
        this.shift += 5;
      } else {
        this.root = f = ng(this.shift, this.d, this.root.l, this.root, c);
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
    Jc(this.n, 0, a, 0, this.za);
    return new xg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
h.Ga = function(a, b, c) {
  return vb(this, b, c);
};
h.nb = function(a, b, c) {
  if (this.root.l) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.n[b - a] = c : this.root = og(this.shift, this.root.l, this.root, b, c), this) : b === this.d ? rb(this, c) : Vd(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
h.O = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function yg(a, b, c, d, e) {
  return new zg(a, b, c, d, e);
}
;Q.prototype.eb = function(a, b, c) {
  return dg(pg(this), b, c);
};
je.prototype.eb = function(a, b, c) {
  return dg(pg(this), b, c);
};
function Ag(a, b) {
  return dg(a, b, sc(a));
}
;function Cg(a, b) {
  var c = M(a, 0), d = M(a, 1), e = M(b, 0), f = M(b, 1);
  return[c - e, d - f];
}
function Dg(a, b) {
  var c = M(a, 0), d = M(a, 1), e = M(b, 0), f = M(b, 1);
  return[c + e, d + f];
}
function Eg(a, b) {
  var c = M(b, 0), d = M(b, 1);
  return[a * c, a * d];
}
function Fg(a, b) {
  var c = M(a, 0), d = M(a, 1), e = M(b, 0), f = M(b, 1);
  return c * e + d * f;
}
function Gg(a) {
  var b = M(a, 0);
  a = M(a, 1);
  return Math.atan2(a, b);
}
;var Hg = function Hg() {
  return Hg.k(arguments[0], 1 < arguments.length ? new I(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Hg.k = function(a, b) {
  var c = M(b, 0), d = M(c, 0), c = M(c, 1);
  a: {
    for (var e = 1, f = G(b);;) {
      if (f && 0 < e) {
        --e, f = K(f);
      } else {
        break a;
      }
    }
  }
  a.beginPath();
  a.moveTo(d, c);
  for (var d = G(b), e = null, g = f = 0;;) {
    if (g < f) {
      var k = e.F(null, g), c = M(k, 0), k = M(k, 1);
      a.lineTo(c, k);
      g += 1;
    } else {
      if (d = G(d)) {
        Hc(d) ? (e = xb(d), d = yb(d), c = e, f = sc(e), e = c) : (e = J(d), c = M(e, 0), k = M(e, 1), a.lineTo(c, k), d = K(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
Hg.t = 1;
Hg.r = function(a) {
  var b = J(a);
  a = K(a);
  return Hg.k(b, a);
};
var Ig = function Ig() {
  return Ig.k(arguments[0], 1 < arguments.length ? new I(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Ig.k = function(a, b) {
  td(Hg, a, b);
  return a.stroke();
};
Ig.t = 1;
Ig.r = function(a) {
  var b = J(a);
  a = K(a);
  return Ig.k(b, a);
};
function Jg(a, b, c, d, e) {
  var f = M(b, 0);
  b = M(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function Kg(a, b) {
  a.save();
  try {
    b.o ? b.o() : b.call(null);
  } finally {
    a.restore();
  }
}
;var Lg = new Q(null, 3, 5, R, [new Q(null, 4, 5, R, [new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-415, 44], null), hf, new Q(null, 2, 5, R, [-415, -313], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-415, -313], null), hf, new Q(null, 2, 5, R, [-55, -313], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-51, 246], null), hf, new Q(null, 2, 5, R, [377, 246], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [377, 246], null), hf, new Q(null, 
2, 5, R, [377, -200], null)], null)], null), new Q(null, 8, 5, R, [new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-344, 341], null), hf, [-469, 341]], null), new z(null, 3, [Mf, bg, gf, [-469, 341], hf, [-469, -292]], null), new z(null, 3, [Mf, bg, gf, [-469, -292], hf, [-327, -292]], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-189, 340], null), hf, [261, 340]], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-203, -294], null), hf, [261, -294]], null), new z(null, 3, [Mf, 
bg, gf, new Q(null, 2, 5, R, [409, -293], null), hf, [541, -293]], null), new z(null, 3, [Mf, bg, gf, [541, -293], hf, [541, 327]], null), new z(null, 3, [Mf, bg, gf, [541, 327], hf, [420, 327]], null)], null), new Q(null, 10, 5, R, [new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-487, 145], null), hf, new Q(null, 2, 5, R, [-487, -206], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-487, -206], null), hf, [-241, -452]], null), new z(null, 3, [Mf, bg, gf, [-241, -452], hf, new Q(null, 
2, 5, R, [-5, -452], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-5, -452], null), hf, new Q(null, 2, 5, R, [-5, -280], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-190, 399], null), hf, new Q(null, 2, 5, R, [153, 399], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [153, 399], null), hf, new Q(null, 2, 5, R, [461, 399], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [461, 399], null), hf, new Q(null, 2, 5, R, [461, 120], 
null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [461, 120], null), hf, new Q(null, 2, 5, R, [261, 120], null)], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [318, -426], null), hf, [530, -214]], null), new z(null, 3, [Mf, bg, gf, new Q(null, 2, 5, R, [-508, 422], null), hf, [-235, 149]], null)], null)], null);
var Mg = 2 * Math.PI;
if ("undefined" === typeof Ng) {
  var Ng = function() {
    var a = P ? P(U) : Dd.call(null, U), b = P ? P(U) : Dd.call(null, U), c = P ? P(U) : Dd.call(null, U), d = P ? P(U) : Dd.call(null, U), e = vc(U, ag, wf());
    return new Gf(Tb("draw-segment"), function() {
      return function(a, b) {
        return Mf.a(b);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Ng, bg, function(a, b) {
  var c = Lc(b) ? sd(Ed, b) : b, d = N(c, gf), c = N(c, hf);
  return Ig.k(a, oc([d, c], 0));
});
Hf(Ng, Rf, function(a, b) {
  var c = Lc(b) ? sd(Ed, b) : b, d = N(c, Vf), e = N(c, Lf), f = N(c, Nf), g = N(c, Jf), c = N(c, If);
  return 0 > g ? Jg(a, d, c, f, e) : Jg(a, d, c, e, f);
});
if ("undefined" === typeof Og) {
  var Og = function() {
    var a = P ? P(U) : Dd.call(null, U), b = P ? P(U) : Dd.call(null, U), c = P ? P(U) : Dd.call(null, U), d = P ? P(U) : Dd.call(null, U), e = vc(U, ag, wf());
    return new Gf(Tb("update-seg"), function() {
      return function(a) {
        return Mf.a(a);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Og, bg, function(a, b, c) {
  a = Lc(a) ? sd(Ed, a) : a;
  var d = N(a, Jf);
  b = Eg(b, d);
  return Md(a, Wb.c(c, Uf) ? hf : gf, Dg, b);
});
Hf(Og, Rf, function(a, b, c) {
  a = Lc(a) ? sd(Ed, a) : a;
  var d = N(a, Jf), e = N(a, If);
  b = b / e * d;
  return Md(a, Wb.c(c, Uf) ? Nf : Lf, Uc, b);
});
function Pg(a, b) {
  return Md(Og.g ? Og.g(a, b, Uf) : Og.call(null, a, b, Uf), Yf, Uc, b);
}
function Qg(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a;
  N(c, Mf);
  return Md(Og.g ? Og.g(c, b, Xf) : Og.call(null, c, b, Xf), Yf, Vc, b);
}
function Rg(a, b) {
  for (var c = 0, d = b;;) {
    if (Wb.c(c, sc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < Yf.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return Ag(Md(a, c, Qg, d), c);
    }
    var e = c + 1, d = d - Yf.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof Sg) {
  var Sg = function() {
    var a = P ? P(U) : Dd.call(null, U), b = P ? P(U) : Dd.call(null, U), c = P ? P(U) : Dd.call(null, U), d = P ? P(U) : Dd.call(null, U), e = vc(U, ag, wf());
    return new Gf(Tb("seg-normal"), function() {
      return function(a) {
        return Mf.a(a);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Sg, bg, function(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a, d = N(c, Jf), c = M(d, 0), d = M(d, 1);
  return Wb.c(b, cg) ? [-d, c] : [d, -c];
});
Hf(Sg, Rf, function(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a;
  N(c, Lf);
  var d = N(c, Nf), c = N(c, Jf) * (Wb.c(b, cg) ? -1 : 1);
  return Eg(c, new Q(null, 2, 5, R, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Tg) {
  var Tg, Ug = P ? P(U) : Dd.call(null, U), Vg = P ? P(U) : Dd.call(null, U), Wg = P ? P(U) : Dd.call(null, U), Xg = P ? P(U) : Dd.call(null, U), Yg = vc(U, ag, wf());
  Tg = new Gf(Tb("seg-endpoint"), Mf, Kf, Yg, Ug, Vg, Wg, Xg);
}
Hf(Tg, bg, function(a) {
  return hf.a(a);
});
Hf(Tg, Rf, function(a) {
  var b = Lc(a) ? sd(Ed, a) : a;
  N(b, Lf);
  a = N(b, Nf);
  var c = N(b, Vf), b = N(b, If);
  return Dg(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Zg(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a, d = N(c, Of);
  return wc.g(c, Of, Wb.c(Yf.a(pc(d)), 0) ? qc.c(null == d ? null : Wa(d), b) : qc.c(d, b));
}
function $g(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a, d = N(c, Tf), e = N(c, Of);
  return Wb.c(d, b) ? c : Zg(wc.g(c, Tf, b), function() {
    switch(b instanceof O ? b.va : null) {
      case "left":
        var a = pc(e), c = function() {
          var c = a;
          return Sg.c ? Sg.c(c, b) : Sg.call(null, c, b);
        }(), d = M(c, 0), l = M(c, 1), c = Dg(function() {
          var b = a;
          return Tg.a ? Tg.a(b) : Tg.call(null, b);
        }(), Eg(20, c)), m = Math.atan2(-l, -d), d = m, l = Wb.c(b, cg) ? 1 : -1;
        return new z(null, 7, [Mf, Rf, Vf, c, Lf, m, Nf, d, Yf, 0, Jf, l, If, 20], null);
      case "right":
        return a = pc(e), c = function() {
          var c = a;
          return Sg.c ? Sg.c(c, b) : Sg.call(null, c, b);
        }(), d = M(c, 0), l = M(c, 1), c = Dg(function() {
          var b = a;
          return Tg.a ? Tg.a(b) : Tg.call(null, b);
        }(), Eg(20, c)), d = m = Math.atan2(-l, -d), l = Wb.c(b, cg) ? 1 : -1, new z(null, 7, [Mf, Rf, Vf, c, Lf, m, Nf, d, Yf, 0, Jf, l, If, 20], null);
      default:
        return d = pc(e), a = l = Lc(d) ? sd(Ed, d) : d, d = N(l, Nf), l = N(l, Jf), c = function() {
          var b = a;
          return Tg.a ? Tg.a(b) : Tg.call(null, b);
        }(), new z(null, 5, [Mf, bg, gf, c, hf, c, Yf, 0, Jf, Eg(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function ah(a) {
  var b = L.a ? L.a(bh) : L.call(null, bh);
  Kg(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280, f = a.canvas;
    a.clearRect(0, 0, f.width, f.height);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    return tf(Bd(Ng, a), pd.k(Qf.a(b), Jd.c(Ae, Pf.a(b)), oc([Of.a(b)], 0)));
  });
}
function ch(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a, d = N(c, Lf), e = N(c, Nf), c = N(c, Jf);
  if (c * (e - d) > Mg) {
    return!0;
  }
  var f = Wc(b, Mg), d = Wc(d, Mg), e = Wc(e, Mg);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Mg : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Mg;
}
if ("undefined" === typeof dh) {
  var dh = function() {
    var a = P ? P(U) : Dd.call(null, U), b = P ? P(U) : Dd.call(null, U), c = P ? P(U) : Dd.call(null, U), d = P ? P(U) : Dd.call(null, U), e = vc(U, ag, wf());
    return new Gf(Tb("check-intersection"), function() {
      return function(a, b) {
        return new Q(null, 2, 5, R, [Mf.a(a), Mf.a(b)], null);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(dh, new Q(null, 2, 5, R, [bg, bg], null), function(a, b) {
  var c, d = new Q(null, 2, 5, R, [gf.a(a), hf.a(a)], null);
  c = new Q(null, 2, 5, R, [gf.a(b), hf.a(b)], null);
  var e = M(d, 0), d = M(d, 1), f = M(c, 0), g = M(c, 1), d = Cg(d, e);
  c = M(d, 0);
  var d = M(d, 1), k = Cg(g, f), g = M(k, 0), k = M(k, 1), f = Cg(f, e), e = M(f, 0), f = M(f, 1), l = -1 * c * k - -1 * d * g;
  c = Wb.c(l, 0) ? null : new Q(null, 2, 5, R, [(k * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = M(c, 0);
  d = M(c, 1);
  return A(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Hf(dh, new Q(null, 2, 5, R, [bg, Rf], null), function(a, b) {
  var c = Lc(a) ? sd(Ed, a) : a, d = N(c, gf), c = N(c, hf), e = Lc(b) ? sd(Ed, b) : b, f = N(e, If);
  var g = N(e, Vf), c = Cg(c, d), e = Fg(c, c), d = Cg(d, g), g = Fg(d, d), k = Fg(c, d), f = Math.pow(k, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Fg(c, d) - g) / e, e = (-Fg(c, d) + g) / e, g = Gg(Dg(Eg(f, c), d)), c = Gg(Dg(Eg(e, c), d)), f = new Q(null, 4, 5, R, [f, e, g, c], null)) : f = null;
  g = M(f, 0);
  e = M(f, 1);
  d = M(f, 2);
  c = M(f, 3);
  return A(f) ? (d = (f = 0 < g && 1 > g) ? ch(b, d) : f, A(d) ? d : (e = 0 < e && 1 > e) ? ch(b, c) : e) : f;
});
Hf(dh, new Q(null, 2, 5, R, [Rf, bg], null), function(a, b) {
  return dh.c ? dh.c(b, a) : dh.call(null, b, a);
});
Hf(dh, new Q(null, 2, 5, R, [Rf, Rf], null), function(a, b) {
  var c;
  var d = Vf.a(a), e = If.a(a);
  c = Vf.a(b);
  var f = If.a(b), g = Cg(c, d), d = M(g, 0);
  c = M(g, 1);
  g = Fg(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new Q(null, 4, 5, R, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = M(c, 0);
  d = M(c, 1);
  f = M(c, 2);
  e = M(c, 3);
  return A(c) ? (c = ch(a, g), d = A(c) ? c : ch(a, d), A(d) ? (f = ch(b, f), A(f) ? f : ch(b, e)) : d) : c;
});
function eh(a) {
  var b = Lc(a) ? sd(Ed, a) : a, c = N(b, Qf), d = N(b, Of), e = pc(d), f = null == d ? null : Wa(d);
  return zd(function(a) {
    return function(b) {
      return dh.c ? dh.c(a, b) : dh.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), pd.c(c, A(xd(f)) ? null == f ? null : Wa(f) : f));
}
function fh(a) {
  var b = Lc(a) ? sd(Ed, a) : a, c = N(b, Pf), d = N(b, Of), e = pc(d);
  return Pc(function() {
    return function(a, b) {
      var c = M(b, 0);
      M(b, 1);
      return Md(Md(a, $f, Uc, 50), Pf, yc, c);
    };
  }(e, a, b, b, c, d), b, Kd(Ad(Bd(dh, e), Ae), c));
}
var gh = P ? P(null) : Dd.call(null, null);
function hh(a, b) {
  for (var c = Lc(b) ? sd(Ed, b) : b, d = N(c, Qf), e = a.canvas, f = e.width, g = e.height, k = uf(f) - f / 2, l = uf(g) - g / 2;;) {
    if (A(zd(function() {
      return function(a) {
        return 20 > a;
      };
    }(k, l, e, f, g, b, c, c, d), Jd.c(Ad(function(a, b) {
      return function(c) {
        var d = new Q(null, 2, 5, R, [a, b], null), e = M(c, 0);
        c = M(c, 1);
        c = Cg(c, e);
        var f = Fg(Cg(e, d), c) / Fg(c, c) * -1, f = 1 < f ? 1 : f, e = Cg(Dg(e, Eg(0 > f ? 0 : f, c)), d), d = M(e, 0), e = M(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(k, l, e, f, g, b, c, c, d), ff()), d)))) {
      k = uf(f) - f / 2, l = uf(g) - g / 2;
    } else {
      return new Q(null, 2, 5, R, [k, l], null);
    }
  }
}
var ih = new Q(null, 1, 5, R, [new z(null, 5, [Yf, 100, Mf, bg, Jf, new Q(null, 2, 5, R, [1, 0], null), gf, new Q(null, 2, 5, R, [0, 0], null), hf, new Q(null, 2, 5, R, [100, 0], null)], null)], null);
function jh() {
  var a = new Q(null, 5, 5, R, [new Q(null, 2, 5, R, [-642, 482], null), new Q(null, 2, 5, R, [642, 482], null), new Q(null, 2, 5, R, [642, -482], null), new Q(null, 2, 5, R, [-642, -482], null), new Q(null, 2, 5, R, [-642, 482], null)], null);
  return Jd.g(function(a, c) {
    return new z(null, 3, [Mf, bg, gf, a, hf, c], null);
  }, a, Ub(a));
}
function kh(a, b) {
  return Pc(function(a, d) {
    return Nd(a, Pf, wc, d, new z(null, 6, [Mf, Rf, Vf, hh(b, a), Lf, 0, Nf, Mg, Jf, 1, If, 10], null));
  }, wc.k(a, Of, ih, oc([Yf, 100, $f, 100, Tf, null, Pf, U, Qf, pd.c(jh(), function() {
    var b = Sf.a(a);
    return Lg.a ? Lg.a(b) : Lg.call(null, b);
  }()), Wf, !1], 0)), new ef(null, 0, 10, 1, null));
}
var bh, lh = new z(null, 1, [Sf, 0], null);
bh = P ? P(lh) : Dd.call(null, lh);
var mh = document.createElement("button");
mh.textContent = "Pause";
var nh, oh, ph = Xc(3 * (window.innerWidth - 20), 4);
oh = 1280 < ph ? 1280 : ph;
var qh = Xc(4 * (window.innerHeight - 10), 3);
nh = oh < qh ? oh : qh;
var rh = Xc(3 * nh, 4), sh = document.createElement("canvas");
A(nh) && sh.setAttribute("width", nh);
A(rh) && sh.setAttribute("height", rh);
sh.setAttribute("style", "border: 1px solid #000; display: block;");
var th = document.createElement("div"), uh = sh.getContext("2d");
function vh(a) {
  a: {
    var b = Jd.c(E, a);
    a = new ga;
    for (b = G(b);;) {
      if (b) {
        a.append("" + E(J(b))), b = K(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  th.textContent = a;
}
var wh = function wh(b) {
  mh.textContent = "Pause";
  return mh.onclick = function() {
    Id.q(bh, wc, Wf, !0);
    mh.textContent = "Go";
    return mh.onclick = function() {
      Id.q(bh, wc, Wf, !1);
      xh.a ? xh.a(b) : xh.call(null, b);
      return wh(b);
    };
  };
};
function yh(a) {
  mh.textContent = "Start";
  return mh.onclick = function() {
    vh(oc(["Press A and D to turn left and right."], 0));
    Id.g(bh, kh, a);
    xh.a ? xh.a(a) : xh.call(null, a);
    return wh(a);
  };
}
var zh = new z(null, 4, [65, cg, 37, cg, 68, Zf, 39, Zf], null);
function xh(a) {
  window.onkeydown = function(a) {
    a = a.which;
    a = zh.a ? zh.a(a) : zh.call(null, a);
    return A(a) ? Id.g(bh, $g, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = zh.a ? zh.a(a) : zh.call(null, a);
    return A(a) ? Wb.c(a, Tf.a(L.a ? L.a(bh) : L.call(null, bh))) ? Id.g(bh, $g, null) : null : null;
  };
  return function(b) {
    return function d() {
      if (wa(Wf.a(L.a ? L.a(bh) : L.call(null, bh)))) {
        var e = Id.c(bh, function() {
          return function(a) {
            var b;
            b = $f.a(a);
            a = Lc(a) ? sd(Ed, a) : a;
            var d = N(a, Of), e = N(a, Yf), m = sc(d) - 1, n = e + 3 - b, d = Md(d, m, Pg, 3);
            b = wc.k(a, Of, 0 < n ? Rg(d, n) : d, oc([Yf, Math.min(e + 3, b)], 0));
            return fh(b);
          };
        }(b));
        if (A(eh(e))) {
          return vh(oc(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0)), e = L.a ? L.a(bh) : L.call(null, bh), Gd.c ? Gd.c(gh, e) : Gd.call(null, gh, e), yh(a), b();
        }
        if (Ec(Pf.a(e))) {
          return vh(oc(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0)), Id.c(bh, function() {
            return function(a) {
              return wc.g(a, Sf, Wc(Sf.a(a) + 1, sc(Lg)));
            };
          }(e, b)), yh(a), b();
        }
        ah(a);
        return window.requestAnimationFrame(d);
      }
      return b();
    };
  }(function() {
    window.onkeydown = null;
    return window.onkeyup = null;
  }).call(null);
}
function Ah() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(mh);
    a.appendChild(th);
    return a;
  }());
  a.appendChild(sh);
  vh(oc(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return yh(uh);
}
var Bh = ["figwheel_test", "snake", "init_everything"], Ch = this;
Bh[0] in Ch || !Ch.execScript || Ch.execScript("var " + Bh[0]);
for (var Dh;Bh.length && (Dh = Bh.shift());) {
  var Eh;
  if (Eh = !Bh.length) {
    Eh = void 0 !== Ah;
  }
  Eh ? Ch[Dh] = Ah : Ch = Ch[Dh] ? Ch[Dh] : Ch[Dh] = {};
}
;document.querySelector("body").innerHTML = "";
var Fh = document.createElement("canvas");
Fh.setAttribute("width", 1280);
Fh.setAttribute("height", 960);
Fh.setAttribute("style", "border: 1px solid #000");
Fh.getContext("2d");
document.querySelector("body").appendChild(Fh);
var Gh = new Q(null, 2, 5, R, [0, 0], null);
P || Dd.call(null, Gh);

})();
