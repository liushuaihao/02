import Vue from 'vue'
import Element from 'element-ui'
import App from '@/App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import '@/icons'
import '@/element-ui/theme/index.css'
import '@/assets/scss/aui.scss'
import http from '@/utils/request'
import renRadioGroup from '@/components/ren-radio-group'
import renSelect from '@/components/ren-select'
import renProcessMultiple from '@/components/ren-process-multiple'
import renProcessStart from '@/components/ren-process-start'
import renProcessRunning from '@/components/ren-process-running'
import renProcessDetail from '@/components/ren-process-detail'
import renDeptTree from '@/components/ren-dept-tree'
import renRegionTree from '@/components/ren-region-tree'
import { hasPermission, getDictLabel, formatDate } from '@/utils'
import cloneDeep from 'lodash/cloneDeep'
import VueScroller from 'vue-scroller'
import moment from 'moment'
Vue.config.productionTip = false
import echarts from 'echarts'
Vue.prototype.echarts = echarts
Vue.use(Element, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueScroller)
Vue.use(renRadioGroup)
Vue.use(renSelect)
Vue.use(renDeptTree)
Vue.use(renRegionTree)
Vue.use(renProcessMultiple)
Vue.use(renProcessStart)
Vue.use(renProcessRunning)
Vue.use(renProcessDetail)

// 挂载全局
Vue.prototype.$http = http
Vue.prototype.$hasPermission = hasPermission
Vue.prototype.$getDictLabel = getDictLabel
Vue.prototype.$moment = moment

// 保存整站vuex本地储存初始状态
window.SITE_CONFIG['storeState'] = cloneDeep(store.state)

// 过滤时间戳
// 方法一: yyyy-MM-dd hh:mm
Vue.filter('formatDate1', function (time) {
  let date = new Date(time)
  return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
})
// 方法二: yyyy-MM-dd
Vue.filter('formatDate2', function (time) {
  // time = time * 1000
  let date = new Date(time)
  return formatDate(date, 'yyyy-MM-dd')
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
