<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input type="text" placeholder="stock" v-model="stockname">
<!--    <button @click="stock">cha kan</button>-->
<!--    <router-view/>-->
    <router-view :stockname="stockname"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      stockname:"stock000001"
    }
  },
  methods:{
    stock(){
      console.log('app_stock',this.stockname)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
