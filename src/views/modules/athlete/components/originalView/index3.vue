<template>
  <div class="score_cont">
    <el-form class="el-form--inline">
      <el-form-item style="margin-right:50px">
        <el-radio class="radio" v-model="raceType" :label="0">全场分析</el-radio>
        <el-radio class="radio" v-model="raceType" :label="1">赛段分析</el-radio>
      </el-form-item>
      <el-form-item v-if="raceType == 1" label="赛段选择">
        <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="raceType == 0 ? tableData1 : tableData2" style="width: 100%" align="center">
      <el-table-column v-if="raceType == 0" prop="drillTime" label="赛道阶段" min-width="140"> </el-table-column>
      <el-table-column v-else prop="drillTime" label="比赛场次" min-width="140"> </el-table-column>
      <el-table-column prop="mean" label="均值 " min-width="100"> </el-table-column>
      <el-table-column prop="max" label="最快 " min-width="100"> </el-table-column>
      <el-table-column prop="min" label="最慢 " min-width="100"> </el-table-column>
      <el-table-column prop="std" label="标准差 " min-width="100"> </el-table-column>
      <el-table-column prop="median" label="中位数 " min-width="100"> </el-table-column>
      <el-table-column prop="skewness" label="偏度 " min-width="100"> </el-table-column>
      <el-table-column prop="isTrue" label="是否为真实比赛" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.isTrue === 1 ? '是' : '否' }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raceType: 0,
      value2: '选项1',
      options: [
        { value: '选项1', label: '启动阶段' },
        { value: '选项2', label: '冲刺阶段' },
        { value: '选项3', label: '直道赛段' },
        { value: '选项4', label: '弯道赛段' },
        { value: '选项5', label: '赛段全程' }
      ],
      tableData1: [
        { id: 1, drillTime: '启动阶段', mean: '2', max: '5', min: '5', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 2, drillTime: '冲刺阶段', mean: '2', max: '6', min: '4', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 3, drillTime: '直道赛段', mean: '2', max: '7', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 4, drillTime: '弯道赛段', mean: '2', max: '8', min: '2', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 5, drillTime: '赛段全程', mean: '2', max: '9', min: '1', std: '1', median: '2', skewness: '5', isTrue: 1 }
      ],
      tableData2: [
        { id: 1, drillTime: '2020年12月02日01次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 2, drillTime: '2020年12月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 3, drillTime: '2020年12月02日03次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 4, drillTime: '2020年12月02日04次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 5, drillTime: '2020年12月02日05次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 }
      ]
    }
  },
  mounted() {
    this.tableData1.filter((item, index) => {
      item.mean = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
      item.max = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
      item.min = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
      item.std = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
      item.median = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
      item.skewness = index === 0 || index === 3 ? this.getVal(17, 21) : index === 1 || index === 2 ? this.getVal(10, 11) : this.getVal(14, 16)
    })
    this.tableData2.filter((item, index) => {
      item.mean = this.getVal(17, 19)
      item.max = this.getVal(17, 19)
      item.min = this.getVal(17, 19)
      item.std = this.getVal(17, 19)
      item.median = this.getVal(17, 19)
      item.skewness = this.getVal(17, 19)
    })
  },
  methods: {
    getVal(a, b) {
      return this.$randomVal(a, b) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
    }
  },
  watch: {
    value2(n, o) {
      this.tableData2.filter((item, index) => {
        item.mean = this.getVal(17, 19)
        item.max = this.getVal(17, 19)
        item.min = this.getVal(17, 19)
        item.std = this.getVal(17, 19)
        item.median = this.getVal(17, 19)
        item.skewness = this.getVal(17, 19)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.score_cont {
  .radio_item {
    width: 200px;
    .radio {
      display: block;
      margin: 4px 0;
    }
  }
}
</style>
