import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcarContainer from '@/components/tabbar/ShopcarContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'HomeContainer',
    component: HomeContainer
  },
  {
    path: '/member',
    name: 'MemberContainer',
    component: MemberContainer
  }, {
    path: '/shopcar',
    name: 'ShopcarContainer',
    component: ShopcarContainer
  },
  {
    path: '/search',
    name: 'SearchContainer',
    component: SearchContainer
  }
  ],
  linkActiveClass: 'mui-active'
})
