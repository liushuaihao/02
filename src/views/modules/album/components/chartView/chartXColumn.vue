<template>
  <div class="chartBomleft"><chartTemp :option="option"></chartTemp></div>
</template>

<script>
import chartTemp from '@/components/chartTemp'
export default {
  components: {
    chartTemp
  },
  data() {
    return {
      option: {},
      xData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yData: [11, 11, 15, 13, 12, 13, 10]
    }
  },
  mounted() {
    this.getEchartsData()
  },
  methods: {
    getEchartsData() {
      this.option = {
        color: ['#409EFF'],
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '3%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xData,
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: { show: false }, // 坐标轴轴线
            axisLabel: {
              show: true,
              interval: 0,
              formatter: function(name) {
                return name.length > 4 ? name.slice(0, 4) + '...' : name
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            axisLine: { show: false } // 坐标轴轴线
          }
        ],
        series: [
          {
            type: 'bar',
            barWidth: '50px',
            data: this.yData,
            label: {
              // 图形上的文本标签
              show: true,
              position: 'top', // 标签的位置
              offset: [0, 0], // 标签文字的偏移，此处表示向上偏移40
              color: '#409EFF', // 标签字体颜色
              fontSize: '14px' // 标签字号
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chartBomleft {
  height: 300px;
}
</style>
