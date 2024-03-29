!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).nuevo = t(e.videojs)
}(this, function (e) {
    if ((e = e && e.hasOwnProperty("default") ? e.default : e).browser.IS_ANDROID) {
        try {
            e.options.html5.vhs.overrideNative = !0
        } catch (e) { }
        try {
            e.options.html5.hls.overrideNative = !0
        } catch (e) { }
        e.options.html5.nativeAudioTracks = !1,
            e.options.html5.nativeTextTracks = !1
    }
    function t(t) {
        var s = "progressControl"
            , i = "playToggle"
            , n = "liveDisplay"
            , a = "seekToLive"
            , o = "currentTimeDisplay"
            , r = "timeDivider"
            , l = "durationDisplay"
            , d = "customControlSpacer"
            , v = "volumePanel"
            , c = "chaptersButton"
            , u = "descriptionsButton"
            , f = "subsCapsButton"
            , h = "audioTrackButton"
            , p = "pictureInPictureToggle"
            , m = "fullscreenToggle";
        "treso" == t ? e.options.controlBar = {
            children: [s, i, n, a, o, l, v, d, c, u, f, h, p, m]
        } : "chrome" == t ? e.options.controlBar = {
            children: [i, n, a, o, r, l, d, s, v, c, u, f, h, p, m]
        } : "party" == t ? e.options.controlBar = {
            children: [i, n, a, s, o, r, l, d, v, c, u, f, h, p, m]
        } : "roundal" == t || "pinko" == t ? e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: [i, n, a, o, s, r, l, d, v, c, u, f, h, p, m]
        } : "shaka" == t ? e.options.controlBar = {
            children: [i, n, a, o, r, l, s, d, v, c, u, f, h, p, m]
        } : "flow" == t ? e.options.controlBar = {
            children: [i, n, a, o, s, l, d, c, u, f, h, p, v, m]
        } : "jwlike" == t ? e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: [s, i, n, a, v, o, r, l, d, c, u, f, h, p, m]
        } : "nuevo" == t && (e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: [i, n, a, o, r, s, l, d, v, c, u, f, h, p, m]
        })
    }
    function s() {
        return e.browser.TOUCH_ENABLED
    }
    e.options.html5.hlsjsConfig = {
        capLevelToPlayerSize: !0
    },
        e.enableSourceset = !0;
    var i = function (e, t) {
        return e.sort(function (e, s) {
            var i = e[t]
                , n = s[t];
            return i < n ? -1 : i > n ? 1 : 0
        })
    }
        , n = function (e, t) {
            try {
                return e.querySelector(t)
            } catch (e) {
                return !1
            }
        }
        , a = function (e, t) {
            try {
                return e.querySelectorAll(t)
            } catch (e) {
                return !1
            }
        }
        , o = function (e, t, s) {
            var i = document.createElement(e);
            return void 0 !== t && "" !== t && (i.className = t),
                void 0 !== s && "" !== s && (i.innerHTML = s),
                i
        };
    if ("undefined" != typeof nuevoskin)
        e.options.skin = nuevoskin,
            t(nuevoskin);
    else
        try {
            var r = o("div")
                , l = document.body;
            l.appendChild(r);
            var d = ["nuevo", "chrome", "party", "treso", "roundal", "pinko", "jwlike", "shaka", "flow"];
            for (var v in d)
                r.className = "vjs-" + d[v],
                    13 == r.offsetWidth && (e.options.skin = d[v],
                        t(d[v]));
            l.removeChild(r)
        } catch (e) { }
    function c(t, r) {
        var l = {
            infoSize: 18,
            zoomMenu: !0,
            rate: 1,
            pipButton: !0,
            relatedMenu: !0,
            settingsButton: !0,
            rateMenu: !0,
            hdicon: !0,
            shareMenu: !0,
            zoomInfo: !0,
            chapterMarkers: !0,
            contextMenu: !0,
            timetooltip: !1,
            mousedisplay: !0,
            errordisplay: !0,
            related: {},
            logoposition: "LT",
            logooffsetX: 10,
            logooffsetY: 10,
            logourl: "",
            url: "",
            title: "",
            embed: "",
            endAction: "",
            pubid: "",
            slideWidth: 192,
            slideHeight: 108,
            slideType: "vertical",
            limit: 0,
            limitmessage: "Watch full video on",
            dashQualities: !0,
            hlsQualities: !0,
            minResolution: 2,
            resume: !0,
            video_id: "",
            playlistUI: !0,
            playlistShow: !0,
            playlistAutoHide: !0,
            playlist: !1,
            contextText: "",
            contextUrl: "",
            currentSlide: "",
            infoIcon: "",
            res_num: 0,
            target: "_blank",
            buttonRewind: !0,
            metatitle: "",
            metasubtitle: "",
            isLive: !1,
            liveReload: !1,
            qualityMenu: !1,
            liveTimeout: 10,
            captionsSize: 1.25,
            tooltips: !0,
            singlePlay: !0,
            dom: "nuevodevel",
            rewindforward: 10,
            isDisposed: !1
        }
            , d = e.dom;
        function v(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var c = function (t) {
            var s, i;
            function n() {
                var s, i = v(v(s = t.call(this) || this));
                if (e.browser.IS_IE8)
                    for (var a in i = document.createElement("custom"),
                        n.prototype)
                        "constructor" !== a && (i[a] = n.prototype[a]);
                return i.levels_ = [],
                    i.selectedIndex_ = -1,
                    Object.defineProperty(i, "selectedIndex", {
                        get: function () {
                            return i.selectedIndex_
                        }
                    }),
                    Object.defineProperty(i, "length", {
                        get: function () {
                            return i.levels_.length
                        }
                    }),
                    i || v(s)
            }
            i = t,
                (s = n).prototype = Object.create(i.prototype),
                s.prototype.constructor = s,
                s.__proto__ = i;
            var a = n.prototype;
            return a.addQualityLevel = function (t) {
                var s = this.getQualityLevelById(t.id);
                if (s)
                    return s;
                var i = this.levels_.length;
                return s = new function t(s) {
                    var i = this;
                    if (e.browser.IS_IE8)
                        for (var n in i = document.createElement("custom"),
                            t.prototype)
                            "constructor" !== n && (i[n] = t.prototype[n]);
                    return i.id = s.id,
                        i.label = i.id,
                        i.width = s.width,
                        i.height = s.height,
                        i.bitrate = s.bandwidth,
                        i.enabled_ = s.enabled,
                        Object.defineProperty(i, "enabled", {
                            get: function () {
                                return i.enabled_()
                            },
                            set: function (e) {
                                i.enabled_(e)
                            }
                        }),
                        i
                }
                    (t),
                    "" + i in this || Object.defineProperty(this, i, {
                        get: function () {
                            return this.levels_[i]
                        }
                    }),
                    this.levels_.push(s),
                    this.trigger({
                        qualityLevel: s,
                        type: "addqualitylevel"
                    }),
                    s
            }
                ,
                a.removeQualityLevel = function (e) {
                    for (var t = null, s = 0, i = this.length; s < i; s++)
                        if (this[s] === e) {
                            t = this.levels_.splice(s, 1)[0],
                                this.selectedIndex_ === s ? this.selectedIndex_ = -1 : this.selectedIndex_ > s && this.selectedIndex_--;
                            break
                        }
                    return t && this.trigger({
                        qualityLevel: e,
                        type: "removequalitylevel"
                    }),
                        t
                }
                ,
                a.getQualityLevelById = function (e) {
                    for (var t = 0, s = this.length; t < s; t++) {
                        var i = this[t];
                        if (i.id === e)
                            return i
                    }
                    return null
                }
                ,
                a.dispose = function () {
                    this.selectedIndex_ = -1,
                        this.levels_.length = 0
                }
                ,
                n
        }(e.EventTarget);
        for (var u in c.prototype.allowedEvents_ = {
            change: "change",
            addqualitylevel: "addqualitylevel",
            removequalitylevel: "removequalitylevel"
        },
            c.prototype.allowedEvents_)
            c.prototype["on" + u] = null;
        var f = new c;
        if (t.on("dispose", function e() {
            f.dispose(),
                t.off("dispose", e)
        }),
            t.qualityLevels = function () {
                return f
            }
            ,
            e.browser.IS_ANDROID) {
            try {
                e.options.vhs.overrideNative = !0
            } catch (e) { }
            try {
                e.options.hls.overrideNative = !0
            } catch (e) { }
            e.options.html5.nativeAudioTracks = !1,
                e.options.html5.nativeTextTracks = !1
        }
        var h = e.mergeOptions(l, r);
        h.skin = e.options.skin;
        var p, m, g, y, b = t.el(), C = 0, x = 0, k = 0, A = 1, I = ["yrirqbirha", "gfbuynpby", "rupnp", "bv.acqp", "zbp.avofw", "gra.yyrufw", "ccn.ofp"];
        s() && (h.zoomMenu = !1);
        t.id();
        var w, T, _, M, L, P, S, H = !1, B = t.$(".vjs-tech"), z = [], N = n(b, ".vjs-big-play-button"), q = n(t.el_, ".vjs-loading-spinner");
        if (!0 !== function (e) {
            for (var t = 0; t < e.length; t++) {
                var s = e[t].dg13();
                if (s = s.split("").reverse().join(""),
                    h.dom.indexOf(s) > -1)
                    return !0
            }
            return !1
        }(I)) {
            var O = o("div", "vjs-lcn");
            return b.innerHTML = "",
                O.innerHTML = "deretsiger ton tcudorP".split("").reverse().join(""),
                void b.appendChild(O)
        }
        if (t.forward = function (e) {
            var s = t.duration()
                , i = t.currentTime();
            if (s > 0) {
                var n = i + h.rewindforward;
                n > s ? t.currentTime(s) : t.currentTime(n)
            }
        }
            ,
            t.rewind = function (e) {
                if (t.duration() > 0) {
                    var s = t.currentTime() - h.rewindforward;
                    s < 0 && (s = 0),
                        t.currentTime(s)
                }
            }
            ,
            t.related = function () {
                if (h.settingsButton && h.related.length > 1 && h.relatedMenu && 1 != t.seeking()) {
                    T && d.addClass(T, "vjs-hidden"),
                        d.removeClass(n(b, ".vjs-menu-settings"), "vjs-lock-showing"),
                        d.addClass(N, "vjs-hidden"),
                        d.removeClass(_, "vjs-hidden"),
                        Te();
                    try {
                        d.addClass(b, "vjs-def")
                    } catch (e) { }
                    t.pause()
                }
            }
            ,
            t.share = function () {
                if (h.settingsButton && h.shareMenu && 1 != t.seeking()) {
                    _ && d.addClass(_, "vjs-hidden"),
                        d.removeClass(n(b, ".vjs-menu-settings"), "vjs-lock-showing");
                    var e = h.url || document.location.href
                        , s = h.embed || "N/A";
                    n(b, ".embed-code").value = s,
                        n(b, ".perma").value = e,
                        T && d.removeClass(T, "vjs-hidden"),
                        d.addClass(N, "vjs-hidden");
                    try {
                        d.addClass(b, "vjs-def")
                    } catch (e) { }
                    t.pause()
                }
            }
            ,
            !0 === function (e) {
                for (var t = 0; t < e.length; t++) {
                    var s = e[t].dg13();
                    if (s = s.split("").reverse().join(""),
                        h.dom.indexOf(s) > -1)
                        return !0
                }
                return !1
            }(I)) {
            1 != e.browser.TOUCH_ENABLED ? document.body.classList.add("no-touch") : h.contextMenu = !1,
                !0 !== h.contextMenu && b.addEventListener("contextmenu", function (e) {
                    e.preventDefault()
                }, !1);
            try {
                n(b, ".vjs-custom-control-spacer").innerHTML = ""
            } catch (e) { }
            var D = "pictureInPictureToggle"
                , E = !0
                , W = n(b, ".vjs-picture-in-picture-control");
            "undefined" != W && null !== W || (E = !1,
                D = "fullscreenToggle"),
                !document.pictureInPictureEnabled && E && (d.addClass(W, "vjs-hidden"),
                    D = "fullscreenToggle"),
                1 != h.pipButton && W && (d.addClass(W, "vjs-hidden"),
                    D = "flow" == h.skin ? "volumePanel" : "fullscreenToggle"),
                1 != h.pipButton && (B.disablePictureInPicture = !0);
            var U = t.controlBar.addChild("button", {
                el: d.createEl("div", {
                    className: "vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden"
                }, {
                    role: "button",
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                })
            })
                , R = t.controlBar.addChild("button", {
                    el: d.createEl("div", {
                        className: "vjs-control vjs-button vjs-cog-menu-button vjs-hidden"
                    })
                });
            t.controlBar.el_.insertBefore(U.el_, t.controlBar.getChild(D).el_),
                D = "flow" == h.skin ? U.el_ : t.controlBar.getChild(D).el_,
                t.controlBar.el_.insertBefore(R.el_, D),
                P = R.el_;
            var F = d.createEl("div", {
                className: "vjs-background-bar"
            });
            t.el_.insertBefore(F, t.controlBar.el_),
                M = U.el_;
            var Y = '<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Quality") + '</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
            if (M.innerHTML = Y,
                h.buttonForward) {
                h.buttonRewind && Ce(!0);
                var K = "vjs-forward-control";
                10 !== h.rewindforward && (K = "vjs-forward-control vjs-eforward");
                var Q = t.controlBar.addChild("button", {
                    el: d.createEl("button", {
                        className: K + " vjs-control vjs-button"
                    }, {
                        title: t.localize("Forward"),
                        type: "button",
                        "aria-disabled": "false"
                    })
                });
                Q.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Forward") + "</span>",
                    "party" == h.skin && h.buttonRewind ? t.controlBar.el_.insertBefore(Q.el_, n(b, ".vjs-rewind-control").nextSibling) : t.controlBar.el_.insertBefore(Q.el_, t.controlBar.getChild("playToggle").el_.nextSibling),
                    Q.el_.onclick = function () {
                        t.forward()
                    }
                    ,
                    Q.el_.ontouchstart = function () {
                        t.forward()
                    }
            } else
                h.buttonRewind && Ce();
            var Z = d.createEl("div", {
                className: "vjs-vast-label"
            });
            Z.innerHTML = t.localize("Advertisement");
            var J = "playToggle";
            if ("party" == h.skin && (J = "currentTimeDisplay"),
                "treso" == h.skin && (J = "volumePanel"),
                t.controlBar.el_.insertBefore(Z, t.controlBar.getChild(J).el_.nextSibling),
                h.theaterButton) {
                var V = t.controlBar.addChild("button", {
                    el: d.createEl("div", {
                        className: "vjs-control vjs-button vjs-control-button vjs-mode-control"
                    }, {
                        "aria-live": "polite",
                        "aria-disabled": "false"
                    })
                });
                V.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Theater mode") + "</span>",
                    t.controlBar.el_.insertBefore(V.el_, t.controlBar.getChild("fullscreenToggle").el_),
                    V.el_.onclick = function (e) {
                        e.preventDefault();
                        var s = V.el_;
                        d.hasClass(s, "vjs-mode") ? (d.removeClass(s, "vjs-mode"),
                            t.trigger("mode", "normal")) : (d.addClass(s, "vjs-mode"),
                                t.trigger("mode", "large"))
                    }
            }
            var X = o("div", "vjs-menu-settings")
                , G = o("div", "vjs-menu-div vjs-settings-div");
            X.appendChild(G);
            var $ = o("div", "vjs-submenu vjs-settings-home");
            G.appendChild($);
            var ee = o("ul", "vjs-menu-content vjs-settings-list");
            if ($.appendChild(ee),
                (L = d.createEl("button", {
                    className: "vjs-cog-button vjs-menu-button vjs-button"
                }, {
                    "aria-live": "polite",
                    "aria-disabled": "false",
                    "aria-expanded": "false"
                })).innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Settings") + "</span>",
                P.appendChild(L),
                P.appendChild(X),
                h.downloadButton) {
                var te = t.controlBar.addChild("button", {
                    el: e.dom.createEl("button", {
                        className: "vjs-download-control vjs-control vjs-button",
                        title: t.localize("Download")
                    }, {
                        type: "button",
                        "aria-disabled": "false"
                    })
                });
                t.controlBar.el_.insertBefore(te.el_, t.controlBar.getChild("fullscreenToggle").el_),
                    te.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Download") + "</span>",
                    te.el_.onclick = function () {
                        var e = t.currentSource().video_id || h.video_id || null;
                        t.trigger("downloadVideo", {
                            source: t.currentSrc(),
                            id: e
                        })
                    }
            }
            ke();
            for (var se = n(b, ".vjs-control-bar"), ie = a(b, ".vjs-control"), ne = 0; ne < ie.length; ne++)
                ie[ne].removeAttribute("title");
            var ae = se.querySelectorAll(".vjs-button");
            for (ne = 0; ne < ae.length; ne++)
                ae[ne].removeAttribute("title");
            window.onresize = function (e) {
                ke(),
                    Te(),
                    _e(),
                    xe("")
            }
                ;
            try {
                n(b, "video").controls = !1
            } catch (e) { }
            if ("" == h.title && (h.title = h.metatitle = document.title),
                "" == h.infoText && (h.infoText = h.metatitle),
                !h.timetooltip) {
                var oe = n(b, ".vjs-play-progress")
                    , re = n(oe, ".vjs-time-tooltip");
                oe && re && d.addClass(re, "vjs-abs-hidden")
            }
            try {
                h.mousedisplay || d.addClass(n(b, ".vjs-mouse-display"), "vjs-abs-hidden")
            } catch (e) { }
            if (h.logocontrolbar) {
                var le = o("img")
                    , de = !1;
                le.src = h.logocontrolbar,
                    le.onload = function () {
                        if (this.width + this.height == 0 && (de = !0),
                            1 != de) {
                            var e = o("div", "vjs-logo-bar");
                            if ("" !== h.logourl) {
                                var s = o("a");
                                s.href = h.logourl,
                                    s.target = h.target,
                                    h.logotitle && s.setAttribute("title", h.logotitle),
                                    s.appendChild(le),
                                    e.appendChild(s),
                                    e.style.cursor = "pointer"
                            } else
                                e.appendChild(le);
                            t.controlBar.el().insertBefore(e, t.controlBar.getChild("fullscreenToggle").el_)
                        }
                    }
            }
            if (h.contextMenu) {
                var ve = o("div", "vjs-context-menu vjs-hidden")
                    , ce = "";
                if ("" == h.contextText)
                    h.contextText = "Powered by Nuevodevel.com",
                        h.contextUrl = "https://www.nuevodevel.com/nuevo",
                        ce = '<img src="data:image/gif;base64,R0lGODlhJwASAOZrAPr6+vb29vT09PX19ff39/Ly8ra2tv///+Hh4ebm5tPT09TU1Nzc3Nra2tnZ2dvb2+3t7cHBwX5+fmdnZzc3N0NDQzo6Oq+vr/z8/PDw8GRkZNLS0v39/ZmZmcXFxe7u7srKysjIyPPz83h4eP7+/vj4+Lu7u9/f39HR0XFxcfQAAMQAAHp6euvr6+np6dDQ0GxsbPwAAK0AAHl5eX9/f+fn5/gAAPkAAOIAAIEAALKysjY2Nry8vPHx8Z2dnejo6G5ubvsAAPUAAKIAAPn5+Xt7e7W1tYyMjGtra/oAANYAAGUAAOTk5P0AAOAAAIwAADQAAL0AAD0AAMPDw7GxsW9vb3JycpycnPv7+5qamuXl5U5OTvb396qqqrS0tLe3txQUFJ6enpGRkWVlZaGhoaampkhISJubm42NjXx8fE9PT////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAHoA2sALAAAAAAnABIAAAf/gAABAoSFhoQDh4WJhAEEAZAEBQZrlWsHmJmam5ydnQiWCQoLDKWmpwwNDg2oracPEJgRlhITlre3FBUWuL29FxgZGmsbHAEdvpYeHyCVICHJvSIEI2skmCUm0ScHKJWYKZYqK8kCJSxrHAcYmC3JLgcv3wcwljExKjK95jPpBxsgriWg0atGvHn1KsWwcSMGjhy3zKFTp2MHD3U9fOD6cfDSASD2bIgMImSIJQFEivgzUulID0websGT5xFJyCRClCyJWKKfOpaVWDA5wGGDpaE0MSVc0ySIkydQcPFbiYvbAReVFHRUailIFCm+JFLFNaXEgQFUHGw9UCXarRIDWKyMxXWlwAEsANZmcVsJAgktW+biksAOkzePBTIQ4DJgQInHkPMe6FKJAwYvbhdg4PClMpbPoEODJlCjC5hKYcSM4UumjJlKZ9AcmU279hE0adTw3c3bVyAAOw==" />',
                        ce += "<span>" + h.contextText + "</span>",
                        ce = '<a class="ctxt" target="' + h.target + '" href="' + h.contextUrl + '">' + ce + "</a>",
                        ue();
                else if (h.contextIcon)
                    (fe = o("img")).src = h.contextIcon,
                        fe.onload = function () {
                            this.width + this.height > 0 && (ce = '<img src="' + h.contextIcon + '" />',
                                ce += "<span>" + h.contextText + "</span>",
                                "" != h.contextUrl && (ce = '<a class="ctxt" target="' + h.target + '" href="' + h.contextUrl + '">' + ce + "</a>"),
                                ue())
                        }
                        ,
                        fe.onerror = function () {
                            ce = "<span>" + h.contextText + "</span>",
                                "" != h.contextUrl && (ce = '<a class="ctxt" target="' + h.target + '" href="' + h.contextUrl + '">' + ce + "</a>"),
                                ue()
                        }
                        ;
                function ue() {
                    var e;
                    ve.innerHTML = ce,
                        t.el().appendChild(ve),
                        b.addEventListener("contextmenu", function (t) {
                            clearTimeout(e),
                                t.preventDefault(),
                                d.removeClass(ve, "vjs-hidden");
                            var s = ve.offsetWidth
                                , i = ve.offsetHeight;
                            if (t.clientY)
                                var n = t.clientY;
                            else
                                n = null;
                            if (t.clientX)
                                var a = t.clientX;
                            else
                                a = null;
                            if (null !== n && null !== a) {
                                var o = b.getBoundingClientRect()
                                    , r = n - o.top
                                    , l = a - o.left;
                                r + i > b.offsetHeight && (r = b.offsetTop + b.offsetHeight - i),
                                    l + s > b.offsetWidth && (l = b.offsetWidth - s),
                                    ve.style.top = r + "px",
                                    ve.style.left = l + "px",
                                    e = setTimeout(function () {
                                        d.addClass(ve, "vjs-hidden")
                                    }, 3e3),
                                    window.onscroll = function (e) {
                                        d.addClass(ve, "vjs-hidden")
                                    }
                                    ,
                                    window.onclick = function (e) {
                                        d.addClass(ve, "vjs-hidden")
                                    }
                            }
                        })
                }
            }
            if (h.logo) {
                var fe;
                (fe = o("img")).src = h.logo;
                var he = o("div", "vjs-logo");
                h.logomin && (he.className = "vjs-logo vjs-logo-min"),
                    b.appendChild(he),
                    fe.onload = function () {
                        if (this.width + this.height != 0) {
                            var e = h.logooffsetX;
                            h.logooffsetY;
                            if ("RT" == h.logoposition ? (he.style.right = e + "px",
                                he.style.top = e + "px") : "LB" == h.logoposition ? (he.style.left = e + "px",
                                    he.className += " vjs-logo-bottom") : (he.style.left = e + "px",
                                        he.style.top = e + "px"),
                                "" !== h.logourl) {
                                var t = o("a");
                                t.href = h.logourl,
                                    t.target = h.target,
                                    h.logotitle && t.setAttribute("title", h.logotitle),
                                    t.appendChild(fe),
                                    he.appendChild(t)
                            } else
                                he.appendChild(fe)
                        } else
                            b.removeChild(he)
                    }
                    ,
                    fe.onerror = function () {
                        b.removeChild(he)
                    }
            }
            if ("treso" == h.skin) {
                var pe = n(b, ".vjs-current-time")
                    , me = n(b, ".vjs-duration")
                    , je = n(b, ".vjs-control-bar");
                je.removeChild(pe);
                var ge = n(b, ".vjs-progress-control");
                ge.insertBefore(pe, ge.childNodes[0]),
                    je.removeChild(me),
                    ge.appendChild(me)
            }
            t.resetNuevo = function (r) {
                var l, v = new Array, c = new Array;
                if (t.options_.sources.length > 0) {
                    c = v = t.options_.sources,
                        Ae(),
                        _e();
                    try {
                        n(b, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = "",
                            d.addClass(M, "vjs-hidden")
                    } catch (e) { }
                    var u = B;
                    if (!0 !== e.browser.IS_IOS)
                        try {
                            for (; u.firstChild;)
                                u.removeChild(u.firstChild)
                        } catch (e) { }
                    if (t.src(v),
                        v.length > 1) {
                        var f = 0
                            , j = 0;
                        for (f = 0; f < v.length; f++)
                            (v[f].res || v[f].label) && j++;
                        if (j > 1) {
                            h.dash = !1,
                                h.hls = !1;
                            var C, x = new Array, A = new Array, I = new Array, T = "", _ = 0, P = 0, H = 0, z = 0, O = 0, D = !1, E = "MediaSource" in window;
                            for ((te = e.browser.IS_IOS) && (E = !1),
                                te && 1 == c.length && (E = !0); _ < c.length; _++) {
                                var W = "";
                                try {
                                    re = c[_].type
                                } catch (e) { }
                                if (void 0 !== re && (-1 === re.indexOf("x-mpegURL") && -1 === re.indexOf("apple") || (h.hls = !0,
                                    te && (E = !0),
                                    x[P] = c[_],
                                    P++),
                                    -1 !== re.indexOf("dash") && (h.dash = !0,
                                        A[H] = c[_],
                                        H++,
                                        te && (E = !1))),
                                    c[_].res && c[_].label) {
                                    if (1 != D && (D = !0,
                                        C = {
                                            res: c[_].res,
                                            type: c[_].type,
                                            src: c[_].src,
                                            label: c[_].label
                                        }),
                                        void 0 === (W = c[_].type) && (W = ""),
                                        c[_].default)
                                        ;
                                    else
                                        ; -1 !== W.indexOf("mpeg") || -1 !== W.indexOf("apple") || -1 !== W.indexOf("dash") || (I[z] = c[_],
                                            z++)
                                }
                            }
                            var U = new Array;
                            U = (U = x.length > 0 && E ? x : A.length > 0 && E ? A : I).sort(Le);
                            var R = ""
                                , F = " vjs-checked";
                            R = ' class="item-quality"',
                                F = ' class="item-quality vjs-checked"';
                            for (_ = 0; _ < U.length; _++) {
                                var Y = U[_].res
                                    , K = parseInt(Y)
                                    , Q = "";
                                if (h.hdicon) {
                                    var Z = "HD";
                                    K > 1079 && (Z = "FullHD"),
                                        K > 2159 && (Z = "4K"),
                                        K > 719 && (Q = '<i class="vjs-hd-icon">' + Z + "</i>")
                                }
                                0 == _ && " vjs-first",
                                    U[_].default ? (l = U[_],
                                        T += "<li" + F + ' data-height="' + _ + '">' + U[_].label + Q + "</li>") : T += "<li" + R + ' data-height="' + _ + '">' + U[_].label + Q + "</li>",
                                    O++
                            }
                            if (O > 1) {
                                if (h.res_num = O,
                                    h.qualityMenu) {
                                    ze();
                                    var J = n(b, ".vjs-menu-quality .vjs-menu-content");
                                    J.innerHTML = J.innerHTML + T,
                                        d.removeClass(n(b, ".vjs-extend-quality"), "vjs-hidden"),
                                        d.removeClass(L, "vjs-hidden")
                                } else
                                    n(b, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = T,
                                        d.removeClass(M, "vjs-hidden");
                                var V = a(b, ".item-quality");
                                _e(),
                                    h.menutouch = !1;
                                for (_ = 0; _ < V.length; _++) {
                                    var X = V[_]
                                        , G = function (e) {
                                            var s;
                                            e.stopPropagation();
                                            for (var i = 0; i < V.length; i++)
                                                d.removeClass(V[i], "vjs-checked"),
                                                    V[i] == e.target && (s = i);
                                            d.addClass(V[s], "vjs-checked");
                                            var n = e.target.getAttribute("data-height");
                                            Me(U[n].res, U[n].label);
                                            var a = U[n]
                                                , o = t.currentSource().video_id || h.video_id;
                                            t.trigger("resolutionchange", {
                                                player: b.id,
                                                id: o,
                                                resolution: n
                                            }),
                                                le(),
                                                ee(a)
                                        }
                                        , $ = !1;
                                    X.onclick = function (e) {
                                        G(e)
                                    }
                                        ,
                                        X.ontouchend = function (e) {
                                            1 != $ && G(e)
                                        }
                                        ,
                                        X.ontouchstart = function (e) {
                                            $ = !1
                                        }
                                        ,
                                        X.ontouchmove = function (e) {
                                            $ = !0
                                        }
                                }
                                function ee(e) {
                                    var s = t.currentTime()
                                        , i = t.paused();
                                    if (t.src(e),
                                        t.load(),
                                        t.play(),
                                        t.setRate(1),
                                        t.on("loadeddata", function () {
                                            try {
                                                window.URL.revokeObjectURL(mediaurl)
                                            } catch (e) { }
                                            s > 0 && t.currentTime(s),
                                                i && t.pause(),
                                                1 != h.rate && t.setRate(h.rate)
                                        }),
                                        t.handleTechSeeked_(),
                                        i) {
                                        var n = !0;
                                        t.on("playing", function () {
                                            n && (t.pause(),
                                                t.handleTechSeeked_(),
                                                n = !1)
                                        })
                                    }
                                }
                                we(),
                                    void 0 === l && void 0 === C || (void 0 !== l && l != C ? (Me(l.res, l.label),
                                        t.src(l),
                                        t.load()) : void 0 !== C && (Me(C.res, C.label),
                                            t.src(C),
                                            t.load()))
                            }
                        }
                    }
                    E = "MediaSource" in window;
                    var te = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0
                        , se = 0;
                    if (t.on("pause", function () {
                        se = Math.floor(Date.now() / 1e3),
                            t.one("play", function () {
                                d.hasClass(b, "vjs-dai") || Math.floor(Date.now() / 1e3) - se > h.liveTimeout && h.isLive && h.liveReload && 1 != t.seeking() && (d.hasClass(b, "vjs-liveui") ? d.addClass(b, "vjs-liveui-reload") : d.addClass(b, "vjs-live-reload"),
                                    h.reload = !0,
                                    t.src({
                                        type: t.currentType(),
                                        src: t.currentSrc()
                                    }),
                                    t.play())
                            })
                    }),
                        t.on("loadeddata", function () {
                            if (w)
                                w = !1;
                            else if ("AUDIO" == B.nodeName && e.browser.IS_IOS && d.addClass(n(b, ".vjs-subs-caps-button"), "vjs-hidden"),
                                h.is_audio = !1,
                                d.removeClass(b, "vjs-audio"),
                                t.currentType().indexOf("audio") > -1 && (d.addClass(b, "vjs-audio"),
                                    h.is_audio = !0),
                                function () {
                                    var e = n(b, ".vjs-mouse-display");
                                    if (1 != h.is_audio && h.slideImage && 1 != s() && e) {
                                        if ("" == h.slideImage)
                                            return;
                                        if (h.currentSlide == h.slideImage)
                                            return;
                                        h.currentSlide = h.slideImage;
                                        var i = n(b, ".vjs-mouse-display")
                                            , a = n(b, ".vjs-progress-holder")
                                            , r = n(b, ".vjs-play-progress")
                                            , l = n(r, ".vjs-time-tooltip");
                                        d.addClass(l, "vjs-abs-hidden"),
                                            d.addClass(i, "vjs-abs-hidden");
                                        var v = n(b, ".vjs-progress-slide");
                                        if (!v) {
                                            p = o("div", "vjs-progress-slide"),
                                                m = o("div", "vjs-thumb"),
                                                y = o("div", "vjs-thumb-duration"),
                                                g = o("img"),
                                                "horizontal" == h.slideType ? (g.style.width = "auto",
                                                    g.style.height = h.slideHeight + "px") : (g.style.height = "auto",
                                                        g.style.width = h.slideWidth + "px"),
                                                m.appendChild(g),
                                                m.appendChild(y),
                                                p.appendChild(m),
                                                m.style.left = "-" + parseInt(h.slideWidth / 2) + "px",
                                                n(b, ".vjs-progress-control").appendChild(p),
                                                p.style.left = "-1000px",
                                                d.addClass(l, "vjs-abs-hidden"),
                                                d.addClass(i, "vjs-abs-hidden");
                                            a.onmousemove = function (e) {
                                                n(b, ".vjs-tech-chromecast") || p && "" != g.src && function (e) {
                                                    parseInt(t.duration());
                                                    var s = n(b, ".vjs-progress-holder").offsetWidth
                                                        , i = parseFloat(n(b, ".vjs-mouse-display").style.left)
                                                        , a = n(b, ".vjs-progress-control").offsetWidth
                                                        , o = Number(i) / Number(s)
                                                        , r = n(b, ".vjs-mouse-display")
                                                        , l = n(r, ".vjs-time-tooltip")
                                                        , v = "";
                                                    l && (v = l.innerHTML);
                                                    var c = parseInt(o * k);
                                                    if (m.style.width = h.slideWidth + "px",
                                                        m.style.height = h.slideHeight + "px",
                                                        "horizontal" === h.slideType) {
                                                        var u = c * h.slideWidth;
                                                        g.style.left = "-" + u + "px"
                                                    } else {
                                                        var u = c * h.slideHeight;
                                                        g.style.top = "-" + u + "px"
                                                    }
                                                    "" !== v && (y.innerHTML = v);
                                                    var f = n(b, ".vjs-progress-holder");
                                                    i += f.offsetLeft;
                                                    var j = h.slideWidth / 2
                                                        , C = a - h.slideWidth / 2;
                                                    i > C && (i = C);
                                                    i < j && (i = j);
                                                    p.style.left = i + "px",
                                                        d.addClass(m, "vjs-thumb-show")
                                                }()
                                            }
                                                ,
                                                a.onmouseout = function (e) {
                                                    n(b, ".vjs-tech-chromecast") || p && (d.removeClass(m, "vjs-thumb-show"),
                                                        p.style.left = "-1000px")
                                                }
                                        }
                                        var c = new Image;
                                        g.src = h.slideImage,
                                            c.src = h.slideImage,
                                            c.onload = function () {
                                                var e = this.width
                                                    , t = this.height;
                                                k = e / h.slideWidth,
                                                    "horizontal" != h.slideType && (k = t / h.slideHeight),
                                                    d.removeClass(p, "vjs-hidden")
                                            }
                                    } else
                                        p && d.addClass(p, "vjs-hidden")
                                }(),
                                t.trigger("medialoaded"),
                                h.reload)
                                h.reload = !1;
                            else {
                                h.isLive = d.hasClass(b, "vjs-live");
                                for (var r = [n(b, ".vjs-play-control"), n(b, ".vjs-fullscreen-control"), n(b, ".vjs-mute-control")], l = 0; l < r.length; l++)
                                    r[l].onmouseover = function (e) {
                                        e.target.removeAttribute("title")
                                    }
                                        ;
                                if (1 != h.tooltips) {
                                    var v = a(b, ".vjs-control-text");
                                    for (l = 0; l < v.length; l++)
                                        d.addClass(v[l], "vjs-hidden")
                                }
                                var c = a(b, ".vjs-menu-button-popup");
                                for (l = 0; l < c.length; l++) {
                                    function u(e) {
                                        for (var t = b.querySelectorAll(".vjs-control-text"), s = 0; s < t.length; s++)
                                            t[s].removeAttribute("style");
                                        var i = n(e.target, ".vjs-control-text");
                                        "true" == e.target.getAttribute("aria-expanded") ? i && (i.style.opacity = "0") : i && i.removeAttribute("style"),
                                            xe(e.target);
                                        var a = n(e.target, ".vjs-menu-content") || n(e.target.parentNode, ".vjs-menu-content")
                                            , o = n(b, ".vjs-control-bar")
                                            , r = b.offsetHeight - o.offsetHeight - 10;
                                        a.style.maxHeight = r + "px"
                                    }
                                    c[l].onclick = function (e) {
                                        u(e)
                                    }
                                        ,
                                        c[l].ontouchend = function (e) {
                                            u(e)
                                        }
                                        ,
                                        c[l].onmousemove = function (e) {
                                            var t = n(e.target, ".vjs-menu") || n(e.target.parentNode, ".vjs-menu");
                                            if (t)
                                                if (d.hasClass(t, "vjs-lock-showing"))
                                                    ;
                                                else {
                                                    var s = e.target.querySelector(".vjs-control-text") || e.target.parentNode.querySelector(".vjs-control-text");
                                                    s && s.removeAttribute("style")
                                                }
                                        }
                                }
                                He();
                                var f = new Array;
                                if (f.length = 0,
                                    S = void 0,
                                    t.qualityLevels && t.qualityLevels()) {
                                    S = t.qualityLevels();
                                    for (l = 0; l < S.length; l++) {
                                        var j = S[l];
                                        if (x(j)) {
                                            var C = new Object;
                                            C.id = j.id,
                                                C.index = "vjs_" + l,
                                                C.height = j.height,
                                                C.width = j.width,
                                                C.label = j.label,
                                                C.bitrate = j.bitrate,
                                                C.bandwidth = j.bitrate,
                                                f.push(C)
                                        }
                                    }
                                }
                                f.length > 0 && S && (ze(),
                                    h.res_num = f.length,
                                    function (e) {
                                        if (Ae(),
                                            !(e.length < 2)) {
                                            h.is_auto = !0;
                                            for (var s = 0, o = 0, r = !1, l = 0, v = e.length; l < v; l++) {
                                                e[l].height > 0 && s++,
                                                    e[l].bitrate > 0 && o++;
                                                for (var c = 0, u = 0; u < e.length; u++)
                                                    e[l].height == e[u].height && c++;
                                                c > 1 && (r = !0)
                                            }
                                            var f = "bitrate";
                                            s >= o && (f = "height"),
                                                e = (e = i(e, f)).reverse(),
                                                t.hlsLevels = e,
                                                R = "vjs-menu-item item-quality",
                                                F = "vjs-menu-item item-quality vjs-checked";
                                            var p = "";
                                            for (h.res_num = e.length + 1,
                                                new Array,
                                                new Array,
                                                new Array,
                                                l = 0; l < e.length; l++) {
                                                var m = ""
                                                    , j = parseInt(e[l].height);
                                                if (h.hdicon) {
                                                    var g = "HD";
                                                    j > 1079 && (g = "FullHD"),
                                                        j > 2159 && (g = "4K"),
                                                        j > 719 && (m = '<i class="vjs-hd-icon">' + g + "</i>")
                                                }
                                                var y = e[l].bitrate
                                                    , C = e[l].height
                                                    , x = parseInt(y / 1e3);
                                                if (e[l].height > 0 || e[l].bitrate > 0) {
                                                    var k = R;
                                                    r ? p += s == o ? '<li data-id="' + e[l].index + '" class="' + k + '" data-bitrate="' + y + '" data-height="' + e[l].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + C + "p (" + x + " kbps)</li>" : s > o ? '<li data-id="' + e[l].index + '" class="' + k + '" data-bitrate="' + y + '" data-height="' + e[l].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + C + "p" + m + "</li>" : '<li data-id="' + e[l].index + '" class="' + k + '" data-bitrate="' + y + '" data-height="' + e[l].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + x + " kbps</li>" : e[l].bitrate > 0 && o > s ? p += '<li data-id="' + e[l].index + '" class="' + k + '" data-bitrate="' + y + '" data-height="' + e[l].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + C + "p (" + x + " kbps)</li>" : p += '<li id = "' + e[l].index + '" data-id="' + e[l].id + '" class="' + k + '" data-bitrate="' + y + '" data-height="' + e[l].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + C + "p" + m + "</li>"
                                                }
                                            }
                                            if (p += '<li id="auto" class="vjs-menu-item item-quality auto-res" data-height="Autores"' + F + ' role="menuitem" aria-live="polite" aria-disabled="false">Auto<i class="autores"></i></li>',
                                                n(b, ".quality-span").innerHTML = "Auto",
                                                h.qualityMenu) {
                                                ze();
                                                var A = n(b, ".vjs-menu-quality .vjs-menu-content");
                                                A.innerHTML = A.innerHTML + p,
                                                    d.removeClass(n(b, ".vjs-extend-quality"), "vjs-hidden"),
                                                    d.removeClass(L, "vjs-hidden")
                                            } else
                                                n(b, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = p,
                                                    d.removeClass(M, "vjs-hidden");
                                            var I = a(b, ".item-quality");
                                            we();
                                            var T = t.currentSource()
                                                , _ = t.options()
                                                , P = _.html5.vhs || _.html5.hls;
                                            for (void 0 !== _.html5.hlsjsConfig.startLevel ? O(_.html5.hlsjsConfig.startLevel) : void 0 !== P && void 0 !== P.startLevel ? O(P.startLevel) : void 0 !== T.startLevel ? O(T.startLevel) : z(!1),
                                                h.menutouch = !1,
                                                _e(),
                                                S && (t.qualityLevels(),
                                                    S.on("change", function () {
                                                        t.qualityLevels()[S.selectedIndex];
                                                        var e = n(b, ".auto-res");
                                                        e && e.className.indexOf("vjs-checked") > -1 && z()
                                                    })),
                                                l = 0; l < I.length; l++) {
                                                X = I[l];
                                                var H = function (e) {
                                                    e.stopPropagation(),
                                                        w = !0,
                                                        t.paused();
                                                    for (var s = 0; s < I.length; s++)
                                                        d.removeClass(I[s], "vjs-checked");
                                                    d.removeClass(n(b, ".auto-res"), "vjs-checked"),
                                                        d.addClass(e.target, "vjs-checked");
                                                    var i = e.target.getAttribute("id");
                                                    le(),
                                                        S && ("auto" == i ? z(!0) : D(e.target))
                                                };
                                                if (X.className.indexOf("vjs-hidden") < 0) {
                                                    var B = !1;
                                                    X.ontouchend = function (e) {
                                                        1 != B && H(e)
                                                    }
                                                        ,
                                                        X.ontouchstart = function (e) {
                                                            B = !1
                                                        }
                                                        ,
                                                        X.ontouchmove = function (e) {
                                                            B = !0
                                                        }
                                                        ,
                                                        X.onclick = function (e) {
                                                            H(e)
                                                        }
                                                }
                                            }
                                        }
                                        function z(e) {
                                            if (d.hasClass(b, "vjs-has-started") && (!0 !== t.paused() && d.addClass(N, "vjs-hidden"),
                                                d.addClass(q, "vjs-hidden")),
                                                e)
                                                for (var s = 0; s < S.length; s++)
                                                    S[s].enabled = !0;
                                            var i = n(b, ".auto-res");
                                            i && (i.className = "vjs-menu-item item-quality auto-res vjs-checked");
                                            var a = S[S.selectedIndex];
                                            if (a) {
                                                var o = ""
                                                    , r = 0;
                                                a.height && (r = parseInt(a.height)),
                                                    o = r > 0 ? a.height + "p" : parseInt(a.bitrate / 1e3) + "kbps",
                                                    i && (i.innerHTML = 'Auto<i class="autores">' + o + "</i>");
                                                var l = "";
                                                h.hdicon && (r >= 720 && (l = "HD"),
                                                    r > 2159 && (l = "4K"))
                                            }
                                            n(b, ".quality-span").innerHTML = 'Auto<i class="vjs-hd-icon vjs-hd-home">' + l + "</i>"
                                        }
                                        function O(e) {
                                            for (t.qualityLevels(),
                                                l = 0; l < I.length; l++) {
                                                var s = I[l].getAttribute("data-bitrate")
                                                    , i = I[l].getAttribute("data-height");
                                                if (s == e || e == i) {
                                                    D(I[l]),
                                                        t.paused() && d.addClass(q, "vjs-hidden");
                                                    break
                                                }
                                            }
                                        }
                                        function D(e) {
                                            t.currentTime(),
                                                d.hasClass(b, "vjs-has-started") && (1 == t.paused() && d.addClass(N, "vjs-hidden"),
                                                    d.addClass(q, "vjs-hidden")),
                                                n(b, ".auto-res").innerHTML = 'Auto<i class="autores"></i>';
                                            var s = parseInt(e.getAttribute("data-height"))
                                                , i = parseInt(e.getAttribute("data-bitrate"))
                                                , a = t.qualityLevels();
                                            d.addClass(e, "vjs-checked");
                                            var o = t.currentSource().video_id || h.video_id;
                                            t.trigger("resolutionchange", {
                                                player: b.id,
                                                id: o,
                                                resolution: s
                                            });
                                            for (var r = 0; r < a.length; r++)
                                                a[r].height == s || a[r].bitrate == i ? S[r].enabled = !0 : S[r].enabled = !1;
                                            var l = ""
                                                , v = n(b, ".quality-span");
                                            s > 0 ? (s > 719 && (l = '<i class="vjs-hd-icon vjs-hd-home">HD</i>'),
                                                v.innerHTML = s + "p" + l) : i > 0 && (v.innerHTML = parseInt(i / 1e3) + "kB")
                                        }
                                    }(f))
                            }
                            function x(e) {
                                if (t.tech_.vhs)
                                    var s = t.tech_.vhs;
                                else if (t.tech_.hls)
                                    s = t.tech_.hls;
                                if (s && s.representations) {
                                    var i = s.representations();
                                    if (i) {
                                        for (var n = 0; n < i.length; n++)
                                            if (e.bitrate === i[n].bandwidth)
                                                return !0;
                                        return !1
                                    }
                                }
                                return !0
                            }
                        }),
                        h.timetooltip) {
                        var ie, ne = n(b, ".vjs-play-progress");
                        (ie = n(ne, ".vjs-time-tooltip")) && (ie.className = "vjs-time-tooltip")
                    }
                    if (h.mousedisplay)
                        (ie = n(b, ".vjs-mouse-display")) && (ie.className = "vjs-mouse-display");
                    var ae = n(b, ".vjs-info");
                    ae && b.removeChild(ae);
                    var oe = n(b, ".vjs-audio-info");
                    oe && b.removeChild(oe),
                        t.audioInfo = function () {
                            return !(!h.audioInfo || !h.audioInfo.artist && !h.audioInfo.title) && h.audioInfo
                        }
                        ,
                        function () {
                            var e = n(b, ".vjs-audio-info");
                            e && b.removeChild(e);
                            if (h.audioInfo && (h.audioInfo.artist || h.audioInfo.title)) {
                                var t = o("span", "vjs-audio-info")
                                    , s = "";
                                h.audioInfo.url ? s = '<a href="' + h.audioInfo.url + '" rel="nofollow" target="' + h.target + '">' : t.style.pointerEvents = "none",
                                    h.audioInfo.cover && (s += '<span class="vjs-cover"><img src="' + h.audioInfo.cover + '"/></span>'),
                                    s += '<span class="vjs-audio-item vjs-text">',
                                    h.audioInfo.artist && (s += '<span class="audio-artist">' + h.audioInfo.artist + "</span>"),
                                    h.audioInfo.title && (s += '<span class="vjs-audio-item vjs-song">' + h.audioInfo.title + "</span>"),
                                    (h.audioInfo.genre || h.audioInfo.album || h.audioInfo.year) && (s += '<span class="vjs-audio-item audio-id">',
                                        h.audioInfo.genre && (s += "<span>Genre: " + h.audioInfo.genre + "</span>"),
                                        h.audioInfo.album && (s += "<span>Album: " + h.audioInfo.album + "</span>"),
                                        h.audioInfo.year && (s += "<span>Year: " + h.audioInfo.year + "</span>")),
                                    s += "</span>",
                                    h.audioInfo.url && (s += "</a>"),
                                    t.innerHTML = s,
                                    b.appendChild(t),
                                    t.onclick = function () {
                                        window.open(h.audioInfo.url, h.target)
                                    }
                            }
                        }(),
                        function () {
                            var e = n(b, ".vjs-info");
                            e && b.removeChild(e);
                            if (!h.audioInfo && h.videoInfo && (h.infoText || h.infoTitle || "" != h.title)) {
                                if (h.infoBottom)
                                    var t = o("span", "vjs-info vjs-info-bottom");
                                else
                                    var t = o("span", "vjs-info vjs-info-top");
                                var s = h.infoSize
                                    , i = ""
                                    , a = "";
                                if ((parseInt(h.infoSize) < 15 || parseInt(h.infoSize) > 24) && (s = 18),
                                    18 != s && (i = "font-size:" + s + "px;"),
                                    h.infoBold && (i += "font-weight:bold;"),
                                    h.infoFont && (i += "font-family:" + h.infoFont),
                                    "" != i && (t.style = i),
                                    b.appendChild(t),
                                    h.infoUrl ? a = '<a href="' + h.infoUrl + '" target="' + h.target + '">' : t.style.pointerEvents = "none",
                                    h.infoText)
                                    var r = h.infoText;
                                else if (h.infoTitle)
                                    var r = h.infoTitle;
                                else if ("" != h.title)
                                    var r = h.title;
                                var l = "";
                                "" != h.infoIcon && (l = '<span class="vjs-icon"><img src="' + h.infoIcon + '"/></span>'),
                                    a += l,
                                    a += '<span class="vjs-text"><span class="vjs-ttl">' + r + "</span>",
                                    h.infoDescription && (a += '<span class="vjs-dsc">' + h.infoDescription + "</span>"),
                                    h.infoUrl ? a += "</span></a></span>" : a += "</span>",
                                    t.innerHTML = a,
                                    t.onclick = function () {
                                        window.open(h.infoUrl, h.target)
                                    }
                            }
                        }()
                }
                function le() {
                    if (h.qualityMenu)
                        d.addClass(n(b, ".vjs-menu-quality"), "vjs-hidden"),
                            d.removeClass(n(b, ".vjs-settings-home"), "vjs-hidden"),
                            d.removeClass(n(b, ".vjs-menu-settings"), "vjs-lock-showing");
                    else {
                        var e = n(b, ".vjs-quality-button");
                        if (e) {
                            var t = n(e, ".vjs-menu")
                                , s = n(e, ".vjs-control-text");
                            t && (t.style.display = "none",
                                d.removeClass(t, "vjs-lock-showing"),
                                s && s.removeAttribute("style"))
                        }
                    }
                }
            }
                ;
            var ye = "MediaSource" in window;
            ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0 && (ye = !1);
            var be = new Array;
            if ((be = t.options_.sources).length > 0) {
                re = "none";
                try {
                    -1 !== (re = t.options_.sources[0].type).indexOf("dash") && ye && t.src(be)
                } catch (e) { }
                t.resetNuevo(!1),
                    Pe(),
                    He()
            } else
                t.resetNuevo(!1),
                    Pe(),
                    He();
            if (t.reconnect = function () {
                var e = t.src();
                t.reset(),
                    t.src(e),
                    t.load(),
                    B = t.$(".vjs-tech"),
                    t.resetNuevo(!0),
                    t.play()
            }
                ,
                t.setRate = function (e) {
                    try {
                        if (parseFloat(e) > 0) {
                            var s = e + "x";
                            t.playbackRate(e),
                                h.rate = e;
                            for (var i = b.querySelectorAll(".vjs-speed"), a = 0; a < i.length; a++)
                                d.removeClass(i[a], "vjs-checked"),
                                    s == i[a].innerHTML && d.addClass(i[a], "vjs-checked");
                            "1" == e && (s = "Normal"),
                                n(b, ".vjs-extend-speed span").innerHTML = s
                        }
                    } catch (e) { }
                }
                ,
                t.setSource = function (e) {
                    t.changeSource(e)
                }
                ,
                t.changeSource = function (e) {
                    if (!t.adPlaying && e) {
                        if ("string" == typeof e)
                            e = {
                                sources: [{
                                    src: e
                                }]
                            };
                        if (e.src)
                            e = {
                                sources: [e]
                            };
                        if (e.sources) {
                            var s = 1;
                            if (t.paused())
                                s = 2;
                            t.changeSrc(e),
                                2 == s ? (t.pause(),
                                    d.removeClass(N, "vjs-abs-hidden")) : t.play()
                        }
                    }
                }
                ,
                t.changeSrc = function (e) {
                    if (!d.hasClass(b, "vjs-ad-playing") && !d.hasClass(b, "vjs-dai")) {
                        h.title = "",
                            h.metatitle = "",
                            h.metasubtitle = "";
                        for (var s = (o = t.remoteTextTracks()) && o.length || 0; s--;)
                            t.removeRemoteTextTrack(o[s]);
                        var i = t.videoTracks();
                        for (s = i.length - 1; s >= 0; s--)
                            t.videoTracks().removeTrack(i[s]);
                        var a = t.audioTracks();
                        for (s = a.length - 1; s >= 0; s--)
                            t.videoTracks().removeTrack(a[s]);
                        if (e) {
                            if ("string" == typeof e)
                                e = {
                                    sources: [{
                                        src: e
                                    }]
                                };
                            if (e.src)
                                e = {
                                    sources: [e]
                                };
                            if (e.sources) {
                                h.rate = 1,
                                    t.setRate(1),
                                    h.video_id = void 0,
                                    void 0 !== e.video_id && (h.video_id = e.video_id),
                                    void 0 !== e.audioInfo ? h.audioInfo = e.audioInfo : h.audioInfo = null,
                                    void 0 !== e.slideImage ? h.slideImage = e.slideImage : h.slideImage = "",
                                    void 0 !== e.thumbnails ? h.thumbnails = e.thumbnails : h.thumbnails = null,
                                    void 0 !== e.title && (h.metatitle = h.title = e.title),
                                    void 0 !== e.embed && (h.embed = e.embed),
                                    void 0 !== e.metatitle && (h.metatitle = e.metatitle),
                                    void 0 !== e.infoTitle && (h.infoTitle = e.infoTitle),
                                    void 0 !== e.infoDescription && (h.infoDescription = e.infoDescription),
                                    void 0 !== e.infoUrl && (h.infoUrl = e.infoUrl),
                                    void 0 !== e.infoIcon && (h.infoIcon = e.infoIcon),
                                    void 0 !== e.subtitle && (h.metasubtitle = e.subtitle),
                                    void 0 !== e.metasubtitle && (h.metasubtitle = e.metasubtitle),
                                    void 0 !== e.url && (h.url = e.url),
                                    void 0 !== e.video_id && (h.video_id = e.video_id);
                                for (s = 0; s < e.sources.length; s++)
                                    e.sources[s].metatitle || e.sources[s].title || (e.sources[s].metatitle = h.metatitle),
                                        !e.sources[s].metatitle && e.sources[s].title && (e.sources[s].metatitle = e.sources[s].title),
                                        e.sources[s].metasubtitle || e.sources[s].subtitle || (e.sources[s].metasubtitle = h.metasubtitle),
                                        !e.sources[s].metasubtitle && e.sources[s].subtitle && (e.sources[s].metasubtitle = e.sources[s].subtitle);
                                if (t.options_.sources = e.sources,
                                    t.captions = null,
                                    void 0 !== e.tracks) {
                                    var o = e.tracks;
                                    for (s = 0; s < o.length; s++)
                                        void 0 !== o[s].src && "captions" == o[s].kind && (o[s].default && (o[s].mode = "showing"),
                                            o[s].language = o[s].srclang);
                                    o.length > 0 && (t.captions = o)
                                }
                                B = t.$(".vjs-tech"),
                                    1 != h.pipButton && (B.disablePictureInPicture = !0),
                                    t.src(e.sources),
                                    setTimeout(function () {
                                        var s = n(b, ".vjs-poster");
                                        void 0 !== e.poster ? ((s = n(b, ".vjs-poster")).style.backgroundImage = "url(" + e.poster + ")",
                                            t.poster(e.poster)) : void 0 !== h.firstplay && t.poster(null);
                                        d.removeClass(s, "vjs-hidden"),
                                            h.firstplay = !0
                                    }, 200),
                                    t.resetNuevo(!0, e),
                                    setTimeout(function () {
                                        if (void 0 !== e.tracks) {
                                            for (var s = e.tracks, i = 0; i < s.length; i++)
                                                if (void 0 !== s[i].src) {
                                                    s[i].default && "captions" == s[i].kind && (s[i].mode = "showing",
                                                        t.currentTrack = s[i].src);
                                                    var n = t.addRemoteTextTrack(s[i], !0);
                                                    n.addEventListener("load", function () {
                                                        if ("chapters" == this.kind && He(),
                                                            "metadata" == this.kind) {
                                                            var e = t.textTracks().length;
                                                            t.textTracks()[e - 1].src = s[i].src,
                                                                Se()
                                                        }
                                                    })
                                                }
                                        } else
                                            void 0 !== e.track && void 0 !== e.track.src && ("captions" == e.track.kind && (e.track.mode = "showing"),
                                                (n = t.addRemoteTextTrack(e.track, !0)).addEventListener("load", function () {
                                                    if ("chapters" == this.kind && He(),
                                                        "metadata" == this.kind) {
                                                        var e = t.textTracks().length;
                                                        t.textTracks()[e - 1].src = s[i].src,
                                                            Se()
                                                    }
                                                }))
                                    }, 200)
                            }
                        }
                    }
                }
                ,
                t.loadTracks = function (e) {
                    var s, i = new Array;
                    Array.isArray(e) ? s = e : (s = new Array)[0] = e;
                    for (var n = !1, a = !1, o = t.textTracks(), r = 0; r < s.length; r++) {
                        var l = s[r];
                        if ("chapters" == l.kind)
                            for (let e = 0; e < o.length; e++)
                                if ("chapters" == o[e].kind) {
                                    t.remoteTextTracks().removeTrack(o[e]);
                                    break
                                }
                        l.kind && l.src && (i[r] = t.addRemoteTextTrack(l, !0),
                            i[r].addEventListener("load", function () {
                                if ("chapters" == this.kind && 1 != n && (n = !0,
                                    He()),
                                    "metadata" == this.kind && 1 != a) {
                                    a = !0;
                                    var e = t.textTracks().length;
                                    t.textTracks()[e - 1].src = this.src,
                                        Se()
                                }
                            }))
                    }
                }
                ,
                t.removeFromPlaylist = function (e) {
                    if (h.playlist && h.playlistUI) {
                        var t = n(b, ".vjs-vlist")
                            , s = t.childNodes[e];
                        t.removeChild(s);
                        for (var i = 0; i < t.childNodes.length; i++)
                            i != t.childNodes.length - 1 && t.childNodes[i].setAttribute("data-id", i)
                    }
                }
                ,
                t.addToPlaylist = function (e, t, s) {
                    if (h.playlist && h.playlistUI) {
                        var i, a = n(b, ".vjs-vlist"), o = a.childNodes.length;
                        if ("number" == typeof s && "string" == typeof t) {
                            "after" === t ? (i = Be(e, s + 1),
                                a.insertBefore(i, a.childNodes[s].nextSibling)) : "before" === t && (i = Be(e, s),
                                    a.insertBefore(i, a.childNodes[s]));
                            for (var r = 0; r < a.childNodes.length; r++)
                                r != o && a.childNodes[r].setAttribute("data-id", r)
                        } else
                            i = Be(e, o - 1),
                                a.insertBefore(i, a.childNodes[o - 2].nextSibling)
                    }
                }
                ,
                t.on("playlistready", function () {
                    h.playlistRepeat && t.playlist.repeat(!0),
                        function () {
                            if ((u = t.playlist.list()).length < 2)
                                return;
                            t.playlist.repeat();
                            if (1 != h.playlist) {
                                if (h.playlist = !0,
                                    h.playlistNavigation) {
                                    var e = o("div", "vjs-playlist-nav vjs-nav-prev", '<div class="vjs-prev vjs-disabled"></div>')
                                        , s = o("div", "vjs-playlist-nav vjs-nav-next", '<div class="vjs-next"></div>');
                                    b.appendChild(e),
                                        b.appendChild(s),
                                        s.onclick = function (e) {
                                            if (!t.adPlaying && e.target.className.indexOf("disabled") < 0) {
                                                t.playlist.nextIndex();
                                                t.playlist.next()
                                            }
                                        }
                                        ,
                                        e.onclick = function (e) {
                                            if (!t.adPlaying && e.target.className.indexOf("disabled") < 0) {
                                                t.playlist.previousIndex();
                                                t.playlist.previous()
                                            }
                                        }
                                }
                                if (h.playlistUI) {
                                    var i = d.createEl("div", {
                                        className: "vjs-playlist-button"
                                    }, {
                                        title: "Playlist"
                                    });
                                    b.appendChild(i),
                                        i.onclick = function (e) {
                                            d.addClass(r, "vjs-vplaylist-show"),
                                                h.playlistFirst && d.addClass(r, "vjs-vplaylist-first")
                                        }
                                        ;
                                    var r = o("div", "vjs-vplaylist vjs-vplaylist-show")
                                        , l = o("div", "vjs-head", "<span>PLAYLIST</span>");
                                    r.style.visibility = "hidden";
                                    var v = o("div", "vjs-back", "<i></i>");
                                    l.appendChild(v),
                                        r.appendChild(l),
                                        b.appendChild(r);
                                    var c = o("div", "vjs-vlist");
                                    r.appendChild(c),
                                        v.onclick = function (e) {
                                            d.removeClass(r, "vjs-vplaylist-show")
                                        }
                                        ;
                                    var u = t.playlist.list();
                                    for (ne = 0; ne < u.length; ne++) {
                                        var f = Be(u[ne], ne);
                                        c.appendChild(f)
                                    }
                                    var p = o("div", "vjs-last");
                                    c.appendChild(p),
                                        1 != h.playlistShow ? (r.className = "vjs-vplaylist",
                                            setTimeout(function () {
                                                r.style.visibility = "visible"
                                            }, 500)) : r.style.visibility = "visible"
                                }
                            }
                            t.on("playlist_newitem", function (e, s) {
                                var i = t.playlist.currentIndex();
                                if (h.playlistUI)
                                    for (var o = a(b, ".vjs-vlist .vjs-item"), r = 0; r < o.length; r++)
                                        d.removeClass(o[r], "vjs-active-item");
                                t.on("play", function () {
                                    if (h.playlistUI) {
                                        for (var e = a(b, ".vjs-vlist .vjs-item"), s = 0; s < e.length; s++)
                                            d.removeClass(e[s], "vjs-active-item"),
                                                e[s].getAttribute("data-id") == i && d.addClass(e[s], "vjs-active-item");
                                        if (h.playlistAutoHide) {
                                            var o = n(b, ".vjs-vplaylist");
                                            d.removeClass(o, "vjs-vplaylist-show")
                                        }
                                    }
                                    if (h.playlistNavigation) {
                                        t.playlist.repeat();
                                        var r = n(b, ".vjs-nav-prev")
                                            , l = n(b, ".vjs-nav-next")
                                            , v = n(r, ".vjs-prev")
                                            , c = n(l, ".vjs-next");
                                        0 == t.playlist.currentIndex() ? d.addClass(v, "vjs-disabled") : d.removeClass(v, "vjs-disabled"),
                                            t.playlist.currentIndex() == t.playlist.lastIndex() ? d.addClass(c, "vjs-disabled") : d.removeClass(c, "vjs-disabled")
                                    }
                                });
                                try {
                                    if (t.isInPictureInPicture()) {
                                        t.exitPictureInPicture(),
                                            document.exitPictureInPicture(),
                                            t.isInPictureInPicture(!1);
                                        var l = !1;
                                        t.on("play", function () {
                                            1 != l && (l = !0,
                                                t.requestPictureInPicture())
                                        })
                                    }
                                } catch (e) { }
                            })
                        }()
                }),
                t.ready(function () {
                    h.isDisposed = !1,
                        t.on("dispose", function () {
                            h.isDisposed = !0
                        }),
                        window.onclick = function (e) {
                            !function (e) {
                                e.stopImmediatePropagation(),
                                    d.removeClass(N, "vjs-hidden"),
                                    xe(e.target)
                            }(e)
                        }
                        ;
                    var i = this.textTrackSettings
                        , r = 1.25;
                    parseInt(h.captionsSize) > .5 && (r = h.captionsSize),
                        i.setValues({
                            backgroundColor: "rgba(0,0,0,0)",
                            backgroundOpacity: "0",
                            edgeStyle: "raised",
                            fontPercent: r
                        }),
                        i.updateDisplay(),
                        n(b, ".vjs-text-track-display").style.zIndex = "1",
                        h.seeking = !1;
                    var l = n(b, ".vjs-progress-holder");
                    function v(e) {
                        h.isLive || (e.preventDefault(),
                            h.seeking = !0,
                            d.addClass(N, "vjs-hidden"),
                            d.addClass(q, "vjs-hidden"))
                    }
                    function c() {
                        if (e.ima || e.vroll || t.vastAds)
                            return !1;
                        if (t.isPreroll || t.resumed)
                            return !1;
                        var s = t.currentSource().video_id || h.video_id || void 0;
                        if (t.resumed = !0,
                            h.resume && void 0 !== s && localStorage && localStorage.vjs_resume) {
                            var i = localStorage.vjs_resume.split(",");
                            if (2 == i.length) {
                                var n = i[0];
                                if (n == n && Number(i[1]) > 3) {
                                    var a = Number(i[1]);
                                    setTimeout(function () {
                                        Oe("vjs_resume", s + ",0"),
                                            t.currentTime(a)
                                    }, 500)
                                }
                            }
                        }
                    }
                    l.addEventListener("mousedown", v, !1),
                        l.addEventListener("touchstart", v, {
                            passive: !0
                        }),
                        l.addEventListener(function (e) {
                            if ("ontouchstart" in window || navigator.msMaxTouchPoints || navigator.maxTouchPoints)
                                switch (e) {
                                    case "click":
                                        e = "touchend";
                                        break;
                                    case "mousedown":
                                        e = "touchstart";
                                        break;
                                    case "mousemove":
                                        e = "touchmove";
                                        break;
                                    case "mouseup":
                                        e = "touchend"
                                }
                            return e
                        }("mouseup"), function (e) {
                            h.seeking = !1,
                                d.removeClass(N, "vjs-hidden"),
                                d.removeClass(q, "vjs-hidden")
                        }, !1),
                        t.on("timeupdate", function () {
                            if (d.hasClass(b, "vjs-ad-playing") || d.hasClass(b, "vjs-dai"))
                                return !1;
                            var e = t.currentSource().video_id || h.video_id || void 0;
                            if (h.resume && void 0 !== e) {
                                var s = t.currentTime();
                                (s = s.toFixed(2)) > 1 && Oe("vjs_resume", e + "," + s)
                            }
                        }),
                        t.on("volumechange", function () {
                            Oe("volume", t.volume())
                        }),
                        t.on("ended", function () {
                            if (d.hasClass(b, "vjs-ad-playing") || d.hasClass(b, "vjs-dai"))
                                return !1;
                            var e = !0;
                            if (d.addClass(N, "vjs-hidden"),
                                h.playlist && (e = !1,
                                    t.playlist.currentIndex() == t.playlist.lastIndex() && 1 != t.playlist.repeat && (e = !0)),
                                e) {
                                var s = t.currentSource().video_id || h.video_id || void 0;
                                h.resume && void 0 !== s && Oe("vjs_resume", s + ",0");
                                n(b, ".vjs-menu-settings");
                                "" != h.endAction ? h.settingsButton && "share" == h.endAction && h.shareMenu ? t.share() : h.settingsButton && "related" == h.endAction && h.relatedMenu && h.related.length > 1 && t.related() : (d.removeClass(N, "vjs-abs-hidden"),
                                    d.removeClass(N, "vjs-hidden"),
                                    N.removeAttribute("style"))
                            }
                        }),
                        t.on("playing", function () {
                            if (s() && d.addClass(N, "vjs-abs-hidden"),
                                d.hasClass(b, "vjs-ad-playing") || d.hasClass(b, "vjs-dai"))
                                return !1;
                            try {
                                d.removeClass(b, "vjs-def")
                            } catch (e) { }
                            _ && d.addClass(_, "vjs-hidden"),
                                T && d.addClass(T, "vjs-hidden"),
                                d.removeClass(N, "vjs-hidden"),
                                d.removeClass(N, "vjs-abs-hidden"),
                                d.removeClass(q, "vjs-hidden"),
                                d.removeClass(q, "vjs-abs-hidden"),
                                (t.remoteTextTracks ? t.remoteTextTracks() : []).length < 1 && e.browser.IS_IOS && d.addClass(n(b, ".vjs-subs-caps-button"), "vjs-hidden")
                        }),
                        t.on("pause", function (t) {
                            d.removeClass(N, "vjs-no-pointer");
                            var s = n(b, ".vjs-tech-chromecast");
                            e.browser.IS_ANDROID || e.browser.IS_IOS ? d.addClass(N, "vjs-abs-hidden") : s ? d.addClass(N, "vjs-abs-hidden") : d.removeClass(N, "vjs-abs-hidden")
                        }),
                        t.on("userinactive", function () {
                            1 != t.paused() && xe("")
                        }),
                        t.on("contentupdate", function () {
                            var e = B;
                            e.style.top = "0",
                                e.style.left = "0",
                                e.style.transform = "scale(1)",
                                e.style.webkitTransform = "scale(1)",
                                e.style.msTransform = "scale(1)",
                                A = 1
                        }),
                        t.on("canplaythrough", function () {
                            if (e.ima)
                                return !1;
                            e.browser.IS_IOS && c()
                        }),
                        t.on("play", function () {
                            if (h.singlePlay) {
                                var i = a(document, "video");
                                if (i.length > 1)
                                    for (var r = 0; r < i.length; r++) {
                                        var l = t.$(".vjs-tech");
                                        i[r] != l && i[r].pause()
                                    }
                            }
                            if (d.addClass(N, "vjs-no-pointer"),
                                !H) {
                                ke(),
                                    H = !0;
                                var v = n(b, ".vjs-info");
                                if (v && (d.removeClass(v, "vjs-info-bottom"),
                                    d.addClass(v, "vjs-info-top")),
                                    1 != h.is_audio && d.addClass(n(b, ".vjs-poster"), "vjs-no-pointer"),
                                    1 != e.browser.IS_IOS && c(),
                                    h.limit > 0 && (h.limiturl || "" != h.url)) {
                                    var u = !1;
                                    t.on("timeupdate", function () {
                                        var e, s;
                                        if (t.currentTime() > h.limit && (t.pause(),
                                            d.addClass(N, "vjs-abs-hidden"),
                                            1 != u)) {
                                            h.limiturl || (h.limiturl = h.url),
                                                u = !0;
                                            var i = o("div", "vjs-limit-overlay")
                                                , n = o("a", "vjs-limit");
                                            if (n.href = h.limiturl,
                                                n.target = h.target,
                                                n.style.textDecoration = "none",
                                                i.appendChild(n),
                                                h.limitimage) {
                                                var a = o("img");
                                                a.src = h.limitimage,
                                                    a.onload = function () {
                                                        n.innerHTML = '<img src="' + h.limitimage + '" />'
                                                    }
                                            } else
                                                e = o("span"),
                                                    s = h.limitmessage,
                                                    e.innerHTML = s + "<span>" + h.limiturl + "</span>",
                                                    n.appendChild(e);
                                            t.el().appendChild(i)
                                        }
                                    })
                                }
                                localStorage && localStorage.volume && 1 != t.muted() && t.volume(localStorage.volume),
                                    t.muted() && t.volume(0);
                                var f = !1;
                                if (h.settingsButton && (h.relatedMenu || h.shareMenu || h.rateMenu || h.zoomMenu) && (f = !0),
                                    1 != f && h.res_num > 1 && h.qualityMenu && d.removeClass(L, "vjs-hidden"),
                                    f) {
                                    var p = ""
                                        , m = !1
                                        , j = !1;
                                    if (h.shareMenu && (p = p + '<li class="vjs-settings-item vjs-share-button">' + t.localize("Share") + '<span class="vjs-share-icon"></span></li>'),
                                        h.relatedMenu && h.related.length > 1 && (p = p + '<li class="vjs-settings-item vjs-related-button">' + t.localize("Related") + '<span class="vjs-related-icon"></span></li>'),
                                        h.zoomMenu) {
                                        p = p + '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' + t.localize("Zoom") + '<span class="zoom-label">100%</span></li>';
                                        j = o("div", "vjs-submenu vjs-zoom-menu vjs-hidden", '<div class="vjs-settings-back vjs-zoom-return"><span>' + t.localize("Zoom") + '</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">RESET</div>')
                                    }
                                    if (h.rateMenu) {
                                        p = p + '<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' + t.localize("Speed") + "<span>Normal</span></li>";
                                        m = o("div", "vjs-submenu vjs-menu-speed vjs-hidden", '<ul class="vjs-menu-content"><li class="vjs-settings-back">' + t.localize("Speed") + '</li><li class="vjs-speed">0.25x</li><li class="vjs-speed">0.5x</li><li class="vjs-speed vjs-checked">1x</li><li class="vjs-speed">1.25x</li><li class="vjs-speed">1.5x</li><li class="vjs-speed">2x</li></ul>')
                                    }
                                    var g = n(b, ".vjs-settings-list");
                                    if ("" != p) {
                                        g.innerHTML = p + g.innerHTML;
                                        var y = n(b, ".vjs-settings-div");
                                        m && y.appendChild(m),
                                            j && y.appendChild(j),
                                            d.removeClass(P, "vjs-hidden"),
                                            we(),
                                            _e();
                                        var k = function (e) {
                                            var s = e.target.innerHTML;
                                            s = s.replace("x", ""),
                                                t.setRate(s)
                                        };
                                        m.ontouchmove = function (e) {
                                            !0
                                        }
                                            ;
                                        for (var I = b.querySelectorAll(".vjs-speed"), w = 0; w < I.length; w++) {
                                            let e = !1;
                                            I[w].onclick = function (e) {
                                                k(e)
                                            }
                                                ,
                                                I[w].ontouchmove = function (t) {
                                                    e = !0
                                                }
                                                ,
                                                I[w].ontouchend = function (t) {
                                                    e ? e = !1 : (k(t),
                                                        xe(""))
                                                }
                                        }
                                    }
                                    if (h.related.length > 1 && h.relatedMenu) {
                                        var M = h.related.length;
                                        _ = o("div");
                                        var S = s()
                                            , z = '<div class="vjs-close-btn"></div>';
                                        1 != S && (z += '<div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>'),
                                            _.innerHTML = z,
                                            _.className = "vjs-grid vjs-hidden";
                                        var q = o("p");
                                        q.innerHTML = t.localize("Related");
                                        var O = o("div", "vjs-related");
                                        S && (O.className = "vjs-related vjs-scroll");
                                        var D = b.offsetWidth
                                            , E = .8 * D;
                                        S && (E = .9 * D),
                                            _.appendChild(q),
                                            _.appendChild(O),
                                            b.appendChild(_);
                                        var W = n(_, ".vjs-arrow-prev")
                                            , U = n(_, ".vjs-arrow-next");
                                        if (1 != S) {
                                            var R = parseInt(n(b, ".vjs-prev").offsetWidth) + 5;
                                            W && (W.style.left = parseInt(O.style.left) - R + "px"),
                                                U && (U.style.left = E + parseInt(O.style.left) + "px")
                                        }
                                        var F = o("div", "rel-block rel-anim");
                                        O.appendChild(F);
                                        var Y = h.related;
                                        C = 1;
                                        for (w = 0; w < M; w++) {
                                            var K = o("div", "rel-parent")
                                                , Q = o("div", "rel-item");
                                            K.appendChild(Q),
                                                F.appendChild(K),
                                                Q.innerHTML = '<a class="rel-url" target="' + h.target + '" href="' + Y[w].url + '" alt="' + Y[w].title + '"><span class="rel-bg" style="background-image:url(' + Y[w].thumb + ');"></span><label>' + Y[w].title + "</label><i>" + Y[w].duration + "</i></a>"
                                        }
                                        var Z = a(b, ".rel-url");
                                        for (w = 0; w < Z.length; w++)
                                            ;
                                        M < 7 && 1 != S && (W && d.addClass(W, "vjs-hidden"),
                                            U && d.addClass(U, "vjs-hidden"));
                                        1 != S && U && (U.onclick = function (e) {
                                            !function (e) {
                                                if (e.stopPropagation(),
                                                    !d.hasClass(U, "vjs-disabled")) {
                                                    var t = O.offsetWidth;
                                                    C++,
                                                        d.removeClass(U, "vjs-disabled");
                                                    var s = (C - 1) * t;
                                                    F.style.left = "-" + s + "px",
                                                        C == x && d.addClass(U, "vjs-disabled"),
                                                        d.removeClass(W, "vjs-disabled")
                                                }
                                            }(e)
                                        }
                                        );
                                        1 != S && W && (W.onclick = function (e) {
                                            !function (e) {
                                                if (e.stopPropagation(),
                                                    !d.hasClass(W, "vjs-disabled")) {
                                                    var t = n(b, ".vjs-related").offsetWidth
                                                        , s = ((C -= 1) - 1) * t;
                                                    n(b, ".rel-block").style.left = "-" + s + "px",
                                                        1 != S && (1 == C && d.addClass(W, "vjs-disabled"),
                                                            d.removeClass(U, "vjs-disabled"))
                                                }
                                            }(e)
                                        }
                                        );
                                        var J, V = n(b, ".vjs-related-button");
                                        let e = !1;
                                        V.onclick = function (e) {
                                            J = t.paused(),
                                                t.related()
                                        }
                                            ,
                                            V.ontouchmove = function () {
                                                e = !0
                                            }
                                            ,
                                            V.ontouchend = function (s) {
                                                e ? e = !1 : (J = t.paused(),
                                                    t.related())
                                            }
                                            ,
                                            _.onclick = function (e) {
                                                d.addClass(_, "vjs-hidden"),
                                                    d.removeClass(N, "vjs-hidden"),
                                                    1 != J && t.play()
                                            }
                                    }
                                    if (h.shareMenu) {
                                        T = o("div", "vjs-sharing-overlay vjs-hidden");
                                        var X = o("div", "vjs-sharing-container")
                                            , G = o("div", "vjs-sharing-body")
                                            , $ = o("div", "vjs-close-btn vjs-share-close")
                                            , ee = (ee = '<div class="vjs-inputs-body"><h2>' + t.localize("Link") + '</h2><input type="text" readonly class="perma"><h2>' + t.localize("Embed") + '</h2><input class="embed-code" readonly type="text"></div>') + '<div class="vjs-inputs-body"><h2>' + t.localize("Social") + "</h2></div>";
                                        ee += '<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>',
                                            ee += '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>',
                                            ee += '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>',
                                            ee += '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>',
                                            G.innerHTML = ee,
                                            X.appendChild(G),
                                            T.appendChild($),
                                            T.appendChild(X);
                                        var te = h.url || document.location.href;
                                        t.el().appendChild(T);
                                        V = n(b, ".vjs-share-button");
                                        let e = !1;
                                        V.onclick = function (e) {
                                            se = t.paused(),
                                                t.share()
                                        }
                                            ,
                                            V.ontouchmove = function (t) {
                                                e = !0
                                            }
                                            ,
                                            V.ontouchend = function (s) {
                                                e ? e = !1 : (se = t.paused(),
                                                    t.share())
                                            }
                                            ;
                                        var se, ie = new Array, ne = function (e) {
                                            e.stopPropagation(),
                                                ie = {
                                                    url: te,
                                                    title: h.title || h.metatitle || document.title,
                                                    description: t.localize("Check out this cool video on") + " " + h.url,
                                                    pubid: h.pubid || null
                                                };
                                            var s = "";
                                            switch (e.target.id.split("_")[1]) {
                                                case "facebook":
                                                    s = "facebook";
                                                    break;
                                                case "twitter":
                                                    s = "twitter";
                                                    break;
                                                case "pinterest":
                                                    s = "pinterest";
                                                    break;
                                                case "linkedin":
                                                    s = "linkedin"
                                            }
                                            window.open("http://api.addthis.com/oexchange/0.8/forward/" + s + "/offer?" + function (e) {
                                                var t = [];
                                                for (var s in e)
                                                    t.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
                                                return t.join("&")
                                            }(ie), "AddThis", "height=450,width=550,modal=yes,alwaysRaised=yes")
                                        }, ae = b.querySelectorAll(".vjs-share-icon");
                                        for (w = 0; w < ae.length; w++)
                                            ae[w].addEventListener("click", ne, !1);
                                        n(T, ".embed-code").onclick = function (e) {
                                            e.stopImmediatePropagation(),
                                                this.select()
                                        }
                                            ,
                                            n(T, ".perma").onclick = function (e) {
                                                e.stopImmediatePropagation(),
                                                    this.select()
                                            }
                                            ,
                                            T.onclick = function (e) {
                                                d.addClass(T, "vjs-hidden"),
                                                    d.removeClass(N, "vjs-hidden"),
                                                    1 != se && t.play()
                                            }
                                    }
                                    if (h.zoomMenu) {
                                        var oe, re, le, de, ve = n(b, ".vjs-poster");
                                        if (h.zoomInfo) {
                                            var ce = o("div", "vjs-zoom-parent vjs-hidden")
                                                , ue = o("div", "vjs-reset-zoom");
                                            ue.innerHTML = "100%",
                                                ce.appendChild(ue);
                                            var fe = o("div", "vjs-reset-center")
                                                , he = o("div", "vjs-reset-cancel");
                                            ce.appendChild(fe),
                                                ce.appendChild(he);
                                            var pe = o("div", "vjs-reset-info");
                                            ce.appendChild(pe);
                                            var me = o("div", "vjs-zoom-help vjs-hidden");
                                            h.zoomWheel ? me.innerHTML = '<div class="zoom-close">x</div><div>' + t.localize("ZOOM HELP") + "</div>" + t.localize("Use ZOOM slider or mouse wheel to ZOOM in video.") + "<div>" + t.localize("Drag zoomed area using your mouse or a finger.") + "</div>" : me.innerHTML = '<div class="zoom-close">x</div><div>' + t.localize("ZOOM HELP") + "</div>" + t.localize("Drag zoomed area using your mouse or a finger.") + "</div>",
                                                ce.appendChild(pe),
                                                pe.onclick = function (e) {
                                                    !function (e) {
                                                        e.preventDefault(),
                                                            e.stopPropagation(),
                                                            d.hasClass(me, "vjs-hidden") && (d.removeClass(me, "vjs-hidden"),
                                                                d.addClass(N, "vjs-hidden"))
                                                    }(e)
                                                }
                                                ,
                                                n(me, ".zoom-close").onclick = function () {
                                                    d.addClass(me, "vjs-hidden"),
                                                        d.addClass(me, "vjs-hidden"),
                                                        d.removeClass(N, "vjs-hidden")
                                                }
                                                ,
                                                b.appendChild(me),
                                                he.onmouseup = function () {
                                                    Ne()
                                                }
                                                ,
                                                fe.onmouseup = function () {
                                                    !function (e) {
                                                        try {
                                                            e.preventDefault(),
                                                                e.stopPropagation()
                                                        } catch (e) { }
                                                        B.style.left = B.offsetWidth / 2 - b.offsetWidth / 2 + "px",
                                                            B.style.top = B.offsetHeight / 2 - b.offsetHeight / 2 + "px"
                                                    }()
                                                }
                                                ,
                                                b.appendChild(ce)
                                        }
                                        var je = n(b, ".vjs-zoom-reset");
                                        je && je.addEventListener("mouseup", Ne, !1);
                                        var ge = t.el();
                                        if (ge.hasAttribute("tabIndex") || ge.setAttribute("tabIndex", "-1"),
                                            h.zoomWheel) {
                                            function ye(e) {
                                                e.preventDefault(),
                                                    e.stopPropagation();
                                                var t = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                                                (A = (100 * A + 20 * t) / 100) < 1 && (A = 1),
                                                    A > 5 && (A = 5),
                                                    1 == A ? (Ne(),
                                                        h.zoomInfo && d.addClass(ce, "vjs-hidden"),
                                                        d.removeClass(N, "vjs-hidden")) : (h.zoomInfo && d.removeClass(ce, "vjs-hidden"),
                                                            De(B, A),
                                                            d.addClass(N, "vjs-hidden"));
                                                var s = n(b, ".vjs-zoom-menu");
                                                if (1 != d.hasClass(s, "vjs-hidden")) {
                                                    var i = (A - 1) / 4 * 100;
                                                    n(b, ".vjs-zoom-level").style.height = i + "%",
                                                        Ie(100 * A)
                                                }
                                                return !1
                                            }
                                            ve.style.pointerEvents = "auto",
                                                ve.addEventListener("mousewheel", ye, {
                                                    passive: !1
                                                }),
                                                ve.addEventListener("DOMMouseScroll", ye, {
                                                    passive: !1
                                                })
                                        }
                                        function be(e) {
                                            if (e.preventDefault(),
                                                oe) {
                                                try {
                                                    re = {
                                                        x: e.clientX,
                                                        y: e.clientY
                                                    }
                                                } catch (e) { }
                                                var t = de
                                                    , s = re.x + le[0]
                                                    , i = re.y + le[1]
                                                    , n = b.offsetWidth / 2 * (A - 1)
                                                    , a = b.offsetHeight / 2 * (A - 1);
                                                s > n && (s = n),
                                                    s < -1 * n && (s = -1 * n),
                                                    i > a && (i = a),
                                                    i < -1 * a && (i = -1 * a),
                                                    t.style.left = s + "px",
                                                    t.style.top = i + "px"
                                            }
                                        }
                                        function Ce(e) {
                                            ve.style.pointerEvents = "auto",
                                                oe = !1,
                                                document.removeEventListener("mouseup", Ce, !0),
                                                document.removeEventListener("mousemove", be, !0),
                                                e.preventDefault(),
                                                e.stopPropagation()
                                        }
                                        function Ae(t, s) {
                                            ve.style.pointerEvents = "auto";
                                            var i = !1;
                                            try {
                                                i = t.pageY
                                            } catch (t) { }
                                            if (0 != i) {
                                                var a = s.offsetHeight
                                                    , o = i - function (e) {
                                                        var t = e.offsetTop;
                                                        for (; e = e.offsetParent;)
                                                            t += e.offsetTop;
                                                        return t
                                                    }(s);
                                                o > a && (o = a),
                                                    o < 0 && (o = 0);
                                                var r = parseInt(100 - o / a * 100);
                                                r < 0 && (r = 0),
                                                    r > 100 && (r = 100);
                                                try {
                                                    n(b, ".vjs-zoom-level").style.height = r + "%"
                                                } catch (t) { }
                                                try {
                                                    n(b, ".zoom-thumb").style.height = r + "%"
                                                } catch (t) { }
                                                var l = 1 + 4 * r / 100;
                                                A = l,
                                                    De(B, l),
                                                    Ie(100 * l),
                                                    l > 1 ? (e.options.blockKeys = !0,
                                                        d.removeClass(n(b, ".vjs-zoom-parent"), "vjs-hidden"),
                                                        d.addClass(N, "vjs-hidden")) : (Ne(),
                                                            e.options.blockKeys = !1,
                                                            d.addClass(n(b, ".vjs-zoom-parent"), "vjs-hidden"),
                                                            d.removeClass(N, "vjs-hidden"))
                                            }
                                        }
                                        ve.onmousedown = function (e) {
                                            !function (e) {
                                                if (A > 1) {
                                                    e.preventDefault(),
                                                        e.stopPropagation(),
                                                        oe = !0,
                                                        de = t.$(".vjs-tech");
                                                    try {
                                                        le = [B.offsetLeft - e.clientX, B.offsetTop - e.clientY]
                                                    } catch (e) { }
                                                    try {
                                                        le = [B.offsetLeft - e.touches[0].clientX, B.offsetTop - e.touches[0].clientY]
                                                    } catch (e) { }
                                                    ve.style.pointerEvents = "none",
                                                        document.addEventListener("mouseup", Ce, !0),
                                                        document.addEventListener("mousemove", be, !0)
                                                }
                                            }(e)
                                        }
                                            ;
                                        var Te = n(b, ".vjs-zoom-slider");
                                        Te.onclick = function (e) {
                                            e.preventDefault(),
                                                e.stopPropagation(),
                                                e.stopImmediatePropagation()
                                        }
                                            ,
                                            Te.addEventListener("mousedown", function (e) {
                                                e.preventDefault(),
                                                    e.stopImmediatePropagation(),
                                                    document.body.style.MozUserSelect = "none",
                                                    document.body.style.webkitUserSelect = "none",
                                                    document.body.focus(),
                                                    document.onselectstart = function () {
                                                        return !1
                                                    }
                                                    ;
                                                var t = n(b, ".vjs-zoom-slider");
                                                function s(e) {
                                                    e.preventDefault(),
                                                        e.stopPropagation(),
                                                        Ae(e, t)
                                                }
                                                Ae(e, t),
                                                    document.addEventListener("mousemove", s, !1),
                                                    document.addEventListener("mouseup", function e(t) {
                                                        t.preventDefault();
                                                        t.stopPropagation();
                                                        document.body.style.MozUserSelect = "text",
                                                            document.body.style.webkitUserSelect = "text",
                                                            document.onselectstart = function () {
                                                                return !0
                                                            }
                                                            ;
                                                        document.removeEventListener("mouseup", e);
                                                        document.removeEventListener("mousemove", s)
                                                    }, !1)
                                            }, !1)
                                    }
                                }
                            }
                        })
                }),
                h.mirrorButton) {
                t.controlBar.mirrorButton = t.controlBar.addChild("button", {
                    el: d.createEl("div", {
                        text: "Mirror view",
                        className: "vjs-mirror-button vjs-control vjs-button"
                    }, {
                        role: "button",
                        "aria-live": "polite",
                        "aria-disabled": "false"
                    })
                }),
                    t.controlBar.mirrorButton.el_.innerHTML = '<span class="vjs-control-text" aria-live="polite">' + t.localize("Mirror View") + "</span>",
                    t.controlBar.el_.insertBefore(t.controlBar.mirrorButton.el_, R.el_);
                n(b, ".vjs-mirror-button").onclick = function (e) {
                    !function (e) {
                        e.preventDefault();
                        var t = b.className
                            , s = !1;
                        t.indexOf("vjs-has-started") > 0 && (s = !0),
                            t.indexOf("vjs-ended") > 0 && (s = !1),
                            s && (d.hasClass(e.target, "vjs-mirrored") ? (d.removeClass(e.target, "vjs-mirrored"),
                                B.style.transform = "rotateY(0)",
                                B.style.webkitTransform = "rotateY(0)",
                                B.style.msTransform = "rotateY(0)") : (d.addClass(e.target, "vjs-mirrored"),
                                    B.style.transform = "rotateY(180deg)",
                                    B.style.webkitTransform = "rotateY(180deg)",
                                    B.style.msTransform = "rotateY(180deg)"))
                    }(e)
                }
            }
            t.trigger("nuevoReady"),
                b.style.visibility = "visible"
        } else
            b.innerHTML = "";
        function Ce(e) {
            var s = "vjs-rewind-control";
            e && (s = "vjs-rewind-control vjs-rewind-first"),
                10 !== h.rewindforward && (s = "vjs-rewind-control vjs-erewind vjs-rewind-first");
            var i = t.controlBar.addChild("button", {
                el: d.createEl("button", {
                    className: s + " vjs-control vjs-button"
                }, {
                    title: t.localize("Rewind"),
                    type: "button",
                    "aria-disabled": "false"
                })
            });
            i.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Rewind") + "</span>",
                e ? "party" == h.skin ? t.controlBar.el_.insertBefore(i.el_, t.controlBar.getChild("playToggle").el_.nextSibling) : t.controlBar.el_.insertBefore(i.el_, t.controlBar.getChild("playToggle").el_) : t.controlBar.el_.insertBefore(i.el_, t.controlBar.getChild("playToggle").el_.nextSibling),
                i.el_.onclick = function () {
                    t.rewind()
                }
                ,
                i.el_.ontouchstart = function () {
                    t.rewind()
                }
        }
        function xe(e) {
            try {
                if (t.isDisposed())
                    return
            } catch (e) { }
            if (!h.isDisposed) {
                "" == e && (e = n(b, ".vjs-play-control"));
                var s = e.className;
                if ("string" == typeof s || s instanceof String) {
                    if (s.indexOf("vjs-menu-item") > -1)
                        return;
                    if (s.indexOf("vjs-chapters-button") < 0 && t.controlBar.getChild("chaptersButton").unpressButton(),
                        s.indexOf("vjs-descriptions-button") < 0 && t.controlBar.getChild("descriptionsButton").unpressButton(),
                        s.indexOf("vjs-subs-caps-button") < 0)
                        try {
                            t.controlBar.getChild("subsCapsButton").unpressButton()
                        } catch (e) { }
                    if (s.indexOf("vjs-audio-button") < 0 && t.controlBar.getChild("audioTrackButton").unpressButton(),
                        s.indexOf("vjs-quality-button") < 0)
                        try {
                            var i = n(M, ".vjs-menu");
                            d.hasClass(i, "vjs-lock-showing") && d.removeClass(i, "vjs-lock-showing")
                        } catch (e) { }
                    if (d.hasClass(e, "vjs-cast"))
                        return !1;
                    if (s.indexOf("vjs-cog-button") < 0)
                        try {
                            i = n(b, ".vjs-menu-settings");
                            var a = n(b, ".vjs-zoom-menu")
                                , o = n(b, ".vjs-menu-speed")
                                , r = n(b, ".vjs-quality-menu")
                                , l = n(b, ".vjs-settings-home")
                                , v = n(b, ".vjs-cog-button");
                            a && d.addClass(a, "vjs-hidden"),
                                r && d.addClass(r, "vjs-hidden"),
                                o && d.addClass(o, "vjs-hidden"),
                                l && d.removeClass(l, "vjs-hidden"),
                                d.removeClass(i, "vjs-lock-showing"),
                                v.setAttribute("aria-expanded", "false"),
                                d.removeClass(v, "vjs-cog-active")
                        } catch (e) { }
                }
            }
        }
        function ke() {
            for (var e = b.offsetWidth, t = ["vjs-1600", "vjs-1280", "vjs-920", "vjs-600", "vjs-640", "vjs-480", "vjs-360", "vjs-320"], s = 0; s < t.length; s++)
                d.removeClass(b, t[s]);
            e < 360 ? (d.addClass(b, "vjs-480"),
                d.addClass(b, "vjs-360"),
                e < 320 && d.addClass(b, "vjs-320")) : e < 480 ? d.addClass(b, "vjs-480") : e < 640 ? (d.addClass(b, "vjs-640"),
                    e < 600 && d.addClass(b, "vjs-600")) : e < 920 ? d.addClass(b, "vjs-920") : e < 1280 ? d.addClass(b, "vjs-1280") : d.addClass(b, "vjs-1600")
        }
        function Ae() {
            try {
                for (var e = a(b, ".item-quality"), t = 0; t < e.length; t++)
                    e[t].ontouchstart = null,
                        e[t].onclick = null
            } catch (e) { }
            var s = n(b, ".vjs-menu-quality")
                , i = a(s, ".item-quality");
            for (t = 0; t < i.length; t++)
                i[t].parentNode.removeChild(i[t]);
            var o = n("nv,vjs-extend-quality");
            o && d.addClass(o, "vjs-hidden"),
                n(b, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = "",
                d.addClass(M, "vjs-hidden")
        }
        function Ie(e) {
            try {
                n(b, ".vjs-reset-zoom").innerHTML = parseInt(e) + "%",
                    n(b, ".zoom-label").innerHTML = parseInt(e) + "%"
            } catch (e) { }
        }
        function we() {
            var e = n(v = M, ".vjs-menu")
                , t = n(e, ".vjs-menu-content");
            if (h.res_num > 1) {
                var s = function (e) {
                    if (d.hasClass(e.target, "vjs-cast"))
                        return !1;
                    var s = n(e.target, ".vjs-control-text");
                    if (1 != d.hasClass(e.target, "vjs-quality-button"))
                        return !1;
                    e.stopPropagation(),
                        xe(e.target);
                    var i = n(e.target, ".vjs-menu");
                    if (d.hasClass(i, "vjs-lock-showing"))
                        e.target.setAttribute("aria-expanded", "false"),
                            d.removeClass(i, "vjs-lock-showing"),
                            s.removeAttribute("style");
                    else {
                        var a = n(b, ".vjs-control-bar")
                            , o = b.offsetHeight - a.offsetHeight - 10;
                        t.style.maxHeight = o + "px",
                            d.addClass(i, "vjs-lock-showing"),
                            e.target.setAttribute("aria-expanded", "true"),
                            s.style.opacity = "0"
                    }
                };
                v.onclick = function (e) {
                    s(e)
                }
                    ,
                    v.onmousemove = function (t) {
                        d.removeClass(e, "vjs-hidden")
                    }
                    ,
                    v.ontouchstart = function (e) {
                        s(e)
                    }
                    ,
                    v.onmouseover = function (e) {
                        var t = n(e.target, ".vjs-menu") || n(e.target.parent, ".vjs-menu");
                        if (t && 1 != d.hasClass(t, "vjs-lock-showing")) {
                            var s = n(e.target, ".vjs-control-text");
                            s && s.removeAttribute("style")
                        }
                    }
            }
            n(b, ".vjs-menu-settings");
            var i = n(b, ".vjs-settings-div")
                , a = n(b, ".vjs-menu-speed")
                , o = n(b, ".vjs-zoom-menu")
                , r = n(b, ".vjs-menu-quality")
                , l = n(b, ".vjs-settings-home");
            if (a) {
                a.onclick = function (e) {
                    e.stopPropagation()
                }
                    ;
                var v = n(b, ".vjs-extend-speed")
                    , c = function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            d.addClass(l, "vjs-hidden"),
                            d.removeClass(a, "vjs-hidden"),
                            o && d.addClass(o, "vjs-hidden"),
                            r && d.addClass(r, "vjs-hidden"),
                            i.style.width = z.speedMenu.width + "px",
                            i.style.height = z.speedMenu.height + "px"
                    };
                let e = !1;
                v.onclick = function (e) {
                    c(e)
                }
                    ,
                    v.ontouchmove = function () {
                        e = !0
                    }
                    ,
                    v.ontouchend = function (t) {
                        e ? e = !1 : c(t)
                    }
                    ;
                var u = n(a, ".vjs-settings-back");
                if (u) {
                    var f = function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            o && d.addClass(o, "vjs-hidden"),
                            a && d.addClass(a, "vjs-hidden"),
                            r && d.addClass(r, "vjs-hidden"),
                            d.removeClass(l, "vjs-hidden"),
                            i.style.width = z.cogMenu.width + "px",
                            i.style.height = z.cogMenu.height + "px",
                            Ie(100 * A)
                    };
                    let e = !1;
                    u.onclick = function (e) {
                        f(e)
                    }
                        ,
                        u.ontouchmove = function () {
                            e = !0
                        }
                        ,
                        u.ontouchend = function (t) {
                            e ? e = !1 : f(t)
                        }
                }
            }
            if (r && h.qualityMenu && h.res_num > 1) {
                d.removeClass(n(b, ".vjs-cog-menu-button"), "vjs-hidden"),
                    r.onclick = function (e) {
                        e.preventDefault(),
                            e.stopPropagation()
                    }
                    ;
                v = n(b, ".vjs-extend-quality");
                var p = function (e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        d.addClass(l, "vjs-hidden"),
                        d.removeClass(r, "vjs-hidden"),
                        o && d.addClass(o, "vjs-hidden"),
                        a && d.addClass(a, "vjs-hidden"),
                        i.style.height = z.qualityMenu.height + "px",
                        i.style.width = z.qualityMenu.width + "px"
                };
                let e = !1;
                if (v.onclick = function (e) {
                    p(e)
                }
                    ,
                    v.ontouchmove = function (t) {
                        e = !0
                    }
                    ,
                    v.ontouchend = function (t) {
                        e ? e = !1 : p(t)
                    }
                    ,
                    j = n(r, ".vjs-settings-back")) {
                    var m = function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            d.addClass(r, "vjs-hidden"),
                            o && d.addClass(o, "vjs-hidden"),
                            a && d.addClass(a, "vjs-hidden"),
                            d.removeClass(l, "vjs-hidden"),
                            i.style.height = z.cogMenu.height + "px",
                            i.style.width = z.cogMenu.width + "px"
                    };
                    let e = !1;
                    j.onclick = function (e) {
                        m(e)
                    }
                        ,
                        j.ontouchmove = function (t) {
                            e = !0
                        }
                        ,
                        j.ontouchend = function (t) {
                            e ? e = !1 : m(t)
                        }
                }
            }
            if (o) {
                v = n(b, ".vjs-extend-zoom");
                var j, g = function (e) {
                    e.preventDefault(),
                        e.stopPropagation(),
                        d.addClass(l, "vjs-hidden"),
                        d.removeClass(o, "vjs-hidden"),
                        a && d.addClass(a, "vjs-hidden"),
                        i.style.width = z.zoomMenu.width + "px",
                        i.style.height = z.zoomMenu.height + "px";
                    var t = (A - 1) / 4 * 100;
                    n(b, ".vjs-zoom-level").height = t + "%"
                };
                if (v.onclick = function (e) {
                    g(e)
                }
                    ,
                    v.ontouchmove = function (e) {
                        drag = !0
                    }
                    ,
                    v.ontouchend = function (e) {
                        drag ? drag = !1 : g(e)
                    }
                    ,
                    j = n(o, ".vjs-settings-back")) {
                    var y = function (e) {
                        e.preventDefault(),
                            e.stopPropagation(),
                            o && d.addClass(o, "vjs-hidden"),
                            a && d.addClass(a, "vjs-hidden"),
                            d.removeClass(l, "vjs-hidden"),
                            i.style.width = z.cogMenu.width + "px",
                            i.style.height = z.cogMenu.height + "px",
                            Ie(100 * A)
                    };
                    j.onclick = function (e) {
                        y(e)
                    }
                        ,
                        j.ontouchmove = function (e) {
                            drag = !0
                        }
                        ,
                        j.ontouchstart = function (e) {
                            drag ? drag = !1 : y(e)
                        }
                }
            }
            var C = function (e) {
                if (e.preventDefault(),
                    e.stopPropagation(),
                    !n(b, ".vjs-tech-chromecast")) {
                    _e();
                    var t = b.querySelector(".vjs-menu-settings");
                    t.className;
                    if (o && d.addClass(o, "vjs-hidden"),
                        a && d.addClass(a, "vjs-hidden"),
                        1 != d.hasClass(t, "vjs-lock-showing")) {
                        e.target.setAttribute("aria-expanded", "true"),
                            xe(e.target),
                            d.addClass(t, "vjs-lock-showing");
                        try {
                            n(L, ".vjs-control-text").style.opacity = 0
                        } catch (e) { }
                        d.addClass(e.target, "vjs-cog-active"),
                            d.removeClass(l, "vjs-hidden"),
                            i.style.width = z.cogMenu.width + "px",
                            i.style.height = z.cogMenu.height + "px",
                            Ie(100 * A)
                    } else
                        e.target.setAttribute("aria-expanded", "false"),
                            d.removeClass(e.target, "vjs-cog-active"),
                            x()
                }
            };
            function x() {
                o && d.addClass(o, "vjs-hidden"),
                    a && d.addClass(a, "vjs-hidden"),
                    d.removeClass($, "vjs-hidden"),
                    d.removeClass(X, "vjs-lock-showing"),
                    n(L, ".vjs-control-text").removeAttribute("style")
            }
            L.ontouchstart = function (e) {
                C(e)
            }
                ,
                L.onclick = function (e) {
                    C(e)
                }
                ,
                L.onmouseover = function (e) {
                    1 != d.hasClass(X, "vjs-lock-showing") && n(L, ".vjs-control-text").removeAttribute("style")
                }
        }
        function Te() {
            b.offsetWidth;
            var e = h.related.length;
            if (s())
                var t = .9;
            else
                t = .8;
            if (n(b, ".rel-block")) {
                d.removeClass(n(b, ".rel-block"), "rel-anim");
                var i = b.offsetWidth
                    , a = (b.offsetHeight,
                        i * t);
                a > 800 && (a = 800);
                var o = parseInt(n(b, ".vjs-related").style.maxWidth);
                isNaN(o) && (o = 0),
                    parseInt(o) < 100 && (o = 800),
                    a > o && (a = o);
                var r = n(b, ".vjs-related");
                r.style.maxWidth = "800px",
                    r.style.width = 100 * t + "%";
                var l = 3
                    , v = 2;
                e < 5 && 3 != e && (l = 2),
                    e < 4 && (v = 1),
                    a < 480 && (l = 2,
                        v = 1);
                var c = a / l * .5625
                    , u = a / l
                    , f = Math.ceil(e / 6);
                C > f && (C = f),
                    x = f,
                    2 == l && 2 == v && (x = Math.ceil(e / 4)),
                    2 == l && 1 == v && (x = Math.ceil(e / 2));
                var p = c * v;
                r.style.height = p + "px";
                var m = i / 2 - a / 2;
                if (r.style.top = .55 * b.offsetHeight - p / 2 + "px",
                    r.style.left = i / 2 - a / 2 + "px",
                    1 != s()) {
                    var j = n(b, ".vjs-arrow-prev")
                        , g = n(b, ".vjs-arrow-next")
                        , y = parseInt(n(b, ".vjs-prev").offsetWidth + 5);
                    j.style.left = m - y + "px",
                        g.style.left = a + m + "px",
                        d.removeClass(g, "vjs-disabled"),
                        d.removeClass(j, "vjs-disabled"),
                        C == x && d.addClass(g, "vjs-disabled"),
                        1 == C && d.addClass(j, "vjs-disabled")
                }
                if (C > 1) {
                    var k = r.offsetWidth
                        , A = (C - 1) * k;
                    n(b, ".rel-block").style.left = "-" + A + "px"
                }
                for (var I = 0, w = 0, T = b.querySelectorAll(".rel-parent"), _ = 0; _ < T.length; _++) {
                    var M = T[_];
                    M.style.left = I + "px",
                        1 == w && v > 1 ? (M.style.top = c + "px",
                            I += u) : M.style.top = 0,
                        1 == v && (I += u),
                        M.style.width = u + "px",
                        M.style.height = c + "px",
                        v > 1 ? 2 == ++w && (w = 0) : w = 0
                }
                d.addClass(n(b, ".rel-block"), "rel-anim")
            }
        }
        function _e() {
            var e = n(b, ".vjs-settings-home")
                , t = n(b, ".vjs-menu-speed")
                , s = n(b, ".vjs-zoom-menu")
                , i = n(b, ".vjs-menu-quality")
                , o = n(b, ".vjs-settings-div")
                , r = n(b, ".vjs-control-bar");
            d.addClass(r, "vjs-block"),
                o.style.width = "auto",
                o.style.height = "auto";
            var l = 10;
            "shaka" != h.skin && "pinko" != h.skin || (l = 5),
                "party" == h.skin && (l = 0);
            var v = b.offsetHeight - r.offsetHeight - l;
            v > 300 && (v = 300),
                o.style.maxHeight = v + "px",
                t && d.addClass(t, "vjs-hidden"),
                s && d.addClass(s, "vjs-hidden"),
                i && d.addClass(i, "vjs-hidden");
            var c = n(b, ".vjs-menu-settings");
            d.removeClass(c, "vjs-hidden"),
                d.addClass(c, "vjs-invisible"),
                z.cogMenu = {
                    width: c.clientWidth,
                    height: c.clientHeight
                },
                t && (d.addClass(e, "vjs-hidden"),
                    s && d.addClass(s, "vjs-hidden"),
                    i && d.addClass(i, "vjs-hidden"),
                    d.removeClass(t, "vjs-hidden"),
                    d.addClass(t, "vjs-invisible"),
                    z.speedMenu = {
                        width: t.clientWidth,
                        height: t.clientHeight
                    },
                    d.removeClass(t, "vjs-invisible"),
                    d.addClass(t, "vjs-hidden")),
                i && h.qualityMenu && (d.addClass(e, "vjs-hidden"),
                    s && d.addClass(s, "vjs-hidden"),
                    t && d.addClass(t, "vjs-hidden"),
                    d.removeClass(i, "vjs-hidden"),
                    d.addClass(i, "vjs-invisible"),
                    z.qualityMenu = {
                        width: i.offsetWidth + 10,
                        height: i.offsetHeight
                    },
                    d.removeClass(i, "vjs-invisible"),
                    d.addClass(i, "vjs-hidden"),
                    d.removeClass(n(b, ".vjs-cog-menu-button"), "vjs-hidden")),
                s && (d.addClass(e, "vjs-hidden"),
                    t && d.addClass(t, "vjs-hidden"),
                    i && d.addClass(i, "vjs-hidden"),
                    d.removeClass(s, "vjs-hidden"),
                    d.addClass(s, "vjs-invisible"),
                    z.zoomMenu = {
                        width: s.clientWidth,
                        height: s.clientHeight
                    },
                    d.removeClass(s, "vjs-invisible"),
                    d.addClass(s, "vjs-hidden")),
                d.removeClass(r, "vjs-block"),
                d.addClass(a(b, ".vjs-submenu"), "vjs-hidden"),
                d.removeClass(e, "vjs-hidden"),
                z.cogMenu.width,
                z.cogMenu.height,
                d.removeClass(c, "vjs-invisible"),
                d.removeClass(e, "vjs-hidden"),
                (h.speedMenu || h.zoomMenu || h.relatedMenu || h.shareMenu) && h.settingsButton && d.removeClass(n(b, ".vjs-cog-menu-button"), "vjs-hidden")
        }
        function Me(e, t) {
            var s = parseInt(e)
                , i = "";
            if (h.hdicon) {
                var a = "HD";
                s > 2159 && (a = "4K"),
                    s > 719 && (i = '<i class="vjs-hd-icon vjs-hd-home">' + a + "</i>",
                        '<i class="vjs-hd-icon vjs-hd-menu">' + a + "</i>")
            }
            h.qualityMenu ? n(b, ".quality-label").innerHTML = t + i : n(b, ".vjs-quality-button span").innerHTML = t + i
        }
        function Le(e, t) {
            return e.res && t.res ? +t.res - +e.res : 0
        }
        function Pe() {
            var e = t.textTracks()
                , s = [];
            if (t.textTracks().length > 0) {
                e = t.textTracks();
                for (var i = 0; i < e.length; i++) {
                    var n = new Object;
                    plTrack = e[i],
                        "captions" == plTrack.kind && (n.kind = plTrack.kind,
                            n.src = plTrack.src,
                            n.language = plTrack.language,
                            n.label = plTrack.label,
                            "showing" == plTrack.mode && (n.mode = "showing"),
                            s.push(n))
                }
            }
            s.length > 0 && (t.captions = s)
        }
        function Se() {
            var e = t.textTracks();
            if (e.length > 0)
                for (var s = 0; s < e.length; s++)
                    "metadata" == e[s].kind && e[s].src && t.trigger("medialoaded")
        }
        function He() {
            var e = t.textTracks();
            if (h.chapterMarkers) {
                var s = b.getElementsByClassName("vjs-marker");
                if (s)
                    for (; s.length > 0;)
                        s[0].parentNode.removeChild(s[0]);
                var i = !1;
                if ((e = t.textTracks()).length > 0)
                    for (var a = 0; a < e.length; a++)
                        if ("chapters" == e[a].kind && e[a].cues && 1 != i) {
                            i = !0;
                            var r = e[a]
                        }
                if (r) {
                    var l = r.cues;
                    if (l) {
                        try {
                            d.addClass(n(b, ".vjs-mouse-display"), "vjs-abs-hidden")
                        } catch (e) { }
                        var v = []
                            , c = n(b, ".vjs-progress-holder")
                            , u = t.duration();
                        for (a = 0; a < l.length; a++)
                            if (l[a].startTime > 0) {
                                v[a] = l[a].startTime;
                                var f = o("div", "vjs-marker")
                                    , p = o("div", "vjs-marker-inn")
                                    , m = o("div", "vjs-marker-tooltip");
                                f.appendChild(p),
                                    f.appendChild(m),
                                    m.innerHTML = l[a].text,
                                    f.style.left = v[a] / u * 100 + "%",
                                    c.appendChild(f),
                                    f.onmouseenter = function () {
                                        var e = this.offsetLeft
                                            , t = n(this, ".vjs-marker-tooltip").offsetWidth / 2
                                            , s = n(b, ".vjs-progress-control")
                                            , i = (s.offsetLeft,
                                                s.offsetWidth)
                                            , a = -1 * e + t
                                            , o = m.offsetWidth / 2 * -1 + (i - e);
                                        e - t < 0 ? m.style.left = a + "px" : e + t > i ? m.style.left = o + "px" : m.removeAttribute("style")
                                    }
                            }
                    }
                }
            }
        }
        function Be(e, s) {
            var i = o("div", "vjs-item");
            i.setAttribute("data-id", s);
            var n = o("div", "vjs-tmb");
            e.thumb ? n.style.backgroundImage = `url('${e.thumb}')` : e.poster && (n.style.backgroundImage = `url('${e.poster}')`),
                i.appendChild(n);
            var a = o("p");
            if (e.title)
                a.innerHTML = e.title;
            else {
                var r = "";
                if (e.audioInfo && null != typeof e.audioInfo.title && (r = e.audioInfo.title,
                    null != typeof e.audioInfo.artist && (r = e.audioInfo.artist + " - " + r)),
                    "" != r)
                    a.innerHTML = r;
                else {
                    var l = (d = e.sources[0].src).substring(d.lastIndexOf("/") + 1);
                    if (e.sources.length > 0)
                        for (j = 0; j < e.sources.length; j++) {
                            var d;
                            if (e.sources[j].default)
                                l = (d = e.sources[j].src).substring(d.lastIndexOf("/") + 1)
                        }
                    l = l.replace(/(\.[^/.]+)+$/, ""),
                        a.innerHTML = l
                }
            }
            if (i.appendChild(a),
                e.duration) {
                var v = o("span");
                v.innerHTML = e.duration,
                    i.appendChild(v)
            }
            var c = !1;
            function u(e) {
                if (!t.adPlaying) {
                    var s = e.target.getAttribute("data-id");
                    if (t.playlist.currentItem(parseInt(s)),
                        t.paused()) {
                        var i = t.play();
                        void 0 !== i && "function" == typeof i.then && i.then(null, function (e) { })
                    }
                }
            }
            return i.onclick = function (e) {
                e.stopPropagation(),
                    e.stopImmediatePropagation(),
                    u(e)
            }
                ,
                i.ontouchstart = function (e) {
                    c = !1
                }
                ,
                i.ontouchmove = function (e) {
                    c = !0
                }
                ,
                i.ontouchend = function (e) {
                    1 != c && (e.preventDefault(),
                        e.stopPropagation(),
                        e.stopImmediatePropagation(),
                        u(e))
                }
                ,
                i
        }
        function ze() {
            if (!n(b, ".vjs-extend-quality")) {
                var e = t.localize("Quality") + '<span class="quality-label"></span>'
                    , s = o("li", "vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden", e);
                n(b, ".vjs-settings-list").appendChild(s);
                var i = o("div", "vjs-submenu vjs-menu-quality vjs-hidden", '<ul class="vjs-menu-content"><li class="vjs-settings-back">' + t.localize("Quality") + "</li></ul>");
                n(b, ".vjs-settings-div").appendChild(i)
            }
        }
        function Ne() {
            qe(),
                A = 1,
                d.removeClass(N, "vjs-hidden");
            try {
                n(b, ".vjs-zoom-level").style.height = "0"
            } catch (e) { }
            n(b, ".vjs-tech");
            De(B, 1),
                B.style.top = 0,
                B.style.left = 0;
            n(b, ".vjs-menu-settings"),
                n(b, "vjs-vjs-settings-home");
            Ie(100);
            var t = n(b, ".vjs-zoom-parent");
            return 1 != d.hasClass(t, "vjs-hidden") && d.addClass(t, "vjs-hidden"),
                e.options.blockKeys = !1,
                !1
        }
        function qe() {
            var e = (A - 1) / 4 * 100
                , t = n(b, ".zoom-thumb");
            t && (t.style.height = e + "%")
        }
        function Oe(e, t) {
            if (localStorage)
                try {
                    localStorage[e] = t
                } catch (e) { }
        }
        function De(e, t) {
            qe(),
                e.style.transform = "scale(" + t + ")",
                e.style.webkitTransform = "scale(" + t + ")",
                e.style.msTransform = "scale(" + t + ")",
                d.removeClass(n(b, ".vjs-poster"), "vjs-hidden")
        }
    }
    String.prototype.dg13 = function () {
        return this.replace(/[a-zA-Z]/g, function (e) {
            return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
        })
    }
        ;
    var u = function (e) {
        this.ready(function () {
            c(this, e)
        })
    };
    return (e.registerPlugin || e.plugin)("nuevo", u),
        u
}),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).videojsPlaylist = t(e.videojs)
    }(this, function (e) {
        "use strict";
        e = e && e.hasOwnProperty("default") ? e.default : e;
        var t = !1
            , s = !0
            , i = function (e) {
                var t = e.playlist.autoadvance_;
                t.timeout && e.clearTimeout(t.timeout),
                    t.trigger && e.off("ended", t.trigger),
                    t.timeout = null,
                    t.trigger = null
            }
            , n = function e(t, s) {
                var n;
                (i(t),
                    "number" == typeof (n = s) && !isNaN(n) && n >= 0 && n < 1 / 0) ? (t.playlist.autoadvance_.delay = s,
                        t.playlist.autoadvance_.trigger = function () {
                            var n = function () {
                                return e(t, s)
                            };
                            t.one("play", n),
                                t.playlist.autoadvance_.timeout = t.setTimeout(function () {
                                    i(t),
                                        t.off("play", n),
                                        t.playlist.next()
                                }, 1e3 * s)
                        }
                        ,
                        t.one("ended", t.playlist.autoadvance_.trigger)) : t.playlist.autoadvance_.delay = null
            }
            , a = function (e, i) {
                var a = !e.paused() || e.ended();
                return i.playlistItemId_ && (e.playlist.currentPlaylistItemId_ = i.playlistItemId_),
                    e.changeSrc(i),
                    t && e.trigger("playlist_change", {
                        id: i.playlistItemId_
                    }),
                    1 != t && (t = !0),
                    e.ready(function () {
                        if (e.trigger("playlistitem", i.originalValue || i),
                            e.trigger("playlist_newitem", {
                                id: i.playlistItemId_
                            }),
                            s && (s = !1),
                            a) {
                            var t = e.play();
                            void 0 !== t && "function" == typeof t.then && t.then(null, function (e) { })
                        }
                        n(e, e.playlist.autoadvance_.delay)
                    }),
                    e
            }
            , o = function (e) {
                return !!e && "object" == typeof e
            }
            , r = function (e) {
                var t, s = [];
                return e.forEach(function (e) {
                    o(e) ? t = e : (t = Object(e)).originalValue = e,
                        s.push(t)
                }),
                    s
            }
            , l = function (e) {
                var t = 1;
                e.forEach(function (e) {
                    e.playlistItemId_ = t++
                })
            }
            , d = function (e, t) {
                for (var s = 0; s < e.length; s++)
                    if (e[s].playlistItemId_ === t)
                        return s;
                return -1
            }
            , v = function (e, t) {
                for (var s = 0; s < e.length; s++) {
                    var i = e[s].sources;
                    if (Array.isArray(i))
                        for (var n = 0; n < i.length; n++) {
                            var a = i[n];
                            if (a && (l = void 0,
                                d = void 0,
                                l = o = a,
                                d = r = t,
                                "object" == typeof o && (l = o.src),
                                "object" == typeof r && (d = r.src),
                                /^\/\//.test(l) && (d = d.slice(d.indexOf("//"))),
                                /^\/\//.test(d) && (l = l.slice(l.indexOf("//"))),
                                l === d))
                                return s
                        }
                }
                var o, r, l, d;
                return -1
            };
        var c = function (t, s) {
            this.ready(function () {
                !function (t, s, c) {
                    void 0 === c && (c = 0);
                    var u = null
                        , f = !1
                        , h = t.playlist = function (e, s) {
                            if (void 0 === s && (s = 0),
                                f)
                                throw new Error("do not call playlist() during a playlist change");
                            if (Array.isArray(e)) {
                                var i = Array.isArray(u) ? u.slice() : null
                                    , n = e.slice();
                                (u = n.slice()).filter(function (e) {
                                    return o(e)
                                }).length !== u.length && (u = r(u)),
                                    l(u),
                                    f = !0,
                                    f = !1,
                                    -1 !== s && h.currentItem(s),
                                    i && t.setTimeout(function () {
                                        t.trigger("playlistchange")
                                    }, 0)
                            }
                            return u.map(function (e) {
                                return e.originalValue || e
                            }).slice()
                        }
                        ;
                    t.on("loadstart", function () {
                        -1 === h.currentItem() && i(t)
                    }),
                        h.currentIndex_ = -1,
                        h.player_ = t,
                        h.autoadvance_ = {},
                        h.repeat_ = !1,
                        h.currentPlaylistItemId_ = null,
                        h.currentItem = function (e) {
                            if (f)
                                return h.currentIndex_;
                            if ("undefined" == h.currentIndex_ && (h.currentIndex_ = 0),
                                "number" == typeof e && h.currentIndex_ !== e && e >= 0 && e < u.length)
                                return h.currentIndex_ = e,
                                    a(h.player_, u[h.currentIndex_]),
                                    h.currentIndex_;
                            var t = h.player_.currentSrc() || "";
                            if (h.currentPlaylistItemId_) {
                                var s = d(u, h.currentPlaylistItemId_)
                                    , i = u[s];
                                if (i && Array.isArray(i.sources) && v([i], t) > -1)
                                    return h.currentIndex_ = s,
                                        h.currentIndex_;
                                h.currentPlaylistItemId_ = null
                            }
                            return h.currentIndex_ = h.indexOf(t),
                                h.currentIndex_
                        }
                        ,
                        h.contains = function (e) {
                            return -1 !== h.indexOf(e)
                        }
                        ,
                        h.indexOf = function (e) {
                            if ("string" == typeof e)
                                return v(u, e);
                            for (var t = Array.isArray(e) ? e : e.sources, s = 0; s < t.length; s++) {
                                var i = t[s];
                                if ("string" == typeof i)
                                    return v(u, i);
                                if (i.src)
                                    return v(u, i.src)
                            }
                            return -1
                        }
                        ,
                        h.remove = function (e) {
                            "number" == typeof e && e < u.length && (t.removeFromPlaylist(e),
                                u.splice(e, 1))
                        }
                        ,
                        h.insert = function (e) {
                            void 0 === e.src && void 0 === e.sources || (t.addToPlaylist(e),
                                u.push(e))
                        }
                        ,
                        h.insertAfter = function (e, s) {
                            e.src,
                                "number" == typeof s && s <= u.length && s > -1 && (t.addToPlaylist(e, "after", s),
                                    u.splice(s + 1, 0, e))
                        }
                        ,
                        h.insertBefore = function (e, s) {
                            e.src,
                                "number" == typeof s && s < u.length && s > -1 && (t.addToPlaylist(e, "before", s),
                                    u.splice(s, 0, e))
                        }
                        ,
                        h.currentIndex = function () {
                            return h.currentItem()
                        }
                        ,
                        h.lastIndex = function () {
                            return u.length - 1
                        }
                        ,
                        h.nextIndex = function () {
                            var e = h.currentItem();
                            if (-1 === e)
                                return -1;
                            var t = h.lastIndex();
                            return h.repeat_ && e === t ? 0 : Math.min(e + 1, t)
                        }
                        ,
                        h.previousIndex = function () {
                            var e = h.currentItem();
                            return -1 === e ? -1 : h.repeat_ && 0 === e ? h.lastIndex() : Math.max(e - 1, 0)
                        }
                        ,
                        h.first = function () {
                            if (!f) {
                                var e = h.currentItem(0);
                                if (u.length)
                                    return u[e].originalValue || u[e];
                                h.currentIndex_ = -1
                            }
                        }
                        ,
                        h.last = function () {
                            if (!f) {
                                var e = h.currentItem(h.lastIndex());
                                if (u.length)
                                    return u[e].originalValue || u[e];
                                h.currentIndex_ = -1
                            }
                        }
                        ,
                        h.next = function () {
                            if (!f && !t.adPlaying) {
                                var e = h.nextIndex();
                                if (e !== h.currentIndex_) {
                                    var s = h.currentItem(e);
                                    return u[s].originalValue || u[s]
                                }
                            }
                        }
                        ,
                        h.previous = function () {
                            if (!f && !t.adPlaying) {
                                var e = h.previousIndex();
                                if (e !== h.currentIndex_) {
                                    var s = h.currentItem(e);
                                    return u[s].originalValue || u[s]
                                }
                            }
                        }
                        ,
                        h.autoadvance = function (e) {
                            n(h.player_, e)
                        }
                        ,
                        h.repeat = function (t) {
                            return void 0 === t ? h.repeat_ : "boolean" == typeof t ? (h.repeat_ = !!t,
                                h.repeat_) : void e.log.error("videojs-playlist: Invalid value for repeat", t)
                        }
                        ,
                        h.list = function () {
                            return u
                        }
                        ,
                        h.sort = function (e) {
                            u.length && u.sort(e)
                        }
                        ,
                        Array.isArray(s) ? h(s.slice(), c) : u = []
                }(this, t, s),
                    this.playlist.autoadvance(0),
                    this.trigger("playlistready")
            })
        };
        return (e.registerPlugin || e.plugin)("playlist", c),
            c
    }),
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).vroll = t(e.videojs)
    }(this, function (e) {
        function t(t, s) {
            var i, n, a, o, r, l = [], d = !1, v = !1, c = !1, u = !1, f = !1, h = !1, p = !1, m = "undefined", j = !1, g = !1, y = 0, b = t.$(".vjs-tech");
            e.isAd = !1;
            var C, x, k = e.dom, A = t.el(), I = .1;
            function w(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            var T = function (e, t) {
                try {
                    return e.querySelector(t)
                } catch (e) {
                    return !1
                }
            }
                , _ = function (e, t, s) {
                    var i = document.createElement(e);
                    return void 0 !== t && "" !== t && (i.className = t),
                        i
                };
            if (!w(s)) {
                var M = s
                    , L = 0;
                if (M.src && M.href && "undefined" !== M.offset && M.src.length > 5) {
                    L = 0;
                    try {
                        L = M.offset.indexOf("%")
                    } catch (e) { }
                    L > 0 && g || ((s = [])[0] = M)
                }
            }
            if (w(s))
                for (var P = 0, S = 0; S < s.length; S++) {
                    var H = s[S];
                    if (H.src && "undefined" !== H.offset) {
                        H.loaded = !1,
                            P = 0;
                        try {
                            P = l[S].offset.indexOf("%")
                        } catch (e) { }
                        P > 0 && g || l.push(H)
                    }
                }
            t.ready(function () {
                if (C = T(t.el_, ".vjs-control-bar"),
                    spinner = T(t.el_, ".vjs-loading-spinner"),
                    l.length > 0) {
                    n = _("a", "roll-blocker vjs-hidden"),
                        o = _("div", "vjs-roll-controls vjs-hidden");
                    var s = '<div class="roll-btn roll-play-pause roll-paused"></div><div class="roll-countdown">' + t.localize("Advertisement") + '</div><div class="roll-btn roll-fscreen roll-non-fullscreen"></div>';
                    function M(e) {
                        var t = e.el().querySelector(".vjs-tech")
                            , s = {
                                ended: e.ended(),
                                src: e.currentSrc(),
                                currentTime: e.currentTime(),
                                type: e.currentType(),
                                currentSource: e.currentSource(),
                                playing: !e.paused(),
                                suppressedTracks: function (e) {
                                    var t = e.remoteTextTracks ? e.remoteTextTracks() : [];
                                    t && w(t.tracks_) && (t = t.tracks_);
                                    w(t) || (t = []);
                                    var s = [];
                                    return t.forEach(function (e) {
                                        s.push({
                                            track: e,
                                            mode: e.mode
                                        }),
                                            e.mode = "disabled"
                                    }),
                                        s
                                }(e)
                            };
                        return s.ended && (s.currentTime = e.duration() + 1),
                            t && (s.style = t.getAttribute("style")),
                            s
                    }
                    function L() {
                        r.suppressedTracks.forEach(function (e) {
                            e.track.mode = e.mode
                        })
                    }
                    s += '<div class="roll-btn roll-mute roll-non-muted"></div>',
                        o.innerHTML = s,
                        t.el_.appendChild(n),
                        t.el_.appendChild(o),
                        t.vroll.reset = function () {
                            f = !1,
                                v = !1,
                                k.removeClass(A, "vjs-ad-playing"),
                                t.one("playing", function (e) {
                                    for (var t = 0; t < l.length; t++)
                                        l[t].loaded = !1
                                })
                        }
                        ,
                        0 == l[0].offset && !0 !== h && (t.offline || (h = !0,
                            t.isPreroll = !0,
                            t.$(".vjs-tech").removeAttribute("poster"),
                            k.addClass(C, "vjs-hidden"),
                            t.$(".vjs-tech").style.opacity = "0")),
                        t.on("loadeddata", function () {
                            if (t.isOffline)
                                f = !1;
                            else if (!f) {
                                f = !0;
                                t.el_.className;
                                if (!(g = t.duration() === 1 / 0 || "8" === e.browser.IOS_VERSION && 0 === t.duration()))
                                    var s = t.duration();
                                if (l.length > 0 && 1 != c) {
                                    c = !0;
                                    for (var h = 0; h < l.length; h++)
                                        if (!g) {
                                            var w = 0;
                                            try {
                                                w = l[h].offset.indexOf("%", 0)
                                            } catch (e) { }
                                            if (w > 0) {
                                                var P = parseInt(l[h].offset, 10);
                                                l[h].offset = 100 == P ? s : s * (P / 100)
                                            } else
                                                l[h].offset = parseInt(l[h].offset, 10)
                                        }
                                }
                                if (l.length > 0) {
                                    function S() {
                                        d ? (clearTimeout(x),
                                            p = !1) : (H(I += .5),
                                                x = setTimeout(S, 500))
                                    }
                                    function H(e) {
                                        if (!j && !d)
                                            for (var s = e, i = 0; i < l.length; i++) {
                                                var c = l[i];
                                                if (s >= c.offset && !0 !== j && !0 !== l[i].loaded) {
                                                    j = !0,
                                                        l[i].loaded = !0,
                                                        m = l[i],
                                                        v = !0;
                                                    var u = {
                                                        src: c.src,
                                                        type: c.type
                                                    };
                                                    r = M(t),
                                                        t.src(u),
                                                        k.addClass(C, "vjs-abs-hidden"),
                                                        n.className = "roll-blocker",
                                                        void 0 !== c.href ? n.innerHTML = '<a href="' + m.href + '" target="_blank"></a>' : n.innerHTML = "",
                                                        o.className = "vjs-roll-controls",
                                                        d = !0,
                                                        k.addClass(A, "vjs-ad-playing"),
                                                        t.play(),
                                                        t.one("loadeddata", B);
                                                    try {
                                                        t._el.removeChild(a)
                                                    } catch (e) { }
                                                    (y = m.skip > 0 ? parseInt(m.skip, 10) : 0) > 0 && O()
                                                }
                                            }
                                    }
                                    t.on("timeupdate", function () {
                                        e.dom.hasClass(A, "vjs-has-started") && !0 !== d && !0 !== t.isOffline && !0 !== g && H(t.currentTime())
                                    }),
                                        g && (t.on("pause", function (e) {
                                            clearTimeout(x),
                                                p = !1
                                        }),
                                            t.on("playing", function (s) {
                                                e.dom.hasClass(A, "vjs-has-started") && !0 !== j && l.length > 0 && !0 !== t.isOffline && !0 !== p && (p = !0,
                                                    x = setTimeout(S, 500))
                                            }));
                                    var B = function (e) {
                                        t.$(".vjs-tech").style.opacity = "1",
                                            t.off("loadeddata", B),
                                            t.on("timeupdate", W),
                                            t.on("ended", D),
                                            t.on("error", E),
                                            t.on("playing", U)
                                    };
                                    n.onclick = function () {
                                        t.trigger("vroll", {
                                            id: m.id,
                                            action: "clicked"
                                        })
                                    }
                                        ;
                                    var z = function () {
                                        return t.paused()
                                    }
                                        , N = function () {
                                            return t.muted()
                                        };
                                    function q() {
                                        try {
                                            i.removeChild(a)
                                        } catch (e) { }
                                        try {
                                            t.el_.removeChild(a)
                                        } catch (e) { }
                                        var s = m.offset;
                                        m.loaded = !0,
                                            m = void 0;
                                        var c = !1;
                                        k.addClass(A, "vjs-has-started");
                                        for (var u = 0; u < l.length; u++) {
                                            if (l[u].offset == s && 1 != l[u].loaded) {
                                                j = !0,
                                                    d = !0,
                                                    l[u].loaded = !0,
                                                    e.isAd = !0,
                                                    k.addClass(A, "vjs-ad-playing"),
                                                    m = l[u],
                                                    v = !0;
                                                var f = {
                                                    src: m.src,
                                                    type: m.type
                                                };
                                                t.src(f),
                                                    t.load(),
                                                    k.addClass(C, "vjs-abs-hidden"),
                                                    n.className = "roll-blocker",
                                                    void 0 !== m.href ? n.innerHTML = '<a href="' + m.href + '" target="_blank"></a>' : n.innerHTML = "",
                                                    o.className = "vjs-roll-controls",
                                                    t.play(),
                                                    t.one("loadeddata", B);
                                                try {
                                                    t._el.removeChild(a)
                                                } catch (e) { }
                                                (y = m.skip > 0 ? parseInt(m.skip, 10) : 0) > 0 && O(),
                                                    c = !0
                                            }
                                            if (c)
                                                break
                                        }
                                        !0 !== c && (t.off("timeupdate", W),
                                            t.off("ended", D),
                                            t.off("error", E),
                                            t.off("playing", U),
                                            j = !1,
                                            v = !1,
                                            k.removeClass(A, "vjs-ad-playing"),
                                            d = !1,
                                            n.className = "roll-blocker vjs-hidden",
                                            k.removeClass(C, "vjs-abs-hidden"),
                                            k.removeClass(C, "vjs-hidden"),
                                            o.className = "vjs-roll-controls vjs-hidden",
                                            k.addClass(spinner, "vjs-abs-hidden"),
                                            k.addClass(A, "vjs-has-started"),
                                            b.poster = "",
                                            function (t, s) {
                                                var i = t.el().querySelector(".vjs-tech");
                                                "style" in r && i.setAttribute("style", r.style || ""),
                                                    t.one("contentloadedmetadata", L),
                                                    i.poster = "",
                                                    t.src(r.currentSource),
                                                    t.load(),
                                                    L(),
                                                    r.ended ? e.isAd = !1 : g ? t.play() : (t.currentTime(r.currentTime),
                                                        t.play())
                                            }(t),
                                            t.$(".vjs-tech").style.opacity = "1",
                                            e.isAd = !1)
                                    }
                                    function O() {
                                        try {
                                            i.removeChild(a)
                                        } catch (e) { }
                                        try {
                                            A.removeChild(a)
                                        } catch (e) { }
                                        a = _("div", "roll-skip-button"),
                                            u = !1,
                                            t.el_.appendChild(a),
                                            a.onclick = function (e) {
                                                !function (e) {
                                                    e.preventDefault(),
                                                        e.stopPropagation(),
                                                        (" " + a.className + " ").indexOf(" enabled ") >= 0 && (t.trigger("vroll", {
                                                            id: m.id,
                                                            action: "skipped"
                                                        }),
                                                            q())
                                                }(e)
                                            }
                                    }
                                    function D() {
                                        j && (t.trigger("vroll", {
                                            id: m.id,
                                            action: "completed"
                                        }),
                                            q())
                                    }
                                    function E() {
                                        j && (t.trigger("vroll", {
                                            id: m.id,
                                            action: "error"
                                        }),
                                            q(),
                                            v = !1)
                                    }
                                    function W() {
                                        if (j && !z()) {
                                            var e = t.duration();
                                            !function (e, s) {
                                                var i = s - (e = e > 0 ? e : 0)
                                                    , n = Math.floor(i / 60)
                                                    , r = Math.floor(i % 60);
                                                if (r.toString().length < 2 && (r = "0" + r),
                                                    !isNaN(n) && !isNaN(r) && (T(o, ".roll-countdown").innerHTML = t.localize("Advertisement") + "<span>" + n + ":" + r + "</span>",
                                                        y > 0)) {
                                                    var l = Math.ceil(y - e)
                                                        , d = "";
                                                    if (l > 0)
                                                        if (!0 !== u)
                                                            u = !0,
                                                                d += "<span>" + t.localize("Skip Ad in") + ' <i id="time_left">' + l + "</i></span>",
                                                                a.innerHTML = d;
                                                        else
                                                            try {
                                                                document.getElementById("time_left").innerHTML = l
                                                            } catch (e) { }
                                                    else
                                                        u && "roll-skip-button enabled" !== a.className && (a.innerHTML = "<span>" + t.localize("Skip Now!") + '</span><i class="circle"></i>',
                                                            a.className = "roll-skip-button enabled")
                                                }
                                            }(t.currentTime(), e)
                                        }
                                    }
                                    function U() {
                                        j && v && (t.trigger("vroll", {
                                            id: m.id,
                                            action: "start"
                                        }),
                                            v = !1)
                                    }
                                    var R = T(o, ".roll-play-pause");
                                    function F(e) {
                                        e.preventDefault(),
                                            e.stopImmediatePropagation(),
                                            z() ? (t.play(),
                                                k.removeClass(R, "roll-playing"),
                                                k.addClass(R, "roll-paused"),
                                                t.trigger("vroll", {
                                                    id: m.id,
                                                    action: "resumed"
                                                })) : (t.pause(),
                                                    k.removeClass(R, "roll-paused"),
                                                    k.addClass(R, "roll-playing"),
                                                    t.trigger("vroll", {
                                                        id: m.id,
                                                        action: "paused"
                                                    }))
                                    }
                                    R.onclick = function (e) {
                                        F(e)
                                    }
                                        ,
                                        R.ontouchstart = function (e) {
                                            F(e)
                                        }
                                        ;
                                    var Y = T(o, ".roll-mute");
                                    function K(e) {
                                        e.preventDefault(),
                                            e.stopImmediatePropagation(),
                                            N() ? (t.muted(!1),
                                                k.addClass(Y, "roll-non-muted"),
                                                k.removeClass(Y, "roll-muted")) : (t.muted(!0),
                                                    k.addClass(Y, "roll-muted"),
                                                    k.removeClass(Y, "roll-non-muted"))
                                    }
                                    Y.onclick = function (e) {
                                        K(e)
                                    }
                                        ,
                                        Y.ontouchstart = function (e) {
                                            K(e)
                                        }
                                        ;
                                    var Q = T(o, ".roll-fscreen");
                                    function Z(s) {
                                        if (s.preventDefault(),
                                            s.stopImmediatePropagation(),
                                            t.isFullscreen())
                                            t.exitFullscreen();
                                        else {
                                            if (e.browser.IS_IOS && d)
                                                return;
                                            t.requestFullscreen()
                                        }
                                    }
                                    Q.onclick = function (e) {
                                        Z(e)
                                    }
                                        ,
                                        Q.ontouchstart = function (e) {
                                            Z(e)
                                        }
                                        ,
                                        t.on("fullscreenchange", function () {
                                            t.isFullscreen() ? (k.addClass(Q, "roll-fullscreen"),
                                                k.removeClass(Q, "roll-non-fullscreen")) : (k.addClass(Q, "roll-non-fullscreen"),
                                                    k.removeClass(Q, "roll-fullscreen"))
                                        })
                                }
                            }
                        })
                }
            })
        }
        var s = function (e) {
            this.ready(function () {
                t(this, e)
            })
        };
        return ((e = e && e.hasOwnProperty("default") ? e.default : e).registerPlugin || e.plugin)("vroll", s),
            s
    });
