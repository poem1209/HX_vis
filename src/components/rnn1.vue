<template>
  <div id="eChart">
    <div id="main" style="width: 1500px;height:400px;"></div>
  </div>
</template>

<script>
import * as price from "../assets/rnn.json";

export default {
  name: "echarts_line",
  data(){
    return {
      x_axis:[],
      y_axis:[]
    }
  },
  created(){
    for (let i = 1;i<250;i++){
      this.x_axis.push(i);
    };
  },
  methods: {
    myCharts(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '折线图'
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
            name: 'pre',
            type: 'line',
            // stack: '总量',
            data:price.stock000001.prediction
          },
          {
            name: 'truth',
            type: 'line',
            // stack: '总量',
            data: price.stock000001.truth
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    // this.load();
    this.myCharts();
  }
}
</script>

<style scoped>

</style>
