if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
+function (t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), +function () {
    "use strict";

    function t(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function e(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, r = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }(), s = function (t) {
        function e(t) {
            return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
        }

        function n() {
            return {
                bindType: s.end, delegateType: s.end, handle: function (e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function i() {
            return ("undefined" == typeof window || !window.QUnit) && {end: "transitionend"}
        }

        function o(e) {
            var n = this, i = !1;
            return t(this).one(l.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || l.triggerTransitionEnd(n)
            }, e), this
        }

        function r() {
            s = i(), t.fn.emulateTransitionEnd = o, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = n())
        }

        var s = !1, a = 1e6, l = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do t += ~~(Math.random() * a); while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (e) {
                var n = e.getAttribute("data-target");
                n && "#" !== n || (n = e.getAttribute("href") || "");
                try {
                    var i = t(document).find(n);
                    return i.length > 0 ? n : null
                } catch (o) {
                    return null
                }
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger(s.end)
            }, supportsTransitionEnd: function () {
                return Boolean(s)
            }, isElement: function (t) {
                return (t[0] || t).nodeType
            }, typeCheckConfig: function (t, n, i) {
                for (var o in i) if (Object.prototype.hasOwnProperty.call(i, o)) {
                    var r = i[o], s = n[o], a = s && l.isElement(s) ? "element" : e(s);
                    if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ": " + ('Option "' + o + '" provided type "' + a + '" ') + ('but expected type "' + r + '".'))
                }
            }
        };
        return r(), l
    }($), a = (function (t) {
        var e = "alert", i = "4.0.0", o = "bs.alert", a = "." + o, l = ".data-api", h = t.fn[e], c = 150,
            u = {DISMISS: '[data-dismiss="alert"]'},
            f = {CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + l},
            d = {ALERT: "alert", FADE: "fade", SHOW: "show"}, _ = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.close = function (t) {
                    t = t || this._element;
                    var e = this._getRootElement(t), n = this._triggerCloseEvent(e);
                    n.isDefaultPrevented() || this._removeElement(e)
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, o), this._element = null
                }, e.prototype._getRootElement = function (e) {
                    var n = s.getSelectorFromElement(e), i = !1;
                    return n && (i = t(n)[0]), i || (i = t(e).closest("." + d.ALERT)[0]), i
                }, e.prototype._triggerCloseEvent = function (e) {
                    var n = t.Event(f.CLOSE);
                    return t(e).trigger(n), n
                }, e.prototype._removeElement = function (e) {
                    var n = this;
                    return t(e).removeClass(d.SHOW), s.supportsTransitionEnd() && t(e).hasClass(d.FADE) ? void t(e).one(s.TRANSITION_END, function (t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(c) : void this._destroyElement(e)
                }, e.prototype._destroyElement = function (e) {
                    t(e).detach().trigger(f.CLOSED).remove()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this), r = i.data(o);
                        r || (r = new e(this), i.data(o, r)), "close" === n && r[n](this)
                    })
                }, e._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(f.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _)), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
            return t.fn[e] = h, _._jQueryInterface
        }, _
    }($), function (t) {
        var e = "button", i = "4.0.0", o = "bs.button", s = "." + o, a = ".data-api", l = t.fn[e],
            h = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, c = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            }, u = {CLICK_DATA_API: "click" + s + a, FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a)},
            f = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.toggle = function () {
                    var e = !0, n = !0, i = t(this._element).closest(c.DATA_TOGGLE)[0];
                    if (i) {
                        var o = t(this._element).find(c.INPUT)[0];
                        if (o) {
                            if ("radio" === o.type) if (o.checked && t(this._element).hasClass(h.ACTIVE)) e = !1; else {
                                var r = t(i).find(c.ACTIVE)[0];
                                r && t(r).removeClass(h.ACTIVE)
                            }
                            if (e) {
                                if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                                o.checked = !t(this._element).hasClass(h.ACTIVE), t(o).trigger("change")
                            }
                            o.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE)
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, o), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this).data(o);
                        i || (i = new e(this), t(this).data(o, i)), "toggle" === n && i[n]()
                    })
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), f._jQueryInterface.call(t(n), "toggle")
        }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
            var n = t(e.target).closest(c.BUTTON)[0];
            t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type))
        }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
            return t.fn[e] = l, f._jQueryInterface
        }, f
    }($), function (t) {
        var e = "carousel", a = "4.0.0", l = "bs.carousel", h = "." + l, c = ".data-api", u = t.fn[e], f = 600, d = 37,
            _ = 39, p = 500, g = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, m = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, E = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, v = {
                SLIDE: "slide" + h,
                SLID: "slid" + h,
                KEYDOWN: "keydown" + h,
                MOUSEENTER: "mouseenter" + h,
                MOUSELEAVE: "mouseleave" + h,
                TOUCHEND: "touchend" + h,
                LOAD_DATA_API: "load" + h + c,
                CLICK_DATA_API: "click" + h + c
            }, T = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "carousel-item-right",
                LEFT: "carousel-item-left",
                NEXT: "carousel-item-next",
                PREV: "carousel-item-prev",
                ITEM: "carousel-item"
            }, y = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, I = function () {
                function c(e, i) {
                    n(this, c), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
                }

                return c.prototype.next = function () {
                    this._isSliding || this._slide(E.NEXT)
                }, c.prototype.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, c.prototype.prev = function () {
                    this._isSliding || this._slide(E.PREV)
                }, c.prototype.pause = function (e) {
                    e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && s.supportsTransitionEnd() && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, c.prototype.cycle = function (t) {
                    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, c.prototype.to = function (e) {
                    var n = this;
                    this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                    var i = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) {
                        if (this._isSliding) return void t(this._element).one(v.SLID, function () {
                            return n.to(e)
                        });
                        if (i === e) return this.pause(), void this.cycle();
                        var o = e > i ? E.NEXT : E.PREV;
                        this._slide(o, this._items[e])
                    }
                }, c.prototype.dispose = function () {
                    t(this._element).off(h), t.removeData(this._element, l), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, c.prototype._getConfig = function (t) {
                    return t = o({}, g, t), s.typeCheckConfig(e, t, m), t
                }, c.prototype._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on(v.KEYDOWN, function (t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && (t(this._element).on(v.MOUSEENTER, function (t) {
                        return e.pause(t)
                    }).on(v.MOUSELEAVE, function (t) {
                        return e.cycle(t)
                    }), "ontouchstart" in document.documentElement && t(this._element).on(v.TOUCHEND, function () {
                        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                            return e.cycle(t)
                        }, p + e._config.interval)
                    }))
                }, c.prototype._keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                        case d:
                            t.preventDefault(), this.prev();
                            break;
                        case _:
                            t.preventDefault(), this.next()
                    }
                }, c.prototype._getItemIndex = function (e) {
                    return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
                }, c.prototype._getItemByDirection = function (t, e) {
                    var n = t === E.NEXT, i = t === E.PREV, o = this._getItemIndex(e), r = this._items.length - 1,
                        s = i && 0 === o || n && o === r;
                    if (s && !this._config.wrap) return e;
                    var a = t === E.PREV ? -1 : 1, l = (o + a) % this._items.length;
                    return l === -1 ? this._items[this._items.length - 1] : this._items[l]
                }, c.prototype._triggerSlideEvent = function (e, n) {
                    var i = this._getItemIndex(e), o = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                        r = t.Event(v.SLIDE, {relatedTarget: e, direction: n, from: o, to: i});
                    return t(this._element).trigger(r), r
                }, c.prototype._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        t(this._indicatorsElement).find(y.ACTIVE).removeClass(T.ACTIVE);
                        var n = this._indicatorsElement.children[this._getItemIndex(e)];
                        n && t(n).addClass(T.ACTIVE)
                    }
                }, c.prototype._slide = function (e, n) {
                    var i = this, o = t(this._element).find(y.ACTIVE_ITEM)[0], r = this._getItemIndex(o),
                        a = n || o && this._getItemByDirection(e, o), l = this._getItemIndex(a),
                        h = Boolean(this._interval), c = void 0, u = void 0, d = void 0;
                    if (e === E.NEXT ? (c = T.LEFT, u = T.NEXT, d = E.LEFT) : (c = T.RIGHT, u = T.PREV, d = E.RIGHT), a && t(a).hasClass(T.ACTIVE)) return void(this._isSliding = !1);
                    var _ = this._triggerSlideEvent(a, d);
                    if (!_.isDefaultPrevented() && o && a) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(a);
                        var p = t.Event(v.SLID, {relatedTarget: a, direction: d, from: r, to: l});
                        s.supportsTransitionEnd() && t(this._element).hasClass(T.SLIDE) ? (t(a).addClass(u), s.reflow(a), t(o).addClass(c), t(a).addClass(c), t(o).one(s.TRANSITION_END, function () {
                            t(a).removeClass(c + " " + u).addClass(T.ACTIVE), t(o).removeClass(T.ACTIVE + " " + u + " " + c), i._isSliding = !1, setTimeout(function () {
                                return t(i._element).trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(f)) : (t(o).removeClass(T.ACTIVE), t(a).addClass(T.ACTIVE), this._isSliding = !1, t(this._element).trigger(p)), h && this.cycle()
                    }
                }, c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(l), r = o({}, g, t(this).data());
                        "object" === ("undefined" == typeof e ? "undefined" : i(e)) && (r = o({}, r, e));
                        var s = "string" == typeof e ? e : r.slide;
                        if (n || (n = new c(this, r), t(this).data(l, n)), "number" == typeof e) n.to(e); else if ("string" == typeof s) {
                            if ("undefined" == typeof n[s]) throw new TypeError('No method named "' + s + '"');
                            n[s]()
                        } else r.interval && (n.pause(), n.cycle())
                    })
                }, c._dataApiClickHandler = function (e) {
                    var n = s.getSelectorFromElement(this);
                    if (n) {
                        var i = t(n)[0];
                        if (i && t(i).hasClass(T.CAROUSEL)) {
                            var r = o({}, t(i).data(), t(this).data()), a = this.getAttribute("data-slide-to");
                            a && (r.interval = !1), c._jQueryInterface.call(t(i), r), a && t(i).data(l).to(a), e.preventDefault()
                        }
                    }
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return g
                    }
                }]), c
            }();
        return t(document).on(v.CLICK_DATA_API, y.DATA_SLIDE, I._dataApiClickHandler), t(window).on(v.LOAD_DATA_API, function () {
            t(y.DATA_RIDE).each(function () {
                var e = t(this);
                I._jQueryInterface.call(e, e.data())
            })
        }), t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
            return t.fn[e] = u, I._jQueryInterface
        }, I
    }($), function (t) {
        var e = "collapse", a = "4.0.0", l = "bs.collapse", h = "." + l, c = ".data-api", u = t.fn[e], f = 600,
            d = {toggle: !0, parent: ""}, _ = {toggle: "boolean", parent: "(string|element)"}, p = {
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                CLICK_DATA_API: "click" + h + c
            }, g = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
            m = {WIDTH: "width", HEIGHT: "height"},
            E = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, v = function () {
                function h(e, i) {
                    n(this, h), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                    for (var o = t(E.DATA_TOGGLE), r = 0; r < o.length; r++) {
                        var a = o[r], l = s.getSelectorFromElement(a);
                        null !== l && t(l).filter(e).length > 0 && (this._selector = l, this._triggerArray.push(a))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                return h.prototype.toggle = function () {
                    t(this._element).hasClass(g.SHOW) ? this.hide() : this.show()
                }, h.prototype.show = function () {
                    var e = this;
                    if (!this._isTransitioning && !t(this._element).hasClass(g.SHOW)) {
                        var n = void 0, i = void 0;
                        if (this._parent && (n = t.makeArray(t(this._parent).find(E.ACTIVES).filter('[data-parent="' + this._config.parent + '"]')), 0 === n.length && (n = null)), !(n && (i = t(n).not(this._selector).data(l), i && i._isTransitioning))) {
                            var o = t.Event(p.SHOW);
                            if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                                n && (h._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(l, null));
                                var r = this._getDimension();
                                t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[r] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var a = function () {
                                    t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[r] = "", e.setTransitioning(!1), t(e._element).trigger(p.SHOWN)
                                };
                                if (!s.supportsTransitionEnd()) return void a();
                                var c = r[0].toUpperCase() + r.slice(1), u = "scroll" + c;
                                t(this._element).one(s.TRANSITION_END, a).emulateTransitionEnd(f), this._element.style[r] = this._element[u] + "px"
                            }
                        }
                    }
                }, h.prototype.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass(g.SHOW)) {
                        var n = t.Event(p.HIDE);
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var i = this._getDimension();
                            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", s.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._triggerArray.length > 0) for (var o = 0; o < this._triggerArray.length; o++) {
                                var r = this._triggerArray[o], a = s.getSelectorFromElement(r);
                                if (null !== a) {
                                    var l = t(a);
                                    l.hasClass(g.SHOW) || t(r).addClass(g.COLLAPSED).attr("aria-expanded", !1)
                                }
                            }
                            this.setTransitioning(!0);
                            var h = function () {
                                e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(p.HIDDEN)
                            };
                            return this._element.style[i] = "", s.supportsTransitionEnd() ? void t(this._element).one(s.TRANSITION_END, h).emulateTransitionEnd(f) : void h()
                        }
                    }
                }, h.prototype.setTransitioning = function (t) {
                    this._isTransitioning = t
                }, h.prototype.dispose = function () {
                    t.removeData(this._element, l), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, h.prototype._getConfig = function (t) {
                    return t = o({}, d, t), t.toggle = Boolean(t.toggle), s.typeCheckConfig(e, t, _), t
                }, h.prototype._getDimension = function () {
                    var e = t(this._element).hasClass(m.WIDTH);
                    return e ? m.WIDTH : m.HEIGHT
                }, h.prototype._getParent = function () {
                    var e = this, n = null;
                    s.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return t(n).find(i).each(function (t, n) {
                        e._addAriaAndCollapsedClass(h._getTargetFromElement(n), [n])
                    }), n
                }, h.prototype._addAriaAndCollapsedClass = function (e, n) {
                    if (e) {
                        var i = t(e).hasClass(g.SHOW);
                        n.length > 0 && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i)
                    }
                }, h._getTargetFromElement = function (e) {
                    var n = s.getSelectorFromElement(e);
                    return n ? t(n)[0] : null
                }, h._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this), r = n.data(l),
                            s = o({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                        if (!r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || (r = new h(this, s), n.data(l, r)), "string" == typeof e) {
                            if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e]()
                        }
                    })
                }, r(h, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return d
                    }
                }]), h
            }();
        return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this), i = s.getSelectorFromElement(this);
            t(i).each(function () {
                var e = t(this), i = e.data(l), o = i ? "toggle" : n.data();
                v._jQueryInterface.call(e, o)
            })
        }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
            return t.fn[e] = u, v._jQueryInterface
        }, v
    }($), function (t) {
        var e = "dropdown", a = "4.0.0", l = "bs.dropdown", h = "." + l, c = ".data-api", u = t.fn[e], f = 27, d = 32,
            _ = 9, p = 38, g = 40, m = 3, E = new RegExp(p + "|" + g + "|" + f), v = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                CLICK: "click" + h,
                CLICK_DATA_API: "click" + h + c,
                KEYDOWN_DATA_API: "keydown" + h + c,
                KEYUP_DATA_API: "keyup" + h + c
            }, T = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            }, y = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
            }, I = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            }, C = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle"}, O = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)"
            }, A = function () {
                function c(t, e) {
                    n(this, c), this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                return c.prototype.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass(T.DISABLED)) {
                        var e = c._getParentFromElement(this._element), n = t(this._menu).hasClass(T.SHOW);
                        if (c._clearMenus(), !n) {
                            var i = {relatedTarget: this._element}, o = t.Event(v.SHOW, i);
                            if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof Popper) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var r = this._element;
                                    "parent" === this._config.reference ? r = e : s.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(T.POSITION_STATIC), this._popper = new Popper(r, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === t(e).closest(y.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(T.SHOW), t(e).toggleClass(T.SHOW).trigger(t.Event(v.SHOWN, i))
                            }
                        }
                    }
                }, c.prototype.dispose = function () {
                    t.removeData(this._element, l), t(this._element).off(h), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, c.prototype.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, c.prototype._addEventListeners = function () {
                    var e = this;
                    t(this._element).on(v.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, c.prototype._getConfig = function (n) {
                    return n = o({}, this.constructor.Default, t(this._element).data(), n), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                }, c.prototype._getMenuElement = function () {
                    if (!this._menu) {
                        var e = c._getParentFromElement(this._element);
                        this._menu = t(e).find(y.MENU)[0]
                    }
                    return this._menu
                }, c.prototype._getPlacement = function () {
                    var e = t(this._element).parent(), n = I.BOTTOM;
                    return e.hasClass(T.DROPUP) ? (n = I.TOP, t(this._menu).hasClass(T.MENURIGHT) && (n = I.TOPEND)) : e.hasClass(T.DROPRIGHT) ? n = I.RIGHT : e.hasClass(T.DROPLEFT) ? n = I.LEFT : t(this._menu).hasClass(T.MENURIGHT) && (n = I.BOTTOMEND), n
                }, c.prototype._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, c.prototype._getPopperConfig = function () {
                    var t = this, e = {};
                    "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}), e
                    } : e.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: e,
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return n
                }, c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(l), o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) ? e : null;
                        if (n || (n = new c(this, o), t(this).data(l, n)), "string" == typeof e) {
                            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, c._clearMenus = function (e) {
                    if (!e || e.which !== m && ("keyup" !== e.type || e.which === _)) for (var n = t.makeArray(t(y.DATA_TOGGLE)), i = 0; i < n.length; i++) {
                        var o = c._getParentFromElement(n[i]), r = t(n[i]).data(l), s = {relatedTarget: n[i]};
                        if (r) {
                            var a = r._menu;
                            if (t(o).hasClass(T.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && e.which === _) && t.contains(o, e.target))) {
                                var h = t.Event(v.HIDE, s);
                                t(o).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[i].setAttribute("aria-expanded", "false"), t(a).removeClass(T.SHOW), t(o).removeClass(T.SHOW).trigger(t.Event(v.HIDDEN, s)))
                            }
                        }
                    }
                }, c._getParentFromElement = function (e) {
                    var n = void 0, i = s.getSelectorFromElement(e);
                    return i && (n = t(i)[0]), n || e.parentNode
                }, c._dataApiKeydownHandler = function (e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(e.which === d || e.which !== f && (e.which !== g && e.which !== p || t(e.target).closest(y.MENU).length)) : E.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(T.DISABLED))) {
                        var n = c._getParentFromElement(this), i = t(n).hasClass(T.SHOW);
                        if (!i && (e.which !== f || e.which !== d) || i && (e.which === f || e.which === d)) {
                            if (e.which === f) {
                                var o = t(n).find(y.DATA_TOGGLE)[0];
                                t(o).trigger("focus")
                            }
                            return void t(this).trigger("click")
                        }
                        var r = t(n).find(y.VISIBLE_ITEMS).get();
                        if (0 !== r.length) {
                            var s = r.indexOf(e.target);
                            e.which === p && s > 0 && s--, e.which === g && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    }
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return C
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return O
                    }
                }]), c
            }();
        return t(document).on(v.KEYDOWN_DATA_API, y.DATA_TOGGLE, A._dataApiKeydownHandler).on(v.KEYDOWN_DATA_API, y.MENU, A._dataApiKeydownHandler).on(v.CLICK_DATA_API + " " + v.KEYUP_DATA_API, A._clearMenus).on(v.CLICK_DATA_API, y.DATA_TOGGLE, function (e) {
            e.preventDefault(), e.stopPropagation(), A._jQueryInterface.call(t(this), "toggle")
        }).on(v.CLICK_DATA_API, y.FORM_CHILD, function (t) {
            t.stopPropagation()
        }), t.fn[e] = A._jQueryInterface, t.fn[e].Constructor = A, t.fn[e].noConflict = function () {
            return t.fn[e] = u, A._jQueryInterface
        }, A
    }($, Popper), function (t) {
        var e = "modal", a = "4.0.0", l = "bs.modal", h = "." + l, c = ".data-api", u = t.fn[e], f = 300, d = 150,
            _ = 27, p = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            g = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, m = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                FOCUSIN: "focusin" + h,
                RESIZE: "resize" + h,
                CLICK_DISMISS: "click.dismiss" + h,
                KEYDOWN_DISMISS: "keydown.dismiss" + h,
                MOUSEUP_DISMISS: "mouseup.dismiss" + h,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
                CLICK_DATA_API: "click" + h + c
            }, E = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            }, v = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            }, T = function () {
                function c(e, i) {
                    n(this, c), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(v.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }

                return c.prototype.toggle = function (t) {
                    return this._isShown ? this.hide() : this.show(t)
                }, c.prototype.show = function (e) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                        s.supportsTransitionEnd() && t(this._element).hasClass(E.FADE) && (this._isTransitioning = !0);
                        var i = t.Event(m.SHOW, {relatedTarget: e});
                        t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(E.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(m.CLICK_DISMISS, v.DATA_DISMISS, function (t) {
                            return n.hide(t)
                        }), t(this._dialog).on(m.MOUSEDOWN_DISMISS, function () {
                            t(n._element).one(m.MOUSEUP_DISMISS, function (e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return n._showElement(e)
                        }))
                    }
                }, c.prototype.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                        var i = t.Event(m.HIDE);
                        if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var o = s.supportsTransitionEnd() && t(this._element).hasClass(E.FADE);
                            o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(m.FOCUSIN), t(this._element).removeClass(E.SHOW), t(this._element).off(m.CLICK_DISMISS), t(this._dialog).off(m.MOUSEDOWN_DISMISS), o ? t(this._element).one(s.TRANSITION_END, function (t) {
                                return n._hideModal(t)
                            }).emulateTransitionEnd(f) : this._hideModal()
                        }
                    }
                }, c.prototype.dispose = function () {
                    t.removeData(this._element, l), t(window, document, this._element, this._backdrop).off(h), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, c.prototype.handleUpdate = function () {
                    this._adjustDialog()
                }, c.prototype._getConfig = function (t) {
                    return t = o({}, p, t), s.typeCheckConfig(e, t, g), t
                }, c.prototype._showElement = function (e) {
                    var n = this, i = s.supportsTransitionEnd() && t(this._element).hasClass(E.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && s.reflow(this._element), t(this._element).addClass(E.SHOW), this._config.focus && this._enforceFocus();
                    var o = t.Event(m.SHOWN, {relatedTarget: e}), r = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                    };
                    i ? t(this._dialog).one(s.TRANSITION_END, r).emulateTransitionEnd(f) : r()
                }, c.prototype._enforceFocus = function () {
                    var e = this;
                    t(document).off(m.FOCUSIN).on(m.FOCUSIN, function (n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    })
                }, c.prototype._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(m.KEYDOWN_DISMISS, function (t) {
                        t.which === _ && (t.preventDefault(), e.hide())
                    }) : this._isShown || t(this._element).off(m.KEYDOWN_DISMISS)
                }, c.prototype._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on(m.RESIZE, function (t) {
                        return e.handleUpdate(t)
                    }) : t(window).off(m.RESIZE)
                }, c.prototype._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                        t(document.body).removeClass(E.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(m.HIDDEN)
                    })
                }, c.prototype._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, c.prototype._showBackdrop = function (e) {
                    var n = this, i = t(this._element).hasClass(E.FADE) ? E.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var o = s.supportsTransitionEnd() && i;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = E.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(m.CLICK_DISMISS, function (t) {
                            return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                        }), o && s.reflow(this._backdrop), t(this._backdrop).addClass(E.SHOW), !e) return;
                        if (!o) return void e();
                        t(this._backdrop).one(s.TRANSITION_END, e).emulateTransitionEnd(d)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(E.SHOW);
                        var r = function () {
                            n._removeBackdrop(), e && e()
                        };
                        s.supportsTransitionEnd() && t(this._element).hasClass(E.FADE) ? t(this._backdrop).one(s.TRANSITION_END, r).emulateTransitionEnd(d) : r()
                    } else e && e()
                }, c.prototype._adjustDialog = function () {
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, c.prototype._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, c.prototype._checkScrollbar = function () {
                    var t = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, c.prototype._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        t(v.FIXED_CONTENT).each(function (n, i) {
                            var o = t(i)[0].style.paddingRight, r = t(i).css("padding-right");
                            t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                        }), t(v.STICKY_CONTENT).each(function (n, i) {
                            var o = t(i)[0].style.marginRight, r = t(i).css("margin-right");
                            t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                        }), t(v.NAVBAR_TOGGLER).each(function (n, i) {
                            var o = t(i)[0].style.marginRight, r = t(i).css("margin-right");
                            t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight, i = t("body").css("padding-right");
                        t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                }, c.prototype._resetScrollbar = function () {
                    t(v.FIXED_CONTENT).each(function (e, n) {
                        var i = t(n).data("padding-right");
                        "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                    }), t(v.STICKY_CONTENT + ", " + v.NAVBAR_TOGGLER).each(function (e, n) {
                        var i = t(n).data("margin-right");
                        "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                    });
                    var e = t("body").data("padding-right");
                    "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
                }, c.prototype._getScrollbarWidth = function () {
                    var t = document.createElement("div");
                    t.className = E.SCROLLBAR_MEASURER, document.body.appendChild(t);
                    var e = t.getBoundingClientRect().width - t.clientWidth;
                    return document.body.removeChild(t), e
                }, c._jQueryInterface = function (e, n) {
                    return this.each(function () {
                        var r = t(this).data(l),
                            s = o({}, c.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);
                        if (r || (r = new c(this, s), t(this).data(l, r)), "string" == typeof e) {
                            if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                            r[e](n)
                        } else s.show && r.show(n)
                    })
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return p
                    }
                }]), c
            }();
        return t(document).on(m.CLICK_DATA_API, v.DATA_TOGGLE, function (e) {
            var n = this, i = void 0, r = s.getSelectorFromElement(this);
            r && (i = t(r)[0]);
            var a = t(i).data(l) ? "toggle" : o({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var h = t(i).one(m.SHOW, function (e) {
                e.isDefaultPrevented() || h.one(m.HIDDEN, function () {
                    t(n).is(":visible") && n.focus()
                })
            });
            T._jQueryInterface.call(t(i), a, this)
        }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
            return t.fn[e] = u, T._jQueryInterface
        }, T
    }($), function (t) {
        var e = "tooltip", a = "4.0.0", l = "bs.tooltip", h = "." + l, c = t.fn[e], u = 150, f = "bs-tooltip",
            d = new RegExp("(^|\\s)" + f + "\\S+", "g"), _ = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }, p = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, g = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, m = {SHOW: "show", OUT: "out"}, E = {
                HIDE: "hide" + h,
                HIDDEN: "hidden" + h,
                SHOW: "show" + h,
                SHOWN: "shown" + h,
                INSERTED: "inserted" + h,
                CLICK: "click" + h,
                FOCUSIN: "focusin" + h,
                FOCUSOUT: "focusout" + h,
                MOUSEENTER: "mouseenter" + h,
                MOUSELEAVE: "mouseleave" + h
            }, v = {FADE: "fade", SHOW: "show"},
            T = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"},
            y = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, I = function () {
                function c(t, e) {
                    if (n(this, c), "undefined" == typeof Popper) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                }

                return c.prototype.enable = function () {
                    this._isEnabled = !0
                }, c.prototype.disable = function () {
                    this._isEnabled = !1
                }, c.prototype.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, c.prototype.toggle = function (e) {
                    if (this._isEnabled) if (e) {
                        var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(v.SHOW)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, c.prototype.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, c.prototype.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(n);
                        var i = t.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !i) return;
                        var o = this.getTipElement(), r = s.getUID(this.constructor.NAME);
                        o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && t(o).addClass(v.FADE);
                        var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                            l = this._getAttachment(a);
                        this.addAttachmentClass(l);
                        var h = this.config.container === !1 ? document.body : t(this.config.container);
                        t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(h), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Popper(this.element, o, {
                            placement: l,
                            modifiers: {
                                offset: {offset: this.config.offset},
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: T.ARROW},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                            },
                            onUpdate: function (t) {
                                e._handlePopperPlacementChange(t)
                            }
                        }), t(o).addClass(v.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                        var u = function () {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === m.OUT && e._leave(null, e)
                        };
                        s.supportsTransitionEnd() && t(this.tip).hasClass(v.FADE) ? t(this.tip).one(s.TRANSITION_END, u).emulateTransitionEnd(c._TRANSITION_DURATION) : u()
                    }
                }, c.prototype.hide = function (e) {
                    var n = this, i = this.getTipElement(), o = t.Event(this.constructor.Event.HIDE), r = function () {
                        n._hoverState !== m.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                    t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(v.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y.CLICK] = !1, this._activeTrigger[y.FOCUS] = !1, this._activeTrigger[y.HOVER] = !1, s.supportsTransitionEnd() && t(this.tip).hasClass(v.FADE) ? t(i).one(s.TRANSITION_END, r).emulateTransitionEnd(u) : r(), this._hoverState = "")
                }, c.prototype.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, c.prototype.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, c.prototype.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass(f + "-" + e)
                }, c.prototype.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, c.prototype.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(T.TOOLTIP_INNER), this.getTitle()), e.removeClass(v.FADE + " " + v.SHOW)
                }, c.prototype.setElementContent = function (e, n) {
                    var o = this.config.html;
                    "object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n)
                }, c.prototype.getTitle = function () {
                    var t = this.element.getAttribute("data-original-title");
                    return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                }, c.prototype._getAttachment = function (t) {
                    return p[t.toUpperCase()]
                }, c.prototype._setListeners = function () {
                    var e = this, n = this.config.trigger.split(" ");
                    n.forEach(function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                            return e.toggle(t)
                        }); else if (n !== y.MANUAL) {
                            var i = n === y.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                o = n === y.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(i, e.config.selector, function (t) {
                                return e._enter(t)
                            }).on(o, e.config.selector, function (t) {
                                return e._leave(t)
                            })
                        }
                        t(e.element).closest(".modal").on("hide.bs.modal", function () {
                            return e.hide()
                        })
                    }), this.config.selector ? this.config = o({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, c.prototype._fixTitle = function () {
                    var t = i(this.element.getAttribute("data-original-title"));
                    (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, c.prototype._enter = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? y.FOCUS : y.HOVER] = !0), t(n.getTipElement()).hasClass(v.SHOW) || n._hoverState === m.SHOW ? void(n._hoverState = m.SHOW) : (clearTimeout(n._timeout), n._hoverState = m.SHOW, n.config.delay && n.config.delay.show ? void(n._timeout = setTimeout(function () {
                        n._hoverState === m.SHOW && n.show()
                    }, n.config.delay.show)) : void n.show())
                }, c.prototype._leave = function (e, n) {
                    var i = this.constructor.DATA_KEY;
                    if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? y.FOCUS : y.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = m.OUT, n.config.delay && n.config.delay.hide ? void(n._timeout = setTimeout(function () {
                        n._hoverState === m.OUT && n.hide()
                    }, n.config.delay.hide)) : void n.hide()
                }, c.prototype._isWithActiveTrigger = function () {
                    for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                    return !1
                }, c.prototype._getConfig = function (n) {
                    return n = o({}, this.constructor.Default, t(this.element).data(), n), "number" == typeof n.delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), s.typeCheckConfig(e, n, this.constructor.DefaultType), n
                }, c.prototype._getDelegateConfig = function () {
                    var t = {};
                    if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                    return t
                }, c.prototype._cleanTipClass = function () {
                    var e = t(this.getTipElement()), n = e.attr("class").match(d);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, c.prototype._handlePopperPlacementChange = function (t) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                }, c.prototype._fixTransition = function () {
                    var e = this.getTipElement(), n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass(v.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(l), o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new c(this, o), t(this).data(l, n)), "string" == typeof e)) {
                            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return g
                    }
                }, {
                    key: "NAME", get: function () {
                        return e
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return l
                    }
                }, {
                    key: "Event", get: function () {
                        return E
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return h
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return _
                    }
                }]), c
            }();
        return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
            return t.fn[e] = c, I._jQueryInterface
        }, I
    }($, Popper));
    (function (s) {
        var l = "popover", h = "4.0.0", c = "bs.popover", u = "." + c, f = s.fn[l], d = "bs-popover",
            _ = new RegExp("(^|\\s)" + d + "\\S+", "g"), p = o({}, a.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), g = o({}, a.DefaultType, {content: "(string|element|function)"}), m = {FADE: "fade", SHOW: "show"},
            E = {TITLE: ".popover-header", CONTENT: ".popover-body"}, v = {
                HIDE: "hide" + u,
                HIDDEN: "hidden" + u,
                SHOW: "show" + u,
                SHOWN: "shown" + u,
                INSERTED: "inserted" + u,
                CLICK: "click" + u,
                FOCUSIN: "focusin" + u,
                FOCUSOUT: "focusout" + u,
                MOUSEENTER: "mouseenter" + u,
                MOUSELEAVE: "mouseleave" + u
            }, T = function (o) {
                function a() {
                    return n(this, a), t(this, o.apply(this, arguments))
                }

                return e(a, o), a.prototype.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, a.prototype.addAttachmentClass = function (t) {
                    s(this.getTipElement()).addClass(d + "-" + t)
                }, a.prototype.getTipElement = function () {
                    return this.tip = this.tip || s(this.config.template)[0], this.tip
                }, a.prototype.setContent = function () {
                    var t = s(this.getTipElement());
                    this.setElementContent(t.find(E.TITLE), this.getTitle());
                    var e = this._getContent();
                    "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(E.CONTENT), e), t.removeClass(m.FADE + " " + m.SHOW)
                }, a.prototype._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, a.prototype._cleanTipClass = function () {
                    var t = s(this.getTipElement()), e = t.attr("class").match(_);
                    null !== e && e.length > 0 && t.removeClass(e.join(""))
                }, a._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = s(this).data(c), n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;
                        if ((e || !/destroy|hide/.test(t)) && (e || (e = new a(this, n), s(this).data(c, e)), "string" == typeof t)) {
                            if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, r(a, null, [{
                    key: "VERSION", get: function () {
                        return h
                    }
                }, {
                    key: "Default", get: function () {
                        return p
                    }
                }, {
                    key: "NAME", get: function () {
                        return l
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return c
                    }
                }, {
                    key: "Event", get: function () {
                        return v
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return u
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return g
                    }
                }]), a
            }(a);
        return s.fn[l] = T._jQueryInterface, s.fn[l].Constructor = T, s.fn[l].noConflict = function () {
            return s.fn[l] = f, T._jQueryInterface
        }, T
    })($), function (t) {
        var e = "scrollspy", a = "4.0.0", l = "bs.scrollspy", h = "." + l, c = ".data-api", u = t.fn[e],
            f = {offset: 10, method: "auto", target: ""},
            d = {offset: "number", method: "string", target: "(string|element)"},
            _ = {ACTIVATE: "activate" + h, SCROLL: "scroll" + h, LOAD_DATA_API: "load" + h + c},
            p = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, g = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, m = {OFFSET: "offset", POSITION: "position"}, E = function () {
                function c(e, i) {
                    var o = this;
                    n(this, c), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.LIST_ITEMS + ",") + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(_.SCROLL, function (t) {
                        return o._process(t)
                    }), this.refresh(), this._process()
                }

                return c.prototype.refresh = function () {
                    var e = this, n = this._scrollElement === this._scrollElement.window ? m.OFFSET : m.POSITION,
                        i = "auto" === this._config.method ? n : this._config.method,
                        o = i === m.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var r = t.makeArray(t(this._selector));
                    r.map(function (e) {
                        var n = void 0, r = s.getSelectorFromElement(e);
                        if (r && (n = t(r)[0]), n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height) return [t(n)[i]().top + o, r]
                        }
                        return null
                    }).filter(function (t) {
                        return t
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).forEach(function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, c.prototype.dispose = function () {
                    t.removeData(this._element, l), t(this._scrollElement).off(h), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, c.prototype._getConfig = function (n) {
                    if (n = o({}, f, n), "string" != typeof n.target) {
                        var i = t(n.target).attr("id");
                        i || (i = s.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                    }
                    return s.typeCheckConfig(e, n, d), n
                }, c.prototype._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, c.prototype._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, c.prototype._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, c.prototype._process = function () {
                    var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                        n = this._config.offset + e - this._getOffsetHeight();
                    if (this._scrollHeight !== e && this.refresh(), t >= n) {
                        var i = this._targets[this._targets.length - 1];
                        return void(this._activeTarget !== i && this._activate(i))
                    }
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]);
                        r && this._activate(this._targets[o])
                    }
                }, c.prototype._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function (t) {
                        return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]')
                    });
                    var i = t(n.join(","));
                    i.hasClass(p.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(p.ACTIVE), i.addClass(p.ACTIVE)) : (i.addClass(p.ACTIVE), i.parents(g.NAV_LIST_GROUP).prev(g.NAV_LINKS + ", " + g.LIST_ITEMS).addClass(p.ACTIVE), i.parents(g.NAV_LIST_GROUP).prev(g.NAV_ITEMS).children(g.NAV_LINKS).addClass(p.ACTIVE)), t(this._scrollElement).trigger(_.ACTIVATE, {relatedTarget: e})
                }, c.prototype._clear = function () {
                    t(this._selector).filter(g.ACTIVE).removeClass(p.ACTIVE)
                }, c._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data(l), o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
                        if (n || (n = new c(this, o), t(this).data(l, n)), "string" == typeof e) {
                            if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, r(c, null, [{
                    key: "VERSION", get: function () {
                        return a
                    }
                }, {
                    key: "Default", get: function () {
                        return f
                    }
                }]), c
            }();
        return t(window).on(_.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);
                E._jQueryInterface.call(i, i.data())
            }
        }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
            return t.fn[e] = u, E._jQueryInterface
        }, E
    }($), function (t) {
        var e = "tab", i = "4.0.0", o = "bs.tab", a = "." + o, l = ".data-api", h = t.fn[e], c = 150, u = {
                HIDE: "hide" + a,
                HIDDEN: "hidden" + a,
                SHOW: "show" + a,
                SHOWN: "shown" + a,
                CLICK_DATA_API: "click" + a + l
            }, f = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"},
            d = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            }, _ = function () {
                function e(t) {
                    n(this, e), this._element = t
                }

                return e.prototype.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(f.ACTIVE) || t(this._element).hasClass(f.DISABLED))) {
                        var n = void 0, i = void 0, o = t(this._element).closest(d.NAV_LIST_GROUP)[0],
                            r = s.getSelectorFromElement(this._element);
                        if (o) {
                            var a = "UL" === o.nodeName ? d.ACTIVE_UL : d.ACTIVE;
                            i = t.makeArray(t(o).find(a)), i = i[i.length - 1]
                        }
                        var l = t.Event(u.HIDE, {relatedTarget: this._element}), h = t.Event(u.SHOW, {relatedTarget: i});
                        if (i && t(i).trigger(l), t(this._element).trigger(h), !h.isDefaultPrevented() && !l.isDefaultPrevented()) {
                            r && (n = t(r)[0]), this._activate(this._element, o);
                            var c = function () {
                                var n = t.Event(u.HIDDEN, {relatedTarget: e._element}),
                                    o = t.Event(u.SHOWN, {relatedTarget: i});
                                t(i).trigger(n), t(e._element).trigger(o)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, e.prototype.dispose = function () {
                    t.removeData(this._element, o), this._element = null
                }, e.prototype._activate = function (e, n, i) {
                    var o = this, r = void 0;
                    r = "UL" === n.nodeName ? t(n).find(d.ACTIVE_UL) : t(n).children(d.ACTIVE);
                    var a = r[0], l = i && s.supportsTransitionEnd() && a && t(a).hasClass(f.FADE), h = function () {
                        return o._transitionComplete(e, a, i)
                    };
                    a && l ? t(a).one(s.TRANSITION_END, h).emulateTransitionEnd(c) : h()
                }, e.prototype._transitionComplete = function (e, n, i) {
                    if (n) {
                        t(n).removeClass(f.SHOW + " " + f.ACTIVE);
                        var o = t(n.parentNode).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                        o && t(o).removeClass(f.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass(f.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), s.reflow(e), t(e).addClass(f.SHOW), e.parentNode && t(e.parentNode).hasClass(f.DROPDOWN_MENU)) {
                        var r = t(e).closest(d.DROPDOWN)[0];
                        r && t(r).find(d.DROPDOWN_TOGGLE).addClass(f.ACTIVE), e.setAttribute("aria-expanded", !0)
                    }
                    i && i()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var i = t(this), r = i.data(o);
                        if (r || (r = new e(this), i.data(o, r)), "string" == typeof n) {
                            if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, r(e, null, [{
                    key: "VERSION", get: function () {
                        return i
                    }
                }]), e
            }();
        return t(document).on(u.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
            e.preventDefault(), _._jQueryInterface.call(t(this), "show")
        }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
            return t.fn[e] = h, _._jQueryInterface
        }, _
    }($) + function (t) {
        function e(e) {
            return this.each(function () {
                var o = t(this), r = o.data("bs.affix"),
                    s = "object" == ("undefined" == typeof e ? "undefined" : i(e)) && e;
                r || o.data("bs.affix", r = new n(this, s)), "string" == typeof e && r[e]()
            })
        }

        var n = function r(e, n) {
            this.options = t.extend({}, r.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
            offset: 0,
            target: window
        }, n.prototype.getState = function (t, e, n, i) {
            var o = this.$target.scrollTop(), r = this.$element.offset(), s = this.$target.height();
            if (null != n && "top" == this.affixed) return o < n && "top";
            if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
            var a = null == this.affixed, l = a ? o : r.top, h = a ? s : e;
            return null != n && o <= n ? "top" : null != i && l + h >= t - i && "bottom"
        }, n.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(n.RESET).addClass("affix");
            var t = this.$target.scrollTop(), e = this.$element.offset();
            return this.pinnedOffset = e.top - t
        }, n.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, n.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(), o = this.options.offset, r = o.top, s = o.bottom,
                    a = Math.max(t(document).height(), t(document.body).height());
                "object" != ("undefined" == typeof o ? "undefined" : i(o)) && (s = r = o), "function" == typeof r && (r = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
                var l = this.getState(a, e, r, s);
                if (this.affixed != l) {
                    null != this.unpin && this.$element.css("top", "");
                    var h = "affix" + (l ? "-" + l : ""), c = t.Event(h + ".bs.affix");
                    if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                    this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == l && this.$element.offset({top: a - e - s})
            }
        };
        var o = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
            return t.fn.affix = o, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var n = t(this), i = n.data();
                i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
            })
        })
    }(jQuery), function (t) {
        var e = "imageGrid", o = "bs.image-grid", r = '[data-grid="images"]', s = "." + o, a = t.fn[e],
            l = {padding: 10, targetHeight: 300, display: "inline-block"}, h = {RESIZE: "resize" + s}, c = function () {
                function e(i, o) {
                    n(this, e), this._cleanWhitespace(i), this._row = 0, this._rownum = 1, this._elements = [], this._element = i, this._albumWidth = t(i).width(), this._images = t(i).children(), this._config = t.extend({}, l, o), t(window).on(h.RESIZE, t.proxy(this._handleResize, this)), this._processImages()
                }

                return e.prototype.dispose = function () {
                    t(window).off(s), t.removeData(this._element, o), this._row = null, this._rownum = null, this._elements = null, this._element = null, this._albumWidth = null, this._images = null, this._config = null
                }, e.prototype._handleResize = function () {
                    this._row = 0, this._rownum = 1, this._elements = [], this._albumWidth = t(this._element).width(), this._images = t(this._element).children(), this._processImages()
                }, e.prototype._processImages = function () {
                    var e = this;
                    this._images.each(function (n) {
                        var i = t(this), o = i.is("img") ? i : i.find("img"),
                            r = "undefined" != typeof o.data("width") ? o.data("width") : o.width(),
                            s = "undefined" != typeof o.data("height") ? o.data("height") : o.height();
                        o.data("width", r), o.data("height", s);
                        var a = Math.ceil(r / s * e._config.targetHeight), l = Math.ceil(e._config.targetHeight);
                        e._elements.push([this, a, l]), e._row += a + e._config.padding, e._row > e._albumWidth && e._elements.length && (e._resizeRow(e._row - e._config.padding), e._row = 0, e._elements = [], e._rownum += 1), e._images.length - 1 == n && e._elements.length && (e._resizeRow(e._row), e._row = 0, e._elements = [], e._rownum += 1)
                    })
                }, e.prototype._resizeRow = function (e) {
                    for (var n = this._config.padding * (this._elements.length - 1), i = this._albumWidth - n, o = i / (e - n), r = n, s = (e < this._albumWidth, 0); s < this._elements.length; s++) {
                        var a = t(this._elements[s][0]), l = Math.floor(this._elements[s][1] * o),
                            h = Math.floor(this._elements[s][2] * o), c = s < this._elements.length - 1;
                        r += l, !c && r < this._albumWidth && (l += this._albumWidth - r), l--;
                        var u = a.is("img") ? a : a.find("img");
                        u.width(l), u.height(h), this._applyModifications(a, c)
                    }
                }, e.prototype._applyModifications = function (t, e) {
                    var n = {
                        "margin-bottom": this._config.padding + "px",
                        "margin-right": e ? this._config.padding + "px" : 0,
                        display: this._config.display,
                        "vertical-align": "bottom"
                    };
                    t.css(n)
                }, e.prototype._cleanWhitespace = function (e) {
                    t(e).contents().filter(function () {
                        return 3 == this.nodeType && !/\S/.test(this.nodeValue)
                    }).remove()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var n = t(this), r = n.data(o),
                            s = t.extend({}, l, n.data(), "object" === ("undefined" == typeof s ? "undefined" : i(s)) && s);
                        r || n.data(o, r = new e(this, s)), "string" == typeof s && r[s].call(n)
                    })
                }, e
            }();
        return t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
            return t.fn[e] = a, Enter._jQueryInterface
        }, t(function () {
            t(r).imageGrid()
        }), c
    }(jQuery), function (t) {
        var e = "zoom", i = "bs.zoom", o = "v4.0.0", a = '[data-action="zoom"]', l = "." + i, h = (t.fn[e], 80), c = {
            CLICK: "click" + l,
            SCROLL: "scroll" + l,
            KEYUP: "keyup" + l,
            TOUCHSTART: "touchstart" + l,
            TOUCHMOVE: "touchmove" + l
        }, u = {
            ZOOM_OVERLAY_OPEN: "zoom-overlay-open",
            ZOOM_OVERLAY_TRANSITIONING: "zoom-overlay-transitioning",
            ZOOM_OVERLAY: "zoom-overlay",
            ZOOM_IMG_WRAP: "zoom-img-wrap",
            ZOOM_IMG: "zoom-img"
        }, f = {ZOOM: "zoom", ZOOM_OUT: "zoom-out"}, d = function () {
            function e(i, o) {
                n(this, e), this._activeZoom = null, this._initialScrollPosition = null, this._initialTouchPosition = null, this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this)
            }

            return e.prototype._zoom = function (e) {
                var n = e.target;
                if (n && "IMG" === n.tagName && !this._$body.hasClass(u.ZOOM_OVERLAY_OPEN)) return e.metaKey || e.ctrlKey ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank") : void(n.width >= t(window).width() - h || (this._activeZoomClose(!0), this._activeZoom = new _(n), this._activeZoom.zoomImage(), this._$window.on(c.SCROLL, t.proxy(this._scrollHandler, this)), this._$document.on(c.KEYUP, t.proxy(this._keyHandler, this)), this._$document.on(c.TOUCHSTART, t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0))
            }, e.prototype._activeZoomClose = function (t) {
                this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(l), this._$document.off(l), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
            }, e.prototype._scrollHandler = function (e) {
                null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop());
                var n = this._initialScrollPosition - t(window).scrollTop();
                Math.abs(n) >= 40 && this._activeZoomClose()
            }, e.prototype._keyHandler = function (t) {
                27 === t.keyCode && this._activeZoomClose()
            }, e.prototype._clickHandler = function (t) {
                t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose()
            }, e.prototype._touchStart = function (e) {
                this._initialTouchPosition = e.touches[0].pageY, t(e.target).on(c.TOUCHMOVE, t.proxy(this._touchMove, this))
            }, e.prototype._touchMove = function (e) {
                Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(e.target).off(c.TOUCHMOVE))
            }, e.prototype.listen = function () {
                this._$body.on(c.CLICK, a, t.proxy(this._zoom, this))
            }, r(e, null, [{
                key: "VERSION", get: function () {
                    return o
                }
            }, {
                key: "Default", get: function () {
                    return Default
                }
            }]), e
        }(), _ = function () {
            function e(i) {
                n(this, e), this._fullHeight = null, this._fullWidth = null, this._overlay = null, this._targetImageWrap = null, this._targetImage = i, this._$body = t(document.body)
            }

            return e.prototype.zoomImage = function () {
                var e = document.createElement("img");
                e.onload = t.proxy(function () {
                    this._fullHeight = Number(e.height), this._fullWidth = Number(e.width), this._zoomOriginal()
                }, this), e.src = this._targetImage.src
            }, e.prototype._zoomOriginal = function () {
                this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = u.ZOOM_IMG_WRAP, this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass(u.ZOOM_IMG).attr("data-action", f.ZOOM_OUT), this._overlay = document.createElement("div"), this._overlay.className = u.ZOOM_OVERLAY, document.body.appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation()
            }, e.prototype._calculateZoom = function () {
                this._targetImage.offsetWidth;
                var e = this._fullWidth, n = this._fullHeight, i = (t(window).scrollTop(), e / this._targetImage.width),
                    o = t(window).height() - h, r = t(window).width() - h, s = e / n, a = r / o;
                e < r && n < o ? this._imgScaleFactor = i : s < a ? this._imgScaleFactor = o / n * i : this._imgScaleFactor = r / e * i
            }, e.prototype._triggerAnimation = function () {
                this._targetImage.offsetWidth;
                var e = t(this._targetImage).offset(), n = t(window).scrollTop(), i = n + t(window).height() / 2,
                    o = t(window).width() / 2, r = e.top + this._targetImage.height / 2,
                    a = e.left + this._targetImage.width / 2;
                this._translateY = i - r, this._translateX = o - a;
                var l = "scale(" + this._imgScaleFactor + ")",
                    h = "translate(" + this._translateX + "px, " + this._translateY + "px)";
                s.supportsTransitionEnd() || (h += " translateZ(0)"), t(this._targetImage).css({
                    "-webkit-transform": l,
                    "-ms-transform": l,
                    transform: l
                }), t(this._targetImageWrap).css({
                    "-webkit-transform": h,
                    "-ms-transform": h,
                    transform: h
                }), this._$body.addClass(u.ZOOM_OVERLAY_OPEN)
            }, e.prototype.close = function () {
                return this._$body.removeClass(u.ZOOM_OVERLAY_OPEN).addClass(u.ZOOM_OVERLAY_TRANSITIONING), t(this._targetImage).css({
                    "-webkit-transform": "",
                    "-ms-transform": "",
                    transform: ""
                }), t(this._targetImageWrap).css({
                    "-webkit-transform": "",
                    "-ms-transform": "",
                    transform: ""
                }), s.supportsTransitionEnd() ? void t(this._targetImage).one(s.TRANSITION_END, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose()
            }, e.prototype.dispose = function () {
                this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass(u.ZOOM_IMG).attr("data-action", f.ZOOM), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass(u.ZOOM_OVERLAY_TRANSITIONING))
            }, e
        }();
        t(function () {
            (new d).listen()
        })
    }(jQuery)
}();