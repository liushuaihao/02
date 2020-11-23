<template>
	<div class="chartTopright"><chartTemp :option="option"></chartTemp></div>
</template>

<script>
import chartTemp from '@/components/chartTemp';
export default {
	components: {
		chartTemp
	},
	data() {
		return {
			option: {},
			xData:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			yData:[11, 11, 15, 13, 12, 13, 10]
		};
	},
	mounted() {
		this.getEchartsData();
	},
	methods: {
		getEchartsData() {
			this.option = {
				 title : {
				        text: '体脂',
				        x:'center'
				    },
				//悬停
				tooltip: {
					trigger: 'axis'
				},
				calculable: true,
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: this.xData,
						axisLine: {
							show: false
						},
						axisTick:{
							show: false
							},
						
					},
					
				],
				yAxis: [
					{
						type: 'value',
						axisLine: {
							show: false
						},
						axisTick:{
							show: false
							},
					}
				],
				series: [
					{
						name: '体脂',
						type: 'line',
						data: this.yData
					}
				]
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.chartTopright {
	height: 300px;
}
</style>
