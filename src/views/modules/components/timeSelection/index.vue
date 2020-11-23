<template>
  <div class="timeselect">
    <el-select
      size="small"
      @change="datePicker"
      v-model="dataForm.time"
      ref="select"
      style="width: 140px;margin-right:12px"
      placeholder="请选择"
    >
      <el-option label="最近七天" value="2"></el-option>
      <el-option label="最近一个月" value="3"></el-option>
      <el-option label="自定义" value="1"></el-option>
    </el-select>
    <el-date-picker
      v-if="dataForm.time == 1"
      v-model="datetimerange"
      :picker-options="pickerOptions"
      ref="picker"
      type="daterange"
      value-format="yyyy-MM-dd"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
    <span v-if="dataForm.time != 1">
      {{ dataForm.startTime }}—
      {{ dataForm.endTime }}
    </span>
  </div>
</template>
<script>
import {setData} from "@/utils/index";
export default {
  data() {
    return {
      dataForm: {
        time: "2",
        startTime: "",
        endTime: ""
      },
      datetimerange: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e6;
        }
      }
    };
  },
  watch: {
    datetimerange(val) {
      // console.log(val)
      if (this.dataForm.time === "1") {
        if (val != null) {
          this.dataForm.startTime = val[0];
          this.dataForm.endTime = val[1];
          this.getData();
        }
      }
    }
  },
  created() {
    this.datePicker("2");
  },
  methods: {
    getData() {
      var end_time = this.timeParse(this.dataForm.endTime);
      var start_time = this.timeParse(this.dataForm.startTime);
      this.$emit("getData", { end_time: end_time, start_time: start_time,
      endTime: this.dataForm.endTime + ' 00:00:00', startTime: this.dataForm.startTime+ ' 23:59:59' });
    },
    timeParse(tiem) {
      let data = new Date(tiem);
      let t = data.getTime(data) / 1000;
      return t;
    },
    // 统计时间
    datePicker(e) {
      // 最近七天
      if (e === "2") {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        this.$set(this.dataForm, "startTime", setData(start));
        this.$set(this.dataForm, "endTime", setData(end));
        this.$set(this.dataForm, "startTime", setData(start));
        this.$set(this.dataForm, "endTime", setData(end));
        this.getData();
        // 最近一个月
      } else if (e === "3") {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        this.$set(this.dataForm, "startTime", setData(start));
        this.$set(this.dataForm, "endTime", setData(end));
        this.getData();
      } else {
        this.datetimerange = null;
        return false;
      }
    }
  }
};
</script>
<style lang="scss" scope>
.timeselect {
  display: inline-block;
}
</style>
