<template>
  <div class="chart_cont">
    <div class="radio_item">
      <el-radio class="radio" v-model="raceType" :label="1">全场分析</el-radio>
      <el-radio class="radio" v-model="raceType" :label="2">赛段分析</el-radio>
      <div class="track" v-if="showTrack"></div>
    </div>
    <div class="chart_info">
      <div class="table">
        <div class="table_item">圈数选择</div>
        <div class="table_item">
          <el-select v-model="value2" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="table_item">
          <el-button type="primary">确定</el-button>
        </div>
      </div>
      <el-table :data="tableData" style="width: 100%" align="center">
        <el-table-column prop="drillTime" label="训练时间" min-width="140"> </el-table-column>
        <el-table-column prop="average" label="均值 mean" min-width="100"> </el-table-column>
        <el-table-column prop="max" label="最快 max" min-width="100"> </el-table-column>
        <el-table-column prop="min" label="最慢 min" min-width="100"> </el-table-column>
        <el-table-column prop="std" label="标准差 std" min-width="100"> </el-table-column>
        <el-table-column prop="median" label="中位数 median" min-width="100"> </el-table-column>
        <el-table-column prop="skewness" label="偏度 skewness" min-width="100"> </el-table-column>
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
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value2: [],
      tableData: [
        { id: 1, drillTime: '第几圈', average: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 2, drillTime: '第几圈', average: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
        { id: 3, drillTime: '第几圈', average: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 4, drillTime: '第几圈', average: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
        { id: 5, drillTime: '第几圈', average: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 }
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
  display: flex;
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
