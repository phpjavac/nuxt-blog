(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(t,e,n){},210:function(t,e,n){},242:function(t,e,n){"use strict";var r=n(209);n.n(r).a},243:function(t,e,n){"use strict";var r=n(210);n.n(r).a},259:function(t,e,n){"use strict";var r={props:{article:{type:Object}},methods:{next:function(){this.$store.commit("showSearchDialogState",!0)},getDate:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,dd=e.getDate(),c=e.getHours(),o=e.getMinutes(),l=e.getSeconds(),f=n+"-";return r<10&&(f+="0"),f+=r+"-",dd<10&&(f+="0"),f+=dd+" ",c<10&&(f+="0"),f+=c+":",o<10&&(f+="0"),f+=o+":",l<10&&(f+="0"),f+=l}}},c=(n(242),n(20)),o=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{"data-aos":"fade-up"}},[n("v-card",{staticClass:"post"},[n("v-card-title",{staticClass:"post-image"}),n("v-card-text",{staticClass:"post-content"},[n("v-flex",{staticClass:"post-content-title",attrs:{wrap:""}},[n("n-link",{attrs:{to:"/articles/"+t.article._id,exact:""},nativeOn:{click:function(e){return t.next(e)}}},[t._v(t._s(t.article.title))])],1),n("v-flex",{staticClass:"post-content-summary",attrs:{wrap:""}},[n("n-link",{attrs:{to:"/articles/"+t.article._id,exact:""},nativeOn:{click:function(e){return t.next(e)}}},[t._v(t._s(t.article.summary))])],1),n("v-flex",{staticClass:"post-content-tag",attrs:{wrap:""}},[t._l(t.article.tag,(function(e,r){return n("n-link",{key:r,attrs:{to:"/tags/"+e},nativeOn:{click:function(e){return t.next(e)}}},[t._v(t._s(e))])})),n("time",{staticClass:"time"},[t._v(t._s(t.getDate(+t.article.time)))])],2)],1)],1)],1)}),[],!1,null,"278dc9e3",null).exports,l={watch:{initData:function(){this.updata()}},props:{initData:{type:Array},loadingShow:{type:Boolean,default:!0}},components:{"article-list-item":o},data:function(){return{isHaveMore:!0,loading:!1,articles:[]}},methods:{updata:function(){this.articles=this.initData.map((function(t){return t})),this.articles.splice(3,0,{}),console.log(this.articles)},fetchNext:function(){}},created:function(){this.updata()}},f=(n(243),Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"post-list",attrs:{wrap:""}},[t._l(t.articles,(function(article,t){return n("v-flex",{key:t,staticClass:"post-list-item",attrs:{md12:"",wrap:""}},[article._id?n("article-list-item",{attrs:{article:article}}):n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3126519013117675","data-ad-slot":"2262849458","data-ad-format":"auto","data-full-width-responsive":"true"}})],1)})),n("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.isHaveMore,expression:"isHaveMore"}],staticClass:"post-list-action text-xs-center",attrs:{"my-3":"",wrap:""}},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.loadingShow,expression:"!loading&&loadingShow"}],staticClass:"fetch-button",on:{click:t.fetchNext}},[n("v-icon",{attrs:{color:"accent"}},[t._v("fas fa-plus")])],1),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.loading&&t.loadingShow,expression:"loading&&loadingShow"}],staticClass:"fetch-icon",attrs:{color:"accent",size:"48"}},[t._v("far fa-snowflake fa-spin")])],1)],2)}),[],!1,null,"2cdecc0e",null));e.a=f.exports},282:function(t,e,n){},404:function(t,e,n){"use strict";var r=n(282);n.n(r).a},716:function(t,e,n){"use strict";n.r(e);n(29);var r,c=n(4),o={components:{"article-list":n(259).a},data:function(){return{articles:[],totalCount:{}}},asyncData:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$axios.get("/api/article/list/tag",{params:{tag:e.params.tag}});case 2:return n=t.sent,data=n.data,t.abrupt("return",{articles:data.data.list});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),created:function(){}},l=(n(404),n(20)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticClass:"tag-list",attrs:{wrap:""}},[e("v-flex",{staticClass:"section-item",attrs:{tag:"section",md6:"",xs11:"",wrap:""}},[e("v-card",{attrs:{color:"transparent",flat:""}},[e("v-card-title",{staticClass:"section-item-title"},[e("v-flex",{attrs:{tag:"span"}},[e("v-icon",{staticClass:"mb-1",attrs:{color:"primary",size:"30",left:""}},[this._v("fas fa-feather-alt")]),this._v("《"+this._s(this.$route.params.tag)+"》的最新文章")],1)],1),e("article-list",{attrs:{"init-data":this.articles,"init-count":this.totalCount}})],1)],1)],1)}),[],!1,null,"66dea18a",null);e.default=component.exports}}]);