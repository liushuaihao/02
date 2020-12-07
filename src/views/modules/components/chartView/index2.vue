<template>
  <div class="chartView">
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item style="margin-right:50px">
        <el-radio class="radio" v-model="raceType" :label="1">单人多场动作对比</el-radio>
        <el-radio class="radio" v-model="raceType" :label="2">多人单场动作对比</el-radio>
      </el-form-item>
      <el-form-item label="运动员" v-if="raceType == 1">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in options1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="弯道技术:" v-if="raceType == 2">
        <el-select v-model="value2" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in options2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="chartbox" v-if="raceType == 1">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine y="度°" :xData="dataX" :legendData="legendData1" :seriesData="seriesData1" title="髋关节" ref="chartTopleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine y="度°" :xData="dataX" :legendData="legendData1" :seriesData="seriesData1" title="踝关节" ref="chartTopright"></chartLine>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine y="度°" :xData="dataX" :legendData="legendData1" :seriesData="seriesData1" title="膝关节" ref="chartTopleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine y="度°" :xData="dataX" :legendData="legendData1" :seriesData="seriesData1" title="左脚蹬冰角度" ref="chartTopright"></chartLine>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine y="度°" :xData="dataX" :legendData="legendData1" :seriesData="seriesData1" title="滑行角度" ref="chartTopleft"></chartLine>
        </el-col>
      </el-row>
    </div>
    <div class="chartbox" v-if="raceType == 2">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :xData="dataX" :legendData="legendData2" :seriesData="seriesData2" title="髋关节" ref="chartTopleft"></chartLine2>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :xData="dataX" :legendData="legendData2" :seriesData="seriesData2" title="踝关节" ref="chartTopright"></chartLine2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :xData="dataX" :legendData="legendData2" :seriesData="seriesData2" title="膝关节" ref="chartTopleft"></chartLine2>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :xData="dataX" :legendData="legendData2" :seriesData="seriesData2" title="左脚蹬冰角度" ref="chartTopright"></chartLine2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :xData="dataX" :legendData="legendData2" :seriesData="seriesData2" title="滑行角度" ref="chartTopleft"></chartLine2>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    chartLine: () => import('./chartBomright'),
    chartLine2: () => import('./chartBomright')
  },
  data() {
    return {
      raceType: 1,
      value: '选项1',
      value2: '选项1',
      options1: [
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
      legendData1: ['场次1', '场次2', '场次3', '场次4', '场次5'],
      legendData2: ['王小虎', '李小芳', '张大壮', '赵大强'],
      dataX: ['1.00', '1.50', '2.00', '2.50', '3.00', '3.50', '4.00'],
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
      seriesData1: [
        {
          name: '场次1',
          type: 'line',
          smooth: true,
          data: [90, 45, 90, 45, 90, 45, 90, 45]
        },
        {
          name: '场次2',
          type: 'line',
          smooth: true,
          data: [85, 46, 86, 42, 75, 85, 90, 45]
        },
        {
          name: '场次3',
          type: 'line',
          data: [60, 75, 55, 85, 54, 75, 65, 50]
        },
        {
          name: '场次4',
          type: 'line',
          smooth: true,
          data: [51, 92, 54, 95, 20, 80, 20, 40]
        },
        {
          name: '场次5',
          type: 'line',
          smooth: true,
          data: [50, 48, 90, 55, 55, 90, 50, 60]
        }
      ],
      seriesData2: [
        {
          name: '王小虎',
          type: 'line',
          smooth: true,
          data: [50, 80, 71, 55, 65, 90, 85, 20]
        },
        {
          name: '李小芳',
          type: 'line',
          smooth: true,
          data: [60, 20, 50, 85, 90, 55, 61, 40]
        },
        {
          name: '张大壮',
          type: 'line',
          smooth: true,
          data: [50, 70, 18, 52, 10, 90, 50, 20]
        },
        {
          name: '赵大强',
          type: 'line',
          smooth: true,
          data: [41, 20, 75, 15, 90, 30, 88, 12]
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
