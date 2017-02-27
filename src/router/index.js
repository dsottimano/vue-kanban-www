import Vue from 'vue'
import Router from 'vue-router'
import homeview from 'components/Home'
import UserBoard from 'components/UserBoard'
import UserBoards from 'components/UserBoards'
import Login from 'components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: homeview
    },
    {
      path: '/userboards',
      name: 'UserBoards',
      component: UserBoards
    },
    {
      path: '/userboards/:id/lists',
      name: 'UserBoard',
      component: UserBoard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
