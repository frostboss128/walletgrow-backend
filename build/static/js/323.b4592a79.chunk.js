/*! For license information please see 323.b4592a79.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[323],{4680:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]])},3289:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]])},9463:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},8326:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},8186:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]])},8707:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]])},1199:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(1639).A)("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]])},2894:(e,t,r)=>{r.d(t,{C:()=>c});var n=r(5043),o=r(7950),l=r(2814),i=r(503);const c=e=>{const{present:t,children:r}=e,c=function(e){const[t,r]=(0,n.useState)(),l=(0,n.useRef)({}),c=(0,n.useRef)(e),s=(0,n.useRef)("none"),u=e?"mounted":"unmounted",[d,p]=function(e,t){return(0,n.useReducer)(((e,r)=>{const n=t[e][r];return null!==n&&void 0!==n?n:e}),e)}(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,n.useEffect)((()=>{const e=a(l.current);s.current="mounted"===d?e:"none"}),[d]),(0,i.N)((()=>{const t=l.current,r=c.current;if(r!==e){const n=s.current,o=a(t);if(e)p("MOUNT");else if("none"===o||"none"===(null===t||void 0===t?void 0:t.display))p("UNMOUNT");else{p(r&&n!==o?"ANIMATION_OUT":"UNMOUNT")}c.current=e}}),[e,p]),(0,i.N)((()=>{if(t){const e=e=>{const r=a(l.current).includes(e.animationName);e.target===t&&r&&(0,o.flushSync)((()=>p("ANIMATION_END")))},r=e=>{e.target===t&&(s.current=a(l.current))};return t.addEventListener("animationstart",r),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",r),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}p("ANIMATION_END")}),[t,p]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,n.useCallback)((e=>{e&&(l.current=getComputedStyle(e)),r(e)}),[])}}(t),s="function"===typeof r?r({present:c.isPresent}):n.Children.only(r),u=(0,l.s)(c.ref,s.ref);return"function"===typeof r||c.isPresent?(0,n.cloneElement)(s,{ref:u}):null};function a(e){return(null===e||void 0===e?void 0:e.animationName)||"none"}c.displayName="Presence"},8100:(e,t,r)=>{r.d(t,{LM:()=>K,OK:()=>J,VM:()=>A,bL:()=>G,lr:()=>x});var n=r(8168),o=r(5043),l=r(7920),i=r(2894),c=r(1862),a=r(2814),s=r(7490),u=r(4204),d=r(503),p=r(1664),f=r(858);const h="ScrollArea",[v,m]=(0,c.A)(h),[w,g]=v(h),b=(0,o.forwardRef)(((e,t)=>{const{__scopeScrollArea:r,type:i="hover",dir:c,scrollHideDelay:s=600,...d}=e,[p,f]=(0,o.useState)(null),[h,v]=(0,o.useState)(null),[m,g]=(0,o.useState)(null),[b,E]=(0,o.useState)(null),[S,y]=(0,o.useState)(null),[A,T]=(0,o.useState)(0),[C,R]=(0,o.useState)(0),[L,_]=(0,o.useState)(!1),[P,N]=(0,o.useState)(!1),k=(0,a.s)(t,(e=>f(e))),D=(0,u.jH)(c);return(0,o.createElement)(w,{scope:r,type:i,dir:D,scrollHideDelay:s,scrollArea:p,viewport:h,onViewportChange:v,content:m,onContentChange:g,scrollbarX:b,onScrollbarXChange:E,scrollbarXEnabled:L,onScrollbarXEnabledChange:_,scrollbarY:S,onScrollbarYChange:y,scrollbarYEnabled:P,onScrollbarYEnabledChange:N,onCornerWidthChange:T,onCornerHeightChange:R},(0,o.createElement)(l.sG.div,(0,n.A)({dir:D},d,{ref:k,style:{position:"relative","--radix-scroll-area-corner-width":A+"px","--radix-scroll-area-corner-height":C+"px",...e.style}})))})),E="ScrollAreaViewport",S=(0,o.forwardRef)(((e,t)=>{const{__scopeScrollArea:r,children:i,...c}=e,s=g(E,r),u=(0,o.useRef)(null),d=(0,a.s)(t,u,s.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.sG.div,(0,n.A)({"data-radix-scroll-area-viewport":""},c,{ref:d,style:{overflowX:s.scrollbarXEnabled?"scroll":"hidden",overflowY:s.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:s.onContentChange,style:{minWidth:"100%",display:"table"}},i)))})),y="ScrollAreaScrollbar",A=(0,o.forwardRef)(((e,t)=>{const{forceMount:r,...l}=e,i=g(y,e.__scopeScrollArea),{onScrollbarXEnabledChange:c,onScrollbarYEnabledChange:a}=i,s="horizontal"===e.orientation;return(0,o.useEffect)((()=>(s?c(!0):a(!0),()=>{s?c(!1):a(!1)})),[s,c,a]),"hover"===i.type?(0,o.createElement)(T,(0,n.A)({},l,{ref:t,forceMount:r})):"scroll"===i.type?(0,o.createElement)(C,(0,n.A)({},l,{ref:t,forceMount:r})):"auto"===i.type?(0,o.createElement)(R,(0,n.A)({},l,{ref:t,forceMount:r})):"always"===i.type?(0,o.createElement)(L,(0,n.A)({},l,{ref:t})):null})),T=(0,o.forwardRef)(((e,t)=>{const{forceMount:r,...l}=e,c=g(y,e.__scopeScrollArea),[a,s]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{const e=c.scrollArea;let t=0;if(e){const r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout((()=>s(!1)),c.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}}),[c.scrollArea,c.scrollHideDelay]),(0,o.createElement)(i.C,{present:r||a},(0,o.createElement)(R,(0,n.A)({"data-state":a?"visible":"hidden"},l,{ref:t})))})),C=(0,o.forwardRef)(((e,t)=>{const{forceMount:r,...l}=e,c=g(y,e.__scopeScrollArea),a="horizontal"===e.orientation,s=j((()=>d("SCROLL_END")),100),[u,d]=(p="hidden",h={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)(((e,t)=>{const r=h[e][t];return null!==r&&void 0!==r?r:e}),p));var p,h;return(0,o.useEffect)((()=>{if("idle"===u){const e=window.setTimeout((()=>d("HIDE")),c.scrollHideDelay);return()=>window.clearTimeout(e)}}),[u,c.scrollHideDelay,d]),(0,o.useEffect)((()=>{const e=c.viewport,t=a?"scrollLeft":"scrollTop";if(e){let r=e[t];const n=()=>{const n=e[t];r!==n&&(d("SCROLL"),s()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}}),[c.viewport,a,d,s]),(0,o.createElement)(i.C,{present:r||"hidden"!==u},(0,o.createElement)(L,(0,n.A)({"data-state":"hidden"===u?"hidden":"visible"},l,{ref:t,onPointerEnter:(0,f.m)(e.onPointerEnter,(()=>d("POINTER_ENTER"))),onPointerLeave:(0,f.m)(e.onPointerLeave,(()=>d("POINTER_LEAVE")))})))})),R=(0,o.forwardRef)(((e,t)=>{const r=g(y,e.__scopeScrollArea),{forceMount:l,...c}=e,[a,s]=(0,o.useState)(!1),u="horizontal"===e.orientation,d=j((()=>{if(r.viewport){const e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(u?e:t)}}),10);return q(r.viewport,d),q(r.content,d),(0,o.createElement)(i.C,{present:l||a},(0,o.createElement)(L,(0,n.A)({"data-state":a?"visible":"hidden"},c,{ref:t})))})),L=(0,o.forwardRef)(((e,t)=>{const{orientation:r="vertical",...l}=e,i=g(y,e.__scopeScrollArea),c=(0,o.useRef)(null),a=(0,o.useRef)(0),[s,u]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=W(s.viewport,s.content),p={...l,sizes:s,onSizesChange:u,hasThumb:Boolean(d>0&&d<1),onThumbChange:e=>c.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr";const o=X(r),l=o/2,i=t||l,c=o-i,a=r.scrollbar.paddingStart+i,s=r.scrollbar.size-r.scrollbar.paddingEnd-c,u=r.content-r.viewport,d="ltr"===n?[0,u]:[-1*u,0];return B([a,s],d)(e)}(e,a.current,s,t)}return"horizontal"===r?(0,o.createElement)(_,(0,n.A)({},p,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&c.current){const e=Y(i.viewport.scrollLeft,s,i.dir);c.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollLeft=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollLeft=f(e,i.dir))}})):"vertical"===r?(0,o.createElement)(P,(0,n.A)({},p,{ref:t,onThumbPositionChange:()=>{if(i.viewport&&c.current){const e=Y(i.viewport.scrollTop,s);c.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{i.viewport&&(i.viewport.scrollTop=e)},onDragScroll:e=>{i.viewport&&(i.viewport.scrollTop=f(e))}})):null})),_=(0,o.forwardRef)(((e,t)=>{const{sizes:r,onSizesChange:l,...i}=e,c=g(y,e.__scopeScrollArea),[s,u]=(0,o.useState)(),d=(0,o.useRef)(null),p=(0,a.s)(t,d,c.onScrollbarXChange);return(0,o.useEffect)((()=>{d.current&&u(getComputedStyle(d.current))}),[d]),(0,o.createElement)(D,(0,n.A)({"data-orientation":"horizontal"},i,{ref:p,sizes:r,style:{bottom:0,left:"rtl"===c.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===c.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":X(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(c.viewport){const n=c.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),F(n,r)&&t.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollWidth,viewport:c.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:H(s.paddingLeft),paddingEnd:H(s.paddingRight)}})}}))})),P=(0,o.forwardRef)(((e,t)=>{const{sizes:r,onSizesChange:l,...i}=e,c=g(y,e.__scopeScrollArea),[s,u]=(0,o.useState)(),d=(0,o.useRef)(null),p=(0,a.s)(t,d,c.onScrollbarYChange);return(0,o.useEffect)((()=>{d.current&&u(getComputedStyle(d.current))}),[d]),(0,o.createElement)(D,(0,n.A)({"data-orientation":"vertical"},i,{ref:p,sizes:r,style:{top:0,right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":X(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(c.viewport){const n=c.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),F(n,r)&&t.preventDefault()}},onResize:()=>{d.current&&c.viewport&&s&&l({content:c.viewport.scrollHeight,viewport:c.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:H(s.paddingTop),paddingEnd:H(s.paddingBottom)}})}}))})),[N,k]=v(y),D=(0,o.forwardRef)(((e,t)=>{const{__scopeScrollArea:r,sizes:i,hasThumb:c,onThumbChange:u,onThumbPointerUp:d,onThumbPointerDown:p,onThumbPositionChange:h,onDragScroll:v,onWheelScroll:m,onResize:w,...b}=e,E=g(y,r),[S,A]=(0,o.useState)(null),T=(0,a.s)(t,(e=>A(e))),C=(0,o.useRef)(null),R=(0,o.useRef)(""),L=E.viewport,_=i.content-i.viewport,P=(0,s.c)(m),k=(0,s.c)(h),D=j(w,10);function M(e){if(C.current){const t=e.clientX-C.current.left,r=e.clientY-C.current.top;v({x:t,y:r})}}return(0,o.useEffect)((()=>{const e=e=>{const t=e.target;(null===S||void 0===S?void 0:S.contains(t))&&P(e,_)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})}),[L,S,_,P]),(0,o.useEffect)(k,[i,k]),q(S,D),q(E.content,D),(0,o.createElement)(N,{scope:r,scrollbar:S,hasThumb:c,onThumbChange:(0,s.c)(u),onThumbPointerUp:(0,s.c)(d),onThumbPositionChange:k,onThumbPointerDown:(0,s.c)(p)},(0,o.createElement)(l.sG.div,(0,n.A)({},b,{ref:T,style:{position:"absolute",...b.style},onPointerDown:(0,f.m)(e.onPointerDown,(e=>{if(0===e.button){e.target.setPointerCapture(e.pointerId),C.current=S.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",E.viewport&&(E.viewport.style.scrollBehavior="auto"),M(e)}})),onPointerMove:(0,f.m)(e.onPointerMove,M),onPointerUp:(0,f.m)(e.onPointerUp,(e=>{const t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=R.current,E.viewport&&(E.viewport.style.scrollBehavior=""),C.current=null}))})))})),M="ScrollAreaThumb",x=(0,o.forwardRef)(((e,t)=>{const{forceMount:r,...l}=e,c=k(M,e.__scopeScrollArea);return(0,o.createElement)(i.C,{present:r||c.hasThumb},(0,o.createElement)(z,(0,n.A)({ref:t},l)))})),z=(0,o.forwardRef)(((e,t)=>{const{__scopeScrollArea:r,style:i,...c}=e,s=g(M,r),u=k(M,r),{onThumbPositionChange:d}=u,p=(0,a.s)(t,(e=>u.onThumbChange(e))),h=(0,o.useRef)(),v=j((()=>{h.current&&(h.current(),h.current=void 0)}),100);return(0,o.useEffect)((()=>{const e=s.viewport;if(e){const t=()=>{if(v(),!h.current){const t=V(e,d);h.current=t,d()}};return d(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}}),[s.viewport,v,d]),(0,o.createElement)(l.sG.div,(0,n.A)({"data-state":u.hasThumb?"visible":"hidden"},c,{ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...i},onPointerDownCapture:(0,f.m)(e.onPointerDownCapture,(e=>{const t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;u.onThumbPointerDown({x:r,y:n})})),onPointerUp:(0,f.m)(e.onPointerUp,u.onThumbPointerUp)}))})),O="ScrollAreaCorner",U=(0,o.forwardRef)(((e,t)=>{const r=g(O,e.__scopeScrollArea),l=Boolean(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&l?(0,o.createElement)(I,(0,n.A)({},e,{ref:t})):null})),I=(0,o.forwardRef)(((e,t)=>{const{__scopeScrollArea:r,...i}=e,c=g(O,r),[a,s]=(0,o.useState)(0),[u,d]=(0,o.useState)(0),p=Boolean(a&&u);return q(c.scrollbarX,(()=>{var e;const t=(null===(e=c.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;c.onCornerHeightChange(t),d(t)})),q(c.scrollbarY,(()=>{var e;const t=(null===(e=c.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;c.onCornerWidthChange(t),s(t)})),p?(0,o.createElement)(l.sG.div,(0,n.A)({},i,{ref:t,style:{width:a,height:u,position:"absolute",right:"ltr"===c.dir?0:void 0,left:"rtl"===c.dir?0:void 0,bottom:0,...e.style}})):null}));function H(e){return e?parseInt(e,10):0}function W(e,t){const r=e/t;return isNaN(r)?0:r}function X(e){const t=W(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=(e.scrollbar.size-r)*t;return Math.max(n,18)}function Y(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr";const n=X(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,c=l-n,a="ltr"===r?[0,i]:[-1*i,0],s=(0,p.q)(e,a);return B([0,i],[0,c])(s)}function B(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function F(e,t){return e>0&&e<t}const V=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return function o(){const l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,c=r.top!==l.top;(i||c)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function j(e,t){const r=(0,s.c)(e),n=(0,o.useRef)(0);return(0,o.useEffect)((()=>()=>window.clearTimeout(n.current)),[]),(0,o.useCallback)((()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)}),[r,t])}function q(e,t){const r=(0,s.c)(t);(0,d.N)((()=>{let t=0;if(e){const n=new ResizeObserver((()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)}));return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}}),[e,r])}const G=b,K=S,J=U}}]);
//# sourceMappingURL=323.b4592a79.chunk.js.map