import{_ as w,u as A,x as L,y as S,i as x,o as n,c as o,t as u,f as m,l as c,a,q as B,M as E,p as F,e as O}from"./entry.6GlnclFe.js";const R=""+globalThis.__publicAssetsURL("assets/mariage/agnes_et_florent-transparent.svg"),U=""+new URL("mont-min.ZzFvIqgL.png",import.meta.url).href,q=""+new URL("roc-min.PtwgSaWV.png",import.meta.url).href,C=""+new URL("us-2.ZJPYhLld.png",import.meta.url).href,M=""+new URL("ponton3.3ITVPqsO.png",import.meta.url).href,P=""+new URL("nobel3.l9kArCGn.png",import.meta.url).href;function f(t){const l=t;l.__i18n=l.__i18n||[],l.__i18n.push({locale:"",resource:{fr:{bad_reception:{t:0,b:{t:2,i:[{t:3}],s:"Tu captes mal... 😅"}},date:{t:0,b:{t:2,i:[{t:3}],s:"19 & 20 août 2023"}},name:{t:0,b:{t:2,i:[{t:3}],s:"Agnès et Florent"}}},en:{bad_reception:{t:0,b:{t:2,i:[{t:3}],s:"You have poor reception... 😅"}},date:{t:0,b:{t:2,i:[{t:3}],s:"19th & 20th of August 2023"}},name:{t:0,b:{t:2,i:[{t:3}],s:"Agnès and Florent"}}}}})}const g=t=>(F("data-v-3ab18005"),t=t(),O(),t),V={key:0,class:"loading"},z=["src"],N=["src"],G=E('<div class="granville-light" data-v-3ab18005></div><div class="sun-container sun-container-1" data-v-3ab18005></div><div class="sun-container" data-v-3ab18005><div class="sun" data-v-3ab18005></div></div><div class="sun-container sun-container-reflection" data-v-3ab18005><div class="sun" data-v-3ab18005></div></div><div class="cloud" data-v-3ab18005></div><div class="cloud cloud-1" data-v-3ab18005></div><div class="water" data-v-3ab18005></div><div class="water side" data-v-3ab18005></div>',8),D=g(()=>a("svg",null,[a("filter",{id:"turbulence",x:"0",y:"0",width:"120%",height:"110%"},[a("feTurbulence",{id:"sea-filter",numOctaves:"3",seed:"2",baseFrequency:"0.02 0.05"},[a("animate",{"xlink:href":"#sea-filter",attributeName:"baseFrequency",dur:"60s",keyTime:"0;0.5;1",values:"0.02 0.15; 0.04 0.05; 0.02 0.12",repeatCount:"indefinite"})]),a("feDisplacementMap",{scale:"20",in:"SourceGraphic"})])],-1)),Y=["src"],Z=["src"],j=["src"],J={class:"header"},W={class:"date"},H={class:"title"},K=g(()=>a("img",{src:R,class:"logo",alt:""},null,-1)),b={__name:"animation",props:{animate:{type:Boolean,default:!0},reduceAtTheEnd:{type:Boolean,default:!0},mode:{type:String,default:"sunset"}},emits:["animationOver"],setup(t,{emit:l}){const{t:r}=A({useScope:"local"}),{animate:y,reduceAtTheEnd:Q,mode:X}=t,v=l,e=L({mont:{src:U,loaded:!1},roc:{src:q,loaded:!1},ponton:{src:M,loaded:!1},us:{src:C,loaded:!1},nobel:{src:P,loaded:!1}}),i=S(()=>Object.values(e).every(s=>s.loaded));return x(()=>{y?setTimeout(()=>{v("animationOver")},1e4):v("animationOver");const s=h=>new Promise((p,I)=>{let _=!1;const T=setTimeout(()=>{_=!0,p()},2e4),d=document.createElement("img");d.onload=()=>{_||(p(),clearTimeout(T))},d.onerror=k=>{I(k)},d.src=h});s(e.mont.src).catch(console.error).finally(()=>{e.mont.loaded=!0}),s(e.roc.src).catch(console.error).finally(()=>{e.roc.loaded=!0}),s(e.ponton.src).catch(console.error).finally(()=>{e.ponton.loaded=!0}),s(e.us.src).catch(console.error).finally(()=>{e.us.loaded=!0}),s(e.nobel.src).catch(console.error).finally(()=>{e.nobel.loaded=!0})}),(s,h)=>(n(),o("div",{id:"animation",class:B([{willBeAnimated:t.animate,animate:t.animate&&i.value,reduceAtTheEnd:t.reduceAtTheEnd,"mode-sunset":i.value&&t.mode==="sunset","mode-zenith":!i.value||t.mode==="zenith"},"landscape"])},[i.value?c("",!0):(n(),o("div",V,u(m(r)("bad_reception")),1)),e.mont.loaded?(n(),o("img",{key:1,src:e.mont.src,alt:"Mont Saint Michel",class:"mont"},null,8,z)):c("",!0),e.roc.loaded?(n(),o("img",{key:2,src:e.roc.src,alt:"Granville",class:"granville"},null,8,N)):c("",!0),G,D,e.ponton.loaded?(n(),o("img",{key:3,src:e.ponton.src,class:"pontoon",alt:"Ponton"},null,8,Y)):c("",!0),e.us.loaded?(n(),o("img",{key:4,src:e.us.src,class:"us",alt:"Florent et Agnès main dans la main"},null,8,Z)):c("",!0),e.nobel.loaded?(n(),o("img",{key:5,src:e.nobel.src,class:"nobel",alt:"nobel"},null,8,j)):c("",!0),a("header",J,[a("h2",W,u(m(r)("date")),1),a("h1",H,u(m(r)("name")),1)]),K],2))}};typeof f=="function"&&f(b);const ee=w(b,[["__scopeId","data-v-3ab18005"]]);export{ee as _,R as a};