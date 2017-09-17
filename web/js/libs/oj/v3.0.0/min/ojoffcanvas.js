/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,c){a.q={};o_("OffcanvasUtils",a.q,a);a.q.FT="oj-offcanvasEdge";a.q.Br="oj-offcanvas";a.q.GT="oj-mediaQueryListener";a.q.o7="oj-offcanvasHammer";a.q.p7="oj-offcanvasStyle";a.q.hE="selector";a.q.Pz="content";a.q.rw="start";a.q.qw="end";a.q.VD="top";a.q.KJ="bottom";a.q.lw="displayMode";a.q.mw="push";a.q.uS="overlay";a.q.r5="pin";a.q.Sra="modality";a.q.tUa="none";a.q.Tra="modal";a.q.JJ="_dismissHandler";
a.q.aT="_openPromise";a.q.TD="_closePromise";a.q.ww="_glassPane";a.q.s6="_surrogate";a.q.iT="data-oj-offcanvas-surrogate-id";a.q.esa="oj-offcanvas-outer-wrapper";a.q.fE="oj-offcanvas-open";a.q.Wh="oj-offcanvas-transition";a.q.e6="oj-offcanvas-pin";a.q.d6="oj-offcanvas-pin-transition";a.q.Ara="oj-offcanvas-glasspane";a.q.YD="oj-offcanvas-glasspane-dim";a.q.zsa="ojbeforeopen veto";a.q.ysa="ojbeforeclose veto";a.q.WLa={start:"oj-offcanvas-shift-start",end:"oj-offcanvas-shift-end",top:"oj-offcanvas-shift-down",
bottom:"oj-offcanvas-shift-up"};a.q.hAa={start:"oj-offcanvas-start",end:"oj-offcanvas-end",top:"oj-offcanvas-top",bottom:"oj-offcanvas-bottom"};a.q.wBa=function(b){b=b[a.q.lw];b!==a.q.uS&&b!==a.q.mw&&b!==a.q.r5&&(b=(a.sc.Gd("oj-offcanvas-option-defaults")||{}).displayMode);return b};a.q.vh=function(b){return g(b[a.q.hE])};a.q.FB=function(b){return b[a.q.Sra]===a.q.Tra};a.q.zo=function(b){return b.hasClass(a.q.fE)};a.q.xu=function(b){return b.closest("."+a.q.esa)};a.q.OM=function(b){var c=a.q.vh(b);
return a.q.Nga(b)||b[a.q.lw]===a.q.uS?c:c.parent()};a.q.LCa=function(b){var c=a.q.WLa[b];if(!c)throw"Invalid edge: "+b;return c};a.q.Zg=function(){return"rtl"===a.Q.Oj()};a.q.Zl=function(a,c){a.css({"-webkit-transform":c,transform:c})};a.q.yN=function(b,c,e){b=b===a.q.qw;if(a.q.Zg()||e)b=!b;return"translate3d("+(b?"-":"")+c+", 0, 0)"};a.q.FH=function(b,c,e){a.q.Zl(b,a.q.yN(c,e,!1))};a.q.Pda=function(b,c){return"translate3d(0, "+(b===a.q.KJ?"-":"")+c+", 0)"};a.q.LLa=function(b,c,e){a.q.Zl(b,a.q.Pda(c,
e))};a.q.Qda=function(a,c){return"translate3d(0, "+(c?"-":"")+a+", 0)"};a.q.PKa=function(b,c,e){b.addClass(a.q.Wh);a.q.Zl(b,"translate3d(0, 0, 0)");c.addClass(a.q.Wh);a.q.Zl(c,e)};a.q.yia=function(b){var c=b.edge;b=a.q.vh(b);c&&c.length||(c=b.hasClass("oj-offcanvas-start")?a.q.rw:b.hasClass("oj-offcanvas-end")?a.q.qw:b.hasClass("oj-offcanvas-top")?a.q.VD:b.hasClass("oj-offcanvas-bottom")?a.q.KJ:a.q.rw);g.data(b[0],a.q.FT,c);return c};a.q.EX=function(b){return g.data(b[0],a.q.FT)};a.q.uC=function(b,
c,e){var f=b[a.q.lw],g=a.q.vh(b),k=a.q.fE,f=f===a.q.uS?a.q.Wh+" oj-offcanvas-overlay":a.q.Wh;e?(g.addClass(k),c.addClass(f)):(b.makeFocusable&&a.Q.vR({element:g,remove:!0}),b=b.tabindex,void 0===b?g.removeAttr("tabindex"):g.attr("tabindex",b),g.removeClass(k),c.removeClass(f))};a.q.Jk=function(b){var c=a.q.vh(b),e=c.find("[autofocus]");0==e.length&&(e=c.find(":tabbable"));0==e.length?(e=c.attr("tabindex"),void 0!==e&&(b.tabindex=e),c.attr("tabindex","-1"),e=c,a.Q.vR({element:c,applyHighlight:!0}),
b.makeFocusable=!0):e=e[0];a.Ye.nI(e)};a.q.mGa=function(a){return"none"!=a.autoDismiss};a.q.qxa=function(a){var c=a.css("transitionProperty").split(","),e=a.css("transitionDelay").split(",");a=a.css("transitionDuration").split(",");for(var f=0,g=0;g<c.length;g++){var k=a[g%a.length],k=-1<k.indexOf("ms")?parseFloat(k):1E3*parseFloat(k);if(0<k)var l=e[g%e.length],l=-1<l.indexOf("ms")?parseFloat(l):1E3*parseFloat(l),f=Math.max(f,l+k)}return f+100};a.q.kq=function(b,c){function e(){f&&(clearTimeout(f),
f=void 0);b.off("transitionend.oc webkitTransitionEnd.oc otransitionend.oc oTransitionEnd.oc",e);c(b)}var f;b.on("transitionend.oc webkitTransitionEnd.oc otransitionend.oc oTransitionEnd.oc",e);f=setTimeout(e,a.q.qxa(b))};a.q.daa=function(b){a.q.close(b)["catch"](function(b){a.F.warn("Offcancas close failed: "+b)})};a.q.mH=function(b){a.q.r1(b);if(a.q.mGa(b)){var c=a.q.vh(b),e=b[a.q.JJ]=function(e){var f=e.target;a.Q.Yna(e)||"focus"===e.type&&!g(f).is(":focusable")||(null==g.data(c[0],a.q.Br)?a.q.r1(b):
a.Q.GRa(c[0],f)||a.q.daa(b))},f=document.documentElement;a.Q.Ne()&&f.addEventListener("touchstart",e,!0);f.addEventListener("mousedown",e,!0);f.addEventListener("focus",e,!0)}a.q.$B(b)};a.q.r1=function(b){var c=b[a.q.JJ];if(c){var e=document.documentElement;a.Q.Ne()&&e.removeEventListener("touchstart",c,!0);e.removeEventListener("mousedown",c,!0);e.removeEventListener("focus",c,!0);delete b[a.q.JJ];b[a.q.JJ]=null}a.q.qP(b)};a.q.$B=function(b){if(a.Q.Ne()){var d=b[a.q.hE],e=g(d),f=a.q.EX(e),h,k;f===
a.q.rw&&!a.q.Zg()||f===a.q.qw&&a.q.Zg()?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_LEFT}]]},h="swipeleft"):f===a.q.rw&&a.q.Zg()||f===a.q.qw&&!a.q.Zg()?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_RIGHT}]]},h="swiperight"):f===a.q.VD?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_UP}]]},h="swipeup"):f===a.q.KJ&&(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_DOWN}]]},h="swipedown");f=e.pi(k).on(h,function(c){c.target===e[0]&&(c.preventDefault(),a.q.daa(b))});g.data(g(d)[0],a.q.o7,{event:h,
hammer:f})}};a.q.qP=function(b){b=a.q.vh(b);0<b.length&&(b=g.data(b[0],a.q.o7))&&b.hammer.off(b.event)};a.q.xGa=function(b){return a.q.xu(b).hasClass("oj-offcanvas-page")};a.q.eO=function(b){return b[a.q.lw]===a.q.r5};a.q.Nga=function(b){return b[a.q.Pz]||a.q.xGa(a.q.vh(b))||a.q.eO(b)};a.q.BKa=function(b){var c=b.attr("style");void 0!==c&&g.data(b[0],a.q.p7,c)};a.q.wKa=function(b){var c=g.data(b[0],a.q.p7);c?b.attr("style",c):b.removeAttr("style")};a.q.Ds=function(b,c){var e=a.q.EX(b),e=a.q.LCa(e),
f=a.q.xu(b);a.u.ue(f,g);var h=f.hasClass(e);c||f.toggleClass(e,!h);return h};a.q.Fp=function(b){var c=a.q.vh(b),e=a.q.eO(b);if(g.data(c[0],a.q.Br)===b){a.q.EX(c);var f=a.q.OM(b);e?c.removeClass(a.q.fE+" "+a.q.d6):a.q.uC(b,f,!1);a.q.MJa(b);a.q.r1(b);e&&(a.q.xu(c).removeClass(a.q.e6),a.q.wKa(c));c.trigger("ojclose",b);g.removeData(c[0],a.q.Br)}};a.q.nja=function(b,c,e){var f=g(b);(c=!!c)&&a.q.zo(f)&&a.q.Sr(b,!1);f.toggleClass(a.q.hAa[e],!c)};a.q.HTa=function(b){var c=b.query;if(null!==c){var e=b[a.q.hE],
c=window.matchMedia(c),f=a.q.yia(b);b=function(b){a.q.nja(e,b.matches,f)};c.addListener(b);a.q.nja(e,c.matches,f);g.data(g(e)[0],a.q.GT,{mqList:c,mqListener:b})}};o_("OffcanvasUtils.setupResponsive",a.q.HTa,a);a.q.WTa=function(b){b=a.q.vh(b);var c=g.data(b[0],a.q.GT);c&&(c.mqList.removeListener(c.mqListener),g.removeData(b[0],a.q.GT))};o_("OffcanvasUtils.tearDownResponsive",a.q.WTa,a);a.q.jIa=function(b,c,e){function f(e){e.removeClass(a.q.Wh);l?l=!1:(a.q.Jk(b),h.trigger("ojopen",b),a.q.mH(b),c(!0))}
var h=a.q.vh(b),k=g(b[a.q.Pz]);a.u.ue(k,g);var l=!0,m=b.size,p;h.addClass(a.q.fE);window.setTimeout(function(){e===a.q.rw||e===a.q.qw?(void 0===m&&(m=h.outerWidth(!0)+"px"),a.q.Zl(h,a.q.yN(e,m,!0)),p=a.q.yN(e,m,!1)):(void 0===m&&(m=h.outerHeight(!0)+"px"),a.q.Zl(h,a.q.Qda(m,e===a.q.VD)),p=a.q.Qda(m,e!==a.q.VD));window.setTimeout(function(){a.q.PKa(h,k,p);a.q.Ds(h,!1);a.q.kq(k,f);a.q.kq(h,f)},0)},0);a.q.FL(b,h)};a.q.eIa=function(b,c,e){var f=a.q.vh(b);a.q.uC(b,f,!0);var g=b.size;g&&(e===a.q.rw||e===
a.q.qw?a.q.Zl(f,a.q.yN(e,g,!0)):a.q.Zl(f,a.q.Pda(e,g)));window.setTimeout(function(){a.q.Ds(f,!1)},20);a.q.FL(b,f);a.q.kq(f,function(){f.removeClass(a.q.Wh);a.q.Jk(b);f.trigger("ojopen",b);a.q.mH(b);c(!0)})};a.q.fIa=function(b,c){var e=a.q.vh(b),f=g(b[a.q.Pz]);a.u.ue(f,g);var h=b.size;e.addClass(a.q.fE);window.setTimeout(function(){void 0===h&&(h=e.outerWidth(!0)+"px");e.addClass(a.q.d6);a.q.xu(e).addClass(a.q.e6);a.q.BKa(e);a.q.Zl(e,"none");window.setTimeout(function(){e.css("min-width",h);a.q.Ds(e,
!1)},10)},0);a.q.FL(b,e);a.q.kq(e,function(){a.q.Jk(b);e.trigger("ojopen",b);a.q.mH(b);c(!0)})};a.q.Sxa=function(b,c,e,f){function h(){l||(k.removeClass(a.q.Wh),a.q.Zl(k,""),a.q.Fp(b),c(!0));l=!1}var k=g(b[a.q.Pz]),l=!0;a.q.Zl(e,"");a.q.Zl(k,"");a.q.Ds(e,!1);a.q.FB(b)&&b[a.q.ww].removeClass(a.q.YD);f?(k.addClass(a.q.Wh),e.addClass(a.q.Wh),a.q.kq(e,h),a.q.kq(k,h)):(l=!1,h())};a.q.Qxa=function(b,c,e,f){function g(){a.q.Fp(b);c(!0)}a.q.Ds(e,!1);a.q.FB(b)&&b[a.q.ww].removeClass(a.q.YD);f?(e.addClass(a.q.Wh),
a.q.kq(e,g)):g()};a.q.dIa=function(b,c,e,f){var h=a.q.vh(b),k=a.q.OM(b);a.u.ue(k,g);a.q.uC(b,k,!0);var l;e===a.q.rw||e===a.q.qw?(l=void 0===l?h.outerWidth(!0)+"px":l,f===a.q.mw&&a.q.FH(k,e,l)):(l=void 0===l?h.outerHeight(!0)+"px":l,f===a.q.mw&&a.q.LLa(k,e,l));window.setTimeout(function(){a.q.Ds(h,!1)},10);a.q.FL(b,h);a.q.kq(k,function(){k.removeClass(a.q.Wh);a.q.Jk(b);h.trigger("ojopen",b);a.q.mH(b);c(!0)})};a.q.Rxa=function(b,c,e,f){function g(){a.q.Fp(b);c(!0)}a.q.Ds(e,!1);a.q.FB(b)&&b[a.q.ww].removeClass(a.q.YD);
f?(e.css("min-width","0"),a.q.kq(e,g)):g()};a.q.Pxa=function(b,c,e,f){function g(){a.q.Fp(b);c(!0)}var k=b[a.q.lw],l=a.q.OM(b);k===a.q.mw&&a.q.Zl(l,"");a.q.Ds(e,!1);a.q.FB(b)&&b[a.q.ww].removeClass(a.q.YD);f?(l.addClass(a.q.Wh),a.q.kq(l,g)):g()};a.q.open=function(b){var c=a.q.vh(b),e=g.data(c[0],a.q.Br);if(e){if(e[a.q.TD])return e[a.q.TD];if(e[a.q.aT])return e[a.q.aT]}var f=!1,h=new Promise(function(e,l){a.u.ue(c,g);var m=a.q.yia(b),p=g.Event("ojbeforeopen");c.trigger(p,b);if(!1===p.result)return l(a.q.zsa),
f=!0,h;var p=a.q.wBa(b),t=a.q.eO(b);!t||m!==a.q.VD&&m!==a.q.KJ||(p=a.q.mw);var r=g.extend({},b);r[a.q.lw]=p;g.data(c[0],a.q.Br,r);if(b[a.q.Pz]){if(!a.q.Nga(b))throw"Error: Both main content selector and the inner wrapper \x3cdiv class\x3d'oj-offcanvas-inner-wrapper'\x3e are provided. Please remove the inner wrapper.";t?a.q.fIa(r,e):p===a.q.mw?a.q.jIa(r,e,m):a.q.eIa(r,e,m)}else a.q.dIa(r,e,m,p)});!f&&(e=g.data(c[0],a.q.Br))&&(e[a.q.aT]=h,a.Components.xt(c[0]));return h};o_("OffcanvasUtils.open",a.q.open,
a);a.q.close=function(b){return a.q.Sr(b[a.q.hE],!0)};o_("OffcanvasUtils.close",a.q.close,a);a.q.Sr=function(b,c){var e=g(b);a.u.ue(e,g);var f=g.data(e[0],a.q.Br);if(f&&f[a.q.TD])return f[a.q.TD];var h=!1,k=new Promise(function(l,m){if(a.q.zo(e)){b!=f[a.q.hE]&&l(!0);a.q.Ds(e,!0)||l(!0);var p=g.Event("ojbeforeclose");e.trigger(p,f);if(!1===p.result)return m(a.q.ysa),h=!0,k;var p=a.q.eO(f),t=f[a.q.lw];f[a.q.Pz]?t===a.q.mw?a.q.Sxa(f,l,e,c):p?a.q.Rxa(f,l,e,c):a.q.Qxa(f,l,e,c):a.q.Pxa(f,l,e,c)}else l(!0)});
!h&&(f=g.data(e[0],a.q.Br))&&(f[a.q.TD]=k,a.Components.ew(e[0]));return k};a.q.toggle=function(b){var c=a.q.vh(b);a.u.ue(c,g);return a.q.zo(c)?a.q.close(b):a.q.open(b)};o_("OffcanvasUtils.toggle",a.q.toggle,a);a.q.Wva=function(b){var c=g("\x3cdiv\x3e");c.addClass(a.q.Ara);c.attr("role","presentation");c.attr("aria-hidden","true");c.appendTo(b.parent());c.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus",function(a){a.stopPropagation();a.preventDefault()});return c};
a.q.qW=function(b){var c=g("\x3cspan style\x3d'display:none'\x3e");c.attr("aria-hidden","true");var e=b.attr("id");e?(e=[e,"surrogate"].join("_"),c.attr("id",e)):e=c.uniqueId();c.insertBefore(b);b.attr(a.q.iT,e);return c};a.q.rMa=function(b,c){b[a.q.s6]=a.q.qW(c);c.appendTo(c.parent())};a.q.uKa=function(b){var c=a.q.vh(b);b=b[a.q.s6];c&&b&&c.attr(a.q.iT)===b.attr("id")&&(c.insertAfter(b),c.removeAttr(a.q.iT),b.remove())};a.q.FL=function(b,c){a.q.FB(b)&&(b[a.q.ww]=a.q.Wva(c),a.q.rMa(b,c),window.setTimeout(function(){b[a.q.ww].addClass(a.q.YD)},
0))};a.q.MJa=function(b){a.q.FB(b)&&(b[a.q.ww].remove(),a.q.uKa(b))};a.q.mqa=function(b){var d,e,f,h,k,l,m,p,t,r,n,s;null==g(b).attr("oj-data-pansetup")&&(g(b).attr("oj-data-pansetup","true"),b.displayMode="push",d=a.q.vh(b),e=b.size,null==e&&(e=d.outerWidth()),f=a.q.xu(d),h=a.q.OM(b),k={recognizers:[[c.Pan,{direction:c.DIRECTION_HORIZONTAL}]]},l=!1,g(f).pi(k).on("panstart",function(e){m=null;switch(e.gesture.direction){case c.DIRECTION_LEFT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&
(m=a.q.Zg()?"end":"start");break;case c.DIRECTION_RIGHT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(m=a.q.Zg()?"start":"end")}null!=m&&(p={direction:m,distance:Math.abs(e.gesture.deltaX)},t=g.Event("ojpanstart"),d.trigger(t,p),t.isDefaultPrevented()||(b._closePromise=null,h.off(".oc"),a.q.uC(b,h,!0),l=!0,e.gesture.srcEvent.stopPropagation(),e.stopPropagation()))}).on("panmove",function(b){l&&(r=b.gesture.deltaX,"start"==m&&0<r||"end"==m&&0>r?a.q.FH(h,"start","0px"):(d.css("width",Math.abs(r)),
h.removeClass(a.q.Wh),a.q.FH(h,"start",r+"px"),p={direction:m,distance:Math.abs(r)},t=g.Event("ojpanmove"),d.trigger(t,p),b.gesture.srcEvent.stopPropagation(),b.stopPropagation()))}).on("panend",function(c){l&&(l=!1,r=Math.abs(c.gesture.deltaX),p={distance:r},t=g.Event("ojpanend"),d.trigger(t,p),c.stopPropagation(),t.isDefaultPrevented()?(s=function(){a.q.uC(b,h,!1);h.removeClass(a.q.Wh);h.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd",s)},h.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd",
s),h.addClass(a.q.Wh),a.q.FH(h,"start","0px")):(n=b.edge,null==n&&(n=d.hasClass("oj-offcanvas-start")?"start":"end"),a.q.Cwa(h,d,n,e),g.data(d[0],a.q.Br,b),g.data(d[0],a.q.FT,n),a.q.mH(b)))}))};o_("OffcanvasUtils.setupPanToReveal",a.q.mqa,a);a.q.Cwa=function(b,c,e,f){var g,k,l,m,p,t,r,n,s,q;b.removeClass(a.q.Wh);g=Math.round(1E3/60);k=b.css("transform").split("(")[1].split(")")[0].split(",");l=parseInt(k[4],10);m="end"==e?0-f:f;t=Math.max(1,Math.abs(m-l)/(400/g));r=(new Date).getTime();n=function(){s=
(new Date).getTime();q=Math.max(t,t*Math.max((s-r)/g));r=s;l<m?l=Math.min(m,l+q):l>m&&(l=Math.max(m,l-q));a.q.FH(b,e,Math.abs(l)+"px");c.css("width",Math.abs(l)+"px");l==m?(window.cancelAnimationFrame(p),b.addClass(a.q.Wh)):p=window.requestAnimationFrame(n)};p=window.requestAnimationFrame(n)};a.q.Bqa=function(b){b=a.q.vh(b);g(a.q.xu(b)).off("panstart panmove panend")};o_("OffcanvasUtils.tearDownPanToReveal",a.q.Bqa,a)});