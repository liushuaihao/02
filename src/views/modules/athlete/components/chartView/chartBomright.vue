<template>
  <!-- 多条线  -->
  <div class="chartBomright"><chartTemp :option="option"></chartTemp></div>
</template>

<script>
import chartTemp from '@/components/chartTemp'
import { deflate } from 'zlib'
export default {
  components: {
    chartTemp
  },
  props: {
    title: {
      // 标题
      type: [String],
      default: ''
    },
    y: {
      //y 轴单位
      type: [String],
      default: ''
    },
    legendData: {
      // 线条名字
      type: Array,
      default: () => []
    },
    seriesData: {
      // 线条数据
      type: Array,
      default: () => []
    },
    max: {
      //y 轴单位
      type: [String],
      default: ''
    },
    min: {
      //y 轴单位
      type: [String],
      default: ''
    },
    xData: {
      // x 轴
      type: Array,
      default: () => ['20201101', '20201102', '20201103', '20201104', '20201105', '20201106', '20201107']
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
        color: ['red', 'blue'],
        title: {
          text: this.title,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.legendData,
          y: 'bottom'
        },
        grid: {
          left: '3%',
          right: '4%',
          top: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          min: this.min || 0,
          type: 'value',
          name: this.y // 单位
        },
        series: this.seriesData // 数据
      }
    }
  },
  watch: {
    seriesData: {
      handler(n, o) {
        this.getEchartsData()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chartBomright {
  height: 300px;
}
</style>
