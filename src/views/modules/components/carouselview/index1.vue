<template>
  <div class="score_cont">
    <el-form class="el-form--inline">
      <el-form-item style="margin-right:50px">
        <el-radio class="radio" v-model="raceType" :label="0">关联图谱模式</el-radio>
        <el-radio class="radio" v-model="raceType" :label="1">关联表格模式</el-radio>
      </el-form-item>
      <el-form-item label="要素检索">
        <el-select v-model="value2" clearable style="margin-left: 20px;" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    

    <div class="tableMode" v-if="raceType == 1">
      <div>
        <el-table :data="tableData3" align="center">
          <el-table-column prop="a" label="序号"></el-table-column>
          <el-table-column prop="b" label="关联要素"></el-table-column>
          <el-table-column prop="c" label="成绩"></el-table-column>
          <el-table-column prop="d" label="关联类型"></el-table-column>
          <el-table-column prop="e" label="百分比"></el-table-column>
        </el-table>
      </div>
      <div>
          <el-table :data="tableData3" align="center">
          <el-table-column prop="a" label="序号"></el-table-column>
          <el-table-column prop="b" label="关联要素"></el-table-column>
          <el-table-column prop="c" label="成绩"></el-table-column>
          <el-table-column prop="d" label="关联类型"></el-table-column>
          <el-table-column prop="e" label="百分比"></el-table-column>
        </el-table>
      </div>
      <div>
          <el-table :data="tableData3" align="center">
          <el-table-column prop="a" label="序号"></el-table-column>
          <el-table-column prop="b" label="关联要素"></el-table-column>
          <el-table-column prop="c" label="成绩"></el-table-column>
          <el-table-column prop="d" label="关联类型"></el-table-column>
          <el-table-column prop="e" label="百分比"></el-table-column>
        </el-table>
      </div>
    </div>

    <chartView v-if="raceType == 0" />
    <div>
      <h3>关联显示</h3>
      <div></div>
      <el-card>
        <h4>关联详情</h4>
        <div class="particulars">
          <div class="particulars_left">
            <div class="demo-input-suffix">
              关联关系：
              <span>血尿素→血红蛋白</span>
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
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="demo-input-suffix">
              关联时间：
              <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </div>
          <div class="particulars_right">
            <h4>关联范围</h4>
            <div>
              <chartTopright />
            </div>
            <div>
              <chartTopright />
            </div>
            <div class="chart_title">
              <div>血尿素</div>
              <div>血红蛋白</div>
            </div>
          </div>
        </div>
      </el-card>
      <el-card>
        <h4>关联成绩</h4>
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
          c:'良好',
          d:'正相关',
          e:80,
        },
        {
          a: 1,
          b: '体脂→体重',
          c:'良好',
          d:'正相关',
          e:80,
        },
        {
          a: 2,
          b: '体脂→体重',
          c:'良好',
          d:'正相关',
          e:80,
        },
        {
          a: 3,
          b: '体脂→体重',
          c:'良好',
          d:'正相关',
          e:80,
        },
        {
          a: 4,
          b: '体脂→体重',
          c:'良好',
          d:'正相关',
          e:80,
        },
      ]

      //   tableData1: [
      //     { id: 1, drillTime: '启动阶段', mean: '2', max: '5', min: '5', std: '1', median: '2', skewness: '5', isTrue: 1 },
      //     { id: 2, drillTime: '冲刺阶段', mean: '2', max: '6', min: '4', std: '1', median: '2', skewness: '5', isTrue: 0 },
      //     { id: 3, drillTime: '直道赛段', mean: '2', max: '7', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
      //     { id: 4, drillTime: '弯道赛段', mean: '2', max: '8', min: '2', std: '1', median: '2', skewness: '5', isTrue: 0 },
      //     { id: 5, drillTime: '赛段全程', mean: '2', max: '9', min: '1', std: '1', median: '2', skewness: '5', isTrue: 1 }
      //   ],
      //   tableData2: [
      //     { id: 1, drillTime: '2020年12月02日01次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
      //     { id: 2, drillTime: '2020年12月02日02次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 },
      //     { id: 3, drillTime: '2020年12月02日03次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
      //     { id: 4, drillTime: '2020年12月02日04次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 0 },
      //     { id: 5, drillTime: '2020年12月02日05次', mean: '2', max: '3', min: '3', std: '1', median: '2', skewness: '5', isTrue: 1 }
      //   ]
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

.tableMode > div {
  width: 33.33%;
  float: left;
}
</style>
