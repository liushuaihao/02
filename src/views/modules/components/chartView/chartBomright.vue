<template>
  <!-- 多条线  -->
  <div class="chartBomright"><chartTemp :option="option"></chartTemp></div>
</template>

<script>
import chartTemp from '@/components/chartTemp'
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
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: this.seriesData
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chartBomright {
  height: 300px;
}
</style>
