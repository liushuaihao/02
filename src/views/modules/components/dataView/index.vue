<template>
  <div>
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item style="margin-right:50px">
        <el-radio v-model="comparison" :label="1">同指标-运动员对比</el-radio>
        <el-radio v-model="comparison" :label="2">同运动员-指标统计</el-radio>
      </el-form-item>
      <el-form-item v-if="comparison === 1" label="指标选择:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in targetOption"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-else label="运动员选择:">
        <el-select v-model="value" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in sporterOption"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table :data="comparison === 1 ? targetData : sporterData" style="width: 100%" align="center">
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
      comparison: 1, // 对比参照 1指标 2运动员
      targetOption: [
        { label: '体重', value: 0 },
        { label: '体脂', value: 1 },
        { label: '血红蛋白', value: 2 },
        { label: '血压', value: 3 }
      ],
      sporterOption: [
        { label: '体重', value: 0 },
        { label: '体脂', value: 1 },
        { label: '血红蛋白', value: 2 },
        { label: '血压', value: 3 }
      ],
      targetData: [
        { id: 0, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '赵小芳' },
        { id: 1, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '孙宏宇' },
        { id: 2, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '张东凡' },
        { id: 3, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '李思儒' }
      ],
      sporterData: [
        { id: 0, mean: '1', max: '2', min: '1', std: '1', median: '2', name: 'BMI' },
        { id: 1, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '体脂率' },
        { id: 2, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '体重' },
        { id: 4, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '血红蛋白' },
        { id: 5, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '血尿素' },
        { id: 6, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '血睾酮' },
        { id: 7, mean: '1', max: '2', min: '1', std: '1', median: '2', name: '皮质醇' }
      ]
    }
  }
}
</script>
