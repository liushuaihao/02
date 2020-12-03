<template>
  <!-- 折现柱状图 -->
  <div class="chartTopright">
    <chartTemp :option="option"></chartTemp>
  </div>
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
    },
    xDatap: {
      type: [Array],
      default: () => ['20201101', '20201102', '20201103', '20201104', '20201105', '20201106', '20201107']
    },
    yDatap: {
      type: [Array],
      default: () => [18, 58, 15, 45, 57, 23, 25]
    },
    bDatap: {
      type: [Array],
      default: () => [0, 58, 0, 0, 0, 0, 0]
    }
  },
  data() {
    return {
      option: {},
      xData: this.xDatap,
      yData: this.yDatap,
      bData: this.bDatap
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
        title: {
          text: this.title,
          x: 'center'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xData
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
            data: this.yData,
            areaStyle: {}
          },
          {
            name: '最佳',
            type: 'bar',
            barWidth: 20, //柱图宽度
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,.3)', //柱状颜色
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
            data: this.bData
          }
        ]
      }
    }
  },
  watch: {
    bDatap: {
      handler(a, b) {
        console.log(a, 123)
        this.yData = [110, 58, 20, 30, 40, 280, 50]
        this.getEchartsData()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chartTopright {
  height: 300px;
}
</style>
