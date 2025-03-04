import{af as n}from"./pro-components-CPZIsSOc.js";import{F as p,L as x,w as h}from"./index-BXGgSu6C.js";import{a as l}from"./antd-Cl3cKmq-.js";import{c as j}from"./index-DkoMvkBT.js";import{c as C,p as E,a as v}from"./middleware-idi24fxu.js";import"./json-editor-D3HpTOiY.js";const M=C()(E(o=>({original:`one
twod
three
four
five`,modified:`one
Twod
Three
four
fiveSix`,language:"json",setOriginal:e=>o(()=>({original:e})),setModified:e=>o(()=>({modified:e})),setLanguage:e=>o(()=>({language:e}))}),{name:"json-diff",storage:v(()=>localStorage)})),N=()=>{const o=l.useRef(void 0),e=l.useRef(void 0),{original:d,modified:g,language:s,setOriginal:u,setModified:f,setLanguage:c}=M(),m=(a,r)=>{o.current=a,e.current=r;const t=a.getOriginalEditor();t.setValue(d||""),t.onDidChangeModelContent(()=>{u(t.getValue())});const i=a.getModifiedEditor();i.setValue(g||""),i.onDidChangeModelContent(()=>{f(i.getValue())}),r.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0})};return n.jsx(p,{children:n.jsxs("div",{className:j("h-full"),children:[n.jsx("div",{className:"h-[48px] p-2",children:n.jsx(x,{value:s,onChange:c})}),n.jsx("div",{className:"h-[calc(100%-48px)]",children:n.jsx(h,{language:s,onMount:m,options:{originalEditable:!0,readOnly:!1}})})]})})};export{N as Component};
