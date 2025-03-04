var p={exports:{}},v;function F(){return v||(v=1,function(_,b){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,s,k){var d=o("../lib/oop"),m=o("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};d.inherits(l,m),s.JsonHighlightRules=l}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(o,s,k){var d=o("../range").Range,m=function(){};(function(){this.checkOutdent=function(l,u){return/^\s+$/.test(l)?/^\s*\}/.test(u):!1},this.autoOutdent=function(l,u){var e=l.getLine(u),a=e.match(/^(\s*\})/);if(!a)return 0;var n=a[1].length,i=l.findMatchingBracket({row:u,column:n});if(!i||i.row==u)return 0;var t=this.$getIndent(l.getLine(i.row));l.replace(new d(u,0,u,n-1),t)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(m.prototype),s.MatchingBraceOutdent=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,s,k){var d=o("../../lib/oop"),m=o("../../range").Range,l=o("./fold_mode").FoldMode,u=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(u,l),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,a,n){var i=e.getLine(n);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var t=this._getFoldWidgetBase(e,a,n);return!t&&this.startRegionRe.test(i)?"start":t},this.getFoldWidgetRange=function(e,a,n,i){var t=e.getLine(n);if(this.startRegionRe.test(t))return this.getCommentRegionBlock(e,t,n);var r=t.match(this.foldingStartMarker);if(r){var c=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,c);var g=e.getCommentFoldRange(n,c+r[0].length,1);return g&&!g.isMultiLine()&&(i?g=this.getSectionRange(e,n):a!="all"&&(g=null)),g}if(a!=="markbegin"){var r=t.match(this.foldingStopMarker);if(r){var c=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],n,c):e.getCommentFoldRange(n,c,-1)}}},this.getSectionRange=function(e,a){var n=e.getLine(a),i=n.search(/\S/),t=a,c=n.length;a=a+1;for(var g=a,r=e.getLength();++a<r;){n=e.getLine(a);var f=n.search(/\S/);if(f!==-1){if(i>f)break;var h=this.getFoldWidgetRange(e,"all",a);if(h){if(h.start.row<=t)break;if(h.isMultiLine())a=h.end.row;else if(i==f)break}g=a}}return new m(t,c,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,a,n){for(var i=a.search(/\s*$/),t=e.getLength(),c=n,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++n<t;){a=e.getLine(n);var f=g.exec(a);if(f&&(f[1]?r--:r++,!r))break}var h=n;if(h>c)return new m(c,i,h,a.length)}}).call(u.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(o,s,k){var d=o("../lib/oop"),m=o("./text").Mode,l=o("./json_highlight_rules").JsonHighlightRules,u=o("./matching_brace_outdent").MatchingBraceOutdent,e=o("./folding/cstyle").FoldMode,a=o("../worker/worker_client").WorkerClient,n=function(){this.HighlightRules=l,this.$outdent=new u,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};d.inherits(n,m),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(i,t,c){var g=this.$getIndent(t);if(i=="start"){var r=t.match(/^.*[\{\(\[]\s*$/);r&&(g+=c)}return g},this.checkOutdent=function(i,t,c){return this.$outdent.checkOutdent(t,c)},this.autoOutdent=function(i,t,c){this.$outdent.autoOutdent(t,c)},this.createWorker=function(i){var t=new a(["ace"],"ace/mode/json_worker","JsonWorker");return t.attachToDocument(i.getDocument()),t.on("annotate",function(c){i.setAnnotations(c.data)}),t.on("terminate",function(){i.clearAnnotations()}),t},this.$id="ace/mode/json"}).call(n.prototype),s.Mode=n}),function(){ace.require(["ace/mode/json"],function(o){_&&(_.exports=o)})}()}(p)),p.exports}F();var A={exports:{}},x;function R(){return x||(x=1,function(_,b){ace.define("ace/theme/monokai-css",["require","exports","module"],function(o,s,k){k.exports=`.ace-monokai .ace_gutter {
  background: #2F3129;
  color: #8F908A
}

.ace-monokai .ace_print-margin {
  width: 1px;
  background: #555651
}

.ace-monokai {
  background-color: #272822;
  color: #F8F8F2
}

.ace-monokai .ace_cursor {
  color: #F8F8F0
}

.ace-monokai .ace_marker-layer .ace_selection {
  background: #49483E
}

.ace-monokai.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
}

.ace-monokai .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-monokai .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483E
}

.ace-monokai .ace_marker-layer .ace_active-line {
  background: #202020
}

.ace-monokai .ace_gutter-active-line {
  background-color: #272727
}

.ace-monokai .ace_marker-layer .ace_selected-word {
  border: 1px solid #49483E
}

.ace-monokai .ace_invisible {
  color: #52524d
}

.ace-monokai .ace_entity.ace_name.ace_tag,
.ace-monokai .ace_keyword,
.ace-monokai .ace_meta.ace_tag,
.ace-monokai .ace_storage {
  color: #F92672
}

.ace-monokai .ace_punctuation,
.ace-monokai .ace_punctuation.ace_tag {
  color: #fff
}

.ace-monokai .ace_constant.ace_character,
.ace-monokai .ace_constant.ace_language,
.ace-monokai .ace_constant.ace_numeric,
.ace-monokai .ace_constant.ace_other {
  color: #AE81FF
}

.ace-monokai .ace_invalid {
  color: #F8F8F0;
  background-color: #F92672
}

.ace-monokai .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #AE81FF
}

.ace-monokai .ace_support.ace_constant,
.ace-monokai .ace_support.ace_function {
  color: #66D9EF
}

.ace-monokai .ace_fold {
  background-color: #A6E22E;
  border-color: #F8F8F2
}

.ace-monokai .ace_storage.ace_type,
.ace-monokai .ace_support.ace_class,
.ace-monokai .ace_support.ace_type {
  font-style: italic;
  color: #66D9EF
}

.ace-monokai .ace_entity.ace_name.ace_function,
.ace-monokai .ace_entity.ace_other,
.ace-monokai .ace_entity.ace_other.ace_attribute-name,
.ace-monokai .ace_variable {
  color: #A6E22E
}

.ace-monokai .ace_variable.ace_parameter {
  font-style: italic;
  color: #FD971F
}

.ace-monokai .ace_string {
  color: #E6DB74
}

.ace-monokai .ace_comment {
  color: #75715E
}

.ace-monokai .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}

.ace-monokai .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/monokai",["require","exports","module","ace/theme/monokai-css","ace/lib/dom"],function(o,s,k){s.isDark=!0,s.cssClass="ace-monokai",s.cssText=o("./monokai-css");var d=o("../lib/dom");d.importCssString(s.cssText,s.cssClass,!1)}),function(){ace.require(["ace/theme/monokai"],function(o){_&&(_.exports=o)})}()}(A)),A.exports}R();
