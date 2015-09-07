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
var l, aa = this;
function ba(a, b) {
  var c = a.split("."), d = aa;
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
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a) {
  return Array.prototype.join.call(arguments, "");
}
;function fa(a, b) {
  null != a && this.append.apply(this, arguments);
}
l = fa.prototype;
l.la = "";
l.set = function(a) {
  this.la = "" + a;
};
l.append = function(a, b, c) {
  this.la += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.la += arguments[d];
    }
  }
  return this;
};
l.clear = function() {
  this.la = "";
};
l.toString = function() {
  return this.la;
};
var q = {};
if ("undefined" === typeof ga) {
  var ga = function() {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
}
if ("undefined" === typeof ha) {
  var ha = null
}
function v(a) {
  return null != a && !1 !== a;
}
function ia(a) {
  return a instanceof Array;
}
function ma(a) {
  return v(a) ? !1 : !0;
}
function na(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
}
function w(a, b) {
  var c = null == b ? null : b.constructor, c = v(v(c) ? c.yb : c) ? c.hb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function oa(a) {
  var b = a.hb;
  return v(b) ? b : "" + x(a);
}
var pa = "undefined" !== typeof Symbol && "function" === m(Symbol) ? Symbol.iterator : "@@iterator";
function qa(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ra = {}, ua = {}, va = function va(b) {
  if (b ? b.ja : b) {
    return b.ja(b);
  }
  var c;
  c = va[m(null == b ? null : b)];
  if (!c && (c = va._, !c)) {
    throw w("ICounted.-count", b);
  }
  return c.call(null, b);
}, wa = function wa(b) {
  if (b ? b.R : b) {
    return b.R(b);
  }
  var c;
  c = wa[m(null == b ? null : b)];
  if (!c && (c = wa._, !c)) {
    throw w("IEmptyableCollection.-empty", b);
  }
  return c.call(null, b);
}, xa = function xa(b, c) {
  if (b ? b.J : b) {
    return b.J(b, c);
  }
  var d;
  d = xa[m(null == b ? null : b)];
  if (!d && (d = xa._, !d)) {
    throw w("ICollection.-conj", b);
  }
  return d.call(null, b, c);
}, za = {}, Aa = function Aa() {
  switch(arguments.length) {
    case 2:
      return Aa.b(arguments[0], arguments[1]);
    case 3:
      return Aa.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Aa.b = function(a, b) {
  if (a ? a.K : a) {
    return a.K(a, b);
  }
  var c;
  c = Aa[m(null == a ? null : a)];
  if (!c && (c = Aa._, !c)) {
    throw w("IIndexed.-nth", a);
  }
  return c.call(null, a, b);
};
Aa.e = function(a, b, c) {
  if (a ? a.fa : a) {
    return a.fa(a, b, c);
  }
  var d;
  d = Aa[m(null == a ? null : a)];
  if (!d && (d = Aa._, !d)) {
    throw w("IIndexed.-nth", a);
  }
  return d.call(null, a, b, c);
};
Aa.q = 3;
var Ba = {}, Ca = function Ca(b) {
  if (b ? b.N : b) {
    return b.N(b);
  }
  var c;
  c = Ca[m(null == b ? null : b)];
  if (!c && (c = Ca._, !c)) {
    throw w("ISeq.-first", b);
  }
  return c.call(null, b);
}, Da = function Da(b) {
  if (b ? b.ga : b) {
    return b.ga(b);
  }
  var c;
  c = Da[m(null == b ? null : b)];
  if (!c && (c = Da._, !c)) {
    throw w("ISeq.-rest", b);
  }
  return c.call(null, b);
}, Fa = {}, Ha = function Ha() {
  switch(arguments.length) {
    case 2:
      return Ha.b(arguments[0], arguments[1]);
    case 3:
      return Ha.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Ha.b = function(a, b) {
  if (a ? a.ua : a) {
    return a.ua(a, b);
  }
  var c;
  c = Ha[m(null == a ? null : a)];
  if (!c && (c = Ha._, !c)) {
    throw w("ILookup.-lookup", a);
  }
  return c.call(null, a, b);
};
Ha.e = function(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Ha[m(null == a ? null : a)];
  if (!d && (d = Ha._, !d)) {
    throw w("ILookup.-lookup", a);
  }
  return d.call(null, a, b, c);
};
Ha.q = 3;
var Ja = function Ja(b, c, d) {
  if (b ? b.La : b) {
    return b.La(0, c, d);
  }
  var e;
  e = Ja[m(null == b ? null : b)];
  if (!e && (e = Ja._, !e)) {
    throw w("IAssociative.-assoc", b);
  }
  return e.call(null, b, c, d);
}, Ka = function Ka(b, c) {
  if (b ? b.$a : b) {
    return b.$a(b, c);
  }
  var d;
  d = Ka[m(null == b ? null : b)];
  if (!d && (d = Ka._, !d)) {
    throw w("IMap.-dissoc", b);
  }
  return d.call(null, b, c);
}, La = function La(b) {
  if (b ? b.ya : b) {
    return b.ya(b);
  }
  var c;
  c = La[m(null == b ? null : b)];
  if (!c && (c = La._, !c)) {
    throw w("IStack.-pop", b);
  }
  return c.call(null, b);
}, Na = function Na(b, c, d) {
  if (b ? b.Ia : b) {
    return b.Ia(b, c, d);
  }
  var e;
  e = Na[m(null == b ? null : b)];
  if (!e && (e = Na._, !e)) {
    throw w("IVector.-assoc-n", b);
  }
  return e.call(null, b, c, d);
}, Oa = function Oa(b) {
  if (b ? b.Xa : b) {
    return b.state;
  }
  var c;
  c = Oa[m(null == b ? null : b)];
  if (!c && (c = Oa._, !c)) {
    throw w("IDeref.-deref", b);
  }
  return c.call(null, b);
}, Pa = {}, Ra = function Ra(b) {
  if (b ? b.H : b) {
    return b.H(b);
  }
  var c;
  c = Ra[m(null == b ? null : b)];
  if (!c && (c = Ra._, !c)) {
    throw w("IMeta.-meta", b);
  }
  return c.call(null, b);
}, Sa = {}, Ta = function Ta(b, c) {
  if (b ? b.P : b) {
    return b.P(b, c);
  }
  var d;
  d = Ta[m(null == b ? null : b)];
  if (!d && (d = Ta._, !d)) {
    throw w("IWithMeta.-with-meta", b);
  }
  return d.call(null, b, c);
}, Ua = {}, Va = function Va() {
  switch(arguments.length) {
    case 2:
      return Va.b(arguments[0], arguments[1]);
    case 3:
      return Va.e(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
Va.b = function(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = Va[m(null == a ? null : a)];
  if (!c && (c = Va._, !c)) {
    throw w("IReduce.-reduce", a);
  }
  return c.call(null, a, b);
};
Va.e = function(a, b, c) {
  if (a ? a.M : a) {
    return a.M(a, b, c);
  }
  var d;
  d = Va[m(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw w("IReduce.-reduce", a);
  }
  return d.call(null, a, b, c);
};
Va.q = 3;
var Wa = function Wa(b, c, d) {
  if (b ? b.Ha : b) {
    return b.Ha(b, c, d);
  }
  var e;
  e = Wa[m(null == b ? null : b)];
  if (!e && (e = Wa._, !e)) {
    throw w("IKVReduce.-kv-reduce", b);
  }
  return e.call(null, b, c, d);
}, Xa = function Xa(b, c) {
  if (b ? b.s : b) {
    return b.s(b, c);
  }
  var d;
  d = Xa[m(null == b ? null : b)];
  if (!d && (d = Xa._, !d)) {
    throw w("IEquiv.-equiv", b);
  }
  return d.call(null, b, c);
}, $a = function $a(b) {
  if (b ? b.C : b) {
    return b.C(b);
  }
  var c;
  c = $a[m(null == b ? null : b)];
  if (!c && (c = $a._, !c)) {
    throw w("IHash.-hash", b);
  }
  return c.call(null, b);
}, ab = {}, bb = function bb(b) {
  if (b ? b.O : b) {
    return b.O(b);
  }
  var c;
  c = bb[m(null == b ? null : b)];
  if (!c && (c = bb._, !c)) {
    throw w("ISeqable.-seq", b);
  }
  return c.call(null, b);
}, cb = {}, db = function db(b, c) {
  if (b ? b.Pa : b) {
    return b.Pa(0, c);
  }
  var d;
  d = db[m(null == b ? null : b)];
  if (!d && (d = db._, !d)) {
    throw w("IWriter.-write", b);
  }
  return d.call(null, b, c);
}, fb = function fb(b, c, d) {
  if (b ? b.Oa : b) {
    return b.Oa(0, c, d);
  }
  var e;
  e = fb[m(null == b ? null : b)];
  if (!e && (e = fb._, !e)) {
    throw w("IWatchable.-notify-watches", b);
  }
  return e.call(null, b, c, d);
}, gb = function gb(b) {
  if (b ? b.Ma : b) {
    return b.Ma();
  }
  var c;
  c = gb[m(null == b ? null : b)];
  if (!c && (c = gb._, !c)) {
    throw w("IChunk.-drop-first", b);
  }
  return c.call(null, b);
}, hb = function hb(b) {
  if (b ? b.Fa : b) {
    return b.Fa(b);
  }
  var c;
  c = hb[m(null == b ? null : b)];
  if (!c && (c = hb._, !c)) {
    throw w("IChunkedSeq.-chunked-first", b);
  }
  return c.call(null, b);
}, ib = function ib(b) {
  if (b ? b.Ga : b) {
    return b.Ga(b);
  }
  var c;
  c = ib[m(null == b ? null : b)];
  if (!c && (c = ib._, !c)) {
    throw w("IChunkedSeq.-chunked-rest", b);
  }
  return c.call(null, b);
}, jb = function jb(b) {
  if (b ? b.Ea : b) {
    return b.Ea(b);
  }
  var c;
  c = jb[m(null == b ? null : b)];
  if (!c && (c = jb._, !c)) {
    throw w("IChunkedNext.-chunked-next", b);
  }
  return c.call(null, b);
}, lb = function lb(b, c) {
  if (b ? b.bb : b) {
    return b.bb(b, c);
  }
  var d;
  d = lb[m(null == b ? null : b)];
  if (!d && (d = lb._, !d)) {
    throw w("IReset.-reset!", b);
  }
  return d.call(null, b, c);
}, mb = function mb() {
  switch(arguments.length) {
    case 2:
      return mb.b(arguments[0], arguments[1]);
    case 3:
      return mb.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return mb.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return mb.B(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
};
mb.b = function(a, b) {
  if (a ? a.cb : a) {
    return a.cb(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw w("ISwap.-swap!", a);
  }
  return c.call(null, a, b);
};
mb.e = function(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(a, b, c);
  }
  var d;
  d = mb[m(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw w("ISwap.-swap!", a);
  }
  return d.call(null, a, b, c);
};
mb.p = function(a, b, c, d) {
  if (a ? a.fb : a) {
    return a.fb(a, b, c, d);
  }
  var e;
  e = mb[m(null == a ? null : a)];
  if (!e && (e = mb._, !e)) {
    throw w("ISwap.-swap!", a);
  }
  return e.call(null, a, b, c, d);
};
mb.B = function(a, b, c, d, e) {
  if (a ? a.gb : a) {
    return a.gb(a, b, c, d, e);
  }
  var f;
  f = mb[m(null == a ? null : a)];
  if (!f && (f = mb._, !f)) {
    throw w("ISwap.-swap!", a);
  }
  return f.call(null, a, b, c, d, e);
};
mb.q = 5;
function nb(a) {
  this.lb = a;
  this.k = 1073741824;
  this.w = 0;
}
nb.prototype.Pa = function(a, b) {
  return this.lb.append(b);
};
function ob(a) {
  var b = new fa;
  a.wa(null, new nb(b), new q.g(null, 5, [pb, !0, qb, !0, rb, !1, sb, !1, tb, null], null));
  return "" + x(b);
}
var ub = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul.b ? Math.imul.b(a, b) : Math.imul.call(null, a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function vb(a) {
  a = ub(a | 0, -862048943);
  return ub(a << 15 | a >>> -15, 461845907);
}
function wb(a, b) {
  var c = (a | 0) ^ (b | 0);
  return ub(c << 13 | c >>> -13, 5) + -430675100 | 0;
}
function yb(a, b) {
  var c = (a | 0) ^ b, c = ub(c ^ c >>> 16, -2048144789), c = ub(c ^ c >>> 13, -1028477387);
  return c ^ c >>> 16;
}
function zb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = wb(c, vb(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
  }
  b = 1 === (a.length & 1) ? b ^ vb(a.charCodeAt(a.length - 1)) : b;
  return yb(b, ub(2, a.length));
}
var Ab = {}, Bb = 0;
function Cb(a) {
  255 < Bb && (Ab = {}, Bb = 0);
  var b = Ab[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = ub(31, d) + a.charCodeAt(c), c = e
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
    Ab[a] = b;
    Bb += 1;
  }
  return a = b;
}
function Db(a) {
  a && (a.k & 4194304 || a.rb) ? a = a.C(null) : "number" === typeof a ? a = (Math.floor.a ? Math.floor.a(a) : Math.floor.call(null, a)) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Cb(a), 0 !== a && (a = vb(a), a = wb(0, a), a = yb(a, 4))) : a = a instanceof Date ? a.valueOf() : null == a ? 0 : $a(a);
  return a;
}
function Eb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Gb(a, b, c, d, e) {
  this.Ca = a;
  this.name = b;
  this.ra = c;
  this.ma = d;
  this.Ua = e;
  this.k = 2154168321;
  this.w = 4096;
}
l = Gb.prototype;
l.toString = function() {
  return this.ra;
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.s = function(a, b) {
  return b instanceof Gb ? this.ra === b.ra : !1;
};
l.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ha.e(c, this, null);
      case 3:
        return Ha.e(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return Ha.e(c, this, null);
  };
  a.e = function(a, c, d) {
    return Ha.e(c, this, d);
  };
  return a;
}();
l.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qa(b)));
};
l.a = function(a) {
  return Ha.e(a, this, null);
};
l.b = function(a, b) {
  return Ha.e(a, this, b);
};
l.H = function() {
  return this.Ua;
};
l.P = function(a, b) {
  return new Gb(this.Ca, this.name, this.ra, this.ma, b);
};
l.C = function() {
  var a = this.ma;
  return null != a ? a : this.ma = a = Eb(zb(this.name), Cb(this.Ca));
};
l.wa = function(a, b) {
  return db(b, this.ra);
};
function Hb(a) {
  var b = [x("figwheel-test.snake"), x("/"), x(a)].join("");
  return new Gb("figwheel-test.snake", a, b, null, null);
}
function z(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.k & 8388608 || a.ub)) {
    return a.O(null);
  }
  if (ia(a) || "string" === typeof a) {
    return 0 === a.length ? null : new B(a, 0);
  }
  if (na(ab, a)) {
    return bb(a);
  }
  throw Error([x(a), x(" is not ISeqable")].join(""));
}
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.k & 64 || a.xa)) {
    return a.N(null);
  }
  a = z(a);
  return null == a ? null : Ca(a);
}
function Ib(a) {
  return null != a ? a && (a.k & 64 || a.xa) ? a.ga(null) : (a = z(a)) ? Da(a) : Jb : Jb;
}
function G(a) {
  return null == a ? null : a && (a.k & 128 || a.tb) ? a.ka(null) : z(Ib(a));
}
var H = function H() {
  switch(arguments.length) {
    case 1:
      return H.a(arguments[0]);
    case 2:
      return H.b(arguments[0], arguments[1]);
    default:
      return H.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
H.a = function() {
  return!0;
};
H.b = function(a, b) {
  return null == a ? null == b : a === b || Xa(a, b);
};
H.h = function(a, b, c) {
  for (;;) {
    if (H.b(a, b)) {
      if (G(c)) {
        a = b, b = E(c), c = G(c);
      } else {
        return H.b(b, E(c));
      }
    } else {
      return!1;
    }
  }
};
H.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return H.h(b, a, c);
};
H.q = 2;
function Kb(a) {
  this.v = a;
}
Kb.prototype.next = function() {
  if (null != this.v) {
    var a = E(this.v);
    this.v = G(this.v);
    return{value:a, done:!1};
  }
  return{value:null, done:!0};
};
function Lb(a) {
  return new Kb(z(a));
}
function Mb(a, b) {
  var c = vb(a), c = wb(0, c);
  return yb(c, b);
}
function Nb(a) {
  var b = 0, c = 1;
  for (a = z(a);;) {
    if (null != a) {
      b += 1, c = ub(31, c) + Db(E(a)) | 0, a = G(a);
    } else {
      return Mb(c, b);
    }
  }
}
var Ob = Mb(1, 0);
Mb(0, 0);
ua["null"] = !0;
va["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.valueOf() === b.valueOf();
};
Xa.number = function(a, b) {
  return a === b;
};
ra["function"] = !0;
Pa["function"] = !0;
Ra["function"] = function() {
  return null;
};
$a._ = function(a) {
  return a[ca] || (a[ca] = ++da);
};
function I(a) {
  return Oa(a);
}
function Pb(a, b) {
  var c = va(a);
  if (0 === c) {
    return b.i ? b.i() : b.call(null);
  }
  for (var d = Aa.b(a, 0), e = 1;;) {
    if (e < c) {
      var f = Aa.b(a, e), d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Qb(a, b, c) {
  var d = va(a), e = c;
  for (c = 0;;) {
    if (c < d) {
      var f = Aa.b(a, c), e = b.b ? b.b(e, f) : b.call(null, e, f);
      c += 1;
    } else {
      return e;
    }
  }
}
function Rb(a, b) {
  var c = a.length;
  if (0 === a.length) {
    return b.i ? b.i() : b.call(null);
  }
  for (var d = a[0], e = 1;;) {
    if (e < c) {
      var f = a[e], d = b.b ? b.b(d, f) : b.call(null, d, f), e = e + 1
    } else {
      return d;
    }
  }
}
function Sb(a, b, c) {
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
function Tb(a, b, c, d) {
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
function Ub(a) {
  return a ? a.k & 2 || a.Wa ? !0 : a.k ? !1 : na(ua, a) : na(ua, a);
}
function B(a, b) {
  this.f = a;
  this.t = b;
  this.k = 166199550;
  this.w = 8192;
}
l = B.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.K = function(a, b) {
  var c = b + this.t;
  return c < this.f.length ? this.f[c] : null;
};
l.fa = function(a, b, c) {
  a = b + this.t;
  return a < this.f.length ? this.f[a] : c;
};
l.ka = function() {
  return this.t + 1 < this.f.length ? new B(this.f, this.t + 1) : null;
};
l.ja = function() {
  return this.f.length - this.t;
};
l.C = function() {
  return Nb(this);
};
l.s = function(a, b) {
  return Vb.b ? Vb.b(this, b) : Vb.call(null, this, b);
};
l.R = function() {
  return Jb;
};
l.L = function(a, b) {
  return Tb(this.f, b, this.f[this.t], this.t + 1);
};
l.M = function(a, b, c) {
  return Tb(this.f, b, c, this.t);
};
l.N = function() {
  return this.f[this.t];
};
l.ga = function() {
  return this.t + 1 < this.f.length ? new B(this.f, this.t + 1) : Jb;
};
l.O = function() {
  return this;
};
l.J = function(a, b) {
  return Xb.b ? Xb.b(b, this) : Xb.call(null, b, this);
};
B.prototype[pa] = function() {
  return Lb(this);
};
function Yb(a, b) {
  return b < a.length ? new B(a, b) : null;
}
function Zb() {
  switch(arguments.length) {
    case 1:
      return Yb(arguments[0], 0);
    case 2:
      return Yb(arguments[0], arguments[1]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function $b(a) {
  for (;;) {
    var b = G(a);
    if (null != b) {
      a = b;
    } else {
      return E(a);
    }
  }
}
Xa._ = function(a, b) {
  return a === b;
};
var ac = function ac() {
  switch(arguments.length) {
    case 0:
      return ac.i();
    case 1:
      return ac.a(arguments[0]);
    case 2:
      return ac.b(arguments[0], arguments[1]);
    default:
      return ac.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ac.i = function() {
  return J.EMPTY;
};
ac.a = function(a) {
  return a;
};
ac.b = function(a, b) {
  return null != a ? xa(a, b) : xa(Jb, b);
};
ac.h = function(a, b, c) {
  for (;;) {
    if (v(c)) {
      a = ac.b(a, b), b = E(c), c = G(c);
    } else {
      return ac.b(a, b);
    }
  }
};
ac.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return ac.h(b, a, c);
};
ac.q = 2;
function bc(a) {
  if (null != a) {
    if (a && (a.k & 2 || a.Wa)) {
      a = a.ja(null);
    } else {
      if (ia(a)) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (na(ua, a)) {
            a = va(a);
          } else {
            a: {
              a = z(a);
              for (var b = 0;;) {
                if (Ub(a)) {
                  a = b + va(a);
                  break a;
                }
                a = G(a);
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
function cc(a, b) {
  for (var c = null;;) {
    if (null == a) {
      return c;
    }
    if (0 === b) {
      return z(a) ? E(a) : c;
    }
    var d = a;
    if (d ? d.k & 16 || d.Za || (d.k ? 0 : na(za, d)) : na(za, d)) {
      return Aa.e(a, b, c);
    }
    if (z(a)) {
      var d = G(a), e = b - 1;
      a = d;
      b = e;
    } else {
      return c;
    }
  }
}
function L(a, b) {
  if ("number" !== typeof b) {
    throw Error("index argument to nth must be a number.");
  }
  if (null == a) {
    return null;
  }
  if (a && (a.k & 16 || a.Za)) {
    return a.fa(null, b, null);
  }
  if (ia(a) || "string" === typeof a) {
    return b < a.length ? a[b] : null;
  }
  if (na(za, a)) {
    return Aa.b(a, b);
  }
  if (a ? a.k & 64 || a.xa || (a.k ? 0 : na(Ba, a)) : na(Ba, a)) {
    return cc(a, b);
  }
  throw Error([x("nth not supported on this type "), x(oa(null == a ? null : a.constructor))].join(""));
}
function M(a, b) {
  return null == a ? null : a && (a.k & 256 || a.Na) ? a.ua(null, b) : ia(a) ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : na(Fa, a) ? Ha.b(a, b) : null;
}
function dc(a, b, c) {
  return null != a ? a && (a.k & 256 || a.Na) ? a.va(null, b, c) : ia(a) ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : na(Fa, a) ? Ha.e(a, b, c) : c : c;
}
var N = function N() {
  switch(arguments.length) {
    case 3:
      return N.e(arguments[0], arguments[1], arguments[2]);
    default:
      return N.h(arguments[0], arguments[1], arguments[2], new B(Array.prototype.slice.call(arguments, 3), 0));
  }
};
N.e = function(a, b, c) {
  return null != a ? Ja(a, b, c) : q.Sa.ib([b], [c]);
};
N.h = function(a, b, c, d) {
  for (;;) {
    if (a = N.e(a, b, c), v(d)) {
      b = E(d), c = E(G(d)), d = G(G(d));
    } else {
      return a;
    }
  }
};
N.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  var d = G(c), c = E(d), d = G(d);
  return N.h(b, a, c, d);
};
N.q = 3;
var ec = function ec() {
  switch(arguments.length) {
    case 1:
      return ec.a(arguments[0]);
    case 2:
      return ec.b(arguments[0], arguments[1]);
    default:
      return ec.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
ec.a = function(a) {
  return a;
};
ec.b = function(a, b) {
  return null == a ? null : Ka(a, b);
};
ec.h = function(a, b, c) {
  for (;;) {
    if (null == a) {
      return null;
    }
    a = ec.b(a, b);
    if (v(c)) {
      b = E(c), c = G(c);
    } else {
      return a;
    }
  }
};
ec.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return ec.h(b, a, c);
};
ec.q = 2;
function fc(a, b) {
  this.c = a;
  this.l = b;
  this.k = 393217;
  this.w = 0;
}
l = fc.prototype;
l.H = function() {
  return this.l;
};
l.P = function(a, b) {
  return new fc(this.c, b);
};
l.Va = !0;
l.call = function() {
  function a(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D, ya) {
    a = this.c;
    return gc.ta ? gc.ta(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D, ya) : gc.call(null, a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D, ya);
  }
  function b(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D) {
    a = this;
    return a.c.ba ? a.c.ba(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V, D);
  }
  function c(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V) {
    a = this;
    return a.c.aa ? a.c.aa(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C, V);
  }
  function d(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C) {
    a = this;
    return a.c.$ ? a.c.$(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K, C);
  }
  function e(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K) {
    a = this;
    return a.c.Z ? a.c.Z(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F, K);
  }
  function f(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F) {
    a = this;
    return a.c.Y ? a.c.Y(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A, F);
  }
  function g(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A) {
    a = this;
    return a.c.X ? a.c.X(b, c, d, e, f, g, h, k, p, n, r, t, u, y, A) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y, A);
  }
  function h(a, b, c, d, e, f, g, h, k, p, n, r, t, u, y) {
    a = this;
    return a.c.W ? a.c.W(b, c, d, e, f, g, h, k, p, n, r, t, u, y) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u, y);
  }
  function k(a, b, c, d, e, f, g, h, k, p, n, r, t, u) {
    a = this;
    return a.c.V ? a.c.V(b, c, d, e, f, g, h, k, p, n, r, t, u) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t, u);
  }
  function n(a, b, c, d, e, f, g, h, k, p, n, r, t) {
    a = this;
    return a.c.U ? a.c.U(b, c, d, e, f, g, h, k, p, n, r, t) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r, t);
  }
  function p(a, b, c, d, e, f, g, h, k, p, n, r) {
    a = this;
    return a.c.T ? a.c.T(b, c, d, e, f, g, h, k, p, n, r) : a.c.call(null, b, c, d, e, f, g, h, k, p, n, r);
  }
  function t(a, b, c, d, e, f, g, h, k, p, n) {
    a = this;
    return a.c.S ? a.c.S(b, c, d, e, f, g, h, k, p, n) : a.c.call(null, b, c, d, e, f, g, h, k, p, n);
  }
  function r(a, b, c, d, e, f, g, h, k, p) {
    a = this;
    return a.c.ea ? a.c.ea(b, c, d, e, f, g, h, k, p) : a.c.call(null, b, c, d, e, f, g, h, k, p);
  }
  function u(a, b, c, d, e, f, g, h, k) {
    a = this;
    return a.c.da ? a.c.da(b, c, d, e, f, g, h, k) : a.c.call(null, b, c, d, e, f, g, h, k);
  }
  function y(a, b, c, d, e, f, g, h) {
    a = this;
    return a.c.ca ? a.c.ca(b, c, d, e, f, g, h) : a.c.call(null, b, c, d, e, f, g, h);
  }
  function A(a, b, c, d, e, f, g) {
    a = this;
    return a.c.F ? a.c.F(b, c, d, e, f, g) : a.c.call(null, b, c, d, e, f, g);
  }
  function C(a, b, c, d, e, f) {
    a = this;
    return a.c.B ? a.c.B(b, c, d, e, f) : a.c.call(null, b, c, d, e, f);
  }
  function F(a, b, c, d, e) {
    a = this;
    return a.c.p ? a.c.p(b, c, d, e) : a.c.call(null, b, c, d, e);
  }
  function K(a, b, c, d) {
    a = this;
    return a.c.e ? a.c.e(b, c, d) : a.c.call(null, b, c, d);
  }
  function V(a, b, c) {
    a = this;
    return a.c.b ? a.c.b(b, c) : a.c.call(null, b, c);
  }
  function ya(a, b) {
    a = this;
    return a.c.a ? a.c.a(b) : a.c.call(null, b);
  }
  function Za(a) {
    a = this;
    return a.c.i ? a.c.i() : a.c.call(null);
  }
  var D = null, D = function(D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc, jd, Vd, De, zf) {
    switch(arguments.length) {
      case 1:
        return Za.call(this, D);
      case 2:
        return ya.call(this, D, ja);
      case 3:
        return V.call(this, D, ja, ka);
      case 4:
        return K.call(this, D, ja, ka, sa);
      case 5:
        return F.call(this, D, ja, ka, sa, ta);
      case 6:
        return C.call(this, D, ja, ka, sa, ta, la);
      case 7:
        return A.call(this, D, ja, ka, sa, ta, la, Ea);
      case 8:
        return y.call(this, D, ja, ka, sa, ta, la, Ea, Ga);
      case 9:
        return u.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia);
      case 10:
        return r.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma);
      case 11:
        return t.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa);
      case 12:
        return p.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya);
      case 13:
        return n.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb);
      case 14:
        return k.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb);
      case 15:
        return h.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb);
      case 16:
        return g.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb);
      case 17:
        return f.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb);
      case 18:
        return e.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc);
      case 19:
        return d.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc, jd);
      case 20:
        return c.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc, jd, Vd);
      case 21:
        return b.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc, jd, Vd, De);
      case 22:
        return a.call(this, D, ja, ka, sa, ta, la, Ea, Ga, Ia, Ma, Qa, Ya, eb, kb, xb, Fb, Wb, sc, jd, Vd, De, zf);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  D.a = Za;
  D.b = ya;
  D.e = V;
  D.p = K;
  D.B = F;
  D.F = C;
  D.ca = A;
  D.da = y;
  D.ea = u;
  D.S = r;
  D.T = t;
  D.U = p;
  D.V = n;
  D.W = k;
  D.X = h;
  D.Y = g;
  D.Z = f;
  D.$ = e;
  D.aa = d;
  D.ba = c;
  D.Ya = b;
  D.ta = a;
  return D;
}();
l.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qa(b)));
};
l.i = function() {
  return this.c.i ? this.c.i() : this.c.call(null);
};
l.a = function(a) {
  return this.c.a ? this.c.a(a) : this.c.call(null, a);
};
l.b = function(a, b) {
  return this.c.b ? this.c.b(a, b) : this.c.call(null, a, b);
};
l.e = function(a, b, c) {
  return this.c.e ? this.c.e(a, b, c) : this.c.call(null, a, b, c);
};
l.p = function(a, b, c, d) {
  return this.c.p ? this.c.p(a, b, c, d) : this.c.call(null, a, b, c, d);
};
l.B = function(a, b, c, d, e) {
  return this.c.B ? this.c.B(a, b, c, d, e) : this.c.call(null, a, b, c, d, e);
};
l.F = function(a, b, c, d, e, f) {
  return this.c.F ? this.c.F(a, b, c, d, e, f) : this.c.call(null, a, b, c, d, e, f);
};
l.ca = function(a, b, c, d, e, f, g) {
  return this.c.ca ? this.c.ca(a, b, c, d, e, f, g) : this.c.call(null, a, b, c, d, e, f, g);
};
l.da = function(a, b, c, d, e, f, g, h) {
  return this.c.da ? this.c.da(a, b, c, d, e, f, g, h) : this.c.call(null, a, b, c, d, e, f, g, h);
};
l.ea = function(a, b, c, d, e, f, g, h, k) {
  return this.c.ea ? this.c.ea(a, b, c, d, e, f, g, h, k) : this.c.call(null, a, b, c, d, e, f, g, h, k);
};
l.S = function(a, b, c, d, e, f, g, h, k, n) {
  return this.c.S ? this.c.S(a, b, c, d, e, f, g, h, k, n) : this.c.call(null, a, b, c, d, e, f, g, h, k, n);
};
l.T = function(a, b, c, d, e, f, g, h, k, n, p) {
  return this.c.T ? this.c.T(a, b, c, d, e, f, g, h, k, n, p) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p);
};
l.U = function(a, b, c, d, e, f, g, h, k, n, p, t) {
  return this.c.U ? this.c.U(a, b, c, d, e, f, g, h, k, n, p, t) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t);
};
l.V = function(a, b, c, d, e, f, g, h, k, n, p, t, r) {
  return this.c.V ? this.c.V(a, b, c, d, e, f, g, h, k, n, p, t, r) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r);
};
l.W = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u) {
  return this.c.W ? this.c.W(a, b, c, d, e, f, g, h, k, n, p, t, r, u) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u);
};
l.X = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y) {
  return this.c.X ? this.c.X(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y);
};
l.Y = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A) {
  return this.c.Y ? this.c.Y(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A);
};
l.Z = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C) {
  return this.c.Z ? this.c.Z(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C);
};
l.$ = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F) {
  return this.c.$ ? this.c.$(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F);
};
l.aa = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K) {
  return this.c.aa ? this.c.aa(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K);
};
l.ba = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V) {
  return this.c.ba ? this.c.ba(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V) : this.c.call(null, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V);
};
l.Ya = function(a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya) {
  var Za = this.c;
  return gc.ta ? gc.ta(Za, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya) : gc.call(null, Za, a, b, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya);
};
function hc(a, b) {
  var c = "function" == m(a);
  return(v(c) ? c : a ? v(v(null) ? null : a.Va) || (a.xb ? 0 : na(ra, a)) : na(ra, a)) && !(a ? a.k & 262144 || a.wb || (a.k ? 0 : na(Sa, a)) : na(Sa, a)) ? new fc(a, b) : null == a ? null : Ta(a, b);
}
function ic(a) {
  return null == a || ma(z(a));
}
function jc(a) {
  return a ? a.w & 512 || a.qb ? !0 : !1 : !1;
}
function kc(a, b, c, d) {
  for (var e = 0;0 !== d;) {
    c[e] = a[b], e += 1, --d, b += 1;
  }
}
var lc = {};
function O(a) {
  return null == a ? !1 : a ? a.k & 64 || a.xa ? !0 : a.k ? !1 : na(Ba, a) : na(Ba, a);
}
function mc(a, b) {
  var c = z(b);
  if (c) {
    var d = E(c), c = G(c);
    return nc ? nc(a, d, c) : oc.call(null, a, d, c);
  }
  return a.i ? a.i() : a.call(null);
}
function pc(a, b, c) {
  for (c = z(c);;) {
    if (c) {
      var d = E(c);
      b = a.b ? a.b(b, d) : a.call(null, b, d);
      c = G(c);
    } else {
      return b;
    }
  }
}
function oc() {
  switch(arguments.length) {
    case 2:
      var a = arguments[0], b = arguments[1];
      return b && (b.k & 524288 || b.ab) ? b.L(null, a) : ia(b) ? Rb(b, a) : "string" === typeof b ? Rb(b, a) : na(Ua, b) ? Va.b(b, a) : mc(a, b);
    case 3:
      return nc(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function nc(a, b, c) {
  return c && (c.k & 524288 || c.ab) ? c.M(null, a, b) : ia(c) ? Sb(c, a, b) : "string" === typeof c ? Sb(c, a, b) : na(Ua, c) ? Va.e(c, a, b) : pc(a, b, c);
}
function qc(a) {
  return a;
}
var rc = function rc() {
  switch(arguments.length) {
    case 0:
      return rc.i();
    case 1:
      return rc.a(arguments[0]);
    case 2:
      return rc.b(arguments[0], arguments[1]);
    default:
      return rc.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
rc.i = function() {
  return 0;
};
rc.a = function(a) {
  return a;
};
rc.b = function(a, b) {
  return a + b;
};
rc.h = function(a, b, c) {
  return nc(rc, a + b, c);
};
rc.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return rc.h(b, a, c);
};
rc.q = 2;
var tc = function tc() {
  switch(arguments.length) {
    case 1:
      return tc.a(arguments[0]);
    case 2:
      return tc.b(arguments[0], arguments[1]);
    default:
      return tc.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
tc.a = function(a) {
  return-a;
};
tc.b = function(a, b) {
  return a - b;
};
tc.h = function(a, b, c) {
  return nc(tc, a - b, c);
};
tc.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return tc.h(b, a, c);
};
tc.q = 2;
function uc(a) {
  return a - 1;
}
function vc(a, b) {
  return(a % b + b) % b;
}
function wc(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
function xc(a) {
  var b = 1;
  for (a = z(a);;) {
    if (a && 0 < b) {
      --b, a = G(a);
    } else {
      return a;
    }
  }
}
var x = function x() {
  switch(arguments.length) {
    case 0:
      return x.i();
    case 1:
      return x.a(arguments[0]);
    default:
      return x.h(arguments[0], new B(Array.prototype.slice.call(arguments, 1), 0));
  }
};
x.i = function() {
  return "";
};
x.a = function(a) {
  return null == a ? "" : ea(a);
};
x.h = function(a, b) {
  for (var c = new fa("" + x(a)), d = b;;) {
    if (v(d)) {
      c = c.append("" + x(E(d))), d = G(d);
    } else {
      return c.toString();
    }
  }
};
x.n = function(a) {
  var b = E(a);
  a = G(a);
  return x.h(b, a);
};
x.q = 1;
function Vb(a, b) {
  var c;
  if (b ? b.k & 16777216 || b.vb || (b.k ? 0 : na(cb, b)) : na(cb, b)) {
    if (Ub(a) && Ub(b) && bc(a) !== bc(b)) {
      c = !1;
    } else {
      a: {
        c = z(a);
        for (var d = z(b);;) {
          if (null == c) {
            c = null == d;
            break a;
          }
          if (null != d && H.b(E(c), E(d))) {
            c = G(c), d = G(d);
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
  return v(c) ? !0 : !1;
}
function yc(a) {
  if (z(a)) {
    var b = Db(E(a));
    for (a = G(a);;) {
      if (null == a) {
        return b;
      }
      b = Eb(b, Db(E(a)));
      a = G(a);
    }
  } else {
    return 0;
  }
}
function zc(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.ia = c;
  this.count = d;
  this.r = e;
  this.k = 65937646;
  this.w = 8192;
}
l = zc.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.H = function() {
  return this.l;
};
l.ka = function() {
  return 1 === this.count ? null : this.ia;
};
l.ja = function() {
  return this.count;
};
l.ya = function() {
  return Da(this);
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = Nb(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return Ta(Jb, this.l);
};
l.L = function(a, b) {
  return mc(b, this);
};
l.M = function(a, b, c) {
  return pc(b, c, this);
};
l.N = function() {
  return this.first;
};
l.ga = function() {
  return 1 === this.count ? Jb : this.ia;
};
l.O = function() {
  return this;
};
l.P = function(a, b) {
  return new zc(b, this.first, this.ia, this.count, this.r);
};
l.J = function(a, b) {
  return new zc(this.l, b, this, this.count + 1, null);
};
zc.prototype[pa] = function() {
  return Lb(this);
};
function Ac(a) {
  this.l = a;
  this.k = 65937614;
  this.w = 8192;
}
l = Ac.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.H = function() {
  return this.l;
};
l.ka = function() {
  return null;
};
l.ja = function() {
  return 0;
};
l.ya = function() {
  throw Error("Can't pop empty list");
};
l.C = function() {
  return Ob;
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return this;
};
l.L = function(a, b) {
  return mc(b, this);
};
l.M = function(a, b, c) {
  return pc(b, c, this);
};
l.N = function() {
  return null;
};
l.ga = function() {
  return Jb;
};
l.O = function() {
  return null;
};
l.P = function(a, b) {
  return new Ac(b);
};
l.J = function(a, b) {
  return new zc(this.l, b, null, 1, null);
};
var Jb = new Ac(null);
Ac.prototype[pa] = function() {
  return Lb(this);
};
var Bc = function Bc() {
  return Bc.h(0 < arguments.length ? new B(Array.prototype.slice.call(arguments, 0), 0) : null);
};
Bc.h = function(a) {
  var b;
  if (a instanceof B && 0 === a.t) {
    b = a.f;
  } else {
    a: {
      for (b = [];;) {
        if (null != a) {
          b.push(a.N(null)), a = a.ka(null);
        } else {
          break a;
        }
      }
    }
  }
  a = b.length;
  for (var c = Jb;;) {
    if (0 < a) {
      var d = a - 1, c = c.J(null, b[a - 1]);
      a = d;
    } else {
      return c;
    }
  }
};
Bc.q = 0;
Bc.n = function(a) {
  return Bc.h(z(a));
};
function Cc(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.ia = c;
  this.r = d;
  this.k = 65929452;
  this.w = 8192;
}
l = Cc.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.H = function() {
  return this.l;
};
l.ka = function() {
  return null == this.ia ? null : z(this.ia);
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = Nb(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return hc(Jb, this.l);
};
l.L = function(a, b) {
  return mc(b, this);
};
l.M = function(a, b, c) {
  return pc(b, c, this);
};
l.N = function() {
  return this.first;
};
l.ga = function() {
  return null == this.ia ? Jb : this.ia;
};
l.O = function() {
  return this;
};
l.P = function(a, b) {
  return new Cc(b, this.first, this.ia, this.r);
};
l.J = function(a, b) {
  return new Cc(null, b, this, this.r);
};
Cc.prototype[pa] = function() {
  return Lb(this);
};
function Xb(a, b) {
  var c = null == b;
  return(c ? c : b && (b.k & 64 || b.xa)) ? new Cc(null, a, b, null) : new Cc(null, a, z(b), null);
}
function P(a, b, c, d) {
  this.Ca = a;
  this.name = b;
  this.qa = c;
  this.ma = d;
  this.k = 2153775105;
  this.w = 4096;
}
l = P.prototype;
l.toString = function() {
  return[x(":"), x(this.qa)].join("");
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.s = function(a, b) {
  return b instanceof P ? this.qa === b.qa : !1;
};
l.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return M(c, this);
      case 3:
        return dc(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return M(c, this);
  };
  a.e = function(a, c, d) {
    return dc(c, this, d);
  };
  return a;
}();
l.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qa(b)));
};
l.a = function(a) {
  return M(a, this);
};
l.b = function(a, b) {
  return dc(a, this, b);
};
l.C = function() {
  var a = this.ma;
  return null != a ? a : this.ma = a = Eb(zb(this.name), Cb(this.Ca)) + 2654435769 | 0;
};
l.wa = function(a, b) {
  return db(b, [x(":"), x(this.qa)].join(""));
};
function Dc(a, b, c, d) {
  this.l = a;
  this.na = b;
  this.v = c;
  this.r = d;
  this.k = 32374988;
  this.w = 0;
}
l = Dc.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
function Ec(a) {
  null != a.na && (a.v = a.na.i ? a.na.i() : a.na.call(null), a.na = null);
  return a.v;
}
l.H = function() {
  return this.l;
};
l.ka = function() {
  bb(this);
  return null == this.v ? null : G(this.v);
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = Nb(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return hc(Jb, this.l);
};
l.L = function(a, b) {
  return mc(b, this);
};
l.M = function(a, b, c) {
  return pc(b, c, this);
};
l.N = function() {
  bb(this);
  return null == this.v ? null : E(this.v);
};
l.ga = function() {
  bb(this);
  return null != this.v ? Ib(this.v) : Jb;
};
l.O = function() {
  Ec(this);
  if (null == this.v) {
    return null;
  }
  for (var a = this.v;;) {
    if (a instanceof Dc) {
      a = Ec(a);
    } else {
      return this.v = a, z(this.v);
    }
  }
};
l.P = function(a, b) {
  return new Dc(b, this.na, this.v, this.r);
};
l.J = function(a, b) {
  return Xb(b, this);
};
Dc.prototype[pa] = function() {
  return Lb(this);
};
function Fc(a, b) {
  this.Da = a;
  this.end = b;
  this.k = 2;
  this.w = 0;
}
Fc.prototype.add = function(a) {
  this.Da[this.end] = a;
  return this.end += 1;
};
Fc.prototype.G = function() {
  var a = new Gc(this.Da, 0, this.end);
  this.Da = null;
  return a;
};
Fc.prototype.ja = function() {
  return this.end;
};
function Gc(a, b, c) {
  this.f = a;
  this.u = b;
  this.end = c;
  this.k = 524306;
  this.w = 0;
}
l = Gc.prototype;
l.ja = function() {
  return this.end - this.u;
};
l.K = function(a, b) {
  return this.f[this.u + b];
};
l.fa = function(a, b, c) {
  return 0 <= b && b < this.end - this.u ? this.f[this.u + b] : c;
};
l.Ma = function() {
  if (this.u === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Gc(this.f, this.u + 1, this.end);
};
l.L = function(a, b) {
  return Tb(this.f, b, this.f[this.u], this.u + 1);
};
l.M = function(a, b, c) {
  return Tb(this.f, b, c, this.u);
};
function Hc(a, b, c, d) {
  this.G = a;
  this.Q = b;
  this.l = c;
  this.r = d;
  this.k = 31850732;
  this.w = 1536;
}
l = Hc.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.H = function() {
  return this.l;
};
l.ka = function() {
  if (1 < va(this.G)) {
    return new Hc(gb(this.G), this.Q, this.l, null);
  }
  var a = bb(this.Q);
  return null == a ? null : a;
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = Nb(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return hc(Jb, this.l);
};
l.N = function() {
  return Aa.b(this.G, 0);
};
l.ga = function() {
  return 1 < va(this.G) ? new Hc(gb(this.G), this.Q, this.l, null) : null == this.Q ? Jb : this.Q;
};
l.O = function() {
  return this;
};
l.Fa = function() {
  return this.G;
};
l.Ga = function() {
  return null == this.Q ? Jb : this.Q;
};
l.P = function(a, b) {
  return new Hc(this.G, this.Q, b, this.r);
};
l.J = function(a, b) {
  return Xb(b, this);
};
l.Ea = function() {
  return null == this.Q ? null : this.Q;
};
Hc.prototype[pa] = function() {
  return Lb(this);
};
function Ic(a, b) {
  return 0 === va(a) ? b : new Hc(a, b, null, null);
}
function Jc(a, b) {
  a.add(b);
}
function Kc(a) {
  for (var b = [];;) {
    if (z(a)) {
      b.push(E(a)), a = G(a);
    } else {
      return b;
    }
  }
}
function Lc(a, b) {
  if (Ub(a)) {
    return bc(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && z(c)) {
      c = G(c), --d, e += 1;
    } else {
      return e;
    }
  }
}
var Mc = function Mc(b) {
  return null == b ? null : null == G(b) ? z(E(b)) : Xb(E(b), Mc(G(b)));
}, Nc = function Nc() {
  switch(arguments.length) {
    case 0:
      return Nc.i();
    case 1:
      return Nc.a(arguments[0]);
    case 2:
      return Nc.b(arguments[0], arguments[1]);
    default:
      return Nc.h(arguments[0], arguments[1], new B(Array.prototype.slice.call(arguments, 2), 0));
  }
};
Nc.i = function() {
  return new Dc(null, function() {
    return null;
  }, null, null);
};
Nc.a = function(a) {
  return new Dc(null, function() {
    return a;
  }, null, null);
};
Nc.b = function(a, b) {
  return new Dc(null, function() {
    var c = z(a);
    return c ? jc(c) ? Ic(hb(c), Nc.b(ib(c), b)) : Xb(E(c), Nc.b(Ib(c), b)) : b;
  }, null, null);
};
Nc.h = function(a, b, c) {
  return function e(a, b) {
    return new Dc(null, function() {
      var c = z(a);
      return c ? jc(c) ? Ic(hb(c), e(ib(c), b)) : Xb(E(c), e(Ib(c), b)) : v(b) ? e(E(b), G(b)) : null;
    }, null, null);
  }(Nc.b(a, b), c);
};
Nc.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  c = G(c);
  return Nc.h(b, a, c);
};
Nc.q = 2;
function Oc(a, b, c) {
  var d = z(c);
  if (0 === b) {
    return a.i ? a.i() : a.call(null);
  }
  c = Ca(d);
  var e = Da(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = Ca(e), f = Da(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = Ca(f), g = Da(f);
  if (3 === b) {
    return a.e ? a.e(c, d, e) : a.e ? a.e(c, d, e) : a.call(null, c, d, e);
  }
  var f = Ca(g), h = Da(g);
  if (4 === b) {
    return a.p ? a.p(c, d, e, f) : a.p ? a.p(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var g = Ca(h), k = Da(h);
  if (5 === b) {
    return a.B ? a.B(c, d, e, f, g) : a.B ? a.B(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  var h = Ca(k), n = Da(k);
  if (6 === b) {
    return a.F ? a.F(c, d, e, f, g, h) : a.F ? a.F(c, d, e, f, g, h) : a.call(null, c, d, e, f, g, h);
  }
  var k = Ca(n), p = Da(n);
  if (7 === b) {
    return a.ca ? a.ca(c, d, e, f, g, h, k) : a.ca ? a.ca(c, d, e, f, g, h, k) : a.call(null, c, d, e, f, g, h, k);
  }
  var n = Ca(p), t = Da(p);
  if (8 === b) {
    return a.da ? a.da(c, d, e, f, g, h, k, n) : a.da ? a.da(c, d, e, f, g, h, k, n) : a.call(null, c, d, e, f, g, h, k, n);
  }
  var p = Ca(t), r = Da(t);
  if (9 === b) {
    return a.ea ? a.ea(c, d, e, f, g, h, k, n, p) : a.ea ? a.ea(c, d, e, f, g, h, k, n, p) : a.call(null, c, d, e, f, g, h, k, n, p);
  }
  var t = Ca(r), u = Da(r);
  if (10 === b) {
    return a.S ? a.S(c, d, e, f, g, h, k, n, p, t) : a.S ? a.S(c, d, e, f, g, h, k, n, p, t) : a.call(null, c, d, e, f, g, h, k, n, p, t);
  }
  var r = Ca(u), y = Da(u);
  if (11 === b) {
    return a.T ? a.T(c, d, e, f, g, h, k, n, p, t, r) : a.T ? a.T(c, d, e, f, g, h, k, n, p, t, r) : a.call(null, c, d, e, f, g, h, k, n, p, t, r);
  }
  var u = Ca(y), A = Da(y);
  if (12 === b) {
    return a.U ? a.U(c, d, e, f, g, h, k, n, p, t, r, u) : a.U ? a.U(c, d, e, f, g, h, k, n, p, t, r, u) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u);
  }
  var y = Ca(A), C = Da(A);
  if (13 === b) {
    return a.V ? a.V(c, d, e, f, g, h, k, n, p, t, r, u, y) : a.V ? a.V(c, d, e, f, g, h, k, n, p, t, r, u, y) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y);
  }
  var A = Ca(C), F = Da(C);
  if (14 === b) {
    return a.W ? a.W(c, d, e, f, g, h, k, n, p, t, r, u, y, A) : a.W ? a.W(c, d, e, f, g, h, k, n, p, t, r, u, y, A) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A);
  }
  var C = Ca(F), K = Da(F);
  if (15 === b) {
    return a.X ? a.X(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C) : a.X ? a.X(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C);
  }
  var F = Ca(K), V = Da(K);
  if (16 === b) {
    return a.Y ? a.Y(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F) : a.Y ? a.Y(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F);
  }
  var K = Ca(V), ya = Da(V);
  if (17 === b) {
    return a.Z ? a.Z(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K) : a.Z ? a.Z(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K);
  }
  var V = Ca(ya), Za = Da(ya);
  if (18 === b) {
    return a.$ ? a.$(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V) : a.$ ? a.$(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V);
  }
  ya = Ca(Za);
  Za = Da(Za);
  if (19 === b) {
    return a.aa ? a.aa(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya) : a.aa ? a.aa(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya);
  }
  var D = Ca(Za);
  Da(Za);
  if (20 === b) {
    return a.ba ? a.ba(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya, D) : a.ba ? a.ba(c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya, D) : a.call(null, c, d, e, f, g, h, k, n, p, t, r, u, y, A, C, F, K, V, ya, D);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function gc() {
  switch(arguments.length) {
    case 2:
      return Q(arguments[0], arguments[1]);
    case 3:
      return Pc(arguments[0], arguments[1], arguments[2]);
    case 4:
      var a;
      a = arguments[0];
      var b = Xb(arguments[1], Xb(arguments[2], arguments[3])), c = a.q;
      if (a.n) {
        var d = Lc(b, c + 1);
        a = d <= c ? Oc(a, d, b) : a.n(b);
      } else {
        a = a.apply(a, Kc(b));
      }
      return a;
    case 5:
      return Qc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      return Rc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new B(Array.prototype.slice.call(arguments, 5), 0));
  }
}
function Q(a, b) {
  var c = a.q;
  if (a.n) {
    var d = Lc(b, c + 1);
    return d <= c ? Oc(a, d, b) : a.n(b);
  }
  return a.apply(a, Kc(b));
}
function Pc(a, b, c) {
  b = Xb(b, c);
  c = a.q;
  if (a.n) {
    var d = Lc(b, c + 1);
    return d <= c ? Oc(a, d, b) : a.n(b);
  }
  return a.apply(a, Kc(b));
}
function Qc(a, b, c, d, e) {
  b = Xb(b, Xb(c, Xb(d, e)));
  c = a.q;
  return a.n ? (d = Lc(b, c + 1), d <= c ? Oc(a, d, b) : a.n(b)) : a.apply(a, Kc(b));
}
function Rc(a, b, c, d, e, f) {
  b = Xb(b, Xb(c, Xb(d, Xb(e, Mc(f)))));
  c = a.q;
  return a.n ? (d = Lc(b, c + 1), d <= c ? Oc(a, d, b) : a.n(b)) : a.apply(a, Kc(b));
}
function Sc(a) {
  return z(a) ? a : null;
}
function Tc(a, b) {
  for (;;) {
    if (z(b)) {
      var c;
      c = E(b);
      c = a.a ? a.a(c) : a.call(null, c);
      if (v(c)) {
        return c;
      }
      c = a;
      var d = G(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Uc(a, b) {
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
      var c = b.i ? b.i() : b.call(null);
      return a.a ? a.a(c) : a.call(null, c);
    }
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new B(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        c = Qc(b, c, e, f, g);
        return a.a ? a.a(c) : a.call(null, c);
      }
      c.q = 3;
      c.n = function(a) {
        var b = E(a);
        a = G(a);
        var c = E(a);
        a = G(a);
        var e = E(a);
        a = Ib(a);
        return d(b, c, e, a);
      };
      c.h = d;
      return c;
    }(), g = function(a, b, g, t) {
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
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, u = Array(arguments.length - 3);r < u.length;) {
              u[r] = arguments[r + 3], ++r;
            }
            r = new B(u, 0);
          }
          return h.h(a, b, g, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.q = 3;
    g.n = h.n;
    g.i = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.h = h.h;
    return g;
  }();
}
function Vc(a, b) {
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
    var g = null, h = function() {
      function c(a, b, e, f) {
        var g = null;
        if (3 < arguments.length) {
          for (var g = 0, h = Array(arguments.length - 3);g < h.length;) {
            h[g] = arguments[g + 3], ++g;
          }
          g = new B(h, 0);
        }
        return d.call(this, a, b, e, g);
      }
      function d(c, e, f, g) {
        return Rc(a, b, c, e, f, Zb([g], 0));
      }
      c.q = 3;
      c.n = function(a) {
        var b = E(a);
        a = G(a);
        var c = E(a);
        a = G(a);
        var e = E(a);
        a = Ib(a);
        return d(b, c, e, a);
      };
      c.h = d;
      return c;
    }(), g = function(a, b, g, t) {
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
          var r = null;
          if (3 < arguments.length) {
            for (var r = 0, u = Array(arguments.length - 3);r < u.length;) {
              u[r] = arguments[r + 3], ++r;
            }
            r = new B(u, 0);
          }
          return h.h(a, b, g, r);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    g.q = 3;
    g.n = h.n;
    g.i = f;
    g.a = e;
    g.b = d;
    g.e = c;
    g.h = h.h;
    return g;
  }();
}
function Wc(a, b) {
  return function d(b, f) {
    return new Dc(null, function() {
      var g = z(f);
      if (g) {
        if (jc(g)) {
          for (var h = hb(g), k = bc(h), n = new Fc(Array(k), 0), p = 0;;) {
            if (p < k) {
              Jc(n, function() {
                var d = b + p, f = Aa.b(h, p);
                return a.b ? a.b(d, f) : a.call(null, d, f);
              }()), p += 1;
            } else {
              break;
            }
          }
          return Ic(n.G(), d(b + k, ib(g)));
        }
        return Xb(function() {
          var d = E(g);
          return a.b ? a.b(b, d) : a.call(null, b, d);
        }(), d(b + 1, Ib(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
function Xc(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.ob = c;
  this.Ra = d;
  this.w = 16386;
  this.k = 6455296;
}
l = Xc.prototype;
l.equiv = function(a) {
  return this.s(null, a);
};
l.s = function(a, b) {
  return this === b;
};
l.Xa = function() {
  return this.state;
};
l.H = function() {
  return this.l;
};
l.Oa = function(a, b, c) {
  for (var d = z(this.Ra), e = null, f = 0, g = 0;;) {
    if (g < f) {
      a = e.K(null, g);
      var h = L(a, 0);
      a = L(a, 1);
      var k = b, n = c;
      a.p ? a.p(h, this, k, n) : a.call(null, h, this, k, n);
      g += 1;
    } else {
      if (a = z(d)) {
        d = a, jc(d) ? (e = hb(d), d = ib(d), a = e, f = bc(e), e = a) : (a = E(d), h = L(a, 0), a = L(a, 1), e = h, f = b, g = c, a.p ? a.p(e, this, f, g) : a.call(null, e, this, f, g), d = G(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
l.C = function() {
  return this[ca] || (this[ca] = ++da);
};
function R() {
  switch(arguments.length) {
    case 1:
      return S(arguments[0]);
    default:
      var a = arguments[0], b = new B(Array.prototype.slice.call(arguments, 1), 0), c = O(b) ? Q(q.o, b) : b, b = M(c, rb), c = M(c, Yc);
      return new Xc(a, b, c, null);
  }
}
function S(a) {
  return new Xc(a, null, null, null);
}
function Zc(a, b) {
  if (a instanceof Xc) {
    var c = a.ob;
    if (null != c && !v(c.a ? c.a(b) : c.call(null, b))) {
      throw Error([x("Assert failed: "), x("Validator rejected reference state"), x("\n"), x(function() {
        var a = Bc(new Gb(null, "validate", "validate", 1439230700, null), new Gb(null, "new-value", "new-value", -1567397401, null));
        return q.Qa.a ? q.Qa.a(a) : q.Qa.call(null, a);
      }())].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.Ra && fb(a, c, b);
    return b;
  }
  return lb(a, b);
}
function $c(a, b) {
  var c;
  a instanceof Xc ? (c = a.state, c = b.a ? b.a(c) : b.call(null, c), c = Zc(a, c)) : c = mb.b(a, b);
  return c;
}
function ad(a, b) {
  var c = bd;
  if (c instanceof Xc) {
    var d;
    d = c.state;
    d = a.b ? a.b(d, b) : a.call(null, d, b);
    c = Zc(c, d);
  } else {
    c = mb.e(c, a, b);
  }
  return c;
}
function cd(a) {
  var b = bd, c = dd;
  if (b instanceof Xc) {
    var d = b.state;
    a = N.e ? N.e(d, c, a) : N.call(null, d, c, a);
    Zc(b, a);
  } else {
    mb.p(b, N, c, a);
  }
}
var T = function T() {
  switch(arguments.length) {
    case 1:
      return T.a(arguments[0]);
    case 2:
      return T.b(arguments[0], arguments[1]);
    case 3:
      return T.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return T.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      return T.h(arguments[0], arguments[1], arguments[2], arguments[3], new B(Array.prototype.slice.call(arguments, 4), 0));
  }
};
T.a = function(a) {
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
        return b.i ? b.i() : b.call(null);
      }
      var f = null, g = function() {
        function c(a, b, e) {
          var f = null;
          if (2 < arguments.length) {
            for (var f = 0, g = Array(arguments.length - 2);f < g.length;) {
              g[f] = arguments[f + 2], ++f;
            }
            f = new B(g, 0);
          }
          return d.call(this, a, b, f);
        }
        function d(c, e, f) {
          e = Pc(a, e, f);
          return b.b ? b.b(c, e) : b.call(null, c, e);
        }
        c.q = 2;
        c.n = function(a) {
          var b = E(a);
          a = G(a);
          var c = E(a);
          a = Ib(a);
          return d(b, c, a);
        };
        c.h = d;
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
            var p = null;
            if (2 < arguments.length) {
              for (var p = 0, t = Array(arguments.length - 2);p < t.length;) {
                t[p] = arguments[p + 2], ++p;
              }
              p = new B(t, 0);
            }
            return g.h(a, b, p);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      f.q = 2;
      f.n = g.n;
      f.i = e;
      f.a = d;
      f.b = c;
      f.h = g.h;
      return f;
    }();
  };
};
T.b = function(a, b) {
  return new Dc(null, function() {
    var c = z(b);
    if (c) {
      if (jc(c)) {
        for (var d = hb(c), e = bc(d), f = new Fc(Array(e), 0), g = 0;;) {
          if (g < e) {
            Jc(f, function() {
              var b = Aa.b(d, g);
              return a.a ? a.a(b) : a.call(null, b);
            }()), g += 1;
          } else {
            break;
          }
        }
        return Ic(f.G(), T.b(a, ib(c)));
      }
      return Xb(function() {
        var b = E(c);
        return a.a ? a.a(b) : a.call(null, b);
      }(), T.b(a, Ib(c)));
    }
    return null;
  }, null, null);
};
T.e = function(a, b, c) {
  return new Dc(null, function() {
    var d = z(b), e = z(c);
    if (d && e) {
      var f = Xb, g;
      g = E(d);
      var h = E(e);
      g = a.b ? a.b(g, h) : a.call(null, g, h);
      d = f(g, T.e(a, Ib(d), Ib(e)));
    } else {
      d = null;
    }
    return d;
  }, null, null);
};
T.p = function(a, b, c, d) {
  return new Dc(null, function() {
    var e = z(b), f = z(c), g = z(d);
    if (e && f && g) {
      var h = Xb, k;
      k = E(e);
      var n = E(f), p = E(g);
      k = a.e ? a.e(k, n, p) : a.call(null, k, n, p);
      e = h(k, T.p(a, Ib(e), Ib(f), Ib(g)));
    } else {
      e = null;
    }
    return e;
  }, null, null);
};
T.h = function(a, b, c, d, e) {
  var f = function h(a) {
    return new Dc(null, function() {
      var b = T.b(z, a), c;
      a: {
        c = b;
        for (var d = qc;;) {
          if (null == z(c)) {
            c = !0;
            break a;
          }
          var e;
          e = E(c);
          e = d.a ? d.a(e) : d.call(null, e);
          if (v(e)) {
            c = G(c);
          } else {
            c = !1;
            break a;
          }
        }
      }
      return c ? Xb(T.b(E, b), h(T.b(Ib, b))) : null;
    }, null, null);
  };
  return T.b(function() {
    return function(b) {
      return Q(a, b);
    };
  }(f), f(ac.h(e, d, Zb([c, b], 0))));
};
T.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  var d = G(c), c = E(d), e = G(d), d = E(e), e = G(e);
  return T.h(b, a, c, d, e);
};
T.q = 4;
function ed(a, b) {
  return Q(Nc, Pc(T, a, b));
}
function fd(a, b) {
  return new Dc(null, function() {
    var c = z(b);
    if (c) {
      if (jc(c)) {
        for (var d = hb(c), e = bc(d), f = new Fc(Array(e), 0), g = 0;;) {
          if (g < e) {
            var h;
            h = Aa.b(d, g);
            h = a.a ? a.a(h) : a.call(null, h);
            v(h) && (h = Aa.b(d, g), f.add(h));
            g += 1;
          } else {
            break;
          }
        }
        return Ic(f.G(), fd(a, ib(c)));
      }
      d = E(c);
      c = Ib(c);
      return v(a.a ? a.a(d) : a.call(null, d)) ? Xb(d, fd(a, c)) : fd(a, c);
    }
    return null;
  }, null, null);
}
function gd(a) {
  return hd(a, new J(null, 2, 5, J.d, [id, kd], null));
}
function hd(a, b) {
  for (var c = lc, d = a, e = z(b);;) {
    if (e) {
      var f = d;
      if (f ? f.k & 256 || f.Na || (f.k ? 0 : na(Fa, f)) : na(Fa, f)) {
        d = dc(d, E(e), c);
        if (c === d) {
          return null;
        }
        e = G(e);
      } else {
        return null;
      }
    } else {
      return d;
    }
  }
}
var ld = function ld(b, c, d) {
  var e = L(c, 0);
  c = xc(c);
  return v(c) ? N.e(b, e, ld(M(b, e), c, d)) : N.e(b, e, d);
}, md = function md() {
  switch(arguments.length) {
    case 3:
      return md.e(arguments[0], arguments[1], arguments[2]);
    case 4:
      return md.p(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return md.B(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return md.F(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    default:
      return md.h(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], new B(Array.prototype.slice.call(arguments, 6), 0));
  }
};
md.e = function(a, b, c) {
  var d = L(b, 0);
  b = xc(b);
  return v(b) ? N.e(a, d, md.e(M(a, d), b, c)) : N.e(a, d, function() {
    var b = M(a, d);
    return c.a ? c.a(b) : c.call(null, b);
  }());
};
md.p = function(a, b, c, d) {
  var e = L(b, 0);
  b = xc(b);
  return v(b) ? N.e(a, e, md.p(M(a, e), b, c, d)) : N.e(a, e, function() {
    var b = M(a, e);
    return c.b ? c.b(b, d) : c.call(null, b, d);
  }());
};
md.B = function(a, b, c, d, e) {
  var f = L(b, 0);
  b = xc(b);
  return v(b) ? N.e(a, f, md.B(M(a, f), b, c, d, e)) : N.e(a, f, function() {
    var b = M(a, f);
    return c.e ? c.e(b, d, e) : c.call(null, b, d, e);
  }());
};
md.F = function(a, b, c, d, e, f) {
  var g = L(b, 0);
  b = xc(b);
  return v(b) ? N.e(a, g, md.F(M(a, g), b, c, d, e, f)) : N.e(a, g, function() {
    var b = M(a, g);
    return c.p ? c.p(b, d, e, f) : c.call(null, b, d, e, f);
  }());
};
md.h = function(a, b, c, d, e, f, g) {
  var h = L(b, 0);
  b = xc(b);
  return v(b) ? N.e(a, h, Rc(md, M(a, h), b, c, d, Zb([e, f, g], 0))) : N.e(a, h, Rc(c, M(a, h), d, e, f, Zb([g], 0)));
};
md.n = function(a) {
  var b = E(a), c = G(a);
  a = E(c);
  var d = G(c), c = E(d), e = G(d), d = E(e), f = G(e), e = E(f), g = G(f), f = E(g), g = G(g);
  return md.h(b, a, c, d, e, f, g);
};
md.q = 6;
function nd(a) {
  var b = od;
  return N.e(a, b, function() {
    var c = M(a, b);
    return uc.a ? uc.a(c) : uc.call(null, c);
  }());
}
function pd(a, b, c, d) {
  return N.e(a, b, function() {
    var e = M(a, b);
    return c.b ? c.b(e, d) : c.call(null, e, d);
  }());
}
function qd(a, b, c, d, e) {
  return N.e(a, b, function() {
    var f = M(a, b);
    return c.e ? c.e(f, d, e) : c.call(null, f, d, e);
  }());
}
function rd(a, b) {
  this.A = a;
  this.f = b;
}
function sd(a, b) {
  return new rd(a, b);
}
function td(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function ud(a, b) {
  throw Error([x("No item "), x(a), x(" in vector of length "), x(b)].join(""));
}
function vd(a, b) {
  if (b >= td(a)) {
    return a.m;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.f[b >>> d & 31], d = e
    } else {
      return c.f;
    }
  }
}
var wd = function wd(b, c, d, e, f) {
  var g = new rd(d.A, qa(d.f));
  if (0 === c) {
    g.f[e & 31] = f;
  } else {
    var h = e >>> c & 31;
    b = wd(b, c - 5, d.f[h], e, f);
    g.f[h] = b;
  }
  return g;
};
function J(a, b, c, d, e, f) {
  this.l = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.m = e;
  this.r = f;
  this.k = 167668511;
  this.w = 8196;
}
l = J.prototype;
l.toString = function() {
  return ob(this);
};
l.equiv = function(a) {
  return this.s(null, a);
};
l.ua = function(a, b) {
  return Ha.e(this, b, null);
};
l.va = function(a, b, c) {
  return "number" === typeof b ? Aa.e(this, b, c) : c;
};
l.Ha = function(a, b, c) {
  a = 0;
  for (var d = c;;) {
    if (a < this.j) {
      var e = vd(this, a);
      c = e.length;
      a: {
        for (var f = 0;;) {
          if (f < c) {
            var g = f + a, h = e[f], d = b.e ? b.e(d, g, h) : b.call(null, d, g, h), f = f + 1
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
l.K = function(a, b) {
  return(0 <= b && b < this.j ? vd(this, b) : ud(b, this.j))[b & 31];
};
l.fa = function(a, b, c) {
  return 0 <= b && b < this.j ? vd(this, b)[b & 31] : c;
};
l.Ia = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return td(this) <= b ? (a = qa(this.m), a[b & 31] = c, new J(this.l, this.j, this.shift, this.root, a, null)) : new J(this.l, this.j, this.shift, wd(this, this.shift, this.root, b, c), this.m, null);
  }
  if (b === this.j) {
    return xa(this, c);
  }
  throw Error([x("Index "), x(b), x(" out of bounds  [0,"), x(this.j), x("]")].join(""));
};
var xd = new P(null, "bullets", "bullets", 1734809024), U = new P(null, "p2", "p2", 905500641), yd = new P(null, "r", "r", -471384190), zd = new P(null, "v", "v", 21465059), rb = new P(null, "meta", "meta", 1499536964), od = new P(null, "enemy-spawn", "enemy-spawn", 1471569540), sb = new P(null, "dup", "dup", 556298533), Ad = new P(null, "dir", "dir", 1734754661), Bd = new P(null, "ammo", "ammo", -1520726489), Yc = new P(null, "validator", "validator", -1966190681), Cd = new P(null, "default", "default", 
-1987822328), Dd = new P(null, "w", "w", 354169001), Ed = new P(null, "th", "th", -545608566), Fd = new P(null, "th1", "th1", 583362347), kd = new P(null, "pos", "pos", -864607220), W = new P(null, "type", "type", 1174270348), Gd = new P(null, "th2", "th2", 1996173036), Hd = new P(null, "cooldown", "cooldown", -1178127572), pb = new P(null, "flush-on-newline", "flush-on-newline", -151457939), Id = new P(null, "segments", "segments", 1937535949), X = new P(null, "p1", "p1", -936759954), Jd = new P(null, 
"targets", "targets", 2014963406), Kd = new P(null, "walls", "walls", -268788818), Ld = new P(null, "chunks", "chunks", 83720431), Md = new P(null, "k", "k", -2146297393), Nd = new P("figwheel-test.snake", "arc", "figwheel-test.snake/arc", -1171661361), Od = new P(null, "level", "level", 1290497552), Pd = new P(null, "turn", "turn", 75759344), qb = new P(null, "readably", "readably", 1129599760), Qd = new P(null, "head", "head", -771383919), Rd = new P(null, "c", "c", -1763192079), dd = new P(null, 
"stop", "stop", -2140911342), tb = new P(null, "print-length", "print-length", 1931866356), Sd = new P(null, "tail", "tail", -1146023564), Td = new P(null, "terrain", "terrain", 704966005), Ud = new P(null, "length", "length", 588987862), Wd = new P(null, "b", "b", 1482224470), Xd = new P(null, "right", "right", -452581833), Yd = new P(null, "health", "health", -295520649), id = new P(null, "player", "player", -97687400), Zd = new P(null, "target-length", "target-length", 208661657), $d = new P(null, 
"x", "x", 2099068185), ae = new P(null, "enemies", "enemies", 2114285722), be = new P(null, "draw", "draw", 1358331674), ce = new P(null, "hierarchy", "hierarchy", -1053470341), de = new P(null, "barrel-change", "barrel-change", -347000069), ee = new P(null, "temperature", "temperature", 899018429), Y = new P("figwheel-test.snake", "line", "figwheel-test.snake/line", 1502198493), fe = new P(null, "left", "left", -399115937);
function ge(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return[c - e, d - f];
}
function he(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return[c + e, d + f];
}
function ie(a, b) {
  var c = L(b, 0), d = L(b, 1);
  return[a * c, a * d];
}
function je(a, b) {
  var c = L(a, 0), d = L(a, 1), e = L(b, 0), f = L(b, 1);
  return c * e + d * f;
}
function ke(a) {
  var b = L(a, 0);
  a = L(a, 1);
  return Math.sqrt(b * b + a * a);
}
function le(a) {
  return ie(1 / ke(a), a);
}
function me(a) {
  var b = L(a, 0);
  a = L(a, 1);
  return Math.atan2(a, b);
}
;var ne = function ne(b, c, d) {
  if (b ? b.za : b) {
    return b.za(b, c, d);
  }
  var e;
  e = ne[m(null == b ? null : b)];
  if (!e && (e = ne._, !e)) {
    throw w("PSliceableVector.-slicev", b);
  }
  return e.call(null, b, c, d);
};
var oe = J.d;
function pe(a) {
  return 33 !== a.f.length;
}
function qe(a) {
  a = a.f[32];
  return a[a[32] - 1];
}
function re(a, b, c) {
  for (;;) {
    if (v(pe(a))) {
      return c >> 5 > 1 << b;
    }
    var d = a.f[32];
    c = d[32];
    var e = 32 === c;
    if (e) {
      if (e = 5 === b) {
        return e;
      }
      b -= 5;
      d = d[31] - d[30] + 32;
      a = a.f[c - 1];
      c = d;
    } else {
      return e;
    }
  }
}
;function se(a, b, c, d, e) {
  if (0 <= e && e < a) {
    if (e >= a - d.length) {
      return d;
    }
    for (a = e;;) {
      if (0 === b) {
        return c.f;
      }
      if (v(pe(c))) {
        for (c = c.f[a >> b & 31], b -= 5;;) {
          if (0 === b) {
            return c.f;
          }
          d = b - 5;
          c = c.f[a >> b & 31];
          b = d;
        }
      } else {
        d = c.f[32];
        a: {
          for (e = a >> b & 31;;) {
            if (a < d[e]) {
              break a;
            }
            e += 1;
          }
        }
        c = c.f[e];
        b -= 5;
        a = 0 < e ? a - d[e - 1] : a;
      }
    }
  } else {
    return ud(e, a);
  }
}
function te(a, b, c, d) {
  if (32 === a.length) {
    for (var e = 0;;) {
      if (e === c) {
        return d;
      }
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = sd(b, f);
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
      var f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = sd(b, f);
      f[0] = d;
      f[32] = h;
      h[32] = 1;
      h[0] = a.length;
      d = g;
      e += 5;
    }
  }
}
var ue = function ue(b, c, d, e, f) {
  if (v(pe(e))) {
    for (var g = qa(e.f), g = e = sd(e.A, g);;) {
      var g = g.f, h = c - 1 >> b & 31;
      if (5 === b) {
        g[h] = f;
      } else {
        var k = g[h];
        if (v(k)) {
          k = qa(k.f);
          k = sd(d, k);
          g[h] = k;
          b -= 5;
          g = k;
          continue;
        } else {
          g[h] = te(f.f, d, b - 5, f);
        }
      }
      break;
    }
  } else {
    g = qa(e.f);
    c = e.f[32];
    h = c[32] - 1;
    e = sd(e.A, g);
    if (5 === b) {
      k = null;
    } else {
      var k = g[h], n = 0 < h ? c[h] - c[h - 1] : c[0], k = n !== 1 << b ? ue(b - 5, n + 1, d, k, f) : null
    }
    v(k) ? (g[h] = k, c[h] += 32) : (g[h + 1] = te(f.f, d, b - 5, f), c[h + 1] = c[h] + 32, c[32] += 1);
  }
  return e;
}, ve = function ve(b, c, d, e) {
  if (v(pe(e))) {
    var f = c - 1 >> b & 31;
    if (5 < b) {
      b = ve(b - 5, c, d, e.f[f]);
      if (null == b && 0 === f) {
        return null;
      }
      e = qa(e.f);
      e[f] = b;
      return sd(d, e);
    }
    if (0 === f) {
      return null;
    }
    e = qa(e.f);
    e[f] = null;
    return sd(d, e);
  }
  var g = e.f[32];
  a: {
    for (f = c - 1 >> b & 31;;) {
      if (0 === (g[f + 1] | 0) || 31 === f) {
        break a;
      }
      f += 1;
    }
  }
  c = qa(g);
  if (5 < b) {
    var h = e.f[f];
    b = ve(b - 5, 0 === f ? g[0] : g[f] - g[f - 1], d, h);
    if (null == b && 0 === f) {
      return null;
    }
    v(pe(h)) ? (e = qa(e.f), c[f] -= 32) : (g = qe(h) - (v(b) ? qe(b) : 0), e = qa(e.f), c[f] -= g);
    e[f] = b;
    e[32] = c;
    null == b && --c[32];
    return sd(d, e);
  }
  if (0 === f) {
    return null;
  }
  e = qa(e.f);
  b = qa(g);
  e[f] = null;
  e[32] = b;
  b[f] = 0;
  --b[32];
  return sd(d, e);
}, we = function we(b, c, d, e) {
  if (v(pe(c))) {
    for (var f = c = new rd(c.A, qa(c.f));;) {
      if (0 === b) {
        f.f[d & 31] = e;
        break;
      } else {
        var f = f.f, g = d >> b & 31, h;
        h = f[g];
        h = new rd(h.A, qa(h.f));
        f = f[g] = h;
        b -= 5;
      }
    }
    return c;
  }
  f = qa(c.f);
  g = c.f[32];
  a: {
    for (h = d >> b & 31;;) {
      if (d < (g[h] | 0)) {
        break a;
      }
      h += 1;
    }
  }
  f[h] = we(b - 5, f[h], 0 === h ? d : d - g[h - 1], e);
  return sd(c.A, f);
};
var xe = function xe(b) {
  if (b ? b.Aa : b) {
    return b.Aa(b);
  }
  var c;
  c = xe[m(null == b ? null : b)];
  if (!c && (c = xe._, !c)) {
    throw w("AsRRBT.-as-rrbt", b);
  }
  return c.call(null, b);
};
function ye(a, b, c, d, e, f) {
  this.D = a;
  this.ha = b;
  this.t = c;
  this.u = d;
  this.l = e;
  this.r = f;
  this.k = 2179858668;
  this.w = 1536;
}
l = ye.prototype;
l.toString = function() {
  return ob(this);
};
l.wa = function(a, b, c) {
  return q.jb(b, q.kb, "(", " ", ")", c, this);
};
l.H = function() {
  return this.l;
};
l.ka = function() {
  if (this.u + 1 < this.ha.length) {
    var a;
    a = this.D;
    var b = this.ha, c = this.t, d = this.u + 1;
    a = ze ? ze(a, b, c, d) : Ae.call(null, a, b, c, d);
    return null == a ? null : a;
  }
  return jb(this);
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = yc(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return hc(Jb, this.l);
};
l.L = function(a, b) {
  return Pb(q.mb.e(this.D, this.t + this.u, bc(this.D)), b);
};
l.M = function(a, b, c) {
  return Qb(q.mb.e(this.D, this.t + this.u, bc(this.D)), b, c);
};
l.N = function() {
  return this.ha[this.u];
};
l.ga = function() {
  if (this.u + 1 < this.ha.length) {
    var a;
    a = this.D;
    var b = this.ha, c = this.t, d = this.u + 1;
    a = ze ? ze(a, b, c, d) : Ae.call(null, a, b, c, d);
    return null == a ? Jb : a;
  }
  return ib(this);
};
l.O = function() {
  return this;
};
l.Fa = function() {
  var a = this.ha;
  return new Gc(a, this.u, a.length);
};
l.Ga = function() {
  var a = this.ha.length, b;
  this.t + a < va(this.D) ? (b = this.D, a = this.t + a, b = Be ? Be(b, a, 0) : Ae.call(null, b, a, 0)) : b = null;
  return null == b ? Jb : b;
};
l.P = function(a, b) {
  var c = this.D, d = this.ha, e = this.t, f = this.u;
  return Ce ? Ce(c, d, e, f, b) : Ae.call(null, c, d, e, f, b);
};
l.J = function(a, b) {
  return Xb(b, this);
};
l.Ea = function() {
  var a = this.ha.length, b;
  this.t + a < va(this.D) ? (b = this.D, a = this.t + a, b = Be ? Be(b, a, 0) : Ae.call(null, b, a, 0)) : b = null;
  return null == b ? null : b;
};
function Ae() {
  switch(arguments.length) {
    case 3:
      return Be(arguments[0], arguments[1], arguments[2]);
    case 4:
      return ze(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return Ce(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error([x("Invalid arity: "), x(arguments.length)].join(""));;
  }
}
function Be(a, b, c) {
  return new ye(a, se(a.j, a.shift, a.root, a.m, b), b, c, null, null);
}
function ze(a, b, c, d) {
  return new ye(a, b, c, d, null, null);
}
function Ce(a, b, c, d, e) {
  return new ye(a, b, c, d, e, null);
}
var Ee = function Ee(b, c, d) {
  if (0 === c) {
    var e = b.f;
    b = Array(d);
    kc(e, 0, b, d);
  } else {
    var f = pe(b), g = ma(f) ? b.f[32] : null, h = d - 1 >> c & 31, k = v(f) ? h : function() {
      for (var b = h;;) {
        if (d <= g[b]) {
          return b;
        }
        b += 1;
      }
    }(), n = v(f) ? function() {
      var b = vc(d, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 0 < k ? d - g[k - 1] : d, e = b.f, p = Ee(e[k], c - 5, n), t = 5 === c ? 32 === p.f.length : pe(p);
    b = Array(v(v(f) ? t : f) ? 32 : 33);
    var r = v(t) ? function() {
      var b = vc(n, 1 << c);
      return 0 === b ? 1 << c : b;
    }() : 5 === c ? p.f.length : qe(p);
    kc(e, 0, b, k);
    b[k] = p;
    if (ma(v(f) ? t : f)) {
      e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      p = 1 << c;
      if (v(f)) {
        for (f = 0;;) {
          if (f < k) {
            e[f] = (f + 1) * p, f += 1;
          } else {
            break;
          }
        }
      } else {
        for (f = 0;;) {
          if (f < k) {
            e[f] = g[f], f += 1;
          } else {
            break;
          }
        }
      }
      e[k] = (0 < k ? e[k - 1] : 0) + r;
      e[32] = k + 1;
      b[32] = e;
    }
  }
  return sd(null, b);
}, Fe = function Fe(b, c, d, e) {
  if (0 === c) {
    var f = b.f, g = f.length - d, h = Array(g);
    kc(f, d, h, g);
    return sd(null, h);
  }
  var k = pe(b), f = b.f, n = ma(k) ? b.f[32] : null, p = d >> c & 31, t = v(k) ? p : function() {
    for (var b = p;;) {
      if (d < n[b]) {
        return b;
      }
      b += 1;
    }
  }(), h = v(k) ? function() {
    for (var b = t;;) {
      if (32 === b || null == f[b]) {
        return b;
      }
      b += 1;
    }
  }() : n[32], r = Fe(f[t], c - 5, 0 < t ? d - (v(k) ? t * (1 << c) : n[t - 1]) : d, function() {
    var b = 1 << c, d = 0 < t ? e - (v(k) ? t * (1 << c) : n[t - 1]) : e;
    return b < d ? b : d;
  }()), g = h - t, g = null == r ? g - 1 : g;
  if (0 === g) {
    return null;
  }
  if (v(k)) {
    for (var h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], y = 1 << c, A = 0, C = v(function() {
      var b = null == r;
      return b ? b : (b = 5 === c) ? b : pe(r);
    }()) ? (1 << c) - (d >> c - 5 & 31) : qe(r);;) {
      if (A < g) {
        u[A] = C, C += y, A += 1;
      } else {
        break;
      }
    }
    u[g - 1] = e - d;
  } else {
    for (h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], u = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], y = 0, A = t;;) {
      if (y < g) {
        u[y] = n[A] - d, A += 1, y += 1;
      } else {
        break;
      }
    }
  }
  u[32] = g;
  kc(f, null == r ? t + 1 : t, h, g);
  null != r && (h[0] = r);
  h[32] = u;
  return sd(b.A, h);
};
function Ge(a, b, c, d, e, f) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.m = d;
  this.l = e;
  this.r = f;
  this.k = 2315152159;
  this.w = 2052;
}
l = Ge.prototype;
l.toString = function() {
  return ob(this);
};
l.ua = function(a, b) {
  return Aa.e(this, b, null);
};
l.va = function(a, b, c) {
  return Aa.e(this, b, c);
};
l.Ha = function(a, b, c) {
  var d = a = 0, e = c;
  c = se(this.j, this.shift, this.root, this.m, a);
  for (var f = c.length - 1, g = f + 1;;) {
    var h = a + d, k = c[d], e = b.e ? b.e(e, h, k) : b.call(null, e, h, k);
    if (d < f) {
      d += 1;
    } else {
      if (a += g, a < this.j) {
        f = se(this.j, this.shift, this.root, this.m, a), d = f.length, c = e, h = f, f = d - 1, g = d, d = 0, e = c, c = h;
      } else {
        return e;
      }
    }
  }
};
l.K = function(a, b) {
  if (0 <= b && b < this.j) {
    var c = this.j - this.m.length;
    if (c <= b) {
      return this.m[b - c];
    }
    for (var c = b, d = this.root, e = this.shift;;) {
      if (0 === e) {
        var f = d.f;
        return f[c >> e & 31];
      }
      if (v(pe(d))) {
        for (f = d.f, d = c >> e & 31, f = f[d], e -= 5;;) {
          f = f.f;
          d = c >> e & 31;
          if (0 === e) {
            return f[d];
          }
          e -= 5;
          f = f[d];
        }
      } else {
        var f = d.f, g = d.f[32];
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
    return ud(b, this.j);
  }
};
l.fa = function(a, b, c) {
  return 0 <= b && b < this.j ? Aa.b(this, b) : c;
};
l.wa = function(a, b, c) {
  return q.jb(b, q.kb, "[", " ", "]", c, this);
};
l.Ia = function(a, b, c) {
  if (0 <= b && b < this.j) {
    var d = this.j - this.m.length;
    return b >= d ? (a = Array(this.m.length), b -= d, kc(this.m, 0, a, this.m.length), a[b] = c, new Ge(this.j, this.shift, this.root, a, this.l, null)) : new Ge(this.j, this.shift, we(this.shift, this.root, b, c), this.m, this.l, null);
  }
  return b === this.j ? xa(this, c) : ud(b, this.j);
};
l.Aa = function() {
  return this;
};
l.H = function() {
  return this.l;
};
l.ja = function() {
  return this.j;
};
l.ya = function() {
  if (0 === this.j) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.j) {
    return Ta(J.EMPTY, this.l);
  }
  if (1 < this.m.length) {
    var a = Array(this.m.length - 1);
    kc(this.m, 0, a, a.length);
    return new Ge(this.j - 1, this.shift, this.root, a, this.l, null);
  }
  var a = se(this.j, this.shift, this.root, this.m, this.j - 2), b = ve(this.shift, this.j - this.m.length, this.root.A, this.root);
  return null == b ? new Ge(this.j - 1, this.shift, oe, a, this.l, null) : 5 < this.shift && null == b.f[1] ? new Ge(this.j - 1, this.shift - 5, b.f[0], a, this.l, null) : new Ge(this.j - 1, this.shift, b, a, this.l, null);
};
l.C = function() {
  var a = this.r;
  return null != a ? a : this.r = a = yc(this);
};
l.s = function(a, b) {
  return Vb(this, b);
};
l.R = function() {
  return hc(J.EMPTY, this.l);
};
l.za = function(a, b, c) {
  a = c - b;
  if (0 > b || c > this.j) {
    throw Error("vector index out of bounds");
  }
  if (b === c) {
    return null == this ? null : wa(this);
  }
  if (b > c) {
    throw Error("start index greater than end index");
  }
  var d = this.j - this.m.length;
  if (b >= d) {
    return c = Array(a), kc(this.m, b - d, c, a), new Ge(a, 5, oe, c, this.l, null);
  }
  var e = c > d, f = e ? this.root : Ee(this.root, this.shift, c);
  b = 0 === b ? f : Fe(f, this.shift, b, c < d ? c : d);
  e ? (c -= d, d = Array(c), kc(this.m, 0, d, c), c = d) : c = se(a, this.shift, b, [], a - 1);
  e = e ? b : ve(this.shift, a, b.A, b);
  if (null == e) {
    return new Ge(a, 5, oe, c, this.l, null);
  }
  for (b = this.shift;;) {
    if (5 < b && null == e.f[1]) {
      b -= 5, e = e.f[0];
    } else {
      return new Ge(a, b, e, c, this.l, null);
    }
  }
};
l.L = function(a, b) {
  return Pb(this, b);
};
l.M = function(a, b, c) {
  return Qb(this, b, c);
};
l.La = function(a, b, c) {
  return Na(this, b, c);
};
l.O = function() {
  return 0 === this.j ? null : 0 === this.j - this.m.length ? Yb(this.m, 0) : Be(this, 0, 0);
};
l.P = function(a, b) {
  return new Ge(this.j, this.shift, this.root, this.m, b, this.r);
};
l.J = function(a, b) {
  if (32 > this.m.length) {
    var c = this.m.length, d = Array(c + 1);
    kc(this.m, 0, d, c);
    d[c] = b;
    return new Ge(this.j + 1, this.shift, this.root, d, this.l, null);
  }
  c = sd(this.root.A, this.m);
  d = [null];
  d[0] = b;
  if (v(re(this.root, this.shift, this.j))) {
    if (v(pe(this.root))) {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = sd(this.root.A, e), g = e;
      g[0] = this.root;
      g[1] = te(this.m, this.root.A, this.shift, c);
    } else {
      var e = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], f = sd(this.root.A, e), h = this.root.f[32][31];
      e[0] = this.root;
      e[1] = te(this.m, this.root.A, this.shift, c);
      e[32] = g;
      g[0] = h;
      g[1] = h + 32;
      g[32] = 2;
    }
    return new Ge(this.j + 1, this.shift + 5, f, d, this.l, null);
  }
  return new Ge(this.j + 1, this.shift, ue(this.shift, this.j, this.root.A, this.root, c), d, this.l, null);
};
l.call = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return this.K(null, c);
  };
  a.e = function(a, c, d) {
    return this.fa(null, c, d);
  };
  return a;
}();
l.apply = function(a, b) {
  return this.call.apply(this, [this].concat(qa(b)));
};
l.a = function(a) {
  return this.K(null, a);
};
l.b = function(a, b) {
  return this.fa(null, a, b);
};
J.prototype.Aa = function() {
  var a = bc(this), b = this.shift, c = this.root, d = this.m, e;
  e = ((e = null != this) ? this ? this.k & 131072 || this.sb || (this.k ? 0 : na(Pa, this)) : na(Pa, this) : e) ? Ra(this) : null;
  return new Ge(a, b, c, d, e, null);
};
q.Ta.prototype.Aa = function() {
  var a = this.start, b = this.end;
  return ne(xe(this.Bb), a, b);
};
J.prototype.za = function(a, b, c) {
  return ne(xe(this), b, c);
};
q.Ta.prototype.za = function(a, b, c) {
  return ne(xe(this), b, c);
};
function He(a, b) {
  return ne(a, b, bc(a));
}
;new q.pb(null, new q.g(null, 11, ["path", null, "svg", null, "text", null, "line", null, "polygon", null, "textPath", null, "polyline", null, "g", null, "clipPath", null, "rect", null, "circle", null], null), null);
var Ie = function Ie() {
  return Ie.h(arguments[0], 1 < arguments.length ? new B(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Ie.h = function(a, b) {
  var c = L(b, 0), d = L(c, 0), c = L(c, 1);
  xc(b);
  a.beginPath();
  a.moveTo(d, c);
  for (var d = z(b), e = null, f = 0, g = 0;;) {
    if (g < f) {
      var h = e.K(null, g), c = L(h, 0), h = L(h, 1);
      a.lineTo(c, h);
      g += 1;
    } else {
      if (d = z(d)) {
        jc(d) ? (e = hb(d), d = ib(d), c = e, f = bc(e), e = c) : (e = E(d), c = L(e, 0), h = L(e, 1), a.lineTo(c, h), d = G(d), e = null, f = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
Ie.q = 1;
Ie.n = function(a) {
  var b = E(a);
  a = G(a);
  return Ie.h(b, a);
};
var Je = function Je() {
  return Je.h(arguments[0], 1 < arguments.length ? new B(Array.prototype.slice.call(arguments, 1), 0) : null);
};
Je.h = function(a, b) {
  Pc(Ie, a, b);
  return a.stroke();
};
Je.q = 1;
Je.n = function(a) {
  var b = E(a);
  a = G(a);
  return Je.h(b, a);
};
function Ke(a, b, c) {
  var d = L(b, 0);
  b = L(b, 1);
  a.beginPath();
  a.arc(d, b, c, 0, 2 * Math.PI);
  return a.stroke();
}
function Le(a, b, c, d, e) {
  var f = L(b, 0);
  b = L(b, 1);
  a.beginPath();
  a.arc(f, b, c, d, e);
  return a.stroke();
}
function Me(a) {
  var b = a.canvas;
  a.clearRect(0, 0, b.width, b.height);
}
function Ne(a, b) {
  a.save();
  try {
    return b.i ? b.i() : b.call(null);
  } finally {
    a.restore();
  }
}
;var Oe = new J(null, 3, 5, J.d, [new J(null, 4, 5, J.d, [new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-415, 44], null), U, new J(null, 2, 5, J.d, [-415, -313], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-415, -313], null), U, new J(null, 2, 5, J.d, [-55, -313], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-51, 246], null), U, new J(null, 2, 5, J.d, [377, 246], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [377, 246], null), U, new J(null, 
2, 5, J.d, [377, -200], null)], null)], null), new J(null, 8, 5, J.d, [new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-344, 341], null), U, [-469, 341]], null), new q.g(null, 3, [W, Y, X, [-469, 341], U, [-469, -292]], null), new q.g(null, 3, [W, Y, X, [-469, -292], U, [-327, -292]], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-189, 340], null), U, [261, 340]], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-203, -294], null), U, [261, -294]], null), new q.g(null, 3, 
[W, Y, X, new J(null, 2, 5, J.d, [409, -293], null), U, [541, -293]], null), new q.g(null, 3, [W, Y, X, [541, -293], U, [541, 327]], null), new q.g(null, 3, [W, Y, X, [541, 327], U, [420, 327]], null)], null), new J(null, 10, 5, J.d, [new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-487, 145], null), U, new J(null, 2, 5, J.d, [-487, -206], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-487, -206], null), U, [-241, -452]], null), new q.g(null, 3, [W, Y, X, [-241, -452], U, new J(null, 
2, 5, J.d, [-5, -452], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-5, -452], null), U, new J(null, 2, 5, J.d, [-5, -280], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-190, 399], null), U, new J(null, 2, 5, J.d, [153, 399], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [153, 399], null), U, new J(null, 2, 5, J.d, [461, 399], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [461, 399], null), U, new J(null, 2, 5, J.d, [461, 
120], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [461, 120], null), U, new J(null, 2, 5, J.d, [261, 120], null)], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [318, -426], null), U, [530, -214]], null), new q.g(null, 3, [W, Y, X, new J(null, 2, 5, J.d, [-508, 422], null), U, [-235, 149]], null)], null)], null);
var Pe = 2 * Math.PI;
if ("undefined" === typeof Qe) {
  var Qe = function() {
    var a = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), b = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), c = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), d = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), e = dc(q.g.EMPTY, ce, q.Ba());
    return new q.sa(Hb("draw-segment"), function() {
      return function(a, b) {
        return W.a(b);
      };
    }(a, b, c, d, e), Cd, e, a, b, c, d);
  }()
}
Qe.I(null, Y, function(a, b) {
  var c = O(b) ? Q(q.o, b) : b, d = M(c, X), c = M(c, U);
  return Je.h(a, Zb([d, c], 0));
});
Qe.I(null, Nd, function(a, b) {
  var c = O(b) ? Q(q.o, b) : b, d = M(c, Rd), e = M(c, Fd), f = M(c, Gd), g = M(c, Ad), c = M(c, yd);
  return 0 > g ? Le(a, d, c, f, e) : Le(a, d, c, e, f);
});
if ("undefined" === typeof Re) {
  var Re = function() {
    var a = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), b = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), c = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), d = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), e = dc(q.g.EMPTY, ce, q.Ba());
    return new q.sa(Hb("update-seg"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Cd, e, a, b, c, d);
  }()
}
Re.I(null, Y, function(a, b, c) {
  a = O(a) ? Q(q.o, a) : a;
  var d = M(a, Ad);
  b = ie(b, d);
  return pd(a, H.b(c, Qd) ? U : X, he, b);
});
Re.I(null, Nd, function(a, b, c) {
  a = O(a) ? Q(q.o, a) : a;
  var d = M(a, Ad), e = M(a, yd);
  b = b / e * d;
  return pd(a, H.b(c, Qd) ? Gd : Fd, rc, b);
});
function Se(a, b) {
  return pd(Re.e ? Re.e(a, b, Qd) : Re.call(null, a, b, Qd), Ud, rc, b);
}
function Te(a, b) {
  var c = O(a) ? Q(q.o, a) : a;
  M(c, W);
  return pd(Re.e ? Re.e(c, b, Sd) : Re.call(null, c, b, Sd), Ud, tc, b);
}
function Ue(a, b) {
  for (var c = 0, d = b;;) {
    if (H.b(c, bc(a))) {
      throw alert("Uh... somehow our snake disappeared."), Error("WTF");
    }
    if (d < Ud.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }())) {
      return He(pd(a, c, Te, d), c);
    }
    var e = c + 1, d = d - Ud.a(function() {
      var b = c;
      return a.a ? a.a(b) : a.call(null, b);
    }()), c = e;
  }
}
if ("undefined" === typeof Ve) {
  var Ve = function() {
    var a = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), b = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), c = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), d = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), e = dc(q.g.EMPTY, ce, q.Ba());
    return new q.sa(Hb("seg-normal"), function() {
      return function(a) {
        return W.a(a);
      };
    }(a, b, c, d, e), Cd, e, a, b, c, d);
  }()
}
Ve.I(null, Y, function(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, Ad), c = L(d, 0), d = L(d, 1);
  return H.b(b, fe) ? [-d, c] : [d, -c];
});
Ve.I(null, Nd, function(a, b) {
  var c = O(a) ? Q(q.o, a) : a;
  M(c, Fd);
  var d = M(c, Gd), c = M(c, Ad) * (H.b(b, fe) ? -1 : 1);
  return ie(c, new J(null, 2, 5, J.d, [Math.cos(d), Math.sin(d)], null));
});
if ("undefined" === typeof We) {
  var We = function() {
    var a = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), b = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), c = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), d = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), e = dc(q.g.EMPTY, ce, q.Ba());
    return new q.sa(Hb("seg-endpoint"), W, Cd, e, a, b, c, d);
  }()
}
We.I(null, Y, function(a) {
  return U.a(a);
});
We.I(null, Nd, function(a) {
  var b = O(a) ? Q(q.o, a) : a;
  M(b, Fd);
  a = M(b, Gd);
  var c = M(b, Rd), b = M(b, yd);
  return he(c, [b * Math.cos(a), b * Math.sin(a)]);
});
function Xe(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, Id);
  return N.e(c, Id, H.b(Ud.a($b(d)), 0) ? ac.b(null == d ? null : La(d), b) : ac.b(d, b));
}
function Ye(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, Pd), e = M(c, Id);
  return H.b(d, b) ? c : Xe(N.e(c, Pd, b), function() {
    switch(b instanceof P ? b.qa : null) {
      case "left":
        var a = $b(e), c = function() {
          var c = a;
          return Ve.b ? Ve.b(c, b) : Ve.call(null, c, b);
        }(), d = L(c, 0), k = L(c, 1), c = he(function() {
          var b = a;
          return We.a ? We.a(b) : We.call(null, b);
        }(), ie(20, c)), n = Math.atan2(-k, -d), d = n, k = H.b(b, fe) ? 1 : -1;
        return new q.g(null, 7, [W, Nd, Rd, c, Fd, n, Gd, d, Ud, 0, Ad, k, yd, 20], null);
      case "right":
        return a = $b(e), c = function() {
          var c = a;
          return Ve.b ? Ve.b(c, b) : Ve.call(null, c, b);
        }(), d = L(c, 0), k = L(c, 1), c = he(function() {
          var b = a;
          return We.a ? We.a(b) : We.call(null, b);
        }(), ie(20, c)), d = n = Math.atan2(-k, -d), k = H.b(b, fe) ? 1 : -1, new q.g(null, 7, [W, Nd, Rd, c, Fd, n, Gd, d, Ud, 0, Ad, k, yd, 20], null);
      default:
        return d = $b(e), a = k = O(d) ? Q(q.o, d) : d, d = M(k, Gd), k = M(k, Ad), c = function() {
          var b = a;
          return We.a ? We.a(b) : We.call(null, b);
        }(), new q.g(null, 5, [W, Y, X, c, U, c, Ud, 0, Ad, ie(k, [-Math.sin(d), Math.cos(d)])], null);
    }
  }());
}
function Ze(a) {
  var b = I.a ? I.a(bd) : I.call(null, bd);
  Ne(a, function() {
    var c = a.canvas, d = c.width, c = c.height, e = d / 1280;
    Me(a);
    a.translate(d / 2, c / 2);
    a.scale(e, -e);
    return q.Ka(Vc(Qe, a), Nc.h(Kd.a(b), T.b(q.nb, Jd.a(b)), Zb([Id.a(b)], 0)));
  });
}
function $e(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, Fd), e = M(c, Gd), c = M(c, Ad);
  if (c * (e - d) > Pe) {
    return!0;
  }
  var f = vc(b, Pe), d = vc(d, Pe), e = vc(e, Pe);
  return 0 > c ? e < d ? e <= f && f <= d : 0 <= f && f <= d || e <= f && f <= Pe : d < e ? d <= f && f <= e : 0 <= f && f <= e || d <= f && f <= Pe;
}
if ("undefined" === typeof af) {
  var af = function() {
    var a = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), b = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), c = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), d = function() {
      var a = q.g.EMPTY;
      return S ? S(a) : R.call(null, a);
    }(), e = dc(q.g.EMPTY, ce, q.Ba());
    return new q.sa(Hb("check-intersection"), function() {
      return function(a, b) {
        return new J(null, 2, 5, J.d, [W.a(a), W.a(b)], null);
      };
    }(a, b, c, d, e), Cd, e, a, b, c, d);
  }()
}
af.I(null, new J(null, 2, 5, J.d, [Y, Y], null), function(a, b) {
  var c, d = new J(null, 2, 5, J.d, [X.a(a), U.a(a)], null);
  c = new J(null, 2, 5, J.d, [X.a(b), U.a(b)], null);
  var e = L(d, 0), d = L(d, 1), f = L(c, 0), g = L(c, 1), d = ge(d, e);
  c = L(d, 0);
  var d = L(d, 1), h = ge(g, f), g = L(h, 0), h = L(h, 1), f = ge(f, e), e = L(f, 0), f = L(f, 1), k = -1 * c * h - -1 * d * g;
  c = H.b(k, 0) ? null : new J(null, 2, 5, J.d, [(h * e * -1 + g * f) / k, (-1 * d * e + c * f) / k], null);
  e = L(c, 0);
  d = L(c, 1);
  return v(c) ? 0 < e && 1 > e && 0 < d && 1 > d : c;
});
af.I(null, new J(null, 2, 5, J.d, [Y, Nd], null), function(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, X), c = M(c, U), e = O(b) ? Q(q.o, b) : b, f = M(e, yd);
  var g = M(e, Rd), c = ge(c, d), e = je(c, c), d = ge(d, g), g = je(d, d), h = je(c, d), f = Math.pow(h, 2) - e * (g - f * f);
  0 <= f ? (g = Math.sqrt(f), f = (-je(c, d) - g) / e, e = (-je(c, d) + g) / e, g = me(he(ie(f, c), d)), c = me(he(ie(e, c), d)), f = new J(null, 4, 5, J.d, [f, e, g, c], null)) : f = null;
  g = L(f, 0);
  e = L(f, 1);
  d = L(f, 2);
  c = L(f, 3);
  return v(f) ? (d = (f = 0 < g && 1 > g) ? $e(b, d) : f, v(d) ? d : (e = 0 < e && 1 > e) ? $e(b, c) : e) : f;
});
af.I(null, new J(null, 2, 5, J.d, [Nd, Y], null), function(a, b) {
  return af.b ? af.b(b, a) : af.call(null, b, a);
});
af.I(null, new J(null, 2, 5, J.d, [Nd, Nd], null), function(a, b) {
  var c;
  var d = Rd.a(a), e = yd.a(a);
  c = Rd.a(b);
  var f = yd.a(b), g = ge(c, d), d = L(g, 0);
  c = L(g, 1);
  g = je(g, g);
  g = (g + f * f + -(e * e)) / (2 * f * Math.sqrt(g));
  1 >= Math.abs(g) ? (g = Math.acos(g), e = Math.asin(f / e * Math.sin(g)), f = Math.atan2(c, d), c = new J(null, 4, 5, J.d, [f + e, f - e, f + Math.PI + -g, f + Math.PI + g], null)) : c = null;
  g = L(c, 0);
  d = L(c, 1);
  f = L(c, 2);
  e = L(c, 3);
  return v(c) ? (c = $e(a, g), d = v(c) ? c : $e(a, d), v(d) ? (f = $e(b, f), v(f) ? f : $e(b, e)) : d) : c;
});
function bf(a) {
  var b = O(a) ? Q(q.o, a) : a, c = M(b, Kd), d = M(b, Id), e = $b(d), f = null == d ? null : La(d);
  return Tc(function(a) {
    return function(b) {
      return af.b ? af.b(a, b) : af.call(null, a, b);
    };
  }(e, f, a, b, b, c, d), Nc.b(c, v(Sc(f)) ? null == f ? null : La(f) : f));
}
function cf(a) {
  var b = O(a) ? Q(q.o, a) : a, c = M(b, Jd), d = M(b, Id), e = $b(d);
  return nc(function() {
    return function(a, b) {
      var c = L(b, 0);
      L(b, 1);
      return pd(pd(a, Zd, rc, 50), Jd, ec, c);
    };
  }(e, a, b, b, c, d), b, fd(Uc(Vc(af, e), q.nb), c));
}
var df = S ? S(null) : R.call(null, null);
function ef(a, b) {
  for (var c = O(b) ? Q(q.o, b) : b, d = M(c, Kd), e = a.canvas, f = e.width, g = e.height, h = q.pa(f) - f / 2, k = q.pa(g) - g / 2;;) {
    if (v(Tc(function() {
      return function(a) {
        return 20 > a;
      };
    }(h, k, e, f, g, b, c, c, d), T.b(Uc(function(a, b) {
      return function(c) {
        var d = new J(null, 2, 5, J.d, [a, b], null), e = L(c, 0);
        c = L(c, 1);
        c = ge(c, e);
        var f = je(ge(e, d), c) / je(c, c) * -1, f = 1 < f ? 1 : f;
        return ke(ge(he(e, ie(0 > f ? 0 : f, c)), d));
      };
    }(h, k, e, f, g, b, c, c, d), q.zb.b(X, U)), d)))) {
      h = q.pa(f) - f / 2, k = q.pa(g) - g / 2;
    } else {
      return new J(null, 2, 5, J.d, [h, k], null);
    }
  }
}
var ff = new J(null, 1, 5, J.d, [new q.g(null, 5, [Ud, 100, W, Y, Ad, new J(null, 2, 5, J.d, [1, 0], null), X, new J(null, 2, 5, J.d, [0, 0], null), U, new J(null, 2, 5, J.d, [100, 0], null)], null)], null);
function gf() {
  var a = new J(null, 5, 5, J.d, [new J(null, 2, 5, J.d, [-642, 482], null), new J(null, 2, 5, J.d, [642, 482], null), new J(null, 2, 5, J.d, [642, -482], null), new J(null, 2, 5, J.d, [-642, -482], null), new J(null, 2, 5, J.d, [-642, 482], null)], null);
  return T.e(function(a, c) {
    return new q.g(null, 3, [W, Y, X, a, U, c], null);
  }, a, Ib(a));
}
function hf(a, b) {
  return nc(function(a, d) {
    return qd(a, Jd, N, d, new q.g(null, 6, [W, Nd, Rd, ef(b, a), Fd, 0, Gd, Pe, Ad, 1, yd, 10], null));
  }, N.h(a, Id, ff, Zb([Ud, 100, Zd, 100, Pd, null, Jd, q.g.EMPTY, Kd, Nc.b(gf(), function() {
    var b = Od.a(a);
    return Oe.a ? Oe.a(b) : Oe.call(null, b);
  }()), dd, !1], 0)), q.Ja.a(10));
}
var bd, jf = new q.g(null, 1, [Od, 0], null);
bd = S ? S(jf) : R.call(null, jf);
var kf = document.createElement("button");
kf.textContent = "Pause";
var lf, mf, nf = wc(3 * (window.innerWidth - 20), 4);
mf = 1280 < nf ? 1280 : nf;
var of = wc(4 * (window.innerHeight - 10), 3);
lf = mf < of ? mf : of;
var pf = wc(3 * lf, 4), qf = document.createElement("canvas");
v(lf) && qf.setAttribute("width", lf);
v(pf) && qf.setAttribute("height", pf);
qf.setAttribute("style", "border: 1px solid #000; display: block;");
var rf = document.createElement("div"), sf = qf.getContext("2d");
function tf(a) {
  a: {
    var b = T.b(x, a);
    a = new fa;
    for (b = z(b);;) {
      if (b) {
        a.append("" + x(E(b))), b = G(b), null != b && a.append("");
      } else {
        a = a.toString();
        break a;
      }
    }
  }
  rf.textContent = a;
}
var uf = function uf(b) {
  kf.textContent = "Pause";
  return kf.onclick = function() {
    cd(!0);
    kf.textContent = "Go";
    return kf.onclick = function() {
      cd(!1);
      vf.a ? vf.a(b) : vf.call(null, b);
      return uf(b);
    };
  };
};
function wf(a) {
  kf.textContent = "Start";
  return kf.onclick = function() {
    tf(Zb(["Press A and D to turn left and right."], 0));
    ad(hf, a);
    vf.a ? vf.a(a) : vf.call(null, a);
    return uf(a);
  };
}
var xf = new q.g(null, 4, [65, fe, 37, fe, 68, Xd, 39, Xd], null);
function vf(a) {
  window.onkeydown = function(a) {
    a = a.which;
    a = xf.a ? xf.a(a) : xf.call(null, a);
    return v(a) ? ad(Ye, a) : null;
  };
  window.onkeyup = function(a) {
    a = a.which;
    a = xf.a ? xf.a(a) : xf.call(null, a);
    return v(a) ? H.b(a, Pd.a(I.a ? I.a(bd) : I.call(null, bd))) ? ad(Ye, null) : null : null;
  };
  return function(b) {
    return function d() {
      if (ma(dd.a(I.a ? I.a(bd) : I.call(null, bd)))) {
        var e = $c(bd, function() {
          return function(a) {
            var b;
            b = Zd.a(a);
            a = O(a) ? Q(q.o, a) : a;
            var d = M(a, Id), e = M(a, Ud), n = bc(d) - 1, p = e + 3 - b, d = pd(d, n, Se, 3);
            b = N.h(a, Id, 0 < p ? Ue(d, p) : d, Zb([Ud, Math.min(e + 3, b)], 0));
            return cf(b);
          };
        }(b));
        if (v(bf(e))) {
          return tf(Zb(["Snake?  Snake?! SNAAAAAAAAKE!!"], 0)), e = I.a ? I.a(bd) : I.call(null, bd), Zc.b ? Zc.b(df, e) : Zc.call(null, df, e), wf(a), b();
        }
        if (ic(Jd.a(e))) {
          return tf(Zb(["You did it, Snake!  Unfortunately there's another facility \n                                we need you to infiltrate."], 0)), $c(bd, function() {
            return function(a) {
              return N.e(a, Od, vc(Od.a(a) + 1, bc(Oe)));
            };
          }(e, b)), wf(a), b();
        }
        Ze(a);
        return window.requestAnimationFrame(d);
      }
      return b();
    };
  }(function() {
    window.onkeydown = null;
    return window.onkeyup = null;
  }).call(null);
}
ba("figwheel_test.snake.init_everything", function() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(kf);
    a.appendChild(rf);
    return a;
  }());
  a.appendChild(qf);
  tf(Zb(["Snake!  We need you to infiltrate this 2D facility and retrieve\nall of the plans for Plastic Gear!  Don't touch any of the walls in the facility\nthough, they're coated with a deadly neurotoxin!  Also, don't touch yourself either,\nwe've heard that's bad for you."], 0));
  return wf(sf);
});
document.querySelector("body").innerHTML = "";
var yf = document.createElement("canvas");
yf.setAttribute("width", 1280);
yf.setAttribute("height", 960);
yf.setAttribute("style", "border: 1px solid #000");
yf.getContext("2d");
document.querySelector("body").appendChild(yf);
var Af = new J(null, 2, 5, J.d, [0, 0], null);
S || R.call(null, Af);
var Bf = 2 * Math.PI, Cf = document.createElement("button");
Cf.textContent = "Pause";
var Df, Ef, Ff = wc(3 * (window.innerWidth - 20), 4);
Ef = 1280 < Ff ? 1280 : Ff;
var Gf = wc(4 * (window.innerHeight - 10), 3);
Df = Ef < Gf ? Ef : Gf;
var Hf = wc(3 * Df, 4), If = document.createElement("canvas");
v(Df) && If.setAttribute("width", Df);
v(Hf) && If.setAttribute("height", Hf);
If.setAttribute("style", "border: 1px solid #000; display: block;");
var Jf = document.createElement("div"), Z = If.getContext("2d");
function Kf() {
  var a = document.querySelector("body");
  a.innerHTML = "";
  a.appendChild(function() {
    var a = document.createElement("div");
    a.setAttribute("style", "float: right; text-align: right; width: 25%");
    a.appendChild(Cf);
    a.appendChild(Jf);
    return a;
  }());
  return a.appendChild(If);
}
ba("figwheel_test.common.init_elements", Kf);
function Lf(a) {
  Ne(Z, function() {
    v(!0) && Me(Z);
    Z.translate(640, 480);
    Z.scale(1, -1);
    return a.i ? a.i() : a.call(null);
  });
}
function Mf() {
  for (var a = new J(null, 3, 5, J.d, [q.pa(500) - 250, -215, q.pa(500) - 250], null), b = 300, c = 5;;) {
    if (0 < c) {
      a = Nc.b(ed(function(a, b) {
        return function(a, c) {
          return new J(null, 2, 5, J.d, [a, (a + c) / 2 + (q.oa.i() - .5) * b], null);
        };
      }(a, b, c), Zb([a, Ib(a)], 0)), new J(null, 1, 5, J.d, [$b(a)], null)), b /= 2, --c;
    } else {
      return q.D(a);
    }
  }
}
function Nf(a) {
  var b = bc(a) / 2;
  return nc(function() {
    return function(a, b) {
      return N.e(a, b, -215);
    };
  }(b), a, q.Ja.b(b - 4, b + 4));
}
function Of() {
  var a = Mf(), b = bc(a) - 1;
  return q.D(Wc(function(a, b) {
    return function(a, c) {
      return new J(null, 2, 5, J.d, [1280 * a / b - 640, c], null);
    };
  }(a, b), Nf(a)));
}
function Pf(a) {
  return 0 < Yd.a(id.a(a));
}
var Qf = function(a) {
  return function() {
    return $c(a, function() {
      return function(a) {
        return vc(a + 1, 1E5);
      };
    }(a));
  };
}(S ? S(0) : R.call(null, 0));
function Rf(a, b, c) {
  b = [Math.cos(b), Math.sin(b)];
  return qd(a, xd, N, Qf.i ? Qf.i() : Qf.call(null), new q.g(null, 2, [$d, he(c, ie(50, b)), zd, ie(15, b)], null));
}
function Sf(a) {
  var b = new J(null, 1, 5, J.d, [id], null), c = I.a ? I.a(Tf) : I.call(null, Tf), d = I.a ? I.a(Uf) : I.call(null, Uf), e = hd(a, b), e = O(e) ? Q(q.o, e) : e, f = M(e, de), g = M(e, ee), h = M(e, Bd), k = M(e, Dd), n = M(e, Ed), p = M(e, Hd), t = M(e, kd), r = M(e, Md), u = M(e, Wd), y = M(e, Yd), A = new J(null, 2, 5, J.d, [Math.cos(n), Math.sin(n)], null), C = function() {
    var a;
    a = L(A, 0);
    var b = L(A, 1), d = L(c, 0), e = L(c, 1);
    a = a * e - d * b;
    b = je(A, c);
    return Math.atan2(a, b);
  }(), r = k + r * C + -1 * k * u, F = n + k, k = function() {
    var a = H.b(p, 0);
    return a && (a = H.b(f, 0)) ? (a = 0 < h) ? v(d) ? 0 < y : d : a : a;
  }(), g = v(k) ? g + 3 : .995 * g;
  return ld(v(k) ? Rf(a, n, t) : a, b, N.e(N.e(N.e(N.e(N.e(N.e(e, Hd, v(k) ? 5 : function() {
    var a = p - 1;
    return 0 < a ? a : 0;
  }()), ee, g), de, 100 < g ? 600 : function() {
    var a = f - 1;
    return 0 < a ? a : 0;
  }()), Bd, v(k) ? h - 1 : h), Dd, 0 > F || F > Bf / 2 ? 0 : r), Ed, function() {
    var a = 0 < F ? F : 0, b = Bf / 2;
    return a < b ? a : b;
  }()));
}
function Vf(a) {
  var b = O(a) ? Q(q.o, a) : a, c = M(b, Ed), d = M(b, Hd), e = M(b, kd), f = M(b, Yd);
  Ne(Z, function(a, b, c, d, e, f) {
    return function() {
      var r = L(e, 0), u = L(e, 1);
      Z.translate(r, u);
      return 0 < f ? (Ne(Z, function(a, b, c, d, e, f, g) {
        return function() {
          Z.rotate(f);
          Je.h(Z, Zb([new J(null, 2, 5, J.d, [20, -3], null), new J(null, 2, 5, J.d, [20, 3], null), new J(null, 2, 5, J.d, [40, 3], null), new J(null, 2, 5, J.d, [40, -3], null), new J(null, 2, 5, J.d, [20, -3], null)], 0));
          return H.b(g, 5) ? Ke(Z, new J(null, 2, 5, J.d, [50, 0], null), 10) : null;
        };
      }(e, r, u, a, b, c, d, e, f)), Z.fillStyle = "#fff", Z.beginPath(), Z.arc(0, 0, 30, Bf / -12, 7 * Bf / 12), Z.lineTo(15 * Math.sqrt(3), -15), Z.fill(), Z.stroke()) : Je.h(Z, Zb([new J(null, 2, 5, J.d, [-24, -15], null), new J(null, 2, 5, J.d, [-28, -3], null), new J(null, 2, 5, J.d, [-21, -4], null), new J(null, 2, 5, J.d, [-14, 5], null), new J(null, 2, 5, J.d, [4, -4], null), new J(null, 2, 5, J.d, [11, 3], null), new J(null, 2, 5, J.d, [25, 0], null), new J(null, 2, 5, J.d, [30, 4], null), 
      new J(null, 2, 5, J.d, [28, -15], null), new J(null, 2, 5, J.d, [-24, -15], null)], 0));
    };
  }(a, b, c, d, e, f));
}
function Wf(a, b) {
  return nc(function(b, d) {
    var e = L(d, 0), f = L(d, 1), g, h = $d.a(a);
    g = ge(zd.a(a), zd.a(f));
    f = $d.a(f);
    f = ge(h, f);
    h = je(g, g);
    g = 2 * je(f, g);
    f = je(f, f) - 100;
    f = g * g - 4 * h * f;
    g = 0 < f ? (-g - Math.sqrt(f)) / (2 * h) : null;
    return v(v(g) ? 0 < g && 1 > g : g) ? ma(b) || g < E(G(b)) ? [e, g] : b : b;
  }, null, b);
}
function Xf(a, b, c, d) {
  d = O(d) ? Q(q.o, d) : d;
  var e = M(d, $d), f = M(d, zd);
  var g = L(e, 0), h = L(e, 1);
  if (g = 640 < Math.abs(g)) {
    e = g;
  } else {
    if (h = 480 < Math.abs(h)) {
      e = h;
    } else {
      var h = he(e, f), g = Td.a(a), e = L(h, 0), h = L(h, 1), k = 1280 / (bc(g) - 1), n = wc(640 + e, k);
      if (0 <= n && n < bc(g) - 1) {
        var k = g.a ? g.a(n) : g.call(null, n), n = n + 1, n = g.a ? g.a(n) : g.call(null, n), g = L(k, 0), k = L(k, 1), p = L(n, 0), n = L(n, 1), e = h < k + (e - g) * (n - k) / (p - g)
      } else {
        e = !1;
      }
    }
  }
  return v(e) ? pd(a, b, ec, c) : ld(a, new J(null, 2, 5, J.d, [b, c], null), pd(pd(d, zd, he, new J(null, 2, 5, J.d, [0, -.1], null)), $d, he, f));
}
function Yf(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, $d), c = M(c, zd);
  return Je.h(b, Zb([d, ge(d, c)], 0));
}
var Zf = new J(null, 3, 5, J.d, [function(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, $d);
  return Ne(b, function(a, c, d) {
    return function() {
      b.translate(E(d), E(G(d)));
      return b.fillRect(-2.5, -2.5, 5, 5);
    };
  }(a, c, d));
}, Yf, function(a, b) {
  var c = O(a) ? Q(q.o, a) : a, c = M(c, $d);
  return Ke(b, c, 2);
}], null);
function $f(a, b, c, d, e) {
  return nc(function(a) {
    var c = q.oa.i() * (e - d) + d, h = q.oa.i() * (2 * Bf / 3) - Bf / 12;
    return pd(a, Ld, ac, new J(null, 2, 5, J.d, [Qf.i ? Qf.i() : Qf.call(null), new q.g(null, 3, [$d, b, zd, [c * Math.cos(h), c * Math.sin(h)], be, q.Ab(Zf)], null)], null));
  }, a, q.Ja.a(c));
}
function ag(a, b, c) {
  var d = O(c) ? Q(q.o, c) : c;
  c = M(d, $d);
  var e = M(d, zd), f = Wf(d, ae.a(a));
  return v(f) ? (d = L(f, 0), L(f, 1), $f(pd(md.e(md.p(a, new J(null, 3, 5, J.d, [ae, d, zd], null), he, ie(.25, e)), new J(null, 3, 5, J.d, [ae, d, Yd], null), uc), xd, ec, b), c, 4, 4, 8)) : Xf(a, xd, b, d);
}
function bg(a, b, c) {
  return Xf(a, Ld, b, c);
}
function cg(a, b) {
  var c = O(a) ? Q(q.o, a) : a, d = M(c, $d), e = M(c, zd), f = 1280 / (bc(b) - 1), g = L(d, 0), h = L(d, 1), k = E(e), n = wc(640 + g + (0 < k ? -10 : 10), f), p = wc(640 + g + E(e) + (0 < k ? 10 : -10), f), t = n < p ? n : p, r = n > p ? n : p, u = q.Ja.b(0 < t ? t : 0, function() {
    var a = r + 1, c = bc(b) - 1;
    return a < c ? a : c;
  }());
  return nc(function(a, c, d, e, f, g, h, k, n, p, r, t, u, ta, la) {
    return function(a, c) {
      L(a, 0);
      var d = L(a, 1), e = b.a ? b.a(c) : b.call(null, c), g;
      g = c + 1;
      g = b.a ? b.a(g) : b.call(null, g);
      a: {
        for (var h = 0, k = f;;) {
          var n, p = k;
          n = la;
          var r = e, t = ge(g, r), u = je(ge(r, p), t) / je(t, t) * -1, u = 1 < u ? 1 : u, r = he(r, ie(0 > u ? 0 : u, t)), r = ge(r, p), t = ke(r), p = t - 10;
          n = je(n, r) / t;
          n = .001 > Math.abs(n) ? null : p / n;
          if (null == n) {
            e = null;
            break a;
          }
          if (.01 > Math.abs(n)) {
            e = h;
            break a;
          }
          if (0 > n || 1 < h + n) {
            e = null;
            break a;
          }
          h += n;
          k = he(k, ie(n, la));
        }
      }
      return v(v(e) ? null == a || e < d : e) ? new J(null, 2, 5, J.d, [c, e], null) : a;
    };
  }(f, d, g, h, d, k, n, p, t, r, u, a, c, d, e), null, u);
}
function dg(a, b, c) {
  c = O(c) ? Q(q.o, c) : c;
  c = M(c, $d);
  return $f(pd(a, ae, ec, b), c, 15, 6, 12);
}
function eg(a, b, c) {
  c = O(c) ? Q(q.o, c) : c;
  var d = M(c, $d), e = M(c, zd), f = M(c, Dd), g = M(c, Yd);
  if (function() {
    var a = L(d, 0), b = L(d, 1);
    return 640 < Math.abs(a) || 480 < Math.abs(b);
  }()) {
    return pd(a, ae, ec, b);
  }
  if (-3 > g) {
    return dg(a, b, c);
  }
  if (v(function() {
    var b = Pf(a);
    v(b) && (b = ge(d, kd.a(id.a(a))), b = 1600 > je(b, b));
    return b;
  }())) {
    return md.e(dg(a, b, c), new J(null, 2, 5, J.d, [id, Yd], null), uc);
  }
  var h = cg(c, Td.a(a));
  if (v(h)) {
    var k = L(h, 0), f = L(h, 1), n = Td.a(a), p = ge(function() {
      var a = k + 1;
      return n.a ? n.a(a) : n.call(null, a);
    }(), n.a ? n.a(k) : n.call(null, k)), h = L(p, 0), p = L(p, 1), h = le(new J(null, 2, 5, J.d, [-p, h], null)), t = je(h, e);
    return 0 >= g ? dg(a, b, c) : ld(a, new J(null, 2, 5, J.d, [ae, b], null), pd(pd(c, $d, he, he(ie(f, e), ie(.1, h))), zd, he, ie(-t + function() {
      var a = -.5 * t, b = 2 + 3 * q.oa.i();
      return a > b ? a : b;
    }(), h)));
  }
  return ld(a, new J(null, 2, 5, J.d, [ae, b], null), pd(pd(pd(c, Ed, rc, f), zd, he, new J(null, 2, 5, J.d, [0, -.1], null)), $d, he, e));
}
function fg(a) {
  var b = O(a) ? Q(q.o, a) : a, c = M(b, $d), d = M(b, Ed);
  return Ne(Z, function(a, b, c, d) {
    return function() {
      Z.translate(E(c), E(G(c)));
      Z.rotate(d);
      Z.fillStyle = "#ffffff";
      Z.beginPath();
      Z.arc(0, 0, 10, 0, Bf);
      Z.fill();
      Z.stroke();
      Ke(Z, [-3, 2], 2);
      Ke(Z, [3, 2], 2);
      Je.h(Z, Zb([[-3, -5], [3, -5]], 0));
      Je.h(Z, Zb([[0, 10], [0, 13]], 0));
      return Ke(Z, [0, 15], 2);
    };
  }(a, b, c, d));
}
function gg() {
  return new q.g(null, 6, [xd, q.g.EMPTY, Td, Of(), ae, q.g.EMPTY, Ld, q.g.EMPTY, od, 60, id, q.Sa.ib([Bd, Dd, Ed, kd, Hd, Md, Wd, Yd, de, ee], [500, 0, 0, new J(null, 2, 5, J.d, [0, -200], null), 0, .02, .15, 3, 0, 0])], null);
}
var hg = S ? S(!1) : R.call(null, !1), Tf, ig = new J(null, 2, 5, J.d, [1, 0], null);
Tf = S ? S(ig) : R.call(null, ig);
var jg, kg = gg();
jg = S ? S(kg) : R.call(null, kg);
var Uf = S ? S(!1) : R.call(null, !1);
function lg(a, b, c) {
  b = b.a ? b.a(a) : b.call(null, a);
  return null != b ? Wa(b, c, a) : a;
}
function mg(a) {
  var b;
  b = lg(lg(lg(Sf(a), xd, ag), ae, eg), Ld, bg);
  b = O(b) ? Q(q.o, b) : b;
  var c = M(b, od);
  if (v(Pf(b))) {
    if (H.b(c, 0)) {
      var c = [640 * q.oa.i() - 320, 480], d = [(0 > E(c) ? 4 : -4) * q.oa.i(), -2 * q.oa.i()];
      b = N.e(b, od, q.pa(300) + 60);
      b = qd(b, ae, N, Qf.i ? Qf.i() : Qf.call(null), new q.g(null, 5, [$d, c, zd, d, Dd, 0, Ed, 0, Yd, 3], null));
    } else {
      b = nd(b);
    }
  }
  a = (c = ma(Pf(b))) ? Pf(a) : c;
  return v(a) ? (Cf.textContent = "Restart", $f(b, gd(b), 20, 10, 20)) : b;
}
function ng() {
  var a = I.a ? I.a(jg) : I.call(null, jg);
  Lf(function() {
    Vf(id.a(a));
    q.Ka(function(a) {
      L(a, 0);
      a = L(a, 1);
      return Yf(a, Z);
    }, xd.a(a));
    q.Ka(function(a) {
      L(a, 0);
      a = L(a, 1);
      return fg(a);
    }, ae.a(a));
    q.Ka(function(a) {
      L(a, 0);
      a = L(a, 1);
      a = O(a) ? Q(q.o, a) : a;
      var c = M(a, be);
      return c.b ? c.b(a, Z) : c.call(null, a, Z);
    }, Ld.a(a));
    Pc(Je, Z, Td.a(a));
    Z.fillRect(-630, 370, 10, ee.a(id.a(a)));
    Z.strokeRect(-630, 370, 10, 100);
    Z.fillRect(-610, 370, 10, de.a(id.a(a)) / 6);
    Z.font = "10px serif";
    Z.translate(-630, 350);
    Z.scale(1, -1);
    return Z.fillText([x("Ammo: "), x(Bd.a(id.a(a)))].join(""), 0, 0);
  });
}
var og = function og() {
  Zc.b ? Zc.b(hg, !1) : Zc.call(null, hg, !1);
  Cf.textContent = "Pause";
  window.onmousemove = function(b) {
    var c;
    a: {
      var d = If;
      c = If.offsetLeft;
      for (var e = If.offsetTop;;) {
        if (d = d.offsetParent, v(d)) {
          c += d.offsetLeft, e += d.offsetTop;
        } else {
          c = [c, e];
          break a;
        }
      }
    }
    b = ge(new J(null, 2, 5, J.d, [b.pageX, b.pageY], null), c);
    c = ge(b, new J(null, 2, 5, J.d, [640, 480], null));
    b = L(c, 0);
    c = L(c, 1);
    b = ge(new J(null, 2, 5, J.d, [b, -c], null), gd(I.a ? I.a(jg) : I.call(null, jg)));
    return Zc.b ? Zc.b(Tf, b) : Zc.call(null, Tf, b);
  };
  Cf.onclick = function() {
    if (v(Pf(I.a ? I.a(jg) : I.call(null, jg)))) {
      return Cf.textContent = "Resume", Zc.b ? Zc.b(hg, !0) : Zc.call(null, hg, !0), window.onmousemove = null, Cf.onclick = og;
    }
    var b = gg();
    Zc.b ? Zc.b(jg, b) : Zc.call(null, jg, b);
    return Cf.textContent = "Pause";
  };
  If.onmousedown = function() {
    Zc.b ? Zc.b(Uf, !0) : Zc.call(null, Uf, !0);
    return!1;
  };
  window.onmouseup = function() {
    Zc.b ? Zc.b(Uf, !1) : Zc.call(null, Uf, !1);
    return!1;
  };
  return function c() {
    return ma(I.a ? I.a(hg) : I.call(null, hg)) ? (ng(), $c(jg, mg), window.requestAnimationFrame(c)) : null;
  }.call(null);
};
ba("figwheel_test.turret.init_everything", function() {
  Kf();
  Cf.textContent = "Start";
  return Cf.onclick = og;
});

})();
