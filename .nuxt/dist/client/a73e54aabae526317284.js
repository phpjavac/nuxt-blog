(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(t,e,r){},709:function(t,e,r){"use strict";var n=r(294);r.n(n).a},717:function(t,e,r){"use strict";r.r(e);var n={props:{pages:{type:Array},didScroll:{type:Boolean}},data:function(){return{show:!1}},computed:{showNavDrawer:function(){return this.$store.state.showNavDrawer}},watch:{showNavDrawer:function(){this.show=!this.show}}},o=(r(709),r(19)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{temporary:"",fixed:"",app:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("v-list",[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",[r("img",{attrs:{src:"/logo.png"}})]),r("v-list-tile-content",[r("v-list-tile-title",[t._v("绎紫洛英")])],1)],1)],1),r("v-list",{attrs:{dense:""}},[r("v-divider"),t._l(t.pages,function(e,n){return r("v-list-tile",{key:n,attrs:{to:e.path,"active-class":"",nuxt:"",exact:""}},[r("v-list-tile-action",[r("v-icon",{attrs:{color:"primary",small:""}},[t._v(t._s(e.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[t._v(t._s(e.text))])],1)],1)})],2)],1)},[],!1,null,"aad5fef8",null);e.default=component.exports}}]);