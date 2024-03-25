/*! For license information please see 43.190b98b7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[43],{6043:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});r(5043);var s=r(3216),n=r(5475),o=r(3135),a=r(994),c=r(1386),i=r(579);const d=e=>{let{record:t}=e;return(0,i.jsx)("div",{className:"px-6",children:(0,i.jsxs)("div",{className:"grid grid-cols-12 gap-2 items-stretch pb-2",children:[(0,i.jsx)("div",{className:"col-span-2 flex items-center",children:(0,i.jsx)("img",{src:"/images/wallet/tether-usdt-logo.svg",alt:"tether-usdt-logo",width:50,height:50})}),(0,i.jsxs)("div",{className:"col-span-7 flex flex-col",children:[(0,i.jsx)("div",{className:"font-medium",children:t.type.name}),(0,i.jsx)("div",{className:"text-sm",children:(0,c.A)(t.created_at)})]}),(0,i.jsx)("div",{className:"col-span-3 text-right",children:(0,i.jsx)("div",{className:"text-xs tx:text-sm",children:(0,i.jsxs)("span",{children:["$ ",t.coin]})})})]})})},l=()=>{const{investTypeId:e}=(0,s.g)(),{data:t,isLoading:r,isError:c,error:l,refetch:u}=(0,o.CX)(e);return console.log(t),(0,i.jsxs)("div",{className:"space-y-4",children:[(0,i.jsxs)("div",{className:"bg-primary text-primary-foreground px-4 py-3 text-center relative",children:[(0,i.jsx)(n.N_,{to:"/wallet",children:(0,i.jsx)(a.A,{className:"absolute left-3"})}),(0,i.jsx)("h1",{children:"Investment Record"})]}),null===t||void 0===t?void 0:t.map((e=>(0,i.jsx)(d,{record:e},e._id)))]})}},3135:(e,t,r)=>{r.d(t,{CX:()=>y,D2:()=>i,Me:()=>l,Nl:()=>m,Tp:()=>d,Yk:()=>o,cH:()=>p,qN:()=>a,yB:()=>u,ze:()=>c});var s=r(1016);const n=r(487).l.injectEndpoints({endpoints:e=>({createInvestmentType:e.mutation({query:e=>({url:s.rN,method:"POST",body:e}),providesTags:["Config"]}),getAllInvestmentType:e.query({query:()=>({url:s.rN,method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestmentType:e.query({query:e=>({url:"".concat(s.rN,"/").concat(e),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),updateInvestmentType:e.mutation({query:e=>{let{typeId:t,data:r}=e;return{url:"".concat(s.rN,"/").concat(t),method:"PUT",body:r}},providesTags:["Config"]}),deleteInvestmentType:e.mutation({query:e=>({url:"".concat(s.rN,"/").concat(e),method:"DELETE"}),providesTags:["Config"]}),startInvestment:e.mutation({query:e=>{let{typeId:t,data:r}=e;return{url:"".concat(s.rN,"/").concat(t),method:"POST",body:r}},providesTags:["Config"]}),getInvestments:e.query({query:()=>({url:"".concat(s.rN,"/user"),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestment:e.query({query:e=>({url:"".concat(s.rN,"/user/").concat(e),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestmentRecord:e.query({query:()=>({url:"".concat(s.rN,"/record"),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestmentHistoryByType:e.query({query:e=>({url:"".concat(s.rN,"/invhis/").concat(e),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5})})}),{useCreateInvestmentTypeMutation:o,useGetAllInvestmentTypeQuery:a,useGetInvestmentTypeQuery:c,useUpdateInvestmentTypeMutation:i,useDeleteInvestmentTypeMutation:d,useStartInvestmentMutation:l,useGetInvestmentsQuery:u,useGetInvestmentQuery:m,useGetInvestmentRecordQuery:p,useGetInvestmentHistoryByTypeQuery:y}=n},1386:(e,t,r)=>{r.d(t,{A:()=>o,w:()=>n});var s=r(5847);const n=e=>{if(!(0,s.A)(e))return e.slice(0,19)},o=e=>{if(!(0,s.A)(e))return e.slice(0,10)+" "+e.slice(11,19)}},5847:(e,t,r)=>{r.d(t,{A:()=>s});const s=e=>void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},1639:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(5043),n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(e,t)=>{const r=(0,s.forwardRef)(((r,o)=>{let{color:a="currentColor",size:c=24,strokeWidth:i=2,absoluteStrokeWidth:d,className:l="",children:u,...m}=r;return(0,s.createElement)("svg",{ref:o,...n,width:c,height:c,stroke:a,strokeWidth:d?24*Number(i)/Number(c):i,className:["lucide","lucide-".concat((p=e,p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim())),l].join(" "),...m},[...t.map((e=>{let[t,r]=e;return(0,s.createElement)(t,r)})),...Array.isArray(u)?u:[u]]);var p}));return r.displayName="".concat(e),r}},994:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]])}}]);
//# sourceMappingURL=43.190b98b7.chunk.js.map