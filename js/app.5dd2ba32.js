(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b385a":"c15e1be9","chunk-2d20ebc2":"44199238","chunk-2d0e5bfc":"c84ff83a","chunk-2d21a564":"1204fcb6","chunk-2d22bd13":"ee505afa"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-site-constructor/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2a99":function(t,e,a){},"2fb4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("f5df1"),a("2fb4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseApp",{scopedSlots:t._u([{key:"sprite",fn:function(){return[a("TheSprite")]},proxy:!0},{key:"title",fn:function(){return[t._v(" Site Constructor ")]},proxy:!0},{key:"main",fn:function(){return[a("TheSelector"),a("TheLayout")]},proxy:!0}])})}),i=[],o=a("2f62"),s=(a("c740"),a("d81d"),a("a434"),a("5530")),c=(a("159b"),a("d4ec")),l=a("bee2"),u=(a("a630"),a("07ac"),a("3ca3"),a("99af"),function(){function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(c["a"])(this,t),this.elements={array:[],map:{}},a.forEach((function(t){e.elements.array.push(t.id),e.elements.map[t.id]=t}))}return Object(l["a"])(t,[{key:"setId",value:function(){this.id="".concat(this.type,"-").concat(this.idCount)}},{key:"idCount",get:function(){return this.__proto__.constructor._idCount||(this.__proto__.constructor._idCount=0),this.__proto__.constructor._idCount++,this.__proto__.constructor._idCount},set:function(t){this.__proto__.constructor._idCount=t}}],[{key:"resetIdCount",value:function(){this._idCount=0}}]),t}()),d=a("257e"),h=a("262e"),p=a("2caf"),f=a("ade3"),b=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this,t),Object(f["a"])(Object(d["a"])(r),"tag","header"),Object(f["a"])(Object(d["a"])(r),"type","header"),Object(f["a"])(Object(d["a"])(r),"placeholder","Header"),r.setId(),r}return a}(u),m=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this,t),Object(f["a"])(Object(d["a"])(r),"tag","div"),Object(f["a"])(Object(d["a"])(r),"type","content"),Object(f["a"])(Object(d["a"])(r),"placeholder","Content"),r.setId(),r}return a}(u),y=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this,t),Object(f["a"])(Object(d["a"])(r),"tag","footer"),Object(f["a"])(Object(d["a"])(r),"type","footer"),Object(f["a"])(Object(d["a"])(r),"placeholder","Footer"),r.setId(),r}return a}(u),g=function(){function t(){Object(c["a"])(this,t),this.creators={header:b,content:m,footer:y,abstract:u}}return Object(l["a"])(t,[{key:"create",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",e=arguments.length>1?arguments[1]:void 0;return new this.creators[t](e)}},{key:"resetIDCounts",value:function(){Array.from(Object.values(this.creators)).forEach((function(t){return t.resetIdCount()}))}}]),t}(),v=new g,O=function(){function t(e){var a=this;Object(c["a"])(this,t),this.map={},this.array=[],v.resetIDCounts(),e.forEach((function(t){if("string"===typeof t)a.addArea(t);else for(var e=0;e<t.amount;e++)a.addArea(t.type)}))}return Object(l["a"])(t,[{key:"setAreaGetter",value:function(t){this.map[t.id]=t}},{key:"addArea",value:function(t){var e=v.create(t);this.array.push(e.id),this.setAreaGetter(e)}}]),t}(),j=["header",{type:"content",amount:3},"footer"],_=Object(s["a"])({},new O(j)),C=a("e1bd"),w=function t(){Object(c["a"])(this,t),this.id=Object(C["a"])()},x=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this),Object(f["a"])(Object(d["a"])(r),"tag","h1"),Object(f["a"])(Object(d["a"])(r),"placeholder","Header 1"),r.content=null!==t&&void 0!==t?t:r.placeholder,r}return a}(w),k=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this),Object(f["a"])(Object(d["a"])(r),"tag","h2"),Object(f["a"])(Object(d["a"])(r),"placeholder","Header 2"),r.content=null!==t&&void 0!==t?t:r.placeholder,r}return a}(w),H=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this),Object(f["a"])(Object(d["a"])(r),"tag","h3"),Object(f["a"])(Object(d["a"])(r),"placeholder","Header 3"),r.content=null!==t&&void 0!==t?t:r.placeholder,r}return a}(w),V=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this),Object(f["a"])(Object(d["a"])(r),"tag","p"),Object(f["a"])(Object(d["a"])(r),"placeholder","Paragraph"),r.content=null!==t&&void 0!==t?t:r.placeholder,r}return a}(w),E=function(t){Object(h["a"])(a,t);var e=Object(p["a"])(a);function a(t){var r;return Object(c["a"])(this,a),r=e.call(this),Object(f["a"])(Object(d["a"])(r),"tag","img"),Object(f["a"])(Object(d["a"])(r),"placeholder",""),r.content=null!==t&&void 0!==t?t:r.placeholder,r}return a}(w),M=function(){function t(){Object(c["a"])(this,t),this.creators={h1:x,h2:k,h3:H,p:V,img:E,abstract:w}}return Object(l["a"])(t,[{key:"create",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"abstract",e=arguments.length>1?arguments[1]:void 0;return new this.creators[t](e)}}]),t}(),T=new M;T.create=T.create.bind(T);var I=T.create,S={namespaced:!0,state:_,getters:{areaById:function(t){return function(e){return t.map[e]}}},mutations:{addElement:function(t,e){var a=e.areaId,n=e.tag,i=e.content,o=I(n,i),s=o.id;t.map[a].elements.array.push(s),r["a"].set(t.map[a].elements.map,s,o)},updateElement:function(t,e){var a=e.areaId,n=e.elementId,i=e.content;r["a"].set(t.map[a].elements.map[n],"content",i)},deleteElement:function(t,e){var a=e.areaId,n=e.elementId,i=t.map[a].elements.array.findIndex((function(t){return t===n}));~i&&(r["a"].delete(t.map[a].elements.map,n),t.map[a].elements.array.splice(i,1))}}},L=[{label:"Landing",value:"landing"},{label:"Blog",value:"blog"},{label:"Shop",value:"shop"}],B=L[0].value,Z={inputs:L,value:B},A={namespaced:!0,state:Z,mutations:{setValue:function(t,e){r["a"].set(t,"value",e)}}};r["a"].use(o["a"]);var $=new o["a"].Store({modules:{areas:S,selector:A}}),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("div",{staticClass:"ally-hidden",attrs:{role:"presentation"}},[t._t("sprite")],2),a("div",{staticClass:"container"},[a("h1",{staticClass:"ally-hidden"},[t._t("title")],2),t._t("main")],2)])},N=[],q={name:"BaseApp"},W=q,G=a("2877"),D=Object(G["a"])(W,P,N,!1,null,null,null),F=D.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("symbol",{attrs:{id:"icon-landing",viewBox:"0 0 240 132",fill:"none"}},[a("rect",{attrs:{x:"0.3",y:"0.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"116.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"26.3",width:"239.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}})]),a("symbol",{attrs:{id:"icon-blog",viewBox:"0 0 240 132",fill:"none"}},[a("rect",{attrs:{x:"0.3",y:"0.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"116.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"26.394",width:"89.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"100.3",y:"26.3",width:"139.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}})]),a("symbol",{attrs:{id:"icon-shop",viewBox:"0 0 240 132",fill:"none"}},[a("rect",{attrs:{x:"0.3",y:"0.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"116.3",width:"239.4",height:"15.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"0.3",y:"26.3",width:"73.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"83.3",y:"26.3",width:"73.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}}),a("rect",{attrs:{x:"166.3",y:"26.3",width:"73.4",height:"79.4","stroke-width":"0.6","stroke-dasharray":"5 5"}})]),a("symbol",{attrs:{id:"icon-add-btn",viewBox:"0 0 40 40",fill:"none"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 20C0 8.96 8.96 0 20 0C31.04 0 40 8.96 40 20C40 31.04 31.04 40 20 40C8.96 40 0 31.04 0\n      20ZM22 22H30V18H22V9.99999H18V18H10V22H18V30H22V22Z",fill:"#80CCF0"}})]),a("symbol",{attrs:{id:"icon-delete-btn",viewBox:"0 0 24 24",fill:"none"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z",fill:"white"}}),a("path",{attrs:{d:"M19 4H19.2V3.8H19V4ZM15.5 4L15.3586 4.14142L15.4172 4.2H15.5V4ZM19 6V6.2H19.2V6H19ZM5 6H4.8V6.2H5V6ZM5 4V3.8H4.8V4H5ZM8.5 4V4.2H8.58284L8.64142 4.14142L8.5 4ZM9.5 3V2.8H9.41716L9.35858 2.85858L9.5 3ZM14.5 3L14.6414 2.85858L14.5828 2.8H14.5V3ZM6 7V6.8H5.8V7H6ZM18 7H18.2V6.8H18V7ZM19 3.8H15.5V4.2H19V3.8ZM19.2 6V4H18.8V6H19.2ZM5 6.2H19V5.8H5V6.2ZM4.8 4V6H5.2V4H4.8ZM8.5 3.8H5V4.2H8.5V3.8ZM9.35858 2.85858L8.35858 3.85858L8.64142 4.14142L9.64142 3.14142L9.35858 2.85858ZM14.5 2.8H9.5V3.2H14.5V2.8ZM15.6414 3.85858L14.6414 2.85858L14.3586 3.14142L15.3586 4.14142L15.6414 3.85858ZM5.8 19C5.8 20.2105 6.78954 21.2 8 21.2V20.8C7.01046 20.8 6.2 19.9895 6.2 19H5.8ZM5.8 7V19H6.2V7H5.8ZM18 6.8H6V7.2H18V6.8ZM18.2 19V7H17.8V19H18.2ZM16 21.2C17.2105 21.2 18.2 20.2105 18.2 19H17.8C17.8 19.9895 16.9895 20.8 16 20.8V21.2ZM8 21.2H16V20.8H8V21.2Z",fill:"white"}})]),a("symbol",{attrs:{id:"icon-add-img-btn",viewBox:"0 0 48 48"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2V8H0V12H6V18H10V12H16V8H10V2H6ZM12 14V20H6V40C6 42.2 7.8 44 10 44H42C44.2 44 46 42.2 46\n        40V16C46 13.8 44.2 12 42 12H35.66L32 8H18V14H12ZM26 38C31.52 38 36 33.52 36 28C36 22.48 31.52 18\n        26 18C20.48 18 16 22.48 16 28C16 33.52 20.48 38 26 38ZM26 34C22.68 34 20 31.32 20 28C20 24.68 22.68\n        22 26 22C29.32 22 32 24.68 32 28C32 31.32 29.32 34 26 34Z"}})]),a("symbol",{attrs:{id:"loading-placeholder",viewBox:"0 0 100 100"}},[a("rect",{staticClass:"bk",attrs:{x:"0",y:"0",width:"100",height:"100",fill:"none"}}),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(0 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(36 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.1s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(72 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.2s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(108 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.3s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(144 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.4s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(180 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.5s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(216 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.6s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(252 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.7s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(288 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.8s",repeatCount:"indefinite"}})]),a("rect",{attrs:{x:"46.5",y:"40",width:"7",height:"20",rx:"5",ry:"5",fill:"rgba(44,44,44,0.6)",transform:"rotate(324 50 50) translate(0 -30)"}},[a("animate",{attrs:{attributeName:"opacity",from:"1",to:"0",dur:"1s",begin:"0.9s",repeatCount:"indefinite"}})])]),a("symbol",{attrs:{id:"error-placeholder",viewBox:"0 0 64 64"}},[a("defs",[a("linearGradient",{attrs:{id:"0",y2:"161.29",x2:"0",y1:"218.22",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{"stop-color":"#c52828"}}),a("stop",{attrs:{offset:"1","stop-color":"#ff5454"}})],1)],1),a("g",{attrs:{transform:"matrix(.92857 0 0 .92857-666.94-144.37)"}},[a("circle",{attrs:{r:"28",cy:"189.93",cx:"752.7",fill:"url(#0)"}}),a("g",{attrs:{fill:"#fff","fill-opacity":".851"}},[a("path",{attrs:{d:"m739.54 180.23c0-2.166 1.756-3.922 3.922-3.922 2.165 0 3.922 1.756 3.922 3.922 0 2.167-1.756 3.923-3.922 3.923-2.166 0-3.922-1.756-3.922-3.923m17.784 0c0-2.166 1.758-3.922 3.923-3.922 2.165 0 3.922 1.756 3.922 3.922 0 2.167-1.756 3.923-3.922 3.923-2.166 0-3.923-1.756-3.923-3.923"}}),a("path",{attrs:{d:"m766.89 200.51c-2.431-5.621-8.123-9.253-14.502-9.253-6.516 0-12.242 3.65-14.588 9.3-.402.967.056 2.078 1.025 2.48.238.097.485.144.727.144.744 0 1.45-.44 1.753-1.17 1.756-4.229 6.107-6.96 11.08-6.96 4.864 0 9.189 2.733 11.02 6.965.416.962 1.533 1.405 2.495.989.961-.417 1.405-1.533.989-2.495"}})])])])])},U=[],z={name:"TheSprite"},K=z,Q=Object(G["a"])(K,J,U,!1,null,null,null),R=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseLayout",{attrs:{base:t.base,type:t.activeLayout}},t._l(t.areas,(function(e){return a("WrapperArea",{key:e,class:[t.areaClass,t.areaModClass(e)],attrs:{"area-id":e,base:t.base}})})),1)},Y=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.classList},[t._t("default")],2)},et=[],at={name:"BaseLayout",props:{base:{type:String,required:!0},type:{type:String,required:!0}},computed:{typeClass:function(){return"".concat(this.base,"--").concat(this.type)},classList:function(){return[this.base,this.typeClass]}}},rt=at,nt=Object(G["a"])(rt,tt,et,!1,null,null,null),it=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseArea",{attrs:{tag:t.area.tag,type:t.area.type,"is-empty":t.isAreaEmpty},scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" "+t._s(t.area.placeholder)+" ")]},proxy:!0},{key:"elements",fn:function(){return t._l(t.elements,(function(e){return a("WrapperElement",{key:e,attrs:{"element-id":e,"area-id":t.areaId}})}))},proxy:!0},{key:"add-btn",fn:function(){return[a("BaseAddBtn",{on:{click:function(e){t.chooseElemMode=!0}}})]},proxy:!0},{key:"choose-element",fn:function(){return[t.chooseElemMode?a("WrapperChooseElement",{on:{"button-click":function(e){return t.addElement({tag:e,areaId:t.areaId})},destroy:function(e){t.chooseElemMode=!1}}}):t._e()]},proxy:!0}])})},st=[],ct=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"div",class:t.blockClassList},[a("transition",{attrs:{name:"fade"}},[t.isEmpty?a("div",{staticClass:"placeholder placeholder--area"},[t._t("placeholder")],2):t._e()]),a("TransitionElements",{staticClass:"elements-list",class:t.wrapperClassList},[t._t("elements")],2),t._t("add-btn"),a("transition",{attrs:{name:"fade"}},[t._t("choose-element")],2)],2)}),lt=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition-group",{attrs:{appear:"",name:"elements-list",tag:"div"},on:{"before-enter":t.beforeTransition,enter:t.transition,"after-enter":t.afterTransition,"before-leave":t.beforeTransition,leave:t.transition,"after-leave":t.afterTransition}},[t._t("default")],2)},dt=[],ht={name:"TransitionElements",created:function(){this.postAfterTransition=this.postAfterTransition.bind(this)},methods:{beforeTransition:function(){this.$el.children.forEach((function(t){return t.style.height="".concat(t.scrollHeight,"px")})),this.setScrollHeight()},transition:function(){this.setScrollHeight()},afterTransition:function(){var t=this;this.setScrollHeight(),setTimeout((function(){return t.postAfterTransition()}),1e3)},postAfterTransition:function(){this.$el.style.height="",this.$el.children.forEach((function(t){return t.style.height=""}))},setScrollHeight:function(){this.$el.style.maxHeight=0,this.$el.style.height="".concat(this.$el.scrollHeight,"px"),this.$el.style.maxHeight=""}}},pt=ht,ft=(a("75f6"),Object(G["a"])(pt,ut,dt,!1,null,null,null)),bt=ft.exports,mt={name:"BaseArea",components:{TransitionElements:bt},props:{tag:{type:String,default:"div"},type:{type:String,default:"content"},isEmpty:{type:Boolean,default:!0}},data:function(){return{base:"area"}},computed:{blockTypeClass:function(){return"".concat(this.base,"--").concat(this.type)},blockEmptyClass:function(){return"".concat(this.base,"--empty")},blockClassList:function(){return[this.base,this.blockTypeClass,Object(f["a"])({},this.blockEmptyClass,this.isEmpty)]},wrapperClass:function(){return"".concat(this.base,"__elements-wrapper")},wrapperTypeClass:function(){return"".concat(this.base,"__elements-wrapper--").concat(this.type)},wrapperClassList:function(){return[this.wrapperClass,this.wrapperTypeClass]}}},yt=mt,gt=Object(G["a"])(yt,ct,lt,!1,null,null,null),vt=gt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"add-btn",attrs:{type:"button","aria-label":"Add element"},on:{click:function(e){return t.$emit("click")}}},[a("svg",{attrs:{width:"40",height:"40"}},[a("use",{attrs:{"xlink:href":"#icon-add-btn"}})])])},jt=[],_t={name:"BaseAddBtn"},Ct=_t,wt=Object(G["a"])(Ct,Ot,jt,!1,null,null,null),xt=wt.exports,kt={name:"WrapperArea",components:{BaseArea:vt,BaseAddBtn:xt,WrapperElement:function(){return a.e("chunk-2d0b385a").then(a.bind(null,"2974"))},WrapperChooseElement:function(){return a.e("chunk-2d20ebc2").then(a.bind(null,"b141"))}},props:{areaId:{type:String,required:!0}},data:function(){return{chooseElemMode:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(o["b"])("areas",["areaById"])),{},{area:function(){return this.areaById(this.areaId)},elements:function(){return this.area.elements.array},isAreaEmpty:function(){return 0===this.elements.length}}),methods:Object(s["a"])({},Object(o["c"])("areas",["addElement"]))},Ht=kt,Vt=Object(G["a"])(Ht,ot,st,!1,null,null,null),Et=Vt.exports,Mt={name:"TheLayout",components:{BaseLayout:it,WrapperArea:Et},data:function(){return{base:"layout"}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(o["d"])("selector",{activeLayout:function(t){return t.value}})),Object(o["d"])("areas",{areas:function(t){return t.array}})),{},{areaClass:function(){return"".concat(this.base,"__area")}}),methods:{areaModClass:function(t){return"".concat(this.areaClass,"--").concat(t)}}},Tt=Mt,It=Object(G["a"])(Tt,X,Y,!1,null,null,null),St=It.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BaseSelector",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Choose layout type ")]},proxy:!0},{key:"tabs",fn:function(){return t._l(t.inputs,(function(e){return a("BaseSelectorTab",{key:e.value,attrs:{value:e.value,label:e.label,checked:e.value===t.value},on:{click:function(a){return t.setValue(e.value)}}})}))},proxy:!0}])})},Bt=[],Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"grid-select"},[a("h2",{staticClass:"grid-select__header"},[t._t("title")],2),a("div",{staticClass:"grid-select__row"},[t._t("tabs")],2)])},At=[],$t={name:"BaseSelector"},Pt=$t,Nt=Object(G["a"])(Pt,Zt,At,!1,null,null,null),qt=Nt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-select__btn-wrapper"},[a("input",{staticClass:"grid-select__radio ally-hidden",attrs:{id:t.inputId,type:"radio",name:"grid"},domProps:{value:t.value,checked:t.checked},on:{click:function(e){return t.$emit("click")}}}),a("label",{staticClass:"grid-select__btn",attrs:{for:t.inputId}},[a("span",[t._v(t._s(t.label))]),a("svg",{attrs:{width:"240",height:"132"}},[a("use",{attrs:{href:t.iconId}})])])])},Gt=[],Dt={name:"BaseSelectorTab",props:{value:{type:String,required:!0},checked:{type:Boolean,required:!0},label:{type:String,required:!0}},computed:{iconId:function(){return"#icon-".concat(this.value)},inputId:function(){return"grid-".concat(this.value)}}},Ft=Dt,Jt=Object(G["a"])(Ft,Wt,Gt,!1,null,null,null),Ut=Jt.exports,zt=a("2ef0"),Kt=a.n(zt),Qt={name:"TheSelector",components:{BaseSelector:qt,BaseSelectorTab:Ut},data:function(){return{debounceTime:300}},computed:Object(s["a"])({},Object(o["d"])("selector",["inputs","value"])),created:function(){this.setValue=Kt.a.debounce(this.setValue,this.debounceTime)},methods:Object(s["a"])({},Object(o["c"])("selector",["setValue"]))},Rt=Qt,Xt=Object(G["a"])(Rt,Lt,Bt,!1,null,null,null),Yt=Xt.exports,te={created:function(){this.setValue("blog"),this.addElement({areaId:"header-1",tag:"p",content:""}),this.addElement({areaId:"header-1",tag:"h1",content:"Site Constructor"}),this.addElement({areaId:"header-1",tag:"h2",content:"Create landing, blog or shop you want"}),this.addElement({areaId:"content-1",tag:"img",content:"https://picsum.photos/1500/1000"}),this.addElement({areaId:"content-2",tag:"img",content:"https://picsum.photos/1000/1000"}),this.addElement({areaId:"content-3",tag:"img",content:"https://picsum.photos/500/1000"}),this.addElement({areaId:"footer-1",tag:"p",content:""}),this.addElement({areaId:"footer-1",tag:"p",content:""}),this.addElement({areaId:"footer-1",tag:"p",content:""}),this.addElement({areaId:"footer-1",tag:"p",content:"Copyright © Eugene Skrobov"})},methods:Object(s["a"])(Object(s["a"])({},Object(o["c"])("selector",["setValue"])),Object(o["c"])("areas",["addElement"]))},ee={name:"TheApp",components:{BaseApp:F,TheSprite:R,TheLayout:St,TheSelector:Yt},mixins:[te],store:$},ae=ee,re=Object(G["a"])(ae,n,i,!1,null,null,null),ne=re.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(ne)}}).$mount("#app")},"75f6":function(t,e,a){"use strict";a("2a99")}});
//# sourceMappingURL=app.5dd2ba32.js.map