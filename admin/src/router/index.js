import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/login'
import Test from 'views/test'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Test },
    { path: '/login', name: 'login', component: Login }
  ]
})
