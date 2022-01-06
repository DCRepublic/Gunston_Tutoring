import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeMobile from '../views/HomeMobile.vue'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Start
 },
  {
    path:'/Main',
    name: 'Main',
    component: Home,
    meta: {
      desktop: true
    }
  },
  {
    path:'/MainMobile',
    name: 'MainMobile',
    component: HomeMobile,
    meta: {
      mobile: true
    }
  },
 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
