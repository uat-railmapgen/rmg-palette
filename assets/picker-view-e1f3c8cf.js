import{j as n,a6 as W,a7 as D,a8 as O,a9 as $,aa as P,ab as B,ac as I,ad as M,$ as N,i as A}from"./chakra-30b94965.js";import{f as L,W as _,c as F,M as j,d as w,b as V,r as y,E as S,i as H}from"./index-304e144b.js";import{u as b,r as C,n as z}from"./react-326f1873.js";import{u as T}from"./use-palette-4571f90c.js";function U(u){const{countryCode:t,svgFilename:c}=u;return c?n.jsx(W,{src:`/rmg-palette/resources/flags/${c.slice(0,-4)}.svg`,alt:`Flag of ${t}`,h:17,mr:1}):n.jsx(n.Fragment,{})}function X(u){const{defaultValueId:t,onChange:c}=u,{i18n:l}=b(),f=t?L.find(o=>o.id===t):void 0,r=o=>{var e,s;return(s=(e=l.languages.map(a=>o.name[a]).find(a=>a!==void 0))!=null?e:o.name.en)!=null?s:""},d=o=>{var v,E;const e=o.country==="TW"&&["zh-Hans","zh-CN"].includes(l.languages[0]),s=["Win32","Win64"].includes(navigator.platform),a=l.languages.map(p=>o.name[p]).find(p=>p!==void 0),g=(v=F.find(p=>p.id===o.country))==null?void 0:v.flagSvg,x=(E=F.find(p=>p.id===o.country))==null?void 0:E.flagEmoji;return n.jsxs(n.Fragment,{children:[e?n.jsx("span",{children:"🏴 "}):s?n.jsx(U,{countryCode:o.country,svgFilename:g}):n.jsxs("span",{children:[x," "]}),a]})},i=(o,e)=>Object.values(o.name).some(s=>s.includes(e)),m=L.slice().sort((o,e)=>o.id==="other"?1:e.id==="other"?-1:r(o).localeCompare(r(e),l.languages[0]));return n.jsx(_,{data:m,displayValue:r,displayHandler:d,predicate:i,defaultValue:f,onChange:o=>c==null?void 0:c(o.id)})}function q(u){const{city:t,defaultValueId:c,onChange:l}=u,{i18n:f}=b(),r=T(t),d=c?r.find(e=>e.id===c):void 0,i=e=>{var s;return(s=f.languages.map(a=>e.name[a]).find(a=>a!==void 0))!=null?s:""},m=e=>{const s=i(e);return n.jsx(w,{name:s,fg:e.fg||j.white,bg:e.colour})},o=(e,s)=>Object.values(e.name).some(a=>a.includes(s));return n.jsx(_,{data:r,displayValue:i,displayHandler:m,predicate:o,defaultValue:d,onChange:e=>l==null?void 0:l(e.id,e.colour,e.fg||j.white)})}function G(u){const{defaultTheme:t,sessionId:c,onSubmit:l,onClose:f}=u,{t:r}=b(),[d,i]=C.useState(t==null?void 0:t[0]),[m,o]=C.useState(t==null?void 0:t[1]),[e,s]=C.useState((t==null?void 0:t[2])||"#AAAAAA"),[a,g]=C.useState((t==null?void 0:t[3])||j.white);C.useEffect(()=>{c&&t&&(i(t[0]),o(t[1]),s(t[2]),g(t[3]))},[c,t==null?void 0:t.toString()]);const x=[{type:"custom",label:r("City"),component:n.jsx(X,{defaultValueId:d,onChange:h=>{i(h),o(void 0),s("#AAAAAA"),g(j.white)}})},{type:"custom",label:r("Line"),component:n.jsx(q,{city:d,defaultValueId:m,onChange:(h,k,R)=>{o(h),s(k),g(R)}})}],v=[{type:"input",label:r("Background colour"),variant:"color",value:e,placeholder:"#F3D03E",onChange:h=>{i("other"),o("other"),s(h)}},{type:"select",label:r("Foreground colour"),value:a,options:{[j.white]:r("White"),[j.black]:r("Black")},onChange:h=>{i("other"),o("other"),g(h)}}],E=d&&m&&e&&a,p=()=>{E&&(l==null||l([d,m,e,a]))};return n.jsxs(n.Fragment,{children:[n.jsxs(D,{flex:1,mx:2,children:[n.jsx(w,{name:r("Example"),fg:a,bg:e}),n.jsxs(O,{isFitted:!0,colorScheme:"primary",w:"100%",defaultIndex:d==="other"?1:0,children:[n.jsxs($,{children:[n.jsx(P,{children:r("Palette")}),n.jsx(P,{children:r("Customise")})]}),n.jsxs(B,{children:[n.jsx(I,{children:n.jsx(V,{fields:x})}),n.jsx(I,{children:n.jsx(V,{fields:v})})]})]})]}),n.jsx(M,{}),n.jsxs(N,{p:2,justifyContent:"flex-end",children:[n.jsx(A,{size:"sm",onClick:f,children:r("Cancel")}),n.jsx(A,{size:"sm",colorScheme:"primary",onClick:p,isDisabled:!E,children:r("Confirm")})]})]})}const J="rmg-palette-bridge--";function ee(){const[u]=z(),t=u.get("parentId"),c=u.get("parentComponent"),[l,f]=C.useState(),[r,d]=C.useState(),i=C.useRef();C.useEffect(()=>{const e=new BroadcastChannel(J+t);i.current=e,y.event(S.APP_CLIP_VIEW_OPENED,{parentComponent:c}),e.onmessage=a=>{const{event:g,data:x}=a.data;console.log(`[${e.name}] Received event from parent component:`,g),g==="OPEN"&&(f(crypto.randomUUID()),d(x))},console.log(`[${e.name}] App clip connection established, parentComponent=${c}`);const s=document.createElement("style");return s.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(s),e.postMessage({event:"LOADED"}),()=>{e.close(),document.head.removeChild(s)}},[]);const m=e=>{var s,a;console.log(`[${(s=i.current)==null?void 0:s.name}] Emitting SELECT event, theme:`,e),(a=i.current)==null||a.postMessage({event:"SELECT",data:e}),y.event(S.APP_CLIP_VIEW_SELECT,{parentComponent:c,theme:e})},o=()=>{var e,s;console.log(`[${(e=i.current)==null?void 0:e.name}] Emitting CLOSE event`),(s=i.current)==null||s.postMessage({event:"CLOSE"}),y.event(S.APP_CLIP_VIEW_CLOSED,{parentComponent:c})};return n.jsx(H,{children:n.jsx(G,{defaultTheme:r,sessionId:l,onSubmit:m,onClose:o})})}export{ee as default};
