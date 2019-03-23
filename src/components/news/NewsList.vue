<template>
  <div>
    <router-link :to="'/NewsList/Newsinfo'+'/'+item.id" v-for="item in newslist" :key="item.id" >
      <van-card
        num="2"
        title="商品标题"
        :thumb="'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'"
      >
        <!-- 插槽作用域 -->
        <div slot="price">
          <span>发表时间</span>
        </div>
        <div slot="sum">
          <span>点击一次</span>
        </div>
      </van-card>

    </router-link>

  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
          // console.log(this.newslist);
        }
      });
    }
  }
};
</script>

<style  scoped>
</style>