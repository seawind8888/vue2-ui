import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'
import App from './App'
import routes from './routers'

FastClick.attach(document.body)
Vue.use(Router)

const router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

