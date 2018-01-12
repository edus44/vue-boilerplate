import Vue from 'vue'

Vue.config.productionTip = false

// Fix axios CORS
// https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios
window.XMLHttpRequest = undefined

// browserMocks.js
window.localStorage = (function() {
  let store = {}
  return {
    getItem(key) {
      return store[key] || null
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    removeItem(key) {
      delete store[key]
    },
    clear() {
      store = {}
    },
  }
})()
