<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getPosts()">获取jsonserver中的数据</button>
    <button @click="add()">添加一个商品</button>
    <button @click="getItem(7)">查找某条商品数据</button>
    <button @click="paginate()">分页</button>
    <button @click="order()">排序</button>
    <button @click="slice()">获取指定范围内的数据</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    getPosts () {
      this.$http.get('http://localhost:8081/cart')
        .then(function (data){
          console.log(data)
        })
    },
    add () {
      // 向数据库中添加数据
      this.$http.post('http://localhost:8081/cart',{
        title: "饼干！"
      })
        .then(function (data){
          console.log(data)
        })
    },
    getItem (id) {

      // 查找某一条数据
      this.$http.get('http://localhost:8081/cart?id=1&id=2')
        .then(function (data){
          console.log(data.data)
        })
    },
    paginate () {
      this.$http.get('http://localhost:8081/cart?_page=3&_limit=5')
        .then(function (data){
          console.log(data.data)
        })
    },
    // 排序
    order () {
      this.$http.get('http://localhost:8081/cart?_sort=id&_order=desc')
        .then(function (data){
          console.log(data.data)
        })
    },
    // 获取指定范围的数据
    slice () {
      this.$http.get('http://localhost:8081/cart?_start=22&_end=26')
        .then(function (data){
          console.log(data.data)
        })
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
