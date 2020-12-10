<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="10"><chartView2 /> </el-col>
        <el-col :span="14">
          <el-row :gutter="20">
            <el-col :span="12">
              <h4>全程评估</h4>
              <el-form class="el-form--inline">
                <el-form-item style="margin-right:50px">
                  <el-radio class="radio" v-model="raceType" :label="0">升序</el-radio>
                  <el-radio class="radio" v-model="raceType" :label="1">降序</el-radio>
                </el-form-item>
              </el-form>
              <el-table :data="tableData1" align="center">
                <el-table-column prop="time" min-width="100px" label="场次名称"></el-table-column>
                <el-table-column prop="type" label="耗时"></el-table-column>
                <el-table-column prop="serial" label="排名"></el-table-column>
                <el-table-column prop="performance" label="评分"></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <h4>赛段评估</h4>

              <el-form class="el-form--inline">
                <el-form-item style="margin-right:50px">
                  <el-radio class="radio" v-model="raceType2" :label="1">最优</el-radio>
                  <el-radio class="radio" v-model="raceType2" :label="2">最差</el-radio>
                  <el-radio class="radio" v-model="raceType2" :label="3">全部</el-radio>
                </el-form-item>
              </el-form>
              <el-table :data="tableData2" align="center">
                <el-table-column prop="a" min-width="100px" label="圈"></el-table-column>
                <el-table-column prop="b" min-width="100px" label="段"></el-table-column>
                <el-table-column prop="c" min-width="100px" label="类型"></el-table-column>
                <el-table-column prop="d" min-width="100px" label="速度"></el-table-column>
                <el-table-column prop="e" min-width="100px" label="评分"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <el-card>
      <chartTopright title="赛段历史成绩对比" />
    </el-card>
    <!-- 降序升序最优最差全部 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12">
          <h3>
            关联挖掘模式：<span><i class="el-icon-circle-check" style="color:#67C23A"></i> 优良要素挖掘</span> <span> <i class="el-icon-circle-close" style="color:#F56C6C"></i>潜在问题挖掘</span>
          </h3>
          <chartView3 />
        </el-col>
        <el-col :span="12">
          <div>
            <p>
              要素名称：血尿素
            </p>
            <p>
              要素质量：优/良/中/差
            </p>
            <p>最优范围：21 ~ 22</p>
            <p>当前值：18</p>
            <p>
              所处位置：
              <chartTopright />
            </p>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import chartTopright from './../chartView/chartTopright.vue'
import chartView2 from './../chartView/chart2'
import chartView3 from './../chartView/chart3'
export default {
  components: {
    chartTopright,
    chartView2,
    chartView3
  },
  data() {
    return {
      tableData1: [
        {
          time: '2021年6月8日n场',
          type: '03:01',
          serial: 1,
          performance: '优'
        },
        {
          time: '2021年6月8日n场',
          type: '03:24',
          serial: 2,
          performance: '良'
        },
        {
          time: '2021年6月8日n场',
          type: '03:24',
          serial: 2,
          performance: '良'
        }
      ],
      tableData2: [
        {
          a: 'xx圈',
          b: 'xx段',
          c: '弯道',
          d: 'Xm/s ',
          e: '优'
        },
        {
          a: 'xx圈',
          b: 'xx段',
          c: '弯道',
          d: 'Xm/s ',
          e: '优'
        },
        {
          a: 'xx圈',
          b: 'xx段',
          c: '弯道',
          d: 'Xm/s ',
          e: '优'
        },
        {
          a: 'xx圈',
          b: 'xx段',
          c: '弯道',
          d: 'Xm/s ',
          e: '优'
        }
      ],
      raceType: 0,
      raceType2: 1
    }
  }
}
</script>
<style lang="scss" scoped></style>
