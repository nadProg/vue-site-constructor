(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5bfc"],{"968a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseImageContent",{attrs:{content:e.content,"loading-mode":e.loadingMode,"error-mode":e.errorMode,"uploading-mode":e.uploadingMode},on:{"upload-success":e.imgSuccessLoaded,"upload-error":e.imgErrorLoaded,"toggle-uploading-mode":function(t){e.uploadingMode=!e.uploadingMode}},scopedSlots:e._u([{key:"image-upload",fn:function(){return[e.uploadingMode?n("BaseImageUpload",{attrs:{"input-url-value":e.inputUrlValue,"upload-btn-disabled":e.uploadBtnDisabled,"restore-btn-disabled":e.restoreBtnDisabled,"reset-btn-disabled":e.resetBtnDisabled},on:{change:function(t){e.inputUrlValue=t},upload:function(t){return e.updateContent(e.inputUrlValue)},restore:function(t){e.inputUrlValue=e.content},reset:function(t){return e.updateContent("")},"will-destroy":function(t){e.uploadingMode=!1}}}):e._e()]},proxy:!0}])})},r=[],a=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"image-content"},[n("button",{staticClass:"add-img-btn",attrs:{type:"button","aria-label":"Add image source"},on:{pointerdown:function(t){return e.$emit("toggle-uploading-mode")}}},[n("svg",{attrs:{width:"48",height:"48",xmlns:"http://www.w3.org/2000/svg"}},[n("use",{attrs:{href:"#icon-add-img-btn"}})])]),n("div",{staticClass:"placeholder placeholder--image"},[n("transition",{attrs:{name:"fade"}},[e.loadingMode?n("svg",[n("use",{attrs:{href:"#loading-placeholder"}})]):e.errorMode?n("svg",[n("use",{attrs:{href:"#error-placeholder"}})]):e._e()])],1),n("transition",{attrs:{name:"fade"}},[e.content?n("img",{directives:[{name:"show",rawName:"v-show",value:!e.loadingMode&&!e.errorMode,expression:"!loadingMode && !errorMode"}],attrs:{src:e.content,alt:""},on:{load:function(t){return e.$emit("upload-success")},error:function(t){return e.$emit("upload-error")}}}):e._e()]),n("transition",{attrs:{name:"fade"}},[e._t("image-upload")],2)],1)}),d=[],i={name:"BaseImageContent",props:{content:{type:String,required:!0},loadingMode:{type:Boolean,default:!1},errorMode:{type:Boolean,default:!1},uploadingMode:{type:Boolean,default:!1}}},l=i,u=n("2877"),s=Object(u["a"])(l,a,d,!1,null,null,null),c=s.exports,p={name:"WrapperImageContent",components:{BaseImageContent:c,BaseImageUpload:function(){return n.e("chunk-2d22bd13").then(n.bind(null,"f11c"))}},props:{content:{type:String,required:!0}},data:function(){return{inputUrlValue:"",loadingMode:!1,errorMode:!1,uploadingMode:!1}},computed:{uploadBtnDisabled:function(){return!this.inputUrlValue||this.inputUrlValue===this.content},restoreBtnDisabled:function(){return this.inputUrlValue===this.content},resetBtnDisabled:function(){return!this.inputUrlValue}},watch:{content:{handler:function(e){this.inputUrlValue=e,this.loadingMode=!!e},immediate:!0}},methods:{updateContent:function(e){this.$emit("update",e),this.errorMode=!1,this.loadingMode=!1,this.uploadingMode=!1},imgSuccessLoaded:function(){this.loadingMode=!1,this.errorMode=!1},imgErrorLoaded:function(){this.loadingMode=!1,this.errorMode=!0}}},g=p,m=Object(u["a"])(g,o,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0e5bfc.c84ff83a.js.map