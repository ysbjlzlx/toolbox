import{d as nt}from"./index-D6fLMv29-CeGVhQwU.js";import{b as st,l as at,f as lt,h as G,m as it,n as rt,o as ct,p as dt,q as ut,t as mt}from"./functions-Bsik6ikd-BaRT4VwH.js";import{b as y}from"./index-0oxnn2GF.js";import{m as W}from"./inline-latex-C9IGAXXQ-DRybRJrd.js";import{F as pt,C as ht,$ as ft,R as bt,T as yt,x as vt,B as U,L as A,O as H,n as _t,t as kt,z as wt,b as $t}from"./index-DwPuSZv8.js";import"./md-editor-C6otpRZL.js";import{W as It,V as Tt}from"./index.es-DNOfJYMK.js";import{b as J}from"./index.es-DhjJIgDZ.js";import{T as M,N as K}from"./index-i1pBeVdL.js";import"./pro-components-L2sDkqQs.js";import"./antd-Bzy0GL_f.js";import"./json-editor-CBqK5HSN.js";import"./index-08JC0wQa.js";import"./ace-BbTluGSE.js";import"./index-DKaaQcYk.js";import"./floating-ui.dom-DtR07Cup.js";import"./hooks-Bj5sJKsH.js";const Z=({ctx:t,hide:n,show:s,config:o,selection:c})=>{var d,m,p,k,w,$,I,T,E,C,S,B;const P=at();lt(()=>{P()},[s]);const h=e=>l=>{l.preventDefault(),t&&e(t),P()},f=e=>{if(!t||!c)return!1;const l=t.get(A),{state:{doc:i}}=l;return i.rangeHasMark(c.from,c.to,e)},V=e=>{if(!t||!c)return!1;const l=t.get(A),{state:{doc:i}}=l;if(c instanceof K)return c.node.type===e;const{from:b,to:L}=c;let v=!1;return i.nodesBetween(b,L,g=>g.type===e?(v=!0,!1):!0),v},q=t==null?void 0:t.get(pt),et=q==null?void 0:q.includes(ht.Latex),ot=e=>{const l=V(W.type(e)),i=e.get(A),{selection:b,doc:L,tr:v}=i.state;if(!l){const O=L.textBetween(b.from,b.to);let R=v.replaceSelectionWith(W.type(e).create({value:O}));i.dispatch(R.setSelection(K.create(R.doc,b.from)));return}const{from:g,to:z}=b;let _=-1,F=null;if(L.nodesBetween(g,z,(O,R)=>F?!1:O.type===W.type(e)?(_=R,F=O,!1):!0),!F||_<0)return;let N=v.delete(_,_+1);const D=F.attrs.value;N=N.insertText(D,_),i.dispatch(N.setSelection(M.create(N.doc,g,z+D.length-1)))};return G`<host>
    <button
      type="button"
      class=${y("toolbar-item",t&&f(ft.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(H).call(_t.key)})}
    >
      ${(m=(d=o==null?void 0:o.boldIcon)==null?void 0:d.call(o))!=null?m:it}
    </button>
    <button
      type="button"
      class=${y("toolbar-item",t&&f(bt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(H).call(kt.key)})}
    >
      ${(k=(p=o==null?void 0:o.italicIcon)==null?void 0:p.call(o))!=null?k:rt}
    </button>
    <button
      type="button"
      class=${y("toolbar-item",t&&f(yt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(H).call(wt.key)})}
    >
      ${($=(w=o==null?void 0:o.strikethroughIcon)==null?void 0:w.call(o))!=null?$:ct}
    </button>
    <div class="divider"></div>
    <button
      type="button"
      class=${y("toolbar-item",t&&f(vt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(H).call($t.key)})}
    >
      ${(T=(I=o==null?void 0:o.codeIcon)==null?void 0:I.call(o))!=null?T:dt}
    </button>
    ${et&&G`<button
      type="button"
      class=${y("toolbar-item",t&&V(W.type(t))&&"active")}
      onmousedown=${h(ot)}
    >
      ${(C=(E=o==null?void 0:o.latexIcon)==null?void 0:E.call(o))!=null?C:mt}
    </button>`}
    <button
      type="button"
      class=${y("toolbar-item",t&&f(U.type(t))&&"active")}
      onmousedown=${h(e=>{const l=e.get(A),{selection:i}=l.state;if(f(U.type(e))){e.get(J.key).removeLink(i.from,i.to);return}e.get(J.key).addLink(i.from,i.to),n==null||n()})}
    >
      ${(B=(S=o==null?void 0:o.linkIcon)==null?void 0:S.call(o))!=null?B:ut}
    </button>
  </host>`};Z.props={ctx:Object,hide:Function,show:Boolean,config:Object,selection:Object};const j=st(Z);var x=t=>{throw TypeError(t)},tt=(t,n,s)=>n.has(t)||x("Cannot "+s),a=(t,n,s)=>(tt(t,n,"read from private field"),s?s.call(t):n.get(t)),Q=(t,n,s)=>n.has(t)?x("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,s),X=(t,n,s,o)=>(tt(t,n,"write to private field"),n.set(t,s),s),u,r;const Y=It("CREPE_TOOLBAR");class Et{constructor(n,s,o){Q(this,u),Q(this,r),this.update=(d,m)=>{a(this,u).update(d,m),a(this,r).selection=d.state.selection},this.destroy=()=>{a(this,u).destroy(),a(this,r).remove()},this.hide=()=>{a(this,u).hide()};const c=new j;X(this,r,c),a(this,r).ctx=n,a(this,r).hide=this.hide,a(this,r).config=o,a(this,r).selection=s.state.selection,X(this,u,new Tt({content:a(this,r),debounce:20,offset:10,shouldShow(d){const{doc:m,selection:p}=d.state,{empty:k,from:w,to:$}=p,I=!m.textBetween(w,$).length&&p instanceof M,T=!(p instanceof M),E=d.dom.getRootNode().activeElement,C=c.contains(E),S=!d.hasFocus()&&!C,B=!d.editable;return!(S||T||k||I||B)}})),a(this,u).onShow=()=>{a(this,r).show=!0},a(this,u).onHide=()=>{a(this,r).show=!1},this.update(s)}}u=new WeakMap;r=new WeakMap;nt("milkdown-toolbar",j);const Dt=(t,n)=>{t.config(s=>{s.set(Y.key,{view:o=>new Et(s,o,n)})}).use(Y)};export{Dt as defineFeature};
