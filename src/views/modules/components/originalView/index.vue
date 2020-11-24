<template>
  <div>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column prop="median" label="训练时间" min-width="100"> </el-table-column>
      <el-table-column prop="mean" label="性别" min-width="100"> </el-table-column>
      <el-table-column prop="id" label="年龄" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="身高" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="体重" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血红蛋白" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血尿素" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血乳酸" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血压" min-width="100"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
