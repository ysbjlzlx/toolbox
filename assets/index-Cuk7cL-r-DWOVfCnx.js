import{h as p,b as $,u as C,d as g,g as x,n as O,o as L,p as P}from"./functions-Bsik6ikd-D8GGRsLx.js";import{b as h}from"./index-DkoMvkBT.js";import{h as v,l as E,M}from"./index-BKZqlHfW.js";import{T as S}from"./index-CCHPmTqj.js";import"./pro-components-CPZIsSOc.js";import"./antd-Cl3cKmq-.js";import"./json-editor-D3HpTOiY.js";import"./syntax-2Kab1CR3.js";import"./index.browser-B0na17u1.js";import"./index-BUFMBfDr.js";var w=Object.defineProperty,k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,y=(n,e,t)=>e in n?w(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,j=(n,e)=>{for(var t in e||(e={}))T.call(e,t)&&y(n,t,e[t]);if(k)for(var t of k(e))F.call(e,t)&&y(n,t,e[t]);return n};function I(n,e){return Object.assign(n,{meta:j({package:"@milkdown/components"},e)}),n}function A(n,e){const t=customElements.get(n);if(t==null){customElements.define(n,e);return}t!==e&&console.warn(`Custom element ${n} has been defined before.`)}const _=({selected:n,label:e="",listType:t="",checked:o,onMount:r,setAttr:s,config:u,readonly:d})=>{const a=C(),l=g();x(()=>{const f=l.current;if(!f)return;const b=a.current.querySelector("[data-content-dom]");b&&(f.appendChild(b),r==null||r())},[]);const i=()=>{o!=null&&(s==null||s("checked",!o))},c={label:e,listType:t,checked:o,readonly:d};return p`<host class=${n&&"ProseMirror-selectednode"}>
    <li class="list-item">
      <div
        class="label-wrapper"
        onclick=${i}
        contenteditable="false"
      >
        ${u==null?void 0:u.renderLabel(c)}
      </div>
      <div class="children" ref=${l}></div>
    </li>
  </host>`};_.props={label:String,checked:Boolean,readonly:Boolean,listType:String,config:Object,selected:Boolean,setAttr:Function,onMount:Function};const V=$(_),q={renderLabel:({label:n,listType:e,checked:t,readonly:o})=>t==null?p`<span class="label"
        >${e==="bullet"?"⦿":n}</span
      >`:p`<input
      disabled=${o}
      class="label"
      type="checkbox"
      checked=${t}
    />`},m=v(q,"listItemBlockConfigCtx");I(m,{displayName:"Config<list-item-block>",group:"ListItemBlock"});A("milkdown-list-item-block",V);const B=E(M.node,n=>(e,t,o)=>{const r=document.createElement("milkdown-list-item-block"),s=document.createElement("div");s.setAttribute("data-content-dom","true"),s.classList.add("content-dom");const u=n.get(m.key),d=l=>{r.listType=l.attrs.listType,r.label=l.attrs.label,r.checked=l.attrs.checked,r.readonly=!t.editable};d(e),r.appendChild(s),r.selected=!1,r.setAttr=(l,i)=>{const c=o();c!=null&&t.dispatch(t.state.tr.setNodeAttribute(c,l,i))},r.onMount=()=>{const{anchor:l,head:i}=t.state.selection;t.hasFocus()&&setTimeout(()=>{const c=t.state.doc.resolve(l),f=t.state.doc.resolve(i);t.dispatch(t.state.tr.setSelection(new S(c,f)))})};let a=e;return r.config=u,{dom:r,contentDOM:s,update:l=>l.type!==e.type?!1:(l.sameMarkup(a)&&l.content.eq(a.content)||(a=l,d(l)),!0),ignoreMutation:l=>!r||!s?!0:l.type==="selection"?!1:s===l.target&&l.type==="attributes"?!0:!s.contains(l.target),selectNode:()=>{r.selected=!0},deselectNode:()=>{r.selected=!1},destroy:()=>{r.remove(),s.remove()}}});I(B,{displayName:"NodeView<list-item-block>",group:"ListItemBlock"});const D=[m,B];function R(n,e){n.set(m.key,{renderLabel:({label:t,listType:o,checked:r,readonly:s})=>{var u,d,a,l,i,c;return r==null?o==="bullet"?p`<span class="label"
            >${(d=(u=e==null?void 0:e.bulletIcon)==null?void 0:u.call(e))!=null?d:O}</span
          >`:p`<span class="label">${t}</span>`:r?p`<span
          class=${h("label checkbox",s&&"readonly")}
          >${(l=(a=e==null?void 0:e.checkBoxCheckedIcon)==null?void 0:a.call(e))!=null?l:L}</span
        >`:p`<span class=${h("label checkbox",s&&"readonly")}
        >${(c=(i=e==null?void 0:e.checkBoxUncheckedIcon)==null?void 0:i.call(e))!=null?c:P}</span
      >`}})}const Y=(n,e)=>{n.config(t=>R(t,e)).use(D)};export{Y as defineFeature};
