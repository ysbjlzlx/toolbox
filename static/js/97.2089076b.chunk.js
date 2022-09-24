"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[97],{23097:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(86288),o=t(9370),a=t(39753),i=t(94708),s=t(96874),c=t(7536),u=t(95266),d=t(47220),l=t(27279),p=t(96600),m=t(55151),f=t(85735),v=t(111),Z=t(47290),x=t(258),h=t(2437),b=t(76806),g=t(10639),C=t(53661);function S(n){return(0,C.Z)("MuiLink",n)}var y=(0,t(60925).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=t(35403),k=t(95024),M={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=function(n){var e=n.theme,t=n.ownerState,r=function(n){return M[n]||n}(t.color),o=(0,w.D)(e,"palette.".concat(r),!1)||t.color,a=(0,w.D)(e,"palette.".concat(r,"Channel"));return"vars"in e&&a?"rgba(".concat(a," / 0.4)"):(0,k.Fq)(o,.4)},W=t(72075),N=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],j=(0,x.ZP)(i.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["underline".concat((0,Z.Z)(t.underline))],"button"===t.component&&e.button]}})((function(n){var e=n.theme,t=n.ownerState;return(0,p.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,p.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:R({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,d.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),P=m.forwardRef((function(n,e){var t=(0,h.Z)({props:n,name:"MuiLink"}),r=t.className,o=t.color,a=void 0===o?"primary":o,i=t.component,s=void 0===i?"a":i,d=t.onBlur,x=t.onFocus,C=t.TypographyClasses,y=t.underline,w=void 0===y?"always":y,k=t.variant,R=void 0===k?"inherit":k,P=t.sx,A=(0,l.Z)(t,N),G=(0,b.Z)(),D=G.isFocusVisibleRef,L=G.onBlur,T=G.onFocus,B=G.ref,F=m.useState(!1),V=(0,u.Z)(F,2),z=V[0],H=V[1],O=(0,g.Z)(e,B),q=(0,p.Z)({},t,{color:a,component:s,focusVisible:z,underline:w,variant:R}),I=function(n){var e=n.classes,t=n.component,r=n.focusVisible,o=n.underline,a={root:["root","underline".concat((0,Z.Z)(o)),"button"===t&&"button",r&&"focusVisible"]};return(0,v.Z)(a,S,e)}(q);return(0,W.jsx)(j,(0,p.Z)({color:a,className:(0,f.Z)(I.root,r),classes:C,component:s,onBlur:function(n){L(n),!1===D.current&&H(!1),d&&d(n)},onFocus:function(n){T(n),!0===D.current&&H(!0),x&&x(n)},ref:O,ownerState:q,variant:R,sx:[].concat((0,c.Z)(Object.keys(M).includes(a)?[]:[{color:a}]),(0,c.Z)(Array.isArray(P)?P:[P]))},A))})),A=t(65861),G=t(11503),D=t(16726),L=function(){var n;return(0,W.jsx)(A.Z,{style:{marginTop:"64px"},children:(0,W.jsx)(r.ZP,{container:!0,spacing:2,children:(n={applications:D.h},n.applications.map((function(n){return(0,W.jsx)(r.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,W.jsxs)(o.Z,{children:[(0,W.jsxs)(a.Z,{children:[(0,W.jsx)(i.Z,{gutterBottom:!0,variant:"h5",component:"div",children:n.name}),(0,W.jsx)(i.Z,{variant:"body2",color:"text.secondary",children:n.desc})]}),(0,W.jsx)(s.Z,{children:(0,W.jsx)(P,{component:G.rU,to:n.href,children:n.name})})]})},n.name)})))})})}},9370:function(n,e,t){t.d(e,{Z:function(){return Z}});var r=t(96600),o=t(27279),a=t(55151),i=t(85735),s=t(111),c=t(258),u=t(2437),d=t(80567),l=t(53661);function p(n){return(0,l.Z)("MuiCard",n)}(0,t(60925).Z)("MuiCard",["root"]);var m=t(72075),f=["className","raised"],v=(0,c.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiCard"}),a=t.className,c=t.raised,d=void 0!==c&&c,l=(0,o.Z)(t,f),Z=(0,r.Z)({},t,{raised:d}),x=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},p,e)}(Z);return(0,m.jsx)(v,(0,r.Z)({className:(0,i.Z)(x.root,a),elevation:d?8:void 0,ref:e,ownerState:Z},l))}))},96874:function(n,e,t){t.d(e,{Z:function(){return v}});var r=t(27279),o=t(96600),a=t(55151),i=t(85735),s=t(111),c=t(258),u=t(2437),d=t(53661);function l(n){return(0,d.Z)("MuiCardActions",n)}(0,t(60925).Z)("MuiCardActions",["root","spacing"]);var p=t(72075),m=["disableSpacing","className"],f=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),v=a.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiCardActions"}),a=t.disableSpacing,c=void 0!==a&&a,d=t.className,v=(0,r.Z)(t,m),Z=(0,o.Z)({},t,{disableSpacing:c}),x=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,s.Z)(t,l,e)}(Z);return(0,p.jsx)(f,(0,o.Z)({className:(0,i.Z)(x.root,d),ownerState:Z,ref:e},v))}))},39753:function(n,e,t){t.d(e,{Z:function(){return v}});var r=t(96600),o=t(27279),a=t(55151),i=t(85735),s=t(111),c=t(258),u=t(2437),d=t(53661);function l(n){return(0,d.Z)("MuiCardContent",n)}(0,t(60925).Z)("MuiCardContent",["root"]);var p=t(72075),m=["className","component"],f=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),v=a.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiCardContent"}),a=t.className,c=t.component,d=void 0===c?"div":c,v=(0,o.Z)(t,m),Z=(0,r.Z)({},t,{component:d}),x=function(n){var e=n.classes;return(0,s.Z)({root:["root"]},l,e)}(Z);return(0,p.jsx)(f,(0,r.Z)({as:d,className:(0,i.Z)(x.root,a),ownerState:Z,ref:e},v))}))},65861:function(n,e,t){t.d(e,{Z:function(){return w}});var r=t(47220),o=t(27279),a=t(96600),i=t(55151),s=t(85735),c=t(1530),u=t(53661),d=t(111),l=t(80471),p=t(63311),m=t(94674),f=t(72075),v=["className","component","disableGutters","fixed","maxWidth","classes"],Z=(0,m.Z)(),x=(0,p.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),h=function(n){return(0,l.Z)({props:n,name:"MuiContainer",defaultTheme:Z})},b=function(n,e){var t=n.classes,r=n.fixed,o=n.disableGutters,a=n.maxWidth,i={root:["root",a&&"maxWidth".concat((0,c.Z)(String(a))),r&&"fixed",o&&"disableGutters"]};return(0,d.Z)(i,(function(n){return(0,u.Z)(e,n)}),t)};var g=t(47290),C=t(258),S=t(2437),y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.createStyledComponent,t=void 0===e?x:e,c=n.useThemeProps,u=void 0===c?h:c,d=n.componentName,l=void 0===d?"MuiContainer":d,p=t((function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(n){var e=n.theme;return n.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(n,t){var r=t,o=e.breakpoints.values[r];return 0!==o&&(n[e.breakpoints.up(r)]={maxWidth:"".concat(o).concat(e.breakpoints.unit)}),n}),{})}),(function(n){var e=n.theme,t=n.ownerState;return(0,a.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},e.breakpoints.up(t.maxWidth),{maxWidth:"".concat(e.breakpoints.values[t.maxWidth]).concat(e.breakpoints.unit)}))})),m=i.forwardRef((function(n,e){var t=u(n),r=t.className,i=t.component,c=void 0===i?"div":i,d=t.disableGutters,m=void 0!==d&&d,Z=t.fixed,x=void 0!==Z&&Z,h=t.maxWidth,g=void 0===h?"lg":h,C=(0,o.Z)(t,v),S=(0,a.Z)({},t,{component:c,disableGutters:m,fixed:x,maxWidth:g}),y=b(S,l);return(0,f.jsx)(p,(0,a.Z)({as:c,ownerState:S,className:(0,s.Z)(y.root,r),ref:e},C))}));return m}({createStyledComponent:(0,C.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e["maxWidth".concat((0,g.Z)(String(t.maxWidth)))],t.fixed&&e.fixed,t.disableGutters&&e.disableGutters]}}),useThemeProps:function(n){return(0,S.Z)({props:n,name:"MuiContainer"})}}),w=y},63311:function(n,e,t){var r=(0,t(33152).ZP)();e.Z=r}}]);
//# sourceMappingURL=97.2089076b.chunk.js.map