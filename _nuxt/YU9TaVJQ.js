import{p as w,_ as A,u as I,v as T,x as B,h as L,o,c as l,t as m,e as v,k as r,L as U,a as t,m as x}from"./N07s3OJD.js";const C=w("/assets/mariage/agnes_et_florent-transparent.svg"),E=""+new URL("mont-min.BnMW8iqA.png",import.meta.url).href,R=""+new URL("roc-min.-3CBJpZU.png",import.meta.url).href,S=""+new URL("us-2.Bkk9iEuV.png",import.meta.url).href,F=""+new URL("ponton3.DchNU-qw.png",import.meta.url).href,M=""+new URL("nobel3.CX2QCsIa.png",import.meta.url).href;function g(a){const i=a;i.__i18n=i.__i18n||[],i.__i18n.push({locale:"",resource:{fr:{bad_reception:{t:0,b:{t:2,i:[{t:3}],s:"Tu captes mal... 😅"}},date:{t:0,b:{t:2,i:[{t:3}],s:"19 & 20 août 2023"}},name:{t:0,b:{t:2,i:[{t:3}],s:"Agnès et Florent"}}},en:{bad_reception:{t:0,b:{t:2,i:[{t:3}],s:"You have poor reception... 😅"}},date:{t:0,b:{t:2,i:[{t:3}],s:"19th & 20th of August 2023"}},name:{t:0,b:{t:2,i:[{t:3}],s:"Agnès and Florent"}}}}})}const N={key:0,class:"loading"},O=["src"],q=["src"],V=["src"],z=["src"],D=["src"],G={class:"header"},P={class:"date"},j={class:"title"},h={__name:"animation",props:{animate:{type:Boolean,default:!0},reduceAtTheEnd:{type:Boolean,default:!0},mode:{type:String,default:"sunset"}},emits:["animationOver"],setup(a,{emit:i}){const{t:d}=I({useScope:"local"}),p=i,e=T({mont:{src:E,loaded:!1},roc:{src:R,loaded:!1},ponton:{src:F,loaded:!1},us:{src:S,loaded:!1},nobel:{src:M,loaded:!1}}),c=B(()=>Object.values(e).every(n=>n.loaded));return L(()=>{a.animate?setTimeout(()=>{p("animationOver")},1e4):p("animationOver");const n=s=>new Promise((f,_)=>{let b=!1;const y=setTimeout(()=>{b=!0,f()},2e4),u=document.createElement("img");u.onload=()=>{b||(f(),clearTimeout(y))},u.onerror=k=>{_(k)},u.src=s});n(e.mont.src).catch(console.error).finally(()=>{e.mont.loaded=!0}),n(e.roc.src).catch(console.error).finally(()=>{e.roc.loaded=!0}),n(e.ponton.src).catch(console.error).finally(()=>{e.ponton.loaded=!0}),n(e.us.src).catch(console.error).finally(()=>{e.us.loaded=!0}),n(e.nobel.src).catch(console.error).finally(()=>{e.nobel.loaded=!0})}),(n,s)=>(o(),l("div",{id:"animation",class:x([{willBeAnimated:a.animate,animate:a.animate&&c.value,reduceAtTheEnd:a.reduceAtTheEnd,"mode-sunset":c.value&&a.mode==="sunset","mode-zenith":!c.value||a.mode==="zenith"},"landscape"])},[c.value?r("",!0):(o(),l("div",N,m(v(d)("bad_reception")),1)),e.mont.loaded?(o(),l("img",{key:1,src:e.mont.src,alt:"Mont Saint Michel",class:"mont"},null,8,O)):r("",!0),e.roc.loaded?(o(),l("img",{key:2,src:e.roc.src,alt:"Granville",class:"granville"},null,8,q)):r("",!0),s[0]||(s[0]=U('<div class="granville-light" data-v-3ab18005></div><div class="sun-container sun-container-1" data-v-3ab18005></div><div class="sun-container" data-v-3ab18005><div class="sun" data-v-3ab18005></div></div><div class="sun-container sun-container-reflection" data-v-3ab18005><div class="sun" data-v-3ab18005></div></div><div class="cloud" data-v-3ab18005></div><div class="cloud cloud-1" data-v-3ab18005></div><div class="water" data-v-3ab18005></div><div class="water side" data-v-3ab18005></div>',8)),s[1]||(s[1]=t("svg",null,[t("filter",{id:"turbulence",x:"0",y:"0",width:"120%",height:"110%"},[t("feTurbulence",{id:"sea-filter",numOctaves:"3",seed:"2",baseFrequency:"0.02 0.05"},[t("animate",{"xlink:href":"#sea-filter",attributeName:"baseFrequency",dur:"60s",keyTime:"0;0.5;1",values:"0.02 0.15; 0.04 0.05; 0.02 0.12",repeatCount:"indefinite"})]),t("feDisplacementMap",{scale:"20",in:"SourceGraphic"})])],-1)),e.ponton.loaded?(o(),l("img",{key:3,src:e.ponton.src,class:"pontoon",alt:"Ponton"},null,8,V)):r("",!0),e.us.loaded?(o(),l("img",{key:4,src:e.us.src,class:"us",alt:"Florent et Agnès main dans la main"},null,8,z)):r("",!0),e.nobel.loaded?(o(),l("img",{key:5,src:e.nobel.src,class:"nobel",alt:"nobel"},null,8,D)):r("",!0),t("header",G,[t("h2",P,m(v(d)("date")),1),t("h1",j,m(v(d)("name")),1)]),s[2]||(s[2]=t("img",{src:C,class:"logo",alt:""},null,-1))],2))}};typeof g=="function"&&g(h);const Q=A(h,[["__scopeId","data-v-3ab18005"]]);export{Q as _,C as a};
