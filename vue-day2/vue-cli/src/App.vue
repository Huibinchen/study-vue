<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello> -->
    <el-button msg="今天天气真晴朗">我是按钮</el-button>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import elButton from './components/el-button'
/*import {lastName,firstName} from './components/a'
console.log(lastName)*/

export default {
  name: 'app',
  components: {
    // Hello
    elButton
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
