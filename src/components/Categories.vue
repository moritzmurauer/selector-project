<template>
  <div>
    <div>
      <h2 class="text-xl">Explore different categories.</h2>
      <p>Handselected art from indonesian based artists.</p>
    </div>
    <div class="attribute-container mt-8">
      <router-link :to="{ name: 'Category', params: { id: photography } }">
        <div>
          <div class="thumbnail">
            <img src="@/assets/imgs/photography.png" alt="photography" />
          </div>
          <h2 class="mt-1">
            Photography
          </h2>
        </div>
      </router-link>

      <router-link :to="{ name: 'Category', params: { id: drawing } }">
        <div>
          <div class="thumbnail">
            <img src="@/assets/imgs/drawing.png" alt="drawing" />
          </div>
          <h2 class="mt-1">
            Drawings
          </h2>
        </div>
      </router-link>

      <router-link :to="{ name: 'Category', params: { id: illustration } }">
        <div>
          <div class="thumbnail">
            <img src="@/assets/imgs/graphic.png" alt="graphic" />
          </div>
          <h2 class="mt-1">
            Illustration
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const illustration = ref("Illustration");
    const drawing = ref("Drawing");
    const photography = ref("Photography");

    return { illustration, drawing, photography };
  },
};
</script>

<style scoped>
.attribute-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-wrap: wrap;
  grid-gap: 60px;
}

.thumbnail {
  width: 100%;
  max-height: 360px;
  overflow: hidden;
  border-radius: 10px;
  min-height: 100%;
}

@media only screen and (max-width: 1050px) {
  .attribute-container {
    padding: 0 20px;
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 400px) {
  .attribute-container {
    display: flex;
    text-align: center;
  }

  .headline-attribute {
    padding: 0 20px;
  }
}
</style>
