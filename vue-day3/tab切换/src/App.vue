<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello> -->
    <el-button msg="今天天气真晴朗">我是按钮</el-button>
    <!-- 3.调用该组件 -->
    <tab :data="tabData1"></tab>
    <tab :data="tabData2"></tab>
  </div>
</template>

<script>
// import Hello from './components/Hello'
// 1.引入该组件
import elButton from './components/el-button'

// 1.tab切换组件
import Tab from './components/Tab'

export default {
  data(){
    return {
      tabData1:[
        {btn:"手机通讯",content: "手机通讯的详情"},
        {btn:"剃须刀",content: "剃须刀的详情"},
        {btn:"生活电器",content: "剃须刀的详情"}
      ],
      tabData2:[
        {btn:"休闲食品",content: "休闲食品的详情"},
        {btn:"只能手环",content: "只能手环的详情"},
        {btn:"手机",content: "手机的详情"}
      ]
    }
  },
  name: 'app',
  components: {
    // Hello
    elButton,
    // 2.添加该组件
    Tab
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
