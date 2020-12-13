<template>
  <div class="score_cont">
    <el-form class="el-form--inline">
      <el-form-item style="margin-right:50px">
        <el-radio class="radio" v-model="raceType" :label="0">关联图谱模式</el-radio>
        <el-radio class="radio" v-model="raceType" :label="1">关联表格模式</el-radio>
      </el-form-item>
      <el-form-item label="要素检索">
        <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-card v-if="raceType == 1">
      <div class="tableMode">
        <div>
          <el-table :data="tableData3" align="center">
            <el-table-column prop="a" label="序号"></el-table-column>
            <el-table-column prop="b" min-width="150px" label="关联要素"></el-table-column>
            <el-table-column prop="c" label="成绩"></el-table-column>
            <el-table-column prop="d" label="关联类型"></el-table-column>
            <el-table-column prop="e" label="百分比"></el-table-column>
          </el-table>
        </div>
        <div>
          <el-table :data="tableData4" align="center">
            <el-table-column prop="a" label="序号"></el-table-column>
            <el-table-column prop="b" min-width="150px" label="关联要素"></el-table-column>
            <el-table-column prop="c" label="成绩"></el-table-column>
            <el-table-column prop="d" label="关联类型"></el-table-column>
            <el-table-column prop="e" label="百分比"></el-table-column>
          </el-table>
        </div>
        <div>
          <el-table :data="tableData5" align="center">
            <el-table-column prop="a" label="序号"></el-table-column>
            <el-table-column prop="b" min-width="150px" label="关联要素"></el-table-column>
            <el-table-column prop="c" label="成绩"></el-table-column>
            <el-table-column prop="d" label="关联类型"></el-table-column>
            <el-table-column prop="e" label="百分比"></el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
    <el-card v-if="raceType == 0">
      <chartView v-if="raceType == 0" @itemClick="itemClick" />
    </el-card>
    <el-card>
      <h4>关联详情</h4>
      <div v-if="source">
        <div v-loading="loading" class="particulars">
          <div class="particulars_left">
            <div class="demo-input-suffix">
              关联关系：
              <span>{{ source }}→{{ target }}</span>
            </div>
            <div class="demo-input-suffix">
              关联系数：
              <span>0.9</span>
            </div>
            <div class="demo-input-suffix">
              关联类型：
              <span>300条</span>
            </div>
            <div class="demo-input-suffix">
              关联时域：
              <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <div class="demo-input-suffix">
              关联时间：
              <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </div>
          <div class="particulars_right">
            <div>
              <chartTopright title="血尿素" :yDatap="yDataLine" :bDatap="yDataBar" />
            </div>
            <div>
              <chartTopright title="血红蛋白" :yDatap="yDataLine2" :bDatap="yDataBar2"  />
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card>
      <div class="performance">
        <div class="performance_f">
          <h4>关联比赛</h4>
          <el-table :data="tableData1" style="width: 100%" align="center">
            <el-table-column prop="serial" label="序号" min-width="100"></el-table-column>
            <el-table-column prop="type" label="比赛类型" min-width="100"></el-table-column>
            <el-table-column prop="time" label="比赛时间" min-width="100"></el-table-column>
            <el-table-column prop="performance" label="比赛成绩" min-width="100"></el-table-column>
          </el-table>
        </div>
        <div class="performance_f">
          <h4>单场信息</h4>
          <div class="oneMessage">
            <div class="oneMessage_left">
              <p>全程成绩</p>
              <p>比赛名次</p>
              <p>最高速度</p>
              <p>起跑速度</p>
              <p>弯道速度</p>
            </div>
            <div class="oneMessage_right"></div>
          </div>
        </div>
      </div>
      <div>
        <h4>赛段成绩</h4>
        <el-table :data="tableData2" style="width: 100%" align="center">
          <el-table-column prop="serial" label="序号" min-width="100"></el-table-column>
          <el-table-column prop="a" label="关联赛段" min-width="100"></el-table-column>
          <el-table-column prop="b" label="当前成绩" min-width="100"></el-table-column>
          <el-table-column prop="c" label="历史最佳" min-width="100"></el-table-column>
          <el-table-column prop="d" label="历史最佳" min-width="100"></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import chartTopright from './../chartView/chartTopright.vue'
