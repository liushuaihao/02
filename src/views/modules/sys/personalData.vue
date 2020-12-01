<template>
  <div>
    <headerCard />
    <el-card>
      <div class="securityCenter">
        <h3>分析阶段</h3>
        <!--  -->
        <el-tabs type="border-card" v-model="tabPane">
          <el-tab-pane name="origina" label="原始数据">
            <originalView />
          </el-tab-pane>
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
import { getPlayerListByProject } from '@/api/project'
export default {
  components: {
    headerCard: () => import('./../components/headerCard'),
    originalView: () => import('./../components/originalView'),
    dataView: () => import('./../components/dataView'),
    chartView: () => import('./../components/chartView'),
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
      }
    }
  },
  computed: {},
  created() {
    getPlayerListByProject({ projectid: 0 }).then(res => {
      console.log(res)
    })
  },
  mounted() {},
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
