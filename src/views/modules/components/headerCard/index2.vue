<template>
  <el-card>
    <div class="securityCenter">
      <!-- 头部 -->
      <h3>数据查询</h3>
      <!-- 表单部分 -->
      <p>
        <el-form class="el-form--inline" :model="formQurey" size="small">
          <el-form-item label="运动类型:">
            <el-select v-model="formQurey.projectid" @change="changeType" placeholder="请选择">
              <el-option :label="item.projectName" :value="item.id" :key="item.id" v-for="item in typeList"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="成绩范围:">
            <el-select v-model="formQurey.cj" @change="changeType" placeholder="请选择">
              <el-option :label="item.name" :value="item.id" :key="item.id" v-for="item in cjList"> </el-option>
            </el-select>
          </el-form-item>
          <br />
          <el-form-item label="时间范围:">
            <time-selection @getData="datePicker" />
          </el-form-item>
          <el-form-item label="时间周期:">
            <el-select @change="selectGranularity" v-model="formQurey.type" style="width: 140px; margin-right: 12px" placeholder="请选择">
              <el-option label="日" value="1"></el-option>
              <el-option label="周" value="2"></el-option>
              <el-option label="月" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </p>
    </div>
    <el-form class="el-form--inline">
      <el-form-item label="运动员:">
        <el-transfer :titles="['备选运动员', '分析运动员']" v-model="value1" :data="data" filterable filter-placeholder="请输入运动员名称" @change="handleChange"> </el-transfer>
      </el-form-item>
      <el-form-item label="基本参数:">
        <el-card style="height:303px">
          <div>身高：{{ athlateInfo.height }}cm</div>
          <div>体重：{{ athlateInfo.weight }}kg</div>
          <div>近半年最佳成绩：</div>
          <div>近半年成绩排名：</div>
          <div>近半年训练强度：</div>
          <div>近半年训练时间：</div>
        </el-card>
      </el-form-item>
    </el-form>
    <p style="overflow:hidden">
      <el-button style="float:right" size="medium" @click="submit">查询/加载</el-button>
    </p>
  </el-card>
</template>

<script>
export default {
  components: {
    timeSelection: () => import('./../timeSelection')
  },
  props: {
    typeList: {
      type: [Array],
      defalut: () => []
    },
    athleteList: {
      type: [Array],
      defalut: () => []
    },
    athlateInfo: {
      type: [Object],
      default: () => {
        return {}
      }
    }
  },
  data() {
    const generateData = _ => {
      const data = []
      const cities = ['王小虎', '李小芳', '张大壮','赵大强']
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
      cjList: [
        {
          name: '前5%',
          id: 0
        },
        {
          name: '前10%',
          id: 1
        },
        {
          name: '前20%',
          id: 2
        },
        {
          name: '前30%',
          id: 3
        }
      ],
      value1: [0],
      // 查询条件
      formQurey: {
        projectid: '', // 运动员类型
        playerid: '', // 运动员
        cj: 0,
        type: '1'
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 监听 运动员类型
    changeType(e) {
      this.$emit('changeType', e)
    },
    // 时间范围
    datePicker(e) {
      this.$set(this.formQurey, 'stop-date', e.endTime)
      this.$set(this.formQurey, 'start-date', e.startTime)
    },
    //
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys)
    },
    // 粒度
    selectGranularity(e) {
      console.log(e)
    },
    submit() {
      console.log(this.formQurey)
      this.$emit('submit', this.formQurey)
    }
  }
}
</script>

<style></style>
