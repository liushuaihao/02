<template>
  <div>
    <!-- 上面横向滚动数据 -->
    <div class="x_target_data_cont">
      <div class="x_target_data">
        <el-card class="item_cont" v-for="item in targetData" :key="item.id">
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
          <el-button>加载/查看</el-button>
          <el-button>更新/生成指标</el-button>
        </el-card>
      </div>
    </div>

    <!-- 专家指标设置./可视化 -->
    <el-row class="target_score_visaul_cont">
      <el-col :span="12" class="target_score">
        <div class="info_title">专家指标设置</div>
        <el-row class="speciallist_cont" v-for="item in formatExpertsIndicatorsList" :key="item.id">
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
              <el-option v-for="(val, index) in item.valList" :key="index" :label="item.value" :value="val.value"> </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
      <el-col :offset="1" :span="11" class="target_visual">
        <div class="info_title">指标参数可视化</div>
        <el-form>
          <el-form-item label="参数选择">
            <el-radio v-for="city in cities" :label="city.type" :key="city.type" v-model="visualType">{{ city.name }}</el-radio>
          </el-form-item>
        </el-form>
        <div>
          <chartTopright ref="chartRight" :bDatap="bDatap"></chartTopright>
        </div>
      </el-col>
      <el-col :span="24">
        <el-row :gutter="20" class="flex">
          <el-col :span="5"><el-button>生成指标</el-button></el-col>
          <el-col :span="5"><el-checkbox v-model="checked1" label="指标可视化" border></el-checkbox></el-col>
        </el-row>
      </el-col>
    </el-row>

    <div>
      <div v-for="(item, index) in line" :key="index" :style="{ width: item.number + '%' }"></div>
    </div>
  </div>
</template>
<script>
import chartTopright from './../chartView/chartTopright.vue'
import cloneDeep from 'lodash/cloneDeep'
const targetData = [
  { id: 1, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 2, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 3, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 4, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 5, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 6, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' },
  { id: 7, name: '小张', updateTime: '2020-02-02 14:11:11', speciallist: '李宏宇' }
]
const expertsIndicatorsList = [
  {
    id: 1,
    title: 'BMI',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 2,
    title: '体脂率',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 3,
    title: '体重',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 4,
    title: '血红蛋白',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 5,
    title: '血尿素',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 6,
    title: '血睾酮',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  },
  {
    id: 7,
    title: '皮质醇',
    startVal: '',
    endVal: '',
    value: '',
    valList: [
      { startVal: 12, endVal: 22 },
      { startVal: 12, endVal: 22 }
    ]
  }
]
const citiess = [
  { name: '血红蛋白', type: 1 },
  { name: '血睾酮', type: 2 },
  { name: '血尿素', type: 3 },
  { name: '体质', type: 4 },
  { name: '体重', type: 5 },
  { name: '皮质醇', type: 6 },
  { name: 'BMI', type: 7 }
]
export default {
  components: {
    chartTopright
  },
  computed: {
    formatExpertsIndicatorsList() {
      let list = cloneDeep(this.expertsIndicatorsList)
      list.forEach(l => l.valList.forEach(i => (i.value = i.startVal + '-' + i.endVal)))
      console.log(list)
      return list
    }
  },
  data() {
    return {
      checkedCities: [],
      cities: citiess,
      targetData: [],
      // 专家指标设置数据
      expertsIndicatorsList: expertsIndicatorsList,
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
          number: 30,
          name: ''
        },
        {
          number: 10,
          name: ''
        },
        {
          number: 10,
          name: ''
        },
        {
          number: 30,
          name: ''
        },
        {
          number: 20,
          name: ''
        }
      ],
      visualType: 1
    }
  },
  watch: {
    checked1(a) {
      this.bDatap = a ? [0, 0, 100, 0, 0, 0, 0] : []
    },
    visualType(a, b) {
      console.log(a)
      this.bDatap = [0, 0, 100, 0, 0, 10, 0]
      this.$refs.chartRight.getEchartsData()
    }
  },
  mounted() {
    this.targetData = targetData
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
</style>
