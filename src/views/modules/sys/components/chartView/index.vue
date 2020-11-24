<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine title="体重" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="体脂" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血红蛋白" ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine title="血尿素指数" ref="chartBomleft"></chartLine>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import chartLine from './chartLine.vue'
import chartTopright from './chartTopright.vue'
import chartTopleft from './chartTopleft.vue'
import chartBomright from './chartBomright.vue'
import chartXColumn from './chartXColumn.vue'
export default {
  components: {
    chartLine,
    chartTopleft,
    chartBomright,
    chartTopright,
    chartXColumn
  },
  data() {
    return {
      option: {}
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
