import Vue from 'vue'
import App from './App.vue'

const vm = new Vue({
  render: h => h(App),
})

vm.$mount('#app')

Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') window.vm = vm
