!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(I){l=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new E(r||[]);return i(a,"_invoke",{value:C(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}n.wrap=f;var d={};function p(){}function y(){}function v(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(L([])));x&&x!==r&&o.call(x,c)&&(g=x);var j=v.prototype=p.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(t,n){function r(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o)}))}return a=a?a.then(o,o):o()}})}function C(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(j,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,u,(function(){return this})),n.AsyncIterator=w,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new w(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(l){s=!0,o=l}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./chakra-legacy-07fc9539.js","./react-legacy-53a5d56b.js","./index-legacy-46185db3.js","./index.esm-legacy-81358d30.js"],(function(e,n){"use strict";var i,a,s,l,f,h,d,p,y,v,g,m,x,j,b,w,C,k,S,O,E,L,P,I,R,z,N,A,_,F,T,G,U,D,J,q,B,M,W,V,Y,K,H,$,Q,X,Z,ee,te,ne,re,oe,ie,ae,ce,ue,se,le,fe,he,de,pe,ye,ve,ge,me,xe,je,be,we,Ce,ke,Se,Oe,Ee,Le,Pe;return{setters:[function(e){i=e.j,a=e.$,s=e.J,l=e.B,f=e._,h=e.v,d=e.F,p=e.i,y=e.t,v=e.a0,g=e.h,m=e.w,x=e.x,j=e.a1,b=e.y,w=e.a2,C=e.a3,k=e.M,S=e.a4,O=e.r,E=e.s},function(e){L=e.u,P=e.r,I=e.a,R=e.m},function(e){z=e.j,N=e.b,A=e.L,_=e.e,F=e.a,T=e.c,G=e.k,U=e.l,D=e.m,J=e.n,q=e.o,B=e.q,M=e.f,W=e.t,V=e.v,Y=e.w,K=e.x,H=e.y,$=e.g,Q=e.p,X=e.z,Z=e.A,ee=e.B,te=e.C,ne=e.M,re=e.D,oe=e.F,ie=e.d,ae=e.G,ce=e.H,ue=e.I,se=e.J,le=e.K,fe=e.N,he=e.O,de=e.P,pe=e.Q,ye=e.S,ve=e.T,ge=e.U,me=e.V,xe=e.i,je=e.r,be=e.E},function(e){we=e.u,Ce=e.a,ke=e.b,Se=e.M,Oe=e.c,Ee=e.d,Le=e.e,Pe=e.f}],execute:function(){e("default",(function(){var e=L().t,t=_(),n=R(),r=o(P.useState(),2),c=r[0],u=r[1],s=o(P.useState(!1),2),l=s[0],f=s[1],h=o(P.useState(!1),2),y=h[0],v=h[1];P.useEffect((function(){var e=window.localStorage.getItem(ge);if(e)try{var t=JSON.parse(e);Object.keys(t.lines).length>0&&Object.values(t.lines)[0].id&&(u(t),f(!0))}catch(n){console.error("TicketView:: unable to restore draft ticket",e)}}),[]);return i.jsxs(xe,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[i.jsxs(d,{direction:"column",flex:1,overflowY:"auto",children:[i.jsx(Re,{}),i.jsx(ze,{}),i.jsx(Te,{})]}),i.jsxs(d,{my:2,children:[i.jsx(p,{size:"sm",onClick:function(){je.isStandaloneWindow()?n("/"):je.openApp("rmg-palette")},children:e("Go back")}),i.jsxs(a,{ml:"auto",children:[i.jsx(p,{size:"sm",variant:"outline",onClick:function(){t(me()),window.localStorage.removeItem(ge),je.event(be.RESET_TICKET,{})},children:e("Reset")}),i.jsx(p,{size:"sm",colorScheme:"primary",onClick:function(){return v(!0)},children:e("Submit")})]})]}),i.jsx(Be,{isOpen:l,onClose:function(){return f(!1)},incomingState:c}),i.jsx(qe,{isOpen:y,onClose:function(){return v(!1)}})]})}));var n={"& > div:first-of-type":{flex:1}};function Ie(e){var t,r=e.onUpdate,f=e.onLangSwitch,h=e.onRemove,d=null!==(t=e.entries)&&void 0!==t?t:[],p=L().t,y=we(),v=function(e,t){return[{type:"select",label:p("Language"),value:e,options:Object.entries(A).reduce((function(e,t){return c(c({},e),{},u({},t[0],y(t[1])))}),{}),disabledOptions:d.filter((function(t){return t[0]!==e})).map((function(e){return e[0]})),onChange:function(t){return f(e,t)}},{type:"input",label:p("Name"),value:t,onChange:function(t){return r(e,t)},validator:function(e){return!!e}}]},g=function(){var e=Object.keys(A).filter((function(e){return!d.find((function(t){return t[0]===e}))}))[0];r(e,"")};return i.jsx(z,{direction:"column",children:d.map((function(e,t,r){var c=o(e,2),u=c[0],f=c[1];return i.jsxs(a,{sx:n,"data-testid":"entry-card-stack-"+u,children:[i.jsx(N,{fields:v(u,f),noLabel:t>0}),t===r.length-1?i.jsx(s,{size:"sm",variant:"ghost","aria-label":p("Add a name in another language"),title:p("Add a name in another language"),onClick:g,icon:i.jsx(Ce,{})}):i.jsx(l,{minW:8}),r.length>1&&i.jsx(s,{size:"sm",variant:"ghost","aria-label":p("Remove this name"),title:p("Remove this name"),onClick:function(){return h(u)},icon:i.jsx(ke,{})})]},t)}))})}function Re(){var e=L(),t=e.t,n=e.i18n,r=we(),o=_(),a=F((function(e){return e.ticket})),s=a.country,h=a.newCountry,d=a.countryName,p=a.newCountryLang,y=c(c({},T.map((function(e){return[e.id,r(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],n.languages[0])})).reduce((function(e,t){return"UN"===t[0]?e:c(c({},e),{},u({},t[0],t[1]))}),{"":t("Please select...")})),{},{new:t("Add a country/region...")}),v=Object.entries(A).reduce((function(e,t){return c(c({},e),{},u({},t[0],r(t[1])))}),{}),g=[{type:"select",label:t("Country/Region"),value:s,options:y,disabledOptions:[""],onChange:function(e){return o(G(e))}},{type:"input",label:t("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:h,onChange:function(e){return o(U(e))},hidden:"new"!==s},{type:"select",label:t("Official language"),value:p,options:v,onChange:function(e){return o(D(e||void 0))},hidden:"new"!==s}];return i.jsxs(l,{as:"section",children:[i.jsx(f,{as:"h5",size:"sm",mb:2,children:t("Country/Region")}),i.jsx(N,{fields:g}),"new"===s&&i.jsx(Ie,{entries:d,onUpdate:function(e,t){return o(J({lang:e,name:t}))},onLangSwitch:function(e,t){return o(q({prevLang:e,nextLang:t}))},onRemove:function(e){return o(B(e))}})]})}function ze(){var e=L(),n=e.t,o=e.i18n,a=_(),s=we(),h=F((function(e){return e.ticket})),d=h.country,p=h.city,y=h.newCity,v=h.cityName,g=c(c({},M.filter((function(e){return e.country===d})).map((function(e){return[e.id,s(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],o.languages[0])})).reduce((function(e,t){return c(c({},e),{},u({},t[0],t[1]))}),{"":n("Please select...")})),{},{new:n("Add a city")+"..."}),m=function(){var e=r(t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==n){e.next=3;break}return a(H("new")),e.abrupt("return");case 3:return e.next=5,$(n);case 5:r=e.sent,a(r?Q(r):X());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=[{type:"select",label:n("City"),value:p,options:g,disabledOptions:[""],onChange:function(e){return m(e)}},{type:"input",label:n("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:y,onChange:function(e){return a(W(e))},validator:function(e){return""!==e&&!e.match(/[^a-z]/)},hidden:"new"!==p}];return i.jsxs(l,{as:"section",children:[i.jsx(f,{as:"h5",size:"sm",mt:3,mb:2,children:n("City")}),i.jsx(N,{fields:x}),"new"===p&&i.jsx(Ie,{entries:v,onUpdate:function(e,t){return a(V({lang:e,name:t}))},onLangSwitch:function(e,t){return a(Y({prevLang:e,nextLang:t}))},onRemove:function(e){return a(K(e))}})]})}var Ne=function(e){return'{ getColor(code:"'.concat(e,'") { code, rgb { r g b }, hex, cmyk { c m y k } } }')},Ae=function(){var e=r(t().mark((function e(n,r){var o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:Ne(n)}),signal:r});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return","#"+i.data.getColor.hex);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function _e(e){var t=e.ready,n=e.onReady,r=L().t;return P.useEffect((function(){var e=new AbortController;return Ae("130 C",e.signal).then((function(e){return n(!!e)})).catch((function(){return n(!1)})),function(){e.abort()}}),[]),i.jsx(h,{as:"i",fontSize:"xs",children:void 0===t?r("Checking Pantone service availability..."):t?r("Pantone service is ready")+" ✅":r("Pantone service is not available")+" ⚠️"})}function Fe(e){var n,a=e.entryId,c=e.pantoneReady,s=L().t,l=_(),f=F((function(e){return e.ticket.lines})),h=f[a],d=o(P.useState("hex"),2),p=d[0],y=d[1],v=o(P.useState(""),2),g=v[0],m=v[1],x=P.useRef(new AbortController);P.useEffect((function(){x.current.abort();var e=f[a];null!=e&&e.pantone?(m(e.pantone),y("pantone")):(m(""),y("hex"))}),[a]);var j=function(){var e=r(t().mark((function e(n){var r,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.current.abort(),h&&c){e.next=3;break}return e.abrupt("return");case 3:return x.current=new AbortController,e.prev=4,e.next=7,Ae(n,x.current.signal);case 7:r=e.sent,l(oe({entryId:a,pantone:n,hex:r})),m(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),I.flushSync((function(){m(n)})),m(null!==(o=h.pantone)&&void 0!==o?o:"");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),b=[{label:"RGB",value:"hex"},{label:s("Pantone"),value:"pantone"}],w=[{type:"input",label:s("Line code"),placeholder:"e.g. twl, gz1, sh1",value:h.id,onChange:function(e){return l(Z({entryId:a,lineId:e}))},validator:function(e){return""!==e&&!e.match(/[^a-z0-9]/)}},{type:"custom",label:s("Colour mode"),component:i.jsx(ee,{selections:b,defaultValue:p,onChange:function(e){return y(e)}}),hidden:!c},{type:"input",label:s("Background colour"),variant:"color",value:h.colour,onChange:function(e){return l(te({entryId:a,bgColour:e}))},hidden:c&&"pantone"===p},{type:"input",label:s("Pantone code"),value:g,onChange:j,debouncedDelay:1500,hidden:!c||"pantone"!==p},{type:"select",label:s("Foreground colour"),value:h.fg,options:(n={},u(n,ne.white,s("White")),u(n,ne.black,s("Black")),n),onChange:function(e){return l(re({entryId:a,fgColour:e}))}}];return i.jsx(N,{fields:w})}function Te(){var e,t=L().t,n=we(),r=_(),c=F((function(e){return e.ticket.lines})),u=o(P.useState(Object.keys(c)[0]),2),h=u[0],y=u[1],v=o(P.useState(),2),g=v[0],m=v[1];return i.jsxs(l,{as:"section",children:[i.jsxs(d,{mt:3,mb:2,alignItems:"center",children:[i.jsx(f,{as:"h5",size:"sm",mr:"auto",children:t("Lines")}),i.jsx(_e,{ready:g,onReady:m})]}),i.jsxs(a,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(c).map((function(e){var a=o(e,2),c=a[0],u=a[1],l=n(Object.fromEntries(u.nameEntity));return i.jsx(ie,{name:l,bg:u.colour,fg:u.fg,actions:i.jsxs(i.Fragment,{children:[i.jsx(s,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Edit")+" "+l,title:t("Edit")+" "+l,icon:i.jsx(Se,{}),onClick:function(){return y(c)}}),i.jsx(s,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Copy")+" "+l,title:t("Copy")+" "+l,icon:i.jsx(Oe,{}),onClick:function(){return r(ae(c))}}),i.jsx(s,{size:"xs",variant:"ghost",color:u.fg,"aria-label":t("Remove")+" "+l,title:t("Remove")+" "+l,icon:i.jsx(ke,{}),onClick:function(){return r(ce(c))}})]})},c)})),i.jsx(p,{size:"xs",variant:"ghost",leftIcon:i.jsx(Ce,{}),ml:"auto !important",onClick:function(){return r(ue())},children:t("Add a line")})]}),c[h]&&i.jsx(Fe,{entryId:h,pantoneReady:g}),i.jsx(Ie,{entries:null===(e=c[h])||void 0===e?void 0:e.nameEntity,onUpdate:function(e,t){return r(se({entryId:h,lang:e,name:t}))},onLangSwitch:function(e,t){return r(le({entryId:h,prevLang:e,nextLang:t}))},onRemove:function(e){return r(fe({entryId:h,lang:e}))}})]})}function Ge(e){var t=e.countryErrors,n=e.cityErrors,r=e.lineErrors,c=e.onIgnore,u=e.onClose,s=L().t,l=we();return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:s("Your inputs contain the following errors. Please consider fixing it before submitting.")}),t.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("Country/Region")}),i.jsx(v,{"aria-label":"List of country errors",children:t.map((function(e,t){return i.jsx(g,{children:l(he[e])},t)}))})]}),n.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("City")}),i.jsx(v,{"aria-label":"List of city errors",children:n.map((function(e,t){return i.jsx(g,{children:l(he[e])},t)}))})]}),Object.values(r).flat().length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("Lines")}),i.jsx(v,{"aria-label":"List of line errors",children:Object.entries(r).map((function(e){var t=o(e,2),n=t[0],r=t[1];return i.jsxs(g,{children:[n,i.jsx(v,{children:r.map((function(e,t){return i.jsx(g,{children:l(he[e])},t)}))})]},n)}))})]})]}),i.jsx(m,{children:i.jsxs(a,{children:[i.jsx(p,{onClick:c,children:s("Submit anyway")}),i.jsx(p,{colorScheme:"primary",onClick:u,children:s("Go back")})]})})]})}var Ue=function(e){var t;return!(null===(t=e.match(/^https?:\/\//))||void 0===t||!t[0])};function De(e){var t=e.refLink,n=e.onRefLinkChange,r=e.justification,o=e.onJustificationChange,a=e.onPrev,c=e.onNext,u=L().t,s=[{type:"input",value:t,label:u("Reference link"),placeholder:u("Enter a valid URL"),onChange:n,validator:Ue},{type:"textarea",value:r,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:o}],l=!t||!r||!Ue(t);return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:u("Please provide suitable source and justification.")}),i.jsx(N,{fields:s,minW:"full"})]}),i.jsxs(m,{children:[a&&i.jsx(p,{variant:"ghost",onClick:a,mr:"auto",leftIcon:i.jsx(Ee,{}),children:u("Previous")}),i.jsx(p,{colorScheme:"primary",onClick:c,rightIcon:i.jsx(Le,{}),isDisabled:l,children:u("Next")})]})]})}function Je(e){var n,o,a=e.countryEntry,c=e.cityEntry,u=e.paletteList,s=e.refLink,l=e.justification,f=e.onPrev,d=L().t,v=x("primary.500","primary.300"),C=P.useRef(null),k=["**Reference link:** ".concat(s||"(REPLACE ME)"),"**Justification:** ".concat(l||"(REPLACE ME)"),de,pe("country",a),pe("city",c),pe("lines",u)].join("\n\n"),S=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==c||null===(n=c.name)||void 0===n?void 0:n.en),body:k}),O=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==c||null===(o=c.name)||void 0===o?void 0:o.en)}),E=function(){var e=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==C||!C.current){e.next=4;break}return C.current.select(),e.next=4,navigator.clipboard.writeText(k);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:d("If the button below doesn't work for you, please follow the instructions below:")}),i.jsxs(j,{children:[i.jsxs(g,{children:[d("Open")," ",i.jsxs(b,{color:v,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+O.toString(),isExternal:!0,children:["Issue: New Palettes Request ",i.jsx(w,{as:Pe})]})]}),i.jsxs(g,{children:[d("Paste following text to the issue body")," ",i.jsx(p,{size:"xs",leftIcon:i.jsx(Oe,{}),onClick:E,children:d("Copy")}),i.jsx(ye,{ref:C,isReadOnly:!0,defaultValue:k,onClick:function(e){return e.target.select()}})]})]})]}),i.jsxs(m,{children:[i.jsx(p,{variant:"ghost",onClick:f,mr:"auto",leftIcon:i.jsx(Ee,{}),children:d("Previous")}),i.jsx(p,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+S.toString(),"_blank")},children:d("1-click open issue")})]})]})}function qe(e){var t=e.isOpen,n=e.onClose,r=L().t,a=o(P.useState([]),2),c=a[0],u=a[1],s=o(P.useState([]),2),l=s[0],f=s[1],h=o(P.useState({}),2),d=h[0],p=h[1],y=o(P.useState(""),2),v=y[0],g=y[1],m=o(P.useState(""),2),x=m[0],j=m[1],b=o(P.useState(!1),2),w=b[0],I=b[1],R=o(P.useState(!1),2),z=R[0],N=R[1],A=F((function(e){return e.ticket})),_=ve.getCountryEntry(A),T=ve.getCityEntry(A),G=ve.getPalettes(A);P.useEffect((function(){t?(u(ve.getCountryErrors(A)),f(ve.getCityErrors(A)),p(ve.getLineErrors(A))):(I(!1),g(""),j(""),N(!1))}),[t]);var U=c.length>0||l.length>0||Object.values(d).flat().length>0,D=U&&!w,J=!D&&!z;return i.jsxs(C,{blockScrollOnMount:!1,isOpen:t,onClose:n,scrollBehavior:"inside",children:[i.jsx(k,{}),i.jsxs(S,{children:[i.jsx(O,{children:r("Submit palettes")}),i.jsx(E,{onClick:function(){D||J||window.localStorage.removeItem(ge),n()}}),D&&i.jsx(Ge,{countryErrors:c,cityErrors:l,lineErrors:d,onIgnore:function(){return I(!0)},onClose:n}),J&&i.jsx(De,{refLink:v,onRefLinkChange:g,justification:x,onJustificationChange:j,onPrev:U?function(){return I(!1)}:void 0,onNext:function(){return N(!0)}}),!D&&!J&&i.jsx(Je,{countryEntry:_,cityEntry:T,paletteList:G,refLink:v,justification:x,onPrev:function(){return N(!1)}})]})]})}function Be(e){var t=e.isOpen,n=e.onClose,r=e.incomingState,o=L().t,c=_();return i.jsxs(C,{isOpen:t,onClose:n,children:[i.jsx(k,{}),i.jsxs(S,{children:[i.jsx(O,{children:o("Unsaved draft")}),i.jsx(E,{}),i.jsx(y,{children:o("Do you want to continue with your last unsaved ticket?")}),i.jsx(m,{children:i.jsxs(a,{children:[i.jsx(p,{onClick:function(){window.localStorage.removeItem(ge),n()},children:o("Discard")}),i.jsx(p,{colorScheme:"primary",onClick:function(){r&&c(me(r)),n()},children:o("Continue")})]})})]})]})}}}}))}();
