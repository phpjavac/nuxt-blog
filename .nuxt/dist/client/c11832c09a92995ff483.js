(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{318:function(e,t,r){},709:function(e,t,r){"use strict";var c=r(318);r.n(c).a},725:function(e,t,r){"use strict";r.r(t);r(23),r(17),r(57);var c=r(712),o=(r(409),r(412)),l={props:{list:{type:Object},state:{type:Number}},data:function(){return{headers:[{text:"一月",value:"January"},{text:"二月",value:"February"},{text:"三月",value:"March"},{text:"四月",value:"April"},{text:"五月",value:"May"},{text:"六月",value:"June"},{text:"七月",value:"July"},{text:"八月",value:"August"},{text:"九月",value:"September"},{text:"十月",value:"October"},{text:"十一月",value:"November"},{text:"十二月",value:"December"}],desserts:{}}},methods:{getVirtulData:function(e){for(var t=this,data=[],r=function(){var r=l[o],c=0;switch(r){case"January":c=1;break;case"February":c=2;break;case"March":c=3;break;case"April":c=4;break;case"May":c=5;break;case"June":c=6;break;case"July":c=7;break;case"August":c=8;break;case"September":c=9;break;case"October":c=10;break;case"November":c=11;break;case"December":c=12}if("_id"!==r){var n=0;data[c-1]=t.list[r].map((function(t,r){n+=t;var o=r+1;return o<10&&(r="0"+r),r+="",t=c<10?["".concat(e,"-0").concat(c,"-").concat(o),t]:["".concat(e,"-").concat(c,"-").concat(o),t]})),t.desserts[r]=n.toFixed(2)}},o=0,l=Object.keys(this.list);o<l.length;o++)r();return data.reduce((function(a,b){return[].concat(Object(c.a)(a),Object(c.a)(b))}),[])},initEcharts:function(){var e=this,data=this.getVirtulData(2019),option={backgroundColor:"#a0a0a0",title:{top:30,text:"2019年工作时长统计",subtext:"数据来源-JIRA",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{c0}工时"},legend:{top:"30",left:"100",data:["工时"],textStyle:{color:"#fff"}},calendar:[{top:100,left:"center",range:["2019-01-01","2019-06-30"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  1st",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"#323c48",borderWidth:1,borderColor:"#111"}}},{top:340,left:"center",range:["2019-07-01","2019-12-31"],splitLine:{show:!0,lineStyle:{color:"#000",width:4,type:"solid"}},yearLabel:{formatter:"{start}  2nd",textStyle:{color:"#fff"}},itemStyle:{normal:{color:"#323c48",borderWidth:1,borderColor:"#111"}}}],series:[{name:"工时",type:"scatter",coordinateSystem:"calendar",data:data,symbolSize:function(e){return e[1]/3},itemStyle:{normal:{color:"#e8676b"}}},{name:"工时",type:"scatter",coordinateSystem:"calendar",calendarIndex:1,data:data,symbolSize:function(e){return e[1]/3},itemStyle:{normal:{color:"#e8676b"}}}]};this.$nextTick((function(){o.init(e.$refs.echarts).setOption(option)}))}},created:function(){this.initEcharts(),console.log(this.desserts)}},n=(r(709),r(20)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",[r("div",{ref:"echarts",staticClass:"charts"}),e.state>5?r("div",[r("ul",{staticClass:"Statistics-list"},[e._l(e.headers,(function(t){return[r("div",{staticClass:"list"},[r("li",[e._v(" "+e._s(t.text))]),r("li",[e._v(" "+e._s(e.desserts[t.value]))])])]}))],2)]):e._e()])}),[],!1,null,"70577c33",null);t.default=component.exports}}]);