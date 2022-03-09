"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[59],{3059:function(e,n,o){o.r(n),o.d(n,{default:function(){return F}});var r=o(2791),t=o(9439),a=o(4942),i=o(3366),s=o(7462),c=o(8182),l=o(767),u=o(8529),d=o(2065),v=o(4036),f=o(6934),p=o(1046),m=o(8221),Z=o(2071),h=o(890),b=o(5159);function x(e){return(0,b.Z)("MuiLink",e)}var g=(0,o(208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=o(184),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},M=(0,f.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n["underline".concat((0,v.Z)(o.underline))],"button"===o.component&&n.button]}})((function(e){var n=e.theme,o=e.ownerState,r=(0,u.D)(n,"palette.".concat(function(e){return C[e]||e}(o.color)))||o.color;return(0,s.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,d.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),R=r.forwardRef((function(e,n){var o=(0,p.Z)({props:e,name:"MuiLink"}),a=o.className,u=o.color,d=void 0===u?"primary":u,f=o.component,h=void 0===f?"a":f,b=o.onBlur,g=o.onFocus,C=o.TypographyClasses,R=o.underline,y=void 0===R?"always":R,N=o.variant,k=void 0===N?"inherit":N,j=(0,i.Z)(o,w),A=(0,m.Z)(),P=A.isFocusVisibleRef,q=A.onBlur,F=A.onFocus,B=A.ref,D=r.useState(!1),L=(0,t.Z)(D,2),H=L[0],J=L[1],O=(0,Z.Z)(n,B),V=(0,s.Z)({},o,{color:d,component:h,focusVisible:H,underline:y,variant:k}),T=function(e){var n=e.classes,o=e.component,r=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,v.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,l.Z)(a,x,n)}(V);return(0,S.jsx)(M,(0,s.Z)({className:(0,c.Z)(T.root,a),classes:C,color:d,component:h,onBlur:function(e){q(e),!1===P.current&&J(!1),b&&b(e)},onFocus:function(e){F(e),!0===P.current&&J(!0),g&&g(e)},ref:O,ownerState:V,variant:k},j))})),y=o(1889),N=o(7621),k=o(9504),j=o(2363),A=o(6445),P=o(3504),q=[{name:"JSON",desc:"JSON(JavaScript Object Notation) \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u6613\u4e8e\u4eba\u9605\u8bfb\u548c\u7f16\u5199\u3002\u540c\u65f6\u4e5f\u6613\u4e8e\u673a\u5668\u89e3\u6790\u548c\u751f\u6210\u3002",href:"/json"},{name:"URL",desc:"URL(Uniform Resource Locator) \u7edf\u4e00\u8d44\u6e90\u5b9a\u4f4d\u7b26\uff0c\u4fd7\u79f0\u7f51\u9875\u5730\u5740\uff0c\u7b80\u79f0\u7f51\u5740\uff0c\u662f\u56e0\u7279\u7f51\u4e0a\u6807\u51c6\u7684\u8d44\u6e90\u7684\u5730\u5740\uff08Address\uff09\uff0c\u5982\u540c\u5728\u7f51\u7edc\u4e0a\u7684\u95e8\u724c\u3002",href:"/url"},{name:"Markdown",desc:"Markdown \u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u6807\u8bb0\u8bed\u8a00\uff0c\u5b83\u5141\u8bb8\u4eba\u4eec\u4f7f\u7528\u6613\u8bfb\u6613\u5199\u7684\u7eaf\u6587\u672c\u683c\u5f0f\u7f16\u5199\u6587\u6863\u3002",href:"/markdown"},{name:"Random",desc:"\u751f\u6210\u5305\u542b\u6570\u5b57\u3001\u5c0f\u5199\u5b57\u6bcd\u3001\u5927\u5199\u5b57\u6bcd\u3001\u7b26\u53f7\u7684\u968f\u673a\u5b57\u7b26\u4e32",href:"/random"},{name:"Base 64",desc:"Base64 \u7f16\u7801\u3001\u89e3\u7801",href:"/base64"},{name:"Excel",desc:"Excel \u8f6c JSON",href:"/excel"},{name:"Hash",desc:"\u8ba1\u7b97 MD5\u3001SHA1\u3001SHA256\u3001SHA512 \u54c8\u5e0c\u503c",href:"/hash"},{name:"QRCode",desc:"\u4e3a\u5b57\u7b26\u4e32\u751f\u6210\u5bf9\u5e94\u7684 QRCode \u56fe\u7247",href:"/qrcode"},{name:"CodeFormatter",desc:"\u4ee3\u7801\u683c\u5f0f\u5316\uff0c\u76ee\u524d\u652f\u6301\uff1aJSON\u3001JSON5",href:"/code-formatter"}];var F=function(){var e;return(0,S.jsx)(A.Z,{style:{marginTop:"64px"},children:(0,S.jsx)(y.ZP,{container:!0,spacing:2,children:(e={applications:q},e.applications.map((function(e){return(0,S.jsx)(y.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,S.jsxs)(N.Z,{children:[(0,S.jsxs)(k.Z,{children:[(0,S.jsx)(h.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),(0,S.jsx)(h.Z,{variant:"body2",color:"text.secondary",children:e.desc})]}),(0,S.jsx)(j.Z,{children:(0,S.jsx)(R,{component:P.rU,to:e.href,children:e.name})})]})},e.name)})))})})}},7621:function(e,n,o){o.d(n,{Z:function(){return Z}});var r=o(7462),t=o(3366),a=o(2791),i=o(8182),s=o(767),c=o(6934),l=o(1046),u=o(703),d=o(5159);function v(e){return(0,d.Z)("MuiCard",e)}(0,o(208).Z)("MuiCard",["root"]);var f=o(184),p=["className","raised"],m=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,n){var o=(0,l.Z)({props:e,name:"MuiCard"}),a=o.className,c=o.raised,u=void 0!==c&&c,d=(0,t.Z)(o,p),Z=(0,r.Z)({},o,{raised:u}),h=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},v,n)}(Z);return(0,f.jsx)(m,(0,r.Z)({className:(0,i.Z)(h.root,a),elevation:u?8:void 0,ref:n,ownerState:Z},d))}))},2363:function(e,n,o){o.d(n,{Z:function(){return m}});var r=o(3366),t=o(7462),a=o(2791),i=o(8182),s=o(767),c=o(6934),l=o(1046),u=o(5159);function d(e){return(0,u.Z)("MuiCardActions",e)}(0,o(208).Z)("MuiCardActions",["root","spacing"]);var v=o(184),f=["disableSpacing","className"],p=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,!o.disableSpacing&&n.spacing]}})((function(e){var n=e.ownerState;return(0,t.Z)({display:"flex",alignItems:"center",padding:8},!n.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=a.forwardRef((function(e,n){var o=(0,l.Z)({props:e,name:"MuiCardActions"}),a=o.disableSpacing,c=void 0!==a&&a,u=o.className,m=(0,r.Z)(o,f),Z=(0,t.Z)({},o,{disableSpacing:c}),h=function(e){var n=e.classes,o={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(o,d,n)}(Z);return(0,v.jsx)(p,(0,t.Z)({className:(0,i.Z)(h.root,u),ownerState:Z,ref:n},m))}))},9504:function(e,n,o){o.d(n,{Z:function(){return m}});var r=o(7462),t=o(3366),a=o(2791),i=o(8182),s=o(767),c=o(6934),l=o(1046),u=o(5159);function d(e){return(0,u.Z)("MuiCardContent",e)}(0,o(208).Z)("MuiCardContent",["root"]);var v=o(184),f=["className","component"],p=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,n){var o=(0,l.Z)({props:e,name:"MuiCardContent"}),a=o.className,c=o.component,u=void 0===c?"div":c,m=(0,t.Z)(o,f),Z=(0,r.Z)({},o,{component:u}),h=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},d,n)}(Z);return(0,v.jsx)(p,(0,r.Z)({as:u,className:(0,i.Z)(h.root,a),ownerState:Z,ref:n},m))}))},703:function(e,n,o){o.d(n,{Z:function(){return h}});var r=o(3366),t=o(7462),a=o(2791),i=o(8182),s=o(767),c=o(2065),l=o(6934),u=o(1046),d=o(5159);function v(e){return(0,d.Z)("MuiPaper",e)}(0,o(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=o(184),p=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},Z=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,n[o.variant],!o.square&&n.rounded,"elevation"===o.variant&&n["elevation".concat(o.elevation)]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,t.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!o.square&&{borderRadius:n.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===o.variant&&(0,t.Z)({boxShadow:n.shadows[o.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",m(o.elevation)),", ").concat((0,c.Fq)("#fff",m(o.elevation)),")")}))})),h=a.forwardRef((function(e,n){var o=(0,u.Z)({props:e,name:"MuiPaper"}),a=o.className,c=o.component,l=void 0===c?"div":c,d=o.elevation,m=void 0===d?1:d,h=o.square,b=void 0!==h&&h,x=o.variant,g=void 0===x?"elevation":x,S=(0,r.Z)(o,p),w=(0,t.Z)({},o,{component:l,elevation:m,square:b,variant:g}),C=function(e){var n=e.square,o=e.elevation,r=e.variant,t=e.classes,a={root:["root",r,!n&&"rounded","elevation"===r&&"elevation".concat(o)]};return(0,s.Z)(a,v,t)}(w);return(0,f.jsx)(Z,(0,t.Z)({as:l,ownerState:w,className:(0,i.Z)(C.root,a),ref:n},S))}))}}]);
//# sourceMappingURL=59.13146c28.chunk.js.map