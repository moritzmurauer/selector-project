<template>
<div class="single-post">
  <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
      <div class="single">
        <div class="thumbnail">
          <img :src="post.coverUrl">
        </div>
        <div class="info">
          <h4>{{ post.title }}</h4>
          <p class="mt-1">{{descriptionSnippet}}</p>
        </div>
        <div class="post-author pb-1 d-flex">
          <div class="d-flex mr-4">
           <img class="pr-1" src="@/assets/icons/person.png" alt="person">
           <p> {{ post.userName }}</p>
          </div>
           <div class="d-flex mr-4">
           <img class="pr-1" src="@/assets/icons/date.png" alt="person">
           <p>today</p>
          </div>
         
          
        </div>
      </div>
      </router-link>
      </div>
</template>

<script>
import moment from "moment"
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],

setup(props) { 
    // computing length of description output
    const descriptionSnippet = computed(() => {
        return props.post.description.substring(0,90) + '....'
    }) 
    const formatedTime = computed(() => {
        return  moment(props.post.createdAt).format('lll')
    }) 
    return { descriptionSnippet, formatedTime }
}
}
</script>

<style scoped>
    .single {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-radius: 10px;
    background: white;
    margin: 16px 0;
    transition: all ease 0.2s;
    
  }
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }
  .thumbnail {
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    border-radius: 10px;
    min-height: 100%;
  }
  img {
    max-width: 150%;
    max-height: 150%;
    display: block;
  }
  .info {
    margin: 10px 20px;
    height: 10rem;
  }
  .post-author {
    margin: 10px 20px;
  }
</style>