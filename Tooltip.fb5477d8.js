parcelRequire=function(t){var e="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require,n={};function r(t,r){if(t in n)return n[t];var a="function"==typeof parcelRequire&&parcelRequire;if(!r&&a)return a(t,!0);if(e)return e(t,!0);if(o&&"string"==typeof t)return o(t);var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return r.register=function(t,e){n[t]=e},n=function(t){function e(t){return t&&t.__esModule?{d:t.default}:{d:t}}var o={};function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a({target:o}){var n=e(t("jCGa"));const r={minWidth:o.offsetWidth},a=t("WQpw").classNames([n.d.mtk4,!o.value&&n.d.err]),s=t("WQpw").classNames([n.d.func,!o.validity.valid&&n.d.err]);var l=e(i);return t("aSor").h("div",{className:l.d.editor,style:r},t("aSor").h("code",{className:l.d.field},t("aSor").h("span",{className:a},"export function "),t("aSor").h("span",{className:s},o.value),"() {",t("aSor").h("br",null),t("aSor").h("span",{className:n.d.mtk3},"  // TODO:"),t("aSor").h("br",null),"}"))}var i={};function s({target:o}){const n={minWidth:o.offsetWidth},r=(a=o.value,a.replace(/^\//,"").split("/").map((o,n,r)=>{const a=n===r.length-1;var i=e(l);return{path:o,className:t("WQpw").classNames([i.d.node,c(o,a),u(o,a)&&i.d.invalid])}})).reduceRight((o,n,r)=>{var a=e(l);const i=0===r?a.d.list:a.d.sublist;return t("aSor").h("ul",{className:i},t("aSor").h("li",{className:a.d.item},t("aSor").h("div",{className:n.className},n.path),o))},null);var a,i=e(l);return t("aSor").h("div",{className:i.d.bar,style:n},t("aSor").h("div",{className:i.d.root},"Backend"),r)}i={fs:"_fs_e5701",editor:"_editor_e5701",field:"_field_e5701"},t("aSor"),t("jCGa"),t("WQpw");var l={};l={bar:"_bar_42e54",root:"_root_42e54",list:"_list_42e54",item:"_item_42e54",sublist:"_sublist_42e54",node:"_node_42e54",invalid:"_invalid_42e54",blank:"_blank_42e54",js:"_js_42e54",jsw:"_jsw_42e54",dir:"_dir_42e54"},t("WQpw");const u=(t,e)=>""===t||/[^\w\d\.-]/.test(t)||46===t.charCodeAt(0)||46===t.charCodeAt(t.length-1)||e&&!/[^\.]\.jsw?$/.test(t);function c(t,o){var n=e(l);return o?/\.js$/.test(t)?n.d.js:/\.jsw$/.test(t)?n.d.jsw:n.d.blank:n.d.dir}t("aSor"),t("aSor"),t("MwGB"),t("RIA0");const d=function(t){var e,o,a=t.createElement;return o=e=function(t){function e(){var o,a;n(this,e);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=a=r(this,t.call.apply(t,[this].concat(s))),a.state={target:null},a._containerStyle={position:"relative"},a.toggleEvents=function(t,e){var o=t.events,n=o.click,r=o.focus,i=o.hover,s=e?"addEventListener":"removeEventListener",l=!0===t.events;(n||l)&&document[s]("click",a.toggleHint),(r||l)&&document[s]("focusin",a.toggleHint),(i||l)&&document[s]("mouseover",a.toggleHint),(n||i||l)&&document[s]("touchend",a.toggleHint)},a.toggleHint=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,e=void 0===t?null:t;e=a.getHint(e),clearTimeout(a._timeout),a._timeout=setTimeout((function(){return a.setState((function(){return{target:e}}))}),null===e?void 0===a.props.delay.hide?a.props.delay:a.props.delay.hide:void 0===a.props.delay.show?a.props.delay:a.props.delay.show)},a.getHint=function(t){for(var e=a.props,o=e.attribute,n=e.persist,r=a.state.target;t&&t!==document;){if(n&&t===a._hint)return r;if(t.hasAttribute(o))return t;t=t.parentNode}return null},a.shallowEqual=function(t,e){var o=Object.keys(t);return o.length===Object.keys(e).length&&o.reduce((function(o,n){return o&&("function"==typeof t[n]&&"function"==typeof e[n]||t[n]===e[n])}),!0)},a.getHintData=function(t,e){var o=t.target,n=e.attribute,r=e.autoPosition,i=e.position,s=o.getAttribute(n)||"",l=o.getAttribute(n+"-at")||i,u=a._container.getBoundingClientRect(),c=u.top,d=u.left,f=a._hint.getBoundingClientRect(),p=f.width,h=f.height,m=o.getBoundingClientRect(),g=m.top,v=m.left,_=m.width,b=m.height;if(r){var y=["left","right"].includes(l),w=document.documentElement,S={left:(y?v-p:v+(_-p>>1))>0,right:(y?v+_+p:v+(_+p>>1))<w.clientWidth,bottom:(y?g+(b+h>>1):g+b+h)<w.clientHeight,top:(y?g-(h>>1):g-h)>0};switch(l){case"left":S.left||(l="right"),S.top||(l="bottom"),S.bottom||(l="top");break;case"right":S.right||(l="left"),S.top||(l="bottom"),S.bottom||(l="top");break;case"bottom":S.bottom||(l="top"),S.left||(l="right"),S.right||(l="left");break;case"top":default:S.top||(l="bottom"),S.left||(l="right"),S.right||(l="left")}}var N=void 0,j=void 0;switch(l){case"left":N=b-h>>1,j=-p;break;case"right":N=b-h>>1,j=_;break;case"bottom":N=b,j=_-p>>1;break;case"top":default:N=-h,j=_-p>>1}return{content:s,at:l,top:N+g-c|0,left:j+v-d|0}},r(a,o)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this.toggleEvents(this.props,!0)},e.prototype.componentWillUnmount=function(){this.toggleEvents(this.props,!1),clearTimeout(this._timeout)},e.prototype.shouldComponentUpdate=function(t,e){return!this.shallowEqual(e,this.state)||!this.shallowEqual(t,this.props)},e.prototype.componentDidUpdate=function(){this.state.target&&this.setState(this.getHintData)},e.prototype.render=function(){var t=this,e=this.props,o=e.className,n=e.onRenderContent,r=this.state,i=r.target,s=r.content;return a("div",{ref(e){return t._container=e},style:this._containerStyle},i&&a("div",{className:o+" "+o+"--"+r.at,ref(e){return t._hint=e},role:"tooltip",style:{top:r.top,left:r.left}},n?n(i,s):a("div",{className:o+"__content"},s)))},e}(t.Component),e.defaultProps={attribute:"data-rh",autoPosition:!1,className:"react-hint",delay:0,events:!1,onRenderContent:null,persist:!1,position:"top"},o}({createElement:t("aSor").h,Component:t("aSor").Component});return o.default=function(){const{items:o}=t("RIA0").useStoreon("items"),n=t("MwGB").useCallback(e=>{const{name:o}=e.dataset;switch(o){case"functionLocation":return t("aSor").h(s,{target:e});case"functionName":return t("aSor").h(a,{target:e})}return null},[o]);var r=e(i);return t("aSor").h(t("aSor").Fragment,null,t("aSor").h(d,{events:!0,delay:"500"}),t("aSor").h(d,{persist:!0,attribute:"data-fl",events:{focus:!0,click:!0},className:r.d.fs,onRenderContent:n}))},"object"===typeof exports&&"undefined"!==typeof module?module.exports=o:"function"===typeof define&&define.amd&&define((function(){return o})),o.__esModule=!0,{gH3K:o}}(r),r.modules=n,r}();