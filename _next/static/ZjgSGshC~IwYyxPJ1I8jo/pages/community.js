(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(0),o=n.n(i),s=n(1);t.a=function(e){var t=e.children,n=e.center,a=e.margin,i=e.color,l=void 0===i?s.e.lightColor:i,c=e.id,u=void 0===c?"":c,p=e.style,m=void 0===p?"":p,f=e.mStyle,d=void 0===f?"":f,y=e.sStyle,h=void 0===y?"":y;return o.a.createElement("h3",{id:u,className:r.a.dynamic([["1380750410",[l,a?"margin: ".concat(a,";"):"margin: 0;",n?"text-align: center;":"",m,d,h]]])},t,o.a.createElement(r.a,{styleId:"1380750410",css:["h3.__jsx-style-dynamic-selector{font-size:20px;font-weight:600;line-height:1.25;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;color:".concat(l,";").concat(a?"margin: ".concat(a,";"):"margin: 0;"," ").concat(n?"text-align: center;":""," ").concat(m,";}"),"@media only screen and (max-width:1024px){h3.__jsx-style-dynamic-selector{text-align:center;".concat(d,";}}"),"@media only screen and (max-width:554px){h3.__jsx-style-dynamic-selector{text-align:center;".concat(h,";}}")],dynamic:[l,a?"margin: ".concat(a,";"):"margin: 0;",n?"text-align: center;":"",m,d,h]}))}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e,t,n){for(var a=!0;a;){var r=e,i=t,o=n;a=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(o)}var c=Object.getPrototypeOf(r);if(null===c)return;e=c,t=i,n=o,a=!0,s=c=void 0}};function i(e){return e&&e.__esModule?e:{default:e}}var o=n(0),s=i(o),l=i(n(45)),c=i(n(46)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout(function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)},this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)})}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)})}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return s.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}();t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:c.default.string,animateOut:c.default.string,offset:c.default.number,duration:c.default.number,delay:c.default.number,initiallyVisible:c.default.bool,animateOnce:c.default.bool,style:c.default.object,scrollableParentSelector:c.default.string,className:c.default.string,animatePreScroll:c.default.bool},e.exports=t.default},23:function(e,t,n){"use strict";var a=n(2),r=n.n(a),i=n(0),o=n.n(i),s=n(1);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.a=function(e){var t=e.uri,n=e.title,a=e.width,i=e.margin,u=e.style,p=void 0===u?"":u,m=e.mStyle,f=void 0===m?"":m,d=e.sStyle,y=void 0===d?"":d,h=c(e,["uri","title","width","margin","style","mStyle","sStyle"]);return o.a.createElement("a",l({href:t},h,{className:r.a.dynamic([["359948810",[a||"100%",p,i?"margin: ".concat(i,";"):"",s.e.primaryColor,s.e.darkLight,f,y]]])+" "+(null!=h.className&&h.className||"")}),n,o.a.createElement(r.a,{styleId:"359948810",css:["a.__jsx-style-dynamic-selector{width:".concat(a||"100%",";text-align:center;border-radius:28px;border:solid 1px #90cfbe;padding:17px 20px 15px;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-weight:600;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#90cfbe;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;").concat(p," ").concat(i?"margin: ".concat(i,";"):"",";}"),"a.__jsx-style-dynamic-selector:hover{background-color:".concat(s.e.primaryColor,";color:").concat(s.e.darkLight,";}"),"@media only screen and (max-width:1024px){a.__jsx-style-dynamic-selector{".concat(f,";}}"),"@media only screen and (max-width:554px){a.__jsx-style-dynamic-selector{".concat(y,";}}")],dynamic:[a||"100%",p,i?"margin: ".concat(i,";"):"",s.e.primaryColor,s.e.darkLight,f,y]}))}},277:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(430)),i=a(n(4)),o=n(0),s=a(o),l=a(n(431));function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e,t){var n=t.decimal,a=t.decimals,i=t.duration,o=t.easingFn,s=t.end,l=t.formattingFn,c=t.prefix,u=t.separator,p=t.start,m=t.suffix,f=t.useEasing;return new r(e,p,s,a,i,{decimal:n,easingFn:o,formattingFn:l,separator:u,prefix:c,suffix:m,useEasing:f,useGrouping:!!u})},h=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return a=this,r=(e=p(t)).call.apply(e,[this].concat(o)),n=!r||"object"!=typeof r&&"function"!=typeof r?f(a):r,u(f(f(n)),"createInstance",function(){return"function"==typeof n.props.children&&l(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),y(n.containerRef.current,n.props)}),u(f(f(n)),"pauseResume",function(){var e=f(f(n)),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})}),u(f(f(n)),"reset",function(){var e=f(f(n)),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})}),u(f(f(n)),"restart",function(){n.reset(),n.start()}),u(f(f(n)),"start",function(){var e=f(f(n)),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,o=n.props,s=o.delay,l=o.onEnd,c=o.onStart,u=function(){return n.instance.start(function(){return l({pauseResume:t,reset:a,start:r,update:i})})};s>0?n.timeoutId=setTimeout(u,1e3*s):u(),c({pauseResume:t,reset:a,update:i})}),u(f(f(n)),"update",function(e){var t=f(f(n)),a=t.pauseResume,r=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:i})}),u(f(f(n)),"containerRef",s.createRef()),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){return this.props.duration!==e.duration||this.props.end!==e.end||this.props.start!==e.start||this.props.redraw}},{key:"componentDidUpdate",value:function(e){this.props.duration===e.duration&&this.props.start===e.start||(this.instance=this.createInstance(),this.start()),this.props.end!==e.end&&(this.instance.reset(),this.instance.update(this.props.end))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,o=this.reset,l=this.restart,c=this.update;return"function"==typeof t?t({countUpRef:r,pauseResume:i,reset:o,start:l,update:c}):s.createElement("span",{className:n,ref:r,style:a})}}])&&c(n.prototype,a),r&&c(n,r),t}();u(h,"propTypes",{decimal:i.string,decimals:i.number,delay:i.number,easingFn:i.func,end:i.number.isRequired,formattingFn:i.func,onEnd:i.func,onStart:i.func,prefix:i.string,redraw:i.bool,separator:i.string,start:i.number,suffix:i.string,style:i.object,useEasing:i.bool}),u(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,suffix:"",style:void 0,useEasing:!0});t.default=h,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){u(e,t,n[t])})}return e}({},h.defaultProps,e),n=t.start,a=t.formattingFn,r=d(o.useState("function"==typeof a?a(n):n),2),i=r[0],s=r[1],l=o.useRef(null),c=function(){var e=l.current;if(null!==e)return e;var n=function(){var e=y(-1,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return l.current=n,n},p=function(){var e=t.onReset;c().reset(),e({pauseResume:f,start:m,update:g})},m=function e(){var n=t.onStart,a=t.onEnd;c().reset(),c().start(function(){a({pauseResume:f,reset:p,start:e,update:g})}),n({pauseResume:f,reset:p,update:g})},f=function(){var e=t.onPauseResume;c().pauseResume(),e({reset:p,start:m,update:g})},g=function(e){var n=t.onUpdate;c().update(e),n({pauseResume:f,reset:p,start:m})};return o.useEffect(function(){var e=t.delay,n=t.onStart,a=t.onEnd,r=setTimeout(function(){n({pauseResume:f,reset:p,update:g}),c().start(function(){clearTimeout(r),a({pauseResume:f,reset:p,start:m,update:g})})},1e3*e);return p},[]),{countUp:i,start:m,pauseResume:f,reset:p,update:g}}},30:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(5),o=n(9),s=n.n(o),l=n(2),c=n.n(l),u=n(3);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,a,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(a,r)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return a=this,r=(e=d(t)).call.apply(e,[this].concat(o)),n=!r||"object"!==p(r)&&"function"!=typeof r?h(a):r,g(h(h(n)),"state",{email:"",isFailed:!1,isSucceed:!1}),g(h(h(n)),"handleChangeInput",function(e){var t=e.target,a=t.name,r=t.value;n.setState(g({},a,r))}),g(h(h(n)),"handleSubmit",function(){var e,t=(e=s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("email",n.state.email),n.setState({isFailed:!1,isSucceed:!1}),e.prev=4,e.next=7,fetch("https://script.google.com/macros/s/AKfycbwVfb9acsqEuPnYZlgRBOUng74nnNd6a4NGmJPCRXtp5HOBTMeJ/exec",{body:a,method:"POST"});case 7:n.setState({email:"",isSucceed:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0),n.setState({isFailed:!0});case 14:case"end":return e.stop()}},e,this,[[4,10]])}),function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){m(i,a,r,o,s,"next",e)}function s(e){m(i,a,r,o,s,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}()),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props.t;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:"jsx-238096003"},this.state.isSucceed&&r.a.createElement("p",{className:"jsx-238096003 msg success"},"Subscribed successfully!"),this.state.isFailed&&r.a.createElement("p",{className:"jsx-238096003 msg error"},"Something went wrong, please try again later."),r.a.createElement("div",{className:"jsx-238096003 input-field"},r.a.createElement("input",{id:"email",type:"email",name:"email",placeholder:e("footer.stayinfo.email"),value:this.state.email,onChange:this.handleChangeInput,className:"jsx-238096003"}),r.a.createElement("input",{type:"submit",value:e("footer.stayinfo.subscribe"),className:"jsx-238096003 submit"}),r.a.createElement("input",{type:"submit",value:"→",className:"jsx-238096003 submit sm-submit"})),r.a.createElement(c.a,{styleId:"238096003",css:["form.jsx-238096003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".input-field.jsx-238096003{width:555px;height:60px;border-radius:30.5px;background-color:#d7f2ee;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","input.jsx-238096003{width:405px;height:60px;border-radius:30.5px;background-color:#d7f2ee;font-size:16px;padding:21px 30px;border:0;color:#222633;font-weight:normal;font-family:Montserrat;}","input.jsx-238096003:focus,textarea.jsx-238096003:focus{outline:none;}","textarea.jsx-238096003{height:80px;}",".submit.jsx-238096003{cursor:pointer;width:145px;height:50px;border-radius:30.5px;background-color:#90cfbe;font-size:16px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.5;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;text-align:center;color:#222633;padding:14px 30px;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}",".submit.jsx-238096003:hover{opacity:0.4;}",".msg.jsx-238096003{font-size:13px;font-weight:600;margin-top:3px;position:absolute;}",".success.jsx-238096003{color:#90cfbe;}",".error.jsx-238096003{color:#ef5757;}",".sm-submit.jsx-238096003{display:none;}","@media only screen and (max-width:1024px){.input-field.jsx-238096003{width:100%;}input.jsx-238096003{width:78%;}}","@media only screen and (max-width:554px){.input-field.jsx-238096003{width:315px;}input.jsx-238096003{width:220px;}.submit.jsx-238096003{display:none;}.sm-submit.jsx-238096003{display:block;margin-right:5px;}}"]}))}}])&&f(n.prototype,a),i&&f(n,i),t}(),x=Object(u.c)("footer")(b),v=n(1),w=n(11);t.a=Object(u.c)("footer")(function(e){var t=e.t;return r.a.createElement(i.a,{padding:"100px 0 50px",bgColor:"#1d202b",color:v.e.primaryColor},r.a.createElement(w.a,{center:!0,margin:"0 0 27px;",mStyle:"text-align: left;",sStyle:"text-align: left;"},t("footer.stayinfo")),r.a.createElement(x,null))})},413:function(e,t,n){__NEXT_REGISTER_PAGE("/community",function(){return e.exports=n(567),{page:e.exports.default}})},430:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,l=e<0;if(e=Math.abs(e).toFixed(s.decimals),t=(e+="").split("."),n=t[0],a=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(r=s.options.separator+r),r=n[o-i-1]+r;n=r}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return s.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return s.options.numerals[+e]})),(l?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var l in s.options)i.hasOwnProperty(l)&&null!==i[l]&&(s.options[l]=i[l]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,u=["webkit","moz","ms","o"],p=0;p<u.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[u[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[p]+"CancelAnimationFrame"]||window[u[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout(function(){e(n+a)},a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,a||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(r)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!o(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},431:function(e,t,n){"use strict";var a=function(){};e.exports=a},45:function(e,t,n){(function(t){var n="Expected a function",a=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=u||p||Function("return this")(),f=Object.prototype.toString,d=Math.max,y=Math.min,h=function(){return m.Date.now()};function g(e,t,a){var r,i,o,s,l,c,u=0,p=!1,m=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function g(t){var n=r,a=i;return r=i=void 0,u=t,s=e.apply(a,n)}function v(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-u>=o}function w(){var e=h();if(v(e))return E(e);l=setTimeout(w,function(e){var n=t-(e-c);return m?y(n,o-(e-u)):n}(e))}function E(e){return l=void 0,f&&r?g(e):(r=i=void 0,s)}function j(){var e=h(),n=v(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(w,t),p?g(e):s}(c);if(m)return l=setTimeout(w,t),g(c)}return void 0===l&&(l=setTimeout(w,t)),s}return t=x(t)||0,b(a)&&(p=!!a.leading,o=(m="maxWait"in a)?d(x(a.maxWait)||0,t):o,f="trailing"in a?!!a.trailing:f),j.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=i=l=void 0},j.flush=function(){return void 0===l?s:E(h())},j}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==r}(e))return a;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=s.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):o.test(e)?a:+e}e.exports=function(e,t,a){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(n);return b(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})}}).call(this,n(35))},46:function(e,t,n){e.exports=n(47)()},47:function(e,t,n){"use strict";var a=n(48);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},48:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},567:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),i=n(0),o=n.n(i),s=n(21),l=n(30),c=n(2),u=n.n(c),p=n(12),m=n.n(p),f=n(5),d=n(6),y=n(8),h=n(1),g=n(7),b=n(10),x=n(23),v=n(83),w=n.n(v),E=n(277),j=n.n(E),k=n(11),O=n(3),S=Object(O.c)("community")(function(e){var t=e.name,n=e.img,a=e.followerNum,r=e.uri;return o.a.createElement("div",{className:"jsx-1750458501"},o.a.createElement(j.a,{formattingFn:function(e){return"".concat((e/1e3).toFixed(1),"K")},start:0,end:a,delay:0},function(e){var t=e.countUpRef;return o.a.createElement("h2",{ref:t,className:"jsx-1750458501"})}),o.a.createElement("a",{href:r,className:"jsx-1750458501 footer"},o.a.createElement("img",{src:n,alt:t,className:"jsx-1750458501"}),o.a.createElement(k.a,{color:"#d7f2ee",margin:"0"},t)),o.a.createElement(w.a,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500",rel:"stylesheet",className:"jsx-1750458501"})),o.a.createElement(u.a,{styleId:"1750458501",css:["h2.jsx-1750458501{font-family:'IBM Plex Mono';font-size:80px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;-webkit-letter-spacing:normal;-moz-letter-spacing:normal;-ms-letter-spacing:normal;letter-spacing:normal;color:#90cfbe;margin:0 0 15px;}",".footer.jsx-1750458501{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","img.jsx-1750458501{margin-right:16px;}","@media only screen and (max-width:1024px){}","@media only screen and (max-width:554px){h2.jsx-1750458501{font-size:32px;}img.jsx-1750458501{display:none;}}"]}))}),V=n(14),P=Object(O.c)("community")(function(){return o.a.createElement(o.a.Fragment,null,V.i.map(function(e){var t=e.title,n=e.link,a=e.imgUri,r=e.followerNum;return o.a.createElement(S,{key:t,img:a,followerNum:r,name:t,uri:n})}))}),T=Object(O.c)("community")(function(e){var t=e.t;return o.a.createElement(f.a,{bgColor:h.e.dark,color:h.e.primaryColor,padding:"120px 0 120px"},o.a.createElement(d.a,{direction:"row",sStyle:"margin-bottom: 99px;"},o.a.createElement(b.a,{style:"align-items: center; display: none;",mStyle:"display: flex;"},o.a.createElement("img",{src:"/static/img-community@2x.png",className:"jsx-3348658700"})),o.a.createElement(b.a,null,o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(y.a,{margin:"0 0 15px"},t("community.title"))),o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,{margin:"0 0 60px",mStyle:"text-align: left;",sStyle:"text-align: left;"},t("community.description"))),o.a.createElement(x.a,{margin:"0",title:t("community.ambassador"),uri:"https://www.surveycake.com/s/w48yR"})),o.a.createElement(b.a,{flex:!0,style:"align-items: center;",mStyle:"display: none;"},o.a.createElement("img",{src:"/static/img-community@2x.png",className:"jsx-3348658700"}))),o.a.createElement(d.a,{direction:"row",style:"display: grid; grid-template-columns: auto auto auto auto;",mStyle:"grid-template-columns: auto auto; grid-gap: 60px 32px; margin-top: 60px;",sStyle:"grid-template-columns: auto auto; grid-gap: 30px 31px; margin-top: 60px;"},o.a.createElement(P,null)),o.a.createElement(u.a,{styleId:"3348658700",css:["img.jsx-3348658700{width:431px;height:398px;object-fit:contain;}","@media only screen and (max-width:1024px){img.jsx-3348658700{width:100%;}}"]}))}),_=Object(O.c)("community")(function(e){var t=e.t;return o.a.createElement(f.a,{bgColor:h.e.darkLight,color:h.e.primaryColor,padding:"120px 0 120px"},o.a.createElement(d.a,{direction:"row"},o.a.createElement(b.a,{flex:!0,mStyle:"align-items: center; margin-bottom: 60px;"},o.a.createElement("img",{src:"/static/img-miner.svg",className:"jsx-2922964110"})),o.a.createElement(b.a,null,o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement(y.a,{margin:"0 0 15px"},t("community.miner"))),o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement(g.a,{margin:"0 0 60px",mStyle:"text-align: left;"},t("community.miner.description"))))),o.a.createElement(u.a,{styleId:"2922964110",css:["img.jsx-2922964110{max-width:493px;width:100%;}"]}))}),R=Object(O.c)("community")(function(e){var t=e.t;return o.a.createElement(f.a,{bgColor:h.e.dark,color:h.e.primaryColor,padding:"120px 0 120px"},o.a.createElement(y.a,{center:!0,margin:"0 0 60px"},t("community.ambassador")),o.a.createElement(d.a,{direction:"row",mStyle:"flex-direction: row;"},o.a.createElement(b.a,{style:"margin-right: 69px;",mStyle:"margin-right: 0;",sStyle:"margin-bottom: 60px;"},o.a.createElement(k.a,{mStyle:"text-align: left;",margin:"0 0 15px"},t("community.ambassador.title")),o.a.createElement(g.a,{margin:"0",mStyle:"text-align: left;",sStyle:"margin-bottom: 10px; text-align: left;"},t("community.ambassador.description"))),o.a.createElement(b.a,{style:"width: 100%;"},o.a.createElement("ul",{className:"jsx-1534131104"},o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement("li",{className:"jsx-1534131104"},o.a.createElement("img",{src:"/static/check.svg",className:"jsx-1534131104 check"}),o.a.createElement(k.a,null,t("community.ambassador.related1")))),o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:200},o.a.createElement("li",{className:"jsx-1534131104"},o.a.createElement("img",{src:"/static/check.svg",className:"jsx-1534131104 check"}),o.a.createElement(k.a,null,t("community.ambassador.related2")))),o.a.createElement(m.a,{animateOnce:!0,animateIn:"fadeInUp",delay:400},o.a.createElement("li",{className:"jsx-1534131104"},o.a.createElement("img",{src:"/static/check.svg",className:"jsx-1534131104 check"}),o.a.createElement(k.a,null,t("community.ambassador.related3"))))))),o.a.createElement(d.a,{style:"margin-top: 60px;"},o.a.createElement(y.a,{center:!0,margin:"0 0 30px"},t("community.ambassador.interested")),o.a.createElement(b.a,{flex:!0,style:"align-items: center;"},o.a.createElement(x.a,{title:t("community.ambassador.apply"),uri:"https://www.surveycake.com/s/w48yR",width:"45%",mStyle:"width: 90%;",sStyle:"width: 100%; padding: 18px 12px;"}))),o.a.createElement(u.a,{styleId:"1534131104",css:["ul.jsx-1534131104{margin:0;padding:0;}","li.jsx-1534131104{margin-bottom:20px;list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".check.jsx-1534131104{margin-right:30px;}"]}))});function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,a,r,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(a,r)}function F(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,A(t).apply(this,arguments))}var n,a,i,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,o.a.Component),n=t,a=[{key:"render",value:function(){return o.a.createElement(s.b,{title:"Poseidon Network | ".concat(this.props.t("community.html.title")),navColor:h.e.dark},o.a.createElement(T,null),o.a.createElement(_,null),o.a.createElement(R,null),o.a.createElement(l.a,null))}}],i=[{key:"getInitialProps",value:(c=r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespacesRequired:["common","nav","footer","community"]});case 1:case"end":return e.stop()}},e,this)}),u=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=c.apply(e,t);function i(e){N(r,n,a,i,o,"next",e)}function o(e){N(r,n,a,i,o,"throw",e)}i(void 0)})},function(){return u.apply(this,arguments)})}],a&&F(n.prototype,a),i&&F(n,i),t}();t.default=Object(O.c)("community")(M)}},[[413,1,0]]]);