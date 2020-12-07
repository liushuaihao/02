<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine title="体重" max="90" min="60" y="kg" :legendData="legendData" :seriesData="tz" ref="chartBomleft"></chartLine>
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
          <chartLine title="血睾酮" y="mmol/L" :legendData="legendData" :seriesData="xg" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="皮质醇" y="ng/L" max="280" min="50" :legendData="legendData" :seriesData="data1" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="BMI" max="30" min="10" :legendData="legendData" :seriesData="mbi" ref="chartBomleft"></chartLine>
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
          data: [89, 89, 89.5, 90, 89, 89, 89, 89.5]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [60.5,61, 60.5,60, 60.5, 61, 61.5, 62]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [65.5, 65.5, 64, 65.2, 65.1, 65, 64.8, 65.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [65.5, 65.6, 65, 65.8,65.2, 64.9, 65, 65]
        }
      ],
      tzi: [
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
      xhdb: [
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
      nsz: [
        {
          name: '王小虎',
          type: 'line',
          data: [5.2, 5.1, 4.5, 3, 4, 4.4, 5.4, 4.4]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [3.4, 0.54, 2.5, 1, 3.5, 2, 5, 7]
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
      xg: [
        {
          name: '王小虎',
          type: 'line',
          data: [5.2, 50, 44.5, 30, 44, 44.4, 15.4, 14.4]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [13.4, 2.54, 2.5, 41, 31.5, 42, 50, 17]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [28, 35.5, 44, 24.2, 17.1, 41, 25.8, 26.2]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [15.5, 44.6, 45, 36.8, 44.2, 15.9, 16, 14]
        }
      ],
      data1: [
        {
          name: '王小虎',
          type: 'line',
          data: [200, 280, 100, 100, 100, 150, 100, 100]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [120, 200, 100, 100, 100, 140, 130, 120]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [190, 180, 100, 150, 160, 140, 150, 100]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [111, 133, 122, 111, 155, 122, 166, 122]
        }
      ],
      mbi: [
        {
          name: '王小虎',
          type: 'line',
          data: [30, 20, 20, 10, 10, 15, 10, 10]
        },
        {
          name: '李小芳',
          type: 'line',
          data: [12, 20, 10, 10, 10, 14, 13, 12]
        },
        {
          name: '张大壮',
          type: 'line',
          data: [19, 18, 13, 15, 16, 14, 15, 10]
        },
        {
          name: '赵大强',
          type: 'line',
          data: [31, 13, 12, 11, 15, 12, 16, 12]
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
