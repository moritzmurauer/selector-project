<template>
  <!-- All posts with category selector -->
  <div class="home pt-2 mb-8">
    <div v-if="error" class="error">Could not fetch the data</div>
    <SelectCategory />
    <div v-if="artWorks">
      <ListView :posts="artWorks" />
    </div>
    <div class="content" v-else>
      loading...
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
