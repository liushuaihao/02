<template>
  <!-- y 柱状图 -->
  <div class="chartTopleft"><chartTemp :option="option"></chartTemp></div>
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
      default: '综合评分：'
    },
    xDatap: {
      type: [Array],
      default: () => [50, 60, 10, 13, 12, 13, 10]
    },
    yDatap: {
      type: [Array],
      default: () => []
    }
  },
  data() {
    return {
      option: {}
    }
  },
  mounted() {},
  methods: {
    getEchartsData() {
      this.option = {
        color: ['#409EFF'],
        title: {
          text: this.title,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: { show: false }, // 坐标轴轴线
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: this.yDatap,
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: { show: false }, // 坐标轴轴线
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '%', // 系列名称
            type: 'bar',
            barWidth: '60%',
            data: this.xDatap,
            label: {
              // 图形上的文本标签
              show: true,
              position: 'right', // 标签的位置
              offset: [0, 0], // 标签文字的偏移，此处表示向上偏移40
              formatter: '{c}{a}', // 标签内容格式器 {a}-系列名,{b}-数据名,{c}-数据值
              color: '#666666', // 标签字体颜色
              fontSize: '14px' // 标签字号
            }
          }
        ]
      }
    }
  },
  created(){
    this.getEchartsData()
  }
}
</script>

<style lang="scss" scoped>
.chartTopleft {
  height: 300px;
}
</style>
