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
  </el-card>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  computed: {},
  created() {},
  mounted() {},
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
