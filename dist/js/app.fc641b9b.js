(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({"blog~profile":"blog~profile",blog:"blog",profile:"profile",login:"login",register:"register"}[e]||e)+"."+{"chunk-ef961ff0":"4721d685","blog~profile":"d4e58623",blog:"1413f645","chunk-20d2f9f0":"e54fc358",profile:"bc9f21a6","chunk-2d230814":"4ce5e9e4",login:"936766d1",register:"d45f4fb0","chunk-2d0e17ef":"4349b829","chunk-a5a4dc72":"74ed9355","chunk-2d0ae8fa":"33577766","chunk-2d0f064b":"c3e511b5"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={blog:1,"chunk-20d2f9f0":1,profile:1,"chunk-a5a4dc72":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"blog~profile":"blog~profile",blog:"blog",profile:"profile",login:"login",register:"register"}[e]||e)+"."+{"chunk-ef961ff0":"31d6cfe0","blog~profile":"31d6cfe0",blog:"26be3ecc","chunk-20d2f9f0":"05082079",profile:"100f4982","chunk-2d230814":"31d6cfe0",login:"31d6cfe0",register:"31d6cfe0","chunk-2d0e17ef":"31d6cfe0","chunk-a5a4dc72":"213bbfac","chunk-2d0ae8fa":"31d6cfe0","chunk-2d0f064b":"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1367:function(e,t,n){},"35a1a":function(e,t,n){"use strict";var r=n("f191"),a=n.n(r);a.a},"3a75":function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),o=function(e){var t=localStorage.getItem("access_token");return t&&(e.headers.common["Authorization"]="Bearer ".concat(t)),e},i={baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_ROOT_PATH},c=a.a.create(i);c.interceptors.request.use(o),t["a"]=c},"4fb9":function(e,t,n){"use strict";var r=n("1367"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("7d32"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)}),o=[],i=(n("96cf"),n("1da1")),c=n("3a75"),s={name:"App",created:function(){this.checkAuthStatus()},methods:{checkAuthStatus:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.getItem("access_token")){t.next=11;break}return t.prev=1,t.next=4,c["a"].post("check-auth-status");case 4:n=t.sent,401===n.status&&e.$store.dispatch("logout").then((function(){e.$router.push({path:"/login"})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),401===t.t0.response.status&&e.$store.dispatch("clear_user_for_server_loss").then((function(){e.$router.push({path:"/login"})}));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},u=s,l=(n("5c0b"),n("2877")),f=Object(l["a"])(u,a,o,!1,null,null,null),d=f.exports,p=(n("45fc"),n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{sm:"12",lg:"10"}},[n("Header")],1)],1),n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{sm:"12",lg:"10"}},[n("b-row",[n("b-col",{staticClass:"border-right",attrs:{sm:"2"}},[n("SideBar")],1),n("b-col",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)],1)],1),n("Footer")],1)},g=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Devport Logo")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-item",[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["far","compass"],size:"lg"}})],1)],1),n("b-nav-item-dropdown",{attrs:{size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":"",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-avatar",{attrs:{variant:"dark",text:"O"}})]},proxy:!0}])},[n("b-dropdown-item",[e._v("Your public profile")]),n("b-dropdown-item",[e._v("Settings")]),n("b-dropdown-item",[n("a",{staticClass:"text-decoration-none",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")])])],1)],1)],1)},m=[],v=n("d0b9"),k=n("8f77"),w=n("11a5"),_=n("5843"),y=n("042b"),x=n("4711"),O=n("ede5"),j=n("9eaa"),S=n("e8a3"),N={name:"Header",components:{BNavbar:v["a"],BNavbarBrand:k["a"],BNavbarToggle:w["a"],BCollapse:_["a"],BNavbarNav:y["a"],BNavItem:x["a"],BNavItemDropdown:O["a"],BDropdownItem:j["a"],BAvatar:S["a"]},methods:{logout:function(){var e=this;this.$store.dispatch("logout").then((function(){e.$router.push({path:"/login"})}))}}},B=N,A=Object(l["a"])(B,b,m,!1,null,null,null),C=A.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav",{attrs:{vertical:""}},e._l(e.sidebarItems,(function(t){return n("b-nav-item",{key:t.label,staticClass:"text-decoration-none font-weight-600 sidebar-link mb-3",attrs:{to:t.link,"active-class":"active-link"}},[n("span",{staticClass:"mr-3"},[t.icon.prefix?n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:[t.icon.prefix,t.icon.iconName],size:"lg"}}):n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:t.icon.iconName,size:"lg"}})],1),e._v(" "+e._s(t.label)+" ")])})),1)},E=[],$=n("59fb"),R={name:"Sidebar.vue",components:{BNav:$["a"],BNavItem:x["a"]},data:function(){return{sidebarItems:[{icon:{prefix:"far",iconName:"user-circle"},label:"Profile",link:"/profile"},{icon:{prefix:"far",iconName:"bell"},label:"Notifications",link:"notification"},{icon:{prefix:"far",iconName:"envelope"},label:"Messages",link:"messages"},{icon:{prefix:"fab",iconName:"usps"},label:"Blog",link:"blog"},{icon:{iconName:"user-friends"},label:"Connections",link:"connections"}]}}},I=R,T=(n("35a1a"),Object(l["a"])(I,P,E,!1,null,"d2ca54fa",null)),L=T.exports,D=n("a15b"),z=n("b28b"),H={name:"DashboardLayout",components:{Header:C,SideBar:L,BRow:D["a"],BCol:z["a"]}},q=H,F=(n("4fb9"),Object(l["a"])(q,h,g,!1,null,"bd33e1f4",null)),M=F.exports;r["default"].use(p["a"]);var U=[{path:"/login",component:function(){return Promise.all([n.e("chunk-ef961ff0"),n.e("login")]).then(n.bind(null,"a766"))},meta:{hideForAuth:!0}},{path:"/register",component:function(){return Promise.all([n.e("chunk-ef961ff0"),n.e("register")]).then(n.bind(null,"f6c2"))},meta:{hideForAuth:!0}},{path:"/",component:M,meta:{requiresAuth:!0},redirect:"/profile",children:[{path:"/profile",component:function(){return Promise.all([n.e("chunk-ef961ff0"),n.e("chunk-20d2f9f0"),n.e("blog~profile"),n.e("profile")]).then(n.bind(null,"2729"))}},{path:"blog",component:function(){return Promise.all([n.e("chunk-ef961ff0"),n.e("blog~profile"),n.e("blog")]).then(n.bind(null,"cfb7"))}},{path:"edit-profile",component:function(){return Promise.all([n.e("chunk-ef961ff0"),n.e("chunk-20d2f9f0"),n.e("chunk-2d230814")]).then(n.bind(null,"ed21"))}}]}],J=new p["a"]({mode:"history",base:"/",routes:U});J.beforeEach((function(e,t,n){var r=localStorage.getItem("access_token");if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(!r)return n({path:"/login"})}else if(e.matched.some((function(e){return e.meta.hideForAuth}))&&r)return n({path:"/profile"});n()}));var V=J,K=n("2f62"),Y=n("0e44"),G=n("67b3"),Q=void 0,W=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c["a"].post("register",n);case 4:r("register_user"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),Object(G["a"])(Q,!0,"Oppss !!","Something went wrong to upload logo","danger");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,c["a"].post("login",n);case 4:a=e.sent,r("set_user_data",a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),Object(G["a"])(Q,!0,"Oppss !!","Something went wrong to upload logo","danger");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,c["a"].post("logout");case 4:r=e.sent,n("clear_user_data",r),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),Object(G["a"])(Q,!0,"Oppss !!","Something went wrong to upload logo","danger");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit;try{n("clear_user_data")}catch(r){Object(G["a"])(Q,!0,"Oppss !!","Something went wrong to upload logo","danger")}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te={register:W,login:X,logout:Z,clear_user_for_server_loss:ee},ne=function(e,t){var n=t.data.token,r=t.data.user;localStorage.setItem("access_token",n),e.user=r},re=function(e){localStorage.clear(),e.user={},location.reload()},ae=function(){},oe={set_user_data:ne,clear_user_data:re,register_user:ae},ie={state:{user:{}},actions:te,mutations:oe};r["default"].use(K["a"]);var ce=new K["a"].Store({modules:{auth:ie},plugins:[Object(Y["a"])()]}),se=n("bc3a"),ue=n.n(se),le=n("ad3d"),fe=n("ecee"),de=n("c074"),pe=n("f2d1"),he=n("b702");function ge(e){var t=e.$options.title;if(t)return"function"===typeof t?t.call(e):t}fe["c"].add(de["c"],de["e"],de["j"],de["k"],de["d"],de["g"],de["f"],he["c"],he["f"],he["a"],he["d"],de["n"],pe["a"],de["i"],de["h"],he["e"],de["m"],de["b"],de["l"],he["b"],de["a"]);var be={created:function(){var e=ge(this);e&&(document.title=e)}};r["default"].component("font-awesome-icon",le["a"]),r["default"].mixin(be),r["default"].config.productionTip=!1,r["default"].prototype.$http=ue.a,ue.a.defaults.withCredentials=!0;var me=localStorage.getItem("token");me&&(r["default"].prototype.$http.defaults.headers.common["Authorization"]=me),new r["default"]({router:V,store:ce,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"67b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("2b0e"),a=n("104d");r["default"].use(a["a"]);var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"primary",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:5e3,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"bottom-left";e.$bvToast.toast("".concat(r," "),{title:n,variant:a,autoHideDelay:o,appendToast:t,toaster:"b-toaster-".concat(i)})}},"7d32":function(e,t,n){},"9c0c":function(e,t,n){},f191:function(e,t,n){}});
//# sourceMappingURL=app.fc641b9b.js.map