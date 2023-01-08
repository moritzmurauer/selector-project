<template>
  <!-- Categories and Spot overview -->
  <div class="home pt-2">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="posts">
      <SelectCategory />
      <ListView :posts="postsWithCategory" />
    </div>
  </div>
</template>

<script>
import ListView from "@/components/ListView.vue";
import SelectCategory from "@/components/SelectCategory.vue";
import getCollection from "@/composables/getCollection";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Home",
  components: { ListView, SelectCategory },

  setup() {
    const route = useRoute();
    const { error, documents: posts } = getCollection("posts");

    const postsWithCategory = computed(() => {
      return posts.value.filter((parameter) =>
        parameter.category.includes(route.params.id)
      );
    });

    const currentCategory = route.params.id;

    return { error, postsWithCategory, posts, currentCategory };
  },
};
</script>

<style scoped></style>
