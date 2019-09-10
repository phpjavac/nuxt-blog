<template lang="pug">
figure
    div(ref="echarts").charts
    div(v-if="state>5")
      ul.Statistics-list
        template(v-for="(item) of headers")
          div.list
            li  {{item.text}}
            li  {{desserts[item.value]}}
</template>
<script>
// 引入 echarts 主模块。
var echarts = require("echarts");
import axios from "axios";
export default {
  props: {
    list: {
      type: Object
    },
    state: {
      type: Number
    }
  },
  data() {
    return {
      headers: [
        { text: "一月", value: "January" },
        { text: "二月", value: "February" },
        { text: "三月", value: "March" },
        { text: "四月", value: "April" },
        { text: "五月", value: "May" },
        { text: "六月", value: "June" },
        { text: "七月", value: "July" },
        { text: "八月", value: "August" },
        { text: "九月", value: "September" },
        { text: "十月", value: "October" },
        { text: "十一月", value: "November" },
        { text: "十二月", value: "December" }
      ],
      desserts: {}
    };
  },
  methods: {
    getVirtulData(year) {
      const data = [];

      for (let item of Object.keys(this.list)) {
        // console.log(this.list[item])
        let index = 0;
        switch (item) {
          case "January":
            index = 1;
            break;
          case "February":
            index = 2;
            break;
          case "March":
            index = 3;
            break;
          case "April":
            index = 4;
            break;
          case "May":
            index = 5;
            break;
          case "June":
            index = 6;
            break;
          case "July":
            index = 7;
            break;
          case "August":
            index = 8;
            break;
          case "September":
            index = 9;
            break;
          case "October":
            index = 10;
            break;
          case "November":
            index = 11;
            break;
          case "December":
            index = 12;
            break;
          default:
            break;
        }
        if (item !== "_id") {
          console.log(this.desserts[0]);
          let num = 0;
          data[index - 1] = this.list[item].map((ele, idx) => {
            num += ele;
            let idx1 = idx + 1;
            if (idx1 < 10) {
              idx = "0" + idx;
            }
            idx = idx + "";

            if (index < 10) {
              ele = [`${year}-0${index}-${idx1}`, ele];
            } else {
              ele = [`${year}-${index}-${idx1}`, ele];
            }
            return ele;
          });
          this.desserts[item] = num.toFixed(2);
        }
      }

      return data.reduce((a, b) => [...a, ...b], []);
    },

    initEcharts() {
      const data = this.getVirtulData(2019);

      const option = {
        backgroundColor: "#a0a0a0",

        title: {
          top: 30,
          text: "2019年工作时长统计",
          subtext: "数据来源-JIRA",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: '{c0}工时'
        },
        legend: {
          top: "30",
          left: "100",
          data: ["工时"],
          textStyle: {
            color: "#fff"
          }
        },
        calendar: [
          {
            top: 100,
            left: "center",
            range: ["2019-01-01", "2019-06-30"],
            splitLine: {
              show: true,
              lineStyle: {
                color: "#000",
                width: 4,
                type: "solid"
              }
            },
            yearLabel: {
              formatter: "{start}  1st",
              textStyle: {
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#323c48",
                borderWidth: 1,
                borderColor: "#111"
              }
            }
          },
          {
            top: 340,
            left: "center",
            range: ["2019-07-01", "2019-12-31"],
            splitLine: {
              show: true,
              lineStyle: {
                color: "#000",
                width: 4,
                type: "solid"
              }
            },
            yearLabel: {
              formatter: "{start}  2nd",
              textStyle: {
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#323c48",
                borderWidth: 1,
                borderColor: "#111"
              }
            }
          }
        ],
        series: [
          {
            name: "工时",
            type: "scatter",
            coordinateSystem: "calendar",
            data: data,
            symbolSize: function(val) {
              return val[1] / 3;
            },
            itemStyle: {
              normal: {
                color: "#e8676b"
              }
            }
          },
          {
            name: "工时",
            type: "scatter",
            coordinateSystem: "calendar",
            calendarIndex: 1,
            data: data,
            symbolSize: function(val) {
              return val[1] / 3;
            },
            itemStyle: {
              normal: {
                color: "#e8676b"
              }
            }
          }
        ]
      };

      this.$nextTick(() => {
        echarts.init(this.$refs.echarts).setOption(option);
      });
    }
  },
  created() {
    this.initEcharts();
    console.log(this.desserts);
  }
};
</script>
<style lang="stylus" scoped>
.charts {
  height: 500px;
}

.Statistics-list {
  display: flex;

  .list {
    flex: 1;

    li {
      list-style: none;
    }
  }
}
</style>