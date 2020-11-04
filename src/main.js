import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from "axios";
import markdown from "mavon-editor";
import "mavon-editor/dist/css/index.css"
import $ from 'jquery'
import './permission'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
import "./axios"
Vue.use(ElementUI)
Vue.use(markdown)
Vue.config.productionTip = false
Vue.prototype.$ = $;   // 当然还有这句话 给vue原型上添加 $
new Vue({
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')
