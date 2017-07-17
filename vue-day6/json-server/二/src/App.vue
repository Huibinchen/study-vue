<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="getPosts()">获取jsonserver中的数据</button>
    <button @click="add()">添加一个商品</button>
    <button @click="getItem(7)">查找某条商品数据</button>
    <button @click="paginate()">分页</button>
    <button @click="order()">排序</button>
    <button @click="slice()">获取指定范围内的数据</button>
    <button @click="gte()">gte</button>
    <button @click="lte()">lte</button>
    <button @click="update(9)">更新指定的数据</button>
    <button @click="del(15)">删除指定的数据</button>
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
    },
    // 使用_gte获取指定数据之后的数据
    gte () {
      this.$http.get('http://localhost:8081/cart?id_gte=12')
        .then(function (data){
          console.log(data)
        })
    },
    // 使用_lte获取指定数据之前的数据
    lte () {
      this.$http.get('http://localhost:8081/cart?id_lte=12')
        .then(function (data){
          console.log(data)
        })
    },
    // 更新
    update (id) {
      var _this = this
      this.$http.get('http://localhost:8081/cart/'+id).
        then(function (data){
          console.log(data.data)
          var num = data.data.num
          var title = data.data.title
          console.log(title)
          return _this.$http.put('http://localhost:8081/cart/'+id,{
            num: num+1,
            title: title
          })
        })
        .then(function (data){
          console.log(data)
        })
      /*this.$http.put('http://localhost:8081/'+id,{
        num
      })
        .then(function (data){

        })*/
    },
    // 删除
    del (id) {
      this.$http.delete('http://localhost:8081/cart/'+id)
        .then(function (data){
          console.log(data)
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
