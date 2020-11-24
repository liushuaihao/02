<template>
  <div class="chartView">
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartTopleft ref="chartTopleft"></chartTopleft>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine ref="chartBomleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartTopright ref="chartTopright"></chartTopright>
        </el-col>
        <el-col :span="12" class="col">
          <chartBomright ref="chartBomright"></chartBomright>
        </el-col>
        <el-col :span="12" class="col">
          <chartXColumn ref="chartXColumn"></chartXColumn>
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
