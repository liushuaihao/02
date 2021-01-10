<template>
  <div>
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item label="比赛场次">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in options2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="运动员">
        <el-select v-model="value2" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in options1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="动作类型:">
        <el-select v-model="value3" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in options3"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="name" label="赛段类型" min-width="100"> </el-table-column>
      <el-table-column prop="mean" label="均值" min-width="100"> </el-table-column>
      <el-table-column prop="max" label="最大" min-width="100"> </el-table-column>
      <el-table-column prop="min" label="最小" min-width="100"> </el-table-column>
      <el-table-column prop="std" label="标准差" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="中位数" min-width="100"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formQurey: {},
      value: '选项1',
      value2: '选项1',
      value3: '选项1',
      seriesData2: [
        { name: '王小虎', type: 'line', smooth: true, data: [10, 20, 1, 5, 6, 9, 5, 20] },
        { name: '李小芳', type: 'line', smooth: true, data: [6, 20, 20, 15, 10, 5, 1, 20] },
        { name: '张大壮', type: 'line', smooth: true, data: [5, 20, 18, 2, 10, 9, 5, 20] },
        { name: '赵大强', type: 'line', smooth: true, data: [1, 20, 15, 15, 10, 20, 18, 12] }
      ],
      raceType: 1,
      options1: [
        { value: '选项1', label: '王小虎' },
        { value: '选项2', label: '李小芳' },
        { value: '选项3', label: '张大壮' },
        { value: '选项4', label: '赵大强' }
      ],
      options2: [
        { value: '选项1', label: '2020年11月11日1场' },
        { value: '选项2', label: '2020年11月11日2场' },
        { value: '选项3', label: '2020年11月11日3场' },
        { value: '选项4', label: '2020年11月11日4场' },
        { value: '选项5', label: '2020年11月11日5场' }
      ],
      options3: [
        { value: '选项1', label: '髋关节' },
        { value: '选项2', label: '踝关节' },
        { value: '选项3', label: '膝关节' },
        { value: '选项4', label: '左脚蹬冰角度' }
      ],
      tableData: [
        { id: 0, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '启动阶段' },
        { id: 1, mean: '1', max: '2', min: '2', std: '1', median: '2', name: '直道赛段' },
        { id: 2, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '弯道赛段' },
        { id: 3, mean: '1', max: '2', min: '2', std: '1', median: '2', name: '结束阶段' }
      ]
    }
  },
  mounted() {
    this.tableData.filter(item => {
      item.mean = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
      item.max = this.$randomVal(55, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
      item.min = this.$randomVal(41, 55) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
      item.std = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
      item.median = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
    })
  },
  watch: {
    value(n, o) {
      this.tableData.filter(item => {
        if (this.value3 === '选项1') {
          item.mean = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(55, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(41, 55) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.value3 === '选项2') {
          item.mean = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(35, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(33, 35) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.vaule3 === '选项3') {
          item.mean = this.$randomVal(44, 50) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(47, 56) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(40, 47) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else {
          item.mean = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(63, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        }
      })
    },
    value2(n, o) {
      this.tableData.filter(item => {
        if (this.value3 === '选项1') {
          item.mean = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(55, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(41, 55) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.value3 === '选项2') {
          item.mean = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(35, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(33, 35) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.vaule3 === '选项3') {
          item.mean = this.$randomVal(44, 50) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(47, 56) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(40, 47) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else {
          item.mean = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(63, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        }
      })
    },
    value3(n, o) {
      this.tableData.filter(item => {
        if (this.value3 === '选项1') {
          item.mean = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(55, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(41, 55) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(45, 60) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.value3 === '选项2') {
          item.mean = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(35, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(33, 35) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(33, 37) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else if (this.vaule3 === '选项3') {
          item.mean = this.$randomVal(44, 50) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(47, 56) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(40, 47) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(44, 51) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        } else {
          item.mean = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.max = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.min = this.$randomVal(62, 65) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.std = this.$randomVal(62, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
          item.median = this.$randomVal(63, 66) + '.' + this.$randomVal(0, 9) + this.$randomVal(0, 9)
        }
      })
    }
  }
}
</script>
