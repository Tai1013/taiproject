import{d as g,b as s,a as d,j as i,k as l,u as e,L as $,S as C,l as L,m as c,n as f,M as T,p as t,t as _,q as b,F as h,T as N,s as S,v as z,x as B,y as I,z as x,B as M,X as j,C as E,D as F,r as y,E as V}from"./vendor-b125fb2d.js";import{M as w,C as A}from"./constant-714d84d0.js";import"./fortawesome-f1482068.js";import{u as D,L as O}from"./index-23f9fefa.js";import{_ as X}from"./index.vuevuetypescriptsetuptruelang-2dbf1747.js";import"./index-09fda8c7.js";const q="/taiproject/assets/logo-10414b02.png",P=["onClick"],R=["src"],U={class:"text-xs"},Y=g({__name:"index",setup(k){const{language:m,changeLanguage:u}=D();return(r,p)=>(s(),d(e(z),S({class:"language-dropdown relative",as:"div"},r.$attrs),{default:i(()=>[l(e(C),{class:"w-full"},{default:i(()=>[l(e($),{class:"w-full"})]),_:1}),l(N,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:i(()=>[l(e(L),{class:"absolute right-0 mt-2 min-w-[120px] origin-top-right bg-white rounded-md shadow overflow-hidden"},{default:i(()=>[(s(!0),c(h,null,f(e(O),a=>(s(),d(e(T),{key:a.name,disabled:e(m)===a.name},{default:i(({active:o,disabled:n})=>[t("button",{class:b(["no-hover p-2 flex items-center w-full text-left border-b last:border-b-0",[{"bg-sky-500 hover:text-white":o},{"cursor-not-allowed bg-sky-200 opacity-50":n}]]),onClick:v=>e(u)(a.name)},[t("img",{class:"mr-1 w-4 h-4 rounded-full object-cover",src:a.flag},null,8,R),t("span",U,_(r.$t(`locale.${a.name}`)),1)],10,P)]),_:2},1032,["disabled"]))),128))]),_:1})]),_:1})]),_:1},16))}}),G={class:"header-content",ref:"headerRef"},H={class:"container h-full flex justify-between items-center"},J=t("img",{class:"mr-2 w-8",src:q},null,-1),K={class:"text-lg font-medium"},Q={class:"flex items-center"},W={class:"desktop-menu hidden md:block"},Z={class:"mobile-memu fixed inset-0 z-30 pt-12 bg-orange-50/95 dark:bg-slate-900/95 md:hidden"},ee=g({__name:"header",setup(k){const{y:m}=B(window),u="T.F",r=I(!1);return(p,a)=>{const o=y("router-link");return s(),c("div",G,[t("header",{class:b(["fixed top-0 inset-x-0 z-40 h-12 transition duration-500",{"bg-white/90 dark:bg-black/80":e(m)>0}])},[t("div",H,[l(o,{class:"flex items-center",to:{name:"home"},onClick:a[0]||(a[0]=n=>r.value=!1)},{default:i(()=>[J,t("span",K,_(e(u)),1)]),_:1}),t("div",Q,[t("div",W,[(s(!0),c(h,null,f(e(w),(n,v)=>(s(),d(o,{class:b(["ml-6 text-sm capitalize animate-fade-down animate-duration-500",`animate-delay-${100*v}`]),key:n.title,to:{name:n.name,hash:n.hash}},{default:i(()=>[x(_(p.$t(n.title)),1)]),_:2},1032,["to","class"]))),128))]),l(e(Y),{class:"ml-3 md:ml-6 w-5 h-5 text-sm"}),t("button",{class:"ml-3 md:ml-6 w-5 h-5 md:hidden",onClick:a[1]||(a[1]=n=>r.value=!r.value)},[r.value?(s(),d(e(j),{key:1})):(s(),d(e(M),{key:0}))])])])],2),l(e(F),{show:r.value},{default:i(()=>[t("div",Z,[(s(!0),c(h,null,f(e(w),(n,v)=>(s(),c("div",{key:n.title},[l(e(E),{enter:`transform transition delay-${v*100}`,"enter-from":"opacity-0 -translate-x-4","enter-to":"opacity-100 translate-x-0",leave:"transition duration-400","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[l(o,{class:"block text-center py-3 border-t text-xs sm:text-sm capitalize",to:{name:n.name,hash:n.hash},onClick:a[2]||(a[2]=me=>r.value=!1)},{default:i(()=>[x(_(p.$t(n.title)),1)]),_:2},1032,["to"])]),_:2},1032,["enter"])]))),128))])]),_:1},8,["show"])],512)}}}),te={class:"footer-content mt-6 shadow-lg"},se={class:"container py-2 flex justify-center items-center border-b-2 border-sky-500"},ae={class:"inline-flex flex-auto"},oe={class:"inline-flex"},ne=["href"],re={class:"py-2 w-full text-center text-xs"},le=t("span",null,"©️ Copyright",-1),ie=t("span",{class:"mx-2"},"2023",-1),ce={class:"mx-2"},de=g({__name:"footer",setup(k){const m="T.F",u="0.0.0";return(r,p)=>{const a=y("router-link");return s(),c("div",te,[t("div",se,[t("div",ae,[(s(!0),c(h,null,f(e(w),(o,n)=>(s(),d(a,{class:"mr-2 text-xs md:text-sm capitalize",key:o.title,to:{name:o.name,hash:o.hash}},{default:i(()=>[x(_(r.$t(o.title)),1)]),_:2},1032,["to"]))),128))]),t("div",oe,[(s(!0),c(h,null,f(e(A).community,o=>(s(),c("a",{class:"ml-2",key:o.name,href:o.href,target:"_blank"},[o.icon?(s(),d(e(X),{key:0,class:"w-4 h-4 md:w-5 md:h-5",icon:o.icon},null,8,["icon"])):V("",!0)],8,ne))),128))])]),t("footer",re,[le,ie,l(a,{to:{name:"home"}},{default:i(()=>[x(_(e(m)),1)]),_:1}),t("span",ce,"v"+_(e(u)),1)])])}}}),_e={class:"layout"},ge=g({__name:"index",setup(k){return(m,u)=>{const r=y("router-view");return s(),c("div",_e,[l(ee),l(r),l(de)])}}});export{ge as default};