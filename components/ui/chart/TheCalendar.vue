<template lang="pug">
figure
    div(ref="echarts").charts
</template>
<script>
// 引入 echarts 主模块。
var echarts = require("echarts");
import axios from "axios";
export default {
  data() {
    return {
      list: {}
    };
  },
  methods: {
    getVirtulData(year) {
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

    initEcharts() {
      const data = this.getVirtulData(2019);
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
          extraCssText:'z-index:-1;'
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
              return val[1] / 500;
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
              return val[1] / 500;
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
              return val[1] / 500;
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
              return val[1] / 500;
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
.charts
  height 500px
</style>