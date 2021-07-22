import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import echarts_line from '@/components/echarts_line'
import echarts_jsonline from "../components/echarts_jsonline";
import lstm1 from '@/components/lstm1'
import lstm2 from '@/components/lstm2'
import lstm4 from '@/components/lstm4'
import lstm5 from '@/components/lstm5'
import lstm6 from '@/components/lstm6'
import lstm7 from '@/components/lstm7'
import lstm8 from '@/components/lstm8'
import avg1 from '@/components/avg1'
import avg2 from '@/components/avg2'
import avg4 from '@/components/avg4'
import avg5 from '@/components/avg5'
import avg6 from '@/components/avg6'
import avg7 from '@/components/avg7'
import avg8 from '@/components/avg8'
import rnn1 from '@/components/rnn1'
import rnn2 from '@/components/rnn2'
import rnn4 from '@/components/rnn4'
import rnn5 from '@/components/rnn5'
import rnn6 from '@/components/rnn6'
import rnn7 from '@/components/rnn7'
// test
import rnn8 from '@/components/rnn8'



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
      path: '/lstm4',
      name: 'lstm4',
      component: lstm4
    },
    {
      path: '/lstm5',
      name: 'lstm5',
      component: lstm5
    },
    {
      path: '/lstm6',
      name: 'lstm6',
      component: lstm6
    },
    {
      path: '/lstm7',
      name: 'lstm7',
      component: lstm7
    },
    {
      path: '/lstm8',
      name: 'lstm8',
      component: lstm8
    },
    {
      path: '/avg1',
      name: 'avg1',
      component: avg1
    },
    {
      path: '/avg2',
      name: 'avg2',
      component: avg2
    },
    {
      path: '/avg4',
      name: 'avg4',
      component: avg4
    },
    {
      path: '/avg5',
      name: 'avg5',
      component: avg5
    },
    {
      path: '/avg6',
      name: 'avg6',
      component: avg6
    },
    {
      path: '/avg7',
      name: 'avg7',
      component: avg7
    },
    {
      path: '/avg8',
      name: 'avg8',
      component: avg8
    },
    {
      path: '/rnn1',
      name: 'rnn1',
      component: rnn1
    },
    {
      path: '/rnn2',
      name: 'rnn2',
      component: rnn2
    },
    {
      path: '/rnn4',
      name: 'rnn4',
      component: rnn4
    },
    {
      path: '/rnn5',
      name: 'rnn5',
      component: rnn5
    },
    {
      path: '/rnn6',
      name: 'rnn6',
      component: rnn6
    },
    {
      path: '/rnn7',
      name: 'rnn7',
      component: rnn7
    },
    {
      path: '/rnn8',
      name: 'rnn8',
      component: rnn8
    }
  ]
})
