<template>
  <div id="eChart">
    <button @click="test">刷新</button>
    <div id="main" style="width: 1500px;height:400px;"></div>
  </div>
</template>
<!--预测20天+range-->
<script>
// 实现折线图上下限区域展示
// import * as price from "../assets/test_range.json";
import * as price from "../assets/gap20_000999.json";
console.log('price',price);

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
      console.log('test_name ',this.name);
      // this.chart.setOption(this.options);
    }
  },
  //计算属性
  computed: {
    options() {
      console.log('computed options')
      var option = {
        title: {
          text: 'test:堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              // backgroundColor: '#6a7985'
              backgroundColor: '#fff'
            }
          }
        },
        legend: {
          data: ['max-min', 'min', 'avg']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.x_axis
          }
        ],
        yAxis: [
          {
            type: 'value',
            max: function (value) {
              return Math.round(value.max) + 500;
            },
            min:function (value){
              return Math.round(value.min)-100;
            },
            splitNumber:3
          }
        ],
        series: [
          {
            name: 'min',
            type: 'line',
            stack: '总量',
            areaStyle: {
              color: '#fff'
            },
            emphasis: {
              focus: 'series'
            },
            // data: [120, 132, 101, 134, 90, 230, 210]
            data: price[this.name].prediction_min
          },
          {
            name: 'max-min',
            type: 'line',
            stack: '总量',
            areaStyle: {
              color:'#87CEFA'
            },
            lineStyle: {
              opacity: 0.1
            },
            emphasis: {
              focus: 'series'
            },
            data: price[this.name].gap
          },
          {
            name: 'tru',
            type: 'line',
            data: price[this.name].truth
          },
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

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.options);
    }
  }
}
</script>

<style scoped>

</style>
