<template>
  <div
    class="container mx-auto grid
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-32 pt-8 gap-2"
  >
    <div v-for="post in posts" :key="post.id">
      <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
        <div class="single">
          <div class="thumbnail">
            <img class="h-96" :src="post.coverUrl" />
          </div>
          <router-link :to="{ name: 'UserPosts', params: { id: post.userId } }">
            <div>
              <p>{{ post.userName }}</p>
            </div>
            <div>
              {{ post.category }}
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

<style scoped></style>
