(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf9243a0"],{"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var l in o){var s=n[l],c=s&&s.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),l=i("forEach");t.exports=a&&l?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1cf5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"xiguaPage"}},[r("el-row",{staticClass:"row-bg",staticStyle:{top:"10%"},attrs:{type:"flex",justify:"center",gutter:10}},[r("el-form",{ref:"formInline",staticClass:"demo-ruleForm",attrs:{inline:!0,model:t.formInline,rules:t.rules}},[r("el-form-item",{attrs:{prop:"vedioUrl"}},[r("el-input",{attrs:{placeholder:"请输入视频链接"},model:{value:t.formInline.vedioUrl,callback:function(e){t.$set(t.formInline,"vedioUrl",e)},expression:"formInline.vedioUrl"}},[r("template",{slot:"prepend"},[t._v("Http://")])],2)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){return t.getVedioPlayUrl("formInline")}}},[t._v("提交")])],1)],1)],1),r("el-row",{staticClass:"row-bg",staticStyle:{top:"20%"},attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:18}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.commitHistory.filter((function(e){return!t.search||e.title.toLowerCase().includes(t.search.toLowerCase())})),"default-sort":{prop:"createDate",order:"descending"}}},[r("el-table-column",{attrs:{label:"Date",prop:"createDate",sortable:""}}),r("el-table-column",{attrs:{label:"Title",prop:"title"}}),r("el-table-column",{attrs:{align:"right",prop:"vedioUrlList"},scopedSlots:t._u([{key:"header",fn:function(e){return[r("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return t._l(e.row.playUrl,(function(e,n){return r("el-button",{key:n,attrs:{size:"mini",type:"success"}},[r("el-link",{attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer",download:"1.mp4"}},[t._v(t._s(e.definition))])],1)}))}}])})],1)],1)],1)],1)},o=[],i=(r("4160"),r("159b"),{name:"Xigua",components:{},data:function(){return{loading:!1,commitHistory:[],search:"",formInline:{vedioUrl:""},rules:{vedioUrl:[{required:!0,message:"请输入视频链接",trigger:"blur"},{type:"url",message:"非法链接"}]}}},methods:{getCommitHistory:function(){var t=this;this.$http({url:"/tool/xigua/commitHistory",showMessage:!1}).then((function(e){t.commitHistory=e}))},getVedioPlayUrl:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return!1;e.loading=!0,e.$http({url:"/tool/xigua/downloadUrl",method:"post",params:{url:e.formInline.vedioUrl},successmMessage:"提交成功"}).then((function(t){e.getCommitHistory(),e.loading=!1,e.formInline.vedioUrl=""}))}))},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t){console.log(t)},downloadVedio:function(t){console.log(t)}},mounted:function(){this.getCommitHistory()},filters:{numFilter:function(t,e){return e}},computed:{totalCount:function(){var t=0;return this.commitHistory.forEach((function(e,r){t+=e.count})),t}}}),a=i,l=(r("2f52"),r("2877")),s=Object(l["a"])(a,n,o,!1,null,null,null);e["default"]=s.exports},"2f52":function(t,e,r){"use strict";var n=r("61be"),o=r.n(n);o.a},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"61be":function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,l={},s=function(t){throw t};t.exports=function(t,e){if(i(l,t))return l[t];e||(e={});var r=[][t],c=!!i(e,"ACCESSORS")&&e.ACCESSORS,u=i(e,0)?e[0]:s,f=i(e,1)?e[1]:void 0;return l[t]=!!r&&!o((function(){if(c&&!n)return!0;var t={length:-1};c?a(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,u,f)}))}},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),l=r("65f0"),s=[].push,c=function(t){var e=1==t,r=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f;return function(m,p,h,v){for(var g,y,b=i(m),L=o(b),S=n(p,h,3),w=a(L.length),C=0,x=v||l,E=e?x(m,w):r?x(m,0):void 0;w>C;C++)if((d||C in L)&&(g=L[C],y=S(g,C,b),t))if(e)E[C]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return C;case 2:s.call(E,g)}else if(u)return!1;return f?-1:c||u?u:E}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-bf9243a0.0705ace4.js.map