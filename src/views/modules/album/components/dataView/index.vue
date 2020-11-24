<template>
  <div>
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item label="指标选择:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="(item, index) in option"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="name" label="姓名" min-width="100"> </el-table-column>
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
      value: 1,
      option: [
        {
          label: '体重',
          value: 0
        },
        {
          label: '体脂',
          value: 1
        },
        {
          label: '血红蛋白',
          value: 2
        },
        {
          label: '血压',
          value: 3
        }
      ],
      tableData: [
        {
          id: 0,
          mean: '1',
          max: '2',
          min: '',
          std: '1',
          median: '2',
          name: '王小虎'
        },
        {
          id: 1,
          mean: '1',
          max: '2',
          min: '',
          std: '1',
          median: '2',
          name: '王小虎'
        },
        {
          id: 2,
          mean: '1',
          max: '2',
          min: '',
          std: '1',
          median: '2',
          name: '王小虎'
        },
        {
          id: 3,
          mean: '1',
          max: '2',
          min: '',
          std: '1',
          median: '2',
          name: '王小虎'
        }
      ]
    }
  }
}
</script>
