(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{383:function(t,e,r){"use strict";var o=r(395);r.d(e,"a",(function(){return o.a}))},390:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"linkedin":"Linkedin","github":"Github","Twitter":"Twitter","Mail":"Mail"},"en":{"linkedin":"Linkedin","github":"Github","Twitter":"Twitter","Mail":"Mail"}}'),delete t.options._Ctor}},392:function(t,e,r){"use strict";var o={components:{Typography:r(383).a}},n=(r(414),r(50)),l=r(416),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("ul",{staticClass:"social-network"},[e("li",[e("Typography",{attrs:{component:"a",rel:"noopener",target:"_blank",href:"https://twitter.com/berthel350"}},[e("img",{attrs:{src:"/assets/twitter.svg",alt:""}}),t._v("\n        "+t._s(t.$t("Twitter"))+"\n      ")])],1),t._v(" "),e("li",[e("Typography",{attrs:{component:"a",rel:"noopener",target:"_blank",href:"https://www.linkedin.com/in/florent-berthelot-a2678861/"}},[e("img",{attrs:{src:"/assets/linkedin.svg",alt:""}}),t._v("\n        "+t._s(t.$t("linkedin"))+"\n      ")])],1),t._v(" "),e("li",[e("Typography",{attrs:{component:"a",rel:"noopener",target:"_blank",href:"https://github.com/FBerthelot"}},[e("img",{attrs:{src:"/assets/github.svg",alt:""}}),t._v(t._s(t.$t("github")))])],1),t._v(" "),e("li",[e("Typography",{attrs:{component:"a",href:"mailto:florent@berthelot.io"}},[e("img",{attrs:{src:"/assets/email.svg",alt:""}}),t._v("\n        "+t._s(t.$t("Mail"))+"\n      ")])],1)])])}),[],!1,null,"464b18b4",null);"function"==typeof l.default&&Object(l.default)(component);e.a=component.exports},393:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));r(403),r(80);var o={props:{face:{type:Number,required:!1,default:null}},data:function(){return{avatars:["/assets/moi.jpg","/assets/alive.gif"],currentAvatar:this.face||0}},mounted:function(){var t=this;null===this.face&&(this.interval=setInterval((function(){t.currentAvatar=(t.currentAvatar+1)%2}),3e4))},destroyed:function(){null===this.face&&clearInterval(this.interval)}},n=(r(410),r(50)),l=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("div",{staticClass:"logo__flip-container"},[e("transition",{attrs:{name:"apear"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:0===t.currentAvatar,expression:"currentAvatar === 0"}],staticClass:"logo__face-a",attrs:{src:t.avatars[0],alt:"my avatar"}})]),t._v(" "),e("transition",{attrs:{name:"apear"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:0!==t.currentAvatar,expression:"currentAvatar !== 0"}],staticClass:"logo__face-b",attrs:{src:t.avatars[1],alt:"my avatar"}})]),t._v(" "),e("img",{staticClass:"logo__face-c",attrs:{src:"/assets/joker.jpg",alt:"joker"}})],1)])}),[],!1,null,"7812f9f4",null).exports},394:function(t,e,r){"use strict";var o={components:{Typography:r(383).a}},n=(r(412),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("Typography",{staticClass:"languageSwitcher"},["en"!==t.$i18n.locale?e("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("\n    EN\n  ")]):t._e(),t._v(" "),"fr"!==t.$i18n.locale?e("nuxt-link",{attrs:{to:t.switchLocalePath("fr")}},[t._v("\n    FR\n  ")]):t._e()],1)}),[],!1,null,"3d9a78b4",null);e.a=component.exports},395:function(t,e,r){"use strict";r(54);var o={name:"Typography",props:{component:{type:String,required:!1,default:"p"},variant:{type:String,required:!1,default:"default"},color:{type:String,required:!1,default:"white"}},render:function(t){return t(this.component,{class:"typographyBase ".concat(this.variant," ").concat(this.color)},this.$slots.default)}},n=(r(405),r(50)),component=Object(n.a)(o,undefined,undefined,!1,null,"13b76019",null);e.a=component.exports},396:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("7fb586c8",content,!0,{sourceMap:!1})},397:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("029c7cd6",content,!0,{sourceMap:!1})},398:function(t,e,r){var content=r(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("ca64787a",content,!0,{sourceMap:!1})},399:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("ea4d0b6c",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"e",(function(){return title})),r.d(e,"c",(function(){return meta})),r.d(e,"d",(function(){return h})),r.d(e,"f",(function(){return video})),r.d(e,"b",(function(){return w}));r(481);var o={components:{},props:{link:{type:String,required:!1,default:null},internalLink:{type:Boolean,required:!1,default:!1}}},n=(r(484),r(50)),l=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"card"},[t.link&&!t.internalLink?e("a",{staticClass:"card__container card__container--link",attrs:{target:"_blank",rel:"noopener",href:t.link}},[t._t("default")],2):t._e(),t._v(" "),t.link&&t.internalLink?e("nuxt-link",{staticClass:"card__container card__container--link",attrs:{to:t.link}},[t._t("default")],2):t._e(),t._v(" "),t.link?t._e():e("div",{staticClass:"card__container"},[t._t("default")],2)],1)}),[],!1,null,"6c73ab7a",null).exports,c=r(383),d={components:{Typography:c.a},props:{component:{type:String,required:!1,default:"h2"}}},title=(r(486),Object(n.a)(d,(function(){var t=this;return(0,t._self._c)("Typography",{staticClass:"card__title",attrs:{component:t.component,variant:"title--small",color:"light"}},[t._t("default")],2)}),[],!1,null,"6c1c652f",null).exports),f={components:{Typography:c.a},props:{component:{type:String,required:!1,default:"div"}}},meta=(r(488),Object(n.a)(f,(function(){var t=this;return(0,t._self._c)("Typography",{staticClass:"card__meta",attrs:{component:t.component,variant:"meta-info"}},[t._t("default")],2)}),[],!1,null,"204f00b9",null).exports),v={components:{MoreButton:r(479).b},data:function(){return{displayAlternatives:!1}},methods:{toggleDisplayAlternatives:function(){this.displayAlternatives=!this.displayAlternatives}}},m=(r(494),Object(n.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"alternatives",class:{"alternatives--displayed":t.displayAlternatives},attrs:{"aria-hidden":!t.displayAlternatives}},[t._t("default")],2),t._v(" "),e("MoreButton",{staticClass:"card__alternative-button",class:{"card__alternative-button--open":t.displayAlternatives},attrs:{role:"button"},nativeOn:{click:function(e){return e.stopPropagation(),t.toggleDisplayAlternatives.apply(null,arguments)}}})],1)}),[],!1,null,null,null)),h=m.exports,_={components:{},props:{video:{type:String,required:!0}}},video=(r(496),Object(n.a)(_,(function(){return(0,this._self._c)("iframe",{staticClass:"video",attrs:{width:"560",height:"315",src:this.video,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})}),[],!1,null,"7c57e3f5",null).exports),y={components:{Typography:c.a},props:{component:{type:String,required:!1,default:"a"}}},w=(r(498),Object(n.a)(y,(function(){var t=this;return(0,t._self._c)("Typography",{staticClass:"card__link",attrs:{component:t.component,variant:"meta-info"}},[t._t("default")],2)}),[],!1,null,"473b0fc0",null).exports)},403:function(t,e,r){"use strict";var o=r(1),n=r(23),l=r(12),c=r(8),path=r(228),d=r(4),f=r(101),v=r(15),m=r(160),h=r(61),_=r(100),y=r(227),w=r(3),x=r(81).f,k=r(57).f,M=r(24).f,T=r(407),N=r(408).trim,C="Number",S=c.Number,I=path.Number,A=S.prototype,j=c.TypeError,O=d("".slice),E=d("".charCodeAt),z=function(t){var e=y(t,"number");return"bigint"==typeof e?e:L(e)},L=function(t){var e,r,o,n,l,c,d,code,f=y(t,"number");if(_(f))throw j("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=E(f,0))||45===e){if(88===(r=E(f,2))||120===r)return NaN}else if(48===e){switch(E(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(l=O(f,2)).length,d=0;d<c;d++)if((code=E(l,d))<48||code>n)return NaN;return parseInt(l,o)}return+f},B=f(C,!S(" 0o1")||!S("0b1")||S("+0x1")),Y=function(t){return h(A,t)&&w((function(){T(t)}))},$=function(t){var e=arguments.length<1?0:S(z(t));return Y(this)?m(Object(e),this,$):e};$.prototype=A,B&&!n&&(A.constructor=$),o({global:!0,constructor:!0,wrap:!0,forced:B},{Number:$});var F=function(t,source){for(var e,r=l?x(source):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),o=0;r.length>o;o++)v(source,e=r[o])&&!v(t,e)&&M(t,e,k(source,e))};n&&I&&F(path.Number,I),(B||n)&&F(path.Number,S)},405:function(t,e,r){"use strict";r(396)},406:function(t,e,r){var o=r(66)(!1);o.push([t.i,'.typographyBase[data-v-13b76019]{font-family:Verdana,Geneva,sans-serif}.default[data-v-13b76019]{font-size:1rem;line-height:1.3rem}.meta-info[data-v-13b76019]{font-size:.7rem;line-height:1rem;font-style:italic}.title[data-v-13b76019]{font-family:suicide-squad,"Comic Sans MS","Comic Sans",cursive;font-size:3rem;line-height:3rem}.title--small[data-v-13b76019]{font-size:1.5rem}.title--extra-small[data-v-13b76019],.title--small[data-v-13b76019]{font-family:suicide-squad,"Comic Sans MS","Comic Sans",cursive;line-height:1.5rem}.title--extra-small[data-v-13b76019]{font-size:1.1rem}.white[data-v-13b76019]{color:var(--color-white)}.light[data-v-13b76019]{color:var(--color-light)}.bright[data-v-13b76019]{color:var(--color-bright)}.medium[data-v-13b76019]{color:var(--color-medium)}.dark[data-v-13b76019]{color:var(--color-dark)}.black[data-v-13b76019]{color:var(--color-black)}',""]),t.exports=o},407:function(t,e,r){var o=r(4);t.exports=o(1..valueOf)},408:function(t,e,r){var o=r(4),n=r(31),l=r(14),c=r(409),d=o("".replace),f=RegExp("^["+c+"]+"),v=RegExp("(^|[^"+c+"])["+c+"]+$"),m=function(t){return function(e){var r=l(n(e));return 1&t&&(r=d(r,f,"")),2&t&&(r=d(r,v,"$1")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},409:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},410:function(t,e,r){"use strict";r(397)},411:function(t,e,r){var o=r(66)(!1);o.push([t.i,".logo[data-v-7812f9f4]{height:8rem;width:8rem;perspective:50rem}.logo__flip-container[data-v-7812f9f4]{transition:all .6s ease;transform-style:preserve-3d;position:relative}.logo:hover .logo__flip-container[data-v-7812f9f4]{transform:rotateY(180deg)}.logo__face-a[data-v-7812f9f4],.logo__face-b[data-v-7812f9f4],.logo__face-c[data-v-7812f9f4]{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;height:8rem;width:8rem;border-radius:50%}.apear-enter-active[data-v-7812f9f4],.apear-leave-active[data-v-7812f9f4]{transition:all .5s ease}.apear-enter[data-v-7812f9f4],.apear-leave-to[data-v-7812f9f4]{opacity:0}.logo__face-a[data-v-7812f9f4],.logo__face-b[data-v-7812f9f4]{transform:rotateY(0deg)}.logo__face-c[data-v-7812f9f4]{transform:rotateY(180deg)}",""]),t.exports=o},412:function(t,e,r){"use strict";r(398)},413:function(t,e,r){var o=r(66)(!1);o.push([t.i,".languageSwitcher[data-v-3d9a78b4]{position:absolute;top:1rem;right:1rem}.languageSwitcher a[data-v-3d9a78b4]{color:var(--color-white);text-decoration:none}",""]),t.exports=o},414:function(t,e,r){"use strict";r(399)},415:function(t,e,r){var o=r(66)(!1);o.push([t.i,".footer[data-v-464b18b4]{display:flex;align-items:center;justify-content:space-around;border-bottom:2px solid var(--color-dark);height:5rem;box-sizing:border-box}.social-network[data-v-464b18b4]{display:flex;justify-content:flex-end;padding-right:2rem}.social-network a[data-v-464b18b4]{position:relative;display:inline-block;margin:0 0 -1px;border-bottom:1px solid var(--color-dark);border:1px solid var(--color-dark);border-bottom-color:var(--color-black);background:var(--color-dark);cursor:pointer;padding:1rem;width:6rem;height:5rem;transition:all .5s ease;box-shadow:0 -.25rem .25rem var(--color-black);transform-origin:bottom center;text-decoration:none;text-align:center;box-sizing:border-box;font-size:.8rem}.social-network a img[data-v-464b18b4]{height:2rem;padding:0 1rem}.social-network a[data-v-464b18b4]:focus,.social-network a[data-v-464b18b4]:hover{border-bottom:1px solid var(--color-light);border:1px solid var(--color-light);border-bottom-color:var(--color-black);transform:scale(1.3);box-shadow:0 0 2rem var(--color-light);outline:none;z-index:10}@media screen and (max-width:850px){.social-network[data-v-464b18b4]{justify-content:center;padding:0}.social-network a[data-v-464b18b4]{font-size:.7rem;width:4.5rem;padding:.5rem 0}}",""]),t.exports=o},416:function(t,e,r){"use strict";var o=r(390),n=r.n(o);e.default=n.a},448:function(t,e,r){var content=r(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("f1a23e7c",content,!0,{sourceMap:!1})},449:function(t,e,r){var content=r(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("539495a5",content,!0,{sourceMap:!1})},450:function(t,e,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("8399d6ea",content,!0,{sourceMap:!1})},451:function(t,e,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("2d1d68cc",content,!0,{sourceMap:!1})},452:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("f360762a",content,!0,{sourceMap:!1})},453:function(t,e,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("e604c4f6",content,!0,{sourceMap:!1})},454:function(t,e,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("602769b5",content,!0,{sourceMap:!1})},455:function(t,e,r){var content=r(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("47d9451c",content,!0,{sourceMap:!1})},479:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return f}));var o={components:{Typography:r(395).a},props:{component:{type:String,required:!1,default:"button"}}},n=(r(490),r(50)),l=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("Typography",{staticClass:"button",attrs:{component:t.component}},[t._v(" ▼ ")])}),[],!1,null,"7ddcbf42",null).exports,c=(r(403),r(80),r(383)),d={components:{Typography:c.a},props:{component:{type:String,required:!1,default:"button"},throwIn:{type:Number,required:!1,default:0}},data:function(){return{throwed:!1}},mounted:function(){var t=this;this.timeout=setTimeout((function(){t.throwed=!0}),this.throwIn)},destroyed:function(){clearTimeout(this.timeout)},render:function(t){return t(c.a,{class:"grenade ".concat(this.throwed?"grenade--throwed":""),props:{component:this.component}},this.$slots.default)}},f=(r(492),Object(n.a)(d,undefined,undefined,!1,null,"01af2e0d",null).exports)},481:function(t,e,r){"use strict";var o=r(1),n=r(482);o({target:"String",proto:!0,forced:r(483)("link")},{link:function(t){return n(this,"a","href",t)}})},482:function(t,e,r){var o=r(4),n=r(31),l=r(14),c=/"/g,d=o("".replace);t.exports=function(t,e,r,o){var f=l(n(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+d(l(o),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},483:function(t,e,r){var o=r(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},484:function(t,e,r){"use strict";r(448)},485:function(t,e,r){var o=r(66)(!1);o.push([t.i,".card[data-v-6c73ab7a]{position:relative}.card__container[data-v-6c73ab7a]{display:block;text-decoration:none;height:100%;padding:1rem;border:1px solid var(--color-light);box-shadow:0 0 .5rem var(--color-light);transition:all .5s ease-out}.card__container--link[data-v-6c73ab7a]:focus,.card__container--link[data-v-6c73ab7a]:hover{box-shadow:0 0 2rem var(--color-light);outline:none}.card__container--link[data-v-6c73ab7a]:active{box-shadow:0 0 2rem var(--color-dark);border:1px solid var(--color-dark)}.card__container--link:active .card__title[data-v-6c73ab7a]{color:var(--color-dark)}",""]),t.exports=o},486:function(t,e,r){"use strict";r(449)},487:function(t,e,r){var o=r(66)(!1);o.push([t.i,".card__title[data-v-6c1c652f]{transition:all .5s ease-out;margin-bottom:1rem}",""]),t.exports=o},488:function(t,e,r){"use strict";r(450)},489:function(t,e,r){var o=r(66)(!1);o.push([t.i,".card__meta[data-v-204f00b9]{text-align:right}",""]),t.exports=o},490:function(t,e,r){"use strict";r(451)},491:function(t,e,r){var o=r(66)(!1);o.push([t.i,".button[data-v-7ddcbf42]{width:2rem;height:2rem;border-radius:50%;border:none;background-color:var(--color-medium);cursor:pointer;transition:all 1s}.button[data-v-7ddcbf42]:focus,.button[data-v-7ddcbf42]:hover{transform:translateY(.2rem) scale(1.2);outline:none;box-shadow:0 0 2rem var(--color-light)}.button[data-v-7ddcbf42]:active{box-shadow:0 0 2rem var(--color-dark)}",""]),t.exports=o},492:function(t,e,r){"use strict";r(452)},493:function(t,e,r){var o=r(66)(!1);o.push([t.i,'.grenade[data-v-01af2e0d]{display:block;text-align:center;transition:all .5s ease;opacity:0;position:relative;border-radius:50%;width:.75rem;height:1rem;background-color:var(--color-medium);color:transparent;border:1px solid var(--color-medium);padding:1rem;cursor:pointer;text-decoration:none}.grenade.grenade--throwed[data-v-01af2e0d]:focus,.grenade.grenade--throwed[data-v-01af2e0d]:hover,:focus>.grenade.grenade--throwed[data-v-01af2e0d]{border:1px solid var(--color-light);box-shadow:0 0 1rem var(--color-light)}.grenade.grenade--throwed[data-v-01af2e0d]:active{border:1px solid var(--color-dark);box-shadow:0 0 1rem var(--color-dark)}.grenade[data-v-01af2e0d]:before{left:-.5rem;width:.4rem;height:1.5rem;transform:rotate(20deg);background-image:linear-gradient(180deg,#444 30%,#ccc 0);transition:all 1s ease}.grenade[data-v-01af2e0d]:after,.grenade[data-v-01af2e0d]:before{display:block;content:"";position:absolute;top:-.3rem}.grenade[data-v-01af2e0d]:after{left:-.4rem;width:1.6rem;height:.5rem;background-image:linear-gradient(270deg,#444 50%,#444 0)}.grenade--throwed[data-v-01af2e0d]{-webkit-animation:bounceInDown-01af2e0d 1.4s ease 0s 1 forwards,deployButton-01af2e0d .6s ease 2s 1 forwards;animation:bounceInDown-01af2e0d 1.4s ease 0s 1 forwards,deployButton-01af2e0d .6s ease 2s 1 forwards}.grenade--throwed[data-v-01af2e0d]:after{-webkit-animation:explodeY-01af2e0d 1s ease 2s 1 forwards;animation:explodeY-01af2e0d 1s ease 2s 1 forwards}.grenade--throwed[data-v-01af2e0d]:before{-webkit-animation:explodeX-01af2e0d 1s ease 2s 1 forwards;animation:explodeX-01af2e0d 1s ease 2s 1 forwards}@-webkit-keyframes explodeY-01af2e0d{to{transform:translate3d(0,-300vh,0)}}@keyframes explodeY-01af2e0d{to{transform:translate3d(0,-300vh,0)}}@-webkit-keyframes explodeX-01af2e0d{to{transform:translate3d(-300vw,-25vh,0)}}@keyframes explodeX-01af2e0d{to{transform:translate3d(-300vw,-25vh,0)}}@-webkit-keyframes bounceInDown-01af2e0d{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-.5rem,0)}90%{transform:translate3d(0,5px,0)}to{opacity:1;transform:none}}@keyframes bounceInDown-01af2e0d{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-.5rem,0)}90%{transform:translate3d(0,5px,0)}to{opacity:1;transform:none}}@-webkit-keyframes deployButton-01af2e0d{to{background-color:var(--color-medium);border-radius:0;color:var(--color-white);width:6rem;height:1.5rem}}@keyframes deployButton-01af2e0d{to{background-color:var(--color-medium);border-radius:0;color:var(--color-white);width:6rem;height:1.5rem}}',""]),t.exports=o},494:function(t,e,r){"use strict";r(453)},495:function(t,e,r){var o=r(66)(!1);o.push([t.i,".card__alternative-button{position:absolute;bottom:-1rem;right:calc(50% - 1rem)}.card__alternative-button--open{transform:rotate(180deg)}.alternatives{max-height:0;transition:all .5s ease-out;overflow:hidden}.alternatives--displayed{max-height:40rem}.alternatives__element{display:flex}",""]),t.exports=o},496:function(t,e,r){"use strict";r(454)},497:function(t,e,r){var o=r(66)(!1);o.push([t.i,".video[data-v-7c57e3f5]{width:100%;margin:3rem 0 2rem}",""]),t.exports=o},498:function(t,e,r){"use strict";r(455)},499:function(t,e,r){var o=r(66)(!1);o.push([t.i,".card__link[data-v-473b0fc0]{text-align:center;display:block;width:100%;margin-bottom:2rem}",""]),t.exports=o}}]);