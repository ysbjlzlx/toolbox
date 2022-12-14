"use strict";(self.webpackChunktoolbox=self.webpackChunktoolbox||[]).push([[296],{90610:function(t,n,e){var i=e(7161),o=e(84280),a=e(55151),r=e(44031),s=e(22522),u=e(63663),l=e(20823),c=e(72075),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function p(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var f={entering:{opacity:1,transform:p(1)},entered:{opacity:1,transform:"none"}},v="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),h=a.forwardRef((function(t,n){var e=t.addEndListener,h=t.appear,E=void 0===h||h,m=t.children,x=t.easing,g=t.in,y=t.onEnter,b=t.onEntered,Z=t.onEntering,C=t.onExit,S=t.onExited,k=t.onExiting,T=t.style,R=t.timeout,N=void 0===R?"auto":R,O=t.TransitionComponent,D=void 0===O?r.ZP:O,M=(0,o.Z)(t,d),w=a.useRef(),P=a.useRef(),q=(0,s.Z)(),L=a.useRef(null),I=(0,l.Z)(L,m.ref,n),j=function(t){return function(n){if(t){var e=L.current;void 0===n?t(e):t(e,n)}}},A=j(Z),F=j((function(t,n){(0,u.n)(t);var e,i=(0,u.C)({style:T,timeout:N,easing:x},{mode:"enter"}),o=i.duration,a=i.delay,r=i.easing;"auto"===N?(e=q.transitions.getAutoHeightDuration(t.clientHeight),P.current=e):e=o,t.style.transition=[q.transitions.create("opacity",{duration:e,delay:a}),q.transitions.create("transform",{duration:v?e:.666*e,delay:a,easing:r})].join(","),y&&y(t,n)})),H=j(b),U=j(k),G=j((function(t){var n,e=(0,u.C)({style:T,timeout:N,easing:x},{mode:"exit"}),i=e.duration,o=e.delay,a=e.easing;"auto"===N?(n=q.transitions.getAutoHeightDuration(t.clientHeight),P.current=n):n=i,t.style.transition=[q.transitions.create("opacity",{duration:n,delay:o}),q.transitions.create("transform",{duration:v?n:.666*n,delay:v?o:o||.333*n,easing:a})].join(","),t.style.opacity=0,t.style.transform=p(.75),C&&C(t)})),X=j(S);return a.useEffect((function(){return function(){clearTimeout(w.current)}}),[]),(0,c.jsx)(D,(0,i.Z)({appear:E,in:g,nodeRef:L,onEnter:F,onEntered:H,onEntering:A,onExit:G,onExited:X,onExiting:U,addEndListener:function(t){"auto"===N&&(w.current=setTimeout(t,P.current||0)),e&&e(L.current,t)},timeout:"auto"===N?null:N},M,{children:function(t,n){return a.cloneElement(m,(0,i.Z)({style:(0,i.Z)({opacity:0,transform:p(.75),visibility:"exited"!==t||g?void 0:"hidden"},f[t],T,m.props.style),ref:I},n))}}))}));h.muiSupportAuto=!0,n.Z=h},34861:function(t,n,e){e.d(n,{Z:function(){return x}});var i=e(84280),o=e(7161),a=e(55151),r=e(85735),s=e(76592),u=e(32959),l=e(35294),c=function(t){return((t<1?5.11916*Math.pow(t,2):4.5*Math.log(t+1)+2)/100).toFixed(2)},d=e(15498),p=e(85299),f=e(61443);function v(t){return(0,f.Z)("MuiPaper",t)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=e(72075),E=["className","component","elevation","square","variant"],m=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n[e.variant],!e.square&&n.rounded,"elevation"===e.variant&&n["elevation".concat(e.elevation)]]}})((function(t){var n,e=t.theme,i=t.ownerState;return(0,o.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!i.square&&{borderRadius:e.shape.borderRadius},"outlined"===i.variant&&{border:"1px solid ".concat((e.vars||e).palette.divider)},"elevation"===i.variant&&(0,o.Z)({boxShadow:(e.vars||e).shadows[i.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",c(i.elevation)),", ").concat((0,u.Fq)("#fff",c(i.elevation)),")")},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[i.elevation]}))})),x=a.forwardRef((function(t,n){var e=(0,d.Z)({props:t,name:"MuiPaper"}),a=e.className,u=e.component,l=void 0===u?"div":u,c=e.elevation,p=void 0===c?1:c,f=e.square,x=void 0!==f&&f,g=e.variant,y=void 0===g?"elevation":g,b=(0,i.Z)(e,E),Z=(0,o.Z)({},e,{component:l,elevation:p,square:x,variant:y}),C=function(t){var n=t.square,e=t.elevation,i=t.variant,o=t.classes,a={root:["root",i,!n&&"rounded","elevation"===i&&"elevation".concat(e)]};return(0,s.Z)(a,v,o)}(Z);return(0,h.jsx)(m,(0,o.Z)({as:l,ownerState:Z,className:(0,r.Z)(C.root,a),ref:n},b))}))},22522:function(t,n,e){e.d(n,{Z:function(){return a}});e(55151);var i=e(52497),o=e(50667);function a(){return(0,i.Z)(o.Z)}},63663:function(t,n,e){e.d(n,{C:function(){return o},n:function(){return i}});var i=function(t){return t.scrollTop};function o(t,n){var e,i,o=t.timeout,a=t.easing,r=t.style,s=void 0===r?{}:r;return{duration:null!=(e=s.transitionDuration)?e:"number"===typeof o?o:o[n.mode]||0,easing:null!=(i=s.transitionTimingFunction)?i:"object"===typeof a?a[n.mode]:a,delay:s.transitionDelay}}},86032:function(t,n,e){function i(t){return t&&t.ownerDocument||document}e.d(n,{Z:function(){return i}})},44031:function(t,n,e){e.d(n,{ZP:function(){return E}});var i=e(84280),o=e(34570),a=e(55151),r=e(13341),s=!1,u=e(13539),l="unmounted",c="exited",d="entering",p="entered",f="exiting",v=function(t){function n(n,e){var i;i=t.call(this,n,e)||this;var o,a=e&&!e.isMounting?n.enter:n.appear;return i.appearStatus=null,n.in?a?(o=c,i.appearStatus=d):o=p:o=n.unmountOnExit||n.mountOnEnter?l:c,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===l?{status:c}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==d&&e!==p&&(n=d):e!==d&&e!==p||(n=f)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,i=this.props.timeout;return t=n=e=i,null!=i&&"number"!==typeof i&&(t=i.exit,n=i.enter,e=void 0!==i.appear?i.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===d){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},e.performEnter=function(t){var n=this,e=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[r.findDOMNode(this),i],a=o[0],u=o[1],l=this.getTimeouts(),c=i?l.appear:l.enter;!t&&!e||s?this.safeSetState({status:p},(function(){n.props.onEntered(a)})):(this.props.onEnter(a,u),this.safeSetState({status:d},(function(){n.props.onEntering(a,u),n.onTransitionEnd(c,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(a,u)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),i=this.props.nodeRef?void 0:r.findDOMNode(this);n&&!s?(this.props.onExit(i),this.safeSetState({status:f},(function(){t.props.onExiting(i),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:c},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:c},(function(){t.props.onExited(i)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(i){e&&(e=!1,n.nextCallback=null,t(i))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:r.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(e&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===l)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,i.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(u.Z.Provider,{value:null},"function"===typeof e?e(t,o):a.cloneElement(a.Children.only(e),o))},n}(a.Component);function h(){}v.contextType=u.Z,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},v.UNMOUNTED=l,v.EXITED=c,v.ENTERING=d,v.ENTERED=p,v.EXITING=f;var E=v}}]);
//# sourceMappingURL=296.c05a2328.chunk.js.map