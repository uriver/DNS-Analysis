import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/homepage/homepage'
import Head from '@/components/header'
import StaInfo from '@/components/stainfo/mainpage'
import Model from '@/components/model/model'

import InfoCurrent from '@/components/stainfo/current'
import InfoSpace from '@/components/stainfo/space'
import InfoYear from '@/components/stainfo/time/time-year'
import InfoUpdate from '@/components/stainfo/time/time-update'
import InfoNum from '@/components/stainfo/ip/ip-num'
import InfoSur from '@/components/stainfo/ip/ip-sur'
import InfoFre from '@/components/stainfo/ip/ip-fre'
import InfoAll from '@/components/stainfo/whois/whois-all'
import InfoSign from '@/components/stainfo/whois/whois-sign'
import InfoDomains from '@/components/stainfo/whois/whois-domains'

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
          path: 'whois/whois-all',
          component: InfoAll
        },
        {
          path: 'whois/whois-sign',
          component: InfoSign
        },
        {
          path: 'whois/whois-domains',
          component: InfoDomains
        },
        {
          path: 'space',
          component: InfoSpace
        },
        {
          path: 'time/time-year',
          component: InfoYear
        },
        {
          path: 'time/time-update',
          component: InfoUpdate
        },
        {
          path: 'ip/ip-num',
          component:InfoNum
        },
        {
          path: 'ip/ip-sur',
          component:InfoSur
        },
        {
          path: 'ip/ip-fre',
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
