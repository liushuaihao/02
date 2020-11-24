<template>
  <div class="score_cont">
    <p>
      <el-radio class="radio" v-model="raceType" :label="1">全场分析</el-radio>
      <el-radio class="radio" v-model="raceType" :label="2">赛段分析</el-radio>
    </p>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="drillTime" label="训练时间" min-width="140"> </el-table-column>
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
      raceType: 1,
      tableData: [
        { id: 1, drillTime: '2020年02月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 2, drillTime: '2020年02月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 3, drillTime: '2020年02月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 4, drillTime: '2020年02月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 5, drillTime: '2020年02月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 }
      ]
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
