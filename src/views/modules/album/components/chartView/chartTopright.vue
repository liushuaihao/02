<template>
  <div class="chartTopright"><chartTemp :option="option"></chartTemp></div>
</template>

<script>
import chartTemp from '@/components/chartTemp'
export default {
  components: {
    chartTemp
  },
  props: {
    title: {
      type: [String],
      default: ''
    }
  },
  data() {
    return {
      option: {},
      xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yData: [18, 58, 15, 45, 57, 23, 25]
    }
  },
  mounted() {
    this.getEchartsData()
  },
  methods: {
    getEchartsData() {
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              // 控制Y轴的分隔线(辅助线)
              show: false, // 默认显示，属性show控制显示与否
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#ccc'],
                width: 1,
                type: 'solid'
              }
            }
          }
        ],
        series: [
          {
            name: '最高气温',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10]
          },
          {
            name: '测试',
            type: 'bar',
            barWidth: 20, //柱图宽度
            itemStyle: {
              normal: {
                color: '#ab78ba', //柱状颜色
                label: {
                  show: false, //柱头数字
                  position: 'top',
                  textStyle: {
                    fontSize: '20',
                    fontFamily: '微软雅黑',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: [1, 100, 28, 50, 30, 20, 78]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chartTopright {
  height: 300px;
}
</style>
