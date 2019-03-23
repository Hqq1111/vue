import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import member from '../components/member'
import cart from '../components/cart'

import search from '../components/search'

import home from '../components/home'

import newslist from '../components/news/NewsList'

import Newsinfo from '../components/news/Newsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {path: '/member', component: member },
    {path: '/cart',component: cart},
    {path: '/search', component: search },
    {path: '/home', component: home},
    {path:'/home/newslist',component:newslist},
    {path:'/NewsList/Newsinfo/:id',component:Newsinfo}

  ]
})
