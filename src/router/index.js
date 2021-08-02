import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echarts_line from '@/components/echarts_line'
import echarts_jsonline from "../components/echarts_jsonline";
import lstm from '@/components/lstm'
import avg from '@/components/avg'
// test
import rnn from '@/components/rnn'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/echartsline',
      name: 'echarts_line',
      component: echarts_line
    },
    {
      path: '/jsonline',
      name: 'echarts_jsonline',
      component: echarts_jsonline
    },
    {
      path: '/lstm',
      name: 'lstm',
      component: lstm
    },
    {
      path: '/avg',
      name: 'avg',
      component: avg
    },
    {
      path: '/rnn',
      name: 'rnn',
      component: rnn
    }
  ]
})
