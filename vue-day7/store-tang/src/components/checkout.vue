<template>
<div class="container-fluid">
  <h2>你的购物车</h2>
  <div class="alert alert-warning" v-show="!totalNum>0">
    这个购物车中没有任何商品
    <a href="/" class="alert-link">点击这里返回购物</a>
  </div>
  <div v-show="totalNum>0">
    <table class="table">
      <thead>
        <tr>
          <th>数量</th>
          <th>商品名称</th>
          <th class="text-right">单价</th>
          <th>小计</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in cart">
          <td class="text-center store-number">
            <div class="input-group">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default" @click="reduce(item)">-</button>
              </div>
              <input type="text" class="form-control" v-model="item.num">
              <div class="input-group-btn">
                <button type="button" class="btn btn-default" @click="increase(item)">+</button>
              </div>
            </div>
          </td>
          <td class="text-left">{{item.title}}</td>
          <td class="text-right">￥{{item.price}}</td>
          <td class="text-right">{{(item.price*item.num).toFixed(2)}}</td>
          <td>
            <button class="btn btn-sm btn-warning" @click="del(item)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script type="text/javascript">
export default {
  methods: {
    reduce (item) {
      if (item.num > 1) {
        this.$store.dispatch('reduce', item)
      }
    },
    increase (item) {
      this.$store.dispatch('increase', item)
    },
    del (item) {
      this.$store.dispatch('del', item)
    }
  },
  computed: {
    totalNum () {
      return this.$store.getters.totalNum
    },
    cart () {
      return this.$store.state.cart
    }
  }
}
</script>
<style type="text/css">
.store-number{
  width: 20%;
} 
</style>