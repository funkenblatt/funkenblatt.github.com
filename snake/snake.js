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
var k;
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
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function da(a) {
  return Array.prototype.join.call(arguments, "");
}
;function ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function fa(a, b) {
  null != a && this.append.apply(this, arguments);
}
k = fa.prototype;
k.Aa = "";
k.set = function(a) {
  this.Aa = "" + a;
};
k.append = function(a, b, c) {
  this.Aa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Aa += arguments[d];
    }
  }
  return this;
};
k.clear = function() {
  this.Aa = "";
};
k.toString = function() {
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
  return new z(null, 5, [na, !0, pa, !0, ra, !1, sa, !1, ta, null], null);
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
}, Fa = function Fa(b) {
  if (b ? b.L : b) {
    return b.L(b);
  }
  var c;
  c = Fa[v(null == b ? null : b)];
  if (!c && (c = Fa._, !c)) {
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
  if (a ? a.B : a) {
    return a.B(a, b);
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
}, La = function La(b) {
  if (b ? b.la : b) {
    return b.la(b);
  }
  var c;
  c = La[v(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw C("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Ma = {}, Oa = {}, Pa = function Pa() {
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
}, Za = function Za(b) {
  if (b ? b.ub : b) {
    return b.state;
  }
  var c;
  c = Za[v(null == b ? null : b)];
  if (!c && (c = Za._, !c)) {
    throw C("IDeref.-deref", b);
  }
  return c.call(null, b);
}, $a = {}, bb = function bb(b) {
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
  if (b ? b.C : b) {
    return b.C(b);
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
  if (b ? b.D : b) {
    return b.D(b, c, d);
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
}, ub = function ub(b, c, d) {
  if (b ? b.nb : b) {
    return b.nb(b, c, d);
  }
  var e;
  e = ub[v(null == b ? null : b)];
  if (!e && (e = ub._, !e)) {
    throw C("ITransientVector.-assoc-n!", b);
  }
  return e.call(null, b, c, d);
}, vb = function vb(b) {
  if (b ? b.ob : b) {
    return b.ob();
  }
  var c;
  c = vb[v(null == b ? null : b)];
  if (!c && (c = vb._, !c)) {
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
  var b = new fa;
  a.D(null, new Fb(b), la());
  return "" + E(b);
}
var Hb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.c ? Math.imul.c(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.c ? Math.imul.c(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ib(a) {
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
        var d = b + 2, c = Kb(c, Ib(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ Ib(a.charCodeAt(a.length - 1)) : b;
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
  a && (a.i & 4194304 || a.Pb) ? a = a.C(null) : "number" === typeof a ? a = (Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Pb(a), 0 !== a && (a = Ib(a), a = Kb(0, a), a = Lb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : ib(a);
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
k = Sb.prototype;
k.toString = function() {
  return this.ya;
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.p = function(a, b) {
  return b instanceof Sb ? this.ya === b.ya : !1;
};
k.call = function() {
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
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return Pa.g(a, this, null);
};
k.c = function(a, b) {
  return Pa.g(a, this, b);
};
k.H = function() {
  return this.ka;
};
k.K = function(a, b) {
  return new Sb(this.Ka, this.name, this.ya, this.Da, b);
};
k.C = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Rb(Mb(this.name), Pb(this.Ka));
};
k.Oa = function() {
  return this.name;
};
k.Pa = function() {
  return this.Ka;
};
k.D = function(a, b) {
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
  return null != a ? a && (a.i & 64 || a.bb) ? a.la(null) : (a = G(a)) ? La(a) : Vb : Vb;
}
function K(a) {
  return null == a ? null : a && (a.i & 128 || a.ab) ? a.ia(null) : G(Ub(a));
}
var Wb = function Wb() {
  switch(arguments.length) {
    case 1:
      return Wb.b(arguments[0]);
    case 2:
      return Wb.c(arguments[0], arguments[1]);
    default:
      return Wb.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Wb.b = function() {
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
function Xb(a) {
  this.u = a;
}
Xb.prototype.next = function() {
  if (null != this.u) {
    var a = J(this.u);
    this.u = K(this.u);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function Zb(a) {
  return new Xb(G(a));
}
function $b(a, b) {
  var c = Ib(a), c = Kb(0, c);
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
$a["function"] = !0;
bb["function"] = function() {
  return null;
};
ib._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
function L(a) {
  return Za(a);
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
  this.a = a;
  this.j = b;
}
kc.prototype.gb = function() {
  return this.j < this.a.length;
};
kc.prototype.next = function() {
  var a = this.a[this.j];
  this.j += 1;
  return a;
};
function I(a, b) {
  this.a = a;
  this.j = b;
  this.i = 166199550;
  this.s = 8192;
}
k = I.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.B = function(a, b) {
  var c = b + this.j;
  return c < this.a.length ? this.a[c] : null;
};
k.ha = function(a, b, c) {
  a = b + this.j;
  return a < this.a.length ? this.a[a] : c;
};
k.Na = function() {
  return new kc(this.a, this.j);
};
k.ia = function() {
  return this.j + 1 < this.a.length ? new I(this.a, this.j + 1) : null;
};
k.O = function() {
  return this.a.length - this.j;
};
k.C = function() {
  return ac(this);
};
k.p = function(a, b) {
  return lc.c ? lc.c(this, b) : lc.call(null, this, b);
};
k.L = function() {
  return Vb;
};
k.M = function(a, b) {
  return ic(this.a, b, this.a[this.j], this.j + 1);
};
k.N = function(a, b, c) {
  return ic(this.a, b, c, this.j);
};
k.fa = function() {
  return this.a[this.j];
};
k.la = function() {
  return this.j + 1 < this.a.length ? new I(this.a, this.j + 1) : Vb;
};
k.J = function() {
  return this;
};
k.I = function(a, b) {
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
      return qc.b(arguments[0]);
    case 2:
      return qc.c(arguments[0], arguments[1]);
    default:
      return qc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
qc.o = function() {
  return rc;
};
qc.b = function(a) {
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
      return yc.b(arguments[0]);
    case 2:
      return yc.c(arguments[0], arguments[1]);
    default:
      return yc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
yc.b = function(a) {
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
k = Ac.prototype;
k.H = function() {
  return this.h;
};
k.K = function(a, b) {
  return new Ac(this.e, b);
};
k.sb = !0;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H, U) {
    a = this.e;
    return Bc.Ma ? Bc.Ma(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H, U) : Bc.call(null, a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H, U);
  }
  function b(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H) {
    a = this;
    return a.e.Z ? a.e.Z(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D, H);
  }
  function c(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D) {
    a = this;
    return a.e.Y ? a.e.Y(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w, D);
  }
  function d(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w) {
    a = this;
    return a.e.X ? a.e.X(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x, w);
  }
  function e(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x) {
    a = this;
    return a.e.W ? a.e.W(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y, x);
  }
  function f(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y) {
    a = this;
    return a.e.V ? a.e.V(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u, y);
  }
  function g(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u) {
    a = this;
    return a.e.U ? a.e.U(b, c, d, e, f, g, h, l, n, m, q, p, r, t, u) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t, u);
  }
  function h(a, b, c, d, e, f, g, h, l, n, m, q, p, r, t) {
    a = this;
    return a.e.T ? a.e.T(b, c, d, e, f, g, h, l, n, m, q, p, r, t) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r, t);
  }
  function l(a, b, c, d, e, f, g, h, l, n, m, q, p, r) {
    a = this;
    return a.e.S ? a.e.S(b, c, d, e, f, g, h, l, n, m, q, p, r) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p, r);
  }
  function m(a, b, c, d, e, f, g, h, l, n, m, q, p) {
    a = this;
    return a.e.R ? a.e.R(b, c, d, e, f, g, h, l, n, m, q, p) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q, p);
  }
  function n(a, b, c, d, e, f, g, h, l, n, m, q) {
    a = this;
    return a.e.Q ? a.e.Q(b, c, d, e, f, g, h, l, n, m, q) : a.e.call(null, b, c, d, e, f, g, h, l, n, m, q);
  }
  function p(a, b, c, d, e, f, g, h, l, n, m) {
    a = this;
    return a.e.P ? a.e.P(b, c, d, e, f, g, h, l, n, m) : a.e.call(null, b, c, d, e, f, g, h, l, n, m);
  }
  function q(a, b, c, d, e, f, g, h, l, n) {
    a = this;
    return a.e.ca ? a.e.ca(b, c, d, e, f, g, h, l, n) : a.e.call(null, b, c, d, e, f, g, h, l, n);
  }
  function r(a, b, c, d, e, f, g, h, l) {
    a = this;
    return a.e.ba ? a.e.ba(b, c, d, e, f, g, h, l) : a.e.call(null, b, c, d, e, f, g, h, l);
  }
  function t(a, b, c, d, e, f, g, h) {
    a = this;
    return a.e.aa ? a.e.aa(b, c, d, e, f, g, h) : a.e.call(null, b, c, d, e, f, g, h);
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
  function U(a, b) {
    a = this;
    return a.e.b ? a.e.b(b) : a.e.call(null, b);
  }
  function ma(a) {
    a = this;
    return a.e.o ? a.e.o() : a.e.call(null);
  }
  var w = null, w = function(Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb, Jb, uc, vd, Oe) {
    switch(arguments.length) {
      case 1:
        return ma.call(this, Da);
      case 2:
        return U.call(this, Da, T);
      case 3:
        return H.call(this, Da, T, W);
      case 4:
        return D.call(this, Da, T, W, X);
      case 5:
        return y.call(this, Da, T, W, X, Y);
      case 6:
        return x.call(this, Da, T, W, X, Y, ca);
      case 7:
        return u.call(this, Da, T, W, X, Y, ca, ga);
      case 8:
        return t.call(this, Da, T, W, X, Y, ca, ga, ka);
      case 9:
        return r.call(this, Da, T, W, X, Y, ca, ga, ka, oa);
      case 10:
        return q.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa);
      case 11:
        return p.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua);
      case 12:
        return n.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za);
      case 13:
        return m.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga);
      case 14:
        return l.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na);
      case 15:
        return h.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w);
      case 16:
        return g.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab);
      case 17:
        return f.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb);
      case 18:
        return e.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb);
      case 19:
        return d.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb, Jb);
      case 20:
        return c.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb, Jb, uc);
      case 21:
        return b.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb, Jb, uc, vd);
      case 22:
        return a.call(this, Da, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, w, ab, fb, wb, Jb, uc, vd, Oe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  w.b = ma;
  w.c = U;
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
  w.U = h;
  w.V = g;
  w.W = f;
  w.X = e;
  w.Y = d;
  w.Z = c;
  w.lb = b;
  w.Ma = a;
  return w;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.o = function() {
  return this.e.o ? this.e.o() : this.e.call(null);
};
k.b = function(a) {
  return this.e.b ? this.e.b(a) : this.e.call(null, a);
};
k.c = function(a, b) {
  return this.e.c ? this.e.c(a, b) : this.e.call(null, a, b);
};
k.g = function(a, b, c) {
  return this.e.g ? this.e.g(a, b, c) : this.e.call(null, a, b, c);
};
k.q = function(a, b, c, d) {
  return this.e.q ? this.e.q(a, b, c, d) : this.e.call(null, a, b, c, d);
};
k.v = function(a, b, c, d, e) {
  return this.e.v ? this.e.v(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
k.$ = function(a, b, c, d, e, f) {
  return this.e.$ ? this.e.$(a, b, c, d, e, f) : this.e.call(null, a, b, c, d, e, f);
};
k.aa = function(a, b, c, d, e, f, g) {
  return this.e.aa ? this.e.aa(a, b, c, d, e, f, g) : this.e.call(null, a, b, c, d, e, f, g);
};
k.ba = function(a, b, c, d, e, f, g, h) {
  return this.e.ba ? this.e.ba(a, b, c, d, e, f, g, h) : this.e.call(null, a, b, c, d, e, f, g, h);
};
k.ca = function(a, b, c, d, e, f, g, h, l) {
  return this.e.ca ? this.e.ca(a, b, c, d, e, f, g, h, l) : this.e.call(null, a, b, c, d, e, f, g, h, l);
};
k.P = function(a, b, c, d, e, f, g, h, l, m) {
  return this.e.P ? this.e.P(a, b, c, d, e, f, g, h, l, m) : this.e.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.Q = function(a, b, c, d, e, f, g, h, l, m, n) {
  return this.e.Q ? this.e.Q(a, b, c, d, e, f, g, h, l, m, n) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.R = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  return this.e.R ? this.e.R(a, b, c, d, e, f, g, h, l, m, n, p) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.S = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  return this.e.S ? this.e.S(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.T = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r) {
  return this.e.T ? this.e.T(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r);
};
k.U = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) {
  return this.e.U ? this.e.U(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t);
};
k.V = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) {
  return this.e.V ? this.e.V(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
};
k.W = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) {
  return this.e.W ? this.e.W(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x);
};
k.X = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) {
  return this.e.X ? this.e.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y);
};
k.Y = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) {
  return this.e.Y ? this.e.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D);
};
k.Z = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) {
  return this.e.Z ? this.e.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) : this.e.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H);
};
k.lb = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U) {
  var ma = this.e;
  return Bc.Ma ? Bc.Ma(ma, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U) : Bc.call(null, ma, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U);
};
function Cc(a, b) {
  return zc(a) && !(a ? a.i & 262144 || a.Tb || (a.i ? 0 : B(cb, a)) : B(cb, a)) ? new Ac(a, b) : null == a ? null : db(a, b);
}
function Dc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Ab || (a.i ? 0 : B($a, a)) : B($a, a) : b) ? bb(a) : null;
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
  a = a.b ? a.b(b) : a.call(null, b);
  c = Pc(a, c, d);
  return a.b ? a.b(c) : a.call(null, c);
}
var Uc = function Uc() {
  switch(arguments.length) {
    case 0:
      return Uc.o();
    case 1:
      return Uc.b(arguments[0]);
    case 2:
      return Uc.c(arguments[0], arguments[1]);
    default:
      return Uc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Uc.o = function() {
  return 0;
};
Uc.b = function(a) {
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
      return Vc.b(arguments[0]);
    case 2:
      return Vc.c(arguments[0], arguments[1]);
    default:
      return Vc.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Vc.b = function(a) {
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
  return 0 <= c ? Math.floor.b ? Math.floor.b(c) : Math.floor.call(null, c) : Math.ceil.b ? Math.ceil.b(c) : Math.ceil.call(null, c);
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
      return E.b(arguments[0]);
    default:
      return E.k(arguments[0], new I(Array.prototype.slice.call(arguments, 1), 0));
  }
};
E.o = function() {
  return "";
};
E.b = function(a) {
  return null == a ? "" : da(a);
};
E.k = function(a, b) {
  for (var c = new fa("" + E(a)), d = b;;) {
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
k = $c.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  return 1 === this.count ? null : this.wa;
};
k.O = function() {
  return this.count;
};
k.Fa = function() {
  return La(this);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return db(Vb, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return this.first;
};
k.la = function() {
  return 1 === this.count ? Vb : this.wa;
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new $c(b, this.first, this.wa, this.count, this.m);
};
k.I = function(a, b) {
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
k = ad.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  return null;
};
k.O = function() {
  return 0;
};
k.Fa = function() {
  throw Error("Can't pop empty list");
};
k.C = function() {
  return bc;
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return this;
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return null;
};
k.la = function() {
  return Vb;
};
k.J = function() {
  return null;
};
k.K = function(a, b) {
  return new ad(b);
};
k.I = function(a, b) {
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
    b = a.a;
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
k = cd.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  return null == this.wa ? null : G(this.wa);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return this.first;
};
k.la = function() {
  return null == this.wa ? Vb : this.wa;
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new cd(b, this.first, this.wa, this.m);
};
k.I = function(a, b) {
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
k = O.prototype;
k.toString = function() {
  return[E(":"), E(this.va)].join("");
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.p = function(a, b) {
  return b instanceof O ? this.va === b.va : !1;
};
k.call = function() {
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
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return N(a, this);
};
k.c = function(a, b) {
  return vc(a, this, b);
};
k.C = function() {
  var a = this.Da;
  return null != a ? a : this.Da = a = Rb(Mb(this.name), Pb(this.Ka)) + 2654435769 | 0;
};
k.Oa = function() {
  return this.name;
};
k.Pa = function() {
  return this.Ka;
};
k.D = function(a, b) {
  return mb(b, [E(":"), E(this.va)].join(""));
};
var dd = function dd() {
  switch(arguments.length) {
    case 1:
      return dd.b(arguments[0]);
    case 2:
      return dd.c(arguments[0], arguments[1]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
dd.b = function(a) {
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
    return new O(b, ed.b ? ed.b(a) : ed.call(null, a), a.ya, null);
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
k = fd.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
function gd(a) {
  null != a.Ia && (a.u = a.Ia.o ? a.Ia.o() : a.Ia.call(null), a.Ia = null);
  return a.u;
}
k.H = function() {
  return this.h;
};
k.ia = function() {
  kb(this);
  return null == this.u ? null : K(this.u);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  kb(this);
  return null == this.u ? null : J(this.u);
};
k.la = function() {
  kb(this);
  return null != this.u ? Ub(this.u) : Vb;
};
k.J = function() {
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
k.K = function(a, b) {
  return new fd(b, this.Ia, this.u, this.m);
};
k.I = function(a, b) {
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
  this.a = a;
  this.w = b;
  this.end = c;
  this.i = 524306;
  this.s = 0;
}
k = id.prototype;
k.O = function() {
  return this.end - this.w;
};
k.B = function(a, b) {
  return this.a[this.w + b];
};
k.ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.w ? this.a[this.w + b] : c;
};
k.ob = function() {
  if (this.w === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new id(this.a, this.w + 1, this.end);
};
k.M = function(a, b) {
  return ic(this.a, b, this.a[this.w], this.w + 1);
};
k.N = function(a, b, c) {
  return ic(this.a, b, c, this.w);
};
function jd(a, b, c, d) {
  this.ra = a;
  this.sa = b;
  this.h = c;
  this.m = d;
  this.i = 31850732;
  this.s = 1536;
}
k = jd.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  if (1 < Ea(this.ra)) {
    return new jd(vb(this.ra), this.sa, this.h, null);
  }
  var a = kb(this.sa);
  return null == a ? null : a;
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.fa = function() {
  return F.c(this.ra, 0);
};
k.la = function() {
  return 1 < Ea(this.ra) ? new jd(vb(this.ra), this.sa, this.h, null) : null == this.sa ? Vb : this.sa;
};
k.J = function() {
  return this;
};
k.Xa = function() {
  return this.ra;
};
k.Ya = function() {
  return null == this.sa ? Vb : this.sa;
};
k.K = function(a, b) {
  return new jd(this.ra, this.sa, b, this.m);
};
k.I = function(a, b) {
  return mc(b, this);
};
k.Wa = function() {
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
      return pd.b(arguments[0]);
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
pd.b = function(a) {
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
      return qd.b(arguments[0]);
    case 2:
      return qd.c(arguments[0], arguments[1]);
    default:
      return qd.k(arguments[0], arguments[1], new I(Array.prototype.slice.call(arguments, 2), 0));
  }
};
qd.o = function() {
  return qb(rc);
};
qd.b = function(a) {
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
  var e = La(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Ka(e), f = La(e);
  if (2 === b) {
    return a.c ? a.c(c, d) : a.c ? a.c(c, d) : a.call(null, c, d);
  }
  var e = Ka(f), g = La(f);
  if (3 === b) {
    return a.g ? a.g(c, d, e) : a.g ? a.g(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ka(g), h = La(g);
  if (4 === b) {
    return a.q ? a.q(c, d, e, f) : a.q ? a.q(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ka(h), l = La(h);
  if (5 === b) {
    return a.v ? a.v(c, d, e, f, g) : a.v ? a.v(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Ka(l), m = La(l);
  if (6 === b) {
    return a.$ ? a.$(c, d, e, f, g, h) : a.$ ? a.$(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var l = Ka(m), n = La(m);
  if (7 === b) {
    return a.aa ? a.aa(c, d, e, f, g, h, l) : a.aa ? a.aa(c, d, e, f, g, h, l) : a.call(null, c, d, e, f, g, h, l);
  }
  var m = Ka(n), p = La(n);
  if (8 === b) {
    return a.ba ? a.ba(c, d, e, f, g, h, l, m) : a.ba ? a.ba(c, d, e, f, g, h, l, m) : a.call(null, c, d, e, f, g, h, l, m);
  }
  var n = Ka(p), q = La(p);
  if (9 === b) {
    return a.ca ? a.ca(c, d, e, f, g, h, l, m, n) : a.ca ? a.ca(c, d, e, f, g, h, l, m, n) : a.call(null, c, d, e, f, g, h, l, m, n);
  }
  var p = Ka(q), r = La(q);
  if (10 === b) {
    return a.P ? a.P(c, d, e, f, g, h, l, m, n, p) : a.P ? a.P(c, d, e, f, g, h, l, m, n, p) : a.call(null, c, d, e, f, g, h, l, m, n, p);
  }
  var q = Ka(r), t = La(r);
  if (11 === b) {
    return a.Q ? a.Q(c, d, e, f, g, h, l, m, n, p, q) : a.Q ? a.Q(c, d, e, f, g, h, l, m, n, p, q) : a.call(null, c, d, e, f, g, h, l, m, n, p, q);
  }
  var r = Ka(t), u = La(t);
  if (12 === b) {
    return a.R ? a.R(c, d, e, f, g, h, l, m, n, p, q, r) : a.R ? a.R(c, d, e, f, g, h, l, m, n, p, q, r) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r);
  }
  var t = Ka(u), x = La(u);
  if (13 === b) {
    return a.S ? a.S(c, d, e, f, g, h, l, m, n, p, q, r, t) : a.S ? a.S(c, d, e, f, g, h, l, m, n, p, q, r, t) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t);
  }
  var u = Ka(x), y = La(x);
  if (14 === b) {
    return a.T ? a.T(c, d, e, f, g, h, l, m, n, p, q, r, t, u) : a.T ? a.T(c, d, e, f, g, h, l, m, n, p, q, r, t, u) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
  }
  var x = Ka(y), D = La(y);
  if (15 === b) {
    return a.U ? a.U(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) : a.U ? a.U(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x);
  }
  var y = Ka(D), H = La(D);
  if (16 === b) {
    return a.V ? a.V(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) : a.V ? a.V(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y);
  }
  var D = Ka(H), U = La(H);
  if (17 === b) {
    return a.W ? a.W(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) : a.W ? a.W(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D);
  }
  var H = Ka(U), ma = La(U);
  if (18 === b) {
    return a.X ? a.X(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) : a.X ? a.X(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H);
  }
  U = Ka(ma);
  ma = La(ma);
  if (19 === b) {
    return a.Y ? a.Y(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U) : a.Y ? a.Y(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U);
  }
  var w = Ka(ma);
  La(ma);
  if (20 === b) {
    return a.Z ? a.Z(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U, w) : a.Z ? a.Z(c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U, w) : a.call(null, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U, w);
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
      return wd(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new I(Array.prototype.slice.call(arguments, 5), 0));
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
function wd(a, b, c, d, e, f) {
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
    c = a.b ? a.b(c) : a.call(null, c);
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
      c = a.b ? a.b(c) : a.call(null, c);
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
      return a.b ? a.b(c) : a.call(null, c);
    }
    function d(c, d) {
      var e = b.c ? b.c(c, d) : b.call(null, c, d);
      return a.b ? a.b(e) : a.call(null, e);
    }
    function e(c) {
      c = b.b ? b.b(c) : b.call(null, c);
      return a.b ? a.b(c) : a.call(null, c);
    }
    function f() {
      var c = b.o ? b.o() : b.call(null);
      return a.b ? a.b(c) : a.call(null, c);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new I(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = ud(b, c, e, f, g);
        return a.b ? a.b(c) : a.call(null, c);
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
          return h.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = h.r;
    g.o = f;
    g.b = e;
    g.c = d;
    g.g = c;
    g.k = h.k;
    return g;
  }();
}
function Bd(a) {
  var b = Cd;
  return function() {
    function c(c, d, e) {
      return b.q ? b.q(a, c, d, e) : b.call(null, a, c, d, e);
    }
    function d(c, d) {
      return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
    }
    function e(c) {
      return b.c ? b.c(a, c) : b.call(null, a, c);
    }
    function f() {
      return b.b ? b.b(a) : b.call(null, a);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new I(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return wd(b, a, c, e, f, oc([g], 0));
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
          return h.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = h.r;
    g.o = f;
    g.b = e;
    g.c = d;
    g.g = c;
    g.k = h.k;
    return g;
  }();
}
function Dd(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Nb = c;
  this.rb = d;
  this.s = 16386;
  this.i = 6455296;
}
k = Dd.prototype;
k.equiv = function(a) {
  return this.p(null, a);
};
k.p = function(a, b) {
  return this === b;
};
k.ub = function() {
  return this.state;
};
k.H = function() {
  return this.h;
};
k.pb = function(a, b, c) {
  for (var d = G(this.rb), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.B(null, g);
      var h = M(a, 0);
      a = M(a, 1);
      var l = b, m = c;
      a.q ? a.q(h, this, l, m) : a.call(null, h, this, l, m);
      g += 1;
    } else {
      if (a = G(d)) {
        d = a, Hc(d) ? (e = xb(d), d = yb(d), a = e, f = sc(e), e = a) : (a = J(d), h = M(a, 0), a = M(a, 1), e = h, f = b, g = c, a.q ? a.q(e, this, f, g) : a.call(null, e, this, f, g), d = K(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
k.C = function() {
  return this[aa] || (this[aa] = ++ba);
};
function Ed() {
  switch(arguments.length) {
    case 1:
      return P(arguments[0]);
    default:
      var a = arguments[0], b = new I(Array.prototype.slice.call(arguments, 1), 0), c = Lc(b) ? sd(Fd, b) : b, b = N(c, ra), c = N(c, Gd);
      return new Dd(a, b, c, null);
  }
}
function P(a) {
  return new Dd(a, null, null, null);
}
function Hd(a, b) {
  if (a instanceof Dd) {
    var c = a.Nb;
    if (null != c && !A(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([E("Assert failed: "), E("Validator rejected reference state"), E("\n"), E(function() {
        var a = bd(new Sb(null, "validate", "validate", 1439230700, null), new Sb(null, "new-value", "new-value", -1567397401, null));
        return Id.b ? Id.b(a) : Id.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.rb && pb(a, c, b);
    return b;
  }
  return Cb(a, b);
}
var Jd = function Jd() {
  switch(arguments.length) {
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
Jd.c = function(a, b) {
  var c;
  a instanceof Dd ? (c = a.state, c = b.b ? b.b(c) : b.call(null, c), c = Hd(a, c)) : c = Db.c(a, b);
  return c;
};
Jd.g = function(a, b, c) {
  if (a instanceof Dd) {
    var d = a.state;
    b = b.c ? b.c(d, c) : b.call(null, d, c);
    a = Hd(a, b);
  } else {
    a = Db.g(a, b, c);
  }
  return a;
};
Jd.q = function(a, b, c, d) {
  if (a instanceof Dd) {
    var e = a.state;
    b = b.g ? b.g(e, c, d) : b.call(null, e, c, d);
    a = Hd(a, b);
  } else {
    a = Db.q(a, b, c, d);
  }
  return a;
};
Jd.k = function(a, b, c, d, e) {
  return a instanceof Dd ? Hd(a, ud(b, a.state, c, d, e)) : Db.v(a, b, c, d, e);
};
Jd.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return Jd.k(b, a, c, d, e);
};
Jd.t = 4;
var Kd = function Kd() {
  switch(arguments.length) {
    case 1:
      return Kd.b(arguments[0]);
    case 2:
      return Kd.c(arguments[0], arguments[1]);
    case 3:
      return Kd.g(arguments[0], arguments[1], arguments[2]);
    case 4:
      return Kd.q(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return Kd.k(arguments[0], arguments[1], arguments[2], arguments[3], new I(Array.prototype.slice.call(arguments, 4), 0));
  }
};
Kd.b = function(a) {
  return function(b) {
    return function() {
      function c(c, d) {
        var e = a.b ? a.b(d) : a.call(null, d);
        return b.c ? b.c(c, e) : b.call(null, c, e);
      }
      function d(a) {
        return b.b ? b.b(a) : b.call(null, a);
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
      f.b = d;
      f.c = c;
      f.k = g.k;
      return f;
    }();
  };
};
Kd.c = function(a, b) {
  return new fd(null, function() {
    var c = G(b);
    if (c) {
      if (Hc(c)) {
        for (var d = xb(c), e = sc(d), f = new hd(Array(e), 0), g = 0;;) {
          if (g < e) {
            ld(f, function() {
              var b = F.c(d, g);
              return a.b ? a.b(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return kd(f.ra(), Kd.c(a, yb(c)));
      }
      return mc(function() {
        var b = J(c);
        return a.b ? a.b(b) : a.call(null, b);
      }(), Kd.c(a, Ub(c)));
    }
    return null;
  }, null, null);
};
Kd.g = function(a, b, c) {
  return new fd(null, function() {
    var d = G(b), e = G(c);
    if (d && e) {
      var f = mc, g;
      g = J(d);
      var h = J(e);
      g = a.c ? a.c(g, h) : a.call(null, g, h);
      d = f(g, Kd.g(a, Ub(d), Ub(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
Kd.q = function(a, b, c, d) {
  return new fd(null, function() {
    var e = G(b), f = G(c), g = G(d);
    if (e && f && g) {
      var h = mc, l;
      l = J(e);
      var m = J(f), n = J(g);
      l = a.g ? a.g(l, m, n) : a.call(null, l, m, n);
      e = h(l, Kd.q(a, Ub(e), Ub(f), Ub(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
Kd.k = function(a, b, c, d, e) {
  var f = function h(a) {
    return new fd(null, function() {
      var b = Kd.c(G, a);
      return yd(Sc, b) ? mc(Kd.c(J, b), h(Kd.c(Ub, b))) : null;
    }, null, null);
  };
  return Kd.c(function() {
    return function(b) {
      return sd(a, b);
    };
  }(f), f(qc.k(e, d, oc([c, b], 0))));
};
Kd.r = function(a) {
  var b = J(a), c = K(a);
  a = J(c);
  var d = K(c), c = J(d), e = K(d), d = J(e), e = K(e);
  return Kd.k(b, a, c, d, e);
};
Kd.t = 4;
function Ld(a, b) {
  return new fd(null, function() {
    var c = G(b);
    if (c) {
      if (Hc(c)) {
        for (var d = xb(c), e = sc(d), f = new hd(Array(e), 0), g = 0;;) {
          if (g < e) {
            var h;
            h = F.c(d, g);
            h = a.b ? a.b(h) : a.call(null, h);
            A(h) && (h = F.c(d, g), f.add(h));
            g += 1;
          } else {
            break;
          }
        }
        return kd(f.ra(), Ld(a, yb(c)));
      }
      d = J(c);
      c = Ub(c);
      return A(a.b ? a.b(d) : a.call(null, d)) ? mc(d, Ld(a, c)) : Ld(a, c);
    }
    return null;
  }, null, null);
}
var Md = function Md() {
  switch(arguments.length) {
    case 2:
      return Md.c(arguments[0], arguments[1]);
    case 3:
      return Md.g(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
};
Md.c = function(a, b) {
  var c;
  null != a ? a && (a.s & 4 || a.vb) ? (c = Pc(rb, qb(a), b), c = sb(c), c = Cc(c, Dc(a))) : c = Pc(Ha, a, b) : c = Pc(qc, Vb, b);
  return c;
};
Md.g = function(a, b, c) {
  a && (a.s & 4 || a.vb) ? (b = Tc(b, qd, qb(a), c), b = sb(b), a = Cc(b, Dc(a))) : a = Tc(b, qc, a, c);
  return a;
};
Md.t = 3;
function Nd(a, b, c, d) {
  return wc.g(a, b, function() {
    var e = N(a, b);
    return c.c ? c.c(e, d) : c.call(null, e, d);
  }());
}
function Od(a, b, c, d, e) {
  return wc.g(a, b, function() {
    var f = N(a, b);
    return c.g ? c.g(f, d, e) : c.call(null, f, d, e);
  }());
}
function Pd(a, b) {
  this.l = a;
  this.a = b;
}
function Qd(a, b) {
  return new Pd(a, b);
}
function Rd(a) {
  return new Pd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Sd(a) {
  return new Pd(a.l, Aa(a.a));
}
function Td(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ud(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Rd(a);
    d.a[0] = c;
    c = d;
    b -= 5;
  }
}
var Vd = function Vd(b, c, d, e) {
  var f = Sd(d), g = b.d - 1 >>> c & 31;
  5 === c ? f.a[g] = e : (d = d.a[g], b = null != d ? Vd(b, c - 5, d, e) : Ud(null, c - 5, e), f.a[g] = b);
  return f;
};
function Wd(a, b) {
  throw Error([E("No item "), E(a), E(" in vector of length "), E(b)].join(""));
}
function Xd(a, b) {
  if (b >= Td(a)) {
    return a.n;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.a[b >>> d & 31], d = e
    } else {
      return c.a;
    }
  }
}
function Yd(a, b) {
  return 0 <= b && b < a.d ? Xd(a, b) : Wd(b, a.d);
}
var Zd = function Zd(b, c, d, e, f) {
  var g = Sd(d);
  if (0 === c) {
    g.a[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = Zd(b, c - 5, d.a[h], e, f);
    g.a[h] = b;
  }
  return g;
}, $d = function $d(b, c, d) {
  var e = b.d - 2 >>> c & 31;
  if (5 < c) {
    b = $d(b, c - 5, d.a[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Sd(d);
    d.a[e] = b;
    return d;
  }
  if (0 === e) {
    return null;
  }
  d = Sd(d);
  d.a[e] = null;
  return d;
};
function ae(a, b, c, d, e, f) {
  this.j = a;
  this.jb = b;
  this.a = c;
  this.qa = d;
  this.start = e;
  this.end = f;
}
ae.prototype.gb = function() {
  return this.j < this.end;
};
ae.prototype.next = function() {
  32 === this.j - this.jb && (this.a = Xd(this.qa, this.j), this.jb += 32);
  var a = this.a[this.j & 31];
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
k = Q.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
};
k.B = function(a, b) {
  return Yd(this, b)[b & 31];
};
k.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? Xd(this, b)[b & 31] : c;
};
k.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    return Td(this) <= b ? (a = Aa(this.n), a[b & 31] = c, new Q(this.h, this.d, this.shift, this.root, a, null)) : new Q(this.h, this.d, this.shift, Zd(this, this.shift, this.root, b, c), this.n, null);
  }
  if (b === this.d) {
    return Ha(this, c);
  }
  throw Error([E("Index "), E(b), E(" out of bounds  [0,"), E(this.d), E("]")].join(""));
};
k.Na = function() {
  var a = this.d;
  return new ae(0, 0, 0 < sc(this) ? Xd(this, 0) : null, this, 0, a);
};
k.H = function() {
  return this.h;
};
k.O = function() {
  return this.d;
};
k.Za = function() {
  return F.c(this, 0);
};
k.$a = function() {
  return F.c(this, 1);
};
k.Fa = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return db(rc, this.h);
  }
  if (1 < this.d - Td(this)) {
    return new Q(this.h, this.d - 1, this.shift, this.root, this.n.slice(0, -1), null);
  }
  var a = Xd(this, this.d - 2), b = $d(this, this.shift, this.root), b = null == b ? R : b, c = this.d - 1;
  return 5 < this.shift && null == b.a[1] ? new Q(this.h, c, this.shift - 5, b.a[0], a, null) : new Q(this.h, c, this.shift, b, a, null);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
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
k.La = function() {
  var a = this;
  return new be(a.d, a.shift, function() {
    var b = a.root;
    return ce.b ? ce.b(b) : ce.call(null, b);
  }(), function() {
    var b = a.n;
    return de.b ? de.b(b) : de.call(null, b);
  }());
};
k.L = function() {
  return Cc(rc, this.h);
};
k.M = function(a, b) {
  return ec(this, b);
};
k.N = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.d) {
      var e = Xd(this, a);
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
k.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return Ya(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.J = function() {
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
        b -= 5, a = a.a[0];
      } else {
        a = a.a;
        break a;
      }
    }
  }
  return ee ? ee(this, a, 0, 0) : fe.call(null, this, a, 0, 0);
};
k.K = function(a, b) {
  return new Q(b, this.d, this.shift, this.root, this.n, this.m);
};
k.I = function(a, b) {
  if (32 > this.d - Td(this)) {
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
  d ? (d = Rd(null), d.a[0] = this.root, e = Ud(null, this.shift, new Pd(null, this.n)), d.a[1] = e) : d = Vd(this, this.shift, this.root, new Pd(null, this.n));
  return new Q(this.h, this.d + 1, c, d, [b], null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.B(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.B(null, a);
};
k.c = function(a, b) {
  return this.ha(null, a, b);
};
var R = new Pd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), rc = new Q(null, 0, 5, R, [], bc);
Q.prototype[ya] = function() {
  return Zb(this);
};
function ge(a, b, c, d, e, f) {
  this.F = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 32375020;
  this.s = 1536;
}
k = ge.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = ee ? ee(a, b, c, d) : fe.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return zb(this);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(rc, this.h);
};
k.M = function(a, b) {
  var c;
  c = this.F;
  var d = this.j + this.w, e = sc(this.F);
  c = he ? he(c, d, e) : ie.call(null, c, d, e);
  return ec(c, b);
};
k.N = function(a, b, c) {
  a = this.F;
  var d = this.j + this.w, e = sc(this.F);
  a = he ? he(a, d, e) : ie.call(null, a, d, e);
  return fc(a, b, c);
};
k.fa = function() {
  return this.ga[this.w];
};
k.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = ee ? ee(a, b, c, d) : fe.call(null, a, b, c, d);
    return null == a ? Vb : a;
  }
  return yb(this);
};
k.J = function() {
  return this;
};
k.Xa = function() {
  var a = this.ga;
  return new id(a, this.w, a.length);
};
k.Ya = function() {
  var a = this.j + this.ga.length;
  if (a < Ea(this.F)) {
    var b = this.F, c = Xd(this.F, a);
    return ee ? ee(b, c, a, 0) : fe.call(null, b, c, a, 0);
  }
  return Vb;
};
k.K = function(a, b) {
  var c = this.F, d = this.ga, e = this.j, f = this.w;
  return je ? je(c, d, e, f, b) : fe.call(null, c, d, e, f, b);
};
k.I = function(a, b) {
  return mc(b, this);
};
k.Wa = function() {
  var a = this.j + this.ga.length;
  if (a < Ea(this.F)) {
    var b = this.F, c = Xd(this.F, a);
    return ee ? ee(b, c, a, 0) : fe.call(null, b, c, a, 0);
  }
  return null;
};
ge.prototype[ya] = function() {
  return Zb(this);
};
function fe() {
  switch(arguments.length) {
    case 3:
      var a = arguments[0], b = arguments[1], c = arguments[2];
      return new ge(a, Yd(a, b), b, c, null, null);
    case 4:
      return ee(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return je(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function ee(a, b, c, d) {
  return new ge(a, b, c, d, null, null);
}
function je(a, b, c, d, e) {
  return new ge(a, b, c, d, e, null);
}
function ke(a, b, c, d, e) {
  this.h = a;
  this.qa = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.i = 167666463;
  this.s = 8192;
}
k = ke.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
};
k.B = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Wd(b, this.end - this.start) : F.c(this.qa, this.start + b);
};
k.ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : F.g(this.qa, this.start + b, c);
};
k.cb = function(a, b, c) {
  var d = this.start + b;
  a = this.h;
  c = wc.g(this.qa, d, c);
  b = this.start;
  var e = this.end, d = d + 1, d = e > d ? e : d;
  return le.v ? le.v(a, c, b, d, null) : le.call(null, a, c, b, d, null);
};
k.H = function() {
  return this.h;
};
k.O = function() {
  return this.end - this.start;
};
k.Fa = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var a = this.h, b = this.qa, c = this.start, d = this.end - 1;
  return le.v ? le.v(a, b, c, d, null) : le.call(null, a, b, c, d, null);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(rc, this.h);
};
k.M = function(a, b) {
  return ec(this, b);
};
k.N = function(a, b, c) {
  return fc(this, b, c);
};
k.Ea = function(a, b, c) {
  if ("number" === typeof b) {
    return Ya(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.J = function() {
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
k.K = function(a, b) {
  var c = this.qa, d = this.start, e = this.end, f = this.m;
  return le.v ? le.v(b, c, d, e, f) : le.call(null, b, c, d, e, f);
};
k.I = function(a, b) {
  var c = this.h, d = Ya(this.qa, this.end, b), e = this.start, f = this.end + 1;
  return le.v ? le.v(c, d, e, f, null) : le.call(null, c, d, e, f, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.B(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.B(null, a);
};
k.c = function(a, b) {
  return this.ha(null, a, b);
};
ke.prototype[ya] = function() {
  return Zb(this);
};
function le(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ke) {
      c = b.start + c, d = b.start + d, b = b.qa;
    } else {
      var f = sc(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ke(a, b, c, d, e);
    }
  }
}
function ie() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0];
      return he(a, arguments[1], sc(a));
    case 3:
      return he(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function he(a, b, c) {
  return le(null, a, b, c, null);
}
function me(a, b) {
  return a === b.l ? b : new Pd(a, Aa(b.a));
}
function ce(a) {
  return new Pd({}, Aa(a.a));
}
function de(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Jc(a, 0, b, 0, a.length);
  return b;
}
var ne = function ne(b, c, d, e) {
  d = me(b.root.l, d);
  var f = b.d - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.a[f];
    b = null != g ? ne(b, c - 5, g, e) : Ud(b.root.l, c - 5, e);
  }
  d.a[f] = b;
  return d;
};
function be(a, b, c, d) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.s = 88;
  this.i = 275;
}
k = be.prototype;
k.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.d - Td(this)) {
      this.n[this.d & 31] = b;
    } else {
      var c = new Pd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      if (this.d >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ud(this.root.l, this.shift, c);
        this.root = new Pd(this.root.l, d);
        this.shift = e;
      } else {
        this.root = ne(this, this.shift, this.root, c);
      }
    }
    this.d += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.Ra = function() {
  if (this.root.l) {
    this.root.l = null;
    var a = this.d - Td(this), b = Array(a);
    Jc(this.n, 0, b, 0, a);
    return new Q(null, this.d, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
k.Ga = function(a, b, c) {
  if ("number" === typeof b) {
    return ub(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.nb = function(a, b, c) {
  var d = this;
  if (d.root.l) {
    if (0 <= b && b < d.d) {
      return Td(this) <= b ? d.n[b & 31] = c : (a = function() {
        return function f(a, h) {
          var l = me(d.root.l, h);
          if (0 === a) {
            l.a[b & 31] = c;
          } else {
            var m = b >>> a & 31, n = f(a - 5, l.a[m]);
            l.a[m] = n;
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
k.O = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
k.B = function(a, b) {
  if (this.root.l) {
    return Yd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? F.c(this, b) : c;
};
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  return "number" === typeof b ? F.g(this, b, c) : c;
};
k.call = function() {
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
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.da(null, a);
};
k.c = function(a, b) {
  return this.G(null, a, b);
};
function oe() {
  this.i = 2097152;
  this.s = 0;
}
oe.prototype.equiv = function(a) {
  return this.p(null, a);
};
oe.prototype.p = function() {
  return!1;
};
var pe = new oe;
function qe(a, b) {
  return Mc(Fc(b) ? sc(a) === sc(b) ? yd(Sc, Kd.c(function(a) {
    return Wb.c(vc(b, J(a), pe), J(K(a)));
  }, a)) : null : null);
}
function re(a) {
  this.u = a;
}
re.prototype.next = function() {
  if (null != this.u) {
    var a = J(this.u), b = M(a, 0), a = M(a, 1);
    this.u = K(this.u);
    return{value:[b, a], done:!1};
  }
  return{value:null, done:!0};
};
function se(a) {
  return new re(G(a));
}
function te(a, b) {
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
function ue(a, b, c) {
  this.a = a;
  this.j = b;
  this.ka = c;
  this.i = 32374990;
  this.s = 0;
}
k = ue.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.ka;
};
k.ia = function() {
  return this.j < this.a.length - 2 ? new ue(this.a, this.j + 2, this.ka) : null;
};
k.O = function() {
  return(this.a.length - this.j) / 2;
};
k.C = function() {
  return ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.ka);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return new Q(null, 2, 5, R, [this.a[this.j], this.a[this.j + 1]], null);
};
k.la = function() {
  return this.j < this.a.length - 2 ? new ue(this.a, this.j + 2, this.ka) : Vb;
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new ue(this.a, this.j, b);
};
k.I = function(a, b) {
  return mc(b, this);
};
ue.prototype[ya] = function() {
  return Zb(this);
};
function ve(a, b, c) {
  this.a = a;
  this.j = b;
  this.d = c;
}
ve.prototype.gb = function() {
  return this.j < this.d;
};
ve.prototype.next = function() {
  var a = new Q(null, 2, 5, R, [this.a[this.j], this.a[this.j + 1]], null);
  this.j += 2;
  return a;
};
function z(a, b, c, d) {
  this.h = a;
  this.d = b;
  this.a = c;
  this.m = d;
  this.i = 16647951;
  this.s = 8196;
}
k = z.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.keys = function() {
  return Zb(we.b ? we.b(this) : we.call(null, this));
};
k.entries = function() {
  return se(G(this));
};
k.values = function() {
  return Zb(xe.b ? xe.b(this) : xe.call(null, this));
};
k.has = function(a) {
  return Nc(this, a);
};
k.get = function(a, b) {
  return this.G(null, a, b);
};
k.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M(f, 0), f = M(f, 1);
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
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  a = te(this.a, b);
  return-1 === a ? c : this.a[a + 1];
};
k.Na = function() {
  return new ve(this.a, 0, 2 * this.d);
};
k.H = function() {
  return this.h;
};
k.O = function() {
  return this.d;
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = cc(this);
};
k.p = function(a, b) {
  if (b && (b.i & 1024 || b.yb)) {
    var c = this.a.length;
    if (this.d === b.O(null)) {
      for (var d = 0;;) {
        if (d < c) {
          var e = b.G(null, this.a[d], Kc);
          if (e !== Kc) {
            if (Wb.c(this.a[d + 1], e)) {
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
    return qe(this, b);
  }
};
k.La = function() {
  return new ye({}, this.a.length, Aa(this.a));
};
k.L = function() {
  return db(S, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.mb = function(a, b) {
  if (0 <= te(this.a, b)) {
    var c = this.a.length, d = c - 2;
    if (0 === d) {
      return Fa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new z(this.h, this.d - 1, d, null);
      }
      Wb.c(b, this.a[e]) || (d[f] = this.a[e], d[f + 1] = this.a[e + 1], f += 2);
      e += 2;
    }
  } else {
    return this;
  }
};
k.Ea = function(a, b, c) {
  a = te(this.a, b);
  if (-1 === a) {
    if (this.d < ze) {
      a = this.a;
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
    return db(Qa(Md.c(xc, this), b, c), this.h);
  }
  if (c === this.a[a + 1]) {
    return this;
  }
  b = Aa(this.a);
  b[a + 1] = c;
  return new z(this.h, this.d, b, null);
};
k.J = function() {
  var a = this.a;
  return 0 <= a.length - 2 ? new ue(a, 0, null) : null;
};
k.K = function(a, b) {
  return new z(b, this.d, this.a, this.m);
};
k.I = function(a, b) {
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
k.call = function() {
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
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.da(null, a);
};
k.c = function(a, b) {
  return this.G(null, a, b);
};
var S = new z(null, 0, [], dc), ze = 8;
z.prototype[ya] = function() {
  return Zb(this);
};
function ye(a, b, c) {
  this.Ha = a;
  this.Ja = b;
  this.a = c;
  this.i = 258;
  this.s = 56;
}
k = ye.prototype;
k.O = function() {
  if (A(this.Ha)) {
    return Xc(this.Ja, 2);
  }
  throw Error("count after persistent!");
};
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  if (A(this.Ha)) {
    return a = te(this.a, b), -1 === a ? c : this.a[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.Qa = function(a, b) {
  if (A(this.Ha)) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ta, b)) : B(Ta, b)) {
      return tb(this, Ae.b ? Ae.b(b) : Ae.call(null, b), Be.b ? Be.b(b) : Be.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (A(e)) {
        var f = e, c = K(c), d = tb(d, function() {
          var a = f;
          return Ae.b ? Ae.b(a) : Ae.call(null, a);
        }(), function() {
          var a = f;
          return Be.b ? Be.b(a) : Be.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.Ra = function() {
  if (A(this.Ha)) {
    return this.Ha = !1, new z(null, Xc(this.Ja, 2), this.a, null);
  }
  throw Error("persistent! called twice");
};
k.Ga = function(a, b, c) {
  if (A(this.Ha)) {
    a = te(this.a, b);
    if (-1 === a) {
      if (this.Ja + 2 <= 2 * ze) {
        return this.Ja += 2, this.a.push(b), this.a.push(c), this;
      }
      a = this.Ja;
      var d = this.a;
      a = Ce.c ? Ce.c(a, d) : Ce.call(null, a, d);
      return tb(a, b, c);
    }
    c !== this.a[a + 1] && (this.a[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
function Ce(a, b) {
  for (var c = qb(xc), d = 0;;) {
    if (d < a) {
      c = tb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function De() {
  this.ta = !1;
}
function Ee(a, b) {
  return a === b ? !0 : a === b || a instanceof O && b instanceof O && a.va === b.va ? !0 : Wb.c(a, b);
}
function Fe(a, b, c) {
  a = Aa(a);
  a[b] = c;
  return a;
}
function Ge(a, b) {
  var c = Array(a.length - 2);
  Jc(a, 0, c, 0, 2 * b);
  Jc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
function He(a, b, c, d) {
  a = a.Ba(b);
  a.a[c] = d;
  return a;
}
function Ie(a, b, c) {
  this.l = a;
  this.A = b;
  this.a = c;
}
k = Ie.prototype;
k.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Yc(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  Jc(this.a, 0, c, 0, 2 * b);
  return new Ie(a, this.A, c);
};
k.Sa = function() {
  var a = this.a;
  return Je ? Je(a) : Ke.call(null, a);
};
k.Ca = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var f = Yc(this.A & e - 1), e = this.a[2 * f], f = this.a[2 * f + 1];
  return null == e ? f.Ca(a + 5, b, c, d) : Ee(c, e) ? f : d;
};
k.pa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), h = Yc(this.A & g - 1);
  if (0 === (this.A & g)) {
    var l = Yc(this.A);
    if (2 * l < this.a.length) {
      a = this.Ba(a);
      b = a.a;
      f.ta = !0;
      a: {
        for (c = 2 * (l - h), f = 2 * h + (c - 1), l = 2 * (h + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          --l;
          --c;
          --f;
        }
      }
      b[2 * h] = d;
      b[2 * h + 1] = e;
      a.A |= g;
      return a;
    }
    if (16 <= l) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[c >>> b & 31] = Le.pa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (h[d] = null != this.a[e] ? Le.pa(a, b + 5, Qb(this.a[e]), this.a[e], this.a[e + 1], f) : this.a[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Me(a, l + 1, h);
    }
    b = Array(2 * (l + 4));
    Jc(this.a, 0, b, 0, 2 * h);
    b[2 * h] = d;
    b[2 * h + 1] = e;
    Jc(this.a, 2 * h, b, 2 * (h + 1), 2 * (l - h));
    f.ta = !0;
    a = this.Ba(a);
    a.a = b;
    a.A |= g;
    return a;
  }
  l = this.a[2 * h];
  g = this.a[2 * h + 1];
  if (null == l) {
    return l = g.pa(a, b + 5, c, d, e, f), l === g ? this : He(this, a, 2 * h + 1, l);
  }
  if (Ee(d, l)) {
    return e === g ? this : He(this, a, 2 * h + 1, e);
  }
  f.ta = !0;
  f = b + 5;
  d = Ne ? Ne(a, f, l, g, c, d, e) : Pe.call(null, a, f, l, g, c, d, e);
  e = 2 * h;
  h = 2 * h + 1;
  a = this.Ba(a);
  a.a[e] = null;
  a.a[h] = d;
  return a;
};
k.oa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Yc(this.A & f - 1);
  if (0 === (this.A & f)) {
    var h = Yc(this.A);
    if (16 <= h) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Le.oa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (g[c] = null != this.a[d] ? Le.oa(a + 5, Qb(this.a[d]), this.a[d], this.a[d + 1], e) : this.a[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Me(null, h + 1, g);
    }
    a = Array(2 * (h + 1));
    Jc(this.a, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Jc(this.a, 2 * g, a, 2 * (g + 1), 2 * (h - g));
    e.ta = !0;
    return new Ie(null, this.A | f, a);
  }
  var l = this.a[2 * g], f = this.a[2 * g + 1];
  if (null == l) {
    return h = f.oa(a + 5, b, c, d, e), h === f ? this : new Ie(null, this.A, Fe(this.a, 2 * g + 1, h));
  }
  if (Ee(c, l)) {
    return d === f ? this : new Ie(null, this.A, Fe(this.a, 2 * g + 1, d));
  }
  e.ta = !0;
  e = this.A;
  h = this.a;
  a += 5;
  a = Qe ? Qe(a, l, f, b, c, d) : Pe.call(null, a, l, f, b, c, d);
  c = 2 * g;
  g = 2 * g + 1;
  d = Aa(h);
  d[c] = null;
  d[g] = a;
  return new Ie(null, e, d);
};
k.Ta = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = Yc(this.A & d - 1), f = this.a[2 * e], g = this.a[2 * e + 1];
  return null == f ? (a = g.Ta(a + 5, b, c), a === g ? this : null != a ? new Ie(null, this.A, Fe(this.a, 2 * e + 1, a)) : this.A === d ? null : new Ie(null, this.A ^ d, Ge(this.a, e))) : Ee(c, f) ? new Ie(null, this.A ^ d, Ge(this.a, e)) : this;
};
var Le = new Ie(null, 0, []);
function Me(a, b, c) {
  this.l = a;
  this.d = b;
  this.a = c;
}
k = Me.prototype;
k.Ba = function(a) {
  return a === this.l ? this : new Me(a, this.d, Aa(this.a));
};
k.Sa = function() {
  var a = this.a;
  return Re ? Re(a) : Se.call(null, a);
};
k.Ca = function(a, b, c, d) {
  var e = this.a[b >>> a & 31];
  return null != e ? e.Ca(a + 5, b, c, d) : d;
};
k.pa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, h = this.a[g];
  if (null == h) {
    return a = He(this, a, g, Le.pa(a, b + 5, c, d, e, f)), a.d += 1, a;
  }
  b = h.pa(a, b + 5, c, d, e, f);
  return b === h ? this : He(this, a, g, b);
};
k.oa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.a[f];
  if (null == g) {
    return new Me(null, this.d + 1, Fe(this.a, f, Le.oa(a + 5, b, c, d, e)));
  }
  a = g.oa(a + 5, b, c, d, e);
  return a === g ? this : new Me(null, this.d, Fe(this.a, f, a));
};
k.Ta = function(a, b, c) {
  var d = b >>> a & 31, e = this.a[d];
  if (null != e) {
    a = e.Ta(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.d) {
          a: {
            e = this.a;
            a = e.length;
            b = Array(2 * (this.d - 1));
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Ie(null, g, b);
                break a;
              }
            }
          }
        } else {
          d = new Me(null, this.d - 1, Fe(this.a, d, a));
        }
      } else {
        d = new Me(null, this.d, Fe(this.a, d, a));
      }
    }
    return d;
  }
  return this;
};
function Te(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Ee(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ue(a, b, c, d) {
  this.l = a;
  this.ua = b;
  this.d = c;
  this.a = d;
}
k = Ue.prototype;
k.Ba = function(a) {
  if (a === this.l) {
    return this;
  }
  var b = Array(2 * (this.d + 1));
  Jc(this.a, 0, b, 0, 2 * this.d);
  return new Ue(a, this.ua, this.d, b);
};
k.Sa = function() {
  var a = this.a;
  return Je ? Je(a) : Ke.call(null, a);
};
k.Ca = function(a, b, c, d) {
  a = Te(this.a, this.d, c);
  return 0 > a ? d : Ee(c, this.a[a]) ? this.a[a + 1] : d;
};
k.pa = function(a, b, c, d, e, f) {
  if (c === this.ua) {
    b = Te(this.a, this.d, d);
    if (-1 === b) {
      if (this.a.length > 2 * this.d) {
        return b = 2 * this.d, c = 2 * this.d + 1, a = this.Ba(a), a.a[b] = d, a.a[c] = e, f.ta = !0, a.d += 1, a;
      }
      c = this.a.length;
      b = Array(c + 2);
      Jc(this.a, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ta = !0;
      d = this.d + 1;
      a === this.l ? (this.a = b, this.d = d, a = this) : a = new Ue(this.l, this.ua, d, b);
      return a;
    }
    return this.a[b + 1] === e ? this : He(this, a, b + 1, e);
  }
  return(new Ie(a, 1 << (this.ua >>> b & 31), [null, this, null, null])).pa(a, b, c, d, e, f);
};
k.oa = function(a, b, c, d, e) {
  return b === this.ua ? (a = Te(this.a, this.d, c), -1 === a ? (a = 2 * this.d, b = Array(a + 2), Jc(this.a, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ta = !0, new Ue(null, this.ua, this.d + 1, b)) : Wb.c(this.a[a], d) ? this : new Ue(null, this.ua, this.d, Fe(this.a, a + 1, d))) : (new Ie(null, 1 << (this.ua >>> a & 31), [null, this])).oa(a, b, c, d, e);
};
k.Ta = function(a, b, c) {
  a = Te(this.a, this.d, c);
  return-1 === a ? this : 1 === this.d ? null : new Ue(null, this.ua, this.d - 1, Ge(this.a, Xc(a, 2)));
};
function Pe() {
  switch(arguments.length) {
    case 6:
      return Qe(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return Ne(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Qe(a, b, c, d, e, f) {
  var g = Qb(b);
  if (g === d) {
    return new Ue(null, g, 2, [b, c, e, f]);
  }
  var h = new De;
  return Le.oa(a, g, b, c, h).oa(a, d, e, f, h);
}
function Ne(a, b, c, d, e, f, g) {
  var h = Qb(c);
  if (h === e) {
    return new Ue(null, h, 2, [c, d, f, g]);
  }
  var l = new De;
  return Le.pa(a, b, h, c, d, l).pa(a, b, e, f, g, l);
}
function Ve(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.u = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
k = Ve.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return null == this.u ? new Q(null, 2, 5, R, [this.xa[this.j], this.xa[this.j + 1]], null) : J(this.u);
};
k.la = function() {
  if (null == this.u) {
    var a = this.xa, b = this.j + 2;
    return We ? We(a, b, null) : Ke.call(null, a, b, null);
  }
  var a = this.xa, b = this.j, c = K(this.u);
  return We ? We(a, b, c) : Ke.call(null, a, b, c);
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new Ve(b, this.xa, this.j, this.u, this.m);
};
k.I = function(a, b) {
  return mc(b, this);
};
Ve.prototype[ya] = function() {
  return Zb(this);
};
function Ke() {
  switch(arguments.length) {
    case 1:
      return Je(arguments[0]);
    case 3:
      return We(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Je(a) {
  return We(a, 0, null);
}
function We(a, b, c) {
  if (null == c) {
    for (c = a.length;;) {
      if (b < c) {
        if (null != a[b]) {
          return new Ve(null, a, b, null, null);
        }
        var d = a[b + 1];
        if (A(d) && (d = d.Sa(), A(d))) {
          return new Ve(null, a, b + 2, d, null);
        }
        b += 2;
      } else {
        return null;
      }
    }
  } else {
    return new Ve(null, a, b, c, null);
  }
}
function Xe(a, b, c, d, e) {
  this.h = a;
  this.xa = b;
  this.j = c;
  this.u = d;
  this.m = e;
  this.i = 32374860;
  this.s = 0;
}
k = Xe.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.h;
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return J(this.u);
};
k.la = function() {
  var a = this.xa, b = this.j, c = K(this.u);
  return Ye ? Ye(null, a, b, c) : Se.call(null, null, a, b, c);
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new Xe(b, this.xa, this.j, this.u, this.m);
};
k.I = function(a, b) {
  return mc(b, this);
};
Xe.prototype[ya] = function() {
  return Zb(this);
};
function Se() {
  switch(arguments.length) {
    case 1:
      return Re(arguments[0]);
    case 4:
      return Ye(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      throw Error([E("Invalid arity: "), E(arguments.length)].join(""));;
  }
}
function Re(a) {
  return Ye(null, a, 0, null);
}
function Ye(a, b, c, d) {
  if (null == d) {
    for (d = b.length;;) {
      if (c < d) {
        var e = b[c];
        if (A(e) && (e = e.Sa(), A(e))) {
          return new Xe(a, b, c + 1, e, null);
        }
        c += 1;
      } else {
        return null;
      }
    }
  } else {
    return new Xe(a, b, c, d, null);
  }
}
function Ze(a, b, c, d, e, f) {
  this.h = a;
  this.d = b;
  this.root = c;
  this.ma = d;
  this.na = e;
  this.m = f;
  this.i = 16123663;
  this.s = 8196;
}
k = Ze.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.keys = function() {
  return Zb(we.b ? we.b(this) : we.call(null, this));
};
k.entries = function() {
  return se(G(this));
};
k.values = function() {
  return Zb(xe.b ? xe.b(this) : xe.call(null, this));
};
k.has = function(a) {
  return Nc(this, a);
};
k.get = function(a, b) {
  return this.G(null, a, b);
};
k.forEach = function(a) {
  for (var b = G(this), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.B(null, e), g = M(f, 0), f = M(f, 1);
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
k.da = function(a, b) {
  return Pa.g(this, b, null);
};
k.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Qb(b), b, c);
};
k.H = function() {
  return this.h;
};
k.O = function() {
  return this.d;
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = cc(this);
};
k.p = function(a, b) {
  return qe(this, b);
};
k.La = function() {
  return new $e({}, this.root, this.d, this.ma, this.na);
};
k.L = function() {
  return db(xc, this.h);
};
k.mb = function(a, b) {
  if (null == b) {
    return this.ma ? new Ze(this.h, this.d - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  var c = this.root.Ta(0, Qb(b), b);
  return c === this.root ? this : new Ze(this.h, this.d - 1, c, this.ma, this.na, null);
};
k.Ea = function(a, b, c) {
  if (null == b) {
    return this.ma && c === this.na ? this : new Ze(this.h, this.ma ? this.d : this.d + 1, this.root, !0, c, null);
  }
  a = new De;
  b = (null == this.root ? Le : this.root).oa(0, Qb(b), b, c, a);
  return b === this.root ? this : new Ze(this.h, a.ta ? this.d + 1 : this.d, b, this.ma, this.na, null);
};
k.J = function() {
  if (0 < this.d) {
    var a = null != this.root ? this.root.Sa() : null;
    return this.ma ? mc(new Q(null, 2, 5, R, [null, this.na], null), a) : a;
  }
  return null;
};
k.K = function(a, b) {
  return new Ze(b, this.d, this.root, this.ma, this.na, this.m);
};
k.I = function(a, b) {
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
k.call = function() {
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
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.da(null, a);
};
k.c = function(a, b) {
  return this.G(null, a, b);
};
var xc = new Ze(null, 0, null, !1, null, dc);
Ze.prototype[ya] = function() {
  return Zb(this);
};
function $e(a, b, c, d, e) {
  this.l = a;
  this.root = b;
  this.count = c;
  this.ma = d;
  this.na = e;
  this.i = 258;
  this.s = 56;
}
function af(a, b) {
  if (a.l) {
    if (b ? b.i & 2048 || b.zb || (b.i ? 0 : B(Ta, b)) : B(Ta, b)) {
      return bf(a, Ae.b ? Ae.b(b) : Ae.call(null, b), Be.b ? Be.b(b) : Be.call(null, b));
    }
    for (var c = G(b), d = a;;) {
      var e = J(c);
      if (A(e)) {
        var f = e, c = K(c), d = bf(d, function() {
          var a = f;
          return Ae.b ? Ae.b(a) : Ae.call(null, a);
        }(), function() {
          var a = f;
          return Be.b ? Be.b(a) : Be.call(null, a);
        }())
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent");
  }
}
function bf(a, b, c) {
  if (a.l) {
    if (null == b) {
      a.na !== c && (a.na = c), a.ma || (a.count += 1, a.ma = !0);
    } else {
      var d = new De;
      b = (null == a.root ? Le : a.root).pa(a.l, 0, Qb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ta && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
k = $e.prototype;
k.O = function() {
  if (this.l) {
    return this.count;
  }
  throw Error("count after persistent!");
};
k.da = function(a, b) {
  return null == b ? this.ma ? this.na : null : null == this.root ? null : this.root.Ca(0, Qb(b), b);
};
k.G = function(a, b, c) {
  return null == b ? this.ma ? this.na : c : null == this.root ? c : this.root.Ca(0, Qb(b), b, c);
};
k.Qa = function(a, b) {
  return af(this, b);
};
k.Ra = function() {
  var a;
  if (this.l) {
    this.l = null, a = new Ze(null, this.count, this.root, this.ma, this.na, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.Ga = function(a, b, c) {
  return bf(this, b, c);
};
var Fd = function Fd() {
  return Fd.k(0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Fd.k = function(a) {
  for (var b = G(a), c = qb(xc);;) {
    if (b) {
      a = K(K(b));
      var d = J(b), b = J(K(b)), c = tb(c, d, b), b = a;
    } else {
      return sb(c);
    }
  }
};
Fd.t = 0;
Fd.r = function(a) {
  return Fd.k(G(a));
};
function cf(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
k = cf.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.ka;
};
k.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ma, a)) : B(Ma, a)) ? this.ja.ia(null) : K(this.ja);
  return null == a ? null : new cf(a, this.ka);
};
k.C = function() {
  return ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.ka);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return this.ja.fa(null).Za(null);
};
k.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ma, a)) : B(Ma, a)) ? this.ja.ia(null) : K(this.ja);
  return null != a ? new cf(a, this.ka) : Vb;
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new cf(this.ja, b);
};
k.I = function(a, b) {
  return mc(b, this);
};
cf.prototype[ya] = function() {
  return Zb(this);
};
function we(a) {
  return(a = G(a)) ? new cf(a, null) : null;
}
function Ae(a) {
  return Ua(a);
}
function df(a, b) {
  this.ja = a;
  this.ka = b;
  this.i = 32374988;
  this.s = 0;
}
k = df.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.H = function() {
  return this.ka;
};
k.ia = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ma, a)) : B(Ma, a)) ? this.ja.ia(null) : K(this.ja);
  return null == a ? null : new df(a, this.ka);
};
k.C = function() {
  return ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.ka);
};
k.M = function(a, b) {
  return Oc(b, this);
};
k.N = function(a, b, c) {
  return Rc(b, c, this);
};
k.fa = function() {
  return this.ja.fa(null).$a(null);
};
k.la = function() {
  var a = this.ja, a = (a ? a.i & 128 || a.ab || (a.i ? 0 : B(Ma, a)) : B(Ma, a)) ? this.ja.ia(null) : K(this.ja);
  return null != a ? new df(a, this.ka) : Vb;
};
k.J = function() {
  return this;
};
k.K = function(a, b) {
  return new df(this.ja, b);
};
k.I = function(a, b) {
  return mc(b, this);
};
df.prototype[ya] = function() {
  return Zb(this);
};
function xe(a) {
  return(a = G(a)) ? new df(a, null) : null;
}
function Be(a) {
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
function ef(a, b, c) {
  this.j = a;
  this.end = b;
  this.step = c;
}
ef.prototype.gb = function() {
  return 0 < this.step ? this.j < this.end : this.j > this.end;
};
ef.prototype.next = function() {
  var a = this.j;
  this.j += this.step;
  return a;
};
function ff(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.m = e;
  this.i = 32375006;
  this.s = 8192;
}
k = ff.prototype;
k.toString = function() {
  return Gb(this);
};
k.equiv = function(a) {
  return this.p(null, a);
};
k.B = function(a, b) {
  if (b < Ea(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
k.ha = function(a, b, c) {
  return b < Ea(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
k.Na = function() {
  return new ef(this.start, this.end, this.step);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new ff(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new ff(this.h, this.start + this.step, this.end, this.step, null) : null;
};
k.O = function() {
  if (wa(kb(this))) {
    return 0;
  }
  var a = (this.end - this.start) / this.step;
  return Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = ac(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return ec(this, b);
};
k.N = function(a, b, c) {
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
k.fa = function() {
  return null == kb(this) ? null : this.start;
};
k.la = function() {
  return null != kb(this) ? new ff(this.h, this.start + this.step, this.end, this.step, null) : Vb;
};
k.J = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
k.K = function(a, b) {
  return new ff(b, this.start, this.end, this.step, this.m);
};
k.I = function(a, b) {
  return mc(b, this);
};
ff.prototype[ya] = function() {
  return Zb(this);
};
function gf() {
  var a = hf, b = jf;
  return function() {
    function c(c, d, e) {
      return new Q(null, 2, 5, R, [a.g ? a.g(c, d, e) : a.call(null, c, d, e), b.g ? b.g(c, d, e) : b.call(null, c, d, e)], null);
    }
    function d(c, d) {
      return new Q(null, 2, 5, R, [a.c ? a.c(c, d) : a.call(null, c, d), b.c ? b.c(c, d) : b.call(null, c, d)], null);
    }
    function e(c) {
      return new Q(null, 2, 5, R, [a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c)], null);
    }
    function f() {
      return new Q(null, 2, 5, R, [a.o ? a.o() : a.call(null), b.o ? b.o() : b.call(null)], null);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new I(h, 0);
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
          return h.k(a, b, g, q);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.t = 3;
    g.r = h.r;
    g.o = f;
    g.b = e;
    g.c = d;
    g.g = c;
    g.k = h.k;
    return g;
  }();
}
function kf(a, b, c, d, e, f, g) {
  var h = ia;
  ia = null == ia ? null : ia - 1;
  try {
    if (null != ia && 0 > ia) {
      return mb(a, "#");
    }
    mb(a, c);
    if (0 === ta.b(f)) {
      G(g) && mb(a, function() {
        var a = lf.b(f);
        return A(a) ? a : "...";
      }());
    } else {
      if (G(g)) {
        var l = J(g);
        b.g ? b.g(l, a, f) : b.call(null, l, a, f);
      }
      for (var m = K(g), n = ta.b(f) - 1;;) {
        if (!m || null != n && 0 === n) {
          G(m) && 0 === n && (mb(a, d), mb(a, function() {
            var a = lf.b(f);
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
    ia = h;
  }
}
function mf(a, b) {
  for (var c = G(b), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.B(null, f);
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
var nf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function of(a) {
  return[E('"'), E(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return nf[a];
  })), E('"')].join("");
}
function pf(a, b, c) {
  if (null == a) {
    return mb(b, "nil");
  }
  if (void 0 === a) {
    return mb(b, "#\x3cundefined\x3e");
  }
  if (A(function() {
    var b = N(c, ra);
    return A(b) ? (b = a ? a.i & 131072 || a.Ab ? !0 : a.i ? !1 : B($a, a) : B($a, a)) ? Dc(a) : b : b;
  }())) {
    mb(b, "^");
    var d = Dc(a);
    qf.g ? qf.g(d, b, c) : qf.call(null, d, b, c);
    mb(b, " ");
  }
  return null == a ? mb(b, "nil") : a.Jb ? a.Ub(a, b, c) : a && (a.i & 2147483648 || a.ea) ? a.D(null, b, c) : (null == a ? null : a.constructor) === Boolean || "number" === typeof a ? mb(b, "" + E(a)) : null != a && a.constructor === Object ? (mb(b, "#js "), d = Kd.c(function(b) {
    return new Q(null, 2, 5, R, [dd.b(b), a[b]], null);
  }, Ic(a)), rf.q ? rf.q(d, qf, b, c) : rf.call(null, d, qf, b, c)) : va(a) ? kf(b, qf, "#js [", " ", "]", c, a) : A("string" == typeof a) ? A(pa.b(c)) ? mb(b, of(a)) : mb(b, a) : zc(a) ? mf(b, oc(["#\x3c", "" + E(a), "\x3e"], 0)) : a instanceof Date ? (d = function(a, b) {
    for (var c = "" + E(a);;) {
      if (sc(c) < b) {
        c = [E("0"), E(c)].join("");
      } else {
        return c;
      }
    }
  }, mf(b, oc(['#inst "', "" + E(a.getUTCFullYear()), "-", d(a.getUTCMonth() + 1, 2), "-", d(a.getUTCDate(), 2), "T", d(a.getUTCHours(), 2), ":", d(a.getUTCMinutes(), 2), ":", d(a.getUTCSeconds(), 2), ".", d(a.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : A(a instanceof RegExp) ? mf(b, oc(['#"', a.source, '"'], 0)) : (a ? a.i & 2147483648 || a.ea || (a.i ? 0 : B(nb, a)) : B(nb, a)) ? ob(a, b, c) : mf(b, oc(["#\x3c", "" + E(a), "\x3e"], 0));
}
function qf(a, b, c) {
  var d = sf.b(c);
  return A(d) ? (c = wc.g(c, tf, pf), d.g ? d.g(a, b, c) : d.call(null, a, b, c)) : pf(a, b, c);
}
function Id() {
  var a = 0 < arguments.length ? new I(Array.prototype.slice.call(arguments, 0), 0) : null, b = la(), c;
  if (Ec(a)) {
    c = "";
  } else {
    c = E;
    var d = b, b = new fa;
    a: {
      var e = a, a = new Fb(b);
      qf(J(e), a, d);
      for (var e = G(K(e)), f = null, g = 0, h = 0;;) {
        if (h < g) {
          var l = f.B(null, h);
          mb(a, " ");
          qf(l, a, d);
          h += 1;
        } else {
          if (e = G(e)) {
            f = e, Hc(f) ? (e = xb(f), g = yb(f), f = e, l = sc(e), e = g, g = l) : (l = J(f), mb(a, " "), qf(l, a, d), e = K(f), f = null, g = 0), h = 0;
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
function rf(a, b, c, d) {
  return kf(c, function(a, c, d) {
    var h = Ua(a);
    b.g ? b.g(h, c, d) : b.call(null, h, c, d);
    mb(c, " ");
    a = Va(a);
    return b.g ? b.g(a, c, d) : b.call(null, a, c, d);
  }, "{", ", ", "}", d, G(a));
}
I.prototype.ea = !0;
I.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
fd.prototype.ea = !0;
fd.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
Ve.prototype.ea = !0;
Ve.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
ue.prototype.ea = !0;
ue.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
ge.prototype.ea = !0;
ge.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
cd.prototype.ea = !0;
cd.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
Ze.prototype.ea = !0;
Ze.prototype.D = function(a, b, c) {
  return rf(this, qf, b, c);
};
Xe.prototype.ea = !0;
Xe.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
ke.prototype.ea = !0;
ke.prototype.D = function(a, b, c) {
  return kf(b, qf, "[", " ", "]", c, this);
};
jd.prototype.ea = !0;
jd.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
Dd.prototype.ea = !0;
Dd.prototype.D = function(a, b, c) {
  mb(b, "#\x3cAtom: ");
  qf(this.state, b, c);
  return mb(b, "\x3e");
};
df.prototype.ea = !0;
df.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
Q.prototype.ea = !0;
Q.prototype.D = function(a, b, c) {
  return kf(b, qf, "[", " ", "]", c, this);
};
ad.prototype.ea = !0;
ad.prototype.D = function(a, b) {
  return mb(b, "()");
};
z.prototype.ea = !0;
z.prototype.D = function(a, b, c) {
  return rf(this, qf, b, c);
};
ff.prototype.ea = !0;
ff.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
cf.prototype.ea = !0;
cf.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
$c.prototype.ea = !0;
$c.prototype.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
function uf(a) {
  a *= Math.random.o ? Math.random.o() : Math.random.call(null);
  return Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a);
}
var vf = null;
function wf() {
  if (null == vf) {
    var a = new z(null, 3, [xf, S, yf, S, zf, S], null);
    vf = P ? P(a) : Ed.call(null, a);
  }
  return vf;
}
function Af(a, b, c) {
  var d = Wb.c(b, c);
  if (!d && !(d = Nc(zf.b(a).call(null, b), c)) && (d = Gc(c)) && (d = Gc(b))) {
    if (d = sc(c) === sc(b)) {
      for (var e = !0, f = 0;;) {
        if (e && f !== sc(c)) {
          e = Af(a, function() {
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
function Bf(a) {
  var b;
  b = wf();
  b = L.b ? L.b(b) : L.call(null, b);
  return xd(N(xf.b(b), a));
}
function Cf(a, b, c, d) {
  Jd.c(a, function() {
    return L.b ? L.b(b) : L.call(null, b);
  });
  Jd.c(c, function() {
    return L.b ? L.b(d) : L.call(null, d);
  });
}
var Df = function Df(b, c, d) {
  var e = (L.b ? L.b(d) : L.call(null, d)).call(null, b), e = A(A(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
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
    d = L.b ? L.b(d) : L.call(null, d);
    a = c(d, a, b);
  }
  return a;
}
var Ff = function Ff(b, c, d, e, f, g, h) {
  var l = Pc(function(e, g) {
    var h = M(g, 0);
    M(g, 1);
    if (Af(L.b ? L.b(d) : L.call(null, d), c, h)) {
      var l;
      l = (l = null == e) ? l : Ef(h, J(e), f);
      l = A(l) ? g : e;
      if (!A(Ef(J(l), h, f))) {
        throw Error([E("Multiple methods in multimethod '"), E(b), E("' match dispatch value: "), E(c), E(" -\x3e "), E(h), E(" and "), E(J(l)), E(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, L.b ? L.b(e) : L.call(null, e));
  if (A(l)) {
    if (Wb.c(L.b ? L.b(h) : L.call(null, h), L.b ? L.b(d) : L.call(null, d))) {
      return Jd.q(g, wc, c, J(K(l))), J(K(l));
    }
    Cf(g, e, h, d);
    return Ff(b, c, d, e, f, g, h);
  }
  return null;
};
function V(a, b) {
  throw Error([E("No method in multimethod '"), E(a), E("' for dispatch value: "), E(b)].join(""));
}
function Gf(a, b, c, d, e, f, g, h) {
  this.name = a;
  this.f = b;
  this.Kb = c;
  this.hb = d;
  this.Ua = e;
  this.Lb = f;
  this.ib = g;
  this.Va = h;
  this.i = 4194305;
  this.s = 4352;
}
k = Gf.prototype;
k.call = function() {
  function a(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H, U) {
    a = this;
    var ma = wd(a.f, b, c, d, e, oc([f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H, U], 0)), vg = Z(this, ma);
    A(vg) || V(a.name, ma);
    return wd(vg, b, c, d, e, oc([f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H, U], 0));
  }
  function b(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H) {
    a = this;
    var U = a.f.Z ? a.f.Z(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H), ma = Z(this, U);
    A(ma) || V(a.name, U);
    return ma.Z ? ma.Z(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H) : ma.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D, H);
  }
  function c(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D) {
    a = this;
    var H = a.f.Y ? a.f.Y(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D), U = Z(this, H);
    A(U) || V(a.name, H);
    return U.Y ? U.Y(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D) : U.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w, D);
  }
  function d(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w) {
    a = this;
    var D = a.f.X ? a.f.X(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w), H = Z(this, D);
    A(H) || V(a.name, D);
    return H.X ? H.X(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w) : H.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x, w);
  }
  function e(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x) {
    a = this;
    var w = a.f.W ? a.f.W(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x), D = Z(this, w);
    A(D) || V(a.name, w);
    return D.W ? D.W(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x) : D.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y, x);
  }
  function f(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y) {
    a = this;
    var x = a.f.V ? a.f.V(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y), w = Z(this, x);
    A(w) || V(a.name, x);
    return w.V ? w.V(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y) : w.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u, y);
  }
  function g(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u) {
    a = this;
    var y = a.f.U ? a.f.U(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u), x = Z(this, y);
    A(x) || V(a.name, y);
    return x.U ? x.U(b, c, d, e, f, g, h, l, n, m, p, q, r, t, u) : x.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t, u);
  }
  function h(a, b, c, d, e, f, g, h, l, n, m, p, q, r, t) {
    a = this;
    var u = a.f.T ? a.f.T(b, c, d, e, f, g, h, l, n, m, p, q, r, t) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t), y = Z(this, u);
    A(y) || V(a.name, u);
    return y.T ? y.T(b, c, d, e, f, g, h, l, n, m, p, q, r, t) : y.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r, t);
  }
  function l(a, b, c, d, e, f, g, h, l, n, m, p, q, r) {
    a = this;
    var t = a.f.S ? a.f.S(b, c, d, e, f, g, h, l, n, m, p, q, r) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r), u = Z(this, t);
    A(u) || V(a.name, t);
    return u.S ? u.S(b, c, d, e, f, g, h, l, n, m, p, q, r) : u.call(null, b, c, d, e, f, g, h, l, n, m, p, q, r);
  }
  function m(a, b, c, d, e, f, g, h, l, n, m, p, q) {
    a = this;
    var r = a.f.R ? a.f.R(b, c, d, e, f, g, h, l, n, m, p, q) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p, q), t = Z(this, r);
    A(t) || V(a.name, r);
    return t.R ? t.R(b, c, d, e, f, g, h, l, n, m, p, q) : t.call(null, b, c, d, e, f, g, h, l, n, m, p, q);
  }
  function n(a, b, c, d, e, f, g, h, l, n, m, p) {
    a = this;
    var q = a.f.Q ? a.f.Q(b, c, d, e, f, g, h, l, n, m, p) : a.f.call(null, b, c, d, e, f, g, h, l, n, m, p), r = Z(this, q);
    A(r) || V(a.name, q);
    return r.Q ? r.Q(b, c, d, e, f, g, h, l, n, m, p) : r.call(null, b, c, d, e, f, g, h, l, n, m, p);
  }
  function p(a, b, c, d, e, f, g, h, l, n, m) {
    a = this;
    var p = a.f.P ? a.f.P(b, c, d, e, f, g, h, l, n, m) : a.f.call(null, b, c, d, e, f, g, h, l, n, m), q = Z(this, p);
    A(q) || V(a.name, p);
    return q.P ? q.P(b, c, d, e, f, g, h, l, n, m) : q.call(null, b, c, d, e, f, g, h, l, n, m);
  }
  function q(a, b, c, d, e, f, g, h, l, n) {
    a = this;
    var m = a.f.ca ? a.f.ca(b, c, d, e, f, g, h, l, n) : a.f.call(null, b, c, d, e, f, g, h, l, n), p = Z(this, m);
    A(p) || V(a.name, m);
    return p.ca ? p.ca(b, c, d, e, f, g, h, l, n) : p.call(null, b, c, d, e, f, g, h, l, n);
  }
  function r(a, b, c, d, e, f, g, h, l) {
    a = this;
    var n = a.f.ba ? a.f.ba(b, c, d, e, f, g, h, l) : a.f.call(null, b, c, d, e, f, g, h, l), m = Z(this, n);
    A(m) || V(a.name, n);
    return m.ba ? m.ba(b, c, d, e, f, g, h, l) : m.call(null, b, c, d, e, f, g, h, l);
  }
  function t(a, b, c, d, e, f, g, h) {
    a = this;
    var l = a.f.aa ? a.f.aa(b, c, d, e, f, g, h) : a.f.call(null, b, c, d, e, f, g, h), n = Z(this, l);
    A(n) || V(a.name, l);
    return n.aa ? n.aa(b, c, d, e, f, g, h) : n.call(null, b, c, d, e, f, g, h);
  }
  function u(a, b, c, d, e, f, g) {
    a = this;
    var h = a.f.$ ? a.f.$(b, c, d, e, f, g) : a.f.call(null, b, c, d, e, f, g), l = Z(this, h);
    A(l) || V(a.name, h);
    return l.$ ? l.$(b, c, d, e, f, g) : l.call(null, b, c, d, e, f, g);
  }
  function x(a, b, c, d, e, f) {
    a = this;
    var g = a.f.v ? a.f.v(b, c, d, e, f) : a.f.call(null, b, c, d, e, f), h = Z(this, g);
    A(h) || V(a.name, g);
    return h.v ? h.v(b, c, d, e, f) : h.call(null, b, c, d, e, f);
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
  function U(a, b) {
    a = this;
    var c = a.f.b ? a.f.b(b) : a.f.call(null, b), d = Z(this, c);
    A(d) || V(a.name, c);
    return d.b ? d.b(b) : d.call(null, b);
  }
  function ma(a) {
    a = this;
    var b = a.f.o ? a.f.o() : a.f.call(null), c = Z(this, b);
    A(c) || V(a.name, b);
    return c.o ? c.o() : c.call(null);
  }
  var w = null, w = function(w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb, Jb, uc, vd, Oe) {
    switch(arguments.length) {
      case 1:
        return ma.call(this, w);
      case 2:
        return U.call(this, w, T);
      case 3:
        return H.call(this, w, T, W);
      case 4:
        return D.call(this, w, T, W, X);
      case 5:
        return y.call(this, w, T, W, X, Y);
      case 6:
        return x.call(this, w, T, W, X, Y, ca);
      case 7:
        return u.call(this, w, T, W, X, Y, ca, ga);
      case 8:
        return t.call(this, w, T, W, X, Y, ca, ga, ka);
      case 9:
        return r.call(this, w, T, W, X, Y, ca, ga, ka, oa);
      case 10:
        return q.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa);
      case 11:
        return p.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua);
      case 12:
        return n.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za);
      case 13:
        return m.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga);
      case 14:
        return l.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na);
      case 15:
        return h.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb);
      case 16:
        return g.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab);
      case 17:
        return f.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb);
      case 18:
        return e.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb);
      case 19:
        return d.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb, Jb);
      case 20:
        return c.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb, Jb, uc);
      case 21:
        return b.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb, Jb, uc, vd);
      case 22:
        return a.call(this, w, T, W, X, Y, ca, ga, ka, oa, qa, ua, za, Ga, Na, Yb, ab, fb, wb, Jb, uc, vd, Oe);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  w.b = ma;
  w.c = U;
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
  w.U = h;
  w.V = g;
  w.W = f;
  w.X = e;
  w.Y = d;
  w.Z = c;
  w.lb = b;
  w.Ma = a;
  return w;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.o = function() {
  var a = this.f.o ? this.f.o() : this.f.call(null), b = Z(this, a);
  A(b) || V(this.name, a);
  return b.o ? b.o() : b.call(null);
};
k.b = function(a) {
  var b = this.f.b ? this.f.b(a) : this.f.call(null, a), c = Z(this, b);
  A(c) || V(this.name, b);
  return c.b ? c.b(a) : c.call(null, a);
};
k.c = function(a, b) {
  var c = this.f.c ? this.f.c(a, b) : this.f.call(null, a, b), d = Z(this, c);
  A(d) || V(this.name, c);
  return d.c ? d.c(a, b) : d.call(null, a, b);
};
k.g = function(a, b, c) {
  var d = this.f.g ? this.f.g(a, b, c) : this.f.call(null, a, b, c), e = Z(this, d);
  A(e) || V(this.name, d);
  return e.g ? e.g(a, b, c) : e.call(null, a, b, c);
};
k.q = function(a, b, c, d) {
  var e = this.f.q ? this.f.q(a, b, c, d) : this.f.call(null, a, b, c, d), f = Z(this, e);
  A(f) || V(this.name, e);
  return f.q ? f.q(a, b, c, d) : f.call(null, a, b, c, d);
};
k.v = function(a, b, c, d, e) {
  var f = this.f.v ? this.f.v(a, b, c, d, e) : this.f.call(null, a, b, c, d, e), g = Z(this, f);
  A(g) || V(this.name, f);
  return g.v ? g.v(a, b, c, d, e) : g.call(null, a, b, c, d, e);
};
k.$ = function(a, b, c, d, e, f) {
  var g = this.f.$ ? this.f.$(a, b, c, d, e, f) : this.f.call(null, a, b, c, d, e, f), h = Z(this, g);
  A(h) || V(this.name, g);
  return h.$ ? h.$(a, b, c, d, e, f) : h.call(null, a, b, c, d, e, f);
};
k.aa = function(a, b, c, d, e, f, g) {
  var h = this.f.aa ? this.f.aa(a, b, c, d, e, f, g) : this.f.call(null, a, b, c, d, e, f, g), l = Z(this, h);
  A(l) || V(this.name, h);
  return l.aa ? l.aa(a, b, c, d, e, f, g) : l.call(null, a, b, c, d, e, f, g);
};
k.ba = function(a, b, c, d, e, f, g, h) {
  var l = this.f.ba ? this.f.ba(a, b, c, d, e, f, g, h) : this.f.call(null, a, b, c, d, e, f, g, h), m = Z(this, l);
  A(m) || V(this.name, l);
  return m.ba ? m.ba(a, b, c, d, e, f, g, h) : m.call(null, a, b, c, d, e, f, g, h);
};
k.ca = function(a, b, c, d, e, f, g, h, l) {
  var m = this.f.ca ? this.f.ca(a, b, c, d, e, f, g, h, l) : this.f.call(null, a, b, c, d, e, f, g, h, l), n = Z(this, m);
  A(n) || V(this.name, m);
  return n.ca ? n.ca(a, b, c, d, e, f, g, h, l) : n.call(null, a, b, c, d, e, f, g, h, l);
};
k.P = function(a, b, c, d, e, f, g, h, l, m) {
  var n = this.f.P ? this.f.P(a, b, c, d, e, f, g, h, l, m) : this.f.call(null, a, b, c, d, e, f, g, h, l, m), p = Z(this, n);
  A(p) || V(this.name, n);
  return p.P ? p.P(a, b, c, d, e, f, g, h, l, m) : p.call(null, a, b, c, d, e, f, g, h, l, m);
};
k.Q = function(a, b, c, d, e, f, g, h, l, m, n) {
  var p = this.f.Q ? this.f.Q(a, b, c, d, e, f, g, h, l, m, n) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n), q = Z(this, p);
  A(q) || V(this.name, p);
  return q.Q ? q.Q(a, b, c, d, e, f, g, h, l, m, n) : q.call(null, a, b, c, d, e, f, g, h, l, m, n);
};
k.R = function(a, b, c, d, e, f, g, h, l, m, n, p) {
  var q = this.f.R ? this.f.R(a, b, c, d, e, f, g, h, l, m, n, p) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p), r = Z(this, q);
  A(r) || V(this.name, q);
  return r.R ? r.R(a, b, c, d, e, f, g, h, l, m, n, p) : r.call(null, a, b, c, d, e, f, g, h, l, m, n, p);
};
k.S = function(a, b, c, d, e, f, g, h, l, m, n, p, q) {
  var r = this.f.S ? this.f.S(a, b, c, d, e, f, g, h, l, m, n, p, q) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q), t = Z(this, r);
  A(t) || V(this.name, r);
  return t.S ? t.S(a, b, c, d, e, f, g, h, l, m, n, p, q) : t.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q);
};
k.T = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r) {
  var t = this.f.T ? this.f.T(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r), u = Z(this, t);
  A(u) || V(this.name, t);
  return u.T ? u.T(a, b, c, d, e, f, g, h, l, m, n, p, q, r) : u.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r);
};
k.U = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) {
  var u = this.f.U ? this.f.U(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t), x = Z(this, u);
  A(x) || V(this.name, u);
  return x.U ? x.U(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t) : x.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t);
};
k.V = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) {
  var x = this.f.V ? this.f.V(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u), y = Z(this, x);
  A(y) || V(this.name, x);
  return y.V ? y.V(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u) : y.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u);
};
k.W = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) {
  var y = this.f.W ? this.f.W(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x), D = Z(this, y);
  A(D) || V(this.name, y);
  return D.W ? D.W(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x) : D.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x);
};
k.X = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) {
  var D = this.f.X ? this.f.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y), H = Z(this, D);
  A(H) || V(this.name, D);
  return H.X ? H.X(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y) : H.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y);
};
k.Y = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) {
  var H = this.f.Y ? this.f.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D), U = Z(this, H);
  A(U) || V(this.name, H);
  return U.Y ? U.Y(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D) : U.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D);
};
k.Z = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) {
  var U = this.f.Z ? this.f.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) : this.f.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H), ma = Z(this, U);
  A(ma) || V(this.name, U);
  return ma.Z ? ma.Z(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H) : ma.call(null, a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H);
};
k.lb = function(a, b, c, d, e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U) {
  var ma = wd(this.f, a, b, c, d, oc([e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U], 0)), w = Z(this, ma);
  A(w) || V(this.name, ma);
  return wd(w, a, b, c, d, oc([e, f, g, h, l, m, n, p, q, r, t, u, x, y, D, H, U], 0));
};
function Hf(a, b, c) {
  Jd.q(a.Ua, wc, b, c);
  Cf(a.ib, a.Ua, a.Va, a.hb);
}
function Z(a, b) {
  Wb.c(function() {
    var b = a.Va;
    return L.b ? L.b(b) : L.call(null, b);
  }(), function() {
    var b = a.hb;
    return L.b ? L.b(b) : L.call(null, b);
  }()) || Cf(a.ib, a.Ua, a.Va, a.hb);
  var c = function() {
    var b = a.ib;
    return L.b ? L.b(b) : L.call(null, b);
  }().call(null, b);
  if (A(c)) {
    return c;
  }
  c = Ff(a.name, b, a.hb, a.Ua, a.Lb, a.ib, a.Va);
  return A(c) ? c : function() {
    var b = a.Ua;
    return L.b ? L.b(b) : L.call(null, b);
  }().call(null, a.Kb);
}
k.Oa = function() {
  return Ab(this.name);
};
k.Pa = function() {
  return Bb(this.name);
};
k.C = function() {
  return this[aa] || (this[aa] = ++ba);
};
var jf = new O(null, "p2", "p2", 905500641), If = new O(null, "r", "r", -471384190), ra = new O(null, "meta", "meta", 1499536964), sa = new O(null, "dup", "dup", 556298533), Jf = new O(null, "dir", "dir", 1734754661), Gd = new O(null, "validator", "validator", -1966190681), Kf = new O(null, "default", "default", -1987822328), Lf = new O(null, "th1", "th1", 583362347), Mf = new O(null, "type", "type", 1174270348), Nf = new O(null, "th2", "th2", 1996173036), tf = new O(null, "fallback-impl", "fallback-impl", 
-1501286995), na = new O(null, "flush-on-newline", "flush-on-newline", -151457939), Of = new O(null, "segments", "segments", 1937535949), hf = new O(null, "p1", "p1", -936759954), Pf = new O(null, "targets", "targets", 2014963406), Qf = new O(null, "walls", "walls", -268788818), yf = new O(null, "descendants", "descendants", 1824886031), Rf = new O("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), zf = new O(null, "ancestors", "ancestors", -776045424), Sf = new O(null, "level", 
"level", 1290497552), Tf = new O(null, "turn", "turn", 75759344), pa = new O(null, "readably", "readably", 1129599760), lf = new O(null, "more-marker", "more-marker", -14717935), Uf = new O(null, "head", "head", -771383919), Vf = new O(null, "c", "c", -1763192079), Wf = new O(null, "stop", "stop", -2140911342), ta = new O(null, "print-length", "print-length", 1931866356), Xf = new O(null, "tail", "tail", -1146023564), xf = new O(null, "parents", "parents", -2027538891), Yf = new O(null, "length", 
"length", 588987862), Zf = new O(null, "right", "right", -452581833), $f = new O(null, "target-length", "target-length", 208661657), ag = new O(null, "hierarchy", "hierarchy", -1053470341), sf = new O(null, "alt-impl", "alt-impl", 670969595), bg = new O("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), cg = new O(null, "left", "left", -399115937);
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
  return 33 !== a.a.length;
}
function fg(a) {
  a = a.a[32];
  return a[a[32] - 1];
}
function gg(a, b, c) {
  for (;;) {
    if (A(eg(a))) {
      return c >> 5 > 1 << b;
    }
    var d = a.a[32];
    c = d[32];
    var e = 32 === c;
    if (e) {
      if (e = 5 === b) {
        return e;
      }
      b -= 5;
      d = d[31] - d[30] + 32;
      a = a.a[c - 1];
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
        return c.a;
      }
      if (A(eg(c))) {
        for (c = c.a[a >> b & 31], b -= 5;;) {
          if (0 === b) {
            return c.a;
          }
          d = b - 5;
          c = c.a[a >> b & 31];
          b = d;
        }
      } else {
        d = c.a[32];
        a: {
          for (e = a >> b & 31;;) {
            if (a < d[e]) {
              break a;
            }
            e += 1;
          }
        }
        c = c.a[e];
        b -= 5;
        a = 0 < e ? a - d[e - 1] : a;
      }
    }
  } else {
    return Wd(e, a);
  }
}
function ig(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Qd(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = Qd(b, f);
      f[0] = d;
      f[32] = h;
      h[32] = 1;
      h[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var jg = function jg(b, c, d, e, f) {
  if (A(eg(e))) {
    for (var g = Aa(e.a), g = e = Qd(e.l, g);;) {
      var g = g.a, h = c - 1 >> b & 31;
      if (5 === b) {
        g[h] = f;
      } else {
        var l = g[h];
        if (A(l)) {
          l = Aa(l.a);
          l = Qd(d, l);
          g[h] = l;
          b -= 5;
          g = l;
          continue;
        } else {
          g[h] = ig(f.a, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = Aa(e.a);
    c = e.a[32];
    h = c[32] - 1;
    e = Qd(e.l, g);
    if (5 === b) {
      l = null;
    } else {
      var l = g[h], m = 0 < h ? c[h] - c[h - 1] : c[0], l = m !== 1 << b ? jg(b - 5, m + 1, d, l, f) : null
    }
    A(l) ? (g[h] = l, c[h] += 32) : (g[h + 1] = ig(f.a, d, b - 5, f), c[h + 1] = c[h] + 32, c[32] += 1);
  }
  return e;
}, kg = function kg(b, c, d, e) {
  if (A(eg(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = kg(b - 5, c, d, e.a[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = Aa(e.a);
      e[f] = b;
      return Qd(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = Aa(e.a);
    e[f] = null;
    return Qd(d, e);
  }
  var g = e.a[32];
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
    var h = e.a[f];
    b = kg(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, h);
    if (null == b && 0 === f) {
      return null;
    }
    A(eg(h)) ? (e = Aa(e.a), c[f] -= 32) : (g = fg(h) - (A(b) ? fg(b) : 0), e = Aa(e.a), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return Qd(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = Aa(e.a);
  b = Aa(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return Qd(d, e);
}, lg = function lg(b, c, d, e) {
  if (A(eg(c))) {
    for (var f = c = new Pd(c.l, Aa(c.a));;) {
      if (0 === b) {
        f.a[d & 31] = e;
        break;
      } else {
        var f = f.a, g = d >> b & 31, h;
        h = f[g];
        h = new Pd(h.l, Aa(h.a));
        f = f[g] = h;
        b -= 5;
      }
    }
    return c;
  }
  f = Aa(c.a);
  g = c.a[32];
  a: {
    for (h = d >> b & 31;;) {
      if (d < (g[h] | 0)) {
        break a;
      }
      h += 1;
    }
  }
  f[h] = lg(b - 5, f[h], 0 === h ? d : d - g[h - 1], e);
  return Qd(c.l, f);
};
function mg(a, b) {
  if (b.l === a) {
    return b;
  }
  var c = Aa(b.a);
  33 === c.length && (c[32] = Aa(c[32]));
  return new Pd(a, c);
}
var ng = function ng(b, c, d, e, f) {
  e = mg(d, e);
  if (A(eg(e))) {
    for (var g = e;;) {
      var g = g.a, h = c - 1 >> b & 31;
      if (5 === b) {
        g[h] = f;
      } else {
        var l = g[h];
        if (null == l) {
          g[h] = ig(f.a, d, b - 5, f);
        } else {
          l = mg(d, l);
          g[h] = l;
          b -= 5;
          g = l;
          continue;
        }
      }
      break;
    }
  } else {
    c = e.a;
    g = e.a[32];
    h = g[32] - 1;
    if (5 === b) {
      l = null;
    } else {
      var l = mg(d, c[h]), m = 0 < h ? g[h] - g[h - 1] : g[0], l = m !== 1 << b ? ng(b - 5, m + 1, d, l, f) : null
    }
    A(l) ? (c[h] = l, g[h] += 32) : (c[h + 1] = ig(f.a, d, b - 5, f), g[h + 1] = g[h] + 32, g[32] += 1);
  }
  return e;
}, og = function og(b, c, d, e, f) {
  d = mg(c, d);
  if (A(eg(d))) {
    for (var g = d;;) {
      if (0 === b) {
        g.a[e & 31] = f;
        break;
      } else {
        var g = g.a, h = e >> b & 31, l = mg(c, g[h]), g = g[h] = l;
        b -= 5;
      }
    }
  } else {
    g = d.a;
    h = d.a[32];
    a: {
      for (l = e >> b & 31;;) {
        if (e < (h[l] | 0)) {
          break a;
        }
        l += 1;
      }
    }
    g[l] = og(b - 5, c, g[l], 0 === l ? e : e - h[l - 1], f);
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
  this.F = a;
  this.ga = b;
  this.j = c;
  this.w = d;
  this.h = e;
  this.m = f;
  this.i = 2179858668;
  this.s = 1536;
}
k = qg.prototype;
k.toString = function() {
  return Gb(this);
};
k.D = function(a, b, c) {
  return kf(b, qf, "(", " ", ")", c, this);
};
k.H = function() {
  return this.h;
};
k.ia = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = rg ? rg(a, b, c, d) : sg.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return zb(this);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zc(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.L = function() {
  return Cc(Vb, this.h);
};
k.M = function(a, b) {
  return ec(he(this.F, this.j + this.w, sc(this.F)), b);
};
k.N = function(a, b, c) {
  return fc(he(this.F, this.j + this.w, sc(this.F)), b, c);
};
k.fa = function() {
  return this.ga[this.w];
};
k.la = function() {
  if (this.w + 1 < this.ga.length) {
    var a;
    a = this.F;
    var b = this.ga, c = this.j, d = this.w + 1;
    a = rg ? rg(a, b, c, d) : sg.call(null, a, b, c, d);
    return null == a ? Vb : a;
  }
  return yb(this);
};
k.J = function() {
  return this;
};
k.Xa = function() {
  var a = this.ga;
  return new id(a, this.w, a.length);
};
k.Ya = function() {
  var a = this.ga.length, b;
  this.j + a < Ea(this.F) ? (b = this.F, a = this.j + a, b = tg ? tg(b, a, 0) : sg.call(null, b, a, 0)) : b = null;
  return null == b ? Vb : b;
};
k.K = function(a, b) {
  var c = this.F, d = this.ga, e = this.j, f = this.w;
  return ug ? ug(c, d, e, f, b) : sg.call(null, c, d, e, f, b);
};
k.I = function(a, b) {
  return mc(b, this);
};
k.Wa = function() {
  var a = this.ga.length, b;
  this.j + a < Ea(this.F) ? (b = this.F, a = this.j + a, b = tg ? tg(b, a, 0) : sg.call(null, b, a, 0)) : b = null;
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
var wg = function wg(b, c, d) {
  if (0 === c) {
    var e = b.a;
    b = Array(d);
    Jc(e, 0, b, 0, d);
  } else {
    var f = eg(b), g = wa(f) ? b.a[32] : null, h = d - 1 >> c & 31, l = A(f) ? h : function() {
      for (var b = h;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), m = A(f) ? function() {
      var b = Wc(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < l ? d - g[l - 1] : d, e = b.a, n = wg(e[l], c - 5, m), p = 5 === c ? 32 === n.a.length : eg(n);
    b = Array(A(A(f) ? p : f) ? 32 : 33);
    var q = A(p) ? function() {
      var b = Wc(m, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? n.a.length : fg(n);
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
  return Qd(null, b);
}, xg = function xg(b, c, d, e) {
  if (0 === c) {
    var f = b.a, g = f.length - d, h = Array(g);
    Jc(f, d, h, 0, g);
    return Qd(null, h);
  }
  var l = eg(b), f = b.a, m = wa(l) ? b.a[32] : null, n = d >> c & 31, p = A(l) ? n : function() {
    for (var b = n;;) {
      if (d < m[b]) {
        return b;
      }
      b += 1;
    }
  }(), h = A(l) ? function() {
    for (var b = p;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : m[32], q = xg(f[p], c - 5, 0 < p ? d - (A(l) ? p * (1 << c) : m[p - 1]) : d, function() {
    var b = 1 << c, d = 0 < p ? e - (A(l) ? p * (1 << c) : m[p - 1]) : e;
    return b < d ? b : d;
  }()), g = h - p, g = null == q ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (A(l)) {
    for (var h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 1 << c, u = 0, x = A(function() {
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
    for (h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], r = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], t = 0, u = p;;) {
      if (t < g) {
        r[t] = m[u] - d, u += 1, t += 1;
      } else {
        break;
      }
    }
  }
  r[32] = g;
  Jc(f, null == q ? p + 1 : p, h, 0, g);
  null != q && (h[0] = q);
  h[32] = r;
  return Qd(b.l, h);
};
function yg(a, b, c, d, e, f) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.h = e;
  this.m = f;
  this.i = 2315152159;
  this.s = 2052;
}
k = yg.prototype;
k.toString = function() {
  return Gb(this);
};
k.da = function(a, b) {
  return F.g(this, b, null);
};
k.G = function(a, b, c) {
  return F.g(this, b, c);
};
k.B = function(a, b) {
  if (0 <= b && b < this.d) {
    var c = this.d - this.n.length;
    if (c <= b) {
      return this.n[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.a;
        return f[c >> e & 31];
      }
      if (A(eg(d))) {
        for (f = d.a, d = c >> e & 31, f = f[d], e -= 5;;) {
          f = f.a;
          d = c >> e & 31;
          if (0 === e) {
            return f[d];
          }
          e -= 5;
          f = f[d];
        }
      } else {
        var f = d.a, g = d.a[32];
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
    return Wd(b, this.d);
  }
};
k.ha = function(a, b, c) {
  return 0 <= b && b < this.d ? F.c(this, b) : c;
};
k.D = function(a, b, c) {
  return kf(b, qf, "[", " ", "]", c, this);
};
k.cb = function(a, b, c) {
  if (0 <= b && b < this.d) {
    var d = this.d - this.n.length;
    return b >= d ? (a = Array(this.n.length), b -= d, Jc(this.n, 0, a, 0, this.n.length), a[b] = c, new yg(this.d, this.shift, this.root, a, this.h, null)) : new yg(this.d, this.shift, lg(this.shift, this.root, b, c), this.n, this.h, null);
  }
  return b === this.d ? Ha(this, c) : Wd(b, this.d);
};
k.fb = function() {
  return this;
};
k.H = function() {
  return this.h;
};
k.O = function() {
  return this.d;
};
k.Za = function() {
  return F.c(this, 0);
};
k.$a = function() {
  return F.c(this, 1);
};
k.Fa = function() {
  if (0 === this.d) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.d) {
    return db(rc, this.h);
  }
  if (1 < this.n.length) {
    var a = Array(this.n.length - 1);
    Jc(this.n, 0, a, 0, a.length);
    return new yg(this.d - 1, this.shift, this.root, a, this.h, null);
  }
  var a = hg(this.d, this.shift, this.root, this.n, this.d - 2), b = kg(this.shift, this.d - this.n.length, this.root.l, this.root);
  return null == b ? new yg(this.d - 1, this.shift, R, a, this.h, null) : 5 < this.shift && null == b.a[1] ? new yg(this.d - 1, this.shift - 5, b.a[0], a, this.h, null) : new yg(this.d - 1, this.shift, b, a, this.h, null);
};
k.C = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Zc(this);
};
k.p = function(a, b) {
  return lc(this, b);
};
k.La = function() {
  var a = this.d, b = this.shift, c = new Pd({}, Aa(this.root.a)), d = this.n, e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Jc(d, 0, e, 0, d.length);
  d = this.n.length;
  return zg.v ? zg.v(a, b, c, e, d) : zg.call(null, a, b, c, e, d);
};
k.L = function() {
  return Cc(rc, this.h);
};
k.eb = function(a, b, c) {
  a = c - b;
  if (0 > b || c > this.d) {
    throw Error("vector index out of bounds");
  }
  if (b === c) {
    return null == this ? null : Fa(this);
  }
  if (b > c) {
    throw Error("start index greater than end index");
  }
  var d = this.d - this.n.length;
  if (b >= d) {
    return c = Array(a), Jc(this.n, b - d, c, 0, a), new yg(a, 5, R, c, this.h, null);
  }
  var e = c > d, f = e ? this.root : wg(this.root, this.shift, c);
  b = 0 === b ? f : xg(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), Jc(this.n, 0, d, 0, c), c = d) : c = hg(a, this.shift, b, [], a - 1);
  e = e ? b : kg(this.shift, a, b.l, b);
  if (null == e) {
    return new yg(a, 5, R, c, this.h, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.a[1]) {
      b -= 5, e = e.a[0];
    } else {
      return new yg(a, b, e, c, this.h, null);
    }
  }
};
k.M = function(a, b) {
  return ec(this, b);
};
k.N = function(a, b, c) {
  return fc(this, b, c);
};
k.Ea = function(a, b, c) {
  return Ya(this, b, c);
};
k.J = function() {
  return 0 === this.d ? null : 0 === this.d - this.n.length ? nc(this.n, 0) : tg(this, 0, 0);
};
k.K = function(a, b) {
  return new yg(this.d, this.shift, this.root, this.n, b, this.m);
};
k.I = function(a, b) {
  if (32 > this.n.length) {
    var c = this.n.length, d = Array(c + 1);
    Jc(this.n, 0, d, 0, c);
    d[c] = b;
    return new yg(this.d + 1, this.shift, this.root, d, this.h, null);
  }
  c = Qd(this.root.l, this.n);
  d = [null];
  d[0] = b;
  if (A(gg(this.root, this.shift, this.d))) {
    if (A(eg(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Qd(this.root.l, e), g = e;
      g[0] = this.root;
      g[1] = ig(this.n, this.root.l, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Qd(this.root.l, e), h = this.root.a[32][31];
      e[0] = this.root;
      e[1] = ig(this.n, this.root.l, this.shift, c);
      e[32] = g;
      g[0] = h;
      g[1] = h + 32;
      g[32] = 2;
    }
    return new yg(this.d + 1, this.shift + 5, f, d, this.h, null);
  }
  return new yg(this.d + 1, this.shift, jg(this.shift, this.d, this.root.l, this.root, c), d, this.h, null);
};
k.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.B(null, c);
      case 3:
        return this.ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.c = function(a, c) {
    return this.B(null, c);
  };
  a.g = function(a, c, d) {
    return this.ha(null, c, d);
  };
  return a;
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat(Aa(b)));
};
k.b = function(a) {
  return this.B(null, a);
};
k.c = function(a, b) {
  return this.ha(null, a, b);
};
Q.prototype.fb = function() {
  return new yg(sc(this), this.shift, this.root, this.n, Dc(this), null);
};
ke.prototype.fb = function() {
  var a = this.start, b = this.end;
  return dg(pg(this.qa), a, b);
};
function Ag(a, b, c, d, e) {
  this.d = a;
  this.shift = b;
  this.root = c;
  this.n = d;
  this.za = e;
  this.s = 88;
  this.i = 2;
}
k = Ag.prototype;
k.Qa = function(a, b) {
  if (this.root.l) {
    if (32 > this.za) {
      this.n[this.za] = b, this.d += 1, this.za += 1;
    } else {
      var c = Qd(this.root.l, this.n), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.n = d;
      this.za = 1;
      if (A(gg(this.root, this.shift, this.d))) {
        if (A(eg(this.root))) {
          var e = d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
          e[0] = this.root;
          e[1] = ig(this.n, this.root.l, this.shift, c);
          this.root = Qd(this.root.l, d);
        } else {
          var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = Qd(this.root.l, d), g = this.root.a[32][31];
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
k.Ra = function() {
  if (this.root.l) {
    this.root.l = null;
    var a = Array(this.za);
    Jc(this.n, 0, a, 0, this.za);
    return new yg(this.d, this.shift, this.root, a, null, null);
  }
  throw Error("persistent! called twice");
};
k.Ga = function(a, b, c) {
  return ub(this, b, c);
};
k.nb = function(a, b, c) {
  if (this.root.l) {
    return 0 <= b && b < this.d ? (a = this.d - this.za, a <= b ? this.n[b - a] = c : this.root = og(this.shift, this.root.l, this.root, b, c), this) : b === this.d ? rb(this, c) : Wd(b, this.d);
  }
  throw Error("assoc! after persistent!");
};
k.O = function() {
  if (this.root.l) {
    return this.d;
  }
  throw Error("count after persistent!");
};
function zg(a, b, c, d, e) {
  return new Ag(a, b, c, d, e);
}
;Q.prototype.eb = function(a, b, c) {
  return dg(pg(this), b, c);
};
ke.prototype.eb = function(a, b, c) {
  return dg(pg(this), b, c);
};
function Bg(a, b) {
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
      var h = e.B(null, g), c = M(h, 0), h = M(h, 1);
      a.lineTo(c, h);
      g += 1;
    } else {
      if (d = G(d)) {
        Hc(d) ? (e = xb(d), d = yb(d), c = e, f = sc(e), e = c) : (e = J(d), c = M(e, 0), h = M(e, 1), a.lineTo(c, h), d = K(d), e = null, f = 0), g = 0;
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
;var Lg = new Q(null, 3, 5, R, [new Q(null, 4, 5, R, [new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-415, 44], null), jf, new Q(null, 2, 5, R, [-415, -313], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-415, -313], null), jf, new Q(null, 2, 5, R, [-55, -313], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-51, 246], null), jf, new Q(null, 2, 5, R, [377, 246], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [377, 246], null), jf, new Q(null, 
2, 5, R, [377, -200], null)], null)], null), new Q(null, 8, 5, R, [new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-344, 341], null), jf, [-469, 341]], null), new z(null, 3, [Mf, bg, hf, [-469, 341], jf, [-469, -292]], null), new z(null, 3, [Mf, bg, hf, [-469, -292], jf, [-327, -292]], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-189, 340], null), jf, [261, 340]], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-203, -294], null), jf, [261, -294]], null), new z(null, 3, [Mf, 
bg, hf, new Q(null, 2, 5, R, [409, -293], null), jf, [541, -293]], null), new z(null, 3, [Mf, bg, hf, [541, -293], jf, [541, 327]], null), new z(null, 3, [Mf, bg, hf, [541, 327], jf, [420, 327]], null)], null), new Q(null, 10, 5, R, [new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-487, 145], null), jf, new Q(null, 2, 5, R, [-487, -206], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-487, -206], null), jf, [-241, -452]], null), new z(null, 3, [Mf, bg, hf, [-241, -452], jf, new Q(null, 
2, 5, R, [-5, -452], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-5, -452], null), jf, new Q(null, 2, 5, R, [-5, -280], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-190, 399], null), jf, new Q(null, 2, 5, R, [153, 399], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [153, 399], null), jf, new Q(null, 2, 5, R, [461, 399], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [461, 399], null), jf, new Q(null, 2, 5, R, [461, 120], 
null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [461, 120], null), jf, new Q(null, 2, 5, R, [261, 120], null)], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [318, -426], null), jf, [530, -214]], null), new z(null, 3, [Mf, bg, hf, new Q(null, 2, 5, R, [-508, 422], null), jf, [-235, 149]], null)], null)], null);
var Mg = 2 * Math.PI;
if ("undefined" === typeof Ng) {
  var Ng = function() {
    var a = P ? P(S) : Ed.call(null, S), b = P ? P(S) : Ed.call(null, S), c = P ? P(S) : Ed.call(null, S), d = P ? P(S) : Ed.call(null, S), e = vc(S, ag, wf());
    return new Gf(Tb("draw-segment"), function() {
      return function(a, b) {
        return Mf.b(b);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Ng, bg, function(a, b) {
  var c = Lc(b) ? sd(Fd, b) : b, d = N(c, hf), c = N(c, jf);
  return Ig.k(a, oc([d, c], 0));
});
Hf(Ng, Rf, function(a, b) {
  var c = Lc(b) ? sd(Fd, b) : b, d = N(c, Vf), e = N(c, Lf), f = N(c, Nf), g = N(c, Jf), c = N(c, If);
  return 0 > g ? Jg(a, d, c, f, e) : Jg(a, d, c, e, f);
});
if ("undefined" === typeof Og) {
  var Og = function() {
    var a = P ? P(S) : Ed.call(null, S), b = P ? P(S) : Ed.call(null, S), c = P ? P(S) : Ed.call(null, S), d = P ? P(S) : Ed.call(null, S), e = vc(S, ag, wf());
    return new Gf(Tb("update-seg"), function() {
      return function(a) {
        return Mf.b(a);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Og, bg, function(a, b, c) {
  a = Lc(a) ? sd(Fd, a) : a;
  var d = N(a, Jf);
  b = Eg(b, d);
  return Nd(a, Wb.c(c, Uf) ? jf : hf, Dg, b);
});
Hf(Og, Rf, function(a, b, c) {
  a = Lc(a) ? sd(Fd, a) : a;
  var d = N(a, Jf), e = N(a, If);
  b = b / e * d;
  return Nd(a, Wb.c(c, Uf) ? Nf : Lf, Uc, b);
});
function Pg(a, b) {
  return Nd(Og.g ? Og.g(a, b, Uf) : Og.call(null, a, b, Uf), Yf, Uc, b);
}
function Qg(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a;
  N(c, Mf);
  return Nd(Og.g ? Og.g(c, b, Xf) : Og.call(null, c, b, Xf), Yf, Vc, b);
}
function Rg(a, b) {
  for (var c = 0, d = b;;) {
    if (Wb.c(c, sc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < Yf.b(function() {
      var b = c;
      return a.b ? a.b(b) : a.call(null, b);
    }())) {
      return Bg(Nd(a, c, Qg, d), c);
    }
    var e = c + 1, d = d - Yf.b(function() {
      var b = c;
      return a.b ? a.b(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof Sg) {
  var Sg = function() {
    var a = P ? P(S) : Ed.call(null, S), b = P ? P(S) : Ed.call(null, S), c = P ? P(S) : Ed.call(null, S), d = P ? P(S) : Ed.call(null, S), e = vc(S, ag, wf());
    return new Gf(Tb("seg-normal"), function() {
      return function(a) {
        return Mf.b(a);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Sg, bg, function(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a, d = N(c, Jf), c = M(d, 0), d = M(d, 1);
  return Wb.c(b, cg) ? [-d, c] : [d, -c];
});
Hf(Sg, Rf, function(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a;
  N(c, Lf);
  var d = N(c, Nf), c = N(c, Jf) * (Wb.c(b, cg) ? -1 : 1);
  return Eg(c, new Q(null, 2, 5, R, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof Tg) {
  var Tg, Ug = P ? P(S) : Ed.call(null, S), Vg = P ? P(S) : Ed.call(null, S), Wg = P ? P(S) : Ed.call(null, S), Xg = P ? P(S) : Ed.call(null, S), Yg = vc(S, ag, wf());
  Tg = new Gf(Tb("seg-endpoint"), Mf, Kf, Yg, Ug, Vg, Wg, Xg);
}
Hf(Tg, bg, function(a) {
  return jf.b(a);
});
Hf(Tg, Rf, function(a) {
  var b = Lc(a) ? sd(Fd, a) : a;
  N(b, Lf);
  a = N(b, Nf);
  var c = N(b, Vf), b = N(b, If);
  return Dg(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Zg(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a, d = N(c, Of);
  return wc.g(c, Of, Wb.c(Yf.b(pc(d)), 0) ? qc.c(null == d ? null : Wa(d), b) : qc.c(d, b));
}
function $g(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a, d = N(c, Tf), e = N(c, Of);
  return Wb.c(d, b) ? c : Zg(wc.g(c, Tf, b), function() {
    switch(b instanceof O ? b.va : null) {
      case "left":
        var a = pc(e), c = function() {
          var c = a;
          return Sg.c ? Sg.c(c, b) : Sg.call(null, c, b);
        }(), d = M(c, 0), l = M(c, 1), c = Dg(function() {
          var b = a;
          return Tg.b ? Tg.b(b) : Tg.call(null, b);
        }(), Eg(20, c)), m = Math.atan2(-l, -d), d = m, l = Wb.c(b, cg) ? 1 : -1;
        return new z(null, 7, [Mf, Rf, Vf, c, Lf, m, Nf, d, Yf, 0, Jf, l, If, 20], null);
      case "right":
        return a = pc(e), c = function() {
          var c = a;
          return Sg.c ? Sg.c(c, b) : Sg.call(null, c, b);
        }(), d = M(c, 0), l = M(c, 1), c = Dg(function() {
          var b = a;
          return Tg.b ? Tg.b(b) : Tg.call(null, b);
        }(), Eg(20, c)), d = m = Math.atan2(-l, -d), l = Wb.c(b, cg) ? 1 : -1, new z(null, 7, [Mf, Rf, Vf, c, Lf, m, Nf, d, Yf, 0, Jf, l, If, 20], null);
      default:
        return d = pc(e), a = l = Lc(d) ? sd(Fd, d) : d, d = N(l, Nf), l = N(l, Jf), c = function() {
          var b = a;
          return Tg.b ? Tg.b(b) : Tg.call(null, b);
        }(), new z(null, 5, [Mf, bg, hf, c, jf, c, Yf, 0, Jf, Eg(l, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function ah(a) {
  var b = L.b ? L.b(bh) : L.call(null, bh);
  Kg(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280, f = a.canvas;
    a.clearRect(0, 0, f.width, f.height);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    d = G(Qf.b(b));
    c = null;
    for (f = e = 0;;) {
      if (f < e) {
        var g = c.B(null, f), h = a;
        Ng.c ? Ng.c(h, g) : Ng.call(null, h, g);
        f += 1;
      } else {
        if (d = G(d)) {
          Hc(d) ? (e = xb(d), d = yb(d), c = e, e = sc(e)) : (e = J(d), c = a, Ng.c ? Ng.c(c, e) : Ng.call(null, c, e), d = K(d), c = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    d = G(Pf.b(b));
    c = null;
    for (f = e = 0;;) {
      if (f < e) {
        h = c.B(null, f), M(h, 0), g = M(h, 1), h = a, Ng.c ? Ng.c(h, g) : Ng.call(null, h, g), f += 1;
      } else {
        if (d = G(d)) {
          Hc(d) ? (e = xb(d), d = yb(d), c = e, e = sc(e)) : (c = J(d), M(c, 0), e = M(c, 1), c = a, Ng.c ? Ng.c(c, e) : Ng.call(null, c, e), d = K(d), c = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    a: {
      for (d = Lc(b) ? sd(Fd, b) : b, d = N(d, Of), d = G(d), c = null, h = f = 0;;) {
        if (h < f) {
          e = c.B(null, h), g = a, Ng.c ? Ng.c(g, e) : Ng.call(null, g, e), h += 1;
        } else {
          if (d = G(d)) {
            Hc(d) ? (e = xb(d), d = yb(d), c = e, f = e = sc(e)) : (e = J(d), c = a, Ng.c ? Ng.c(c, e) : Ng.call(null, c, e), d = K(d), c = null, f = 0), h = 0;
          } else {
            break a;
          }
        }
      }
    }
    return null;
  });
}
function ch(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a, d = N(c, Lf), e = N(c, Nf), c = N(c, Jf);
  if (c * (e - d) > Mg) {
    return!0;
  }
  var f = Wc(b, Mg), d = Wc(d, Mg), e = Wc(e, Mg);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Mg : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Mg;
}
if ("undefined" === typeof Cd) {
  var Cd = function() {
    var a = P ? P(S) : Ed.call(null, S), b = P ? P(S) : Ed.call(null, S), c = P ? P(S) : Ed.call(null, S), d = P ? P(S) : Ed.call(null, S), e = vc(S, ag, wf());
    return new Gf(Tb("check-intersection"), function() {
      return function(a, b) {
        return new Q(null, 2, 5, R, [Mf.b(a), Mf.b(b)], null);
      };
    }(a, b, c, d, e), Kf, e, a, b, c, d);
  }()
}
Hf(Cd, new Q(null, 2, 5, R, [bg, bg], null), function(a, b) {
  var c, d = new Q(null, 2, 5, R, [hf.b(a), jf.b(a)], null);
  c = new Q(null, 2, 5, R, [hf.b(b), jf.b(b)], null);
  var e = M(d, 0), d = M(d, 1), f = M(c, 0), g = M(c, 1), d = Cg(d, e);
  c = M(d, 0);
  var d = M(d, 1), h = Cg(g, f), g = M(h, 0), h = M(h, 1), f = Cg(f, e), e = M(f, 0), f = M(f, 1), l = -1 * c * h - -1 * d * g;
  c = Wb.c(l, 0) ? null : new Q(null, 2, 5, R, [(h * e * -1 + g * f) / l, (-1 * d * e + c * f) / l], null);
  e = M(c, 0);
  d = M(c, 1);
  return A(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
Hf(Cd, new Q(null, 2, 5, R, [bg, Rf], null), function(a, b) {
  var c = Lc(a) ? sd(Fd, a) : a, d = N(c, hf), c = N(c, jf), e = Lc(b) ? sd(Fd, b) : b, f = N(e, If);
  var g = N(e, Vf), c = Cg(c, d), e = Fg(c, c), d = Cg(d, g), g = Fg(d, d), h = Fg(c, d), f = Math.pow(h, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-Fg(c, d) - g) / e, e = (-Fg(c, d) + g) / e, g = Gg(Dg(Eg(f, c), d)), c = Gg(Dg(Eg(e, c), d)), f = new Q(null, 4, 5, R, [f, e, g, c], null)) : f = null;
  g = M(f, 0);
  e = M(f, 1);
  d = M(f, 2);
  c = M(f, 3);
  return A(f) ? (d = (f = 0 < g && 1 > g) ? ch(b, d) : f, A(d) ? d : (e = 0 < e && 1 > e) ? ch(b, c) : e) : f;
});
Hf(Cd, new Q(null, 2, 5, R, [Rf, bg], null), function(a, b) {
  return Cd.c ? Cd.c(b, a) : Cd.call(null, b, a);
});
Hf(Cd, new Q(null, 2, 5, R, [Rf, Rf], null), function(a, b) {
  var c;
  var d = Vf.b(a), e = If.b(a);
  c = Vf.b(b);
  var f = If.b(b), g = Cg(c, d), d = M(g, 0);
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
function dh(a) {
  var b = Lc(a) ? sd(Fd, a) : a, c = N(b, Qf), d = N(b, Of), e = pc(d), f = null == d ? null : Wa(d);
  return zd(function(a) {
    return function(b) {
      return Cd.c ? Cd.c(a, b) : Cd.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), pd.c(c, A(xd(f)) ? null == f ? null : Wa(f) : f));
}
function eh(a) {
  var b = Lc(a) ? sd(Fd, a) : a, c = N(b, Pf), d = N(b, Of), e = pc(d);
  return Pc(function() {
    return function(a, b) {
      var c = M(b, 0);
      M(b, 1);
      return Nd(Nd(a, $f, Uc, 50), Pf, yc, c);
    };
  }(e, a, b, b, c, d), b, Ld(Ad(Bd(e), Be), c));
}
var fh = P ? P(null) : Ed.call(null, null);
function gh(a, b) {
  for (var c = Lc(b) ? sd(Fd, b) : b, d = N(c, Qf), e = a.canvas, f = e.width, g = e.height, h = uf(f) - f / 2, l = uf(g) - g / 2;;) {
    if (A(zd(function() {
      return function(a) {
        return 20 > a;
      };
    }(h, l, e, f, g, b, c, c, d), Kd.c(Ad(function(a, b) {
      return function(c) {
        var d = new Q(null, 2, 5, R, [a, b], null), e = M(c, 0);
        c = M(c, 1);
        c = Cg(c, e);
        var f = Fg(Cg(e, d), c) / Fg(c, c) * -1, f = 1 < f ? 1 : f, e = Cg(Dg(e, Eg(0 > f ? 0 : f, c)), d), d = M(e, 0), e = M(e, 1);
        return Math.sqrt(d * d + e * e);
      };
    }(h, l, e, f, g, b, c, c, d), gf()), d)))) {
      h = uf(f) - f / 2, l = uf(g) - g / 2;
    } else {
      return new Q(null, 2, 5, R, [h, l], null);
    }
  }
}
var hh = new Q(null, 1, 5, R, [new z(null, 5, [Yf, 100, Mf, bg, Jf, new Q(null, 2, 5, R, [1, 0], null), hf, new Q(null, 2, 5, R, [0, 0], null), jf, new Q(null, 2, 5, R, [100, 0], null)], null)], null);
function ih() {
  var a = new Q(null, 5, 5, R, [new Q(null, 2, 5, R, [-642, 482], null), new Q(null, 2, 5, R, [642, 482], null), new Q(null, 2, 5, R, [642, -482], null), new Q(null, 2, 5, R, [-642, -482], null), new Q(null, 2, 5, R, [-642, 482], null)], null);
  return Kd.g(function(a, c) {
    return new z(null, 3, [Mf, bg, hf, a, jf, c], null);
  }, a, Ub(a));
}
function jh(a, b) {
  return Pc(function(a, d) {
    return Od(a, Pf, wc, d, new z(null, 6, [Mf, Rf, Vf, gh(b, a), Lf, 0, Nf, Mg, Jf, 1, If, 10], null));
  }, wc.k(a, Of, hh, oc([Yf, 100, $f, 100, Tf, null, Pf, S, Qf, pd.c(ih(), function() {
    var b = Sf.b(a);
    return Lg.b ? Lg.b(b) : Lg.call(null, b);
  }()), Wf, !1], 0)), new ff(null, 0, 10, 1, null));
}
var bh, kh = new z(null, 1, [Sf, 0], null);
bh = P ? P(kh) : Ed.call(null, kh);
var lh = document.createElement("button");
lh.textContent = "Pause";
var mh, nh, oh = Xc(3 * (window.innerWidth - 20), 4);
nh = 1280 < oh ? 1280 : oh;
var ph = Xc(4 * (window.innerHeight - 10), 3);
mh = nh < ph ? nh : ph;
var qh = Xc(3 * mh, 4), rh = document.createElement("canvas");
A(mh) && rh.setAttribute("width", mh);
A(qh) && rh.setAttribute("height", qh);
rh.setAttribute("style", "border: 1px solid #000; display: block;");
var sh = document.createElement("div"), th = rh.getContext("2d");
function uh(a) {
  a: {
    var b = Kd.c(E, a);
    a = new fa;
    for (b = G(b);;) {
      if (b) {
        a.append("" + E(J(b))), b = K(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  sh.textContent = a;
}
var vh = function vh(b) {
  lh.textContent = "Pause";
  return lh.onclick = function() {
    Jd.q(bh, wc, Wf, !0);
    lh.textContent = "Go";
    return lh.onclick = function() {
      Jd.q(bh, wc, Wf, !1);
      wh.b ? wh.b(b) : wh.call(null, b);
      return vh(b);
    };
  };
};
function xh(a) {
  lh.textContent = "Start";
  return lh.onclick = function() {
    uh(oc(["Press A and D to turn left and right."], 0));
    Jd.g(bh, jh, a);
    wh.b ? wh.b(a) : wh.call(null, a);
    return vh(a);
  };
}
function wh(a) {
  window.onkeydown = function(a) {
    a = (new z(null, 2, [65, cg, 68, Zf], null)).call(null, a.which);
    return A(a) ? Jd.g(bh, $g, a) : null;
  };
  window.onkeyup = function(a) {
    a = (new z(null, 2, [65, cg, 68, Zf], null)).call(null, a.which);
    return A(a) ? Wb.c(a, Tf.b(L.b ? L.b(bh) : L.call(null, bh))) ? Jd.g(bh, $g, null) : null : null;
  };
  return function(b) {
    return function d() {
      if (wa(Wf.b(L.b ? L.b(bh) : L.call(null, bh)))) {
        var e = Jd.c(bh, function() {
          return function(a) {
            var b;
            b = $f.b(a);
            a = Lc(a) ? sd(Fd, a) : a;
            var d = N(a, Of), e = N(a, Yf), m = sc(d) - 1, n = e + 3 - b, d = Nd(d, m, Pg, 3);
            b = wc.k(a, Of, 0 < n ? Rg(d, n) : d, oc([Yf, Math.min(e + 3, b)], 0));
            return eh(b);
          };
        }(b));
        if (A(dh(e))) {
          return uh(oc(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0)), e = L.b ? L.b(bh) : L.call(null, bh), Hd.c ? Hd.c(fh, e) : Hd.call(null, fh, e), xh(a), b();
        }
        if (Ec(Pf.b(e))) {
          return uh(oc(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0)), Jd.c(bh, function() {
            return function(a) {
              return wc.g(a, Sf, Wc(Sf.b(a) + 1, sc(Lg)));
            };
          }(e, b)), xh(a), b();
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
(function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(lh);
    a.appendChild(sh);
    return a;
  }());
  a.appendChild(rh);
  uh(oc(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return xh(th);
})();
document.querySelector("body").innerHTML = "";
var yh = document.createElement("canvas");
yh.setAttribute("width", 1280);
yh.setAttribute("height", 960);
yh.setAttribute("style", "border: 1px solid #000");
yh.getContext("2d");
document.querySelector("body").appendChild(yh);
var zh = new Q(null, 2, 5, R, [0, 0], null);
P || Ed.call(null, zh);

})();
