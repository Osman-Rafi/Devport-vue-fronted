(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-112fb18d"],{1947:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var n=r("b42e"),a=r("dcb3"),o=r("01e7"),c=r("2326"),i=r("228e"),l=r("906c"),u=r("7b1e"),s=r("d82f"),f=r("cf75"),b=r("4a38"),p=r("aa59");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O="BButton",j=Object(s["m"])(p["b"],["event","routerTag"]);delete j.href.default,delete j.to.default;var v={block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(i["c"])(O,"size")}},variant:{type:String,default:function(){return Object(i["c"])(O,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}},h=m(m({},v),j),y=function(e){"focusin"===e.type?Object(l["b"])(e.target,"focus"):"focusout"===e.type&&Object(l["u"])(e.target,"focus")},w=function(e){return Object(b["d"])(e)||Object(l["p"])(e.tag,"a")},D=function(e){return Object(u["a"])(e.pressed)},k=function(e){return!(w(e)||e.tag&&!Object(l["p"])(e.tag,"button"))},x=function(e){return!w(e)&&!k(e)},P=function(e){var t;return["btn-".concat(e.variant||Object(i["c"])(O,"variant")),(t={},g(t,"btn-".concat(e.size),e.size),g(t,"btn-block",e.block),g(t,"rounded-pill",e.pill),g(t,"rounded-0",e.squared&&!e.pill),g(t,"disabled",e.disabled),g(t,"active",e.pressed),t)]},S=function(e){return w(e)?Object(f["b"])(j,e):{}},B=function(e,t){var r=k(e),n=w(e),a=D(e),o=x(e),c=n&&"#"===e.href,i=t.attrs&&t.attrs.role?t.attrs.role:null,l=t.attrs?t.attrs.tabindex:null;return(o||c)&&(l="0"),{type:r&&!n?e.type:null,disabled:r?e.disabled:null,role:o||c?"button":i,"aria-disabled":o?String(e.disabled):null,"aria-pressed":a?String(e.pressed):null,autocomplete:a?"off":null,tabindex:e.disabled&&!r?"-1":l}},E=a["a"].extend({name:O,functional:!0,props:h,render:function(e,t){var r=t.props,a=t.data,i=t.listeners,l=t.children,s=D(r),f=w(r),b=x(r),d=f&&"#"===r.href,m={keydown:function(e){if(!r.disabled&&(b||d)){var t=e.keyCode;if(t===o["a"].SPACE||t===o["a"].ENTER&&b){var n=e.currentTarget||e.target;e.preventDefault(),n.click()}}},click:function(e){r.disabled&&Object(u["c"])(e)?(e.stopPropagation(),e.preventDefault()):s&&i&&i["update:pressed"]&&Object(c["b"])(i["update:pressed"]).forEach((function(e){Object(u["d"])(e)&&e(!r.pressed)}))}};s&&(m.focusin=y,m.focusout=y);var g={staticClass:"btn",class:P(r),props:S(r),attrs:B(r,a),on:m};return e(f?p["a"]:r.tag,Object(n["a"])(a,g),l)}})},8690:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return o}));var n=/(<([^>]+)>)/gi,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(n,"")},o=function(e,t){return e?{innerHTML:e}:t?{textContent:t}:{}}},a15b:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("b42e"),a=r("6c06"),o=r("b508"),c=r("2326"),i=r("228e"),l=r("d82f"),u=r("cf75"),s=r("fa73");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=["start","end","center"],m=function(){return{type:[String,Number],default:null}},g=Object(o["a"])((function(e,t){return t=Object(s["f"])(Object(s["e"])(t)),t?Object(s["b"])(["row-cols",e,t].filter(a["a"]).join("-")):null})),O=Object(o["a"])((function(e){return Object(s["b"])(e.replace("cols",""))})),j=[],v=function(){var e=Object(i["b"])(),t=e.reduce((function(e,t){return e[Object(u["d"])(t,"cols")]=m(),e}),Object(l["c"])(null));return j=Object(l["l"])(t),b({tag:{type:String,default:"div"},noGutters:{type:Boolean,default:!1},alignV:{type:String,default:null,validator:function(e){return Object(c["a"])(Object(c["b"])(d,"baseline","stretch"),e)}},alignH:{type:String,default:null,validator:function(e){return Object(c["a"])(Object(c["b"])(d,"between","around"),e)}},alignContent:{type:String,default:null,validator:function(e){return Object(c["a"])(Object(c["b"])(d,"between","around","stretch"),e)}}},t)},h={name:"BRow",functional:!0,get props(){return delete this.props,this.props=v(),this.props},render:function(e,t){var r,a=t.props,o=t.data,c=t.children,i=[];return j.forEach((function(e){var t=g(O(e),a[e]);t&&i.push(t)})),i.push((r={"no-gutters":a.noGutters},p(r,"align-items-".concat(a.alignV),a.alignV),p(r,"justify-content-".concat(a.alignH),a.alignH),p(r,"align-content-".concat(a.alignContent),a.alignContent),r)),e(a.tag,Object(n["a"])(o,{staticClass:"row",class:i}),c)}}},b28b:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r("b42e"),a=r("6c06"),o=r("b508"),c=r("2326"),i=r("228e"),l=r("7b1e"),u=r("d82f"),s=r("cf75"),f=r("fa73");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=/^col-/,g=function(){return{type:[Boolean,String,Number],default:!1}},O=function(){return{type:[String,Number],default:null}},j=function(e,t,r){var n=e;if(!Object(l["i"])(r)&&!1!==r)return t&&(n+="-".concat(t)),"col"!==e||""!==r&&!0!==r?(n+="-".concat(r),Object(f["b"])(n)):Object(f["b"])(n)},v=Object(o["a"])(j),h=Object(u["c"])(null),y=function(){var e=Object(i["b"])().filter(a["a"]),t=e.reduce((function(e,t){return t&&(e[t]=g()),e}),Object(u["c"])(null)),r=e.reduce((function(e,t){return e[Object(s["d"])(t,"offset")]=O(),e}),Object(u["c"])(null)),n=e.reduce((function(e,t){return e[Object(s["d"])(t,"order")]=O(),e}),Object(u["c"])(null));return h=Object(u["a"])(Object(u["c"])(null),{col:Object(u["l"])(t),offset:Object(u["l"])(r),order:Object(u["l"])(n)}),p(p(p(p({col:{type:Boolean,default:!1},cols:O()},t),{},{offset:O()},r),{},{order:O()},n),{},{alignSelf:{type:String,default:null,validator:function(e){return Object(c["a"])(["auto","start","end","center","baseline","stretch"],e)}},tag:{type:String,default:"div"}})},w={name:"BCol",functional:!0,get props(){return delete this.props,this.props=y()},render:function(e,t){var r,a=t.props,o=t.data,c=t.children,i=[];for(var l in h)for(var u=h[l],s=0;s<u.length;s++){var f=v(l,u[s].replace(l,""),a[u[s]]);f&&i.push(f)}var b=i.some((function(e){return m.test(e)}));return i.push((r={col:a.col||!b&&!a.cols},d(r,"col-".concat(a.cols),a.cols),d(r,"offset-".concat(a.offset),a.offset),d(r,"order-".concat(a.order),a.order),d(r,"align-self-".concat(a.alignSelf),a.alignSelf),r)),e(a.tag,Object(n["a"])(o,{class:i}),c)}}},ed21:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{md:"10"}},[r("spinner",{attrs:{loading:e.loading}},[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleEditUserData(t)}}},[r("div",{staticClass:"d-flex justify-content-between"},[r("div",[r("h1",{staticClass:"fs-3 font-weight-700"},[e._v("Settings & Account")]),r("p",{staticClass:"fs--1"},[e._v("Change your details and account settings")])]),r("router-link",{staticClass:"text-black-70",attrs:{to:"/profile"}},[r("font-awesome-icon",{staticClass:"fs-2",attrs:{icon:"arrow-left"}})],1)],1),r("section-header",{attrs:{"section-title":"Profile Picture"}}),r("b-row",{staticClass:"d-flex justify-content-center"},[r("b-col",{attrs:{sm:"6"}},[r("FileUploader",{attrs:{label:"Drop profile picture here...","file-name":"profilePicture"},model:{value:e.profilePicture,callback:function(t){e.profilePicture=t},expression:"profilePicture"}})],1)],1),r("section-header",{attrs:{"section-title":"Basic Info"}}),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"First Name"}},[r("b-form-input",{attrs:{id:"first-name",type:"text",placeholder:"Ex: Jhon",required:""},model:{value:e.formData.firstName,callback:function(t){e.$set(e.formData,"firstName",t)},expression:"formData.firstName"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Last Name"}},[r("b-form-input",{attrs:{id:"last-name",type:"text",placeholder:"Ex: Doe",required:""},model:{value:e.formData.sureName,callback:function(t){e.$set(e.formData,"sureName",t)},expression:"formData.sureName"}})],1)],1)],1),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Email"}},[r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Email",disabled:""},model:{value:e.formData.email,callback:function(t){e.$set(e.formData,"email",t)},expression:"formData.email"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Mobile"}},[r("b-form-input",{attrs:{id:"mobile",type:"text",placeholder:"Ex: 01741******"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1)],1)],1),r("b-form-group",{attrs:{label:"Current Address"}},[r("b-form-input",{attrs:{id:"current-address",type:"text"},model:{value:e.formData.currentAddress,callback:function(t){e.$set(e.formData,"currentAddress",t)},expression:"formData.currentAddress"}})],1),r("b-form-group",{attrs:{label:"Bio"}},[r("b-form-textarea",{model:{value:e.formData.bio,callback:function(t){e.$set(e.formData,"bio",t)},expression:"formData.bio"}})],1),r("section-header",{attrs:{"section-title":"Links & Profiles"}}),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Linkedin"}},[r("b-form-input",{attrs:{id:"linkedin",type:"url"},model:{value:e.formData.linkedin,callback:function(t){e.$set(e.formData,"linkedin",t)},expression:"formData.linkedin"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Github"}},[r("b-form-input",{attrs:{id:"github",type:"url"},model:{value:e.formData.github,callback:function(t){e.$set(e.formData,"github",t)},expression:"formData.github"}})],1)],1)],1),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Facebook"}},[r("b-form-input",{attrs:{id:"facebook",type:"url"},model:{value:e.formData.facebook,callback:function(t){e.$set(e.formData,"facebook",t)},expression:"formData.facebook"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Website"}},[r("b-form-input",{attrs:{id:"website",type:"url"},model:{value:e.formData.website,callback:function(t){e.$set(e.formData,"website",t)},expression:"formData.website"}})],1)],1)],1),r("section-header",{attrs:{"section-title":"Others"}}),r("b-form-row",[r("b-col",[r("b-form-group",{attrs:{label:"Blood Group"}},[r("b-form-input",{attrs:{id:"blood-group",type:"text"},model:{value:e.formData.bloodGroup,callback:function(t){e.$set(e.formData,"bloodGroup",t)},expression:"formData.bloodGroup"}})],1)],1),r("b-col",[r("b-form-group",{attrs:{label:"Gender"}},[r("b-form-select",{attrs:{options:[{value:"null",text:"Please choose you gender"},{value:"Male",text:"Male"},{value:"Female",text:"Female"},{value:"Other",text:"Other"}]},model:{value:e.formData.gender,callback:function(t){e.$set(e.formData,"gender",t)},expression:"formData.gender"}})],1)],1)],1),r("div",{staticClass:"my-4"},[r("b-button",{attrs:{type:"submit",variant:"outline-primary"}},[e._v("Submit")])],1)],1)],1)],1)],1)},a=[],o=r("5530"),c=(r("96cf"),r("1da1")),i=r("a217"),l=r("13bb"),u=r("b28b"),s=r("4797"),f=r("8226"),b=r("8361"),p=r("9c7d"),d=r("11de"),m=r("1947"),g=r("a15b"),O=r("3679"),j=r("3a75"),v=r("2f62"),h=r("67b3"),y=r("1220"),w={name:"EditUserInformation",components:{Spinner:y["a"],SectionHeader:i["a"],BFormRow:l["a"],BCol:u["a"],BFormInput:s["a"],BFormGroup:f["a"],BFormSelect:b["a"],BFormTextarea:p["a"],BForm:d["a"],BButton:m["a"],FileUploader:O["a"],BRow:g["a"]},data:function(){return{formData:{profilePicture:"",firstName:"",sureName:"",email:"",password:"",mobile:"",currentAddress:"",bio:"",linkedin:"",github:"",facebook:"",website:"",bloodGroup:"",gender:""},profilePicture:null,loading:!1}},methods:{fetchUserData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,j["a"].get("get-user-info/user/".concat(e.user.id));case 4:r=t.sent,e.formData=r.data[0].user,e.loading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),e.loading=!1,Object(h["a"])(e,!0,"Opps!","Something went wrong","danger","5000");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},handleUploadProfilePicture:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j["a"].post("update-profile-picture/user/".concat(e.user.id),e.profilePicture);case 3:return r=t.sent,t.abrupt("return",r.data.path);case 7:t.prev=7,t.t0=t["catch"](0),Object(h["a"])(e,!0,"Oppss !!","Something went wrong","danger");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},handleEditUserData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,t.prev=1,!e.profilePicture){t.next=6;break}return t.next=5,e.handleUploadProfilePicture();case 5:e.formData.profilePicture=t.sent;case 6:return t.next=8,j["a"].put("update-user-info/user/".concat(e.user.id),e.formData);case 8:return r=t.sent,t.next=11,r.data.message;case 11:n=t.sent,Object(h["a"])(e,!0,"success",n,"success","5000"),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](1),Object(h["a"])(e,!0,"Opps!","Something went wrong","danger","5000");case 18:e.loading=!1;case 19:case"end":return t.stop()}}),t,null,[[1,15]])})))()}},computed:Object(o["a"])({},Object(v["c"])({user:function(e){return e.auth.user}})),created:function(){this.fetchUserData()}},D=w,k=r("2877"),x=Object(k["a"])(D,n,a,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-112fb18d.13352188.js.map