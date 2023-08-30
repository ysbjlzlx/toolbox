import{C as T,bV as J,g as A,Z as D,A as W,_ as X,bW as Y,V as Z,bX as B,ay as q,aJ as H,U as K,q as V,bY as ee}from"./index-09453be0.js";import{r as n}from"./ace-073628d1.js";import{E as te}from"./EyeOutlined-79d64004.js";import{S as ne}from"./SearchOutlined-2b8f3c07.js";import{B as oe}from"./button-763a9a47.js";const se=e=>{const{getPrefixCls:l,direction:o}=n.useContext(T),{prefixCls:t,className:s}=e,a=l("input-group",t),x=l("input"),[c,g]=J(x),y=A(a,{[`${a}-lg`]:e.size==="large",[`${a}-sm`]:e.size==="small",[`${a}-compact`]:e.compact,[`${a}-rtl`]:o==="rtl"},g,s),v=n.useContext(D),d=n.useMemo(()=>Object.assign(Object.assign({},v),{isFormItemInput:!1}),[v]);return c(n.createElement("span",{className:y,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},n.createElement(D.Provider,{value:d},e.children)))},ie=se;var re={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const le=re;var ae=function(l,o){return n.createElement(W,X({},l,{ref:o,icon:le}))};const ce=n.forwardRef(ae);var ue=globalThis&&globalThis.__rest||function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)l.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const fe=e=>e?n.createElement(te,null):n.createElement(ce,null),de={click:"onClick",hover:"onMouseOver"},me=n.forwardRef((e,l)=>{const{visibilityToggle:o=!0}=e,t=typeof o=="object"&&o.visible!==void 0,[s,a]=n.useState(()=>t?o.visible:!1),x=n.useRef(null);n.useEffect(()=>{t&&a(o.visible)},[t,o]);const c=Y(x),g=()=>{const{disabled:S}=e;S||(s&&c(),a(u=>{var f;const h=!u;return typeof o=="object"&&((f=o.onVisibleChange)===null||f===void 0||f.call(o,h)),h}))},y=S=>{const{action:u="click",iconRender:f=fe}=e,h=de[u]||"",E=f(s),w={[h]:g,className:`${S}-icon`,key:"passwordIcon",onMouseDown:z=>{z.preventDefault()},onMouseUp:z=>{z.preventDefault()}};return n.cloneElement(n.isValidElement(E)?E:n.createElement("span",null,E),w)},{className:v,prefixCls:d,inputPrefixCls:j,size:m}=e,P=ue(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:N}=n.useContext(T),R=N("input",j),O=N("input-password",d),I=o&&y(O),p=A(O,v,{[`${O}-${m}`]:!!m}),M=Object.assign(Object.assign({},Z(P,["suffix","iconRender","visibilityToggle"])),{type:s?"text":"password",className:p,prefixCls:R,suffix:I});return m&&(M.size=m),n.createElement(B,Object.assign({ref:q(l,x)},M))}),pe=me;var ve=globalThis&&globalThis.__rest||function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,t=Object.getOwnPropertySymbols(e);s<t.length;s++)l.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(o[t[s]]=e[t[s]]);return o};const Ce=n.forwardRef((e,l)=>{const{prefixCls:o,inputPrefixCls:t,className:s,size:a,suffix:x,enterButton:c=!1,addonAfter:g,loading:y,disabled:v,onSearch:d,onChange:j,onCompositionStart:m,onCompositionEnd:P}=e,N=ve(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:R,direction:O}=n.useContext(T),I=n.useRef(!1),p=R("input-search",o),M=R("input",t),{compactSize:S}=H(p,O),u=K(i=>{var r;return(r=a??S)!==null&&r!==void 0?r:i}),f=n.useRef(null),h=i=>{i&&i.target&&i.type==="click"&&d&&d(i.target.value,i),j&&j(i)},E=i=>{var r;document.activeElement===((r=f.current)===null||r===void 0?void 0:r.input)&&i.preventDefault()},w=i=>{var r,b;d&&d((b=(r=f.current)===null||r===void 0?void 0:r.input)===null||b===void 0?void 0:b.value,i)},z=i=>{I.current||y||w(i)},F=typeof c=="boolean"?n.createElement(ne,null):null,k=`${p}-button`;let _;const C=c||{},L=C.type&&C.type.__ANT_BUTTON===!0;L||C.type==="button"?_=V(C,Object.assign({onMouseDown:E,onClick:i=>{var r,b;(b=(r=C==null?void 0:C.props)===null||r===void 0?void 0:r.onClick)===null||b===void 0||b.call(r,i),w(i)},key:"enterButton"},L?{className:k,size:u}:{})):_=n.createElement(oe,{className:k,type:c?"primary":void 0,size:u,disabled:v,key:"enterButton",onMouseDown:E,onClick:w,loading:y,icon:F},c),g&&(_=[_,V(g,{key:"addonAfter"})]);const G=A(p,{[`${p}-rtl`]:O==="rtl",[`${p}-${u}`]:!!u,[`${p}-with-button`]:!!c},s),Q=i=>{I.current=!0,m==null||m(i)},U=i=>{I.current=!1,P==null||P(i)};return n.createElement(B,Object.assign({ref:q(f,l),onPressEnter:z},N,{size:u,onCompositionStart:Q,onCompositionEnd:U,prefixCls:M,addonAfter:_,suffix:x,onChange:h,className:G,disabled:v}))}),be=Ce,$=B;$.Group=ie;$.Search=be;$.TextArea=ee;$.Password=pe;const Ee=$;export{ce as E,Ee as I};
//# sourceMappingURL=index-e7ffbfe3.js.map
