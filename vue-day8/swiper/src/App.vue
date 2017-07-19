<template>
  <div id="app">
    <!-- <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper> -->
    <!-- 图片懒加载 -->
    <!-- <ul class="hello">
      <li v-for="(item,index) in imglist">
        <img v-lazy="item">
      </li>
    </ul> -->
    <!-- element ui -->
    <!-- <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello 唐菜也">
      <p>欢迎使用 Element 哈哈哈</p>
    </el-dialog>
    <el-switch
      v-model="value2"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>
    <el-alert
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-rate v-model="value1"></el-rate>
    <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
    <el-steps :space="100" :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel> -->
    <mt-button @click.native="handleClick">按钮</mt-button>
    <mt-swipe :auto="2000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <mt-range
      v-model="rangeValue"
      :min="10"
      :max="90"
      :step="10"
      :bar-height="5">
    </mt-range>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-search v-model="value"></mt-search>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'app',
  methods: {
    handleClick () {
      /*this.$toast({
        message: '你好，哈哈哈',
        position: 'bottom',
        duration: 10000,
        iconClass: 'glyphicon glyphicon-ok-circle'
      })*/
      this.$indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      var _this = this
      setTimeout(function (){
        _this.$indicator.close()
      },3000)
    }
  },
  data() {
    return {
      rangeValue: 40,
      value2: true,
      value1: null,
      visible: false,
      swiperOption: {
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 2000,
        direction : 'vertical',
        grabCursor : true,
        setWrapperSize :true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        scrollbar:'.swiper-scrollbar',
        mousewheelControl : true,
        observeParents:true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper){
          console.log(swiper)
        },
        // more Swiper configs and callbacks...
        // ...
      },
      imglist: ['https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b2de9c82d158ccbf4667f9851fd8bc3eb03541b1.jpg',
        'https://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/e4dde71190ef76c6ab09b7949b16fdfaae5167b1.jpg',
        'https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/91529822720e0cf3163302440c46f21fbf09aa4d.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331601697&di=e884c39524b99d6bb02194c045a7051f&imgtype=jpg&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb8389b504fc2d5620fa71272e21190ef77c66c86.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331602435&di=de217f5fd3d10d623fa2c62ec777d461&imgtype=0&src=http%3A%2F%2Fi3.cqnews.net%2Fnews%2Fattachement%2Fjpg%2Fsite82%2F2011-11-03%2F3641939357411555641.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331602434&di=5b8b5a3c833257a8b3248ab347886b1a&imgtype=0&src=http%3A%2F%2Fimg.iecity.com%2FUpload%2FFile%2F201511%2F25%2F20151125162409657.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331602434&di=53034da316cd93ad529b10245975e1e7&imgtype=0&src=http%3A%2F%2Fentimg.pipi.cn%2Fyule%2F2011-12-03%2Ffb54fe04-5814-483a-b97c-53f0d144608b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496926564&di=9ee6322546086b7d99dece6bfe34ca41&imgtype=jpg&er=1&src=http%3A%2F%2Ftupian.enterdesk.com%2F2013%2Fmxy%2F12%2F10%2F15%2F10.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331954252&di=0565624809c8650ccc4f6d9cf2a964e2&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1610953019%2C3012342313%26fm%3D214%26gp%3D0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331929918&di=bb35b6a98943ee2e47f6a62067086e91&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F27%2F45%2F71r58PICmDM_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496331929917&di=8ee1e2b8aa868a9a91b23b73d69ca90b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F16%2F00%2F52%2F11J58PICD3S_1024.jpg'
      ]
    }
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
.mint-swipe{
  background-color: green;
  font-size: 50px;
  height: 200px;
}
</style>
