(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20ebc2"],{b141:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseChooseElement",{attrs:{buttons:t.buttons},on:{"button-click":function(e){return t.$emit("button-click",e)}}})},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"choose-elem"},t._l(t.buttons,(function(e){return n("button",{key:e.tag,staticClass:"choose-elem__btn",attrs:{type:"button"},on:{click:function(n){return t.$emit("button-click",e.tag)}}},[t._v(" "+t._s(e.content)+" ")])})),0)},c=[],i={name:"BaseChooseElement",props:{buttons:{type:Array,required:!0}}},a=i,u=n("2877"),l=Object(u["a"])(a,r,c,!1,null,null,null),d=l.exports,h={name:"WrapperChooseElement",components:{BaseChooseElement:d},data:function(){return{buttons:[{tag:"h1",content:"Header H1"},{tag:"h2",content:"Header H2"},{tag:"h3",content:"Header H3"},{tag:"p",content:"Paragraph"},{tag:"img",content:"Image"}]}},mounted:function(){var t=this;this.destroy=this.destroy.bind(this),setTimeout((function(){return window.addEventListener("click",t.destroy)}))},beforeDestroy:function(){window.removeEventListener("click",this.destroy)},methods:{destroy:function(){this.$emit("destroy")}}},m=h,b=Object(u["a"])(m,o,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d20ebc2.44199238.js.map