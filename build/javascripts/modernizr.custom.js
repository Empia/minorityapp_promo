<<<<<<< HEAD
window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}var i,a,c,l="2.6.2",s={},u=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),h=p.style,m=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y={},v=[],g=v.slice,b=function(e,n,r,o){var i,a,c,l,s=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:d+(r+1),s.appendChild(c);return i=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),s.id=d,(u?s:p).innerHTML+=i,p.appendChild(s),u||(p.style.background="",p.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),a=n(s,e),u?s.parentNode.removeChild(s):(p.parentNode.removeChild(p),f.style.overflow=l),!!a},E={}.hasOwnProperty;c=o(E,"undefined")||o(E.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return E.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(g.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(g.call(arguments)))};return r}),y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:b(["@media (",m.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var j in y)c(y,j)&&(a=j.toLowerCase(),s[a]=y[j](),v.push((s[a]?"":"no-")+a));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(f.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),p=i=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},m++,e[h]=m,y[m]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;l>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var r=o(e);return v.shivCSS&&!s&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||c(e,r),e}var s,u,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){s=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=v,l(t)}(this,t),s._version=l,s._prefixes=m,s.testStyles=b,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+v.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,i,l,s){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){j.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var s=s||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:i,a:l,x:s};1===T[n]&&(y=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===T[n]?(j.insertBefore(f,E?null:m),h(u,s)):T[n].push(f))}function s(e,t,n,r,i){return g=0,t=t||"j",o(e)?l("c"==t?S:C,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:s,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,j=E?p:m.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",S=p?"script":C,w=Array.isArray||function(e){return"[object Array]"==y.call(e)},N=[],T={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=x[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=N[n](i);return i}function a(e,o,i,a,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,i,a,c):(T[l.url]?l.noexec=!0:T[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&i.load(function(){u(),o&&o(l.origUrl,c,a),s&&s(l.origUrl,c,a),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),a(e[l],f,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(w(e))for(l=0;l<e.length;l++)s=e[l],o(s)?a(s,0,f,0):w(s)?d(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){x[e]=t},d.addFilter=function(e){N.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=s?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,a,l){var s,o=t.createElement("link"),n=l?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
=======
window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}var a,i,c,l="2.6.2",s={},u=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),h=p.style,m=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y={},v=[],g=v.slice,b=function(e,n,r,o){var a,i,c,l,s=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:d+(r+1),s.appendChild(c);return a=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),s.id=d,(u?s:p).innerHTML+=a,p.appendChild(s),u||(p.style.background="",p.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),i=n(s,e),u?s.parentNode.removeChild(s):(p.parentNode.removeChild(p),f.style.overflow=l),!!i},E={}.hasOwnProperty;c=o(E,"undefined")||o(E.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return E.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(g.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(g.call(arguments)))};return r}),y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:b(["@media (",m.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n};for(var j in y)c(y,j)&&(i=j.toLowerCase(),s[i]=y[j](),v.push((s[i]?"":"no-")+i));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(f.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),p=a=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},m++,e[h]=m,y[m]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),a.canHaveChildren&&!d.test(e)?r.frag.appendChild(a):a}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var r=o(e);return v.shivCSS&&!s&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||c(e,r),e}var s,u,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=v,l(t)}(this,t),s._version=l,s._prefixes=m,s.testStyles=b,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+v.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();g=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,a,l,s){function u(t){if(!p&&i(f.readyState)&&(b.r=p=1,!g&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){j.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var s=s||d.errorTimeout,f=t.createElement(e),p=0,y=0,b={t:r,s:n,e:a,a:l,x:s};1===T[n]&&(y=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,y)},v.splice(o,0,b),"img"!=e&&(y||2===T[n]?(j.insertBefore(f,E?null:m),h(u,s)):T[n].push(f))}function s(e,t,n,r,a){return g=0,t=t||"j",o(e)?l("c"==t?S:C,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:s,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,j=E?p:m.parentNode,p=e.opera&&"[object Opera]"==y.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",S=p?"script":C,w=Array.isArray||function(e){return"[object Array]"==y.call(e)},N=[],T={},x={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=x[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=N[n](a);return a}function i(e,o,a,i,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(T[l.url]?l.noexec=!0:T[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&a.load(function(){u(),o&&o(l.origUrl,c,i),s&&s(l.origUrl,c,i),T[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),i(e,f,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[l])),i(e[l],f,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,f=e.callback||a,d=f,p=e.complete||a;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,f=this.yepnope.loader;if(o(e))i(e,0,f,0);else if(w(e))for(l=0;l<e.length;l++)s=e[l],o(s)?i(s,0,f,0):w(s)?d(s):Object(s)===s&&c(s,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){x[e]=t},d.addFilter=function(e){N.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=s?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,i,l){var s,o=t.createElement("link"),n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);i||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
>>>>>>> 0117c3eb323c5f8b7ea857342561e30fb95f8c4d
