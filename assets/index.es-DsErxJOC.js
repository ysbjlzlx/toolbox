import{h as se,l as re,W as ie}from"./index-DwPuSZv8.js";import{h as T,b as oe,u as ae,d as S,f as M,g as le,i as ce}from"./functions-Bsik6ikd-BaRT4VwH.js";import{u as R,a as B}from"./hooks-Bj5sJKsH.js";import{J as D,E as H,F as de,K as I}from"./json-editor-CBqK5HSN.js";import{c as ue}from"./floating-ui.dom-DtR07Cup.js";import{b as $}from"./index-0oxnn2GF.js";import{T as j,u as he,r as K,e as fe}from"./index-i1pBeVdL.js";var pe=Object.defineProperty,z=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,U=(n,e,t)=>e in n?pe(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,we=(n,e)=>{for(var t in e||(e={}))me.call(e,t)&&U(n,t,e[t]);if(z)for(var t of z(e))ve.call(e,t)&&U(n,t,e[t]);return n};function J(n,e){return Object.assign(n,{meta:we({package:"@milkdown/components"},e)}),n}const ge={extensions:[],languages:[],expandIcon:()=>"⬇",searchIcon:()=>"🔍",clearSearchIcon:()=>"⌫",searchPlaceholder:"Search language",noResultText:"No result",renderLanguage:n=>T`${n}`,renderPreview:()=>null,previewToggleButton:n=>n?"Edit":"Hide",previewLabel:()=>"Preview"},A=se(ge,"codeBlockConfigCtx");J(A,{displayName:"Config<code-block>",group:"CodeBlock"});function ye(n,e){const t=customElements.get(n);if(t==null){customElements.define(n,e);return}t!==e&&console.warn(`Custom element ${n} has been defined before.`)}var W=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,$e=(n,e)=>{var t={};for(var s in n)Ce.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&W)for(var s of W(n))e.indexOf(s)<0&&be.call(n,s)&&(t[s]=n[s]);return t};class ke{constructor(e,t,s,o,r){this.node=e,this.view=t,this.getPos=s,this.loader=o,this.config=r,this.updating=!1,this.languageName="",this.forwardUpdate=l=>{var c;if(this.updating||!this.cm.hasFocus)return;let d=((c=this.getPos())!=null?c:0)+1;const{main:h}=l.state.selection,u=d+h.from,p=d+h.to,m=this.view.state.selection;if(l.docChanged||m.from!==u||m.to!==p){const w=this.view.state.tr;l.changes.iterChanges((y,k,E,g,C)=>{C.length?w.replaceWith(d+y,d+k,this.view.state.schema.text(C.toString())):w.delete(d+y,d+k),d+=g-E-(k-y)}),w.setSelection(j.create(w.doc,u,p)),this.view.dispatch(w)}},this.codeMirrorKeymap=()=>{const l=this.view;return[{key:"ArrowUp",run:()=>this.maybeEscape("line",-1)},{key:"ArrowLeft",run:()=>this.maybeEscape("char",-1)},{key:"ArrowDown",run:()=>this.maybeEscape("line",1)},{key:"ArrowRight",run:()=>this.maybeEscape("char",1)},{key:"Mod-Enter",run:()=>fe(l.state,l.dispatch)?(l.focus(),!0):!1},{key:"Mod-z",run:()=>he(l.state,l.dispatch)},{key:"Shift-Mod-z",run:()=>K(l.state,l.dispatch)},{key:"Mod-y",run:()=>K(l.state,l.dispatch)},{key:"Backspace",run:()=>{var c;const d=this.cm.state.selection.ranges;if(d.length>1)return!1;const h=d[0];if(h&&(!h.empty||h.anchor>0)||this.cm.state.doc.lines>=2)return!1;const u=this.view.state,p=(c=this.getPos())!=null?c:0,m=u.tr.replaceWith(p,p+this.node.nodeSize,u.schema.nodes.paragraph.createChecked({},this.node.content));return m.setSelection(j.near(m.doc.resolve(p))),this.view.dispatch(m),this.view.focus(),!0}}]},this.maybeEscape=(l,c)=>{var d;const{state:h}=this.cm;let u=h.selection.main;if(!u.empty||(l==="line"&&(u=h.doc.lineAt(u.head)),c<0?u.from>0:u.to<h.doc.length))return!1;const p=((d=this.getPos())!=null?d:0)+(c<0?0:this.node.nodeSize),m=j.near(this.view.state.doc.resolve(p),c),w=this.view.state.tr.setSelection(m).scrollIntoView();return this.view.dispatch(w),this.view.focus(),!0},this.setLanguage=l=>{var c;this.view.dispatch(this.view.state.tr.setNodeAttribute((c=this.getPos())!=null?c:0,"language",l))},this.getAllLanguages=()=>this.loader.getAll(),this.languageConf=new D,this.readOnlyConf=new D,this.cm=new H({doc:this.node.textContent,root:this.view.root,extensions:[this.readOnlyConf.of(I.readOnly.of(!this.view.editable)),de.of(this.codeMirrorKeymap()),this.languageConf.of([]),...r.extensions,H.updateListener.of(this.forwardUpdate)]}),this.dom=this.createDom(),this.updateLanguage()}createDom(){const e=document.createElement("milkdown-code-block");e.codemirror=this.cm,e.getAllLanguages=this.getAllLanguages,e.setLanguage=this.setLanguage,e.isEditorReadonly=()=>!this.view.editable,e.text=this.node.textContent;const t=this.config,{languages:s,extensions:o}=t,r=$e(t,["languages","extensions"]);return e.config=r,e}updateLanguage(){const e=this.node.attrs.language;if(e===this.languageName)return;this.dom.language=e,this.loader.load(e??"").then(s=>{s&&(this.cm.dispatch({effects:this.languageConf.reconfigure(s)}),this.languageName=e)})}setSelection(e,t){this.cm.dom.isConnected&&(this.cm.focus(),this.updating=!0,this.cm.dispatch({selection:{anchor:e,head:t}}),this.updating=!1)}update(e){if(e.type!==this.node.type)return!1;if(this.updating)return!0;this.node=e,this.dom.text=e.textContent,this.updateLanguage(),this.view.editable===this.cm.state.readOnly&&this.cm.dispatch({effects:this.readOnlyConf.reconfigure(I.readOnly.of(!this.view.editable))});const t=_e(this.cm.state.doc.toString(),e.textContent);return t&&(this.updating=!0,this.cm.dispatch({changes:{from:t.from,to:t.to,insert:t.text}}),this.updating=!1),!0}selectNode(){this.dom.selected=!0,this.cm.focus()}deselectNode(){this.dom.selected=!1}stopEvent(){return!0}destroy(){this.cm.destroy()}}function _e(n,e){if(n===e)return null;let t=0,s=n.length,o=e.length;for(;t<s&&n.charCodeAt(t)===e.charCodeAt(t);)++t;for(;s>t&&o>t&&n.charCodeAt(s-1)===e.charCodeAt(o-1);)s--,o--;return{from:t,to:s,text:e.slice(t,o)}}class Le{constructor(e){this.languages=e,this.map={},e.forEach(t=>{t.alias.forEach(s=>{this.map[s]=t})})}getAll(){return this.languages.map(e=>({name:e.name,alias:e.alias}))}load(e){const s=this.map[e.toLowerCase()];return s?s.support?Promise.resolve(s.support):s.load():Promise.resolve(void 0)}}const q=({selected:n=!1,codemirror:e,getAllLanguages:t,setLanguage:s,language:o,config:r,isEditorReadonly:l,text:c})=>{var d,h,u,p,m;const w=ae(),y=S(),k=S(),E=S(),g=S(),[C,P]=R(""),[_,N]=R(!1),[L,Q]=R(!1),F=B(()=>w.current.getRootNode(),[w]);M(()=>{var i;const a=(i=t==null?void 0:t())==null?void 0:i.find(f=>f.alias.some(v=>v.toLowerCase()===(o==null?void 0:o.toLowerCase())));a&&a.name!==o&&(s==null||s(a.name))},[o]),M(()=>{N(!1)},[o]),M(()=>{const i=a=>{const f=a.target;if(y.current&&y.current.contains(f))return;const v=k.current;v&&v.dataset.expanded==="true"&&(v.contains(f)||N(!1))};return F.addEventListener("click",i),()=>{F.removeEventListener("click",i)}},[]),le(()=>{P("");const i=y.current,a=k.current;!i||!a||ue(i,a,{placement:"bottom-start"}).then(({x:f,y:v})=>{Object.assign(a.style,{left:`${f}px`,top:`${v}px`})})},[_]);const O=B(()=>{var i;if(!_)return[];const a=(i=t==null?void 0:t())!=null?i:[],f=a.find(x=>x.name.toLowerCase()===(o==null?void 0:o.toLowerCase())),v=a.filter(x=>(x.name.toLowerCase().includes(C.toLowerCase())||x.alias.some(ne=>ne.toLowerCase().includes(C.toLowerCase())))&&x!==f);return v.length===0?[]:f?[f,...v]:v},[C,_,o]),X=i=>{const a=i.target;P(a.value)},Y=i=>{i.preventDefault(),i.stopPropagation(),!(l!=null&&l())&&N(a=>(a||setTimeout(()=>{var f;return(f=E.current)==null?void 0:f.focus()},0),!a))},Z=i=>{i.preventDefault(),P("")},V=i=>{i.key==="Escape"&&P("")},ee=i=>{if(i.key==="Enter"){const a=document.activeElement;a instanceof HTMLElement&&a.dataset.language&&(s==null||s(a.dataset.language))}},te=B(()=>O!=null&&O.length?O.map(i=>{var a;return T`<li
          role="listitem"
          tabindex="0"
          class="language-list-item"
          aria-selected=${i.name.toLowerCase()===(o==null?void 0:o.toLowerCase())}
          data-language=${i.name}
          onclick=${()=>s==null?void 0:s(i.name)}
        >
          ${(a=r==null?void 0:r.renderLanguage)==null?void 0:a.call(r,i.name,i.name.toLowerCase()===(o==null?void 0:o.toLowerCase()))}
        </li>`}):T`<li class="language-list-item no-result">
        ${r==null?void 0:r.noResultText}
      </li>`,[O]),b=B(()=>{var i;return(i=r==null?void 0:r.renderPreview)==null?void 0:i.call(r,o??"",c??"")},[o,c]);return M(()=>{if(g.current){for(;g.current.firstChild;)g.current.removeChild(g.current.firstChild);typeof b=="string"?g.current.innerHTML=b:b instanceof HTMLElement&&g.current.appendChild(b)}},[b]),T`<host class=${$(n&&"selected")}>
    <div class="tools">
      <button
        type="button"
        ref=${y}
        class="language-button"
        onpointerdown=${Y}
        data-expanded=${_}
      >
        ${o||"Text"}
        <div class="expand-icon">${(d=r==null?void 0:r.expandIcon)==null?void 0:d.call(r)}</div>
      </button>
      <div
        ref=${k}
        data-expanded=${_}
        class=${$("language-picker",_&&"show")}
      >
        <div class="list-wrapper">
          <div class="search-box">
            <div class="search-icon">${(h=r==null?void 0:r.searchIcon)==null?void 0:h.call(r)}</div>
            <input
              ref=${E}
              class="search-input"
              placeholder=${r==null?void 0:r.searchPlaceholder}
              value=${C}
              oninput=${X}
              onkeydown=${V}
            />
            <div
              class=${$("clear-icon",C.length===0&&"hidden")}
              onmousedown=${Z}
            >
              ${(u=r==null?void 0:r.clearSearchIcon)==null?void 0:u.call(r)}
            </div>
          </div>
          <ul class="language-list" role="listbox" onkeydown=${ee}>
            ${te}
          </ul>
        </div>
      </div>
      <button
        class=${$("preview-toggle-button",!b&&"hidden")}
        onclick=${()=>Q(!L)}
      >
        ${(p=r==null?void 0:r.previewToggleButton)==null?void 0:p.call(r,L)}
      </button>
    </div>
    <div
      class=${$("codemirror-host",b&&L&&"hidden")}
    >
      ${ce(e==null?void 0:e.dom,{})}
    </div>
    <div class=${$("preview-panel",!b&&"hidden")}>
      <div class=${$("preview-divider",L&&"hidden")}></div>
      <div class=${$("preview-label",L&&"hidden")}>
        ${(m=r==null?void 0:r.previewLabel)==null?void 0:m.call(r)}
      </div>
      <div ref=${g} class="preview"></div>
    </div>
  </host>`};q.props={selected:Boolean,codemirror:Object,language:String,getAllLanguages:Function,setLanguage:Function,isEditorReadonly:Function,config:Object,text:String};const xe=oe(q);ye("milkdown-code-block",xe);const G=re(ie.node,n=>{const e=n.get(A.key),t=new Le(e.languages);return(s,o,r)=>new ke(s,o,r,t,e)});J(G,{displayName:"NodeView<code-block>",group:"CodeBlock"});const Ne=[G,A];export{Ne as a,A as c};
