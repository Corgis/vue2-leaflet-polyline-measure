(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet.polylinemeasure"),require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["leaflet.polylinemeasure","leaflet.polylinemeasure/Leaflet.PolylineMeasure.css","vue2-leaflet"],t):"object"==typeof exports?exports.LControlPolylineMeasure=t(require("leaflet.polylinemeasure"),require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"),require("vue2-leaflet")):e.LControlPolylineMeasure=t(e["leaflet.polylinemeasure"],e["leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"],e["vue2-leaflet"])})(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(e,t,n){var r=n(2)(n(1),null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=(n.n(r),n(3)),l=n.n(o),i=n(4),u=(n.n(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});t.default={name:"LControlPolylineMeasure",mixins:[r.ControlMixin,r.OptionsMixin],mounted:function(){var e=n.i(r.optionsMerger)(u({},this.controlOptions,{options:this.options}),this);this.mapObject=new l.a(e),n.i(r.propsBinder)(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$emit("ready",this.mapObject)},render:function(){return null}}},function(e,t){e.exports=function(e,t,n,r){var o,l=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(o=e,l=e.default);var u="function"==typeof l?l.options:l;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:o,exports:l,options:u}}},function(e,t){e.exports=require("leaflet.polylinemeasure")},function(e,t){e.exports=require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,n){e.exports=n(0)}])});
//# sourceMappingURL=LControlPolylineMeasure.js.map