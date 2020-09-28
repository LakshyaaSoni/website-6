// http://platform.twitter.com/widgets.js captured 2013-01-07
if (!window.__twttrlr) {
  (function (a, b) {
    function s(a) {
      for (var b = 1, c; c = arguments[b]; b++) for (var d in c) a[d] = c[d];
      return a
    }

    function t(a) {
      return Array.prototype.slice.call(a)
    }

    function v(a, b) {
      for (var c = 0, d; d = a[c]; c++) if (b == d) return c;
      return -1
    }

    function w() {
      var a = t(arguments),
        b = [];
      for (var c = 0, d = a.length; c < d; c++) a[c].length > 0 && b.push(a[c].replace(/\/$/, ""));
      return b.join("/")
    }

    function x(a, b, c) {
      var d = b.split("/"),
        e = a;
      while (d.length > 1) {
        var f = d.shift();
        e = e[f] = e[f] || {}
      }
      e[d[0]] = c
    }

    function y() {}

    function z(a, b) {
      this.id = this.path = a, this.force = !! b
    }

    function A(a, b) {
      this.id = a, this.body = b, typeof b == "undefined" && (this.path = this.resolvePath(a))
    }

    function B(a, b) {
      this.deps = a, this.collectResults = b, this.deps.length == 0 && this.complete()
    }

    function C(a, b) {
      this.deps = a, this.collectResults = b
    }

    function D() {
      for (var a in d) if (d[a].readyState == "interactive") return l[d[a].id]
    }

    function E(a, b) {
      var d;
      return !a && c && (d = k || D()), d ? (delete l[d.scriptId], d.body = b, d.execute()) : (j = d = new A(a, b), i[d.id] = d), d
    }

    function F() {
      var a = t(arguments),
        b, c;
      return typeof a[0] == "string" && (b = a.shift()), c = a.shift(), E(b, c)
    }

    function G(a, b) {
      var c = b.id || "",
        d = c.split("/");
      d.pop();
      var e = d.join("/");
      return a.replace(/^\./, e)
    }

    function H(a, b) {
      function d(a) {
        return A.exports[G(a, b)]
      }
      var c = [];
      for (var e = 0, f = a.length; e < f; e++) {
        if (a[e] == "require") {
          c.push(d);
          continue
        }
        if (a[e] == "exports") {
          b.exports = b.exports || {}, c.push(b.exports);
          continue
        }
        c.push(d(a[e]))
      }
      return c
    }

    function I() {
      var a = t(arguments),
        b = [],
        c, d;
      return typeof a[0] == "string" && (c = a.shift()), u(a[0]) && (b = a.shift()), d = a.shift(), E(c, function (a) {
        function f() {
          var e = H(t(b), c),
            f;
          typeof d == "function" ? f = d.apply(c, e) : f = d, typeof f == "undefined" && (f = c.exports), a(f)
        }
        var c = this,
          e = [];
        for (var g = 0, h = b.length; g < h; g++) {
          var i = b[g];
          v(["require", "exports"], i) == -1 && e.push(G(i, c))
        }
        e.length > 0 ? J.apply(this, e.concat(f)) : f()
      })
    }

    function J() {
      var a = t(arguments),
        b, c;
      typeof a[a.length - 1] == "function" && (b = a.pop()), typeof a[a.length - 1] == "boolean" && (c = a.pop());
      var d = new B(K(a, c), c);
      return b && d.then(b), d
    }

    function K(a, b) {
      var c = [];
      for (var d = 0, e; e = a[d]; d++) typeof e == "string" && (e = L(e)), u(e) && (e = new C(K(e, b), b)), c.push(e);
      return c
    }

    function L(a) {
      var b, c;
      for (var d = 0, e; e = J.matchers[d]; d++) {
        var f = e[0],
          g = e[1];
        if (b = a.match(f)) return g(a)
      }
      throw new Error(a + " was not recognised by loader")
    }

    function N() {
      return a.using = m, a.provide = n, a.define = o, a.loadrunner = p, M
    }

    function O(a) {
      for (var b = 0; b < J.bundles.length; b++) for (var c in J.bundles[b]) if (c != a && v(J.bundles[b][c], a) > -1) return c
    }
    var c = a.attachEvent && !a.opera,
      d = b.getElementsByTagName("script"),
      e = 0,
      f, g = b.createElement("script"),
      h = {}, i = {}, j, k, l = {}, m = a.using,
      n = a.provide,
      o = a.define,
      p = a.loadrunner;
    for (var q = 0, r; r = d[q]; q++) if (r.src.match(/loadrunner\.js(\?|#|$)/)) {
      f = r;
      break
    }
    var u = Array.isArray || function (a) {
        return a.constructor == Array
      };
    y.prototype.then = function (b) {
      var c = this;
      return this.started || (this.started = !0, this.start()), this.completed ? b.apply(a, this.results) : (this.callbacks = this.callbacks || [], this.callbacks.push(b)), this
    }, y.prototype.start = function () {}, y.prototype.complete = function () {
      if (!this.completed) {
        this.results = t(arguments), this.completed = !0;
        if (this.callbacks) for (var b = 0, c; c = this.callbacks[b]; b++) c.apply(a, this.results)
      }
    }, z.loaded = [], z.prototype = new y, z.prototype.start = function () {
      var a = this,
        b, c, d;
      return (d = i[this.id]) ? (d.then(function () {
        a.complete()
      }), this) : ((b = h[this.id]) ? b.then(function () {
        a.loaded()
      }) : !this.force && v(z.loaded, this.id) > -1 ? this.loaded() : (c = O(this.id)) ? J(c, function () {
        a.loaded()
      }) : this.load(), this)
    }, z.prototype.load = function () {
      var b = this;
      h[this.id] = b;
      var c = g.cloneNode(!1);
      this.scriptId = c.id = "LR" + ++e, c.type = "text/javascript", c.async = !0, c.onerror = function () {
        throw new Error(b.path + " not loaded")
      }, c.onreadystatechange = c.onload = function (c) {
        c = a.event || c;
        if (c.type == "load" || v(["loaded", "complete"], this.readyState) > -1) this.onreadystatechange = null, b.loaded()
      }, c.src = this.path, k = this, d[0].parentNode.insertBefore(c, d[0]), k = null, l[c.id] = this
    }, z.prototype.loaded = function () {
      this.complete()
    }, z.prototype.complete = function () {
      v(z.loaded, this.id) == -1 && z.loaded.push(this.id), delete h[this.id], y.prototype.complete.apply(this, arguments)
    }, A.exports = {}, A.prototype = new z, A.prototype.resolvePath = function (a) {
      return w(J.path, a + ".js")
    }, A.prototype.start = function () {
      var a, b, c = this,
        d;
      this.body ? this.execute() : (a = A.exports[this.id]) ? this.exp(a) : (b = i[this.id]) ? b.then(function (a) {
        c.exp(a)
      }) : (bundle = O(this.id)) ? J(bundle, function () {
        c.start()
      }) : (i[this.id] = this, this.load())
    }, A.prototype.loaded = function () {
      var a, b, d = this;
      c ? (b = A.exports[this.id]) ? this.exp(b) : (a = i[this.id]) && a.then(function (a) {
        d.exp(a)
      }) : (a = j, j = null, a.id = a.id || this.id, a.then(function (a) {
        d.exp(a)
      }))
    }, A.prototype.complete = function () {
      delete i[this.id], z.prototype.complete.apply(this, arguments)
    }, A.prototype.execute = function () {
      var a = this;
      typeof this.body == "object" ? this.exp(this.body) : typeof this.body == "function" && this.body.apply(window, [function (b) {
        a.exp(b)
      }])
    }, A.prototype.exp = function (a) {
      this.complete(this.exports = A.exports[this.id] = a || {})
    }, B.prototype = new y, B.prototype.start = function () {
      function b() {
        var b = [];
        a.collectResults && (b[0] = {});
        for (var c = 0, d; d = a.deps[c]; c++) {
          if (!d.completed) return;
          d.results.length > 0 && (a.collectResults ? d instanceof C ? s(b[0], d.results[0]) : x(b[0], d.id, d.results[0]) : b = b.concat(d.results))
        }
        a.complete.apply(a, b)
      }
      var a = this;
      for (var c = 0, d; d = this.deps[c]; c++) d.then(b);
      return this
    }, C.prototype = new y, C.prototype.start = function () {
      var a = this,
        b = 0,
        c = [];
      return a.collectResults && (c[0] = {}),

      function d() {
        var e = a.deps[b++];
        e ? e.then(function (b) {
          e.results.length > 0 && (a.collectResults ? e instanceof C ? s(c[0], e.results[0]) : x(c[0], e.id, e.results[0]) : c.push(e.results[0])), d()
        }) : a.complete.apply(a, c)
      }(), this
    }, I.amd = {};
    var M = function (a) {
      return a(J, F, M, define)
    };
    M.Script = z, M.Module = A, M.Collection = B, M.Sequence = C, M.Dependency = y, M.noConflict = N, a.loadrunner = M, a.using = J, a.provide = F, a.define = I, J.path = "", J.matchers = [], J.matchers.add = function (a, b) {
      this.unshift([a, b])
    }, J.matchers.add(/(^script!|\.js$)/, function (a) {
      var b = new z(a.replace(/^\$/, J.path.replace(/\/$/, "") + "/").replace(/^script!/, ""), !1);
      return b.id = a, b
    }), J.matchers.add(/^[a-zA-Z0-9_\-\/]+$/, function (a) {
      return new A(a)
    }), J.bundles = [], f && (J.path = f.getAttribute("data-path") || f.src.split(/loadrunner\.js/)[0] || "", (main = f.getAttribute("data-main")) && J.apply(a, main.split(/\s*,\s*/)).then(function () {}))
  })(this, document);
  (window.__twttrlr = loadrunner.noConflict());
}
__twttrlr(function (using, provide, loadrunner, define) {
  provide("util/iframe", function (a) {
    a(function (a) {
      var b = (a.replace && a.replace.ownerDocument || document).createElement("div"),
        c;
      b.innerHTML = "<iframe allowtransparency='true' frameBorder='0' scrolling='no'></iframe>", c = b.firstChild, c.src = a.url, c.className = a.className || "";
      if (a.css) for (var d in a.css) c.style[d] = a.css[d];
      if (a.attributes) for (var e in a.attributes) c.setAttribute(e, a.attributes[e]);
      return a.replace && a.replace.parentNode.replaceChild(c, a.replace), c
    })
  });
  provide("util/querystring", function (a) {
    function b(a) {
      return encodeURIComponent(a).replace(/\+/g, "%2B")
    }

    function c(a) {
      return decodeURIComponent(a)
    }

    function d(a) {
      var c = [],
        d;
      for (d in a) a[d] !== null && typeof a[d] != "undefined" && c.push(b(d) + "=" + b(a[d]));
      return c.sort().join("&")
    }

    function e(a) {
      var b = {}, d, e, f, g;
      if (a) {
        d = a.split("&");
        for (g = 0; f = d[g]; g++) e = f.split("="), e.length == 2 && (b[c(e[0])] = c(e[1]))
      }
      return b
    }

    function f(a, b) {
      var c = d(b);
      return c.length > 0 ? a.indexOf("?") >= 0 ? a + "&" + d(b) : a + "?" + d(b) : a
    }

    function g(a) {
      var b = a && a.split("?");
      return b.length == 2 ? e(b[1]) : {}
    }
    a({
      url: f,
      decodeURL: g,
      decode: e,
      encode: d,
      encodePart: b,
      decodePart: c
    })
  });
  provide("util/util", function (a) {
    function b(a) {
      var b = 1,
        c, d;
      for (; c = arguments[b]; b++) for (d in c) a[d] = c[d];
      return a
    }

    function c(a) {
      return b([], a)
    }

    function d(a) {
      for (var b in a) a.hasOwnProperty(b) && !a[b] && a[b] !== !1 && a[b] !== 0 && delete a[b]
    }

    function e(a, b) {
      var c = 0,
        d;
      for (; d = a[c]; c++) if (b == d) return c;
      return -1
    }

    function f(a, b) {
      if (!a) return null;
      if (a.filter) return a.filter.apply(a, [b]);
      if (!b) return a;
      var c = [],
        d = 0,
        e;
      for (; e = a[d]; d++) b(e) && c.push(e);
      return c
    }

    function g(a, b) {
      if (!a) return null;
      if (a.map) return a.map.apply(a, [b]);
      if (!b) return a;
      var c = [],
        d = 0,
        e;
      for (; e = a[d]; d++) c.push(b(e));
      return c
    }

    function h(a) {
      return a && a.replace(/(^\s+|\s+$)/g, "")
    }

    function i(a) {
      return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function j(a) {
      return a && String(a).toLowerCase().indexOf("[native code]") > -1
    }

    function k(a, b) {
      if (a.contains) return a.contains(b);
      var c = b.parentNode;
      while (c) {
        if (c === a) return !0;
        c = c.parentNode
      }
      return !1
    }

    function l(a) {
      return a === Object(a)
    }
    a({
      array: c,
      aug: b,
      compact: d,
      containsElement: k,
      filter: f,
      map: g,
      trim: h,
      indexOf: e,
      isNative: j,
      isObject: l,
      toType: i
    })
  });
  provide("dom/get", function (a) {
    using("util/util", function (b) {
      function c(a, c, d, e) {
        var f, g, h = [],
          i, j, k, l, m, n;
        c = c || document;
        if (b.isNative(c.getElementsByClassName)) return h = b.filter(c.getElementsByClassName(a), function (a) {
          return !d || a.tagName.toLowerCase() == d.toLowerCase()
        }), [].slice.call(h, 0, e || h.length);
        i = a.split(" "), l = i.length, f = c.getElementsByTagName(d || "*"), n = f.length;
        for (k = 0; k < l && n > 0; k++) {
          h = [], j = i[k];
          for (m = 0; m < n; m++) {
            g = f[m], ~b.indexOf(g.className.split(" "), j) && h.push(g);
            if (k + 1 == l && h.length === e) break
          }
          f = h, n = f.length
        }
        return h
      }

      function d(a, b, d) {
        return c(a, b, d, 1)[0]
      }

      function e(a, c, d) {
        var f = c && c.parentNode,
          g;
        if (!f || f === d) return;
        return f.tagName == a ? f : (g = f.className.split(" "), 0 === a.indexOf(".") && ~b.indexOf(g, a.slice(1)) ? f : e(a, f, d))
      }
      a({
        all: c,
        one: d,
        ancestor: e
      })
    })
  });
  provide("$vendor/domready/ready.js", function (exports) {
    ! function (a) {
      function k() {
        b = 1;
        for (var a = 0, d = c.length; a < d; a++) c[a]()
      }
      var b = 0,
        c = [],
        d, e, f = !1,
        g = a.createElement("a"),
        h = "DOMContentLoaded",
        i = "addEventListener",
        j = "onreadystatechange";
      /^loade|c/.test(a.readyState) && (b = 1), a[i] && a[i](h, e = function () {
        a.removeEventListener(h, e, f), k()
      }, f), g.doScroll && a.attachEvent(j, d = function () {
        /^c/.test(a.readyState) && (a.detachEvent(j, d), k())
      });
      var l = g.doScroll ? function (a) {
          self != top ? b ? a() : c.push(a) : ! function () {
            try {
              g.doScroll("left")
            } catch (b) {
              return setTimeout(function () {
                l(a)
              }, 50)
            }
            a()
          }()
        } : function (a) {
          b ? a() : c.push(a)
        };
      typeof module != "undefined" && module.exports ? module.exports = {
        domReady: l
      } : window.domReady = l
    }(document);
    exports();
    loadrunner.Script.loaded.push("$vendor/domready/ready.js")
  });
  provide("util/domready", function (a) {
    using("$vendor/domready/ready.js", function () {
      a(domReady)
    })
  });
  provide("tfw/widget/base", function (a) {
    using("util/util", "util/domready", "dom/get", "util/querystring", "util/iframe", function (b, c, d, e, f) {
      function l(a) {
        var b;
        if (!a) return;
        a.ownerDocument ? (this.srcEl = a, this.classAttr = a.className.split(" ")) : (this.srcOb = a, this.classAttr = []), b = this.params(), this.id = o(), this.setLanguage(), this.related = b.related || this.dataAttr("related"), this.partner = b.partner || this.dataAttr("partner"), this.dnt = b.dnt || this.dataAttr("dnt") || "", this.styleAttr = []
      }

      function m(a) {
        if (!a) return;
        return a.lang ? a.lang : m(a.parentNode)
      }

      function n(a) {
        var b = i.widgets,
          c, e, f, g, h, k;
        a = a || document;
        for (f in b) {
          f.match(/\./) ? (g = f.split("."), c = d.all(g[1], a, g[0])) : c = a.getElementsByTagName(f);
          for (h = 0; k = c[h]; h++) {
            if (k.getAttribute("data-twttr-rendered")) continue;
            k.setAttribute("data-twttr-rendered", "true"), e = new b[f](k), j.list.push(e), j.byId[e.id] = e, e.render(i)
          }
        }
      }

      function o() {
        return this.srcEl && this.srcEl.id || "twitter-widget-" + g++
      }

      function p(a) {
        i = a
      }

      function q(a) {
        return a && j.byId[a] ? j.byId[a].element : null
      }
      var g = 0,
        h, i, j = {
          list: [],
          byId: {}
        }, k = {
          hi: {
            "%{followers_count} followers": "%{followers_count} फ़ॉलोअर्स",
            "100K+": "1 लाख+",
            "10k unit": "10 हजार इकाईयां",
            Follow: "फ़ॉलो",
            "Follow %{screen_name}": "%{screen_name} को फ़ॉलो करें",
            K: "हजार",
            M: "मिलियन",
            Tweet: "ट्वीट",
            "Tweet %{hashtag}": "ट्वीट %{hashtag}",
            "Tweet to %{name}": "%{name} को ट्वीट करें",
            "Twitter Stream": "ट्विटर स्ट्रीम"
          },
          "zh-cn": {
            "%{followers_count} followers": "%{followers_count} 关注者",
            "100K+": "10万+",
            "10k unit": "1万单元",
            Follow: "关注",
            "Follow %{screen_name}": "关注 %{screen_name}",
            K: "千",
            M: "百万",
            Tweet: "发推",
            "Tweet %{hashtag}": "以 %{hashtag} 发推",
            "Tweet to %{name}": "发推给 %{name}",
            "Twitter Stream": "Twitter 信息流"
          },
          fr: {
            "%{followers_count} followers": "%{followers_count} abonnés",
            "100K+": "100K+",
            "10k unit": "unité de 10k",
            Follow: "Suivre",
            "Follow %{screen_name}": "Suivre %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Tweeter",
            "Tweet %{hashtag}": "Tweeter %{hashtag}",
            "Tweet to %{name}": "Tweeter à %{name}",
            "Twitter Stream": "Flux Twitter"
          },
          "zh-tw": {
            "%{followers_count} followers": "%{followers_count} 位跟隨者",
            "100K+": "超過十萬",
            "10k unit": "1萬 單位",
            Follow: "跟隨",
            "Follow %{screen_name}": "跟隨 %{screen_name}",
            K: "千",
            M: "百萬",
            Tweet: "推文",
            "Tweet %{hashtag}": "推文%{hashtag}",
            "Tweet to %{name}": "推文給%{name}"
          },
          msa: {
            "%{followers_count} followers": "%{followers_count} pengikut",
            "100K+": "100 ribu+",
            "10k unit": "10 ribu unit",
            Follow: "Ikut",
            "Follow %{screen_name}": "Ikut %{screen_name}",
            K: "ribu",
            M: "juta",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "Tweet %{hashtag}",
            "Tweet to %{name}": "Tweet kepada %{name}",
            "Twitter Stream": "Strim Twitter"
          },
          fil: {
            "%{followers_count} followers": "%{followers_count} mga tagasunod",
            "100K+": "100K+",
            "10k unit": "10k yunit",
            Follow: "Sundan",
            "Follow %{screen_name}": "Sundan si %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "I-tweet",
            "Tweet %{hashtag}": "I-tweet ang %{hashtag}",
            "Tweet to %{name}": "Mag-Tweet kay %{name}",
            "Twitter Stream": "Stream ng Twitter"
          },
          sv: {
            "%{followers_count} followers": "%{followers_count} följare",
            "100K+": "100K+",
            "10k unit": "10k",
            Follow: "Följ",
            "Follow %{screen_name}": "Följ %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Tweeta",
            "Tweet %{hashtag}": "Tweeta %{hashtag}",
            "Tweet to %{name}": "Tweeta till %{name}",
            "Twitter Stream": "Twitterflöde"
          },
          fi: {
            "%{followers_count} followers": "%{followers_count} seuraajaa",
            "100K+": "100 000+",
            "10k unit": "10 000 yksikköä",
            Follow: "Seuraa",
            "Follow %{screen_name}": "Seuraa käyttäjää %{screen_name}",
            K: "tuhatta",
            M: "milj.",
            Tweet: "Twiittaa",
            "Tweet %{hashtag}": "Twiittaa %{hashtag}",
            "Tweet to %{name}": "Twiittaa käyttäjälle %{name}",
            "Twitter Stream": "Twitter-virta"
          },
          pl: {
            "%{followers_count} followers": "%{followers_count} obserwujących",
            "100K+": "100 tys.+",
            "10k unit": "10 tys.",
            Follow: "Obserwuj",
            "Follow %{screen_name}": "Obserwuj %{screen_name}",
            K: "tys.",
            M: "mln",
            Tweet: "Tweetnij",
            "Tweet %{hashtag}": "Tweetnij %{hashtag}",
            "Tweet to %{name}": "Tweetnij do %{name}",
            "Twitter Stream": "Strumień Twittera"
          },
          ja: {
            "%{followers_count} followers": "%{followers_count}人のフォロワー",
            "100K+": "100K以上",
            "10k unit": "万",
            Follow: "フォローする",
            "Follow %{screen_name}": "%{screen_name}さんをフォロー",
            K: "K",
            M: "M",
            Tweet: "ツイート",
            "Tweet %{hashtag}": "%{hashtag} をツイートする",
            "Tweet to %{name}": "%{name}さんへツイートする",
            "Twitter Stream": "Twitterストリーム"
          },
          ko: {
            "%{followers_count} followers": "%{followers_count}명의 팔로워",
            "100K+": "100만 이상",
            "10k unit": "만 단위",
            Follow: "팔로우",
            "Follow %{screen_name}": "%{screen_name} 팔로우하기",
            K: "천",
            M: "백만",
            Tweet: "트윗",
            "Tweet %{hashtag}": "%{hashtag} 관련 트윗하기",
            "Tweet to %{name}": "%{name}님에게 트윗하기",
            "Twitter Stream": "트위터 스트림"
          },
          de: {
            "%{followers_count} followers": "%{followers_count} Follower",
            "100K+": "100Tsd+",
            "10k unit": "10tsd-Einheit",
            Follow: "Folgen",
            "Follow %{screen_name}": "%{screen_name} folgen",
            K: "Tsd",
            M: "M",
            Tweet: "Twittern",
            "Tweet %{hashtag}": "Tweet %{hashtag}",
            "Tweet to %{name}": "Tweet an %{name}",
            "Twitter Stream": "Twitter Stream"
          },
          it: {
            "%{followers_count} followers": "%{followers_count} follower",
            "100K+": "100K+",
            "10k unit": "10k unità",
            Follow: "Segui",
            "Follow %{screen_name}": "Segui %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "Twitta %{hashtag}",
            "Tweet to %{name}": "Twitta a %{name}",
            "Twitter Stream": "Twitter Stream"
          },
          ru: {
            "%{followers_count} followers": "Читатели: %{followers_count} ",
            "100K+": "100 тыс.+",
            "10k unit": "блок 10k",
            Follow: "Читать",
            "Follow %{screen_name}": "Читать %{screen_name}",
            K: "тыс.",
            M: "млн.",
            Tweet: "Твитнуть",
            "Tweet %{hashtag}": "Твитнуть %{hashtag}",
            "Tweet to %{name}": "Твитнуть %{name}",
            "Twitter Stream": "Поток в Твиттере"
          },
          pt: {
            "%{followers_count} followers": "%{followers_count} seguidores",
            "100K+": "+100 mil",
            "10k unit": "10 mil unidades",
            Follow: "Seguir",
            "Follow %{screen_name}": "Seguir %{screen_name}",
            K: "Mil",
            M: "M",
            Tweet: "Tweetar",
            "Tweet %{hashtag}": "Tweetar %{hashtag}",
            "Tweet to %{name}": "Tweetar para %{name}",
            "Twitter Stream": "Transmissões do Twitter"
          },
          es: {
            "%{followers_count} followers": "%{followers_count} seguidores",
            "100K+": "100K+",
            "10k unit": "10k unidad",
            Follow: "Seguir",
            "Follow %{screen_name}": "Seguir a %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Twittear",
            "Tweet %{hashtag}": "Twittear %{hashtag}",
            "Tweet to %{name}": "Twittear a %{name}",
            "Twitter Stream": "Cronología de Twitter"
          },
          id: {
            "%{followers_count} followers": "%{followers_count} pengikut",
            "100K+": "100 ribu+",
            "10k unit": "10 ribu unit",
            Follow: "Ikuti",
            "Follow %{screen_name}": "Ikuti %{screen_name}",
            K: "&nbsp;ribu",
            M: "&nbsp;juta",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "Tweet %{hashtag}",
            "Tweet to %{name}": "Tweet ke %{name}",
            "Twitter Stream": "Aliran Twitter"
          },
          tr: {
            "%{followers_count} followers": "%{followers_count} takipçi",
            "100K+": "+100 bin",
            "10k unit": "10 bin birim",
            Follow: "Takip et",
            "Follow %{screen_name}": "Takip et: %{screen_name}",
            K: "bin",
            M: "milyon",
            Tweet: "Tweetle",
            "Tweet %{hashtag}": "Tweetle: %{hashtag}",
            "Tweet to %{name}": "Tweetle: %{name}",
            "Twitter Stream": "Twitter Akışı"
          },
          no: {
            "%{followers_count} followers": "%{followers_count} følgere",
            "100K+": "100K+",
            "10k unit": "10k ",
            Follow: "Følg",
            "Follow %{screen_name}": "Følg %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "Tweet %{hashtag}",
            "Tweet to %{name}": "Send tweet til %{name}",
            "Twitter Stream": "Twitter-strøm"
          },
          nl: {
            "%{followers_count} followers": "%{followers_count} volgers",
            "100K+": "100k+",
            "10k unit": "10k-eenheid",
            Follow: "Volgen",
            "Follow %{screen_name}": "%{screen_name} volgen",
            K: "k",
            M: " mln.",
            Tweet: "Tweeten",
            "Tweet %{hashtag}": "%{hashtag} tweeten",
            "Tweet to %{name}": "Tweeten naar %{name}",
            "Twitter Stream": "Twitter Stream"
          },
          da: {
            "%{followers_count} followers": "%{followers_count} følgere",
            "100K+": "100K+",
            "10k unit": "10k enhed",
            Follow: "Følg",
            "Follow %{screen_name}": "Følg %{screen_name}",
            K: "K",
            M: "M",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "Tweet %{hashtag}",
            "Tweet to %{name}": "Tweet til %{name}",
            "Twitter Stream": "Twitter-strøm"
          },
          hu: {
            "%{followers_count} followers": "%{followers_count} követő",
            "100K+": "100E+",
            "10k unit": "10E+",
            Follow: "Követés",
            "Follow %{screen_name}": "%{screen_name} követése",
            K: "E",
            M: "M",
            Tweet: "Tweet",
            "Tweet %{hashtag}": "%{hashtag} tweetelése",
            "Tweet to %{name}": "Tweet küldése neki: %{name}",
            "Twitter Stream": "Twitter Hírfolyam"
          },
          ar: {
            "%{followers_count} followers": "عدد المتابعين %{followers_count}",
            "100K+": "+100 ألف",
            "10k unit": "10 آلاف وحدة",
            Follow: "تابِع",
            "Follow %{screen_name}": "تابِع %{screen_name}",
            K: "ألف",
            M: "مليون",
            Tweet: "غرِّد",
            "Tweet %{hashtag}": "غرِّد %{hashtag}",
            "Tweet to %{name}": "غرِّد لـ %{name}",
            "Twitter Stream": "خطّ تويتر الزمنيّ"
          },
          fa: {
            "%{followers_count} followers": "%{followers_count} دنبال‌کننده",
            "100K+": ">۱۰۰هزار",
            "10k unit": "۱۰هزار واحد",
            Follow: "دنبال کردن",
            "Follow %{screen_name}": "دنبال کردن %{screen_name}",
            K: "هزار",
            M: "میلیون",
            Tweet: "توییت",
            "Tweet %{hashtag}": "توییت کردن %{hashtag}",
            "Tweet to %{name}": "به %{name} توییت کنید",
            "Twitter Stream": "جریان توییت‌ها"
          },
          ur: {
            "%{followers_count} followers": "%{followers_count} فالورز",
            "100K+": "1 لاکھ+",
            "10k unit": "دس ہزار یونٹ",
            Follow: "فالو کریں",
            "Follow %{screen_name}": "%{screen_name} کو فالو کریں",
            K: "ہزار",
            M: "ملین",
            Tweet: "ٹویٹ کریں",
            "Tweet %{hashtag}": "ٹویٹ کریں %{hashtag}",
            "Tweet to %{name}": "%{name} کو ٹویٹ کریں",
            "Twitter Stream": "ٹوئٹر سٹریم"
          },
          th: {
            "%{followers_count} followers": "%{followers_count} ผู้ติดตาม",
            "100K+": "100พัน+",
            "10k unit": "หน่วย 10พัน",
            Follow: "ติดตาม",
            "Follow %{screen_name}": "ติดตาม %{screen_name}",
            K: "พัน",
            M: "ล้าน",
            Tweet: "ทวีต",
            "Tweet %{hashtag}": "ทวีต %{hashtag}",
            "Tweet to %{name}": "ทวีตถึง %{name}"
          },
          he: {
            "%{followers_count} followers": "%{followers_count} עוקבים",
            "100K+": "מאות אלפים",
            "10k unit": "עשרות אלפים",
            Follow: "מעקב",
            "Follow %{screen_name}": "לעקוב אחר %{screen_name}",
            K: "אלף",
            M: "מיליון",
            Tweet: "ציוץ",
            "Tweet %{hashtag}": "צייצו %{hashtag}",
            "Tweet to %{name}": "ציוץ אל %{name}",
            "Twitter Stream": "התזרים של טוויטר"
          }
        };
      b.aug(l.prototype, {
        setLanguage: function (a) {
          var b;
          a || (a = this.params().lang || this.dataAttr("lang") || m(this.srcEl)), a = a && a.toLowerCase();
          if (!a) return this.lang = "en";
          if (k[a]) return this.lang = a;
          b = a.replace(/[\-_].*/, "");
          if (k[b]) return this.lang = b;
          this.lang = "en"
        },
        _: function (a, b) {
          var c = this.lang;
          b = b || {};
          if (!c || !k.hasOwnProperty(c)) c = this.lang = "en";
          return a = k[c] && k[c][a] || a, this.ringo(a, b, /%\{([\w_]+)\}/g)
        },
        ringo: function (a, b, c) {
          return c = c || /\{\{([\w_]+)\}\}/g, a.replace(c, function (a, c) {
            return b[c] !== undefined ? b[c] : a
          })
        },
        add: function (a) {
          j.list.push(this), j.byId[this.id] = a
        },
        create: function (a, b, c, d) {
          return d["data-twttr-rendered"] = !0, f({
            url: a,
            css: c,
            className: b,
            id: this.id,
            attributes: d,
            replace: this.srcEl
          })
        },
        params: function () {
          var a, b;
          return this.srcOb ? b = this.srcOb : (a = this.srcEl && this.srcEl.href && this.srcEl.href.split("?")[1], b = a ? e.decode(a) : {}), this.params = function () {
            return b
          }, b
        },
        dataAttr: function (a) {
          return this.srcEl && this.srcEl.getAttribute("data-" + a)
        },
        attr: function (a) {
          return this.srcEl && this.srcEl.getAttribute(a)
        },
        styles: {
          base: "font: normal normal normal 11px/18px 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; white-space: nowrap;",
          button: "font-weight: bold; text-shadow: 0 1px 0 rgba(255,255,255,.5);",
          large: "font-size: 13px; line-height: 26px;",
          vbubble: "font-size: 16px;"
        },
        width: function () {
          throw new Error(name + " not implemented")
        },
        height: function () {
          return this.size == "m" ? 20 : 28
        },
        minWidth: function () {},
        maxWidth: function () {},
        minHeight: function () {},
        maxHeight: function () {},
        dimensions: function () {
          function a(a) {
            switch (typeof a) {
              case "string":
                return a;
              case "undefined":
                return;
              default:
                return a + "px"
            }
          }
          var b, c = {
            width: this.width(),
            height: this.height()
          };
          this.minWidth() && (c["min-width"] = this.minWidth()), this.maxWidth() && (c["max-width"] = this.maxWidth()), this.minHeight() && (c["min-height"] = this.minHeight()), this.maxHeight() && (c["max-height"] = this.maxHeight());
          for (b in c) c[b] = a(c[b]);
          return c
        },
        generateId: o
      }), a({
        Base: l,
        init: p,
        embed: n,
        find: q
      })
    })
  });
  provide("util/events", function (a) {
    using("util/util", function (b) {
      function d() {
        this.completed = !1, this.callbacks = []
      }
      var c = {
        bind: function (a, b) {
          return this._handlers = this._handlers || {}, this._handlers[a] = this._handlers[a] || [], this._handlers[a].push(b)
        },
        unbind: function (a, c) {
          if (!this._handlers[a]) return;
          if (c) {
            var d = b.indexOf(this._handlers[a], c);
            d >= 0 && this._handlers[a].splice(d, 1)
          } else this._handlers[a] = []
        },
        trigger: function (a, b) {
          var c = this._handlers && this._handlers[a];
          b.type = a;
          if (c) for (var d = 0, e; e = c[d]; d++) e.call(this, b)
        }
      };
      d.prototype.addCallback = function (a) {
        this.completed ? a.apply(this, this.results) : this.callbacks.push(a)
      }, d.prototype.complete = function () {
        this.results = makeArray(arguments), this.completed = !0;
        for (var a = 0, b; b = this.callbacks[a]; a++) b.apply(this, this.results)
      }, a({
        Emitter: c,
        Promise: d
      })
    })
  });
  provide("util/uri", function (a) {
    using("util/querystring", "util/util", function (b, c) {
      function d(a) {
        var b;
        return a.match(/^https?:\/\//) ? a : (b = location.host, location.port.length > 0 && (b += ":" + location.port), [location.protocol, "//", b, a].join(""))
      }

      function e() {
        var a = document.getElementsByTagName("link");
        for (var b = 0, c; c = a[b]; b++) if (c.getAttribute("rel") == "canonical") return d(c.getAttribute("href"));
        return null
      }

      // get twitter name from any <a> or link rel="me" href="…twitter.com/$me"
      function getScreenNameFromPage() {
        var a = document.getElementsByTagName("a"),
          b = document.getElementsByTagName("link"),
          d = /\bme\b/,
          e = /^https?\:\/\/(www\.)?twitter.com\/([a-zA-Z0-9_]+)$/,
          f = c.array(a).concat(c.array(b)),
          g, h, i;
        for (var j = 0, k; k = f[j]; j++) {
          h = k.getAttribute("rel"), i = k.getAttribute("href");
          if (h && i && h.match(d) && (g = i.match(e))) return g[2]
        }
      }
      a({
        absolutize: d,
        getCanonicalURL: e,
        getScreenNameFromPage: getScreenNameFromPage
      })
    })
  });
  provide("tfw/widget/intent", function (a) {
    using("util/util", "tfw/widget/base", "util/querystring", "util/uri", function (b, c, d, e) {
      function m(a) {
        var b = Math.round(k / 2 - h / 2),
          c = 0;
        j > i && (c = Math.round(j / 2 - i / 2)), window.open(a, "intent", g + ",width=" + h + ",height=" + i + ",left=" + b + ",top=" + c)
      }

      function n(a, b) {
        using("tfw/widget/hubclient", function (c) {
          c.openIntent(a, b)
        })
      }

      function o(a) {
        var b = "original_referer=" + location.href;
        return [a, b].join(a.indexOf("?") == -1 ? "?" : "&")
      }

      function p(a, b) {
        this.id = a, this.element = this.srcEl = b
      }

      function q(a) {
        a = a || window.event;
        var b = a.target || a.srcElement,
          c, d, e;
        while (b && b.nodeName.toLowerCase() !== "a") b = b.parentNode;
        b && b.nodeName.toLowerCase() === "a" && b.href && (c = b.href.match(f), c && (e = o(b.href), e = e.replace(/^http[:]/, "https:"), e = e.replace(/^\/\//, "https://"), r(e, b), a.returnValue = !1, a.preventDefault && a.preventDefault()))
      }

      function r(a, b) {
        if (twttr.events.hub && b) {
          var c = new p(l.generateId(), b);
          l.add(c), n(a, b), twttr.events.trigger("click", {
            target: b,
            region: "intent",
            type: "click",
            data: {}
          })
        } else m(a)
      }

      function s(a) {
        this.srcEl = [], this.element = a
      }
      var f = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
        g = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
        h = 550,
        i = 520,
        j = screen.height,
        k = screen.width,
        l;
      s.prototype = new c.Base, b.aug(s.prototype, {
        render: function (a) {
          l = this, window.__twitterIntentHandler || (document.addEventListener ? document.addEventListener("click", q, !1) : document.attachEvent && document.attachEvent("onclick", q), window.__twitterIntentHandler = !0)
        }
      }), a({
        Listener: s,
        open: r
      })
    })
  });
  provide("dom/sandbox", function (a) {
    using("util/domready", function (b) {
      function d(a, b) {
        var c, d, e;
        if (a.name) {
          try {
            e = document.createElement('<iframe name="' + a.name + '"></iframe>')
          } catch (f) {
            e = document.createElement("iframe"), e.name = a.name
          }
          delete a.name
        } else e = document.createElement("iframe");
        a.id && (e.id = a.id, delete a.id);
        for (c in a) a.hasOwnProperty(c) && e.setAttribute(c, a[c]);
        e.allowtransparency = "true", e.scrolling = "no", e.setAttribute("frameBorder", 0), e.setAttribute("allowTransparency", !0);
        for (d in b || {}) b.hasOwnProperty(d) && (e.style[d] = b[d]);
        return e
      }

      function e(a, b, c, e) {
        var f;
        this.attrs = b || {}, this.styles = c || {}, this.appender = e, this.onReady = a, this.sandbox = {}, f = d(this.attrs, this.styles), f.onreadystatechange = f.onload = this.getCallback(this.onLoad), this.sandbox.frame = f, e ? e(f) : document.body.appendChild(f)
      }

      function f(a, c, d, f) {
        b(function () {
          new e(a, c, d, f)
        })
      }
      var c = 0;
      window.twttr || (window.twttr = {}), window.twttr.sandbox || (window.twttr.sandbox = {}), e.prototype.getCallback = function (a) {
        var b = this,
          c = !1;
        return function () {
          c || (c = !0, a.call(b))
        }
      }, e.prototype.registerCallback = function (a) {
        var b = "cb" + c++;
        return window.twttr.sandbox[b] = a, b
      }, e.prototype.onLoad = function () {
        try {
          this.sandbox.frame.contentWindow.document
        } catch (a) {
          this.setDocDomain();
          return
        }
        this.sandbox.win = this.sandbox.frame.contentWindow, this.sandbox.doc = this.sandbox.frame.contentWindow.document, this.writeStandardsDoc(), this.sandbox.body = this.sandbox.frame.contentWindow.document.body, this.onReady(this.sandbox)
      }, e.prototype.setDocDomain = function () {
        var a, b = this.registerCallback(this.getCallback(this.onLoad));
        a = ["javascript:", 'document.write("");', "try { window.parent.document; }", "catch (e) {", 'document.domain="' + document.domain + '";', "}", 'window.parent.twttr.sandbox["' + b + '"]();'].join(""), this.sandbox.frame.parentNode.removeChild(this.sandbox.frame), this.sandbox.frame = null, this.sandbox.frame = d(this.attrs, this.styles), this.sandbox.frame.src = a, this.appender ? this.appender(this.sandbox.frame) : document.body.appendChild(this.sandbox.frame)
      }, e.prototype.writeStandardsDoc = function () {
        var a = ["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try { window.parent.document; }", 'catch (e) {document.domain="' + document.domain + '";}', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join("");
        this.sandbox.doc.write(a), this.sandbox.doc.close()
      }, a(f)
    })
  });
  provide("dom/classname", function (a) {
    function b(a, b) {
      a.classList ? a.classList.add(b) : f(b).test(a.className) || (a.className += " " + b)
    }

    function c(a, b) {
      a.classList ? a.classList.remove(b) : a.className = a.className.replace(f(b), " ")
    }

    function d(a, d, g) {
      a.classList && e(a, d) ? (c(a, d), b(a, g)) : a.className = a.className.replace(f(d), g)
    }

    function e(a, b) {
      return a.classList ? a.classList.contains(b) : f(b).test(a.className)
    }

    function f(a) {
      return new RegExp("\\b" + a + "\\b", "g")
    }
    a({
      add: b,
      remove: c,
      replace: d,
      present: e
    })
  });
  provide("util/env", function (a) {
    var b = window.navigator.userAgent;
    a({
      retina: function () {
        return (window.devicePixelRatio || 1) > 1
      },
      ie6: function () {
        return /MSIE 6/.test(b)
      },
      ie7: function () {
        return /MSIE 7/.test(b)
      },
      touch: function () {
        return "ontouchstart" in window || /Opera Mini/.test(b)
      },
      cssTransitions: function () {
        var a = document.body.style;
        return a.transition !== undefined || a.webkitTransition !== undefined || a.mozTransition !== undefined || a.oTransition !== undefined || a.msTransition !== undefined
      }
    })
  });
  provide("dom/delegate", function (a) {
    using("util/env", function (b) {
      function e(a) {
        var b = a.getAttribute("data-twitter-event-id");
        return b ? b : (a.setAttribute("data-twitter-event-id", ++d), d)
      }

      function f(a, b, c) {
        var d = 0,
          e = a && a.length || 0;
        for (d = 0; d < e; d++) a[d].call(b, c)
      }

      function g(a, b, c) {
        var d = c || a.target || a.srcElement,
          e = d.className.split(" "),
          h = 0,
          i, j = e.length;
        for (; h < j; h++) f(b["." + e[h]], d, a);
        f(b[d.tagName], d, a);
        if (a.cease) return;
        d !== this && g.call(this, a, b, d.parentElement || d.parentNode)
      }

      function addEventListener(a, b, c) {
        if (a.addEventListener) {
          a.addEventListener(b, function (d) {
            g.call(a, d, c[b])
          }, !1);
          return
        }
        a.attachEvent && a.attachEvent("on" + b, function () {
          g.call(a, a.ownerDocument.parentWindow.event, c[b])
        })
      }

      function i(a, b, d, f) {
        var g = e(a);
        c[g] = c[g] || {};
        if (!c[g][b]) {
          c[g][b] = {};
          addEventListener(a, b, c[g]);
        }
        c[g][b][d] = c[g][b][d] || [];
        c[g][b][d].push(f);
      }

      function j(a, b, d) {
        var f = e(b),
          h = c[f] && c[f];
        g.call(b, {
          target: d
        }, h[a])
      }

      function k(a) {
        return m(a), l(a), !1
      }

      function l(a) {
        a && a.preventDefault ? a.preventDefault() : a.returnValue = !1
      }

      function m(a) {
        a && (a.cease = !0) && a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
      }
      var c = {}, d = -1;
      a({
        stop: k,
        stopPropagation: m,
        preventDefault: l,
        delegate: i,
        simulate: j
      })
    })
  });
  provide("util/twitter", function (a) {
    using("util/querystring", function (b) {
      function f(a) {
        return typeof a == "string" && c.test(a) && RegExp.$1.length <= 20
      }

      function g(a) {
        return f(a) && RegExp.$1
      }

      function h(a) {
        var c = b.decodeURL(a);
        c.screen_name = g(a);
        if (c.screen_name) return b.url("https://twitter.com/intent/user", c)
      }

      function i(a) {
        return typeof a == "string" && !/\W/.test(a)
      }

      function j(a) {
        return i(a) ? "#" + a : ""
      }

      function k(a) {
        return typeof a == "string" && d.test(a)
      }

      function l(a) {
        return k(a) && RegExp.$1
      }

      function m(a) {
        return e.test(a)
      }
      var c = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,
        d = /(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,
        e = /^http(s?):\/\/((www\.)?)twitter.com\//;
      a({
        isHashTag: i,
        hashTag: j,
        isScreenName: f,
        screenName: g,
        isStatus: k,
        status: l,
        intentForProfileURL: h,
        isTwitterURL: m,
        regexen: {
          profile: c
        }
      })
    })
  });
  provide("util/insert", function (a) {
    a(function (a, b) {
      if (b) {
        if (!b.parentNode) return b;
        b.parentNode.replaceChild(a, b), delete b
      } else document.body.insertBefore(a, document.body.firstChild);
      return a
    })
  });
  provide("util/datetime", function (a) {
    using("util/util", function (b) {
      function n(a) {
        var e = a || "",
          h = e.toString(),
          i, j;
        return i = function () {
          var a;
          if (f.test(h)) return parseInt(h, 10);
          if (a = h.match(d)) return Date.UTC(a[7], b.indexOf(g, a[1]), a[2], a[3], a[4], a[5]);
          if (a = h.match(c)) return Date.UTC(a[1], a[2] - 1, a[3], a[4], a[5], a[6])
        }(), i ? (j = new Date(i), !isNaN(j.getTime()) && j) : !1
      }

      function o(a, b) {
        function q(a, b) {
          return p && p[a] && (a = p[a]), a.replace(/%\{([\w_]+)\}/g, function (a, c) {
            return b[c] !== undefined ? b[c] : a
          })
        }
        var c = n(a),
          d = +(new Date),
          e = d - c,
          f, l = b && b.months || g,
          o = b && b.formats || {
            abbr: "%{number}%{symbol}",
            shortdate: "%{day} %{month}",
            longdate: "%{day} %{month} %{year}"
          }, p = b && b.phrases;
        return c ? isNaN(e) || e < h * 2 ? q("now") : e < i ? (f = Math.floor(e / h), q(o.abbr, {
          number: f,
          symbol: q(m, {
            abbr: q("s"),
            expanded: f > 1 ? q("seconds") : q("second")
          })
        })) : e < j ? (f = Math.floor(e / i), q(o.abbr, {
          number: f,
          symbol: q(m, {
            abbr: q("m"),
            expanded: f > 1 ? q("minutes") : q("minute")
          })
        })) : e < k ? (f = Math.floor(e / j), q(o.abbr, {
          number: f,
          symbol: q(m, {
            abbr: q("h"),
            expanded: f > 1 ? q("hours") : q("hour")
          })
        })) : e < k * 365 ? q(o.shortdate, {
          day: c.getDate(),
          month: q(l[c.getMonth()])
        }) : q(o.longtime, {
          day: c.getDate(),
          month: q(l[c.getMonth()]),
          year: c.getFullYear().toString().slice(2)
        }) : ""
      }
      var c = /(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[\+\-]\d{2}:?\d{2})/,
        d = /[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2}) (\d{4})/i,
        e = /[a-z]{3,4}, (\d{1,2}) ([a-z]{3}) (\d{4}) (\d{1,2}):(\d{2}):(\d{2}) ([\+\-]\d{2}:?\d{2})/i,
        f = /^\d+$/,
        g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        h = 1e3,
        i = h * 60,
        j = i * 60,
        k = j * 24,
        l = k * 7,
        m = '<abbr title="%{expanded}">%{abbr}</abbr>';
      a({
        parse: n,
        timeAgo: o
      })
    })
  });
  provide("util/css", function (a) {
    using("util/util", function (b) {
      a({
        sanitize: function (a, c) {
          var d = /^[\w ,%\/"'\-_#]+$/,
            e = a && b.map(a.split(";"), function (a) {
              return b.map(a.split(":").slice(0, 2), function (a) {
                return b.trim(a)
              })
            }),
            f = 0,
            g, h = [];
          c = c || /^(font\-|text\-|letter\-|color)[\w\-]*$/;
          for (; e && (g = e[f]); f++) g[0].match(c) && g[1].match(d) && h.push(g.join(":"));
          return h.join(";")
        }
      })
    })
  });
  provide("tfw/widget/params", function (a) {
    using("util/querystring", "util/twitter", function (b, c) {
      a(function (a, d) {
        return function (e) {
          var f, g = "data-tw-params",
            h, i = e.innerHTML;
          if (!e) return;
          if (!c.isTwitterURL(e.href)) return;
          if (e.getAttribute(g)) return;
          e.setAttribute(g, !0);
          if (typeof d == "function") {
            f = d.call(this, e);
            for (h in f) f.hasOwnProperty(h) && (a[h] = f[h])
          }
          e.href = b.url(e.href, a), e.innerHTML = i
        }
      })
    })
  });
  provide("$xd/json2.js", function (exports) {
    window.JSON || (window.JSON = {}),

    function () {
      function f(a) {
        return a < 10 ? "0" + a : a
      }

      function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function (a) {
          var b = meta[a];
          return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
      }

      function str(a, b) {
        var c, d, e, f, g = gap,
          h, i = b[a];
        i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
          case "string":
            return quote(i);
          case "number":
            return isFinite(i) ? String(i) : "null";
          case "boolean":
          case "null":
            return String(i);
          case "object":
            if (!i) return "null";
            gap += indent, h = [];
            if (Object.prototype.toString.apply(i) === "[object Array]") {
              f = i.length;
              for (c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
              return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
            }
            if (rep && typeof rep == "object") {
              f = rep.length;
              for (c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
            } else for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
            return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
      }
      typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
      }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (a) {
        return this.valueOf()
      });
      var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        }, rep;
      typeof JSON.stringify != "function" && (JSON.stringify = function (a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number") for (d = 0; d < c; d += 1) indent += " ";
        else typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {
          "": a
        });
        throw new Error("JSON.stringify")
      }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(a, b) {
          var c, d, e = a[b];
          if (e && typeof e == "object") for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
          return reviver.call(a, b, e)
        }
        var j;
        cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
          "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
      })
    }();
    exports();
    loadrunner.Script.loaded.push("$xd/json2.js")
  });
  provide("util/params", function (a) {
    using("util/querystring", function (b) {
      var c = function (a) {
        var c = a.search.substr(1);
        return b.decode(c)
      }, d = function (a) {
        var c = a.href,
          d = c.indexOf("#"),
          e = d < 0 ? "" : c.substring(d + 1);
        return b.decode(e)
      }, e = function (a) {
        var b = {}, e = c(a),
          f = d(a);
        for (var g in e) e.hasOwnProperty(g) && (b[g] = e[g]);
        for (var g in f) f.hasOwnProperty(g) && (b[g] = f[g]);
        return b
      };
      a({
        combined: e,
        fromQuery: c,
        fromFragment: d
      })
    })
  });
  provide("tfw/widget/env", function (a) {
    using("util/params", function (b) {
      function d() {
        var a = 36e5,
          d = b.combined(document.location)._;
        return c !== undefined ? c : (c = !1, d && /^\d+$/.test(d) && (c = +(new Date) - parseInt(d) < a), c)
      }
      var c;
      a({
        isDynamicWidget: d
      })
    })
  });
  provide("util/decider", function (a) {
    function c(a) {
      var c = b[a] || !1;
      if (!c) return !1;
      if (c === !0 || c === 100) return !0;
      var d = Math.random() * 100,
        e = c >= d;
      return b[a] = e, e
    }
    var b = {
      force_new_cookie: 100,
      rufous_pixel: 100,
      decider_fixture: 12.34
    };
    a({
      isAvailable: c
    })
  });
  provide("dom/cookie", function (a) {
    using("util/util", function (b) {
      a(function (a, c, d) {
        var e = b.aug({}, d);
        if (arguments.length > 1 && String(c) !== "[object Object]") {
          if (c === null || c === undefined) e.expires = -1;
          if (typeof e.expires == "number") {
            var f = e.expires,
              g = new Date((new Date).getTime() + f * 60 * 1e3);
            e.expires = g
          }
          return c = String(c), document.cookie = [encodeURIComponent(a), "=", e.raw ? c : encodeURIComponent(c), e.expires ? "; expires=" + e.expires.toUTCString() : "", e.path ? "; path=" + e.path : "", e.domain ? "; domain=" + e.domain : "", e.secure ? "; secure" : ""].join("")
        }
        e = c || {};
        var h, i = e.raw ? function (a) {
            return a
          } : decodeURIComponent;
        return (h = (new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)")).exec(document.cookie)) ? i(h[1]) : null
      })
    })
  });
  provide("util/donottrack", function (a) {
    using("dom/cookie", function (b) {
      a(function (a) {
        var c = /\.(gov|mil)(:\d+)?$/i,
          d = /https?:\/\/([^\/]+).*/i;
        return a = a || document.referrer, a = d.test(a) && d.exec(a)[1], b("dnt") ? !0 : c.test(document.location.host) ? !0 : a && c.test(a) ? !0 : document.navigator ? document.navigator["doNotTrack"] == 1 : navigator ? navigator["doNotTrack"] == 1 || navigator["msDoNotTrack"] == 1 : !1
      })
    })
  });
  provide("tfw/widget/guest_cookie", function (a) {
    using("dom/cookie", "util/donottrack", "util/decider", function (b, c, d) {
      function f() {
        var a = b(e) || !1;
        if (!a) return;
        a.match(/^v3\:/) || g()
      }

      function g() {
        b(e) && b(e, null, {
          domain: ".twitter.com",
          path: "/"
        })
      }

      function h() {
        c() && g()
      }
      var e = "pid";
      a({
        set: h,
        destroy: g,
        forceNewCookie: f,
        guest_id_cookie: e
      })
    })
  });
  provide("tfw/widget/tracking", function (a) {
    using("dom/cookie", "dom/sandbox", "util/donottrack", "tfw/widget/guest_cookie", "tfw/widget/env", "util/util", "$xd/json2.js", function (b, c, d, e, f, g, h) {
      function u() {
        function a(a) {
          s = a.frame, r = a.doc, q = a.doc.body, m = F(), n = G();
          while (o[0]) z.apply(this, o.shift());
          p && A()
        }
        s = document.getElementById("rufous-sandbox"), s ? (r = s.contentWindow.document, q = r.body) : c(a, {
          id: "rufous-sandbox"
        }, {
          display: "none"
        })
      }

      function v(a, b, c, d) {
        var e = !g.isObject(a),
          f = b ? !g.isObject(b) : !1,
          h, i;
        if (e || f) return;
        if (/Firefox/.test(navigator.userAgent)) return;
        h = C(a), i = D(b, !! c, !! d), y(h, i, !0)
      }

      function w(a, c, h, i) {
        var k = j[c],
          l, m, n = e.guest_id_cookie;
        if (!k) return;
        a = a || {}, i = !! i, h = !! h, m = a.original_redirect_referrer || document.referrer, i = i || d(m), l = g.aug({}, a), h || (x(l, "referrer", m), x(l, "widget", +f.isDynamicWidget()), x(l, "hask", + !! b("k")), x(l, "li", + !! b("twid")), x(l, n, b(n) || "")), i && (x(l, "dnt", 1), I(l)), H(k + "?" + E(l))
      }

      function x(a, b, c) {
        var d = i + b;
        if (!a) return;
        return a[d] = c, a
      }

      function y(a, b, c) {
        var d, e, f, h, i, j = "https://twitter.com/i/jot?";
        if (!g.isObject(a) || !g.isObject(b)) return;
        if (Math.random() > t) return;
        f = g.aug({}, b, {
          event_namespace: a
        }), c ? (j += E({
          l: J(f)
        }), H(j)) : (d = m.firstChild, d.value = +d.value || +f.dnt, h = J(f), e = r.createElement("input"), e.type = "hidden", e.name = "l", e.value = h, m.appendChild(e))
      }

      function z(a, b, c, d) {
        var e = !g.isObject(a),
          f = b ? !g.isObject(b) : !1,
          h, i;
        if (e || f) return;
        if (!q) {
          o.push([a, b, c, d]);
          return
        }
        h = C(a), i = D(b, !! c, !! d), y(h, i)
      }

      function A() {
        if (!m) {
          p = !0;
          return
        }
        if (m.children.length <= 1) return;
        q.appendChild(m), q.appendChild(n), m.submit(), window.setTimeout(B(m, n), 6e4), m = F(), n = G()
      }

      function B(a, b) {
        return function () {
          var c = a.parentNode;
          c.removeChild(a), c.removeChild(b)
        }
      }

      function C(a) {
        var b = {
          client: "tfw"
        }, c, d;
        return c = g.aug(b, a || {}), c
      }

      function D(a, b, c) {
        var e = {
          _category_: "tfw_client_event"
        }, f, h, i;
        return b = !! b, c = !! c, f = g.aug(e, a || {}), h = f.widget_origin || document.referrer, f.format_version = 1, f.dnt = c = c || d(h), f.triggered_on = f.triggered_on || +(new Date), b || (f.widget_origin = h), c && I(f), f
      }

      function E(a) {
        var b = [],
          c, d, e;
        for (c in a) a.hasOwnProperty(c) && (d = encodeURIComponent(c), e = encodeURIComponent(a[c]), e = e.replace(/'/g, "%27"), b.push(d + "=" + e));
        return b.join("&")
      }

      function F() {
        var a = r.createElement("form"),
          b = r.createElement("input");
        return l++, a.action = "https://twitter.com/i/jot", a.method = "POST", a.target = "rufous-frame-" + l, a.id = "rufous-form-" + l, b.type = "hidden", b.name = "dnt", b.value = 0, a.appendChild(b), a
      }

      function G() {
        var a, b = "rufous-frame-" + l,
          c = 0;
        try {
          a = r.createElement("<iframe name=" + b + ">")
        } catch (d) {
          a = r.createElement("iframe"), a.name = b
        }
        return a.id = b, a.style.display = "none", a.width = 0, a.height = 0, a.border = 0, a
      }

      function H(a) {
        var b = document.createElement("img");
        b.src = a, b.alt = "", b.style.position = "absolute", b.style.height = "1px", b.style.width = "1px", b.style.top = "-9999px", b.style.left = "-9999px", document.body.appendChild(b)
      }

      function I(a) {
        var b;
        for (b in a)~g.indexOf(k, b) && delete a[b]
      }

      function J(a) {
        var b = Array.prototype.toJSON,
          c;
        return delete Array.prototype.toJSON, c = JSON.stringify(a), Array.prototype.toJSON = b, c
      }
      var i = "twttr_",
        j = {
          tweetbutton: "//p.twitter.com/t.gif",
          followbutton: "//p.twitter.com/f.gif",
          tweetembed: "//p.twitter.com/e.gif"
        }, k = ["hask", "li", "logged_in", "pid", "user_id", e.guest_id_cookie, i + "hask", i + "li", i + e.guest_id_cookie],
        l = 0,
        m, n, o = [],
        p, q, r, s, t = .25;
      e.forceNewCookie(), a({
        enqueue: z,
        flush: A,
        initPostLogging: u,
        addPixel: v,
        addLegacyPixel: w,
        addVar: x
      })
    })
  });
  provide("tfw/assets", function (a) {
    using("util/env", function (b) {
      function d(a, d) {
        var e = c[a],
          f;
        return b.retina() ? f = "2x" : b.ie6() || b.ie7() ? f = "gif" : f = "default", d && (f += ".rtl"), e[f]
      }
      var c = {
        "embed/timeline.css": {
          "default": "embed/timeline.5eb08074ccff40735cf576352c81c1e1.default.css",
          "2x": "embed/timeline.5eb08074ccff40735cf576352c81c1e1.2x.css",
          gif: "embed/timeline.5eb08074ccff40735cf576352c81c1e1.gif.css",
          "default.rtl": "embed/timeline.5eb08074ccff40735cf576352c81c1e1.default.rtl.css",
          "2x.rtl": "embed/timeline.5eb08074ccff40735cf576352c81c1e1.2x.rtl.css",
          "gif.rtl": "embed/timeline.5eb08074ccff40735cf576352c81c1e1.gif.rtl.css"
        },
        "embed/embed.ff268cb1fe83dd17c1ba606826968a3a.css": {
          "default": "embed/embed.default.css",
          "2x": "embed/embed.2x.css",
          gif: "embed/embed.gif.css",
          "default.rtl": "embed/embed.default.rtl.css",
          "2x.rtl": "embed/embed.2x.rtl.css",
          "gif.rtl": "embed/embed.gif.rtl.css"
        }
      };
      a(d)
    })
  });
  provide("util/logger", function (a) {
    function c(a) {
      window[b] && window[b].log && window[b].log(a)
    }

    function d(a) {
      window[b] && window[b].warn && window[b].warn(a)
    }

    function e(a) {
      window[b] && window[b].error && window[b].error(a)
    }
    var b = ["con", "sole"].join("");
    a({
      info: c,
      warn: d,
      error: e
    })
  });
  provide("tfw/data", function (a) {
    using("util/logger", "util/util", "util/querystring", function (b, c, d) {
      function l(a, b) {
        return a == {}.toString.call(b).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      function m(a) {
        return function (c) {
          c.error ? a.error && a.error(c) : c.headers && c.headers.status != 200 ? (a.error && a.error(c), b.warn(c.headers.message)) : a.success && a.success(c), a.complete && a.complete(c), n(a)
        }
      }

      function n(a) {
        var b = a.script;
        b && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), a.script = undefined, b = undefined), a.callbackName && twttr.tfw.callbacks[a.callbackName] && delete twttr.tfw.callbacks[a.callbackName]
      }

      function o(a) {
        var b = {};
        return a.success && l("function", a.success) && (b.success = a.success), a.error && l("function", a.error) && (b.error = a.error), a.complete && l("function", a.complete) && (b.complete = a.complete), b
      }

      function p(a, b, c) {
        var d = a.length,
          e = [],
          f = {}, g = 0;
        return function (e) {
          var h, i = [],
            j = [],
            k = [],
            l, m;
          h = c(e), f[h] = e;
          if (++g === d) {
            for (l = 0; l < d; l++) m = f[a[l]], i.push(m), m.error ? k.push(m) : j.push(m);
            b.error && k.length > 0 && b.error(k), b.success && j.length > 0 && b.success(j), b.complete && b.complete(i)
          }
        }
      }
      twttr = twttr || {}, twttr.tfw = twttr.tfw || {}, twttr.tfw.callbacks = twttr.tfw.callbacks || {};
      var e = "twttr.tfw.callbacks",
        f = twttr.tfw.callbacks,
        g = "cb",
        h = 0,
        i = !1,
        j = {}, k = {
          userLookup: "//api.twitter.com/1/users/lookup.json",
          userShow: "//cdn.api.twitter.com/1/users/show.json",
          status: "//cdn.api.twitter.com/1/statuses/show.json",
          count: "//cdn.api.twitter.com/1/urls/count.json",
          friendship: "//cdn.api.twitter.com/1/friendships/exists.json",
          timeline: "//cdn.syndication.twimg.com/widgets/timelines/",
          timelinePoll: "//syndication.twimg.com/widgets/timelines/paged/",
          timelinePreview: "//syndication.twimg.com/widgets/timelines/preview/"
        };
      twttr.widgets && twttr.widgets.endpoints && c.aug(k, twttr.widgets.endpoints), j.jsonp = function (a, b, c) {
        var j = c || g + h,
          k = e + "." + j,
          l = document.createElement("script"),
          n = {
            callback: k,
            suppress_response_codes: !0
          };
        f[j] = m(b);
        if (i || !/^https?\:$/.test(window.location.protocol)) a = a.replace(/^\/\//, "https://");
        l.src = d.url(a, n), l.async = "async", document.body.appendChild(l), b.script = l, b.callbackName = j, c || h++
      }, j.config = function (a) {
        if (a.forceSSL === !0 || a.forceSSL === !1) i = a.forceSSL
      }, j.user = function () {
        var a, b = {}, c, e, f;
        arguments.length === 1 ? (a = arguments[0].screenName, b = o(arguments[0])) : (a = arguments[0], b.success = arguments[1]), c = l("array", a) ? k.userLookup : k.userShow, a = l("array", a) ? a.join(",") : a, e = {
          screen_name: a
        }, f = d.url(c, e), this.jsonp(f, b)
      }, j.userById = function (a) {
        var b, c = {}, e, f, g;
        arguments.length === 1 ? (b = arguments[0].ids, c = o(arguments[0])) : (b = arguments[0], c.success = arguments[1]), e = l("array", b) ? k.userLookup : k.userShow, b = l("array", b) ? b.join(",") : b, f = {
          user_id: b
        }, g = d.url(e, f), this.jsonp(g, c)
      }, j.status = function () {
        var a, b = {}, c, e, f, g;
        arguments.length === 1 ? (a = arguments[0].id, b = o(arguments[0])) : (a = arguments[0], b.success = arguments[1]);
        if (!l("array", a)) c = {
          id: a,
          include_entities: !0
        }, e = d.url(k.status, c), this.jsonp(e, b);
        else {
          f = p(a, b, function (a) {
            return a.error ? a.request.split("id=")[1].split("&")[0] : a.id_str
          });
          for (g = 0; g < a.length; g++) c = {
            id: a[g],
            include_entities: !0
          }, e = d.url(k.status, c), this.jsonp(e, {
            success: f,
            error: f
          })
        }
      }, j.tweet = j.status, j.count = function () {
        var a = "",
          b, c, e = {};
        arguments.length === 1 ? (a = arguments[0].url, e = o(arguments[0])) : arguments.length === 2 && (a = arguments[0], e.success = arguments[1]), c = {
          url: a
        }, b = d.url(k.count, c), this.jsonp(b, e)
      }, j.friendshipExists = function (a) {
        var b = arguments[0],
          c = o(arguments[0]),
          e = {
            screen_name_a: a.screenNameA,
            screen_name_b: a.screenNameB
          }, f = d.url(k.friendship, e);
        this.jsonp(f, c)
      }, j.timeline = function (a) {
        var b = arguments[0],
          c = o(b),
          e, f = 9e5,
          g = Math.floor(+(new Date) / f),
          h = {
            lang: a.lang,
            t: g,
            domain: window.location.host
          };
        a.dnt && (h.dnt = a.dnt), a.screenName && (h.screen_name = a.screenName), a.userId && (h.user_id = a.userId), a.withReplies && (h.with_replies = a.withReplies), e = d.url(k.timeline + a.id, h), this.jsonp(e, c, "tl_" + a.id)
      }, j.timelinePoll = function (a) {
        var b = arguments[0],
          c = o(b),
          e = {
            lang: a.lang,
            since_id: a.sinceId,
            max_id: a.maxId,
            domain: window.location.host
          }, f;
        a.dnt && (e.dnt = a.dnt), a.screenName && (e.screen_name = a.screenName), a.userId && (e.user_id = a.userId), a.withReplies && (e.with_replies = a.withReplies), f = d.url(k.timelinePoll + a.id, e), this.jsonp(f, c, "tlPoll_" + a.id + "_" + (a.sinceId || a.maxId))
      }, j.timelinePreview = function (a) {
        var b = arguments[0],
          c = o(b),
          e = a.params,
          f = d.url(k.timelinePreview, e);
        this.jsonp(f, c)
      }, a(j)
    })
  });
  provide("anim/transition", function (a) {
    function b(a, b) {
      var c;
      return b = b || window, c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.msRequestAnimationFrame || b.oRequestAnimationFrame || function (c) {
        b.setTimeout(function () {
          a(+(new Date))
        }, 1e3 / 60)
      }, c(a)
    }

    function c(a, b) {
      return Math.sin(Math.PI / 2 * b) * a
    }

    function d(a, c, d, e, f) {
      function i(h) {
        var j = h - g,
          k = Math.min(j / d, 1),
          l = e ? e(c, k) : c * k;
        a(l);
        if (k == 1) return;
        b(i, f)
      }
      var g = +(new Date),
        h;
      b(i)
    }
    a({
      animate: d,
      requestAnimationFrame: b,
      easeOut: c
    })
  });
  provide("tfw/widget/timeline", function (a) {
    using("anim/transition", "tfw/widget/base", "tfw/widget/intent", "tfw/data", "tfw/assets", "tfw/widget/tracking", "tfw/widget/params", "util/css", "util/datetime", "util/env", "util/iframe", "util/insert", "util/twitter", "util/querystring", "util/util", "dom/delegate", "dom/classname", "dom/get", "dom/sandbox", function (b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
      function ba(a, b, c) {
        var d;
        c = c || document;
        if (c.getElementById(a)) return;
        d = c.createElement("link"), d.id = a, d.rel = "stylesheet", d.type = "text/css", d.href = twttr.widgets.config.assetUrl() + "/" + b, c.getElementsByTagName("head")[0].appendChild(d)
      }

      function bb(a) {
        if (!a) return;
        var b, d, e, f, g = this;
        c.Base.apply(this, [a]), b = this.params(), this.preview = b.previewParams, this.widgetId = b.widgetId || this.dataAttr("widget-id"), this.widgetScreenName = b.screenName || this.dataAttr("screen-name"), this.widgetUserId = b.userId || this.dataAttr("user-id");
        if (b.showReplies === !0 || this.dataAttr("show-replies") == "true") this.widgetShowReplies = "true";
        this.targetEl = this.srcEl && this.srcEl.parentNode || b.targetEl || document.body, e = this.targetEl && this.targetEl.offsetWidth, d = b.width || this.attr("width") || e, this.height = v.test(b.height || this.attr("height")) && RegExp.$1, this.width = Math.max(A, Math.min(v.test(d) ? RegExp.$1 : y, y)), this.narrow = b.narrow || this.width <= z, this.chromeless = (b.chrome || this.dataAttr("chrome")) == "none", this.headingStyle = i.sanitize(b.headingStyle || this.dataAttr("heading-style")), this.linkColor = w.test(b.linkColor || this.dataAttr("link-color")) && RegExp.$1, this.theme = b.theme || this.attr("data-theme"), this.theme = /(dark|light)/.test(this.theme) ? this.theme : "", this.classAttr.push("twitter-timeline-rendered"), this.classAttr.push(k.touch() ? "is-touch" : "not-touch"), this.ariaPolite = b.ariaPolite || this.dataAttr("aria-polite"), t(function (a) {
          g.sandboxReady = !0, g.setupSandbox.call(g, a)
        }, {
          "class": "twitter-timeline twitter-timeline-rendered",
          id: this.id
        }, {
          width: "1px",
          height: "1px",
          border: "none",
          position: "absolute"
        }, function (a) {
          g.srcEl ? g.targetEl.insertBefore(a, g.srcEl) : g.targetEl.appendChild(a)
        })
      }

      function bc(a, b) {
        var c = a.ownerDocument,
          d = s.one(Q, a, "DIV"),
          e = d.children[0],
          f = e.getAttribute("data-expanded-media"),
          g, h = 0,
          i = s.one(R, a, "A"),
          j = i && i.getElementsByTagName("B")[0],
          k = j && (j.innerText || j.textContent),
          l;
        if (!j) return;
        j.innerHTML = i.getAttribute("data-toggled-text"), i.setAttribute("data-toggled-text", k);
        if (r.present(a, P)) {
          r.remove(a, P), d.style.cssText = "";
          return
        }
        f && (g = c.createElement("DIV"), g.innerHTML = f, bd(g), h = bf(g, b), e.removeAttribute("data-expanded-media"), e.appendChild(g)), l = Math.max(e.offsetHeight, h), d.style.cssText = "height:" + l + "px", r.add(a, P)
      }

      function bd(a) {
        if (!k.retina()) return;
        var b = a.getElementsByTagName("IMG"),
          c, d, e = 0,
          f = b.length;
        for (; e < f; e++) c = b[e], d = c.getAttribute("data-src-2x"), d && (c.src = d)
      }

      function be(a, b, c, d) {
        return b > a && b > d ? (a *= d / b, b = d) : a > c && (b *= c / a, a = c), {
          width: Math.ceil(a),
          height: Math.ceil(b)
        }
      }

      function bf(a, b) {
        var c = a.getElementsByTagName("IMG"),
          d = a.getElementsByTagName("IFRAME"),
          e, f, g, h = 0,
          i = 0,
          j;
        for (; e = [c, d][i]; i++) if (e.length) for (j = 0; f = e[j]; j++) g = be(f.getAttribute("width") || f.width, f.getAttribute("height") || f.height, b, f.getAttribute("height") || f.height), g.width > 0 && (f.width = g.width), g.height > 0 && (f.height = g.height), h = g.height > h ? g.height : h;
        return h
      }
      var u = "1.0",
        v = /^([0-9]+)( ?px)?$/,
        w = /^(#(?:[0-9a-f]{3}|[0-9a-f]{6}))$/i,
        x = "600",
        y = "520",
        z = "320",
        A = "180",
        B = "250",
        C = 81,
        D = 16,
        E = {
          CLIENT_SIDE_USER: 0,
          CLIENT_SIDE_APP: 2
        }, F = [".customisable", ".customisable:link", ".customisable:visited", ".customisable:hover", ".customisable:active", ".customisable-highlight:hover", "a:hover .customisable-highlight", "a:focus .customisable-highlight"],
        G = ["a:hover .ic-mask", "a:focus .ic-mask"],
        H = [".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"],
        I = "timeline",
        J = "new-tweets-bar",
        K = "timeline-header",
        L = "timeline-footer",
        M = "stream",
        N = "h-feed",
        O = "tweet",
        P = "expanded",
        Q = "detail-expander",
        R = "expand",
        S = "permalink",
        T = "twitter-tweet-box",
        U = "tweet-box-button",
        V = "twitter-follow-button",
        W = "no-more-pane",
        X = "pending-scroll-in",
        Y = "pending-new-tweet",
        Z = "show-new-tweet",
        $ = "show-tweet-box",
        _ = "web-intent";
      bb.prototype = new c.Base, p.aug(bb.prototype, {
        create: function (a) {
          var b = this.sandbox.doc.createElement("div"),
            c, d = this,
            e, f, h, i = [],
            j, k;
          b.innerHTML = a.body, c = b.children[0] || !1;
          if (!c) return;
          this.reconfigure(a.config), this.augmentWidgets(c), bd(c), bf(c, this.contentWidth()), this.searchQuery = c.getAttribute("data-search-query"), this.profileId = c.getAttribute("data-profile-id"), j = this.getTweetDetails(b);
          for (k in j) j.hasOwnProperty(k) && i.push(k);
          return g.enqueue({
            page: "timeline",
            component: "timeline",
            element: "initial",
            action: i.length ? "results" : "no_results"
          }, {
            widget_id: this.widgetId,
            item_ids: i,
            item_details: j,
            client_version: u,
            message: this.partner,
            query: this.searchQuery,
            profile_id: this.profileId
          }, !0, this.dnt), g.flush(), this.ariaPolite == "assertive" && (f = s.one(J, c, "DIV"), f.setAttribute("aria-polite", "assertive")), c.id = this.id, c.className += " " + this.classAttr.join(" "), c.lang = this.lang, twttr.widgets.load(c), h = function () {
            d.sandbox.body.appendChild(c), d.sandbox.win.setTimeout(function () {
              var a = s.one(K, c, "DIV"),
                b = s.one(L, c, "DIV"),
                f = s.one(M, c, "DIV");
              b ? e = a.offsetHeight + b.offsetHeight : e = a.offsetHeight, f.style.cssText = "height:" + (d.height - e - 2) + "px"
            }, 500), d.sandbox.frame.style.cssText = "", d.sandbox.frame.width = d.width, d.sandbox.frame.height = d.height, d.sandbox.frame.style.border = "none"
          }, this.frameIsReady ? h() : this.onFrameReady = h, this.srcEl && this.srcEl.parentNode.removeChild(this.srcEl), c
        },
        render: function (a, b) {
          function j() {
            d.success = function (a) {
              c.element = c.create(a), c.readTranslations(), c.bindEvents(), b && b(c.sandbox.frame);
              return
            }, d.error = function (a) {
              a && a.headers && b && b(a.headers.status)
            }, d.params = c.preview, e.timelinePreview(d);
            return
          }

          function k() {
            g.initPostLogging(), e.timeline({
              id: c.widgetId,
              screenName: c.widgetScreenName,
              userId: c.widgetUserId,
              withReplies: c.widgetShowReplies,
              dnt: c.dnt,
              lang: c.lang,
              success: function (a) {
                c.element = c.create(a), c.readTranslations(), c.bindEvents(), a.headers.xPolling && /\d/.test(a.headers.xPolling) && (c.pollInterval = a.headers.xPolling * 1e3), c.updateTimeStamps(), c.schedulePolling(), b && b(c.sandbox.frame);
                return
              },
              error: function (a) {
                a && a.headers && b && b(a.headers.status)
              }
            })
          }
          var c = this,
            d = {}, f, h, i;
          if (!this.preview && !this.widgetId) {
            b && b(400);
            return
          }
          i = this.preview ? j : k, this.sandboxReady ? i() : window.setTimeout(i, 0)
        },
        reconfigure: function (a) {
          this.lang = a.lang, this.theme || (this.theme = a.theme), this.theme == "dark" && this.classAttr.push("thm-dark"), this.chromeless && this.classAttr.push("var-chromeless"), !this.linkColor && a.linkColor && w.test(a.linkColor) && (this.linkColor = RegExp.$1), this.linkColor && this.addLinkColorStyle(this.linkColor), !this.height && v.test(a.height) && (this.height = RegExp.$1), this.height = Math.max(B, this.height ? this.height : x), this.preview && this.classAttr.push("var-preview"), this.narrow = this.width <= z, this.narrow && this.classAttr.push("var-narrow")
        },
        getTweetDetails: function (a) {
          var b = s.all(O, a, "LI"),
            c = {}, d, e, f, g, h = {
              TWEET: 0,
              RETWEET: 10
            }, i = 0;
          for (; d = b[i]; i++) e = s.one(S, d, "A"), f = n.status(e.href), g = d.getAttribute("data-tweet-id"), f === g ? c[f] = {
            item_type: h.TWEET
          } : c[f] = {
            item_type: h.RETWEET,
            target_type: h.TWEET,
            target_id: g
          };
          return c
        },
        addLinkColorStyle: function (a) {
          var b = this,
            c = this.sandbox.doc,
            d = this.id + "-styles",
            e, f = 0,
            g = function (a) {
              return (b.theme == "dark" ? ".thm-dark " : "") + a
            }, h, i, j = "";
          if (c.getElementById(d)) return;
          this.headingStyle && (j = p.map(H, g).join(",") + "{" + this.headingStyle + "}"), h = p.map(F, g).join(",") + "{color:" + a + "}", i = p.map(G, g).join(",") + "{background-color:" + a + "}", e = c.createElement("style"), e.id = d, e.type = "text/css", e.styleSheet ? e.styleSheet.cssText = h + i + j : (e.appendChild(c.createTextNode(h)), e.appendChild(c.createTextNode(i)), e.appendChild(c.createTextNode(j))), c.getElementsByTagName("head")[0].appendChild(e)
        },
        bindEvents: function () {
          var a = this,
            b = this.element,
            c = !0;
          q.delegate(b, "click", ".profile", function (b) {
            var c;
            a.addUrlParams(this), c = n.intentForProfileURL(this.href), c && (d.open(c), q.preventDefault(b))
          }), q.delegate(b, "click", "." + _, function (b) {
            a.addUrlParams(this), d.open(this.href), q.preventDefault(b)
          }), q.delegate(b, "click", "." + R, function (c) {
            bc(s.ancestor("." + O, this, b), a.contentWidth()), q.stop(c)
          }), q.delegate(b, "click", "A", function (a) {
            q.stopPropagation(a)
          }), q.delegate(b, "click", ".with-expansion", function (b) {
            bc(this, a.contentWidth()), q.stop(b)
          }), q.delegate(b, "click", ".load-more", function (b) {
            a.loadMore()
          }), q.delegate(b, "click", "." + J, function (b) {
            a.scrollToTop(), a.hideNewTweetNotifier(!0)
          }), q.delegate(b, "click", ".load-tweets", function (b) {
            c && (c = !1, a.forceLoad(), q.stop(b))
          }), q.delegate(b, "click", ".display-sensitive-image", function (c) {
            a.showNSFW(s.ancestor("." + O, this, b)), q.stop(c)
          }), q.delegate(b, "mouseover", "." + I, function (b) {
            a.mouseOver = !0
          }), q.delegate(b, "mouseout", "." + I, function (b) {
            a.mouseOver = !1
          }), q.delegate(b, "mouseover", "." + J, function (b) {
            a.mouseOverNotifier = !0
          }), q.delegate(b, "mouseout", "." + J, function (b) {
            a.mouseOverNotifier = !1, window.setTimeout(function () {
              a.hideNewTweetNotifier()
            }, 3e3)
          })
        },
        scrollToTop: function () {
          var a = s.one(M, this.element, "DIV");
          a.scrollTop = 0, a.focus()
        },
        update: function () {
          var a = this,
            b = s.one(O, this.element, "LI"),
            c = b && b.getAttribute("data-tweet-id");
          this.updateTimeStamps(), this.requestTweets(c, !0, function (b) {
            b.childNodes.length > 0 && a.insertNewTweets(b)
          })
        },
        loadMore: function () {
          var a = this,
            b = s.all(O, this.element, "LI").pop(),
            c = b && b.getAttribute("data-tweet-id");
          this.requestTweets(c, !1, function (b) {
            var d = s.one(W, a.element, "P"),
              e = b.childNodes[0];
            d.style.cssText = "", e && e.getAttribute("data-tweet-id") == c && b.removeChild(e);
            if (b.childNodes.length > 0) {
              a.appendTweets(b);
              return
            }
            r.add(a.element, "no-more"), d.focus()
          })
        },
        forceLoad: function () {
          var a = this,
            b = !! s.all(N, this.element, "OL").length;
          this.requestTweets(1, !0, function (c) {
            c.childNodes.length && (a[b ? "insertNewTweets" : "appendTweets"](c), r.add(a.element, "has-tweets"))
          })
        },
        schedulePolling: function (a) {
          var b = this;
          if (this.pollInterval === null) return;
          a = twttr.widgets.poll || a || this.pollInterval || 1e4, a > -1 && window.setTimeout(function () {
            this.isUpdating || b.update(), b.schedulePolling()
          }, a)
        },
        requestTweets: function (a, b, c) {
          var d = this,
            f = {
              id: this.widgetId,
              screenName: this.widgetScreenName,
              userId: this.widgetUserId,
              withReplies: this.widgetShowReplies,
              dnt: this.dnt,
              lang: this.lang
            };
          f[b ? "sinceId" : "maxId"] = a, f.complete = function () {
            this.isUpdating = !1
          }, f.error = function (a) {
            if (a && a.headers) {
              if (a.headers.status == "404") {
                d.pollInterval = null;
                return
              }
              if (a.headers.status == "503") {
                d.pollInterval *= 1.5;
                return
              }
            }
          }, f.success = function (a) {
            var e = d.sandbox.doc.createDocumentFragment(),
              f = d.sandbox.doc.createElement("div"),
              h = [],
              i, j;
            a && a.headers && a.headers.xPolling && /\d+/.test(a.headers.xPolling) && (d.pollInterval = a.headers.xPolling * 1e3);
            if (a && a.body !== undefined) {
              f.innerHTML = a.body;
              if (f.children[0] && f.children[0].tagName != "LI") return;
              i = d.getTweetDetails(f);
              for (j in i) i.hasOwnProperty(j) && h.push(j);
              h.length && (g.enqueue({
                page: "timeline",
                component: "timeline",
                element: b ? "newer" : "older",
                action: "results"
              }, {
                widget_id: d.widgetId,
                item_ids: h,
                item_details: i,
                client_version: u,
                message: d.partner,
                query: d.searchQuery,
                profile_id: d.profileId,
                event_initiator: b ? E.CLIENT_SIDE_APP : E.CLIENT_SIDE_USER
              }, !0, d.dnt), g.flush()), bd(f), bf(f, d.contentWidth());
              while (f.children[0]) e.appendChild(f.children[0]);
              c(e)
            }
          }, e.timelinePoll(f)
        },
        insertNewTweets: function (a) {
          var c = this,
            d = s.one(M, this.element, "DIV"),
            e = s.one(N, d, "OL"),
            f = e.offsetHeight,
            g;
          this.updateTimeStamps(), e.insertBefore(a, e.firstChild), g = e.offsetHeight - f;
          if (d.scrollTop > 40 || this.mouseIsOver()) {
            d.scrollTop = d.scrollTop + g, this.showNewTweetNotifier();
            return
          }
          r.remove(this.element, X), e.style.cssText = "margin-top: -" + g + "px", window.setTimeout(function () {
            d.scrollTop = 0, r.add(c.element, X), k.cssTransitions() ? e.style.cssText = "" : b.animate(function (a) {
              a < g ? e.style.cssText = "margin-top: -" + (g - a) + "px" : e.style.cssText = ""
            }, g, 500, b.easeOut)
          }, 500), this.gcTweets(50)
        },
        appendTweets: function (a) {
          var b = s.one(M, this.element, "DIV"),
            c = s.one(N, b, "OL");
          this.updateTimeStamps(), c.appendChild(a)
        },
        gcTweets: function (a) {
          var b = s.one(N, this.element, "OL"),
            c = b.children.length,
            d;
          a = a || 50;
          for (; c > a && (d = b.children[c - 1]); c--) b.removeChild(d)
        },
        showNewTweetNotifier: function () {
          var a = this,
            b = s.one(J, this.element, "DIV"),
            c = b.children[0];
          b.style.cssText = "", r.add(this.element, Y), b.removeChild(c), b.appendChild(c), r.replace(this.element, Y, Z), this.newNoticeDisplayTime = +(new Date), window.setTimeout(function () {
            a.hideNewTweetNotifier()
          }, 5e3)
        },
        hideNewTweetNotifier: function (a) {
          var b = this,
            c = s.one(J, this.element, "DIV");
          if (!a && this.mouseOverNotifier) return;
          r.replace(this.element, Z, Y), window.setTimeout(function () {
            r.remove(b.element, Y)
          }, 500)
        },
        augmentWidgets: function (a) {
          var b = s.all(V, a, "A"),
            c = s.one(T, a, "A"),
            d = s.one(U, a, "BUTTON"),
            e = 0,
            f = b.concat([c]),
            g;
          for (; g = f[e]; e++) g.setAttribute("data-related", this.related), g.setAttribute("data-partner", this.partner), g.setAttribute("data-dnt", this.dnt), g.setAttribute("data-autofocus", "true"), g.setAttribute("data-search-query", this.searchQuery), g.setAttribute("data-profile-id", this.profileId);
          if (this.width < 250) for (e = 0; g = b[e]; e++) g.setAttribute("data-show-screen-name", "false");
          c && (d && d.parentNode.removeChild(d), c.className = [U, _].join(" "))
        },
        readTranslations: function () {
          var a = this.element,
            b = "data-dt-";
          this.i18n = {
            phrases: {
              now: a.getAttribute(b + "now"),
              s: a.getAttribute(b + "s"),
              m: a.getAttribute(b + "m"),
              h: a.getAttribute(b + "h"),
              second: a.getAttribute(b + "second"),
              seconds: a.getAttribute(b + "seconds"),
              minute: a.getAttribute(b + "minute"),
              minutes: a.getAttribute(b + "minutes"),
              hour: a.getAttribute(b + "hour"),
              hours: a.getAttribute(b + "hours")
            },
            months: a.getAttribute(b + "months").split("|"),
            formats: {
              abbr: a.getAttribute(b + "abbr"),
              shortdate: a.getAttribute(b + "short"),
              longdate: a.getAttribute(b + "long")
            }
          }
        },
        updateTimeStamps: function () {
          var a = s.all(S, this.element, "A"),
            b, c, d = 0,
            e, f;
          for (; a[d] && (b = a[d]); d++) {
            e = a[d].getAttribute("data-datetime"), f = j.timeAgo(e, this.i18n), c = b.getElementsByTagName("TIME")[0];
            if (c && c.innerHTML) {
              c.innerHTML = f;
              continue
            }
            b.innerHTML = f
          }
        },
        mouseIsOver: function () {
          return this.mouseOver
        },
        addStyleSheet: function () {
          var a = r.present(document.documentElement, "twitter-dev") ? "/components/syndication-templates/lib/css/index.css" : f("embed/timeline.css");
          ba("twitter-timeline-css", a, this.sandbox.doc)
        },
        setupSandbox: function (a) {
          var b = a.doc,
            c = b.createElement("base"),
            d = b.createElement("style"),
            e = b.getElementsByTagName("head")[0],
            f = "body{display:none}";
          this.sandbox = a, d.type = "text/css", this.addStyleSheet(), c.target = "_blank", e.appendChild(c), d.styleSheet ? d.styleSheet.cssText = f : d.appendChild(b.createTextNode(f)), e.appendChild(d), this.frameIsReady = !0, this.onFrameReady && (this.onFrameReady(), this.onFrameReady = null)
        },
        addUrlParams: function (a) {
          var b = this,
            c = {
              tw_w: this.widgetId,
              related: this.related,
              partner: this.partner,
              query: this.searchQuery,
              profile_id: this.profileId,
              tw_p: "embeddedtimeline"
            };
          return this.addUrlParams = h(c, function (a) {
            var c = s.ancestor("." + O, a, b.element);
            return c && {
              tw_i: c.getAttribute("data-tweet-id")
            }
          }), this.addUrlParams(a)
        },
        contentWidth: function () {
          return this.width - (this.narrow ? D : C)
        },
        showNSFW: function (a) {
          var b = s.one("nsfw", a, "DIV"),
            c, d, e = 0,
            f, g, h, i;
          if (!b) return;
          d = be(b.getAttribute("data-width"), b.getAttribute("data-height"), this.contentWidth(), b.getAttribute("data-height")), c = !! (g = b.getAttribute("data-player")), c ? h = this.sandbox.doc.createElement("iframe") : (h = this.sandbox.doc.createElement("img"), g = b.getAttribute(k.retina() ? "data-image-2x" : "data-image"), h.alt = b.getAttribute("data-alt"), i = this.sandbox.doc.createElement("a"), i.href = b.getAttribute("data-href"), i.appendChild(h)), h.title = b.getAttribute("data-title"), h.src = g, h.width = d.width, h.height = d.height, f = s.ancestor("." + Q, b, a), e = d.height - b.offsetHeight, b.parentNode.replaceChild(c ? h : i, b), f.style.cssText = "height:" + (f.offsetHeight + e) + "px"
        }
      }), a({
        Embeddable: bb
      })
    })
  });
  provide("lib/twt", function (a) {
    a(function (a, b) {
      var c = a != "en" ? a + "." : "";
      using("$vendor/twt/dist/twt." + c + "min.js", function () {
        twt.settings.lang = a, b(twt)
      })
    })
  });
  provide("util/tweetparser", function (a) {
    using("util/util", function (b) {
      function g(a, c) {
        var d = document.getElementsByTagName(a),
          e = b.filter(d, function (a) {
            return b.containsElement(c, a)
          });
        return e || []
      }

      function h(a) {
        return a && c.test(a) && RegExp.$1
      }

      function i(a) {
        if (!a || !a.nodeName || !/blockquote/i.test(a.nodeName)) return;
        var b = {}, c = g("p", a).shift(),
          d = g("a", a).pop();
        if (!c && g("br", a).length) {
          c = document.createElement("p");
          for (var e = 0, f; f = a.childNodes[e]; e++) {
            if (f.nodeType === 1 && /^br$/i.test(f.nodeName)) break;
            c.appendChild(f)
          }
        }
        return c && (b.text = c.textContent || c.innerText || "", b.rendered_text = c.innerHTML || ""), d && (d.getAttribute("data-datetime") ? b.created_at = d.getAttribute("data-datetime") : b.time = d.textContent || d.innerText), b.user = j(a), b.id = b.id_str = h(d.href), b.id_str && b.text && b.user && b
      }

      function j(a) {
        var b = {}, c = 0,
          d = a.childNodes.length,
          h, i;
        for (; c < d; c++) {
          h = a.childNodes[c], h.nodeType === 1 && /^p$/i.test(h.nodeName) && (h = h.childNodes[0]);
          if (h && h.nodeType === 3 && e.test(h.nodeValue)) {
            b.name = RegExp.$1.split(" ").slice(1).join(" "), b.screen_name = RegExp.$2;
            break
          }
        }
        if (b.screen_name) return b;
        i = g("a", a).pop();
        if (i && f.test(i.href)) return b.name = "", b.screen_name = RegExp.$2, b
      }
      var c = /\/(\d+)\/?$/,
        d = /^https?:\/\/(?:www\.)?twitter\.com\/(?:#!\/)?[\w_]+\/status(?:es)?\/(\d+)\/?/,
        e = /^\s*(.+)\s+\(@([\w_]{1,20})\)\s*$/,
        f = /^https?:\/\/(?:www\.)?twitter\.com\/(#!\/)?([\w_]{1,20})/;
      a({
        parseTweet: i,
        parseId: h,
        parseAuthor: j
      })
    })
  });
  provide("i18n/i18n", function (a) {
    function b() {
      twttr.i18n_missing_interval || (twttr.i18n_missing_interval = window.setInterval(function () {
        twttr.i18n_missing && twttr.i18n_missing.length > 0 && ($.ajax({
          type: "POST",
          data: $.param({
            authenticity_token: twttr.form_authenticity_token,
            location: window.location.href,
            "strings[]": twttr.i18n_missing
          }),
          url: "/translate/untranslated_javascript"
        }), twttr.i18n_missing = new Array)
      }, 1e4))
    }

    function c(a) {
      twttr.i18n_missing || (twttr.i18n_missing = new Array), twttr.i18n_missing_reported || (twttr.i18n_missing_reported = {}), twttr.i18n_missing_reported[a] || (twttr.i18n_missing.push(encodeURIComponent(a)), twttr.i18n_missing_reported[a] = !0)
    }

    function d(a, b) {
      if (b) for (var c in b) a = a.replace(new RegExp("\\%\\{" + c + "\\}", "gi"), b[c]);
      return a
    }
    window.setupTranslationCallback = b, a({
      _: function (a, b) {
        if (twttr.i18n) {
          var e = twttr.i18n[a];
          e ? a = e : c(a)
        }
        return d(a, b)
      },
      setupTranslationCallback: b
    })
  });
  provide("tfw/widget/tweetembed", function (a) {
    using("util/util", "tfw/widget/base", "tfw/assets", "util/uri", "util/insert", "tfw/data", "i18n/i18n", "util/tweetparser", "tfw/widget/tracking", function (b, c, d, e, f, g, h, i, j) {
      function p(a) {
        var b = document.createElement("link");
        b.rel = "stylesheet", b.type = "text/css", b.href = twttr.widgets.config.assetUrl() + "/" + a, document.getElementsByTagName("head")[0].appendChild(b)
      }

      function q() {
        if (l) return;
        p("embed/embed.ff268cb1fe83dd17c1ba606826968a3a.css"), l = !0
      }

      function r(a, b) {
        var c = {
          status_id: a.id_str,
          tweet_ids: [a.id_str],
          context: n
        }, d = {}, e = {}, f = {
          TWEET: 0
        };
        j.addVar(c, "variant", k), j.addVar(c, "referrer", document.location.href), j.addLegacyPixel(c, "tweetembed", !0), d[a.id_str] = {
          item_type: f.TWEET
        }, j.addPixel({
          page: "tweet",
          section: "subject",
          component: "tweet",
          action: "results"
        }, {
          client_version: k,
          widget_origin: document.location.href,
          message: this.partner,
          item_ids: [a.id_str],
          item_details: d
        }, !0), b && a._wjs_reply && (c.status_id = a._wjs_reply.id_str, c.tweet_ids = [a._wjs_reply.id_str], c.context = o, j.addLegacyPixel(c, "tweetembed", !0), e[a._wjs_reply.id_str] = {
          item_type: f.TWEET
        }, j.addPixel({
          page: "tweet",
          section: "conversation",
          component: "tweet",
          action: "results"
        }, {
          client_version: k,
          widget_origin: document.location.href,
          message: this.partner,
          item_ids: [a._wjs_reply.id_str],
          item_details: e
        }, !0))
      }

      function s(a) {
        if (!a) return;
        var d, e;
        c.Base.apply(this, [a]), d = this.params(), e = d.width || this.attr("width"), this.classNames = b.filter(this.classAttr, function (a) {
          return a != "twitter-tweet"
        }), this.classNames.push("twitter-tweet-rendered"), this.styleAttr = [], this.styleAttr.push(this.attr("style") || "");
        if (m.test(e)) this.explicitWidth = RegExp.$1;
        else if (~b.indexOf(this.classNames, "tw-align-l") || ~b.indexOf(this.classNames, "tw-align-r")) this.explicitWidth = "350";
        this.explicitWidth && this.styleAttr.push("width:" + this.explicitWidth + "px!important"), this.showThread = d.hideThread !== !0 && !~b.indexOf(this.classNames, "tw-hide-thread"), this.showMedia = d.hideMedia !== !0 && !~b.indexOf(this.classNames, "tw-hide-media"), this.data = i.parseTweet(this.srcEl), this.inReplyTo = d.inReplyTo || this.dataAttr("data-in-reply-to") || ""
      }
      var k = "1.0",
        l, m = /^([0-9]+)( ?px)?$/,
        n = "subject",
        o = "thread";
      s.prototype = new c.Base, b.aug(s.prototype, {
        create: function (a, b) {
          var c = this,
            d, e = !! a._wjs_stub_data;
          return !e && r(a, c.showThread), using("lib/twt", function (g) {
            g(c.lang, function (g) {
              var h = document.createElement("div"),
                i = g.autoFormat(c.explicitWidth || c.element),
                j = g(a, {
                  format: i,
                  popupWebIntents: !1,
                  tweetElement: "blockquote",
                  showMedia: c.showMedia,
                  showErrors: !1,
                  showFollowButton: !e,
                  renderActions: !e,
                  product: "tweetembed",
                  partner: c.partner,
                  related: c.related
                }),
                k = '<div id="{{id}}" class="{{classNames}}" lang="{{lang}}" style="{{style}}">{{twt}}</div>',
                l = {
                  id: c.id,
                  classNames: b || "",
                  style: c.styleAttr.join(";"),
                  lang: c.lang,
                  twt: c.data._wjs_reply ? j.inReplyTo(a._wjs_reply).html() : j.html()
                };
              h.innerHTML = c.ringo(k, l), d = f(h.firstChild, c.element)
            })
          }), d
        },
        render: function (a) {
          var b = this,
            c, d;
          if (!b.data) return;
          q(), using("lib/twt", function (a) {
            a(b.lang, function () {
              c = b.classNames.join(" "), b.data._wjs_stub_data = !0, b.element = b.srcEl, b.element = b.create(b.data, c), d = [b.data.id_str], b.inReplyTo && b.showThread && d.push(b.inReplyTo), g.status({
                id: d,
                complete: function (a) {
                  var d = a[0],
                    e = a[1];
                  if (d.error) return;
                  b.data = d;
                  if (b.showThread && d.in_reply_to_status_id_str && (!e || d.in_reply_to_status_id_str != e.id_str)) {
                    g.status({
                      id: d.in_reply_to_status_id_str,
                      complete: function (a) {
                        a && !a.error && (b.data._wjs_reply = a), b.element = b.create(b.data, c)
                      }
                    });
                    return
                  }
                  d.in_reply_to_status_id_str && e && !e.error && (b.data._wjs_reply = e), b.element = b.create(b.data, c)
                }
              })
            })
          })
        }
      }), a({
        Embeddable: s
      })
    })
  });
  provide("dom/textsize", function (a) {
    function c(a, b, c) {
      return a + b + c
    }
    var b = {};
    a(function (a, d, e) {
      var f = document.createElement("span"),
        g = {}, h;
      return e = e || "", d = d || "", h = c(a, d, e), b[h] ? b[h] : (f.className = d + " twitter-measurement", f.setAttribute("style", e), f.innerHTML = a, document.body.appendChild(f), g.width = f.clientWidth || f.offsetWidth, g.height = f.clientHeight || f.offsetHeight, document.body.removeChild(f), delete f, b[h] = g)
    })
  });
  provide("tfw/widget/tweetbase", function (a) {
    using("util/util", "tfw/widget/base", "util/querystring", "util/uri", function (b, c, d, e) {
      function h(a) {
        if (!a) return;
        var b;
        c.Base.apply(this, [a]), b = this.params(), this.text = b.text || this.dataAttr("text"), this.align = b.align || this.dataAttr("align") || "", this.via = b.via || this.dataAttr("via"), this.placeid = b.placeid || this.dataAttr("placeid"), this.hashtags = b.hashtags || this.dataAttr("hashtags"), this.screen_name = b.screen_name || this.dataAttr("button-screen-name"), this.url = b.url || this.dataAttr("url")
      }
      var f = document.title,
        g = encodeURI(location.href);
      h.prototype = new c.Base, b.aug(h.prototype, {
        parameters: function () {
          var a = {
            text: this.text,
            url: this.url,
            related: this.related,
            lang: this.lang,
            placeid: this.placeid,
            original_referer: location.href,
            id: this.id,
            screen_name: this.screen_name,
            hashtags: this.hashtags,
            dnt: this.dnt,
            _: +(new Date)
          };
          return b.compact(a), d.encode(a)
        }
      }), a({
        TweetBase: h
      })
    })
  });
  provide("tfw/widget/tweetbutton", function (a) {
    using("util/util", "tfw/widget/tweetbase", "util/querystring", "util/uri", "dom/textsize", function (b, c, d, e, f) {
      var g = document.title,
        h = encodeURI(location.href),
        i = ["vertical", "horizontal", "none"],
        j = function (a) {
          c.TweetBase.apply(this, [a]);
          var d = this.params(),
            f = d.count || this.dataAttr("count"),
            j = d.size || this.dataAttr("size"),
            k = e.getScreenNameFromPage();~b.indexOf(this.classAttr, "twitter-hashtag-button") ? this.type = "hashtag" : ~b.indexOf(this.classAttr, "twitter-mention-button") && (this.type = "mention"), this.text = d.text || this.dataAttr("text"), this.align = d.align || this.dataAttr("align") || "", this.via = d.via || this.dataAttr("via"), this.related = d.related || this.dataAttr("related"), this.counturl = d.counturl || this.dataAttr("counturl"), this.searchlink = d.searchlink || this.dataAttr("searchlink"), this.placeid = d.placeid || this.dataAttr("placeid"), this.hashtags = d.hashtags || this.dataAttr("hashtags"), this.screen_name = d.screen_name || this.dataAttr("button-screen-name"), this.button_hashtag = d.button_hashtag || this.dataAttr("button-hashtag"), this.url = d.url || this.dataAttr("url"), this.size = j == "large" ? "l" : "m", this.dnt = d.dnt || this.dataAttr("dnt") || "", this.type ? (this.count = "none", k && (this.related = this.related ? k + "," + this.related : k)) : (this.text = this.text || g, this.url = this.url || e.getCanonicalURL() || h, this.count = ~b.indexOf(i, f) ? f : "horizontal", this.count = this.count == "vertical" && this.size == "l" ? "none" : this.count, this.via = this.via || k)
        };
      j.prototype = new c.TweetBase, b.aug(j.prototype, {
        parameters: function () {
          var a = {
            text: this.text,
            url: this.url,
            via: this.via,
            related: this.related,
            count: this.count,
            lang: this.lang,
            counturl: this.counturl,
            searchlink: this.searchlink,
            placeid: this.placeid,
            original_referer: location.href,
            id: this.id,
            size: this.size,
            type: this.type,
            screen_name: this.screen_name,
            button_hashtag: this.button_hashtag,
            hashtags: this.hashtags,
            align: this.align,
            dnt: this.dnt,
            _: +(new Date)
          };
          return b.compact(a), d.encode(a)
        },
        height: function () {
          return this.count == "vertical" ? 62 : this.size == "m" ? 20 : 28
        },
        width: function () {
          var a = {
            ver: 8,
            cnt: 14,
            btn: 24,
            xlcnt: 18,
            xlbtn: 38
          }, c = this.count == "vertical",
            d = this.type == "hashtag" ? "Tweet %{hashtag}" : this.type == "mention" ? "Tweet to %{name}" : "Tweet",
            e = this._(d, {
              name: "@" + this.screen_name,
              hashtag: "#" + this.button_hashtag
            }),
            g = this._("K"),
            h = this._("100K+"),
            i = (c ? "8888" : "88888") + g,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = this.styles.base,
            o = n;
          return~b.indexOf(["ja", "ko"], this.lang) ? i += this._("10k unit") : i = i.length > h.length ? i : h, c ? (o = n + this.styles.vbubble, m = a.ver, l = a.btn) : this.size == "l" ? (n = o = n + this.styles.large, l = a.xlbtn, m = a.xlcnt) : (l = a.btn, m = a.cnt), this.count != "none" && (k = f(i, "", o).width + m), j = f(e, "", n + this.styles.button).width + l, c ? j > k ? j : k : this.calculatedWidth = j + k
        },
        render: function () {
          var a = twttr.widgets.config.assetUrl() + "/widgets/tweet_button.1357323348.html#" + this.parameters();
          this.count && (this.srcEl.className += " twitter-count-" + this.count), this.element = this.create(a, this.srcEl.className, this.dimensions(), {
            title: this._("Twitter Tweet Button")
          })
        }
      }), a({
        Embeddable: j
      })
    })
  });
  provide("tfw/widget/follow", function (a) {
    using("util/util", "tfw/widget/base", "util/querystring", "util/uri", "util/twitter", "dom/textsize", function (b, c, d, e, f, g) {
      function h(a) {
        if (!a) return;
        var b, d, e, g;
        c.Base.apply(this, [a]), b = this.params(), d = b.size || this.dataAttr("size"), e = b.show_screen_name || this.dataAttr("show-screen-name"), g = b.show_count || this.dataAttr("show-count"), this.showScreenName = e != "false", this.showCount = g != "false", this.explicitWidth = b.width || this.dataAttr("width") || "", this.screenName = b.screenName || f.screenName(this.attr("href")), this.preview = b.preview || this.dataAttr("preview") || "", this.align = b.align || this.dataAttr("align") || "", this.size = d == "large" ? "l" : "m"
      }
      h.prototype = new c.Base, b.aug(h.prototype, {
        parameters: function () {
          var a = {
            screen_name: this.screenName,
            lang: this.lang,
            show_count: this.showCount,
            show_screen_name: this.showScreenName,
            align: this.align,
            id: this.id,
            preview: this.preview,
            size: this.size,
            dnt: this.dnt,
            _: +(new Date)
          };
          return b.compact(a), d.encode(a)
        },
        render: function () {
          if (!this.screenName) return;
          var a = twttr.widgets.config.assetUrl() + "/widgets/follow_button.1357323348.html#" + this.parameters();
          this.element = this.create(a, "twitter-follow-button", this.dimensions(), {
            title: this._("Twitter Follow Button")
          })
        },
        width: function () {
          if (this.calculatedWidth) return this.calculatedWidth;
          if (this.explicitWidth) return this.explicitWidth;
          var a = {
            cnt: 13,
            btn: 24,
            xlcnt: 22,
            xlbtn: 38
          }, c = this.showScreenName ? "Follow %{screen_name}" : "Follow",
            d = this._(c, {
              screen_name: "@" + this.screenName
            }),
            e = ~b.indexOf(["ja", "ko"], this.lang) ? this._("10k unit") : this._("M"),
            f = this._("%{followers_count} followers", {
              followers_count: "88888" + e
            }),
            h = 0,
            i = 0,
            j, k, l = this.styles.base;
          return this.size == "l" ? (l += this.styles.large, j = a.xlbtn, k = a.xlcnt) : (j = a.btn, k = a.cnt), this.showCount && (i = g(f, "", l).width + k), h = g(d, "", l + this.styles.button).width + j, this.calculatedWidth = h + i
        }
      }), a({
        Embeddable: h
      })
    })
  });
  ! function () {
    function a(a) {
      return (a || !/^http\:$/.test(window.location.protocol)) && !twttr.ignoreSSL ? "https" : "http"
    }
    window.twttr = window.twttr || {}, twttr.host = twttr.host || "platform.twitter.com";
    if (twttr.widgets && twttr.widgets.loaded) return twttr.widgets.load(), !1;
    if (twttr.init) return !1;
    twttr.init = !0, twttr._e = twttr._e || [], twttr.ready = twttr.ready || function (a) {
      twttr.widgets && twttr.widgets.loaded ? a(twttr) : twttr._e.push(a)
    }, using.path.length || (using.path = a() + "://" + twttr.host + "/js"), twttr.ignoreSSL = twttr.ignoreSSL || !1;
    var b = [];
    twttr.events = {
      bind: function (a, c) {
        return b.push([a, c])
      }
    }, using("util/domready", function (c) {
      c(function () {
        using("util/util", "tfw/widget/follow", "tfw/widget/tweetbutton", "tfw/widget/tweetembed", "tfw/widget/timeline", "tfw/widget/intent", "util/events", "tfw/widget/base", function (c, d, e, f, g, h, i, j) {
          function p(b) {
            var c = twttr.host;
            return a(b) == "https" && twttr.secureHost && (c = twttr.secureHost), a(b) + "://" + c
          }

          function q() {
            using("tfw/widget/hubclient", function (a) {
              twttr.events.hub = a.init(m), a.init(m, !0)
            })
          }
          var k, l, m = {
            widgets: {
              "a.twitter-share-button": e.Embeddable,
              "a.twitter-mention-button": e.Embeddable,
              "a.twitter-hashtag-button": e.Embeddable,
              "a.twitter-follow-button": d.Embeddable,
              "blockquote.twitter-tweet": f.Embeddable,
              "a.twitter-timeline": g.Embeddable,
              body: h.Listener
            }
          }, n = twttr.events && twttr.events.hub ? twttr.events : {}, o;
          m.assetUrl = p, c.aug(twttr.events, n, i.Emitter), o = twttr.events.bind, twttr.events.bind = function (a, b) {
            q(), this.bind = o, this.bind(a, b)
          };
          for (k = 0; l = b[k]; k++) twttr.events.bind(l[0], l[1]);
          for (k = 0; l = twttr._e[k]; k++) l(twttr);
          twttr.ready = function (a) {
            a(twttr)
          }, twttr.widgets = twttr.widgets || {}, c.aug(twttr.widgets, {
            config: {
              assetUrl: p
            },
            load: function (a) {
              j.init(m), j.embed(a), twttr.widgets.loaded = !0
            }
          }), /twitter\.com(\:\d+)?$/.test(document.location.host) && (twttr.widgets.createTimelinePreview = function (a, b, c) {
            (new g.Embeddable({
              previewParams: a,
              targetEl: b,
              linkColor: a.link_color,
              theme: a.theme,
              height: a.height
            })).render(m, c)
          }), twttr.widgets.load()
        })
      })
    })
  }()
});
