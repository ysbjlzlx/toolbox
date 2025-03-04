import{h as v,b as D,d as T,q as S,v as b,w as j}from"./functions-Bsik6ikd-D8GGRsLx.js";import{h as F,l as N,v as V}from"./index-BKZqlHfW.js";import{u as h}from"./hooks-Dt0wL0oo.js";import{c as A}from"./index.browser-B0na17u1.js";import{b as I}from"./index-DkoMvkBT.js";import{i as H,a as M}from"./index.es-DqAO6ekn.js";import"./pro-components-CPZIsSOc.js";import"./antd-Cl3cKmq-.js";import"./json-editor-D3HpTOiY.js";import"./index-CCHPmTqj.js";import"./syntax-2Kab1CR3.js";import"./index-BUFMBfDr.js";var q=Object.defineProperty,$=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,P=(n,e,o)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,z=(n,e)=>{for(var o in e||(e={}))K.call(e,o)&&P(n,o,e[o]);if($)for(var o of $(e))W.call(e,o)&&P(n,o,e[o]);return n};function g(n,e){return Object.assign(n,{meta:z({package:"@milkdown/components"},e)}),n}const G={imageIcon:()=>"🌌",uploadButton:()=>v`Upload`,confirmButton:()=>v`⏎`,uploadPlaceholderText:"/Paste",onUpload:n=>Promise.resolve(URL.createObjectURL(n))},y=F(G,"inlineImageConfigCtx");g(y,{displayName:"Config<image-inline>",group:"ImageInline"});function J(n,e){const o=customElements.get(n);if(o==null){customElements.define(n,e);return}o!==e&&console.warn(`Custom element ${n} has been defined before.`)}var Q=(n,e,o)=>new Promise((s,t)=>{var r=l=>{try{i(o.next(l))}catch(a){t(a)}},d=l=>{try{i(o.throw(l))}catch(a){t(a)}},i=l=>l.done?s(l.value):Promise.resolve(l.value).then(r,d);i((o=o.apply(n,e)).next())});const X=A("abcdefg",8),C=({src:n="",selected:e=!1,alt:o,title:s,setAttr:t,config:r})=>{const d=T(),[i]=h(X()),[l,a]=h(!1),[p,m]=h(n.length!==0),[_,w]=h(n),L=u=>{const f=u.target.value;m(f.length!==0),w(f)},B=u=>Q(void 0,null,function*(){var c;const f=(c=u.target.files)==null?void 0:c[0];if(!f)return;const U=yield r==null?void 0:r.onUpload(f);U&&(t==null||t("src",U),m(!0))}),k=()=>{var u,c;t==null||t("src",(c=(u=d.current)==null?void 0:u.value)!=null?c:"")},O=u=>{u.key==="Enter"&&k()},E=u=>{u.preventDefault(),u.stopPropagation()},R=u=>{u.stopPropagation(),u.preventDefault()};return v`<host class=${I(e&&"selected",!n&&"empty")}>
    ${n?v`<img class="image-inline" src=${n} alt=${o} title=${s} />`:v`<div class="empty-image-inline">
          <div class="image-icon">${r==null?void 0:r.imageIcon()}</div>
          <div class=${I("link-importer",l&&"focus")}>
            <input
              draggable="true"
              ref=${d}
              ondragstart=${E}
              class="link-input-area"
              value=${_}
              oninput=${L}
              onkeydown=${O}
              onfocus=${()=>a(!0)}
              onblur=${()=>a(!1)}
            />
            <div class=${I("placeholder",p&&"hidden")}>
              <input
                class="hidden"
                id=${i}
                type="file"
                accept="image/*"
                onchange=${B}
              />
              <label
                onpointerdown=${R}
                class="uploader"
                for=${i}
              >
                ${r==null?void 0:r.uploadButton()}
              </label>
              <span class="text" onclick=${()=>{var u;return(u=d.current)==null?void 0:u.focus()}}>
                ${r==null?void 0:r.uploadPlaceholderText}
              </span>
            </div>
          </div>
          <div
            class=${I("confirm",_.length===0&&"hidden")}
            onclick=${()=>k()}
          >
            ${r==null?void 0:r.confirmButton()}
          </div>
        </div>`}
  </host>`};C.props={src:String,alt:String,title:String,selected:Boolean,setAttr:Function,config:Object};const Y=D(C);J("milkdown-image-inline",Y);const x=N(V.node,n=>(e,o,s)=>{const t=document.createElement("milkdown-image-inline"),r=n.get(y.key),d=r.proxyDomURL,i=l=>{if(!d)t.src=l.attrs.src;else{const a=d(l.attrs.src);typeof a=="string"?t.src=a:a.then(p=>{t.src=p})}t.alt=l.attrs.alt,t.title=l.attrs.title};return i(e),t.selected=!1,t.setAttr=(l,a)=>{const p=s();p!=null&&o.dispatch(o.state.tr.setNodeAttribute(p,l,a))},t.config=r,{dom:t,update:l=>l.type!==e.type?!1:(i(l),!0),stopEvent:l=>!!(t.selected&&l.target instanceof HTMLInputElement),selectNode:()=>{t.selected=!0},deselectNode:()=>{t.selected=!1},destroy:()=>{t.remove()}}});g(x,{displayName:"NodeView<image-inline>",group:"ImageInline"});const Z=[y,x],ce=(n,e)=>{n.config(o=>{o.update(y.key,s=>{var t,r,d,i,l,a;return{uploadButton:(t=e==null?void 0:e.inlineUploadButton)!=null?t:()=>"Upload",imageIcon:(r=e==null?void 0:e.inlineImageIcon)!=null?r:()=>b,confirmButton:(d=e==null?void 0:e.inlineConfirmButton)!=null?d:()=>S,uploadPlaceholderText:(i=e==null?void 0:e.inlineUploadPlaceholderText)!=null?i:"or paste link",onUpload:(a=(l=e==null?void 0:e.inlineOnUpload)!=null?l:e==null?void 0:e.onUpload)!=null?a:s.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL}}),o.update(H.key,s=>{var t,r,d,i,l,a,p,m;return{uploadButton:(t=e==null?void 0:e.blockUploadButton)!=null?t:()=>"Upload file",imageIcon:(r=e==null?void 0:e.blockImageIcon)!=null?r:()=>b,captionIcon:(d=e==null?void 0:e.blockCaptionIcon)!=null?d:()=>j,confirmButton:(i=e==null?void 0:e.blockConfirmButton)!=null?i:()=>"Confirm",captionPlaceholderText:(l=e==null?void 0:e.blockCaptionPlaceholderText)!=null?l:"Write Image Caption",uploadPlaceholderText:(a=e==null?void 0:e.blockUploadPlaceholderText)!=null?a:"or paste link",onUpload:(m=(p=e==null?void 0:e.blockOnUpload)!=null?p:e==null?void 0:e.onUpload)!=null?m:s.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL}})}).use(M).use(Z)};export{ce as defineFeature};
