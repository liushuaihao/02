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
          <el-button>加载/查看</el-button>
          <el-button>更新/生成指标</el-button>
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
        <el-form>
          <el-form-item label="参数选择">
            <el-checkbox-group v-model="checkedCities">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div>
          <chartTopright ref="chartRight" :bDatap="bDatap"></chartTopright>
        </div>
      </el-col>
      <el-col :span="24">
        <el-row :gutter="20" class="flex">
          <el-col :span="5"><el-button>生成指标</el-button></el-col>
          <el-col :span="5"><el-checkbox v-model="checked1" label="指标可视化" border></el-checkbox></el-col>
        </el-row>
      </el-col>
    </el-row>

	<div>
		<div v-for="item in line" :key="item.name" :style="{width:item.number + '%'}"></div>
	</div>
  </div>
</template>
<script>
import chartTopright from './../chartView/chartTopright.vue'
const targetData = [{
		id: 1,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 2,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 3,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 4,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 5,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 6,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	},
	{
		id: 7,
		name: '小张',
		updateTime: '2020-02-02 14:11:11'
	}
]
const citiess= ['血红蛋白', '血睾酮', '血尿素', '体质']
export default {
	components: {
		chartTopright
	},
	data() {
		return {
			checkedCities:[],
			cities: citiess,
			targetData: [],
			scoreRange: 1,
			checked1: false,
			bDatap:[0,0,100,0,0,0,0],
			bar:[
				{
					name:'血红蛋白',
					value:20
				},{
					name:'血睾酮',
					value:30
				},{
					name:'血尿素',
					value:20
				},{
					name:'体质',
					value:10
				}
			],
			line:[
				{
					number:30,
					name:""
				},{
					number:10,
					name:""
				},{
					number:10,
					name:""
				},{
					number:30,
					name:""
				},{
					number:20,
					name:""
				},
			]
		}
	},
	watch:{
		checked1(a){
			this.bDatap= a ? [0,0,100,0,0,0,0] : []
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
        display: block;
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
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
