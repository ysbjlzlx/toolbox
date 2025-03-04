import{h as v,b as D,d as T,j,B as b,C as S}from"./functions-Bsik6ikd-BaRT4VwH.js";import{h as F,l as N,v as V}from"./index-DwPuSZv8.js";import{u as h}from"./hooks-Bj5sJKsH.js";import{aC as A}from"./md-editor-C6otpRZL.js";import{b as I}from"./index-0oxnn2GF.js";import{i as H,a as M}from"./index.es-BvjMijTv.js";import"./pro-components-L2sDkqQs.js";import"./antd-Bzy0GL_f.js";import"./json-editor-CBqK5HSN.js";import"./index-i1pBeVdL.js";import"./index-08JC0wQa.js";import"./ace-BbTluGSE.js";var K=Object.defineProperty,$=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,P=(n,e,o)=>e in n?K(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,z=(n,e)=>{for(var o in e||(e={}))W.call(e,o)&&P(n,o,e[o]);if($)for(var o of $(e))q.call(e,o)&&P(n,o,e[o]);return n};function C(n,e){return Object.assign(n,{meta:z({package:"@milkdown/components"},e)}),n}const G={imageIcon:()=>"🌌",uploadButton:()=>v`Upload`,confirmButton:()=>v`⏎`,uploadPlaceholderText:"/Paste",onUpload:n=>Promise.resolve(URL.createObjectURL(n))},y=F(G,"inlineImageConfigCtx");C(y,{displayName:"Config<image-inline>",group:"ImageInline"});function J(n,e){const o=customElements.get(n);if(o==null){customElements.define(n,e);return}o!==e&&console.warn(`Custom element ${n} has been defined before.`)}var Q=(n,e,o)=>new Promise((s,t)=>{var a=l=>{try{i(o.next(l))}catch(r){t(r)}},d=l=>{try{i(o.throw(l))}catch(r){t(r)}},i=l=>l.done?s(l.value):Promise.resolve(l.value).then(a,d);i((o=o.apply(n,e)).next())});const X=A("abcdefg",8),g=({src:n="",selected:e=!1,alt:o,title:s,setAttr:t,config:a})=>{const d=T(),[i]=h(X()),[l,r]=h(!1),[p,m]=h(n.length!==0),[_,w]=h(n),B=u=>{const f=u.target.value;m(f.length!==0),w(f)},L=u=>Q(void 0,null,function*(){var c;const f=(c=u.target.files)==null?void 0:c[0];if(!f)return;const U=yield a==null?void 0:a.onUpload(f);U&&(t==null||t("src",U),m(!0))}),k=()=>{var u,c;t==null||t("src",(c=(u=d.current)==null?void 0:u.value)!=null?c:"")},O=u=>{u.key==="Enter"&&k()},E=u=>{u.preventDefault(),u.stopPropagation()},R=u=>{u.stopPropagation(),u.preventDefault()};return v`<host class=${I(e&&"selected",!n&&"empty")}>
    ${n?v`<img class="image-inline" src=${n} alt=${o} title=${s} />`:v`<div class="empty-image-inline">
          <div class="image-icon">${a==null?void 0:a.imageIcon()}</div>
          <div class=${I("link-importer",l&&"focus")}>
            <input
              draggable="true"
              ref=${d}
              ondragstart=${E}
              class="link-input-area"
              value=${_}
              oninput=${B}
              onkeydown=${O}
              onfocus=${()=>r(!0)}
              onblur=${()=>r(!1)}
            />
            <div class=${I("placeholder",p&&"hidden")}>
              <input
                class="hidden"
                id=${i}
                type="file"
                accept="image/*"
                onchange=${L}
              />
              <label
                onpointerdown=${R}
                class="uploader"
                for=${i}
              >
                ${a==null?void 0:a.uploadButton()}
              </label>
              <span class="text" onclick=${()=>{var u;return(u=d.current)==null?void 0:u.focus()}}>
                ${a==null?void 0:a.uploadPlaceholderText}
              </span>
            </div>
          </div>
          <div
            class=${I("confirm",_.length===0&&"hidden")}
            onclick=${()=>k()}
          >
            ${a==null?void 0:a.confirmButton()}
          </div>
        </div>`}
  </host>`};g.props={src:String,alt:String,title:String,selected:Boolean,setAttr:Function,config:Object};const Y=D(g);J("milkdown-image-inline",Y);const x=N(V.node,n=>(e,o,s)=>{const t=document.createElement("milkdown-image-inline"),a=n.get(y.key),d=a.proxyDomURL,i=l=>{if(!d)t.src=l.attrs.src;else{const r=d(l.attrs.src);typeof r=="string"?t.src=r:r.then(p=>{t.src=p})}t.alt=l.attrs.alt,t.title=l.attrs.title};return i(e),t.selected=!1,t.setAttr=(l,r)=>{const p=s();p!=null&&o.dispatch(o.state.tr.setNodeAttribute(p,l,r))},t.config=a,{dom:t,update:l=>l.type!==e.type?!1:(i(l),!0),stopEvent:l=>!!(t.selected&&l.target instanceof HTMLInputElement),selectNode:()=>{t.selected=!0},deselectNode:()=>{t.selected=!1},destroy:()=>{t.remove()}}});C(x,{displayName:"NodeView<image-inline>",group:"ImageInline"});const Z=[y,x],ce=(n,e)=>{n.config(o=>{o.update(y.key,s=>{var t,a,d,i,l,r;return{uploadButton:(t=e==null?void 0:e.inlineUploadButton)!=null?t:()=>"Upload",imageIcon:(a=e==null?void 0:e.inlineImageIcon)!=null?a:()=>b,confirmButton:(d=e==null?void 0:e.inlineConfirmButton)!=null?d:()=>j,uploadPlaceholderText:(i=e==null?void 0:e.inlineUploadPlaceholderText)!=null?i:"or paste link",onUpload:(r=(l=e==null?void 0:e.inlineOnUpload)!=null?l:e==null?void 0:e.onUpload)!=null?r:s.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL}}),o.update(H.key,s=>{var t,a,d,i,l,r,p,m;return{uploadButton:(t=e==null?void 0:e.blockUploadButton)!=null?t:()=>"Upload file",imageIcon:(a=e==null?void 0:e.blockImageIcon)!=null?a:()=>b,captionIcon:(d=e==null?void 0:e.blockCaptionIcon)!=null?d:()=>S,confirmButton:(i=e==null?void 0:e.blockConfirmButton)!=null?i:()=>"Confirm",captionPlaceholderText:(l=e==null?void 0:e.blockCaptionPlaceholderText)!=null?l:"Write Image Caption",uploadPlaceholderText:(r=e==null?void 0:e.blockUploadPlaceholderText)!=null?r:"or paste link",onUpload:(m=(p=e==null?void 0:e.blockOnUpload)!=null?p:e==null?void 0:e.onUpload)!=null?m:s.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL}})}).use(M).use(Z)};export{ce as defineFeature};
