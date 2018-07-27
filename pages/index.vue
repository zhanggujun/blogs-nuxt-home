<template>
  <section class="container">
    <div>
      <div v-for="(item,index) in list" :key="index" class="list-box">
        <nuxt-link :to="`/articles/${item.articleId}`">
          <div>{{item.articleId}}</div>
          <div>{{item.content}}</div>
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
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from '~/plugins/axios.js';
  export default {
    asyncData(){
      return axios.post('/api/get-articles',{data:JSON.stringify({limit:6,page:1,status:'发布',isopen:'公开'})}).then(res=>{
        const list = res.data.code==0?res.data.data:[];
        return {
          list:list
        }
      }).catch(err=>{
        return {
          list:[]
        }
      });
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

