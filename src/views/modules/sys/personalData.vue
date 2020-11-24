<template>
  <div class="content">
    <el-card class="content_left">
      <h3>竞技状态指标</h3>
      <el-card class="target_it" v-for="(itm, ind) in 10" :key="ind">
        <p class="text_tit">全队指标对比</p>
        <p class="text_time">更新时间：2020-11-23</p>
        <p class="text_data">依照数据：点击查看</p>
      </el-card>
    </el-card>
    <el-card class="content_right">
      <h3>分析数据加载</h3>
      <el-form ref="form" :model="form">
        <p>运动员/时间场次筛选</p>
        <el-form-item
          label="指定时间范围
"
          class="T_time"
        >
          <el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"> </el-time-picker>
        </el-form-item>
        <el-form-item label="指定时间周期" class="T_time">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <h3>分析结果展示</h3>
      <el-card style="margin-bottom:10px">
        <h4>总体运动表现</h4>
        <el-table :data="tableData1" height="350" style="width: 100%" align="center">
          <el-table-column prop="type" label="角度类型" min-width="100"> </el-table-column>
          <el-table-column prop="mean" label="最佳范围" min-width="200">
            <template solt-scope="scope">
              <div>
                <chartTopright v-if="isPage" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="质量" min-width="100">
            <template>
              <div>
                <el-button type="warning">良好</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <h4>运动技巧评估</h4>
        <el-table :data="tableData2" height="350" style="width: 100%" align="center">
          <el-table-column prop="type" label="技术类型" min-width="100"> </el-table-column>
          <el-table-column prop="mean" label="最佳范围" min-width="200">
            <template solt-scope="scope">
              <div>
                <chartTopright v-if="isPage" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="质量" min-width="100">
            <template>
              <div>
                <el-button type="warning">良好</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <h4>关联动作质量</h4>
        <el-table :data="tableData3" style="width: 100%" align="center">
          <el-table-column prop="type" label="关联动作" min-width="100"> </el-table-column>
          <el-table-column prop="a" label="当前值" min-width="100"> </el-table-column>
          <el-table-column prop="b" label="最优值" min-width="100"> </el-table-column>
          <el-table-column prop="c" label="偏差值" min-width="100"> </el-table-column>
        </el-table>
      </el-card>
      <div style="text-align:right;margin-bottom:15px">
        <el-button>开始评估</el-button>
        <el-button type="primary">保存结果</el-button>
      </div>
      <el-card>
        <h4>状态评估结果</h4>
        <p>最佳状态34%<el-progress :percentage="34" status="success"></el-progress> 次优状态35%<el-progress :percentage="35" status="warning"></el-progress> 较差状态20%<el-progress :percentage="20" status="exception"></el-progress></p>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="整体竞技状态情况">
            <el-button type="warning">良好</el-button>
          </el-form-item>
          <el-form-item label="竞技状态情况分布">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关联比赛">
            <el-row :gutter="10">
              <el-col :span="8"><el-tag type="success">成绩优秀</el-tag></el-col>
              <el-col :span="8"><el-tag type="warning">成绩良好</el-tag></el-col>
              <el-col :span="8"><el-tag type="danger">成绩不佳</el-tag></el-col>
            </el-row>
          </el-form-item>
        </el-form>
        <el-row :gutter="10" style="margin-bottom:20px">
          <el-col :span="12">
            <p>成绩明细</p>
            <el-card>
              <p>全程成绩</p>
              <p>最高速度</p>
              <p>起跑速度</p>
              <p>弯道速度</p>
            </el-card>
          </el-col>
          <el-col :span="12">
            <p>各个赛段动作质量</p>
            <el-table :data="tableData4" style="width: 100%" align="center">
              <el-table-column prop="type" label="赛段动作" min-width="100"> </el-table-column>
              <el-table-column prop="a" label="当前值" min-width="100"> </el-table-column>
              <el-table-column prop="b" label="最优值" min-width="100"> </el-table-column>
              <el-table-column prop="c" label="偏差值" min-width="100"> </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-card>
    </el-card>
  </div>
</template>
<script>
import chartTopright from './components/chartView/chartTopright.vue'
const cityOptions = ['血红蛋白', '血睾酮', '血尿素', '体质']
export default {
  components: {
    chartTopright
  },
  data() {
    return {
      tableData1: [
        {
          type: '髋关节角'
        },
        {
          type: '度踝关节角度'
        },
        {
          type: '踝关节角度'
        },
        {
          type: '膝关节角度'
        },
        {
          type: '左脚蹬冰角度'
        }
      ],
      tableData2: [
        {
          type: '直道技术'
        },
        {
          type: '入弯技术'
        },
        {
          type: '出弯技术'
        }
      ],
      tableData3: [
        {
          type: '髋关节角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '膝关节角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '踝关节角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '左脚蹬冰角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '右脚蹬冰角度',
          a: 1,
          b: 2,
          c: 3
        }
      ],
      tableData4: [
        {
          type: '髋关节角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '膝关节角度',
          a: 1,
          b: 2,
          c: 3
        },
        {
          type: '踝关节角度',
          a: 1,
          b: 2,
          c: 3
        }
      ],
      cities: cityOptions,
      checkedCities: [],
      options: [
        {
          value: '选项1',
          label: '分钟'
        },
        {
          value: '选项2',
          label: '小时'
        },
        {
          value: '选项3',
          label: '场次'
        }
      ],
      value: '',
      value1: '',
      form: {},
      formInline: {},
      isPage: true
    }
  },
  computed: {},
  created() {},
  mounted() {},
  activated() {
    this.isPage = false
    this.isPage = true
  },
  methods: {
    handleCheckedCitiesChange(value) {},
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>
<style lang="scss" scoped>
.ma_l {
  margin-left: 20px;
}
.ma_r {
  margin-right: 40px;
}
.center {
  text-align: center;
}
.el-form-item {
  margin-bottom: 15px;
}
.aui-wrapper .el-card + .el-card {
  margin-top: 0px;
}
.content {
  display: flex;
  .content_left {
    width: 25%;
    height: calc(100vh - 120px);
    overflow-y: auto;
    .target_it {
      border: 1px solid #ccc;
      width: 90%;
      margin: 0 auto;
      line-height: 1;
      margin-bottom: 10px;
      .text_tit {
        font-size: 18px;
        text-align: center;
        margin: 0;
      }
      .text_time {
        margin: 10px 0;
      }
      .text_data {
        margin: 0;
      }
    }
  }
  .content_right {
    width: 75%;
    height: calc(100vh - 120px);
    margin-top: 0;
    margin-left: 15px;
    overflow-y: auto;
  }
}
</style>
