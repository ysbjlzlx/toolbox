import{d as nt}from"./index-D6fLMv29-CeGVhQwU.js";import{b as st,l as at,f as lt,h as Q,O as it,P as rt,Q as ct,L as dt,R as ut,N as mt}from"./functions-Bsik6ikd-D8GGRsLx.js";import{b}from"./index-DkoMvkBT.js";import{m as W}from"./inline-latex-C9IGAXXQ-Bi8O4X4y.js";import{F as pt,C as ht,$ as ft,R as yt,g as bt,x as vt,B as U,L as A,i as P,n as _t,t as kt,z as wt,j as $t}from"./index-BKZqlHfW.js";import{W as It,V as Tt}from"./index.es-Ce_HC4-m.js";import{b as j}from"./index.es-D1kMcbY8.js";import{T as H,N as q}from"./index-CCHPmTqj.js";import"./pro-components-CPZIsSOc.js";import"./antd-Cl3cKmq-.js";import"./json-editor-D3HpTOiY.js";import"./syntax-2Kab1CR3.js";import"./index.browser-B0na17u1.js";import"./index-BUFMBfDr.js";import"./index-6kZY_JYa.js";import"./floating-ui.dom-DtR07Cup.js";import"./hooks-Dt0wL0oo.js";const Y=({ctx:t,hide:n,show:s,config:o,selection:c})=>{var d,m,p,k,w,$,I,T,E,C,S,B;const M=at();lt(()=>{M()},[s]);const h=e=>l=>{l.preventDefault(),t&&e(t),M()},f=e=>{if(!t||!c)return!1;const l=t.get(A),{state:{doc:i}}=l;return i.rangeHasMark(c.from,c.to,e)},V=e=>{if(!t||!c)return!1;const l=t.get(A),{state:{doc:i}}=l;if(c instanceof q)return c.node.type===e;const{from:y,to:L}=c;let v=!1;return i.nodesBetween(y,L,g=>g.type===e?(v=!0,!1):!0),v},z=t==null?void 0:t.get(pt),et=z==null?void 0:z.includes(ht.Latex),ot=e=>{const l=V(W.type(e)),i=e.get(A),{selection:y,doc:L,tr:v}=i.state;if(!l){const O=L.textBetween(y.from,y.to);let R=v.replaceSelectionWith(W.type(e).create({value:O}));i.dispatch(R.setSelection(q.create(R.doc,y.from)));return}const{from:g,to:D}=y;let _=-1,N=null;if(L.nodesBetween(g,D,(O,R)=>N?!1:O.type===W.type(e)?(_=R,N=O,!1):!0),!N||_<0)return;let F=v.delete(_,_+1);const G=N.attrs.value;F=F.insertText(G,_),i.dispatch(F.setSelection(H.create(F.doc,g,D+G.length-1)))};return Q`<host>
    <button
      type="button"
      class=${b("toolbar-item",t&&f(ft.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(P).call(_t.key)})}
    >
      ${(m=(d=o==null?void 0:o.boldIcon)==null?void 0:d.call(o))!=null?m:it}
    </button>
    <button
      type="button"
      class=${b("toolbar-item",t&&f(yt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(P).call(kt.key)})}
    >
      ${(k=(p=o==null?void 0:o.italicIcon)==null?void 0:p.call(o))!=null?k:rt}
    </button>
    <button
      type="button"
      class=${b("toolbar-item",t&&f(bt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(P).call(wt.key)})}
    >
      ${($=(w=o==null?void 0:o.strikethroughIcon)==null?void 0:w.call(o))!=null?$:ct}
    </button>
    <div class="divider"></div>
    <button
      type="button"
      class=${b("toolbar-item",t&&f(vt.type(t))&&"active")}
      onmousedown=${h(e=>{e.get(P).call($t.key)})}
    >
      ${(T=(I=o==null?void 0:o.codeIcon)==null?void 0:I.call(o))!=null?T:dt}
    </button>
    ${et&&Q`<button
      type="button"
      class=${b("toolbar-item",t&&V(W.type(t))&&"active")}
      onmousedown=${h(ot)}
    >
      ${(C=(E=o==null?void 0:o.latexIcon)==null?void 0:E.call(o))!=null?C:mt}
    </button>`}
    <button
      type="button"
      class=${b("toolbar-item",t&&f(U.type(t))&&"active")}
      onmousedown=${h(e=>{const l=e.get(A),{selection:i}=l.state;if(f(U.type(e))){e.get(j.key).removeLink(i.from,i.to);return}e.get(j.key).addLink(i.from,i.to),n==null||n()})}
    >
      ${(B=(S=o==null?void 0:o.linkIcon)==null?void 0:S.call(o))!=null?B:ut}
    </button>
  </host>`};Y.props={ctx:Object,hide:Function,show:Boolean,config:Object,selection:Object};const Z=st(Y);var x=t=>{throw TypeError(t)},tt=(t,n,s)=>n.has(t)||x("Cannot "+s),a=(t,n,s)=>(tt(t,n,"read from private field"),s?s.call(t):n.get(t)),J=(t,n,s)=>n.has(t)?x("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(t):n.set(t,s),K=(t,n,s,o)=>(tt(t,n,"write to private field"),n.set(t,s),s),u,r;const X=It("CREPE_TOOLBAR");class Et{constructor(n,s,o){J(this,u),J(this,r),this.update=(d,m)=>{a(this,u).update(d,m),a(this,r).selection=d.state.selection},this.destroy=()=>{a(this,u).destroy(),a(this,r).remove()},this.hide=()=>{a(this,u).hide()};const c=new Z;K(this,r,c),a(this,r).ctx=n,a(this,r).hide=this.hide,a(this,r).config=o,a(this,r).selection=s.state.selection,K(this,u,new Tt({content:a(this,r),debounce:20,offset:10,shouldShow(d){const{doc:m,selection:p}=d.state,{empty:k,from:w,to:$}=p,I=!m.textBetween(w,$).length&&p instanceof H,T=!(p instanceof H),E=d.dom.getRootNode().activeElement,C=c.contains(E),S=!d.hasFocus()&&!C,B=!d.editable;return!(S||T||k||I||B)}})),a(this,u).onShow=()=>{a(this,r).show=!0},a(this,u).onHide=()=>{a(this,r).show=!1},this.update(s)}}u=new WeakMap;r=new WeakMap;nt("milkdown-toolbar",Z);const Gt=(t,n)=>{t.config(s=>{s.set(X.key,{view:o=>new Et(s,o,n)})}).use(X)};export{Gt as defineFeature};
