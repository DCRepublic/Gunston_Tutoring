import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeMobile from '../views/HomeMobile.vue'
import Rating from '../views/Rating.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Main',
    component: Home,
    
  },
  {
    path:'/Rating',
    name: 'Rating',
    component: Rating,
    
  },
  


  {
    path:'/MainMobile',
    name: 'MainMobile',
    component: HomeMobile,
    
  },
 
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
