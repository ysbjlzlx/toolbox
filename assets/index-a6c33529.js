import{_ as E,u as _,a as S,b as U}from"./index-dacf1342.js";import{r as d}from"./ace-073628d1.js";var V=function(n){return function(i,u){var e=d.useRef(!1);n(function(){return function(){e.current=!1}},[]),n(function(){if(!e.current)e.current=!0;else return i()},u)}};const I=V(d.useEffect);var b=!!(typeof window<"u"&&window.document&&window.document.createElement);const h=b;function x(n){function i(u,e){e===void 0&&(e={});var t,c=e.onError,f=c===void 0?function(r){console.error(r)}:c;try{t=n()}catch(r){f(r)}var m=function(r){return e!=null&&e.serializer?e==null?void 0:e.serializer(r):JSON.stringify(r)},g=function(r){return e!=null&&e.deserializer?e==null?void 0:e.deserializer(r):JSON.parse(r)};function l(){try{var r=t==null?void 0:t.getItem(u);if(r)return g(r)}catch(a){f(a)}return S(e==null?void 0:e.defaultValue)?e==null?void 0:e.defaultValue():e==null?void 0:e.defaultValue}var v=E(d.useState(function(){return l()}),2),o=v[0],s=v[1];I(function(){s(l())},[u]);var w=function(r){var a=S(r)?r(o):r;if(s(a),U(a))t==null||t.removeItem(u);else try{t==null||t.setItem(u,m(a))}catch(z){console.error(z)}};return[o,_(w)]}return i}var y=x(function(){return h?localStorage:void 0});const J=y;export{J as u};
//# sourceMappingURL=index-a6c33529.js.map
