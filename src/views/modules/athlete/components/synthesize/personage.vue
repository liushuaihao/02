<template>

	<div>
		<el-card style="margin-bottom:10px">
			<h4>分析参数</h4>
			<el-form>
				<el-form-item label="参数选择">
					<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
						<el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
			</el-form>
			<el-row>
				<el-col :span="8">
					<chartTopright v-if="isPage" />
				</el-col>
				<el-col :span="8">
					<chartTopright v-if="isPage" />
				</el-col>
				<el-col :span="8">
					<chartTopright v-if="isPage" />
				</el-col>
			</el-row>
		</el-card>
		<el-row :gutter="20">
			<el-col :span="11">
				<el-card>
					<h4>状态要素情况</h4>
					<el-table :data="tableData" style="width: 100%" height="300">
						<el-table-column prop="a" fixed label="参数" min-width="100"> </el-table-column>
						<el-table-column prop="b" label="范围内比例" min-width="100"> </el-table-column>
						<el-table-column prop="c" label="关联时间范围" min-width="150"> </el-table-column>
					</el-table>
				</el-card>
			</el-col>
			<el-col :span="13">
				<el-card>
					<h4>状态评估结果</h4>
					<p>最佳状态34%<el-progress :percentage="34" status="success"></el-progress> 次优状态35%<el-progress :percentage="35"
						 status="warning"></el-progress> 较差状态20%<el-progress :percentage="20" status="exception"></el-progress>
					</p>
					<el-form :inline="true" :model="formInline" class="demo-form-inline">
						<el-form-item label="整体竞技状态情况">
							<el-button type="warning">良好</el-button>
						</el-form-item>
						<el-form-item label="竞技状态情况分布">
							<el-select v-model="formInline.region" placeholder="活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="关联比赛">
							<el-row :gutter="10">
								<el-col :span="8">
									<el-tag type="success">成绩优秀</el-tag>
								</el-col>
								<el-col :span="8">
									<el-tag type="warning">成绩良好</el-tag>
								</el-col>
								<el-col :span="8">
									<el-tag type="danger">成绩不佳</el-tag>
								</el-col>
							</el-row>
						</el-form-item>
					</el-form>
					<el-row :gutter="10" style="margin-bottom:20px">
						<el-col :span="12">
							<p>成绩明细</p>
							<el-card>
								<p>全程成绩</p>
								<p>最高速度</p>
								<p>起跑速度</p>
								<p>弯道速度</p>
							</el-card>
						</el-col>
						<el-col :span="12">
							<p>当时状态</p>
							<el-card>
								<p>最高心率</p>
								<p>血红蛋白</p>
								<p>血尿素值</p>
								<p>血睾酮值</p>
							</el-card>
						</el-col>
					</el-row>
					<div style="text-align:right">
						<el-button>开始评估</el-button>
						<el-button type="primary">保存结果</el-button>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import chartTopright from './../chartView/chartTopright.vue'
	const cityOptions = ['血红蛋白', '血睾酮', '血尿素', '体脂']
	export default {
		components: {
			chartTopright
		},
		data() {
			return {
				cities: cityOptions,
				checkedCities: [],
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
				isPage: true
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
			}
		}
	}
</script>
