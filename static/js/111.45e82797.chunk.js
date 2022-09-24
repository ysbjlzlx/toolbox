"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[111],{86015:function(n,e,r){r.d(e,{Z:function(){return f}});var t=r(95266),o=r(11677),a=r(69805),i=r(2830),s=r(890),c=r(70865),u=r.n(c),d=r(55151),l=r(72075);function f(n){var e=n.content,r=(n.onSuccess,(0,d.useRef)(null)),c=(0,d.useState)(!1),f=(0,t.Z)(c,2),Z=f[0],p=f[1];return(0,d.useEffect)((function(){if(r.current){var n=new(u())(r.current);n.on("success",(function(n){p(!0)})),n.on("error",(function(n){console.error(n)}))}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Z,{position:"end",children:(0,l.jsx)(i.Z,{ref:r,"data-clipboard-text":e,"aria-label":"Copy content",children:(0,l.jsx)(o.Z,{})})}),(0,l.jsx)(s.Z,{open:Z,onClose:function(){return p(!1)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}},42195:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t=r(95266),o=r(65861),a=r(28831),i=r(42084),s=r(77583),c=r(18235),u=r(9370),d=r(39753),l=r(94708),f=r(96874),Z=r(55151),p=r(86015),v=r(11677),x=r(2830),m=r(890),C=r(70865),j=r.n(C),h=r(72075);function g(n){var e=n.text,r=(0,Z.useState)(!1),o=(0,t.Z)(r,2),a=o[0],i=o[1],s=(0,Z.useCallback)((function(n){if(null!==n){var e=new(j())(n);return e.on("success",(function(n){i(!0)})),e.on("error",(function(n){console.error(n)})),e}}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x.Z,{ref:s,"data-clipboard-text":e,"aria-label":"Copy content",children:(0,h.jsx)(v.Z,{})}),(0,h.jsx)(m.Z,{open:a,onClose:function(){return i(!1)},autoHideDuration:3e3,message:"\u590d\u5236\u6210\u529f"})]})}function b(){var n=(0,Z.useState)(""),e=(0,t.Z)(n,2),r=e[0],v=e[1],x=(0,Z.useState)(""),m=(0,t.Z)(x,2),C=m[0],j=m[1];return(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(a.Z,{mt:2,children:(0,h.jsx)(i.Z,{type:"text",label:"URL",value:r,onChange:function(n){v(n.target.value)},multiline:!0,minRows:3,variant:"outlined",fullWidth:!0,InputProps:{endAdornment:(0,h.jsx)(p.Z,{content:r})}})}),(0,h.jsx)(a.Z,{mt:2,children:(0,h.jsxs)(s.Z,{children:[(0,h.jsx)(c.Z,{variant:"outlined",onClick:function(){j(encodeURI(r))},children:"\u94fe\u63a5\u53c2\u6570\u7f16\u7801"}),(0,h.jsx)(c.Z,{variant:"outlined",onClick:function(){j(encodeURIComponent(r))},children:"\u5168\u94fe\u63a5\u7f16\u7801"}),(0,h.jsx)(c.Z,{variant:"outlined",onClick:function(){j(decodeURIComponent(r))},children:"\u94fe\u63a5\u89e3\u7801"})]})}),(0,h.jsx)(a.Z,{mt:2,children:(0,h.jsxs)(u.Z,{children:[(0,h.jsx)(d.Z,{children:(0,h.jsx)(l.Z,{sx:{wordWrap:"break-word",paddingTop:2,pb:2},children:C})}),(0,h.jsx)(f.Z,{disableSpacing:!0,children:(0,h.jsx)(g,{text:C})})]})})]})}},9370:function(n,e,r){r.d(e,{Z:function(){return x}});var t=r(96600),o=r(27279),a=r(55151),i=r(85735),s=r(111),c=r(258),u=r(2437),d=r(80567),l=r(53661);function f(n){return(0,l.Z)("MuiCard",n)}(0,r(60925).Z)("MuiCard",["root"]);var Z=r(72075),p=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),x=a.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiCard"}),a=r.className,c=r.raised,d=void 0!==c&&c,l=(0,o.Z)(r,p),x=(0,t.Z)({},r,{raised:d}),m=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},f,e)}(x);return(0,Z.jsx)(v,(0,t.Z)({className:(0,i.Z)(m.root,a),elevation:d?8:void 0,ref:e,ownerState:x},l))}))},96874:function(n,e,r){r.d(e,{Z:function(){return v}});var t=r(27279),o=r(96600),a=r(55151),i=r(85735),s=r(111),c=r(258),u=r(2437),d=r(53661);function l(n){return(0,d.Z)("MuiCardActions",n)}(0,r(60925).Z)("MuiCardActions",["root","spacing"]);var f=r(72075),Z=["disableSpacing","className"],p=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=a.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiCardActions"}),a=r.disableSpacing,c=void 0!==a&&a,d=r.className,v=(0,t.Z)(r,Z),x=(0,o.Z)({},r,{disableSpacing:c}),m=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(r,l,e)}(x);return(0,f.jsx)(p,(0,o.Z)({className:(0,i.Z)(m.root,d),ownerState:x,ref:e},v))}))},39753:function(n,e,r){r.d(e,{Z:function(){return v}});var t=r(96600),o=r(27279),a=r(55151),i=r(85735),s=r(111),c=r(258),u=r(2437),d=r(53661);function l(n){return(0,d.Z)("MuiCardContent",n)}(0,r(60925).Z)("MuiCardContent",["root"]);var f=r(72075),Z=["className","component"],p=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=a.forwardRef((function(n,e){var r=(0,u.Z)({props:n,name:"MuiCardContent"}),a=r.className,c=r.component,d=void 0===c?"div":c,v=(0,o.Z)(r,Z),x=(0,t.Z)({},r,{component:d}),m=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},l,e)}(x);return(0,f.jsx)(p,(0,t.Z)({as:d,className:(0,i.Z)(m.root,a),ownerState:x,ref:e},v))}))}}]);
//# sourceMappingURL=111.45e82797.chunk.js.map