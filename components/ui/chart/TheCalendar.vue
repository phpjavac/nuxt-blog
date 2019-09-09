<template lang="pug">
figure
    div(ref="echarts").charts
</template>
<script>
// 引入 echarts 主模块。
var echarts = require("echarts");
import axios from "axios";
export default {
  props: {
    list: {
      type: Object
    }
  },
  methods: {
    getVirtulData1(year) {
      year = year || "2019";
      var date = +echarts.number.parseDate(year + "-01-01");
      var end = +echarts.number.parseDate(year + "-12-31");
      var dayTime = 3600 * 24 * 1000;
      var data = [];
      for (var time = date; time <= end; time += dayTime) {
        data.push([
          echarts.format.formatTime("yyyy-MM-dd", time),
          Math.floor(Math.random() * 10000)
        ]);
      }
      return data;
    },
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
          data[index - 1] = this.list[item].map((ele, idx) => {
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
        }
      }

      // console.log(data)
      // year = year || "2019";
      // var date = +echarts.number.parseDate(year + "-01-01");
      // var end = +echarts.number.parseDate(year + "-12-31");
      // var dayTime = 3600 * 24 * 1000;
      // var data = [];
      // for (var time = date; time <= end; time += dayTime) {
      //   data.push([
      //     echarts.format.formatTime("yyyy-MM-dd", time),
      //     Math.floor(Math.random() * 10000)
      //   ]);
      // }
      // return data;
      return data.reduce((a, b) => [...a, ...b], []);
    },

    initEcharts() {
      const data = this.getVirtulData(2019);
      console.log(data);
      const option = {
        backgroundColor: "#404a59",

        title: {
          top: 30,
          text: "2019年工作工时统计",
          subtext: "数据来源：JIRA",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item",
          extraCssText: "z-index:-1;"
        },
        legend: {
          top: "30",
          left: "100",
          data: ["工时", "Top 12"],
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
              return val[1]
            },
            itemStyle: {
              normal: {
                color: "#ddb926"
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
              return val[1]
            },
            itemStyle: {
              normal: {
                color: "#ddb926"
              }
            }
          },
          {
            name: "Top 12",
            type: "effectScatter",
            coordinateSystem: "calendar",
            calendarIndex: 1,
            data: data
              .sort(function(a, b) {
                return b[1] - a[1];
              })
              .slice(0, 12),
            symbolSize: function(val) {
              return val[1];
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          },
          {
            name: "Top 12",
            type: "effectScatter",
            coordinateSystem: "calendar",
            data: data
              .sort(function(a, b) {
                return b[1] - a[1];
              })
              .slice(0, 12),
            symbolSize: function(val) {
              return val[1];
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
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
  }
};
</script>
<style lang="stylus" scoped>
.charts {
  height: 500px;
}
</style>