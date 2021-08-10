import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echarts_line from '@/components/echarts_line'
import echarts_jsonline from "../components/echarts_jsonline";
import lstm from '@/components/lstm'
import lstm1 from '@/components/lstm1'
import lstm2 from '@/components/lstm2'
import lstm3 from '@/components/lstm3'
import avg from '@/components/avg'
// test
import rnn from '@/components/rnn'
import test from '@/components/test'



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
      path: '/lstm1',
      name: 'lstm1',
      component: lstm1
    },
    {
      path: '/lstm2',
      name: 'lstm2',
      component: lstm2
    },
    {
      path: '/lstm3',
      name: 'lstm3',
      component: lstm3
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
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
