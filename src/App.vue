<template>
  <Navbar />
  <div>
    <router-view :key="route.path" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useRoute } from "vue-router";

export default {
  components: { Navbar },

  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>
<style></style>
