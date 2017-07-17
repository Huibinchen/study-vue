<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  created () {
    // 自己封装的
    /*ajax("/static/getCategoryProduct.json",function (data){
      var json = JSON.parse(data.currentTarget.responseText)
      console.log(json)
    })*/
    /*$.ajax({
      url: "/static/getCategoryProduct.json",
      dataType: "json",
      success: function (data){
        console.log(data)
      }
    })*/
    /*this.$http.get("/static/getCategoryProduct.json")
      .then(function (data){
        console.log(data)
      })*/
    this.axios.get("/static/getCategoryProduct.json")
      .then(function (data){
        console.log(data)
      })
  },
  name: 'app',
  components: {
    Hello
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
