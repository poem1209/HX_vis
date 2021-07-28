<template>
  <div id="eChart">
    <button @click="test">刷新</button>
    <div id="main" style="width: 1500px;height:400px;">
    </div>
  </div>
</template>

<script>
import * as price from "../assets/rnn.json";

export default {
  name: "echarts_line",
  props:['stockname'],
  data(){
    return {
      x_axis:[],
      y_axis:[],
      name: this.stockname,
      charts: ''
    }
  },
  mounted() {
    this.myCharts();
  },
  created(){
    for (let i = 1;i<150;i++){
      this.x_axis.push(i);
    };
  },
  watch: {
    stockname:function(stockname){
      this.name = stockname;
      console.log('rnn_name ',this.name);
      // this.chart.setOption(this.options);
    }
  },

  // watch: {
  //   //观察data的变化
  //   namechange:{
  //     handler(newVal,oldVal){
  //       if(this.chart){
  //
  //       }
  //     }
  //   }
  //   },
  //计算属性
  computed: {
    options() {
      console.log('computed options')
      var option = {
        title: {
          text: '折线图'  //总标题文字
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['pre', 'tru']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.x_axis
          // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'aaa_tru',
            type: 'line',
            // stack: '总量',
            data: price[this.name].truth
          },
          {
            name: 'aaa_pre',
            type: 'line',
            // stack: '总量',
            data: price[this.name].prediction
          }
        ]
      };
      return option;
    }
  },
  methods: {
    test(){
      this.chart.setOption(this.options);
    },
    myCharts(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));
      this.chart = myChart;
      // 指定图表的配置项和数据
      // var option = {
      //   title: {
      //     text: '折线图'  //总标题文字
      //   },
      //   tooltip: {
      //     trigger: 'axis'
      //   },
      //   legend: {
      //     data: ['pre', 'tru']
      //   },
      //   grid: {
      //     left: '3%',
      //     right: '4%',
      //     bottom: '3%',
      //     containLabel: true
      //   },
      //   toolbox: {
      //   },
      //   xAxis: {
      //     type: 'category',
      //     boundaryGap: false,
      //     data: this.x_axis
      //     // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     // {
      //     //   name: 'pre',
      //     //   type: 'line',
      //     //   // stack: '总量',
      //     //   data:price.stock000001.prediction
      //     // },
      //     // {
      //     //   name: 'truth',
      //     //   type: 'line',
      //     //   // stack: '总量',
      //     //   data: price.stock000001.truth
      //     // },
      //     {
      //       name: 'aaa_tru',
      //       type: 'line',
      //       // stack: '总量',
      //       data: price[this.name].truth
      //     },
      //     {
      //       name: 'aaa_pre',
      //       type: 'line',
      //       // stack: '总量',
      //       data: price[this.name].prediction
      //     }
      //   ]
      // };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.options);
    }
  },
}
</script>

<style scoped>

</style>
