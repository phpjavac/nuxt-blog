exports.ids=[11],exports.modules={43:function(e,t){},54:function(e,t,r){"use strict";r.r(t);var l=r(43),o=r.n(l);for(var c in l)"default"!==c&&function(e){r.d(t,e,(function(){return l[e]}))}(c);t.default=o.a},69:function(e,t,r){"use strict";r.r(t);var l=r(29),o={props:{list:{type:Object},state:{type:Number}},data:()=>({headers:[{text:"一月",value:"January"},{text:"二月",value:"February"},{text:"三月",value:"March"},{text:"四月",value:"April"},{text:"五月",value:"May"},{text:"六月",value:"June"},{text:"七月",value:"July"},{text:"八月",value:"August"},{text:"九月",value:"September"},{text:"十月",value:"October"},{text:"十一月",value:"November"},{text:"十二月",value:"December"}],desserts:{}}),methods:{getVirtulData(e){const data=[];for(let t of Object.keys(this.list)){let r=0;switch(t){case"January":r=1;break;case"February":r=2;break;case"March":r=3;break;case"April":r=4;break;case"May":r=5;break;case"June":r=6;break;case"July":r=7;break;case"August":r=8;break;case"September":r=9;break;case"October":r=10;break;case"November":r=11;break;case"December":r=12}if("_id"!==t){console.log(this.desserts[0]);let l=0;data[r-1]=this.list[t].map((t,o)=>{l+=t;let c=o+1;return c<10&&(o="0"+o),o+="",t=r<10?[`${e}-0${r}-${c}`,t]:[`${e}-${r}-${c}`,t]}),this.desserts[t]=l.toFixed(2)}}return data.reduce((a,b)=>[...a,...b],[])},initEcharts(){const data=this.getVirtulData(2019),option={backgroundColor:"#a0a0a0",title:{top:30,text:"2019年工作时长统计",subtext:"数据来源-JIRA",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{c0}工时"},legend:{top:"30",left:"100",data:["工时"],textStyle:{color:"#fff"}},calendar:[{top:100,left:"center",range:["2019-01-01","2019-06-30"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  1st",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"#323c48",borderWidth:1,borderColor:"#111"}}},{top:340,left:"center",range:["2019-07-01","2019-12-31"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  2nd",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"#323c48",borderWidth:1,borderColor:"#111"}}}],series:[{name:"工时",type:"scatter",coordinateSystem:"calendar",data:data,symbolSize:function(e){return e[1]/3},itemStyle:{normal:{color:"#e8676b"}}},{name:"工时",type:"scatter",coordinateSystem:"calendar",calendarIndex:1,data:data,symbolSize:function(e){return e[1]/3},itemStyle:{normal:{color:"#e8676b"}}}]};this.$nextTick(()=>{l.init(this.$refs.echarts).setOption(option)})}},created(){this.initEcharts(),console.log(this.desserts)}},c=r(1);var component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("figure",[e._ssrNode('<div class="charts" data-v-b35f8930></div>'+(e.state>5?'<div data-v-b35f8930><ul class="Statistics-list" data-v-b35f8930>'+e._ssrList(e.headers,(function(t){return'<div class="list" data-v-b35f8930><li data-v-b35f8930>'+e._ssrEscape(" "+e._s(t.text))+"</li><li data-v-b35f8930>"+e._ssrEscape(" "+e._s(e.desserts[t.value]))+"</li></div>"}))+"</ul></div>":"\x3c!----\x3e"))])}),[],!1,(function(e){var t=r(54);t.__inject__&&t.__inject__(e)}),"b35f8930","70457260");t.default=component.exports}};
//# sourceMappingURL=ccff3354bc7d34f8f6a3.js.map