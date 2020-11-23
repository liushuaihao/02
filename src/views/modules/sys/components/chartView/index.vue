<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartTemp :option="option"></chartTemp>
        </el-col>
        <el-col :span="12" class="col">
          <chartTemp :option="option"></chartTemp>
        </el-col>
        <el-col :span="12" class="col">
          <chartTemp :option="option"></chartTemp>
        </el-col>
        <el-col :span="12" class="col">
          <chartTemp :option="option"></chartTemp>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import chartTemp from '@/components/chartTemp'
export default {
  components: {
    chartTemp
  },
  data() {
    return {
      option: {}
    }
  },
  mounted() {
    this.getEcharts()
  },
  methods: {
    getEcharts() {
      this.option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.col {
  height: 300px;
}
</style>
