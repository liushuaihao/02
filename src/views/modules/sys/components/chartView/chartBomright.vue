<template>
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
      type: [String],
      default: ''
    }
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
        title: {
          text: this.title,
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
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
