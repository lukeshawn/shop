import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入ui组件
import './plugins/element.js'
//导入css文件
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
import Axios from 'axios'
import TreeTable from 'vue-table-with-tree-grid'

//导入验证axios
import axios from 'axios'
//配置请求根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
//设置请求的拦截器
axios.interceptors.request.use(config=>{
  //见接口文档V1接口说明
  //Authorization是后端给的
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.component('tree-table',TreeTable)











Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
