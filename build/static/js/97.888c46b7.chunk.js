"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[97],{3390:(e,t,n)=>{n.d(t,{$:()=>l,r:()=>d});var r=n(5043),a=n(6851),s=n(435),o=n(1089),i=n(579);const d=(0,s.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=r.forwardRef(((e,t)=>{let{className:n,variant:r,size:s,asChild:l=!1,...c}=e;const u=l?a.DX:"button";return(0,i.jsx)(u,{className:(0,o.cn)(d({variant:r,size:s,className:n})),ref:t,...c})}));l.displayName="Button"},2264:(e,t,n)=>{n.d(t,{p:()=>o});var r=n(5043),a=n(1089),s=n(579);const o=r.forwardRef(((e,t)=>{let{className:n,type:r,...o}=e;return(0,s.jsx)("input",{type:r,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...o})}));o.displayName="Input"},1981:(e,t,n)=>{n.d(t,{J:()=>v});var r=n(5043),a=n(8168),s=n(7920);const o=(0,r.forwardRef)(((e,t)=>(0,r.createElement)(s.sG.label,(0,a.A)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))),i=o;var d=n(435),l=n(1089),c=n(579);const u=(0,d.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),v=r.forwardRef(((e,t)=>{let{className:n,...r}=e;return(0,c.jsx)(i,{ref:t,className:(0,l.cn)(u(),n),...r})}));v.displayName=i.displayName},1089:(e,t,n)=>{n.d(t,{cn:()=>s});var r=n(8387),a=n(9359);function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.QP)((0,r.$)(t))}},6097:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(5043),a=n(3216),s=n(3135),o=n(2264),i=n(1981),d=n(3390),l=n(6328),c=n(1386),u=n(579);const v=()=>{const e=(0,a.Zp)(),{typeId:t}=(0,a.g)(),{data:n,isLoading:v,isError:m,refetch:p}=(0,s.ze)(t),[f,y]=(0,r.useState)({});(0,r.useEffect)((()=>{n&&y(n)}),[n]);const g=e=>y({...f,[e.target.name]:e.target.value}),[h,{isLoading:x}]=(0,s.D2)(),[b,{isLoading:j}]=(0,s.Tp)();return n&&t?(0,u.jsxs)("div",{className:" p-6 sm:px-12 space-y-8",children:[(0,u.jsxs)("div",{className:"grid grid-cols-2 gap-8",children:[(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"name",children:"Name"}),(0,u.jsx)(o.p,{type:"name",defaultValue:null===n||void 0===n?void 0:n.name,name:"name",onChange:g})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"daily",children:"Daily profit"}),(0,u.jsx)(o.p,{type:"text",defaultValue:null===n||void 0===n?void 0:n.daily,name:"daily",onChange:g})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"cycle",children:"Cycle"}),(0,u.jsx)(o.p,{type:"text",defaultValue:null===n||void 0===n?void 0:n.cycle,name:"cycle",onChange:g})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"cycle_description",children:"Cycle Description"}),(0,u.jsx)(o.p,{defaultValue:null===n||void 0===n?void 0:n.cycle_description,name:"cycle_description",onChange:g})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"duration",children:"Duration months"}),(0,u.jsx)(o.p,{defaultValue:null===n||void 0===n?void 0:n.duration,name:"duration",onChange:g})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"duration_description",children:"Duration Description"}),(0,u.jsx)(o.p,{defaultValue:null===n||void 0===n?void 0:n.duration_description,name:"duration_description",onChange:g})]})]}),(0,u.jsxs)("div",{className:"grid grid-cols-2 gap-8",children:[(0,u.jsxs)("div",{className:"created_at",children:[(0,u.jsx)(i.J,{htmlFor:"created_at",children:"Created"}),(0,u.jsx)(o.p,{type:"datetime-local",defaultValue:(0,c.w)(null===n||void 0===n?void 0:n.created_at),name:"created_at",disabled:!0})]}),(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(i.J,{htmlFor:"updated_at",children:"Updated"}),(0,u.jsx)(o.p,{type:"datetime-local",defaultValue:(0,c.w)(null===n||void 0===n?void 0:n.updated_at),name:"updated_at",disabled:!0})]})]}),(0,u.jsxs)("div",{className:"flex flex-row justify-around items-center",children:[(0,u.jsx)("div",{className:"",children:(0,u.jsx)(d.$,{className:"w-40",onClick:async e=>{e.preventDefault();try{const e=await h({typeId:t,data:f}).unwrap();l.o.success(e.message)}catch(r){var n;l.o.error((null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||r.error)}finally{p()}},children:"Update"})}),(0,u.jsx)("div",{className:"",children:(0,u.jsx)(d.$,{className:"w-40",onClick:async n=>{n.preventDefault();try{await b(t).unwrap(),l.o.success("Deleted successfully")}catch(a){var r;l.o.error((null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)||a.error)}finally{e("/admin/config")}},children:"Delete"})})]})]}):(0,u.jsx)(u.Fragment,{})}},3135:(e,t,n)=>{n.d(t,{D2:()=>d,Me:()=>c,Nl:()=>v,Tp:()=>l,Yk:()=>s,cH:()=>m,qN:()=>o,yB:()=>u,ze:()=>i});var r=n(1016);const a=n(487).l.injectEndpoints({endpoints:e=>({createInvestmentType:e.mutation({query:e=>({url:r.rN,method:"POST",body:e}),providesTags:["Config"]}),getAllInvestmentType:e.query({query:()=>({url:r.rN,method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestmentType:e.query({query:e=>({url:"".concat(r.rN,"/").concat(e),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),updateInvestmentType:e.mutation({query:e=>{let{typeId:t,data:n}=e;return{url:"".concat(r.rN,"/").concat(t),method:"PUT",body:n}},providesTags:["Config"]}),deleteInvestmentType:e.mutation({query:e=>({url:"".concat(r.rN,"/").concat(e),method:"DELETE"}),providesTags:["Config"]}),startInvestment:e.mutation({query:e=>{let{typeId:t,data:n}=e;return{url:"".concat(r.rN,"/").concat(t),method:"POST",body:n}},providesTags:["Config"]}),getInvestments:e.query({query:()=>({url:"".concat(r.rN,"/user"),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestment:e.query({query:e=>({url:"".concat(r.rN,"/user/").concat(e),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5}),getInvestmentRecord:e.query({query:()=>({url:"".concat(r.rN,"/record"),method:"GET"}),providesTags:["Config"],keepUnusedDataFor:5})})}),{useCreateInvestmentTypeMutation:s,useGetAllInvestmentTypeQuery:o,useGetInvestmentTypeQuery:i,useUpdateInvestmentTypeMutation:d,useDeleteInvestmentTypeMutation:l,useStartInvestmentMutation:c,useGetInvestmentsQuery:u,useGetInvestmentQuery:v,useGetInvestmentRecordQuery:m}=a},1386:(e,t,n)=>{n.d(t,{A:()=>s,w:()=>a});var r=n(5847);const a=e=>{if(!(0,r.A)(e))return e.slice(0,19)},s=e=>{if(!(0,r.A)(e))return e.slice(0,10)+" "+e.slice(11,19)}},5847:(e,t,n)=>{n.d(t,{A:()=>r});const r=e=>void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},7920:(e,t,n)=>{n.d(t,{hO:()=>d,sG:()=>i});var r=n(8168),a=n(5043),s=n(7950),o=n(6851);const i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const n=(0,a.forwardRef)(((e,n)=>{const{asChild:s,...i}=e,d=s?o.DX:t;return(0,a.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,a.createElement)(d,(0,r.A)({},i,{ref:n}))}));return n.displayName="Primitive.".concat(t),{...e,[t]:n}}),{});function d(e,t){e&&(0,s.flushSync)((()=>e.dispatchEvent(t)))}},435:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{F:()=>i});const s=e=>"boolean"===typeof e?"".concat(e):0===e?"0":e,o=a,i=(e,t)=>n=>{var r;if(null==(null===t||void 0===t?void 0:t.variants))return o(e,null===n||void 0===n?void 0:n.class,null===n||void 0===n?void 0:n.className);const{variants:a,defaultVariants:i}=t,d=Object.keys(a).map((e=>{const t=null===n||void 0===n?void 0:n[e],r=null===i||void 0===i?void 0:i[e];if(null===t)return null;const o=s(t)||s(r);return a[e][o]})),l=n&&Object.entries(n).reduce(((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e}),{}),c=null===t||void 0===t||null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce(((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every((e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...l}[t]):{...i,...l}[t]===n}))?[...e,n,r]:e}),[]);return o(e,d,c,null===n||void 0===n?void 0:n.class,null===n||void 0===n?void 0:n.className)}}}]);
//# sourceMappingURL=97.888c46b7.chunk.js.map