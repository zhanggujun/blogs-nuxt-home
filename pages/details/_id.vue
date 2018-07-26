<template>
  <section class="container">
    <div>
      <div>{{item.articleId}}</div>
      <div>{{item.content}}}</div>
      <div>{{item.describe}}</div>
      <div v-if="item.image&&item.image.length">
        <img :src="item.image[0].url" alt="">
      </div>
      <div>{{item.isopen}}</div>
      <div>{{item.keyword}}</div>
      <div>{{item.label}}</div>
      <div>{{item.labelId}}</div>
      <div>{{item.status}}</div>
      <div>{{item.time}}</div>
      <div>{{item.title}}</div>
      <div>{{item.type}}</div>
      <div>{{item.typeId}}</div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios.js';
  export default {
    asyncData({params}){
      // return {list:params}
      return axios.post('/api/get-articles',{data:JSON.stringify({"articleId":params.id})}).then(res=>{
        const item = res.data.code==0?res.data.data[0]:[];
        return {
          item:item
        }
      }).catch(err=>{
        return {
          item:[]
        }
      });
    },
    mounted(){
      console.log(this.item);
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .list-box
    padding:10px
    border:1px solid #333
    margin:20px
    >div
      margin:10px
    img
      max-width:200px
</style>
