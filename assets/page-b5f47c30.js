import{j as t,B as i,a3 as j}from"./index-09453be0.js";import{U as d,K as y}from"./standalone-ff0fb4dd.js";import{r as s,_ as l}from"./ace-073628d1.js";import{Y as f}from"./index-7cea429d.js";import"./ext-searchbox-a35fb402.js";import"./mode-json-775dfcf6.js";import"./mode-yaml-51f49bee.js";import"./theme-textmate-f2bf9281.js";import{B as g}from"./button-763a9a47.js";import{R as S,C as m}from"./row-529ae853.js";const w=()=>{const[o,a]=s.useState(""),[n,c]=s.useState(""),[h]=s.useState({useWorker:!1,showLineNumbers:!0,tabSize:2,wrap:!0,fontSize:14}),[p]=s.useState({useWorker:!1,showLineNumbers:!0,tabSize:2,wrap:!0,fontSize:14}),u=async r=>{try{const e=JSON.stringify(f.parse(r));return d.format(e,{parser:"json",plugins:[y]})}catch(e){return e instanceof SyntaxError,console.warn(e),""}},x=()=>{u(n).then(r=>{a(r)})};return t.jsxs(i,{sx:{height:"100%"},children:[t.jsx(i,{children:t.jsx(g,{type:"text",onClick:x,children:"YAML => JSON"})}),t.jsxs(S,{style:{height:"calc(100% - 37px)"},children:[t.jsx(m,{xs:24,md:12,style:{height:"100%"},children:t.jsx(l,{theme:"textmate",placeholder:"YAML",setOptions:p,value:n,onChange:c,mode:"yaml",width:"100%",height:"100%"})}),t.jsx(m,{xs:24,md:12,style:{height:"100%"},children:t.jsx(l,{theme:"textmate",placeholder:"JSON",setOptions:h,value:o,onChange:a,mode:"json",width:"100%",height:"100%"})})]})]})},z=()=>{const o=[{key:"yaml-to-json",label:"Yaml To Json",children:t.jsx(w,{}),style:{height:"calc(100vh - 62px)"}}];return t.jsx(j,{defaultActiveKey:"yaml-to-json",items:o})};export{z as default};
//# sourceMappingURL=page-b5f47c30.js.map
