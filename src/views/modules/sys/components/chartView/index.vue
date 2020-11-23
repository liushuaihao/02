<template>
	<div class="chartView">
		<div class="chartbox">
			<el-row>
				<el-col :span="12" class="col">
					<chartTopleft ref="chartTopleft"></chartTopleft>
				</el-col>
				<el-col :span="12" class="col">
					<chartTopright ref="chartTopright"></chartTopright>
				</el-col>
				<el-col :span="12" class="col">
					<chartBomleft ref="chartBomleft"></chartBomleft>
				</el-col>
				<el-col :span="12" class="col">
					<chartBomright ref="chartBomright"></chartBomright>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import chartTopleft from './chartTopleft.vue'
import chartTopright from './chartTopright.vue'
import chartBomleft from './chartBomleft.vue'
import chartBomright from './chartBomright.vue'
export default {
	components:{
		chartTopleft,
		chartTopright,
		chartBomleft,
		chartBomright
	},
	data() {
		return {
			option: {}
		};
	},
	mounted() {
		
	},
	methods: {
		
		}
	}
</script>
<style lang="scss" scoped>
.col {
  height: 300px;
}
</style>
