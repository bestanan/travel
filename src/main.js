// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 使用 fastclick 解决移动端 click 延迟 300ms 执行
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

// 引入初始化样式
import 'styles/reset.css'
// 解决移动端 1px 边框问题
import 'styles/border.css'
// 引入 iconfont
import 'styles/iconfont.css'
// import 'swiper/css/swiper.css' // (<= Swiper 5.x)
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
