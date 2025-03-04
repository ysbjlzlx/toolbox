import{af as n}from"./pro-components-L2sDkqQs.js";import{L as p,w as x}from"./index-Gl7nNnap.js";import{a as l}from"./antd-Bzy0GL_f.js";import{F as h}from"./FullContainer-76xxcO_u.js";import{c as j}from"./index-0oxnn2GF.js";import{c as C,p as E,a as v}from"./middleware-DqHBdyGy.js";import"./json-editor-CBqK5HSN.js";const M=C()(E(o=>({original:`one
twod
three
four
five`,modified:`one
Twod
Three
four
fiveSix`,language:"json",setOriginal:e=>o(()=>({original:e})),setModified:e=>o(()=>({modified:e})),setLanguage:e=>o(()=>({language:e}))}),{name:"json-diff",storage:v(()=>localStorage)})),V=()=>{const o=l.useRef(void 0),e=l.useRef(void 0),{original:d,modified:g,language:r,setOriginal:u,setModified:f,setLanguage:c}=M(),m=(t,s)=>{o.current=t,e.current=s;const a=t.getOriginalEditor();a.setValue(d||""),a.onDidChangeModelContent(()=>{u(a.getValue())});const i=t.getModifiedEditor();i.setValue(g||""),i.onDidChangeModelContent(()=>{f(i.getValue())}),s.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0})};return n.jsx(h,{children:n.jsxs("div",{className:j("h-full"),children:[n.jsx("div",{className:"h-[48px] p-2",children:n.jsx(p,{value:r,onChange:c})}),n.jsx("div",{className:"h-[calc(100%-48px)]",children:n.jsx(x,{language:r,onMount:m,options:{originalEditable:!0,readOnly:!1}})})]})})};export{V as Component};
