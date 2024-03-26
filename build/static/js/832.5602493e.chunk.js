/*! For license information please see 832.5602493e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[832],{7053:(e,t,r)=>{r.d(t,{A:()=>d});r(5043);var a=r(5475),s=r(994),i=r(579);const d=e=>{let{to:t,title:r}=e;return(0,i.jsxs)("div",{className:"bg-primary text-primary-foreground px-4 py-3 text-center relative",children:[(0,i.jsx)(a.N_,{to:t,children:(0,i.jsx)(s.A,{className:"absolute left-3"})}),(0,i.jsx)("h1",{children:r})]})}},5451:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});r(5043);var a=r(7963),s=r(5203),i=r(1386),d=r(579);const n=e=>{let{withdraw:t}=e;return(0,d.jsx)("div",{className:"pt-2",children:(0,d.jsxs)("div",{className:"grid grid-cols-12 gap-2 items-stretch pb-2",children:[(0,d.jsx)("div",{className:"col-span-2 flex items-center w-12",children:(0,d.jsx)("img",{src:"/images/account/withdraw.png",loading:"lazy",alt:"withdraw image",width:50,height:50,className:"!w-12"})}),(0,d.jsxs)("div",{className:"col-span-7 flex flex-col",children:[(0,d.jsx)("div",{className:"font-medium truncate",children:t.address}),(0,d.jsx)("div",{className:"text-sm",children:(0,i.A)(t.created_at)})]}),(0,d.jsxs)("div",{className:"col-span-3 text-right",children:[(0,d.jsx)("div",{className:(0,s.$)("font-medium","Approved"===t.status&&"text-green-600","Pending"===t.status&&"text-sky-500","Failed"===t.status&&"text-red-600"),children:t.status}),(0,d.jsx)("div",{children:t.coin})]})]})})};var l=r(7053);r(6328),r(9679);const o=()=>{const{data:e,isLoading:t,isError:r}=(0,a.fb)();return(0,d.jsxs)("div",{className:"space-y-2",children:[(0,d.jsx)(l.A,{to:"/account",title:"Withdraw Record"}),null!==e&&void 0!==e&&e.length?(0,d.jsx)("div",{className:"divide-y-2 px-4 space-y-2",children:null===e||void 0===e?void 0:e.map((e=>(0,d.jsx)(n,{withdraw:e},e._id)))}):(0,d.jsx)("div",{className:"grid place-content-center min-h-80",children:(0,d.jsx)("h1",{className:"text-2xl font-bold text-sky-600 text-center",children:"There is no withdraw records"})})]})}},7963:(e,t,r)=>{r.d(t,{CH:()=>c,G_:()=>n,MC:()=>d,O_:()=>u,dP:()=>i,eB:()=>o,fb:()=>l,yD:()=>h});var a=r(1016);const s=r(487).l.injectEndpoints({endpoints:e=>({getWalletInfo:e.query({query:()=>({url:a.k_,method:"GET"}),keepUnusedDataFor:5}),outWallet:e.mutation({query:e=>({url:"".concat(a.k_,"/out"),method:"POST",body:e})}),withdrawWallet:e.mutation({query:e=>({url:"".concat(a.k_,"/withdraw"),method:"POST",body:e})}),getWithdraws:e.query({query:()=>({url:"".concat(a.k_,"/withdraw"),method:"GET"}),keepUnusedDataFor:5}),getAllWithdraws:e.query({query:()=>({url:"".concat(a.k_,"/withdraws"),method:"GET"}),keepUnusedDataFor:5}),getWithdraw:e.query({query:e=>({url:"".concat(a.k_,"/").concat(e),method:"GET"}),keepUnusedDataFor:5}),updateWithdraw:e.mutation({query:e=>{let{withdrawId:t,data:r}=e;return{url:"".concat(a.k_,"/").concat(t),method:"PUT",body:r}}}),deleteWithdraw:e.mutation({query:e=>({url:"".concat(a.k_,"/").concat(e),method:"DELETE"})})})}),{useGetWalletInfoQuery:i,useOutWalletMutation:d,useWithdrawWalletMutation:n,useGetWithdrawsQuery:l,useGetAllWithdrawsQuery:o,useGetWithdrawQuery:c,useUpdateWithdrawMutation:u,useDeleteWithdrawMutation:h}=s},1386:(e,t,r)=>{r.d(t,{A:()=>i,w:()=>s});var a=r(5847);const s=e=>{if(!(0,a.A)(e))return e.slice(0,19)},i=e=>{if(!(0,a.A)(e))return e.slice(0,10)+" "+e.slice(11,19)}},5847:(e,t,r)=>{r.d(t,{A:()=>a});const a=e=>void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},1639:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(5043),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(e,t)=>{const r=(0,a.forwardRef)(((r,i)=>{let{color:d="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:o,className:c="",children:u,...h}=r;return(0,a.createElement)("svg",{ref:i,...s,width:n,height:n,stroke:d,strokeWidth:o?24*Number(l)/Number(n):l,className:["lucide","lucide-".concat((m=e,m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim())),c].join(" "),...h},[...t.map((e=>{let[t,r]=e;return(0,a.createElement)(t,r)})),...Array.isArray(u)?u:[u]]);var m}));return r.displayName="".concat(e),r}},994:(e,t,r)=>{r.d(t,{A:()=>a});const a=(0,r(1639).A)("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]])},5203:(e,t,r)=>{function a(){for(var e,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&"string"==typeof e&&(r+=(r&&" ")+e);return r}r.d(t,{$:()=>a,A:()=>s});const s=a}}]);
//# sourceMappingURL=832.5602493e.chunk.js.map