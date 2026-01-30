import{o}from"./pro-components-BOkVpLWp.js";import{F as p,L as x,w as h}from"./LanguageSelect-cj_7XjVd.js";import{b as l}from"./antd-GvwNVChT.js";import{c as j}from"./index-BzWJB3BM.js";import{c as v,p as C,a as E}from"./middleware-BjY6Xi42.js";import"./json-editor-D3-ZQbSW.js";const M=v()(C(n=>({original:`one
twod
three
four
five`,modified:`one
Twod
Three
four
fiveSix`,language:"json",setOriginal:e=>n(()=>({original:e})),setModified:e=>n(()=>({modified:e})),setLanguage:e=>n(()=>({language:e}))}),{name:"json-diff",storage:E(()=>localStorage)})),N=()=>{const n=l.useRef(void 0),e=l.useRef(void 0),{original:d,modified:g,language:s,setOriginal:u,setModified:c,setLanguage:f}=M(),m=(t,r)=>{n.current=t,e.current=r;const i=t.getOriginalEditor();i.setValue(d||""),i.onDidChangeModelContent(()=>{u(i.getValue())});const a=t.getModifiedEditor();a.setValue(g||""),a.onDidChangeModelContent(()=>{c(a.getValue())}),r.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0})};return o.jsx(p,{children:o.jsxs("div",{className:j("h-full"),children:[o.jsx("div",{className:"h-[48px] p-2",children:o.jsx(x,{value:s,onChange:f})}),o.jsx("div",{className:"h-[calc(100%-48px)]",children:o.jsx(h,{language:s,onMount:m,options:{originalEditable:!0,readOnly:!1}})})]})})};export{N as Component};
