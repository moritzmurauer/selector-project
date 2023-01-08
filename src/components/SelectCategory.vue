<template>
  <div class="flex justify-center space-x-4 mt-8 mr-8">
    <!-- All Categories -->
    <router-link :to="{ name: 'Artworks' }">
      <div class="chip bottom">
        <div class="d-flex align-items-center">
          <p>All</p>
        </div>
      </div>
    </router-link>

    <!-- Cliffs -->
    <router-link :to="{ name: 'Category', params: { id: drawing } }">
      <div class="chip bottom">
        <div class="d-flex align-items-center">
          <p>{{ drawing }}</p>
        </div>
      </div>
    </router-link>

    <!-- Swings -->
    <router-link :to="{ name: 'Category', params: { id: photography } }">
      <div class="chip bottom">
        <div class="d-flex align-items-center">
          <p>{{ photography }}</p>
        </div>
      </div>
    </router-link>

    <!-- Pools -->
    <router-link :to="{ name: 'Category', params: { id: illustration } }">
      <div class="chip bottom">
        <div class="d-flex align-items-center">
          <p>{{ illustration }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const photography = ref("Photography");
    const illustration = ref("Illustration");
    const drawing = ref("Drawing");

    return { photography, illustration, drawing };
  },
};
</script>

<style>
.icon {
  width: 20px;
  margin-right: 5px;
}

.bottom {
  margin-bottom: 100px;
}

a.router-link-exact-active .chip {
  background-color: #07506842;
}
</style>
