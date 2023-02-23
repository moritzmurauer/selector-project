<template>
  <div v-if="users" class="content mb-8">
    <!-- A list of the top 10 contributors who posted the most spots yet -->

    <h1 class="text-xl mt-10">Explore all users</h1>
    <div
      class="container mx-auto grid
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pt-8 gap-16"
    >
      <div v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'UserPosts', params: { id: user.id } }">
          <div class="mt-2 p-1">
            <div class="d-flex">
              <div
                class="pr-1 cover transform transition duration-300 hover:scale-110"
                v-if="users"
              >
                <img
                  class="rounded object-cover object-center"
                  v-if="user.avatarUrl"
                  :src="user.avatarUrl"
                />

                <img
                  class="object-cover object-center"
                  v-if="!user.avatarUrl"
                  src="@/assets/default.png"
                />
              </div>
              <div>
                {{ user.displayName }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection";

export default {
  name: "Explore",
  setup() {
    const { documents: users } = getCollection("users");

    return {
      users,
    };
  },
};
</script>

<style scoped>
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 100px;
  max-height: 100px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  height: auto;
}

.transform {
  transform: scale(100%);
}

.scale-110 {
  transform: scale(110%);
}
</style>
