<template>
  <div>
    <p>
      <el-button size="medium">智能分析/结果显示</el-button>
    </p>
    <!--可视化 -->
    <el-row class="target_score_visaul_cont">
      <el-col :span="12" class="target_visual">
        <el-card>
          <div class="info_title">范围显示图表</div>
          <el-form>
            <el-form-item label="参数选择">
              <el-radio v-for="city in cities" :label="city.type" :key="city.type" v-model="visualType">{{ city.name }}</el-radio>
            </el-form-item>
          </el-form>
          <div>
            <chartTopright ref="chartRight" :title="currentTitle" :bDatap="bDatap"></chartTopright>
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
              <div class="line_item" v-for="(item, index) in line" :key="index" :style="{ width: item.number + '%', height: '20px', background: item.bgColor }">
                <span>{{ item.number }}%</span>
              </div>
            </div>
            <div class="tag_cont">
              <div v-for="(item, index) in line" :key="index">
                <i class="tag" :style="{ background: item.bgColor }"></i>
                <span>{{ item.type }}</span>
              </div>
            </div>
            <chartTopleft ref="chartTopleft" :xDatap="xData" :title="'综合评分：90分'"></chartTopleft></div
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
  { name: '血红蛋白', type: 0 },
  { name: '血睾酮', type: 1 },
  { name: '血尿素', type: 2 },
  { name: '体质', type: 3 },
  { name: '体重', type: 4 },
  { name: '皮质醇', type: 5 },
  { name: 'BMI', type: 6 }
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
          name: '体质',
          value: 10
        }
      ],
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
      xData: ['BMI', '体脂率', '体重', '血红蛋白', '血尿素', '血睾酮', '皮质醇']
    }
  },
  watch: {
    checked1(a) {
      this.bDatap = a ? [0, 0, 100, 0, 0, 0, 0] : []
    },
    visualType(a, b) {
      console.log(this.cities[a].name)
      this.currentTitle = this.cities[a].name
    }
  },
  mounted() {}
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
