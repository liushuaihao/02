<template>
  <div class="chartBomleft"><chartTemp :option="option"></chartTemp></div>
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
      xData: ['20201101', '20201102', '20201103', '20201104', '20201105', '20201106', '20201107'],
      yData: [11, 11, 15, 13, 12, 13, 10]
    }
  },
  mounted() {
    this.getEchartsData()
  },
  methods: {
    getEchartsData() {
      this.option = {
        title: {
          text: this.title,
          x: 'center'
        },
        //悬停
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xData,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '血红蛋白',
            type: 'line',
            data: this.yData
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
