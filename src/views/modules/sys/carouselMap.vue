<template>
	<div class="content">
		<el-card class="content_right" style="margin-bottom:20px">
			<h3>分析数据加载</h3>
			<el-form ref="form" class="el-form--inline" :model="form">
				<el-form-item label="运动类型:">
					<el-select v-model="value" placeholder="请选择">
						<el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in selectOption"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="运动员:">
					<el-select v-model="value" placeholder="请选择">
						<el-option :label="item.label" :value="item.value" :key="item.value" v-for="item in selectOption"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="指定时间范围
" class="T_time">
					<el-time-picker is-range v-model="value1" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间"
					 placeholder="选择时间范围"> </el-time-picker>
				</el-form-item>
				<el-form-item label="指定时间周期" class="T_time">
					<el-select v-model="value" placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<el-form :model="formQurey" class="el-form--inline">
				<!-- <el-form-item label="基本参数:">
					<el-card>
						<div>身高：</div>
						<div>体重：</div>
						<div>近半年最佳成绩：</div>
						<div>近半年成绩排名：</div>
						<div>近半年训练强度：</div>
						<div>近半年训练时间：</div>
					</el-card>
				</el-form-item> -->
				<el-form-item>
					<el-transfer :titles="['当日比赛场次', '分析比赛场次']" v-model="value1" :data="data" filterable filter-placeholder="请输入比赛场次"
					 @change="handleChange"> </el-transfer>
				</el-form-item>
			</el-form>
			
		</el-card>
		<!-- <el-card class="el_result"> -->
			<!-- <h3>分析结果展示</h3> -->
			<!-- 综合 -->
			<!-- <synthesize v-if="type" /> -->
			<!-- 个人 -->
			<!-- <personage v-else /> -->
		<!-- </el-card> -->
		<!-- <el-card> -->
			<analysisPhase/>
		<!-- </el-card> -->
	</div>
</template>
<script>
	import chartTopright from './../components/chartView/chartTopright.vue'
	import synthesize from './../components/synthesize/synthesize.vue'
	import personage from './../components/synthesize/personage.vue'
	import analysisPhase from '../album/carouselMap_M.vue'
	const cityOptions = ['血红蛋白', '血睾酮', '血尿素', '体质']
	export default {
		components: {
			chartTopright,
			synthesize,
			personage,
			analysisPhase,
		},
		data() {
			return {
				cities: cityOptions,
				checkedCities: [],
				dataList: [{
						title: "全队指标对比",
						time: "2020-11-23",
						type: true
					},
					{
						title: "个人",
						time: "2020-11-23",
						type: false
					}
				],
				options: [{
						value: '选项1',
						label: '分钟'
					},
					{
						value: '选项2',
						label: '小时'
					},
					{
						value: '选项3',
						label: '场次'
					}
				],
				value: '',
				value1: '',
				form: {},
				formInline: {},
				tableData: [{
						a: '体重',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					},
					{
						a: '体脂',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					},
					{
						a: '血红蛋白',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					},
					{
						a: '血尿素',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					},
					{
						a: '血睾酮',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					},
					{
						a: '皮质醇',
						b: '20%',
						c: '10:11:20 - 10:12:30'
					}
				],
				isPage: true,
				dataIndex: 0,
				type: true
			}
		},
		computed: {},
		created() {},
		mounted() {},
		activated() {
			this.isPage = false
			this.isPage = true
		},
		methods: {
			handleCheckedCitiesChange(value) {},
			format(percentage) {
				return percentage === 100 ? '满' : `${percentage}%`
			},
			goTag(i, t) {
				console.log(i, t)
				this.dataIndex = i
				this.type = t
			}
		}
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

	.aui-wrapper .el-card+.el-card {
		margin-top: 0px;
	}

	.content {
		// display: flex;

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
			width: 100%;
			// height: calc(100vh - 120px);
			margin-top: 0;
			// margin-left: 15px;
			// overflow-y: auto;
		}
		.el_result{
			margin-top: 20px !important;
		}
	}

	.active {
		background: rgba(0, 0, 0, .1);
	}
</style>
