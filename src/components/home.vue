<template>
  <div class="home">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
        class="my-swiper"
      >
        <van-swipe-item
          class="item"
          v-for="item in lunbotulist"
          :key="item.img"
        >
          <img
            :src="item.img"
            alt=""
          >
        </van-swipe-item>
      </van-swipe>

    <Gird></Gird>

  </div>
</template>

<script>
import { Toast } from "vant";

import Gird from "./nav/Gird.vue";
export default {
  data: () => ({
    lunbotulist: []
  }),
  created() {
    this.getlunbo();
  },
  methods: {
    // getlunbo() {
    //   this.$http.get("api/getlunbo").then(result => {
    //     const {
    //       data: { status, message }
    //     } = result;
    //     if (status === 0) {
    //       // console.log(message);
    //       this.lunbotulist = message;
    //     } else {
    //       Toast("获取轮播图数据失败");
    //     }
    //   });
    // }
     async   getlunbo() {
     const res= await this.$http.get("api/getlunbo")
        const {
          data: { status, message }
        } = res;
        if (status === 0) {
          // console.log(message);
          this.lunbotulist = message;
        } else {
          Toast("获取轮播图数据失败");
        }

    }
  },
  components: {
    Gird
  }
};
</script>

<style lang="less">
.home {
  .my-swiper {
    height: 200px;
    // overflow: hidden;
    .item {
      // &:nth-child(1) {
      //   background: red;
      // }
      // &:nth-child(2) {
      //   background: green;
      // }
      // &:nth-child(3) {
      //   background: blue;
      // }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>