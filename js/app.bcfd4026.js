(function(){"use strict";var e={3034:function(e,t,n){var r=n(9963),o=n(6252),a=n(3577);const i={class:"nav"},l={class:"container"},u=(0,o._)("span",null,"Co",-1),s={class:"nav__item"},c={class:"nav__item"},f={class:"nav__item"},d=(0,o._)("span",{class:"line1 line"},null,-1),m={class:"line2 line"},g=(0,o._)("span",{class:"line3 line"},null,-1);function p(e,t,n,p,h,v){const b=(0,o.up)("router-link"),_=(0,o.up)("Header"),y=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",i,[(0,o._)("div",l,[(0,o.Wm)(b,{to:"/",class:"logo"},{default:(0,o.w5)((()=>[u,(0,o.Uk)("ooking")])),_:1}),(0,o._)("ul",{class:(0,a.C_)(["nav__list",{active:h.burger}])},[(0,o._)("li",s,[(0,o.Wm)(b,{to:"/",class:"nav__link",onClick:t[0]||(t[0]=e=>h.burger=!h.burger)},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1})]),(0,o._)("li",c,[(0,o.Wm)(b,{to:"/about",class:"nav__link",onClick:t[1]||(t[1]=e=>h.burger=!h.burger)},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1})]),(0,o._)("li",f,[(0,o.Wm)(b,{to:"/contact",class:"nav__link",onClick:t[2]||(t[2]=e=>h.burger=!h.burger)},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1})])],2),(0,o._)("div",{class:(0,a.C_)(["nav__burger",{active:h.burger}]),onClick:t[3]||(t[3]=e=>h.burger=!h.burger)},[d,(0,o.wy)((0,o._)("span",m,null,512),[[r.F8,!h.burger]]),g],2)])]),(0,o.Wm)(_),(0,o.Wm)(y)],64)}var h=n.p+"img/headerbg.06f76c98.jpg";const v={class:"header"},b=(0,o._)("img",{src:h,alt:"",class:"header__bg"},null,-1),_=(0,o._)("div",{class:"container"},[(0,o._)("h1",{class:"header__title"},[(0,o._)("span",null,"Co"),(0,o.Uk)("ooking site")])],-1),y=[b,_];function k(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("header",v,y)}var w={name:"Header"},C=n(3744);const j=(0,C.Z)(w,[["render",k]]);var O=j,S={name:"App",data(){return{burger:!1}},components:{Header:O}};const T=(0,C.Z)(S,[["render",p]]);var A=T,E=n(2201);const x=[{path:"/",name:"home",component:()=>n.e(872).then(n.bind(n,9872))},{path:"/about",name:"about",component:()=>n.e(233).then(n.bind(n,6233))},{path:"/contact",name:"contact",component:()=>n.e(323).then(n.bind(n,3323))},{path:"/meals/:id",name:"mealPage",component:()=>n.e(187).then(n.bind(n,4187))},{path:"/area/:area",name:"areaPage",component:()=>n.e(3).then(n.bind(n,5003))},{path:"/category/:category",name:"categoryPage",component:()=>n.e(957).then(n.bind(n,7957))}],P=(0,E.p7)({history:(0,E.PO)("/cooking/"),routes:x});var N=P,H=(n(7658),n(6154)),L=n(3907),M=n(8684),I=n.n(M),U=(0,L.MT)({state:{meals:null,mealId:null,info:{phoneNum:"+998900929477",mail:"salohiddinov.mm@gmail.com"},socials:{telegram:{name:"Telegram",src:"https://telegram.me/maga_me",icon:n(6649)},tiktok:{name:"TikTok",src:"https://www.tiktok.com/",icon:n(1262)},youtube:{name:"YouTube",src:"https://www.youtube.com/watch?v=_1YwHbjELJI",icon:n(7698)},instagram:{name:"Instagram",src:"https://www.instagram.com/",icon:n(7927)}},letter:"s",alphabets:[{letter:"a"},{letter:"b"},{letter:"c"},{letter:"d"},{letter:"e"},{letter:"f"},{letter:"g"},{letter:"h"},{letter:"i"},{letter:"j"},{letter:"k"},{letter:"l"},{letter:"m"},{letter:"n"},{letter:"o"},{letter:"p"},{letter:"q"},{letter:"r"},{letter:"s"},{letter:"t"},{letter:"u"},{letter:"v"},{letter:"w"},{letter:"x"},{letter:"y"},{letter:"z"}],area:[],category:[],loadingStatus:!1},getters:{},mutations:{setMeals(e,t){e.meals=t},setId(e,t){e.mealId=t},setLetter(e,t){e.letter=t},setArea(e,t){let n=e.meals?.filter((e=>e?.strArea==t));e.area.length?(e.area=[],e.area.push(n,t)):e.area.push(n,t)},setCategory(e,t){let n=e.meals?.filter((e=>e?.strCategory==t));e.category.length?(e.category=[],e.category.push(n,t)):e.category.push(n,t)},loadingStatus(e,t){e.loadingStatus=t}},actions:{async getMeals({commit:e,state:t},n){e("loadingStatus",!0);try{let n=t.letter,r=await H.Z.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${n}`),o=r.data.meals;e("setMeals",o),e("loadingStatus",!1)}catch(r){console.error("Error",r)}}},modules:{},plugins:[I()()]});(0,r.ri)(A).use(U).use(N).mount("#app")},7927:function(e,t,n){e.exports=n.p+"img/instagram.6b43bafc.svg"},6649:function(e,t,n){e.exports=n.p+"img/telegram.ece88ee5.svg"},1262:function(e,t,n){e.exports=n.p+"img/tiktok.ac5e70b8.svg"},7698:function(e,t,n){e.exports=n.p+"img/youtube.49b870e8.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{3:"e7e68cb8",187:"f5ee694e",233:"6d3b57c4",323:"16f5500d",872:"524275da",957:"5f983bbd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".1194e027.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="foods:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var l,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){l=f;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+a),l.src=r),e[r]=[o];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/cooking/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),l=n.p+i;if(t(i,l))return o();e(r,l,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={872:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),l=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkfoods"]=self["webpackChunkfoods"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3034)}));r=n.O(r)})();
//# sourceMappingURL=app.bcfd4026.js.map