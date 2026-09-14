import{r as e}from"./rolldown-runtime-hePW80VL.js";import{At as t}from"./antd-BaWf7MUf.js";import{h as n}from"./pro-components-DNWOc9Yn.js";import{r}from"./index-DDsNthql.js";import{i,n as a,t as o}from"./LanguageSelect-CmMx4fl2.js";import{n as s,r as c,t as l}from"./middleware-LkEjQUcX.js";var u=e(t()),d=c()(s(e=>({original:`one
twod
three
four
five`,modified:`one
Twod
Three
four
fiveSix`,language:`json`,setOriginal:t=>e(()=>({original:t})),setModified:t=>e(()=>({modified:t})),setLanguage:t=>e(()=>({language:t}))}),{name:`json-diff`,storage:l(()=>localStorage)})),f=n(),p=()=>{let e=(0,u.useRef)(void 0),t=(0,u.useRef)(void 0),{original:n,modified:s,language:c,setOriginal:l,setModified:p,setLanguage:m}=d();return(0,f.jsx)(a,{children:(0,f.jsxs)(`div`,{className:r(`h-full`),children:[(0,f.jsx)(`div`,{className:`h-[48px] p-2`,children:(0,f.jsx)(o,{value:c,onChange:m})}),(0,f.jsx)(`div`,{className:`h-[calc(100%-48px)]`,children:(0,f.jsx)(i,{language:c,onMount:(r,i)=>{e.current=r,t.current=i;let a=r.getOriginalEditor();a.setValue(n||``),a.onDidChangeModelContent(()=>{l(a.getValue())});let o=r.getModifiedEditor();o.setValue(s||``),o.onDidChangeModelContent(()=>{p(o.getValue())}),i.languages.json.jsonDefaults.setDiagnosticsOptions({allowComments:!0})},options:{originalEditable:!0,readOnly:!1}})})]})})};export{p as Component};