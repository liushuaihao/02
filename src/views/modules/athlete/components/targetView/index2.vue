<template>
  <div>
    <!-- 上面横向滚动数据 -->
    <div class="x_target_data_cont">
      <div class="x_target_data">
        <el-card class="item_cont" v-for="(item, index) in targetData" :key="item.id">
          <div class="title item">
            <span>个人指标：</span>
            <span>{{ item.name }}</span>
          </div>
          <div class="updata_time item">
            <span>更新时间：</span>
            <span>{{ item.updateTime }}</span>
          </div>
          <div class="pursuant_btn item">
            <span>责任专家：</span>
            <el-link type="primary">{{ item.speciallist }}</el-link>
          </div>
          <el-button @click="checkTarget(item, index)">加载/查看</el-button>
          <el-button>更新/生成指标</el-button>
        </el-card>
      </div>
    </div>

    <!-- 专家指标设置./可视化 -->
    <el-row v-loading="loading" class="target_score_visaul_cont">
      <el-col :span="12" class="target_score">
        <el-card>
          <div class="info_title">专家指标设置</div>
          <el-row class="speciallist_cont" v-for="item in expertsIndicatorsList" :key="item.id">
            <el-col :span="8" class="target_score_visaul_cont_l">
              <span>{{ item.title }}</span>
              <el-input v-model="item.startVal"></el-input>
            </el-col>
            <el-col :span="8" class="target_score_visaul_cont_r">
              <span>{{ '至' }}</span>
              <el-input v-model="item.endVal"></el-input>
              <el-card>+</el-card>
            </el-col>
            <el-col :span="8" class="target_score_visaul_cont_r">
              <el-select v-model="item.value" placeholder="请选择">
                <el-option v-for="(items, index) in item.valList" :key="index" :label="items" :value="items"> </el-option>
              </el-select>
            </el-col>
          </el-row>

          <div style="text-align:right">
            <el-button :disabled="!currentTitle" size="medium" @click=";(lineIndex = 0), showTargetScore()">指标评估</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :offset="1" :span="11" class="target_visual">
        <el-card>
          <div class="info_title">指标参数可视化</div>
          <el-form>
            <el-form-item label="参数选择">
              <el-radio :disabled="!currentTitle" v-for="city in cities" :label="city.type" :key="city.type" v-model="visualType">{{ city.name }}</el-radio>
            </el-form-item>
          </el-form>
          <div>
            <chartTopright ref="chartRight" :y="cities[visualType].u" :title="currentTitle" :bDatap="yDataBar" :yDatap="yDataLine"></chartTopright>
            <div v-loading="showTargetScoreCont" v-if="isShow">
              <!-- 横向数据展示 -->
              <chartTopleft ref="chartTopleft" :title="'综合评分:(' + line[lineIndex].type + line[lineIndex].number + '%)'" :xDatap="xData" :yDatap="yData"></chartTopleft>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import chartTopright from './../chartView/chartTopright.vue'
import chartTopleft from './../chartView/chartTopleft.vue'
import cloneDeep from 'lodash/cloneDeep'
const targetData = [
  { id: 1, name: '王小虎', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 2, name: '李小芳', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 3, name: '张大壮', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 4, name: '赵大强', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 5, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 6, name: '小王', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 7, name: '小李', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' }
]
const expertsIndicatorsList = [
  {
    id: 1,
    title: '髋关节',
    startVal: '',
    endVal: '',
    value: '',
    valList: ['12-15', '14-23']
  },
  {
    id: 2,
    title: '踝关节',
    startVal: '',
    endVal: '',
    value: '',
    valList: ['23-28', '12-25']
  },
  {
    id: 3,
    title: '膝关节',
    startVal: '',
    endVal: '',
    value: '',
    valList: ['34-45', '22-45']
  },
  {
    id: 4,
    title: '左脚蹬冰角度',
    startVal: '',
    endVal: '',
    value: '',
    valList: ['34-55', '42-55']
  }
]
const citiess = [
  { u: '%', name: '髋关节', type: 0 },
  { u: '%', name: '踝关节', type: 1 },
  { u: '%', name: '膝关节', type: 2 },
  { u: '%', name: '左脚蹬冰角度', type: 3 }
]
export default {
  components: { chartTopright, chartTopleft },
  data() {
    return {
      isShow: false,
      checkedCities: [],
      cities: citiess,
      targetData: targetData,
      // 专家指标设置数据
      expertsIndicatorsList: expertsIndicatorsList,
      scoreRange: 1,
      yDataBar: [],
      yDataLine: [],
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
      currentTitle: '',
      yData: ['髋关节', '踝关节', '膝关节', '左脚蹬冰角度'],
      loading: false,
      showTargetScoreCont: false,
      ind: ''
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
  mounted() {},
  methods: {
    // 显示评估、
    showTargetScore() {
      this.showTargetScoreCont = true
      this.xData = []
      setTimeout(() => {
        this.isShow = true
        this.showTargetScoreCont = false
        this.$nextTick(() => {
          if (this.xData.length) this.xData = []
          for (let i = 0; i < 7; i++) {
            this.xData.push(this.$randomVal(0, 80))
          }
          this.$refs.chartTopleft.getEchartsData()
        })
      }, 1000)
    },
    checkTarget(item, index) {
      this.ind = index
      this.loading = true
      // console.log(item)
      let list = cloneDeep(expertsIndicatorsList)
      list.filter(item => {
        // console.log(item.valList)
        item.value = item.valList[0]
        item.startVal = this.$randomVal(30, 50)
        item.endVal = this.$randomVal(60, 90)
      })
      setTimeout(() => {
        this.loading = false
        // 图表标题
        this.currentTitle = '髋关节'
        this.visualType = 0
        // 传递X轴数据
        this.yDataLine = []
        this.yDataBar = []
        for (let i = 0; i < 7; i++) {
          this.yDataLine.push(this.$randomVal(10, 90))
          this.yDataBar.push(this.$randomVal(10, 90))
        }
        this.expertsIndicatorsList = list
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.x_target_data_cont {
  overflow-x: scroll;
  margin-bottom: 30px;

  .x_target_data {
    white-space: nowrap;
    margin-bottom: 20px;
    padding: 2px 0 0 2px;

    .item_cont {
      display: inline-block;
      border: 1px solid #ddd;
      margin-right: 20px;

      .item {
        padding: 3px 0;
      }

      .create_target {
        position: relative;
        left: 45%;
        top: 3px;
      }
    }
  }
}
.target_score_visaul_cont {
  .info_title {
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
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
      margin-right: 6px;
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
  margin: 20px 0;
  span {
    width: 100%;
    display: inline-block;
    transform: translate(50%, -20px);
  }
}
.tag_cont {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  & > div {
    display: flex;
    align-items: center;
  }
  .tag {
    display: inline-block;
    width: 30px;
    height: 20px;
    margin-right: 10px;
  }
  span {
    margin-right: 20px;
  }
}
.active {
  box-shadow: 10px 10px firebrick;
}
</style>
