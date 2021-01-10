<template>
  <div>
    <p>
      <el-button size="medium" @click="checkTarget()">智能分析/结果显示</el-button>
    </p>
    <!--可视化 -->
    <el-row class="target_score_visaul_cont" v-loading="loading">
      <el-col :span="12" class="target_visual">
        <el-card>
          <div class="info_title">范围显示图表</div>
          <el-form>
            <el-form-item label="参数选择">
              <el-radio v-for="city in cities" :label="city.type" :key="city.type" v-model="visualType">{{ city.name }}</el-radio>
            </el-form-item>
          </el-form>
          <div>
            <chartTopright ref="chartRight" :title="currentTitle" :bDatap="yDataBar" :yDatap="yDataLine"></chartTopright>
          </div>
          <div>
            <div class="info_title">范围列表 {{ currentTitle }}</div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="序号"> </el-table-column>
              <el-table-column prop="min" label="最小"> </el-table-column>
              <el-table-column prop="max" label="最大"> </el-table-column>
            </el-table></div
        ></el-card>
      </el-col>
      <el-col :offset="1" :span="11">
        <el-card>
          <div>
            <chartTopleft ref="chartTopleft" :xDatap="xData" :yDatap="yData" :title="'综合评分：90分'"></chartTopleft></div
        ></el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import chartTopright from './../chartView/chartTopright.vue'
import chartTopleft from './../chartView/chartTopleft.vue'
import cloneDeep from 'lodash/cloneDeep'

const citiess = [
  { name: '髋关节', type: 0 },
  { name: '踝关节', type: 1 },
  { name: '膝关节', type: 2 },
  { name: '左脚蹬冰角度', type: 3 }
]
export default {
  components: { chartTopright, chartTopleft },
  data() {
    return {
      tableData: [{ name: 2, min: 1, max: 3 }],
      isShow: false,
      checkedCities: [],
      cities: citiess,
      scoreRange: 1,
      checked1: false,
      xData: [50, 60, 80, 40],
      visualType: 0,
      currentTitle: '髋关节',
      yData: ['髋关节', '踝关节', '膝关节', '左脚蹬冰角度'],
      yDataBar: [],
      yDataLine: [],
      loading: false
    }
  },
  watch: {
    visualType(a, b) {
      // console.log(this.cities[a].name)
      this.currentTitle = this.cities[a].name
      // 传递X轴数据
      this.yDataLine = []
      this.yDataBar = []
      for (let i = 0; i < 7; i++) {
        this.yDataLine.push(this.$randomVal(10, 90))
        this.yDataBar.push(this.$randomVal(10, 90))
      }
    }
  },
  mounted() {
    this.checkTarget()
  },
  methods: {
    checkTarget() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        // 传递X轴数据
        this.yDataLine = []
        this.yDataBar = []
        for (let i = 0; i < 7; i++) {
          this.yDataLine.push(this.$randomVal(10, 90))
          this.yDataBar.push(this.$randomVal(10, 90))
        }
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.target_score_visaul_cont {
  .info_title {
    padding-bottom: 15px;
    font-weight: bold;
  }
  .speciallist_cont {
    margin: 5px 0;
  }
  .target_score_visaul_cont_l {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 80px;
      text-align: center;
    }
    .el-input {
      width: 60%;
      box-sizing: border-box;
      margin-right: 10px;
    }
  }

  .target_score_visaul_cont_r {
    display: flex;
    align-items: center;
    .el-input {
      width: 60%;
      margin-left: 10px;
      margin-right: 15px;
    }
    /deep/.el-card__body {
      padding: 6px 8px;
    }
    .title {
      margin-right: 30px;
    }

    .track {
      background-color: pink;
      width: 100px;
      height: 180px;
    }
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.line_item {
  position: relative;
  margin-top: 50px;
  span {
    width: 100%;
    display: inline-block;
    transform: translate(50%, -20px);
  }
}
.tag_cont {
  display: flex;
  & > div {
    display: flex;
    align-items: center;
  }
  .tag {
    display: inline-block;
    width: 30px;
    height: 20px;
    margin-top: 20px;
    margin-right: 20px;
  }
  span {
    margin-right: 20px;
  }
}
</style>
