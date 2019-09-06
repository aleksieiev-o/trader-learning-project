import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Stocks from './components/Stocks'
import Portfolio from './components/Portfolio'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: Stocks,
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
