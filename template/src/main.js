import '@/assets/style/main.scss'

import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

if (process.env.NODE_ENV === 'development') window.vm = vm
Vue.config.productionTip = false
