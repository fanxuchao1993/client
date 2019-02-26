// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js';
//import globals from '@/components/global'
import jsonExportExcel from '@/assets/js/JsonExportExcel'
import echarts from 'echarts'
import { Button,Table,TableColumn,Breadcrumb,BreadcrumbItem,DatePicker,Pagination,Input,Tabs,TabPane,Select,Option,Badge} from 'element-ui'
import "babel-polyfill"

//按需引入ElementUI
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Select)
Vue.use(Option)
Vue.use(Badge)

//Vue.prototype.$global = globals
Vue.prototype.$echarts = echarts
Vue.prototype.$jsonExportExcel = jsonExportExcel

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
