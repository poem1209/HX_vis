<template>
  <div id="eChart">
    <div id="main" style="width: 1500px;height:400px;">
    </div>
  </div>
</template>

<script>
import * as price from "../assets/rnn.json";

export default {
  name: "echarts_line",
  data(){
    return {
      x_axis:[],
      y_axis:[],
      stockname:'',
      aaa:'stock000001'
    }
  },
  created(){
    for (let i = 1;i<150;i++){
      this.x_axis.push(i);
    };
    console.log(this.aaa+' '+typeof(this.aaa))
    console.log('prediction  '+price.stock000008.prediction);
    console.log('aa    '+price[this.aaa].prediction)
    console.log(stockname)
  },
  methods: {
    // stock(){
    //   console.log(this.stockname)
    // },
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
            data:price.stock000008.prediction
          },
          {
            name: 'truth',
            type: 'line',
            // stack: '总量',
            data: price.stock000008.truth
          },
          // {
          //   name: 'aaa',
          //   type: 'line',
          //   // stack: '总量',
          //   data: price[this.aaa].truth
          // }
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
