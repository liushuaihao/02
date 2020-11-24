<template>
  <div class="chartView">
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item label="赛程阶段:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="(item, index) in option"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="弯道技术:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="(item, index) in option"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="动作类型:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="(item, index) in option"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="chartbox">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine ref="chartTopleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine ref="chartTopright"></chartLine>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import chartLine from './chartLine.vue'
export default {
  components: {
    chartLine
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
