(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,m=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"04f1d65f","chunk-0595c27e":"c3d9bfd1"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/jgallery-fe/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0a87":function(t,e,n){},2110:function(t,e,n){"use strict";var a=n("2aad"),r=n.n(a);r.a},"2aad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SiteMobileMenu"),n("Navbar"),n("main",{staticClass:"main-content"},[n("div",{staticClass:"container-fluid photos"},[n("router-view"),n("Footer")],1)])],1)},o=[],i=(n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-bar d-flex d-lg-block align-items-center"},[n("div",{staticClass:"site-logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Shutter")])],1),t._m(0),n("div",{staticClass:"main-menu"},[n("ul",{staticClass:"js-clone-nav"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])])}),s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline-block d-lg-none ml-md-0 ml-auto py-3",staticStyle:{position:"relative",top:"3px"}},[n("a",{staticClass:"site-menu-toggle js-menu-toggle text-white",attrs:{href:"#"}},[n("span",{staticClass:"icon-menu h3"})])])}],u={name:"Navbar"},c=u,l=(n("2110"),n("2877")),d=Object(l["a"])(c,i,s,!1,null,"3ba83d04",null),m=d.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-mobile-menu"},[n("div",{staticClass:"site-mobile-menu-header"},[n("div",{staticClass:"site-mobile-menu-close mt-3"},[n("span",{staticClass:"icon-close2 js-menu-toggle"})])]),n("div",{staticClass:"site-mobile-menu-body"})])}],b={name:"SiteMobileMenu"},v=b,h=Object(l["a"])(v,f,p,!1,null,null,null),g=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-12 text-center py-5"},[n("p",[t._v(" Copyright © "+t._s(t.currentYear)+" All rights reserved | This template is made with "),n("i",{staticClass:"icon-heart",attrs:{"aria-hidden":"true"}}),t._v(" by "),n("a",{attrs:{href:"https://colorlib.com",target:"_blank"}},[t._v("Colorlib")])])])])},y=[],j=(new Date).getFullYear(),w={name:"Footer",data:function(){return{currentYear:j}}},C=w,L=Object(l["a"])(C,_,y,!1,null,null,null),x=L.exports,O=n("2f62"),k=n("bc3a"),A=n.n(k),E={name:"app",components:{Navbar:m,SiteMobileMenu:g,Footer:x},methods:Object(O["b"])(["startLoading","doneLoading"]),created:function(){var t=this;A.a.interceptors.request.use((function(e){return t.startLoading(),e}),(function(e){return t.doneLoading(),Promise.reject(e)})),A.a.interceptors.response.use((function(e){return t.doneLoading(),e}),(function(e){return t.doneLoading(),Promise.reject(e)}))}},P=E,S=(n("034f"),Object(l["a"])(P,r,o,!1,null,null,null)),M=S.exports,$=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row align-items-stretch"},[t.isLoading?n("Loader"):t._l(t.albums,(function(e){return n("div",{key:e.id,staticClass:"col-6 col-md-6 col-lg-4",attrs:{"data-aos":"fade-up"}},[n("router-link",{staticClass:"d-block photo-item",attrs:{to:{path:"/album/"+e.id}}},[n("img",{staticClass:"img-fluid",attrs:{src:e.coverImgLink,alt:"Image"}}),n("div",{staticClass:"photo-text-more"},[n("div",{staticClass:"photo-text-more"},[n("h3",{staticClass:"heading"},[t._v(t._s(e.title))]),n("span",{staticClass:"meta"},[t._v(t._s(e.pictures_count)+" pictures")])])])])],1)}))],2)},F=[],I=n("c8d4"),R={name:"Home",components:{Loader:I["a"]},methods:Object(O["b"])(["fetchAlbums"]),computed:Object(O["c"])({albums:"getAllAlbums",isLoading:"getIsLoadding"}),created:function(){this.fetchAlbums()}},H=R,N=Object(l["a"])(H,T,F,!1,null,null,null),Y=N.exports;a["a"].use($["a"]);var q=[{path:"/",name:"Home",component:Y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/album/:id",name:"Album",props:!0,component:function(){return n.e("chunk-0595c27e").then(n.bind(null,"ee18"))}}],J=new $["a"]({mode:"history",base:"/jgallery-fe/",routes:q});J.beforeEach((function(t,e,n){n()})),J.afterEach((function(){}));var D=J,z=(n("96cf"),n("1da1")),B="http://127.0.0.1:8000/api",G={albums:[],album:{}},K={getAllAlbums:function(t){return t.albums},getAlbum:function(t){return t.album}},Q={fetchAlbums:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,A.a.get(B+"/albums");case 3:a=e.sent,n("setAlbums",a.data.data);case 5:case"end":return e.stop()}}),e)})))()},fetchAlbum:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,A.a.get(B+"/albums/"+e);case 3:r=n.sent,a("setAlbum",r.data.data);case 5:case"end":return n.stop()}}),n)})))()}},U={setAlbums:function(t,e){return t.albums=e},setAlbum:function(t,e){return t.album=e}},V={state:G,getters:K,actions:Q,mutations:U},W={isLoading:!1},X={getIsLoadding:function(t){return t.isLoading}},Z={startLoading:function(t){var e=t.commit;e("setLoading",!0)},doneLoading:function(t){var e=t.commit;e("setLoading",!1)}},tt={setLoading:function(t,e){return t.isLoading=e}},et={state:W,getters:X,actions:Z,mutations:tt};a["a"].use(O["a"]);var nt=new O["a"].Store({modules:{albums:V,loader:et}});a["a"].config.productionTip=!1,new a["a"]({router:D,store:nt,render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,n){},a2a6:function(t,e,n){"use strict";var a=n("0a87"),r=n.n(a);r.a},c8d4:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loadingio-spinner-bean-eater-vnwi3wwueuj mx-auto"},[n("div",{staticClass:"ldio-oprvh5ln56h"},[n("div",[n("div"),n("div"),n("div")]),n("div",[n("div"),n("div"),n("div")])])])}],o={name:"Loader"},i=o,s=(n("a2a6"),n("2877")),u=Object(s["a"])(i,a,r,!1,null,"194aead9",null);e["a"]=u.exports}});
//# sourceMappingURL=app.3cd30390.js.map