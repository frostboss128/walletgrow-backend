/*! For license information please see 539.f7701dbc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[539],{6210:(t,e,n)=>{n.d(e,{A:()=>o});const o=(0,n(1639).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},5463:(t,e,n)=>{n.d(e,{N:()=>a});var o=n(5043),r=n(1862),i=n(2814),l=n(6851);function a(t){const e=t+"CollectionProvider",[n,a]=(0,r.A)(e),[c,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),f=t=>{const{scope:e,children:n}=t,r=o.useRef(null),i=o.useRef(new Map).current;return o.createElement(c,{scope:e,itemMap:i,collectionRef:r},n)},u=t+"CollectionSlot",d=o.forwardRef(((t,e)=>{const{scope:n,children:r}=t,a=s(u,n),c=(0,i.s)(e,a.collectionRef);return o.createElement(l.DX,{ref:c},r)})),p=t+"CollectionItemSlot",m="data-radix-collection-item",h=o.forwardRef(((t,e)=>{const{scope:n,children:r,...a}=t,c=o.useRef(null),f=(0,i.s)(e,c),u=s(p,n);return o.useEffect((()=>(u.itemMap.set(c,{ref:c,...a}),()=>{u.itemMap.delete(c)}))),o.createElement(l.DX,{[m]:"",ref:f},r)}));return[{Provider:f,Slot:d,ItemSlot:h},function(e){const n=s(t+"CollectionConsumer",e);return o.useCallback((()=>{const t=n.collectionRef.current;if(!t)return[];const e=Array.from(t.querySelectorAll("[".concat(m,"]")));return Array.from(n.itemMap.values()).sort(((t,n)=>e.indexOf(t.ref.current)-e.indexOf(n.ref.current)))}),[n.collectionRef,n.itemMap])},a]}},4204:(t,e,n)=>{n.d(e,{jH:()=>i});var o=n(5043);const r=(0,o.createContext)(void 0);function i(t){const e=(0,o.useContext)(r);return t||e||"ltr"}},2593:(t,e,n)=>{n.d(e,{Mz:()=>Ut,i3:()=>Kt,UC:()=>Jt,bL:()=>Gt,Bk:()=>Dt});var o=n(8168),r=n(5043);const i=["top","right","bottom","left"],l=Math.min,a=Math.max,c=Math.round,s=Math.floor,f=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},d={start:"end",end:"start"};function p(t,e,n){return a(t,l(e,n))}function m(t,e){return"function"===typeof t?t(e):t}function h(t){return t.split("-")[0]}function g(t){return t.split("-")[1]}function y(t){return"x"===t?"y":"x"}function w(t){return"y"===t?"height":"width"}function v(t){return["top","bottom"].includes(h(t))?"y":"x"}function x(t){return y(v(t))}function b(t){return t.replace(/start|end/g,(t=>d[t]))}function A(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function R(t){return"number"!==typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function E(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function S(t,e,n){let{reference:o,floating:r}=t;const i=v(e),l=x(e),a=w(l),c=h(e),s="y"===i,f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,d=o[a]/2-r[a]/2;let p;switch(c){case"top":p={x:f,y:o.y-r.height};break;case"bottom":p={x:f,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-r.width,y:u};break;default:p={x:o.x,y:o.y}}switch(g(e)){case"start":p[l]-=d*(n&&s?-1:1);break;case"end":p[l]+=d*(n&&s?-1:1)}return p}async function P(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:l,elements:a,strategy:c}=t,{boundary:s="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=m(e,t),h=R(p),g=a[d?"floating"===u?"reference":"floating":u],y=E(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(a.floating)),boundary:s,rootBoundary:f,strategy:c})),w="floating"===u?{...l.floating,x:o,y:r}:l.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(a.floating)),x=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},b=E(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:v,strategy:c}):w);return{top:(y.top-b.top+h.top)/x.y,bottom:(b.bottom-y.bottom+h.bottom)/x.y,left:(y.left-b.left+h.left)/x.x,right:(b.right-y.right+h.right)/x.x}}function C(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function O(t){return i.some((e=>t[e]>=0))}const L=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:r,y:i,placement:l,middlewareData:a}=e,c=await async function(t,e){const{placement:n,platform:o,elements:r}=t,i=await(null==o.isRTL?void 0:o.isRTL(r.floating)),l=h(n),a=g(n),c="y"===v(n),s=["left","top"].includes(l)?-1:1,f=i&&c?-1:1,u=m(e,t);let{mainAxis:d,crossAxis:p,alignmentAxis:y}="number"===typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"===typeof y&&(p="end"===a?-1*y:y),c?{x:p*f,y:d*s}:{x:d*s,y:p*f}}(e,t);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:l}}}}};function T(t){return H(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function D(t){var e;return null==(e=(H(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function H(t){return t instanceof Node||t instanceof k(t).Node}function M(t){return t instanceof Element||t instanceof k(t).Element}function W(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function F(t){return"undefined"!==typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof k(t).ShadowRoot)}function z(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function B(t){return["table","td","th"].includes(T(t))}function _(t){const e=N(),n=X(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function N(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function V(t){return["html","body","#document"].includes(T(t))}function X(t){return k(t).getComputedStyle(t)}function I(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if("html"===T(t))return t;const e=t.assignedSlot||t.parentNode||F(t)&&t.host||D(t);return F(e)?e.host:e}function j(t){const e=Y(t);return V(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&z(e)?e:j(e)}function $(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const r=j(t),i=r===(null==(o=t.ownerDocument)?void 0:o.body),l=k(r);return i?e.concat(l,l.visualViewport||[],z(r)?r:[],l.frameElement&&n?$(l.frameElement):[]):e.concat(r,$(r,[],n))}function q(t){const e=X(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=W(t),i=r?t.offsetWidth:n,l=r?t.offsetHeight:o,a=c(n)!==i||c(o)!==l;return a&&(n=i,o=l),{width:n,height:o,$:a}}function G(t){return M(t)?t:t.contextElement}function U(t){const e=G(t);if(!W(e))return f(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=q(e);let l=(i?c(n.width):n.width)/o,a=(i?c(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const J=f(0);function K(t){const e=k(t);return N()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:J}function Q(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),i=G(t);let l=f(1);e&&(o?M(o)&&(l=U(o)):l=U(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==k(t))&&e}(i,n,o)?K(i):f(0);let c=(r.left+a.x)/l.x,s=(r.top+a.y)/l.y,u=r.width/l.x,d=r.height/l.y;if(i){const t=k(i),e=o&&M(o)?k(o):o;let n=t,r=n.frameElement;for(;r&&o&&e!==n;){const t=U(r),e=r.getBoundingClientRect(),o=X(r),i=e.left+(r.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(r.clientTop+parseFloat(o.paddingTop))*t.y;c*=t.x,s*=t.y,u*=t.x,d*=t.y,c+=i,s+=l,n=k(r),r=n.frameElement}}return E({width:u,height:d,x:c,y:s})}const Z=[":popover-open",":modal"];function tt(t){return Z.some((e=>{try{return t.matches(e)}catch(n){return!1}}))}function et(t){return Q(D(t)).left+I(t).scrollLeft}function nt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=k(t),o=D(t),r=n.visualViewport;let i=o.clientWidth,l=o.clientHeight,a=0,c=0;if(r){i=r.width,l=r.height;const t=N();(!t||t&&"fixed"===e)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:i,height:l,x:a,y:c}}(t,n);else if("document"===e)o=function(t){const e=D(t),n=I(t),o=t.ownerDocument.body,r=a(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=a(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+et(t);const c=-n.scrollTop;return"rtl"===X(o).direction&&(l+=a(e.clientWidth,o.clientWidth)-r),{width:r,height:i,x:l,y:c}}(D(t));else if(M(e))o=function(t,e){const n=Q(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=W(t)?U(t):f(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:o*i.y}}(e,n);else{const n=K(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return E(o)}function ot(t,e){const n=Y(t);return!(n===e||!M(n)||V(n))&&("fixed"===X(n).position||ot(n,e))}function rt(t,e,n){const o=W(e),r=D(e),i="fixed"===n,l=Q(t,!0,i,e);let a={scrollLeft:0,scrollTop:0};const c=f(0);if(o||!o&&!i)if(("body"!==T(e)||z(r))&&(a=I(e)),o){const t=Q(e,!0,i,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else r&&(c.x=et(r));return{x:l.left+a.scrollLeft-c.x,y:l.top+a.scrollTop-c.y,width:l.width,height:l.height}}function it(t,e){return W(t)&&"fixed"!==X(t).position?e?e(t):t.offsetParent:null}function lt(t,e){const n=k(t);if(!W(t)||tt(t))return n;let o=it(t,e);for(;o&&B(o)&&"static"===X(o).position;)o=it(o,e);return o&&("html"===T(o)||"body"===T(o)&&"static"===X(o).position&&!_(o))?n:o||function(t){let e=Y(t);for(;W(e)&&!V(e);){if(_(e))return e;e=Y(e)}return null}(t)||n}const at={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:r}=t;const i="fixed"===r,l=D(o),a=!!e&&tt(e.floating);if(o===l||a&&i)return n;let c={scrollLeft:0,scrollTop:0},s=f(1);const u=f(0),d=W(o);if((d||!d&&!i)&&(("body"!==T(o)||z(l))&&(c=I(o)),W(o))){const t=Q(o);s=U(o),u.x=t.x+o.clientLeft,u.y=t.y+o.clientTop}return{width:n.width*s.x,height:n.height*s.y,x:n.x*s.x-c.scrollLeft*s.x+u.x,y:n.y*s.y-c.scrollTop*s.y+u.y}},getDocumentElement:D,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:r}=t;const i=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=$(t,[],!1).filter((t=>M(t)&&"body"!==T(t))),r=null;const i="fixed"===X(t).position;let l=i?Y(t):t;for(;M(l)&&!V(l);){const e=X(l),n=_(l);n||"fixed"!==e.position||(r=null),(i?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||z(l)&&!n&&ot(t,l))?o=o.filter((t=>t!==l)):r=e,l=Y(l)}return e.set(t,o),o}(e,this._c):[].concat(n),o],c=i[0],s=i.reduce(((t,n)=>{const o=nt(e,n,r);return t.top=a(o.top,t.top),t.right=l(o.right,t.right),t.bottom=l(o.bottom,t.bottom),t.left=a(o.left,t.left),t}),nt(e,c,r));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:lt,getElementRects:async function(t){const e=this.getOffsetParent||lt,n=this.getDimensions;return{reference:rt(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=q(t);return{width:e,height:n}},getScale:U,isElement:M,isRTL:function(t){return"rtl"===X(t).direction}};function ct(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:c="function"===typeof ResizeObserver,layoutShift:f="function"===typeof IntersectionObserver,animationFrame:u=!1}=o,d=G(t),p=r||i?[...d?$(d):[],...$(e)]:[];p.forEach((t=>{r&&t.addEventListener("scroll",n,{passive:!0}),i&&t.addEventListener("resize",n)}));const m=d&&f?function(t,e){let n,o=null;const r=D(t);function i(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function c(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),i();const{left:d,top:p,width:m,height:h}=t.getBoundingClientRect();if(f||e(),!m||!h)return;const g={rootMargin:-s(p)+"px "+-s(r.clientWidth-(d+m))+"px "+-s(r.clientHeight-(p+h))+"px "+-s(d)+"px",threshold:a(0,l(1,u))||1};let y=!0;function w(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return c();e?c(!1,e):n=setTimeout((()=>{c(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(w,{...g,root:r.ownerDocument})}catch(v){o=new IntersectionObserver(w,g)}o.observe(t)}(!0),i}(d,n):null;let h,g=-1,y=null;c&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(e)}))),n()})),d&&!u&&y.observe(d),y.observe(e));let w=u?Q(t):null;return u&&function e(){const o=Q(t);!w||o.x===w.x&&o.y===w.y&&o.width===w.width&&o.height===w.height||n();w=o,h=requestAnimationFrame(e)}(),n(),()=>{var t;p.forEach((t=>{r&&t.removeEventListener("scroll",n),i&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=y)||t.disconnect(),y=null,u&&cancelAnimationFrame(h)}}const st=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=m(t,e),s={x:n,y:o},f=await P(e,c),u=v(h(r)),d=y(u);let g=s[d],w=s[u];if(i){const t="y"===d?"bottom":"right";g=p(g+f["y"===d?"top":"left"],g,g-f[t])}if(l){const t="y"===u?"bottom":"right";w=p(w+f["y"===u?"top":"left"],w,w-f[t])}const x=a.fn({...e,[d]:g,[u]:w});return{...x,data:{x:x.x-n,y:x.y-o}}}}},ft=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:r,middlewareData:i,rects:l,initialPlacement:a,platform:c,elements:s}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...R}=m(t,e);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const E=h(r),S=h(a)===a,C=await(null==c.isRTL?void 0:c.isRTL(s.floating)),O=d||(S||!v?[A(a)]:function(t){const e=A(t);return[b(t),e,b(e)]}(a));d||"none"===y||O.push(...function(t,e,n,o){const r=g(t);let i=function(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:l;default:return[]}}(h(t),"start"===n,o);return r&&(i=i.map((t=>t+"-"+r)),e&&(i=i.concat(i.map(b)))),i}(a,v,y,C));const L=[a,...O],T=await P(e,R),k=[];let D=(null==(o=i.flip)?void 0:o.overflows)||[];if(f&&k.push(T[E]),u){const t=function(t,e,n){void 0===n&&(n=!1);const o=g(t),r=x(t),i=w(r);let l="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=A(l)),[l,A(l)]}(r,l,C);k.push(T[t[0]],T[t[1]])}if(D=[...D,{placement:r,overflows:k}],!k.every((t=>t<=0))){var H,M;const t=((null==(H=i.flip)?void 0:H.index)||0)+1,e=L[t];if(e)return{data:{index:t,overflows:D},reset:{placement:e}};let n=null==(M=D.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:M.placement;if(!n)switch(p){case"bestFit":{var W;const t=null==(W=D.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:W[0];t&&(n=t);break}case"initialPlacement":n=a}if(r!==n)return{reset:{placement:n}}}return{}}}},ut=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:r,elements:i}=e,{apply:c=(()=>{}),...s}=m(t,e),f=await P(e,s),u=h(n),d=g(n),p="y"===v(n),{width:y,height:w}=o.floating;let x,b;"top"===u||"bottom"===u?(x=u,b=d===(await(null==r.isRTL?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(b=u,x="end"===d?"top":"bottom");const A=w-f[x],R=y-f[b],E=!e.middlewareData.shift;let S=A,C=R;if(p){const t=y-f.left-f.right;C=d||E?l(R,t):t}else{const t=w-f.top-f.bottom;S=d||E?l(A,t):t}if(E&&!d){const t=a(f.left,0),e=a(f.right,0),n=a(f.top,0),o=a(f.bottom,0);p?C=y-2*(0!==t||0!==e?t+e:a(f.left,f.right)):S=w-2*(0!==n||0!==o?n+o:a(f.top,f.bottom))}await c({...e,availableWidth:C,availableHeight:S});const O=await r.getDimensions(i.floating);return y!==O.width||w!==O.height?{reset:{rects:!0}}:{}}}},dt=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...r}=m(t,e);switch(o){case"referenceHidden":{const t=C(await P(e,{...r,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:O(t)}}}case"escaped":{const t=C(await P(e,{...r,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:O(t)}}}default:return{}}}}},pt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:r,rects:i,platform:a,elements:c,middlewareData:s}=e,{element:f,padding:u=0}=m(t,e)||{};if(null==f)return{};const d=R(u),h={x:n,y:o},y=x(r),v=w(y),b=await a.getDimensions(f),A="y"===y,E=A?"top":"left",S=A?"bottom":"right",P=A?"clientHeight":"clientWidth",C=i.reference[v]+i.reference[y]-h[y]-i.floating[v],O=h[y]-i.reference[y],L=await(null==a.getOffsetParent?void 0:a.getOffsetParent(f));let T=L?L[P]:0;T&&await(null==a.isElement?void 0:a.isElement(L))||(T=c.floating[P]||i.floating[v]);const k=C/2-O/2,D=T/2-b[v]/2-1,H=l(d[E],D),M=l(d[S],D),W=H,F=T-b[v]-M,z=T/2-b[v]/2+k,B=p(W,z,F),_=!s.arrow&&null!=g(r)&&z!==B&&i.reference[v]/2-(z<W?H:M)-b[v]/2<0,N=_?z<W?z-W:z-F:0;return{[y]:h[y]+N,data:{[y]:B,centerOffset:z-B-N,..._&&{alignmentOffset:N}},reset:_}}}),mt=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:l}=e,{offset:a=0,mainAxis:c=!0,crossAxis:s=!0}=m(t,e),f={x:n,y:o},u=v(r),d=y(u);let p=f[d],g=f[u];const w=m(a,e),x="number"===typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(c){const t="y"===d?"height":"width",e=i.reference[d]-i.floating[t]+x.mainAxis,n=i.reference[d]+i.reference[t]-x.mainAxis;p<e?p=e:p>n&&(p=n)}if(s){var b,A;const t="y"===d?"width":"height",e=["top","left"].includes(h(r)),n=i.reference[u]-i.floating[t]+(e&&(null==(b=l.offset)?void 0:b[u])||0)+(e?0:x.crossAxis),o=i.reference[u]+i.reference[t]+(e?0:(null==(A=l.offset)?void 0:A[u])||0)-(e?x.crossAxis:0);g<n?g=n:g>o&&(g=o)}return{[d]:p,[u]:g}}}},ht=(t,e,n)=>{const o=new Map,r={platform:at,...n},i={...r.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:l}=n,a=i.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let s=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=S(s,o,c),d=o,p={},m=0;for(let h=0;h<a.length;h++){const{name:n,fn:i}=a[h],{x:g,y:y,data:w,reset:v}=await i({x:f,y:u,initialPlacement:o,placement:d,strategy:r,middlewareData:p,rects:s,platform:l,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,p={...p,[n]:{...p[n],...w}},v&&m<=50&&(m++,"object"===typeof v&&(v.placement&&(d=v.placement),v.rects&&(s=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:f,y:u}=S(s,d,c))),h=-1)}return{x:f,y:u,placement:d,strategy:r,middlewareData:p}})(t,e,{...r,platform:i})};var gt=n(7950);var yt="undefined"!==typeof document?r.useLayoutEffect:r.useEffect;function wt(t,e){if(t===e)return!0;if(typeof t!==typeof e)return!1;if("function"===typeof t&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&"object"===typeof t){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;0!==o--;)if(!wt(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;0!==o--;)if(!{}.hasOwnProperty.call(e,r[o]))return!1;for(o=n;0!==o--;){const n=r[o];if(("_owner"!==n||!t.$$typeof)&&!wt(t[n],e[n]))return!1}return!0}return t!==t&&e!==e}function vt(t){if("undefined"===typeof window)return 1;return(t.ownerDocument.defaultView||window).devicePixelRatio||1}function xt(t,e){const n=vt(t);return Math.round(e*n)/n}function bt(t){const e=r.useRef(t);return yt((()=>{e.current=t})),e}var At=n(7920);const Rt=(0,r.forwardRef)(((t,e)=>{const{children:n,width:i=10,height:l=5,...a}=t;return(0,r.createElement)(At.sG.svg,(0,o.A)({},a,{ref:e,width:i,height:l,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),t.asChild?n:(0,r.createElement)("polygon",{points:"0,0 30,0 15,10"}))})),Et=Rt;var St=n(2814),Pt=n(1862),Ct=n(7490),Ot=n(503),Lt=n(3124);const Tt="Popper",[kt,Dt]=(0,Pt.A)(Tt),[Ht,Mt]=kt(Tt),Wt=t=>{const{__scopePopper:e,children:n}=t,[o,i]=(0,r.useState)(null);return(0,r.createElement)(Ht,{scope:e,anchor:o,onAnchorChange:i},n)},Ft="PopperAnchor",zt=(0,r.forwardRef)(((t,e)=>{const{__scopePopper:n,virtualRef:i,...l}=t,a=Mt(Ft,n),c=(0,r.useRef)(null),s=(0,St.s)(e,c);return(0,r.useEffect)((()=>{a.onAnchorChange((null===i||void 0===i?void 0:i.current)||c.current)})),i?null:(0,r.createElement)(At.sG.div,(0,o.A)({},l,{ref:s}))})),Bt="PopperContent",[_t,Nt]=kt(Bt),Vt=(0,r.forwardRef)(((t,e)=>{var n,i,l,a,c,s,f,u;const{__scopePopper:d,side:p="bottom",sideOffset:m=0,align:h="center",alignOffset:g=0,arrowPadding:y=0,avoidCollisions:w=!0,collisionBoundary:v=[],collisionPadding:x=0,sticky:b="partial",hideWhenDetached:A=!1,updatePositionStrategy:R="optimized",onPlaced:E,...S}=t,P=Mt(Bt,d),[C,O]=(0,r.useState)(null),T=(0,St.s)(e,(t=>O(t))),[k,D]=(0,r.useState)(null),H=(0,Lt.X)(k),M=null!==(n=null===H||void 0===H?void 0:H.width)&&void 0!==n?n:0,W=null!==(i=null===H||void 0===H?void 0:H.height)&&void 0!==i?i:0,F=p+("center"!==h?"-"+h:""),z="number"===typeof x?x:{top:0,right:0,bottom:0,left:0,...x},B=Array.isArray(v)?v:[v],_=B.length>0,N={padding:z,boundary:B.filter(jt),altBoundary:_},{refs:V,floatingStyles:X,placement:I,isPositioned:Y,middlewareData:j}=function(t){void 0===t&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:l,floating:a}={},transform:c=!0,whileElementsMounted:s,open:f}=t,[u,d]=r.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[p,m]=r.useState(o);wt(p,o)||m(o);const[h,g]=r.useState(null),[y,w]=r.useState(null),v=r.useCallback((t=>{t!==R.current&&(R.current=t,g(t))}),[]),x=r.useCallback((t=>{t!==E.current&&(E.current=t,w(t))}),[]),b=l||h,A=a||y,R=r.useRef(null),E=r.useRef(null),S=r.useRef(u),P=null!=s,C=bt(s),O=bt(i),L=r.useCallback((()=>{if(!R.current||!E.current)return;const t={placement:e,strategy:n,middleware:p};O.current&&(t.platform=O.current),ht(R.current,E.current,t).then((t=>{const e={...t,isPositioned:!0};T.current&&!wt(S.current,e)&&(S.current=e,gt.flushSync((()=>{d(e)})))}))}),[p,e,n,O]);yt((()=>{!1===f&&S.current.isPositioned&&(S.current.isPositioned=!1,d((t=>({...t,isPositioned:!1}))))}),[f]);const T=r.useRef(!1);yt((()=>(T.current=!0,()=>{T.current=!1})),[]),yt((()=>{if(b&&(R.current=b),A&&(E.current=A),b&&A){if(C.current)return C.current(b,A,L);L()}}),[b,A,L,C,P]);const k=r.useMemo((()=>({reference:R,floating:E,setReference:v,setFloating:x})),[v,x]),D=r.useMemo((()=>({reference:b,floating:A})),[b,A]),H=r.useMemo((()=>{const t={position:n,left:0,top:0};if(!D.floating)return t;const e=xt(D.floating,u.x),o=xt(D.floating,u.y);return c?{...t,transform:"translate("+e+"px, "+o+"px)",...vt(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:o}}),[n,c,D.floating,u.x,u.y]);return r.useMemo((()=>({...u,update:L,refs:k,elements:D,floatingStyles:H})),[u,L,k,D,H])}({strategy:"fixed",placement:F,whileElementsMounted:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ct(...e,{animationFrame:"always"===R})},elements:{reference:P.anchor},middleware:[L({mainAxis:m+W,alignmentAxis:g}),w&&st({mainAxis:!0,crossAxis:!1,limiter:"partial"===b?mt():void 0,...N}),w&&ft({...N}),ut({...N,apply:t=>{let{elements:e,rects:n,availableWidth:o,availableHeight:r}=t;const{width:i,height:l}=n.reference,a=e.floating.style;a.setProperty("--radix-popper-available-width","".concat(o,"px")),a.setProperty("--radix-popper-available-height","".concat(r,"px")),a.setProperty("--radix-popper-anchor-width","".concat(i,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),k&&($={element:k,padding:y},{name:"arrow",options:$,fn(t){const{element:e,padding:n}="function"===typeof $?$(t):$;return e&&(o=e,{}.hasOwnProperty.call(o,"current"))?null!=e.current?pt({element:e.current,padding:n}).fn(t):{}:e?pt({element:e,padding:n}).fn(t):{};var o}}),$t({arrowWidth:M,arrowHeight:W}),A&&dt({strategy:"referenceHidden",...N})]});var $;const[q,G]=qt(I),U=(0,Ct.c)(E);(0,Ot.N)((()=>{Y&&(null===U||void 0===U||U())}),[Y,U]);const J=null===(l=j.arrow)||void 0===l?void 0:l.x,K=null===(a=j.arrow)||void 0===a?void 0:a.y,Q=0!==(null===(c=j.arrow)||void 0===c?void 0:c.centerOffset),[Z,tt]=(0,r.useState)();return(0,Ot.N)((()=>{C&&tt(window.getComputedStyle(C).zIndex)}),[C]),(0,r.createElement)("div",{ref:V.setFloating,"data-radix-popper-content-wrapper":"",style:{...X,transform:Y?X.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Z,"--radix-popper-transform-origin":[null===(s=j.transformOrigin)||void 0===s?void 0:s.x,null===(f=j.transformOrigin)||void 0===f?void 0:f.y].join(" ")},dir:t.dir},(0,r.createElement)(_t,{scope:d,placedSide:q,onArrowChange:D,arrowX:J,arrowY:K,shouldHideArrow:Q},(0,r.createElement)(At.sG.div,(0,o.A)({"data-side":q,"data-align":G},S,{ref:T,style:{...S.style,animation:Y?void 0:"none",opacity:null!==(u=j.hide)&&void 0!==u&&u.referenceHidden?0:void 0}}))))})),Xt="PopperArrow",It={top:"bottom",right:"left",bottom:"top",left:"right"},Yt=(0,r.forwardRef)((function(t,e){const{__scopePopper:n,...i}=t,l=Nt(Xt,n),a=It[l.placedSide];return(0,r.createElement)("span",{ref:l.onArrowChange,style:{position:"absolute",left:l.arrowX,top:l.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[l.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[l.placedSide],visibility:l.shouldHideArrow?"hidden":void 0}},(0,r.createElement)(Et,(0,o.A)({},i,{ref:e,style:{...i.style,display:"block"}})))}));function jt(t){return null!==t}const $t=t=>({name:"transformOrigin",options:t,fn(e){var n,o,r,i,l;const{placement:a,rects:c,middlewareData:s}=e,f=0!==(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset),u=f?0:t.arrowWidth,d=f?0:t.arrowHeight,[p,m]=qt(a),h={start:"0%",center:"50%",end:"100%"}[m],g=(null!==(o=null===(r=s.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+u/2,y=(null!==(i=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+d/2;let w="",v="";return"bottom"===p?(w=f?h:"".concat(g,"px"),v="".concat(-d,"px")):"top"===p?(w=f?h:"".concat(g,"px"),v="".concat(c.floating.height+d,"px")):"right"===p?(w="".concat(-d,"px"),v=f?h:"".concat(y,"px")):"left"===p&&(w="".concat(c.floating.width+d,"px"),v=f?h:"".concat(y,"px")),{data:{x:w,y:v}}}});function qt(t){const[e,n="center"]=t.split("-");return[e,n]}const Gt=Wt,Ut=zt,Jt=Vt,Kt=Yt},3124:(t,e,n)=>{n.d(e,{X:()=>i});var o=n(5043),r=n(503);function i(t){const[e,n]=(0,o.useState)(void 0);return(0,r.N)((()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const e=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const o=e[0];let r,i;if("borderBoxSize"in o){const t=o.borderBoxSize,e=Array.isArray(t)?t[0]:t;r=e.inlineSize,i=e.blockSize}else r=t.offsetWidth,i=t.offsetHeight;n({width:r,height:i})}));return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}n(void 0)}),[t]),e}}}]);
//# sourceMappingURL=539.f7701dbc.chunk.js.map