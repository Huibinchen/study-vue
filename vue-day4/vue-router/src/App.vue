<template>
  <div id="app">
    
    <nav>
      <!-- <a href="/">主页</a>
      <a href="/cart">购物车</a>
      <a href="/mine">我的</a> -->
      <ul>
        <!-- 防止跳转的时候页面刷新，使用router-link -->
        <!-- <router-link to="/" tag="li">主页</router-link>
        <router-link to="/cart" tag="li">购物车</router-link>
        <router-link to="/mine" tag="li">我的</router-link> -->
        <!-- <router-link v-for="(item,index) in tabBar" :to="item.path" tag="li">{{item.name}}</router-link> -->
        <!-- 声明式的 -->
        <router-link v-for="(item,index) in tabBar" :to="{path: item.path}" tag="button">{{item.name}}</router-link>
        <!-- <button v-for="(item,index) in tabBar" @click="pathTo(item.path,index)" :class="{active: activeIndex == index}">{{item.name}}</button> -->
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabBar:[
        {
          path: '/',
          name: '主页'
        },
        {
          path: '/cart',
          name: '购物车'
        },
        {
          path: './mine',
          name: '我的'
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    pathTo(path,index){
      // console.log(path)
      this.activeIndex = index
      this.$router.push(path)
    }
  }
}
</script>

<style>
button.router-link-exact-active{
  background-color: yellow;
}
button.active{
  background-color: yellow;
}
</style>
