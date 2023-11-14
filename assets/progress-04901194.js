import{r as s}from"./ace-306b8502.js";import{K as Q,bs as le,N as ue,bq as de,l as L,X as J,f as ge,_ as fe,g as H,bt as V,u as pe,o as me,q as ve,s as Ce,C as ye,V as he,a$ as be,b1 as Se,bu as $e,br as ke}from"./index-c4fa426a.js";const xe=new Q("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Ee=new Q("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),nt=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:r}=e,o=`${r}-fade`,n=t?"&":"";return[le(o,xe,Ee,e.motionDurationMid,t),{[`
        ${n}${o}-enter,
        ${n}${o}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${n}${o}-leave`]:{animationTimingFunction:"linear"}}]};var Pe={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},we=function(){var t=s.useRef([]),r=s.useRef(null);return s.useEffect(function(){var o=Date.now(),n=!1;t.current.forEach(function(c){if(c){n=!0;var i=c.style;i.transitionDuration=".3s, .3s, .3s, .06s",r.current&&o-r.current<100&&(i.transitionDuration="0s, 0s")}}),n&&(r.current=Date.now())}),t.current},ee=0,Oe=de();function Ie(){var e;return Oe?(e=ee,ee+=1):e="TEST_OR_SSR",e}const De=function(e){var t=s.useState(),r=ue(t,2),o=r[0],n=r[1];return s.useEffect(function(){n("rc_progress_".concat(Ie()))},[]),e||o};var te=function(t){var r=t.bg,o=t.children;return s.createElement("div",{style:{width:"100%",height:"100%",background:r}},o)};function re(e,t){return Object.keys(e).map(function(r){var o=parseFloat(r),n="".concat(Math.floor(o*t),"%");return"".concat(e[r]," ").concat(n)})}var _e=s.forwardRef(function(e,t){var r=e.prefixCls,o=e.color,n=e.gradientId,c=e.radius,i=e.style,a=e.ptg,l=e.strokeLinecap,d=e.strokeWidth,u=e.size,f=e.gapDegree,v=o&&L(o)==="object",y=v?"#FFF":void 0,C=u/2,m=s.createElement("circle",{className:"".concat(r,"-circle-path"),r:c,cx:C,cy:C,stroke:y,strokeLinecap:l,strokeWidth:d,opacity:a===0?0:1,style:i,ref:t});if(!v)return m;var g="".concat(n,"-conic"),$=f?"".concat(180+f/2,"deg"):"0deg",b=re(o,(360-f)/360),S=re(o,1),p="conic-gradient(from ".concat($,", ").concat(b.join(", "),")"),E="linear-gradient(to ".concat(f?"bottom":"top",", ").concat(S.join(", "),")");return s.createElement(s.Fragment,null,s.createElement("mask",{id:g},m),s.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(g,")")},s.createElement(te,{bg:E},s.createElement(te,{bg:p}))))}),T=100,U=function(t,r,o,n,c,i,a,l,d,u){var f=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,v=o/100*360*((360-i)/360),y=i===0?0:{bottom:0,top:180,left:90,right:-90}[a],C=(100-n)/100*r;d==="round"&&n!==100&&(C+=u/2,C>=r&&(C=r-.01));var m=T/2;return{stroke:typeof l=="string"?l:void 0,strokeDasharray:"".concat(r,"px ").concat(t),strokeDashoffset:C+f,transform:"rotate(".concat(c+v+y,"deg)"),transformOrigin:"".concat(m,"px ").concat(m,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},je=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function oe(e){var t=e??[];return Array.isArray(t)?t:[t]}var Ne=function(t){var r=J(J({},Pe),t),o=r.id,n=r.prefixCls,c=r.steps,i=r.strokeWidth,a=r.trailWidth,l=r.gapDegree,d=l===void 0?0:l,u=r.gapPosition,f=r.trailColor,v=r.strokeLinecap,y=r.style,C=r.className,m=r.strokeColor,g=r.percent,$=ge(r,je),b=T/2,S=De(o),p="".concat(S,"-gradient"),E=b-i/2,D=Math.PI*2*E,O=d>0?90+d/2:-90,P=D*((360-d)/360),A=L(c)==="object"?c:{count:c,space:2},k=A.count,F=A.space,w=oe(g),h=oe(m),x=h.find(function(R){return R&&L(R)==="object"}),M=x&&L(x)==="object",_=M?"butt":v,se=U(D,P,0,100,O,d,u,f,_,i),Y=we(),ie=function(){var B=0;return w.map(function(N,j){var z=h[j]||h[h.length-1],W=U(D,P,B,N,O,d,u,z,_,i);return B+=N,s.createElement(_e,{key:j,color:z,ptg:N,radius:E,prefixCls:n,gradientId:p,style:W,strokeLinecap:_,strokeWidth:i,gapDegree:d,ref:function(q){Y[j]=q},size:T})}).reverse()},ae=function(){var B=Math.round(k*(w[0]/100)),N=100/k,j=0;return new Array(k).fill(null).map(function(z,W){var X=W<=B-1?h[0]:f,q=X&&L(X)==="object"?"url(#".concat(p,")"):void 0,Z=U(D,P,j,N,O,d,u,X,"butt",i,F);return j+=(P-Z.strokeDashoffset+F)*100/P,s.createElement("circle",{key:W,className:"".concat(n,"-circle-path"),r:E,cx:b,cy:b,stroke:q,strokeWidth:i,opacity:1,style:Z,ref:function(ce){Y[W]=ce}})})};return s.createElement("svg",fe({className:H("".concat(n,"-circle"),C),viewBox:"0 0 ".concat(T," ").concat(T),style:y,id:o,role:"presentation"},$),!k&&s.createElement("circle",{className:"".concat(n,"-circle-trail"),r:E,cx:b,cy:b,stroke:f,strokeLinecap:_,strokeWidth:a||i,style:se}),k?ae():ie())};function I(e){return!e||e<0?0:e>100?100:e}function G(e){let{success:t,successPercent:r}=e,o=r;return t&&"progress"in t&&(o=t.progress),t&&"percent"in t&&(o=t.percent),o}const We=e=>{let{percent:t,success:r,successPercent:o}=e;const n=I(G({success:r,successPercent:o}));return[n,I(I(t)-n)]},Le=e=>{let{success:t={},strokeColor:r}=e;const{strokeColor:o}=t;return[o||V.green,r||null]},K=(e,t,r)=>{var o,n,c,i;let a=-1,l=-1;if(t==="step"){const d=r.steps,u=r.strokeWidth;typeof e=="string"||typeof e>"u"?(a=e==="small"?2:14,l=u??8):typeof e=="number"?[a,l]=[e,e]:[a=14,l=8]=e,a*=d}else if(t==="line"){const d=r==null?void 0:r.strokeWidth;typeof e=="string"||typeof e>"u"?l=d||(e==="small"?6:8):typeof e=="number"?[a,l]=[e,e]:[a=-1,l=8]=e}else(t==="circle"||t==="dashboard")&&(typeof e=="string"||typeof e>"u"?[a,l]=e==="small"?[60,60]:[120,120]:typeof e=="number"?[a,l]=[e,e]:(a=(n=(o=e[0])!==null&&o!==void 0?o:e[1])!==null&&n!==void 0?n:120,l=(i=(c=e[0])!==null&&c!==void 0?c:e[1])!==null&&i!==void 0?i:120));return[a,l]},Te=3,Ae=e=>Te/e*100,Fe=e=>{const{prefixCls:t,trailColor:r=null,strokeLinecap:o="round",gapPosition:n,gapDegree:c,width:i=120,type:a,children:l,success:d,size:u=i}=e,[f,v]=K(u,"circle");let{strokeWidth:y}=e;y===void 0&&(y=Math.max(Ae(f),6));const C={width:f,height:v,fontSize:f*.15+6},m=s.useMemo(()=>{if(c||c===0)return c;if(a==="dashboard")return 75},[c,a]),g=n||a==="dashboard"&&"bottom"||void 0,$=Object.prototype.toString.call(e.strokeColor)==="[object Object]",b=Le({success:d,strokeColor:e.strokeColor}),S=H(`${t}-inner`,{[`${t}-circle-gradient`]:$}),p=s.createElement(Ne,{percent:We(e),strokeWidth:y,trailWidth:y,strokeColor:b,strokeLinecap:o,trailColor:r,prefixCls:t,gapDegree:m,gapPosition:g});return s.createElement("div",{className:S,style:C},f<=20?s.createElement(pe,{title:l},s.createElement("span",null,p)):s.createElement(s.Fragment,null,p,l))},Me=Fe;var Re=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Be=e=>{let t=[];return Object.keys(e).forEach(r=>{const o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),t=t.sort((r,o)=>r.key-o.key),t.map(r=>{let{key:o,value:n}=r;return`${n} ${o}%`}).join(", ")},Xe=(e,t)=>{const{from:r=V.blue,to:o=V.blue,direction:n=t==="rtl"?"to left":"to right"}=e,c=Re(e,["from","to","direction"]);if(Object.keys(c).length!==0){const i=Be(c);return{backgroundImage:`linear-gradient(${n}, ${i})`}}return{backgroundImage:`linear-gradient(${n}, ${r}, ${o})`}},Ge=e=>{const{prefixCls:t,direction:r,percent:o,size:n,strokeWidth:c,strokeColor:i,strokeLinecap:a="round",children:l,trailColor:d=null,success:u}=e,f=i&&typeof i!="string"?Xe(i,r):{backgroundColor:i},v=a==="square"||a==="butt"?0:void 0,y={backgroundColor:d||void 0,borderRadius:v},C=n??[-1,c||(n==="small"?6:8)],[m,g]=K(C,"line",{strokeWidth:c}),$=Object.assign({width:`${I(o)}%`,height:g,borderRadius:v},f),b=G(e),S={width:`${I(b)}%`,height:g,borderRadius:v,backgroundColor:u==null?void 0:u.strokeColor},p={width:m<0?"100%":m,height:g};return s.createElement(s.Fragment,null,s.createElement("div",{className:`${t}-outer`,style:p},s.createElement("div",{className:`${t}-inner`,style:y},s.createElement("div",{className:`${t}-bg`,style:$}),b!==void 0?s.createElement("div",{className:`${t}-success-bg`,style:S}):null)),l)},He=Ge,Ke=e=>{const{size:t,steps:r,percent:o=0,strokeWidth:n=8,strokeColor:c,trailColor:i=null,prefixCls:a,children:l}=e,d=Math.round(r*(o/100)),f=t??[t==="small"?2:14,n],[v,y]=K(f,"step",{steps:r,strokeWidth:n}),C=v/r,m=new Array(r);for(let g=0;g<r;g++){const $=Array.isArray(c)?c[g]:c;m[g]=s.createElement("div",{key:g,className:H(`${a}-steps-item`,{[`${a}-steps-item-active`]:g<=d-1}),style:{backgroundColor:g<=d-1?$:i,width:C,height:y}})}return s.createElement("div",{className:`${a}-steps-outer`},m,l)},ze=Ke,ne=e=>{const t=e?"100%":"-100%";return new Q(`antProgress${e?"RTL":"LTR"}Active`,{"0%":{transform:`translateX(${t}) scaleX(0)`,opacity:.1},"20%":{transform:`translateX(${t}) scaleX(0)`,opacity:.5},to:{transform:"translateX(0) scaleX(1)",opacity:0}})},qe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:Object.assign(Object.assign({},Ce(e)),{display:"inline-block","&-rtl":{direction:"rtl"},"&-line":{position:"relative",width:"100%",fontSize:e.fontSize,marginInlineEnd:e.marginXS,marginBottom:e.marginXS},[`${t}-outer`]:{display:"inline-block",width:"100%"},[`&${t}-show-info`]:{[`${t}-outer`]:{marginInlineEnd:`calc(-2em - ${e.marginXS}px)`,paddingInlineEnd:`calc(2em + ${e.paddingXS}px)`}},[`${t}-inner`]:{position:"relative",display:"inline-block",width:"100%",overflow:"hidden",verticalAlign:"middle",backgroundColor:e.remainingColor,borderRadius:e.lineBorderRadius},[`${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.defaultColor}},[`${t}-success-bg, ${t}-bg`]:{position:"relative",backgroundColor:e.defaultColor,borderRadius:e.lineBorderRadius,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`},[`${t}-success-bg`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,backgroundColor:e.colorSuccess},[`${t}-text`]:{display:"inline-block",width:"2em",marginInlineStart:e.marginXS,color:e.colorText,lineHeight:1,whiteSpace:"nowrap",textAlign:"start",verticalAlign:"middle",wordBreak:"normal",[r]:{fontSize:e.fontSize}},[`&${t}-status-active`]:{[`${t}-bg::before`]:{position:"absolute",inset:0,backgroundColor:e.colorBgContainer,borderRadius:e.lineBorderRadius,opacity:0,animationName:ne(),animationDuration:e.progressActiveMotionDuration,animationTimingFunction:e.motionEaseOutQuint,animationIterationCount:"infinite",content:'""'}},[`&${t}-rtl${t}-status-active`]:{[`${t}-bg::before`]:{animationName:ne(!0)}},[`&${t}-status-exception`]:{[`${t}-bg`]:{backgroundColor:e.colorError},[`${t}-text`]:{color:e.colorError}},[`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorError}},[`&${t}-status-success`]:{[`${t}-bg`]:{backgroundColor:e.colorSuccess},[`${t}-text`]:{color:e.colorSuccess}},[`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]:{[`${t}-circle-path`]:{stroke:e.colorSuccess}}})}},Ue=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-circle-trail`]:{stroke:e.remainingColor},[`&${t}-circle ${t}-inner`]:{position:"relative",lineHeight:1,backgroundColor:"transparent"},[`&${t}-circle ${t}-text`]:{position:"absolute",insetBlockStart:"50%",insetInlineStart:0,width:"100%",margin:0,padding:0,color:e.circleTextColor,fontSize:e.circleTextFontSize,lineHeight:1,whiteSpace:"normal",textAlign:"center",transform:"translateY(-50%)",[r]:{fontSize:`${e.fontSize/e.fontSizeSM}em`}},[`${t}-circle&-status-exception`]:{[`${t}-text`]:{color:e.colorError}},[`${t}-circle&-status-success`]:{[`${t}-text`]:{color:e.colorSuccess}}},[`${t}-inline-circle`]:{lineHeight:1,[`${t}-inner`]:{verticalAlign:"bottom"}}}},Ve=e=>{const{componentCls:t}=e;return{[t]:{[`${t}-steps`]:{display:"inline-block","&-outer":{display:"flex",flexDirection:"row",alignItems:"center"},"&-item":{flexShrink:0,minWidth:e.progressStepMinWidth,marginInlineEnd:e.progressStepMarginInlineEnd,backgroundColor:e.remainingColor,transition:`all ${e.motionDurationSlow}`,"&-active":{backgroundColor:e.defaultColor}}}}}},Qe=e=>{const{componentCls:t,iconCls:r}=e;return{[t]:{[`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]:{fontSize:e.fontSizeSM}}}},Ye=me("Progress",e=>{const t=e.marginXXS/2,r=ve(e,{progressStepMarginInlineEnd:t,progressStepMinWidth:t,progressActiveMotionDuration:"2.4s"});return[qe(r),Ue(r),Ve(r),Qe(r)]},e=>({circleTextColor:e.colorText,defaultColor:e.colorInfo,remainingColor:e.colorFillSecondary,lineBorderRadius:100,circleTextFontSize:"1em"}));var Ze=globalThis&&globalThis.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};const Je=["normal","exception","active","success"],et=s.forwardRef((e,t)=>{const{prefixCls:r,className:o,rootClassName:n,steps:c,strokeColor:i,percent:a=0,size:l="default",showInfo:d=!0,type:u="line",status:f,format:v,style:y}=e,C=Ze(e,["prefixCls","className","rootClassName","steps","strokeColor","percent","size","showInfo","type","status","format","style"]),m=s.useMemo(()=>{var w,h;const x=G(e);return parseInt(x!==void 0?(w=x??0)===null||w===void 0?void 0:w.toString():(h=a??0)===null||h===void 0?void 0:h.toString(),10)},[a,e.success,e.successPercent]),g=s.useMemo(()=>!Je.includes(f)&&m>=100?"success":f||"normal",[f,m]),{getPrefixCls:$,direction:b,progress:S}=s.useContext(ye),p=$("progress",r),[E,D]=Ye(p),O=s.useMemo(()=>{if(!d)return null;const w=G(e);let h;const x=v||(_=>`${_}%`),M=u==="line";return v||g!=="exception"&&g!=="success"?h=x(I(a),I(w)):g==="exception"?h=M?s.createElement(be,null):s.createElement(Se,null):g==="success"&&(h=M?s.createElement($e,null):s.createElement(ke,null)),s.createElement("span",{className:`${p}-text`,title:typeof h=="string"?h:void 0},h)},[d,a,m,g,u,p,v]),P=Array.isArray(i)?i[0]:i,A=typeof i=="string"||Array.isArray(i)?i:void 0;let k;u==="line"?k=c?s.createElement(ze,Object.assign({},e,{strokeColor:A,prefixCls:p,steps:c}),O):s.createElement(He,Object.assign({},e,{strokeColor:P,prefixCls:p,direction:b}),O):(u==="circle"||u==="dashboard")&&(k=s.createElement(Me,Object.assign({},e,{strokeColor:P,prefixCls:p,progressStatus:g}),O));const F=H(p,`${p}-status-${g}`,`${p}-${u==="dashboard"&&"circle"||c&&"steps"||u}`,{[`${p}-inline-circle`]:u==="circle"&&K(l,"circle")[0]<=20,[`${p}-show-info`]:d,[`${p}-${l}`]:typeof l=="string",[`${p}-rtl`]:b==="rtl"},S==null?void 0:S.className,o,n,D);return E(s.createElement("div",Object.assign({ref:t,style:Object.assign(Object.assign({},S==null?void 0:S.style),y),className:F,role:"progressbar","aria-valuenow":m},he(C,["trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"])),k))}),st=et;export{st as P,nt as i};
//# sourceMappingURL=progress-04901194.js.map
