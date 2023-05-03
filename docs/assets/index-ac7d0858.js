import{A as v,a as _,b,r as y,e as k,f as j,g as E,i as w}from"./vendor-b125fb2d.js";import{l as O,f as P,a as $,b as I,c as L,d as R,e as A,g as S,h as F,i as q,j as x,k as B,m as T,n as N,o as z,p as C,q as G,r as V,s as D,t as U,u as H,v as J,w as M,x as W,y as Y,z as K}from"./fortawesome-f1482068.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();v.init({});O.add(P,$,I,L,R,A,S,F,q,x,B,T,N,z,C,G,V,D,U,H,J,M,W,Y,K);function Q(o,s){const a=y("router-view");return b(),_(a)}const X=(o,s)=>{const a=o.__vccOpts||o;for(const[c,t]of s)a[c]=t;return a},Z={},ee=X(Z,[["render",Q]]),te="modulepreload",oe=function(o){return"/taiproject/"+o},d={},u=function(s,a,c){if(!a||a.length===0)return s();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=oe(e),e in d)return;d[e]=!0;const n=e.endsWith(".css"),g=n?'[rel="stylesheet"]':"";if(!!c)for(let i=t.length-1;i>=0;i--){const l=t[i];if(l.href===e&&(!n||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${g}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":te,n||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),n)return new Promise((i,l)=>{r.addEventListener("load",i),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},se=[{path:"/",name:"pages",component:()=>u(()=>import("./index-b4788b56.js"),["assets/index-b4788b56.js","assets/vendor-b125fb2d.js","assets/vendor-42df3dd7.css","assets/constant-714d84d0.js","assets/fortawesome-f1482068.js","assets/index-5bff55e2.js","assets/index.vuevuetypescriptsetuptruelang-2dbf1747.js"]),children:[{path:"/",name:"home",component:()=>u(()=>import("./index-984186e2.js"),["assets/index-984186e2.js","assets/vendor-b125fb2d.js","assets/vendor-42df3dd7.css","assets/constant-714d84d0.js","assets/index.vuevuetypescriptsetuptruelang-2dbf1747.js","assets/fortawesome-f1482068.js","assets/index-5bff55e2.js","assets/index.vuevuetypescriptsetuptruelang-65347477.js"])},{path:"/projects",name:"projects",component:()=>u(()=>import("./index-c5379202.js"),["assets/index-c5379202.js","assets/index-5bff55e2.js","assets/vendor-b125fb2d.js","assets/vendor-42df3dd7.css","assets/fortawesome-f1482068.js","assets/index.vuevuetypescriptsetuptruelang-65347477.js","assets/constant-714d84d0.js"])},{path:"/contact",name:"contact",component:()=>u(()=>import("./index-429b9383.js"),["assets/index-429b9383.js","assets/vendor-b125fb2d.js","assets/vendor-42df3dd7.css","assets/constant-714d84d0.js","assets/firebase-f8f6e533.js"])}]},{path:"/:pathMatch(.*)*",redirect:"/"}],f=k({history:j("/taiproject/"),routes:se,scrollBehavior(o,s,a){return o.hash?{el:o.hash,behavior:"smooth",top:48}:{top:0,behavior:"smooth"}}});f.beforeEach((o,s,a)=>{a()});const ae="about",ne="skill",re="projects",ce="contact",ie="name",le="email",ue="Required",me="content",de="submit",fe="demo",pe={en:"English","zh-tw":"繁體中文"},he={姓名:"Tai Fu",職業:"Front-End Engineer / Photographer",工作自介:"My name is TaiFu Lin. I'm a Front-End Engineer, like to combine various technologies to develop websites. I can develop programs independently or as a team.",攝影自介:"I like to travel around, take pictures, and explore the beauty of the world. So I am also an amateur photographer."},ge={manage:"manage website",video:"youtube website",slot:"slot machine",demoui:"demo UI",restaurant:"restaurant UI"},ve={about:ae,skill:ne,projects:re,contact:ce,"frontend / languages":"front end / languages","develop / framework":"develop / framework","version control / server cloud":"version control / server cloud","design / tools":"design / tools","server / cloud":"server / cloud","contact detail":"contact detail","contact me":"contact me",name:ie,email:le,"Please provide a valid email address.":"Please provide a valid email address.",Required:ue,content:me,submit:de,demo:fe,locale:pe,text:he,project:ge},_e="關於我",be="技能",ye="作品集",ke="聯絡方式",je="稱呼",Ee="電子郵件",we="必填",Oe="內容",Pe="送出",$e="演示",Ie={en:"English","zh-tw":"繁體中文"},Le={姓名:"台富",職業:"前端工程師 / 業餘攝影師",工作自介:"我是林台富，目前是一位前端工程師，平時喜歡與科技做結合來開發網站。 在專案上能夠獨自或團隊合作進行開發。",攝影自介:"平常喜歡到處旅遊、攝影，探索世界的美好，所以我同時也是一位業餘攝影師。"},Re={manage:"管理後台",video:"youtube網站",slot:"老虎機小遊戲",demoui:"demo版型",restaurant:"餐館網站設計"},Ae={about:_e,skill:be,projects:ye,contact:ke,"frontend / languages":"前端 / 語言","develop / framework":"開發 / 框架","version control / server cloud":"版本控制 / 雲端部署","design / tools":"排版設計 / 工具","server / cloud":"雲端服務 / 自動化部署","contact detail":"聯絡詳情","contact me":"請聯絡我",name:je,email:Ee,"Please provide a valid email address.":"請提供一個有效的電子郵件地址。",Required:we,content:Oe,submit:Pe,demo:$e,locale:Ie,text:Le,project:Re},p="./locales/",h=Object.assign({"./locales/en.json":ve,"./locales/zh-tw.json":Ae}),Se=Object.fromEntries(Object.entries(h).map(([o,s])=>[o.slice(p.length,-5),s])),Ne=Object.keys(h).map(o=>o.slice(p.length,-5)),Fe=E({legacy:!1,locale:"zh-tw",fallbackLocale:"en",globalInjection:!0,messages:Se}),qe=o=>{o.use(Fe)},m=w(ee);m.use(f);m.use(qe);m.mount("#app");export{Fe as i,Ne as l};
