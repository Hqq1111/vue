<template>
  <div id="app">
    <!-- header区域 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      fixed
    />

    <!-- 路由区域 -->
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
          <router-view class="animated"></router-view>
    </transition>


    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home" to="/home">主页</van-tabbar-item>
   <van-tabbar-item icon="contact" dot to="/member">会员</van-tabbar-item>
   <van-tabbar-item icon="search" info="5" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" info="20" to="/cart">购物车</van-tabbar-item>
    </van-tabbar>
    <!-- 底部tapbar区域 -->
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      selected: 0,
      active: 0
    };
  }
};
</script>

<style lang='less'>
#app {
  padding-top: 40px;
   padding-bottom:50px;
  overflow-x: hidden;
  .v-leave-to{
    position: absolute;
  }
}

/* .v-enter
{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition:all .6s linear;
} */
</style>
