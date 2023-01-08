<template>
  <div v-if="users" class="content mb-8">
    <!-- A list of the top 10 contributors who posted the most spots yet -->

    <h1 class="text-xl mt-10">Explore all users</h1>
    <div v-for="user in users" :key="user.id">
      <div class="card mt-2 p-1">
        <div class="d-flex mt-1 grid">
          <div class="d-flex">
            <div class="pr-1 " v-if="users">
              <img
                class="avatar avatar-user"
                v-if="user.avatarUrl"
                :src="user.avatarUrl"
              />

              <div>
                {{ user.displayName }}
              </div>
              <img
                class="w-60 h-60"
                v-if="!user.avatarUrl"
                src="@/assets/default.png"
              />
            </div>
            <div>
              {{ user.style }}
            </div>
          </div>
        </div>
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

<style scoped></style>
