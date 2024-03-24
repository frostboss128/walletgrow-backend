/*! For license information please see 42.f62dfa3c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalletgrow_frontend=self.webpackChunkwalletgrow_frontend||[]).push([[42],{3390:(e,t,r)=>{r.d(t,{$:()=>l,r:()=>o});var s=r(5043),a=r(6851),n=r(435),i=r(1089),c=r(579);const o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=s.forwardRef(((e,t)=>{let{className:r,variant:s,size:n,asChild:l=!1,...d}=e;const u=l?a.DX:"button";return(0,c.jsx)(u,{className:(0,i.cn)(o({variant:s,size:n,className:r})),ref:t,...d})}));l.displayName="Button"},1140:(e,t,r)=>{r.d(t,{Wu:()=>c,Zp:()=>i,wL:()=>o});var s=r(5043),a=r(1089),n=r(579);const i=s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})}));i.displayName="Card";s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...s})})).displayName="CardHeader";s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})})).displayName="CardTitle";s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})})).displayName="CardDescription";const c=s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("pt-0",r),...s})}));c.displayName="CardContent";const o=s.forwardRef(((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center pt-0",r),...s})}));o.displayName="CardFooter"},1089:(e,t,r)=>{r.d(t,{cn:()=>n});var s=r(8387),a=r(9359);function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}},2042:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var s=r(5043),a=r(5475),n=r(7396),i=r(7963),c=r(6712),o=r(1639);const l=(0,o.A)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),d=(0,o.A)("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var u=r(9456),m=r(4319),h=r(6376),x=r(1140),v=r(8168),f=r(1862),p=r(7920);const g="Progress",y=100,[j,w]=(0,f.A)(g),[N,b]=j(g),k=(0,s.forwardRef)(((e,t)=>{const{__scopeProgress:r,value:a,max:n,getValueLabel:i=C,...c}=e,o=E(n)?n:y,l=T(a,o)?a:null,d=q(l)?i(l,o):void 0;return(0,s.createElement)(N,{scope:r,value:l,max:o},(0,s.createElement)(p.sG.div,(0,v.A)({"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":q(l)?l:void 0,"aria-valuetext":d,role:"progressbar","data-state":M(l,o),"data-value":null!==l&&void 0!==l?l:void 0,"data-max":o},c,{ref:t})))}));k.propTypes={max(e,t,r){const s=e[t],a=String(s);return s&&!E(s)?new Error(function(e,t){return"Invalid prop `max` of value `".concat(e,"` supplied to `").concat(t,"`. Only numbers greater than 0 are valid max values. Defaulting to `").concat(y,"`.")}(a,r)):null},value(e,t,r){const s=e[t],a=String(s),n=E(e.max)?e.max:y;return null==s||T(s,n)?null:new Error(function(e,t){return"Invalid prop `value` of value `".concat(e,"` supplied to `").concat(t,"`. The `value` prop must be:\n  - a positive number\n  - less than the value passed to `max` (or ").concat(y," if no `max` prop is set)\n  - `null` if the progress is indeterminate.\n\nDefaulting to `null`.")}(a,r))}};const _="ProgressIndicator",A=(0,s.forwardRef)(((e,t)=>{var r;const{__scopeProgress:a,...n}=e,i=b(_,a);return(0,s.createElement)(p.sG.div,(0,v.A)({"data-state":M(i.value,i.max),"data-value":null!==(r=i.value)&&void 0!==r?r:void 0,"data-max":i.max},n,{ref:t}))}));function C(e,t){return"".concat(Math.round(e/t*100),"%")}function M(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function q(e){return"number"===typeof e}function E(e){return q(e)&&!isNaN(e)&&e>0}function T(e,t){return q(e)&&!isNaN(e)&&e<=t&&e>=0}const W=k,U=A;var P=r(1089),R=r(579);const D=s.forwardRef(((e,t)=>{let{className:r,value:s,...a}=e;return(0,R.jsx)(W,{ref:t,className:(0,P.cn)("relative h-2 w-full overflow-hidden rounded-full bg-secondary",r),...a,children:(0,R.jsx)(U,{className:"h-full w-full flex-1 bg-cyan-500 transition-all",style:{transform:"translateX(-".concat(100-(s||0),"%)")}})})}));D.displayName=W.displayName;var G=r(3390);const O=(0,o.A)("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]),S=()=>{const{data:e,isLoading:t,refetch:r}=(0,n.v4)(),{data:s,isLoading:o,refetch:v}=(0,i.dP)();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{className:"bg-primary text-gray-200 space-y-2",children:[(0,R.jsxs)("div",{className:"bg-primary text-primary-foreground px-4 py-2 text-center relative",children:[(0,R.jsx)("h1",{className:"text-2xl font-bold",children:"Account"}),(0,R.jsxs)(a.N_,{to:"/account/service",className:"flex flex-row space-x-2 absolute right-3 top-3",children:[(0,R.jsx)("span",{children:"Support"}),(0,R.jsx)(c.A,{})]})]}),(0,R.jsxs)("div",{className:"flex flex-row justify-between items-center px-4",children:[(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{children:null===e||void 0===e?void 0:e.username}),(0,R.jsxs)("div",{children:["Score: ","0"]})]}),(0,R.jsxs)("div",{className:"text-right",children:[(0,R.jsxs)("div",{className:"flex flex-row items-center space-x-2 float-right",children:[(0,R.jsx)("span",{children:"Total Coin"}),(0,R.jsx)(O,{})]}),(0,R.jsxs)("div",{className:"font-bold",children:["COIN: ",(null===e||void 0===e?void 0:e.coin)||0]})]})]}),(0,R.jsx)("div",{className:"px-4",children:(0,R.jsxs)(x.Zp,{className:"bg-gray-800 text-inherit rounded-xl px-4 py-3 space-y-3",children:[(0,R.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,R.jsx)("div",{children:"Level"}),(0,R.jsxs)("div",{className:"flex flex-row justify-center items-center space-x-2",children:[(0,R.jsx)(l,{}),(0,R.jsx)("span",{children:"Next Level"}),(0,R.jsx)(d,{})]})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)(D,{value:30,className:""}),(0,R.jsx)("div",{children:"Total team recharge $0"})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)(D,{value:40,className:""}),(0,R.jsx)("div",{children:"Total Team Member (0/0)"})]})]})}),(0,R.jsxs)("div",{className:"flex flex-row px-4 space-x-2 max-sx:text-sm items-center",children:[(0,R.jsx)("img",{src:"/images/account/wallet.svg",alt:"wallet",width:40}),(0,R.jsxs)("div",{className:"flex-grow",children:[(0,R.jsx)("div",{children:"X-Wallet Total Coin"}),(0,R.jsx)("div",{children:"Daily reward upto 2.3%"})]}),(0,R.jsxs)("div",{className:"text-right",children:[(0,R.jsxs)("div",{className:"font-bold",children:["COIN: $",(null===s||void 0===s?void 0:s.coin)||0]}),(0,R.jsxs)("div",{className:"flex flex-row justify-end space-x-2",children:[(0,R.jsx)(a.N_,{to:"/account/in",children:(0,R.jsx)(G.$,{size:"sm",className:"bg-cyan-600 w-full",children:"IN"})}),(0,R.jsx)(a.N_,{to:"/wallet/out",children:(0,R.jsx)(G.$,{size:"sm",className:"bg-cyan-600 w-full",children:"OUT"})})]})]})]}),(0,R.jsxs)("div",{className:"px-4 flex flex-row justify-between space-x-2 max-sx:text-sm items-center",children:[(0,R.jsx)("div",{children:"Minimum X-wallet transfer 20 coins"}),(0,R.jsx)(a.N_,{to:"/wallet",children:(0,R.jsx)(G.$,{size:"sm",className:"bg-cyan-600",children:"X-Wallet"})})]}),(0,R.jsxs)("div",{className:"grid grid-cols-3 py-1 text-center border-t-2 divide-x-2",children:[(0,R.jsx)(a.N_,{to:"/account/recharge",children:(0,R.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,R.jsx)(u.A,{}),(0,R.jsx)("span",{children:"Recharge"})]})}),(0,R.jsx)(a.N_,{to:"/account/withdraw",children:(0,R.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,R.jsx)(m.A,{}),(0,R.jsx)("span",{children:"Withdraw"})]})}),(0,R.jsxs)("div",{className:"flex flex-row space-x-1 justify-center items-center",children:[(0,R.jsx)(h.A,{}),(0,R.jsx)("span",{children:"Bank Card"})]})]})]}),(0,R.jsxs)("div",{className:"space-y-4 mt-6 text-xs",children:[(0,R.jsxs)("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-4 px-4 text-center",children:[(0,R.jsx)(a.N_,{to:"/account/messages",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/message.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Message"})]})}),(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/invite_friend.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Invite Friends"})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/invite_info.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Invite Info"})]}),(0,R.jsx)(a.N_,{to:"/account/commission",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/commission.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Commission Record"})]})}),(0,R.jsx)(a.N_,{to:"/account/finance_record",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/finance.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Finance Record"})]})}),(0,R.jsx)(a.N_,{to:"/account/recharge_record",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/recharge.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Recharge Record"})]})}),(0,R.jsx)(a.N_,{to:"/account/withdraw_record",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/withdraw_record.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Withdraw Record"})]})})]}),(0,R.jsx)("div",{className:"h-5 bg-gray-100"}),(0,R.jsxs)("div",{className:"grid grid-cols-3 gap-4 px-4 text-center",children:[(0,R.jsx)(a.N_,{to:"/account/password",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/password.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Password"})]})}),(0,R.jsx)(a.N_,{to:"/account/service",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/service.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"Service"})]})}),(0,R.jsx)(a.N_,{to:"/",children:(0,R.jsxs)("div",{children:[(0,R.jsx)("div",{className:"flex justify-center items-center",children:(0,R.jsx)("img",{src:"/images/account/about.svg",alt:"message",width:25})}),(0,R.jsx)("div",{children:"About US"})]})})]})]})]})}},7396:(e,t,r)=>{r.d(t,{H7:()=>h,HC:()=>x,Ng:()=>c,_L:()=>i,ge:()=>o,gr:()=>u,v4:()=>l,vf:()=>m});var s=r(487),a=r(1016);const n=s.l.injectEndpoints({endpoints:e=>({login:e.mutation({query:e=>({url:"".concat(a.wV,"/login"),method:"POST",body:e})}),register:e.mutation({query:e=>({url:"".concat(a.wV),method:"POST",body:e})}),logout:e.mutation({query:()=>({url:"".concat(a.wV,"/logout"),method:"POST"})}),profile:e.query({query:()=>({url:"".concat(a.wV,"/profile"),method:"GET"}),keepUnusedDataFor:5}),updateProfile:e.query({query:e=>({url:"".concat(a.wV,"/profile"),method:"PUT",body:e}),keepUnusedDataFor:5}),getUsers:e.query({query:e=>({url:a.wV,method:"GET",params:e}),providesTags:["User"],keepUnusedDataFor:5}),getUser:e.query({query:e=>({url:"".concat(a.wV,"/").concat(e),method:"GET"})}),updateUser:e.mutation({query:e=>{let{userId:t,data:r}=e;return{url:"".concat(a.wV,"/").concat(t),method:"PUT",body:r}}}),deleteUser:e.mutation({query:e=>({url:"".concat(a.wV,"/").concat(e),method:"DELETE"})})})}),{useLoginMutation:i,useLogoutMutation:c,useRegisterMutation:o,useProfileQuery:l,useUpdateProfileQuery:d,useGetUsersQuery:u,useGetUserQuery:m,useUpdateUserMutation:h,useDeleteUserMutation:x}=n},7963:(e,t,r)=>{r.d(t,{CH:()=>d,G_:()=>c,MC:()=>i,O_:()=>u,dP:()=>n,eB:()=>l,fb:()=>o,yD:()=>m});var s=r(1016);const a=r(487).l.injectEndpoints({endpoints:e=>({getWalletInfo:e.query({query:()=>({url:s.k_,method:"GET"}),keepUnusedDataFor:5}),outWallet:e.mutation({query:e=>({url:"".concat(s.k_,"/out"),method:"POST",body:e})}),withdrawWallet:e.mutation({query:e=>({url:"".concat(s.k_,"/withdraw"),method:"POST",body:e})}),getWithdraws:e.query({query:()=>({url:"".concat(s.k_,"/withdraw"),method:"GET"}),keepUnusedDataFor:5}),getAllWithdraws:e.query({query:()=>({url:"".concat(s.k_,"/withdraws"),method:"GET"}),keepUnusedDataFor:5}),getWithdraw:e.query({query:e=>({url:"".concat(s.k_,"/").concat(e),method:"GET"}),keepUnusedDataFor:5}),updateWithdraw:e.mutation({query:e=>{let{withdrawId:t,data:r}=e;return{url:"".concat(s.k_,"/").concat(t),method:"PUT",body:r}}}),deleteWithdraw:e.mutation({query:e=>({url:"".concat(s.k_,"/").concat(e),method:"DELETE"})})})}),{useGetWalletInfoQuery:n,useOutWalletMutation:i,useWithdrawWalletMutation:c,useGetWithdrawsQuery:o,useGetAllWithdrawsQuery:l,useGetWithdrawQuery:d,useUpdateWithdrawMutation:u,useDeleteWithdrawMutation:m}=a},1639:(e,t,r)=>{r.d(t,{A:()=>n});var s=r(5043),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(e,t)=>{const r=(0,s.forwardRef)(((r,n)=>{let{color:i="currentColor",size:c=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:u,...m}=r;return(0,s.createElement)("svg",{ref:n,...a,width:c,height:c,stroke:i,strokeWidth:l?24*Number(o)/Number(c):o,className:["lucide","lucide-".concat((h=e,h.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim())),d].join(" "),...m},[...t.map((e=>{let[t,r]=e;return(0,s.createElement)(t,r)})),...Array.isArray(u)?u:[u]]);var h}));return r.displayName="".concat(e),r}},9456:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]])},4319:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},6376:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},6712:(e,t,r)=>{r.d(t,{A:()=>s});const s=(0,r(1639).A)("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]])},1862:(e,t,r)=>{r.d(t,{A:()=>n,q:()=>a});var s=r(5043);function a(e,t){const r=(0,s.createContext)(t);function a(e){const{children:t,...a}=e,n=(0,s.useMemo)((()=>a),Object.values(a));return(0,s.createElement)(r.Provider,{value:n},t)}return a.displayName=e+"Provider",[a,function(a){const n=(0,s.useContext)(r);if(n)return n;if(void 0!==t)return t;throw new Error("`".concat(a,"` must be used within `").concat(e,"`"))}]}function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];const a=()=>{const t=r.map((e=>(0,s.createContext)(e)));return function(r){const a=(null===r||void 0===r?void 0:r[e])||t;return(0,s.useMemo)((()=>({["__scope".concat(e)]:{...r,[e]:a}})),[r,a])}};return a.scopeName=e,[function(t,a){const n=(0,s.createContext)(a),i=r.length;function c(t){const{scope:r,children:a,...c}=t,o=(null===r||void 0===r?void 0:r[e][i])||n,l=(0,s.useMemo)((()=>c),Object.values(c));return(0,s.createElement)(o.Provider,{value:l},a)}return r=[...r,a],c.displayName=t+"Provider",[c,function(r,c){const o=(null===c||void 0===c?void 0:c[e][i])||n,l=(0,s.useContext)(o);if(l)return l;if(void 0!==a)return a;throw new Error("`".concat(r,"` must be used within `").concat(t,"`"))}]},i(a,...t)]}function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=t[0];if(1===t.length)return a;const n=()=>{const e=t.map((e=>({useScope:e(),scopeName:e.scopeName})));return function(t){const r=e.reduce(((e,r)=>{let{useScope:s,scopeName:a}=r;return{...e,...s(t)["__scope".concat(a)]}}),{});return(0,s.useMemo)((()=>({["__scope".concat(a.scopeName)]:r})),[r])}};return n.scopeName=a.scopeName,n}},7920:(e,t,r)=>{r.d(t,{hO:()=>o,sG:()=>c});var s=r(8168),a=r(5043),n=r(7950),i=r(6851);const c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((e,t)=>{const r=(0,a.forwardRef)(((e,r)=>{const{asChild:n,...c}=e,o=n?i.DX:t;return(0,a.useEffect)((()=>{window[Symbol.for("radix-ui")]=!0}),[]),(0,a.createElement)(o,(0,s.A)({},c,{ref:r}))}));return r.displayName="Primitive.".concat(t),{...e,[t]:r}}),{});function o(e,t){e&&(0,n.flushSync)((()=>e.dispatchEvent(t)))}},435:(e,t,r)=>{function s(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{F:()=>c});const n=e=>"boolean"===typeof e?"".concat(e):0===e?"0":e,i=a,c=(e,t)=>r=>{var s;if(null==(null===t||void 0===t?void 0:t.variants))return i(e,null===r||void 0===r?void 0:r.class,null===r||void 0===r?void 0:r.className);const{variants:a,defaultVariants:c}=t,o=Object.keys(a).map((e=>{const t=null===r||void 0===r?void 0:r[e],s=null===c||void 0===c?void 0:c[e];if(null===t)return null;const i=n(t)||n(s);return a[e][i]})),l=r&&Object.entries(r).reduce(((e,t)=>{let[r,s]=t;return void 0===s||(e[r]=s),e}),{}),d=null===t||void 0===t||null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce(((e,t)=>{let{class:r,className:s,...a}=t;return Object.entries(a).every((e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...c,...l}[t]):{...c,...l}[t]===r}))?[...e,r,s]:e}),[]);return i(e,o,d,null===r||void 0===r?void 0:r.class,null===r||void 0===r?void 0:r.className)}}}]);
//# sourceMappingURL=42.f62dfa3c.chunk.js.map