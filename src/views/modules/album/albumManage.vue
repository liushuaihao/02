<template>
  <div>
    <headerCard :typeList="typeList" :athleteList="athleteList" @changeType="getPlayerListByProject" @submit="submit" />
    <el-card>
      <div class="securityCenter">
        <h3>分析阶段</h3>
        <el-tabs type="border-card" v-model="tabPane">
          <el-tab-pane name="origina" label="原始数据">
            <originalView />
          </el-tab-pane>
          <el-tab-pane name="chart" label="图表显示">
            <template v-if="tabPane == 'chart'">
              <chartView></chartView>
            </template>
          </el-tab-pane>
          <el-tab-pane name="score" label="成绩分析">
            <targetView v-if="tabPane == 'score'" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getPlayerListByProject, getProjectList } from '@/api/project'
import { basicInfo, biophysInfo } from '@/api/athlete.js'
export default {
  components: {
    headerCard: () => import('./../components/headerCard/index2'),
    originalView: () => import('./../components/originalView/index3'),
    chartView: () => import('./../components/chartView/index3'),
    targetView: () => import('./../components/targetView/index3')
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
      tabPane: 'origina',
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
      typeList: [],
      athleteList: [],
      dataForm: {
        type: '1'
      }
    }
  },
  computed: {},
  created() {
    getProjectList({}).then(({ data: res }) => {
      this.typeList = res.data
    })
    //
  },
  mounted() {},
  methods: {
    // 选择运动员
    getPlayerListByProject(id) {
      getPlayerListByProject({ projectid: id }).then(({ data: res }) => {
        this.athleteList = res.data
      })
    },
    // 查询
    submit(e) {
      console.log(e)
      basicInfo({ athleteid: 1 }).then(res => {
        console.log(res)
        this.athlateInfo = res
      })
      biophysInfo({ athletes: [1, 2, 3], 'start-date': '2019-11-01 00:00:00', 'stop-date': '2020-01-01 00:00:00' }).then(res => {
        console.log(res)
        //census-data
        //origin-data
      })
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
