<template>
  <div>
    <div>
      <h2 class="text-xl">Artist of the week.</h2>
      <p>Handselected art from indonesian based artists.</p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 spacy-y-10 mt-10"
    >
      <div>
        <div class="thumbnail mb-4">
          <img src="@/assets/imgs/photography.png" alt="photography" />
        </div>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <img src="@/assets/imgs/photography.png" alt="photography" />
        </div>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <img src="@/assets/imgs/photography.png" alt="photography" />
        </div>
      </div>
      <div>
        <div class="thumbnail mb-4">
          <img src="@/assets/imgs/photography.png" alt="photography" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  border-radius: 10px;
  min-height: 100%;
}
</style>
