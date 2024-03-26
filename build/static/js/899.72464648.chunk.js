/*! For license information please see 899.72464648.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[899],{3390:(e,t,r)=>{r.d(t,{$:()=>d,r:()=>l});var s=r(5043),a=r(6851),i=r(435),n=r(1089),o=r(579);const l=(0,i.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef(((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...c}=e;const u=d?a.DX:"button";return(0,o.jsx)(u,{className:(0,n.cn)(l({variant:s,size:i,className:r})),ref:t,...c})}));d.displayName="Button"},2264:(e,t,r)=>{r.d(t,{p:()=>n});var s=r(5043),a=r(1089),i=r(579);const n=s.forwardRef(((e,t)=>{let{className:r,type:s,...n}=e;return(0,i.jsx)("input",{type:s,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})}));n.displayName="Input"},1089:(e,t,r)=>{r.d(t,{cn:()=>i});var s=r(8387),a=r(9359);function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},2899:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var s=r(5043),a=r(5475),i=r(7963),n=r(7396),o=r(994),l=r(6712),d=r(9456),c=r(4319),u=r(6376),h=r(2264),m=r(3390),x=r(6328),f=r(579);const v=()=>{const{data:e,isLoading:t,isError:r,refetch:v}=(0,i.dP)(),{data:y,isLoading:p,refetch:g}=(0,n.v4)(),[w,{isLoading:j}]=(0,i.G_)(),[b,N]=(0,s.useState)({address:"",coin:0}),k=e=>N({...b,[e.target.name]:e.target.value});return(0,f.jsxs)("div",{className:"space-y-6",children:[(0,f.jsxs)("div",{className:"bg-primary text-gray-200 space-y-2",children:[(0,f.jsxs)("div",{className:"bg-primary text-primary-foreground px-4 py-2 text-center relative",children:[(0,f.jsx)(a.N_,{to:"/account",children:(0,f.jsx)(o.A,{className:"absolute top-3 left-3"})}),(0,f.jsx)("h1",{className:"text-2xl font-bold",children:"Withdraw"}),(0,f.jsxs)(a.N_,{to:"/account/service",className:"flex flex-row space-x-2 absolute right-3 top-3",children:[(0,f.jsx)("span",{children:"Support"}),(0,f.jsx)(l.A,{})]})]}),(0,f.jsxs)("div",{className:"flex flex-row justify-between items-center px-4",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{children:null===y||void 0===y?void 0:y.username}),(0,f.jsxs)("div",{children:["Score: ","0"]})]}),(0,f.jsxs)("div",{className:"text-right",children:[(0,f.jsxs)("div",{children:["Total Coin: ","0"]}),(0,f.jsxs)("div",{children:["COIN: ",null===y||void 0===y?void 0:y.coin]})]})]}),(0,f.jsxs)("div",{className:"flex flex-row px-4 space-x-2 max-sx:text-sm items-center",children:[(0,f.jsx)("img",{src:"/images/account/wallet.svg",loading:"lazy",alt:"wallet",width:40}),(0,f.jsxs)("div",{className:"flex-grow",children:[(0,f.jsx)("div",{children:"X-Wallet Total Coin"}),(0,f.jsx)("div",{children:"Daily reward upto 2.3%"})]}),(0,f.jsxs)("div",{className:"text-right",children:[(0,f.jsxs)("div",{children:["COIN: ",null===e||void 0===e?void 0:e.coin]}),(0,f.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,f.jsx)(a.N_,{to:"/account/in",children:(0,f.jsx)(m.$,{size:"sm",className:"bg-cyan-600 w-full",children:"IN"})}),(0,f.jsx)(a.N_,{to:"/wallet/out",children:(0,f.jsx)(m.$,{size:"sm",className:"bg-cyan-600 w-full",children:"OUT"})})]})]})]}),(0,f.jsxs)("div",{className:"px-4 flex flex-row justify-between space-x-2 max-sx:text-sm items-center",children:[(0,f.jsx)("div",{children:"Minimum X-wallet transfer 20 coins"}),(0,f.jsx)(a.N_,{to:"/wallet",children:(0,f.jsx)(m.$,{size:"sm",className:"bg-cyan-600",children:"X-Wallet"})})]}),(0,f.jsxs)("div",{className:"grid grid-cols-3 py-1 text-center border-t-2 divide-x-2",children:[(0,f.jsx)(a.N_,{to:"/account/recharge",children:(0,f.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,f.jsx)(d.A,{}),(0,f.jsx)("span",{children:"Recharge"})]})}),(0,f.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,f.jsx)(c.A,{}),(0,f.jsx)("span",{children:"Withdraw"})]}),(0,f.jsx)(a.N_,{to:"/account/bankcard",children:(0,f.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,f.jsx)(u.A,{}),(0,f.jsx)("span",{children:"Bank Card"})]})})]})]}),(0,f.jsxs)("div",{className:"px-4 divide-y-2",children:[(0,f.jsxs)("div",{className:"px-4 pb-3 flex flex-row justify-between items-center space-x-2",children:[(0,f.jsx)("span",{children:"COIN"}),(0,f.jsx)(h.p,{type:"number",value:(null===e||void 0===e?void 0:e.coin)||0,disabled:!0,className:"text-gray-800 font-bold"}),(0,f.jsx)(m.$,{size:"sm",onClick:e=>v(),children:"Refresh"})]}),(0,f.jsxs)("div",{className:"p-3",children:[(0,f.jsx)("div",{children:"Enter Your TRC20 address"}),(0,f.jsx)(h.p,{placeholder:"Select your payment method",name:"address",onChange:k})]}),(0,f.jsxs)("div",{className:"p-3",children:[(0,f.jsx)("div",{children:"Withdraw Coin :"}),(0,f.jsx)(h.p,{type:"number",placeholder:"Enter withdraw amount",name:"coin",onChange:k}),(0,f.jsx)("div",{className:"py-2",children:(0,f.jsx)(m.$,{type:"submit",className:"w-full",onClick:async e=>{if(e.preventDefault(),b.address&&b.coin)try{const e=await w(b).unwrap();x.o.success(e)}catch(r){var t;x.o.error((null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.message)||r.error)}finally{v(),g()}},children:"Withdraw"})})]})]}),(0,f.jsxs)("div",{className:"px-6 py-2 font-bold text-red-500",children:[(0,f.jsx)("h3",{className:"text-xl underline underline-offset-4",children:"Withdrawal rules :"}),(0,f.jsxs)("ol",{className:"list-decimal list-outside pl-4 mt-2",children:[(0,f.jsx)("li",{children:"Minimum withdrawal amount is 10 USDT or 100 TRX."}),(0,f.jsx)("li",{children:"Withdrawal can be request 24 hours at any time."}),(0,f.jsx)("li",{children:"Arrival time 5 ~ 55 minutes (Maximum 24 hours)."}),(0,f.jsx)("li",{children:"Handling fee is 10% for 10$~99$ a month income .15% fee for above 100$~ 250$ a month income . 20% fee for above 251$ a month income ."}),(0,f.jsx)("li",{children:"Withdrawal Limit for USDT is 5 ~ 10,000. Limit for TRX is 50 ~ 1,00,000 per day."})]})]})]})}},7396:(e,t,r)=>{r.d(t,{H7:()=>m,HC:()=>x,Ng:()=>o,_L:()=>n,ge:()=>l,gr:()=>u,v4:()=>d,vf:()=>h});var s=r(487),a=r(1016);const i=s.l.injectEndpoints({endpoints:e=>({login:e.mutation({query:e=>({url:"".concat(a.wV,"/login"),method:"POST",body:e})}),register:e.mutation({query:e=>({url:"".concat(a.wV),method:"POST",body:e})}),logout:e.mutation({query:()=>({url:"".concat(a.wV,"/logout"),method:"POST"})}),profile:e.query({query:()=>({url:"".concat(a.wV,"/profile"),method:"GET"}),keepUnusedDataFor:5}),updateProfile:e.query({query:e=>({url:"".concat(a.wV,"/profile"),method:"PUT",body:e}),keepUnusedDataFor:5}),getUsers:e.query({query:e=>({url:a.wV,method:"GET",params:e}),providesTags:["User"],keepUnusedDataFor:5}),getUser:e.query({query:e=>({url:"".concat(a.wV,"/").concat(e),method:"GET"})}),updateUser:e.mutation({query:e=>{let{userId:t,data:r}=e;return{url:"".concat(a.wV,"/").concat(t),method:"PUT",body:r}}}),deleteUser:e.mutation({query:e=>({url:"".concat(a.wV,"/").concat(e),method:"DELETE"})})})}),{useLoginMutation:n,useLogoutMutation:o,useRegisterMutation:l,useProfileQuery:d,useUpdateProfileQuery:c,useGetUsersQuery:u,useGetUserQuery:h,useUpdateUserMutation:m,useDeleteUserMutation:x}=i},7963:(e,t,r)=>{r.d(t,{CH:()=>c,G_:()=>o,MC:()=>n,O_:()=>u,dP:()=>i,eB:()=>d,fb:()=>l,yD:()=>h});var s=r(1016);const a=r(487).l.injectEndpoints({endpoints:e=>({getWalletInfo:e.query({query:()=>({url:s.k_,method:"GET"}),keepUnusedDataFor:5}),outWallet:e.mutation({query:e=>({url:"".concat(s.k_,"/out"),method:"POST",body:e})}),withdrawWallet:e.mutation({query:e=>({url:"".concat(s.k_,"/withdraw"),method:"POST",body:e})}),getWithdraws:e.query({query:()=>({url:"".concat(s.k_,"/withdraw"),method:"GET"}),keepUnusedDataFor:5}),getAllWithdraws:e.query({query:()=>({url:"".concat(s.k_,"/withdraws"),method:"GET"}),keepUnusedDataFor:5}),getWithdraw:e.query({query:e=>({url:"".concat(s.k_,"/").concat(e),method:"GET"}),keepUnusedDataFor:5}),updateWithdraw:e.mutation({query:e=>{let{withdrawId:t,data:r}=e;return{url:"".concat(s.k_,"/").concat(t),method:"PUT",body:r}}}),deleteWithdraw:e.mutation({query:e=>({url:"".concat(s.k_,"/").concat(e),method:"DELETE"})})})}),{useGetWalletInfoQuery:i,useOutWalletMutation:n,useWithdrawWalletMutation:o,useGetWithdrawsQuery:l,useGetAllWithdrawsQuery:d,useGetWithdrawQuery:c,useUpdateWithdrawMutation:u,useDeleteWithdrawMutation:h}=a},1639:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(5043),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(e,t)=>{const r=(0,s.forwardRef)(((r,i)=>{let{color:n="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:c="",children:u,...h}=r;return(0,s.createElement)("svg",{ref:i,...a,width:o,height:o,stroke:n,strokeWidth:d?24*Number(l)/Number(o):l,className:["lucide","lucide-".concat((m=e,m.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim())),c].join(" "),...h},[...t.map((e=>{let[t,r]=e;return(0,s.createElement)(t,r)})),...Array.isArray(u)?u:[u]]);var m}));return r.displayName="".concat(e),r}},994:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]])},9456:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]])},4319:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},6376:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},6712:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]])},435:(e,t,r)=>{function s(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{F:()=>o});const i=e=>"boolean"===typeof e?"".concat(e):0===e?"0":e,n=a,o=(e,t)=>r=>{var s;if(null==(null===t||void 0===t?void 0:t.variants))return n(e,null===r||void 0===r?void 0:r.class,null===r||void 0===r?void 0:r.className);const{variants:a,defaultVariants:o}=t,l=Object.keys(a).map((e=>{const t=null===r||void 0===r?void 0:r[e],s=null===o||void 0===o?void 0:o[e];if(null===t)return null;const n=i(t)||i(s);return a[e][n]})),d=r&&Object.entries(r).reduce(((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e}),{}),c=null===t||void 0===t||null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce(((e,t)=>{let{class:r,className:s,...a}=t;return Object.entries(a).every((e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...d}[t]):{...o,...d}[t]===r}))?[...e,r,s]:e}),[]);return n(e,l,c,null===r||void 0===r?void 0:r.class,null===r||void 0===r?void 0:r.className)}}}]);
//# sourceMappingURL=899.72464648.chunk.js.map