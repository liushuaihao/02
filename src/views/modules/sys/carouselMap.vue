<template>
  <div class="content">
    <el-card class="content_left">
      <h3>竞技状态指标</h3>
      <el-card class="target_it" v-for="(itm, ind) in 10" :key="ind">
        <p class="text_tit">全队指标对比</p>
        <p class="text_time">更新时间：2020-11-23</p>
        <p class="text_data">依照数据：点击查看</p>
      </el-card>
    </el-card>
    <el-card class="content_right">
      <h3>分析数据加载</h3>
      <el-form class="timing" ref="form" :model="form">
        <p>运动员/时间场次筛选</p>
        <el-form-item
          label="指定时间范围
"
          class="T_time"
        >
          <el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围"> </el-time-picker>
        </el-form-item>
        <el-form-item label="指定时间周期" class="T_time">
          <el-select  v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div></div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      value1: "",
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.ma_l {
  margin-left: 20px;
}
.ma_r {
  margin-right: 40px;
}
.center {
  text-align: center;
}
.el-form-item {
  margin-bottom: 15px;
}
.aui-wrapper .el-card + .el-card {
  margin-top: 0px;
}
.content {
  display: flex;
  .content_left {
    width: 25%;
    height: calc(100vh - 120px);
    overflow-y: auto;
    .target_it {
      border: 1px solid #ccc;
      width: 90%;
      margin: 0 auto;
      line-height: 1;
      margin-bottom: 10px;
      .text_tit {
        font-size: 18px;
        text-align: center;
        margin: 0;
      }
      .text_time {
        margin: 10px 0;
      }
      .text_data {
        margin: 0;
      }
    }
  }
  .content_right {
    width: 75%;
    height: calc(100vh - 120px);
    margin-top: 0;
    margin-left: 15px;
    .timing {
      border: 1px solid #ccc;
      position: relative;
      padding-top: 30px;
      border-radius: 5px;
      p {
        background-color: #fff;
        display: inline-block;
        position: absolute;
        top: -28px;
        left: 20px;
        font-size: 18px;
        padding: 0 10px;
      }
      .T_time {
        display: flex;
        padding-left: 20px;
        .T_time_l {
          line-height: 40px;
          padding-left: 30px;
          padding-right: 10px;
        }
        .T_time_r {
        }
      }
      .period {
        width: 20%;
      }
      .period:nth-child(2) {
        margin: 0 5%;
      }
    }
  }
}
</style>
