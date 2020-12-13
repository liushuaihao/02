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
    y: {
      //y 轴单位
      type: [String],
      default: ''
    },
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
      default: () => [23, 58, 35, 54, 26, 46, 35]
    }
  },
  data() {
    return {
      option: {}
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
            data: this.xDatap
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
            },
            name: this.y // 单位
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            data: this.yDatap,
            areaStyle: {}
          },
          {
            name: '',
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
            data: this.bDatap
          }
        ]
      }
    }
  },
  watch: {
    title(a, b) {
      // console.log(a, 11)
      this.currentTitle = a
      this.getEchartsData()
    },
    yDatap(a, b) {
      console.log('Y轴数据-------->', a)
      this.getEchartsData()
    }
  }
}
</script>

<style lang="scss" scoped>
.chartTopright {
  height: 300px;
}
</style>
