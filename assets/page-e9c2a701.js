import{j as e,P as C,I,S as R}from"./index-09453be0.js";import{r as x}from"./ace-073628d1.js";import{C as S}from"./ContentCopyButton-bd6ee362.js";import{l as g}from"./lodash-8ca398a9.js";import{F as t,C as l}from"./index-52bc7d56.js";import{C as y}from"./index-6da794af.js";import{B as E}from"./button-763a9a47.js";import{R as m,C as a}from"./row-529ae853.js";import{I as u}from"./index-e7ffbfe3.js";import{S as P}from"./index-b7c3aa67.js";import"./index-fa3d343c.js";import"./EyeOutlined-79d64004.js";import"./SearchOutlined-2b8f3c07.js";function b(r,i){const n=Math.ceil(r),c=Math.floor(i);return Math.floor(Math.random()*(c-n))+n}const M=["0","1","2","3","4","5","6","7","8","9"],k=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],A=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],f="",v=({length:r=8,numeric:i=!0,lowercase:n=!0,uppercase:c=!0,symbol:p=!1,symbolChars:o="!@#$%^&*"})=>{if(typeof r>"u"||r===null||r<=0)return f;let s=[];if(i&&(s=s.concat(M)),n&&(s=s.concat(k)),c&&(s=s.concat(A)),p&&o&&(s=s.concat(o.split(""))),s.length<1)return f;g.shuffle(s);let h="";for(let d=0;d<r;d++)h+=s[b(0,s.length)];return h},j={numeric:!0,lowercase:!0,uppercase:!0,symbol:!1,symbolChars:"!@#$%^&*"};function Y(){const[r,i]=x.useState("");x.useEffect(()=>{n()},[]);const n=(o=j)=>{const s=v(o);i(s)},c=(o,s)=>{n(s)},p=o=>{n(o)};return e.jsx(C,{title:!1,style:{paddingTop:"20px",paddingLeft:"20px",paddingRight:"20px"},children:e.jsx(t,{layout:"horizontal",initialValues:j,onValuesChange:c,onFinish:p,children:e.jsxs(y,{actions:[e.jsx(E,{htmlType:"submit",icon:e.jsx(I,{icon:"material-symbols:refresh"})},"1")],children:[e.jsxs(m,{children:[e.jsx(a,{span:4,children:e.jsx(t.Item,{name:"numeric",valuePropName:"checked",children:e.jsx(l,{children:"数字 0 ～ 9"})})}),e.jsx(a,{span:4,children:e.jsx(t.Item,{name:"lowercase",valuePropName:"checked",children:e.jsx(l,{children:"小写字母 a ~ z"})})}),e.jsx(a,{span:4,children:e.jsx(t.Item,{name:"uppercase",valuePropName:"checked",children:e.jsx(l,{children:"大写字母 A ~ Z"})})}),e.jsx(a,{span:8,children:e.jsxs(m,{children:[e.jsx(a,{span:4,children:e.jsx(t.Item,{name:"symbol",valuePropName:"checked",children:e.jsx(l,{children:"符号"})})}),e.jsx(a,{span:20,children:e.jsx(t.Item,{name:"symbolChars",children:e.jsx(u,{})})})]})})]}),e.jsx(m,{children:e.jsx(a,{span:24,children:e.jsx(t.Item,{name:"length",label:"长度",children:e.jsx(P,{min:6,max:64,step:1,marks:{6:"6",8:"8",16:"16",32:"32",64:"64"}})})})}),e.jsx(m,{children:e.jsx(a,{span:24,children:e.jsx(t.Item,{children:e.jsxs(R.Compact,{block:!0,children:[e.jsx(u,{value:r}),e.jsx(S,{text:r})]})})})})]})})})}export{Y as default};
//# sourceMappingURL=page-e9c2a701.js.map
