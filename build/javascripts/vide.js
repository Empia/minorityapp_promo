!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):e.jQuery)}(this,function(e){"use strict";function t(e){var t,o,i,s,n,r,a,p={};for(n=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),a=0,r=n.length;r>a&&(o=n[a],-1===o.search(/^(http|https|ftp):\/\//)&&-1!==o.search(":"));a++)t=o.indexOf(":"),i=o.substring(0,t),s=o.substring(t+1),s||(s=void 0),"string"==typeof s&&(s="true"===s||("false"===s?!1:s)),"string"==typeof s&&(s=isNaN(s)?s:+s),p[i]=s;return null==i&&null==s?e:p}function o(e){e=""+e;var t,o,i,s=e.split(/\s+/),n="50%",r="50%";for(i=0,t=s.length;t>i;i++)o=s[i],"left"===o?n="0%":"right"===o?n="100%":"top"===o?r="0%":"bottom"===o?r="100%":"center"===o?0===i?n="50%":r="50%":0===i?n=o:r=o;return{x:n,y:r}}function i(t,o){var i=function(){o(this.src)};e('<img src="'+t+'.gif">').load(i),e('<img src="'+t+'.jpg">').load(i),e('<img src="'+t+'.jpeg">').load(i),e('<img src="'+t+'.png">').load(i)}function s(o,i,s){if(this.$element=e(o),"string"==typeof i&&(i=t(i)),s?"string"==typeof s&&(s=t(s)):s={},"string"==typeof i)i=i.replace(/\.\w*$/,"");else if("object"==typeof i)for(var n in i)i.hasOwnProperty(n)&&(i[n]=i[n].replace(/\.\w*$/,""));this.settings=e.extend({},r,s),this.path=i,this.init()}var n="vide",r={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0};s.prototype.init=function(){var t,s=this,r=o(s.settings.position),a="";s.$wrapper=e("<div>").css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":r.x+" "+r.y}),t=s.path,"object"==typeof s.path&&(s.path.poster?t=s.path.poster:s.path.mp4?t=s.path.mp4:s.path.webm?t=s.path.webm:s.path.ogv&&(t=s.path.ogv)),"detect"===s.settings.posterType?i(t,function(e){s.$wrapper.css("background-image","url("+e+")")}):"none"!==s.settings.posterType&&s.$wrapper.css("background-image","url("+t+"."+s.settings.posterType+")"),"static"===s.$element.css("position")&&s.$element.css("position","relative"),s.$element.prepend(s.$wrapper),"object"==typeof s.path?(s.path.mp4&&(a+='<source src="'+s.path.mp4+'.mp4" type="video/mp4">'),s.path.webm&&(a+='<source src="'+s.path.webm+'.webm" type="video/webm">'),s.path.ogv&&(a+='<source src="'+s.path.ogv+'.ogv" type="video/ogv">'),s.$video=e("<video>"+a+"</video>")):s.$video=e('<video><source src="'+s.path+'.mp4" type="video/mp4"><source src="'+s.path+'.webm" type="video/webm"><source src="'+s.path+'.ogv" type="video/ogg"></video>'),s.$video.prop({autoplay:s.settings.autoplay,loop:s.settings.loop,volume:s.settings.volume,muted:s.settings.muted,defaultMuted:s.settings.muted,playbackRate:s.settings.playbackRate,defaultPlaybackRate:s.settings.playbackRate}).css({margin:"auto",position:"absolute","z-index":-1,top:r.y,left:r.x,"-webkit-transform":"translate(-"+r.x+", -"+r.y+")","-ms-transform":"translate(-"+r.x+", -"+r.y+")","-moz-transform":"translate(-"+r.x+", -"+r.y+")",transform:"translate(-"+r.x+", -"+r.y+")",visibility:"hidden"}).one("canplaythrough."+n,function(){s.resize()}).one("playing."+n,function(){s.$video.css("visibility","visible"),s.$wrapper.css("background-image","none")}),s.$element.on("resize."+n,function(){s.settings.resizing&&s.resize()}),s.$wrapper.append(s.$video)},s.prototype.getVideoObject=function(){return this.$video[0]},s.prototype.resize=function(){if(this.$video){var e=this.$video[0].videoHeight,t=this.$video[0].videoWidth,o=this.$wrapper.height(),i=this.$wrapper.width();this.$video.css(i/t>o/e?{width:i+2,height:"auto"}:{width:"auto",height:o+2})}},s.prototype.destroy=function(){this.$element.off(n),this.$video&&this.$video.off(n),delete e[n].lookup[this.index],this.$element.removeData(n),this.$wrapper.remove()},e[n]={lookup:[]},e.fn[n]=function(t,o){var i;return this.each(function(){i=e.data(this,n),i&&i.destroy(),i=new s(this,t,o),i.index=e[n].lookup.push(i)-1,e.data(this,n,i)}),this},e(document).ready(function(){var t=e(window);t.on("resize."+n,function(){for(var t,o=e[n].lookup.length,i=0;o>i;i++)t=e[n].lookup[i],t&&t.settings.resizing&&t.resize()}),t.on("unload."+n,function(){return!1}),e(document).find("[data-"+n+"-bg]").each(function(t,o){var i=e(o),s=i.data(n+"-options"),r=i.data(n+"-bg");i[n](r,s)})})});