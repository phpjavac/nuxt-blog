exports.ids=[3],exports.modules={38:function(t,e){},50:function(t,e,n){"use strict";n.r(e);var r=n(38),c=n.n(r);for(var d in r)"default"!==d&&function(t){n.d(e,t,function(){return r[t]})}(d);e.default=c.a},63:function(t,e,n){"use strict";n.r(e);var r={data:()=>({content:{},title:"",tag:""}),head(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.title},{hid:"keywords",name:"keywords",content:this.tag}]}},async asyncData(t){let{data:data}=await t.app.$axios.get("/api/article",{params:{id:t.params.id}});return{content:data.data.content,title:data.data.title,tag:data.data.tag.join()}},created(){}},c=n(1);var component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"flex article-home md6 xs11 wrap"},[this._ssrNode('<h1 class="title">'+this._ssrEscape(this._s(this.title))+'</h1><div class="markdown-body">'+this._s(this.content)+"</div>")])},[],!1,function(t){var e=n(50);e.__inject__&&e.__inject__(t)},null,"1f9548d6");e.default=component.exports}};
//# sourceMappingURL=ca954092c34b0de3a76f.js.map