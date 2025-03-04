import{_ as c,g as it,s as at,o as nt,p as rt,a as ct,b as lt,c as K,d as de,I as ot,K as ut,L as dt,e as ft,N as ht,O as kt,l as ke,P as mt,Q as Re,R as Oe,S as yt,T as gt,U as pt,V as vt,W as Tt,X as bt,Y as xt,Z as Be,$ as Ne,a0 as Ye,a1 as ze,a2 as qe,a3 as _t,k as wt,j as Dt,x as Ct,u as Et}from"./md-editor-C6otpRZL.js";import{m as L,H as St,ap as It}from"./antd-Bzy0GL_f.js";import{an as At}from"./pro-components-L2sDkqQs.js";import"./json-editor-CBqK5HSN.js";import"./ace-BbTluGSE.js";var be=function(){var e=c(function(x,l,u,f){for(u=u||{},f=x.length;f--;u[x[f]]=l);return u},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],a=[1,26],n=[1,27],r=[1,28],m=[1,29],h=[1,30],V=[1,31],B=[1,32],N=[1,33],E=[1,34],F=[1,9],z=[1,10],P=[1,11],R=[1,12],_=[1,13],J=[1,14],$=[1,15],ee=[1,16],te=[1,19],se=[1,20],ie=[1,21],ae=[1,22],ne=[1,23],y=[1,25],T=[1,35],p={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(l,u,f,d,g,i,o){var t=i.length-1;switch(g){case 1:return i[t-1];case 2:this.$=[];break;case 3:i[t-1].push(i[t]),this.$=i[t-1];break;case 4:case 5:this.$=i[t];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(i[t].substr(11)),this.$=i[t].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=i[t].substr(18);break;case 19:d.TopAxis(),this.$=i[t].substr(8);break;case 20:d.setAxisFormat(i[t].substr(11)),this.$=i[t].substr(11);break;case 21:d.setTickInterval(i[t].substr(13)),this.$=i[t].substr(13);break;case 22:d.setExcludes(i[t].substr(9)),this.$=i[t].substr(9);break;case 23:d.setIncludes(i[t].substr(9)),this.$=i[t].substr(9);break;case 24:d.setTodayMarker(i[t].substr(12)),this.$=i[t].substr(12);break;case 27:d.setDiagramTitle(i[t].substr(6)),this.$=i[t].substr(6);break;case 28:this.$=i[t].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=i[t].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(i[t].substr(8)),this.$=i[t].substr(8);break;case 33:d.addTask(i[t-1],i[t]),this.$="task";break;case 34:this.$=i[t-1],d.setClickEvent(i[t-1],i[t],null);break;case 35:this.$=i[t-2],d.setClickEvent(i[t-2],i[t-1],i[t]);break;case 36:this.$=i[t-2],d.setClickEvent(i[t-2],i[t-1],null),d.setLink(i[t-2],i[t]);break;case 37:this.$=i[t-3],d.setClickEvent(i[t-3],i[t-2],i[t-1]),d.setLink(i[t-3],i[t]);break;case 38:this.$=i[t-2],d.setClickEvent(i[t-2],i[t],null),d.setLink(i[t-2],i[t-1]);break;case 39:this.$=i[t-3],d.setClickEvent(i[t-3],i[t-1],i[t]),d.setLink(i[t-3],i[t-2]);break;case 40:this.$=i[t-1],d.setLink(i[t-1],i[t]);break;case 41:case 47:this.$=i[t-1]+" "+i[t];break;case 42:case 43:case 45:this.$=i[t-2]+" "+i[t-1]+" "+i[t];break;case 44:case 46:this.$=i[t-3]+" "+i[t-2]+" "+i[t-1]+" "+i[t];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},e(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:a,13:n,14:r,15:m,16:h,17:V,18:B,19:18,20:N,21:E,22:F,23:z,24:P,25:R,26:_,27:J,28:$,29:ee,30:te,31:se,33:ie,35:ae,36:ne,37:24,38:y,40:T},e(s,[2,7],{1:[2,1]}),e(s,[2,3]),{9:36,11:17,12:a,13:n,14:r,15:m,16:h,17:V,18:B,19:18,20:N,21:E,22:F,23:z,24:P,25:R,26:_,27:J,28:$,29:ee,30:te,31:se,33:ie,35:ae,36:ne,37:24,38:y,40:T},e(s,[2,5]),e(s,[2,6]),e(s,[2,17]),e(s,[2,18]),e(s,[2,19]),e(s,[2,20]),e(s,[2,21]),e(s,[2,22]),e(s,[2,23]),e(s,[2,24]),e(s,[2,25]),e(s,[2,26]),e(s,[2,27]),{32:[1,37]},{34:[1,38]},e(s,[2,30]),e(s,[2,31]),e(s,[2,32]),{39:[1,39]},e(s,[2,8]),e(s,[2,9]),e(s,[2,10]),e(s,[2,11]),e(s,[2,12]),e(s,[2,13]),e(s,[2,14]),e(s,[2,15]),e(s,[2,16]),{41:[1,40],43:[1,41]},e(s,[2,4]),e(s,[2,28]),e(s,[2,29]),e(s,[2,33]),e(s,[2,34],{42:[1,42],43:[1,43]}),e(s,[2,40],{41:[1,44]}),e(s,[2,35],{43:[1,45]}),e(s,[2,36]),e(s,[2,38],{42:[1,46]}),e(s,[2,37]),e(s,[2,39])],defaultActions:{},parseError:c(function(l,u){if(u.recoverable)this.trace(l);else{var f=new Error(l);throw f.hash=u,f}},"parseError"),parse:c(function(l){var u=this,f=[0],d=[],g=[null],i=[],o=this.table,t="",D=0,b=0,w=2,A=1,C=i.slice.call(arguments,1),S=Object.create(this.lexer),q={yy:{}};for(var ge in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ge)&&(q.yy[ge]=this.yy[ge]);S.setInput(l,q.yy),q.yy.lexer=S,q.yy.parser=this,typeof S.yylloc>"u"&&(S.yylloc={});var pe=S.yylloc;i.push(pe);var tt=S.options&&S.options.ranges;typeof q.yy.parseError=="function"?this.parseError=q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function st(W){f.length=f.length-2*W,g.length=g.length-W,i.length=i.length-W}c(st,"popStack");function We(){var W;return W=d.pop()||S.lex()||A,typeof W!="number"&&(W instanceof Array&&(d=W,W=d.pop()),W=u.symbols_[W]||W),W}c(We,"lex");for(var M,X,O,ve,H={},oe,j,Pe,ue;;){if(X=f[f.length-1],this.defaultActions[X]?O=this.defaultActions[X]:((M===null||typeof M>"u")&&(M=We()),O=o[X]&&o[X][M]),typeof O>"u"||!O.length||!O[0]){var Te="";ue=[];for(oe in o[X])this.terminals_[oe]&&oe>w&&ue.push("'"+this.terminals_[oe]+"'");S.showPosition?Te="Parse error on line "+(D+1)+`:
`+S.showPosition()+`
Expecting `+ue.join(", ")+", got '"+(this.terminals_[M]||M)+"'":Te="Parse error on line "+(D+1)+": Unexpected "+(M==A?"end of input":"'"+(this.terminals_[M]||M)+"'"),this.parseError(Te,{text:S.match,token:this.terminals_[M]||M,line:S.yylineno,loc:pe,expected:ue})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+X+", token: "+M);switch(O[0]){case 1:f.push(M),g.push(S.yytext),i.push(S.yylloc),f.push(O[1]),M=null,b=S.yyleng,t=S.yytext,D=S.yylineno,pe=S.yylloc;break;case 2:if(j=this.productions_[O[1]][1],H.$=g[g.length-j],H._$={first_line:i[i.length-(j||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(j||1)].first_column,last_column:i[i.length-1].last_column},tt&&(H._$.range=[i[i.length-(j||1)].range[0],i[i.length-1].range[1]]),ve=this.performAction.apply(H,[t,b,D,q.yy,O[1],g,i].concat(C)),typeof ve<"u")return ve;j&&(f=f.slice(0,-1*j*2),g=g.slice(0,-1*j),i=i.slice(0,-1*j)),f.push(this.productions_[O[1]][0]),g.push(H.$),i.push(H._$),Pe=o[f[f.length-2]][f[f.length-1]],f.push(Pe);break;case 3:return!0}}return!0},"parse")},v=function(){var x={EOF:1,parseError:c(function(u,f){if(this.yy.parser)this.yy.parser.parseError(u,f);else throw new Error(u)},"parseError"),setInput:c(function(l,u){return this.yy=u||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},"input"),unput:c(function(l){var u=l.length,f=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===d.length?this.yylloc.first_column:0)+d[d.length-f.length].length-f[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(l){this.unput(this.match.slice(l))},"less"),pastInput:c(function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:c(function(l,u){var f,d,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),d=l[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],f=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var i in g)this[i]=g[i];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,f,d;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),i=0;i<g.length;i++)if(f=this._input.match(this.rules[g[i]]),f&&(!u||f[0].length>u[0].length)){if(u=f,d=i,this.options.backtrack_lexer){if(l=this.test_match(f,g[i]),l!==!1)return l;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(l=this.test_match(u,g[d]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var u=this.next();return u||this.lex()},"lex"),begin:c(function(u){this.conditionStack.push(u)},"begin"),popState:c(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:c(function(u){this.begin(u)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(u,f,d,g){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return x}();p.lexer=v;function k(){this.yy={}}return c(k,"Parser"),k.prototype=p,p.Parser=k,new k}();be.parser=be;var Ft=be;L.extend(At);L.extend(St);L.extend(It);var je={friday:5,saturday:6},Y="",De="",Ce=void 0,Ee="",re=[],ce=[],Se=new Map,Ie=[],me=[],Z="",Ae="",Ge=["active","done","crit","milestone"],Fe=[],le=!1,Le=!1,Me="sunday",ye="saturday",xe=0,Lt=c(function(){Ie=[],me=[],Z="",Fe=[],fe=0,we=void 0,he=void 0,I=[],Y="",De="",Ae="",Ce=void 0,Ee="",re=[],ce=[],le=!1,Le=!1,xe=0,Se=new Map,Ct(),Me="sunday",ye="saturday"},"clear"),Mt=c(function(e){De=e},"setAxisFormat"),Vt=c(function(){return De},"getAxisFormat"),Wt=c(function(e){Ce=e},"setTickInterval"),Pt=c(function(){return Ce},"getTickInterval"),Rt=c(function(e){Ee=e},"setTodayMarker"),Ot=c(function(){return Ee},"getTodayMarker"),Bt=c(function(e){Y=e},"setDateFormat"),Nt=c(function(){le=!0},"enableInclusiveEndDates"),Yt=c(function(){return le},"endDatesAreInclusive"),zt=c(function(){Le=!0},"enableTopAxis"),qt=c(function(){return Le},"topAxisEnabled"),jt=c(function(e){Ae=e},"setDisplayMode"),Ut=c(function(){return Ae},"getDisplayMode"),Xt=c(function(){return Y},"getDateFormat"),Gt=c(function(e){re=e.toLowerCase().split(/[\s,]+/)},"setIncludes"),Ht=c(function(){return re},"getIncludes"),Kt=c(function(e){ce=e.toLowerCase().split(/[\s,]+/)},"setExcludes"),Qt=c(function(){return ce},"getExcludes"),Zt=c(function(){return Se},"getLinks"),Jt=c(function(e){Z=e,Ie.push(e)},"addSection"),$t=c(function(){return Ie},"getSections"),es=c(function(){let e=Ue();const s=10;let a=0;for(;!e&&a<s;)e=Ue(),a++;return me=I,me},"getTasks"),He=c(function(e,s,a,n){return n.includes(e.format(s.trim()))?!1:a.includes("weekends")&&(e.isoWeekday()===je[ye]||e.isoWeekday()===je[ye]+1)||a.includes(e.format("dddd").toLowerCase())?!0:a.includes(e.format(s.trim()))},"isInvalidDate"),ts=c(function(e){Me=e},"setWeekday"),ss=c(function(){return Me},"getWeekday"),is=c(function(e){ye=e},"setWeekend"),Ke=c(function(e,s,a,n){if(!a.length||e.manualEndTime)return;let r;e.startTime instanceof Date?r=L(e.startTime):r=L(e.startTime,s,!0),r=r.add(1,"d");let m;e.endTime instanceof Date?m=L(e.endTime):m=L(e.endTime,s,!0);const[h,V]=as(r,m,s,a,n);e.endTime=h.toDate(),e.renderEndTime=V},"checkTaskDates"),as=c(function(e,s,a,n,r){let m=!1,h=null;for(;e<=s;)m||(h=s.toDate()),m=He(e,a,n,r),m&&(s=s.add(1,"d")),e=e.add(1,"d");return[s,h]},"fixTaskDates"),_e=c(function(e,s,a){a=a.trim();const r=/^after\s+(?<ids>[\d\w- ]+)/.exec(a);if(r!==null){let h=null;for(const B of r.groups.ids.split(" ")){let N=G(B);N!==void 0&&(!h||N.endTime>h.endTime)&&(h=N)}if(h)return h.endTime;const V=new Date;return V.setHours(0,0,0,0),V}let m=L(a,s.trim(),!0);if(m.isValid())return m.toDate();{ke.debug("Invalid date:"+a),ke.debug("With date format:"+s.trim());const h=new Date(a);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+a);return h}},"getStartDate"),Qe=c(function(e){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),Ze=c(function(e,s,a,n=!1){a=a.trim();const m=/^until\s+(?<ids>[\d\w- ]+)/.exec(a);if(m!==null){let E=null;for(const z of m.groups.ids.split(" ")){let P=G(z);P!==void 0&&(!E||P.startTime<E.startTime)&&(E=P)}if(E)return E.startTime;const F=new Date;return F.setHours(0,0,0,0),F}let h=L(a,s.trim(),!0);if(h.isValid())return n&&(h=h.add(1,"d")),h.toDate();let V=L(e);const[B,N]=Qe(a);if(!Number.isNaN(B)){const E=V.add(B,N);E.isValid()&&(V=E)}return V.toDate()},"getEndDate"),fe=0,Q=c(function(e){return e===void 0?(fe=fe+1,"task"+fe):e},"parseId"),ns=c(function(e,s){let a;s.substr(0,1)===":"?a=s.substr(1,s.length):a=s;const n=a.split(","),r={};Ve(n,r,Ge);for(let h=0;h<n.length;h++)n[h]=n[h].trim();let m="";switch(n.length){case 1:r.id=Q(),r.startTime=e.endTime,m=n[0];break;case 2:r.id=Q(),r.startTime=_e(void 0,Y,n[0]),m=n[1];break;case 3:r.id=Q(n[0]),r.startTime=_e(void 0,Y,n[1]),m=n[2];break}return m&&(r.endTime=Ze(r.startTime,Y,m,le),r.manualEndTime=L(m,"YYYY-MM-DD",!0).isValid(),Ke(r,Y,ce,re)),r},"compileData"),rs=c(function(e,s){let a;s.substr(0,1)===":"?a=s.substr(1,s.length):a=s;const n=a.split(","),r={};Ve(n,r,Ge);for(let m=0;m<n.length;m++)n[m]=n[m].trim();switch(n.length){case 1:r.id=Q(),r.startTime={type:"prevTaskEnd",id:e},r.endTime={data:n[0]};break;case 2:r.id=Q(),r.startTime={type:"getStartDate",startData:n[0]},r.endTime={data:n[1]};break;case 3:r.id=Q(n[0]),r.startTime={type:"getStartDate",startData:n[1]},r.endTime={data:n[2]};break}return r},"parseData"),we,he,I=[],Je={},cs=c(function(e,s){const a={section:Z,type:Z,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:e,classes:[]},n=rs(he,s);a.raw.startTime=n.startTime,a.raw.endTime=n.endTime,a.id=n.id,a.prevTaskId=he,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,a.order=xe,xe++;const r=I.push(a);he=a.id,Je[a.id]=r-1},"addTask"),G=c(function(e){const s=Je[e];return I[s]},"findTaskById"),ls=c(function(e,s){const a={section:Z,type:Z,description:e,task:e,classes:[]},n=ns(we,s);a.startTime=n.startTime,a.endTime=n.endTime,a.id=n.id,a.active=n.active,a.done=n.done,a.crit=n.crit,a.milestone=n.milestone,we=a,me.push(a)},"addTaskOrg"),Ue=c(function(){const e=c(function(a){const n=I[a];let r="";switch(I[a].raw.startTime.type){case"prevTaskEnd":{const m=G(n.prevTaskId);n.startTime=m.endTime;break}case"getStartDate":r=_e(void 0,Y,I[a].raw.startTime.startData),r&&(I[a].startTime=r);break}return I[a].startTime&&(I[a].endTime=Ze(I[a].startTime,Y,I[a].raw.endTime.data,le),I[a].endTime&&(I[a].processed=!0,I[a].manualEndTime=L(I[a].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Ke(I[a],Y,ce,re))),I[a].processed},"compileTask");let s=!0;for(const[a,n]of I.entries())e(a),s=s&&n.processed;return s},"compileTasks"),os=c(function(e,s){let a=s;K().securityLevel!=="loose"&&(a=Dt.sanitizeUrl(s)),e.split(",").forEach(function(n){G(n)!==void 0&&(et(n,()=>{window.open(a,"_self")}),Se.set(n,a))}),$e(e,"clickable")},"setLink"),$e=c(function(e,s){e.split(",").forEach(function(a){let n=G(a);n!==void 0&&n.classes.push(s)})},"setClass"),us=c(function(e,s,a){if(K().securityLevel!=="loose"||s===void 0)return;let n=[];if(typeof a=="string"){n=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let m=0;m<n.length;m++){let h=n[m].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),n[m]=h}}n.length===0&&n.push(e),G(e)!==void 0&&et(e,()=>{Et.runFunc(s,...n)})},"setClickFun"),et=c(function(e,s){Fe.push(function(){const a=document.querySelector(`[id="${e}"]`);a!==null&&a.addEventListener("click",function(){s()})},function(){const a=document.querySelector(`[id="${e}-text"]`);a!==null&&a.addEventListener("click",function(){s()})})},"pushFun"),ds=c(function(e,s,a){e.split(",").forEach(function(n){us(n,s,a)}),$e(e,"clickable")},"setClickEvent"),fs=c(function(e){Fe.forEach(function(s){s(e)})},"bindFunctions"),hs={getConfig:c(()=>K().gantt,"getConfig"),clear:Lt,setDateFormat:Bt,getDateFormat:Xt,enableInclusiveEndDates:Nt,endDatesAreInclusive:Yt,enableTopAxis:zt,topAxisEnabled:qt,setAxisFormat:Mt,getAxisFormat:Vt,setTickInterval:Wt,getTickInterval:Pt,setTodayMarker:Rt,getTodayMarker:Ot,setAccTitle:lt,getAccTitle:ct,setDiagramTitle:rt,getDiagramTitle:nt,setDisplayMode:jt,getDisplayMode:Ut,setAccDescription:at,getAccDescription:it,addSection:Jt,getSections:$t,getTasks:es,addTask:cs,findTaskById:G,addTaskOrg:ls,setIncludes:Gt,getIncludes:Ht,setExcludes:Kt,getExcludes:Qt,setClickEvent:ds,setLink:os,getLinks:Zt,bindFunctions:fs,parseDuration:Qe,isInvalidDate:He,setWeekday:ts,getWeekday:ss,setWeekend:is};function Ve(e,s,a){let n=!0;for(;n;)n=!1,a.forEach(function(r){const m="^\\s*"+r+"\\s*$",h=new RegExp(m);e[0].match(h)&&(s[r]=!0,e.shift(1),n=!0)})}c(Ve,"getTaskTags");var ks=c(function(){ke.debug("Something is calling, setConf, remove the call")},"setConf"),Xe={monday:xt,tuesday:bt,wednesday:Tt,thursday:vt,friday:pt,saturday:gt,sunday:yt},ms=c((e,s)=>{let a=[...e].map(()=>-1/0),n=[...e].sort((m,h)=>m.startTime-h.startTime||m.order-h.order),r=0;for(const m of n)for(let h=0;h<a.length;h++)if(m.startTime>=a[h]){a[h]=m.endTime,m.order=h+s,h>r&&(r=h);break}return r},"getMaxIntersections"),U,ys=c(function(e,s,a,n){const r=K().gantt,m=K().securityLevel;let h;m==="sandbox"&&(h=de("#i"+s));const V=m==="sandbox"?de(h.nodes()[0].contentDocument.body):de("body"),B=m==="sandbox"?h.nodes()[0].contentDocument:document,N=B.getElementById(s);U=N.parentElement.offsetWidth,U===void 0&&(U=1200),r.useWidth!==void 0&&(U=r.useWidth);const E=n.db.getTasks();let F=[];for(const y of E)F.push(y.type);F=ne(F);const z={};let P=2*r.topPadding;if(n.db.getDisplayMode()==="compact"||r.displayMode==="compact"){const y={};for(const p of E)y[p.section]===void 0?y[p.section]=[p]:y[p.section].push(p);let T=0;for(const p of Object.keys(y)){const v=ms(y[p],T)+1;T+=v,P+=v*(r.barHeight+r.barGap),z[p]=v}}else{P+=E.length*(r.barHeight+r.barGap);for(const y of F)z[y]=E.filter(T=>T.type===y).length}N.setAttribute("viewBox","0 0 "+U+" "+P);const R=V.select(`[id="${s}"]`),_=ot().domain([ut(E,function(y){return y.startTime}),dt(E,function(y){return y.endTime})]).rangeRound([0,U-r.leftPadding-r.rightPadding]);function J(y,T){const p=y.startTime,v=T.startTime;let k=0;return p>v?k=1:p<v&&(k=-1),k}c(J,"taskCompare"),E.sort(J),$(E,U,P),ft(R,P,U,r.useMaxWidth),R.append("text").text(n.db.getDiagramTitle()).attr("x",U/2).attr("y",r.titleTopMargin).attr("class","titleText");function $(y,T,p){const v=r.barHeight,k=v+r.barGap,x=r.topPadding,l=r.leftPadding,u=ht().domain([0,F.length]).range(["#00B9FA","#F95002"]).interpolate(kt);te(k,x,l,T,p,y,n.db.getExcludes(),n.db.getIncludes()),se(l,x,T,p),ee(y,k,x,l,v,u,T),ie(k,x),ae(l,x,T,p)}c($,"makeGantt");function ee(y,T,p,v,k,x,l){const f=[...new Set(y.map(o=>o.order))].map(o=>y.find(t=>t.order===o));R.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(o,t){return t=o.order,t*T+p-2}).attr("width",function(){return l-r.rightPadding/2}).attr("height",T).attr("class",function(o){for(const[t,D]of F.entries())if(o.type===D)return"section section"+t%r.numberSectionStyles;return"section section0"});const d=R.append("g").selectAll("rect").data(y).enter(),g=n.db.getLinks();if(d.append("rect").attr("id",function(o){return o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?_(o.startTime)+v+.5*(_(o.endTime)-_(o.startTime))-.5*k:_(o.startTime)+v}).attr("y",function(o,t){return t=o.order,t*T+p}).attr("width",function(o){return o.milestone?k:_(o.renderEndTime||o.endTime)-_(o.startTime)}).attr("height",k).attr("transform-origin",function(o,t){return t=o.order,(_(o.startTime)+v+.5*(_(o.endTime)-_(o.startTime))).toString()+"px "+(t*T+p+.5*k).toString()+"px"}).attr("class",function(o){const t="task";let D="";o.classes.length>0&&(D=o.classes.join(" "));let b=0;for(const[A,C]of F.entries())o.type===C&&(b=A%r.numberSectionStyles);let w="";return o.active?o.crit?w+=" activeCrit":w=" active":o.done?o.crit?w=" doneCrit":w=" done":o.crit&&(w+=" crit"),w.length===0&&(w=" task"),o.milestone&&(w=" milestone "+w),w+=b,w+=" "+D,t+w}),d.append("text").attr("id",function(o){return o.id+"-text"}).text(function(o){return o.task}).attr("font-size",r.fontSize).attr("x",function(o){let t=_(o.startTime),D=_(o.renderEndTime||o.endTime);o.milestone&&(t+=.5*(_(o.endTime)-_(o.startTime))-.5*k),o.milestone&&(D=t+k);const b=this.getBBox().width;return b>D-t?D+b+1.5*r.leftPadding>l?t+v-5:D+v+5:(D-t)/2+t+v}).attr("y",function(o,t){return t=o.order,t*T+r.barHeight/2+(r.fontSize/2-2)+p}).attr("text-height",k).attr("class",function(o){const t=_(o.startTime);let D=_(o.endTime);o.milestone&&(D=t+k);const b=this.getBBox().width;let w="";o.classes.length>0&&(w=o.classes.join(" "));let A=0;for(const[S,q]of F.entries())o.type===q&&(A=S%r.numberSectionStyles);let C="";return o.active&&(o.crit?C="activeCritText"+A:C="activeText"+A),o.done?o.crit?C=C+" doneCritText"+A:C=C+" doneText"+A:o.crit&&(C=C+" critText"+A),o.milestone&&(C+=" milestoneText"),b>D-t?D+b+1.5*r.leftPadding>l?w+" taskTextOutsideLeft taskTextOutside"+A+" "+C:w+" taskTextOutsideRight taskTextOutside"+A+" "+C+" width-"+b:w+" taskText taskText"+A+" "+C+" width-"+b}),K().securityLevel==="sandbox"){let o;o=de("#i"+s);const t=o.nodes()[0].contentDocument;d.filter(function(D){return g.has(D.id)}).each(function(D){var b=t.querySelector("#"+D.id),w=t.querySelector("#"+D.id+"-text");const A=b.parentNode;var C=t.createElement("a");C.setAttribute("xlink:href",g.get(D.id)),C.setAttribute("target","_top"),A.appendChild(C),C.appendChild(b),C.appendChild(w)})}}c(ee,"drawRects");function te(y,T,p,v,k,x,l,u){if(l.length===0&&u.length===0)return;let f,d;for(const{startTime:b,endTime:w}of x)(f===void 0||b<f)&&(f=b),(d===void 0||w>d)&&(d=w);if(!f||!d)return;if(L(d).diff(L(f),"year")>5){ke.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const g=n.db.getDateFormat(),i=[];let o=null,t=L(f);for(;t.valueOf()<=d;)n.db.isInvalidDate(t,g,l,u)?o?o.end=t:o={start:t,end:t}:o&&(i.push(o),o=null),t=t.add(1,"d");R.append("g").selectAll("rect").data(i).enter().append("rect").attr("id",function(b){return"exclude-"+b.start.format("YYYY-MM-DD")}).attr("x",function(b){return _(b.start)+p}).attr("y",r.gridLineStartPadding).attr("width",function(b){const w=b.end.add(1,"day");return _(w)-_(b.start)}).attr("height",k-T-r.gridLineStartPadding).attr("transform-origin",function(b,w){return(_(b.start)+p+.5*(_(b.end)-_(b.start))).toString()+"px "+(w*y+.5*k).toString()+"px"}).attr("class","exclude-range")}c(te,"drawExcludeDays");function se(y,T,p,v){let k=mt(_).tickSize(-v+T+r.gridLineStartPadding).tickFormat(Re(n.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const l=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||r.tickInterval);if(l!==null){const u=l[1],f=l[2],d=n.db.getWeekday()||r.weekday;switch(f){case"millisecond":k.ticks(qe.every(u));break;case"second":k.ticks(ze.every(u));break;case"minute":k.ticks(Ye.every(u));break;case"hour":k.ticks(Ne.every(u));break;case"day":k.ticks(Be.every(u));break;case"week":k.ticks(Xe[d].every(u));break;case"month":k.ticks(Oe.every(u));break}}if(R.append("g").attr("class","grid").attr("transform","translate("+y+", "+(v-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||r.topAxis){let u=_t(_).tickSize(-v+T+r.gridLineStartPadding).tickFormat(Re(n.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(l!==null){const f=l[1],d=l[2],g=n.db.getWeekday()||r.weekday;switch(d){case"millisecond":u.ticks(qe.every(f));break;case"second":u.ticks(ze.every(f));break;case"minute":u.ticks(Ye.every(f));break;case"hour":u.ticks(Ne.every(f));break;case"day":u.ticks(Be.every(f));break;case"week":u.ticks(Xe[g].every(f));break;case"month":u.ticks(Oe.every(f));break}}R.append("g").attr("class","grid").attr("transform","translate("+y+", "+T+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(se,"makeGrid");function ie(y,T){let p=0;const v=Object.keys(z).map(k=>[k,z[k]]);R.append("g").selectAll("text").data(v).enter().append(function(k){const x=k[0].split(wt.lineBreakRegex),l=-(x.length-1)/2,u=B.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",l+"em");for(const[f,d]of x.entries()){const g=B.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttribute("alignment-baseline","central"),g.setAttribute("x","10"),f>0&&g.setAttribute("dy","1em"),g.textContent=d,u.appendChild(g)}return u}).attr("x",10).attr("y",function(k,x){if(x>0)for(let l=0;l<x;l++)return p+=v[x-1][1],k[1]*y/2+p*y+T;else return k[1]*y/2+T}).attr("font-size",r.sectionFontSize).attr("class",function(k){for(const[x,l]of F.entries())if(k[0]===l)return"sectionTitle sectionTitle"+x%r.numberSectionStyles;return"sectionTitle"})}c(ie,"vertLabels");function ae(y,T,p,v){const k=n.db.getTodayMarker();if(k==="off")return;const x=R.append("g").attr("class","today"),l=new Date,u=x.append("line");u.attr("x1",_(l)+y).attr("x2",_(l)+y).attr("y1",r.titleTopMargin).attr("y2",v-r.titleTopMargin).attr("class","today"),k!==""&&u.attr("style",k.replace(/,/g,";"))}c(ae,"drawToday");function ne(y){const T={},p=[];for(let v=0,k=y.length;v<k;++v)Object.prototype.hasOwnProperty.call(T,y[v])||(T[y[v]]=!0,p.push(y[v]));return p}c(ne,"checkUnique")},"draw"),gs={setConf:ks,draw:ys},ps=c(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,"getStyles"),vs=ps,Ds={parser:Ft,db:hs,renderer:gs,styles:vs};export{Ds as diagram};
