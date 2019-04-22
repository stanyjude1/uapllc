/* Page scroll to id - version 1.6.2 */
!function(e,t,n){var a,s,i,l,o,r,c,u,h,g,f,d,p="mPageScroll2id",_="mPS2id",v=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",C={scrollSpeed:1e3,autoScrollSpeed:!0,scrollEasing:"easeInOutQuint",scrollingEasing:"easeOutQuint",pageEndSmoothScroll:!0,layout:"vertical",offset:0,highlightSelector:!1,clickedClass:_+"-clicked",targetClass:_+"-target",highlightClass:_+"-highlight",forceSingleHighlight:!1,keepHighlightUntilNext:!1,highlightByNextTarget:!1,disablePluginBelow:!1,clickEvents:!0,appendHash:!1,onStart:function(){},onComplete:function(){},defaultSelector:!1,live:!0,liveSelector:!1},S=0,m={init:function(r){var r=e.extend(!0,{},C,r);if(e(n).data(_,r),s=e(n).data(_),!this.selector){var c="__"+_;this.each(function(){var t=e(this);t.hasClass(c)||t.addClass(c)}),this.selector="."+c}s.liveSelector&&(this.selector+=","+s.liveSelector),a=a?a+","+this.selector:this.selector,s.defaultSelector&&("object"==typeof e(a)&&0!==e(a).length||(a=v)),s.clickEvents&&e(n).undelegate("."+_).delegate(a,"click."+_,function(t){if(w._isDisabled.call(null))return void w._removeClasses.call(null);var n=e(this),a=n.attr("href"),s=n.prop("href");a&&-1!==a.indexOf("#/")||(w._reset.call(null),g=n.data("ps2id-offset")||0,w._isValid.call(null,a,s)&&w._findTarget.call(null,a)&&(t.preventDefault(),l="selector",o=n,w._setClasses.call(null,!0),w._scrollTo.call(null)))}),e(t).unbind("."+_).bind("scroll."+_+" resize."+_,function(){if(w._isDisabled.call(null))return void w._removeClasses.call(null);var t=e("._"+_+"-t");t.each(function(n){var a=e(this),s=a.attr("id"),i=w._findHighlight.call(null,s);w._setClasses.call(null,!1,a,i),n==t.length-1&&w._extendClasses.call(null)})}),i=!0,w._setup.call(null),w._live.call(null)},scrollTo:function(t,n){if(w._isDisabled.call(null))return void w._removeClasses.call(null);if(t&&"undefined"!=typeof t){w._isInit.call(null);var a={layout:s.layout,offset:s.offset,clicked:!1},n=e.extend(!0,{},a,n);w._reset.call(null),u=n.layout,h=n.offset,t=-1!==t.indexOf("#")?t:"#"+t,w._isValid.call(null,t)&&w._findTarget.call(null,t)&&(l="scrollTo",o=n.clicked,o&&w._setClasses.call(null,!0),w._scrollTo.call(null))}},destroy:function(){e(t).unbind("."+_),e(n).undelegate("."+_).removeData(_),e("._"+_+"-t").removeData(_),w._removeClasses.call(null,!0)}},w={_isDisabled:function(){var e=t,a="inner",i=s.disablePluginBelow instanceof Array?[s.disablePluginBelow[0]||0,s.disablePluginBelow[1]||0]:[s.disablePluginBelow||0,0];return"innerWidth"in t||(a="client",e=n.documentElement||n.body),e[a+"Width"]<=i[0]||e[a+"Height"]<=i[1]},_isValid:function(e,n){if(e){n=n?n:e;var a=-1!==n.indexOf("#/")?n.split("#/")[0]:n.split("#")[0],s=t.location.toString().split("#")[0];return"#"!==e&&-1!==e.indexOf("#")&&(""===a||a===s)}},_setup:function(){var t=w._highlightSelector(),n=1,a=0;return e(t).each(function(){var i=e(this),l=i.attr("href"),o=i.prop("href");if(w._isValid.call(null,l,o)){var r=-1!==l.indexOf("#/")?l.split("#/")[1]:l.split("#")[1],c=e("#"+r);if(c.length>0){s.highlightByNextTarget&&c!==a&&(a?a.data(_,{tn:c}):c.data(_,{tn:"0"}),a=c),c.hasClass("_"+_+"-t")||c.addClass("_"+_+"-t"),c.data(_,{i:n}),i.hasClass("_"+_+"-h")||i.addClass("_"+_+"-h");var u=w._findHighlight.call(null,r);w._setClasses.call(null,!1,c,u),S=n,n++,n==e(t).length&&w._extendClasses.call(null)}}})},_highlightSelector:function(){return s.highlightSelector&&""!==s.highlightSelector?s.highlightSelector:a},_findTarget:function(t){var n=-1!==t.indexOf("#/")?t.split("#/")[1]:t.split("#")[1],a=e("#"+n);if(a.length<1||"fixed"===a.css("position")){if("top"!==n)return;a=e("body")}return r=a,u||(u=s.layout),h=w._setOffset.call(null),c=[(a.offset().top-h[0]).toString(),(a.offset().left-h[1]).toString()],c[0]=c[0]<0?0:c[0],c[1]=c[1]<0?0:c[1],c},_setOffset:function(){h||(h=s.offset?s.offset:0),g&&(h=g);var t,n,a,i;switch(typeof h){case"object":case"string":t=[h.y?h.y:h,h.x?h.x:h],n=[t[0]instanceof jQuery?t[0]:e(t[0]),t[1]instanceof jQuery?t[1]:e(t[1])],n[0].length>0?(a=n[0].height(),"fixed"===n[0].css("position")&&(a+=n[0][0].offsetTop)):a=!isNaN(parseFloat(t[0]))&&isFinite(t[0])?parseInt(t[0]):0,n[1].length>0?(i=n[1].width(),"fixed"===n[1].css("position")&&(i+=n[1][0].offsetLeft)):i=!isNaN(parseFloat(t[1]))&&isFinite(t[1])?parseInt(t[1]):0;break;case"function":t=h.call(null),t instanceof Array?(a=t[0],i=t[1]):a=i=t;break;default:a=i=parseInt(h)}return[a,i]},_findHighlight:function(n){var a=t.location,s=a.toString().split("#")[0],i=a.pathname;return e("._"+_+"-h[href='#"+n+"'],._"+_+"-h[href='"+s+"#"+n+"'],._"+_+"-h[href='"+i+"#"+n+"'],._"+_+"-h[href='#/"+n+"'],._"+_+"-h[href='"+s+"#/"+n+"'],._"+_+"-h[href='"+i+"#/"+n+"']")},_setClasses:function(t,n,a){var i=s.clickedClass,l=s.targetClass,r=s.highlightClass;t&&i&&""!==i?(e("."+i).removeClass(i),o.addClass(i)):n&&l&&""!==l&&a&&r&&""!==r&&(w._currentTarget.call(null,n)?(n.addClass(l),a.addClass(r)):(!s.keepHighlightUntilNext||e("."+r).length>1)&&(n.removeClass(l),a.removeClass(r)))},_extendClasses:function(){var t=s.targetClass,n=s.highlightClass,a=e("."+t),i=e("."+n),l=t+"-first",o=t+"-last",r=n+"-first",c=n+"-last";e("._"+_+"-t").removeClass(l+" "+o),e("._"+_+"-h").removeClass(r+" "+c),s.forceSingleHighlight?s.keepHighlightUntilNext&&a.length>1?(a.slice(0,1).removeClass(t),i.slice(0,1).removeClass(n)):(a.slice(1).removeClass(t),i.slice(1).removeClass(n)):(a.slice(0,1).addClass(l).end().slice(-1).addClass(o),i.slice(0,1).addClass(r).end().slice(-1).addClass(c))},_removeClasses:function(t){e("."+s.clickedClass).removeClass(s.clickedClass),e("."+s.targetClass).removeClass(s.targetClass+" "+s.targetClass+"-first "+s.targetClass+"-last"),e("."+s.highlightClass).removeClass(s.highlightClass+" "+s.highlightClass+"-first "+s.highlightClass+"-last"),t&&(e("._"+_+"-t").removeClass("_"+_+"-t"),e("._"+_+"-h").removeClass("_"+_+"-h"))},_currentTarget:function(n){var a=s["target_"+n.data(_).i],i=n.data("ps2id-target"),l=i&&e(i)[0]?e(i)[0].getBoundingClientRect():n[0].getBoundingClientRect();if("undefined"!=typeof a){var o=n.offset().top,r=n.offset().left,c=a.from?a.from+o:o,u=a.to?a.to+o:o,h=a.fromX?a.fromX+r:r,g=a.toX?a.toX+r:r;return l.top>=u&&l.top<=c&&l.left>=g&&l.left<=h}var f=e(t).height(),d=e(t).width(),p=i?e(i).height():n.height(),v=i?e(i).width():n.width(),C=1+p/f,S=C,m=f>p?C*(f/p):C,w=1+v/d,y=w,b=d>v?w*(d/v):w,O=[l.top<=f/S,l.bottom>=f/m,l.left<=d/y,l.right>=d/b];if(s.highlightByNextTarget){var I=n.data(_).tn;if(I){var M=I[0].getBoundingClientRect();"vertical"===s.layout?O=[l.top<=f/2,M.top>f/2,1,1]:"horizontal"===s.layout&&(O=[1,1,l.left<=d/2,M.left>d/2])}}return O[0]&&O[1]&&O[2]&&O[3]},_scrollTo:function(){d=w._scrollSpeed.call(null),c=s.pageEndSmoothScroll?w._pageEndSmoothScroll.call(null):c;var n=e("html,body"),a=s.autoScrollSpeed?w._autoScrollSpeed.call(null):d,i=n.is(":animated")?s.scrollingEasing:s.scrollEasing,l=e(t).scrollTop(),o=e(t).scrollLeft();switch(u){case"horizontal":o!=c[1]&&(w._callbacks.call(null,"onStart"),n.stop().animate({scrollLeft:c[1]},a,i).promise().then(function(){w._callbacks.call(null,"onComplete")}));break;case"auto":if(l!=c[0]||o!=c[1])if(w._callbacks.call(null,"onStart"),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var r;n.stop().animate({pageYOffset:c[0],pageXOffset:c[1]},{duration:a,easing:i,step:function(e,n){"pageXOffset"==n.prop?r=e:"pageYOffset"==n.prop&&t.scrollTo(r,e)}}).promise().then(function(){w._callbacks.call(null,"onComplete")})}else n.stop().animate({scrollTop:c[0],scrollLeft:c[1]},a,i).promise().then(function(){w._callbacks.call(null,"onComplete")});break;default:l!=c[0]&&(w._callbacks.call(null,"onStart"),n.stop().animate({scrollTop:c[0]},a,i).promise().then(function(){w._callbacks.call(null,"onComplete")}))}},_pageEndSmoothScroll:function(){var a=e(n).height(),s=e(n).width(),i=e(t).height(),l=e(t).width();return[a-c[0]<i?a-i:c[0],s-c[1]<l?s-l:c[1]]},_scrollSpeed:function(){var t=s.scrollSpeed;return o&&o.length&&o.add(o.parent()).each(function(){var n=e(this);if(n.attr("class")){var a=n.attr("class").split(" ");for(var s in a)if(a[s].match(/^ps2id-speed-\d+$/)){t=a[s].split("ps2id-speed-")[1];break}}}),parseInt(t)},_autoScrollSpeed:function(){var a=e(t).scrollTop(),s=e(t).scrollLeft(),i=e(n).height(),l=e(n).width(),o=[d+d*Math.floor(Math.abs(c[0]-a)/i*100)/100,d+d*Math.floor(Math.abs(c[1]-s)/l*100)/100];return Math.max.apply(Math,o)},_callbacks:function(e){if(s)switch(this[_]={trigger:l,clicked:o,target:r,scrollTo:{y:c[0],x:c[1]}},e){case"onStart":if(s.appendHash&&t.history&&t.history.pushState&&o&&o.length){var n="#"+o.attr("href").split("#")[1];n!==t.location.hash&&history.pushState("","",n)}s.onStart.call(null,this[_]);break;case"onComplete":s.onComplete.call(null,this[_])}},_reset:function(){u=h=g=!1},_isInit:function(){i||m.init.apply(this)},_live:function(){f=setTimeout(function(){s.live?e(w._highlightSelector()).length!==S&&w._setup.call(null):f&&clearTimeout(f),w._live.call(null)},1e3)},_easing:function(){function t(e){var t=7.5625,n=2.75;return 1/n>e?t*e*e:2/n>e?t*(e-=1.5/n)*e+.75:2.5/n>e?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}e.easing.easeInQuad=e.easing.easeInQuad||function(e){return e*e},e.easing.easeOutQuad=e.easing.easeOutQuad||function(e){return 1-(1-e)*(1-e)},e.easing.easeInOutQuad=e.easing.easeInOutQuad||function(e){return.5>e?2*e*e:1-Math.pow(-2*e+2,2)/2},e.easing.easeInCubic=e.easing.easeInCubic||function(e){return e*e*e},e.easing.easeOutCubic=e.easing.easeOutCubic||function(e){return 1-Math.pow(1-e,3)},e.easing.easeInOutCubic=e.easing.easeInOutCubic||function(e){return.5>e?4*e*e*e:1-Math.pow(-2*e+2,3)/2},e.easing.easeInQuart=e.easing.easeInQuart||function(e){return e*e*e*e},e.easing.easeOutQuart=e.easing.easeOutQuart||function(e){return 1-Math.pow(1-e,4)},e.easing.easeInOutQuart=e.easing.easeInOutQuart||function(e){return.5>e?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2},e.easing.easeInQuint=e.easing.easeInQuint||function(e){return e*e*e*e*e},e.easing.easeOutQuint=e.easing.easeOutQuint||function(e){return 1-Math.pow(1-e,5)},e.easing.easeInOutQuint=e.easing.easeInOutQuint||function(e){return.5>e?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2},e.easing.easeInExpo=e.easing.easeInExpo||function(e){return 0===e?0:Math.pow(2,10*e-10)},e.easing.easeOutExpo=e.easing.easeOutExpo||function(e){return 1===e?1:1-Math.pow(2,-10*e)},e.easing.easeInOutExpo=e.easing.easeInOutExpo||function(e){return 0===e?0:1===e?1:.5>e?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2},e.easing.easeInSine=e.easing.easeInSine||function(e){return 1-Math.cos(e*Math.PI/2)},e.easing.easeOutSine=e.easing.easeOutSine||function(e){return Math.sin(e*Math.PI/2)},e.easing.easeInOutSine=e.easing.easeInOutSine||function(e){return-(Math.cos(Math.PI*e)-1)/2},e.easing.easeInCirc=e.easing.easeInCirc||function(e){return 1-Math.sqrt(1-Math.pow(e,2))},e.easing.easeOutCirc=e.easing.easeOutCirc||function(e){return Math.sqrt(1-Math.pow(e-1,2))},e.easing.easeInOutCirc=e.easing.easeInOutCirc||function(e){return.5>e?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2},e.easing.easeInElastic=e.easing.easeInElastic||function(e){return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3))},e.easing.easeOutElastic=e.easing.easeOutElastic||function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1},e.easing.easeInOutElastic=e.easing.easeInOutElastic||function(e){return 0===e?0:1===e?1:.5>e?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5)))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*(2*Math.PI/4.5))/2+1},e.easing.easeInBack=e.easing.easeInBack||function(e){return 2.70158*e*e*e-1.70158*e*e},e.easing.easeOutBack=e.easing.easeOutBack||function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},e.easing.easeInOutBack=e.easing.easeInOutBack||function(e){return.5>e?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2},e.easing.easeInBounce=e.easing.easeInBounce||function(e){return 1-t(1-e)},e.easing.easeOutBounce=e.easing.easeOutBounce||t,e.easing.easeInOutBounce=e.easing.easeInOutBounce||function(e){return.5>e?(1-t(1-2*e))/2:(1+t(2*e-1))/2}}};w._easing.call(),e.fn[p]=function(t){return m[t]?m[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):m.init.apply(this,arguments)},e[p]=function(t){return m[t]?m[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):m.init.apply(this,arguments)},e[p].defaults=C}(jQuery,window,document),function(e){var t="mPS2id",n=mPS2id_params,a=n.shortcode_class,s=location.hash||null,i=function(n,a){try{e(n)}catch(s){return!1}return e(n).length&&(a||e("a[href*='"+n+"']").filter(function(){return 1==e(this).data(t+"Element")}).length)},l=function(e){if(-1!==e.indexOf(",")){var t=e.split(","),n=t[0]||"0",a=t[1]||"0";return{y:n,x:a}}return e},o=function(e){if(-1!==e.indexOf(",")){var t=e.split(","),n=t[0]||"0",a=t[1]||"0";return[n,a]}return e},r=function(t){"horizontal"!==t&&e(window).scrollTop(0),"vertical"!==t&&e(window).scrollLeft(0)},c="a[data-ps2id-api='true'][href*='#'],.ps2id > a[href*='#'],a.ps2id[href*='#']";e(document).ready(function(){for(var l=0;l<n.total_instances;l++)if("true"===n.instances[t+"_instance_"+l].scrollToHash&&s&&(e(n.instances[t+"_instance_"+l].selector+",."+a+","+c).each(function(){e(this).data(t+"Element",!0)}),i(s,"true"===n.instances[t+"_instance_"+l].scrollToHashForAll))){var o=window.location.href.replace(/#.*$/,"#");r(n.instances[t+"_instance_"+l].layout),window.history&&window.history.replaceState?window.history.replaceState("","",o):window.location.href=o}}),e(window).on("load",function(){for(var u=0;u<n.total_instances;u++){var h=e(n.instances[t+"_instance_"+u].selector+",."+a+","+c);h.mPageScroll2id({scrollSpeed:n.instances[t+"_instance_"+u].scrollSpeed,autoScrollSpeed:"true"===n.instances[t+"_instance_"+u].autoScrollSpeed,scrollEasing:n.instances[t+"_instance_"+u].scrollEasing,scrollingEasing:n.instances[t+"_instance_"+u].scrollingEasing,pageEndSmoothScroll:"true"===n.instances[t+"_instance_"+u].pageEndSmoothScroll,layout:n.instances[t+"_instance_"+u].layout,offset:l(n.instances[t+"_instance_"+u].offset.toString()),highlightSelector:n.instances[t+"_instance_"+u].highlightSelector,clickedClass:n.instances[t+"_instance_"+u].clickedClass,targetClass:n.instances[t+"_instance_"+u].targetClass,highlightClass:n.instances[t+"_instance_"+u].highlightClass,forceSingleHighlight:"true"===n.instances[t+"_instance_"+u].forceSingleHighlight,keepHighlightUntilNext:"true"===n.instances[t+"_instance_"+u].keepHighlightUntilNext,highlightByNextTarget:"true"===n.instances[t+"_instance_"+u].highlightByNextTarget,disablePluginBelow:o(n.instances[t+"_instance_"+u].disablePluginBelow.toString()),appendHash:"true"===n.instances[t+"_instance_"+u].appendHash}),"true"===n.instances[t+"_instance_"+u].scrollToHash&&s&&i(s,"true"===n.instances[t+"_instance_"+u].scrollToHashForAll)&&(r(n.instances[t+"_instance_"+u].layout),setTimeout(function(){e.mPageScroll2id("scrollTo",s),window.history&&window.history.replaceState?window.history.replaceState("","",s):window.location.hash=s},n.instances[t+"_instance_"+u].scrollToHashDelay)),"true"===n.instances[t+"_instance_"+u].unbindUnrelatedClickEvents&&setTimeout(function(){var t=h.length?e._data(h[0],"events"):null;if(t)for(var n=t.click.length-1;n>=0;n--){var a=t.click[n];a&&"mPS2id"!=a.namespace&&h.off("click",a.handler)}},300),"true"===n.instances[t+"_instance_"+u].normalizeAnchorPointTargets&&e("a._mPS2id-t[id]:empty").css({display:"inline-block","line-height":0,width:0,height:0,border:"none"}),"true"===n.instances[t+"_instance_"+u].stopScrollOnUserAction&&e(document).on("mousewheel DOMMouseScroll touchmove",function(){var t=e("html,body");t.is(":animated")&&t.stop()})}}),e.extend(e.expr[":"],{absolute:e.expr[":"].absolute||function(t){return"absolute"===e(t).css("position")},relative:e.expr[":"].relative||function(t){return"relative"===e(t).css("position")},"static":e.expr[":"]["static"]||function(t){return"static"===e(t).css("position")},fixed:e.expr[":"].fixed||function(t){return"fixed"===e(t).css("position")},width:e.expr[":"].width||function(t,n,a){var s=a[3].replace("&lt;","<").replace("&gt;",">");return s?">"===s.substr(0,1)?e(t).width()>s.substr(1):"<"===s.substr(0,1)?e(t).width()<s.substr(1):e(t).width()===parseInt(s):!1},height:e.expr[":"].height||function(t,n,a){var s=a[3].replace("&lt;","<").replace("&gt;",">");return s?">"===s.substr(0,1)?e(t).height()>s.substr(1):"<"===s.substr(0,1)?e(t).height()<s.substr(1):e(t).height()===parseInt(s):!1}})}(jQuery);