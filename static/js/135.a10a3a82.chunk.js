(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[135],{75135:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var o=t(72791),i=t(52007),r=function(){return r=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},r.apply(this,arguments)},a={onActivate:i.func,onAddUndo:i.func,onBeforeAddUndo:i.func,onBeforeExecCommand:i.func,onBeforeGetContent:i.func,onBeforeRenderUI:i.func,onBeforeSetContent:i.func,onBeforePaste:i.func,onBlur:i.func,onChange:i.func,onClearUndos:i.func,onClick:i.func,onContextMenu:i.func,onCopy:i.func,onCut:i.func,onDblclick:i.func,onDeactivate:i.func,onDirty:i.func,onDrag:i.func,onDragDrop:i.func,onDragEnd:i.func,onDragGesture:i.func,onDragOver:i.func,onDrop:i.func,onExecCommand:i.func,onFocus:i.func,onFocusIn:i.func,onFocusOut:i.func,onGetContent:i.func,onHide:i.func,onInit:i.func,onKeyDown:i.func,onKeyPress:i.func,onKeyUp:i.func,onLoadContent:i.func,onMouseDown:i.func,onMouseEnter:i.func,onMouseLeave:i.func,onMouseMove:i.func,onMouseOut:i.func,onMouseOver:i.func,onMouseUp:i.func,onNodeChange:i.func,onObjectResizeStart:i.func,onObjectResized:i.func,onObjectSelected:i.func,onPaste:i.func,onPostProcess:i.func,onPostRender:i.func,onPreProcess:i.func,onProgressState:i.func,onRedo:i.func,onRemove:i.func,onReset:i.func,onSaveContent:i.func,onSelectionChange:i.func,onSetAttrib:i.func,onSetContent:i.func,onShow:i.func,onSubmit:i.func,onUndo:i.func,onVisualAid:i.func,onSkinLoadError:i.func,onThemeLoadError:i.func,onModelLoadError:i.func,onPluginLoadError:i.func,onIconsLoadError:i.func,onLanguageLoadError:i.func},s=r({apiKey:i.string,id:i.string,inline:i.bool,init:i.object,initialValue:i.string,onEditorChange:i.func,value:i.string,tagName:i.string,cloudChannel:i.string,plugins:i.oneOfType([i.string,i.array]),toolbar:i.oneOfType([i.string,i.array]),disabled:i.bool,textareaName:i.string,tinymceScriptSrc:i.string,rollback:i.oneOfType([i.number,i.oneOf([!1])]),scriptLoading:i.shape({async:i.bool,defer:i.bool,delay:i.number})},a),c=function(n){return"function"===typeof n},u=function(n){return n in a},l=function(n){return n.substr(2)},d=function(n,e,t,o,i){return function(n,e,t,o,i,r,a){var s=Object.keys(i).filter(u),c=Object.keys(r).filter(u),d=s.filter((function(n){return void 0===r[n]})),p=c.filter((function(n){return void 0===i[n]}));d.forEach((function(n){var e=l(n),o=a[e];t(e,o),delete a[e]})),p.forEach((function(t){var i=o(n,t),r=l(t);a[r]=i,e(r,i)}))}(i,n.on.bind(n),n.off.bind(n),(function(e,t){return function(o){var i;return null===(i=e(t))||void 0===i?void 0:i(o,n)}}),e,t,o)},p=0,f=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++p+String(e)},h=function(n){return null!==n&&("textarea"===n.tagName.toLowerCase()||"input"===n.tagName.toLowerCase())},v=function(n){return"undefined"===typeof n||""===n?[]:Array.isArray(n)?n:n.split(" ")},g=function(n,e){void 0!==n&&(null!=n.mode&&"object"===typeof n.mode&&"function"===typeof n.mode.set?n.mode.set(e):n.setMode(e))},y=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},m=function(){var n=y();return{load:function(e,t,o,i,r,a){var s=function(){return function(n,e,t,o,i,r){var a=e.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=n,a.src=t,a.async=o,a.defer=i,a.addEventListener("load",(function n(){a.removeEventListener("load",n),r()})),e.head&&e.head.appendChild(a)}(n.scriptId,e,t,o,i,(function(){n.listeners.forEach((function(n){return n()})),n.scriptLoaded=!0}))};n.scriptLoaded?a():(n.listeners.push(a),n.scriptLoading||(n.scriptLoading=!0,r>0?setTimeout(s,r):s()))},reinitialize:function(){n=y()}}}(),b=function(){var n="undefined"!==typeof window?window:t.g;return n&&n.tinymce?n.tinymce:null},C=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),k=function(){return k=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},k.apply(this,arguments)},E=function(){var n,e,t;return(null===(t=null===(e=null===(n=b())||void 0===n?void 0:n.Env)||void 0===e?void 0:e.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},w=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},S=function(n){function e(e){var t,i,r,a=this;return(a=n.call(this,e)||this).rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var n=a.editor,e=a.props.value;n&&e&&e!==a.currentContent&&n.undoManager.ignore((function(){if(n.setContent(e),a.valueCursor&&(!a.inline||n.hasFocus()))try{n.selection.moveToBookmark(a.valueCursor)}catch(t){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(n){if(void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(!a.inline||a.editor.hasFocus))try{a.valueCursor=a.editor.selection.getBookmark(3)}catch(e){}},a.handleBeforeInputSpecial=function(n){"Enter"!==n.key&&"Backspace"!==n.key&&"Delete"!==n.key||a.handleBeforeInput(n)},a.handleEditorChange=function(n){var e=a.editor;if(e&&e.initialized){var t=e.getContent();void 0!==a.props.value&&a.props.value!==t&&!1!==a.props.rollback&&(a.rollbackTimer||(a.rollbackTimer=window.setTimeout(a.rollbackChange,"number"===typeof a.props.rollback?a.props.rollback:200))),t!==a.currentContent&&(a.currentContent=t,c(a.props.onEditorChange)&&a.props.onEditorChange(t,e))}},a.handleEditorChangeSpecial=function(n){"Backspace"!==n.key&&"Delete"!==n.key||a.handleEditorChange(n)},a.initialise=function(n){var e,t,o;void 0===n&&(n=0);var i=a.elementRef.current;if(i)if(function(n){if(!("isConnected"in Node.prototype)){for(var e=n,t=n.parentNode;null!=t;)t=(e=t).parentNode;return e===n.ownerDocument}return n.isConnected}(i)){var r=b();if(!r)throw new Error("tinymce should have been loaded into global scope");var s,u,l=k(k({},a.props.init),{selector:void 0,target:i,readonly:a.props.disabled,inline:a.inline,plugins:(s=null===(e=a.props.init)||void 0===e?void 0:e.plugins,u=a.props.plugins,v(s).concat(v(u))),toolbar:null!==(t=a.props.toolbar)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.toolbar,setup:function(n){a.editor=n,a.bindHandlers({}),a.inline&&!h(i)&&n.once("PostRender",(function(e){n.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&c(a.props.init.setup)&&a.props.init.setup(n)},init_instance_callback:function(n){var e,t,o=a.getInitialValue();a.currentContent=null!==(e=a.currentContent)&&void 0!==e?e:n.getContent(),a.currentContent!==o&&(a.currentContent=o,n.setContent(o),n.undoManager.clear(),n.undoManager.add(),n.setDirty(!1));var i=null!==(t=a.props.disabled)&&void 0!==t&&t;g(a.editor,i?"readonly":"design"),a.props.init&&c(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(n)}});a.inline||(i.style.visibility=""),h(i)&&(i.value=a.getInitialValue()),r.init(l)}else if(0===n)setTimeout((function(){return a.initialise(1)}),1);else{if(!(n<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return a.initialise(n+1)}),100)}},a.id=a.props.id||f("tiny-react"),a.elementRef=o.createRef(),a.inline=null!==(r=null!==(t=a.props.inline)&&void 0!==t?t:null===(i=a.props.init)||void 0===i?void 0:i.inline)&&void 0!==r&&r,a.boundHandlers={},a}return C(e,n),e.prototype.componentDidUpdate=function(n){var e,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(n),this.editor.initialized)){if(this.currentContent=null!==(e=this.currentContent)&&void 0!==e?e:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==n.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var i=this.editor;i.undoManager.transact((function(){var n;if(!o.inline||i.hasFocus())try{n=i.selection.getBookmark(3)}catch(s){}var e=o.valueCursor;if(i.setContent(o.props.value),!o.inline||i.hasFocus())for(var t=0,r=[n,e];t<r.length;t++){var a=r[t];if(a)try{i.selection.moveToBookmark(a),o.valueCursor=a;break}catch(s){}}}))}if(this.props.disabled!==n.disabled){var r=null!==(t=this.props.disabled)&&void 0!==t&&t;g(this.editor,r?"readonly":"design")}}},e.prototype.componentDidMount=function(){var n,e,t,o,i,r;null!==b()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&m.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(e=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.async)&&void 0!==e&&e,null!==(o=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer)&&void 0!==o&&o,null!==(r=null===(i=this.props.scriptLoading)||void 0===i?void 0:i.delay)&&void 0!==r?r:0,this.initialise)},e.prototype.componentWillUnmount=function(){var n=this,e=this.editor;e&&(e.off(E(),this.handleEditorChange),e.off(w(),this.handleBeforeInput),e.off("keypress",this.handleEditorChangeSpecial),e.off("keydown",this.handleBeforeInputSpecial),e.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){e.off(t,n.boundHandlers[t])})),this.boundHandlers={},e.remove(),this.editor=void 0)},e.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},e.prototype.renderInline=function(){var n=this.props.tagName,e=void 0===n?"div":n;return o.createElement(e,{ref:this.elementRef,id:this.id})},e.prototype.renderIframe=function(){return o.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},e.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var n=this.props.cloudChannel,e=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(e,"/tinymce/").concat(n,"/tinymce.min.js")},e.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},e.prototype.bindHandlers=function(n){var e=this;if(void 0!==this.editor){d(this.editor,n,this.props,this.boundHandlers,(function(n){return e.props[n]}));var t=function(n){return void 0!==n.onEditorChange||void 0!==n.value},o=t(n),i=t(this.props);!o&&i?(this.editor.on(E(),this.handleEditorChange),this.editor.on(w(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!i&&(this.editor.off(E(),this.handleEditorChange),this.editor.off(w(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},e.propTypes=s,e.defaultProps={cloudChannel:"6"},e}(o.Component),O=t(80184),T=function(){return(0,O.jsx)(S,{apiKey:"8dlna1bwtkwflbvg5binktln4qju91ia2er3jzinnl15lfec",initialValue:"<p>This is the initial content of the editor.</p>",onEditorChange:function(n,e){console.log(n),console.log(e)},init:{height:"100%",menubar:!0,language:"zh_CN",plugins:["a11ychecker","advcode","casechange","export","formatpainter","image","editimage","linkchecker","autolink","lists","checklist","media","mediaembed","pageembed","permanentpen","powerpaste","table","advtable","tableofcontents","tinymcespellchecker"],toolbar:[{name:"styles",items:["styles"]},{name:"formatting",items:["bold","italic"]},{name:"alignment",items:["alignleft","aligncenter","alignright","alignjustify"]},{name:"indentation",items:["outdent","indent"]},{name:"other",items:["checklist","editimage"]}]}})}},80888:function(n,e,t){"use strict";var o=t(79047);function i(){}function r(){}r.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,r,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return t.PropTypes=t,t}},52007:function(n,e,t){n.exports=t(80888)()},79047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=135.a10a3a82.chunk.js.map