<template>
  <!-- ------------------------心率变化-------------------- -->
  <div class="chart_cont">
    <div class="chart_info">
      <el-form class="el-form--inline">
        <el-form-item style="margin-right:50px">
          <el-radio class="radio" v-model="raceType" :label="1">单人多场心率对比</el-radio>
          <el-radio class="radio" v-model="raceType" :label="2">多人单场心率对比</el-radio>
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
      <Chart1 y="fpm" v-if="!showTrack" :xData="xData1" :legendData="legendData1" :seriesData="seriesData1" title="心率变化曲线" ref="chartBomright"></Chart1>
      <Chart2 y="fpm" v-else :xData="xData1" :legendData="legendData2" :seriesData="seriesData2" title="心率变化曲线" ref="chartBomright2"></Chart2>
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
      xData1: ['赛段1', '赛段2', '赛段3', '赛段4', '赛段5', '赛段6', '赛段7'],
      legendData1: ['场次1', '场次2', '场次3', '场次4', '场次5'],
      legendData2: ['王小虎', '李小芳', '张大壮', '赵大强'],
      seriesData1: [
        {
          name: '场次1',
          type: 'line',
          smooth: true,
          data: [120, 132, 101, 134, 90, 180, 210]
        },
        {
          name: '场次2',
          type: 'line',
          smooth: true,
          data: [180, 180, 60, 95, 60, 150, 110]
        },
        {
          name: '场次3',
          type: 'line',
          data: [150, 132, 101, 154, 160, 130, 110]
        },
        {
          name: '场次4',
          type: 'line',
          smooth: true,
          data: [100, 110, 100, 80, 90, 50, 100]
        },
        {
          name: '场次5',
          type: 'line',
          smooth: true,
          data: [100, 120, 100, 80, 100, 60, 100]
        }
      ],
      seriesData2: [
        {
          name: '王小虎',
          type: 'line',
          smooth: true,
          data: [100, 120, 130, 134, 90, 130, 110]
        },
        {
          name: '李小芳',
          type: 'line',
          smooth: true,
          data: [120, 152, 141, 134, 150, 130, 110]
        },
        {
          name: '张大壮',
          type: 'line',
          smooth: true,
          data: [150, 90, 60, 77, 88, 99, 111]
        },
        {
          name: '赵大强',
          type: 'line',
          smooth: true,
          data: [86, 80, 106, 120, 190, 80, 100]
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
      value2: '',
      value3: '',
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
