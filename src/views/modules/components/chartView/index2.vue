<template>
  <div class="chartView">
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item style="margin-right:50px">
        <el-radio class="radio" v-model="raceType" :label="1">单人多场心率对比</el-radio>
        <el-radio class="radio" v-model="raceType" :label="2">多人单场心率对比</el-radio>
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
          <chartLine y="度°"  :legendData="legendData1" :seriesData="seriesData1" title="髋关节" ref="chartTopleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine y="度°"  :legendData="legendData1" :seriesData="seriesData1" title="踝关节" ref="chartTopright"></chartLine>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine y="度°"  :legendData="legendData1" :seriesData="seriesData1" title="膝关节" ref="chartTopleft"></chartLine>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine y="度°"   :legendData="legendData1" :seriesData="seriesData1" title="左脚蹬冰角度" ref="chartTopright"></chartLine>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine y="度°"  :legendData="legendData1" :seriesData="seriesData1" title="滑行角度" ref="chartTopleft"></chartLine>
        </el-col>
      </el-row>
    </div>
    <div class="chartbox" v-if="raceType == 2">
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°"  :legendData="legendData2" :seriesData="seriesData2" title="髋关节" ref="chartTopleft"></chartLine2>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine2 y="度°"  :legendData="legendData2" :seriesData="seriesData2" title="踝关节" ref="chartTopright"></chartLine2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :legendData="legendData2" :seriesData="seriesData2" title="膝关节" ref="chartTopleft"></chartLine2>
        </el-col>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :legendData="legendData2" :seriesData="seriesData2" title="左脚蹬冰角度" ref="chartTopright"></chartLine2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" class="col">
          <chartLine2 y="度°" :legendData="legendData2" :seriesData="seriesData2" title="滑行角度" ref="chartTopleft"></chartLine2>
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
