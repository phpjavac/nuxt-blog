(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{281:function(t,e,n){},403:function(t,e,n){"use strict";var r=n(281);n.n(r).a},714:function(t,e,n){"use strict";n.r(e);n(29);var r,c=n(4),o={data:function(){return{content:{},title:""}},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$axios.get("/api/article",{params:{id:e.params.id}});case 2:return n=t.sent,data=n.data,t.abrupt("return",{content:data.data.content,title:data.data.title});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),created:function(){}},l=(n(403),n(20)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex article-home md6 xs11 wrap"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),e("div",{staticClass:"markdown-body",domProps:{innerHTML:this._s(this.content)}})])}),[],!1,null,null,null);e.default=component.exports}}]);