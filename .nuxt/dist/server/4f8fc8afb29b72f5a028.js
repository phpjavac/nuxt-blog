exports.ids=[2],exports.modules={36:function(t,e){},47:function(t,e,n){"use strict";n.r(e);var r=n(36),c=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=c.a},59:function(t,e,n){"use strict";n.r(e);var r=n(25),c=n.n(r),l={data:()=>({content:{},title:""}),async asyncData(t){let{data:data}=await c.a.get("http://localhost:3003/api/article",{params:{id:t.params.id}});return{content:data.data.content,title:data.data.title}},created(){}},o=n(1);var component=Object(o.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex article-home md6 xs11 wrap"},[this._ssrNode('<h1 class="title">'+this._ssrEscape(this._s(this.title))+'</h1><div class="markdown-body">'+this._s(this.content)+"</div>")])},[],!1,function(t){var e=n(47);e.__inject__&&e.__inject__(t)},null,"406f7975");e.default=component.exports}};
//# sourceMappingURL=4f8fc8afb29b72f5a028.js.map