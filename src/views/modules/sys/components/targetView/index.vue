<template>
  <div>
    <!-- 上面横向滚动数据 -->
    <div class="x_target_data_cont">
      <div class="x_target_data">
        <el-card class="item_cont" v-for="item in targetData" :key="item.id">
          <div class="title item">
            <span>个人指标：</span>
            <span>{{ item.name }}</span>
          </div>
          <div class="updata_time item">
            <span>更新时间：</span>
            <span>{{ item.updateTime }}</span>
          </div>
          <div class="pursuant_btn item">
            <span>依照数据：</span>
            <el-link type="primary">点击查看</el-link>
          </div>
          <el-button class="create_target">更新/生成指标</el-button>
        </el-card>
      </div>
    </div>

    <!-- 指标参考./可视化 -->
    <el-row class="target_score_visaul_cont">
      <el-col :span="13" class="target_score">
        <div class="info_title">指标参考成绩</div>
        <el-row>
          <el-col :span="12" class="target_score_visaul_cont_l">
            <div class="left_rectangle_cont">
              <div class="title">成绩采样范围</div>
              <el-radio v-model="scoreRange" :label="1">全程成绩分析</el-radio>
              <el-radio v-model="scoreRange" :label="2">赛段成绩分析</el-radio>
            </div>
          </el-col>
          <el-col :span="12" class="target_score_visaul_cont_r">
            <div class="title">赛段选择</div>
            <div class="track"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :offset="1" :span="10" class="target_visual">
        <div class="info_title">指标参数可视化</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const targetData = [
  { id: 1, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 2, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 3, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 4, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 5, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 6, name: '小张', updateTime: '2020-02-02 14:11:11' },
  { id: 7, name: '小张', updateTime: '2020-02-02 14:11:11' }
]
export default {
  data() {
    return {
      targetData: [],
      scoreRange: 1
    }
  },
  mounted() {
    this.targetData = targetData
  }
}
</script>
<style lang="scss" scoped>
.x_target_data_cont {
  overflow-x: scroll;
  margin-bottom: 30px;
  .x_target_data {
    white-space: nowrap;
    margin-bottom: 20px;
    padding: 2px 0 0 2px;
    .item_cont {
      display: inline-block;
      border: 1px solid #ddd;
      margin-right: 20px;
      .item {
        padding: 3px 0;
      }
      .create_target {
        position: relative;
        left: 45%;
        top: 3px;
      }
    }
  }
}
.target_score_visaul_cont {
  .info_title {
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;
    font-weight: bold;
  }
  .target_score_visaul_cont_l {
    padding-top: 80px;
    .left_rectangle_cont {
      border: 1px solid #ddd;
      width: 160px;
      text-align: center;
      padding: 20px;
      position: relative;
      .title {
        position: absolute;
        top: -8px;
        background: #fff;
        font-weight: bold;
        padding: 0 20px 0 10px;
      }
      .el-radio {
        margin: 6px 0;
      }
    }
  }
  .target_score_visaul_cont_r {
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    .title {
      margin-right: 30px;
    }
    .track {
      background-color: pink;
      width: 100px;
      height: 180px;
    }
  }
}
</style>
