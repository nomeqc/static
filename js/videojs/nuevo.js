function setEvent(e) {
    if ("ontouchstart"in window || navigator.msMaxTouchPoints)
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
}
function sortByKey(e, t) {
    return e.sort(function(e, s) {
        var i = e[t]
          , n = s[t];
        return i < n ? -1 : i > n ? 1 : 0
    })
}
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).SmScroll = t()
}(this, function(e, t) {
    t = document,
    e = window;
    var s = window.requestAnimationFrame || e.setImmediate || function(e) {
        return setTimeout(e, 0)
    }
    ;
    function i(e) {
        Object.prototype.hasOwnProperty.call(e, "data-simple-scrollbar") || Object.defineProperty(e, "data-simple-scrollbar", {
            value: new r(e)
        })
    }
    function n(i) {
        for (this.target = i,
        this.direction = e.getComputedStyle(this.target).direction,
        this.bar = t.createElement("div"),
        this.bar.setAttribute("class", "ss-scroll"),
        this.wrapper = t.createElement("div"),
        this.wrapper.setAttribute("class", "ss-wrapper"),
        this.el = t.createElement("div"),
        this.el.setAttribute("class", "ss-content"),
        this.el.style.width = i.offsetWidth + 20 + "px",
        this.wrapper.appendChild(this.el); this.target.firstChild; )
            this.el.appendChild(this.target.firstChild);
        this.target.appendChild(this.wrapper),
        this.wrapper.appendChild(this.bar),
        function(e, i) {
            var n;
            function a(e) {
                var t = e.pageY - n;
                n = e.pageY,
                s(function() {
                    i.el.scrollTop += t / i.scrollRatio
                })
            }
            function r() {
                e.classList.remove("ss-grabbed"),
                t.body.classList.remove("ss-grabbed"),
                t.removeEventListener("mousemove", a),
                t.removeEventListener("mouseup", r)
            }
            e.addEventListener("mousedown", function(s) {
                return n = s.pageY,
                e.classList.add("ss-grabbed"),
                t.body.classList.add("ss-grabbed"),
                t.addEventListener("mousemove", a),
                t.addEventListener("mouseup", r),
                !1
            })
        }(this.bar, this),
        this.moveBar(),
        e.addEventListener("resize", this.moveBar.bind(this)),
        this.el.addEventListener("scroll", this.moveBar.bind(this)),
        this.el.addEventListener("mouseenter", this.moveBar.bind(this)),
        this.target.classList.add("ss-container");
        var n = e.getComputedStyle(i);
        "0px" === n.height && "0px" !== n["max-height"] && (i.style.height = n["max-height"])
    }
    function a() {
        for (var e = t.querySelectorAll("*[ss-container]"), s = 0; s < e.length; s++)
            i(e[s])
    }
    n.prototype = {
        moveBar: function(e) {
            var t = this.el.scrollHeight
              , i = this.el.clientHeight
              , n = this;
            this.scrollRatio = i / t,
            s(function() {
                n.scrollRatio >= 1 ? n.bar.classList.add("ss-hidden") : (n.bar.classList.remove("ss-hidden"),
                n.bar.style.cssText = "height:" + Math.max(100 * n.scrollRatio, 10) + "%; top:" + n.el.scrollTop / t * 100 + "%;")
            })
        }
    },
    document.addEventListener("DOMContentLoaded", a),
    n.initEl = i,
    n.initAll = a;
    var r = n;
    return r
});
var vjs_find = function(e, t) {
    try {
        return e.querySelector(t)
    } catch (e) {
        return !1
    }
}
  , vjs_mfind = function(e, t) {
    try {
        return e.querySelectorAll(t)
    } catch (e) {
        return !1
    }
}
  , vjs_inArray = function(e, t) {
    if (t.indexOf)
        return t.indexOf(e);
    for (var s = 0, i = t.length; s < i; s++)
        if (t[s] === e)
            return s;
    return -1
}
  , vjs_El = function(e, t, s) {
    var i = document.createElement(e);
    return void 0 !== t && "" !== t && (i.className = t),
    void 0 !== s && "" !== s && (i.innerHTML = s),
    i
};
String.prototype.dg13 = function() {
    return this.replace(/[a-zA-Z]/g, function(e) {
        return String.fromCharCode((e <= "Z" ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
    })
}
;
var dm = document.location.hostname.toLowerCase()
  , dm2 = window.location.hostname.toLowerCase()
  , doms = ["av.bp.rtqrravyab", "gfbuynpby", "rupnp"];
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).nuevo = t(e.videojs)
}(this, function(e) {
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t = document.createElement("div");
    document.body.appendChild(t);
    var s = ["nuevo", "chrome", "party", "treso", "roundal", "pinko", "jwlike", "shaka"]
      , i = e.dom;
    for (var n in s)
        t.className = "vjs-" + s[n],
        13 == t.offsetWidth && ("treso" == s[n] ? (e.options.skinname = "treso",
        e.options.controlBar = {
            children: ["progressControl", "playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "durationDisplay", "volumePanel", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "chrome" == s[n] ? (e.options.skinname = "chrome",
        e.options.controlBar = {
            children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "timeDivider", "durationDisplay", "customControlSpacer", "progressControl", "volumePanel", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "party" == s[n] ? (e.options.skinname = "party",
        e.options.controlBar = {
            children: ["playToggle", "liveDisplay", "seekToLive", "progressControl", "currentTimeDisplay", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "roundal" == s[n] ? (e.options.skinname = "roundal",
        e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "progressControl", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "pinko" == s[n] ? (e.options.skinname = "pinko",
        e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "progressControl", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "shaka" == s[n] ? (e.options.skinname = "shaka",
        e.options.controlBar = {
            children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "jwlike" == s[n] ? (e.options.skinname = "jwlike",
        e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: ["progressControl", "playToggle", "liveDisplay", "seekToLive", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
        }) : "nuevo" == s[n] && (e.options.skinname = "nuevo",
        e.options.controlBar = {
            volumePanel: {
                inline: !1,
                vertical: !0
            },
            children: ["playToggle", "liveDisplay", "seekToLive", "currentTimeDisplay", "timeDivider", "progressControl", "durationDisplay", "customControlSpacer", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "volumePanel", "pictureInPictureToggle", "fullscreenToggle"]
        }));
    function a(t, s) {
        var n = t.tech_
          , a = new Array
          , r = e.mergeOptions({
            videoInfo: !1,
            infoSize: 18,
            infoBold: !1,
            infoAlign: "left",
            infoIcon: "",
            infoText: "",
            infoIconURL: "",
            infoFont: "",
            ttStyle: !1,
            zoomMenu: !0,
            relatedMenu: !0,
            rateMenu: !0,
            hdicon: !0,
            shareMenu: !0,
            zoomWheel: !1,
            zoomInfo: !0,
            mirrorButton: !1,
            chapterMarkers: !0,
            contextMenu: !0,
            timetooltip: !0,
            mousedisplay: !0,
            errordisplay: !0,
            related: {},
            logo: "",
            logoalpha: 100,
            logocontrolbar: "",
            logoposition: "LT",
            logooffsetX: 10,
            logooffsetY: 10,
            logourl: "",
            shareUrl: "",
            url: "",
            shareTitle: "",
            title: "",
            embed: "",
            shareEmbed: "",
            endAction: "",
            pubid: "",
            slideImage: "",
            slideWidth: 192,
            slideHeight: 108,
            slideType: "vertical",
            sharemethod: "auto",
            limit: 0,
            limiturl: "",
            limitimage: "",
            limitmessage: "Watch full video on",
            dashQualities: !0,
            hlsQualities: !0,
            minResolution: 2,
            theaterButton: !1,
            autoplay: !1,
            resume: !0,
            video_id: "",
            playlistNavigation: !1,
            playlistUI: !0,
            playlistShow: !0,
            playlistAutoHide: !0,
            playlist: !1,
            playlistRepeat: !1,
            playlistFirst: !1,
            contextIcon: "",
            contextText: "",
            contextUrl: "",
            res_num: 0,
            target: "_self",
            buttonRewind: !0,
            buttonForward: !1,
            metatitle: "",
            metasubtitle: ""
        }, s)
          , o = t.el()
          , l = 0
          , d = 0
          , v = 0
          , c = 1;
        r.isAddon = !1,
        r.newstate = 4,
        r.oldstate = 4,
        r.events = {};
        var u, f = t.id(), h = (o = t.el(),
        !1), p = (n = t.$(".vjs-tech"),
        this), j = new Array, m = (new Array,
        new Array,
        new Array,
        !1);
        "" != r.shareUrl && (r.url = r.shareUrl),
        "" != r.shareTitle && (r.title = r.shareTitle),
        "" != r.shareEmbed && (r.embed = r.shareEmbed);
        for (var g = 0; g < doms.length; g++) {
            var y = doms[g].dg13();
            if (y = y.split("").reverse().join(""),
            dm.indexOf(y) > -1 || dm2.indexOf(y) > -1) {
                m = !0;
                break
            }
        }
        m = !0;
        if (!0 === m) {
            1 != e.browser.TOUCH_ENABLED ? document.body.classList.add("no-touch") : r.contextMenu = !1;
            try {
                vjs_find(o, ".vjs-custom-control-spacer").innerHTML = ""
            } catch (e) {}
            o.style.visibility = "visible";
            var b = vjs_find(o, ".vjs-big-play-button");
            !0 !== r.contextMenu && o.addEventListener("contextmenu", function(e) {
                t.trigger("rightClick"),
                e.preventDefault()
            }, !1),
            r.related.length > 1 || (r.lang_menu_related = "");
            var _ = "pictureInPictureToggle"
              , C = !0
              , A = vjs_find(o, ".vjs-picture-in-picture-control");
            "undefined" != A && null !== A || (C = !1,
            _ = "fullscreenToggle"),
            !document.pictureInPictureEnabled && C && (i.addClass(A, "vjs-hidden"),
            _ = "fullscreenToggle");
            var k = t.controlBar.addChild("button", {
                el: e.dom.createEl("div", {
                    className: "vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden"
                }, {
                    title: t.localize("Quality"),
                    "aria-haspopup": "true",
                    "aria-expanded": "false"
                })
            });
            t.controlBar.el_.insertBefore(k.el_, t.controlBar.getChild(_).el_);
            var T = k.el_
              , w = '<span class="vjs-no-pointer"></span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul><div class="vjs-menu-header"><span class="vjs-header-title">' + t.localize("Quality") + '</span><div class="vjs-close-btn"></div></div></div>';
            if (T.innerHTML = w,
            r.buttonForward) {
                r.buttonRewind && se(!0);
                var x = t.controlBar.addChild("button", {
                    el: e.dom.createEl("button", {
                        className: "vjs-forward-control vjs-control vjs-button"
                    }, {
                        title: t.localize("Forward"),
                        type: "button",
                        "aria-disabled": "false"
                    })
                });
                x.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Rewind") + "</span>",
                "party" == e.options.skinname && r.buttonRewind ? t.controlBar.el_.insertBefore(x.el_, vjs_find(o, ".vjs-rewind-control").nextSibling) : t.controlBar.el_.insertBefore(x.el_, t.controlBar.getChild("playToggle").el_.nextSibling),
                x.el_.onclick = function() {
                    I()
                }
                ,
                x.el_.ontouchstart = function() {
                    I()
                }
                ;
                var I = function() {
                    if (t.duration() > 0) {
                        var e = t.currentTime() + 10;
                        t.duration() > 0 && (e > t.duration() ? t.currentTime(t.duration()) : t.currentTime(e))
                    }
                }
            } else
                r.buttonRewind && se();
            var E = e.dom.createEl("div", {
                className: "vjs-vast-label"
            });
            E.innerHTML = t.localize("Advertisement"),
            "party" == e.options.skinname ? t.controlBar.el_.insertBefore(E, t.controlBar.getChild("currentTimeDisplay").el_) : t.controlBar.el_.insertBefore(E, t.controlBar.getChild("playToggle").el_.nextSibling);
            var L = t.controlBar.addChild("button", {
                el: e.dom.createEl("div", {
                    className: "vjs-control vjs-button vjs-cog-menu-button vjs-hidden"
                }, {
                    title: t.localize("Settings"),
                    id: "settings_button",
                    "aria-live": "polite",
                    "aria-disabled": "false"
                })
            });
            t.controlBar.el_.insertBefore(L.el_, t.controlBar.getChild(_).el_);
            var P = vjs_find(o, ".vjs-cog-menu-button");
            if (r.theaterButton) {
                var M = t.controlBar.addChild("button", {
                    el: e.dom.createEl("div", {
                        className: "vjs-control vjs-button vjs-control-button vjs-mode-control"
                    }, {
                        title: t.localize("Theater mode"),
                        "aria-live": "polite",
                        "aria-disabled": "false"
                    })
                });
                t.controlBar.el_.insertBefore(M.el_, t.controlBar.getChild("fullscreenToggle").el_),
                M.el_.innerHTML = "<span></span>",
                M.el_.addEventListener(setEvent("click"), function(e) {
                    e.preventDefault(),
                    e.stopPropagation();
                    var s = M.el_;
                    i.hasClass(s, "vjs-mode") ? (i.removeClass(s, "vjs-mode"),
                    t.trigger("mode", "normal")) : (i.addClass(s, "vjs-mode"),
                    t.trigger("mode", "large"))
                }, !1)
            }
            var B = vjs_El("div", "vjs-menu-settings vjs-hidden")
              , D = vjs_El("div", "vjs-menu-div vjs-settings-div");
            B.appendChild(D);
            var S = vjs_El("div", "vjs-submenu vjs-settings-home");
            D.appendChild(S);
            var z = vjs_El("ul", "vjs-menu-content vjs-settings-list");
            S.appendChild(z),
            vjs_find(o, ".vjs-control-bar").appendChild(B),
            ie(),
            window.addEventListener("resize", function() {
                ie(),
                oe(),
                le(),
                de(),
                vjs_find(o, "vjs-menu-settings") && i.addClass(vjs - menu - r, "vjs-hidden");
                var e = vjs_find(o, ".vjs-quality-button");
                if (e) {
                    var t = vjs_find(e, ".vjs-menu");
                    t && "block" == t.style.display && (t.style.display = "none")
                }
            }, !1);
            try {
                vjs_find(o, "video").controls = !1
            } catch (e) {}
            if ("" == r.title && (r.title = r.metatitle = document.title),
            "" == r.infoText && (r.infoText = r.metatitle),
            1 != r.errordisplay && i.addClass(vjs_find(o, ".vjs-error-display"), "vjs-abs-hidden"),
            1 != r.timetooltip) {
                var H = vjs_find(o, ".vjs-play-progress")
                  , N = vjs_find(H, ".vjs-time-tooltip");
                i.addClass(N, "vjs-abs-hidden")
            }
            if (1 != r.mousedisplay && i.addClass(vjs_find(o, ".vjs-mouse-display"), "vjs-abs-hidden"),
            r.logocontrolbar) {
                var O = vjs_El("img")
                  , W = !1;
                O.src = r.logocontrolbar,
                O.onload = function() {
                    if ("naturalHeight"in this ? this.naturalHeight + this.naturalWidth === 0 && (W = !0) : this.width + this.height == 0 && (W = !0),
                    1 != W) {
                        var e = vjs_El("div", "vjs-logo-bar");
                        if ("" !== r.logourl) {
                            var s = vjs_El("a");
                            s.href = r.logourl,
                            s.target = r.target,
                            s.onclick = function(e) {
                                r.waslink = !1
                            }
                            ,
                            s.ontouchstart = function(e) {
                                r.waslink = !1
                            }
                            ,
                            r.logotitle && s.setAttribute("title", r.logotitle),
                            s.appendChild(O),
                            e.appendChild(s),
                            e.style.cursor = "pointer"
                        } else
                            e.appendChild(O);
                        t.controlBar.el().insertBefore(e, t.controlBar.getChild("fullscreenToggle").el_)
                    }
                }
            }
            if (r.contextMenu) {
                var q = vjs_El("div", "vjs-context-menu vjs-hidden")
                  , U = "";
                if ("" == r.contextText)
                    r.contextText = "Powewred by Nuevodevel.com",
                    r.contextUrl = "https://www.nuevodevel.com/nuevo",
                    U = '<img src="data:image/gif;base64,R0lGODlhJwASAOZrAPr6+vb29vT09PX19ff39/Ly8ra2tv///+Hh4ebm5tPT09TU1Nzc3Nra2tnZ2dvb2+3t7cHBwX5+fmdnZzc3N0NDQzo6Oq+vr/z8/PDw8GRkZNLS0v39/ZmZmcXFxe7u7srKysjIyPPz83h4eP7+/vj4+Lu7u9/f39HR0XFxcfQAAMQAAHp6euvr6+np6dDQ0GxsbPwAAK0AAHl5eX9/f+fn5/gAAPkAAOIAAIEAALKysjY2Nry8vPHx8Z2dnejo6G5ubvsAAPUAAKIAAPn5+Xt7e7W1tYyMjGtra/oAANYAAGUAAOTk5P0AAOAAAIwAADQAAL0AAD0AAMPDw7GxsW9vb3JycpycnPv7+5qamuXl5U5OTvb396qqqrS0tLe3txQUFJ6enpGRkWVlZaGhoaampkhISJubm42NjXx8fE9PT////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAHoA2sALAAAAAAnABIAAAf/gAABAoSFhoQDh4WJhAEEAZAEBQZrlWsHmJmam5ydnQiWCQoLDKWmpwwNDg2oracPEJgRlhITlre3FBUWuL29FxgZGmsbHAEdvpYeHyCVICHJvSIEI2skmCUm0ScHKJWYKZYqK8kCJSxrHAcYmC3JLgcv3wcwljExKjK95jPpBxsgriWg0atGvHn1KsWwcSMGjhy3zKFTp2MHD3U9fOD6cfDSASD2bIgMImSIJQFEivgzUulID0websGT5xFJyCRClCyJWKKfOpaVWDA5wGGDpaE0MSVc0ySIkydQcPFbiYvbAReVFHRUailIFCm+JFLFNaXEgQFUHGw9UCXarRIDWKyMxXWlwAEsANZmcVsJAgktW+biksAOkzePBTIQ4DJgQInHkPMe6FKJAwYvbhdg4PClMpbPoEODJlCjC5hKYcSM4UumjJlKZ9AcmU279hE0adTw3c3bVyAAOw==" />',
                    U += "<span>" + r.contextText + "</span>",
                    U = '<a class="ctxt" target="' + r.target + '" href="' + r.contextUrl + '">' + U + "</a>",
                    R();
                else if ("" != r.contextIcon)
                    (F = vjs_El("img")).src = r.contextIcon,
                    F.onload = function() {
                        "naturalHeight"in this ? this.naturalHeight + this.naturalWidth > 0 && (U = '<img src="' + r.contextIcon + '" />',
                        U += "<span>" + r.contextText + "</span>",
                        "" != r.contextUrl && (U = '<a class="ctxt" target="' + r.target + '" href="' + r.contextUrl + '">' + U + "</a>"),
                        R()) : this.width + this.height > 0 && (U = '<img src="' + r.contextIcon + '" />',
                        U += "<span>" + r.contextText + "</span>",
                        "" != r.contextUrl && (U = '<a class="ctxt" target="' + r.target + '" href="' + r.contextUrl + '">' + U + "</a>"),
                        R()),
                        vjs_find(o, ".ctxt").onclick = function(e) {
                            r.waslink = !0
                        }
                    }
                    ,
                    F.onerror = function() {
                        U = "<span>" + r.contextText + "</span>",
                        "" != r.contextUrl && (U = '<a class="ctxt" target="' + r.target + '" href="' + r.contextUrl + '">' + U + "</a>"),
                        R()
                    }
                    ;
                function R() {
                    var e;
                    q.innerHTML = U,
                    t.el().appendChild(q),
                    o.addEventListener("contextmenu", function(t) {
                        clearTimeout(e),
                        t.preventDefault(),
                        i.removeClass(q, "vjs-hidden");
                        var s = q.offsetWidth
                          , n = q.offsetHeight;
                        if (t.clientY)
                            var a = t.clientY;
                        else
                            a = null;
                        if (t.clientX)
                            var l = t.clientX;
                        else
                            l = null;
                        if (vjs_find(o, ".ctxt").onclick = function(e) {
                            r.waslink = !0
                        }
                        ,
                        null !== a && null !== l) {
                            var d = o.getBoundingClientRect()
                              , v = a - d.top
                              , c = l - d.left;
                            v + n > o.offsetHeight && (v = o.offsetTop + o.offsetHeight - n),
                            c + s > o.offsetWidth && (c = o.offsetWidth - s),
                            q.style.top = v + "px",
                            q.style.left = c + "px",
                            e = setTimeout(function() {
                                i.addClass(q, "vjs-hidden")
                            }, 3e3),
                            window.onscroll = function(e) {
                                i.addClass(q, "vjs-hidden")
                            }
                            ,
                            window.onclick = function(e) {
                                i.addClass(q, "vjs-hidden")
                            }
                        }
                    })
                }
            }
            if (r.logo) {
                var F;
                (F = vjs_El("img")).src = r.logo;
                var Y = vjs_El("div", "vjs-logo");
                o.appendChild(Y),
                F.onload = function() {
                    if ("naturalHeight"in this) {
                        if (this.naturalHeight + this.naturalWidth === 0)
                            return void o.removeChild(Y)
                    } else if (this.width + this.height == 0)
                        return void o.removeChild(Y);
                    var e = r.logooffsetX;
                    r.logooffsetY;
                    if ("RT" == r.logoposition ? (Y.style.right = e + "px",
                    Y.style.top = e + "px") : (Y.style.left = e + "px",
                    Y.style.top = e + "px"),
                    "" !== r.logourl) {
                        var t = vjs_El("a");
                        t.href = r.logourl,
                        t.target = r.target,
                        r.logotitle && t.setAttribute("title", r.logotitle),
                        t.appendChild(F),
                        Y.appendChild(t),
                        t.onclick = function(e) {
                            r.waslink = !1
                        }
                        ,
                        t.ontouchstart = function(e) {
                            r.waslink = !1
                        }
                        ,
                        Y.style.cursor = "pointer"
                    } else
                        Y.appendChild(F)
                }
                ,
                F.onerror = function() {
                    o.removeChild(Y)
                }
            }
            if ("treso" == e.options.skinname) {
                var Q = vjs_find(o, ".vjs-current-time")
                  , K = vjs_find(o, ".vjs-duration")
                  , X = vjs_find(o, ".vjs-control-bar");
                X.removeChild(Q);
                var Z = vjs_find(o, ".vjs-progress-control");
                Z.insertBefore(Q, Z.childNodes[0]),
                X.removeChild(K),
                Z.appendChild(K)
            }
            t.resetNuevo = function(s) {
                var n, a = new Array, d = new Array;
                t.options_.sources.length > 0 && (d = a = t.options_.sources),
                ne(),
                de();
                try {
                    vjs_find(o, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = "",
                    i.addClass(vjs_find(o, ".vjs-quality-button"), "vjs-hidden")
                } catch (e) {}
                var v = t.tech({
                    IWillNotUseThisInPlugins: !0
                }).el();
                if (!0 !== e.browser.IS_IOS)
                    for (; v.firstChild; )
                        v.removeChild(v.firstChild);
                if (1 == a.length && t.src(a),
                a.length > 1) {
                    var c = 0
                      , f = 0;
                    for (c = 0; c < a.length; c++)
                        (a[c].res || a[c].label) && f++;
                    if (f >= r.minResolution) {
                        if (r.dash = !1,
                        r.hls = !1,
                        !t.src) {
                            var h = !1;
                            return (r.relatedMenu && related.length > 0 || r.shareMenu || r.rateMenu || r.zoomMenu) && (h = !0),
                            1 != h && vjs_find(o, ".vjs-cog-menu-button").vds.addClass("vjs-hidden"),
                            t.src()
                        }
                        var p, m = new Array, g = new Array, y = new Array, b = "", _ = 0, C = 0, A = 0, k = 0, T = 0, w = !1, x = "MediaSource"in window;
                        for ((q = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0) && (x = !1),
                        q && 1 == d.length && (x = !0); _ < d.length; _++) {
                            var I = "";
                            try {
                                N = d[_].type
                            } catch (e) {}
                            if (void 0 !== N && (-1 === N.indexOf("mpeg") && -1 === N.indexOf("apple") || (r.hls = !0),
                            -1 !== N.indexOf("dash") && (r.dash = !0)),
                            d[_].res && d[_].label) {
                                if (1 != w && (w = !0,
                                p = {
                                    res: d[_].res,
                                    type: d[_].type,
                                    src: d[_].src,
                                    label: d[_].label
                                }),
                                void 0 === (I = d[_].type) && (I = ""),
                                d[_].default)
                                    ;
                                else
                                    ;-1 !== I.indexOf("mpeg") || -1 !== I.indexOf("apple") ? (m[C] = d[_],
                                ++C > 1 && (r.hls = !0,
                                r.hlsQualities = !1)) : -1 !== I.indexOf("dash") ? (g[A] = d[_],
                                ++A > 1 && (r.dash = !0,
                                r.dashQualities = !1)) : (y[k] = d[_],
                                k++)
                            }
                        }
                        var E = new Array;
                        E = (E = m.length > 0 && x ? m : g.length > 0 && x ? g : y).sort(ce);
                        var L = ""
                          , P = " vjs-checked";
                        L = ' class="item-quality"',
                        P = ' class="item-quality vjs-checked"';
                        for (_ = 0; _ < E.length; _++) {
                            var M = E[_].res
                              , B = parseInt(M)
                              , D = "";
                            if (r.hdicon) {
                                var S = "HD";
                                B > 1079 && (S = "FullHD"),
                                B > 2159 && (S = "4K"),
                                B > 719 && (D = '<i class="vjs-hd-icon">' + S + "</i>")
                            }
                            0 == _ && " vjs-first",
                            E[_].default ? (n = E[_],
                            b += "<li" + P + ' data-res="' + _ + '">' + E[_].label + D + "</li>",
                            '<li class="quality-full vjs-checked" data-res="' + _ + '">' + E[_].label + D + "</li>") : (b += "<li" + L + ' data-res="' + _ + '">' + E[_].label + D + "</li>",
                            '<li class="quality-full" data-res="' + _ + '">' + E[_].label + D + "</li>"),
                            T++
                        }
                        if (T > 1) {
                            l = T,
                            r.res_num = T,
                            vjs_find(o, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = b,
                            i.removeClass(vjs_find(o, ".vjs-quality-button"), "vjs-hidden");
                            var z = vjs_mfind(o, ".item-quality");
                            de(),
                            r.menutouch = !1;
                            for (_ = 0; _ < z.length; _++) {
                                var H = z[_];
                                H.ontouchstart = function(e) {
                                    r.menutouch = !1
                                }
                                ,
                                H.ontouchmove = function(e) {
                                    r.menutouch = !0
                                }
                                ;
                                var O = function(e) {
                                    var s;
                                    e.preventDefault(),
                                    e.stopPropagation();
                                    for (var n = 0; n < z.length; n++)
                                        i.removeClass(z[n], "vjs-checked"),
                                        i.removeClass(tobind2[n], "vjs-checked"),
                                        z[n] != e.target && tobind2[n] != e.target || (s = n);
                                    i.addClass(z[s], "vjs-checked"),
                                    i.addClass(tobind2[s], "vjs-checked");
                                    var a = e.target.getAttribute("data-res");
                                    ve(E[a].res, E[a].label);
                                    var r = E[a];
                                    t.trigger("resolutionchange", {
                                        label: E[a].label,
                                        res: E[a].res
                                    });
                                    var l = vjs_find(o, ".vjs-quality-button");
                                    vjs_find(l, ".vjs-menu").style.display = "none",
                                    i.removeClass(o, "vjs-overflow"),
                                    W(r)
                                };
                                H.onclick = function(e) {
                                    O(e)
                                }
                                ,
                                H.ontouchstart = function(e) {
                                    O(e)
                                }
                            }
                            function W(e) {
                                var s = t.currentTime()
                                  , i = t.paused();
                                if (t.src(e),
                                t.load(),
                                t.play(),
                                t.on("loadeddata", function() {
                                    try {
                                        window.URL.revokeObjectURL(mediaurl)
                                    } catch (e) {}
                                    s > 0 && t.currentTime(s),
                                    t.play()
                                }),
                                t.handleTechSeeked_(),
                                i) {
                                    var n = !0;
                                    t.on("playing", function() {
                                        n && (t.pause(),
                                        t.handleTechSeeked_(),
                                        n = !1)
                                    })
                                }
                            }
                            (1 != r.hls && 1 != r.dash || 1 != x) && ve(p.res, p.label),
                            m.length > 1 && 1 != r.hlsQualities && x && ve(p.res, p.label),
                            g.length > 1 && 1 != r.dashQualities && x && ve(p.res, p.label),
                            re(),
                            void 0 !== n || void 0 !== p ? (1 != r.hls && 1 != r.dash || 1 != x || m.length > 1 && 1 != r.hlsQualities && x || g.length > 1 && 1 != r.dashQualities && x) && (void 0 !== n && n != p ? (ve(n.res, n.label),
                            t.src(n),
                            t.load()) : void 0 !== p && (ve(p.res, p.label),
                            t.src(p),
                            t.load())) : (m.length > 1 && x || g.length > 1 && x) && ve("auto", "Auto")
                        }
                    }
                }
                var q;
                x = "MediaSource"in window;
                (q = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0) && !0;
                if (t.on("loadeddata", function() {
                    for (var e = vjs_mfind(o, ".vjs-menu-button-popup"), s = 0; s < e.length; s++) {
                        function n(e) {
                            o.offsetWidth < 480 ? i.addClass(o, "vjs-overflow") : i.removeClass(o, "vjs-overflow");
                            var t = e.target.parentElement.getAttribute("title");
                            if (t) {
                                var s = vjs_find(e.target.parentElement, ".vjs-header-title");
                                s || (s = vjs_find(e.target.parentElement.parentElement, ".vjs-header-title")),
                                s && (s.innerHTML = t)
                            }
                        }
                        e[s].onclick = function(e) {
                            n(e)
                        }
                        ,
                        e[s].ontouchstart = function(e) {
                            n(e)
                        }
                    }
                    var a = vjs_mfind(o, ".vjs-menu");
                    for (s = 0; s < a.length; s++) {
                        if (!(d = vjs_find(a[s], ".vjs-menu-header"))) {
                            var d = vjs_El("div", "vjs-menu-header")
                              , v = vjs_El("div", "vjs-close-btn");
                            d.innerHTML = '<span class="vjs-header-title"></span>',
                            d.appendChild(v),
                            a[s].appendChild(d)
                        }
                        function c(e) {
                            if (o.offsetWidth < 480 && "vjs-menu vjs-lock-showing" == e.target.className) {
                                var t = vjs_find(e.target.parentNode, ".vjs-menu-button");
                                i.removeClass(o, "vjs-overflow"),
                                t.click(),
                                e.preventDefault(),
                                e.stopImmediatePropagation()
                            }
                            i.removeClass(o, "vjs-overflow")
                        }
                        a[s].onmousedown = function(e) {
                            c(e)
                        }
                        ,
                        a[s].ontouchstart = function(e) {
                            c(e)
                        }
                    }
                    if (r.chapterMarkers) {
                        var f = !1
                          , h = t.textTracks();
                        if (h.length > 0)
                            for (s = 0; s < h.length; s++)
                                if ("chapters" == h[s].kind && 1 != f) {
                                    h[s].src;
                                    f = !0;
                                    var p = h[s]
                                }
                        if (p) {
                            try {
                                i.addClass(vjs_find(o, ".vjs-mouse-display"), "vjs-abs-hidden")
                            } catch (e) {}
                            var m = p.cues;
                            if (m) {
                                var g = []
                                  , y = vjs_find(o, ".vjs-progress-holder")
                                  , b = t.duration();
                                for (s = 0; s < m.length; s++)
                                    if (m[s].startTime > 0) {
                                        g[s] = m[s].startTime;
                                        var _ = vjs_El("div", "vjs-marker")
                                          , C = vjs_El("div", "vjs-marker-inn")
                                          , A = vjs_El("div", "vjs-marker-tooltip");
                                        _.appendChild(C),
                                        _.appendChild(A),
                                        A.innerHTML = m[s].text,
                                        _.style.left = g[s] / b * 100 + "%",
                                        y.appendChild(_),
                                        _.onmouseenter = function() {
                                            var e = this.offsetLeft
                                              , t = vjs_find(this, ".vjs-marker-tooltip")
                                              , s = t.offsetWidth / 2
                                              , i = vjs_find(o, ".vjs-progress-control")
                                              , n = (i.offsetLeft,
                                            i.offsetWidth)
                                              , a = -1 * e + s
                                              , r = t.offsetWidth / 2 * -1 + (n - e);
                                            e - s < 0 ? t.style.left = a + "px" : e + s > n ? t.style.left = r + "px" : t.removeAttribute("style")
                                        }
                                    }
                            }
                        }
                    }
                    var k = new Array;
                    k.length = 0;
                    var T = !1
                      , w = "";
                    if (x && 1 != q)
                        try {
                            t.dash.mediaPlayer.setFastSwitchEnabled(!1);
                            var I = t.dash.mediaPlayer.getBitrateInfoListFor("video")
                              , E = t.dash.mediaPlayer.getQualityFor("video");
                            s = 0;
                            I.length > 1 && r.dashQualities && (t.dash.mediaPlayer.setAutoSwitchQualityFor("video", !0),
                            I.forEach(function(e) {
                                var t = new Object;
                                "video" == e.mediaType && (e.height > 0 || e.bitrate > 0) && (t.id = s,
                                e.height > 0 ? t.height = e.height : t.height = 0,
                                e.bitrate > 0 ? t.bitrate = parseInt(e.bitrate / 1e3) : t.bitrateh = 0,
                                s == E ? (t.auto = 1,
                                T = !0,
                                e.height > 0 && (w = e.height),
                                e.bitrate > 0 && parseInt(e.bitrate / 1e3)) : t.auto = 0,
                                k.push(t),
                                u = "dash"),
                                s += 1
                            }))
                        } catch (e) {}
                    if (x && 1 != q)
                        try {
                            t.tech_.hls.representations().forEach(function(e) {
                                var s = new Object
                                  , i = t.tech_.hls.selectPlaylist();
                                (e.height > 0 || e.bandwidth > 0) && (s.auto = 0,
                                e.bandwidth && e.bandwidth > 0 && (s.bitrate = parseInt(e.bandwidth / 1e3),
                                i.attributes.BANDWIDTH == e.bandwidth && (s.auto = 1,
                                T = !0,
                                w = e.height,
                                e.bandwidth)),
                                s.id = e.id,
                                s.height = e.height,
                                k.push(s),
                                u = "hls")
                            })
                        } catch (e) {}
                    k.length > 0 && (ne(),
                    l = k.length,
                    !0,
                    !0,
                    j = k,
                    function(e, s, n, a) {
                        if (j.length < 2)
                            ne();
                        else {
                            r.is_auto = !0;
                            for (var l = 0, d = 0, v = !1, c = 0, u = j.length; c < u; c++)
                                if (j[c].height > 0 && l++,
                                j[c].bitrate > 0 && d++,
                                j[c].duplicate = !1,
                                j[c].height > 0 && 1 != v) {
                                    var f = 0
                                      , h = 0;
                                    for (u = j.length; h < u; h++)
                                        j[c].height == j[h].height && f++;
                                    f > 1 && (v = !0)
                                }
                            var p = "bitrate";
                            l > d && (p = "height"),
                            j = (j = sortByKey(j, p)).reverse(),
                            L = "item-quality",
                            P = "item-quality vjs-checked";
                            var m = ""
                              , g = "";
                            r.res_num = j.length + 1;
                            var y = vjs_El("div", "vjs-back-res vjs-hidden", '<div class="vjs-res-header">' + t.localize("Quality") + '<div class="vjs-close-btn"></div></div>')
                              , b = vjs_El("div", "vjs-res-block");
                            y.appendChild(b),
                            innUl = vjs_El("ul"),
                            b.appendChild(innUl);
                            var _, C = new Array, A = new Array, k = new Array;
                            for (c = 0,
                            u = j.length; c < u; c++) {
                                var T = ""
                                  , w = parseInt(j[c].height);
                                if (r.hdicon) {
                                    var x = "HD";
                                    w > 1079 && (x = "FullHD"),
                                    w > 2159 && (x = "4K"),
                                    w > 719 && (T = '<i class="vjs-hd-icon">' + x + "</i>")
                                }
                                var I = 0;
                                if (I = "dash" == e ? j[c].id : j[c].bitrate,
                                j[c].height > 0 || j[c].bitrate > 0) {
                                    var E = L
                                      , M = "full-quality";
                                    if (v) {
                                        var B = j[c].height.toString() + "-" + j[c].bitrate.toString();
                                        j[c].height > 0 && j[c].bitrate > 0 && d == l ? (vjs_inArray(B, k) > -1 && (E = L + " vjs-hidden",
                                        M = "full-quality vjs-hidden"),
                                        m += '<li class="' + E + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p <i>(" + j[c].bitrate + " kbps)</i></li>",
                                        g += '<li class="' + M + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p <i>(" + j[c].bitrate + " kbps)</i></li>") : j[c].height > 0 && l > d ? (vjs_inArray(j[c].height, C) > -1 && (E += " vjs-hidden",
                                        M += " vjs-hidden"),
                                        m += '<li class="' + E + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p</li>",
                                        g += '<li class="' + M + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p</li>") : (vjs_inArray(j[c].bitrate, A) > -1 && (E += " vjs-hidden",
                                        M += " vjs-hidden"),
                                        m += '<li class="' + cls11 + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].bitrate + "kbps</li>",
                                        g += '<li class="' + M + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].bitrate + "kbps</li>")
                                    } else
                                        j[c].bitrate > 0 && d > l ? (vjs_inArray(j[c].bitrate, A) > -1 && (E += " vjs-hidden",
                                        M += " vjs-hidden"),
                                        m += '<li class="' + E + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].bitrate + " kbps</li>",
                                        g += '<li class="' + M + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].bitrate + " kbps</li>") : (vjs_inArray(j[c].height, C) > -1 && (E += " vjs-hidden",
                                        M += " vjs-hidden"),
                                        m += '<li class="' + E + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p" + T + "</li>",
                                        g += '<li class="' + M + '" data-id="' + I + '" data-bit="' + j[c].bitrate + '" data-res="' + j[c].height + '" role="menuitem" aria-live="polite" aria-disabled="false">' + j[c].height + "p" + T + "</li>")
                                }
                                A.push(j[c].bitrate),
                                C.push(j[c].height),
                                _ = j[c].height ? j[c].height.toString() + "-" + j[c].bitrate.toString() : j[c].bitrate.toString(),
                                k.push(_)
                            }
                            s && (m += '<li class="item-quality" data-id="Autores" data-res="Autores"' + P + ' role="menuitem" aria-live="polite" aria-disabled="false">Auto',
                            g += '<li class="full-quality" data-id="Autores_full" data-res="Autores"full-quality vjs-checked role="menuitem" aria-live="polite" aria-disabled="false">Auto',
                            "hls" == e && n && (m += '<i class="autores">' + n + "p</i>",
                            g += '<i class="autores2">' + n + "p</i>"),
                            m += "</li>"),
                            innUl.innerHTML = g,
                            o.appendChild(y);
                            var D = vjs_find(o, ".vjs-back-res .vjs-res-header .vjs-close-btn");
                            D.onclick = function() {
                                i.addClass(vjs_find(o, ".vjs-back-res"), "vjs-hidden")
                            }
                            ,
                            D.ontouchstart = function() {
                                i.addClass(vjs_find(o, ".vjs-back-res"), "vjs-hidden")
                            }
                            ,
                            vjs_find(o, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = m,
                            i.removeClass(vjs_find(o, ".vjs-quality-button"), "vjs-hidden");
                            var S = vjs_mfind(o, ".item-quality")
                              , z = vjs_mfind(o, ".full-quality");
                            for (ve("auto", "Auto"),
                            re(),
                            r.menutouch = !1,
                            de(),
                            c = 0; c < S.length; c++) {
                                H = S[c],
                                item2 = z[c];
                                var N = function(s) {
                                    var n;
                                    s.preventDefault(),
                                    s.stopPropagation();
                                    for (var a = S, l = z, d = 0; d < S.length; d++)
                                        i.removeClass(z[d], "vjs-checked"),
                                        i.removeClass(S[d], "vjs-checked"),
                                        S[d] == s.target && (n = d),
                                        z[d] == s.target && (n = d);
                                    i.addClass(a[n], "vjs-checked"),
                                    i.addClass(l[n], "vjs-checked");
                                    var v = s.target
                                      , c = v.getAttribute("data-id")
                                      , u = v.getAttribute("data-res")
                                      , f = v.getAttribute("data-bit");
                                    vjs_find(o, ".vjs-quality-button .vjs-menu").style.display = "none",
                                    i.addClass(vjs_find(o, ".vjs-back-res"), "vjs-hidden");
                                    var h = vjs_find(o, ".vjs-quality-button");
                                    if (vjs_find(h, ".vjs-menu").style.display = "none",
                                    i.removeClass(o, "vjs-overflow"),
                                    "dash" == e) {
                                        "Autores" == c || "Autores_full" == c ? (t.dash.mediaPlayer.setAutoSwitchQualityFor("video", !0),
                                        ve("auto", "Auto"),
                                        t.trigger("resolutionchange", {
                                            label: "Auto",
                                            res: "Auto"
                                        })) : (t.dash.mediaPlayer.setAutoSwitchQualityFor("video", !1),
                                        t.dash.mediaPlayer.setQualityFor("video", c),
                                        u > 0 ? (ve(u, u + "p"),
                                        t.trigger("resolutionchange", {
                                            label: u + "p",
                                            res: u
                                        })) : f > 0 && (ve(u, f + " kbps"),
                                        t.trigger("resolutionchange", {
                                            label: u + " kB",
                                            res: u
                                        })));
                                        var p = t.currentTime();
                                        t.currentTime(0);
                                        var j = t.paused();
                                        setTimeout(function() {
                                            t.currentTime(p),
                                            1 != j && t.play()
                                        }, 100)
                                    } else
                                        "Autores" == c || "Autores_full" == c ? (r.is_auto = !0,
                                        t.tech_.hls.representations().forEach(function(e) {
                                            e.enabled(!0)
                                        }),
                                        t.tech_.hls.currentLevel = -1,
                                        ve("auto", "Auto"),
                                        t.trigger("resolutionchange", {
                                            label: "Auto",
                                            res: "Auto"
                                        })) : (r.is_auto = !1,
                                        t.tech_.hls.representations().forEach(function(e) {
                                            e.enabled(!1),
                                            t.tech_.hls.currentLevel = -1
                                        }),
                                        t.tech_.hls.representations().forEach(function(e) {
                                            if (c == u || parseInt(e.bandwidth / 1e3) == parseInt(c)) {
                                                var s = parseInt(e.bandwidth / 1e3)
                                                  , i = parseInt(c);
                                                e.enabled(!0),
                                                e.height == u ? ve(u, u + "p") : s == i && ve(u, parseInt(e.bandwidth / 1e3) + " kbps"),
                                                O("Auto"),
                                                t.trigger("resolutionchange", {
                                                    label: u + "p",
                                                    res: u
                                                })
                                            } else
                                                e.enabled(!1)
                                        }))
                                };
                                function O(e) {
                                    "Auto" == e && (e = "");
                                    try {
                                        vjs_find(o, ".autores").innerHTML = e
                                    } catch (e) {}
                                    try {
                                        vjs_find(o, ".autores2").innerHTML = e
                                    } catch (e) {}
                                }
                                t.on("mediachange", function() {
                                    if (1 == r.is_auto && "hls" == e) {
                                        var s = t.tech_.hls.selectPlaylist();
                                        t.tech_.hls.representations().forEach(function(e) {
                                            if (parseInt(s.attributes.BANDWIDTH) == parseInt(e.bandwidth))
                                                if (e.height > 0) {
                                                    var t = !1;
                                                    if (r.hdicon) {
                                                        var i = "HD"
                                                          , n = parseInt(e.height);
                                                        n > 2159 && (i = "4K"),
                                                        n > 719 && (t = !0)
                                                    }
                                                    var a = vjs_find(o, ".vjs-quality-button span");
                                                    a.innerHTML = t ? 'Auto<i class="vjs-hd-icon vjs-hd-home">' + i + "</i>" : "Auto",
                                                    O(e.height + "p")
                                                } else
                                                    e.bandwith > 0 && O(parseInt(e.bandwidth / 1e3) + "kbps")
                                        })
                                    }
                                }),
                                item2.className.indexOf("vjs-hidden") < 0 && (item2.onclick = function(e) {
                                    N(e)
                                }
                                ,
                                item2.ontouchend = function(e) {
                                    N(e)
                                }
                                ),
                                H.className.indexOf("vjs-hidden") < 0 && (H.ontouchend = function(e) {
                                    N(e)
                                }
                                ,
                                H.onclick = function(e) {
                                    N(e)
                                }
                                )
                            }
                        }
                    }(u, T, w))
                }),
                r.timetooltip) {
                    var U, R = vjs_find(o, ".vjs-play-progress");
                    (U = vjs_find(R, ".vjs-time-tooltip")) && (U.className = "vjs-time-tooltip")
                }
                r.mousedisplay && ((U = vjs_find(o, ".vjs-mouse-display")) && (U.className = "vjs-mouse-display"));
                if (0 != r.videoInfo && ("" != r.infoText || "" != r.title)) {
                    var F = vjs_find(o, ".vjs-info")
                      , Y = !1
                      , Q = r.url || document.location.href;
                    if (!F) {
                        F = vjs_El("span", "vjs-info");
                        var K = r.infoSize;
                        parseInt(r.infoSize) > 15 && parseInt(r.infoSize) < 24 && (K = 18);
                        var X = "color:#fff;font-size:" + K + "px;";
                        r.infoBold && (X += "font-weight:bold;"),
                        "" != r.infoFont ? X += "font-family:" + r.infoFont : X += "font-family:sans-serif",
                        F.style = X,
                        o.appendChild(F)
                    }
                    var Z = "";
                    K = r.infoSize;
                    parseInt(r.infoSize) > 15 && parseInt(r.infoSize) < 24 && (K = 18);
                    X = "color:#fff;font-size:" + K + "px;";
                    r.infoBold && (X += "font-weight:bold;"),
                    "" != r.infoFont ? X += "font-family:" + r.infoFont : X += "font-family:sans-serif",
                    "" != r.infoText ? Z = r.infoText : "" != r.title && (Z = r.title),
                    "" != r.infoIcon && (J = '<img src="' + r.infoIcon + '"/>',
                    "" != r.infoIconURL && (J = '<a target="' + r.target + '" href=' + r.infoIconURL + ">" + J + "</a>",
                    Z = '<a style="' + X + '" href="' + Q + '" target="' + r.target + '">' + Z + "</a>",
                    Y = !0),
                    "right" != r.infoAlign ? Z = J + Z : Z += J),
                    1 != Y && (Z = '<a style="' + X + '" href="' + Q + '" target="' + r.target + '">' + Z + "</a>"),
                    F.innerHTML = Z,
                    "right" == r.infoAlign && (iDiv.style.textAlign = "right");
                    var J = "";
                    F.onclick = function() {
                        window.open(Q, r.target),
                        r.waslink = !0
                    }
                    ,
                    F.ontouchstart = function() {
                        window.open(Q, r.target),
                        r.waslink = !0
                    }
                }
            }
            ;
            var J = "MediaSource"in window;
            ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) >= 0 && (J = !1);
            var G = new Array;
            if ((G = t.options_.sources).length > 0) {
                N = "";
                try {
                    N = t.options_.sources[0].type
                } catch (e) {}
                -1 !== N.indexOf("dash") && J && t.src(G),
                t.resetNuevo(!1),
                ue()
            } else
                t.resetNuevo(!1),
                ue();
            if (t.reconnect = function() {
                var e = t.src();
                t.reset(),
                t.src(e),
                t.load(),
                t.resetNuevo(!0),
                t.play()
            }
            ,
            t.showRelated = function() {
                r.related.length > 1 && r.relatedMenu && 1 != t.seeking() && (r.waslink = !1,
                i.addClass(vjs_find(o, ".vjs-menu-settings"), "vjs-hidden"),
                i.addClass(b, "vjs-hidden"),
                i.removeClass(vjs_find(o, ".vjs-grid"), "vjs-hidden"),
                oe(),
                r.isAddon = !0,
                t.pause())
            }
            ,
            t.changeSource = function(e) {
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
                        var s = 1;
                        if (t.paused())
                            s = 2;
                        t.changeSrc(e),
                        2 == s ? t.pause() : t.play()
                    }
                }
            }
            ,
            t.changeSrc = function(e) {
                if (r.infoText = "",
                r.title = "",
                r.metatitle = "",
                r.metasubtitle = "",
                e) {
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
                        for (void 0 !== e.slideImage ? r.slideImage = e.slideImage : r.slideImage = "",
                        fe(),
                        void 0 !== e.title && (r.metatitle = r.title = e.title),
                        void 0 !== e.shareTitle && (r.metatitle = r.title = e.shareTitle),
                        void 0 !== e.metatitle && (r.metatitle = e.metatitle),
                        void 0 !== e.subtitle && (r.metasubtitle = e.subtitle),
                        void 0 !== e.metasubtitle && (r.metasubtitle = e.metasubtitle),
                        s = 0; s < e.sources.length; s++)
                            e.sources[s].metatitle || e.sources[s].title || (e.sources[s].metatitle = r.metatitle),
                            !e.sources[s].metatitle && e.sources[s].title && (e.sources[s].metatitle = e.sources[s].title),
                            e.sources[s].metasubtitle || e.sources[s].subtitle || (e.sources[s].metasubtitle = r.metasubtitle),
                            !e.sources[s].metasubtitle && e.sources[s].subtitle && (e.sources[s].metasubtitle = e.sources[s].subtitle);
                        for (var s = (a = t.remoteTextTracks()) && a.length || 0; s--; )
                            t.removeRemoteTextTrack(a[s]);
                        var i = t.videoTracks();
                        for (s = i.length - 1; s >= 0; s--)
                            t.videoTracks().removeTrack(i[s]);
                        var n = t.audioTracks();
                        for (s = n.length - 1; s >= 0; s--)
                            t.videoTracks().removeTrack(n[s]);
                        if (t.options_.sources = e.sources,
                        t.captions = null,
                        void 0 !== e.tracks) {
                            var a = e.tracks;
                            for (s = 0; s < a.length; s++)
                                void 0 !== a[s].src && "captions" == a[s].kind && (a[s].default && (a[s].mode = "showing"),
                                a[s].language = a[s].srclang);
                            a.length > 0 && (t.captions = a)
                        }
                        if ("video/mp4" != e.sources[0].type && "video/webm" != e.sources[0].type && t.src(e.sources),
                        t.resetNuevo(!0, e),
                        void 0 !== e.poster)
                            t.poster(e.poster),
                            o.setAttribute("poster", e.poster),
                            vjs_find(o, ".vjs-tech").setAttribute("poster", e.poster);
                        else {
                            var l = o.getAttribute("poster");
                            l && (t.poster(l),
                            vjs_find(o, ".vjs-tech").setAttribute("poster", l))
                        }
                        if (void 0 !== e.tracks)
                            for (a = e.tracks,
                            s = 0; s < a.length; s++)
                                void 0 !== a[s].src && (a[s].default && (a[s].mode = "showing",
                                t.currentTrack = a[s].src),
                                t.addRemoteTextTrack(a[s], !1));
                        else
                            void 0 !== e.track && void 0 !== e.track.src && (e.track.mode = "showing",
                            t.addRemoteTextTrack(e.track, !1));
                        r.infoText = r.metatitle,
                        void 0 !== e.url && (r.url = e.url)
                    }
                }
            }
            ,
            t.on("playlistready", function() {
                r.playlistRepeat && t.playlist.repeat(!0),
                function() {
                    if ((p = t.playlist.list()).length < 2)
                        return;
                    t.playlist.repeat();
                    if (1 != r.playlist) {
                        if (r.playlist = !0,
                        r.playlistNavigation) {
                            var s = vjs_El("div", "vjs-playlist-nav vjs-nav-prev", '<div class="vjs-prev vjs-disabled"></div>')
                              , n = vjs_El("div", "vjs-playlist-nav vjs-nav-next", '<div class="vjs-next"></div>');
                            function a(e) {
                                if (e.className.indexOf("disabled") < 0) {
                                    t.playlist.nextIndex();
                                    t.playlist.next()
                                }
                            }
                            function l(e) {
                                if (e.className.indexOf("disabled") < 0) {
                                    t.playlist.previousIndex();
                                    t.playlist.previous()
                                }
                            }
                            o.appendChild(s),
                            o.appendChild(n),
                            n.onclick = function(e) {
                                a(e.target)
                            }
                            ,
                            n.ontouchstart = function(e) {
                                a(e.target)
                            }
                            ,
                            s.onclick = function(e) {
                                l(e.target)
                            }
                            ,
                            s.ontouchstart = function(e) {
                                l(e.target)
                            }
                        }
                        if (r.playlistUI) {
                            var d = e.dom.createEl("div", {
                                className: "vjs-playlist-button"
                            }, {
                                title: "播放列表"
                            });
                            function v() {
                                i.addClass(c, "vjs-vplaylist-show"),
                                r.playlistFirst && i.addClass(c, "vjs-vplaylist-first")
                            }
                            o.appendChild(d),
                            e.browser.TOUCH_ENABLED ? d.ontouchstart = function(e) {
                                e.stopImmediatePropagation(),
                                v()
                            }
                            : d.onclick = function(e) {
                                v()
                            }
                            ;
                            var c = vjs_El("div", "vjs-vplaylist");
                            r.playlistShow && (c.className = "vjs-vplaylist vjs-vplaylist-show");
                            var u = vjs_El("div", "vjs-head", "<span>播放列表</span>")
                              , f = vjs_El("div", "vjs-back", "<i></i>");
                            u.appendChild(f),
                            c.appendChild(u),
                            o.appendChild(c);
                            var h = vjs_El("div", "vjs-vlist");
                            c.appendChild(h),
                            e.browser.TOUCH_ENABLED ? f.ontouchstart = function(e) {
                                e.stopImmediatePropagation(),
                                i.removeClass(c, "vjs-vplaylist-show")
                            }
                            : f.onclick = function(e) {
                                i.removeClass(c, "vjs-vplaylist-show")
                            }
                            ;
                            var p = t.playlist.list()
                              , j = 0
                              , m = 0;
                            for (j = 0; j < p.length; j++) {
                                var g = vjs_El("div", "vjs-item");
                                g.setAttribute("data-id", j);
                                var y = vjs_El("div", "vjs-tmb");
                                p[j].thumb ? y.style.backgroundImage = "url(" + p[j].thumb + ")" : p[j].poster && (y.style.backgroundImage = "url(" + p[j].poster + ")"),
                                g.appendChild(y);
                                var b = vjs_El("p");
                                if (p[j].title)
                                    b.innerHTML = p[j].title;
                                else {
                                    var _ = p[j].sources[0].src
                                      , C = _.substring(_.lastIndexOf("/") + 1);
                                    if (p[j].sources.length > 0)
                                        for (m = 0; m < p[j].sources.length; m++)
                                            if (p[j].sources[m].default) {
                                                var _ = p[j].sources[m].src;
                                                C = _.substring(_.lastIndexOf("/") + 1)
                                            }
                                    C = C.replace(/(\.[^/.]+)+$/, ""),
                                    b.innerHTML = C
                                }
                                if (g.appendChild(b),
                                p[j].duration) {
                                    var A = vjs_El("span");
                                    A.innerHTML = p[j].duration,
                                    g.appendChild(A)
                                }
                                h.appendChild(g);
                                var k = !1;
                                function T(e) {
                                    var s = e.target.getAttribute("data-id");
                                    if (t.playlist.currentItem(parseInt(s)),
                                    t.paused()) {
                                        var i = t.play();
                                        void 0 !== i && "function" == typeof i.then && i.then(null, function(e) {})
                                    }
                                }
                                for (g.onclick = function(e) {
                                    e.stopPropagation(),
                                    e.stopImmediatePropagation(),
                                    T(e)
                                }
                                ,
                                g.ontouchstart = function(e) {
                                    k = !1
                                }
                                ,
                                g.ontouchmove = function(e) {
                                    k = !0
                                }
                                ,
                                g.ontouchend = function(e) {
                                    1 != k && (e.preventDefault(),
                                    e.stopPropagation(),
                                    e.stopImmediatePropagation(),
                                    T(e))
                                }
                                ; b.offsetHeight > 33; )
                                    b.textContent = b.textContent.replace(/\W*\s(\S)*$/, "...")
                            }
                            var w = vjs_El("div", "vjs-last");
                            h.appendChild(w),
                            SmScroll.initEl(h)
                        }
                    }
                    t.on("playlist_newitem", function(e, s) {
                        var n = parseInt(s.id) - 1;
                        if (r.playlistUI)
                            for (var a = vjs_mfind(o, ".vjs-vlist .vjs-item"), l = 0; l < a.length; l++)
                                i.removeClass(a[l], "vjs-active-item");
                        t.on("play", function() {
                            if (r.playlistUI) {
                                for (var e = vjs_mfind(o, ".vjs-vlist .vjs-item"), s = 0; s < e.length; s++)
                                    i.removeClass(e[s], "vjs-active-item"),
                                    e[s].getAttribute("data-id") == n && i.addClass(e[s], "vjs-active-item");
                                if (r.playlistAutoHide) {
                                    var a = vjs_find(o, ".vjs-vplaylist");
                                    i.removeClass(a, "vjs-vplaylist-show")
                                }
                            }
                            if (r.playlistNavigation) {
                                t.playlist.repeat();
                                var l = vjs_find(o, ".vjs-nav-prev")
                                  , d = vjs_find(o, ".vjs-nav-next");
                                0 == t.playlist.currentIndex() ? i.addClass(vjs_find(l, ".vjs-prev"), "vjs-disabled") : i.removeClass(vjs_find(l, ".vjs-prev"), "vjs-disabled"),
                                t.playlist.currentIndex() == t.playlist.lastIndex() ? i.addClass(vjs_find(d, ".vjs-next"), "vjs-disabled") : i.removeClass(vjs_find(d, ".vjs-next"), "vjs-disabled")
                            }
                        });
                        try {
                            if (t.isInPictureInPicture()) {
                                t.exitPictureInPicture(),
                                document.exitPictureInPicture(),
                                t.isInPictureInPicture(!1);
                                var d = !1;
                                t.on("play", function() {
                                    1 != d && (d = !0,
                                    t.requestPictureInPicture())
                                })
                            }
                        } catch (e) {}
                    })
                }()
            }),
            t.ready(function() {
                var s = e.browser.TOUCH_ENABLED;
                if (1 != r.ttStyle) {
                    var n = this.textTrackSettings;
                    n.setValues({
                        backgroundColor: "rgba(0,0,0,0)",
                        backgroundOpacity: "0",
                        edgeStyle: "raised",
                        fontPercent: 1.25
                    }),
                    n.updateDisplay()
                }
                function l(e) {
                    r.isAddon && (r.isAddon = !1,
                    i.addClass(vjs_find(o, ".vjs-grid"), "vjs-hidden"),
                    i.addClass(vjs_find(o, ".vjs-sharing-overlay"), "vjs-hidden"),
                    i.removeClass(b, "vjs-hidden"),
                    r.isAddon = !1,
                    p.pauseLock = !1,
                    1 != r.waslink ? 1 == r.player_state && 3 != r.newstate || t.play() : (t.pause(),
                    r.waslink = !1));
                    for (var s = vjs_mfind(o, ".vjs-submenu"), n = 0; n < s.length; n++)
                        i.addClass(s[n], "vjs-hidden");
                    try {
                        i.removeClass(S, "vjs-hidden")
                    } catch (e) {}
                    try {
                        D.style.width = a.cogMenu.width + "px",
                        D.style.height = a.cogMenu.height + "px"
                    } catch (e) {}
                    try {
                        i.addClass(B, "vjs-hidden")
                    } catch (e) {}
                    try {
                        vjs_find(o, ".vjs-quality-button .vjs-menu").style.display = "none"
                    } catch (e) {}
                }
                vjs_find(o, ".vjs-tech").ontouchstart = function(e) {
                    l()
                }
                ,
                window.onclick = function(e) {
                    l()
                }
                ,
                this.pauseLock = !1,
                r.seeking = !1;
                var u = vjs_find(o, ".vjs-progress-holder");
                u.addEventListener(setEvent("mousedown"), function(e) {
                    i.hasClass(o, "vjs-live") || (e.preventDefault(),
                    r.seeking = !0,
                    e.stopPropagation(),
                    function(e) {
                        var s = -1
                          , i = t.duration();
                        if (i > 0) {
                            var n = u.getBoundingClientRect();
                            try {
                                s = e.originalEvent.touches[0].pageX
                            } catch (e) {}
                            try {
                                s = e.originalEvent.changedTouches[0].pageX
                            } catch (e) {}
                            try {
                                s = e.changedTouches[0].pageX
                            } catch (e) {}
                            try {
                                s = e.pageX
                            } catch (e) {}
                            if (s) {
                                var a = (s -= n.left) / (n.right - n.left)
                                  , r = i * a;
                                t.currentTime(r)
                            }
                        }
                    }(e))
                }, !1),
                u.addEventListener(setEvent("mouseup"), function(e) {
                    e.preventDefault(),
                    r.seeking = !1
                }, !1),
                t.on("timeupdate", function() {
                    if (e.isAd)
                        return !1;
                    if (r.resume && r.video_id) {
                        var s = t.currentTime();
                        (s = s.toFixed(2)) > 0 && me("vjs_resume", r.video_id + "," + s)
                    }
                }),
                t.on("volumechange", function() {
                    me("volume", t.volume())
                }),
                t.on("ended", function() {
                    if (e.isAd)
                        return !1;
                    var s = !0;
                    i.addClass(b, "vjs-hidden"),
                    r.playlist && (s = !1,
                    t.playlist.currentIndex() == t.playlist.lastIndex() && 1 != t.playlist.repeat && (s = !0)),
                    s && (r.resume && "" != r.video_id && me("vjs_resume", r.video_id + ",0"),
                    "" != r.endAction ? "share" == r.endAction && r.shareMenu ? (i.addClass(vjs_find(o, ".vjs-menu-settings"), "vjs-hidden"),
                    i.removeClass(vjs_find(o, ".vjs-sharing-overlay"), "vjs-hidden"),
                    r.isAddon = !0) : "related" == r.endAction && r.relatedMenu && r.related.length > 1 && (i.removeClass(vjs_find(o, ".vjs-grid"), "vjs-abs-hidden"),
                    i.addClass(vjs_find(o, ".vjs-menu-settings"), "vjs-hidden"),
                    i.removeClass(vjs_find(o, ".vjs-grid"), "vjs-hidden"),
                    oe(),
                    r.isAddon = !0) : i.removeClass(b, "vjs-hidden"))
                }),
                t.on("playing", function() {
                    if (e.isAd)
                        return !1;
                    i.removeClass(b, "vjs-hidden"),
                    b.style.visibility = "visible",
                    i.removeClass(b, "vjs-abs-hidden"),
                    i.removeClass(vjs_find(o, ".vjs-loading-spinner"), "vjs-block"),
                    s && i.addClass(b, "vjs-abs-hidden")
                }),
                t.on("pause", function(t) {
                    var s = vjs_find(o, ".vjs-tech-chromecast");
                    e.browser.IS_ANDROID || e.browser.IS_IOS ? i.addClass(b, "vjs-abs-hidden") : s ? i.addClass(b, "vjs-abs-hidden") : i.removeClass(b, "vjs-abs-hidden")
                });
                var j = {
                    id: f
                };
                try {
                    playerReady(j)
                } catch (e) {}
                function m() {
                    if (r.resume && "" != r.video_id && localStorage && localStorage.vjs_resume) {
                        var e = localStorage.vjs_resume.split(",");
                        if (2 == e.length)
                            if (e[0] == r.video_id && Number(e[1]) > 3) {
                                var s = Number(e[1]);
                                setTimeout(function() {
                                    me("vjs_resume", r.video_id + ",0"),
                                    t.currentTime(s)
                                }, 500)
                            }
                    }
                }
                t.on("useractive", function() {
                    try {
                        vjs_find(o, "video").controls = !1
                        document.querySelector("div.vjs-playlist-button").style.display = 'block';
                    } catch (e) {}
                }),
                t.on("userinactive", function() {
                    var e = vjs_find(o, ".vjs-menu-settings");
                    if (e && i.addClass(e, "vjs-hidden"),
                    o.offsetWidth > 480) {
                        var t = vjs_find(o, ".vjs-quality-button");
                        if (t) {
                            var s = vjs_find(t, ".vjs-menu");
                            s && (s.style.display = "none")
                        }
                    }
                    document.querySelector("div.vjs-playlist-button").style.display = 'none';
                }),
                t.on("contentupdate", function() {
                    var e = vjs_find(o, ".vjs-tech");
                    e.style.top = "0",
                    e.style.left = "0",
                    e.style.transform = "scale(1)",
                    e.style.webkitTransform = "scale(1)",
                    e.style.msTransform = "scale(1)",
                    c = 1
                }),
                t.on("canplaythrough", function() {
                    e.browser.IS_IOS && m()
                }),
                t.on("play", function() {
                    if (!h) {
                        h = !0,
                        i.addClass(vjs_find(o, ".vjs-poster"), "vjs-no-pointer"),
                        fe(),
                        1 != e.browser.IS_IOS && m();
                        try {
                            vjs_find(o, "video").controls = !1
                        } catch (e) {}
                        if (r.limit > 0 && ("" != r.limiturl || "" != r.url)) {
                            var s = !1;
                            t.on("timeupdate", function() {
                                if (t.currentTime() > r.limit && (t.pause(),
                                b.style.display = "none",
                                1 != s)) {
                                    s = !0;
                                    var e = vjs_El("div", "vjs-limit-overlay")
                                      , i = vjs_El("a", "vjs-limit");
                                    if (i.href = r.limiturl,
                                    i.target = r.target,
                                    i.style.textDecoration = "none",
                                    e.appendChild(i),
                                    i.onclick = function(e) {
                                        r.waslink = !0
                                    }
                                    ,
                                    i.ontouchstart = function(e) {
                                        r.waslink = !0
                                    }
                                    ,
                                    "" == r.limiturl && (r.limiturl = r.url),
                                    "" != r.limitimage) {
                                        var n = vjs_El("img");
                                        n.src = r.limitimage,
                                        n.onload = function() {
                                            i.innerHTML = '<img style="max-width:100%;height:auto;" src="' + r.limitimage + '" />'
                                        }
                                        ,
                                        n.onerror = function() {
                                            a()
                                        }
                                    } else
                                        a();
                                    function a() {
                                        var e = vjs_El("span");
                                        e.style.lineHeight = "1.5em";
                                        var t = r.limitmessage;
                                        e.innerHTML = t + '<span style="color:#fff;">' + r.limiturl + "</span>",
                                        i.appendChild(e)
                                    }
                                    t.el().appendChild(e)
                                }
                            })
                        }
                        localStorage && localStorage.volume && t.volume(localStorage.volume);
                        var n = !1;
                        if ((r.relatedMenu || r.shareMenu || r.rateMenu || r.zoomMenu) && (n = !0),
                        n) {
                            var a = ""
                              , l = !1
                              , u = !1;
                            if (r.shareMenu && (a = a + '<li class="vjs-settings-item vjs-share-button">' + t.localize("Share") + '<span class="vjs-share-icon"></span></li>'),
                            r.relatedMenu && r.related.length > 1 && (a = a + '<li class="vjs-settings-item vjs-related-button">' + t.localize("Related") + '<span class="vjs-related-icon"></span></li>'),
                            r.zoomMenu) {
                                a = a + '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward">' + t.localize("Zoom") + '<span class="zoom-label">100%</span></li>';
                                u = vjs_El("div", "vjs-submenu vjs-zoom-menu vjs-hidden", '<div class="vjs-settings-back vjs-zoom-return"><span>' + t.localize("Zoom") + '</span></div><div class="vjs-zoom-slider"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div class="vjs-zoom-reset">重置</div>')
                            }
                            if (r.rateMenu) {
                                a = a + '<li class="vjs-settings-item vjs-extend-speed vjs-menu-forward">' + t.localize("Speed") + "<span>正常</span></li>";
                                l = vjs_El("div", "vjs-submenu vjs-menu-speed vjs-hidden", '<ul class="vjs-menu-content"><li class="vjs-settings-back">' + t.localize("Speed") + '</li><li class="vjs-speed">0.5x</li><li class="vjs-speed vjs-checked">1x</li><li class="vjs-speed">1.5x</li><li class="vjs-speed">2x</li></ul>')
                            }
                            var f = vjs_find(o, ".vjs-settings-list");
                            if ("" != a) {
                                a += "",
                                f.innerHTML = a + f.innerHTML,
                                l && vjs_find(o, ".vjs-settings-div").appendChild(l),
                                u && vjs_find(o, ".vjs-settings-div").appendChild(u),
                                i.removeClass(vjs_find(o, ".vjs-cog-menu-button"), "vjs-hidden"),
                                re(),
                                de();
                                for (var j = function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation();
                                    var s = e.target.innerHTML
                                      , n = (s = s.replace("x", "")) + "x";
                                    if ("1" == s && (n = "Normal"),
                                    vjs_find(o, ".vjs-extend-speed span").innerHTML = n,
                                    parseFloat(s) > 0) {
                                        t.playbackRate(s);
                                        for (var a = o.querySelectorAll(".vjs-speed"), r = 0; r < a.length; r++)
                                            i.removeClass(a[r], "vjs-checked");
                                        i.addClass(this, "vjs-checked")
                                    }
                                }, g = o.querySelectorAll(".vjs-speed"), y = 0; y < g.length; y++)
                                    g[y].addEventListener("click", j, !0),
                                    g[y].addEventListener("touchstart", j, !0)
                            }
                            if (r.related.length > 1 && r.relatedMenu) {
                                var _ = r.related.length
                                  , C = vjs_El("div")
                                  , A = !1;
                                e.browser.TOUCH_ENABLED && (A = !0);
                                var k = '<div class="vjs-close-btn"></div>';
                                1 != A && (k += '<div class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>'),
                                C.innerHTML = k,
                                C.className = "vjs-grid vjs-hidden";
                                var T = vjs_El("p");
                                T.innerHTML = t.localize("Related videos");
                                var w = vjs_El("div", "vjs-related");
                                A && (w.className = "vjs-related vjs-scroll");
                                var x = o.offsetWidth
                                  , I = .8 * x;
                                if (A && (I = .9 * x),
                                C.appendChild(T),
                                C.appendChild(w),
                                o.appendChild(C),
                                1 != A) {
                                    var E = parseInt(vjs_find(o, ".vjs-prev").offsetWidth) + 5;
                                    vjs_find(o, ".vjs-arrow-prev").style.left = parseInt(w.style.left) - E + "px",
                                    vjs_find(o, ".vjs-arrow-next").style.left = I + parseInt(w.style.left) + "px"
                                }
                                var L = vjs_El("div", "rel-block rel-anim");
                                w.appendChild(L);
                                var P = r.related;
                                d = 1;
                                for (y = 0; y < _; y++) {
                                    var M = vjs_El("div", "rel-parent")
                                      , B = vjs_El("div", "rel-item");
                                    M.appendChild(B),
                                    L.appendChild(M),
                                    B.innerHTML = '<a class="rel-url" target="' + r.target + '" href="' + P[y].url + '" alt="' + P[y].title + '"><span class="rel-bg" style="background-image:url(' + P[y].thumb + ');"></span><label>' + P[y].title + "</label><i>" + P[y].duration + "</i></a>"
                                }
                                var D = vjs_mfind(o, ".rel-url");
                                for (y = 0; y < D.length; y++)
                                    D[y].onclick = function(e) {
                                        r.waslink = !0
                                    }
                                    ;
                                _ < 7 && 1 != A && (i.addClass(vjs_find(o, ".vjs-arrow-next"), "vjs-hidden"),
                                i.addClass(vjs_find(o, ".vjs-arrow-prev"), "vjs-hidden"));
                                var S = function(e) {
                                    if (e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    !i.hasClass(vjs_find(o, ".vjs-arrow-next"), "vjs-disabled")) {
                                        var t = vjs_find(o, ".vjs-related").offsetWidth;
                                        d++,
                                        i.removeClass(vjs_find(o, ".vjs-arrow-prev"), "vjs-disabled");
                                        var s = (d - 1) * t;
                                        vjs_find(o, ".rel-block").style.left = "-" + s + "px",
                                        d == v && i.addClass(vjs_find(o, ".vjs-arrow-next"), "vjs-disabled"),
                                        1 == d && i.addClass(vjs_find(o, ".vjs-arrow-next"), "vjs-disabled")
                                    }
                                };
                                1 != A && (vjs_find(o, ".vjs-arrow-next").onclick = function(e) {
                                    S(e)
                                }
                                ,
                                vjs_find(o, ".vjs-arrow-next").onctouchstart = function(e) {
                                    S(e)
                                }
                                );
                                var z = function(e) {
                                    if (e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    !i.hasClass(vjs_find(o, ".vjs-arrow-prev"), "vjs-disabled")) {
                                        var t = vjs_find(o, ".vjs-related").offsetWidth
                                          , s = ((d -= 1) - 1) * t;
                                        vjs_find(o, ".rel-block").style.left = "-" + s + "px",
                                        1 != A && (1 == d && i.addClass(vjs_find(o, ".vjs-arrow-prev"), "vjs-disabled"),
                                        i.removeClass(vjs_find(o, ".vjs-arrow-next"), "vjs-disabled"))
                                    }
                                };
                                1 != A && (vjs_find(o, ".vjs-arrow-prev").onclick = function(e) {
                                    z(e)
                                }
                                ,
                                vjs_find(o, ".vjs-arrow-prev").onctouchstart = function(e) {
                                    z(e)
                                }
                                ),
                                vjs_find(o, ".vjs-related-button").addEventListener(setEvent("click"), function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    t.showRelated()
                                }, !1),
                                vjs_find(vjs_find(o, ".vjs-grid"), ".vjs-close-btn").addEventListener("click", function(e) {
                                    e.preventDefault(),
                                    r.isAddon = !1,
                                    i.addClass(vjs_find(o, ".vjs-grid"), "vjs-hidden"),
                                    1 != r.player_state && t.play()
                                })
                            }
                            if (r.shareMenu) {
                                var H = vjs_El("div", "vjs-sharing-overlay vjs-hidden")
                                  , N = vjs_El("div", "vjs-sharing-container")
                                  , O = vjs_El("div", "vjs-sharing-body")
                                  , W = r.url || document.location.href
                                  , q = r.embed || "N/A"
                                  , U = vjs_El("div", "vjs-close-btn vjs-share-close")
                                  , R = (R = '<div class="vjs-inputs-body"><h2>' + t.localize("Link") + '</h2><input type="text" class="perma"><h2>' + t.localize("Embed") + '</h2><input class="embed-code" type="text"></div>') + '<div class="vjs-inputs-body"><h2>' + t.localize("Social") + "</h2></div>";
                                R += '<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon nv vjs-facebook-square" role="button" aria-live="polite" tabindex="0"></i>',
                                R += '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"></i>',
                                R += '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"></i>',
                                R += '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"></i></div>',
                                O.innerHTML = R,
                                N.appendChild(O),
                                H.appendChild(U),
                                H.appendChild(N),
                                t.el().appendChild(H),
                                vjs_find(o, ".embed-code").value = q,
                                vjs_find(o, ".perma").value = W,
                                vjs_find(o, ".vjs-share-button").addEventListener(setEvent("click"), function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    i.addClass(vjs_find(o, ".vjs-menu-settings"), "vjs-hidden"),
                                    i.removeClass(H, "vjs-hidden"),
                                    p.pauseLock = !0,
                                    i.addClass(b, "vjs-hidden"),
                                    r.isAddon = !0;
                                    var s = t.paused();
                                    r.player_state = s,
                                    1 != s && t.pause()
                                }, !1);
                                var F = {
                                    url: W,
                                    title: r.metatitle || r.title || document.title,
                                    description: t.localize("Check out this cool video on") + " " + r.url,
                                    pubid: r.pubid || null
                                }
                                  , Y = function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation();
                                    var t = "";
                                    switch (e.target.id.split("_")[1]) {
                                    case "facebook":
                                        t = "facebook";
                                        break;
                                    case "twitter":
                                        t = "twitter";
                                        break;
                                    case "pinterest":
                                        t = "pinterest";
                                        break;
                                    case "linkedin":
                                        t = "linkedin"
                                    }
                                    window.open("http://api.addthis.com/oexchange/0.8/forward/" + t + "/offer?" + function(e) {
                                        var t = [];
                                        for (var s in e)
                                            t.push(encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
                                        return t.join("&")
                                    }(F), "AddThis", "height=450,width=550,modal=yes,alwaysRaised=yes")
                                }
                                  , Q = o.querySelectorAll(".vjs-share-icon");
                                for (y = 0; y < Q.length; y++)
                                    Q[y].addEventListener("click", Y, !1);
                                function K() {
                                    r.isAddon = !1,
                                    i.addClass(vjs_find(o, ".vjs-sharing-overlay"), "vjs-hidden"),
                                    i.addClass(b, "vjs-hidden"),
                                    r.isAddon = !1,
                                    p.pauseLock = !1,
                                    1 == r.player_state && 3 != r.newstate || t.play()
                                }
                                vjs_find(o, ".vjs-inputs-body").onclick = function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation()
                                }
                                ,
                                vjs_find(o, ".vjs-inputs-body input").onclick = function(e) {
                                    this.select()
                                }
                                ,
                                vjs_find(o, ".vjs-share-close").onclick = function(e) {
                                    K()
                                }
                                ,
                                vjs_find(o, ".vjs-share-close").ontouchstart = function(e) {
                                    K()
                                }
                            }
                            if (r.zoomMenu) {
                                var X, Z, J, G = vjs_find(o, ".vjs-poster");
                                if (i.removeClass(G, "vjs-hidden"),
                                G.setAttribute("style", ""),
                                G.style.display = "inline-block",
                                G.style.opacity = 0,
                                e.browser.TOUCH_ENABLED && (vjs_find(o, ".vjs-tech").style.pointerEvents = "none"),
                                r.zoomInfo) {
                                    var V = vjs_El("div", "vjs-zoom-parent vjs-hidden")
                                      , $ = vjs_El("div", "vjs-reset-zoom");
                                    $.innerHTML = t.localize("100%"),
                                    V.appendChild($);
                                    var ee = vjs_El("div", "vjs-reset-center")
                                      , te = vjs_El("div", "vjs-reset-cancel");
                                    V.appendChild(ee),
                                    V.appendChild(te);
                                    var se = vjs_El("div", "vjs-reset-info");
                                    V.appendChild(se);
                                    var ie = vjs_El("div", "vjs-zoom-help vjs-hidden");
                                    function ne(e) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        i.hasClass(ie, "vjs-hidden") ? (i.removeClass(ie, "vjs-hidden"),
                                        i.addClass(b, "vjs-hidden")) : (i.addClass(ie, "vjs-hidden"),
                                        i.removeClass(b, "vjs-hidden"))
                                    }
                                    function oe() {
                                        i.addClass(ie, "vjs-hidden"),
                                        i.removeClass(b, "vjs-hidden")
                                    }
                                    r.zoomWheel ? ie.innerHTML = '<div class="zoom-close">x</div><div>' + t.localize("ZOOM HELP") + "</div>" + t.localize("Use ZOOM slider or mouse wheel to ZOOM in video.") + "<div>" + t.localize("Drag zoomed area using your mouse or a finger.") + "</div>" : ie.innerHTML = '<div class="zoom-close">x</div><div>' + t.localize("ZOOM HELP") + "</div>" + t.localize("Drag zoomed area using your mouse or a finger.") + "</div>",
                                    V.appendChild(se),
                                    se.onmouseup = function(e) {
                                        ne(e)
                                    }
                                    ,
                                    se.ontouchend = function(e) {
                                        ne(e)
                                    }
                                    ,
                                    vjs_find(ie, ".zoom-close").onmouseup = function() {
                                        oe()
                                    }
                                    ,
                                    vjs_find(ie, ".zoom-close").ontouchend = function() {
                                        oe()
                                    }
                                    ,
                                    o.appendChild(ie),
                                    te.onmouseup = function() {
                                        pe()
                                    }
                                    ,
                                    te.ontoucend = function() {
                                        pe()
                                    }
                                    ,
                                    ee.onmouseup = function() {
                                        he()
                                    }
                                    ,
                                    ee.ontouchend = function() {
                                        he()
                                    }
                                    ,
                                    o.appendChild(V)
                                }
                                vjs_find(o, ".vjs-zoom-reset").addEventListener("mouseup", pe, !1),
                                vjs_find(o, ".vjs-zoom-reset").addEventListener("touchend", pe, !1);
                                var le = t.el();
                                if (le.hasAttribute("tabIndex") || le.setAttribute("tabIndex", "-1"),
                                le.style.outline = "none",
                                r.zoomWheel) {
                                    if (e.browser.TOUCH_ENABLED) {
                                        var ve = vjs_El("div", "vjs-zoom-slide")
                                          , ce = vjs_El("div", "zoom-bg")
                                          , ue = vjs_El("div", "zoom-thumb");
                                        ve.appendChild(ce),
                                        ve.appendChild(ue),
                                        o.appendChild(ve),
                                        ve.style.height = o.offsetHeight - 85 + "px",
                                        window.addEventListener("resize", function(e) {
                                            ve.style.height = o.offsetHeight - 85 + "px",
                                            je()
                                        }, !1),
                                        ve.addEventListener("touchstart", function(e) {
                                            e.preventDefault(),
                                            e.stopPropagation(),
                                            ye(),
                                            i.addClass(ve, "vjs-slide-block");
                                            var t = function(e) {
                                                e.preventDefault(),
                                                e.stopPropagation(),
                                                ke(e, ve)
                                            }
                                              , s = function(e) {
                                                e.preventDefault(),
                                                e.stopPropagation(),
                                                be(),
                                                setTimeout(function() {
                                                    i.removeClass(ve, "vjs-slide-block")
                                                }, 3e3),
                                                document.removeEventListener(setEvent("touchend"), s),
                                                document.removeEventListener(setEvent("touchmove"), t)
                                            };
                                            document.addEventListener("touchmove", t, !1),
                                            document.addEventListener("touchend", s, !1)
                                        }, !1)
                                    }
                                    function me(e) {
                                        e.preventDefault(),
                                        e.stopPropagation();
                                        var t = 20 * Math.max(-1, Math.min(1, e.wheelDelta || -e.detail))
                                          , s = vjs_find(o, ".vjs-tech");
                                        (c = (100 * c + t) / 100) < 1 && (c = 1),
                                        c > 5 && (c = 5),
                                        1 == c ? (pe(),
                                        i.addClass(vjs_find(o, ".vjs-zoom-parent"), "vjs-hidden"),
                                        i.removeClass(b, "vjs-hidden")) : (i.removeClass(vjs_find(o, ".vjs-zoom-parent"), "vjs-hidden"),
                                        ge(s, c),
                                        i.addClass(b, "vjs-hidden"));
                                        var n = vjs_find(o, ".vjs-zoom-menu");
                                        if (1 != i.hasClass(n, "vjs-hidden")) {
                                            var a = (c - 1) / 4 * 100;
                                            vjs_find(o, ".vjs-zoom-level").style.height = a + "%",
                                            ae(100 * c)
                                        }
                                        return !1
                                    }
                                    G.addEventListener("mousewheel", me, !1),
                                    G.addEventListener("DOMMouseScroll", me, !1)
                                }
                                function _e(e) {
                                    if (c > 1) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        X = !0;
                                        var t = vjs_find(o, ".vjs-tech");
                                        try {
                                            J = [t.offsetLeft - e.clientX, t.offsetTop - e.clientY]
                                        } catch (e) {}
                                        try {
                                            J = [t.offsetLeft - e.touches[0].clientX, t.offsetTop - e.touches[0].clientY]
                                        } catch (e) {}
                                        G.style.pointerEvents = "none",
                                        document.addEventListener("mouseup", Ae, !0),
                                        document.addEventListener("mousemove", Ce, !0),
                                        document.addEventListener("touchend", Ae, !0),
                                        document.addEventListener("touchmove", Ce, !0)
                                    }
                                }
                                function Ce(e) {
                                    if (e.preventDefault(),
                                    X) {
                                        try {
                                            Z = {
                                                x: event.clientX,
                                                y: event.clientY
                                            }
                                        } catch (e) {}
                                        try {
                                            Z = {
                                                x: event.touches[0].clientX,
                                                y: event.touches[0].clientY
                                            }
                                        } catch (e) {}
                                        var t = vjs_find(o, ".vjs-tech")
                                          , s = Z.x + J[0]
                                          , i = Z.y + J[1]
                                          , n = o.offsetWidth / 2 * (c - 1)
                                          , a = o.offsetHeight / 2 * (c - 1);
                                        s > n && (s = n),
                                        s < -1 * n && (s = -1 * n),
                                        i > a && (i = a),
                                        i < -1 * a && (i = -1 * a),
                                        t.style.left = s + "px",
                                        t.style.top = i + "px"
                                    }
                                }
                                function Ae(e) {
                                    G.style.pointerEvents = "auto",
                                    X = !1,
                                    document.removeEventListener("mouseup", Ae, !0),
                                    document.removeEventListener("mousemove", Ce, !0),
                                    document.removeEventListener("touchend", Ae, !0),
                                    document.removeEventListener("touchmove", Ce, !0),
                                    e.preventDefault(),
                                    e.stopPropagation()
                                }
                                function ke(s, n) {
                                    G.style.pointerEvents = "auto";
                                    var a = !1;
                                    if (e.browser.TOUCH_ENABLED) {
                                        try {
                                            a = s.originalEvent.touches[0].pageY
                                        } catch (s) {}
                                        try {
                                            a = s.originalEvent.changedTouches[0].pageY
                                        } catch (s) {}
                                        try {
                                            a = s.changedTouches[0].pageY
                                        } catch (s) {}
                                    } else
                                        try {
                                            a = s.pageY
                                        } catch (s) {}
                                    if (0 != a) {
                                        var r = n.offsetHeight
                                          , l = a - function(e) {
                                            var t = e.offsetTop;
                                            for (; e = e.offsetParent; )
                                                t += e.offsetTop;
                                            return t
                                        }(n);
                                        l > r && (l = r),
                                        l < 0 && (l = 0);
                                        var d = parseInt(100 - l / r * 100);
                                        d < 0 && (d = 0),
                                        d > 100 && (d = 100);
                                        try {
                                            vjs_find(o, ".vjs-zoom-level").style.height = d + "%"
                                        } catch (s) {}
                                        try {
                                            vjs_find(o, ".zoom-thumb").style.height = d + "%"
                                        } catch (s) {}
                                        var v = 1 + 4 * d / 100;
                                        c = v;
                                        t.id();
                                        ge(vjs_find(o, ".vjs-tech"), v),
                                        ae(100 * v),
                                        v > 1 ? (e.options.blockKeys = !0,
                                        i.removeClass(vjs_find(o, ".vjs-zoom-parent"), "vjs-hidden"),
                                        i.addClass(b, "vjs-hidden")) : (pe(),
                                        e.options.blockKeys = !1,
                                        i.addClass(vjs_find(o, ".vjs-zoom-parent"), "vjs-hidden"),
                                        i.removeClass(b, "vjs-hidden"))
                                    }
                                }
                                G.addEventListener("mousedown", _e, !0),
                                G.addEventListener("touchstart", _e, !0),
                                vjs_find(o, ".vjs-zoom-slider").addEventListener("click", function(e) {
                                    e.preventDefault(),
                                    e.stopPropagation(),
                                    e.stopImmediatePropagation()
                                }, !1),
                                vjs_find(o, ".vjs-zoom-slider").addEventListener(setEvent("mousedown"), function(e) {
                                    e.preventDefault(),
                                    e.stopImmediatePropagation(),
                                    ye();
                                    var t = vjs_find(o, ".vjs-zoom-slider");
                                    ke(e, t);
                                    var s = function(e) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        ke(e, t)
                                    }
                                      , i = function(e) {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        be(),
                                        document.removeEventListener(setEvent("mouseup"), i),
                                        document.removeEventListener(setEvent("mousemove"), s)
                                    };
                                    document.addEventListener(setEvent("mousemove"), s, !1),
                                    document.addEventListener(setEvent("mouseup"), i, !1)
                                }, !1)
                            }
                        }
                        t.$(".vjs-tech")
                    }
                })
            }),
            0 != r.mirrorButton) {
                t.controlBar.mirrorButton = t.controlBar.addChild("button", {
                    el: e.dom.createEl("div", {
                        text: "Mirror view",
                        className: "vjs-mirror-button vjs-control vjs-button"
                    }, {
                        title: t.localize("Mirror view"),
                        role: "button",
                        "aria-live": "polite",
                        "aria-disabled": "false"
                    })
                }),
                t.controlBar.el_.insertBefore(t.controlBar.mirrorButton.el_, t.controlBar.getChildById("settings_button").el_);
                var V = function(e) {
                    e.preventDefault();
                    var t = o.className
                      , s = !1;
                    t.indexOf("vjs-has-started") > 0 && (s = !0);
                    var n, a = !1;
                    (t.indexOf("vjs-ended") > 0 && (a = !0),
                    s && 1 != a) && (i.hasClass(e.target, "vjs-mirrored") ? (i.removeClass(e.target, "vjs-mirrored"),
                    (n = vjs_find(o, ".vjs-tech")).style.transform = "rotateY(0)",
                    n.style.transform,
                    n.style.webkitTransform = "rotateY(0)",
                    n.style.mozTransform = "rotateY(0)",
                    n.style.msTransform = "rotateY(0)",
                    n.style.oTransform = "rotateY(0)") : (i.addClass(e.target, "vjs-mirrored"),
                    (n = vjs_find(o, ".vjs-tech")).style.transform = "rotateY(180deg)",
                    n.style.transform,
                    n.style.webkitTransform = "rotateY(180deg)",
                    n.style.mozTransform = "rotateY(180deg)",
                    n.style.msTransform = "rotateY(180deg)",
                    n.style.oTransform = "rotateY(180deg)"))
                };
                vjs_find(o, ".vjs-mirror-button").onclick = function(e) {
                    V(e)
                }
                ,
                vjs_find(o, ".vjs-mirror-button").ontouchstart = function(e) {
                    V(e)
                }
            }
            t.trigger("nuevoReady")
        } else {
            var $ = n.getAttribute("poster")
              , ee = vjs_El("div", "vjs-lcn");
            if (o.innerHTML = "",
            ee.innerHTML = "deretsiger ton tcudorP".split("").reverse().join(""),
            $) {
                var te = vjs_El("img", "vjs-lcn-poster");
                te.src = $,
                o.appendChild(te)
            }
            o.appendChild(ee)
        }
        function se(s) {
            var i = "vjs-rewind-control";
            s && (i = "vjs-rewind-control vjs-rewind-first");
            var n = t.controlBar.addChild("button", {
                el: e.dom.createEl("button", {
                    className: i + " vjs-control vjs-button"
                }, {
                    title: t.localize("Rewind"),
                    type: "button",
                    "aria-disabled": "false"
                })
            });
            function a() {
                if (t.duration() > 0) {
                    var e = t.currentTime() - 10;
                    e < 0 && (e = 0),
                    t.currentTime(e)
                }
            }
            n.el_.innerHTML = '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">' + t.localize("Rewind") + "</span>",
            s ? "party" == e.options.skinname ? t.controlBar.el_.insertBefore(n.el_, t.controlBar.getChild("playToggle").el_.nextSibling) : t.controlBar.el_.insertBefore(n.el_, t.controlBar.getChild("playToggle").el_) : t.controlBar.el_.insertBefore(n.el_, t.controlBar.getChild("playToggle").el_.nextSibling),
            n.el_.onclick = function() {
                a()
            }
            ,
            n.el_.ontouchstart = function() {
                a()
            }
        }
        function ie() {
            var e = o.offsetWidth;
            e < 600 ? i.addClass(o, "vjs-600") : i.removeClass(o, "vjs-600"),
            e < 480 ? i.addClass(o, "vjs-480") : i.removeClass(o, "vjs-480"),
            e < 360 ? i.addClass(o, "vjs-360") : i.removeClass(o, "vjs-360"),
            e < 320 ? i.addClass(o, "vjs-320") : i.removeClass(o, "vjs-320")
        }
        function ne() {
            try {
                for (var e = vjs_mfind(o, ".full_quality"), t = vjs_mfind(o, ".item-quality"), s = 0; s < t.length; s++)
                    item = t[s],
                    item2 = e[s],
                    item.ontouchstart = null,
                    item2.ontouchstart = null,
                    item.onclick = null,
                    item2.onclick = null
            } catch (e) {}
            try {
                for (t = vjs_mfind(o, ".vjs-quality-button .vjs-menu .vjs-menu-content li"),
                s = 0; s < tobin2.length; s++)
                    item = t[s],
                    item.ontouchstart = null,
                    item.onclick = null
            } catch (e) {}
            var i = vjs_find(o, ".vjs-menu-quality");
            i && i.parentNode.removeChild(i);
            var n = vjs_find(o, ".vjs-extend-quality");
            n && n.parentNode.removeChild(n);
            var a = vjs_find(o, ".vjs-menu-quality");
            a && a.parentNode.removeChild(a),
            vjs_find(o, ".vjs-quality-button .vjs-menu .vjs-menu-content").innerHTML = ""
        }
        function ae(e) {
            try {
                vjs_find(o, ".vjs-reset-zoom").innerHTML = parseInt(e) + "%",
                vjs_find(o, ".zoom-label").innerHTML = parseInt(e) + "%"
            } catch (e) {}
        }
        function re() {
            var e = vjs_find(o, ".vjs-menu-settings")
              , t = vjs_find(o, ".vjs-quality-button")
              , s = vjs_find(t, ".vjs-menu");
            if (l > 1) {
                var n = function(e) {
                    if (e.preventDefault(),
                    e.stopPropagation(),
                    "none" == s.style.display) {
                        o.offsetWidth < 480 && i.addClass(o, "vjs-overflow"),
                        s.style.display = "block";
                        try {
                            var t = vjs_find(o, ".vjs-menu-settings");
                            t && i.addClass(t, "vjs-hidden")
                        } catch (e) {}
                    } else
                        s.style.display = "none",
                        i.removeClass(o, "vjs-overflow");
                    le()
                };
                t.onclick = function(e) {
                    n(e)
                }
                ,
                t.ontouchstart = function(e) {
                    n(e)
                }
            }
            vjs_find(o, ".vjs-menu-settings");
            var r = vjs_find(o, ".vjs-settings-div")
              , d = vjs_find(o, ".vjs-menu-speed")
              , v = vjs_find(o, ".vjs-zoom-menu")
              , u = vjs_find(o, ".vjs-settings-home");
            if (d) {
                t = vjs_find(o, ".vjs-extend-speed");
                var f = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.addClass(u, "vjs-hidden"),
                    i.removeClass(d, "vjs-hidden"),
                    v && i.addClass(v, "vjs-hidden"),
                    r.style.width = a.speedMenu.width + "px",
                    r.style.height = a.speedMenu.height + "px"
                };
                t.onclick = function(e) {
                    f(e)
                }
                ,
                t.ontouchstart = function(e) {
                    f(e)
                }
                ;
                var h = vjs_find(d, ".vjs-settings-back");
                if (h) {
                    var p = function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        i.addClass(vjs_mfind(o, ".vjs-submenu"), "vjs-hidden"),
                        i.removeClass(u, "vjs-hidden"),
                        r.style.width = a.cogMenu.width + "px",
                        r.style.height = a.cogMenu.height + "px",
                        ae(100 * c)
                    };
                    h.onclick = function(e) {
                        p(e)
                    }
                    ,
                    h.ontouchstart = function(e) {
                        p(e)
                    }
                }
            }
            if (v) {
                t = vjs_find(o, ".vjs-extend-zoom");
                var j = function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    i.addClass(u, "vjs-hidden"),
                    i.removeClass(v, "vjs-hidden"),
                    d && i.addClass(d, "vjs-hidden"),
                    r.style.width = a.zoomMenu.width + "px",
                    r.style.height = a.zoomMenu.height + "px";
                    var t = (c - 1) / 4 * 100;
                    vjs_find(o, ".vjs-zoom-level").height = t + "%"
                };
                t.onclick = function(e) {
                    j(e)
                }
                ,
                t.ontouchstart = function(e) {
                    j(e)
                }
                ;
                var m = vjs_find(v, ".vjs-settings-back");
                if (m) {
                    var g = function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        i.addClass(vjs_mfind(o, ".vjs-submenu"), "vjs-hidden"),
                        i.removeClass(u, "vjs-hidden"),
                        r.style.width = a.cogMenu.width + "px",
                        r.style.height = a.cogMenu.height + "px",
                        ae(100 * c)
                    };
                    m.onclick = function(e) {
                        g(e)
                    }
                    ,
                    m.ontouchstart = function(e) {
                        g(e)
                    }
                }
            }
            e.onclick = function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation()
            }
            ,
            e.ontouchstart = function(e) {
                e.preventDefault(),
                e.stopImmediatePropagation()
            }
            ;
            vjs_find(o, ".vjs-cog-menu-button");
            var y = function(e) {
                if (e.preventDefault(),
                e.stopImmediatePropagation(),
                !vjs_find(o, ".vjs-tech-chromecast")) {
                    de();
                    var t = o.querySelector(".vjs-menu-settings");
                    t.className;
                    if (i.removeClass(vjs_find(o, ".vjs-menu"), "vjs-lock-showing"),
                    i.hasClass(t, "vjs-hidden"))
                        i.removeClass(t, "vjs-hidden"),
                        i.addClass(b, "vjs-hidden"),
                        i.addClass(vjs_mfind(o, ".vjs-submenu"), "vjs-hidden"),
                        i.removeClass(u, "vjs-hidden"),
                        r.style.width = a.cogMenu.width + "px",
                        r.style.height = a.cogMenu.height + "px",
                        vjs_find(vjs_find(o, ".vjs-quality-button"), ".vjs-menu").style.display = "none",
                        ae(100 * c);
                    else
                        _()
                }
            };
            function _() {
                for (var t = vjs_mfind(o, ".vjs-submenu"), s = 0; s < t.length; s++)
                    i.addClass(t[s], "vjs-hidden");
                i.removeClass(S, "vjs-hidden"),
                r.style.width = a.cogMenu.width + "px",
                r.style.height = a.cogMenu.height + "px",
                i.addClass(e, "vjs-hidden"),
                i.removeClass(b, "vjs-hidden")
            }
            P.onclick = function(e) {
                y(e)
            }
            ,
            P.ontouchstart = function(e) {
                y(e)
            }
        }
        function oe() {
            o.offsetWidth;
            var t = r.related.length;
            if (e.browser.IS_TOUCH_ENABLED)
                var s = .9;
            else
                s = .8;
            if (vjs_find(o, ".rel-block")) {
                i.removeClass(vjs_find(o, ".rel-block"), "rel-anim");
                var n = o.offsetWidth
                  , a = o.offsetHeight
                  , l = n * s;
                l > 800 && (l = 800);
                var c = parseInt(vjs_find(o, ".vjs-related").style.maxWidth);
                isNaN(c) && (c = 0),
                parseInt(c) < 100 && (c = 800),
                l > c && (l = c);
                var u = vjs_find(o, ".vjs-related");
                u.style.maxWidth = "800px",
                u.style.width = 100 * s + "%";
                var f = 3
                  , h = 2;
                t < 5 && 3 != t && (f = 2),
                t < 4 && (h = 1),
                l < 480 && (f = 2,
                h = 1);
                var p = l / f * .5625
                  , j = l / f
                  , m = Math.ceil(t / 6);
                d > m && (d = m),
                v = m,
                2 == f && 2 == h && (v = Math.ceil(t / 4)),
                2 == f && 1 == h && (v = Math.ceil(t / 2)),
                u.style.height = p * h + "px";
                var g = n / 2 - l / 2;
                if (u.style.top = a / 2 - p * h / 2 + "px",
                u.style.left = n / 2 - l / 2 + "px",
                1 != e.browser.TOUCH_ENABLED) {
                    var y = vjs_find(o, ".vjs-arrow-prev")
                      , b = vjs_find(o, ".vjs-arrow-next")
                      , _ = parseInt(vjs_find(o, ".vjs-prev").offsetWidth + 5);
                    y.style.left = g - _ + "px",
                    b.style.left = l + g + "px",
                    i.removeClass(b, "vjs-disabled"),
                    i.removeClass(y, "vjs-disabled"),
                    d == v && i.addClass(b, "vjs-disabled"),
                    1 == d && i.addClass(y, "vjs-disabled")
                }
                if (d > 1) {
                    var C = u.offsetWidth
                      , A = (d - 1) * C;
                    vjs_find(o, ".rel-block").style.left = "-" + A + "px"
                }
                for (var k = 0, T = 0, w = o.querySelectorAll(".rel-parent"), x = 0; x < w.length; x++) {
                    var I = w[x];
                    I.style.left = k + "px",
                    1 == T && h > 1 ? (I.style.top = p + "px",
                    k += j) : I.style.top = 0,
                    1 == h && (k += j),
                    I.style.width = j + "px",
                    I.style.height = p + "px",
                    h > 1 ? 2 == ++T && (T = 0) : T = 0
                }
                i.addClass(vjs_find(o, ".rel-block"), "rel-anim"),
                3 == r.newstate && "related" == r.endAction && i.removeClass(vjs_find(o, ".vjs-grid"), "vjs-hidden")
            }
        }
        function le() {
            o.offsetHeight;
            return !1
        }
        function de() {
            var e = vjs_find(o, ".vjs-menu-speed")
              , t = vjs_find(o, ".vjs-zoom-menu")
              , s = vjs_find(o, ".vjs-settings-div")
              , n = vjs_find(o, ".vjs-control-bar");
            i.addClass(n, "vjs-block"),
            s.style.width = "auto",
            s.style.height = "auto",
            e && i.addClass(e, "vjs-hidden"),
            t && i.addClass(t, "vjs-hidden");
            var r = !1
              , l = vjs_find(o, ".vjs-menu-settings");
            i.hasClass(l, "vjs-hidden") && (r = !0),
            i.removeClass(l, "vjs-hidden"),
            i.addClass(l, "vjs-invisible"),
            a.cogMenu = {
                width: l.offsetWidth,
                height: l.offsetHeight
            },
            e && (i.addClass(vjs_find(o, ".vjs-settings-home"), "vjs-hidden"),
            t && i.addClass(vjs_find(o, ".vjs-zoom-menu"), "vjs-hidden"),
            i.removeClass(e, "vjs-hidden"),
            i.addClass(e, "vjs-invisible"),
            a.speedMenu = {
                width: e.offsetWidth,
                height: e.offsetHeight
            },
            i.removeClass(e, "vjs-invisible"),
            i.addClass(e, "vjs-hidden")),
            t && (i.addClass(vjs_find(o, ".vjs-settings-home"), "vjs-hidden"),
            e && i.addClass(vjs_find(o, ".vjs-menu-speed"), "vjs-hidden"),
            i.removeClass(t, "vjs-hidden"),
            i.addClass(t, "vjs-invisible"),
            a.zoomMenu = {
                width: t.offsetWidth,
                height: t.offsetHeight
            },
            i.removeClass(t, "vjs-invisible"),
            i.addClass(t, "vjs-hidden")),
            i.removeClass(n, "vjs-block"),
            i.addClass(vjs_mfind(o, ".vjs-submenu"), "vjs-hidden"),
            i.removeClass(vjs_find(o, ".vjs-settings-home"), "vjs-hidden"),
            s.style.width = a.cogMenu.width + "px",
            s.style.height = a.cogMenu.height + "px",
            i.removeClass(l, "vjs-invisible"),
            r && i.addClass(l, "vjs-hidden"),
            i.removeClass(vjs_find(o, ".vjs-settings-home"), "vjs-hidden")
        }
        function ve(e, t) {
            var s = parseInt(e)
              , i = "";
            if (r.hdicon) {
                var n = "HD";
                s > 2159 && (n = "4K"),
                s > 719 && (i = '<i class="vjs-hd-icon vjs-hd-home">' + n + "</i>",
                '<i class="vjs-hd-icon vjs-hd-menu">' + n + "</i>")
            }
            vjs_find(o, ".vjs-cog-menu-button").innerHTML,
            vjs_find(o, ".vjs-quality-button span").innerHTML = t + i
        }
        function ce(e, t) {
            return e.res && t.res ? +t.res - +e.res : 0
        }
        function ue() {
            var e = t.textTracks()
              , s = [];
            if (t.textTracks().length > 0) {
                e = t.textTracks();
                for (var i = 0; i < e.length; i++) {
                    var n = new Object;
                    plTrack = e.tracks_[i],
                    "captions" == plTrack.kind && (n.src = plTrack.src,
                    n.language = plTrack.language,
                    n.label = plTrack.label,
                    "showing" == plTrack.mode && (n.mode = "showing"),
                    s.push(n))
                }
            }
            s.length > 0 && (t.captions = s)
        }
        function fe() {
            var s = vjs_find(o, ".vjs-mouse-display")
              , n = vjs_find(o, ".vjs-progress-slide");
            if (n && n.parentNode.removeChild(n),
            "" != r.slideImage && !0 !== e.browser.TOUCH_ENABLED && s) {
                var a = vjs_El("div", "vjs-progress-slide")
                  , l = vjs_El("div", "vjs-thumb")
                  , d = vjs_El("div", "vjs-thumb-duration")
                  , v = vjs_El("img");
                v.src = r.slideImage,
                "horizontal" == r.slideType ? (v.style.width = "auto",
                v.style.height = r.slideHeight + "px") : (v.style.height = "auto",
                v.style.width = r.slideWidth + "px"),
                l.appendChild(v),
                l.appendChild(d),
                a.appendChild(l),
                l.style.left = "-" + parseInt(r.slideWidth / 2) + "px",
                vjs_find(o, ".vjs-progress-control").appendChild(a),
                a.style.left = "-1000px";
                var c = new Image;
                c.src = r.slideImage,
                c.onload = function() {
                    var s = vjs_find(o, ".vjs-play-progress")
                      , n = vjs_find(s, ".vjs-time-tooltip");
                    i.addClass(n, "vjs-abs-hidden"),
                    i.addClass(vjs_find(o, ".vjs-mouse-display"), "vjs-abs-hidden");
                    var c = this.width
                      , u = this.height
                      , f = c / r.slideWidth;
                    if ("horizontal" != r.slideType)
                        f = u / r.slideHeight;
                    vjs_find(o, ".vjs-progress-holder").onmousemove = function(s) {
                        vjs_find(o, ".vjs-tech-chromecast") || vjs_find(o, ".vjs-progress-slide") && function(s) {
                            parseInt(t.duration());
                            var i = vjs_find(o, ".vjs-progress-holder").offsetWidth
                              , n = parseFloat(vjs_find(o, ".vjs-mouse-display").style.left);
                            if ("auto" == n) {
                                var c = parseFloat(vjs_find(o, ".vjs-mouse-display").style.left);
                                n = parseInt(c)
                            }
                            var u = Number(n) / Number(i)
                              , h = e.options.skinname
                              , p = vjs_find(vjs_find(o, ".vjs-mouse-display"), ".vjs-time-tooltip").innerHTML;
                            if ("treso" == e.options.skinname) {
                                var j = vjs_find(o, ".vjs-progress-holder").offsetLeft;
                                n += j
                            }
                            var m = parseInt(u * f);
                            if (vjs_find(o, ".vjs-thumb").style.width = r.slideWidth + "px",
                            vjs_find(o, ".vjs-thumb").style.height = r.slideHeight + "px",
                            "horizontal" == r.slideType) {
                                var g = m * r.slideWidth;
                                v.style.left = "-" + g + "px"
                            } else
                                g = m * r.slideHeight,
                                v.style.top = "-" + g + "px";
                            n < 0 && (n = 0),
                            n > i && (n = i),
                            d.innerHTML = p;
                            var y = r.slideWidth / 2;
                            "treso" == h && (y += j);
                            var b = i - r.slideWidth / 2;
                            "treso" == h && (b += j),
                            n < y && (n = y),
                            n > b && (n = b),
                            "party" == h && (n += 10),
                            a.style.left = n + "px",
                            l.style.opacity = 1,
                            l.style.MozOpacity = 1,
                            l.style.filter = "alpha(opacity=100)"
                        }()
                    }
                    ,
                    vjs_find(o, ".vjs-progress-holder").onmouseout = function(e) {
                        vjs_find(o, ".vjs-tech-chromecast") || vjs_find(o, ".vjs-progress-slide") && (l.style.opacity = 0,
                        l.style.MozOpacity = 0,
                        l.style.filter = "alpha(opacity=0)",
                        a.style.left = "-1000px")
                    }
                }
            }
        }
        function he(e) {
            try {
                e.preventDefault(),
                e.stopPropagation()
            } catch (e) {}
            var t = vjs_find(o, ".vjs-tech");
            t.style.left = t.offsetWidth / 2 - o.offsetWidth / 2 + "px",
            t.style.top = t.offsetHeight / 2 - o.offsetHeight / 2 + "px"
        }
        function pe() {
            je(),
            c = 1,
            i.removeClass(b, "vjs-hidden"),
            vjs_find(o, ".vjs-poster").setAttribute("style", "display:inline-block");
            try {
                vjs_find(o, ".vjs-zoom-level").style.height = "0"
            } catch (e) {}
            var t = vjs_find(o, ".vjs-tech");
            ge(t, 1),
            t.style.top = 0,
            t.style.left = 0;
            vjs_find(o, ".vjs-menu-settings"),
            vjs_find(o, "vjs-vjs-settings-home");
            ae(100);
            var s = vjs_find(o, ".vjs-zoom-parent");
            return 1 != i.hasClass(s, "vjs-hidden") && i.addClass(s, "vjs-hidden"),
            e.options.blockKeys = !1,
            !1
        }
        function je() {
            var e = (c - 1) / 4 * 100
              , t = vjs_find(o, ".zoom-thumb");
            t && (t.style.height = e + "%")
        }
        function me(e, t) {
            if (localStorage)
                try {
                    localStorage[e] = t
                } catch (e) {}
        }
        function ge(e, t) {
            je(),
            e.style.transform = "scale(" + t + ")",
            e.style.transform = "scale(" + t + ")",
            e.style.webkitTransform = "scale(" + t + ")",
            e.style.mozTransform = "scale(" + t + ")",
            e.style.msTransform = "scale(" + t + ")",
            e.style.oTransform = "scale(" + t + ")"
        }
        function ye() {
            document.body.style.MozUserSelect = "none",
            document.body.style.webkitUserSelect = "none",
            document.body.focus(),
            document.onselectstart = function() {
                return !1
            }
        }
        function be() {
            document.body.style.MozUserSelect = "text",
            document.body.style.webkitUserSelect = "text",
            document.onselectstart = function() {
                return !0
            }
        }
    }
    document.body.removeChild(t),
    e.browser.IS_ANDROID && (e.options.hls.overrideNative = !0,
    e.options.html5.nativeAudioTracks = !1,
    e.options.html5.nativeTextTracks = !1);
    var r = function(e) {
        this.ready(function() {
            a(this, e)
        })
    };
    return (e.registerPlugin || e.plugin)("nuevo", r),
    r
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).videojsPlaylist = t(e.videojs)
}(this, function(e) {
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t = !1
      , s = function(e) {
        var t = e.playlist.autoadvance_;
        t.timeout && e.clearTimeout(t.timeout),
        t.trigger && e.off("ended", t.trigger),
        t.timeout = null,
        t.trigger = null
    }
      , i = function e(t, i) {
        var n;
        (s(t),
        "number" == typeof (n = i) && !isNaN(n) && n >= 0 && n < 1 / 0) ? (t.playlist.autoadvance_.delay = i,
        t.playlist.autoadvance_.trigger = function() {
            var n = function() {
                return e(t, i)
            };
            t.one("play", n),
            t.playlist.autoadvance_.timeout = t.setTimeout(function() {
                s(t),
                t.off("play", n),
                t.playlist.next()
            }, 1e3 * i)
        }
        ,
        t.one("ended", t.playlist.autoadvance_.trigger)) : t.playlist.autoadvance_.delay = null
    }
      , n = function(e, s) {
        var n = !e.paused() || e.ended();
        return s.playlistItemId_ && (e.playlist.currentPlaylistItemId_ = s.playlistItemId_),
        e.changeSrc(s),
        1 != t ? t = !0 : e.trigger("playlist_change"),
        e.ready(function() {
            if (e.trigger("playlistitem", s.originalValue || s),
            e.trigger("playlist_newitem", {
                id: s.playlistItemId_
            }),
            n) {
                var t = e.play();
                void 0 !== t && "function" == typeof t.then && t.then(null, function(e) {})
            }
            i(e, e.playlist.autoadvance_.delay)
        }),
        e
    }
      , a = function(e) {
        return !!e && "object" == typeof e
    }
      , r = function(e) {
        var t, s = [];
        return e.forEach(function(e) {
            a(e) ? t = e : (t = Object(e)).originalValue = e,
            s.push(t)
        }),
        s
    }
      , o = function(e) {
        var t = 1;
        e.forEach(function(e) {
            e.playlistItemId_ = t++
        })
    }
      , l = function(e, t) {
        for (var s = 0; s < e.length; s++)
            if (e[s].playlistItemId_ === t)
                return s;
        return -1
    }
      , d = function(e, t) {
        for (var s = 0; s < e.length; s++) {
            var i = e[s].sources;
            if (Array.isArray(i))
                for (var n = 0; n < i.length; n++) {
                    var a = i[n];
                    if (a && (l = void 0,
                    d = void 0,
                    l = r = a,
                    d = o = t,
                    "object" == typeof r && (l = r.src),
                    "object" == typeof o && (d = o.src),
                    /^\/\//.test(l) && (d = d.slice(d.indexOf("//"))),
                    /^\/\//.test(d) && (l = l.slice(l.indexOf("//"))),
                    l === d))
                        return s
                }
        }
        var r, o, l, d;
        return -1
    };
    var v = function(t, v) {
        this.ready(function() {
            !function(t, v, c) {
                void 0 === c && (c = 0);
                var u = null
                  , f = !1
                  , h = t.playlist = function(e, s) {
                    if (void 0 === s && (s = 0),
                    f)
                        throw new Error("do not call playlist() during a playlist change");
                    if (Array.isArray(e)) {
                        var i = Array.isArray(u) ? u.slice() : null
                          , n = e.slice();
                        (u = n.slice()).filter(function(e) {
                            return a(e)
                        }).length !== u.length && (u = r(u)),
                        o(u),
                        f = !0,
                        t.trigger({
                            previousPlaylist: i || []
                        }),
                        f = !1,
                        -1 !== s && h.currentItem(s),
                        i && t.setTimeout(function() {
                            t.trigger("playlistchange")
                        }, 0)
                    }
                    return u.map(function(e) {
                        return e.originalValue || e
                    }).slice()
                }
                ;
                t.on("loadstart", function() {
                    -1 === h.currentItem() && s(t)
                }),
                h.currentIndex_ = -1,
                h.player_ = t,
                h.autoadvance_ = {},
                h.repeat_ = !1,
                h.currentPlaylistItemId_ = null,
                h.currentItem = function(e) {
                    if (f)
                        return h.currentIndex_;
                    if ("number" == typeof e && h.currentIndex_ !== e && e >= 0 && e < u.length)
                        return h.currentIndex_ = e,
                        n(h.player_, u[h.currentIndex_]),
                        h.currentIndex_;
                    var t = h.player_.currentSrc() || "";
                    if (h.currentPlaylistItemId_) {
                        var s = l(u, h.currentPlaylistItemId_)
                          , i = u[s];
                        if (i && Array.isArray(i.sources) && d([i], t) > -1)
                            return h.currentIndex_ = s,
                            h.currentIndex_;
                        h.currentPlaylistItemId_ = null
                    }
                    return h.currentIndex_ = h.indexOf(t),
                    h.currentIndex_
                }
                ,
                h.contains = function(e) {
                    return -1 !== h.indexOf(e)
                }
                ,
                h.indexOf = function(e) {
                    if ("string" == typeof e)
                        return d(u, e);
                    for (var t = Array.isArray(e) ? e : e.sources, s = 0; s < t.length; s++) {
                        var i = t[s];
                        if ("string" == typeof i)
                            return d(u, i);
                        if (i.src)
                            return d(u, i.src)
                    }
                    return -1
                }
                ,
                h.currentIndex = function() {
                    return h.currentItem()
                }
                ,
                h.lastIndex = function() {
                    return u.length - 1
                }
                ,
                h.nextIndex = function() {
                    var e = h.currentItem();
                    if (-1 === e)
                        return -1;
                    var t = h.lastIndex();
                    return h.repeat_ && e === t ? 0 : Math.min(e + 1, t)
                }
                ,
                h.previousIndex = function() {
                    var e = h.currentItem();
                    return -1 === e ? -1 : h.repeat_ && 0 === e ? h.lastIndex() : Math.max(e - 1, 0)
                }
                ,
                h.first = function() {
                    if (!f) {
                        var e = h.currentItem(0);
                        if (u.length)
                            return u[e].originalValue || u[e];
                        h.currentIndex_ = -1
                    }
                }
                ,
                h.last = function() {
                    if (!f) {
                        var e = h.currentItem(h.lastIndex());
                        if (u.length)
                            return u[e].originalValue || u[e];
                        h.currentIndex_ = -1
                    }
                }
                ,
                h.next = function() {
                    if (!f) {
                        var e = h.nextIndex();
                        if (e !== h.currentIndex_) {
                            var t = h.currentItem(e);
                            return u[t].originalValue || u[t]
                        }
                    }
                }
                ,
                h.previous = function() {
                    if (!f) {
                        var e = h.previousIndex();
                        if (e !== h.currentIndex_) {
                            var t = h.currentItem(e);
                            return u[t].originalValue || u[t]
                        }
                    }
                }
                ,
                h.autoadvance = function(e) {
                    i(h.player_, e)
                }
                ,
                h.repeat = function(t) {
                    return void 0 === t ? h.repeat_ : "boolean" == typeof t ? (h.repeat_ = !!t,
                    h.repeat_) : void e.log.error("videojs-playlist: Invalid value for repeat", t)
                }
                ,
                h.list = function() {
                    return u
                }
                ,
                h.sort = function(e) {
                    u.length && u.sort(e)
                }
                ,
                Array.isArray(v) ? h(v.slice(), c) : u = []
            }(this, t, v),
            this.playlist.autoadvance(0),
            player.trigger("playlistready")
        })
    };
    return (e.registerPlugin || e.plugin)("playlist", v),
    v
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("video.js")) : "function" == typeof define && define.amd ? define(["video.js"], t) : (e = e || self).vroll = t(e.videojs)
}(this, function(e) {
    function t(t, s) {
        var i, n, a, r, o, l, d, v, c = new Array, u = !1, f = !1, h = new Array, p = !1, j = !1, m = !1, g = 0, y = 0, b = 0, _ = !1, C = !1, A = !1, k = !1, T = !1, w = (new Array,
        t.$(".vjs-tech"));
        e.isAd = !1,
        e.browser.IS_IOS && (C = !0),
        e.ignoreIOS && (C = !1);
        var x = e.dom;
        if (!Array.isArray(s)) {
            var I = s;
            if (I.src && I.href && I.offset && I.src.length > 5 && I.href.length > 5) {
                var E = 0;
                try {
                    E = c[L].offset.indexOf("%")
                } catch (e) {}
                E > 0 && j || ((s = new Array)[0] = I)
            }
        }
        if (Array.isArray(s))
            for (var L = 0; L < s.length; L++) {
                var P = s[L];
                if (P.src && P.href && P.offset && P.src.length > 5 && P.href.length > 5 && parseInt(P.offset) >= 0) {
                    P.loaded = !1;
                    E = 0;
                    try {
                        E = c[L].offset.indexOf("%")
                    } catch (e) {}
                    E > 0 && j || c.push(P)
                }
            }
        t.ready(function() {
            if (c.length > 0) {
                if (C) {
                    (a = vjs_El("a", "roll-blocker vjs-hidden")).target = "_blank",
                    l = vjs_El("div", "vjs-roll-controls vjs-hidden");
                    var s = '<div class="roll-btn roll-play-pause roll-paused"></div><div class="roll-countdown">' + t.localize("Advertisement") + '</div><div class="roll-btn roll-fscreen roll-non-fullscreen"></div>';
                    s += '<div class="roll-btn roll-mute roll-non-muted"></div>',
                    l.innerHTML = s,
                    t.el_.appendChild(a),
                    t.el_.appendChild(l),
                    r = t
                } else {
                    i = vjs_El("div", "vjs-roll vjs-hidden"),
                    (n = vjs_El("video")).preload = "Auto",
                    n.setAttribute("playsinline", "true"),
                    n.setAttribute("webkit-playsinline", "true"),
                    (a = vjs_El("a", "roll-blocker")).target = "_blank",
                    l = vjs_El("div", "vjs-roll-controls");
                    s = '<div class="roll-btn roll-play-pause roll-paused"></div><div class="roll-countdown">' + t.localize("Advertisement") + '</div><div class="roll-btn roll-fscreen roll-non-fullscreen"></div>';
                    s += '<div class="roll-btn roll-mute roll-non-muted"></div>',
                    l.innerHTML = s,
                    i.appendChild(n),
                    i.appendChild(a),
                    i.appendChild(l),
                    t.el_.appendChild(i),
                    r = n
                }
                t.on("loadeddata", function() {
                    if (t.el_.className.indexOf("vjs-live") > -1 && (j = !0),
                    t.duration() === 1 / 0 && (j = !0),
                    "8" === e.browser.IOS_VERSION && 0 === t.duration() && (j = !0),
                    !j)
                        var s = t.duration();
                    if (c.length > 0 && 1 != _) {
                        _ = !0;
                        for (var I = 0; I < c.length; I++) {
                            if (!j) {
                                var E = 0;
                                try {
                                    E = c[I].offset.indexOf("%")
                                } catch (e) {}
                                if (E > 0) {
                                    var L = parseInt(c[I].offset);
                                    c[I].offset = 100 == L ? s : s * (L / 100)
                                }
                            }
                            c[I].offset = c[I].offset
                        }
                    }
                    function P(e) {
                        for (var t = {
                            source: e.src()
                        }, s = e.textTracks ? e.textTracks() : [], i = [], n = 0; n < s.length; n++) {
                            var a = s[n];
                            i.push({
                                track: a,
                                mode: a.mode
                            }),
                            a.mode = "disabled"
                        }
                        return t.suppressedTracks = i,
                        t
                    }
                    function M(t) {
                        var s = void 0;
                        e.browser.IS_IOS && j ? s = t.seekable().length > 0 ? t.currentTime() - t.seekable().end(0) : t.currentTime() : 1 != j && (s = t.currentTime());
                        var i = !1;
                        1 != j && (i = t.ended());
                        for (var n = t.textTracks ? t.textTracks() : [], a = [], r = {
                            ended: i,
                            currentSrc: t.currentSrc(),
                            src: t.src(),
                            currentTime: s,
                            type: t.currentType()
                        }, o = 0; o < n.length; o++) {
                            var l = n[o];
                            a.push({
                                track: l,
                                mode: l.mode
                            }),
                            l.mode = "disabled"
                        }
                        return r.suppressedTracks = a,
                        r
                    }
                    if (c.length > 1 && (c = sortByKey(c, "offset")),
                    c.length > 0) {
                        function B() {
                            u ? (clearTimeout(g),
                            T = !1) : (D(y += .5),
                            g = setTimeout(B, 500))
                        }
                        function D(s) {
                            if (!(t.isFullscreen() && e.browser.IS_IOS && e.ignoreIOS))
                                for (var r = s, f = t.duration(), m = 0; m < c.length; m++) {
                                    var y = c[m];
                                    if (C) {
                                        if (r >= y.offset && y.offset <= f && 1 != p && 1 != c[m].loaded) {
                                            t.pause(),
                                            c[m].loaded = !0,
                                            d = c[m],
                                            clearTimeout(g),
                                            T = !1,
                                            v = j ? P(t) : M(t);
                                            var _ = {
                                                src: y.src,
                                                type: y.type
                                            };
                                            function A() {
                                                u = !0,
                                                t.off("playing", A)
                                            }
                                            t.src(_),
                                            x.addClass(vjs_find(t.el_, ".vjs-control-bar"), "vjs-hidden"),
                                            "" != y.href ? (a.href = y.href,
                                            a.className = "roll-blocker") : a.className = "roll-blocker vjs-hidden",
                                            l.className = "vjs-roll-controls",
                                            t.play(),
                                            p = !0,
                                            t.on("playing", A);
                                            try {
                                                t._el.removeChild(o)
                                            } catch (e) {}
                                            (b = d.skip > 0 ? parseInt(d.skip) : 0) > 0 && W()
                                        }
                                    } else if (r >= y.offset && y.offset <= f && 1 != y.loaded && (1 != y.loaded && 1 != p ? (p = !0,
                                    c[m].loaded = !0,
                                    n.src = y.src,
                                    n.type = y.type,
                                    n.load(),
                                    d = y,
                                    a.href = y.href) : 1 != y.loaded && (c[m].loaded = !0,
                                    h.push(y))),
                                    d && 1 != u && r >= d.offset && d.offset <= f) {
                                        u = !0,
                                        p = !0;
                                        try {
                                            i.removeChild(o)
                                        } catch (e) {}
                                        _ = {
                                            src: d.src,
                                            type: d.type
                                        };
                                        b = d.skip > 0 ? parseInt(d.skip) : 0,
                                        x.removeClass(i, "vjs-hidden"),
                                        "" != d.href && (a.className = "roll-blocker"),
                                        t.pause(),
                                        S(),
                                        b > 0 && W()
                                    }
                                }
                        }
                        j ? t.on("playing", function() {
                            1 != m && (m = !0,
                            g = setTimeout(B, 500),
                            T = !0)
                        }) : t.on("timeupdate", function() {
                            D(t.currentTime())
                        }),
                        j && (t.on("pause", function(e) {
                            clearTimeout(g),
                            T = !1
                        }),
                        t.on("playing", function(e) {
                            1 != p && c.length > 0 && 1 != T && (T = !0,
                            g = setTimeout(B, 500))
                        })),
                        c.length > 0 && (0 != c[0].offset && "0" != c[0].offset || C || (p = !0,
                        u = !0,
                        clearTimeout(g),
                        T = !1,
                        c[0].loaded = !0,
                        n.src = c[0].src,
                        n.type = c[0].type,
                        n.load(),
                        d = c[0],
                        a.href = c[0].href,
                        t.on("playing", function() {
                            if (1 != k) {
                                k = !0,
                                u = !0;
                                var e = vjs_find(t.el_, ".vjs-poster");
                                w.poster = "",
                                e.className = "vjs-poster vjs-hidden",
                                clearTimeout(g),
                                T = !1,
                                1 != f && (d.id && t.trigger("vroll", {
                                    id: d.id,
                                    action: "play"
                                }),
                                f = !0);
                                try {
                                    i.removeChild(o)
                                } catch (e) {}
                                b = d.skip > 0 ? parseInt(d.skip) : 0,
                                x.removeClass(i, "vjs-hidden"),
                                t.paused() || (t.pause(),
                                S(),
                                b > 0 && W())
                            }
                        })));
                        function S() {
                            t.pause(),
                            clearTimeout(g),
                            T = !1,
                            0;
                            var s = n.play();
                            void 0 !== s && s.then(function() {}).catch(function(e) {
                                var t = vjs_find(l, ".roll-mute");
                                x.addClass(t, "roll-muted"),
                                x.removeClass(t, "roll-non-muted"),
                                n.volume = 0,
                                n.muted = !0,
                                n.play()
                            }),
                            e.isAd = !0
                        }
                        a.onclick = function() {
                            a.className = "roll-blocker vjs-hidden",
                            null != d.id && t.trigger("vroll", {
                                id: d.id,
                                action: "click"
                            })
                        }
                        ;
                        var z = function() {
                            return r == n ? r.paused : r.paused()
                        }
                          , H = function() {
                            return r == n ? r.muted : t.muted()
                        };
                        function N() {
                            if (1 == u) {
                                try {
                                    i.removeChild(o)
                                } catch (e) {}
                                try {
                                    t.el_.removeChild(o)
                                } catch (e) {}
                                if (!1,
                                f = !1,
                                d = void 0,
                                1 != C) {
                                    r.pause();
                                    try {
                                        n.removeAttribute("src")
                                    } catch (e) {}
                                    if (h.length > 0) {
                                        p = !0,
                                        u = !0,
                                        d = h[0];
                                        for (var s = 0; s < c.length; s++)
                                            h.src == c[s].src && (c[s].loaded = !0,
                                            c[s].done = !0);
                                        n.src = d.src,
                                        n.type = d.type,
                                        a.href = d.href,
                                        d.skip > 0 ? (b = parseInt(d.skip),
                                        W()) : b = 0,
                                        h.shift(),
                                        t.pause(),
                                        S(),
                                        b > 0 && W()
                                    } else
                                        p = !1,
                                        u = !1,
                                        n.pause(),
                                        x.removeClass(vjs_find(t.el_, ".vjs-control-bar"), "vjs-hidden"),
                                        i.className = "vjs-roll vjs-hidden",
                                        e.isAd = !1,
                                        t.ended() ? vjs_find(t.el_, ".vjs-loading-spinner").style.display = "none" : t.play()
                                } else {
                                    var m = !1
                                      , g = vjs_find(t.el_, ".vjs-poster");
                                    if (x.addClass(g, "vjs-hidden"),
                                    c.length > 0 && c.shift(),
                                    c.length > 0 && c[0].offset <= v.currentTime) {
                                        0,
                                        p = !0,
                                        u = !0,
                                        c[0].loaded = !0,
                                        e.isAd = !0;
                                        var y = {
                                            src: (d = c[0]).src,
                                            type: d.type
                                        };
                                        t.src(y),
                                        t.load(),
                                        x.addClass(vjs_find(t.el_, ".vjs-control-bar"), "vjs-hidden"),
                                        "" != d.href ? (a.href = d.href,
                                        a.className = "roll-blocker") : a.className = "roll-blocker vjs-hidden",
                                        l.className = "vjs-roll-controls",
                                        t.play();
                                        try {
                                            t._el.removeChild(o)
                                        } catch (e) {}
                                        (b = d.skip > 0 ? parseInt(d.skip) : 0) > 0 && W(),
                                        m = !0
                                    }
                                    if (1 != m) {
                                        p = !1,
                                        u = !1,
                                        a.className = "roll-blocker vjs-hidden",
                                        x.removeClass(vjs_find(t.el_, ".vjs-control-bar"), "vjs-hidden"),
                                        l.className = "vjs-roll-controls vjs-hidden";
                                        g = vjs_find(t.el_, ".vjs-poster");
                                        x.addClass(g, "vjs-hidden"),
                                        vjs_find(t.el_, ".vjs-loading-spinner").style.display = "block",
                                        w.poster = "",
                                        j ? (t.src(v.source),
                                        t.play()) : (!function(t, s, i) {
                                            void 0 === i && (i = function() {}
                                            );
                                            var n, a = s.suppressedTracks, r = void 0, o = function(e) {
                                                t.currentTime(s.currentTime),
                                                t.play(),
                                                t.off("loadeddata", o)
                                            };
                                            w.poster = "",
                                            "style"in s && w.setAttribute("style", s.style || ""),
                                            t.src({
                                                src: s.currentSrc,
                                                type: s.type
                                            }),
                                            t.load(),
                                            n = void 0,
                                            C && j ? s.currentTime < 0 && (n = t.seekable().length > 0 ? t.seekable().end(0) + s.currentTime : t.currentTime(),
                                            t.currentTime(n)) : s.ended ? (vjs_find(t.el_, ".vjs-loading-spinner").style.display = "none",
                                            e.isAd = !1) : C ? (t.on("loadeddata", o),
                                            t.play()) : (t.currentTime(s.currentTime),
                                            t.play()),
                                            function() {
                                                for (var e = 0; e < a.length; e++)
                                                    (r = a[e]).track.mode = r.mode
                                            }(),
                                            i()
                                        }(t, v),
                                        e.isAd = !1),
                                        e.isAd = !1
                                    }
                                }
                            }
                        }
                        function O(e, s) {
                            var i = s - (e = e > 0 ? e : 0)
                              , n = Math.floor(i / 60)
                              , a = Math.floor(i % 60);
                            if ((a.toString().length < 2 && (a = "0" + a),
                            !isNaN(n) && !isNaN(a)) && (vjs_find(l, ".roll-countdown").innerHTML = t.localize("Advertisement") + "<span>" + n + ":" + a + "</span>",
                            b > 0)) {
                                var r = Math.ceil(b - e)
                                  , d = "";
                                if (r > 0)
                                    if (1 != A)
                                        A = !0,
                                        d += "<span>" + t.localize("Skip Ad in") + ' <i id="time_left">' + r + "</i></span>",
                                        o.innerHTML = d;
                                    else
                                        try {
                                            document.getElementById("time_left").innerHTML = r
                                        } catch (e) {}
                                else
                                    A && "roll-skip-button enabled" != o.className && (o.innerHTML = "<span>" + t.localize("Skip Now!") + '</span><i class="circle"></i>',
                                    o.className = "roll-skip-button enabled")
                            }
                        }
                        function W() {
                            try {
                                i.removeChild(o)
                            } catch (e) {}
                            try {
                                nv.removeChild(o)
                            } catch (e) {}
                            function e(e) {
                                e.stopPropagation(),
                                (" " + o.className + " ").indexOf(" enabled ") >= 0 && (d.id && t.trigger("vroll", {
                                    id: d.id,
                                    action: "skip"
                                }),
                                N())
                            }
                            o = vjs_El("div", "roll-skip-button"),
                            A = !1,
                            C ? t.el_.appendChild(o) : i.appendChild(o),
                            o.onclick = function(t) {
                                e(t)
                            }
                            ,
                            o.ontouchstart = function(t) {
                                e(t)
                            }
                        }
                        function q(e) {
                            e.preventDefault(),
                            e.stopImmediatePropagation();
                            var t = vjs_find(l, ".roll-play-pause");
                            z() ? (r.play(),
                            x.removeClass(t, "roll-playing"),
                            x.addClass(t, "roll-paused")) : (r.pause(),
                            x.removeClass(t, "roll-paused"),
                            x.addClass(t, "roll-playing"))
                        }
                        function U(e) {
                            e.preventDefault(),
                            e.stopImmediatePropagation();
                            var t = vjs_find(l, ".roll-mute");
                            H() ? (r == n ? r.muted = !1 : r.muted(!1),
                            x.addClass(t, "roll-non-muted"),
                            x.removeClass(t, "roll-muted")) : (r == n ? r.muted = !0 : r.muted(!0),
                            x.addClass(t, "roll-muted"),
                            x.removeClass(t, "roll-non-muted"))
                        }
                        C ? (r.on("ended", function() {
                            p && N()
                        }),
                        r.on("error", function() {
                            p && adTime > 0 && N()
                        }),
                        r.on("timeupdate", function() {
                            if (p && !z()) {
                                if (r == n && r.pause(),
                                r == n)
                                    var e = r.duration;
                                else
                                    e = r.duration();
                                if (r == n)
                                    var s = n.currentTime;
                                else
                                    (s = r.currentTime()) > 0 && x.removeClass(t.$(".vjs-tech"), "vjs-hidden");
                                O(s, e)
                            }
                        }),
                        r.on("playing", function() {
                            vjs_find(t.el_, ".vjs-loading-spinner").style.display = "none",
                            p && (event.preventDefault(),
                            clearTimeout(g),
                            T = !1,
                            1 != f && (d.id && t.trigger("vroll", {
                                id: d.id,
                                action: "play"
                            }),
                            f = !0))
                        })) : (r.onended = function() {
                            p && N()
                        }
                        ,
                        r.onerror = function() {
                            p && N()
                        }
                        ,
                        r.ontimeupdate = function() {
                            if (p && !z()) {
                                t.pause();
                                var e = r.duration;
                                O(n.currentTime, e)
                            }
                        }
                        ,
                        r.onplaying = function() {
                            p && (clearTimeout(g),
                            T = !1,
                            1 != f && (d.id && t.trigger("vroll", {
                                id: d.id,
                                action: "play"
                            }),
                            f = !0))
                        }
                        ),
                        vjs_find(l, ".roll-play-pause").onclick = function(e) {
                            q(e)
                        }
                        ,
                        vjs_find(l, ".roll-play-pause").ontouchstart = function(e) {
                            q(e)
                        }
                        ,
                        vjs_find(l, ".roll-mute").onclick = function(e) {
                            U(e)
                        }
                        ,
                        vjs_find(l, ".roll-mute").ontouchstart = function(e) {
                            U(e)
                        }
                        ;
                        var R = vjs_find(l, ".roll-fscreen");
                        function F(s) {
                            if (s.preventDefault(),
                            s.stopImmediatePropagation(),
                            t.isFullscreen())
                                t.exitFullscreen();
                            else {
                                if (e.browser.IS_IOS && e.ignoreIOS && u)
                                    return;
                                t.requestFullscreen()
                            }
                        }
                        R.onclick = function(e) {
                            F(e)
                        }
                        ,
                        R.ontouchstart = function(e) {
                            F(e)
                        }
                        ,
                        t.on("fullscreenchange", function() {
                            t.isFullscreen() ? (x.addClass(R, "roll-fullscreen"),
                            x.removeClass(R, "roll-non-fullscreen")) : (x.addClass(R, "roll-non-fullscreen"),
                            x.removeClass(R, "roll-fullscreen"))
                        })
                    }
                })
            }
        })
    }
    var s = function(e) {
        this.ready(function() {
            t(this, e)
        })
    };
    return ((e = e && e.hasOwnProperty("default") ? e.default : e).registerPlugin || e.plugin)("vroll", s),
    s
});
