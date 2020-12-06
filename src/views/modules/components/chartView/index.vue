<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine title="体重" y="kg" :legendData="legendData" :seriesData="tz" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="体脂" y="%" :legendData="legendData" :seriesData="tzi" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血红蛋白" y="g/L" :legendData="legendData" :seriesData="xhdb" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血尿素" y="mmol/L" :legendData="legendData" :seriesData="nsz" ref="chartBomleft"></chartLine>
        </el-col>

        <el-col :span="12" class="col">
          <chartLine title="血睾酮" y="mmol/L" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="皮质醇" y="ng/L" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
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
      tz: [
        {
          name: '王小虎',
          type: 'line',
          data: [60, 60, 59.5, 59, 59, 59, 60, 60.5]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [50.5, 51, 50.5, 50, 50.5, 51, 51.5, 52]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [65.5, 65.5, 64, 65.2, 65.1, 65, 64.8, 65.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [55.5, 55.6, 55, 55.8, 55.2, 54.9, 55, 55]
        }
      ],
      tzi:[
        {
          name: '王小虎',
          type: 'line',
          data: [30, 30, 28.5, 30, 30, 29, 30, 30]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [20, 21, 20.5, 20, 20.5, 20, 21.5, 22]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [35.5, 35.5, 34, 35.2, 35.1, 35, 34.8, 35.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [25.5, 25.6, 25, 25.8, 25.2, 24.9, 25, 25]
        }
      ],
      xhdb:[
        {
          name: '王小虎',
          type: 'line',
          data: [100, 110, 120.5, 120, 122, 120, 100, 100]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [150, 160, 150.5, 120, 130.5, 150, 180, 150]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [180, 150.5, 134, 135.2, 135.1, 135, 134.8, 135.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [125.5, 125.6, 125, 125.8, 125.2, 124.9, 125, 125]
        }
      ],
      nsz:[
        {
          name: '王小虎',
          type: 'line',
          data: [5.2, 5.1, 4.5, 3, 4, 4.4, 5.4, 4.4]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [3.4, .54, 2.5, 1, 3.5, 2, 5, 7]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [8, 5.5, 4, 4.2, 7.1, 1, 5.8, 6.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [5.5, 4.6, 5, 6.8, 4.2, 5.9, 6, 4]
        }
      ],
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
