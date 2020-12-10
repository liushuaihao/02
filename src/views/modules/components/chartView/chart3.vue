<template>
  <div class="chart3">
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
          text: '关联要素查看',
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
                itemStyle: {
                  normal: {
                    color: '#e60619'
                  }
                },
                name: '血尿素',
                x: 300,
                y: 100
              },
              {
                itemStyle: {
                  normal: {
                    color: '#145121'
                  }
                },
                name: '血红蛋白',
                x: 400,
                y: 80
              },
              {
                itemStyle: {
                  normal: {
                    color: '#e60619'
                  }
                },
                name: '血睾酮',
                x: 500,
                y: 100
              },
              {
                itemStyle: {
                  normal: {
                    color: '#e60619'
                  }
                },
                name: '髋关节角度',
                x: 330,
                y: 150
              },
              {
                itemStyle: {
                  normal: {
                    color: '#145121'
                  }
                },
                name: '膝关节角度',
                x: 380,
                y: 140
              },
              {
                itemStyle: {
                  normal: {
                    color: '#e60619'
                  }
                },
                name: '踝关节角度',
                x: 450,
                y: 150
              }
            ],
            // links: [],
            links: [
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
                source: '血尿素',
                target: '血红蛋白'
              },
              {
                source: '血红蛋白',
                target: '血睾酮'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.chart3 {
  height: 400px;
}
</style>
