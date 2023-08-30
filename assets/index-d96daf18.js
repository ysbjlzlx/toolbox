import{A as J,_ as q,y as ee,z as te,E as ne,C as oe,H as re,g as se,ah as ie,Y as le}from"./index-09453be0.js";import{r as N,a as M}from"./ace-073628d1.js";import{B as ae}from"./button-763a9a47.js";var ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};const ue=ce;var he=function(r,c){return N.createElement(J,q({},r,{ref:c,icon:ue}))};const de=N.forwardRef(he);var fe=Object.defineProperty,y=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,T=(l,r,c)=>r in l?fe(l,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[r]=c,b=(l,r)=>{for(var c in r||(r={}))F.call(r,c)&&T(l,c,r[c]);if(y)for(var c of y(r))D.call(r,c)&&T(l,c,r[c]);return l},x=(l,r)=>{var c={};for(var i in l)F.call(l,i)&&r.indexOf(i)<0&&(c[i]=l[i]);if(l!=null&&y)for(var i of y(l))r.indexOf(i)<0&&D.call(l,i)&&(c[i]=l[i]);return c};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var S;(l=>{const r=class{constructor(e,t,n,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let s=[];for(let a=0;a<this.size;a++)s.push(!1);for(let a=0;a<this.size;a++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const u=this.addEccAndInterleave(n);if(this.drawCodewords(u),o==-1){let a=1e9;for(let m=0;m<8;m++){this.applyMask(m),this.drawFormatBits(m);const d=this.getPenaltyScore();d<a&&(o=m,a=d),this.applyMask(m)}}h(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(e,t){const n=l.QrSegment.makeSegments(e);return r.encodeSegments(n,t)}static encodeBinary(e,t){const n=l.QrSegment.makeBytes(e);return r.encodeSegments([n],t)}static encodeSegments(e,t,n=1,o=40,s=-1,u=!0){if(!(r.MIN_VERSION<=n&&n<=o&&o<=r.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let a,m;for(a=n;;a++){const g=r.getNumDataCodewords(a,t)*8,p=C.getTotalBits(e,a);if(p<=g){m=p;break}if(a>=o)throw new RangeError("Data too long")}for(const g of[r.Ecc.MEDIUM,r.Ecc.QUARTILE,r.Ecc.HIGH])u&&m<=r.getNumDataCodewords(a,g)*8&&(t=g);let d=[];for(const g of e){i(g.mode.modeBits,4,d),i(g.numChars,g.mode.numCharCountBits(a),d);for(const p of g.getData())d.push(p)}h(d.length==m);const v=r.getNumDataCodewords(a,t)*8;h(d.length<=v),i(0,Math.min(4,v-d.length),d),i(0,(8-d.length%8)%8,d),h(d.length%8==0);for(let g=236;d.length<v;g^=253)i(g,8,d);let w=[];for(;w.length*8<d.length;)w.push(0);return d.forEach((g,p)=>w[p>>>3]|=g<<7-(p&7)),new r(a,t,w,s)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let n=0;n<this.size;n++)this.setFunctionModule(6,n,n%2==0),this.setFunctionModule(n,6,n%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let o=0;o<t;o++)n==0&&o==0||n==0&&o==t-1||n==t-1&&o==0||this.drawAlignmentPattern(e[n],e[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let n=t;for(let s=0;s<10;s++)n=n<<1^(n>>>9)*1335;const o=(t<<10|n)^21522;h(o>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,E(o,s));this.setFunctionModule(8,7,E(o,6)),this.setFunctionModule(8,8,E(o,7)),this.setFunctionModule(7,8,E(o,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,E(o,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,E(o,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,E(o,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let n=0;n<12;n++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;h(t>>>18==0);for(let n=0;n<18;n++){const o=E(t,n),s=this.size-11+n%3,u=Math.floor(n/3);this.setFunctionModule(s,u,o),this.setFunctionModule(u,s,o)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let o=-4;o<=4;o++){const s=Math.max(Math.abs(o),Math.abs(n)),u=e+o,a=t+n;0<=u&&u<this.size&&0<=a&&a<this.size&&this.setFunctionModule(u,a,s!=2&&s!=4)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)this.setFunctionModule(e+o,t+n,Math.max(Math.abs(o),Math.abs(n))!=1)}setFunctionModule(e,t,n){this.modules[t][e]=n,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,n=this.errorCorrectionLevel;if(e.length!=r.getNumDataCodewords(t,n))throw new RangeError("Invalid argument");const o=r.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t],s=r.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t],u=Math.floor(r.getNumRawDataModules(t)/8),a=o-u%o,m=Math.floor(u/o);let d=[];const v=r.reedSolomonComputeDivisor(s);for(let g=0,p=0;g<o;g++){let R=e.slice(p,p+m-s+(g<a?0:1));p+=R.length;const _=r.reedSolomonComputeRemainder(R,v);g<a&&R.push(0),d.push(R.concat(_))}let w=[];for(let g=0;g<d[0].length;g++)d.forEach((p,R)=>{(g!=m-s||R>=a)&&w.push(p[g])});return h(w.length==u),w}drawCodewords(e){if(e.length!=Math.floor(r.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let n=this.size-1;n>=1;n-=2){n==6&&(n=5);for(let o=0;o<this.size;o++)for(let s=0;s<2;s++){const u=n-s,m=(n+1&2)==0?this.size-1-o:o;!this.isFunction[m][u]&&t<e.length*8&&(this.modules[m][u]=E(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let o;switch(e){case 0:o=(n+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=n%3==0;break;case 3:o=(n+t)%3==0;break;case 4:o=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:o=n*t%2+n*t%3==0;break;case 6:o=(n*t%2+n*t%3)%2==0;break;case 7:o=((n+t)%2+n*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][n]&&o&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let s=0;s<this.size;s++){let u=!1,a=0,m=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[s][d]==u?(a++,a==5?e+=r.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,m),u||(e+=this.finderPenaltyCountPatterns(m)*r.PENALTY_N3),u=this.modules[s][d],a=1);e+=this.finderPenaltyTerminateAndCount(u,a,m)*r.PENALTY_N3}for(let s=0;s<this.size;s++){let u=!1,a=0,m=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][s]==u?(a++,a==5?e+=r.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,m),u||(e+=this.finderPenaltyCountPatterns(m)*r.PENALTY_N3),u=this.modules[d][s],a=1);e+=this.finderPenaltyTerminateAndCount(u,a,m)*r.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let u=0;u<this.size-1;u++){const a=this.modules[s][u];a==this.modules[s][u+1]&&a==this.modules[s+1][u]&&a==this.modules[s+1][u+1]&&(e+=r.PENALTY_N2)}let t=0;for(const s of this.modules)t=s.reduce((u,a)=>u+(a?1:0),t);const n=this.size*this.size,o=Math.ceil(Math.abs(t*20-n*10)/n)-1;return h(0<=o&&o<=9),e+=o*r.PENALTY_N4,h(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let n=[6];for(let o=this.size-7;n.length<e;o-=t)n.splice(1,0,o);return n}}static getNumRawDataModules(e){if(e<r.MIN_VERSION||e>r.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(r.getNumRawDataModules(e)/8)-r.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*r.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let o=0;o<e-1;o++)t.push(0);t.push(1);let n=1;for(let o=0;o<e;o++){for(let s=0;s<t.length;s++)t[s]=r.reedSolomonMultiply(t[s],n),s+1<t.length&&(t[s]^=t[s+1]);n=r.reedSolomonMultiply(n,2)}return t}static reedSolomonComputeRemainder(e,t){let n=t.map(o=>0);for(const o of e){const s=o^n.shift();n.push(0),t.forEach((u,a)=>n[a]^=r.reedSolomonMultiply(u,s))}return n}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let n=0;for(let o=7;o>=0;o--)n=n<<1^(n>>>7)*285,n^=(t>>>o&1)*e;return h(n>>>8==0),n}finderPenaltyCountPatterns(e){const t=e[1];h(t<=this.size*3);const n=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let c=r;c.MIN_VERSION=1,c.MAX_VERSION=40,c.PENALTY_N1=3,c.PENALTY_N2=3,c.PENALTY_N3=40,c.PENALTY_N4=10,c.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],c.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],l.QrCode=c;function i(e,t,n){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let o=t-1;o>=0;o--)n.push(e>>>o&1)}function E(e,t){return(e>>>t&1)!=0}function h(e){if(!e)throw new Error("Assertion error")}const f=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}static makeBytes(e){let t=[];for(const n of e)i(n,8,t);return new f(f.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!f.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){const o=Math.min(e.length-n,3);i(parseInt(e.substr(n,o),10),o*3+1,t),n+=o}return new f(f.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!f.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],n;for(n=0;n+2<=e.length;n+=2){let o=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n))*45;o+=f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n+1)),i(o,11,t)}return n<e.length&&i(f.ALPHANUMERIC_CHARSET.indexOf(e.charAt(n)),6,t),new f(f.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:f.isNumeric(e)?[f.makeNumeric(e)]:f.isAlphanumeric(e)?[f.makeAlphanumeric(e)]:[f.makeBytes(f.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)i(e,8,t);else if(e<16384)i(2,2,t),i(e,14,t);else if(e<1e6)i(6,3,t),i(e,21,t);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,t)}static isNumeric(e){return f.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return f.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let n=0;for(const o of e){const s=o.mode.numCharCountBits(t);if(o.numChars>=1<<s)return 1/0;n+=4+s+o.bitData.length}return n}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)!="%"?t.push(e.charCodeAt(n)):(t.push(parseInt(e.substr(n+1,2),16)),n+=2);return t}};let C=f;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",l.QrSegment=C})(S||(S={}));(l=>{(r=>{const c=class{constructor(E,h){this.ordinal=E,this.formatBits=h}};let i=c;i.LOW=new c(0,1),i.MEDIUM=new c(1,0),i.QUARTILE=new c(2,3),i.HIGH=new c(3,2),r.Ecc=i})(l.QrCode||(l.QrCode={}))})(S||(S={}));(l=>{(r=>{const c=class{constructor(E,h){this.modeBits=E,this.numBitsCharCount=h}numCharCountBits(E){return this.numBitsCharCount[Math.floor((E+7)/17)]}};let i=c;i.NUMERIC=new c(1,[10,12,14]),i.ALPHANUMERIC=new c(2,[9,11,13]),i.BYTE=new c(4,[8,16,16]),i.KANJI=new c(8,[8,10,12]),i.ECI=new c(7,[0,0,0]),r.Mode=i})(l.QrSegment||(l.QrSegment={}))})(S||(S={}));var I=S;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Q={L:I.QrCode.Ecc.LOW,M:I.QrCode.Ecc.MEDIUM,Q:I.QrCode.Ecc.QUARTILE,H:I.QrCode.Ecc.HIGH},U=128,$="L",H="#FFFFFF",k="#000000",Y=!1,O=4,ge=.1;function j(l,r=0){const c=[];return l.forEach(function(i,E){let h=null;i.forEach(function(f,C){if(!f&&h!==null){c.push(`M${h+r} ${E+r}h${C-h}v1H${h+r}z`),h=null;return}if(C===i.length-1){if(!f)return;h===null?c.push(`M${C+r},${E+r} h1v1H${C+r}z`):c.push(`M${h+r},${E+r} h${C+1-h}v1H${h+r}z`);return}f&&h===null&&(h=C)})}),c.join("")}function G(l,r){return l.slice().map((c,i)=>i<r.y||i>=r.y+r.h?c:c.map((E,h)=>h<r.x||h>=r.x+r.w?E:!1))}function X(l,r,c,i){if(i==null)return null;const E=c?O:0,h=l.length+E*2,f=Math.floor(r*ge),C=h/r,e=(i.width||f)*C,t=(i.height||f)*C,n=i.x==null?l.length/2-e/2:i.x*C,o=i.y==null?l.length/2-t/2:i.y*C;let s=null;if(i.excavate){let u=Math.floor(n),a=Math.floor(o),m=Math.ceil(e+n-u),d=Math.ceil(t+o-a);s={x:u,y:a,w:m,h:d}}return{x:n,y:o,h:t,w:e,excavation:s}}var me=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Ee(l){const r=l,{value:c,size:i=U,level:E=$,bgColor:h=H,fgColor:f=k,includeMargin:C=Y,style:e,imageSettings:t}=r,n=x(r,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),o=t==null?void 0:t.src,s=N.useRef(null),u=N.useRef(null),[a,m]=N.useState(!1);N.useEffect(()=>{if(s.current!=null){const w=s.current,g=w.getContext("2d");if(!g)return;let p=I.QrCode.encodeText(c,Q[E]).getModules();const R=C?O:0,_=p.length+R*2,A=X(p,i,C,t),P=u.current,L=A!=null&&P!==null&&P.complete&&P.naturalHeight!==0&&P.naturalWidth!==0;L&&A.excavation!=null&&(p=G(p,A.excavation));const B=window.devicePixelRatio||1;w.height=w.width=i*B;const z=i/_*B;g.scale(z,z),g.fillStyle=h,g.fillRect(0,0,_,_),g.fillStyle=f,me?g.fill(new Path2D(j(p,R))):p.forEach(function(W,K){W.forEach(function(V,Z){V&&g.fillRect(Z+R,K+R,1,1)})}),L&&g.drawImage(P,A.x+R,A.y+R,A.w,A.h)}}),N.useEffect(()=>{m(!1)},[o]);const d=b({height:i,width:i},e);let v=null;return o!=null&&(v=M.createElement("img",{src:o,key:o,style:{display:"none"},onLoad:()=>{m(!0)},ref:u})),M.createElement(M.Fragment,null,M.createElement("canvas",b({style:d,height:i,width:i,ref:s},n)),v)}function Ce(l){const r=l,{value:c,size:i=U,level:E=$,bgColor:h=H,fgColor:f=k,includeMargin:C=Y,imageSettings:e}=r,t=x(r,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let n=I.QrCode.encodeText(c,Q[E]).getModules();const o=C?O:0,s=n.length+o*2,u=X(n,i,C,e);let a=null;e!=null&&u!=null&&(u.excavation!=null&&(n=G(n,u.excavation)),a=M.createElement("image",{xlinkHref:e.src,height:u.h,width:u.w,x:u.x+o,y:u.y+o,preserveAspectRatio:"none"}));const m=j(n,o);return M.createElement("svg",b({height:i,width:i,viewBox:`0 0 ${s} ${s}`},t),M.createElement("path",{fill:h,d:`M0,0 h${s}v${s}H0z`,shapeRendering:"crispEdges"}),M.createElement("path",{fill:f,d:m,shapeRendering:"crispEdges"}),a)}const pe=l=>{const{componentCls:r}=l;return{[r]:Object.assign(Object.assign({},ne(l)),{display:"flex",justifyContent:"center",alignItems:"center",padding:l.paddingSM,backgroundColor:l.colorWhite,borderRadius:l.borderRadiusLG,border:`${l.lineWidth}px ${l.lineType} ${l.colorSplit}`,position:"relative",width:"100%",height:"100%",overflow:"hidden",[`& > ${r}-mask`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:l.colorText,lineHeight:l.lineHeight,background:l.QRCodeMaskBackgroundColor,textAlign:"center",[`& > ${r}-expired`]:{color:l.QRCodeExpiredTextColor}},"&-icon":{marginBlockEnd:l.marginXS,fontSize:l.controlHeight}}),[`${r}-borderless`]:{borderColor:"transparent"}}},we=ee("QRCode",l=>pe(te(l,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"}))),{useToken:Me}=le,Re=l=>{const{token:r}=Me(),{value:c,type:i="canvas",icon:E="",size:h=160,iconSize:f=40,color:C=r.colorText,errorLevel:e="M",status:t="active",bordered:n=!0,onRefresh:o,style:s,className:u,rootClassName:a,prefixCls:m,bgColor:d="transparent"}=l,{getPrefixCls:v}=N.useContext(oe),w=v("qrcode",m),[g,p]=we(w),R={src:E,x:void 0,y:void 0,height:f,width:f,excavate:!0},_={value:c,size:h-(r.paddingSM+r.lineWidth)*2,level:e,bgColor:d,fgColor:C,imageSettings:E?R:void 0},[A]=re("QRCode");if(!c)return null;const P=se(w,u,a,p,{[`${w}-borderless`]:!n});return g(M.createElement("div",{style:Object.assign(Object.assign({},s),{width:h,height:h,backgroundColor:d}),className:P},t!=="active"&&M.createElement("div",{className:`${w}-mask`},t==="loading"&&M.createElement(ie,null),t==="expired"&&M.createElement(M.Fragment,null,M.createElement("p",{className:`${w}-expired`},A==null?void 0:A.expired),o&&M.createElement(ae,{type:"link",icon:M.createElement(de,null),onClick:o},A==null?void 0:A.refresh))),i==="canvas"?M.createElement(Ee,Object.assign({},_)):M.createElement(Ce,Object.assign({},_))))},Ne=Re;export{Ne as Q};
//# sourceMappingURL=index-d96daf18.js.map
