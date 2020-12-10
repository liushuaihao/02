<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="12"> <chartView2 /></el-col>
        <el-col :span="12">
          <el-row :gutter="20">
            <el-col :span="12">
              <h4>全程评估</h4>
              <el-table :data="tableData1" align="center">
                <el-table-column prop="a" label="场次名称"></el-table-column>
                <el-table-column prop="b" label="耗时"></el-table-column>
                <el-table-column prop="c" label="排名"></el-table-column>
                <el-table-column prop="d" label="评分"></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <h4>赛段评估</h4>
              <el-table :data="tableData1" align="center">
                <el-table-column prop="a" label="圈"></el-table-column>
                <el-table-column prop="b" label="段"></el-table-column>
                <el-table-column prop="c" label="类型"></el-table-column>
                <el-table-column prop="d" label="速度"></el-table-column>
                <el-table-column prop="e" label="评分"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 降序升序最优最差全部 -->
      <el-row :gutter="20">
        <el-col :span="12"> <chartView3 /> </el-col>
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
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
