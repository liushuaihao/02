<template>
  <div>
    <el-table :data="tableData" style="width: 100%" align="center">
      <el-table-column fixed prop="name" label="姓名" min-width="100"> </el-table-column>
      <el-table-column label="性别" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.sex === 1 ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" min-width="100"> </el-table-column>
      <el-table-column prop="height" label="身高" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.height + 'cm' }}
        </template>
      </el-table-column>
      <el-table-column prop="time" label="时间" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="体重" min-width="100">
        <template slot-scope="scope">
          {{ scope.row.weight + 'kg' }}
        </template>
      </el-table-column>
      <el-table-column prop="bmi" label="BMI" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血红蛋白" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血尿素" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="血睾酮" min-width="100"> </el-table-column>
      <el-table-column prop="median" label="皮质醇" min-width="100"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      option: [
        { label: '体重', value: 0 },
        { label: '体脂', value: 1 },
        { label: '血红蛋白', value: 2 },
        { label: '血压', value: 3 }
      ],
      tableData: [
        { id: 0, sex: 1, age: 20, height: '176', weight: 56, time: '2020-02-02', bmi: '20', fat: '1', median: '2', name: '王小虎' },
        { id: 1, sex: 1, age: 20, height: '166', weight: 58, time: '2020-02-02', bmi: '34', fat: '1', median: '2', name: '王小虎' },
        { id: 2, sex: 1, age: 20, height: '178', weight: 65, time: '2020-02-02', bmi: '25', fat: '1', median: '2', name: '王小虎' },
        { id: 3, sex: 1, age: 20, height: '169', weight: 53, time: '2020-02-02', bmi: '22', fat: '1', median: '2', name: '王小虎' }
      ]
    }
  }
}
</script>
