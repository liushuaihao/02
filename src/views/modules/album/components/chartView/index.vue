<template>
  <div class="chart_cont">
    <p>
      <el-radio class="radio" v-model="raceType" :label="1">全场分析</el-radio>
      <el-radio class="radio" v-model="raceType" :label="2">赛段分析</el-radio>
    </p>
    <div class="chart_info">
      <el-form class="el-form--inline">
        <el-form-item label="圈数选择">
          <el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择"> <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option> </el-select>
        </el-form-item>
      </el-form>

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
      <ChartLine v-if="!showTrack" ref="chartBomleft"></ChartLine>
      <ChartBomRight v-else ref="chartBomright"></ChartBomRight>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ChartLine: () => import('./chartLine'),
    ChartBomRight: () => import('./chartBomright')
  },
  data() {
    return {
      raceType: 1,
      options: [
        {
          value: '选项1',
          label: '第一圈'
        },
        {
          value: '选项2',
          label: '第二圈'
        },
        {
          value: '选项3',
          label: '第三圈'
        },
        {
          value: '选项4',
          label: '第四圈'
        },
        {
          value: '选项5',
          label: '第五圈'
        }
      ],
      value2: [],
      tableData: [
        { id: 1, drillTime: '第几圈', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 2, drillTime: '第几圈', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 3, drillTime: '第几圈', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 4, drillTime: '第几圈', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 5, drillTime: '第几圈', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 }
      ],
      showTrack: false // 显示跑道
    }
  },
  mounted() {},
  watch: {
    raceType(newV, oldV) {
      this.showTrack = newV === 2 ? true : false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.chart_cont {
  .radio_item {
    flex-shrink: 0;
    width: 200px;
    .radio {
      display: block;
      margin: 4px 0;
    }
    .track {
      background-color: pink;
      width: 100px;
      height: 180px;
      margin-top: 30px;
    }
  }
}
.chart_info .table {
  display: flex;
  align-items: center;
  & > div {
    margin: 10px 30px;
    .el-select {
      width: 300px;
    }
  }
}
</style>
