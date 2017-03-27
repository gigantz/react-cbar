"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;var a = n[r] = { i: r, l: !1, exports: {} };return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
  }var n = {};t.m = e, t.c = n, t.i = function (e) {
    return e;
  }, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(n, "a", n), n;
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, t.p = "", t(t.s = 3);
}([function (e, t) {
  e.exports = React;
}, function (e, t, n) {
  "use strict";
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
  }function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }function i(e) {
    var t = void 0;return t = "down" === e.icon ? c.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, c.default.createElement("path", { fill: "#c92663", d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })) : c.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, c.default.createElement("path", { fill: "#3b84ba", d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })), c.default.createElement("div", { className: "cbar-item" }, c.default.createElement("span", { className: "cbar-code" }, e.names ? e.name : e.code), c.default.createElement("span", { className: "cbar-value" }, e.value), c.default.createElement("span", { className: "cbar-arrow" }, t));
  }Object.defineProperty(t, "__esModule", { value: !0 });var l = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      u = n(0),
      c = function (e) {
    return e && e.__esModule ? e : { default: e };
  }(u),
      s = function (e) {
    function t(e) {
      r(this, t);var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
          o = n.props.val.split(",");return n.state = { curries: o, list: [] }, n.parseXML = n.parseXML.bind(n), n;
    }return o(t, e), l(t, [{ key: "parseXML", value: function value() {
        return new Promise(function (e, t) {
          var n = new XMLHttpRequest();n.open("GET", "https://www.cbar.az/other/azn-rates"), n.send(), n.addEventListener("load", function () {
            var t = document.createElement("div");t.innerHTML = n.responseText.replace(/<img/g, "<p"), e(t);
          }), n.addEventListener("error", function () {
            t("Linkdə problem var!");
          });
        });
      } }, { key: "componentWillMount", value: function value() {
        var e = this;this.parseXML().then(function (t) {
          var n = [];e.state.curries.forEach(function (e) {
            for (var r = e, a = t.querySelectorAll(".date"), o = 0; o < a.length; o++) {
              if (a[o].innerHTML.indexOf(e) > -1) {
                var i = a[o].querySelector(".icon p").getAttribute("src");i = i.match(/down.png/) ? "down" : "up", n.push({ code: r, name: a[o].querySelector(".left").innerText, icon: i, value: a[o].querySelector(".rate").innerText });
              }
            }
          }), e.setState({ list: n });
        });
      } }, { key: "render", value: function value() {
        var e = this,
            t = void 0;(this.state.list.length || this.state.list.length > 0) && (t = this.state.list.map(function (t, n) {
          return c.default.createElement(i, { names: e.props.names, key: n, code: t.code, name: t.name, value: t.value, icon: t.icon });
        }));var n = this.props.horizontal ? "horizontal" : "";return c.default.createElement("div", { className: "cbr-main " + n }, this.state.list ? t : "loading...");
      } }]), t;
  }(c.default.Component);t.default = s, s.propTypes = { val: u.PropTypes.string.isRequired };
}, function (e, t) {
  e.exports = ReactDOM;
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = n(0),
      o = r(a),
      i = n(2),
      l = n(1),
      u = r(l);(0, i.render)(o.default.createElement(u.default, { val: "USD,RUB,EUR,TRY,GBP", horizontal: !0 }), document.querySelector("#cbar"));
}]);
//# sourceMappingURL=react-cbar.js.map