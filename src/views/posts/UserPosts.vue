<template>
  <div class="mx-auto pt-12">
    <!-- Userinfo -->

    <div>
      <div v-if="userInfo">
        <div class="flex items-center justify-center my-div">
          <div class="text-center mb-12">
            <img
              class="w-48 h-48 rounded-full mx-auto object-cover object-center"
              v-if="userInfo.avatarUrl"
              :src="userInfo.avatarUrl"
            />
            <h1 class="mt-2 text-4xl">{{ userInfo.displayName }}</h1>
            <p class="mt-2">{{ userInfo.bio }}</p>
            <button
              v-if="!ownership && userInfo.website"
              class="btn-full rounded-full mt-4"
            >
              <a
                :href="userInfo.website"
                target="_blank"
                rel="noopener noreferrer"
                >get in touch</a
              >
            </button>
            <div
              class="mt-8 border rounded p-3"
              v-if="!userInfo.bio && !userInfo.avatarUrl"
            >
              <div v-if="isUserMatch && user">
                <p class="text-gray-500">still looking a bit empty here :-(</p>
                <p class="mb-4 text-gray-500">update your profile here:</p>
                <router-link class="mt-4" :to="{ name: 'AddProfileInfo' }"
                  ><button class="btn-outline rounded-full">
                    Add some spice to your profile
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <div v-if="posts" class="bg-white">
      <!-- Grid 1 -->
      <div v-if="userInfo.grid === 'Single Grid'">
        <div
          class="grid
sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 py-8 px-225px "
        >
          <div
            class="ml-4 flex justify-center"
            v-for="post in posts"
            :key="post.id"
          >
            <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
              <div>
                <img
                  class="h-300px w-auto object-cover object-center mt-2"
                  :src="post.coverUrl"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Grid 2 -->
      <div v-if="userInfo.grid === 'Double Grid'">
        <div
          class="grid
sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-8 px-225px"
        >
          <div class="ml-4" v-for="post in posts" :key="post.id">
            <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
              <div>
                <img
                  class="h-300px w-auto object-cover object-center"
                  :src="post.coverUrl"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Grid 3 -->
      <div v-if="userInfo.grid === 'Triple Grid'">
        <div
          class="grid
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-8 px-225px"
        >
          <div
            class="ml-4 flex justify-center"
            v-for="post in posts"
            :key="post.id"
          >
            <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
              <div>
                <img
                  class="h-300px w-auto object-cover object-center"
                  :src="post.coverUrl"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "@/composables/getUser";
import getCollection from "@/composables/getCollection";
import getDocument from "@/composables/getDocument";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";

export default {
  name: "UserPosts",
  setup() {
    const route = useRoute();
    const user = ref(getUser().user);
    const userInfo = ref(getDocument("users", route.params.id).document);
    const posts = ref(
      getCollection("posts", ["userId", "==", route.params.id]).documents
    );
    const grid = computed(() => {
      return {
        posts: posts.value,
      };
    });
    // check if logged in user is page owner
    const isUserMatch = computed(() => {
      return route.params.id === user.value.uid;
    });

    return { user, userInfo, route, posts, grid, isUserMatch };
  },
};
</script>

<style></style>
