import{j as F,P as Xt}from"./index-09453be0.js";import{c as rt,r as N,g as Gt}from"./ace-073628d1.js";import{_ as Kt,u as Wt}from"./utils-d6856b2a.js";import{_ as Jt,u as j,i as q}from"./index-dacf1342.js";import{T as qt}from"./TextResultBox-d78f8d13.js";import{R as zt,C as Qt}from"./row-529ae853.js";import{S as Yt}from"./index-1fd4bf3e.js";import{B as Zt}from"./button-763a9a47.js";import"./ContentCopyButton-bd6ee362.js";import"./index-fa3d343c.js";import"./index-6da794af.js";import"./index-e7ffbfe3.js";import"./EyeOutlined-79d64004.js";import"./SearchOutlined-2b8f3c07.js";var S={},h={},gt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.add=t.toBig=t.split=t.fromBig=void 0;const e=BigInt(2**32-1),n=BigInt(32);function r(i,u=!1){return u?{h:Number(i&e),l:Number(i>>n&e)}:{h:Number(i>>n&e)|0,l:Number(i&e)|0}}t.fromBig=r;function o(i,u=!1){let s=new Uint32Array(i.length),p=new Uint32Array(i.length);for(let m=0;m<i.length;m++){const{h:X,l:$t}=r(i[m],u);[s[m],p[m]]=[X,$t]}return[s,p]}t.split=o;const l=(i,u)=>BigInt(i>>>0)<<n|BigInt(u>>>0);t.toBig=l;const a=(i,u,s)=>i>>>s,c=(i,u,s)=>i<<32-s|u>>>s,v=(i,u,s)=>i>>>s|u<<32-s,w=(i,u,s)=>i<<32-s|u>>>s,b=(i,u,s)=>i<<64-s|u>>>s-32,B=(i,u,s)=>i>>>s-32|u<<64-s,d=(i,u)=>u,x=(i,u)=>i,$=(i,u,s)=>i<<s|u>>>32-s,Mt=(i,u,s)=>u<<s|i>>>32-s,Dt=(i,u,s)=>u<<s-32|i>>>64-s,Et=(i,u,s)=>i<<s-32|u>>>64-s;function nt(i,u,s,p){const m=(u>>>0)+(p>>>0);return{h:i+s+(m/2**32|0)|0,l:m|0}}t.add=nt;const jt=(i,u,s)=>(i>>>0)+(u>>>0)+(s>>>0),Tt=(i,u,s,p)=>u+s+p+(i/2**32|0)|0,Nt=(i,u,s,p)=>(i>>>0)+(u>>>0)+(s>>>0)+(p>>>0),Ut=(i,u,s,p,m)=>u+s+p+m+(i/2**32|0)|0,Rt=(i,u,s,p,m)=>(i>>>0)+(u>>>0)+(s>>>0)+(p>>>0)+(m>>>0),Pt=(i,u,s,p,m,X)=>u+s+p+m+X+(i/2**32|0)|0,Vt={fromBig:r,split:o,toBig:t.toBig,shrSH:a,shrSL:c,rotrSH:v,rotrSL:w,rotrBH:b,rotrBL:B,rotr32H:d,rotr32L:x,rotlSH:$,rotlSL:Mt,rotlBH:Dt,rotlBL:Et,add:nt,add3L:jt,add3H:Tt,add4L:Nt,add4H:Ut,add5H:Pt,add5L:Rt};t.default=Vt})(gt);Object.defineProperty(h,"__esModule",{value:!0});h.shake256=h.shake128=h.keccak_512=h.keccak_384=h.keccak_256=h.keccak_224=h.sha3_512=h.sha3_384=h.sha3_256=h.sha3_224=h.Keccak=h.keccakP=void 0;const I=Kt,M=gt,O=Wt,[pt,mt,yt]=[[],[],[]],te=BigInt(0),C=BigInt(1),ee=BigInt(2),ne=BigInt(7),re=BigInt(256),oe=BigInt(113);for(let t=0,e=C,n=1,r=0;t<24;t++){[n,r]=[r,(2*n+3*r)%5],pt.push(2*(5*r+n)),mt.push((t+1)*(t+2)/2%64);let o=te;for(let l=0;l<7;l++)e=(e<<C^(e>>ne)*oe)%re,e&ee&&(o^=C<<(C<<BigInt(l))-C);yt.push(o)}const[ie,se]=M.default.split(yt,!0),ot=(t,e,n)=>n>32?M.default.rotlBH(t,e,n):M.default.rotlSH(t,e,n),it=(t,e,n)=>n>32?M.default.rotlBL(t,e,n):M.default.rotlSL(t,e,n);function xt(t,e=24){const n=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let a=0;a<10;a++)n[a]=t[a]^t[a+10]^t[a+20]^t[a+30]^t[a+40];for(let a=0;a<10;a+=2){const c=(a+8)%10,v=(a+2)%10,w=n[v],b=n[v+1],B=ot(w,b,1)^n[c],d=it(w,b,1)^n[c+1];for(let x=0;x<50;x+=10)t[a+x]^=B,t[a+x+1]^=d}let o=t[2],l=t[3];for(let a=0;a<24;a++){const c=mt[a],v=ot(o,l,c),w=it(o,l,c),b=pt[a];o=t[b],l=t[b+1],t[b]=v,t[b+1]=w}for(let a=0;a<50;a+=10){for(let c=0;c<10;c++)n[c]=t[a+c];for(let c=0;c<10;c++)t[a+c]^=~n[(c+2)%10]&n[(c+4)%10]}t[0]^=ie[r],t[1]^=se[r]}n.fill(0)}h.keccakP=xt;class E extends O.Hash{constructor(e,n,r,o=!1,l=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=l,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,I.default.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,O.u32)(this.state)}keccak(){xt(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){I.default.exists(this);const{blockLen:n,state:r}=this;e=(0,O.toBytes)(e);const o=e.length;for(let l=0;l<o;){const a=Math.min(n-this.pos,o-l);for(let c=0;c<a;c++)r[this.pos++]^=e[l++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:r,blockLen:o}=this;e[r]^=n,n&128&&r===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){I.default.exists(this,!1),I.default.bytes(e),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,l=e.length;o<l;){this.posOut>=r&&this.keccak();const a=Math.min(r-this.posOut,l-o);e.set(n.subarray(this.posOut,this.posOut+a),o),this.posOut+=a,o+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return I.default.number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(I.default.output(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:r,outputLen:o,rounds:l,enableXOF:a}=this;return e||(e=new E(n,r,o,a,l)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=l,e.suffix=r,e.outputLen=o,e.enableXOF=a,e.destroyed=this.destroyed,e}}h.Keccak=E;const _=(t,e,n)=>(0,O.wrapConstructor)(()=>new E(e,t,n));h.sha3_224=_(6,144,224/8);h.sha3_256=_(6,136,256/8);h.sha3_384=_(6,104,384/8);h.sha3_512=_(6,72,512/8);h.keccak_224=_(1,144,224/8);h.keccak_256=_(1,136,256/8);h.keccak_384=_(1,104,384/8);h.keccak_512=_(1,72,512/8);const bt=(t,e,n)=>(0,O.wrapXOFConstructorWithOpts)((r={})=>new E(e,t,r.dkLen===void 0?n:r.dkLen,!0));h.shake128=bt(31,168,128/8);h.shake256=bt(31,136,256/8);const{sha3_512:ae}=h,vt=24,L=32,z=(t=4,e=Math.random)=>{let n="";for(;n.length<t;)n=n+Math.floor(e()*36).toString(36);return n};function wt(t){let e=8n,n=0n;for(const r of t.values()){const o=BigInt(r);n=(n<<e)+o}return n}const Ft=(t="")=>wt(ae(t)).toString(36).slice(1),st=Array.from({length:26},(t,e)=>String.fromCharCode(e+97)),ue=t=>st[Math.floor(t()*st.length)],St=({globalObj:t=typeof rt<"u"?rt:typeof window<"u"?window:{},random:e=Math.random}={})=>{const n=Object.keys(t).toString(),r=n.length?n+z(L,e):z(L,e);return Ft(r).substring(0,L)},_t=t=>()=>t++,ce=476782367,It=({random:t=Math.random,counter:e=_t(Math.floor(t()*ce)),length:n=vt,fingerprint:r=St({random:t})}={})=>function(){const l=ue(t),a=Date.now().toString(36),c=e().toString(36),v=z(n,t),w=`${a+v+c+r}`;return`${l+Ft(w).substring(1,n)}`},fe=It(),le=(t,{minLength:e=2,maxLength:n=L}={})=>{const r=t.length,o=/^[0-9a-z]+$/;try{if(typeof t=="string"&&r>=e&&r<=n&&o.test(t))return!0}finally{}return!1};S.getConstants=()=>({defaultLength:vt,bigLength:L});S.init=It;S.createId=fe;S.bufToBigInt=wt;S.createCounter=_t;S.createFingerprint=St;S.isCuid=le;const{createId:he,init:ze,getConstants:Qe,isCuid:Ye}=S;var de=he,kt=Object.defineProperty,ge=(t,e,n)=>e in t?kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e)=>kt(t,"name",{value:e,configurable:!0}),A=(t,e,n)=>(ge(t,typeof e!="symbol"?e+"":e,n),n),Q=Symbol("@sapphire/snowflake.increment"),k=Symbol("@sapphire/snowflake.epoch"),U=Symbol("@sapphire/snowflake.processId"),R=Symbol("@sapphire/snowflake.workerId"),G=0b11111n,K=0b11111n,W=0b111111111111n,Bt,Ct,At,Ot,tt=class{constructor(t){A(this,"decode",this.deconstruct),A(this,Bt),A(this,Ct,0n),A(this,At,1n),A(this,Ot,0n),this[k]=BigInt(t instanceof Date?t.getTime():t)}get epoch(){return this[k]}get processId(){return this[U]}set processId(t){this[U]=BigInt(t)&K}get workerId(){return this[R]}set workerId(t){this[R]=BigInt(t)&G}generate({increment:t,timestamp:e=Date.now(),workerId:n=this[R],processId:r=this[U]}={}){if(e instanceof Date)e=BigInt(e.getTime());else if(typeof e=="number")e=BigInt(e);else if(typeof e!="bigint")throw new TypeError(`"timestamp" argument must be a number, bigint, or Date (received ${typeof e})`);return typeof t!="bigint"&&(t=this[Q],this[Q]=t+1n&W),e-this[k]<<22n|(n&G)<<17n|(r&K)<<12n|t&W}deconstruct(t){const e=BigInt(t),n=this[k];return{id:e,timestamp:(e>>22n)+n,workerId:e>>17n&G,processId:e>>12n&K,increment:e&W,epoch:n}}timestampFrom(t){return Number((BigInt(t)>>22n)+this[k])}static compare(t,e){const n=typeof t;return n===typeof e?n==="string"?Lt(t,e):Y(t,e):Y(BigInt(t),BigInt(e))}};Z(tt,"Snowflake");Bt=k,Ct=Q,At=U,Ot=R;function Y(t,e){return t===e?0:t<e?-1:1}Z(Y,"cmpBigInt");function Lt(t,e){return t===e?0:t.length<e.length?-1:t.length>e.length?1:t<e?-1:1}Z(Lt,"cmpString");new tt(1420070400000n);var pe=new tt(1288834974657n);function at(t,e){e===void 0&&(e={});var n=e.min,r=e.max,o=t;return q(r)&&(o=Math.min(r,o)),q(n)&&(o=Math.max(n,o)),o}function me(t,e){t===void 0&&(t=0),e===void 0&&(e={});var n=e.min,r=e.max,o=Jt(N.useState(function(){return at(t,{min:n,max:r})}),2),l=o[0],a=o[1],c=function(d){a(function(x){var $=q(d)?d:d(x);return at($,{max:r,min:n})})},v=function(d){d===void 0&&(d=1),c(function(x){return x+d})},w=function(d){d===void 0&&(d=1),c(function(x){return x-d})},b=function(d){c(d)},B=function(){c(t)};return[l,{inc:j(v),dec:j(w),set:j(b),reset:j(B)}]}var J=Math.floor(Math.random()*16777215),ut=f.index=parseInt(Math.random()*16777215,10),ct=(typeof process>"u"||typeof process.pid!="number"?Math.floor(Math.random()*1e5):process.pid)%65535,ft=(()=>{try{return _Buffer}catch{try{return Buffer}catch{return null}}})(),P=function(t){return!!(t!=null&&t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t))},Ht=[];for(var y=0;y<256;y++)Ht[y]=(y<=15?"0":"")+y.toString(16);var lt=new RegExp("^[0-9a-fA-F]{24}$"),D=[];y=0;for(;y<10;)D[48+y]=y++;for(;y<16;)D[65-10+y]=D[97-10+y]=y++;function f(t){if(!(this instanceof f))return new f(t);if(t&&(t instanceof f||t._bsontype==="ObjectID"))return t;if(this._bsontype="ObjectID",t==null||typeof t=="number"){this.id=this.generate(t);return}var e=f.isValid(t);if(!e&&t!=null)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");if(e&&typeof t=="string"&&t.length===24)return f.createFromHexString(t);if(t!=null&&t.length===12)this.id=t;else{if(t!=null&&typeof t.toHexString=="function")return t;throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters")}}var ye=f;f.default=f;f.createFromTime=function(t){return t=parseInt(t,10)%4294967295,new f(be(8,t)+"0000000000000000")};f.createFromHexString=function(t){if(typeof t>"u"||t!=null&&t.length!==24)throw new Error("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");for(var e="",n=0;n<24;)e+=String.fromCharCode(D[t.charCodeAt(n++)]<<4|D[t.charCodeAt(n++)]);return new f(e)};f.isValid=function(t){return t==null?!1:typeof t=="number"?!0:typeof t=="string"?t.length===12||t.length===24&&lt.test(t):t instanceof f?!0:P(t)?f.isValid(t.toString("hex")):typeof t.toHexString=="function"&&ft&&(t.id instanceof ft||typeof t.id=="string")?t.id.length===12||t.id.length===24&&lt.test(t.id):!1};f.prototype={constructor:f,toHexString:function(){if(!this.id||!this.id.length)throw new Error("invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is ["+JSON.stringify(this.id)+"]");if(this.id.length===24)return this.id;if(P(this.id))return this.id.toString("hex");for(var t="",e=0;e<this.id.length;e++)t+=Ht[this.id.charCodeAt(e)];return t},equals:function(t){return t instanceof f?this.toString()===t.toString():typeof t=="string"&&f.isValid(t)&&t.length===12&&P(this.id)?t===this.id.toString("binary"):typeof t=="string"&&f.isValid(t)&&t.length===24?t.toLowerCase()===this.toHexString():typeof t=="string"&&f.isValid(t)&&t.length===12?t===this.id:t!=null&&(t instanceof f||t.toHexString)?t.toHexString()===this.toHexString():!1},getTimestamp:function(){var t=new Date,e;return P(this.id)?e=this.id[3]|this.id[2]<<8|this.id[1]<<16|this.id[0]<<24:e=this.id.charCodeAt(3)|this.id.charCodeAt(2)<<8|this.id.charCodeAt(1)<<16|this.id.charCodeAt(0)<<24,t.setTime(Math.floor(e)*1e3),t},generate:function(t){typeof t!="number"&&(t=~~(Date.now()/1e3)),t=parseInt(t,10)%4294967295;var e=xe();return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,t&255,J>>16&255,J>>8&255,J&255,ct>>8&255,ct&255,e>>16&255,e>>8&255,e&255)}};function xe(){return ut=(ut+1)%16777215}function be(t,e){return e=e.toString(16),e.length===t?e:"00000000".substring(e.length,t)+e}var ve=Symbol&&Symbol.for&&Symbol.for("nodejs.util.inspect.custom")||"inspect";f.prototype[ve]=function(){return"ObjectID("+this+")"};f.prototype.toJSON=f.prototype.toHexString;f.prototype.toString=f.prototype.toHexString;const we=Gt(ye);let Fe=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");function V(t){var e=new Error(t);return e.source="ulid",e}var et="0123456789ABCDEFGHJKMNPQRSTVWXYZ",H=et.length,ht=Math.pow(2,48)-1,Se=10,_e=16;function Ie(t){var e=Math.floor(t()*H);return e===H&&(e=H-1),et.charAt(e)}function ke(t,e){if(isNaN(t))throw new Error(t+" must be a number");if(t>ht)throw V("cannot encode time greater than "+ht);if(t<0)throw V("time must be positive");if(Number.isInteger(t)===!1)throw V("time must be an integer");for(var n=void 0,r="";e>0;e--)n=t%H,r=et.charAt(n)+r,t=(t-n)/H;return r}function Be(t,e){for(var n="";t>0;t--)n=Ie(e)+n;return n}function Ce(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments[1];e||(e=typeof window<"u"?window:null);var n=e&&(e.crypto||e.msCrypto);if(n)return function(){var o=new Uint8Array(1);return n.getRandomValues(o),o[0]/255};try{var r=require("crypto");return function(){return r.randomBytes(1).readUInt8()/255}}catch{}if(t){try{console.error("secure crypto unusable, falling back to insecure Math.random()!")}catch{}return function(){return Math.random()}}throw V("secure crypto unusable, insecure Math.random not allowed")}function Ae(t){return t||(t=Ce()),function(n){return isNaN(n)&&(n=Date.now()),ke(n,Se)+Be(_e,t)}}var Oe=Ae();let T;const Le=new Uint8Array(16);function He(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(Le)}const g=[];for(let t=0;t<256;++t)g.push((t+256).toString(16).slice(1));function Me(t,e=0){return(g[t[e+0]]+g[t[e+1]]+g[t[e+2]]+g[t[e+3]]+"-"+g[t[e+4]]+g[t[e+5]]+"-"+g[t[e+6]]+g[t[e+7]]+"-"+g[t[e+8]]+g[t[e+9]]+"-"+g[t[e+10]]+g[t[e+11]]+g[t[e+12]]+g[t[e+13]]+g[t[e+14]]+g[t[e+15]]).toLowerCase()}const De=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dt={randomUUID:De};function Ee(t,e,n){if(dt.randomUUID&&!e&&!t)return dt.randomUUID();t=t||{};const r=t.random||(t.rng||He)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Me(r)}const Ze=()=>{const[t,e]=N.useState("cuid"),[n,r]=N.useState(""),[o,{inc:l}]=me(0),a=[{label:"Cuid2",value:"cuid"},{label:"BSON ObjectID",value:"objectid"},{label:"Nano ID",value:"nanoid"},{label:"ULID",value:"ulid"},{label:"UUID",value:"uuid"},{label:"Snowflake ID",value:"snowflakeid"}];return N.useEffect(()=>{t==="cuid"?r(de):t==="objectid"?r(we().toHexString()):t==="nanoid"?r(Fe()):t==="ulid"?r(Oe()):t==="uuid"?r(Ee()):t==="snowflakeid"&&r(pe.generate().toString())},[t,o]),F.jsx(Xt,{children:F.jsx(zt,{justify:"center",children:F.jsxs(Qt,{span:16,children:[F.jsx(Yt,{block:!0,options:a,value:t,onChange:c=>e(c)}),F.jsx("div",{style:{marginTop:"10px",marginBottom:"10px"},children:F.jsx(Zt,{onClick:()=>l(),children:"刷新"})}),F.jsx("div",{style:{marginTop:"10px"},children:F.jsx(qt,{title:"结果",text:n})})]})})})};export{Ze as default};
//# sourceMappingURL=page-544ce4f3.js.map
