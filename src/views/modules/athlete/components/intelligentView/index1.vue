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
            <chartTopright :y="cities[visualType].u" ref="chartRight" :title="currentTitle" :bDatap="bDatap" :yDatap="yDataLine"></chartTopright>
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
            <div class="flex">
              <div
                class="line_item"
                @click=";(lineIndex = index), colorBar()"
                v-for="(item, index) in line"
                :key="index"
                :style="{ width: item.number + '%', height: '20px', background: item.bgColor }"
              >
                <span>{{ item.number }}%</span>
              </div>
            </div>
            <div class="tag_cont">
              <div v-for="(item, index) in line" :key="index">
                <i class="tag" :style="{ background: item.bgColor }"></i>
                <span>{{ item.type }}</span>
              </div>
            </div>
            <chartTopleft ref="chartTopleft" :title="'综合评分:(' + line[lineIndex].type + line[lineIndex].number + '%)'" :xDatap="xData" :yDatap="yData"></chartTopleft></div
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
  { u: 'g/l', name: '血红蛋白', type: 0 },
  { u: 'mmol/L', name: '血睾酮', type: 1 },
  { u: 'mmol/L', name: '血尿素', type: 2 },
  { u: '%', name: '体脂', type: 3 },
  { u: 'kg', name: '体重', type: 4 },
  { u: 'ng/L', name: '皮质醇', type: 5 },
  { u: '', name: 'BMI', type: 6 }
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
      bDatap: [0, 0, 100, 0, 0, 0, 0],
      bar: [
        {
          name: '血红蛋白',
          value: 20
        },
        {
          name: '血睾酮',
          value: 30
        },
        {
          name: '血尿素',
          value: 20
        },
        {
          name: '体脂',
          value: 10
        }
      ],
      lineIndex: 0,
      line: [
        {
          number: 50,
          type: '差',
          bgColor: '#F5E027'
        },
        {
          number: 30,
          type: '中',
          bgColor: '#B795DD'
        },
        {
          number: 20,
          type: '良',
          bgColor: '#56B504'
        },
        {
          number: 10,
          type: '优',
          bgColor: '#DD2D21'
        }
      ],
      visualType: 0,
      currentTitle: '血红蛋白',
      xData: [],
      yData: ['BMI', '皮质醇', '体重', '体脂率', '血尿素', '血睾酮', '血红蛋白'],
      loading: false
    }
  },
  watch: {
    checked1(a) {
      this.bDatap = a ? [0, 0, 100, 0, 0, 0, 0] : []
    },
    visualType(a, b) {
      // console.log(this.cities[a].name)
      this.currentTitle = this.cities[a].name
      // 传递X轴数据
      this.bDatap = []
      this.yDataLine = []
      for (let i = 0; i < 7; i++) {
        this.yDataLine.push(this.$randomVal(10, 90))
        this.bDatap.push(this.$randomVal(10, 90))
      }
    }
  },
  created() {
    this.$nextTick(() => {
      if (this.xData.length) this.xData = []
      for (let i = 0; i < 7; i++) {
        this.xData.push(this.$randomVal(0, 80))
      }
      this.$refs.chartTopleft.getEchartsData()
    })
  },
  mounted() {},
  methods: {
    colorBar() {
      if (this.xData.length) this.xData = []
      for (let i = 0; i < 7; i++) {
        this.xData.push(this.$randomVal(0, 80))
      }
      this.$refs.chartTopleft.getEchartsData()
    },
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
  margin-bottom: 20px;
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
