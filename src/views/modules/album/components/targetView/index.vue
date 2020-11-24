<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <h3>速度策略分析</h3>
          <chartBomright title="全程速度" :series="series" ref="chartBomright"></chartBomright>

          <div>
            <div>
              <div v-for="i in 8" :key="i">位{{ i }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <h3>赛段成绩分析</h3>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import chartBomright from './../chartView/chartBomright.vue'
export default {
  components: {
    chartBomright
  },
  data() {
    return {
      targetData: [],
      scoreRange: 1,
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
      tableData: [
        {
          number: '第一圈',
          number1: {
            a: 1,
            b: -1
          },
          number2: {
            a: 1,
            b: -1
          },
          number3: {
            a: 1,
            b: -1
          },
          number4: {
            a: 1,
            b: -1
          },
          number5: {
            a: 1,
            b: -1
          },
          number6: {
            a: 1,
            b: -1
          },
          number7: {
            a: 1,
            b: -1
          },
          number8: {
            a: 1,
            b: -1
          }
        }
      ]
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
  .target_score_visaul_cont_l {
    padding-top: 80px;
    .left_rectangle_cont {
      border: 1px solid #ddd;
      width: 160px;
      text-align: center;
      padding: 20px;
      position: relative;
      .title {
        position: absolute;
        top: -8px;
        background: #fff;
        font-weight: bold;
        padding: 0 20px 0 10px;
      }
      .el-radio {
        margin: 6px 0;
      }
    }
  }
  .target_score_visaul_cont_r {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
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
