import{_ as I}from"./header.Et4l1vax.js";import{_ as R}from"./ContentRendererMarkdown.vue.WAx9ytCD.js";import M from"./ContentRenderer.mdpXsfTk.js";import{_ as q}from"./footer.Zw0WUeb7.js";import{_ as N,j as S,u as V,k as l,f as a,c as $,b as i,w as j,l as E,n as y,o as H}from"./entry.Umd5PPai.js";import{u as O,q as P}from"./query.NGnLR-Au.js";import{u as U}from"./index.PiC-Iy8j.js";import"./avatar.DZF813M0.js";import"./nuxt-link.TINyRXqk.js";import"./index.Wme0U9j4.js";import"./preview.err3FBhY.js";import"./linkedin.yI17y6bb.js";import"./vue.f36acd1f.4R7Ox-Mx.js";function b(n){const e=n;e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{fr:{meta:{title:{t:0,b:{t:2,i:[{t:4,k:"title"},{t:3,v:" - Florent Berthelot"}]}}}},en:{meta:{title:{t:0,b:{t:2,i:[{t:4,k:"title"},{t:3,v:" - Florent Berthelot"}]}}}}}})}const z={key:0,id:"article-page"},x={__name:"[slug]",async setup(n){var u,_,m,p,d,f,g,v,h,w,C,k;let e,o;const s=S(),{t:r,locale:A}=V({useScope:"local"}),{data:t,error:c}=([e,o]=l(()=>O("page-data",()=>P("/article").where({slug:s.params.slug,locale:A.value}).findOne())),e=await e,o(),e);return((u=c.value)==null?void 0:u.statusCode)===404?([e,o]=l(()=>y("/404")),await e,o()):(_=c.value)!=null&&_.statusCode&&([e,o]=l(()=>y("/500")),await e,o()),U(t?{ogType:"article",title:r("meta.title",{title:(m=t.value)==null?void 0:m.title}),ogTitle:r("meta.title",{title:(p=t.value)==null?void 0:p.title}),twitterTitle:r("meta.title",{title:(d=t.value)==null?void 0:d.title}),description:(f=t.value)==null?void 0:f.description,ogDescription:(g=t.value)==null?void 0:g.description,twitterDescription:(v=t.value)==null?void 0:v.description,ogImage:(h=t.value)==null?void 0:h.image,twitterImage:(w=t.value)==null?void 0:w.image,twitterCard:"summary_large_image",ogUrl:`https://berthelot.io/articles/${s.params.slug}`,ogArticlePublishedTime:(C=t.value)==null?void 0:C.createdDate,ogArticleModifiedTime:(k=t.value)==null?void 0:k.modifiedDate,ogArticleAuthor:"https://berthelot.io"}:{}),(G,J)=>{const T=I,D=R,F=M,B=q;return a(t)?(H(),$("div",z,[i(T,{title:a(t).title,"back-link":"/articles/"},null,8,["title"]),i(F,{value:a(t)},{default:j(()=>[i(D,{value:a(t),class:"typo_default article"},null,8,["value"])]),_:1},8,["value"]),i(B)])):E("",!0)}}};typeof b=="function"&&b(x);const lt=N(x,[["__scopeId","data-v-dc335689"]]);export{lt as default};
