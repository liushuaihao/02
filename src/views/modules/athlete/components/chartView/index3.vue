<template>
  <!-- -------------------------成绩分析 图表显示--------------------- -->
  <div class="chart_cont">
    <div class="chart_info">
      <el-form class="el-form--inline">
        <el-form-item style="margin-right:50px">
          <el-radio class="radio" v-model="raceType" :label="1">单人多场速度对比</el-radio>
          <el-radio class="radio" v-model="raceType" :label="2">多人单场速度对比</el-radio>
        </el-form-item>
        <el-form-item v-if="!showTrack" label="运动员选择">
          <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-else label="比赛场次选择">
          <el-select v-model="value3" clearable style="margin-left: 20px;" placeholder="请选择">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!-- 1 -->
      <el-table v-if="!showTrack" :data="tableData" style="width: 100%;margin-bottom:20px">
        <el-table-column prop="drillTime" label="比赛场次" min-width="140"> </el-table-column>
        <el-table-column prop="mean" label="均值 " min-width="100"> </el-table-column>
        <el-table-column prop="max" label="最快 " min-width="100"> </el-table-column>
        <el-table-column prop="min" label="最慢 " min-width="100"> </el-table-column>
        <el-table-column prop="std" label="标准差 " min-width="100"> </el-table-column>
      </el-table>
      <!-- 2 -->
      <el-table v-else :data="tableData2" style="width: 100%;margin-bottom:20px">
        <el-table-column prop="name" label="运动员姓名" min-width="140"> </el-table-column>
        <el-table-column prop="mean" label="均值 " min-width="100"> </el-table-column>
        <el-table-column prop="max" label="最快 " min-width="100"> </el-table-column>
        <el-table-column prop="min" label="最慢 " min-width="100"> </el-table-column>
        <el-table-column prop="std" label="标准差 " min-width="100"> </el-table-column>
      </el-table>
      <Chart1 v-if="!showTrack" :xData="xData1" y="m/s" :legendData="legendData1" :seriesData="seriesData1" title="速度变化曲线" ref="chartBomright"></Chart1>
      <Chart2 v-else :xData="xData1" y="m/s" :legendData="legendData2" :seriesData="seriesData2" title="速度变化曲线" ref="chartBomright2"></Chart2>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    Chart1: () => import('./chartBomright'),
    Chart2: () => import('./chartBomright')
  },
  data() {
    return {
      xData1: ['赛段1', '赛段2', '赛段3', '赛段4', '赛段5', '赛段6', '赛段7', '赛段8'],
      legendData1: ['场次1', '场次2', '场次3', '场次4', '场次5'],
      legendData2: ['王小虎', '李小芳', '张大壮', '赵大强'],
      seriesData1: [
        {
          name: '场次1',
          type: 'line',
          smooth: true,
          data: [10, 6, 8, 20, 11, 5, 18, 20]
        },
        {
          name: '场次2',
          type: 'line',
          smooth: true,
          data: [10, 5, 20, 4, 10, 9, 20, 20]
        },
        {
          name: '场次3',
          type: 'line',
          data: [10, 20, 20, 20, 4, 5, 6, 20]
        },
        {
          name: '场次4',
          type: 'line',
          smooth: true,
          data: [1, 2, 4, 5, 20, 20, 20, 20]
        },
        {
          name: '场次5',
          type: 'line',
          smooth: true,
          data: [10, 4, 15, 5, 8, 9, 18, 20]
        }
      ],
      seriesData2: [
        {
          name: '王小虎',
          type: 'line',
          smooth: true,
          data: [10, 20, 1, 5, 6, 9, 5, 20]
        },
        {
          name: '李小芳',
          type: 'line',
          smooth: true,
          data: [6, 20, 20, 15, 10, 5, 1, 20]
        },
        {
          name: '张大壮',
          type: 'line',
          smooth: true,
          data: [5, 20, 18, 2, 10, 9, 5, 20]
        },
        {
          name: '赵大强',
          type: 'line',
          smooth: true,
          data: [1, 20, 15, 15, 10, 20, 18, 12]
        }
      ],
      raceType: 1,
      options: [
        {
          value: '选项1',
          label: '王小虎'
        },
        {
          value: '选项2',
          label: '李小芳'
        },
        {
          value: '选项3',
          label: '张大壮'
        },
        {
          value: '选项4',
          label: '赵大强'
        }
      ],
      options2: [
        {
          value: '选项1',
          label: '2020年11月11日1场'
        },
        {
          value: '选项2',
          label: '2020年11月11日2场'
        },
        {
          value: '选项3',
          label: '2020年11月11日3场'
        },
        {
          value: '选项4',
          label: '2020年11月11日4场'
        },
        {
          value: '选项5',
          label: '2020年11月11日5场'
        }
      ],
      value2: '选项1',
      value3: '选项1',
      tableData: [
        { id: 1, drillTime: '2020年11月11日1场', mean: '2', max: '3', min: '3', std: '1' },
        { id: 2, drillTime: '2020年11月11日2场', mean: '2', max: '3', min: '3', std: '1' },
        { id: 3, drillTime: '2020年11月11日3场', mean: '2', max: '3', min: '3', std: '1' },
        { id: 4, drillTime: '2020年11月11日4场', mean: '2', max: '3', min: '3', std: '1' },
        { id: 5, drillTime: '2020年11月11日5场', mean: '2', max: '3', min: '3', std: '1' }
      ],
      tableData2: [
        { id: 1, name: '王小虎', mean: '22', max: '37', min: '3', std: '1' },
        { id: 2, name: '李小芳', mean: '27', max: '35', min: '3', std: '1' },
        { id: 3, name: '张大壮', mean: '2', max: '35', min: '3', std: '1' },
        { id: 4, name: '赵大强', mean: '2', max: '35', min: '3', std: '1' }
      ],
      showTrack: false // 显示跑道
    }
  },
  mounted() {
    this.tableData.filter(item => {
      item.mean = this.$randomVal(10, 19)
      item.max = this.$randomVal(19, 20)
      item.min = this.$randomVal(10, 15)
      item.std = this.$randomVal(10, 20)
    })
    this.tableData2.filter(item => {
      item.mean = this.$randomVal(10, 19)
      item.max = this.$randomVal(19, 20)
      item.min = this.$randomVal(10, 15)
      item.std = this.$randomVal(10, 20)
    })
  },
  watch: {
    raceType(newV, oldV) {
      this.showTrack = newV === 2 ? true : false
      this.seriesVal()
    },
    value2(n, o) {
      this.tableData.filter(item => {
        item.mean = this.$randomVal(10, 19)
        item.max = this.$randomVal(19, 20)
        item.min = this.$randomVal(10, 15)
        item.std = this.$randomVal(10, 20)
      })
      this.tableData2.filter(item => {
        item.mean = this.$randomVal(10, 19)
        item.max = this.$randomVal(19, 20)
        item.min = this.$randomVal(10, 15)
        item.std = this.$randomVal(10, 20)
      })
      this.seriesVal()
    },
    value3(n, o) {
      this.tableData.filter(item => {
        item.mean = this.$randomVal(10, 19)
        item.max = this.$randomVal(19, 20)
        item.min = this.$randomVal(10, 15)
        item.std = this.$randomVal(10, 20)
      })
      this.tableData2.filter(item => {
        item.mean = this.$randomVal(10, 19)
        item.max = this.$randomVal(19, 20)
        item.min = this.$randomVal(10, 15)
        item.std = this.$randomVal(10, 20)
      })
      this.seriesVal()
    }
  },
  methods: {
    seriesVal() {
      this.seriesData1.filter(f => {
        f.data = []
        for (let i = 0; i < 8; i++) {
          f.data.push(this.$randomVal(50, 200))
        }
      })
      this.seriesData2.filter(f => {
        f.data = []
        for (let i = 0; i < 8; i++) {
          f.data.push(this.$randomVal(50, 200))
        }
      })
    }
  }
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
