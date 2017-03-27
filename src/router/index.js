import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/homepage/homepage'
import Head from '@/components/header'
import StaInfo from '@/components/stainfo/mainpage'
import Model from '@/components/model/model'

import InfoCurrent from '@/components/stainfo/current'
import InfoSpace from '@/components/stainfo/space'
import InfoYear from '@/components/stainfo/time-year'
import InfoUpdate from '@/components/stainfo/time-update'
import InfoNum from '@/components/stainfo/ip-num'
import InfoSur from '@/components/stainfo/ip-sur'
import InfoFre from '@/components/stainfo/ip-fre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sta-info',
      name: 'Static',
      component: StaInfo,
      children: [
        {
          path: '',
          component: InfoCurrent
        },
        {
          path: 'space',
          component: InfoSpace
        },
        {
          path: 'time-year',
          component: InfoYear
        },
        {
          path: 'time-update',
          component: InfoUpdate
        },
        {
          path: 'ip-num',
          component:InfoNum
        },
        {
          path: 'ip-sur',
          component:InfoSur
        },
        {
          path: 'ip-fre',
          component: InfoFre
        }
      ]
    },
    {
      path: '/model',
      name: 'Model',
      component: Model
    }
  ]
})
