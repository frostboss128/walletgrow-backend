/*! For license information please see 334.e8a531bb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[334],{1639:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(5043),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c=(e,t)=>{const n=(0,r.forwardRef)(((n,c)=>{let{color:i="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:d,...f}=n;return(0,r.createElement)("svg",{ref:c,...o,width:u,height:u,stroke:i,strokeWidth:a?24*Number(s)/Number(u):s,className:["lucide","lucide-".concat((h=e,h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim())),l].join(" "),...f},[...t.map((e=>{let[t,n]=e;return(0,r.createElement)(t,n)})),...Array.isArray(d)?d:[d]]);var h}));return n.displayName="".concat(e),n}},858:(e,t,n)=>{function r(e,t){let{checkForDefaultPrevented:n=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(r){if(null===e||void 0===e||e(r),!1===n||!r.defaultPrevented)return null===t||void 0===t?void 0:t(r)}}n.d(t,{m:()=>r})},1862:(e,t,n)=>{n.d(t,{A:()=>c,q:()=>o});var r=n(5043);function o(e,t){const n=(0,r.createContext)(t);function o(e){const{children:t,...o}=e,c=(0,r.useMemo)((()=>o),Object.values(o));return(0,r.createElement)(n.Provider,{value:c},t)}return o.displayName=e+"Provider",[o,function(o){const c=(0,r.useContext)(n);if(c)return c;if(void 0!==t)return t;throw new Error("`".concat(o,"` must be used within `").concat(e,"`"))}]}function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[];const o=()=>{const t=n.map((e=>(0,r.createContext)(e)));return function(n){const o=(null===n||void 0===n?void 0:n[e])||t;return(0,r.useMemo)((()=>({["__scope".concat(e)]:{...n,[e]:o}})),[n,o])}};return o.scopeName=e,[function(t,o){const c=(0,r.createContext)(o),i=n.length;function u(t){const{scope:n,children:o,...u}=t,s=(null===n||void 0===n?void 0:n[e][i])||c,a=(0,r.useMemo)((()=>u),Object.values(u));return(0,r.createElement)(s.Provider,{value:a},o)}return n=[...n,o],u.displayName=t+"Provider",[u,function(n,u){const s=(null===u||void 0===u?void 0:u[e][i])||c,a=(0,r.useContext)(s);if(a)return a;if(void 0!==o)return o;throw new Error("`".concat(n,"` must be used within `").concat(t,"`"))}]},i(o,...t)]}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const o=t[0];if(1===t.length)return o;const c=()=>{const e=t.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(t){const n=e.reduce(((e,n)=>{let{useScope:r,scopeName:o}=n;return{...e,...r(t)["__scope".concat(o)]}}),{});return(0,r.useMemo)((()=>({["__scope".concat(o.scopeName)]:n})),[n])}};return c.scopeName=o.scopeName,c}},7920:(e,t,n)=>{n.d(t,{hO:()=>s,sG:()=>u});var r=n(8168),o=n(5043),c=n(7950),i=n(6851);const u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=(0,o.forwardRef)(((e,n)=>{const{asChild:c,...u}=e,s=c?i.DX:t;return(0,o.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,o.createElement)(s,(0,r.A)({},u,{ref:n}))}));return n.displayName="Primitive.".concat(t),{...e,[t]:n}}),{});function s(e,t){e&&(0,c.flushSync)((()=>e.dispatchEvent(t)))}},7490:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(5043);function o(e){const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e})),(0,r.useMemo)((()=>function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)}),[])}},3642:(e,t,n)=>{n.d(t,{i:()=>c});var r=n(5043),o=n(7490);function c(e){let{prop:t,defaultProp:n,onChange:c=(()=>{})}=e;const[i,u]=function(e){let{defaultProp:t,onChange:n}=e;const c=(0,r.useState)(t),[i]=c,u=(0,r.useRef)(i),s=(0,o.c)(n);return(0,r.useEffect)((()=>{u.current!==i&&(s(i),u.current=i)}),[i,u,s]),c}({defaultProp:n,onChange:c}),s=void 0!==t,a=s?t:i,l=(0,o.c)(c);return[a,(0,r.useCallback)((e=>{if(s){const n="function"===typeof e?e(t):e;n!==t&&l(n)}else u(e)}),[s,t,u,l])]}},503:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(5043);const o=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}},3124:(e,t,n)=>{n.d(t,{X:()=>c});var r=n(5043),o=n(503);function c(e){const[t,n]=(0,r.useState)(void 0);return(0,o.N)((()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const t=new ResizeObserver((t=>{if(!Array.isArray(t))return;if(!t.length)return;const r=t[0];let o,c;if("borderBoxSize"in r){const e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;o=t.inlineSize,c=t.blockSize}else o=e.offsetWidth,c=e.offsetHeight;n({width:o,height:c})}));return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)}),[e]),t}}}]);
//# sourceMappingURL=334.e8a531bb.chunk.js.map