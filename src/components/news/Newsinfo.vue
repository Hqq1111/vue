<template>
  <div class="">
   
    <h3 class="title">{{newsinfo.title}}</h3>
    <p>
      <span>{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <div class="content">{{newsinfo.content}}</div>
    <comment :id='id'></comment>
  </div>
  
</template>

<script>
import comment from '../Comment'
export default {
    
  data: () => ({
    id:'',
    newsinfo:{}
  }),
  created(){
    this.id=this.$route.params.id
    this.getNewsinfo()
  },
  methods: {
    getNewsinfo() {
      this.$http.get('api/getnew/'+this.id).then(result => {
        //  console.log(result);
        if (result.body.status === 0) {
          this.newsinfo=result.body.message;         
        }
      });
    }
  },
  components:{
    comment
  }
};
</script>

<style scoped>

</style>