import chartView from './../chartView/chart1'
export default {
  components: {
    chartTopright,
    chartView
  },
  data() {
    return {
      source: '',
      target: '',
      date: '',
      raceType: 0,
      value2: '选项1',
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
      ],
      tableData1: [
        {
          serial: 0,
          type: 'xx训练',
          time: '2021年6月8日n场',
          performance: '60'
        },
        {
          serial: 1,
          type: '全国比赛',
          time: '2021年6月8日n场',
          performance: '50'
        },
        {
          serial: 2,
          type: '国际比赛',
          time: '2021年6月8日n场',
          performance: '90'
        },
        {
          serial: 3,
          type: '国际比赛',
          time: '2021年6月8日n场',
          performance: '100'
        },
        {
          serial: 4,
          type: '国际比赛',
          time: '2021年6月8日n场',
          performance: '100'
        },
        {
          serial: 5,
          type: '国际比赛',
          time: '2021年6月8日n场',
          performance: '100'
        }
      ],
      tableData2: [
        {
          serial: 0,
          a: 'x圈x段',
          b: 3,
          c: 6,
          d: 9
        },
        {
          serial: 1,
          a: 'x圈x段',
          b: 3,
          c: 6,
          d: 9
        },
        {
          serial: 2,
          a: 'x圈x段',
          b: 3,
          c: 6,
          d: 9
        },
        {
          serial: 3,
          a: 'x圈x段',
          b: 3,
          c: 6,
          d: 9
        },
        {
          serial: 4,
          a: 'x圈x段',
          b: 3,
          c: 6,
          d: 9
        }
      ],
      tableData3: [
        {
          a: 0,
          b: '体脂→体重',
          c: '良好',
          d: '正相关',
          e: 80
        },
        {
          a: 1,
          b: '体脂→血尿素',
          c: '良好',
          d: '负相关',
          e: 80
        },
        {
          a: 2,
          b: '血尿素→血红蛋白',
          c: '良好',
          d: '域值相关',
          e: 80
        },
        {
          a: 3,
          b: '血红蛋白→血睾酮',
          c: '良好',
          d: '域值相关',
          e: 80
        }
      ],
      tableData4: [
        {
          a: 0,
          b: '体重→左脚蹬冰角度',
          c: '良好',
          d: '正相关',
          e: 80
        },
        {
          a: 1,
          b: '体重→右脚蹬冰角度',
          c: '良好',
          d: '负相关',
          e: 80
        },
        {
          a: 2,
          b: '血尿素→髋关节角度',
          c: '良好',
          d: '域值相关',
          e: 80
        },
        {
          a: 3,
          b: '血尿素→踝关节角度',
          c: '良好',
          d: '域值相关',
          e: 80
        }
      ],
      tableData5: [
        {
          a: 0,
          b: '体重→左脚蹬冰角度',
          c: '良好',
          d: '正相关',
          e: 80
        },
        {
          a: 1,
          b: '体重→右脚蹬冰角度',
          c: '良好',
          d: '负相关',
          e: 80
        },
        {
          a: 2,
          b: '血尿素→髋关节角度',
          c: '良好',
          d: '域值相关',
          e: 80
        },
        {
          a: 3,
          b: '血尿素→踝关节角度',
          c: '良好',
          d: '域值相关',
          e: 80
        }
      ],
      loading: false,
      yDataLine: [],
      yDataBar: [],
      yDataLine2: [],
      yDataBar2: []
    }
  },
  methods: {
    itemClick(data) {
      console.log(data)
      this.loading = true
      setTimeout(() => {
        this.source = data.source
        this.target = data.target
        this.loading = false
        // 图表标题
        this.currentTitle = '血红蛋白'
        this.visualType = 0
        // 传递X轴数据
        this.yDataLine = []
        this.yDataBar = []
        this.yDataLine2 = []
        this.yDataBar2 = []
        for (let i = 0; i < 7; i++) {
          this.yDataLine.push(this.$randomVal(10, 90))
          this.yDataBar.push(this.$randomVal(10, 90))
          this.yDataLine2.push(this.$randomVal(10, 90))
          this.yDataBar2.push(this.$randomVal(10, 90))
        }
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.score_cont {
  .radio_item {
    width: 200px;
    .radio {
      display: block;
      margin: 4px 0;
    }
  }
}
.particulars {
  display: flex;
}
.particulars_left {
  width: 400px;
}
.particulars_right {
  flex-grow: 1;
  overflow: hidden;
}
.particulars_right h4 {
  margin: 0;
}
.particulars_right > div {
  width: 50%;
  float: left;
}
.chart_title {
  display: flex;
  width: 100% !important;
}
.chart_title > div {
  flex: 1;
  text-align: center;
}

.demo-input-suffix {
  height: 38px;
  line-height: 38px;
}
.performance {
  display: flex;
  .performance_f {
    flex: 1;
    .oneMessage {
      display: flex;
      height: 300px;
      .oneMessage_left {
        width: 200px;
        p {
          height: 20%;
          margin: 0;
          text-align: center;
          line-height: 60px;
        }
      }
      .oneMessage_right {
        flex-grow: 1;
      }
    }
  }
}
.tableMode {
  overflow: hidden;
}
.tableMode > div {
  width: 33.33%;
  float: left;
}
</style>
