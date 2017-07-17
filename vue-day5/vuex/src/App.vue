<template>
  <div id="app">
    购买的总价：{{total}}
    <banana></banana>
    <orange></orange>
    <apple></apple>
  </div>
</template>

<script>
// 引入香蕉和橙子
import Banana from '@/components/Banana'
import Orange from '@/components/Orange'
import Apple from '@/components/Apple'

export default {
  name: 'app',
  components: {
    Banana,
    Orange,
    Apple
  },
  // 计算属性
  computed:{
    total(){
      // 获取store中的状态下的total
      return this.$store.state.total
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
