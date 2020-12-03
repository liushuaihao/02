<template>
  <div>
    <headerCard :athlateInfo="athlateInfo" />
    <el-card>
      <div class="securityCenter">
        <h3>分析与可视化</h3>
        <!--  -->
        <el-tabs type="border-card" v-model="tabPane">
          <el-tab-pane name="data" label="统计数据">
            <dataView />
          </el-tab-pane>
          <el-tab-pane name="chart" label="图表显示">
            <template v-if="tabPane == 'chart'">
              <chartView></chartView>
            </template>
          </el-tab-pane>
          <el-tab-pane name="target" label="指标生成">
            <targetView v-if="tabPane == 'target'" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script>
import { basicInfo, biophysInfo } from '@/api/athlete.js'
export default {
  components: {
    headerCard: () => import('./../components/headerCard'),
    originalView: () => import('./../components/originalView'),
    dataView: () => import('./../components/dataView/index2.vue'),
    chartView: () => import('./../components/chartView/index2.vue'),
    targetView: () => import('./../components/targetView')
  },
  data() {
    const generateData = _ => {
      const data = []
      const cities = ['小明', '小王', '小花']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index
        })
      })
      return data
    }

    return {
      data: generateData(),
      value1: [0],
      tabPane: 'data',
      // 查询条件
      formQurey: {
        region: '' // 运动员
      },
      value: '',
      // 选择框
      selectOption: [
        {
          label: '小明',
          value: 0
        },
        {
          label: '小王',
          value: 1
        },
        {
          label: '小花',
          value: 2
        }
      ],
      listData: [
        {
          name: '小张',
          id: 0
        },
        {
          name: '小王',
          id: 1
        }
      ],
      dataForm: {
        type: '1'
      },

      // 运动员个人信息
      athlateInfo: {}
    }
  },
  computed: {},
  created() {},
  mounted() {
    basicInfo({ athleteid: 1 }).then(res => {
      console.log(res)
      this.athlateInfo = res
    })
    biophysInfo({ athletes: [1, 2, 3], 'start-date': '2019-11-01 00:00:00', 'stop-date': '2020-01-01 00:00:00' }).then(res => {
      console.log(res)
    })
  },
  methods: {
    // 时间范围
    datePicker(e) {
      this.$set(this.dataForm, 'end_time', e.end_time)
      this.$set(this.dataForm, 'start_time', e.start_time)
    },
    //
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    // 粒度
    selectGranularity(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
.securityCenter {
  width: 100%;
  height: auto;

  // background-color:#fff;
  .col {
    padding-bottom: 5px;
    font-weight: 500;
  }

  .form {
    padding: 10px 0;
  }
}
</style>
