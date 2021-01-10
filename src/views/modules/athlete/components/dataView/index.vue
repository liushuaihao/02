<template>
  <div>
    <el-form class="el-form--inline" :model="formQurey" size="small">
      <el-form-item style="margin-right:50px">
        <el-radio v-model="comparison" :label="1">同指标-运动员对比</el-radio>
        <el-radio v-model="comparison" :label="2">同运动员-指标统计</el-radio>
      </el-form-item>
      <el-form-item v-if="comparison === 1" label="指标选择:">
        <el-select v-model="targetValue" placeholder="请选择">
          <el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in targetOption"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item v-else label="运动员选择:">
        <el-select v-model="sporterValue" placeholder="请选择">
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
      targetValue: 0,
      sporterValue: 0,
      comparison: 1, // 对比参照 1指标 2运动员
      targetOption: [
        { label: 'BMI', value: 0 },
        { label: '体脂率', value: 1 },
        { label: '体重', value: 2 },
        { label: '血红蛋白', value: 3 },
        { label: '血尿素', value: 4 },
        { label: '血睾酮', value: 5 },
        { label: '皮质醇', value: 6 }
      ],
      sporterOption: [
        { label: '王小虎', value: 0 },
        { label: '李小芳', value: 1 },
        { label: '张大壮', value: 2 },
        { label: '赵大强', value: 3 }
      ],
      targetData: [
        { id: 0, mean: '20', max: '25', min: '15', std: '15', median: '29', name: '王小虎' },
        { id: 1, mean: '22', max: '26', min: '14', std: '16', median: '26', name: '李小芳' },
        { id: 2, mean: '25', max: '28', min: '18', std: '18', median: '27', name: '张大壮' },
        { id: 3, mean: '25', max: '31', min: '19', std: '14', median: '22', name: '赵大强' }
      ],
      sporterData: [
        { id: 5, mean: '22', max: '26', min: '19', std: '19', median: '20', name: 'BMI' },
        { id: 0, mean: '24%', max: '27%', min: '21%', std: '26%', median: '24%', name: '体脂率' },
        { id: 1, mean: '69kg', max: '71kg', min: '66kg', std: '70kg', median: '68kg', name: '体重' },
        { id: 2, mean: '125g/L', max: '130g/L', min: '123g/L', std: '125g/L', median: '122g/L', name: '血红蛋白' },
        { id: 4, mean: '3.5mmol/L', max: '3.8mmol/L', min: '3.2mmol/L', std: '3.4mmol/L', median: '3.5mmol/L', name: '血尿素' },
        { id: 6, mean: '26mmol/L', max: '35mmol/L', min: '25mmol/L', std: '33mmol/L', median: '34mmol/L', name: '血睾酮' },
        { id: 7, mean: '169ng/mL', max: '189ng/mL', min: '155ng/mL', std: '167ng/mL', median: '154ng/mL', name: '皮质醇' }
      ]
    }
  },
  watch: {
    targetValue(n, o) {
      console.log(n)
      if (n === 0) {
        this.targetData = [
          { id: 0, mean: '20', max: '25', min: '15', std: '15', median: '29', name: '王小虎' },
          { id: 1, mean: '22', max: '26', min: '14', std: '16', median: '26', name: '李小芳' },
          { id: 2, mean: '25', max: '28', min: '18', std: '18', median: '27', name: '张大壮' },
          { id: 3, mean: '25', max: '31', min: '19', std: '14', median: '22', name: '赵大强' }
        ]
      } else if (n === 1) {
        this.targetData = [
          { id: 0, mean: '22%', max: '28%', min: '13%', std: '17%', median: '23%', name: '王小虎' },
          { id: 1, mean: '25%', max: '24%', min: '17%', std: '12%', median: '22%', name: '李小芳' },
          { id: 2, mean: '26%', max: '26%', min: '20%', std: '23%', median: '29%', name: '张大壮' },
          { id: 3, mean: '32%', max: '37%', min: '31%', std: '24%', median: '27%', name: '赵大强' }
        ]
      } else if (n === 2) {
        this.targetData = [
          { id: 0, mean: '69kg', max: '72kg', min: '65kg', std: '68kg', median: '68kg', name: '王小虎' },
          { id: 1, mean: '72kg', max: '78kg', min: '70kg', std: '65kg', median: '63kg', name: '李小芳' },
          { id: 2, mean: '68kg', max: '72kg', min: '66kg', std: '66kg', median: '68kg', name: '张大壮' },
          { id: 3, mean: '66kg', max: '69kg', min: '64kg', std: '64kg', median: '64kg', name: '赵大强' }
        ]
      } else if (n === 3) {
        this.targetData = [
          { id: 0, mean: '127g/L', max: '135g/L', min: '125g/L', std: '125g/L', median: '125g/L', name: '王小虎' },
          { id: 1, mean: '124g/L', max: '126g/L', min: '119g/L', std: '123g/L', median: '122g/L', name: '李小芳' },
          { id: 2, mean: '123g/L', max: '125g/L', min: '121g/L', std: '128g/L', median: '121g/L', name: '张大壮' },
          { id: 3, mean: '121g/L', max: '123g/L', min: '120g/L', std: '122g/L', median: '128g/L', name: '赵大强' }
        ]
      } else if (n === 4) {
        this.targetData = [
          { id: 0, mean: '4.7mmol/L', max: '6.5mmol/L', min: '3.6mmol/L', std: '3.5mmol/L', median: '3.7mmol/L', name: '王小虎' },
          { id: 1, mean: '5.8mmol/L', max: '7.3mmol/L', min: '5.6mmol/L', std: '6.4mmol/L', median: '5.5mmol/L', name: '李小芳' },
          { id: 2, mean: '3.9mmol/L', max: '6.4mmol/L', min: '4.6mmol/L', std: '5.7mmol/L', median: '6.7mmol/L', name: '张大壮' },
          { id: 3, mean: '3.7mmol/L', max: '6.9mmol/L', min: '5.3mmol/L', std: '6.5mmol/L', median: '5.3mmol/L', name: '赵大强' }
        ]
      } else if (n === 5) {
        this.targetData = [
          { id: 0, mean: '34mmol/L', max: '37mmol/L', min: '35mmol/L', std: '38mmol/L', median: '43mmol/L', name: '王小虎' },
          { id: 1, mean: '43mmol/L', max: '43mmol/L', min: '29mmol/L', std: '43mmol/L', median: '36mmol/L', name: '李小芳' },
          { id: 2, mean: '35mmol/L', max: '45mmol/L', min: '30mmol/L', std: '38mmol/L', median: '42mol/L', name: '张大壮' },
          { id: 3, mean: '25mmol/L', max: '35mmol/L', min: '29mmol/L', std: '35mmol/L', median: '35mmol/L', name: '赵大强' }
        ]
      } else if (n === 6) {
        this.targetData = [
          { id: 0, mean: '193ng/mL', max: '220ng/mL', min: '170ng/mL', std: '210ng/mL', median: '187ng/mL', name: '王小虎' },
          { id: 1, mean: '156ng/mL', max: '180ng/mL', min: '140ng/mL', std: '224ng/mL', median: '235ng/mL', name: '李小芳' },
          { id: 2, mean: '210ng/mL', max: '224ng/mL', min: '223ng/mL', std: '216ng/mL', median: '214ng/mL', name: '张大壮' },
          { id: 3, mean: '170ng/mL', max: '193ng/mL', min: '180ng/mL', std: '182ng/mL', median: '163ng/mL', name: '赵大强' }
        ]
      }
    },
    sporterValue(n, o) {
      if (n === 0) {
        this.sporterData = [
          { id: 5, mean: '22', max: '26', min: '19', std: '19', median: '20', name: 'BMI' },
          { id: 0, mean: '24%', max: '27%', min: '21%', std: '26%', median: '24%', name: '体脂率' },
          { id: 1, mean: '69kg', max: '71kg', min: '66kg', std: '70kg', median: '68kg', name: '体重' },
          { id: 2, mean: '125g/L', max: '130g/L', min: '123g/L', std: '125g/L', median: '122g/L', name: '血红蛋白' },
          { id: 4, mean: '3.5mmol/L', max: '3.8mmol/L', min: '3.2mmol/L', std: '3.4mmol/L', median: '3.5mmol/L', name: '血尿素' },
          { id: 6, mean: '26mmol/L', max: '35mmol/L', min: '25mmol/L', std: '33mmol/L', median: '34mmol/L', name: '血睾酮' },
          { id: 7, mean: '169ng/mL', max: '189ng/mL', min: '155ng/mL', std: '167ng/mL', median: '154ng/mL', name: '皮质醇' }
        ]
      } else if (n === 1) {
        this.sporterData = [
          { id: 5, mean: '25', max: '36', min: '22', std: '29', median: '26', name: 'BMI' },
          { id: 0, mean: '26%', max: '32%', min: '24%', std: '24%', median: '27%', name: '体脂率' },
          { id: 1, mean: '72kg', max: '77kg', min: '76kg', std: '70kg', median: '72kg', name: '体重' },
          { id: 2, mean: '132g/L', max: '136g/L', min: '123g/L', std: '132g/L', median: '142g/L', name: '血红蛋白' },
          { id: 4, mean: '3.7mmol/L', max: '5.8mmol/L', min: '3.7mmol/L', std: '5.2mmol/L', median: '3.5mmol/L', name: '血尿素' },
          { id: 6, mean: '28mmol/L', max: '45mmol/L', min: '22mmol/L', std: '37mmol/L', median: '52mmol/L', name: '血睾酮' },
          { id: 7, mean: '169ng/mL', max: '189ng/mL', min: '155ng/mL', std: '167ng/mL', median: '154ng/mL', name: '皮质醇' }
        ]
      } else if (n === 2) {
        this.sporterData = [
          { id: 5, mean: '25', max: '28', min: '25', std: '32', median: '25', name: 'BMI' },
          { id: 0, mean: '34%', max: '37%', min: '27%', std: '36%', median: '31%', name: '体脂率' },
          { id: 1, mean: '55kg', max: '58kg', min: '56kg', std: '60kg', median: '64kg', name: '体重' },
          { id: 2, mean: '144g/L', max: '150g/L', min: '127g/L', std: '143g/L', median: '141g/L', name: '血红蛋白' },
          { id: 4, mean: '4.2mmol/L', max: '3.3mmol/L', min: '2.9mmol/L', std: '4.3mmol/L', median: '3.7mmol/L', name: '血尿素' },
          { id: 6, mean: '31mmol/L', max: '35mmol/L', min: '35mmol/L', std: '43mmol/L', median: '34mmol/L', name: '血睾酮' },
          { id: 7, mean: '169ng/mL', max: '189ng/mL', min: '145ng/mL', std: '187ng/mL', median: '156ng/mL', name: '皮质醇' }
        ]
      } else if (n === 3) {
        this.sporterData = [
          { id: 5, mean: '34', max: '46', min: '29', std: '24', median: '23', name: 'BMI' },
          { id: 0, mean: '33%', max: '39%', min: '27%', std: '33%', median: '32%', name: '体脂率' },
          { id: 1, mean: '69kg', max: '73kg', min: '65kg', std: '60kg', median: '64kg', name: '体重' },
          { id: 2, mean: '127g/L', max: '145g/L', min: '133g/L', std: '145g/L', median: '152g/L', name: '血红蛋白' },
          { id: 4, mean: '4.5mmol/L', max: '4.3mmol/L', min: '3.2mmol/L', std: '3.24mmol/L', median: '4.5mmol/L', name: '血尿素' },
          { id: 6, mean: '26mmol/L', max: '33mmol/L', min: '23mmol/L', std: '22mmol/L', median: '37mmol/L', name: '血睾酮' },
          { id: 7, mean: '167ng/mL', max: '185ng/mL', min: '158ng/mL', std: '159ng/mL', median: '163ng/mL', name: '皮质醇' }
        ]
      }
    }
  }
}
</script>
