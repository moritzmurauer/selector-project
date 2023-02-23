<template>
  <div
    class="content mx-20px grid
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-8 gap-2"
  >
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
        <div class="single">
          <div class="thumbnail">
            <img class="h-80 object-cover object-center" :src="post.coverUrl" />
          </div>
          <router-link :to="{ name: 'UserPosts', params: { id: post.userId } }">
            <div>
              <h2>{{ post.title }}</h2>
              <p class="text-sm">by {{ post.userName }}</p>
            </div>
          </router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style scoped>
.thumbnail {
  overflow: hidden;
}

.thumbnail img {
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
}
</style>
