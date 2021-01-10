<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <el-form class="el-form--inline">
            <el-form-item label="赛段选择">
              <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="target_score_visaul_cont">
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
              <el-button size="medium">保存</el-button>
              <el-button size="medium" @click=";(isShow = !isShow), _click()">指标评估</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <chartBomright v-loading="isShow" title="多场次成绩变化" y="s" :legendData="legendData" :seriesData="seriesData" ref="chartBomright"></chartBomright>
          <chartTopleft v-loading="isShow" ref="chartTopleft2" title="运动员优秀成绩比例" :xDatap="yDatap" :yDatap="legendData"></chartTopleft>
          <el-form class="el-form--inline"
            ><el-form-item label="运动员">
              <el-select v-model="value" clearable style="margin-left: 20px;" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="赛段选择">
              <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
                <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <chartTopleft v-loading="isShow" ref="chartTopleft" title="综合评分：(50%)" :xDatap="xData" :yDatap="chart2"></chartTopleft>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import chartBomright from './../chartView/chartBomright.vue'
import chartTopleft from './../chartView/chartTopleft.vue'
import chartXColumn from './../chartView/chartXColumn.vue'
export default {
  components: {
    chartBomright,
    chartXColumn,
    chartTopleft
  },
  data() {
    const expertsIndicatorsList = [
      {
        id: 1,
        title: '优秀范围',
        startVal: '',
        endVal: '',
        value: '',
        valList: ['12-12', '12-5']
      },
      {
        id: 2,
        title: '良好范围',
        startVal: '',
        endVal: '',
        value: '',
        valList: ['12-2', '12-2']
      },
      {
        id: 3,
        title: '中等范围',
        startVal: '',
        endVal: '',
        value: '',
        valList: ['12-1', '12-5']
      },
      {
        id: 4,
        title: '偏差范围',
        startVal: '',
        endVal: '',
        value: '',
        valList: ['12-1', '12-5']
      }
    ]
    return {
      chart2: ['优秀范围', '良好范围', '中等范围', '偏差范围'],
      raceType: 1,
      yDatap: [20, 30, 10, 50],
      xData: [20, 30, 10, 50],
      expertsIndicatorsList: expertsIndicatorsList,
      targetData: [],
      scoreRange: 1,
      legendData: ['王小虎', '李小芳', '张大壮', '赵大强'],
      seriesData: [
        {
          name: '王小虎',
          type: 'line',
          smooth: true,
          data: [10, 20, 30, 134, 90, 230, 210]
        },
        {
          name: '李小芳',
          type: 'line',
          smooth: true,
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '张大壮',
          type: 'line',
          smooth: true,
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: '赵大强',
          type: 'line',
          smooth: true,
          data: [200, 10, 300, 20, 90, 50, 300]
        }
      ],
      isShow: false,
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
      options3: [
        {
          value: '选项1',
          label: '启动阶段'
        },
        {
          value: '选项2',
          label: '冲刺阶段'
        },
        {
          value: '选项3',
          label: '直道赛段'
        },
        {
          value: '选项4',
          label: '弯道赛段'
        },
        {
          value: '选项5',
          label: '赛段全程'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '启动阶段'
        },
        {
          value: '选项2',
          label: '冲刺阶段'
        },
        {
          value: '选项3',
          label: '直道赛段'
        },
        {
          value: '选项4',
          label: '弯道赛段'
        },
        {
          value: '选项5',
          label: '赛段全程'
        }
      ]
    }
  },
  watch: {
    value(a) {
      this.xData = []
      this.$nextTick(() => {
        for (let i = 0; i < 7; i++) {
          this.xData.push(this.$randomVal(0, 80))
          this.$refs.chartTopleft.getEchartsData()
        }
      })
    }
  },
  methods: {
    _click() {
      this.xData = []
      this.yDatap = []
      setTimeout(() => {
        this.isShow = false
        this.$nextTick(() => {
          for (let i = 0; i < 7; i++) {
            this.xData.push(this.$randomVal(0, 80))
            this.yDatap.push(this.$randomVal(0, 80))
            this.$refs.chartTopleft.getEchartsData()
            this.$refs.chartTopleft2.getEchartsData()
          }
        })
      }, 1000)
    }
  },
  mounted() {}
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
</style>
