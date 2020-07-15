// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/utils/rem'
import '../static/common.css'
// import Vant from 'vant';
// import { Tab, Tabs } from 'vant';
import BaiduMap from 'vue-baidu-map'

// Vue.use(Tab);
// Vue.use(Tabs);
Vue.use(BaiduMap,{
  ak:'RQtswEUwhRCZHnC2z4G5mcHRUQYlxro8'
})
Vue.config.productionTip = false

Vue.prototype.$router_ = function(option){
  sessionStorage['routerFlag']++
  this.$router.push(option)
}

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
