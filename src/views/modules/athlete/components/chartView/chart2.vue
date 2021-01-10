<template>
  <div class="chart2">
    <chartTemp :option="option"></chartTemp>
  </div>
</template>

<script>
	import chartTemp from '@/components/chartTemp'
	export default {
		components: {
			chartTemp
		},
		props: {
			title: {
				type: [String],
				default: ''
			}
		},
		data() {
			return {
				option: {},
			}
		},
		mounted() {
			this.getEchartsData()
		},
		methods: {
			getEchartsData() {
				this.option = {
					title: {
						text: '能力构成评估',
						x:'center'
					},
					tooltip: {},
					legend: {
						data: []
					},
					radar: {
						// shape: 'circle',
						name: {
							textStyle: {
								color: '#fff',
								backgroundColor: '#999',
								borderRadius: 3,
								padding: [3, 5]
							}
						},
						indicator: [{
								name: '竞技状态',
								max: 120
							},
							{
								name: '运动表现',
								max: 120
							},
							{
								name: '综合成绩',
								max: 130
							}
						]
					},
					series: [{
						type: 'radar',
						// areaStyle: {normal: {}},
						data: [{
								value: [80, 100, 110],
								name: ''
							},
							{
								value: [110, 119, 120],
								name: ''
							}
						]
					}]
				};

			}
		}
	}
</script>

<style lang="scss" scoped>
.chart2 {
  height: 400px;
}
</style>
