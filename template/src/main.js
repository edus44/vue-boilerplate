import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')

if (process.env.NODE_ENV === 'development') window.vm = vm
Vue.config.productionTip = false
