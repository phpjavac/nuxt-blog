(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{280:function(t,e,n){},402:function(t,e,n){"use strict";var r=n(280);n.n(r).a},715:function(t,e,n){"use strict";n.r(e);n(29);var r,c=n(4),l={asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$axios.get("/api/article/taglist");case 2:return n=t.sent,data=n.data,t.abrupt("return",{tagsList:data.list});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),data:function(){return{tagsList:[]}}},o=(n(402),n(20)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"section-item",attrs:{tag:"section",md6:"",xs11:"",wrap:""}},[n("v-card",{staticClass:"tag-card"},[n("v-flex",{staticClass:"tag-card-title",attrs:{wrap:""}},[n("v-icon",{attrs:{size:"20"}},[t._v("fas fa-tags")]),t._v("文章标签")],1),n("v-flex",{staticClass:"tag-card-content",attrs:{warp:""}},t._l(t.tagsList,(function(e,r){return n("v-badge",{key:r,attrs:{color:"accent lighten-1"}},[[n("span",[t._v(t._s(e.value))])],n("v-chip",{staticClass:"tag-label elevation-3",attrs:{label:""}},[n("n-link",{attrs:{to:"tags/"+e.name,exact:""}},[t._v(t._s(e.name))])],1)],2)})),1)],1),n("v-card")],1)}),[],!1,null,"5dc87ec3",null);e.default=component.exports}}]);