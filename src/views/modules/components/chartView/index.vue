<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine title="体重" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="体脂" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血红蛋白" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血尿素" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>

        <el-col :span="12" class="col">
          <chartLine title="血睾酮" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="皮质醇" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="BMI" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import chartLine from './chartBomright.vue'
export default {
  components: {
    chartLine
  },
  data() {
    return {
      option: {},
      legendData: ['王小虎', '李小芳', '张大壮', '赵大强'],
      data1: [
        {
          name: '王小虎',
          type: 'line',
          data: [500, 200, 300, 400, 100, 50, 800, 400]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [120, 200, 300, 400, 500, 400, 300, 200]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [900, 800, 300, 500, 600, 400, 500, 100]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [111, 333, 222, 111, 555, 222, 666, 222]
        }
      ]
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.col {
  height: 300px;
}
</style>
