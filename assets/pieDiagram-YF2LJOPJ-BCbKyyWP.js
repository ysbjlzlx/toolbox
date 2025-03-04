import{p as N}from"./chunk-TMUBEWPD-BXaX06bE.js";import{_ as i,g as B,s as U,a as V,b as Z,o as j,p as q,l as C,c as H,E as J,a4 as K,a6 as Q,a7 as z,a8 as X,e as Y,x as ee,a9 as te,G as ae}from"./md-editor-C6otpRZL.js";import{p as re}from"./gitGraph-YCYPL57B-j0Vjkgal.js";import"./pro-components-L2sDkqQs.js";import"./antd-Bzy0GL_f.js";import"./json-editor-CBqK5HSN.js";import"./ace-BbTluGSE.js";var ie=ae.pie,D={sections:new Map,showData:!1},h=D.sections,w=D.showData,se=structuredClone(ie),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=D.showData,ee()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),pe=i(e=>{w=e},"setShowData"),de=i(()=>w,"getShowData"),G={getConfig:oe,clear:ne,setDiagramTitle:q,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:pe,getShowData:de},ge=i((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await re("pie",e);C.debug(a),ge(a,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return te().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,F,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=H(),T=J(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,m=c,S=K(a),l=S.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:r}=y;let[A]=Q(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,c)/2-$,W=z().innerRadius(0).outerRadius(g),M=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=me(E),O=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=X(O);l.selectAll("mySlices").data(v).enter().append("path").attr("d",W).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let b=0;E.forEach(t=>{b+=t}),l.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/b*100).toFixed(0)+"%").attr("transform",t=>"translate("+M.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+d,R=f*p.domain().length/2,I=12*o,L=u*f-R;return"translate("+I+","+L+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const P=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+o+d+P;S.attr("viewBox",`0 0 ${k} ${c}`),Y(S,c,k,T.useMaxWidth)},"draw"),ve={draw:Se},Ae={parser:ue,db:G,renderer:ve,styles:he};export{Ae as diagram};
