import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
fastClick.attach(document.body)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
