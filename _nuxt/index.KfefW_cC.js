import{_ as b}from"./header.0zl6AnjZ.js";import{_ as w}from"./card.D0IxIovA.js";import B from"./ContentList.xrrrykEy.js";import{_ as x}from"./footer.C9FHqXlo.js";import{_ as k,u as S,c as a,b as s,f as l,a as o,w as c,o as i,F as D,g as F,h as C,t as n}from"./entry.d1ebTHqU.js";import{u as v}from"./index.DiVgBt8q.js";import"./avatar.DOlxB_cq.js";import"./nuxt-link.CdFoBZS5.js";import"./ContentQuery.CgmrWPm4.js";import"./query.mF3HNvwG.js";import"./preview.60USGJKt.js";import"./linkedin.B0OJ_5HG.js";import"./vue.f36acd1f.aOnRPkR8.js";function _(r){const t=r;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{fr:{title:{t:0,b:{t:2,i:[{t:3}],s:"Blog d'un artisan du web"}},meta:{title:{t:0,b:{t:2,i:[{t:3}],s:"Blog d'un artisan du web - Florent Berthelot"}},description:{t:0,b:{t:2,i:[{t:3}],s:"J'écris sur le web, les tests, le JavaScript, les designs systems, ..."}}}},en:{title:{t:0,b:{t:2,i:[{t:3}],s:"Blog"}},meta:{title:{t:0,b:{t:2,i:[{t:3}],s:"Blog of a web craftsman guy - Florent Berthelot"}},description:{t:0,b:{t:2,i:[{t:3}],s:"I write on Web, tests, JavaScript, Design Systems, ..."}}}}}})}const j={id:"articles-page"},I={class:"subjects"},J={class:"typo_title--small typo_light subject-title"},L={class:"typo_default typo_white"},T={class:"card_meta typo_meta-info typo_white"},p={__name:"index",setup(r){const{t,locale:m}=S({useScope:"local"});return v({ogType:"website",title:t("meta.title"),ogTitle:t("meta.title"),twitterTitle:t("meta.title"),description:t("meta.description"),ogDescription:t("meta.description"),twitterDescription:t("meta.description"),twitterCard:"summary",ogUrl:"https://berthelot.io/articles/"}),(u,$)=>{const d=b,f=w,h=B,g=x;return i(),a("div",j,[s(d,{title:l(t)("title")},null,8,["title"]),o("main",I,[s(h,{query:{path:"/articles",where:[{locale:l(m)}],sort:[{createdDate:-1}]}},{default:c(({list:y})=>[(i(!0),a(D,null,F(y,e=>(i(),C(f,{key:e.slug,link:`/articles/${e.slug}`,"internal-link":"",class:"subject"},{default:c(()=>[o("h2",J,n(e.title),1),o("span",L,n(e.description),1),o("time",T,n(new Date(e.createdDate).toLocaleString(u.$i18n.locale,{year:"numeric",month:"long",day:"numeric"})),1)]),_:2},1032,["link"]))),128))]),_:1},8,["query"])]),s(g)])}}};typeof _=="function"&&_(p);const P=k(p,[["__scopeId","data-v-7ff35497"]]);export{P as default};
