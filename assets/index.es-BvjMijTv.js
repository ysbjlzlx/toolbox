import{h as q,k as J,f as Q,l as X,S as Z}from"./index-DwPuSZv8.js";import{h as B,b as ee,d as E,f as C,u as te}from"./functions-Bsik6ikd-BaRT4VwH.js";import{u as w,a as ne}from"./hooks-Bj5sJKsH.js";import{aB as re,aC as oe}from"./md-editor-C6otpRZL.js";import{b}from"./index-0oxnn2GF.js";var ae=Object.defineProperty,S=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,U=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&U(e,n,t[n]);if(S)for(var n of S(t))le.call(t,n)&&U(e,n,t[n]);return e};function _(e,t){return Object.assign(e,{meta:se({package:"@milkdown/components"},t)}),e}var ce=Object.defineProperty,M=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,H=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&H(e,n,t[n]);if(M)for(var n of M(t))de.call(t,n)&&H(e,n,t[n]);return e};const L="image-block",O=Q("image-block",()=>({inline:!1,group:"block",selectable:!0,draggable:!0,isolating:!0,marks:"",atom:!0,priority:100,attrs:{src:{default:""},caption:{default:""},ratio:{default:1}},parseDOM:[{tag:`img[data-type="${L}"]`,getAttrs:e=>{var t;if(!(e instanceof HTMLElement))throw Z(e);return{src:e.getAttribute("src")||"",caption:e.getAttribute("caption")||"",ratio:Number((t=e.getAttribute("ratio"))!=null?t:1)}}}],toDOM:e=>["img",pe({"data-type":L},e.attrs)],parseMarkdown:{match:({type:e})=>e==="image-block",runner:(e,t,n)=>{const u=t.url,a=t.title;let i=Number(t.alt||1);(Number.isNaN(i)||i===0)&&(i=1),e.addNode(n,{src:u,caption:a,ratio:i})}},toMarkdown:{match:e=>e.type.name==="image-block",runner:(e,t)=>{e.openNode("paragraph"),e.addNode("image",void 0,void 0,{title:t.attrs.caption,url:t.attrs.src,alt:`${Number.parseFloat(t.attrs.ratio).toFixed(2)}`}),e.closeNode()}}}));_(O.node,{displayName:"NodeSchema<image-block>",group:"ImageBlock"});function me(e){return re(e,"paragraph",(t,n,u)=>{var a,i;if(((a=t.children)==null?void 0:a.length)!==1)return;const o=(i=t.children)==null?void 0:i[0];if(!o||o.type!=="image")return;const{url:s,alt:r,title:c}=o,d={type:"image-block",url:s,alt:r,title:c};u.children.splice(n,1,d)})}const x=J("remark-image-block",()=>()=>me);_(x.plugin,{displayName:"Remark<remarkImageBlock>",group:"ImageBlock"});_(x.options,{displayName:"RemarkConfig<remarkImageBlock>",group:"ImageBlock"});const fe={imageIcon:()=>"🌌",captionIcon:()=>"💬",uploadButton:()=>B`Upload file`,confirmButton:()=>B`Confirm ⏎`,uploadPlaceholderText:"or paste the image link ...",captionPlaceholderText:"Image caption",onUpload:e=>Promise.resolve(URL.createObjectURL(e))},R=q(fe,"imageBlockConfigCtx");_(R,{displayName:"Config<image-block>",group:"ImageBlock"});function ge(e,t){const n=customElements.get(e);if(n==null){customElements.define(e,t);return}n!==t&&console.warn(`Custom element ${e} has been defined before.`)}function he({image:e,resizeHandle:t,ratio:n,setRatio:u,src:a}){const i=te(),o=ne(()=>i.current.getRootNode(),[i]);C(()=>{const s=e.current;s&&(delete s.dataset.origin,delete s.dataset.height,s.style.height="")},[a]),C(()=>{const s=t.current,r=e.current;if(!s||!r)return;const c=p=>{p.preventDefault();const m=r.getBoundingClientRect().top,f=p.clientY-m,v=Number(f<100?100:f).toFixed(2);r.dataset.height=v,r.style.height=`${v}px`},d=()=>{o.removeEventListener("pointermove",c),o.removeEventListener("pointerup",d);const p=Number(r.dataset.origin),m=Number(r.dataset.height),f=Number.parseFloat(Number(m/p).toFixed(2));Number.isNaN(f)||u(f)},$=p=>{p.preventDefault(),o.addEventListener("pointermove",c),o.addEventListener("pointerup",d)},N=p=>{const m=i.current.getBoundingClientRect().width;if(!m)return;const f=p.target,v=f.height,y=f.width,I=y<m?v:m*(v/y),P=(I*n).toFixed(2);r.dataset.origin=I.toFixed(2),r.dataset.height=P,r.style.height=`${P}px`};return r.addEventListener("load",N),s.addEventListener("pointerdown",$),()=>{r.removeEventListener("load",N),s.removeEventListener("pointerdown",$)}},[])}var ve=(e,t,n)=>new Promise((u,a)=>{var i=r=>{try{s(n.next(r))}catch(c){a(c)}},o=r=>{try{s(n.throw(r))}catch(c){a(c)}},s=r=>r.done?u(r.value):Promise.resolve(r.value).then(i,o);s((n=n.apply(e,t)).next())});let k=0;const be=oe("abcdefg",8),j=({src:e="",caption:t="",ratio:n=1,selected:u=!1,readonly:a=!1,setAttr:i,config:o})=>{const s=E(),r=E(),c=E(),[d,$]=w(t.length>0),[N,p]=w(e.length!==0),[m]=w(be()),[f,v]=w(!1),[y,I]=w(e);he({image:s,resizeHandle:r,ratio:n,setRatio:l=>i==null?void 0:i("ratio",l),src:e}),C(()=>{u||$(t.length>0)},[u]);const P=l=>{const h=l.target.value;k&&window.clearTimeout(k),k=window.setTimeout(()=>{i==null||i("caption",h)},1e3)},V=l=>{const h=l.target.value;k&&(window.clearTimeout(k),k=0),i==null||i("caption",h)},z=l=>{const h=l.target.value;p(h.length!==0),I(h)},Y=l=>ve(void 0,null,function*(){var g;const h=(g=l.target.files)==null?void 0:g[0];if(!h)return;const F=yield o==null?void 0:o.onUpload(h);F&&(i==null||i("src",F),p(!0))}),G=l=>{l.preventDefault(),l.stopPropagation(),!a&&$(g=>!g)},D=()=>{var l,g;i==null||i("src",(g=(l=c.current)==null?void 0:l.value)!=null?g:"")},K=l=>{l.key==="Enter"&&D()},T=l=>{l.preventDefault(),l.stopPropagation()},W=l=>{l.stopPropagation(),l.preventDefault()};return B`<host class=${b(u&&"selected")}>
    <div class=${b("image-edit",e.length>0&&"hidden")}>
      <div class="image-icon">${o==null?void 0:o.imageIcon()}</div>
      <div class=${b("link-importer",f&&"focus")}>
        <input
          ref=${c}
          draggable="true"
          ondragstart=${T}
          disabled=${a}
          class="link-input-area"
          value=${y}
          oninput=${z}
          onkeydown=${K}
          onfocus=${()=>v(!0)}
          onblur=${()=>v(!1)}
        />
        <div class=${b("placeholder",N&&"hidden")}>
          <input
            disabled=${a}
            class="hidden"
            id=${m}
            type="file"
            accept="image/*"
            onchange=${Y}
          />
          <label onpointerdown=${W} class="uploader" for=${m}>
            ${o==null?void 0:o.uploadButton()}
          </label>
          <span class="text" onclick=${()=>{var l;return(l=c.current)==null?void 0:l.focus()}}>
            ${o==null?void 0:o.uploadPlaceholderText}
          </span>
        </div>
      </div>
      <div
        class=${b("confirm",y.length===0&&"hidden")}
        onclick=${()=>D()}
      >
        ${o==null?void 0:o.confirmButton()}
      </div>
    </div>
    <div class=${b("image-wrapper",e.length===0&&"hidden")}>
      <div class="operation">
        <div class="operation-item" onpointerdown=${G}>
          ${o==null?void 0:o.captionIcon()}
        </div>
      </div>
      <img
        ref=${s}
        data-type=${L}
        src=${e}
        alt=${t}
        ratio=${n}
      />
      <div ref=${r} class="image-resize-handle"></div>
    </div>
    <input
      draggable="true"
      ondragstart=${T}
      class=${b("caption-input",!d&&"hidden")}
      placeholder=${o==null?void 0:o.captionPlaceholderText}
      oninput=${P}
      onblur=${V}
      value=${t}
    />
  </host>`};j.props={src:String,caption:String,ratio:Number,selected:Boolean,readonly:Boolean,setAttr:Function,config:Object};const ke=ee(j);ge("milkdown-image-block",ke);const A=X(O.node,e=>(t,n,u)=>{const a=document.createElement("milkdown-image-block"),i=e.get(R.key),o=i.proxyDomURL,s=r=>{if(!o)a.src=r.attrs.src;else{const c=o(r.attrs.src);typeof c=="string"?a.src=c:c.then(d=>{a.src=d})}a.ratio=r.attrs.ratio,a.caption=r.attrs.caption,a.readonly=!n.editable};return s(t),a.selected=!1,a.setAttr=(r,c)=>{const d=u();d!=null&&n.dispatch(n.state.tr.setNodeAttribute(d,r,c))},a.config=i,{dom:a,update:r=>r.type!==t.type?!1:(s(r),!0),stopEvent:r=>r.target instanceof HTMLInputElement,selectNode:()=>{a.selected=!0},deselectNode:()=>{a.selected=!1},destroy:()=>{a.remove()}}});_(A,{displayName:"NodeView<image-block>",group:"ImageBlock"});const Ie=[x,O,A,R].flat();export{Ie as a,O as b,R as i};
