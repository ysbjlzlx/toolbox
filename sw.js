if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-958fa2bd"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/App.6b3a7302.js",revision:null},{url:"assets/App.87accddd.css",revision:null},{url:"assets/Base64.e322f83e.js",revision:null},{url:"assets/BSONObjectID.655b9cea.js",revision:null},{url:"assets/Button.2fb36efe.js",revision:null},{url:"assets/ButtonGroup.44a949f5.js",revision:null},{url:"assets/CardContent.cc7c1a49.js",revision:null},{url:"assets/Code.66f7406a.js",revision:null},{url:"assets/CodeFormatter.e93d9aef.js",revision:null},{url:"assets/Container.5a9a2c29.js",revision:null},{url:"assets/ContentCopyAdornment.e9ac0920.js",revision:null},{url:"assets/DocEditor.48fa468c.js",revision:null},{url:"assets/Excel.d497c2ff.js",revision:null},{url:"assets/ext-searchbox.b1d209ee.js",revision:null},{url:"assets/FormControlLabel.c374e416.js",revision:null},{url:"assets/Grid.35b6fe57.js",revision:null},{url:"assets/Hash.ad978c22.js",revision:null},{url:"assets/index.393fbcfa.js",revision:null},{url:"assets/index.407d9a22.css",revision:null},{url:"assets/index.5dc50dd1.js",revision:null},{url:"assets/index.8ec00933.js",revision:null},{url:"assets/index.f584a5d3.js",revision:null},{url:"assets/index.ffcb1724.js",revision:null},{url:"assets/InputAdornment.35dbb3ba.js",revision:null},{url:"assets/JSON.631f4482.js",revision:null},{url:"assets/JSON2Yaml.b3faa5a2.js",revision:null},{url:"assets/jsx-runtime_commonjs-proxy.24994a9c.js",revision:null},{url:"assets/Markdown.292f7dc7.js",revision:null},{url:"assets/MenuItem.51cd9766.js",revision:null},{url:"assets/PlaceholderImg.53cf8748.js",revision:null},{url:"assets/QrCode.fed3d84f.js",revision:null},{url:"assets/Random.487ba96d.js",revision:null},{url:"assets/RefreshAdornment.f5f231a0.js",revision:null},{url:"assets/Select.09ed00a1.js",revision:null},{url:"assets/standalone.3f576f17.js",revision:null},{url:"assets/TextField.14769e46.js",revision:null},{url:"assets/theme-textmate.aabf6e1a.js",revision:null},{url:"assets/URL.f1c7f472.js",revision:null},{url:"assets/web-vitals.67dce932.js",revision:null},{url:"index.html",revision:"78daf989421e1bd55e5a24f347969d35"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"d0503a9b182277d9096a283444a82277"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
