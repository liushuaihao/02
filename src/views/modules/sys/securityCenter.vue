<template>
  <div>
    <el-card>
      <div class="securityCenter">
        <!-- 头部 -->
        <h3>分析运动员</h3>
        <!-- 表单部分 -->
        <p>
          <el-form class="el-form--inline" :model="formQurey" size="small">
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
        </p>
      </div>
      <el-form :model="formQurey" class="el-form--inline">
        <el-form-item label="基本参数:">
          <el-card>
            <div>身高：</div>
            <div>体重：</div>
            <div>近半年最佳成绩：</div>
            <div>近半年成绩排名：</div>
            <div>近半年训练强度：</div>
            <div>近半年训练时间：</div>
          </el-card>
        </el-form-item>
        <el-form-item>
          <el-transfer
            :titles="['运动员', '合格运动员']"
            v-model="value1"
            :data="data"
            filterable
            filter-placeholder="请输入运动员名称"
            @change="handleChange"
          ></el-transfer>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
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
        <el-tabs type="border-card" v-model="tabPane">
          <el-tab-pane name="origina" label="原始数据">
            <originalView />
          </el-tab-pane>
          <el-tab-pane name="data" label="统计数据">
            <dataView />
          </el-tab-pane>
          <el-tab-pane name="chart" label="图表显示">
			  <template v-if="tabPane == 'chart'"> 
				<chartView></chartView>
			  </template>
          </el-tab-pane>
          <el-tab-pane name="target" label="指标生成">
            <targetView />
          </el-tab-pane>
        </el-tabs></div
    ></el-card>
  </div>
</template>
<script>
export default {
  components: {
    timeSelection: () => import("./../components/timeSelection"),
    originalView: () => import("./components/originalView"),
    dataView: () => import("./components/dataView"),
    chartView: () => import("./components/chartView"),
    targetView: () => import("./components/targetView"),
  },
  data() {
    const generateData = (_) => {
      const data = [];
      const cities = ["小明", "小王", "小花"];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
        });
      });
      return data;
    };

    return {
      data: generateData(),
      value1: [0],
      tabPane: "data",
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
    //
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    // 粒度
    selectGranularity(e) {
      console.log(e);
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
