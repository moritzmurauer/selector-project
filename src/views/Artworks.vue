<template>
  <!-- All posts with category selector -->
  <div class="home pt-2 mb-8">
    <h1 class="text-3xl text-center mt-12">Explore The Collection.</h1>
    <div v-if="error" class="error">Could not fetch the data</div>
    <SelectCategory />
    <div v-if="artWorks">
      <ListView :posts="artWorks" />
    </div>
    <div
      class=" content mx-20px grid
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  pt-8 gap-2"
      v-else
    >
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
      <div class="thumbnail">
        <div class="bg-gray-200 h-80 w-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ListView from "../components/ListView.vue";
import SelectCategory from "@/components/SelectCategory.vue";
import getCollection from "../composables/getCollection";
import { ref } from "vue";

export default {
  name: "Artworks",
  components: { ListView, SelectCategory },

  setup() {
    const search = ref("");
    const { error, documents: artWorks } = getCollection("posts");

    return { error, search, artWorks };
  },
};
</script>

<style scoped>
input {
  margin: 0;
  margin-bottom: 30px;
  margin-top: 5px;
}
</style>
