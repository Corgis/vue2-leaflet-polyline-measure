(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("leaflet.polylinemeasure"),require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["leaflet.polylinemeasure","leaflet.polylinemeasure/Leaflet.PolylineMeasure.css","vue2-leaflet"],t):"object"==typeof exports?exports.LControlPolylineMeasure=t(require("leaflet.polylinemeasure"),require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"),require("vue2-leaflet")):e.LControlPolylineMeasure=t(e["leaflet.polylinemeasure"],e["leaflet.polylinemeasure/Leaflet.PolylineMeasure.css"],e["vue2-leaflet"])})(this,function(e,t,o){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=6)}([function(e,t,o){var n=o(2)(o(1),null,null,null);e.exports=n.exports},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5),r=(o.n(n),o(3)),l=o.n(r),i=o(4),s=(o.n(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e});t.default={name:"LControlPolylineMeasure",mixins:[n.ControlMixin,n.OptionsMixin],mounted:function(){var e=o.i(n.optionsMerger)(s({},this.controlOptions,{options:this.options}),this);console.log("Creating with options",e),this.mapObject=new l.a(e),console.log("Created map object:",this.mapObject),console.log("Have option props:",this.$options.props),o.i(n.propsBinder)(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$emit("ready",this.mapObject)},render:function(){return null}}},function(e,t){e.exports=function(e,t,o,n){var r,l=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,l=e.default);var s="function"==typeof l?l.options:l;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),o&&(s._scopeId=o),n){var u=s.computed||(s.computed={});Object.keys(n).forEach(function(e){var t=n[e];u[e]=function(){return t}})}return{esModule:r,exports:l,options:s}}},function(e,t){e.exports=require("leaflet.polylinemeasure")},function(e,t){e.exports=require("leaflet.polylinemeasure/Leaflet.PolylineMeasure.css")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,o){e.exports=o(0)}])});
//# sourceMappingURL=LControlPolylineMeasure.js.map