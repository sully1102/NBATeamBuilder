import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyTop5 from '../views/MyTop5.vue'
import YourTop5 from '../views/YourTop5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myTop5',
    name: 'MyTop5',
    component: MyTop5
  },
  {
    path: '/yourTop5',
    name: 'YourTop5',
    component: YourTop5
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
