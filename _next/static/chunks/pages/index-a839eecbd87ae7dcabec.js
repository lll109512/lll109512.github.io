_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),o=n.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return o.a.createElement(e.tag,c({key:t},e.attr),u(e.child))}))}function l(e){return function(t){return o.a.createElement(f,c({attr:c({},e.attr)},t),u(e.child))}}function f(e){var t=function(t){var n,r=e.attr,i=e.size,a=e.title,u=s(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),e.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var r=n("nKUr"),o=n("q1tI"),i=(n("g4pe"),n("YFqc"),n("qhky"));function a(e){var t=e.description,n=e.lang,o=e.meta,a=e.title,c={title:"Aencore",description:"Xingyu Li's home page",author:"Xingyu Li"},s=t||c;return Object(r.jsx)(i.a,{htmlAttributes:{lang:n},title:a,meta:[{name:"description",content:s},{property:"og:title",content:a},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.author},{name:"twitter:title",content:a},{name:"twitter:description",content:s}].concat(o)})}a.defaultProps={lang:"en",meta:[],description:""};var c=a,s=n("7E91"),u=(n("s4JC"),n("o0o1")),l=n.n(u);function f(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))}}var d=n("rePB"),y=n("mrSG"),h=n("82gj"),b=n("V4dV"),v=n("PuYt");function m(){var e=!1,t=[],n=new Set,r={subscribe:function(e){return n.add(e),function(){n.delete(e)}},start:function(r,o){if(e){var i=[];return n.forEach((function(e){i.push(Object(b.a)(e,r,{transitionOverride:o}))})),Promise.all(i)}return new Promise((function(e){t.push({animation:[r,o],resolve:e})}))},set:function(t){return Object(h.a)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((function(e){Object(v.d)(e,t)}))},stop:function(){n.forEach((function(e){Object(b.b)(e)}))},mount:function(){return e=!0,t.forEach((function(e){var t=e.animation,n=e.resolve;r.start.apply(r,Object(y.e)([],Object(y.c)(t))).then(n)})),function(){e=!1,r.stop()}}};return r}var O=n("J4/h");function g(){var e=Object(O.a)(m);return Object(o.useEffect)(e.mount,[]),e}var j=n("ATyU"),w=n("Aiyt");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=T(T({},w.a),{},{duration:1.2,delay:2.2}),C={initial:{y:0},animate:{y:0,transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:-1}}},A={initial:{y:0},animate:{y:0,transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:1}}},P={initial:{y:0,opacity:0},animate:{y:0,opacity:1,transition:T(T({},E),{},{duration:1})},moveToLeft:{x:-500,y:-100,transition:T(T({},E),{},{duration:1})}},S={initial:{x:30,opacity:0},animate:{x:0,opacity:1,transition:T(T({},E),{},{delay:2.3})}},k={initial:{x:30,opacity:0},animate:{x:0,opacity:1,transition:T(T({},E),{},{delay:2.5})}},M=function(e){var t,n=e.leftTitle,i=void 0===n?"Firstname":n,a=e.rightTitle,c=void 0===a?"Lastname":a,s=e.title,u=void 0===s?"FULLSTACK ENGINEER & ART HOBBYIST":s,f=e.location,y=void 0===f?"CHINA, SHAANXI":f,h=i.split(""),b=c.split(""),v=g();return Object(o.useEffect)(p(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.start("animate");case 2:case"end":return e.stop()}}),e)}))),[]),Object(r.jsxs)(j.a.div,{initial:"initial",animate:v,transition:w.a,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(j.a.span,{className:"inline-block",variants:C,children:h.map((function(e,t){return Object(r.jsx)(j.a.span,{className:"inline-block select-none",variants:P,children:e},t)}))}),Object(r.jsx)(j.a.span,(t={className:"inline-block",variants:A},Object(d.a)(t,"className","ml-8"),Object(d.a)(t,"children",b.map((function(e,t){return Object(r.jsx)(j.a.span,{className:"inline-block select-none",variants:P,children:e},t)}))),t))]}),Object(r.jsx)(j.a.div,{variants:S,className:"text-base mt-4 select-none",children:Object(r.jsx)(j.a.span,{className:"opacity-70",children:u})}),Object(r.jsx)(j.a.div,{variants:k,className:"text-base my-2 select-none",children:Object(r.jsx)(j.a.span,{className:"opacity-70",children:y})})]})},I=n("Iu7H"),N=n("NIcq"),_=n("ma3e");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={hover:{y:-30,opacity:1,color:"rgb(167,189,220)",transition:D({},w.a)}},H={initial:{opacity:0,y:0},hover:{y:-25,opacity:1,transition:D(D({},w.a),{},{delay:0})}},q=function(e){var t=e.icon,n=e.label;return Object(r.jsxs)(j.a.div,{initial:"initial",whileHover:"hover",className:"w-10 flex flex-col cursor-pointer items-center",children:[Object(r.jsx)(j.a.div,{variants:R,children:t}),Object(r.jsx)(j.a.h1,{variants:H,className:"text-white",children:n})]})};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={initial:function(e){return{y:30*(e.index%2===0?1:-1)-200,opacity:0}},firstEnter:function(e){var t=e.index;return{opacity:1,y:-200,transition:z(z({},w.a),{},{delay:.3+.05*t})}},moveToBottom:function(e){var t=e.index;return{y:0,transition:z(z({},w.a),{},{delay:.3+.05*t})}}},U=function(e){var t=g();Object(o.useEffect)(p(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.start("firstEnter");case 2:return e.next=4,t.start("moveToBottom");case 4:case"end":return e.stop()}}),e)}))),[]);var n=[{label:"Home",icon:Object(r.jsx)(I.a,{size:30,color:"white"})},{label:"Skills",icon:Object(r.jsx)(I.c,{size:30,color:"white"})},{label:"Experience",icon:Object(r.jsx)(I.f,{size:30,color:"white"})},{label:"Tools",icon:Object(r.jsx)(I.d,{size:30,color:"white"})},{label:"Projects",icon:Object(r.jsx)(I.e,{size:30,color:"white"})},{label:"Educations",icon:Object(r.jsx)(_.a,{size:30,color:"white"})},{label:"Arts",icon:Object(r.jsx)(I.b,{size:30,color:"white"})},{label:"Language",icon:Object(r.jsx)(N.a,{size:30,color:"white"})}];return Object(r.jsx)("div",{className:"absolute bottom-1/4 left-1/2 transform -translate-x-1/2",children:Object(r.jsx)(j.a.div,{initial:"initial",animate:t,className:"flex flex-row",children:n.map((function(e,t){var n=e.label,o=e.icon;return Object(r.jsx)(j.a.div,{className:"lg:mx-6 sm:mx-4",variants:Y,custom:{index:t},children:Object(r.jsx)(q,{label:n,icon:o})},n)}))})})};function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={initial:{opacity:1},splitTitle:{opacity:.7,transition:K(K({},w.a),{},{delay:.5})},exitTitle:{opacity:0,transition:K({delay:.5},w.a)}},W={initial:{opacity:0},splitTitle:{opacity:1,transition:K(K({},w.a),{},{delay:1})}},X={initial:{scaleY:0,translateY:"3.5rem"},splitTitle:{scaleY:1,translateY:"3.5rem",transition:K(K({},w.a),{},{delay:.5})},exitTitle:{opacity:0,transition:K(K({},w.a),{},{delay:1}),transitionEnd:{display:"none"}}},V=function(e){var t=e.innerText,n=e.outerText,o=e.controls;return Object(r.jsxs)(j.a.div,{initial:"initial",animate:o,className:"relative flex flex-col items-center",children:[Object(r.jsx)(j.a.div,{variants:X,className:"px-12 text-gray-50 text-4xl bg-black overflow-hidden",style:{zIndex:1},children:Object(r.jsx)(j.a.div,{variants:W,className:"select-none overflow-hidden",children:t})}),Object(r.jsx)(j.a.div,{variants:J,className:"text-gray-50 text-7xl bg-black select-none",children:n})]})},Z=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=g();return Object(o.useEffect)(p(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.start("splitTitle");case 2:return e.next=4,t.start("exitTitle");case 4:case"end":return e.stop()}}),e)}))),[]),Object(r.jsx)(j.a.div,{className:"h-screen w-screen relative",children:Object(r.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ",children:Object(r.jsx)(V,{innerText:"Developer skills",outerText:"\u5f00\u53d1\u6280\u80fd",controls:t})})})};n("wzEB");function $(){return Object(r.jsxs)("div",{className:"transition-colors",style:{transitionDuration:"1000ms"},children:[Object(r.jsx)(c,{title:"Hello"}),Object(r.jsx)(s.a,{}),Object(r.jsxs)("div",{className:"h-screen w-full relative",children:[Object(r.jsx)("div",{className:"text-gray-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl",children:Object(r.jsx)(M,{leftTitle:"Xingyu",rightTitle:"Li"})}),Object(r.jsx)(U,{})]}),Object(r.jsx)("div",{children:Object(r.jsx)(Z,{})})]})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){a(n,e);var t=u(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bmMU:function(e,t){var n="undefined"!==typeof Element,r="function"===typeof Map,o="function"===typeof Set,i="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=t.length)return!1;for(s=c;0!==s--;)if(!a(e[s],t[s]))return!1;return!0}if(r&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],t.get(s.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!t.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((c=e.length)!=t.length)return!1;for(s=c;0!==s--;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(s=c;0!==s--;)if(!Object.prototype.hasOwnProperty.call(t,u[s]))return!1;if(n&&e instanceof Element)return!1;for(s=c;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],t[u[s]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var i=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,y=e.children,h=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var O=i.Children.only(y),g=O&&"object"===typeof O&&O.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),w=r(j,2),x=w[0],T=w[1],E=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,i.useEffect)((function(){var e=T&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,T,m,t,n]);var C={ref:E,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,n,p,d,h,b,v,m)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var A="undefined"!==typeof m?m:n&&n.locale,P=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,A,n&&n.locales,n&&n.domainLocales);C.href=P||(0,a.addBasePath)((0,a.addLocale)(d,A,n&&n.defaultLocale))}return i.default.cloneElement(O,C)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},i=!0;try{e[t](o,o.exports,r),i=!1}finally{i&&delete n[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return fe}));var r=n("17x9"),o=n.n(r),i=n("8+s/"),a=n.n(i),c=n("bmMU"),s=n.n(c),u=n("q1tI"),l=n.n(u),f=n("Qetd"),p=n.n(f),d="bodyAttributes",y="htmlAttributes",h="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(e){return b[e]})),"charset"),m="cssText",O="href",g="http-equiv",j="innerHTML",w="itemprop",x="name",T="property",E="rel",C="src",A="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},S="defaultTitle",k="defer",M="encodeSpecialCharacters",I="onChangeClientState",N="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),L=[b.NOSCRIPT,b.SCRIPT,b.STYLE],D="data-react-helmet",R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=V(e,b.TITLE),n=V(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=V(e,S);return t||r||void 0},K=function(e){return V(e,I)||function(){}},J=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===E&&"canonical"===e[n].toLowerCase()||s===E&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==j&&c!==m&&c!==w||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=p()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},V=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){Z(t)}),0)}}(),$=function(e){return clearTimeout(e)},G="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,Q="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:e.cancelAnimationFrame||$,ee=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},te=null,ne=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ie(b.BODY,r),ie(b.HTML,o),oe(f,p);var d={baseTag:ae(b.BASE,n),linkTags:ae(b.LINK,i),metaTags:ae(b.META,a),noscriptTags:ae(b.NOSCRIPT,c),scriptTags:ae(b.SCRIPT,u),styleTags:ae(b.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,y,h)},re=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=re(e)),ie(b.TITLE,t)},ie=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},ae=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===j)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c="undefined"===typeof t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ce=function(e){return Object.keys(e).reduce((function(t,n){var r="undefined"!==typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},ue=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[D]=!0,r),i=se(n,o);return[l.a.createElement(b.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ce(n),i=re(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case y:return{toComponent:function(){return se(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===j||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),l.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===j||e===m)})).reduce((function(e,t){var o="undefined"===typeof r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===L.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},le=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ue(b.BASE,t,r),bodyAttributes:ue(d,n,r),htmlAttributes:ue(y,o,r),link:ue(b.LINK,i,r),meta:ue(b.META,a,r),noscript:ue(b.NOSCRIPT,c,r),script:ue(b.SCRIPT,s,r),style:ue(b.STYLE,u,r),title:ue(b.TITLE,{title:f,titleAttributes:p},r)}},fe=function(e){var t,n;return n=t=function(t){function n(){return H(this,n),Y(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),n.prototype.shouldComponentUpdate=function(e){return!s()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TITLE:return B({},o,((t={})[r.type]=a,t.titleAttributes=B({},i),t));case b.BODY:return B({},o,{bodyAttributes:B({},i)});case b.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((n={})[r.type]=B({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=z(t,["children"]),o=B({},r);return n&&(o=this.mapChildrenToProps(n,o)),l.a.createElement(e,o)},q(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(l.a.Component),t.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n}(a()((function(e){return{baseTag:W([O,A],e),bodyAttributes:J(d,e),defer:V(e,k),encode:V(e,M),htmlAttributes:J(y,e),linkTags:X(b.LINK,[E,O],e),metaTags:X(b.META,[x,v,g,T,w],e),noscriptTags:X(b.NOSCRIPT,[j],e),onChangeClientState:K(e),scriptTags:X(b.SCRIPT,[C,j],e),styleTags:X(b.STYLE,[m],e),title:F(e),titleAttributes:J(h,e)}}),(function(e){te&&Q(te),e.defer?te=G((function(){ne(e,(function(){te=null}))})):(ne(e),te=null)}),le)((function(){return null})));fe.renderStatic=fe.rewind}).call(this,n("ntbh"))},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),i=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var c=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},wzEB:function(e,t,n){!function(e){"use strict";var t=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=n.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)t.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})),n=t;e.classnames=t,e.default=n,e.tw=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)}},[["vlRD",0,1,7,5,6,2,3,4]]]);