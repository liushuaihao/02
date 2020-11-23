<template>
  <el-card>
    <div class="securityCenter">
      <!-- 头部 -->
      <h3>分析运动员</h3>
      <el-row>
        <el-col :span="8">
          <!-- 表单部分 -->
          <div class="form">
            <el-form
              :model="formQurey"
              label-width="80px"
              size="small"
              class="demo-form-inline"
            >
              <el-form-item label="运动员:">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                    v-for="(item, index) in selectOption"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="运动类型:">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    :label="item.label"
                    :value="item.value"
                    :key="item.value"
                    v-for="(item, index) in selectOption"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
        <el-col :span="8">
          <el-form
            :model="formQurey"
            label-width="80px"
            size="small"
            class="demo-form-inline"
          >
            <el-form-item label="基本参数:"> </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <div>
            <el-buttom></el-buttom>
            <el-buttom></el-buttom>
          </div>
          <div></div>
        </el-col>
      </el-row>
    </div>

    <div class="securityCenter">
      <h3>分析阶段</h3>
      <el-form size="small" label-width="80px">
        <el-form-item label="时间范围">
          <time-selection @getData="datePicker" />
        </el-form-item>
        <el-form-item label="时间周期">
          <el-select
            @change="selectGranularity"
            v-model="dataForm.type"
            style="width: 140px; margin-right: 12px"
            placeholder="请选择"
          >
            <el-option label="日" value="1"></el-option>
            <el-option label="周" value="2"></el-option>
            <el-option label="月" value="3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <!--  -->
      <el-tabs type="border-card"
      v-model="tabPane">
        <el-tab-pane v-if="tabPane != 'data'" name="data"  label="统计数据">
          <data-view/>
        </el-tab-pane>
        <el-tab-pane v-if="tabPane != 'chart'" name="chart" label="图表显示">
          <data-chart/>
        </el-tab-pane>
        <el-tab-pane v-if="tabPane != 'target'" name="target" label="指标生成">
          <data-target/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </el-card>
</template>
<script>
export default {
  components: {
    timeSelection: () => import("./../components/timeSelection"),
    dataView: () => import("./components/dataView"),
    chartView: () => import("./components/chartView"),
    targetView: () => import("./components/targetView"),
  },
  data() {
    return {
      tabPane:"data",
      //查询条件
      formQurey: {
        region: "", //运动员
      },
      value: "",
      //选择框
      selectOption: [
        {
          label: "小明",
          value: 0,
        },
        {
          label: "小王",
          value: 1,
        },
        {
          label: "小花",
          value: 2,
        },
      ],
      listData: [
        {
          name: "小张",
          id: 0,
        },
        {
          name: "小王",
          id: 1,
        },
      ],
      dataForm: {
        type: "1",
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 时间范围
    datePicker(e) {
      this.$set(this.dataForm, "end_time", e.end_time);
      this.$set(this.dataForm, "start_time", e.start_time);
    },
  },
};
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
