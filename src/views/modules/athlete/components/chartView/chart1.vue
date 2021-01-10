<template>
  <div class="chart1">
    <chartTemp :option="option" @item-click="itemClick"></chartTemp>
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
      option: {}
    }
  },
  mounted() {
    this.getEchartsData()
  },
  methods: {
    getEchartsData() {
      this.option = {
        title: {
          text: '关联图',
          x: 'center'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            data: [
              {
                name: '体重',
                x: 300,
                y: 100,
                value: 80
              },
              {
                name: '体脂',
                x: 400,
                y: 80,
                value: 80
              },
              {
                name: '血尿素',
                x: 500,
                y: 70,
                value: 80
              },
              {
                name: '血红蛋白',
                x: 600,
                y: 100,
                value: 80
              },
              {
                name: '血睾酮',
                x: 680,
                y: 100,
                value: 80
              },
              {
                name: '左脚蹬冰角度',
                x: 300,
                y: 200,
                value: 80
              },
              {
                name: '右脚蹬冰角度',
                x: 400,
                y: 200,
                value: 80
              },
              {
                name: '髋关节角度',
                x: 480,
                y: 150,
                value: 80
              },
              {
                name: '膝关节角度',
                x: 550,
                y: 150,
                value: 80
              },
              {
                name: '踝关节角度',
                x: 680,
                y: 180,
                value: 80
              }
            ],
            links: [
              {
                source: '体重',
                target: '左脚蹬冰角度'
              },
              {
                source: '体重',
                target: '右脚蹬冰角度'
              },
              {
                source: '体脂',
                target: '体重'
              },
              {
                source: '体脂',
                target: '血尿素'
              },
              {
                source: '体脂',
                target: '左脚蹬冰角度'
              },
              {
                source: '体脂',
                target: '右脚蹬冰角度'
              },
              {
                source: '血尿素',
                target: '血红蛋白'
              },
              {
                source: '血尿素',
                target: '髋关节角度'
              },
              {
                source: '血尿素',
                target: '膝关节角度'
              },
              {
                source: '血尿素',
                target: '踝关节角度'
              },
              {
                source: '血红蛋白',
                target: '血睾酮'
              },
              {
                source: '血红蛋白',
                target: '踝关节角度'
              },
              {
                source: '血睾酮',
                target: '踝关节角度'
              }
            ],
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }
        ]
      }
    },
    itemClick(params) {
			if (params.dataType !== 'edge') return 
			this.$emit('itemClick', params.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart1 {
  height: 400px;
}
</style>
